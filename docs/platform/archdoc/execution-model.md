---
title: Execution Model
date: 2018-10-09 18:30:41 +0000

---
# Execution Model

## Overview

Each instance of the **Rho Virtual Machine** (RhoVM) maintains an environment that repeatedly applies the low-level rho-calculus reduction rule, expressed in the high-level Rholang contracting language, to the elements of a persistent key-value data store [\[1\]](https://rchain-architecture.readthedocs.io/en/latest/execution_model/rhovm.html#id2). The “state” of RhoVM is analogous to the state of the blockchain.

[![../_images/execution_storage.png](https://rchain-architecture.readthedocs.io/en/latest/_images/execution_storage.png)](https://rchain-architecture.readthedocs.io/en/latest/_images/execution_storage.png)

_Figure - RhoVM as a back-to-back key-value store and execution engine_

The execution of a contract affects the _environment_ and _state_ of an instance of RhoVM. In this case, the usage of the term “environment” does not refer to the execution environment exclusively, but to the configuration of the key-value structure. Environment and state are the mapping of names to locations in memory, and of locations in memory to values, respectively. Variables directly reference locations, which means that environment is equivalently a mapping of names to variables. A program typically modifies one or both of these associations at runtime. Environmental modifications occur with the lexical scoping rules of Rholang, and values may be simple or complex i.e. primitive values or complete programs.

[![../_images/bindings_diagram.png](https://rchain-architecture.readthedocs.io/en/latest/_images/bindings_diagram.png)](https://rchain-architecture.readthedocs.io/en/latest/_images/bindings_diagram.png)

_Figure - Two-stage binding from names to values_

RhoVM operates against a key-value data store. **A state change of RhoVM is realized by an operation that modifies which key maps to what value.** Since, like Rholang, RhoVM is derived from the rho-calculus model of computation, that operation is the low-level rho-calculus reduction rule. Effectively, the reduction rule, known as the “COMM” rule, is a substitution that defines a computation `P` to be performed if a new value is observed at a key. A key is analogous to a name in that it references a location in memory which holds the value being substituted. In the following example, `key` is a key and `val` is the value being substituted:

    for ( val <- key )P | key! ( @Q ) -> P { @Q/val }
    

Barring consensus, this is the computational model of a concurrent protocol that stores a contract on the blockchain. On some thread, the output process `key!` stores the code of a contract `@Q` at the location denoted by `key`. On another thread running concurrently, the input process `for ( val <- key )P` waits for a new value `val` to appear at `key`. When some `val` appears at `key`, in this case `@Q`, `P` is executed in an environment where `@Q` is substituted for every occurrance of `val`. This operation modifies the value that `key` references i.e. `key` previously mapped to a generic `val` but now it maps to the code of a contract `@Q`, which qualifies a reduction as a state transition of the RhoVM.

The synchronization of an input and output process at `key` is the event that triggers a state transition of RhoVM. At first glance, the output process, which stores the contract `@Q` to the location denoted by `key`, appears to constitute a state transition in itself. However, the rho-calculus reduction semantics have an _observability_ requirement. For any future computation `P` to occur, the reduction rule requires that the input process `for ( val <- key) P` _observes_ the assignment at `key`. This is because only the input term defines future computation, which means that the output term alone is computationally insignificant. Therefore, no _observable_ state transition occurs until the input and output terms synchronize at `key`. This obvservability requirement is enforced at compile-time to prevent DDoS attacks by repeated output `key!(@Q)` invocation.

It has been demonstrated that an application of the rho-calculus reduction rule, to a data element of a key-value data store, constitutes a state transition of an instance of the RhoVM. The goal, however, is to verify and maintain every state transition that is specified by any contract to ever execute on an instance of the RhoVM. This means that the configuration history of the key-value data store must be maintained through modification, hence it being a _persistent_ data structure. Therefore, each key must map to the verified history of reductions to occur at that location:

[![../_images/transaction_history.png](https://rchain-architecture.readthedocs.io/en/latest/_images/transaction_history.png)](https://rchain-architecture.readthedocs.io/en/latest/_images/transaction_history.png)

_Figure - Reduction/transaction history of a location in memory_

Each key maps to a list of reductions which is, in fact, the “transaction history” of an address. The history of transactions `{ for(val1 <- keyn).P1 | keyn!(@Q1), ... , for(valn <- keyn).Pn | keyn!(@Qn) } -> { P1{@Q1/val1}, ... , Pn{@Qn/valn} }`denotes the modifications that have been made to the contract `@Q`, where `@Qn` is the most current version in store. It is important to recognize that this scheme is a top-level transaction on the RChain platform. The messages being passed are contracts themselves, which most often occurs in client-system, or system-system interactions. However, each contract `@Q` may, itself, execute many lower-level transactions on simpler values.

After a transaction/reduction is applied, it is subjected to consensus. Consensus verifies that the transaction history, `{ for(val1 <- keyn).P1 | keyn!(@Q1) … for(valn <- keyn).Pn | keyn!(@Qn) }`, of `keyn`, is consistently replicated across all nodes running that instance of RhoVM. Once transaction histories are verified, the most recent transaction is added to the transaction history. The same consensus protocol is applied over the range of keys `{ key1 -> val1 … keyn -> valn }` as transactions are committed to those locations.

By extension, transaction blocks represent sets of reductions that have been applied to elements of the persistent key-value store, and transaction histories represent verifiable snapshots of the state configurations and transitions of an instance of the Rho Virtual Machine. Note that the consensus algorithm is applied if, and only if, node operators propose conflicting reduction histories.

To summarize:

1. RhoVM is the composition of the rho-calculus reduction semantics, expressed in Rholang, and a persistent key-value data store.
2. The rho-calculus reduction rule substitutes the value at a key for another value, where a named channel corresponds to a key, and values may be simple or complex.
3. Substitutions are transactions, which manifest as differences in the bytecode stored at a key. The accurate replication of those bytecode differences, across all nodes operating that instance of RhoVM, is verified via the consensus algorithm.

\[footnote here. please revisit\]

| --- | --- |
| \[1\] | The RhoVM “Execution Environment” will later be introduced as the “Rosette VM”. The choice to use Rosette VM hinged on two factors. First, the Rosette system has been in commercial production for over 20 years. Second, Rosette VM’s memory model, model of computation, and runtime systems provide the support for concurrency that RhoVM requires. RChain has pledged to perform a modernized re-implementation of Rosette VM, in Scala, to serve as the initial RhoVM execution environment. |

### A Brief Aside on Scalability

From the perspective of a traditional software platform, the notion of “parallel” VM instances is redundant. It is assumed that VM instances operate independently of each other. Accordingly, there is no “global” RhoVM. Instead, there is a multiplex of independently operating RhoVM instances running on nodes across the network at any given moment - each executing and validating transactions for their associated shards, or as we have been referring to them, namespaces.

This design choice constitutes system-level concurrency on the RChain platform, where instruction-level concurrency is given by Rholang. Hence, when this publication refers to a single instance of RhoVM, it is assumed that there are a multiplex of RhoVM instances simultaneously executing a different set of contracts for a different namespace.

## Execution Environment

### What Is Rosette?

Rosette is a reflective, object-oriented language that achieves concurrency via actor semantics. The Rosette system (including the Rosette virtual machine) has been in commercial production since 1994 in Automated Teller Machines. Because of Rosette’s demonstrated reliability, RChain Cooperative has committed to completing a clean-room reimplementation of Rosette VM in Scala (targeting the JVM). There are two main benefits of doing so. First, the Rosette language satisfies the instruction-level concurrency semantics expressed in Rholang. Second, Rosette VM was intentionally designed to support a multi-computer (distributed) system operating on an arbitrary number of processors. For more information, see [Mobile Process Calculi for Programming the Blockchain](http://mobile-process-calculi-for-programming-the-new-blockchain.readthedocs.io/en/latest/).

### Model Checking and Theorem Proving

In the RhoVM and potentially in upstream contracting languages, there are a variety of techniques and checks that will be applied during compile-time and runtime. These help address requirements such as how a developer and the system itself can know a priori that contracts that are well-typed will terminate. Formal verification will assure end-to-end correctness via model checking (such as in SLMC) and theorem proving (such as in Pro Verif). Additionally, these same checks can be applied during runtime as newly proposed assemblies of contracts are evaluated.

### Discovery Service

An advanced discovery feature that will ultimately be implemented enables searching for compatible contracts and assembling a new composite contract from other contracts. With the formal verification techniques, the author of the new contract can be guaranteed that when working contracts are plugged together they will work as well as a single contract.

## Compilation

To allow clients to execute contracts on the RhoVM, RChain has developed a compiler pipeline that starts with Rholang source-code. Rholang source-code first undergoes transcompilation into Rosette source-code. After analysis, the Rosette source-code is compiled into a Rosette intermediate representation (IRs), which undergoes optimization. From the Rosette IR, Rosette bytecode is synthesized and passed to the VM for local execution. Each translation step within the compilation pipeline is either provably correct, commercially tested in production systems, or both. This pipeline is illustrated in the figure below:

[![../_images/compilation_strategy.png](https://rchain-architecture.readthedocs.io/en/latest/_images/compilation_strategy.png)](https://rchain-architecture.readthedocs.io/en/latest/_images/compilation_strategy.png)

_Figure - RChain compilation strategy_

1. **Analysis**: From Rholang source-code, or from another smart contract language that compiles to Rholang, this step includes:

   > 1. analysis of computational complexity
   > 2. injection of code for the rate-limiting mechanism
   > 3. formal verification of transaction semantics
   > 4. desugaring of syntax
   > 5. simplification of functional equivalencies
2. **Transcompilation**: From Rholang source-code, the compiler:

   > 1. performs a source-to-source translation from Rholang to Rosette source-code.
3. **Analysis**: From Rosette source-code, the compiler performs:

   > 1. lexical, syntactic, and semantic analysis of the Rosette syntax, construction of the AST; and
   > 2. synthesizes a Rosette intermediate representation
4. **Optimization**: From Rosette IR, the compiler:

   > 1. optimizes the IR via redundancy elimination, subexpression elimination, dead-code elimination, constant folding, induction variable identification and strength simplification
   > 2. synthesizes bytecode to be executed by the Rosette VM

### Rate-limiting Mechanism

The compilation pipeline will implement a rate-limiting mechanism that is related to some calculation of processing, memory, storage, and bandwidth resources. Because the rho-calculus reduction rule is the atomic unit of computation on the RChain platform, the calculation of computation complexity is necessarily correlated to the amount of reductions performed per contract. This mechanism is needed in order to recover costs for the hardware and related operations. Although Ethereum (Gas) has similar needs, the mechanisms are different. Specifically, the metering will not be done at the VM level, but will be injected in the contract code during the analysis phase of compilation. For more details visit the [\`developer wiki\`_](https://rchain-architecture.readthedocs.io/en/latest/execution_model/rhovm.html#id7). Compiler work can be seen on [GitHub](https://github.com/rchain/rchain/tree/master/rholang).
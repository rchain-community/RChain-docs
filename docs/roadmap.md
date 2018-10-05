# Roadmap

## Alpha Network

The alpha network will be the most basic proof-of-work blockchain, with a minimal set of rules to enable maximum freedom. All of the design choices are taken in the spirit of facilitating a natural equilibrium wherever possible.

Key features:

- No block size limit
- LWMA difficulty adjustment algorithm
- No mining rewards

### No block size limit
A true fee market can only exist when there is a true balance between two factors, which can both freely vary. The demand is represented by transaction fees and the supply corresponds to the available block space. When demand increases and the transaction fees rise, there should be an increase in the offer and the available block space as well. When supply increases and more block space becomes available, for example due to improvements in computer hardware, then demand should be fulfilled more efficiently and transaction fees should decrease. This is only possible when there is no artificial cap on either transaction fees or block space. At most, there should be limitations in place as a technical measure to protect against exploits, but they should be far removed from any true limiting factor and be a multiple of any reasonably expected level of supply or demand.

### LWMA difficulty adjustment algorithm
Much research has been conducted on the ideal algorithm to correct mining difficulty in order to keep block times as close to the intended interval as possible. The goal is to minimize the impact of sudden hash rate changes, as this will make it harder for miners to exploit by hopping on and off mining our blockchain. This means that the algorithm should adjust quickly to dramatic changes in hash rate. At the same time, the difficulty shouldn't adjust too quickly to temporary variance in block intervals, but should try to correctly reflect the actual hash rate. This means the algorithm should be somewhat rigid and slow to respond to small temporary changes. The LWMA difficulty adjustment algorithm has been shown to respond best to these conflicting criteria.

### No mining rewards
The Alvalor project will keep a reserve of tokens to incentivize initial mining by creating dummy transactions to pay miners a fee. This allows us to have dynamic payments for miners, which can function as de facto mining reward to bootstrap the network. It also allows us to compensate for price changes of the tokens, enabling us to decide explicitly and a posteriori how much we want to invest into the security of the network (versus other blockchains who need to make it a fixed design choice and estimate very roughly a priori).

## Grey Paper

The grey paper represents the balance between black and white, Yin & Yang, between two complementary and intertwining aspects of the Alvalor project: the philosophy and the technology. Every technological decision is taken in the context of our philosophy and the values behind our philosophy are guided by the needs of our technological ambitions. Together, they form the vision of the Alvalor project. The grey paper will highlight the interplay of these two aspects and provide a summary of where the project wants to go and why.

## White Paper

The white paper will elaborate on the technical vision of the Alvalor project. It will provide a big picture overview of the different aspects of our blockchain, as well as discussions about how to implement them initially and in the future. Some of the key aspects will be cooperative forking to enable competition between forks, crosschain communication to enable cooperation between forks and a multi-layer architecture to enable advanced functionality on higher layers.

## Black Paper

The black paper will describe the philosophical vision of the Alvalor project. It will elaborate on the values which function as the guiding principles for decisions. It will follow them to their conclusion in terms of what their consequences are and what positive properties they culminate in.

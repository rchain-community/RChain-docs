<template functional>
  <div class="vuer" style="display: flex; padding: 30px 0;">
    <div class="avatar" style="flex:0 0 80px;">
      <img :src="require('../../assets/' + props.asset)"
           alt="" width="80" height="80" style="border-radius: 50%;">
    </div>
    <div class="profile" style="padding-left: 26px; flex: 1;">
      <h3 style="margin: 0;">
        {{ props.name }} •
        <a v-if="props.twitter"
           :href="'https://twitter.com/' + props.twitter">
          <img :alt="'@' + props.twitter" src="../../assets/twitter-black.png"
               width="20" height="20"/>
        </a>
        <a v-if="props.linkedin"
           :href="'https://www.linkedin.com/in/' + props.linkedin">
          <img alt="LinkedIn" src="../../assets/linkedin-black.png"
               width="20" height="20"/>
        </a>
      </h3>

      <p style="font-size: 0.84em;">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

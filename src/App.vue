<template>
  <div id="app"> 
    <headerComponent />
    <router-view/>
    <footerComponent /> 
  </div>
</template>

<script>
import headerComponent from './components/header.vue'
import footerComponent from './components/footer.vue'



export default {
  name: 'App',
  components: {
    headerComponent,
     footerComponent
  },
  data: function () {
    return {
      inner: 'MUSC Hollings Cancer Center',
      separator: '|',
      complement: 'Charleston, SC'
    }
  },
  head: {
    title: function () {
      return {
        inner: this.inner,
        separator: this.separator,
        complement: this.complement
      }
    },
    meta: [
      { name: 'description', content: 'Hollings Cancer Center advances cancer care through innovative research, exceptional education and training, quality patient care and cancer prevention efforts.' }
    ],
    link: [
      { href: 'https://hollingscancercenter.musc.edu/-/media/images/favicons/health-favicon.ashx', rel: 'shortcut icon', as: 'link' },
      { href: 'https://hollingscancercenter.musc.edu/-/media/images/apple-touch-icons/health-apple-touch-icon.ashx', rel: 'apple-touch-icon', as: 'link' },
    //   { href: 'https://hollingscancercenter.musc.edu/bundles/musc/css/hollings?v=3TR5VlfcUfusZSuabAwNXWPV6aDvxieh35Wbu7PgxPo1', rel: 'stylesheet', as: 'link' },
      { href: require("./css/hollings.css"), rel: 'stylesheet', as: 'link' },
      { rel: 'svg', href: require('./img/musc-svg-sprite.svg'), type: 'image/svg' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://hollingscancercenter.musc.edu/bundles/musc/topJs?v=rD9yxcIfC-_zwpaJ_9UPbUY1Niam5dFE8OFiugxkBeM1', async: true, body: false },
      { type: 'text/javascript', src: 'https://hollingscancercenter.musc.edu/bundles/musc/middleJs?v=QWsq3ycEokzZKY1SQt66Rs4AUAEDkyYS1yKk7KldNJI1', async: true, body: false },
      { type: 'text/javascript', src: 'https://hollingscancercenter.musc.edu/bundles/musc/bottomJs?v=7gF8kxk9hMI6bLdwUF2kvJEC1DaobKNboGzDN3LehKI1', async: true, body: true }
    ]
  }
}
</script>
<style>

</style>

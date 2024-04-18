<template>
  <div class="l-content-outer">

    <div class="l-content-wrap">
 
      <main id="main" class="l-content-primary" aria-label="Content" style="margin-top: 20px">
 
        <!-- <contentComponent
          msg=""
        /> -->     

          <tabComponent /> 
       <!-- <newView />
         <profileComponent /> -->
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import tabComponent from '@/components/tab_Limited.vue'
//import profileComponent from '@/components/profile.vue'

//import newView from '@/components/newLayout'

export default {
  name: 'About',
  components: {
    // contentComponent,
    tabComponent
  //  profileComponent

   // newView
  },
  
}
</script>

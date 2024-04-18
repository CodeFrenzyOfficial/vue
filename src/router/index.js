// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import ProfilePage from '../views/ProfilePage.vue'


// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: "/ProfilePage",
//     name: "ProfilePage",
//     component: ProfilePage
//   }
// ]



// const router = new VueRouter({
//   routes,
//   mode: 'history'
 
 
// })

//export default router
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue'
import ProfilePage from '../views/ProfilePage.vue'
import ProfilePageOriginal from '../components/profile_copy.vue'
//import ProfilePage from '../views/profileLimited_Workspacecopy.vue'


Vue.use(Router);

const router = new Router({
  mode: 'history', // Use history mode to avoid hashes
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ProfilePage',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/ProfilePageOriginal',
      name: 'ProfilePageOriginal',
      component: ProfilePageOriginal
    }
  ]
});

export default router;

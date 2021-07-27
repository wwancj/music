import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: './music',
    children:[{
    path:'/music',
    component:()=>import ('../views/music')
  }, {
    path:"/bofangqi",
    name:"bofangqi",
    component:()=>import('../views/bofangqi')
  },
  {
    path:"/playlist",
    name:"playlist",
    component:()=>import('../views/playlist')
  },
  {
    path:"/musiclist",
    name:"musiclist",
    component:()=>import('../views/musiclist')
  },{
    path:"/texiao",
    name:"texiao",
    component:()=>import("../views/texiao")
  }

  
  
]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
 
];

const router = new VueRouter({
  routes,
});

export default router;

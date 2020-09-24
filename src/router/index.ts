import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import auth$AuthLayout from '@/layout/AuthLayout.vue';
import auth$Login from '../views/Login.vue';
import pizzatask$Dashboard from '../views/Dashboard.vue';
import pizzatask$RootLayout from '@/layout/RootLayout.vue';
import pizzatask$Header from '@/views/nav/Header.vue';
import pizzatask$LeftNav from '@/views/nav/LeftNav.vue';
import pizzatask$Footer from '@/views/nav/Footer.vue';


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [


  { path: '/auth', meta : {},   components : { default : auth$AuthLayout},
	children : [
		{ path: '', redirect: { name : 'Auth.Login'}}, 
		{ path: 'login', meta : {},  name: 'Auth.Login', components : { default : auth$Login}  }
] },


  {path: '/', meta : {},   components : { default : pizzatask$RootLayout},
		children : [
			 { path: '/', redirect: { name : 'Auth.Login'}}, 
       { path: 'dashboard', meta : {},  name: 'Root.Dashboard', components : { header : pizzatask$Header, leftnav : pizzatask$LeftNav, footer : pizzatask$Footer, default : pizzatask$Dashboard}}
    ]
  }


  
]

const router = new VueRouter({
  routes
})

export default router

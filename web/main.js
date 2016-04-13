import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import registerRouters from './routers.js';


require('./base.css');

Vue.use(Router);

var router = new Router();

registerRouters(router);

router.start(App, '#app');

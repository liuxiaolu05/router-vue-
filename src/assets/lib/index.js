//es6
require("babel-polyfill");
import $ from "jquery";
Object.assign(self, {$, jQuery: $});
import jCookie from "@@/lib/jquery.cookie";
jCookie($);
import axios from "@@/plugin/token-axios"
import Vue from "vue";
import Vuex from "vuex";
let iView = require('iview');
import "iview/dist/styles/iview.css";
Vue.use(iView);//依赖
Vue.use(Vuex);// 使用Vuex
Object.assign(self, {Vue, axios,Vuex});
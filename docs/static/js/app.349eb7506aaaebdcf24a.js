webpackJsonp([1],{GPFt:function(e,t){},KVa9:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i={name:"Keyboard",data:function(){return{key:"",keyCode:"",keysVisible:!1}},computed:{displayKeyInformation:function(){var e=this;return window.addEventListener("keypress",function(t){e.key=t.key,e.keyCode=t.keyCode,e.keysVisible=!0})}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._v("\n\t"+e._s(e.displayKeyInformation)+"\n\n\t"),e.keysVisible?n("div",[n("div",{staticClass:"key"},[e._v(e._s(e.key))]),e._v(" "),n("div",{staticClass:"key-code"},[e._v(e._s(e.keyCode))])]):n("div",[e._m(0)]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"begin"},[t("h3",[this._v("Press a key, literally any key on your keyboard to see its value and keycode 😻")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[this._v("Made using "),t("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[this._v("Vue.js")]),this._v(" with "),t("span",{staticStyle:{color:"#e25555","font-size":"16px"}},[this._v("♥")]),this._v(" by "),t("a",{attrs:{href:"https://github.com/bdimitrovski",target:"_blank"}},[this._v("@bdimitrovski")])])}]};var r={name:"App",components:{Keyboard:n("VU/8")(i,a,!1,function(e){n("KVa9")},"data-v-f90f843a",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Keyboard")],1)},staticRenderFns:[]};var c=n("VU/8")(r,o,!1,function(e){n("GPFt")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:c},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.349eb7506aaaebdcf24a.js.map
(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],v=0,f=[];v<s.length;v++)i=s[v],r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/webgames/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"31f2":function(e,t,a){"use strict";var n=a("e39b"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:""}},[a("v-navigation-drawer",{attrs:{app:"",clipped:"",fixed:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{"two-line":"",subheader:""}},[a("v-list-tile",{attrs:{to:"/"}},[a("v-list-tile-action",[a("v-icon",[e._v("home")])],1),a("v-list-tile-content",[e._v("Home")])],1),a("v-subheader",{attrs:{inset:""}},[e._v("Games")]),e._l(e.gameList,function(t){return a("v-list-tile",{key:t.title,attrs:{to:{path:t.path}}},[a("v-list-tile-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-tile-content",[e._v("\n          "+e._s(t.title)+"\n        ")])],1)})],2)],1),a("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[a("v-toolbar-side-icon"),a("v-toolbar-title",[e._v("Title")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"})],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{staticClass:"footer",attrs:{app:""}},[e._v("\n    © Emkons 2018\n  ")])],1)},i=[],s={name:"app",data:function(){return{drawer:!1,gameList:[{title:"TicTac",icon:"fa-hashtag",path:"/game/tictac"}]}}},c=s,l=a("2877"),u=a("6544"),v=a.n(u),f=a("7496"),d=a("a523"),p=a("549c"),m=a("553a"),b=a("132d"),h=a("8860"),g=a("ba95"),_=a("40fe"),w=a("5d23"),y=a("f774"),O=a("9910"),x=a("e0c7"),V=a("71d9"),T=a("2a7f"),j=a("706c"),C=Object(l["a"])(c,o,i,!1,null,null,null);C.options.__file="App.vue";var P=C.exports;v()(C,{VApp:f["a"],VContainer:d["a"],VContent:p["a"],VFooter:m["a"],VIcon:b["a"],VList:h["a"],VListTile:g["a"],VListTileAction:_["a"],VListTileContent:w["a"],VNavigationDrawer:y["a"],VSpacer:O["a"],VSubheader:x["a"],VToolbar:V["a"],VToolbarItems:T["a"],VToolbarSideIcon:j["a"],VToolbarTitle:T["b"]});var S=a("2f62");n["a"].use(S["b"]);var k=!1,W=new S["b"].Store({strict:k}),L=a("8c4f"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},A=[],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[e._v("\n    "+e._s(e.msg)+"\n")])},H=[],q={name:"HelloWorld",props:{msg:String}},M=q,$=(a("31f2"),a("a722")),I=Object(l["a"])(M,G,H,!1,null,null,null);I.options.__file="HelloWorld.vue";var X=I.exports;v()(I,{VLayout:$["a"]});var F={name:"home",components:{HelloWorld:X}},J=F,B=Object(l["a"])(J,E,A,!1,null,null,null);B.options.__file="Home.vue";var D=B.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{staticClass:"header",attrs:{xs12:"","text-xs-center":""}},[e.gameOver?e._e():a("div",{staticClass:"status"},[e._v("\n                Current move to: "+e._s(e.currentPlayer)+"\n            ")]),e.gameOver?a("div",{staticClass:"result"},[e.winner?a("span",{staticClass:"winner"},[e._v("\n                    "+e._s(e.winner)+" wins the Game!\n                ")]):e._e(),e.winner?e._e():a("span",{staticClass:"tie"},[e._v("\n                    It's a tie!\n                ")]),a("v-btn",{attrs:{color:"success"},on:{click:e.restartGame}},[e._v("Play again")])],1):e._e()]),a("v-flex",{attrs:{xs12:"",sm10:"",md6:"","text-sm-center":""}},[a("div",{staticClass:"board"},e._l(e.board,function(t,n){return a("div",{key:n,staticClass:"board-square",class:{active:t.highlighted},on:{click:function(t){e.revealSquare(n)}}},[e._v("\n                "+e._s(t.value)+"\n                ")])}),0)])],1)],1)},Y=[],z=a("be94"),K=a("3835"),Q=(a("f751"),a("ac6a"),a("6c7b"),function(){return{board:Array(9).fill().map(function(){return{value:null,highlighted:!1}}),currentPlayer:"X",gameOver:!1,winner:!1,moves:0}}),R=Q(),U={reveal:function(e,t){e.board[t].value=e.currentPlayer,e.moves++},changePlayer:function(e){e.currentPlayer="X"===e.currentPlayer?"O":"X"},highlightWinCondition:function(e,t){t.forEach(function(t){e.board[t].highlighted=!0})},setWinner:function(e,t){e.winner=t,e.gameOver=!0},resetState:function(e){Object.assign(e,Q())}},Z={revealSquare:function(e,t){var a=e.commit,n=e.state,r=e.dispatch;n.gameOver||n.board[t].value||(a("reveal",t),r("checkWinCondition"),a("changePlayer"))},checkWinCondition:function(e){var t=e.commit,a=e.state,n=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]],r=!1;n.forEach(function(e){var n=Object(K["a"])(e,3),o=n[0],i=n[1],s=n[2];a.board[o].value&&a.board[o].value===a.board[i].value&&a.board[o].value===a.board[s].value&&(t("highlightWinCondition",e),t("setWinner",a.currentPlayer),r=!0)}),r||a.moves!==a.board.length||t("setWinner",null)},restartGame:function(e){var t=e.commit;t("resetState")}},ee={namespaced:!0,actions:Z,mutations:U,state:R};W.state.tictac||W.registerModule("tictac",ee);var te=Object(S["a"])("tictac"),ae=te.mapState,ne=te.mapActions,re={name:"TicTac",computed:Object(z["a"])({},ae(["board","currentPlayer","gameOver","winner","moves"])),methods:Object(z["a"])({},ne({revealSquare:"revealSquare",restartGame:"restartGame"}))},oe=re,ie=(a("a76e"),a("8336")),se=a("0e8f"),ce=Object(l["a"])(oe,N,Y,!1,null,"eacb7acc",null);ce.options.__file="TicTac.vue";var le=ce.exports;v()(ce,{VBtn:ie["a"],VContainer:d["a"],VFlex:se["a"],VLayout:$["a"]}),n["a"].use(L["a"]);var ue=new L["a"]({mode:"history",base:"/webgames/",routes:[{path:"/",name:"home",component:D},{path:"/game/tictac",name:"TicTac",component:le}]});n["a"].config.productionTip=!1,new n["a"]({store:W,router:ue,render:function(e){return e(P)}}).$mount("#app")},"6c2b":function(e,t,a){},a76e:function(e,t,a){"use strict";var n=a("6c2b"),r=a.n(n);r.a},e39b:function(e,t,a){}});
//# sourceMappingURL=app.d8246333.js.map
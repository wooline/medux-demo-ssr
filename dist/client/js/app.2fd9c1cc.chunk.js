(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{159:function(e,t,r){"use strict";r.r(t);r(104),r(15),r(40),r(33),r(20),r(189);var a=r(191),n=r.n(a),o=r(3),s=r(77),i=r(182);const c=new class{getCurUser(){return Object(i.a)("get","/ajax/session").then(e=>(e.avatarUrl=InitEnv.clientPublicPath+e.avatarUrl,e))}login(e){return Object(i.a)("put","/ajax/session",{},e).then(e=>(e.data&&(e.data.avatarUrl=InitEnv.clientPublicPath+e.data.avatarUrl),e))}};const l=new class{getSettings(){return Object(i.a)("get","/ajax/project-config").then(e=>(e.logoUrl=InitEnv.clientPublicPath+e.logoUrl,e.startupPage.imageUrl=InitEnv.clientPublicPath+e.startupPage.imageUrl,e))}reportError(e){return console.log("report",e.message),Promise.resolve(!0)}};var p=r(28);let d;!function(e){e.init="init",e.configLoaded="configLoaded",e.startupImageLoaded="startupImageLoaded",e.startupCountEnd="startupCountEnd",e.startupAnimateEnd="startupAnimateEnd"}(d||(d={}));var u=r(51);function m(e){var t,r=b(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var a={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(a.decorators=e.decorators),"field"===e.kind&&(a.initializer=e.value),a}function h(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function g(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function v(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}const E={projectConfig:null,curUser:null,startupStep:d.init,loading:{global:p.c.Stop,login:p.c.Stop}};let y=function(e,t,r,a){var n=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(a){t.forEach(function(t){var n=t.placement;if(t.kind===a&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===a?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,n)},this),e.forEach(function(e){if(!f(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),a.push.apply(a,t.finishers)},this),!t)return{elements:r,finishers:a};var o=this.decorateConstructor(r,t);return a.push.apply(a,o.finishers),o.finishers=a,o},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&-1!==a.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var i=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(i)||i);e=c.element,this.addElementPlacement(e,t),c.finisher&&a.push(c.finisher);var l=c.extras;if(l){for(var p=0;p<l.length;p++)this.addElementPlacement(l[p],t);r.push.apply(r,l)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[a])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var i=s+1;i<e.length;i++)if(e[s].key===e[i].key&&e[s].placement===e[i].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return Object(s.a)(e).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=b(e.key),a=String(e.placement);if("static"!==a&&"prototype"!==a&&"own"!==a)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+a+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:a,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=v(e,"finisher"),a=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:a}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=v(e,"finisher"),a=this.toElementDescriptors(e.elements);return{elements:a,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(void 0!==a){if("function"!=typeof a)throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(a)for(var o=0;o<a.length;o++)n=a[o](n);var i=t(function(e){n.initializeInstanceElements(e,c.elements)},r),c=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},a=0;a<e.length;a++){var n,o=e[a];if("method"===o.kind&&(n=t.find(r)))if(g(o.descriptor)||g(n.descriptor)){if(f(o)||f(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(f(o)){if(f(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}h(o,n)}else t.push(o)}return t}(i.d.map(m)),e);return n.initializeClassElements(i.F,c.elements),n.runClassFinishers(i.F,c.finishers)}(null,function(e,t){return{F:class extends t{constructor(){super(...arguments),e(this)}},d:[{kind:"method",decorators:[p.i],key:"putStartup",value:function(e){return Object(o.a)({},this.state,{startupStep:e})}},{kind:"method",decorators:[p.i],key:"putCurUser",value:function(e){return Object(o.a)({},this.state,{curUser:e})}},{kind:"method",decorators:[p.i],key:"putShowLoginPop",value:function(e){return Object(o.a)({},this.state,{showLoginPop:e})}},{kind:"method",decorators:[p.i],key:"putShowNotFoundPop",value:function(e){return Object(o.a)({},this.state,{showNotFoundPop:e})}},{kind:"method",decorators:[p.i],key:"putShowSearch",value:function(e){return Object(o.a)({},this.state,{showSearch:e})}},{kind:"method",decorators:[Object(p.e)("login")],key:"login",value:async function(e){const t=await c.login(e);t.error?alert(t.error.message):(this.updateState({curUser:t.data}),n.a.success("欢迎您回来！"))}},{kind:"method",decorators:[Object(p.e)(null)],key:p.a.F_ERROR,value:async function(e){"401"===e.code?this.dispatch(this.actions.putShowLoginPop(!0)):"404"===e.code?this.dispatch(this.actions.putShowNotFoundPop(!0)):"301"===e.code||"302"===e.code?u.c.replace(e.detail):(e.message&&n.a.fail(e.message),await l.reportError(e))}},{kind:"method",decorators:[Object(p.e)()],key:"this/"+p.a.M_INIT,value:async function(){const[e,t]=await Promise.all([l.getSettings(),c.getCurUser()]);this.updateState({projectConfig:e,curUser:t,startupStep:d.configLoaded})}}]}},p.b);r(353);var w=r(355),k=r.n(w),P=r(21),j=(r(359),r(360),r(50)),C=r(164),O=r(75),S=(r(361),r(367)),N=r.n(S),L=(r(379),r(200)),x=r(0),I=r.n(x),U=r(181),D=r(76);const T=e=>e.preventDefault();var F=Object(j.b)(e=>({views:e.route.data.views,hasLogin:e.app.curUser.hasLogin}))(class extends I.a.PureComponent{render(){const{views:e,dispatch:t}=this.props,r=Object(u.e)({paths:[u.a.appMain,u.a.photosList],params:{photos:{_listKey:Object(D.f)()}}}),a=Object(u.e)({paths:[u.a.appMain,u.a.videosList],params:{videos:{_listKey:Object(D.f)()}}}),n=Object(u.e)({paths:[u.a.appMain,u.a.messagesList],params:{messages:{_listKey:Object(D.f)()}}}),o=I.a.createElement("a",{href:r,onClick:T},I.a.createElement(L.b,{type:L.a.PICTURE})),s=I.a.createElement("a",{href:a,onClick:T},I.a.createElement(L.b,{type:L.a.LIVE})),i=I.a.createElement("a",{href:n,onClick:T},I.a.createElement(L.b,{type:L.a.MESSAGE}));return I.a.createElement("div",{className:"app-BottomNav g-doc-width"},I.a.createElement(N.a,{noRenderContent:!0,barTintColor:"#108ee9",tintColor:"#ff0",unselectedTintColor:"#fff"},I.a.createElement(N.a.Item,{icon:o,selectedIcon:o,title:"组团",key:"photos",selected:!!e.photos,onPress:()=>{u.c.push(r)}}),I.a.createElement(N.a.Item,{icon:s,selectedIcon:s,title:"分享",key:"videos",selected:!!e.videos,onPress:()=>{u.c.push(a)}}),I.a.createElement(N.a.Item,{icon:i,selectedIcon:i,title:"消息",key:"messages",selected:!!e.messages,onPress:()=>{this.props.hasLogin?u.c.push(n):t(Object(p.f)(new U.b))}})))}}),A=(r(190),r(196)),R=r.n(A);r(380);var z=e=>{const{loading:t}=e;return t===p.c.Start||t===p.c.Depth?I.a.createElement("div",{className:"app-Loading "+t},I.a.createElement(R.a,{className:"loading-icon",type:"loading"}),I.a.createElement("div",{className:"wrap"})):null},M=(r(186),r(187)),_=r.n(M),V=(r(277),r(383)),q=r.n(V),B=(r(208),r(209)),K=r.n(B),G=r(4),H=(r(392),r(297));var J=Object(j.b)()(Object(H.a)()(class extends I.a.PureComponent{constructor(){super(...arguments),Object(P.a)(this,"onSubmit",()=>{const{validateFields:e,getFieldError:t}=this.props.form;e((e,r)=>{if(e){const r=Object.keys(e)[0],a=t(r).join(", ");n.a.info(a,3)}else this.props.dispatch(O.a.app.login(r))})})}render(){const{form:{getFieldProps:e}}=this.props,t=e("username",{initialValue:"",rules:[{required:!0,message:"请输入用户名！"}]}),r=e("password",{initialValue:"",rules:[{required:!0,message:"请输入密码！"}]});return I.a.createElement("div",{className:"app-LoginPop"},I.a.createElement(q.a,{className:"bd"},I.a.createElement(K.a,Object(G.a)({},t,{clear:!0,placeholder:"用户名"})),I.a.createElement(K.a,Object(G.a)({},r,{clear:!0,placeholder:"密码",type:"password"}))),I.a.createElement("div",{className:"ft"},I.a.createElement(_.a,{type:"primary",onClick:this.onSubmit},"登录"),I.a.createElement("div",{className:"links"},I.a.createElement("span",null,"+ 注册新会员"))))}})),W=r(175);r(482);var Y=()=>I.a.createElement("div",{className:"comp-NotFound"},I.a.createElement("h1",null,"Not Found")),Q=(r(483),r(485)),X=r.n(Q);r(486);var Z=Object(j.b)(e=>({showSearch:Boolean(e.app.showSearch),logoUrl:e.app.projectConfig.logoUrl,avatarUrl:e.app.curUser.avatarUrl}))(class extends I.a.PureComponent{constructor(){super(...arguments),Object(P.a)(this,"onShowSearch",()=>{this.props.dispatch(O.a.app.putShowSearch(!this.props.showSearch))})}render(){const{logoUrl:e,avatarUrl:t}=this.props;return I.a.createElement("div",{className:"app-TopNav g-doc-width"},I.a.createElement(X.a,{icon:I.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+t+")"}}),rightContent:I.a.createElement("div",{onClick:this.onShowSearch},I.a.createElement(R.a,{type:"search"}))},I.a.createElement("img",{src:e,className:"logo"})))}});r(487);let $;var ee=Object(j.b)(e=>({startupStep:e.app.startupStep,config:e.app.projectConfig.startupPage}))(class extends I.a.PureComponent{constructor(){super(...arguments),Object(P.a)(this,"timer",void 0),Object(P.a)(this,"img",void 0),Object(P.a)(this,"onCountEnd",()=>{$&&clearInterval($),this.props.dispatch(O.a.app.putStartup(d.startupCountEnd)),setTimeout(()=>{this.props.dispatch(O.a.app.putStartup(d.startupAnimateEnd))},1e3)})}render(){const{className:e}=this.props,{linkUrl:t,imageUrl:r,times:a}=this.props.config,n=t?{target:"_blank",href:t}:{};return I.a.createElement("div",{className:W.a.app+"-Welcome g-doc-width g-pre-img "+e},I.a.createElement("a",Object(G.a)({className:"link"},n,{style:{backgroundImage:"url("+r+")"}})),I.a.createElement("div",{className:"count",onClick:()=>{this.onCountEnd()}},I.a.createElement("i",{className:"iconfont icon-clock_fill"}),"跳过:",I.a.createElement("em",{className:"times",ref:e=>{this.timer=e}},a),I.a.createElement("img",{ref:e=>{this.img=e},style:{position:"absolute",width:"1px",height:"1px",visibility:"hidden"},src:r})))}componentDidMount(){const e=document.getElementById("g-init-loading");if(e){this.img.naturalWidth?this.props.dispatch(O.a.app.putStartup(d.startupImageLoaded)):(this.img.onload=()=>{this.props.dispatch(O.a.app.putStartup(d.startupImageLoaded))},this.img.onerror=()=>{this.onCountEnd()}),e.parentNode.removeChild(e);let{times:t}=this.props.config;const r=this.timer;$=setInterval(()=>{this.props.startupStep!==d.configLoaded&&(t>0?(t--,r.innerHTML=t+""):this.onCountEnd())},1e3)}}}),te=r(27);const re=Object(te.b)(O.b,"photos","Details"),ae=Object(te.b)(O.b,"photos","List"),ne=Object(te.b)(O.b,"videos","Details"),oe=Object(te.b)(O.b,"videos","List"),se=Object(te.b)(O.b,"messages","List");var ie=Object(j.b)(e=>{const t=e.app;return{showLoginPop:!(!t.showLoginPop||t.curUser.hasLogin),showNotFoundPop:!!t.showNotFoundPop,startupStep:t.startupStep,globalLoading:t.loading.global}})(class extends I.a.PureComponent{constructor(){super(...arguments),Object(P.a)(this,"onCloseLoginPop",()=>{this.props.dispatch(O.a.app.putShowLoginPop(!1))}),Object(P.a)(this,"onCloseNotFound",()=>{this.props.dispatch(O.a.app.putShowNotFoundPop(!1))})}render(){const{showLoginPop:e,showNotFoundPop:t,startupStep:r,globalLoading:a}=this.props;return I.a.createElement("div",{className:W.a.app},r!==d.init&&I.a.createElement("div",{className:"g-page"},I.a.createElement(Z,null),I.a.createElement(C.d,null,I.a.createElement(C.a,{exact:!0,path:"/",to:"/photos"}),I.a.createElement(C.b,{exact:!0,path:"/photos",component:ae}),I.a.createElement(C.b,{exact:!1,path:"/photos/:itemId",component:re}),I.a.createElement(C.b,{exact:!0,path:"/videos",component:oe}),I.a.createElement(C.b,{exact:!1,path:"/videos/:itemId",component:ne}),I.a.createElement(C.b,{exact:!0,path:"/messages",component:se}),I.a.createElement(C.b,{component:Y})),I.a.createElement(F,null)),(r===d.configLoaded||r===d.startupImageLoaded||r===d.startupCountEnd)&&I.a.createElement(ee,{className:r}),I.a.createElement(k.a,{visible:e,transparent:!0,onClose:this.onCloseLoginPop,title:"请登录",closable:!0},I.a.createElement(J,null)),I.a.createElement(k.a,{visible:t,transparent:!0,onClose:this.onCloseNotFound,title:"找不到",closable:!0},I.a.createElement(Y,null)),I.a.createElement(z,{loading:a}))}});t.default=Object(te.a)("app",E,y,{Main:ie})},175:function(e,t,r){"use strict";let a;r.d(t,"a",function(){return a}),function(e){e.app="app",e.comments="comments",e.photos="photos",e.videos="videos",e.messages="messages"}(a||(a={}))},181:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n});class a extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.detail=r}}class n extends a{constructor(){super("请登录","401")}}},182:function(e,t,r){"use strict";r.d(t,"a",function(){return s});r(52),r(41),r(33);var a=r(207),n=r.n(a),o=r(181);function s(e,t,r,a){void 0===r&&(r={}),void 0===a&&(a={}),t=t.replace(/:\w+/g,e=>{const t=e.substr(1);if(r[t]){const e=r[t];return delete r[t],encodeURIComponent(e)}return""}),Object.keys(InitEnv.apiServerPath).some(e=>{const r=new RegExp(e);return!!r.test(t)&&(t=t.replace(r,InitEnv.apiServerPath[e]),!0)});const o={method:e,url:t,params:r,data:a};return n.a.request(o).then(e=>e.data)}n.a.interceptors.response.use(e=>e,e=>{!function(e){const t=e.response?e.response.status:0,r=e.response?e.response.data:"",a=r&&r.message?r.message:"failed to call "+e.config.url;throw new o.a(a,t.toString(),r)}(e)})},200:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return c});var a=r(4),n=r(201),o=r(0),s=r.n(o);let i;!function(e){e.LIVE="icon-live",e.MESSAGE="icon-message",e.PICTURE="icon-picture",e.PLAY_CIRCLE="icon-play-circle",e.RELOAD="icon-reload",e.LOCATION="icon-location",e.HEART="icon-heart"}(i||(i={}));class c extends s.a.PureComponent{render(){const e=this.props,{type:t,text:r,textPosition:o,className:i}=e,c=Object(n.a)(e,["type","text","textPosition","className"]);return r?"left"===o?s.a.createElement("div",Object(a.a)({className:"iconfont-with-text-on-left "+(i||"")},c),s.a.createElement("span",null,r),s.a.createElement("i",Object(a.a)({className:"iconfont "+t},c))):s.a.createElement("div",Object(a.a)({className:"iconfont-with-text-on-right "+(i||"")},c),s.a.createElement("i",Object(a.a)({className:"iconfont "+t},c)),s.a.createElement("span",null,r)):s.a.createElement("i",Object(a.a)({className:"iconfont "+t+" "+(i||"")},c))}}},359:function(e,t,r){},360:function(e,t,r){},379:function(e,t,r){},380:function(e,t,r){},392:function(e,t,r){},482:function(e,t,r){},486:function(e,t,r){},487:function(e,t,r){}}]);
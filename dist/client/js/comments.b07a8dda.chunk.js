(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{160:function(e,t,a){"use strict";a.r(t);a(104),a(15),a(40),a(20),a(191);var r=a(193),s=a.n(r),i=a(3),n=a(77),o=a(28),c=a(76),l=a(182);var m=new class{searchList(e){return delete(e=Object(i.a)({},e)).articleType,Object(l.a)("get","/ajax/comments",e).then(e=>(e.listItems.forEach(e=>{e.avatarUrl=InitEnv.clientPublicPath+e.avatarUrl}),e))}getItemDetail(e){return Object(l.a)("get","/ajax/comments/:id",{id:e}).then(e=>(e.avatarUrl=InitEnv.clientPublicPath+e.avatarUrl,e.repliesList.forEach(e=>{e.avatarUrl=InitEnv.clientPublicPath+e.avatarUrl}),e))}createItem(e){return Object(l.a)("post","/ajax/comments",{},e)}};function d(e){var t,a=v(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:a,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function p(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function u(e){return e.decorators&&e.decorators.length}function h(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,t){var a=e[t];if(void 0!==a&&"function"!=typeof a)throw new TypeError("Expected '"+t+"' to be a function");return a}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}let y=function(e,t,a,r){var s=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(a){t.forEach(function(t){t.kind===a&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var a=e.prototype;["method","field"].forEach(function(r){t.forEach(function(t){var s=t.placement;if(t.kind===r&&("static"===s||"prototype"===s)){var i="static"===s?e:a;this.defineClassElement(i,t)}},this)},this)},defineClassElement:function(e,t){var a=t.descriptor;if("field"===t.kind){var r=t.initializer;a={enumerable:a.enumerable,writable:a.writable,configurable:a.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,a)},decorateClass:function(e,t){var a=[],r=[],s={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,s)},this),e.forEach(function(e){if(!u(e))return a.push(e);var t=this.decorateElement(e,s);a.push(t.element),a.push.apply(a,t.extras),r.push.apply(r,t.finishers)},this),!t)return{elements:a,finishers:r};var i=this.decorateConstructor(a,t);return r.push.apply(r,i.finishers),i.finishers=r,i},addElementPlacement:function(e,t,a){var r=t[e.placement];if(!a&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var a=[],r=[],s=e.decorators,i=s.length-1;i>=0;i--){var n=t[e.placement];n.splice(n.indexOf(e.key),1);var o=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,s[i])(o)||o);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var m=0;m<l.length;m++)this.addElementPlacement(l[m],t);a.push.apply(a,l)}}return{element:e,finishers:r,extras:a}},decorateConstructor:function(e,t){for(var a=[],r=t.length-1;r>=0;r--){var s=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[r])(s)||s);if(void 0!==i.finisher&&a.push(i.finisher),void 0!==i.elements){e=i.elements;for(var n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)if(e[n].key===e[o].key&&e[n].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[n].key+")")}}return{elements:e,finishers:a}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return Object(n.a)(e).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var a=v(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:a,placement:r,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),a=f(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:a,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var a=f(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:a}},runClassFinishers:function(e,t){for(var a=0;a<t.length;a++){var r=(0,t[a])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,a){if(void 0!==e[t])throw new TypeError(a+" can't have a ."+t+" property.")}};return e}();if(r)for(var i=0;i<r.length;i++)s=r[i](s);var o=t(function(e){s.initializeInstanceElements(e,c.elements)},a),c=s.decorateClass(function(e){for(var t=[],a=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},r=0;r<e.length;r++){var s,i=e[r];if("method"===i.kind&&(s=t.find(a)))if(h(i.descriptor)||h(s.descriptor)){if(u(i)||u(s))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");s.descriptor=i.descriptor}else{if(u(i)){if(u(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");s.decorators=i.decorators}p(i,s)}else t.push(i)}return t}(o.d.map(d)),e);return s.initializeClassElements(o.F,c.elements),s.runClassFinishers(o.F,c.finishers)}(null,function(e,t){return{F:class extends t{constructor(){super(...arguments),e(this)}},d:[{kind:"method",decorators:[Object(o.e)()],key:"searchList",value:async function(e){void 0===e&&(e={});const t=this.state.routeParams,a=Object(i.a)({},t.listSearch,{articleId:t.articleId,articleType:t.articleType},e),{listItems:r,listSummary:s}=await m.searchList(a),{articleId:n,articleType:o,$:l}=Object(c.a)(a,"articleId","articleType"),d=this.rootState.route.data.params.comments._listKey,p=Object(i.a)({},t,{articleId:n,articleType:o,_listKey:d,listSearch:l});this.updateState({routeParams:p,listItems:r,listSummary:s})}},{kind:"method",decorators:[Object(o.e)()],key:"getItemDetail",value:async function(e){const t=this.state.routeParams,a=await m.getItemDetail(e),r=this.rootState.route.data.params.comments._detailKey,s=Object(i.a)({},t,{itemId:e,_detailKey:r});this.updateState({routeParams:s,itemDetail:a})}},{kind:"method",decorators:[Object(o.e)()],key:"createItem",value:async function(e){const t=await m.createItem(e);if(t.error)s.a.info(t.error.message);else{s.a.info("操作成功");const e=this.rootState.route.data.views;e.comments&&e.comments.List?await this.dispatch(this.actions.searchList({isNewest:!0,page:1})):e.comments&&e.comments.Details&&await this.dispatch(this.actions.getItemDetail(this.state.itemDetail.id))}}},{kind:"method",decorators:[Object(o.e)(null)],key:"this/"+o.a.M_INIT+","+o.a.F_ROUTE_CHANGE,value:async function(){if(this.rootState.route.data.views.comments){const{views:e,params:{comments:t}}=this.rootState.route.data,a=this.state.routeParams,r=t;e.comments.List?this.state.listItems&&Object(c.b)(a,r,["_listKey","articleId","articleType","listSearch"])||await this.dispatch(this.actions.searchList(Object(i.a)({},r.listSearch,{articleId:r.articleId,articleType:r.articleType}))):e.comments.Details&&(this.state.itemDetail&&a._detailKey===r._detailKey&&this.state.itemDetail.id===r.itemId||await this.dispatch(this.actions.getItemDetail(r.itemId)))}}}]}},o.b);a(33),a(192);var b=a(198),E=a.n(b),g=a(21),w=(a(482),a(50)),k=a(173),N=a(0),I=a.n(N),O=a(34),j=a(51);var D=Object(w.b)(e=>({itemDetail:e.comments.itemDetail}))(class extends I.a.PureComponent{constructor(){super(...arguments),Object(g.a)(this,"onBack",()=>{j.c.goBack()})}render(){const{itemDetail:e}=this.props;return e?I.a.createElement("div",{className:k.a.comments+"-Details g-modal g-enter-in"},I.a.createElement("div",{className:"list-header"},I.a.createElement("div",{onClick:this.onBack,className:"close-button"},I.a.createElement(E.a,{size:"md",type:"left"}),I.a.createElement("span",null,"返回"))),I.a.createElement("div",{className:"list-items"},I.a.createElement("div",{className:"g-border-top"},I.a.createElement("div",{className:"avatar",style:{backgroundImage:"url("+e.avatarUrl+")"}}),I.a.createElement("div",{className:"user"},e.username,I.a.createElement("span",{className:"date"},e.createdTime)),I.a.createElement("div",{className:"content"},e.content),I.a.createElement("span",{className:"reply"},I.a.createElement("span",{className:"act"},"回复"),"(",e.replies,")")),e.repliesList.map((e,t)=>I.a.createElement("div",{className:0!==t?"g-border-top":"",key:e.id},I.a.createElement("div",{className:"avatar",style:{backgroundImage:"url("+e.avatarUrl+")"}}),I.a.createElement("div",{className:"user"},e.username,I.a.createElement("span",{className:"date"},e.createdTime)),I.a.createElement("div",{className:"content"},e.content))))):null}fadeIn(){const e=Object(O.findDOMNode)(this);e&&e.className.indexOf("g-enter-in")>-1&&setTimeout(()=>{e.className=e.className.replace("g-enter-in","")},0)}componentDidUpdate(){this.fadeIn()}componentDidMount(){this.fadeIn();const e=Object(O.findDOMNode)(this);e&&(e.parentNode.scrollTop=0)}}),P=(a(483),a(183)),S=a(211);let T=NaN;var C=Object(w.b)(e=>{const t=e.comments;return{routeData:e.route.data,listSearch:t.routeParams.listSearch,listItems:t.listItems,listSummary:t.listSummary}})(class extends I.a.PureComponent{constructor(){super(...arguments),Object(g.a)(this,"onSortChange",e=>Object(j.e)({extend:this.props.routeData,params:{comments:{listSearch:{page:1,isNewest:e}}}})),Object(g.a)(this,"onItemClick",()=>{const e=Object(O.findDOMNode)(this);T=e.parentNode.scrollTop})}render(){const{listSearch:e,listItems:t,listSummary:a,routeData:r}=this.props;if(t){const s=r.paths.slice(0,-1).concat(j.a.commentsDetails),i=Object(j.e)({extend:r,paths:s,params:{comments:{itemId:"---"}}});return I.a.createElement("div",{className:k.a.comments+"-List"},I.a.createElement("div",{className:"list-header"},I.a.createElement(P.a,{href:this.onSortChange(!1),className:e.isNewest?"":"on"},"最热"),I.a.createElement(P.a,{href:this.onSortChange(!0),className:e.isNewest?"on":""},"最新")),I.a.createElement("div",{className:"list-items"},t.map(e=>I.a.createElement(P.a,{onClick:this.onItemClick,href:i.replace(/---/g,e.id),className:"g-border-top",key:e.id},I.a.createElement("div",{className:"avatar",style:{backgroundImage:"url("+e.avatarUrl+")"}}),I.a.createElement("div",{className:"user"},e.username,I.a.createElement("span",{className:"date"},e.createdTime)),I.a.createElement("div",{className:"content"},e.content),I.a.createElement("span",{className:"reply"},I.a.createElement("span",{className:"act"},"回复"),"(",e.replies,")")))),a&&I.a.createElement("div",{className:"g-pagination"},I.a.createElement(S.a,{baseUrl:Object(j.e)({extend:this.props.routeData,params:{comments:{listSearch:{page:NaN}}}}),page:a.page,totalPages:a.totalPages})))}return null}componentDidUpdate(){this.scroll()}componentDidMount(){this.scroll()}scroll(){const e=Object(O.findDOMNode)(this);e&&(e.parentNode.scrollTop=T,T=0)}}),x=(a(484),a(164)),U=(a(187),a(188)),A=a.n(U),L=(a(209),a(210)),z=a.n(L),F=a(4),_=(a(485),a(75)),M=a(181),K=a(291);var R=Object(w.b)(e=>{const t=e.comments;return{hasLogin:e.app.curUser.hasLogin,articleType:t.routeParams.articleType,articleId:t.routeParams.articleId,commentId:t.routeParams.itemId}})(Object(K.a)()(class extends I.a.PureComponent{constructor(){super(...arguments),Object(g.a)(this,"onSubmit",()=>{if(this.props.hasLogin){const{articleType:e,articleId:t,commentId:a,form:{validateFields:r,getFieldError:i}}=this.props;r((r,n)=>{if(r){const e=Object.keys(r)[0],t=i(e).join(", ");s.a.fail(t,3)}else{const{content:r}=n;this.props.dispatch(_.a.comments.createItem({articleType:e,content:r,articleId:t,commentId:a}))}})}else this.props.dispatch(Object(o.f)(new M.b))})}render(){const{commentId:e}=this.props,{getFieldProps:t}=this.props.form,a=t("content",{initialValue:"",rules:[{required:!0,message:"请输入您想说的话！"}]});return e?I.a.createElement("div",{className:k.a.comments+"-Editor"},I.a.createElement("div",{className:"input"},I.a.createElement(z.a,Object(F.a)({placeholder:"我来说两句..."},a))),I.a.createElement("div",{className:"con"},I.a.createElement(A.a,{type:"primary",onClick:this.onSubmit},e?"回复":"评论"))):null}})),B=a(27);const $=Object(B.b)(_.b,"comments","Details"),q=Object(B.b)(_.b,"comments","List");var J=class extends I.a.PureComponent{render(){return I.a.createElement("div",{className:""+k.a.comments},I.a.createElement("div",{className:"wrap"},I.a.createElement(x.d,null,I.a.createElement(x.b,{exact:!0,path:"/:articleType/:articleId/comments",component:q}),I.a.createElement(x.b,{exact:!0,path:"/:articleType/:articleId/comments/:itemId",component:$}))),I.a.createElement(R,null))}};t.default=Object(B.a)("comments",{},y,{Main:J,Details:D,List:C})},173:function(e,t,a){"use strict";let r;a.d(t,"a",function(){return r}),function(e){e.app="app",e.comments="comments",e.photos="photos",e.videos="videos",e.messages="messages"}(r||(r={}))},181:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return s});class r extends Error{constructor(e,t,a){super(e),this.message=e,this.code=t,this.detail=a}}class s extends r{constructor(){super("请登录","401")}}},182:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(52),a(41),a(33);var r=a(208),s=a.n(r),i=a(181);function n(e,t,a,r){void 0===a&&(a={}),void 0===r&&(r={}),t=t.replace(/:\w+/g,e=>{const t=e.substr(1);if(a[t]){const e=a[t];return delete a[t],encodeURIComponent(e)}return""}),Object.keys(InitEnv.apiServerPath).some(e=>{const a=new RegExp(e);return!!a.test(t)&&(t=t.replace(a,InitEnv.apiServerPath[e]),!0)});const i={method:e,url:t,params:a,data:r};return s.a.request(i).then(e=>e.data)}s.a.interceptors.response.use(e=>e,e=>{!function(e){const t=e.response?e.response.status:0,a=e.response?e.response.data:"",r=a&&a.message?a.message:"failed to call "+e.config.url;throw new i.a(r,t.toString(),a)}(e)})},183:function(e,t,a){"use strict";var r=a(4),s=a(190),i=(a(187),a(188)),n=a.n(i),o=a(0),c=a(51),l=a(76);Object(l.c)(n.a);t.a=e=>{const{onClick:t}=e,a=Object(s.a)(e,["onClick"]);return o.createElement("a",Object(r.a)({},a,{onClick:e=>{t&&t(e),Object(c.d)(e)},role:"button"}),e.children)}},211:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(33),a(212);var r=a(183),s=a(0),i=a.n(s);class n extends i.a.PureComponent{render(){const{page:e,totalPages:t,baseUrl:a}=this.props;return t?i.a.createElement("div",{className:"comp-Pagination"},i.a.createElement(r.a,{href:e>1?a.replace(/(%22page%22%3A)null/,"$1"+(e-1)):"#",className:"am-button am-button-inline prev"+(1===e?" disabled":"")},"上一页"),i.a.createElement("div",{className:"page"},i.a.createElement("span",{className:"active"},e),"/",t),i.a.createElement(r.a,{href:e<t?a.replace(/(%22page%22%3A)null/,"$1"+(e+1)):"#",className:"am-button am-button-inline next"+(e===t?" disabled":"")},"下一页")):i.a.createElement("div",{className:"comp-Pagination"},"没有更多内容")}}},212:function(e,t,a){},482:function(e,t,a){},483:function(e,t,a){},484:function(e,t,a){},485:function(e,t,a){}}]);
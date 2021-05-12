/*! For license information please see 7703.7cc0d8b3639325667780.js.LICENSE.txt */
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[7703],{37703:(e,n,r)=>{"use strict";r.r(n),r.d(n,{Provider:()=>f,ReactReduxContext:()=>u,batch:()=>V.unstable_batchedUpdates,connect:()=>A,connectAdvanced:()=>O,createDispatchHook:()=>z,createSelectorHook:()=>G,createStoreHook:()=>$,shallowEqual:()=>x,useDispatch:()=>I,useSelector:()=>Q,useStore:()=>K});var t=r(80150),o=r.n(t),u=(r(45697),o().createContext(null)),a=function(e){e()},i=function(){return a},s={notify:function(){}},c=function(){function e(e,n){this.store=e,this.parentSub=n,this.unsubscribe=null,this.listeners=s,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=i(),n=null,r=null;return{clear:function(){n=null,r=null},notify:function(){e((function(){for(var e=n;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=n;r;)e.push(r),r=r.next;return e},subscribe:function(e){var t=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:n=o,function(){t&&null!==n&&(t=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=s)},e}();const f=function(e){var n=e.store,r=e.context,a=e.children,i=(0,t.useMemo)((function(){var e=new c(n);return e.onStateChange=e.notifyNestedSubs,{store:n,subscription:e}}),[n]),s=(0,t.useMemo)((function(){return n.getState()}),[n]);(0,t.useEffect)((function(){var e=i.subscription;return e.trySubscribe(),s!==n.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,s]);var f=r||u;return o().createElement(f.Provider,{value:i},a)};var p=r(22122),l=r(19756),d=r(8679),v=r.n(d),h=r(72973),b="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect,m=[],y=[null,null];function S(e,n){var r=e[1];return[n.payload,r+1]}function P(e,n,r){b((function(){return e.apply(void 0,n)}),r)}function w(e,n,r,t,o,u,a){e.current=t,n.current=o,r.current=!1,u.current&&(u.current=null,a())}function g(e,n,r,t,o,u,a,i,s,c){if(e){var f=!1,p=null,l=function(){if(!f){var e,r,l=n.getState();try{e=t(l,o.current)}catch(e){r=e,p=e}r||(p=null),e===u.current?a.current||s():(u.current=e,i.current=e,a.current=!0,c({type:"STORE_UPDATED",payload:{error:r}}))}};return r.onStateChange=l,r.trySubscribe(),l(),function(){if(f=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}}var C=function(){return[null,0]};function O(e,n){void 0===n&&(n={});var r=n,a=r.getDisplayName,i=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,s=r.methodName,f=void 0===s?"connectAdvanced":s,d=r.renderCountProp,b=void 0===d?void 0:d,O=r.shouldHandleStateChanges,E=void 0===O||O,x=r.storeKey,M=void 0===x?"store":x,N=(r.withRef,r.forwardRef),R=void 0!==N&&N,T=r.context,q=void 0===T?u:T,k=(0,l.Z)(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),D=q;return function(n){var r=n.displayName||n.name||"Component",u=i(r),a=(0,p.Z)({},k,{getDisplayName:i,methodName:f,renderCountProp:b,shouldHandleStateChanges:E,storeKey:M,displayName:u,wrappedComponentName:r,WrappedComponent:n}),s=k.pure,d=s?t.useMemo:function(e){return e()};function O(r){var u=(0,t.useMemo)((function(){var e=r.forwardedRef,n=(0,l.Z)(r,["forwardedRef"]);return[r.context,e,n]}),[r]),i=u[0],s=u[1],f=u[2],v=(0,t.useMemo)((function(){return i&&i.Consumer&&(0,h.isContextConsumer)(o().createElement(i.Consumer,null))?i:D}),[i,D]),b=(0,t.useContext)(v),O=Boolean(r.store)&&Boolean(r.store.getState)&&Boolean(r.store.dispatch);Boolean(b)&&Boolean(b.store);var x=O?r.store:b.store,M=(0,t.useMemo)((function(){return function(n){return e(n.dispatch,a)}(x)}),[x]),N=(0,t.useMemo)((function(){if(!E)return y;var e=new c(x,O?null:b.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[x,O,b]),R=N[0],T=N[1],q=(0,t.useMemo)((function(){return O?b:(0,p.Z)({},b,{subscription:R})}),[O,b,R]),k=(0,t.useReducer)(S,m,C),_=k[0][0],Z=k[1];if(_&&_.error)throw _.error;var B=(0,t.useRef)(),H=(0,t.useRef)(f),W=(0,t.useRef)(),j=(0,t.useRef)(!1),U=d((function(){return W.current&&f===H.current?W.current:M(x.getState(),f)}),[x,_,f]);P(w,[H,B,j,f,U,W,T]),P(g,[E,x,R,M,H,B,j,W,T,Z],[x,R,M]);var A=(0,t.useMemo)((function(){return o().createElement(n,(0,p.Z)({},U,{ref:s}))}),[s,n,U]);return(0,t.useMemo)((function(){return E?o().createElement(v.Provider,{value:q},A):A}),[v,A,q])}var x=s?o().memo(O):O;if(x.WrappedComponent=n,x.displayName=u,R){var N=o().forwardRef((function(e,n){return o().createElement(x,(0,p.Z)({},e,{forwardedRef:n}))}));return N.displayName=u,N.WrappedComponent=n,v()(N,n)}return v()(x,n)}}function E(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function x(e,n){if(E(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(n,r[o])||!E(e[r[o]],n[r[o]]))return!1;return!0}var M=r(35592);function N(e){return function(n,r){var t=e(n,r);function o(){return t}return o.dependsOnOwnProps=!1,o}}function R(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function T(e,n){return function(n,r){r.displayName;var t=function(e,n){return t.dependsOnOwnProps?t.mapToProps(e,n):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(n,r){t.mapToProps=e,t.dependsOnOwnProps=R(e);var o=t(n,r);return"function"==typeof o&&(t.mapToProps=o,t.dependsOnOwnProps=R(o),o=t(n,r)),o},t}}const q=[function(e){return"function"==typeof e?T(e):void 0},function(e){return e?void 0:N((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?N((function(n){return(0,M.bindActionCreators)(e,n)})):void 0}],k=[function(e){return"function"==typeof e?T(e):void 0},function(e){return e?void 0:N((function(){return{}}))}];function D(e,n,r){return(0,p.Z)({},r,{},e,{},n)}const _=[function(e){return"function"==typeof e?function(e){return function(n,r){r.displayName;var t,o=r.pure,u=r.areMergedPropsEqual,a=!1;return function(n,r,i){var s=e(n,r,i);return a?o&&u(s,t)||(t=s):(a=!0,t=s),t}}}(e):void 0},function(e){return e?void 0:function(){return D}}];function Z(e,n,r,t){return function(o,u){return r(e(o,u),n(t,u),u)}}function B(e,n,r,t,o){var u,a,i,s,c,f=o.areStatesEqual,p=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1;return function(o,v){return d?function(o,d){var v,h,b=!p(d,a),m=!f(o,u);return u=o,a=d,b&&m?(i=e(u,a),n.dependsOnOwnProps&&(s=n(t,a)),c=r(i,s,a)):b?(e.dependsOnOwnProps&&(i=e(u,a)),n.dependsOnOwnProps&&(s=n(t,a)),c=r(i,s,a)):m?(v=e(u,a),h=!l(v,i),i=v,h&&(c=r(i,s,a)),c):c}(o,v):(i=e(u=o,a=v),s=n(t,a),c=r(i,s,a),d=!0,c)}}function H(e,n){var r=n.initMapStateToProps,t=n.initMapDispatchToProps,o=n.initMergeProps,u=(0,l.Z)(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=r(e,u),i=t(e,u),s=o(e,u);return(u.pure?B:Z)(a,i,s,e,u)}function W(e,n,r){for(var t=n.length-1;t>=0;t--){var o=n[t](e);if(o)return o}return function(n,t){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+t.wrappedComponentName+".")}}function j(e,n){return e===n}function U(e){var n=void 0===e?{}:e,r=n.connectHOC,t=void 0===r?O:r,o=n.mapStateToPropsFactories,u=void 0===o?k:o,a=n.mapDispatchToPropsFactories,i=void 0===a?q:a,s=n.mergePropsFactories,c=void 0===s?_:s,f=n.selectorFactory,d=void 0===f?H:f;return function(e,n,r,o){void 0===o&&(o={});var a=o,s=a.pure,f=void 0===s||s,v=a.areStatesEqual,h=void 0===v?j:v,b=a.areOwnPropsEqual,m=void 0===b?x:b,y=a.areStatePropsEqual,S=void 0===y?x:y,P=a.areMergedPropsEqual,w=void 0===P?x:P,g=(0,l.Z)(a,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),C=W(e,u,"mapStateToProps"),O=W(n,i,"mapDispatchToProps"),E=W(r,c,"mergeProps");return t(d,(0,p.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:C,initMapDispatchToProps:O,initMergeProps:E,pure:f,areStatesEqual:h,areOwnPropsEqual:m,areStatePropsEqual:S,areMergedPropsEqual:w},g))}}const A=U();function F(){return(0,t.useContext)(u)}function $(e){void 0===e&&(e=u);var n=e===u?F:function(){return(0,t.useContext)(e)};return function(){return n().store}}var K=$();function z(e){void 0===e&&(e=u);var n=e===u?K:$(e);return function(){return n().dispatch}}var I=z(),L=function(e,n){return e===n};function G(e){void 0===e&&(e=u);var n=e===u?F:function(){return(0,t.useContext)(e)};return function(e,r){void 0===r&&(r=L);var o=n();return function(e,n,r,o){var u,a=(0,t.useReducer)((function(e){return e+1}),0)[1],i=(0,t.useMemo)((function(){return new c(r,o)}),[r,o]),s=(0,t.useRef)(),f=(0,t.useRef)(),p=(0,t.useRef)();try{u=e!==f.current||s.current?e(r.getState()):p.current}catch(e){throw s.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),e}return b((function(){f.current=e,p.current=u,s.current=void 0})),b((function(){function e(){try{var e=f.current(r.getState());if(n(e,p.current))return;p.current=e}catch(e){s.current=e}a({})}return i.onStateChange=e,i.trySubscribe(),e(),function(){return i.tryUnsubscribe()}}),[r,i]),u}(e,r,o.store,o.subscription)}}var J,Q=G(),V=r(70695);J=V.unstable_batchedUpdates,a=J},88359:(e,n)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,l=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,v=(r&&Symbol.for("react.suspense_list"),r?Symbol.for("react.memo"):60115),h=r?Symbol.for("react.lazy"):60116;r&&Symbol.for("react.block"),r&&Symbol.for("react.fundamental"),r&&Symbol.for("react.responder"),r&&Symbol.for("react.scope");function b(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:switch(e=e.type){case f:case p:case u:case i:case a:case d:return e;default:switch(e=e&&e.$$typeof){case c:case l:case h:case v:case s:return e;default:return n}}case o:return n}}}n.isContextConsumer=function(e){return b(e)===c}},72973:(e,n,r)=>{"use strict";e.exports=r(88359)}}]);
//# sourceMappingURL=../sourcemaps/7703.cca3fd737c58f8a22a09.js.map
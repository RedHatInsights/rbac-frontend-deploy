/*! For license information please see 928.5fc08f0c145a8fa9a79f.js.LICENSE.txt */
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[928],{8679:(t,n,e)=>{"use strict";var r=e(21296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(n,e,r){if("string"!=typeof e){if(d){var o=h(e);o&&o!==d&&t(n,o,r)}var a=f(e);l&&(a=a.concat(l(e)));for(var c=u(n),v=u(e),m=0;m<a.length;++m){var y=a[m];if(!(i[y]||r&&r[y]||v&&v[y]||c&&c[y])){var g=p(e,y);try{s(n,y,g)}catch(t){}}}}return n}},96103:(t,n)=>{"use strict";var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function x(t){if("object"==typeof t&&null!==t){var n=t.$$typeof;switch(n){case r:switch(t=t.type){case f:case l:case i:case c:case a:case h:return t;default:switch(t=t&&t.$$typeof){case s:case p:case m:case v:case u:return t;default:return n}}case o:return n}}}function P(t){return x(t)===l}n.AsyncMode=f,n.ConcurrentMode=l,n.ContextConsumer=s,n.ContextProvider=u,n.Element=r,n.ForwardRef=p,n.Fragment=i,n.Lazy=m,n.Memo=v,n.Portal=o,n.Profiler=c,n.StrictMode=a,n.Suspense=h,n.isAsyncMode=function(t){return P(t)||x(t)===f},n.isConcurrentMode=P,n.isContextConsumer=function(t){return x(t)===s},n.isContextProvider=function(t){return x(t)===u},n.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},n.isForwardRef=function(t){return x(t)===p},n.isFragment=function(t){return x(t)===i},n.isLazy=function(t){return x(t)===m},n.isMemo=function(t){return x(t)===v},n.isPortal=function(t){return x(t)===o},n.isProfiler=function(t){return x(t)===c},n.isStrictMode=function(t){return x(t)===a},n.isSuspense=function(t){return x(t)===h},n.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===l||t===c||t===a||t===h||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===v||t.$$typeof===u||t.$$typeof===s||t.$$typeof===p||t.$$typeof===g||t.$$typeof===b||t.$$typeof===w||t.$$typeof===y)},n.typeOf=x},21296:(t,n,e)=>{"use strict";t.exports=e(96103)},92703:(t,n,e)=>{"use strict";var r=e(50414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},45697:(t,n,e)=>{t.exports=e(92703)()},50414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},60928:(t,n,e)=>{"use strict";e.r(n),e.d(n,{BrowserRouter:()=>xt,HashRouter:()=>Pt,Link:()=>Rt,MemoryRouter:()=>$,NavLink:()=>_t,Prompt:()=>Z,Redirect:()=>I,Route:()=>H,Router:()=>_,StaticRouter:()=>K,Switch:()=>J,generatePath:()=>j,matchPath:()=>B,useHistory:()=>Q,useLocation:()=>X,useParams:()=>tt,useRouteMatch:()=>nt,withRouter:()=>G});var r=e(94578),o=e(92950),i=e.n(o),a=e(87462);function c(t){return"/"===t.charAt(0)}function u(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}const s=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],o=n&&n.split("/")||[],i=t&&c(t),a=n&&c(n),s=i||a;if(t&&c(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var f=o[o.length-1];e="."===f||".."===f||""===f}else e=!1;for(var l=0,p=o.length;p>=0;p--){var h=o[p];"."===h?u(o,p):".."===h?(u(o,p),l++):l&&(u(o,p),l--)}if(!s)for(;l--;l)o.unshift("..");!s||""===o[0]||o[0]&&c(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d};function f(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}const l=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every((function(n,r){return t(n,e[r])}));if("object"==typeof n||"object"==typeof e){var r=f(n),o=f(e);return r!==n||o!==e?t(r,o):Object.keys(Object.assign({},n,e)).every((function(r){return t(n[r],e[r])}))}return!1};function p(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function h(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t),o.state=n):(void 0===(o=(0,a.Z)({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=s(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function d(t,n,e){return Math.min(Math.max(t,n),e)}function v(t){void 0===t&&(t={});var n,e,r=t,o=r.getUserConfirmation,i=r.initialEntries,c=void 0===i?["/"]:i,u=r.initialIndex,s=void 0===u?0:u,f=r.keyLength,l=void 0===f?6:f,v=(n=null,e=[],{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}});function m(t){(0,a.Z)(P,t),P.length=P.entries.length,v.notifyListeners(P.location,P.action)}function y(){return Math.random().toString(36).substr(2,l)}var g=d(s,0,c.length-1),b=c.map((function(t){return h(t,void 0,"string"==typeof t?y():t.key||y())})),w=p;function x(t){var n=d(P.index+t,0,P.entries.length-1),e=P.entries[n];v.confirmTransitionTo(e,"POP",o,(function(t){t?m({action:"POP",location:e,index:n}):m()}))}var P={length:b.length,action:"POP",location:b[g],index:g,entries:b,createHref:w,push:function(t,n){var e="PUSH",r=h(t,n,y(),P.location);v.confirmTransitionTo(r,e,o,(function(t){if(t){var n=P.index+1,o=P.entries.slice(0);o.length>n?o.splice(n,o.length-n,r):o.push(r),m({action:e,location:r,index:n,entries:o})}}))},replace:function(t,n){var e="REPLACE",r=h(t,n,y(),P.location);v.confirmTransitionTo(r,e,o,(function(t){t&&(P.entries[P.index]=r,m({action:e,location:r}))}))},go:x,goBack:function(){x(-1)},goForward:function(){x(1)},canGo:function(t){var n=P.index+t;return n>=0&&n<P.entries.length},block:function(t){return void 0===t&&(t=!1),v.setPrompt(t)},listen:function(t){return v.appendListener(t)}};return P}"undefined"==typeof window||!window.document||window.document.createElement;var m=e(45697),y=e.n(m),g=1073741823,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function w(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,r){t=e,n.forEach((function(n){return n(t,r)}))}}}const x=i().createContext||function(t,n){var e,i,a,c="__create-react-context-"+((b[a="__global_unique_id__"]=(b[a]||0)+1)+"__"),u=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).emitter=w(n.props.value),n}(0,r.Z)(e,t);var o=e.prototype;return o.getChildContext=function(){var t;return(t={})[c]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(r,o):g,0!=(e|=0)&&this.emitter.set(t.value,e))}var i,a},o.render=function(){return this.props.children},e}(o.Component);u.childContextTypes=((e={})[c]=y().object.isRequired,e);var s=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}(0,r.Z)(e,n);var o=e.prototype;return o.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?g:n},o.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?g:t},o.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},o.getValue=function(){return this.context[c]?this.context[c].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(o.Component);return s.contextTypes=((i={})[c]=y().object,i),{Provider:u,Consumer:s}};function P(t,n){if(!t)throw new Error("Invariant failed")}var E=e(39658),O=e.n(E),S=(e(50663),e(63366)),C=e(8679),k=e.n(C),R=function(t){var n=x();return n.displayName=t,n},A=R("Router-History"),T=R("Router"),_=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}(0,r.Z)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return i().createElement(T.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i().createElement(A.Provider,{children:this.props.children||null,value:this.props.history}))},n}(i().Component),$=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=v(n.props),n}return(0,r.Z)(n,t),n.prototype.render=function(){return i().createElement(_,{history:this.history,children:this.props.children})},n}(i().Component),L=function(t){function n(){return t.apply(this,arguments)||this}(0,r.Z)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(i().Component);function Z(t){var n=t.message,e=t.when,r=void 0===e||e;return i().createElement(T.Consumer,null,(function(t){if(t||P(!1),!r||t.staticContext)return null;var e=t.history.block;return i().createElement(L,{onMount:function(t){t.release=e(n)},onUpdate:function(t,r){r.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})}))}var M={},U=0;function j(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(M[t])return M[t];var n=O().compile(t);return U<1e4&&(M[t]=n,U++),n}(t)(n,{pretty:!0})}function I(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return i().createElement(T.Consumer,null,(function(t){t||P(!1);var r=t.history,c=t.staticContext,u=o?r.push:r.replace,s=h(n?"string"==typeof e?j(e,n.params):(0,a.Z)({},e,{pathname:j(e.pathname,n.params)}):e);return c?(u(s),null):i().createElement(L,{onMount:function(){u(s)},onUpdate:function(t,n){var e,r,o=h(n.to);e=o,r=(0,a.Z)({},s,{key:o.key}),e.pathname===r.pathname&&e.search===r.search&&e.hash===r.hash&&e.key===r.key&&l(e.state,r.state)||u(s)},to:e})}))}var N={},F=0;function B(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=N[e]||(N[e]={});if(r[t])return r[t];var o=[],i={regexp:O()(t,o,n),keys:o};return F<1e4&&(r[t]=i,F++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var f=u[0],l=u.slice(1),p=t===f;return i&&!p?null:{path:e,url:"/"===e&&""===f?"/":f,isExact:p,params:a.reduce((function(t,n,e){return t[n.name]=l[e],t}),{})}}),null)}var H=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return i().createElement(T.Consumer,null,(function(n){n||P(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?B(e.pathname,t.props):n.match,o=(0,a.Z)({},n,{location:e,match:r}),c=t.props,u=c.children,s=c.component,f=c.render;return Array.isArray(u)&&function(t){return 0===i().Children.count(t)}(u)&&(u=null),i().createElement(T.Provider,{value:o},o.match?u?"function"==typeof u?u(o):u:s?i().createElement(s,o):f?f(o):null:"function"==typeof u?u(o):null)}))},n}(i().Component);function D(t){return"/"===t.charAt(0)?t:"/"+t}function W(t,n){if(!t)return n;var e=D(t);return 0!==n.pathname.indexOf(e)?n:(0,a.Z)({},n,{pathname:n.pathname.substr(e.length)})}function V(t){return"string"==typeof t?t:p(t)}function q(t){return function(){P(!1)}}function z(){}var K=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return z},n.handleBlock=function(){return z},n}(0,r.Z)(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,c=void 0===i?{}:i;c.action=n,c.location=function(t,n){return t?(0,a.Z)({},n,{pathname:D(t)+n.pathname}):n}(o,h(t)),c.url=V(c.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,r=t.context,o=void 0===r?{}:r,c=t.location,u=void 0===c?"/":c,s=(0,S.Z)(t,["basename","context","location"]),f={createHref:function(t){return D(e+V(t))},action:"POP",location:W(e,h(u)),push:this.handlePush,replace:this.handleReplace,go:q(),goBack:q(),goForward:q(),listen:this.handleListen,block:this.handleBlock};return i().createElement(_,(0,a.Z)({},s,{history:f,staticContext:o}))},n}(i().Component),J=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return i().createElement(T.Consumer,null,(function(n){n||P(!1);var e,r,o=t.props.location||n.location;return i().Children.forEach(t.props.children,(function(t){if(null==r&&i().isValidElement(t)){e=t;var c=t.props.path||t.props.from;r=c?B(o.pathname,(0,a.Z)({},t.props,{path:c})):n.match}})),r?i().cloneElement(e,{location:o,computedMatch:r}):null}))},n}(i().Component);function G(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=(0,S.Z)(n,["wrappedComponentRef"]);return i().createElement(T.Consumer,null,(function(n){return n||P(!1),i().createElement(t,(0,a.Z)({},r,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,k()(e,t)}var Y=i().useContext;function Q(){return Y(A)}function X(){return Y(T).location}function tt(){var t=Y(T).match;return t?t.params:{}}function nt(t){var n=X(),e=Y(T).match;return t?B(n.pathname,t):e}function et(t){return"/"===t.charAt(0)?t:"/"+t}function rt(t){return"/"===t.charAt(0)?t.substr(1):t}function ot(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function it(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function at(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function ct(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t),o.state=n):(void 0===(o=(0,a.Z)({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=s(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function ut(){var t=null,n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var st=!("undefined"==typeof window||!window.document||!window.document.createElement);function ft(t,n){n(window.confirm(t))}var lt="popstate",pt="hashchange";function ht(){try{return window.history.state||{}}catch(t){return{}}}function dt(t){void 0===t&&(t={}),st||P(!1);var n,e=window.history,r=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,c=i.forceRefresh,u=void 0!==c&&c,s=i.getUserConfirmation,f=void 0===s?ft:s,l=i.keyLength,p=void 0===l?6:l,h=t.basename?it(et(t.basename)):"";function d(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return h&&(i=ot(i,h)),ct(i,r,e)}function v(){return Math.random().toString(36).substr(2,p)}var m=ut();function y(t){(0,a.Z)(T,t),T.length=e.length,m.notifyListeners(T.location,T.action)}function g(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||x(d(t.state))}function b(){x(d(ht()))}var w=!1;function x(t){w?(w=!1,y()):m.confirmTransitionTo(t,"POP",f,(function(n){n?y({action:"POP",location:t}):function(t){var n=T.location,e=O.indexOf(n.key);-1===e&&(e=0);var r=O.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(w=!0,C(o))}(t)}))}var E=d(ht()),O=[E.key];function S(t){return h+at(t)}function C(t){e.go(t)}var k=0;function R(t){1===(k+=t)&&1===t?(window.addEventListener(lt,g),o&&window.addEventListener(pt,b)):0===k&&(window.removeEventListener(lt,g),o&&window.removeEventListener(pt,b))}var A=!1,T={length:e.length,action:"POP",location:E,createHref:S,push:function(t,n){var o="PUSH",i=ct(t,n,v(),T.location);m.confirmTransitionTo(i,o,f,(function(t){if(t){var n=S(i),a=i.key,c=i.state;if(r)if(e.pushState({key:a,state:c},null,n),u)window.location.href=n;else{var s=O.indexOf(T.location.key),f=O.slice(0,s+1);f.push(i.key),O=f,y({action:o,location:i})}else window.location.href=n}}))},replace:function(t,n){var o="REPLACE",i=ct(t,n,v(),T.location);m.confirmTransitionTo(i,o,f,(function(t){if(t){var n=S(i),a=i.key,c=i.state;if(r)if(e.replaceState({key:a,state:c},null,n),u)window.location.replace(n);else{var s=O.indexOf(T.location.key);-1!==s&&(O[s]=i.key),y({action:o,location:i})}else window.location.replace(n)}}))},go:C,goBack:function(){C(-1)},goForward:function(){C(1)},block:function(t){void 0===t&&(t=!1);var n=m.setPrompt(t);return A||(R(1),A=!0),function(){return A&&(A=!1,R(-1)),n()}},listen:function(t){var n=m.appendListener(t);return R(1),function(){R(-1),n()}}};return T}var vt="hashchange",mt={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+rt(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:rt,decodePath:et},slash:{encodePath:et,decodePath:et}};function yt(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function gt(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function bt(t){window.location.replace(yt(window.location.href)+"#"+t)}function wt(t){void 0===t&&(t={}),st||P(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),r=e.getUserConfirmation,o=void 0===r?ft:r,i=e.hashType,c=void 0===i?"slash":i,u=t.basename?it(et(t.basename)):"",s=mt[c],f=s.encodePath,l=s.decodePath;function p(){var t=l(gt());return u&&(t=ot(t,u)),ct(t)}var h=ut();function d(t){(0,a.Z)(k,t),k.length=n.length,h.notifyListeners(k.location,k.action)}var v=!1,m=null;function y(){var t,n,e=gt(),r=f(e);if(e!==r)bt(r);else{var i=p(),a=k.location;if(!v&&(n=i,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(m===at(i))return;m=null,function(t){if(v)v=!1,d();else{h.confirmTransitionTo(t,"POP",o,(function(n){n?d({action:"POP",location:t}):function(t){var n=k.location,e=x.lastIndexOf(at(n));-1===e&&(e=0);var r=x.lastIndexOf(at(t));-1===r&&(r=0);var o=e-r;o&&(v=!0,E(o))}(t)}))}}(i)}}var g=gt(),b=f(g);g!==b&&bt(b);var w=p(),x=[at(w)];function E(t){n.go(t)}var O=0;function S(t){1===(O+=t)&&1===t?window.addEventListener(vt,y):0===O&&window.removeEventListener(vt,y)}var C=!1,k={length:n.length,action:"POP",location:w,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=yt(window.location.href)),e+"#"+f(u+at(t))},push:function(t,n){var e="PUSH",r=ct(t,void 0,void 0,k.location);h.confirmTransitionTo(r,e,o,(function(t){if(t){var n=at(r),o=f(u+n);if(gt()!==o){m=n,function(t){window.location.hash=t}(o);var i=x.lastIndexOf(at(k.location)),a=x.slice(0,i+1);a.push(n),x=a,d({action:e,location:r})}else d()}}))},replace:function(t,n){var e="REPLACE",r=ct(t,void 0,void 0,k.location);h.confirmTransitionTo(r,e,o,(function(t){if(t){var n=at(r),o=f(u+n);gt()!==o&&(m=n,bt(o));var i=x.indexOf(at(k.location));-1!==i&&(x[i]=n),d({action:e,location:r})}}))},go:E,goBack:function(){E(-1)},goForward:function(){E(1)},block:function(t){void 0===t&&(t=!1);var n=h.setPrompt(t);return C||(S(1),C=!0),function(){return C&&(C=!1,S(-1)),n()}},listen:function(t){var n=h.appendListener(t);return S(1),function(){S(-1),n()}}};return k}var xt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=dt(n.props),n}return(0,r.Z)(n,t),n.prototype.render=function(){return i().createElement(_,{history:this.history,children:this.props.children})},n}(i().Component),Pt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=wt(n.props),n}return(0,r.Z)(n,t),n.prototype.render=function(){return i().createElement(_,{history:this.history,children:this.props.children})},n}(i().Component),Et=function(t,n){return"function"==typeof t?t(n):t},Ot=function(t,n){return"string"==typeof t?ct(t,null,null,n):t},St=function(t){return t},Ct=i().forwardRef;void 0===Ct&&(Ct=St);var kt=Ct((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,c=(0,S.Z)(t,["innerRef","navigate","onClick"]),u=c.target,s=(0,a.Z)({},c,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||u&&"_self"!==u||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=St!==Ct&&n||e,i().createElement("a",s)})),Rt=Ct((function(t,n){var e=t.component,r=void 0===e?kt:e,o=t.replace,c=t.to,u=t.innerRef,s=(0,S.Z)(t,["component","replace","to","innerRef"]);return i().createElement(T.Consumer,null,(function(t){t||P(!1);var e=t.history,f=Ot(Et(c,t.location),t.location),l=f?e.createHref(f):"",p=(0,a.Z)({},s,{href:l,navigate:function(){var n=Et(c,t.location),r=at(t.location)===at(Ot(n));(o||r?e.replace:e.push)(n)}});return St!==Ct?p.ref=n||u:p.innerRef=u,i().createElement(r,p)}))})),At=function(t){return t},Tt=i().forwardRef;void 0===Tt&&(Tt=At);var _t=Tt((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,o=t.activeClassName,c=void 0===o?"active":o,u=t.activeStyle,s=t.className,f=t.exact,l=t.isActive,p=t.location,h=t.sensitive,d=t.strict,v=t.style,m=t.to,y=t.innerRef,g=(0,S.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i().createElement(T.Consumer,null,(function(t){t||P(!1);var e=p||t.location,o=Ot(Et(m,e),e),b=o.pathname,w=b&&b.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=w?B(e.pathname,{path:w,exact:f,sensitive:h,strict:d}):null,E=!!(l?l(x,e):x),O="function"==typeof s?s(E):s,S="function"==typeof v?v(E):v;E&&(O=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(O,c),S=(0,a.Z)({},S,u));var C=(0,a.Z)({"aria-current":E&&r||null,className:O,style:S,to:o},g);return At!==Tt?C.ref=n||y:C.innerRef=y,i().createElement(Rt,C)}))}))},76585:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},39658:(t,n,e)=>{var r=e(76585);t.exports=function t(n,e,o){return r(e)||(o=e||o,e=[]),o=o||{},n instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,n)}(n,e):r(n)?function(n,e,r){for(var o=[],i=0;i<n.length;i++)o.push(t(n[i],e,r).source);return f(new RegExp("(?:"+o.join("|")+")",l(r)),e)}(n,e,o):function(t,n,e){return p(i(t,e),n,e)}(n,e,o)},t.exports.parse=i,t.exports.compile=function(t,n){return c(i(t,n),n)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,c="",f=n&&n.delimiter||"/";null!=(e=o.exec(t));){var l=e[0],p=e[1],h=e.index;if(c+=t.slice(a,h),a=h+l.length,p)c+=p[1];else{var d=t[a],v=e[2],m=e[3],y=e[4],g=e[5],b=e[6],w=e[7];c&&(r.push(c),c="");var x=null!=v&&null!=d&&d!==v,P="+"===b||"*"===b,E="?"===b||"*"===b,O=e[2]||f,S=y||g;r.push({name:m||i++,prefix:v||"",delimiter:O,optional:E,repeat:P,partial:x,asterisk:!!w,pattern:S?s(S):w?".*":"[^"+u(O)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",l(n)));return function(n,o){for(var i="",c=n||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var f=t[s];if("string"!=typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(l=u(p[h]),!e[s].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,n){return t.keys=n,t}function l(t){return t&&t.sensitive?"":"i"}function p(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";n.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",f(new RegExp("^"+a,l(e)),n)}},30086:(t,n)=>{"use strict";var e="function"==typeof Symbol&&Symbol.for;e&&Symbol.for("react.element"),e&&Symbol.for("react.portal"),e&&Symbol.for("react.fragment"),e&&Symbol.for("react.strict_mode"),e&&Symbol.for("react.profiler"),e&&Symbol.for("react.provider"),e&&Symbol.for("react.context"),e&&Symbol.for("react.async_mode"),e&&Symbol.for("react.concurrent_mode"),e&&Symbol.for("react.forward_ref"),e&&Symbol.for("react.suspense"),e&&Symbol.for("react.suspense_list"),e&&Symbol.for("react.memo"),e&&Symbol.for("react.lazy"),e&&Symbol.for("react.block"),e&&Symbol.for("react.fundamental"),e&&Symbol.for("react.responder"),e&&Symbol.for("react.scope")},50663:(t,n,e)=>{"use strict";e(30086)},87462:(t,n,e)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},r.apply(this,arguments)}e.d(n,{Z:()=>r})},94578:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=e(89611);function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,(0,r.Z)(t,n)}},63366:(t,n,e)=>{"use strict";function r(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(n,{Z:()=>r})},89611:(t,n,e)=>{"use strict";function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}e.d(n,{Z:()=>r})}}]);
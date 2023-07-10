/*! For license information please see 4853.12941bacf110034c5b75.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[4853],{46441:(e,t,r)=>{r.d(t,{Z:()=>u});r(71002);var n=r(76857),o=r(92950),a=r.n(o),i=r(45697),s=r.n(i),c=(r(27361),r(48880));s().oneOfType([s().string,s().func,s().object]),s().func.isRequired,s().node.isRequired,s().bool,s().func.isRequired,s().node.isRequired,s().func.isRequired;var l=function(e){var t=e.renderNextButton,r=e.disableBack,i=e.handlePrev,s=e.buttonLabels,l=s.cancel,u=s.back,m=e.context,d=(0,c.default)(),p=(0,o.useContext)(m),f=p.success,h=p.error,v=p.submitting;return f||void 0===h||h||v?null:a().createElement(o.Fragment,null,t(),a().createElement(n.Button,{type:"button",variant:"secondary",isDisabled:r,onClick:i},u),a().createElement(n.Button,{type:"button",variant:"link",onClick:d.onCancel},l))};l.propTypes={disableBack:s().bool,handlePrev:s().func.isRequired,handleNext:s().func.isRequired,nextStep:s().oneOfType([s().string,s().shape({when:s().string.isRequired,stepMapper:s().object.isRequired}),s().func]),buttonLabels:s().shape({submit:s().node.isRequired,cancel:s().node.isRequired,back:s().node.isRequired,next:s().node.isRequired}).isRequired,context:s().object.isRequired,renderNextButton:s().func};const u=l},65731:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),o=r.n(n),a=r(76857),i=r(70363),s=r(43047),c=r(86896),l=r(45697),u=r.n(l),m=r(30893),d=function(e){var t=e.context,r=e.title,l=e.text,u=(0,c.Z)(),d=(0,n.useContext)(i.default).jumpToStep,p=(0,n.useContext)(t).setWizardError;return o().createElement(a.EmptyState,{variant:a.EmptyStateVariant.large},o().createElement(a.EmptyStateIcon,{color:"red",icon:s.ZP}),o().createElement(a.Title,{headingLevel:"h4",size:"lg"},r),o().createElement(a.EmptyStateBody,null,l),o().createElement(a.Button,{onClick:function(){p(void 0),d(0)},variant:"primary"},u.formatMessage(m.Z.returnToStepNumber,{number:1})))};d.propTypes={context:u().object.isRequired,title:u().string.isRequired,text:u().string.isRequired};const p=d},34853:(e,t,r)=>{r.r(t),r.d(t,{AddRoleWizardContext:()=>be,default:()=>Re,mapperExtension:()=>xe});var n=r(93433),o=r(4942),a=r(29439),i=r(45987),s=r(87462),c=r(92950),l=r.n(c),u=r(45697),m=r.n(u),d=r(50533),p=r(86896),f=r(71355),h=r(93025),v=r(67850),y=r(52817),g=r(76857),b=r(11107),E=r(55140),Z=r(64124),x=r(27979),w=r(71002),R=r(15861),S=r(43115),M=r(40639),T=r(48880),k=r(28412),O=r(82644),C=r(29558),L=r(30893),j=r(2034);function N(){N=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new R(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u={};function m(){}function d(){}function p(){}var f={};s(f,o,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(S([])));v&&v!==t&&r.call(v,o)&&(f=v);var y=p.prototype=m.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(o,a,i,s){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==(0,w.Z)(m)&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function Z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:M}}function M(){return{value:void 0,done:!0}}return d.prototype=p,s(y,"constructor",p),s(p,"constructor",d),d.displayName=s(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),s(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),s(y,i,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var P=function(){var e=(0,R.Z)(N().mark((function e(t){var r,n,o,a,i,s;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=(0,O.Sn)(),a=(0,C.d)({locale:k.S,messages:j},o),t){e.next=4;break}return e.abrupt("return",void 0);case 4:return e.next=6,(0,S.vd)({limit:10,offset:0,name:t,nameMatch:"exact"}).catch((function(e){console.error(e)}));case 6:return i=e.sent,e.next=9,(0,S.vd)({limit:10,offset:0,displayName:t,nameMatch:"exact"}).catch((function(e){console.error(e)}));case 9:if(s=e.sent,!((null==i||null===(r=i.data)||void 0===r?void 0:r.length)>0||(null==s||null===(n=s.data)||void 0===n?void 0:n.length)>0)){e.next=12;break}throw a.formatMessage(L.Z.nameAlreadyTaken);case 12:return e.abrupt("return",void 0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=(0,M.Z)(P),D=function(e){var t=e.name,r=(0,T.default)();return(0,c.useEffect)((function(){return setTimeout((function(){return r.change(t,"1")})),function(){return r.change(t,"")}}),[]),null},q=r(65731),I=function(e){var t,r=e.formFields,n=(0,p.Z)(),o=(0,c.useContext)(be),a=o.submitting,i=o.error,s=o.setWizardError,u=(0,T.default)().getState;return(0,c.useEffect)((function(){s(void 0),P(u().values["role-name"]).then((function(){return s(!1)})).catch((function(){return s(!0)}))}),[]),void 0===i||a?l().createElement(g.Bullseye,null,l().createElement(g.Spinner,{size:"xl"})):!0===i?l().createElement(q.Z,{context:be,title:n.formatMessage(L.Z.roleNameTakenTitle),text:n.formatMessage(L.Z.roleNameTakenText)}):l().createElement("div",{className:"rbac"},l().createElement(g.Title,{headingLevel:"h1",size:"xl",className:"pf-u-mb-sm"},n.formatMessage(L.Z.reviewDetails)),l().createElement(g.TextContent,{className:"pf-u-mb-md"},l().createElement(g.Text,null,n.formatMessage(L.Z.reviewRoleDetails))),null==r||null===(t=r[0])||void 0===t?void 0:t[0])};I.propTypes={formFields:m().array};const _=I;var F=function(e){var t=e.formFields,r=(0,p.Z)();return l().createElement("div",{className:"rbac"},l().createElement(g.Title,{headingLevel:"h1",size:"xl",className:"pf-u-mb-lg"},r.formatMessage(L.Z.reviewDetails)),t)};F.propTypes={formFields:m().array};const B=F;var z=r(46441),A=r(9599),V=r(58854),W=r(28090),U=r(73943),Q=r(68778),H=r(94496),K=r(4682),Y=function(e){var t=e.onClose,r=(0,c.useContext)(be),n=r.setHideForm,o=r.setWizardSuccess,a=(0,p.Z)();return l().createElement(g.EmptyState,{variant:g.EmptyStateVariant.large},l().createElement(g.EmptyStateIcon,{color:"green",icon:Q.ZP}),l().createElement(g.Title,{headingLevel:"h4",size:"lg"},a.formatMessage(L.Z.roleCreatedSuccessfully)),l().createElement(g.EmptyStateBody,null),l().createElement(g.Button,{onClick:t,variant:"primary"},a.formatMessage(L.Z.exit)),l().createElement(g.EmptyStateSecondaryActions,null,l().createElement(g.Button,{onClick:function(){n(!1),o(!1)},variant:"link"},a.formatMessage(L.Z.createAnotherRole)),l().createElement(g.Button,{component:function(e){return l().createElement(H.Z,(0,s.Z)({to:K.Z.groups.link},e))},variant:"link"},a.formatMessage(L.Z.addRoleToGroup))))};Y.propTypes={onClose:m().func.isRequired};const X=Y;var J=r(30060),$=r(41693),ee=r(1936);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=function(e){var t=e.roleReducer,r=t.rolesForWizard,n=t.isWizardLoading;return{roles:r.data,pagination:r.meta,isWizardLoading:n}};var oe=r(11514),ae=function(e,t){return l().createElement("div",{className:"rbac-c-sticky"},l().createElement(g.Grid,{className:"rbac-c-sticky--title"},e.map((function(t){return l().createElement(g.GridItem,{span:12/e.length,key:t},t)}))),l().createElement(g.Grid,{className:"rbac-c-sticky--data"},t.map((function(t){return t.cells.map((function(t){return l().createElement(g.GridItem,{span:12/e.length,key:t},t)}))}))))};var ie=r(80709),se=r(91710);var ce=r(93736),le=r(15671),ue=r(43144),me=r(60136),de=r(82963),pe=r(61120);var fe=function(e){(0,me.Z)(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,pe.Z)(t);if(r){var o=(0,pe.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,de.Z)(this,e)});function o(e){var t;return(0,le.Z)(this,o),(t=n.call(this,e)).state={hasError:!1},t}return(0,ue.Z)(o,[{key:"componentDidCatch",value:function(e){if(!e.message.includes(this.props.silentErrorString))throw this.setState({hasError:!1}),e}},{key:"render",value:function(){return this.state.hasError?null:this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),o}(l().Component);fe.propTypes={children:m().node.isRequired,silentErrorString:m().string.isRequired};const he=fe;var ve=["Content"];function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var be=(0,c.createContext)({success:!1,submitting:!1,error:void 0}),Ee=function(e){return l().createElement(v.ZP,(0,s.Z)({},e,{showFormControls:!1}))},Ze=function(e){var t=e.Content,r=(0,i.Z)(e,ve);return l().createElement(t,r)};Ze.propTypes={Content:m().elementType.isRequired};var xe={"base-role-table":function(e){var t=(0,p.Z)(),r=(0,d.useDispatch)(),n=function(e){return r((0,W.hs)(e))},o=(0,c.useState)(""),i=(0,a.Z)(o,2),s=i[0],u=i[1],m=(0,d.useSelector)(ne,d.shallowEqual),f=m.roles,h=m.pagination,v=m.isWizardLoading,y=(0,$.Z)(e).input,E=(0,T.default)(),Z=["",{title:t.formatMessage(L.Z.name),key:"display_name",transforms:[ee.sortable]},t.formatMessage(L.Z.description)],x=(0,c.useState)({index:1,direction:"asc"}),w=(0,a.Z)(x,2),R=w[0],S=w[1],M="".concat("desc"===(null==R?void 0:R.direction)?"-":"").concat(Z[null==R?void 0:R.index].key);return(0,c.useEffect)((function(){n({limit:50,offset:0,itemCount:0,orderBy:M})}),[]),l().createElement("div",null,l().createElement(g.Alert,{variant:"info",isInline:!0,title:t.formatMessage(L.Z.granularPermissionsWillBeCopied)}),l().createElement(J.M,{columns:Z,rows:function(e){return e.map((function(e){return{cells:[{title:l().createElement(g.Radio,{id:"".concat(e.uuid,"-radio"),name:"".concat(e.name,"-radio"),"aria-label":"".concat(e.name,"-radio"),ouiaId:"".concat(e.name,"-radio"),value:e.uuid,isChecked:y.value.uuid===e.uuid,onChange:function(){E.batch((function(){y.onChange(e),E.change("role-copy-name","Copy of ".concat(e.display_name||e.name)),E.change("role-copy-description",e.description),E.change("add-permissions-table",[]),E.change("base-permissions-loaded",!1),E.change("not-allowed-permissions",[])}))}}),props:{className:"pf-c-table__check"}},e.display_name||e.name,e.description]}}))}(f),data:f,fetchData:function(e){n((0,b.jl)(e))},filterValue:s,setFilterValue:function(e){var t=e.name;return u(t)},isLoading:v,sortBy:R,onSort:function(e,t,r){var o="".concat("desc"===r?"-":"").concat(Z[t].key);S({index:t,direction:r}),n(re(re({},h),{},{offset:0,orderBy:o}))},pagination:h,titlePlural:t.formatMessage(L.Z.roles),titleSingular:t.formatMessage(L.Z.role),filterPlaceholder:t.formatMessage(L.Z.roleName).toLowerCase(),ouiaId:"roles-table",isCompact:!0,tableId:"base-role"}))},"add-permissions-table":oe.Z,"cost-resources":se.Z,"inventory-groups-role":ie.Z,review:function(){var e=(0,p.Z)(),t=(0,T.default)().getState().values,r=t["role-name"],n=t["role-description"],o=t["role-copy-name"],a=t["role-copy-description"],i=t["add-permissions-table"],s=t["resource-definitions"],c=t["has-cost-resources"],u=t["inventory-group-permissions"],m=t["role-type"],d=[e.formatMessage(L.Z.application),e.formatMessage(L.Z.resourceType),e.formatMessage(L.Z.operation)],f=i.map((function(e){return{cells:e.uuid.split(":")}})),h=(s||[]).map((function(e){return{cells:[e.permission,e.resources.join(", ")]}})),v=(u||[]).map((function(e){var t=e.permission,r=e.groups;return{cells:[t,null==r?void 0:r.map((function(e){return null==e?void 0:e.name})).join(", ")]}}));return l().createElement(l().Fragment,null,l().createElement(g.Stack,null,l().createElement(g.StackItem,{className:"rbac-l-stack__item-summary"},l().createElement(g.Grid,null,l().createElement(g.GridItem,{sm:12,md:2},l().createElement(g.Text,{component:g.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(L.Z.name))),l().createElement(g.GridItem,{sm:12,md:10},l().createElement(g.Text,{component:g.TextVariants.p},"create"===m?r:o))),l().createElement(g.Grid,null,l().createElement(g.GridItem,{sm:12,md:2},l().createElement(g.Text,{component:g.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(L.Z.description))),l().createElement(g.GridItem,{sm:12,md:10},l().createElement(g.Text,{component:g.TextVariants.p},"create"===m?n:a))),l().createElement(g.Grid,null,l().createElement(g.GridItem,{sm:12,md:2},l().createElement(g.Text,{component:g.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(L.Z.permissions))),l().createElement(g.GridItem,{sm:12,md:10},ae(d,f))),u&&l().createElement(g.Grid,null,l().createElement(g.GridItem,{sm:12,md:2},l().createElement(g.Text,{component:g.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(L.Z.resourceDefinitions))),l().createElement(g.GridItem,{sm:12,md:10},ae([e.formatMessage(L.Z.permission),e.formatMessage(L.Z.groupDefinition)],v))),c&&l().createElement(g.Grid,null,l().createElement(g.GridItem,{sm:12,md:2},l().createElement(g.Text,{component:g.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(L.Z.resourceDefinitions))),l().createElement(g.GridItem,{sm:12,md:10},ae([e.formatMessage(L.Z.permission),e.formatMessage(L.Z.resourceDefinitions)],h))))))},description:Ze,"type-selector":function(e){var t=(0,p.Z)(),r=(0,$.Z)(e).input,n=(0,T.default)(),o=(0,c.useState)(n.getState().values["role-type"]),i=(0,a.Z)(o,2),s=i[0],u=i[1],m=function(e){u(e),r.onChange(e),n.change("add-permissions-table",[]),n.change("base-permissions-loaded",!1),n.change("not-allowed-permissions",[])};return l().createElement("div",null,l().createElement(g.Radio,{isChecked:"create"===s,className:"pf-u-mb-sm",name:"role-type-create",onChange:function(){return m("create")},label:t.formatMessage(L.Z.createRoleFromScratch),id:"role-type-create",value:"create"}),l().createElement(g.Radio,{isChecked:"copy"===s,name:"role-type-copy",onChange:function(){return m("copy")},label:t.formatMessage(L.Z.copyAnExistingRole),id:"role-type-copy",value:"copy"}))}},we=function(e){var t=e.pagination,r=e.filters,o=e.orderBy,i=(0,p.Z)(),u=(0,d.useDispatch)(),m=(0,ce.Z)(),v=(0,E.Z)(),w=(0,c.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),R=(0,a.Z)(w,2),S=R[0],M=R[1],T=(0,c.useState)(!1),N=(0,a.Z)(T,2),P=N[0],q=N[1],I=(0,c.useRef)(document.createElement("div")),F=(0,c.useState)(),Q=(0,a.Z)(F,2),H=Q[0],Y=Q[1];(0,c.useEffect)((function(){Y(function(e){var t=(0,O.Sn)(),r=(0,C.d)({locale:k.S,messages:j},t);return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:r.formatMessage(L.Z.createRole),style:{overflow:"hidden"},container:e,fields:[{title:r.formatMessage(L.Z.createRole),name:"step-1",nextStep:{when:"role-type",stepMapper:{copy:"name-and-description",create:"add-permissions"}},fields:[{component:"type-selector",name:"role-type",isRequired:!0,validate:[{type:Z.Z.REQUIRED}]},{component:"text-field",name:"role-name",type:"text",label:r.formatMessage(L.Z.roleName),isRequired:!0,condition:{when:"role-type",is:"create"},validate:[G,{type:Z.Z.REQUIRED},{type:Z.Z.MAX_LENGTH,threshold:150}]},{component:"text-field",name:"role-description",type:"text",label:r.formatMessage(L.Z.roleDescription),condition:{when:"role-type",is:"create"},validate:[{type:"max-length",threshold:150}]},{component:"base-role-table",name:"copy-base-role",label:r.formatMessage(L.Z.baseRole),isRequired:!0,condition:{when:"role-type",is:"copy"},validate:[{type:Z.Z.REQUIRED}]},{condition:{when:"role-type",is:"create"},component:"description",name:"fixasyncvalidation",Content:D},{condition:{when:"role-type",is:"copy"},component:"description",name:"fixasyncvalidation2",Content:D}]},{title:r.formatMessage(L.Z.nameAndDescription),name:"name-and-description",nextStep:"add-permissions",fields:[{component:"text-field",name:"role-copy-name",type:"text",label:r.formatMessage(L.Z.roleName),isRequired:!0,validate:[G,{type:Z.Z.REQUIRED},{type:"max-length",threshold:150}]},{component:"text-field",name:"role-copy-description",type:"text",label:r.formatMessage(L.Z.roleDescription),validate:[{type:"max-length",threshold:150}]}]},{name:"add-permissions",title:r.formatMessage(L.Z.addPermissions),StepTemplate:x.Z,nextStep:function(e){var t=e.values;return(0,A.j)("add-permissions",t)},fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{title:r.formatMessage(L.Z.inventoryGroupsAccessTitle),name:"inventory-groups-role",StepTemplate:V.Z,nextStep:function(e){var t=e.values;return(0,A.j)("inventory-groups-role",t)},fields:[{component:"plain-text",name:"cost-resources",label:l().createElement("p",{className:"pf-u-mb-md"},r.formatMessage(L.Z.applyInventoryGroupsRolePermission))},{component:"inventory-groups-role",name:"inventory-groups-role",validate:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null!=e&&e.every((function(e){var t=e.groups,r=e.permission;return(null==t?void 0:t.length)>0&&r}))?void 0:r.formatMessage(L.Z.assignAtLeastOneInventoryGroup)}]}]},{name:"cost-resources-definition",title:r.formatMessage(L.Z.defineCostResources),nextStep:"review",StepTemplate:B,fields:[{component:"plain-text",name:"text-description",label:l().createElement("p",{className:"pf-u-mb-md"},r.formatMessage(L.Z.applyCostPermissionText))},{component:"cost-resources",name:"cost-resources",validate:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null!=e&&e.every((function(e){var t=e.resources;return(null==t?void 0:t.length)>0}))?void 0:r.formatMessage(L.Z.assignAtLeastOneResource)}]}]},{name:"review",title:r.formatMessage(L.Z.reviewDetails),buttons:function(e){return l().createElement(z.Z,(0,s.Z)({},e,{context:be}))},StepTemplate:_,fields:[{component:"review",name:"review"}]}]}]}}(I.current))}),[]);var J=function(){return m({pathname:K.Z.roles.link,search:(0,b.GT)({page:1,per_page:t.limit})})},$=function(){S.success||u((0,f.addNotification)({variant:"warning",title:i.formatMessage(L.Z.creatingRoleCanceled),dismissDelay:8e3})),q(!1),setTimeout((function(){m({pathname:K.Z.roles.link,search:(0,b.GT)(ge({page:1,per_page:t.limit},r))})}))};return H?l().createElement(be.Provider,{value:ge(ge({},S),{},{setWizardError:function(e){return M((function(t){return ge(ge({},t),{},{error:e})}))},setWizardSuccess:function(e){return M((function(t){return ge(ge({},t),{},{success:e})}))},setHideForm:function(e){return M((function(t){return ge(ge({},t),{},{hideForm:e})}))}})},l().createElement(he,{silentErrorString:"focus-trap"},l().createElement(U.R,{type:"role",isOpen:P,onModalCancel:function(){I.current.hidden=!1,q(!1)},onConfirmCancel:$})),S.hideForm?S.success?l().createElement(g.Wizard,{title:i.formatMessage(L.Z.createRole),isOpen:!0,onClose:J,steps:[{name:"success",component:l().createElement(X,{onClose:J}),isFinishedStep:!0}]}):null:l().createElement(h.Z,{schema:H,container:I,subscription:{values:!0},FormTemplate:Ee,initialValues:{"role-type":"create"},componentMapper:ge(ge({},y.ZP),xe),onSubmit:function(e){var r=e["role-name"],a=e["role-description"],i=e["role-copy-name"],s=e["role-copy-description"],c=e["add-permissions-table"],l=e["inventory-groups-role"],m=e["cost-resources"],d=e["role-type"],p=c.map((function(e){return e.uuid})),f={applications:(0,n.Z)(new Set(c.map((function(e){return e.uuid.split(":")[0]})))),description:("create"===d?a:s)||null,name:"create"===d?r:i,access:c.reduce((function(e,t){var r=t.uuid,o=t.requires,a=void 0===o?[]:o;return[].concat((0,n.Z)(e),(0,n.Z)([r].concat((0,n.Z)(a.filter((function(e){return!p.includes(e)})))).map((function(e){var t,r;if(e.includes("cost-management"))t={key:"cost-management.".concat(e.split(":")[1]),operation:"in",value:null==m||null===(r=m.find((function(t){return t.permission===e})))||void 0===r?void 0:r.resources};else if(e.includes("inventory")){var n,o;t={key:"groups.id",operation:"in",value:null==l||null===(n=l.find((function(t){return t.permission===e})))||void 0===n||null===(o=n.groups)||void 0===o?void 0:o.map((function(e){return null==e?void 0:e.id}))}}return{permission:e,resourceDefinitions:t?[{attributeFilter:t}]:[]}}))))}),[])};return u((0,W.fA)(f)).then((function(){M((function(e){return ge(ge({},e),{},{submitting:!1,success:!0,hideForm:!0})})),u((0,W.Kt)({limit:t.limit,orderBy:o,usesMetaInURL:!0,chrome:v}))})).catch((function(){M((function(e){return ge(ge({},e),{},{submitting:!1,success:!1,hideForm:!0})})),u((0,W.Kt)({limit:t.limit,orderBy:o,usesMetaInURL:!0,chrome:v})),J()}))},onCancel:function(e){Boolean(e&&e["role-name"]||e["role-description"]||e["copy-base-role"])?(I.current.hidden=!0,q(!0)):$()}})):null};we.propTypes={pagination:m().shape({limit:m().number.isRequired}).isRequired,filters:m().shape({name:m().string}).isRequired,orderBy:m().string};const Re=we}}]);
//# sourceMappingURL=../sourcemaps/4853.e1cca7e54ccd2c67a3093c60ca213a69.js.map
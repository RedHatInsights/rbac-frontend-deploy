/*! For license information please see 8607.1667899400646.ee2591a5285a261ca445.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[8607],{46441:(e,t,r)=>{r.d(t,{Z:()=>u});r(71002);var n=r(76857),o=r(92950),a=r.n(o),i=r(45697),s=r.n(i),c=(r(27361),r(48880));s().oneOfType([s().string,s().func,s().object]),s().func.isRequired,s().node.isRequired,s().bool,s().func.isRequired,s().node.isRequired,s().func.isRequired;var l=function(e){var t=e.renderNextButton,r=e.disableBack,i=e.handlePrev,s=e.buttonLabels,l=s.cancel,u=s.back,m=e.context,d=(0,c.default)(),p=(0,o.useContext)(m),f=p.success,h=p.error,y=p.submitting;return f||void 0===h||h||y?null:a().createElement(o.Fragment,null,t(),a().createElement(n.Button,{type:"button",variant:"secondary",isDisabled:r,onClick:i},u),a().createElement(n.Button,{type:"button",variant:"link",onClick:d.onCancel},l))};l.propTypes={disableBack:s().bool,handlePrev:s().func.isRequired,handleNext:s().func.isRequired,nextStep:s().oneOfType([s().string,s().shape({when:s().string.isRequired,stepMapper:s().object.isRequired}),s().func]),buttonLabels:s().shape({submit:s().node.isRequired,cancel:s().node.isRequired,back:s().node.isRequired,next:s().node.isRequired}).isRequired,context:s().object.isRequired,renderNextButton:s().func};const u=l},65731:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),o=r.n(n),a=r(76857),i=r(70363),s=r(43047),c=r(86896),l=r(45697),u=r.n(l),m=r(30893),d=function(e){var t=e.context,r=e.title,l=e.text,u=(0,c.Z)(),d=(0,n.useContext)(i.default).jumpToStep,p=(0,n.useContext)(t).setWizardError;return o().createElement(a.EmptyState,{variant:a.EmptyStateVariant.large},o().createElement(a.EmptyStateIcon,{color:"red",icon:s.ZP}),o().createElement(a.Title,{headingLevel:"h4",size:"lg"},r),o().createElement(a.EmptyStateBody,null,l),o().createElement(a.Button,{onClick:function(){p(void 0),d(0)},variant:"primary"},u.formatMessage(m.Z.returnToStepNumber,{number:1})))};d.propTypes={context:u().object.isRequired,title:u().string.isRequired,text:u().string.isRequired};const p=d},68607:(e,t,r)=>{r.r(t),r.d(t,{AddRoleWizardContext:()=>de,default:()=>ve,mapperExtension:()=>he});var n=r(93433),o=r(4942),a=r(29439),i=r(45987),s=r(87462),c=r(92950),l=r.n(c),u=r(45697),m=r.n(u),d=r(28216),p=r(71355),f=r(93025),h=r(67850),y=r(46966),v=r(76857),g=r(64124),E=r(94852),b=r(71002),x=r(15861),Z=r(43115),w=r(40639),R=r(48880),S=r(28412),T=r(82644),M=r(29558),k=r(30893),C=r(2034);function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new R(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u={};function m(){}function d(){}function p(){}var f={};s(f,o,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(S([])));y&&y!==t&&r.call(y,o)&&(f=y);var v=p.prototype=m.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,i,s){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==(0,b.Z)(m)&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function Z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=p,s(v,"constructor",p),s(p,"constructor",d),d.displayName=s(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(E.prototype),s(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),s(v,i,"Generator"),s(v,o,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var N=function(){var e=(0,x.Z)(L().mark((function e(t){var r,n,o,a,i,s;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=(0,T.Sn)(),a=(0,M.d)({locale:S.locale,messages:C},o),t){e.next=4;break}return e.abrupt("return",void 0);case 4:return e.next=6,(0,Z.vd)({limit:10,offset:0,name:t,nameMatch:"exact"}).catch((function(e){console.error(e)}));case 6:return i=e.sent,e.next=9,(0,Z.vd)({limit:10,offset:0,displayName:t,nameMatch:"exact"}).catch((function(e){console.error(e)}));case 9:if(s=e.sent,!((null==i||null===(r=i.data)||void 0===r?void 0:r.length)>0||(null==s||null===(n=s.data)||void 0===n?void 0:n.length)>0)){e.next=12;break}throw a.formatMessage(k.Z.nameAlreadyTaken);case 12:return e.abrupt("return",void 0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(0,w.Z)(N),q=function(e){var t=e.name,r=(0,R.default)();return(0,c.useEffect)((function(){return setTimeout((function(){return r.change(t,"1")})),function(){return r.change(t,"")}}),[]),null},_=r(65731),j=r(86896),G=function(e){var t,r=e.formFields,n=(0,j.Z)(),o=(0,c.useContext)(de),a=o.submitting,i=o.error,s=o.setWizardError,u=(0,R.default)().getState;return(0,c.useEffect)((function(){s(void 0),N(u().values["role-name"]).then((function(){return s(!1)})).catch((function(){return s(!0)}))}),[]),void 0===i||a?l().createElement(v.Bullseye,null,l().createElement(v.Spinner,{size:"xl"})):!0===i?l().createElement(_.Z,{context:de,title:n.formatMessage(k.Z.roleNameTakenTitle),text:n.formatMessage(k.Z.roleNameTakenText)}):l().createElement("div",{className:"rbac"},l().createElement(v.Title,{headingLevel:"h1",size:"xl",className:"pf-u-mb-sm"},n.formatMessage(k.Z.reviewDetails)),l().createElement(v.TextContent,{className:"pf-u-mb-md"},l().createElement(v.Text,null,n.formatMessage(k.Z.reviewRoleDetails))),null==r||null===(t=r[0])||void 0===t?void 0:t[0])};G.propTypes={formFields:m().array};const P=G;var D=function(e){var t=e.formFields,r=(0,j.Z)();return l().createElement("div",{className:"rbac"},l().createElement(v.Title,{headingLevel:"h1",size:"xl",className:"pf-u-mb-lg"},r.formatMessage(k.Z.reviewDetails)),t)};D.propTypes={formFields:m().array};const F=D;var I=r(46441),B=r(28090),z=r(73943),A=r(68778),V=r(334),W=function(e){var t=e.onClose,r=(0,c.useContext)(de),n=r.setHideForm,o=r.setWizardSuccess,a=(0,j.Z)();return l().createElement(v.EmptyState,{variant:v.EmptyStateVariant.large},l().createElement(v.EmptyStateIcon,{color:"green",icon:A.ZP}),l().createElement(v.Title,{headingLevel:"h4",size:"lg"},a.formatMessage(k.Z.roleCreatedSuccessfully)),l().createElement(v.EmptyStateBody,null),l().createElement(v.Button,{onClick:t,variant:"primary"},a.formatMessage(k.Z.exit)),l().createElement(v.EmptyStateSecondaryActions,null,l().createElement(v.Button,{onClick:function(){n(!1),o(!1)},variant:"link"},a.formatMessage(k.Z.createAnotherRole)),l().createElement(v.Button,{component:function(e){return l().createElement(V.Link,(0,s.Z)({to:"/groups"},e))},variant:"link"},a.formatMessage(k.Z.addRoleToGroup))))};W.propTypes={onClose:m().func.isRequired};const H=W;var Q=r(94124),U=r(11107),K=r(41693),Y=r(1936),X=function(e){var t=e.roleReducer,r=t.rolesForWizard,n=t.isLoading;return{roles:r.data,pagination:r.meta,isLoading:n}};var J=r(94487),$=function(e,t){return l().createElement("div",{className:"rbac-c-sticky"},l().createElement(v.Grid,{className:"rbac-c-sticky--title"},e.map((function(t){return l().createElement(v.GridItem,{span:12/e.length,key:t},t)}))),l().createElement(v.Grid,{className:"rbac-c-sticky--data"},t.map((function(t){return t.cells.map((function(t){return l().createElement(v.GridItem,{span:12/e.length,key:t},t)}))}))))};var ee=r(64105);var te=r(4682),re=r(15671),ne=r(43144),oe=r(60136),ae=r(82963),ie=r(61120);var se=function(e){(0,oe.Z)(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,ie.Z)(t);if(r){var o=(0,ie.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,ae.Z)(this,e)});function o(e){var t;return(0,re.Z)(this,o),(t=n.call(this,e)).state={hasError:!1},t}return(0,ne.Z)(o,[{key:"componentDidCatch",value:function(e){if(!e.message.includes(this.props.silentErrorString))throw this.setState({hasError:!1}),e}},{key:"render",value:function(){return this.state.hasError?null:this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),o}(l().Component);se.propTypes={children:m().node.isRequired,silentErrorString:m().string.isRequired};const ce=se;var le=["Content"];function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=(0,c.createContext)({success:!1,submitting:!1,error:void 0}),pe=function(e){return l().createElement(h.ZP,(0,s.Z)({},e,{showFormControls:!1}))},fe=function(e){var t=e.Content,r=(0,i.Z)(e,le);return l().createElement(t,r)};fe.propTypes={Content:m().elementType.isRequired};var he={"base-role-table":function(e){var t=(0,j.Z)(),r=(0,d.useDispatch)(),n=function(e){return r((0,B.hs)(e))},o=(0,c.useState)(""),i=(0,a.Z)(o,2),s=i[0],u=i[1],m=(0,d.useSelector)(X,d.shallowEqual),p=m.roles,f=m.pagination,h=(0,K.Z)(e).input,y=(0,R.default)(),g=["",{title:t.formatMessage(k.Z.name),key:"display_name",transforms:[Y.sortable]},t.formatMessage(k.Z.description)];return(0,c.useEffect)((function(){n({limit:50,offset:0,itemCount:0,orderBy:"display_name"})}),[]),l().createElement("div",null,l().createElement(v.Alert,{variant:"info",isInline:!0,title:t.formatMessage(k.Z.granularPermissionsWillBeCopied)}),l().createElement(Q.f,{columns:g,createRows:function(e){return e.map((function(e){return{cells:[{title:l().createElement(v.Radio,{id:"".concat(e.uuid,"-radio"),name:"".concat(e.name,"-radio"),"aria-label":"".concat(e.name,"-radio"),ouiaId:"".concat(e.name,"-radio"),value:e.uuid,isChecked:h.value.uuid===e.uuid,onChange:function(){y.batch((function(){h.onChange(e),y.change("role-copy-name","Copy of ".concat(e.display_name||e.name)),y.change("role-copy-description",e.description),y.change("add-permissions-table",[]),y.change("base-permissions-loaded",!1),y.change("not-allowed-permissions",[])}))}}),props:{className:"pf-c-table__check"}},e.display_name||e.name,e.description]}}))},data:p,fetchData:function(e){return n((0,U.jl)(e))},filterValue:s,setFilterValue:function(e){var t=e.name;return u(t)},isLoading:!1,pagination:f,titlePlural:t.formatMessage(k.Z.roles),titleSingular:t.formatMessage(k.Z.role),filterPlaceholder:t.formatMessage(k.Z.roleName).toLowerCase(),ouiaId:"roles-table",isCompact:!0,tableId:"base-role"}))},"add-permissions-table":J.Z,"cost-resources":ee.Z,review:function(){var e=(0,j.Z)(),t=(0,R.default)().getState().values,r=t["role-name"],n=t["role-description"],o=t["role-copy-name"],a=t["role-copy-description"],i=t["add-permissions-table"],s=t["resource-definitions"],c=t["has-cost-resources"],u=t["role-type"],m=[e.formatMessage(k.Z.application),e.formatMessage(k.Z.resourceType),e.formatMessage(k.Z.operation)],d=i.map((function(e){return{cells:e.uuid.split(":")}})),p=(s||[]).map((function(e){return{cells:[e.permission,e.resources.join(", ")]}}));return l().createElement(l().Fragment,null,l().createElement(v.Stack,null,l().createElement(v.StackItem,{className:"rbac-l-stack__item-summary"},l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(k.Z.name))),l().createElement(v.GridItem,{sm:12,md:10},l().createElement(v.Text,{component:v.TextVariants.p},"create"===u?r:o))),l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(k.Z.description))),l().createElement(v.GridItem,{sm:12,md:10},l().createElement(v.Text,{component:v.TextVariants.p},"create"===u?n:a))),l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(k.Z.permissions))),l().createElement(v.GridItem,{sm:12,md:10},$(m,d))),c&&l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(k.Z.resourceDefinitions))),l().createElement(v.GridItem,{sm:12,md:10},$([e.formatMessage(k.Z.permission),e.formatMessage(k.Z.resourceDefinitions)],p))))))},description:fe,"type-selector":function(e){var t=(0,j.Z)(),r=(0,K.Z)(e).input,n=(0,R.default)(),o=(0,c.useState)(n.getState().values["role-type"]),i=(0,a.Z)(o,2),s=i[0],u=i[1],m=function(e){u(e),r.onChange(e),n.change("add-permissions-table",[]),n.change("base-permissions-loaded",!1),n.change("not-allowed-permissions",[])};return l().createElement("div",null,l().createElement(v.Radio,{isChecked:"create"===s,className:"pf-u-mb-sm",name:"role-type-create",onChange:function(){return m("create")},label:t.formatMessage(k.Z.createRoleFromScratch),id:"role-type-create",value:"create"}),l().createElement(v.Radio,{isChecked:"copy"===s,name:"role-type-copy",onChange:function(){return m("copy")},label:t.formatMessage(k.Z.copyAnExistingRole),id:"role-type-copy",value:"copy"}))}},ye=function(e){var t=e.pagination,r=e.filters,o=e.orderBy,i=(0,j.Z)(),u=(0,d.useDispatch)(),m=(0,V.useHistory)().push,h=(0,c.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),b=(0,a.Z)(h,2),x=b[0],Z=b[1],w=(0,c.useState)(!1),R=(0,a.Z)(w,2),L=R[0],N=R[1],_=(0,c.useRef)(document.createElement("div")),G=(0,c.useState)(),D=(0,a.Z)(G,2),A=D[0],W=D[1];(0,c.useEffect)((function(){W(function(e){var t=(0,T.Sn)(),r=(0,M.d)({locale:S.locale,messages:C},t);return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:r.formatMessage(k.Z.createRole),style:{overflow:"hidden"},container:e,fields:[{title:r.formatMessage(k.Z.createRole),name:"step-1",nextStep:{when:"role-type",stepMapper:{copy:"name-and-description",create:"add-permissions"}},fields:[{component:"type-selector",name:"role-type",isRequired:!0,validate:[{type:g.Z.REQUIRED}]},{component:"text-field",name:"role-name",type:"text",label:r.formatMessage(k.Z.roleName),isRequired:!0,condition:{when:"role-type",is:"create"},validate:[O,{type:g.Z.REQUIRED},{type:g.Z.MAX_LENGTH,threshold:150}]},{component:"text-field",name:"role-description",type:"text",label:r.formatMessage(k.Z.roleDescription),condition:{when:"role-type",is:"create"},validate:[{type:"max-length",threshold:150}]},{component:"base-role-table",name:"copy-base-role",label:r.formatMessage(k.Z.baseRole),isRequired:!0,condition:{when:"role-type",is:"copy"},validate:[{type:g.Z.REQUIRED}]},{condition:{when:"role-type",is:"create"},component:"description",name:"fixasyncvalidation",Content:q},{condition:{when:"role-type",is:"copy"},component:"description",name:"fixasyncvalidation2",Content:q}]},{title:r.formatMessage(k.Z.nameAndDescription),name:"name-and-description",nextStep:"add-permissions",fields:[{component:"text-field",name:"role-copy-name",type:"text",label:r.formatMessage(k.Z.roleName),isRequired:!0,validate:[O,{type:g.Z.REQUIRED},{type:"max-length",threshold:150}]},{component:"text-field",name:"role-copy-description",type:"text",label:r.formatMessage(k.Z.roleDescription),validate:[{type:"max-length",threshold:150}]}]},{name:"add-permissions",title:r.formatMessage(k.Z.addPermissions),StepTemplate:E.Z,nextStep:function(e){var t=e.values;return t&&t["add-permissions-table"]&&t["add-permissions-table"].some((function(e){return e.uuid.split(":")[0].includes("cost-management")}))?"cost-resources-definition":"review"},fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{name:"cost-resources-definition",title:r.formatMessage(k.Z.defineCostResources),nextStep:"review",StepTemplate:F,fields:[{component:"plain-text",name:"text-description",label:l().createElement("p",{className:"pf-u-mb-md"},r.formatMessage(k.Z.applyCostPermissionText))},{component:"cost-resources",name:"cost-resources",validate:[function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).every((function(e){return e.resources.length>0}))?void 0:r.formatMessage(k.Z.assignAtLeastOneResource)}]}]},{name:"review",title:r.formatMessage(k.Z.reviewDetails),buttons:function(e){return l().createElement(I.Z,(0,s.Z)({},e,{context:de}))},StepTemplate:P,fields:[{component:"review",name:"review"}]}]}]}}(_.current))}),[]);var Q=function(){return m({pathname:te.Z.roles.path,search:(0,U.GT)({page:1,per_page:t.limit})})},K=function(){x.success||u((0,p.addNotification)({variant:"warning",title:i.formatMessage(k.Z.creatingRoleCanceled),dismissDelay:8e3})),N(!1),setTimeout((function(){m({pathname:te.Z.roles.path,search:(0,U.GT)(me({page:1,per_page:t.limit},r))})}))};return A?l().createElement(de.Provider,{value:me(me({},x),{},{setWizardError:function(e){return Z((function(t){return me(me({},t),{},{error:e})}))},setWizardSuccess:function(e){return Z((function(t){return me(me({},t),{},{success:e})}))},setHideForm:function(e){return Z((function(t){return me(me({},t),{},{hideForm:e})}))}})},l().createElement(ce,{silentErrorString:"focus-trap"},l().createElement(z.R,{type:"role",isOpen:L,onModalCancel:function(){_.current.hidden=!1,N(!1)},onConfirmCancel:K})),x.hideForm?x.success?l().createElement(v.Wizard,{title:i.formatMessage(k.Z.createRole),isOpen:!0,onClose:Q,steps:[{name:"success",component:l().createElement(H,{onClose:Q}),isFinishedStep:!0}]}):null:l().createElement(f.Z,{schema:A,container:_,subscription:{values:!0},FormTemplate:pe,initialValues:{"role-type":"create"},componentMapper:me(me({},y.ZP),he),onSubmit:function(e){var a=e["role-name"],i=e["role-description"],s=e["role-copy-name"],c=e["role-copy-description"],l=e["add-permissions-table"],m=e["cost-resources"],d=e["role-type"];Z((function(e){return me(me({},e),{},{submitting:!0})}));var p=l.map((function(e){return e.uuid})),f={applications:(0,n.Z)(new Set(l.map((function(e){return e.uuid.split(":")[0]})))),description:("create"===d?i:c)||null,name:"create"===d?a:s,access:l.reduce((function(e,t){var r=t.uuid,o=t.requires,a=void 0===o?[]:o;return[].concat((0,n.Z)(e),(0,n.Z)([r].concat((0,n.Z)(a.filter((function(e){return!p.includes(e)})))).map((function(e){return{permission:e,resourceDefinitions:null!=m&&m.find((function(t){return t.permission===e}))?[{attributeFilter:{key:"cost-management.".concat(e.split(":")[1]),operation:"in",value:null==m?void 0:m.find((function(t){return t.permission===e})).resources}}]:[]}}))))}),[])};return u((0,B.fA)(f)).then((function(){Z((function(e){return me(me({},e),{},{submitting:!1,success:!0,hideForm:!0})})),u((0,B.Kt)({limit:t.limit,orderBy:o,filters:r,inModal:!1}))})).catch((function(){Z((function(e){return me(me({},e),{},{submitting:!1,success:!1,hideForm:!0})})),u((0,B.Kt)({limit:t.limit,orderBy:o,filters:r,inModal:!1})),Q()}))},onCancel:function(e){Boolean(e&&e["role-name"]||e["role-description"]||e["copy-base-role"])?(_.current.hidden=!0,N(!0)):K()}})):null};ye.propTypes={pagination:m().shape({limit:m().number.isRequired}).isRequired,filters:m().shape({name:m().string}).isRequired,orderBy:m().string};const ve=ye}}]);
//# sourceMappingURL=../sourcemaps/8607.5e6cc54efe5923ca6b6acd12220771cc.js.map
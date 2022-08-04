/*! For license information please see 8607.1659618032492.e54e2fece2aa835a68b5.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[8607],{46441:(e,t,n)=>{n.d(t,{Z:()=>u});n(71002);var r=n(57262),o=n(92950),i=n.n(o),a=n(45697),c=n.n(a),s=(n(27361),n(48880));c().oneOfType([c().string,c().func,c().object]),c().func.isRequired,c().node.isRequired,c().bool,c().func.isRequired,c().node.isRequired,c().func.isRequired;var l=function(e){var t=e.renderNextButton,n=e.disableBack,a=e.handlePrev,c=e.buttonLabels,l=c.cancel,u=c.back,d=e.context,p=(0,s.default)(),m=(0,o.useContext)(d),f=m.success,h=m.error,y=m.submitting;return f||void 0===h||h||y?null:i().createElement(o.Fragment,null,t(),i().createElement(r.Button,{type:"button",variant:"secondary",isDisabled:n,onClick:a},u),i().createElement(r.Button,{type:"button",variant:"link",onClick:p.onCancel},l))};l.propTypes={disableBack:c().bool,handlePrev:c().func.isRequired,handleNext:c().func.isRequired,nextStep:c().oneOfType([c().string,c().shape({when:c().string.isRequired,stepMapper:c().object.isRequired}),c().func]),buttonLabels:c().shape({submit:c().node.isRequired,cancel:c().node.isRequired,back:c().node.isRequired,next:c().node.isRequired}).isRequired,context:c().object.isRequired,renderNextButton:c().func};const u=l},65731:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(92950),o=n.n(r),i=n(57262),a=n(70363),c=n(43047),s=n(45697),l=n.n(s),u=function(e){var t=e.context,n=e.title,s=e.text,l=(0,r.useContext)(a.default).jumpToStep,u=(0,r.useContext)(t).setWizardError;return o().createElement(i.EmptyState,{variant:i.EmptyStateVariant.large},o().createElement(i.EmptyStateIcon,{color:"red",icon:c.ZP}),o().createElement(i.Title,{headingLevel:"h4",size:"lg"},n),o().createElement(i.EmptyStateBody,null,s),o().createElement(i.Button,{onClick:function(){u(void 0),l(0)},variant:"primary"},"Return to Step 1"))};u.propTypes={context:l().object.isRequired,title:l().string.isRequired,text:l().string.isRequired};const d=u},68607:(e,t,n)=>{n.r(t),n.d(t,{AddRoleWizardContext:()=>ae,default:()=>de,mapperExtension:()=>le});var r=n(93433),o=n(4942),i=n(29439),a=n(45987),c=n(87462),s=n(92950),l=n.n(s),u=n(45697),d=n.n(u),p=n(28216),m=n(71355),f=n(93025),h=n(67850),y=n(46966),v=n(57262),g=n(64124),E=n(94852),b=n(71002),x=n(15861),w=n(43115),R=n(84974),S=n(48880);function C(){C=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u={};function d(){}function p(){}function m(){}var f={};c(f,o,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(k([])));y&&y!==t&&n.call(y,o)&&(f=y);var v=m.prototype=d.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(o,i,a,c){var s=l(e[o],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==(0,b.Z)(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=m,c(v,"constructor",m),c(m,"constructor",p),p.displayName=c(m,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,a,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(v),c(v,a,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var k=function(){var e=(0,x.Z)(C().mark((function e(t){var n,r;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,(0,w.vd)({limit:10,offset:0,name:t,nameMatch:"exact"}).catch((function(e){console.error(e)}));case 4:if(!((null==(r=e.sent)||null===(n=r.data)||void 0===n?void 0:n.length)>0)){e.next=7;break}throw"Name has already been taken";case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=(0,R.Z)(k),Z=function(e){var t=e.name,n=(0,S.default)();return(0,s.useEffect)((function(){return setTimeout((function(){return n.change(t,"1")})),function(){return n.change(t,"")}}),[]),null},L=n(65731),O=function(e){var t,n=e.formFields,r=(0,s.useContext)(ae),o=r.submitting,i=r.error,a=r.setWizardError,c=(0,S.default)().getState;return(0,s.useEffect)((function(){a(void 0),k(c().values["role-name"]).then((function(){return a(!1)})).catch((function(){return a(!0)}))}),[]),void 0===i||o?l().createElement(v.Bullseye,null,l().createElement(v.Spinner,{size:"xl"})):!0===i?l().createElement(L.Z,{context:ae,title:"Role name already taken",text:"Please return to Step 1: Create role and choose a unique role name for your custom role."}):l().createElement("div",{className:"rbac"},l().createElement(v.Title,{headingLevel:"h1",size:"xl",className:"pf-u-mb-sm"},"Review details"),l().createElement(v.TextContent,{className:"pf-u-mb-md"},l().createElement(v.Text,null,"Review and confirm the details for your role, or click Back to revise.")),null==n||null===(t=n[0])||void 0===t?void 0:t[0])};O.propTypes={formFields:d().array};const q=O;var N=function(e){var t=e.formFields;return l().createElement("div",{className:"rbac"},l().createElement(v.Title,{headingLevel:"h1",size:"xl",className:"pf-u-mb-lg"},"Review details"),t)};N.propTypes={formFields:d().array};const _=N;var j=n(46441),G=n(28090),P=n(73943),F=n(68778),I=n(334),D=function(e){var t=e.onClose,n=(0,s.useContext)(ae),r=n.setHideForm,o=n.setWizardSuccess;return l().createElement(v.EmptyState,{variant:v.EmptyStateVariant.large},l().createElement(v.EmptyStateIcon,{color:"green",icon:F.ZP}),l().createElement(v.Title,{headingLevel:"h4",size:"lg"},"You have successfully created a new role"),l().createElement(v.EmptyStateBody,null),l().createElement(v.Button,{onClick:t,variant:"primary"},"Exit"),l().createElement(v.EmptyStateSecondaryActions,null,l().createElement(v.Button,{onClick:function(){r(!1),o(!1)},variant:"link"},"Create another role"),l().createElement(v.Button,{component:function(e){return l().createElement(I.Link,(0,c.Z)({to:"/groups"},e))},variant:"link"},"Add role to group")))};D.propTypes={onClose:d().func.isRequired};const B=D;var z=n(41800),M=n(11107),V=n(41693),A=["",{title:"Name",key:"display_name",transforms:[n(1936).sortable]},"Description"],W=function(e){var t=e.roleReducer,n=t.rolesForWizard,r=t.isLoading;return{roles:n.data,pagination:n.meta,isLoading:r}};var H=n(94487),Q=function(e,t){return l().createElement("div",{className:"rbac-c-sticky"},l().createElement(v.Grid,{className:"rbac-c-sticky--title"},e.map((function(t){return l().createElement(v.GridItem,{span:12/e.length,key:t},t)}))),l().createElement(v.Grid,{className:"rbac-c-sticky--data"},t.map((function(t){return t.cells.map((function(t){return l().createElement(v.GridItem,{span:12/e.length,key:t},t)}))}))))};var U=n(64105);var Y=n(4682),K=n(15671),X=n(43144),J=n(60136),$=n(82963),ee=n(61120);var te=function(e){(0,J.Z)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,ee.Z)(t);if(n){var o=(0,ee.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,$.Z)(this,e)});function o(e){var t;return(0,K.Z)(this,o),(t=r.call(this,e)).state={hasError:!1},t}return(0,X.Z)(o,[{key:"componentDidCatch",value:function(e){if(!e.message.includes(this.props.silentErrorString))throw this.setState({hasError:!1}),e}},{key:"render",value:function(){return this.state.hasError?null:this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),o}(l().Component);te.propTypes={children:d().node.isRequired,silentErrorString:d().string.isRequired};const ne=te;var re=["Content"];function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=(0,s.createContext)({success:!1,submitting:!1,error:void 0}),ce=function(e){return l().createElement(h.ZP,(0,c.Z)({},e,{showFormControls:!1}))},se=function(e){var t=e.Content,n=(0,a.Z)(e,re);return l().createElement(t,n)};se.propTypes={Content:d().elementType.isRequired};var le={"base-role-table":function(e){var t=(0,p.useDispatch)(),n=function(e){return t((0,G.hs)(e))},r=(0,s.useState)(""),o=(0,i.Z)(r,2),a=o[0],c=o[1],u=(0,p.useSelector)(W,p.shallowEqual),d=u.roles,m=u.pagination,f=(0,V.Z)(e).input,h=(0,S.default)();return(0,s.useEffect)((function(){n({limit:50,offset:0,itemCount:0,orderBy:"display_name"})}),[]),l().createElement("div",null,l().createElement(v.Alert,{variant:"info",isInline:!0,title:"Only granular permissions will be copied into a custom role         (for example, approval:requests:read). Wildcard permissions will not         be copied into a custom role (for example, approval:*:read).\n        "}),l().createElement(z.M,{columns:A,createRows:function(e){return e.map((function(e){return{cells:[{title:l().createElement(v.Radio,{id:"".concat(e.uuid,"-radio"),name:"".concat(e.name,"-radio"),"aria-label":"".concat(e.name,"-radio"),ouiaId:"".concat(e.name,"-radio"),value:e.uuid,isChecked:f.value.uuid===e.uuid,onChange:function(){h.batch((function(){f.onChange(e),h.change("role-copy-name","Copy of ".concat(e.display_name||e.name)),h.change("role-copy-description",e.description),h.change("add-permissions-table",[]),h.change("base-permissions-loaded",!1),h.change("not-allowed-permissions",[])}))}}),props:{className:"pf-c-table__check"}},e.display_name||e.name,e.description]}}))},data:d,fetchData:function(e){return n((0,M.jl)(e))},filterValue:a,setFilterValue:function(e){var t=e.name;return c(t)},isLoading:!1,pagination:m,titlePlural:"roles",titleSingular:"role",filterPlaceholder:"role name",ouiaId:"roles-table",isCompact:!0,tableId:"base-role"}))},"add-permissions-table":H.Z,"cost-resources":U.Z,review:function(){var e=(0,S.default)().getState().values,t=e["role-name"],n=e["role-description"],r=e["role-copy-name"],o=e["role-copy-description"],i=e["add-permissions-table"],a=e["resource-definitions"],c=e["has-cost-resources"],s=e["role-type"],u=i.map((function(e){return{cells:e.uuid.split(":")}})),d=(a||[]).map((function(e){return{cells:[e.permission,e.resources.join(", ")]}}));return l().createElement(l().Fragment,null,l().createElement(v.Stack,null,l().createElement(v.StackItem,{className:"rbac-l-stack__item-summary"},l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"rbac-bold-text"},"Name")),l().createElement(v.GridItem,{sm:12,md:10},l().createElement(v.Text,{component:v.TextVariants.p},"create"===s?t:r))),l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"rbac-bold-text"},"Description")),l().createElement(v.GridItem,{sm:12,md:10},l().createElement(v.Text,{component:v.TextVariants.p},"create"===s?n:o))),l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"rbac-bold-text"},"Permissions")),l().createElement(v.GridItem,{sm:12,md:10},Q(["Application","Resource type","Operation"],u))),c&&l().createElement(v.Grid,null,l().createElement(v.GridItem,{sm:12,md:2},l().createElement(v.Text,{component:v.TextVariants.h4,className:"rbac-bold-text"},"Resource definitions")),l().createElement(v.GridItem,{sm:12,md:10},Q(["Permission","Resource definitions"],d))))))},description:se,"type-selector":function(e){var t=(0,V.Z)(e).input,n=(0,S.default)(),r=(0,s.useState)(n.getState().values["role-type"]),o=(0,i.Z)(r,2),a=o[0],c=o[1],u=function(e){c(e),t.onChange(e),n.change("add-permissions-table",[]),n.change("base-permissions-loaded",!1),n.change("not-allowed-permissions",[])};return l().createElement("div",null,l().createElement(v.Radio,{isChecked:"create"===a,className:"pf-u-mb-sm",name:"role-type-create",onChange:function(){return u("create")},label:"Create a role from scratch",id:"role-type-create",value:"create"}),l().createElement(v.Radio,{isChecked:"copy"===a,name:"role-type-copy",onChange:function(){return u("copy")},label:"Copy an existing role",id:"role-type-copy",value:"copy"}))}},ue=function(e){var t=e.pagination,n=e.filters,o=(0,p.useDispatch)(),a=(0,I.useHistory)().push,u=(0,s.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),d=(0,i.Z)(u,2),h=d[0],b=d[1],x=(0,s.useState)(!1),w=(0,i.Z)(x,2),R=w[0],S=w[1],C=(0,s.useRef)(document.createElement("div")),k=(0,s.useState)(),L=(0,i.Z)(k,2),O=L[0],N=L[1];(0,s.useEffect)((function(){N(function(e){return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:"Create role",style:{overflow:"hidden"},container:e,fields:[{title:"Create role",name:"step-1",nextStep:{when:"role-type",stepMapper:{copy:"name-and-description",create:"add-permissions"}},fields:[{component:"type-selector",name:"role-type",isRequired:!0,validate:[{type:g.Z.REQUIRED}]},{component:"text-field",name:"role-name",type:"text",label:"Role name",isRequired:!0,condition:{when:"role-type",is:"create"},validate:[T,{type:g.Z.REQUIRED},{type:g.Z.MAX_LENGTH,threshold:150}]},{component:"text-field",name:"role-description",type:"text",label:"Role description",condition:{when:"role-type",is:"create"},validate:[{type:"max-length",threshold:150}]},{component:"base-role-table",name:"copy-base-role",label:"Base role",isRequired:!0,condition:{when:"role-type",is:"copy"},validate:[{type:g.Z.REQUIRED}]},{condition:{when:"role-type",is:"create"},component:"description",name:"fixasyncvalidation",Content:Z},{condition:{when:"role-type",is:"copy"},component:"description",name:"fixasyncvalidation2",Content:Z}]},{title:"Name and description",name:"name-and-description",nextStep:"add-permissions",fields:[{component:"text-field",name:"role-copy-name",type:"text",label:"Role name",isRequired:!0,validate:[T,{type:g.Z.REQUIRED},{type:"max-length",threshold:150}]},{component:"text-field",name:"role-copy-description",type:"text",label:"Role description",validate:[{type:"max-length",threshold:150}]}]},{name:"add-permissions",title:"Add permissions",StepTemplate:E.Z,nextStep:function(e){var t=e.values;return t&&t["add-permissions-table"]&&t["add-permissions-table"].some((function(e){return e.uuid.split(":")[0].includes("cost-management")}))?"cost-resources-definition":"review"},fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{name:"cost-resources-definition",title:"Define Cost Management resources",nextStep:"review",StepTemplate:_,fields:[{component:"plain-text",name:"text-description",label:l().createElement("p",{className:"pf-u-mb-md"},"Specify where you would like to apply each cost permission selected in the previous step, using the dropdown below.")},{component:"cost-resources",name:"cost-resources",validate:[function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).every((function(e){return e.resources.length>0}))?void 0:"You need to assign at least one resource to each permission."}]}]},{name:"review",title:"Review details",buttons:function(e){return l().createElement(j.Z,(0,c.Z)({},e,{context:ae}))},StepTemplate:q,fields:[{component:"review",name:"review"}]}]}]}}(C.current))}),[]);var F=function(){return a({pathname:Y.Z.roles.path,search:(0,M.GT)({page:1,per_page:t.limit})})},D=function(){h.success||o((0,m.wN)({variant:"warning",title:"Creating role was canceled by the user",dismissDelay:8e3})),S(!1),setTimeout((function(){a({pathname:Y.Z.roles.path,search:(0,M.GT)(ie({page:1,per_page:t.limit},n))})}))};return O?l().createElement(ae.Provider,{value:ie(ie({},h),{},{setWizardError:function(e){return b((function(t){return ie(ie({},t),{},{error:e})}))},setWizardSuccess:function(e){return b((function(t){return ie(ie({},t),{},{success:e})}))},setHideForm:function(e){return b((function(t){return ie(ie({},t),{},{hideForm:e})}))}})},l().createElement(ne,{silentErrorString:"focus-trap"},l().createElement(P.R,{type:"role",isOpen:R,onModalCancel:function(){C.current.hidden=!1,S(!1)},onConfirmCancel:D})),h.hideForm?h.success?l().createElement(v.Wizard,{title:"Create role",isOpen:!0,onClose:F,steps:[{name:"success",component:l().createElement(B,{onClose:F}),isFinishedStep:!0}]}):null:l().createElement(f.Z,{schema:O,container:C,subscription:{values:!0},FormTemplate:ce,initialValues:{"role-type":"create"},componentMapper:ie(ie({},y.ZP),le),onSubmit:function(e){var n=e["role-name"],i=e["role-description"],a=e["role-copy-name"],c=e["role-copy-description"],s=e["add-permissions-table"],l=e["cost-resources"],u=e["role-type"];b((function(e){return ie(ie({},e),{},{submitting:!0})}));var d=s.map((function(e){return e.uuid})),p={applications:(0,r.Z)(new Set(s.map((function(e){return e.uuid.split(":")[0]})))),description:("create"===u?i:c)||null,name:"create"===u?n:a,access:s.reduce((function(e,t){var n=t.uuid,o=t.requires,i=void 0===o?[]:o;return[].concat((0,r.Z)(e),(0,r.Z)([n].concat((0,r.Z)(i.filter((function(e){return!d.includes(e)})))).map((function(e){return{permission:e,resourceDefinitions:null!=l&&l.find((function(t){return t.permission===e}))?[{attributeFilter:{key:"cost-management.".concat(e.split(":")[1]),operation:"in",value:null==l?void 0:l.find((function(t){return t.permission===e})).resources}}]:[]}}))))}),[])};return o((0,G.fA)(p)).then((function(){b((function(e){return ie(ie({},e),{},{submitting:!1,success:!0,hideForm:!0})})),o((0,G.Kt)({limit:t.limit,inModal:!1}))})).catch((function(){b((function(e){return ie(ie({},e),{},{submitting:!1,success:!1,hideForm:!0})})),o((0,G.Kt)({limit:t.limit,inModal:!1})),F()}))},onCancel:function(e){Boolean(e&&e["role-name"]||e["role-description"]||e["copy-base-role"])?(C.current.hidden=!0,S(!0)):D()}})):null};ue.propTypes={pagination:d().shape({limit:d().number.isRequired}).isRequired,filters:d().shape({name:d().string}).isRequired};const de=ue}}]);
//# sourceMappingURL=../sourcemaps/8607.a9837f6336c3ec58c9773dde9fb4ac00.js.map
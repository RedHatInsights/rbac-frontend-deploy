(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4907],{67064:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var r=n(74848),c=n(69733),s=a(n(1701)),l=n(58274),u=n(54821);t.NotificationPortalBase=function(e){var t=e.clearNotifications,n=o(e,["clearNotifications"]),a=(0,c.useSelector)((function(e){return e.notifications})),u=(0,c.useDispatch)();return(0,r.jsx)(s.default,i({notifications:a,removeNotification:function(e){return u((0,l.removeNotification)(e))},onClearAll:t||function(){return u((0,l.clearNotifications)())}},n))},t.NotificationPortal=function(e){var n=e.silent,a=void 0===n||n,c=o(e,["silent"]);return(0,r.jsx)(u.ErrorBoundary,{headerTitle:"Notifications portal",silent:a,children:(0,r.jsx)(t.NotificationPortalBase,i({},c))})};var f=n(1701);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return a(f).default}}),t.default=t.NotificationPortal},44717:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(67064);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}}),o(n(67064),t)},70763:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var o=n(44717);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return i(o).default}});var a=n(53958);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return i(a).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return a.notificationsReducers}});var r=n(69778);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return r.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return r.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return r.CLEAR_NOTIFICATIONS}});var c=n(58274);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return c.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return c.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return c.clearNotifications}});var s=n(43655);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return i(s).default}})},69778:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var n="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(n,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(n,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(n,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},58274:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var o=n(69778);t.addNotification=function(e){return{type:o.ADD_NOTIFICATION,payload:i({id:"cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2)},e)}},t.removeNotification=function(e){return{type:o.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:o.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},53958:function(e,t,n){"use strict";var i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,o=0,a=t.length;o<a;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var o=n(69778);t.defaultState=[],t.notificationsReducers=function(e,n){switch(void 0===e&&(e=t.defaultState),n.type){case o.ADD_NOTIFICATION:return a=e,r=n.payload,i(i([],a,!0),[r],!1);case o.REMOVE_NOTIFICATION:return function(e,t){var n=t.payload,o=e.findIndex((function(e){return e.id===n}));return i(i([],e.slice(0,o),!0),e.slice(o+1),!0)}(e,n);case o.CLEAR_NOTIFICATIONS:return[];default:return e}var a,r},t.notifications=t.notificationsReducers,t.default=t.notifications},54821:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ErrorBoundary:()=>i.A,default:()=>i.A}),n(82262);var i=n(85117)},44419:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var i=n(49634),o=n(58471);const a=e=>{const t=(0,i.useNavigate)();return(n,i)=>t((0,o.o)(n,e),i)}},57853:(e,t,n)=>{"use strict";n.d(t,{A:()=>A});var i=n(93345),o=n.n(i),a=n(5556),r=n.n(a),c=n(36782),s=n(63537),l=n(81558),u=n(22568),f=n(88484),d=n(27451),p=n(6871);const m="modal-form",O=e=>o().createElement(p.l,{...e,id:m}),I=({saveLabel:e,cancelLabel:t})=>{const{onCancel:n}=(0,l.default)();return o().createElement(c.A,null,(({pristine:i,invalid:a,validating:r,submitting:c})=>o().createElement("div",{className:"pf-v5-c-form"},o().createElement(f.K,{className:"pf-v5-u-mt-0"},o().createElement(d.Button,{ouiaId:"primary-save-button",variant:"primary",form:m,type:"submit",isDisabled:i||r||c||a},e),o().createElement(d.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:n,id:"cancel-modal"},t)))))};I.propTypes={saveLabel:r().node,cancelLabel:r().node},I.defaultProps={saveLabel:"Save",cancelLabel:"Cancel"};const N=({ModalProps:e,saveLabel:t,cancelLabel:n,alert:i,...a})=>o().createElement(u.Modal,{role:"dialog",...e,footer:o().createElement(I,{saveLabel:t,cancelLabel:n})},i?.(),o().createElement(s.Ay,{...a,showFormControls:!1,FormWrapper:O}));N.propTypes={ModalProps:r().object,...I.propTypes};const A=N},61047:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var i=n(93345),o=n.n(i),a=n(5556),r=n.n(a),c=n(13614),s=n(79994),l=n(2543),u=n(81558),f=n(36782),d=n(8604),p=n(40335);const m=({dirtyFieldsSinceLastSubmit:e,submitSucceeded:t,pristine:n})=>{const{onCancel:i}=(0,u.default)(),a=(0,l.isEmpty)(e)||!t&&n,r=(0,d.tz)();return o().createElement(c.ActionGroup,{className:"pf-v5-u-mt-0"},o().createElement(s.Button,{ouiaId:"primary-submit-button",type:"submit",isDisabled:a,variant:"primary"},r.formatMessage(p.A.save)),o().createElement(s.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:()=>i()},r.formatMessage(p.A.cancel)))};m.propTypes={dirtyFieldsSinceLastSubmit:r().shape({[r().string]:r().oneOfType([r().string,r().number,r().bool])}),submitSucceeded:r().bool,pristine:r().bool,onCancel:r().func};const O=e=>o().createElement(f.A,{subscription:{pristine:!0,submitSucceeded:!0,dirtyFieldsSinceLastSubmit:!0}},(t=>o().createElement(m,{...t,...e})));var I=n(63537),N=n(55342),A=n(54076),v=n(79371),b=n(57502);const T=({formTemplateProps:e,...t})=>o().createElement(v.A,{componentMapper:{[b.A.TEXT_FIELD]:N.A,[b.A.TEXTAREA]:A.A},FormTemplate:t=>o().createElement(I.Ay,{...e,...t,FormButtons:O}),...t});T.propTypes={formTemplateProps:r().object};const y=T},60780:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var i=n(93345),o=n.n(i),a=n(69733),r=n(8604),c=n(49634),s=n(5556),l=n.n(s),u=n(75380),f=n(70763),d=n(57502),p=n(95658),m=n(42655),O=n(44419),I=n(57853),N=n(61047),A=n(99843),v=n(13193),b=n(40335),T=n(49573);const y=({postMethod:e,pagination:t,cancelRoute:n,submitRoute:s=n,group:l,onClose:T})=>{const y=(0,r.tz)(),[_,g]=(0,i.useState)(void 0),h=(0,O.A)(),{groupId:E}=(0,c.useParams)(),C=e=>{g(e)},M=(0,a.useDispatch)();(0,i.useEffect)((()=>{E&&(0,A.Ui)(E).payload.then((e=>C(e))).catch((()=>C(void 0)))}),[]),(0,i.useEffect)((()=>{g(l)}),[l]);const P=()=>{M((0,f.addNotification)({variant:"warning",dismissDelay:8e3,title:y.formatMessage(_?b.A.editingGroupTitle:b.A.addingGroupTitle),description:y.formatMessage(_?b.A.editGroupCanceledDescription:b.A.addingGroupCanceledDescription)})),T(),h(n)},F={fields:[{name:"name",label:y.formatMessage(b.A.name),component:_?d.A.TEXT_FIELD:"skeleton",..._?{validateOnMount:!0}:{},validate:[{type:"validate-group-name",id:E??l.uuid,idKey:"uuid"},{type:p.A.REQUIRED}]},{name:"description",label:y.formatMessage(b.A.description),component:_?d.A.TEXTAREA:"skeleton",validate:[{type:p.A.MAX_LENGTH,threshold:150}]}]},R={"validate-group-name":({idKey:e,id:t})=>n=>(0,v.U)(n,e,t)};return o().createElement(N.A,{schema:F,componentMapper:{...m.Ay,skeleton:u.Skeleton},onCancel:P,onSubmit:n=>{const i={uuid:n.uuid,description:n.description||null,name:n.name};e?M((0,A.vW)(i)).then((()=>e({limit:t?.limit}))).then(h(s)):M((0,A.vW)(i)).then((()=>{h(s)}))},validatorMapper:R,initialValues:{..._},FormTemplate:e=>o().createElement(I.A,{...e,ModalProps:{onClose:P,isOpen:!0,variant:"medium",title:y.formatMessage(b.A.editGroupInfo)}})})};y.defaultProps={cancelRoute:T.A.groups.path,onClose:()=>null},y.propTypes={postMethod:l().func,pagination:l().shape({limit:l().number}),filters:l().object,cancelRoute:l().oneOfType([l().string,l().shape({pathname:l().string.isRequired,search:l().string,hash:l().string})]),submitRoute:l().oneOfType([l().string,l().shape({pathname:l().string.isRequired,search:l().string,hash:l().string})]),group:l().object,onClose:l().func};const _=y},13193:(e,t,n)=>{"use strict";n.d(t,{U:()=>u,x:()=>l});var i=n(12927),o=n(73356),a=n(25970),r=n(8604),c=n(40335),s=n(67169);const l=async(e,t,n)=>{const o=(0,r.MT)(),l=(0,r.EY)({locale:a.H,messages:s},o);if(!e)return;if(e.length>150)throw l.formatMessage(c.A.maxCharactersWarning,{number:150});const u=await(0,i.pl)({limit:10,offset:0,filters:{name:e},nameMatch:"exact"}).catch((e=>{console.error(e)}));if(n?u?.data?.some((e=>e[t]!==n)):u?.data?.length>0)throw l.formatMessage(c.A.nameAlreadyTaken)},u=(0,o.A)(((e,t,n)=>l(e,t,n)))},73356:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var i=n(10476);const o=(e,t=250,n={onlyResolvesLast:!1})=>(0,i.A)(e,t,n)},25823:()=>{},16369:()=>{},62275:()=>{},89205:()=>{},20681:()=>{},71534:()=>{},95067:()=>{},74895:()=>{},26078:()=>{},2580:()=>{}}]);
(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[6182],{60817:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var r=n(85893),c=n(86706),s=o(n(72837)),l=n(53446),u=n(79206);t.NotificationPortalBase=function(e){var t=e.clearNotifications,n=a(e,["clearNotifications"]),o=(0,c.useSelector)((function(e){return e.notifications})),u=(0,c.useDispatch)();return(0,r.jsx)(s.default,i({notifications:o,removeNotification:function(e){return u((0,l.removeNotification)(e))},onClearAll:t||function(){return u((0,l.clearNotifications)())}},n))},t.NotificationPortal=function(e){var n=e.silent,o=void 0===n||n,c=a(e,["silent"]);return(0,r.jsx)(u.ErrorBoundary,{headerTitle:"Notifications portal",silent:o,children:(0,r.jsx)(t.NotificationPortalBase,i({},c))})};var f=n(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return o(f).default}}),t.default=t.NotificationPortal},72871:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,a)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}}),a(n(60817),t)},71355:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var a=n(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return i(a).default}});var o=n(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return i(o).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return o.notificationsReducers}});var r=n(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return r.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return r.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return r.CLEAR_NOTIFICATIONS}});var c=n(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return c.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return c.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return c.clearNotifications}});var s=n(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return i(s).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var n="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(n,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(n,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(n,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var a=n(68129);t.addNotification=function(e){return{type:a.ADD_NOTIFICATION,payload:i({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:a.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:a.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,n){"use strict";var i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,a=0,o=t.length;a<o;a++)!i&&a in t||(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var a=n(68129);t.defaultState=[],t.notificationsReducers=function(e,n){switch(void 0===e&&(e=t.defaultState),n.type){case a.ADD_NOTIFICATION:return o=e,r=n.payload,i(i([],o,!0),[r],!1);case a.REMOVE_NOTIFICATION:return function(e,t){var n=t.payload,a=e.findIndex((function(e){return e.id===n}));return i(i([],e.slice(0,a),!0),e.slice(a+1),!0)}(e,n);case a.CLEAR_NOTIFICATIONS:return[];default:return e}var o,r},t.notifications=t.notificationsReducers,t.default=t.notifications},79206:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ErrorBoundary:()=>i.Z,default:()=>i.Z}),n(16699);var i=n(49314)},84414:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(62012),a=n(64756);const o=e=>{const t=(0,i.useNavigate)();return(n,i)=>t((0,a.n)(n,e),i)}},10357:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var i=n(28416),a=n.n(i),o=n(45697),r=n.n(o),c=n(76429),s=n(67850),l=n(48880),u=n(74219),f=n(57820),d=n(16396),p=n(4853);const m="modal-form",O=e=>a().createElement(p.l,{...e,id:m}),I=({saveLabel:e,cancelLabel:t})=>{const{onCancel:n}=(0,l.default)();return a().createElement(c.Z,null,(({pristine:i,invalid:o,validating:r,submitting:c})=>a().createElement("div",{className:"pf-v5-c-form"},a().createElement(f.W,{className:"pf-v5-u-mt-0"},a().createElement(d.Button,{ouiaId:"primary-save-button",variant:"primary",form:m,type:"submit",isDisabled:i||r||c||o},e),a().createElement(d.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:n,id:"cancel-modal"},t)))))};I.propTypes={saveLabel:r().node,cancelLabel:r().node},I.defaultProps={saveLabel:"Save",cancelLabel:"Cancel"};const N=({ModalProps:e,saveLabel:t,cancelLabel:n,alert:i,...o})=>a().createElement(u.Modal,{role:"dialog",...e,footer:a().createElement(I,{saveLabel:t,cancelLabel:n})},i?.(),a().createElement(s.ZP,{...o,showFormControls:!1,FormWrapper:O}));N.propTypes={ModalProps:r().object,...I.propTypes};const b=N},73479:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var i=n(28416),a=n.n(i),o=n(45697),r=n.n(o),c=n(16987),s=n(31055),l=n(96486),u=n(48880),f=n(76429),d=n(25387),p=n(2550);const m=({dirtyFieldsSinceLastSubmit:e,submitSucceeded:t,pristine:n})=>{const{onCancel:i}=(0,u.default)(),o=(0,l.isEmpty)(e)||!t&&n,r=(0,d.YB)();return a().createElement(c.ActionGroup,{className:"pf-v5-u-mt-0"},a().createElement(s.Button,{ouiaId:"primary-submit-button",type:"submit",isDisabled:o,variant:"primary"},r.formatMessage(p.Z.save)),a().createElement(s.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:()=>i()},r.formatMessage(p.Z.cancel)))};m.propTypes={dirtyFieldsSinceLastSubmit:r().shape({[r().string]:r().oneOfType([r().string,r().number,r().bool])}),submitSucceeded:r().bool,pristine:r().bool,onCancel:r().func};const O=e=>a().createElement(f.Z,{subscription:{pristine:!0,submitSucceeded:!0,dirtyFieldsSinceLastSubmit:!0}},(t=>a().createElement(m,{...t,...e})));var I=n(67850),N=n(65412),b=n(75747),v=n(51912),T=n(96354);const y=({formTemplateProps:e,...t})=>a().createElement(v.Z,{componentMapper:{[T.Z.TEXT_FIELD]:N.Z,[T.Z.TEXTAREA]:b.Z},FormTemplate:t=>a().createElement(I.ZP,{...e,...t,FormButtons:O}),...t});y.propTypes={formTemplateProps:r().object};const _=y},65966:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var i=n(28416),a=n.n(i),o=n(86706),r=n(25387),c=n(62012),s=n(45697),l=n.n(s),u=n(75349),f=n(71355),d=n(96354),p=n(64124),m=n(8340),O=n(84414),I=n(10357),N=n(73479),b=n(77044),v=n(95359),T=n(2550),y=n(14289);const _=({postMethod:e,pagination:t,cancelRoute:n,submitRoute:s=n,group:l,onClose:y})=>{const _=(0,r.YB)(),[g,h]=(0,i.useState)(void 0),E=(0,O.Z)(),{groupId:A}=(0,c.useParams)(),C=e=>{h(e)},P=(0,o.useDispatch)();(0,i.useEffect)((()=>{A&&(0,b.yi)(A).payload.then((e=>C(e))).catch((()=>C(void 0)))}),[]),(0,i.useEffect)((()=>{h(l)}),[l]);const M=()=>{P((0,f.addNotification)({variant:"warning",dismissDelay:8e3,title:_.formatMessage(g?T.Z.editingGroupTitle:T.Z.addingGroupTitle),description:_.formatMessage(g?T.Z.editGroupCanceledDescription:T.Z.addingGroupCanceledDescription)})),y(),E(n)},F={fields:[{name:"name",label:_.formatMessage(T.Z.name),component:g?d.Z.TEXT_FIELD:"skeleton",...g?{validateOnMount:!0}:{},validate:[{type:"validate-group-name",id:A??l.uuid,idKey:"uuid"},{type:p.Z.REQUIRED}]},{name:"name",label:_.formatMessage(T.Z.name),component:g?d.Z.TEXTAREA:"skeleton",validate:[{type:p.Z.MAX_LENGTH,threshold:150}]}]},R={"validate-group-name":({idKey:e,id:t})=>n=>(0,v.L)(n,e,t)};return a().createElement(N.Z,{schema:F,componentMapper:{...m.ZP,skeleton:u.Skeleton},onCancel:M,onSubmit:n=>{const i={uuid:n.uuid,description:n.description||null,name:n.name};e?P((0,b.mD)(i)).then((()=>e({limit:t?.limit}))).then(E(s)):P((0,b.mD)(i)).then((()=>{E(s)}))},validatorMapper:R,initialValues:{...g},FormTemplate:e=>a().createElement(I.Z,{...e,ModalProps:{onClose:M,isOpen:!0,variant:"medium",title:_.formatMessage(T.Z.editGroupInfo)}})})};_.defaultProps={cancelRoute:y.Z.groups.path,onClose:()=>null},_.propTypes={postMethod:l().func,pagination:l().shape({limit:l().number}),filters:l().object,cancelRoute:l().oneOfType([l().string,l().shape({pathname:l().string.isRequired,search:l().string,hash:l().string})]),submitRoute:l().oneOfType([l().string,l().shape({pathname:l().string.isRequired,search:l().string,hash:l().string})]),group:l().object,onClose:l().func};const g=_},95359:(e,t,n)=>{"use strict";n.d(t,{B:()=>l,L:()=>u});var i=n(94504),a=n(47625),o=n(60167),r=n(25387),c=n(2550),s=n(2034);const l=async(e,t,n)=>{const a=(0,r.Sn)(),l=(0,r.dp)({locale:o.S,messages:s},a);if(!e)return;if(e.length>150)throw l.formatMessage(c.Z.maxCharactersWarning,{number:150});const u=await(0,i.bt)({limit:10,offset:0,filters:{name:e},nameMatch:"exact"}).catch((e=>{console.error(e)}));if(n?u?.data?.some((e=>e[t]!==n)):u?.data?.length>0)throw l.formatMessage(c.Z.nameAlreadyTaken)},u=(0,a.Z)(((e,t,n)=>l(e,t,n)))},47625:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(99166);const a=(e,t=250,n={onlyResolvesLast:!1})=>(0,i.Z)(e,t,n)},82472:()=>{},97890:()=>{},17657:()=>{},22972:()=>{},43389:()=>{},65088:()=>{},70347:()=>{},78752:()=>{},25238:()=>{},49854:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6182.8e5ce67e1fc0286dbb5a1edd93073ccc.js.map
(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2015],{67064:function(e,t,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)},r=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var o=i(74848),c=i(69733),s=a(i(1701)),l=i(58274),u=i(54821);t.NotificationPortalBase=function(e){var t=e.clearNotifications,i=r(e,["clearNotifications"]),a=(0,c.useSelector)((function(e){return e.notifications})),u=(0,c.useDispatch)();return(0,o.jsx)(s.default,n({notifications:a,removeNotification:function(e){return u((0,l.removeNotification)(e))},onClearAll:t||function(){return u((0,l.clearNotifications)())}},i))},t.NotificationPortal=function(e){var i=e.silent,a=void 0===i||i,c=r(e,["silent"]);return(0,o.jsx)(u.ErrorBoundary,{headerTitle:"Notifications portal",silent:a,children:(0,o.jsx)(t.NotificationPortalBase,n({},c))})};var d=i(1701);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return a(d).default}}),t.default=t.NotificationPortal},44717:function(e,t,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,r)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),r=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(67064);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(o).default}}),r(i(67064),t)},70763:function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var r=i(44717);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return n(r).default}});var a=i(53958);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return n(a).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return a.notificationsReducers}});var o=i(69778);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return o.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return o.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return o.CLEAR_NOTIFICATIONS}});var c=i(58274);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return c.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return c.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return c.clearNotifications}});var s=i(43655);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return n(s).default}})},69778:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var i="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(i,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(i,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(i,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},58274:function(e,t,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var r=i(69778);t.addNotification=function(e){return{type:r.ADD_NOTIFICATION,payload:n({id:"cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2)},e)}},t.removeNotification=function(e){return{type:r.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:r.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},53958:function(e,t,i){"use strict";var n=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,r=0,a=t.length;r<a;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var r=i(69778);t.defaultState=[],t.notificationsReducers=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case r.ADD_NOTIFICATION:return a=e,o=i.payload,n(n([],a,!0),[o],!1);case r.REMOVE_NOTIFICATION:return function(e,t){var i=t.payload,r=e.findIndex((function(e){return e.id===i}));return n(n([],e.slice(0,r),!0),e.slice(r+1),!0)}(e,i);case r.CLEAR_NOTIFICATIONS:return[];default:return e}var a,o},t.notifications=t.notificationsReducers,t.default=t.notifications},54821:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ErrorBoundary:()=>n.A,default:()=>n.A}),i(82262);var n=i(85117)},44419:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var n=i(49634),r=i(58471);const a=e=>{const t=(0,n.useNavigate)();return(i,n)=>t((0,r.o)(i,e),n)}},57853:(e,t,i)=>{"use strict";i.d(t,{A:()=>b});var n=i(93345),r=i.n(n),a=i(5556),o=i.n(a),c=i(36782),s=i(63537),l=i(81558),u=i(22568),d=i(88484),f=i(27451),p=i(6871);const m="modal-form",O=e=>r().createElement(p.l,{...e,id:m}),N=({saveLabel:e,cancelLabel:t})=>{const{onCancel:i}=(0,l.default)();return r().createElement(c.A,null,(({pristine:n,invalid:a,validating:o,submitting:c})=>r().createElement("div",{className:"pf-v5-c-form"},r().createElement(d.K,{className:"pf-v5-u-mt-0"},r().createElement(f.Button,{ouiaId:"primary-save-button",variant:"primary",form:m,type:"submit",isDisabled:n||o||c||a},e),r().createElement(f.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:i,id:"cancel-modal"},t)))))};N.propTypes={saveLabel:o().node,cancelLabel:o().node},N.defaultProps={saveLabel:"Save",cancelLabel:"Cancel"};const I=({ModalProps:e,saveLabel:t,cancelLabel:i,alert:n,...a})=>r().createElement(u.Modal,{role:"dialog",...e,footer:r().createElement(N,{saveLabel:t,cancelLabel:i})},n?.(),r().createElement(s.Ay,{...a,showFormControls:!1,FormWrapper:O}));I.propTypes={ModalProps:o().object,...N.propTypes};const b=I},61047:(e,t,i)=>{"use strict";i.d(t,{A:()=>y});var n=i(93345),r=i.n(n),a=i(5556),o=i.n(a),c=i(13614),s=i(79994),l=i(2543),u=i(81558),d=i(36782),f=i(8604),p=i(40335);const m=({dirtyFieldsSinceLastSubmit:e,submitSucceeded:t,pristine:i})=>{const{onCancel:n}=(0,u.default)(),a=(0,l.isEmpty)(e)||!t&&i,o=(0,f.tz)();return r().createElement(c.ActionGroup,{className:"pf-v5-u-mt-0"},r().createElement(s.Button,{ouiaId:"primary-submit-button",type:"submit",isDisabled:a,variant:"primary"},o.formatMessage(p.A.save)),r().createElement(s.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:()=>n()},o.formatMessage(p.A.cancel)))};m.propTypes={dirtyFieldsSinceLastSubmit:o().shape({[o().string]:o().oneOfType([o().string,o().number,o().bool])}),submitSucceeded:o().bool,pristine:o().bool,onCancel:o().func};const O=e=>r().createElement(d.A,{subscription:{pristine:!0,submitSucceeded:!0,dirtyFieldsSinceLastSubmit:!0}},(t=>r().createElement(m,{...t,...e})));var N=i(63537),I=i(55342),b=i(54076),v=i(79371),A=i(57502);const T=({formTemplateProps:e,...t})=>r().createElement(v.A,{componentMapper:{[A.A.TEXT_FIELD]:I.A,[A.A.TEXTAREA]:b.A},FormTemplate:t=>r().createElement(N.Ay,{...e,...t,FormButtons:O}),...t});T.propTypes={formTemplateProps:o().object};const y=T},57192:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>y});var n=i(93345),r=i.n(n),a=i(5556),o=i.n(a),c=i(57502),s=i(95658),l=i(70763),u=i(8604),d=i(49634),f=i(69733),p=i(44419),m=i(57853),O=i(61047);var N=i(75242),I=i(31237),b=i(73356),v=i(8582),A=i(40335);const T=({cancelRoute:e,submitRoute:t=e,afterSubmit:i})=>{const a=(0,u.tz)(),o=(()=>{const e=(0,n.useRef)(!1);return(0,n.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e})(),T=(0,p.A)(),y=(0,f.useDispatch)(),{roleId:_}=(0,d.useParams)(),E=(0,f.useSelector)((e=>(0,N.C)(e,_))),[h,g]=(0,n.useState)(E);(0,n.useEffect)((()=>{!h&&(0,I.rM)(_).then((e=>{o.current&&g(e)}))}),[_]);const C=(0,b.A)(((e,t,i,n)=>e&&0!==e.length?n(e,t,i):Promise.reject(a.formatMessage(A.A.required)))),P={"validate-role-name":({idKey:e,id:t,validationPromise:i})=>n=>C(n,e,t,i)},R=()=>{y((0,l.addNotification)({variant:"warning",dismissDelay:8e3,title:a.formatMessage(A.A.editingRoleTitle),description:a.formatMessage(A.A.editingRoleCanceledDescription)})),T(e,{replace:!0})};return h?r().createElement(O.A,{schema:(F=_,{fields:[{name:"name",component:c.A.TEXT_FIELD,label:a.formatMessage(A.A.name),isRequired:!0,validate:[{type:"validate-role-name",id:F,idKey:"uuid",validationPromise:(e,t,i)=>e.length<150?(0,I.kN)({name:e}).then((({data:n})=>{if(0!==n.length&&n.some((n=>n[t]!==i&&n.display_name===e)))throw a.formatMessage(A.A.roleWithNameExists)})):Promise.reject(a.formatMessage(A.A.maxCharactersWarning,{number:150}))}]},{name:"description",component:c.A.TEXTAREA,label:a.formatMessage(A.A.description),validate:[{type:s.A.MAX_LENGTH,threshold:150}]}]}),initialValues:h,onSubmit:e=>y((0,v.lU)(_,{name:e.name,display_name:e.name,description:e.description||null})).then((()=>{i(),T(t)})),onCancel:R,validatorMapper:P,FormTemplate:e=>r().createElement(m.A,{...e,ModalProps:{onClose:R,isOpen:!0,variant:"small",title:"Edit role information"}})}):null;var F};T.propTypes={cancelRoute:o().oneOfType([o().string,o().shape({pathname:o().string.isRequired,search:o().string,hash:o().string})]).isRequired,submitRoute:o().oneOfType([o().string,o().shape({pathname:o().string.isRequired,search:o().string,hash:o().string})]),afterSubmit:o().func.isRequired,isLoading:o().bool.isRequired};const y=T},75242:(e,t,i)=>{"use strict";i.d(t,{C:()=>n,h:()=>r});const n=(e,t)=>{const{roleReducer:{roles:i={data:[]},selectedRole:n}}=e;return n?.uuid===t?n:i.data.find((({uuid:e})=>e===t))},r=(e,t)=>n(e,t)?.display_name},73356:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var n=i(10476);const r=(e,t=250,i={onlyResolvesLast:!1})=>(0,n.A)(e,t,i)},71534:()=>{},95067:()=>{},74895:()=>{},26078:()=>{},2580:()=>{}}]);
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[5859],{60817:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=void 0;var r=n(50533),a=i(n(72837)),o=n(53446);t.NotificationPortal=(0,r.connect)((function(e,t){var n=e.notifications;return{notifications:t.notifications||n}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,o.removeNotification)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,o.clearNotifications)())}}}))(a.default);var c=n(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return i(c).default}}),t.default=t.NotificationPortal},72871:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(o).default}}),r(n(60817),t)},71355:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var r=n(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return i(r).default}});var a=n(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return i(a).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return a.notificationsReducers}});var o=n(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return o.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return o.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return o.CLEAR_NOTIFICATIONS}});var c=n(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return c.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return c.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return c.clearNotifications}});var u=n(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return i(u).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var n="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(n,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(n,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(n,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var r=n(68129);t.addNotification=function(e){return{type:r.ADD_NOTIFICATION,payload:i({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:r.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:r.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,n){"use strict";var i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var r=n(68129);t.defaultState=[],t.notificationsReducers=function(e,n){switch(void 0===e&&(e=t.defaultState),n.type){case r.ADD_NOTIFICATION:return a=e,o=n.payload,i(i([],a,!0),[o],!1);case r.REMOVE_NOTIFICATION:return function(e,t){var n=t.payload,r=e.findIndex((function(e){return e.id===n}));return i(i([],e.slice(0,r),!0),e.slice(r+1),!0)}(e,n);case r.CLEAR_NOTIFICATIONS:return[];default:return e}var a,o},t.notifications=t.notificationsReducers,t.default=t.notifications},93736:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(46801),r=n(65126);const a=function(e){var t=(0,i.useNavigate)();return function(n,i){return t((0,r.n)(n,e),i)}}},40483:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var i=n(4942),r=n(45987),a=n(87462),o=n(92950),c=n.n(o),u=n(45697),s=n.n(u),l=n(76429),f=n(67850),d=n(48880),p=n(74219),m=n(57820),v=n(16396),O=n(4853),b=["ModalProps","saveLabel","cancelLabel","alert"];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var N="modal-form",T=function(e){return c().createElement(O.l,(0,a.Z)({},e,{id:N}))},y=function(e){var t=e.saveLabel,n=e.cancelLabel,i=(0,d.default)().onCancel;return c().createElement(l.Z,null,(function(e){var r=e.pristine,a=e.invalid,o=e.validating,u=e.submitting;return c().createElement("div",{className:"pf-c-form"},c().createElement(m.W,{className:"pf-u-mt-0"},c().createElement(v.Button,{ouiaId:"primary-save-button",variant:"primary",form:N,type:"submit",isDisabled:r||o||u||a},t),c().createElement(v.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:i,id:"cancel-modal"},n)))}))};y.propTypes={saveLabel:s().node,cancelLabel:s().node},y.defaultProps={saveLabel:"Save",cancelLabel:"Cancel"};var E=function(e){var t=e.ModalProps,n=e.saveLabel,i=e.cancelLabel,o=e.alert,u=(0,r.Z)(e,b);return c().createElement(p.Modal,(0,a.Z)({},t,{footer:c().createElement(y,{saveLabel:n,cancelLabel:i})}),null==o?void 0:o(),c().createElement(f.ZP,(0,a.Z)({},u,{showFormControls:!1,FormWrapper:T})))};E.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ModalProps:s().object},y.propTypes);const _=E},36457:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var i=n(87462),r=n(4942),a=n(45987),o=n(92950),c=n.n(o),u=n(45697),s=n.n(u),l=n(93433),f=n(86896),d=n(30893),p=n(76857),m=["input","options","isReadOnly","isDisabled","isRequired"],v=["label","isRequired","helperText","meta","description","hideLabel"],O=function(e){var t=e.input,n=e.options,r=e.isReadOnly,o=e.isDisabled,u=e.isRequired,s=(0,a.Z)(e,m);return c().createElement(p.FormSelect,(0,i.Z)({},t,s,{isDisabled:o||r}),function(e,t,n){var i=(0,f.Z)();if(t&&n)return e;var r=(0,l.Z)(e);return r.find((function(e){return void 0===e.value}))?(0,l.Z)(r):[{label:i.formatMessage(d.Z[n?"pleaseChoose":"none"])}].concat((0,l.Z)(r))}(n,t.value,u).map((function(e){return c().createElement(p.FormSelectOption,(0,i.Z)({key:e.value||e.label},e,{label:e.label.toString()}))})))};O.propTypes={input:s().object.isRequired,options:s().arrayOf(s().shape({value:s().any,label:s().string.isRequired})).isRequired,isReadOnly:s().bool,isDisabled:s().bool,isRequired:s().bool,FieldProvider:s().any};var b=function(e){var t=e.label,n=e.isRequired,r=e.helperText,o=e.meta,u=e.description,s=e.hideLabel,l=(0,a.Z)(e,v),f=o.error,d=o.touched&&f;return c().createElement(p.FormGroup,{isRequired:n,label:!s&&t,fieldId:l.id,isValid:!d,helperText:r,helperTextInvalid:o.error},u&&c().createElement(p.TextContent,null,c().createElement(p.Text,{component:p.TextVariants.small},u)),c().createElement(O,(0,i.Z)({label:t,isValid:!d,isRequired:n},l)))};b.propTypes={componentType:s().string,label:s().string,isRequired:s().bool,helperText:s().string,meta:s().object,description:s().string,hideLabel:s().bool};const I=b;var N=n(41609),T=n.n(N),y=n(48880),E=n(76429),_=function(e){var t=e.dirtyFieldsSinceLastSubmit,n=e.submitSucceeded,i=e.pristine,r=(0,y.default)().onCancel,a=T()(t)||!n&&i,o=(0,f.Z)();return c().createElement(p.ActionGroup,{className:"pf-u-mt-0"},c().createElement(p.Button,{ouiaId:"primary-submit-button",type:"submit",isDisabled:a,variant:"primary"},o.formatMessage(d.Z.save)),c().createElement(p.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:function(){return r()}},o.formatMessage(d.Z.cancel)))};_.propTypes={dirtyFieldsSinceLastSubmit:s().shape((0,r.Z)({},s().string,s().oneOfType([s().string,s().number,s().bool]))),submitSucceeded:s().bool,pristine:s().bool,onCancel:s().func};const g=function(e){return c().createElement(E.Z,{subscription:{pristine:!0,submitSucceeded:!0,dirtyFieldsSinceLastSubmit:!0}},(function(t){return c().createElement(_,(0,i.Z)({},t,e))}))};var h=n(67850),A=n(65412),C=n(75747),R=n(93025),Z=n(96354),P=["formTemplateProps"],F=function(e){var t,n=e.formTemplateProps,o=(0,a.Z)(e,P);return c().createElement(R.Z,(0,i.Z)({componentMapper:(t={},(0,r.Z)(t,Z.Z.TEXT_FIELD,A.Z),(0,r.Z)(t,Z.Z.TEXTAREA,C.Z),(0,r.Z)(t,Z.Z.SELECT,I),t),FormTemplate:function(e){return c().createElement(h.ZP,(0,i.Z)({},n,e,{FormButtons:g}))}},o))};F.propTypes={formTemplateProps:s().object};const j=F},93436:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var i=n(87462),r=n(29439),a=n(92950),o=n.n(a),c=n(45697),u=n.n(c),s=n(96354),l=n(64124),f=n(71355),d=n(86896),p=n(46801),m=n(50533),v=n(93736),O=n(40483),b=n(36457);var I=n(76254),N=n(43115),T=n(40639),y=n(28090),E=n(30893),_=function(e){var t=e.cancelRoute,n=e.submitRoute,c=void 0===n?t:n,u=e.afterSubmit,_=(0,d.Z)(),g=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}(),h=(0,v.Z)(),A=(0,m.useDispatch)(),C=(0,p.useParams)().roleId,R=(0,m.useSelector)((function(e){return(0,I.z)(e,C)})),Z=(0,a.useState)(R),P=(0,r.Z)(Z,2),F=P[0],j=P[1];(0,a.useEffect)((function(){!F&&(0,N.fp)(C).then((function(e){g.current&&j(e)}))}),[C]);var M,D=(0,T.Z)((function(e,t,n,i){return e&&0!==e.length?i(e,t,n):Promise.reject(_.formatMessage(E.Z.required))})),S={"validate-role-name":function(e){var t=e.idKey,n=e.id,i=e.validationPromise;return function(e){return D(e,t,n,i)}}},L=function(){A((0,f.addNotification)({variant:"warning",dismissDelay:8e3,title:_.formatMessage(E.Z.editingRoleTitle),description:_.formatMessage(E.Z.editingRoleCanceledDescription)})),h(t,{replace:!0})};return F?o().createElement(b.Z,{schema:(M=C,{fields:[{name:"name",component:s.Z.TEXT_FIELD,label:_.formatMessage(E.Z.name),isRequired:!0,validate:[{type:"validate-role-name",id:M,idKey:"uuid",validationPromise:function(e,t,n){return e.length<150?(0,N.vd)({name:e}).then((function(i){var r=i.data;if(0!==r.length&&r.some((function(i){return i[t]!==n&&i.display_name===e})))throw _.formatMessage(E.Z.roleWithNameExists)})):Promise.reject(_.formatMessage(E.Z.maxCharactersWarning,{number:150}))}}]},{name:"description",component:s.Z.TEXTAREA,label:_.formatMessage(E.Z.description),validate:[{type:l.Z.MAX_LENGTH,threshold:150}]}]}),initialValues:F,onSubmit:function(e){return A((0,y.sZ)(C,{name:e.name,display_name:e.name,description:e.description})).then((function(){u(),h(c)}))},onCancel:L,validatorMapper:S,FormTemplate:function(e){return o().createElement(O.Z,(0,i.Z)({},e,{ModalProps:{onClose:L,isOpen:!0,variant:"small",title:"Edit role information"}}))}}):null};_.propTypes={cancelRoute:u().oneOfType([u().string,u().shape({pathname:u().string.isRequired,search:u().string,hash:u().string})]).isRequired,submitRoute:u().oneOfType([u().string,u().shape({pathname:u().string.isRequired,search:u().string,hash:u().string})]),afterSubmit:u().func.isRequired,isLoading:u().bool.isRequired};const g=_},76254:(e,t,n)=>{"use strict";n.d(t,{B:()=>r,z:()=>i});var i=function(e,t){var n=e.roleReducer,i=n.roles,r=void 0===i?{data:[]}:i,a=n.selectedRole;return(null==a?void 0:a.uuid)===t?a:r.data.find((function(e){return e.uuid===t}))},r=function(e,t){var n;return null===(n=i(e,t))||void 0===n?void 0:n.display_name}},40639:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(99166);const r=(e,t=250,n={onlyResolvesLast:!1})=>(0,i.Z)(e,t,n)},45467:()=>{},65088:()=>{},81754:()=>{},70347:()=>{},11452:()=>{},34946:()=>{},10108:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5859.1998d3296ffc1310218f5f8acd628809.js.map
(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9032],{55218:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(66029),o=i.n(n),a=i(80236),r=i(47173),c=i(93149);const l=e=>{var{isOpen:t,onConfirm:i,onClose:l,children:s,confirmButtonLabel:u="Confirm",cancelButtonLabel:f="Cancel",variant:d=a.v.small,titleIconVariant:m="warning",withCheckbox:p=!1,checkboxLabel:O="I understand that this action cannot be undone",confirmButtonVariant:I=r.Wu.primary,ouiaId:v="WarningModal"}=e,b=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[N,_]=(0,n.useState)(!1);return o().createElement(a.u,Object.assign({variant:d,isOpen:t,onClose:l,onEscapePress:l,titleIconVariant:m,actions:[o().createElement(r.zx,{ouiaId:`${v}-confirm-button`,key:"confirm",variant:I,onClick:()=>{null==i||i(),_(!1)},isDisabled:p&&!N},u),o().createElement(r.zx,{ouiaId:`${v}-cancel-button`,key:"cancel",variant:r.Wu.link,onClick:l},f)],ouiaId:v},b),s,p?o().createElement(c.X,{isChecked:N,onChange:(e,t)=>_(t),label:O,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${v}-confirm-checkbox`}):null)}},19993:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n}),i(70347);const n={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},62702:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n}),i(25238);const n={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},66042:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n}),i(87234);const n={bullseye:"pf-v5-l-bullseye"}},60817:function(e,t,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var r=i(85893),c=i(86706),l=a(i(72837)),s=i(53446),u=i(79206);t.NotificationPortalBase=function(e){var t=e.clearNotifications,i=o(e,["clearNotifications"]),a=(0,c.useSelector)((function(e){return e.notifications})),u=(0,c.useDispatch)();return(0,r.jsx)(l.default,n({notifications:a,removeNotification:function(e){return u((0,s.removeNotification)(e))},onClearAll:t||function(){return u((0,s.clearNotifications)())}},i))},t.NotificationPortal=function(e){var i=e.silent,a=void 0===i||i,c=o(e,["silent"]);return(0,r.jsx)(u.ErrorBoundary,{headerTitle:"Notifications portal",silent:a,children:(0,r.jsx)(t.NotificationPortalBase,n({},c))})};var f=i(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return a(f).default}}),t.default=t.NotificationPortal},72871:function(e,t,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,o)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}}),o(i(60817),t)},71355:function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var o=i(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return n(o).default}});var a=i(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return n(a).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return a.notificationsReducers}});var r=i(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return r.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return r.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return r.CLEAR_NOTIFICATIONS}});var c=i(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return c.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return c.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return c.clearNotifications}});var l=i(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return n(l).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var i="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(i,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(i,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(i,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var o=i(68129);t.addNotification=function(e){return{type:o.ADD_NOTIFICATION,payload:n({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:o.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:o.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,i){"use strict";var n=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var o=i(68129);t.defaultState=[],t.notificationsReducers=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case o.ADD_NOTIFICATION:return a=e,r=i.payload,n(n([],a,!0),[r],!1);case o.REMOVE_NOTIFICATION:return function(e,t){var i=t.payload,o=e.findIndex((function(e){return e.id===i}));return n(n([],e.slice(0,o),!0),e.slice(o+1),!0)}(e,i);case o.CLEAR_NOTIFICATIONS:return[];default:return e}var a,r},t.notifications=t.notificationsReducers,t.default=t.notifications},79206:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ErrorBoundary:()=>n.Z,default:()=>n.Z}),i(27351);var n=i(49314)},65542:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var n=i(66029),o=i.n(n),a=i(25387),r=i(62012),c=i(94229),l=i(31055),s=i(68201),u=i(16987),f=i(45047),d=i(94269),m=i(86706),p=i(71355),O=i(55218),I=i(2550),v=i(60063),b=i(45697),N=i.n(b),_=i(14289),y=i(64756);const T=({fetchData:e})=>{const t=(0,m.useDispatch)(),i=(0,a.YB)(),b=(0,r.useNavigate)(),[N,T]=(0,n.useState)(!1),[h,C]=(0,n.useState)(!1),[g,A]=(0,n.useState)(""),[E,x]=(0,n.useState)([]),[F,P]=(0,n.useState)(!1),j=()=>E?.length>0&&P(!0)||M(),M=()=>{t((0,p.addNotification)({variant:"warning",title:i.formatMessage(I.Z.inviteUsers),dismissDelay:8e3,description:i.formatMessage(I.Z.inviteUsersCancelled)})),b((0,y.n)(_.Z.users.link))};return(0,n.useEffect)((()=>{(e=>{let t=e.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)||[];x(t)})(g)}),[g]),o().createElement(n.Fragment,null,o().createElement(O.Z,{type:"user",isOpen:F,onModalCancel:()=>P(!1),onConfirmCancel:M}),o().createElement(c.Modal,{variant:c.ModalVariant.medium,isOpen:!F,title:i.formatMessage(I.Z.inviteUsersTitle),description:i.formatMessage(I.Z.inviteUsersDescription),onClose:j,actions:[o().createElement(l.Button,{"aria-label":"Save",className:"pf-u-mr-sm",ouiaId:"primary-save-button",variant:"primary",key:"save",onClick:()=>{const i={emails:E,isAdmin:h};t((0,v.Sh)(i)).then((()=>{e(),b((0,y.n)(_.Z.users.link))})).catch((e=>{console.error(e)}))},isDisabled:0==E?.length},i.formatMessage(I.Z.inviteUsersButton)),o().createElement(l.Button,{"aria-label":"Cancel",ouiaId:"secondary-cancel-button",variant:"link",key:"cancel",onClick:j},i.formatMessage(I.Z.cancel))]},o().createElement(u.Form,{id:"invite-users-form",className:"rbac-c-user_invite-users-form"},o().createElement(u.FormGroup,{label:i.formatMessage(I.Z.inviteUsersFormEmailsFieldTitle),isRequired:!0,fieldId:"invite-users-email-list-field"},o().createElement(f.TextArea,{isRequired:!0,type:"text",id:"invite-user-email-list",name:"invite-user-email-list",value:g,placeholder:i.formatMessage(I.Z.inviteUsersFormEmailsFieldDescription),onChange:(e,t)=>(e=>{A(e)})(t)})),o().createElement("div",{id:"invite-users-is-admin-field",style:{display:"flex",alignItems:"baseline"}},o().createElement(d.Checkbox,{isChecked:h,onChange:()=>C(!h),label:"",id:"invite-users-is-admin"}),o().createElement(s.ExpandableSection,{toggleText:i.formatMessage(I.Z.inviteUsersFormIsAdminFieldTitle),onToggle:e=>{T(e)},isExpanded:N},i.formatMessage(I.Z.inviteUsersFormIsAdminFieldDescription))))))};T.propTypes={fetchData:N().func.isRequired};const h=T},70347:()=>{},25238:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9032.e06a2fe5b24a5a85d0d95efe17cba754.js.map
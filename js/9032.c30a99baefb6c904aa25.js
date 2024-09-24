(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9032],{55218:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(66029),o=i.n(r),a=i(80236),n=i(47173),l=i(93149);const s=e=>{var{isOpen:t,onConfirm:i,onClose:s,children:c,confirmButtonLabel:f="Confirm",cancelButtonLabel:d="Cancel",variant:u=a.v.small,titleIconVariant:m="warning",withCheckbox:p=!1,checkboxLabel:v="I understand that this action cannot be undone",confirmButtonVariant:b=n.Wu.primary,ouiaId:h="WarningModal"}=e,_=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(i[r[o]]=e[r[o]])}return i}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[g,O]=(0,r.useState)(!1);return o().createElement(a.u,Object.assign({variant:u,isOpen:t,onClose:s,onEscapePress:s,titleIconVariant:m,actions:[o().createElement(n.zx,{ouiaId:`${h}-confirm-button`,key:"confirm",variant:b,onClick:()=>{null==i||i(),O(!1)},isDisabled:p&&!g},f),o().createElement(n.zx,{ouiaId:`${h}-cancel-button`,key:"cancel",variant:n.Wu.link,onClick:s},d)],ouiaId:h},_),c,p?o().createElement(l.X,{isChecked:g,onChange:(e,t)=>O(t),label:v,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${h}-confirm-checkbox`}):null)}},80947:(e,t,i)=>{"use strict";i.d(t,{l:()=>c});var r=i(65353),o=i(66029),a=i(11924),n=i(38296);const l="--pf-v5-c-form--m-limit-width--MaxWidth",s=e=>{var{children:t=null,className:i="",isHorizontal:s=!1,isWidthLimited:c=!1,maxWidth:f="",innerRef:d}=e,u=(0,r.__rest)(e,["children","className","isHorizontal","isWidthLimited","maxWidth","innerRef"]);return o.createElement("form",Object.assign({noValidate:!0},f&&{style:Object.assign({[l]:f},u.style)},u,{className:(0,n.css)(a.default.form,s&&a.default.modifiers.horizontal,(c||f)&&a.default.modifiers.limitWidth,i),ref:d}),t)},c=o.forwardRef(((e,t)=>o.createElement(s,Object.assign({innerRef:t},e))));c.displayName="Form"},59775:(e,t,i)=>{"use strict";i.d(t,{c:()=>c});var r=i(65353),o=i(66029),a=i(11924),n=i(11888),l=i(38296),s=i(41724);const c=e=>{var{children:t=null,className:i="",label:c,labelInfo:f,labelIcon:d,isRequired:u=!1,isInline:m=!1,hasNoPaddingTop:p=!1,isStack:v=!1,fieldId:b,role:h}=e,_=(0,r.__rest)(e,["children","className","label","labelInfo","labelIcon","isRequired","isInline","hasNoPaddingTop","isStack","fieldId","role"]);const g="group"===h||"radiogroup"===h,O=g?"span":"label",I=o.createElement(o.Fragment,null,o.createElement(O,Object.assign({className:(0,l.css)(a.default.formLabel)},!g&&{htmlFor:b}),o.createElement("span",{className:(0,l.css)(a.default.formLabelText)},c),u&&o.createElement("span",{className:(0,l.css)(a.default.formLabelRequired),"aria-hidden":"true"}," ",n.t))," ",o.isValidElement(d)&&d);return o.createElement(s.w,null,(e=>o.createElement("div",Object.assign({className:(0,l.css)(a.default.formGroup,i)},h&&{role:h},g&&{"aria-labelledby":`${b||e}-legend`},_),c&&o.createElement("div",Object.assign({className:(0,l.css)(a.default.formGroupLabel,f&&a.default.modifiers.info,p&&a.default.modifiers.noPaddingTop)},g&&{id:`${b||e}-legend`}),f&&o.createElement(o.Fragment,null,o.createElement("div",{className:(0,l.css)(a.default.formGroupLabelMain)},I),o.createElement("div",{className:(0,l.css)(a.default.formGroupLabelInfo)},f)),!f&&I),o.createElement("div",{className:(0,l.css)(a.default.formGroupControl,m&&a.default.modifiers.inline,v&&a.default.modifiers.stack)},t))))};c.displayName="FormGroup"},49644:(e,t,i)=>{"use strict";i.d(t,{J:()=>d});var r=i(65353),o=i(66029),a=i(12455),n=i(38296),l=i(68778),s=i(43047),c=i(69957);const f={success:l.ZP,error:s.ZP,warning:c.ZP},d=e=>{var{status:t,customIcon:i,className:l}=e,s=(0,r.__rest)(e,["status","customIcon","className"]);const c=t&&f[t];return o.createElement("span",Object.assign({className:(0,n.css)(a.Z.formControlIcon,t&&a.Z.modifiers.status,l)},s),i||o.createElement(c,null))}},45469:(e,t,i)=>{"use strict";i.d(t,{Kx:()=>m,f:()=>r,lW:()=>o});var r,o,a=i(65353),n=i(66029),l=i(12455),s=i(38296),c=i(80164),f=i(1774),d=i(49644);!function(e){e.horizontal="horizontal",e.vertical="vertical",e.both="both"}(r||(r={})),function(e){e.default="default",e.plain="plain"}(o||(o={}));class u extends n.Component{constructor(e){super(e),this.inputRef=n.createRef(),this.setAutoHeight=e=>{const t=e.parentElement;t.style.setProperty("height","inherit");const i=window.getComputedStyle(e),r=parseInt(i.getPropertyValue("border-top-width"))+parseInt(i.getPropertyValue("padding-top"))+e.scrollHeight+parseInt(i.getPropertyValue("padding-bottom"))+parseInt(i.getPropertyValue("border-bottom-width"));t.style.setProperty("height",`${r}px`)},this.handleChange=e=>{const t=e.currentTarget;this.props.autoResize&&c.Nq&&this.setAutoHeight(t),this.props.onChange&&this.props.onChange(e,t.value)},e.id||e["aria-label"]||console.error("TextArea: TextArea requires either an id or aria-label to be specified")}componentDidMount(){const e=this.props.innerRef||this.inputRef;if(this.props.autoResize&&c.Nq){const t=e.current;this.setAutoHeight(t)}}render(){const e=this.props,{className:t,value:i,validated:r,isRequired:o,isDisabled:u,readOnlyVariant:m,resizeOrientation:p,innerRef:v,disabled:b,autoResize:h,onChange:_,onBlur:g,onFocus:O}=e,I=(0,a.__rest)(e,["className","value","validated","isRequired","isDisabled","readOnlyVariant","resizeOrientation","innerRef","disabled","autoResize","onChange","onBlur","onFocus"]),N=`resize${(0,c.kC)(p)}`,y=["success","error","warning"].includes(r);return n.createElement("span",{className:(0,s.css)(l.Z.formControl,m&&l.Z.modifiers.readonly,"plain"===m&&l.Z.modifiers.plain,p&&l.Z.modifiers[N],u&&l.Z.modifiers.disabled,y&&l.Z.modifiers[r],t)},n.createElement("textarea",Object.assign({onChange:this.handleChange,onFocus:O,onBlur:g},"string"!=typeof this.props.defaultValue&&{value:i},{"aria-invalid":r===f.LD.error,required:o,disabled:u||b,readOnly:!!m,ref:v||this.inputRef},I)),y&&n.createElement("span",{className:(0,s.css)(l.Z.formControlUtilities)},n.createElement(d.J,{status:r})))}}u.displayName="TextArea",u.defaultProps={innerRef:n.createRef(),className:"",isRequired:!1,isDisabled:!1,validated:"default",resizeOrientation:"both","aria-label":null};const m=n.forwardRef(((e,t)=>n.createElement(u,Object.assign({},e,{innerRef:t}))));m.displayName="TextArea"},19993:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r}),i(70347);const r={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},11924:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r}),i(78752);const r={dirRtl:"pf-v5-m-dir-rtl",form:"pf-v5-c-form",formActions:"pf-v5-c-form__actions",formFieldGroup:"pf-v5-c-form__field-group",formFieldGroupBody:"pf-v5-c-form__field-group-body",formFieldGroupHeader:"pf-v5-c-form__field-group-header",formFieldGroupHeaderActions:"pf-v5-c-form__field-group-header-actions",formFieldGroupHeaderDescription:"pf-v5-c-form__field-group-header-description",formFieldGroupHeaderMain:"pf-v5-c-form__field-group-header-main",formFieldGroupHeaderTitle:"pf-v5-c-form__field-group-header-title",formFieldGroupHeaderTitleText:"pf-v5-c-form__field-group-header-title-text",formFieldGroupToggle:"pf-v5-c-form__field-group-toggle",formFieldGroupToggleButton:"pf-v5-c-form__field-group-toggle-button",formFieldGroupToggleIcon:"pf-v5-c-form__field-group-toggle-icon",formFieldset:"pf-v5-c-form__fieldset",formGroup:"pf-v5-c-form__group",formGroupControl:"pf-v5-c-form__group-control",formGroupLabel:"pf-v5-c-form__group-label",formGroupLabelHelp:"pf-v5-c-form__group-label-help",formGroupLabelInfo:"pf-v5-c-form__group-label-info",formGroupLabelMain:"pf-v5-c-form__group-label-main",formHelperText:"pf-v5-c-form__helper-text",formHelperTextIcon:"pf-v5-c-form__helper-text-icon",formLabel:"pf-v5-c-form__label",formLabelRequired:"pf-v5-c-form__label-required",formLabelText:"pf-v5-c-form__label-text",formSection:"pf-v5-c-form__section",formSectionTitle:"pf-v5-c-form__section-title",modifiers:{horizontal:"pf-m-horizontal",alignRight:"pf-m-align-right",noPaddingTop:"pf-m-no-padding-top",horizontalOnXs:"pf-m-horizontal-on-xs",horizontalOnSm:"pf-m-horizontal-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",limitWidth:"pf-m-limit-width",action:"pf-m-action",info:"pf-m-info",disabled:"pf-m-disabled",inline:"pf-m-inline",stack:"pf-m-stack",error:"pf-m-error",success:"pf-m-success",warning:"pf-m-warning",inactive:"pf-m-inactive",hidden:"pf-m-hidden",expanded:"pf-m-expanded"},themeDark:"pf-v5-theme-dark"}},12455:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r}),i(90479);const r={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}},62702:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r}),i(25238);const r={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},66042:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r}),i(87234);const r={bullseye:"pf-v5-l-bullseye"}},60817:function(e,t,i){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(i[r[o]]=e[r[o]])}return i},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var n=i(85893),l=i(86706),s=a(i(72837)),c=i(53446),f=i(79206);t.NotificationPortalBase=function(e){var t=e.clearNotifications,i=o(e,["clearNotifications"]),a=(0,l.useSelector)((function(e){return e.notifications})),f=(0,l.useDispatch)();return(0,n.jsx)(s.default,r({notifications:a,removeNotification:function(e){return f((0,c.removeNotification)(e))},onClearAll:t||function(){return f((0,c.clearNotifications)())}},i))},t.NotificationPortal=function(e){var i=e.silent,a=void 0===i||i,l=o(e,["silent"]);return(0,n.jsx)(f.ErrorBoundary,{headerTitle:"Notifications portal",silent:a,children:(0,n.jsx)(t.NotificationPortalBase,r({},l))})};var d=i(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return a(d).default}}),t.default=t.NotificationPortal},72871:function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,o)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}}),o(i(60817),t)},71355:function(e,t,i){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var o=i(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return r(o).default}});var a=i(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return a.notificationsReducers}});var n=i(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return n.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return n.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return n.CLEAR_NOTIFICATIONS}});var l=i(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return l.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return l.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return l.clearNotifications}});var s=i(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return r(s).default}})},68129:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var i="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(i,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(i,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(i,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,i){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var o=i(68129);t.addNotification=function(e){return{type:o.ADD_NOTIFICATION,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:o.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:o.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,i){"use strict";var r=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var o=i(68129);t.defaultState=[],t.notificationsReducers=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case o.ADD_NOTIFICATION:return a=e,n=i.payload,r(r([],a,!0),[n],!1);case o.REMOVE_NOTIFICATION:return function(e,t){var i=t.payload,o=e.findIndex((function(e){return e.id===i}));return r(r([],e.slice(0,o),!0),e.slice(o+1),!0)}(e,i);case o.CLEAR_NOTIFICATIONS:return[];default:return e}var a,n},t.notifications=t.notificationsReducers,t.default=t.notifications},79206:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ErrorBoundary:()=>r.Z,default:()=>r.Z}),i(27351);var r=i(49314)},65542:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>T});var r=i(66029),o=i.n(r),a=i(25387),n=i(62012),l=i(80236),s=i(47173),c=i(80947),f=i(59775),d=i(45469),u=i(93149),m=i(35373),p=i(86706),v=i(71355),b=i(55218),h=i(2550),_=i(60063),g=i(45697),O=i.n(g),I=i(14289),N=i(64756);const y=({fetchData:e})=>{const t=(0,p.useDispatch)(),i=(0,a.YB)(),g=(0,n.useNavigate)(),[O,y]=(0,r.useState)(!1),[T,C]=(0,r.useState)(!1),[E,x]=(0,r.useState)(""),[A,F]=(0,r.useState)([]),[R,P]=(0,r.useState)(!1),j=()=>A?.length>0&&P(!0)||D(),D=()=>{t((0,v.addNotification)({variant:"warning",title:i.formatMessage(h.Z.inviteUsers),dismissDelay:8e3,description:i.formatMessage(h.Z.inviteUsersCancelled)})),g((0,N.n)(I.Z.users.link))};return(0,r.useEffect)((()=>{(e=>{let t=e.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)||[];F(t)})(E)}),[E]),o().createElement(r.Fragment,null,o().createElement(b.Z,{type:"user",isOpen:R,onModalCancel:()=>P(!1),onConfirmCancel:D}),o().createElement(l.u,{variant:l.v.medium,isOpen:!R,title:i.formatMessage(h.Z.inviteUsersTitle),description:i.formatMessage(h.Z.inviteUsersDescription),onClose:j,actions:[o().createElement(s.zx,{"aria-label":"Save",className:"pf-u-mr-sm",ouiaId:"primary-save-button",variant:"primary",key:"save",onClick:()=>{const i={emails:A,isAdmin:T};t((0,_.Sh)(i)).then((()=>{e(),g((0,N.n)(I.Z.users.link))})).catch((e=>{console.error(e)}))},isDisabled:0==A?.length},i.formatMessage(h.Z.inviteUsersButton)),o().createElement(s.zx,{"aria-label":"Cancel",ouiaId:"secondary-cancel-button",variant:"link",key:"cancel",onClick:j},i.formatMessage(h.Z.cancel))]},o().createElement(c.l,{id:"invite-users-form",className:"rbac-c-user_invite-users-form"},o().createElement(f.c,{label:i.formatMessage(h.Z.inviteUsersFormEmailsFieldTitle),isRequired:!0,fieldId:"invite-users-email-list-field"},o().createElement(d.Kx,{isRequired:!0,type:"text",id:"invite-user-email-list",name:"invite-user-email-list",value:E,placeholder:i.formatMessage(h.Z.inviteUsersFormEmailsFieldDescription),onChange:(e,t)=>(e=>{x(e)})(t)})),o().createElement("div",{id:"invite-users-is-admin-field",style:{display:"flex",alignItems:"baseline"}},o().createElement(u.X,{isChecked:T,onChange:()=>C(!T),label:"",id:"invite-users-is-admin"}),o().createElement(m.L,{toggleText:i.formatMessage(h.Z.inviteUsersFormIsAdminFieldTitle),onToggle:e=>{y(e)},isExpanded:O},i.formatMessage(h.Z.inviteUsersFormIsAdminFieldDescription))))))};y.propTypes={fetchData:O().func.isRequired};const T=y},70347:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9032.922ee46dcc2240ce7cf4d8127f99fa18.js.map
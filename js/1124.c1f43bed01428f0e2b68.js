"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[1124,459],{59775:(e,t,a)=>{a.d(t,{c:()=>c});var r=a(65353),n=a(28416),i=a(11924),o=a(11888),s=a(38296),l=a(41724);const c=e=>{var{children:t=null,className:a="",label:c,labelInfo:d,labelIcon:m,isRequired:u=!1,isInline:p=!1,hasNoPaddingTop:f=!1,isStack:g=!1,fieldId:h,role:y}=e,v=(0,r.__rest)(e,["children","className","label","labelInfo","labelIcon","isRequired","isInline","hasNoPaddingTop","isStack","fieldId","role"]);const E="group"===y||"radiogroup"===y,b=E?"span":"label",N=n.createElement(n.Fragment,null,n.createElement(b,Object.assign({className:(0,s.css)(i.default.formLabel)},!E&&{htmlFor:h}),n.createElement("span",{className:(0,s.css)(i.default.formLabelText)},c),u&&n.createElement("span",{className:(0,s.css)(i.default.formLabelRequired),"aria-hidden":"true"}," ",o.t))," ",n.isValidElement(m)&&m);return n.createElement(l.w,null,(e=>n.createElement("div",Object.assign({className:(0,s.css)(i.default.formGroup,a)},y&&{role:y},E&&{"aria-labelledby":`${h||e}-legend`},v),c&&n.createElement("div",Object.assign({className:(0,s.css)(i.default.formGroupLabel,d&&i.default.modifiers.info,f&&i.default.modifiers.noPaddingTop)},E&&{id:`${h||e}-legend`}),d&&n.createElement(n.Fragment,null,n.createElement("div",{className:(0,s.css)(i.default.formGroupLabelMain)},N),n.createElement("div",{className:(0,s.css)(i.default.formGroupLabelInfo)},d)),!d&&N),n.createElement("div",{className:(0,s.css)(i.default.formGroupControl,p&&i.default.modifiers.inline,g&&i.default.modifiers.stack)},t))))};c.displayName="FormGroup"},45469:(e,t,a)=>{a.d(t,{Kx:()=>p,f:()=>r,lW:()=>n});var r,n,i=a(65353),o=a(28416),s=a(12455),l=a(38296),c=a(80164),d=a(1774),m=a(49644);!function(e){e.horizontal="horizontal",e.vertical="vertical",e.both="both"}(r||(r={})),function(e){e.default="default",e.plain="plain"}(n||(n={}));class u extends o.Component{constructor(e){super(e),this.inputRef=o.createRef(),this.setAutoHeight=e=>{const t=e.parentElement;t.style.setProperty("height","inherit");const a=window.getComputedStyle(e),r=parseInt(a.getPropertyValue("border-top-width"))+parseInt(a.getPropertyValue("padding-top"))+e.scrollHeight+parseInt(a.getPropertyValue("padding-bottom"))+parseInt(a.getPropertyValue("border-bottom-width"));t.style.setProperty("height",`${r}px`)},this.handleChange=e=>{const t=e.currentTarget;this.props.autoResize&&c.Nq&&this.setAutoHeight(t),this.props.onChange&&this.props.onChange(e,t.value)},e.id||e["aria-label"]||console.error("TextArea: TextArea requires either an id or aria-label to be specified")}componentDidMount(){const e=this.props.innerRef||this.inputRef;if(this.props.autoResize&&c.Nq){const t=e.current;this.setAutoHeight(t)}}render(){const e=this.props,{className:t,value:a,validated:r,isRequired:n,isDisabled:u,readOnlyVariant:p,resizeOrientation:f,innerRef:g,disabled:h,autoResize:y,onChange:v,onBlur:E,onFocus:b}=e,N=(0,i.__rest)(e,["className","value","validated","isRequired","isDisabled","readOnlyVariant","resizeOrientation","innerRef","disabled","autoResize","onChange","onBlur","onFocus"]),I=`resize${(0,c.kC)(f)}`,T=["success","error","warning"].includes(r);return o.createElement("span",{className:(0,l.css)(s.Z.formControl,p&&s.Z.modifiers.readonly,"plain"===p&&s.Z.modifiers.plain,f&&s.Z.modifiers[I],u&&s.Z.modifiers.disabled,T&&s.Z.modifiers[r],t)},o.createElement("textarea",Object.assign({onChange:this.handleChange,onFocus:b,onBlur:E},"string"!=typeof this.props.defaultValue&&{value:a},{"aria-invalid":r===d.LD.error,required:n,disabled:u||h,readOnly:!!p,ref:g||this.inputRef},N)),T&&o.createElement("span",{className:(0,l.css)(s.Z.formControlUtilities)},o.createElement(m.J,{status:r})))}}u.displayName="TextArea",u.defaultProps={innerRef:o.createRef(),className:"",isRequired:!1,isDisabled:!1,validated:"default",resizeOrientation:"both","aria-label":null};const p=o.forwardRef(((e,t)=>o.createElement(u,Object.assign({},e,{innerRef:t}))));p.displayName="TextArea"},60817:function(e,t,a){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)},n=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=t.NotificationPortalBase=void 0;var o=a(85893),s=a(86706),l=i(a(72837)),c=a(53446),d=a(79206);t.NotificationPortalBase=function(e){var t=e.clearNotifications,a=n(e,["clearNotifications"]),i=(0,s.useSelector)((function(e){return e.notifications})),d=(0,s.useDispatch)();return(0,o.jsx)(l.default,r({notifications:i,removeNotification:function(e){return d((0,c.removeNotification)(e))},onClearAll:t||function(){return d((0,c.clearNotifications)())}},a))},t.NotificationPortal=function(e){var a=e.silent,i=void 0===a||a,s=n(e,["silent"]);return(0,o.jsx)(d.ErrorBoundary,{headerTitle:"Notifications portal",silent:i,children:(0,o.jsx)(t.NotificationPortalBase,r({},s))})};var m=a(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return i(m).default}}),t.default=t.NotificationPortal},72871:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||r(t,e,a)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(o).default}}),n(a(60817),t)},71355:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var n=a(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return r(n).default}});var i=a(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return r(i).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return i.notificationsReducers}});var o=a(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return o.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return o.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return o.CLEAR_NOTIFICATIONS}});var s=a(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return s.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return s.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return s.clearNotifications}});var l=a(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return r(l).default}})},68129:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var a="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(a,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(a,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(a,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,a){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var n=a(68129);t.addNotification=function(e){return{type:n.ADD_NOTIFICATION,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:n.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:n.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,a){var r=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var r,n=0,i=t.length;n<i;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var n=a(68129);t.defaultState=[],t.notificationsReducers=function(e,a){switch(void 0===e&&(e=t.defaultState),a.type){case n.ADD_NOTIFICATION:return i=e,o=a.payload,r(r([],i,!0),[o],!1);case n.REMOVE_NOTIFICATION:return function(e,t){var a=t.payload,n=e.findIndex((function(e){return e.id===a}));return r(r([],e.slice(0,n),!0),e.slice(n+1),!0)}(e,a);case n.CLEAR_NOTIFICATIONS:return[];default:return e}var i,o},t.notifications=t.notificationsReducers,t.default=t.notifications},79206:(e,t,a)=>{a.r(t),a.d(t,{ErrorBoundary:()=>r.Z,default:()=>r.Z}),a(16699);var r=a(49314)},87767:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(31055),n=a(28416),i=a.n(n),o=a(45697),s=a.n(o),l=(a(27361),a(48880));s().oneOfType([s().string,s().func,s().object]),s().func.isRequired,s().node.isRequired,s().bool,s().func.isRequired,s().node.isRequired,s().func.isRequired;const c=({renderNextButton:e,disableBack:t,handlePrev:a,buttonLabels:{cancel:o,back:s},context:c})=>{const d=(0,l.default)(),{success:m,error:u,submitting:p}=(0,n.useContext)(c);return m||void 0===u||u||p?null:i().createElement(n.Fragment,null,e(),i().createElement(r.Button,{type:"button",variant:"secondary",isDisabled:t,onClick:a},s),i().createElement(r.Button,{type:"button",variant:"link",onClick:d.onCancel},o))};c.propTypes={disableBack:s().bool,handlePrev:s().func.isRequired,handleNext:s().func.isRequired,nextStep:s().oneOfType([s().string,s().shape({when:s().string.isRequired,stepMapper:s().object.isRequired}),s().func]),buttonLabels:s().shape({submit:s().node.isRequired,cancel:s().node.isRequired,back:s().node.isRequired,next:s().node.isRequired}).isRequired,context:s().object.isRequired,renderNextButton:s().func};const d=c},56640:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(28416),n=a.n(r),i=a(31055),o=a(95376),s=a(70363),l=a(36345),c=a.n(l),d=a(25387),m=a(45697),u=a.n(m),p=a(2550);const f=({context:e,title:t,text:a})=>{const l=(0,d.YB)(),{jumpToStep:m}=(0,r.useContext)(s.default),{setWizardError:u}=(0,r.useContext)(e);return n().createElement(o.EmptyState,{variant:o.EmptyStateVariant.lg},n().createElement(o.EmptyStateHeader,{titleText:n().createElement(n().Fragment,null,t),icon:n().createElement(o.EmptyStateIcon,{color:"red",icon:c()}),headingLevel:"h4"}),n().createElement(o.EmptyStateBody,null,a),n().createElement(o.EmptyStateFooter,null,n().createElement(i.Button,{onClick:()=>{u(void 0),m(0)},variant:"primary"},l.formatMessage(p.Z.returnToStepNumber,{number:1}))))};f.propTypes={context:u().object.isRequired,title:u().string.isRequired,text:u().string.isRequired};const g=f},56280:(e,t,a)=>{a.r(t),a.d(t,{AddRoleWizardContext:()=>ye,default:()=>Ie,mapperExtension:()=>be});var r=a(28416),n=a.n(r),i=a(45697),o=a.n(i),s=a(86706),l=a(25387),c=a(71355),d=a(51912),m=a(67850),u=a(8340),p=a(9820),f=a(29301),g=a(55140),h=a(64124),y=a(52229),v=a(74503),E=a(15950),b=a(64380),N=a(72232),I=a(19443),T=a(47625),O=a(48880),R=a(60167),C=a(2550),x=a(2034);const Z=async e=>{const t=(0,l.Sn)(),a=(0,l.dp)({locale:R.S,messages:x},t);if(!e)return;const r=await(0,I.vd)({limit:10,offset:0,name:e,nameMatch:"exact"}).catch((e=>{console.error(e)})),n=await(0,I.vd)({limit:10,offset:0,displayName:e,nameMatch:"exact"}).catch((e=>{console.error(e)}));if(r?.data?.length>0||n?.data?.length>0)throw a.formatMessage(C.Z.nameAlreadyTaken)},M=(0,T.Z)(Z),S=({name:e})=>{const t=(0,O.default)();return(0,r.useEffect)((()=>(setTimeout((()=>t.change(e,"1"))),()=>t.change(e,""))),[]),null};S.propTypes={name:o().string.isRequired};var _=a(56640);const A=({formFields:e})=>{const t=(0,l.YB)(),{submitting:a,error:i,setWizardError:o}=(0,r.useContext)(ye),{getState:s}=(0,O.default)();return(0,r.useEffect)((()=>{o(void 0),Z(s().values["role-name"]).then((()=>o(!1))).catch((()=>o(!0)))}),[]),void 0===i||a?n().createElement(v.Bullseye,null,n().createElement(E.Spinner,{size:"xl"})):!0===i?n().createElement(_.Z,{context:ye,title:t.formatMessage(C.Z.roleNameTakenTitle),text:t.formatMessage(C.Z.roleNameTakenText)}):n().createElement("div",{className:"rbac"},n().createElement(N.Title,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-sm"},t.formatMessage(C.Z.reviewDetails)),n().createElement(b.TextContent,{className:"pf-v5-u-mb-md"},n().createElement(b.Text,null,t.formatMessage(C.Z.reviewRoleDetails))),e?.[0]?.[0])};A.propTypes={formFields:o().array};const F=A,P=({formFields:e})=>{const t=(0,l.YB)();return n().createElement("div",{className:"rbac"},n().createElement(N.Title,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-lg"},t.formatMessage(C.Z.defineCostResources)),e)};P.propTypes={formFields:o().array};const D=P;var w=a(87767),j=a(92884),k=a(68539),q=a(13563),B=a(45030),G=a(31055),L=a(95376),V=a(71214),z=a.n(V),H=a(64756),$=a(14289);const W=({onClose:e})=>{const{setHideForm:t,setWizardSuccess:a}=(0,r.useContext)(ye),i=(0,l.YB)();return n().createElement(L.EmptyState,{variant:L.EmptyStateVariant.lg},n().createElement(L.EmptyStateHeader,{titleText:n().createElement(n().Fragment,null,i.formatMessage(C.Z.roleCreatedSuccessfully)),icon:n().createElement(L.EmptyStateIcon,{color:"green",icon:z()}),headingLevel:"h4"}),n().createElement(L.EmptyStateBody,null),n().createElement(L.EmptyStateFooter,null,n().createElement(G.Button,{onClick:e,variant:"primary"},i.formatMessage(C.Z.exit)),n().createElement(L.EmptyStateActions,null,n().createElement(G.Button,{onClick:()=>{t(!1),a(!1)},variant:"link"},i.formatMessage(C.Z.createAnotherRole)),n().createElement(G.Button,{component:e=>n().createElement(H.Z,{to:$.Z.groups.link,...e}),variant:"link"},i.formatMessage(C.Z.addRoleToGroup)))))};W.propTypes={onClose:o().func.isRequired};const Y=W;var U=a(73893),K=a(5904),Q=a(97246),J=a(81169),X=a(7732);const ee=({roleReducer:{rolesForWizard:e,isWizardLoading:t}})=>({roles:e.data,pagination:e.meta,isWizardLoading:t});var te=a(55594),ae=a(23539),re=a(9545);const ne=(e,t)=>n().createElement("div",{className:"rbac-c-sticky"},n().createElement(re.Grid,{className:"rbac-c-sticky--title"},e.map((t=>n().createElement(re.GridItem,{span:12/e.length,key:t},t)))),n().createElement(re.Grid,{className:"rbac-c-sticky--data"},t.map((t=>t.cells.map((t=>n().createElement(re.GridItem,{span:12/e.length,key:t},t)))))));var ie=a(64645),oe=a(47108);var se=a(16987),le=a(56591),ce=a(92607),de=a(45469),me=a(59775);const ue=e=>{const t=(0,l.YB)(),{input:a}=(0,J.Z)(e),i=(0,O.default)(),{"role-name":o,"role-description":s}=i.getState().values,[c,d]=(0,r.useState)(o||""),[m,u]=(0,r.useState)(),[p,f]=(0,r.useState)(s),g=e=>{a.onChange(void 0),M(e).then((()=>{a.onChange(e),u(void 0)})).catch((e=>{u(e),a.onChange(void 0)})),d(e)};(0,r.useEffect)((()=>{c?.length>0&&g(c)}),[]);const h=((e,t)=>void 0===e||t||e?.length>150?"error":"default")(c,m),y=(e=>e?.length>150?"error":"default")(p);return n().createElement(ae.Stack,{hasGutter:!0},n().createElement(ae.StackItem,{className:"rbac-l-stack__item-summary"},n().createElement(me.c,{label:t.formatMessage(C.Z.roleName),isRequired:!0},n().createElement(ce.oi,{id:"role-name",value:c,type:"text",validated:h,onBlur:()=>""===c&&d(void 0),onChange:(e,t)=>g(t),"aria-label":"Role name"}),"error"===h&&n().createElement(se.FormHelperText,null,n().createElement(le.HelperText,null,n().createElement(le.HelperTextItem,{variant:h},c?m:t.formatMessage(C.Z.required)))))),n().createElement(ae.StackItem,null,n().createElement(me.c,{label:t.formatMessage(C.Z.roleDescription)},n().createElement(de.Kx,{id:"role-description",value:p,validated:y,onChange:(e,t)=>{f(t),i.change("role-description",t)},"aria-label":"Role description",resizeOrientation:"vertical"}),"error"===y&&n().createElement(se.FormHelperText,null,n().createElement(le.HelperText,null,n().createElement(le.HelperTextItem,{variant:y},t.formatMessage(C.Z.maxCharactersWarning,{number:150})))))))};ue.propTypes={name:o().string,description:o().string};const pe=ue;var fe=a(84414);class ge extends n().Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){if(!e.message.includes(this.props.silentErrorString))throw this.setState({hasError:!1}),e}render(){return this.state.hasError?null:this.props.children}}ge.propTypes={children:o().node.isRequired,silentErrorString:o().string.isRequired};const he=ge,ye=(0,r.createContext)({success:!1,submitting:!1,error:void 0}),ve=e=>n().createElement(m.ZP,{...e,showFormControls:!1}),Ee=({Content:e,...t})=>n().createElement(e,{...t});Ee.propTypes={Content:o().elementType.isRequired};const be={"set-name":pe,"base-role-table":e=>{const t=(0,l.YB)(),a=(0,s.useDispatch)(),i=e=>a((0,q.hs)(e)),[o,c]=(0,r.useState)(""),{roles:d,pagination:m,isWizardLoading:u}=(0,s.useSelector)(ee,s.shallowEqual),{input:p}=(0,J.Z)(e),g=(0,O.default)(),h=["",{title:t.formatMessage(C.Z.name),key:"display_name",transforms:[X.p]},t.formatMessage(C.Z.description)],[y,v]=(0,r.useState)({index:1,direction:"asc"}),E=`${"desc"===y?.direction?"-":""}${h[y?.index].key}`;return(0,r.useEffect)((()=>{i({limit:50,offset:0,itemCount:0,orderBy:E})}),[]),n().createElement("div",null,n().createElement(K.Alert,{variant:"info",isInline:!0,title:t.formatMessage(C.Z.granularPermissionsWillBeCopied)}),n().createElement(Q.M,{columns:h,rows:(e=>e.map((e=>({cells:[{title:n().createElement(U.Radio,{id:`${e.uuid}-radio`,name:`${e.name}-radio`,"aria-label":`${e.name}-radio`,ouiaId:`${e.name}-radio`,value:e.uuid,isChecked:p.value.uuid===e.uuid,onChange:()=>{g.batch((()=>{p.onChange(e),g.change("role-copy-name",`Copy of ${e.display_name||e.name}`),g.change("role-copy-description",e.description),g.change("add-permissions-table",[]),g.change("base-permissions-loaded",!1),g.change("not-allowed-permissions",[])}))}}),props:{className:"pf-v5-c-table__check"}},e.display_name||e.name,e.description]}))))(d),data:d,fetchData:e=>{i((0,f.jl)(e))},filterValue:o,setFilterValue:({name:e})=>c(e),isLoading:u,sortBy:y,onSort:(e,t,a)=>{const r=`${"desc"===a?"-":""}${h[t].key}`;v({index:t,direction:a}),i({...m,offset:0,orderBy:r})},pagination:m,titlePlural:t.formatMessage(C.Z.roles),titleSingular:t.formatMessage(C.Z.role),filterPlaceholder:t.formatMessage(C.Z.roleName).toLowerCase(),ouiaId:"roles-table",isCompact:!0,tableId:"base-role"}))},"add-permissions-table":te.Z,"cost-resources":oe.Z,"inventory-groups-role":ie.Z,review:()=>{const e=(0,l.YB)(),t=(0,O.default)(),{"role-name":a,"role-description":r,"role-copy-name":i,"role-copy-description":o,"add-permissions-table":s,"resource-definitions":c,"has-cost-resources":d,"inventory-group-permissions":m,"role-type":u}=t.getState().values,p=[e.formatMessage(C.Z.application),e.formatMessage(C.Z.resourceType),e.formatMessage(C.Z.operation)],f=s.map((e=>({cells:e.uuid.split(":")}))),g=(c||[]).map((({permission:e,resources:t})=>({cells:[e,t.join(", ")]}))),h=(m||[]).map((({permission:t,groups:a})=>({cells:[t,a?.map((t=>null===t?.id?e.formatMessage(C.Z.ungroupedSystems):t?.name)).join(", ")]})));return n().createElement(n().Fragment,null,n().createElement(ae.Stack,null,n().createElement(ae.StackItem,{className:"rbac-l-stack__item-summary"},n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(C.Z.name))),n().createElement(re.GridItem,{sm:12,md:10},n().createElement(b.Text,{component:b.TextVariants.p},"create"===u?a:i))),n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(C.Z.description))),n().createElement(re.GridItem,{sm:12,md:10},n().createElement(b.Text,{component:b.TextVariants.p},"create"===u?r:o))),n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(C.Z.permissions))),n().createElement(re.GridItem,{sm:12,md:10},ne(p,f))),m&&n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(C.Z.resourceDefinitions))),n().createElement(re.GridItem,{sm:12,md:10},ne([e.formatMessage(C.Z.permission),e.formatMessage(C.Z.groupDefinition)],h))),d&&n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(C.Z.resourceDefinitions))),n().createElement(re.GridItem,{sm:12,md:10},ne([e.formatMessage(C.Z.permission),e.formatMessage(C.Z.resourceDefinitions)],g))))))},description:Ee,"type-selector":e=>{const t=(0,l.YB)(),{input:a}=(0,J.Z)(e),i=(0,O.default)(),[o,s]=(0,r.useState)(i.getState().values["role-type"]),c=e=>{s(e),a.onChange(e),i.change("add-permissions-table",[]),i.change("base-permissions-loaded",!1),i.change("not-allowed-permissions",[])};return n().createElement("div",null,n().createElement(U.Radio,{isChecked:"create"===o,className:"pf-v5-u-mb-sm",name:"role-type-create",onChange:()=>c("create"),label:t.formatMessage(C.Z.createRoleFromScratch),id:"role-type-create",value:"create"}),n().createElement(U.Radio,{isChecked:"copy"===o,name:"role-type-copy",onChange:()=>c("copy"),label:t.formatMessage(C.Z.copyAnExistingRole),id:"role-type-copy",value:"copy"}))}},Ne=({pagination:e,filters:t,orderBy:a})=>{const i=(0,l.YB)(),o=(0,s.useDispatch)(),m=(0,fe.Z)(),v=(0,g.Z)(),[E,b]=(0,r.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),[N,I]=(0,r.useState)(!1),T=(0,r.useRef)(document.createElement("div")),[O,Z]=(0,r.useState)();(0,r.useEffect)((()=>{Z((e=>{const t=(0,l.Sn)(),a=(0,l.dp)({locale:R.S,messages:x},t);return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:a.formatMessage(C.Z.createRole),style:{overflow:"hidden"},container:e,fields:[{title:a.formatMessage(C.Z.createRole),name:"step-1",nextStep:{when:"role-type",stepMapper:{copy:"name-and-description",create:"add-permissions"}},fields:[{component:"type-selector",name:"role-type",isRequired:!0,validate:[{type:h.Z.REQUIRED}]},{component:"set-name",name:"role-name",type:"text",validate:[{type:h.Z.REQUIRED},{type:h.Z.MAX_LENGTH,threshold:150}],condition:{when:"role-type",is:"create"}},{component:"base-role-table",name:"copy-base-role",label:a.formatMessage(C.Z.baseRole),isRequired:!0,condition:{when:"role-type",is:"copy"},validate:[{type:h.Z.REQUIRED}]},{condition:{when:"role-type",is:"create"},component:"description",name:"fixasyncvalidation",Content:S},{condition:{when:"role-type",is:"copy"},component:"description",name:"fixasyncvalidation2",Content:S}]},{title:a.formatMessage(C.Z.nameAndDescription),name:"name-and-description",nextStep:"add-permissions",fields:[{component:"text-field",name:"role-copy-name",type:"text",label:a.formatMessage(C.Z.roleName),isRequired:!0,validate:[M,{type:h.Z.REQUIRED},{type:"max-length",threshold:150}]},{component:"text-field",name:"role-copy-description",type:"text",label:a.formatMessage(C.Z.roleDescription),validate:[{type:"max-length",threshold:150}]}]},{name:"add-permissions",title:a.formatMessage(C.Z.addPermissions),StepTemplate:y.Z,nextStep:({values:e})=>(0,j.j)("add-permissions",e),fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{title:a.formatMessage(C.Z.inventoryGroupsAccessTitle),name:"inventory-groups-role",StepTemplate:k.Z,nextStep:({values:e})=>(0,j.j)("inventory-groups-role",e),fields:[{component:"plain-text",name:"cost-resources",label:n().createElement("p",{className:"pf-v5-u-mb-md"},a.formatMessage(C.Z.applyInventoryGroupsRolePermission))},{component:"inventory-groups-role",name:"inventory-groups-role",validate:[(e=[])=>e?.every((({groups:e,permission:t})=>e?.length>0&&t))?void 0:a.formatMessage(C.Z.assignAtLeastOneInventoryGroup)]}]},{name:"cost-resources-definition",title:a.formatMessage(C.Z.defineCostResources),nextStep:"review",StepTemplate:D,fields:[{component:"plain-text",name:"text-description",label:n().createElement("p",{className:"pf-v5-u-mb-md"},a.formatMessage(C.Z.applyCostPermissionText))},{component:"cost-resources",name:"cost-resources",validate:[(e=[])=>e?.every((({resources:e})=>e?.length>0))?void 0:a.formatMessage(C.Z.assignAtLeastOneResource)]}]},{name:"review",title:a.formatMessage(C.Z.reviewDetails),buttons:e=>n().createElement(w.Z,{...e,context:ye}),StepTemplate:F,fields:[{component:"review",name:"review"}]}]}]}})(T.current))}),[]);const _=()=>m({pathname:$.Z.roles.link,search:(0,f.GT)({page:1,per_page:e.limit})}),A=()=>{E.success||o((0,c.addNotification)({variant:"warning",title:i.formatMessage(C.Z.creatingRoleCanceled),dismissDelay:8e3})),I(!1),setTimeout((()=>{m({pathname:$.Z.roles.link,search:(0,f.GT)({page:1,per_page:e.limit,...t})})}))};return O?n().createElement(ye.Provider,{value:{...E,setWizardError:e=>b((t=>({...t,error:e}))),setWizardSuccess:e=>b((t=>({...t,success:e}))),setHideForm:e=>b((t=>({...t,hideForm:e})))}},n().createElement(he,{silentErrorString:"focus-trap"},n().createElement(B.R,{type:"role",isOpen:N,onModalCancel:()=>{T.current.hidden=!1,I(!1)},onModalConfirm:A})),E.hideForm?E.success?n().createElement(p.e,{title:i.formatMessage(C.Z.createRole),isOpen:!0,onClose:_,steps:[{name:"success",component:n().createElement(Y,{onClose:_}),isFinishedStep:!0}]}):null:n().createElement(d.Z,{schema:O,container:T,subscription:{values:!0},FormTemplate:ve,initialValues:{"role-type":"create"},componentMapper:{...u.ZP,...be},onSubmit:t=>{const{"role-name":r,"role-description":n,"role-copy-name":i,"role-copy-description":s,"add-permissions-table":l,"inventory-groups-role":c,"cost-resources":d,"role-type":m}=t,u=l.map((e=>e.uuid)),p={applications:[...new Set(l.map((({uuid:e})=>e.split(":")[0])))],description:("create"===m?n:s)||null,name:"create"===m?r:i,access:l.reduce(((e,{uuid:t,requires:a=[]})=>[...e,...[t,...a.filter((e=>!u.includes(e)))].map((e=>{let t;return e.includes("cost-management")?t={key:`cost-management.${e.split(":")[1]}`,operation:"in",value:d?.find((t=>t.permission===e))?.resources}:e.includes("inventory")&&(t={key:"group.id",operation:"in",value:c?.find((t=>t.permission===e))?.groups?.map((e=>e?.id))}),{permission:e,resourceDefinitions:t?[{attributeFilter:t}]:[]}}))]),[])};return o((0,q.fA)(p)).then((()=>{b((e=>({...e,submitting:!1,success:!0,hideForm:!0}))),o((0,q.Kt)({limit:e.limit,orderBy:a,usesMetaInURL:!0,chrome:v}))})).catch((()=>{b((e=>({...e,submitting:!1,success:!1,hideForm:!0}))),o((0,q.Kt)({limit:e.limit,orderBy:a,usesMetaInURL:!0,chrome:v})),_()}))},onCancel:e=>{Boolean(e&&e["role-name"]||e["role-description"]||e["copy-base-role"])?(T.current.hidden=!0,I(!0)):A()}})):null};Ne.propTypes={pagination:o().shape({limit:o().number.isRequired}).isRequired,filters:o().shape({name:o().string}).isRequired,orderBy:o().string};const Ie=Ne},47625:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(99166);const n=(e,t=250,a={onlyResolvesLast:!1})=>(0,r.Z)(e,t,a)}}]);
//# sourceMappingURL=../sourcemaps/1124.2e7c38db0552a37b9f38e3f861bb8379.js.map
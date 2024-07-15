(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[673,459,209],{59775:(e,t,a)=>{"use strict";a.d(t,{c:()=>c});var s=a(65353),r=a(28416),n=a(11924),o=a(11888),i=a(38296),l=a(41724);const c=e=>{var{children:t=null,className:a="",label:c,labelInfo:u,labelIcon:m,isRequired:d=!1,isInline:p=!1,hasNoPaddingTop:f=!1,isStack:g=!1,fieldId:h,role:E}=e,v=(0,s.__rest)(e,["children","className","label","labelInfo","labelIcon","isRequired","isInline","hasNoPaddingTop","isStack","fieldId","role"]);const b="group"===E||"radiogroup"===E,y=b?"span":"label",Z=r.createElement(r.Fragment,null,r.createElement(y,Object.assign({className:(0,i.css)(n.default.formLabel)},!b&&{htmlFor:h}),r.createElement("span",{className:(0,i.css)(n.default.formLabelText)},c),d&&r.createElement("span",{className:(0,i.css)(n.default.formLabelRequired),"aria-hidden":"true"}," ",o.t))," ",r.isValidElement(m)&&m);return r.createElement(l.w,null,(e=>r.createElement("div",Object.assign({className:(0,i.css)(n.default.formGroup,a)},E&&{role:E},b&&{"aria-labelledby":`${h||e}-legend`},v),c&&r.createElement("div",Object.assign({className:(0,i.css)(n.default.formGroupLabel,u&&n.default.modifiers.info,f&&n.default.modifiers.noPaddingTop)},b&&{id:`${h||e}-legend`}),u&&r.createElement(r.Fragment,null,r.createElement("div",{className:(0,i.css)(n.default.formGroupLabelMain)},Z),r.createElement("div",{className:(0,i.css)(n.default.formGroupLabelInfo)},u)),!u&&Z),r.createElement("div",{className:(0,i.css)(n.default.formGroupControl,p&&n.default.modifiers.inline,g&&n.default.modifiers.stack)},t))))};c.displayName="FormGroup"},45469:(e,t,a)=>{"use strict";a.d(t,{Kx:()=>p,f:()=>s,lW:()=>r});var s,r,n=a(65353),o=a(28416),i=a(12455),l=a(38296),c=a(80164),u=a(1774),m=a(49644);!function(e){e.horizontal="horizontal",e.vertical="vertical",e.both="both"}(s||(s={})),function(e){e.default="default",e.plain="plain"}(r||(r={}));class d extends o.Component{constructor(e){super(e),this.inputRef=o.createRef(),this.setAutoHeight=e=>{const t=e.parentElement;t.style.setProperty("height","inherit");const a=window.getComputedStyle(e),s=parseInt(a.getPropertyValue("border-top-width"))+parseInt(a.getPropertyValue("padding-top"))+e.scrollHeight+parseInt(a.getPropertyValue("padding-bottom"))+parseInt(a.getPropertyValue("border-bottom-width"));t.style.setProperty("height",`${s}px`)},this.handleChange=e=>{const t=e.currentTarget;this.props.autoResize&&c.Nq&&this.setAutoHeight(t),this.props.onChange&&this.props.onChange(e,t.value)},e.id||e["aria-label"]||console.error("TextArea: TextArea requires either an id or aria-label to be specified")}componentDidMount(){const e=this.props.innerRef||this.inputRef;if(this.props.autoResize&&c.Nq){const t=e.current;this.setAutoHeight(t)}}render(){const e=this.props,{className:t,value:a,validated:s,isRequired:r,isDisabled:d,readOnlyVariant:p,resizeOrientation:f,innerRef:g,disabled:h,autoResize:E,onChange:v,onBlur:b,onFocus:y}=e,Z=(0,n.__rest)(e,["className","value","validated","isRequired","isDisabled","readOnlyVariant","resizeOrientation","innerRef","disabled","autoResize","onChange","onBlur","onFocus"]),S=`resize${(0,c.kC)(f)}`,x=["success","error","warning"].includes(s);return o.createElement("span",{className:(0,l.css)(i.Z.formControl,p&&i.Z.modifiers.readonly,"plain"===p&&i.Z.modifiers.plain,f&&i.Z.modifiers[S],d&&i.Z.modifiers.disabled,x&&i.Z.modifiers[s],t)},o.createElement("textarea",Object.assign({onChange:this.handleChange,onFocus:y,onBlur:b},"string"!=typeof this.props.defaultValue&&{value:a},{"aria-invalid":s===u.LD.error,required:r,disabled:d||h,readOnly:!!p,ref:g||this.inputRef},Z)),x&&o.createElement("span",{className:(0,l.css)(i.Z.formControlUtilities)},o.createElement(m.J,{status:s})))}}d.displayName="TextArea",d.defaultProps={innerRef:o.createRef(),className:"",isRequired:!1,isDisabled:!1,validated:"default",resizeOrientation:"both","aria-label":null};const p=o.forwardRef(((e,t)=>o.createElement(d,Object.assign({},e,{innerRef:t}))));p.displayName="TextArea"},46818:(e,t,a)=>{"use strict";a.d(t,{P8:()=>r});var s=a(78632);const r=()=>({className:s.Z.modifiers.nowrap})},23340:(e,t,a)=>{"use strict";a.d(t,{MS:()=>n,aX:()=>s,qF:()=>r});const s=(e,t,a,s={})=>{const r=new URLSearchParams(e.search);let n=a.reduce(((e,t)=>{const a=r.getAll(t);return{...e,[t]:a.length>1?a:a[0]}}),{});return Object.keys(s).forEach((e=>{const t=s[e];n={...n,[e]:Array.isArray(n[e])?[...new Set([...n[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||n[e]},Array.isArray(t)?t.forEach((t=>r.getAll(e).includes(t)||r.append(e,t))):r.get(e)||t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0}),n},r=(e,t)=>{const a=new URLSearchParams(e.search);return t.some((e=>a.get(e)))},n=(e,t,a)=>{const s=new URLSearchParams(e.search);Object.keys(a).forEach((e=>s.delete(e))),Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)?t.forEach((t=>t&&s.append(e,t))):t&&s.set(e,t)})),t({pathname:e.pathname,search:s.toString()},{replace:!0})}},84414:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(62012),r=a(64756);const n=e=>{const t=(0,s.useNavigate)();return(a,s)=>t((0,r.n)(a,e),s)}},12:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var s=a(28416),r=a.n(s),n=a(25387),o=a(45697),i=a.n(o),l=a(64380),c=a(44282),u=a.n(c),m=a(86601),d=a(2550),p=a(55140);const f=({linkDescription:e,linkTitle:t})=>{const a=(0,n.YB)(),o=(0,p.Z)(),i=o.getEnvironment(),c=o.isProd()?"":`${i}.`,{orgAdmin:f}=(0,s.useContext)(m.Z);return f?r().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(d.Z.usersDescription)} `,e,r().createElement(l.Text,{component:l.TextVariants.a,href:`https://www.${c}redhat.com/wapps/ugc/protected/usermgt/userList.html`,target:"_blank",rel:"noopener noreferrer"},t,r().createElement(u(),null)),"."):r().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(d.Z.usersDescription)} `)};f.propTypes={linkDescription:i().node,linkTitle:i().node},f.defaultProps={linkDescription:"",linkTitle:" user management list "};const g=f},24869:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var s=a(28416),r=a.n(s),n=a(55573),o=a(45697),i=a.n(o),l=a(94184),c=a.n(l);const u=({row:e,...t})=>{const{status:a}=e,s=a?.props?.["data-is-active"];return r().createElement(n.e,{className:c()("rbac__user-row",{"ins-m-inactive":!s}),row:e,...t})};u.propTypes={row:i().shape({status:i().shape({props:i().shape({"data-is-active":i().bool,data:i().shape({isActive:i().bool})})})})};const m=u},87767:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var s=a(31055),r=a(28416),n=a.n(r),o=a(45697),i=a.n(o),l=(a(27361),a(48880));i().oneOfType([i().string,i().func,i().object]),i().func.isRequired,i().node.isRequired,i().bool,i().func.isRequired,i().node.isRequired,i().func.isRequired;const c=({renderNextButton:e,disableBack:t,handlePrev:a,buttonLabels:{cancel:o,back:i},context:c})=>{const u=(0,l.default)(),{success:m,error:d,submitting:p}=(0,r.useContext)(c);return m||void 0===d||d||p?null:n().createElement(r.Fragment,null,e(),n().createElement(s.Button,{type:"button",variant:"secondary",isDisabled:t,onClick:a},i),n().createElement(s.Button,{type:"button",variant:"link",onClick:u.onCancel},o))};c.propTypes={disableBack:i().bool,handlePrev:i().func.isRequired,handleNext:i().func.isRequired,nextStep:i().oneOfType([i().string,i().shape({when:i().string.isRequired,stepMapper:i().object.isRequired}),i().func]),buttonLabels:i().shape({submit:i().node.isRequired,cancel:i().node.isRequired,back:i().node.isRequired,next:i().node.isRequired}).isRequired,context:i().object.isRequired,renderNextButton:i().func};const u=c},56640:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var s=a(28416),r=a.n(s),n=a(31055),o=a(70363),i=a(25387),l=a(45697),c=a.n(l),u=a(2550),m=a(68568);const d=({context:e,title:t,text:a,customFooter:l})=>{const c=(0,i.YB)(),{jumpToStep:d}=(0,s.useContext)(o.default),{setWizardError:p}=(0,s.useContext)(e);return r().createElement(m.Te,{errorTitle:t,errorDescription:a,customFooter:l||r().createElement(n.Button,{onClick:()=>{p(void 0),d(0)},variant:n.ButtonVariant.primary},c.formatMessage(u.Z.returnToStepNumber,{number:1}))})};d.propTypes={context:c().object.isRequired,title:c().string.isRequired,text:c().string.isRequired,customFooter:c().element};const p=d},110:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AddGroupWizardContext:()=>de,default:()=>ve,mapperExtension:()=>ge,onCancel:()=>he});var s=a(28416),r=a.n(s),n=a(45697),o=a.n(n),i=a(86706),l=a(25387),c=a(9820),u=a(71355),m=a(51912),d=a(67850),p=a(8340),f=a(55218),g=a(64124),h=a(96354),E=a(48880),v=a(74503),b=a(31055),y=a(95376),Z=a(18962),S=a(15950),x=a(72232),k=a(41944),M=a.n(k),T=a(95359),R=a(84414),C=a(56640),I=a(14289),N=a(2550);const w=({formFields:e})=>{const t=(0,l.YB)(),a=(0,R.Z)(),{submittingGroup:n,submittingServiceAccounts:o,error:i,setWizardError:c}=(0,s.useContext)(de),{getState:u}=(0,E.default)();if((0,s.useEffect)((()=>{c(void 0),(0,T.B)(u().values["group-name"]).then((()=>c(!1))).catch((()=>c(!0)))}),[]),void 0===i||n&&!o)return r().createElement(v.Bullseye,null,r().createElement(S.Spinner,{className:"pf-v5-u-mt-xl",size:"xl"}));if(o&&!i){const e=n?1:o?2:3;return r().createElement(y.EmptyState,{variant:y.EmptyStateVariant.lg,"data-component-ouia-id":"wizard-progress",className:"rbac-add-group-progress"},r().createElement(y.EmptyStateHeader,{titleText:t.formatMessage(N.Z.groupBeingCreated),icon:r().createElement(y.EmptyStateIcon,{className:"pf-v5-u-mt-xl",icon:M()}),headingLevel:"h4"}),r().createElement(Z.Progress,{className:"pf-v5-u-mt-lg",style:{textAlign:"left"},min:0,max:3,value:e,label:(n?1:2)+" of 2",title:t.formatMessage(n?N.Z.creatingGroup:N.Z.associatingServiceAccounts)}))}return i?r().createElement(C.Z,{context:de,title:n?t.formatMessage(N.Z.groupNameTakenTitle):t.formatMessage(N.Z.addGroupServiceAccountsErrorTitle,{count:u().values["service-accounts-list"].length}),text:n?t.formatMessage(N.Z.groupNameTakenText):t.formatMessage(N.Z.addNewGroupServiceAccountsErrorDescription,{count:u().values["service-accounts-list"].length}),customFooter:n?void 0:r().createElement(b.Button,{variant:b.ButtonVariant.primary,onClick:()=>a(I.Z.groups.link)},t.formatMessage(N.Z.close))}):r().createElement(r().Fragment,null,r().createElement(x.Title,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-lg"},t.formatMessage(N.Z.reviewDetails)),[[{...e?.[0]?.[0]}]])};w.propTypes={formFields:o().array};const B=w;var F=a(87767),A=a(60167),G=a(2034),L=a(77044),q=a(29301),P=a(16987),D=a(56591),j=a(23539),O=a(81169),V=a(92607),_=a(45469),z=a(59775);const U=e=>{const t=(0,l.YB)(),{input:a}=(0,O.Z)(e),n=(0,E.default)(),{"group-name":o,"group-description":i}=n.getState().values,[c,u]=(0,s.useState)(o||""),[m,d]=(0,s.useState)(),[p,f]=(0,s.useState)(i),g=e=>{const t=(0,q.vE)(e);a.onChange(void 0),(0,T.L)(t).then((()=>{a.onChange(t),d(void 0)})).catch((e=>{d(e),a.onChange(void 0)})),u(e)};(0,s.useEffect)((()=>{c?.length>0&&g(c)}),[]);const h=((e,t)=>void 0===e||t||e?.length>150?"error":"default")(c,m),v=(e=>e?.length>150?"error":"default")(p);return r().createElement(j.Stack,{hasGutter:!0},r().createElement(j.StackItem,{className:"rbac-l-stack__item-summary"},r().createElement(z.c,{label:t.formatMessage(N.Z.groupName),isRequired:!0},r().createElement(V.oi,{value:c,type:"text",validated:h,onBlur:()=>""===c&&u(void 0),onChange:(e,t)=>g(t),"aria-label":"Group name"}),"error"===h&&r().createElement(P.FormHelperText,null,r().createElement(D.HelperText,null,r().createElement(D.HelperTextItem,{variant:h},c?m:t.formatMessage(N.Z.required)))))),r().createElement(j.StackItem,null,r().createElement(z.c,{label:t.formatMessage(N.Z.groupDescription)},r().createElement(_.Kx,{value:p,validated:v,onChange:(e,t)=>{f(t),n.change("group-description",t)},"aria-label":"Group description",resizeOrientation:"vertical"}),"error"===v&&r().createElement(P.FormHelperText,null,r().createElement(D.HelperText,{variant:v},r().createElement(D.HelperTextItem,null,t.formatMessage(N.Z.maxCharactersWarning,{number:150})))))))};U.propTypes={name:o().string,description:o().string,groups:o().array};const H=U;var $=a(64380),Y=a(87285);const W=e=>{const t=(0,l.YB)(),[a,n]=(0,s.useState)([]),{input:o}=(0,O.Z)(e),i=(0,E.default)();return(0,s.useEffect)((()=>{n(i.getState().values["roles-list"]||[])}),[]),(0,s.useEffect)((()=>{o.onChange(a),i.change("roles-list",a)}),[a]),r().createElement(s.Fragment,null,r().createElement(j.Stack,{hasGutter:!0},r().createElement(j.StackItem,null,r().createElement($.TextContent,null,r().createElement($.Text,null,t.formatMessage(N.Z.selectRolesForGroupText)))),r().createElement(j.StackItem,null,r().createElement(P.FormGroup,{fieldId:"select-role"},r().createElement(Y.Z,{selectedRoles:a,setSelectedRoles:n,rolesExcluded:!1})))))};W.propTypes={selectedRoles:o().array,setSelectedRoles:o().func,title:o().string,description:o().string};const X=W;var K=a(10113),J=a(12);const Q=e=>{const[t,a]=(0,s.useState)([]),{input:n}=(0,O.Z)(e),o=(0,l.YB)(),i=(0,E.default)();return(0,s.useEffect)((()=>{a(i.getState().values["users-list"]||[])}),[]),(0,s.useEffect)((()=>{n.onChange(t),i.change("users-list",t)}),[t]),r().createElement(s.Fragment,null,r().createElement(P.Form,null,r().createElement(j.Stack,{hasGutter:!0},r().createElement(j.StackItem,null,r().createElement($.TextContent,null,r().createElement(J.Z,{linkDescription:o.formatMessage(N.Z.toManageUsersText)}))),r().createElement(j.StackItem,null,r().createElement(P.FormGroup,{fieldId:"select-user"},r().createElement(K.Z,{selectedUsers:t,setSelectedUsers:a,displayNarrow:!0}))))))};Q.propTypes={selectedUsers:o().array,setSelectedUsers:o().func,title:o().string,description:o().string};const ee=Q;var te=a(5904),ae=a(64756),se=a(83536);var re=a(9545),ne=a(55140),oe=a(65220);const ie=()=>{const e=(0,l.YB)(),t=(0,E.default)(),{isBeta:a}=(0,ne.Z)(),{"group-name":s,"group-description":n,"users-list":o,"roles-list":i,"service-accounts-list":c}=t.getState().values,u=a()&&(0,oe.useFlag)("platform.rbac.group-service-accounts")||!a()&&(0,oe.useFlag)("platform.rbac.group-service-accounts.stable");return r().createElement("div",{className:"rbac"},r().createElement(j.Stack,{hasGutter:!0},r().createElement(j.StackItem,null,r().createElement(j.Stack,{hasGutter:!0},r().createElement(j.StackItem,{className:"rbac-l-stack__item-summary"},r().createElement(re.Grid,null,r().createElement(re.GridItem,{md:3},r().createElement($.Text,{component:$.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(N.Z.groupName))),r().createElement(re.GridItem,{md:9},r().createElement($.Text,{component:$.TextVariants.p},s))),r().createElement(re.Grid,null,r().createElement(re.GridItem,{md:3},r().createElement($.Text,{component:$.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(N.Z.groupDescription))),r().createElement(re.GridItem,{md:9},r().createElement($.Text,{component:$.TextVariants.p},n))),r().createElement(re.Grid,null,r().createElement(re.GridItem,{md:3},r().createElement($.Text,{component:$.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(N.Z.roles))),r().createElement(re.GridItem,{md:9},i.map(((e,t)=>r().createElement($.Text,{className:"pf-v5-u-mb-0",key:t},e.label))))),r().createElement(re.Grid,null,r().createElement(re.GridItem,{md:3},r().createElement($.Text,{component:$.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(N.Z.members))),r().createElement(re.GridItem,{md:9},o.map(((e,t)=>r().createElement($.Text,{className:"pf-v5-u-mb-0",key:t},e.label))))),r().createElement(re.Grid,null,r().createElement(re.GridItem,{md:3},r().createElement($.Text,{component:$.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(N.Z.serviceAccounts))),u&&r().createElement(re.GridItem,{md:9},c?.map(((e,t)=>r().createElement($.Text,{className:"pf-v5-u-mb-0",key:t},e.name))))))))))};ie.propTypes={name:o().string,description:o().string,groups:o().array};const le=ie;var ce=a(71214),ue=a.n(ce);const me=({onClose:e})=>{const t=(0,l.YB)(),{setHideForm:a,setWizardSuccess:n}=(0,s.useContext)(de);return r().createElement(y.EmptyState,{variant:y.EmptyStateVariant.lg},r().createElement(y.EmptyStateHeader,{titleText:r().createElement(r().Fragment,null,t.formatMessage(N.Z.groupCreatedSuccessfully)),icon:r().createElement(y.EmptyStateIcon,{className:"pf-v5-u-mt-xl",color:"green",icon:ue()}),headingLevel:"h4"}),r().createElement(y.EmptyStateFooter,null,r().createElement(b.Button,{onClick:e,variant:"primary"},t.formatMessage(N.Z.exit)),r().createElement(y.EmptyStateActions,null,r().createElement(b.Button,{onClick:()=>{a(!1),n(!1)},variant:"link"},t.formatMessage(N.Z.createAnotherGroup)))))},de=(0,s.createContext)({success:!1,submitting:!1,error:void 0,setHideForm:e=>null,setWizardSuccess:e=>null}),pe=e=>r().createElement(d.ZP,{...e,showFormControls:!1}),fe=({Content:e,...t})=>r().createElement(e,{...t});fe.propTypes={Content:o().elementType.isRequired};const ge={description:fe,"set-name":H,"set-roles":X,"set-users":ee,"set-service-accounts":({name:e})=>{const[t,a]=(0,s.useState)([]),{input:n}=(0,O.Z)({name:e}),o=(0,l.YB)(),i=(0,E.default)();return(0,s.useEffect)((()=>{a(i.getState().values["service-accounts-list"]||[])}),[]),(0,s.useEffect)((()=>{n.onChange(t),i.change("service-accounts-list",t)}),[t]),r().createElement(s.Fragment,null,r().createElement(P.Form,null,r().createElement(j.Stack,{hasGutter:!0},r().createElement(j.StackItem,null,r().createElement($.TextContent,null,o.formatMessage(N.Z.addServiceAccountsToGroupDescription),r().createElement(te.Alert,{className:"pf-v5-u-mt-sm rbac-service-accounts-alert",variant:"info",component:"span",isInline:!0,isPlain:!0,title:o.formatMessage(N.Z.visitServiceAccountsPage,{link:r().createElement(ae.Z,{to:"/service-accounts",linkBasename:"/iam"},o.formatMessage(N.Z.serviceAccountsPage))})}))),r().createElement(j.StackItem,null,r().createElement(P.FormGroup,{fieldId:"select-service-accounts"},r().createElement(se.Z,{selected:t,setSelected:a}))))))},"summary-content":le},he=(e,t,a)=>s=>{a(s),Object.keys(s).length>0?t(!0):e()},Ee=({postMethod:e,pagination:t,filters:a,orderBy:n})=>{const o=(0,i.useDispatch)(),d=(0,l.YB)(),E=(0,s.useRef)(document.createElement("div")),{isBeta:v}=(0,ne.Z)(),b=v()&&(0,oe.useFlag)("platform.rbac.group-service-accounts")||!v()&&(0,oe.useFlag)("platform.rbac.group-service-accounts.stable"),y=(0,s.useRef)(((e,t)=>{const a=(0,l.Sn)(),s=(0,l.dp)({locale:A.S,messages:G},a);return{fields:[{component:"wizard",name:"wizard",className:"rbac",isDynamic:!0,inModal:!0,showTitles:!0,title:s.formatMessage(N.Z.createGroup),container:e,fields:[{name:"name-and-description",nextStep:"add-roles",title:s.formatMessage(N.Z.nameAndDescription),fields:[{component:"set-name",name:"group-name",validate:[{type:g.Z.REQUIRED}]},{component:h.Z.TEXTAREA,name:"group-description",hideField:!0,validate:[{type:g.Z.MAX_LENGTH,threshold:150}]}]},{name:"add-roles",nextStep:"add-users",title:s.formatMessage(N.Z.addRoles),fields:[{component:"set-roles",name:"roles-list"}]},{name:"add-users",nextStep:t?"add-service-accounts":"review",title:s.formatMessage(N.Z.addMembers),fields:[{component:"set-users",name:"users-list"}]},...t?[{name:"add-service-accounts",nextStep:"review",title:s.formatMessage(N.Z.addServiceAccounts),fields:[{component:"set-service-accounts",name:"service-accounts-list"}]}]:[],{name:"review",title:s.formatMessage(N.Z.reviewDetails),buttons:e=>r().createElement(F.Z,{...e,context:de}),StepTemplate:B,fields:[{component:"summary-content",name:"summary-content"}]}]}]}})(E.current,b)),Z=(0,R.Z)(),[S,x]=(0,s.useState)({}),[k,M]=(0,s.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),T=()=>{o((0,u.addNotification)({variant:"warning",title:d.formatMessage(N.Z.addingGroupTitle),dismissDelay:8e3,description:d.formatMessage(N.Z.addingGroupCanceledDescription)})),Z({pathname:I.Z.groups.link,search:(0,q.GT)({page:1,per_page:t.limit,...a})})},C=e=>M((t=>({...t,error:e}))),w=e=>M((t=>({...t,canceled:e}))),P=()=>{M((e=>({...e,success:!1,hideForm:!1}))),e({limit:t.limit,offset:0,orderBy:n,filters:{}}),Z({pathname:I.Z.groups.link,search:(0,q.GT)({page:1,per_page:t.limit})})};return r().createElement(de.Provider,{value:{...k,setWizardError:C,setWizardSuccess:e=>M((t=>({...t,success:e}))),setHideForm:e=>M((t=>({...t,hideForm:e})))}},r().createElement(f.Z,{title:d.formatMessage(N.Z.exitItemCreation,{item:d.formatMessage(N.Z.group).toLocaleLowerCase()}),isOpen:k.canceled,onClose:()=>{E.current.hidden=!1,w(!1)},confirmButtonLabel:d.formatMessage(N.Z.discard),onConfirm:T},d.formatMessage(N.Z.discardedInputsWarning)),k.hideForm?k.success?r().createElement(c.e,{isOpen:!0,title:d.formatMessage(N.Z.createGroup),onClose:P,steps:[{name:"success",component:r().createElement(me,{onClose:P}),isFinishedStep:!0}]}):null:r().createElement(m.Z,{schema:y.current,container:E,subscription:{values:!0},FormTemplate:pe,componentMapper:{...p.ZP,...ge},onSubmit:e=>{const t=e["service-accounts-list"]?.length>0;M((e=>({...e,submitting:!0,submittingGroup:!0,submittingServiceAccounts:t})));const a={name:e["group-name"],description:e["group-description"],user_list:e["users-list"].map((e=>({username:e.label}))),roles_list:e["roles-list"].map((e=>e.uuid))};o((0,L.Rp)(a)).then((({value:a})=>{M((e=>({...e,submittingGroup:!1,success:!t,hideForm:!t,submitting:t}))),t&&o((0,L.w_)(a.uuid,e["service-accounts-list"])).then((()=>{M((e=>({...e,submitting:!1,submittingServiceAccounts:!1,success:!0,hideForm:!0})))})).catch((()=>C(!0)))}))},initialValues:S,onCancel:he(T,(()=>{E.current.hidden=!0,w(!0)}),x)}))};Ee.propTypes={postMethod:o().func,pagination:o().shape({limit:o().number.isRequired}).isRequired,filters:o().object.isRequired,orderBy:o().string};const ve=Ee},87285:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var s=a(28416),r=a.n(s),n=a(45697),o=a.n(n),i=a(25387),l=a(86706),c=a(7732),u=a(55140),m=a(74982),d=a(29301),p=a(97246),f=a(13563),g=a(77044),h=a(2550);const E=({selectedRoles:e,setSelectedRoles:t,rolesExcluded:a,groupId:n})=>{const o=(0,i.YB)(),E=(0,u.Z)(),v=(0,l.useDispatch)(),b=(0,s.useRef)(null),{roles:y,pagination:Z,isLoading:S,groupId:x,filters:k}=(0,l.useSelector)(a?({groupReducer:{selectedGroup:{addRoles:{roles:e,pagination:t,loaded:a},uuid:s}}})=>({roles:e,pagination:t||{...m.eX,count:e?.length},isLoading:!a,groupId:n||s}):({roleReducer:{roles:e,isLoading:t}})=>({roles:e.data,pagination:e.meta,isLoading:t,filters:e.filters}),l.shallowEqual),{current:M}=(0,s.useRef)([{title:o.formatMessage(h.Z.name),key:"display_name",...a?{orderBy:"name"}:{transforms:[c.p]}},{title:o.formatMessage(h.Z.description)}]),[T,R]=(0,s.useState)(""),[C,I]=(0,s.useState)({index:1,direction:"asc"}),N=(0,s.useCallback)(((e,t)=>v(a?(0,g.nr)(e,t):(0,f.Kt)((0,d.jl)({...t,chrome:E})))),[a]),w=`${"desc"===C?.direction?"-":""}${M[C?.index].key}`,B=((e,t=[])=>e?e.reduce(((e,{uuid:a,display_name:s,name:r,description:n})=>[...e,{uuid:a,cells:[s||r,n],selected:Boolean(t&&t.find((e=>e.uuid===a)))}]),[]):[])(y,e);return(0,s.useEffect)((()=>{N(x,{...Z,orderBy:w})}),[]),r().createElement(p.M,{isSelectable:!0,isCompact:!0,borders:!1,columns:M,rows:B,sortBy:C,onSort:(e,t,a,s)=>{const r=`${"desc"===a?"-":""}${M[s?t-1:t].key}`;I({index:t,direction:a}),((e,t)=>{const{name:a,count:s,limit:r,offset:n,orderBy:o}=t;N(e,(0,d.jl)({count:s,limit:r,offset:n,orderBy:o,filters:{display_name:a}}))})(x,{...Z,offset:0,orderBy:r,...k?.length>0?{...k.reduce(((e,t)=>({...e,[t.key]:t.value})),{})}:{name:T}})},data:y,filterValue:T,filterPlaceholder:o.formatMessage(h.Z.roleName).toLowerCase(),fetchData:e=>N(x,{...e,filters:{display_name:e.name}}),setFilterValue:({name:e})=>R(e),isLoading:S,ouiaId:"roles-table",pagination:Z,checkedRows:e,setCheckedItems:e=>{t((t=>e(t).map((({uuid:e,name:t,label:a})=>({uuid:e,label:a||t})))))},titlePlural:o.formatMessage(h.Z.roles).toLowerCase(),titleSingular:o.formatMessage(h.Z.role),tableId:"roles-list",textFilterRef:b})};E.propTypes={canSort:o().bool,setSelectedRoles:o().func.isRequired,selectedRoles:o().array,rolesExcluded:o().bool.isRequired,groupId:o().string},E.defaultProps={roles:[],pagination:m.eX,canSort:!0};const v=E},83536:(e,t,a)=>{"use strict";a.d(t,{K:()=>g,Z:()=>h});var s=a(28416),r=a.n(s),n=a(40575),o=a(25387),i=a(29301),l=a(55140),c=a(62410),u=a(86706),m=a(97246),d=a(71079),p=a(2550);const f=({serviceAccountReducer:e})=>({serviceAccounts:e.serviceAccounts,status:e.status,isLoading:e.isLoading,limit:e.limit,offset:e.offset}),g=({selected:e,setSelected:t,groupId:a})=>{const{auth:g,getEnvironmentDetails:h}=(0,l.Z)(),{serviceAccounts:E,status:v,limit:b,offset:y,isLoading:Z}=(0,u.useSelector)(f),S=(0,u.useDispatch)(),x=(0,o.YB)(),k=(0,s.useCallback)((async e=>{const t=h(),s=await g.getToken();var r;S((r={limit:e?.limit??b,offset:e?.offset??y,token:s,sso:t?.sso,groupId:a},{type:d.t5,payload:n.Sx(r),meta:r}))}),[b,y]);(0,s.useEffect)((()=>{k({limit:b,offset:0})}),[]);const M=[{title:x.formatMessage(p.Z.name),orderBy:"name"},{title:x.formatMessage(p.Z.description),orderBy:"description"},{title:x.formatMessage(p.Z.clientId),orderBy:"clientId"},{title:x.formatMessage(p.Z.owner),orderBy:"owner"},{title:x.formatMessage(p.Z.timeCreated),orderBy:"timeCreated"}];return r().createElement(m.M,{className:"rbac-service-accounts-list",columns:M,isSelectable:!0,rows:(T=E,R=e,T?.reduce(((e,t)=>[...e,{uuid:t.uuid,title:t.name,cells:[t.name,t.description,t.clientID,t.createdBy,r().createElement(s.Fragment,{key:`${t.name}-modified`},r().createElement(c.Z,{date:t.createdAt,type:(0,i.mh)(t.createdAt)}))],selected:Boolean(R&&R.find((e=>e.uuid===t.uuid)))||t.assignedToSelectedGroup,disableSelection:t.assignedToSelectedGroup}]),[])),data:E,fetchData:k,isLoading:Z,pagination:{limit:b,offset:y,...v===n.Xu?{count:y+E.length}:{}},paginationProps:{toggleTemplate:({firstIndex:e,lastIndex:t})=>r().createElement(r().Fragment,null,r().createElement("b",null,e," - ",t)," ","of ",r().createElement("b",null,v===n.Xu?y+E.length:"many")),isCompact:!0},checkedRows:e,setCheckedItems:t,titlePlural:x.formatMessage(p.Z.serviceAccounts).toLowerCase(),titleSingular:x.formatMessage(p.Z.serviceAccount),emptyProps:{title:x.formatMessage(p.Z.noServiceAccountsFound),description:[x.formatMessage(p.Z.contactServiceTeamForAccounts),""]},tableId:"group-add-accounts",ouiaId:"group-add-accounts"});var T,R},h=g},10113:(e,t,a)=>{"use strict";a.d(t,{Z:()=>S});var s=a(28416),r=a.n(s),n=a(86706),o=a(45697),i=a.n(o),l=a(62012),c=a(25387),u=a(46818),m=a(7732),d=a(29301),p=a(2981),f=a(97246),g=a(24869),h=a(86601),E=a(74982),v=a(23340),b=a(2550),y=a(39820);const Z=({selectedUsers:e,setSelectedUsers:t,userLinks:a,usesMetaInURL:o,displayNarrow:i,props:Z})=>{const S=(0,c.YB)(),x=(0,l.useNavigate)(),k=(0,l.useLocation)(),M=(0,n.useDispatch)(),{orgAdmin:T}=(0,s.useContext)(h.Z),R=(0,s.useRef)(null);let C=(0,n.useSelector)((({userReducer:{users:e}})=>({limit:(o?e.pagination.limit:e.meta.limit)??(T?E.HE:E.he).limit,offset:(o?e.pagination.offset:e.meta.offset)??(T?E.HE:E.he).offset,count:o?e.pagination.count:e.meta.count,redirected:o&&e.pagination.redirected})));const{users:I,isLoading:N,stateFilters:w}=(0,n.useSelector)((({userReducer:{users:{data:e,filters:t={}},isUserDataLoading:a}})=>({users:e?.map?.((e=>({...e,uuid:e.username}))),isLoading:a,stateFilters:k.search.length>0||Object.keys(t).length>0?t:{status:["Active"]}}))),B=(0,s.useCallback)((e=>M((0,p.u)(e))),[M]),F=(0,s.useCallback)((e=>M((0,p.a)(e))),[M]),A=[{title:S.formatMessage(i?b.Z.orgAdmin:b.Z.orgAdministrator),key:"org-admin",transforms:[u.P8]},{title:S.formatMessage(b.Z.username),key:"username",transforms:[m.p]},{title:S.formatMessage(b.Z.email)},{title:S.formatMessage(b.Z.firstName),transforms:[u.P8]},{title:S.formatMessage(b.Z.lastName),transforms:[u.P8]},{title:S.formatMessage(b.Z.status),transforms:[u.P8]}],[G,L]=(0,s.useState)({index:1,direction:"asc"}),[q,P]=(0,s.useState)(o?w:{username:"",email:"",status:[S.formatMessage(b.Z.active)]});return(0,s.useEffect)((()=>{o&&(0,E.oG)(k,x,C.limit,C.offset)}),[C.offset,C.limit,C.count,C.redirected]),(0,s.useEffect)((()=>{const{limit:e,offset:t}=(0,E.rj)(k,x,C),a=o?(0,v.aX)(k,x,["username","email","status"],q):{status:q.status};P(a),B({...(0,d.jl)({limit:e,offset:t,filters:a}),usesMetaInURL:o})}),[]),(0,s.useEffect)((()=>{o&&((0,E.Zc)(k)||(0,E.oG)(k,x,C.limit,C.offset),Object.values(q).some((e=>e?.length>0))&&!(0,v.qF)(k,Object.keys(q))&&(0,v.aX)(k,x,Object.keys(q),q))})),r().createElement(f.M,{isCompact:!0,isSelectable:!0,borders:!1,columns:A,rows:(0,y.H)(a,I,S,e,!0),sortBy:G,onSort:(e,t,a)=>{const s=`${"desc"===a?"-":""}${A[t-1].key}`;L({index:t,direction:a}),B({...C,filters:q,usesMetaInURL:o,orderBy:s})},data:I,ouiaId:"users-table",fetchData:e=>{const t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:q.status,{username:a,email:s,count:r,limit:n,offset:i,orderBy:l}=e;B({...(0,d.jl)({count:r,limit:n,offset:i,orderBy:l,filters:{username:a,email:s,status:t}}),usesMetaInURL:o}).then((()=>{R?.current?.focus()})),o&&(0,v.MS)(k,x,{username:a,email:s,status:t})},emptyFilters:{username:"",email:"",status:""},setFilterValue:({username:e,email:t,status:a})=>{var s;s={username:void 0===e?q.username:e,email:void 0===t?q.email:t,status:void 0===a||a===q.status?q.status:a},o&&F(s),P({username:"",...s})},isLoading:N,pagination:C,checkedRows:e,setCheckedItems:e=>{t((t=>e(t).map((({uuid:e,username:t})=>({uuid:e,label:t||e})))))},rowWrapper:g.Z,titlePlural:S.formatMessage(b.Z.users).toLowerCase(),titleSingular:S.formatMessage(b.Z.user),filters:[{key:"username",value:q.username,placeholder:S.formatMessage(b.Z.filterByKey,{key:S.formatMessage(b.Z.username).toLowerCase()}),innerRef:R},{key:"email",value:q.email,placeholder:S.formatMessage(b.Z.filterByKey,{key:S.formatMessage(b.Z.email).toLowerCase()}),innerRef:R},{key:"status",value:q.status,label:S.formatMessage(b.Z.status),type:"checkbox",items:[{label:S.formatMessage(b.Z.active),value:"Active"},{label:S.formatMessage(b.Z.inactive),value:"Inactive"}]}],tableId:"users-list",...Z})};Z.propTypes={displayNarrow:i().bool,users:i().array,searchFilter:i().string,setSelectedUsers:i().func.isRequired,selectedUsers:i().array,userLinks:i().bool,props:i().object,usesMetaInURL:i().bool},Z.defaultProps={displayNarrow:!1,users:[],selectedUsers:[],setSelectedUsers:()=>{},userLinks:!1,usesMetaInURL:!1};const S=Z},95359:(e,t,a)=>{"use strict";a.d(t,{B:()=>c,L:()=>u});var s=a(94504),r=a(47625),n=a(60167),o=a(25387),i=a(2550),l=a(2034);const c=async(e,t,a)=>{const r=(0,o.Sn)(),c=(0,o.dp)({locale:n.S,messages:l},r);if(!e)return;if(e.length>150)throw c.formatMessage(i.Z.maxCharactersWarning,{number:150});const u=await(0,s.bt)({limit:10,offset:0,filters:{name:e},nameMatch:"exact"}).catch((e=>{console.error(e)}));if(a?u?.data?.some((e=>e[t]!==a)):u?.data?.length>0)throw c.formatMessage(i.Z.nameAlreadyTaken)},u=(0,r.Z)(((e,t,a)=>c(e,t,a)))},39820:(e,t,a)=>{"use strict";a.d(t,{H:()=>p});var s=a(28416),r=a.n(s),n=a(78173),o=a(91693),i=a.n(o),l=a(77029),c=a.n(l),u=a(2550),m=a(14289),d=a(64756);const p=(e,t=[],a,o=[],l=!1)=>t?.reduce(((t,{username:p,is_active:f,email:g,first_name:h,last_name:E,is_org_admin:v})=>[...t,{uuid:p,cells:[v?r().createElement(s.Fragment,null,r().createElement(i(),{key:"yes-icon",className:"pf-v5-u-mr-sm"}),r().createElement("span",{key:"yes"},a.formatMessage(u.Z.yes))):r().createElement(s.Fragment,null,r().createElement(c(),{key:"no-icon",className:"pf-v5-u-mr-sm"}),r().createElement("span",{key:"no"},a.formatMessage(u.Z.no))),{title:e?r().createElement(d.Z,{to:m.Z["user-detail"].link.replace(":username",p)},p.toString()):p.toString()},g,h,E,{title:r().createElement(n.Label,{key:"status",color:f?"green":"grey"},a.formatMessage(f?u.Z.active:u.Z.inactive)),props:{"data-is-active":f}}],selected:!!l&&Boolean(o?.find?.((({uuid:e})=>e===p)))}]),[])},47625:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s=a(99166);const r=(e,t=250,a={onlyResolvesLast:!1})=>(0,s.Z)(e,t,a)},82472:()=>{},97890:()=>{},17657:()=>{},22972:()=>{},43389:()=>{},70347:()=>{},80897:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},40209:()=>{}}]);
//# sourceMappingURL=../sourcemaps/673.8b7f809a5bb5900a570969de3404e681.js.map
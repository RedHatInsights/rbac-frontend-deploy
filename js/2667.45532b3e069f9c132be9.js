"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2667,459],{87767:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(31055),n=a(28416),s=a.n(n),o=a(45697),i=a.n(o),l=(a(27361),a(48880));i().oneOfType([i().string,i().func,i().object]),i().func.isRequired,i().node.isRequired,i().bool,i().func.isRequired,i().node.isRequired,i().func.isRequired;const c=({renderNextButton:e,disableBack:t,handlePrev:a,buttonLabels:{cancel:o,back:i},context:c})=>{const m=(0,l.default)(),{success:d,error:p,submitting:u}=(0,n.useContext)(c);return d||void 0===p||p||u?null:s().createElement(n.Fragment,null,e(),s().createElement(r.Button,{type:"button",variant:"secondary",isDisabled:t,onClick:a},i),s().createElement(r.Button,{type:"button",variant:"link",onClick:m.onCancel},o))};c.propTypes={disableBack:i().bool,handlePrev:i().func.isRequired,handleNext:i().func.isRequired,nextStep:i().oneOfType([i().string,i().shape({when:i().string.isRequired,stepMapper:i().object.isRequired}),i().func]),buttonLabels:i().shape({submit:i().node.isRequired,cancel:i().node.isRequired,back:i().node.isRequired,next:i().node.isRequired}).isRequired,context:i().object.isRequired,renderNextButton:i().func};const m=c},56640:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(28416),n=a.n(r),s=a(31055),o=a(70363),i=a(25387),l=a(45697),c=a.n(l),m=a(2550),d=a(1130);const p=({context:e,title:t,text:a,customFooter:l})=>{const c=(0,i.YB)(),{jumpToStep:p}=(0,r.useContext)(o.default),{setWizardError:u}=(0,r.useContext)(e);return n().createElement(d.Te,{errorTitle:t,errorDescription:a,customFooter:l||n().createElement(s.Button,{onClick:()=>{u(void 0),p(0)},variant:s.ButtonVariant.primary},c.formatMessage(m.Z.returnToStepNumber,{number:1}))})};p.propTypes={context:c().object.isRequired,title:c().string.isRequired,text:c().string.isRequired,customFooter:c().element};const u=p},56280:(e,t,a)=>{a.r(t),a.d(t,{AddRoleWizardContext:()=>ye,default:()=>Ze,mapperExtension:()=>ve});var r=a(28416),n=a.n(r),s=a(45697),o=a.n(s),i=a(86706),l=a(25387),c=a(71355),m=a(51912),d=a(67850),p=a(8340),u=a(9820),g=a(29301),f=a(55140),y=a(64124),h=a(52229),E=a(74503),v=a(15950),b=a(64380),Z=a(72232),x=a(19443),M=a(47625),R=a(48880),T=a(60167),S=a(2550),C=a(2034);const k=async e=>{const t=(0,l.Sn)(),a=(0,l.dp)({locale:T.S,messages:C},t);if(!e)return;const r=await(0,x.vd)({limit:10,offset:0,name:e,nameMatch:"exact"}).catch((e=>{console.error(e)})),n=await(0,x.vd)({limit:10,offset:0,displayName:e,nameMatch:"exact"}).catch((e=>{console.error(e)}));if(r?.data?.length>0||n?.data?.length>0)throw a.formatMessage(S.Z.nameAlreadyTaken)},q=(0,M.Z)(k),w=({name:e})=>{const t=(0,R.default)();return(0,r.useEffect)((()=>(setTimeout((()=>t.change(e,"1"))),()=>t.change(e,""))),[]),null};w.propTypes={name:o().string.isRequired};var B=a(56640);const I=({formFields:e})=>{const t=(0,l.YB)(),{submitting:a,error:s,setWizardError:o}=(0,r.useContext)(ye),{getState:i}=(0,R.default)();return(0,r.useEffect)((()=>{o(void 0),k(i().values["role-name"]).then((()=>o(!1))).catch((()=>o(!0)))}),[]),void 0===s||a?n().createElement(E.Bullseye,null,n().createElement(v.Spinner,{size:"xl"})):!0===s?n().createElement(B.Z,{context:ye,title:t.formatMessage(S.Z.roleNameTakenTitle),text:t.formatMessage(S.Z.roleNameTakenText)}):n().createElement("div",{className:"rbac"},n().createElement(Z.Title,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-sm"},t.formatMessage(S.Z.reviewDetails)),n().createElement(b.TextContent,{className:"pf-v5-u-mb-md"},n().createElement(b.Text,null,t.formatMessage(S.Z.reviewRoleDetails))),e?.[0]?.[0])};I.propTypes={formFields:o().array};const N=I,F=({formFields:e})=>{const t=(0,l.YB)();return n().createElement("div",{className:"rbac"},n().createElement(Z.Title,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-lg"},t.formatMessage(S.Z.defineCostResources)),e)};F.propTypes={formFields:o().array};const G=F;var D=a(87767),L=a(92884),z=a(68539),A=a(13563),W=a(55218),V=a(31055),_=a(95376),P=a(71214),j=a.n(P),H=a(64756),$=a(14289);const Y=({onClose:e})=>{const{setHideForm:t,setWizardSuccess:a}=(0,r.useContext)(ye),s=(0,l.YB)();return n().createElement(_.EmptyState,{variant:_.EmptyStateVariant.lg},n().createElement(_.EmptyStateHeader,{titleText:n().createElement(n().Fragment,null,s.formatMessage(S.Z.roleCreatedSuccessfully)),icon:n().createElement(_.EmptyStateIcon,{color:"green",icon:j()}),headingLevel:"h4"}),n().createElement(_.EmptyStateBody,null),n().createElement(_.EmptyStateFooter,null,n().createElement(V.Button,{onClick:e,variant:"primary"},s.formatMessage(S.Z.exit)),n().createElement(_.EmptyStateActions,null,n().createElement(V.Button,{onClick:()=>{t(!1),a(!1)},variant:"link"},s.formatMessage(S.Z.createAnotherRole)),n().createElement(V.Button,{component:e=>n().createElement(H.Z,{to:$.Z.groups.link,...e}),variant:"link"},s.formatMessage(S.Z.addRoleToGroup)))))};Y.propTypes={onClose:o().func.isRequired};const O=Y;var U=a(73893),Q=a(5904),K=a(97246),X=a(81169),J=a(7732);const ee=({roleReducer:{rolesForWizard:e,isWizardLoading:t}})=>({roles:e.data,pagination:e.meta,isWizardLoading:t});var te=a(55594),ae=a(23539),re=a(9545);const ne=(e,t)=>n().createElement("div",{className:"rbac-c-sticky"},n().createElement(re.Grid,{className:"rbac-c-sticky--title"},e.map((t=>n().createElement(re.GridItem,{span:12/e.length,key:t},t)))),n().createElement(re.Grid,{className:"rbac-c-sticky--data"},t.map((t=>t.cells.map((t=>n().createElement(re.GridItem,{span:12/e.length,key:t},t)))))));var se=a(51880),oe=a(47108);var ie=a(16987),le=a(56591),ce=a(45047),me=a(9294);const de=e=>{const t=(0,l.YB)(),{input:a}=(0,X.Z)(e),s=(0,R.default)(),{"role-name":o,"role-description":i}=s.getState().values,[c,m]=(0,r.useState)(o||""),[d,p]=(0,r.useState)(),[u,f]=(0,r.useState)(i),y=e=>{const t=(0,g.vE)(e);a.onChange(void 0),q(t).then((()=>{a.onChange(t),p(void 0)})).catch((e=>{p(e),a.onChange(void 0)})),m(e)};(0,r.useEffect)((()=>{c?.length>0&&y(c)}),[]);const h=((e,t)=>void 0===e||t||e?.length>150?"error":"default")(c,d),E=(e=>e?.length>150?"error":"default")(u);return n().createElement(ae.Stack,{hasGutter:!0},n().createElement(ae.StackItem,{className:"rbac-l-stack__item-summary"},n().createElement(ie.FormGroup,{label:t.formatMessage(S.Z.roleName),isRequired:!0},n().createElement(me.TextInput,{id:"role-name",value:c,type:"text",validated:h,onBlur:()=>""===c&&m(void 0),onChange:(e,t)=>y(t),"aria-label":"Role name"}),"error"===h&&n().createElement(ie.FormHelperText,null,n().createElement(le.HelperText,null,n().createElement(le.HelperTextItem,{variant:h},c?d:t.formatMessage(S.Z.required)))))),n().createElement(ae.StackItem,null,n().createElement(ie.FormGroup,{label:t.formatMessage(S.Z.roleDescription)},n().createElement(ce.TextArea,{id:"role-description",value:u,validated:E,onChange:(e,t)=>{f(t),s.change("role-description",t)},"aria-label":"Role description",resizeOrientation:"vertical"}),"error"===E&&n().createElement(ie.FormHelperText,null,n().createElement(le.HelperText,null,n().createElement(le.HelperTextItem,{variant:E},t.formatMessage(S.Z.maxCharactersWarning,{number:150})))))))};de.propTypes={name:o().string,description:o().string};const pe=de;var ue=a(84414);class ge extends n().Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){if(!e.message.includes(this.props.silentErrorString))throw this.setState({hasError:!1}),e}render(){return this.state.hasError?null:this.props.children}}ge.propTypes={children:o().node.isRequired,silentErrorString:o().string.isRequired};const fe=ge,ye=(0,r.createContext)({success:!1,submitting:!1,error:void 0}),he=e=>n().createElement(d.ZP,{...e,showFormControls:!1}),Ee=({Content:e,...t})=>n().createElement(e,{...t});Ee.propTypes={Content:o().elementType.isRequired};const ve={"set-name":pe,"base-role-table":e=>{const t=(0,l.YB)(),a=(0,i.useDispatch)(),s=e=>a((0,A.hs)(e)),[o,c]=(0,r.useState)(""),{roles:m,pagination:d,isWizardLoading:p}=(0,i.useSelector)(ee,i.shallowEqual),{input:u}=(0,X.Z)(e),f=(0,R.default)(),y=[{title:""},{title:t.formatMessage(S.Z.name),key:"display_name",transforms:[J.p]},{title:t.formatMessage(S.Z.description)}],[h,E]=(0,r.useState)({index:1,direction:"asc"}),v=`${"desc"===h?.direction?"-":""}${y[h?.index].key}`;return(0,r.useEffect)((()=>{s({limit:50,offset:0,itemCount:0,orderBy:v})}),[]),n().createElement("div",null,n().createElement(Q.Alert,{variant:"info",isInline:!0,title:t.formatMessage(S.Z.granularPermissionsWillBeCopied)}),n().createElement(K.M,{columns:y,rows:(e=>e.map((e=>({cells:[{title:n().createElement(U.Radio,{id:`${e.uuid}-radio`,name:`${e.name}-radio`,"aria-label":`${e.name}-radio`,ouiaId:`${e.name}-radio`,value:e.uuid,isChecked:u.value.uuid===e.uuid,onChange:()=>{f.batch((()=>{u.onChange(e),f.change("role-copy-name",`Copy of ${e.display_name||e.name}`),f.change("role-copy-description",e.description),f.change("add-permissions-table",[]),f.change("base-permissions-loaded",!1),f.change("not-allowed-permissions",[])}))}}),props:{className:"pf-v5-c-table__check"}},e.display_name||e.name,e.description]}))))(m),data:m,fetchData:e=>{s((0,g.jl)(e))},filterValue:o,setFilterValue:({name:e})=>c(e),isLoading:p,sortBy:h,onSort:(e,t,a)=>{const r=`${"desc"===a?"-":""}${y[t].key}`;E({index:t,direction:a}),s({...d,offset:0,orderBy:r})},pagination:d,titlePlural:t.formatMessage(S.Z.roles),titleSingular:t.formatMessage(S.Z.role),filterPlaceholder:t.formatMessage(S.Z.roleName).toLowerCase(),ouiaId:"roles-table",isCompact:!0,tableId:"base-role"}))},"add-permissions-table":te.Z,"cost-resources":oe.Z,"inventory-groups-role":se.Z,review:()=>{const e=(0,l.YB)(),t=(0,R.default)(),{"role-name":a,"role-description":r,"role-copy-name":s,"role-copy-description":o,"add-permissions-table":i,"resource-definitions":c,"has-cost-resources":m,"inventory-group-permissions":d,"role-type":p}=t.getState().values,u=[e.formatMessage(S.Z.application),e.formatMessage(S.Z.resourceType),e.formatMessage(S.Z.operation)],g=i.map((e=>({cells:e.uuid.split(":")}))),f=(c||[]).map((({permission:e,resources:t})=>({cells:[e,t.join(", ")]}))),y=(d||[]).map((({permission:t,groups:a})=>({cells:[t,a?.map((t=>null===t?.id?e.formatMessage(S.Z.ungroupedSystems):t?.name)).join(", ")]})));return n().createElement(n().Fragment,null,n().createElement(ae.Stack,null,n().createElement(ae.StackItem,{className:"rbac-l-stack__item-summary"},n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.name))),n().createElement(re.GridItem,{sm:12,md:10},n().createElement(b.Text,{component:b.TextVariants.p},"create"===p?a:s))),n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.description))),n().createElement(re.GridItem,{sm:12,md:10},n().createElement(b.Text,{component:b.TextVariants.p},"create"===p?r:o))),n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.permissions))),n().createElement(re.GridItem,{sm:12,md:10},ne(u,g))),d&&n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.resourceDefinitions))),n().createElement(re.GridItem,{sm:12,md:10},ne([e.formatMessage(S.Z.permission),e.formatMessage(S.Z.groupDefinition)],y))),m&&n().createElement(re.Grid,null,n().createElement(re.GridItem,{sm:12,md:2},n().createElement(b.Text,{component:b.TextVariants.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.resourceDefinitions))),n().createElement(re.GridItem,{sm:12,md:10},ne([e.formatMessage(S.Z.permission),e.formatMessage(S.Z.resourceDefinitions)],f))))))},description:Ee,"type-selector":e=>{const t=(0,l.YB)(),{input:a}=(0,X.Z)(e),s=(0,R.default)(),[o,i]=(0,r.useState)(s.getState().values["role-type"]),c=e=>{i(e),a.onChange(e),s.change("add-permissions-table",[]),s.change("base-permissions-loaded",!1),s.change("not-allowed-permissions",[])};return n().createElement("div",null,n().createElement(U.Radio,{isChecked:"create"===o,className:"pf-v5-u-mb-sm",name:"role-type-create",onChange:()=>c("create"),label:t.formatMessage(S.Z.createRoleFromScratch),id:"role-type-create",value:"create"}),n().createElement(U.Radio,{isChecked:"copy"===o,name:"role-type-copy",onChange:()=>c("copy"),label:t.formatMessage(S.Z.copyAnExistingRole),id:"role-type-copy",value:"copy"}))}},be=({pagination:e,filters:t,orderBy:a})=>{const s=(0,l.YB)(),o=(0,i.useDispatch)(),d=(0,ue.Z)(),E=(0,f.Z)(),[v,b]=(0,r.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),[Z,x]=(0,r.useState)(!1),M=(0,r.useRef)(document.createElement("div")),[R,k]=(0,r.useState)();(0,r.useEffect)((()=>{k((e=>{const t=(0,l.Sn)(),a=(0,l.dp)({locale:T.S,messages:C},t);return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:a.formatMessage(S.Z.createRole),style:{overflow:"hidden"},container:e,fields:[{title:a.formatMessage(S.Z.createRole),name:"step-1",nextStep:{when:"role-type",stepMapper:{copy:"name-and-description",create:"add-permissions"}},fields:[{component:"type-selector",name:"role-type",isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:"set-name",name:"role-name",type:"text",validate:[{type:y.Z.REQUIRED},{type:y.Z.MAX_LENGTH,threshold:150}],condition:{when:"role-type",is:"create"}},{component:"base-role-table",name:"copy-base-role",label:a.formatMessage(S.Z.baseRole),isRequired:!0,condition:{when:"role-type",is:"copy"},validate:[{type:y.Z.REQUIRED}]},{condition:{when:"role-type",is:"create"},component:"description",name:"fixasyncvalidation",Content:w},{condition:{when:"role-type",is:"copy"},component:"description",name:"fixasyncvalidation2",Content:w}]},{title:a.formatMessage(S.Z.nameAndDescription),name:"name-and-description",nextStep:"add-permissions",fields:[{component:"text-field",name:"role-copy-name",type:"text",label:a.formatMessage(S.Z.roleName),isRequired:!0,validate:[q,{type:y.Z.REQUIRED},{type:"max-length",threshold:150}]},{component:"text-field",name:"role-copy-description",type:"text",label:a.formatMessage(S.Z.roleDescription),validate:[{type:"max-length",threshold:150}]}]},{name:"add-permissions",title:a.formatMessage(S.Z.addPermissions),StepTemplate:h.Z,nextStep:({values:e})=>(0,L.j)("add-permissions",e),fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{title:a.formatMessage(S.Z.inventoryGroupsAccessTitle),name:"inventory-groups-role",StepTemplate:z.Z,nextStep:({values:e})=>(0,L.j)("inventory-groups-role",e),fields:[{component:"plain-text",name:"cost-resources",label:n().createElement("p",{className:"pf-v5-u-mb-md"},a.formatMessage(S.Z.applyInventoryGroupsRolePermission))},{component:"inventory-groups-role",name:"inventory-groups-role",validate:[(e=[])=>e?.every((({groups:e,permission:t})=>e?.length>0&&t))?void 0:a.formatMessage(S.Z.assignAtLeastOneInventoryGroup)]}]},{name:"cost-resources-definition",title:a.formatMessage(S.Z.defineCostResources),nextStep:"review",StepTemplate:G,fields:[{component:"plain-text",name:"text-description",label:n().createElement("p",{className:"pf-v5-u-mb-md"},a.formatMessage(S.Z.applyCostPermissionText))},{component:"cost-resources",name:"cost-resources",validate:[(e=[])=>e?.every((({resources:e})=>e?.length>0))?void 0:a.formatMessage(S.Z.assignAtLeastOneResource)]}]},{name:"review",title:a.formatMessage(S.Z.reviewDetails),buttons:e=>n().createElement(D.Z,{...e,context:ye}),StepTemplate:N,fields:[{component:"review",name:"review"}]}]}]}})(M.current))}),[]);const B=()=>d({pathname:$.Z.roles.link,search:(0,g.GT)({page:1,per_page:e.limit,...t})}),I=()=>{v.success||o((0,c.addNotification)({variant:"warning",title:s.formatMessage(S.Z.creatingRoleCanceled),dismissDelay:8e3})),x(!1),d({pathname:$.Z.roles.link,search:(0,g.GT)({page:1,per_page:e.limit,...t})})};return R?n().createElement(ye.Provider,{value:{...v,setWizardError:e=>b((t=>({...t,error:e}))),setWizardSuccess:e=>b((t=>({...t,success:e}))),setHideForm:e=>b((t=>({...t,hideForm:e})))}},n().createElement(fe,{silentErrorString:"focus-trap"},n().createElement(W.Z,{title:s.formatMessage(S.Z.exitItemCreation,{item:s.formatMessage(S.Z.role).toLocaleLowerCase()}),confirmButtonLabel:s.formatMessage(S.Z.discard),isOpen:Z,onClose:()=>{M.current.hidden=!1,x(!1)},onConfirm:I},s.formatMessage(S.Z.discardedInputsWarning))),v.hideForm?v.success?n().createElement(u.e,{title:s.formatMessage(S.Z.createRole),isOpen:!0,onClose:B,steps:[{name:"success",component:n().createElement(O,{onClose:B}),isFinishedStep:!0}]}):null:n().createElement(m.Z,{schema:R,container:M,subscription:{values:!0},FormTemplate:he,initialValues:{"role-type":"create"},componentMapper:{...p.ZP,...ve},onSubmit:t=>{const{"role-name":r,"role-description":n,"role-copy-name":s,"role-copy-description":i,"add-permissions-table":l,"inventory-groups-role":c,"cost-resources":m,"role-type":d}=t,p=l.map((e=>e.uuid)),u={applications:[...new Set(l.map((({uuid:e})=>e.split(":")[0])))],description:("create"===d?n:i)||null,name:"create"===d?r:s,access:l.reduce(((e,{uuid:t,requires:a=[]})=>[...e,...[t,...a.filter((e=>!p.includes(e)))].map((e=>{let t;return e.includes("cost-management")?t={key:`cost-management.${e.split(":")[1]}`,operation:"in",value:m?.find((t=>t.permission===e))?.resources}:e.includes("inventory")&&(t={key:"group.id",operation:"in",value:c?.find((t=>t.permission===e))?.groups?.map((e=>e?.id))}),{permission:e,resourceDefinitions:t?[{attributeFilter:t}]:[]}}))]),[])};return o((0,A.fA)(u)).then((()=>{b((e=>({...e,submitting:!1,success:!0,hideForm:!0}))),o((0,A.Kt)({limit:e.limit,orderBy:a,usesMetaInURL:!0,chrome:E}))})).catch((()=>{b((e=>({...e,submitting:!1,success:!1,hideForm:!0}))),o((0,A.Kt)({limit:e.limit,orderBy:a,usesMetaInURL:!0,chrome:E})),B()}))},onCancel:e=>{Boolean(e&&e["role-name"]||e["role-description"]||e["copy-base-role"])?(M.current.hidden=!0,x(!0)):I()}})):null};be.propTypes={pagination:o().shape({limit:o().number.isRequired}).isRequired,filters:o().shape({name:o().string}).isRequired,orderBy:o().string};const Ze=be},47625:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(99166);const n=(e,t=250,a={onlyResolvesLast:!1})=>(0,r.Z)(e,t,a)}}]);
//# sourceMappingURL=../sourcemaps/2667.84292f885e7c3e2fb1f94ff602069aa3.js.map
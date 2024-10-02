(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[706,459],{35575:(e,t,a)=>{"use strict";a.d(t,{Y:()=>c});var s=a(65353),r=a(66029);a(99624);const n="pf-m-standalone",o="pf-m-disabled";var i=a(38296),l=a(62472);class c extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},e.label||e["aria-label"]||console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:(0,l.getDefaultOUIAId)(c.displayName)}}render(){const e=this.props,{"aria-label":t,checked:a,className:m,inputClassName:d,defaultChecked:p,isLabelWrapped:u,isLabelBeforeButton:g,isChecked:f,isDisabled:h,isValid:v,label:y,onChange:b,description:E,body:Z,ouiaId:x,ouiaSafe:C=!0,component:M}=e,R=(0,s.__rest)(e,["aria-label","checked","className","inputClassName","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe","component"]);R.id||console.error("Radio:","id is required to make input accessible");const k=r.createElement("input",Object.assign({},R,{className:(0,i.css)("pf-v5-c-radio__input",d),type:"radio",onChange:this.handleChange,"aria-invalid":!v,disabled:h,checked:a||f},void 0===a&&{defaultChecked:p},!y&&{"aria-label":t},(0,l.getOUIAProps)(c.displayName,void 0!==x?x:this.state.ouiaStateId,C))),S=u&&!M||"label"===M,N=S?"span":"label",q=y?r.createElement(N,{className:(0,i.css)("pf-v5-c-radio__label",h&&o),htmlFor:S?void 0:R.id},y):null,T=null!=M?M:S?"label":"div";return r.createElement(T,{className:(0,i.css)("pf-v5-c-radio",!y&&n,m),htmlFor:S?R.id:void 0},g?r.createElement(r.Fragment,null,q,k):r.createElement(r.Fragment,null,k,q),E&&r.createElement("span",{className:(0,i.css)("pf-v5-c-radio__description")},E),Z&&r.createElement("span",{className:(0,i.css)("pf-v5-c-radio__body")},Z))}}c.displayName="Radio",c.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}}},87767:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var s=a(47173),r=a(66029),n=a.n(r),o=a(45697),i=a.n(o),l=(a(27361),a(48880));i().oneOfType([i().string,i().func,i().object]),i().func.isRequired,i().node.isRequired,i().bool,i().func.isRequired,i().node.isRequired,i().func.isRequired;const c=({renderNextButton:e,disableBack:t,handlePrev:a,buttonLabels:{cancel:o,back:i},context:c})=>{const m=(0,l.default)(),{success:d,error:p,submitting:u}=(0,r.useContext)(c);return d||void 0===p||p||u?null:n().createElement(r.Fragment,null,e(),n().createElement(s.zx,{type:"button",variant:"secondary",isDisabled:t,onClick:a},i),n().createElement(s.zx,{type:"button",variant:"link",onClick:m.onCancel},o))};c.propTypes={disableBack:i().bool,handlePrev:i().func.isRequired,handleNext:i().func.isRequired,nextStep:i().oneOfType([i().string,i().shape({when:i().string.isRequired,stepMapper:i().object.isRequired}),i().func]),buttonLabels:i().shape({submit:i().node.isRequired,cancel:i().node.isRequired,back:i().node.isRequired,next:i().node.isRequired}).isRequired,context:i().object.isRequired,renderNextButton:i().func};const m=c},56640:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var s=a(66029),r=a.n(s),n=a(47173),o=a(70363),i=a(25387),l=a(45697),c=a.n(l),m=a(2550),d=a(56756);const p=({context:e,title:t,text:a,customFooter:l})=>{const c=(0,i.YB)(),{jumpToStep:p}=(0,s.useContext)(o.default),{setWizardError:u}=(0,s.useContext)(e);return r().createElement(d.Te,{errorTitle:t,errorDescription:a,customFooter:l||r().createElement(n.zx,{onClick:()=>{u(void 0),p(0)},variant:n.Wu.primary},c.formatMessage(m.Z.returnToStepNumber,{number:1}))})};p.propTypes={context:c().object.isRequired,title:c().string.isRequired,text:c().string.isRequired,customFooter:c().element};const u=p},56280:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AddRoleWizardContext:()=>ke,default:()=>we,mapperExtension:()=>qe});var s=a(66029),r=a.n(s),n=a(45697),o=a.n(n),i=a(86706),l=a(25387),c=a(71355),m=a(51912),d=a(67850),p=a(8340),u=a(46985),g=a(29301),f=a(55140),h=a(64124),v=a(52229),y=a(52643),b=a(83133),E=a(38779),Z=a(68774),x=a(68340),C=a(19443),M=a(47625),R=a(48880),k=a(60167),S=a(2550),N=a(2034);const q=async e=>{const t=(0,l.Sn)(),a=(0,l.dp)({locale:k.S,messages:N},t);if(!e)return;const s=await(0,C.vd)({limit:10,offset:0,name:e,nameMatch:"exact"}).catch((e=>{console.error(e)})),r=await(0,C.vd)({limit:10,offset:0,displayName:e,nameMatch:"exact"}).catch((e=>{console.error(e)}));if(s?.data?.length>0||r?.data?.length>0)throw a.formatMessage(S.Z.nameAlreadyTaken)},T=(0,M.Z)(q),w=({name:e})=>{const t=(0,R.default)();return(0,s.useEffect)((()=>(setTimeout((()=>t.change(e,"1"))),()=>t.change(e,""))),[]),null};w.propTypes={name:o().string.isRequired};var D=a(56640);const F=({formFields:e})=>{const t=(0,l.YB)(),{submitting:a,error:n,setWizardError:o}=(0,s.useContext)(ke),{getState:i}=(0,R.default)();return(0,s.useEffect)((()=>{o(void 0),q(i().values["role-name"]).then((()=>o(!1))).catch((()=>o(!0)))}),[]),void 0===n||a?r().createElement(y.b,null,r().createElement(b.$,{size:"xl"})):!0===n?r().createElement(D.Z,{context:ke,title:t.formatMessage(S.Z.roleNameTakenTitle),text:t.formatMessage(S.Z.roleNameTakenText)}):r().createElement("div",{className:"rbac"},r().createElement(E.D,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-sm"},t.formatMessage(S.Z.reviewDetails)),r().createElement(Z.D,{className:"pf-v5-u-mb-md"},r().createElement(x.x,null,t.formatMessage(S.Z.reviewRoleDetails))),e?.[0]?.[0])};F.propTypes={formFields:o().array};const B=F,P=({formFields:e})=>{const t=(0,l.YB)();return r().createElement("div",{className:"rbac"},r().createElement(E.D,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-lg"},t.formatMessage(S.Z.defineCostResources)),e)};P.propTypes={formFields:o().array};const L=P;var z=a(87767),I=a(92884),_=a(68539),W=a(13563),A=a(79083),Y=a(55218),j=a(9947),O=a(67880),$=a(43049),U=a(75106),G=a(80315),Q=a(47173),V=a(7065),K=a(68778),H=a(64756),X=a(14289);const J=({onClose:e})=>{const{setHideForm:t,setWizardSuccess:a}=(0,s.useContext)(ke),n=(0,l.YB)();return r().createElement(j.u,{variant:j.I.lg},r().createElement(O.t,{titleText:r().createElement(r().Fragment,null,n.formatMessage(S.Z.roleCreatedSuccessfully)),icon:r().createElement($.k,{color:"green",icon:K.rE}),headingLevel:"h4"}),r().createElement(U.B,null),r().createElement(G.O,null,r().createElement(Q.zx,{onClick:e,variant:"primary"},n.formatMessage(S.Z.exit)),r().createElement(V.U,null,r().createElement(Q.zx,{onClick:()=>{t(!1),a(!1)},variant:"link"},n.formatMessage(S.Z.createAnotherRole)),r().createElement(Q.zx,{component:e=>r().createElement(H.Z,{to:X.Z.groups.link,...e}),variant:"link"},n.formatMessage(S.Z.addRoleToGroup)))))};J.propTypes={onClose:o().func.isRequired};const ee=J;var te=a(35575),ae=a(41448),se=a(97246),re=a(81169),ne=a(7732);const oe=({roleReducer:{rolesForWizard:e,isWizardLoading:t}})=>({roles:e.data,pagination:e.meta,isWizardLoading:t});var ie=a(55594),le=a(50693),ce=a(16475),me=a(49739),de=a(83826);const pe=(e,t)=>r().createElement("div",{className:"rbac-c-sticky"},r().createElement(le.r,{className:"rbac-c-sticky--title"},e.map((t=>r().createElement(ce.P,{span:12/e.length,key:t},t)))),r().createElement(le.r,{className:"rbac-c-sticky--data"},t.map((t=>t.cells.map((t=>r().createElement(ce.P,{span:12/e.length,key:t},t)))))));var ue=a(51880),ge=a(47108);var fe=a(87828),he=a(36621),ve=a(2628),ye=a(59775),be=a(92607),Ee=a(45469);const Ze=e=>{const t=(0,l.YB)(),{input:a}=(0,re.Z)(e),n=(0,R.default)(),{"role-name":o,"role-description":i}=n.getState().values,[c,m]=(0,s.useState)(o||""),[d,p]=(0,s.useState)(),[u,f]=(0,s.useState)(i),h=e=>{const t=(0,g.vE)(e);a.onChange(void 0),T(t).then((()=>{a.onChange(t),p(void 0)})).catch((e=>{p(e),a.onChange(void 0)})),m(e)};(0,s.useEffect)((()=>{c?.length>0&&h(c)}),[]);const v=((e,t)=>void 0===e||t||e?.length>150?"error":"default")(c,d),y=(e=>e?.length>150?"error":"default")(u);return r().createElement(me.K,{hasGutter:!0},r().createElement(de.v,{className:"rbac-l-stack__item-summary"},r().createElement(ye.c,{label:t.formatMessage(S.Z.roleName),isRequired:!0},r().createElement(be.oi,{id:"role-name",value:c,type:"text",validated:v,onBlur:()=>""===c&&m(void 0),onChange:(e,t)=>h(t),"aria-label":"Role name"}),"error"===v&&r().createElement(fe.Q,null,r().createElement(he.p,null,r().createElement(ve.u,{variant:v},c?d:t.formatMessage(S.Z.required)))))),r().createElement(de.v,null,r().createElement(ye.c,{label:t.formatMessage(S.Z.roleDescription)},r().createElement(Ee.Kx,{id:"role-description",value:u,validated:y,onChange:(e,t)=>{f(t),n.change("role-description",t)},"aria-label":"Role description",resizeOrientation:"vertical"}),"error"===y&&r().createElement(fe.Q,null,r().createElement(he.p,null,r().createElement(ve.u,{variant:y},t.formatMessage(S.Z.maxCharactersWarning,{number:150})))))))};Ze.propTypes={name:o().string,description:o().string};const xe=Ze;var Ce=a(84414);class Me extends r().Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){if(!e.message.includes(this.props.silentErrorString))throw this.setState({hasError:!1}),e}render(){return this.state.hasError?null:this.props.children}}Me.propTypes={children:o().node.isRequired,silentErrorString:o().string.isRequired};const Re=Me,ke=(0,s.createContext)({success:!1,submitting:!1,error:void 0}),Se=e=>r().createElement(d.ZP,{...e,showFormControls:!1}),Ne=({Content:e,...t})=>r().createElement(e,{...t});Ne.propTypes={Content:o().elementType.isRequired};const qe={"set-name":xe,"base-role-table":e=>{const t=(0,l.YB)(),a=(0,i.useDispatch)(),n=e=>a((0,W.hs)(e)),[o,c]=(0,s.useState)(""),{roles:m,pagination:d,isWizardLoading:p}=(0,i.useSelector)(oe,i.shallowEqual),{input:u}=(0,re.Z)(e),f=(0,R.default)(),h=[{title:""},{title:t.formatMessage(S.Z.name),key:"display_name",transforms:[ne.p]},{title:t.formatMessage(S.Z.description)}],[v,y]=(0,s.useState)({index:1,direction:"asc"}),b=`${"desc"===v?.direction?"-":""}${h[v?.index].key}`;return(0,s.useEffect)((()=>{n({limit:50,offset:0,itemCount:0,orderBy:b})}),[]),r().createElement("div",null,r().createElement(ae.b,{variant:"info",isInline:!0,title:t.formatMessage(S.Z.granularPermissionsWillBeCopied)}),r().createElement(se.M,{columns:h,rows:(e=>e.map((e=>({cells:[{title:r().createElement(te.Y,{id:`${e.uuid}-radio`,name:`${e.name}-radio`,"aria-label":`${e.name}-radio`,ouiaId:`${e.name}-radio`,value:e.uuid,isChecked:u.value.uuid===e.uuid,onChange:()=>{f.batch((()=>{u.onChange(e),f.change("role-copy-name",`Copy of ${e.display_name||e.name}`),f.change("role-copy-description",e.description),f.change("add-permissions-table",[]),f.change("base-permissions-loaded",!1),f.change("not-allowed-permissions",[])}))}}),props:{className:"pf-v5-c-table__check"}},e.display_name||e.name,e.description]}))))(m),data:m,fetchData:e=>{n((0,g.jl)(e))},filterValue:o,setFilterValue:({name:e})=>c(e),isLoading:p,sortBy:v,onSort:(e,t,a)=>{const s=`${"desc"===a?"-":""}${h[t].key}`;y({index:t,direction:a}),n({...d,offset:0,orderBy:s})},pagination:d,titlePlural:t.formatMessage(S.Z.roles),titleSingular:t.formatMessage(S.Z.role),filterPlaceholder:t.formatMessage(S.Z.roleName).toLowerCase(),ouiaId:"roles-table",isCompact:!0,tableId:"base-role"}))},"add-permissions-table":ie.Z,"cost-resources":ge.Z,"inventory-groups-role":ue.Z,review:()=>{const e=(0,l.YB)(),t=(0,A.useFlag)("platform.rbac.groups-to-workspaces-rename"),a=(0,R.default)(),{"role-name":s,"role-description":n,"role-copy-name":o,"role-copy-description":i,"add-permissions-table":c,"resource-definitions":m,"has-cost-resources":d,"inventory-group-permissions":p,"role-type":u}=a.getState().values,g=[e.formatMessage(S.Z.application),e.formatMessage(S.Z.resourceType),e.formatMessage(S.Z.operation)],f=c.map((e=>({cells:e.uuid.split(":")}))),h=(m||[]).map((({permission:e,resources:t})=>({cells:[e,t.join(", ")]}))),v=(p||[]).map((({permission:t,groups:a})=>({cells:[t,a?.map((t=>null===t?.id?e.formatMessage(S.Z.ungroupedSystems):t?.name)).join(", ")]})));return r().createElement(r().Fragment,null,r().createElement(me.K,null,r().createElement(de.v,{className:"rbac-l-stack__item-summary"},r().createElement(le.r,null,r().createElement(ce.P,{sm:12,md:2},r().createElement(x.x,{component:x.q.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.name))),r().createElement(ce.P,{sm:12,md:10},r().createElement(x.x,{component:x.q.p},"create"===u?s:o))),r().createElement(le.r,null,r().createElement(ce.P,{sm:12,md:2},r().createElement(x.x,{component:x.q.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.description))),r().createElement(ce.P,{sm:12,md:10},r().createElement(x.x,{component:x.q.p},"create"===u?n:i))),r().createElement(le.r,null,r().createElement(ce.P,{sm:12,md:2},r().createElement(x.x,{component:x.q.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.permissions))),r().createElement(ce.P,{sm:12,md:10},pe(g,f))),p&&r().createElement(le.r,null,r().createElement(ce.P,{sm:12,md:2},r().createElement(x.x,{component:x.q.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.resourceDefinitions))),r().createElement(ce.P,{sm:12,md:10},pe([e.formatMessage(S.Z.permission),e.formatMessage(t?S.Z.workspacesDefinition:S.Z.groupDefinition)],v))),d&&r().createElement(le.r,null,r().createElement(ce.P,{sm:12,md:2},r().createElement(x.x,{component:x.q.h4,className:"rbac-bold-text"},e.formatMessage(S.Z.resourceDefinitions))),r().createElement(ce.P,{sm:12,md:10},pe([e.formatMessage(S.Z.permission),e.formatMessage(S.Z.resourceDefinitions)],h))))))},description:Ne,"type-selector":e=>{const t=(0,l.YB)(),{input:a}=(0,re.Z)(e),n=(0,R.default)(),[o,i]=(0,s.useState)(n.getState().values["role-type"]),c=e=>{i(e),a.onChange(e),n.change("add-permissions-table",[]),n.change("base-permissions-loaded",!1),n.change("not-allowed-permissions",[])};return r().createElement("div",null,r().createElement(te.Y,{isChecked:"create"===o,className:"pf-v5-u-mb-sm",name:"role-type-create",onChange:()=>c("create"),label:t.formatMessage(S.Z.createRoleFromScratch),id:"role-type-create",value:"create"}),r().createElement(te.Y,{isChecked:"copy"===o,name:"role-type-copy",onChange:()=>c("copy"),label:t.formatMessage(S.Z.copyAnExistingRole),id:"role-type-copy",value:"copy"}))}},Te=({pagination:e,filters:t,orderBy:a})=>{const n=(0,l.YB)(),o=(0,i.useDispatch)(),d=(0,Ce.Z)(),y=(0,f.Z)(),b=(0,A.useFlag)("platform.rbac.groups-to-workspaces-rename"),[E,Z]=(0,s.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),[x,C]=(0,s.useState)(!1),M=(0,s.useRef)(document.createElement("div")),[R,q]=(0,s.useState)();(0,s.useEffect)((()=>{q(((e,t)=>{const a=(0,l.Sn)(),s=(0,l.dp)({locale:k.S,messages:N},a);return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:s.formatMessage(S.Z.createRole),style:{overflow:"hidden"},container:e,fields:[{title:s.formatMessage(S.Z.createRole),name:"step-1",nextStep:{when:"role-type",stepMapper:{copy:"name-and-description",create:"add-permissions"}},fields:[{component:"type-selector",name:"role-type",isRequired:!0,validate:[{type:h.Z.REQUIRED}]},{component:"set-name",name:"role-name",type:"text",validate:[{type:h.Z.REQUIRED},{type:h.Z.MAX_LENGTH,threshold:150}],condition:{when:"role-type",is:"create"}},{component:"text-field",name:"role-description",hideField:!0},{component:"base-role-table",name:"copy-base-role",label:s.formatMessage(S.Z.baseRole),isRequired:!0,condition:{when:"role-type",is:"copy"},validate:[{type:h.Z.REQUIRED}]},{condition:{when:"role-type",is:"create"},component:"description",name:"fixasyncvalidation",Content:w},{condition:{when:"role-type",is:"copy"},component:"description",name:"fixasyncvalidation2",Content:w}]},{title:s.formatMessage(S.Z.nameAndDescription),name:"name-and-description",nextStep:"add-permissions",fields:[{component:"text-field",name:"role-copy-name",type:"text",label:s.formatMessage(S.Z.roleName),isRequired:!0,validate:[T,{type:h.Z.REQUIRED},{type:"max-length",threshold:150}]},{component:"text-field",name:"role-copy-description",type:"text",label:s.formatMessage(S.Z.roleDescription),validate:[{type:"max-length",threshold:150}]}]},{name:"add-permissions",title:s.formatMessage(S.Z.addPermissions),StepTemplate:v.Z,nextStep:({values:e})=>(0,I.j)("add-permissions",e),fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{title:s.formatMessage(t?S.Z.workspacesAccessTitle:S.Z.inventoryGroupsAccessTitle),name:"inventory-groups-role",StepTemplate:_.Z,nextStep:({values:e})=>(0,I.j)("inventory-groups-role",e),fields:[{component:"plain-text",name:"cost-resources",label:r().createElement("p",{className:"pf-v5-u-mb-md"},s.formatMessage(t?S.Z.applyWorkspacesRolePermission:S.Z.applyInventoryGroupsRolePermission))},{component:"inventory-groups-role",name:"inventory-groups-role",validate:[(e=[])=>e?.every((({groups:e,permission:t})=>e?.length>0&&t))?void 0:s.formatMessage(S.Z.assignAtLeastOneInventoryGroup)]}]},{name:"cost-resources-definition",title:s.formatMessage(S.Z.defineCostResources),nextStep:"review",StepTemplate:L,fields:[{component:"plain-text",name:"text-description",label:r().createElement("p",{className:"pf-v5-u-mb-md"},s.formatMessage(S.Z.applyCostPermissionText))},{component:"cost-resources",name:"cost-resources",validate:[(e=[])=>e?.every((({resources:e})=>e?.length>0))?void 0:s.formatMessage(S.Z.assignAtLeastOneResource)]}]},{name:"review",title:s.formatMessage(S.Z.reviewDetails),buttons:e=>r().createElement(z.Z,{...e,context:ke}),StepTemplate:B,fields:[{component:"review",name:"review"}]}]}]}})(M.current,b))}),[]);const D=()=>d({pathname:X.Z.roles.link,search:(0,g.GT)({page:1,per_page:e.limit,...t})}),F=()=>{E.success||o((0,c.addNotification)({variant:"warning",title:n.formatMessage(S.Z.creatingRoleCanceled),dismissDelay:8e3})),C(!1),d({pathname:X.Z.roles.link,search:(0,g.GT)({page:1,per_page:e.limit,...t})})};return R?r().createElement(ke.Provider,{value:{...E,setWizardError:e=>Z((t=>({...t,error:e}))),setWizardSuccess:e=>Z((t=>({...t,success:e}))),setHideForm:e=>Z((t=>({...t,hideForm:e})))}},r().createElement(Re,{silentErrorString:"focus-trap"},r().createElement(Y.Z,{title:n.formatMessage(S.Z.exitItemCreation,{item:n.formatMessage(S.Z.role).toLocaleLowerCase()}),confirmButtonLabel:n.formatMessage(S.Z.discard),isOpen:x,onClose:()=>{M.current.hidden=!1,C(!1)},onConfirm:F},n.formatMessage(S.Z.discardedInputsWarning))),E.hideForm?E.success?r().createElement(u.e,{title:n.formatMessage(S.Z.createRole),isOpen:!0,onClose:D,steps:[{name:"success",component:r().createElement(ee,{onClose:D}),isFinishedStep:!0}]}):null:r().createElement(m.Z,{schema:R,container:M,subscription:{values:!0},FormTemplate:Se,initialValues:{"role-type":"create"},componentMapper:{...p.ZP,...qe},onSubmit:t=>{const{"role-name":s,"role-description":r,"role-copy-name":n,"role-copy-description":i,"add-permissions-table":l,"inventory-groups-role":c,"cost-resources":m,"role-type":d}=t,p=l.map((e=>e.uuid)),u={applications:[...new Set(l.map((({uuid:e})=>e.split(":")[0])))],description:("create"===d?r:i)||null,name:"create"===d?s:n,access:l.reduce(((e,{uuid:t,requires:a=[]})=>[...e,...[t,...a.filter((e=>!p.includes(e)))].map((e=>{let t;return e.includes("cost-management")?t={key:`cost-management.${e.split(":")[1]}`,operation:"in",value:m?.find((t=>t.permission===e))?.resources}:e.includes("inventory")&&(t={key:"group.id",operation:"in",value:c?.find((t=>t.permission===e))?.groups?.map((e=>e?.id))}),{permission:e,resourceDefinitions:t?[{attributeFilter:t}]:[]}}))]),[])};return o((0,W.fA)(u)).then((()=>{Z((e=>({...e,submitting:!1,success:!0,hideForm:!0}))),o((0,W.Kt)({limit:e.limit,orderBy:a,usesMetaInURL:!0,chrome:y}))})).catch((()=>{Z((e=>({...e,submitting:!1,success:!1,hideForm:!0}))),o((0,W.Kt)({limit:e.limit,orderBy:a,usesMetaInURL:!0,chrome:y})),D()}))},onCancel:e=>{Boolean(e&&e["role-name"]||e["role-description"]||e["copy-base-role"])?(M.current.hidden=!0,C(!0)):F()}})):null};Te.propTypes={pagination:o().shape({limit:o().number.isRequired}).isRequired,filters:o().shape({name:o().string}).isRequired,orderBy:o().string};const we=Te},47625:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s=a(99166);const r=(e,t=250,a={onlyResolvesLast:!1})=>(0,s.Z)(e,t,a)},71338:()=>{},92084:()=>{},99624:()=>{},38299:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/706.183f80c241feecc0089d98d46c43d650.js.map
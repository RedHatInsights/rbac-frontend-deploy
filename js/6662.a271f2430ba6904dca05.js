"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[6662,459],{48701:(e,t,s)=>{s.r(t),s.d(t,{AddRolePermissionWizardContext:()=>Y,default:()=>q,mapperExtension:()=>W});var n=s(28416),r=s.n(n),a=s(86706),o=s(45697),i=s.n(o),l=s(25387),c=s(9820),m=s(51912),p=s(67850),u=s(8340),d=s(45030),E=s(13563),f=s(55594),g=s(9545),v=s(23539),y=s(64380),x=s(72232),h=s(48880),T=s(2550);var Z=s(31055),b=s(95376),S=s(71214),M=s.n(S),C=s(64756),I=s(14289);const F=({currentRoleID:e})=>{const t=(0,l.YB)(),s=(0,a.useDispatch)();return r().createElement(r().Fragment,null,r().createElement(b.EmptyState,null,r().createElement(b.EmptyStateHeader,{titleText:r().createElement(r().Fragment,null,t.formatMessage(T.Z.permissionsAddedSuccessfully)),icon:r().createElement(b.EmptyStateIcon,{color:"green",icon:M()}),headingLevel:"h4"}),r().createElement(b.EmptyStateBody,null),r().createElement(b.EmptyStateFooter,null,r().createElement(C.Z,{to:I.Z["role-detail"].link.replace(":roleId",e)},r().createElement(Z.Button,{onClick:()=>s((0,E.fp)(e))},t.formatMessage(T.Z.exit))))))},k=F;F.propTypes={currentRoleID:i().string.isRequired};var w=s(47108),G=s(64645),D=s(52229),P=s(74503),R=s(15950);const V=({formFields:e})=>{const{submitting:t}=(0,n.useContext)(Y);return t?r().createElement(P.Bullseye,null,r().createElement(R.Spinner,{size:"xl"})):r().createElement("div",{className:"rbac"},[[{...e?.[0]?.[0]}]])};V.propTypes={formFields:i().array};const N=V;var z=s(60167),A=s(2034),B=s(92884),L=s(68539),O=s(84414);const j=e=>r().createElement(p.ZP,{...e,showFormControls:!1}),W={"add-permissions-table":f.Z,"inventory-groups-role":G.Z,"cost-resources":w.Z,review:()=>{const e=(0,l.YB)(),t=(0,h.default)(),{"role-name":s,"role-description":n,"add-permissions-table":a,"resource-definitions":o,"has-cost-resources":i}=t.getState().values;return r().createElement(v.Stack,{hasGutter:!0},r().createElement(v.StackItem,null,r().createElement(y.TextContent,null,r().createElement(x.Title,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-sm"},e.formatMessage(T.Z.reviewDetails)))),r().createElement(v.StackItem,{className:"rbac-l-stack__item-summary"},r().createElement(g.Grid,{hasGutter:!0},r().createElement(g.GridItem,{span:3},r().createElement(y.Text,{className:"pf-v5-c-title",component:y.TextVariants.h6},e.formatMessage(T.Z.roleName))),r().createElement(g.GridItem,{span:9},r().createElement(y.Text,{component:y.TextVariants.p},s)),r().createElement(g.GridItem,{span:3},r().createElement(y.Text,{className:"pf-v5-c-title",component:y.TextVariants.h6},e.formatMessage(T.Z.roleDescription))),r().createElement(g.GridItem,{span:9},r().createElement(y.Text,{component:y.TextVariants.p},n)),r().createElement(g.GridItem,{span:3},r().createElement(y.Text,{className:"pf-v5-c-title",component:y.TextVariants.h6},e.formatMessage(T.Z.addedPermissions))),r().createElement(g.GridItem,{span:9},r().createElement(y.TextContent,{component:y.TextVariants.p},a.map(((e,t)=>r().createElement(y.Text,{key:t}," ",e.uuid," "))))),i&&r().createElement(r().Fragment,null,r().createElement(g.GridItem,{span:3},r().createElement(y.Text,{className:"pf-v5-c-title",component:y.TextVariants.h6},e.formatMessage(T.Z.resourceDefinitions))),r().createElement(g.GridItem,{span:9},r().createElement(y.TextContent,{component:y.TextVariants.p},o.map((({resources:e})=>e.map(((e,t)=>r().createElement(y.Text,{key:t}," ",e," ")))))))))))}},Y=(0,n.createContext)({success:!1,submitting:!1,error:void 0}),_=({role:e})=>{const t=(0,l.YB)(),[s,o]=(0,n.useState)(!1),[i,p]=(0,n.useState)(""),f=(0,O.Z)(),g=(0,a.useDispatch)(),[v,y]=(0,n.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),x=(0,n.useRef)(document.createElement("div")),h=(0,n.useMemo)((()=>(e=>{const t=(0,l.Sn)(),s=(0,l.dp)({locale:z.S,messages:A},t);return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:s.formatMessage(T.Z.addPermissions),container:e,fields:[{name:"add-permissions",title:s.formatMessage(T.Z.addPermissions),StepTemplate:D.Z,nextStep:({values:e})=>(0,B.j)("add-permissions",e),fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{name:"inventory-groups-role",title:s.formatMessage(T.Z.inventoryGroupsAccessTitle),StepTemplate:L.Z,nextStep:({values:e})=>(0,B.j)("inventory-groups-role",e),fields:[{component:"plain-text",name:"text-description",label:r().createElement("p",null,s.formatMessage(T.Z.inventoryGroupsAccessDescription))},{component:"inventory-groups-role",name:"inventory-groups-role",validate:[(e=[])=>e?.every((({groups:e,permission:t})=>e?.length>0&&t))?void 0:s.formatMessage(T.Z.assignAtLeastOneInventoryGroup)]}]},{name:"cost-resources-definition",title:s.formatMessage(T.Z.defineCostResources),nextStep:"review",fields:[{component:"plain-text",name:"text-description",label:r().createElement("p",null,s.formatMessage(T.Z.applyCostPermissionText))},{component:"cost-resources",name:"cost-resources",validate:[(e=[])=>e.every((({resources:e})=>e&&e.length>0))?void 0:s.formatMessage(T.Z.assignAtLeastOneResource)]}]},{name:"review",title:s.formatMessage(T.Z.reviewDetails),StepTemplate:N,fields:[{component:"review",name:"review"}]}]}]}})(x.current)),[]);(0,n.useEffect)((()=>{p(e.uuid)})),(0,n.useEffect)((()=>{x.current.hidden=s}),[s]);const Z=()=>{f(I.Z["role-detail"].link.replace(":roleId",e.uuid))};return r().createElement(Y.Provider,{value:{...v,setWizardError:e=>y((t=>({...t,error:e}))),setWizardSuccess:e=>y((t=>({...t,success:e}))),setHideForm:e=>y((t=>({...t,hideForm:e}))),rolePermissions:e.access}},r().createElement(d.R,{type:t.formatMessage(T.Z.permission).toLocaleLowerCase(),isOpen:s,onModalCancel:()=>o(!1),onModalConfirm:Z}),v.hideForm?v.success?r().createElement(c.e,{title:t.formatMessage(T.Z.addPermissions),isOpen:!0,steps:[{name:"success",component:new k({currentRoleID:i}),isFinishedStep:!0}],onClose:Z}):null:r().createElement(m.Z,{container:x,schema:h,subscription:{values:!0},FormTemplate:j,initialValues:{"role-uuid":e.uuid,"role-type":"create","role-name":e.display_name,"role-description":e.description},componentMapper:{...u.ZP,...W},onSubmit:async t=>{const{"add-permissions-table":s,"cost-resources":n=[],"inventory-groups-role":r=[]}=t,a=[...e.access.map((e=>e.permission)),...s.map((e=>e.uuid))],o={...e,access:[...s.reduce(((e,{uuid:t,requires:s})=>[...e,...[t,...s.filter((e=>!a.includes(e)))].map((e=>({permission:e,resourceDefinitions:[...n,...r]?.find((t=>t.permission===e))?e.includes("inventory")?[{attributeFilter:{key:"group.id",operation:"in",value:r?.find((t=>t.permission===e))?.groups?.map((e=>e?.id))}}]:e.includes("cost-management")?[{attributeFilter:{key:`cost-management.${e.split(":")[1]}`,operation:"in",value:n?.find((t=>t.permission===e)).resources}}]:[]:[]})))]),e.access)],accessCount:e.accessCount+s.length};y((e=>({...e,submitting:!0}))),g((0,E.ul)(i,o)).then((()=>y((e=>({...e,submitting:!1,success:!0,hideForm:!0}))))).catch((()=>{y((e=>({...e,submitting:!1,success:!1,hideForm:!0}))),f(I.Z["role-detail"].link.replace(":roleId",e.uuid))}))},onCancel:e=>{e&&e["add-permissions-table"]?.length>0?o(!0):Z()}}))};_.defaultProps={role:{}},_.propTypes={role:i().object};const q=_}}]);
//# sourceMappingURL=../sourcemaps/6662.c90330a3c0682c3fe344ecbf94b9f4cf.js.map
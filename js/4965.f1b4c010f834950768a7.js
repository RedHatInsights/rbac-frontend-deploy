(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4965,459],{30120:(e,t,o)=>{"use strict";o.d(t,{a:()=>i});var s=o(65353),r=o(28416),a=o(62165),n=o(75587);const i=e=>{var{id:t="",children:o=null,className:i="",isOpen:l=!1,"aria-label":c="Actions",parentRef:m=null,getMenuRef:p=null,isActive:d=!1,isPlain:u=!1,isDisabled:g=!1,bubbleEvent:f=!1,onToggle:b=(()=>{}),ref:h}=e,v=(0,s.__rest)(e,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return r.createElement(n.Z,Object.assign({id:t,className:i,isOpen:l,"aria-label":c,parentRef:m,getMenuRef:p,isActive:d,isPlain:u,isDisabled:g,onToggle:b,bubbleEvent:f},v),r.createElement(a.default,null))};i.displayName="KebabToggle"},63456:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var s=o(85893),r=o(94184),a=o.n(r),n=o(28416);const i=o.n(n)().createContext("light");var l=function(){return l=Object.assign||function(e){for(var t,o=1,s=arguments.length;o<s;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)};const c=function(e){var t=e.className,o=e.children,r=function(e,t){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(o[s[r]]=e[s[r]])}return o}(e,["className","children"]),n=a()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section");return(0,s.jsx)(i.Consumer,{children:function(e){var t,i;void 0===e&&(e="light");var c=a()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return(0,s.jsx)("section",l({},r,{className:"".concat(n," ").concat(c),"widget-type":"InsightsPageHeader",children:o}))}})}},84414:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var s=o(62012),r=o(64756);const a=e=>{const t=(0,s.useNavigate)();return(o,s)=>t((0,r.n)(o,e),s)}},34391:(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var s=o(28416),r=o.n(s),a=o(25387),n=o(45697),i=o.n(n),l=o(2550),c=o(70214),m=o.n(c),p=o(31055),d=o(94269),u=o(94229),g=o(57043),f=o(23539),b=o(64380);const h=({title:e,text:t,onClose:o,onSubmit:n,isOpen:i,confirmButtonLabel:c,withCheckbox:h})=>{const v=(0,a.YB)(),[E,y]=(0,s.useState)(!1);return r().createElement(u.Modal,{className:"rbac",title:r().createElement("div",null,r().createElement(m(),{className:"ins-m-alert rbac-c__delete-icon"})," ",e),isOpen:i,variant:u.ModalVariant.small,onClose:o,actions:[r().createElement(p.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:h&&!E,variant:"danger",onClick:n},c),r().createElement(p.Button,{key:"cancel",ouiaId:"secondary-cancel-button",variant:"link",onClick:o},v.formatMessage(l.Z.cancel))]},r().createElement(g.Split,{hasGutter:!0},r().createElement(g.SplitItem,{isFilled:!0},r().createElement(f.Stack,{hasGutter:!0},r().createElement(b.TextContent,null,t)))),h?r().createElement(d.Checkbox,{isChecked:E,onChange:()=>y(!E),label:v.formatMessage(l.Z.confirmCheckMessage),id:"remove-modal-check",className:"pf-v5-u-mt-lg"}):null)};h.propTypes={text:i().any,title:i().string,confirmButtonLabel:i().string,onSubmit:i().func,onClose:i().func,isOpen:i().bool,withCheckbox:i().bool},h.defaultProps={withCheckbox:!1};const v=h},82617:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var s=o(28416),r=o.n(s),a=o(45697),n=o.n(a),i=o(62012),l=o(75629),c=o(12849);const m=e=>e?r().createElement(l.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?r().createElement(l.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r().createElement(i.NavLink,{end:!0,to:e.to},e.title)||e.title):r().createElement(c.Vj,{key:t})))):null;m.propTypes={breadcrumbs:n().object};const p=m},2086:(e,t,o)=>{"use strict";o.d(t,{Q:()=>u,y:()=>g});var s=o(28416),r=o.n(s),a=o(45697),n=o.n(a),i=o(64380),l=o(86304),c=o(12849),m=o(82617),p=o(63456),d=o(39173);const u=({children:e,breadcrumbs:t})=>r().createElement(s.Fragment,null,t&&r().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},r().createElement(m.Z,{...t})),r().createElement(p.Z,{className:"rbac-page-header"},e));u.propTypes={children:n().oneOfType([n().arrayOf(n().node),n().node]).isRequired,breadcrumbs:n().array,paddingBottom:n().bool},u.defaultProps={paddingBottom:!1};const g=({title:e,renderTitleTag:t,description:o,children:a})=>r().createElement(s.Fragment,null,r().createElement(l.Flex,null,r().createElement(l.FlexItem,{className:"pf-v5-u-mb-sm"},r().createElement(d.Z,{title:e||r().createElement(c.h2,null),className:"rbac-page-header__title"})),r().createElement(l.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),o&&r().createElement(i.TextContent,{className:"rbac-page-header__description"},"string"==typeof o?r().createElement(i.Text,{component:i.TextVariants.p},o):o),a);g.propTypes={title:n().node,renderTitleTag:n().func,description:n().node,children:n().oneOfType([n().node,n().arrayOf(n().node)])}},16920:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>te});var s=o(28416),r=o.n(s),a=o(45697),n=o.n(a),i=o(25387),l=o(62012),c=o(86706),m=o(31055),p=o(91848),d=o(64380),u=o(85044),g=o(79332),f=o(30120),b=o(39173),h=o(55140),v=o(84414),E=o(13563),y=o(2086),Z=o(77044),k=o(12849),M=o(75614),I=o(29301),R=o(74982),O=o(86379),T=o(1082),_=o(12913),P=o(64756),C=o(97246),L=o(62410),S=o(85564),N=o.n(S),x=o(2550),w=o(14289);const D=(e,t,o,a,n=[])=>o.reduce(((o,{resourceDefinitions:i,permission:l,modified:c})=>{const[m,p,d]=l.split(":");return[...o,{uuid:l,cells:[m,p,d,...e?[(l.includes("cost-management")||l.includes("inventory"))&&i.length>0?r().createElement(s.Fragment,{key:"resource-definitions"},r().createElement(P.Z,{to:w.Z["role-detail-permission"].link.replace(":roleId",t).replace(":permissionId",l)},N()(i.map((e=>e.attributeFilter.value))).length)):r().createElement("span",{className:"rbac-c-text__disabled"},a.formatMessage(x.Z.notApplicable))]:[],r().createElement(s.Fragment,{key:`${m}-modified`},r().createElement(L.Z,{date:c,type:(0,I.mh)(c)}))],selected:Boolean(n?.find((({uuid:e})=>e===l)))}]}),[]),B={pagination:R.he,selectedPermissions:[],showRemoveModal:!1,confirmDelete:()=>null,deleteInfo:{},filters:{applications:[],resources:[],operations:[]},isToggled:!1,resources:[],operations:[]},A="SET_PAGINATION",j="SELECT_PERMISSIONS",F="SHOW_REMOVE_MODAL",G="SUBMIT_REMOVE_MODAL",V="INITIATE_REMOVE_PERMISSION",K="SET_FILTERS",Q="SET_TOGGLED",q="INITIALIZE_ROLE",U={[A]:(e,t)=>({...e,pagination:{...e.pagination,...t}}),[j]:(e,{selection:t})=>({...e,selectedPermissions:t}),[F]:(e,{showRemoveModal:t})=>({...e,showRemoveModal:t}),[G]:e=>({...e,selectedPermissions:[],showRemoveModal:!1}),[V]:(e,{confirmDelete:t,deleteInfo:o})=>({...e,confirmDelete:t,showRemoveModal:!0,deleteInfo:o}),[K]:(e,t)=>({...e,filters:{...e.filters,...t}}),[Q]:e=>({...e,isToggled:!e.isToggled}),[q]:(e,{count:t,...o})=>({...e,...o,pagination:{...e.pagination,count:t}})},W=(e,{type:t,...o})=>U[t]?U[t](e,o):e;var z=o(34391);const H=(e,t,o)=>r().createElement(i._H,{...o?x.Z.permissionsWillNotBeGrantedThroughRole:x.Z.permissionWillNotBeGrantedThroughRole,values:{b:e=>r().createElement("b",null,e),...o?{permissions:e}:{permission:e},role:t.name}}),Y=({cantAddPermissions:e,isLoading:t})=>{const o=(0,i.YB)(),{role:a,isRecordLoading:n}=(0,c.useSelector)((e=>({role:e.roleReducer.selectedRole,isRecordLoading:e.roleReducer.isRecordLoading})),c.shallowEqual),l=(0,v.Z)(),[{pagination:p,selectedPermissions:d,showRemoveModal:u,confirmDelete:g,deleteInfo:f,filters:b,isToggled:h,resources:y,operations:Z},k]=(0,s.useReducer)(W,B),[M,I]=(0,s.useState)(!0),R=(0,c.useDispatch)(),L=[{title:o.formatMessage(x.Z.application)},{title:o.formatMessage(x.Z.resourceType)},{title:o.formatMessage(x.Z.operation)},{title:o.formatMessage(x.Z.resourceDefinitions),transforms:[(0,O.u)({popover:o.formatMessage(x.Z.resourceDefinitionsApplyToCostAndInventory),ariaLabel:o.formatMessage(x.Z.resourceDefinitionsApplyToCostAndInventory)})]},{title:o.formatMessage(x.Z.lastModified),transforms:[(0,T.d)(15)]}],S=e?[""]:["To configure user access to applications,","add at least one permission to this role.",""];(0,s.useEffect)((()=>{if(Object.keys(a||{}).length>0){const{resources:e,operations:t}=Object.entries(a.access.reduce((({resources:e,operations:t},{permission:o})=>{const[,s,r]=o.split(":");return{resources:e.includes(s)?e:[...e,s],operations:t.includes(r)?t:[...t,r]}}),{resources:[],operations:[]})).reduce(((e,[t,o])=>({...e,[t]:o.map((e=>({label:e,value:e})))})),{});k({type:q,resources:e,operations:t,count:a.access?a.access.length:0})}I(a?.access?.find((e=>e.permission.includes("cost-management")||e.permission.includes("inventory"))))}),[a]);const N=a&&a.access?(a.access||[]).filter((({permission:e})=>{const[t,o,s]=e.split(":"),{applications:r,resources:a,operations:n}=b;return(!(r.length>0)||r.includes(t))&&(!(a.length>0)||a.includes(o))&&(!(n.length>0)||n.includes(s))})).map((e=>({uuid:e.permission,...e,modified:a.modified}))):[],U=e=>{const t=e.reduce(((e,t)=>[...e,t.uuid]),[]);return R((0,E.lq)(a,t)).then((()=>{R((0,E.fp)(a.uuid)),k({type:j,selection:[]})}))},Y=e=>e.reduce(((e,t)=>({"":{...e?.[""],[t]:!0}})),{"":{}}),$={label:r().createElement("div",null," ",o.formatMessage(x.Z.noResultsFound)),isDisabled:!0},J={access:[],applications:[],...a},X=Object.values({applications:J.applications,operations:Z,resources:y}).find((e=>e.length>10)),ee=N.slice(p.offset,p.offset+p.limit);return r().createElement("section",{className:"pf-v5-c-page__main-section rbac-c-role__permissions"},u&&r().createElement(z.Z,{text:f.text,title:f.title,isOpen:u,confirmButtonLabel:f.confirmButtonLabel,onClose:()=>k({type:F,showRemoveModal:!1}),onSubmit:()=>{g(),k({type:G})}}),t?r().createElement(_.Z,{rows:p.limit,columns:L.map((e=>e.title))}):r().createElement(C.M,{columns:M?L:L.filter((e=>e.title!==o.formatMessage(x.Z.resourceDefinitions))),rows:D(M,a?.uuid,ee,o,d),actionResolver:a.system?void 0:()=>[{title:o.formatMessage(x.Z.remove),onClick:(e,t,s)=>k({type:V,confirmDelete:()=>U([s]),deleteInfo:{title:o.formatMessage(x.Z.removePermissionQuestion),text:H(s.uuid,a,!1),confirmButtonLabel:o.formatMessage(x.Z.removePermission)}})}],data:ee,filterValue:"",ouiaId:"role-permissions-table",fetchData:({limit:e,offset:t})=>k({type:A,limit:e,offset:t}),isSelectable:!a.system,setCheckedItems:e=>{k({type:j,selection:e(d).map((({uuid:e})=>({uuid:e})))})},checkedRows:d,onShowMore:X?()=>{k({type:Q})}:void 0,setFilterValue:({applications:e,resources:t,operations:o})=>{k({type:K,...e?{applications:e}:b.applications,...t?{resources:t}:b.resources,...o?{operations:o}:b.operations})},toolbarButtons:()=>e?[]:[r().createElement(P.Z,{to:w.Z["role-add-permission"].link.replace(":roleId",a.uuid),key:"role-add-permission",className:"rbac-m-hide-on-sm"},r().createElement(m.Button,{variant:"primary","aria-label":"Add Permission"},o.formatMessage(x.Z.addPermissions))),{label:o.formatMessage(x.Z.addPermission),props:{className:"rbac-m-hide-on-md"},onClick:()=>{l(w.Z["role-add-permission"].link.replace(":roleId",a.uuid))}},{label:o.formatMessage(x.Z.remove),props:{isDisabled:!d.length>0},onClick:()=>{const e=d.length>1;k({type:V,confirmDelete:()=>U([...d]),deleteInfo:{title:o.formatMessage(e?x.Z.removePermissionsQuestion:x.Z.removePermissionQuestion),text:H(e?d.length:d[0].uuid,a,d.length>1),confirmButtonLabel:o.formatMessage(e?x.Z.removePermissions:x.Z.removePermission)}})}}],isLoading:n,pagination:{...p,count:N.length},titlePlural:o.formatMessage(x.Z.permissions),titleSingular:o.formatMessage(x.Z.permission),emptyProps:{title:o.formatMessage(x.Z.noRolePermissions),description:S},filters:[{key:"applications",value:0===b.applications.length?"":b.applications,placeholder:o.formatMessage(x.Z.filterByKey,{key:o.formatMessage(x.Z.application).toLowerCase()}),type:"group",selected:Y(b.applications),groups:[{type:J.applications.length>0?"checkbox":"plain",items:J.applications.length>0?J.applications.slice(0,h?void 0:10).map((e=>({label:e,value:e}))):[$]}]},{key:"resources",value:0===b.resources.length?"":b.resources,placeholder:o.formatMessage(x.Z.filterByKey,{key:o.formatMessage(x.Z.resourceType).toLowerCase()}),type:"group",selected:Y(b.resources),groups:[{type:y.length>0?"checkbox":"plain",items:y.length>0?y.slice(0,h?void 0:10):[$]}]},{key:"operations",value:0===b.operations.length?"":b.operations,placeholder:o.formatMessage(x.Z.filterByKey,{key:o.formatMessage(x.Z.operation).toLowerCase()}),type:"group",selected:Y(b.operations),groups:[{type:Z.length>0?"checkbox":"plain",items:Z.length>0?Z.slice(0,h?void 0:10):[$]}]}],tableId:"role-permissions"}))};Y.propTypes={cantAddPermissions:n().bool,isLoading:n().bool};const $=Y;var J=o(66180),X=o(82617);const ee=({onDelete:e})=>{const t=(0,i.YB)(),o=(0,h.Z)(),a=(0,v.Z)(),[n,O]=(0,s.useState)(!1),[T,_]=(0,s.useState)(!1),{roleId:C,groupId:L}=(0,l.useParams)(),{role:S,group:N,isLoading:D,rolesPagination:B,rolesFilters:A,groupsPagination:j,groupsFilters:F,systemGroupUuid:G}=(0,c.useSelector)((e=>({role:e.roleReducer.selectedRole,isLoading:e.roleReducer.isRecordLoading,...L&&{group:e.groupReducer.selectedGroup},systemGroupUuid:e.groupReducer.systemGroup?.uuid,rolesPagination:e.roleReducer?.roles?.pagination||R.he,rolesFilters:e.roleReducer?.roles?.filters||{},groupsPagination:e.groupReducer?.groups?.pagination||R.he,groupsFilters:e.groupReducer?.groups?.filters||{}})),c.shallowEqual),V=(0,c.useSelector)((e=>{const{roleReducer:{error:t}}=e;return t!==I.VG})),K=(0,c.useSelector)((e=>{const{groupReducer:{error:t}}=e;return t!==I.VG})),Q=(0,c.useDispatch)(),q=()=>{if(Q((0,E.fp)(C)),L)if(L!==M.Cn)Q((0,Z.yi)(L));else{if(G)return Q((0,Z.nV)(G,{})),o.appObjectId(G),()=>o.appObjectId(void 0);Q((0,Z.WD)({chrome:o}))}};(0,s.useEffect)((()=>(q(),o.appObjectId(C),()=>o.appObjectId(void 0))),[C,L,G]),(0,s.useEffect)((()=>{0===S?.accessCount&&""!==S?.external_tenant&&""!==S?.external_role_id&&S?.system&&_(!0)}),[S]);const U=()=>[L?{title:t.formatMessage(x.Z.groups),to:(0,I.zk)((0,P.n)(w.Z.groups.link),j,F)}:{title:t.formatMessage(x.Z.roles),to:(0,I.zk)((0,P.n)(w.Z.roles.link),B,A)},...K&&L&&(L===M.Cn?G:K)?N?[{title:N&&N.name,to:(0,P.n)(w.Z["group-detail-roles"].link).replace(":groupId",L),isLoading:N&&N.loaded}]:[void 0]:K||!L?[]:[{title:t.formatMessage(x.Z.invalidGroup),isActive:!0}],...K||!L?[{title:D?void 0:V?S?.display_name||S?.name:t.formatMessage(x.Z.invalidRole),isActive:!0}]:[]],W=!D&&S?S.display_name||S.name:void 0,z=!D&&S?S.description:void 0,H=[r().createElement(u.h,{component:r().createElement(P.Z,{onClick:()=>O(!1),to:w.Z["role-detail-edit"].link.replace(":roleId",C)},t.formatMessage(x.Z.edit)),key:"edit-role"}),r().createElement(u.h,{component:r().createElement(P.Z,{onClick:e,to:w.Z["role-detail-remove"].link.replace(":roleId",C)},t.formatMessage(x.Z.delete)),className:"rbac-c-role__action",key:"delete-role"})];return r().createElement(s.Fragment,null,!K&&L||!V?r().createElement(s.Fragment,null,r().createElement("section",{className:"pf-v5-c-page__main-breadcrumb pf-v5-u-pb-md"},r().createElement(X.Z,{...U()})),r().createElement(J.Z,{title:(K?"Role":"Group")+" not found",description:[`${K?"Role":"Group"} with ID ${K?C:L} does not exist.`],actions:[r().createElement(m.Button,{key:"back-button",className:"pf-v5-u-mt-xl",ouiaId:"back-button",variant:"primary","aria-label":"Back to previous page",onClick:()=>a(-1)},t.formatMessage(x.Z.backToPreviousPage))]})):r().createElement(s.Fragment,null,r().createElement(y.Q,{breadcrumbs:U()},r().createElement(p.Level,null,r().createElement(p.LevelItem,null,r().createElement(b.Z,{title:W||r().createElement(k.h2,null),className:"rbac-page-header__title"})),!D&&S&&!S.system&&r().createElement(p.LevelItem,null,r().createElement(g.L,{ouiaId:"role-title-actions-dropdown",toggle:r().createElement(f.a,{onToggle:(e,t)=>O(t),id:"role-actions-dropdown"}),isOpen:n,isPlain:!0,position:"right",dropdownItems:H}))),z&&r().createElement(d.TextContent,{className:"rbac-page-header__description"},r().createElement(d.Text,{component:"p"},z))),r().createElement($,{cantAddPermissions:T,isLoading:D||!S}),r().createElement(s.Suspense,null,r().createElement(l.Outlet,{context:{[w.Z["role-detail-remove"].path]:{afterSubmit:()=>{Q((0,E.Kt)({...B,offset:0,filters:A,usesMetaInURL:!0,chrome:o}))},cancelRoute:w.Z["role-detail"].link.replace(":roleId",C),submitRoute:(0,I.zk)(w.Z.roles.link,{...B,offset:0},A),isLoading:D},[w.Z["role-detail-edit"].path]:{afterSubmit:q,cancelRoute:w.Z["role-detail"].link.replace(":roleId",C),isLoading:D},[w.Z["role-add-permission"].path]:{isOpen:!0,role:S}}}))))};ee.propTypes={onDelete:n().func};const te=ee},30187:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4965.5a7b3bad8191d70260d7ee1058bf7759.js.map
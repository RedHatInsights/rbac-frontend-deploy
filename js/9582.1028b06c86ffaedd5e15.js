(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9582,1289],{96887:(e,t,s)=>{"use strict";s.d(t,{Df:()=>n,Tb:()=>c,sL:()=>p});var a=s(35970),l=s.n(a),r=s(19872);const o=(0,r.E0)(),i=(0,r.fo)(),n=async({name:e,perPage:t,page:s,options:a}={})=>await o.apiResourceTypeGetResourceTypeGroupsList(e,t,s,a),c=async e=>await i.apiGroupGetGroupsById(e),p=e=>e?l()(e.map((e=>e.attributeFilter.value))):[]},44419:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(49634),l=s(58471);const r=e=>{const t=(0,a.useNavigate)();return(s,a)=>t((0,l.o)(s,e),a)}},54073:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var a=s(93345),l=s.n(a),r=s(55086),o=s(31971),i=s.n(o);const n=({title:e,icon:t,description:s,actions:a,...o})=>l().createElement(r.EmptyState,{variant:r.EmptyStateVariant.sm,...o},l().createElement(r.EmptyStateHeader,{titleText:l().createElement(l().Fragment,null,e),icon:l().createElement(r.EmptyStateIcon,{icon:t||i()}),headingLevel:"h4"}),l().createElement(r.EmptyStateBody,{className:"pf-v5-u-mb-md"},s.map(((e,t)=>l().createElement(l().Fragment,{key:t},e," ",l().createElement("br",null))))),l().createElement(r.EmptyStateFooter,null,a))},38694:(e,t,s)=>{"use strict";s.d(t,{Z:()=>C});var a=s(93345),l=s.n(a),r=s(8604),o=s(5556),i=s.n(o),n=s(40335),c=s(63219),p=s(73683),u=s(68877),m=s(1104),d=s(97681),f=s(54377),g=s(47143),y=s(79994),h=s(58510),b=s(55086),v=s(31137),E=s.n(v),A=s(42134),k=s(23995),S=s(54073);const C=({className:e,isCompact:t,borders:s,columns:o,rows:i,toolbarButtons:v,data:C,actionResolver:w,areActionsDisabled:M,routes:T,titlePlural:F,titleSingular:x,pagination:R,paginationProps:O,filterValue:P,isLoading:B,emptyFilters:L,setFilterValue:D,checkedRows:I,isSelectable:N,isRowSelectable:j,fetchData:G,setCheckedItems:V,emptyProps:q,filterPlaceholder:$,rowWrapper:_,filters:z,isFilterable:W,onShowMore:H,showMoreTitle:K,onFilter:U,onChange:Z,value:Q,sortBy:X,onSort:J,isExpandable:Y,onExpand:ee,hideFilterChips:te,hideHeader:se,noData:ae,noDataDescription:le,ouiaId:re,tableId:oe,containerRef:ie,textFilterRef:ne,toolbarChildren:ce})=>{const pe=(0,r.tz)(),ue=(0,c.useFlag)("platform.rbac.itless");return l().createElement("div",{className:e},T(),!B&&0===i?.length&&0===P?.length&&z.every((({value:e})=>!e))?l().createElement(S.A,{title:pe.formatMessage(n.A.configureItems,{items:F}),icon:E(),description:[pe.formatMessage(n.A.toConfigureUserAccess),pe.formatMessage(n.A.createAtLeastOneItem,{item:x})],actions:v()[0],...q}):(()=>{const e=`${"desc"===X?.direction?"-":""}${o[X?.index]?.key}`;return l().createElement(a.Fragment,null,l().createElement(k.Ay,{isSelectable:N,isRowSelectable:j,checkedRows:I,setCheckedItems:V,isLoading:B||ae,data:C,titleSingular:x,filterValue:P,setFilterValue:D,sortBy:e,pagination:R,paginationProps:O,fetchData:G,toolbarButtons:v,filterPlaceholder:$,filters:z,isFilterable:W,onShowMore:H,showMoreTitle:K,onFilter:U,onChange:Z,value:Q,hideFilterChips:te,tableId:oe,containerRef:ie,textFilterRef:ne,toolbarChildren:ce}),B?l().createElement(g.A,{variant:t?p.a.compact:void 0,rows:R?.limit,columns:o.map((e=>e.title))}):l().createElement(u.X,{canSelectAll:!1,"aria-label":`${F.toLowerCase()} table`,variant:t?p.a.compact:null,borders:s,...N&&i?.length>0&&{onSelect:(e,t,s,{uuid:a,cells:[l],requires:r})=>V((0,A.vH)([{uuid:a,name:l,requires:r,...ue&&{username:C[s]?.username}}],t))},...Y&&{onExpand:ee},rows:i?.length>0?i:[{fullWidth:!0,cells:[{title:l().createElement(S.A,{title:pe.formatMessage(n.A.noMatchingItemsFound,{items:F}),description:ae&&le?le:[pe.formatMessage(n.A.filterMatchesNoItems,{items:F}),pe.formatMessage(n.A.tryChangingFilters)],actions:ae&&le?void 0:[l().createElement(b.EmptyStateActions,{key:"clear-filters"},l().createElement(y.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{D(L),G({...R,offset:0,...L||{name:""}})}},pe.formatMessage(n.A.clearAllFilters)))]}),props:{colSpan:o.length}}]}],cells:o,...i?.length>0&&{actionResolver:w},className:0==i?.length?"ins-c-table-empty-state":"",areActionsDisabled:M,rowWrapper:_,sortBy:X,ouiaId:re,onSort:(e,t,s,a)=>J(e,t,s,a)},!se&&l().createElement(m.A,null),l().createElement(d.B,null)),!R.noBottom&&l().createElement(f.A,null,!B&&l().createElement(h.Pagination,{...(0,k.WM)(R,G,P,X,O),variant:"bottom",dropDirection:"up"})))})())};C.propTypes={...k.Ay.propTypes,sortBy:i().shape({directions:i().string,index:i().number}),className:i().string,rowWrapper:i().any,isCompact:i().bool,isRowSelectable:i().func,borders:i().bool,emptyFilters:i().object,checkedRows:i().array,columns:i().array.isRequired,rows:i().array.isRequired,titlePlural:i().string,routes:i().func,actionResolver:i().func,areActionsDisabled:i().func,pagination:i().shape({noBottom:i().bool,limit:i().number,offset:i().number,count:i().number}),paginationProps:i().shape({toggleTemplate:i().func,isCompact:i().bool}),isExpandable:i().bool,onExpand:i().func,onSort:i().func,containerRef:i().node,noData:i().bool,hideFilterChips:i().bool,hideHeader:i().bool,noDataDescription:i().arrayOf(i().node),filters:i().array,tableId:i().string.isRequired,toolbarChildren:i().func},C.defaultProps={...k.Ay.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1,toolbarChildren:()=>null}},23995:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>b,WM:()=>d});var a=s(93345),l=s.n(a),r=s(44344),o=s(8604),i=s(5556),n=s.n(i),c=s(40335),p=s(2543),u=s(42134),m=s(61361);const d=(e={},t,s="",a="",l)=>({...l,itemCount:e.count,perPage:e.limit,page:(0,m.mq)(e.limit,e.offset),onSetPage:(l,r)=>{t({...e,offset:(0,m.gj)(r,e.limit),name:s,orderBy:a})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,l)=>{t({offset:0,limit:l,name:s,orderBy:a})}}),f=(e,t=[],s=()=>{},a=[],l,r=()=>!0)=>{const i=(0,o.tz)();return{count:t.length,items:[{title:i.formatMessage(c.A.selectNone),onClick:()=>{s((()=>[]))}},{...!e&&a&&a.length>0?{title:i.formatMessage(c.A.selectPage,{length:a.filter(r).length}),onClick:()=>{s((0,u.vH)(a,!0))}}:{}}],checked:(0,u.A9)(a,t,r),onSelect:t=>{!e&&s((0,u.vH)(a,t))},id:l}},g=(e,t=()=>{},s=()=>{},a="",l={},r="",i,n,m,d,f,g,y,h,b,v,E)=>{const A=(0,o.tz)();return{onChange:h,value:b,items:[...m&&m.length>0?m.map((({key:r,label:o,value:i,selected:n,placeholder:h,type:b="text",groups:E,items:k,innerRef:S})=>({label:o||(0,u.tt)(r),type:b??"text",filterValues:{innerRef:S,id:`filter-by-${r}`,key:`filter-by-${r}`,placeholder:h||A.formatMessage(c.A.filterByKey,{key:r}),value:i,selected:n,..."text"!==b?{isFilterable:d,onShowMore:f,showMoreTitle:g,onFilter:y}:{},groups:E,items:k,onChange:(e,o)=>{const i="string"==typeof o||Array.isArray(o)?o:Object.keys((0,p.pickBy)(o[""],(e=>e)));t({...a,...l,offset:0,[r]:i}),(0,u.sq)((()=>s({...l,offset:0,orderBy:v,...m.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[r]:i}))).then((e=>(S?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,u.tt)(i||r),type:"text",filterValues:{innerRef:E,id:"filter-by-string",key:"filter-by-string",placeholder:A.formatMessage(c.A.filterByKey,{key:i||r}),value:a,onChange:(e,a)=>{t({...l,offset:0,name:a}),(0,u.sq)((()=>s({...l,offset:0,name:a,orderBy:v}))).then((e=>(E?.current?.focus(),e)))},isDisabled:e}}],...n||[]]}},y=(e="",t,s={},a=()=>{},l=()=>{},r)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,u.tt)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[o],i)=>{const n=(e,t,s)=>i?"group"===t||"checkbox"===t?[]:"":s!==o.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==o.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:s,type:a})=>({...e,[t]:n(s,a,t)})),{});a({...s,offset:0,name:"",...c}),l({...s,offset:0,orderBy:r,name:"",...c})}}),h=({isSelectable:e,isRowSelectable:t,checkedRows:s,setCheckedItems:a,isLoading:o,data:i,titleSingular:n,filterValue:c,setFilterValue:p,pagination:u,paginationProps:m,fetchData:h,sortBy:b,toolbarButtons:v,filterPlaceholder:E,filterItems:A,filters:k,isFilterable:S,onShowMore:C,showMoreTitle:w,onFilter:M,onChange:T,value:F,hideFilterChips:x,tableId:R,textFilterRef:O,toolbarChildren:P})=>l().createElement(r.A,{...e&&{bulkSelect:f(o,s,a,i,R,t)},filterConfig:g(o,p,h,c,u,n,E,A,k,S,C,w,M,T,F,b,O),actionsConfig:{actions:v()},...!o&&{pagination:d(u,h,c,b,m)},...(c.length>0||k&&k.length>0)&&!x&&{activeFiltersConfig:y(c,k,u,p,h,b)}},P());h.propTypes={isSelectable:n().bool,isRowSelectable:n().func,checkedRows:n().array,setCheckedItems:n().func,isLoading:n().bool,data:n().array,titleSingular:n().string,filterValue:n().oneOfType([n().array,n().string]),setFilterValue:n().func,filters:n().arrayOf(n().shape({value:n().oneOfType([n().string,n().number,n().array]),key:n().string,placeholder:n().string})),isFilterable:n().bool,onShowMore:n().func,showMoreTitle:n().string,onFilter:n().func,onChange:n().func,value:n().any,pagination:n().shape({limit:n().number,offset:n().number,count:n().number}),paginationProps:n().shape({toggleTemplate:n().func,isCompact:n().bool}),sortBy:n().string,filterItems:n().arrayOf(n().object),filterPlaceholder:n().string,isCollapsible:n().bool,fetchData:n().func.isRequired,toolbarButtons:n().func,hideFilterChips:n().bool,tableId:n().string,textFilterRef:n().object,toolbarChildren:n().func},h.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:m.L6,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1,toolbarChildren:()=>null};const b=h},41912:(e,t,s)=>{"use strict";s.d(t,{$:()=>n,D:()=>i});var a=s(71966);const l=(0,s(19872)._F)();async function r(e){return await l.getResourceTypes(e)}async function o(e){return await l.getResource(e)}const i=e=>({type:a.rh,payload:r(e)}),n=e=>({type:a.iq,payload:o(e)})},2224:(e,t,s)=>{"use strict";s.d(t,{N:()=>r,h:()=>o});var a=s(71966),l=s(96887);const r=(e,t)=>({type:a.fp,meta:{permissions:e,config:t},payload:l.Df(t)}),o=e=>({type:a.K8,meta:{groupsIds:e},payload:l.Tb(e.filter((e=>e?.length>0)))})},1621:(e,t,s)=>{"use strict";s.d(t,{A:()=>b});var a=s(93345),l=s.n(a),r=s(5556),o=s.n(r),i=s(33538),n=s(40748),c=s(7248),p=s(79994),u=s(46428),m=s(62448),d=s(81558),f=s(53785),g=s(8604),y=s(40335);const h=({formFields:e})=>{const t=(0,d.default)(),[s,r]=(0,a.useState)(t.getState().values["add-permissions-table"]||[]),[o,h]=(0,a.useState)(!1),b=t.getState().values["not-allowed-permissions"],v=(0,g.tz)(),E=t.getState().values?.["copy-base-role"]?.applications?.filter((e=>!s?.find((({uuid:t})=>t.includes(e)))))||[],A=e[0][0];return l().createElement("div",{className:"rbac"},s.length>0?l().createElement("div",{className:"rbac-c-selected-chips"},l().createElement(i.ChipGroup,{categoryName:v.formatMessage(y.A.selectedPermissions)},s.reduce(((e,t)=>[t,...e]),[]).map((({uuid:e})=>l().createElement(i.Chip,{key:e,color:"blue",isTruncated:!0,onClick:()=>r(s.filter((t=>t.uuid!==e)))},e))))):null,l().createElement(c.Title,{headingLevel:"h1",size:"xl",className:"rbac-c-add-permission-title"},v.formatMessage(y.A.addPermissions)),l().createElement(n.TextContent,null,l().createElement(n.Text,null,v.formatMessage(y.A.selectPermissionsForRole),0!==E.length&&l().createElement(u.Popover,{headerContent:v.formatMessage(y.A.onlyGranularPermissions),bodyContent:v.formatMessage(y.A.noWildcardPermissions)},l().createElement(p.Button,{variant:"link"},v.formatMessage(y.A.whyNotSeeingAllPermissions)," ",l().createElement(f.Ay,null))))),b?.length>0&&!o?l().createElement(m.Alert,{variant:"custom",isInline:!0,title:`${v.formatMessage(y.A.followingPermissionsCannotBeAdded)} ${b.join(", ")}`,actionClose:l().createElement(m.AlertActionCloseButton,{onClose:()=>h(!0)})}):null,[[{...A,props:{...A.props,selectedPermissions:s,setSelectedPermissions:r}}]])};h.propTypes={formFields:o().array};const b=h},11882:(e,t,s)=>{"use strict";s.d(t,{A:()=>R});var a=s(93345),l=s.n(a),r=s(5556),o=s.n(r),i=s(69733),n=s(20881),c=s(11522),p=s(81558),u=s(11152),m=s(75614),d=s(38694),f=s(71966);const g=(0,s(19872).eE)(),y=["inventory:staleness"];async function h(e,t,s,a,l,r,o,i,n,c,p){const u=await g.listPermissions(e,t,s,a,l,r,o,i,n,c,p);return{...u,data:u.data.filter((({permission:e})=>!y.some((t=>e.includes(t)))))}}async function b(e,t,s,a,l,r,o,i){return await g.listPermissionOptions(e,t,s,a,l,r,void 0,o,i)}const v={application:f.nl,resource_type:f.xR,verb:f.iB};var E=s(41912),A=s(8582),k=s(26956),S=s(30133);const C=({row:e,...t})=>e.disableSelection?l().createElement(k.Tooltip,{content:e.disabledContent,exitDelay:1500,entryDelay:1500},l().createElement(S.S,{className:"rbac-c-disabled-row",row:e,...t})):l().createElement(S.S,{row:e,...t});C.propTypes={props:o().object,row:o().object};var w=s(2543),M=s(8604),T=s(40335);const F=({permissionReducer:{permission:e,isLoading:t,options:{application:s,operation:a,resource:l},expandSplats:r,isLoadingExpandSplats:o},roleReducer:{isRecordLoading:i,selectedRole:n},costReducer:{resourceTypes:c}})=>({permissions:e.data.map((({application:e,resource_type:t,verb:s,permission:a,requires:l}={})=>({application:e,resource:t,operation:s,uuid:a,requires:l}))),pagination:e.meta,isLoading:t||i,baseRole:n,applicationOptions:s.data.filter((e=>"*"!==e)),resourceOptions:l.data.filter((e=>"*"!==e)),operationOptions:a.data.filter((e=>"*"!==e)),expandedPermissions:r.data.map((({permission:e})=>e)),isLoadingExpandSplats:o,resourceTypes:c.data}),x=({selectedPermissions:e,setSelectedPermissions:t,...s})=>{const[r,o]=(0,a.useState)(null),{auth:g}=(0,n.A)(),y=(0,i.useDispatch)(),k=(0,M.tz)(),{hasAccess:S}=(0,m.Ay)("cost-management",["cost-management:*:*"]),{hasAccess:x}=(0,m.Ay)("rbac",["rbac:*:*"]),R=[{title:k.formatMessage(T.A.application)},{title:k.formatMessage(T.A.resourceType)},{title:k.formatMessage(T.A.operation)}];(0,a.useEffect)((()=>{g&&(async()=>{const{identity:{user:e}}=await g.getUser();o(e.is_org_admin)})()}),[g]);const O=e=>y((({limit:e,offset:t,orderBy:s,application:a,resourceType:l,verb:r,permission:o,exclude_globals:i=!0,exclude_roles:n,allowed_only:c,options:p})=>({type:f.qD,payload:h(e,t,s,a,l,r,o,i,n,c,p)}))({...e,...U?{exclude_roles:U}:{},allowed_only:!0})),P=e=>y((({field:e,limit:t,offset:s,application:a,resourceType:l,verb:r,allowedOnly:o,options:i})=>({type:v[e],payload:b(e,t,s,a,l,r,o,i)}))({...e,allowedOnly:!0})),{permissions:B,isLoading:L,pagination:D,baseRole:I,applicationOptions:N,resourceOptions:j,operationOptions:G,expandedPermissions:V,isLoadingExpandSplats:q,resourceTypes:$}=(0,i.useSelector)(F,i.shallowEqual),{input:_}=(0,c.A)(s),z=(0,p.default)(),[W,H]=(0,a.useState)({applications:[],resources:[],operations:[]}),K=z.getState().values["role-type"],U=z.getState().values["role-uuid"],[Z,Q]=(0,a.useState)(!1),[X,J]=(0,a.useState)(""),[Y,ee]=(0,a.useState)(),te=(0,a.useMemo)((()=>r||(x??!1)),[x,r]),se=e=>$.find((t=>t.value===e.split(":")?.[1])),ae=(0,a.useCallback)((0,u.A)((({applications:e,resources:t,operations:s})=>P({field:"application",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]),le=(0,a.useCallback)((0,u.A)((({applications:e,resources:t,operations:s})=>P({field:"resource_type",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]),re=(0,a.useCallback)((0,u.A)((({applications:e,resources:t,operations:s})=>P({field:"verb",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]);(0,a.useEffect)((()=>{const e=z.getState().values["copy-base-role"]?.uuid;return"copy"===K&&e&&y((0,A.rM)(e)),z.change("has-cost-resources",!1),O(D),P({field:"application",limit:50}),P({field:"resource_type",limit:50}),P({field:"verb",limit:50}),()=>y({type:f.ZD,payload:{data:[]}})}),[]),(0,a.useEffect)((()=>{S&&y((0,E.D)())}),[S]),(0,a.useEffect)((()=>{le(W),re(W)}),[W.applications]),(0,a.useEffect)((()=>{ae(W),re(W)}),[W.resources]),(0,a.useEffect)((()=>{ae(W),le(W)}),[W.operations]),(0,a.useEffect)((()=>{_.onChange(e)}),[e]),(0,a.useEffect)((()=>{if(!I||"copy"!==K||z.getState().values["base-permissions-loaded"]||e.length>0||z.getState().values["copy-base-role"]?.uuid!==I?.uuid||q||L)return;let s=[];const a=I?.access.filter((e=>!!N.includes(e?.permission?.split(":")[0])||(s.push(e),!1)))||[];if(z.change("not-allowed-permissions",s.map((({permission:e})=>e))),0===V.length&&void 0===q){const e=[...new Set(a.map((({permission:e})=>e.split(":")[0])))];y((({limit:e=1e3,offset:t=0,orderBy:s,application:a,resourceType:l,verb:r,permission:o,exclude_globals:i=!0,options:n})=>({type:f.Fp,payload:h(e,t,s,a,l,r,o,i,n)}))({application:e.join()}))}else{const e=a.map((({permission:e})=>e.replace("*",".*")));t((()=>V.filter((e=>"cost-management"!==e.split(":")[0]||0!==(se(e)||{count:0}).count)).filter((t=>e.some((e=>t.match(e))))).map((e=>({uuid:e}))))),z.change("base-permissions-loaded",!0)}}),[B,I]);const oe=e=>e.reduce(((e,t)=>({"":{...e?.[""],[t]:!0}})),{"":{}}),ie={applications:[...N].filter((e=>e.includes(X))).map((e=>({label:e,value:e}))),resources:[...j].filter((e=>e.includes(X))).map((e=>({label:e,value:e}))),operations:[...G].filter((e=>e.includes(X))).map((e=>({label:e,value:e})))},ne={label:l().createElement("div",null,k.formatMessage(T.A.noResultsFound)),isDisabled:!0},ce=ie[Object.keys(ie)[Y||0]].length>10;return l().createElement("div",{className:"rbac-c-permissions-table"},l().createElement(d.Z,{columns:R,isSelectable:!0,isCompact:!0,borders:!1,rows:(t=>t.map((({application:t,resource:s,operation:a,uuid:r,requires:o})=>({uuid:`${t}:${s}:${a}`,requires:o,cells:[{title:t},s,a],selected:Boolean(e&&e.find((e=>e.uuid===r))),disableSelection:"cost-management"===t&&(0===(se(r)||{count:0}).count||!S)||"inventory"===t&&!te,disabledContent:"cost-management"===t?l().createElement("div",null,k.formatMessage(S?T.A.configureResourcesForPermission:T.A.noCostManagementPermissions)," ",S?l().createElement("a",{href:"./settings/sources"},k.formatMessage(T.A.configureCostSources)):null):l().createElement("div",null,k.formatMessage(T.A.noRbacPermissions))}))))(B),data:B,filterValue:"",noData:0===B?.length,noDataDescription:[k.formatMessage(T.A.permissionNotDisplayedDescription)],fetchData:({limit:e,offset:t,applications:s,resources:a,operations:l})=>{O({limit:e,offset:t,application:(s||W.applications).join(),resourceType:(a||W.resources).join(),verb:(l||W.operations).join()})},setFilterValue:({applications:e,resources:t,operations:s})=>{H({...W,...e?{applications:e}:W.applications,...t?{resources:t}:W.resources,...s?{operations:s}:W.operations})},isLoading:L||q,pagination:{...D,count:D.count},checkedRows:e,setCheckedItems:s=>{const a=s(e).filter((({uuid:e,application:t})=>"cost-management"!==t||se(e)?.count>0)).map((({uuid:e,requires:t})=>({uuid:e,requires:t})));t((0,w.isEqual)(a,e)?[]:a)},titlePlural:k.formatMessage(T.A.permissions).toLowerCase(),titleSingular:k.formatMessage(T.A.permission).toLowerCase(),showMoreTitle:k.formatMessage(Z?T.A.seeLess:T.A.seeMore),onFilter:e=>J(e),onShowMore:ce?()=>{Q((()=>!Z))}:void 0,onChange:(e,t)=>{J(""),ee(t)},value:Y,filters:[{key:"applications",value:W.applications,placeholder:k.formatMessage(T.A.filterByKey,{key:k.formatMessage(T.A.application).toLowerCase()}),type:"group",selected:oe(W.applications),groups:[{type:ie.applications.length>0?"checkbox":"plain",items:ie.applications.length>0?[...ie.applications].slice(0,Z?void 0:10):[ne]}]},{key:"resources",value:W.resources,placeholder:k.formatMessage(T.A.filterByKey,{key:k.formatMessage(T.A.resourceType).toLowerCase()}),type:"group",selected:oe(W.resources),groups:[{type:ie.resources.length>0?"checkbox":"plain",items:ie.resources.length>0?[...ie.resources].slice(0,Z?void 0:10):[ne]}]},{key:"operations",value:W.operations,placeholder:k.formatMessage(T.A.filterByKey,{key:k.formatMessage(T.A.operation).toLowerCase()}),type:"group",selected:oe(W.operations),groups:[{type:ie.operations.length>0?"checkbox":"plain",items:ie.operations.length>0?[...ie.operations].slice(0,Z?void 0:10):[ne]}]}],isFilterable:!0,rowWrapper:C,tableId:"add-role-permissions",...s}))};x.propTypes={selectedPermissions:o().array,setSelectedPermissions:o().func};const R=x},79255:(e,t,s)=>{"use strict";s.d(t,{A:()=>E});var a=s(93345),l=s.n(a),r=s(69733),o=s(76260),i=s(40748),n=s(13614),c=s(26956),p=s(5029),u=s(23060),m=s(18960),d=s(11522),f=s(81558),g=s(41912),y=s(8604),h=s(40335);const b=({costReducer:{resourceTypes:e,isLoading:t,loadingResources:s,resources:a}})=>({resourceTypes:e.data,resources:a,isLoading:t,isLoadingResources:s>0}),v=(e,t)=>{const s=e[t.key];switch(t.type){case"toggle":return{...e,[t.key]:{...s,isOpen:!s.isOpen}};case"select":return{...e,[t.key]:{...s,selected:s.selected.includes(t.selection)?s.selected.filter((e=>e!==t.selection)):[...s.selected,t.selection]}};case"selectAll":return{...e,[t.key]:{...s,selected:s.options.map((e=>e.value))}};case"clear":return{...e,[t.key]:{...s,selected:[]}};case"setOptions":return{...e,[t.key]:{...s,options:t.options,filteredOptions:t.options}};case"setFilter":return{...e,[t.key]:{...s,filteredOptions:s.options.filter((({value:e})=>e.includes(t.filtervalue)))}};default:return e}},E=e=>{const t=(0,y.tz)(),s=(0,r.useDispatch)(),{resourceTypes:E,isLoading:A,isLoadingResources:k,resources:S}=(0,r.useSelector)(b,r.shallowEqual),{input:C}=(0,d.A)(e),w=(0,f.default)(),M=w.getState().values["add-permissions-table"].filter((({uuid:e})=>e.split(":")[0].includes("cost-management"))),[T,F]=(0,a.useReducer)(v,M.reduce(((e,t)=>({...e,[t.uuid]:{selected:[],options:[],filteredOptions:[],isOpen:!1}})),{}));return(0,a.useEffect)((()=>{(w.getState().values["resource-definitions"]||[]).map((({permission:e,resources:t})=>t.map((t=>M.find((t=>t?.uuid===e))&&F({type:"select",selection:t,key:e}))))),s((0,g.D)(undefined)),w.change("has-cost-resources",!0)}),[]),(0,a.useEffect)((()=>{A||[...new Set(M.map((e=>E.find((t=>t.value===e.uuid.split(":")?.[1]))?.path)))].filter((e=>e)).map((e=>{return t=e,s((0,g.$)(t));var t}))}),[E]),(0,a.useEffect)((()=>{k||M.map((e=>{return F({type:"setOptions",key:e.uuid,options:S[(t=e.uuid,E.find((e=>e.value===t.split(":")?.[1]))?.path.split("/")?.[5])]||[]});var t}))}),[k]),(0,a.useEffect)((()=>{const e=Object.entries(T).map((([e,t])=>({permission:e,resources:t.selected})));C.onChange(e),w.change("resource-definitions",e)}),[T]),l().createElement(o.Grid,{hasGutter:!0},l().createElement(o.GridItem,{md:4,className:"rbac-m-hide-on-sm"},l().createElement(i.Text,{component:i.TextVariants.h4,className:"rbac-bold-text"},t.formatMessage(h.A.permissions))),l().createElement(o.GridItem,{md:8,className:"rbac-m-hide-on-sm"},l().createElement(i.Text,{component:i.TextVariants.h4,className:"rbac-bold-text"},t.formatMessage(h.A.resourceDefinitions))),M.map((({uuid:e})=>{const s=T[e].filteredOptions;return l().createElement(l().Fragment,null,l().createElement(o.GridItem,{md:4,sm:12},l().createElement(c.Tooltip,{content:l().createElement("div",null,e)},l().createElement(n.FormGroup,{label:e.replace(/^cost-management:/,""),isRequired:!0}))),l().createElement(o.GridItem,{md:8,sm:12},l().createElement(p.l,{className:"rbac-m-resource-type-select",variant:u.ez.checkbox,typeAheadAriaLabel:t.formatMessage(h.A.selectState),onToggle:(t,s)=>{F({type:"setFilter",key:e,filtervalue:""}),((e,t)=>{F({type:"toggle",key:e,isOpen:t})})(e,s)},onSelect:(a,l)=>{((e,t,s,a)=>{F(s?{type:"selectAll",selection:t,key:a}:{type:"select",selection:t,key:a})})(0,l,l===t.formatMessage(h.A.selectAll,{length:s.length}),e)},onClear:()=>F({type:"clear",key:e}),selections:T[e].selected,isOpen:T[e].isOpen,onFilter:t=>t&&F({type:"setFilter",key:e,filtervalue:t.target.value}),"aria-labelledby":e,placeholderText:t.formatMessage(h.A.selectResources),hasInlineFilter:!0},[l().createElement(m.O,{key:0,value:t.formatMessage(h.A.selectAll,{length:s.length})}),...s.map(((e,t)=>l().createElement(m.O,{key:t+1,value:e.value})))])))})))}},72245:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var a=s(93345),l=s.n(a),r=s(5556),o=s.n(r),i=s(7248),n=s(8604),c=s(40335),p=s(63219);const u=({formFields:e})=>{const t=(0,n.tz)(),s=(0,p.useFlag)("platform.rbac.groups-to-workspaces-rename");return l().createElement("div",{className:"rbac"},l().createElement(i.Title,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-lg"},t.formatMessage(s?c.A.workspacesAccessTitle:c.A.inventoryGroupsAccessTitle)),e)};u.propTypes={formFields:o().array};const m=u},18390:(e,t,s)=>{"use strict";s.d(t,{A:()=>x});var a=s(93345),l=s.n(a),r=s(79994),o=s(76260),i=s(40748),n=s(13614),c=s(26956),p=s(52892),u=s(80684),m=s(72494),d=s(4514),f=s(29068),g=s(97028),y=s(33538),h=s(39523),b=s.n(h),v=s(69733),E=s(11522),A=s(81558),k=s(8604),S=s(2224),C=s(42134),w=s(40335),M=s(63219);const T=({inventoryReducer:{resourceTypes:e,total:t,isLoading:s}})=>({resourceTypes:e,totalCount:t,isLoading:s}),F=(e,t)=>{const s=e[t.key];switch(t.type){case"toggle":return{...e,[t.key]:{...s,isOpen:t.isOpen,filterValue:t.filterValue??s.filterValue,page:t.page??s.page}};case"select":return s.selected.some((e=>e?.id===t.processedSelection?.id))?{...e,[t.key]:{...s,selected:s.selected.filter((e=>e.id!==t.processedSelection?.id))}}:void 0!==t.processedSelection?.id&&void 0!==t.processedSelection?.name?{...e,[t.key]:{...s,selected:[...s.selected,t.processedSelection]}}:e;case"copyToAll":{const s=e[t.permissions[0]].selected;return{...e,...t.permissions.reduce(((t,a)=>(t[a]={...e[a],selected:a.includes("inventory:hosts")?s:s.filter((({id:e})=>null!==e))},t)),{})}}case"selectAll":return{...e,[t.key]:{...s,selected:t.selectionArray}};case"setFilter":return{...e,[t.key]:{...s,filterValue:t.filterValue,page:1}};case"setPage":return{...e,[t.key]:{...s,page:t.page}};case"clear":return{...e,[t.key]:{...s,selected:[]}};default:return e}},x=e=>{const t=(0,k.tz)(),s=(0,v.useDispatch)(),{input:h}=(0,E.A)(e),x=(0,A.default)(),R=e=>e.includes("hosts:"),O=(0,M.useFlag)("platform.rbac.groups-to-workspaces-rename"),{resourceTypes:P,totalCount:B,isLoading:L}=(0,v.useSelector)(T,v.shallowEqual),D=x.getState().values["add-permissions-table"].filter((({uuid:e})=>e.split(":")[0].includes("inventory"))).map((({uuid:e})=>e))||[],I=(e,t)=>s((0,S.N)(e,t)),[N,j]=(0,a.useReducer)(F,D.reduce(((e,t)=>({...e,[t]:{page:1,selected:[],filterValue:"",isOpen:!1}})),{}));(0,a.useEffect)((()=>{I(D,{}),x.change("inventory-group-permissions",[])}),[]),(0,a.useEffect)((()=>{const e=Object.entries(N).map((([e,{selected:t}])=>({permission:e,groups:t})));h.onChange(e),x.change("inventory-group-permissions",e)}),[N]);const G=e=>j({type:"toggle",key:e,isOpen:!N[e].isOpen}),V=(e,t,s)=>{j({type:"setFilter",key:s,filterValue:t}),(0,C.sq)((()=>I([s],{name:t})),2e3)};return l().createElement(o.Grid,{hasGutter:!0},l().createElement(o.GridItem,{md:3,className:"rbac-m-hide-on-sm"},l().createElement(i.Text,{component:i.TextVariants.h4,className:"rbac-bold-text pf-v5-u-mt-sm"},t.formatMessage(w.A.permissions))),l().createElement(o.GridItem,{lg:9,md:6,className:"rbac-m-hide-on-sm"},l().createElement(i.Text,{component:i.TextVariants.h4,className:"rbac-bold-text pf-v5-u-mt-sm"},t.formatMessage(O?w.A.workspacesDefinition:w.A.groupDefinition))),D.map(((e,s)=>{const a=Object.values(P?.[e]??{});return l().createElement(l().Fragment,{key:e},l().createElement(o.Grid,null,l().createElement(o.GridItem,{md:3},l().createElement(n.FormGroup,{label:e?.replace("inventory:",""),isRequired:!0})),l().createElement(o.GridItem,{md:7},l().createElement(d.Select,{role:"menu","aria-labelledby":e,className:"rbac-c-resource-type-select",isOpen:N[e].isOpen,selected:N[e].selected,onSelect:(t,s)=>((e,t,s,a)=>{const l={id:null,name:"null"};return s&&j({type:"selectAll",selectionArray:R(a)?[l,...Object.values(P[a])]:Object.values(P[a]),key:a})||j({type:"select",processedSelection:"null"===t?l:P[a][t],key:a})})(0,s,"select-all"===s,e),onOpenChange:t=>j({type:"toggle",key:e,isOpen:t}),toggle:s=>((e,s)=>l().createElement(c.Tooltip,{content:l().createElement("div",null,t.formatMessage(O?w.A.workspacesTooltip:w.A.inventoryGroupsTooltip))},l().createElement(u.MenuToggle,{variant:"typeahead","aria-label":t.formatMessage(O?w.A.workspacesTypeAheadLabel:w.A.inventoryGroupsTypeAheadLabel),onClick:()=>G(s),innerRef:e,isExpanded:N[s].isOpen,isFullWidth:!0},l().createElement(m.TextInputGroup,{isPlain:!0},l().createElement(m.TextInputGroupMain,{value:N[s].filterValue,onClick:()=>N[s].isOpen||G(s),onChange:(e,t)=>V(0,t,s),autoComplete:"off",placeholder:t.formatMessage(O?w.A.selectWorkspaces:w.A.selectGroups),role:"combobox",isExpanded:N[s].isOpen},N[s].selected.length>0?l().createElement(y.ChipGroup,{"aria-label":"Current selections"},l().createElement(y.Chip,{closeBtnAriaLabel:"Clear all",badge:l().createElement(g.Badge,{isRead:!0},N[s].selected.length),onClick:e=>{e.stopPropagation(),j({type:"clear",key:s})}},"selected")):null),l().createElement(m.TextInputGroupUtilities,null,N[s].filterValue.length>0&&l().createElement(r.Button,{variant:"plain","aria-label":"Clear input value",onClick:e=>{e.stopPropagation(),e.preventDefault(),V(0,"",s)}},l().createElement(b(),{"aria-hidden":!0})))))))(s,e)},l().createElement(d.SelectList,null,a?.length>0?l().createElement(d.SelectOption,{className:"pf-v5-u-link-color",key:`${e}-all`,value:"select-all"},l().createElement(k.sA,{...w.A.selectAll,values:{length:a?.length+Number(R(e))}})):null,R(e)?l().createElement(l().Fragment,null,l().createElement(d.SelectOption,{key:`${e}-ungrouped`,value:"null",hasCheckbox:!0,isSelected:N[e].selected.some((e=>"null"===e.name))},l().createElement(k.sA,{...w.A.ungroupedSystems})),a.length>0?l().createElement(p.Divider,{component:"li",key:`${e}-divider`}):null):null,a.map((t=>l().createElement(d.SelectOption,{hasCheckbox:!0,key:t.id,isSelected:N[e].selected.some((e=>e.name===t.name)),className:t.className,value:t.name},t.name))),L||P[e]&&Object.values(P[e]).length<B?l().createElement(d.SelectOption,{...!L&&{isLoadButton:!0},...L&&{isLoading:!0},onClick:()=>{I([e],{page:N[e].page+1,name:N[e].filterValue}),j({type:"setPage",key:e,page:N[e].page++})},value:"loader"},L?l().createElement(f.Spinner,{size:"lg"}):t.formatMessage(w.A.seeMore)):null))),l().createElement(o.GridItem,{md:2},s<=0&&D.length>1&&l().createElement(r.Button,{key:`${e}-copy`,variant:"link",isInLink:!0,onClick:()=>j({type:"copyToAll",permissions:D})},t.formatMessage(w.A.copyToAll)))))})))}},1481:(e,t,s)=>{"use strict";s.d(t,{Q:()=>l});var a=s(85712);const l=(e,t)=>{const s=t&&t["add-permissions-table"]||[],l=s.some((({uuid:e})=>(0,a.jE)(e))),r=s.some((({uuid:e})=>(0,a.a)(e)));return"inventory-groups-role"===e&&l?"cost-resources-definition":"add-permissions"===e&&r?"inventory-groups-role":"add-permissions"===e&&l?"cost-resources-definition":"review"}},85712:(e,t,s)=>{"use strict";s.d(t,{Om:()=>i,a:()=>l,jE:()=>o,jV:()=>r});var a=s(40335);const l=e=>e.split(":")[0].includes("inventory"),r=e=>l(e)&&e.split(":")[1].includes("hosts"),o=e=>e.split(":")[0].includes("cost-management"),i=(e,t,s)=>{let l=e.filter(Boolean);return r(t)&&e.includes(null)&&l.unshift(s.formatMessage(a.A.ungroupedSystems)),l.reduce(((e,t)=>[...e,{cells:[t]}]),[])}},25823:()=>{},16369:()=>{},62275:()=>{},89205:()=>{},20681:()=>{},95067:()=>{},75189:()=>{},89347:()=>{},86893:()=>{},92004:()=>{},74895:()=>{},26078:()=>{},5391:()=>{},21289:()=>{},2580:()=>{}}]);
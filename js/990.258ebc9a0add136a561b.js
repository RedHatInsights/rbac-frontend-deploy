(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[990,209],{29693:(e,t,s)=>{"use strict";s.d(t,{C$:()=>u,pj:()=>c,xk:()=>n});var a=s(85564),l=s.n(a),r=s(75465);const o=(0,r.zX)(),i=(0,r.bD)(),n=async({name:e,perPage:t,page:s,options:a}={})=>await o.apiResourceTypeGetResourceTypeGroupsList(e,t,s,a),c=async e=>await i.apiGroupGetGroupsById(e),u=e=>e?l()(e.map((e=>e.attributeFilter.value))):[]},84414:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(62012),l=s(64756);const r=e=>{const t=(0,a.useNavigate)();return(s,a)=>t((0,l.n)(s,e),a)}},66180:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var a=s(66029),l=s.n(a),r=s(9947),o=s(67880),i=s(43049),n=s(75106),c=s(80315),u=s(80810);const p=({title:e,icon:t,description:s,actions:a,...p})=>l().createElement(r.u,{variant:r.I.sm,...p},l().createElement(o.t,{titleText:l().createElement(l().Fragment,null,e),icon:l().createElement(i.k,{icon:t||u.SearchIcon}),headingLevel:"h4"}),l().createElement(n.B,{className:"pf-v5-u-mb-md"},s.map(((e,t)=>l().createElement(l().Fragment,{key:t},e," ",l().createElement("br",null))))),l().createElement(c.O,null,a))},97246:(e,t,s)=>{"use strict";s.d(t,{M:()=>C});var a=s(66029),l=s.n(a),r=s(25387),o=s(45697),i=s.n(o),n=s(2550),c=s(79083),u=s(75863),p=s(21081),m=s(49004),d=s(34844),f=s(15433),g=s(12913),y=s(7065),h=s(47173),b=s(18517),v=s(7081),E=s(29301),k=s(68572),Z=s(66180);const C=({className:e,isCompact:t,borders:s,columns:o,rows:i,toolbarButtons:C,data:S,actionResolver:w,areActionsDisabled:M,routes:P,titlePlural:F,titleSingular:R,pagination:x,paginationProps:T,filterValue:O,isLoading:B,emptyFilters:A,setFilterValue:L,checkedRows:D,isSelectable:I,isRowSelectable:N,fetchData:j,setCheckedItems:q,emptyProps:V,filterPlaceholder:$,rowWrapper:_,filters:G,isFilterable:W,onShowMore:z,showMoreTitle:Y,onFilter:H,onChange:K,value:Q,sortBy:U,onSort:J,isExpandable:X,onExpand:ee,hideFilterChips:te,hideHeader:se,noData:ae,noDataDescription:le,ouiaId:re,tableId:oe,containerRef:ie,textFilterRef:ne,toolbarChildren:ce})=>{const ue=(0,r.YB)(),pe=(0,c.useFlag)("platform.rbac.itless");return l().createElement("div",{className:e},P(),!B&&0===i?.length&&0===O?.length&&G.every((({value:e})=>!e))?l().createElement(Z.Z,{title:ue.formatMessage(n.Z.configureItems,{items:F}),icon:v.wl,description:[ue.formatMessage(n.Z.toConfigureUserAccess),ue.formatMessage(n.Z.createAtLeastOneItem,{item:R})],actions:C()[0],...V}):(()=>{const e=`${"desc"===U?.direction?"-":""}${o[U?.index]?.key}`;return l().createElement(a.Fragment,null,l().createElement(k.ZP,{isSelectable:I,isRowSelectable:N,checkedRows:D,setCheckedItems:q,isLoading:B||ae,data:S,titleSingular:R,filterValue:O,setFilterValue:L,sortBy:e,pagination:x,paginationProps:T,fetchData:j,toolbarButtons:C,filterPlaceholder:$,filters:G,isFilterable:W,onShowMore:z,showMoreTitle:Y,onFilter:H,onChange:K,value:Q,hideFilterChips:te,tableId:oe,containerRef:ie,textFilterRef:ne,toolbarChildren:ce}),B?l().createElement(g.Z,{variant:t?u.B.compact:void 0,rows:x?.limit,columns:o.map((e=>e.title))}):l().createElement(p.i,{canSelectAll:!1,"aria-label":`${F.toLowerCase()} table`,variant:t?u.B.compact:null,borders:s,...I&&i?.length>0&&{onSelect:(e,t,s,{uuid:a,cells:[l],requires:r})=>q((0,E.ZQ)([{uuid:a,name:l,requires:r,...pe&&{username:S[s]?.username}}],t))},...X&&{onExpand:ee},rows:i?.length>0?i:[{fullWidth:!0,cells:[{title:l().createElement(Z.Z,{title:ue.formatMessage(n.Z.noMatchingItemsFound,{items:F}),description:ae&&le?le:[ue.formatMessage(n.Z.filterMatchesNoItems,{items:F}),ue.formatMessage(n.Z.tryChangingFilters)],actions:ae&&le?void 0:[l().createElement(y.U,{key:"clear-filters"},l().createElement(h.zx,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{L(A),j({...x,offset:0,...A||{name:""}})}},ue.formatMessage(n.Z.clearAllFilters)))]}),props:{colSpan:o.length}}]}],cells:o,...i?.length>0&&{actionResolver:w},className:0==i?.length?"ins-c-table-empty-state":"",areActionsDisabled:M,rowWrapper:_,sortBy:U,ouiaId:re,onSort:(e,t,s,a)=>J(e,t,s,a)},!se&&l().createElement(m.x,null),l().createElement(d.R,null)),!x.noBottom&&l().createElement(f.Z,null,!B&&l().createElement(b.t,{...(0,k.Wz)(x,j,O,U,T),variant:"bottom",dropDirection:"up"})))})())};C.propTypes={...k.ZP.propTypes,sortBy:i().shape({directions:i().string,index:i().number}),className:i().string,rowWrapper:i().any,isCompact:i().bool,isRowSelectable:i().func,borders:i().bool,emptyFilters:i().object,checkedRows:i().array,columns:i().array.isRequired,rows:i().array.isRequired,titlePlural:i().string,routes:i().func,actionResolver:i().func,areActionsDisabled:i().func,pagination:i().shape({noBottom:i().bool,limit:i().number,offset:i().number,count:i().number}),paginationProps:i().shape({toggleTemplate:i().func,isCompact:i().bool}),isExpandable:i().bool,onExpand:i().func,onSort:i().func,containerRef:i().node,noData:i().bool,hideFilterChips:i().bool,hideHeader:i().bool,noDataDescription:i().arrayOf(i().node),filters:i().array,tableId:i().string.isRequired,toolbarChildren:i().func},C.defaultProps={...k.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1,toolbarChildren:()=>null}},68572:(e,t,s)=>{"use strict";s.d(t,{Wz:()=>d,ZP:()=>b});var a=s(66029),l=s.n(a),r=s(31611),o=s(25387),i=s(45697),n=s.n(i),c=s(2550),u=s(96486),p=s(29301),m=s(74982);const d=(e={},t,s="",a="",l)=>({...l,itemCount:e.count,perPage:e.limit,page:(0,m.wy)(e.limit,e.offset),onSetPage:(l,r)=>{t({...e,offset:(0,m.vE)(r,e.limit),name:s,orderBy:a})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,l)=>{t({offset:0,limit:l,name:s,orderBy:a})}}),f=(e,t=[],s=(()=>{}),a=[],l,r=(()=>!0))=>{const i=(0,o.YB)();return{count:t.length,items:[{title:i.formatMessage(c.Z.selectNone),onClick:()=>{s((()=>[]))}},{...!e&&a&&a.length>0?{title:i.formatMessage(c.Z.selectPage,{length:a.filter(r).length}),onClick:()=>{s((0,p.ZQ)(a,!0))}}:{}}],checked:(0,p.um)(a,t,r),onSelect:t=>{!e&&s((0,p.ZQ)(a,t))},id:l}},g=(e,t=(()=>{}),s=(()=>{}),a="",l={},r="",i,n,m,d,f,g,y,h,b,v,E)=>{const k=(0,o.YB)();return{onChange:h,value:b,items:[...m&&m.length>0?m.map((({key:r,label:o,value:i,selected:n,placeholder:h,type:b="text",groups:E,items:Z,innerRef:C})=>({label:o||(0,p.RI)(r),type:b??"text",filterValues:{innerRef:C,id:`filter-by-${r}`,key:`filter-by-${r}`,placeholder:h||k.formatMessage(c.Z.filterByKey,{key:r}),value:i,selected:n,..."text"!==b?{isFilterable:d,onShowMore:f,showMoreTitle:g,onFilter:y}:{},groups:E,items:Z,onChange:(e,o)=>{const i="string"==typeof o||Array.isArray(o)?o:Object.keys((0,u.pickBy)(o[""],(e=>e)));t({...a,...l,offset:0,[r]:i}),(0,p.Aq)((()=>s({...l,offset:0,orderBy:v,...m.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[r]:i}))).then((e=>(C?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,p.RI)(i||r),type:"text",filterValues:{innerRef:E,id:"filter-by-string",key:"filter-by-string",placeholder:k.formatMessage(c.Z.filterByKey,{key:i||r}),value:a,onChange:(e,a)=>{t({...l,offset:0,name:a}),(0,p.Aq)((()=>s({...l,offset:0,name:a,orderBy:v}))).then((e=>(E?.current?.focus(),e)))},isDisabled:e}}],...n||[]]}},y=(e="",t,s={},a=(()=>{}),l=(()=>{}),r)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,p.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[o],i)=>{const n=(e,t,s)=>i?"group"===t||"checkbox"===t?[]:"":s!==o.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==o.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:s,type:a})=>({...e,[t]:n(s,a,t)})),{});a({...s,offset:0,name:"",...c}),l({...s,offset:0,orderBy:r,name:"",...c})}}),h=({isSelectable:e,isRowSelectable:t,checkedRows:s,setCheckedItems:a,isLoading:o,data:i,titleSingular:n,filterValue:c,setFilterValue:u,pagination:p,paginationProps:m,fetchData:h,sortBy:b,toolbarButtons:v,filterPlaceholder:E,filterItems:k,filters:Z,isFilterable:C,onShowMore:S,showMoreTitle:w,onFilter:M,onChange:P,value:F,hideFilterChips:R,tableId:x,textFilterRef:T,toolbarChildren:O})=>l().createElement(r.Z,{...e&&{bulkSelect:f(o,s,a,i,x,t)},filterConfig:g(o,u,h,c,p,n,E,k,Z,C,S,w,M,P,F,b,T),actionsConfig:{actions:v()},...!o&&{pagination:d(p,h,c,b,m)},...(c.length>0||Z&&Z.length>0)&&!R&&{activeFiltersConfig:y(c,Z,p,u,h,b)}},O());h.propTypes={isSelectable:n().bool,isRowSelectable:n().func,checkedRows:n().array,setCheckedItems:n().func,isLoading:n().bool,data:n().array,titleSingular:n().string,filterValue:n().oneOfType([n().array,n().string]),setFilterValue:n().func,filters:n().arrayOf(n().shape({value:n().oneOfType([n().string,n().number,n().array]),key:n().string,placeholder:n().string})),isFilterable:n().bool,onShowMore:n().func,showMoreTitle:n().string,onFilter:n().func,onChange:n().func,value:n().any,pagination:n().shape({limit:n().number,offset:n().number,count:n().number}),paginationProps:n().shape({toggleTemplate:n().func,isCompact:n().bool}),sortBy:n().string,filterItems:n().arrayOf(n().object),filterPlaceholder:n().string,isCollapsible:n().bool,fetchData:n().func.isRequired,toolbarButtons:n().func,hideFilterChips:n().bool,tableId:n().string,textFilterRef:n().object,toolbarChildren:n().func},h.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:m.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1,toolbarChildren:()=>null};const b=h},19862:(e,t,s)=>{"use strict";s.d(t,{P:()=>n,b:()=>i});var a=s(71079);const l=(0,s(75465).i$)();async function r(e){return await l.getResourceTypes(e)}async function o(e){return await l.getResource(e)}const i=e=>({type:a.PN,payload:r(e)}),n=e=>({type:a.S9,payload:o(e)})},66254:(e,t,s)=>{"use strict";s.d(t,{M:()=>o,f:()=>r});var a=s(71079),l=s(29693);const r=(e,t)=>({type:a.YS,meta:{permissions:e,config:t},payload:l.xk(t)}),o=e=>({type:a.WV,meta:{groupsIds:e},payload:l.pj(e.filter((e=>e?.length>0)))})},52229:(e,t,s)=>{"use strict";s.d(t,{Z:()=>k});var a=s(66029),l=s.n(a),r=s(45697),o=s.n(r),i=s(73597),n=s(42189),c=s(38779),u=s(68774),p=s(68340),m=s(46043),d=s(47173),f=s(41448),g=s(56715),y=s(48880),h=s(21873),b=s(25387),v=s(2550);const E=({formFields:e})=>{const t=(0,y.default)(),[s,r]=(0,a.useState)(t.getState().values["add-permissions-table"]||[]),[o,E]=(0,a.useState)(!1),k=t.getState().values["not-allowed-permissions"],Z=(0,b.YB)(),C=t.getState().values?.["copy-base-role"]?.applications?.filter((e=>!s?.find((({uuid:t})=>t.includes(e)))))||[],S=e[0][0];return l().createElement("div",{className:"rbac"},s.length>0?l().createElement("div",{className:"rbac-c-selected-chips"},l().createElement(i.Z,{categoryName:Z.formatMessage(v.Z.selectedPermissions)},s.reduce(((e,t)=>[t,...e]),[]).map((({uuid:e})=>l().createElement(n.A,{key:e,color:"blue",isTruncated:!0,onClick:()=>r(s.filter((t=>t.uuid!==e)))},e))))):null,l().createElement(c.D,{headingLevel:"h1",size:"xl",className:"rbac-c-add-permission-title"},Z.formatMessage(v.Z.addPermissions)),l().createElement(u.D,null,l().createElement(p.x,null,Z.formatMessage(v.Z.selectPermissionsForRole),0!==C.length&&l().createElement(m.J,{headerContent:Z.formatMessage(v.Z.onlyGranularPermissions),bodyContent:Z.formatMessage(v.Z.noWildcardPermissions)},l().createElement(d.zx,{variant:"link"},Z.formatMessage(v.Z.whyNotSeeingAllPermissions)," ",l().createElement(h.ZP,null))))),k?.length>0&&!o?l().createElement(f.b,{variant:"custom",isInline:!0,title:`${Z.formatMessage(v.Z.followingPermissionsCannotBeAdded)} ${k.join(", ")}`,actionClose:l().createElement(g.g,{onClose:()=>E(!0)})}):null,[[{...S,props:{...S.props,selectedPermissions:s,setSelectedPermissions:r}}]])};E.propTypes={formFields:o().array};const k=E},55594:(e,t,s)=>{"use strict";s.d(t,{Z:()=>x});var a=s(66029),l=s.n(a),r=s(45697),o=s.n(r),i=s(86706),n=s(55140),c=s(81169),u=s(48880),p=s(48623),m=s(43707),d=s(97246),f=s(71079);const g=(0,s(75465).Y3)(),y=["inventory:staleness"];async function h(e,t,s,a,l,r,o,i,n,c,u){const p=await g.listPermissions(e,t,s,a,l,r,o,i,n,c,u);return{...p,data:p.data.filter((({permission:e})=>!y.some((t=>e.includes(t)))))}}async function b(e,t,s,a,l,r,o,i){return await g.listPermissionOptions(e,t,s,a,l,r,void 0,o,i)}const v={application:f.KD,resource_type:f.vf,verb:f.E2};var E=s(19862),k=s(13563),Z=s(35224),C=s(55573);const S=({row:e,...t})=>e.disableSelection?l().createElement(Z.u,{content:e.disabledContent,exitDelay:1500,entryDelay:1500},l().createElement(C.e,{className:"rbac-c-disabled-row",row:e,...t})):l().createElement(C.e,{row:e,...t});S.propTypes={props:o().object,row:o().object};var w=s(96486),M=s(25387),P=s(2550);const F=({permissionReducer:{permission:e,isLoading:t,options:{application:s,operation:a,resource:l},expandSplats:r,isLoadingExpandSplats:o},roleReducer:{isRecordLoading:i,selectedRole:n},costReducer:{resourceTypes:c}})=>({permissions:e.data.map((({application:e,resource_type:t,verb:s,permission:a,requires:l}={})=>({application:e,resource:t,operation:s,uuid:a,requires:l}))),pagination:e.meta,isLoading:t||i,baseRole:n,applicationOptions:s.data.filter((e=>"*"!==e)),resourceOptions:l.data.filter((e=>"*"!==e)),operationOptions:a.data.filter((e=>"*"!==e)),expandedPermissions:r.data.map((({permission:e})=>e)),isLoadingExpandSplats:o,resourceTypes:c.data}),R=({selectedPermissions:e,setSelectedPermissions:t,...s})=>{const[r,o]=(0,a.useState)(null),{auth:g}=(0,n.Z)(),y=(0,i.useDispatch)(),Z=(0,M.YB)(),{hasAccess:C}=(0,m.ZP)("cost-management",["cost-management:*:*"]),{hasAccess:R}=(0,m.ZP)("rbac",["rbac:*:*"]),x=[{title:Z.formatMessage(P.Z.application)},{title:Z.formatMessage(P.Z.resourceType)},{title:Z.formatMessage(P.Z.operation)}];(0,a.useEffect)((()=>{g&&(async()=>{const{identity:{user:e}}=await g.getUser();o(e.is_org_admin)})()}),[g]);const T=e=>y((({limit:e,offset:t,orderBy:s,application:a,resourceType:l,verb:r,permission:o,exclude_globals:i=!0,exclude_roles:n,allowed_only:c,options:u})=>({type:f.wI,payload:h(e,t,s,a,l,r,o,i,n,c,u)}))({...e,...H?{exclude_roles:H}:{},allowed_only:!0})),O=e=>y((({field:e,limit:t,offset:s,application:a,resourceType:l,verb:r,allowedOnly:o,options:i})=>({type:v[e],payload:b(e,t,s,a,l,r,o,i)}))({...e,allowedOnly:!0})),{permissions:B,isLoading:A,pagination:L,baseRole:D,applicationOptions:I,resourceOptions:N,operationOptions:j,expandedPermissions:q,isLoadingExpandSplats:V,resourceTypes:$}=(0,i.useSelector)(F,i.shallowEqual),{input:_}=(0,c.Z)(s),G=(0,u.default)(),[W,z]=(0,a.useState)({applications:[],resources:[],operations:[]}),Y=G.getState().values["role-type"],H=G.getState().values["role-uuid"],[K,Q]=(0,a.useState)(!1),[U,J]=(0,a.useState)(""),[X,ee]=(0,a.useState)(),te=(0,a.useMemo)((()=>r||(R??!1)),[R,r]),se=e=>$.find((t=>t.value===e.split(":")?.[1])),ae=(0,a.useCallback)((0,p.Z)((({applications:e,resources:t,operations:s})=>O({field:"application",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]),le=(0,a.useCallback)((0,p.Z)((({applications:e,resources:t,operations:s})=>O({field:"resource_type",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]),re=(0,a.useCallback)((0,p.Z)((({applications:e,resources:t,operations:s})=>O({field:"verb",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]);(0,a.useEffect)((()=>{const e=G.getState().values["copy-base-role"]?.uuid;return"copy"===Y&&e&&y((0,k.fp)(e)),G.change("has-cost-resources",!1),T(L),O({field:"application",limit:50}),O({field:"resource_type",limit:50}),O({field:"verb",limit:50}),()=>y({type:f.e0,payload:{data:[]}})}),[]),(0,a.useEffect)((()=>{C&&y((0,E.b)())}),[C]),(0,a.useEffect)((()=>{le(W),re(W)}),[W.applications]),(0,a.useEffect)((()=>{ae(W),re(W)}),[W.resources]),(0,a.useEffect)((()=>{ae(W),le(W)}),[W.operations]),(0,a.useEffect)((()=>{_.onChange(e)}),[e]),(0,a.useEffect)((()=>{if(!D||"copy"!==Y||G.getState().values["base-permissions-loaded"]||e.length>0||G.getState().values["copy-base-role"]?.uuid!==D?.uuid||V||A)return;let s=[];const a=D?.access.filter((e=>!!I.includes(e?.permission?.split(":")[0])||(s.push(e),!1)))||[];if(G.change("not-allowed-permissions",s.map((({permission:e})=>e))),0===q.length&&void 0===V){const e=[...new Set(a.map((({permission:e})=>e.split(":")[0])))];y((({limit:e=1e3,offset:t=0,orderBy:s,application:a,resourceType:l,verb:r,permission:o,exclude_globals:i=!0,options:n})=>({type:f.e,payload:h(e,t,s,a,l,r,o,i,n)}))({application:e.join()}))}else{const e=a.map((({permission:e})=>e.replace("*",".*")));t((()=>q.filter((e=>"cost-management"!==e.split(":")[0]||0!==(se(e)||{count:0}).count)).filter((t=>e.some((e=>t.match(e))))).map((e=>({uuid:e}))))),G.change("base-permissions-loaded",!0)}}),[B,D]);const oe=e=>e.reduce(((e,t)=>({"":{...e?.[""],[t]:!0}})),{"":{}}),ie={applications:[...I].filter((e=>e.includes(U))).map((e=>({label:e,value:e}))),resources:[...N].filter((e=>e.includes(U))).map((e=>({label:e,value:e}))),operations:[...j].filter((e=>e.includes(U))).map((e=>({label:e,value:e})))},ne={label:l().createElement("div",null,Z.formatMessage(P.Z.noResultsFound)),isDisabled:!0},ce=ie[Object.keys(ie)[X||0]].length>10;return l().createElement("div",{className:"rbac-c-permissions-table"},l().createElement(d.M,{columns:x,isSelectable:!0,isCompact:!0,borders:!1,rows:(t=>t.map((({application:t,resource:s,operation:a,uuid:r,requires:o})=>({uuid:`${t}:${s}:${a}`,requires:o,cells:[{title:t},s,a],selected:Boolean(e&&e.find((e=>e.uuid===r))),disableSelection:"cost-management"===t&&(0===(se(r)||{count:0}).count||!C)||"inventory"===t&&!te,disabledContent:"cost-management"===t?l().createElement("div",null,Z.formatMessage(C?P.Z.configureResourcesForPermission:P.Z.noCostManagementPermissions)," ",C?l().createElement("a",{href:"./settings/sources"},Z.formatMessage(P.Z.configureCostSources)):null):l().createElement("div",null,Z.formatMessage(P.Z.noRbacPermissions))}))))(B),data:B,filterValue:"",noData:0===B?.length,noDataDescription:[Z.formatMessage(P.Z.permissionNotDisplayedDescription)],fetchData:({limit:e,offset:t,applications:s,resources:a,operations:l})=>{T({limit:e,offset:t,application:(s||W.applications).join(),resourceType:(a||W.resources).join(),verb:(l||W.operations).join()})},setFilterValue:({applications:e,resources:t,operations:s})=>{z({...W,...e?{applications:e}:W.applications,...t?{resources:t}:W.resources,...s?{operations:s}:W.operations})},isLoading:A||V,pagination:{...L,count:L.count},checkedRows:e,setCheckedItems:s=>{const a=s(e).filter((({uuid:e,application:t})=>"cost-management"!==t||se(e)?.count>0)).map((({uuid:e,requires:t})=>({uuid:e,requires:t})));t((0,w.isEqual)(a,e)?[]:a)},titlePlural:Z.formatMessage(P.Z.permissions).toLowerCase(),titleSingular:Z.formatMessage(P.Z.permission).toLowerCase(),showMoreTitle:Z.formatMessage(K?P.Z.seeLess:P.Z.seeMore),onFilter:e=>J(e),onShowMore:ce?()=>{Q((()=>!K))}:void 0,onChange:(e,t)=>{J(""),ee(t)},value:X,filters:[{key:"applications",value:W.applications,placeholder:Z.formatMessage(P.Z.filterByKey,{key:Z.formatMessage(P.Z.application).toLowerCase()}),type:"group",selected:oe(W.applications),groups:[{type:ie.applications.length>0?"checkbox":"plain",items:ie.applications.length>0?[...ie.applications].slice(0,K?void 0:10):[ne]}]},{key:"resources",value:W.resources,placeholder:Z.formatMessage(P.Z.filterByKey,{key:Z.formatMessage(P.Z.resourceType).toLowerCase()}),type:"group",selected:oe(W.resources),groups:[{type:ie.resources.length>0?"checkbox":"plain",items:ie.resources.length>0?[...ie.resources].slice(0,K?void 0:10):[ne]}]},{key:"operations",value:W.operations,placeholder:Z.formatMessage(P.Z.filterByKey,{key:Z.formatMessage(P.Z.operation).toLowerCase()}),type:"group",selected:oe(W.operations),groups:[{type:ie.operations.length>0?"checkbox":"plain",items:ie.operations.length>0?[...ie.operations].slice(0,K?void 0:10):[ne]}]}],isFilterable:!0,rowWrapper:S,tableId:"add-role-permissions",...s}))};R.propTypes={selectedPermissions:o().array,setSelectedPermissions:o().func};const x=R},47108:(e,t,s)=>{"use strict";s.d(t,{Z:()=>k});var a=s(66029),l=s.n(a),r=s(86706),o=s(16475),i=s(35224),n=s(59775),c=s(50693),u=s(68340),p=s(46361),m=s(47189),d=s(27730),f=s(81169),g=s(48880),y=s(19862),h=s(25387),b=s(2550);const v=({costReducer:{resourceTypes:e,isLoading:t,loadingResources:s,resources:a}})=>({resourceTypes:e.data,resources:a,isLoading:t,isLoadingResources:s>0}),E=(e,t)=>{const s=e[t.key];switch(t.type){case"toggle":return{...e,[t.key]:{...s,isOpen:!s.isOpen}};case"select":return{...e,[t.key]:{...s,selected:s.selected.includes(t.selection)?s.selected.filter((e=>e!==t.selection)):[...s.selected,t.selection]}};case"selectAll":return{...e,[t.key]:{...s,selected:s.options.map((e=>e.value))}};case"clear":return{...e,[t.key]:{...s,selected:[]}};case"setOptions":return{...e,[t.key]:{...s,options:t.options,filteredOptions:t.options}};case"setFilter":return{...e,[t.key]:{...s,filteredOptions:s.options.filter((({value:e})=>e.includes(t.filtervalue)))}};default:return e}},k=e=>{const t=(0,h.YB)(),s=(0,r.useDispatch)(),{resourceTypes:k,isLoading:Z,isLoadingResources:C,resources:S}=(0,r.useSelector)(v,r.shallowEqual),{input:w}=(0,f.Z)(e),M=(0,g.default)(),P=M.getState().values["add-permissions-table"].filter((({uuid:e})=>e.split(":")[0].includes("cost-management"))),[F,R]=(0,a.useReducer)(E,P.reduce(((e,t)=>({...e,[t.uuid]:{selected:[],options:[],filteredOptions:[],isOpen:!1}})),{}));return(0,a.useEffect)((()=>{(M.getState().values["resource-definitions"]||[]).map((({permission:e,resources:t})=>t.map((t=>P.find((t=>t?.uuid===e))&&R({type:"select",selection:t,key:e}))))),s((0,y.b)(undefined)),M.change("has-cost-resources",!0)}),[]),(0,a.useEffect)((()=>{Z||[...new Set(P.map((e=>k.find((t=>t.value===e.uuid.split(":")?.[1]))?.path)))].filter((e=>e)).map((e=>{return t=e,s((0,y.P)(t));var t}))}),[k]),(0,a.useEffect)((()=>{C||P.map((e=>{return R({type:"setOptions",key:e.uuid,options:S[(t=e.uuid,k.find((e=>e.value===t.split(":")?.[1]))?.path.split("/")?.[5])]||[]});var t}))}),[C]),(0,a.useEffect)((()=>{const e=Object.entries(F).map((([e,t])=>({permission:e,resources:t.selected})));w.onChange(e),M.change("resource-definitions",e)}),[F]),l().createElement(c.r,{hasGutter:!0},l().createElement(o.P,{md:4,className:"rbac-m-hide-on-sm"},l().createElement(u.x,{component:u.q.h4,className:"rbac-bold-text"},t.formatMessage(b.Z.permissions))),l().createElement(o.P,{md:8,className:"rbac-m-hide-on-sm"},l().createElement(u.x,{component:u.q.h4,className:"rbac-bold-text"},t.formatMessage(b.Z.resourceDefinitions))),P.map((({uuid:e})=>{const s=F[e].filteredOptions;return l().createElement(l().Fragment,null,l().createElement(o.P,{md:4,sm:12},l().createElement(i.u,{content:l().createElement("div",null,e)},l().createElement(n.c,{label:e.replace(/^cost-management:/,""),isRequired:!0}))),l().createElement(o.P,{md:8,sm:12},l().createElement(p.P,{className:"rbac-m-resource-type-select",variant:m.TM.checkbox,typeAheadAriaLabel:t.formatMessage(b.Z.selectState),onToggle:(t,s)=>{R({type:"setFilter",key:e,filtervalue:""}),((e,t)=>{R({type:"toggle",key:e,isOpen:t})})(e,s)},onSelect:(a,l)=>{((e,t,s,a)=>{R(s?{type:"selectAll",selection:t,key:a}:{type:"select",selection:t,key:a})})(0,l,l===t.formatMessage(b.Z.selectAll,{length:s.length}),e)},onClear:()=>R({type:"clear",key:e}),selections:F[e].selected,isOpen:F[e].isOpen,onFilter:t=>t&&R({type:"setFilter",key:e,filtervalue:t.target.value}),"aria-labelledby":e,placeholderText:t.formatMessage(b.Z.selectResources),hasInlineFilter:!0},[l().createElement(d.$,{key:0,value:t.formatMessage(b.Z.selectAll,{length:s.length})}),...s.map(((e,t)=>l().createElement(d.$,{key:t+1,value:e.value})))])))})))}},68539:(e,t,s)=>{"use strict";s.d(t,{Z:()=>m});var a=s(66029),l=s.n(a),r=s(45697),o=s.n(r),i=s(38779),n=s(25387),c=s(2550),u=s(79083);const p=({formFields:e})=>{const t=(0,n.YB)(),s=(0,u.useFlag)("platform.rbac.groups-to-workspaces-rename");return l().createElement("div",{className:"rbac"},l().createElement(i.D,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-lg"},t.formatMessage(s?c.Z.workspacesAccessTitle:c.Z.inventoryGroupsAccessTitle)),e)};p.propTypes={formFields:o().array};const m=p},51880:(e,t,s)=>{"use strict";s.d(t,{Z:()=>A});var a=s(66029),l=s.n(a),r=s(35224),o=s(23971),i=s(94623),n=s(66484),c=s(73597),u=s(42189),p=s(68425),m=s(68578),d=s(47173),f=s(50693),g=s(16475),y=s(59775),h=s(82212),b=s(41309),v=s(92694),E=s(15627),k=s(83133),Z=s(68340),C=s(24307),S=s(86706),w=s(81169),M=s(48880),P=s(25387),F=s(66254),R=s(29301),x=s(2550),T=s(79083);const O=({inventoryReducer:{resourceTypes:e,total:t,isLoading:s}})=>({resourceTypes:e,totalCount:t,isLoading:s}),B=(e,t)=>{const s=e[t.key];switch(t.type){case"toggle":return{...e,[t.key]:{...s,isOpen:t.isOpen,filterValue:t.filterValue??s.filterValue,page:t.page??s.page}};case"select":return s.selected.some((e=>e?.id===t.processedSelection?.id))?{...e,[t.key]:{...s,selected:s.selected.filter((e=>e.id!==t.processedSelection?.id))}}:void 0!==t.processedSelection?.id&&void 0!==t.processedSelection?.name?{...e,[t.key]:{...s,selected:[...s.selected,t.processedSelection]}}:e;case"copyToAll":{const s=e[t.permissions[0]].selected;return{...e,...t.permissions.reduce(((t,a)=>(t[a]={...e[a],selected:a.includes("inventory:hosts")?s:s.filter((({id:e})=>null!==e))},t)),{})}}case"selectAll":return{...e,[t.key]:{...s,selected:t.selectionArray}};case"setFilter":return{...e,[t.key]:{...s,filterValue:t.filterValue,page:1}};case"setPage":return{...e,[t.key]:{...s,page:t.page}};case"clear":return{...e,[t.key]:{...s,selected:[]}};default:return e}},A=e=>{const t=(0,P.YB)(),s=(0,S.useDispatch)(),{input:A}=(0,w.Z)(e),L=(0,M.default)(),D=e=>e.includes("hosts:"),I=(0,T.useFlag)("platform.rbac.groups-to-workspaces-rename"),{resourceTypes:N,totalCount:j,isLoading:q}=(0,S.useSelector)(O,S.shallowEqual),V=L.getState().values["add-permissions-table"].filter((({uuid:e})=>e.split(":")[0].includes("inventory"))).map((({uuid:e})=>e))||[],$=(e,t)=>s((0,F.f)(e,t)),[_,G]=(0,a.useReducer)(B,V.reduce(((e,t)=>({...e,[t]:{page:1,selected:[],filterValue:"",isOpen:!1}})),{}));(0,a.useEffect)((()=>{$(V,{}),L.change("inventory-group-permissions",[])}),[]),(0,a.useEffect)((()=>{const e=Object.entries(_).map((([e,{selected:t}])=>({permission:e,groups:t})));A.onChange(e),L.change("inventory-group-permissions",e)}),[_]);const W=e=>G({type:"toggle",key:e,isOpen:!_[e].isOpen}),z=(e,t,s)=>{G({type:"setFilter",key:s,filterValue:t}),(0,R.Aq)((()=>$([s],{name:t})),2e3)};return l().createElement(f.r,{hasGutter:!0},l().createElement(g.P,{md:3,className:"rbac-m-hide-on-sm"},l().createElement(Z.x,{component:Z.q.h4,className:"rbac-bold-text pf-v5-u-mt-sm"},t.formatMessage(x.Z.permissions))),l().createElement(g.P,{lg:9,md:6,className:"rbac-m-hide-on-sm"},l().createElement(Z.x,{component:Z.q.h4,className:"rbac-bold-text pf-v5-u-mt-sm"},t.formatMessage(I?x.Z.workspacesDefinition:x.Z.groupDefinition))),V.map(((e,s)=>{const a=Object.values(N?.[e]??{});return l().createElement(l().Fragment,{key:e},l().createElement(f.r,null,l().createElement(g.P,{md:3},l().createElement(y.c,{label:e?.replace("inventory:",""),isRequired:!0})),l().createElement(g.P,{md:7},l().createElement(h.P,{role:"menu","aria-labelledby":e,className:"rbac-c-resource-type-select",isOpen:_[e].isOpen,selected:_[e].selected,onSelect:(t,s)=>((e,t,s,a)=>{const l={id:null,name:"null"};return s&&G({type:"selectAll",selectionArray:D(a)?[l,...Object.values(N[a])]:Object.values(N[a]),key:a})||G({type:"select",processedSelection:"null"===t?l:N[a][t],key:a})})(0,s,"select-all"===s,e),onOpenChange:t=>G({type:"toggle",key:e,isOpen:t}),toggle:s=>((e,s)=>l().createElement(r.u,{content:l().createElement("div",null,t.formatMessage(I?x.Z.workspacesTooltip:x.Z.inventoryGroupsTooltip))},l().createElement(o.O,{variant:"typeahead","aria-label":t.formatMessage(I?x.Z.workspacesTypeAheadLabel:x.Z.inventoryGroupsTypeAheadLabel),onClick:()=>W(s),innerRef:e,isExpanded:_[s].isOpen,isFullWidth:!0},l().createElement(i.L,{isPlain:!0},l().createElement(n.v,{value:_[s].filterValue,onClick:()=>_[s].isOpen||W(s),onChange:(e,t)=>z(0,t,s),autoComplete:"off",placeholder:t.formatMessage(I?x.Z.selectWorkspaces:x.Z.selectGroups),role:"combobox",isExpanded:_[s].isOpen},_[s].selected.length>0?l().createElement(c.Z,{"aria-label":"Current selections"},l().createElement(u.A,{closeBtnAriaLabel:"Clear all",badge:l().createElement(p.C,{isRead:!0},_[s].selected.length),onClick:e=>{e.stopPropagation(),G({type:"clear",key:s})}},"selected")):null),l().createElement(m.t,null,_[s].filterValue.length>0&&l().createElement(d.zx,{variant:"plain","aria-label":"Clear input value",onClick:e=>{e.stopPropagation(),e.preventDefault(),z(0,"",s)}},l().createElement(C.q1,{"aria-hidden":!0})))))))(s,e)},l().createElement(b.E,null,a?.length>0?l().createElement(v.$,{className:"pf-v5-u-link-color",key:`${e}-all`,value:"select-all"},l().createElement(P._H,{...x.Z.selectAll,values:{length:a?.length+Number(D(e))}})):null,D(e)?l().createElement(l().Fragment,null,l().createElement(v.$,{key:`${e}-ungrouped`,value:"null",hasCheckbox:!0,isSelected:_[e].selected.some((e=>"null"===e.name))},l().createElement(P._H,{...x.Z.ungroupedSystems})),a.length>0?l().createElement(E.i,{component:"li",key:`${e}-divider`}):null):null,a.map((t=>l().createElement(v.$,{hasCheckbox:!0,key:t.id,isSelected:_[e].selected.some((e=>e.name===t.name)),className:t.className,value:t.name},t.name))),q||N[e]&&Object.values(N[e]).length<j?l().createElement(v.$,{...!q&&{isLoadButton:!0},...q&&{isLoading:!0},onClick:()=>{$([e],{page:_[e].page+1,name:_[e].filterValue}),G({type:"setPage",key:e,page:_[e].page++})},value:"loader"},q?l().createElement(k.$,{size:"lg"}):t.formatMessage(x.Z.seeMore)):null))),l().createElement(g.P,{md:2},s<=0&&V.length>1&&l().createElement(d.zx,{key:`${e}-copy`,variant:"link",isInLink:!0,onClick:()=>G({type:"copyToAll",permissions:V})},t.formatMessage(x.Z.copyToAll)))))})))}},92884:(e,t,s)=>{"use strict";s.d(t,{j:()=>l});var a=s(60966);const l=(e,t)=>{const s=t&&t["add-permissions-table"]||[],l=s.some((({uuid:e})=>(0,a.u3)(e))),r=s.some((({uuid:e})=>(0,a.Rt)(e)));return"inventory-groups-role"===e&&l?"cost-resources-definition":"add-permissions"===e&&r?"inventory-groups-role":"add-permissions"===e&&l?"cost-resources-definition":"review"}},60966:(e,t,s)=>{"use strict";s.d(t,{Hg:()=>i,Rt:()=>l,_T:()=>r,u3:()=>o});var a=s(2550);const l=e=>e.split(":")[0].includes("inventory"),r=e=>l(e)&&e.split(":")[1].includes("hosts"),o=e=>e.split(":")[0].includes("cost-management"),i=(e,t,s)=>{let l=e.filter(Boolean);return r(t)&&e.includes(null)&&l.unshift(s.formatMessage(a.Z.ungroupedSystems)),l.reduce(((e,t)=>[...e,{cells:[t]}]),[])}},82472:()=>{},97890:()=>{},17657:()=>{},22972:()=>{},43389:()=>{},81754:()=>{},70347:()=>{},1580:()=>{},94498:()=>{},80897:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},46928:()=>{},36974:()=>{},22143:()=>{},40209:()=>{},87234:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/990.a290b04b7dd4ff252531f07be5a3abdc.js.map
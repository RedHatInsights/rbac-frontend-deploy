(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[7760,209],{84414:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(62012),l=s(64756);const r=e=>{const t=(0,a.useNavigate)();return(s,a)=>t((0,l.n)(s,e),a)}},66180:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(28416),l=s.n(a),r=s(95376),i=s(58826),o=s.n(i);const n=({title:e,icon:t,description:s,actions:a,...i})=>l().createElement(r.EmptyState,{variant:r.EmptyStateVariant.sm,...i},l().createElement(r.EmptyStateHeader,{titleText:l().createElement(l().Fragment,null,e),icon:l().createElement(r.EmptyStateIcon,{icon:t||o()}),headingLevel:"h4"}),l().createElement(r.EmptyStateBody,{className:"pf-v5-u-mb-md"},s.map(((e,t)=>l().createElement(l().Fragment,{key:t},e," ",l().createElement("br",null))))),l().createElement(r.EmptyStateFooter,null,a))},97246:(e,t,s)=>{"use strict";s.d(t,{M:()=>C});var a=s(28416),l=s.n(a),r=s(25387),i=s(45697),o=s.n(i),n=s(2550),c=s(75863),p=s(21081),u=s(49004),m=s(34844),d=s(15433),f=s(12913),g=s(31055),y=s(93297),h=s(95376),b=s(47826),v=s.n(b),E=s(29301),k=s(68572),S=s(66180);const C=({className:e,isCompact:t,borders:s,columns:i,rows:o,toolbarButtons:b,data:C,actionResolver:Z,areActionsDisabled:M,routes:w,titlePlural:T,titleSingular:F,pagination:P,paginationProps:R,filterValue:x,isLoading:O,emptyFilters:B,setFilterValue:I,checkedRows:A,isSelectable:L,isRowSelectable:D,fetchData:N,setCheckedItems:V,emptyProps:j,filterPlaceholder:G,rowWrapper:q,filters:$,isFilterable:_,onShowMore:W,showMoreTitle:Y,onFilter:H,onChange:K,value:z,sortBy:Q,onSort:U,isExpandable:J,onExpand:X,hideFilterChips:ee,hideHeader:te,noData:se,noDataDescription:ae,ouiaId:le,tableId:re,containerRef:ie,textFilterRef:oe})=>{const ne=(0,r.YB)();return l().createElement("div",{className:e},w(),!O&&0===o?.length&&0===x?.length&&$.every((({value:e})=>!e))?l().createElement(S.Z,{title:ne.formatMessage(n.Z.configureItems,{items:T}),icon:v(),description:[ne.formatMessage(n.Z.toConfigureUserAccess),ne.formatMessage(n.Z.createAtLeastOneItem,{item:F})],actions:b()[0],...j}):(()=>{const e=`${"desc"===Q?.direction?"-":""}${i[Q?.index]?.key}`;return l().createElement(a.Fragment,null,l().createElement(k.ZP,{isSelectable:L,isRowSelectable:D,checkedRows:A,setCheckedItems:V,isLoading:O||se,data:C,titleSingular:F,filterValue:x,setFilterValue:I,sortBy:e,pagination:P,paginationProps:R,fetchData:N,toolbarButtons:b,filterPlaceholder:G,filters:$,isFilterable:_,onShowMore:W,showMoreTitle:Y,onFilter:H,onChange:K,value:z,hideFilterChips:ee,tableId:re,containerRef:ie,textFilterRef:oe}),O?l().createElement(f.Z,{variant:t?c.B.compact:void 0,rows:P?.limit,columns:i.map((e=>e.title))}):l().createElement(p.i,{canSelectAll:!1,"aria-label":`${T.toLowerCase()} table`,variant:t?c.B.compact:null,borders:s,...L&&o?.length>0&&{onSelect:(e,t,s,{uuid:a,cells:[l],requires:r})=>V((0,E.ZQ)([{uuid:a,name:l,requires:r}],t))},...J&&{onExpand:X},rows:o?.length>0?o:[{fullWidth:!0,cells:[{title:l().createElement(S.Z,{title:ne.formatMessage(n.Z.noMatchingItemsFound,{items:T}),description:se&&ae?ae:[ne.formatMessage(n.Z.filterMatchesNoItems,{items:T}),ne.formatMessage(n.Z.tryChangingFilters)],actions:se&&ae?void 0:[l().createElement(h.EmptyStateActions,{key:"clear-filters"},l().createElement(g.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{I(B),N({...P,offset:0,...B||{name:""}})}},ne.formatMessage(n.Z.clearAllFilters)))]}),props:{colSpan:i.length}}]}],cells:i,...o?.length>0&&{actionResolver:Z},className:0==o?.length?"ins-c-table-empty-state":"",areActionsDisabled:M,rowWrapper:q,sortBy:Q,ouiaId:le,onSort:(e,t,s,a)=>U(e,t,s,a)},!te&&l().createElement(u.x,null),l().createElement(m.R,null)),!P.noBottom&&l().createElement(d.Z,null,!O&&l().createElement(y.Pagination,{...(0,k.Wz)(P,N,x,Q,R),variant:"bottom",dropDirection:"up"})))})())};C.propTypes={...k.ZP.propTypes,sortBy:o().shape({directions:o().string,index:o().number}),className:o().string,rowWrapper:o().any,isCompact:o().bool,isRowSelectable:o().func,borders:o().bool,emptyFilters:o().object,checkedRows:o().array,columns:o().array.isRequired,rows:o().array.isRequired,titlePlural:o().string,routes:o().func,actionResolver:o().func,areActionsDisabled:o().func,pagination:o().shape({noBottom:o().bool,limit:o().number,offset:o().number,count:o().number}),paginationProps:o().shape({toggleTemplate:o().func,isCompact:o().bool}),isExpandable:o().bool,onExpand:o().func,onSort:o().func,containerRef:o().node,noData:o().bool,hideFilterChips:o().bool,hideHeader:o().bool,noDataDescription:o().arrayOf(o().node),filters:o().array,tableId:o().string.isRequired},C.defaultProps={...k.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1}},68572:(e,t,s)=>{"use strict";s.d(t,{Wz:()=>d,ZP:()=>b});var a=s(28416),l=s.n(a),r=s(31611),i=s(25387),o=s(45697),n=s.n(o),c=s(2550),p=s(96486),u=s(29301),m=s(74982);const d=(e={},t,s="",a="",l)=>({...l,itemCount:e.count,perPage:e.limit,page:(0,m.wy)(e.limit,e.offset),onSetPage:(l,r)=>{t({...e,offset:(0,m.vE)(r,e.limit),name:s,orderBy:a})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,l)=>{t({offset:0,limit:l,name:s,orderBy:a})}}),f=(e,t=[],s=(()=>{}),a=[],l,r=(()=>!0))=>{const o=(0,i.YB)();return{count:t.length,items:[{title:o.formatMessage(c.Z.selectNone),onClick:()=>{s((()=>[]))}},{...!e&&a&&a.length>0?{title:o.formatMessage(c.Z.selectPage,{length:a.filter(r).length}),onClick:()=>{s((0,u.ZQ)(a,!0))}}:{}}],checked:(0,u.um)(a,t,r),onSelect:t=>{!e&&s((0,u.ZQ)(a,t))},id:l}},g=(e,t=(()=>{}),s=(()=>{}),a="",l={},r="",o,n,m,d,f,g,y,h,b,v,E)=>{const k=(0,i.YB)();return{onChange:h,value:b,items:[...m&&m.length>0?m.map((({key:r,label:i,value:o,selected:n,placeholder:h,type:b="text",groups:E,items:S,innerRef:C})=>({label:i||(0,u.RI)(r),type:b??"text",filterValues:{innerRef:C,id:`filter-by-${r}`,key:`filter-by-${r}`,placeholder:h||k.formatMessage(c.Z.filterByKey,{key:r}),value:o,selected:n,..."text"!==b?{isFilterable:d,onShowMore:f,showMoreTitle:g,onFilter:y}:{},groups:E,items:S,onChange:(e,i)=>{const o="string"==typeof i||Array.isArray(i)?i:Object.keys((0,p.pickBy)(i[""],(e=>e)));t({...a,...l,offset:0,[r]:o}),(0,u.Aq)((()=>s({...l,offset:0,orderBy:v,...m.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[r]:o}))).then((e=>(C?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,u.RI)(o||r),type:"text",filterValues:{innerRef:E,id:"filter-by-string",key:"filter-by-string",placeholder:k.formatMessage(c.Z.filterByKey,{key:o||r}),value:a,onChange:(e,a)=>{t({...l,offset:0,name:a}),(0,u.Aq)((()=>s({...l,offset:0,name:a,orderBy:v}))).then((e=>(E?.current?.focus(),e)))},isDisabled:e}}],...n||[]]}},y=(e="",t,s={},a=(()=>{}),l=(()=>{}),r)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,u.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[i],o)=>{const n=(e,t,s)=>o?"group"===t||"checkbox"===t?[]:"":s!==i.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==i.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:s,type:a})=>({...e,[t]:n(s,a,t)})),{});a({...s,offset:0,name:"",...c}),l({...s,offset:0,orderBy:r,name:"",...c})}}),h=({isSelectable:e,isRowSelectable:t,checkedRows:s,setCheckedItems:a,isLoading:i,data:o,titleSingular:n,filterValue:c,setFilterValue:p,pagination:u,paginationProps:m,fetchData:h,sortBy:b,toolbarButtons:v,filterPlaceholder:E,filterItems:k,filters:S,isFilterable:C,onShowMore:Z,showMoreTitle:M,onFilter:w,onChange:T,value:F,hideFilterChips:P,tableId:R,textFilterRef:x})=>l().createElement(r.Z,{...e&&{bulkSelect:f(i,s,a,o,R,t)},filterConfig:g(i,p,h,c,u,n,E,k,S,C,Z,M,w,T,F,b,x),actionsConfig:{actions:v()},...!i&&{pagination:d(u,h,c,b,m)},...(c.length>0||S&&S.length>0)&&!P&&{activeFiltersConfig:y(c,S,u,p,h,b)}});h.propTypes={isSelectable:n().bool,isRowSelectable:n().func,checkedRows:n().array,setCheckedItems:n().func,isLoading:n().bool,data:n().array,titleSingular:n().string,filterValue:n().oneOfType([n().array,n().string]),setFilterValue:n().func,filters:n().arrayOf(n().shape({value:n().oneOfType([n().string,n().number,n().array]),key:n().string,placeholder:n().string})),isFilterable:n().bool,onShowMore:n().func,showMoreTitle:n().string,onFilter:n().func,onChange:n().func,value:n().any,pagination:n().shape({limit:n().number,offset:n().number,count:n().number}),paginationProps:n().shape({toggleTemplate:n().func,isCompact:n().bool}),sortBy:n().string,filterItems:n().arrayOf(n().object),filterPlaceholder:n().string,isCollapsible:n().bool,fetchData:n().func.isRequired,toolbarButtons:n().func,hideFilterChips:n().bool,tableId:n().string,textFilterRef:n().object},h.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:m.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const b=h},19862:(e,t,s)=>{"use strict";s.d(t,{P:()=>n,b:()=>o});var a=s(71079);const l=(0,s(75465).i$)();async function r(e){return await l.getResourceTypes(e)}async function i(e){return await l.getResource(e)}const o=e=>({type:a.PN,payload:r(e)}),n=e=>({type:a.S9,payload:i(e)})},29838:(e,t,s)=>{"use strict";s.d(t,{f:()=>i});var a=s(71079);const l=(0,s(75465).bD)(),r=async e=>await l.getInventoryGroups(e),i=(e,t)=>({type:a.rF,meta:{permissions:e,config:t},payload:r(t)})},52229:(e,t,s)=>{"use strict";s.d(t,{Z:()=>b});var a=s(28416),l=s.n(a),r=s(45697),i=s.n(r),o=s(43189),n=s(64380),c=s(72232),p=s(31055),u=s(78972),m=s(5904),d=s(48880),f=s(21873),g=s(25387),y=s(2550);const h=({formFields:e})=>{const t=(0,d.default)(),[s,r]=(0,a.useState)(t.getState().values["add-permissions-table"]||[]),[i,h]=(0,a.useState)(!1),b=t.getState().values["not-allowed-permissions"],v=(0,g.YB)(),E=t.getState().values?.["copy-base-role"]?.applications?.filter((e=>!s?.find((({uuid:t})=>t.includes(e)))))||[],k=e[0][0];return l().createElement("div",{className:"rbac"},s.length>0?l().createElement("div",{className:"rbac-c-selected-chips"},l().createElement(o.ChipGroup,{categoryName:v.formatMessage(y.Z.selectedPermissions)},s.reduce(((e,t)=>[t,...e]),[]).map((({uuid:e})=>l().createElement(o.Chip,{key:e,color:"blue",isTruncated:!0,onClick:()=>r(s.filter((t=>t.uuid!==e)))},e))))):null,l().createElement(c.Title,{headingLevel:"h1",size:"xl",className:"rbac-c-add-permission-title"},v.formatMessage(y.Z.addPermissions)),l().createElement(n.TextContent,null,l().createElement(n.Text,null,v.formatMessage(y.Z.selectPermissionsForRole),0!==E.length&&l().createElement(u.Popover,{headerContent:v.formatMessage(y.Z.onlyGranularPermissions),bodyContent:v.formatMessage(y.Z.noWildcardPermissions)},l().createElement(p.Button,{variant:"link"},v.formatMessage(y.Z.whyNotSeeingAllPermissions)," ",l().createElement(f.ZP,null))))),b?.length>0&&!i?l().createElement(m.Alert,{variant:"custom",isInline:!0,title:`${v.formatMessage(y.Z.followingPermissionsCannotBeAdded)} ${b.join(", ")}`,actionClose:l().createElement(m.AlertActionCloseButton,{onClose:()=>h(!0)})}):null,[[{...k,props:{...k.props,selectedPermissions:s,setSelectedPermissions:r}}]])};h.propTypes={formFields:i().array};const b=h},55594:(e,t,s)=>{"use strict";s.d(t,{Z:()=>R});var a=s(28416),l=s.n(a),r=s(45697),i=s.n(r),o=s(86706),n=s(55140),c=s(81169),p=s(48880),u=s(48623),m=s(43707),d=s(97246),f=s(71079);const g=(0,s(75465).Y3)(),y=["inventory:staleness"];async function h(e,t,s,a,l,r,i,o,n,c,p){const u=await g.listPermissions(e,t,s,a,l,r,i,o,n,c,p);return{...u,data:u.data.filter((({permission:e})=>!y.some((t=>e.includes(t)))))}}async function b(e,t,s,a,l,r,i,o){return await g.listPermissionOptions(e,t,s,a,l,r,void 0,i,o)}const v={application:f.KD,resource_type:f.vf,verb:f.E2};var E=s(19862),k=s(13563),S=s(50247),C=s(55573);const Z=({row:e,...t})=>e.disableSelection?l().createElement(S.Tooltip,{content:e.disabledContent,exitDelay:1500,entryDelay:1500},l().createElement(C.e,{className:"rbac-c-disabled-row",row:e,...t})):l().createElement(C.e,{row:e,...t});Z.propTypes={props:i().object,row:i().object};var M=s(96486),w=s(25387),T=s(2550);const F=({permissionReducer:{permission:e,isLoading:t,options:{application:s,operation:a,resource:l},expandSplats:r,isLoadingExpandSplats:i},roleReducer:{isRecordLoading:o,selectedRole:n},costReducer:{resourceTypes:c}})=>({permissions:e.data.map((({application:e,resource_type:t,verb:s,permission:a,requires:l}={})=>({application:e,resource:t,operation:s,uuid:a,requires:l}))),pagination:e.meta,isLoading:t||o,baseRole:n,applicationOptions:s.data.filter((e=>"*"!==e)),resourceOptions:l.data.filter((e=>"*"!==e)),operationOptions:a.data.filter((e=>"*"!==e)),expandedPermissions:r.data.map((({permission:e})=>e)),isLoadingExpandSplats:i,resourceTypes:c.data}),P=({selectedPermissions:e,setSelectedPermissions:t,...s})=>{const[r,i]=(0,a.useState)(null),{auth:g}=(0,n.Z)(),y=(0,o.useDispatch)(),S=(0,w.YB)(),{hasAccess:C}=(0,m.ZP)("cost-management",["cost-management:*:*"]),{hasAccess:P}=(0,m.ZP)("rbac",["rbac:*:*"]),R=[{title:S.formatMessage(T.Z.application)},{title:S.formatMessage(T.Z.resourceType)},{title:S.formatMessage(T.Z.operation)}];(0,a.useEffect)((()=>{g&&(async()=>{const{identity:{user:e}}=await g.getUser();i(e.is_org_admin)})()}),[g]);const x=e=>y((({limit:e,offset:t,orderBy:s,application:a,resourceType:l,verb:r,permission:i,exclude_globals:o=!0,exclude_roles:n,allowed_only:c,options:p})=>({type:f.wI,payload:h(e,t,s,a,l,r,i,o,n,c,p)}))({...e,...K?{exclude_roles:K}:{},allowed_only:!0})),O=e=>y((({field:e,limit:t,offset:s,application:a,resourceType:l,verb:r,allowedOnly:i,options:o})=>({type:v[e],payload:b(e,t,s,a,l,r,i,o)}))({...e,allowedOnly:!0})),{permissions:B,isLoading:I,pagination:A,baseRole:L,applicationOptions:D,resourceOptions:N,operationOptions:V,expandedPermissions:j,isLoadingExpandSplats:G,resourceTypes:q}=(0,o.useSelector)(F,o.shallowEqual),{input:$}=(0,c.Z)(s),_=(0,p.default)(),[W,Y]=(0,a.useState)({applications:[],resources:[],operations:[]}),H=_.getState().values["role-type"],K=_.getState().values["role-uuid"],[z,Q]=(0,a.useState)(!1),[U,J]=(0,a.useState)(""),[X,ee]=(0,a.useState)(),te=(0,a.useMemo)((()=>r||(P??!1)),[P,r]),se=e=>q.find((t=>t.value===e.split(":")?.[1])),ae=(0,a.useCallback)((0,u.Z)((({applications:e,resources:t,operations:s})=>O({field:"application",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]),le=(0,a.useCallback)((0,u.Z)((({applications:e,resources:t,operations:s})=>O({field:"resource_type",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]),re=(0,a.useCallback)((0,u.Z)((({applications:e,resources:t,operations:s})=>O({field:"verb",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]);(0,a.useEffect)((()=>{const e=_.getState().values["copy-base-role"]?.uuid;return"copy"===H&&e&&y((0,k.fp)(e)),_.change("has-cost-resources",!1),x(A),O({field:"application",limit:50}),O({field:"resource_type",limit:50}),O({field:"verb",limit:50}),()=>y({type:f.e0,payload:{data:[]}})}),[]),(0,a.useEffect)((()=>{C&&y((0,E.b)())}),[C]),(0,a.useEffect)((()=>{le(W),re(W)}),[W.applications]),(0,a.useEffect)((()=>{ae(W),re(W)}),[W.resources]),(0,a.useEffect)((()=>{ae(W),le(W)}),[W.operations]),(0,a.useEffect)((()=>{$.onChange(e)}),[e]),(0,a.useEffect)((()=>{if(!L||"copy"!==H||_.getState().values["base-permissions-loaded"]||e.length>0||_.getState().values["copy-base-role"]?.uuid!==L?.uuid||G||I)return;let s=[];const a=L?.access.filter((e=>!!D.includes(e?.permission?.split(":")[0])||(s.push(e),!1)))||[];if(_.change("not-allowed-permissions",s.map((({permission:e})=>e))),0===j.length&&void 0===G){const e=[...new Set(a.map((({permission:e})=>e.split(":")[0])))];y((({limit:e=1e3,offset:t=0,orderBy:s,application:a,resourceType:l,verb:r,permission:i,exclude_globals:o=!0,options:n})=>({type:f.e,payload:h(e,t,s,a,l,r,i,o,n)}))({application:e.join()}))}else{const e=a.map((({permission:e})=>e.replace("*",".*")));t((()=>j.filter((e=>"cost-management"!==e.split(":")[0]||0!==(se(e)||{count:0}).count)).filter((t=>e.some((e=>t.match(e))))).map((e=>({uuid:e}))))),_.change("base-permissions-loaded",!0)}}),[B,L]);const ie=e=>e.reduce(((e,t)=>({"":{...e?.[""],[t]:!0}})),{"":{}}),oe={applications:[...D].filter((e=>e.includes(U))).map((e=>({label:e,value:e}))),resources:[...N].filter((e=>e.includes(U))).map((e=>({label:e,value:e}))),operations:[...V].filter((e=>e.includes(U))).map((e=>({label:e,value:e})))},ne={label:l().createElement("div",null,S.formatMessage(T.Z.noResultsFound)),isDisabled:!0},ce=oe[Object.keys(oe)[X||0]].length>10;return l().createElement("div",{className:"rbac-c-permissions-table"},l().createElement(d.M,{columns:R,isSelectable:!0,isCompact:!0,borders:!1,rows:(t=>t.map((({application:t,resource:s,operation:a,uuid:r,requires:i})=>({uuid:`${t}:${s}:${a}`,requires:i,cells:[{title:t},s,a],selected:Boolean(e&&e.find((e=>e.uuid===r))),disableSelection:"cost-management"===t&&(0===(se(r)||{count:0}).count||!C)||"inventory"===t&&!te,disabledContent:"cost-management"===t?l().createElement("div",null,S.formatMessage(C?T.Z.configureResourcesForPermission:T.Z.noCostManagementPermissions)," ",C?l().createElement("a",{href:"./settings/sources"},S.formatMessage(T.Z.configureCostSources)):null):l().createElement("div",null,S.formatMessage(T.Z.noRbacPermissions))}))))(B),data:B,filterValue:"",noData:0===B?.length,noDataDescription:[S.formatMessage(T.Z.permissionNotDisplayedDescription)],fetchData:({limit:e,offset:t,applications:s,resources:a,operations:l})=>{x({limit:e,offset:t,application:(s||W.applications).join(),resourceType:(a||W.resources).join(),verb:(l||W.operations).join()})},setFilterValue:({applications:e,resources:t,operations:s})=>{Y({...W,...e?{applications:e}:W.applications,...t?{resources:t}:W.resources,...s?{operations:s}:W.operations})},isLoading:I||G,pagination:{...A,count:A.count},checkedRows:e,setCheckedItems:s=>{const a=s(e).filter((({uuid:e,application:t})=>"cost-management"!==t||se(e)?.count>0)).map((({uuid:e,requires:t})=>({uuid:e,requires:t})));t((0,M.isEqual)(a,e)?[]:a)},titlePlural:S.formatMessage(T.Z.permissions).toLowerCase(),titleSingular:S.formatMessage(T.Z.permission).toLowerCase(),showMoreTitle:S.formatMessage(z?T.Z.seeLess:T.Z.seeMore),onFilter:e=>J(e),onShowMore:ce?()=>{Q((()=>!z))}:void 0,onChange:(e,t)=>{J(""),ee(t)},value:X,filters:[{key:"applications",value:W.applications,placeholder:S.formatMessage(T.Z.filterByKey,{key:S.formatMessage(T.Z.application).toLowerCase()}),type:"group",selected:ie(W.applications),groups:[{type:oe.applications.length>0?"checkbox":"plain",items:oe.applications.length>0?[...oe.applications].slice(0,z?void 0:10):[ne]}]},{key:"resources",value:W.resources,placeholder:S.formatMessage(T.Z.filterByKey,{key:S.formatMessage(T.Z.resourceType).toLowerCase()}),type:"group",selected:ie(W.resources),groups:[{type:oe.resources.length>0?"checkbox":"plain",items:oe.resources.length>0?[...oe.resources].slice(0,z?void 0:10):[ne]}]},{key:"operations",value:W.operations,placeholder:S.formatMessage(T.Z.filterByKey,{key:S.formatMessage(T.Z.operation).toLowerCase()}),type:"group",selected:ie(W.operations),groups:[{type:oe.operations.length>0?"checkbox":"plain",items:oe.operations.length>0?[...oe.operations].slice(0,z?void 0:10):[ne]}]}],isFilterable:!0,rowWrapper:Z,tableId:"add-role-permissions",...s}))};P.propTypes={selectedPermissions:i().array,setSelectedPermissions:i().func};const R=P},47108:(e,t,s)=>{"use strict";s.d(t,{Z:()=>E});var a=s(28416),l=s.n(a),r=s(86706),i=s(9545),o=s(64380),n=s(16987),c=s(50247),p=s(46361),u=s(47189),m=s(27730),d=s(81169),f=s(48880),g=s(19862),y=s(25387),h=s(2550);const b=({costReducer:{resourceTypes:e,isLoading:t,loadingResources:s,resources:a}})=>({resourceTypes:e.data,resources:a,isLoading:t,isLoadingResources:s>0}),v=(e,t)=>{const s=e[t.key];switch(t.type){case"toggle":return{...e,[t.key]:{...s,isOpen:!s.isOpen}};case"select":return{...e,[t.key]:{...s,selected:s.selected.includes(t.selection)?s.selected.filter((e=>e!==t.selection)):[...s.selected,t.selection]}};case"selectAll":return{...e,[t.key]:{...s,selected:s.options.map((e=>e.value))}};case"clear":return{...e,[t.key]:{...s,selected:[]}};case"setOptions":return{...e,[t.key]:{...s,options:t.options,filteredOptions:t.options}};case"setFilter":return{...e,[t.key]:{...s,filteredOptions:s.options.filter((({value:e})=>e.includes(t.filtervalue)))}};default:return e}},E=e=>{const t=(0,y.YB)(),s=(0,r.useDispatch)(),{resourceTypes:E,isLoading:k,isLoadingResources:S,resources:C}=(0,r.useSelector)(b,r.shallowEqual),{input:Z}=(0,d.Z)(e),M=(0,f.default)(),w=M.getState().values["add-permissions-table"].filter((({uuid:e})=>e.split(":")[0].includes("cost-management"))),[T,F]=(0,a.useReducer)(v,w.reduce(((e,t)=>({...e,[t.uuid]:{selected:[],options:[],filteredOptions:[],isOpen:!1}})),{}));return(0,a.useEffect)((()=>{(M.getState().values["resource-definitions"]||[]).map((({permission:e,resources:t})=>t.map((t=>w.find((t=>t?.uuid===e))&&F({type:"select",selection:t,key:e}))))),s((0,g.b)(undefined)),M.change("has-cost-resources",!0)}),[]),(0,a.useEffect)((()=>{k||[...new Set(w.map((e=>E.find((t=>t.value===e.uuid.split(":")?.[1]))?.path)))].filter((e=>e)).map((e=>{return t=e,s((0,g.P)(t));var t}))}),[E]),(0,a.useEffect)((()=>{S||w.map((e=>{return F({type:"setOptions",key:e.uuid,options:C[(t=e.uuid,E.find((e=>e.value===t.split(":")?.[1]))?.path.split("/")?.[5])]||[]});var t}))}),[S]),(0,a.useEffect)((()=>{const e=Object.entries(T).map((([e,t])=>({permission:e,resources:t.selected})));Z.onChange(e),M.change("resource-definitions",e)}),[T]),l().createElement(i.Grid,{hasGutter:!0},l().createElement(i.GridItem,{md:4,className:"rbac-m-hide-on-sm"},l().createElement(o.Text,{component:o.TextVariants.h4,className:"rbac-bold-text"},t.formatMessage(h.Z.permissions))),l().createElement(i.GridItem,{md:8,className:"rbac-m-hide-on-sm"},l().createElement(o.Text,{component:o.TextVariants.h4,className:"rbac-bold-text"},t.formatMessage(h.Z.resourceDefinitions))),w.map((({uuid:e})=>{const s=T[e].filteredOptions;return l().createElement(l().Fragment,null,l().createElement(i.GridItem,{md:4,sm:12},l().createElement(c.Tooltip,{content:l().createElement("div",null,e)},l().createElement(n.FormGroup,{label:e.replace(/^cost-management:/,""),isRequired:!0}))),l().createElement(i.GridItem,{md:8,sm:12},l().createElement(p.P,{className:"rbac-m-resource-type-select",variant:u.TM.checkbox,typeAheadAriaLabel:t.formatMessage(h.Z.selectState),onToggle:(t,s)=>{F({type:"setFilter",key:e,filtervalue:""}),((e,t)=>{F({type:"toggle",key:e,isOpen:t})})(e,s)},onSelect:(a,l)=>{((e,t,s,a)=>{F(s?{type:"selectAll",selection:t,key:a}:{type:"select",selection:t,key:a})})(0,l,l===t.formatMessage(h.Z.selectAll,{length:s.length}),e)},onClear:()=>F({type:"clear",key:e}),selections:T[e].selected,isOpen:T[e].isOpen,onFilter:t=>t&&F({type:"setFilter",key:e,filtervalue:t.target.value}),"aria-labelledby":e,placeholderText:t.formatMessage(h.Z.selectResources),hasInlineFilter:!0},[l().createElement(m.$,{key:0,value:t.formatMessage(h.Z.selectAll,{length:s.length})}),...s.map(((e,t)=>l().createElement(m.$,{key:t+1,value:e.value})))])))})))}},68539:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var a=s(28416),l=s.n(a),r=s(45697),i=s.n(r),o=s(72232),n=s(25387),c=s(2550);const p=({formFields:e})=>{const t=(0,n.YB)();return l().createElement("div",{className:"rbac"},l().createElement(o.Title,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-lg"},t.formatMessage(c.Z.inventoryGroupsAccessTitle)),e)};p.propTypes={formFields:i().array};const u=p},51880:(e,t,s)=>{"use strict";s.d(t,{Z:()=>F});var a=s(28416),l=s.n(a),r=s(31055),i=s(9545),o=s(64380),n=s(16987),c=s(50247),p=s(42508),u=s(27052),m=s(46952),d=s(16696),f=s(15950),g=s(93595),y=s(43189),h=s(4837),b=s.n(h),v=s(86706),E=s(81169),k=s(48880),S=s(25387),C=s(29838),Z=s(29301),M=s(2550);const w=({inventoryReducer:{resourceTypes:e,total:t,isLoading:s}})=>({resourceTypes:e,totalCount:t,isLoading:s}),T=(e,t)=>{const s=e[t.key];switch(t.type){case"toggle":return{...e,[t.key]:{...s,isOpen:t.isOpen,filterValue:t.filterValue??s.filterValue,page:t.page??s.page}};case"select":return s.selected.some((e=>e?.id===t.processedSelection?.id))?{...e,[t.key]:{...s,selected:s.selected.filter((e=>e.id!==t.processedSelection?.id))}}:void 0!==t.processedSelection?.id&&void 0!==t.processedSelection?.name?{...e,[t.key]:{...s,selected:[...s.selected,t.processedSelection]}}:e;case"copyToAll":{const s=e[t.permissions[0]].selected;return{...e,...t.permissions.reduce(((t,a)=>(t[a]={...e[a],selected:a.includes("inventory:hosts")?s:s.filter((({id:e})=>null!==e))},t)),{})}}case"selectAll":return{...e,[t.key]:{...s,selected:t.selectionArray}};case"setFilter":return{...e,[t.key]:{...s,filterValue:t.filterValue,page:1}};case"setPage":return{...e,[t.key]:{...s,page:t.page}};case"clear":return{...e,[t.key]:{...s,selected:[]}};default:return e}},F=e=>{const t=(0,S.YB)(),s=(0,v.useDispatch)(),{input:h}=(0,E.Z)(e),F=(0,k.default)(),P=e=>e.includes("hosts:"),{resourceTypes:R,totalCount:x,isLoading:O}=(0,v.useSelector)(w,v.shallowEqual),B=F.getState().values["add-permissions-table"].filter((({uuid:e})=>e.split(":")[0].includes("inventory"))).map((({uuid:e})=>e))||[],I=(e,t)=>s((0,C.f)(e,t)),[A,L]=(0,a.useReducer)(T,B.reduce(((e,t)=>({...e,[t]:{page:1,selected:[],filterValue:"",isOpen:!1}})),{}));(0,a.useEffect)((()=>{I(B,{}),F.change("inventory-group-permissions",[])}),[]),(0,a.useEffect)((()=>{const e=Object.entries(A).map((([e,{selected:t}])=>({permission:e,groups:t})));h.onChange(e),F.change("inventory-group-permissions",e)}),[A]);const D=e=>L({type:"toggle",key:e,isOpen:!A[e].isOpen}),N=(e,t,s)=>{L({type:"setFilter",key:s,filterValue:t}),(0,Z.Aq)((()=>I([s],{name:t})),2e3)};return l().createElement(i.Grid,{hasGutter:!0},l().createElement(i.GridItem,{md:3,className:"rbac-m-hide-on-sm"},l().createElement(o.Text,{component:o.TextVariants.h4,className:"rbac-bold-text pf-v5-u-mt-sm"},t.formatMessage(M.Z.permissions))),l().createElement(i.GridItem,{lg:9,md:6,className:"rbac-m-hide-on-sm"},l().createElement(o.Text,{component:o.TextVariants.h4,className:"rbac-bold-text pf-v5-u-mt-sm"},t.formatMessage(M.Z.groupDefinition))),B.map(((e,s)=>{const a=Object.values(R?.[e]??{});return l().createElement(l().Fragment,{key:e},l().createElement(i.Grid,null,l().createElement(i.GridItem,{md:3},l().createElement(n.FormGroup,{label:e?.replace("inventory:",""),isRequired:!0})),l().createElement(i.GridItem,{md:7},l().createElement(d.Select,{role:"menu","aria-labelledby":e,className:"rbac-c-resource-type-select",isOpen:A[e].isOpen,selected:A[e].selected,onSelect:(t,s)=>((e,t,s,a)=>{const l={id:null,name:"null"};return s&&L({type:"selectAll",selectionArray:P(a)?[l,...Object.values(R[a])]:Object.values(R[a]),key:a})||L({type:"select",processedSelection:"null"===t?l:R[a][t],key:a})})(0,s,"select-all"===s,e),onOpenChange:t=>L({type:"toggle",key:e,isOpen:t}),toggle:s=>((e,s)=>l().createElement(c.Tooltip,{content:l().createElement("div",null,t.formatMessage(M.Z.inventoryGroupsTooltip))},l().createElement(u.MenuToggle,{variant:"typeahead","aria-label":t.formatMessage(M.Z.inventoryGroupsTypeAheadLabel),onClick:()=>D(s),innerRef:e,isExpanded:A[s].isOpen,isFullWidth:!0},l().createElement(m.TextInputGroup,{isPlain:!0},l().createElement(m.TextInputGroupMain,{value:A[s].filterValue,onClick:()=>A[s].isOpen||D(s),onChange:(e,t)=>N(0,t,s),autoComplete:"off",placeholder:t.formatMessage(M.Z.selectGroups),role:"combobox",isExpanded:A[s].isOpen},A[s].selected.length>0?l().createElement(y.ChipGroup,{"aria-label":"Current selections"},l().createElement(y.Chip,{closeBtnAriaLabel:"Clear all",badge:l().createElement(g.Badge,{isRead:!0},A[s].selected.length),onClick:e=>{e.stopPropagation(),L({type:"clear",key:s})}},"selected")):null),l().createElement(m.TextInputGroupUtilities,null,A[s].filterValue.length>0&&l().createElement(r.Button,{variant:"plain","aria-label":"Clear input value",onClick:e=>{e.stopPropagation(),e.preventDefault(),N(0,"",s)}},l().createElement(b(),{"aria-hidden":!0})))))))(s,e)},l().createElement(d.SelectList,null,a?.length>0?l().createElement(d.SelectOption,{className:"pf-v5-u-link-color",key:`${e}-all`,value:"select-all"},l().createElement(S._H,{...M.Z.selectAll,values:{length:a?.length+Number(P(e))}})):null,P(e)?l().createElement(l().Fragment,null,l().createElement(d.SelectOption,{key:`${e}-ungrouped`,value:"null",hasCheckbox:!0,isSelected:A[e].selected.some((e=>"null"===e.name))},l().createElement(S._H,{...M.Z.ungroupedSystems})),a.length>0?l().createElement(p.Divider,{component:"li",key:`${e}-divider`}):null):null,a.map((t=>l().createElement(d.SelectOption,{hasCheckbox:!0,key:t.id,isSelected:A[e].selected.some((e=>e.name===t.name)),className:t.className,value:t.name},t.name))),O||R[e]&&Object.values(R[e]).length<x?l().createElement(d.SelectOption,{...!O&&{isLoadButton:!0},...O&&{isLoading:!0},onClick:()=>{I([e],{page:A[e].page+1,name:A[e].filterValue}),L({type:"setPage",key:e,page:A[e].page++})},value:"loader"},O?l().createElement(f.Spinner,{size:"lg"}):t.formatMessage(M.Z.seeMore)):null))),l().createElement(i.GridItem,{md:2},s<=0&&B.length>1&&l().createElement(r.Button,{key:`${e}-copy`,variant:"link",isInLink:!0,onClick:()=>L({type:"copyToAll",permissions:B})},t.formatMessage(M.Z.copyToAll)))))})))}},92884:(e,t,s)=>{"use strict";s.d(t,{j:()=>l});var a=s(60966);const l=(e,t)=>{const s=t&&t["add-permissions-table"]||[],l=s.some((({uuid:e})=>(0,a.u3)(e))),r=s.some((({uuid:e})=>(0,a.Rt)(e)));return"inventory-groups-role"===e&&l?"cost-resources-definition":"add-permissions"===e&&r?"inventory-groups-role":"add-permissions"===e&&l?"cost-resources-definition":"review"}},60966:(e,t,s)=>{"use strict";s.d(t,{Hg:()=>o,Rt:()=>l,_T:()=>r,u3:()=>i});var a=s(2550);const l=e=>e.split(":")[0].includes("inventory"),r=e=>l(e)&&e.split(":")[1].includes("hosts"),i=e=>e.split(":")[0].includes("cost-management"),o=(e,t,s)=>{let l=e.filter(Boolean);return r(t)&&e.includes(null)&&l.unshift(s.formatMessage(a.Z.ungroupedSystems)),l.reduce(((e,t)=>[...e,{cells:[t]}]),[])}},82472:()=>{},97890:()=>{},17657:()=>{},22972:()=>{},43389:()=>{},70347:()=>{},1580:()=>{},94498:()=>{},80897:()=>{},30187:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},36974:()=>{},40209:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7760.f66d78890c58d32f65ed08c189e82e93.js.map
(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4440,5467,209],{84414:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(62012),r=s(64756);const o=e=>{const t=(0,a.useNavigate)();return(s,a)=>t((0,r.n)(s,e),a)}},66180:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(28416),r=s.n(a),o=s(95376),i=s(58826),l=s.n(i);const n=({title:e,icon:t,description:s,actions:a,...i})=>r().createElement(o.EmptyState,{variant:o.EmptyStateVariant.sm,...i},r().createElement(o.EmptyStateHeader,{titleText:r().createElement(r().Fragment,null,e),icon:r().createElement(o.EmptyStateIcon,{icon:t||l()}),headingLevel:"h4"}),r().createElement(o.EmptyStateBody,{className:"pf-v5-u-mb-md"},s.map(((e,t)=>r().createElement(r().Fragment,{key:t},e," ",r().createElement("br",null))))),r().createElement(o.EmptyStateFooter,null,a))},97246:(e,t,s)=>{"use strict";s.d(t,{M:()=>Z});var a=s(28416),r=s.n(a),o=s(25387),i=s(45697),l=s.n(i),n=s(2550),c=s(75863),p=s(21081),u=s(49004),m=s(34844),d=s(15433),f=s(31055),g=s(93297),y=s(95376),h=s(12849),b=s(47826),v=s.n(b),E=s(29301),k=s(68572),S=s(66180);const Z=({isCompact:e,borders:t,columns:s,rows:i,toolbarButtons:l,data:b,actionResolver:Z,areActionsDisabled:C,routes:M,titlePlural:w,titleSingular:T,pagination:F,paginationProps:P,filterValue:R,isLoading:x,emptyFilters:B,setFilterValue:A,checkedRows:I,isSelectable:O,isRowSelectable:L,fetchData:D,setCheckedItems:V,emptyProps:j,filterPlaceholder:N,rowWrapper:G,filters:$,isFilterable:q,onShowMore:_,showMoreTitle:W,onFilter:Y,onChange:H,value:K,sortBy:z,onSort:Q,isExpandable:U,onExpand:J,hideFilterChips:X,hideHeader:ee,noData:te,noDataDescription:se,ouiaId:ae,tableId:re,containerRef:oe,textFilterRef:ie})=>{const le=(0,o.YB)();return r().createElement(a.Fragment,null,M(),!x&&0===i?.length&&0===R?.length&&$.every((({value:e})=>!e))?r().createElement(S.Z,{title:le.formatMessage(n.Z.configureItems,{items:w}),icon:v(),description:[le.formatMessage(n.Z.toConfigureUserAccess),le.formatMessage(n.Z.createAtLeastOneItem,{item:T})],actions:l()[0],...j}):(()=>{const o=`${"desc"===z?.direction?"-":""}${s[z?.index]?.key}`;return r().createElement(a.Fragment,null,r().createElement(k.ZP,{isSelectable:O,isRowSelectable:L,checkedRows:I,setCheckedItems:V,isLoading:x||te,data:b,titleSingular:T,filterValue:R,setFilterValue:A,sortBy:o,pagination:F,paginationProps:P,fetchData:D,toolbarButtons:l,filterPlaceholder:N,filters:$,isFilterable:q,onShowMore:_,showMoreTitle:W,onFilter:Y,onChange:H,value:K,hideFilterChips:X,tableId:re,containerRef:oe,textFilterRef:ie}),x?r().createElement(h.Wi,{isCompact:e,items:F?.limit}):r().createElement(p.i,{canSelectAll:!1,"aria-label":`${w.toLowerCase()} table`,variant:e?c.B.compact:null,borders:t,...O&&i?.length>0&&{onSelect:(e,t,s,{uuid:a,cells:[r],requires:o})=>V((0,E.ZQ)([{uuid:a,name:r,requires:o}],t))},...U&&{onExpand:J},rows:i?.length>0?i:[{fullWidth:!0,cells:[{title:r().createElement(S.Z,{title:le.formatMessage(n.Z.noMatchingItemsFound,{items:w}),description:te&&se?se:[le.formatMessage(n.Z.filterMatchesNoItems,{items:w}),le.formatMessage(n.Z.tryChangingFilters)],actions:te&&se?void 0:[r().createElement(y.EmptyStateActions,{key:"clear-filters"},r().createElement(f.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{A(B),D({...F,offset:0,...B||{name:""}})}},le.formatMessage(n.Z.clearAllFilters)))]}),props:{colSpan:s.length}}]}],cells:s,...i?.length>0&&{actionResolver:Z},className:0==i?.length?"ins-c-table-empty-state":"",areActionsDisabled:C,rowWrapper:G,sortBy:z,ouiaId:ae,onSort:(e,t,s,a)=>Q(e,t,s,a)},!ee&&r().createElement(u.x,null),r().createElement(m.R,null)),!F.noBottom&&r().createElement(d.Z,null,!x&&r().createElement(g.Pagination,{...(0,k.Wz)(F,D,R,z,P),variant:"bottom",dropDirection:"up"})))})())};Z.propTypes={...k.ZP.propTypes,sortBy:l().shape({directions:l().string,index:l().number}),rowWrapper:l().any,isCompact:l().bool,isRowSelectable:l().func,borders:l().bool,emptyFilters:l().object,checkedRows:l().array,columns:l().array.isRequired,rows:l().array.isRequired,titlePlural:l().string,routes:l().func,actionResolver:l().func,areActionsDisabled:l().func,pagination:l().shape({noBottom:l().bool,limit:l().number,offset:l().number,count:l().number}),paginationProps:l().shape({toggleTemplate:l().func,isCompact:l().bool}),isExpandable:l().bool,onExpand:l().func,onSort:l().func,containerRef:l().node,noData:l().bool,hideFilterChips:l().bool,hideHeader:l().bool,noDataDescription:l().arrayOf(l().node),filters:l().array,tableId:l().string.isRequired},Z.defaultProps={...k.ZP.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1}},68572:(e,t,s)=>{"use strict";s.d(t,{Wz:()=>d,ZP:()=>b});var a=s(28416),r=s.n(a),o=s(31611),i=s(25387),l=s(45697),n=s.n(l),c=s(2550),p=s(96486),u=s(29301),m=s(74982);const d=(e={},t,s="",a="",r)=>({...r,itemCount:e.count,perPage:e.limit,page:(0,m.wy)(e.limit,e.offset),onSetPage:(r,o)=>{t({...e,offset:(0,m.vE)(o,e.limit),name:s,orderBy:a})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,r)=>{t({offset:0,limit:r,name:s,orderBy:a})}}),f=(e,t=[],s=(()=>{}),a=[],r,o=(()=>!0))=>{const l=(0,i.YB)();return{count:t.length,items:[{title:l.formatMessage(c.Z.selectNone),onClick:()=>{s((()=>[]))}},{...!e&&a&&a.length>0?{title:l.formatMessage(c.Z.selectPage,{length:a.filter(o).length}),onClick:()=>{s((0,u.ZQ)(a,!0))}}:{}}],checked:(0,u.um)(a,t,o),onSelect:t=>{!e&&s((0,u.ZQ)(a,t))},id:r}},g=(e,t=(()=>{}),s=(()=>{}),a="",r={},o="",l,n,m,d,f,g,y,h,b,v,E)=>{const k=(0,i.YB)();return{onChange:h,value:b,items:[...m&&m.length>0?m.map((({key:o,label:i,value:l,selected:n,placeholder:h,type:b="text",groups:E,items:S,innerRef:Z})=>({label:i||(0,u.RI)(o),type:b??"text",filterValues:{innerRef:Z,id:`filter-by-${o}`,key:`filter-by-${o}`,placeholder:h||k.formatMessage(c.Z.filterByKey,{key:o}),value:l,selected:n,..."text"!==b?{isFilterable:d,onShowMore:f,showMoreTitle:g,onFilter:y}:{},groups:E,items:S,onChange:(e,i)=>{const l="string"==typeof i||Array.isArray(i)?i:Object.keys((0,p.pickBy)(i[""],(e=>e)));t({...a,...r,offset:0,[o]:l}),(0,u.Aq)((()=>s({...r,offset:0,orderBy:v,...m.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[o]:l}))).then((e=>(Z?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,u.RI)(l||o),type:"text",filterValues:{innerRef:E,id:"filter-by-string",key:"filter-by-string",placeholder:k.formatMessage(c.Z.filterByKey,{key:l||o}),value:a,onChange:(e,a)=>{t({...r,offset:0,name:a}),(0,u.Aq)((()=>s({...r,offset:0,name:a,orderBy:v}))).then((e=>(E?.current?.focus(),e)))},isDisabled:e}}],...n||[]]}},y=(e="",t,s={},a=(()=>{}),r=(()=>{}),o)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,u.RI)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[i],l)=>{const n=(e,t,s)=>l?"group"===t||"checkbox"===t?[]:"":s!==i.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==i.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:s,type:a})=>({...e,[t]:n(s,a,t)})),{});a({...s,offset:0,name:"",...c}),r({...s,offset:0,orderBy:o,name:"",...c})}}),h=({isSelectable:e,isRowSelectable:t,checkedRows:s,setCheckedItems:a,isLoading:i,data:l,titleSingular:n,filterValue:c,setFilterValue:p,pagination:u,paginationProps:m,fetchData:h,sortBy:b,toolbarButtons:v,filterPlaceholder:E,filterItems:k,filters:S,isFilterable:Z,onShowMore:C,showMoreTitle:M,onFilter:w,onChange:T,value:F,hideFilterChips:P,tableId:R,textFilterRef:x})=>r().createElement(o.Z,{...e&&{bulkSelect:f(i,s,a,l,R,t)},filterConfig:g(i,p,h,c,u,n,E,k,S,Z,C,M,w,T,F,b,x),actionsConfig:{actions:v()},...!i&&{pagination:d(u,h,c,b,m)},...(c.length>0||S&&S.length>0)&&!P&&{activeFiltersConfig:y(c,S,u,p,h,b)}});h.propTypes={isSelectable:n().bool,isRowSelectable:n().func,checkedRows:n().array,setCheckedItems:n().func,isLoading:n().bool,data:n().array,titleSingular:n().string,filterValue:n().oneOfType([n().array,n().string]),setFilterValue:n().func,filters:n().arrayOf(n().shape({value:n().oneOfType([n().string,n().number,n().array]),key:n().string,placeholder:n().string})),isFilterable:n().bool,onShowMore:n().func,showMoreTitle:n().string,onFilter:n().func,onChange:n().func,value:n().any,pagination:n().shape({limit:n().number,offset:n().number,count:n().number}),paginationProps:n().shape({toggleTemplate:n().func,isCompact:n().bool}),sortBy:n().string,filterItems:n().arrayOf(n().object),filterPlaceholder:n().string,isCollapsible:n().bool,fetchData:n().func.isRequired,toolbarButtons:n().func,hideFilterChips:n().bool,tableId:n().string,textFilterRef:n().object},h.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:m.he,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const b=h},19862:(e,t,s)=>{"use strict";s.d(t,{P:()=>n,b:()=>l});var a=s(71079);const r=(0,s(75465).i$)();async function o(e){return await r.getResourceTypes(e)}async function i(e){return await r.getResource(e)}const l=e=>({type:a.PN,payload:o(e)}),n=e=>({type:a.S9,payload:i(e)})},29838:(e,t,s)=>{"use strict";s.d(t,{f:()=>i});var a=s(71079);const r=(0,s(75465).bD)(),o=async e=>await r.getInventoryGroups(e),i=(e,t)=>({type:a.rF,meta:{permissions:e,config:t},payload:o(t)})},52229:(e,t,s)=>{"use strict";s.d(t,{Z:()=>b});var a=s(28416),r=s.n(a),o=s(45697),i=s.n(o),l=s(43189),n=s(64380),c=s(72232),p=s(31055),u=s(78972),m=s(5904),d=s(48880),f=s(21873),g=s(25387),y=s(2550);const h=({formFields:e})=>{const t=(0,d.default)(),[s,o]=(0,a.useState)(t.getState().values["add-permissions-table"]||[]),[i,h]=(0,a.useState)(!1),b=t.getState().values["not-allowed-permissions"],v=(0,g.YB)(),E=t.getState().values?.["copy-base-role"]?.applications?.filter((e=>!s?.find((({uuid:t})=>t.includes(e)))))||[],k=e[0][0];return r().createElement("div",{className:"rbac"},s.length>0?r().createElement("div",{className:"rbac-c-selected-chips"},r().createElement(l.ChipGroup,{categoryName:v.formatMessage(y.Z.selectedPermissions)},s.reduce(((e,t)=>[t,...e]),[]).map((({uuid:e})=>r().createElement(l.Chip,{key:e,color:"blue",isTruncated:!0,onClick:()=>o(s.filter((t=>t.uuid!==e)))},e))))):null,r().createElement(c.Title,{headingLevel:"h1",size:"xl",className:"rbac-c-add-permission-title"},v.formatMessage(y.Z.addPermissions)),r().createElement(n.TextContent,null,r().createElement(n.Text,null,v.formatMessage(y.Z.selectPermissionsForRole),0!==E.length&&r().createElement(u.Popover,{headerContent:v.formatMessage(y.Z.onlyGranularPermissions),bodyContent:v.formatMessage(y.Z.noWildcardPermissions)},r().createElement(p.Button,{variant:"link"},v.formatMessage(y.Z.whyNotSeeingAllPermissions)," ",r().createElement(f.ZP,null))))),b?.length>0&&!i?r().createElement(m.Alert,{variant:"custom",isInline:!0,title:`${v.formatMessage(y.Z.followingPermissionsCannotBeAdded)} ${b.join(", ")}`,actionClose:r().createElement(m.AlertActionCloseButton,{onClose:()=>h(!0)})}):null,[[{...k,props:{...k.props,selectedPermissions:s,setSelectedPermissions:o}}]])};h.propTypes={formFields:i().array};const b=h},55594:(e,t,s)=>{"use strict";s.d(t,{Z:()=>R});var a=s(28416),r=s.n(a),o=s(45697),i=s.n(o),l=s(86706),n=s(55140),c=s(81169),p=s(48880),u=s(48623),m=s(43707),d=s(97246),f=s(71079);const g=(0,s(75465).Y3)(),y=["inventory:staleness"];async function h(e,t,s,a,r,o,i,l,n,c,p){const u=await g.listPermissions(e,t,s,a,r,o,i,l,n,c,p);return{...u,data:u.data.filter((({permission:e})=>!y.some((t=>e.includes(t)))))}}async function b(e,t,s,a,r,o,i,l){return await g.listPermissionOptions(e,t,s,a,r,o,void 0,i,l)}const v={application:f.KD,resource_type:f.vf,verb:f.E2};var E=s(19862),k=s(13563),S=s(50247),Z=s(55573);const C=({row:e,...t})=>e.disableSelection?r().createElement(S.Tooltip,{content:e.disabledContent,exitDelay:1500,entryDelay:1500},r().createElement(Z.e,{className:"rbac-c-disabled-row",row:e,...t})):r().createElement(Z.e,{row:e,...t});C.propTypes={props:i().object,row:i().object};var M=s(96486),w=s(25387),T=s(2550);const F=({permissionReducer:{permission:e,isLoading:t,options:{application:s,operation:a,resource:r},expandSplats:o,isLoadingExpandSplats:i},roleReducer:{isRecordLoading:l,selectedRole:n},costReducer:{resourceTypes:c}})=>({permissions:e.data.map((({application:e,resource_type:t,verb:s,permission:a,requires:r}={})=>({application:e,resource:t,operation:s,uuid:a,requires:r}))),pagination:e.meta,isLoading:t||l,baseRole:n,applicationOptions:s.data.filter((e=>"*"!==e)),resourceOptions:r.data.filter((e=>"*"!==e)),operationOptions:a.data.filter((e=>"*"!==e)),expandedPermissions:o.data.map((({permission:e})=>e)),isLoadingExpandSplats:i,resourceTypes:c.data}),P=({selectedPermissions:e,setSelectedPermissions:t,...s})=>{const[o,i]=(0,a.useState)(null),{auth:g}=(0,n.Z)(),y=(0,l.useDispatch)(),S=(0,w.YB)(),{hasAccess:Z}=(0,m.ZP)("cost-management",["cost-management:*:*"]),{hasAccess:P}=(0,m.ZP)("rbac",["rbac:*:*"]),R=[S.formatMessage(T.Z.application),S.formatMessage(T.Z.resourceType),S.formatMessage(T.Z.operation)];(0,a.useEffect)((()=>{g&&(async()=>{const{identity:{user:e}}=await g.getUser();i(e.is_org_admin)})()}),[g]);const x=e=>y((({limit:e,offset:t,orderBy:s,application:a,resourceType:r,verb:o,permission:i,exclude_globals:l=!0,exclude_roles:n,allowed_only:c,options:p})=>({type:f.wI,payload:h(e,t,s,a,r,o,i,l,n,c,p)}))({...e,...K?{exclude_roles:K}:{},allowed_only:!0})),B=e=>y((({field:e,limit:t,offset:s,application:a,resourceType:r,verb:o,allowedOnly:i,options:l})=>({type:v[e],payload:b(e,t,s,a,r,o,i,l)}))({...e,allowedOnly:!0})),{permissions:A,isLoading:I,pagination:O,baseRole:L,applicationOptions:D,resourceOptions:V,operationOptions:j,expandedPermissions:N,isLoadingExpandSplats:G,resourceTypes:$}=(0,l.useSelector)(F,l.shallowEqual),{input:q}=(0,c.Z)(s),_=(0,p.default)(),[W,Y]=(0,a.useState)({applications:[],resources:[],operations:[]}),H=_.getState().values["role-type"],K=_.getState().values["role-uuid"],[z,Q]=(0,a.useState)(!1),[U,J]=(0,a.useState)(""),[X,ee]=(0,a.useState)(),te=(0,a.useMemo)((()=>o||(P??!1)),[P,o]),se=e=>$.find((t=>t.value===e.split(":")?.[1])),ae=(0,a.useCallback)((0,u.Z)((({applications:e,resources:t,operations:s})=>B({field:"application",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]),re=(0,a.useCallback)((0,u.Z)((({applications:e,resources:t,operations:s})=>B({field:"resource_type",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]),oe=(0,a.useCallback)((0,u.Z)((({applications:e,resources:t,operations:s})=>B({field:"verb",limit:50,application:e.join(),resourceType:t.join(),verb:s.join()})),2e3),[]);(0,a.useEffect)((()=>{const e=_.getState().values["copy-base-role"]?.uuid;return"copy"===H&&e&&y((0,k.fp)(e)),_.change("has-cost-resources",!1),x(O),B({field:"application",limit:50}),B({field:"resource_type",limit:50}),B({field:"verb",limit:50}),()=>y({type:f.e0,payload:{data:[]}})}),[]),(0,a.useEffect)((()=>{Z&&y((0,E.b)())}),[Z]),(0,a.useEffect)((()=>{re(W),oe(W)}),[W.applications]),(0,a.useEffect)((()=>{ae(W),oe(W)}),[W.resources]),(0,a.useEffect)((()=>{ae(W),re(W)}),[W.operations]),(0,a.useEffect)((()=>{q.onChange(e)}),[e]),(0,a.useEffect)((()=>{if(!L||"copy"!==H||_.getState().values["base-permissions-loaded"]||e.length>0||_.getState().values["copy-base-role"]?.uuid!==L?.uuid||G||I)return;let s=[];const a=L?.access.filter((e=>!!D.includes(e?.permission?.split(":")[0])||(s.push(e),!1)))||[];if(_.change("not-allowed-permissions",s.map((({permission:e})=>e))),0===N.length&&void 0===G){const e=[...new Set(a.map((({permission:e})=>e.split(":")[0])))];y((({limit:e=1e3,offset:t=0,orderBy:s,application:a,resourceType:r,verb:o,permission:i,exclude_globals:l=!0,options:n})=>({type:f.e,payload:h(e,t,s,a,r,o,i,l,n)}))({application:e.join()}))}else{const e=a.map((({permission:e})=>e.replace("*",".*")));t((()=>N.filter((e=>"cost-management"!==e.split(":")[0]||0!==(se(e)||{count:0}).count)).filter((t=>e.some((e=>t.match(e))))).map((e=>({uuid:e}))))),_.change("base-permissions-loaded",!0)}}),[A,L]);const ie=e=>e.reduce(((e,t)=>({"":{...e?.[""],[t]:!0}})),{"":{}}),le={applications:[...D].filter((e=>e.includes(U))).map((e=>({label:e,value:e}))),resources:[...V].filter((e=>e.includes(U))).map((e=>({label:e,value:e}))),operations:[...j].filter((e=>e.includes(U))).map((e=>({label:e,value:e})))},ne={label:r().createElement("div",null,S.formatMessage(T.Z.noResultsFound)),isDisabled:!0},ce=le[Object.keys(le)[X||0]].length>10;return r().createElement("div",{className:"rbac-c-permissions-table"},r().createElement(d.M,{columns:R,isSelectable:!0,isCompact:!0,borders:!1,rows:(t=>t.map((({application:t,resource:s,operation:a,uuid:o,requires:i})=>({uuid:`${t}:${s}:${a}`,requires:i,cells:[{title:t},s,a],selected:Boolean(e&&e.find((e=>e.uuid===o))),disableSelection:"cost-management"===t&&(0===(se(o)||{count:0}).count||!Z)||"inventory"===t&&!te,disabledContent:"cost-management"===t?r().createElement("div",null,S.formatMessage(Z?T.Z.configureResourcesForPermission:T.Z.noCostManagementPermissions)," ",Z?r().createElement("a",{href:"./settings/sources"},S.formatMessage(T.Z.configureCostSources)):null):r().createElement("div",null,S.formatMessage(T.Z.noRbacPermissions))}))))(A),data:A,filterValue:"",noData:0===A?.length,noDataDescription:[S.formatMessage(T.Z.permissionNotDisplayedDescription)],fetchData:({limit:e,offset:t,applications:s,resources:a,operations:r})=>{x({limit:e,offset:t,application:(s||W.applications).join(),resourceType:(a||W.resources).join(),verb:(r||W.operations).join()})},setFilterValue:({applications:e,resources:t,operations:s})=>{Y({...W,...e?{applications:e}:W.applications,...t?{resources:t}:W.resources,...s?{operations:s}:W.operations})},isLoading:I||G,pagination:{...O,count:O.count},checkedRows:e,setCheckedItems:s=>{const a=s(e).filter((({uuid:e,application:t})=>"cost-management"!==t||se(e)?.count>0)).map((({uuid:e,requires:t})=>({uuid:e,requires:t})));t((0,M.isEqual)(a,e)?[]:a)},titlePlural:S.formatMessage(T.Z.permissions).toLowerCase(),titleSingular:S.formatMessage(T.Z.permission).toLowerCase(),showMoreTitle:S.formatMessage(z?T.Z.seeLess:T.Z.seeMore),onFilter:e=>J(e),onShowMore:ce?()=>{Q((()=>!z))}:void 0,onChange:(e,t)=>{J(""),ee(t)},value:X,filters:[{key:"applications",value:W.applications,placeholder:S.formatMessage(T.Z.filterByKey,{key:S.formatMessage(T.Z.application).toLowerCase()}),type:"group",selected:ie(W.applications),groups:[{type:le.applications.length>0?"checkbox":"plain",items:le.applications.length>0?[...le.applications].slice(0,z?void 0:10):[ne]}]},{key:"resources",value:W.resources,placeholder:S.formatMessage(T.Z.filterByKey,{key:S.formatMessage(T.Z.resourceType).toLowerCase()}),type:"group",selected:ie(W.resources),groups:[{type:le.resources.length>0?"checkbox":"plain",items:le.resources.length>0?[...le.resources].slice(0,z?void 0:10):[ne]}]},{key:"operations",value:W.operations,placeholder:S.formatMessage(T.Z.filterByKey,{key:S.formatMessage(T.Z.operation).toLowerCase()}),type:"group",selected:ie(W.operations),groups:[{type:le.operations.length>0?"checkbox":"plain",items:le.operations.length>0?[...le.operations].slice(0,z?void 0:10):[ne]}]}],isFilterable:!0,rowWrapper:C,tableId:"add-role-permissions",...s}))};P.propTypes={selectedPermissions:i().array,setSelectedPermissions:i().func};const R=P},47108:(e,t,s)=>{"use strict";s.d(t,{Z:()=>E});var a=s(28416),r=s.n(a),o=s(86706),i=s(9545),l=s(64380),n=s(16987),c=s(50247),p=s(46361),u=s(47189),m=s(27730),d=s(81169),f=s(48880),g=s(19862),y=s(25387),h=s(2550);const b=({costReducer:{resourceTypes:e,isLoading:t,loadingResources:s,resources:a}})=>({resourceTypes:e.data,resources:a,isLoading:t,isLoadingResources:s>0}),v=(e,t)=>{const s=e[t.key];switch(t.type){case"toggle":return{...e,[t.key]:{...s,isOpen:!s.isOpen}};case"select":return{...e,[t.key]:{...s,selected:s.selected.includes(t.selection)?s.selected.filter((e=>e!==t.selection)):[...s.selected,t.selection]}};case"selectAll":return{...e,[t.key]:{...s,selected:s.options.map((e=>e.value))}};case"clear":return{...e,[t.key]:{...s,selected:[]}};case"setOptions":return{...e,[t.key]:{...s,options:t.options,filteredOptions:t.options}};case"setFilter":return{...e,[t.key]:{...s,filteredOptions:s.options.filter((({value:e})=>e.includes(t.filtervalue)))}};default:return e}},E=e=>{const t=(0,y.YB)(),s=(0,o.useDispatch)(),{resourceTypes:E,isLoading:k,isLoadingResources:S,resources:Z}=(0,o.useSelector)(b,o.shallowEqual),{input:C}=(0,d.Z)(e),M=(0,f.default)(),w=M.getState().values["add-permissions-table"].filter((({uuid:e})=>e.split(":")[0].includes("cost-management"))),[T,F]=(0,a.useReducer)(v,w.reduce(((e,t)=>({...e,[t.uuid]:{selected:[],options:[],filteredOptions:[],isOpen:!1}})),{}));return(0,a.useEffect)((()=>{(M.getState().values["resource-definitions"]||[]).map((({permission:e,resources:t})=>t.map((t=>w.find((t=>t?.uuid===e))&&F({type:"select",selection:t,key:e}))))),s((0,g.b)(undefined)),M.change("has-cost-resources",!0)}),[]),(0,a.useEffect)((()=>{k||[...new Set(w.map((e=>E.find((t=>t.value===e.uuid.split(":")?.[1]))?.path)))].filter((e=>e)).map((e=>{return t=e,s((0,g.P)(t));var t}))}),[E]),(0,a.useEffect)((()=>{S||w.map((e=>{return F({type:"setOptions",key:e.uuid,options:Z[(t=e.uuid,E.find((e=>e.value===t.split(":")?.[1]))?.path.split("/")?.[5])]||[]});var t}))}),[S]),(0,a.useEffect)((()=>{const e=Object.entries(T).map((([e,t])=>({permission:e,resources:t.selected})));C.onChange(e),M.change("resource-definitions",e)}),[T]),r().createElement(i.Grid,{hasGutter:!0},r().createElement(i.GridItem,{md:4,className:"rbac-m-hide-on-sm"},r().createElement(l.Text,{component:l.TextVariants.h4,className:"rbac-bold-text"},t.formatMessage(h.Z.permissions))),r().createElement(i.GridItem,{md:8,className:"rbac-m-hide-on-sm"},r().createElement(l.Text,{component:l.TextVariants.h4,className:"rbac-bold-text"},t.formatMessage(h.Z.resourceDefinitions))),w.map((({uuid:e})=>{const s=T[e].filteredOptions;return r().createElement(r().Fragment,null,r().createElement(i.GridItem,{md:4,sm:12},r().createElement(c.Tooltip,{content:r().createElement("div",null,e)},r().createElement(n.FormGroup,{label:e.replace(/^cost-management:/,""),isRequired:!0}))),r().createElement(i.GridItem,{md:8,sm:12},r().createElement(p.P,{className:"rbac-m-resource-type-select",variant:u.TM.checkbox,typeAheadAriaLabel:t.formatMessage(h.Z.selectState),onToggle:(t,s)=>{F({type:"setFilter",key:e,filtervalue:""}),((e,t)=>{F({type:"toggle",key:e,isOpen:t})})(e,s)},onSelect:(a,r)=>{((e,t,s,a)=>{F(s?{type:"selectAll",selection:t,key:a}:{type:"select",selection:t,key:a})})(0,r,r===t.formatMessage(h.Z.selectAll,{length:s.length}),e)},onClear:()=>F({type:"clear",key:e}),selections:T[e].selected,isOpen:T[e].isOpen,onFilter:t=>t&&F({type:"setFilter",key:e,filtervalue:t.target.value}),"aria-labelledby":e,placeholderText:t.formatMessage(h.Z.selectResources),hasInlineFilter:!0},[r().createElement(m.$,{key:0,value:t.formatMessage(h.Z.selectAll,{length:s.length})}),...s.map(((e,t)=>r().createElement(m.$,{key:t+1,value:e.value})))])))})))}},68539:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var a=s(28416),r=s.n(a),o=s(45697),i=s.n(o),l=s(72232),n=s(25387),c=s(2550);const p=({formFields:e})=>{const t=(0,n.YB)();return r().createElement("div",{className:"rbac"},r().createElement(l.Title,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-lg"},t.formatMessage(c.Z.inventoryGroupsAccessTitle)),e)};p.propTypes={formFields:i().array};const u=p},51880:(e,t,s)=>{"use strict";s.d(t,{Z:()=>Z});var a=s(28416),r=s.n(a),o=s(31055),i=s(9545),l=s(64380),n=s(16987),c=s(50247),p=s(42508),u=s(27730),m=s(46361),d=s(47189),f=s(86706),g=s(81169),y=s(48880),h=s(25387),b=s(29838),v=s(29301),E=s(2550);const k=({inventoryReducer:{resourceTypes:e,total:t,isLoading:s}})=>({resourceTypes:e,totalCount:t,isLoading:s}),S=(e,t)=>{const s=e[t.key];switch(t.type){case"toggle":return{...e,[t.key]:{...s,isOpen:t.isOpen,filterValue:t.filterValue??s.filterValue,page:t.page??s.page}};case"select":return s.selected.some((e=>e?.id===t.processedSelection?.id))?{...e,[t.key]:{...s,selected:s.selected.filter((e=>e.id!==t.processedSelection?.id))}}:void 0!==t.processedSelection?.id&&void 0!==t.processedSelection?.name?{...e,[t.key]:{...s,selected:[...s.selected,t.processedSelection]}}:e;case"copyToAll":{const s=e[t.permissions[0]].selected;return{...e,...t.permissions.reduce(((t,a)=>(t[a]={...e[a],selected:a.includes("inventory:hosts")?s:s.filter((({id:e})=>null!==e))},t)),{})}}case"selectAll":return{...e,[t.key]:{...s,selected:t.selectionArray}};case"setFilter":return{...e,[t.key]:{...s,filterValue:t.filterValue,page:1}};case"setPage":return{...e,[t.key]:{...s,page:t.page}};case"clear":return{...e,[t.key]:{...s,selected:[]}};default:return e}},Z=e=>{const t=(0,h.YB)(),s=(0,f.useDispatch)(),{input:Z}=(0,g.Z)(e),C=(0,y.default)(),{resourceTypes:M,totalCount:w,isLoading:T}=(0,f.useSelector)(k,f.shallowEqual),F=C.getState().values["add-permissions-table"].filter((({uuid:e})=>e.split(":")[0].includes("inventory"))).map((({uuid:e})=>e))||[],P=(e,t)=>s((0,b.f)(e,t)),[R,x]=(0,a.useReducer)(S,F.reduce(((e,t)=>({...e,[t]:{page:1,selected:[],filterValue:"",isOpen:!1}})),{}));return(0,a.useEffect)((()=>{P(F,{}),C.change("inventory-group-permissions",[])}),[]),(0,a.useEffect)((()=>{const e=Object.entries(R).map((([e,{selected:t}])=>({permission:e,groups:t})));Z.onChange(e),C.change("inventory-group-permissions",e)}),[R]),r().createElement(i.Grid,{hasGutter:!0},r().createElement(i.GridItem,{lg:3,md:6,className:"rbac-m-hide-on-sm"},r().createElement(l.Text,{component:l.TextVariants.h4,className:"rbac-bold-text pf-v5-u-mt-sm"},t.formatMessage(E.Z.permissions))),r().createElement(i.GridItem,{lg:9,md:6,className:"rbac-m-hide-on-sm"},r().createElement(l.Text,{component:l.TextVariants.h4,className:"rbac-bold-text pf-v5-u-mt-sm"},t.formatMessage(E.Z.groupDefinition))),F.map(((e,s)=>{const a=t.formatMessage(E.Z.ungroupedSystems).toLocaleLowerCase().includes(R[e].filterValue.toLocaleLowerCase())?[r().createElement(u.$,{key:`${e}-ungrouped`,value:"null"},r().createElement(h._H,{...E.Z.ungroupedSystems})),r().createElement(p.Divider,{component:"li",key:`${e}-divider`})]:[],l=Object.values(M?.[e]??{});return r().createElement(r().Fragment,{key:e},r().createElement(i.Grid,null,r().createElement(i.GridItem,{lg:3,md:3,sm:4},r().createElement(n.FormGroup,{label:e?.replace("inventory:",""),isRequired:!0})),r().createElement(i.GridItem,{lg:7,md:6,sm:5},r().createElement(c.Tooltip,{content:r().createElement("div",null,t.formatMessage(E.Z.inventoryGroupsTooltip))},r().createElement(m.P,{className:"rbac-m-resource-type-select",variant:d.TM.checkbox,typeAheadAriaLabel:t.formatMessage(E.Z.inventoryGroupsTypeAheadLabel),"aria-labelledby":e,selections:R[e].selected.map((({name:e})=>e)),placeholderText:t.formatMessage(E.Z.selectGroups),onSelect:(t,s)=>((e,t,s,a)=>{const r={id:null,name:"null"};return s&&x({type:"selectAll",selectionArray:[r,...Object.values(M[a])],key:a})||x({type:"select",processedSelection:"null"===t?r:M[a][t],key:a})})(0,s,"select-all"===s,e),onToggle:(t,s)=>{!s&&R[e].filterValue?.length>0&&P([e]),x({type:"toggle",key:e,filterValue:"",page:1,isOpen:s})},onClear:()=>x({type:"clear",key:e}),onFilter:t=>{t&&(x({type:"setFilter",key:e,filterValue:t.target.value}),(0,v.Aq)((()=>P([e],{name:t.target.value})),2e3))},isOpen:R[e].isOpen,hasInlineFilter:!0,...!T&&M[e]&&Object.values(M[e]).length<w&&{loadingVariant:{text:t.formatMessage(E.Z.seeMore),onClick:()=>{P([e],{page:R[e].page+1,name:R[e].filterValue}),x({type:"setPage",key:e,page:R[e].page++})}}},...T&&{loadingVariant:"spinner"}},[...l?.length>0?[r().createElement(u.$,{key:`${e}-all`,value:"select-all"},r().createElement(h._H,{...E.Z.selectAll,values:{length:l?.length}}))]:[],...e.includes("hosts:")?a:[],...l?.map(((t,s)=>r().createElement(u.$,{key:`${e}-${s+1}`,value:t?.name},t.children)))||[]]))),r().createElement(i.GridItem,{lg:2,md:4,sm:2},s<=0&&r().createElement(o.Button,{key:`${e}-copy`,variant:"link",isInLink:!0,onClick:()=>x({type:"copyToAll",permissions:F})},t.formatMessage(E.Z.copyToAll)))))})))}},92884:(e,t,s)=>{"use strict";s.d(t,{j:()=>r});var a=s(60966);const r=(e,t)=>{const s=t&&t["add-permissions-table"]||[],r=s.some((({uuid:e})=>(0,a.u3)(e))),o=s.some((({uuid:e})=>(0,a.Rt)(e)));return"inventory-groups-role"===e&&r?"cost-resources-definition":"add-permissions"===e&&o?"inventory-groups-role":"add-permissions"===e&&r?"cost-resources-definition":"review"}},60966:(e,t,s)=>{"use strict";s.d(t,{Hg:()=>l,Rt:()=>r,_T:()=>o,u3:()=>i});var a=s(2550);const r=e=>e.split(":")[0].includes("inventory"),o=e=>r(e)&&e.split(":")[1].includes("hosts"),i=e=>e.split(":")[0].includes("cost-management"),l=(e,t,s)=>{let r=e.filter(Boolean);return o(t)&&e.includes(null)&&r.unshift(s.formatMessage(a.Z.ungroupedSystems)),r.reduce(((e,t)=>[...e,{cells:[t]}]),[])}},82472:()=>{},97890:()=>{},17657:()=>{},22972:()=>{},43389:()=>{},45467:()=>{},70347:()=>{},32857:()=>{},1580:()=>{},94498:()=>{},28992:()=>{},80897:()=>{},30187:()=>{},90479:()=>{},78752:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},25238:()=>{},91993:()=>{},36974:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{},40209:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4440.d32078ff9ab42e6506b28149d6d09a5e.js.map
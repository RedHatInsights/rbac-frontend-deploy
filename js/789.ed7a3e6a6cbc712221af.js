(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[789,6710],{53926:(e,t,a)=>{"use strict";a.d(t,{Lr:()=>n,cH:()=>i,nU:()=>r,rO:()=>o});var r,n,l=a(44914);!function(e){e.right="right",e.left="left"}(r||(r={})),function(e){e.up="up",e.down="down"}(n||(n={}));const o=l.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),i=l.createContext({keyHandler:null,sendRef:null})},16401:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var r=a(74848),n=a(46942),l=a.n(n),o=a(63068),i=a(69),s=a(86228),c=function(){return c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};const u=function(e){var t=e.className,a=e.title,n=e.actionsContent,u=e.ouiaId,d=e.ouiaSafe,m=void 0===d||d,p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","title","actionsContent","ouiaId","ouiaSafe"]),f=l()(t),g="RHI/Header",h=(0,i.useOUIAId)(g,u,m);return(0,r.jsxs)(s.Flex,{justifyContent:{default:"justifyContentSpaceBetween"},children:[(0,r.jsx)(s.FlexItem,{children:(0,r.jsx)(o.Title,c({headingLevel:"h1",size:"2xl",className:f,"widget-type":"InsightsPageHeaderTitle","data-ouia-component-type":g,"data-ouia-component-id":h,"data-ouia-safe":m},p,{children:a}))}),n?(0,r.jsx)(s.FlexItem,{children:n}):null]})}},96887:(e,t,a)=>{"use strict";a.d(t,{Df:()=>s,Tb:()=>c,sL:()=>u});var r=a(35970),n=a.n(r),l=a(19872);const o=(0,l.E0)(),i=(0,l.fo)(),s=async({name:e,perPage:t,page:a,options:r}={})=>await o.apiResourceTypeGetResourceTypeGroupsList(e,t,a,r),c=async e=>await i.apiGroupGetGroupsById(e),u=e=>e?n()(e.map((e=>e.attributeFilter.value))):[]},5314:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var r=a(44914),n=a.n(r),l=a(5556),o=a.n(l),i=a(49634),s=a(92284),c=a(21996);const u=e=>e?n().createElement(s.Breadcrumb,null,Object.values(e).map(((e,t)=>e.title?n().createElement(s.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&n().createElement(i.NavLink,{end:!0,to:e.to},e.title)||e.title):n().createElement(c.nv,{key:t})))):null;u.propTypes={breadcrumbs:o().object};const d=u},54073:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var r=a(44914),n=a.n(r),l=a(55086),o=a(31971),i=a.n(o);const s=({title:e,icon:t,description:a,actions:r,...o})=>n().createElement(l.EmptyState,{variant:l.EmptyStateVariant.sm,...o},n().createElement(l.EmptyStateHeader,{titleText:n().createElement(n().Fragment,null,e),icon:n().createElement(l.EmptyStateIcon,{icon:t||i()}),headingLevel:"h4"}),n().createElement(l.EmptyStateBody,{className:"pf-v5-u-mb-md"},a.map(((e,t)=>n().createElement(n().Fragment,{key:t},e," ",n().createElement("br",null))))),n().createElement(l.EmptyStateFooter,null,r))},38694:(e,t,a)=>{"use strict";a.d(t,{Z:()=>F});var r=a(44914),n=a.n(r),l=a(6442),o=a(5556),i=a.n(o),s=a(40335),c=a(74459),u=a(73683),d=a(4290),m=a(1104),p=a(97681),f=a(8549),g=a(47143),h=a(79994),y=a(58510),b=a(55086),v=a(31137),C=a.n(v),E=a(42134),A=a(23995),I=a(54073);const F=({className:e,isCompact:t,borders:a,columns:o,rows:i,toolbarButtons:v,data:F,actionResolver:S,areActionsDisabled:w,routes:R,titlePlural:k,titleSingular:x,pagination:O,paginationProps:P,filterValue:B,isLoading:T,emptyFilters:M,setFilterValue:j,checkedRows:L,isSelectable:D,isRowSelectable:N,fetchData:V,setCheckedItems:_,emptyProps:H,filterPlaceholder:q,rowWrapper:G,filters:W,isFilterable:$,onShowMore:U,showMoreTitle:K,onFilter:X,onChange:Z,value:z,sortBy:J,onSort:Q,isExpandable:Y,onExpand:ee,hideFilterChips:te,hideHeader:ae,noData:re,noDataDescription:ne,ouiaId:le,tableId:oe,containerRef:ie,textFilterRef:se,toolbarChildren:ce})=>{const ue=(0,l.A)(),de=(0,c.useFlag)("platform.rbac.itless");return n().createElement("div",{className:e},R(),!T&&0===i?.length&&0===B?.length&&W.every((({value:e})=>!e))?n().createElement(I.A,{title:ue.formatMessage(s.A.configureItems,{items:k}),icon:C(),description:[ue.formatMessage(s.A.toConfigureUserAccess),ue.formatMessage(s.A.createAtLeastOneItem,{item:x})],actions:v()[0],...H}):(()=>{const e=`${"desc"===J?.direction?"-":""}${o[J?.index]?.key}`;return n().createElement(r.Fragment,null,n().createElement(A.Ay,{isSelectable:D,isRowSelectable:N,checkedRows:L,setCheckedItems:_,isLoading:T||re,data:F,titleSingular:x,filterValue:B,setFilterValue:j,sortBy:e,pagination:O,paginationProps:P,fetchData:V,toolbarButtons:v,filterPlaceholder:q,filters:W,isFilterable:$,onShowMore:U,showMoreTitle:K,onFilter:X,onChange:Z,value:z,hideFilterChips:te,tableId:oe,containerRef:ie,textFilterRef:se,toolbarChildren:ce}),T?n().createElement(g.A,{variant:t?u.a.compact:void 0,rows:O?.limit,columns:o.map((e=>e.title))}):n().createElement(d.X,{canSelectAll:!1,"aria-label":`${k.toLowerCase()} table`,variant:t?u.a.compact:null,borders:a,...D&&i?.length>0&&{onSelect:(e,t,a,{uuid:r,cells:[n],requires:l})=>_((0,E.vH)([{uuid:r,name:n,requires:l,...de&&{username:F[a]?.username}}],t))},...Y&&{onExpand:ee},rows:i?.length>0?i:[{fullWidth:!0,cells:[{title:n().createElement(I.A,{title:ue.formatMessage(s.A.noMatchingItemsFound,{items:k}),description:re&&ne?ne:[ue.formatMessage(s.A.filterMatchesNoItems,{items:k}),ue.formatMessage(s.A.tryChangingFilters)],actions:re&&ne?void 0:[n().createElement(b.EmptyStateActions,{key:"clear-filters"},n().createElement(h.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{j(M),V({...O,offset:0,...M||{name:""}})}},ue.formatMessage(s.A.clearAllFilters)))]}),props:{colSpan:o.length}}]}],cells:o,...i?.length>0&&{actionResolver:S},className:0==i?.length?"ins-c-table-empty-state":"",areActionsDisabled:w,rowWrapper:G,sortBy:J,ouiaId:le,onSort:(e,t,a,r)=>Q(e,t,a,r)},!ae&&n().createElement(m.A,null),n().createElement(p.B,null)),!O.noBottom&&n().createElement(f.A,null,!T&&n().createElement(y.Pagination,{...(0,A.WM)(O,V,B,J,P),variant:"bottom",dropDirection:"up"})))})())};F.propTypes={...A.Ay.propTypes,sortBy:i().shape({directions:i().string,index:i().number}),className:i().string,rowWrapper:i().any,isCompact:i().bool,isRowSelectable:i().func,borders:i().bool,emptyFilters:i().object,checkedRows:i().array,columns:i().array.isRequired,rows:i().array.isRequired,titlePlural:i().string,routes:i().func,actionResolver:i().func,areActionsDisabled:i().func,pagination:i().shape({noBottom:i().bool,limit:i().number,offset:i().number,count:i().number}),paginationProps:i().shape({toggleTemplate:i().func,isCompact:i().bool}),isExpandable:i().bool,onExpand:i().func,onSort:i().func,containerRef:i().node,noData:i().bool,hideFilterChips:i().bool,hideHeader:i().bool,noDataDescription:i().arrayOf(i().node),filters:i().array,tableId:i().string.isRequired,toolbarChildren:i().func},F.defaultProps={...A.Ay.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1,toolbarChildren:()=>null}},23995:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>b,WM:()=>p});var r=a(44914),n=a.n(r),l=a(45975),o=a(6442),i=a(5556),s=a.n(i),c=a(40335),u=a(2543),d=a(42134),m=a(61361);const p=(e={},t,a="",r="",n)=>({...n,itemCount:e.count,perPage:e.limit,page:(0,m.mq)(e.limit,e.offset),onSetPage:(n,l)=>{t({...e,offset:(0,m.gj)(l,e.limit),name:a,orderBy:r})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,n)=>{t({offset:0,limit:n,name:a,orderBy:r})}}),f=(e,t=[],a=()=>{},r=[],n,l=()=>!0)=>{const i=(0,o.A)();return{count:t.length,items:[{title:i.formatMessage(c.A.selectNone),onClick:()=>{a((()=>[]))}},{...!e&&r&&r.length>0?{title:i.formatMessage(c.A.selectPage,{length:r.filter(l).length}),onClick:()=>{a((0,d.vH)(r,!0))}}:{}}],checked:(0,d.A9)(r,t,l),onSelect:t=>{!e&&a((0,d.vH)(r,t))},id:n}},g=(e,t=()=>{},a=()=>{},r="",n={},l="",i,s,m,p,f,g,h,y,b,v,C)=>{const E=(0,o.A)();return{onChange:y,value:b,items:[...m&&m.length>0?m.map((({key:l,label:o,value:i,selected:s,placeholder:y,type:b="text",groups:C,items:A,innerRef:I})=>({label:o||(0,d.tt)(l),type:b??"text",filterValues:{innerRef:I,id:`filter-by-${l}`,key:`filter-by-${l}`,placeholder:y||E.formatMessage(c.A.filterByKey,{key:l}),value:i,selected:s,..."text"!==b?{isFilterable:p,onShowMore:f,showMoreTitle:g,onFilter:h}:{},groups:C,items:A,onChange:(e,o)=>{const i="string"==typeof o||Array.isArray(o)?o:Object.keys((0,u.pickBy)(o[""],(e=>e)));t({...r,...n,offset:0,[l]:i}),(0,d.sq)((()=>a({...n,offset:0,orderBy:v,...m.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[l]:i}))).then((e=>(I?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,d.tt)(i||l),type:"text",filterValues:{innerRef:C,id:"filter-by-string",key:"filter-by-string",placeholder:E.formatMessage(c.A.filterByKey,{key:i||l}),value:r,onChange:(e,r)=>{t({...n,offset:0,name:r}),(0,d.sq)((()=>a({...n,offset:0,name:r,orderBy:v}))).then((e=>(C?.current?.focus(),e)))},isDisabled:e}}],...s||[]]}},h=(e="",t,a={},r=()=>{},n=()=>{},l)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,d.tt)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[o],i)=>{const s=(e,t,a)=>i?"group"===t||"checkbox"===t?[]:"":a!==o.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==o.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:a,type:r})=>({...e,[t]:s(a,r,t)})),{});r({...a,offset:0,name:"",...c}),n({...a,offset:0,orderBy:l,name:"",...c})}}),y=({isSelectable:e,isRowSelectable:t,checkedRows:a,setCheckedItems:r,isLoading:o,data:i,titleSingular:s,filterValue:c,setFilterValue:u,pagination:d,paginationProps:m,fetchData:y,sortBy:b,toolbarButtons:v,filterPlaceholder:C,filterItems:E,filters:A,isFilterable:I,onShowMore:F,showMoreTitle:S,onFilter:w,onChange:R,value:k,hideFilterChips:x,tableId:O,textFilterRef:P,toolbarChildren:B})=>n().createElement(l.A,{...e&&{bulkSelect:f(o,a,r,i,O,t)},filterConfig:g(o,u,y,c,d,s,C,E,A,I,F,S,w,R,k,b,P),actionsConfig:{actions:v()},...!o&&{pagination:p(d,y,c,b,m)},...(c.length>0||A&&A.length>0)&&!x&&{activeFiltersConfig:h(c,A,d,u,y,b)}},B());y.propTypes={isSelectable:s().bool,isRowSelectable:s().func,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),sortBy:s().string,filterItems:s().arrayOf(s().object),filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func.isRequired,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string,textFilterRef:s().object,toolbarChildren:s().func},y.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:m.L6,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1,toolbarChildren:()=>null};const b=y},17039:(e,t,a)=>{"use strict";a.d(t,{N:()=>v,p:()=>C});var r=a(44914),n=a.n(r),l=a(5556),o=a.n(l),i=a(40748),s=a(32392),c=a(21996),u=a(5314),d=a(74848),m=a(46942),p=a.n(m);const f=n().createContext("light");var g=a(69),h=function(){return h=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},h.apply(this,arguments)};const y=function(e){var t=e.className,a=e.children,r=e.ouiaId,n=e.ouiaSafe,l=void 0===n||n,o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","children","ouiaId","ouiaSafe"]),i=p()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section"),s="RHI/Header",c=(0,g.useOUIAId)(s,r,l);return(0,d.jsx)(f.Consumer,{children:function(e){var t,r;void 0===e&&(e="light");var n=p()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((r={})["pf-m-light"]="light"===e,r));return(0,d.jsx)("section",h({"data-ouia-component-type":s,"data-ouia-component-id":c,"data-ouia-safe":l},o,{className:"".concat(i," ").concat(n),"widget-type":"InsightsPageHeader",children:a}))}})};var b=a(16401);const v=({children:e,breadcrumbs:t})=>n().createElement(r.Fragment,null,t&&n().createElement("section",{className:"pf-v5-c-page__main-breadcrumb"},n().createElement(u.A,{...t})),n().createElement(y,{className:"rbac-page-header"},e));v.propTypes={children:o().oneOfType([o().arrayOf(o().node),o().node]).isRequired,breadcrumbs:o().array,paddingBottom:o().bool},v.defaultProps={paddingBottom:!1};const C=({title:e,renderTitleTag:t,description:a,children:l})=>n().createElement(r.Fragment,null,n().createElement(s.Flex,null,n().createElement(s.FlexItem,{className:"pf-v5-u-mb-sm"},n().createElement(b.A,{title:e||n().createElement(c.BX,null),className:"rbac-page-header__title"})),n().createElement(s.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},t&&t())),a&&n().createElement(i.TextContent,{className:"rbac-page-header__description"},"string"==typeof a?n().createElement(i.Text,{component:i.TextVariants.p},a):a),l);C.propTypes={title:o().node,renderTitleTag:o().func,description:o().node,children:o().oneOfType([o().node,o().arrayOf(o().node)])}},2224:(e,t,a)=>{"use strict";a.d(t,{N:()=>l,h:()=>o});var r=a(71966),n=a(96887);const l=(e,t)=>({type:r.fp,meta:{permissions:e,config:t},payload:n.Df(t)}),o=e=>({type:r.K8,meta:{groupsIds:e},payload:n.Tb(e.filter((e=>e?.length>0)))})},85712:(e,t,a)=>{"use strict";a.d(t,{Om:()=>i,a:()=>n,jE:()=>o,jV:()=>l});var r=a(40335);const n=e=>e.split(":")[0].includes("inventory"),l=e=>n(e)&&e.split(":")[1].includes("hosts"),o=e=>e.split(":")[0].includes("cost-management"),i=(e,t,a)=>{let n=e.filter(Boolean);return l(t)&&e.includes(null)&&n.unshift(a.formatMessage(r.A.ungroupedSystems)),n.reduce(((e,t)=>[...e,{cells:[t]}]),[])}},73189:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>F});var r=a(44914),n=a.n(r),l=a(40748),o=a(48868),i=a(79994),s=a(69733),c=a(49634),u=a(38694),d=a(85712),m=a(17039),p=a(16401),f=a(21996),g=a(61361),h=a(8582),y=a(49573),b=a(58471),v=a(42134),C=a(6442),E=a(2224),A=a(96887),I=a(40335);const F=()=>{const e=(0,C.A)(),[t,a]=(0,r.useState)({pagination:{...g.L6,filter:""}}),{pagination:F,filter:S}=t,w=(0,s.useDispatch)(),{roleId:R,permissionId:k}=(0,c.useParams)(),x=(0,r.useMemo)((()=>(0,d.a)(k)),[k]),{role:O,permission:P,isRoleLoading:B,rolesPagination:T,rolesFilters:M,inventoryGroupsDetails:j,isLoadingInventoryDetails:L}=(0,s.useSelector)((e=>({role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?{...e.roleReducer.selectedRole?.access.find((e=>e.permission===k))}:{},isRoleLoading:e.roleReducer.isRecordLoading,rolesPagination:e.roleReducer?.roles?.pagination||g.L6,rolesFilters:e.roleReducer?.roles?.filters||{},inventoryGroupsDetails:e.inventoryReducer?.inventoryGroupsDetails,isLoadingInventoryDetails:e.inventoryReducer?.isLoading})),s.shallowEqual);(0,r.useEffect)((()=>{w((0,h.rM)(R)).then((({value:e})=>{var t;x&&(t=(0,A.sL)(e?.access?.find((e=>e.permission===k))?.resourceDefinitions),w((0,E.h)(t)))}))}),[R]),(0,r.useEffect)((()=>{a({...t,pagination:{...t.pagination,count:O.access?O.access.length:0}})}),[O]);const D=(0,r.useMemo)((()=>!B&&!L&&(0,A.sL)(P.resourceDefinitions).map((e=>x&&null!=e?j?.[e]?.name:e))||[]),[k,B,L]),N=(0,r.useMemo)((()=>D.filter((e=>!S||e?.includes(S)||null===e))),[D,S]),V=(0,r.useMemo)((()=>N.slice(F.offset,F.offset+F.limit)),[N,F.offset,F.offset]);return n().createElement(r.Fragment,null,n().createElement(m.N,{breadcrumbs:[{title:e.formatMessage(I.A.roles),to:(0,v.Fm)((0,b.o)(y.A.roles.link),T,M)},{title:B?void 0:O&&(O.display_name||O.name),to:(0,b.o)(y.A["role-detail"].link.replace(":roleId",R))},{title:k,isActive:!0}]},n().createElement(o.Level,null,n().createElement(o.LevelItem,null,n().createElement(p.A,{title:k||n().createElement(f.BX,null),className:"rbac-page-header__title"})))),n().createElement("section",{className:"pf-v5-c-page__main-section rbac-c-role__permissions"},n().createElement(l.TextContent,null,n().createElement(l.Text,{component:l.TextVariants.h1},e.formatMessage(I.A.definedResources))),n().createElement(u.Z,{columns:[{}],rows:(0,d.Om)(V,k,e),data:V,filterValue:S,fetchData:({limit:e,offset:r,name:n})=>a({...t,filter:n,pagination:{...t.pagination,limit:e,offset:r}}),isCompact:!0,setFilterValue:({name:e})=>a({...t,filter:e}),toolbarButtons:()=>O.system?[]:[n().createElement(r.Fragment,{key:"edit-resource-definitions"},n().createElement(b.A,{to:y.A["role-detail-permission-edit"].link.replace(":roleId",R).replace(":permissionId",k)},n().createElement(i.Button,{variant:"primary","aria-label":"Edit"},e.formatMessage(I.A.edit))))],isLoading:B||x&&L,pagination:{...F,count:N.length},titlePlural:e.formatMessage(I.A.resources).toLowerCase(),titleSingular:e.formatMessage(I.A.resource).toLowerCase(),hideHeader:!0,tableId:"role-resource-definitions"}),n().createElement(r.Suspense,null,n().createElement(c.Outlet,{context:{cancelRoute:y.A["role-detail-permission"].link.replace(":roleId",R).replace(":permissionId",k)}}))))}},2580:()=>{}}]);
//# sourceMappingURL=../sourcemaps/789.7c72b0dcf19f77c2691800661d95facb.js.map
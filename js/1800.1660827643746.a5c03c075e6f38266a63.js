"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[1800],{67643:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(87462),o=n(45987),i=n(92950),a=n.n(i),l=n(45697),s=n.n(l),c=n(57262),u=n(80810),f=["title","icon","description","actions"],d=function(e){var t=e.title,n=e.icon,i=e.description,l=e.actions,s=(0,o.Z)(e,f);return a().createElement(c.EmptyState,(0,r.Z)({variant:c.EmptyStateVariant.small},s),a().createElement(c.EmptyStateIcon,{icon:n||u.ZP}),a().createElement(c.Title,{headingLevel:"h4",size:"lg"},t),a().createElement(c.EmptyStateBody,{className:"pf-u-mb-md"},i.map((function(e,t){return a().createElement(a().Fragment,{key:t},e," ",a().createElement("br",null))}))),l)};d.propTypes={icon:s().func,title:s().node,description:s().node,actions:s().oneOfType([s().node,s().arrayOf(s().node)]),className:s().string};const g=d},41800:(e,t,n)=>{n.d(t,{M:()=>R});var r=n(87462),o=n(4942),i=n(29439),a=n(92950),l=n.n(a),s=n(86896),c=n(45697),u=n.n(c),f=n(30893),d=n(1936),g=n(65550),h=n(57262),p=n(19571),m=n(7081),y=n(11107),b=n(93433),v=n(35937),O=n.n(v),Z=n(95809),k=n(61338);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return C(C({},e),{},{itemCount:e.count,perPage:e.limit,page:(0,k.wy)(e.limit,e.offset),onSetPage:function(o,i){t(C(C({},e),{},{offset:(0,k.vE)(i,e.limit),name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(o,i){t(C(C({},e),{},{offset:0,limit:i,name:n,orderBy:r}))}})},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=(0,s.Z)();return{count:t.length,items:[{title:i.formatMessage(f.Z.selectNone),onClick:function(){n((function(){return[]}))}},C({},!e&&r&&r.length>0?{title:i.formatMessage(f.Z.selectPage,{length:r.length}),onClick:function(){n((0,y.ZQ)(r,!0))}}:{})],checked:(0,y.um)(r,t),onSelect:function(t){!e&&n((0,y.ZQ)(r,t))},id:o}},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6?arguments[6]:void 0,c=arguments.length>7?arguments[7]:void 0,u=arguments.length>8?arguments[8]:void 0,d=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0,h=arguments.length>11?arguments[11]:void 0,p=arguments.length>12?arguments[12]:void 0,m=arguments.length>13?arguments[13]:void 0,v=arguments.length>14?arguments[14]:void 0,Z=arguments.length>15?arguments[15]:void 0,k=(0,s.Z)();return{onChange:m,value:v,items:[].concat((0,b.Z)(u&&u.length>0?u.map((function(a){var l=a.key,s=a.label,c=a.value,m=a.selected,b=a.placeholder,v=a.type,w=void 0===v?"text":v,E=a.groups,P=a.items;return{label:s||(0,y.RI)(l),type:w,filterValues:C(C({id:"filter-by-".concat(l),key:"filter-by-".concat(l),placeholder:b||k.formatMessage(f.Z.filterByKey,{key:l}),value:c,selected:m},"text"!==w?{isFilterable:d,onShowMore:g,showMoreTitle:h,onFilter:p}:{}),{},{groups:E,items:P,onChange:function(e,a){var s="string"==typeof a||Array.isArray(a)?a:Object.keys(O()(a[""],(function(e){return e})));t(C(C(C({},r),i),{},(0,o.Z)({offset:0},l,s))),(0,y.Aq)((function(){return n(C(C(C({},i),{},{offset:0,orderBy:Z},u.reduce((function(e,t){return C(C({},e),{},(0,o.Z)({},t.key,t.value))}),{})),{},(0,o.Z)({},l,s)))}))},isDisabled:e})}})):[{label:(0,y.RI)(l||a),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:k.formatMessage(f.Z.filterByKey,{key:l||a}),value:r,onChange:function(e,r){t(C(C({},i),{},{offset:0,name:r})),(0,y.Aq)((function(){return n(C(C({},i),{},{offset:0,name:r,orderBy:Z}))}))},isDisabled:e}}]),(0,b.Z)(c||[]))}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},l=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&0!==n.length&&{category:(0,y.RI)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,s,c){var u=(0,i.Z)(s,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,i=t.type;return C(C({},e),{},(0,o.Z)({},n,function(e,t,n){return c?"group"===t||"checkbox"===t?[]:"":n!==u.type?e:"checkbox"===t||"group"===t?e.filter((function(e){var t;return e!==(null===(t=u.chips[0])||void 0===t?void 0:t.name)})):Array.isArray(e)?[]:""}(r,i,n)))}),{});r(C(C({},n),{},{offset:0,name:""},f)),a(C(C({},n),{},{offset:0,orderBy:l,name:""},f))}}},B=function(e){var t=e.isSelectable,n=e.checkedRows,o=e.setCheckedItems,i=e.isLoading,a=e.data,s=e.titleSingular,c=e.filterValue,u=e.setFilterValue,f=e.pagination,d=e.fetchData,g=e.sortBy,h=e.toolbarButtons,p=e.filterPlaceholder,m=e.filterItems,y=e.filters,b=e.isFilterable,v=e.onShowMore,O=e.showMoreTitle,k=e.onFilter,w=e.onChange,C=e.value,B=e.hideFilterChips,M=e.tableId;return l().createElement(Z.Z,(0,r.Z)({},t&&{bulkSelect:P(i,n,o,a,M)},{filterConfig:S(i,u,d,c,f,s,p,m,y,b,v,O,k,w,C,g),useMobileLayout:!0,actionsConfig:{actions:h()}},!i&&{pagination:E(f,d,c,g)},(c.length>0||y&&y.length>0)&&!B&&{activeFiltersConfig:F(c,y,f,u,d,g)}))};B.propTypes={isSelectable:u().bool,checkedRows:u().array,setCheckedItems:u().func,isLoading:u().bool,data:u().array,titleSingular:u().string,filterValue:u().oneOfType([u().array,u().string]),setFilterValue:u().func,filters:u().arrayOf(u().shape({value:u().oneOfType([u().string,u().number,u().array]),key:u().string,placeholder:u().string})),isFilterable:u().bool,onShowMore:u().func,showMoreTitle:u().string,onFilter:u().func,onChange:u().func,value:u().any,pagination:u().shape({limit:u().number,offset:u().number,count:u().number}),sortBy:u().string,filterItems:u().arrayOf(u().object),filterPlaceholder:u().string,isCollapsible:u().bool,fetchData:u().func,toolbarButtons:u().func,hideFilterChips:u().bool,tableId:u().string},B.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:k.he,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const M=B;var j=n(67643);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){var t=e.isCompact,n=e.createRows,c=e.borders,u=e.columns,b=e.toolbarButtons,v=e.data,O=e.actionResolver,Z=e.areActionsDisabled,k=e.routes,w=e.titlePlural,C=e.titleSingular,P=e.pagination,S=e.filterValue,F=e.isLoading,B=e.emptyFilters,D=e.setFilterValue,R=e.checkedRows,T=e.isSelectable,x=e.fetchData,A=e.setCheckedItems,V=e.isCollapsible,L=e.emptyProps,q=e.filterPlaceholder,N=e.rowWrapper,W=e.filters,H=e.isFilterable,_=e.onShowMore,Q=e.showMoreTitle,K=e.onFilter,z=e.onChange,U=e.value,G=e.sortBy,J=e.isExpandable,X=e.onExpand,Y=e.hideFilterChips,$=e.hideHeader,ee=e.noData,te=e.noDataDescription,ne=e.ouiaId,re=e.tableId,oe=e.containerRef,ie=(0,s.Z)(),ae=(0,a.useState)({}),le=(0,i.Z)(ae,2),se=le[0],ce=le[1],ue=(0,a.useState)({index:void 0,direction:void 0}),fe=(0,i.Z)(ue,2),de=fe[0],ge=fe[1];(0,a.useEffect)((function(){ge(I(I({},G),void 0!==de.index&&de))}),[G]);var he=n(v,se,R),pe=function(e,t,n,r){var i=r.uuid;return ce((function(e){return I(I({},e),{},(0,o.Z)({},i,n))}))};return l().createElement(a.Fragment,null,k(),!F&&0===he.length&&0===S.length&&W.every((function(e){return!e.value}))?l().createElement(j.Z,(0,r.Z)({title:ie.formatMessage(f.Z.configureItems,{items:w}),icon:m.ZP,description:[ie.formatMessage(f.Z.toConfigureUserAccess),ie.formatMessage(f.Z.createAtLeastOneItem,{item:C})],actions:b()[0]},L)):function(){var e=T&&(null==v?void 0:v.length)>0,n=Math.min(((null==de?void 0:de.index)||e)-e,(null==u?void 0:u.length)-1),s=void 0!==de.index&&n>=0&&n<u.length&&"".concat("desc"===de.direction?"-":"").concat(u[n].key)||void 0;return l().createElement(a.Fragment,null,l().createElement(M,{isSelectable:T,checkedRows:R,setCheckedItems:A,isLoading:F||ee,data:v,titleSingular:C,filterValue:S,setFilterValue:D,sortBy:s,pagination:P,fetchData:x,toolbarButtons:b,filterPlaceholder:q,filters:W,isFilterable:H,onShowMore:_,showMoreTitle:Q,onFilter:K,onChange:z,value:U,hideFilterChips:Y,tableId:re,containerRef:oe}),F?l().createElement(p.Wi,null):l().createElement(d.Table,(0,r.Z)({canSelectAll:!1,"aria-label":"".concat(w.toLowerCase()," table"),variant:t?d.TableVariant.compact:null,borders:c},V&&{onCollapse:pe},T&&he.length>0&&{onSelect:function(e,t,n,r){var o=r.uuid,a=(0,i.Z)(r.cells,1)[0],l=r.requires;return A((0,y.ZQ)([{uuid:o,name:a,requires:l}],t))}},J&&{onExpand:X},{rows:he.length>0?he:[{fullWidth:!0,cells:[{title:l().createElement(j.Z,{title:ie.formatMessage(f.Z.noMatchingItemsFound,{items:w}),description:ee&&te?te:[ie.formatMessage(f.Z.filterMatchesNoItems,{items:w}),ie.formatMessage(f.Z.tryChangingFilters)],actions:ee&&te?void 0:[l().createElement(h.EmptyStatePrimary,{key:"clear-filters"},l().createElement(h.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:function(){D(B),x(I(I({},P),{},{offset:0},B||{name:""}))}},ie.formatMessage(f.Z.clearAllFilters)))]}),props:{colSpan:u.length+Boolean(pe)}}]}],cells:u},he.length>0&&{actionResolver:O},{className:0==he.length?"ins-c-table-empty-state":"",areActionsDisabled:Z,rowWrapper:N,sortBy:de,ouiaId:ne,onSort:function(t,n,r){var i=Math.min((n||e)-e,(null==u?void 0:u.length)-1),a="".concat("desc"===r?"-":"").concat(u[i].key);ge({index:n,direction:r}),W&&W.length>0?x(I(I(I({},P),{},{offset:0},W.reduce((function(e,t){return I(I({},e),{},(0,o.Z)({},t.key,t.value))}),{})),{},{orderBy:a})):x(I(I({},P),{},{offset:0,name:S,orderBy:a}))}}),!$&&l().createElement(d.TableHeader,null),l().createElement(d.TableBody,null)),!P.noBottom&&l().createElement(g.Z,null,!F&&l().createElement(h.Pagination,(0,r.Z)({},E(P,x,S,s),{variant:"bottom",dropDirection:"up"}))))}())};R.propTypes=I(I({},M.propTypes),{},{sortBy:u().shape({directions:u().string,index:u().number}),rowWrapper:u().any,isCompact:u().bool,borders:u().bool,emptyFilters:u().object,checkedRows:u().array,createRows:u().func.isRequired,columns:u().array.isRequired,titlePlural:u().string,routes:u().func,actionResolver:u().func,areActionsDisabled:u().func,pagination:u().shape({noBottom:u().bool}),isExpandable:u().bool,onExpand:u().func,hideFilterChips:u().bool,hideHeader:u().bool,noDataDescription:u().arrayOf(u().node),filters:u().array,tableId:u().string.isRequired}),R.defaultProps=I(I({},M.defaultProps),{},{emptyFilters:{},isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1,checkedRows:[],hideHeader:!1})}}]);
//# sourceMappingURL=../sourcemaps/1800.63ceb75e5205ff00f56bb4b9d994dbc8.js.map
"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[1800],{67643:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(87462),i=n(45987),o=n(92950),l=n.n(o),a=n(45697),s=n.n(a),c=n(76857),u=n(80810),f=["title","icon","description","actions"],d=function(e){var t=e.title,n=e.icon,o=e.description,a=e.actions,s=(0,i.Z)(e,f);return l().createElement(c.EmptyState,(0,r.Z)({variant:c.EmptyStateVariant.small},s),l().createElement(c.EmptyStateIcon,{icon:n||u.ZP}),l().createElement(c.Title,{headingLevel:"h4",size:"lg"},t),l().createElement(c.EmptyStateBody,{className:"pf-u-mb-md"},o.map((function(e,t){return l().createElement(l().Fragment,{key:t},e," ",l().createElement("br",null))}))),a)};d.propTypes={icon:s().func,title:s().node,description:s().node,actions:s().oneOfType([s().node,s().arrayOf(s().node)]),className:s().string};const g=d},41800:(e,t,n)=>{n.d(t,{M:()=>R});var r=n(87462),i=n(29439),o=n(4942),l=n(92950),a=n.n(l),s=n(86896),c=n(45697),u=n.n(c),f=n(30893),d=n(1936),g=n(65550),p=n(76857),h=n(19571),m=n(7081),b=n(11107),y=n(93433),v=n(35937),O=n.n(v),Z=n(7887),k=n(61338);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return C(C({},e),{},{itemCount:e.count,perPage:e.limit,page:(0,k.wy)(e.limit,e.offset),onSetPage:function(i,o){t(C(C({},e),{},{offset:(0,k.vE)(o,e.limit),name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:function(i,o){t(C(C({},e),{},{offset:0,limit:o,name:n,orderBy:r}))}})},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=(0,s.Z)();return{count:t.length,items:[{title:o.formatMessage(f.Z.selectNone),onClick:function(){n((function(){return[]}))}},C({},!e&&r&&r.length>0?{title:o.formatMessage(f.Z.selectPage,{length:r.filter((function(e){return!(e.platform_default||e.admin_default||e.system)})).length}),onClick:function(){n((0,b.ZQ)(r,!0))}}:{})],checked:(0,b.um)(r,t),onSelect:function(t){!e&&n((0,b.ZQ)(r,t))},id:i}},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",a=arguments.length>6?arguments[6]:void 0,c=arguments.length>7?arguments[7]:void 0,u=arguments.length>8?arguments[8]:void 0,d=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0,p=arguments.length>11?arguments[11]:void 0,h=arguments.length>12?arguments[12]:void 0,m=arguments.length>13?arguments[13]:void 0,v=arguments.length>14?arguments[14]:void 0,Z=arguments.length>15?arguments[15]:void 0,k=arguments.length>16?arguments[16]:void 0,w=(0,s.Z)();return{onChange:m,value:v,items:[].concat((0,y.Z)(u&&u.length>0?u.map((function(l){var a=l.key,s=l.label,c=l.value,m=l.selected,y=l.placeholder,v=l.type,k=void 0===v?"text":v,F=l.groups,P=l.items,E=l.innerRef;return{label:s||(0,b.RI)(a),type:k,filterValues:C(C({innerRef:E,id:"filter-by-".concat(a),key:"filter-by-".concat(a),placeholder:y||w.formatMessage(f.Z.filterByKey,{key:a}),value:c,selected:m},"text"!==k?{isFilterable:d,onShowMore:g,showMoreTitle:p,onFilter:h}:{}),{},{groups:F,items:P,onChange:function(e,l){var s="string"==typeof l||Array.isArray(l)?l:Object.keys(O()(l[""],(function(e){return e})));t(C(C(C({},r),i),{},(0,o.Z)({offset:0},a,s))),(0,b.Aq)((function(){return n(C(C(C({},i),{},{offset:0,orderBy:Z},u.reduce((function(e,t){return C(C({},e),{},(0,o.Z)({},t.key,t.value))}),{})),{},(0,o.Z)({},a,s)))})).then((function(e){var t;return null==E||null===(t=E.current)||void 0===t||t.focus(),e}))},isDisabled:e})}})):[{label:(0,b.RI)(a||l),type:"text",filterValues:{innerRef:k,id:"filter-by-string",key:"filter-by-string",placeholder:w.formatMessage(f.Z.filterByKey,{key:a||l}),value:r,onChange:function(e,r){t(C(C({},i),{},{offset:0,name:r})),(0,b.Aq)((function(){return n(C(C({},i),{},{offset:0,name:r,orderBy:Z}))})).then((function(e){var t;return null==k||null===(t=k.current)||void 0===t||t.focus(),e}))},isDisabled:e}}]),(0,y.Z)(c||[]))}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},a=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&0!==n.length&&{category:(0,b.RI)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,s,c){var u=(0,i.Z)(s,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,i=t.type;return C(C({},e),{},(0,o.Z)({},n,function(e,t,n){return c?"group"===t||"checkbox"===t?[]:"":n!==u.type?e:"checkbox"===t||"group"===t?e.filter((function(e){var t;return e!==(null===(t=u.chips[0])||void 0===t?void 0:t.name)})):Array.isArray(e)?[]:""}(r,i,n)))}),{});r(C(C({},n),{},{offset:0,name:""},f)),l(C(C({},n),{},{offset:0,orderBy:a,name:""},f))}}},j=function(e){var t=e.isSelectable,n=e.checkedRows,i=e.setCheckedItems,o=e.isLoading,l=e.data,s=e.titleSingular,c=e.filterValue,u=e.setFilterValue,f=e.pagination,d=e.fetchData,g=e.sortBy,p=e.toolbarButtons,h=e.filterPlaceholder,m=e.filterItems,b=e.filters,y=e.isFilterable,v=e.onShowMore,O=e.showMoreTitle,k=e.onFilter,w=e.onChange,C=e.value,j=e.hideFilterChips,B=e.tableId,D=e.textFilterRef;return a().createElement(Z.Z,(0,r.Z)({},t&&{bulkSelect:P(o,n,i,l,B)},{filterConfig:E(o,u,d,c,f,s,h,m,b,y,v,O,k,w,C,g,D),useMobileLayout:!0,actionsConfig:{actions:p()}},!o&&{pagination:F(f,d,c,g)},(c.length>0||b&&b.length>0)&&!j&&{activeFiltersConfig:S(c,b,f,u,d,g)}))};j.propTypes={isSelectable:u().bool,checkedRows:u().array,setCheckedItems:u().func,isLoading:u().bool,data:u().array,titleSingular:u().string,filterValue:u().oneOfType([u().array,u().string]),setFilterValue:u().func,filters:u().arrayOf(u().shape({value:u().oneOfType([u().string,u().number,u().array]),key:u().string,placeholder:u().string})),isFilterable:u().bool,onShowMore:u().func,showMoreTitle:u().string,onFilter:u().func,onChange:u().func,value:u().any,pagination:u().shape({limit:u().number,offset:u().number,count:u().number}),sortBy:u().string,filterItems:u().arrayOf(u().object),filterPlaceholder:u().string,isCollapsible:u().bool,fetchData:u().func,toolbarButtons:u().func,hideFilterChips:u().bool,tableId:u().string,textFilterRef:u().object},j.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:k.he,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const B=j;var D=n(67643);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){var t,n,o=e.isCompact,c=e.borders,u=e.columns,y=e.rows,v=e.toolbarButtons,O=e.data,Z=e.actionResolver,k=e.areActionsDisabled,w=e.routes,C=e.titlePlural,P=e.titleSingular,E=e.pagination,S=e.filterValue,j=e.isLoading,M=e.emptyFilters,R=e.setFilterValue,T=e.checkedRows,x=e.isSelectable,A=e.fetchData,V=e.setCheckedItems,L=e.emptyProps,q=e.filterPlaceholder,_=e.rowWrapper,N=e.filters,W=e.isFilterable,H=e.onShowMore,Q=e.showMoreTitle,K=e.onFilter,z=e.onChange,U=e.value,G=e.sortBy,J=e.onSort,X=e.isExpandable,Y=e.onExpand,$=e.hideFilterChips,ee=e.hideHeader,te=e.noData,ne=e.noDataDescription,re=e.ouiaId,ie=e.tableId,oe=e.containerRef,le=e.textFilterRef,ae=(0,s.Z)();return a().createElement(l.Fragment,null,w(),!j&&0===(null==y?void 0:y.length)&&0===(null==S?void 0:S.length)&&N.every((function(e){return!e.value}))?a().createElement(D.Z,(0,r.Z)({title:ae.formatMessage(f.Z.configureItems,{items:C}),icon:m.ZP,description:[ae.formatMessage(f.Z.toConfigureUserAccess),ae.formatMessage(f.Z.createAtLeastOneItem,{item:P})],actions:v()[0]},L)):(n="".concat("desc"===(null==G?void 0:G.direction)?"-":"").concat(null===(t=u[null==G?void 0:G.index])||void 0===t?void 0:t.key),a().createElement(l.Fragment,null,a().createElement(B,{isSelectable:x,checkedRows:T,setCheckedItems:V,isLoading:j||te,data:O,titleSingular:P,filterValue:S,setFilterValue:R,sortBy:n,pagination:E,fetchData:A,toolbarButtons:v,filterPlaceholder:q,filters:N,isFilterable:W,onShowMore:H,showMoreTitle:Q,onFilter:K,onChange:z,value:U,hideFilterChips:$,tableId:ie,containerRef:oe,textFilterRef:le}),j?a().createElement(h.Wi,{isCompact:o,items:null==E?void 0:E.limit}):a().createElement(d.Table,(0,r.Z)({canSelectAll:!1,"aria-label":"".concat(C.toLowerCase()," table"),variant:o?d.TableVariant.compact:null,borders:c},x&&(null==y?void 0:y.length)>0&&{onSelect:function(e,t,n,r){var o=r.uuid,l=(0,i.Z)(r.cells,1)[0],a=r.requires;return V((0,b.ZQ)([{uuid:o,name:l,requires:a}],t))}},X&&{onExpand:Y},{rows:(null==y?void 0:y.length)>0?y:[{fullWidth:!0,cells:[{title:a().createElement(D.Z,{title:ae.formatMessage(f.Z.noMatchingItemsFound,{items:C}),description:te&&ne?ne:[ae.formatMessage(f.Z.filterMatchesNoItems,{items:C}),ae.formatMessage(f.Z.tryChangingFilters)],actions:te&&ne?void 0:[a().createElement(p.EmptyStatePrimary,{key:"clear-filters"},a().createElement(p.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:function(){R(M),A(I(I({},E),{},{offset:0},M||{name:""}))}},ae.formatMessage(f.Z.clearAllFilters)))]}),props:{colSpan:u.length}}]}],cells:u},(null==y?void 0:y.length)>0&&{actionResolver:Z},{className:0==(null==y?void 0:y.length)?"ins-c-table-empty-state":"",areActionsDisabled:k,rowWrapper:_,sortBy:G,ouiaId:re,onSort:function(e,t,n,r){return J(e,t,n,r)}}),!ee&&a().createElement(d.TableHeader,null),a().createElement(d.TableBody,null)),!E.noBottom&&a().createElement(g.Z,null,!j&&a().createElement(p.Pagination,(0,r.Z)({},F(E,A,S,G),{variant:"bottom",dropDirection:"up"}))))))};R.propTypes=I(I({},B.propTypes),{},{sortBy:u().shape({directions:u().string,index:u().number}),rowWrapper:u().any,isCompact:u().bool,borders:u().bool,emptyFilters:u().object,checkedRows:u().array,columns:u().array.isRequired,rows:u().array.isRequired,titlePlural:u().string,routes:u().func,actionResolver:u().func,areActionsDisabled:u().func,pagination:u().shape({noBottom:u().bool}),isExpandable:u().bool,onExpand:u().func,hideFilterChips:u().bool,hideHeader:u().bool,noDataDescription:u().arrayOf(u().node),filters:u().array,tableId:u().string.isRequired}),R.defaultProps=I(I({},B.defaultProps),{},{emptyFilters:{},isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1,checkedRows:[],hideHeader:!1})}}]);
//# sourceMappingURL=../sourcemaps/1800.095ad3069bcd266ad0a4b2cf796b4120.js.map
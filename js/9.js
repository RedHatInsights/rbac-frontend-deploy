(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{703:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"c",(function(){return h}));var r=n(308),a=n.n(r),i=n(12),o=n.n(i),c=n(699),l=n.n(c),u=n(657);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},d=function(e){return Object.entries(e).reduce((function(e,t){var n=l()(t,2),r=n[0],a=n[1];return f(f({},e),a&&o()({},r,a))}),{})},m=n.n(u)()((function(e){return e()})),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return 0!==e.length&&e.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||!(0===e.length||!e.some((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))})))&&null},v=function(e,t){return function(n){return t?[].concat(a()(n),a()(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},h=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},705:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var r=n(131),a=n.n(r),i=n(12),o=n.n(i),c=n(699),l=n.n(c),u=n(0),s=n.n(u),f=n(30),p=n.n(f),d=n(61),m=n(367),b=n(365),v=n(660),h=n(79),g=n(314),y=n(659),O=n(157),j=n(661),E=n.n(j),w=n(703),P=n(308),S=n.n(P),k=n(747),x=n.n(k),T=n(658),_=n(420),F=n(60);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return D(D({},e),{},{itemCount:e.count,perPage:e.limit,page:Object(w.d)(e.limit,e.offset),onSetPage:function(a,i){t(D(D({},e),{},{offset:(i-1)*e.limit,name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(a,i){t(D(D({},e),{},{offset:0,limit:i,name:n,orderBy:r}))}})},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},D({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n(Object(w.f)(r,!0))}}:{})],checked:Object(w.a)(r,t),onSelect:function(t){!e&&n(Object(w.f)(r,t))}}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,u=arguments.length>8?arguments[8]:void 0,s=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,p=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0,m=arguments.length>13?arguments[13]:void 0,b=arguments.length>14?arguments[14]:void 0,v=arguments.length>15?arguments[15]:void 0;return{onChange:m,value:b,items:[].concat(S()(u&&u.length>0?u.map((function(i){var c=i.key,l=i.value,m=i.selected,b=i.placeholder,h=i.type,g=void 0===h?"text":h,y=i.groups,O=i.items;return{label:Object(w.c)(c),type:g,filterValues:{id:"filter-by-".concat(c),key:"filter-by-".concat(c),placeholder:b||"Filter by ".concat(c),value:l,selected:m,isFilterable:s,groups:y,items:O,onChange:function(e,i){var l="string"!=typeof i?Object.keys(x()(i[0],(function(e){return e}))):i;t(D(D(D({},r),a),{},o()({offset:0},c,l))),Object(w.b)((function(){return n(D(D(D({},a),{},{offset:0,orderBy:v},u.reduce((function(e,t){return D(D({},e),{},o()({},t.key,t.value))}),{})),{},o()({},c,l)))}))},isDisabled:e,onShowMore:f,showMoreTitle:p,onFilter:d}}})):[{label:Object(w.c)(c||i),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||i),value:r,onChange:function(e,r){t(D(D({},a),{},{offset:0,name:r})),Object(w.b)((function(){return n(D(D({},a),{},{offset:0,name:r,orderBy:v}))}))},isDisabled:e}}]),S()(l||[]))}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},i=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return 0!==n.length&&{category:Object(w.c)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,u){var s=l()(c,1)[0];r(D(D({},n),{},{offset:0,name:""},t?t.reduce((function(e,t){var n=t.key,r=t.value,a=t.type;return D(D({},e),{},o()({},n,function(e,t){return u?"group"===t?[]:"":"group"===t?e.filter((function(e){return e!==s.chips[0].name})):""}(r,a)))}),{}):{name:""})),a(D(D({},n),{},{offset:0,orderBy:i},t?t.reduce((function(e,t){var n=t.key,r=t.value;return D(D({},e),{},o()({},n,s.type===n||u?"":r))}),{}):{name:""}))}}},N=function(e){var t=e.isSelectable,n=e.checkedRows,r=e.setCheckedItems,i=e.isLoading,o=e.data,c=e.titleSingular,l=e.filterValue,u=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,m=e.toolbarButtons,b=e.filterPlaceholder,v=e.filterItems,h=e.filters,g=e.isFilterable,y=e.onShowMore,O=e.showMoreTitle,j=e.onFilter,E=e.onChange,w=e.value,P=e.hideFilterChips;return s.a.createElement(T.PrimaryToolbar,a()({},t&&{bulkSelect:B(i,n,r,o)},{filterConfig:A(i,u,p,l,f,c,b,v,h,g,y,O,j,E,w,d),actionsConfig:{actions:m()}},!i&&{pagination:R(f,p,l,d)},(l.length>0||h&&h.length>0)&&!P&&{activeFiltersConfig:L(l,h,f,u,p,d)}))};N.propTypes={isSelectable:p.a.bool,checkedRows:p.a.array,setCheckedItems:p.a.func,isLoading:p.a.bool,data:p.a.array,titleSingular:p.a.string,filterValue:p.a.oneOfType([p.a.array,p.a.string]),setFilterValue:p.a.func,filters:p.a.arrayOf(p.a.shape({value:p.a.oneOfType([p.a.string,p.a.number,p.a.array]),key:p.a.string,placeholder:p.a.string})),isFilterable:p.a.bool,onShowMore:p.a.func,showMoreTitle:p.a.string,onFilter:p.a.func,onChange:p.a.func,value:p.a.any,pagination:p.a.shape({limit:p.a.number,offset:p.a.number,count:p.a.number}),sortBy:p.a.string,filterItems:_.ConditionalFilter.propTypes.items,filterPlaceholder:p.a.string,isCollapsible:p.a.bool,fetchData:p.a.func,toolbarButtons:p.a.func,hideFilterChips:p.a.bool},N.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:F.b,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};var U=N,I=n(158),M=n.n(I),V=n(159),W=n(156),q=n(316),z=n(315),H=n(310),G=n.n(H),J=function(e){var t=e.title,n=e.icon,r=e.description,i=e.actions,o=M()(e,["title","icon","description","actions"]);return s.a.createElement(V.EmptyState,a()({variant:V.EmptyStateVariant.full},o),s.a.createElement(z.EmptyStateIcon,{icon:n||G.a}),s.a.createElement(W.Title,{headingLevel:"h5",size:"lg"},t),s.a.createElement(q.EmptyStateBody,null,r.map((function(e,t){return s.a.createElement(s.a.Fragment,{key:t},e," ",s.a.createElement("br",null))}))),i)};J.propTypes={icon:p.a.func,title:p.a.node,description:p.a.node,actions:p.a.arrayOf(p.a.node),className:p.a.string};var Y=J;n(727);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t=e.isCompact,n=e.createRows,r=e.borders,i=e.columns,c=e.toolbarButtons,f=e.data,p=e.actionResolver,j=e.areActionsDisabled,P=e.routes,S=e.titlePlural,k=e.titleSingular,x=e.pagination,T=e.filterValue,_=e.isLoading,F=e.setFilterValue,C=e.checkedRows,D=e.isSelectable,B=e.fetchData,A=e.setCheckedItems,L=e.isCollapsible,N=e.emptyProps,I=e.filterPlaceholder,M=e.rowWrapper,V=e.filters,W=e.isFilterable,q=e.onShowMore,z=e.showMoreTitle,H=e.onFilter,G=e.onChange,J=e.value,K=e.sortBy,X=e.isExpandable,Z=e.onExpand,$=e.hideFilterChips,ee=Object(u.useState)({}),te=l()(ee,2),ne=te[0],re=te[1],ae=Object(u.useState)({index:void 0,direction:void 0}),ie=l()(ae,2),oe=ie[0],ce=ie[1];Object(u.useEffect)((function(){ce(Q(Q({},K),void 0!==oe.index&&oe))}),[K]);var le=n(f,ne,C),ue=function(e,t,n,r){var a=r.uuid;return re((function(e){return Q(Q({},e),{},o()({},a,n))}))};return s.a.createElement(u.Fragment,null,P(),!_&&0===le.length&&0===T.length&&V.every((function(e){return!e.value}))?s.a.createElement(Y,a()({title:"Configure ".concat(S),icon:E.a,description:["To configure user access to applications","create at least one ".concat(k)],actions:c()[0]},N)):s.a.createElement(u.Fragment,null,s.a.createElement(U,{isSelectable:D,checkedRows:C,setCheckedItems:A,isLoading:_,data:f,titleSingular:k,filterValue:T,setFilterValue:F,sortBy:void 0!==oe.index&&oe.index-D>=0&&"".concat("desc"===oe.direction?"-":"").concat(i[oe.index-D].key)||void 0,pagination:x,fetchData:B,toolbarButtons:c,filterPlaceholder:I,filters:V,isFilterable:W,onShowMore:q,showMoreTitle:z,onFilter:H,onChange:G,value:J,hideFilterChips:$}),_?s.a.createElement(O.d,null):s.a.createElement(d.b,a()({canSelectAll:!1,"aria-label":"".concat(S," table"),variant:t?d.e.compact:null,borders:r},L&&{onCollapse:ue},D&&le.length>0&&{onSelect:function(e,t,n,r){var a=r.uuid,i=l()(r.cells,1)[0];return A(Object(w.f)([{uuid:a,name:i}],t))}},X&&{onExpand:Z},{rows:le.length>0?le:[{fullWidth:!0,cells:[{title:s.a.createElement(Y,{title:"No matching ".concat(S," found"),description:["This filter criteria matches no ".concat(S,"."),"Try changing your filter settings."],actions:[s.a.createElement(y.EmptyStatePrimary,{key:"clear-filters"},s.a.createElement(h.Button,{variant:"link",onClick:function(){F(Q(Q({},x),{},{offset:0,name:""})),B(Q(Q({},x),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:i.length+Boolean(ue)}}]}],cells:i},le.length>0&&{actionResolver:p},{areActionsDisabled:j,rowWrapper:M,sortBy:oe,onSort:function(e,t,n){ce({index:t,direction:n}),B(Q(Q({},x),{},{offset:0,name:T,orderBy:"".concat("desc"===n?"-":"").concat(i[t-D].key)}))}}),s.a.createElement(m.a,null),s.a.createElement(b.a,null)),!x.noBottom&&s.a.createElement(v.TableToolbar,null,!_&&s.a.createElement(g.Pagination,a()({},R(x,B,T),{variant:"bottom",dropDirection:"up"})))))};X.propTypes=Q(Q({},U.propTypes),{},{rowWrapper:p.a.any,isCompact:p.a.bool,borders:p.a.bool,createRows:p.a.func.isRequired,columns:p.a.array.isRequired,titlePlural:p.a.string,routes:p.a.func,actionResolver:p.a.func,areActionsDisabled:p.a.func,pagination:p.a.shape({noBottom:p.a.bool}),isExpandable:p.a.bool,onExpand:p.a.func,hideFilterChips:p.a.bool}),X.defaultProps=Q(Q({},U.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1})},706:function(e,t,n){(t=n(4)(!1)).push([e.i,".pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item{min-width:5rem}\n",""]),e.exports=t},708:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return f}));var r=n(18),a=n(724),i=function(e){return{type:r.k,payload:a.b(e)}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:a.d(e)}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:a.e(e)}},l=function(e){return{type:r.v,payload:a.f(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."}}}}},u=function(e){return{type:r.p,payload:a.b(e)}},s=function(e){return{type:r.o,payload:a.c(e)}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.n,payload:a.d(e)}}},714:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return b}));var r=n(656),a=n.n(r),i=n(655),o=new i.PrincipalApi(void 0,"/api/rbac/v1",a.a),c=new i.GroupApi(void 0,"/api/rbac/v1",a.a),l=new i.RoleApi(void 0,"/api/rbac/v1",a.a),u=(new i.PolicyApi(void 0,"/api/rbac/v1",a.a),new i.AccessApi(void 0,"/api/rbac/v1",a.a)),s=new i.PermissionApi(void 0,"/api/rbac/v1",a.a);function f(){return o}function p(){return c}function d(){return l}function m(){return u}function b(){return s}},717:function(e,t,n){(t=n(4)(!1)).push([e.i,".ins-rbac-page-header__title{display:block}.ins-rbac-page-header__title+.ins-rbac-page-header__description{margin-top:8px}\n",""]),e.exports=t},723:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r),i=n(30),o=n.n(i),c=n(412),l=n(413),u=n(669),s=n(670),f=n(157),p=n(155),d=n(666),m=n(667),b=function(e){return e?a.a.createElement(d.Breadcrumb,null,Object.values(e).map((function(e){return e.title?a.a.createElement(m.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&a.a.createElement(p.c,{exact:!0,to:e.to},e.title)||e.title):a.a.createElement(f.b,null)}))):null};b.propTypes={breadcrumbs:o.a.object};var v=b,h=n(668),g=(n(741),function(e){var t=e.children,n=e.breadcrumbs;return a.a.createElement(r.Fragment,null,n&&a.a.createElement("section",{className:"pf-c-page__main-breadcrumb"},a.a.createElement(v,n)),a.a.createElement(h.PageHeader,{className:"ins-rbac-page-header"},t))});g.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,breadcrumbs:o.a.array,paddingBottom:o.a.bool},g.defaultProps={paddingBottom:!1};var y=function(e){var t=e.title,n=e.renderTitleTag,i=e.description,o=e.children;return a.a.createElement(r.Fragment,null,a.a.createElement(u.Flex,null,a.a.createElement(s.FlexItem,{className:"pf-u-mb-sm",spaceItems:{modifier:"spaceItemsSm"}},a.a.createElement(h.PageHeaderTitle,{title:t||a.a.createElement(f.e,null),className:"ins-rbac-page-header__title"})),a.a.createElement(s.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},n&&n())),i&&a.a.createElement(l.TextContent,{className:"ins-rbac-page-header__description"},a.a.createElement(c.Text,{component:c.TextVariants.p},i)),o)};y.propTypes={title:o.a.string,renderTitleTag:o.a.func,description:o.a.string,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])}},724:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return E}));var r=n(12),a=n.n(r),i=n(715),o=n.n(i),c=n(716),l=n.n(c),u=n(714);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=Object(u.e)();function d(e){return m.apply(this,arguments)}function m(){return(m=l()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var t=e.limit,n=e.offset,r=e.name,a=e.nameMatch,i=e.scope,o=e.orderBy,c=e.addFields,l=e.username,u=e.options;return p.listRoles(t,n,r,a,i,o,c,l,u)}function v(e){return h.apply(this,arguments)}function h(){return(h=l()(o.a.mark((function e(t){var n,r,a,i,c,l,u,s,d,m,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,a=t.name,i=t.nameMatch,c=t.scope,l=void 0===c?"account":c,u=t.orderBy,s=t.addFields,d=void 0===s?["groups_in_count"]:s,m=t.username,b=t.options,e.t0=f,e.t1=f,e.t2={},e.next=6,p.listRoles(n,r,a,i,l,u,d,m,b);case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=l()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=l()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return w.apply(this,arguments)}function w(){return(w=l()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},727:function(e,t,n){var r=n(5),a=n(706);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(706,(function(){"string"==typeof(a=(a=n(706)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},741:function(e,t,n){var r=n(5),a=n(717);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(717,(function(){"string"==typeof(a=(a=n(717)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},743:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(18),a=n(12),i=n.n(a),o=n(714);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(o.d)();var s=function(e){return{type:r.q,payload:(t=e,n=t.limit,a=t.offset,i=t.username,o=t.orderBy,c=t.email,s="-username"===o?"desc":"asc",u.listPrincipals(n,a,i,s,c).then((function(e){return{data:e.data,meta:l(l({},e.meta),{},{offset:a,limit:n})}})))};var t,n,a,i,o,c,s}},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var r=n(12),a=n.n(r),i=n(131),o=n.n(i),c=n(699),l=n.n(c),u=n(308),s=n.n(u),f=n(0),p=n.n(f),d=n(119),m=n(30),b=n.n(m),v=n(155),h=n(703),g=n(705),y=n(743),O=n(309),j=n(651),E=n(352),w=n(353),P=n(749),S=n(60),k=n(86),x=n.n(k),T=n(319),_=n.n(T),F=n(417),C=n.n(F);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=[{title:"Org. Administrator",key:"org-admin"},{title:"Username",key:"username",transforms:[E.a]},{title:"Email"},{title:"First name"},{title:"Last name"},{title:"Status",transforms:[Object(w.a)(10),function(){return{className:"ins-m-width-5"}}]}],A=function(e){return function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?t.reduce((function(t,n){var a=n.username,i=n.is_active,o=n.email,c=n.first_name,l=n.last_name,u=n.is_org_admin;return[].concat(s()(t),[{uuid:a,cells:[u?p.a.createElement(f.Fragment,null,p.a.createElement(_.a,{className:"pf-u-mr-sm"}),"Yes"):p.a.createElement(f.Fragment,null,p.a.createElement(C.a,{className:"pf-u-mr-sm"}),"No"),{title:e?p.a.createElement(v.b,{to:"/users/detail/".concat(a)},a):a},o,c,l,{title:p.a.createElement(j.Label,{isCompact:!0,color:i&&"green",className:x()("ins-c-rbac__user-label",{"ins-m-inactive":!i})},i?"Active":"Inactive"),props:{"data-is-active":i}}],selected:Boolean(r&&r.find((function(e){return e.uuid===a})))}])}),[]):[]}},L=function(e){var t=e.users,n=e.fetchUsers,r=e.isLoading,a=e.pagination,i=e.selectedUsers,c=e.setSelectedUsers,u=e.userLinks,s=e.props,d=Object(f.useState)(""),m=l()(d,2),b=m[0],v=m[1],y=Object(f.useState)(""),O=l()(y,2),j=O[0],E=O[1];Object(f.useEffect)((function(){n()}),[]);return p.a.createElement(g.a,o()({columns:B,isSelectable:!0,isCompact:!0,borders:!1,createRows:A(u),data:t,filterValue:b,fetchData:function(e){n(Object(h.e)(e))},setFilterValue:function(e){var t=e.username,n=e.email;void 0!==t&&v(t),void 0!==n&&E(n)},isLoading:r,pagination:a,checkedRows:i,setCheckedItems:function(e){c((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:P.a,titlePlural:"users",titleSingular:"user",filters:[{key:"username",value:b,placeholder:"Filter by exact username"},{key:"email",value:j,placeholder:"Filter by exact email"}]},s))},N=function(e){var t=e.userReducer,n=t.users,r=t.isUserDataLoading;return{users:n.data&&n.data.map((function(e){return R(R({},e),{},{uuid:e.username})})),pagination:n.meta,isLoading:r}},U=function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.b;e(Object(y.a)(Object(h.e)(t)))},addNotification:function(){return e(O.addNotification.apply(void 0,arguments))}}};L.propTypes={history:b.a.shape({goBack:b.a.func.isRequired,push:b.a.func.isRequired}),users:b.a.array,isLoading:b.a.bool,searchFilter:b.a.string,fetchUsers:b.a.func.isRequired,setSelectedUsers:b.a.func.isRequired,selectedUsers:b.a.array,pagination:b.a.shape({limit:b.a.number.isRequired,offset:b.a.number,count:b.a.number}),userLinks:b.a.bool,props:b.a.object},L.defaultProps={users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1},t.b=Object(d.connect)(N,U)(L);var I=Object(d.connect)(N,U,(function(e,t,n){return R(R(R(R({},n),e),t),{},{fetchUsers:function(e){return t.fetchUsers(e||S.a)}})}))(L)},749:function(e,t,n){"use strict";var r=n(131),a=n.n(r),i=n(158),o=n.n(i),c=n(0),l=n.n(c),u=n(182),s=n(30),f=n.n(s),p=n(86),d=n.n(p),m=function(e){var t=e.row,n=o()(e,["row"]),r=t.status,i=(null==r?void 0:r.props)["data-is-active"];return l.a.createElement(u.a,a()({className:d()("ins-c-rbac__user-row",{"ins-m-inactive":!i}),row:t},n))};m.propTypes={row:f.a.shape({status:f.a.shape({props:f.a.shape({data:f.a.shape({isActive:f.a.bool})})})})},t.a=m},750:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(30),o=n.n(i),c=n(413),l=n(412),u=function(e){var t=e.description,n=e.linkTitle;return a.a.createElement(c.TextContent,null,a.a.createElement(l.Text,{className:"pf-u-mt-0",component:l.TextVariants.h7},t," ",a.a.createElement(l.Text,{component:l.TextVariants.a,href:"https://www.".concat(window.insights.chrome.isProd?"":"qa.","redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},n)))};u.propTypes={description:o.a.node,linkTitle:o.a.node},u.defaultProps={description:"",linkTitle:"user management list."},t.a=u},775:function(e,t,n){var r=n(738),a=n(776),i=n(777),o=Math.max,c=Math.min;e.exports=function(e,t,n){var l,u,s,f,p,d,m=0,b=!1,v=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=l,r=u;return l=u=void 0,m=t,f=e.apply(r,n)}function y(e){return m=e,p=setTimeout(j,t),b?g(e):f}function O(e){var n=e-d;return void 0===d||n>=t||n<0||v&&e-m>=s}function j(){var e=a();if(O(e))return E(e);p=setTimeout(j,function(e){var n=t-(e-d);return v?c(n,s-(e-m)):n}(e))}function E(e){return p=void 0,h&&l?g(e):(l=u=void 0,f)}function w(){var e=a(),n=O(e);if(l=arguments,u=this,d=e,n){if(void 0===p)return y(d);if(v)return clearTimeout(p),p=setTimeout(j,t),g(d)}return void 0===p&&(p=setTimeout(j,t)),f}return t=i(t)||0,r(n)&&(b=!!n.leading,s=(v="maxWait"in n)?o(i(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==p&&clearTimeout(p),m=0,l=d=u=p=void 0},w.flush=function(){return void 0===p?f:E(a())},w}},776:function(e,t,n){var r=n(425);e.exports=function(){return r.Date.now()}},777:function(e,t){e.exports=function(e){return e}},778:function(e,t,n){(t=n(4)(!1)).push([e.i,'.ins-c-rbac__user-label-skeleton{width:50px}input#filter-by-username.ins-c-conditional-filter[type="text"]{width:230px}\n',""]),e.exports=t},889:function(e,t,n){var r=n(5),a=n(778);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(778,(function(){"string"==typeof(a=(a=n(778)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},895:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(38),o=n(647),c=n(648),l=n(723),u=n(653),s=n(746),f=n(750),p=n(308),d=n.n(p),m=n(699),b=n.n(m),v=n(12),h=n.n(v),g=n(30),y=n.n(g),O=n(119),j=n(155),E=n(775),w=n.n(E),P=n(651),S=n(705),k=n(652),x=n(167),T=n(708),_=n(743),F=n(157),C=n(86),D=n.n(C),R=n(60),B=(n(889),n(354)),A=n(61),L=n(367),N=n(365);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M,V=["Roles",{title:"Groups",cellTransforms:[B.a]},{title:"Permissions",cellTransforms:[B.a]},{title:"Last commit"}],W=function(e){var t=e.match.params.username,n=e.fetchRoles,i=e.fetchRoleForUser,s=e.fetchUsers,f=e.roles,p=e.isLoading,m=e.rolesWithAccess,v=e.user;Object(r.useEffect)((function(){s(I(I({},R.b),{},{limit:0,username:t}))}),[]);var g=Object(r.useState)(""),y=b()(g,2),O=y[0],E=y[1],T=Object(r.useState)({}),_=b()(T,2),C=_[0],B=_[1];Object(r.useEffect)((function(){n({limit:20,offset:0,addFields:["groups_in"],username:t}),M=w()((function(e,t,r,a,i){return n({limit:e,offset:t,name:r,addFields:a,username:i})}),500)}),[]);return a.a.createElement(o.Stack,null,a.a.createElement(c.StackItem,null,a.a.createElement(l.a,{paddingBottm:!1,breadcrumbs:[{title:"Users",to:"/users"},{title:t,isActive:!0}]},a.a.createElement(l.b,{title:t,renderTitleTag:function(){return v&&!p?a.a.createElement(P.Label,{color:(null==v?void 0:v.is_active)&&"green",isCompact:!0,className:D()("ins-c-rbac__user-label",{"ins-m-inactive":!(null==v?void 0:v.is_active)})},(null==v?void 0:v.is_active)?"Active":"Inactive"):a.a.createElement(x.Skeleton,{size:"xs",className:"ins-c-rbac__user-label-skeleton"})},description:"".concat(t,"'s roles, groups and permissions.")}))),a.a.createElement(c.StackItem,null,a.a.createElement(u.Section,{type:"content",id:"user-detail"},a.a.createElement(S.a,{columns:V,isCompact:!1,isExpandable:!0,onExpand:function(e,t,n,r,a){r?B(I(I({},C),{},h()({},a.uuid,-1))):(B(I(I({},C),{},h()({},a.uuid,n))),2===n&&i(a.uuid))},createRows:function(e){return e?e.reduce((function(e,t,n){var r=t.uuid,i=t.name,o=t.groups_in,c=void 0===o?[]:o,l=t.modified,u=t.accessCount;return[].concat(d()(e),[{uuid:r,cells:[{title:i,props:{component:"th",isOpen:!1}},{title:"".concat(c.length),props:{isOpen:1===C[r]}},{title:u,props:{isOpen:2===C[r]}},{title:a.a.createElement(k.DateFormat,{type:"exact",date:l})}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:a.a.createElement(A.b,{"aria-label":"Simple Table",variant:A.e.compact,cells:["Name","Description"],rows:c.map((function(e){return{cells:[{title:a.a.createElement(j.b,{to:"/groups/detail/".concat(e.uuid)},e.name)},e.description]}}))},a.a.createElement(L.a,null),a.a.createElement(N.a,null))}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:m&&m[r]?a.a.createElement(A.b,{"aria-label":"Simple Table",variant:A.e.compact,cells:["Application","Resource type","Operation"],rows:m[r].access.map((function(e){return{cells:e.permission.split(":")}}))},a.a.createElement(L.a,null),a.a.createElement(N.a,null)):a.a.createElement(F.d,null)}]}])}),[]):[]},data:f.data,filterValue:O,fetchData:function(e){var n=e.limit,r=e.offset,a=e.name;M(n,r,a,["groups_in"],t)},setFilterValue:function(e){var t=e.name;return E(t)},isLoading:p,pagination:f.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role"}))))};W.propTypes={match:y.a.object,fetchRoles:y.a.func,fetchRoleForUser:y.a.func,fetchUsers:y.a.func,roles:y.a.object,isLoading:y.a.bool,rolesWithAccess:y.a.object,user:y.a.object};var q=Object(i.j)(Object(O.connect)((function(e,t){var n=e.roleReducer,r=n.roles,a=n.isLoading,i=n.rolesWithAccess,o=e.userReducer.users.data,c=t.match.params.username;return{roles:r,isLoading:a,rolesWithAccess:i,user:o&&o.filter((function(e){return e.username===c}))[0]}}),(function(e){return{fetchRoles:function(t){return e(Object(T.d)(t))},fetchRoleForUser:function(t){return e(Object(T.c)(t))},fetchUsers:function(t){return e(Object(_.a)(t))}}}))(W)),z=n(120),H=function(){var e=a.a.createElement(f.a,{description:"These are all of the users in your Red Hat organization. To add new users or manage existing users, go to your"});Object(r.useEffect)((function(){insights.chrome.appNavClick({id:"users",secondaryNav:!0})}),[]);return a.a.createElement(i.d,null,a.a.createElement(i.b,{exact:!0,path:z.a["user-detail"],render:function(e){return a.a.createElement(q,e)}}),a.a.createElement(i.b,{path:z.a.users,render:function(){return a.a.createElement(o.Stack,null,a.a.createElement(c.StackItem,null,a.a.createElement(l.a,{paddingBottm:!1},a.a.createElement(l.b,{title:"Users",description:e}))),a.a.createElement(c.StackItem,null,a.a.createElement(u.Section,{type:"content",id:"users"},a.a.createElement(s.b,{userLinks:!0,props:{isSelectable:!1,isCompact:!1}}))))}}))};H.propTypes={},H.defaultProps={};t.default=H}}]);
//# sourceMappingURL=9.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{511:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"c",(function(){return g}));var r=n(185),a=n.n(r),i=n(7),o=n.n(i),c=n(508),l=n.n(c),s=n(476);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},d=function(e){return Object.entries(e).reduce((function(e,t){var n=l()(t,2),r=n[0],a=n[1];return f(f({},e),a&&o()({},r,a))}),{})},m=n.n(s)()((function(e){return e()})),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return 0!==e.length&&e.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||!(0===e.length||!e.some((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))})))&&null},v=function(e,t){return function(n){return t?[].concat(a()(n),a()(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},g=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},513:function(e,t,n){"use strict";n.d(t,"a",(function(){return Q}));var r=n(63),a=n.n(r),i=n(7),o=n.n(i),c=n(508),l=n.n(c),s=n(0),u=n.n(s),f=n(13),p=n.n(f),d=n(27),m=n(247),b=n(245),v=n(479),g=n(39),h=n(191),y=n(478),O=n(77),j=n(480),E=n.n(j),w=n(511),P=n(185),S=n.n(P),k=n(477),x=n(283),T=n(34);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return D(D({},e),{},{itemCount:e.count,perPage:e.limit,page:Object(w.d)(e.limit,e.offset),onSetPage:function(a,i){t(D(D({},e),{},{offset:(i-1)*e.limit,name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(a,i){t(D(D({},e),{},{offset:0,limit:i,name:n,orderBy:r}))}})},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},D({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n(Object(w.f)(r,!0))}}:{})],checked:Object(w.a)(r,t),onSelect:function(t){!e&&n(Object(w.f)(r,t))}}},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0;return{items:[].concat(S()(s&&s.length>0?s.map((function(r){var i=r.key,c=r.value,l=r.placeholder,f=r.type,p=void 0===f?"text":f,d=r.items;return{label:Object(w.c)(i),type:p,filterValues:{id:"filter-by-".concat(i),key:"filter-by-".concat(i),placeholder:l||"Filter by ".concat(i),value:c,items:d,onChange:function(e,r){t(D(D({},a),{},o()({offset:0},i,r))),Object(w.b)((function(){return n(D(D(D({},a),{},{offset:0,orderBy:u},s.reduce((function(e,t){return D(D({},e),{},o()({},t.key,t.value))}),{})),{},o()({},i,r)))}))},isDisabled:e}}})):[{label:Object(w.c)(c||i),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||i),value:r,onChange:function(e,r){t(D(D({},a),{},{offset:0,name:r})),Object(w.b)((function(){return n(D(D({},a),{},{offset:0,name:r,orderBy:u}))}))},isDisabled:e}}]),S()(l||[]))}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},i=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&{category:Object(w.c)(t),type:t,chips:[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,s){var u=l()(c,1)[0];r(D(D({},n),{},{offset:0,name:""},t?t.reduce((function(e,t){var n=t.key,r=t.value;return D(D({},e),{},o()({},n,u.type===n||s?"":r))}),{}):{name:""})),a(D(D({},n),{},{offset:0,orderBy:i},t?t.reduce((function(e,t){var n=t.key,r=t.value;return D(D({},e),{},o()({},n,u.type===n||s?"":r))}),{}):{name:""}))}}},L=function(e){var t=e.isSelectable,n=e.checkedRows,r=e.setCheckedItems,i=e.isLoading,o=e.data,c=e.titleSingular,l=e.filterValue,s=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,m=e.toolbarButtons,b=e.filterPlaceholder,v=e.filterItems,g=e.textFilters,h=e.hideFilterChips;return u.a.createElement(k.PrimaryToolbar,a()({},t&&{bulkSelect:F(i,n,r,o)},{filterConfig:R(i,s,p,l,f,c,b,v,g,d),actionsConfig:{actions:m()}},!i&&{pagination:C(f,p,l,d)},(l.length>0||g&&g.length>0)&&!h&&{activeFiltersConfig:B(l,g,f,s,p,d)}))};L.propTypes={isSelectable:p.a.bool,checkedRows:p.a.array,setCheckedItems:p.a.func,isLoading:p.a.bool,data:p.a.array,titleSingular:p.a.string,filterValue:p.a.oneOfType([p.a.array,p.a.string]),setFilterValue:p.a.func,textFilters:p.a.arrayOf(p.a.shape({value:p.a.oneOfType([p.a.string,p.a.number]),key:p.a.string,placeholder:p.a.string})),pagination:p.a.shape({limit:p.a.number,offset:p.a.number,count:p.a.number}),sortBy:p.a.string,filterItems:x.ConditionalFilter.propTypes.items,filterPlaceholder:p.a.string,isCollapsible:p.a.bool,fetchData:p.a.func,toolbarButtons:p.a.func,hideFilterChips:p.a.bool},L.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:T.b,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],textFilters:[],hideFilterChips:!1};var A=L,I=n(78),U=n.n(I),V=n(79),N=n(64),q=n(196),W=n(195),M=n(188),z=n.n(M),H=function(e){var t=e.title,n=e.icon,r=e.description,i=e.actions,o=U()(e,["title","icon","description","actions"]);return u.a.createElement(V.EmptyState,a()({variant:V.EmptyStateVariant.full},o),u.a.createElement(W.EmptyStateIcon,{icon:n||z.a}),u.a.createElement(N.Title,{headingLevel:"h5",size:"lg"},t),u.a.createElement(q.EmptyStateBody,null,r.map((function(e,t){return u.a.createElement(u.a.Fragment,{key:t},e," ",u.a.createElement("br",null))}))),i)};H.propTypes={icon:p.a.func,title:p.a.node,description:p.a.node,actions:p.a.arrayOf(p.a.node),className:p.a.string};var G=H;n(535);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(e){var t=e.isCompact,n=e.createRows,r=e.borders,i=e.columns,c=e.toolbarButtons,f=e.data,p=e.actionResolver,j=e.areActionsDisabled,P=e.routes,S=e.titlePlural,k=e.titleSingular,x=e.pagination,T=e.filterValue,_=e.isLoading,D=e.setFilterValue,F=e.checkedRows,R=e.isSelectable,B=e.fetchData,L=e.setCheckedItems,I=e.isCollapsible,U=e.emptyProps,V=e.filterPlaceholder,N=e.rowWrapper,q=e.textFilters,W=e.sortBy,M=e.isExpandable,z=e.onExpand,H=e.hideFilterChips,J=Object(s.useState)({}),Q=l()(J,2),X=Q[0],Y=Q[1],Z=Object(s.useState)({index:void 0,direction:void 0}),$=l()(Z,2),ee=$[0],te=$[1];Object(s.useEffect)((function(){te(K(K({},W),void 0!==ee.index&&ee))}),[W]);var ne=n(f,X,F),re=function(e,t,n,r){var a=r.uuid;return Y((function(e){return K(K({},e),{},o()({},a,n))}))};return u.a.createElement(s.Fragment,null,P(),!_&&0===ne.length&&0===T.length&&q.every((function(e){return!e.value}))?u.a.createElement(G,a()({title:"Configure ".concat(S),icon:E.a,description:["To configure user access to applications","create at least one ".concat(k)],actions:c()[0]},U)):u.a.createElement(s.Fragment,null,u.a.createElement(A,{isSelectable:R,checkedRows:F,setCheckedItems:L,isLoading:_,data:f,titleSingular:k,filterValue:T,setFilterValue:D,sortBy:void 0!==ee.index&&ee.index-R>=0&&"".concat("desc"===ee.direction?"-":"").concat(i[ee.index-R].key)||void 0,pagination:x,fetchData:B,toolbarButtons:c,filterPlaceholder:V,textFilters:q,hideFilterChips:H}),_?u.a.createElement(O.d,null):u.a.createElement(d.b,a()({canSelectAll:!1,"aria-label":"".concat(S," table"),variant:t?d.e.compact:null,borders:r},I&&{onCollapse:re},R&&ne.length>0&&{onSelect:function(e,t,n,r){var a=r.uuid,i=l()(r.cells,1)[0];return L(Object(w.f)([{uuid:a,name:i}],t))}},M&&{onExpand:z},{rows:ne.length>0?ne:[{fullWidth:!0,cells:[{title:u.a.createElement(G,{title:"No matching ".concat(S," found"),description:["This filter criteria matches no ".concat(S,"."),"Try changing your filter settings."],actions:[u.a.createElement(y.EmptyStatePrimary,{key:"clear-filters"},u.a.createElement(g.Button,{variant:"link",onClick:function(){D(K(K({},x),{},{offset:0,name:""})),B(K(K({},x),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:i.length+Boolean(re)}}]}],cells:i},ne.length>0&&{actionResolver:p},{areActionsDisabled:j,rowWrapper:N,sortBy:ee,onSort:function(e,t,n){te({index:t,direction:n}),B(K(K({},x),{},{offset:0,name:T,orderBy:"".concat("desc"===n?"-":"").concat(i[t-R].key)}))}}),u.a.createElement(m.a,null),u.a.createElement(b.a,null)),!x.noBottom&&u.a.createElement(v.TableToolbar,null,!_&&u.a.createElement(h.Pagination,a()({},C(x,B,T),{variant:"bottom",dropDirection:"up"})))))};Q.propTypes=K(K({},A.propTypes),{},{rowWrapper:p.a.any,isCompact:p.a.bool,borders:p.a.bool,createRows:p.a.func.isRequired,columns:p.a.array.isRequired,titlePlural:p.a.string,routes:p.a.func,actionResolver:p.a.func,areActionsDisabled:p.a.func,pagination:p.a.shape({noBottom:p.a.bool}),isExpandable:p.a.bool,onExpand:p.a.func,hideFilterChips:p.a.bool}),Q.defaultProps=K(K({},A.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1})},516:function(e,t,n){(t=n(5)(!1)).push([e.i,".pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item{min-width:5rem}\n",""]),e.exports=t},518:function(e,t,n){(t=n(5)(!1)).push([e.i,".ins-rbac-page-header__title{display:block}.ins-rbac-page-header__title+.ins-rbac-page-header__description{margin-top:8px}\n",""]),e.exports=t},519:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return E})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return P})),n.d(t,"b",(function(){return S})),n.d(t,"d",(function(){return k}));var r=n(10),a=n(7),i=n.n(a),o=n(525),c=n.n(o),l=n(526),s=n.n(l),u=n(521);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=Object(u.d)();function m(e){var t=e.limit,n=e.offset,r=e.name,a=e.scope,i=e.orderBy,o=e.addFields,c=e.username;return d.listRoles(t,n,r,a,i,o,c)}function b(e){return v.apply(this,arguments)}function v(){return(v=s()(c.a.mark((function e(t){var n,r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,a=t.name,i=t.orderBy,e.t0=p,e.t1=p,e.t2={},e.next=6,d.listRoles(n,r,a,"account",i,["groups_in_count"]);case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=s()(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return O.apply(this,arguments)}function O(){return(O=s()(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(e){return{type:r.k,payload:g(e)}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:m(e)}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.l,payload:b(e)}},P=function(e){return{type:r.t,payload:y(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."}}}}},S=function(e){return{type:r.o,payload:g(e)}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.n,payload:m(e)}}},521:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return d}));var r=n(475),a=n.n(r),i=n(474),o=new i.PrincipalApi(void 0,"/api/rbac/v1",a.a),c=new i.GroupApi(void 0,"/api/rbac/v1",a.a),l=new i.RoleApi(void 0,"/api/rbac/v1",a.a),s=(new i.PolicyApi(void 0,"/api/rbac/v1",a.a),new i.AccessApi(void 0,"/api/rbac/v1",a.a));function u(){return o}function f(){return c}function p(){return l}function d(){return s}},523:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r),i=n(13),o=n.n(i),c=n(274),l=n(275),s=n(486),u=n(487),f=n(77),p=n(76),d=n(483),m=n(484),b=function(e){return e?a.a.createElement(d.Breadcrumb,null,Object.values(e).map((function(e){return e.title?a.a.createElement(m.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&a.a.createElement(p.c,{exact:!0,to:e.to},e.title)||e.title):a.a.createElement(f.b,null)}))):null};b.propTypes={breadcrumbs:o.a.object};var v=b,g=n(485),h=(n(539),function(e){var t=e.children,n=e.breadcrumbs;return a.a.createElement(r.Fragment,null,n&&a.a.createElement("section",{className:"pf-c-page__main-breadcrumb"},a.a.createElement(v,n)),a.a.createElement(g.PageHeader,{className:"ins-rbac-page-header"},t))});h.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,breadcrumbs:o.a.array,paddingBottom:o.a.bool},h.defaultProps={paddingBottom:!1};var y=function(e){var t=e.title,n=e.renderTitleTag,i=e.description,o=e.children;return a.a.createElement(r.Fragment,null,a.a.createElement(s.Flex,null,a.a.createElement(u.FlexItem,{spaceItems:{modifier:"spaceItemsSm"}},a.a.createElement(g.PageHeaderTitle,{title:t||a.a.createElement(f.e,null),className:"ins-rbac-page-header__title"})),a.a.createElement(u.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},n&&n())),i&&a.a.createElement(l.TextContent,{className:"ins-rbac-page-header__description"},a.a.createElement(c.Text,{component:c.TextVariants.p},i)),o)};y.propTypes={title:o.a.string,renderTitleTag:o.a.func,description:o.a.string,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])}},535:function(e,t,n){var r=n(6),a=n(516);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(516,(function(){"string"==typeof(a=(a=n(516)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},539:function(e,t,n){var r=n(6),a=n(518);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(518,(function(){"string"==typeof(a=(a=n(518)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},541:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(10),a=n(7),i=n.n(a),o=n(521);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(o.c)();var u=function(e){return{type:r.p,payload:(t=e,n=t.limit,a=t.offset,i=t.username,o=t.orderBy,c=t.email,u="-username"===o?"desc":"asc",s.listPrincipals(n,a,i,u,c).then((function(e){return{data:e.data,meta:l(l({},e.meta),{},{offset:a,limit:n})}})))};var t,n,a,i,o,c,u}},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var r=n(7),a=n.n(r),i=n(63),o=n.n(i),c=n(508),l=n.n(c),s=n(185),u=n.n(s),f=n(0),p=n.n(f),d=n(54),m=n(13),b=n.n(m),v=n(76),g=n(511),h=n(513),y=n(541),O=n(186),j=n(473),E=n(231),w=n(230),P=n(544),S=n(34),k=n(18),x=n.n(k);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=[{title:"Status",transforms:[Object(E.a)(10),function(){return{className:"ins-m-width-5"}}]},{title:"Username",key:"username",transforms:[w.a]},{title:"Email"},{title:"First name"},{title:"Last name"}],C=function(e){return function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?t.reduce((function(t,n){var a=n.username,i=n.is_active,o=n.email,c=n.first_name,l=n.last_name;return[].concat(u()(t),[{uuid:a,cells:[{title:p.a.createElement(j.Label,{isCompact:!0,color:i&&"green",className:x()("ins-c-rbac__user-label",{"ins-m-inactive":!i})},i?"Active":"Inactive"),props:{data:{isActive:i}}},{title:e?p.a.createElement(v.b,{to:"/users/detail/".concat(a)},a):a},o,c,l],selected:Boolean(r&&r.find((function(e){return e.uuid===a})))}])}),[]):[]}},F=function(e){var t=e.users,n=e.fetchUsers,r=e.isLoading,a=e.pagination,i=e.selectedUsers,c=e.setSelectedUsers,s=e.userLinks,u=e.props,d=Object(f.useState)(""),m=l()(d,2),b=m[0],v=m[1],y=Object(f.useState)(""),O=l()(y,2),j=O[0],E=O[1];Object(f.useEffect)((function(){n()}),[]);return p.a.createElement(h.a,o()({columns:D,isSelectable:!0,isCompact:!0,borders:!1,createRows:C(s),data:t,filterValue:b,fetchData:function(e){n(Object(g.e)(e))},setFilterValue:function(e){var t=e.username,n=e.email;void 0!==t&&v(t),void 0!==n&&E(n)},isLoading:r,pagination:a,checkedRows:i,setCheckedItems:function(e){c((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:P.a,titlePlural:"users",titleSingular:"user",textFilters:[{key:"username",value:b,placeholder:"Filter by exact username"},{key:"email",value:j,placeholder:"Filter by exact email"}]},u))},R=function(e){var t=e.userReducer,n=t.users,r=t.isUserDataLoading;return{users:n.data&&n.data.map((function(e){return _(_({},e),{},{uuid:e.username})})),pagination:n.meta,isLoading:r}},B=function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.b;e(Object(y.a)(Object(g.e)(t)))},addNotification:function(){return e(O.addNotification.apply(void 0,arguments))}}};F.propTypes={history:b.a.shape({goBack:b.a.func.isRequired,push:b.a.func.isRequired}),users:b.a.array,isLoading:b.a.bool,searchFilter:b.a.string,fetchUsers:b.a.func.isRequired,setSelectedUsers:b.a.func.isRequired,selectedUsers:b.a.array,pagination:b.a.shape({limit:b.a.number.isRequired,offset:b.a.number,count:b.a.number}),userLinks:b.a.bool,props:b.a.object},F.defaultProps={users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1},t.b=Object(d.connect)(R,B)(F);var L=Object(d.connect)(R,B,(function(e,t,n){return _(_(_(_({},n),e),t),{},{fetchUsers:function(e){return t.fetchUsers(e||S.a)}})}))(F)},544:function(e,t,n){"use strict";var r=n(63),a=n.n(r),i=n(78),o=n.n(i),c=n(0),l=n.n(c),s=n(99),u=n(13),f=n.n(u),p=function(e){var t,n,r=e.row,i=o()(e,["row"]),c=r.status;return l.a.createElement(s.a,a()({className:"ins-c-rbac__user-row ".concat((null==c||null===(t=c.props)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.isActive)?"":"ins-m-inactive"),row:r},i))};p.propTypes={row:f.a.shape({status:f.a.shape({props:f.a.shape({data:f.a.shape({isActive:f.a.bool})})})})},t.a=p},545:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(13),o=n.n(i),c=n(275),l=n(274),s=function(e){var t=e.description,n=e.linkTitle;return a.a.createElement(c.TextContent,null,a.a.createElement(l.Text,{className:"pf-u-mt-0",component:l.TextVariants.h7},t," ",a.a.createElement(l.Text,{component:l.TextVariants.a,href:"https://www.".concat(window.insights.chrome.isProd?"":"qa.","redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},n)))};s.propTypes={description:o.a.node,linkTitle:o.a.node},s.defaultProps={description:"",linkTitle:"user management list."},t.a=s},565:function(e,t,n){(t=n(5)(!1)).push([e.i,".ins-c-rbac__user-label-skeleton{width:50px}\n",""]),e.exports=t},652:function(e,t,n){var r=n(6),a=n(565);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=r(a,i);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(565,(function(){"string"==typeof(a=(a=n(565)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(c,a.locals)?(c=a.locals,o(a)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=a.locals||{}},655:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(14),o=n(466),c=n(467),l=n(523),s=n(471),u=n(543),f=n(545),p=n(185),d=n.n(p),m=n(508),b=n.n(m),v=n(7),g=n.n(v),h=n(13),y=n.n(h),O=n(54),j=n(76),E=n(649),w=n.n(E),P=n(473),S=n(513),k=n(470),x=n(84),T=n(519),_=n(541),D=n(77),C=n(18),F=n.n(C),R=n(34),B=(n(652),n(232)),L=n(27),A=n(247),I=n(245);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N,q=["Roles",{title:"Groups",cellTransforms:[B.a]},{title:"Permissions",cellTransforms:[B.a]},{title:"Last commit"}],W=function(e){var t=e.match.params.username,n=e.fetchRoles,i=e.fetchRoleForUser,u=e.fetchUsers,f=e.roles,p=e.isLoading,m=e.rolesWithAccess,v=e.user;Object(r.useEffect)((function(){u(V(V({},R.b),{},{limit:0,username:t}))}),[]);var h=Object(r.useState)(""),y=b()(h,2),O=y[0],E=y[1],T=Object(r.useState)({}),_=b()(T,2),C=_[0],B=_[1];Object(r.useEffect)((function(){n({limit:20,offset:0,addFields:["groups_in"],username:t}),N=w()((function(e,t,r,a,i){return n({limit:e,offset:t,name:r,addFields:a,username:i})}),500)}),[]);return a.a.createElement(o.Stack,null,a.a.createElement(c.StackItem,null,a.a.createElement(l.a,{paddingBottm:!1},a.a.createElement(l.b,{title:t,renderTitleTag:function(){return v&&!p?a.a.createElement(P.Label,{isCompact:!0,className:F()("ins-c-rbac__user-label",{"ins-m-inactive":!(null==v?void 0:v.is_active)})},(null==v?void 0:v.is_active)?"Active":"Inactive"):a.a.createElement(x.Skeleton,{size:"xs",className:"ins-c-rbac__user-label-skeleton"})},description:"".concat(t,"'s roles, groups and permissions.")}))),a.a.createElement(c.StackItem,null,a.a.createElement(s.Section,{type:"content",id:"user-detail"},a.a.createElement(S.a,{columns:q,isCompact:!1,isExpandable:!0,onExpand:function(e,t,n,r,a){r?B(V(V({},C),{},g()({},a.uuid,-1))):(B(V(V({},C),{},g()({},a.uuid,n))),2===n&&i(a.uuid))},createRows:function(e){return e?e.reduce((function(e,t,n){var r=t.uuid,i=t.name,o=t.groups_in,c=void 0===o?[]:o,l=t.modified,s=t.accessCount;return[].concat(d()(e),[{uuid:r,cells:[{title:i,props:{component:"th",isOpen:!1}},{title:"".concat(c.length),props:{isOpen:1===C[r]}},{title:s,props:{isOpen:2===C[r]}},{title:a.a.createElement(k.DateFormat,{type:"exact",date:l})}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:a.a.createElement(L.b,{"aria-label":"Simple Table",variant:L.e.compact,cells:["Name","Description"],rows:c.map((function(e){return{cells:[{title:a.a.createElement(j.b,{to:"/groups/detail/".concat(e.uuid)},e.name)},e.description]}}))},a.a.createElement(A.a,null),a.a.createElement(I.a,null))}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:m&&m[r]?a.a.createElement(L.b,{"aria-label":"Simple Table",variant:L.e.compact,cells:["Application","Resource type","Operation"],rows:m[r].access.map((function(e){return{cells:e.permission.split(":")}}))},a.a.createElement(A.a,null),a.a.createElement(I.a,null)):a.a.createElement(D.d,null)}]}])}),[]):[]},data:f.data,filterValue:O,fetchData:function(e){var n=e.limit,r=e.offset,a=e.name;N(n,r,a,["groups_in"],t)},setFilterValue:function(e){var t=e.name;return E(t)},isLoading:p,pagination:f.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role"}))))};W.propTypes={match:y.a.object,fetchRoles:y.a.func,fetchRoleForUser:y.a.func,fetchUsers:y.a.func,roles:y.a.object,isLoading:y.a.bool,rolesWithAccess:y.a.object,user:y.a.object};var M=Object(i.j)(Object(O.connect)((function(e,t){var n=e.roleReducer,r=n.roles,a=n.isLoading,i=n.rolesWithAccess,o=e.userReducer.users.data,c=t.match.params.username;return{roles:r,isLoading:a,rolesWithAccess:i,user:o&&o.filter((function(e){return e.username===c}))[0]}}),(function(e){return{fetchRoles:function(t){return e(Object(T.c)(t))},fetchRoleForUser:function(t){return e(Object(T.b)(t))},fetchUsers:function(t){return e(Object(_.a)(t))}}}))(W)),z=function(){var e=a.a.createElement(f.a,{description:"These are all of the users in your Red Hat organization. To add new users or manage existing users, go to your"});Object(r.useEffect)((function(){insights.chrome.appNavClick({id:"users",secondaryNav:!0})}),[]);return a.a.createElement(i.d,null,a.a.createElement(i.b,{exact:!0,path:"/users/detail/:username",render:function(e){return a.a.createElement(M,e)}}),a.a.createElement(i.b,{path:"/users",render:function(){return a.a.createElement(o.Stack,null,a.a.createElement(c.StackItem,null,a.a.createElement(l.a,{paddingBottm:!1},a.a.createElement(l.b,{title:"Users",description:e}))),a.a.createElement(c.StackItem,null,a.a.createElement(s.Section,{type:"content",id:"users"},a.a.createElement(u.b,{userLinks:!0,props:{isSelectable:!1,isCompact:!1}}))))}}))};z.propTypes={},z.defaultProps={};t.default=z}}]);
//# sourceMappingURL=9.js.map
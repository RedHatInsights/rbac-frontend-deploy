(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[2920],{43115:(e,t,n)=>{"use strict";n.d(t,{fA:()=>d,vd:()=>h,Kt:()=>v,fp:()=>g,DV:()=>m,l5:()=>O,ul:()=>k,lq:()=>j,sZ:()=>D});var r=n(87757),i=n.n(r),o=n(59713),a=n.n(o),c=n(48926),l=n.n(c);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=(0,n(89400).ix)();function d(e){return p.apply(this,arguments)}function p(){return(p=l()(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){var t=e.limit,n=e.offset,r=e.name,i=e.nameMatch,o=e.scope,a=e.orderBy,c=void 0===a?"display_name":a,l=e.addFields,s=e.username,u=e.application,d=e.permission,p=e.options;return f.listRoles(t,n,void 0,r,i,o,c,l,s,u,d,p)}function v(e){return y.apply(this,arguments)}function y(){return(y=l()(i().mark((function e(t){var n,r,o,a,c,l,s,d,p,h,v,y,g,b,m,w,O;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,o=t.filters,a=void 0===o?{}:o,c=t.nameMatch,l=t.scope,s=void 0===l?"account":l,d=t.orderBy,p=void 0===d?"display_name":d,h=t.addFields,v=void 0===h?["groups_in_count"]:h,y=t.username,g=t.options,b=t.permission,m=t.application,w=t.inModal,O=void 0===w||w,e.t0=u,e.t1=u,e.t2={},e.next=6,f.listRoles(n,r,void 0,a.name,c,s,p,v,y,m,b,g).then((function(e){var t=e.data,i=e.meta;return u({data:t,meta:i},O?{}:{filters:a,pagination:u(u({},i),{},{offset:r,limit:n})})}));case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=l()(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=l()(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return P.apply(this,arguments)}function P(){return(P=l()(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(){var e=l()(i().mark((function e(t,n,r){var o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getRoleAccess(t);case 2:return o=e.sent,a=o.data,e.abrupt("return",f.updateRole(t,r?u(u({},n),{},{access:a}):n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),j=function(){var e=l()(i().mark((function e(t,n){var r,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getRoleAccess(t.uuid);case 2:return r=e.sent,o=r.data,a=u(u({},t),{},{access:o.filter((function(e){return!n.includes(e.permission)}))}),e.abrupt("return",f.updateRole(t.uuid,u({},a)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=l()(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.patchRole(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},11107:(e,t,n)=>{"use strict";n.d(t,{VG:()=>p,jl:()=>h,Aq:()=>v,um:()=>y,ZQ:()=>g,RI:()=>b,GT:()=>m,zk:()=>w});var r=n(319),i=n.n(r),o=n(59713),a=n.n(o),c=n(63038),l=n.n(c),s=n(48623),u=n(61338);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p="bad uuid",h=function(e){return Object.entries(e).reduce((function(e,t){var n=l()(t,2),r=n[0],i=n[1];return d(d({},e),i&&a()({},r,i))}),{})},v=(0,s.Z)((function(e){return e()})),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.filter((function(e){return!e.platform_default}));return 0!==n.length&&n.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||t.length>0&&null},g=function(e,t){return function(n){return t?[].concat(i()(n),i()(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},b=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},m=function(e){var t=new URLSearchParams;return Object.keys(e).forEach((function(n){var r=e[n];Array.isArray(r)?r.forEach((function(e){return e&&t.append(n,e)})):r&&t.set(n,r)})),t.toString()},w=function(e,t,n){return{pathname:e,search:m(d({page:(0,u.wy)(t.limit,t.offset),per_page:t.limit},n))}}},89400:(e,t,n)=>{"use strict";n.d(t,{TR:()=>g,i$:()=>m,tP:()=>v,Y3:()=>b,bn:()=>h,ix:()=>y});var r=n(77460),i=n(72548),o=n(17951),a="/api/rbac/v1",c="/api/cost-management/v1",l=new i.PrincipalApi(void 0,a,r.ZP),s=new i.GroupApi(void 0,a,r.ZP),u=new i.RoleApi(void 0,a,r.ZP),f=(new i.PolicyApi(void 0,a,r.ZP),new i.AccessApi(void 0,a,r.ZP)),d=new i.PermissionApi(void 0,a,r.ZP),p=new o.BaseAPI(void 0,c,r.ZP);function h(){return l}function v(){return s}function y(){return u}function g(){return f}function b(){return d}function m(){return{getResourceTypes:function(){return p.axios.get("".concat(c,"/resource-types/"))},getResource:function(e){return p.axios.get("".concat(e,"?limit=1000"))}}}},67643:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(67154),i=n.n(r),o=n(6479),a=n.n(o),c=n(80150),l=n.n(c),s=n(45697),u=n.n(s),f=n(9947),d=n(75106),p=n(38424),h=n(60485),v=n(80810),y=function(e){var t=e.title,n=e.icon,r=e.description,o=e.actions,c=a()(e,["title","icon","description","actions"]);return l().createElement(f.u,i()({variant:f.I.full},c),l().createElement(p.k,{icon:n||v.ZP}),l().createElement(h.D,{headingLevel:"h4",size:"lg"},t),l().createElement(d.B,null,r.map((function(e,t){return l().createElement(l().Fragment,{key:t},e," ",l().createElement("br",null))}))),o)};y.propTypes={icon:u().func,title:u().node,description:u().node,actions:u().oneOfType([u().node,u().arrayOf(u().node)]),className:u().string};const g=y},41800:(e,t,n)=>{"use strict";n.d(t,{M:()=>M});var r=n(67154),i=n.n(r),o=n(59713),a=n.n(o),c=n(63038),l=n.n(c),s=n(80150),u=n.n(s),f=n(45697),d=n.n(f),p=n(43349),h=n(32875),v=n(47173),y=n(71070),g=n(1417),b=n(19571),m=n(7081),w=n(11107),O=n(319),P=n.n(O),k=n(35937),j=n.n(k),D=n(91247),x=n(14216),S=n(61338);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return E(E({},e),{},{itemCount:e.count,perPage:e.limit,page:(0,S.wy)(e.limit,e.offset),onSetPage:function(i,o){t(E(E({},e),{},{offset:(0,S.vE)(o,e.limit),name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(i,o){t(E(E({},e),{},{offset:0,limit:o,name:n,orderBy:r}))}})},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0;return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},E({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n((0,w.ZQ)(r,!0))}}:{})],checked:(0,w.um)(r,t),onSelect:function(t){!e&&n((0,w.ZQ)(r,t))},id:i}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,d=arguments.length>11?arguments[11]:void 0,p=arguments.length>12?arguments[12]:void 0,h=arguments.length>13?arguments[13]:void 0,v=arguments.length>14?arguments[14]:void 0,y=arguments.length>15?arguments[15]:void 0;return{onChange:h,value:v,items:[].concat(P()(s&&s.length>0?s.map((function(o){var c=o.key,l=o.label,h=o.value,v=o.selected,g=o.placeholder,b=o.type,m=void 0===b?"text":b,O=o.groups,P=o.items;return{label:l||(0,w.RI)(c),type:m,filterValues:E(E({id:"filter-by-".concat(c),key:"filter-by-".concat(c),placeholder:g||"Filter by ".concat(c),value:h,selected:v},"text"!==m?{isFilterable:u,onShowMore:f,showMoreTitle:d,onFilter:p}:{}),{},{groups:O,items:P,onChange:function(e,o){var l="string"==typeof o||Array.isArray(o)?o:Object.keys(j()(o[0],(function(e){return e})));t(E(E(E({},r),i),{},a()({offset:0},c,l))),(0,w.Aq)((function(){return n(E(E(E({},i),{},{offset:0,orderBy:y},s.reduce((function(e,t){return E(E({},e),{},a()({},t.key,t.value))}),{})),{},a()({},c,l)))}))},isDisabled:e})}})):[{label:(0,w.RI)(c||o),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||o),value:r,onChange:function(e,r){t(E(E({},i),{},{offset:0,name:r})),(0,w.Aq)((function(){return n(E(E({},i),{},{offset:0,name:r,orderBy:y}))}))},isDisabled:e}}]),P()(l||[]))}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},o=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&0!==n.length&&{category:(0,w.RI)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,s){var u=l()(c,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,i=t.type;return E(E({},e),{},a()({},n,function(e,t,n){return s?"group"===t||"checkbox"===t?[]:"":n!==u.type?e:"checkbox"===t||"group"===t?e.filter((function(e){var t;return e!==(null===(t=u.chips[0])||void 0===t?void 0:t.name)})):Array.isArray(e)?[]:""}(r,i,n)))}),{});r(E(E({},n),{},{offset:0,name:""},f)),i(E(E({},n),{},{offset:0,orderBy:o,name:""},f))}}},T=function(e){var t=e.isSelectable,n=e.checkedRows,r=e.setCheckedItems,o=e.isLoading,a=e.data,c=e.titleSingular,l=e.filterValue,s=e.setFilterValue,f=e.pagination,d=e.fetchData,p=e.sortBy,h=e.toolbarButtons,v=e.filterPlaceholder,y=e.filterItems,g=e.filters,b=e.isFilterable,m=e.onShowMore,w=e.showMoreTitle,O=e.onFilter,P=e.onChange,k=e.value,j=e.hideFilterChips,x=e.tableId;return u().createElement(D.Z,i()({},t&&{bulkSelect:R(o,n,r,a,x)},{filterConfig:A(o,s,d,l,f,c,v,y,g,b,m,w,O,P,k,p),actionsConfig:{actions:h()}},!o&&{pagination:F(f,d,l,p)},(l.length>0||g&&g.length>0)&&!j&&{activeFiltersConfig:B(l,g,f,s,d,p)}))};T.propTypes={isSelectable:d().bool,checkedRows:d().array,setCheckedItems:d().func,isLoading:d().bool,data:d().array,titleSingular:d().string,filterValue:d().oneOfType([d().array,d().string]),setFilterValue:d().func,filters:d().arrayOf(d().shape({value:d().oneOfType([d().string,d().number,d().array]),key:d().string,placeholder:d().string})),isFilterable:d().bool,onShowMore:d().func,showMoreTitle:d().string,onFilter:d().func,onChange:d().func,value:d().any,pagination:d().shape({limit:d().number,offset:d().number,count:d().number}),sortBy:d().string,filterItems:x.Z.propTypes.items,filterPlaceholder:d().string,isCollapsible:d().bool,fetchData:d().func,toolbarButtons:d().func,hideFilterChips:d().bool,tableId:d().string},T.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:S.he,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const I=T;var Z=n(67643);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(1278);var M=function(e){var t=e.isCompact,n=e.createRows,r=e.borders,o=e.columns,c=e.toolbarButtons,f=e.data,d=e.actionResolver,O=e.areActionsDisabled,P=e.routes,k=e.titlePlural,j=e.titleSingular,D=e.pagination,x=e.filterValue,S=e.isLoading,C=e.setFilterValue,E=e.checkedRows,R=e.isSelectable,A=e.fetchData,B=e.setCheckedItems,T=e.isCollapsible,_=e.emptyProps,M=e.filterPlaceholder,q=e.rowWrapper,L=e.filters,W=e.isFilterable,G=e.onShowMore,z=e.showMoreTitle,H=e.onFilter,Q=e.onChange,K=e.value,U=e.sortBy,N=e.isExpandable,Y=e.onExpand,J=e.hideFilterChips,$=e.hideHeader,X=e.noData,ee=e.noDataDescription,te=e.ouiaId,ne=e.tableId,re=(0,s.useState)({}),ie=l()(re,2),oe=ie[0],ae=ie[1],ce=(0,s.useState)({index:void 0,direction:void 0}),le=l()(ce,2),se=le[0],ue=le[1];(0,s.useEffect)((function(){ue(V(V({},U),void 0!==se.index&&se))}),[U]);var fe=n(f,oe,E),de=function(e,t,n,r){var i=r.uuid;return ae((function(e){return V(V({},e),{},a()({},i,n))}))};return u().createElement(s.Fragment,null,P(),!S&&0===fe.length&&0===x.length&&L.every((function(e){return!e.value}))?u().createElement(Z.Z,i()({title:"Configure ".concat(k),icon:m.ZP,description:["To configure user access to applications","create at least one ".concat(j)],actions:c()[0]},_)):u().createElement(s.Fragment,null,u().createElement(I,{isSelectable:R,checkedRows:E,setCheckedItems:B,isLoading:S||X,data:f,titleSingular:j,filterValue:x,setFilterValue:C,sortBy:void 0!==se.index&&se.index-R>=0&&"".concat("desc"===se.direction?"-":"").concat(o[se.index-R].key)||void 0,pagination:D,fetchData:A,toolbarButtons:c,filterPlaceholder:M,filters:L,isFilterable:W,onShowMore:G,showMoreTitle:z,onFilter:H,onChange:Q,value:K,hideFilterChips:J,tableId:ne}),S?u().createElement(b.Wi,null):u().createElement(p.Table,i()({canSelectAll:!1,"aria-label":"".concat(k," table"),variant:t?p.TableVariant.compact:null,borders:r},T&&{onCollapse:de},R&&fe.length>0&&{onSelect:function(e,t,n,r){var i=r.uuid,o=l()(r.cells,1)[0];return B((0,w.ZQ)([{uuid:i,name:o}],t))}},N&&{onExpand:Y},{rows:fe.length>0?fe:[{fullWidth:!0,cells:[{title:u().createElement(Z.Z,{title:"No matching ".concat(k," found"),description:X&&ee?ee:["This filter criteria matches no ".concat(k,"."),"Try changing your filter settings."],actions:X&&ee?void 0:[u().createElement(g.V,{key:"clear-filters"},u().createElement(v.zx,{variant:"link",ouiaId:"clear-filters-button",onClick:function(){C(V(V({},D),{},{offset:0,name:""})),A(V(V({},D),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:o.length+Boolean(de)}}]}],cells:o},fe.length>0&&{actionResolver:d},{areActionsDisabled:O,rowWrapper:q,sortBy:se,ouiaId:te,onSort:function(e,t,n){ue({index:t,direction:n}),L&&L.length>0?A(V(V(V({},D),{},{offset:0},L.reduce((function(e,t){return V(V({},e),{},a()({},t.key,t.value))}),{})),{},{orderBy:"".concat("desc"===n?"-":"").concat(o[t-R].key)})):A(V(V({},D),{},{offset:0,name:x,orderBy:"".concat("desc"===n?"-":"").concat(o[t-R].key)}))}}),!$&&u().createElement(p.TableHeader,null),u().createElement(p.TableBody,null)),!D.noBottom&&u().createElement(h.Z,null,!S&&u().createElement(y.t,i()({},F(D,A,x),{variant:"bottom",dropDirection:"up"})))))};M.propTypes=V(V({},I.propTypes),{},{sortBy:d().shape({directions:d().string,index:d().number}),rowWrapper:d().any,isCompact:d().bool,borders:d().bool,checkedRows:d().array,createRows:d().func.isRequired,columns:d().array.isRequired,titlePlural:d().string,routes:d().func,actionResolver:d().func,areActionsDisabled:d().func,pagination:d().shape({noBottom:d().bool}),isExpandable:d().bool,onExpand:d().func,hideFilterChips:d().bool,hideHeader:d().bool,noDataDescription:d().arrayOf(d().node),filters:d().array,tableId:d().string.isRequired}),M.defaultProps=V(V({},I.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1,checkedRows:[],hideHeader:!1})},28090:(e,t,n)=>{"use strict";n.d(t,{fA:()=>a,fp:()=>c,vd:()=>l,Kt:()=>s,l5:()=>u,sv:()=>f,DV:()=>d,hs:()=>p,ul:()=>h,sZ:()=>v,lq:()=>y});var r=n(36580),i=n(43115),o=n(11107),a=function(e){return{type:r.MF,payload:i.fA(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed adding role",dismissDelay:8e3,dismissable:!1,description:"The role was not added successfuly."}}}}},c=function(e){return{type:r.rz,payload:i.fp(e).catch((function(e){var t,n=(null==e||null===(t=e.errors)||void 0===t?void 0:t[0])||{};if("400"===n.status&&"role uuid validation"===n.source)return{error:o.VG};throw e}))}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.vd(e).catch((function(e){var t,n=(null==e||null===(t=e.errors)||void 0===t?void 0:t[0])||{};if("400"===n.status&&"detail"===n.source)return{error:o.VG};throw e}))}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.Kt(e)}},u=function(e){return{type:r.W2,payload:i.l5(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."},rejected:{variant:"danger",title:"Failed removing role",dismissDelay:8e3,dismissable:!1,description:"The role was not removed successfuly."}}}}},f=function(e){return{type:r.qj,payload:i.fp(e)}},d=function(e){return{type:r.Y2,payload:i.DV(e)}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.eJ,payload:i.vd(e)}},h=function(e,t,n){return{type:r.Sw,payload:i.ul(e,t,n),meta:{notifications:{rejected:{variant:"danger",title:"Failed updating role",dismissDelay:8e3,dismissable:!1,description:"The role was not updated successfuly."}}}}},v=function(e,t){return{type:r.kg,payload:i.sZ(e,t),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating role",dismissDelay:8e3,dismissable:!1,description:"The role was updated successfully."}}}}},y=function(e,t){return{type:r.Sw,payload:i.lq(e,t)}}},87266:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".rbac .pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item,.my-user-access .pf-l-toolbar.rbac-table__toolbar .pf-l-toolbar__item{min-width:5rem}\n",""]),e.exports=t},1278:(e,t,n)=>{var r=n(93379),i=n(87266);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);var o=r(i,{insert:"head",singleton:!1});if(!i.locals||e.hot.invalidate){var a=i.locals;e.hot.accept(87266,(function(){"string"==typeof(i=(i=n(87266)).__esModule?i.default:i)&&(i=[[e.id,i,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(a,i.locals)?(a=i.locals,o(i)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),e.exports=i.locals||{}}}]);
//# sourceMappingURL=../sourcemaps/2920.7bf7d54e9364daad3069.js.map
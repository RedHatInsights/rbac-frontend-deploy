(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[657],{43115:(e,t,n)=>{"use strict";n.d(t,{fA:()=>u,vd:()=>p,Kt:()=>d,fp:()=>y,DV:()=>g,l5:()=>m,ul:()=>O,lq:()=>P,sZ:()=>Z});var r=n(96156),i=n(92137),o=n(87757),a=n.n(o);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=(0,n(89400).ix)();function u(e){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){var t=e.limit,n=e.offset,r=e.name,i=e.nameMatch,o=e.scope,a=e.orderBy,c=void 0===a?"display_name":a,l=e.addFields,u=e.username,f=e.application,p=e.permission,d=e.options;return s.listRoles(t,n,void 0,r,i,o,c,l,u,f,p,d)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)(a().mark((function e(t){var n,r,i,o,c,u,f,p,d,h,y,v,g,b,m,w,O;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,i=t.filters,o=void 0===i?{}:i,c=t.nameMatch,u=t.scope,f=void 0===u?"account":u,p=t.orderBy,d=void 0===p?"display_name":p,h=t.addFields,y=void 0===h?["groups_in_count"]:h,v=t.username,g=t.options,b=t.permission,m=t.application,w=t.inModal,O=void 0===w||w,e.t0=l,e.t1=l,e.t2={},e.next=6,s.listRoles(n,r,void 0,o.name,c,f,d,y,v,m,b,g).then((function(e){var t=e.data,i=e.meta;return l({data:t,meta:i},O?{}:{filters:o,pagination:l(l({},i),{},{offset:r,limit:n})})}));case 6:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=10,insights.chrome.auth.getUser();case 10:return e.t5=e.sent,e.abrupt("return",(0,e.t0)(e.t4,e.t5));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return b.apply(this,arguments)}function b(){return(b=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(){var e=(0,i.Z)(a().mark((function e(t,n,r){var i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getRoleAccess(t);case 2:return i=e.sent,o=i.data,e.abrupt("return",s.updateRole(t,r?l(l({},n),{},{access:o}):n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),P=function(){var e=(0,i.Z)(a().mark((function e(t,n){var r,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getRoleAccess(t.uuid);case 2:return r=e.sent,i=r.data,o=l(l({},t),{},{access:i.filter((function(e){return!n.includes(e.permission)}))}),e.abrupt("return",s.updateRole(t.uuid,l({},o)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=(0,i.Z)(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.patchRole(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},11107:(e,t,n)=>{"use strict";n.d(t,{VG:()=>u,jl:()=>f,Aq:()=>p,um:()=>d,ZQ:()=>h,RI:()=>y,GT:()=>v,zk:()=>g});var r=n(85061),i=n(96156),o=n(28481),a=n(48623),c=n(61338);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u="bad uuid",f=function(e){return Object.entries(e).reduce((function(e,t){var n=(0,o.Z)(t,2),r=n[0],a=n[1];return s(s({},e),a&&(0,i.Z)({},r,a))}),{})},p=(0,a.Z)((function(e){return e()})),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.filter((function(e){return!e.platform_default}));return 0!==n.length&&n.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||t.length>0&&null},h=function(e,t){return function(n){return t?[].concat((0,r.Z)(n),(0,r.Z)(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},y=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},v=function(e){var t=new URLSearchParams;return Object.keys(e).forEach((function(n){var r=e[n];Array.isArray(r)?r.forEach((function(e){return e&&t.append(n,e)})):r&&t.set(n,r)})),t.toString()},g=function(e,t,n){return{pathname:e,search:v(s({page:(0,c.wy)(t.limit,t.offset),per_page:t.limit},n))}}},89400:(e,t,n)=>{"use strict";n.d(t,{TR:()=>g,i$:()=>m,tP:()=>y,Y3:()=>b,bn:()=>h,ix:()=>v});var r=n(77460),i=n(72548),o=n(17951),a="/api/rbac/v1",c="/api/cost-management/v1",l=new i.PrincipalApi(void 0,a,r.ZP),s=new i.GroupApi(void 0,a,r.ZP),u=new i.RoleApi(void 0,a,r.ZP),f=(new i.PolicyApi(void 0,a,r.ZP),new i.AccessApi(void 0,a,r.ZP)),p=new i.PermissionApi(void 0,a,r.ZP),d=new o.BaseAPI(void 0,c,r.ZP);function h(){return l}function y(){return s}function v(){return u}function g(){return f}function b(){return p}function m(){return{getResourceTypes:function(){return d.axios.get("".concat(c,"/resource-types/"))},getResource:function(e){return d.axios.get("".concat(e,"?limit=1000"))}}}},67643:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(22122),i=n(81253),o=n(92950),a=n.n(o),c=n(45697),l=n.n(c),s=n(30586),u=n(80810),f=function(e){var t=e.title,n=e.icon,o=e.description,c=e.actions,l=(0,i.Z)(e,["title","icon","description","actions"]);return a().createElement(s.EmptyState,(0,r.Z)({variant:s.EmptyStateVariant.full},l),a().createElement(s.EmptyStateIcon,{icon:n||u.ZP}),a().createElement(s.Title,{headingLevel:"h4",size:"lg"},t),a().createElement(s.EmptyStateBody,null,o.map((function(e,t){return a().createElement(a().Fragment,{key:t},e," ",a().createElement("br",null))}))),c)};f.propTypes={icon:l().func,title:l().node,description:l().node,actions:l().oneOfType([l().node,l().arrayOf(l().node)]),className:l().string};const p=f},41800:(e,t,n)=>{"use strict";n.d(t,{M:()=>A});var r=n(22122),i=n(96156),o=n(28481),a=n(92950),c=n.n(a),l=n(45697),s=n.n(l),u=n(24985),f=n(32875),p=n(30586),d=n(19571),h=n(7081),y=n(11107),v=n(85061),g=n(35937),b=n.n(g),m=n(81790),w=n(18213),O=n(61338);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Z(Z({},e),{},{itemCount:e.count,perPage:e.limit,page:(0,O.wy)(e.limit,e.offset),onSetPage:function(i,o){t(Z(Z({},e),{},{offset:(0,O.vE)(o,e.limit),name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(i,o){t(Z(Z({},e),{},{offset:0,limit:o,name:n,orderBy:r}))}})},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0;return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},Z({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n((0,y.ZQ)(r,!0))}}:{})],checked:(0,y.um)(r,t),onSelect:function(t){!e&&n((0,y.ZQ)(r,t))},id:i}},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,p=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0,h=arguments.length>13?arguments[13]:void 0,g=arguments.length>14?arguments[14]:void 0,m=arguments.length>15?arguments[15]:void 0;return{onChange:h,value:g,items:[].concat((0,v.Z)(s&&s.length>0?s.map((function(a){var c=a.key,l=a.label,h=a.value,v=a.selected,g=a.placeholder,w=a.type,O=void 0===w?"text":w,P=a.groups,j=a.items;return{label:l||(0,y.RI)(c),type:O,filterValues:Z(Z({id:"filter-by-".concat(c),key:"filter-by-".concat(c),placeholder:g||"Filter by ".concat(c),value:h,selected:v},"text"!==O?{isFilterable:u,onShowMore:f,showMoreTitle:p,onFilter:d}:{}),{},{groups:P,items:j,onChange:function(e,a){var l="string"==typeof a||Array.isArray(a)?a:Object.keys(b()(a[0],(function(e){return e})));t(Z(Z(Z({},r),o),{},(0,i.Z)({offset:0},c,l))),(0,y.Aq)((function(){return n(Z(Z(Z({},o),{},{offset:0,orderBy:m},s.reduce((function(e,t){return Z(Z({},e),{},(0,i.Z)({},t.key,t.value))}),{})),{},(0,i.Z)({},c,l)))}))},isDisabled:e})}})):[{label:(0,y.RI)(c||a),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||a),value:r,onChange:function(e,r){t(Z(Z({},o),{},{offset:0,name:r})),(0,y.Aq)((function(){return n(Z(Z({},o),{},{offset:0,name:r,orderBy:m}))}))},isDisabled:e}}]),(0,v.Z)(l||[]))}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},c=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&0!==n.length&&{category:(0,y.RI)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,l,s){var u=(0,o.Z)(l,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,o=t.type;return Z(Z({},e),{},(0,i.Z)({},n,function(e,t,n){return s?"group"===t||"checkbox"===t?[]:"":n!==u.type?e:"checkbox"===t||"group"===t?e.filter((function(e){var t;return e!==(null===(t=u.chips[0])||void 0===t?void 0:t.name)})):Array.isArray(e)?[]:""}(r,o,n)))}),{});r(Z(Z({},n),{},{offset:0,name:""},f)),a(Z(Z({},n),{},{offset:0,orderBy:c,name:""},f))}}},D=function(e){var t=e.isSelectable,n=e.checkedRows,i=e.setCheckedItems,o=e.isLoading,a=e.data,l=e.titleSingular,s=e.filterValue,u=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,h=e.toolbarButtons,y=e.filterPlaceholder,v=e.filterItems,g=e.filters,b=e.isFilterable,w=e.onShowMore,O=e.showMoreTitle,P=e.onFilter,Z=e.onChange,D=e.value,x=e.hideFilterChips,C=e.tableId;return c().createElement(m.Z,(0,r.Z)({},t&&{bulkSelect:k(o,n,i,a,C)},{filterConfig:S(o,u,p,s,f,l,y,v,g,b,w,O,P,Z,D,d),actionsConfig:{actions:h()}},!o&&{pagination:j(f,p,s,d)},(s.length>0||g&&g.length>0)&&!x&&{activeFiltersConfig:E(s,g,f,u,p,d)}))};D.propTypes={isSelectable:s().bool,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),sortBy:s().string,filterItems:w.Z.propTypes.items,filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string},D.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:O.he,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const x=D;var C=n(67643);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.isCompact,n=e.createRows,l=e.borders,s=e.columns,v=e.toolbarButtons,g=e.data,b=e.actionResolver,m=e.areActionsDisabled,w=e.routes,O=e.titlePlural,P=e.titleSingular,Z=e.pagination,k=e.filterValue,S=e.isLoading,E=e.setFilterValue,D=e.checkedRows,F=e.isSelectable,A=e.fetchData,B=e.setCheckedItems,T=e.isCollapsible,I=e.emptyProps,V=e.filterPlaceholder,M=e.rowWrapper,q=e.filters,_=e.isFilterable,L=e.onShowMore,W=e.showMoreTitle,G=e.onFilter,H=e.onChange,Q=e.value,z=e.sortBy,K=e.isExpandable,U=e.onExpand,N=e.hideFilterChips,Y=e.hideHeader,J=e.noData,$=e.noDataDescription,X=e.ouiaId,ee=e.tableId,te=(0,a.useState)({}),ne=(0,o.Z)(te,2),re=ne[0],ie=ne[1],oe=(0,a.useState)({index:void 0,direction:void 0}),ae=(0,o.Z)(oe,2),ce=ae[0],le=ae[1];(0,a.useEffect)((function(){le(R(R({},z),void 0!==ce.index&&ce))}),[z]);var se=n(g,re,D),ue=function(e,t,n,r){var o=r.uuid;return ie((function(e){return R(R({},e),{},(0,i.Z)({},o,n))}))};return c().createElement(a.Fragment,null,w(),!S&&0===se.length&&0===k.length&&q.every((function(e){return!e.value}))?c().createElement(C.Z,(0,r.Z)({title:"Configure ".concat(O),icon:h.ZP,description:["To configure user access to applications","create at least one ".concat(P)],actions:v()[0]},I)):c().createElement(a.Fragment,null,c().createElement(x,{isSelectable:F,checkedRows:D,setCheckedItems:B,isLoading:S||J,data:g,titleSingular:P,filterValue:k,setFilterValue:E,sortBy:void 0!==ce.index&&ce.index-F>=0&&"".concat("desc"===ce.direction?"-":"").concat(s[ce.index-F].key)||void 0,pagination:Z,fetchData:A,toolbarButtons:v,filterPlaceholder:V,filters:q,isFilterable:_,onShowMore:L,showMoreTitle:W,onFilter:G,onChange:H,value:Q,hideFilterChips:N,tableId:ee}),S?c().createElement(d.Wi,null):c().createElement(u.Table,(0,r.Z)({canSelectAll:!1,"aria-label":"".concat(O," table"),variant:t?u.TableVariant.compact:null,borders:l},T&&{onCollapse:ue},F&&se.length>0&&{onSelect:function(e,t,n,r){var i=r.uuid,a=(0,o.Z)(r.cells,1)[0];return B((0,y.ZQ)([{uuid:i,name:a}],t))}},K&&{onExpand:U},{rows:se.length>0?se:[{fullWidth:!0,cells:[{title:c().createElement(C.Z,{title:"No matching ".concat(O," found"),description:J&&$?$:["This filter criteria matches no ".concat(O,"."),"Try changing your filter settings."],actions:J&&$?void 0:[c().createElement(p.EmptyStatePrimary,{key:"clear-filters"},c().createElement(p.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:function(){E(R(R({},Z),{},{offset:0,name:""})),A(R(R({},Z),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:s.length+Boolean(ue)}}]}],cells:s},se.length>0&&{actionResolver:b},{areActionsDisabled:m,rowWrapper:M,sortBy:ce,ouiaId:X,onSort:function(e,t,n){le({index:t,direction:n}),q&&q.length>0?A(R(R(R({},Z),{},{offset:0},q.reduce((function(e,t){return R(R({},e),{},(0,i.Z)({},t.key,t.value))}),{})),{},{orderBy:"".concat("desc"===n?"-":"").concat(s[t-F].key)})):A(R(R({},Z),{},{offset:0,name:k,orderBy:"".concat("desc"===n?"-":"").concat(s[t-F].key)}))}}),!Y&&c().createElement(u.TableHeader,null),c().createElement(u.TableBody,null)),!Z.noBottom&&c().createElement(f.Z,null,!S&&c().createElement(p.Pagination,(0,r.Z)({},j(Z,A,k),{variant:"bottom",dropDirection:"up"})))))};A.propTypes=R(R({},x.propTypes),{},{sortBy:s().shape({directions:s().string,index:s().number}),rowWrapper:s().any,isCompact:s().bool,borders:s().bool,checkedRows:s().array,createRows:s().func.isRequired,columns:s().array.isRequired,titlePlural:s().string,routes:s().func,actionResolver:s().func,areActionsDisabled:s().func,pagination:s().shape({noBottom:s().bool}),isExpandable:s().bool,onExpand:s().func,hideFilterChips:s().bool,hideHeader:s().bool,noDataDescription:s().arrayOf(s().node),filters:s().array,tableId:s().string.isRequired}),A.defaultProps=R(R({},x.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1,checkedRows:[],hideHeader:!1})},28090:(e,t,n)=>{"use strict";n.d(t,{fA:()=>a,fp:()=>c,vd:()=>l,Kt:()=>s,l5:()=>u,sv:()=>f,DV:()=>p,hs:()=>d,ul:()=>h,sZ:()=>y,lq:()=>v});var r=n(36580),i=n(43115),o=n(11107),a=function(e){return{type:r.MF,payload:i.fA(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed adding role",dismissDelay:8e3,dismissable:!1,description:"The role was not added successfuly."}}}}},c=function(e){return{type:r.rz,payload:i.fp(e).catch((function(e){var t,n=(null==e||null===(t=e.errors)||void 0===t?void 0:t[0])||{};if("400"===n.status&&"role uuid validation"===n.source)return{error:o.VG};throw e}))}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.vd(e).catch((function(e){var t,n=(null==e||null===(t=e.errors)||void 0===t?void 0:t[0])||{};if("400"===n.status&&"detail"===n.source)return{error:o.VG};throw e}))}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.Kt(e)}},u=function(e){return{type:r.W2,payload:i.l5(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."},rejected:{variant:"danger",title:"Failed removing role",dismissDelay:8e3,dismissable:!1,description:"The role was not removed successfuly."}}}}},f=function(e){return{type:r.qj,payload:i.fp(e)}},p=function(e){return{type:r.Y2,payload:i.DV(e)}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.eJ,payload:i.vd(e)}},h=function(e,t,n){return{type:r.Sw,payload:i.ul(e,t,n),meta:{notifications:{rejected:{variant:"danger",title:"Failed updating role",dismissDelay:8e3,dismissable:!1,description:"The role was not updated successfuly."}}}}},y=function(e,t){return{type:r.kg,payload:i.sZ(e,t),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating role",dismissDelay:8e3,dismissable:!1,description:"The role was updated successfully."}}}}},v=function(e,t){return{type:r.Sw,payload:i.lq(e,t)}}}}]);
//# sourceMappingURL=../sourcemaps/657.fee6950bd24d6e9ec7a4.js.map
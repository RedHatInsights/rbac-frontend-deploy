(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[657],{43115:(e,t,n)=>{"use strict";n.d(t,{fA:()=>f,vd:()=>p,Kt:()=>h,fp:()=>y,DV:()=>m,l5:()=>w,ul:()=>P,lq:()=>Z,sZ:()=>k});var r=n(96156),i=n(92137),o=n(87757),a=n.n(o),c=n(61338);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=(0,n(89400).ix)();function f(e){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){var t=e.limit,n=e.offset,r=e.name,i=e.displayName,o=e.nameMatch,a=e.scope,c=e.orderBy,l=void 0===c?"display_name":c,s=e.addFields,f=e.username,d=e.application,p=e.permission,h=e.options;return u.listRoles(t,n,r,void 0,i,o,a,l,s,f,d,p,h)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(a().mark((function e(t){var n,r,i,o,l,f,d,p,h,v,y,g,m,b,w,O,P,Z,k,j,S,E,D;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.limit,i=t.offset,o=t.filters,l=void 0===o?{}:o,f=t.nameMatch,d=t.scope,p=void 0===d?"account":d,h=t.orderBy,v=void 0===h?"display_name":h,y=t.addFields,g=void 0===y?["groups_in_count"]:y,m=t.username,b=t.options,w=t.permission,O=t.application,P=t.inModal,Z=void 0===P||P,e.next=3,u.listRoles(r,i,l.name,void 0,l.display_name,f,p,v,g,m,O,w,b);case 3:if(k=e.sent,j=(0,c._V)(i,null==k||null===(n=k.meta)||void 0===n?void 0:n.count),i=j?i:(0,c.Vh)(k.meta.count,r),!j){e.next=10;break}e.t0=k,e.next=13;break;case 10:return e.next=12,u.listRoles(r,i,l.name,void 0,void 0,f,p,v,g,m,O,w,b);case 12:e.t0=e.sent;case 13:return S=e.t0,E=S.data,D=S.meta,e.t1=s,e.t2=s({data:E,meta:D},Z?{}:{filters:l,pagination:s(s({},D),{},{offset:i,limit:r,redirected:!j})}),e.next=20,insights.chrome.auth.getUser();case 20:return e.t3=e.sent,e.abrupt("return",(0,e.t1)(e.t2,e.t3));case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return O.apply(this,arguments)}function O(){return(O=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(){var e=(0,i.Z)(a().mark((function e(t,n,r){var i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getRoleAccess(t);case 2:return i=e.sent,o=i.data,e.abrupt("return",u.updateRole(t,r?s(s({},n),{},{access:o}):n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),Z=function(){var e=(0,i.Z)(a().mark((function e(t,n){var r,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getRoleAccess(t.uuid);case 2:return r=e.sent,i=r.data,o=s(s({},t),{},{access:i.filter((function(e){return!n.includes(e.permission)}))}),e.abrupt("return",u.updateRole(t.uuid,s({},o)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=(0,i.Z)(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.patchRole(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},11107:(e,t,n)=>{"use strict";n.d(t,{VG:()=>u,jl:()=>f,Aq:()=>d,um:()=>p,ZQ:()=>h,RI:()=>v,GT:()=>y,zk:()=>g});var r=n(85061),i=n(96156),o=n(28481),a=n(48623),c=n(61338);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u="bad uuid",f=function(e){return Object.entries(e).reduce((function(e,t){var n=(0,o.Z)(t,2),r=n[0],a=n[1];return s(s({},e),a&&(0,i.Z)({},r,a))}),{})},d=(0,a.Z)((function(e){return e()})),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.filter((function(e){return!e.platform_default}));return 0!==n.length&&n.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||t.length>0&&null},h=function(e,t){return function(n){return t?[].concat((0,r.Z)(n),(0,r.Z)(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},v=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},y=function(e){var t=new URLSearchParams;return Object.keys(e).forEach((function(n){var r=e[n];Array.isArray(r)?r.forEach((function(e){return e&&t.append(n,e)})):r&&t.set(n,r)})),t.toString()},g=function(e,t,n){return{pathname:e,search:y(s({per_page:t.limit,page:(0,c.wy)(t.limit,t.offset)},n))}}},89400:(e,t,n)=>{"use strict";n.d(t,{TR:()=>g,i$:()=>b,tP:()=>v,Y3:()=>m,bn:()=>h,ix:()=>y});var r=n(77460),i=n(72548),o=n(17951),a="/api/rbac/v1",c="/api/cost-management/v1",l=new i.PrincipalApi(void 0,a,r.ZP),s=new i.GroupApi(void 0,a,r.ZP),u=new i.RoleApi(void 0,a,r.ZP),f=(new i.PolicyApi(void 0,a,r.ZP),new i.AccessApi(void 0,a,r.ZP)),d=new i.PermissionApi(void 0,a,r.ZP),p=new o.BaseAPI(void 0,c,r.ZP);function h(){return l}function v(){return s}function y(){return u}function g(){return f}function m(){return d}function b(){return{getResourceTypes:function(){return p.axios.get("".concat(c,"/resource-types/"))},getResource:function(e){return p.axios.get("".concat(e,"?limit=1000"))}}}},67643:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(22122),i=n(81253),o=n(92950),a=n.n(o),c=n(45697),l=n.n(c),s=n(97066),u=n(80810),f=["title","icon","description","actions"],d=function(e){var t=e.title,n=e.icon,o=e.description,c=e.actions,l=(0,i.Z)(e,f);return a().createElement(s.EmptyState,(0,r.Z)({variant:s.EmptyStateVariant.full},l),a().createElement(s.EmptyStateIcon,{icon:n||u.ZP}),a().createElement(s.Title,{headingLevel:"h4",size:"lg"},t),a().createElement(s.EmptyStateBody,{className:"pf-u-mb-md"},o.map((function(e,t){return a().createElement(a().Fragment,{key:t},e," ",a().createElement("br",null))}))),c)};d.propTypes={icon:l().func,title:l().node,description:l().node,actions:l().oneOfType([l().node,l().arrayOf(l().node)]),className:l().string};const p=d},41800:(e,t,n)=>{"use strict";n.d(t,{M:()=>A});var r=n(22122),i=n(96156),o=n(28481),a=n(92950),c=n.n(a),l=n(45697),s=n.n(l),u=n(6877),f=n(32875),d=n(97066),p=n(19571),h=n(7081),v=n(11107),y=n(85061),g=n(35937),m=n.n(g),b=n(81790),w=n(18213),O=n(61338);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Z(Z({},e),{},{itemCount:e.count,perPage:e.limit,page:(0,O.wy)(e.limit,e.offset),onSetPage:function(i,o){t(Z(Z({},e),{},{offset:(0,O.vE)(o,e.limit),name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(i,o){t(Z(Z({},e),{},{offset:0,limit:o,name:n,orderBy:r}))}})},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0;return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},Z({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n((0,v.ZQ)(r,!0))}}:{})],checked:(0,v.um)(r,t),onSelect:function(t){!e&&n((0,v.ZQ)(r,t))},id:i}},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,d=arguments.length>11?arguments[11]:void 0,p=arguments.length>12?arguments[12]:void 0,h=arguments.length>13?arguments[13]:void 0,g=arguments.length>14?arguments[14]:void 0,b=arguments.length>15?arguments[15]:void 0,w=arguments.length>16?arguments[16]:void 0;return{containerRef:w,onChange:h,value:g,items:[].concat((0,y.Z)(s&&s.length>0?s.map((function(a){var c=a.key,l=a.label,h=a.value,y=a.selected,g=a.placeholder,w=a.type,O=void 0===w?"text":w,P=a.groups,k=a.items;return{label:l||(0,v.RI)(c),type:O,filterValues:Z(Z({id:"filter-by-".concat(c),key:"filter-by-".concat(c),placeholder:g||"Filter by ".concat(c),value:h,selected:y},"text"!==O?{isFilterable:u,onShowMore:f,showMoreTitle:d,onFilter:p}:{}),{},{groups:P,items:k,onChange:function(e,a){var l="string"==typeof a||Array.isArray(a)?a:Object.keys(m()(a[""],(function(e){return e})));t(Z(Z(Z({},r),o),{},(0,i.Z)({offset:0},c,l))),(0,v.Aq)((function(){return n(Z(Z(Z({},o),{},{offset:0,orderBy:b},s.reduce((function(e,t){return Z(Z({},e),{},(0,i.Z)({},t.key,t.value))}),{})),{},(0,i.Z)({},c,l)))}))},isDisabled:e})}})):[{label:(0,v.RI)(c||a),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(c||a),value:r,onChange:function(e,r){t(Z(Z({},o),{},{offset:0,name:r})),(0,v.Aq)((function(){return n(Z(Z({},o),{},{offset:0,name:r,orderBy:b}))}))},isDisabled:e}}]),(0,y.Z)(l||[]))}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},c=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&0!==n.length&&{category:(0,v.RI)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,l,s){var u=(0,o.Z)(l,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,o=t.type;return Z(Z({},e),{},(0,i.Z)({},n,function(e,t,n){return s?"group"===t||"checkbox"===t?[]:"":n!==u.type?e:"checkbox"===t||"group"===t?e.filter((function(e){var t;return e!==(null===(t=u.chips[0])||void 0===t?void 0:t.name)})):Array.isArray(e)?[]:""}(r,o,n)))}),{});r(Z(Z({},n),{},{offset:0,name:""},f)),a(Z(Z({},n),{},{offset:0,orderBy:c,name:""},f))}}},D=function(e){var t=e.isSelectable,n=e.checkedRows,i=e.setCheckedItems,o=e.isLoading,a=e.data,l=e.titleSingular,s=e.filterValue,u=e.setFilterValue,f=e.pagination,d=e.fetchData,p=e.sortBy,h=e.toolbarButtons,v=e.filterPlaceholder,y=e.filterItems,g=e.filters,m=e.isFilterable,w=e.onShowMore,O=e.showMoreTitle,P=e.onFilter,Z=e.onChange,D=e.value,x=e.hideFilterChips,R=e.tableId,C=e.containerRef;return c().createElement(b.Z,(0,r.Z)({},t&&{bulkSelect:j(o,n,i,a,R)},{filterConfig:S(o,u,d,s,f,l,v,y,g,m,w,O,P,Z,D,p,C),useMobileLayout:!0,actionsConfig:{actions:h()}},!o&&{pagination:k(f,d,s,p)},(s.length>0||g&&g.length>0)&&!x&&{activeFiltersConfig:E(s,g,f,u,d,p)}))};D.propTypes={isSelectable:s().bool,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),sortBy:s().string,filterItems:w.Z.propTypes.items,filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string,containerRef:s().element},D.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:O.he,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const x=D;var R=n(67643);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.isCompact,n=e.createRows,l=e.borders,s=e.columns,y=e.toolbarButtons,g=e.data,m=e.actionResolver,b=e.areActionsDisabled,w=e.routes,O=e.titlePlural,P=e.titleSingular,Z=e.pagination,j=e.filterValue,S=e.isLoading,E=e.setFilterValue,D=e.checkedRows,C=e.isSelectable,A=e.fetchData,B=e.setCheckedItems,T=e.isCollapsible,I=e.emptyProps,V=e.filterPlaceholder,M=e.rowWrapper,_=e.filters,q=e.isFilterable,L=e.onShowMore,W=e.showMoreTitle,G=e.onFilter,N=e.onChange,H=e.value,Q=e.sortBy,z=e.isExpandable,K=e.onExpand,U=e.hideFilterChips,Y=e.hideHeader,J=e.noData,$=e.noDataDescription,X=e.ouiaId,ee=e.tableId,te=e.containerRef,ne=(0,a.useState)({}),re=(0,o.Z)(ne,2),ie=re[0],oe=re[1],ae=(0,a.useState)({index:void 0,direction:void 0}),ce=(0,o.Z)(ae,2),le=ce[0],se=ce[1];(0,a.useEffect)((function(){se(F(F({},Q),void 0!==le.index&&le))}),[Q]);var ue,fe,de=n(g,ie,D),pe=function(e,t,n,r){var o=r.uuid;return oe((function(e){return F(F({},e),{},(0,i.Z)({},o,n))}))};return c().createElement(a.Fragment,null,w(),!S&&0===de.length&&0===j.length&&_.every((function(e){return!e.value}))?c().createElement(R.Z,(0,r.Z)({title:"Configure ".concat(O),icon:h.ZP,description:["To configure user access to applications","create at least one ".concat(P)],actions:y()[0]},I)):(ue=C&&(null==g?void 0:g.length)>0,fe=Math.min(((null==le?void 0:le.index)||ue)-ue,(null==s?void 0:s.length)-1),c().createElement(a.Fragment,null,c().createElement(x,{isSelectable:C,checkedRows:D,setCheckedItems:B,isLoading:S||J,data:g,titleSingular:P,filterValue:j,setFilterValue:E,sortBy:void 0!==le.index&&fe>=0&&fe<s.length&&"".concat("desc"===le.direction?"-":"").concat(s[fe].key)||void 0,pagination:Z,fetchData:A,toolbarButtons:y,filterPlaceholder:V,filters:_,isFilterable:q,onShowMore:L,showMoreTitle:W,onFilter:G,onChange:N,value:H,hideFilterChips:U,tableId:ee,containerRef:te}),S?c().createElement(p.Wi,null):c().createElement(u.Table,(0,r.Z)({canSelectAll:!1,"aria-label":"".concat(O," table"),variant:t?u.TableVariant.compact:null,borders:l},T&&{onCollapse:pe},C&&de.length>0&&{onSelect:function(e,t,n,r){var i=r.uuid,a=(0,o.Z)(r.cells,1)[0];return B((0,v.ZQ)([{uuid:i,name:a}],t))}},z&&{onExpand:K},{rows:de.length>0?de:[{fullWidth:!0,cells:[{title:c().createElement(R.Z,{title:"No matching ".concat(O," found"),description:J&&$?$:["This filter criteria matches no ".concat(O,"."),"Try changing your filter settings."],actions:J&&$?void 0:[c().createElement(d.EmptyStatePrimary,{key:"clear-filters"},c().createElement(d.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:function(){E(F(F({},Z),{},{offset:0,name:""})),A(F(F({},Z),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:s.length+Boolean(pe)}}]}],cells:s},de.length>0&&{actionResolver:m},{className:0==de.length?"ins-c-table-empty-state":"",areActionsDisabled:b,rowWrapper:M,sortBy:le,ouiaId:X,onSort:function(e,t,n){var r=Math.min((t||ue)-ue,(null==s?void 0:s.length)-1);se({index:t,direction:n}),_&&_.length>0?A(F(F(F({},Z),{},{offset:0},_.reduce((function(e,t){return F(F({},e),{},(0,i.Z)({},t.key,t.value))}),{})),{},{orderBy:"".concat("desc"===n?"-":"").concat(s[r].key)})):A(F(F({},Z),{},{offset:0,name:j,orderBy:"".concat("desc"===n?"-":"").concat(s[r].key)}))}}),!Y&&c().createElement(u.TableHeader,null),c().createElement(u.TableBody,null)),!Z.noBottom&&c().createElement(f.Z,null,!S&&c().createElement(d.Pagination,(0,r.Z)({},k(Z,A,j),{variant:"bottom",dropDirection:"up"}))))))};A.propTypes=F(F({},x.propTypes),{},{sortBy:s().shape({directions:s().string,index:s().number}),rowWrapper:s().any,isCompact:s().bool,borders:s().bool,checkedRows:s().array,createRows:s().func.isRequired,columns:s().array.isRequired,titlePlural:s().string,routes:s().func,actionResolver:s().func,areActionsDisabled:s().func,pagination:s().shape({noBottom:s().bool}),isExpandable:s().bool,onExpand:s().func,hideFilterChips:s().bool,hideHeader:s().bool,noDataDescription:s().arrayOf(s().node),filters:s().array,tableId:s().string.isRequired}),A.defaultProps=F(F({},x.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1,checkedRows:[],hideHeader:!1})},28090:(e,t,n)=>{"use strict";n.d(t,{fA:()=>a,fp:()=>c,vd:()=>l,Kt:()=>s,l5:()=>u,sv:()=>f,DV:()=>d,hs:()=>p,ul:()=>h,sZ:()=>v,lq:()=>y});var r=n(36580),i=n(43115),o=n(11107),a=function(e){return{type:r.MF,payload:i.fA(e),meta:{notifications:{rejected:{variant:"danger",title:"Failed adding role",dismissDelay:8e3,dismissable:!1,description:"The role was not added successfuly."}}}}},c=function(e){return{type:r.rz,payload:i.fp(e).catch((function(e){var t,n=(null==e||null===(t=e.errors)||void 0===t?void 0:t[0])||{};if("400"===n.status&&"role uuid validation"===n.source)return{error:o.VG};throw e}))}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.vd(e).catch((function(e){var t,n=(null==e||null===(t=e.errors)||void 0===t?void 0:t[0])||{};if("400"===n.status&&"detail"===n.source)return{error:o.VG};throw e}))}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.Kt(e)}},u=function(e){return{type:r.W2,payload:i.l5(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."},rejected:{variant:"danger",title:"Failed removing role",dismissDelay:8e3,dismissable:!1,description:"The role was not removed successfuly."}}}}},f=function(e){return{type:r.qj,payload:i.fp(e)}},d=function(e){return{type:r.Y2,payload:i.DV(e)}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.eJ,payload:i.vd(e)}},h=function(e,t,n){return{type:r.Sw,payload:i.ul(e,t,n),meta:{notifications:{rejected:{variant:"danger",title:"Failed updating role",dismissDelay:8e3,dismissable:!1,description:"The role was not updated successfuly."}}}}},v=function(e,t){return{type:r.kg,payload:i.sZ(e,t),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating role",dismissDelay:8e3,dismissable:!1,description:"The role was updated successfully."}}}}},y=function(e,t){return{type:r.Sw,payload:i.lq(e,t)}}}}]);
//# sourceMappingURL=../sourcemaps/657.b412d615a23c5a50f2364e26e5a4dc8f.js.map
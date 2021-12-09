"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[657],{43115:(e,t,n)=>{n.d(t,{fA:()=>f,vd:()=>d,Kt:()=>h,fp:()=>y,DV:()=>m,l5:()=>w,ul:()=>P,lq:()=>k,sZ:()=>j});var r=n(4942),i=n(15861),o=n(87757),a=n.n(o),l=n(61338);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=(0,n(89400).ix)();function f(e){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.createRoles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){var t=e.limit,n=e.offset,r=e.name,i=e.displayName,o=e.nameMatch,a=e.scope,l=e.orderBy,c=void 0===l?"display_name":l,s=e.addFields,f=e.username,p=e.application,d=e.permission,h=e.options;return u.listRoles(t,n,r,void 0,i,o,a,c,s,f,p,d,h)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(a().mark((function e(t){var n,r,i,o,c,f,p,d,h,v,y,g,m,b,w,O,P,k,j,Z,S,D,E;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.limit,i=t.offset,o=t.filters,c=void 0===o?{}:o,f=t.nameMatch,p=t.scope,d=void 0===p?"account":p,h=t.orderBy,v=void 0===h?"display_name":h,y=t.addFields,g=void 0===y?["groups_in_count"]:y,m=t.username,b=t.options,w=t.permission,O=t.application,P=t.inModal,k=void 0===P||P,e.next=3,u.listRoles(r,i,c.name,void 0,c.display_name,f,d,v,g,m,O,w,b);case 3:if(j=e.sent,Z=(0,l._V)(i,null==j||null===(n=j.meta)||void 0===n?void 0:n.count),i=Z?i:(0,l.Vh)(j.meta.count,r),!Z){e.next=10;break}e.t0=j,e.next=13;break;case 10:return e.next=12,u.listRoles(r,i,c.name,void 0,void 0,f,d,v,g,m,O,w,b);case 12:e.t0=e.sent;case 13:return S=e.t0,D=S.data,E=S.meta,e.t1=s,e.t2=s({data:D,meta:E},k?{}:{filters:c,pagination:s(s({},E),{},{offset:i,limit:r,redirected:!Z})}),e.next=20,insights.chrome.auth.getUser();case 20:return e.t3=e.sent,e.abrupt("return",(0,e.t1)(e.t2,e.t3));case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getRole(t,"principal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return O.apply(this,arguments)}function O(){return(O=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.deleteRole(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(){var e=(0,i.Z)(a().mark((function e(t,n,r){var i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getRoleAccess(t);case 2:return i=e.sent,o=i.data,e.abrupt("return",u.updateRole(t,r?s(s({},n),{},{access:o}):n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),k=function(){var e=(0,i.Z)(a().mark((function e(t,n){var r,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getRoleAccess(t.uuid);case 2:return r=e.sent,i=r.data,o=s(s({},t),{},{access:i.filter((function(e){return!n.includes(e.permission)}))}),e.abrupt("return",u.updateRole(t.uuid,s({},o)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=(0,i.Z)(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.patchRole(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},11107:(e,t,n)=>{n.d(t,{VG:()=>u,jl:()=>f,Aq:()=>p,um:()=>d,ZQ:()=>h,RI:()=>v,GT:()=>y,zk:()=>g,mh:()=>m});var r=n(93433),i=n(4942),o=n(29439),a=n(48623),l=n(61338);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u="bad uuid",f=function(e){return Object.entries(e).reduce((function(e,t){var n=(0,o.Z)(t,2),r=n[0],a=n[1];return s(s({},e),a&&(0,i.Z)({},r,a))}),{})},p=(0,a.Z)((function(e){return e()})),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.filter((function(e){return!e.platform_default}));return 0!==n.length&&n.every((function(e){var n=e.uuid;return t.find((function(e){return e.uuid===n}))}))||t.length>0&&null},h=function(e,t){return function(n){return t?[].concat((0,r.Z)(n),(0,r.Z)(e)).filter((function(e,t,n){return n.findIndex((function(t){var n=t.uuid;return e.uuid===n}))===t})):n.filter((function(t){return!e.find((function(e){return e.uuid===t.uuid}))}))}},v=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},y=function(e){var t=new URLSearchParams;return Object.keys(e).forEach((function(n){var r=e[n];Array.isArray(r)?r.forEach((function(e){return e&&t.append(n,e)})):r&&t.set(n,r)})),t.toString()},g=function(e,t,n){return{pathname:e,search:y(s({per_page:t.limit,page:(0,l.wy)(t.limit,t.offset)},n))}},m=function(e){var t=new Date(Date.now());return Date.parse(e)<t.setMonth(t.getMonth()-1)?"onlyDate":"relative"}},89400:(e,t,n)=>{n.d(t,{TR:()=>P,i$:()=>j,tP:()=>w,Y3:()=>k,bn:()=>b,ix:()=>O});var r=n(9669),i=n.n(r),o=n(77460),a=n(72548),l=n(17951),c="/api/rbac/v1",s="/api/cost-management/v1",u=n(72654),f=n(36580),p=i().create();p.interceptors.request.use(o.w5),p.interceptors.response.use(o.xH),p.interceptors.response.use(null,o.Di),p.interceptors.response.use(null,(function(e){var t=u.Z.getStore();throw e.response&&403===e.response.status&&t.dispatch({type:f.j5,payload:403}),e})),p.interceptors.response.use(null,o.ub),p.interceptors.response.use(null,o.ud);var d=new a.PrincipalApi(void 0,c,p),h=new a.GroupApi(void 0,c,p),v=new a.RoleApi(void 0,c,p),y=(new a.PolicyApi(void 0,c,p),new a.AccessApi(void 0,c,p)),g=new a.PermissionApi(void 0,c,p),m=new l.BaseAPI(void 0,s,p);function b(){return d}function w(){return h}function O(){return v}function P(){return y}function k(){return g}function j(){return{getResourceTypes:function(){return m.axios.get("".concat(s,"/resource-types/"))},getResource:function(e){return m.axios.get("".concat(e,"?limit=1000"))}}}},67643:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),i=n(45987),o=n(92950),a=n.n(o),l=n(45697),c=n.n(l),s=n(58788),u=n(80810),f=["title","icon","description","actions"],p=function(e){var t=e.title,n=e.icon,o=e.description,l=e.actions,c=(0,i.Z)(e,f);return a().createElement(s.EmptyState,(0,r.Z)({variant:s.EmptyStateVariant.small},c),a().createElement(s.EmptyStateIcon,{icon:n||u.ZP}),a().createElement(s.Title,{headingLevel:"h4",size:"lg"},t),a().createElement(s.EmptyStateBody,{className:"pf-u-mb-md"},o.map((function(e,t){return a().createElement(a().Fragment,{key:t},e," ",a().createElement("br",null))}))),l)};p.propTypes={icon:c().func,title:c().node,description:c().node,actions:c().oneOfType([c().node,c().arrayOf(c().node)]),className:c().string};const d=p},41800:(e,t,n)=>{n.d(t,{M:()=>A});var r=n(87462),i=n(4942),o=n(29439),a=n(92950),l=n.n(a),c=n(45697),s=n.n(c),u=n(6877),f=n(32875),p=n(58788),d=n(19571),h=n(7081),v=n(11107),y=n(93433),g=n(35937),m=n.n(g),b=n(81790),w=n(18213),O=n(61338);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return k(k({},e),{},{itemCount:e.count,perPage:e.limit,page:(0,O.wy)(e.limit,e.offset),onSetPage:function(i,o){t(k(k({},e),{},{offset:(0,O.vE)(o,e.limit),name:n,orderBy:r}))},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],onPerPageSelect:function(i,o){t(k(k({},e),{},{offset:0,limit:o,name:n,orderBy:r}))}})},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0;return{count:t.length,items:[{title:"Select none (0)",onClick:function(){n((function(){return[]}))}},k({},!e&&r&&r.length>0?{title:"Select page (".concat(r.length,")"),onClick:function(){n((0,v.ZQ)(r,!0))}}:{})],checked:(0,v.um)(r,t),onSelect:function(t){!e&&n((0,v.ZQ)(r,t))},id:i}},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6?arguments[6]:void 0,c=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0,p=arguments.length>11?arguments[11]:void 0,d=arguments.length>12?arguments[12]:void 0,h=arguments.length>13?arguments[13]:void 0,g=arguments.length>14?arguments[14]:void 0,b=arguments.length>15?arguments[15]:void 0;return{onChange:h,value:g,items:[].concat((0,y.Z)(s&&s.length>0?s.map((function(a){var l=a.key,c=a.label,h=a.value,y=a.selected,g=a.placeholder,w=a.type,O=void 0===w?"text":w,P=a.groups,j=a.items;return{label:c||(0,v.RI)(l),type:O,filterValues:k(k({id:"filter-by-".concat(l),key:"filter-by-".concat(l),placeholder:g||"Filter by ".concat(l),value:h,selected:y},"text"!==O?{isFilterable:u,onShowMore:f,showMoreTitle:p,onFilter:d}:{}),{},{groups:P,items:j,onChange:function(e,a){var c="string"==typeof a||Array.isArray(a)?a:Object.keys(m()(a[""],(function(e){return e})));t(k(k(k({},r),o),{},(0,i.Z)({offset:0},l,c))),(0,v.Aq)((function(){return n(k(k(k({},o),{},{offset:0,orderBy:b},s.reduce((function(e,t){return k(k({},e),{},(0,i.Z)({},t.key,t.value))}),{})),{},(0,i.Z)({},l,c)))}))},isDisabled:e})}})):[{label:(0,v.RI)(l||a),type:"text",filterValues:{id:"filter-by-string",key:"filter-by-string",placeholder:"Filter by ".concat(l||a),value:r,onChange:function(e,r){t(k(k({},o),{},{offset:0,name:r})),(0,v.Aq)((function(){return n(k(k({},o),{},{offset:0,name:r,orderBy:b}))}))},isDisabled:e}}]),(0,y.Z)(c||[]))}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},l=arguments.length>5?arguments[5]:void 0;return{filters:t&&t.length>0?t.map((function(e){var t=e.key,n=e.value;return n&&0!==n.length&&{category:(0,v.RI)(t),type:t,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})).filter(Boolean):[{name:e}],onDelete:function(e,c,s){var u=(0,o.Z)(c,1)[0],f=t.reduce((function(e,t){var n=t.key,r=t.value,o=t.type;return k(k({},e),{},(0,i.Z)({},n,function(e,t,n){return s?"group"===t||"checkbox"===t?[]:"":n!==u.type?e:"checkbox"===t||"group"===t?e.filter((function(e){var t;return e!==(null===(t=u.chips[0])||void 0===t?void 0:t.name)})):Array.isArray(e)?[]:""}(r,o,n)))}),{});r(k(k({},n),{},{offset:0,name:""},f)),a(k(k({},n),{},{offset:0,orderBy:l,name:""},f))}}},E=function(e){var t=e.isSelectable,n=e.checkedRows,i=e.setCheckedItems,o=e.isLoading,a=e.data,c=e.titleSingular,s=e.filterValue,u=e.setFilterValue,f=e.pagination,p=e.fetchData,d=e.sortBy,h=e.toolbarButtons,v=e.filterPlaceholder,y=e.filterItems,g=e.filters,m=e.isFilterable,w=e.onShowMore,O=e.showMoreTitle,P=e.onFilter,k=e.onChange,E=e.value,x=e.hideFilterChips,C=e.tableId;return l().createElement(b.Z,(0,r.Z)({},t&&{bulkSelect:Z(o,n,i,a,C)},{filterConfig:S(o,u,p,s,f,c,v,y,g,m,w,O,P,k,E,d),useMobileLayout:!0,actionsConfig:{actions:h()}},!o&&{pagination:j(f,p,s,d)},(s.length>0||g&&g.length>0)&&!x&&{activeFiltersConfig:D(s,g,f,u,p,d)}))};E.propTypes={isSelectable:s().bool,checkedRows:s().array,setCheckedItems:s().func,isLoading:s().bool,data:s().array,titleSingular:s().string,filterValue:s().oneOfType([s().array,s().string]),setFilterValue:s().func,filters:s().arrayOf(s().shape({value:s().oneOfType([s().string,s().number,s().array]),key:s().string,placeholder:s().string})),isFilterable:s().bool,onShowMore:s().func,showMoreTitle:s().string,onFilter:s().func,onChange:s().func,value:s().any,pagination:s().shape({limit:s().number,offset:s().number,count:s().number}),sortBy:s().string,filterItems:w.Z.propTypes.items,filterPlaceholder:s().string,isCollapsible:s().bool,fetchData:s().func,toolbarButtons:s().func,hideFilterChips:s().bool,tableId:s().string},E.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:O.he,setCheckedItems:function(){},setFilterValue:function(){},sortBy:void 0,fetchData:function(){},toolbarButtons:function(){return[]},filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1};const x=E;var C=n(67643);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.isCompact,n=e.createRows,c=e.borders,s=e.columns,y=e.toolbarButtons,g=e.data,m=e.actionResolver,b=e.areActionsDisabled,w=e.routes,O=e.titlePlural,P=e.titleSingular,k=e.pagination,Z=e.filterValue,S=e.isLoading,D=e.setFilterValue,E=e.checkedRows,R=e.isSelectable,A=e.fetchData,B=e.setCheckedItems,T=e.isCollapsible,I=e.emptyProps,V=e.filterPlaceholder,M=e.rowWrapper,q=e.filters,_=e.isFilterable,L=e.onShowMore,W=e.showMoreTitle,G=e.onFilter,H=e.onChange,N=e.value,Q=e.sortBy,z=e.isExpandable,K=e.onExpand,U=e.hideFilterChips,Y=e.hideHeader,J=e.noData,$=e.noDataDescription,X=e.ouiaId,ee=e.tableId,te=e.containerRef,ne=(0,a.useState)({}),re=(0,o.Z)(ne,2),ie=re[0],oe=re[1],ae=(0,a.useState)({index:void 0,direction:void 0}),le=(0,o.Z)(ae,2),ce=le[0],se=le[1];(0,a.useEffect)((function(){se(F(F({},Q),void 0!==ce.index&&ce))}),[Q]);var ue,fe,pe=n(g,ie,E),de=function(e,t,n,r){var o=r.uuid;return oe((function(e){return F(F({},e),{},(0,i.Z)({},o,n))}))};return l().createElement(a.Fragment,null,w(),!S&&0===pe.length&&0===Z.length&&q.every((function(e){return!e.value}))?l().createElement(C.Z,(0,r.Z)({title:"Configure ".concat(O),icon:h.ZP,description:["To configure user access to applications","create at least one ".concat(P)],actions:y()[0]},I)):(ue=R&&(null==g?void 0:g.length)>0,fe=Math.min(((null==ce?void 0:ce.index)||ue)-ue,(null==s?void 0:s.length)-1),l().createElement(a.Fragment,null,l().createElement(x,{isSelectable:R,checkedRows:E,setCheckedItems:B,isLoading:S||J,data:g,titleSingular:P,filterValue:Z,setFilterValue:D,sortBy:void 0!==ce.index&&fe>=0&&fe<s.length&&"".concat("desc"===ce.direction?"-":"").concat(s[fe].key)||void 0,pagination:k,fetchData:A,toolbarButtons:y,filterPlaceholder:V,filters:q,isFilterable:_,onShowMore:L,showMoreTitle:W,onFilter:G,onChange:H,value:N,hideFilterChips:U,tableId:ee,containerRef:te}),S?l().createElement(d.Wi,null):l().createElement(u.Table,(0,r.Z)({canSelectAll:!1,"aria-label":"".concat(O," table"),variant:t?u.TableVariant.compact:null,borders:c},T&&{onCollapse:de},R&&pe.length>0&&{onSelect:function(e,t,n,r){var i=r.uuid,a=(0,o.Z)(r.cells,1)[0],l=r.requires;return B((0,v.ZQ)([{uuid:i,name:a,requires:l}],t))}},z&&{onExpand:K},{rows:pe.length>0?pe:[{fullWidth:!0,cells:[{title:l().createElement(C.Z,{title:"No matching ".concat(O," found"),description:J&&$?$:["This filter criteria matches no ".concat(O,"."),"Try changing your filter settings."],actions:J&&$?void 0:[l().createElement(p.EmptyStatePrimary,{key:"clear-filters"},l().createElement(p.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:function(){D(F(F({},k),{},{offset:0,name:""})),A(F(F({},k),{},{offset:0,name:""}))}},"Clear all filters"))]}),props:{colSpan:s.length+Boolean(de)}}]}],cells:s},pe.length>0&&{actionResolver:m},{className:0==pe.length?"ins-c-table-empty-state":"",areActionsDisabled:b,rowWrapper:M,sortBy:ce,ouiaId:X,onSort:function(e,t,n){var r=Math.min((t||ue)-ue,(null==s?void 0:s.length)-1);se({index:t,direction:n}),q&&q.length>0?A(F(F(F({},k),{},{offset:0},q.reduce((function(e,t){return F(F({},e),{},(0,i.Z)({},t.key,t.value))}),{})),{},{orderBy:"".concat("desc"===n?"-":"").concat(s[r].key)})):A(F(F({},k),{},{offset:0,name:Z,orderBy:"".concat("desc"===n?"-":"").concat(s[r].key)}))}}),!Y&&l().createElement(u.TableHeader,null),l().createElement(u.TableBody,null)),!k.noBottom&&l().createElement(f.Z,null,!S&&l().createElement(p.Pagination,(0,r.Z)({},j(k,A,Z),{variant:"bottom",dropDirection:"up"}))))))};A.propTypes=F(F({},x.propTypes),{},{sortBy:s().shape({directions:s().string,index:s().number}),rowWrapper:s().any,isCompact:s().bool,borders:s().bool,checkedRows:s().array,createRows:s().func.isRequired,columns:s().array.isRequired,titlePlural:s().string,routes:s().func,actionResolver:s().func,areActionsDisabled:s().func,pagination:s().shape({noBottom:s().bool}),isExpandable:s().bool,onExpand:s().func,hideFilterChips:s().bool,hideHeader:s().bool,noDataDescription:s().arrayOf(s().node),filters:s().array,tableId:s().string.isRequired}),A.defaultProps=F(F({},x.defaultProps),{},{isCompact:!1,borders:!0,routes:function(){return null},hideFilterChips:!1,checkedRows:[],hideHeader:!1})},28090:(e,t,n)=>{n.d(t,{fA:()=>a,fp:()=>l,vd:()=>c,Kt:()=>s,l5:()=>u,sv:()=>f,DV:()=>p,hs:()=>d,ul:()=>h,sZ:()=>v,lq:()=>y});var r=n(36580),i=n(43115),o=n(11107),a=function(e){return{type:r.MF,payload:i.fA(e),meta:{notifications:{rejected:function(e){var t,n;return{variant:"danger",title:"Failed adding role",dismissDelay:8e3,dismissable:!1,description:(null==e||null===(t=e.errors)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.detail)||"The role was not added successfuly."}}}}}},l=function(e){return{type:r.rz,payload:i.fp(e).catch((function(e){var t,n=(null==e||null===(t=e.errors)||void 0===t?void 0:t[0])||{};if("400"===n.status&&"role uuid validation"===n.source)return{error:o.VG};throw e}))}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.vd(e).catch((function(e){var t,n=(null==e||null===(t=e.errors)||void 0===t?void 0:t[0])||{};if("400"===n.status&&"detail"===n.source)return{error:o.VG};throw e}))}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.Lp,payload:i.Kt(e)}},u=function(e){return{type:r.W2,payload:i.l5(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing role",dismissDelay:8e3,dismissable:!1,description:"The role was removed successfully."},rejected:{variant:"danger",title:"Failed removing role",dismissDelay:8e3,dismissable:!1,description:"The role was not removed successfuly."}}}}},f=function(e){return{type:r.qj,payload:i.fp(e)}},p=function(e){return{type:r.Y2,payload:i.DV(e)}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r.eJ,payload:i.vd(e)}},h=function(e,t,n){return{type:r.Sw,payload:i.ul(e,t,n),meta:{notifications:{rejected:function(e){var t,n;return{variant:"danger",title:"Failed updating role",dismissDelay:8e3,dismissable:!1,description:(null==e||null===(t=e.errors)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.detail)||"The role was not updated successfuly."}}}}}},v=function(e,t){return{type:r.kg,payload:i.sZ(e,t),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating role",dismissDelay:8e3,dismissable:!1,description:"The role was updated successfully."}}}}},y=function(e,t){return{type:r.Sw,payload:i.lq(e,t)}}}}]);
//# sourceMappingURL=../sourcemaps/657.c7ce8486f2b5c07e89bb4cc990365a8a.js.map
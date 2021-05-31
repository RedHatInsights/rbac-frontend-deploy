(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[226],{79815:(e,t,r)=>{"use strict";r.d(t,{Z:()=>G});var n=r(6610),o=r(5991),i=r(63349),a=r(10379),c=r(46070),s=r(77608),u=r(96156),l=r(92950),p=r.n(l),d=r(45697),f=r.n(d),g=r(334),O=r(45237),E=r(19571),m=r(60306),y=(0,l.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(985),r.e(657),r.e(662),r.e(311),r.e(661),r.e(705),r.e(459)]).then(r.bind(r,45459))})),h=(0,l.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(985),r.e(657),r.e(662),r.e(311),r.e(514)]).then(r.bind(r,61514))})),L=(0,l.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(985),r.e(657),r.e(662),r.e(661),r.e(791)]).then(r.bind(r,11791))})),b=(0,l.lazy)((function(){return r.e(822).then(r.bind(r,39822))})),P=(0,l.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(128)]).then(r.bind(r,8128))})),v=function(){return p().createElement(l.Suspense,{fallback:p().createElement(E.zx,null)},p().createElement(g.Switch,null,p().createElement(g.Route,{path:m._j.Xx,component:y}),p().createElement(g.Route,{path:m._j.uJ,component:h}),p().createElement(g.Route,{path:m._j.rC,component:L}),p().createElement(g.Route,{path:m._j.d$,component:b}),p().createElement(g.Route,{path:m._j.DE,component:P}),p().createElement(g.Route,null,p().createElement(g.Redirect,{to:m._j.rC}))))},_=r(86350),R=r(96533),D=r(83069),j=r(30586),Z=r(99332),I=r(48716),S=r(39173);const w=function(){return p().createElement(p().Fragment,null,p().createElement(I.Z,null,p().createElement(S.Z,{title:"User access"})),p().createElement(_.Z,null,p().createElement(j.EmptyState,{variant:j.EmptyStateVariant.full,className:"ins-c-rbac-denied-state"},p().createElement(j.EmptyStateIcon,{icon:Z.ZP}),p().createElement(j.Title,{headingLevel:"h4"},"You do not have permissions to view or manage User access"),p().createElement(j.EmptyStateBody,null,"Contact your organization administrator(s) for more information."),document.referrer?p().createElement(j.Button,{variant:"primary",onClick:function(){return history.back()}},"Return to previous page"):p().createElement(j.Button,{variant:"primary",component:"a",href:"."},"Go to landing page"))))};var F=function(e){(0,a.Z)(d,e);var t,r,l=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var o=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function d(){var e;(0,n.Z)(this,d);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e=l.call.apply(l,[this].concat(r)),(0,u.Z)((0,i.Z)(e),"state",{chromeNavAvailable:!0,userReady:!1,isAdmin:void 0}),e}return(0,o.Z)(d,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;insights.chrome.init(),insights.chrome.registerModule("access-requests"),!insights.chrome.getApp()&&t.push("/my-user-access"),insights.chrome.auth.getUser().then((function(t){return e.setState({userReady:!0,isAdmin:t.identity.user.is_org_admin})})),insights.chrome.identifyApp(insights.chrome.getApp()),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(e.navId))}))}},{key:"componentWillUnmount",value:function(){this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.userReady,r=e.isAdmin;return t?r||"rbac"!==insights.chrome.getApp()?p().createElement(D.Z,{locale:"en"},p().createElement(p().Fragment,null,p().createElement(R.ZP,null),p().createElement(_.Z,{style:{marginLeft:0,padding:0}},p().createElement(v,null)))):p().createElement(w,null):p().createElement(E.zx,null)}}]),d}(l.Component);F.propTypes={history:f().object};const G=(0,g.withRouter)((0,O.connect)()(F))},61338:(e,t,r)=>{"use strict";r.d(t,{he:()=>a,eX:()=>c,wy:()=>s,vE:()=>u,rj:()=>l,oG:()=>p});var n=r(96156);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a={limit:20,offset:0,itemCount:0},c={limit:10,offset:0,itemCount:0},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.limit,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.limit;return(e-1)*t},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=new URLSearchParams(e.location.search);isNaN(parseInt(r.get("per_page")))&&r.set("per_page",t.limit);var n=parseInt(r.get("per_page"));isNaN(parseInt(r.get("page")))&&r.set("page",1);var o=u(parseInt(r.get("page")),n);return e.replace({pathname:e.location.pathname,search:r.toString()}),i(i({},t),{},{limit:n,offset:o})},p=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=new URLSearchParams(e.location.search);n.set("per_page",t),n.set("page",s(t,r)),e.replace({pathname:e.location.pathname,search:n.toString()})}},19571:(e,t,r)=>{"use strict";r.d(t,{Wi:()=>f,zx:()=>g,h2:()=>O,Vj:()=>E,Z0:()=>m});var n=r(22122),o=r(85061),i=r(81253),a=r(92950),c=r.n(a),s=r(45697),u=r.n(s),l=r(30586),p=r(24561),d=r(56455),f=function(e){var t=e.items,r=(0,i.Z)(e,["items"]);return c().createElement(a.Fragment,null,c().createElement(l.DataList,{"aria-label":"datalist-placeholder"},(0,o.Z)(Array(t)).map((function(e,t){return c().createElement(l.DataListItem,{key:t,"aria-labelledby":"datalist-item-placeholder"},c().createElement(l.DataListItemRow,{"aria-label":"datalist-item-placeholder-row"},c().createElement(l.DataListItemCells,{dataListCells:[c().createElement(l.DataListCell,{key:"1"},c().createElement(d.Z,(0,n.Z)({size:d.i.lg},r)))]})))}))))};f.propTypes={items:u().number},f.defaultProps={items:5};var g=function(e){return c().createElement("div",null,c().createElement(p.ZP,(0,n.Z)({height:16,width:300,speed:2},e),c().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),c().createElement(f,null))},O=function(e){return c().createElement("div",{style:{width:"200px",height:"21px"}},c().createElement(p.ZP,(0,n.Z)({height:21,width:200,speed:2},e),c().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"21"})))},E=function(e){e.showDivider;var t=(0,i.Z)(e,["showDivider"]);return c().createElement("div",{style:{width:"200px",height:"18px"}},c().createElement(p.ZP,(0,n.Z)({height:18,width:200,speed:2},t),c().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"18"})))};E.propTypes={showDivider:u().any};var m=function(){return c().createElement(p.ZP,{height:32,width:160,speed:2},c().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"160",height:"32"}))}},36580:(e,t,r)=>{"use strict";r.d(t,{_h:()=>n,kL:()=>o,eb:()=>i,Po:()=>a,t3:()=>c,v9:()=>s,WH:()=>u,xD:()=>l,MF:()=>p,rz:()=>d,Lp:()=>f,W2:()=>g,eJ:()=>O,Ef:()=>E,nI:()=>m,hi:()=>y,b9:()=>h,Nr:()=>L,Yc:()=>b,fG:()=>P,XS:()=>v,Vh:()=>_,as:()=>R,qj:()=>D,Y2:()=>j,Sw:()=>Z,kg:()=>I,ft:()=>S,wI:()=>w,KD:()=>F,vf:()=>G,E2:()=>N,s6:()=>U,ZX:()=>T,e:()=>C,e0:()=>A});var n="FETCH_GROUP",o="FETCH_SYSTEM_GROUP",i="FETCH_GROUPS",a="ADD_GROUP",c="UPDATE_GROUP",s="REMOVE_GROUPS",u="FETCH_USERS",l="UPDATE_USERS_FILTERS",p="ADD_ROLE",d="FETCH_ROLE",f="FETCH_ROLES",g="REMOVE_ROLE",O="FETCH_ROLES_FOR_WIZARD",E="FETCH_GROUP_POLICIES",m="FETCH_POLICY",y="RESET_SELECTED_GROUP",h="REMOVE_MEMBERS_FROM_GROUP",L="ADD_MEMBERS_TO_GROUP",b="REMOVE_ROLES_FROM_GROUP",P="ADD_ROLES_TO_GROUP",v="FETCH_ROLES_FOR_GROUP",_="FETCH_MEMBERS_FOR_GROUP",R="FETCH_ADD_ROLES_FOR_GROUP",D="FETCH_ROLE_FOR_USER",j="FETCH_ROLE_FOR_PRINCIPAL",Z="UPDATE_ROLE",I="PATCH_ROLE",S="GET_PRINCIPAL_ACCESS",w="LIST_PERMISSIONS",F="LIST_APPLICATION_OPTIONS",G="LIST_RESOURCE_OPTIONS",N="LIST_OPERATION_OPTIONS",U="GET_RESOURCE_DEFINITIONS",T="GET_RESOURCE",C="EXPAND_SPLATS",A="RESET_EXPAND_SPLATS"},43146:(e,t,r)=>{"use strict";r.d(t,{g:()=>ee,Z:()=>re});var n,o=r(92950),i=r(57283),a=r.n(i),c=r(84885),s=r(83215),u=r(18546),l=r(94500),p=r.n(l),d=r(53894),f=r(96156),g=r(36580),O=r(61338);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={selectedUser:{},isUserDataLoading:!1,users:{meta:O.he,filters:{},pagination:O.he}};const h=(n={},(0,f.Z)(n,"".concat(g.WH,"_PENDING"),(function(e){return m(m({},e),{},{isUserDataLoading:!0})})),(0,f.Z)(n,"".concat(g.WH,"_FULFILLED"),(function(e,t){var r=t.payload;return m(m({},e),{},{users:m(m({},e.users),r),isUserDataLoading:!1})})),(0,f.Z)(n,g.xD,(function(e,t){var r=t.payload;return m(m({},e),{},{users:m(m({},e.users),{},{filters:r})})})),n);var L,b=r(57557),P=r.n(b);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={groups:{data:[],meta:O.he,filters:{},pagination:_(_({},O.he),{},{count:0})},selectedGroup:{addRoles:{},members:{meta:O.he},pagination:O.he},isLoading:!1,isRecordLoading:!1},D=function(e){return _(_({},e),{},{error:void 0,isLoading:!0})};const j=(L={},(0,f.Z)(L,"".concat(g.eb,"_PENDING"),D),(0,f.Z)(L,"".concat(g.eb,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{groups:r,isLoading:!1})})),(0,f.Z)(L,"".concat(g.kL,"_PENDING"),D),(0,f.Z)(L,"".concat(g.kL,"_FULFILLED"),(function(e,t){var r,n,o=t.payload;return _(_({},e),{},{systemGroup:null==o||null===(r=o.data)||void 0===r||null===(n=r.filter((function(e){return null==e?void 0:e.platform_default})))||void 0===n?void 0:n[0]})})),(0,f.Z)(L,"".concat(g._h,"_PENDING"),(function(e){return _(_({},e),{},{isRecordLoading:!0,selectedGroup:_(_({},e.selectedGroup),{},{error:void 0,loaded:!1})})})),(0,f.Z)(L,"".concat(g._h,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{isRecordLoading:!1},r.error?r:{groups:_(_({},e.groups),{},{data:e.groups.data.map((function(e){return _(_({},e),r.uuid===e.uuid&&_(_({},r),{},{loaded:!0}))}))}),selectedGroup:_(_(_({},e.selectedGroup),{},{members:_(_({},e.selectedGroup.members),{},{data:r.principals})},P()(r,["principals","roles"])),{},{loaded:!0,pagination:_(_({},e.selectedGroup.pagination),{},{count:r.roleCount,offset:0})})})})),(0,f.Z)(L,"".concat(g.XS,"_PENDING"),(function(e){return _(_({},e),{},{isRecordRolesLoading:!0,selectedGroup:_(_({},e.selectedGroup),{},{error:void 0,loaded:!1})})})),(0,f.Z)(L,"".concat(g.XS,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{isRecordRolesLoading:!1,selectedGroup:_(_(_({},e.selectedGroup),r.error?r:{roles:r.data,pagination:r.meta}),{},{loaded:!0})})})),(0,f.Z)(L,"".concat(g.Vh,"_PENDING"),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _(_({},e),{},{selectedGroup:_(_({},e.selectedGroup||{}),{},{members:{isLoading:!0}})})})),(0,f.Z)(L,"".concat(g.Vh,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{selectedGroup:_(_({},e.selectedGroup||{}),{},{members:_({isLoading:!1},r.error?{}:r)},r.error?r:{})})})),(0,f.Z)(L,"".concat(g.as,"_PENDING"),(function(e){return _(_({},e),{},{selectedGroup:_(_({},e.selectedGroup),{},{addRoles:{loaded:!1}})})})),(0,f.Z)(L,"".concat(g.as,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{selectedGroup:_(_({},e.selectedGroup),{},{addRoles:_(_({},r.error?e.addRoles:{roles:r.data,pagination:r.meta}),{},{loaded:!0})})},r.error?r:{})})),(0,f.Z)(L,g.hi,(function(e){return _(_({},e),{},{selectedGroup:void 0})})),L);var Z;function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const w=(Z={},(0,f.Z)(Z,"".concat(g.Ef,"_PENDING"),(function(e){return S(S({},e),{},{isLoading:!0})})),(0,f.Z)(Z,"".concat(g.Ef,"_FULFILLED"),(function(e,t){var r=t.payload;return S(S({},e),{},{policies:r,isLoading:!1})})),(0,f.Z)(Z,"".concat(g.nI,"_PENDING"),(function(e){return S(S({},e),{},{isRecordLoading:!0})})),(0,f.Z)(Z,"".concat(g.nI,"_FULFILLED"),(function(e,t){var r=t.payload;return S(S({},e),{},{selectedPolicy:r,isRecordLoading:!1})})),Z);var F;function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U={isLoading:!1,isRecordLoading:!1,roles:{data:[],meta:O.he,filters:{},pagination:N(N({},O.he),{},{count:0})},rolesForWizard:{data:[],meta:O.he},selectedRole:{}},T=function(e){return N(N({},e),{},{isRecordLoading:!0,error:void 0})},C=function(e,t){var r=t.payload;return N(N({},e),{},{rolesWithAccess:N(N({},e.rolesWithAccess),{},(0,f.Z)({},r.uuid,r)),isRecordLoading:!1})};const A=(F={},(0,f.Z)(F,"".concat(g.rz,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N(N({},e),r.error?r:{selectedRole:r}),{},{isRecordLoading:!1})})),(0,f.Z)(F,"".concat(g.rz,"_PENDING"),T),(0,f.Z)(F,"".concat(g.Lp,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N(N({},e),r.error?r:{roles:N(N({},e.roles),r)}),{},{isLoading:!1})})),(0,f.Z)(F,"".concat(g.Lp,"_PENDING"),(function(e){return N(N({},e),{},{isLoading:!0,error:void 0})})),(0,f.Z)(F,"".concat(g.qj,"_FULFILLED"),C),(0,f.Z)(F,"".concat(g.qj,"_PENDING"),T),(0,f.Z)(F,"".concat(g.Y2,"_FULFILLED"),C),(0,f.Z)(F,"".concat(g.Y2,"_PENDING"),T),(0,f.Z)(F,"".concat(g.eJ,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N({},e),{},{rolesForWizard:r,isWizardLoading:!1})})),(0,f.Z)(F,"".concat(g.eJ,"_PENDING"),(function(e){return N(N({},e),{},{isWizardLoading:!0})})),F);var x;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={isLoading:!1,access:{data:[],meta:O.he}};const H=(x={},(0,f.Z)(x,"".concat(g.ft,"_PENDING"),(function(e){return M(M({},e),{},{isLoading:!0})})),(0,f.Z)(x,"".concat(g.ft,"_FULFILLED"),(function(e,t){var r=t.payload;return M(M({},e),{},{access:r,isLoading:!1})})),x);var W;function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B={isLoading:!1,options:{isLoadingApplication:!1,isLoadingResource:!1,isLoadingOperation:!1,application:{data:[]},resource:{data:[]},operation:{data:[]}},permission:{data:[],meta:O.he},expandSplats:{data:[],meta:O.he}};const q=(W={},(0,f.Z)(W,"".concat(g.wI,"_PENDING"),(function(e){return V(V({},e),{},{isLoading:!0})})),(0,f.Z)(W,"".concat(g.wI,"_FULFILLED"),(function(e,t){var r=t.payload;return V(V({},e),{},{permission:r,isLoading:!1})})),(0,f.Z)(W,"".concat(g.KD,"_PENDING"),(function(e){return V(V({},e),{},{options:V(V({},e.options),{},{isLoadingApplication:!0})})})),(0,f.Z)(W,"".concat(g.KD,"_FULFILLED"),(function(e,t){var r=t.payload;return V(V({},e),{},{options:V(V({},e.options),{},{application:r,isLoadingApplication:!1})})})),(0,f.Z)(W,"".concat(g.vf,"_PENDING"),(function(e){return V(V({},e),{},{options:V(V({},e.options),{},{isLoadingResource:!0})})})),(0,f.Z)(W,"".concat(g.vf,"_FULFILLED"),(function(e,t){var r=t.payload;return V(V({},e),{},{options:V(V({},e.options),{},{resource:r,isLoadingResource:!1})})})),(0,f.Z)(W,"".concat(g.E2,"_PENDING"),(function(e){return V(V({},e),{},{options:V(V({},e.options),{},{isLoadingOperation:!0})})})),(0,f.Z)(W,"".concat(g.E2,"_FULFILLED"),(function(e,t){var r=t.payload;return V(V({},e),{},{options:V(V({},e.options),{},{operation:r,isLoadingOperation:!1})})})),(0,f.Z)(W,"".concat(g.e,"_PENDING"),(function(e){return V(V({},e),{},{isLoadingExpandSplats:!0})})),(0,f.Z)(W,"".concat(g.e,"_FULFILLED"),(function(e,t){var r=t.payload;return V(V({},e),{},{expandSplats:r,isLoadingExpandSplats:!1})})),(0,f.Z)(W,"".concat(g.e0),(function(){return B})),W);var Y;function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={isLoading:!1,resourceTypes:{data:[],meta:O.he},resources:{},loadingResources:0};const Q=(Y={},(0,f.Z)(Y,"".concat(g.s6,"_PENDING"),(function(e){return K(K({},e),{},{isLoading:!0})})),(0,f.Z)(Y,"".concat(g.s6,"_FULFILLED"),(function(e,t){var r=t.payload;return K(K({},e),{},{resourceTypes:r,isLoading:!1})})),(0,f.Z)(Y,"".concat(g.ZX,"_PENDING"),(function(e){return K(K({},e),{},{loadingResources:e.loadingResources+1})})),(0,f.Z)(Y,"".concat(g.ZX,"_FULFILLED"),(function(e,t){var r=t.payload;return K(K({},e),{},{resources:K(K({},e.resources),{},(0,f.Z)({},r.links.first.split("/")[5],r.data.filter((function(e){return null!==e.value})))),loadingResources:e.loadingResources-1})})),Y);var ee=(0,o.createContext)({getRegistry:function(){}}),te=new u.ZP({},[d.Z,a(),(0,c.default)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),p()]);te.register({userReducer:(0,u.Gg)(h,y),groupReducer:(0,u.Gg)(j,R),policyReducer:(0,u.Gg)(w,{policies:{data:[],meta:{count:0,limit:10,offset:0}},policy:{},isLoading:!1,isRecordLoading:!1}),roleReducer:(0,u.Gg)(A,U),accessReducer:(0,u.Gg)(H,z),permissionReducer:(0,u.Gg)(q,B),costReducer:(0,u.Gg)(Q,$),notifications:s.ee});const re=te},60306:e=>{"use strict";e.exports=JSON.parse('{"_j":{"Sy":"/","Xx":"/groups","BC":"/groups/add-group","jz":"/groups/removegroups","M5":{"E":"/groups/edit/:id"},"fe":"/groups/detail/:uuid","Rx":"/groups/detail/:uuid/members/edit","Xi":"/groups/detail/:uuid/roles/edit","Se":"/groups/detail/:uuid/members/remove","ub":"/groups/detail/:uuid/roles/remove","mh":"/groups/detail/:uuid/roles","Pc":"/groups/detail/:uuid/roles/add_roles","C1":"/groups/detail/:uuid/members","dZ":"/groups/detail/:uuid/members/add_members","T1":"/groups/detail/:groupUuid/roles/detail/:uuid","uJ":"/roles","EM":"/roles/add-role","fV":"/roles/remove/:id","ld":"/roles/edit/:id","Fh":"/roles/detail/:uuid","W3":"/roles/detail/:uuid/role-add-permission","GL":"/roles/detail/:id/remove","Pu":"/roles/detail/:id/edit","T0":"/roles/detail/:roleId/permission/:permissionId","nu":"/roles/detail/:roleId/permission/:permissionId/edit","rC":"/users","tG":"/users/detail/:username","d$":"/my-user-access","DE":"/access-requests","RK":"/access-requests/:requestId"}}')}}]);
//# sourceMappingURL=../sourcemaps/226.e7bb7b31247c44a40293.js.map
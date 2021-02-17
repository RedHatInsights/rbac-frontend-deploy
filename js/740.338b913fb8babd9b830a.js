(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[740],{44554:(e,t,r)=>{(t=r(23645)(!1)).push([e.id,".ins-c-rbac__summary .pf-l-grid{margin-bottom:var(--pf-global--gutter--md)}.ins-c-rbac__bold-text{font-weight:var(--pf-global--FontWeight--bold)}@media only screen and (max-width: 768px){.ins-m-hide-on-sm{display:none}.pf-c-table__expandable-row.pf-m-expanded{max-height:none !important;overflow-y:visible}.pf-c-table__expandable-row.pf-m-expanded tr:first-of-type{padding-top:0 !important}.pf-c-table__expandable-row.pf-m-expanded>td::before{display:none}.ins-c-rbac__user-row .pf-c-label{width:max-content}.ins-c-conditional-filter .pf-l-split__item.pf-m-fill{flex-grow:.8}.pf-c-empty-state__content h4.pf-c-title{font-size:var(--pf-c-title--m-2xl--FontSize)}.pf-c-empty-state__content .pf-c-empty-state__icon{font-size:var(--pf-c-empty-state--m-xl__icon--FontSize)}}\n",""]),e.exports=t},69244:(e,t,r)=>{(t=r(23645)(!1)).push([e.id,".ins-c-rbac-denied-state .pf-c-title{max-width:540px;margin-left:auto;margin-right:auto}\n",""]),e.exports=t},27625:(e,t,r)=>{"use strict";r.d(t,{Z:()=>W});var n=r(34575),o=r.n(n),i=r(93913),a=r.n(i),c=r(81506),s=r.n(c),u=r(2205),l=r.n(u),d=r(78585),p=r.n(d),f=r(29754),g=r.n(f),m=r(59713),E=r.n(m),O=r(80150),y=r.n(O),h=r(45697),_=r.n(h),b=r(47194),L=r(70983),v=r(55917),P=r(60306),R=(0,O.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(446),r.e(753),r.e(825),r.e(627),r.e(694),r.e(326),r.e(537),r.e(274),r.e(220)]).then(r.bind(r,27220))})),D=(0,O.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(446),r.e(753),r.e(825),r.e(627),r.e(348),r.e(694),r.e(326),r.e(537),r.e(565)]).then(r.bind(r,67565))})),j=(0,O.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(446),r.e(753),r.e(279),r.e(825),r.e(694),r.e(326),r.e(274),r.e(129)]).then(r.bind(r,60129))})),I=(0,O.lazy)((function(){return Promise.all([r.e(410),r.e(946)]).then(r.bind(r,63946))})),F=(0,O.lazy)((function(){return r.e(924).then(r.bind(r,71924))})),w=function(){return y().createElement(O.Suspense,{fallback:y().createElement(v.zx,null)},y().createElement(b.Switch,null,y().createElement(b.Route,{path:P._j.Xx,component:R}),y().createElement(b.Route,{path:P._j.uJ,component:D}),y().createElement(b.Route,{path:P._j.rC,component:j}),y().createElement(b.Route,{path:P._j.d$,component:I}),y().createElement(b.Route,{path:P._j.kj,component:F}),y().createElement(b.Route,null,y().createElement(b.Redirect,{to:P._j.rC}))))},G=r(86350),S=r(96533),N=r(93242),U=r(60485),T=r(47173),x=r(9947),C=r(38424),A=r(75106),k=r(99332),z=r(48716),Z=r(39173);r(77258);const M=function(){return y().createElement(y().Fragment,null,y().createElement(z.Z,null,y().createElement(Z.Z,{title:"User access"})),y().createElement(G.Z,null,y().createElement(x.u,{variant:x.I.full,className:"ins-c-rbac-denied-state"},y().createElement(C.k,{icon:k.ZP}),y().createElement(U.D,{headingLevel:"h4"},"You do not have permissions to view or manage User access"),y().createElement(A.B,null,"Contact your organization administrator(s) for more information."),document.referrer?y().createElement(T.zx,{variant:"primary",onClick:function(){return history.back()}},"Return to previous page"):y().createElement(T.zx,{variant:"primary",component:"a",href:"."},"Go to landing page"))))};r(33172);var H=function(e){l()(i,e);var t,r,n=(t=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=g()(t);if(r){var o=g()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return p()(this,e)});function i(){var e;o()(this,i);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),E()(s()(e),"state",{chromeNavAvailable:!0,userReady:!1,isAdmin:void 0}),e}return a()(i,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;insights.chrome.init(),!insights.chrome.getApp()&&t.push("/my-user-access"),insights.chrome.auth.getUser().then((function(t){return e.setState({userReady:!0,isAdmin:t.identity.user.is_org_admin})})),insights.chrome.identifyApp(insights.chrome.getApp()),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(e.navId))}))}},{key:"componentWillUnmount",value:function(){this.unregister&&this.unregister()}},{key:"render",value:function(){var e=this.state,t=e.userReady,r=e.isAdmin;return t?r||"rbac"!==insights.chrome.getApp()?y().createElement(N.Z,{locale:"en"},y().createElement(y().Fragment,null,y().createElement(S.ZP,null),y().createElement(G.Z,{style:{marginLeft:0,padding:0}},y().createElement(w,null)))):y().createElement(M,null):y().createElement(v.zx,null)}}]),i}(O.Component);H.propTypes={history:_().object};const W=(0,b.withRouter)((0,L.connect)()(H))},71410:(e,t,r)=>{"use strict";r.d(t,{he:()=>n,eX:()=>o});var n={limit:20,offset:0,itemCount:0},o={limit:10,offset:0,itemCount:0}},55917:(e,t,r)=>{"use strict";r.d(t,{Wi:()=>_,zx:()=>b,h2:()=>L,Vj:()=>v,Z0:()=>P});var n=r(67154),o=r.n(n),i=r(319),a=r.n(i),c=r(6479),s=r.n(c),u=r(80150),l=r.n(u),d=r(45697),p=r.n(d),f=r(31765),g=r(27511),m=r(61282),E=r(81217),O=r(14087),y=r(24561),h=r(56455),_=function(e){var t=e.items,r=s()(e,["items"]);return l().createElement(u.Fragment,null,l().createElement(f.FR,{"aria-label":"datalist-placeholder"},a()(Array(t)).map((function(e,t){return l().createElement(m.L,{key:t,"aria-labelledby":"datalist-item-placeholder"},l().createElement(E.V,{"aria-label":"datalist-item-placeholder-row"},l().createElement(O.p,{dataListCells:[l().createElement(g.K,{key:"1"},l().createElement(h.Z,o()({size:h.i.lg},r)))]})))}))))};_.propTypes={items:p().number},_.defaultProps={items:5};var b=function(e){return l().createElement("div",null,l().createElement(y.ZP,o()({height:16,width:300,speed:2},e),l().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),l().createElement(_,null))},L=function(e){return l().createElement("div",{style:{width:"200px",height:"21px"}},l().createElement(y.ZP,o()({height:21,width:200,speed:2},e),l().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"21"})))},v=function(e){e.showDivider;var t=s()(e,["showDivider"]);return l().createElement("div",{style:{width:"200px",height:"18px"}},l().createElement(y.ZP,o()({height:18,width:200,speed:2},t),l().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"18"})))};v.propTypes={showDivider:p().any};var P=function(){return l().createElement(y.ZP,{height:32,width:160,speed:2},l().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"160",height:"32"}))}},84887:(e,t,r)=>{"use strict";r.d(t,{_h:()=>n,kL:()=>o,eb:()=>i,Po:()=>a,t3:()=>c,v9:()=>s,WH:()=>u,MF:()=>l,rz:()=>d,Lp:()=>p,W2:()=>f,eJ:()=>g,Ef:()=>m,nI:()=>E,hi:()=>O,b9:()=>y,Nr:()=>h,Yc:()=>_,fG:()=>b,XS:()=>L,Vh:()=>v,as:()=>P,qj:()=>R,Y2:()=>D,Sw:()=>j,kg:()=>I,ft:()=>F,wI:()=>w,KD:()=>G,vf:()=>S,E2:()=>N,s6:()=>U,ZX:()=>T,e:()=>x,e0:()=>C});var n="FETCH_GROUP",o="FETCH_SYSTEM_GROUP",i="FETCH_GROUPS",a="ADD_GROUP",c="UPDATE_GROUP",s="REMOVE_GROUPS",u="FETCH_USERS",l="ADD_ROLE",d="FETCH_ROLE",p="FETCH_ROLES",f="REMOVE_ROLE",g="FETCH_ROLES_FOR_WIZARD",m="FETCH_GROUP_POLICIES",E="FETCH_POLICY",O="RESET_SELECTED_GROUP",y="REMOVE_MEMBERS_FROM_GROUP",h="ADD_MEMBERS_TO_GROUP",_="REMOVE_ROLES_FROM_GROUP",b="ADD_ROLES_TO_GROUP",L="FETCH_ROLES_FOR_GROUP",v="FETCH_MEMBERS_FOR_GROUP",P="FETCH_ADD_ROLES_FOR_GROUP",R="FETCH_ROLE_FOR_USER",D="FETCH_ROLE_FOR_PRINCIPAL",j="UPDATE_ROLE",I="PATCH_ROLE",F="GET_PRINCIPAL_ACCESS",w="LIST_PERMISSIONS",G="LIST_APPLICATION_OPTIONS",S="LIST_RESOURCE_OPTIONS",N="LIST_OPERATION_OPTIONS",U="GET_RESOURCE_DEFINITIONS",T="GET_RESOURCE",x="EXPAND_SPLATS",C="RESET_EXPAND_SPLATS"},54479:(e,t,r)=>{"use strict";r.d(t,{Z:()=>ee});var n,o=r(5068),i=r(84885),a=r(83215),c=r(18546),s=r(94500),u=r.n(s),l=r(53894),d=r(59713),p=r.n(d),f=r(84887),g=r(71410);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={selectedUser:{},isUserDataLoading:!1,users:{meta:g.he}};const y=(n={},p()(n,"".concat(f.WH,"_PENDING"),(function(e){return E(E({},e),{},{isUserDataLoading:!0})})),p()(n,"".concat(f.WH,"_FULFILLED"),(function(e,t){var r=t.payload;return E(E({},e),{},{users:r,isUserDataLoading:!1})})),n);var h,_=r(57557),b=r.n(_);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={groups:{data:[],meta:g.he},selectedGroup:{addRoles:{},members:{meta:g.he},pagination:g.he},isLoading:!1,isRecordLoading:!1},R=function(e){return v(v({},e),{},{isLoading:!0})};const D=(h={},p()(h,"".concat(f.eb,"_PENDING"),R),p()(h,"".concat(f.eb,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{groups:r,isLoading:!1})})),p()(h,"".concat(f.kL,"_PENDING"),R),p()(h,"".concat(f.kL,"_FULFILLED"),(function(e,t){var r,n,o=t.payload;return v(v({},e),{},{systemGroup:null==o||null===(r=o.data)||void 0===r||null===(n=r.filter((function(e){return null==e?void 0:e.platform_default})))||void 0===n?void 0:n[0]})})),p()(h,"".concat(f._h,"_PENDING"),(function(e){return v(v({},e),{},{isRecordLoading:!0,selectedGroup:v(v({},e.selectedGroup),{},{loaded:!1})})})),p()(h,"".concat(f._h,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{isRecordLoading:!1,groups:v(v({},e.groups),{},{data:e.groups.data.map((function(e){return v(v({},e),r.uuid===e.uuid&&v(v({},r),{},{loaded:!0}))}))}),selectedGroup:v(v(v({},e.selectedGroup),{},{members:v(v({},e.selectedGroup.members),{},{data:r.principals})},b()(r,["principals","roles"])),{},{loaded:!0,pagination:v(v({},e.selectedGroup.pagination),{},{count:r.roleCount,offset:0})})})})),p()(h,"".concat(f.XS,"_PENDING"),(function(e){return v(v({},e),{},{isRecordRolesLoading:!0,selectedGroup:v(v({},e.selectedGroup),{},{loaded:!1})})})),p()(h,"".concat(f.XS,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{isRecordRolesLoading:!1,selectedGroup:v(v({},e.selectedGroup),{},{roles:r.data,pagination:r.meta,loaded:!0})})})),p()(h,"".concat(f.Vh,"_PENDING"),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v(v({},e),{},{selectedGroup:v(v({},e.selectedGroup||{}),{},{members:{isLoading:!0}})})})),p()(h,"".concat(f.Vh,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{selectedGroup:v(v({},e.selectedGroup||{}),{},{members:v({isLoading:!1},r)})})})),p()(h,"".concat(f.as,"_PENDING"),(function(e){return v(v({},e),{},{selectedGroup:v(v({},e.selectedGroup),{},{addRoles:{loaded:!1}})})})),p()(h,"".concat(f.as,"_FULFILLED"),(function(e,t){var r=t.payload;return v(v({},e),{},{selectedGroup:v(v({},e.selectedGroup),{},{addRoles:{roles:r.data,pagination:r.meta,loaded:!0}})})})),p()(h,f.hi,(function(e){return v(v({},e),{},{selectedGroup:void 0})})),h);var j;function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const w=(j={},p()(j,"".concat(f.Ef,"_PENDING"),(function(e){return F(F({},e),{},{isLoading:!0})})),p()(j,"".concat(f.Ef,"_FULFILLED"),(function(e,t){var r=t.payload;return F(F({},e),{},{policies:r,isLoading:!1})})),p()(j,"".concat(f.nI,"_PENDING"),(function(e){return F(F({},e),{},{isRecordLoading:!0})})),p()(j,"".concat(f.nI,"_FULFILLED"),(function(e,t){var r=t.payload;return F(F({},e),{},{selectedPolicy:r,isRecordLoading:!1})})),j);var G;function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U={isLoading:!1,isRecordLoading:!1,roles:{data:[],meta:g.he},rolesForWizard:{data:[],meta:g.he},selectedRole:{}},T=function(e){return N(N({},e),{},{isRecordLoading:!0})},x=function(e,t){var r=t.payload;return N(N({},e),{},{rolesWithAccess:N(N({},e.rolesWithAccess),{},p()({},r.uuid,r)),isRecordLoading:!1})};const C=(G={},p()(G,"".concat(f.rz,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N({},e),{},{selectedRole:r,isRecordLoading:!1})})),p()(G,"".concat(f.rz,"_PENDING"),T),p()(G,"".concat(f.Lp,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N({},e),{},{roles:r,isLoading:!1})})),p()(G,"".concat(f.Lp,"_PENDING"),(function(e){return N(N({},e),{},{isLoading:!0})})),p()(G,"".concat(f.qj,"_FULFILLED"),x),p()(G,"".concat(f.qj,"_PENDING"),T),p()(G,"".concat(f.Y2,"_FULFILLED"),x),p()(G,"".concat(f.Y2,"_PENDING"),T),p()(G,"".concat(f.eJ,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N({},e),{},{rolesForWizard:r,isWizardLoading:!1})})),p()(G,"".concat(f.eJ,"_PENDING"),(function(e){return N(N({},e),{},{isWizardLoading:!0})})),G);var A;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={isLoading:!1,access:{data:[],meta:g.he}};const M=(A={},p()(A,"".concat(f.ft,"_PENDING"),(function(e){return z(z({},e),{},{isLoading:!0})})),p()(A,"".concat(f.ft,"_FULFILLED"),(function(e,t){var r=t.payload;return z(z({},e),{},{access:r,isLoading:!1})})),A);var H;function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V={isLoading:!1,options:{isLoadingApplication:!1,isLoadingResource:!1,isLoadingOperation:!1,application:{data:[]},resource:{data:[]},operation:{data:[]}},permission:{data:[],meta:g.he},expandSplats:{data:[],meta:g.he}};const Y=(H={},p()(H,"".concat(f.wI,"_PENDING"),(function(e){return X(X({},e),{},{isLoading:!0})})),p()(H,"".concat(f.wI,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{permission:r,isLoading:!1})})),p()(H,"".concat(f.KD,"_PENDING"),(function(e){return X(X({},e),{},{options:X(X({},e.options),{},{isLoadingApplication:!0})})})),p()(H,"".concat(f.KD,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{options:X(X({},e.options),{},{application:r,isLoadingApplication:!1})})})),p()(H,"".concat(f.vf,"_PENDING"),(function(e){return X(X({},e),{},{options:X(X({},e.options),{},{isLoadingResource:!0})})})),p()(H,"".concat(f.vf,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{options:X(X({},e.options),{},{resource:r,isLoadingResource:!1})})})),p()(H,"".concat(f.E2,"_PENDING"),(function(e){return X(X({},e),{},{options:X(X({},e.options),{},{isLoadingOperation:!0})})})),p()(H,"".concat(f.E2,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{options:X(X({},e.options),{},{operation:r,isLoadingOperation:!1})})})),p()(H,"".concat(f.e,"_PENDING"),(function(e){return X(X({},e),{},{isLoadingExpandSplats:!0})})),p()(H,"".concat(f.e,"_FULFILLED"),(function(e,t){var r=t.payload;return X(X({},e),{},{expandSplats:r,isLoadingExpandSplats:!1})})),p()(H,"".concat(f.e0),(function(){return V})),H);var J;function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q={isLoading:!1,resourceTypes:{data:[],meta:g.he},resources:{},loadingResources:0};const $=(J={},p()(J,"".concat(f.s6,"_PENDING"),(function(e){return B(B({},e),{},{isLoading:!0})})),p()(J,"".concat(f.s6,"_FULFILLED"),(function(e,t){var r=t.payload;return B(B({},e),{},{resourceTypes:r,isLoading:!1})})),p()(J,"".concat(f.ZX,"_PENDING"),(function(e){return B(B({},e),{},{loadingResources:e.loadingResources+1})})),p()(J,"".concat(f.ZX,"_FULFILLED"),(function(e,t){var r=t.payload;return B(B({},e),{},{resources:B(B({},e.resources),{},p()({},r.links.first.split("/")[5],r.data.filter((function(e){return null!==e.value})))),loadingResources:e.loadingResources-1})})),J);var Q=new c.ZP({},[l.Z,o.ZP,(0,i.default)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),u()]);Q.register({userReducer:(0,c.Gg)(y,O),groupReducer:(0,c.Gg)(D,P),policyReducer:(0,c.Gg)(w,{policies:{data:[],meta:{count:0,limit:10,offset:0}},policy:{},isLoading:!1,isRecordLoading:!1}),roleReducer:(0,c.Gg)(C,U),accessReducer:(0,c.Gg)(M,Z),permissionReducer:(0,c.Gg)(Y,V),costReducer:(0,c.Gg)($,q),notifications:a.ee});const ee=Q.getStore()},33172:(e,t,r)=>{var n=r(93379),o=r(44554);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var i=n(o,{insert:"head",singleton:!1});if(!o.locals||e.hot.invalidate){var a=o.locals;e.hot.accept(44554,(function(){"string"==typeof(o=(o=r(44554)).__esModule?o.default:o)&&(o=[[e.id,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.locals)?(a=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},77258:(e,t,r)=>{var n=r(93379),o=r(69244);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var i=n(o,{insert:"head",singleton:!1});if(!o.locals||e.hot.invalidate){var a=o.locals;e.hot.accept(69244,(function(){"string"==typeof(o=(o=r(69244)).__esModule?o.default:o)&&(o=[[e.id,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.locals)?(a=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},60306:e=>{"use strict";e.exports=JSON.parse('{"_j":{"Sy":"/","Xx":"/groups","BC":"/groups/add-group","jz":"/groups/removegroups","M5":{"E":"/groups/edit/:id"},"fe":"/groups/detail/:uuid","Rx":"/groups/detail/:uuid/members/edit","Xi":"/groups/detail/:uuid/roles/edit","Se":"/groups/detail/:uuid/members/remove","ub":"/groups/detail/:uuid/roles/remove","mh":"/groups/detail/:uuid/roles","Pc":"/groups/detail/:uuid/roles/add_roles","C1":"/groups/detail/:uuid/members","dZ":"/groups/detail/:uuid/members/add_members","T1":"/groups/detail/:groupUuid/roles/detail/:uuid","uJ":"/roles","EM":"/roles/add-role","fV":"/roles/remove/:id","ld":"/roles/edit/:id","Fh":"/roles/detail/:uuid","W3":"/roles/detail/:uuid/role-add-permission","GL":"/roles/detail/:id/remove","Pu":"/roles/detail/:id/edit","T0":"/roles/detail/:roleId/permission/:permissionId","nu":"/roles/detail/:roleId/permission/:permissionId/edit","rC":"/users","tG":"/users/detail/:username","d$":"/my-user-access","kj":"/access-request"}}')}}]);
//# sourceMappingURL=740.338b913fb8babd9b830a.js.map
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[427],{14726:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var o=r(29439),n=r(92950),i=r.n(n),a=r(45697),s=r.n(a),c=r(334),u=r(19571),l=r(4682),d=r(58788),p=r(55140),g=r(11170);const m={metadata:{name:"monitor-sampleapp"},spec:{displayName:"Monitoring your sample application",durationMinutes:10,icon:i().createElement(g.ZP,null),description:"Now that you’ve created a sample application and added health checks, let’s monitor your application.",prerequisites:['You completed the "Getting started with a sample" quick start.'],introduction:"### This quick start shows you how to monitor your sample application.\nYou should have previously created the **sample-app** application and **nodejs-sample** deployment via the **Get started with a sample** quick start. If you haven't, you may be able to follow these tasks with any existing deployment.",tasks:[{title:"Viewing the monitoring details of your sample application",description:"### To view the details of your sample application:\n1. Go to the project your sample application was created in.\n2. In the **</> Developer** perspective, go to **Topology** view.\n3. Click on the **nodejs-sample** deployment to view its details.\n4. Click on the **Monitoring** tab in the side panel.\nYou can see context sensitive metrics and alerts in the **Monitoring** tab.",review:{instructions:"#### To verify you can view the monitoring information:\n1. Do you see a **Metrics** accordion in the side panel?\n2. Do you see a **View monitoring dashboard** link in the **Metrics** accordion?\n3. Do you see three charts in the **Metrics** accordion: **CPU Usage**, **Memory Usage** and **Receive Bandwidth**?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how you can monitor your sample app!",failed:"Try the steps again."}},{title:"Viewing your project monitoring dashboard",description:"### To view the project monitoring dashboard in the context of **nodejs-sample**:\n1. Click on the **View monitoring dashboard** link in the side panel.\n2. You can change the **Time Range** and **Refresh Interval** of the dashboard.\n3. You can change the context of the dashboard as well by clicking on the drop-down list. Select a specific workload or **All Workloads** to view the dashboard in the context of the entire project.",review:{instructions:"#### To verify that you are able to view the monitoring dashboard:\nDo you see metrics charts in the dashboard?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to view the dashboard in the context of your sample app!",failed:"Try the steps again."}},{title:"Viewing custom metrics",description:"### To view custom metrics:\n1. Click on the **Metrics** tab of the **Monitoring** page.\n2. Click the **Select Query** drop-down list to see the available queries.\n3. Click on **Filesystem Usage** from the list to run the query.",review:{instructions:"#### Verify you can see the chart associated with the query:\nDo you see a chart displayed with filesystem usage for your project?  Note: select **Custom Query** from the dropdown to create and run a custom query utilizing PromQL.\n",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to run a query!",failed:"Try the steps again."}}],conclusion:"You have learned how to access workload monitoring and metrics!",nextQuickStart:[""]}},f=function(){var e=(0,n.useState)(!1),t=(0,o.Z)(e,2),r=t[0],a=t[1],s=(0,p.Z)(),u=(0,c.useHistory)(),g=s.quickStarts,f=(0,n.useState)(!1),h=(0,o.Z)(f,2),y=h[0],O=h[1];(0,n.useEffect)((function(){var e="true"===localStorage.getItem("quickstarts:enabled");e&&(s.quickStarts.set("monitor-sampleapp",[m]),O(e))}),[]);var E={margin:"24px 0px 24px 24px"};return i().createElement(i().Fragment,null,y&&i().createElement(i().Fragment,null,i().createElement(d.Button,{onClick:function(){r?g.toggle():g.toggle("monitor-sampleapp",{}),a(!r)},variant:"primary",style:E},"Trigger my quickstart"),i().createElement(d.Button,{onClick:function(){u.push(l.Z["quickstarts-test"])},variant:"primary",style:E},"Trigger my catalog")))};var h=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(28),r.e(180),r.e(234),r.e(227),r.e(877),r.e(657),r.e(461),r.e(662),r.e(738),r.e(661),r.e(705),r.e(459)]).then(r.bind(r,45459))})),y=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(28),r.e(180),r.e(234),r.e(227),r.e(877),r.e(657),r.e(461),r.e(662),r.e(738),r.e(514)]).then(r.bind(r,61514))})),O=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(28),r.e(180),r.e(877),r.e(657),r.e(662),r.e(661),r.e(791)]).then(r.bind(r,11791))})),E=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(822)]).then(r.bind(r,39822))})),v=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(234),r.e(128)]).then(r.bind(r,8128))})),b=(0,n.lazy)((function(){return r.e(844).then(r.bind(r,53844))})),L=function(){return i().createElement(n.Suspense,{fallback:i().createElement(u.zx,null)},i().createElement(f,null),i().createElement(c.Switch,null,i().createElement(c.Route,{path:l.Z.groups,component:h}),i().createElement(c.Route,{path:l.Z.roles,component:y}),i().createElement(c.Route,{path:l.Z.users,component:O}),i().createElement(c.Route,{path:l.Z["my-user-access"],component:E}),i().createElement(c.Route,{path:l.Z["access-requests"],component:v}),"true"===localStorage.getItem("quickstarts:enabled")&&i().createElement(c.Route,{path:l.Z["quickstarts-test"],component:b}),i().createElement(c.Route,null,i().createElement(c.Redirect,{to:l.Z.users}))))},P=r(86350),_=r(96533),R=r(19232),D=r(28216),w=r(41387),j=r(36580),Z={403:w.Z},I={"/users":"RBAC Users","/groups":"RBAC Groups"},S=function(e){var t=e.children,r=(0,D.useSelector)((function(e){return e.errorReducer.errorCode})),o=(0,c.useLocation)().pathname,a=(0,D.useDispatch)();if((0,n.useEffect)((function(){r&&a({type:j.j5,payload:void 0})}),[o]),r){var s=Z[r],u=I[Object.keys(I).find((function(e){return o.includes(e)}))]||"RBAC";return i().createElement(s,{serviceName:u})}return t};S.propTypes={children:s().node.isRequired};const F=S;var G=function(){var e=(0,n.useState)(!1),t=(0,o.Z)(e,2),r=t[0],a=t[1],s=(0,c.useHistory)();return(0,n.useEffect)((function(){insights.chrome.init(),insights.chrome.registerModule("access-requests"),!insights.chrome.getApp()&&s.push("/my-user-access"),insights.chrome.auth.getUser().then((function(){return a(!0)})),insights.chrome.identifyApp(insights.chrome.getApp());var e=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&s.push("/".concat(e.navId))}));return function(){"function"==typeof e&&e()}})),r?i().createElement(R.Z,{locale:"en"},i().createElement(i().Fragment,null,i().createElement(_.ZP,null),i().createElement(F,null,i().createElement(P.Z,{style:{marginLeft:0,padding:0}},i().createElement(L,null))))):i().createElement(u.zx,null)};G.propTypes={history:s().object};const T=G},61338:(e,t,r)=>{"use strict";r.d(t,{he:()=>a,eX:()=>s,wy:()=>c,vE:()=>u,rj:()=>l,Zc:()=>d,_V:()=>p,Vh:()=>g,oG:()=>m});var o=r(4942);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a={limit:20,offset:0,itemCount:0},s={limit:10,offset:0,itemCount:0},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.limit,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.limit;return(e-1)*t},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=new URLSearchParams,o=parseInt(r.get("per_page")),n=parseInt(r.get("page"));(isNaN(o)||o<=0)&&(o=t.limit,r.set("per_page",o)),(isNaN(n)||n<=0)&&(n=1,r.set("page",n));var s=u(n,o);return e.replace({pathname:e.location.pathname,search:r.toString()}),i(i({},t),{},{limit:o,offset:s})},d=function(e){var t=new URLSearchParams(e.location.search);return t.get("per_page")&&t.get("per_page")},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0===e||t>e},g=function(e,t){return e-e%t},m=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=new URLSearchParams(e.location.search);o.set("per_page",t),o.set("page",c(t,r)),e.replace({pathname:e.location.pathname,search:o.toString()})}},19571:(e,t,r)=>{"use strict";r.d(t,{Wi:()=>f,zx:()=>h,h2:()=>y,Vj:()=>O,Z0:()=>E});var o=r(87462),n=r(93433),i=r(45987),a=r(92950),s=r.n(a),c=r(45697),u=r.n(c),l=r(58788),d=r(24561),p=r(56455),g=["items"],m=["showDivider"],f=function(e){var t=e.items,r=(0,i.Z)(e,g);return s().createElement(a.Fragment,null,s().createElement(l.DataList,{"aria-label":"datalist-placeholder"},(0,n.Z)(Array(t)).map((function(e,t){return s().createElement(l.DataListItem,{key:t,"aria-labelledby":"datalist-item-placeholder"},s().createElement(l.DataListItemRow,{"aria-label":"datalist-item-placeholder-row"},s().createElement(l.DataListItemCells,{dataListCells:[s().createElement(l.DataListCell,{key:"1"},s().createElement(p.Z,(0,o.Z)({size:p.i.lg},r)))]})))}))))};f.propTypes={items:u().number},f.defaultProps={items:5};var h=function(e){return s().createElement("div",null,s().createElement(d.ZP,(0,o.Z)({height:16,width:300,speed:2},e),s().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),s().createElement(f,null))},y=function(e){return s().createElement("div",{style:{width:"200px",height:"21px"}},s().createElement(d.ZP,(0,o.Z)({height:21,width:200,speed:2},e),s().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"21"})))},O=function(e){e.showDivider;var t=(0,i.Z)(e,m);return s().createElement("div",{style:{width:"200px",height:"18px"}},s().createElement(d.ZP,(0,o.Z)({height:18,width:200,speed:2},t),s().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"200",height:"18"})))};O.propTypes={showDivider:u().any};var E=function(){return s().createElement(d.ZP,{height:32,width:160,speed:2},s().createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"160",height:"32"}))}},36580:(e,t,r)=>{"use strict";r.d(t,{_h:()=>o,kL:()=>n,eb:()=>i,Po:()=>a,t3:()=>s,v9:()=>c,WH:()=>u,xD:()=>l,MF:()=>d,rz:()=>p,Lp:()=>g,W2:()=>m,eJ:()=>f,Ef:()=>h,nI:()=>y,hi:()=>O,b9:()=>E,Nr:()=>v,Yc:()=>b,fG:()=>L,XS:()=>P,Vh:()=>_,as:()=>R,qj:()=>D,Y2:()=>w,Sw:()=>j,kg:()=>Z,ft:()=>I,wI:()=>S,KD:()=>F,vf:()=>G,E2:()=>T,s6:()=>N,ZX:()=>k,e:()=>U,e0:()=>C,j5:()=>A});var o="FETCH_GROUP",n="FETCH_SYSTEM_GROUP",i="FETCH_GROUPS",a="ADD_GROUP",s="UPDATE_GROUP",c="REMOVE_GROUPS",u="FETCH_USERS",l="UPDATE_USERS_FILTERS",d="ADD_ROLE",p="FETCH_ROLE",g="FETCH_ROLES",m="REMOVE_ROLE",f="FETCH_ROLES_FOR_WIZARD",h="FETCH_GROUP_POLICIES",y="FETCH_POLICY",O="RESET_SELECTED_GROUP",E="REMOVE_MEMBERS_FROM_GROUP",v="ADD_MEMBERS_TO_GROUP",b="REMOVE_ROLES_FROM_GROUP",L="ADD_ROLES_TO_GROUP",P="FETCH_ROLES_FOR_GROUP",_="FETCH_MEMBERS_FOR_GROUP",R="FETCH_ADD_ROLES_FOR_GROUP",D="FETCH_ROLE_FOR_USER",w="FETCH_ROLE_FOR_PRINCIPAL",j="UPDATE_ROLE",Z="PATCH_ROLE",I="GET_PRINCIPAL_ACCESS",S="LIST_PERMISSIONS",F="LIST_APPLICATION_OPTIONS",G="LIST_RESOURCE_OPTIONS",T="LIST_OPERATION_OPTIONS",N="GET_RESOURCE_DEFINITIONS",k="GET_RESOURCE",U="EXPAND_SPLATS",C="RESET_EXPAND_SPLATS",A="API_ERROR"},4682:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const o={rbac:"/",groups:"/groups","add-group":"/groups/add-group","remove-group":"/groups/removegroups","group-edit":{path:"/groups/edit/:id",description:"Edit single group"},"group-detail":"/groups/detail/:uuid","group-detail-members-edit":"/groups/detail/:uuid/members/edit","group-detail-roles-edit":"/groups/detail/:uuid/roles/edit","group-detail-members-remove":"/groups/detail/:uuid/members/remove","group-detail-roles-remove":"/groups/detail/:uuid/roles/remove","group-detail-roles":"/groups/detail/:uuid/roles","group-add-roles":"/groups/detail/:uuid/roles/add_roles","group-detail-members":"/groups/detail/:uuid/members","group-add-members":"/groups/detail/:uuid/members/add_members","group-detail-role-detail":"/groups/detail/:groupUuid/roles/detail/:uuid",roles:"/roles","add-role":"/roles/add-role","remove-role":"/roles/remove/:id","edit-role":"/roles/edit/:id","role-detail":"/roles/detail/:uuid","role-add-permission":"/roles/detail/:uuid/role-add-permission","role-detail-remove":"/roles/detail/:id/remove","role-detail-edit":"/roles/detail/:id/edit","role-detail-permission":"/roles/detail/:roleId/permission/:permissionId","role-detail-permission-edit":"/roles/detail/:roleId/permission/:permissionId/edit",users:"/users","user-detail":"/users/detail/:username","my-user-access":"/my-user-access","access-requests":"/access-requests","access-requests-detail":"/access-requests/:requestId","quickstarts-test":"/quickstarts-test"}},72654:(e,t,r)=>{"use strict";r.d(t,{g:()=>te,Z:()=>oe});var o,n=r(92950),i=r(57283),a=r.n(i),s=r(84885),c=r(83215),u=r(18546),l=r(94500),d=r.n(l),p=r(53894),g=r(4942),m=r(36580),f=r(61338);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={selectedUser:{},isUserDataLoading:!1,users:{meta:f.he,filters:{status:["Active"]},pagination:y(y({},f.he),{},{redirected:!1})}};const E=(o={},(0,g.Z)(o,"".concat(m.WH,"_PENDING"),(function(e){return y(y({},e),{},{isUserDataLoading:!0,users:y(y({},e.users),{},{pagination:y(y({},e.users.pagination),{},{redirected:!1})})})})),(0,g.Z)(o,"".concat(m.WH,"_FULFILLED"),(function(e,t){var r=t.payload;return y(y({},e),{},{users:y(y({},e.users),r),isUserDataLoading:!1})})),(0,g.Z)(o,m.xD,(function(e,t){var r=t.payload;return y(y({},e),{},{users:y(y({},e.users),{},{filters:r})})})),o);var v,b=r(57557),L=r.n(b);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={groups:{data:[],meta:f.he,filters:{},pagination:_(_({},f.he),{},{count:0})},selectedGroup:{addRoles:{},members:{meta:f.he},pagination:f.he},isLoading:!1,isRecordLoading:!1},D=function(e){return _(_({},e),{},{error:void 0,isLoading:!0})};const w=(v={},(0,g.Z)(v,"".concat(m.eb,"_PENDING"),D),(0,g.Z)(v,"".concat(m.eb,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{groups:r,isLoading:!1})})),(0,g.Z)(v,"".concat(m.kL,"_PENDING"),D),(0,g.Z)(v,"".concat(m.kL,"_FULFILLED"),(function(e,t){var r,o,n=t.payload;return _(_({},e),{},{systemGroup:null==n||null===(r=n.data)||void 0===r||null===(o=r.filter((function(e){return null==e?void 0:e.platform_default})))||void 0===o?void 0:o[0]})})),(0,g.Z)(v,"".concat(m._h,"_PENDING"),(function(e){return _(_({},e),{},{isRecordLoading:!0,selectedGroup:_(_({},e.selectedGroup),{},{error:void 0,loaded:!1})})})),(0,g.Z)(v,"".concat(m._h,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{isRecordLoading:!1},r.error?r:{groups:_(_({},e.groups),{},{data:e.groups.data.map((function(e){return _(_({},e),r.uuid===e.uuid&&_(_({},r),{},{loaded:!0}))}))}),selectedGroup:_(_(_({},e.selectedGroup),{},{members:_(_({},e.selectedGroup.members),{},{data:r.principals})},L()(r,["principals","roles"])),{},{loaded:!0,pagination:_(_({},e.selectedGroup.pagination),{},{count:r.roleCount,offset:0})})})})),(0,g.Z)(v,"".concat(m.XS,"_PENDING"),(function(e){return _(_({},e),{},{isRecordRolesLoading:!0,selectedGroup:_(_({},e.selectedGroup),{},{error:void 0,loaded:!1})})})),(0,g.Z)(v,"".concat(m.XS,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{isRecordRolesLoading:!1,selectedGroup:_(_(_({},e.selectedGroup),r.error?r:{roles:r.data,pagination:r.meta}),{},{loaded:!0})})})),(0,g.Z)(v,"".concat(m.Vh,"_PENDING"),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _(_({},e),{},{selectedGroup:_(_({},e.selectedGroup||{}),{},{members:{isLoading:!0}})})})),(0,g.Z)(v,"".concat(m.Vh,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{selectedGroup:_(_({},e.selectedGroup||{}),{},{members:_({isLoading:!1},r.error?{}:r)},r.error?r:{})})})),(0,g.Z)(v,"".concat(m.as,"_PENDING"),(function(e){return _(_({},e),{},{selectedGroup:_(_({},e.selectedGroup),{},{addRoles:{loaded:!1}})})})),(0,g.Z)(v,"".concat(m.as,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{selectedGroup:_(_({},e.selectedGroup),{},{addRoles:_(_({},r.error?e.addRoles:{roles:r.data,pagination:r.meta}),{},{loaded:!0})})},r.error?r:{})})),(0,g.Z)(v,m.hi,(function(e){return _(_({},e),{},{selectedGroup:void 0})})),v);var j;function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const S=(j={},(0,g.Z)(j,"".concat(m.Ef,"_PENDING"),(function(e){return I(I({},e),{},{isLoading:!0})})),(0,g.Z)(j,"".concat(m.Ef,"_FULFILLED"),(function(e,t){var r=t.payload;return I(I({},e),{},{policies:r,isLoading:!1})})),(0,g.Z)(j,"".concat(m.nI,"_PENDING"),(function(e){return I(I({},e),{},{isRecordLoading:!0})})),(0,g.Z)(j,"".concat(m.nI,"_FULFILLED"),(function(e,t){var r=t.payload;return I(I({},e),{},{selectedPolicy:r,isRecordLoading:!1})})),j);var F;function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N={isLoading:!1,isRecordLoading:!1,roles:{data:[],meta:f.he,filters:{},pagination:T(T({},f.he),{},{count:0})},rolesForWizard:{data:[],meta:f.he},selectedRole:{}},k=function(e){return T(T({},e),{},{isRecordLoading:!0,error:void 0})},U=function(e,t){var r=t.payload;return T(T({},e),{},{rolesWithAccess:T(T({},e.rolesWithAccess),{},(0,g.Z)({},r.uuid,r)),isRecordLoading:!1})};const C=(F={},(0,g.Z)(F,"".concat(m.rz,"_FULFILLED"),(function(e,t){var r=t.payload;return T(T(T({},e),r.error?r:{selectedRole:r}),{},{isRecordLoading:!1})})),(0,g.Z)(F,"".concat(m.rz,"_PENDING"),k),(0,g.Z)(F,"".concat(m.Lp,"_FULFILLED"),(function(e,t){var r=t.payload;return T(T(T({},e),r.error?r:{roles:T(T({},e.roles),r)}),{},{isLoading:!1})})),(0,g.Z)(F,"".concat(m.Lp,"_PENDING"),(function(e){return T(T({},e),{},{isLoading:!0,error:void 0})})),(0,g.Z)(F,"".concat(m.qj,"_FULFILLED"),U),(0,g.Z)(F,"".concat(m.qj,"_PENDING"),k),(0,g.Z)(F,"".concat(m.Y2,"_FULFILLED"),U),(0,g.Z)(F,"".concat(m.Y2,"_PENDING"),k),(0,g.Z)(F,"".concat(m.eJ,"_FULFILLED"),(function(e,t){var r=t.payload;return T(T({},e),{},{rolesForWizard:r,isWizardLoading:!1})})),(0,g.Z)(F,"".concat(m.eJ,"_PENDING"),(function(e){return T(T({},e),{},{isWizardLoading:!0})})),F);var A;function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={isLoading:!1,access:{data:[],meta:f.he}};const H=(A={},(0,g.Z)(A,"".concat(m.ft,"_PENDING"),(function(e){return q(q({},e),{},{isLoading:!0})})),(0,g.Z)(A,"".concat(m.ft,"_FULFILLED"),(function(e,t){var r=t.payload;return q(q({},e),{},{access:r,isLoading:!1})})),A);var z;function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W={isLoading:!1,options:{isLoadingApplication:!1,isLoadingResource:!1,isLoadingOperation:!1,application:{data:[]},resource:{data:[]},operation:{data:[]}},permission:{data:[],meta:f.he},expandSplats:{data:[],meta:f.he}};const B=(z={},(0,g.Z)(z,"".concat(m.wI,"_PENDING"),(function(e){return Y(Y({},e),{},{isLoading:!0})})),(0,g.Z)(z,"".concat(m.wI,"_FULFILLED"),(function(e,t){var r=t.payload;return Y(Y({},e),{},{permission:r,isLoading:!1})})),(0,g.Z)(z,"".concat(m.KD,"_PENDING"),(function(e){return Y(Y({},e),{},{options:Y(Y({},e.options),{},{isLoadingApplication:!0})})})),(0,g.Z)(z,"".concat(m.KD,"_FULFILLED"),(function(e,t){var r=t.payload;return Y(Y({},e),{},{options:Y(Y({},e.options),{},{application:r,isLoadingApplication:!1})})})),(0,g.Z)(z,"".concat(m.vf,"_PENDING"),(function(e){return Y(Y({},e),{},{options:Y(Y({},e.options),{},{isLoadingResource:!0})})})),(0,g.Z)(z,"".concat(m.vf,"_FULFILLED"),(function(e,t){var r=t.payload;return Y(Y({},e),{},{options:Y(Y({},e.options),{},{resource:r,isLoadingResource:!1})})})),(0,g.Z)(z,"".concat(m.E2,"_PENDING"),(function(e){return Y(Y({},e),{},{options:Y(Y({},e.options),{},{isLoadingOperation:!0})})})),(0,g.Z)(z,"".concat(m.E2,"_FULFILLED"),(function(e,t){var r=t.payload;return Y(Y({},e),{},{options:Y(Y({},e.options),{},{operation:r,isLoadingOperation:!1})})})),(0,g.Z)(z,"".concat(m.e,"_PENDING"),(function(e){return Y(Y({},e),{},{isLoadingExpandSplats:!0})})),(0,g.Z)(z,"".concat(m.e,"_FULFILLED"),(function(e,t){var r=t.payload;return Y(Y({},e),{},{expandSplats:r,isLoadingExpandSplats:!1})})),(0,g.Z)(z,"".concat(m.e0),(function(){return W})),z);var X;function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J={isLoading:!1,resourceTypes:{data:[],meta:f.he},resources:{},loadingResources:0};const $=(X={},(0,g.Z)(X,"".concat(m.s6,"_PENDING"),(function(e){return Q(Q({},e),{},{isLoading:!0})})),(0,g.Z)(X,"".concat(m.s6,"_FULFILLED"),(function(e,t){var r=t.payload;return Q(Q({},e),{},{resourceTypes:r,isLoading:!1})})),(0,g.Z)(X,"".concat(m.ZX,"_PENDING"),(function(e){return Q(Q({},e),{},{loadingResources:e.loadingResources+1})})),(0,g.Z)(X,"".concat(m.ZX,"_FULFILLED"),(function(e,t){var r=t.payload;return Q(Q({},e),{},{resources:Q(Q({},e.resources),{},(0,g.Z)({},r.links.first.split("/")[5],r.data.filter((function(e){return null!==e.value})))),loadingResources:e.loadingResources-1})})),X),ee=(0,g.Z)({},m.j5,(function(e,t){return{errorCode:t.payload}}));var te=(0,n.createContext)({getRegistry:function(){}}),re=new u.ZP({},[p.Z,a(),(0,s.default)({errorTitleKey:["statusText","message"],errorDescriptionKey:["errors[0].detail","errors","stack"]}),d()]);re.register({userReducer:(0,u.Gg)(E,O),groupReducer:(0,u.Gg)(w,R),policyReducer:(0,u.Gg)(S,{policies:{data:[],meta:{count:0,limit:10,offset:0}},policy:{},isLoading:!1,isRecordLoading:!1}),roleReducer:(0,u.Gg)(C,N),accessReducer:(0,u.Gg)(H,M),permissionReducer:(0,u.Gg)(B,W),costReducer:(0,u.Gg)($,J),errorReducer:(0,u.Gg)(ee),notifications:c.ee});const oe=re},65088:()=>{}}]);
//# sourceMappingURL=../sourcemaps/427.a7b2dc2a0161d3db3ac7abceefe1fbd2.js.map
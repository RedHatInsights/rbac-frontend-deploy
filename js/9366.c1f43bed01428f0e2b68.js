"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9366],{10904:(e,t,a)=>{a.d(t,{Z:()=>te});var r=a(28416),s=a.n(r),i=a(86706),o=a(49628),n=a(86601),l=a(12849),c=a(77044),p=a(13563),d=a(2981),u=a(42294),m=a(32816),h=a(57466),y=a(87009),f=a(62012),g=a(55140),v=a(14289),Z=a(31055),b=a(11170);const w={metadata:{name:"monitor-sampleapp"},spec:{displayName:"Monitoring your sample application",durationMinutes:10,icon:s().createElement(b.ZP,null),description:"Now that you’ve created a sample application and added health checks, let’s monitor your application.",prerequisites:['You completed the "Getting started with a sample" quick start.'],introduction:"### This quick start shows you how to monitor your sample application.\nYou should have previously created the **sample-app** application and **nodejs-sample** deployment via the **Get started with a sample** quick start. If you haven't, you may be able to follow these tasks with any existing deployment.",tasks:[{title:"Viewing the monitoring details of your sample application",description:"### To view the details of your sample application:\n1. Go to the project your sample application was created in.\n2. In the **</> Developer** perspective, go to **Topology** view.\n3. Click on the **nodejs-sample** deployment to view its details.\n4. Click on the **Monitoring** tab in the side panel.\nYou can see context sensitive metrics and alerts in the **Monitoring** tab.",review:{instructions:"#### To verify you can view the monitoring information:\n1. Do you see a **Metrics** accordion in the side panel?\n2. Do you see a **View monitoring dashboard** link in the **Metrics** accordion?\n3. Do you see three charts in the **Metrics** accordion: **CPU Usage**, **Memory Usage** and **Receive Bandwidth**?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how you can monitor your sample app!",failed:"Try the steps again."}},{title:"Viewing your project monitoring dashboard",description:"### To view the project monitoring dashboard in the context of **nodejs-sample**:\n1. Click on the **View monitoring dashboard** link in the side panel.\n2. You can change the **Time Range** and **Refresh Interval** of the dashboard.\n3. You can change the context of the dashboard as well by clicking on the drop-down list. Select a specific workload or **All Workloads** to view the dashboard in the context of the entire project.",review:{instructions:"#### To verify that you are able to view the monitoring dashboard:\nDo you see metrics charts in the dashboard?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to view the dashboard in the context of your sample app!",failed:"Try the steps again."}},{title:"Viewing custom metrics",description:"### To view custom metrics:\n1. Click on the **Metrics** tab of the **Monitoring** page.\n2. Click the **Select Query** drop-down list to see the available queries.\n3. Click on **Filesystem Usage** from the list to run the query.",review:{instructions:"#### Verify you can see the chart associated with the query:\nDo you see a chart displayed with filesystem usage for your project?  Note: select **Custom Query** from the dropdown to create and run a custom query utilizing PromQL.\n",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to run a query!",failed:"Try the steps again."}}],conclusion:"You have learned how to access workload monitoring and metrics!",nextQuickStart:[""]}};var M=a(60423),S=a(25387),D=a(2550);const G=()=>{const e=(0,S.YB)(),[t,a]=(0,r.useState)(!1),i=(0,g.Z)(),o=(0,f.useNavigate)(),n=s().useContext(M.QuickStartContext),{quickStarts:l}=i,[c,p]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e="true"===localStorage.getItem("quickstarts:enabled");e&&(l.set("monitor-sampleapp",[w]),p(e))}),[]),(0,r.useEffect)((()=>{a(""!==n.activeQuickStartID)}),[n]);const d={margin:"24px 0px 24px 24px"};return s().createElement(s().Fragment,null,c&&s().createElement(s().Fragment,null,s().createElement(Z.Button,{onClick:()=>{t&!!n.activeQuickStartID?l.toggle():l.toggle("monitor-sampleapp",{}),a(!t)},variant:"primary",style:d,isDisabled:t},e.formatMessage(D.Z.triggerMyQuickstart)),s().createElement(Z.Button,{onClick:()=>{o(v.Z["quickstarts-test"].link)},variant:"primary",style:d},e.formatMessage(D.Z.triggerMyCatalog))))},R=({children:e,path:t})=>{const a=(0,f.useOutletContext)();return(0,r.cloneElement)(e,{...a,...t&&a?.[t]||{}})};var k=a(64756),E=a(65220);const T=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(5453),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(3539),a.e(8956),a.e(5902),a.e(8173),a.e(5173),a.e(4282),a.e(9308)]).then(a.bind(a,56068)))),P=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(3539),a.e(8956),a.e(880),a.e(5902),a.e(8173),a.e(5173),a.e(8443)]).then(a.bind(a,27997)))),j=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4229),a.e(214),a.e(5904),a.e(8444),a.e(7975)]).then(a.bind(a,92830)))),z=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(3539),a.e(8956),a.e(880),a.e(5902),a.e(7516)]).then(a.bind(a,46944)))),A=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(2744),a.e(5183),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(4229),a.e(3539),a.e(214),a.e(8956),a.e(880),a.e(5902),a.e(7043),a.e(4269),a.e(1848),a.e(4965)]).then(a.bind(a,16920)))),V=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(236),a.e(4753),a.e(8340),a.e(2744),a.e(364),a.e(3006),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(4229),a.e(3539),a.e(214),a.e(8956),a.e(5904),a.e(8444),a.e(9631),a.e(1325),a.e(4503),a.e(2232),a.e(5950),a.e(9545),a.e(247),a.e(8972),a.e(2824),a.e(8613),a.e(1124)]).then(a.bind(a,56280)))),_=(0,r.lazy)((()=>Promise.all([a.e(4291),a.e(2372),a.e(4753),a.e(2263),a.e(9389),a.e(9631),a.e(6916)]).then(a.bind(a,94387)))),q=(0,r.lazy)((()=>Promise.all([a.e(4380),a.e(4229),a.e(214),a.e(7043),a.e(8444),a.e(4269),a.e(5781)]).then(a.bind(a,55781)))),x=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(236),a.e(4753),a.e(8340),a.e(2744),a.e(364),a.e(3006),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(4229),a.e(3539),a.e(214),a.e(8956),a.e(5904),a.e(8444),a.e(9631),a.e(1325),a.e(4503),a.e(2232),a.e(5950),a.e(9545),a.e(247),a.e(8972),a.e(2824),a.e(6662)]).then(a.bind(a,48701)))),C=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(8956),a.e(5902),a.e(1848),a.e(689)]).then(a.bind(a,23444)))),I=(0,r.lazy)((()=>Promise.all([a.e(4291),a.e(2372),a.e(4753),a.e(8340),a.e(2263),a.e(9389),a.e(4444),a.e(4229),a.e(214),a.e(8956),a.e(5904),a.e(8444),a.e(9631),a.e(1325),a.e(4503),a.e(5950),a.e(4792)]).then(a.bind(a,74517)))),B=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(3539),a.e(8956),a.e(880),a.e(5902),a.e(8972),a.e(1439),a.e(1276)]).then(a.bind(a,7841)))),F=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(2744),a.e(5183),a.e(5376),a.e(8826),a.e(4380),a.e(4229),a.e(214),a.e(8956),a.e(5904),a.e(5902),a.e(7043),a.e(8444),a.e(8972),a.e(1439),a.e(2954)]).then(a.bind(a,55073)))),U=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(236),a.e(4753),a.e(8340),a.e(364),a.e(3854),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(4229),a.e(3539),a.e(214),a.e(8956),a.e(8444),a.e(9631),a.e(8173),a.e(1325),a.e(4503),a.e(2232),a.e(5950),a.e(5173),a.e(9545),a.e(4282),a.e(8094),a.e(8613),a.e(817)]).then(a.bind(a,86294)))),Y=(0,r.lazy)((()=>Promise.all([a.e(4291),a.e(2372),a.e(4753),a.e(8340),a.e(2263),a.e(9389),a.e(4444),a.e(8956),a.e(9631),a.e(1325),a.e(6182)]).then(a.bind(a,65966)))),L=(0,r.lazy)((()=>Promise.all([a.e(4380),a.e(4229),a.e(214),a.e(4269),a.e(4433)]).then(a.bind(a,44433)))),N=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(4229),a.e(3539),a.e(214),a.e(7043),a.e(4269),a.e(8173),a.e(4503),a.e(8094),a.e(3164)]).then(a.bind(a,86009)))),Q=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(4229),a.e(3539),a.e(214),a.e(880),a.e(7043),a.e(4269),a.e(247),a.e(3546)]).then(a.bind(a,91670)))),W=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(5904),a.e(880),a.e(9698)]).then(a.bind(a,92057)))),H=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(4229),a.e(3539),a.e(214),a.e(5904),a.e(7043),a.e(4269),a.e(2232),a.e(6968)]).then(a.bind(a,58105)))),K=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(3854),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(4229),a.e(3539),a.e(8173),a.e(5173),a.e(4282),a.e(6905)]).then(a.bind(a,84620)))),O=(0,r.lazy)((()=>Promise.all([a.e(9121),a.e(1088),a.e(4291),a.e(6043),a.e(2372),a.e(3096),a.e(5453),a.e(8718),a.e(9389),a.e(4444),a.e(5376),a.e(8826),a.e(7440),a.e(4380),a.e(4229),a.e(3539),a.e(5904),a.e(880),a.e(1628)]).then(a.bind(a,62136)))),J=(0,r.lazy)((()=>Promise.all([a.e(4380),a.e(4229),a.e(3539),a.e(214),a.e(7043),a.e(4269),a.e(9110)]).then(a.bind(a,29110)))),X=(0,r.lazy)((()=>a.e(5871).then(a.bind(a,65871)))),$=(e=[])=>e.map((({path:e,element:t,childRoutes:a,elementProps:r})=>s().createElement(f.Route,{key:e,path:e,element:s().createElement(R,{path:e},s().createElement(t,{...r}))},$(a)))),ee=()=>{const e=(0,f.useLocation)(),{updateDocumentTitle:t}=(0,g.Z)(),a=(0,E.useFlag)("platform.rbac.group-service-accounts");(0,r.useEffect)((()=>{const a=Object.values(v.Z).find((t=>!!(0,f.matchPath)({path:t.path,end:!0},e.pathname)));a?.title&&t(`${a.title} - User Access`)}),[e.pathname,t]);const i=(({enableServiceAccounts:e})=>[{path:v.Z["user-detail"].path,element:P,childRoutes:[{path:v.Z["add-user-to-group"].path,element:j},{path:v.Z["user-add-group-roles"].path,element:H}]},{path:v.Z.users.path,element:T},{path:v.Z["role-detail"].path,element:A,childRoutes:[{path:v.Z["role-detail-remove"].path,element:q},{path:v.Z["role-detail-edit"].path,element:_},{path:v.Z["role-add-permission"].path,element:x}]},{path:v.Z["role-detail-permission"].path,element:C,childRoutes:[{path:v.Z["role-detail-permission-edit"].path,element:I}]},{path:v.Z.roles.path,element:z,childRoutes:[{path:v.Z["add-role"].path,element:V},{path:v.Z["remove-role"].path,element:q},{path:v.Z["edit-role"].path,element:_}]},{path:v.Z["group-detail-role-detail"].path,element:A},{path:v.Z["group-detail"].path,element:F,childRoutes:[{path:v.Z["group-detail"].path,element:({groupId:e})=>s().createElement(f.Navigate,{to:(0,k.n)(v.Z["group-detail-roles"].link).replace(":groupId",e)})},{path:v.Z["group-detail-roles"].path,element:Q,childRoutes:[{path:v.Z["group-roles-edit-group"].path,element:Y},{path:v.Z["group-roles-remove-group"].path,element:L},{path:v.Z["group-add-roles"].path,element:H}]},{path:v.Z["group-detail-members"].path,element:N,childRoutes:[{path:v.Z["group-members-edit-group"].path,element:Y},{path:v.Z["group-members-remove-group"].path,element:L},{path:v.Z["group-add-members"].path,element:K}]},...e?[{path:v.Z["group-detail-service-accounts"].path,element:W,childRoutes:[{path:v.Z["group-service-accounts-edit-group"].path,element:Y},{path:v.Z["group-service-accounts-remove-group"].path,element:J},{path:v.Z["group-add-service-account"].path,element:O}]}]:[]]},{path:v.Z.groups.path,element:B,childRoutes:[{path:v.Z["add-group"].path,element:U},{path:v.Z["edit-group"].path,element:Y},{path:v.Z["remove-group"].path,element:L}]},..."true"===localStorage.getItem("quickstarts:enabled")?[{path:v.Z["quickstarts-test"].path,element:X}]:[]])({enableServiceAccounts:a}),o=(0,r.useMemo)((()=>$(i)),[i]);return s().createElement(r.Suspense,{fallback:s().createElement(l.zx,null)},s().createElement(G,null),s().createElement(f.Routes,null,o,s().createElement(f.Route,{path:"*",element:s().createElement(f.Navigate,{to:(0,k.n)(v.Z.users.link)})})))},te=()=>{const e=(0,i.useDispatch)(),t=(0,y.Z)();return(0,r.useEffect)((()=>()=>{e((0,d.a)(h.p.users.filters)),e((0,c.Pu)(u.I.groups.filters)),e((0,p.ys)(m.G.roles.filters))}),[]),t.ready?s().createElement(n.Z.Provider,{value:{...t}},s().createElement(o.Z,null,s().createElement("section",{className:"rbac-c-root pf-v5-c-page__main-section pf-v5-u-m-0 pf-v5-u-p-0"},s().createElement(ee,null)))):s().createElement(l.zx,null)}},60167:(e,t,a)=>{a.d(t,{S:()=>r}),a(28416),a(86706),a(19109),a(10904),a(2034);const r="en"},94504:(e,t,a)=>{a.d(t,{Bd:()=>y,CL:()=>p,HA:()=>f,Rp:()=>l,Wj:()=>g,bt:()=>i,dy:()=>d,gg:()=>c,mD:()=>n,nV:()=>u,nd:()=>v,vk:()=>h,w_:()=>m,yi:()=>o});var r=a(74982);const s=(0,a(75465).tP)();async function i({limit:e,offset:t,nameMatch:a,scope:i,username:o,excludeUsername:n,filters:l={},uuid:c,roleNames:p,roleDiscriminator:d,orderBy:u,platformDefault:m,adminDefault:h,system:y,options:f,usesMetaInURL:g=!1,chrome:v}){const[Z,b]=await Promise.all([s.listGroups(e,t,l.name,a,i,o,n,c,p,d,u,m,h,y,f),v?.auth?.getUser()]),w=(0,r._V)(t,Z?.meta?.count);t=w?t:(0,r.Vh)(Z.meta.count,e);let M=w?Z:await s.listGroups(e,t,l.name,a,i,o,c,p,d,u,f,y,m,h);return{...M,...g?{filters:l,pagination:{...M?.meta,offset:t,limit:e,redirected:!w}}:{},...b}}async function o(e){return await s.getGroup(e)}async function n(e){await s.updateGroup(e.uuid,e)}async function l(e){let t=await s.createGroup(e);const a=[];return e.user_list&&e.user_list.length>0&&a.push(s.addPrincipalToGroup(t.uuid,{principals:e.user_list})),e.roles_list&&e.roles_list.length>0&&a.push(s.addRoleToGroup(t.uuid,{roles:e.roles_list})),await Promise.all(a),t}async function c(e){return await Promise.all(e.map((e=>s.deleteGroup(e))))}async function p(e,t){return await s.deletePrincipalFromGroup(e,t.join(","))}async function d(e,t){return await s.addPrincipalToGroup(e,{principals:t})}async function u(e,t,{limit:a,offset:r,name:i,description:o},n={}){return await s.listRolesForGroup(e,t,void 0,i,o,void 0,void 0,a,r,"display_name",n)}async function m(e,t){return await s.addPrincipalToGroup(e,{principals:t.map((e=>({username:e.name,clientID:e.uuid,type:"service-account"})))})}async function h(e,t){return await s.deletePrincipalFromGroup(e,"",{query:{"service-accounts":t.map((({name:e})=>e)).join(",")}})}async function y(e,t={}){return await s.getPrincipalsFromGroup(e,void 0,t.username,t.limit,t.offset,t.orderBy,void 0,"service-account")}async function f(e,t){return await s.deleteRoleFromGroup(e,t.join(","))}async function g(e,t){return await s.addRoleToGroup(e,{roles:t})}async function v(e,t,a={}){return await s.getPrincipalsFromGroup(e,void 0,t,a.limit,a.offset,a.orderBy)}},19443:(e,t,a)=>{a.d(t,{DV:()=>c,Kt:()=>n,fA:()=>i,fp:()=>l,l5:()=>p,lq:()=>u,sZ:()=>m,ul:()=>d,vd:()=>o});var r=a(74982);const s=(0,a(75465).ix)();async function i(e){return await s.createRole(e)}function o({limit:e,offset:t,name:a,displayName:r,nameMatch:i,scope:o,orderBy:n="display_name",addFields:l,username:c,application:p,permission:d,options:u}){return s.listRoles(e,t,a,void 0,r,i,o,n,l,c,p,d,u)}async function n({limit:e,offset:t,filters:a={},nameMatch:i,scope:o="account",orderBy:n="display_name",addFields:l=["groups_in_count","groups_in","access"],username:c,options:p,permission:d,application:u,usesMetaInURL:m=!1,chrome:h}){const y=await s.listRoles(e,t,a.name,void 0,a.display_name,i,o,n,l,c,u,d,p),f=(0,r._V)(t,y?.meta?.count);t=f?t:(0,r.Vh)(y.meta.count,e);let{data:g,meta:v}=f?y:await s.listRoles(e,t,a.name,void 0,void 0,i,o,n,l,c,u,d,p);return{data:g,meta:v,...m?{filters:a,pagination:{...v,offset:t,limit:e,redirected:!f}}:{},...await(h?.auth?.getUser())}}async function l(e){return await s.getRole(e)}async function c(e){return await s.getRole(e,"principal")}async function p(e){return await s.deleteRole(e)}const d=async(e,t,a)=>{const{data:r}=await s.getRoleAccess(e);return s.updateRole(e,a?{...t,access:r}:t)},u=async(e,t)=>{const{data:a}=await s.getRoleAccess(e.uuid),r={...e,access:a.filter((e=>!t.includes(e.permission)))};return s.updateRole(e.uuid,{...r})},m=async(e,t)=>s.patchRole(e,t)},29301:(e,t,a)=>{a.d(t,{Aq:()=>n,GT:()=>d,Gw:()=>u,RI:()=>p,VG:()=>i,ZQ:()=>c,jl:()=>o,mh:()=>h,um:()=>l,zk:()=>m});var r=a(48623),s=a(74982);const i="bad uuid",o=e=>Object.entries(e).reduce(((e,[t,a])=>({...e,...a&&{[t]:a}})),{}),n=(0,r.Z)((e=>e())),l=(e=[],t,a=(()=>!0))=>{const r=e.filter(a);return 0!==r.length&&r.every((({uuid:e})=>t.find((t=>t.uuid===e))))||t.length>0&&null},c=(e,t)=>a=>t?[...a,...e].filter(((e,t,a)=>a.findIndex((({uuid:t})=>e.uuid===t))===t)):a.filter((t=>!e.find((({uuid:e})=>e===t.uuid)))),p=e=>e.charAt(0).toUpperCase()+e.slice(1),d=e=>{const t=new URLSearchParams;return Object.keys(e).forEach((a=>{const r=e[a];Array.isArray(r)?r.forEach((e=>e&&t.append(a,e))):r&&t.set(a,r)})),t.toString()},u=(e,t)=>{t({pathname:e.pathname,search:""},{replace:!0})},m=(e,t,a)=>({pathname:e,search:d({per_page:t.limit,page:(0,s.wy)(t.limit,t.offset),...a})}),h=e=>{const t=new Date(Date.now());return Date.parse(e)<t.setMonth(t.getMonth()-1)?"onlyDate":"relative"}},77044:(e,t,a)=>{a.d(t,{Gr:()=>M,K4:()=>h,Pu:()=>T,Rp:()=>f,W3:()=>E,WD:()=>m,WK:()=>D,Wj:()=>k,bt:()=>d,dy:()=>Z,fB:()=>u,gg:()=>v,mD:()=>g,nV:()=>w,nd:()=>G,nr:()=>R,tz:()=>b,w_:()=>S,yi:()=>y});var r=a(71079),s=a(94504),i=a(25387),o=a(29301),n=a(2550),l=a(2034),c=a(60167);const p=e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"group uuid validation"===t.source)return{error:o.VG};throw e},d=(e={})=>({type:r.eb,payload:s.bt(e)}),u=({filterValue:e,chrome:t}={})=>({type:r.AG,payload:s.bt({limit:1,...e?.length>0?{filters:{name:e},nameMatch:"partial"}:{},adminDefault:!0,chrome:t})}),m=({filterValue:e,chrome:t}={})=>({type:r.kL,payload:s.bt({limit:1,...e?.length>0?{filters:{name:e},nameMatch:"partial"}:{},platformDefault:!0,chrome:t})}),h=()=>({type:r.iE}),y=e=>({type:r._h,payload:s.yi(e).catch(p)}),f=e=>({type:r.Po,payload:s.Rp(e).catch((e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"name"===t.source)return{error:!0};throw{message:t.detail,description:t.source}}))}),g=e=>{const t=(0,i.Sn)(),a=(0,i.dp)({locale:c.S,messages:l},t);return{type:r.t3,payload:s.mD(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(n.Z.editGroupSuccessTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(n.Z.editGroupSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(n.Z.editGroupErrorTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(n.Z.editGroupErrorDescription)}}}}},v=e=>{const t=(0,i.Sn)(),a=(0,i.dp)({locale:c.S,messages:l},t);return{type:r.v9,payload:s.gg(e),meta:{notifications:{fulfilled:{variant:"success",dismissDelay:8e3,title:a.formatMessage(e.length>1?n.Z.removeGroupsSuccess:n.Z.removeGroupSuccess)},rejected:{variant:"danger",dismissDelay:8e3,title:a.formatMessage(e.length>1?n.Z.removeGroupsError:n.Z.removeGroupError)}}}}},Z=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a),p=t.length>1;return{type:r.Nr,payload:s.dy(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(p?n.Z.addGroupMembersSuccessTitle:n.Z.addGroupMemberSuccessTitle),dismissDelay:8e3,description:o.formatMessage(p?n.Z.addGroupMembersSuccessDescription:n.Z.addGroupMemberSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(p?n.Z.addGroupMemberErrorTitle:n.Z.addGroupMembersErrorTitle),dismissDelay:8e3,description:o.formatMessage(p?n.Z.addGroupMemberErrorDescription:n.Z.addGroupMembersErrorDescription)}}}}},b=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:r.b9,payload:s.CL(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.removeGroupMembersSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupMembersSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.Z.removeGroupMembersErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupMembersErrorDescription)}}}}},w=(e,t,a)=>({type:r.XS,payload:s.nV(e,!1,t,a).catch(p)}),M=(e,t)=>({type:r.HS,payload:s.Bd(e,t).catch(p)}),S=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:r.c,payload:s.w_(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.addGroupServiceAccountsSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.addGroupServiceAccountsSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.Z.addGroupServiceAccountsErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.addGroupServiceAccountsErrorDescription)}}}}},D=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:r.Jr,payload:s.vk(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.removeGroupServiceAccountsSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupServiceAccountsSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.Z.removeGroupServiceAccountsErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupServiceAccountsErrorDescription)}}}}},G=(e,t,a)=>({type:r.Vh,payload:s.nd(e,t,a).catch(p)}),R=(e,t,a)=>({type:r.as,payload:s.nV(e,!0,t,a).catch(p)}),k=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:r.fG,payload:s.Wj(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.addGroupRolesSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.addGroupRolesSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.Z.addGroupRolesErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.addGroupRolesErrorDescription)}}}}},E=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:r.Yc,payload:s.HA(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.removeGroupRolesSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupRolesSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.Z.removeGroupRolesErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupRolesErrorDescription)}}}}},T=e=>({type:r.p7,payload:e})},13563:(e,t,a)=>{a.d(t,{DV:()=>f,Kt:()=>m,fA:()=>p,fp:()=>d,hs:()=>g,l5:()=>h,lq:()=>b,sZ:()=>Z,sv:()=>y,ul:()=>v,vd:()=>u,ys:()=>w});var r=a(71079),s=a(19443),i=a(29301),o=a(25387),n=a(2550),l=a(2034),c=a(60167);const p=e=>{const t=(0,o.Sn)(),a=(0,o.dp)({locale:c.S,messages:l},t);return{type:r.MF,payload:s.fA(e),meta:{notifications:{rejected:e=>({variant:"danger",title:a.formatMessage(n.Z.createRoleErrorTitle),dismissDelay:8e3,description:e?.errors?.[0]?.detail||a.formatMessage(n.Z.createRoleErrorDescription)})}}}},d=e=>({type:r.rz,payload:s.fp(e).catch((e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"role uuid validation"===t.source)return{error:i.VG};throw e}))}),u=(e={})=>({type:r.Lp,payload:s.vd(e).catch((e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"detail"===t.source)return{error:i.VG};throw e}))}),m=(e={})=>({type:r.Lp,payload:s.Kt(e)}),h=e=>{const t=(0,o.Sn)(),a=(0,o.dp)({locale:c.S,messages:l},t);return{type:r.W2,payload:s.l5(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(n.Z.removeRoleSuccessTitle),dismissDelay:8e3,description:a.formatMessage(n.Z.removeRoleSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(n.Z.removeRoleErrorTitle),dismissDelay:8e3,description:a.formatMessage(n.Z.removeRoleErrorDescription)}}}}},y=e=>({type:r.qj,payload:s.fp(e)}),f=e=>({type:r.Y2,payload:s.DV(e)}),g=(e={})=>({type:r.eJ,payload:s.vd(e)}),v=(e,t,a)=>{const i=(0,o.Sn)(),p=(0,o.dp)({locale:c.S,messages:l},i);return{type:r.Sw,payload:s.ul(e,t,a),meta:{notifications:{rejected:e=>({variant:"danger",title:p.formatMessage(n.Z.editRoleErrorTitle),dismissDelay:8e3,description:e?.errors?.[0]?.detail||p.formatMessage(n.Z.editRoleErrorDescription)})}}}},Z=(e,t)=>{const a=(0,o.Sn)(),i=(0,o.dp)({locale:c.S,messages:l},a);return{type:r.kg,payload:s.sZ(e,t),meta:{notifications:{fulfilled:{variant:"success",title:i.formatMessage(n.Z.editRoleSuccessTitle),dismissDelay:8e3,description:i.formatMessage(n.Z.editRoleSuccessDescription)}}}}},b=(e,t)=>({type:r.Sw,payload:s.lq(e,t)}),w=e=>({type:r.vS,payload:e})},2981:(e,t,a)=>{a.d(t,{u:()=>l,a:()=>c});var r=a(71079),s=a(74982);const i=(0,a(75465).bn)(),o={Active:"enabled",Inactive:"disabled",All:"all"};async function n({limit:e,offset:t=0,orderBy:a,filters:r={},usesMetaInURL:n,matchCriteria:l="partial"}){const{username:c,email:p,status:d=[]}=r,u="-username"===a?"desc":"asc",m="string"==typeof d?o[d]:2===d.length?o.All:o[d[0]]||o.All,h=await i.listPrincipals(e,t,l,c,u,p,m),y=(0,s._V)(t,h?.meta?.count);t=y?t:(0,s.Vh)(h.meta.count,e);const{data:f,meta:g}=y?h:await i.listPrincipals(e,t,l,c,u,p,m);return{data:f,meta:{...g,offset:t,limit:e},...n?{filters:r,pagination:{...g,offset:t,limit:e,redirected:!y}}:{}}}const l=e=>({type:r.WH,payload:n(e)}),c=e=>({type:r.xD,payload:e})}}]);
//# sourceMappingURL=../sourcemaps/9366.af789402157c7517c67a117512835d35.js.map
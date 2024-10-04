"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[1943],{10904:(e,t,a)=>{a.d(t,{Z:()=>oe});var s=a(66029),r=a.n(s),i=a(86706),o=a(49628),n=a(86601),l=a(12849),c=a(77044),p=a(13563),d=a(60063),m=a(88664),u=a(3467),h=a(57466),g=a(87009),y=a(62012),f=a(55140),v=a(14289),Z=a(31055),b=a(11170);const S={metadata:{name:"monitor-sampleapp"},spec:{displayName:"Monitoring your sample application",durationMinutes:10,icon:r().createElement(b.ZP,null),description:"Now that you’ve created a sample application and added health checks, let’s monitor your application.",prerequisites:['You completed the "Getting started with a sample" quick start.'],introduction:"### This quick start shows you how to monitor your sample application.\nYou should have previously created the **sample-app** application and **nodejs-sample** deployment via the **Get started with a sample** quick start. If you haven't, you may be able to follow these tasks with any existing deployment.",tasks:[{title:"Viewing the monitoring details of your sample application",description:"### To view the details of your sample application:\n1. Go to the project your sample application was created in.\n2. In the **</> Developer** perspective, go to **Topology** view.\n3. Click on the **nodejs-sample** deployment to view its details.\n4. Click on the **Monitoring** tab in the side panel.\nYou can see context sensitive metrics and alerts in the **Monitoring** tab.",review:{instructions:"#### To verify you can view the monitoring information:\n1. Do you see a **Metrics** accordion in the side panel?\n2. Do you see a **View monitoring dashboard** link in the **Metrics** accordion?\n3. Do you see three charts in the **Metrics** accordion: **CPU Usage**, **Memory Usage** and **Receive Bandwidth**?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how you can monitor your sample app!",failed:"Try the steps again."}},{title:"Viewing your project monitoring dashboard",description:"### To view the project monitoring dashboard in the context of **nodejs-sample**:\n1. Click on the **View monitoring dashboard** link in the side panel.\n2. You can change the **Time Range** and **Refresh Interval** of the dashboard.\n3. You can change the context of the dashboard as well by clicking on the drop-down list. Select a specific workload or **All Workloads** to view the dashboard in the context of the entire project.",review:{instructions:"#### To verify that you are able to view the monitoring dashboard:\nDo you see metrics charts in the dashboard?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to view the dashboard in the context of your sample app!",failed:"Try the steps again."}},{title:"Viewing custom metrics",description:"### To view custom metrics:\n1. Click on the **Metrics** tab of the **Monitoring** page.\n2. Click the **Select Query** drop-down list to see the available queries.\n3. Click on **Filesystem Usage** from the list to run the query.",review:{instructions:"#### Verify you can see the chart associated with the query:\nDo you see a chart displayed with filesystem usage for your project?  Note: select **Custom Query** from the dropdown to create and run a custom query utilizing PromQL.\n",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to run a query!",failed:"Try the steps again."}}],conclusion:"You have learned how to access workload monitoring and metrics!",nextQuickStart:[""]}};var M=a(91935),D=a(25387),w=a(2550);const E=()=>{const e=(0,D.YB)(),[t,a]=(0,s.useState)(!1),i=(0,f.Z)(),o=(0,y.useNavigate)(),n=r().useContext(M.QuickStartContext),{quickStarts:l}=i,[c,p]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const e="true"===localStorage.getItem("quickstarts:enabled");e&&(l.set("monitor-sampleapp",[S]),p(e))}),[]),(0,s.useEffect)((()=>{a(""!==n.activeQuickStartID)}),[n]);const d={margin:"24px 0px 24px 24px"};return r().createElement(r().Fragment,null,c&&r().createElement(r().Fragment,null,r().createElement(Z.Button,{onClick:()=>{t&!!n.activeQuickStartID?l.toggle():l.toggle("monitor-sampleapp",{}),a(!t)},variant:"primary",style:d,isDisabled:t},e.formatMessage(w.Z.triggerMyQuickstart)),r().createElement(Z.Button,{onClick:()=>{o(v.Z["quickstarts-test"].link)},variant:"primary",style:d},e.formatMessage(w.Z.triggerMyCatalog))))},k=({children:e,path:t})=>{const a=(0,y.useOutletContext)();return(0,s.cloneElement)(e,{...a,...t&&a?.[t]||{}})};var T=a(64756),R=a(79083);const G=(0,s.lazy)((()=>Promise.all([a.e(2185),a.e(4380),a.e(3539),a.e(4229),a.e(5904),a.e(6304),a.e(8173),a.e(2232),a.e(9545),a.e(9222),a.e(4269),a.e(5048),a.e(4685),a.e(8094),a.e(2508),a.e(5388)]).then(a.bind(a,14145)))),P=(0,s.lazy)((()=>Promise.all([a.e(236),a.e(2185),a.e(5372),a.e(6756),a.e(4685),a.e(4537),a.e(348)]).then(a.bind(a,97270)))),z=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(9807),a.e(9913),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3847),a.e(3539),a.e(4229),a.e(6304),a.e(8173),a.e(5629),a.e(5173),a.e(9222),a.e(4269),a.e(5048),a.e(9061),a.e(4268)]).then(a.bind(a,56068)))),j=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3847),a.e(3539),a.e(6133),a.e(6304),a.e(8173),a.e(5629),a.e(5173),a.e(8808)]).then(a.bind(a,27997)))),A=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(236),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(8847),a.e(6427),a.e(4229),a.e(5904),a.e(9301)]).then(a.bind(a,18674)))),U=(0,s.lazy)((()=>Promise.all([a.e(236),a.e(4229),a.e(4269),a.e(5047),a.e(9032)]).then(a.bind(a,65542)))),V=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3847),a.e(3539),a.e(6133),a.e(6304),a.e(5629),a.e(7374)]).then(a.bind(a,11207)))),x=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(236),a.e(9807),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3847),a.e(6133),a.e(6304),a.e(5629),a.e(1848),a.e(3945)]).then(a.bind(a,16920)))),C=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(236),a.e(2185),a.e(190),a.e(8340),a.e(6756),a.e(9820),a.e(3006),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3847),a.e(3539),a.e(5904),a.e(9631),a.e(4503),a.e(2232),a.e(8690),a.e(9545),a.e(247),a.e(5950),a.e(8972),a.e(1214),a.e(5047),a.e(4537),a.e(2508),a.e(2835),a.e(1983),a.e(5739)]).then(a.bind(a,56280)))),q=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(190),a.e(7734),a.e(9389),a.e(9631),a.e(8214)]).then(a.bind(a,94387)))),I=(0,s.lazy)((()=>Promise.all([a.e(236),a.e(4380),a.e(6067)]).then(a.bind(a,55781)))),_=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(236),a.e(190),a.e(8340),a.e(9820),a.e(3006),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3847),a.e(3539),a.e(5904),a.e(9631),a.e(4503),a.e(2232),a.e(8690),a.e(9545),a.e(247),a.e(5950),a.e(8972),a.e(1214),a.e(2508),a.e(2835),a.e(345)]).then(a.bind(a,48701)))),F=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3847),a.e(6304),a.e(5629),a.e(1848),a.e(6397)]).then(a.bind(a,53224)))),N=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(236),a.e(190),a.e(8340),a.e(7734),a.e(9389),a.e(4444),a.e(3847),a.e(4229),a.e(5904),a.e(9631),a.e(4503),a.e(8690),a.e(5950),a.e(5205)]).then(a.bind(a,74517)))),Y=(0,s.lazy)((()=>Promise.all([a.e(2185),a.e(5372),a.e(3297),a.e(4685),a.e(5589)]).then(a.bind(a,31017)))),B=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3847),a.e(3539),a.e(6133),a.e(6304),a.e(8173),a.e(5629),a.e(5173),a.e(8972),a.e(1439),a.e(1764)]).then(a.bind(a,7841)))),L=(0,s.lazy)((()=>Promise.all([a.e(236),a.e(9807),a.e(5376),a.e(8826),a.e(4380),a.e(6427),a.e(3847),a.e(5904),a.e(6304),a.e(5629),a.e(8972),a.e(1439),a.e(1397),a.e(1453)]).then(a.bind(a,55073)))),W=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(236),a.e(2185),a.e(190),a.e(9807),a.e(8340),a.e(6756),a.e(9820),a.e(9913),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3847),a.e(3539),a.e(4229),a.e(5904),a.e(6133),a.e(8173),a.e(9631),a.e(4503),a.e(2232),a.e(8690),a.e(5173),a.e(9545),a.e(5950),a.e(9222),a.e(4269),a.e(5048),a.e(1214),a.e(5047),a.e(4537),a.e(1983),a.e(5725)]).then(a.bind(a,110)))),O=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(190),a.e(8340),a.e(7734),a.e(9389),a.e(4444),a.e(3847),a.e(9631),a.e(8690),a.e(4599)]).then(a.bind(a,65966)))),Q=(0,s.lazy)((()=>Promise.all([a.e(236),a.e(4380),a.e(7409)]).then(a.bind(a,44433)))),$=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(236),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(8173),a.e(4503),a.e(8094),a.e(2370)]).then(a.bind(a,86009)))),H=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(236),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(6133),a.e(247),a.e(1908)]).then(a.bind(a,91670)))),J=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(5904),a.e(6133),a.e(4503),a.e(8094),a.e(4058)]).then(a.bind(a,92057)))),K=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(236),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3539),a.e(4229),a.e(5904),a.e(2232),a.e(2242)]).then(a.bind(a,58105)))),X=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(9807),a.e(9913),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3539),a.e(4229),a.e(8173),a.e(5173),a.e(9222),a.e(4269),a.e(5048),a.e(9061),a.e(3411)]).then(a.bind(a,84620)))),ee=(0,s.lazy)((()=>Promise.all([a.e(5182),a.e(6872),a.e(9389),a.e(4444),a.e(3297),a.e(5376),a.e(8826),a.e(4380),a.e(8847),a.e(6427),a.e(3539),a.e(4229),a.e(5904),a.e(6133),a.e(9009)]).then(a.bind(a,99187)))),te=(0,s.lazy)((()=>Promise.all([a.e(236),a.e(7498)]).then(a.bind(a,29110)))),ae=(0,s.lazy)((()=>a.e(5871).then(a.bind(a,65871)))),se=(0,s.lazy)((()=>Promise.all([a.e(2185),a.e(5372),a.e(691),a.e(3297),a.e(247),a.e(4685),a.e(1397),a.e(4457)]).then(a.bind(a,74178)))),re=(e=[])=>e.map((({path:e,element:t,childRoutes:a,elementProps:s})=>r().createElement(y.Route,{key:e,path:e,element:r().createElement(k,{path:e},r().createElement(t,{...s}))},re(a)))),ie=()=>{const e=(0,y.useLocation)(),{updateDocumentTitle:t,isBeta:a}=(0,f.Z)(),i=(0,R.useFlag)("platform.rbac.itless"),o=a()&&(0,R.useFlag)("platform.rbac.group-service-accounts")||!a()&&(0,R.useFlag)("platform.rbac.group-service-accounts.stable"),n=(0,R.useFlag)("platform.rbac.workspaces");(0,s.useEffect)((()=>{const a=Object.values(v.Z).find((t=>!!(0,y.matchPath)({path:t.path,end:!0},e.pathname)));a?.title&&t(`${a.title} - User Access`)}),[e.pathname,t]);const c=(({enableServiceAccounts:e,isITLess:t,isWorkspacesFlag:a})=>[{path:v.Z["users-and-user-groups"].path,element:se},{path:v.Z.overview.path,element:G},{path:v.Z.workspaces.path,element:P},{path:v.Z["user-detail"].path,element:j,childRoutes:[{path:v.Z["add-user-to-group"].path,element:A},{path:v.Z["user-add-group-roles"].path,element:K}]},{path:v.Z.users.path,element:z,childRoutes:[t&&{path:v.Z["invite-users"].path,element:U}]},{path:v.Z["role-detail"].path,element:x,childRoutes:[{path:v.Z["role-detail-remove"].path,element:I},{path:v.Z["role-detail-edit"].path,element:q},{path:v.Z["role-add-permission"].path,element:_}]},{path:v.Z["role-detail-permission"].path,element:F,childRoutes:[{path:v.Z["role-detail-permission-edit"].path,element:N}]},...a?[{path:v.Z.roles.path,element:Y}]:[{path:v.Z.roles.path,element:V,childRoutes:[{path:v.Z["roles-add-group-roles"].path,element:K},{path:v.Z["add-role"].path,element:C},{path:v.Z["remove-role"].path,element:I},{path:v.Z["edit-role"].path,element:q}]}],{path:v.Z["group-detail-role-detail"].path,element:x},{path:v.Z["group-detail"].path,element:L,childRoutes:[{path:v.Z["group-detail"].path,element:({groupId:e})=>r().createElement(y.Navigate,{to:(0,T.n)(v.Z["group-detail-roles"].link).replace(":groupId",e)})},{path:v.Z["group-detail-roles"].path,element:H,childRoutes:[{path:v.Z["group-roles-edit-group"].path,element:O},{path:v.Z["group-roles-remove-group"].path,element:Q},{path:v.Z["group-add-roles"].path,element:K}]},{path:v.Z["group-detail-members"].path,element:$,childRoutes:[{path:v.Z["group-members-edit-group"].path,element:O},{path:v.Z["group-members-remove-group"].path,element:Q},{path:v.Z["group-add-members"].path,element:X}]},...e?[{path:v.Z["group-detail-service-accounts"].path,element:J,childRoutes:[{path:v.Z["group-service-accounts-edit-group"].path,element:O},{path:v.Z["group-service-accounts-remove-group"].path,element:te},{path:v.Z["group-add-service-account"].path,element:ee}]}]:[]]},{path:v.Z.groups.path,element:B,childRoutes:[{path:v.Z["add-group"].path,element:W},{path:v.Z["edit-group"].path,element:O},{path:v.Z["remove-group"].path,element:Q}]},..."true"===localStorage.getItem("quickstarts:enabled")?[{path:v.Z["quickstarts-test"].path,element:ae}]:[]])({enableServiceAccounts:o,isITLess:i,isWorkspacesFlag:n}),p=(0,s.useMemo)((()=>re(c)),[c]);return r().createElement(s.Suspense,{fallback:r().createElement(l.zx,null)},r().createElement(E,null),r().createElement(y.Routes,null,p,r().createElement(y.Route,{path:"*",element:r().createElement(y.Navigate,{to:(0,T.n)(v.Z.users.link)})})))},oe=()=>{const e=(0,i.useDispatch)(),t=(0,g.Z)();return(0,s.useEffect)((()=>()=>{e((0,d.an)(h.p.users.filters)),e((0,c.Pu)(m.I.groups.filters)),e((0,p.ys)(u.G.roles.filters))}),[]),t.ready?r().createElement(n.Z.Provider,{value:{...t}},r().createElement(o.Z,null,r().createElement("section",{className:"rbac-c-root pf-v5-c-page__main-section pf-v5-u-m-0 pf-v5-u-p-0"},r().createElement(ie,null)))):r().createElement(l.zx,null)}},60167:(e,t,a)=>{a.d(t,{S:()=>s}),a(66029),a(86706),a(37617),a(10904),a(2034);const s="en"},19443:(e,t,a)=>{a.d(t,{DV:()=>c,Kt:()=>n,fA:()=>i,fp:()=>l,l5:()=>p,lq:()=>m,sZ:()=>u,ul:()=>d,vd:()=>o});var s=a(74982);const r=(0,a(75465).ix)();async function i(e){return await r.createRole(e)}function o({limit:e,offset:t,name:a,displayName:s,nameMatch:i,scope:o,orderBy:n="display_name",addFields:l,username:c,application:p,permission:d,options:m}){return r.listRoles(e,t,a,void 0,s,i,o,n,l,c,p,d,m)}async function n({limit:e,offset:t,filters:a={},nameMatch:i,scope:o="org_id",orderBy:n="display_name",addFields:l=["groups_in_count","groups_in","access"],username:c,options:p,permission:d,application:m,usesMetaInURL:u=!1,chrome:h}){const g=await r.listRoles(e,t,a.name,void 0,a.display_name,i,o,n,l,c,m,d,p),y=(0,s._V)(t,g?.meta?.count);t=y?t:(0,s.Vh)(g.meta.count,e);let{data:f,meta:v}=y?g:await r.listRoles(e,t,a.name,void 0,void 0,i,o,n,l,c,m,d,p);return{data:f,meta:v,...u?{filters:a,pagination:{...v,offset:t,limit:e,redirected:!y}}:{},...await(h?.auth?.getUser())}}async function l(e){return await r.getRole(e)}async function c(e){return await r.getRole(e,"principal")}async function p(e){return await r.deleteRole(e)}const d=async(e,t,a)=>{const{data:s}=await r.getRoleAccess(e);return r.updateRole(e,a?{...t,access:s}:t)},m=async(e,t)=>{const{data:a}=await r.getRoleAccess(e.uuid),s={...e,access:a.filter((e=>!t.includes(e.permission)))};return r.updateRole(e.uuid,{...s})},u=async(e,t)=>r.patchRole(e,t)},29301:(e,t,a)=>{a.d(t,{Aq:()=>l,GT:()=>m,Gw:()=>u,RI:()=>d,TU:()=>y,VG:()=>i,ZQ:()=>p,jl:()=>n,mh:()=>g,um:()=>c,vE:()=>o,zk:()=>h});var s=a(48623),r=a(74982);const i="bad uuid",o=e=>e.replace(/[\u200B-\u200D\uFEFF]/g,"").trim(),n=e=>Object.entries(e).reduce(((e,[t,a])=>({...e,...a&&{[t]:a}})),{}),l=(0,s.Z)((e=>e())),c=(e=[],t,a=(()=>!0))=>{const s=e.filter(a);return 0!==s.length&&s.every((({uuid:e})=>t.find((t=>t.uuid===e))))||t.length>0&&null},p=(e,t)=>a=>t?[...a,...e].filter(((e,t,a)=>a.findIndex((({uuid:t})=>e.uuid===t))===t)):a.filter((t=>!e.find((({uuid:e})=>e===t.uuid)))),d=e=>e.charAt(0).toUpperCase()+e.slice(1),m=e=>{const t=new URLSearchParams;return Object.keys(e).forEach((a=>{const s=e[a];Array.isArray(s)?s.forEach((e=>e&&t.append(a,e))):s&&t.set(a,s)})),t.toString()},u=(e,t)=>{t({pathname:e.pathname,search:""},{replace:!0})},h=(e,t,a)=>({pathname:e,search:m({per_page:t.limit,page:(0,r.wy)(t.limit,t.offset),...a})}),g=e=>{const t=new Date(Date.now());return Date.parse(e)<t.setMonth(t.getMonth()-1)?"onlyDate":"relative"},y=(e="")=>{let t=[""],a=e.split(".");if(a.length>1){let e=window.atob(a[1]);if(e&&(t=JSON.parse(e)?.realm_access?.roles,t.includes("external-idp")))return!0}return!1}},77044:(e,t,a)=>{a.d(t,{Gr:()=>E,K4:()=>h,Pu:()=>z,Rp:()=>y,W3:()=>P,WD:()=>u,WK:()=>T,Wj:()=>G,bt:()=>d,dy:()=>Z,fB:()=>m,gg:()=>v,lM:()=>M,mD:()=>f,mt:()=>w,nV:()=>S,nd:()=>D,nr:()=>R,tz:()=>b,w_:()=>k,yi:()=>g});var s=a(71079),r=a(94504),i=a(25387),o=a(29301),n=a(2550),l=a(2034),c=a(60167);const p=e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"group uuid validation"===t.source)return{error:o.VG};throw e},d=(e={})=>({type:s.eb,payload:r.bt(e)}),m=({filterValue:e,chrome:t}={})=>({type:s.AG,payload:r.bt({limit:1,...e?.length>0?{filters:{name:e},nameMatch:"partial"}:{},adminDefault:!0,chrome:t})}),u=({filterValue:e,chrome:t}={})=>({type:s.kL,payload:r.bt({limit:1,...e?.length>0?{filters:{name:e},nameMatch:"partial"}:{},platformDefault:!0,chrome:t})}),h=()=>({type:s.iE}),g=e=>({type:s._h,payload:r.yi(e).catch(p)}),y=e=>({type:s.Po,payload:r.Rp(e).catch((e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"name"===t.source)return{error:!0};throw{message:t.detail,description:t.source}}))}),f=e=>{const t=(0,i.Sn)(),a=(0,i.dp)({locale:c.S,messages:l},t);return{type:s.t3,payload:r.mD(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(n.Z.editGroupSuccessTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(n.Z.editGroupSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(n.Z.editGroupErrorTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(n.Z.editGroupErrorDescription)}}}}},v=e=>{const t=(0,i.Sn)(),a=(0,i.dp)({locale:c.S,messages:l},t);return{type:s.v9,payload:r.gg(e),meta:{notifications:{fulfilled:{variant:"success",dismissDelay:8e3,title:a.formatMessage(e.length>1?n.Z.removeGroupsSuccess:n.Z.removeGroupSuccess)},rejected:{variant:"danger",dismissDelay:8e3,title:a.formatMessage(e.length>1?n.Z.removeGroupsError:n.Z.removeGroupError)}}}}},Z=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a),p=t.length>1;return{type:s.Nr,payload:r.dy(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(p?n.Z.addGroupMembersSuccessTitle:n.Z.addGroupMemberSuccessTitle),dismissDelay:8e3,description:o.formatMessage(p?n.Z.addGroupMembersSuccessDescription:n.Z.addGroupMemberSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(p?n.Z.addGroupMemberErrorTitle:n.Z.addGroupMembersErrorTitle),dismissDelay:8e3,description:o.formatMessage(p?n.Z.addGroupMemberErrorDescription:n.Z.addGroupMembersErrorDescription)}}}}},b=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:s.b9,payload:r.CL(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.removeGroupMembersSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupMembersSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.Z.removeGroupMembersErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupMembersErrorDescription)}}}}},S=(e,t,a)=>({type:s.XS,payload:r.nV(e,!1,t,a).catch(p)}),M=(e,t,a)=>({type:s.Yu,payload:r.nV(e,!1,t,a).catch(p),meta:{groupId:e,isPlatformDefault:a.isPlatformDefault,isAdminDefault:a.isAdminDefault}}),D=(e,t,a)=>({type:s.Vh,payload:r.nd(e,t,a).catch(p)}),w=(e,t,a)=>({type:s.yY,payload:r.nd(e,t,a).catch(p),meta:{groupId:e}}),E=(e,t)=>({type:s.HS,payload:r.Bd(e,t).catch(p)}),k=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:s.c,payload:r.w_(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.addGroupServiceAccountsSuccessTitle,{count:t.length}),dismissDelay:8e3,description:o.formatMessage(n.Z.addGroupServiceAccountsSuccessDescription,{count:t.length})},rejected:a=>({variant:"danger",title:o.formatMessage(n.Z.addGroupServiceAccountsErrorTitle,{count:t.length}),dismissDelay:8e3,description:o.formatMessage(404===Number(a?.errors?.[0]?.status)?n.Z.groupDoesNotExist:n.Z.addGroupServiceAccountsErrorDescription,{count:t.length,id:e})})}}}},T=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:s.Jr,payload:r.vk(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.removeGroupServiceAccountsSuccessTitle,{count:t.length}),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupServiceAccountsSuccessDescription,{count:t.length})},rejected:{variant:"danger",title:o.formatMessage(n.Z.removeGroupServiceAccountsErrorTitle,{count:t.length}),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupServiceAccountsErrorDescription,{count:t.length})}}}}},R=(e,t,a)=>({type:s.as,payload:r.nV(e,!0,t,a).catch(p)}),G=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:s.fG,payload:r.Wj(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.addGroupRolesSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.addGroupRolesSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.Z.addGroupRolesErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.addGroupRolesErrorDescription)}}}}},P=(e,t)=>{const a=(0,i.Sn)(),o=(0,i.dp)({locale:c.S,messages:l},a);return{type:s.Yc,payload:r.HA(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.Z.removeGroupRolesSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupRolesSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.Z.removeGroupRolesErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.Z.removeGroupRolesErrorDescription)}}}}},z=e=>({type:s.p7,payload:e})},13563:(e,t,a)=>{a.d(t,{DV:()=>y,Kt:()=>u,fA:()=>p,fp:()=>d,hs:()=>f,l5:()=>h,lq:()=>b,sZ:()=>Z,sv:()=>g,ul:()=>v,vd:()=>m,ys:()=>S});var s=a(71079),r=a(19443),i=a(29301),o=a(25387),n=a(2550),l=a(2034),c=a(60167);const p=e=>{const t=(0,o.Sn)(),a=(0,o.dp)({locale:c.S,messages:l},t);return{type:s.MF,payload:r.fA(e),meta:{notifications:{rejected:e=>({variant:"danger",title:a.formatMessage(n.Z.createRoleErrorTitle),dismissDelay:8e3,description:e?.errors?.[0]?.detail||a.formatMessage(n.Z.createRoleErrorDescription)})}}}},d=e=>({type:s.rz,payload:r.fp(e).catch((e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"role uuid validation"===t.source)return{error:i.VG};throw e}))}),m=(e={})=>({type:s.Lp,payload:r.vd(e).catch((e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"detail"===t.source)return{error:i.VG};throw e}))}),u=(e={})=>({type:s.Lp,payload:r.Kt(e)}),h=e=>{const t=(0,o.Sn)(),a=(0,o.dp)({locale:c.S,messages:l},t);return{type:s.W2,payload:r.l5(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(n.Z.removeRoleSuccessTitle),dismissDelay:8e3,description:a.formatMessage(n.Z.removeRoleSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(n.Z.removeRoleErrorTitle),dismissDelay:8e3,description:a.formatMessage(n.Z.removeRoleErrorDescription)}}}}},g=e=>({type:s.qj,payload:r.fp(e)}),y=e=>({type:s.Y2,payload:r.DV(e)}),f=(e={})=>({type:s.eJ,payload:r.vd(e)}),v=(e,t,a)=>{const i=(0,o.Sn)(),p=(0,o.dp)({locale:c.S,messages:l},i);return{type:s.Sw,payload:r.ul(e,t,a),meta:{notifications:{rejected:e=>({variant:"danger",title:p.formatMessage(n.Z.editRoleErrorTitle),dismissDelay:8e3,description:e?.errors?.[0]?.detail||p.formatMessage(n.Z.editRoleErrorDescription)})}}}},Z=(e,t)=>{const a=(0,o.Sn)(),i=(0,o.dp)({locale:c.S,messages:l},a);return{type:s.kg,payload:r.sZ(e,t),meta:{notifications:{fulfilled:{variant:"success",title:i.formatMessage(n.Z.editRoleSuccessTitle),dismissDelay:8e3,description:i.formatMessage(n.Z.editRoleSuccessDescription)}}}}},b=(e,t)=>({type:s.Sw,payload:r.lq(e,t)}),S=e=>({type:s.vS,payload:e})},60063:(e,t,a)=>{a.d(t,{Sh:()=>w,uh:()=>T,hO:()=>E,eD:()=>k,an:()=>R});var s=a(71079),r=a(74982),i=a(75465);insights.chrome.getEnvironment();const o="int"===insights.chrome.getEnvironment(),n="frhStage"===insights.chrome.getEnvironment(),l="frh"===insights.chrome.getEnvironment(),c=(0,i.bn)(),p={Active:"enabled",Inactive:"disabled",All:"all"},d=e=>o?e.int:n?e.stage:l?e.prod:"";async function m(){try{const e=await fetch("/apps/rbac/env.json");return await e.json()}catch(e){console.log(e)}}const u=e=>({"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${e}`});function h(e,t,a){e.ok&&206!==e.status?t(e):e.ok&&206===e.status?e.json().then((e=>{a(e)})):a(e)}function g(e,t){t(new Error(e.message))}async function y(e={emails:[],isAdmin:void 0}){const t=await insights.chrome.auth.getToken(),a={method:"POST",headers:u(t),body:JSON.stringify({emails:e.emails,isAdmin:e.isAdmin})},s=await m(),r=d(s);return new Promise(((e,t)=>fetch(`${r}/user/invite`,a).then((a=>h(a,e,t)),(e=>g(e,t))).catch((e=>g(e,t)))))}async function f(e){const t=await insights.chrome.auth.getToken();let a={method:"PUT",headers:u(t)};const s=await m(),r=d(s);return new Promise(((t,s)=>fetch(`${r}/user/${e.id}/admin/${e.is_org_admin}`,a).then((e=>h(e,t,s)),(e=>g(e,s))).catch((e=>g(e,s)))))}async function v(e){const t=await insights.chrome.auth.getToken();let a={method:"PUT",headers:u(t),body:JSON.stringify({users:e})};const s=await m(),r=d(s);return new Promise(((e,t)=>fetch(`${r}/change-users-status`,a).then((a=>h(a,e,t)),(e=>g(e,t))).catch((e=>g(e,t)))))}async function Z({limit:e,offset:t=0,orderBy:a,filters:s={},usesMetaInURL:i,matchCriteria:o="partial"}){const{username:n,email:l,status:d=[]}=s,m="-username"===a?"desc":"asc",u="string"==typeof d?p[d]:2===d.length?p.All:p[d[0]]||p.All,h=await c.listPrincipals(e,t,o,n,m,l,u),g=(0,r._V)(t,h?.meta?.count);t=g?t:(0,r.Vh)(h.meta.count,e);const{data:y,meta:f}=g?h:await c.listPrincipals(e,t,o,n,m,l,u);return{data:y,meta:{...f,offset:t,limit:e},...i?{filters:s,pagination:{...f,offset:t,limit:e,redirected:!g}}:{}}}var b=a(25387),S=a(2550),M=a(2034),D=a(60167);const w=e=>{const t=(0,b.Sn)(),a=(0,b.dp)({locale:D.S,messages:M},t);return{type:s.JF,payload:y(e),meta:{notifications:{rejected:e=>e.status?{variant:"danger",title:a.formatMessage(S.Z.inviteUsersErrorTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(S.Z.inviteUsersErrorDescription)}:{variant:"warning",title:a.formatMessage(S.Z.inviteUsersErrorTitle),dismissDelay:8e3,dismissable:!0,description:e}}}}},E=e=>{const t=(0,b.Sn)(),a=(0,b.dp)({locale:D.S,messages:M},t);return{type:s.xC,payload:f(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(S.Z.editUserSuccessTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(S.Z.editUserSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(S.Z.editUserErrorTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(S.Z.editUserErrorDescription)}}}}},k=e=>{const t=(0,b.Sn)(),a=(0,b.dp)({locale:D.S,messages:M},t);return{type:s.lk,payload:v(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(S.Z.editUserSuccessTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(S.Z.editUserSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(S.Z.editUserErrorTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(S.Z.editUserErrorDescription)}}}}},T=e=>({type:s.WH,payload:Z(e)}),R=e=>({type:s.xD,payload:e})}}]);
//# sourceMappingURL=../sourcemaps/1943.d611c867553ba32277ed7de95e4a5eee.js.map
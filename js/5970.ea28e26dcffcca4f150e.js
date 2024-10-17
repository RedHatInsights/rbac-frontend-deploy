"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[5970],{90754:(e,t,a)=>{a.d(t,{A:()=>oe});var s=a(93345),r=a.n(s),i=a(69733),o=a(82806),n=a(40262),l=a(21996),c=a(99843),p=a(8582),d=a(44097),m=a(85446),u=a(11387),h=a(5576),g=a(38132),y=a(49634),f=a(20881),v=a(49573),A=a(79994),M=a(41192);const b={metadata:{name:"monitor-sampleapp"},spec:{displayName:"Monitoring your sample application",durationMinutes:10,icon:r().createElement(M.Ay,null),description:"Now that you’ve created a sample application and added health checks, let’s monitor your application.",prerequisites:['You completed the "Getting started with a sample" quick start.'],introduction:"### This quick start shows you how to monitor your sample application.\nYou should have previously created the **sample-app** application and **nodejs-sample** deployment via the **Get started with a sample** quick start. If you haven't, you may be able to follow these tasks with any existing deployment.",tasks:[{title:"Viewing the monitoring details of your sample application",description:"### To view the details of your sample application:\n1. Go to the project your sample application was created in.\n2. In the **</> Developer** perspective, go to **Topology** view.\n3. Click on the **nodejs-sample** deployment to view its details.\n4. Click on the **Monitoring** tab in the side panel.\nYou can see context sensitive metrics and alerts in the **Monitoring** tab.",review:{instructions:"#### To verify you can view the monitoring information:\n1. Do you see a **Metrics** accordion in the side panel?\n2. Do you see a **View monitoring dashboard** link in the **Metrics** accordion?\n3. Do you see three charts in the **Metrics** accordion: **CPU Usage**, **Memory Usage** and **Receive Bandwidth**?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how you can monitor your sample app!",failed:"Try the steps again."}},{title:"Viewing your project monitoring dashboard",description:"### To view the project monitoring dashboard in the context of **nodejs-sample**:\n1. Click on the **View monitoring dashboard** link in the side panel.\n2. You can change the **Time Range** and **Refresh Interval** of the dashboard.\n3. You can change the context of the dashboard as well by clicking on the drop-down list. Select a specific workload or **All Workloads** to view the dashboard in the context of the entire project.",review:{instructions:"#### To verify that you are able to view the monitoring dashboard:\nDo you see metrics charts in the dashboard?",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to view the dashboard in the context of your sample app!",failed:"Try the steps again."}},{title:"Viewing custom metrics",description:"### To view custom metrics:\n1. Click on the **Metrics** tab of the **Monitoring** page.\n2. Click the **Select Query** drop-down list to see the available queries.\n3. Click on **Filesystem Usage** from the list to run the query.",review:{instructions:"#### Verify you can see the chart associated with the query:\nDo you see a chart displayed with filesystem usage for your project?  Note: select **Custom Query** from the dropdown to create and run a custom query utilizing PromQL.\n",failedTaskHelp:"This task isn’t verified yet. Try the task again."},summary:{success:"You have learned how to run a query!",failed:"Try the steps again."}}],conclusion:"You have learned how to access workload monitoring and metrics!",nextQuickStart:[""]}};var E=a(86937),T=a(8604),D=a(40335);const w=()=>{const e=(0,T.tz)(),[t,a]=(0,s.useState)(!1),i=(0,f.A)(),o=(0,y.useNavigate)(),n=r().useContext(E.QuickStartContext),{quickStarts:l}=i,[c,p]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const e="true"===localStorage.getItem("quickstarts:enabled");e&&(l.set("monitor-sampleapp",[b]),p(e))}),[]),(0,s.useEffect)((()=>{a(""!==n.activeQuickStartID)}),[n]);const d={margin:"24px 0px 24px 24px"};return r().createElement(r().Fragment,null,c&&r().createElement(r().Fragment,null,r().createElement(A.Button,{onClick:()=>{t&!!n.activeQuickStartID?l.toggle():l.toggle("monitor-sampleapp",{}),a(!t)},variant:"primary",style:d,isDisabled:t},e.formatMessage(D.A.triggerMyQuickstart)),r().createElement(A.Button,{onClick:()=>{o(v.A["quickstarts-test"].link)},variant:"primary",style:d},e.formatMessage(D.A.triggerMyCatalog))))},k=({children:e,path:t})=>{const a=(0,y.useOutletContext)();return(0,s.cloneElement)(e,{...a,...t&&a?.[t]||{}})};var S=a(58471),R=a(63219);const P=(0,s.lazy)((()=>Promise.all([a.e(6794),a.e(748),a.e(380),a.e(9300),a.e(2448),a.e(2392),a.e(2932),a.e(7248),a.e(6260),a.e(6966),a.e(5396),a.e(7216),a.e(7228),a.e(6458),a.e(2892),a.e(8501)]).then(a.bind(a,85660)))),G=(0,s.lazy)((()=>Promise.all([a.e(6165),a.e(6794),a.e(8996),a.e(3282),a.e(7786),a.e(7228),a.e(7100),a.e(9295)]).then(a.bind(a,96512)))),j=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(9805),a.e(9321),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(380),a.e(265),a.e(9300),a.e(2392),a.e(2932),a.e(2284),a.e(1837),a.e(6966),a.e(5396),a.e(7216),a.e(4076),a.e(1523)]).then(a.bind(a,64811)))),z=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(265),a.e(9300),a.e(7853),a.e(2392),a.e(2932),a.e(2284),a.e(1837),a.e(8356)]).then(a.bind(a,82543)))),U=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(6165),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(69),a.e(380),a.e(2448),a.e(80)]).then(a.bind(a,23849)))),C=(0,s.lazy)((()=>Promise.all([a.e(6165),a.e(380),a.e(5396),a.e(6662),a.e(2358)]).then(a.bind(a,33883)))),x=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(265),a.e(9300),a.e(7853),a.e(2392),a.e(2284),a.e(1373)]).then(a.bind(a,42960)))),Y=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(6165),a.e(9805),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(265),a.e(7853),a.e(2392),a.e(2284),a.e(8868),a.e(8748)]).then(a.bind(a,70427)))),q=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(6165),a.e(6794),a.e(2480),a.e(2655),a.e(3282),a.e(7655),a.e(5378),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(265),a.e(9300),a.e(2448),a.e(7248),a.e(5260),a.e(1436),a.e(9517),a.e(6260),a.e(6956),a.e(9068),a.e(6428),a.e(123),a.e(6662),a.e(7100),a.e(2892),a.e(9582),a.e(8353),a.e(2461)]).then(a.bind(a,2695)))),H=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(2480),a.e(5759),a.e(3168),a.e(5260),a.e(2015)]).then(a.bind(a,57192)))),F=(0,s.lazy)((()=>Promise.all([a.e(6165),a.e(748),a.e(7035)]).then(a.bind(a,98374)))),N=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(6165),a.e(2480),a.e(2655),a.e(7655),a.e(5378),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(265),a.e(9300),a.e(2448),a.e(7248),a.e(5260),a.e(1436),a.e(9517),a.e(6260),a.e(6956),a.e(9068),a.e(6428),a.e(123),a.e(2892),a.e(9582),a.e(4146)]).then(a.bind(a,31721)))),I=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(265),a.e(2392),a.e(2284),a.e(8868),a.e(845)]).then(a.bind(a,73189)))),$=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(6165),a.e(2480),a.e(2655),a.e(5759),a.e(3168),a.e(9546),a.e(380),a.e(265),a.e(2448),a.e(5260),a.e(1436),a.e(9517),a.e(9068),a.e(4982)]).then(a.bind(a,20463)))),_=(0,s.lazy)((()=>Promise.all([a.e(6794),a.e(8996),a.e(7786),a.e(8510),a.e(7248),a.e(6428),a.e(7228),a.e(3963),a.e(9646),a.e(2729)]).then(a.bind(a,2674)))),L=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(265),a.e(9300),a.e(7853),a.e(2392),a.e(2932),a.e(2284),a.e(1837),a.e(6428),a.e(3963),a.e(1426)]).then(a.bind(a,83753)))),Q=(0,s.lazy)((()=>Promise.all([a.e(6165),a.e(9805),a.e(5086),a.e(1971),a.e(748),a.e(69),a.e(265),a.e(2448),a.e(2392),a.e(2284),a.e(6428),a.e(3963),a.e(9646),a.e(4571)]).then(a.bind(a,58154)))),B=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(6165),a.e(6794),a.e(2480),a.e(9805),a.e(2655),a.e(3282),a.e(7655),a.e(9321),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(380),a.e(265),a.e(9300),a.e(2448),a.e(7853),a.e(2932),a.e(7248),a.e(5260),a.e(1436),a.e(9517),a.e(1837),a.e(6260),a.e(9068),a.e(6966),a.e(5396),a.e(7216),a.e(123),a.e(6662),a.e(7100),a.e(8353),a.e(7308)]).then(a.bind(a,83868)))),K=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(2480),a.e(2655),a.e(5759),a.e(3168),a.e(9546),a.e(265),a.e(5260),a.e(9517),a.e(4907)]).then(a.bind(a,60780)))),V=(0,s.lazy)((()=>Promise.all([a.e(6165),a.e(748),a.e(2866)]).then(a.bind(a,62360)))),O=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(6165),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(2932),a.e(1436),a.e(6458),a.e(3084)]).then(a.bind(a,445)))),W=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(6165),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(7853),a.e(6956),a.e(4563)]).then(a.bind(a,13867)))),J=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(2448),a.e(7853),a.e(1436),a.e(6458),a.e(9395)]).then(a.bind(a,93260)))),X=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(6165),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(380),a.e(9300),a.e(2448),a.e(7248),a.e(3239)]).then(a.bind(a,82772)))),Z=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(9805),a.e(9321),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(380),a.e(9300),a.e(2932),a.e(1837),a.e(6966),a.e(5396),a.e(7216),a.e(4076),a.e(8927)]).then(a.bind(a,96980)))),ee=(0,s.lazy)((()=>Promise.all([a.e(9060),a.e(4709),a.e(3168),a.e(5086),a.e(9546),a.e(8510),a.e(1971),a.e(4301),a.e(748),a.e(69),a.e(380),a.e(9300),a.e(2448),a.e(7853),a.e(9397)]).then(a.bind(a,23360)))),te=(0,s.lazy)((()=>Promise.all([a.e(6165),a.e(5084)]).then(a.bind(a,56097)))),ae=(0,s.lazy)((()=>a.e(1040).then(a.bind(a,21040)))),se=(0,s.lazy)((()=>Promise.all([a.e(6794),a.e(8996),a.e(7786),a.e(144),a.e(8510),a.e(6956),a.e(7228),a.e(9646),a.e(8902)]).then(a.bind(a,35814)))),re=(e=[])=>e.map((({path:e,element:t,childRoutes:a,elementProps:s})=>r().createElement(y.Route,{key:e,path:e,element:r().createElement(k,{path:e},r().createElement(t,{...s}))},re(a)))),ie=()=>{const e=(0,y.useLocation)(),{updateDocumentTitle:t,isBeta:a}=(0,f.A)(),i=(0,R.useFlag)("platform.rbac.itless"),o=a()&&(0,R.useFlag)("platform.rbac.group-service-accounts")||!a()&&(0,R.useFlag)("platform.rbac.group-service-accounts.stable"),n=(0,R.useFlag)("platform.rbac.workspaces");(0,s.useEffect)((()=>{const a=Object.values(v.A).find((t=>!!(0,y.matchPath)({path:t.path,end:!0},e.pathname)));a?.title&&t(`${a.title} - User Access`)}),[e.pathname,t]);const c=(({enableServiceAccounts:e,isITLess:t,isWorkspacesFlag:a})=>[{path:v.A["users-and-user-groups"].path,element:se},{path:v.A.overview.path,element:P},{path:v.A.workspaces.path,element:G},{path:v.A["user-detail"].path,element:z,childRoutes:[{path:v.A["add-user-to-group"].path,element:U},{path:v.A["user-add-group-roles"].path,element:X}]},{path:v.A.users.path,element:j,childRoutes:[t&&{path:v.A["invite-users"].path,element:C}]},{path:v.A["role-detail"].path,element:Y,childRoutes:[{path:v.A["role-detail-remove"].path,element:F},{path:v.A["role-detail-edit"].path,element:H},{path:v.A["role-add-permission"].path,element:N}]},{path:v.A["role-detail-permission"].path,element:I,childRoutes:[{path:v.A["role-detail-permission-edit"].path,element:$}]},...a?[{path:v.A.roles.path,element:_}]:[{path:v.A.roles.path,element:x,childRoutes:[{path:v.A["roles-add-group-roles"].path,element:X},{path:v.A["add-role"].path,element:q},{path:v.A["remove-role"].path,element:F},{path:v.A["edit-role"].path,element:H}]}],{path:v.A["group-detail-role-detail"].path,element:Y},{path:v.A["group-detail"].path,element:Q,childRoutes:[{path:v.A["group-detail"].path,element:({groupId:e})=>r().createElement(y.Navigate,{to:(0,S.o)(v.A["group-detail-roles"].link).replace(":groupId",e)})},{path:v.A["group-detail-roles"].path,element:W,childRoutes:[{path:v.A["group-roles-edit-group"].path,element:K},{path:v.A["group-roles-remove-group"].path,element:V},{path:v.A["group-add-roles"].path,element:X}]},{path:v.A["group-detail-members"].path,element:O,childRoutes:[{path:v.A["group-members-edit-group"].path,element:K},{path:v.A["group-members-remove-group"].path,element:V},{path:v.A["group-add-members"].path,element:Z}]},...e?[{path:v.A["group-detail-service-accounts"].path,element:J,childRoutes:[{path:v.A["group-service-accounts-edit-group"].path,element:K},{path:v.A["group-service-accounts-remove-group"].path,element:te},{path:v.A["group-add-service-account"].path,element:ee}]}]:[]]},{path:v.A.groups.path,element:L,childRoutes:[{path:v.A["add-group"].path,element:B},{path:v.A["edit-group"].path,element:K},{path:v.A["remove-group"].path,element:V}]},..."true"===localStorage.getItem("quickstarts:enabled")?[{path:v.A["quickstarts-test"].path,element:ae}]:[]])({enableServiceAccounts:o,isITLess:i,isWorkspacesFlag:n}),p=(0,s.useMemo)((()=>re(c)),[c]);return r().createElement(s.Suspense,{fallback:r().createElement(l.fr,null)},r().createElement(w,null),r().createElement(y.Routes,null,p,r().createElement(y.Route,{path:"*",element:r().createElement(y.Navigate,{to:(0,S.o)(v.A.users.link)})})))},oe=()=>{const e=(0,i.useDispatch)(),t=(0,g.A)();return(0,s.useEffect)((()=>()=>{e((0,d.$q)(h.g.users.filters)),e((0,c.Rx)(m.u.groups.filters)),e((0,p.Qt)(u.P.roles.filters))}),[]),t.ready?r().createElement(n.A.Provider,{value:{...t}},r().createElement(o.A,null,r().createElement("section",{className:"rbac-c-root pf-v5-c-page__main-section pf-v5-u-m-0 pf-v5-u-p-0"},r().createElement(ie,null)))):r().createElement(l.fr,null)}},25970:(e,t,a)=>{a.d(t,{H:()=>s}),a(93345),a(69733),a(62307),a(90754),a(67169);const s="en"},31237:(e,t,a)=>{a.d(t,{E1:()=>c,Lq:()=>m,S0:()=>d,Tj:()=>p,ip:()=>n,kN:()=>o,lU:()=>u,rM:()=>l,rd:()=>i});var s=a(61361);const r=(0,a(19872).lC)();async function i(e){return await r.createRole(e)}function o({limit:e,offset:t,name:a,displayName:s,nameMatch:i,scope:o,orderBy:n="display_name",addFields:l,username:c,application:p,permission:d,options:m}){return r.listRoles(e,t,a,void 0,s,i,o,n,l,c,p,d,m)}async function n({limit:e,offset:t,filters:a={},nameMatch:i,scope:o="org_id",orderBy:n="display_name",addFields:l=["groups_in_count","groups_in","access"],username:c,options:p,permission:d,application:m,usesMetaInURL:u=!1,chrome:h}){const g=await r.listRoles(e,t,a.name,void 0,a.display_name,i,o,n,l,c,m,d,p),y=(0,s.Ki)(t,g?.meta?.count);t=y?t:(0,s.PQ)(g.meta.count,e);let{data:f,meta:v}=y?g:await r.listRoles(e,t,a.name,void 0,void 0,i,o,n,l,c,m,d,p);return{data:f,meta:v,...u?{filters:a,pagination:{...v,offset:t,limit:e,redirected:!y}}:{},...await(h?.auth?.getUser())}}async function l(e){return await r.getRole(e)}async function c(e){return await r.getRole(e,"principal")}async function p(e){return await r.deleteRole(e)}const d=async(e,t,a)=>{const{data:s}=await r.getRoleAccess(e);return r.updateRole(e,a?{...t,access:s}:t)},m=async(e,t)=>{const{data:a}=await r.getRoleAccess(e.uuid),s={...e,access:a.filter((e=>!t.includes(e.permission)))};return r.updateRole(e.uuid,{...s})},u=async(e,t)=>r.patchRole(e,t)},42134:(e,t,a)=>{a.d(t,{A9:()=>c,C$:()=>i,Fm:()=>h,KA:()=>o,YP:()=>n,b7:()=>u,eW:()=>g,l2:()=>y,pg:()=>m,sq:()=>l,tt:()=>d,vH:()=>p});var s=a(11152),r=a(61361);const i="bad uuid",o=e=>e.replace(/[\u200B-\u200D\uFEFF]/g,"").trim(),n=e=>Object.entries(e).reduce(((e,[t,a])=>({...e,...a&&{[t]:a}})),{}),l=(0,s.A)((e=>e())),c=(e=[],t,a=()=>!0)=>{const s=e.filter(a);return 0!==s.length&&s.every((({uuid:e})=>t.find((t=>t.uuid===e))))||t.length>0&&null},p=(e,t)=>a=>t?[...a,...e].filter(((e,t,a)=>a.findIndex((({uuid:t})=>e.uuid===t))===t)):a.filter((t=>!e.find((({uuid:e})=>e===t.uuid)))),d=e=>e.charAt(0).toUpperCase()+e.slice(1),m=e=>{const t=new URLSearchParams;return Object.keys(e).forEach((a=>{const s=e[a];Array.isArray(s)?s.forEach((e=>e&&t.append(a,e))):s&&t.set(a,s)})),t.toString()},u=(e,t)=>{t({pathname:e.pathname,search:""},{replace:!0})},h=(e,t,a)=>({pathname:e,search:m({per_page:t.limit,page:(0,r.mq)(t.limit,t.offset),...a})}),g=e=>{const t=new Date(Date.now());return Date.parse(e)<t.setMonth(t.getMonth()-1)?"onlyDate":"relative"},y=(e="")=>{let t=[""],a=e.split(".");if(a.length>1){let e=window.atob(a[1]);if(e&&(t=JSON.parse(e)?.realm_access?.roles,t.includes("external-idp")))return!0}return!1}},99843:(e,t,a)=>{a.d(t,{$:()=>y,Dd:()=>G,G2:()=>w,K2:()=>h,Kf:()=>S,Lu:()=>P,Px:()=>k,Rx:()=>j,Tt:()=>m,Ui:()=>g,X0:()=>D,bf:()=>R,hi:()=>A,jL:()=>u,pl:()=>d,rv:()=>v,sx:()=>T,tv:()=>M,vW:()=>f,xi:()=>E,yX:()=>b});var s=a(71966),r=a(12927),i=a(8604),o=a(42134),n=a(40335),l=a(67169),c=a(25970);const p=e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"group uuid validation"===t.source)return{error:o.C$};throw e},d=(e={})=>({type:s.O6,payload:r.pl(e)}),m=({filterValue:e,chrome:t}={})=>({type:s.$K,payload:r.pl({limit:1,...e?.length>0?{filters:{name:e},nameMatch:"partial"}:{},adminDefault:!0,chrome:t})}),u=({filterValue:e,chrome:t}={})=>({type:s.J0,payload:r.pl({limit:1,...e?.length>0?{filters:{name:e},nameMatch:"partial"}:{},platformDefault:!0,chrome:t})}),h=()=>({type:s.gZ}),g=e=>({type:s.rM,payload:r.Ui(e).catch(p)}),y=e=>({type:s.Qn,payload:r.$(e).catch((e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"name"===t.source)return{error:!0};throw{message:t.detail,description:t.source}}))}),f=e=>{const t=(0,i.MT)(),a=(0,i.EY)({locale:c.H,messages:l},t);return{type:s.kn,payload:r.vW(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(n.A.editGroupSuccessTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(n.A.editGroupSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(n.A.editGroupErrorTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(n.A.editGroupErrorDescription)}}}}},v=e=>{const t=(0,i.MT)(),a=(0,i.EY)({locale:c.H,messages:l},t);return{type:s.MM,payload:r.rv(e),meta:{notifications:{fulfilled:{variant:"success",dismissDelay:8e3,title:a.formatMessage(e.length>1?n.A.removeGroupsSuccess:n.A.removeGroupSuccess)},rejected:{variant:"danger",dismissDelay:8e3,title:a.formatMessage(e.length>1?n.A.removeGroupsError:n.A.removeGroupError)}}}}},A=(e,t)=>{const a=(0,i.MT)(),o=(0,i.EY)({locale:c.H,messages:l},a),p=t.length>1;return{type:s.KK,payload:r.hi(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(p?n.A.addGroupMembersSuccessTitle:n.A.addGroupMemberSuccessTitle),dismissDelay:8e3,description:o.formatMessage(p?n.A.addGroupMembersSuccessDescription:n.A.addGroupMemberSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(p?n.A.addGroupMemberErrorTitle:n.A.addGroupMembersErrorTitle),dismissDelay:8e3,description:o.formatMessage(p?n.A.addGroupMemberErrorDescription:n.A.addGroupMembersErrorDescription)}}}}},M=(e,t)=>{const a=(0,i.MT)(),o=(0,i.EY)({locale:c.H,messages:l},a);return{type:s.EK,payload:r.SC(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.A.removeGroupMembersSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.A.removeGroupMembersSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.A.removeGroupMembersErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.A.removeGroupMembersErrorDescription)}}}}},b=(e,t,a)=>({type:s.$r,payload:r.yX(e,!1,t,a).catch(p)}),E=(e,t,a)=>({type:s.Bp,payload:r.yX(e,!1,t,a).catch(p),meta:{groupId:e,isPlatformDefault:a.isPlatformDefault,isAdminDefault:a.isAdminDefault}}),T=(e,t,a)=>({type:s.bm,payload:r.sx(e,t,a).catch(p)}),D=(e,t,a)=>({type:s.TJ,payload:r.sx(e,t,a).catch(p),meta:{groupId:e}}),w=(e,t)=>({type:s.Gi,payload:r.h(e,t).catch(p)}),k=(e,t)=>{const a=(0,i.MT)(),o=(0,i.EY)({locale:c.H,messages:l},a);return{type:s.ZB,payload:r.Px(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.A.addGroupServiceAccountsSuccessTitle,{count:t.length}),dismissDelay:8e3,description:o.formatMessage(n.A.addGroupServiceAccountsSuccessDescription,{count:t.length})},rejected:a=>({variant:"danger",title:o.formatMessage(n.A.addGroupServiceAccountsErrorTitle,{count:t.length}),dismissDelay:8e3,description:o.formatMessage(404===Number(a?.errors?.[0]?.status)?n.A.groupDoesNotExist:n.A.addGroupServiceAccountsErrorDescription,{count:t.length,id:e})})}}}},S=(e,t)=>{const a=(0,i.MT)(),o=(0,i.EY)({locale:c.H,messages:l},a);return{type:s.f_,payload:r.B9(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.A.removeGroupServiceAccountsSuccessTitle,{count:t.length}),dismissDelay:8e3,description:o.formatMessage(n.A.removeGroupServiceAccountsSuccessDescription,{count:t.length})},rejected:{variant:"danger",title:o.formatMessage(n.A.removeGroupServiceAccountsErrorTitle,{count:t.length}),dismissDelay:8e3,description:o.formatMessage(n.A.removeGroupServiceAccountsErrorDescription,{count:t.length})}}}}},R=(e,t,a)=>({type:s.pS,payload:r.yX(e,!0,t,a).catch(p)}),P=(e,t)=>{const a=(0,i.MT)(),o=(0,i.EY)({locale:c.H,messages:l},a);return{type:s.eL,payload:r.Lu(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.A.addGroupRolesSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.A.addGroupRolesSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.A.addGroupRolesErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.A.addGroupRolesErrorDescription)}}}}},G=(e,t)=>{const a=(0,i.MT)(),o=(0,i.EY)({locale:c.H,messages:l},a);return{type:s.kF,payload:r.qN(e,t),meta:{notifications:{fulfilled:{variant:"success",title:o.formatMessage(n.A.removeGroupRolesSuccessTitle),dismissDelay:8e3,description:o.formatMessage(n.A.removeGroupRolesSuccessDescription)},rejected:{variant:"danger",title:o.formatMessage(n.A.removeGroupRolesErrorTitle),dismissDelay:8e3,description:o.formatMessage(n.A.removeGroupRolesErrorDescription)}}}}},j=e=>({type:s.B_,payload:e})},8582:(e,t,a)=>{a.d(t,{$F:()=>g,E1:()=>y,Lq:()=>M,Qt:()=>b,S0:()=>v,Tj:()=>h,WQ:()=>f,ip:()=>u,kN:()=>m,lU:()=>A,rM:()=>d,rd:()=>p});var s=a(71966),r=a(31237),i=a(42134),o=a(8604),n=a(40335),l=a(67169),c=a(25970);const p=e=>{const t=(0,o.MT)(),a=(0,o.EY)({locale:c.H,messages:l},t);return{type:s.br,payload:r.rd(e),meta:{notifications:{rejected:e=>({variant:"danger",title:a.formatMessage(n.A.createRoleErrorTitle),dismissDelay:8e3,description:e?.errors?.[0]?.detail||a.formatMessage(n.A.createRoleErrorDescription)})}}}},d=e=>({type:s.q_,payload:r.rM(e).catch((e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"role uuid validation"===t.source)return{error:i.C$};throw e}))}),m=(e={})=>({type:s.Vm,payload:r.kN(e).catch((e=>{const t=e?.errors?.[0]||{};if("400"===t.status&&"detail"===t.source)return{error:i.C$};throw e}))}),u=(e={})=>({type:s.Vm,payload:r.ip(e)}),h=e=>{const t=(0,o.MT)(),a=(0,o.EY)({locale:c.H,messages:l},t);return{type:s.Ie,payload:r.Tj(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(n.A.removeRoleSuccessTitle),dismissDelay:8e3,description:a.formatMessage(n.A.removeRoleSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(n.A.removeRoleErrorTitle),dismissDelay:8e3,description:a.formatMessage(n.A.removeRoleErrorDescription)}}}}},g=e=>({type:s.GZ,payload:r.rM(e)}),y=e=>({type:s.Hv,payload:r.E1(e)}),f=(e={})=>({type:s.fT,payload:r.kN(e)}),v=(e,t,a)=>{const i=(0,o.MT)(),p=(0,o.EY)({locale:c.H,messages:l},i);return{type:s.FK,payload:r.S0(e,t,a),meta:{notifications:{rejected:e=>({variant:"danger",title:p.formatMessage(n.A.editRoleErrorTitle),dismissDelay:8e3,description:e?.errors?.[0]?.detail||p.formatMessage(n.A.editRoleErrorDescription)})}}}},A=(e,t)=>{const a=(0,o.MT)(),i=(0,o.EY)({locale:c.H,messages:l},a);return{type:s.MO,payload:r.lU(e,t),meta:{notifications:{fulfilled:{variant:"success",title:i.formatMessage(n.A.editRoleSuccessTitle),dismissDelay:8e3,description:i.formatMessage(n.A.editRoleSuccessDescription)}}}}},M=(e,t)=>({type:s.FK,payload:r.Lq(e,t)}),b=e=>({type:s.oc,payload:e})},44097:(e,t,a)=>{a.d(t,{g1:()=>D,hU:()=>S,An:()=>w,CK:()=>k,$q:()=>R});var s=a(71966),r=a(61361),i=a(19872);insights.chrome.getEnvironment();const o="int"===insights.chrome.getEnvironment(),n="frhStage"===insights.chrome.getEnvironment(),l="frh"===insights.chrome.getEnvironment(),c=(0,i.Ln)(),p={Active:"enabled",Inactive:"disabled",All:"all"},d=e=>o?e.int:n?e.stage:l?e.prod:"";async function m(){try{const e=await fetch("/apps/rbac/env.json");return await e.json()}catch(e){console.log(e)}}const u=e=>({"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${e}`});function h(e,t,a){e.ok&&206!==e.status?t(e):e.ok&&206===e.status?e.json().then((e=>{a(e)})):a(e)}function g(e,t){t(new Error(e.message))}async function y(e={emails:[],isAdmin:void 0}){const t=await insights.chrome.auth.getToken(),a={method:"POST",headers:u(t),body:JSON.stringify({emails:e.emails,isAdmin:e.isAdmin})},s=await m(),r=d(s);return new Promise(((e,t)=>fetch(`${r}/user/invite`,a).then((a=>h(a,e,t)),(e=>g(e,t))).catch((e=>g(e,t)))))}async function f(e){const t=await insights.chrome.auth.getToken();let a={method:"PUT",headers:u(t)};const s=await m(),r=d(s);return new Promise(((t,s)=>fetch(`${r}/user/${e.id}/admin/${e.is_org_admin}`,a).then((e=>h(e,t,s)),(e=>g(e,s))).catch((e=>g(e,s)))))}async function v(e){const t=await insights.chrome.auth.getToken();let a={method:"PUT",headers:u(t),body:JSON.stringify({users:e})};const s=await m(),r=d(s);return new Promise(((e,t)=>fetch(`${r}/change-users-status`,a).then((a=>h(a,e,t)),(e=>g(e,t))).catch((e=>g(e,t)))))}async function A({limit:e,offset:t=0,orderBy:a,filters:s={},usesMetaInURL:i,matchCriteria:o="partial"}){const{username:n,email:l,status:d=[]}=s,m="-username"===a?"desc":"asc",u="string"==typeof d?p[d]:2===d.length?p.All:p[d[0]]||p.All,h=await c.listPrincipals(e,t,o,n,m,l,u),g=(0,r.Ki)(t,h?.meta?.count);t=g?t:(0,r.PQ)(h.meta.count,e);const{data:y,meta:f}=g?h:await c.listPrincipals(e,t,o,n,m,l,u);return{data:y,meta:{...f,offset:t,limit:e},...i?{filters:s,pagination:{...f,offset:t,limit:e,redirected:!g}}:{}}}var M=a(8604),b=a(40335),E=a(67169),T=a(25970);const D=e=>{const t=(0,M.MT)(),a=(0,M.EY)({locale:T.H,messages:E},t);return{type:s.VH,payload:y(e),meta:{notifications:{rejected:e=>e.status?{variant:"danger",title:a.formatMessage(b.A.inviteUsersErrorTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(b.A.inviteUsersErrorDescription)}:{variant:"warning",title:a.formatMessage(b.A.inviteUsersErrorTitle),dismissDelay:8e3,dismissable:!0,description:e}}}}},w=e=>{const t=(0,M.MT)(),a=(0,M.EY)({locale:T.H,messages:E},t);return{type:s.tm,payload:f(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(b.A.editUserSuccessTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(b.A.editUserSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(b.A.editUserErrorTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(b.A.editUserErrorDescription)}}}}},k=e=>{const t=(0,M.MT)(),a=(0,M.EY)({locale:T.H,messages:E},t);return{type:s.t7,payload:v(e),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(b.A.editUserSuccessTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(b.A.editUserSuccessDescription)},rejected:{variant:"danger",title:a.formatMessage(b.A.editUserErrorTitle),dismissDelay:8e3,dismissable:!0,description:a.formatMessage(b.A.editUserErrorDescription)}}}}},S=e=>({type:s.AN,payload:A(e)}),R=e=>({type:s.Pm,payload:e})}}]);
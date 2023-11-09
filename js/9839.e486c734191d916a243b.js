"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[9839,7664],{7081:(e,t,n)=>{n.d(t,{ZP:()=>o,lb:()=>a,wl:()=>i});var r=n(40400);const a={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},i=(0,r.IU)(a),o=i},62410:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(85893),a=n(92950),i=n.n(a),o=n(25864),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},s=36e5,u=24*s,l=30*u,d=365*u,m=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},f=[{rightBound:1/0,description:function(e){return m(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return m(Math.round(e/l),"month")}},{rightBound:l,description:function(e){return m(Math.round(e/u),"day")}},{rightBound:u,description:function(e){return m(Math.round(e/s),"hour")}},{rightBound:s,description:function(e){return m(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],g=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},p=function(e){return{exact:function(e){return g(e)+" UTC"},onlyDate:function(e){return g(e).slice(0,-6)},relative:function(e){return f.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),g(e))},invalid:function(){return"Invalid date"}}[e]},v=function(e,t,n){return{exact:function(t){return p(e)(t)},onlyDate:function(t){return p(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),(0,r.jsx)(o.Tooltip,c({},n,{content:(0,r.jsxs)("div",{children:[a,e]})},{children:t}))}(p("exact")(a),(0,r.jsx)("span",{children:p(e)(a)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const h=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,o=e.extraTitle,c=e.tooltipProps,s=t instanceof Date?t:new Date(t),u=null==t||"Invalid Date"===s.toString()?"invalid":a;return(0,r.jsx)(i().Fragment,{children:v(u,c,o)(s)})}},93736:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(46801),a=n(65126);const i=function(e){var t=(0,r.useNavigate)();return function(n,r){return t((0,a.n)(n,e),r)}}},14584:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(92950),a=n.n(r),i=n(86896),o=n(50533),c=n(25864),s=n(46801),u=n(62410),l=n(55140),d=n(65126),m=n(93736),f=n(30060),g=n(36580),p=n(14802),v=n(11107),h=n(84866),y=n(19756),M=n(30893);const Z=({serviceAccountReducer:e,groupReducer:{systemGroup:t}})=>({serviceAccounts:e.serviceAccounts,status:e.status,isLoading:e.isLoading,limit:e.limit,offset:e.offset,systemGroupUuid:t?.uuid}),k=(e,t=[])=>e?.reduce(((e,n)=>[...e,{uuid:n.uuid,title:n.name,cells:[n.name,n.clientId,n.createdBy,a().createElement(r.Fragment,{key:`${n.name}-modified`},a().createElement(u.Z,{date:n.createdAt,type:(0,v.mh)(n.createdAt)}))],selected:Boolean(t&&t.find((e=>e.uuid===n.uuid)))}]),[]),b=({submitRoute:e,cancelRoute:t})=>{const n=(0,i.Z)(),u=(0,m.Z)(),v=(0,o.useDispatch)(),{groupId:b}=(0,s.useParams)(),{auth:I,getEnvironmentDetails:C}=(0,l.Z)(),[E,w]=(0,r.useState)([]),{serviceAccounts:B,status:S,limit:A,offset:x,isLoading:D,systemGroupUuid:P}=(0,o.useSelector)(Z),T=(0,r.useCallback)((async e=>{const t=C(),n=await I.getToken();var r;v((r={limit:e?.limit??A,offset:e?.offset??x,token:n,sso:t?.sso},{type:g.t5,payload:p.Sx(r),meta:r}))}),[A,x]);(0,r.useEffect)((()=>{T({limit:A,offset:0})}),[]);const j=()=>u(e),G=[{title:n.formatMessage(M.Z.description),orderBy:"description"},{title:n.formatMessage(M.Z.clientId),orderBy:"clientId"},{title:n.formatMessage(M.Z.owner),orderBy:"owner"},{title:n.formatMessage(M.Z.timeCreated),orderBy:"timeCreated"}];return a().createElement(c.Modal,{isOpen:!0,className:"rbac",variant:c.ModalVariant.medium,title:n.formatMessage(M.Z.addServiceAccount),actions:[a().createElement(c.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:0===E.length,variant:"primary",onClick:()=>{v((0,y.w_)(b===h.Cn?P:b,E)),u(t)}},n.formatMessage(M.Z.addToGroup)),a().createElement(c.Button,{ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:j},n.formatMessage(M.Z.cancel))],onClose:j},a().createElement(c.Stack,{hasGutter:!0},a().createElement(c.StackItem,null,a().createElement(c.TextContent,null,n.formatMessage(M.Z.addServiceAccountsToGroupDescription),a().createElement(c.Alert,{className:"pf-u-mt-sm rbac-service-accounts-alert",variant:"info",component:"span",isInline:!0,isPlain:!0,title:n.formatMessage(M.Z.visitServiceAccountsPage,{link:a().createElement(d.Z,{to:"/service-accounts",linkBasename:"/iam"},n.formatMessage(M.Z.serviceAccountsPage))})}))),a().createElement(c.StackItem,{className:"rbac-add-service-account-modal"},a().createElement(f.M,{columns:G,isSelectable:!0,rows:k(B,E),data:B,fetchData:T,isLoading:D,pagination:{limit:A,offset:x,...S===p.Xu?{count:x+B.length}:{}},paginationProps:{toggleTemplate:({firstIndex:e,lastIndex:t})=>a().createElement(a().Fragment,null,a().createElement("b",null,e," - ",t)," ","of ",a().createElement("b",null,S===p.Xu?x+B.length:"many")),isCompact:!0},checkedRows:E,setCheckedItems:w,titlePlural:n.formatMessage(M.Z.serviceAccounts).toLowerCase(),titleSingular:n.formatMessage(M.Z.serviceAccount),emptyProps:{title:n.formatMessage(M.Z.noServiceAccountsFound),description:[n.formatMessage(M.Z.contactServiceTeamForAccounts),""]},tableId:"group-add-accounts",ouiaId:"group-add-accounts"}))))}}}]);
//# sourceMappingURL=../sourcemaps/9839.bb75d96bd071c6b0e2513a81b9d0ef11.js.map
"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9009,459],{41435:(e,t,s)=>{s.d(t,{Dl:()=>c,dw:()=>n,e4:()=>i,ir:()=>a});var a,n,o=s(28416);!function(e){e.right="right",e.left="left"}(a||(a={})),function(e){e.up="up",e.down="down"}(n||(n={}));const c=o.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),i=o.createContext({keyHandler:null,sendRef:null})},83536:(e,t,s)=>{s.d(t,{K:()=>p,Z:()=>v});var a=s(28416),n=s.n(a),o=s(40575),c=s(25387),i=s(29301),r=s(55140),l=s(62410),u=s(86706),d=s(97246),m=s(71079),g=s(2550);const f=({serviceAccountReducer:e})=>({serviceAccounts:e.serviceAccounts,status:e.status,isLoading:e.isLoading,limit:e.limit,offset:e.offset}),p=({selected:e,setSelected:t,groupId:s})=>{const{auth:p,getEnvironmentDetails:v}=(0,r.Z)(),{serviceAccounts:C,status:y,limit:k,offset:b,isLoading:S}=(0,u.useSelector)(f),I=(0,u.useDispatch)(),M=(0,c.YB)(),Z=(0,a.useCallback)((async e=>{const t=v(),a=await p.getToken();var n;I((n={limit:e?.limit??k,offset:e?.offset??b,token:a,sso:t?.sso,groupId:s},{type:m.t5,payload:o.Sx(n),meta:n}))}),[k,b]);(0,a.useEffect)((()=>{Z({limit:k,offset:0})}),[]);const A=[{title:M.formatMessage(g.Z.name),orderBy:"name"},{title:M.formatMessage(g.Z.description),orderBy:"description"},{title:M.formatMessage(g.Z.clientId),orderBy:"clientId"},{title:M.formatMessage(g.Z.owner),orderBy:"owner"},{title:M.formatMessage(g.Z.timeCreated),orderBy:"timeCreated"}];return n().createElement(d.M,{className:"rbac-service-accounts-list",columns:A,isSelectable:!0,rows:(E=C,h=e,E?.reduce(((e,t)=>[...e,{uuid:t.uuid,title:t.name,cells:[t.name,t.description,t.clientId,t.createdBy,n().createElement(a.Fragment,{key:`${t.name}-modified`},n().createElement(l.Z,{date:t.createdAt,type:(0,i.mh)(t.createdAt)}))],selected:Boolean(h&&h.find((e=>e.uuid===t.uuid)))||t.assignedToSelectedGroup,disableSelection:t.assignedToSelectedGroup}]),[])),data:C,fetchData:Z,isLoading:S,pagination:{limit:k,offset:b,...y===o.Xu?{count:b+C.length}:{}},paginationProps:{toggleTemplate:({firstIndex:e,lastIndex:t})=>n().createElement(n().Fragment,null,n().createElement("b",null,e," - ",t)," ","of ",n().createElement("b",null,y===o.Xu?b+C.length:"many")),isCompact:!0},checkedRows:e,setCheckedItems:t,titlePlural:M.formatMessage(g.Z.serviceAccounts).toLowerCase(),titleSingular:M.formatMessage(g.Z.serviceAccount),emptyProps:{title:M.formatMessage(g.Z.noServiceAccountsFound),description:[M.formatMessage(g.Z.contactServiceTeamForAccounts),""]},tableId:"group-add-accounts",ouiaId:"group-add-accounts"});var E,h},v=p},99187:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var a=s(28416),n=s.n(a),o=s(25387),c=s(86706),i=s(5904),r=s(31055),l=s(94229),u=s(23539),d=s(64380),m=s(62012),g=s(64756),f=s(83536),p=s(75614),v=s(77044),C=s(2550);const y=({serviceAccountReducer:e,groupReducer:{systemGroup:t}})=>({serviceAccounts:e.serviceAccounts,status:e.status,isLoading:e.isLoading,limit:e.limit,offset:e.offset,systemGroupUuid:t?.uuid}),k=({postMethod:e})=>{const t=(0,o.YB)(),s=(0,c.useDispatch)(),{groupId:k}=(0,m.useParams)(),[b,S]=(0,a.useState)([]),{systemGroupUuid:I}=(0,c.useSelector)(y),M=()=>{e()};return n().createElement(l.Modal,{isOpen:!0,className:"rbac",variant:l.ModalVariant.medium,title:t.formatMessage(C.Z.addServiceAccount),actions:[n().createElement(r.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:0===b.length,variant:"primary",onClick:()=>{const t=(0,v.w_)(k===p.Cn?I:k,b);s(t),e(t.payload)}},t.formatMessage(C.Z.addToGroup)),n().createElement(r.Button,{ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:M},t.formatMessage(C.Z.cancel))],onClose:M},n().createElement(u.Stack,{hasGutter:!0},n().createElement(u.StackItem,null,n().createElement(d.TextContent,null,t.formatMessage(C.Z.addServiceAccountsToGroupDescription),n().createElement(i.Alert,{className:"pf-v5-u-mt-sm rbac-service-accounts-alert",variant:"info",component:"span",isInline:!0,isPlain:!0,title:t.formatMessage(C.Z.visitServiceAccountsPage,{link:n().createElement(g.Z,{to:"/service-accounts",linkBasename:"/iam"},t.formatMessage(C.Z.serviceAccountsPage))})}))),n().createElement(u.StackItem,{className:"rbac-add-service-account-modal"},n().createElement(f.K,{selected:b,setSelected:S,groupId:k===p.Cn?I:k}))))}}}]);
//# sourceMappingURL=../sourcemaps/9009.e1ea1b81a5b8168b8fdb44a07016a6bd.js.map
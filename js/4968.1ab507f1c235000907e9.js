"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4968,459],{41435:(e,t,o)=>{o.d(t,{Dl:()=>i,dw:()=>s,e4:()=>c,ir:()=>a});var a,s,n=o(28416);!function(e){e.right="right",e.left="left"}(a||(a={})),function(e){e.up="up",e.down="down"}(s||(s={}));const i=n.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),c=n.createContext({keyHandler:null,sendRef:null})},86478:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a}),o(49854);const a={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},62136:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var a=o(28416),s=o.n(a),n=o(25387),i=o(86706),c=o(5904),l=o(31055),r=o(94229),m=o(23539),u=o(64380),d=o(62012),f=o(62410),p=o(55140),g=o(64756),v=o(97246),C=o(71079),h=o(40575),b=o(29301),k=o(75614),y=o(77044),M=o(2550);const A=({serviceAccountReducer:e,groupReducer:{systemGroup:t}})=>({serviceAccounts:e.serviceAccounts,status:e.status,isLoading:e.isLoading,limit:e.limit,offset:e.offset,systemGroupUuid:t?.uuid}),E=(e,t=[])=>e?.reduce(((e,o)=>[...e,{uuid:o.uuid,title:o.name,cells:[o.name,o.clientId,o.createdBy,s().createElement(a.Fragment,{key:`${o.name}-modified`},s().createElement(f.Z,{date:o.createdAt,type:(0,b.mh)(o.createdAt)}))],selected:Boolean(t&&t.find((e=>e.uuid===o.uuid)))}]),[]),Z=({postMethod:e})=>{const t=(0,n.YB)(),o=(0,i.useDispatch)(),{groupId:f}=(0,d.useParams)(),{auth:b,getEnvironmentDetails:Z}=(0,p.Z)(),[I,w]=(0,a.useState)([]),{serviceAccounts:S,status:B,limit:T,offset:x,isLoading:L,systemGroupUuid:D}=(0,i.useSelector)(A),P=(0,a.useCallback)((async e=>{const t=Z(),a=await b.getToken();var s;o((s={limit:e?.limit??T,offset:e?.offset??x,token:a,sso:t?.sso},{type:C.t5,payload:h.Sx(s),meta:s}))}),[T,x]);(0,a.useEffect)((()=>{P({limit:T,offset:0})}),[]);const G=()=>{e()},R=[{title:t.formatMessage(M.Z.name),orderBy:"name"},{title:t.formatMessage(M.Z.clientId),orderBy:"clientId"},{title:t.formatMessage(M.Z.owner),orderBy:"owner"},{title:t.formatMessage(M.Z.timeCreated),orderBy:"timeCreated"}];return s().createElement(r.Modal,{isOpen:!0,className:"rbac",variant:r.ModalVariant.medium,title:t.formatMessage(M.Z.addServiceAccount),actions:[s().createElement(l.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:0===I.length,variant:"primary",onClick:()=>{const t=(0,y.w_)(f===k.Cn?D:f,I);o(t),e(t.payload)}},t.formatMessage(M.Z.addToGroup)),s().createElement(l.Button,{ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:G},t.formatMessage(M.Z.cancel))],onClose:G},s().createElement(m.Stack,{hasGutter:!0},s().createElement(m.StackItem,null,s().createElement(u.TextContent,null,t.formatMessage(M.Z.addServiceAccountsToGroupDescription),s().createElement(c.Alert,{className:"pf-v5-u-mt-sm rbac-service-accounts-alert",variant:"info",component:"span",isInline:!0,isPlain:!0,title:t.formatMessage(M.Z.visitServiceAccountsPage,{link:s().createElement(g.Z,{to:"/service-accounts",linkBasename:"/iam"},t.formatMessage(M.Z.serviceAccountsPage))})}))),s().createElement(m.StackItem,{className:"rbac-add-service-account-modal"},s().createElement(v.M,{columns:R,isSelectable:!0,rows:E(S,I),data:S,fetchData:P,isLoading:L,pagination:{limit:T,offset:x,...B===h.Xu?{count:x+S.length}:{}},paginationProps:{toggleTemplate:({firstIndex:e,lastIndex:t})=>s().createElement(s().Fragment,null,s().createElement("b",null,e," - ",t)," ","of ",s().createElement("b",null,B===h.Xu?x+S.length:"many")),isCompact:!0},checkedRows:I,setCheckedItems:w,titlePlural:t.formatMessage(M.Z.serviceAccounts).toLowerCase(),titleSingular:t.formatMessage(M.Z.serviceAccount),emptyProps:{title:t.formatMessage(M.Z.noServiceAccountsFound),description:[t.formatMessage(M.Z.contactServiceTeamForAccounts),""]},tableId:"group-add-accounts",ouiaId:"group-add-accounts"}))))}}}]);
//# sourceMappingURL=../sourcemaps/4968.800efd77dc13d66b8c129637f3b5e917.js.map
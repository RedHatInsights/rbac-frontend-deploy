(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[5055,459],{41448:(e,t,a)=>{"use strict";a.d(t,{b:()=>h,U:()=>T});var s=a(65353),n=a(66029),o=a(38296);a(81754);const i={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var c=a(68778),r=a(43047),l=a(69957),m=a(53688),d=a(34143);const u={success:c.ZP,danger:r.ZP,warning:l.ZP,info:m.ZP,custom:d.ZP},p=e=>{var{variant:t,customIcon:a,className:c=""}=e,r=(0,s.__rest)(e,["variant","customIcon","className"]);const l=u[t];return l?n.createElement("div",Object.assign({},r,{className:(0,o.css)(i.alertIcon,c)}),a||n.createElement(l,null)):null};var f=a(80164),g=a(62472),v=a(21133);const b="--pf-v5-c-alert__title--max-lines";var E=a(35224),x=a(47173),_=a(93174);const C=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:c,isExpanded:r=!1}=e,l=(0,s.__rest)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:m,variantLabel:d}=n.useContext(v.w);return n.createElement(x.zx,Object.assign({variant:x.Wu.plain,onClick:c,"aria-expanded":r,"aria-label":""===t?`Toggle ${a||d} alert: ${m}`:t},l),n.createElement("span",{className:(0,o.css)(i.alertToggleIcon)},n.createElement(_.default,{"aria-hidden":"true"})))};var T;C.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(T||(T={}));const h=e=>{var{variant:t=T.custom,isInline:a=!1,isPlain:c=!1,isLiveRegion:r=!1,variantLabel:l=`${(0,f.kC)(t)} alert:`,actionClose:m,actionLinks:d,title:u,component:x="h4",children:_="",className:I="",ouiaId:k,ouiaSafe:y=!0,timeout:A=!1,timeoutAnimation:S=3e3,onTimeout:Z=(()=>{}),truncateTitle:L=0,tooltipPosition:N,customIcon:M,isExpandable:w=!1,toggleAriaLabel:B=`${(0,f.kC)(t)} alert details`,onMouseEnter:P=(()=>{}),onMouseLeave:D=(()=>{}),id:G}=e,R=(0,s.__rest)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const O=(0,g.useOUIAProps)(h.displayName,k,y,t),F=n.createElement(n.Fragment,null,n.createElement("span",{className:"pf-v5-screen-reader"},l),u),j=n.useRef(null),H=x,$=n.useRef(),[U,z]=(0,n.useState)(!1);n.useEffect((()=>{if(!j.current||!L)return;j.current.style.setProperty(b,L.toString());const e=j.current&&j.current.offsetHeight<j.current.scrollHeight;U!==e&&z(e)}),[j,L,U]);const[K,V]=(0,n.useState)(!1),[X,Y]=(0,n.useState)(!0),[W,q]=(0,n.useState)(),[J,Q]=(0,n.useState)(),ee=K&&X&&!W&&!J;n.useEffect((()=>{const e=!0===A?8e3:Number(A);if(e>0){const t=setTimeout((()=>V(!0)),e);return()=>clearTimeout(t)}}),[A]),n.useEffect((()=>{const e=()=>{$.current&&($.current.contains(document.activeElement)?(Q(!0),Y(!1)):J&&Q(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[J]),n.useEffect((()=>{if(!1===J||!1===W){const e=setTimeout((()=>Y(!0)),S);return()=>clearTimeout(e)}}),[J,W,S]),n.useEffect((()=>{ee&&Z()}),[ee,Z]);const[te,ae]=(0,n.useState)(!1);if(ee)return null;const se=n.createElement(H,Object.assign({},U&&{tabIndex:0},{ref:j,className:(0,o.css)(i.alertTitle,L&&i.modifiers.truncate)}),F);return n.createElement("div",Object.assign({ref:$,className:(0,o.css)(i.alert,a&&i.modifiers.inline,c&&i.modifiers.plain,w&&i.modifiers.expandable,te&&i.modifiers.expanded,i.modifiers[t],I)},O,r&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{q(!0),Y(!1),P(e)},onMouseLeave:e=>{q(!1),D(e)},id:G},R),w&&n.createElement(v.w.Provider,{value:{title:u,variantLabel:l}},n.createElement("div",{className:(0,o.css)(i.alertToggle)},n.createElement(C,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":B}))),n.createElement(p,{variant:t,customIcon:M}),U?n.createElement(E.u,{content:F,position:N},se):se,m&&n.createElement(v.w.Provider,{value:{title:u,variantLabel:l}},n.createElement("div",{className:(0,o.css)(i.alertAction)},m)),_&&(!w||w&&te)&&n.createElement("div",{className:(0,o.css)(i.alertDescription)},_),d&&n.createElement("div",{className:(0,o.css)(i.alertActionGroup)},d))};h.displayName="Alert"},21133:(e,t,a)=>{"use strict";a.d(t,{w:()=>s});const s=a(66029).createContext(null)},68774:(e,t,a)=>{"use strict";a.d(t,{D:()=>c});var s=a(65353),n=a(66029),o=a(62873),i=a(38296);const c=e=>{var{children:t,className:a="",isVisited:c=!1}=e,r=(0,s.__rest)(e,["children","className","isVisited"]);return n.createElement("div",Object.assign({},r,{className:(0,i.css)(o.Z.content,c&&o.Z.modifiers.visited,a)}),t)};c.displayName="TextContent"},41435:(e,t,a)=>{"use strict";a.d(t,{Dl:()=>i,dw:()=>n,e4:()=>c,ir:()=>s});var s,n,o=a(66029);!function(e){e.right="right",e.left="left"}(s||(s={})),function(e){e.up="up",e.down="down"}(n||(n={}));const i=o.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),c=o.createContext({keyHandler:null,sendRef:null})},19993:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s}),a(70347);const s={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},62702:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s}),a(25238);const s={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},83536:(e,t,a)=>{"use strict";a.d(t,{K:()=>g,Z:()=>v});var s=a(66029),n=a.n(s),o=a(40575),i=a(25387),c=a(29301),r=a(55140),l=a(62410),m=a(86706),d=a(97246),u=a(71079),p=a(2550);const f=({serviceAccountReducer:e})=>({serviceAccounts:e.serviceAccounts,status:e.status,isLoading:e.isLoading,limit:e.limit,offset:e.offset}),g=({selected:e,setSelected:t,groupId:a})=>{const{auth:g,getEnvironmentDetails:v}=(0,r.Z)(),{serviceAccounts:b,status:E,limit:x,offset:_,isLoading:C}=(0,m.useSelector)(f),T=(0,m.useDispatch)(),h=(0,i.YB)(),I=(0,s.useCallback)((async e=>{const t=v(),s=await g.getToken();var n;T((n={limit:e?.limit??x,offset:e?.offset??_,token:s,sso:t?.sso,groupId:a},{type:u.t5,payload:o.Sx(n),meta:n}))}),[x,_]);(0,s.useEffect)((()=>{I({limit:x,offset:0})}),[]);const k=[{title:h.formatMessage(p.Z.name),orderBy:"name"},{title:h.formatMessage(p.Z.description),orderBy:"description"},{title:h.formatMessage(p.Z.clientId),orderBy:"clientId"},{title:h.formatMessage(p.Z.owner),orderBy:"owner"},{title:h.formatMessage(p.Z.timeCreated),orderBy:"timeCreated"}];return n().createElement(d.M,{className:"rbac-service-accounts-list",columns:k,isSelectable:!0,rows:(y=b,A=e,y?.reduce(((e,t)=>[...e,{uuid:t.uuid,title:t.name,cells:[t.name,t.description,t.clientId,t.createdBy,n().createElement(s.Fragment,{key:`${t.name}-modified`},n().createElement(l.Z,{date:t.createdAt,type:(0,c.mh)(t.createdAt)}))],selected:Boolean(A&&A.find((e=>e.uuid===t.uuid)))||t.assignedToSelectedGroup,disableSelection:t.assignedToSelectedGroup}]),[])),data:b,fetchData:I,isLoading:C,pagination:{limit:x,offset:_,...E===o.Xu?{count:_+b.length}:{}},paginationProps:{toggleTemplate:({firstIndex:e,lastIndex:t})=>n().createElement(n().Fragment,null,n().createElement("b",null,e," - ",t)," ","of ",n().createElement("b",null,E===o.Xu?_+b.length:"many")),isCompact:!0},checkedRows:e,setCheckedItems:t,titlePlural:h.formatMessage(p.Z.serviceAccounts).toLowerCase(),titleSingular:h.formatMessage(p.Z.serviceAccount),emptyProps:{title:h.formatMessage(p.Z.noServiceAccountsFound),description:[h.formatMessage(p.Z.contactServiceTeamForAccounts),""]},tableId:"group-add-accounts",ouiaId:"group-add-accounts"});var y,A},v=g},99187:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var s=a(66029),n=a.n(s),o=a(25387),i=a(86706),c=a(80236),r=a(47173),l=a(49739),m=a(83826),d=a(68774),u=a(41448),p=a(62012),f=a(64756),g=a(83536),v=a(75614),b=a(77044),E=a(2550);const x=({serviceAccountReducer:e,groupReducer:{systemGroup:t}})=>({serviceAccounts:e.serviceAccounts,status:e.status,isLoading:e.isLoading,limit:e.limit,offset:e.offset,systemGroupUuid:t?.uuid}),_=({postMethod:e})=>{const t=(0,o.YB)(),a=(0,i.useDispatch)(),{groupId:_}=(0,p.useParams)(),[C,T]=(0,s.useState)([]),{systemGroupUuid:h}=(0,i.useSelector)(x),I=()=>{e()};return n().createElement(c.u,{isOpen:!0,className:"rbac",variant:c.v.medium,title:t.formatMessage(E.Z.addServiceAccount),actions:[n().createElement(r.zx,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:0===C.length,variant:"primary",onClick:()=>{const t=(0,b.w_)(_===v.Cn?h:_,C);a(t),e(t.payload)}},t.formatMessage(E.Z.addToGroup)),n().createElement(r.zx,{ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:I},t.formatMessage(E.Z.cancel))],onClose:I},n().createElement(l.K,{hasGutter:!0},n().createElement(m.v,null,n().createElement(d.D,null,t.formatMessage(E.Z.addServiceAccountsToGroupDescription),n().createElement(u.b,{className:"pf-v5-u-mt-sm rbac-service-accounts-alert",variant:"info",component:"span",isInline:!0,isPlain:!0,title:t.formatMessage(E.Z.visitServiceAccountsPage,{link:n().createElement(f.Z,{to:"/service-accounts",linkBasename:"/iam"},t.formatMessage(E.Z.serviceAccountsPage))})}))),n().createElement(m.v,{className:"rbac-add-service-account-modal"},n().createElement(g.K,{selected:C,setSelected:T,groupId:_===v.Cn?h:_}))))}},81754:()=>{},70347:()=>{},25238:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5055.6f7680044c1c44cbe2ec06544d57d98f.js.map
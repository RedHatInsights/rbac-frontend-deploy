(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8926],{41448:(e,t,a)=>{"use strict";a.d(t,{b:()=>_,U:()=>N});var n=a(65353),s=a(66029),r=a(38296);a(81754);const i={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var l=a(68778),o=a(43047),c=a(69957),u=a(53688),m=a(34143);const d={success:l.ZP,danger:o.ZP,warning:c.ZP,info:u.ZP,custom:m.ZP},p=e=>{var{variant:t,customIcon:a,className:l=""}=e,o=(0,n.__rest)(e,["variant","customIcon","className"]);const c=d[t];return c?s.createElement("div",Object.assign({},o,{className:(0,r.css)(i.alertIcon,l)}),a||s.createElement(c,null)):null};var v=a(80164),f=a(62472),g=a(21133);const C="--pf-v5-c-alert__title--max-lines";var E=a(35224),b=a(47173),h=a(93174);const L=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:l,isExpanded:o=!1}=e,c=(0,n.__rest)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:u,variantLabel:m}=s.useContext(g.w);return s.createElement(b.zx,Object.assign({variant:b.Wu.plain,onClick:l,"aria-expanded":o,"aria-label":""===t?`Toggle ${a||m} alert: ${u}`:t},c),s.createElement("span",{className:(0,r.css)(i.alertToggleIcon)},s.createElement(h.default,{"aria-hidden":"true"})))};var N;L.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(N||(N={}));const _=e=>{var{variant:t=N.custom,isInline:a=!1,isPlain:l=!1,isLiveRegion:o=!1,variantLabel:c=`${(0,v.kC)(t)} alert:`,actionClose:u,actionLinks:m,title:d,component:b="h4",children:h="",className:T="",ouiaId:x,ouiaSafe:w=!0,timeout:A=!1,timeoutAnimation:k=3e3,onTimeout:I=(()=>{}),truncateTitle:P=0,tooltipPosition:O,customIcon:y,isExpandable:M=!1,toggleAriaLabel:R=`${(0,v.kC)(t)} alert details`,onMouseEnter:S=(()=>{}),onMouseLeave:Z=(()=>{}),id:j}=e,z=(0,n.__rest)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const $=(0,f.useOUIAProps)(_.displayName,x,w,t),G=s.createElement(s.Fragment,null,s.createElement("span",{className:"pf-v5-screen-reader"},c),d),B=s.useRef(null),D=b,U=s.useRef(),[W,H]=(0,s.useState)(!1);s.useEffect((()=>{if(!B.current||!P)return;B.current.style.setProperty(C,P.toString());const e=B.current&&B.current.offsetHeight<B.current.scrollHeight;W!==e&&H(e)}),[B,P,W]);const[q,F]=(0,s.useState)(!1),[V,J]=(0,s.useState)(!0),[K,Q]=(0,s.useState)(),[X,Y]=(0,s.useState)(),ee=q&&V&&!K&&!X;s.useEffect((()=>{const e=!0===A?8e3:Number(A);if(e>0){const t=setTimeout((()=>F(!0)),e);return()=>clearTimeout(t)}}),[A]),s.useEffect((()=>{const e=()=>{U.current&&(U.current.contains(document.activeElement)?(Y(!0),J(!1)):X&&Y(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[X]),s.useEffect((()=>{if(!1===X||!1===K){const e=setTimeout((()=>J(!0)),k);return()=>clearTimeout(e)}}),[X,K,k]),s.useEffect((()=>{ee&&I()}),[ee,I]);const[te,ae]=(0,s.useState)(!1);if(ee)return null;const ne=s.createElement(D,Object.assign({},W&&{tabIndex:0},{ref:B,className:(0,r.css)(i.alertTitle,P&&i.modifiers.truncate)}),G);return s.createElement("div",Object.assign({ref:U,className:(0,r.css)(i.alert,a&&i.modifiers.inline,l&&i.modifiers.plain,M&&i.modifiers.expandable,te&&i.modifiers.expanded,i.modifiers[t],T)},$,o&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{Q(!0),J(!1),S(e)},onMouseLeave:e=>{Q(!1),Z(e)},id:j},z),M&&s.createElement(g.w.Provider,{value:{title:d,variantLabel:c}},s.createElement("div",{className:(0,r.css)(i.alertToggle)},s.createElement(L,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":R}))),s.createElement(p,{variant:t,customIcon:y}),W?s.createElement(E.u,{content:G,position:O},ne):ne,u&&s.createElement(g.w.Provider,{value:{title:d,variantLabel:c}},s.createElement("div",{className:(0,r.css)(i.alertAction)},u)),h&&(!M||M&&te)&&s.createElement("div",{className:(0,r.css)(i.alertDescription)},h),m&&s.createElement("div",{className:(0,r.css)(i.alertActionGroup)},m))};_.displayName="Alert"},56715:(e,t,a)=>{"use strict";a.d(t,{g:()=>o});var n=a(65353),s=a(66029),r=a(47173),i=a(24307),l=a(21133);const o=e=>{var{className:t,onClose:a=(()=>{}),"aria-label":o="",variantLabel:c}=e,u=(0,n.__rest)(e,["className","onClose","aria-label","variantLabel"]);return s.createElement(l.w.Consumer,null,(({title:e,variantLabel:n})=>s.createElement(r.zx,Object.assign({variant:r.Wu.plain,onClick:a,"aria-label":""===o?`Close ${c||n} alert: ${e}`:o,className:t},u),s.createElement(i.ZP,null))))};o.displayName="AlertActionCloseButton"},21133:(e,t,a)=>{"use strict";a.d(t,{w:()=>n});const n=a(66029).createContext(null)},48926:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Alert:()=>n.b,AlertActionCloseButton:()=>r.g,AlertActionLink:()=>c,AlertContext:()=>s.w,AlertGroup:()=>f,AlertVariant:()=>n.U});var n=a(41448),s=a(21133),r=a(56715),i=a(65353),l=a(66029),o=a(47173);const c=e=>{var{className:t="",children:a}=e,n=(0,i.__rest)(e,["className","children"]);return l.createElement(o.zx,Object.assign({variant:o.Wu.link,isInline:!0,className:t},n),a)};c.displayName="AlertActionLink";var u=a(37704),m=a(80164),d=a(38296);a(81235);const p="pf-m-toast",v=e=>{var{className:t,children:a,isToast:n,isLiveRegion:s,onOverflowClick:r,overflowMessage:o}=e,c=(0,i.__rest)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage"]);return l.createElement("ul",Object.assign({role:"list","aria-live":s?"polite":null,"aria-atomic":!s&&null,className:(0,d.css)("pf-v5-c-alert-group",t,n?p:"")},c),l.Children.toArray(a).map(((e,t)=>{var a;return l.createElement("li",{key:(null===(a=e.props)||void 0===a?void 0:a.id)||t},e)})),o&&l.createElement("li",null,l.createElement("button",{onClick:r,className:(0,d.css)("pf-v5-c-alert-group__overflow-button")},o)))};v.displayName="AlertGroupInline";class f extends l.Component{constructor(){super(...arguments),this.state={container:void 0}}componentDidMount(){const e=document.createElement("div"),t=this.getTargetElement();this.setState({container:e}),t.appendChild(e)}componentWillUnmount(){const e=this.getTargetElement();this.state.container&&e.removeChild(this.state.container)}getTargetElement(){const e=this.props.appendTo;return"function"==typeof e?e():e||document.body}render(){const e=this.props,{className:t,children:a,isToast:n,isLiveRegion:s,onOverflowClick:r,overflowMessage:o,"aria-label":c,appendTo:d}=e,p=(0,i.__rest)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage","aria-label","appendTo"]),f=l.createElement(v,Object.assign({onOverflowClick:r,className:t,isToast:n,isLiveRegion:s,overflowMessage:o,"aria-label":c},p),a);if(!this.props.isToast)return f;const g=this.state.container;return m.Nq&&g?u.createPortal(f,g):null}}f.displayName="AlertGroup"},34143:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},53688:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},81235:()=>{},81754:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8926.f0e6f8a8f298b639dc261cafaaf3bc9e.js.map
(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[6243],{26243:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Alert:()=>N,AlertActionCloseButton:()=>T,AlertActionLink:()=>x,AlertContext:()=>g,AlertGroup:()=>I,AlertVariant:()=>A});var n=a(8674),s=a(93345),r=a(33774);a(16789);const i={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var l=a(19202),o=a(31003),c=a(99851),m=a(29962),u=a(79284);const d={success:l.default,danger:o.Ay,warning:c.Ay,info:m.Ay,custom:u.Ay},p=e=>{var{variant:t,customIcon:a,className:l=""}=e,o=(0,n.__rest)(e,["variant","customIcon","className"]);const c=d[t];return c?s.createElement("div",Object.assign({},o,{className:(0,r.css)(i.alertIcon,l)}),a||s.createElement(c,null)):null};var v=a(47931),f=a(31398);const g=s.createContext(null),C="--pf-v5-c-alert__title--max-lines";var E=a(35280),b=a(72583),h=a(89015);const L=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:l,isExpanded:o=!1}=e,c=(0,n.__rest)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:m,variantLabel:u}=s.useContext(g);return s.createElement(b.$n,Object.assign({variant:b.Ak.plain,onClick:l,"aria-expanded":o,"aria-label":""===t?`Toggle ${a||u} alert: ${m}`:t},c),s.createElement("span",{className:(0,r.css)(i.alertToggleIcon)},s.createElement(h.default,{"aria-hidden":"true"})))};var A;L.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(A||(A={}));const N=e=>{var{variant:t=A.custom,isInline:a=!1,isPlain:l=!1,isLiveRegion:o=!1,variantLabel:c=`${(0,v.ZH)(t)} alert:`,actionClose:m,actionLinks:u,title:d,component:b="h4",children:h="",className:_="",ouiaId:T,ouiaSafe:x=!0,timeout:k=!1,timeoutAnimation:w=3e3,onTimeout:y=()=>{},truncateTitle:I=0,tooltipPosition:O,customIcon:M,isExpandable:P=!1,toggleAriaLabel:S=`${(0,v.ZH)(t)} alert details`,onMouseEnter:R=()=>{},onMouseLeave:$=()=>{},id:j}=e,G=(0,n.__rest)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const B=(0,f.useOUIAProps)(N.displayName,T,x,t),D=s.createElement(s.Fragment,null,s.createElement("span",{className:"pf-v5-screen-reader"},c),d),H=s.useRef(null),Z=b,z=s.useRef(),[U,F]=(0,s.useState)(!1);s.useEffect((()=>{if(!H.current||!I)return;H.current.style.setProperty(C,I.toString());const e=H.current&&H.current.offsetHeight<H.current.scrollHeight;U!==e&&F(e)}),[H,I,U]);const[V,W]=(0,s.useState)(!1),[q,J]=(0,s.useState)(!0),[K,Q]=(0,s.useState)(),[X,Y]=(0,s.useState)(),ee=V&&q&&!K&&!X;s.useEffect((()=>{const e=!0===k?8e3:Number(k);if(e>0){const t=setTimeout((()=>W(!0)),e);return()=>clearTimeout(t)}}),[k]),s.useEffect((()=>{const e=()=>{z.current&&(z.current.contains(document.activeElement)?(Y(!0),J(!1)):X&&Y(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[X]),s.useEffect((()=>{if(!1===X||!1===K){const e=setTimeout((()=>J(!0)),w);return()=>clearTimeout(e)}}),[X,K,w]),s.useEffect((()=>{ee&&y()}),[ee,y]);const[te,ae]=(0,s.useState)(!1);if(ee)return null;const ne=s.createElement(Z,Object.assign({},U&&{tabIndex:0},{ref:H,className:(0,r.css)(i.alertTitle,I&&i.modifiers.truncate)}),D);return s.createElement("div",Object.assign({ref:z,className:(0,r.css)(i.alert,a&&i.modifiers.inline,l&&i.modifiers.plain,P&&i.modifiers.expandable,te&&i.modifiers.expanded,i.modifiers[t],_)},B,o&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{Q(!0),J(!1),R(e)},onMouseLeave:e=>{Q(!1),$(e)},id:j},G),P&&s.createElement(g.Provider,{value:{title:d,variantLabel:c}},s.createElement("div",{className:(0,r.css)(i.alertToggle)},s.createElement(L,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":S}))),s.createElement(p,{variant:t,customIcon:M}),U?s.createElement(E.m,{content:D,position:O},ne):ne,m&&s.createElement(g.Provider,{value:{title:d,variantLabel:c}},s.createElement("div",{className:(0,r.css)(i.alertAction)},m)),h&&(!P||P&&te)&&s.createElement("div",{className:(0,r.css)(i.alertDescription)},h),u&&s.createElement("div",{className:(0,r.css)(i.alertActionGroup)},u))};N.displayName="Alert";var _=a(44397);const T=e=>{var{className:t,onClose:a=()=>{},"aria-label":r="",variantLabel:i}=e,l=(0,n.__rest)(e,["className","onClose","aria-label","variantLabel"]);return s.createElement(g.Consumer,null,(({title:e,variantLabel:n})=>s.createElement(b.$n,Object.assign({variant:b.Ak.plain,onClick:a,"aria-label":""===r?`Close ${i||n} alert: ${e}`:r,className:t},l),s.createElement(_.default,null))))};T.displayName="AlertActionCloseButton";const x=e=>{var{className:t="",children:a}=e,r=(0,n.__rest)(e,["className","children"]);return s.createElement(b.$n,Object.assign({variant:b.Ak.link,isInline:!0,className:t},r),a)};x.displayName="AlertActionLink";var k=a(7628);a(66403);const w="pf-m-toast",y=e=>{var{className:t,children:a,isToast:i,isLiveRegion:l,onOverflowClick:o,overflowMessage:c}=e,m=(0,n.__rest)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage"]);return s.createElement("ul",Object.assign({role:"list","aria-live":l?"polite":null,"aria-atomic":!l&&null,className:(0,r.css)("pf-v5-c-alert-group",t,i?w:"")},m),s.Children.toArray(a).map(((e,t)=>{var a;return s.createElement("li",{key:(null===(a=e.props)||void 0===a?void 0:a.id)||t},e)})),c&&s.createElement("li",null,s.createElement("button",{onClick:o,className:(0,r.css)("pf-v5-c-alert-group__overflow-button")},c)))};y.displayName="AlertGroupInline";class I extends s.Component{constructor(){super(...arguments),this.state={container:void 0}}componentDidMount(){const e=document.createElement("div"),t=this.getTargetElement();this.setState({container:e}),t.appendChild(e)}componentWillUnmount(){const e=this.getTargetElement();this.state.container&&e.removeChild(this.state.container)}getTargetElement(){const e=this.props.appendTo;return"function"==typeof e?e():e||document.body}render(){const e=this.props,{className:t,children:a,isToast:r,isLiveRegion:i,onOverflowClick:l,overflowMessage:o,"aria-label":c,appendTo:m}=e,u=(0,n.__rest)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage","aria-label","appendTo"]),d=s.createElement(y,Object.assign({onOverflowClick:l,className:t,isToast:r,isLiveRegion:i,overflowMessage:o,"aria-label":c},u),a);if(!this.props.isToast)return d;const p=this.state.container;return v.Sw&&p?k.createPortal(d,p):null}}I.displayName="AlertGroup"},79284:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},29962:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})},66403:()=>{},16789:()=>{}}]);
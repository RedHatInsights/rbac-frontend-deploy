"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[236,7982],{80236:(e,a,t)=>{t.d(a,{u:()=>u,v:()=>l});var l,s=t(65353),i=t(28416),o=t(31051),r=t(1774),n=t(80164),c=t(38296),d=t(19993),m=t(21142),p=t(62472);!function(e){e.small="small",e.medium="medium",e.large="large",e.default="default"}(l||(l={}));class u extends i.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{var a,t;const{onEscapePress:l}=this.props;e.key===r.yu.Escape&&this.props.isOpen&&(l?l(e):null===(t=(a=this.props).onClose)||void 0===t||t.call(a,e))},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:a}=this.props,t=this.getElement(a).children;for(const a of Array.from(t))a!==this.state.container&&(e?a.setAttribute("aria-hidden",""+e):a.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const a=u.currentId++,t=a+1,l=a+2;this.boxId=e.id||`pf-modal-part-${a}`,this.labelId=`pf-modal-part-${t}`,this.descriptorId=`pf-modal-part-${l}`,this.state={container:void 0,ouiaStateId:(0,p.getDefaultOUIAId)(u.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:a,"aria-label":t,"aria-labelledby":l,hasNoBodyWrapper:s,header:i}=this.props,o=this.getElement(e),r=document.createElement("div");this.setState({container:r}),o.appendChild(r),o.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?o.classList.add((0,c.css)(d.default.backdropOpen)):o.classList.remove((0,c.css)(d.default.backdropOpen)),this.isEmpty(a)&&this.isEmpty(t)&&this.isEmpty(l)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(t)&&this.isEmpty(l)&&(s||i)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,a=this.getElement(e);this.props.isOpen?(a.classList.add((0,c.css)(d.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(a.classList.remove((0,c.css)(d.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,a=this.getElement(e);this.state.container&&a.removeChild(this.state.container),a.removeEventListener("keydown",this.handleEscKeyClick,!1),a.classList.remove((0,c.css)(d.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1)}render(){const e=this.props,{appendTo:a,onEscapePress:t,"aria-labelledby":l,"aria-label":r,"aria-describedby":c,bodyAriaLabel:d,bodyAriaRole:p,title:u,titleIconVariant:b,titleLabel:h,ouiaId:f,ouiaSafe:y,position:v,elementToFocus:g}=e,C=(0,s.__rest)(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","bodyAriaLabel","bodyAriaRole","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe","position","elementToFocus"]),{container:E}=this.state;return n.Nq&&E?o.createPortal(i.createElement(m.h,Object.assign({},C,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:u,titleIconVariant:b,titleLabel:h,"aria-label":r,"aria-describedby":c,"aria-labelledby":l,bodyAriaLabel:d,bodyAriaRole:p,ouiaId:void 0!==f?f:this.state.ouiaStateId,ouiaSafe:y,position:v,elementToFocus:g})),E):null}}u.displayName="Modal",u.currentId=0,u.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0,position:"default"}},2914:(e,a,t)=>{t.d(a,{c:()=>n});var l=t(65353),s=t(28416),i=t(38296),o=t(62702);const r="--pf-v5-c-modal-box--m-align-top--spacer",n=e=>{var{children:a,className:t="",variant:n="default",position:c,positionOffset:d,"aria-labelledby":m,"aria-label":p="","aria-describedby":u,style:b}=e,h=(0,l.__rest)(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return d&&((b=b||{})[r]=d),s.createElement("div",Object.assign({},h,{role:"dialog","aria-label":p||null,"aria-labelledby":m||null,"aria-describedby":u,"aria-modal":"true",className:(0,i.css)(o.default.modalBox,t,"top"===c&&o.default.modifiers.alignTop,"large"===n&&o.default.modifiers.lg,"small"===n&&o.default.modifiers.sm,"medium"===n&&o.default.modifiers.md),style:b}),a)};n.displayName="ModalBox"},92434:(e,a,t)=>{t.d(a,{$:()=>r});var l=t(65353),s=t(28416),i=t(38296),o=t(62702);const r=e=>{var{children:a=null,className:t=""}=e,r=(0,l.__rest)(e,["children","className"]);return s.createElement("div",Object.assign({},r,{className:(0,i.css)(o.default.modalBoxBody,t)}),a)};r.displayName="ModalBoxBody"},93884:(e,a,t)=>{t.d(a,{I:()=>c});var l=t(65353),s=t(28416),i=t(38296),o=t(62702),r=t(47173),n=t(24307);const c=e=>{var{className:a,onClose:t=(()=>{}),"aria-label":d="Close",ouiaId:m}=e,p=(0,l.__rest)(e,["className","onClose","aria-label","ouiaId"]);return s.createElement("div",{className:(0,i.css)(o.default.modalBoxClose,a)},s.createElement(r.zx,Object.assign({variant:"plain",onClick:e=>t(e),"aria-label":d},m&&{ouiaId:`${m}-${c.displayName}`},p),s.createElement(n.ZP,null)))};c.displayName="ModalBoxCloseButton"},51898:(e,a,t)=>{t.d(a,{t:()=>r});var l=t(65353),s=t(28416),i=t(38296),o=t(62702);const r=e=>{var{children:a=null,className:t=""}=e,r=(0,l.__rest)(e,["children","className"]);return s.createElement("footer",Object.assign({},r,{className:(0,i.css)(o.default.modalBoxFooter,t)}),a)};r.displayName="ModalBoxFooter"},80478:(e,a,t)=>{t.d(a,{R:()=>r});var l=t(65353),s=t(28416),i=t(38296),o=t(62702);const r=e=>{var{children:a=null,className:t="",help:r=null}=e,n=(0,l.__rest)(e,["children","className","help"]);return s.createElement("header",Object.assign({className:(0,i.css)(o.default.modalBoxHeader,r&&o.default.modifiers.help,t)},n),r&&s.createElement(s.Fragment,null,s.createElement("div",{className:(0,i.css)(o.default.modalBoxHeaderMain)},a),s.createElement("div",{className:"pf-v5-c-modal-box__header-help"},r)),!r&&a)};r.displayName="ModalBoxHeader"},21142:(e,a,t)=>{t.d(a,{h:()=>k});var l=t(65353),s=t(28416),i=t(99578),o=t(62702),r=t(66042),n=t(38296),c=t(62472),d=t(19993);const m=e=>{var{children:a=null,className:t=""}=e,i=(0,l.__rest)(e,["children","className"]);return s.createElement("div",Object.assign({},i,{className:(0,n.css)(d.default.backdrop,t)}),a)};m.displayName="Backdrop";var p=t(92434),u=t(93884),b=t(2914),h=t(51898);const f=e=>{var{children:a=null,className:t="",id:i=""}=e,r=(0,l.__rest)(e,["children","className","id"]);return s.createElement("div",Object.assign({},r,{id:i,className:(0,n.css)(o.default.modalBoxDescription,t)}),a)};f.displayName="ModalBoxDescription";var y=t(80478),v=t(80164),g=t(35224),C=t(68778),E=t(43047),I=t(69957),N=t(53688),x=t(34143),O=t(6551);const L=e=>["success","danger","warning","info","custom"].includes(e),B=e=>{var{className:a="",id:t,title:i,titleIconVariant:r,titleLabel:c=""}=e,d=(0,l.__rest)(e,["className","id","title","titleIconVariant","titleLabel"]);const[m,p]=s.useState(!1),u=s.useRef(null),b=c||(L(r)?`${(0,v.kC)(r)} alert:`:c),h={success:s.createElement(C.default,null),danger:s.createElement(E.default,null),warning:s.createElement(I.default,null),info:s.createElement(N.ZP,null),custom:s.createElement(x.ZP,null)},f=!L(r)&&r;(0,O.L)((()=>{p(u.current&&u.current.offsetWidth<u.current.scrollWidth)}),[]);const y=s.createElement("h1",Object.assign({id:t,ref:u,className:(0,n.css)(o.default.modalBoxTitle,r&&o.default.modifiers.icon,a)},d),r&&s.createElement("span",{className:(0,n.css)(o.default.modalBoxTitleIcon)},L(r)?h[r]:s.createElement(f,null)),b&&s.createElement("span",{className:"pf-v5-screen-reader"},b),s.createElement("span",{className:(0,n.css)(o.default.modalBoxTitleText)},i));return m?s.createElement(g.u,{content:i},y):y};B.displayName="ModalBoxTitle";const k=e=>{var{children:a,className:t="",isOpen:d=!1,header:v=null,help:g=null,description:C=null,title:E="",titleIconVariant:I=null,titleLabel:N="","aria-label":x="","aria-describedby":O,"aria-labelledby":T,bodyAriaLabel:_,bodyAriaRole:M,showClose:S=!0,footer:w=null,actions:A=[],onClose:F=(()=>{}),variant:P="default",position:j,positionOffset:R,width:W,maxWidth:$,boxId:z,labelId:V,descriptorId:Z,disableFocusTrap:D=!1,hasNoBodyWrapper:H=!1,ouiaId:U,ouiaSafe:K=!0,elementToFocus:q}=e,G=(0,l.__rest)(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","bodyAriaLabel","bodyAriaRole","showClose","footer","actions","onClose","variant","position","positionOffset","width","maxWidth","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe","elementToFocus"]);if(!d)return null;const J=v?s.createElement(y.R,{help:g},v):E&&s.createElement(y.R,{help:g},s.createElement(B,{title:E,titleIconVariant:I,titleLabel:N,id:V}),C&&s.createElement(f,{id:Z},C)),Q=w?s.createElement(h.t,null,w):A.length>0&&s.createElement(h.t,null,A),X=_?"region":void 0,Y=C||O?void 0:Z,ee=H?a:s.createElement(p.$,Object.assign({"aria-label":_,role:M||X},G,{id:Y}),a),ae=s.createElement(b.c,Object.assign({id:z,className:(0,n.css)(t,L(I)&&o.default.modifiers[I]),variant:P,position:j,positionOffset:R,"aria-label":x,"aria-labelledby":(()=>{if(null===T)return null;const e=[];return""!==(x&&z)&&e.push(x&&z),T&&e.push(T),E&&e.push(V),e.join(" ")})(),"aria-describedby":O||(H?null:Z)},(0,c.getOUIAProps)(k.displayName,U,K),{style:Object.assign(Object.assign({},W&&{"--pf-v5-c-modal-box--Width":"number"!=typeof W?W:`${W}px`}),$&&{"--pf-v5-c-modal-box--MaxWidth":"number"!=typeof $?$:`${$}px`})}),S&&s.createElement(u.I,{onClose:e=>F(e),ouiaId:U}),J,ee,Q);return s.createElement(m,null,s.createElement(i.i,{active:!D,focusTrapOptions:{clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"},initialFocus:q||void 0},className:(0,n.css)(r.default.bullseye)},ae))};k.displayName="ModalContent"},34143:(e,a,t)=>{t.d(a,{ZP:()=>l});const l=(0,t(40400).I)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0})},68778:(e,a,t)=>{t.r(a),t.d(a,{CheckCircleIcon:()=>i,CheckCircleIconConfig:()=>s,default:()=>o});var l=t(40400);const s={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},i=(0,l.I)(s),o=i},69957:(e,a,t)=>{t.r(a),t.d(a,{ExclamationTriangleIcon:()=>i,ExclamationTriangleIconConfig:()=>s,default:()=>o});var l=t(40400);const s={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},i=(0,l.I)(s),o=i},53688:(e,a,t)=>{t.d(a,{ZP:()=>l});const l=(0,t(40400).I)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0})}}]);
//# sourceMappingURL=../sourcemaps/236.6d926136d29305f6f67c0f6c66a8b5f8.js.map
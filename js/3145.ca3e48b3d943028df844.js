(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[3145,5467,8950],{46043:(e,t,o)=>{"use strict";o.d(t,{J:()=>z,I:()=>D});var a=o(65353),n=o(28416),r=o(1774);o(91993);const i="pf-m-no-padding",l="pf-m-width-auto",s="pf-m-top",c="pf-m-top-left",d="pf-m-top-right",p="pf-m-bottom",m="pf-m-bottom-left",v="pf-m-bottom-right",u="pf-m-left",h="pf-m-left-top",f="pf-m-left-bottom",g="pf-m-right",b="pf-m-right-top",y="pf-m-right-bottom",N="pf-m-danger",E="pf-m-warning",_="pf-m-success",C="pf-m-custom",S="pf-m-info";var O=o(38296);const w=n.createContext({}),P=e=>{var{className:t=null,children:o}=e,r=(0,a.__rest)(e,["className","children"]);return n.createElement("div",Object.assign({className:(0,O.css)("pf-v5-c-popover__content",t)},r),o)};P.displayName="PopoverContent";const x=e=>{var{children:t,id:o,className:r}=e,i=(0,a.__rest)(e,["children","id","className"]);return n.createElement("div",Object.assign({className:(0,O.css)("pf-v5-c-popover__body",r),id:o},i),t)};x.displayName="PopoverBody";const T=e=>{var{children:t,className:o}=e,r=(0,a.__rest)(e,["children","className"]);return n.createElement("span",Object.assign({className:(0,O.css)("pf-v5-c-popover__title-icon",o)},r),t)};T.displayName="PopoverHeaderIcon";const k=e=>{var{children:t,className:o,headingLevel:r}=e,i=(0,a.__rest)(e,["children","className","headingLevel"]);const l=r;return n.createElement(l,Object.assign({className:(0,O.css)("pf-v5-c-popover__title-text",o)},i),t)};k.displayName="PopoverHeaderText";const I=e=>{var{children:t,icon:o,className:r,titleHeadingLevel:i="h6",alertSeverityVariant:l,id:s,alertSeverityScreenReaderText:c}=e,d=(0,a.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);return n.createElement("header",Object.assign({className:(0,O.css)("pf-v5-c-popover__header",r)},d),n.createElement("div",{className:(0,O.css)("pf-v5-c-popover__title"),id:s},o&&n.createElement(T,null,o),n.createElement(k,{headingLevel:i},l&&c&&n.createElement("span",{className:"pf-v5-screen-reader"},c),t)))};I.displayName="PopoverHeader";const L=e=>{var{children:t,className:o=""}=e,r=(0,a.__rest)(e,["children","className"]);return n.createElement("footer",Object.assign({className:(0,O.css)("pf-v5-c-popover__footer",o)},r),t)};L.displayName="PopoverFooter";var F=o(47173),M=o(24307);const W=e=>{var{onClose:t=(()=>{})}=e,o=(0,a.__rest)(e,["onClose"]);return n.createElement("div",{className:(0,O.css)("pf-v5-c-popover__close")},n.createElement(F.zx,Object.assign({onClick:t,variant:"plain","aria-label":!0},o,{style:{pointerEvents:"auto"}}),n.createElement(M.default,null)))};W.displayName="PopoverCloseButton";const H=e=>{var{className:t=""}=e,o=(0,a.__rest)(e,["className"]);return n.createElement("div",Object.assign({className:(0,O.css)("pf-v5-c-popover__arrow",t)},o))};H.displayName="PopoverArrow";const j={name:"--pf-v5-c-popover--MaxWidth",value:"none",var:"var(--pf-v5-c-popover--MaxWidth)"},B={name:"--pf-v5-c-popover--MinWidth",value:"auto",var:"var(--pf-v5-c-popover--MinWidth)"};var D,R=o(99578),V=o(69121),A=o(80164);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(D||(D={}));const $={custom:C,info:S,success:_,warning:E,danger:N},z=e=>{var{children:t,position:o="top",enableFlip:N=!0,className:E="",isVisible:_=null,shouldClose:C=(()=>null),shouldOpen:S=(()=>null),"aria-label":T="",bodyContent:k,headerContent:F=null,headerComponent:M="h6",headerIcon:D=null,alertSeverityVariant:z,alertSeverityScreenReaderText:J,footerContent:K=null,appendTo:q=(()=>document.body),hideOnOutsideClick:G=!0,onHide:Q=(()=>null),onHidden:U=(()=>null),onShow:X=(()=>null),onShown:Y=(()=>null),onMount:Z=(()=>null),zIndex:ee=9999,triggerAction:te="click",minWidth:oe=B&&B.value,maxWidth:ae=j&&j.value,closeBtnAriaLabel:ne="Close",showClose:re=!0,distance:ie=25,flipBehavior:le=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:se=300,id:ce,withFocusTrap:de,triggerRef:pe,hasNoPadding:me=!1,hasAutoWidth:ve=!1,elementToFocus:ue}=e,he=(0,a.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","triggerAction","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","triggerRef","hasNoPadding","hasAutoWidth","elementToFocus"]);const fe=ce||(0,A.Ki)(),ge=null!==_,[be,ye]=n.useState(!1),[Ne,Ee]=n.useState(Boolean(de)),_e=n.useRef(null);n.useEffect((()=>{Z()}),[]),n.useEffect((()=>{ge&&(_?Ce(void 0,!0):Se())}),[_,ge]);const Ce=(e,t)=>{e&&X(e),ye(!0),!1!==de&&t&&Ee(!0)},Se=e=>{e&&Q(e),ye(!1)},Oe={top:s,bottom:p,left:u,right:g,"top-start":c,"top-end":d,"bottom-start":m,"bottom-end":v,"left-start":h,"left-end":f,"right-start":b,"right-end":y},we=oe!==B.value,Pe=ae!==j.value,xe=e=>{ge?S(e,Ce):Ce(e,!1)},Te=e=>{ge?C(e,Se):Se(e)},ke=n.createElement(R.i,Object.assign({ref:_e,active:Ne,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,initialFocus:ue||void 0,checkCanFocusTrap:e=>new Promise((t=>{const o=setInterval((()=>{e.every((e=>"hidden"!==getComputedStyle(e).visibility))&&(t(),clearInterval(o))}),10)})),tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,O.css)("pf-v5-c-popover",z&&$[z],me&&i,ve&&l,E),role:"dialog","aria-modal":"true","aria-label":F?void 0:T,"aria-labelledby":F?`popover-${fe}-header`:void 0,"aria-describedby":`popover-${fe}-body`,onMouseDown:()=>{Ne&&Ee(!1)},style:{minWidth:we?oe:null,maxWidth:Pe?ae:null}},he),n.createElement(H,null),n.createElement(P,null,re&&"click"===te&&n.createElement(W,{onClose:e=>{e.stopPropagation(),ge?C(e,Se):Se(e)},"aria-label":ne}),F&&n.createElement(I,{id:`popover-${fe}-header`,icon:D,alertSeverityVariant:z,alertSeverityScreenReaderText:J||`${z} alert:`,titleHeadingLevel:M},"function"==typeof F?F(Se):F),n.createElement(x,{id:`popover-${fe}-body`},"function"==typeof k?k(Se):k),K&&n.createElement(L,{id:`popover-${fe}-footer`},"function"==typeof K?K(Se):K)));return n.createElement(w.Provider,{value:{headerComponent:M}},n.createElement(V.Popper,{trigger:t,triggerRef:pe,popper:ke,popperRef:_e,minWidth:oe,appendTo:q,isVisible:be,onMouseEnter:"hover"===te&&xe,onMouseLeave:"hover"===te&&Te,onPopperMouseEnter:"hover"===te&&xe,onPopperMouseLeave:"hover"===te&&Te,onFocus:"hover"===te&&(e=>{ge?S(e,Ce):Ce(e,!1)}),onBlur:"hover"===te&&(e=>{ge?C(e,Se):Se(e)}),positionModifiers:Oe,distance:ie,placement:o,onTriggerClick:"click"===te&&(e=>{ge?be?C(e,Se):S(e,Ce):be?Se(e):Ce(e,!0)}),onDocumentClick:(e,t,o)=>{if(G&&be){if(o&&o.contains(e.target))return;ge?C(e,Se):Se(e)}},onDocumentKeyDown:e=>{e.key===r.yu.Escape&&be&&(ge?C(e,Se):Se(e))},enableFlip:N,zIndex:ee,flipBehavior:le,animationDuration:se,onHidden:U,onShown:Y,onHide:()=>Ee(!1)}))};z.displayName="Popover"},28950:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Popover:()=>a.J,PopoverPosition:()=>a.I});var a=o(46043)},40400:(e,t,o)=>{"use strict";o.d(t,{I:()=>i});var a=o(65353),n=o(28416);let r=0;function i({name:e,xOffset:t=0,yOffset:o=0,width:i,height:l,svgPath:s}){var c;return c=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{title:r,className:c}=e,d=(0,a.__rest)(e,["title","className"]),p=c?`pf-v5-svg ${c}`:"pf-v5-svg",m=Boolean(r),v=[t,o,i,l].join(" ");return n.createElement("svg",Object.assign({className:p,viewBox:v,fill:"currentColor","aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img",width:"1em",height:"1em"},d),m&&n.createElement("title",{id:this.id},r),n.createElement("path",{d:s}))}},c.displayName=e,c}},24307:(e,t,o)=>{"use strict";o.r(t),o.d(t,{TimesIcon:()=>r,TimesIconConfig:()=>n,default:()=>i});var a=o(40400);const n={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},r=(0,a.I)(n),i=r},45467:()=>{},11452:()=>{},34946:()=>{},91993:()=>{},66822:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3145.f247e83a042e5c6da826a0380e0780d0.js.map
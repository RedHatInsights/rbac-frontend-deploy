(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8950],{46043:(e,t,o)=>{"use strict";o.d(t,{J:()=>z,I:()=>j});var a=o(65353),n=o(28416),r=o(1774);o(91993);const i="pf-m-no-padding",l="pf-m-width-auto",s="pf-m-top",c="pf-m-top-left",p="pf-m-top-right",d="pf-m-bottom",m="pf-m-bottom-left",v="pf-m-bottom-right",u="pf-m-left",h="pf-m-left-top",f="pf-m-left-bottom",b="pf-m-right",g="pf-m-right-top",y="pf-m-right-bottom",N="pf-m-danger",_="pf-m-warning",E="pf-m-success",C="pf-m-custom",S="pf-m-info";var P=o(38296);const O=n.createContext({}),w=e=>{var{className:t=null,children:o}=e,r=(0,a.__rest)(e,["className","children"]);return n.createElement("div",Object.assign({className:(0,P.css)("pf-v5-c-popover__content",t)},r),o)};w.displayName="PopoverContent";const k=e=>{var{children:t,id:o,className:r}=e,i=(0,a.__rest)(e,["children","id","className"]);return n.createElement("div",Object.assign({className:(0,P.css)("pf-v5-c-popover__body",r),id:o},i),t)};k.displayName="PopoverBody";const x=e=>{var{children:t,className:o}=e,r=(0,a.__rest)(e,["children","className"]);return n.createElement("span",Object.assign({className:(0,P.css)("pf-v5-c-popover__title-icon",o)},r),t)};x.displayName="PopoverHeaderIcon";const T=e=>{var{children:t,className:o,headingLevel:r}=e,i=(0,a.__rest)(e,["children","className","headingLevel"]);const l=r;return n.createElement(l,Object.assign({className:(0,P.css)("pf-v5-c-popover__title-text",o)},i),t)};T.displayName="PopoverHeaderText";const F=e=>{var{children:t,icon:o,className:r,titleHeadingLevel:i="h6",alertSeverityVariant:l,id:s,alertSeverityScreenReaderText:c}=e,p=(0,a.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);return n.createElement("header",Object.assign({className:(0,P.css)("pf-v5-c-popover__header",r)},p),n.createElement("div",{className:(0,P.css)("pf-v5-c-popover__title"),id:s},o&&n.createElement(x,null,o),n.createElement(T,{headingLevel:i},l&&c&&n.createElement("span",{className:"pf-v5-screen-reader"},c),t)))};F.displayName="PopoverHeader";const W=e=>{var{children:t,className:o=""}=e,r=(0,a.__rest)(e,["children","className"]);return n.createElement("footer",Object.assign({className:(0,P.css)("pf-v5-c-popover__footer",o)},r),t)};W.displayName="PopoverFooter";var H=o(47173),M=o(24307);const D=e=>{var{onClose:t=(()=>{})}=e,o=(0,a.__rest)(e,["onClose"]);return n.createElement("div",{className:(0,P.css)("pf-v5-c-popover__close")},n.createElement(H.zx,Object.assign({onClick:t,variant:"plain","aria-label":!0},o,{style:{pointerEvents:"auto"}}),n.createElement(M.ZP,null)))};D.displayName="PopoverCloseButton";const I=e=>{var{className:t=""}=e,o=(0,a.__rest)(e,["className"]);return n.createElement("div",Object.assign({className:(0,P.css)("pf-v5-c-popover__arrow",t)},o))};I.displayName="PopoverArrow";const L={name:"--pf-v5-c-popover--MaxWidth",value:"none",var:"var(--pf-v5-c-popover--MaxWidth)"},R={name:"--pf-v5-c-popover--MinWidth",value:"auto",var:"var(--pf-v5-c-popover--MinWidth)"};var j,B=o(99578),V=o(69121),A=o(80164);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(j||(j={}));const $={custom:C,info:S,success:E,warning:_,danger:N},z=e=>{var{children:t,position:o="top",enableFlip:N=!0,className:_="",isVisible:E=null,shouldClose:C=(()=>null),shouldOpen:S=(()=>null),"aria-label":x="",bodyContent:T,headerContent:H=null,headerComponent:M="h6",headerIcon:j=null,alertSeverityVariant:z,alertSeverityScreenReaderText:J,footerContent:K=null,appendTo:Z=(()=>document.body),hideOnOutsideClick:q=!0,onHide:G=(()=>null),onHidden:Q=(()=>null),onShow:U=(()=>null),onShown:X=(()=>null),onMount:Y=(()=>null),zIndex:ee=9999,triggerAction:te="click",minWidth:oe=R&&R.value,maxWidth:ae=L&&L.value,closeBtnAriaLabel:ne="Close",showClose:re=!0,distance:ie=25,flipBehavior:le=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:se=300,id:ce,withFocusTrap:pe,triggerRef:de,hasNoPadding:me=!1,hasAutoWidth:ve=!1,elementToFocus:ue}=e,he=(0,a.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","triggerAction","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","triggerRef","hasNoPadding","hasAutoWidth","elementToFocus"]);const fe=ce||(0,A.Ki)(),be=null!==E,[ge,ye]=n.useState(!1),[Ne,_e]=n.useState(Boolean(pe)),Ee=n.useRef(null);n.useEffect((()=>{Y()}),[]),n.useEffect((()=>{be&&(E?Ce(void 0,!0):Se())}),[E,be]);const Ce=(e,t)=>{e&&U(e),ye(!0),!1!==pe&&t&&_e(!0)},Se=e=>{e&&G(e),ye(!1)},Pe={top:s,bottom:d,left:u,right:b,"top-start":c,"top-end":p,"bottom-start":m,"bottom-end":v,"left-start":h,"left-end":f,"right-start":g,"right-end":y},Oe=oe!==R.value,we=ae!==L.value,ke=e=>{be?S(e,Ce):Ce(e,!1)},xe=e=>{be?C(e,Se):Se(e)},Te=n.createElement(B.i,Object.assign({ref:Ee,active:Ne,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,initialFocus:ue||void 0,checkCanFocusTrap:e=>new Promise((t=>{const o=setInterval((()=>{e.every((e=>"hidden"!==getComputedStyle(e).visibility))&&(t(),clearInterval(o))}),10)})),tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,P.css)("pf-v5-c-popover",z&&$[z],me&&i,ve&&l,_),role:"dialog","aria-modal":"true","aria-label":H?void 0:x,"aria-labelledby":H?`popover-${fe}-header`:void 0,"aria-describedby":`popover-${fe}-body`,onMouseDown:()=>{Ne&&_e(!1)},style:{minWidth:Oe?oe:null,maxWidth:we?ae:null}},he),n.createElement(I,null),n.createElement(w,null,re&&"click"===te&&n.createElement(D,{onClose:e=>{e.stopPropagation(),be?C(e,Se):Se(e)},"aria-label":ne}),H&&n.createElement(F,{id:`popover-${fe}-header`,icon:j,alertSeverityVariant:z,alertSeverityScreenReaderText:J||`${z} alert:`,titleHeadingLevel:M},"function"==typeof H?H(Se):H),n.createElement(k,{id:`popover-${fe}-body`},"function"==typeof T?T(Se):T),K&&n.createElement(W,{id:`popover-${fe}-footer`},"function"==typeof K?K(Se):K)));return n.createElement(O.Provider,{value:{headerComponent:M}},n.createElement(V.Popper,{trigger:t,triggerRef:de,popper:Te,popperRef:Ee,minWidth:oe,appendTo:Z,isVisible:ge,onMouseEnter:"hover"===te&&ke,onMouseLeave:"hover"===te&&xe,onPopperMouseEnter:"hover"===te&&ke,onPopperMouseLeave:"hover"===te&&xe,onFocus:"hover"===te&&(e=>{be?S(e,Ce):Ce(e,!1)}),onBlur:"hover"===te&&(e=>{be?C(e,Se):Se(e)}),positionModifiers:Pe,distance:ie,placement:o,onTriggerClick:"click"===te&&(e=>{be?ge?C(e,Se):S(e,Ce):ge?Se(e):Ce(e,!0)}),onDocumentClick:(e,t,o)=>{if(q&&ge){if(o&&o.contains(e.target))return;be?C(e,Se):Se(e)}},onDocumentKeyDown:e=>{e.key===r.yu.Escape&&ge&&(be?C(e,Se):Se(e))},enableFlip:N,zIndex:ee,flipBehavior:le,animationDuration:se,onHidden:Q,onShown:X,onHide:()=>_e(!1)}))};z.displayName="Popover"},28950:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Popover:()=>a.J,PopoverPosition:()=>a.I});var a=o(46043)},91993:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8950.04910c3e7ac0106e89479a079aa36e03.js.map
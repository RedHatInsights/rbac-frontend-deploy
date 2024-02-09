(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9789,5467,4878,8028],{23971:(e,t,a)=>{"use strict";a.d(t,{O:()=>c});var n=a(65353),o=a(28416),i=a(9076),r=a(38296),s=a(5964);class l extends o.Component{constructor(){super(...arguments),this.displayName="MenuToggleBase"}render(){const e=this.props,{children:t,className:a,icon:l,badge:c,isExpanded:d,isDisabled:p,isFullHeight:m,isFullWidth:u,splitButtonOptions:f,variant:v,innerRef:h,onClick:g,"aria-label":b}=e,y=(0,n.__rest)(e,["children","className","icon","badge","isExpanded","isDisabled","isFullHeight","isFullWidth","splitButtonOptions","variant","innerRef","onClick","aria-label"]),E="plain"===v,N="plainText"===v,_="typeahead"===v,C=o.createElement("span",{className:(0,r.css)(i.Z.menuToggleControls)},o.createElement("span",{className:(0,r.css)(i.Z.menuToggleToggleIcon)},o.createElement(s.default,{"aria-hidden":!0}))),x=o.createElement(o.Fragment,null,l&&o.createElement("span",{className:(0,r.css)(i.Z.menuToggleIcon)},l),_?t:o.createElement("span",{className:(0,r.css)(i.Z.menuToggleText)},t),o.isValidElement(c)&&o.createElement("span",{className:(0,r.css)(i.Z.menuToggleCount)},c),_?o.createElement("button",{type:"button",className:(0,r.css)(i.Z.menuToggleButton),"aria-expanded":d,onClick:g,"aria-label":"Menu toggle"},C):C),T=(0,r.css)(i.Z.menuToggle,d&&i.Z.modifiers.expanded,"primary"===v&&i.Z.modifiers.primary,"secondary"===v&&i.Z.modifiers.secondary,(E||N)&&i.Z.modifiers.plain,N&&i.Z.modifiers.text,m&&i.Z.modifiers.fullHeight,u&&i.Z.modifiers.fullWidth,p&&i.Z.modifiers.disabled,a),w=Object.assign(Object.assign({children:E?t:x},p&&{disabled:!0}),y);return _?o.createElement("div",Object.assign({ref:h,className:(0,r.css)(T,i.Z.modifiers.typeahead)},w)):f?o.createElement("div",{ref:h,className:(0,r.css)(T,i.Z.modifiers.splitButton,"action"===(null==f?void 0:f.variant)&&i.Z.modifiers.action)},null==f?void 0:f.items,o.createElement("button",Object.assign({className:(0,r.css)(i.Z.menuToggleButton),type:"button","aria-expanded":d,"aria-label":b,disabled:p,onClick:g},y),C)):o.createElement("button",Object.assign({className:(0,r.css)(T),type:"button","aria-label":b,"aria-expanded":d,ref:h,disabled:p,onClick:g},w))}}l.defaultProps={className:"",isExpanded:!1,isDisabled:!1,isFullWidth:!1,isFullHeight:!1};const c=o.forwardRef(((e,t)=>o.createElement(l,Object.assign({innerRef:t},e))));c.displayName="MenuToggle"},46043:(e,t,a)=>{"use strict";a.d(t,{J:()=>V,I:()=>H});var n=a(65353),o=a(28416),i=a(1774);a(91993);const r="pf-m-no-padding",s="pf-m-width-auto",l="pf-m-top",c="pf-m-top-left",d="pf-m-top-right",p="pf-m-bottom",m="pf-m-bottom-left",u="pf-m-bottom-right",f="pf-m-left",v="pf-m-left-top",h="pf-m-left-bottom",g="pf-m-right",b="pf-m-right-top",y="pf-m-right-bottom",E="pf-m-danger",N="pf-m-warning",_="pf-m-success",C="pf-m-custom",x="pf-m-info";var T=a(38296);const w=o.createContext({}),O=e=>{var{className:t=null,children:a}=e,i=(0,n.__rest)(e,["className","children"]);return o.createElement("div",Object.assign({className:(0,T.css)("pf-v5-c-popover__content",t)},i),a)};O.displayName="PopoverContent";const S=e=>{var{children:t,id:a,className:i}=e,r=(0,n.__rest)(e,["children","id","className"]);return o.createElement("div",Object.assign({className:(0,T.css)("pf-v5-c-popover__body",i),id:a},r),t)};S.displayName="PopoverBody";const k=e=>{var{children:t,className:a}=e,i=(0,n.__rest)(e,["children","className"]);return o.createElement("span",Object.assign({className:(0,T.css)("pf-v5-c-popover__title-icon",a)},i),t)};k.displayName="PopoverHeaderIcon";const I=e=>{var{children:t,className:a,headingLevel:i}=e,r=(0,n.__rest)(e,["children","className","headingLevel"]);const s=i;return o.createElement(s,Object.assign({className:(0,T.css)("pf-v5-c-popover__title-text",a)},r),t)};I.displayName="PopoverHeaderText";const P=e=>{var{children:t,icon:a,className:i,titleHeadingLevel:r="h6",alertSeverityVariant:s,id:l,alertSeverityScreenReaderText:c}=e,d=(0,n.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);return o.createElement("header",Object.assign({className:(0,T.css)("pf-v5-c-popover__header",i)},d),o.createElement("div",{className:(0,T.css)("pf-v5-c-popover__title"),id:l},a&&o.createElement(k,null,a),o.createElement(I,{headingLevel:r},s&&c&&o.createElement("span",{className:"pf-v5-screen-reader"},c),t)))};P.displayName="PopoverHeader";const Z=e=>{var{children:t,className:a=""}=e,i=(0,n.__rest)(e,["children","className"]);return o.createElement("footer",Object.assign({className:(0,T.css)("pf-v5-c-popover__footer",a)},i),t)};Z.displayName="PopoverFooter";var F=a(47173),L=a(24307);const M=e=>{var{onClose:t=(()=>{})}=e,a=(0,n.__rest)(e,["onClose"]);return o.createElement("div",{className:(0,T.css)("pf-v5-c-popover__close")},o.createElement(F.zx,Object.assign({onClick:t,variant:"plain","aria-label":!0},a,{style:{pointerEvents:"auto"}}),o.createElement(L.ZP,null)))};M.displayName="PopoverCloseButton";const W=e=>{var{className:t=""}=e,a=(0,n.__rest)(e,["className"]);return o.createElement("div",Object.assign({className:(0,T.css)("pf-v5-c-popover__arrow",t)},a))};W.displayName="PopoverArrow";const B={name:"--pf-v5-c-popover--MaxWidth",value:"none",var:"var(--pf-v5-c-popover--MaxWidth)"},D={name:"--pf-v5-c-popover--MinWidth",value:"auto",var:"var(--pf-v5-c-popover--MinWidth)"};var H,j=a(99578),R=a(69121),z=a(80164);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(H||(H={}));const A={custom:C,info:x,success:_,warning:N,danger:E},V=e=>{var{children:t,position:a="top",enableFlip:E=!0,className:N="",isVisible:_=null,shouldClose:C=(()=>null),shouldOpen:x=(()=>null),"aria-label":k="",bodyContent:I,headerContent:F=null,headerComponent:L="h6",headerIcon:H=null,alertSeverityVariant:V,alertSeverityScreenReaderText:$,footerContent:q=null,appendTo:K=(()=>document.body),hideOnOutsideClick:G=!0,onHide:J=(()=>null),onHidden:Q=(()=>null),onShow:U=(()=>null),onShown:X=(()=>null),onMount:Y=(()=>null),zIndex:ee=9999,triggerAction:te="click",minWidth:ae=D&&D.value,maxWidth:ne=B&&B.value,closeBtnAriaLabel:oe="Close",showClose:ie=!0,distance:re=25,flipBehavior:se=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:le=300,id:ce,withFocusTrap:de,triggerRef:pe,hasNoPadding:me=!1,hasAutoWidth:ue=!1,elementToFocus:fe}=e,ve=(0,n.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","triggerAction","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","triggerRef","hasNoPadding","hasAutoWidth","elementToFocus"]);const he=ce||(0,z.Ki)(),ge=null!==_,[be,ye]=o.useState(!1),[Ee,Ne]=o.useState(Boolean(de)),_e=o.useRef(null);o.useEffect((()=>{Y()}),[]),o.useEffect((()=>{ge&&(_?Ce(void 0,!0):xe())}),[_,ge]);const Ce=(e,t)=>{e&&U(e),ye(!0),!1!==de&&t&&Ne(!0)},xe=e=>{e&&J(e),ye(!1)},Te={top:l,bottom:p,left:f,right:g,"top-start":c,"top-end":d,"bottom-start":m,"bottom-end":u,"left-start":v,"left-end":h,"right-start":b,"right-end":y},we=ae!==D.value,Oe=ne!==B.value,Se=e=>{ge?x(e,Ce):Ce(e,!1)},ke=e=>{ge?C(e,xe):xe(e)},Ie=o.createElement(j.i,Object.assign({ref:_e,active:Ee,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,initialFocus:fe||void 0,checkCanFocusTrap:e=>new Promise((t=>{const a=setInterval((()=>{e.every((e=>"hidden"!==getComputedStyle(e).visibility))&&(t(),clearInterval(a))}),10)})),tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,T.css)("pf-v5-c-popover",V&&A[V],me&&r,ue&&s,N),role:"dialog","aria-modal":"true","aria-label":F?void 0:k,"aria-labelledby":F?`popover-${he}-header`:void 0,"aria-describedby":`popover-${he}-body`,onMouseDown:()=>{Ee&&Ne(!1)},style:{minWidth:we?ae:null,maxWidth:Oe?ne:null}},ve),o.createElement(W,null),o.createElement(O,null,ie&&"click"===te&&o.createElement(M,{onClose:e=>{e.stopPropagation(),ge?C(e,xe):xe(e)},"aria-label":oe}),F&&o.createElement(P,{id:`popover-${he}-header`,icon:H,alertSeverityVariant:V,alertSeverityScreenReaderText:$||`${V} alert:`,titleHeadingLevel:L},"function"==typeof F?F(xe):F),o.createElement(S,{id:`popover-${he}-body`},"function"==typeof I?I(xe):I),q&&o.createElement(Z,{id:`popover-${he}-footer`},"function"==typeof q?q(xe):q)));return o.createElement(w.Provider,{value:{headerComponent:L}},o.createElement(R.Popper,{trigger:t,triggerRef:pe,popper:Ie,popperRef:_e,minWidth:ae,appendTo:K,isVisible:be,onMouseEnter:"hover"===te&&Se,onMouseLeave:"hover"===te&&ke,onPopperMouseEnter:"hover"===te&&Se,onPopperMouseLeave:"hover"===te&&ke,onFocus:"hover"===te&&(e=>{ge?x(e,Ce):Ce(e,!1)}),onBlur:"hover"===te&&(e=>{ge?C(e,xe):xe(e)}),positionModifiers:Te,distance:re,placement:a,onTriggerClick:"click"===te&&(e=>{ge?be?C(e,xe):x(e,Ce):be?xe(e):Ce(e,!0)}),onDocumentClick:(e,t,a)=>{if(G&&be){if(a&&a.contains(e.target))return;ge?C(e,xe):xe(e)}},onDocumentKeyDown:e=>{e.key===i.yu.Escape&&be&&(ge?C(e,xe):xe(e))},enableFlip:E,zIndex:ee,flipBehavior:se,animationDuration:le,onHidden:Q,onShown:X,onHide:()=>Ne(!1)}))};V.displayName="Popover"},84709:(e,t,a)=>{"use strict";a.d(t,{p:()=>o});var n=a(80164);const o=(e,t,a)=>{let o;if(n.Nq){const{ResizeObserver:n}=window;if(e&&n){const i=new n((e=>{a?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));i.observe(e),o=()=>i.unobserve(e)}else window.addEventListener("resize",t),o=()=>window.removeEventListener("resize",t)}return()=>{o&&o()}}},5964:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CaretDownIcon:()=>i,CaretDownIconConfig:()=>o,default:()=>r});var n=a(40400);const o={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},i=(0,n.I)(o),r=i},43047:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ExclamationCircleIcon:()=>i,ExclamationCircleIconConfig:()=>o,default:()=>r});var n=a(40400);const o={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},i=(0,n.I)(o),r=i},24307:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},9076:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(8572);const n={check:"pf-v5-c-check",checkInput:"pf-v5-c-check__input",menuToggle:"pf-v5-c-menu-toggle",menuToggleButton:"pf-v5-c-menu-toggle__button",menuToggleControls:"pf-v5-c-menu-toggle__controls",menuToggleCount:"pf-v5-c-menu-toggle__count",menuToggleIcon:"pf-v5-c-menu-toggle__icon",menuToggleText:"pf-v5-c-menu-toggle__text",menuToggleToggleIcon:"pf-v5-c-menu-toggle__toggle-icon",modifiers:{primary:"pf-m-primary",secondary:"pf-m-secondary",expanded:"pf-m-expanded",plain:"pf-m-plain",text:"pf-m-text",fullHeight:"pf-m-full-height",disabled:"pf-m-disabled",typeahead:"pf-m-typeahead",splitButton:"pf-m-split-button",action:"pf-m-action",active:"pf-m-active",fullWidth:"pf-m-full-width"},textInputGroup:"pf-v5-c-text-input-group",themeDark:"pf-v5-theme-dark"}},45467:()=>{},11452:()=>{},34946:()=>{},10497:()=>{},32857:()=>{},54476:()=>{},90479:()=>{},71338:()=>{},74282:()=>{},8572:()=>{},98379:()=>{},91993:()=>{},66822:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9789.ff188e7a13260c85ad19b60ea0e75007.js.map
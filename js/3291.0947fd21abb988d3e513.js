(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[3291,5467,4878,8028],{23971:(e,t,a)=>{"use strict";a.d(t,{O:()=>u,i:()=>n});var n,o=a(65353),s=a(66029),i=a(9076),r=a(38296),l=a(5964),c=a(68778),d=a(43047),p=a(69957);!function(e){e.success="success",e.danger="danger",e.warning="warning"}(n||(n={}));class m extends s.Component{constructor(){super(...arguments),this.displayName="MenuToggleBase"}render(){const e=this.props,{children:t,className:a,icon:m,badge:u,isExpanded:f,isDisabled:g,isFullHeight:h,isFullWidth:v,splitButtonOptions:b,variant:y,status:E,statusIcon:C,innerRef:N,onClick:_,"aria-label":x}=e,T=(0,o.__rest)(e,["children","className","icon","badge","isExpanded","isDisabled","isFullHeight","isFullWidth","splitButtonOptions","variant","status","statusIcon","innerRef","onClick","aria-label"]),w="plain"===y,O="plainText"===y,I="typeahead"===y;let k=C;if(!C)switch(E){case n.success:k=s.createElement(c.default,{"aria-hidden":"true"});break;case n.warning:k=s.createElement(p.ZP,{"aria-hidden":"true"});break;case n.danger:k=s.createElement(d.ZP,{"aria-hidden":"true"})}const S=s.createElement("span",{className:(0,r.css)(i.Z.menuToggleControls)},void 0!==E&&s.createElement("span",{className:(0,r.css)(i.Z.menuToggleStatusIcon)},k),s.createElement("span",{className:(0,r.css)(i.Z.menuToggleToggleIcon)},s.createElement(l.default,{"aria-hidden":!0}))),P=s.createElement(s.Fragment,null,m&&s.createElement("span",{className:(0,r.css)(i.Z.menuToggleIcon)},m),I?t:s.createElement("span",{className:(0,r.css)(i.Z.menuToggleText)},t),s.isValidElement(u)&&s.createElement("span",{className:(0,r.css)(i.Z.menuToggleCount)},u),I?s.createElement("button",{type:"button",className:(0,r.css)(i.Z.menuToggleButton),"aria-expanded":f,onClick:_,"aria-label":x||"Menu toggle",tabIndex:-1},S):S),Z=(0,r.css)(i.Z.menuToggle,f&&i.Z.modifiers.expanded,"primary"===y&&i.Z.modifiers.primary,"secondary"===y&&i.Z.modifiers.secondary,E&&i.Z.modifiers[E],(w||O)&&i.Z.modifiers.plain,O&&i.Z.modifiers.text,h&&i.Z.modifiers.fullHeight,v&&i.Z.modifiers.fullWidth,g&&i.Z.modifiers.disabled,a),L=Object.assign(Object.assign({children:w?t:P},g&&{disabled:!0}),T);return I?s.createElement("div",Object.assign({ref:N,className:(0,r.css)(Z,i.Z.modifiers.typeahead)},L)):b?s.createElement("div",{ref:N,className:(0,r.css)(Z,i.Z.modifiers.splitButton,"action"===(null==b?void 0:b.variant)&&i.Z.modifiers.action)},null==b?void 0:b.items,s.createElement("button",Object.assign({className:(0,r.css)(i.Z.menuToggleButton),type:"button","aria-expanded":f,"aria-label":x,disabled:g,onClick:_},t&&{style:{display:"flex",paddingLeft:"var(--pf-v5-global--spacer--sm)"}},T),t&&s.createElement("span",{className:(0,r.css)(i.Z.menuToggleText)},t),S)):s.createElement("button",Object.assign({className:(0,r.css)(Z),type:"button","aria-label":x,"aria-expanded":f,ref:N,disabled:g,onClick:_},L))}}m.defaultProps={className:"",isExpanded:!1,isDisabled:!1,isFullWidth:!1,isFullHeight:!1};const u=s.forwardRef(((e,t)=>s.createElement(m,Object.assign({innerRef:t},e))));u.displayName="MenuToggle"},46043:(e,t,a)=>{"use strict";a.d(t,{J:()=>V,I:()=>B});var n=a(65353),o=a(66029),s=a(1774);a(91993);const i="pf-m-no-padding",r="pf-m-width-auto",l="pf-m-top",c="pf-m-top-left",d="pf-m-top-right",p="pf-m-bottom",m="pf-m-bottom-left",u="pf-m-bottom-right",f="pf-m-left",g="pf-m-left-top",h="pf-m-left-bottom",v="pf-m-right",b="pf-m-right-top",y="pf-m-right-bottom",E="pf-m-danger",C="pf-m-warning",N="pf-m-success",_="pf-m-custom",x="pf-m-info";var T=a(38296);const w=o.createContext({}),O=e=>{var{className:t=null,children:a}=e,s=(0,n.__rest)(e,["className","children"]);return o.createElement("div",Object.assign({className:(0,T.css)("pf-v5-c-popover__content",t)},s),a)};O.displayName="PopoverContent";const I=e=>{var{children:t,id:a,className:s}=e,i=(0,n.__rest)(e,["children","id","className"]);return o.createElement("div",Object.assign({className:(0,T.css)("pf-v5-c-popover__body",s),id:a},i),t)};I.displayName="PopoverBody";const k=e=>{var{children:t,className:a}=e,s=(0,n.__rest)(e,["children","className"]);return o.createElement("span",Object.assign({className:(0,T.css)("pf-v5-c-popover__title-icon",a)},s),t)};k.displayName="PopoverHeaderIcon";const S=e=>{var{children:t,className:a,headingLevel:s}=e,i=(0,n.__rest)(e,["children","className","headingLevel"]);const r=s;return o.createElement(r,Object.assign({className:(0,T.css)("pf-v5-c-popover__title-text",a)},i),t)};S.displayName="PopoverHeaderText";const P=e=>{var{children:t,icon:a,className:s,titleHeadingLevel:i="h6",alertSeverityVariant:r,id:l,alertSeverityScreenReaderText:c}=e,d=(0,n.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);return o.createElement("header",Object.assign({className:(0,T.css)("pf-v5-c-popover__header",s)},d),o.createElement("div",{className:(0,T.css)("pf-v5-c-popover__title"),id:l},a&&o.createElement(k,null,a),o.createElement(S,{headingLevel:i},r&&c&&o.createElement("span",{className:"pf-v5-screen-reader"},c),t)))};P.displayName="PopoverHeader";const Z=e=>{var{children:t,className:a=""}=e,s=(0,n.__rest)(e,["children","className"]);return o.createElement("footer",Object.assign({className:(0,T.css)("pf-v5-c-popover__footer",a)},s),t)};Z.displayName="PopoverFooter";var L=a(47173),M=a(24307);const F=e=>{var{onClose:t=(()=>{})}=e,a=(0,n.__rest)(e,["onClose"]);return o.createElement("div",{className:(0,T.css)("pf-v5-c-popover__close")},o.createElement(L.zx,Object.assign({onClick:t,variant:"plain","aria-label":!0},a,{style:{pointerEvents:"auto"}}),o.createElement(M.default,null)))};F.displayName="PopoverCloseButton";const H=e=>{var{className:t=""}=e,a=(0,n.__rest)(e,["className"]);return o.createElement("div",Object.assign({className:(0,T.css)("pf-v5-c-popover__arrow",t)},a))};H.displayName="PopoverArrow";const W={name:"--pf-v5-c-popover--MaxWidth",value:"none",var:"var(--pf-v5-c-popover--MaxWidth)"},z={name:"--pf-v5-c-popover--MinWidth",value:"auto",var:"var(--pf-v5-c-popover--MinWidth)"};var B,D=a(99578),j=a(69121),R=a(80164);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(B||(B={}));const A={custom:_,info:x,success:N,warning:C,danger:E},V=e=>{var{children:t,position:a="top",enableFlip:E=!0,className:C="",isVisible:N=null,shouldClose:_=(()=>null),shouldOpen:x=(()=>null),"aria-label":k="",bodyContent:S,headerContent:L=null,headerComponent:M="h6",headerIcon:B=null,alertSeverityVariant:V,alertSeverityScreenReaderText:$,footerContent:q=null,appendTo:K=(()=>document.body),hideOnOutsideClick:G=!0,onHide:J=(()=>null),onHidden:Q=(()=>null),onShow:U=(()=>null),onShown:X=(()=>null),onMount:Y=(()=>null),zIndex:ee=9999,triggerAction:te="click",minWidth:ae=z&&z.value,maxWidth:ne=W&&W.value,closeBtnAriaLabel:oe="Close",showClose:se=!0,distance:ie=25,flipBehavior:re=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:le=300,id:ce,withFocusTrap:de,triggerRef:pe,hasNoPadding:me=!1,hasAutoWidth:ue=!1,elementToFocus:fe}=e,ge=(0,n.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","triggerAction","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","triggerRef","hasNoPadding","hasAutoWidth","elementToFocus"]);const he=ce||(0,R.Ki)(),ve=null!==N,[be,ye]=o.useState(!1),[Ee,Ce]=o.useState(Boolean(de)),Ne=o.useRef(null);o.useEffect((()=>{Y()}),[]),o.useEffect((()=>{ve&&(N?_e(void 0,!0):xe())}),[N,ve]);const _e=(e,t)=>{e&&U(e),ye(!0),!1!==de&&t&&Ce(!0)},xe=e=>{e&&J(e),ye(!1)},Te={top:l,bottom:p,left:f,right:v,"top-start":c,"top-end":d,"bottom-start":m,"bottom-end":u,"left-start":g,"left-end":h,"right-start":b,"right-end":y},we=ae!==z.value,Oe=ne!==W.value,Ie=e=>{ve?x(e,_e):_e(e,!1)},ke=e=>{ve?_(e,xe):xe(e)},Se=o.createElement(D.i,Object.assign({ref:Ne,active:Ee,focusTrapOptions:{returnFocusOnDeactivate:!1!==de,clickOutsideDeactivates:!0,initialFocus:fe||void 0,checkCanFocusTrap:e=>new Promise((t=>{const a=setInterval((()=>{e.every((e=>"hidden"!==getComputedStyle(e).visibility))&&(t(),clearInterval(a))}),10)})),tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,T.css)("pf-v5-c-popover",V&&A[V],me&&i,ue&&r,C),role:"dialog","aria-modal":"true","aria-label":L?void 0:k,"aria-labelledby":L?`popover-${he}-header`:void 0,"aria-describedby":`popover-${he}-body`,onMouseDown:()=>{Ee&&Ce(!1)},style:{minWidth:we?ae:null,maxWidth:Oe?ne:null}},ge),o.createElement(H,null),o.createElement(O,null,se&&"click"===te&&o.createElement(F,{onClose:e=>{e.stopPropagation(),ve?_(e,xe):xe(e)},"aria-label":oe}),L&&o.createElement(P,{id:`popover-${he}-header`,icon:B,alertSeverityVariant:V,alertSeverityScreenReaderText:$||`${V} alert:`,titleHeadingLevel:M},"function"==typeof L?L(xe):L),o.createElement(I,{id:`popover-${he}-body`},"function"==typeof S?S(xe):S),q&&o.createElement(Z,{id:`popover-${he}-footer`},"function"==typeof q?q(xe):q)));return o.createElement(w.Provider,{value:{headerComponent:M}},o.createElement(j.Popper,{trigger:t,triggerRef:pe,popper:Se,popperRef:Ne,minWidth:ae,appendTo:K,isVisible:be,onMouseEnter:"hover"===te&&Ie,onMouseLeave:"hover"===te&&ke,onPopperMouseEnter:"hover"===te&&Ie,onPopperMouseLeave:"hover"===te&&ke,onFocus:"hover"===te&&(e=>{ve?x(e,_e):_e(e,!1)}),onBlur:"hover"===te&&(e=>{ve?_(e,xe):xe(e)}),positionModifiers:Te,distance:ie,placement:a,onTriggerClick:"click"===te&&(e=>{ve?be?_(e,xe):x(e,_e):be?xe(e):_e(e,!0)}),onDocumentClick:(e,t,a)=>{if(G&&be){const n=a&&a.contains(e.target),o=t&&t.contains(e.target);if(n||o)return;ve?_(e,xe):xe(e)}},onDocumentKeyDown:e=>{e.key===s.yu.Escape&&be&&(ve?_(e,xe):xe(e))},enableFlip:E,zIndex:ee,flipBehavior:re,animationDuration:le,onHidden:Q,onShown:X,onHide:()=>Ce(!1)}))};V.displayName="Popover"},84709:(e,t,a)=>{"use strict";a.d(t,{p:()=>o});var n=a(80164);const o=(e,t,a)=>{let o;if(n.Nq){const{ResizeObserver:n}=window;if(e&&n){const s=new n((e=>{a?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));s.observe(e),o=()=>s.unobserve(e)}else window.addEventListener("resize",t),o=()=>window.removeEventListener("resize",t)}return()=>{o&&o()}}},5964:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CaretDownIcon:()=>s,CaretDownIconConfig:()=>o,default:()=>i});var n=a(40400);const o={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},s=(0,n.I)(o),i=s},68778:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CheckCircleIcon:()=>s,CheckCircleIconConfig:()=>o,default:()=>i});var n=a(40400);const o={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},s=(0,n.I)(o),i=s},43047:(e,t,a)=>{"use strict";a.d(t,{$O:()=>n,ZP:()=>o});const n=(0,a(40400).I)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),o=n},69957:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},24307:(e,t,a)=>{"use strict";a.r(t),a.d(t,{TimesIcon:()=>s,TimesIconConfig:()=>o,default:()=>i});var n=a(40400);const o={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},s=(0,n.I)(o),i=s},9076:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n}),a(8572);const n={check:"pf-v5-c-check",checkInput:"pf-v5-c-check__input",menuToggle:"pf-v5-c-menu-toggle",menuToggleButton:"pf-v5-c-menu-toggle__button",menuToggleControls:"pf-v5-c-menu-toggle__controls",menuToggleCount:"pf-v5-c-menu-toggle__count",menuToggleIcon:"pf-v5-c-menu-toggle__icon",menuToggleStatusIcon:"pf-v5-c-menu-toggle__status-icon",menuToggleText:"pf-v5-c-menu-toggle__text",menuToggleToggleIcon:"pf-v5-c-menu-toggle__toggle-icon",modifiers:{primary:"pf-m-primary",secondary:"pf-m-secondary",expanded:"pf-m-expanded",plain:"pf-m-plain",text:"pf-m-text",fullHeight:"pf-m-full-height",disabled:"pf-m-disabled",typeahead:"pf-m-typeahead",splitButton:"pf-m-split-button",action:"pf-m-action",active:"pf-m-active",fullWidth:"pf-m-full-width",success:"pf-m-success",warning:"pf-m-warning",danger:"pf-m-danger"},textInputGroup:"pf-v5-c-text-input-group",themeDark:"pf-v5-theme-dark"}},45467:()=>{},11452:()=>{},58392:()=>{},34946:()=>{},10497:()=>{},32857:()=>{},54476:()=>{},30187:()=>{},90479:()=>{},71338:()=>{},74282:()=>{},8572:()=>{},98379:()=>{},91993:()=>{},66822:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3291.c747ff5a223fc2d9c3c5885fa7b4450a.js.map
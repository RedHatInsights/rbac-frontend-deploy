(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8419,6783,9826,5530,3617],{17661:(e,t,a)=>{"use strict";a.d(t,{G:()=>n,S:()=>u});var n,o=a(8674),s=a(44914),r=a(87229),i=a(33774),l=a(20689),c=a(19202),d=a(31003),p=a(99851);!function(e){e.success="success",e.danger="danger",e.warning="warning"}(n||(n={}));class m extends s.Component{constructor(){super(...arguments),this.displayName="MenuToggleBase"}render(){const e=this.props,{children:t,className:a,icon:m,badge:u,isExpanded:f,isDisabled:g,isFullHeight:h,isFullWidth:v,splitButtonOptions:b,variant:y,status:E,statusIcon:C,innerRef:N,onClick:_,"aria-label":w}=e,T=(0,o.__rest)(e,["children","className","icon","badge","isExpanded","isDisabled","isFullHeight","isFullWidth","splitButtonOptions","variant","status","statusIcon","innerRef","onClick","aria-label"]),x="plain"===y,A="plainText"===y,O="typeahead"===y;let S=C;if(!C)switch(E){case n.success:S=s.createElement(c.default,{"aria-hidden":"true"});break;case n.warning:S=s.createElement(p.Ay,{"aria-hidden":"true"});break;case n.danger:S=s.createElement(d.Ay,{"aria-hidden":"true"})}const k=s.createElement("span",{className:(0,i.css)(r.A.menuToggleControls)},void 0!==E&&s.createElement("span",{className:(0,i.css)(r.A.menuToggleStatusIcon)},S),s.createElement("span",{className:(0,i.css)(r.A.menuToggleToggleIcon)},s.createElement(l.default,{"aria-hidden":!0}))),I=s.createElement(s.Fragment,null,m&&s.createElement("span",{className:(0,i.css)(r.A.menuToggleIcon)},m),O?t:s.createElement("span",{className:(0,i.css)(r.A.menuToggleText)},t),s.isValidElement(u)&&s.createElement("span",{className:(0,i.css)(r.A.menuToggleCount)},u),O?s.createElement("button",{type:"button",className:(0,i.css)(r.A.menuToggleButton),"aria-expanded":f,onClick:_,"aria-label":w||"Menu toggle",tabIndex:-1},k):k),P=(0,i.css)(r.A.menuToggle,f&&r.A.modifiers.expanded,"primary"===y&&r.A.modifiers.primary,"secondary"===y&&r.A.modifiers.secondary,E&&r.A.modifiers[E],(x||A)&&r.A.modifiers.plain,A&&r.A.modifiers.text,h&&r.A.modifiers.fullHeight,v&&r.A.modifiers.fullWidth,g&&r.A.modifiers.disabled,a),L=Object.assign(Object.assign({children:x?t:I},g&&{disabled:!0}),T);return O?s.createElement("div",Object.assign({ref:N,className:(0,i.css)(P,r.A.modifiers.typeahead)},L)):b?s.createElement("div",{ref:N,className:(0,i.css)(P,r.A.modifiers.splitButton,"action"===(null==b?void 0:b.variant)&&r.A.modifiers.action)},null==b?void 0:b.items,s.createElement("button",Object.assign({className:(0,i.css)(r.A.menuToggleButton),type:"button","aria-expanded":f,"aria-label":w,disabled:g,onClick:_},t&&{style:{display:"flex",paddingLeft:"var(--pf-v5-global--spacer--sm)"}},T),t&&s.createElement("span",{className:(0,i.css)(r.A.menuToggleText)},t),k)):s.createElement("button",Object.assign({className:(0,i.css)(P),type:"button","aria-label":w,"aria-expanded":f,ref:N,disabled:g,onClick:_},L))}}m.defaultProps={className:"",isExpanded:!1,isDisabled:!1,isFullWidth:!1,isFullHeight:!1};const u=s.forwardRef(((e,t)=>s.createElement(m,Object.assign({innerRef:t},e))));u.displayName="MenuToggle"},44461:(e,t,a)=>{"use strict";a.d(t,{A:()=>$,$:()=>D});var n=a(8674),o=a(44914),s=a(52860);a(5937);const r="pf-m-no-padding",i="pf-m-width-auto",l="pf-m-top",c="pf-m-top-left",d="pf-m-top-right",p="pf-m-bottom",m="pf-m-bottom-left",u="pf-m-bottom-right",f="pf-m-left",g="pf-m-left-top",h="pf-m-left-bottom",v="pf-m-right",b="pf-m-right-top",y="pf-m-right-bottom",E="pf-m-danger",C="pf-m-warning",N="pf-m-success",_="pf-m-custom",w="pf-m-info";var T=a(33774);const x=o.createContext({}),A=e=>{var{className:t=null,children:a}=e,s=(0,n.__rest)(e,["className","children"]);return o.createElement("div",Object.assign({className:(0,T.css)("pf-v5-c-popover__content",t)},s),a)};A.displayName="PopoverContent";const O=e=>{var{children:t,id:a,className:s}=e,r=(0,n.__rest)(e,["children","id","className"]);return o.createElement("div",Object.assign({className:(0,T.css)("pf-v5-c-popover__body",s),id:a},r),t)};O.displayName="PopoverBody";const S=e=>{var{children:t,className:a}=e,s=(0,n.__rest)(e,["children","className"]);return o.createElement("span",Object.assign({className:(0,T.css)("pf-v5-c-popover__title-icon",a)},s),t)};S.displayName="PopoverHeaderIcon";const k=e=>{var{children:t,className:a,headingLevel:s}=e,r=(0,n.__rest)(e,["children","className","headingLevel"]);const i=s;return o.createElement(i,Object.assign({className:(0,T.css)("pf-v5-c-popover__title-text",a)},r),t)};k.displayName="PopoverHeaderText";const I=e=>{var{children:t,icon:a,className:s,titleHeadingLevel:r="h6",alertSeverityVariant:i,id:l,alertSeverityScreenReaderText:c}=e,d=(0,n.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);return o.createElement("header",Object.assign({className:(0,T.css)("pf-v5-c-popover__header",s)},d),o.createElement("div",{className:(0,T.css)("pf-v5-c-popover__title"),id:l},a&&o.createElement(S,null,a),o.createElement(k,{headingLevel:r},i&&c&&o.createElement("span",{className:"pf-v5-screen-reader"},c),t)))};I.displayName="PopoverHeader";const P=e=>{var{children:t,className:a=""}=e,s=(0,n.__rest)(e,["children","className"]);return o.createElement("footer",Object.assign({className:(0,T.css)("pf-v5-c-popover__footer",a)},s),t)};P.displayName="PopoverFooter";var L=a(72583),M=a(44397);const F=e=>{var{onClose:t=()=>{}}=e,a=(0,n.__rest)(e,["onClose"]);return o.createElement("div",{className:(0,T.css)("pf-v5-c-popover__close")},o.createElement(L.$n,Object.assign({onClick:t,variant:"plain","aria-label":!0},a,{style:{pointerEvents:"auto"}}),o.createElement(M.default,null)))};F.displayName="PopoverCloseButton";const H=e=>{var{className:t=""}=e,a=(0,n.__rest)(e,["className"]);return o.createElement("div",Object.assign({className:(0,T.css)("pf-v5-c-popover__arrow",t)},a))};H.displayName="PopoverArrow";const W={name:"--pf-v5-c-popover--MaxWidth",value:"none",var:"var(--pf-v5-c-popover--MaxWidth)"},B={name:"--pf-v5-c-popover--MinWidth",value:"auto",var:"var(--pf-v5-c-popover--MinWidth)"};var D,z=a(53884),R=a(17694),j=a(47931);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(D||(D={}));const V={custom:_,info:w,success:N,warning:C,danger:E},$=e=>{var{children:t,position:a="top",enableFlip:E=!0,className:C="",isVisible:N=null,shouldClose:_=()=>null,shouldOpen:w=()=>null,"aria-label":S="",bodyContent:k,headerContent:L=null,headerComponent:M="h6",headerIcon:D=null,alertSeverityVariant:$,alertSeverityScreenReaderText:G,footerContent:q=null,appendTo:K=()=>document.body,hideOnOutsideClick:Q=!0,onHide:U=()=>null,onHidden:J=()=>null,onShow:X=()=>null,onShown:Y=()=>null,onMount:Z=()=>null,zIndex:ee=9999,triggerAction:te="click",minWidth:ae=B&&B.value,maxWidth:ne=W&&W.value,closeBtnAriaLabel:oe="Close",showClose:se=!0,distance:re=25,flipBehavior:ie=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:le=300,id:ce,withFocusTrap:de,triggerRef:pe,hasNoPadding:me=!1,hasAutoWidth:ue=!1,elementToFocus:fe}=e,ge=(0,n.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","triggerAction","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","triggerRef","hasNoPadding","hasAutoWidth","elementToFocus"]);const he=ce||(0,j.LP)(),ve=null!==N,[be,ye]=o.useState(!1),[Ee,Ce]=o.useState(Boolean(de)),Ne=o.useRef(null);o.useEffect((()=>{Z()}),[]),o.useEffect((()=>{ve&&(N?_e(void 0,!0):we())}),[N,ve]);const _e=(e,t)=>{e&&X(e),ye(!0),!1!==de&&t&&Ce(!0)},we=e=>{e&&U(e),ye(!1)},Te={top:l,bottom:p,left:f,right:v,"top-start":c,"top-end":d,"bottom-start":m,"bottom-end":u,"left-start":g,"left-end":h,"right-start":b,"right-end":y},xe=ae!==B.value,Ae=ne!==W.value,Oe=e=>{ve?w(e,_e):_e(e,!1)},Se=e=>{ve?_(e,we):we(e)},ke=o.createElement(z.s,Object.assign({ref:Ne,active:Ee,focusTrapOptions:{returnFocusOnDeactivate:!1!==de,clickOutsideDeactivates:!0,initialFocus:fe||void 0,checkCanFocusTrap:e=>new Promise((t=>{const a=setInterval((()=>{e.every((e=>"hidden"!==getComputedStyle(e).visibility))&&(t(),clearInterval(a))}),10)})),tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,T.css)("pf-v5-c-popover",$&&V[$],me&&r,ue&&i,C),role:"dialog","aria-modal":"true","aria-label":L?void 0:S,"aria-labelledby":L?`popover-${he}-header`:void 0,"aria-describedby":`popover-${he}-body`,onMouseDown:()=>{Ee&&Ce(!1)},style:{minWidth:xe?ae:null,maxWidth:Ae?ne:null}},ge),o.createElement(H,null),o.createElement(A,null,se&&"click"===te&&o.createElement(F,{onClose:e=>{e.stopPropagation(),ve?_(e,we):we(e)},"aria-label":oe}),L&&o.createElement(I,{id:`popover-${he}-header`,icon:D,alertSeverityVariant:$,alertSeverityScreenReaderText:G||`${$} alert:`,titleHeadingLevel:M},"function"==typeof L?L(we):L),o.createElement(O,{id:`popover-${he}-body`},"function"==typeof k?k(we):k),q&&o.createElement(P,{id:`popover-${he}-footer`},"function"==typeof q?q(we):q)));return o.createElement(x.Provider,{value:{headerComponent:M}},o.createElement(R.Popper,{trigger:t,triggerRef:pe,popper:ke,popperRef:Ne,minWidth:ae,appendTo:K,isVisible:be,onMouseEnter:"hover"===te&&Oe,onMouseLeave:"hover"===te&&Se,onPopperMouseEnter:"hover"===te&&Oe,onPopperMouseLeave:"hover"===te&&Se,onFocus:"hover"===te&&(e=>{ve?w(e,_e):_e(e,!1)}),onBlur:"hover"===te&&(e=>{ve?_(e,we):we(e)}),positionModifiers:Te,distance:re,placement:a,onTriggerClick:"click"===te&&(e=>{ve?be?_(e,we):w(e,_e):be?we(e):_e(e,!0)}),onDocumentClick:(e,t,a)=>{if(Q&&be){const n=a&&a.contains(e.target),o=t&&t.contains(e.target);if(n||o)return;ve?_(e,we):we(e)}},onDocumentKeyDown:e=>{e.key===s.RU.Escape&&be&&(ve?_(e,we):we(e))},enableFlip:E,zIndex:ee,flipBehavior:ie,animationDuration:le,onHidden:J,onShown:Y,onHide:()=>Ce(!1)}))};$.displayName="Popover"},49045:(e,t,a)=>{"use strict";a.d(t,{N:()=>o});var n=a(47931);const o=(e,t,a)=>{let o;if(n.Sw){const{ResizeObserver:n}=window;if(e&&n){const s=new n((e=>{a?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));s.observe(e),o=()=>s.unobserve(e)}else window.addEventListener("resize",t),o=()=>window.removeEventListener("resize",t)}return()=>{o&&o()}}},20689:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CaretDownIcon:()=>s,CaretDownIconConfig:()=>o,default:()=>r});var n=a(68419);const o={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},s=(0,n.w)(o),r=s},19202:(e,t,a)=>{"use strict";a.r(t),a.d(t,{CheckCircleIcon:()=>s,CheckCircleIconConfig:()=>o,default:()=>r});var n=a(68419);const o={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},s=(0,n.w)(o),r=s},31003:(e,t,a)=>{"use strict";a.d(t,{$Q:()=>n,Ay:()=>o});const n=(0,a(68419).w)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),o=n},99851:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n});const n=(0,a(68419).w)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},44397:(e,t,a)=>{"use strict";a.r(t),a.d(t,{TimesIcon:()=>s,TimesIconConfig:()=>o,default:()=>r});var n=a(68419);const o={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},s=(0,n.w)(o),r=s},87229:(e,t,a)=>{"use strict";a.d(t,{A:()=>n}),a(8700);const n={check:"pf-v5-c-check",checkInput:"pf-v5-c-check__input",menuToggle:"pf-v5-c-menu-toggle",menuToggleButton:"pf-v5-c-menu-toggle__button",menuToggleControls:"pf-v5-c-menu-toggle__controls",menuToggleCount:"pf-v5-c-menu-toggle__count",menuToggleIcon:"pf-v5-c-menu-toggle__icon",menuToggleStatusIcon:"pf-v5-c-menu-toggle__status-icon",menuToggleText:"pf-v5-c-menu-toggle__text",menuToggleToggleIcon:"pf-v5-c-menu-toggle__toggle-icon",modifiers:{primary:"pf-m-primary",secondary:"pf-m-secondary",expanded:"pf-m-expanded",plain:"pf-m-plain",text:"pf-m-text",fullHeight:"pf-m-full-height",disabled:"pf-m-disabled",typeahead:"pf-m-typeahead",splitButton:"pf-m-split-button",action:"pf-m-action",active:"pf-m-active",fullWidth:"pf-m-full-width",success:"pf-m-success",warning:"pf-m-warning",danger:"pf-m-danger"},textInputGroup:"pf-v5-c-text-input-group",themeDark:"pf-v5-theme-dark"}},79826:()=>{},21741:()=>{},39829:()=>{},30935:()=>{},43502:()=>{},56905:()=>{},61858:()=>{},41069:()=>{},92004:()=>{},7302:()=>{},71036:()=>{},8700:()=>{},1641:()=>{},5937:()=>{},97553:()=>{},27077:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8419.186186d6e466f5323f7ca2dff2f10e3b.js.map
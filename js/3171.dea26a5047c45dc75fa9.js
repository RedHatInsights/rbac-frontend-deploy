"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[3171],{23971:(e,t,a)=>{a.d(t,{O:()=>u,i:()=>n});var n,o=a(65353),s=a(66029),r=a(9076),i=a(38296),l=a(5964),c=a(68778),d=a(43047),p=a(69957);!function(e){e.success="success",e.danger="danger",e.warning="warning"}(n||(n={}));class m extends s.Component{constructor(){super(...arguments),this.displayName="MenuToggleBase"}render(){const e=this.props,{children:t,className:a,icon:m,badge:u,isExpanded:g,isDisabled:f,isFullHeight:v,isFullWidth:h,splitButtonOptions:b,variant:y,status:E,statusIcon:N,innerRef:_,onClick:C,"aria-label":T}=e,w=(0,o.__rest)(e,["children","className","icon","badge","isExpanded","isDisabled","isFullHeight","isFullWidth","splitButtonOptions","variant","status","statusIcon","innerRef","onClick","aria-label"]),x="plain"===y,O="plainText"===y,k="typeahead"===y;let S=N;if(!N)switch(E){case n.success:S=s.createElement(c.ZP,{"aria-hidden":"true"});break;case n.warning:S=s.createElement(p.ZP,{"aria-hidden":"true"});break;case n.danger:S=s.createElement(d.ZP,{"aria-hidden":"true"})}const Z=s.createElement("span",{className:(0,i.css)(r.Z.menuToggleControls)},void 0!==E&&s.createElement("span",{className:(0,i.css)(r.Z.menuToggleStatusIcon)},S),s.createElement("span",{className:(0,i.css)(r.Z.menuToggleToggleIcon)},s.createElement(l.default,{"aria-hidden":!0}))),I=s.createElement(s.Fragment,null,m&&s.createElement("span",{className:(0,i.css)(r.Z.menuToggleIcon)},m),k?t:s.createElement("span",{className:(0,i.css)(r.Z.menuToggleText)},t),s.isValidElement(u)&&s.createElement("span",{className:(0,i.css)(r.Z.menuToggleCount)},u),k?s.createElement("button",{type:"button",className:(0,i.css)(r.Z.menuToggleButton),"aria-expanded":g,onClick:C,"aria-label":T||"Menu toggle",tabIndex:-1},Z):Z),P=(0,i.css)(r.Z.menuToggle,g&&r.Z.modifiers.expanded,"primary"===y&&r.Z.modifiers.primary,"secondary"===y&&r.Z.modifiers.secondary,E&&r.Z.modifiers[E],(x||O)&&r.Z.modifiers.plain,O&&r.Z.modifiers.text,v&&r.Z.modifiers.fullHeight,h&&r.Z.modifiers.fullWidth,f&&r.Z.modifiers.disabled,a),F=Object.assign(Object.assign({children:x?t:I},f&&{disabled:!0}),w);return k?s.createElement("div",Object.assign({ref:_,className:(0,i.css)(P,r.Z.modifiers.typeahead)},F)):b?s.createElement("div",{ref:_,className:(0,i.css)(P,r.Z.modifiers.splitButton,"action"===(null==b?void 0:b.variant)&&r.Z.modifiers.action)},null==b?void 0:b.items,s.createElement("button",Object.assign({className:(0,i.css)(r.Z.menuToggleButton),type:"button","aria-expanded":g,"aria-label":T,disabled:f,onClick:C},t&&{style:{display:"flex",paddingLeft:"var(--pf-v5-global--spacer--sm)"}},w),t&&s.createElement("span",{className:(0,i.css)(r.Z.menuToggleText)},t),Z)):s.createElement("button",Object.assign({className:(0,i.css)(P),type:"button","aria-label":T,"aria-expanded":g,ref:_,disabled:f,onClick:C},F))}}m.defaultProps={className:"",isExpanded:!1,isDisabled:!1,isFullWidth:!1,isFullHeight:!1};const u=s.forwardRef(((e,t)=>s.createElement(m,Object.assign({innerRef:t},e))));u.displayName="MenuToggle"},46043:(e,t,a)=>{a.d(t,{J:()=>z,I:()=>j});var n=a(65353),o=a(66029),s=a(1774);a(91993);const r="pf-m-no-padding",i="pf-m-width-auto",l="pf-m-top",c="pf-m-top-left",d="pf-m-top-right",p="pf-m-bottom",m="pf-m-bottom-left",u="pf-m-bottom-right",g="pf-m-left",f="pf-m-left-top",v="pf-m-left-bottom",h="pf-m-right",b="pf-m-right-top",y="pf-m-right-bottom",E="pf-m-danger",N="pf-m-warning",_="pf-m-success",C="pf-m-custom",T="pf-m-info";var w=a(38296);const x=o.createContext({}),O=e=>{var{className:t=null,children:a}=e,s=(0,n.__rest)(e,["className","children"]);return o.createElement("div",Object.assign({className:(0,w.css)("pf-v5-c-popover__content",t)},s),a)};O.displayName="PopoverContent";const k=e=>{var{children:t,id:a,className:s}=e,r=(0,n.__rest)(e,["children","id","className"]);return o.createElement("div",Object.assign({className:(0,w.css)("pf-v5-c-popover__body",s),id:a},r),t)};k.displayName="PopoverBody";const S=e=>{var{children:t,className:a}=e,s=(0,n.__rest)(e,["children","className"]);return o.createElement("span",Object.assign({className:(0,w.css)("pf-v5-c-popover__title-icon",a)},s),t)};S.displayName="PopoverHeaderIcon";const Z=e=>{var{children:t,className:a,headingLevel:s}=e,r=(0,n.__rest)(e,["children","className","headingLevel"]);const i=s;return o.createElement(i,Object.assign({className:(0,w.css)("pf-v5-c-popover__title-text",a)},r),t)};Z.displayName="PopoverHeaderText";const I=e=>{var{children:t,icon:a,className:s,titleHeadingLevel:r="h6",alertSeverityVariant:i,id:l,alertSeverityScreenReaderText:c}=e,d=(0,n.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);return o.createElement("header",Object.assign({className:(0,w.css)("pf-v5-c-popover__header",s)},d),o.createElement("div",{className:(0,w.css)("pf-v5-c-popover__title"),id:l},a&&o.createElement(S,null,a),o.createElement(Z,{headingLevel:r},i&&c&&o.createElement("span",{className:"pf-v5-screen-reader"},c),t)))};I.displayName="PopoverHeader";const P=e=>{var{children:t,className:a=""}=e,s=(0,n.__rest)(e,["children","className"]);return o.createElement("footer",Object.assign({className:(0,w.css)("pf-v5-c-popover__footer",a)},s),t)};P.displayName="PopoverFooter";var F=a(47173),W=a(24307);const B=e=>{var{onClose:t=(()=>{})}=e,a=(0,n.__rest)(e,["onClose"]);return o.createElement("div",{className:(0,w.css)("pf-v5-c-popover__close")},o.createElement(F.zx,Object.assign({onClick:t,variant:"plain","aria-label":!0},a,{style:{pointerEvents:"auto"}}),o.createElement(W.ZP,null)))};B.displayName="PopoverCloseButton";const D=e=>{var{className:t=""}=e,a=(0,n.__rest)(e,["className"]);return o.createElement("div",Object.assign({className:(0,w.css)("pf-v5-c-popover__arrow",t)},a))};D.displayName="PopoverArrow";const H={name:"--pf-v5-c-popover--MaxWidth",value:"none",var:"var(--pf-v5-c-popover--MaxWidth)"},M={name:"--pf-v5-c-popover--MinWidth",value:"auto",var:"var(--pf-v5-c-popover--MinWidth)"};var j,L=a(99578),R=a(69121),A=a(80164);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(j||(j={}));const V={custom:C,info:T,success:_,warning:N,danger:E},z=e=>{var{children:t,position:a="top",enableFlip:E=!0,className:N="",isVisible:_=null,shouldClose:C=(()=>null),shouldOpen:T=(()=>null),"aria-label":S="",bodyContent:Z,headerContent:F=null,headerComponent:W="h6",headerIcon:j=null,alertSeverityVariant:z,alertSeverityScreenReaderText:$,footerContent:q=null,appendTo:K=(()=>document.body),hideOnOutsideClick:G=!0,onHide:J=(()=>null),onHidden:Q=(()=>null),onShow:U=(()=>null),onShown:X=(()=>null),onMount:Y=(()=>null),zIndex:ee=9999,triggerAction:te="click",minWidth:ae=M&&M.value,maxWidth:ne=H&&H.value,closeBtnAriaLabel:oe="Close",showClose:se=!0,distance:re=25,flipBehavior:ie=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:le=300,id:ce,withFocusTrap:de,triggerRef:pe,hasNoPadding:me=!1,hasAutoWidth:ue=!1,elementToFocus:ge}=e,fe=(0,n.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","triggerAction","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","triggerRef","hasNoPadding","hasAutoWidth","elementToFocus"]);const ve=ce||(0,A.Ki)(),he=null!==_,[be,ye]=o.useState(!1),[Ee,Ne]=o.useState(Boolean(de)),_e=o.useRef(null);o.useEffect((()=>{Y()}),[]),o.useEffect((()=>{he&&(_?Ce(void 0,!0):Te())}),[_,he]);const Ce=(e,t)=>{e&&U(e),ye(!0),!1!==de&&t&&Ne(!0)},Te=e=>{e&&J(e),ye(!1)},we={top:l,bottom:p,left:g,right:h,"top-start":c,"top-end":d,"bottom-start":m,"bottom-end":u,"left-start":f,"left-end":v,"right-start":b,"right-end":y},xe=ae!==M.value,Oe=ne!==H.value,ke=e=>{he?T(e,Ce):Ce(e,!1)},Se=e=>{he?C(e,Te):Te(e)},Ze=o.createElement(L.i,Object.assign({ref:_e,active:Ee,focusTrapOptions:{returnFocusOnDeactivate:!1!==de,clickOutsideDeactivates:!0,initialFocus:ge||void 0,checkCanFocusTrap:e=>new Promise((t=>{const a=setInterval((()=>{e.every((e=>"hidden"!==getComputedStyle(e).visibility))&&(t(),clearInterval(a))}),10)})),tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,w.css)("pf-v5-c-popover",z&&V[z],me&&r,ue&&i,N),role:"dialog","aria-modal":"true","aria-label":F?void 0:S,"aria-labelledby":F?`popover-${ve}-header`:void 0,"aria-describedby":`popover-${ve}-body`,onMouseDown:()=>{Ee&&Ne(!1)},style:{minWidth:xe?ae:null,maxWidth:Oe?ne:null}},fe),o.createElement(D,null),o.createElement(O,null,se&&"click"===te&&o.createElement(B,{onClose:e=>{e.stopPropagation(),he?C(e,Te):Te(e)},"aria-label":oe}),F&&o.createElement(I,{id:`popover-${ve}-header`,icon:j,alertSeverityVariant:z,alertSeverityScreenReaderText:$||`${z} alert:`,titleHeadingLevel:W},"function"==typeof F?F(Te):F),o.createElement(k,{id:`popover-${ve}-body`},"function"==typeof Z?Z(Te):Z),q&&o.createElement(P,{id:`popover-${ve}-footer`},"function"==typeof q?q(Te):q)));return o.createElement(x.Provider,{value:{headerComponent:W}},o.createElement(R.Popper,{trigger:t,triggerRef:pe,popper:Ze,popperRef:_e,minWidth:ae,appendTo:K,isVisible:be,onMouseEnter:"hover"===te&&ke,onMouseLeave:"hover"===te&&Se,onPopperMouseEnter:"hover"===te&&ke,onPopperMouseLeave:"hover"===te&&Se,onFocus:"hover"===te&&(e=>{he?T(e,Ce):Ce(e,!1)}),onBlur:"hover"===te&&(e=>{he?C(e,Te):Te(e)}),positionModifiers:we,distance:re,placement:a,onTriggerClick:"click"===te&&(e=>{he?be?C(e,Te):T(e,Ce):be?Te(e):Ce(e,!0)}),onDocumentClick:(e,t,a)=>{if(G&&be){const n=a&&a.contains(e.target),o=t&&t.contains(e.target);if(n||o)return;he?C(e,Te):Te(e)}},onDocumentKeyDown:e=>{e.key===s.yu.Escape&&be&&(he?C(e,Te):Te(e))},enableFlip:E,zIndex:ee,flipBehavior:ie,animationDuration:le,onHidden:Q,onShown:X,onHide:()=>Ne(!1)}))};z.displayName="Popover"},84709:(e,t,a)=>{a.d(t,{p:()=>o});var n=a(80164);const o=(e,t,a)=>{let o;if(n.Nq){const{ResizeObserver:n}=window;if(e&&n){const s=new n((e=>{a?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));s.observe(e),o=()=>s.unobserve(e)}else window.addEventListener("resize",t),o=()=>window.removeEventListener("resize",t)}return()=>{o&&o()}}},5964:(e,t,a)=>{a.r(t),a.d(t,{CaretDownIcon:()=>s,CaretDownIconConfig:()=>o,default:()=>r});var n=a(40400);const o={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},s=(0,n.I)(o),r=s},9076:(e,t,a)=>{a.d(t,{Z:()=>n}),a(8572);const n={check:"pf-v5-c-check",checkInput:"pf-v5-c-check__input",menuToggle:"pf-v5-c-menu-toggle",menuToggleButton:"pf-v5-c-menu-toggle__button",menuToggleControls:"pf-v5-c-menu-toggle__controls",menuToggleCount:"pf-v5-c-menu-toggle__count",menuToggleIcon:"pf-v5-c-menu-toggle__icon",menuToggleStatusIcon:"pf-v5-c-menu-toggle__status-icon",menuToggleText:"pf-v5-c-menu-toggle__text",menuToggleToggleIcon:"pf-v5-c-menu-toggle__toggle-icon",modifiers:{primary:"pf-m-primary",secondary:"pf-m-secondary",expanded:"pf-m-expanded",plain:"pf-m-plain",text:"pf-m-text",fullHeight:"pf-m-full-height",disabled:"pf-m-disabled",typeahead:"pf-m-typeahead",splitButton:"pf-m-split-button",action:"pf-m-action",active:"pf-m-active",fullWidth:"pf-m-full-width",success:"pf-m-success",warning:"pf-m-warning",danger:"pf-m-danger"},textInputGroup:"pf-v5-c-text-input-group",themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/3171.4e0bb621b688765d374f204be62d3fb3.js.map
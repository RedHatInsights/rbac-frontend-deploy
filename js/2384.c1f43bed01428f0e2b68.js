(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2384,5467,7982,4517],{78425:(t,e,o)=>{"use strict";o.r(e),o.d(e,{Modal:()=>i.u,ModalBox:()=>a.c,ModalBoxBody:()=>l.$,ModalBoxCloseButton:()=>n.I,ModalBoxFooter:()=>c.t,ModalBoxHeader:()=>r.R,ModalContent:()=>s.h,ModalVariant:()=>i.v});var i=o(80236),a=o(2914),l=o(92434),n=o(93884),r=o(80478),c=o(51898),s=o(21142)},35224:(t,e,o)=>{"use strict";o.d(e,{u:()=>u,D:()=>f});var i=o(65353),a=o(28416),l=o(86478),n=o(38296);const r=t=>{var{className:e,children:o,isLeftAligned:r}=t,c=(0,i.__rest)(t,["className","children","isLeftAligned"]);return a.createElement("div",Object.assign({className:(0,n.css)(l.default.tooltipContent,r&&l.default.modifiers.textAlignLeft,e)},c),o)};r.displayName="TooltipContent";const c=t=>{var{className:e}=t,o=(0,i.__rest)(t,["className"]);return a.createElement("div",Object.assign({className:(0,n.css)(l.default.tooltipArrow,e)},o))};c.displayName="TooltipArrow";var s=o(1774);const d={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var f,p=o(69121);!function(t){t.auto="auto",t.top="top",t.bottom="bottom",t.left="left",t.right="right",t.topStart="top-start",t.topEnd="top-end",t.bottomStart="bottom-start",t.bottomEnd="bottom-end",t.leftStart="left-start",t.leftEnd="left-end",t.rightStart="right-start",t.rightEnd="right-end"}(f||(f={}));let m=1;const u=t=>{var{content:e,position:o="top",trigger:f="mouseenter focus",isVisible:u=!1,isContentLeftAligned:g=!1,enableFlip:b=!0,className:h="",entryDelay:v=300,exitDelay:x=300,appendTo:y=(()=>document.body),zIndex:_=9999,minWidth:E,maxWidth:T=d.value,distance:B=15,aria:M="describedby",flipBehavior:L=["top","right","bottom","left","top","right","bottom"],id:C="pf-tooltip-"+m++,children:D,animationDuration:k=300,triggerRef:O,"aria-live":I=(O?"polite":"off"),onTooltipHidden:R=(()=>{})}=t,w=(0,i.__rest)(t,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const N=f.includes("mouseenter"),A=f.includes("focus"),F=f.includes("click"),z="manual"===f,[H,S]=a.useState(!1),W=a.createRef();a.useEffect((()=>{u?P():j()}),[u]);const P=()=>{S(!0)},j=()=>{S(!1)},V={top:l.default.modifiers.top,bottom:l.default.modifiers.bottom,left:l.default.modifiers.left,right:l.default.modifiers.right,"top-start":l.default.modifiers.topLeft,"top-end":l.default.modifiers.topRight,"bottom-start":l.default.modifiers.bottomLeft,"bottom-end":l.default.modifiers.bottomRight,"left-start":l.default.modifiers.leftTop,"left-end":l.default.modifiers.leftBottom,"right-start":l.default.modifiers.rightTop,"right-end":l.default.modifiers.rightBottom},K=T!==d.value,Z=a.createElement("div",Object.assign({"aria-live":I,className:(0,n.css)(l.default.tooltip,h),role:"tooltip",id:C,style:{maxWidth:K?T:null},ref:W},w),a.createElement(c,null),a.createElement(r,{isLeftAligned:g},e));return a.createElement(p.Popper,{trigger:"none"!==M&&H?"describedby"===M&&D&&D.props&&!D.props["aria-describedby"]?a.cloneElement(D,{"aria-describedby":C}):"labelledby"===M&&D.props&&!D.props["aria-labelledby"]?a.cloneElement(D,{"aria-labelledby":C}):D:D,triggerRef:O,popper:Z,popperRef:W,minWidth:void 0!==E?E:"revert",appendTo:y,isVisible:H,positionModifiers:V,distance:B,placement:o,onMouseEnter:N&&P,onMouseLeave:N&&j,onPopperMouseEnter:N&&P,onPopperMouseLeave:N&&j,onFocus:A&&P,onBlur:A&&j,onDocumentClick:F&&((t,e)=>{H?j():t.target===e&&P()}),onDocumentKeyDown:z?null:t=>{z||t.key===s.yu.Escape&&H&&j()},onTriggerEnter:z?null:t=>{t.key===s.yu.Enter&&(H?j():P())},enableFlip:b,zIndex:_,flipBehavior:L,animationDuration:k,entryDelay:v,exitDelay:x,onHidden:R})};u.displayName="Tooltip"},99578:(t,e,o)=>{"use strict";o.d(e,{i:()=>r});var i=o(65353),a=o(44291),l=o(28416),n=o.n(l);const r=(0,l.forwardRef)((function(t,e){var{active:o=!0,paused:r=!1,focusTrapOptions:c={},preventScrollOnDeactivate:s=!1}=t,d=(0,i.__rest)(t,["active","paused","focusTrapOptions","preventScrollOnDeactivate"]);const f=(0,l.useRef)(null);(0,l.useImperativeHandle)(e,(()=>f.current));const p=(0,l.useRef)(null);(0,l.useEffect)((()=>{const t=(0,a.createFocusTrap)(f.current,Object.assign(Object.assign({},c),{returnFocusOnDeactivate:!1}));return p.current=t,()=>{t.deactivate()}}),[]),(0,l.useEffect)((()=>{const t=p.current;o?null==t||t.activate():null==t||t.deactivate()}),[o]),(0,l.useEffect)((()=>{const t=p.current;r?null==t||t.pause():null==t||t.unpause()}),[r]);const m=(0,l.useRef)("undefined"!=typeof document?document.activeElement:null);return function(t){const e=(0,l.useRef)(t);e.current=t,(0,l.useEffect)((()=>()=>{e.current()}),[])}((()=>{!1!==c.returnFocusOnDeactivate&&m.current instanceof HTMLElement&&m.current.focus({preventScroll:s})})),n().createElement("div",Object.assign({ref:f},d))}));r.displayName="FocusTrap"},68778:(t,e,o)=>{"use strict";o.r(e),o.d(e,{CheckCircleIcon:()=>l,CheckCircleIconConfig:()=>a,default:()=>n});var i=o(40400);const a={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},l=(0,i.I)(a),n=l},69957:(t,e,o)=>{"use strict";o.r(e),o.d(e,{ExclamationTriangleIcon:()=>l,ExclamationTriangleIconConfig:()=>a,default:()=>n});var i=o(40400);const a={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},l=(0,i.I)(a),n=l},24307:(t,e,o)=>{"use strict";o.d(e,{ZP:()=>i});const i=(0,o(40400).I)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},19993:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>i}),o(70347);const i={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},62702:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>i}),o(25238);const i={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},86478:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>i}),o(49854);const i={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},66042:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>i}),o(87234);const i={bullseye:"pf-v5-l-bullseye"}},45467:()=>{},70347:()=>{},25238:()=>{},49854:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2384.f863e5de2d440e69d3e0bcc1a857243d.js.map
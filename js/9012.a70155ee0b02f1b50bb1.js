"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9012],{35224:(e,t,o)=>{o.d(t,{u:()=>g,D:()=>c});var n=o(65353),i=o(66029),r=o(86478),a=o(38296);const l=e=>{var{className:t,children:o,isLeftAligned:l}=e,s=(0,n.__rest)(e,["className","children","isLeftAligned"]);return i.createElement("div",Object.assign({className:(0,a.css)(r.default.tooltipContent,l&&r.default.modifiers.textAlignLeft,t)},s),o)};l.displayName="TooltipContent";const s=e=>{var{className:t}=e,o=(0,n.__rest)(e,["className"]);return i.createElement("div",Object.assign({className:(0,a.css)(r.default.tooltipArrow,t)},o))};s.displayName="TooltipArrow";var d=o(1774);const p={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var c,m=o(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(c||(c={}));let f=1;const g=e=>{var{content:t,position:o="top",trigger:c="mouseenter focus",isVisible:g=!1,isContentLeftAligned:u=!1,enableFlip:h=!0,className:b="",entryDelay:v=300,exitDelay:y=300,appendTo:E=(()=>document.body),zIndex:w=9999,minWidth:x,maxWidth:A=p.value,distance:N=15,aria:I="describedby",flipBehavior:T=["top","right","bottom","left","top","right","bottom"],id:L="pf-tooltip-"+f++,children:D,animationDuration:k=300,triggerRef:H,"aria-live":R=(H?"polite":"off"),onTooltipHidden:C=(()=>{})}=e,S=(0,n.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const P=c.includes("mouseenter"),_=c.includes("focus"),B=c.includes("click"),O="manual"===c,[F,M]=i.useState(!1),U=i.createRef();i.useEffect((()=>{g?W():z()}),[g]);const W=()=>{M(!0)},z=()=>{M(!1)},j={top:r.default.modifiers.top,bottom:r.default.modifiers.bottom,left:r.default.modifiers.left,right:r.default.modifiers.right,"top-start":r.default.modifiers.topLeft,"top-end":r.default.modifiers.topRight,"bottom-start":r.default.modifiers.bottomLeft,"bottom-end":r.default.modifiers.bottomRight,"left-start":r.default.modifiers.leftTop,"left-end":r.default.modifiers.leftBottom,"right-start":r.default.modifiers.rightTop,"right-end":r.default.modifiers.rightBottom},K=A!==p.value,q=i.createElement("div",Object.assign({"aria-live":R,className:(0,a.css)(r.default.tooltip,b),role:"tooltip",id:L,style:{maxWidth:K?A:null},ref:U},S),i.createElement(s,null),i.createElement(l,{isLeftAligned:u},t));return i.createElement(m.Popper,{trigger:"none"!==I&&F?"describedby"===I&&D&&D.props&&!D.props["aria-describedby"]?i.cloneElement(D,{"aria-describedby":L}):"labelledby"===I&&D.props&&!D.props["aria-labelledby"]?i.cloneElement(D,{"aria-labelledby":L}):D:D,triggerRef:H,popper:q,popperRef:U,minWidth:void 0!==x?x:"revert",appendTo:E,isVisible:F,positionModifiers:j,distance:N,placement:o,onMouseEnter:P&&W,onMouseLeave:P&&z,onPopperMouseEnter:P&&W,onPopperMouseLeave:P&&z,onFocus:_&&W,onBlur:_&&z,onDocumentClick:B&&((e,t)=>{F?z():e.target===t&&W()}),onDocumentKeyDown:O?null:e=>{O||e.key===d.yu.Escape&&F&&z()},onTriggerEnter:O?null:e=>{e.key===d.yu.Enter&&(F?z():W())},enableFlip:h,zIndex:w,flipBehavior:T,animationDuration:k,entryDelay:v,exitDelay:y,onHidden:C})};g.displayName="Tooltip"},41724:(e,t,o)=>{o.d(t,{w:()=>a});var n=o(66029),i=o(80164);let r=0;class a extends n.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,i.Ki)():r++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}a.displayName="GenerateId",a.defaultProps={prefix:"pf-random-id-",isRandom:!1}},24396:(e,t,o)=>{o.d(t,{FS:()=>l,Hl:()=>a,tL:()=>r});var n=o(66029),i=o(80164);const r=(e,t,o=(e=>document.activeElement.contains(e)),n=(e=>e),i=["A","BUTTON","INPUT"],r=!1,a=!1,l=!0,s=!0)=>{const d=document.activeElement,p=e.key;let c=null;if(!r&&["ArrowUp","ArrowDown"].includes(p)){e.preventDefault(),e.stopImmediatePropagation();let i=-1;t.forEach(((e,r)=>{if(o(e)){let e=0;for(;!c&&e<t.length&&-1*e<t.length;)"ArrowUp"===p?e--:e++,i=r+e,i>=t.length&&(i=0),i<0&&(i=t.length-1),c=n(t[i])}}))}if(!a&&["ArrowLeft","ArrowRight"].includes(p)){e.preventDefault(),e.stopImmediatePropagation();let n=-1;t.forEach(((r,a)=>{if(o(r)){const o=t[a].querySelectorAll(i.join(","));if(!o.length||s){let e=d;for(;e;)if(e="ArrowLeft"===p?e.previousElementSibling:e.nextElementSibling,e&&i.includes(e.tagName)){c=e;break}}else o.forEach(((t,i)=>{e.target===t&&(n=i+("ArrowLeft"===p?-1:1),n>=o.length&&(n=0),n<0&&(n=o.length-1),c=o[n])}))}}))}c&&(l&&(d.tabIndex=-1,c.tabIndex=0),c.focus())},a=e=>{e&&e.length>0&&(e.forEach((e=>{e.tabIndex=-1})),e[0].tabIndex=0)};class l extends n.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:t}=this.props;if(t?!t(e):!this._isEventFromContainer(e))return;const{isActiveElement:o,getFocusableElement:n,noVerticalArrowHandling:i,noHorizontalArrowHandling:a,noEnterHandling:l,noSpaceHandling:s,updateTabIndex:d,validSiblingTags:p,additionalKeyHandler:c,createNavigableElements:m,onlyTraverseSiblings:f}=this.props;c&&c(e);const g=m();if(!g)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const u=e.key;l||"Enter"===u&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),s||" "===u&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),r(e,g,o,n,p,i,a,d,f)},this._isEventFromContainer=e=>{const{containerRef:t}=this.props;return t.current&&t.current.contains(e.target)}}componentDidMount(){i.Nq&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){i.Nq&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}l.displayName="KeyboardHandler",l.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],onlyTraverseSiblings:!0,updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},11888:(e,t,o)=>{o.d(t,{t:()=>n});const n="*"},40400:(e,t,o)=>{o.d(t,{I:()=>a});var n=o(65353),i=o(66029);let r=0;function a({name:e,xOffset:t=0,yOffset:o=0,width:a,height:l,svgPath:s}){var d;return d=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{title:r,className:d}=e,p=(0,n.__rest)(e,["title","className"]),c=d?`pf-v5-svg ${d}`:"pf-v5-svg",m=Boolean(r),f=[t,o,a,l].join(" ");return i.createElement("svg",Object.assign({className:c,viewBox:f,fill:"currentColor","aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img",width:"1em",height:"1em"},p),m&&i.createElement("title",{id:this.id},r),i.createElement("path",{d:s}))}},d.displayName=e,d}},71973:(e,t,o)=>{o.d(t,{ZP:()=>n});const n=(0,o(40400).I)({name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0})},93174:(e,t,o)=>{o.r(t),o.d(t,{AngleRightIcon:()=>r,AngleRightIconConfig:()=>i,default:()=>a});var n=o(40400);const i={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},r=(0,n.I)(i),a=r},86478:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n}),o(49854);const n={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}}}]);
//# sourceMappingURL=../sourcemaps/9012.666c1702770ea7f7127d004e9d8cd16f.js.map
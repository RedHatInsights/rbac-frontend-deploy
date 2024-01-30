"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[5435,7982],{13814:(e,t,i)=>{i.r(t),i.d(t,{Slider:()=>N});var a=i(65353),n=i(28416);i(27479);const l="pf-m-disabled",s="pf-m-active",r="pf-m-floating",o="pf-v5-c-slider__actions",c="pf-v5-c-slider__steps",d="pf-v5-c-slider__value";var u=i(38296);const m="--pf-v5-c-slider__step--Left",p="0",f=e=>{var{className:t,label:i,value:l,isTickHidden:r=!1,isLabelHidden:o=!1,isActive:c=!1}=e,d=(0,a.__rest)(e,["className","label","value","isTickHidden","isLabelHidden","isActive"]);const f={[m]:`${l||p}%`};return n.createElement("div",Object.assign({className:(0,u.css)("pf-v5-c-slider__step",c&&s,t),style:f},d),!r&&n.createElement("div",{className:(0,u.css)("pf-v5-c-slider__step-tick")}),!o&&i&&n.createElement("div",{className:(0,u.css)("pf-v5-c-slider__step-label")},i))};f.displayName="SliderStep";var v=i(82011),b=i(43446),h=i(12276);const g=e=>{var{className:t,component:i="span",children:l,isPlain:s,isDisabled:r}=e,o=(0,a.__rest)(e,["className","component","children","isPlain","isDisabled"]);const c=i;return n.createElement(b.o,{isPlain:s,isBox:!0,isDisabled:r},n.createElement(c,Object.assign({className:(0,u.css)(h.Z.inputGroupText,t)},o),l))};g.displayName="InputGroupText";var y=i(92607),E=i(35224);const N=e=>{var{className:t,value:i=0,customSteps:s,areCustomStepsContinuous:m=!1,isDisabled:p=!1,isInputVisible:h=!1,inputValue:N=0,inputLabel:L,inputAriaLabel:_="Slider value input",thumbAriaLabel:C="Value",hasTooltipOverThumb:A=!1,inputPosition:x="end",onChange:D,leftActions:k,startActions:T,rightActions:w,endActions:S,step:P=1,min:R=0,max:I=100,showTicks:B=!1,showBoundaries:M=!0,"aria-describedby":O,"aria-labelledby":H}=e,W=(0,a.__rest)(e,["className","value","customSteps","areCustomStepsContinuous","isDisabled","isInputVisible","inputValue","inputLabel","inputAriaLabel","thumbAriaLabel","hasTooltipOverThumb","inputPosition","onChange","leftActions","startActions","rightActions","endActions","step","min","max","showTicks","showBoundaries","aria-describedby","aria-labelledby"]);const V=n.useRef(),j=n.useRef(),[z,F]=(0,n.useState)(i),[X,$]=(0,n.useState)(N);let K;n.useEffect((()=>{K="rtl"===window.getComputedStyle(V.current).getPropertyValue("direction")})),n.useEffect((()=>{F(i)}),[i]),n.useEffect((()=>{$(N)}),[N]);let G,Z=0;const q={"--pf-v5-c-slider--value":100*(z-R)/(I-R)+"%"},J={"--pf-v5-c-slider__value--c-form-control--width-chars":n.useMemo((()=>X.toString().length),[X])},Q=(e,t)=>{$(Number(t))},U=e=>{"Enter"===e.key&&(e.preventDefault(),D&&D(e,z,X,$))},Y=e=>{e.stopPropagation()},ee=e=>{D&&D(e,z,X,$)},te=()=>{if(!m&&s){const e=s.find((e=>e.value===z));if(e)return e.label}return Number(Number(z).toFixed(2)).toString()},ie=e=>{"touchmove"===e.type&&(e.preventDefault(),e.stopImmediatePropagation());const t=e.touches&&e.touches.length?e.touches[0].clientX:e.clientX;let i;i=K?V.current.getBoundingClientRect().right-t-Z:t-Z-V.current.getBoundingClientRect().left;const a=V.current.offsetWidth-j.current.offsetWidth;i<0&&(i=0),i>a&&(i=a);const n=((e,t)=>100*e/t)(i,a);j.current.style.setProperty("--pf-v5-c-slider--value",`${n}%`);const l=Math.round(100*(n*(I-R)/100+R))/100;if(F(l),s||(G=Math.round(100*(Math.round((l-R)/P)*P+R))/100,j.current.style.setProperty("--pf-v5-c-slider--value",`${G}%`),F(G)),!m&&s){let e=n;100!==s[s.length-1].value&&(e=n*(I-R)/100+R);const t=s.findIndex((t=>t.value>=e));if(s[t].value===e)G=s[t].value;else{const i=(s[t].value+s[t-1].value)/2;G=i>e?s[t-1].value:s[t].value}F(G)}D&&D(e,void 0!==G?G:l)},ae=n.useCallback(ie,[R,I,s,D]),ne=n.useCallback((()=>{document.removeEventListener("mousemove",ae),document.removeEventListener("mouseup",ne),document.removeEventListener("touchmove",ae),document.removeEventListener("touchend",ne),document.removeEventListener("touchcancel",ne)}),[R,I,s,D]),le=()=>{const e=n.createElement(y.oi,{isDisabled:p,type:"number",value:X,"aria-label":_,onKeyDown:U,onChange:Q,onClick:Y,onFocus:Y,onBlur:ee});return L?n.createElement(v.B,null,n.createElement(b.o,{isFill:!0},e),n.createElement(g,{isDisabled:p},L)):e},se=(e,t,i)=>100*(e-t)/(i-t),re=n.createElement("div",{className:(0,u.css)("pf-v5-c-slider__thumb"),ref:j,tabIndex:p?-1:0,role:"slider","aria-valuemin":s?s[0].value:R,"aria-valuemax":s?s[s.length-1].value:I,"aria-valuenow":z,"aria-valuetext":te(),"aria-label":C,"aria-disabled":p,"aria-describedby":O,"aria-labelledby":H,onMouseDown:p?null:e=>{e.stopPropagation(),e.preventDefault(),Z=K?j.current.getBoundingClientRect().right-e.clientX:e.clientX-j.current.getBoundingClientRect().left,document.addEventListener("mousemove",ae),document.addEventListener("mouseup",ne)},onTouchStart:p?null:e=>{e.stopPropagation(),Z=K?j.current.getBoundingClientRect().right-e.touches[0].clientX:e.touches[0].clientX-j.current.getBoundingClientRect().left,document.addEventListener("touchmove",ae,{passive:!1}),document.addEventListener("touchend",ne),document.addEventListener("touchcancel",ne)},onKeyDown:p?null:e=>{const t=e.key;if("ArrowLeft"!==t&&"ArrowRight"!==t)return;e.preventDefault();let i=z;if(!m&&s){const e=s.findIndex((e=>e.value===z));"ArrowRight"===t?K?e-1>=0&&(i=s[e-1].value):e+1<s.length&&(i=s[e+1].value):"ArrowLeft"===t&&(K?e+1<s.length&&(i=s[e+1].value):e-1>=0&&(i=s[e-1].value))}else"ArrowRight"===t?i=K?z-P>=R?z-P:R:z+P<=I?z+P:I:"ArrowLeft"===t&&(i=K?z+P<=I?z+P:I:z-P>=R?z-P:R);i!==z&&(j.current.style.setProperty("--pf-v5-c-slider--value",`${i}%`),F(i),D&&D(e,i))},onClick:p?null:()=>{j.current.focus()}});return n.createElement("div",Object.assign({className:(0,u.css)("pf-v5-c-slider",t,p&&l),style:Object.assign(Object.assign({},q),J)},W),(k||T)&&n.createElement("div",{className:(0,u.css)(o)},k||T),n.createElement("div",{className:(0,u.css)("pf-v5-c-slider__main")},n.createElement("div",{className:(0,u.css)("pf-v5-c-slider__rail"),ref:V,onClick:p?null:e=>{ie(e),G&&!m&&(j.current.style.setProperty("--pf-v5-c-slider--value",`${G}%`),F(G),D&&D(e,G))}},n.createElement("div",{className:(0,u.css)("pf-v5-c-slider__rail-track")})),s&&n.createElement("div",{className:(0,u.css)(c),"aria-hidden":"true"},s.map((e=>{const t=s[0].value,i=s[s.length-1].value,a=se(e.value,t,i);return n.createElement(f,{key:e.value,value:a,label:e.label,isLabelHidden:e.isLabelHidden,isActive:e.value<=z})}))),!s&&(B||M)&&n.createElement("div",{className:(0,u.css)(c),"aria-hidden":"true"},(()=>{const e=[];for(let t=R;t<=I;t+=P){const i=se(t,R,I);!B&&M&&t!==R&&t!==I||e.push(n.createElement(f,{key:t,value:i,label:t.toString(),isTickHidden:!B,isLabelHidden:t!==R&&t!==I||!M,isActive:t<=z}))}return e})()),A?n.createElement(E.u,{triggerRef:j,entryDelay:0,content:te()},re):re,h&&"aboveThumb"===x&&n.createElement("div",{className:(0,u.css)(d,r)},le())),h&&("right"===x||"end"===x)&&n.createElement("div",{className:(0,u.css)(d)},le()),(w||S)&&n.createElement("div",{className:(0,u.css)(o)},w||S))};N.displayName="Slider"},35224:(e,t,i)=>{i.d(t,{u:()=>f,D:()=>u});var a=i(65353),n=i(28416),l=i(86478),s=i(38296);const r=e=>{var{className:t,children:i,isLeftAligned:r}=e,o=(0,a.__rest)(e,["className","children","isLeftAligned"]);return n.createElement("div",Object.assign({className:(0,s.css)(l.default.tooltipContent,r&&l.default.modifiers.textAlignLeft,t)},o),i)};r.displayName="TooltipContent";const o=e=>{var{className:t}=e,i=(0,a.__rest)(e,["className"]);return n.createElement("div",Object.assign({className:(0,s.css)(l.default.tooltipArrow,t)},i))};o.displayName="TooltipArrow";var c=i(1774);const d={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var u,m=i(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(u||(u={}));let p=1;const f=e=>{var{content:t,position:i="top",trigger:u="mouseenter focus",isVisible:f=!1,isContentLeftAligned:v=!1,enableFlip:b=!0,className:h="",entryDelay:g=300,exitDelay:y=300,appendTo:E=(()=>document.body),zIndex:N=9999,minWidth:L,maxWidth:_=d.value,distance:C=15,aria:A="describedby",flipBehavior:x=["top","right","bottom","left","top","right","bottom"],id:D="pf-tooltip-"+p++,children:k,animationDuration:T=300,triggerRef:w,"aria-live":S=(w?"polite":"off"),onTooltipHidden:P=(()=>{})}=e,R=(0,a.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const I=u.includes("mouseenter"),B=u.includes("focus"),M=u.includes("click"),O="manual"===u,[H,W]=n.useState(!1),V=n.createRef();n.useEffect((()=>{f?j():z()}),[f]);const j=()=>{W(!0)},z=()=>{W(!1)},F={top:l.default.modifiers.top,bottom:l.default.modifiers.bottom,left:l.default.modifiers.left,right:l.default.modifiers.right,"top-start":l.default.modifiers.topLeft,"top-end":l.default.modifiers.topRight,"bottom-start":l.default.modifiers.bottomLeft,"bottom-end":l.default.modifiers.bottomRight,"left-start":l.default.modifiers.leftTop,"left-end":l.default.modifiers.leftBottom,"right-start":l.default.modifiers.rightTop,"right-end":l.default.modifiers.rightBottom},X=_!==d.value,$=n.createElement("div",Object.assign({"aria-live":S,className:(0,s.css)(l.default.tooltip,h),role:"tooltip",id:D,style:{maxWidth:X?_:null},ref:V},R),n.createElement(o,null),n.createElement(r,{isLeftAligned:v},t));return n.createElement(m.Popper,{trigger:"none"!==A&&H?"describedby"===A&&k&&k.props&&!k.props["aria-describedby"]?n.cloneElement(k,{"aria-describedby":D}):"labelledby"===A&&k.props&&!k.props["aria-labelledby"]?n.cloneElement(k,{"aria-labelledby":D}):k:k,triggerRef:w,popper:$,popperRef:V,minWidth:void 0!==L?L:"revert",appendTo:E,isVisible:H,positionModifiers:F,distance:C,placement:i,onMouseEnter:I&&j,onMouseLeave:I&&z,onPopperMouseEnter:I&&j,onPopperMouseLeave:I&&z,onFocus:B&&j,onBlur:B&&z,onDocumentClick:M&&((e,t)=>{H?z():e.target===t&&j()}),onDocumentKeyDown:O?null:e=>{O||e.key===c.yu.Escape&&H&&z()},onTriggerEnter:O?null:e=>{e.key===c.yu.Enter&&(H?z():j())},enableFlip:b,zIndex:N,flipBehavior:x,animationDuration:T,entryDelay:g,exitDelay:y,onHidden:P})};f.displayName="Tooltip"},68778:(e,t,i)=>{i.r(t),i.d(t,{CheckCircleIcon:()=>l,CheckCircleIconConfig:()=>n,default:()=>s});var a=i(40400);const n={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},l=(0,a.I)(n),s=l},69957:(e,t,i)=>{i.r(t),i.d(t,{ExclamationTriangleIcon:()=>l,ExclamationTriangleIconConfig:()=>n,default:()=>s});var a=i(40400);const n={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},l=(0,a.I)(n),s=l}}]);
//# sourceMappingURL=../sourcemaps/5435.c05046911c5cb23847ab00a5864ae4c0.js.map
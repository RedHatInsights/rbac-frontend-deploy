(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8757,5467],{13814:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Slider:()=>_});var a=s(65353),n=s(28416);s(27479);const l="pf-m-disabled",i="pf-m-active",r="pf-m-floating",c="pf-v5-c-slider__actions",u="pf-v5-c-slider__steps",o="pf-v5-c-slider__value";var d=s(38296);const v="--pf-v5-c-slider__step--Left",m="0",p=e=>{var{className:t,label:s,value:l,isTickHidden:r=!1,isLabelHidden:c=!1,isActive:u=!1}=e,o=(0,a.__rest)(e,["className","label","value","isTickHidden","isLabelHidden","isActive"]);const p={[v]:`${l||m}%`};return n.createElement("div",Object.assign({className:(0,d.css)("pf-v5-c-slider__step",u&&i,t),style:p},o),!r&&n.createElement("div",{className:(0,d.css)("pf-v5-c-slider__step-tick")}),!c&&s&&n.createElement("div",{className:(0,d.css)("pf-v5-c-slider__step-label")},s))};p.displayName="SliderStep";var b=s(82011),f=s(43446),h=s(12276);const g=e=>{var{className:t,component:s="span",children:l,isPlain:i,isDisabled:r}=e,c=(0,a.__rest)(e,["className","component","children","isPlain","isDisabled"]);const u=s;return n.createElement(f.o,{isPlain:i,isBox:!0,isDisabled:r},n.createElement(u,Object.assign({className:(0,d.css)(h.Z.inputGroupText,t)},c),l))};g.displayName="InputGroupText";var E=s(92607),y=s(35224);const _=e=>{var{className:t,value:s=0,customSteps:i,areCustomStepsContinuous:v=!1,isDisabled:m=!1,isInputVisible:h=!1,inputValue:_=0,inputLabel:N,inputAriaLabel:L="Slider value input",thumbAriaLabel:A="Value",hasTooltipOverThumb:C=!1,inputPosition:k="end",onChange:w,leftActions:S,startActions:D,rightActions:P,endActions:T,step:R=1,min:x=0,max:B=100,showTicks:H=!1,showBoundaries:I=!0,"aria-describedby":O,"aria-labelledby":V}=e,X=(0,a.__rest)(e,["className","value","customSteps","areCustomStepsContinuous","isDisabled","isInputVisible","inputValue","inputLabel","inputAriaLabel","thumbAriaLabel","hasTooltipOverThumb","inputPosition","onChange","leftActions","startActions","rightActions","endActions","step","min","max","showTicks","showBoundaries","aria-describedby","aria-labelledby"]);const j=n.useRef(),M=n.useRef(),[$,F]=(0,n.useState)(s),[G,K]=(0,n.useState)(_);let W;n.useEffect((()=>{W="rtl"===window.getComputedStyle(j.current).getPropertyValue("direction")})),n.useEffect((()=>{F(s)}),[s]),n.useEffect((()=>{K(_)}),[_]);let Z,q=0;const z={"--pf-v5-c-slider--value":100*($-x)/(B-x)+"%"},J={"--pf-v5-c-slider__value--c-form-control--width-chars":n.useMemo((()=>G.toString().length),[G])},Q=(e,t)=>{K(Number(t))},U=e=>{"Enter"===e.key&&(e.preventDefault(),w&&w(e,$,G,K))},Y=e=>{e.stopPropagation()},ee=e=>{w&&w(e,$,G,K)},te=()=>{if(!v&&i){const e=i.find((e=>e.value===$));if(e)return e.label}return Number(Number($).toFixed(2)).toString()},se=e=>{"touchmove"===e.type&&(e.preventDefault(),e.stopImmediatePropagation());const t=e.touches&&e.touches.length?e.touches[0].clientX:e.clientX;let s;s=W?j.current.getBoundingClientRect().right-t-q:t-q-j.current.getBoundingClientRect().left;const a=j.current.offsetWidth-M.current.offsetWidth;s<0&&(s=0),s>a&&(s=a);const n=((e,t)=>100*e/t)(s,a);M.current.style.setProperty("--pf-v5-c-slider--value",`${n}%`);const l=Math.round(100*(n*(B-x)/100+x))/100;if(F(l),i||(Z=Math.round(100*(Math.round((l-x)/R)*R+x))/100,M.current.style.setProperty("--pf-v5-c-slider--value",`${Z}%`),F(Z)),!v&&i){let e=n;100!==i[i.length-1].value&&(e=n*(B-x)/100+x);const t=i.findIndex((t=>t.value>=e));if(i[t].value===e)Z=i[t].value;else{const s=(i[t].value+i[t-1].value)/2;Z=s>e?i[t-1].value:i[t].value}F(Z)}w&&w(e,void 0!==Z?Z:l)},ae=n.useCallback(se,[x,B,i,w]),ne=n.useCallback((()=>{document.removeEventListener("mousemove",ae),document.removeEventListener("mouseup",ne),document.removeEventListener("touchmove",ae),document.removeEventListener("touchend",ne),document.removeEventListener("touchcancel",ne)}),[x,B,i,w]),le=()=>{const e=n.createElement(E.oi,{isDisabled:m,type:"number",value:G,"aria-label":L,onKeyDown:U,onChange:Q,onClick:Y,onFocus:Y,onBlur:ee});return N?n.createElement(b.B,null,n.createElement(f.o,{isFill:!0},e),n.createElement(g,{isDisabled:m},N)):e},ie=(e,t,s)=>100*(e-t)/(s-t),re=n.createElement("div",{className:(0,d.css)("pf-v5-c-slider__thumb"),ref:M,tabIndex:m?-1:0,role:"slider","aria-valuemin":i?i[0].value:x,"aria-valuemax":i?i[i.length-1].value:B,"aria-valuenow":$,"aria-valuetext":te(),"aria-label":A,"aria-disabled":m,"aria-describedby":O,"aria-labelledby":V,onMouseDown:m?null:e=>{e.stopPropagation(),e.preventDefault(),q=W?M.current.getBoundingClientRect().right-e.clientX:e.clientX-M.current.getBoundingClientRect().left,document.addEventListener("mousemove",ae),document.addEventListener("mouseup",ne)},onTouchStart:m?null:e=>{e.stopPropagation(),q=W?M.current.getBoundingClientRect().right-e.touches[0].clientX:e.touches[0].clientX-M.current.getBoundingClientRect().left,document.addEventListener("touchmove",ae,{passive:!1}),document.addEventListener("touchend",ne),document.addEventListener("touchcancel",ne)},onKeyDown:m?null:e=>{const t=e.key;if("ArrowLeft"!==t&&"ArrowRight"!==t)return;e.preventDefault();let s=$;if(!v&&i){const e=i.findIndex((e=>e.value===$));"ArrowRight"===t?W?e-1>=0&&(s=i[e-1].value):e+1<i.length&&(s=i[e+1].value):"ArrowLeft"===t&&(W?e+1<i.length&&(s=i[e+1].value):e-1>=0&&(s=i[e-1].value))}else"ArrowRight"===t?s=W?$-R>=x?$-R:x:$+R<=B?$+R:B:"ArrowLeft"===t&&(s=W?$+R<=B?$+R:B:$-R>=x?$-R:x);s!==$&&(M.current.style.setProperty("--pf-v5-c-slider--value",`${s}%`),F(s),w&&w(e,s))},onClick:m?null:()=>{M.current.focus()}});return n.createElement("div",Object.assign({className:(0,d.css)("pf-v5-c-slider",t,m&&l),style:Object.assign(Object.assign({},z),J)},X),(S||D)&&n.createElement("div",{className:(0,d.css)(c)},S||D),n.createElement("div",{className:(0,d.css)("pf-v5-c-slider__main")},n.createElement("div",{className:(0,d.css)("pf-v5-c-slider__rail"),ref:j,onClick:m?null:e=>{se(e),Z&&!v&&(M.current.style.setProperty("--pf-v5-c-slider--value",`${Z}%`),F(Z),w&&w(e,Z))}},n.createElement("div",{className:(0,d.css)("pf-v5-c-slider__rail-track")})),i&&n.createElement("div",{className:(0,d.css)(u),"aria-hidden":"true"},i.map((e=>{const t=i[0].value,s=i[i.length-1].value,a=ie(e.value,t,s);return n.createElement(p,{key:e.value,value:a,label:e.label,isLabelHidden:e.isLabelHidden,isActive:e.value<=$})}))),!i&&(H||I)&&n.createElement("div",{className:(0,d.css)(u),"aria-hidden":"true"},(()=>{const e=[];for(let t=x;t<=B;t+=R){const s=ie(t,x,B);!H&&I&&t!==x&&t!==B||e.push(n.createElement(p,{key:t,value:s,label:t.toString(),isTickHidden:!H,isLabelHidden:t!==x&&t!==B||!I,isActive:t<=$}))}return e})()),C?n.createElement(y.u,{triggerRef:M,entryDelay:0,content:te()},re):re,h&&"aboveThumb"===k&&n.createElement("div",{className:(0,d.css)(o,r)},le())),h&&("right"===k||"end"===k)&&n.createElement("div",{className:(0,d.css)(o)},le()),(P||T)&&n.createElement("div",{className:(0,d.css)(c)},P||T))};_.displayName="Slider"},45467:()=>{},90479:()=>{},74282:()=>{},27479:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8757.a1a4dc7d6f6e6850819923e7372314af.js.map
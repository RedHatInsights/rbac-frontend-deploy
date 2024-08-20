"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2609],{49644:(e,t,s)=>{s.d(t,{J:()=>d});var a=s(65353),i=s(66029),n=s(12455),r=s(38296),l=s(68778),o=s(43047),c=s(69957);const u={success:l.default,error:o.ZP,warning:c.ZP},d=e=>{var{status:t,customIcon:s,className:l}=e,o=(0,a.__rest)(e,["status","customIcon","className"]);const c=t&&u[t];return i.createElement("span",Object.assign({className:(0,r.css)(n.Z.formControlIcon,t&&n.Z.modifiers.status,l)},o),s||i.createElement(c,null))}},65802:(e,t,s)=>{s.d(t,{B:()=>o});var a=s(65353),i=s(66029),n=s(12276),r=s(38296);const l=e=>{var{className:t,children:s,innerRef:l}=e,o=(0,a.__rest)(e,["className","children","innerRef"]);const c=i.useRef(null),u=l||c;return i.createElement("div",Object.assign({ref:u,className:(0,r.css)(n.Z.inputGroup,t)},o),s)};l.displayName="InputGroupBase";const o=i.forwardRef(((e,t)=>i.createElement(l,Object.assign({innerRef:t},e))));o.displayName="InputGroup"},43446:(e,t,s)=>{s.d(t,{o:()=>l});var a=s(65353),i=s(66029),n=s(12276),r=s(38296);const l=e=>{var{className:t,children:s,isFill:l=!1,isBox:o=!1,isPlain:c,isDisabled:u}=e,d=(0,a.__rest)(e,["className","children","isFill","isBox","isPlain","isDisabled"]);return i.createElement("div",Object.assign({className:(0,r.css)(n.Z.inputGroupItem,l&&n.Z.modifiers.fill,o&&n.Z.modifiers.box,c&&n.Z.modifiers.plain,u&&n.Z.modifiers.disabled,t)},d),s)};l.displayName="InputGroupItem"},12609:(e,t,s)=>{s.r(t),s.d(t,{Slider:()=>C});var a=s(65353),i=s(66029);s(27479);const n="pf-m-disabled",r="pf-m-active",l="pf-m-floating",o="pf-v5-c-slider__actions",c="pf-v5-c-slider__steps",u="pf-v5-c-slider__value";var d=s(38296);const p="--pf-v5-c-slider__step--Left",m="0",f=e=>{var{className:t,label:s,value:n,isTickHidden:l=!1,isLabelHidden:o=!1,isActive:c=!1}=e,u=(0,a.__rest)(e,["className","label","value","isTickHidden","isLabelHidden","isActive"]);const f={[p]:`${n||m}%`};return i.createElement("div",Object.assign({className:(0,d.css)("pf-v5-c-slider__step",c&&r,t),style:f},u),!l&&i.createElement("div",{className:(0,d.css)("pf-v5-c-slider__step-tick")}),!o&&s&&i.createElement("div",{className:(0,d.css)("pf-v5-c-slider__step-label")},s))};f.displayName="SliderStep";var v=s(65802),h=s(43446),b=s(12276);const g=e=>{var{className:t,component:s="span",children:n,isPlain:r,isDisabled:l}=e,o=(0,a.__rest)(e,["className","component","children","isPlain","isDisabled"]);const c=s;return i.createElement(h.o,{isPlain:r,isBox:!0,isDisabled:l},i.createElement(c,Object.assign({className:(0,d.css)(b.Z.inputGroupText,t)},o),n))};g.displayName="InputGroupText";var E=s(92607),y=s(35224);const _="--pf-v5-c-slider--value",N="--pf-v5-c-slider__value--c-form-control--width-chars";var x=s(80164);const C=e=>{var{className:t,value:s=0,customSteps:r,areCustomStepsContinuous:p=!1,isDisabled:m=!1,isInputVisible:b=!1,inputValue:C=0,inputLabel:R,inputAriaLabel:T="Slider value input",thumbAriaLabel:L="Value",hasTooltipOverThumb:I=!1,inputPosition:S="end",onChange:w,leftActions:D,startActions:k,rightActions:A,endActions:B,step:P=1,min:Z=0,max:O=100,showTicks:z=!1,showBoundaries:j=!0,"aria-describedby":F,"aria-labelledby":G}=e,V=(0,a.__rest)(e,["className","value","customSteps","areCustomStepsContinuous","isDisabled","isInputVisible","inputValue","inputLabel","inputAriaLabel","thumbAriaLabel","hasTooltipOverThumb","inputPosition","onChange","leftActions","startActions","rightActions","endActions","step","min","max","showTicks","showBoundaries","aria-describedby","aria-labelledby"]);const H=i.useRef(),M=i.useRef(),[X,q]=(0,i.useState)(s),[U,$]=(0,i.useState)(C);let J;i.useEffect((()=>{J="rtl"===(0,x.j9)(H.current)})),i.useEffect((()=>{q(s)}),[s]),i.useEffect((()=>{$(C)}),[C]);let W,K=0;const Q={[_]:100*(X-Z)/(O-Z)+"%"},Y=i.useMemo((()=>U.toString().length),[U]),ee={[N]:Y},te=(e,t)=>{$(Number(t))},se=e=>{"Enter"===e.key&&(e.preventDefault(),w&&w(e,X,U,$))},ae=e=>{e.stopPropagation()},ie=e=>{w&&w(e,X,U,$)},ne=()=>{if(!p&&r){const e=r.find((e=>e.value===X));if(e)return e.label}return Number(Number(X).toFixed(2)).toString()},re=e=>{"touchmove"===e.type&&(e.preventDefault(),e.stopImmediatePropagation());const t=e.touches&&e.touches.length?e.touches[0].clientX:e.clientX;let s;s=J?H.current.getBoundingClientRect().right-t-K:t-K-H.current.getBoundingClientRect().left;const a=H.current.offsetWidth-M.current.offsetWidth;s<0&&(s=0),s>a&&(s=a);const i=((e,t)=>100*e/t)(s,a);M.current.style.setProperty(_,`${i}%`);const n=Math.round(100*(i*(O-Z)/100+Z))/100;if(q(n),r||(W=Math.round(100*(Math.round((n-Z)/P)*P+Z))/100,M.current.style.setProperty(_,`${W}%`),q(W)),!p&&r){let e=i;100!==r[r.length-1].value&&(e=i*(O-Z)/100+Z);const t=r.findIndex((t=>t.value>=e));if(r[t].value===e)W=r[t].value;else{const s=(r[t].value+r[t-1].value)/2;W=s>e?r[t-1].value:r[t].value}q(W)}w&&w(e,void 0!==W?W:n)},le=i.useCallback(re,[Z,O,r,w]),oe=i.useCallback((()=>{document.removeEventListener("mousemove",le),document.removeEventListener("mouseup",oe),document.removeEventListener("touchmove",le),document.removeEventListener("touchend",oe),document.removeEventListener("touchcancel",oe)}),[Z,O,r,w]),ce=()=>{const e=i.createElement(E.oi,{isDisabled:m,type:"number",value:U,"aria-label":T,onKeyDown:se,onChange:te,onClick:ae,onFocus:ae,onBlur:ie});return R?i.createElement(v.B,null,i.createElement(h.o,{isFill:!0},e),i.createElement(g,{isDisabled:m},R)):e},ue=(e,t,s)=>100*(e-t)/(s-t),de=i.createElement("div",{className:(0,d.css)("pf-v5-c-slider__thumb"),ref:M,tabIndex:m?-1:0,role:"slider","aria-valuemin":r?r[0].value:Z,"aria-valuemax":r?r[r.length-1].value:O,"aria-valuenow":X,"aria-valuetext":ne(),"aria-label":L,"aria-disabled":m,"aria-describedby":F,"aria-labelledby":G,onMouseDown:m?null:e=>{e.stopPropagation(),e.preventDefault(),K=J?M.current.getBoundingClientRect().right-e.clientX:e.clientX-M.current.getBoundingClientRect().left,document.addEventListener("mousemove",le),document.addEventListener("mouseup",oe)},onTouchStart:m?null:e=>{e.stopPropagation(),K=J?M.current.getBoundingClientRect().right-e.touches[0].clientX:e.touches[0].clientX-M.current.getBoundingClientRect().left,document.addEventListener("touchmove",le,{passive:!1}),document.addEventListener("touchend",oe),document.addEventListener("touchcancel",oe)},onKeyDown:m?null:e=>{const t=e.key;if("ArrowLeft"!==t&&"ArrowRight"!==t)return;e.preventDefault();let s=X;if(!p&&r){const e=r.findIndex((e=>e.value===X));"ArrowRight"===t?J?e-1>=0&&(s=r[e-1].value):e+1<r.length&&(s=r[e+1].value):"ArrowLeft"===t&&(J?e+1<r.length&&(s=r[e+1].value):e-1>=0&&(s=r[e-1].value))}else"ArrowRight"===t?s=J?X-P>=Z?X-P:Z:X+P<=O?X+P:O:"ArrowLeft"===t&&(s=J?X+P<=O?X+P:O:X-P>=Z?X-P:Z);s!==X&&(M.current.style.setProperty(_,`${s}%`),q(s),w&&w(e,s))},onClick:m?null:()=>{M.current.focus()}});return i.createElement("div",Object.assign({className:(0,d.css)("pf-v5-c-slider",t,m&&n),style:Object.assign(Object.assign({},Q),ee)},V),(D||k)&&i.createElement("div",{className:(0,d.css)(o)},D||k),i.createElement("div",{className:(0,d.css)("pf-v5-c-slider__main")},i.createElement("div",{className:(0,d.css)("pf-v5-c-slider__rail"),ref:H,onClick:m?null:e=>{re(e),W&&!p&&(M.current.style.setProperty(_,`${W}%`),q(W),w&&w(e,W))}},i.createElement("div",{className:(0,d.css)("pf-v5-c-slider__rail-track")})),r&&i.createElement("div",{className:(0,d.css)(c),"aria-hidden":"true"},r.map((e=>{const t=r[0].value,s=r[r.length-1].value,a=ue(e.value,t,s);return i.createElement(f,{key:e.value,value:a,label:e.label,isLabelHidden:e.isLabelHidden,isActive:e.value<=X})}))),!r&&(z||j)&&i.createElement("div",{className:(0,d.css)(c),"aria-hidden":"true"},(()=>{const e=[];for(let t=Z;t<=O;t+=P){const s=ue(t,Z,O);!z&&j&&t!==Z&&t!==O||e.push(i.createElement(f,{key:t,value:s,label:t.toString(),isTickHidden:!z,isLabelHidden:t!==Z&&t!==O||!j,isActive:t<=X}))}return e})()),I?i.createElement(y.u,{triggerRef:M,entryDelay:0,content:ne()},de):de,b&&"aboveThumb"===S&&i.createElement("div",{className:(0,d.css)(u,l)},ce())),b&&("right"===S||"end"===S)&&i.createElement("div",{className:(0,d.css)(u)},ce()),(A||B)&&i.createElement("div",{className:(0,d.css)(o)},A||B))};C.displayName="Slider"},92607:(e,t,s)=>{s.d(t,{BJ:()=>i,oi:()=>v,x:()=>a,y5:()=>f});var a,i,n=s(65353),r=s(66029),l=s(12455),o=s(38296),c=s(1774),u=s(80164),d=s(62472),p=s(84709),m=s(49644);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(a||(a={})),function(e){e.default="default",e.plain="plain"}(i||(i={}));class f extends r.Component{constructor(e){super(e),this.inputRef=r.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,u.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:s,onFocus:a}=this.props;(t||s)&&this.restoreText(),a&&a(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:s,onBlur:a}=this.props;(t||s)&&this.handleResize(),a&&a(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,d.getDefaultOUIAId)(f.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,p.p)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:s,type:a,value:i,placeholder:u,validated:p,onChange:f,onFocus:h,onBlur:b,isLeftTruncated:g,isStartTruncated:E,isExpanded:y,expandedProps:_,readOnly:N,readOnlyVariant:x,isRequired:C,isDisabled:R,customIcon:T,ouiaId:L,ouiaSafe:I}=e,S=(0,n.__rest)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","expandedProps","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),w=["success","error","warning"].includes(p),D=_?{"aria-expanded":null==_?void 0:_.isExpanded,"aria-controls":null==_?void 0:_.ariaControls,role:"combobox"}:{};return r.createElement("span",{className:(0,o.css)(l.Z.formControl,x&&l.Z.modifiers.readonly,"plain"===x&&l.Z.modifiers.plain,R&&l.Z.modifiers.disabled,(y||(null==_?void 0:_.isExpanded))&&l.Z.modifiers.expanded,T&&l.Z.modifiers.icon,w&&l.Z.modifiers[p],s)},r.createElement("input",Object.assign({},S,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:a,value:this.sanitizeInputValue(i),"aria-invalid":S["aria-invalid"]?S["aria-invalid"]:p===c.LD.error},D,{required:C,disabled:R,readOnly:!!x||N,ref:t||this.inputRef,placeholder:u},(0,d.getOUIAProps)(v.displayName,void 0!==L?L:this.state.ouiaStateId,I))),(T||w)&&r.createElement("span",{className:(0,o.css)(l.Z.formControlUtilities)},T&&r.createElement(m.J,{customIcon:T}),w&&r.createElement(m.J,{status:p})))}}f.displayName="TextInputBase",f.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:a.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const v=r.forwardRef(((e,t)=>r.createElement(f,Object.assign({},e,{innerRef:t}))));v.displayName="TextInput"},12455:(e,t,s)=>{s.d(t,{Z:()=>a}),s(90479);const a={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}},12276:(e,t,s)=>{s.d(t,{Z:()=>a}),s(74282);const a={inputGroup:"pf-v5-c-input-group",inputGroupItem:"pf-v5-c-input-group__item",inputGroupText:"pf-v5-c-input-group__text",modifiers:{box:"pf-m-box",plain:"pf-m-plain",disabled:"pf-m-disabled",fill:"pf-m-fill"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/2609.86274f7b879c9392032a72d51532cc71.js.map
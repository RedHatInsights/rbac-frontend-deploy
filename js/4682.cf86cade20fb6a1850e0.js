"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4682],{34682:(e,t,a)=>{a.r(t),a.d(t,{DatePicker:()=>W,yyyyMMddFormat:()=>q});var n=a(8674),r=a(44914),s=a.n(r),l=a(33774),i=a(98727),o=a(73530);a(43502);const c="pf-v5-c-calendar-month__date",d="pf-v5-c-calendar-month__dates-cell",m="pf-v5-c-calendar-month__header-nav-control",p="pf-m-prev-month",u="pf-m-next-month",h="pf-m-current",f="pf-m-in-range",g="pf-m-start-range",v="pf-m-end-range",b="pf-m-adjacent-month",y="pf-m-selected",E="pf-m-disabled",N="pf-m-hover";var x=a(23285),S=a(44461),k=a(35253),T=a(53642);const w=(0,a(68419).w)({name:"OutlinedCalendarAltIcon",height:512,width:448,svgPath:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z",yOffset:0,xOffset:0});var D=a(72583),_=a(22563),A=a(81995),R=a(97862),I=a(17661),O=a(91918),F=a(89015),C=a(47931);const M=e=>Boolean(e&&!isNaN(e));var P;!function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"}(P||(P={}));const L=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),j=new Date,z=e=>{var{date:t,locale:a,monthFormat:i=e=>e.toLocaleDateString(a,{month:"long"}),weekdayFormat:o=e=>e.toLocaleDateString(a,{weekday:"narrow"}),longWeekdayFormat:S=e=>e.toLocaleDateString(a,{weekday:"long"}),dayFormat:w=e=>e.getDate(),weekStart:P=0,onChange:z=()=>{},validators:B=[()=>!0],className:H,onSelectToggle:V=()=>{},onMonthChange:$=()=>{},rangeStart:q,prevMonthAriaLabel:W="Previous month",nextMonthAriaLabel:Y="Next month",yearInputAriaLabel:U="Select year",cellAriaLabel:G,isDateFocused:K=!1,inlineProps:Q}=e,J=(0,n.__rest)(e,["date","locale","monthFormat","weekdayFormat","longWeekdayFormat","dayFormat","weekStart","onChange","validators","className","onSelectToggle","onMonthChange","rangeStart","prevMonthAriaLabel","nextMonthAriaLabel","yearInputAriaLabel","cellAriaLabel","isDateFocused","inlineProps"]);const X=[0,1,2,3,4,5,6,7,8,9,10,11].map((e=>new Date(1990,e))).map(i),[Z,ee]=s().useState(!1),te=M(t)?t:M(q)?q:j,[ae,ne]=s().useState(te),re=e=>e.getFullYear(),se=re(ae),[le,ie]=s().useState(se.toString()),[oe,ce]=s().useState(new Date(ae)),de=s().useRef(),[me]=s().useState((0,C.LP)("hidden-month-span")),[pe,ue]=s().useState(!1),he=e=>B.every((t=>t(e))),fe=he(ae);(0,r.useEffect)((()=>{M(t)&&!L(ae,t)?ne(t):t||ne(j)}),[t]),(0,r.useEffect)((()=>{(pe||K)&&fe&&de.current&&de.current.focus()}),[ae,K,fe,de]);const ge=(e,t)=>{ne(t),ce(t),ue(!1),$(e,t),ie(re(t).toString())},ve=(e,t)=>new Date(null!=t?t:ae.getFullYear(),e,1),be=e=>{let t=ae.getMonth()+e,a=ae.getFullYear();return-1===t?(t=11,a--):12===t&&(t=0,a++),ve(t,a)},ye=be(-1),Ee=be(1),Ne=ae.getFullYear(),xe=ae.getMonth(),Se=s().useMemo((()=>((e,t,a,n)=>{const r=new Date(e,t),s=new Date(r);s.setDate(s.getDate()-s.getDay()+a);const l=[];s.getMonth()===r.getMonth()&&1!==s.getDate()&&s.setDate(s.getDate()-7);for(let e=0;e<6;e++){const e=[];for(let t=0;t<7;t++){const t=new Date(s);e.push({date:t,isValid:n.every((e=>e(t)))}),s.setDate(s.getDate()+1)}if(l.push(e),s.getMonth()!==r.getMonth())break}return l})(Ne,xe,P,B)),[Ne,xe,P,B]);if(!fe){const e=Se.reduce(((e,t)=>[...e,...t]),[]).filter((({date:e,isValid:t})=>t&&e.getMonth()===xe)).map((({date:e})=>({date:e,days:Math.abs(ae.getTime()-e.getTime())}))).sort(((e,t)=>e.days-t.days)).map((({date:e})=>e))[0];e&&(ne(e),ce(e))}const ke=he(oe),Te=i(ae),we=s().createElement("div",Object.assign({className:(0,l.css)("pf-v5-c-calendar-month",H)},J),s().createElement("div",{className:"pf-v5-c-calendar-month__header"},s().createElement("div",{className:(0,l.css)(m,p)},s().createElement(D.$n,{variant:"plain","aria-label":W,onClick:e=>ge(e,ye)},s().createElement(O.Ay,{"aria-hidden":!0}))),s().createElement(k.M,null,s().createElement(T.b,{isFill:!0},s().createElement("div",{className:"pf-v5-c-calendar-month__header-month"},s().createElement("span",{id:me,hidden:!0},"Month"),s().createElement(_.l,{toggle:e=>s().createElement(I.S,{ref:e,onClick:()=>ee(!Z),isExpanded:Z,style:{width:"140px"}},Te),"aria-labelledby":me,isOpen:Z,onOpenChange:e=>{ee(e),V(e)},onSelect:(e,t)=>{setTimeout((()=>{ee(!1),V(!1);const a=ve(Number(t));ne(a),ce(a),ue(!1),$(e,a)}),0)},selected:Te},s().createElement(A.B,null,X.map(((e,t)=>s().createElement(R.O,{key:t,value:t,isSelected:e===Te},e))))))),s().createElement(T.b,null,s().createElement("div",{className:"pf-v5-c-calendar-month__header-year"},s().createElement(x.ks,{"aria-label":U,type:"number",value:le,onChange:(e,t)=>{var a;if(/^\d{0,4}$/.test(t)&&(ie(t),4===t.length)){const n=Number(t);if(n>=1900&&n<=2100){const t=(a=n,ve(ae.getMonth(),a));ne(t),ce(t),ue(!1),e.target.focus(),$(e,t)}else ie(se.toString())}}})))),s().createElement("div",{className:(0,l.css)(m,u)},s().createElement(D.$n,{variant:"plain","aria-label":Y,onClick:e=>ge(e,Ee)},s().createElement(F.default,{"aria-hidden":!0})))),s().createElement("table",{className:"pf-v5-c-calendar-month__calendar"},s().createElement("thead",{className:"pf-v5-c-calendar-month__days"},s().createElement("tr",null,Se[0].map((({date:e},t)=>s().createElement("th",{key:t,className:"pf-v5-c-calendar-month__day",scope:"col"},s().createElement("span",{className:"pf-v5-screen-reader"},S(e)),s().createElement("span",{"aria-hidden":!0},o(e))))))),s().createElement("tbody",{onKeyDown:e=>{const t=new Date(ae);"ArrowUp"===e.key?t.setDate(t.getDate()-7):"ArrowRight"===e.key?t.setDate(t.getDate()+1):"ArrowDown"===e.key?t.setDate(t.getDate()+7):"ArrowLeft"===e.key&&t.setDate(t.getDate()-1),t.getTime()!==ae.getTime()&&he(t)&&(e.preventDefault(),ne(t),ce(t),ue(!0))}},Se.map(((e,a)=>s().createElement("tr",{key:a,className:"pf-v5-c-calendar-month__dates-row"},e.map((({date:e,isValid:a},n)=>{const r=w(e),o=L(e,j),m=M(t)&&L(e,t),p=L(e,ae),u=e.getMonth()!==ae.getMonth(),x=M(q)&&L(e,q);let S=!1,k=!1;return M(q)&&M(t)?(S=e>q&&e<t,k=L(e,t)):M(q)&&ke&&(oe>q||L(oe,q))&&(S=e>q&&e<oe,k=L(e,oe)),s().createElement("td",{key:n,className:(0,l.css)(d,u&&b,o&&h,(m||x)&&y,!a&&E,(S||x||k)&&f,x&&g,k&&v)},s().createElement("button",Object.assign({className:(0,l.css)(c,k&&N,!a&&E),type:"button",onClick:t=>z(t,e),onMouseOver:()=>ce(e),tabIndex:p?0:-1,disabled:!a,"aria-label":G?G(e):`${w(e)} ${i(e)} ${re(e)}`},p&&{ref:de}),r))}))))))));if(void 0!==Q){const e=Q.component?Q.component:"article";return s().createElement(e,Object.assign({},Q.ariaLabelledby&&{"aria-labelledby":Q.ariaLabelledby}),Q.title,we)}return we};z.displayName="CalendarMonth";var B=a(52860),H=a(59257),V=a(9937);const $="--pf-v5-c-date-picker__input--c-form-control--width-chars",q=e=>`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`,W=r.forwardRef(((e,t)=>{var{className:a,locale:s,dateFormat:m=q,dateParse:p=e=>3===e.split("-").length?new Date(`${e}T00:00:00`):new Date(void 0),isDisabled:u=!1,placeholder:f="YYYY-MM-DD",value:g="","aria-label":v="Date picker",buttonAriaLabel:b="Toggle date picker",onChange:E=()=>{},onBlur:N=()=>{},invalidFormatText:D="Invalid date",requiredDateOptions:_,helperText:A,appendTo:R="inline",popoverProps:I,monthFormat:O,weekdayFormat:F,longWeekdayFormat:C,dayFormat:P,weekStart:L,validators:j=[],rangeStart:W,style:Y={},inputProps:U={}}=e,G=(0,n.__rest)(e,["className","locale","dateFormat","dateParse","isDisabled","placeholder","value","aria-label","buttonAriaLabel","onChange","onBlur","invalidFormatText","requiredDateOptions","helperText","appendTo","popoverProps","monthFormat","weekdayFormat","longWeekdayFormat","dayFormat","weekStart","validators","rangeStart","style","inputProps"]);const[K,Q]=r.useState(g),[J,X]=r.useState(p(K)),[Z,ee]=r.useState(""),[te,ae]=r.useState(!1),[ne,re]=r.useState(!1),[se,le]=r.useState(!0),[ie,oe]=r.useState(!1),ce=r.useMemo((()=>Math.max(m(new Date).length,f.length)),[m]),de=Object.assign({[$]:ce},Y),me=r.useRef(),pe=r.useRef(),ue=r.useRef(),he=(null==_?void 0:_.isRequired)||!1,fe=(null==_?void 0:_.emptyDateText)||"Date cannot be blank";r.useEffect((()=>{Q(g),X(p(g))}),[g]),r.useEffect((()=>{le(!K);const e=p(K);Z&&M(e)&&ge(e),""!==K||se||ie||ee(he?fe:"")}),[K]);const ge=e=>{ee(j.map((t=>t(e))).join("\n")||"")};(0,r.useImperativeHandle)(t,(()=>({setCalendarOpen:e=>ae(e),toggleCalendar:e=>{ae((t=>void 0!==e?e:!t))},isCalendarOpen:te})),[ae,te,ne]);const ve=e=>`.${d}.${e} .${c}`,be=ve(y),ye=ve(h);return r.createElement("div",Object.assign({className:(0,l.css)(i.A.datePicker,a),ref:pe,style:de},G),r.createElement(S.A,Object.assign({elementToFocus:M(J)?be:ye,position:"bottom",bodyContent:r.createElement(z,{date:J,onChange:(e,t)=>{const a=m(t);Q(a),X(t),ge(t),ae(!1),E(null,a,new Date(t))},locale:s,validators:j.map((e=>t=>!e(t))),onSelectToggle:e=>re(e),monthFormat:O,weekdayFormat:F,longWeekdayFormat:C,dayFormat:P,weekStart:L,rangeStart:W}),showClose:!1,isVisible:te,shouldClose:(e,t)=>e.key===B.RU.Escape&&ne?(e.stopPropagation(),re(!1),!1):!(me.current&&me.current.contains(e.target)||(te&&(e.stopPropagation(),ae(!1),t(),(null==_?void 0:_.isRequired)&&!K&&ee(fe)),e.key===B.RU.Escape&&te&&e.stopPropagation(),0)),withFocusTrap:!0,hasNoPadding:!0,hasAutoWidth:!0,appendTo:R,triggerRef:ue},I),r.createElement("div",{className:i.A.datePickerInput,ref:ue},r.createElement(k.M,null,r.createElement(T.b,null,r.createElement(x.ks,Object.assign({isDisabled:u,isRequired:null==_?void 0:_.isRequired,"aria-label":v,placeholder:f,validated:Z.trim()?"error":"default",value:K,onChange:(e,t)=>{Q(t),ee("");const a=p(t);X(a),M(a)?E(e,t,new Date(a)):E(e,t)},onBlur:e=>{oe(!1);const t=p(K),a=M(t),n=a?new Date(t):void 0;N(e,K,n),a&&ge(t),a||se||ee(D),!a&&se&&(null==_?void 0:_.isRequired)&&ee(fe)},onFocus:()=>oe(!0),onKeyPress:e=>{"Enter"===e.key&&K&&(M(J)?ge(J):ee(D))}},U))),r.createElement(T.b,null,r.createElement("button",{ref:me,className:(0,l.css)(o.default.button,o.default.modifiers.control),"aria-label":b,type:"button",onClick:()=>ae(!te),disabled:u},r.createElement(w,null)))))),(Z||A)&&r.createElement("div",{className:i.A.datePickerHelperText},Z?r.createElement(H.E,null,r.createElement(V.j,{variant:"error"},Z)):A))}));W.displayName="DatePicker"},82944:(e,t,a)=>{a.d(t,{T:()=>m});var n=a(8674),r=a(44914),s=a(19581),l=a(33774),i=a(19202),o=a(31003),c=a(99851);const d={success:i.default,error:o.Ay,warning:c.Ay},m=e=>{var{status:t,customIcon:a,className:i}=e,o=(0,n.__rest)(e,["status","customIcon","className"]);const c=t&&d[t];return r.createElement("span",Object.assign({className:(0,l.css)(s.A.formControlIcon,t&&s.A.modifiers.status,i)},o),a||r.createElement(c,null))}},59257:(e,t,a)=>{a.d(t,{E:()=>i});var n=a(8674),r=a(44914),s=a(21295),l=a(33774);const i=e=>{var{children:t,className:a,component:i="div",id:o,isLiveRegion:c=!1,"aria-label":d}=e,m=(0,n.__rest)(e,["children","className","component","id","isLiveRegion","aria-label"]);const p=i;return r.createElement(p,Object.assign({id:o,className:(0,l.css)(s.A.helperText,a)},c&&{"aria-live":"polite"},"ul"===i&&{role:"list","aria-label":d},m),t)};i.displayName="HelperText"},9937:(e,t,a)=>{a.d(t,{j:()=>p});var n=a(8674),r=a(44914),s=a(21295),l=a(33774);const i=(0,a(68419).w)({name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0});var o=a(99851),c=a(19202),d=a(31003);const m={default:"",indeterminate:s.A.modifiers.indeterminate,warning:s.A.modifiers.warning,success:s.A.modifiers.success,error:s.A.modifiers.error},p=e=>{var{children:t,className:a,component:p="div",variant:u="default",icon:h,isDynamic:f=!1,hasIcon:g=f,id:v,screenReaderText:b=`${u} status`}=e,y=(0,n.__rest)(e,["children","className","component","variant","icon","isDynamic","hasIcon","id","screenReaderText"]);const E=p;return r.createElement(E,Object.assign({className:(0,l.css)(s.A.helperTextItem,m[u],f&&s.A.modifiers.dynamic,a),id:v},y),h&&r.createElement("span",{className:(0,l.css)(s.A.helperTextItemIcon),"aria-hidden":!0},h),g&&!h&&r.createElement("span",{className:(0,l.css)(s.A.helperTextItemIcon),"aria-hidden":!0},("default"===u||"indeterminate"===u)&&r.createElement(i,null),"warning"===u&&r.createElement(o.Ay,null),"success"===u&&r.createElement(c.default,null),"error"===u&&r.createElement(d.Ay,null)),r.createElement("span",{className:(0,l.css)(s.A.helperTextItemText)},t,f&&r.createElement("span",{className:"pf-v5-screen-reader"},": ",b,";")))};p.displayName="HelperTextItem"},35253:(e,t,a)=>{a.d(t,{M:()=>o});var n=a(8674),r=a(44914),s=a(37621),l=a(33774);const i=e=>{var{className:t,children:a,innerRef:i}=e,o=(0,n.__rest)(e,["className","children","innerRef"]);const c=r.useRef(null),d=i||c;return r.createElement("div",Object.assign({ref:d,className:(0,l.css)(s.A.inputGroup,t)},o),a)};i.displayName="InputGroupBase";const o=r.forwardRef(((e,t)=>r.createElement(i,Object.assign({innerRef:t},e))));o.displayName="InputGroup"},53642:(e,t,a)=>{a.d(t,{b:()=>i});var n=a(8674),r=a(44914),s=a(37621),l=a(33774);const i=e=>{var{className:t,children:a,isFill:i=!1,isBox:o=!1,isPlain:c,isDisabled:d}=e,m=(0,n.__rest)(e,["className","children","isFill","isBox","isPlain","isDisabled"]);return r.createElement("div",Object.assign({className:(0,l.css)(s.A.inputGroupItem,i&&s.A.modifiers.fill,o&&s.A.modifiers.box,c&&s.A.modifiers.plain,d&&s.A.modifiers.disabled,t)},m),a)};i.displayName="InputGroupItem"},22563:(e,t,a)=>{a.d(t,{l:()=>p});var n=a(8674),r=a(44914),s=a.n(r),l=a(33774),i=a(74225),o=a(94494),c=a(17694),d=a(31398);const m=e=>{var{children:t,className:a,onSelect:r,isOpen:m,selected:u,toggle:h,shouldFocusToggleOnSelect:f=!1,shouldFocusFirstItemOnOpen:g=!0,onOpenChange:v,onOpenChangeKeys:b=["Escape","Tab"],isPlain:y,innerRef:E,zIndex:N=9999,role:x="listbox",popperProps:S,menuHeight:k,maxMenuHeight:T,isScrollable:w}=e,D=(0,n.__rest)(e,["children","className","onSelect","isOpen","selected","toggle","shouldFocusToggleOnSelect","shouldFocusFirstItemOnOpen","onOpenChange","onOpenChangeKeys","isPlain","innerRef","zIndex","role","popperProps","menuHeight","maxMenuHeight","isScrollable"]);const _=s().useRef(),A=s().useRef(),R=E||_,I="function"==typeof h||"function"!=typeof h&&!h.toggleRef?A:null==h?void 0:h.toggleRef;s().useEffect((()=>{const e=e=>{var t,a,n;m&&v&&((null===(t=R.current)||void 0===t?void 0:t.contains(e.target))||(null===(a=I.current)||void 0===a?void 0:a.contains(e.target)))&&b.includes(e.key)&&(e.preventDefault(),v(!1),null===(n=I.current)||void 0===n||n.focus())},t=e=>{var t,a,n;m&&g&&(null===(t=I.current)||void 0===t?void 0:t.contains(e.target))&&setTimeout((()=>{var e;const t=null===(e=null==R?void 0:R.current)||void 0===e?void 0:e.querySelector("li button:not(:disabled),li input:not(:disabled)");t&&t.focus()}),0),m&&v&&!(null===(a=null==I?void 0:I.current)||void 0===a?void 0:a.contains(e.target))&&m&&!(null===(n=R.current)||void 0===n?void 0:n.contains(e.target))&&v(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",t)}}),[m,R,I,v,b]);const O=s().createElement(i.W,Object.assign({role:x,className:(0,l.css)(a),ref:R,onSelect:(e,t)=>{r&&r(e,t),f&&I.current.focus()},isPlain:y,selected:u,isScrollable:w},(0,d.getOUIAProps)(p.displayName,void 0!==D.ouiaId?D.ouiaId:(0,d.getDefaultOUIAId)(p.displayName),void 0===D.ouiaSafe||D.ouiaSafe),D),s().createElement(o.r,{menuHeight:k,maxMenuHeight:T},t));return s().createElement(c.Popper,Object.assign({trigger:"function"==typeof h?h(I):h.toggleNode,triggerRef:I,popper:O,popperRef:R,isVisible:m,zIndex:N},S))},p=s().forwardRef(((e,t)=>s().createElement(m,Object.assign({innerRef:t},e))));p.displayName="Select"},81995:(e,t,a)=>{a.d(t,{B:()=>o});var n=a(8674),r=a(44914),s=a.n(r),l=a(33774),i=a(75797);const o=e=>{var{children:t,className:a,isAriaMultiselectable:r=!1}=e,o=(0,n.__rest)(e,["children","className","isAriaMultiselectable"]);return s().createElement(i.c,Object.assign({isAriaMultiselectable:r,className:(0,l.css)(a)},o),t)};o.displayName="SelectList"},97862:(e,t,a)=>{a.d(t,{O:()=>c});var n=a(8674),r=a(44914),s=a.n(r),l=a(33774),i=a(64361);const o=e=>{var{children:t,className:a,innerRef:r,value:o}=e,c=(0,n.__rest)(e,["children","className","innerRef","value"]);return s().createElement(i.D,Object.assign({itemId:o,ref:r,className:(0,l.css)(a)},c),t)},c=s().forwardRef(((e,t)=>s().createElement(o,Object.assign({},e,{innerRef:t}))));c.displayName="SelectOption"},23285:(e,t,a)=>{a.d(t,{RQ:()=>r,ks:()=>f,lB:()=>h,tj:()=>n});var n,r,s=a(8674),l=a(44914),i=a(19581),o=a(33774),c=a(52860),d=a(47931),m=a(31398),p=a(49045),u=a(82944);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(n||(n={})),function(e){e.default="default",e.plain="plain"}(r||(r={}));class h extends l.Component{constructor(e){super(e),this.inputRef=l.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,d.Mr)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:a,onFocus:n}=this.props;(t||a)&&this.restoreText(),n&&n(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:a,onBlur:n}=this.props;(t||a)&&this.handleResize(),n&&n(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,m.getDefaultOUIAId)(h.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,p.N)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:a,type:n,value:r,placeholder:d,validated:p,onChange:h,onFocus:g,onBlur:v,isLeftTruncated:b,isStartTruncated:y,isExpanded:E,expandedProps:N,readOnly:x,readOnlyVariant:S,isRequired:k,isDisabled:T,customIcon:w,ouiaId:D,ouiaSafe:_}=e,A=(0,s.__rest)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","expandedProps","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),R=["success","error","warning"].includes(p),I=N?{"aria-expanded":null==N?void 0:N.isExpanded,"aria-controls":null==N?void 0:N.ariaControls,role:"combobox"}:{};return l.createElement("span",{className:(0,o.css)(i.A.formControl,S&&i.A.modifiers.readonly,"plain"===S&&i.A.modifiers.plain,T&&i.A.modifiers.disabled,(E||(null==N?void 0:N.isExpanded))&&i.A.modifiers.expanded,w&&i.A.modifiers.icon,R&&i.A.modifiers[p],a)},l.createElement("input",Object.assign({},A,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:n,value:this.sanitizeInputValue(r),"aria-invalid":A["aria-invalid"]?A["aria-invalid"]:p===c.nh.error},I,{required:k,disabled:T,readOnly:!!S||x,ref:t||this.inputRef,placeholder:d},(0,m.getOUIAProps)(f.displayName,void 0!==D?D:this.state.ouiaStateId,_))),(w||R)&&l.createElement("span",{className:(0,o.css)(i.A.formControlUtilities)},w&&l.createElement(u.T,{customIcon:w}),R&&l.createElement(u.T,{status:p})))}}h.displayName="TextInputBase",h.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:n.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const f=l.forwardRef(((e,t)=>l.createElement(h,Object.assign({},e,{innerRef:t}))));f.displayName="TextInput"},98727:(e,t,a)=>{a.d(t,{A:()=>n}),a(61858);const n={datePicker:"pf-v5-c-date-picker",datePickerCalendar:"pf-v5-c-date-picker__calendar",datePickerHelperText:"pf-v5-c-date-picker__helper-text",datePickerInput:"pf-v5-c-date-picker__input",formControl:"pf-v5-c-form-control",modifiers:{alignRight:"pf-m-align-right",top:"pf-m-top",static:"pf-m-static"},themeDark:"pf-v5-theme-dark"}},19581:(e,t,a)=>{a.d(t,{A:()=>n}),a(92004);const n={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}},21295:(e,t,a)=>{a.d(t,{A:()=>n}),a(7302);const n={helperText:"pf-v5-c-helper-text",helperTextItem:"pf-v5-c-helper-text__item",helperTextItemIcon:"pf-v5-c-helper-text__item-icon",helperTextItemText:"pf-v5-c-helper-text__item-text",modifiers:{hidden:"pf-m-hidden",indeterminate:"pf-m-indeterminate",warning:"pf-m-warning",success:"pf-m-success",error:"pf-m-error",dynamic:"pf-m-dynamic"},themeDark:"pf-v5-theme-dark"}},37621:(e,t,a)=>{a.d(t,{A:()=>n}),a(71036);const n={inputGroup:"pf-v5-c-input-group",inputGroupItem:"pf-v5-c-input-group__item",inputGroupText:"pf-v5-c-input-group__text",modifiers:{box:"pf-m-box",plain:"pf-m-plain",disabled:"pf-m-disabled",fill:"pf-m-fill"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/4682.74d06811f5a273caec31360c9fe59d1a.js.map
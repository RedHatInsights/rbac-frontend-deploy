(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[7919,5467,3224,5098],{93224:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Label:()=>P,LabelGroup:()=>B});var i=a(65353),l=a(66029);a(82014);const s="pf-v5-c-label__content",o="pf-m-compact",n="pf-m-blue",r="pf-m-green",c="pf-m-orange",d="pf-m-red",p="pf-m-purple",m="pf-m-cyan",f="pf-m-gold",u="pf-m-outline",b="pf-m-overflow",g="pf-m-editable-active",h="pf-m-disabled";a(24620);const v="pf-v5-c-label-group__label",E="pf-v5-c-label-group__list-item",y="pf-m-category",C="pf-m-vertical",x="pf-m-editable",L="pf-m-textarea";var N=a(47173),_=a(35224),O=a(38296),T=a(24307),k=a(6551);const R="--pf-v5-c-label__text--MaxWidth",w={blue:n,cyan:m,green:r,orange:c,purple:p,red:d,gold:f,grey:""},P=e=>{var{children:t,className:a="",color:n="grey",variant:r="filled",isCompact:c=!1,isDisabled:d=!1,isEditable:p=!1,editableProps:m,textMaxWidth:f,tooltipPosition:v,icon:E,onClose:y,onClick:C,onEditCancel:L,onEditComplete:P,closeBtn:I,closeBtnAriaLabel:D,closeBtnProps:A,href:B,isOverflowLabel:j,render:W}=e,M=(0,i.__rest)(e,["children","className","color","variant","isCompact","isDisabled","isEditable","editableProps","textMaxWidth","tooltipPosition","icon","onClose","onClick","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[S,V]=(0,l.useState)(!1),[z,$]=(0,l.useState)(t),F=l.useRef(),H=l.useRef();l.useEffect((()=>(document.addEventListener("mousedown",U),document.addEventListener("keydown",G),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("keydown",G)}))),l.useEffect((()=>{C&&B?console.warn("Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop."):C&&p&&console.warn("Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.")}),[C,B,p]);const U=e=>{S&&H&&H.current&&!H.current.contains(e.target)&&(H.current.value&&P&&P(e,H.current.value),V(!1))},G=e=>{var a,i;const l=e.key;if((S||F&&F.current&&F.current.contains(e.target))&&(!S||H&&H.current&&H.current.contains(e.target))&&(!S||"Enter"!==l&&"Tab"!==l||(e.preventDefault(),e.stopImmediatePropagation(),H.current.value&&P&&P(e,H.current.value),V(!1),null===(a=null==F?void 0:F.current)||void 0===a||a.focus()),S&&"Escape"===l&&(e.preventDefault(),e.stopImmediatePropagation(),H.current.value&&(H.current.value=t,L&&L(e,t)),V(!1),null===(i=null==F?void 0:F.current)||void 0===i||i.focus()),!S&&"Enter"===l)){e.preventDefault(),e.stopImmediatePropagation(),V(!0);const t=e.target,a=document.createRange(),i=window.getSelection();a.selectNodeContents(t),a.collapse(!1),i.removeAllRanges(),i.addRange(a)}},q=(B||C)&&d,K=l.createElement(N.zx,Object.assign({type:"button",variant:"plain",onClick:y,"aria-label":D||`Close ${t}`},q&&{isDisabled:!0},A),l.createElement(T.default,null)),J=l.createElement("span",{className:(0,O.css)("pf-v5-c-label__actions")},I||K),Q=l.createRef(),X=l.useRef(),[Y,Z]=l.useState(!1);(0,k.L)((()=>{const e=p?F:Q;S||Z(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[S]);const ee=l.createElement(l.Fragment,null,E&&l.createElement("span",{className:(0,O.css)("pf-v5-c-label__icon")},E),l.createElement("span",Object.assign({ref:Q,className:(0,O.css)("pf-v5-c-label__text")},f&&{style:{[R]:f}}),t));l.useEffect((()=>{S&&H&&H.current&&H.current.focus()}),[H,S]);let te="span";B?te="a":(p||C&&!j)&&(te="button");const ae={type:"button",onClick:C},ie="button"===te,le=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({className:(0,O.css)(s)},Y&&{tabIndex:0}),B&&{href:B}),B&&d&&{onClick:e=>e.preventDefault()}),ie&&ae),p&&Object.assign({ref:F,onClick:e=>{V(!0),e.stopPropagation()}},m)),q&&ie&&{disabled:!0}),q&&B&&{tabindex:-1,"aria-disabled":!0});let se=l.createElement(te,Object.assign({},le),ee);W?se=l.createElement(l.Fragment,null,Y&&l.createElement(_.u,{triggerRef:X,content:t,position:v}),W({className:s,content:ee,componentRef:X})):Y&&(se=l.createElement(_.u,{content:t,position:v},se));const oe=j?"button":"span";return l.createElement(oe,Object.assign({},M,{className:(0,O.css)("pf-v5-c-label",q&&h,w[n],"outline"===r&&u,j&&b,c&&o,p&&x,S&&g,a),onClick:j?C:void 0}),!S&&se,!S&&y&&J,S&&l.createElement("input",Object.assign({className:(0,O.css)(s),type:"text",id:"editable-input",ref:H,value:z,onChange:()=>{$(H.current.value)}},m)))};P.displayName="Label";var I=a(72781),D=a(80164),A=a(41724);class B extends l.Component{constructor(e){super(e),this.headingRef=l.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:t,tooltipPosition:a}=this.props,{isTooltipVisible:i}=this.state;return i?l.createElement(_.u,{position:a,content:t},l.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,O.css)(v)},l.createElement("span",{"aria-hidden":"true",id:e},t))):l.createElement("span",{ref:this.headingRef,className:(0,O.css)(v),"aria-hidden":"true",id:e},t)}render(){const e=this.props,{categoryName:t,children:a,className:s,isClosable:n,isCompact:r,closeBtnAriaLabel:c,"aria-label":d,onClick:p,numLabels:m,expandedText:f,collapsedText:u,defaultIsOpen:b,tooltipPosition:g,isVertical:h,isEditable:v,hasEditableTextArea:_,editableTextAreaProps:T,addLabelControl:k}=e,R=(0,i.__rest)(e,["categoryName","children","className","isClosable","isCompact","closeBtnAriaLabel","aria-label","onClick","numLabels","expandedText","collapsedText","defaultIsOpen","tooltipPosition","isVertical","isEditable","hasEditableTextArea","editableTextAreaProps","addLabelControl"]),{isOpen:w}=this.state,B=l.Children.toArray(a),j=B.length,W=(0,D.tJ)(u,{remaining:j-m}),M=e=>{const a=w?B:B.slice(0,m),i=l.createElement(l.Fragment,null,t&&this.renderLabel(e),l.createElement("ul",Object.assign({className:(0,O.css)("pf-v5-c-label-group__list")},t&&{"aria-labelledby":e},!t&&{"aria-label":d},{role:"list"},R),a.map(((e,t)=>l.createElement("li",{className:(0,O.css)(E),key:t},e))),j>m&&l.createElement("li",{className:(0,O.css)(E)},l.createElement(P,{isOverflowLabel:!0,onClick:this.toggleCollapse,className:(0,O.css)(r&&o)},w?f:W)),k&&l.createElement("li",{className:(0,O.css)(E)},k),v&&_&&l.createElement("li",{className:(0,O.css)(E,L)},l.createElement("textarea",Object.assign({className:(0,O.css)("pf-v5-c-label-group__textarea"),rows:1,tabIndex:0},T))))),u=l.createElement("div",{className:(0,O.css)("pf-v5-c-label-group__close")},l.createElement(N.zx,{variant:"plain","aria-label":c,onClick:p,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`},l.createElement(I.default,{"aria-hidden":"true"})));return l.createElement("div",{className:(0,O.css)("pf-v5-c-label-group",s,t&&y,h&&C,v&&x)},l.createElement("div",{className:(0,O.css)("pf-v5-c-label-group__main")},i),n&&u)};return 0===j&&void 0===k?null:l.createElement(A.w,null,(e=>M(this.props.id||e)))}}B.displayName="LabelGroup",B.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numLabels:3,isClosable:!1,isCompact:!1,onClick:e=>{},closeBtnAriaLabel:"Close label group",tooltipPosition:"top","aria-label":"Label group category",isVertical:!1,isEditable:!1,hasEditableTextArea:!1}},35224:(e,t,a)=>{"use strict";a.d(t,{u:()=>u,D:()=>p});var i=a(65353),l=a(66029),s=a(86478),o=a(38296);const n=e=>{var{className:t,children:a,isLeftAligned:n}=e,r=(0,i.__rest)(e,["className","children","isLeftAligned"]);return l.createElement("div",Object.assign({className:(0,o.css)(s.default.tooltipContent,n&&s.default.modifiers.textAlignLeft,t)},r),a)};n.displayName="TooltipContent";const r=e=>{var{className:t}=e,a=(0,i.__rest)(e,["className"]);return l.createElement("div",Object.assign({className:(0,o.css)(s.default.tooltipArrow,t)},a))};r.displayName="TooltipArrow";var c=a(1774);const d={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var p,m=a(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(p||(p={}));let f=1;const u=e=>{var{content:t,position:a="top",trigger:p="mouseenter focus",isVisible:u=!1,isContentLeftAligned:b=!1,enableFlip:g=!0,className:h="",entryDelay:v=300,exitDelay:E=300,appendTo:y=(()=>document.body),zIndex:C=9999,minWidth:x,maxWidth:L=d.value,distance:N=15,aria:_="describedby",flipBehavior:O=["top","right","bottom","left","top","right","bottom"],id:T="pf-tooltip-"+f++,children:k,animationDuration:R=300,triggerRef:w,"aria-live":P=(w?"polite":"off"),onTooltipHidden:I=(()=>{})}=e,D=(0,i.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const A=p.includes("mouseenter"),B=p.includes("focus"),j=p.includes("click"),W="manual"===p,[M,S]=l.useState(!1),V=l.createRef();l.useEffect((()=>{u?z():$()}),[u]);const z=()=>{S(!0)},$=()=>{S(!1)},F={top:s.default.modifiers.top,bottom:s.default.modifiers.bottom,left:s.default.modifiers.left,right:s.default.modifiers.right,"top-start":s.default.modifiers.topLeft,"top-end":s.default.modifiers.topRight,"bottom-start":s.default.modifiers.bottomLeft,"bottom-end":s.default.modifiers.bottomRight,"left-start":s.default.modifiers.leftTop,"left-end":s.default.modifiers.leftBottom,"right-start":s.default.modifiers.rightTop,"right-end":s.default.modifiers.rightBottom},H=L!==d.value,U=l.createElement("div",Object.assign({"aria-live":P,className:(0,o.css)(s.default.tooltip,h),role:"tooltip",id:T,style:{maxWidth:H?L:null},ref:V},D),l.createElement(r,null),l.createElement(n,{isLeftAligned:b},t));return l.createElement(m.Popper,{trigger:"none"!==_&&M?"describedby"===_&&k&&k.props&&!k.props["aria-describedby"]?l.cloneElement(k,{"aria-describedby":T}):"labelledby"===_&&k.props&&!k.props["aria-labelledby"]?l.cloneElement(k,{"aria-labelledby":T}):k:k,triggerRef:w,popper:U,popperRef:V,minWidth:void 0!==x?x:"revert",appendTo:y,isVisible:M,positionModifiers:F,distance:N,placement:a,onMouseEnter:A&&z,onMouseLeave:A&&$,onPopperMouseEnter:A&&z,onPopperMouseLeave:A&&$,onFocus:B&&z,onBlur:B&&$,onDocumentClick:j&&((e,t)=>{M?$():e.target===t&&z()}),onDocumentKeyDown:W?null:e=>{W||e.key===c.yu.Escape&&M&&$()},onTriggerEnter:W?null:e=>{e.key===c.yu.Enter&&(M?$():z())},enableFlip:g,zIndex:C,flipBehavior:O,animationDuration:R,entryDelay:v,exitDelay:E,onHidden:I})};u.displayName="Tooltip"},41724:(e,t,a)=>{"use strict";a.d(t,{w:()=>o});var i=a(66029),l=a(80164);let s=0;class o extends i.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,l.Ki)():s++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}o.displayName="GenerateId",o.defaultProps={prefix:"pf-random-id-",isRandom:!1}},40400:(e,t,a)=>{"use strict";a.d(t,{I:()=>o});var i=a(65353),l=a(66029);let s=0;function o({name:e,xOffset:t=0,yOffset:a=0,width:o,height:n,svgPath:r}){var c;return c=class extends l.Component{constructor(){super(...arguments),this.id="icon-title-"+s++}render(){const e=this.props,{title:s,className:c}=e,d=(0,i.__rest)(e,["title","className"]),p=c?`pf-v5-svg ${c}`:"pf-v5-svg",m=Boolean(s),f=[t,a,o,n].join(" ");return l.createElement("svg",Object.assign({className:p,viewBox:f,fill:"currentColor","aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img",width:"1em",height:"1em"},d),m&&l.createElement("title",{id:this.id},s),l.createElement("path",{d:r}))}},c.displayName=e,c}},72781:(e,t,a)=>{"use strict";a.r(t),a.d(t,{TimesCircleIcon:()=>s,TimesCircleIconConfig:()=>l,default:()=>o});var i=a(40400);const l={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},s=(0,i.I)(l),o=s},24307:(e,t,a)=>{"use strict";a.r(t),a.d(t,{TimesIcon:()=>s,TimesIconConfig:()=>l,default:()=>o});var i=a(40400);const l={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},s=(0,i.I)(l),o=s},86478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i}),a(49854);const i={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},45467:()=>{},11452:()=>{},34946:()=>{},24620:()=>{},82014:()=>{},66822:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7919.e4476e4a4444dcff2d413571483f0892.js.map
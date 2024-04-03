(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[101,2472,5467,6833,5098],{68425:(e,t,a)=>{"use strict";a.d(t,{C:()=>r});var l=a(65353),s=a(28416),n=a(38296),i=a(12971);const r=e=>{var{isRead:t=!1,className:a="",children:r="",screenReaderText:o}=e,c=(0,l.__rest)(e,["isRead","className","children","screenReaderText"]);return s.createElement("span",Object.assign({},c,{className:(0,n.css)(i.default.badge,t?i.default.modifiers.read:i.default.modifiers.unread,a)}),r,o&&s.createElement("span",{className:"pf-v5-screen-reader"},o))};r.displayName="Badge"},47173:(e,t,a)=>{"use strict";a.d(t,{L$:()=>s,Wu:()=>l,qE:()=>n,zx:()=>f});var l,s,n,i=a(65353),r=a(28416),o=a(80480),c=a(38296),d=a(2372),p=a(62472),u=a(68425);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(l||(l={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(s||(s={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(n||(n={}));const m=e=>{var{children:t=null,className:a="",component:m="button",isActive:b=!1,isBlock:g=!1,isDisabled:v=!1,isAriaDisabled:h=!1,isLoading:E=null,isDanger:y=!1,spinnerAriaValueText:x,spinnerAriaLabelledBy:C,spinnerAriaLabel:L,size:N=n.default,inoperableEvents:_=["onClick","onKeyPress"],isInline:I=!1,type:O=s.button,variant:k=l.primary,iconPosition:P="start","aria-label":Z=null,icon:w=null,ouiaId:A,ouiaSafe:T=!0,tabIndex:R=null,innerRef:$,countOptions:B}=e,G=(0,i.__rest)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const j=(0,p.useOUIAProps)(f.displayName,A,T,k),D=m,S="button"===D,z=I&&"span"===D,M=_.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{});return r.createElement(D,Object.assign({},G,h?M:null,{"aria-disabled":v||h,"aria-label":Z,className:(0,c.css)(o.default.button,o.default.modifiers[k],g&&o.default.modifiers.block,v&&o.default.modifiers.disabled,h&&o.default.modifiers.ariaDisabled,b&&o.default.modifiers.active,I&&k===l.link&&o.default.modifiers.inline,y&&(k===l.secondary||k===l.link)&&o.default.modifiers.danger,null!==E&&k!==l.plain&&o.default.modifiers.progress,E&&o.default.modifiers.inProgress,N===n.sm&&o.default.modifiers.small,N===n.lg&&o.default.modifiers.displayLg,a),disabled:S?v:null,tabIndex:null!==R?R:v?S?null:-1:h?null:z?0:void 0,type:S||z?O:null,role:z?"button":null,ref:$},j),E&&r.createElement("span",{className:(0,c.css)(o.default.buttonProgress)},r.createElement(d.$,{size:d.S.md,isInline:I,"aria-valuetext":x,"aria-label":L,"aria-labelledby":C})),k===l.plain&&null===t&&w?w:null,k!==l.plain&&w&&("start"===P||"left"===P)&&r.createElement("span",{className:(0,c.css)(o.default.buttonIcon,o.default.modifiers.start)},w),t,k!==l.plain&&w&&("end"===P||"right"===P)&&r.createElement("span",{className:(0,c.css)(o.default.buttonIcon,o.default.modifiers.end)},w),B&&r.createElement("span",{className:(0,c.css)(o.default.buttonCount,B.className)},r.createElement(u.C,{isRead:B.isRead},B.count)))},f=r.forwardRef(((e,t)=>r.createElement(m,Object.assign({innerRef:t},e))));f.displayName="Button"},69174:(e,t,a)=>{"use strict";a.d(t,{_:()=>m});var l=a(65353),s=a(28416),n=a(83063),i=a(10483),r=a(47173),o=a(35224),c=a(38296),d=a(24307),p=a(6551);const u={blue:n.Z.modifiers.blue,cyan:n.Z.modifiers.cyan,green:n.Z.modifiers.green,orange:n.Z.modifiers.orange,purple:n.Z.modifiers.purple,red:n.Z.modifiers.red,gold:n.Z.modifiers.gold,grey:""},m=e=>{var{children:t,className:a="",color:m="grey",variant:f="filled",isCompact:b=!1,isEditable:g=!1,editableProps:v,textMaxWidth:h,tooltipPosition:E,icon:y,onClose:x,onClick:C,onEditCancel:L,onEditComplete:N,closeBtn:_,closeBtnAriaLabel:I,closeBtnProps:O,href:k,isOverflowLabel:P,render:Z}=e,w=(0,l.__rest)(e,["children","className","color","variant","isCompact","isEditable","editableProps","textMaxWidth","tooltipPosition","icon","onClose","onClick","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[A,T]=(0,s.useState)(!1),[R,$]=(0,s.useState)(t),B=s.useRef(),G=s.useRef();s.useEffect((()=>(document.addEventListener("mousedown",j),document.addEventListener("keydown",D),()=>{document.removeEventListener("mousedown",j),document.removeEventListener("keydown",D)}))),s.useEffect((()=>{C&&k?console.warn("Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop."):C&&g&&console.warn("Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.")}),[C,k,g]);const j=e=>{A&&G&&G.current&&!G.current.contains(e.target)&&(G.current.value&&N&&N(e,G.current.value),T(!1))},D=e=>{var a,l;const s=e.key;if((A||B&&B.current&&B.current.contains(e.target))&&(!A||G&&G.current&&G.current.contains(e.target))&&(!A||"Enter"!==s&&"Tab"!==s||(e.preventDefault(),e.stopImmediatePropagation(),G.current.value&&N&&N(e,G.current.value),T(!1),null===(a=null==B?void 0:B.current)||void 0===a||a.focus()),A&&"Escape"===s&&(e.preventDefault(),e.stopImmediatePropagation(),G.current.value&&(G.current.value=t,L&&L(e,t)),T(!1),null===(l=null==B?void 0:B.current)||void 0===l||l.focus()),!A&&"Enter"===s)){e.preventDefault(),e.stopImmediatePropagation(),T(!0);const t=e.target,a=document.createRange(),l=window.getSelection();a.selectNodeContents(t),a.collapse(!1),l.removeAllRanges(),l.addRange(a)}},S=P?"button":"span",z=s.createElement(r.zx,Object.assign({type:"button",variant:"plain",onClick:x,"aria-label":I||`Close ${t}`},O),s.createElement(d.default,null)),M=s.createElement("span",{className:(0,c.css)(n.Z.labelActions)},_||z),W=s.createRef(),V=s.useRef(),[U,F]=s.useState(!1);(0,p.L)((()=>{const e=g?B:W;A||F(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[A]);const q=s.createElement(s.Fragment,null,y&&s.createElement("span",{className:(0,c.css)(n.Z.labelIcon)},y),s.createElement("span",Object.assign({ref:W,className:(0,c.css)(n.Z.labelText)},h&&{style:{"--pf-v5-c-label__text--MaxWidth":h}}),t));s.useEffect((()=>{A&&G&&G.current&&G.current.focus()}),[G,A]);let H="span";k?H="a":(g||C&&!P)&&(H="button");const J={type:"button",onClick:C},K="button"===H,Q=Object.assign(Object.assign(Object.assign(Object.assign({className:(0,c.css)(n.Z.labelContent)},U&&{tabIndex:0}),k&&{href:k}),K&&J),g&&Object.assign({ref:B,onClick:e=>{T(!0),e.stopPropagation()}},v));let X=s.createElement(H,Object.assign({},Q),q);return Z?X=s.createElement(s.Fragment,null,U&&s.createElement(o.u,{triggerRef:V,content:t,position:E}),Z({className:n.Z.labelContent,content:q,componentRef:V})):U&&(X=s.createElement(o.u,{content:t,position:E},X)),s.createElement(S,Object.assign({},w,{className:(0,c.css)(n.Z.label,u[m],"outline"===f&&n.Z.modifiers.outline,P&&n.Z.modifiers.overflow,b&&n.Z.modifiers.compact,g&&i.Z.modifiers.editable,A&&n.Z.modifiers.editableActive,a),onClick:P?C:void 0}),!A&&X,!A&&x&&M,A&&s.createElement("input",Object.assign({className:(0,c.css)(n.Z.labelContent),type:"text",id:"editable-input",ref:G,value:R,onChange:()=>{$(G.current.value)}},v)))};m.displayName="Label"},16833:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Label:()=>l._,LabelGroup:()=>f});var l=a(69174),s=a(65353),n=a(28416),i=a(10483),r=a(83063),o=a(38296),c=a(47173),d=a(35224),p=a(72781),u=a(80164),m=a(41724);class f extends n.Component{constructor(e){super(e),this.headingRef=n.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:t,tooltipPosition:a}=this.props,{isTooltipVisible:l}=this.state;return l?n.createElement(d.u,{position:a,content:t},n.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,o.css)(i.Z.labelGroupLabel)},n.createElement("span",{"aria-hidden":"true",id:e},t))):n.createElement("span",{ref:this.headingRef,className:(0,o.css)(i.Z.labelGroupLabel),"aria-hidden":"true",id:e},t)}render(){const e=this.props,{categoryName:t,children:a,className:d,isClosable:f,isCompact:b,closeBtnAriaLabel:g,"aria-label":v,onClick:h,numLabels:E,expandedText:y,collapsedText:x,defaultIsOpen:C,tooltipPosition:L,isVertical:N,isEditable:_,hasEditableTextArea:I,editableTextAreaProps:O,addLabelControl:k}=e,P=(0,s.__rest)(e,["categoryName","children","className","isClosable","isCompact","closeBtnAriaLabel","aria-label","onClick","numLabels","expandedText","collapsedText","defaultIsOpen","tooltipPosition","isVertical","isEditable","hasEditableTextArea","editableTextAreaProps","addLabelControl"]),{isOpen:Z}=this.state,w=n.Children.toArray(a),A=w.length,T=(0,u.tJ)(x,{remaining:A-E}),R=e=>{const a=Z?w:w.slice(0,E),s=n.createElement(n.Fragment,null,t&&this.renderLabel(e),n.createElement("ul",Object.assign({className:(0,o.css)(i.Z.labelGroupList)},t&&{"aria-labelledby":e},!t&&{"aria-label":v},{role:"list"},P),a.map(((e,t)=>n.createElement("li",{className:(0,o.css)(i.Z.labelGroupListItem),key:t},e))),A>E&&n.createElement("li",{className:(0,o.css)(i.Z.labelGroupListItem)},n.createElement(l._,{isOverflowLabel:!0,onClick:this.toggleCollapse,className:(0,o.css)(b&&r.Z.modifiers.compact)},Z?y:T)),k&&n.createElement("li",{className:(0,o.css)(i.Z.labelGroupListItem)},k),_&&I&&n.createElement("li",{className:(0,o.css)(i.Z.labelGroupListItem,i.Z.modifiers.textarea)},n.createElement("textarea",Object.assign({className:(0,o.css)(i.Z.labelGroupTextarea),rows:1,tabIndex:0},O))))),u=n.createElement("div",{className:(0,o.css)(i.Z.labelGroupClose)},n.createElement(c.zx,{variant:"plain","aria-label":g,onClick:h,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`},n.createElement(p.default,{"aria-hidden":"true"})));return n.createElement("div",{className:(0,o.css)(i.Z.labelGroup,d,t&&i.Z.modifiers.category,N&&i.Z.modifiers.vertical,_&&i.Z.modifiers.editable)},n.createElement("div",{className:(0,o.css)(i.Z.labelGroupMain)},s),f&&u)};return 0===A&&void 0===k?null:n.createElement(m.w,null,(e=>R(this.props.id||e)))}}f.displayName="LabelGroup",f.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numLabels:3,isClosable:!1,isCompact:!1,onClick:e=>{},closeBtnAriaLabel:"Close label group",tooltipPosition:"top","aria-label":"Label group category",isVertical:!1,isEditable:!1,hasEditableTextArea:!1}},2372:(e,t,a)=>{"use strict";a.d(t,{$:()=>o,S:()=>l});var l,s=a(65353),n=a(28416),i=a(62698),r=a(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(l||(l={}));const o=e=>{var{className:t="",size:a="xl","aria-valuetext":l="Loading...",diameter:o,isInline:c=!1,"aria-label":d,"aria-labelledBy":p}=e,u=(0,s.__rest)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return n.createElement("svg",Object.assign({className:(0,r.css)(i.default.spinner,c?i.default.modifiers.inline:i.default.modifiers[a],t),role:"progressbar","aria-valuetext":l,viewBox:"0 0 100 100"},o&&{style:{"--pf-v5-c-spinner--diameter":o}},d&&{"aria-label":d},p&&{"aria-labelledBy":p},!d&&!p&&{"aria-label":"Contents"},u),n.createElement("circle",{className:i.default.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};o.displayName="Spinner"},41724:(e,t,a)=>{"use strict";a.d(t,{w:()=>n});var l=a(28416);let s=0;class n extends l.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${s++}`}render(){return this.props.children(this.id)}}n.displayName="GenerateId",n.defaultProps={prefix:"pf-random-id-"}},62472:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getDefaultOUIAId:()=>d,getOUIAProps:()=>r,useOUIAId:()=>c,useOUIAProps:()=>o});var l=a(28416);let s=0;const n="OUIA-Generated-",i={};function r(e,t,a=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":t}}const o=(e,t,a=!0,l)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":a,"data-ouia-component-id":c(e,t,l)}),c=(e,t,a)=>{const s=(0,l.useMemo)((()=>d(e,a)),[e,a]);return null!=t?t:s};function d(e,t){try{let a;return a="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,i[a]||(i[a]=0),`${n}${e}-${t?`${t}-`:""}${++i[a]}`}catch(a){return`${n}${e}-${t?`${t}-`:""}${++s}`}}},40400:(e,t,a)=>{"use strict";a.d(t,{I:()=>i});var l=a(65353),s=a(28416);let n=0;function i({name:e,xOffset:t=0,yOffset:a=0,width:i,height:r,svgPath:o}){var c;return c=class extends s.Component{constructor(){super(...arguments),this.id="icon-title-"+n++}render(){const e=this.props,{title:n,className:c}=e,d=(0,l.__rest)(e,["title","className"]),p=c?`pf-v5-svg ${c}`:"pf-v5-svg",u=Boolean(n),m=[t,a,i,r].join(" ");return s.createElement("svg",Object.assign({className:p,viewBox:m,fill:"currentColor","aria-labelledby":u?this.id:null,"aria-hidden":!u||null,role:"img",width:"1em",height:"1em"},d),u&&s.createElement("title",{id:this.id},n),s.createElement("path",{d:o}))}},c.displayName=e,c}},72781:(e,t,a)=>{"use strict";a.r(t),a.d(t,{TimesCircleIcon:()=>n,TimesCircleIconConfig:()=>s,default:()=>i});var l=a(40400);const s={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},n=(0,l.I)(s),i=n},24307:(e,t,a)=>{"use strict";a.r(t),a.d(t,{TimesIcon:()=>n,TimesIconConfig:()=>s,default:()=>i});var l=a(40400);const s={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},n=(0,l.I)(s),i=n},12971:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l}),a(11452);const l={badge:"pf-v5-c-badge",modifiers:{read:"pf-m-read",unread:"pf-m-unread"},themeDark:"pf-v5-theme-dark"}},80480:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l}),a(34946);const l={badge:"pf-v5-c-badge",button:"pf-v5-c-button",buttonCount:"pf-v5-c-button__count",buttonIcon:"pf-v5-c-button__icon",buttonProgress:"pf-v5-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",noPadding:"pf-m-no-padding",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end"},spinner:"pf-v5-c-spinner",themeDark:"pf-v5-theme-dark"}},10483:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l}),a(24620);const l={button:"pf-v5-c-button",labelGroup:"pf-v5-c-label-group",labelGroupClose:"pf-v5-c-label-group__close",labelGroupLabel:"pf-v5-c-label-group__label",labelGroupList:"pf-v5-c-label-group__list",labelGroupListItem:"pf-v5-c-label-group__list-item",labelGroupMain:"pf-v5-c-label-group__main",labelGroupTextarea:"pf-v5-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},83063:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l}),a(82014);const l={button:"pf-v5-c-button",label:"pf-v5-c-label",labelActions:"pf-v5-c-label__actions",labelContent:"pf-v5-c-label__content",labelIcon:"pf-v5-c-label__icon",labelText:"pf-v5-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",gold:"pf-m-gold",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"},themeDark:"pf-v5-theme-dark"}},62698:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l}),a(66822);const l={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-v5-c-spinner",spinnerPath:"pf-v5-c-spinner__path"}},45467:()=>{},11452:()=>{},34946:()=>{},24620:()=>{},82014:()=>{},66822:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/101.88d81f808493f3a31ce0d9fb89fa1dae.js.map
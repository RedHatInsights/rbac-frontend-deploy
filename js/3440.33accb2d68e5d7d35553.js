(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[3440,5467,5623,5098,921],{42189:(e,t,i)=>{"use strict";i.d(t,{A:()=>g});var s=i(65353),o=i(66029),a=i(38296),l=i(47173),r=i(35224),n=i(24307);i(94498);const c="pf-v5-c-chip",p="pf-v5-c-chip__content",d="pf-v5-c-chip__text",m="pf-m-overflow";var h=i(41724),f=i(62472);const u="--pf-v5-c-chip__text--MaxWidth";class g extends o.Component{constructor(e){super(e),this.span=o.createRef(),this.setChipStyle=()=>({[u]:this.props.textMaxWidth}),this.renderOverflowChip=()=>{const e=this.props,{badge:t,children:i,className:l,onClick:r,ouiaId:n,textMaxWidth:h,style:u,component:g,tooltipPosition:b,isOverflowChip:v,closeBtnAriaLabel:C,isReadOnly:y}=e,x=(0,s.__rest)(e,["badge","children","className","onClick","ouiaId","textMaxWidth","style","component","tooltipPosition","isOverflowChip","closeBtnAriaLabel","isReadOnly"]),E=g;return o.createElement(E,Object.assign({onClick:r},h&&Object.assign({style:this.setChipStyle()},u),{className:(0,a.css)(c,m,l)},"button"===g?{type:"button"}:{},(0,f.getOUIAProps)("OverflowChip",void 0!==n?n:this.state.ouiaStateId),x),o.createElement("span",{className:(0,a.css)(p)},o.createElement("span",{className:(0,a.css)(d)},i),t&&t))},this.renderChip=e=>{const{children:t,tooltipPosition:i}=this.props;return this.state.isTooltipVisible?o.createElement(r.u,{position:i,content:t},this.renderInnerChip(e)):this.renderInnerChip(e)},this.state={isTooltipVisible:!1,ouiaStateId:(0,f.getDefaultOUIAId)(g.displayName)}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.span.current&&this.span.current.offsetWidth<this.span.current.scrollWidth)})}componentDidUpdate(e,t){const i=Boolean(this.span.current&&this.span.current.offsetWidth<this.span.current.scrollWidth);t.isTooltipVisible!==i&&this.setState({isTooltipVisible:i})}renderInnerChip(e){const t=this.props,{badge:i,children:r,className:m,onClick:h,closeBtnAriaLabel:u,isReadOnly:b,isOverflowChip:v,tooltipPosition:C,id:y,component:x,ouiaId:E,textMaxWidth:N}=t,O=(0,s.__rest)(t,["badge","children","className","onClick","closeBtnAriaLabel","isReadOnly","isOverflowChip","tooltipPosition","id","component","ouiaId","textMaxWidth"]),_=x;return o.createElement(_,Object.assign({},N&&{style:this.setChipStyle()},{className:(0,a.css)(c,m)},this.state.isTooltipVisible&&{tabIndex:0},(0,f.getOUIAProps)(g.displayName,void 0!==E?E:this.state.ouiaStateId),O),o.createElement("span",{className:(0,a.css)(p)},o.createElement("span",{ref:this.span,className:(0,a.css)(d),id:e},r),i&&i),!b&&o.createElement("span",{className:(0,a.css)("pf-v5-c-chip__actions")},o.createElement(l.zx,{onClick:h,variant:"plain","aria-label":u,id:`remove_${e}`,"aria-labelledby":`remove_${e} ${e}`,ouiaId:E||u},o.createElement(n.default,{"aria-hidden":"true"}))))}render(){const{isOverflowChip:e}=this.props;return o.createElement(h.w,null,(t=>e?this.renderOverflowChip():this.renderChip(this.props.id||t)))}}g.displayName="Chip",g.defaultProps={closeBtnAriaLabel:"close",className:"",isOverflowChip:!1,isReadOnly:!1,tooltipPosition:"top",onClick:e=>{},component:"div"}},73597:(e,t,i)=>{"use strict";i.d(t,{Z:()=>g});var s=i(65353),o=i(66029);i(1580);const a="pf-v5-c-chip-group__label",l="pf-v5-c-chip-group__list-item",r="pf-m-category";var n=i(38296),c=i(47173),p=i(42189),d=i(35224),m=i(72781),h=i(80164),f=i(41724),u=i(62472);class g extends o.Component{constructor(e){super(e),this.headingRef=o.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:t,tooltipPosition:i}=this.props,{isTooltipVisible:s}=this.state;return s?o.createElement(d.u,{position:i,content:t},o.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,n.css)(a)},o.createElement("span",{id:e},t))):o.createElement("span",{ref:this.headingRef,className:(0,n.css)(a),id:e},t)}render(){const e=this.props,{categoryName:t,children:i,className:a,isClosable:d,closeBtnAriaLabel:b,"aria-label":v,onClick:C,onOverflowChipClick:y,numChips:x,expandedText:E,collapsedText:N,ouiaId:O,defaultIsOpen:_,tooltipPosition:I}=e,T=(0,s.__rest)(e,["categoryName","children","className","isClosable","closeBtnAriaLabel","aria-label","onClick","onOverflowChipClick","numChips","expandedText","collapsedText","ouiaId","defaultIsOpen","tooltipPosition"]),{isOpen:L}=this.state,w=o.Children.count(i),A=(0,h.tJ)(N,{remaining:o.Children.count(i)-x}),R=e=>{const s=L?o.Children.toArray(i):o.Children.toArray(i).slice(0,x);return o.createElement("div",Object.assign({className:(0,n.css)("pf-v5-c-chip-group",a,t&&r),role:"group"},t&&{"aria-labelledby":e},!t&&{"aria-label":v},(0,u.getOUIAProps)(g.displayName,O)),o.createElement("div",{className:(0,n.css)("pf-v5-c-chip-group__main")},t&&this.renderLabel(e),o.createElement("ul",Object.assign({className:(0,n.css)("pf-v5-c-chip-group__list")},t&&{"aria-labelledby":e},!t&&{"aria-label":v},{role:"list"},T),s.map(((e,t)=>o.createElement("li",{className:(0,n.css)(l),key:t},e))),w>x&&o.createElement("li",{className:(0,n.css)(l)},o.createElement(p.A,{isOverflowChip:!0,onClick:e=>{this.toggleCollapse(),y(e)},component:"button"},L?E:A)))),d&&o.createElement("div",{className:(0,n.css)("pf-v5-c-chip-group__close")},o.createElement(c.zx,{variant:"plain","aria-label":b,onClick:C,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`,ouiaId:O||b},o.createElement(m.default,{"aria-hidden":"true"}))))};return 0===w?null:o.createElement(f.w,null,(e=>R(this.props.id||e)))}}g.displayName="ChipGroup",g.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numChips:3,isClosable:!1,onClick:e=>{},onOverflowChipClick:e=>{},closeBtnAriaLabel:"Close chip group",tooltipPosition:"top","aria-label":"Chip group category"}},15623:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Chip:()=>s.A,ChipGroup:()=>o.Z});var s=i(42189),o=i(73597)},35224:(e,t,i)=>{"use strict";i.d(t,{u:()=>f,D:()=>d});var s=i(65353),o=i(66029),a=i(86478),l=i(38296);const r=e=>{var{className:t,children:i,isLeftAligned:r}=e,n=(0,s.__rest)(e,["className","children","isLeftAligned"]);return o.createElement("div",Object.assign({className:(0,l.css)(a.default.tooltipContent,r&&a.default.modifiers.textAlignLeft,t)},n),i)};r.displayName="TooltipContent";const n=e=>{var{className:t}=e,i=(0,s.__rest)(e,["className"]);return o.createElement("div",Object.assign({className:(0,l.css)(a.default.tooltipArrow,t)},i))};n.displayName="TooltipArrow";var c=i(1774);const p={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var d,m=i(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(d||(d={}));let h=1;const f=e=>{var{content:t,position:i="top",trigger:d="mouseenter focus",isVisible:f=!1,isContentLeftAligned:u=!1,enableFlip:g=!0,className:b="",entryDelay:v=300,exitDelay:C=300,appendTo:y=(()=>document.body),zIndex:x=9999,minWidth:E,maxWidth:N=p.value,distance:O=15,aria:_="describedby",flipBehavior:I=["top","right","bottom","left","top","right","bottom"],id:T="pf-tooltip-"+h++,children:L,animationDuration:w=300,triggerRef:A,"aria-live":R=(A?"polite":"off"),onTooltipHidden:k=(()=>{})}=e,B=(0,s.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const P=d.includes("mouseenter"),W=d.includes("focus"),D=d.includes("click"),M="manual"===d,[S,V]=o.useState(!1),j=o.createRef();o.useEffect((()=>{f?$():U()}),[f]);const $=()=>{V(!0)},U=()=>{V(!1)},z={top:a.default.modifiers.top,bottom:a.default.modifiers.bottom,left:a.default.modifiers.left,right:a.default.modifiers.right,"top-start":a.default.modifiers.topLeft,"top-end":a.default.modifiers.topRight,"bottom-start":a.default.modifiers.bottomLeft,"bottom-end":a.default.modifiers.bottomRight,"left-start":a.default.modifiers.leftTop,"left-end":a.default.modifiers.leftBottom,"right-start":a.default.modifiers.rightTop,"right-end":a.default.modifiers.rightBottom},F=N!==p.value,G=o.createElement("div",Object.assign({"aria-live":R,className:(0,l.css)(a.default.tooltip,b),role:"tooltip",id:T,style:{maxWidth:F?N:null},ref:j},B),o.createElement(n,null),o.createElement(r,{isLeftAligned:u},t));return o.createElement(m.Popper,{trigger:"none"!==_&&S?"describedby"===_&&L&&L.props&&!L.props["aria-describedby"]?o.cloneElement(L,{"aria-describedby":T}):"labelledby"===_&&L.props&&!L.props["aria-labelledby"]?o.cloneElement(L,{"aria-labelledby":T}):L:L,triggerRef:A,popper:G,popperRef:j,minWidth:void 0!==E?E:"revert",appendTo:y,isVisible:S,positionModifiers:z,distance:O,placement:i,onMouseEnter:P&&$,onMouseLeave:P&&U,onPopperMouseEnter:P&&$,onPopperMouseLeave:P&&U,onFocus:W&&$,onBlur:W&&U,onDocumentClick:D&&((e,t)=>{S?U():e.target===t&&$()}),onDocumentKeyDown:M?null:e=>{M||e.key===c.yu.Escape&&S&&U()},onTriggerEnter:M?null:e=>{e.key===c.yu.Enter&&(S?U():$())},enableFlip:g,zIndex:x,flipBehavior:I,animationDuration:w,entryDelay:v,exitDelay:C,onHidden:k})};f.displayName="Tooltip"},41724:(e,t,i)=>{"use strict";i.d(t,{w:()=>l});var s=i(66029),o=i(80164);let a=0;class l extends s.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,o.Ki)():a++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}l.displayName="GenerateId",l.defaultProps={prefix:"pf-random-id-",isRandom:!1}},40400:(e,t,i)=>{"use strict";i.d(t,{I:()=>l});var s=i(65353),o=i(66029);let a=0;function l({name:e,xOffset:t=0,yOffset:i=0,width:l,height:r,svgPath:n}){var c;return c=class extends o.Component{constructor(){super(...arguments),this.id="icon-title-"+a++}render(){const e=this.props,{title:a,className:c}=e,p=(0,s.__rest)(e,["title","className"]),d=c?`pf-v5-svg ${c}`:"pf-v5-svg",m=Boolean(a),h=[t,i,l,r].join(" ");return o.createElement("svg",Object.assign({className:d,viewBox:h,fill:"currentColor","aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img",width:"1em",height:"1em"},p),m&&o.createElement("title",{id:this.id},a),o.createElement("path",{d:n}))}},c.displayName=e,c}},72781:(e,t,i)=>{"use strict";i.r(t),i.d(t,{TimesCircleIcon:()=>a,TimesCircleIconConfig:()=>o,default:()=>l});var s=i(40400);const o={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},a=(0,s.I)(o),l=a},24307:(e,t,i)=>{"use strict";i.r(t),i.d(t,{TimesIcon:()=>a,TimesIconConfig:()=>o,default:()=>l});var s=i(40400);const o={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},a=(0,s.I)(o),l=a},86478:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s}),i(49854);const s={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},45467:()=>{},11452:()=>{},34946:()=>{},1580:()=>{},94498:()=>{},66822:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3440.81d1689100f6a69a49b121ae3f8b1c4e.js.map
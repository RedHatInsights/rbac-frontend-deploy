"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[3071,5692],{71710:(e,t,a)=>{a.d(t,{A:()=>C});var s=a(65353),i=a(28416),n=a(38296),o=a(47173),l=a(35224),r=a(24307);a(94498);const c="pf-v5-c-chip",p="pf-v5-c-chip__content",d="pf-v5-c-chip__text",h="pf-m-overflow";var m=a(41724),u=a(62472);class C extends i.Component{constructor(e){super(e),this.span=i.createRef(),this.setChipStyle=()=>({"--pf-v5-c-chip__text--MaxWidth":this.props.textMaxWidth}),this.renderOverflowChip=()=>{const e=this.props,{badge:t,children:a,className:o,onClick:l,ouiaId:r,textMaxWidth:m,style:C,component:b,tooltipPosition:g,isOverflowChip:f,closeBtnAriaLabel:x,isReadOnly:E}=e,v=(0,s.__rest)(e,["badge","children","className","onClick","ouiaId","textMaxWidth","style","component","tooltipPosition","isOverflowChip","closeBtnAriaLabel","isReadOnly"]),y=b;return i.createElement(y,Object.assign({onClick:l},m&&Object.assign({style:this.setChipStyle()},C),{className:(0,n.css)(c,h,o)},"button"===b?{type:"button"}:{},(0,u.getOUIAProps)("OverflowChip",void 0!==r?r:this.state.ouiaStateId),v),i.createElement("span",{className:(0,n.css)(p)},i.createElement("span",{className:(0,n.css)(d)},a),t&&t))},this.renderChip=e=>{const{children:t,tooltipPosition:a}=this.props;return this.state.isTooltipVisible?i.createElement(l.u,{position:a,content:t},this.renderInnerChip(e)):this.renderInnerChip(e)},this.state={isTooltipVisible:!1,ouiaStateId:(0,u.getDefaultOUIAId)(C.displayName)}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.span.current&&this.span.current.offsetWidth<this.span.current.scrollWidth)})}renderInnerChip(e){const t=this.props,{badge:a,children:l,className:h,onClick:m,closeBtnAriaLabel:b,isReadOnly:g,isOverflowChip:f,tooltipPosition:x,component:E,ouiaId:v}=t,y=(0,s.__rest)(t,["badge","children","className","onClick","closeBtnAriaLabel","isReadOnly","isOverflowChip","tooltipPosition","component","ouiaId"]),T=E;return i.createElement(T,Object.assign({},this.props.textMaxWidth&&{style:this.setChipStyle()},{className:(0,n.css)(c,h)},this.state.isTooltipVisible&&{tabIndex:0},(0,u.getOUIAProps)(C.displayName,void 0!==v?v:this.state.ouiaStateId),y),i.createElement("span",{className:(0,n.css)(p)},i.createElement("span",{ref:this.span,className:(0,n.css)(d),id:e},l),a&&a),!g&&i.createElement("span",{className:(0,n.css)("pf-v5-c-chip__actions")},i.createElement(o.zx,{onClick:m,variant:"plain","aria-label":b,id:`remove_${e}`,"aria-labelledby":`remove_${e} ${e}`,ouiaId:v||b},i.createElement(r.default,{"aria-hidden":"true"}))))}render(){const{isOverflowChip:e}=this.props;return i.createElement(m.w,null,(t=>e?this.renderOverflowChip():this.renderChip(this.props.id||t)))}}C.displayName="Chip",C.defaultProps={closeBtnAriaLabel:"close",className:"",isOverflowChip:!1,isReadOnly:!1,tooltipPosition:"top",onClick:e=>{},component:"div"}},73597:(e,t,a)=>{a.d(t,{Z:()=>b});var s=a(65353),i=a(28416);a(1580);const n="pf-v5-c-chip-group__label",o="pf-v5-c-chip-group__list-item",l="pf-m-category";var r=a(38296),c=a(47173),p=a(71710),d=a(35224),h=a(72781),m=a(80164),u=a(41724),C=a(62472);class b extends i.Component{constructor(e){super(e),this.headingRef=i.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:t,tooltipPosition:a}=this.props,{isTooltipVisible:s}=this.state;return s?i.createElement(d.u,{position:a,content:t},i.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,r.css)(n)},i.createElement("span",{id:e},t))):i.createElement("span",{ref:this.headingRef,className:(0,r.css)(n),id:e},t)}render(){const e=this.props,{categoryName:t,children:a,className:n,isClosable:d,closeBtnAriaLabel:g,"aria-label":f,onClick:x,onOverflowChipClick:E,numChips:v,expandedText:y,collapsedText:T,ouiaId:N,defaultIsOpen:O,tooltipPosition:I}=e,k=(0,s.__rest)(e,["categoryName","children","className","isClosable","closeBtnAriaLabel","aria-label","onClick","onOverflowChipClick","numChips","expandedText","collapsedText","ouiaId","defaultIsOpen","tooltipPosition"]),{isOpen:w}=this.state,_=i.Children.count(a),R=(0,m.tJ)(T,{remaining:i.Children.count(a)-v}),P=e=>{const s=w?i.Children.toArray(a):i.Children.toArray(a).slice(0,v);return i.createElement("div",Object.assign({className:(0,r.css)("pf-v5-c-chip-group",n,t&&l),role:"group"},t&&{"aria-labelledby":e},!t&&{"aria-label":f},(0,C.getOUIAProps)(b.displayName,N)),i.createElement("div",{className:(0,r.css)("pf-v5-c-chip-group__main")},t&&this.renderLabel(e),i.createElement("ul",Object.assign({className:(0,r.css)("pf-v5-c-chip-group__list")},t&&{"aria-labelledby":e},!t&&{"aria-label":f},{role:"list"},k),s.map(((e,t)=>i.createElement("li",{className:(0,r.css)(o),key:t},e))),_>v&&i.createElement("li",{className:(0,r.css)(o)},i.createElement(p.A,{isOverflowChip:!0,onClick:e=>{this.toggleCollapse(),E(e)},component:"button"},w?y:R)))),d&&i.createElement("div",{className:(0,r.css)("pf-v5-c-chip-group__close")},i.createElement(c.zx,{variant:"plain","aria-label":g,onClick:x,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`,ouiaId:N||g},i.createElement(h.default,{"aria-hidden":"true"}))))};return 0===_?null:i.createElement(u.w,null,(e=>P(this.props.id||e)))}}b.displayName="ChipGroup",b.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numChips:3,isClosable:!1,onClick:e=>{},onOverflowChipClick:e=>{},closeBtnAriaLabel:"Close chip group",tooltipPosition:"top","aria-label":"Chip group category"}},33071:(e,t,a)=>{a.r(t),a.d(t,{Toolbar:()=>s.o,ToolbarContent:()=>i.c,ToolbarContentContext:()=>m.sK,ToolbarContext:()=>m.hP,ToolbarExpandIconWrapper:()=>c,ToolbarExpandableContent:()=>u,ToolbarFilter:()=>f,ToolbarGroup:()=>p.k,ToolbarGroupVariant:()=>p.j,ToolbarItem:()=>d.E,ToolbarItemVariant:()=>d.A,ToolbarToggleGroup:()=>y,globalBreakpoints:()=>m.Oc});var s=a(84812),i=a(39841),n=a(65353),o=a(28416),l=a(19210),r=a(38296);const c=e=>{var{children:t,className:a}=e,s=(0,n.__rest)(e,["children","className"]);return o.createElement("span",Object.assign({},s,{className:(0,r.css)(l.Z.toolbarExpandAllIcon,a)}),t)};c.displayName="ToolbarExpandIconWrapper";var p=a(33109),d=a(1595),h=a(47173),m=a(80882);class u extends o.Component{render(){const e=this.props,{children:t,className:a,expandableContentRef:s,chipContainerRef:i,isExpanded:c,clearAllFilters:m,clearFiltersButtonText:u,showClearFiltersButton:C}=e,b=(0,n.__rest)(e,["children","className","expandableContentRef","chipContainerRef","isExpanded","clearAllFilters","clearFiltersButtonText","showClearFiltersButton"]),{numberOfFilters:g,customChipGroupContent:f}=this.context;return o.createElement("div",Object.assign({className:(0,r.css)(l.Z.toolbarExpandableContent,c&&l.Z.modifiers.expanded,a),ref:s},b),o.createElement(p.k,null,t),g>0&&o.createElement(p.k,{className:l.Z.modifiers.chipContainer},o.createElement(p.k,{ref:i}),C&&!f&&o.createElement(d.E,null,o.createElement(h.zx,{variant:"link",onClick:()=>{m()},isInline:!0},u)),f&&f))}}u.displayName="ToolbarExpandableContent",u.contextType=m.hP,u.defaultProps={isExpanded:!1,clearFiltersButtonText:"Clear all filters"};var C=a(31051),b=a(73597),g=a(71710);class f extends o.Component{constructor(e){super(e),this.state={isMounted:!1}}componentDidMount(){const{categoryName:e,chips:t}=this.props;this.context.updateNumberFilters("string"!=typeof e&&e.hasOwnProperty("key")?e.key:e.toString(),t.length),this.setState({isMounted:!0})}componentDidUpdate(){const{categoryName:e,chips:t}=this.props;this.context.updateNumberFilters("string"!=typeof e&&e.hasOwnProperty("key")?e.key:e.toString(),t.length)}render(){const e=this.props,{children:t,chips:a,deleteChipGroup:s,deleteChip:i,chipGroupExpandedText:l,chipGroupCollapsedText:r,categoryName:c,showToolbarItem:p,isExpanded:h,expandableChipContainerRef:u}=e,f=(0,n.__rest)(e,["children","chips","deleteChipGroup","deleteChip","chipGroupExpandedText","chipGroupCollapsedText","categoryName","showToolbarItem","isExpanded","expandableChipContainerRef"]),{isExpanded:x,chipGroupContentRef:E}=this.context,v=void 0!==h?h:x,y="string"!=typeof c&&c.hasOwnProperty("key")?c.key:c.toString(),T=a.length?o.createElement(d.E,{variant:"chip-group"},o.createElement(b.Z,{key:y,categoryName:"string"==typeof c?c:c.name,isClosable:void 0!==s,onClick:()=>s(c),collapsedText:r,expandedText:l},a.map((e=>"string"==typeof e?o.createElement(g.A,{key:e,onClick:()=>i(y,e)},e):o.createElement(g.A,{key:e.key,onClick:()=>i(y,e)},e.node))))):null;return!v&&this.state.isMounted?o.createElement(o.Fragment,null,p&&o.createElement(d.E,Object.assign({},f),t),C.createPortal(T,E.current.firstElementChild)):o.createElement(m.sK.Consumer,null,(({chipContainerRef:e})=>o.createElement(o.Fragment,null,p&&o.createElement(d.E,Object.assign({},f),t),e.current&&C.createPortal(T,e.current),u&&u.current&&C.createPortal(T,u.current))))}}f.displayName="ToolbarFilter",f.contextType=m.hP,f.defaultProps={chips:[],showToolbarItem:!0};var x=a(76709),E=a(80164),v=a(31495);class y extends o.Component{constructor(){super(...arguments),this.toggleRef=o.createRef(),this.expandableContentRef=o.createRef(),this.isContentPopup=()=>(E.Nq?window.innerWidth:1200)<parseInt(x.Z.value)}render(){const e=this.props,{toggleIcon:t,variant:a,visibility:s,breakpoint:i,alignment:c,spacer:p,spaceItems:d,className:b,children:g,isExpanded:f,onToggle:x,chipContainerRef:y,clearAllFilters:T,showClearFiltersButton:N,clearFiltersButtonText:O}=e,I=(0,n.__rest)(e,["toggleIcon","variant","visibility","breakpoint","alignment","spacer","spaceItems","className","children","isExpanded","onToggle","chipContainerRef","clearAllFilters","showClearFiltersButton","clearFiltersButtonText"]);return i||t||console.error("ToolbarToggleGroup will not be visible without a breakpoint or toggleIcon."),o.createElement(v.z1.Consumer,null,(({width:e,getBreakpoint:n})=>o.createElement(m.hP.Consumer,null,(({toggleIsExpanded:v})=>{const k=void 0!==x?x:v;return o.createElement(m.sK.Consumer,null,(({expandableContentRef:m,expandableContentId:x,chipContainerRef:v,isExpanded:w,clearAllFilters:_,clearFiltersButtonText:R,showClearFiltersButton:P})=>{const F=void 0!==f?f:w,A=void 0!==y?y:v,B={};B[i]="show";const Z=o.createElement(u,{id:x,expandableContentRef:this.expandableContentRef,isExpanded:F,clearAllFilters:T||_,showClearFiltersButton:N||P,clearFiltersButtonText:O||R,chipContainerRef:A},g),G=o.createElement("div",{className:(0,r.css)(l.Z.toolbarToggle)},o.createElement(h.zx,Object.assign({variant:"plain",onClick:k,"aria-label":"Show Filters"},F&&{"aria-expanded":!0},{"aria-haspopup":F&&this.isContentPopup(),"aria-controls":x,ref:this.toggleRef}),t));return o.createElement("div",Object.assign({className:(0,r.css)(l.Z.toolbarGroup,l.Z.modifiers.toggleGroup,a&&l.Z.modifiers[(0,E.fZ)(a)],(0,E.wt)(B,l.Z,"",n(e)),(0,E.wt)(s,l.Z,"",n(e)),(0,E.wt)(c,l.Z,"",n(e)),(0,E.wt)(p,l.Z,"",n(e)),(0,E.wt)(d,l.Z,"",n(e)),b)},I),G,F&&C.createPortal(Z,m.current),!F&&g)}))}))))}}y.displayName="ToolbarToggleGroup"},72781:(e,t,a)=>{a.r(t),a.d(t,{TimesCircleIcon:()=>n,TimesCircleIconConfig:()=>i,default:()=>o});var s=a(40400);const i={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},n=(0,s.I)(i),o=n}}]);
//# sourceMappingURL=../sourcemaps/3071.c9e7bd4c9ba05f31de9204a1d8807820.js.map
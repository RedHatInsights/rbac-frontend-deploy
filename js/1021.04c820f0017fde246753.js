"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[1021],{28883:(e,t,n)=>{n.d(t,{O:()=>f});var l=n(65353),a=n(66029),s=n(59933),i=n(62472);const o=e=>{var{children:t,tabContentRef:n,ouiaId:s,parentInnerRef:r,ouiaSafe:c}=e,d=(0,l.__rest)(e,["children","tabContentRef","ouiaId","parentInnerRef","ouiaSafe"]);const m=d.href?"a":"button";return a.createElement(m,Object.assign({},!d.href&&{type:"button"},{ref:r},(0,i.getOUIAProps)(o.displayName,s,c),d),t)};o.displayName="TabButton";var r=n(10962),c=n(38296),d=n(35224),m=n(24307),p=n(30906);const b=e=>{var{title:t,eventKey:n,tabContentRef:i,id:b,tabContentId:f,className:u="",ouiaId:h,isDisabled:v,isAriaDisabled:g,inoperableEvents:x=["onClick","onKeyPress"],href:S,innerRef:E,tooltip:y,closeButtonAriaLabel:O,isCloseDisabled:L=!1,actions:T}=e,I=(0,l.__rest)(e,["title","eventKey","tabContentRef","id","tabContentId","className","ouiaId","isDisabled","isAriaDisabled","inoperableEvents","href","innerRef","tooltip","closeButtonAriaLabel","isCloseDisabled","actions"]);const w=x.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{}),{mountOnEnter:B,localActiveKey:_,unmountOnExit:C,uniqueId:A,handleTabClick:N,handleTabClose:Z}=a.useContext(r.RL);let k=f?`${f}`:`pf-tab-section-${n}-${b||A}`;(B||C)&&n!==_&&(k=void 0);const K=Boolean(!S),R=a.createElement(o,Object.assign({parentInnerRef:E,className:(0,c.css)(s.Z.tabsLink,v&&S&&s.Z.modifiers.disabled,g&&s.Z.modifiers.ariaDisabled),disabled:K?v:null,"aria-disabled":v||g,tabIndex:v?K?null:-1:g?null:void 0,onClick:e=>N(e,n,i)},g?w:null,{id:`pf-tab-${n}-${b||A}`,"aria-controls":k,tabContentRef:i,ouiaId:h,href:S,role:"tab","aria-selected":n===_},I),t);return a.createElement("li",{className:(0,c.css)(s.Z.tabsItem,n===_&&s.Z.modifiers.current,(Z||T)&&s.Z.modifiers.action,(v||g)&&s.Z.modifiers.disabled,u),role:"presentation"},y?a.createElement(d.u,Object.assign({},y.props),R):R,T&&T,void 0!==Z&&a.createElement(p.b,{"aria-label":O||"Close tab",onClick:e=>Z(e,n,i),isDisabled:L},a.createElement(m.ZP,null)))},f=a.forwardRef(((e,t)=>a.createElement(b,Object.assign({innerRef:t},e))));f.displayName="Tab"},30906:(e,t,n)=>{n.d(t,{b:()=>d});var l=n(65353),a=n(66029),s=n(38296),i=n(59933),o=n(47173),r=n(62472);const c=e=>{var{children:t,className:n,onClick:c,isDisabled:m,"aria-label":p="Tab action",innerRef:b,ouiaId:f,ouiaSafe:u}=e,h=(0,l.__rest)(e,["children","className","onClick","isDisabled","aria-label","innerRef","ouiaId","ouiaSafe"]);return a.createElement("span",{className:(0,s.css)(i.Z.tabsItemAction,n)},a.createElement(o.zx,Object.assign({ref:b,type:"button",variant:"plain","aria-label":p,onClick:c,isDisabled:m},(0,r.getOUIAProps)(d.displayName,f,u),h),a.createElement("span",{className:(0,s.css)(i.Z.tabsItemActionIcon)},t)))},d=a.forwardRef(((e,t)=>a.createElement(c,Object.assign({},e,{innerRef:t}))));d.displayName="TabAction"},79770:(e,t,n)=>{n.d(t,{I:()=>m});var l=n(65353),a=n(66029),s=n(33078),i=n(38296),o=n(62472),r=n(10962);const c={default:"",light300:s.Z.modifiers.light_300},d=e=>{var{id:t,activeKey:n,"aria-label":d,child:m,children:p,className:b,eventKey:f,innerRef:u,ouiaId:h,ouiaSafe:v}=e,g=(0,l.__rest)(e,["id","activeKey","aria-label","child","children","className","eventKey","innerRef","ouiaId","ouiaSafe"]);if(p||m){let e;return e=d?null:p?`${t}`:`pf-tab-${m.props.eventKey}-${t}`,a.createElement(r.y1,null,(({variant:l})=>a.createElement("section",Object.assign({ref:u,hidden:p?null:m.props.eventKey!==n,className:p?(0,i.css)(s.Z.tabContent,b,c[l]):(0,i.css)(s.Z.tabContent,m.props.className,c[l]),id:p?t:`pf-tab-section-${m.props.eventKey}-${t}`,"aria-label":d,"aria-labelledby":e,role:"tabpanel",tabIndex:0},(0,o.getOUIAProps)("TabContent",h,v),g),p||m.props.children)))}return null},m=a.forwardRef(((e,t)=>a.createElement(d,Object.assign({},e,{innerRef:t}))))},29873:(e,t,n)=>{n.d(t,{T:()=>o});var l=n(65353),a=n(66029),s=n(38296),i=n(59933);const o=e=>{var{children:t,className:n=""}=e,o=(0,l.__rest)(e,["children","className"]);return a.createElement("span",Object.assign({className:(0,s.css)(i.Z.tabsItemText,n)},o),t)};o.displayName="TabTitleText"},38284:(e,t,n)=>{n.d(t,{m:()=>w,n:()=>y});var l=n(65353),a=n(66029),s=n.n(a),i=n(59933),o=n(80480),r=n(38296),c=n(71973),d=n(93174);const m=(0,n(40400).I)({name:"PlusIcon",height:512,width:448,svgPath:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0});var p=n(80164),b=n(79770),f=n(10962),u=n(69121),h=n(49732),v=n(47680),g=n(69579),x=n(46820),S=n(29873);const E=e=>{var{className:t,overflowingTabs:n=[],showTabCount:a,defaultTitleText:o="More",toggleAriaLabel:c,zIndex:m=9999}=e,p=(0,l.__rest)(e,["className","overflowingTabs","showTabCount","defaultTitleText","toggleAriaLabel","zIndex"]);const b=s().useRef(),E=s().useRef(),y=s().useRef(),[O,L]=s().useState(!1),{localActiveKey:T,handleTabClick:I}=s().useContext(f.RL),w=()=>{L(!1),E.current.focus()},B=e=>{var t;const n=null===(t=null==b?void 0:b.current)||void 0===t?void 0:t.contains(e.target);O&&n&&"Escape"===e.key&&w()},_=e=>{var t,n;const l=!(null===(t=null==b?void 0:b.current)||void 0===t?void 0:t.contains(e.target)),a=!(null===(n=null==E?void 0:E.current)||void 0===n?void 0:n.contains(e.target));O&&l&&a&&w()};s().useEffect((()=>(window.addEventListener("click",_),window.addEventListener("keydown",B),()=>{window.removeEventListener("click",_),window.removeEventListener("keydown",B)})),[O,b,E]);const C=n.find((e=>e.eventKey===T)),A=(null==C?void 0:C.title)?C.title:o,N=s().createElement("li",Object.assign({className:(0,r.css)(i.Z.tabsItem,i.Z.modifiers.overflow,C&&i.Z.modifiers.current,t),role:"presentation",ref:y},p),s().createElement("button",{type:"button",className:(0,r.css)(i.Z.tabsLink,O&&i.Z.modifiers.expanded),onClick:()=>(L((e=>!e)),void setTimeout((()=>{if(null==b?void 0:b.current){const e=b.current.querySelector("li > button,input:not(:disabled)");e&&e.focus()}}),0)),"aria-label":c,"aria-haspopup":"menu","aria-expanded":O,role:"tab",ref:E},s().createElement(S.T,null,A,a&&A===o&&` (${n.length})`),s().createElement("span",{className:i.Z.tabsLinkToggleIcon},s().createElement(d.default,null)))),Z=n.map((e=>s().createElement(h.s,{key:e.eventKey,itemId:e.eventKey,isSelected:T===e.eventKey},e.title))),k=s().createElement(v.v,{ref:b,onSelect:(e,t)=>((e,t)=>{w();const l=n.find((e=>e.eventKey===t)).tabContentRef;I(e,t,l)})(e,t)},s().createElement(g.D,null,s().createElement(x.q,null,Z)));return s().createElement(s().Fragment,null,N,s().createElement(u.Popper,{triggerRef:E,popper:k,popperRef:b,isVisible:O,minWidth:"revert",appendTo:y.current,zIndex:m}))};E.displayName="OverflowTab";var y,O=n(47173),L=n(62472),T=n(41724);!function(e){e.div="div",e.nav="nav"}(y||(y={}));const I={default:"",light300:i.Z.modifiers.colorSchemeLight_300};class w extends a.Component{constructor(e){super(e),this.tabList=a.createRef(),this.leftScrollButtonRef=a.createRef(),this.direction="ltr",this.scrollTimeout=null,this.countOverflowingElements=e=>Array.from(e.children).filter((t=>!(0,p.Zd)(e,t,!1))).length,this.handleScrollButtons=()=>{const{isOverflowHorizontal:e}=this.props;clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout((()=>{const t=this.tabList.current;let n=!0,l=!0,a=!1,s=0;if(t&&!this.props.isVertical&&!e){const e=!(0,p.Zd)(t,t.firstChild,!1),s=!(0,p.Zd)(t,t.lastChild,!1);a=e||s,n=!e,l=!s}e&&(s=this.countOverflowingElements(t)),this.setState({enableScrollButtons:a,disableBackScrollButton:n,disableForwardScrollButton:l,overflowingTabCount:s})}),100)},this.scrollBack=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,l,a;for(a=0;a<t.length&&!n;a++)(0,p.Zd)(e,t[a],!1)&&(n=t[a],l=t[a-1]);l&&("ltr"===this.direction?e.scrollLeft-=l.scrollWidth:e.scrollLeft+=l.scrollWidth)}},this.scrollForward=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,l;for(let a=t.length-1;a>=0&&!n;a--)(0,p.Zd)(e,t[a],!1)&&(n=t[a],l=t[a+1]);l&&("ltr"===this.direction?e.scrollLeft+=l.scrollWidth:e.scrollLeft-=l.scrollWidth)}},this.hideScrollButtons=()=>{const{enableScrollButtons:e,renderScrollButtons:t,showScrollButtons:n}=this.state;e||n||!t||this.setState({renderScrollButtons:!1})},this.state={enableScrollButtons:!1,showScrollButtons:!1,renderScrollButtons:!1,disableBackScrollButton:!0,disableForwardScrollButton:!0,shownKeys:void 0!==this.props.defaultActiveKey?[this.props.defaultActiveKey]:[this.props.activeKey],uncontrolledActiveKey:this.props.defaultActiveKey,uncontrolledIsExpandedLocal:this.props.defaultIsExpanded,ouiaStateId:(0,L.getDefaultOUIAId)(w.displayName),overflowingTabCount:0},this.props.isVertical&&void 0!==this.props.expandable&&(this.props.toggleAriaLabel||this.props.toggleText||console.error("Tabs:","toggleAriaLabel or the toggleText prop is required to make the toggle button accessible"))}handleTabClick(e,t,n){const{shownKeys:l}=this.state,{onSelect:s,defaultActiveKey:i}=this.props;void 0!==i?this.setState({uncontrolledActiveKey:t}):s(e,t),n&&(a.Children.toArray(this.props.children).filter((e=>a.isValidElement(e))).filter((({props:e})=>e.tabContentRef&&e.tabContentRef.current)).forEach((e=>e.props.tabContentRef.current.hidden=!0)),n.current&&(n.current.hidden=!1)),this.props.mountOnEnter&&this.setState({shownKeys:l.concat(t)})}componentDidMount(){this.props.isVertical||(p.Nq&&window.addEventListener("resize",this.handleScrollButtons,!1),this.direction=(0,p.j9)(this.tabList.current),this.handleScrollButtons())}componentWillUnmount(){var e;this.props.isVertical||p.Nq&&window.removeEventListener("resize",this.handleScrollButtons,!1),clearTimeout(this.scrollTimeout),null===(e=this.leftScrollButtonRef.current)||void 0===e||e.removeEventListener("transitionend",this.hideScrollButtons)}componentDidUpdate(e,t){const{activeKey:n,mountOnEnter:l,isOverflowHorizontal:s,children:i}=this.props,{shownKeys:o,overflowingTabCount:r,enableScrollButtons:c}=this.state;e.activeKey!==n&&l&&o.indexOf(n)<0&&this.setState({shownKeys:o.concat(n)}),e.children&&i&&a.Children.toArray(e.children).length!==a.Children.toArray(i).length&&this.handleScrollButtons();const d=this.countOverflowingElements(this.tabList.current);s&&d&&this.setState({overflowingTabCount:d+r}),!t.enableScrollButtons&&c?(this.setState({renderScrollButtons:!0}),setTimeout((()=>{var e;null===(e=this.leftScrollButtonRef.current)||void 0===e||e.addEventListener("transitionend",this.hideScrollButtons),this.setState({showScrollButtons:!0})}),100)):t.enableScrollButtons&&!c&&this.setState({showScrollButtons:!1}),this.direction=(0,p.j9)(this.tabList.current)}render(){const e=this.props,{className:t,children:n,activeKey:s,defaultActiveKey:u,id:h,isFilled:v,isSecondary:g,isVertical:x,isBox:S,hasNoBorderBottom:B,leftScrollAriaLabel:_,rightScrollAriaLabel:C,backScrollAriaLabel:A,forwardScrollAriaLabel:N,"aria-label":Z,component:k,ouiaId:K,ouiaSafe:R,mountOnEnter:j,unmountOnExit:D,usePageInsets:M,inset:$,variant:P,expandable:X,isExpanded:z,defaultIsExpanded:V,toggleText:F,toggleAriaLabel:q,addButtonAriaLabel:H,onToggle:U,onClose:W,onAdd:G,isOverflowHorizontal:J}=e,Q=(0,l.__rest)(e,["className","children","activeKey","defaultActiveKey","id","isFilled","isSecondary","isVertical","isBox","hasNoBorderBottom","leftScrollAriaLabel","rightScrollAriaLabel","backScrollAriaLabel","forwardScrollAriaLabel","aria-label","component","ouiaId","ouiaSafe","mountOnEnter","unmountOnExit","usePageInsets","inset","variant","expandable","isExpanded","defaultIsExpanded","toggleText","toggleAriaLabel","addButtonAriaLabel","onToggle","onClose","onAdd","isOverflowHorizontal"]),{showScrollButtons:Y,renderScrollButtons:ee,disableBackScrollButton:te,disableForwardScrollButton:ne,shownKeys:le,uncontrolledActiveKey:ae,uncontrolledIsExpandedLocal:se,overflowingTabCount:ie}=this.state,oe=a.Children.toArray(n).filter((e=>a.isValidElement(e))).filter((({props:e})=>!e.isHidden)),re=oe.slice(0,oe.length-ie),ce=oe.slice(oe.length-ie).map((e=>e.props)),de=h||(0,p.Ki)(),me=k===y.nav?"nav":"div",pe=void 0!==u?ae:s,be=void 0!==V?se:z,fe=(e,t)=>{void 0===z?this.setState({uncontrolledIsExpandedLocal:t}):U(e,t)},ue=J&&ie>0,he="object"==typeof J?Object.assign({},J):{};return a.createElement(f.c_,{value:{variant:P,mountOnEnter:j,unmountOnExit:D,localActiveKey:pe,uniqueId:de,handleTabClick:(...e)=>this.handleTabClick(...e),handleTabClose:W}},a.createElement(me,Object.assign({"aria-label":Z,className:(0,r.css)(i.Z.tabs,v&&i.Z.modifiers.fill,g&&i.Z.modifiers.secondary,x&&i.Z.modifiers.vertical,x&&X&&(0,p.wt)(X,i.Z),x&&X&&be&&i.Z.modifiers.expanded,S&&i.Z.modifiers.box,Y&&i.Z.modifiers.scrollable,M&&i.Z.modifiers.pageInsets,B&&i.Z.modifiers.noBorderBottom,(0,p.wt)($,i.Z),I[P],ue&&i.Z.modifiers.overflow,t)},(0,L.getOUIAProps)(w.displayName,void 0!==K?K:this.state.ouiaStateId,R),{id:h&&h},Q),X&&x&&a.createElement(T.w,null,(e=>a.createElement("div",{className:(0,r.css)(i.Z.tabsToggle)},a.createElement("div",{className:(0,r.css)(i.Z.tabsToggleButton)},a.createElement(O.zx,{onClick:e=>fe(e,!be),variant:"plain","aria-label":q,"aria-expanded":be,id:`${e}-button`,"aria-labelledby":`${e}-text ${e}-button`},a.createElement("span",{className:(0,r.css)(i.Z.tabsToggleIcon)},a.createElement(d.default,{"arian-hidden":"true"})),F&&a.createElement("span",{className:(0,r.css)(i.Z.tabsToggleText),id:`${e}-text`},F)))))),ee&&a.createElement("button",{type:"button",className:(0,r.css)(i.Z.tabsScrollButton,g&&o.default.modifiers.secondary),"aria-label":A||_,onClick:this.scrollBack,disabled:te,"aria-hidden":te,ref:this.leftScrollButtonRef},a.createElement(c.ZP,null)),a.createElement("ul",{className:(0,r.css)(i.Z.tabsList),ref:this.tabList,onScroll:this.handleScrollButtons,role:"tablist"},J?re:oe,ue&&a.createElement(E,Object.assign({overflowingTabs:ce},he))),ee&&a.createElement("button",{type:"button",className:(0,r.css)(i.Z.tabsScrollButton,g&&o.default.modifiers.secondary),"aria-label":N||C,onClick:this.scrollForward,disabled:ne,"aria-hidden":ne},a.createElement(d.default,null)),void 0!==G&&a.createElement("span",{className:(0,r.css)(i.Z.tabsAdd)},a.createElement(O.zx,{variant:"plain","aria-label":H||"Add tab",onClick:G},a.createElement(m,null)))),oe.filter((e=>e.props.children&&!(D&&e.props.eventKey!==pe)&&!(j&&-1===le.indexOf(e.props.eventKey)))).map((e=>a.createElement(b.I,{key:e.props.eventKey,activeKey:pe,child:e,id:e.props.id||de,ouiaId:e.props.ouiaId}))))}}w.displayName="Tabs",w.defaultProps={activeKey:0,onSelect:()=>{},isFilled:!1,isSecondary:!1,isVertical:!1,isBox:!1,hasNoBorderBottom:!1,leftScrollAriaLabel:"Scroll left",backScrollAriaLabel:"Scroll back",rightScrollAriaLabel:"Scroll right",forwardScrollAriaLabel:"Scroll forward",component:y.div,mountOnEnter:!1,unmountOnExit:!1,ouiaSafe:!0,variant:"default",onToggle:(e,t)=>{}}},10962:(e,t,n)=>{n.d(t,{RL:()=>l,c_:()=>a,y1:()=>s});const l=n(66029).createContext({variant:"default",mountOnEnter:!1,unmountOnExit:!1,localActiveKey:"",uniqueId:"",handleTabClick:()=>null,handleTabClose:void 0}),a=l.Provider,s=l.Consumer},33078:(e,t,n)=>{n.d(t,{Z:()=>l}),n(56024);const l={modifiers:{light_300:"pf-m-light-300",padding:"pf-m-padding"},tabContent:"pf-v5-c-tab-content",tabContentBody:"pf-v5-c-tab-content__body"}},59933:(e,t,n)=>{n.d(t,{Z:()=>l}),n(43390);const l={button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{fill:"pf-m-fill",scrollable:"pf-m-scrollable",noBorderBottom:"pf-m-no-border-bottom",box:"pf-m-box",vertical:"pf-m-vertical",current:"pf-m-current",colorSchemeLight_300:"pf-m-color-scheme--light-300",expandable:"pf-m-expandable",nonExpandable:"pf-m-non-expandable",expandableOnSm:"pf-m-expandable-on-sm",nonExpandableOnSm:"pf-m-non-expandable-on-sm",expandableOnMd:"pf-m-expandable-on-md",nonExpandableOnMd:"pf-m-non-expandable-on-md",expandableOnLg:"pf-m-expandable-on-lg",nonExpandableOnLg:"pf-m-non-expandable-on-lg",expandableOnXl:"pf-m-expandable-on-xl",nonExpandableOnXl:"pf-m-non-expandable-on-xl",expandableOn_2xl:"pf-m-expandable-on-2xl",nonExpandableOn_2xl:"pf-m-non-expandable-on-2xl",expanded:"pf-m-expanded",secondary:"pf-m-secondary",pageInsets:"pf-m-page-insets",overflow:"pf-m-overflow",action:"pf-m-action",active:"pf-m-active",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",insetNone:"pf-m-inset-none",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",insetNoneOnSm:"pf-m-inset-none-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",insetNoneOnMd:"pf-m-inset-none-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",insetNoneOnLg:"pf-m-inset-none-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",insetNoneOnXl:"pf-m-inset-none-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl"},tabs:"pf-v5-c-tabs",tabsAdd:"pf-v5-c-tabs__add",tabsItem:"pf-v5-c-tabs__item",tabsItemAction:"pf-v5-c-tabs__item-action",tabsItemActionIcon:"pf-v5-c-tabs__item-action-icon",tabsItemIcon:"pf-v5-c-tabs__item-icon",tabsItemText:"pf-v5-c-tabs__item-text",tabsLink:"pf-v5-c-tabs__link",tabsLinkToggleIcon:"pf-v5-c-tabs__link-toggle-icon",tabsList:"pf-v5-c-tabs__list",tabsScrollButton:"pf-v5-c-tabs__scroll-button",tabsToggle:"pf-v5-c-tabs__toggle",tabsToggleButton:"pf-v5-c-tabs__toggle-button",tabsToggleIcon:"pf-v5-c-tabs__toggle-icon",tabsToggleText:"pf-v5-c-tabs__toggle-text",themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/1021.23f70e82463e3b0e5a072d071dca25a8.js.map
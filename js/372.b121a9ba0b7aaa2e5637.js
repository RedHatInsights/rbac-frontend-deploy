"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[372],{372:(e,t,n)=>{n.r(t),n.d(t,{Tab:()=>x,TabAction:()=>v,TabContent:()=>C,TabContentBody:()=>P,TabTitleIcon:()=>V,TabTitleText:()=>R,Tabs:()=>M,TabsComponent:()=>j,TabsContext:()=>c,TabsContextConsumer:()=>m,TabsContextProvider:()=>d});var a=n(8674),l=n(44914),s=n.n(l);n(70043);const i={button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{fill:"pf-m-fill",scrollable:"pf-m-scrollable",noBorderBottom:"pf-m-no-border-bottom",box:"pf-m-box",vertical:"pf-m-vertical",current:"pf-m-current",colorSchemeLight_300:"pf-m-color-scheme--light-300",expandable:"pf-m-expandable",nonExpandable:"pf-m-non-expandable",expandableOnSm:"pf-m-expandable-on-sm",nonExpandableOnSm:"pf-m-non-expandable-on-sm",expandableOnMd:"pf-m-expandable-on-md",nonExpandableOnMd:"pf-m-non-expandable-on-md",expandableOnLg:"pf-m-expandable-on-lg",nonExpandableOnLg:"pf-m-non-expandable-on-lg",expandableOnXl:"pf-m-expandable-on-xl",nonExpandableOnXl:"pf-m-non-expandable-on-xl",expandableOn_2xl:"pf-m-expandable-on-2xl",nonExpandableOn_2xl:"pf-m-non-expandable-on-2xl",expanded:"pf-m-expanded",secondary:"pf-m-secondary",pageInsets:"pf-m-page-insets",overflow:"pf-m-overflow",action:"pf-m-action",active:"pf-m-active",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",insetNone:"pf-m-inset-none",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",insetNoneOnSm:"pf-m-inset-none-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",insetNoneOnMd:"pf-m-inset-none-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",insetNoneOnLg:"pf-m-inset-none-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",insetNoneOnXl:"pf-m-inset-none-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl"},tabs:"pf-v5-c-tabs",tabsAdd:"pf-v5-c-tabs__add",tabsItem:"pf-v5-c-tabs__item",tabsItemAction:"pf-v5-c-tabs__item-action",tabsItemActionIcon:"pf-v5-c-tabs__item-action-icon",tabsItemIcon:"pf-v5-c-tabs__item-icon",tabsItemText:"pf-v5-c-tabs__item-text",tabsLink:"pf-v5-c-tabs__link",tabsLinkToggleIcon:"pf-v5-c-tabs__link-toggle-icon",tabsList:"pf-v5-c-tabs__list",tabsScrollButton:"pf-v5-c-tabs__scroll-button",tabsToggle:"pf-v5-c-tabs__toggle",tabsToggleButton:"pf-v5-c-tabs__toggle-button",tabsToggleIcon:"pf-v5-c-tabs__toggle-icon",tabsToggleText:"pf-v5-c-tabs__toggle-text",themeDark:"pf-v5-theme-dark"};var o=n(31398);const r=e=>{var{children:t,tabContentRef:n,ouiaId:s,parentInnerRef:i,ouiaSafe:c}=e,d=(0,a.__rest)(e,["children","tabContentRef","ouiaId","parentInnerRef","ouiaSafe"]);const m=d.href?"a":"button";return l.createElement(m,Object.assign({},!d.href&&{type:"button"},{ref:i},(0,o.getOUIAProps)(r.displayName,s,c),d),t)};r.displayName="TabButton";const c=l.createContext({variant:"default",mountOnEnter:!1,unmountOnExit:!1,localActiveKey:"",uniqueId:"",handleTabClick:()=>null,handleTabClose:void 0}),d=c.Provider,m=c.Consumer;var b=n(33774),p=n(35280),f=n(44397),u=n(72583);const h=e=>{var{children:t,className:n,onClick:s,isDisabled:r,"aria-label":c="Tab action",innerRef:d,ouiaId:m,ouiaSafe:p}=e,f=(0,a.__rest)(e,["children","className","onClick","isDisabled","aria-label","innerRef","ouiaId","ouiaSafe"]);return l.createElement("span",{className:(0,b.css)(i.tabsItemAction,n)},l.createElement(u.$n,Object.assign({ref:d,type:"button",variant:"plain","aria-label":c,onClick:s,isDisabled:r},(0,o.getOUIAProps)(v.displayName,m,p),f),l.createElement("span",{className:(0,b.css)(i.tabsItemActionIcon)},t)))},v=l.forwardRef(((e,t)=>l.createElement(h,Object.assign({},e,{innerRef:t}))));v.displayName="TabAction";const g=e=>{var{title:t,eventKey:n,tabContentRef:s,id:o,tabContentId:d,className:m="",ouiaId:u,isDisabled:h,isAriaDisabled:g,inoperableEvents:x=["onClick","onKeyPress"],href:S,innerRef:E,tooltip:y,closeButtonAriaLabel:O,isCloseDisabled:T=!1,actions:L}=e,I=(0,a.__rest)(e,["title","eventKey","tabContentRef","id","tabContentId","className","ouiaId","isDisabled","isAriaDisabled","inoperableEvents","href","innerRef","tooltip","closeButtonAriaLabel","isCloseDisabled","actions"]);const B=x.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{}),{mountOnEnter:w,localActiveKey:C,unmountOnExit:_,uniqueId:A,handleTabClick:N,handleTabClose:k}=l.useContext(c);let K=d?`${d}`:`pf-tab-section-${n}-${o||A}`;(w||_)&&n!==C&&(K=void 0);const R=Boolean(!S),X=l.createElement(r,Object.assign({parentInnerRef:E,className:(0,b.css)(i.tabsLink,h&&S&&i.modifiers.disabled,g&&i.modifiers.ariaDisabled),disabled:R?h:null,"aria-disabled":h||g,tabIndex:h?R?null:-1:g?null:void 0,onClick:e=>N(e,n,s)},g?B:null,{id:`pf-tab-${n}-${o||A}`,"aria-controls":K,tabContentRef:s,ouiaId:u,href:S,role:"tab","aria-selected":n===C},I),t);return l.createElement("li",{className:(0,b.css)(i.tabsItem,n===C&&i.modifiers.current,(k||L)&&i.modifiers.action,(h||g)&&i.modifiers.disabled,m),role:"presentation"},y?l.createElement(p.m,Object.assign({},y.props),X):X,L&&L,void 0!==k&&l.createElement(v,{"aria-label":O||"Close tab",onClick:e=>k(e,n,s),isDisabled:T},l.createElement(f.default,null)))},x=l.forwardRef(((e,t)=>l.createElement(g,Object.assign({innerRef:t},e))));x.displayName="Tab";var S=n(73530),E=n(91918),y=n(89015);const O=(0,n(68419).w)({name:"PlusIcon",height:512,width:448,svgPath:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0});var T=n(47931);n(87034);const L="pf-m-padding",I="pf-v5-c-tab-content",B={default:"",light300:"pf-m-light-300"},w=e=>{var{id:t,activeKey:n,"aria-label":s,child:i,children:r,className:c,eventKey:d,innerRef:p,ouiaId:f,ouiaSafe:u}=e,h=(0,a.__rest)(e,["id","activeKey","aria-label","child","children","className","eventKey","innerRef","ouiaId","ouiaSafe"]);if(r||i){let e;return e=s?null:r?`${t}`:`pf-tab-${i.props.eventKey}-${t}`,l.createElement(m,null,(({variant:a})=>l.createElement("section",Object.assign({ref:p,hidden:r?null:i.props.eventKey!==n,className:r?(0,b.css)(I,c,B[a]):(0,b.css)(I,i.props.className,B[a]),id:r?t:`pf-tab-section-${i.props.eventKey}-${t}`,"aria-label":s,"aria-labelledby":e,role:"tabpanel",tabIndex:0},(0,o.getOUIAProps)("TabContent",f,u),h),r||i.props.children)))}return null},C=l.forwardRef(((e,t)=>l.createElement(w,Object.assign({},e,{innerRef:t}))));var _=n(17694),A=n(64361),N=n(74225),k=n(94494),K=n(75797);const R=e=>{var{children:t,className:n=""}=e,s=(0,a.__rest)(e,["children","className"]);return l.createElement("span",Object.assign({className:(0,b.css)(i.tabsItemText,n)},s),t)};R.displayName="TabTitleText";const X=e=>{var{className:t,overflowingTabs:n=[],showTabCount:l,defaultTitleText:o="More",toggleAriaLabel:r,zIndex:d=9999}=e,m=(0,a.__rest)(e,["className","overflowingTabs","showTabCount","defaultTitleText","toggleAriaLabel","zIndex"]);const p=s().useRef(),f=s().useRef(),u=s().useRef(),[h,v]=s().useState(!1),{localActiveKey:g,handleTabClick:x}=s().useContext(c),S=()=>{v(!1),f.current.focus()},E=e=>{var t;const n=null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.contains(e.target);h&&n&&"Escape"===e.key&&S()},O=e=>{var t,n;const a=!(null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.contains(e.target)),l=!(null===(n=null==f?void 0:f.current)||void 0===n?void 0:n.contains(e.target));h&&a&&l&&S()};s().useEffect((()=>(window.addEventListener("click",O),window.addEventListener("keydown",E),()=>{window.removeEventListener("click",O),window.removeEventListener("keydown",E)})),[h,p,f]);const T=n.find((e=>e.eventKey===g)),L=(null==T?void 0:T.title)?T.title:o,I=s().createElement("li",Object.assign({className:(0,b.css)(i.tabsItem,i.modifiers.overflow,T&&i.modifiers.current,t),role:"presentation",ref:u},m),s().createElement("button",{type:"button",className:(0,b.css)(i.tabsLink,h&&i.modifiers.expanded),onClick:()=>(v((e=>!e)),void setTimeout((()=>{if(null==p?void 0:p.current){const e=p.current.querySelector("li > button,input:not(:disabled)");e&&e.focus()}}),0)),"aria-label":r,"aria-haspopup":"menu","aria-expanded":h,role:"tab",ref:f},s().createElement(R,null,L,l&&L===o&&` (${n.length})`),s().createElement("span",{className:i.tabsLinkToggleIcon},s().createElement(y.default,null)))),B=n.map((e=>s().createElement(A.D,{key:e.eventKey,itemId:e.eventKey,isSelected:g===e.eventKey},e.title))),w=s().createElement(N.W,{ref:p,onSelect:(e,t)=>((e,t)=>{S();const a=n.find((e=>e.eventKey===t)).tabContentRef;x(e,t,a)})(e,t)},s().createElement(k.r,null,s().createElement(K.c,null,B)));return s().createElement(s().Fragment,null,I,s().createElement(_.Popper,{triggerRef:f,popper:w,popperRef:p,isVisible:h,minWidth:"revert",appendTo:u.current,zIndex:d}))};X.displayName="OverflowTab";var j,D=n(65518);!function(e){e.div="div",e.nav="nav"}(j||(j={}));const $={default:"",light300:i.modifiers.colorSchemeLight_300};class M extends l.Component{constructor(e){super(e),this.tabList=l.createRef(),this.leftScrollButtonRef=l.createRef(),this.direction="ltr",this.scrollTimeout=null,this.countOverflowingElements=e=>Array.from(e.children).filter((t=>!(0,T.Xv)(e,t,!1))).length,this.handleScrollButtons=()=>{const{isOverflowHorizontal:e}=this.props;clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout((()=>{const t=this.tabList.current;let n=!0,a=!0,l=!1,s=0;if(t&&!this.props.isVertical&&!e){const e=!(0,T.Xv)(t,t.firstChild,!1),s=!(0,T.Xv)(t,t.lastChild,!1);l=e||s,n=!e,a=!s}e&&(s=this.countOverflowingElements(t)),this.setState({enableScrollButtons:l,disableBackScrollButton:n,disableForwardScrollButton:a,overflowingTabCount:s})}),100)},this.scrollBack=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,a,l;for(l=0;l<t.length&&!n;l++)(0,T.Xv)(e,t[l],!1)&&(n=t[l],a=t[l-1]);a&&("ltr"===this.direction?e.scrollLeft-=a.scrollWidth:e.scrollLeft+=a.scrollWidth)}},this.scrollForward=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,a;for(let l=t.length-1;l>=0&&!n;l--)(0,T.Xv)(e,t[l],!1)&&(n=t[l],a=t[l+1]);a&&("ltr"===this.direction?e.scrollLeft+=a.scrollWidth:e.scrollLeft-=a.scrollWidth)}},this.hideScrollButtons=()=>{const{enableScrollButtons:e,renderScrollButtons:t,showScrollButtons:n}=this.state;e||n||!t||this.setState({renderScrollButtons:!1})},this.state={enableScrollButtons:!1,showScrollButtons:!1,renderScrollButtons:!1,disableBackScrollButton:!0,disableForwardScrollButton:!0,shownKeys:void 0!==this.props.defaultActiveKey?[this.props.defaultActiveKey]:[this.props.activeKey],uncontrolledActiveKey:this.props.defaultActiveKey,uncontrolledIsExpandedLocal:this.props.defaultIsExpanded,ouiaStateId:(0,o.getDefaultOUIAId)(M.displayName),overflowingTabCount:0},this.props.isVertical&&void 0!==this.props.expandable&&(this.props.toggleAriaLabel||this.props.toggleText||console.error("Tabs:","toggleAriaLabel or the toggleText prop is required to make the toggle button accessible"))}handleTabClick(e,t,n){const{shownKeys:a}=this.state,{onSelect:s,defaultActiveKey:i}=this.props;void 0!==i?this.setState({uncontrolledActiveKey:t}):s(e,t),n&&(l.Children.toArray(this.props.children).filter((e=>l.isValidElement(e))).filter((({props:e})=>e.tabContentRef&&e.tabContentRef.current)).forEach((e=>e.props.tabContentRef.current.hidden=!0)),n.current&&(n.current.hidden=!1)),this.props.mountOnEnter&&this.setState({shownKeys:a.concat(t)})}componentDidMount(){this.props.isVertical||(T.Sw&&window.addEventListener("resize",this.handleScrollButtons,!1),this.direction=(0,T.iJ)(this.tabList.current),this.handleScrollButtons())}componentWillUnmount(){var e;this.props.isVertical||T.Sw&&window.removeEventListener("resize",this.handleScrollButtons,!1),clearTimeout(this.scrollTimeout),null===(e=this.leftScrollButtonRef.current)||void 0===e||e.removeEventListener("transitionend",this.hideScrollButtons)}componentDidUpdate(e,t){const{activeKey:n,mountOnEnter:a,isOverflowHorizontal:s,children:i}=this.props,{shownKeys:o,overflowingTabCount:r,enableScrollButtons:c}=this.state;e.activeKey!==n&&a&&o.indexOf(n)<0&&this.setState({shownKeys:o.concat(n)}),e.children&&i&&l.Children.toArray(e.children).length!==l.Children.toArray(i).length&&this.handleScrollButtons();const d=this.countOverflowingElements(this.tabList.current);s&&d&&this.setState({overflowingTabCount:d+r}),!t.enableScrollButtons&&c?(this.setState({renderScrollButtons:!0}),setTimeout((()=>{var e;null===(e=this.leftScrollButtonRef.current)||void 0===e||e.addEventListener("transitionend",this.hideScrollButtons),this.setState({showScrollButtons:!0})}),100)):t.enableScrollButtons&&!c&&this.setState({showScrollButtons:!1}),this.direction=(0,T.iJ)(this.tabList.current)}render(){const e=this.props,{className:t,children:n,activeKey:s,defaultActiveKey:r,id:c,isFilled:m,isSecondary:p,isVertical:f,isBox:h,hasNoBorderBottom:v,leftScrollAriaLabel:g,rightScrollAriaLabel:x,backScrollAriaLabel:L,forwardScrollAriaLabel:I,"aria-label":B,component:w,ouiaId:_,ouiaSafe:A,mountOnEnter:N,unmountOnExit:k,usePageInsets:K,inset:R,variant:P,expandable:V,isExpanded:z,defaultIsExpanded:F,toggleText:H,toggleAriaLabel:U,addButtonAriaLabel:W,onToggle:q,onClose:J,onAdd:G,isOverflowHorizontal:Q}=e,Y=(0,a.__rest)(e,["className","children","activeKey","defaultActiveKey","id","isFilled","isSecondary","isVertical","isBox","hasNoBorderBottom","leftScrollAriaLabel","rightScrollAriaLabel","backScrollAriaLabel","forwardScrollAriaLabel","aria-label","component","ouiaId","ouiaSafe","mountOnEnter","unmountOnExit","usePageInsets","inset","variant","expandable","isExpanded","defaultIsExpanded","toggleText","toggleAriaLabel","addButtonAriaLabel","onToggle","onClose","onAdd","isOverflowHorizontal"]),{showScrollButtons:Z,renderScrollButtons:ee,disableBackScrollButton:te,disableForwardScrollButton:ne,shownKeys:ae,uncontrolledActiveKey:le,uncontrolledIsExpandedLocal:se,overflowingTabCount:ie}=this.state,oe=l.Children.toArray(n).filter((e=>l.isValidElement(e))).filter((({props:e})=>!e.isHidden)),re=oe.slice(0,oe.length-ie),ce=oe.slice(oe.length-ie).map((e=>e.props)),de=c||(0,T.LP)(),me=w===j.nav?"nav":"div",be=void 0!==r?le:s,pe=void 0!==F?se:z,fe=(e,t)=>{void 0===z?this.setState({uncontrolledIsExpandedLocal:t}):q(e,t)},ue=Q&&ie>0,he="object"==typeof Q?Object.assign({},Q):{};return l.createElement(d,{value:{variant:P,mountOnEnter:N,unmountOnExit:k,localActiveKey:be,uniqueId:de,handleTabClick:(...e)=>this.handleTabClick(...e),handleTabClose:J}},l.createElement(me,Object.assign({"aria-label":B,className:(0,b.css)(i.tabs,m&&i.modifiers.fill,p&&i.modifiers.secondary,f&&i.modifiers.vertical,f&&V&&(0,T.ay)(V,i),f&&V&&pe&&i.modifiers.expanded,h&&i.modifiers.box,Z&&i.modifiers.scrollable,K&&i.modifiers.pageInsets,v&&i.modifiers.noBorderBottom,(0,T.ay)(R,i),$[P],ue&&i.modifiers.overflow,t)},(0,o.getOUIAProps)(M.displayName,void 0!==_?_:this.state.ouiaStateId,A),{id:c&&c},Y),V&&f&&l.createElement(D.N,null,(e=>l.createElement("div",{className:(0,b.css)(i.tabsToggle)},l.createElement("div",{className:(0,b.css)(i.tabsToggleButton)},l.createElement(u.$n,{onClick:e=>fe(e,!pe),variant:"plain","aria-label":U,"aria-expanded":pe,id:`${e}-button`,"aria-labelledby":`${e}-text ${e}-button`},l.createElement("span",{className:(0,b.css)(i.tabsToggleIcon)},l.createElement(y.default,{"arian-hidden":"true"})),H&&l.createElement("span",{className:(0,b.css)(i.tabsToggleText),id:`${e}-text`},H)))))),ee&&l.createElement("button",{type:"button",className:(0,b.css)(i.tabsScrollButton,p&&S.default.modifiers.secondary),"aria-label":L||g,onClick:this.scrollBack,disabled:te,"aria-hidden":te,ref:this.leftScrollButtonRef},l.createElement(E.Ay,null)),l.createElement("ul",{className:(0,b.css)(i.tabsList),ref:this.tabList,onScroll:this.handleScrollButtons,role:"tablist"},Q?re:oe,ue&&l.createElement(X,Object.assign({overflowingTabs:ce},he))),ee&&l.createElement("button",{type:"button",className:(0,b.css)(i.tabsScrollButton,p&&S.default.modifiers.secondary),"aria-label":I||x,onClick:this.scrollForward,disabled:ne,"aria-hidden":ne},l.createElement(y.default,null)),void 0!==G&&l.createElement("span",{className:(0,b.css)(i.tabsAdd)},l.createElement(u.$n,{variant:"plain","aria-label":W||"Add tab",onClick:G},l.createElement(O,null)))),oe.filter((e=>e.props.children&&!(k&&e.props.eventKey!==be)&&!(N&&-1===ae.indexOf(e.props.eventKey)))).map((e=>l.createElement(C,{key:e.props.eventKey,activeKey:be,child:e,id:e.props.id||de,ouiaId:e.props.ouiaId}))))}}M.displayName="Tabs",M.defaultProps={activeKey:0,onSelect:()=>{},isFilled:!1,isSecondary:!1,isVertical:!1,isBox:!1,hasNoBorderBottom:!1,leftScrollAriaLabel:"Scroll left",backScrollAriaLabel:"Scroll back",rightScrollAriaLabel:"Scroll right",forwardScrollAriaLabel:"Scroll forward",component:j.div,mountOnEnter:!1,unmountOnExit:!1,ouiaSafe:!0,variant:"default",onToggle:(e,t)=>{}};const P=e=>{var{children:t,className:n,hasPadding:s}=e,i=(0,a.__rest)(e,["children","className","hasPadding"]);return l.createElement("div",Object.assign({className:(0,b.css)("pf-v5-c-tab-content__body",s&&L,n)},i),t)};P.displayName="TabContentBody";const V=e=>{var{children:t,className:n=""}=e,s=(0,a.__rest)(e,["children","className"]);return l.createElement("span",Object.assign({className:(0,b.css)(i.tabsItemIcon,n)},s),t)};V.displayName="TabTitleIcon"}}]);
//# sourceMappingURL=../sourcemaps/372.1e7d3f22436dc4a2dd51703b163aa769.js.map
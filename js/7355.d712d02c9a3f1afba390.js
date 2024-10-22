(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[7355],{23931:(e,a,i)=>{"use strict";i.r(a),i.d(a,{Page:()=>S,PageBreadcrumb:()=>f,PageContext:()=>p.NQ,PageContextConsumer:()=>p.rP,PageContextProvider:()=>p.qK,PageGroup:()=>g,PageLayouts:()=>b,PageNavigation:()=>B,PageSection:()=>O.d8,PageSectionTypes:()=>O.yp,PageSectionVariants:()=>O.zC,PageSidebar:()=>N,PageSidebarBody:()=>k,PageSidebarContext:()=>w,PageToggleButton:()=>P,pageContextDefaults:()=>p.R1,pageSidebarContextDefaults:()=>v});var t=i(8674),s=i(93345),r=i(73408),n=i(33774),o=i(69724),d=i(47931),l=i(41829),c=i(55401),h=i(30130),m=i(35900),p=i(54282);const g=e=>{var{className:a="",children:i,stickyOnBreakpoint:o,hasShadowTop:l=!1,hasShadowBottom:c=!1,hasOverflowScroll:h=!1,"aria-label":m}=e,g=(0,t.__rest)(e,["className","children","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:b,getVerticalBreakpoint:u}=s.useContext(p.NQ);return s.useEffect((()=>{h&&!m&&console.warn("PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[h,m]),s.createElement("div",Object.assign({},g,{className:(0,n.css)(r.A.pageMainGroup,(0,d.ay)(o,r.A,"sticky-",u(b),!0),l&&r.A.modifiers.shadowTop,c&&r.A.modifiers.shadowBottom,h&&r.A.modifiers.overflowScroll,a)},h&&{tabIndex:0,role:"region","aria-label":m}),i)};g.displayName="PageGroup";var b,u=i(49045);!function(e){e.vertical="vertical",e.horizontal="horizontal"}(b||(b={}));class S extends s.Component{constructor(e){super(e),this.mainRef=s.createRef(),this.pageRef=s.createRef(),this.observer=()=>{},this.getWindowWidth=()=>d.Sw?this.pageRef.current?this.pageRef.current.clientWidth:window.innerWidth:1200,this.isMobile=()=>this.getWindowWidth()<Number.parseInt(o.A.value,10),this.resize=e=>{var a;const{onPageResize:i}=this.props,t=this.isMobile();if(i&&i(e,{mobileView:t,windowSize:this.getWindowWidth()}),t!==this.state.mobileView&&this.setState({mobileView:t}),null===(a=this.pageRef)||void 0===a?void 0:a.current){const e=this.pageRef.current.clientWidth,a=this.pageRef.current.clientHeight;this.state.width!==e&&this.setState({width:e}),this.state.height!==a&&this.setState({height:a})}},this.handleResize=(0,d.sg)(this.resize,250),this.handleMainClick=()=>{this.isMobile()&&this.state.mobileIsSidebarOpen&&this.mainRef.current&&this.setState({mobileIsSidebarOpen:!1})},this.onSidebarToggleMobile=()=>{this.setState((e=>({mobileIsSidebarOpen:!e.mobileIsSidebarOpen})))},this.onSidebarToggleDesktop=()=>{this.setState((e=>({desktopIsSidebarOpen:!e.desktopIsSidebarOpen})))};const{isManagedSidebar:a,defaultManagedSidebarIsOpen:i}=e,t=!a||i;this.state={desktopIsSidebarOpen:t,mobileIsSidebarOpen:!1,mobileView:!1,width:null,height:null}}componentDidMount(){const{isManagedSidebar:e,onPageResize:a}=this.props;if(e||a){this.observer=(0,u.N)(this.pageRef.current,this.handleResize);const e=this.mainRef.current;e&&(e.addEventListener("mousedown",this.handleMainClick),e.addEventListener("touchstart",this.handleMainClick)),this.resize()}}componentWillUnmount(){const{isManagedSidebar:e,onPageResize:a}=this.props;if(e||a){this.observer();const e=this.mainRef.current;e&&(e.removeEventListener("mousedown",this.handleMainClick),e.removeEventListener("touchstart",this.handleMainClick))}}render(){const e=this.props,{breadcrumb:a,isBreadcrumbWidthLimited:i,className:o,children:b,header:u,sidebar:S,notificationDrawer:f,isNotificationDrawerExpanded:v,onNotificationDrawerExpand:w,isTertiaryNavWidthLimited:N,skipToContent:k,role:O,mainContainerId:B,isManagedSidebar:A,defaultManagedSidebarIsOpen:P,onPageResize:E,getBreakpoint:y,getVerticalBreakpoint:M,mainAriaLabel:C,mainTabIndex:T,mainComponent:x,tertiaryNav:I,isTertiaryNavGrouped:R,isBreadcrumbGrouped:W,additionalGroupedContent:z,groupProps:L,breadcrumbProps:_}=e,D=(0,t.__rest)(e,["breadcrumb","isBreadcrumbWidthLimited","className","children","header","sidebar","notificationDrawer","isNotificationDrawerExpanded","onNotificationDrawerExpand","isTertiaryNavWidthLimited","skipToContent","role","mainContainerId","isManagedSidebar","defaultManagedSidebarIsOpen","onPageResize","getBreakpoint","getVerticalBreakpoint","mainAriaLabel","mainTabIndex","mainComponent","tertiaryNav","isTertiaryNavGrouped","isBreadcrumbGrouped","additionalGroupedContent","groupProps","breadcrumbProps"]),{mobileView:V,mobileIsSidebarOpen:G,desktopIsSidebarOpen:j,width:q,height:Q}=this.state,F={isManagedSidebar:A,onSidebarToggle:V?this.onSidebarToggleMobile:this.onSidebarToggleDesktop,isSidebarOpen:V?G:j,width:q,height:Q,getBreakpoint:y,getVerticalBreakpoint:M};let $=null;I&&N?$=s.createElement("div",{className:(0,n.css)(r.A.pageMainNav,r.A.modifiers.limitWidth)},s.createElement("div",{className:(0,n.css)(r.A.pageMainBody)},I)):I&&($=s.createElement("div",{className:(0,n.css)(r.A.pageMainNav)},I));const K=a?s.createElement("section",{className:(0,n.css)(r.A.pageMainBreadcrumb,i&&r.A.modifiers.limitWidth,(0,d.ay)(null==_?void 0:_.stickyOnBreakpoint,r.A,"sticky-",M(Q),!0))},i?s.createElement("div",{className:(0,n.css)(r.A.pageMainBody)},a):a):null,H=R||W||z?s.createElement(g,Object.assign({},L),R&&$,W&&K,z):null,J=x,U=s.createElement(J,{ref:this.mainRef,role:O,id:B,className:(0,n.css)(r.A.pageMain),tabIndex:T,"aria-label":C},H,!R&&$,!W&&K,b),X=s.createElement(l.X,null,f);return s.createElement(p.qK,{value:F},s.createElement("div",Object.assign({ref:this.pageRef},D,{className:(0,n.css)(r.A.page,null!==q&&null!==Q&&"pf-m-resize-observer",null!==q&&`pf-m-breakpoint-${y(q)}`,null!==Q&&`pf-m-height-breakpoint-${M(Q)}`,o)}),k,u,S,f&&s.createElement("div",{className:(0,n.css)(r.A.pageDrawer)},s.createElement(c._s,{isExpanded:v,onExpand:e=>w(e)},s.createElement(h.z,{panelContent:X},s.createElement(m.J,null,U)))),!f&&U))}}S.displayName="Page",S.defaultProps={isManagedSidebar:!1,isBreadcrumbWidthLimited:!1,defaultManagedSidebarIsOpen:!0,mainTabIndex:-1,isNotificationDrawerExpanded:!1,onNotificationDrawerExpand:()=>null,mainComponent:"main",getBreakpoint:d._y,getVerticalBreakpoint:d.Yo};const f=e=>{var{className:a="",children:i,isWidthLimited:o,stickyOnBreakpoint:l,hasShadowTop:c=!1,hasShadowBottom:h=!1,hasOverflowScroll:m=!1,"aria-label":g}=e,b=(0,t.__rest)(e,["className","children","isWidthLimited","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:u,getVerticalBreakpoint:S}=s.useContext(p.NQ);return s.useEffect((()=>{m&&!g&&console.warn("PageBreadcrumb: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[m,g]),s.createElement("section",Object.assign({className:(0,n.css)(r.A.pageMainBreadcrumb,(0,d.ay)(l,r.A,"sticky-",S(u),!0),o&&r.A.modifiers.limitWidth,c&&r.A.modifiers.shadowTop,h&&r.A.modifiers.shadowBottom,m&&r.A.modifiers.overflowScroll,a)},m&&{tabIndex:0},{"aria-label":g},b),o&&s.createElement("div",{className:(0,n.css)(r.A.pageMainBody)},i),!o&&i)};f.displayName="PageBreadcrumb";const v={isSidebarOpen:!0},w=s.createContext(v),N=e=>{var{className:a="",children:i,isSidebarOpen:o=!0,theme:d="dark",id:l="page-sidebar"}=e,c=(0,t.__rest)(e,["className","children","isSidebarOpen","theme","id"]);return s.createElement(p.rP,null,(({isManagedSidebar:e,isSidebarOpen:t})=>{const h=e?t:o;return s.createElement("div",Object.assign({id:l,className:(0,n.css)(r.A.pageSidebar,"light"===d&&r.A.modifiers.light,h&&r.A.modifiers.expanded,!h&&r.A.modifiers.collapsed,a),"aria-hidden":!h},c),s.createElement(w.Provider,{value:{isSidebarOpen:h}},i))}))};N.displayName="PageSidebar";const k=e=>{var{children:a,className:i,usePageInsets:o,isFilled:d}=e,l=(0,t.__rest)(e,["children","className","usePageInsets","isFilled"]);return s.createElement("div",Object.assign({className:(0,n.css)(r.A.pageSidebarBody,o&&r.A.modifiers.pageInsets,!1===d&&r.A.modifiers.noFill,!0===d&&r.A.modifiers.fill,i)},l),a)};k.displayName="PageSidebarBody";var O=i(63802);const B=e=>{var{className:a="",children:i,isWidthLimited:o,stickyOnBreakpoint:l,hasShadowTop:c=!1,hasShadowBottom:h=!1,hasOverflowScroll:m=!1,"aria-label":g}=e,b=(0,t.__rest)(e,["className","children","isWidthLimited","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:u,getVerticalBreakpoint:S}=s.useContext(p.NQ);return s.useEffect((()=>{m&&!g&&console.warn("PageNavigation: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[m,g]),s.createElement("div",Object.assign({className:(0,n.css)(r.A.pageMainNav,(0,d.ay)(l,r.A,"sticky-",S(u),!0),o&&r.A.modifiers.limitWidth,c&&r.A.modifiers.shadowTop,h&&r.A.modifiers.shadowBottom,m&&r.A.modifiers.overflowScroll,a)},m&&{tabIndex:0,role:"region","aria-label":g},b),o&&s.createElement("div",{className:(0,n.css)(r.A.pageMainBody)},i),!o&&i)};B.displayName="PageNavigation";var A=i(72583);const P=e=>{var{children:a,isSidebarOpen:i=!0,onSidebarToggle:r=()=>{},id:n="nav-toggle"}=e,o=(0,t.__rest)(e,["children","isSidebarOpen","onSidebarToggle","id"]);return s.createElement(p.rP,null,(({isManagedSidebar:e,onSidebarToggle:t,isSidebarOpen:d})=>{const l=e?t:r,c=e?d:i;return s.createElement(A.$n,Object.assign({id:n,onClick:l,"aria-label":"Side navigation toggle","aria-expanded":c?"true":"false",variant:A.Ak.plain},o),a)}))};P.displayName="PageToggleButton"},86893:()=>{}}]);
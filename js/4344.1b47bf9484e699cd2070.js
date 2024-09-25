"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4344],{25701:(e,a,t)=>{t.d(a,{Z:()=>b});var n=t(66029),i=t.n(n),o=t(72853),r=t(28191),l=t(92298),d=t(15627),p=t(79851),s=t(34512),c=t(68774),m=t(68340),g=t(47173),f=t(15265);const v=(0,t(77232).QM)({iconMinWidth:{minWidth:"48px"}}),b=({title:e,subtitle:a,linkProps:t,icon:n,label:b,breadcrumbs:h=null,actionMenu:u,ouiaId:k="ContentHeader"})=>{const y=v();return i().createElement(o.NP,{variant:"light"},h&&i().createElement("div",{className:"pf-v5-u-mb-md"},h),i().createElement(r.k,null,n&&i().createElement(i().Fragment,null,i().createElement(l.B,{alignSelf:{default:"alignSelfCenter"},className:`${y.iconMinWidth}`},n),i().createElement(d.i,{orientation:{default:"vertical"}})),i().createElement(l.B,{flex:{default:"flex_1"}},i().createElement(p.P,{hasGutter:!0},i().createElement(s.J,null,i().createElement(c.D,null,i().createElement(m.x,{className:"pf-v5-u-mb-sm",component:"h1",ouiaId:`${k}-title`},e))),b&&i().createElement(s.J,null,b),i().createElement(s.J,{isFilled:!0}),u&&i().createElement(s.J,null,u)),i().createElement(c.D,null,i().createElement(m.x,{component:"p",ouiaId:`${k}-subtitle`},a),t&&i().createElement(g.zx,Object.assign({variant:g.Wu.link,ouiaId:`${k}-link-button`,isInline:!0,icon:t.isExternal?i().createElement(f.LA,null):null,iconPosition:"end"},t),t.label)))))}},55218:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(66029),i=t.n(n),o=t(80236),r=t(47173),l=t(93149);const d=e=>{var{isOpen:a,onConfirm:t,onClose:d,children:p,confirmButtonLabel:s="Confirm",cancelButtonLabel:c="Cancel",variant:m=o.v.small,titleIconVariant:g="warning",withCheckbox:f=!1,checkboxLabel:v="I understand that this action cannot be undone",confirmButtonVariant:b=r.Wu.primary,ouiaId:h="WarningModal"}=e,u=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)a.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[k,y]=(0,n.useState)(!1);return i().createElement(o.u,Object.assign({variant:m,isOpen:a,onClose:d,onEscapePress:d,titleIconVariant:g,actions:[i().createElement(r.zx,{ouiaId:`${h}-confirm-button`,key:"confirm",variant:b,onClick:()=>{null==t||t(),y(!1)},isDisabled:f&&!k},s),i().createElement(r.zx,{ouiaId:`${h}-cancel-button`,key:"cancel",variant:r.Wu.link,onClick:d},c)],ouiaId:h},u),p,f?i().createElement(l.X,{isChecked:k,onChange:(e,a)=>y(a),label:v,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${h}-confirm-checkbox`}):null)}},44344:(e,a,t)=>{t.d(a,{yW:()=>u.Z,Te:()=>b}),t(55218);var n=t(66029),i=t.n(n),o=t(77232);(0,o.QM)({emptyStateUnavailable:{color:"var(--pf-global--danger-color--100)","& svg":{color:"var(--pf-global--danger-color--100)"}},emptyStateLinkButton:{padding:"0"}}),(0,o.QM)({buttonTagCount:{color:"var(--pf-v5-global--icon--Color--light)",display:"flex",alignItems:"center"},tagText:{marginLeft:"var(--pf-v5-global--spacer--sm)",fontSize:"var(--pf-v5-global--FontSize--sm)"}}),t(12913),(0,o.QM)({shortcut:{marginRight:"var(--pf-v5-global--spacer--lg)"}}),(0,o.QM)({shortcutGridItem:{textAlign:"right",marginRight:"var(--pf-v5-global--spacer--sm)"}}),t(34537),(0,o.QM)({fullHeightCard:{height:"100%"},image:{marginRight:"var(--pf-v5-global--spacer--md)",width:48}}),(0,o.QM)({icon404:{height:"150px"},fillPolygon:{fill:"#fff",fillRule:"evenodd"},fillPaths:{fillRule:"evenodd"},iconOpacity:{opacity:.5},masking:{mask:"url(#mask)"}}),t(93820),(0,o.QM)({multiContentCardHeadingBorder:{borderBottom:"var(--pf-v5-global--BorderWidth--sm) solid var(--pf-v5-global--disabled-color--200)"},multiContentCardLeftBorder:e=>({borderLeft:`var(--pf-v5-global--BorderWidth--lg) solid var(--pf-v5-global--${e}-color--100)`})}),(0,o.QM)({logSnippet:{marginLeft:"var(--pf-v5-global--spacer--sm)",padding:"var(--pf-v5-global--spacer--sm) 0 var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--sm)",backgroundColor:"var(--pf-v5-global--BackgroundColor--100)"},variantBorderColor:e=>({borderLeft:`var(--pf-v5-global--BorderWidth--md) solid var(--pf-v5-global--${e}-color--100)`}),statusMessage:{marginBottom:"var(--pf-v5-global--spacer--sm)"}});var r=t(43047),l=t(9947),d=t(67880),p=t(43049),s=t(75106),c=t(49739),m=t(83826),g=t(80315),f=t(47173);const v=(0,o.QM)({errorIcon:{fill:"var(--pf-v5-global--danger-color--100)"},errorDescription:{margin:"auto"}}),b=e=>{var{errorTitle:a="Something went wrong",errorDescription:t,defaultErrorDescription:n,customFooter:o,ouiaId:b="ErrorState"}=e,h=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)a.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(e,["errorTitle","errorDescription","defaultErrorDescription","customFooter","ouiaId"]);const u=v();return i().createElement(l.u,Object.assign({variant:l.I.lg},h),i().createElement(d.t,{titleText:i().createElement(i().Fragment,null,a),icon:i().createElement(p.k,{className:u.errorIcon,icon:r.$O,"data-ouia-component-id":`${b}-icon`}),headingLevel:"h4","data-ouia-component-id":`${b}-header`}),i().createElement(s.B,{"data-ouia-component-id":`${b}-body`},i().createElement(c.K,null,t?i().createElement(m.v,{className:u.errorDescription},t):n)),i().createElement(g.O,{"data-ouia-component-id":`${b}-footer`},o||(document.referrer?i().createElement(f.zx,{variant:"primary",onClick:()=>history.back(),ouiaId:`${b}-back-button`},"Return to last page"):i().createElement(f.zx,{variant:"primary",component:"a",href:".",target:"_blank",rel:"noopener noreferrer",ouiaId:`${b}-home-button`},"Go to home page"))))};var h;t(68340),(0,o.QM)({errorStack:{fontFamily:"monospace",fontSize:"var(--pf-v5-global--icon--FontSize--md)",textAlign:"left",backgroundColor:"white",borderStyle:"solid",borderColor:"var(--pf-v5-global--BackgroundColor--dark-300)",overflowWrap:"break-word",padding:"var(--pf-v5-global--spacer--sm)"}}),t(38779),t(35373),(0,o.QM)({expandableSectionToggle:{"& > .pf-v5-c-expandable-section__toggle":{margin:"auto"}}}),n.Component,function(e){e.KEBAB="plain",e.DROPDOWN="default"}(h||(h={})),(0,o.QM)({detailsPageHeaderSplit:{alignItems:"center"}});var u=t(25701);(0,o.QM)({closeButton:{float:"inline-end",padding:"10px 14px"}});(0,o.QM)({battery:{display:"inline-block","line-height":0,"& svg":{position:"relative",top:"var(--pf-v5-global--spacer--sm)",height:"1.75rem"}},batteryDefault:{"& svg":{"& path":{fill:"var(--pf-v5-global--icon--Color--light)"}}},batteryLow:{"& svg":{"& path":{fill:"var(--pf-v5-global--success-color--100)"}}},batteryMedium:{"& svg":{"& path":{fill:"var(--pf-v5-global--warning-color--100)"}}},batteryHigh:{"& svg":{"& path":{fill:"var(--pf-v5-global--palette--orange-300)"}}},batteryCritical:{"& svg":{"& path":{fill:"var(--pf-v5-global--danger-color--100)"}}},batteryLineColor:{"& svg":{"& path":{stroke:"var(--pf-v5-global--BorderColor--100)"}}}}),(0,o.QM)({ansible:{"& svg":{height:"var(--pf-v5-global--FontSize--xl)",position:"relative",top:"0.25rem"}},ansibleSupported:{"& .st0":{fill:"var(--pf-v5-global--info-color--100)"}},ansibleUnsupported:{"& .st0, .st1, .st2":{fill:"var(--pf-v5-global--disabled-color--100)",cursor:"not-allowed"}}})},31495:(e,a,t)=>{t.d(a,{z1:()=>r});var n=t(66029),i=t(80164);const o={isManagedSidebar:!1,isSidebarOpen:!1,onSidebarToggle:()=>null,width:null,height:null,getBreakpoint:i.iu,getVerticalBreakpoint:i.xb},r=n.createContext(o);r.Provider,r.Consumer},72853:(e,a,t)=>{t.d(a,{NP:()=>g});var n=t(65353),i=t(66029);t(92084);const o={avatar:"pf-v5-c-avatar",brand:"pf-v5-c-brand",button:"pf-v5-c-button",contextSelector:"pf-v5-c-context-selector",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",masthead:"pf-v5-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",pageInsets:"pf-m-page-insets",insetNone:"pf-m-inset-none",fill:"pf-m-fill",noFill:"pf-m-no-fill",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-v5-c-nav",notificationBadge:"pf-v5-c-notification-badge",page:"pf-v5-c-page",pageDrawer:"pf-v5-c-page__drawer",pageHeader:"pf-v5-c-page__header",pageHeaderBrand:"pf-v5-c-page__header-brand",pageHeaderBrandLink:"pf-v5-c-page__header-brand-link",pageHeaderBrandToggle:"pf-v5-c-page__header-brand-toggle",pageHeaderNav:"pf-v5-c-page__header-nav",pageHeaderTools:"pf-v5-c-page__header-tools",pageHeaderToolsGroup:"pf-v5-c-page__header-tools-group",pageHeaderToolsItem:"pf-v5-c-page__header-tools-item",pageMain:"pf-v5-c-page__main",pageMainBody:"pf-v5-c-page__main-body",pageMainBreadcrumb:"pf-v5-c-page__main-breadcrumb",pageMainDrawer:"pf-v5-c-page__main-drawer",pageMainGroup:"pf-v5-c-page__main-group",pageMainNav:"pf-v5-c-page__main-nav",pageMainSection:"pf-v5-c-page__main-section",pageMainSubnav:"pf-v5-c-page__main-subnav",pageMainTabs:"pf-v5-c-page__main-tabs",pageMainWizard:"pf-v5-c-page__main-wizard",pageSidebar:"pf-v5-c-page__sidebar",pageSidebarBody:"pf-v5-c-page__sidebar-body",themeDark:"pf-v5-theme-dark"};var r,l,d=t(38296),p=t(80164),s=t(31495);!function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(r||(r={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(l||(l={}));const c={[l.default]:o.pageMainSection,[l.nav]:o.pageMainNav,[l.subNav]:o.pageMainSubnav,[l.breadcrumb]:o.pageMainBreadcrumb,[l.tabs]:o.pageMainTabs,[l.wizard]:o.pageMainWizard},m={[r.default]:"",[r.light]:o.modifiers.light,[r.dark]:o.modifiers.dark_200,[r.darker]:o.modifiers.dark_100},g=e=>{var{className:a="",children:t,variant:r="default",type:g="default",padding:f,isFilled:v,isWidthLimited:b=!1,isCenterAligned:h=!1,stickyOnBreakpoint:u,hasShadowTop:k=!1,hasShadowBottom:y=!1,hasOverflowScroll:O=!1,"aria-label":_,component:x="section"}=e,w=(0,n.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:S,getVerticalBreakpoint:B}=i.useContext(s.z1);i.useEffect((()=>{O&&!_&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[O,_]);const E=x;return i.createElement(E,Object.assign({},w,{className:(0,d.css)(c[g],(0,p.wt)(f,o),(0,p.wt)(u,o,"sticky-",B(S),!0),m[r],!1===v&&o.modifiers.noFill,!0===v&&o.modifiers.fill,b&&o.modifiers.limitWidth,b&&h&&g!==l.subNav&&o.modifiers.alignCenter,k&&o.modifiers.shadowTop,y&&o.modifiers.shadowBottom,O&&o.modifiers.overflowScroll,a)},O&&{tabIndex:0},{"aria-label":_}),b&&i.createElement("div",{className:(0,d.css)(o.pageMainBody)},t),!b&&t)};g.displayName="PageSection"},68774:(e,a,t)=>{t.d(a,{D:()=>l});var n=t(65353),i=t(66029),o=t(62873),r=t(38296);const l=e=>{var{children:a,className:t="",isVisited:l=!1}=e,d=(0,n.__rest)(e,["children","className","isVisited"]);return i.createElement("div",Object.assign({},d,{className:(0,r.css)(o.Z.content,l&&o.Z.modifiers.visited,t)}),a)};l.displayName="TextContent"},79851:(e,a,t)=>{t.d(a,{P:()=>l});var n=t(65353),i=t(66029),o=t(89059),r=t(38296);const l=e=>{var{hasGutter:a=!1,isWrappable:t=!1,className:l="",children:d=null,component:p="div"}=e,s=(0,n.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const c=p;return i.createElement(c,Object.assign({},s,{className:(0,r.css)(o.Z.split,a&&o.Z.modifiers.gutter,t&&o.Z.modifiers.wrap,l)}),d)};l.displayName="Split"},34512:(e,a,t)=>{t.d(a,{J:()=>l});var n=t(65353),i=t(66029),o=t(89059),r=t(38296);const l=e=>{var{isFilled:a=!1,className:t="",children:l=null}=e,d=(0,n.__rest)(e,["isFilled","className","children"]);return i.createElement("div",Object.assign({},d,{className:(0,r.css)(o.Z.splitItem,a&&o.Z.modifiers.fill,t)}),l)};l.displayName="SplitItem"},89059:(e,a,t)=>{t.d(a,{Z:()=>n}),t(16166);const n={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-v5-l-split",splitItem:"pf-v5-l-split__item"}}}]);
//# sourceMappingURL=../sourcemaps/4344.f78b93f07ce8ad1c4847834fb6c7d1a8.js.map
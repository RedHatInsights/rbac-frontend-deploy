(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8970],{60281:(e,t,a)=>{"use strict";a.d(t,{A:()=>b});var n=a(44914),l=a.n(n),r=a(63802),i=a(96998),o=a(96553),s=a(15322),c=a(30666),m=a(93973),d=a(51976),p=a(22069),g=a(72583),u=a(40167);const f=(0,a(23313).MA)({iconMinWidth:{minWidth:"48px"}}),b=({title:e,subtitle:t,linkProps:a,icon:n,label:b,breadcrumbs:h=null,actionMenu:v,ouiaId:E="ContentHeader"})=>{const k=f();return l().createElement(r.d8,{variant:"light"},h&&l().createElement("div",{className:"pf-v5-u-mb-md"},h),l().createElement(i.s,null,n&&l().createElement(l().Fragment,null,l().createElement(o.Z,{alignSelf:{default:"alignSelfCenter"},className:`${k.iconMinWidth}`},n),l().createElement(s.c,{orientation:{default:"vertical"}})),l().createElement(o.Z,{flex:{default:"flex_1"}},l().createElement(c.B,{hasGutter:!0},l().createElement(m.o,null,l().createElement(d.n,null,l().createElement(p.E,{className:"pf-v5-u-mb-sm",component:"h1",ouiaId:`${E}-title`},e))),b&&l().createElement(m.o,null,b),l().createElement(m.o,{isFilled:!0}),v&&l().createElement(m.o,null,v)),l().createElement(d.n,null,l().createElement(p.E,{component:"p",ouiaId:`${E}-subtitle`},t),a&&l().createElement(g.$n,Object.assign({variant:g.Ak.link,ouiaId:`${E}-link-button`,isInline:!0,icon:a.isExternal?l().createElement(u.ExternalLinkAltIcon,null):null,iconPosition:"end"},a),a.label)))))}},54282:(e,t,a)=>{"use strict";a.d(t,{NQ:()=>i,R1:()=>r,qK:()=>o,rP:()=>s});var n=a(44914),l=a(47931);const r={isManagedSidebar:!1,isSidebarOpen:!1,onSidebarToggle:()=>null,width:null,height:null,getBreakpoint:l._y,getVerticalBreakpoint:l.Yo},i=n.createContext(r),o=i.Provider,s=i.Consumer},63802:(e,t,a)=>{"use strict";a.d(t,{d8:()=>g,yp:()=>l,zC:()=>n});var n,l,r=a(8674),i=a(44914),o=a(73408),s=a(33774),c=a(47931),m=a(54282);!function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(n||(n={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(l||(l={}));const d={[l.default]:o.A.pageMainSection,[l.nav]:o.A.pageMainNav,[l.subNav]:o.A.pageMainSubnav,[l.breadcrumb]:o.A.pageMainBreadcrumb,[l.tabs]:o.A.pageMainTabs,[l.wizard]:o.A.pageMainWizard},p={[n.default]:"",[n.light]:o.A.modifiers.light,[n.dark]:o.A.modifiers.dark_200,[n.darker]:o.A.modifiers.dark_100},g=e=>{var{className:t="",children:a,variant:n="default",type:g="default",padding:u,isFilled:f,isWidthLimited:b=!1,isCenterAligned:h=!1,stickyOnBreakpoint:v,hasShadowTop:E=!1,hasShadowBottom:k=!1,hasOverflowScroll:_=!1,"aria-label":A,component:L="section"}=e,w=(0,r.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:y,getVerticalBreakpoint:M}=i.useContext(m.NQ);i.useEffect((()=>{_&&!A&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[_,A]);const N=L;return i.createElement(N,Object.assign({},w,{className:(0,s.css)(d[g],(0,c.ay)(u,o.A),(0,c.ay)(v,o.A,"sticky-",M(y),!0),p[n],!1===f&&o.A.modifiers.noFill,!0===f&&o.A.modifiers.fill,b&&o.A.modifiers.limitWidth,b&&h&&g!==l.subNav&&o.A.modifiers.alignCenter,E&&o.A.modifiers.shadowTop,k&&o.A.modifiers.shadowBottom,_&&o.A.modifiers.overflowScroll,t)},_&&{tabIndex:0},{"aria-label":A}),b&&i.createElement("div",{className:(0,s.css)(o.A.pageMainBody)},a),!b&&a)};g.displayName="PageSection"},51976:(e,t,a)=>{"use strict";a.d(t,{n:()=>o});var n=a(8674),l=a(44914),r=a(3056),i=a(33774);const o=e=>{var{children:t,className:a="",isVisited:o=!1}=e,s=(0,n.__rest)(e,["children","className","isVisited"]);return l.createElement("div",Object.assign({},s,{className:(0,i.css)(r.A.content,o&&r.A.modifiers.visited,a)}),t)};o.displayName="TextContent"},30666:(e,t,a)=>{"use strict";a.d(t,{B:()=>o});var n=a(8674),l=a(44914),r=a(53209),i=a(33774);const o=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:o="",children:s=null,component:c="div"}=e,m=(0,n.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const d=c;return l.createElement(d,Object.assign({},m,{className:(0,i.css)(r.A.split,t&&r.A.modifiers.gutter,a&&r.A.modifiers.wrap,o)}),s)};o.displayName="Split"},93973:(e,t,a)=>{"use strict";a.d(t,{o:()=>o});var n=a(8674),l=a(44914),r=a(53209),i=a(33774);const o=e=>{var{isFilled:t=!1,className:a="",children:o=null}=e,s=(0,n.__rest)(e,["isFilled","className","children"]);return l.createElement("div",Object.assign({},s,{className:(0,i.css)(r.A.splitItem,t&&r.A.modifiers.fill,a)}),o)};o.displayName="SplitItem"},73408:(e,t,a)=>{"use strict";a.d(t,{A:()=>n}),a(50545);const n={avatar:"pf-v5-c-avatar",brand:"pf-v5-c-brand",button:"pf-v5-c-button",contextSelector:"pf-v5-c-context-selector",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",masthead:"pf-v5-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",pageInsets:"pf-m-page-insets",insetNone:"pf-m-inset-none",fill:"pf-m-fill",noFill:"pf-m-no-fill",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-v5-c-nav",notificationBadge:"pf-v5-c-notification-badge",page:"pf-v5-c-page",pageDrawer:"pf-v5-c-page__drawer",pageHeader:"pf-v5-c-page__header",pageHeaderBrand:"pf-v5-c-page__header-brand",pageHeaderBrandLink:"pf-v5-c-page__header-brand-link",pageHeaderBrandToggle:"pf-v5-c-page__header-brand-toggle",pageHeaderNav:"pf-v5-c-page__header-nav",pageHeaderTools:"pf-v5-c-page__header-tools",pageHeaderToolsGroup:"pf-v5-c-page__header-tools-group",pageHeaderToolsItem:"pf-v5-c-page__header-tools-item",pageMain:"pf-v5-c-page__main",pageMainBody:"pf-v5-c-page__main-body",pageMainBreadcrumb:"pf-v5-c-page__main-breadcrumb",pageMainDrawer:"pf-v5-c-page__main-drawer",pageMainGroup:"pf-v5-c-page__main-group",pageMainNav:"pf-v5-c-page__main-nav",pageMainSection:"pf-v5-c-page__main-section",pageMainSubnav:"pf-v5-c-page__main-subnav",pageMainTabs:"pf-v5-c-page__main-tabs",pageMainWizard:"pf-v5-c-page__main-wizard",pageSidebar:"pf-v5-c-page__sidebar",pageSidebarBody:"pf-v5-c-page__sidebar-body",themeDark:"pf-v5-theme-dark"}},53209:(e,t,a)=>{"use strict";a.d(t,{A:()=>n}),a(83696);const n={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-v5-l-split",splitItem:"pf-v5-l-split__item"}},38187:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var n=a(44914),l=a.n(n),r=a(18010),i=a(79994),o=a(86458),s=a(26046),c=a(52892),m=a(32392),d=a(76260),p=a(22780),g=a(42932),u=a(36966),f=a(17228),b=a(7248),h=a(60281),v=a(6442),E=a(40335),k=a(38263),_=a.n(k),A=a(2571),L=a.n(A),w=a(18891),y=a.n(w),M=a(36271),N=a(97192),T=a(76792),x=a(83001),S=a(58471),O=a(49573);const I=()=>{const e=(0,v.A)(),[t,a]=(0,n.useState)(!0);return l().createElement(l().Fragment,null,l().createElement(h.A,{title:e.formatMessage(E.A.overview),subtitle:e.formatMessage(E.A.overviewSubtitle),icon:l().createElement("img",{src:"/apps/frontend-assets/rbac-landing/rbac-landing-icon.svg",className:"rbac-overview-icon",alt:"RBAC landing page icon"}),linkProps:{label:e.formatMessage(E.A.learnMore),isExternal:!0,to:"https://access.redhat.com/documentation/en-us/red_hat_hybrid_cloud_console/2023/html/user_access_configuration_guide_for_role-based_access_control_rbac/index"}}),l().createElement(f.PageSection,null,l().createElement(o.Card,{"aria-label":"Get started card",className:"pf-u-mb-lg","data-ouia-component-id":"get-started-card"},l().createElement(d.Grid,{hasGutter:!0},l().createElement(d.GridItem,{sm:12,md:6,lg:8},l().createElement(o.CardTitle,null,l().createElement(b.Title,{headingLevel:"h2","data-ouia-component-id":"get-started-title"},e.formatMessage(E.A.overviewHeroTitle))),l().createElement(o.CardBody,null,l().createElement("p",{className:"pf-u-mb-sm"},e.formatMessage(E.A.overviewHeroSubtitle)),l().createElement(u.List,null,l().createElement(u.ListItem,null,e.formatMessage(E.A.overviewHeroListItem1)),l().createElement(u.ListItem,null,e.formatMessage(E.A.overviewHeroListItem2)),l().createElement(u.ListItem,null,e.formatMessage(E.A.overviewHeroListItem3)))),l().createElement(o.CardFooter,null,l().createElement(r.ActionList,null,l().createElement(r.ActionListItem,null,l().createElement(S.A,{to:O.A.groups.link},l().createElement(i.Button,{variant:"primary",size:"lg","aria-label":"View groups",ouiaId:"getstarted-view-groups-button"},e.formatMessage(E.A.viewGroupsBtn)))),l().createElement(r.ActionListItem,null,l().createElement(S.A,{to:O.A.roles.link},l().createElement(i.Button,{variant:"secondary","aria-label":"View roles",size:"lg",ouiaId:"getstarted-view-roles-button"},e.formatMessage(E.A.viewRolesBtn))))))),l().createElement(d.GridItem,{md:6,lg:4,className:"pf-u-display-none pf-u-display-block-on-md pf-c-card__cover-image"}))),l().createElement(s.DataList,{"aria-label":"Supporting features list",className:"pf-u-mb-lg"},l().createElement(s.DataListItem,{"aria-labelledby":"item1",isExpanded:t,className:t&&"active-item"},l().createElement(s.DataListItemRow,{className:"pf-u-align-items-center"},l().createElement(s.DataListToggle,{isExpanded:t,"aria-controls":"about-default-groups","data-ouia-component-id":"about-toggle",onClick:()=>a(!t)}),l().createElement(s.DataListItemCells,{dataListCells:[l().createElement(s.DataListCell,{key:"about-default-groups-key","data-ouia-component-id":"about-card"},l().createElement("div",null,l().createElement(m.Flex,{className:"pf-u-flex-nowrap"},l().createElement(m.FlexItem,{className:"pf-u-align-self-center"},l().createElement(p.Icon,{size:"lg"},l().createElement(L(),{className:"pf-u-primary-color-100"}))),l().createElement(c.Divider,{orientation:{default:"vertical"}}),l().createElement(m.FlexItem,{className:"pf-u-align-self-center"},l().createElement(b.Title,{headingLevel:"h4","data-ouia-component-id":"about-title"},e.formatMessage(E.A.overviewSupportingFeaturesTitle))))))]})),l().createElement(s.DataListContent,{hasNoPadding:!0,className:"pf-v5-u-px-lg pf-v5-u-pb-xl","aria-label":"About default groups - detailed explanation",id:"about-default-groups","data-ouia-component-id":"about-view-default-group",isHidden:!t},l().createElement("p",{className:"pf-u-mb-md"},e.formatMessage(E.A.overviewSupportingFeaturesSubtitle1)),l().createElement("p",{className:"pf-u-mb-md"},e.formatMessage(E.A.overviewSupportingFeaturesSubtitle2)),l().createElement(S.A,{to:O.A.groups.link},l().createElement(i.Button,{variant:"link",isInline:!0},e.formatMessage(E.A.viewDefaultGroupsLink)))))),l().createElement(b.Title,{headingLevel:"h2",className:"pf-u-mb-md","data-ouia-component-id":"recommended-title"},e.formatMessage(E.A.recommendedContentTitle)),l().createElement(M.X,{"aria-label":"Recommended content table",className:"pf-u-mb-lg","data-ouia-component-id":"recommended-table"},l().createElement(N.N,null,l().createElement(T.Tr,{key:"row1"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(E.A.recommendedContentItem1)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"green"},e.formatMessage(E.A.labelQuickStart))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"https://console.redhat.com/iam/user-access/overview?quickstart=rbac-admin-vuln-permissions",title:"Link to Quick start - Restricting access to a service to a team"},e.formatMessage(E.A.beginQuickStartLink)," ",l().createElement(_(),null)))),l().createElement(T.Tr,{key:"row2"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(E.A.recommendedContentItem2)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"green"},e.formatMessage(E.A.labelQuickStart))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"http://console.redhat.com/iam/user-access/overview?quickstart=rbac-granular-malware-rhel-access",title:"Link to Quick start - Configuring granular permissions by service"},e.formatMessage(E.A.beginQuickStartLink)," ",l().createElement(_(),null)))),l().createElement(T.Tr,{key:"row3"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(E.A.recommendedContentItem3)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"green"},e.formatMessage(E.A.labelQuickStart))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"http://console.redhat.com/iam/user-access/overview?quickstart=rbac-read-only-vuln-permissions",title:"Link to Quick start - Configuring read-only permissions for a team"},e.formatMessage(E.A.beginQuickStartLink)," ",l().createElement(_(),null)))),l().createElement(T.Tr,{key:"row4"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(E.A.recommendedContentItem4)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"green"},e.formatMessage(E.A.labelQuickStart))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"http://console.redhat.com/iam/user-access/overview?quickstart=rbac-reducing-permissions",title:"Link to Quick start - Reducing permissions across my organization"},e.formatMessage(E.A.beginQuickStartLink)," ",l().createElement(_(),null)))),l().createElement(T.Tr,{key:"row5"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(E.A.recommendedContentItem5)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"orange"},e.formatMessage(E.A.labelDocumentation))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"https://access.redhat.com/documentation/en-us/red_hat_hybrid_cloud_console/2023/html/user_access_configuration_guide_for_role-based_access_control_rbac/index",title:"Link to User Access Configuration Guide for RBAC",target:"_blank",rel:"noreferrer"},e.formatMessage(E.A.viewDocumentationLink)," ",l().createElement(y(),null)))),l().createElement(T.Tr,{key:"row6"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(E.A.recommendedContentItem6)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"purple"},e.formatMessage(E.A.labelOtherResource))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"https://developers.redhat.com/api-catalog/api/rbac",title:"Link to RBAC API",target:"_blank",rel:"noreferrer"},e.formatMessage(E.A.viewApiSiteLink)," ",l().createElement(y(),null)))),l().createElement(T.Tr,{key:"row7"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(E.A.recommendedContentItem7)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"purple"},e.formatMessage(E.A.labelOtherResource))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"https://www.redhat.com/en/blog/role-based-access-control-red-hat-hybrid-cloud-console",title:"Link to Red Hat blog post on Console RBAC",target:"_blank",rel:"noreferrer"},e.formatMessage(E.A.readBlogPostLink)," ",l().createElement(y(),null)))))),l().createElement("a",{href:"https://console.redhat.com/settings/learning-resources?quickstart=rbac-admin-vuln-permissions",className:"pf-u-mb-lg","data-ouia-component-id":"overview-view-all-resources-button"},e.formatMessage(E.A.iamLearningResourcesLink))))}},50545:()=>{},36752:()=>{},83696:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8970.3837772563683b82eb435725826200e9.js.map
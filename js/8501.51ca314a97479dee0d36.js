(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8501],{60281:(e,a,t)=>{"use strict";t.d(a,{A:()=>b});var n=t(93345),l=t.n(n),r=t(63802),i=t(96998),o=t(96553),s=t(15322),c=t(30666),m=t(93973),d=t(51976),p=t(22069),g=t(72583),u=t(40167);const f=(0,t(23313).MA)({iconMinWidth:{minWidth:"48px"}}),b=({title:e,subtitle:a,linkProps:t,icon:n,label:b,breadcrumbs:v=null,actionMenu:h,ouiaId:k="ContentHeader"})=>{const E=f();return l().createElement(r.d8,{variant:"light"},v&&l().createElement("div",{className:"pf-v5-u-mb-md"},v),l().createElement(i.s,null,n&&l().createElement(l().Fragment,null,l().createElement(o.Z,{alignSelf:{default:"alignSelfCenter"},className:`${E.iconMinWidth}`},n),l().createElement(s.c,{orientation:{default:"vertical"}})),l().createElement(o.Z,{flex:{default:"flex_1"}},l().createElement(c.B,{hasGutter:!0},l().createElement(m.o,null,l().createElement(d.n,null,l().createElement(p.E,{className:"pf-v5-u-mb-sm",component:"h1",ouiaId:`${k}-title`},e))),b&&l().createElement(m.o,null,b),l().createElement(m.o,{isFilled:!0}),h&&l().createElement(m.o,null,h)),l().createElement(d.n,null,l().createElement(p.E,{component:"p",ouiaId:`${k}-subtitle`},a),t&&l().createElement(g.$n,Object.assign({variant:g.Ak.link,ouiaId:`${k}-link-button`,isInline:!0,icon:t.isExternal?l().createElement(u.ExternalLinkAltIcon,null):null,iconPosition:"end"},t),t.label)))))}},54282:(e,a,t)=>{"use strict";t.d(a,{NQ:()=>i,R1:()=>r,qK:()=>o,rP:()=>s});var n=t(93345),l=t(47931);const r={isManagedSidebar:!1,isSidebarOpen:!1,onSidebarToggle:()=>null,width:null,height:null,getBreakpoint:l._y,getVerticalBreakpoint:l.Yo},i=n.createContext(r),o=i.Provider,s=i.Consumer},63802:(e,a,t)=>{"use strict";t.d(a,{d8:()=>g,yp:()=>l,zC:()=>n});var n,l,r=t(8674),i=t(93345),o=t(73408),s=t(33774),c=t(47931),m=t(54282);!function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(n||(n={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(l||(l={}));const d={[l.default]:o.A.pageMainSection,[l.nav]:o.A.pageMainNav,[l.subNav]:o.A.pageMainSubnav,[l.breadcrumb]:o.A.pageMainBreadcrumb,[l.tabs]:o.A.pageMainTabs,[l.wizard]:o.A.pageMainWizard},p={[n.default]:"",[n.light]:o.A.modifiers.light,[n.dark]:o.A.modifiers.dark_200,[n.darker]:o.A.modifiers.dark_100},g=e=>{var{className:a="",children:t,variant:n="default",type:g="default",padding:u,isFilled:f,isWidthLimited:b=!1,isCenterAligned:v=!1,stickyOnBreakpoint:h,hasShadowTop:k=!1,hasShadowBottom:E=!1,hasOverflowScroll:A=!1,"aria-label":w,component:_="section"}=e,M=(0,r.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:y,getVerticalBreakpoint:L}=i.useContext(m.NQ);i.useEffect((()=>{A&&!w&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[A,w]);const S=_;return i.createElement(S,Object.assign({},M,{className:(0,s.css)(d[g],(0,c.ay)(u,o.A),(0,c.ay)(h,o.A,"sticky-",L(y),!0),p[n],!1===f&&o.A.modifiers.noFill,!0===f&&o.A.modifiers.fill,b&&o.A.modifiers.limitWidth,b&&v&&g!==l.subNav&&o.A.modifiers.alignCenter,k&&o.A.modifiers.shadowTop,E&&o.A.modifiers.shadowBottom,A&&o.A.modifiers.overflowScroll,a)},A&&{tabIndex:0},{"aria-label":w}),b&&i.createElement("div",{className:(0,s.css)(o.A.pageMainBody)},t),!b&&t)};g.displayName="PageSection"},51976:(e,a,t)=>{"use strict";t.d(a,{n:()=>o});var n=t(8674),l=t(93345),r=t(3056),i=t(33774);const o=e=>{var{children:a,className:t="",isVisited:o=!1}=e,s=(0,n.__rest)(e,["children","className","isVisited"]);return l.createElement("div",Object.assign({},s,{className:(0,i.css)(r.A.content,o&&r.A.modifiers.visited,t)}),a)};o.displayName="TextContent"},30666:(e,a,t)=>{"use strict";t.d(a,{B:()=>o});var n=t(8674),l=t(93345),r=t(53209),i=t(33774);const o=e=>{var{hasGutter:a=!1,isWrappable:t=!1,className:o="",children:s=null,component:c="div"}=e,m=(0,n.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const d=c;return l.createElement(d,Object.assign({},m,{className:(0,i.css)(r.A.split,a&&r.A.modifiers.gutter,t&&r.A.modifiers.wrap,o)}),s)};o.displayName="Split"},93973:(e,a,t)=>{"use strict";t.d(a,{o:()=>o});var n=t(8674),l=t(93345),r=t(53209),i=t(33774);const o=e=>{var{isFilled:a=!1,className:t="",children:o=null}=e,s=(0,n.__rest)(e,["isFilled","className","children"]);return l.createElement("div",Object.assign({},s,{className:(0,i.css)(r.A.splitItem,a&&r.A.modifiers.fill,t)}),o)};o.displayName="SplitItem"},73408:(e,a,t)=>{"use strict";t.d(a,{A:()=>n}),t(50545);const n={avatar:"pf-v5-c-avatar",brand:"pf-v5-c-brand",button:"pf-v5-c-button",contextSelector:"pf-v5-c-context-selector",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",masthead:"pf-v5-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",pageInsets:"pf-m-page-insets",insetNone:"pf-m-inset-none",fill:"pf-m-fill",noFill:"pf-m-no-fill",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-v5-c-nav",notificationBadge:"pf-v5-c-notification-badge",page:"pf-v5-c-page",pageDrawer:"pf-v5-c-page__drawer",pageHeader:"pf-v5-c-page__header",pageHeaderBrand:"pf-v5-c-page__header-brand",pageHeaderBrandLink:"pf-v5-c-page__header-brand-link",pageHeaderBrandToggle:"pf-v5-c-page__header-brand-toggle",pageHeaderNav:"pf-v5-c-page__header-nav",pageHeaderTools:"pf-v5-c-page__header-tools",pageHeaderToolsGroup:"pf-v5-c-page__header-tools-group",pageHeaderToolsItem:"pf-v5-c-page__header-tools-item",pageMain:"pf-v5-c-page__main",pageMainBody:"pf-v5-c-page__main-body",pageMainBreadcrumb:"pf-v5-c-page__main-breadcrumb",pageMainDrawer:"pf-v5-c-page__main-drawer",pageMainGroup:"pf-v5-c-page__main-group",pageMainNav:"pf-v5-c-page__main-nav",pageMainSection:"pf-v5-c-page__main-section",pageMainSubnav:"pf-v5-c-page__main-subnav",pageMainTabs:"pf-v5-c-page__main-tabs",pageMainWizard:"pf-v5-c-page__main-wizard",pageSidebar:"pf-v5-c-page__sidebar",pageSidebarBody:"pf-v5-c-page__sidebar-body",themeDark:"pf-v5-theme-dark"}},53209:(e,a,t)=>{"use strict";t.d(a,{A:()=>n}),t(83696);const n={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-v5-l-split",splitItem:"pf-v5-l-split__item"}},85660:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>G});var n=t(93345),l=t.n(n),r=t(18010),i=t(79994),o=t(86458),s=t(26046),c=t(52892),m=t(32392),d=t(76260),p=t(22780),g=t(42932),u=t(36966),f=t(17228),b=t(7248),v=t(60281),h=t(8604),k=t(40335),E=t(38263),A=t.n(E),w=t(2571),_=t.n(w),M=t(18891),y=t.n(M),L=t(36271),S=t(97192),T=t(76792),x=t(83001),N=t(58471),I=t(49573),C=t(78755),B=t.n(C),O=t(62448),R=t(25396),H=t(20380),W=t(79300),z=t(32690),P=t(40748);const F=()=>{const[e,a]=l().useState(!1),[t,n]=l().useState(!1),[r,o]=l().useState(!1),s=(0,h.tz)(),c=()=>{a(!1),n(!1)},m=l().createElement(l().Fragment,null,l().createElement(b.Title,{ouiaId:"enable-workspaces-modal-header",headingLevel:"h1",size:b.TitleSizes["2xl"]},s.formatMessage(k.A.enableWorkspacesWizardTitle)),l().createElement(P.Text,{component:P.TextVariants.p,ouiaId:"enable-workspaces-modal-description"},s.formatMessage(k.A.enableWorkspacesWizardDesc))),d=l().createElement(l().Fragment,null,l().createElement(H.Modal,{variant:H.ModalVariant.large,header:m,isOpen:t,onClose:c,onEscapePress:c,actions:[l().createElement(i.Button,{key:"confirm",ouiaId:"enable-workspace-modal-confirm-button",variant:i.ButtonVariant.primary,onClick:()=>{n(!1),o(!0),a(!1)},isDisabled:!e},s.formatMessage(k.A.confirm)),l().createElement(i.Button,{key:"cancel",ouiaId:"enable-workspace-modal-cancel-button",variant:i.ButtonVariant.link,onClick:c},s.formatMessage(k.A.cancel))]},l().createElement(W.Stack,{hasGutter:!0},l().createElement(W.StackItem,null,l().createElement("span",null,s.formatMessage(k.A.enableWorkspacesWizardBodyPart1))),l().createElement(W.StackItem,null,l().createElement("span",null,l().createElement("b",null,s.formatMessage(k.A.enableWorkspacesWizardBodyPart2Header))," ",s.formatMessage(k.A.enableWorkspacesWizardBodyPart2))),l().createElement(W.StackItem,null,l().createElement("span",null,l().createElement("b",null,s.formatMessage(k.A.enableWorkspacesWizardBodyPart3Header))," ",s.formatMessage(k.A.enableWorkspacesWizardBodyPart3))),l().createElement(W.StackItem,null,l().createElement(R.Checkbox,{isChecked:e,onChange:(e,t)=>a(t),label:s.formatMessage(k.A.enableWorkspacesWizardCheckboxLabel),ouiaId:"enable-workspace-checkbox",id:"enable-workspace-checkbox"})))));return l().createElement("div",null,r?l().createElement(O.Alert,{ouiaId:"enable-workspaces-success-alert",variant:"success",title:s.formatMessage(k.A.workspacesSuccessAlertTitle)}):l().createElement(O.Alert,{variant:"custom",title:s.formatMessage(k.A.workspacesAlertTitle),customIcon:l().createElement(B(),null),ouiaId:"enable-workspaces-alert",className:"enable-workspace-alert"},l().createElement(z.Switch,{className:"pf-v5-u-mt-xs",label:s.formatMessage(k.A.workspacesAlertSwitchLabel),isChecked:t||r,ouiaId:"enable-workspaces-switch",onChange:(e,a)=>n(a),id:"enable-workspaces-switch"})),d)};var D=t(63219);const G=()=>{const e=(0,h.tz)(),[a,t]=(0,n.useState)(!0),E=(0,D.useFlag)("platform.rbac.workspaces"),w=(0,D.useFlag)("platform.rbac.workspaces-eligible");return l().createElement(l().Fragment,null,w&&!E&&l().createElement(F,null),l().createElement(v.A,{title:e.formatMessage(k.A.overview),subtitle:e.formatMessage(k.A.overviewSubtitle),icon:l().createElement("img",{src:"/apps/frontend-assets/rbac-landing/rbac-landing-icon.svg",className:"rbac-overview-icon",alt:"RBAC landing page icon"}),linkProps:{label:e.formatMessage(k.A.learnMore),isExternal:!0,to:"https://access.redhat.com/documentation/en-us/red_hat_hybrid_cloud_console/2023/html/user_access_configuration_guide_for_role-based_access_control_rbac/index"}}),l().createElement(f.PageSection,null,l().createElement(o.Card,{"aria-label":"Get started card",className:"pf-v5-u-mb-lg","data-ouia-component-id":"get-started-card"},l().createElement(d.Grid,{hasGutter:!0},l().createElement(d.GridItem,{sm:12,md:6,lg:8},l().createElement(o.CardTitle,null,l().createElement(b.Title,{headingLevel:"h2","data-ouia-component-id":"get-started-title"},e.formatMessage(k.A.overviewHeroTitle))),l().createElement(o.CardBody,null,l().createElement("p",{className:"pf-v5-u-mb-sm"},e.formatMessage(k.A.overviewHeroSubtitle)),l().createElement(u.List,null,l().createElement(u.ListItem,null,e.formatMessage(k.A.overviewHeroListItem1)),l().createElement(u.ListItem,null,e.formatMessage(k.A.overviewHeroListItem2)),l().createElement(u.ListItem,null,e.formatMessage(k.A.overviewHeroListItem3)))),l().createElement(o.CardFooter,null,l().createElement(r.ActionList,null,l().createElement(r.ActionListItem,null,l().createElement(N.A,{to:I.A.groups.link},l().createElement(i.Button,{variant:"primary",size:"lg","aria-label":"View groups",ouiaId:"getstarted-view-groups-button"},e.formatMessage(k.A.viewGroupsBtn)))),l().createElement(r.ActionListItem,null,l().createElement(N.A,{to:I.A.roles.link},l().createElement(i.Button,{variant:"secondary","aria-label":"View roles",size:"lg",ouiaId:"getstarted-view-roles-button"},e.formatMessage(k.A.viewRolesBtn))))))),l().createElement(d.GridItem,{md:6,lg:4,className:"pf-v5-u-display-none pf-v5-u-display-block-on-md pf-c-card__cover-image"}))),l().createElement(s.DataList,{"aria-label":"Supporting features list",className:"pf-v5-u-mb-lg"},l().createElement(s.DataListItem,{"aria-labelledby":"item1",isExpanded:a,className:a&&"active-item"},l().createElement(s.DataListItemRow,{className:"pf-v5-u-align-items-center"},l().createElement(s.DataListToggle,{isExpanded:a,"aria-controls":"about-default-groups","data-ouia-component-id":"about-toggle",onClick:()=>t(!a)}),l().createElement(s.DataListItemCells,{dataListCells:[l().createElement(s.DataListCell,{key:"about-default-groups-key","data-ouia-component-id":"about-card"},l().createElement("div",null,l().createElement(m.Flex,{className:"pf-v5-u-flex-nowrap"},l().createElement(m.FlexItem,{className:"pf-v5-u-align-self-center"},l().createElement(p.Icon,{size:"lg"},l().createElement(_(),{className:"pf-v5-u-primary-color-100"}))),l().createElement(c.Divider,{orientation:{default:"vertical"}}),l().createElement(m.FlexItem,{className:"pf-v5-u-align-self-center"},l().createElement(b.Title,{headingLevel:"h4","data-ouia-component-id":"about-title"},e.formatMessage(k.A.overviewSupportingFeaturesTitle))))))]})),l().createElement(s.DataListContent,{hasNoPadding:!0,className:"pf-v5-u-px-lg pf-v5-u-pb-xl","aria-label":"About default groups - detailed explanation",id:"about-default-groups","data-ouia-component-id":"about-view-default-group",isHidden:!a},l().createElement("p",{className:"pf-v5-u-mb-md"},e.formatMessage(k.A.overviewSupportingFeaturesSubtitle1)),l().createElement("p",{className:"pf-v5-u-mb-md"},e.formatMessage(k.A.overviewSupportingFeaturesSubtitle2)),l().createElement(N.A,{to:I.A.groups.link},l().createElement(i.Button,{variant:"link",isInline:!0},e.formatMessage(k.A.viewDefaultGroupsLink)))))),l().createElement(b.Title,{headingLevel:"h2",className:"pf-v5-u-mb-md","data-ouia-component-id":"recommended-title"},e.formatMessage(k.A.recommendedContentTitle)),l().createElement(L.X,{"aria-label":"Recommended content table",className:"pf-v5-u-mb-lg","data-ouia-component-id":"recommended-table"},l().createElement(S.N,null,l().createElement(T.Tr,{key:"row1"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(k.A.recommendedContentItem1)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"green"},e.formatMessage(k.A.labelQuickStart))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"https://console.redhat.com/iam/user-access/overview?quickstart=rbac-admin-vuln-permissions",title:"Link to Quick start - Restricting access to a service to a team"},e.formatMessage(k.A.beginQuickStartLink)," ",l().createElement(A(),null)))),l().createElement(T.Tr,{key:"row2"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(k.A.recommendedContentItem2)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"green"},e.formatMessage(k.A.labelQuickStart))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"http://console.redhat.com/iam/user-access/overview?quickstart=rbac-granular-malware-rhel-access",title:"Link to Quick start - Configuring granular permissions by service"},e.formatMessage(k.A.beginQuickStartLink)," ",l().createElement(A(),null)))),l().createElement(T.Tr,{key:"row3"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(k.A.recommendedContentItem3)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"green"},e.formatMessage(k.A.labelQuickStart))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"http://console.redhat.com/iam/user-access/overview?quickstart=rbac-read-only-vuln-permissions",title:"Link to Quick start - Configuring read-only permissions for a team"},e.formatMessage(k.A.beginQuickStartLink)," ",l().createElement(A(),null)))),l().createElement(T.Tr,{key:"row4"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(k.A.recommendedContentItem4)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"green"},e.formatMessage(k.A.labelQuickStart))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"http://console.redhat.com/iam/user-access/overview?quickstart=rbac-reducing-permissions",title:"Link to Quick start - Reducing permissions across my organization"},e.formatMessage(k.A.beginQuickStartLink)," ",l().createElement(A(),null)))),l().createElement(T.Tr,{key:"row5"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(k.A.recommendedContentItem5)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"orange"},e.formatMessage(k.A.labelDocumentation))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"https://access.redhat.com/documentation/en-us/red_hat_hybrid_cloud_console/2023/html/user_access_configuration_guide_for_role-based_access_control_rbac/index",title:"Link to User Access Configuration Guide for RBAC",target:"_blank",rel:"noreferrer"},e.formatMessage(k.A.viewDocumentationLink)," ",l().createElement(y(),null)))),l().createElement(T.Tr,{key:"row6"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(k.A.recommendedContentItem6)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"purple"},e.formatMessage(k.A.labelOtherResource))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"https://developers.redhat.com/api-catalog/api/rbac",title:"Link to RBAC API",target:"_blank",rel:"noreferrer"},e.formatMessage(k.A.viewApiSiteLink)," ",l().createElement(y(),null)))),l().createElement(T.Tr,{key:"row7"},l().createElement(x.Td,{dataLabel:"Recommended content label"},e.formatMessage(k.A.recommendedContentItem7)),l().createElement(x.Td,{dataLabel:"Recommended content category"},l().createElement(g.Label,{color:"purple"},e.formatMessage(k.A.labelOtherResource))),l().createElement(x.Td,{dataLabel:"Recommended content link",className:"pf-v5-u-text-align-right"},l().createElement("a",{href:"https://www.redhat.com/en/blog/role-based-access-control-red-hat-hybrid-cloud-console",title:"Link to Red Hat blog post on Console RBAC",target:"_blank",rel:"noreferrer"},e.formatMessage(k.A.readBlogPostLink)," ",l().createElement(y(),null)))))),l().createElement("a",{href:"https://console.redhat.com/settings/learning-resources?quickstart=rbac-admin-vuln-permissions",className:"pf-v5-u-mb-lg","data-ouia-component-id":"overview-view-all-resources-button"},e.formatMessage(k.A.iamLearningResourcesLink))))}},50545:()=>{},36752:()=>{},83696:()=>{}}]);
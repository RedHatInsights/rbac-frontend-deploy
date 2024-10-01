"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[6756],{78357:(e,a,t)=>{t.d(a,{Wt:()=>p,DR:()=>s});var n=t(66029),l=t.n(n),o=t(84457),i=t(56787),r=t(23971),d=t(8643),c=t(88706);const s={all:"all",none:"none",page:"page",nonePage:"nonePage"},p=e=>{var{isDataPaginated:a=!0,canSelectAll:t,pageSelected:p,pagePartiallySelected:m,pageCount:g,selectedCount:f=0,totalCount:u=0,ouiaId:h="BulkSelect",onSelect:v,menuToggleCheckboxProps:b}=e,k=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}(e,["isDataPaginated","canSelectAll","pageSelected","pagePartiallySelected","pageCount","selectedCount","totalCount","ouiaId","onSelect","menuToggleCheckboxProps"]);const[y,O]=(0,n.useState)(!1),C=(0,n.useMemo)((()=>l().createElement(l().Fragment,null,l().createElement(o.h,{ouiaId:`${h}-select-none`,value:s.none,key:s.none},"Select none (0)"),a&&l().createElement(o.h,{ouiaId:`${h}-select-page`,value:s.page,key:s.page},"Select page"+(g?` (${g})`:"")),t&&l().createElement(o.h,{ouiaId:`${h}-select-all`,value:s.all,key:s.all},"Select all"+(u?` (${u})`:"")))),[a,t,h,g,u]),S=a?s.page:s.all,x=a?s.nonePage:s.none,_=()=>O(!y);return l().createElement(i.L,Object.assign({shouldFocusToggleOnSelect:!0,ouiaId:`${h}-dropdown`,onSelect:(e,a)=>{O(!y),null==v||v(a)},isOpen:y,onOpenChange:e=>O(e),toggle:e=>l().createElement(r.O,{ref:e,isExpanded:y,onClick:_,"aria-label":"Bulk select toggle","data-ouia-component-id":`${h}-toggle`,splitButtonOptions:{items:[l().createElement(d.O,Object.assign({ouiaId:`${h}-checkbox`,id:`${h}-checkbox`,key:"bulk-select-checkbox","aria-label":`Select ${S}`,isChecked:a&&m||!a&&f>0&&f<u?null:p||f===u,onChange:e=>null==v?void 0:v(e&&null!==e?S:x)},b)),f>0?l().createElement("span",{onClick:_,"data-ouia-component-id":`${h}-text`,key:"bulk-select-text"},`${f} selected`):null]}})},k),l().createElement(c.s,null,C))}},25701:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(66029),l=t.n(n),o=t(72853),i=t(28191),r=t(92298),d=t(15627),c=t(79851),s=t(34512),p=t(68774),m=t(68340),g=t(47173),f=t(15265);const u=(0,t(77232).QM)({iconMinWidth:{minWidth:"48px"}}),h=({title:e,subtitle:a,linkProps:t,icon:n,label:h,breadcrumbs:v=null,actionMenu:b,ouiaId:k="ContentHeader"})=>{const y=u();return l().createElement(o.NP,{variant:"light"},v&&l().createElement("div",{className:"pf-v5-u-mb-md"},v),l().createElement(i.k,null,n&&l().createElement(l().Fragment,null,l().createElement(r.B,{alignSelf:{default:"alignSelfCenter"},className:`${y.iconMinWidth}`},n),l().createElement(d.i,{orientation:{default:"vertical"}})),l().createElement(r.B,{flex:{default:"flex_1"}},l().createElement(c.P,{hasGutter:!0},l().createElement(s.J,null,l().createElement(p.D,null,l().createElement(m.x,{className:"pf-v5-u-mb-sm",component:"h1",ouiaId:`${k}-title`},e))),h&&l().createElement(s.J,null,h),l().createElement(s.J,{isFilled:!0}),b&&l().createElement(s.J,null,b)),l().createElement(p.D,null,l().createElement(m.x,{component:"p",ouiaId:`${k}-subtitle`},a),t&&l().createElement(g.zx,Object.assign({variant:g.Wu.link,ouiaId:`${k}-link-button`,isInline:!0,icon:t.isExternal?l().createElement(f.LA,null):null,iconPosition:"end"},t),t.label)))))}},55218:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(66029),l=t.n(n),o=t(80236),i=t(47173),r=t(93149);const d=e=>{var{isOpen:a,onConfirm:t,onClose:d,children:c,confirmButtonLabel:s="Confirm",cancelButtonLabel:p="Cancel",variant:m=o.v.small,titleIconVariant:g="warning",withCheckbox:f=!1,checkboxLabel:u="I understand that this action cannot be undone",confirmButtonVariant:h=i.Wu.primary,ouiaId:v="WarningModal"}=e,b=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[k,y]=(0,n.useState)(!1);return l().createElement(o.u,Object.assign({variant:m,isOpen:a,onClose:d,onEscapePress:d,titleIconVariant:g,actions:[l().createElement(i.zx,{ouiaId:`${v}-confirm-button`,key:"confirm",variant:h,onClick:()=>{null==t||t(),y(!1)},isDisabled:f&&!k},s),l().createElement(i.zx,{ouiaId:`${v}-cancel-button`,key:"cancel",variant:i.Wu.link,onClick:d},p)],ouiaId:v},b),c,f?l().createElement(r.X,{isChecked:k,onChange:(e,a)=>y(a),label:u,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${v}-confirm-checkbox`}):null)}},56756:(e,a,t)=>{t.d(a,{yW:()=>b.Z,Te:()=>h}),t(55218);var n=t(66029),l=t.n(n),o=t(77232);(0,o.QM)({emptyStateUnavailable:{color:"var(--pf-global--danger-color--100)","& svg":{color:"var(--pf-global--danger-color--100)"}},emptyStateLinkButton:{padding:"0"}}),(0,o.QM)({buttonTagCount:{color:"var(--pf-v5-global--icon--Color--light)",display:"flex",alignItems:"center"},tagText:{marginLeft:"var(--pf-v5-global--spacer--sm)",fontSize:"var(--pf-v5-global--FontSize--sm)"}}),t(12913),(0,o.QM)({shortcut:{marginRight:"var(--pf-v5-global--spacer--lg)"}}),(0,o.QM)({shortcutGridItem:{textAlign:"right",marginRight:"var(--pf-v5-global--spacer--sm)"}}),t(34537),(0,o.QM)({fullHeightCard:{height:"100%"},image:{marginRight:"var(--pf-v5-global--spacer--md)",width:48}}),(0,o.QM)({icon404:{height:"150px"},fillPolygon:{fill:"#fff",fillRule:"evenodd"},fillPaths:{fillRule:"evenodd"},iconOpacity:{opacity:.5},masking:{mask:"url(#mask)"}}),t(93820),(0,o.QM)({multiContentCardHeadingBorder:{borderBottom:"var(--pf-v5-global--BorderWidth--sm) solid var(--pf-v5-global--disabled-color--200)"},multiContentCardLeftBorder:e=>({borderLeft:`var(--pf-v5-global--BorderWidth--lg) solid var(--pf-v5-global--${e}-color--100)`})}),(0,o.QM)({logSnippet:{marginLeft:"var(--pf-v5-global--spacer--sm)",padding:"var(--pf-v5-global--spacer--sm) 0 var(--pf-v5-global--spacer--sm) var(--pf-v5-global--spacer--sm)",backgroundColor:"var(--pf-v5-global--BackgroundColor--100)"},variantBorderColor:e=>({borderLeft:`var(--pf-v5-global--BorderWidth--md) solid var(--pf-v5-global--${e}-color--100)`}),statusMessage:{marginBottom:"var(--pf-v5-global--spacer--sm)"}});var i=t(43047),r=t(9947),d=t(67880),c=t(43049),s=t(75106),p=t(49739),m=t(83826),g=t(80315),f=t(47173);const u=(0,o.QM)({errorIcon:{fill:"var(--pf-v5-global--danger-color--100)"},errorDescription:{margin:"auto"}}),h=e=>{var{errorTitle:a="Something went wrong",errorDescription:t,defaultErrorDescription:n,customFooter:o,ouiaId:h="ErrorState"}=e,v=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}(e,["errorTitle","errorDescription","defaultErrorDescription","customFooter","ouiaId"]);const b=u();return l().createElement(r.u,Object.assign({variant:r.I.lg},v),l().createElement(d.t,{titleText:l().createElement(l().Fragment,null,a),icon:l().createElement(c.k,{className:b.errorIcon,icon:i.$O,"data-ouia-component-id":`${h}-icon`}),headingLevel:"h4","data-ouia-component-id":`${h}-header`}),l().createElement(s.B,{"data-ouia-component-id":`${h}-body`},l().createElement(p.K,null,t?l().createElement(m.v,{className:b.errorDescription},t):n)),l().createElement(g.O,{"data-ouia-component-id":`${h}-footer`},o||(document.referrer?l().createElement(f.zx,{variant:"primary",onClick:()=>history.back(),ouiaId:`${h}-back-button`},"Return to last page"):l().createElement(f.zx,{variant:"primary",component:"a",href:".",target:"_blank",rel:"noopener noreferrer",ouiaId:`${h}-home-button`},"Go to home page"))))};var v;t(68340),(0,o.QM)({errorStack:{fontFamily:"monospace",fontSize:"var(--pf-v5-global--icon--FontSize--md)",textAlign:"left",backgroundColor:"white",borderStyle:"solid",borderColor:"var(--pf-v5-global--BackgroundColor--dark-300)",overflowWrap:"break-word",padding:"var(--pf-v5-global--spacer--sm)"}}),t(38779),t(35373),(0,o.QM)({expandableSectionToggle:{"& > .pf-v5-c-expandable-section__toggle":{margin:"auto"}}}),n.Component,function(e){e.KEBAB="plain",e.DROPDOWN="default"}(v||(v={})),(0,o.QM)({detailsPageHeaderSplit:{alignItems:"center"}});var b=t(25701);(0,o.QM)({closeButton:{float:"inline-end",padding:"10px 14px"}}),t(78357);(0,o.QM)({battery:{display:"inline-block","line-height":0,"& svg":{position:"relative",top:"var(--pf-v5-global--spacer--sm)",height:"1.75rem"}},batteryDefault:{"& svg":{"& path":{fill:"var(--pf-v5-global--icon--Color--light)"}}},batteryLow:{"& svg":{"& path":{fill:"var(--pf-v5-global--success-color--100)"}}},batteryMedium:{"& svg":{"& path":{fill:"var(--pf-v5-global--warning-color--100)"}}},batteryHigh:{"& svg":{"& path":{fill:"var(--pf-v5-global--palette--orange-300)"}}},batteryCritical:{"& svg":{"& path":{fill:"var(--pf-v5-global--danger-color--100)"}}},batteryLineColor:{"& svg":{"& path":{stroke:"var(--pf-v5-global--BorderColor--100)"}}}}),(0,o.QM)({ansible:{"& svg":{height:"var(--pf-v5-global--FontSize--xl)",position:"relative",top:"0.25rem"}},ansibleSupported:{"& .st0":{fill:"var(--pf-v5-global--info-color--100)"}},ansibleUnsupported:{"& .st0, .st1, .st2":{fill:"var(--pf-v5-global--disabled-color--100)",cursor:"not-allowed"}}})},8643:(e,a,t)=>{t.d(a,{O:()=>d});var n=t(65353),l=t(66029),o=t(54783),i=t(38296),r=t(62472);class d extends l.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.target.checked,e)},this.calculateChecked=()=>{const{isChecked:e,defaultChecked:a}=this.props;return null!==e&&(void 0!==e?e:a)},this.state={ouiaStateId:(0,r.getDefaultOUIAId)(d.displayName)}}render(){const e=this.props,{className:a,isValid:t,isDisabled:c,isChecked:s,children:p,ouiaId:m,ouiaSafe:g,onChange:f,defaultChecked:u,id:h}=e,v=(0,n.__rest)(e,["className","isValid","isDisabled","isChecked","children","ouiaId","ouiaSafe","onChange","defaultChecked","id"]),b=p&&l.createElement("span",{className:(0,i.css)(o.Z.checkLabel,a),"aria-hidden":"true",id:h},p);return l.createElement("label",{className:(0,i.css)(o.Z.check,!p&&o.Z.modifiers.standalone,a)},l.createElement("input",Object.assign({className:(0,i.css)(o.Z.checkInput)},void 0!==this.calculateChecked()&&{onChange:this.handleChange},{name:h,type:"checkbox",ref:e=>e&&(e.indeterminate=null===s),"aria-invalid":!t,disabled:c},void 0!==u?{defaultChecked:u}:{checked:this.calculateChecked()},(0,r.getOUIAProps)(d.displayName,void 0!==m?m:this.state.ouiaStateId,g),v)),b)}}d.displayName="MenuToggleCheckbox",d.defaultProps={isValid:!0,isDisabled:!1,onChange:()=>{}}},31495:(e,a,t)=>{t.d(a,{z1:()=>i});var n=t(66029),l=t(80164);const o={isManagedSidebar:!1,isSidebarOpen:!1,onSidebarToggle:()=>null,width:null,height:null,getBreakpoint:l.iu,getVerticalBreakpoint:l.xb},i=n.createContext(o);i.Provider,i.Consumer},72853:(e,a,t)=>{t.d(a,{NP:()=>g,Dk:()=>i});var n=t(65353),l=t(66029);t(92084);const o={avatar:"pf-v5-c-avatar",brand:"pf-v5-c-brand",button:"pf-v5-c-button",contextSelector:"pf-v5-c-context-selector",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",masthead:"pf-v5-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",pageInsets:"pf-m-page-insets",insetNone:"pf-m-inset-none",fill:"pf-m-fill",noFill:"pf-m-no-fill",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-v5-c-nav",notificationBadge:"pf-v5-c-notification-badge",page:"pf-v5-c-page",pageDrawer:"pf-v5-c-page__drawer",pageHeader:"pf-v5-c-page__header",pageHeaderBrand:"pf-v5-c-page__header-brand",pageHeaderBrandLink:"pf-v5-c-page__header-brand-link",pageHeaderBrandToggle:"pf-v5-c-page__header-brand-toggle",pageHeaderNav:"pf-v5-c-page__header-nav",pageHeaderTools:"pf-v5-c-page__header-tools",pageHeaderToolsGroup:"pf-v5-c-page__header-tools-group",pageHeaderToolsItem:"pf-v5-c-page__header-tools-item",pageMain:"pf-v5-c-page__main",pageMainBody:"pf-v5-c-page__main-body",pageMainBreadcrumb:"pf-v5-c-page__main-breadcrumb",pageMainDrawer:"pf-v5-c-page__main-drawer",pageMainGroup:"pf-v5-c-page__main-group",pageMainNav:"pf-v5-c-page__main-nav",pageMainSection:"pf-v5-c-page__main-section",pageMainSubnav:"pf-v5-c-page__main-subnav",pageMainTabs:"pf-v5-c-page__main-tabs",pageMainWizard:"pf-v5-c-page__main-wizard",pageSidebar:"pf-v5-c-page__sidebar",pageSidebarBody:"pf-v5-c-page__sidebar-body",themeDark:"pf-v5-theme-dark"};var i,r,d=t(38296),c=t(80164),s=t(31495);!function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(i||(i={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(r||(r={}));const p={[r.default]:o.pageMainSection,[r.nav]:o.pageMainNav,[r.subNav]:o.pageMainSubnav,[r.breadcrumb]:o.pageMainBreadcrumb,[r.tabs]:o.pageMainTabs,[r.wizard]:o.pageMainWizard},m={[i.default]:"",[i.light]:o.modifiers.light,[i.dark]:o.modifiers.dark_200,[i.darker]:o.modifiers.dark_100},g=e=>{var{className:a="",children:t,variant:i="default",type:g="default",padding:f,isFilled:u,isWidthLimited:h=!1,isCenterAligned:v=!1,stickyOnBreakpoint:b,hasShadowTop:k=!1,hasShadowBottom:y=!1,hasOverflowScroll:O=!1,"aria-label":C,component:S="section"}=e,x=(0,n.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:_,getVerticalBreakpoint:w}=l.useContext(s.z1);l.useEffect((()=>{O&&!C&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[O,C]);const E=S;return l.createElement(E,Object.assign({},x,{className:(0,d.css)(p[g],(0,c.wt)(f,o),(0,c.wt)(b,o,"sticky-",w(_),!0),m[i],!1===u&&o.modifiers.noFill,!0===u&&o.modifiers.fill,h&&o.modifiers.limitWidth,h&&v&&g!==r.subNav&&o.modifiers.alignCenter,k&&o.modifiers.shadowTop,y&&o.modifiers.shadowBottom,O&&o.modifiers.overflowScroll,a)},O&&{tabIndex:0},{"aria-label":C}),h&&l.createElement("div",{className:(0,d.css)(o.pageMainBody)},t),!h&&t)};g.displayName="PageSection"},68774:(e,a,t)=>{t.d(a,{D:()=>r});var n=t(65353),l=t(66029),o=t(62873),i=t(38296);const r=e=>{var{children:a,className:t="",isVisited:r=!1}=e,d=(0,n.__rest)(e,["children","className","isVisited"]);return l.createElement("div",Object.assign({},d,{className:(0,i.css)(o.Z.content,r&&o.Z.modifiers.visited,t)}),a)};r.displayName="TextContent"},79851:(e,a,t)=>{t.d(a,{P:()=>r});var n=t(65353),l=t(66029),o=t(89059),i=t(38296);const r=e=>{var{hasGutter:a=!1,isWrappable:t=!1,className:r="",children:d=null,component:c="div"}=e,s=(0,n.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const p=c;return l.createElement(p,Object.assign({},s,{className:(0,i.css)(o.Z.split,a&&o.Z.modifiers.gutter,t&&o.Z.modifiers.wrap,r)}),d)};r.displayName="Split"},34512:(e,a,t)=>{t.d(a,{J:()=>r});var n=t(65353),l=t(66029),o=t(89059),i=t(38296);const r=e=>{var{isFilled:a=!1,className:t="",children:r=null}=e,d=(0,n.__rest)(e,["isFilled","className","children"]);return l.createElement("div",Object.assign({},d,{className:(0,i.css)(o.Z.splitItem,a&&o.Z.modifiers.fill,t)}),r)};r.displayName="SplitItem"},89059:(e,a,t)=>{t.d(a,{Z:()=>n}),t(16166);const n={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-v5-l-split",splitItem:"pf-v5-l-split__item"}}}]);
//# sourceMappingURL=../sourcemaps/6756.6bcea77861162a6b7c653c46f9497ecc.js.map
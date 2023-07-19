"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[9213],{40400:(e,t,n)=>{n.d(t,{IU:()=>c,Jh:()=>r});var r,a=n(70655),l=n(92950);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));let o=0;function c({name:e,xOffset:t=0,yOffset:n=0,width:c,height:i,svgPath:s}){var u;return u=class extends l.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{size:o,color:u,title:m,noVerticalAlign:d}=e,p=(0,a.__rest)(e,["size","color","title","noVerticalAlign"]),g=Boolean(m),f=(e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}})(o),v=-.125*Number.parseFloat(f),b=d?null:{verticalAlign:`${v}em`},E=[t,n,c,i].join(" ");return l.createElement("svg",Object.assign({style:b,fill:u,height:f,width:f,viewBox:E,"aria-labelledby":g?this.id:null,"aria-hidden":!g||null,role:"img"},p),g&&l.createElement("title",{id:this.id},m),l.createElement("path",{d:s}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},u}},69957:(e,t,n)=>{n.d(t,{LP:()=>l,RI:()=>a,ZP:()=>o});var r=n(40400);const a={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},l=(0,r.IU)(a),o=l},91290:(e,t,n)=>{n.d(t,{ZP:()=>o,iC:()=>l,sN:()=>a});var r=n(40400);const a={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},l=(0,r.IU)(a),o=l},39173:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(85893),a=n(94184),l=n.n(a),o=n(76857),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const i=function(e){var t=e.className,n=e.title,a=l()(t);return(0,r.jsx)(o.Title,c({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},93736:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(46801),a=n(65126);const l=function(e){var t=(0,r.useNavigate)();return function(n,r){return t((0,a.n)(n,e),r)}}},76137:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(92950),a=n.n(r),l=n(45697),o=n.n(l),c=n(46801),i=n(76857),s=n(19571),u=function(e){return e?a().createElement(i.Breadcrumb,null,Object.values(e).map((function(e,t){return e.title?a().createElement(i.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&a().createElement(c.NavLink,{end:!0,to:e.to},e.title)||e.title):a().createElement(s.Vj,{key:t})}))):null};u.propTypes={breadcrumbs:o().object};const m=u},51999:(e,t,n)=>{n.d(t,{Q:()=>b,y:()=>E});var r=n(92950),a=n.n(r),l=n(45697),o=n.n(l),c=n(76857),i=n(19571),s=n(76137),u=n(85893),m=n(94184),d=n.n(m);const p=a().createContext("light");var g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},g.apply(this,arguments)};const f=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),a=d()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,u.jsx)(p.Consumer,{children:function(e){var t,l;void 0===e&&(e="light");var o=d()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return(0,u.jsx)("section",g({},r,{className:"".concat(a," ").concat(o),"widget-type":"InsightsPageHeader"},{children:n}))}})};var v=n(39173),b=function(e){var t=e.children,n=e.breadcrumbs;return a().createElement(r.Fragment,null,n&&a().createElement("section",{className:"pf-c-page__main-breadcrumb"},a().createElement(s.Z,n)),a().createElement(f,{className:"rbac-page-header"},t))};b.propTypes={children:o().oneOfType([o().arrayOf(o().node),o().node]).isRequired,breadcrumbs:o().array,paddingBottom:o().bool},b.defaultProps={paddingBottom:!1};var E=function(e){var t=e.title,n=e.renderTitleTag,l=e.description,o=e.children;return a().createElement(r.Fragment,null,a().createElement(c.Flex,null,a().createElement(c.FlexItem,{className:"pf-u-mb-sm"},a().createElement(v.Z,{title:t||a().createElement(i.h2,null),className:"rbac-page-header__title"})),a().createElement(c.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},n&&n())),l&&a().createElement(c.TextContent,{className:"rbac-page-header__description"},"string"==typeof l?a().createElement(c.Text,{component:c.TextVariants.p},l):l),o)};E.propTypes={title:o().node,renderTitleTag:o().func,description:o().node,children:o().oneOfType([o().node,o().arrayOf(o().node)])}},73943:(e,t,n)=>{n.d(t,{R:()=>m});var r=n(92950),a=n.n(r),l=n(45697),o=n.n(l),c=n(76857),i=n(69957),s=n(86896),u=n(30893),m=function(e){var t=e.type,n=e.isOpen,r=e.onModalCancel,l=e.onConfirmCancel,o=e.customTitle,m=e.customDescription,d=e.customPrimaryButtonTitle,p=e.customSecondaryButtonTitle,g=(0,s.Z)();return a().createElement(c.Modal,{title:a().createElement("span",{className:"rbac-c-wizard__cancel-warning-header"},a().createElement(i.ZP,{size:"md",className:"rbac-c-wizard__cancel-warning-header--icon"}),o||g.formatMessage(u.Z.exitItemCreation,{item:t})),variant:c.ModalVariant.small,className:"rbac rbac-c-wizard__cancel-warning",isOpen:n,onClose:r,actions:[a().createElement(c.Button,{ouiaId:"primary-exit-button",key:"confirm",variant:"primary",onClick:l},null!=d?d:g.formatMessage(u.Z.exit)),a().createElement(c.Button,{ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:r},null!=p?p:g.formatMessage(u.Z.stay))]},a().createElement("span",null,m||g.formatMessage(u.Z.discardedInputsWarning)," "))};m.propTypes={type:o().string,customTitle:o().node,customDescription:o().node,customPrimaryButtonTitle:o().string,customSecondaryButtonTitle:o().string,isOpen:o().bool,onModalCancel:o().func,onConfirmCancel:o().func}},19213:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(4942),a=n(87462),l=n(29439),o=n(92950),c=n.n(o),i=n(55140),s=n(46801),u=n(50533),m=n(86896),d=n(44012),p=n(91290),g=n(76857),f=n(45697),v=n.n(f),b=function(e){var t=e.tabItems,n=e.isHeader,r=(0,s.useLocation)().pathname,a=(0,s.useNavigate)(),l=t.find((function(e){var t=e.name;return r.includes(t)}));return c().createElement(g.Tabs,{className:n?"rbac-page-header__tabs":"",activeKey:l?l.eventKey:0,onSelect:function(e,n){return a(t[n].to)}},t.map((function(e){return c().createElement(g.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};b.propTypes={tabItems:v().array.isRequired,isHeader:v().bool};const E=b;var h=n(93736),y=n(51999),Z=n(73943),C=n(19756),I=n(19571),N=n(65126),O=n(74368),_=n(76137),T=n(11107),k=n(30893),x=n(4682);const M=function(){var e,t=(0,m.Z)(),n=(0,u.useDispatch)(),f=(0,h.Z)(),v=(0,s.useLocation)(),b=(0,i.Z)(),M=(0,s.useParams)().groupId,w="default-access"===M,P=[{eventKey:0,title:"Roles",name:x.Z["group-detail-roles"].link.replace(":groupId",M),to:"roles"},{eventKey:1,title:"Members",name:x.Z["group-detail-members"].link.replace(":groupId",M),to:"members"}],S=(0,u.useSelector)((function(e){var t=e.groupReducer,n=t.groups,r=t.error,a=t.systemGroup;return{pagination:n.pagination||n.meta,filters:n.filters,groupExists:r!==T.VG,systemGroupUuid:null==a?void 0:a.uuid}}),u.shallowEqual),A=S.pagination,B=S.filters,F=S.groupExists,j=S.systemGroupUuid,z=(0,u.useSelector)((function(e){var t=e.groupReducer,n=t.selectedGroup,r=t.isRecordLoading,a=t.isRecordRolesLoading;return{group:n,isFetching:r||a}}),u.shallowEqual),D=z.group,G=z.isFetching,R=(0,o.useState)(!1),L=(0,l.Z)(R,2),V=L[0],K=L[1],U=(0,o.useState)(!1),H=(0,l.Z)(U,2),q=H[0],Q=H[1],W=(0,o.useState)(!1),J=(0,l.Z)(W,2),$=J[0],X=J[1];(0,o.useEffect)((function(){n((0,C.WD)({chrome:b}));var e=w?j:M;return e&&(n((0,C.yi)(e)),b.appObjectId(e)),function(){return b.appObjectId(void 0)}}),[M,j]);var Y,ee=function(){return[{title:t.formatMessage(k.Z.groups),to:(0,T.zk)((0,N.n)(x.Z.groups.link),A,B)},F?{title:G?void 0:D.name,isActive:!0}:{title:t.formatMessage(k.Z.invalidGroup),isActive:!0}]},te=[c().createElement(g.DropdownItem,{component:c().createElement(N.Z,{onClick:function(){return Q(!1)},to:(v.pathname.includes("members")?x.Z["group-members-edit-group"]:x.Z["group-roles-edit-group"]).link.replace(":groupId",w?"default-access":M)},t.formatMessage(k.Z.edit)),key:"edit-group"}),c().createElement(g.DropdownItem,{component:c().createElement(N.Z,{to:(v.pathname.includes("members")?x.Z["group-members-remove-group"]:x.Z["group-roles-remove-group"]).link.replace(":groupId",M)},t.formatMessage(k.Z.delete)),className:"rbac-c-group__action",key:"delete-group"})];return c().createElement(o.Fragment,null,V&&c().createElement(Z.R,{type:"group",isOpen:V,customTitle:c().createElement("div",null,t.formatMessage(k.Z.restoreDefaultAccessQuestion)),customDescription:c().createElement(d.Z,(0,a.Z)({},k.Z.restoreDefaultAccessDescription,{values:{b:function(e){return c().createElement("b",null,e)}}})),customPrimaryButtonTitle:t.formatMessage(k.Z.continue),customSecondaryButtonTitle:t.formatMessage(k.Z.cancel),onModalCancel:function(){return K(!1)},onConfirmCancel:function(){n((0,C.gg)([j])).then((function(){return n((0,C.WD)({chrome:b})).then((function(){X(!1)}))})),K(!1),f(x.Z["group-detail-roles"].link).replace(":groupId","default-access")}}),F?c().createElement(o.Fragment,null,c().createElement(y.Q,{breadcrumbs:ee()},c().createElement(g.Split,{hasGutter:!0},c().createElement(g.SplitItem,{isFilled:!0},c().createElement(y.y,{title:!G&&D?c().createElement(o.Fragment,null,D.platform_default&&!D.system?(Y=D.name,c().createElement("div",{style:{display:"inline-flex"}},Y,c().createElement("div",{className:"pf-u-ml-sm"},c().createElement(g.Popover,{"aria-label":"default-group-icon",bodyContent:c().createElement(d.Z,(0,a.Z)({},k.Z.defaultAccessGroupNameChanged,{values:{b:function(e){return c().createElement("b",null,e)}}}))},c().createElement(p.ZP,{className:"rbac-default-group-info-icon"}))))):D.name):void 0,description:!G&&D?D.description:void 0})),D.platform_default&&!D.system?c().createElement(g.SplitItem,null,c().createElement("div",{className:"rbac-default-group-reset-btn"},c().createElement(g.Button,{variant:"link",onClick:function(){return K(!0)}},t.formatMessage(k.Z.restoreToDefault)),c().createElement(g.Popover,{"aria-label":"default-group-icon",position:g.PopoverPosition.bottomEnd,bodyContent:c().createElement(d.Z,(0,a.Z)({},k.Z.restoreDefaultAccessInfo,{values:{b:function(e){return c().createElement("b",null,e)}}}))},c().createElement(p.ZP,{className:"rbac-default-group-info-icon pf-u-mt-sm"})))):null,c().createElement(g.SplitItem,null,D.platform_default||D.admin_default?null:c().createElement(g.Dropdown,{ouiaId:"group-title-actions-dropdown",toggle:c().createElement(g.KebabToggle,{onToggle:function(e){return Q(e)},id:"group-actions-dropdown"}),isOpen:q,isPlain:!0,position:"right",dropdownItems:te}))),$?c().createElement(g.Alert,{variant:"info",isInline:!0,title:t.formatMessage(k.Z.defaultAccessGroupChanged),action:c().createElement(g.AlertActionCloseButton,{onClose:function(){return X(!1)}}),className:"pf-u-mb-lg pf-u-mt-sm"},c().createElement(d.Z,(0,a.Z)({},k.Z.defaultAccessGroupNameChanged,{values:{b:function(e){return c().createElement("b",null,e)}}}))):null),c().createElement(E,{isHeader:!0,tabItems:P}),c().createElement(s.Outlet,{context:(e={},(0,r.Z)(e,x.Z["group-detail-roles"].path,{onDefaultGroupChanged:X}),(0,r.Z)(e,"groupId",M),e)}),!D&&c().createElement(I.Wi,null)):c().createElement(o.Fragment,null,c().createElement("section",{className:"pf-c-page__main-breadcrumb pf-u-pb-md"},c().createElement(_.Z,ee())),c().createElement(O.Z,{title:t.formatMessage(k.Z.groupNotFound),description:[t.formatMessage(k.Z.groupDoesNotExist,{id:M})],actions:[c().createElement(g.Button,{key:"back-button",className:"pf-u-mt-xl",ouiaId:"back-button",variant:"primary","aria-label":"Back to previous page",onClick:function(){return f(-1)}},t.formatMessage(k.Z.backToPreviousPage))]})))}},44012:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(70655),a=n(92950),l=n(86896),o=n(680);function c(e){var t=(0,l.Z)(),n=t.formatMessage,r=t.textComponent,o=void 0===r?a.Fragment:r,c=e.id,i=e.description,s=e.defaultMessage,u=e.values,m=e.children,d=e.tagName,p=void 0===d?o:d,g=n({id:c,description:i,defaultMessage:s},u,{ignoreTag:e.ignoreTag});return"function"==typeof m?m(Array.isArray(g)?g:[g]):p?a.createElement(p,null,a.Children.toArray(g)):a.createElement(a.Fragment,null,g)}c.displayName="FormattedMessage";var i=a.memo(c,(function(e,t){var n=e.values,a=(0,r.__rest)(e,["values"]),l=t.values,c=(0,r.__rest)(t,["values"]);return(0,o.wU)(l,n)&&(0,o.wU)(a,c)}));i.displayName="MemoizedFormattedMessage";const s=i},74368:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(92950),a=n.n(r),l=n(76857),o=n(84747);const c=({title:e,icon:t,description:n,actions:r,...c})=>a().createElement(l.EmptyState,{variant:l.EmptyStateVariant.small,...c},a().createElement(l.EmptyStateIcon,{icon:t||o.SearchIcon}),a().createElement(l.Title,{headingLevel:"h4",size:"lg"},e),a().createElement(l.EmptyStateBody,{className:"pf-u-mb-md"},n.map(((e,t)=>a().createElement(a().Fragment,{key:t},e," ",a().createElement("br",null))))),r)}}]);
//# sourceMappingURL=../sourcemaps/9213.2003e1ba3773a868c2b5cd36eb210ace.js.map
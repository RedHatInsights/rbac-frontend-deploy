(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[3601,7664],{98614:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>s,de:()=>a,nQ:()=>o});var n=r(40400);const a={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},o=(0,n.IU)(a),s=o},69957:(e,t,r)=>{"use strict";r.d(t,{LP:()=>o,RI:()=>a,ZP:()=>s});var n=r(40400);const a={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},o=(0,n.IU)(a),s=o},15265:(e,t,r)=>{"use strict";r.d(t,{LA:()=>o,ZP:()=>s,mq:()=>a});var n=r(40400);const a={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},o=(0,n.IU)(a),s=o},80810:(e,t,r)=>{"use strict";r.d(t,{W1:()=>o,ZP:()=>s,xQ:()=>a});var n=r(40400);const a={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},o=(0,n.IU)(a),s=o},92758:(e,t,r)=>{"use strict";r.d(t,{MS:()=>l,aX:()=>i,qF:()=>c});var n=r(93433),a=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=new URLSearchParams(e.location.search),i=t.reduce((function(e,t){var r=o.getAll(t);return s(s({},e),{},(0,a.Z)({},t,r.length>1?r:r[0]))}),{});return Object.keys(r).forEach((function(e){var t=r[e];i=s(s({},i),{},(0,a.Z)({},e,Array.isArray(i[e])?(0,n.Z)(new Set([].concat((0,n.Z)(i[e]),(0,n.Z)(Array.isArray(t)?t:[t])))):(null==t?void 0:t.length)>0&&t||i[e])),Array.isArray(t)?t.forEach((function(t){return o.getAll(e).includes(t)||o.append(e,t)})):o.get(e)||t&&o.set(e,t)})),e.replace({pathname:e.location.pathname,search:o.toString()}),i},c=function(e,t){var r=new URLSearchParams(e.location.search);return t.some((function(e){return r.get(e)}))},l=function(e,t){var r=new URLSearchParams(e.location.search);Object.keys(t).forEach((function(e){return r.delete(e)})),Object.keys(t).forEach((function(e){var n=t[e];Array.isArray(n)?n.forEach((function(t){return t&&r.append(e,t)})):n&&r.set(e,n)})),e.replace({pathname:e.location.pathname,search:r.toString()})}},1227:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(29439),a=r(92950),o=r.n(a),s=r(86896),i=r(45697),c=r.n(i),l=r(30893),u=r(69957),m=r(76857),p=function(e){var t=e.title,r=e.text,i=e.onClose,c=e.onSubmit,p=e.isOpen,d=e.confirmButtonLabel,f=e.withCheckbox,g=(0,s.Z)(),b=(0,a.useState)(!1),h=(0,n.Z)(b,2),v=h[0],y=h[1];return o().createElement(m.Modal,{className:"rbac",title:o().createElement("div",null,o().createElement(u.ZP,{className:"ins-m-alert rbac-c__delete-icon"})," ",t),isOpen:p,variant:m.ModalVariant.small,onClose:i,actions:[o().createElement(m.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:f&&!v,variant:"danger",onClick:c},d),o().createElement(m.Button,{key:"cancel",ouiaId:"secondary-cancel-button",variant:"link",onClick:i},g.formatMessage(l.Z.cancel))]},o().createElement(m.Split,{hasGutter:!0},o().createElement(m.SplitItem,{isFilled:!0},o().createElement(m.Stack,{hasGutter:!0},o().createElement(m.TextContent,null,r)))),f?o().createElement(m.Checkbox,{isChecked:v,onChange:function(){return y(!v)},label:g.formatMessage(l.Z.confirmCheckMessage),id:"remove-modal-check",className:"pf-u-mt-lg"}):null)};p.propTypes={text:c().any,title:c().string,confirmButtonLabel:c().string,onSubmit:c().func,onClose:c().func,isOpen:c().bool,withCheckbox:c().bool},p.defaultProps={withCheckbox:!1};const d=p},76137:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(92950),a=r.n(n),o=r(45697),s=r.n(o),i=r(334),c=r(76857),l=r(19571),u=function(e){return e?a().createElement(c.Breadcrumb,null,Object.values(e).map((function(e,t){return e.title?a().createElement(c.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&a().createElement(i.NavLink,{exact:!0,to:e.to},e.title)||e.title):a().createElement(l.Vj,{key:t})}))):null};u.propTypes={breadcrumbs:s().object};const m=u},38376:(e,t,r)=>{"use strict";r.d(t,{Q:()=>p,y:()=>d});var n=r(92950),a=r.n(n),o=r(45697),s=r.n(o),i=r(76857),c=r(19571),l=r(76137),u=r(80123),m=r(39173),p=function(e){var t=e.children,r=e.breadcrumbs;return a().createElement(n.Fragment,null,r&&a().createElement("section",{className:"pf-c-page__main-breadcrumb"},a().createElement(l.Z,r)),a().createElement(u.Z,{className:"rbac-page-header"},t))};p.propTypes={children:s().oneOfType([s().arrayOf(s().node),s().node]).isRequired,breadcrumbs:s().array,paddingBottom:s().bool},p.defaultProps={paddingBottom:!1};var d=function(e){var t=e.title,r=e.renderTitleTag,o=e.description,s=e.children;return a().createElement(n.Fragment,null,a().createElement(i.Flex,null,a().createElement(i.FlexItem,{className:"pf-u-mb-sm"},a().createElement(m.Z,{title:t||a().createElement(c.h2,null),className:"rbac-page-header__title"})),a().createElement(i.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},r&&r())),o&&a().createElement(i.TextContent,{className:"rbac-page-header__description"},"string"==typeof o?a().createElement(i.Text,{component:i.TextVariants.p},o):o),s)};d.propTypes={title:s().node,renderTitleTag:s().func,description:s().node,children:s().oneOfType([s().node,s().arrayOf(s().node)])}},93327:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(45987),a=r(92950),o=r.n(a),s=r(45697),i=r.n(s),c=r(334),l=["pageAction"],u=function(e){var t=e.pageAction,r=(0,n.Z)(e,l);return(0,a.useEffect)((function(){return insights.chrome.appAction(t),function(){return insights.chrome.appAction(void 0)}}),[t]),o().createElement(c.Route,r)};u.propTypes={pageAction:i().string.isRequired};const m=u},73943:(e,t,r)=>{"use strict";r.d(t,{R:()=>m});var n=r(92950),a=r.n(n),o=r(45697),s=r.n(o),i=r(76857),c=r(69957),l=r(86896),u=r(30893),m=function(e){var t=e.type,r=e.isOpen,n=e.onModalCancel,o=e.onConfirmCancel,s=e.customTitle,m=e.customDescription,p=e.customPrimaryButtonTitle,d=e.customSecondaryButtonTitle,f=(0,l.Z)();return a().createElement(i.Modal,{title:a().createElement("span",{className:"rbac-c-wizard__cancel-warning-header"},a().createElement(c.ZP,{size:"md",className:"rbac-c-wizard__cancel-warning-header--icon"}),s||f.formatMessage(u.Z.exitItemCreation,{item:t})),variant:i.ModalVariant.small,className:"rbac rbac-c-wizard__cancel-warning",isOpen:r,onClose:n,actions:[a().createElement(i.Button,{ouiaId:"primary-exit-button",key:"confirm",variant:"primary",onClick:o},null!=p?p:f.formatMessage(u.Z.exit)),a().createElement(i.Button,{ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:n},null!=d?d:f.formatMessage(u.Z.stay))]},a().createElement("span",null,m||f.formatMessage(u.Z.discardedInputsWarning)," "))};m.propTypes={type:s().string,customTitle:s().node,customDescription:s().node,customPrimaryButtonTitle:s().string,customSecondaryButtonTitle:s().string,isOpen:s().bool,onModalCancel:s().func,onConfirmCancel:s().func}},92967:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>re});var n=r(92950),a=r.n(n),o=r(334),s=r(76857),i=r(38376),c=r(31606),l=r(98033),u=r(82916),m=r(87462),p=r(93433),d=r(4942),f=r(29439),g=r(28216),b=r(86896),h=r(1936),v=r(98614),y=r(36438),E=r(23279),Z=r.n(E),O=r(44873),M=r(64107),k=r(35664),T=r(57486),x=r(45987),w=r(45697),C=r.n(w),P=r(71355),S=r(26794),j=r(93351),A=r(41800),I=r(73943),N=r(19756),L=r(30893),_=["name"];function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){var t=e.username,r=(0,g.useDispatch)(),i=(0,b.Z)(),c=(0,o.useHistory)().push,l=(0,g.useSelector)((function(e){var t=e.groupReducer,r=t.groups,n=t.isLoading;return{groups:(null==r?void 0:r.data)||[],pagination:null==r?void 0:r.meta,filters:(null==r?void 0:r.filters)||"",isLoading:n}}),g.shallowEqual),u=l.groups,m=l.pagination,d=l.filters,h=l.isLoading,v=(0,n.useRef)(null),y=(0,n.useState)([]),E=(0,f.Z)(y,2),Z=E[0],O=E[1],M=(0,n.useState)(!1),k=(0,f.Z)(M,2),T=k[0],w=k[1],C=(0,n.useState)(d.name||""),D=(0,f.Z)(C,2),R=D[0],V=D[1],F=(0,n.useContext)(S.Z),U=F.orgAdmin,G=F.userAccessAdministrator,z=U||G,H=[{title:i.formatMessage(L.Z.name),key:"name"},{title:i.formatMessage(L.Z.description),key:"description"}],W=function(e){return r((0,N.bt)(B(B({},e),{},{excludeUsername:t,nModal:!0})))};(0,n.useEffect)((function(){W(B(B({},m),{},{filters:{name:R}}))}),[]);var q=function(){return(null==Z?void 0:Z.length)>0&&w(!0)||Q()},Q=function(){r((0,P.addNotification)({variant:"warning",title:i.formatMessage(L.Z.addingGroupMemberTitle),dismissDelay:8e3,description:i.formatMessage(L.Z.addingGroupMemberCancelled)})),c({pathname:"/users/detail/".concat(t)})};return a().createElement(n.Fragment,null,a().createElement(I.R,{type:"user",isOpen:T,onModalCancel:function(){return w(!1)},onConfirmCancel:Q}),a().createElement(s.Modal,{variant:s.ModalVariant.medium,isOpen:!T,title:i.formatMessage(L.Z.addUserToGroup,{username:t}),onClose:q,actions:[a().createElement(s.Button,{"aria-label":"Save",className:"pf-u-mr-sm",ouiaId:"primary-save-button",variant:"primary",key:"save",onClick:function(){Z.forEach((function(e){r((0,N.dy)(e.uuid,[{username:t}]))})),c({state:{username:t},pathname:"/users/detail/".concat(t)})},isDisabled:0==(null==Z?void 0:Z.length)},i.formatMessage(L.Z.addToGroup)),a().createElement(s.Button,{"aria-label":"Cancel",ouiaId:"secondary-cancel-button",variant:"link",key:"cancel",onClick:q},i.formatMessage(L.Z.cancel))]},a().createElement(s.Alert,{variant:"info",isInline:!0,isPlain:!0,title:i.formatMessage(L.Z.onlyNonUserGroupsVisible)}),a().createElement(A.M,{isCompact:!0,data:u,rows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.reduce((function(e,r){var o=r.uuid,s=r.name,i=r.description,c=r.platform_default,l=r.admin_default;return[].concat((0,p.Z)(e),[{uuid:o,isAdminDefault:l,isPlatformDefault:c,cells:[a().createElement(n.Fragment,{key:o},a().createElement("span",{"aria-label":"group-name-".concat(o)},s)),a().createElement(n.Fragment,{key:"".concat(o,"-description")},i)],selected:Boolean(t&&t.find((function(e){return e.uuid===o})))}])}),[])}(u,Z),columns:H,isSelectable:z,checkedRows:Z,setCheckedItems:function(e){return O(e(Z).map((function(e){return{uuid:e.uuid,label:e.name}})))},titlePlural:i.formatMessage(L.Z.groups).toLowerCase(),titleSingular:i.formatMessage(L.Z.group).toLowerCase(),pagination:m,filterValue:R,fetchData:function(e){var t=e.name,r=(0,x.Z)(e,_);return W(B({filters:{name:t}},r))},setFilterValue:function(e){var t=e.name;return V(null!=t?t:"")},isLoading:h,filterPlaceholder:i.formatMessage(L.Z.name).toLowerCase(),rowWrapper:j.Z,textFilterRef:v,tableId:"available-user-groups",ouiaId:"available-user-groups-table","data-testid":"group-table"})))};R.propTypes={username:C().string};const V=R;var F,U=r(76137),G=r(67643),z=r(4682),H=r(19571),W=r(28090),q=r(90944),Q=r(11107),$=r(61338);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=function(e){var t=e.roleReducer,r=t.error,n=t.roles,a=t.isLoading,o=t.rolesWithAccess,s=e.userReducer;return{roles:n,isLoadingRoles:a,rolesWithAccess:o,users:s.users.data,isLoadingUsers:s.isUserDataLoading,userExists:r!==Q.VG}};const Y=function(){var e=(0,b.Z)(),t=(0,o.useHistory)(),r=(0,g.useDispatch)(),c=(0,n.useState)(""),l=(0,f.Z)(c,2),u=l[0],E=l[1],x=(0,n.useState)(),w=(0,f.Z)(x,2),C=w[0],P=w[1],j=(0,n.useState)({}),I=(0,f.Z)(j,2),_=I[0],D=I[1],B=(0,n.useState)([]),R=(0,f.Z)(B,2),X=R[0],Y=R[1],ee=(0,g.useSelector)(K),te=ee.roles,re=ee.isLoadingRoles,ne=ee.rolesWithAccess,ae=ee.users,oe=ee.isLoadingUsers,se=ee.userExists,ie=(0,n.useContext)(S.Z),ce=ie.orgAdmin,le=ie.userAccessAdministrator,ue=(0,o.useParams)().username,me=ce||le,pe=function(e){return r((0,W.vd)(e))};(0,n.useEffect)((function(){return insights.chrome.appObjectId(ue),r((0,q.u)(J(J({},$.he),{},{limit:0,filters:{username:ue},inModal:!0}))),pe({limit:20,offset:0,addFields:["groups_in"],username:ue}),F=Z()((function(e,t,r,n,a){return pe({limit:e,offset:t,displayName:r,addFields:n,username:a})}),500),function(){return insights.chrome.appObjectId(void 0)}}),[]),(0,n.useEffect)((function(){P(null==ae?void 0:ae.find((function(e){return e.username===ue})))}),[ae]);var de=[e.formatMessage(L.Z.roles),{title:e.formatMessage(L.Z.groups),cellTransforms:[h.compoundExpand]},{title:e.formatMessage(L.Z.permissions),cellTransforms:[h.compoundExpand]},{title:e.formatMessage(L.Z.lastModified)}],fe=[{title:e.formatMessage(L.Z.users),to:"/users"},{title:se?ue:e.formatMessage(L.Z.invalidUser),isActive:!0}];return a().createElement(n.Fragment,null,se?a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(i.Q,{breadcrumbs:fe},a().createElement(i.y,{title:ue,renderTitleTag:function(){return oe?a().createElement(k.Z,{size:"xs",className:"rbac-c-user__label-skeleton"}):a().createElement(s.Label,{color:(null==C?void 0:C.is_active)&&"green"},e.formatMessage(null!=C&&C.is_active?L.Z.active:L.Z.inactive))}},!oe&&C?a().createElement(n.Fragment,null,a().createElement(s.TextContent,null,"".concat(e.formatMessage(L.Z.orgAdministrator),": "),null!=C&&C.is_org_admin?a().createElement(v.ZP,{key:"yes-icon",className:"pf-u-mx-sm"}):a().createElement(y.ZP,{key:"no-icon",className:"pf-u-mx-sm"}),e.formatMessage(null!=C&&C.is_org_admin?L.Z.yes:L.Z.no)),(null==C?void 0:C.email)&&a().createElement(s.Text,{component:s.TextVariants.p},"".concat(e.formatMessage(L.Z.email),": ").concat(C.email)),(null==C?void 0:C.username)&&a().createElement(s.TextContent,null,a().createElement(s.Text,{component:s.TextVariants.p},"".concat(e.formatMessage(L.Z.username),": ").concat(C.username)))):null))),a().createElement(s.StackItem,null,a().createElement(O.Z,{type:"content",className:"rbac-c-user-roles"},a().createElement(A.M,{columns:de,isExpandable:!0,onExpand:function(e,t,n,a,o){a?D(J(J({},_),{},(0,d.Z)({},o.uuid,-1))):(D(J(J({},_),{},(0,d.Z)({},o.uuid,n))),2===n&&r((0,W.sv)(o.uuid)))},rows:function(t,r){return t?t.reduce((function(t,n,i){var c,l=n.uuid,u=n.display_name,m=n.groups_in,d=void 0===m?[]:m,f=n.modified,g=n.accessCount;return[].concat((0,p.Z)(t),[{uuid:l,cells:[{title:u,props:{component:"th",isOpen:!1}},{title:"".concat(d.length),props:{isOpen:1===_[l]}},{title:g,props:{isOpen:2===_[l]}},{title:a().createElement(M.Z,{type:(0,Q.mh)(f),date:f})}]},{uuid:"".concat(l,"-groups"),parent:3*i,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:(null==d?void 0:d.length)>0?a().createElement(h.Table,{ouiaId:"groups-in-role-nested-table","aria-label":"Simple Table",variant:h.TableVariant.compact,cells:[e.formatMessage(L.Z.name),e.formatMessage(L.Z.description)," "],rows:d.map((function(t){return{cells:[{title:a().createElement(o.Link,{to:"/groups/detail/".concat(t.uuid)},t.name)},t.description,{title:a().createElement(o.Link,{to:z.Z["user-add-group-roles"].path.replace(":username",r).replace(":uuid",t.uuid),state:{name:t.name}},e.formatMessage(L.Z.addRoleToThisGroup)),props:{className:"pf-u-text-align-right"}}]}}))},a().createElement(h.TableHeader,null),a().createElement(h.TableBody,null)):a().createElement(s.Text,{className:"pf-u-mx-lg pf-u-my-sm"},e.formatMessage(L.Z.noGroups))}]},{uuid:"".concat(l,"-groups"),parent:3*i,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:ne&&ne[l]?(null===(c=ne[l].access)||void 0===c?void 0:c.length)>0?a().createElement(h.Table,{"aria-label":"Simple Table",ouiaId:"permissions-in-role-nested-table",variant:h.TableVariant.compact,cells:[e.formatMessage(L.Z.application),e.formatMessage(L.Z.resourceType),e.formatMessage(L.Z.operation)],rows:ne[l].access.map((function(e){return{cells:e.permission.split(":")}}))},a().createElement(h.TableHeader,null),a().createElement(h.TableBody,null)):a().createElement(s.Text,{className:"pf-u-mx-lg pf-u-my-sm"},e.formatMessage(L.Z.noPermissions)):a().createElement(H.Wi,{items:3,isCompact:!0})}]}])}),[]):[]}(te.data,ue),routes:function(){return a().createElement(o.Switch,null,a().createElement(o.Route,{path:z.Z["add-user-to-group"].path.replace(":username",ue)},a().createElement(V,{username:ue})),a().createElement(o.Route,{path:z.Z["user-add-group-roles"].path.replace(":username",ue),render:function(e){return a().createElement(T.Z,(0,m.Z)({selectedRoles:X,setSelectedRoles:Y,closeUrl:"/users/detail/".concat(ue),addRolesToGroup:function(e,t){return r((0,N.Wj)(e,t))}},e))}}))},data:te.data,filterValue:u,ouiaId:"user-details-table",fetchData:function(e){var t=e.limit,r=e.offset,n=e.name;F(t,r,n,["groups_in"],ue)},setFilterValue:function(e){var t=e.name;return E(t)},isLoading:re,toolbarButtons:function(){return(0,p.Z)(me?[a().createElement(o.Link,{to:z.Z["add-user-to-group"].path.replace(":username",ue),key:"add-user-to-group",className:"rbac-m-hide-on-sm"},a().createElement(s.Button,{ouiaId:"add-user-to-group-button",variant:"primary","aria-label":"Add user to a group"},e.formatMessage(L.Z.addUserToGroup))),{label:e.formatMessage(L.Z.addUserToGroup),onClick:function(){t.push(z.Z["add-user-to-group"].path)}}]:[])},pagination:te.meta,filterPlaceholder:e.formatMessage(L.Z.roleName).toLowerCase(),titlePlural:e.formatMessage(L.Z.roles).toLowerCase(),titleSingular:e.formatMessage(L.Z.role).toLowerCase(),tableId:"user"})))):a().createElement(n.Fragment,null,a().createElement("section",{className:"pf-c-page__main-breadcrumb pf-u-pb-md"},a().createElement(U.Z,fe)),a().createElement(G.Z,{title:e.formatMessage(L.Z.userNotFound),description:[e.formatMessage(L.Z.userNotFoundDescription,{username:ue})],actions:[a().createElement(s.Button,{key:"back-button",className:"pf-u-mt-xl",ouiaId:"back-button",variant:"primary","aria-label":"Back to previous page",onClick:function(){return t.goBack()}},e.formatMessage(L.Z.backToPreviousPage))]})))};var ee=r(93327),te=function(){var e=(0,b.Z)(),t=(0,n.useContext)(S.Z),r=a().createElement(u.Z,{linkDescription:e.formatMessage(L.Z.addNewUsersText)});return(0,n.useEffect)((function(){insights.chrome.appNavClick({id:"users",secondaryNav:!0})}),[]),a().createElement(o.Switch,null,a().createElement(ee.Z,{pageAction:"user-detail",path:z.Z["user-detail"].path,render:function(e){return a().createElement(Y,e)}}),a().createElement(ee.Z,{pageAction:"users-list",path:[z.Z.users.path,z.Z.rbac.path],render:function(){return a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(i.Q,null,a().createElement(i.y,{title:e.formatMessage(L.Z.users),description:r}))),a().createElement(s.StackItem,null,a().createElement(c.Section,{type:"content",id:"users"},a().createElement(l.Z,{userLinks:t.userAccessAdministrator||t.orgAdmin,props:{isSelectable:!1,isCompact:!1}}))))}}))};te.propTypes={},te.defaultProps={};const re=te},27561:(e,t,r)=>{var n=r(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(a,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},23279:(e,t,r)=>{var n=r(13218),a=r(7771),o=r(14841),s=Math.max,i=Math.min;e.exports=function(e,t,r){var c,l,u,m,p,d,f=0,g=!1,b=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var r=c,n=l;return c=l=void 0,f=t,m=e.apply(n,r)}function y(e){return f=e,p=setTimeout(Z,t),g?v(e):m}function E(e){var r=e-d;return void 0===d||r>=t||r<0||b&&e-f>=u}function Z(){var e=a();if(E(e))return O(e);p=setTimeout(Z,function(e){var r=t-(e-d);return b?i(r,u-(e-f)):r}(e))}function O(e){return p=void 0,h&&c?v(e):(c=l=void 0,m)}function M(){var e=a(),r=E(e);if(c=arguments,l=this,d=e,r){if(void 0===p)return y(d);if(b)return clearTimeout(p),p=setTimeout(Z,t),v(d)}return void 0===p&&(p=setTimeout(Z,t)),m}return t=o(t)||0,n(r)&&(g=!!r.leading,u=(b="maxWait"in r)?s(o(r.maxWait)||0,t):u,h="trailing"in r?!!r.trailing:h),M.cancel=function(){void 0!==p&&clearTimeout(p),f=0,c=d=l=p=void 0},M.flush=function(){return void 0===p?m:O(a())},M}},7771:(e,t,r)=>{var n=r(55639);e.exports=function(){return n.Date.now()}},14841:(e,t,r)=>{var n=r(27561),a=r(13218),o=r(33448),s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=i.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):s.test(e)?NaN:+e}}}]);
//# sourceMappingURL=../sourcemaps/3601.bed2dea0d7cfb11323073c5ad664dd1a.js.map
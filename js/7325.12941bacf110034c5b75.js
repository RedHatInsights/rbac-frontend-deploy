"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[7325],{82916:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(92950),a=n.n(r),o=n(86896),s=n(45697),l=n.n(s),i=n(76857),c=n(15265),u=n(26794),d=n(30893),m=n(55140),f=function(e){var t=e.linkDescription,n=e.linkTitle,s=(0,o.Z)(),l=(0,m.Z)(),f=l.getEnvironment(),p=l.isProd()?"":"".concat(f,".");return(0,r.useContext)(u.Z).orgAdmin?a().createElement(i.Text,{className:"pf-u-mt-0",component:i.TextVariants.h7},"".concat(s.formatMessage(d.Z.usersDescription)," "),t,a().createElement(i.Text,{component:i.TextVariants.a,href:"https://www.".concat(p,"redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},n,a().createElement(c.ZP,null)),"."):a().createElement(i.Text,{className:"pf-u-mt-0",component:i.TextVariants.h7},"".concat(s.formatMessage(d.Z.usersDescription)," "))};f.propTypes={linkDescription:l().node,linkTitle:l().node},f.defaultProps={linkDescription:"",linkTitle:" user management list "};const p=f},88093:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(45987),o=n(92950),s=n.n(o),l=n(1936),i=n(45697),c=n.n(i),u=n(94184),d=n.n(u),m=["row"],f=function(e){var t,n=e.row,o=(0,a.Z)(e,m),i=n.status,c=null==i||null===(t=i.props)||void 0===t?void 0:t["data-is-active"];return s().createElement(l.RowWrapper,(0,r.Z)({className:d()("rbac__user-row",{"ins-m-inactive":!c}),row:n},o))};f.propTypes={row:c().shape({status:c().shape({props:c().shape({"data-is-active":c().bool,data:c().shape({isActive:c().bool})})})})};const p=f},97384:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(29439),a=n(4942),o=n(93433),s=n(92950),l=n.n(s),i=n(45697),c=n.n(i),u=n(86896),d=n(50533),m=n(1936),f=n(55140),p=n(65916),g=n(11107),b=n(30060),v=n(28090),Z=n(19756),y=n(30893);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.selectedRoles,n=e.setSelectedRoles,i=e.rolesExcluded,c=e.groupId,h=(0,u.Z)(),k=(0,f.Z)(),w=(0,d.useDispatch)(),R=(0,s.useRef)(null),S=(0,d.useSelector)(i?function(e){var t=e.groupReducer.selectedGroup,n=t.addRoles,r=n.roles,a=n.pagination,o=n.loaded,s=t.uuid;return{roles:r,pagination:a||E(E({},p.eX),{},{count:null==r?void 0:r.length}),isLoading:!o,groupId:c||s}}:function(e){var t=e.roleReducer,n=t.roles,r=t.isLoading;return{roles:n.data,pagination:n.meta,isLoading:r,filters:n.filters}},d.shallowEqual),C=S.roles,T=S.pagination,D=S.isLoading,O=S.groupId,M=S.filters,x=(0,s.useRef)([E({title:h.formatMessage(y.Z.name),key:"display_name"},i?{orderBy:"name"}:{transforms:[m.sortable]}),{title:h.formatMessage(y.Z.description)}]).current,P=(0,s.useState)(""),_=(0,r.Z)(P,2),I=_[0],N=_[1],L=(0,s.useState)({index:1,direction:"asc"}),j=(0,r.Z)(L,2),G=j[0],B=j[1],V=(0,s.useCallback)((function(e,t){return w(i?(0,Z.nr)(e,t):(0,v.Kt)((0,g.jl)(E(E({},t),{},{chrome:k}))))}),[i]),A="".concat("desc"===(null==G?void 0:G.direction)?"-":"").concat(x[null==G?void 0:G.index].key),F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e?e.reduce((function(e,n){var r=n.uuid,a=n.display_name,s=n.name,l=n.description;return[].concat((0,o.Z)(e),[{uuid:r,cells:[a||s,l],selected:Boolean(t&&t.find((function(e){return e.uuid===r})))}])}),[]):[]}(C,t);return(0,s.useEffect)((function(){V(O,E(E({},T),{},{orderBy:A}))}),[]),l().createElement(b.M,{isSelectable:!0,isCompact:!0,borders:!1,columns:x,rows:F,sortBy:G,onSort:function(e,t,n,r){var o="".concat("desc"===n?"-":"").concat(x[r?t-1:t].key);B({index:t,direction:n}),function(e,t){var n=t.name,r=t.count,a=t.limit,o=t.offset,s=t.orderBy;V(e,(0,g.jl)({count:r,limit:a,offset:o,orderBy:s,filters:{display_name:n}}))}(O,E(E({},T),{},{offset:0,orderBy:o},(null==M?void 0:M.length)>0?E({},M.reduce((function(e,t){return E(E({},e),{},(0,a.Z)({},t.key,t.value))}),{})):{name:I}))},data:C,filterValue:I,filterPlaceholder:h.formatMessage(y.Z.roleName).toLowerCase(),fetchData:function(e){return V(O,E(E({},e),{},{filters:{display_name:e.name}}))},setFilterValue:function(e){var t=e.name;return N(t)},isLoading:D,ouiaId:"roles-table",pagination:T,checkedRows:t,setCheckedItems:function(e){n((function(t){return e(t).map((function(e){var t=e.uuid,n=e.name;return{uuid:t,label:e.label||n}}))}))},titlePlural:h.formatMessage(y.Z.roles).toLowerCase(),titleSingular:h.formatMessage(y.Z.role),tableId:"roles-list",textFilterRef:R})};k.propTypes={canSort:c().bool,setSelectedRoles:c().func.isRequired,selectedRoles:c().array,rolesExcluded:c().bool.isRequired,groupId:c().string},k.defaultProps={roles:[],pagination:p.eX,canSort:!0};const w=k},93351:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(45987),o=n(92950),s=n.n(o),l=n(1936),i=n(45697),c=n.n(i),u=n(94184),d=n.n(u),m=["className","row"],f=function(e){var t=e.className,n=e.row,o=(0,a.Z)(e,m);return s().createElement(l.RowWrapper,(0,r.Z)({className:d()(t,{"rbac-c-group-default":n.isPlatformDefault||n.isAdminDefault}),row:n},o))};f.propTypes={row:c().shape({isAdminDefault:c().bool,isPlatformDefault:c().bool}),className:c().string};const p=f},57486:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(29439),a=n(92950),o=n.n(a),s=n(45697),l=n.n(s),i=n(86896),c=n(76857),u=n(46801),d=n(50533),m=n(35664),f=n(71355),p=n(19756),g=n(93736),b=n(97384),v=n(25924),Z=n(30893),y=function(e){var t=e.afterSubmit,n=e.fetchUuid,s=e.selectedRoles,l=e.setSelectedRoles,y=e.title,h=e.closeUrl,E=e.addRolesToGroup,k=e.groupName,w=e.isDefault,R=e.isChanged,S=e.onDefaultGroupChanged,C=(0,i.Z)(),T=(0,d.useDispatch)(),D=(0,u.useLocation)().state,O=(0,u.useParams)().groupId,M=w&&n?n:O,x=(0,g.Z)(),P=(0,a.useState)(!1),_=(0,r.Z)(P,2),I=_[0],N=_[1],L=(0,d.useSelector)((function(e){var t=e.groupReducer,n=t.selectedGroup,r=t.isRecordLoading;return{groupName:k||(null==D?void 0:D.name)||n.name,isRecordLoading:r}})),j=L.groupName,G=L.isRecordLoading;(0,a.useEffect)((function(){j||T((0,p.yi)(M))}),[]);var B=function(){l&&l([]),T((0,f.addNotification)({variant:"warning",title:C.formatMessage(Z.Z.addingGroupRolesTitle),dismissDelay:8e3,description:C.formatMessage(Z.Z.addingGroupRolesCancelled)})),x(h)},V=function(){var e=s.map((function(e){return e.uuid}));return E(M,e).then(t),l([]),w&&!R&&S(!0),x(h)};return w&&!R&&I?o().createElement(v.Z,{isOpen:I,onClose:B,onSubmit:V}):o().createElement(c.Modal,{className:"rbac",title:C.formatMessage(Z.Z.addRolesToGroup,{name:G?o().createElement(m.Z,{size:m.i.xs,className:"rbac-c-skeleton__add-role-to-group"}):j}),variant:c.ModalVariant.medium,isOpen:!0,onClose:function(){B(),N(!0)},actions:[o().createElement(c.Button,{"aria-label":"Save",ouiaId:"primary-save-button",variant:"primary",key:"confirm",isDisabled:0===s.length,onClick:function(){N(!0),(!w||R)&&V()}},C.formatMessage(Z.Z.addToGroup)),o().createElement(c.Button,{"aria-label":"Cancel",ouiaId:"secondary-cancel-button",variant:"link",key:"cancel",onClick:B},C.formatMessage(Z.Z.cancel))]},o().createElement(c.Stack,{hasGutter:!0},y&&o().createElement(c.StackItem,null,o().createElement(c.Title,{headingLevel:"h4",size:"xl"},y)),o().createElement(c.StackItem,null,o().createElement(c.Alert,{variant:"info",isInline:!0,isPlain:!0,title:C.formatMessage(Z.Z.onlyGroupRolesVisible)})),o().createElement(c.StackItem,null,o().createElement(b.Z,{selectedRoles:s,setSelectedRoles:l,rolesExcluded:!0,groupId:M}))))};y.propTypes={afterSubmit:l().func,selectedRoles:l().array,setSelectedRoles:l().func,addRolesToGroup:l().func,closeUrl:l().string,title:l().string,groupName:l().string,fetchUuid:l().string,isDefault:l().bool,isChanged:l().bool,onDefaultGroupChanged:l().func};const h=y},25924:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(92950),o=n.n(a),s=n(45697),l=n.n(s),i=n(76857),c=n(1227),u=n(86896),d=n(44012),m=n(30893),f=function(e){var t=e.isOpen,n=e.onClose,a=e.onSubmit,s=(0,u.Z)();return o().createElement(c.Z,{text:o().createElement(i.TextContent,null,o().createElement(i.Text,null,o().createElement(d.Z,(0,r.Z)({},m.Z.defaultAccessGroupEditWarning,{values:{b:function(e){return o().createElement("b",null,e)}}})))),title:s.formatMessage(m.Z.warning),withCheckbox:!0,isOpen:t,confirmButtonLabel:s.formatMessage(m.Z.continue),onClose:n,onSubmit:a})};f.propTypes={onSubmit:l().func,onClose:l().func,isOpen:l().bool};const p=f},58654:(e,t,n)=>{n.d(t,{H:()=>c});var r=n(92950),a=n.n(r),o=n(46801),s=n(76857),l=n(84747),i=n(30893);const c=(e,t=[],n,c=[],u=!1)=>t?.reduce(((t,{username:d,is_active:m,email:f,first_name:p,last_name:g,is_org_admin:b})=>[...t,{uuid:d,cells:[b?a().createElement(r.Fragment,null,a().createElement(l.CheckIcon,{key:"yes-icon",className:"pf-u-mr-sm"}),a().createElement("span",{key:"yes"},n.formatMessage(i.Z.yes))):a().createElement(r.Fragment,null,a().createElement(l.CloseIcon,{key:"no-icon",className:"pf-u-mr-sm"}),a().createElement("span",{key:"no"},n.formatMessage(i.Z.no))),{title:e?a().createElement(o.Link,{to:`/users/detail/${d}`},d.toString()):d.toString()},f,p,g,{title:a().createElement(s.Label,{key:"status",color:m?"green":"grey"},n.formatMessage(m?i.Z.active:i.Z.inactive)),props:{"data-is-active":m}}],selected:!!u&&Boolean(c?.find?.((({uuid:e})=>e===d)))}]),[])}}]);
//# sourceMappingURL=../sourcemaps/7325.cf7a745575b0bc57f88af3bd5a01f62a.js.map
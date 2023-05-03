"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[8498,7664],{79995:(e,t)=>{t.U6={name:"--pf-global--breakpoint--xs",value:"0",var:"var(--pf-global--breakpoint--xs)"},t.ZP=t.U6},97857:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Me});var n=r(93433),a=r(4942),o=r(29439),i=r(92950),l=r.n(i),s=r(86896),c=r(28216),u=r(334),d=r(1936),p=r(76857),f=r(64107),m=r(11107),g=r(30893),b=r(28090),v=r(38376),y=r(41800),h=r(13063),Z=r(44873),E=r(15608),O=r(4682),R=r(93436),w=r(93327),M=function(e){return e.reduce((function(e,t){return[].concat((0,n.Z)(e),[{cells:[t]}])}),[])},P=r(39173),j=r(19571),S=r(61338),k=r(87462),_=r(45697),D=r.n(_),x=r(96354),L=r(36457),T=r(29215),C=r(52817),I=r(73943),N=r(45987),B=r(40483),V=r(48880),F=["ModalProps"];function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=function(e){var t=e.ModalProps,r=(0,N.Z)(e,F),n=(0,s.Z)(),a=(0,V.default)().getState().values;return l().createElement(B.Z,(0,k.Z)({},r,{ModalProps:W(W({},t),{},{onClose:function(){return t.onClose(a)}}),alert:a["dual-list-select"]?void 0:function(){return l().createElement("div",{className:"rbac-m-resource-definitions"},l().createElement(p.Alert,{className:"pf-c-modal__alert",variant:"danger",isInline:!0,title:n.formatMessage(g.Z.defineAtLeastOneResource)}))}}))};z.propTypes={ModalProps:D().object};const q=z;var H=r(42348),G=r.n(H);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function K(e,t){if("update"===t.type)return Q(Q({},e),t.payload);throw new Error}var J=function(e,t,r){var a=(0,s.Z)();return{fields:[{component:x.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:a.formatMessage(g.Z.resourcesAvailable),rightTitle:a.formatMessage(g.Z.resourcesDefined),filterOptionsTitle:a.formatMessage(g.Z.filterByResource),filterValueTitle:a.formatMessage(g.Z.filterByResource),options:(0,n.Z)(t&&e?r:[]),validate:[{type:"validate-resources"}],isSearchable:!0}]}},Y={"validate-resources":function(){return function(e){return e&&e.length>0?void 0:"At least one resource must be defined for this permission"}}},$=function(e){var t=e.cancelRoute,r=(0,s.Z)(),a=(0,u.useRouteMatch)(O.Z["role-detail-permission-edit"].path),d=(0,u.useRouteMatch)(a).params,f=d.permissionId,m=d.roleId,v=(0,u.useHistory)(),y=v.replace,h=v.push,Z=(0,c.useDispatch)(),E=(0,i.useReducer)(K,X),R=(0,o.Z)(E,2),w=R[0],M=R[1],P=(0,c.useSelector)((function(e){var t;return{role:e.roleReducer.selectedRole,definedResources:null!==(t=e.roleReducer.selectedRole)&&void 0!==t&&t.access?G()(e.roleReducer.selectedRole.access.filter((function(e){return e.permission===f})).map((function(e){return e.resourceDefinitions.map((function(e){return e.attributeFilter.value}))}))):[],isRecordLoading:e.roleReducer.isRecordLoading}}),c.shallowEqual),j=P.definedResources,S=P.role,_=(0,c.useSelector)((function(e){return function(e,t){var r=e.costReducer,n=r.resourceTypes,a=r.isLoading,o=r.loadingResources,i=r.resources;return{resourceTypes:n.data,resources:i[t]?{resourcesPath:i[t]}:i,isLoading:a,isLoadingResources:o>0}}(e,w.resourcesPath)}),c.shallowEqual),D=_.resourceTypes,x=_.isLoading,N=_.isLoadingResources,B=_.resources;(0,i.useEffect)((function(){Z((0,T.A)())}),[f]),(0,i.useEffect)((function(){if(!x){var e,t=null===(e=D.find((function(e){var t;return e.value===(null===(t=f.split(":"))||void 0===t?void 0:t[1])})))||void 0===e?void 0:e.path;t&&(M({type:"update",payload:{resourcesPath:t.split("/")[5]}}),Z((0,T.R)(t)))}}),[D]);var V=function(){return y(t)},F=function(e){e["dual-list-select"]===j?V():M({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},A=function(e){return Object.entries(e).reduce((function(e,t){var r=(0,o.Z)(t,2),a=r[0],i=r[1];return[].concat((0,n.Z)(e),(0,n.Z)(i.map((function(e){return{value:e.value,path:a,label:e.value}}))))}),[])}(B);return l().createElement(l().Fragment,null,l().createElement(I.R,{customTitle:r.formatMessage(g.Z.exitEditResourceDefinitions),customDescription:r.formatMessage(g.Z.changesWillBeLost),isOpen:w.cancelWarningVisible,onModalCancel:function(){return M({type:"update",payload:{cancelWarningVisible:!1}})},onConfirmCancel:V}),(x||N)&&w.loadingStateVisible?l().createElement(p.Modal,{variant:p.ModalVariant.large,className:"rbac-m-resource-definitions",isOpen:!0,title:r.formatMessage(g.Z.editResourceDefinitions),onClose:function(){M({type:"update",payload:{loadingStateVisible:!1}}),V()}},l().createElement(p.Bullseye,null,l().createElement(p.Spinner,null))):l().createElement(L.Z,{schema:J(B,w.resourcesPath,A),componentMapper:C.ZP,initialValues:{"dual-list-select":w.changedResources||j||[]},onSubmit:function(e){var r;M({type:"update",payload:{changedResources:e["dual-list-select"]}});var a={permission:f,resourceDefinitions:[{attributeFilter:{key:"cost-management.".concat(null===(r=f.split(":"))||void 0===r?void 0:r[1]),operation:1===e["dual-list-select"].length?"equal":"in",value:1===e["dual-list-select"].length?e["dual-list-select"][0]:e["dual-list-select"]}}]};Z((0,b.ul)(m,Q(Q({},S),{},{access:[].concat((0,n.Z)(S.access.filter((function(e){return e.permission!==f}))),[a])})),!0).then((function(){Z((0,b.fp)(m)),h(t)}))},onCancel:function(e){return F(e)},validatorMapper:Y,FormTemplate:function(e){return l().createElement(q,(0,k.Z)({},e,{ModalProps:{onClose:F,isOpen:!w.cancelWarningVisible,variant:"large",title:r.formatMessage(g.Z.editResourceDefinitions),description:r.formatMessage(g.Z.editPermissionsUsingArrows)}}))}}))};$.propTypes={cancelRoute:D().string.isRequired};const ee=$;var te=r(85564),re=r.n(te);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const oe=function(){var e=(0,s.Z)(),t=(0,i.useState)({pagination:ae(ae({},S.he),{},{filter:""})}),r=(0,o.Z)(t,2),n=r[0],a=r[1],d=n.pagination,f=n.filter,h=(0,c.useDispatch)(),Z=(0,u.useParams)(),E=Z.roleId,R=Z.permissionId,w=(0,c.useSelector)((function(e){var t,r,n,a,o;return{role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?ae({},null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access.find((function(e){return e.permission===R}))):{},isRecordLoading:e.roleReducer.isRecordLoading,rolesPagination:(null===(r=e.roleReducer)||void 0===r||null===(n=r.roles)||void 0===n?void 0:n.pagination)||S.he,rolesFilters:(null===(a=e.roleReducer)||void 0===a||null===(o=a.roles)||void 0===o?void 0:o.filters)||{}}}),c.shallowEqual),k=w.role,_=w.permission,D=w.isRecordLoading,x=w.rolesPagination,L=w.rolesFilters;(0,i.useEffect)((function(){h((0,b.fp)(E))}),[E]),(0,i.useEffect)((function(){a(ae(ae({},n),{},{pagination:ae(ae({},n.pagination),{},{count:k.access?k.access.length:0})}))}),[k]);var T=_.resourceDefinitions?re()(_.resourceDefinitions.map((function(e){return e.attributeFilter.value}))).filter((function(e){return!f||e.includes(f)})):[],C=function(){return l().createElement(i.Fragment,null,l().createElement(u.Route,{exact:!0,path:O.Z["role-detail-permission-edit"].path},l().createElement(ee,{cancelRoute:O.Z["role-detail-permission"].path.replace(":roleId",E).replace(":permissionId",R)})))},I=T.slice(d.offset,d.offset+d.limit);return l().createElement(i.Fragment,null,l().createElement(v.Q,{breadcrumbs:[{title:e.formatMessage(g.Z.roles),to:(0,m.zk)(C.roles,x,L)},{title:D?void 0:k&&(k.display_name||k.name),to:"/roles/detail/".concat(E)},{title:R,isActive:!0}]},l().createElement(p.Level,null,l().createElement(p.LevelItem,null,l().createElement(P.Z,{title:R||l().createElement(j.h2,null),className:"rbac-page-header__title"})))),l().createElement("section",{className:"pf-c-page__main-section rbac-c-role__permissions"},l().createElement(p.TextContent,null,l().createElement(p.Text,{component:p.TextVariants.h1},e.formatMessage(g.Z.definedResources))),l().createElement(y.M,{columns:[{}],rows:M(I),data:I,filterValue:f,fetchData:function(e){var t=e.limit,r=e.offset,o=e.name;return a(ae(ae({},n),{},{filter:o,pagination:ae(ae({},n.pagination),{},{limit:t,offset:r})}))},isCompact:!0,routes:C,setFilterValue:function(e){var t=e.name;return a(ae(ae({},n),{},{filter:t}))},toolbarButtons:function(){return k.system?[]:[l().createElement(i.Fragment,{key:"edit-resource-definitions"},l().createElement(u.Link,{to:"/roles/detail/".concat(E,"/permission/").concat(R,"/edit")},l().createElement(p.Button,{variant:"primary","aria-label":"Edit"},e.formatMessage(g.Z.edit))))]},isLoading:D,pagination:ae(ae({},d),{},{count:T.length}),titlePlural:e.formatMessage(g.Z.resources).toLowerCase(),titleSingular:e.formatMessage(g.Z.resource).toLowerCase(),hideHeader:!0,tableId:"role-resource-definitions"})))};var ie=r(26794),le=r(92758),se=r(79995),ce=r(60144),ue=r(78236),de=r(92732),pe=r(63242),fe=r(40472);const me={xs:parseInt(se.ZP.value.replace("px","")),sm:parseInt(ce.default.value.replace("px","")),md:parseInt(ue.default.value.replace("px","")),lg:parseInt(de.default.value.replace("px","")),xl:parseInt(pe.default.value.replace("px","")),"2xl":parseInt(fe.default.value.replace("px",""))},ge=function(){for(var e,t=window.innerWidth,r=0,n=Object.entries(me);r<n.length;r++){var a=n[r],o=a[0];if(a[1]>=t)break;e=o}return e};var be=r(94184),ve=r.n(be),ye=["className","row"],he=function(e){var t=e.className,r=e.row,n=(0,N.Z)(e,ye);return l().createElement(d.RowWrapper,(0,k.Z)({className:ve()(t,{"rbac-c-role-default":r.system}),row:r},n))};he.propTypes={row:D().shape({system:D().bool}),className:D().string};const Ze=he;function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Re=(0,i.lazy)((function(){return r.e(4853).then(r.bind(r,34853))})),we=function(e){var t=e.roleReducer,r=t.roles,n=t.isLoading;return{roles:r.data,filters:r.filters,meta:r.pagination,isLoading:n}};const Me=function(){var e,t,r,M,P=(0,i.useContext)(ie.Z),j=P.orgAdmin,k=P.userAccessAdministrator,_=(0,i.useState)([]),D=(0,o.Z)(_,2),x=D[0],L=D[1],T=(0,s.Z)(),C=(0,c.useDispatch)(),I=(0,i.useRef)(null),N=(0,u.useHistory)(),B=(e=(0,i.useState)((function(){return ge()})),t=e[0],r=e[1],M=(0,i.useRef)(t),(0,i.useEffect)((function(){function e(){var e=ge();e!==M.current&&(M.current=e,r(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t),V=(0,c.useSelector)(we,c.shallowEqual),F=V.roles,A=V.filters,W=V.meta,z=V.isLoading,q=[{title:T.formatMessage(g.Z.name),key:"display_name",transforms:[(0,d.cellWidth)(20),d.sortable]},{title:T.formatMessage(g.Z.description)},{title:T.formatMessage(g.Z.permissions),cellTransforms:[d.compoundExpand],transforms:[d.nowrap]},{title:T.formatMessage(g.Z.groups),cellTransforms:[d.compoundExpand],transforms:[d.nowrap]},{title:T.formatMessage(g.Z.lastModified),key:"modified",transforms:[d.nowrap,d.sortable]}],H=function(e){return C((0,b.Kt)(Oe(Oe({},e),{},{inModal:!1})))},G=j||k,U=(0,i.useState)(Oe(Oe({},j?S.HE:S.he),W)),Q=(0,o.Z)(U,2),X=Q[0],K=Q[1],J=(0,i.useState)(A.display_name||""),Y=(0,o.Z)(J,2),$=Y[0],ee=Y[1],te=(0,i.useState)({index:Number(G),direction:"asc"}),re=(0,o.Z)(te,2),ne=re[0],ae=re[1],se="".concat("desc"===(null==ne?void 0:ne.direction)?"-":"").concat(q[(null==ne?void 0:ne.index)-Number(G)].key),ce=(0,i.useState)({}),ue=(0,o.Z)(ce,2),de=ue[0],pe=ue[1];(0,i.useEffect)((function(){var e=(0,S.rj)(N,X);K(e);var t=(0,le.aX)(N,["display_name"],{display_name:$}).display_name;ee(t),insights.chrome.appNavClick({id:"roles",secondaryNav:!0}),H(Oe(Oe({},e),{},{orderBy:se,filters:{display_name:t}}))}),[]),(0,i.useEffect)((function(){ee((null==A?void 0:A.display_name)||""),K(W)}),[A,W]),(0,i.useEffect)((function(){W.redirected&&(0,S.oG)(N,W.limit,W.offset)}),[W.redirected]),(0,i.useEffect)((function(){(0,S.Zc)(N)||(0,S.oG)(N,X.limit,X.offset),(null==$?void 0:$.length)>0&&!(0,le.qF)(N,["display_name"])&&(0,le.aX)(N,["display_name"],{display_name:$})}));var fe=function(){return l().createElement(i.Suspense,{fallback:l().createElement(i.Fragment,null)},l().createElement(u.Route,{exact:!0,path:O.Z["add-role"].path},l().createElement(Re,{pagination:X,orderBy:se,filters:{display_name:$}})),l().createElement(u.Route,{exact:!0,path:O.Z["remove-role"].path},!z&&l().createElement(h.Z,{routeMatch:O.Z["remove-role"].path,afterSubmit:function(){L([]),H(Oe(Oe({},X),{},{offset:0,orderBy:se,filters:{display_name:$}}))},cancelRoute:(0,m.zk)(O.Z.roles.path,X,A),submitRoute:(0,m.zk)(O.Z.roles.path,Oe(Oe({},X),{},{offset:0}),A)})),l().createElement(u.Route,{exact:!0,path:O.Z["edit-role"].path},!z&&l().createElement(R.Z,{afterSubmit:function(){return H(Oe(Oe({},X),{},{offset:0,orderBy:se,filters:{display_name:$}}))},routeMatch:O.Z["edit-role"].path,cancelRoute:(0,m.zk)(O.Z.roles.path,X,A),submitRoute:(0,m.zk)(O.Z.roles.path,Oe(Oe({},X),{},{offset:0}),A)})))},be=function(e){return e.compoundParent?[]:[{title:T.formatMessage(g.Z.edit),onClick:function(e,t,r){return N.push("/roles/edit/".concat(r.uuid))}},{title:T.formatMessage(g.Z.delete),onClick:function(e,t,r){return N.push("/roles/remove/".concat(r.uuid))}}]},ve=function(){return j||k?[l().createElement(u.Link,{to:O.Z["add-role"].path,key:"add-role",className:"rbac-m-hide-on-sm"},l().createElement(p.Button,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role"},T.formatMessage(g.Z.createRole)))].concat((0,n.Z)(function(e){return(null==me?void 0:me[e])<=me.sm}(B)?[{label:T.formatMessage(g.Z.createRole),onClick:function(){N.push(O.Z["add-role"].path)}}]:[]),[{label:T.formatMessage(g.Z.edit),props:{isDisabled:!(1===x.length)},onClick:function(){return N.push("/roles/edit/".concat(x[0].uuid))}},{label:T.formatMessage(g.Z.delete),props:{isDisabled:!x.length>0},onClick:function(){N.push("/roles/remove/".concat(x.map((function(e){return e.uuid}))))}}]):[]},ye=function(e){L((function(t){return e(t).filter((function(e){var t=e.platform_default,r=e.admin_default,n=e.system;return!(t||r||n)})).map((function(e){return{uuid:e.uuid,label:e.name}}))}))},he=function(e,t,r,n,o){return pe(Oe(Oe({},de),{},(0,a.Z)({},o.uuid,n?-1:r+Number(!G))))},Ee=function(e,t,r,a){return e.reduce((function(e,s,c){var b,v=s.uuid,y=s.access,h=void 0===y?[]:y,Z=s.display_name,E=s.name,O=s.description,R=s.system,w=s.accessCount,M=s.groups_in_count,P=s.groups_in,j=s.modified;return[].concat((0,n.Z)(e),[{uuid:v,system:R,disableSelection:!!R,selected:Boolean(null==t||null===(b=t.find)||void 0===b?void 0:b.call(t,(function(e){return e.uuid===v}))),cells:[{title:l().createElement(u.Link,{to:"/roles/detail/".concat(v)},Z||E)},{title:O},{title:w,props:{isOpen:3===a[v]}},{title:M,props:{isOpen:4===a[v]}},{title:l().createElement(f.Z,{date:j,type:(0,m.mh)(j)})}]},{uuid:"".concat(v,"-permissions"),parent:3*c,compoundParent:2,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:h.length>0?l().createElement(d.Table,{ouiaId:"groups-in-role-nested-table","aria-label":"Simple Table",variant:d.TableVariant.compact,cells:[r.formatMessage(g.Z.application),r.formatMessage(g.Z.resourceType),r.formatMessage(g.Z.operation),r.formatMessage(g.Z.lastCommit)],rows:h.map((function(e){var t=e.permission.split(":"),r=(0,o.Z)(t,3),n=r[0];return{cells:[n,r[1],r[2],l().createElement(i.Fragment,{key:"".concat(n,"-modified")},l().createElement(f.Z,{date:j,type:(0,m.mh)(j)}))]}}))},l().createElement(d.TableHeader,null),l().createElement(d.TableBody,null)):l().createElement(p.Text,{className:"pf-u-mx-lg pf-u-my-sm"},r.formatMessage(g.Z.noPermissions))}]},{uuid:"".concat(v,"-groups"),parent:3*c,compoundParent:3,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:M>0?l().createElement(d.Table,{"aria-label":"Simple Table",ouiaId:"permissions-in-role-nested-table",variant:d.TableVariant.compact,cells:[r.formatMessage(g.Z.groupName),r.formatMessage(g.Z.description)],rows:P.map((function(e){return{cells:[e.name,e.description]}}))},l().createElement(d.TableHeader,null),l().createElement(d.TableBody,null)):l().createElement(p.Text,{className:"pf-u-mx-lg pf-u-my-sm"},r.formatMessage(g.Z.noGroups))}]}])}),[])}(F,x,T,de);return l().createElement(u.Switch,null,l().createElement(w.Z,{pageAction:"role-detail-permission",path:O.Z["role-detail-permission"].path},l().createElement(oe,null)),l().createElement(w.Z,{pageAction:"role-detail",path:O.Z["role-detail"].path},l().createElement(E.Z,{onDelete:function(){return ee("")}})),l().createElement(w.Z,{pageAction:"roles-list",path:O.Z.roles.path,render:function(){return l().createElement(p.Stack,{className:"rbac-c-roles"},l().createElement(p.StackItem,null,l().createElement(v.Q,null,l().createElement(v.y,{title:T.formatMessage(g.Z.roles)}))),l().createElement(p.StackItem,null,l().createElement(Z.Z,{type:"content",id:"tab-roles"},l().createElement(y.M,{isSelectable:G,checkedRows:x,textFilterRef:I,setCheckedItems:ye,actionResolver:be,columns:q,areActionsDisabled:function(e){return!!e.system},rowWrapper:Ze,rows:Ee,data:F,filterValue:$,fetchData:function(e){var t=e.name,r=e.count,n=e.limit,a=e.offset,o=e.orderBy;return(0,S.oG)(N,n,a),(0,le.MS)(N,{display_name:t}),H((0,m.jl)({count:r,limit:n,offset:a,orderBy:o,filters:{display_name:t}}))},setFilterValue:function(e){var t=e.name;return ee(void 0===t?"":t)},isExpandable:!0,onExpand:he,isLoading:!z&&0===(null==F?void 0:F.length)&&0===(null==$?void 0:$.length)||z,pagination:X,routes:fe,ouiaId:"roles-table",titlePlural:T.formatMessage(g.Z.roles).toLowerCase(),titleSingular:T.formatMessage(g.Z.role).toLowerCase(),toolbarButtons:ve,filterPlaceholder:T.formatMessage(g.Z.name).toLowerCase(),tableId:"roles",sortBy:ne,onSort:function(e,t,r){var n="".concat("desc"===r?"-":"").concat(q[t-Number(G)].key);ae({index:t,direction:r}),function(e){var t=e.name,r=e.count,n=e.limit,a=e.offset,o=e.orderBy;(0,S.oG)(N,n,a),(0,le.MS)(N,{display_name:t}),H((0,m.jl)({count:r,limit:n,offset:a,orderBy:o,filters:{display_name:t}}))}(Oe(Oe({},X),{},{offset:0,orderBy:n},(null==A?void 0:A.length)>0?Oe({},A.reduce((function(e,t){return Oe(Oe({},e),{},(0,a.Z)({},t.key,t.value))}),{})):{name:$}))}}))))}}))}}}]);
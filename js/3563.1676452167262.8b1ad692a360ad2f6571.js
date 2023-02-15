"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[3563,7664],{79995:(e,t)=>{t.U6={name:"--pf-global--breakpoint--xs",value:"0",var:"var(--pf-global--breakpoint--xs)"},t.ZP=t.U6},97857:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Me});var n=r(93433),a=r(4942),o=r(29439),i=r(92950),l=r.n(i),s=r(86896),c=r(28216),u=r(334),d=r(1936),f=r(76857),p=r(64107),m=r(11107),g=r(30893),b=r(28090),v=r(38376),y=r(30060),h=r(13063),Z=r(44873),E=r(15608),O=r(4682),R=r(93436),w=r(93327),P=r(94124),M=function(e){return e.reduce((function(e,t){return[].concat((0,n.Z)(e),[{cells:[t]}])}),[])},j=r(39173),S=r(19571),k=r(61338),_=r(87462),D=r(45697),x=r.n(D),L=r(96354),T=r(36457),C=r(29215),I=r(46966),N=r(73943),B=r(45987),V=r(40483),F=r(48880),A=["ModalProps"];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t=e.ModalProps,r=(0,B.Z)(e,A),n=(0,s.Z)(),a=(0,F.default)().getState().values;return l().createElement(V.Z,(0,_.Z)({},r,{ModalProps:z(z({},t),{},{onClose:function(){return t.onClose(a)}}),alert:a["dual-list-select"]?void 0:function(){return l().createElement("div",{className:"rbac-m-resource-definitions"},l().createElement(f.Alert,{className:"pf-c-modal__alert",variant:"danger",isInline:!0,title:n.formatMessage(g.Z.defineAtLeastOneResource)}))}}))};q.propTypes={ModalProps:x().object};const H=q;var G=r(42348),U=r.n(G);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function J(e,t){if("update"===t.type)return X(X({},e),t.payload);throw new Error}var Y=function(e,t,r){var a=(0,s.Z)();return{fields:[{component:L.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:a.formatMessage(g.Z.resourcesAvailable),rightTitle:a.formatMessage(g.Z.resourcesDefined),filterOptionsTitle:a.formatMessage(g.Z.filterByResource),filterValueTitle:a.formatMessage(g.Z.filterByResource),options:(0,n.Z)(t&&e?r:[]),validate:[{type:"validate-resources"}],isSearchable:!0}]}},$={"validate-resources":function(){return function(e){return e&&e.length>0?void 0:"At least one resource must be defined for this permission"}}},ee=function(e){var t=e.cancelRoute,r=(0,s.Z)(),a=(0,u.useRouteMatch)(O.Z["role-detail-permission-edit"].path),d=(0,u.useRouteMatch)(a).params,p=d.permissionId,m=d.roleId,v=(0,u.useHistory)(),y=v.replace,h=v.push,Z=(0,c.useDispatch)(),E=(0,i.useReducer)(J,K),R=(0,o.Z)(E,2),w=R[0],P=R[1],M=(0,c.useSelector)((function(e){var t;return{role:e.roleReducer.selectedRole,definedResources:null!==(t=e.roleReducer.selectedRole)&&void 0!==t&&t.access?U()(e.roleReducer.selectedRole.access.filter((function(e){return e.permission===p})).map((function(e){return e.resourceDefinitions.map((function(e){return e.attributeFilter.value}))}))):[],isRecordLoading:e.roleReducer.isRecordLoading}}),c.shallowEqual),j=M.definedResources,S=M.role,k=(0,c.useSelector)((function(e){return function(e,t){var r=e.costReducer,n=r.resourceTypes,a=r.isLoading,o=r.loadingResources,i=r.resources;return{resourceTypes:n.data,resources:i[t]?{resourcesPath:i[t]}:i,isLoading:a,isLoadingResources:o>0}}(e,w.resourcesPath)}),c.shallowEqual),D=k.resourceTypes,x=k.isLoading,L=k.isLoadingResources,B=k.resources;(0,i.useEffect)((function(){Z((0,C.A)())}),[p]),(0,i.useEffect)((function(){if(!x){var e,t=null===(e=D.find((function(e){var t;return e.value===(null===(t=p.split(":"))||void 0===t?void 0:t[1])})))||void 0===e?void 0:e.path;t&&(P({type:"update",payload:{resourcesPath:t.split("/")[5]}}),Z((0,C.R)(t)))}}),[D]);var V=function(){return y(t)},F=function(e){e["dual-list-select"]===j?V():P({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},A=function(e){return Object.entries(e).reduce((function(e,t){var r=(0,o.Z)(t,2),a=r[0],i=r[1];return[].concat((0,n.Z)(e),(0,n.Z)(i.map((function(e){return{value:e.value,path:a,label:e.value}}))))}),[])}(B);return l().createElement(l().Fragment,null,l().createElement(N.R,{customTitle:r.formatMessage(g.Z.exitEditResourceDefinitions),customDescription:r.formatMessage(g.Z.changesWillBeLost),isOpen:w.cancelWarningVisible,onModalCancel:function(){return P({type:"update",payload:{cancelWarningVisible:!1}})},onConfirmCancel:V}),(x||L)&&w.loadingStateVisible?l().createElement(f.Modal,{variant:f.ModalVariant.large,className:"rbac-m-resource-definitions",isOpen:!0,title:r.formatMessage(g.Z.editResourceDefinitions),onClose:function(){P({type:"update",payload:{loadingStateVisible:!1}}),V()}},l().createElement(f.Bullseye,null,l().createElement(f.Spinner,null))):l().createElement(T.Z,{schema:Y(B,w.resourcesPath,A),componentMapper:I.ZP,initialValues:{"dual-list-select":w.changedResources||j||[]},onSubmit:function(e){var r;P({type:"update",payload:{changedResources:e["dual-list-select"]}});var a={permission:p,resourceDefinitions:[{attributeFilter:{key:"cost-management.".concat(null===(r=p.split(":"))||void 0===r?void 0:r[1]),operation:1===e["dual-list-select"].length?"equal":"in",value:1===e["dual-list-select"].length?e["dual-list-select"][0]:e["dual-list-select"]}}]};Z((0,b.ul)(m,X(X({},S),{},{access:[].concat((0,n.Z)(S.access.filter((function(e){return e.permission!==p}))),[a])})),!0).then((function(){Z((0,b.fp)(m)),h(t)}))},onCancel:function(e){return F(e)},validatorMapper:$,FormTemplate:function(e){return l().createElement(H,(0,_.Z)({},e,{ModalProps:{onClose:F,isOpen:!w.cancelWarningVisible,variant:"large",title:r.formatMessage(g.Z.editResourceDefinitions),description:r.formatMessage(g.Z.editPermissionsUsingArrows)}}))}}))};ee.propTypes={cancelRoute:x().string.isRequired};const te=ee;var re=r(85564),ne=r.n(re);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ie=function(){var e=(0,s.Z)(),t=(0,i.useState)({pagination:oe(oe({},k.he),{},{filter:""})}),r=(0,o.Z)(t,2),n=r[0],a=r[1],d=n.pagination,p=n.filter,y=(0,c.useDispatch)(),h=(0,u.useParams)(),Z=h.roleId,E=h.permissionId,R=(0,c.useSelector)((function(e){var t,r,n,a,o;return{role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?oe({},null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access.find((function(e){return e.permission===E}))):{},isRecordLoading:e.roleReducer.isRecordLoading,rolesPagination:(null===(r=e.roleReducer)||void 0===r||null===(n=r.roles)||void 0===n?void 0:n.pagination)||k.he,rolesFilters:(null===(a=e.roleReducer)||void 0===a||null===(o=a.roles)||void 0===o?void 0:o.filters)||{}}}),c.shallowEqual),w=R.role,_=R.permission,D=R.isRecordLoading,x=R.rolesPagination,L=R.rolesFilters;(0,i.useEffect)((function(){y((0,b.fp)(Z))}),[Z]),(0,i.useEffect)((function(){a(oe(oe({},n),{},{pagination:oe(oe({},n.pagination),{},{count:w.access?w.access.length:0})}))}),[w]);var T=_.resourceDefinitions?ne()(_.resourceDefinitions.map((function(e){return e.attributeFilter.value}))).filter((function(e){return!p||e.includes(p)})):[],C=function(){return l().createElement(i.Fragment,null,l().createElement(u.Route,{exact:!0,path:O.Z["role-detail-permission-edit"].path},l().createElement(te,{cancelRoute:O.Z["role-detail-permission"].path.replace(":roleId",Z).replace(":permissionId",E)})))};return l().createElement(i.Fragment,null,l().createElement(v.Q,{breadcrumbs:[{title:e.formatMessage(g.Z.roles),to:(0,m.zk)(C.roles,x,L)},{title:D?void 0:w&&(w.display_name||w.name),to:"/roles/detail/".concat(Z)},{title:E,isActive:!0}]},l().createElement(f.Level,null,l().createElement(f.LevelItem,null,l().createElement(j.Z,{title:E||l().createElement(S.h2,null),className:"rbac-page-header__title"})))),l().createElement("section",{className:"pf-c-page__main-section rbac-c-role__permissions"},l().createElement(f.TextContent,null,l().createElement(f.Text,{component:f.TextVariants.h1},e.formatMessage(g.Z.definedResources))),l().createElement(P.f,{columns:[{}],createRows:M,data:T.slice(d.offset,d.offset+d.limit),filterValue:p,fetchData:function(e){var t=e.limit,r=e.offset,o=e.name;return a(oe(oe({},n),{},{filter:o,pagination:oe(oe({},n.pagination),{},{limit:t,offset:r})}))},isCompact:!0,routes:C,setFilterValue:function(e){var t=e.name;return a(oe(oe({},n),{},{filter:t}))},toolbarButtons:function(){return w.system?[]:[l().createElement(i.Fragment,{key:"edit-resource-definitions"},l().createElement(u.Link,{to:"/roles/detail/".concat(Z,"/permission/").concat(E,"/edit")},l().createElement(f.Button,{variant:"primary","aria-label":"Edit"},e.formatMessage(g.Z.edit))))]},isLoading:D,pagination:oe(oe({},d),{},{count:T.length}),titlePlural:e.formatMessage(g.Z.resources).toLowerCase(),titleSingular:e.formatMessage(g.Z.resource).toLowerCase(),hideHeader:!0,tableId:"role-resource-definitions"})))};var le=r(26794),se=r(92758),ce=r(79995),ue=r(60144),de=r(78236),fe=r(92732),pe=r(63242),me=r(40472);const ge={xs:parseInt(ce.ZP.value.replace("px","")),sm:parseInt(ue.default.value.replace("px","")),md:parseInt(de.default.value.replace("px","")),lg:parseInt(fe.default.value.replace("px","")),xl:parseInt(pe.default.value.replace("px","")),"2xl":parseInt(me.default.value.replace("px",""))},be=function(){for(var e,t=window.innerWidth,r=0,n=Object.entries(ge);r<n.length;r++){var a=n[r],o=a[0];if(a[1]>=t)break;e=o}return e};var ve=r(94184),ye=r.n(ve),he=["className","row"],Ze=function(e){var t=e.className,r=e.row,n=(0,B.Z)(e,he);return l().createElement(d.RowWrapper,(0,_.Z)({className:ye()(t,{"rbac-c-role-default":r.system}),row:r},n))};Ze.propTypes={row:x().shape({system:x().bool}),className:x().string};const Ee=Ze;function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var we=(0,i.lazy)((function(){return r.e(8607).then(r.bind(r,68607))})),Pe=function(e){var t=e.roleReducer,r=t.roles,n=t.isLoading;return{roles:r.data,filters:r.filters,meta:r.pagination,isLoading:n}};const Me=function(){var e,t,r,P,M=(0,i.useContext)(le.Z),j=M.orgAdmin,S=M.userAccessAdministrator,_=(0,i.useState)([]),D=(0,o.Z)(_,2),x=D[0],L=D[1],T=(0,s.Z)(),C=(0,c.useDispatch)(),I=(0,i.useRef)(null),N=(0,u.useHistory)(),B=(e=(0,i.useState)((function(){return be()})),t=e[0],r=e[1],P=(0,i.useRef)(t),(0,i.useEffect)((function(){function e(){var e=be();e!==P.current&&(P.current=e,r(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t),V=(0,c.useSelector)(Pe,c.shallowEqual),F=V.roles,A=V.filters,W=V.meta,z=V.isLoading,q=[{title:T.formatMessage(g.Z.name),key:"display_name",transforms:[(0,d.cellWidth)(20),d.sortable]},{title:T.formatMessage(g.Z.description)},{title:T.formatMessage(g.Z.permissions),cellTransforms:[d.compoundExpand],transforms:[d.nowrap]},{title:T.formatMessage(g.Z.groups),cellTransforms:[d.compoundExpand],transforms:[d.nowrap]},{title:T.formatMessage(g.Z.lastModified),key:"modified",transforms:[d.nowrap,d.sortable]}],H=function(e){return C((0,b.Kt)(Re(Re({},e),{},{inModal:!1})))},G=j||S,U=(0,i.useState)(Re(Re({},j?k.HE:k.he),W)),Q=(0,o.Z)(U,2),X=Q[0],K=Q[1],J=(0,i.useState)(A.display_name||""),Y=(0,o.Z)(J,2),$=Y[0],ee=Y[1],te=(0,i.useState)({index:Number(G),direction:"asc"}),re=(0,o.Z)(te,2),ne=re[0],ae=re[1],oe="".concat("desc"===(null==ne?void 0:ne.direction)?"-":"").concat(q[(null==ne?void 0:ne.index)-Number(G)].key),ce=(0,i.useState)({}),ue=(0,o.Z)(ce,2),de=ue[0],fe=ue[1];(0,i.useEffect)((function(){var e=(0,k.rj)(N,X);K(e);var t=(0,se.aX)(N,["display_name"],{display_name:$}).display_name;ee(t),insights.chrome.appNavClick({id:"roles",secondaryNav:!0}),H(Re(Re({},e),{},{orderBy:oe,filters:{display_name:t}}))}),[]),(0,i.useEffect)((function(){ee((null==A?void 0:A.display_name)||""),K(W)}),[A,W]),(0,i.useEffect)((function(){W.redirected&&(0,k.oG)(N,W.limit,W.offset)}),[W.redirected]),(0,i.useEffect)((function(){(0,k.Zc)(N)||(0,k.oG)(N,X.limit,X.offset),(null==$?void 0:$.length)>0&&!(0,se.qF)(N,["display_name"])&&(0,se.aX)(N,["display_name"],{display_name:$})}));var pe=function(){return l().createElement(i.Suspense,{fallback:l().createElement(i.Fragment,null)},l().createElement(u.Route,{exact:!0,path:O.Z["add-role"].path},l().createElement(we,{pagination:X,orderBy:oe,filters:{display_name:$}})),l().createElement(u.Route,{exact:!0,path:O.Z["remove-role"].path},!z&&l().createElement(h.Z,{routeMatch:O.Z["remove-role"].path,afterSubmit:function(){L([]),H(Re(Re({},X),{},{offset:0,orderBy:oe,filters:{display_name:$}}))},cancelRoute:(0,m.zk)(O.Z.roles.path,X,A),submitRoute:(0,m.zk)(O.Z.roles.path,Re(Re({},X),{},{offset:0}),A)})),l().createElement(u.Route,{exact:!0,path:O.Z["edit-role"].path},!z&&l().createElement(R.Z,{afterSubmit:function(){return H(Re(Re({},X),{},{offset:0,orderBy:oe,filters:{display_name:$}}))},routeMatch:O.Z["edit-role"].path,cancelRoute:(0,m.zk)(O.Z.roles.path,X,A),submitRoute:(0,m.zk)(O.Z.roles.path,Re(Re({},X),{},{offset:0}),A)})))},me=function(e){return e.compoundParent?[]:[{title:T.formatMessage(g.Z.edit),onClick:function(e,t,r){return N.push("/roles/edit/".concat(r.uuid))}},{title:T.formatMessage(g.Z.delete),onClick:function(e,t,r){return N.push("/roles/remove/".concat(r.uuid))}}]},ve=function(){return j||S?[l().createElement(u.Link,{to:O.Z["add-role"].path,key:"add-role",className:"rbac-m-hide-on-sm"},l().createElement(f.Button,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role"},T.formatMessage(g.Z.createRole)))].concat((0,n.Z)(function(e){return(null==ge?void 0:ge[e])<=ge.sm}(B)?[{label:T.formatMessage(g.Z.createRole),onClick:function(){N.push(O.Z["add-role"].path)}}]:[]),[{label:T.formatMessage(g.Z.edit),props:{isDisabled:!(1===x.length)},onClick:function(){return N.push("/roles/edit/".concat(x[0].uuid))}},{label:T.formatMessage(g.Z.delete),props:{isDisabled:!x.length>0},onClick:function(){N.push("/roles/remove/".concat(x.map((function(e){return e.uuid}))))}}]):[]},ye=function(e){L((function(t){return e(t).filter((function(e){var t=e.platform_default,r=e.admin_default,n=e.system;return!(t||r||n)})).map((function(e){return{uuid:e.uuid,label:e.name}}))}))},he=function(e,t,r,n,o){return fe(Re(Re({},de),{},(0,a.Z)({},o.uuid,n?-1:r+Number(!G))))},Ze=function(e,t,r,a){return e.reduce((function(e,s,c){var b,v=s.uuid,y=s.access,h=void 0===y?[]:y,Z=s.display_name,E=s.name,O=s.description,R=s.system,w=s.accessCount,P=s.groups_in_count,M=s.groups_in,j=s.modified;return[].concat((0,n.Z)(e),[{uuid:v,system:R,disableSelection:!!R,selected:Boolean(null==t||null===(b=t.find)||void 0===b?void 0:b.call(t,(function(e){return e.uuid===v}))),cells:[{title:l().createElement(u.Link,{to:"/roles/detail/".concat(v)},Z||E)},{title:O},{title:w,props:{isOpen:3===a[v]}},{title:P,props:{isOpen:4===a[v]}},{title:l().createElement(p.Z,{date:j,type:(0,m.mh)(j)})}]},{uuid:"".concat(v,"-permissions"),parent:3*c,compoundParent:2,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:h.length>0?l().createElement(d.Table,{ouiaId:"groups-in-role-nested-table","aria-label":"Simple Table",variant:d.TableVariant.compact,cells:[r.formatMessage(g.Z.application),r.formatMessage(g.Z.resourceType),r.formatMessage(g.Z.operation),r.formatMessage(g.Z.lastCommit)],rows:h.map((function(e){var t=e.permission.split(":"),r=(0,o.Z)(t,3),n=r[0];return{cells:[n,r[1],r[2],l().createElement(i.Fragment,{key:"".concat(n,"-modified")},l().createElement(p.Z,{date:j,type:(0,m.mh)(j)}))]}}))},l().createElement(d.TableHeader,null),l().createElement(d.TableBody,null)):l().createElement(f.Text,{className:"pf-u-mx-lg pf-u-my-sm"},r.formatMessage(g.Z.noPermissions))}]},{uuid:"".concat(v,"-groups"),parent:3*c,compoundParent:3,fullWidth:!0,noPadding:!0,cells:[{props:{colSpan:7,className:"pf-m-no-padding"},title:P>0?l().createElement(d.Table,{"aria-label":"Simple Table",ouiaId:"permissions-in-role-nested-table",variant:d.TableVariant.compact,cells:[r.formatMessage(g.Z.groupName),r.formatMessage(g.Z.description)],rows:M.map((function(e){return{cells:[e.name,e.description]}}))},l().createElement(d.TableHeader,null),l().createElement(d.TableBody,null)):l().createElement(f.Text,{className:"pf-u-mx-lg pf-u-my-sm"},r.formatMessage(g.Z.noGroups))}]}])}),[])}(F,x,T,de);return l().createElement(u.Switch,null,l().createElement(w.Z,{pageAction:"role-detail-permission",path:O.Z["role-detail-permission"].path},l().createElement(ie,null)),l().createElement(w.Z,{pageAction:"role-detail",path:O.Z["role-detail"].path},l().createElement(E.Z,{onDelete:function(){return ee("")}})),l().createElement(w.Z,{pageAction:"roles-list",path:O.Z.roles.path,render:function(){return l().createElement(f.Stack,{className:"rbac-c-roles"},l().createElement(f.StackItem,null,l().createElement(v.Q,null,l().createElement(v.y,{title:T.formatMessage(g.Z.roles)}))),l().createElement(f.StackItem,null,l().createElement(Z.Z,{type:"content",id:"tab-roles"},l().createElement(y.M,{isSelectable:G,checkedRows:x,textFilterRef:I,setCheckedItems:ye,actionResolver:me,sortBy:ne,columns:q,areActionsDisabled:function(e){return!!e.system},rowWrapper:Ee,rows:Ze,data:F,filterValue:$,fetchData:function(e){var t=e.name,r=e.count,n=e.limit,a=e.offset,o=e.orderBy;return(0,k.oG)(N,n,a),(0,se.MS)(N,{display_name:t}),H((0,m.jl)({count:r,limit:n,offset:a,orderBy:o,filters:{display_name:t}}))},setFilterValue:function(e){var t=e.name;return ee(void 0===t?"":t)},isExpandable:!0,onExpand:he,isLoading:!z&&0===(null==F?void 0:F.length)&&0===(null==$?void 0:$.length)||z,pagination:X,routes:pe,ouiaId:"roles-table",titlePlural:T.formatMessage(g.Z.roles).toLowerCase(),titleSingular:T.formatMessage(g.Z.role).toLowerCase(),toolbarButtons:ve,filterPlaceholder:T.formatMessage(g.Z.name).toLowerCase(),tableId:"roles",testRoles:!0,onSort:function(e,t,r){var n="".concat("desc"===r?"-":"").concat(q[t-Number(G)].key);ae({index:t,direction:r}),function(e){var t=e.name,r=e.count,n=e.limit,a=e.offset,o=e.orderBy;(0,k.oG)(N,n,a),(0,se.MS)(N,{display_name:t}),H((0,m.jl)({count:r,limit:n,offset:a,orderBy:o,filters:{display_name:t}}))}(Re(Re({},X),{},{offset:0,orderBy:n},(null==A?void 0:A.length)>0?Re({},A.reduce((function(e,t){return Re(Re({},e),{},(0,a.Z)({},t.key,t.value))}),{})):{name:$}))}}))))}}))}}}]);
//# sourceMappingURL=../sourcemaps/3563.5f8a12a119ba204d1b64b6b4e2ba8b93.js.map
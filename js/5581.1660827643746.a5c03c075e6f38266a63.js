"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[5581,7664],{40472:(e,t)=>{t.DT={name:"--pf-global--breakpoint--2xl",value:"1450px",var:"var(--pf-global--breakpoint--2xl)"},t.ZP=t.DT},92732:(e,t)=>{t.s6={name:"--pf-global--breakpoint--lg",value:"992px",var:"var(--pf-global--breakpoint--lg)"},t.ZP=t.s6},60144:(e,t)=>{t.A4={name:"--pf-global--breakpoint--sm",value:"576px",var:"var(--pf-global--breakpoint--sm)"},t.ZP=t.A4},63242:(e,t)=>{t.yk={name:"--pf-global--breakpoint--xl",value:"1200px",var:"var(--pf-global--breakpoint--xl)"},t.ZP=t.yk},79995:(e,t)=>{t.U6={name:"--pf-global--breakpoint--xs",value:"0",var:"var(--pf-global--breakpoint--xs)"},t.ZP=t.U6},85127:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ee});var n=r(93433),a=r(29439),o=r(4942),i=r(92950),l=r.n(i),s=r(86896),c=r(28216),u=r(334),f=r(1936),p=r(57262),d=r(64107),m=r(11107),g=function(e){return e.reduce((function(e,t){var r=t.uuid,a=t.display_name,o=t.name,s=t.description,c=t.system,f=t.accessCount,p=t.groups_in_count,g=t.modified;return[].concat((0,n.Z)(e),[{uuid:r,system:c,cells:[l().createElement(i.Fragment,{key:"".concat(r,"-name")},l().createElement(u.Link,{to:"/roles/detail/".concat(r)},a||o)),s,l().createElement(i.Fragment,{key:"".concat(r,"-accessCount")},l().createElement(u.Link,{to:"/roles/detail/".concat(r)},f)),p,l().createElement(i.Fragment,{key:"".concat(r,"-modified")},l().createElement(d.Z,{date:g,type:(0,m.mh)(g)}))]}])}),[])},v=r(28090),b=r(38376),y=r(41800),h=r(13063),Z=r(44873),E=r(15608),O=r(4682),R=r(88040),P=r(93327),w=function(e){return e.reduce((function(e,t){return[].concat((0,n.Z)(e),[{cells:[t]}])}),[])},j=r(39173),M=r(19571),k=r(61338),S=r(87462),D=r(45697),L=r.n(D),_=r(96354),x=r(36457),C=r(29215),I=r(46966),T=r(73943),F=r(45987),A=r(40483),V=r(48880),B=r(30893),N=["ModalProps"];function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t=e.ModalProps,r=(0,F.Z)(e,N),n=(0,s.Z)(),a=(0,V.default)().getState().values;return l().createElement(A.Z,(0,S.Z)({},r,{ModalProps:W(W({},t),{},{onClose:function(){return t.onClose(a)}}),alert:a["dual-list-select"]?void 0:function(){return l().createElement("div",{className:"rbac-m-resource-definitions"},l().createElement(p.Alert,{className:"pf-c-modal__alert",variant:"danger",isInline:!0,title:n.formatMessage(B.Z.defineAtLeastOneResource)}))}}))};q.propTypes={ModalProps:L().object};const H=q;var U=r(42348),G=r.n(U);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function J(e,t){if("update"===t.type)return X(X({},e),t.payload);throw new Error}var Y=function(e,t,r){var a=(0,s.Z)();return{fields:[{component:_.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:a.formatMessage(B.Z.resourcesAvailable),rightTitle:a.formatMessage(B.Z.resourcesDefined),filterOptionsTitle:a.formatMessage(B.Z.filterByResource),filterValueTitle:a.formatMessage(B.Z.filterByResource),options:(0,n.Z)(t&&e?r:[]),validate:[{type:"validate-resources"}],isSearchable:!0}]}},$={"validate-resources":function(){return function(e){return e&&e.length>0?void 0:"At least one resource must be defined for this permission"}}},ee=function(e){var t=e.cancelRoute,r=(0,s.Z)(),o=(0,u.useRouteMatch)(O.Z["role-detail-permission-edit"].path),f=(0,u.useRouteMatch)(o).params,d=f.permissionId,m=f.roleId,g=(0,u.useHistory)(),b=g.replace,y=g.push,h=(0,c.useDispatch)(),Z=(0,i.useReducer)(J,K),E=(0,a.Z)(Z,2),R=E[0],P=E[1],w=(0,c.useSelector)((function(e){var t;return{role:e.roleReducer.selectedRole,definedResources:null!==(t=e.roleReducer.selectedRole)&&void 0!==t&&t.access?G()(e.roleReducer.selectedRole.access.filter((function(e){return e.permission===d})).map((function(e){return e.resourceDefinitions.map((function(e){return e.attributeFilter.value}))}))):[],isRecordLoading:e.roleReducer.isRecordLoading}}),c.shallowEqual),j=w.definedResources,M=w.role,k=(0,c.useSelector)((function(e){return function(e,t){var r=e.costReducer,n=r.resourceTypes,a=r.isLoading,o=r.loadingResources,i=r.resources;return{resourceTypes:n.data,resources:i[t]?{resourcesPath:i[t]}:i,isLoading:a,isLoadingResources:o>0}}(e,R.resourcesPath)}),c.shallowEqual),D=k.resourceTypes,L=k.isLoading,_=k.isLoadingResources,F=k.resources;(0,i.useEffect)((function(){h((0,C.A)())}),[d]),(0,i.useEffect)((function(){if(!L){var e,t=null===(e=D.find((function(e){var t;return e.value===(null===(t=d.split(":"))||void 0===t?void 0:t[1])})))||void 0===e?void 0:e.path;t&&(P({type:"update",payload:{resourcesPath:t.split("/")[5]}}),h((0,C.R)(t)))}}),[D]);var A=function(){return b(t)},V=function(e){e["dual-list-select"]===j?A():P({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},N=function(e){return Object.entries(e).reduce((function(e,t){var r=(0,a.Z)(t,2),o=r[0],i=r[1];return[].concat((0,n.Z)(e),(0,n.Z)(i.map((function(e){return{value:e.value,path:o,label:e.value}}))))}),[])}(F);return l().createElement(l().Fragment,null,l().createElement(T.R,{customTitle:r.formatMessage(B.Z.exitEditResourceDefinitions),customDescription:r.formatMessage(B.Z.changesWillBeLost),isOpen:R.cancelWarningVisible,onModalCancel:function(){return P({type:"update",payload:{cancelWarningVisible:!1}})},onConfirmCancel:A}),(L||_)&&R.loadingStateVisible?l().createElement(p.Modal,{variant:p.ModalVariant.large,className:"rbac-m-resource-definitions",isOpen:!0,title:r.formatMessage(B.Z.editResourceDefinitions),onClose:function(){P({type:"update",payload:{loadingStateVisible:!1}}),A()}},l().createElement(p.Bullseye,null,l().createElement(p.Spinner,null))):l().createElement(x.Z,{schema:Y(F,R.resourcesPath,N),componentMapper:I.ZP,initialValues:{"dual-list-select":R.changedResources||j||[]},onSubmit:function(e){var r;P({type:"update",payload:{changedResources:e["dual-list-select"]}});var a={permission:d,resourceDefinitions:[{attributeFilter:{key:"cost-management.".concat(null===(r=d.split(":"))||void 0===r?void 0:r[1]),operation:1===e["dual-list-select"].length?"equal":"in",value:1===e["dual-list-select"].length?e["dual-list-select"][0]:e["dual-list-select"]}}]};h((0,v.ul)(m,X(X({},M),{},{access:[].concat((0,n.Z)(M.access.filter((function(e){return e.permission!==d}))),[a])})),!0).then((function(){h((0,v.fp)(m)),y(t)}))},onCancel:function(e){return V(e)},validatorMapper:$,FormTemplate:function(e){return l().createElement(H,(0,S.Z)({},e,{ModalProps:{onClose:V,isOpen:!R.cancelWarningVisible,variant:"large",title:r.formatMessage(B.Z.editResourceDefinitions),description:r.formatMessage(B.Z.editPermissionsUsingArrows)}}))}}))};ee.propTypes={cancelRoute:L().string.isRequired};const te=ee;var re=r(85564),ne=r.n(re);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ie=function(){var e=(0,s.Z)(),t=(0,i.useState)({pagination:oe(oe({},k.he),{},{filter:""})}),r=(0,a.Z)(t,2),n=r[0],o=r[1],f=n.pagination,d=n.filter,g=(0,c.useDispatch)(),h=(0,u.useParams)(),Z=h.roleId,E=h.permissionId,R=(0,c.useSelector)((function(e){var t,r,n,a,o;return{role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?oe({},null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access.find((function(e){return e.permission===E}))):{},isRecordLoading:e.roleReducer.isRecordLoading,rolesPagination:(null===(r=e.roleReducer)||void 0===r||null===(n=r.roles)||void 0===n?void 0:n.pagination)||k.he,rolesFilters:(null===(a=e.roleReducer)||void 0===a||null===(o=a.roles)||void 0===o?void 0:o.filters)||{}}}),c.shallowEqual),P=R.role,S=R.permission,D=R.isRecordLoading,L=R.rolesPagination,_=R.rolesFilters;(0,i.useEffect)((function(){g((0,v.fp)(Z))}),[Z]),(0,i.useEffect)((function(){o(oe(oe({},n),{},{pagination:oe(oe({},n.pagination),{},{count:P.access?P.access.length:0})}))}),[P]);var x=S.resourceDefinitions?ne()(S.resourceDefinitions.map((function(e){return e.attributeFilter.value}))).filter((function(e){return!d||e.includes(d)})):[],C=function(){return l().createElement(i.Fragment,null,l().createElement(u.Route,{exact:!0,path:O.Z["role-detail-permission-edit"].path},l().createElement(te,{cancelRoute:O.Z["role-detail-permission"].path.replace(":roleId",Z).replace(":permissionId",E)})))};return l().createElement(i.Fragment,null,l().createElement(b.Q,{breadcrumbs:[{title:e.formatMessage(B.Z.roles),to:(0,m.zk)(C.roles,L,_)},{title:D?void 0:P&&(P.display_name||P.name),to:"/roles/detail/".concat(Z)},{title:E,isActive:!0}]},l().createElement(p.Level,null,l().createElement(p.LevelItem,null,l().createElement(j.Z,{title:E||l().createElement(M.h2,null),className:"rbac-page-header__title"})))),l().createElement("section",{className:"pf-c-page__main-section rbac-c-role__permissions"},l().createElement(p.TextContent,null,l().createElement(p.Text,{component:p.TextVariants.h1},e.formatMessage(B.Z.definedResources))),l().createElement(y.M,{columns:[{}],createRows:w,data:x.slice(f.offset,f.offset+f.limit),filterValue:d,fetchData:function(e){var t=e.limit,r=e.offset,a=e.name;return o(oe(oe({},n),{},{filter:a,pagination:oe(oe({},n.pagination),{},{limit:t,offset:r})}))},isCompact:!0,routes:C,setFilterValue:function(e){var t=e.name;return o(oe(oe({},n),{},{filter:t}))},toolbarButtons:function(){return P.system?[]:[l().createElement(i.Fragment,{key:"edit-resource-definitions"},l().createElement(u.Link,{to:"/roles/detail/".concat(Z,"/permission/").concat(E,"/edit")},l().createElement(p.Button,{variant:"primary","aria-label":"Edit"},e.formatMessage(B.Z.edit))))]},isLoading:D,pagination:oe(oe({},f),{},{count:x.length}),titlePlural:e.formatMessage(B.Z.resources).toLowerCase(),titleSingular:e.formatMessage(B.Z.resource).toLowerCase(),hideHeader:!0,tableId:"role-resource-definitions"})))};var le=r(26794),se=r(92758),ce=r(79995),ue=r(60144),fe=r(78236),pe=r(92732),de=r(63242),me=r(40472);const ge={xs:parseInt(ce.ZP.value.replace("px","")),sm:parseInt(ue.ZP.value.replace("px","")),md:parseInt(fe.ZP.value.replace("px","")),lg:parseInt(pe.ZP.value.replace("px","")),xl:parseInt(de.ZP.value.replace("px","")),"2xl":parseInt(me.ZP.value.replace("px",""))},ve=function(){for(var e,t=window.innerWidth,r=0,n=Object.entries(ge);r<n.length;r++){var a=n[r],o=a[0];if(a[1]>=t)break;e=o}return e};function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he=(0,i.lazy)((function(){return r.e(8607).then(r.bind(r,68607))})),Ze=function(e){var t=e.roleReducer,r=t.roles,n=t.isLoading;return{roles:r.data,filters:r.filters,meta:r.pagination,isLoading:n}};const Ee=function(){var e,t,r,o,d=(0,s.Z)(),w=(0,c.useDispatch)(),j=(0,u.useHistory)().push,M=(0,c.useSelector)(Ze,c.shallowEqual),S=M.roles,D=M.isLoading,L=M.filters,_=M.meta,x=function(e){return w((0,v.Kt)(ye(ye({},e),{},{inModal:!1})))},C=(0,u.useHistory)(),I=(0,i.useContext)(le.Z),T=I.userAccessAdministrator,F=I.orgAdmin,A=(0,i.useState)(_),V=(0,a.Z)(A,2),N=V[0],z=V[1],W=(0,i.useState)(L.display_name||""),q=(0,a.Z)(W,2),H=q[0],U=q[1],G=(e=(0,i.useState)((function(){return ve()})),t=e[0],r=e[1],o=(0,i.useRef)(t),(0,i.useEffect)((function(){function e(){var e=ve();e!==o.current&&(o.current=e,r(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t),Q=[{title:d.formatMessage(B.Z.name),key:"display_name",transforms:[(0,f.cellWidth)(20),f.sortable]},{title:d.formatMessage(B.Z.description)},{title:d.formatMessage(B.Z.permissions),transforms:[f.nowrap]},{title:d.formatMessage(B.Z.groups),transforms:[f.nowrap]},{title:d.formatMessage(B.Z.lastModified),key:"modified",transforms:[f.nowrap,f.sortable]}];(0,i.useEffect)((function(){var e=(0,k.rj)(C,N);z(e);var t=(0,se.aX)(C,["display_name"],{display_name:H}).display_name;U(t),insights.chrome.appNavClick({id:"roles",secondaryNav:!0}),x(ye(ye({},e),{},{filters:{display_name:t}}))}),[]),(0,i.useEffect)((function(){U(L.display_name),z(_)}),[L,_]),(0,i.useEffect)((function(){_.redirected&&(0,k.oG)(C,_.limit,_.offset)}),[_.redirected]),(0,i.useEffect)((function(){(0,k.Zc)(C)||(0,k.oG)(C,N.limit,N.offset),(null==H?void 0:H.length)>0&&!(0,se.qF)(C,["display_name"])&&(0,se.aX)(C,["display_name"],{display_name:H})}));var X=function(){return l().createElement(i.Suspense,{fallback:l().createElement(i.Fragment,null)},l().createElement(u.Route,{exact:!0,path:O.Z["add-role"].path},l().createElement(he,{pagination:N,filters:{display_name:H}})),l().createElement(u.Route,{exact:!0,path:O.Z["remove-role"].path},!D&&l().createElement(h.Z,{afterSubmit:function(){return x(ye(ye({},N),{},{offset:0,filters:{display_name:H}}))},routeMatch:O.Z["remove-role"].path,cancelRoute:(0,m.zk)(O.Z.roles.path,N,L),submitRoute:(0,m.zk)(O.Z.roles.path,ye(ye({},N),{},{offset:0}),L)})),l().createElement(u.Route,{exact:!0,path:O.Z["edit-role"].path},!D&&l().createElement(R.Z,{afterSubmit:function(){return x(ye(ye({},N),{},{offset:0,filters:{display_name:H}}))},routeMatch:O.Z["edit-role"].path,cancelRoute:(0,m.zk)(O.Z.roles.path,N,L),submitRoute:(0,m.zk)(O.Z.roles.path,ye(ye({},N),{},{offset:0}),L)})))},K=function(e){return e.system?[]:[{title:d.formatMessage(B.Z.edit),onClick:function(e,t,r){return j("/roles/edit/".concat(r.uuid))}},{title:d.formatMessage(B.Z.delete),onClick:function(e,t,r){return j("/roles/remove/".concat(r.uuid))}}]},J=function(){return F||T?[l().createElement(u.Link,{to:O.Z["add-role"].path,key:"add-role",className:"rbac-m-hide-on-sm"},l().createElement(p.Button,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role"},d.formatMessage(B.Z.createRole)))].concat((0,n.Z)(function(e){return(null==ge?void 0:ge[e])<=ge.sm}(G)?[{label:d.formatMessage(B.Z.createRole),onClick:function(){C.push(O.Z["add-role"].path)}}]:[])):[]};return l().createElement(u.Switch,null,l().createElement(P.Z,{pageAction:"role-detail-permission",path:O.Z["role-detail-permission"].path},l().createElement(ie,null)),l().createElement(P.Z,{pageAction:"role-detail",path:O.Z["role-detail"].path},l().createElement(E.Z,{onDelete:function(){return U("")}})),l().createElement(P.Z,{pageAction:"roles-list",path:O.Z.roles.path,render:function(){return l().createElement(p.Stack,{className:"rbac-c-roles"},l().createElement(p.StackItem,null,l().createElement(b.Q,null,l().createElement(b.y,{title:d.formatMessage(B.Z.roles)}))),l().createElement(p.StackItem,null,l().createElement(Z.Z,{type:"content",id:"tab-roles"},l().createElement(y.M,{actionResolver:K,sortBy:{index:0,direction:"asc"},columns:Q,createRows:g,data:S,filterValue:H,fetchData:function(e){var t=e.name,r=e.count,n=e.limit,a=e.offset,o=e.orderBy;return(0,k.oG)(C,n,a),(0,se.MS)(C,{display_name:t}),x((0,m.jl)({count:r,limit:n,offset:a,orderBy:o,filters:{display_name:t}}))},setFilterValue:function(e){var t=e.name;return U(void 0===t?"":t)},isLoading:!D&&0===(null==S?void 0:S.length)&&0===(null==H?void 0:H.length)||D,pagination:N,routes:X,ouiaId:"roles-table",titlePlural:d.formatMessage(B.Z.roles).toLowerCase(),titleSingular:d.formatMessage(B.Z.role).toLowerCase(),toolbarButtons:J,filterPlaceholder:d.formatMessage(B.Z.name).toLowerCase(),tableId:"roles"}))))}}))}}}]);
//# sourceMappingURL=../sourcemaps/5581.d1ecadb5882900a03049f552d9bdd9b4.js.map
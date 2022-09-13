"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[5581,7664],{40472:(e,t)=>{t.DT={name:"--pf-global--breakpoint--2xl",value:"1450px",var:"var(--pf-global--breakpoint--2xl)"},t.ZP=t.DT},92732:(e,t)=>{t.s6={name:"--pf-global--breakpoint--lg",value:"992px",var:"var(--pf-global--breakpoint--lg)"},t.ZP=t.s6},60144:(e,t)=>{t.A4={name:"--pf-global--breakpoint--sm",value:"576px",var:"var(--pf-global--breakpoint--sm)"},t.ZP=t.A4},63242:(e,t)=>{t.yk={name:"--pf-global--breakpoint--xl",value:"1200px",var:"var(--pf-global--breakpoint--xl)"},t.ZP=t.yk},79995:(e,t)=>{t.U6={name:"--pf-global--breakpoint--xs",value:"0",var:"var(--pf-global--breakpoint--xs)"},t.ZP=t.U6},85127:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ee});var n=r(93433),a=r(29439),o=r(4942),i=r(92950),l=r.n(i),s=r(86896),c=r(28216),u=r(334),f=r(1936),d=r(57262),p=r(64107),m=r(11107),g=r(28090),v=r(38376),b=r(30060),y=r(13063),h=r(44873),Z=r(15608),E=r(4682),O=r(88040),R=r(93327),P=r(94124),j=function(e){return e.reduce((function(e,t){return[].concat((0,n.Z)(e),[{cells:[t]}])}),[])},w=r(39173),k=r(19571),M=r(61338),S=r(87462),_=r(45697),D=r.n(_),L=r(96354),x=r(36457),C=r(29215),I=r(46966),B=r(73943),T=r(45987),F=r(40483),A=r(48880),V=r(30893),N=["ModalProps"];function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t=e.ModalProps,r=(0,T.Z)(e,N),n=(0,s.Z)(),a=(0,A.default)().getState().values;return l().createElement(F.Z,(0,S.Z)({},r,{ModalProps:W(W({},t),{},{onClose:function(){return t.onClose(a)}}),alert:a["dual-list-select"]?void 0:function(){return l().createElement("div",{className:"rbac-m-resource-definitions"},l().createElement(d.Alert,{className:"pf-c-modal__alert",variant:"danger",isInline:!0,title:n.formatMessage(V.Z.defineAtLeastOneResource)}))}}))};q.propTypes={ModalProps:D().object};const G=q;var U=r(42348),H=r.n(U);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function J(e,t){if("update"===t.type)return X(X({},e),t.payload);throw new Error}var Y=function(e,t,r){var a=(0,s.Z)();return{fields:[{component:L.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:a.formatMessage(V.Z.resourcesAvailable),rightTitle:a.formatMessage(V.Z.resourcesDefined),filterOptionsTitle:a.formatMessage(V.Z.filterByResource),filterValueTitle:a.formatMessage(V.Z.filterByResource),options:(0,n.Z)(t&&e?r:[]),validate:[{type:"validate-resources"}],isSearchable:!0}]}},$={"validate-resources":function(){return function(e){return e&&e.length>0?void 0:"At least one resource must be defined for this permission"}}},ee=function(e){var t=e.cancelRoute,r=(0,s.Z)(),o=(0,u.useRouteMatch)(E.Z["role-detail-permission-edit"].path),f=(0,u.useRouteMatch)(o).params,p=f.permissionId,m=f.roleId,v=(0,u.useHistory)(),b=v.replace,y=v.push,h=(0,c.useDispatch)(),Z=(0,i.useReducer)(J,K),O=(0,a.Z)(Z,2),R=O[0],P=O[1],j=(0,c.useSelector)((function(e){var t;return{role:e.roleReducer.selectedRole,definedResources:null!==(t=e.roleReducer.selectedRole)&&void 0!==t&&t.access?H()(e.roleReducer.selectedRole.access.filter((function(e){return e.permission===p})).map((function(e){return e.resourceDefinitions.map((function(e){return e.attributeFilter.value}))}))):[],isRecordLoading:e.roleReducer.isRecordLoading}}),c.shallowEqual),w=j.definedResources,k=j.role,M=(0,c.useSelector)((function(e){return function(e,t){var r=e.costReducer,n=r.resourceTypes,a=r.isLoading,o=r.loadingResources,i=r.resources;return{resourceTypes:n.data,resources:i[t]?{resourcesPath:i[t]}:i,isLoading:a,isLoadingResources:o>0}}(e,R.resourcesPath)}),c.shallowEqual),_=M.resourceTypes,D=M.isLoading,L=M.isLoadingResources,T=M.resources;(0,i.useEffect)((function(){h((0,C.A)())}),[p]),(0,i.useEffect)((function(){if(!D){var e,t=null===(e=_.find((function(e){var t;return e.value===(null===(t=p.split(":"))||void 0===t?void 0:t[1])})))||void 0===e?void 0:e.path;t&&(P({type:"update",payload:{resourcesPath:t.split("/")[5]}}),h((0,C.R)(t)))}}),[_]);var F=function(){return b(t)},A=function(e){e["dual-list-select"]===w?F():P({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},N=function(e){return Object.entries(e).reduce((function(e,t){var r=(0,a.Z)(t,2),o=r[0],i=r[1];return[].concat((0,n.Z)(e),(0,n.Z)(i.map((function(e){return{value:e.value,path:o,label:e.value}}))))}),[])}(T);return l().createElement(l().Fragment,null,l().createElement(B.R,{customTitle:r.formatMessage(V.Z.exitEditResourceDefinitions),customDescription:r.formatMessage(V.Z.changesWillBeLost),isOpen:R.cancelWarningVisible,onModalCancel:function(){return P({type:"update",payload:{cancelWarningVisible:!1}})},onConfirmCancel:F}),(D||L)&&R.loadingStateVisible?l().createElement(d.Modal,{variant:d.ModalVariant.large,className:"rbac-m-resource-definitions",isOpen:!0,title:r.formatMessage(V.Z.editResourceDefinitions),onClose:function(){P({type:"update",payload:{loadingStateVisible:!1}}),F()}},l().createElement(d.Bullseye,null,l().createElement(d.Spinner,null))):l().createElement(x.Z,{schema:Y(T,R.resourcesPath,N),componentMapper:I.ZP,initialValues:{"dual-list-select":R.changedResources||w||[]},onSubmit:function(e){var r;P({type:"update",payload:{changedResources:e["dual-list-select"]}});var a={permission:p,resourceDefinitions:[{attributeFilter:{key:"cost-management.".concat(null===(r=p.split(":"))||void 0===r?void 0:r[1]),operation:1===e["dual-list-select"].length?"equal":"in",value:1===e["dual-list-select"].length?e["dual-list-select"][0]:e["dual-list-select"]}}]};h((0,g.ul)(m,X(X({},k),{},{access:[].concat((0,n.Z)(k.access.filter((function(e){return e.permission!==p}))),[a])})),!0).then((function(){h((0,g.fp)(m)),y(t)}))},onCancel:function(e){return A(e)},validatorMapper:$,FormTemplate:function(e){return l().createElement(G,(0,S.Z)({},e,{ModalProps:{onClose:A,isOpen:!R.cancelWarningVisible,variant:"large",title:r.formatMessage(V.Z.editResourceDefinitions),description:r.formatMessage(V.Z.editPermissionsUsingArrows)}}))}}))};ee.propTypes={cancelRoute:D().string.isRequired};const te=ee;var re=r(85564),ne=r.n(re);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ie=function(){var e=(0,s.Z)(),t=(0,i.useState)({pagination:oe(oe({},M.he),{},{filter:""})}),r=(0,a.Z)(t,2),n=r[0],o=r[1],f=n.pagination,p=n.filter,b=(0,c.useDispatch)(),y=(0,u.useParams)(),h=y.roleId,Z=y.permissionId,O=(0,c.useSelector)((function(e){var t,r,n,a,o;return{role:e.roleReducer.selectedRole,permission:e.roleReducer.selectedRole.access?oe({},null===(t=e.roleReducer.selectedRole)||void 0===t?void 0:t.access.find((function(e){return e.permission===Z}))):{},isRecordLoading:e.roleReducer.isRecordLoading,rolesPagination:(null===(r=e.roleReducer)||void 0===r||null===(n=r.roles)||void 0===n?void 0:n.pagination)||M.he,rolesFilters:(null===(a=e.roleReducer)||void 0===a||null===(o=a.roles)||void 0===o?void 0:o.filters)||{}}}),c.shallowEqual),R=O.role,S=O.permission,_=O.isRecordLoading,D=O.rolesPagination,L=O.rolesFilters;(0,i.useEffect)((function(){b((0,g.fp)(h))}),[h]),(0,i.useEffect)((function(){o(oe(oe({},n),{},{pagination:oe(oe({},n.pagination),{},{count:R.access?R.access.length:0})}))}),[R]);var x=S.resourceDefinitions?ne()(S.resourceDefinitions.map((function(e){return e.attributeFilter.value}))).filter((function(e){return!p||e.includes(p)})):[],C=function(){return l().createElement(i.Fragment,null,l().createElement(u.Route,{exact:!0,path:E.Z["role-detail-permission-edit"].path},l().createElement(te,{cancelRoute:E.Z["role-detail-permission"].path.replace(":roleId",h).replace(":permissionId",Z)})))};return l().createElement(i.Fragment,null,l().createElement(v.Q,{breadcrumbs:[{title:e.formatMessage(V.Z.roles),to:(0,m.zk)(C.roles,D,L)},{title:_?void 0:R&&(R.display_name||R.name),to:"/roles/detail/".concat(h)},{title:Z,isActive:!0}]},l().createElement(d.Level,null,l().createElement(d.LevelItem,null,l().createElement(w.Z,{title:Z||l().createElement(k.h2,null),className:"rbac-page-header__title"})))),l().createElement("section",{className:"pf-c-page__main-section rbac-c-role__permissions"},l().createElement(d.TextContent,null,l().createElement(d.Text,{component:d.TextVariants.h1},e.formatMessage(V.Z.definedResources))),l().createElement(P.f,{columns:[{}],createRows:j,data:x.slice(f.offset,f.offset+f.limit),filterValue:p,fetchData:function(e){var t=e.limit,r=e.offset,a=e.name;return o(oe(oe({},n),{},{filter:a,pagination:oe(oe({},n.pagination),{},{limit:t,offset:r})}))},isCompact:!0,routes:C,setFilterValue:function(e){var t=e.name;return o(oe(oe({},n),{},{filter:t}))},toolbarButtons:function(){return R.system?[]:[l().createElement(i.Fragment,{key:"edit-resource-definitions"},l().createElement(u.Link,{to:"/roles/detail/".concat(h,"/permission/").concat(Z,"/edit")},l().createElement(d.Button,{variant:"primary","aria-label":"Edit"},e.formatMessage(V.Z.edit))))]},isLoading:_,pagination:oe(oe({},f),{},{count:x.length}),titlePlural:e.formatMessage(V.Z.resources).toLowerCase(),titleSingular:e.formatMessage(V.Z.resource).toLowerCase(),hideHeader:!0,tableId:"role-resource-definitions"})))};var le=r(26794),se=r(92758),ce=r(79995),ue=r(60144),fe=r(78236),de=r(92732),pe=r(63242),me=r(40472);const ge={xs:parseInt(ce.ZP.value.replace("px","")),sm:parseInt(ue.ZP.value.replace("px","")),md:parseInt(fe.ZP.value.replace("px","")),lg:parseInt(de.ZP.value.replace("px","")),xl:parseInt(pe.ZP.value.replace("px","")),"2xl":parseInt(me.ZP.value.replace("px",""))},ve=function(){for(var e,t=window.innerWidth,r=0,n=Object.entries(ge);r<n.length;r++){var a=n[r],o=a[0];if(a[1]>=t)break;e=o}return e};function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he=(0,i.lazy)((function(){return r.e(8607).then(r.bind(r,68607))})),Ze=function(e){var t=e.roleReducer,r=t.roles,n=t.isLoading;return{roles:r.data,filters:r.filters,meta:r.pagination,isLoading:n}};const Ee=function(){var e,t,r,P,j=(0,s.Z)(),w=(0,c.useDispatch)(),k=(0,c.useSelector)(Ze,c.shallowEqual),S=k.roles,_=k.filters,D=k.meta,L=k.isLoading,x=function(e){return w((0,g.Kt)(ye(ye({},e),{},{inModal:!1})))},C=(0,u.useHistory)(),I=(0,i.useContext)(le.Z),B=I.userAccessAdministrator,T=I.orgAdmin,F=(0,i.useState)(D),A=(0,a.Z)(F,2),N=A[0],z=A[1],W=(0,i.useState)(_.display_name||""),q=(0,a.Z)(W,2),G=q[0],U=q[1],H=(e=(0,i.useState)((function(){return ve()})),t=e[0],r=e[1],P=(0,i.useRef)(t),(0,i.useEffect)((function(){function e(){var e=ve();e!==P.current&&(P.current=e,r(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t),Q=[{title:j.formatMessage(V.Z.name),key:"display_name",transforms:[(0,f.cellWidth)(20),f.sortable]},{title:j.formatMessage(V.Z.description)},{title:j.formatMessage(V.Z.permissions),transforms:[f.nowrap]},{title:j.formatMessage(V.Z.groups),transforms:[f.nowrap]},{title:j.formatMessage(V.Z.lastModified),key:"modified",transforms:[f.nowrap,f.sortable]}],X=(0,i.useState)({index:0,direction:"asc"}),K=(0,a.Z)(X,2),J=K[0],Y=K[1],$="".concat("desc"===(null==J?void 0:J.direction)?"-":"").concat(Q[null==J?void 0:J.index].key);(0,i.useEffect)((function(){var e=(0,M.rj)(C,N);z(e);var t=(0,se.aX)(C,["display_name"],{display_name:G}).display_name;U(t),insights.chrome.appNavClick({id:"roles",secondaryNav:!0}),x(ye(ye({},e),{},{orderBy:$,filters:{display_name:t}}))}),[]),(0,i.useEffect)((function(){U(_.display_name),z(D)}),[_,D]),(0,i.useEffect)((function(){D.redirected&&(0,M.oG)(C,D.limit,D.offset)}),[D.redirected]),(0,i.useEffect)((function(){(0,M.Zc)(C)||(0,M.oG)(C,N.limit,N.offset),(null==G?void 0:G.length)>0&&!(0,se.qF)(C,["display_name"])&&(0,se.aX)(C,["display_name"],{display_name:G})}));var ee=function(){return l().createElement(i.Suspense,{fallback:l().createElement(i.Fragment,null)},l().createElement(u.Route,{exact:!0,path:E.Z["add-role"].path},l().createElement(he,{pagination:N,orderBy:$,filters:{display_name:G}})),l().createElement(u.Route,{exact:!0,path:E.Z["remove-role"].path},!L&&l().createElement(y.Z,{afterSubmit:function(){return x(ye(ye({},N),{},{offset:0,orderBy:$,filters:{display_name:G}}))},routeMatch:E.Z["remove-role"].path,cancelRoute:(0,m.zk)(E.Z.roles.path,N,_),submitRoute:(0,m.zk)(E.Z.roles.path,ye(ye({},N),{},{offset:0}),_)})),l().createElement(u.Route,{exact:!0,path:E.Z["edit-role"].path},!L&&l().createElement(O.Z,{afterSubmit:function(){return x(ye(ye({},N),{},{offset:0,orderBy:$,filters:{display_name:G}}))},routeMatch:E.Z["edit-role"].path,cancelRoute:(0,m.zk)(E.Z.roles.path,N,_),submitRoute:(0,m.zk)(E.Z.roles.path,ye(ye({},N),{},{offset:0}),_)})))},te=function(e){return e.system?[]:[{title:j.formatMessage(V.Z.edit),onClick:function(e,t,r){return C.push("/roles/edit/".concat(r.uuid))}},{title:j.formatMessage(V.Z.delete),onClick:function(e,t,r){return C.push("/roles/remove/".concat(r.uuid))}}]},re=function(){return T||B?[l().createElement(u.Link,{to:E.Z["add-role"].path,key:"add-role",className:"rbac-m-hide-on-sm"},l().createElement(d.Button,{ouiaId:"create-role-button",variant:"primary","aria-label":"Create role"},j.formatMessage(V.Z.createRole)))].concat((0,n.Z)(function(e){return(null==ge?void 0:ge[e])<=ge.sm}(H)?[{label:j.formatMessage(V.Z.createRole),onClick:function(){C.push(E.Z["add-role"].path)}}]:[])):[]},ne=S.reduce((function(e,t){var r=t.uuid,a=t.display_name,o=t.name,s=t.description,c=t.system,f=t.accessCount,d=t.groups_in_count,g=t.modified;return[].concat((0,n.Z)(e),[{uuid:r,system:c,cells:[l().createElement(i.Fragment,{key:"".concat(r,"-name")},l().createElement(u.Link,{to:"/roles/detail/".concat(r)},a||o)),s,l().createElement(i.Fragment,{key:"".concat(r,"-accessCount")},l().createElement(u.Link,{to:"/roles/detail/".concat(r)},f)),d,l().createElement(i.Fragment,{key:"".concat(r,"-modified")},l().createElement(p.Z,{date:g,type:(0,m.mh)(g)}))]}])}),[]);return l().createElement(u.Switch,null,l().createElement(R.Z,{pageAction:"role-detail-permission",path:E.Z["role-detail-permission"].path},l().createElement(ie,null)),l().createElement(R.Z,{pageAction:"role-detail",path:E.Z["role-detail"].path},l().createElement(Z.Z,{onDelete:function(){return U("")}})),l().createElement(R.Z,{pageAction:"roles-list",path:E.Z.roles.path,render:function(){return l().createElement(d.Stack,{className:"rbac-c-roles"},l().createElement(d.StackItem,null,l().createElement(v.Q,null,l().createElement(v.y,{title:j.formatMessage(V.Z.roles)}))),l().createElement(d.StackItem,null,l().createElement(h.Z,{type:"content",id:"tab-roles"},l().createElement(b.M,{actionResolver:te,sortBy:J,columns:Q,rows:ne,data:S,filterValue:G,fetchData:function(e){var t=e.name,r=e.count,n=e.limit,a=e.offset,o=e.orderBy;return(0,M.oG)(C,n,a),(0,se.MS)(C,{display_name:t}),x((0,m.jl)({count:r,limit:n,offset:a,orderBy:o,filters:{display_name:t}}))},setFilterValue:function(e){var t=e.name;return U(void 0===t?"":t)},isLoading:!L&&0===(null==S?void 0:S.length)&&0===(null==G?void 0:G.length)||L,pagination:N,routes:ee,ouiaId:"roles-table",titlePlural:j.formatMessage(V.Z.roles).toLowerCase(),titleSingular:j.formatMessage(V.Z.role).toLowerCase(),toolbarButtons:re,filterPlaceholder:j.formatMessage(V.Z.name).toLowerCase(),tableId:"roles",testRoles:!0,onSort:function(e,t,r){var n="".concat("desc"===r?"-":"").concat(Q[t].key);Y({index:t,direction:r}),function(e){var t=e.name,r=e.count,n=e.limit,a=e.offset,o=e.orderBy;(0,M.oG)(C,n,a),(0,se.MS)(C,{display_name:t}),x((0,m.jl)({count:r,limit:n,offset:a,orderBy:o,filters:{display_name:t}}))}(ye(ye({},N),{},{offset:0,orderBy:n},(null==_?void 0:_.length)>0?ye({},_.reduce((function(e,t){return ye(ye({},e),{},(0,o.Z)({},t.key,t.value))}),{})):{name:G}))}}))))}}))}}}]);
//# sourceMappingURL=../sourcemaps/5581.dbc7e66e257c0799fed2423cdec44a37.js.map
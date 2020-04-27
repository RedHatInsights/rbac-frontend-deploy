(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{702:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),i=n(513),o=n.n(i),c=n(1),l=n.n(c),s=n(48),u=n(42),p=n(58),m=n(216),d=n(212),f=n(511),b=n(690),y=n(691),v=n(171),g=n.n(v),O=n(34),E=function(e){return e.reduce((function(e,t){var n=t.uuid,r=t.name,a=t.description,i=t.system,o=t.accessCount,s=t.groups_in_count,u=t.modified;return[].concat(g()(e),[{uuid:n,system:i,cells:[l.a.createElement(c.Fragment,{key:"".concat(n,"-name")},l.a.createElement(p.Link,{to:"/roles/detail/".concat(n)},r)),a,l.a.createElement(c.Fragment,{key:"".concat(n,"-accessCount")},l.a.createElement(p.Link,{to:"/roles/detail/".concat(n)},o)),s,l.a.createElement(c.Fragment,{key:"".concat(n,"-modified")},l.a.createElement(O.DateFormat,{date:u,type:"relative"}))]}])}),[])},h=n(520),j=n(519),w=n(523),R=n(518),k=n(525),P=n.n(k),D=n(526),q=n.n(D),T=n(172),C=n(0),x=n.n(C),S=n(703),N=n(60),L=n(509),I=n(692),F=n(695),B=n(22);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}let V;!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(V||(V={}));const z=e=>{let{children:t=null,className:n="",component:r=V.ul}=e,a=J(e,["children","className","component"]);const i=r;return c.createElement(i,_({},a,{"data-pf-content":!0,className:Object(B.b)(n)}),t)};function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}let G;z.propTypes={children:x.a.node,className:x.a.string,component:x.a.oneOf(["ul","ol","dl"])},function(e){e.li="li",e.dt="dt",e.dd="dd"}(G||(G={}));const K=e=>{let{children:t=null,className:n="",component:r=G.li}=e,a=M(e,["children","className","component"]);const i=r;return c.createElement(i,A({},a,{"data-pf-content":!0,className:Object(B.b)(n)}),t)};K.propTypes={children:x.a.node,className:x.a.string,component:x.a.oneOf(["li","dt","dd"])};var U=n(26),H=n(224),Q=n(223),W=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.resourceDefinitions,a=void 0===r?[]:r,i=[{title:"Key"},{title:"Operation"},{title:"value"},""],o=a.map((function(e){return{cells:[{title:e.key},{title:e.operation},{title:e.value},{title:n?l.a.createElement(f.a,{variant:"link",isInline:!0,onClick:function(){return t(e)}},"Remove"):null}]}}));return l.a.createElement(U.b,{"aria-label":"Resource definitions",cells:i,rows:o,variant:U.e.compact},l.a.createElement(H.a,null),l.a.createElement(Q.a,null))};W.propTypes={resourceDefinitions:x.a.arrayOf(x.a.shape({key:x.a.number.isRequired,operation:x.a.number.isRequired,value:x.a.number.isRequired}))};var X=W,Y=function(e){var t=e.application,n=void 0===t?"":t,r=e.description,a=void 0===r?"":r,i=e.name,o=void 0===i?"":i,c=e.permission,s=void 0===c?"":c,u=e.resourceType,p=void 0===u?"":u;return l.a.createElement(b.a,{gutter:"md"},l.a.createElement(y.a,null,l.a.createElement(L.a,{size:"xl"},"Confirm details")),l.a.createElement(y.a,null,l.a.createElement(b.a,{gutter:"md"},l.a.createElement(y.a,null,l.a.createElement(I.a,null,l.a.createElement(F.a,{component:F.b.h5},"Confirm the details for your source, or click Back to revise"))),l.a.createElement(y.a,null,l.a.createElement(I.a,null,l.a.createElement(z,{component:V.dl},l.a.createElement(K,{component:G.dt},"Name"),l.a.createElement(K,{component:G.dd},o),l.a.createElement(K,{component:G.dt},"Description"),l.a.createElement(K,{component:G.dd},a),l.a.createElement(K,{component:G.dt},"Application"),l.a.createElement(K,{component:G.dd},n),l.a.createElement(K,{component:G.dt},"Resource type"),l.a.createElement(K,{component:G.dd},p),l.a.createElement(K,{component:G.dt},"Operation"),l.a.createElement(K,{component:G.dd},s),l.a.createElement(K,{component:G.dt},"Resource definition"),l.a.createElement(K,{component:G.dd},new X(e))))))))};Y.propTypes={application:x.a.string,description:x.a.string,name:x.a.string,permission:x.a.string,resourceType:x.a.string};var Z=Y,$=n(498),ee=n(248),te=n(696);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var re=function(e,t){var n=Object(c.useState)({key:"",operation:"",value:""}),r=o()(n,2),i=r[0],s=r[1],u=e.resourceDefinitions,p=void 0===u?[]:u,m=function(){for(var e=!1,t=0;t<p.length;t++){var n=p[t];if(n.key===i.key&&n.operation===i.operation&&n.value===i.value){e=!0;break}}return e},d=!m()&&i.key.trim().length>0&&i.operation.trim().length>0&&i.value.trim().length>0,v=function(e){s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i,{},e))};return l.a.createElement(b.a,{gutter:"md"},l.a.createElement(y.a,null,l.a.createElement(L.a,{size:"xl"},"Resource definitions")),l.a.createElement(y.a,null,l.a.createElement(I.a,null,l.a.createElement(F.a,{component:F.b.h6},"If there needs to be more details on the resources the permission is to be used for, it would be detailed here."))),l.a.createElement(y.a,null,l.a.createElement($.a,null,l.a.createElement(ee.a,{label:"Key",fieldId:"resource-key"},l.a.createElement(te.a,{"aria-describedby":"resource-key",id:"resource-key",name:"resource-key",onChange:function(e,t){return v({key:t.currentTarget.value})},type:"text",value:i.key})),l.a.createElement(ee.a,{label:"Operation",fieldId:"resource-operation"},l.a.createElement(te.a,{"aria-describedby":"resource-operation",id:"resource-operation",name:"resource-operation",onChange:function(e,t){return v({operation:t.currentTarget.value})},type:"text",value:i.operation})),l.a.createElement(ee.a,{label:"Value",fieldId:"resource-value"},l.a.createElement(te.a,{"aria-describedby":"resource-value",id:"resource-value",name:"resource-value",onChange:function(e,t){return v({value:t.currentTarget.value})},type:"text",value:i.value})))),l.a.createElement(y.a,null,l.a.createElement(f.a,{variant:"primary",isDisabled:!d,onClick:function(){if(!m()){var e=[].concat(g()(p),[i]);t({resourceDefinitions:e})}}},"Add to definitions")),l.a.createElement(y.a,null,new X(e,(function(e){for(var n=[],r=0;r<p.length;r++){var a=p[r];a.key===e.key&&a.operation===e.operation&&a.value===e.value||n.push(a)}t({resourceDefinitions:n})}),!0)))};re.propTypes={resourceDefinitions:x.a.arrayOf(x.a.shape({key:x.a.number.isRequired,operation:x.a.number.isRequired,value:x.a.number.isRequired}))};var ae=re,ie=n(697),oe=function(e,t){var n=e.description,r=void 0===n?"":n,a=e.name,i=void 0===a?"":a;return l.a.createElement(b.a,{gutter:"md"},l.a.createElement(y.a,null,l.a.createElement(L.a,{size:"xl"},"Name and description")),l.a.createElement(y.a,null,l.a.createElement($.a,null,l.a.createElement(ee.a,{label:"Name",isRequired:!0,fieldId:"name"},l.a.createElement(te.a,{isRequired:!0,type:"text",id:"name",name:"name","aria-describedby":"name",value:i,onChange:function(e,n){return t({name:n.currentTarget.value},n.currentTarget.value.trim().length>0)}})),l.a.createElement(ee.a,{label:"Description",fieldId:"description"},l.a.createElement(ie.a,{type:"text",id:"description",name:"description",value:r,onChange:function(e,n){return t({description:n.currentTarget.value},!0)}})))))};oe.propTypes={name:x.a.string,description:x.a.string};var ce=oe;function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var se=function(e,t){var n=e.application,r=void 0===n?"":n,i=e.permission,o=void 0===i?"":i,c=e.resourceType,s=void 0===c?"":c,u=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({application:r,permission:o,resourceType:s},e)},p=function(e){var n=u(e),r=n.application.trim().length>0&&n.permission.trim().length>0&&n.resourceType.trim().length>0;t(n,r)};return l.a.createElement(b.a,{gutter:"md"},l.a.createElement(y.a,null,l.a.createElement(L.a,{size:"xl"},"Permission")),l.a.createElement(y.a,null,l.a.createElement(I.a,null,l.a.createElement(F.a,{component:F.b.h6},"The permission string is made up of the following inputs where it denotes which application and the resource type the permission will be allowed for."))),l.a.createElement(y.a,null,l.a.createElement($.a,null,l.a.createElement(ee.a,{label:"Application",isRequired:!0,fieldId:"application"},l.a.createElement(te.a,{"aria-describedby":"application",id:"application",isRequired:!0,name:"application",onChange:function(e,t){return p({application:t.currentTarget.value})},type:"text",value:r})),l.a.createElement(ee.a,{label:"Resource type",isRequired:!0,fieldId:"resource-type"},l.a.createElement(te.a,{"aria-describedby":"resource-type",id:"resource-type",isRequired:!0,name:"resource-type",onChange:function(e,t){return p({resourceType:t.currentTarget.value})},type:"text",value:s})),l.a.createElement(ee.a,{label:"Permission",isRequired:!0,fieldId:"permission"},l.a.createElement(te.a,{"aria-describedby":"permission",id:"permission",isRequired:!0,name:"permission",onChange:function(e,t){return p({permission:t.currentTarget.value})},type:"text",value:o})))))};se.propTypes={application:x.a.string,permission:x.a.string,resourceType:x.a.string};var ue=se,pe=n(575);n(576);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var de=function(e){var t=e.addNotification,n=e.createRole,r=e.history.push,i=e.pagination,s=Object(c.useState)({}),u=o()(s,2),p=u[0],m=u[1],d=Object(c.useState)(!1),f=o()(d,2),b=f[0],y=f[1],v=Object(c.useState)(!1),g=o()(v,2),O=g[0],E=g[1],h=Object(c.useState)(1),w=o()(h,2),R=w[0],k=w[1],D=function(e){m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p,{},e))},T=[{id:1,name:"Name and Description",canJumpTo:R>=1,component:new ce(p,(function(e,t){D(e),y(t)})),enableNext:b},{id:2,name:"Permission",canJumpTo:R>=2&&b,component:new ue(p,(function(e,t){D(e),E(t)})),enableNext:O},{id:3,name:"Resource definitions",canJumpTo:R>=3&&b&&O,component:new ae(p,D)},{id:4,name:"Review",canJumpTo:R>=4&&b&&O,component:new Z(p),nextButtonText:"Confirm"}],C=function(){var e=q()(P.a.mark((function e(){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={applications:[p.application],description:p.description,name:p.name,access:[{permission:"".concat(p.application,":").concat(p.resourceType,":").concat(p.permission),resourceDefinitions:p.resourceDefinitions.map((function(e){return{attributeFilter:{key:e.key,operation:e.operation,value:e.value}}}))}]},e.next=3,n(t);case 3:return a=e.sent,Object(j.d)(i).then(r("/roles")),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){t({variant:"warning",title:"Creating role was canceled by the user",dismissDelay:8e3,dismissable:!1}),r("/roles")},N=Object(c.useState)(!1),L=o()(N,2),I=L[0],F=L[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{className:I&&"ins-m-wizard__hidden",isLarge:!0,title:"Add role",isOpen:!0,onClose:function(){!Object.values(p).filter(Boolean).length>0&&x()||F(!0)},onNext:function(e){var t=e.id;k(R<t?t:R)},onSave:C,steps:T}),l.a.createElement(pe.a,{type:"role",isOpen:I,onModalCancel:function(){return F(!1)},onConfirmCancel:x}))};de.defaultProps={users:[],inputValue:"",selectedGroup:void 0,selectedUsers:[],selectedRoles:[]},de.propTypes={history:x.a.shape({goBack:x.a.func.isRequired,push:x.a.func.isRequired}).isRequired,addNotification:x.a.func.isRequired,createRole:x.a.func.isRequired,fetchRoles:x.a.func.isRequired,inputValue:x.a.string,pagination:x.a.shape({limit:x.a.number.isRequired,offset:x.a.number.isRequired,count:x.a.number.isRequired})};var fe=Object(u.o)(Object(s.connect)((function(e){var t=e.roleReducer,n=t.roles,r=t.filterValue,a=t.isLoading;return{roles:n.data,pagination:n.meta,isLoading:a,searchFilter:r}}),(function(e){return Object(T.a)({addNotification:N.addNotification,createRole:j.a,fetchRoles:j.d},e)}))(de)),be=n(704),ye=n(693),ve=n(694),ge=n(70),Oe=function(e){var t=e.history,n=t.goBack,r=t.push,a=e.match.params.id,i=e.removeRole,o=e.role,s=e.isLoading,u=e.fetchRole,p=e.postMethod;Object(c.useEffect)((function(){u(a)}),[]);var m=function(){return n()};return l.a.createElement(be.a,{isOpen:!0,isSmall:!0,title:"",onClose:m,actions:[l.a.createElement(f.a,{key:"cancel",variant:"secondary",type:"button",onClick:m},"Cancel"),l.a.createElement(f.a,{key:"submit",isDisabled:s,variant:"primary",type:"button",onClick:function(){return i(a).then((function(){p(),r("/roles")}))}},"Confirm")]},l.a.createElement(ye.a,{gutter:"sm"},l.a.createElement(ve.a,{span:5},l.a.createElement(I.a,null,l.a.createElement(F.a,{component:F.b.h1},"Removing Role:"))),l.a.createElement(ve.a,{span:6},l.a.createElement(I.a,null,!s&&l.a.createElement(F.a,{component:F.b.h1},o.name)),s&&l.a.createElement(ge.c,null))))};Oe.defaultProps={role:{},isLoading:!0},Oe.propTypes={addNotification:x.a.func.isRequired,fetchRole:x.a.func.isRequired,isLoading:x.a.bool,history:x.a.shape({goBack:x.a.func.isRequired,push:x.a.func.isRequired}).isRequired,match:x.a.shape({params:x.a.shape({id:x.a.string}).isRequired}).isRequired,postMethod:x.a.func,removeRole:x.a.func.isRequired,role:x.a.object};var Ee=Object(u.o)(Object(s.connect)((function(e){var t=e.roleReducer,n=t.roles;return{role:t.selectedRole,isLoading:t.isRecordLoading,pagination:n.meta}}),(function(e){return Object(T.a)({addNotification:N.addNotification,fetchRole:j.b,removeRole:j.f},e)}))(Oe)),he=n(580);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var we=[{title:"Name",key:"name",transforms:[Object(m.a)(20),d.a]},{title:"Description"},{title:"Permissions",transforms:[Object(m.a)(5)]},{title:"Groups",transforms:[Object(m.a)(5)]},{title:"Last modified",key:"modified",transforms:[Object(m.a)(10),d.a]}],Re=function(e){var t=e.roleReducer,n=t.roles,r=t.isLoading;return{roles:n.data,pagination:n.meta,userIdentity:n.identity,userEntitlements:n.entitlements,isLoading:r}};t.default=function(){var e=Object(c.useState)(""),t=o()(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),m=o()(i,2),d=m[0],v=m[1],g=Object(s.useDispatch)(),k=Object(u.k)().push,P=Object(s.useSelector)(Re,s.shallowEqual),D=P.roles,q=P.isLoading,T=P.pagination,C=P.userIdentity,x=P.userEntitlements,S=function(e){return g(Object(j.e)(e))};Object(c.useEffect)((function(){S(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},T,{name:n})),window.insights.chrome.getUserPermissions("cost-management").then((function(e){var t=e.map((function(e){return e.permission}));v(t.includes("cost-management:*:*"))}))}),[]);var N=function(){return l.a.createElement(c.Fragment,null,l.a.createElement(u.d,{exact:!0,path:"/roles/add-role",component:fe}),l.a.createElement(u.d,{exact:!0,path:"/roles/remove/:id"},l.a.createElement(Ee,{postMethod:function(){S(),r("")}})))},L=function(e){var t=e.system,n=insights.chrome.isBeta()&&C&&C.user&&C.user.is_org_admin;return t||!n?[]:[{title:"Delete",onClick:function(e,t,n){return k("/roles/remove/".concat(n.uuid))}}]},I=function(){return[l.a.createElement(c.Fragment,{key:"add-role"},x&&x.cost_management&&window.insights.chrome.isBeta()&&d?l.a.createElement(p.Link,{to:"/roles/add-role"},l.a.createElement(f.a,{variant:"primary","aria-label":"Create role"},"Create role")):l.a.createElement(c.Fragment,null))]};return l.a.createElement(u.g,null,l.a.createElement(u.d,{path:"/roles/detail/:uuid",render:function(e){return l.a.createElement(he.a,e)}}),l.a.createElement(u.d,{path:"/roles",render:function(){return l.a.createElement(b.a,null,l.a.createElement(y.a,null,l.a.createElement(w.a,null,l.a.createElement(w.b,{title:"Roles"}))),l.a.createElement(y.a,null,l.a.createElement(O.Section,{type:"content",id:"tab-roles"},l.a.createElement(R.a,{actionResolver:L,columns:we,createRows:E,data:D,filterValue:n,fetchData:function(e){return S(Object(h.e)(e))},setFilterValue:function(e){var t=e.name;return r(t)},isLoading:q,pagination:T,routes:N,titlePlural:"roles",titleSingular:"role",toolbarButtons:I,filterPlaceholder:"name"}))))}}))}}}]);
//# sourceMappingURL=6.js.map
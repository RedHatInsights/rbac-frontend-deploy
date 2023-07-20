"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[7070,7664],{69957:(e,t,n)=>{n.d(t,{LP:()=>a,RI:()=>o,ZP:()=>i});var r=n(40400);const o={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a=(0,r.IU)(o),i=a},62410:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(85893),o=n(92950),a=n.n(o),i=n(76857),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},l=36e5,s=24*l,c=30*s,d=365*s,f=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},m=[{rightBound:1/0,description:function(e){return f(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return f(Math.round(e/c),"month")}},{rightBound:c,description:function(e){return f(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return f(Math.round(e/l),"hour")}},{rightBound:l,description:function(e){return f(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],p=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},g=function(e){return{exact:function(e){return p(e)+" UTC"},onlyDate:function(e){return p(e).slice(0,-6)},relative:function(e){return m.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),p(e))},invalid:function(){return"Invalid date"}}[e]},b=function(e,t,n){return{exact:function(t){return g(e)(t)},onlyDate:function(t){return g(e)(t)},relative:function(o){return function(e,t,n,o){return void 0===o&&(o=""),(0,r.jsx)(i.Tooltip,u({},n,{content:(0,r.jsxs)("div",{children:[o,e]})},{children:t}))}(g("exact")(o),(0,r.jsx)("span",{children:g(e)(o)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const h=function(e){var t=e.date,n=e.type,o=void 0===n?"relative":n,i=e.extraTitle,u=e.tooltipProps,l=t instanceof Date?t:new Date(t),s=null==t||"Invalid Date"===l.toString()?"invalid":o;return(0,r.jsx)(a().Fragment,{children:b(s,u,i)(l)})}},44873:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(85893),o=n(94184),a=n.n(o),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};const u=function(e){var t,n=e.type,o=e.children,u=e.className,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["type","children","className"]),s=a()(u,((t={})["ins-l-".concat(n)]=void 0!==n,t));return(0,r.jsxs)("section",i({},l,{className:s},{children:[" ",o," "]}))}},93736:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(46801),o=n(65126);const a=function(e){var t=(0,r.useNavigate)();return function(n,r){return t((0,o.n)(n,e),r)}}},1227:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(29439),o=n(92950),a=n.n(o),i=n(86896),u=n(45697),l=n.n(u),s=n(30893),c=n(69957),d=n(76857),f=function(e){var t=e.title,n=e.text,u=e.onClose,l=e.onSubmit,f=e.isOpen,m=e.confirmButtonLabel,p=e.withCheckbox,g=(0,i.Z)(),b=(0,o.useState)(!1),h=(0,r.Z)(b,2),v=h[0],Z=h[1];return a().createElement(d.Modal,{className:"rbac",title:a().createElement("div",null,a().createElement(c.ZP,{className:"ins-m-alert rbac-c__delete-icon"})," ",t),isOpen:f,variant:d.ModalVariant.small,onClose:u,actions:[a().createElement(d.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:p&&!v,variant:"danger",onClick:l},m),a().createElement(d.Button,{key:"cancel",ouiaId:"secondary-cancel-button",variant:"link",onClick:u},g.formatMessage(s.Z.cancel))]},a().createElement(d.Split,{hasGutter:!0},a().createElement(d.SplitItem,{isFilled:!0},a().createElement(d.Stack,{hasGutter:!0},a().createElement(d.TextContent,null,n)))),p?a().createElement(d.Checkbox,{isChecked:v,onChange:function(){return Z(!v)},label:g.formatMessage(s.Z.confirmCheckMessage),id:"remove-modal-check",className:"pf-u-mt-lg"}):null)};f.propTypes={text:l().any,title:l().string,confirmButtonLabel:l().string,onSubmit:l().func,onClose:l().func,isOpen:l().bool,withCheckbox:l().bool},f.defaultProps={withCheckbox:!1};const m=f},25924:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),o=n(92950),a=n.n(o),i=n(45697),u=n.n(i),l=n(76857),s=n(1227),c=n(86896),d=n(44012),f=n(30893),m=function(e){var t=e.isOpen,n=e.onClose,o=e.onSubmit,i=(0,c.Z)();return a().createElement(s.Z,{text:a().createElement(l.TextContent,null,a().createElement(l.Text,null,a().createElement(d.Z,(0,r.Z)({},f.Z.defaultAccessGroupEditWarning,{values:{b:function(e){return a().createElement("b",null,e)}}})))),title:i.formatMessage(f.Z.warning),withCheckbox:!0,isOpen:t,confirmButtonLabel:i.formatMessage(f.Z.continue),onClose:n,onSubmit:o})};m.propTypes={onSubmit:u().func,onClose:u().func,isOpen:u().bool};const p=m},36306:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var r=n(87462),o=n(29439),a=n(4942),i=n(93433),u=n(92950),l=n.n(u),s=n(50533),c=n(86896),d=n(44012),f=n(45697),m=n.n(f),p=n(46801),g=n(76857),b=n(55140),h=n(44873),v=n(62410),Z=n(65916),y=n(30060),C=n(19756),O=n(25924),M=n(1227),E=function(e){var t=e.title,n=e.text,r=e.onClose,a=e.onSubmit,i=e.isOpen,s=e.confirmButtonLabel,c=e.isDefault,d=e.isChanged,f=(0,u.useState)(!1),m=(0,o.Z)(f,2),p=m[0],g=m[1];return c&&!d&&p?l().createElement(O.Z,{isOpen:p&&i,onClose:function(){r(),g(!1)},onSubmit:function(){a()}}):l().createElement(M.Z,{text:n,title:t,isOpen:i,confirmButtonLabel:s,onClose:function(){r()},onSubmit:function(){g(!0),(!c||d)&&a()}})};E.propTypes={text:m().node,title:m().node,confirmButtonLabel:m().string,onSubmit:m().func,onClose:m().func,isOpen:m().bool,isDefault:m().bool,isChanged:m().bool},E.defaultProps={isDefault:!1,isChanged:!1};const k=E;var x=n(11107),R=n(26794),S=n(65126),D=n(93736),w=n(30893),P=n(4682);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(null==t?void 0:t.reduce((function(t,r){var o=r.uuid,a=r.display_name,s=r.name,c=r.description,d=r.modified;return[].concat((0,i.Z)(t),[{uuid:o,title:a||s,cells:[l().createElement(u.Fragment,{key:"".concat(o,"-name")},l().createElement(S.Z,{to:P.Z["group-detail-role-detail"].link.replace(":groupId",e).replace(":roleId",o)},a||s)),c,l().createElement(u.Fragment,{key:"".concat(o,"-modified")},l().createElement(v.Z,{date:d,type:(0,x.mh)(d)}))],selected:Boolean(n&&n.find((function(e){return e.uuid===o})))}])}),[]))||[]},T=function(e){return e.toLowerCase().includes("default access")?"dag-add-role-button":"add-role-button"},L=function(e,t,n){var r=(0,c.Z)(),o=l().createElement(g.Button,{ouiaId:t,variant:"primary",className:"rbac-m-hide-on-sm","aria-label":"Add role",isAriaDisabled:e},r.formatMessage(w.Z.addRole));return e?l().createElement(g.Tooltip,{content:n||r.formatMessage(w.Z.allRolesAdded)},o):o},_=function(e){var t=e.groupReducer,n=t.selectedGroup,r=t.systemGroup,o=t.groups;return{roles:n.roles,pagination:n.pagination||B(B({},Z.he),{},{count:(null==n?void 0:n.roles)&&n.roles.length}),groupsPagination:o.pagination||o.meta,groupsFilters:o.filters,isLoading:!n.loaded,isPlatformDefault:n.platform_default,isAdminDefault:n.admin_default,isChanged:!n.system,disableAddRoles:Object.keys(n.addRoles.pagination||{}).length>0?!(n.addRoles.pagination&&n.addRoles.pagination.count>0&&!n.admin_default):!!n.admin_default,systemGroupUuid:null==r?void 0:r.uuid,group:n}},A=function(e){var t,n=e.onDefaultGroupChanged,f=(0,c.Z)(),m=(0,b.Z)(),g=(0,s.useDispatch)(),v=(0,D.Z)(),Z=(0,p.useParams)().groupId,O=(0,u.useState)(""),M=(0,o.Z)(O,2),E=M[0],j=M[1],A=(0,u.useState)(""),F=(0,o.Z)(A,2),N=F[0],G=F[1],U=(0,u.useState)([]),z=(0,o.Z)(U,2),V=z[0],W=z[1],Q=(0,u.useState)([]),q=(0,o.Z)(Q,2),H=q[0],J=q[1],X=(0,u.useState)(!1),K=(0,o.Z)(X,2),Y=K[0],$=K[1],ee=(0,u.useState)((function(){return null})),te=(0,o.Z)(ee,2),ne=te[0],re=te[1],oe=(0,u.useState)({}),ae=(0,o.Z)(oe,2),ie=ae[0],ue=ae[1],le=(0,u.useContext)(R.Z),se=le.userAccessAdministrator,ce=le.orgAdmin,de=(0,u.useRef)(ce||se),fe=(0,s.useSelector)(_),me=fe.roles,pe=fe.pagination,ge=fe.groupsPagination,be=fe.groupsFilters,he=fe.isLoading,ve=fe.group,Ze=fe.isPlatformDefault,ye=fe.isAdminDefault,Ce=fe.isChanged,Oe=fe.disableAddRoles,Me=fe.systemGroupUuid,Ee=function(e,t){return e.payload.then(t),e},ke=function(e){return g((0,C.nr)(e,{},{}))},xe=function(e){return g((0,C.yi)(null!=e?e:Z))},Re=function(){return g((0,C.WD)({chrome:m}))},Se=function(e,t,n){return g(Ee((0,C.W3)(e,t),n))},De=function(e){return function(t,n){return g((0,C.nV)(t,e,n))}},we=[{title:f.formatMessage(w.Z.name),orderBy:"name"},{title:f.formatMessage(w.Z.description)},{title:f.formatMessage(w.Z.lastModified)}];(0,u.useEffect)((function(){"default-access"!==Z?De(pe)(Z):Me&&De(pe)(Me)}),[Me]),(0,u.useEffect)((function(){(null==me?void 0:me.length)>0&&("default-access"!==Z?ke(Z):Me&&ke(Me))}),[me]),(0,u.useEffect)((function(){de.current=ce||se}),[ce,se]);var Pe=function(e,t,n){return l().createElement("p",null,l().createElement(d.Z,(0,r.Z)({},n?w.Z.removeRolesModalText:w.Z.removeRoleModalText,{values:B({b:function(e){return l().createElement("b",null,e)},name:e},n?{roles:t}:{role:t})})))},je="default-access"!==Z?Z:Me,Be=function(){Ze?Re().then((function(e){var t=e.value.data;De(B(B({},pe),{},{offset:0}))(t[0].uuid)})):De(B(B({},pe),{},{offset:0}))(Z)};return l().createElement(l().Fragment,null,l().createElement(k,{text:ie.text,title:ie.title,isOpen:Y,isChanged:Ce,isDefault:Ze||ye,confirmButtonLabel:ie.confirmButtonLabel,onClose:function(){return $(!1)},onSubmit:function(){$(!1),ne(),W([]),n(Ze&&!Ce)}}),l().createElement(h.Z,{type:"content",id:"tab-roles"},l().createElement(y.M,{columns:we,isSelectable:de.current&&!ye,rows:I(Z,me,V),data:me,filterValue:N,fetchData:function(e){De(e)(je)},emptyFilters:{name:"",description:""},setFilterValue:function(e){var t=e.name,n=e.description;void 0!==t&&G(t),void 0!==n&&j(n)},isLoading:he,pagination:pe,checkedRows:V,setCheckedItems:function(e){W((function(t){return e(t).map((function(e){var t=e.uuid,n=e.name;return{uuid:t,label:e.label||n}}))}))},titlePlural:f.formatMessage(w.Z.roles).toLowerCase(),titleSingular:f.formatMessage(w.Z.role),toolbarButtons:function(){return(0,i.Z)(de.current&&!ye?[l().createElement(S.Z,{className:"rbac-m-hide-on-sm rbac-c-button__add-role".concat(Oe&&"-disabled"),to:P.Z["group-add-roles"].link.replace(":groupId",Z),key:"add-to-group"},L(Oe,T(name||""),ye&&f.formatMessage(w.Z.defaultGroupNotManually))),{label:f.formatMessage(w.Z.addRole),props:{isDisabled:Oe,className:"rbac-m-hide-on-md"},onClick:function(){return v(P.Z["group-add-roles"].link.replace(":groupId",Z))}},{label:f.formatMessage(w.Z.remove),props:{isDisabled:!V||!V.length>0,variant:"danger"},onClick:function(){var e=V.length>1;re((function(){return function(){return Se(je,V.map((function(e){return e.uuid})),Be)}})),ue({title:f.formatMessage(e?w.Z.removeRolesQuestion:w.Z.removeRoleQuestion),confirmButtonLabel:f.formatMessage(e?w.Z.removeRoles:w.Z.removeRole),text:Pe(name,e?V.length:me.find((function(e){return e.uuid===V[0].uuid})).name,e)}),$(!0)}}]:[])},actionResolver:function(){return(0,i.Z)(de.current&&!ye?[{title:f.formatMessage(w.Z.remove),onClick:function(e,t,n){re((function(){return function(){return Se(je,[n.uuid],Be)}})),ue({title:f.formatMessage(w.Z.removeRoleQuestion),confirmButtonLabel:f.formatMessage(w.Z.removeRole),text:Pe(name,n.title,!1)}),$(!0)}}]:[])},ouiaId:"roles-table",emptyProps:{title:f.formatMessage(w.Z.noGroupRoles),description:[f.formatMessage(ye?w.Z.contactServiceTeamForRoles:w.Z.addRoleToConfigureAccess),""]},filters:[{key:"name",value:N},{key:"description",value:E}],tableId:"group-roles"})),l().createElement(u.Suspense,null,l().createElement(p.Outlet,{context:(t={},(0,a.Z)(t,P.Z["group-roles-edit-group"].path,{group:ve,cancelRoute:P.Z["group-detail-roles"].link.replace(":groupId",Z),postMethod:function(){return g((0,C.yi)(je))}}),(0,a.Z)(t,P.Z["group-roles-remove-group"].path,{postMethod:function(){return g((0,C.bt)(B(B({},ge),{},{offset:0,filters:be,usesMetaInURL:!0,chrome:m})))},cancelRoute:P.Z["group-detail-roles"].link.replace(":groupId",Z),submitRoute:(0,x.zk)(P.Z.groups.link,B(B({},ge),{},{offset:0}),be),groupsUuid:[ve]}),(0,a.Z)(t,P.Z["group-add-roles"].path,{afterSubmit:function(){Ze||ye?Re().then((function(e){var t=e.value.data;De(pe)(t[0].uuid),xe(t[0].uuid)})):(De(pe)(Z),xe())},fetchUuid:Me,selectedRoles:H,setSelectedRoles:J,closeUrl:P.Z["group-detail"].link.replace(":groupId",Ze?"default-access":Z),addRolesToGroup:function(e,t,n){return g(Ee((0,C.Wj)(e,t),n))},groupName:ve.name,isDefault:Ze||ye,isChanged:Ce,onDefaultGroupChanged:n}),t)})))};A.propTypes={searchFilter:m().string,selectedRoles:m().array,pagination:m().shape({limit:m().number.isRequired,offset:m().number.isRequired,count:m().number}),onDefaultGroupChanged:m().func},A.defaultProps={pagination:Z.eX,selectedRoles:[]};const F=A},44012:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(70655),o=n(92950),a=n(86896),i=n(680);function u(e){var t=(0,a.Z)(),n=t.formatMessage,r=t.textComponent,i=void 0===r?o.Fragment:r,u=e.id,l=e.description,s=e.defaultMessage,c=e.values,d=e.children,f=e.tagName,m=void 0===f?i:f,p=n({id:u,description:l,defaultMessage:s},c,{ignoreTag:e.ignoreTag});return"function"==typeof d?d(Array.isArray(p)?p:[p]):m?o.createElement(m,null,o.Children.toArray(p)):o.createElement(o.Fragment,null,p)}u.displayName="FormattedMessage";var l=o.memo(u,(function(e,t){var n=e.values,o=(0,r.__rest)(e,["values"]),a=t.values,u=(0,r.__rest)(t,["values"]);return(0,i.wU)(a,n)&&(0,i.wU)(o,u)}));l.displayName="MemoizedFormattedMessage";const s=l}}]);
//# sourceMappingURL=../sourcemaps/7070.70880e63adcd006c5c531e843ab6018b.js.map
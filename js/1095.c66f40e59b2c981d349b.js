"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[1095,7664],{62410:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(85893),o=n(92950),i=n.n(o),a=n(25864),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},u=36e5,s=24*u,l=30*s,d=365*s,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},f=[{rightBound:1/0,description:function(e){return p(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return p(Math.round(e/l),"month")}},{rightBound:l,description:function(e){return p(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return p(Math.round(e/u),"hour")}},{rightBound:u,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],g=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},m=function(e){return{exact:function(e){return g(e)+" UTC"},onlyDate:function(e){return g(e).slice(0,-6)},relative:function(e){return f.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),g(e))},invalid:function(){return"Invalid date"}}[e]},v=function(e,t,n){return{exact:function(t){return m(e)(t)},onlyDate:function(t){return m(e)(t)},relative:function(o){return function(e,t,n,o){return void 0===o&&(o=""),(0,r.jsx)(a.Tooltip,c({},n,{content:(0,r.jsxs)("div",{children:[o,e]})},{children:t}))}(m("exact")(o),(0,r.jsx)("span",{children:m(e)(o)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const h=function(e){var t=e.date,n=e.type,o=void 0===n?"relative":n,a=e.extraTitle,c=e.tooltipProps,u=t instanceof Date?t:new Date(t),s=null==t||"Invalid Date"===u.toString()?"invalid":o;return(0,r.jsx)(i().Fragment,{children:v(s,c,a)(u)})}},44873:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(85893),o=n(94184),i=n.n(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};const c=function(e){var t,n=e.type,o=e.children,c=e.className,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["type","children","className"]),s=i()(c,((t={})["ins-l-".concat(n)]=void 0!==n,t));return(0,r.jsxs)("section",a({},u,{className:s},{children:[" ",o," "]}))}},93736:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(46801),o=n(65126);const i=function(e){var t=(0,r.useNavigate)();return function(n,r){return t((0,o.n)(n,e),r)}}},45998:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(29439),o=n(4942),i=n(93433),a=n(92950),c=n.n(a),u=n(50533),s=n(86896),l=n(44012),d=n(46801),p=n(25864),f=n(55140),g=n(44873),m=n(62410),v=n(65916),h=n(30060),y=n(19756),b=n(11107),Z=n(26794),O=n(65126),M=n(93736),w=n(30893),j=n(4682);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return null==e?void 0:e.reduce((function(e,n){var r=n.description,o=n.client_id,u=n.owner,s=n.time_created;return[].concat((0,i.Z)(e),[{uuid:r,title:r,cells:[r,o,u,c().createElement(a.Fragment,{key:"".concat(r,"-modified")},c().createElement(m.Z,{date:s,type:(0,b.mh)(s)}))],selected:Boolean(t&&t.find((function(e){return e.uuid===r})))}])}),[])},E=function(e){var t,n=e.groupReducer,r=n.selectedGroup,o=n.systemGroup,i=n.groups;return{serviceAccounts:(null===(t=r.serviceAccounts)||void 0===t?void 0:t.data)||[],pagination:r.pagination||k(k({},v.he),{},{count:(null==r?void 0:r.serviceAccounts)&&r.serviceAccounts.length}),groupsPagination:i.pagination||i.meta,groupsFilters:i.filters,isLoading:!r.loaded,isAdminDefault:r.admin_default,systemGroupUuid:null==o?void 0:o.uuid,group:r}};const S=function(){var e,t=(0,s.Z)(),n=(0,f.Z)(),m=(0,u.useDispatch)(),v=(0,M.Z)(),A=(0,d.useParams)().groupId,S=(0,a.useState)(""),I=(0,r.Z)(S,2),B=I[0],D=I[1],x=(0,a.useState)(""),C=(0,r.Z)(x,2),F=C[0],T=C[1],N=(0,a.useState)(""),_=(0,r.Z)(N,2),R=_[0],U=_[1],G=(0,a.useState)([]),L=(0,r.Z)(G,2),z=L[0],V=L[1],J=(0,a.useContext)(Z.Z),q=J.userAccessAdministrator,H=J.orgAdmin,K=(0,a.useRef)(H||q),Q=(0,u.useSelector)(E),W=Q.serviceAccounts,X=Q.pagination,Y=Q.groupsPagination,$=Q.groupsFilters,ee=Q.isLoading,te=Q.group,ne=Q.isAdminDefault,re=Q.systemGroupUuid,oe=function(e){return function(t,n){return m((0,y.Gr)(t,e,n))}},ie=[{title:t.formatMessage(w.Z.description),orderBy:"description"},{title:t.formatMessage(w.Z.clientId),orderBy:"clientId"},{title:t.formatMessage(w.Z.owner),orderBy:"owner"},{title:t.formatMessage(w.Z.timeCreated),orderBy:"timeCreated"}];return(0,a.useEffect)((function(){"default-access"!==A?oe(X)(A):re&&oe(X)(re)}),[re]),(0,a.useEffect)((function(){K.current=H||q}),[H,q]),c().createElement(c().Fragment,null,c().createElement(g.Z,{type:"content",id:"tab-service-accounts"},c().createElement(p.Alert,{className:"rbac-service-accounts-alert",variant:"info",isInline:!0,isPlain:!0,title:c().createElement(l.Z,{id:"visitServiceAccountsPage",defaultMessage:"To add, reset credentials, or delete service accounts visit the {link}.",values:{link:c().createElement(O.Z,{to:"/service-accounts",linkBasename:"/iam"},t.formatMessage(w.Z.serviceAccountsPage))}})}),c().createElement(h.M,{columns:ie,isSelectable:!0,rows:P(W,z),data:W,filterValue:B,fetchData:function(e){oe(e)(A)},emptyFilters:{owner:"",description:"",timeCreated:""},setFilterValue:function(e){var t=e.name,n=e.description;void 0!==t&&T(t),void 0!==n&&D(n),void 0!==R&&U(n)},isLoading:ee,pagination:X,checkedRows:z,setCheckedItems:function(e){V((function(t){return e(t).map((function(e){var t=e.uuid,n=e.name;return{uuid:t,label:e.label||n}}))}))},titlePlural:t.formatMessage(w.Z.serviceAccounts).toLowerCase(),titleSingular:t.formatMessage(w.Z.serviceAccount),toolbarButtons:function(){return[c().createElement(O.Z,{className:"rbac-m-hide-on-sm",to:j.Z["group-add-service-account"].link.replace(":groupId",A),key:"add-to-group"},c().createElement(p.Button,{ouiaId:"add-service-account-button",variant:"primary",className:"rbac-m-hide-on-sm","aria-label":"Add service account"},t.formatMessage(w.Z.addServiceAccount))),{label:t.formatMessage(w.Z.addServiceAccount),props:{className:"rbac-m-hide-on-md"},onClick:function(){return v(j.Z["group-add-service-account"].link.replace(":groupId",A))}}]},actionResolver:function(){return(0,i.Z)(K.current&&!ne?[{title:t.formatMessage(w.Z.remove),onClick:function(){return null}}]:[])},ouiaId:"service-accounts-table",emptyProps:{title:t.formatMessage(w.Z.noGroupAccounts),description:[t.formatMessage(ne?w.Z.contactServiceTeamForAccounts:w.Z.addAccountsToThisGroup),""]},filters:[{key:"description",value:B},{key:"owner",value:F}],tableId:"group-accounts"})),c().createElement(a.Suspense,null,c().createElement(d.Outlet,{context:(e={},(0,o.Z)(e,j.Z["group-service-accounts-edit-group"].path,{group:te,cancelRoute:j.Z["group-detail-service-accounts"].link.replace(":groupId",A),postMethod:function(){return m((0,y.yi)(A))}}),(0,o.Z)(e,j.Z["group-service-accounts-remove-group"].path,{postMethod:function(){return m((0,y.bt)(k(k({},Y),{},{offset:0,filters:$,usesMetaInURL:!0,chrome:n})))},cancelRoute:j.Z["group-detail-service-accounts"].link.replace(":groupId",A),submitRoute:(0,b.zk)(j.Z.groups.link,k(k({},Y),{},{offset:0}),$),groupsUuid:[te]}),e)})))}},44012:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(70655),o=n(92950),i=n(86896),a=n(680);function c(e){var t=(0,i.Z)(),n=t.formatMessage,r=t.textComponent,a=void 0===r?o.Fragment:r,c=e.id,u=e.description,s=e.defaultMessage,l=e.values,d=e.children,p=e.tagName,f=void 0===p?a:p,g=n({id:c,description:u,defaultMessage:s},l,{ignoreTag:e.ignoreTag});return"function"==typeof d?d(Array.isArray(g)?g:[g]):f?o.createElement(f,null,o.Children.toArray(g)):o.createElement(o.Fragment,null,g)}c.displayName="FormattedMessage";var u=o.memo(c,(function(e,t){var n=e.values,o=(0,r.__rest)(e,["values"]),i=t.values,c=(0,r.__rest)(t,["values"]);return(0,a.wU)(i,n)&&(0,a.wU)(o,c)}));u.displayName="MemoizedFormattedMessage";const s=u}}]);
//# sourceMappingURL=../sourcemaps/1095.7cf297c779306c88b0b1d8e08895f4c6.js.map
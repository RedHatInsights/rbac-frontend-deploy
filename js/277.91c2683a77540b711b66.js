"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[277],{7081:(e,t,r)=>{r.d(t,{ZP:()=>o,lb:()=>a,wl:()=>i});var n=r(40400);const a={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},i=(0,n.IU)(a),o=i},60817:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=t.NotificationPortal=void 0;var a=r(50533),i=n(r(72837)),o=r(53446);t.NotificationPortal=(0,a.connect)((function(e,t){var r=e.notifications;return{notifications:t.notifications||r}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,o.removeNotification)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,o.clearNotifications)())}}}))(i.default);var s=r(72837);Object.defineProperty(t,"Portal",{enumerable:!0,get:function(){return n(s).default}}),t.default=t.NotificationPortal},72871:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(60817);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(o).default}}),a(r(60817),t)},71355:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notificationsMiddleware=t.clearNotifications=t.removeNotification=t.addNotification=t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=t.notificationsReducers=t.notifications=t.NotificationsPortal=void 0;var a=r(72871);Object.defineProperty(t,"NotificationsPortal",{enumerable:!0,get:function(){return n(a).default}});var i=r(24778);Object.defineProperty(t,"notifications",{enumerable:!0,get:function(){return n(i).default}}),Object.defineProperty(t,"notificationsReducers",{enumerable:!0,get:function(){return i.notificationsReducers}});var o=r(68129);Object.defineProperty(t,"ADD_NOTIFICATION",{enumerable:!0,get:function(){return o.ADD_NOTIFICATION}}),Object.defineProperty(t,"REMOVE_NOTIFICATION",{enumerable:!0,get:function(){return o.REMOVE_NOTIFICATION}}),Object.defineProperty(t,"CLEAR_NOTIFICATIONS",{enumerable:!0,get:function(){return o.CLEAR_NOTIFICATIONS}});var s=r(53446);Object.defineProperty(t,"addNotification",{enumerable:!0,get:function(){return s.addNotification}}),Object.defineProperty(t,"removeNotification",{enumerable:!0,get:function(){return s.removeNotification}}),Object.defineProperty(t,"clearNotifications",{enumerable:!0,get:function(){return s.clearNotifications}});var c=r(84885);Object.defineProperty(t,"notificationsMiddleware",{enumerable:!0,get:function(){return n(c).default}})},68129:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CLEAR_NOTIFICATIONS=t.REMOVE_NOTIFICATION=t.ADD_NOTIFICATION=void 0;var r="@@INSIGHTS-CORE/NOTIFICATIONS/";t.ADD_NOTIFICATION="".concat(r,"ADD_NOTIFICATION"),t.REMOVE_NOTIFICATION="".concat(r,"REMOVE_NOTIFICATION"),t.CLEAR_NOTIFICATIONS="".concat(r,"CLEAR_NOTIFICATIONS"),t.default={ADD_NOTIFICATION:t.ADD_NOTIFICATION,REMOVE_NOTIFICATION:t.REMOVE_NOTIFICATION,CLEAR_NOTIFICATIONS:t.CLEAR_NOTIFICATIONS}},53446:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var a=r(68129);t.addNotification=function(e){return{type:a.ADD_NOTIFICATION,payload:n({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:a.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:a.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},24778:function(e,t,r){var n=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.notifications=t.notificationsReducers=t.defaultState=void 0;var a=r(68129);t.defaultState=[],t.notificationsReducers=function(e,r){switch(void 0===e&&(e=t.defaultState),r.type){case a.ADD_NOTIFICATION:return i=e,o=r.payload,n(n([],i,!0),[o],!1);case a.REMOVE_NOTIFICATION:return function(e,t){var r=t.payload,a=e.findIndex((function(e){return e.id===r}));return n(n([],e.slice(0,a),!0),e.slice(a+1),!0)}(e,r);case a.CLEAR_NOTIFICATIONS:return[];default:return e}var i,o},t.notifications=t.notificationsReducers,t.default=t.notifications},92758:(e,t,r)=>{r.d(t,{MS:()=>u,aX:()=>s,qF:()=>c});var n=r(93433),a=r(4942);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=new URLSearchParams(e.search),c=r.reduce((function(e,t){var r=s.getAll(t);return o(o({},e),{},(0,a.Z)({},t,r.length>1?r:r[0]))}),{});return Object.keys(i).forEach((function(e){var t=i[e];c=o(o({},c),{},(0,a.Z)({},e,Array.isArray(c[e])?(0,n.Z)(new Set([].concat((0,n.Z)(c[e]),(0,n.Z)(Array.isArray(t)?t:[t])))):(null==t?void 0:t.length)>0&&t||c[e])),Array.isArray(t)?t.forEach((function(t){return s.getAll(e).includes(t)||s.append(e,t)})):s.get(e)||t&&s.set(e,t)})),t({pathname:e.pathname,search:s.toString()},{replace:!0}),c},c=function(e,t){var r=new URLSearchParams(e.search);return t.some((function(e){return r.get(e)}))},u=function(e,t,r){var n=new URLSearchParams(e.search);Object.keys(r).forEach((function(e){return n.delete(e)})),Object.keys(r).forEach((function(e){var t=r[e];Array.isArray(t)?t.forEach((function(t){return t&&n.append(e,t)})):t&&n.set(e,t)})),t({pathname:e.pathname,search:n.toString()},{replace:!0})}},93736:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(46801),a=r(65126);const i=function(e){var t=(0,n.useNavigate)();return function(r,n){return t((0,a.n)(r,e),n)}}},82916:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),a=r.n(n),i=r(86896),o=r(45697),s=r.n(o),c=r(25864),u=r(15265),l=r(26794),f=r(30893),d=r(55140),m=function(e){var t=e.linkDescription,r=e.linkTitle,o=(0,i.Z)(),s=(0,d.Z)(),m=s.getEnvironment(),p=s.isProd()?"":"".concat(m,".");return(0,n.useContext)(l.Z).orgAdmin?a().createElement(c.Text,{className:"pf-u-mt-0",component:c.TextVariants.h7},"".concat(o.formatMessage(f.Z.usersDescription)," "),t,a().createElement(c.Text,{component:c.TextVariants.a,href:"https://www.".concat(p,"redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},r,a().createElement(u.ZP,null)),"."):a().createElement(c.Text,{className:"pf-u-mt-0",component:c.TextVariants.h7},"".concat(o.formatMessage(f.Z.usersDescription)," "))};m.propTypes={linkDescription:s().node,linkTitle:s().node},m.defaultProps={linkDescription:"",linkTitle:" user management list "};const p=m},88093:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(87462),a=r(45987),i=r(92950),o=r.n(i),s=r(1936),c=r(45697),u=r.n(c),l=r(94184),f=r.n(l),d=["row"],m=function(e){var t,r=e.row,i=(0,a.Z)(e,d),c=r.status,u=null==c||null===(t=c.props)||void 0===t?void 0:t["data-is-active"];return o().createElement(s.RowWrapper,(0,n.Z)({className:f()("rbac__user-row",{"ins-m-inactive":!u}),row:r},i))};m.propTypes={row:u().shape({status:u().shape({props:u().shape({"data-is-active":u().bool,data:u().shape({isActive:u().bool})})})})};const p=m},98033:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(87462),a=r(29439),i=r(4942),o=r(92950),s=r.n(o),c=r(50533),u=r(45697),l=r.n(u),f=r(46801),d=r(86896),m=r(1936),p=r(11107),O=r(90944),v=r(30060),y=r(88093),I=r(26794),N=r(65916),g=r(92758),b=r(30893),h=r(58654);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=e.selectedUsers,r=e.setSelectedUsers,i=e.userLinks,u=e.usesMetaInURL,l=e.displayNarrow,T=e.props,A=(0,d.Z)(),E=(0,f.useNavigate)(),C=(0,f.useLocation)(),j=(0,c.useDispatch)(),P=(0,o.useContext)(I.Z).orgAdmin,M=(0,o.useRef)(null),w=(0,c.useSelector)((function(e){var t,r,n=e.userReducer.users;return{limit:null!==(t=u?n.pagination.limit:n.meta.limit)&&void 0!==t?t:(P?N.HE:N.he).limit,offset:null!==(r=u?n.pagination.offset:n.meta.offset)&&void 0!==r?r:(P?N.HE:N.he).offset,count:u?n.pagination.count:n.meta.count,redirected:u&&n.pagination.redirected}})),Z=(0,c.useSelector)((function(e){var t,r=e.userReducer,n=r.users,a=n.data,i=n.filters,o=void 0===i?{}:i,s=r.isUserDataLoading;return{users:null==a||null===(t=a.map)||void 0===t?void 0:t.call(a,(function(e){return _(_({},e),{},{uuid:e.username})})),isLoading:s,stateFilters:C.search.length>0||Object.keys(o).length>0?o:{status:["Active"]}}})),R=Z.users,S=Z.isLoading,k=Z.stateFilters,D=(0,o.useCallback)((function(e){return j((0,O.u)(e))}),[j]),F=(0,o.useCallback)((function(e){return j((0,O.a)(e))}),[j]),L=[{title:A.formatMessage(l?b.Z.orgAdmin:b.Z.orgAdministrator),key:"org-admin",transforms:[m.nowrap]},{title:A.formatMessage(b.Z.username),key:"username",transforms:[m.sortable]},{title:A.formatMessage(b.Z.email)},{title:A.formatMessage(b.Z.firstName),transforms:[m.nowrap]},{title:A.formatMessage(b.Z.lastName),transforms:[m.nowrap]},{title:A.formatMessage(b.Z.status),transforms:[m.nowrap]}],U=(0,o.useState)({index:1,direction:"asc"}),x=(0,a.Z)(U,2),V=x[0],B=x[1],H=(0,o.useState)(u?k:{username:"",email:"",status:[A.formatMessage(b.Z.active)]}),q=(0,a.Z)(H,2),G=q[0],X=q[1];return(0,o.useEffect)((function(){u&&(0,N.oG)(C,E,w.limit,w.offset)}),[w.offset,w.limit,w.count,w.redirected]),(0,o.useEffect)((function(){var e=(0,N.rj)(C,E,w),t=e.limit,r=e.offset,n=u?(0,g.aX)(C,E,["username","email","status"],G):{status:G.status};X(n),D(_(_({},(0,p.jl)({limit:t,offset:r,filters:n})),{},{usesMetaInURL:u}))}),[]),(0,o.useEffect)((function(){u&&((0,N.Zc)(C)||(0,N.oG)(C,E,w.limit,w.offset),Object.values(G).some((function(e){return(null==e?void 0:e.length)>0}))&&!(0,g.qF)(C,Object.keys(G))&&(0,g.aX)(C,E,Object.keys(G),G))})),s().createElement(v.M,(0,n.Z)({isCompact:!0,isSelectable:!0,borders:!1,columns:L,rows:(0,h.H)(i,R,A,t,!0),sortBy:V,onSort:function(e,t,r){var n="".concat("desc"===r?"-":"").concat(L[t].key);B({index:t,direction:r}),D(_(_({},w),{},{filters:G,usesMetaInURL:u,orderBy:n}))},data:R,ouiaId:"users-table",fetchData:function(e){var t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:G.status,r=e.username,n=e.email,a=e.count,i=e.limit,o=e.offset,s=e.orderBy;D(_(_({},(0,p.jl)({count:a,limit:i,offset:o,orderBy:s,filters:{username:r,email:n,status:t}})),{},{usesMetaInURL:u})).then((function(){var e;null==M||null===(e=M.current)||void 0===e||e.focus()})),u&&(0,g.MS)(C,E,{username:r,email:n,status:t})},emptyFilters:{username:"",email:"",status:""},setFilterValue:function(e){var t,r=e.username,n=e.email,a=e.status;t={username:void 0===r?G.username:r,email:void 0===n?G.email:n,status:void 0===a||a===G.status?G.status:a},u&&F(t),X(_({username:""},t))},isLoading:S,pagination:w,checkedRows:t,setCheckedItems:function(e){r((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},rowWrapper:y.Z,titlePlural:A.formatMessage(b.Z.users).toLowerCase(),titleSingular:A.formatMessage(b.Z.user),filters:[{key:"username",value:G.username,placeholder:A.formatMessage(b.Z.filterByKey,{key:A.formatMessage(b.Z.username).toLowerCase()}),innerRef:M},{key:"email",value:G.email,placeholder:A.formatMessage(b.Z.filterByKey,{key:A.formatMessage(b.Z.email).toLowerCase()}),innerRef:M},{key:"status",value:G.status,label:A.formatMessage(b.Z.status),type:"checkbox",items:[{label:A.formatMessage(b.Z.active),value:"Active"},{label:A.formatMessage(b.Z.inactive),value:"Inactive"}]}],tableId:"users-list"},T))};A.propTypes={displayNarrow:l().bool,users:l().array,searchFilter:l().string,setSelectedUsers:l().func.isRequired,selectedUsers:l().array,userLinks:l().bool,props:l().object,usesMetaInURL:l().bool},A.defaultProps={displayNarrow:!1,users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1,usesMetaInURL:!1};const E=A},58654:(e,t,r)=>{r.d(t,{H:()=>l});var n=r(92950),a=r.n(n),i=r(25864),o=r(84747),s=r(30893),c=r(4682),u=r(65126);const l=(e,t=[],r,l=[],f=!1)=>t?.reduce(((t,{username:d,is_active:m,email:p,first_name:O,last_name:v,is_org_admin:y})=>[...t,{uuid:d,cells:[y?a().createElement(n.Fragment,null,a().createElement(o.CheckIcon,{key:"yes-icon",className:"pf-u-mr-sm"}),a().createElement("span",{key:"yes"},r.formatMessage(s.Z.yes))):a().createElement(n.Fragment,null,a().createElement(o.CloseIcon,{key:"no-icon",className:"pf-u-mr-sm"}),a().createElement("span",{key:"no"},r.formatMessage(s.Z.no))),{title:e?a().createElement(u.Z,{to:c.Z["user-detail"].link.replace(":username",d)},d.toString()):d.toString()},p,O,v,{title:a().createElement(i.Label,{key:"status",color:m?"green":"grey"},r.formatMessage(m?s.Z.active:s.Z.inactive)),props:{"data-is-active":m}}],selected:!!f&&Boolean(l?.find?.((({uuid:e})=>e===d)))}]),[])}}]);
//# sourceMappingURL=../sourcemaps/277.c4fb1bd3ee56cba951943ab380d284b8.js.map
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[6274],{94961:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(80150),s=r.n(n),a=r(45697),i=r.n(a),o=r(68340),c=r(15265),u=function(e){var t=e.description,r=e.linkTitle;return s().createElement(o.x,{className:"pf-u-mt-0",component:o.q.h7},t,s().createElement(o.x,{component:o.q.a,href:"https://www.".concat(window.insights.chrome.isProd?"":"qa.","redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},r,s().createElement(c.ZP,null)),".")};u.propTypes={description:i().node,linkTitle:i().node},u.defaultProps={description:"",linkTitle:" user management list "};const l=u},33723:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(67154),s=r.n(n),a=r(6479),i=r.n(a),o=r(80150),c=r.n(o),u=r(12460),l=r(45697),p=r.n(l),d=r(94184),f=r.n(d),m=function(e){var t,r=e.row,n=i()(e,["row"]),a=r.status,o=null==a||null===(t=a.props)||void 0===t?void 0:t["data-is-active"];return c().createElement(u.RowWrapper,s()({className:f()("ins-c-rbac__user-row",{"ins-m-inactive":!o}),row:r},n))};m.propTypes={row:p().shape({status:p().shape({props:p().shape({data:p().shape({isActive:p().bool})})})})};const b=m},77802:(e,t,r)=>{"use strict";r.d(t,{u:()=>l});var n=r(84887),s=r(59713),a=r.n(s);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=(0,r(63717).bn)(),u={Active:"enabled",Inactive:"disabled"},l=function(e){return{type:n.WH,payload:(t=e,r=t.limit,s=t.offset,a=t.username,i=t.orderBy,l=t.email,p=t.status,d=void 0===p?[]:p,f="-username"===i?"desc":"asc",m=2===d.length?"all":u[d[0]]||"all",c.listPrincipals(r,s,void 0,a,f,l,m).then((function(e){return{data:e.data,meta:o(o({},e.meta),{},{offset:s,limit:r})}})))};var t,r,s,a,i,l,p,d,f,m}},30159:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N,i:()=>Z});var n=r(67154),s=r.n(n),a=r(50008),i=r.n(a),o=r(59713),c=r.n(o),u=r(63038),l=r.n(u),p=r(319),d=r.n(p),f=r(80150),m=r.n(f),b=r(70983),v=r(45697),y=r.n(v),h=r(47194),g=r(12830),O=r(17721),w=r(77802),k=r(71355),j=r(69174),P=r(12460),E=r(33723),S=r(71410),U=r(98614),_=r(36438);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=[{title:"Org. Administrator",key:"org-admin",transforms:[P.nowrap]},{title:"Username",key:"username",transforms:[P.sortable]},{title:"Email"},{title:"First name",transforms:[P.nowrap]},{title:"Last name",transforms:[P.nowrap]},{title:"Status",transforms:[P.nowrap]}],q=function(e){return function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?t.reduce((function(t,r){var s=r.username,a=r.is_active,i=r.email,o=r.first_name,c=r.last_name,u=r.is_org_admin;return[].concat(d()(t),[{uuid:s,cells:[u?m().createElement(f.Fragment,null,m().createElement(U.ZP,{key:"yes-icon",className:"pf-u-mr-sm"}),m().createElement("span",{key:"yes"},"Yes")):m().createElement(f.Fragment,null,m().createElement(_.ZP,{key:"no-icon",className:"pf-u-mr-sm"}),m().createElement("span",{key:"no"},"No")),{title:e?m().createElement(h.Link,{to:"/users/detail/".concat(s)},s):s},i,o,c,{title:m().createElement(j._,{key:"status",color:a&&"green"},a?"Active":"Inactive"),props:{"data-is-active":a}}],selected:Boolean(n&&n.find((function(e){return e.uuid===s})))}])}),[]):[]}},A=function(e){var t=e.users,r=e.fetchUsers,n=e.isLoading,a=e.pagination,o=e.selectedUsers,c=e.setSelectedUsers,u=e.userLinks,p=e.props,d=(0,f.useState)(""),b=l()(d,2),v=b[0],y=b[1],h=(0,f.useState)(""),w=l()(h,2),k=w[0],j=w[1],P=(0,f.useState)(["Active"]),U=l()(P,2),_=U[0],L=U[1];return(0,f.useEffect)((function(){r((0,g.jl)(D(D({},S.he),{},{status:["Active"]})))}),[]),m().createElement(O.M,s()({columns:R,isSelectable:!0,isCompact:!0,borders:!1,createRows:q(u),data:t,ouiaId:"users-table",fetchData:function(e){var t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:_;r((0,g.jl)(D(D({},e),{},{status:t})))},setFilterValue:function(e){var t=e.username,r=e.email,n=e.status;void 0!==t&&y(t),void 0!==r&&j(r),void 0!==i()(_)&&L(n)},isLoading:n,pagination:a,checkedRows:o,setCheckedItems:function(e){c((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:E.Z,titlePlural:"users",titleSingular:"user",filters:[{key:"username",value:v,placeholder:"Filter by exact username"},{key:"email",value:k,placeholder:"Filter by exact email"},{key:"status",value:_,label:"Status",type:"checkbox",items:[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]}],tableId:"users-list"},p))},F=function(e){var t=e.userReducer,r=t.users,n=t.isUserDataLoading;return{users:r.data&&r.data.map((function(e){return D(D({},e),{},{uuid:e.username})})),pagination:r.meta,isLoading:n}},I=function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.he;e((0,w.u)((0,g.jl)(t)))},addNotification:function(){return e(k.wN.apply(void 0,arguments))}}};A.propTypes={history:y().shape({goBack:y().func.isRequired,push:y().func.isRequired}),users:y().array,isLoading:y().bool,searchFilter:y().string,fetchUsers:y().func.isRequired,setSelectedUsers:y().func.isRequired,selectedUsers:y().array,pagination:y().shape({limit:y().number.isRequired,offset:y().number,count:y().number}),userLinks:y().bool,props:y().object},A.defaultProps={users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1};const N=(0,b.connect)(F,I)(A);var Z=(0,b.connect)(F,I,(function(e,t,r){return D(D(D(D({},r),e),t),{},{fetchUsers:function(e){return t.fetchUsers(e||S.eX)}})}))(A)}}]);
//# sourceMappingURL=6274.b0ac9668a1dc76ee4636.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{477:function(e,t,r){(t=r(4)(!1)).push([e.i,".pf-c-label {\n  --pf-c-label--PaddingTop: var(--pf-global--spacer--xs);\n  --pf-c-label--PaddingRight: var(--pf-global--spacer--sm);\n  --pf-c-label--PaddingBottom: var(--pf-global--spacer--xs);\n  --pf-c-label--PaddingLeft: var(--pf-global--spacer--sm);\n  --pf-c-label--BorderRadius: var(--pf-global--BorderRadius--sm);\n  --pf-c-label--BackgroundColor: var(--pf-global--primary-color--100);\n  --pf-c-label--Color: var(--pf-global--Color--light-100);\n  --pf-c-label--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-label--m-compact--FontSize: var(--pf-global--FontSize--xs);\n  display: inline-block;\n  padding: var(--pf-c-label--PaddingTop) var(--pf-c-label--PaddingRight) var(--pf-c-label--PaddingBottom) var(--pf-c-label--PaddingLeft);\n  font-size: var(--pf-c-label--FontSize);\n  color: var(--pf-c-label--Color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--pf-c-label--BackgroundColor);\n  border-radius: var(--pf-c-label--BorderRadius); }\n\n.pf-c-label.pf-m-compact {\n  --pf-c-label--FontSize: var(--pf-c-label--m-compact--FontSize); }\n",""]),e.exports=t},485:function(e,t,r){"use strict";var a=r(1),n=r.n(a),o=r(0),i=r.n(o),c=r(646),s=r(647),l=function(e){var t=e.description,r=e.linkTitle;return n.a.createElement(c.a,null,n.a.createElement(s.a,{className:"pf-u-mt-0",component:s.b.h7},t," ",n.a.createElement(s.a,{component:s.b.a,href:"https://www.".concat(window.insights.chrome.isProd?"":"qa.","redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},r)))};l.propTypes={description:i.a.node,linkTitle:i.a.node},l.defaultProps={description:"",linkTitle:"user management list."},t.a=l},487:function(e,t,r){"use strict";var a=r(8),n=r.n(a),o=r(50),i=r.n(o),c=r(469),s=r.n(c),l=r(158),u=r.n(l),p=r(1),f=r.n(p),d=r(41),b=r(0),m=r.n(b),g=r(475),v=r(476),O=r(474),h=r(489),y=r(51),j=r(493),w=r.n(j),P=r(9);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const k=e=>{let{children:t,className:r="",isCompact:a=!1}=e,n=S(e,["children","className","isCompact"]);return p.createElement("span",E({},n,{className:Object(P.b)(w.a.label,r,a&&w.a.modifiers.compact)}),t)};k.propTypes={children:m.a.node.isRequired,className:m.a.string,isCompact:m.a.bool};var R=r(206),_=r(203),B=r(62),C=r.n(B),T=r(77),U=function(e){var t,r,a=e.row,n=C()(e,["row"]),o=a.status;return f.a.createElement(T.a,i()({className:"ins-c-rbac__user-row ".concat((null==o||null===(t=o.props)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.isActive)?"":"ins-m-inactive"),row:a},n))};U.propTypes={row:m.a.shape({status:m.a.shape({props:m.a.shape({data:m.a.shape({isActive:m.a.bool})})})})};var x=U;function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var F=[{title:"Status",transforms:[Object(R.a)(10),function(){return{className:"ins-m-width-5"}}]},{title:"Username",key:"username",transforms:[_.a]},{title:"Email"},{title:"First name"},{title:"Last name"}],N=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e?e.reduce((function(e,t){var a=t.username,n=t.is_active,o=t.email,i=t.first_name,c=t.last_name;return[].concat(u()(e),[{uuid:a,cells:[{title:f.a.createElement(k,{isCompact:!0,className:"ins-c-rbac__user-label ".concat(n?"":"ins-m-inactive")},n?"Active":"Inactive"),props:{data:{isActive:n}}},a,o,i,c],selected:Boolean(r&&r.find((function(e){return e.uuid===a})))}])}),[]):[]},z=function(e){var t=e.users,r=e.fetchUsers,a=e.isLoading,n=e.pagination,o=e.selectedUsers,c=e.setSelectedUsers,l=e.props,u=Object(p.useState)(""),d=s()(u,2),b=d[0],m=d[1];Object(p.useEffect)((function(){r()}),[]);return f.a.createElement(O.a,i()({columns:F,isSelectable:!0,isCompact:!0,borders:!1,createRows:N,data:t,filterValue:b,fetchData:function(e){return r(Object(g.e)(e))},setFilterValue:function(e){var t=e.name;return m(t)},isLoading:a,pagination:n,checkedRows:o,setCheckedItems:function(e){c((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:x,filterPlaceholder:"exact username",titlePlural:"users",titleSingular:"user"},l))};z.propTypes={history:m.a.shape({goBack:m.a.func.isRequired,push:m.a.func.isRequired}),users:m.a.array,isLoading:m.a.bool,searchFilter:m.a.string,fetchUsers:m.a.func.isRequired,setSelectedUsers:m.a.func.isRequired,selectedUsers:m.a.array,pagination:m.a.shape({limit:m.a.number.isRequired,offset:m.a.number,count:m.a.number}),props:m.a.object},z.defaultProps={users:[],pagination:v.a,selectedUsers:[],setSelectedUsers:function(){}};t.a=Object(d.connect)((function(e){var t=e.userReducer,r=t.users,a=t.isUserDataLoading;return{users:r.data&&r.data.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{uuid:e.username})})),pagination:r.meta,isLoading:a}}),(function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:10,offset:0};e(Object(h.a)(Object(g.e)(t)))},addNotification:function(){return e(y.addNotification.apply(void 0,arguments))}}}))(z)},489:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(11),n=r(8),o=r.n(n),i=r(488);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=Object(i.b)();var u=function(e){return{type:a.n,payload:(t=e,r=t.limit,n=t.offset,o=t.name,i="-username"===t.orderBy?"desc":"asc",l.listPrincipals(r,n,o,i).then((function(e){return{data:e.data,meta:s({},e.meta,{offset:n,limit:r})}})))};var t,r,n,o,i}},493:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(494),t.default={label:"pf-c-label",modifiers:{compact:"pf-m-compact"}}},494:function(e,t,r){var a=r(5),n=r(477);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1},i=a(n,o),c=n.locals?n.locals:{};n.locals||e.hot.accept(477,(function(){var t=r(477);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),i(t)})),e.hot.dispose((function(){i()})),e.exports=c},652:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),o=r(644),i=r(645),c=r(480),s=r(27),l=r(487),u=r(485),p=function(){var e=n.a.createElement(u.a,{description:"These are all of the users in your Red Hat organization. To add new users or manage existing users, go to your"});return n.a.createElement(o.a,null,n.a.createElement(i.a,null,n.a.createElement(c.a,{paddingBottm:!1},n.a.createElement(c.b,{title:"Users",description:e}))),n.a.createElement(i.a,null,n.a.createElement(s.Section,{type:"content",id:"users"},n.a.createElement(l.a,{props:{isSelectable:!1,isCompact:!1}}))))};p.propTypes={},p.defaultProps={},t.default=p}}]);
//# sourceMappingURL=5.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1044:function(e,t,a){var n=a(6),s=a(914);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},i=n(s,r);if(!s.locals||e.hot.invalidate){var c=s.locals;e.hot.accept(914,(function(){"string"==typeof(s=(s=a(914)).__esModule?s.default:s)&&(s=[[e.i,s,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(c,s.locals)?(c=s.locals,i(s)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=s.locals||{}},1045:function(e,t,a){var n=a(6),s=a(915);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},i=n(s,r);if(!s.locals||e.hot.invalidate){var c=s.locals;e.hot.accept(915,(function(){"string"==typeof(s=(s=a(915)).__esModule?s.default:s)&&(s=[[e.i,s,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(c,s.locals)?(c=s.locals,i(s)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=s.locals||{}},1046:function(e,t,a){var n=a(6),s=a(916);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},i=n(s,r);if(!s.locals||e.hot.invalidate){var c=s.locals;e.hot.accept(916,(function(){"string"==typeof(s=(s=a(916)).__esModule?s.default:s)&&(s=[[e.i,s,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var a;for(a in e)if(e[a]!==t[a])return!1;for(a in t)if(!e[a])return!1;return!0}(c,s.locals)?(c=s.locals,i(s)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=s.locals||{}},1047:function(e,t,a){var n={"./MUABundles":[917,7,4],"./MUABundles.scss":[917,7,4],"./__mocks__/insights":[943,9,11],"./__mocks__/insights.js":[943,9,11],"./ansible":[944,9,0,1,2,3,5],"./ansible.js":[944,9,0,1,2,3,5],"./cost_management":[945,9,0,1,2,3,8],"./cost_management.js":[945,9,0,1,2,3,8],"./insights":[827,9,0,1,2,3,9],"./insights.js":[827,9,0,1,2,3,9],"./migrations":[946,9,0,1,2,3,6],"./migrations.js":[946,9,0,1,2,3,6],"./openshift":[947,9,0,4,12],"./openshift.js":[947,9,0,4,12],"./subscriptions":[948,9,0,1,2,3,7],"./subscriptions.js":[948,9,0,1,2,3,7]};function s(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return Promise.all(t.slice(2).map(a.e)).then((function(){return a.t(s,t[1])}))}s.keys=function(){return Object.keys(n)},s.id=1047,e.exports=s},1050:function(e,t,a){"use strict";a.r(t);var n=a(799),s=a.n(n),r=a(0),i=a.n(r),c=a(203),l=a(479),o=a(779),p=a(14),d=a.n(p),u=a(753),m=a(192),g=function(e){var t=e.isOrgAdmin;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement(m.Tooltip,{position:m.TooltipPosition.right,content:i.a.createElement("span",null," You can manage other users' permissions with 'User access' ")},i.a.createElement(u.Label,{color:"purple"}," Org. Administrator ")):i.a.createElement(u.Label,{color:"purple"}," User "))};g.propTypes={isOrgAdmin:d.a.bool};var f=g,b=(a(1044),a(739)),_=a(740),y=a(737),h=a(738),v=a(190),O=a(188),A=a(100),E=a.n(A),U=a(127),w=a(487),j=a(786),k=a(505),x=[{entitlement:"insights",title:"Red Hat Insights",apps:{dashboard:"/dashboard",patch:"/patch",advisor:"/advisor",drift:"/drift",vulnerability:"/vulnerability",policies:"/policies",compliance:"/compliance"},appsIds:["dashboard","patch","advisor","drift","vulnerability","policies","compliance","inventory"]},{entitlement:"openshift",title:"Red Hat Openshift Cluster Manager",apps:{"cluster manager":"/"}},{entitlement:"ansible",title:"Red Hat Ansible Automation Platform",apps:{"automation analytics":"/automation-analytics","automation hub":"/automation-hub","automation services catalog":"/catalog"},appsIds:["catalog","approval","automation-analytics","automation-hub"]},{entitlement:"cost_management",title:"Cost Management",apps:{"cost management":"/"},appsIds:["cost-management"]},{entitlement:"migrations",title:"Migration Services",apps:{"migration analytics":"/migration-analytics"},appsIds:["migration-analytics"]},{entitlement:"subscriptions",title:"Subscription Watch",apps:{"Red Hat Enterprise Linux":"/rhel-sw","Red Hat OpenShift":"/openshift-sw"},appsIds:["subscriptions"]}],P=a(10),S=a.n(P),N=a(42);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){S()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=function(){for(var e=Object(N.h)(),t=e.search,a=new URLSearchParams(t),n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return s.reduce((function(e,t){return D(D({},e),{},S()({},t,a.get(t)))}),{})},M=(a(1045),function(e){var t=e.header,a=e.entitlements,n=e.isDisabled,r=I("bundle").bundle;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.Title,{headingLevel:"h3",size:"xl"},t),i.a.createElement(y.Stack,{hasGutter:!0},a&&(null==a?void 0:a.map((function(e){var t=s()(e,1)[0],a=x.find((function(e){return e.entitlement===t}));return a?i.a.createElement(h.StackItem,{key:t,className:"ins-c-mua-cardWrapper"},i.a.createElement(O.c,{className:E()("ins-c-mua-bundles__cardlink",{"ins-c-mua-bundles__cardlink--disabled":n}),to:{pathname:U.a["my-user-access"],search:"bundle=".concat(t)}},i.a.createElement(w.Card,{key:a.title,isFlat:n||t!==r,isSelectable:!n,isSelected:!n&&t===r,className:E()("ins-c-mua-bundles__card","ins-c-mua-bundles__card--".concat(a.entitlement),{"ins-c-mua-bundles__card--disabled":n})},i.a.createElement(j.CardTitle,{className:"ins-c-mua-bundles__card--header"}," ",a.title),i.a.createElement(k.CardBody,null,i.a.createElement(y.Stack,{hasGutter:!0},i.a.createElement(h.StackItem,{className:"ins-c-mua-bundles__card--applist"},Object.entries(a.apps||{}).map((function(e){var t=s()(e,1)[0];return i.a.createElement("span",{key:t}," ",t," ")})))))))):null})))))});M.propTypes={header:d.a.string,entitlements:d.a.array,isDisabled:d.a.bool};var B=M,T=(a(1046),function(e){var t,a=Object(N.g)(),n=a.push,s=a.location.pathname;return"string"!=typeof e||0===e.length?(n({to:s,search:"bundle=".concat(x[0].entitlement)}),[]):((null===(t=x.find((function(t){return t.entitlement===e})))||void 0===t?void 0:t.appsIds)||[]).sort((function(e,t){return e.localeCompare(t,"en-US")}))});function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){S()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z=function(){return r.Fragment},H=function(){var e=I("bundle").bundle,t=T(e),n=Object(r.useState)({}),c=s()(n,2),l=c[0],o=c[1];Object(r.useEffect)((function(){Object.prototype.hasOwnProperty.call(l,e)||a(1047)("./".concat(e)).then((function(t){return o((function(a){return L(L({},a),{},S()({},e,t.default))}))})).catch(console.log)}),[e]);var p=l[e]||z;return i.a.createElement(p,{key:e,apps:t})},R=a(853),G=function(e){var t=e.entitlements,a=e.isOrgAdmin,n=Object.entries(t).filter((function(e){return s()(e,2)[1].is_entitled})),r=Object.entries(t).filter((function(e){return!s()(e,2)[1].is_entitled}));return i.a.createElement(R.a.Provider,{value:a},i.a.createElement(b.Grid,null,i.a.createElement(_.GridItem,{className:"pf-m-3-col-on-md ins-l-myUserAccess-section__cards ins-m-hide-on-sm"},i.a.createElement(y.Stack,null,i.a.createElement(h.StackItem,{className:"ins-l-myUserAccess-section__cards--entitled"},i.a.createElement(B,{header:"Your organization's subscriptions",entitlements:n})),r.length>0&&i.a.createElement(h.StackItem,{className:"ins-l-myUserAccess-section__cards--unentitled"},i.a.createElement(B,{header:"Not subscribed",entitlements:r,isDisabled:!0})))),i.a.createElement(_.GridItem,{className:"pf-m-9-col-on-md ins-l-myUserAccess-section__table"},i.a.createElement(v.Title,{headingLevel:"h3",size:"xl"},"Your ",a?"roles":"permissions"),i.a.createElement(H,null))))};G.propTypes={entitlements:d.a.object,isOrgAdmin:d.a.bool};var W=G;t.default=function(){var e=Object(r.useState)({}),t=s()(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){var t,a=e.identity,s=e.entitlements;return n({entitlements:s,isOrgAdmin:null==a||null===(t=a.user)||void 0===t?void 0:t.is_org_admin})}))}),[]),i.a.createElement(i.a.Fragment,null,Object.prototype.hasOwnProperty.call(a,"entitlements")&&Object.prototype.hasOwnProperty.call(a,"isOrgAdmin")?i.a.createElement(i.a.Fragment,null,i.a.createElement(c.PageHeaderTitle,{className:"ins-p-myUserAccess--title sticky",title:i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null," My User Access "),i.a.createElement(f,{isOrgAdmin:a.isOrgAdmin}))}),i.a.createElement(l.Text,{component:"p",className:"ins-p-myUserAccess--subtitle"},"Select from your organization's subscriptions below to discover your individual application-specific roles and permissions."),i.a.createElement("div",{className:"ins-p-myUserAccess--dropdown sticky"},i.a.createElement("div",{className:"pf-c-dropdown pf-m-expanded"},i.a.createElement("button",{className:"pf-c-dropdown__toggle",type:"button"},i.a.createElement("span",{className:"pf-c-dropdown__toggle-text"},"Choose a subscription..."),i.a.createElement("span",{className:"pf-c-dropdown__toggle-icon"},i.a.createElement("i",{className:"fas fa-caret-down"}))))),i.a.createElement("section",null,i.a.createElement(W,{entitlements:a.entitlements,isOrgAdmin:a.isOrgAdmin}))):i.a.createElement(o.Spinner,null))}},853:function(e,t,a){"use strict";var n=a(0),s=Object(n.createContext)(!1);t.a=s},914:function(e,t,a){(t=a(5)(!1)).push([e.i,".page__myUserAccess .ins-p-myUserAccess--title{display:flex;align-items:center;background-color:var(--pf-global--BackgroundColor--100);padding:var(--pf-global--spacer--md)}.page__myUserAccess .ins-p-myUserAccess--title .pf-c-label{margin-left:var(--pf-global--spacer--md)}.page__myUserAccess .ins-p-myUserAccess--subtitle{position:relative;background-color:var(--pf-global--BackgroundColor--100);box-shadow:var(--pf-global--BoxShadow--md-bottom);padding:0 var(--pf-global--spacer--md);padding-bottom:var(--pf-global--spacer--md)}.page__myUserAccess .ins-p-myUserAccess--dropdown{display:none}.page__myUserAccess .ins-l-myUserAccess-section__cards,.page__myUserAccess .ins-l-myUserAccess-section__table{background-color:var(--pf-global--BackgroundColor--100);height:calc(100vh - 111px - 70px);padding:0 var(--pf-global--spacer--lg);overflow-x:auto}.page__myUserAccess .ins-l-myUserAccess-section__cards h3,.page__myUserAccess .ins-l-myUserAccess-section__table h3{padding:var(--pf-global--spacer--lg) 0}.page__myUserAccess .ins-l-myUserAccess-section__cards{border-right:1px solid var(--pf-global--BorderColor--100)}@media only screen and (max-width: 768px){.page__myUserAccess .sticky{position:sticky;position:-webkit-sticky;background-color:var(--pf-global--BackgroundColor--100);height:60px;width:100%;z-index:200}.page__myUserAccess .ins-p-myUserAccess--title{padding:var(--pf-global--spacer--xl) var(--pf-global--spacer--lg) var(--pf-global--spacer--md) var(--pf-global--spacer--lg);top:0}.page__myUserAccess .ins-p-myUserAccess--subtitle{box-shadow:none;padding:0 var(--pf-global--spacer--lg) var(--pf-global--spacer--lg) var(--pf-global--spacer--lg);background-color:var(--pf-global--BackgroundColor--100)}.page__myUserAccess .ins-p-myUserAccess--dropdown{display:block;padding:0 var(--pf-global--spacer--lg);top:60px}.page__myUserAccess .ins-l-myUserAccess-section__table{height:auto;margin:var(--pf-global--spacer--md)}.page__myUserAccess .ins-l-myUserAccess-section__table>.pf-c-title{display:none}}\n",""]),e.exports=t},915:function(e,t,a){(t=a(5)(!1)).push([e.i,".ins-c-mua-bundles__card--header{font-weight:300}.ins-c-mua-bundles__card--body{color:var(--pf-global--Color--200)}.ins-c-mua-bundles__card--applist{display:flex;flex-direction:column;color:var(--pf-global--Color--400)}.ins-c-mua-bundles__card--applist span{text-transform:capitalize}.ins-c-mua-bundles__card--applist span+span{margin-top:var(--pf-global--spacer--sm)}.ins-c-mua-bundles__card--insights .ins-c-mua-bundles__card--applist{display:grid;grid-template-columns:auto auto;gap:var(--pf-global--spacer--sm)}.ins-c-mua-bundles__card--insights .ins-c-mua-bundles__card--applist span{margin-top:0}.ins-c-mua-bundles__card--disabled{background:var(--pf-global--disabled-color--300)}.ins-c-mua-bundles__card+.ins-c-mua-bundles__card{margin-top:var(--pf-global--spacer--md)}.ins-c-mua-bundles__cardlink{color:inherit}.ins-c-mua-bundles__cardlink:hover{text-decoration:none}.ins-c-mua-bundles__cardlink--disabled{pointer-events:none}\n",""]),e.exports=t},916:function(e,t,a){(t=a(5)(!1)).push([e.i,".ins-l-myUserAccess-section__cards--unentitled .pf-c-title{border-top:1px solid var(--pf-global--BorderColor--100);padding-top:var(--pf-global--spacer--md)}.ins-l-myUserAccess-section__cards--unentitled .ins-c-mua-cardWrapper{cursor:not-allowed}\n",""]),e.exports=t}}]);
//# sourceMappingURL=19.js.map
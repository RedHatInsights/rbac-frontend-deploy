(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[9822],{39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(85893),s=n(94184),a=n.n(s),i=n(76857),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},c.apply(this,arguments)};const l=function(e){var t=e.className,n=e.title,s=a()(t);return(0,r.jsx)(i.Title,c({headingLevel:"h1",size:"2xl",className:s,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},39822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>M});var r=n(4942),s=n(29439),a=n(92950),i=n.n(a),c=n(334),l=n(76857),o=n(39173),u=n(86896),m=n(45697),p=n.n(m),d=n(30893),b=function(e){var t=e.isOrgAdmin,n=e.isUserAccessAdmin,r=(0,u.Z)(),s=r.formatMessage(d.Z[t?"orgAdministrator":"userAccessAdmin"]),a=i().createElement("span",null,r.formatMessage(d.Z[t?"orgAdminHint":"userAccessAdminHint"]));return t||n?i().createElement(l.Tooltip,{position:l.TooltipPosition.right,content:a},i().createElement(l.Label,{color:"purple"}," ",s," ")):i().createElement(i().Fragment,null)};b.propTypes={isOrgAdmin:p().bool,isUserAccessAdmin:p().bool};const f=b;var g=n(26794),h=n(4682),O=[{entitlement:"application_services",title:"Application Services",apps:{"Streams for Apache Kafka (beta)":"/","API Management (beta)":"/","Data Science (private beta)":"/"}},{entitlement:"openshift",title:"OpenShift",apps:{clusters:"/",advisor:"/insights/advisor",subscriptions:"/subscriptions","cost management":"/cost-management"},appsIds:["cost-management","subscriptions","ocp-advisor"]},{entitlement:"rhel",title:"Red Hat Enterprise Linux",apps:{advisor:"/advisor",compliance:"/compliance",drift:"/drift","image builder":"/image-builder",patch:"/patch",vulnerability:"/vulnerability",policies:"/policies",subscriptions:"/subscriptions"},appsIds:["dashboard","patch","advisor","drift","vulnerability","policies","compliance","inventory","notifications","image-builder","subscriptions"]},{entitlement:"ansible",title:"Ansible Automation Platform",apps:{"automation hub":"/automation-hub","automation services catalog":"/catalog",insights:"/automation-analytics"},appsIds:["catalog","approval","automation-analytics","automation-hub"]}],y=n(94184),v=n.n(y);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const _=function(){for(var e=(0,c.useLocation)(),t=e.search,n=new URLSearchParams(t),s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return a.reduce((function(e,t){return j(j({},e),{},(0,r.Z)({},t,n.get(t)))}),{})};var A=function(e){var t=e.header,n=e.entitlements,r=e.isDisabled,a=_("bundle").bundle;return i().createElement(i().Fragment,null,t&&i().createElement(l.Title,{headingLevel:"h3",size:"xl"},t),i().createElement(l.Stack,{className:v()({"pf-u-mt-lg":!t}),hasGutter:!0},n&&(null==O?void 0:O.map((function(e){var t=n.find((function(t){var n=(0,s.Z)(t,1)[0];return e.entitlement===n})),o=e.entitlement;return t?i().createElement(l.StackItem,{key:o,className:"rbac-c-mua-cardWrapper"},i().createElement(c.NavLink,{className:v()("rbac-c-mua-bundles__cardlink",{"rbac-c-mua-bundles__cardlink--disabled":r}),to:{pathname:h.Z["my-user-access"].path,search:"bundle=".concat(o)}},i().createElement(l.Card,{key:e.title,isFlat:r||o!==a,isSelectable:!r,isSelected:!r&&o===a,className:v()("rbac-c-mua-bundles__card","rbac-c-mua-bundles__card--".concat(e.entitlement),{"rbac-c-mua-bundles__card--disabled":r})},i().createElement(l.CardTitle,{className:"rbac-c-mua-bundles__card--header"}," ",e.title),i().createElement(l.CardBody,null,i().createElement(l.Stack,{hasGutter:!0},i().createElement(l.StackItem,{className:"rbac-c-mua-bundles__card--applist"},Object.entries(e.apps||{}).map((function(e){var t=(0,s.Z)(e,1)[0];return i().createElement("span",{key:t}," ",t," ")})))))))):null})))))};A.propTypes={header:p().string,entitlements:p().array,isDisabled:p().bool};const P=A;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(){return a.Fragment};const S=function(){var e=_("bundle").bundle,t=function(e){var t,n=(0,c.useHistory)(),r=n.replace,s=n.location.pathname;return"string"==typeof e&&0!==e.length&&["application_services","openshift","rhel","ansible"].includes(e)?(null===(t=O.find((function(t){return t.entitlement===e})))||void 0===t?void 0:t.appsIds)||[]:(r({to:s,search:"bundle=".concat(e="rhel")}),[])}(e),l=(0,a.useState)({}),o=(0,s.Z)(l,2),u=o[0],m=o[1];(0,a.useEffect)((function(){Object.prototype.hasOwnProperty.call(u,e)||n(19289)("./".concat(e)).then((function(t){return m((function(n){return Z(Z({},n),{},(0,r.Z)({},e,t.default))}))})).catch(console.log)}),[e]);var p=u[e]||k;return i().createElement(p,{key:e,apps:t})};var D=n(63053),U=function(e){var t,n=e.entitlements,r=e.isOrgAdmin,a=e.isUserAccessAdmin,c=(0,u.Z)(),o=Object.entries(n).filter((function(e){return(0,s.Z)(e,2)[1].is_entitled})),m=Object.entries(n).filter((function(e){return!(0,s.Z)(e,2)[1].is_entitled})),p=_("bundle").bundle,b=r||a;return i().createElement(D.Z.Provider,{value:b},i().createElement(l.Grid,null,i().createElement(l.GridItem,{className:"pf-m-3-col-on-md rbac-l-myUserAccess-section__cards rbac-m-hide-on-sm"},i().createElement(l.Stack,null,i().createElement(l.StackItem,{className:"rbac-l-myUserAccess-section__cards--entitled"},i().createElement(P,{entitlements:o})),m.length>0&&i().createElement(l.StackItem,{className:"rbac-l-myUserAccess-section__cards--unentitled"},i().createElement(P,{header:c.formatMessage(d.Z.notSubscribed),entitlements:m,isDisabled:!0})))),i().createElement(l.GridItem,{className:"pf-m-9-col-on-md rbac-l-myUserAccess-section__table"},"application_services"!==p&&i().createElement(l.Title,{headingLevel:"h3",size:"xl"},c.formatMessage(b?d.Z.yourRoles:d.Z.yourPermissions,{name:null===(t=O.find((function(e){return e.entitlement===p})))||void 0===t?void 0:t.title})),i().createElement(S,null))))};U.propTypes={entitlements:p().object,isOrgAdmin:p().bool,isUserAccessAdmin:p().bool};const N=U;function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const M=function(){var e=(0,u.Z)(),t=(0,a.useState)({}),n=(0,s.Z)(t,2),r=n[0],m=n[1],p=_("bundle").bundle,b=(0,a.useState)(p),y=(0,s.Z)(b,2),v=y[0],E=y[1],j=(0,a.useContext)(g.Z).userAccessAdministrator;(0,a.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){var t,n=e.identity,r=e.entitlements;return m({entitlements:r,isOrgAdmin:null==n||null===(t=n.user)||void 0===t?void 0:t.is_org_admin})}))}),[]);var A=T(T({},r.entitlements),{},{application_services:{is_entitled:!0,is_trial:!1}}),P=Object.entries(A).filter((function(e){return(0,s.Z)(e,2)[1].is_entitled})),w=(0,a.useState)(!1),Z=(0,s.Z)(w,2),k=Z[0],S=Z[1];return i().createElement(i().Fragment,null,Object.prototype.hasOwnProperty.call(r,"entitlements")&&(Object.prototype.hasOwnProperty.call(r,"isOrgAdmin")||j)?i().createElement(i().Fragment,null,i().createElement(o.Z,{className:"rbac-p-myUserAccess--title sticky",title:i().createElement(i().Fragment,null,i().createElement("span",null," ",e.formatMessage(d.Z.myUserAccess)," "),i().createElement(f,{isOrgAdmin:r.isOrgAdmin,isUserAccessAdmin:j}))}),i().createElement(l.Text,{component:"p",className:"rbac-p-myUserAccess--subtitle"},e.formatMessage(d.Z.selectAppsToViewPermissions)),P&&i().createElement("div",{className:"rbac-p-myUserAccess--dropdown sticky"},i().createElement(l.Dropdown,{ouiaId:"mua-bundle-dropdown",toggle:i().createElement(l.DropdownToggle,{onToggle:function(){return S(!k)},id:"mua-bundle-dropdown"},v||e.formatMessage(d.Z.chooseSubscriptionEllipsis)),dropdownItems:O.map((function(e){return i().createElement(c.NavLink,{key:e.entitlement,to:{pathname:h.Z["my-user-access"].path,search:"bundle=".concat(e.entitlement)}},i().createElement(l.DropdownItem,{onClick:function(){E(e.title),S(!1)},component:"button"},e.title))})),isOpen:k})),i().createElement("section",null,i().createElement(N,{entitlements:A,isOrgAdmin:r.isOrgAdmin,isUserAccessAdmin:j}))):i().createElement(l.Spinner,null))}},63053:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(92950).createContext)(!1)},19289:(e,t,n)=>{var r={"./MUABundles":[35337,5337],"./MUABundles.scss":[35337,5337],"./__mocks__/rhel":[18348,8348],"./__mocks__/rhel.js":[18348,8348],"./ansible":[85039,9282,8152,156,8701,1936,8090,4124,7905,2632],"./ansible.js":[85039,9282,8152,156,8701,1936,8090,4124,7905,2632],"./application_services":[62997,2997],"./application_services.js":[62997,2997],"./openshift":[57416,9282,8152,156,8701,1936,8090,4124,7905,7247],"./openshift.js":[57416,9282,8152,156,8701,1936,8090,4124,7905,7247],"./rhel":[54250,9282,8152,156,8701,1936,8090,4124,7905,7664],"./rhel.js":[54250,9282,8152,156,8701,1936,8090,4124,7905,7664]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(s)))}s.keys=()=>Object.keys(r),s.id=19289,e.exports=s}}]);
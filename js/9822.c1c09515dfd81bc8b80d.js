(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[9822],{39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(85893),s=n(94184),a=n.n(s),i=n(76857),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},c.apply(this,arguments)};const l=function(e){var t=e.className,n=e.title,s=a()(t);return(0,r.jsx)(i.Title,c({headingLevel:"h1",size:"2xl",className:s,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},39822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var r=n(4942),s=n(29439),a=n(92950),i=n.n(a),c=n(334),l=n(76857),o=n(39173),u=n(55140),m=n(86896),p=n(45697),d=n.n(p),b=n(30893),f=function(e){var t=e.isOrgAdmin,n=e.isUserAccessAdmin,r=(0,m.Z)(),s=r.formatMessage(b.Z[t?"orgAdministrator":"userAccessAdmin"]),a=i().createElement("span",null,r.formatMessage(b.Z[t?"orgAdminHint":"userAccessAdminHint"]));return t||n?i().createElement(l.Tooltip,{position:l.TooltipPosition.right,content:a},i().createElement(l.Label,{color:"purple"}," ",s," ")):i().createElement(i().Fragment,null)};f.propTypes={isOrgAdmin:d().bool,isUserAccessAdmin:d().bool};const g=f;var h=n(26794),O=n(4682),y=[{entitlement:"application_services",title:"Application Services",apps:{"Streams for Apache Kafka (beta)":"/","API Management (beta)":"/","Data Science (private beta)":"/"}},{entitlement:"openshift",title:"OpenShift",apps:{clusters:"/",advisor:"/insights/advisor",subscriptions:"/subscriptions","cost management":"/cost-management"},appsIds:["cost-management","subscriptions","ocp-advisor","ocm"]},{entitlement:"rhel",title:"Red Hat Enterprise Linux",apps:{advisor:"/advisor",compliance:"/compliance",drift:"/drift","image builder":"/image-builder",patch:"/patch",vulnerability:"/vulnerability",policies:"/policies",subscriptions:"/subscriptions"},appsIds:["dashboard","patch","advisor","drift","vulnerability","policies","compliance","inventory","notifications","image-builder","subscriptions"]},{entitlement:"ansible",title:"Ansible Automation Platform",apps:{"automation hub":"/automation-hub","automation services catalog":"/catalog",insights:"/automation-analytics"},appsIds:["catalog","approval","automation-analytics","automation-hub"]}],v=n(94184),E=n.n(v);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const A=function(){for(var e=(0,c.useLocation)(),t=e.search,n=new URLSearchParams(t),s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return a.reduce((function(e,t){return _(_({},e),{},(0,r.Z)({},t,n.get(t)))}),{})};var P=function(e){var t=e.header,n=e.entitlements,r=e.isDisabled,a=A("bundle").bundle;return i().createElement(i().Fragment,null,t&&i().createElement(l.Title,{headingLevel:"h3",size:"xl"},t),i().createElement(l.Stack,{className:E()({"pf-u-mt-lg":!t}),hasGutter:!0},n&&(null==y?void 0:y.map((function(e){var t=n.find((function(t){var n=(0,s.Z)(t,1)[0];return e.entitlement===n})),o=e.entitlement;return t?i().createElement(l.StackItem,{key:o,className:"rbac-c-mua-cardWrapper"},i().createElement(c.NavLink,{"aria-label":"card-link",className:E()("rbac-c-mua-bundles__cardlink",{"rbac-c-mua-bundles__cardlink--disabled":r}),to:{pathname:O.Z["my-user-access"].path,search:"bundle=".concat(o)}},i().createElement(l.Card,{key:e.title,isFlat:r||o!==a,isSelectable:!r,isSelected:!r&&o===a,className:E()("rbac-c-mua-bundles__card","rbac-c-mua-bundles__card--".concat(e.entitlement),{"rbac-c-mua-bundles__card--disabled":r})},i().createElement(l.CardTitle,{className:"rbac-c-mua-bundles__card--header"}," ",e.title),i().createElement(l.CardBody,null,i().createElement(l.Stack,{hasGutter:!0},i().createElement(l.StackItem,{className:"rbac-c-mua-bundles__card--applist"},Object.entries(e.apps||{}).map((function(e){var t=(0,s.Z)(e,1)[0];return i().createElement("span",{key:t}," ",t," ")})))))))):null})))))};P.propTypes={header:d().string,entitlements:d().array,isDisabled:d().bool};const w=P;function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(){return a.Fragment};const D=function(){var e=A("bundle").bundle,t=function(e){var t,n=(0,c.useHistory)(),r=n.replace,s=n.location.pathname;return"string"==typeof e&&0!==e.length&&["application_services","openshift","rhel","ansible"].includes(e)?(null===(t=y.find((function(t){return t.entitlement===e})))||void 0===t?void 0:t.appsIds)||[]:(r({to:s,search:"bundle=".concat(e="rhel")}),[])}(e),l=(0,a.useState)({}),o=(0,s.Z)(l,2),u=o[0],m=o[1];(0,a.useEffect)((function(){Object.prototype.hasOwnProperty.call(u,e)||n(19289)("./".concat(e)).then((function(t){return m((function(n){return k(k({},n),{},(0,r.Z)({},e,t.default))}))})).catch(console.log)}),[e]);var p=u[e]||S;return i().createElement(p,{key:e,apps:t})};var U=n(63053),N=function(e){var t,n=e.entitlements,r=e.isOrgAdmin,a=e.isUserAccessAdmin,c=(0,m.Z)(),o=Object.entries(n).filter((function(e){return(0,s.Z)(e,2)[1].is_entitled})),u=Object.entries(n).filter((function(e){return!(0,s.Z)(e,2)[1].is_entitled})),p=A("bundle").bundle,d=r||a;return i().createElement(U.Z.Provider,{value:d},i().createElement(l.Grid,null,i().createElement(l.GridItem,{className:"pf-m-3-col-on-md rbac-l-myUserAccess-section__cards rbac-m-hide-on-sm"},i().createElement(l.Stack,null,i().createElement(l.StackItem,{className:"rbac-l-myUserAccess-section__cards--entitled"},i().createElement(w,{entitlements:o})),u.length>0&&i().createElement(l.StackItem,{className:"rbac-l-myUserAccess-section__cards--unentitled"},i().createElement(w,{header:c.formatMessage(b.Z.notSubscribed),entitlements:u,isDisabled:!0})))),i().createElement(l.GridItem,{className:"pf-m-9-col-on-md rbac-l-myUserAccess-section__table"},"application_services"!==p&&i().createElement(l.Title,{headingLevel:"h3",size:"xl"},c.formatMessage(d?b.Z.yourRoles:b.Z.yourPermissions,{name:null===(t=y.find((function(e){return e.entitlement===p})))||void 0===t?void 0:t.title})),i().createElement(D,null))))};N.propTypes={entitlements:d().object,isOrgAdmin:d().bool,isUserAccessAdmin:d().bool};const I=N;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const L=function(){var e=(0,m.Z)(),t=(0,u.Z)(),n=(0,a.useState)({}),r=(0,s.Z)(n,2),p=r[0],d=r[1],f=A("bundle").bundle,v=(0,a.useState)(f),E=(0,s.Z)(v,2),j=E[0],_=E[1],P=(0,a.useContext)(h.Z).userAccessAdministrator;(0,a.useEffect)((function(){t.auth.getUser().then((function(e){var t,n=e.identity,r=e.entitlements;return d({entitlements:r,isOrgAdmin:null==n||null===(t=n.user)||void 0===t?void 0:t.is_org_admin})}))}),[]);var w=M(M({},p.entitlements),{},{application_services:{is_entitled:!0,is_trial:!1}}),Z=Object.entries(w).filter((function(e){return(0,s.Z)(e,2)[1].is_entitled})),k=(0,a.useState)(!1),S=(0,s.Z)(k,2),D=S[0],U=S[1];return i().createElement(i().Fragment,null,Object.prototype.hasOwnProperty.call(p,"entitlements")&&(Object.prototype.hasOwnProperty.call(p,"isOrgAdmin")||P)?i().createElement(i().Fragment,null,i().createElement(o.Z,{className:"rbac-p-myUserAccess--title sticky",title:i().createElement(i().Fragment,null,i().createElement("span",null," ",e.formatMessage(b.Z.myUserAccess)," "),i().createElement(g,{isOrgAdmin:p.isOrgAdmin,isUserAccessAdmin:P}))}),i().createElement(l.Text,{component:"p",className:"rbac-p-myUserAccess--subtitle"},e.formatMessage(b.Z.selectAppsToViewPermissions)),Z&&i().createElement("div",{className:"rbac-p-myUserAccess--dropdown sticky"},i().createElement(l.Dropdown,{ouiaId:"mua-bundle-dropdown",toggle:i().createElement(l.DropdownToggle,{onToggle:function(){return U(!D)},id:"mua-bundle-dropdown"},j||e.formatMessage(b.Z.chooseSubscriptionEllipsis)),dropdownItems:y.map((function(e){return i().createElement(c.NavLink,{key:e.entitlement,to:{pathname:O.Z["my-user-access"].path,search:"bundle=".concat(e.entitlement)}},i().createElement(l.DropdownItem,{onClick:function(){_(e.title),U(!1)},component:"button"},e.title))})),isOpen:D})),i().createElement("section",null,i().createElement(I,{entitlements:w,isOrgAdmin:p.isOrgAdmin,isUserAccessAdmin:P}))):i().createElement(l.Spinner,null))}},63053:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(92950).createContext)(!1)},19289:(e,t,n)=>{var r={"./MUABundles":[35337,5337],"./MUABundles.scss":[35337,5337],"./__mocks__/rhel":[18348,8348],"./__mocks__/rhel.js":[18348,8348],"./ansible":[85039,9282,1693,156,8701,1936,8090,1800,7905,2632],"./ansible.js":[85039,9282,1693,156,8701,1936,8090,1800,7905,2632],"./application_services":[62997,2997],"./application_services.js":[62997,2997],"./openshift":[57416,9282,1693,156,8701,1936,8090,1800,7905,7247],"./openshift.js":[57416,9282,1693,156,8701,1936,8090,1800,7905,7247],"./rhel":[54250,9282,1693,156,8701,1936,8090,1800,7905,7664],"./rhel.js":[54250,9282,1693,156,8701,1936,8090,1800,7905,7664]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(s)))}s.keys=()=>Object.keys(r),s.id=19289,e.exports=s}}]);
//# sourceMappingURL=../sourcemaps/9822.c004fc4b456fbf36edbb2d055da65127.js.map
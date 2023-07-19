(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[9822],{39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(85893),a=n(94184),s=n.n(a),i=n(76857),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const l=function(e){var t=e.className,n=e.title,a=s()(t);return(0,r.jsx)(i.Title,c({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},39822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>M});var r=n(4942),a=n(29439),s=n(92950),i=n.n(s),c=n(46801),l=n(76857),o=n(39173),u=n(55140),m=n(86896),p=n(45697),d=n.n(p),b=n(30893),f=function(e){var t=e.isOrgAdmin,n=e.isUserAccessAdmin,r=(0,m.Z)(),a=r.formatMessage(b.Z[t?"orgAdministrator":"userAccessAdmin"]),s=i().createElement("span",null,r.formatMessage(b.Z[t?"orgAdminHint":"userAccessAdminHint"]));return t||n?i().createElement(l.Tooltip,{position:l.TooltipPosition.right,content:s},i().createElement(l.Label,{color:"purple"}," ",a," ")):i().createElement(i().Fragment,null)};f.propTypes={isOrgAdmin:d().bool,isUserAccessAdmin:d().bool};const g=f;var O=n(26794),h=[{entitlement:"application_services",title:"Application Services",apps:{"Streams for Apache Kafka (beta)":"/","API Management (beta)":"/","Data Science (private beta)":"/"}},{entitlement:"openshift",title:"OpenShift",apps:{clusters:"/",advisor:"/insights/advisor",subscriptions:"/subscriptions","cost management":"/cost-management"},appsIds:["cost-management","subscriptions","ocp-advisor","ocm"]},{entitlement:"rhel",title:"Red Hat Enterprise Linux",apps:{advisor:"/advisor",compliance:"/compliance",drift:"/drift","image builder":"/image-builder",patch:"/patch",vulnerability:"/vulnerability",policies:"/policies",subscriptions:"/subscriptions"},appsIds:["dashboard","patch","advisor","drift","vulnerability","policies","compliance","inventory","notifications","image-builder","subscriptions"]},{entitlement:"ansible",title:"Ansible Automation Platform",apps:{"automation hub":"/automation-hub","automation services catalog":"/catalog",insights:"/automation-analytics"},appsIds:["catalog","approval","automation-analytics","automation-hub"]}],v=n(94184),y=n.n(v);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const _=function(){for(var e=(0,c.useLocation)(),t=e.search,n=new URLSearchParams(t),a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return s.reduce((function(e,t){return j(j({},e),{},(0,r.Z)({},t,n.get(t)))}),{})};var A=function(e){var t=e.header,n=e.entitlements,r=e.isDisabled,s=_("bundle").bundle;return i().createElement(i().Fragment,null,t&&i().createElement(l.Title,{headingLevel:"h3",size:"xl"},t),i().createElement(l.Stack,{className:y()({"pf-u-mt-lg":!t}),hasGutter:!0},n&&(null==h?void 0:h.map((function(e){var t=n.find((function(t){var n=(0,a.Z)(t,1)[0];return e.entitlement===n})),o=e.entitlement;return t?i().createElement(l.StackItem,{key:o,className:"rbac-c-mua-cardWrapper"},i().createElement(c.NavLink,{"aria-label":"card-link",className:y()("rbac-c-mua-bundles__cardlink",{"rbac-c-mua-bundles__cardlink--disabled":r}),to:{pathname:"",search:"bundle=".concat(o)}},i().createElement(l.Card,{key:e.title,isFlat:r||o!==s,isSelectable:!r,isSelected:!r&&o===s,className:y()("rbac-c-mua-bundles__card","rbac-c-mua-bundles__card--".concat(e.entitlement),{"rbac-c-mua-bundles__card--disabled":r})},i().createElement(l.CardTitle,{className:"rbac-c-mua-bundles__card--header"}," ",e.title),i().createElement(l.CardBody,null,i().createElement(l.Stack,{hasGutter:!0},i().createElement(l.StackItem,{className:"rbac-c-mua-bundles__card--applist"},Object.entries(e.apps||{}).map((function(e){var t=(0,a.Z)(e,1)[0];return i().createElement("span",{key:t}," ",t," ")})))))))):null})))))};A.propTypes={header:d().string,entitlements:d().array,isDisabled:d().bool};const P=A;var w=n(84866);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(){return s.Fragment};const D=function(){var e=_("bundle").bundle,t=function(e){var t,n=(0,c.useLocation)().pathname,r=(0,c.useNavigate)();return"string"==typeof e&&0!==e.length&&["application_services","openshift","rhel","ansible"].includes(e)?(null===(t=h.find((function(t){return t.entitlement===e})))||void 0===t?void 0:t.appsIds)||[]:(e=w.Jr,r({to:n,search:"bundle=".concat(e)},{replace:!0}),[])}(e),l=(0,s.useState)({}),o=(0,a.Z)(l,2),u=o[0],m=o[1];(0,s.useEffect)((function(){Object.prototype.hasOwnProperty.call(u,e)||n(19289)("./".concat(e)).then((function(t){return m((function(n){return Z(Z({},n),{},(0,r.Z)({},e,t.default))}))})).catch(console.log)}),[e]);var p=u[e]||S;return i().createElement(p,{key:e,apps:t})};var N=n(63053),U=function(e){var t,n=e.entitlements,r=e.isOrgAdmin,s=e.isUserAccessAdmin,c=(0,m.Z)(),o=Object.entries(n).filter((function(e){return(0,a.Z)(e,2)[1].is_entitled})),u=Object.entries(n).filter((function(e){return!(0,a.Z)(e,2)[1].is_entitled})),p=_("bundle").bundle,d=r||s;return i().createElement(N.Z.Provider,{value:d},i().createElement(l.Grid,null,i().createElement(l.GridItem,{className:"pf-m-3-col-on-md rbac-l-myUserAccess-section__cards rbac-m-hide-on-sm"},i().createElement(l.Stack,null,i().createElement(l.StackItem,{className:"rbac-l-myUserAccess-section__cards--entitled"},i().createElement(P,{entitlements:o})),u.length>0&&i().createElement(l.StackItem,{className:"rbac-l-myUserAccess-section__cards--unentitled"},i().createElement(P,{header:c.formatMessage(b.Z.notSubscribed),entitlements:u,isDisabled:!0})))),i().createElement(l.GridItem,{className:"pf-m-9-col-on-md rbac-l-myUserAccess-section__table"},"application_services"!==p&&i().createElement(l.Title,{headingLevel:"h3",size:"xl"},c.formatMessage(d?b.Z.yourRoles:b.Z.yourPermissions,{name:null===(t=h.find((function(e){return e.entitlement===p})))||void 0===t?void 0:t.title})),i().createElement(D,null))))};U.propTypes={entitlements:d().object,isOrgAdmin:d().bool,isUserAccessAdmin:d().bool};const I=U;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const M=function(){var e=(0,m.Z)(),t=(0,u.Z)(),n=(0,s.useState)({}),r=(0,a.Z)(n,2),p=r[0],d=r[1],f=(0,c.useSearchParams)(),v=(0,a.Z)(f,2),y=v[0].bundle,E=v[1],j=(0,s.useState)(y),_=(0,a.Z)(j,2),A=_[0],P=_[1],k=(0,s.useContext)(O.Z).userAccessAdministrator;(0,s.useEffect)((function(){t.auth.getUser().then((function(e){var t,n=e.identity,r=e.entitlements;return d({entitlements:r,isOrgAdmin:null==n||null===(t=n.user)||void 0===t?void 0:t.is_org_admin})})),!y&&E({bundle:w.Jr})}),[]);var Z=L(L({},p.entitlements),{},{application_services:{is_entitled:!0,is_trial:!1}}),S=Object.entries(Z).filter((function(e){return(0,a.Z)(e,2)[1].is_entitled})),D=(0,s.useState)(!1),N=(0,a.Z)(D,2),U=N[0],T=N[1];return i().createElement(i().Fragment,null,Object.prototype.hasOwnProperty.call(p,"entitlements")&&(Object.prototype.hasOwnProperty.call(p,"isOrgAdmin")||k)?i().createElement(i().Fragment,null,i().createElement(o.Z,{className:"rbac-p-myUserAccess--title sticky",title:i().createElement(i().Fragment,null,i().createElement("span",null," ",e.formatMessage(b.Z.myUserAccess)," "),i().createElement(g,{isOrgAdmin:p.isOrgAdmin,isUserAccessAdmin:k}))}),i().createElement(l.Text,{component:"p",className:"rbac-p-myUserAccess--subtitle"},e.formatMessage(b.Z.selectAppsToViewPermissions)),S&&i().createElement("div",{className:"rbac-p-myUserAccess--dropdown sticky"},i().createElement(l.Dropdown,{ouiaId:"mua-bundle-dropdown",toggle:i().createElement(l.DropdownToggle,{onToggle:function(){return T(!U)},id:"mua-bundle-dropdown"},A||e.formatMessage(b.Z.chooseSubscriptionEllipsis)),dropdownItems:h.map((function(e){return i().createElement(c.NavLink,{key:e.entitlement,to:{pathname:"",search:"bundle=".concat(e.entitlement)}},i().createElement(l.DropdownItem,{onClick:function(){P(e.title),T(!1)},component:"button"},e.title))})),isOpen:U})),i().createElement("section",null,i().createElement(I,{entitlements:Z,isOrgAdmin:p.isOrgAdmin,isUserAccessAdmin:k}))):i().createElement(l.Spinner,null))}},84866:(e,t,n)=>{"use strict";n.d(t,{$3:()=>s,Jr:()=>i,OJ:()=>r,WO:()=>a});var r="/api/rbac/v1",a="/api/cost-management/v1",s="/api/inventory/v1",i="rhel"},63053:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(92950).createContext)(!1)},19289:(e,t,n)=>{var r={"./MUABundles":[35337,5337],"./MUABundles.scss":[35337,5337],"./__mocks__/rhel":[18348,8348],"./__mocks__/rhel.js":[18348,8348],"./ansible":[85039,1831,9949,5108,1936,60,7228,8309,4250,2632],"./ansible.js":[85039,1831,9949,5108,1936,60,7228,8309,4250,2632],"./application_services":[62997,2997],"./application_services.js":[62997,2997],"./openshift":[57416,1831,9949,5108,1936,60,7228,8309,4250,7247],"./openshift.js":[57416,1831,9949,5108,1936,60,7228,8309,4250,7247],"./rhel":[54250,1831,9949,5108,1936,60,7228,8309,4250,7664],"./rhel.js":[54250,1831,9949,5108,1936,60,7228,8309,4250,7664]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(a)))}a.keys=()=>Object.keys(r),a.id=19289,e.exports=a}}]);
//# sourceMappingURL=../sourcemaps/9822.370b71dde076ae3c239658f17638f3ab.js.map
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[822],{39822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var r=n(96156),a=n(28481),c=n(92950),s=n.n(c),i=n(97066),l=n(39173),o=n(45697),u=n.n(o),m=function(e){return e.isOrgAdmin?s().createElement(i.Tooltip,{position:i.TooltipPosition.right,content:s().createElement("span",null," You can manage other users' permissions with 'User access' ")},s().createElement(i.Label,{color:"purple"}," Org. Administrator ")):s().createElement(s().Fragment,null)};m.propTypes={isOrgAdmin:u().bool};const p=m;var d=n(334),b=n(94184),f=n.n(b),O=n(60306),g=[{entitlement:"application_services",title:"Application Services",apps:{"Streams for Apache Kafka (beta)":"/","API Management (beta)":"/","Data Science (private beta)":"/"}},{entitlement:"openshift",title:"OpenShift",apps:{clusters:"/",subscriptions:"/subscriptions","cost management":"/cost-management"},appsIds:["cost-management","subscriptions"]},{entitlement:"rhel",title:"Red Hat Enterprise Linux",apps:{advisor:"/advisor",compliance:"/compliance",drift:"/drift","image builder":"/image-builder",patch:"/patch",vulnerability:"/vulnerability",policies:"/policies",subscriptions:"/subscriptions"},appsIds:["dashboard","patch","advisor","drift","vulnerability","policies","compliance","inventory","notifications","image-builder","subscriptions"]},{entitlement:"ansible",title:"Ansible Automation Platform",apps:{"automation hub":"/automation-hub","automation services catalog":"/catalog",insights:"/automation-analytics"},appsIds:["catalog","approval","automation-analytics","automation-hub"]}];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const v=function(){for(var e=(0,d.useLocation)(),t=e.search,n=new URLSearchParams(t),a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return c.reduce((function(e,t){return y(y({},e),{},(0,r.Z)({},t,n.get(t)))}),{})};var E=function(e){var t=e.header,n=e.entitlements,r=e.isDisabled,c=v("bundle").bundle;return s().createElement(s().Fragment,null,t&&s().createElement(i.Title,{headingLevel:"h3",size:"xl"},t),s().createElement(i.Stack,{className:f()({"pf-u-mt-lg":!t}),hasGutter:!0},n&&(null==g?void 0:g.map((function(e){var t=n.find((function(t){var n=(0,a.Z)(t,1)[0];return e.entitlement===n})),l=e.entitlement;return t?s().createElement(i.StackItem,{key:l,className:"rbac-c-mua-cardWrapper"},s().createElement(d.NavLink,{className:f()("rbac-c-mua-bundles__cardlink",{"rbac-c-mua-bundles__cardlink--disabled":r}),to:{pathname:O._j.d$,search:"bundle=".concat(l)}},s().createElement(i.Card,{key:e.title,isFlat:r||l!==c,isSelectable:!r,isSelected:!r&&l===c,className:f()("rbac-c-mua-bundles__card","rbac-c-mua-bundles__card--".concat(e.entitlement),{"rbac-c-mua-bundles__card--disabled":r})},s().createElement(i.CardTitle,{className:"rbac-c-mua-bundles__card--header"}," ",e.title),s().createElement(i.CardBody,null,s().createElement(i.Stack,{hasGutter:!0},s().createElement(i.StackItem,{className:"rbac-c-mua-bundles__card--applist"},Object.entries(e.apps||{}).map((function(e){var t=(0,a.Z)(e,1)[0];return s().createElement("span",{key:t}," ",t," ")})))))))):null})))))};E.propTypes={header:u().string,entitlements:u().array,isDisabled:u().bool};const _=E;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){return c.Fragment};const k=function(){var e=v("bundle").bundle,t=function(e){var t,n=(0,d.useHistory)(),r=n.replace,a=n.location.pathname;return"string"!=typeof e||0===e.length?(r({to:a,search:"bundle=rhel"}),[]):(null===(t=g.find((function(t){return t.entitlement===e})))||void 0===t?void 0:t.appsIds)||[]}(e),i=(0,c.useState)({}),l=(0,a.Z)(i,2),o=l[0],u=l[1];(0,c.useEffect)((function(){Object.prototype.hasOwnProperty.call(o,e)||n(19289)("./".concat(e)).then((function(t){return u((function(n){return w(w({},n),{},(0,r.Z)({},e,t.default))}))})).catch(console.log)}),[e]);var m=o[e]||P;return s().createElement(m,{key:e,apps:t})};var A=n(63053),S=function(e){var t,n=e.entitlements,r=e.isOrgAdmin,c=Object.entries(n).filter((function(e){return(0,a.Z)(e,2)[1].is_entitled})),l=Object.entries(n).filter((function(e){return!(0,a.Z)(e,2)[1].is_entitled})),o=v("bundle").bundle;return s().createElement(A.Z.Provider,{value:r},s().createElement(i.Grid,null,s().createElement(i.GridItem,{className:"pf-m-3-col-on-md rbac-l-myUserAccess-section__cards ins-m-hide-on-sm"},s().createElement(i.Stack,null,s().createElement(i.StackItem,{className:"rbac-l-myUserAccess-section__cards--entitled"},s().createElement(_,{entitlements:c})),l.length>0&&s().createElement(i.StackItem,{className:"rbac-l-myUserAccess-section__cards--unentitled"},s().createElement(_,{header:"Not subscribed",entitlements:l,isDisabled:!0})))),s().createElement(i.GridItem,{className:"pf-m-9-col-on-md rbac-l-myUserAccess-section__table"},"application_services"!==o&&s().createElement(i.Title,{headingLevel:"h3",size:"xl"},"Your ".concat(null===(t=g.find((function(e){return e.entitlement===o})))||void 0===t?void 0:t.title," ").concat(r?"roles":"permissions")),s().createElement(k,null))))};S.propTypes={entitlements:u().object,isOrgAdmin:u().bool};const D=S;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Z=function(){var e=(0,c.useState)({}),t=(0,a.Z)(e,2),n=t[0],r=t[1];(0,c.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){var t,n=e.identity,a=e.entitlements;return r({entitlements:a,isOrgAdmin:null==n||null===(t=n.user)||void 0===t?void 0:t.is_org_admin})}))}),[]);var o=U(U({},n.entitlements),{},{application_services:{is_entitled:!0,is_trial:!1}}),u=(0,c.useState)(!1),m=(0,a.Z)(u,2),d=m[0],b=m[1],f=[s().createElement(i.DropdownItem,{key:"test"},"test")];return s().createElement(s().Fragment,null,Object.prototype.hasOwnProperty.call(n,"entitlements")&&Object.prototype.hasOwnProperty.call(n,"isOrgAdmin")?s().createElement(s().Fragment,null,s().createElement(l.Z,{className:"rbac-p-myUserAccess--title sticky",title:s().createElement(s().Fragment,null,s().createElement("span",null," My User Access "),s().createElement(p,{isOrgAdmin:n.isOrgAdmin}))}),s().createElement(i.Text,{component:"p",className:"rbac-p-myUserAccess--subtitle"},"Select applications to view your personal permissions."),s().createElement("div",{className:"rbac-p-myUserAccess--dropdown sticky"},s().createElement(i.Dropdown,{ouiaId:"mua-bundle-dropdown",toggle:s().createElement(i.DropdownToggle,{onToggle:function(){return b()},id:"mua-bundle-dropdown"},"Choose a subscription..."),dropdownItems:f,isOpen:d})),s().createElement("section",null,s().createElement(D,{entitlements:o,isOrgAdmin:n.isOrgAdmin}))):s().createElement(i.Spinner,null))}},63053:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(92950).createContext)(!1)},19289:(e,t,n)=>{var r={"./MUABundles":[35337,436,337],"./MUABundles.scss":[35337,436,337],"./__mocks__/rhel":[18348,348],"./__mocks__/rhel.js":[18348,348],"./ansible":[85039,410,252,736,877,657,250,39],"./ansible.js":[85039,410,252,736,877,657,250,39],"./application_services":[62997,410,436,997],"./application_services.js":[62997,410,436,997],"./openshift":[57416,410,252,736,877,657,250,436,416],"./openshift.js":[57416,410,252,736,877,657,250,436,416],"./rhel":[54250,410,252,736,877,657,250],"./rhel.js":[54250,410,252,736,877,657,250]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(a)))}a.keys=()=>Object.keys(r),a.id=19289,e.exports=a}}]);
//# sourceMappingURL=../sourcemaps/822.c34fbac0941665b6c30d49649a91a1ee.js.map
(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[463],{15493:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>H});var n=s(28416),a=s.n(n),i=s(62012),l=s(79332),r=s(65353),c=s(5964),o=s(75587),m=s(73699),p=s(41435),d=s(38296),u=s(62472);const g=e=>{var{id:t="",children:s=null,className:a="",isOpen:i=!1,parentRef:l=null,getMenuRef:b=null,isDisabled:h=!1,isPlain:f=!1,isText:v=!1,toggleVariant:E="default",isActive:A=!1,onToggle:y=((e,t)=>{}),icon:_=null,toggleIndicator:O=c.default,splitButtonItems:k,splitButtonVariant:N="checkbox","aria-haspopup":S,ouiaId:I,ouiaSafe:T,ref:U}=e,Z=(0,r.__rest)(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isText","toggleVariant","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const P=(0,u.useOUIAProps)(g.displayName,I,T),w=n.createElement(p.Dl.Consumer,null,(({toggleTextClass:e,toggleIndicatorClass:r,toggleIconClass:c})=>n.createElement(o.Z,Object.assign({},Z,{id:t,className:a,isOpen:i,parentRef:l,getMenuRef:b,isActive:A,isDisabled:h,isPlain:f,isText:v,toggleVariant:E,onToggle:y,"aria-haspopup":S},P,k&&{isSplitButton:!0,"aria-label":Z["aria-label"]||"Select"}),_&&n.createElement("span",{className:(0,d.css)(c)},_),s&&n.createElement("span",{className:O&&(0,d.css)(e)},s),O&&n.createElement("span",{className:(0,d.css)(!k&&r)},n.createElement(O,null)))));return k?n.createElement("div",{className:(0,d.css)(m.Z.dropdownToggle,m.Z.modifiers.splitButton,"action"===N&&m.Z.modifiers.action,"primary"===E&&"action"===N&&m.Z.modifiers.primary,"secondary"===E&&"action"===N&&m.Z.modifiers.secondary,h&&m.Z.modifiers.disabled)},k,w):w};g.displayName="DropdownToggle";var b=s(85044),h=s(39173),f=s(55140),v=s(64380),E=s(15950),A=s(25387),y=s(45697),_=s.n(y),O=s(2550),k=s(78173),N=s(50247);const S=({isOrgAdmin:e,isUserAccessAdmin:t})=>{const s=(0,A.YB)(),n=s.formatMessage(O.Z[e?"orgAdministrator":"userAccessAdmin"]),i=a().createElement("span",null,s.formatMessage(O.Z[e?"orgAdminHint":"userAccessAdminHint"]));return e||t?a().createElement(N.Tooltip,{position:N.TooltipPosition.right,content:i},a().createElement(k.Label,{color:"purple"}," ",n," ")):a().createElement(a().Fragment,null)};S.propTypes={isOrgAdmin:_().bool,isUserAccessAdmin:_().bool};const I=S;var T=s(86601);const U=[{entitlement:"application_services",title:"Application Services",apps:{"Streams for Apache Kafka (beta)":"/","API Management (beta)":"/","Data Science (private beta)":"/"}},{entitlement:"openshift",title:"OpenShift",apps:{clusters:"/",advisor:"/insights/advisor",subscriptions:"/subscriptions","cost management":"/cost-management"},appsIds:["cost-management","subscriptions","ocp-advisor","ocm"]},{entitlement:"rhel",title:"Red Hat Enterprise Linux",apps:{advisor:"/advisor",compliance:"/compliance",drift:"/drift","image builder":"/image-builder",patch:"/patch",vulnerability:"/vulnerability",policies:"/policies",remediations:"/remediations",subscriptions:"/subscriptions",repositories:"/content",provisioning:"/provisioning"},appsIds:["dashboard","patch","advisor","drift","vulnerability","policies","compliance","inventory","notifications","image-builder","remediations","subscriptions","content-sources","provisioning"]},{entitlement:"ansible",title:"Ansible Automation Platform",apps:{"automation hub":"/automation-hub","automation services catalog":"/catalog",insights:"/automation-analytics"},appsIds:["catalog","approval","automation-analytics","automation-hub"]}];var Z=s(9545),P=s(23539),w=s(72232),j=s(94184),C=s.n(j),L=s(79222),M=s(88094);const x=(...e)=>{const{search:t}=(0,i.useLocation)(),s=new URLSearchParams(t);return e.reduce(((e,t)=>({...e,[t]:s.get(t)})),{})},B=({header:e,entitlements:t,isDisabled:s})=>{const{bundle:n}=x("bundle");return a().createElement(a().Fragment,null,e&&a().createElement(w.Title,{headingLevel:"h3",size:"xl"},e),a().createElement(P.Stack,{className:C()({"pf-v5-u-mt-lg":!e}),hasGutter:!0},t&&U?.map((e=>{const l=t.find((([t])=>e.entitlement===t)),r=e.entitlement;return l?a().createElement(P.StackItem,{key:r,className:"rbac-c-mua-cardWrapper"},a().createElement(i.NavLink,{"aria-label":"card-link",className:C()("rbac-c-mua-bundles__cardlink",{"pf-v5-u-background-color-disabled-color-300":s}),to:{pathname:"",search:`bundle=${r}`}},a().createElement(M.Card,{key:e.title,isFlat:s||r!==n,isSelectable:!s,isSelected:!s&&r===n,className:C()({"pf-v5-u-background-color-disabled-color-300":s})},a().createElement(M.CardTitle,{className:"pf-v5-u-font-weight-light"}," ",e.title),a().createElement(M.CardBody,null,a().createElement(L.List,{className:"pf-v5-u-color-400 pf-v5-u-font-size-sm rbac-c-mua-bundles__card--applist",isPlain:!0},Object.entries(e.apps||{}).map((([e])=>a().createElement(L.ListItem,{key:e}," ",e," ")))))))):null}))))};B.propTypes={header:_().string,entitlements:_().array,isDisabled:_().bool};const D=B;var R=s(75614);const F=()=>n.Fragment,V=()=>{const{bundle:e}=x("bundle"),t=(e=>{const{pathname:t}=(0,i.useLocation)(),s=(0,i.useNavigate)();return"string"==typeof e&&0!==e.length&&["application_services","openshift","rhel","ansible"].includes(e)?U.find((({entitlement:t})=>t===e))?.appsIds||[]:(s({to:t,search:`bundle=${e=R.Jr}`},{replace:!0}),[])})(e),[l,r]=(0,n.useState)({});(0,n.useEffect)((()=>{Object.prototype.hasOwnProperty.call(l,e)||s(19289)(`./${e}`).then((t=>r((s=>({...s,[e]:t.default}))))).catch(console.log)}),[e]);const c=l[e]||F;return a().createElement(c,{key:e,apps:t})};var G=s(65655);const $=({entitlements:e,isOrgAdmin:t,isUserAccessAdmin:s})=>{const n=(0,A.YB)(),i=Object.entries(e).filter((([e,{is_entitled:t}])=>t&&"application_services"!==e)),{bundle:l}=x("bundle"),r=t||s;return a().createElement(G.Z.Provider,{value:r},a().createElement(Z.Grid,null,a().createElement(Z.GridItem,{className:"pf-m-3-col-on-md rbac-l-myUserAccess-section__cards rbac-m-hide-on-sm"},a().createElement(P.Stack,null,a().createElement(P.StackItem,{"data-testid":"entitle-section",className:"rbac-l-myUserAccess-section__cards--entitled"},a().createElement(D,{entitlements:i})))),a().createElement(Z.GridItem,{className:"pf-m-9-col-on-md rbac-l-myUserAccess-section__table"},"application_services"!==l&&a().createElement(w.Title,{headingLevel:"h3",size:"xl"},n.formatMessage(r?O.Z.yourRoles:O.Z.yourPermissions,{name:U.find((({entitlement:e})=>e===l))?.title})),a().createElement(V,null))))};$.propTypes={entitlements:_().object,isOrgAdmin:_().bool,isUserAccessAdmin:_().bool};const z=$,H=()=>{const e=(0,A.YB)(),t=(0,f.Z)(),[s,r]=(0,n.useState)({}),[{bundle:c},o]=(0,i.useSearchParams)(),[m,p]=(0,n.useState)(c),{userAccessAdministrator:d}=(0,n.useContext)(T.Z);(0,n.useEffect)((()=>{t.auth.getUser().then((({identity:e,entitlements:t})=>r({entitlements:t,isOrgAdmin:e?.user?.is_org_admin}))),!c&&o({bundle:R.Jr})}),[]);const u={...s.entitlements,application_services:{is_entitled:!0,is_trial:!1}},y=Object.entries(u).filter((([,{is_entitled:e}])=>e)),[_,k]=(0,n.useState)(!1);return a().createElement(a().Fragment,null,Object.prototype.hasOwnProperty.call(s,"entitlements")&&(Object.prototype.hasOwnProperty.call(s,"isOrgAdmin")||d)?a().createElement(a().Fragment,null,a().createElement(h.Z,{className:"rbac-p-myUserAccess--title sticky",title:a().createElement(a().Fragment,null,a().createElement("span",null," ",e.formatMessage(O.Z.myUserAccess)," "),a().createElement(I,{isOrgAdmin:s.isOrgAdmin,isUserAccessAdmin:d}))}),a().createElement(v.Text,{component:"p",className:"rbac-p-myUserAccess--subtitle"},e.formatMessage(O.Z.selectAppsToViewPermissions)),y&&a().createElement("div",{className:"rbac-p-myUserAccess--dropdown sticky"},a().createElement(l.L,{ouiaId:"mua-bundle-dropdown",toggle:a().createElement(g,{onToggle:()=>k(!_),id:"mua-bundle-dropdown"},m||e.formatMessage(O.Z.chooseSubscriptionEllipsis)),dropdownItems:U.map((e=>a().createElement(i.NavLink,{key:e.entitlement,to:{pathname:"",search:`bundle=${e.entitlement}`}},a().createElement(b.h,{onClick:()=>{p(e.title),k(!1)},component:"button"},e.title)))),isOpen:_})),a().createElement("section",null,a().createElement(z,{entitlements:u,isOrgAdmin:s.isOrgAdmin,isUserAccessAdmin:d}))):a().createElement(E.Spinner,null))}},65655:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});const n=(0,s(28416).createContext)(!1)},19289:(e,t,s)=>{var n={"./MUABundles":[51796,1796],"./MUABundles.scss":[51796,1796],"./__mocks__/rhel":[9116,9116],"./__mocks__/rhel.js":[9116,9116],"./ansible":[47341,2372,2562,8718,8971,9389,4444,5376,8826,7440,4229,9366,1621,5600],"./ansible.js":[47341,2372,2562,8718,8971,9389,4444,5376,8826,7440,4229,9366,1621,5600],"./application_services":[60989,5376,989],"./application_services.js":[60989,5376,989],"./openshift":[93474,2372,2562,8718,8971,9389,4444,5376,8826,7440,4229,9366,1621,4225],"./openshift.js":[93474,2372,2562,8718,8971,9389,4444,5376,8826,7440,4229,9366,1621,4225],"./rhel":[93312,2372,2562,8718,8971,9389,4444,5376,8826,7440,4229,9366,1621,459],"./rhel.js":[93312,2372,2562,8718,8971,9389,4444,5376,8826,7440,4229,9366,1621,459]};function a(e){if(!s.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(1).map(s.e)).then((()=>s(a)))}a.keys=()=>Object.keys(n),a.id=19289,e.exports=a},30187:()=>{}}]);
//# sourceMappingURL=../sourcemaps/463.9a21d42979b4e3d5318ea0cebd860b38.js.map
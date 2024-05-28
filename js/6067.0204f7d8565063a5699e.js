(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[6067],{55218:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(28416),a=n.n(o),r=n(80236),l=n(47173),i=n(93149);const c=e=>{var{isOpen:t,onConfirm:n,onClose:c,children:s,confirmButtonLabel:d="Confirm",cancelButtonLabel:u="Cancel",variant:m=r.v.small,titleIconVariant:p="warning",withCheckbox:f=!1,checkboxLabel:b="I understand that this action cannot be undone",confirmButtonVariant:h=l.Wu.primary,ouiaId:g="WarningModal"}=e,x=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[v,B]=(0,o.useState)(!1);return a().createElement(r.u,Object.assign({variant:m,isOpen:t,onClose:c,onEscapePress:c,titleIconVariant:p,actions:[a().createElement(l.zx,{ouiaId:`${g}-confirm-button`,key:"confirm",variant:h,onClick:()=>{null==n||n(),B(!1)},isDisabled:f&&!v},d),a().createElement(l.zx,{ouiaId:`${g}-cancel-button`,key:"cancel",variant:l.Wu.link,onClick:c},u)],ouiaId:g},x),s,f?a().createElement(i.X,{isChecked:v,onChange:(e,t)=>B(t),label:b,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${g}-confirm-checkbox`}):null)}},19993:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o}),n(70347);const o={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},62702:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o}),n(25238);const o={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},66042:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o}),n(87234);const o={bullseye:"pf-v5-l-bullseye"}},84414:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(62012),a=n(64756);const r=e=>{const t=(0,o.useNavigate)();return(n,o)=>t((0,a.n)(n,e),o)}},55781:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>B});var o=n(28416),a=n.n(o),r=n(45697),l=n.n(r),i=n(86706),c=n(62012),s=n(25387),d=n(55218),u=n(64380),m=n(31055),p=n(83215),f=n(13563),b=n(19443),h=n(76181),g=n(84414),x=n(2550);const v=({cancelRoute:e,submitRoute:t=e,afterSubmit:n,isLoading:r})=>{const l=(0,s.YB)(),{roleId:v}=(0,c.useParams)(),B=v.split(","),k=(0,i.useSelector)((e=>1===B.length?(0,h.B)(e,B[0]):B.length)),[_,y]=(0,o.useState)(k),C=(0,i.useDispatch)(),O=(0,g.Z)();return(0,o.useEffect)((()=>{B&&k?y(k):B&&1===B.length&&(0,b.fp)(B[0]).then((e=>y(e.display_name))).catch((e=>C((0,p.wN)({variant:"danger",title:"Could not get role",description:e?.errors?.[0]?.detail}))))}),[k,B]),_?a().createElement(d.Z,{withCheckbox:!0,isOpen:!r,"aria-label":"delete-role",title:l.formatMessage(x.Z.deleteRoleQuestion),onClose:()=>O(e,{replace:!0}),onConfirm:()=>{Promise.all(B.map((e=>C((0,f.l5)(e))))).then((()=>n())),O(t)},confirmButtonLabel:l.formatMessage(x.Z.deleteRole),confirmButtonVariant:m.ButtonVariant.danger},a().createElement(u.TextContent,null,a().createElement(u.Text,{component:u.TextVariants.p},a().createElement(s._H,{...x.Z.roleWilBeRemovedWithPermissions,values:{strong:e=>a().createElement("strong",null,e),name:_,count:B.length}})))):null};v.propTypes={cancelRoute:l().oneOfType([l().string,l().shape({pathname:l().string.isRequired,search:l().string,hash:l().string})]).isRequired,submitRoute:l().oneOfType([l().string,l().shape({pathname:l().string.isRequired,search:l().string,hash:l().string})]),afterSubmit:l().func.isRequired,isLoading:l().bool.isRequired};const B=v},76181:(e,t,n)=>{"use strict";n.d(t,{B:()=>a,z:()=>o});const o=(e,t)=>{const{roleReducer:{roles:n={data:[]},selectedRole:o}}=e;return o?.uuid===t?o:n.data.find((({uuid:e})=>e===t))},a=(e,t)=>o(e,t)?.display_name},70347:()=>{},25238:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6067.0df61f6f4d0c6729ffccb9d891d9f73f.js.map
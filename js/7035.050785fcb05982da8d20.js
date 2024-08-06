(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[7035],{41939:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var o=n(44914),a=n.n(o),r=n(16165),i=n(72583),l=n(83873);const c=e=>{var{isOpen:t,onConfirm:n,onClose:c,children:s,confirmButtonLabel:d="Confirm",cancelButtonLabel:m="Cancel",variant:u=r.d.small,titleIconVariant:p="warning",withCheckbox:f=!1,checkboxLabel:b="I understand that this action cannot be undone",confirmButtonVariant:h=i.Ak.primary,ouiaId:g="WarningModal"}=e,x=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[v,k]=(0,o.useState)(!1);return a().createElement(r.a,Object.assign({variant:u,isOpen:t,onClose:c,onEscapePress:c,titleIconVariant:p,actions:[a().createElement(i.$n,{ouiaId:`${g}-confirm-button`,key:"confirm",variant:h,onClick:()=>{null==n||n(),k(!1)},isDisabled:f&&!v},d),a().createElement(i.$n,{ouiaId:`${g}-cancel-button`,key:"cancel",variant:i.Ak.link,onClick:c},m)],ouiaId:g},x),s,f?a().createElement(l.S,{isChecked:v,onChange:(e,t)=>k(t),label:b,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${g}-confirm-checkbox`}):null)}},61354:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o}),n(95067);const o={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},81539:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o}),n(26078);const o={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},32069:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o}),n(2580);const o={bullseye:"pf-v5-l-bullseye"}},44419:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var o=n(49634),a=n(58471);const r=e=>{const t=(0,o.useNavigate)();return(n,o)=>t((0,a.o)(n,e),o)}},98374:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var o=n(44914),a=n.n(o),r=n(5556),i=n.n(r),l=n(69733),c=n(49634),s=n(6442),d=n(58065),m=n(41939),u=n(40748),p=n(79994),f=n(11830),b=n(8582),h=n(31237),g=n(75242),x=n(44419),v=n(40335);const k=({cancelRoute:e,submitRoute:t=e,afterSubmit:n,isLoading:r})=>{const i=(0,s.A)(),{roleId:k}=(0,c.useParams)(),C=k.split(","),_=(0,l.useSelector)((e=>1===C.length?(0,g.h)(e,C[0]):C.length)),[y,B]=(0,o.useState)(_),O=(0,l.useDispatch)(),R=(0,x.A)();return(0,o.useEffect)((()=>{C&&_?B(_):C&&1===C.length&&(0,h.rM)(C[0]).then((e=>B(e.display_name))).catch((e=>O((0,f.z8)({variant:"danger",title:"Could not get role",description:e?.errors?.[0]?.detail}))))}),[_,C]),y?a().createElement(m.A,{withCheckbox:!0,isOpen:!r,"aria-label":"delete-role",title:i.formatMessage(v.A.deleteRoleQuestion),onClose:()=>R(e,{replace:!0}),onConfirm:()=>{Promise.all(C.map((e=>O((0,b.Tj)(e))))).then((()=>n())),R(t)},confirmButtonLabel:i.formatMessage(v.A.deleteRole),confirmButtonVariant:p.ButtonVariant.danger},a().createElement(u.TextContent,null,a().createElement(u.Text,{component:u.TextVariants.p},a().createElement(d.A,{...v.A.roleWilBeRemovedWithPermissions,values:{strong:e=>a().createElement("strong",null,e),name:y,count:C.length}})))):null};k.propTypes={cancelRoute:i().oneOfType([i().string,i().shape({pathname:i().string.isRequired,search:i().string,hash:i().string})]).isRequired,submitRoute:i().oneOfType([i().string,i().shape({pathname:i().string.isRequired,search:i().string,hash:i().string})]),afterSubmit:i().func.isRequired,isLoading:i().bool.isRequired};const C=k},75242:(e,t,n)=>{"use strict";n.d(t,{C:()=>o,h:()=>a});const o=(e,t)=>{const{roleReducer:{roles:n={data:[]},selectedRole:o}}=e;return o?.uuid===t?o:n.data.find((({uuid:e})=>e===t))},a=(e,t)=>o(e,t)?.display_name},95067:()=>{},26078:()=>{},2580:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7035.da6f44d9163c1894afe0e3de44a593e6.js.map
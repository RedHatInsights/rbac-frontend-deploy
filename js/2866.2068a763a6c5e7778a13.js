(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2866],{41939:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});var n=o(44914),a=o.n(n),l=o(16165),r=o(72583),i=o(83873);const c=e=>{var{isOpen:t,onConfirm:o,onClose:c,children:s,confirmButtonLabel:u="Confirm",cancelButtonLabel:m="Cancel",variant:d=l.d.small,titleIconVariant:p="warning",withCheckbox:f=!1,checkboxLabel:b="I understand that this action cannot be undone",confirmButtonVariant:h=r.Ak.primary,ouiaId:g="WarningModal"}=e,v=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]])}return o}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[x,k]=(0,n.useState)(!1);return a().createElement(l.a,Object.assign({variant:d,isOpen:t,onClose:c,onEscapePress:c,titleIconVariant:p,actions:[a().createElement(r.$n,{ouiaId:`${g}-confirm-button`,key:"confirm",variant:h,onClick:()=>{null==o||o(),k(!1)},isDisabled:f&&!x},u),a().createElement(r.$n,{ouiaId:`${g}-cancel-button`,key:"cancel",variant:r.Ak.link,onClick:c},m)],ouiaId:g},v),s,f?a().createElement(i.S,{isChecked:x,onChange:(e,t)=>k(t),label:b,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${g}-confirm-checkbox`}):null)}},61354:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n}),o(95067);const n={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},81539:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n}),o(26078);const n={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},32069:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n}),o(2580);const n={bullseye:"pf-v5-l-bullseye"}},44419:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var n=o(49634),a=o(58471);const l=e=>{const t=(0,n.useNavigate)();return(o,n)=>t((0,a.o)(o,e),n)}},62360:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>x});var n=o(44914),a=o.n(n),l=o(5556),r=o.n(l),i=o(49634),c=o(6442),s=o(58065),u=o(69733),m=o(79994),d=o(40748),p=o(41939),f=o(99843),b=o(21996),h=o(44419),g=o(40335);const v=({postMethod:e,pagination:t,cancelRoute:o,submitRoute:l=o})=>{const r=(0,c.A)(),v=(0,u.useDispatch)(),x=(0,h.A)(),{groupId:k}=(0,i.useParams)(),B=k.split(","),C=B.length>1,{group:_,isLoading:y}=(0,u.useSelector)((({groupReducer:{selectedGroup:e}})=>({group:e,isLoading:(k||1===B.length)&&!e.loaded})),u.shallowEqual);return(0,n.useEffect)((()=>{1===B.length&&v((0,f.Ui)(B[0]))}),[]),a().createElement(p.A,{isOpen:!0,withCheckbox:!0,title:r.formatMessage(C?g.A.deleteGroupsQuestion:g.A.deleteGroupQuestion),checkboxLabel:r.formatMessage(g.A.understandActionIrreversible),confirmButtonLabel:r.formatMessage(C?g.A.deleteGroups:g.A.deleteGroup),confirmButtonVariant:m.ButtonVariant.danger,onClose:()=>x(o),onConfirm:()=>{v((0,f.rv)(B)).then((()=>e(B,{limit:t?.limit}))).then(x(l))}},a().createElement(d.TextContent,null,C?a().createElement(d.Text,null,a().createElement(s.A,{...g.A.deletingGroupsRemovesRoles,values:{b:e=>a().createElement("b",null,e),count:B.length}})):y?a().createElement(b.RH,null):a().createElement(d.Text,null,a().createElement(s.A,{...g.A.deletingGroupRemovesRoles,values:{b:e=>a().createElement("b",null,e),name:_.name}}))))};v.propTypes={postMethod:r().func,pagination:r().shape({limit:r().number.isRequired}).isRequired,filters:r().object,cancelRoute:r().oneOfType([r().string,r().shape({pathname:r().string.isRequired,search:r().string,hash:r().string})]),submitRoute:r().oneOfType([r().string,r().shape({pathname:r().string.isRequired,search:r().string,hash:r().string})])};const x=v},95067:()=>{},26078:()=>{},2580:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2866.96097a04adb21c584e4d04368bb44b89.js.map
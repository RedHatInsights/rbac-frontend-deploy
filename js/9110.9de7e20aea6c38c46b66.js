"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9110],{34391:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(28416),c=n.n(a),o=n(25387),l=n(45697),r=n.n(l),s=n(2550),i=n(70214),u=n.n(i),m=n(31055),d=n(94269),b=n(94229),p=n(57043),h=n(23539),f=n(64380);const k=({title:e,text:t,onClose:n,onSubmit:l,isOpen:r,confirmButtonLabel:i,withCheckbox:k})=>{const C=(0,o.YB)(),[g,v]=(0,a.useState)(!1);return c().createElement(b.Modal,{className:"rbac",title:c().createElement("div",null,c().createElement(u(),{className:"ins-m-alert rbac-c__delete-icon"})," ",e),isOpen:r,variant:b.ModalVariant.small,onClose:n,actions:[c().createElement(m.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:k&&!g,variant:"danger",onClick:l},i),c().createElement(m.Button,{key:"cancel",ouiaId:"secondary-cancel-button",variant:"link",onClick:n},C.formatMessage(s.Z.cancel))]},c().createElement(p.Split,{hasGutter:!0},c().createElement(p.SplitItem,{isFilled:!0},c().createElement(h.Stack,{hasGutter:!0},c().createElement(f.TextContent,null,t)))),k?c().createElement(d.Checkbox,{isChecked:g,onChange:()=>v(!g),label:C.formatMessage(s.Z.confirmCheckMessage),id:"remove-modal-check",className:"pf-v5-u-mt-lg"}):null)};k.propTypes={text:r().any,title:r().string,confirmButtonLabel:r().string,onSubmit:r().func,onClose:r().func,isOpen:r().bool,withCheckbox:r().bool},k.defaultProps={withCheckbox:!1};const C=k},29110:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(28416),c=n.n(a),o=n(86706),l=n(25387),r=n(62012),s=n(77044),i=n(34391),u=n(2550);const m=({postMethod:e})=>{const t=(0,o.useSelector)((({groupReducer:{selectedGroup:e}})=>e)),[n]=(0,r.useSearchParams)(),m=(0,o.useSelector)((({groupReducer:{selectedGroup:e}})=>(e?.serviceAccounts?.data||[]).filter((({name:e})=>n.getAll("name").includes(e))))),d=(0,a.useMemo)((()=>n.getAll("name").length),[n]),b=(0,o.useDispatch)(),p=(0,l.YB)();return c().createElement(i.Z,{isOpen:!0,title:p.formatMessage(u.Z.removeGroupServiceAccountsQuestion,{count:d}),text:c().createElement(l._H,{...u.Z.removeServiceAccountsText,values:{b:e=>c().createElement("b",null,e),count:d,name:m[0]?.name,group:t.name}}),confirmButtonLabel:p.formatMessage(u.Z.remove),withCheckbox:!0,onClose:e,onSubmit:()=>{const n=(0,s.WK)(t.uuid,m);b(n),e(n.payload)}})}}}]);
//# sourceMappingURL=../sourcemaps/9110.df11583a504fc04cf8df7f06518324ad.js.map
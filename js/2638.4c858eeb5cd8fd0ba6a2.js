(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2638,5467],{55218:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var s=a(28416),n=a.n(s),r=a(80236),o=a(47173);const c=e=>{var{isOpen:t,onConfirm:a,onClose:s,children:c,confirmButtonLabel:l="Confirm",cancelButtonLabel:i="Cancel",variant:u=r.v.small,titleIconVariant:d="warning"}=e,p=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(a[s[n]]=e[s[n]])}return a}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant"]);return n().createElement(r.u,Object.assign({variant:u,isOpen:t,onClose:s,onEscapePress:s,titleIconVariant:d,actions:[n().createElement(o.zx,{ouiaId:"primary-confirm-button",key:"confirm",variant:o.Wu.primary,onClick:a},l),n().createElement(o.zx,{ouiaId:"secondary-cancel-button",key:"cancel",variant:o.Wu.link,onClick:s},i)]},p),c)}},99578:(e,t,a)=>{"use strict";a.d(t,{i:()=>c});var s=a(65353),n=a(44291),r=a(28416),o=a.n(r);const c=(0,r.forwardRef)((function(e,t){var{active:a=!0,paused:c=!1,focusTrapOptions:l={},preventScrollOnDeactivate:i=!1}=e,u=(0,s.__rest)(e,["active","paused","focusTrapOptions","preventScrollOnDeactivate"]);const d=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>d.current));const p=(0,r.useRef)(null);(0,r.useEffect)((()=>{const e=(0,n.createFocusTrap)(d.current,Object.assign(Object.assign({},l),{returnFocusOnDeactivate:!1}));return p.current=e,()=>{e.deactivate()}}),[]),(0,r.useEffect)((()=>{const e=p.current;a?null==e||e.activate():null==e||e.deactivate()}),[a]),(0,r.useEffect)((()=>{const e=p.current;c?null==e||e.pause():null==e||e.unpause()}),[c]);const m=(0,r.useRef)("undefined"!=typeof document?document.activeElement:null);return function(e){const t=(0,r.useRef)(e);t.current=e,(0,r.useEffect)((()=>()=>{t.current()}),[])}((()=>{!1!==l.returnFocusOnDeactivate&&m.current instanceof HTMLElement&&m.current.focus({preventScroll:i})})),o().createElement("div",Object.assign({ref:d},u))}));c.displayName="FocusTrap"},24307:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>s});const s=(0,a(40400).I)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},84414:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s=a(62012),n=a(64756);const r=e=>{const t=(0,s.useNavigate)();return(a,s)=>t((0,n.n)(a,e),s)}},19862:(e,t,a)=>{"use strict";a.d(t,{R:()=>l,A:()=>c});var s=a(71079);const n=(0,a(75465).i$)();async function r(e){return await n.getResourceTypes(e)}async function o(e){return await n.getResource(e)}const c=e=>({type:s.s6,payload:r(e)}),l=e=>({type:s.ZX,payload:o(e)})},10357:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var s=a(28416),n=a.n(s),r=a(45697),o=a.n(r),c=a(76429),l=a(67850),i=a(48880),u=a(74219),d=a(57820),p=a(16396),m=a(4853);const f="modal-form",v=e=>n().createElement(m.l,{...e,id:f}),b=({saveLabel:e,cancelLabel:t})=>{const{onCancel:a}=(0,i.default)();return n().createElement(c.Z,null,(({pristine:s,invalid:r,validating:o,submitting:c})=>n().createElement("div",{className:"pf-v5-c-form"},n().createElement(d.W,{className:"pf-v5-u-mt-0"},n().createElement(p.Button,{ouiaId:"primary-save-button",variant:"primary",form:f,type:"submit",isDisabled:s||o||c||r},e),n().createElement(p.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:a,id:"cancel-modal"},t)))))};b.propTypes={saveLabel:o().node,cancelLabel:o().node},b.defaultProps={saveLabel:"Save",cancelLabel:"Cancel"};const g=({ModalProps:e,saveLabel:t,cancelLabel:a,alert:s,...r})=>n().createElement(u.Modal,{role:"dialog",...e,footer:n().createElement(b,{saveLabel:t,cancelLabel:a})},s?.(),n().createElement(l.ZP,{...r,showFormControls:!1,FormWrapper:v}));g.propTypes={ModalProps:o().object,...b.propTypes};const y=g},73479:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var s=a(28416),n=a.n(s),r=a(45697),o=a.n(r),c=a(16987),l=a(31055),i=a(96486),u=a(48880),d=a(76429),p=a(25387),m=a(2550);const f=({dirtyFieldsSinceLastSubmit:e,submitSucceeded:t,pristine:a})=>{const{onCancel:s}=(0,u.default)(),r=(0,i.isEmpty)(e)||!t&&a,o=(0,p.YB)();return n().createElement(c.ActionGroup,{className:"pf-v5-u-mt-0"},n().createElement(l.Button,{ouiaId:"primary-submit-button",type:"submit",isDisabled:r,variant:"primary"},o.formatMessage(m.Z.save)),n().createElement(l.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:()=>s()},o.formatMessage(m.Z.cancel)))};f.propTypes={dirtyFieldsSinceLastSubmit:o().shape({[o().string]:o().oneOfType([o().string,o().number,o().bool])}),submitSucceeded:o().bool,pristine:o().bool,onCancel:o().func};const v=e=>n().createElement(d.Z,{subscription:{pristine:!0,submitSucceeded:!0,dirtyFieldsSinceLastSubmit:!0}},(t=>n().createElement(f,{...t,...e})));var b=a(67850),g=a(65412),y=a(75747),E=a(51912),R=a(96354);const L=({formTemplateProps:e,...t})=>n().createElement(E.Z,{componentMapper:{[R.Z.TEXT_FIELD]:g.Z,[R.Z.TEXTAREA]:y.Z},FormTemplate:t=>n().createElement(b.ZP,{...e,...t,FormButtons:v}),...t});L.propTypes={formTemplateProps:o().object};const h=L},74517:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>F});var s=a(28416),n=a.n(s),r=a(45697),o=a.n(r),c=a(96354),l=a(73479),i=a(62012),u=a(86706),d=a(13563),p=a(19862),m=a(8340),f=a(55218),v=a(15950),b=a(94229),g=a(74503),y=a(84414),E=a(10357),R=a(5904),L=a(48880),h=a(25387),Z=a(2550);const T=({ModalProps:e,...t})=>{const a=(0,h.YB)(),s=(0,L.default)().getState().values;return n().createElement(E.Z,{...t,ModalProps:{...e,onClose:()=>e.onClose(s)},alert:s["dual-list-select"]?void 0:()=>n().createElement("div",{className:"rbac-m-resource-definitions"},n().createElement(R.Alert,{className:"pf-v5-c-modal__alert",variant:"danger",isInline:!0,title:a.formatMessage(Z.Z.defineAtLeastOneResource)}))})};T.propTypes={ModalProps:o().object};const O=T;var M=a(42348),C=a.n(M);const S={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function P(e,t){if("update"===t.type)return{...e,...t.payload};throw new Error}const B=(e,t,a)=>{const s=(0,h.YB)();return{fields:[{component:c.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:s.formatMessage(Z.Z.resourcesAvailable),rightTitle:s.formatMessage(Z.Z.resourcesDefined),filterOptionsTitle:s.formatMessage(Z.Z.filterByResource),filterValueTitle:s.formatMessage(Z.Z.filterByResource),options:[...t&&e?a:[]],validate:[{type:"validate-resources"}],isSearchable:!0}]}},I={"validate-resources":()=>e=>e&&e.length>0?void 0:"At least one resource must be defined for this permission"},w=({cancelRoute:e})=>{const t=(0,h.YB)(),{roleId:a,permissionId:r}=(0,i.useParams)(),o=(0,y.Z)(),c=(0,u.useDispatch)(),[E,R]=(0,s.useReducer)(P,S),{definedResources:L,role:T}=(0,u.useSelector)((e=>({role:e.roleReducer.selectedRole,definedResources:e.roleReducer.selectedRole?.access?C()(e.roleReducer.selectedRole.access.filter((e=>e.permission===r)).map((e=>e.resourceDefinitions.map((e=>e.attributeFilter.value))))):[],isRecordLoading:e.roleReducer.isRecordLoading})),u.shallowEqual),{resourceTypes:M,isLoading:w,isLoadingResources:F,resources:D}=(0,u.useSelector)((e=>(({costReducer:{resourceTypes:e,isLoading:t,loadingResources:a,resources:s}},n)=>({resourceTypes:e.data,resources:s[n]?{resourcesPath:s[n]}:s,isLoading:t,isLoadingResources:a>0}))(e,E.resourcesPath)),u.shallowEqual);(0,s.useEffect)((()=>{c((0,p.A)())}),[r]),(0,s.useEffect)((()=>{if(!w){let e=M.find((e=>e.value===r.split(":")?.[1]))?.path;e&&(R({type:"update",payload:{resourcesPath:e.split("/")[5]}}),c((0,p.R)(e)))}}),[M]);const k=()=>o(e,{replace:!0}),V=e=>{e["dual-list-select"]===L?k():R({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},j=(e=>Object.entries(e).reduce(((e,[t,a])=>[...e,...a.map((e=>({value:e.value,path:t,label:e.value})))]),[]))(D);return n().createElement(n().Fragment,null,n().createElement(f.Z,{title:t.formatMessage(Z.Z.exitEditResourceDefinitions),isOpen:E.cancelWarningVisible,onClose:()=>R({type:"update",payload:{cancelWarningVisible:!1}}),onConfirm:k,"data-testid":"warning-modal",confirmButtonLabel:t.formatMessage(Z.Z.exit),cancelButtonLabel:t.formatMessage(Z.Z.stay)},t.formatMessage(Z.Z.changesWillBeLost)),(w||F)&&E.loadingStateVisible?n().createElement(b.Modal,{variant:b.ModalVariant.large,className:"rbac-m-resource-definitions",isOpen:!0,title:t.formatMessage(Z.Z.editResourceDefinitions),onClose:()=>{R({type:"update",payload:{loadingStateVisible:!1}}),k()}},n().createElement(g.Bullseye,null,n().createElement(v.Spinner,null))):n().createElement(l.Z,{schema:B(D,E.resourcesPath,j),componentMapper:m.ZP,initialValues:{"dual-list-select":E.changedResources||L||[]},onSubmit:t=>{R({type:"update",payload:{changedResources:t["dual-list-select"]}});const s={permission:r,resourceDefinitions:[{attributeFilter:{key:`cost-management.${r.split(":")?.[1]}`,operation:1===t["dual-list-select"].length?"equal":"in",value:1===t["dual-list-select"].length?t["dual-list-select"][0]:t["dual-list-select"]}}]};c((0,d.ul)(a,{...T,access:[...T.access.filter((e=>e.permission!==r)),s]}),!0).then((()=>{c((0,d.fp)(a)),o(e)}))},onCancel:e=>V(e),validatorMapper:I,FormTemplate:e=>n().createElement(O,{...e,ModalProps:{onClose:V,isOpen:!E.cancelWarningVisible,variant:"large",title:t.formatMessage(Z.Z.editResourceDefinitions),description:t.formatMessage(Z.Z.editPermissionsUsingArrows)}})}))};w.propTypes={cancelRoute:o().string.isRequired};const F=w},82472:()=>{},97890:()=>{},17657:()=>{},22972:()=>{},43389:()=>{},45467:()=>{},65088:()=>{},70347:()=>{},78752:()=>{},25238:()=>{},49854:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2638.181ee4d7768d67251b07a001ed25b3c0.js.map
(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[3812],{41939:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var n=a(44914),s=a.n(n),r=a(16165),o=a(72583),i=a(83873);const l=e=>{var{isOpen:t,onConfirm:a,onClose:l,children:c,confirmButtonLabel:u="Confirm",cancelButtonLabel:d="Cancel",variant:p=r.d.small,titleIconVariant:m="warning",withCheckbox:f=!1,checkboxLabel:b="I understand that this action cannot be undone",confirmButtonVariant:y=o.Ak.primary,ouiaId:g="WarningModal"}=e,v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]])}return a}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[h,A]=(0,n.useState)(!1);return s().createElement(r.a,Object.assign({variant:p,isOpen:t,onClose:l,onEscapePress:l,titleIconVariant:m,actions:[s().createElement(o.$n,{ouiaId:`${g}-confirm-button`,key:"confirm",variant:y,onClick:()=>{null==a||a(),A(!1)},isDisabled:f&&!h},u),s().createElement(o.$n,{ouiaId:`${g}-cancel-button`,key:"cancel",variant:o.Ak.link,onClick:l},d)],ouiaId:g},v),c,f?s().createElement(i.S,{isChecked:h,onChange:(e,t)=>A(t),label:b,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${g}-confirm-checkbox`}):null)}},96887:(e,t,a)=>{"use strict";a.d(t,{Df:()=>l,Tb:()=>c,sL:()=>u});var n=a(35970),s=a.n(n),r=a(19872);const o=(0,r.E0)(),i=(0,r.fo)(),l=async({name:e,perPage:t,page:a,options:n}={})=>await o.apiResourceTypeGetResourceTypeGroupsList(e,t,a,n),c=async e=>await i.apiGroupGetGroupsById(e),u=e=>e?s()(e.map((e=>e.attributeFilter.value))):[]},44419:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var n=a(49634),s=a(58471);const r=e=>{const t=(0,n.useNavigate)();return(a,n)=>t((0,s.o)(a,e),n)}},41912:(e,t,a)=>{"use strict";a.d(t,{$:()=>l,D:()=>i});var n=a(71966);const s=(0,a(19872)._F)();async function r(e){return await s.getResourceTypes(e)}async function o(e){return await s.getResource(e)}const i=e=>({type:n.rh,payload:r(e)}),l=e=>({type:n.iq,payload:o(e)})},2224:(e,t,a)=>{"use strict";a.d(t,{N:()=>r,h:()=>o});var n=a(71966),s=a(96887);const r=(e,t)=>({type:n.fp,meta:{permissions:e,config:t},payload:s.Df(t)}),o=e=>({type:n.K8,meta:{groupsIds:e},payload:s.Tb(e.filter((e=>e?.length>0)))})},57853:(e,t,a)=>{"use strict";a.d(t,{A:()=>v});var n=a(44914),s=a.n(n),r=a(5556),o=a.n(r),i=a(36782),l=a(63537),c=a(81558),u=a(22568),d=a(88484),p=a(27451),m=a(6871);const f="modal-form",b=e=>s().createElement(m.l,{...e,id:f}),y=({saveLabel:e,cancelLabel:t})=>{const{onCancel:a}=(0,c.default)();return s().createElement(i.A,null,(({pristine:n,invalid:r,validating:o,submitting:i})=>s().createElement("div",{className:"pf-v5-c-form"},s().createElement(d.K,{className:"pf-v5-u-mt-0"},s().createElement(p.Button,{ouiaId:"primary-save-button",variant:"primary",form:f,type:"submit",isDisabled:n||o||i||r},e),s().createElement(p.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:a,id:"cancel-modal"},t)))))};y.propTypes={saveLabel:o().node,cancelLabel:o().node},y.defaultProps={saveLabel:"Save",cancelLabel:"Cancel"};const g=({ModalProps:e,saveLabel:t,cancelLabel:a,alert:n,...r})=>s().createElement(u.Modal,{role:"dialog",...e,footer:s().createElement(y,{saveLabel:t,cancelLabel:a})},n?.(),s().createElement(l.Ay,{...r,showFormControls:!1,FormWrapper:b}));g.propTypes={ModalProps:o().object,...y.propTypes};const v=g},61047:(e,t,a)=>{"use strict";a.d(t,{A:()=>L});var n=a(44914),s=a.n(n),r=a(5556),o=a.n(r),i=a(13614),l=a(79994),c=a(2543),u=a(81558),d=a(36782),p=a(6442),m=a(40335);const f=({dirtyFieldsSinceLastSubmit:e,submitSucceeded:t,pristine:a})=>{const{onCancel:n}=(0,u.default)(),r=(0,c.isEmpty)(e)||!t&&a,o=(0,p.A)();return s().createElement(i.ActionGroup,{className:"pf-v5-u-mt-0"},s().createElement(l.Button,{ouiaId:"primary-submit-button",type:"submit",isDisabled:r,variant:"primary"},o.formatMessage(m.A.save)),s().createElement(l.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:()=>n()},o.formatMessage(m.A.cancel)))};f.propTypes={dirtyFieldsSinceLastSubmit:o().shape({[o().string]:o().oneOfType([o().string,o().number,o().bool])}),submitSucceeded:o().bool,pristine:o().bool,onCancel:o().func};const b=e=>s().createElement(d.A,{subscription:{pristine:!0,submitSucceeded:!0,dirtyFieldsSinceLastSubmit:!0}},(t=>s().createElement(f,{...t,...e})));var y=a(63537),g=a(55342),v=a(54076),h=a(79371),A=a(57502);const E=({formTemplateProps:e,...t})=>s().createElement(h.A,{componentMapper:{[A.A.TEXT_FIELD]:g.A,[A.A.TEXTAREA]:v.A},FormTemplate:t=>s().createElement(y.Ay,{...e,...t,FormButtons:b}),...t});E.propTypes={formTemplateProps:o().object};const L=E},20463:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var n=a(44914),s=a.n(n),r=a(5556),o=a.n(r),i=a(57502),l=a(61047),c=a(3176),u=a.n(c),d=a(58065),p=a(6442),m=a(49634),f=a(69733),b=a(8582),y=a(41912),g=a(2224),v=a(96887),h=a(42655),A=a(41939),E=a(29068),L=a(20380),R=a(71436),T=a(44419),C=a(57853),S=a(62448),M=a(81558),k=a(40335);const I=({ModalProps:e,...t})=>{const a=(0,p.A)(),n=(0,M.default)().getState().values;return s().createElement(C.A,{...t,ModalProps:{...e,onClose:()=>e.onClose(n)},alert:n["dual-list-select"]?void 0:()=>s().createElement("div",{className:"rbac-m-resource-definitions"},s().createElement(S.Alert,{className:"pf-v5-c-modal__alert",variant:"danger",isInline:!0,title:a.formatMessage(k.A.defineAtLeastOneResource)}))})};I.propTypes={ModalProps:o().object};const O=I;var P=a(85712);const w={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function V(e,t){if("update"===t.type)return{...e,...t.payload};throw new Error}const B=(e,t,a,n)=>{const s=(0,p.A)();return{fields:[{component:i.A.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:s.formatMessage(k.A.resourcesAvailable),rightTitle:s.formatMessage(k.A.resourcesDefined),filterOptionsTitle:s.formatMessage(k.A.filterByResource),filterValueTitle:s.formatMessage(k.A.filterByResource),options:[...(t||n)&&e?a:[]],validate:[{type:"validate-resources"}],isSearchable:!0,...n?{getValueFromNode:e=>e.props["data-value"]}:{}}]}},D={"validate-resources":()=>e=>e&&e.length>0?void 0:"At least one resource must be defined for this permission"},F=({cancelRoute:e})=>{const t=(0,p.A)(),{roleId:a,permissionId:r}=(0,m.useParams)(),o=(0,T.A)(),i=(0,f.useDispatch)(),[c,C]=(0,n.useReducer)(V,w),S=(0,n.useMemo)((()=>(0,P.a)(r)),[r]),{resourceTypes:M,isLoading:I,isLoadingResources:F,resources:j,isLoadingInventory:N,inventoryGroups:x}=(0,f.useSelector)((e=>(({costReducer:{resourceTypes:e,isLoading:t,loadingResources:a,resources:n},inventoryReducer:{resourceTypes:s,isLoading:r}},o)=>({resourceTypes:e.data,resources:n[o]?{resourcesPath:n[o]}:n,isLoading:t,isLoadingResources:a>0,isLoadingInventory:r,inventoryGroups:s}))(e,c.resourcesPath)),f.shallowEqual),{definedResources:G,role:W}=(0,f.useSelector)((e=>({role:e.roleReducer.selectedRole,definedResources:e.roleReducer.selectedRole?.access?u()(e.roleReducer.selectedRole.access.filter((e=>e.permission===r)).map((e=>e.resourceDefinitions.map((e=>{const t=e.attributeFilter.value;return S?Array.isArray(t)?t.map((e=>String(e))):String(t):e.attributeFilter.value}))))):[],isRecordLoading:e.roleReducer.isRecordLoading})),f.shallowEqual);(0,n.useEffect)((()=>{S&&i((0,g.N)([r]))||i((0,y.D)())}),[r]),(0,n.useEffect)((()=>{if(!I){let e=M.find((e=>e.value===r.split(":")?.[1]))?.path;e&&(C({type:"update",payload:{resourcesPath:e.split("/")[5]}}),i((0,y.$)(e)))}}),[M]);const $=()=>o(e,{replace:!0}),_=e=>{e["dual-list-select"]===G?$():C({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},q=((e,t)=>(0,P.a)(t)?[...(0,P.jV)(t)?[s().createElement(d.A,{key:"ungrouped","data-value":"null",...k.A.ungroupedSystems})]:[],...Object.values(e||{}).map((e=>s().createElement("span",{key:e.id,"data-value":e.id},e.name)))]:Object.entries(e).reduce(((e,[t,a])=>[...e,...a.map((e=>({value:e.value,path:t,label:e.value})))]),[]))(S?x[r]:j,r);return s().createElement(s().Fragment,null,s().createElement(A.A,{title:t.formatMessage(k.A.exitEditResourceDefinitions),isOpen:c.cancelWarningVisible,onClose:()=>C({type:"update",payload:{cancelWarningVisible:!1}}),onConfirm:$,"data-testid":"warning-modal",confirmButtonLabel:t.formatMessage(k.A.discard)},t.formatMessage(k.A.changesWillBeLost)),(I||F||N)&&c.loadingStateVisible?s().createElement(L.Modal,{variant:L.ModalVariant.large,className:"rbac-m-resource-definitions",isOpen:!0,title:t.formatMessage(k.A.editResourceDefinitions),onClose:()=>{C({type:"update",payload:{loadingStateVisible:!1}}),$()}},s().createElement(R.Bullseye,null,s().createElement(E.Spinner,null))):s().createElement(l.A,{schema:B(j,c.resourcesPath,q,S),componentMapper:h.Ay,initialValues:{"dual-list-select":c.changedResources||G||[]},onSubmit:t=>{C({type:"update",payload:{changedResources:t["dual-list-select"]}});const n=t["dual-list-select"].map((e=>"null"===e?null:e)),s={permission:r,resourceDefinitions:[{attributeFilter:{key:S?"group.id":`cost-management.${r.split(":")?.[1]}`,operation:1===n.length?"equal":"in",value:1===n.length?n[0]:n}}]};i((0,b.S0)(a,{...W,access:[...W.access.filter((e=>e.permission!==r)),s]}),!0).then((()=>{i((0,b.rM)(a)).then((({value:e})=>{S&&i((0,g.h)((0,v.sL)(e?.access?.find((e=>e.permission===r))?.resourceDefinitions)))})),o(e)}))},onCancel:e=>_(e),validatorMapper:D,FormTemplate:e=>s().createElement(O,{...e,ModalProps:{onClose:_,isOpen:!c.cancelWarningVisible,variant:"large",title:t.formatMessage(k.A.editResourceDefinitions),description:t.formatMessage(k.A.editPermissionsUsingArrows)}})}))};F.propTypes={cancelRoute:o().string.isRequired};const j=F},85712:(e,t,a)=>{"use strict";a.d(t,{Om:()=>i,a:()=>s,jE:()=>o,jV:()=>r});var n=a(40335);const s=e=>e.split(":")[0].includes("inventory"),r=e=>s(e)&&e.split(":")[1].includes("hosts"),o=e=>e.split(":")[0].includes("cost-management"),i=(e,t,a)=>{let s=e.filter(Boolean);return r(t)&&e.includes(null)&&s.unshift(a.formatMessage(n.A.ungroupedSystems)),s.reduce(((e,t)=>[...e,{cells:[t]}]),[])}},25823:()=>{},16369:()=>{},62275:()=>{},89205:()=>{},20681:()=>{},71534:()=>{},95067:()=>{},74895:()=>{},26078:()=>{},2580:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3812.da8818a93b89e3dead16bea8e4235c3f.js.map
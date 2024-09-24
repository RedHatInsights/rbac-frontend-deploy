(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[5205],{55218:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(66029),s=a.n(n),r=a(80236),i=a(47173),o=a(93149);const l=e=>{var{isOpen:t,onConfirm:a,onClose:l,children:c,confirmButtonLabel:u="Confirm",cancelButtonLabel:d="Cancel",variant:m=r.v.small,titleIconVariant:p="warning",withCheckbox:f=!1,checkboxLabel:v="I understand that this action cannot be undone",confirmButtonVariant:g=i.Wu.primary,ouiaId:b="WarningModal"}=e,y=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]])}return a}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[E,h]=(0,n.useState)(!1);return s().createElement(r.u,Object.assign({variant:m,isOpen:t,onClose:l,onEscapePress:l,titleIconVariant:p,actions:[s().createElement(i.zx,{ouiaId:`${b}-confirm-button`,key:"confirm",variant:g,onClick:()=>{null==a||a(),h(!1)},isDisabled:f&&!E},u),s().createElement(i.zx,{ouiaId:`${b}-cancel-button`,key:"cancel",variant:i.Wu.link,onClick:l},d)],ouiaId:b},y),c,f?s().createElement(o.X,{isChecked:E,onChange:(e,t)=>h(t),label:v,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${b}-confirm-checkbox`}):null)}},41448:(e,t,a)=>{"use strict";a.d(t,{b:()=>R,U:()=>T});var n=a(65353),s=a(66029),r=a(38296);a(81754);const i={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var o=a(68778),l=a(43047),c=a(69957),u=a(53688),d=a(34143);const m={success:o.ZP,danger:l.ZP,warning:c.ZP,info:u.ZP,custom:d.ZP},p=e=>{var{variant:t,customIcon:a,className:o=""}=e,l=(0,n.__rest)(e,["variant","customIcon","className"]);const c=m[t];return c?s.createElement("div",Object.assign({},l,{className:(0,r.css)(i.alertIcon,o)}),a||s.createElement(c,null)):null};var f=a(80164),v=a(62472),g=a(21133);const b="--pf-v5-c-alert__title--max-lines";var y=a(35224),E=a(47173),h=a(93174);const L=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:o,isExpanded:l=!1}=e,c=(0,n.__rest)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:u,variantLabel:d}=s.useContext(g.w);return s.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:o,"aria-expanded":l,"aria-label":""===t?`Toggle ${a||d} alert: ${u}`:t},c),s.createElement("span",{className:(0,r.css)(i.alertToggleIcon)},s.createElement(h.default,{"aria-hidden":"true"})))};var T;L.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(T||(T={}));const R=e=>{var{variant:t=T.custom,isInline:a=!1,isPlain:o=!1,isLiveRegion:l=!1,variantLabel:c=`${(0,f.kC)(t)} alert:`,actionClose:u,actionLinks:d,title:m,component:E="h4",children:h="",className:P="",ouiaId:C,ouiaSafe:I=!0,timeout:Z=!1,timeoutAnimation:S=3e3,onTimeout:x=(()=>{}),truncateTitle:M=0,tooltipPosition:k,customIcon:_,isExpandable:N=!1,toggleAriaLabel:w=`${(0,f.kC)(t)} alert details`,onMouseEnter:O=(()=>{}),onMouseLeave:B=(()=>{}),id:A}=e,j=(0,n.__rest)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const D=(0,v.useOUIAProps)(R.displayName,C,I,t),V=s.createElement(s.Fragment,null,s.createElement("span",{className:"pf-v5-screen-reader"},c),m),F=s.useRef(null),W=E,$=s.useRef(),[G,z]=(0,s.useState)(!1);s.useEffect((()=>{if(!F.current||!M)return;F.current.style.setProperty(b,M.toString());const e=F.current&&F.current.offsetHeight<F.current.scrollHeight;G!==e&&z(e)}),[F,M,G]);const[Y,q]=(0,s.useState)(!1),[H,U]=(0,s.useState)(!0),[X,J]=(0,s.useState)(),[K,Q]=(0,s.useState)(),ee=Y&&H&&!X&&!K;s.useEffect((()=>{const e=!0===Z?8e3:Number(Z);if(e>0){const t=setTimeout((()=>q(!0)),e);return()=>clearTimeout(t)}}),[Z]),s.useEffect((()=>{const e=()=>{$.current&&($.current.contains(document.activeElement)?(Q(!0),U(!1)):K&&Q(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[K]),s.useEffect((()=>{if(!1===K||!1===X){const e=setTimeout((()=>U(!0)),S);return()=>clearTimeout(e)}}),[K,X,S]),s.useEffect((()=>{ee&&x()}),[ee,x]);const[te,ae]=(0,s.useState)(!1);if(ee)return null;const ne=s.createElement(W,Object.assign({},G&&{tabIndex:0},{ref:F,className:(0,r.css)(i.alertTitle,M&&i.modifiers.truncate)}),V);return s.createElement("div",Object.assign({ref:$,className:(0,r.css)(i.alert,a&&i.modifiers.inline,o&&i.modifiers.plain,N&&i.modifiers.expandable,te&&i.modifiers.expanded,i.modifiers[t],P)},D,l&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{J(!0),U(!1),O(e)},onMouseLeave:e=>{J(!1),B(e)},id:A},j),N&&s.createElement(g.w.Provider,{value:{title:m,variantLabel:c}},s.createElement("div",{className:(0,r.css)(i.alertToggle)},s.createElement(L,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":w}))),s.createElement(p,{variant:t,customIcon:_}),G?s.createElement(y.u,{content:V,position:k},ne):ne,u&&s.createElement(g.w.Provider,{value:{title:m,variantLabel:c}},s.createElement("div",{className:(0,r.css)(i.alertAction)},u)),h&&(!N||N&&te)&&s.createElement("div",{className:(0,r.css)(i.alertDescription)},h),d&&s.createElement("div",{className:(0,r.css)(i.alertActionGroup)},d))};R.displayName="Alert"},21133:(e,t,a)=>{"use strict";a.d(t,{w:()=>n});const n=a(66029).createContext(null)},52643:(e,t,a)=>{"use strict";a.d(t,{b:()=>o});var n=a(65353),s=a(66029),r=a(38296),i=a(66042);const o=e=>{var{children:t=null,className:a="",component:o="div"}=e,l=(0,n.__rest)(e,["children","className","component"]);const c=o;return s.createElement(c,Object.assign({className:(0,r.css)(i.default.bullseye,a)},l),t)};o.displayName="Bullseye"},29693:(e,t,a)=>{"use strict";a.d(t,{C$:()=>u,pj:()=>c,xk:()=>l});var n=a(85564),s=a.n(n),r=a(75465);const i=(0,r.zX)(),o=(0,r.bD)(),l=async({name:e,perPage:t,page:a,options:n}={})=>await i.apiResourceTypeGetResourceTypeGroupsList(e,t,a,n),c=async e=>await o.apiGroupGetGroupsById(e),u=e=>e?s()(e.map((e=>e.attributeFilter.value))):[]},84414:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(62012),s=a(64756);const r=e=>{const t=(0,n.useNavigate)();return(a,n)=>t((0,s.n)(a,e),n)}},19862:(e,t,a)=>{"use strict";a.d(t,{P:()=>l,b:()=>o});var n=a(71079);const s=(0,a(75465).i$)();async function r(e){return await s.getResourceTypes(e)}async function i(e){return await s.getResource(e)}const o=e=>({type:n.PN,payload:r(e)}),l=e=>({type:n.S9,payload:i(e)})},66254:(e,t,a)=>{"use strict";a.d(t,{M:()=>i,f:()=>r});var n=a(71079),s=a(29693);const r=(e,t)=>({type:n.YS,meta:{permissions:e,config:t},payload:s.xk(t)}),i=e=>({type:n.WV,meta:{groupsIds:e},payload:s.pj(e.filter((e=>e?.length>0)))})},10357:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(66029),s=a.n(n),r=a(45697),i=a.n(r),o=a(76429),l=a(67850),c=a(48880),u=a(74219),d=a(57820),m=a(16396),p=a(4853);const f="modal-form",v=e=>s().createElement(p.l,{...e,id:f}),g=({saveLabel:e,cancelLabel:t})=>{const{onCancel:a}=(0,c.default)();return s().createElement(o.Z,null,(({pristine:n,invalid:r,validating:i,submitting:o})=>s().createElement("div",{className:"pf-v5-c-form"},s().createElement(d.W,{className:"pf-v5-u-mt-0"},s().createElement(m.Button,{ouiaId:"primary-save-button",variant:"primary",form:f,type:"submit",isDisabled:n||i||o||r},e),s().createElement(m.Button,{ouiaId:"secondary-cancel-button",variant:"link",onClick:a,id:"cancel-modal"},t)))))};g.propTypes={saveLabel:i().node,cancelLabel:i().node},g.defaultProps={saveLabel:"Save",cancelLabel:"Cancel"};const b=({ModalProps:e,saveLabel:t,cancelLabel:a,alert:n,...r})=>s().createElement(u.Modal,{role:"dialog",...e,footer:s().createElement(g,{saveLabel:t,cancelLabel:a})},n?.(),s().createElement(l.ZP,{...r,showFormControls:!1,FormWrapper:v}));b.propTypes={ModalProps:i().object,...g.propTypes};const y=b},73479:(e,t,a)=>{"use strict";a.d(t,{Z:()=>T});var n=a(66029),s=a.n(n),r=a(45697),i=a.n(r),o=a(68809),l=a(47173),c=a(96486),u=a(48880),d=a(76429),m=a(25387),p=a(2550);const f=({dirtyFieldsSinceLastSubmit:e,submitSucceeded:t,pristine:a})=>{const{onCancel:n}=(0,u.default)(),r=(0,c.isEmpty)(e)||!t&&a,i=(0,m.YB)();return s().createElement(o.W,{className:"pf-v5-u-mt-0"},s().createElement(l.zx,{ouiaId:"primary-submit-button",type:"submit",isDisabled:r,variant:"primary"},i.formatMessage(p.Z.save)),s().createElement(l.zx,{ouiaId:"secondary-cancel-button",variant:"link",onClick:()=>n()},i.formatMessage(p.Z.cancel)))};f.propTypes={dirtyFieldsSinceLastSubmit:i().shape({[i().string]:i().oneOfType([i().string,i().number,i().bool])}),submitSucceeded:i().bool,pristine:i().bool,onCancel:i().func};const v=e=>s().createElement(d.Z,{subscription:{pristine:!0,submitSucceeded:!0,dirtyFieldsSinceLastSubmit:!0}},(t=>s().createElement(f,{...t,...e})));var g=a(67850),b=a(65412),y=a(75747),E=a(51912),h=a(96354);const L=({formTemplateProps:e,...t})=>s().createElement(E.Z,{componentMapper:{[h.Z.TEXT_FIELD]:b.Z,[h.Z.TEXTAREA]:y.Z},FormTemplate:t=>s().createElement(g.ZP,{...e,...t,FormButtons:v}),...t});L.propTypes={formTemplateProps:i().object};const T=L},74517:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>B});var n=a(66029),s=a.n(n),r=a(45697),i=a.n(r),o=a(96354),l=a(73479),c=a(42348),u=a.n(c),d=a(25387),m=a(62012),p=a(86706),f=a(13563),v=a(19862),g=a(66254),b=a(29693),y=a(8340),E=a(55218),h=a(80236),L=a(52643),T=a(83133),R=a(84414),P=a(10357),C=a(41448),I=a(48880),Z=a(2550);const S=({ModalProps:e,...t})=>{const a=(0,d.YB)(),n=(0,I.default)().getState().values;return s().createElement(P.Z,{...t,ModalProps:{...e,onClose:()=>e.onClose(n)},alert:n["dual-list-select"]?void 0:()=>s().createElement("div",{className:"rbac-m-resource-definitions"},s().createElement(C.b,{className:"pf-v5-c-modal__alert",variant:"danger",isInline:!0,title:a.formatMessage(Z.Z.defineAtLeastOneResource)}))})};S.propTypes={ModalProps:i().object};const x=S;var M=a(60966);const k={changedResources:void 0,cancelWarningVisible:!1,resourcesPath:void 0,loadingStateVisible:!0};function _(e,t){if("update"===t.type)return{...e,...t.payload};throw new Error}const N=(e,t,a,n)=>{const s=(0,d.YB)();return{fields:[{component:o.Z.DUAL_LIST_SELECT,name:"dual-list-select",leftTitle:s.formatMessage(Z.Z.resourcesAvailable),rightTitle:s.formatMessage(Z.Z.resourcesDefined),filterOptionsTitle:s.formatMessage(Z.Z.filterByResource),filterValueTitle:s.formatMessage(Z.Z.filterByResource),options:[...(t||n)&&e?a:[]],validate:[{type:"validate-resources"}],isSearchable:!0,...n?{getValueFromNode:e=>e.props["data-value"]}:{}}]}},w={"validate-resources":()=>e=>e&&e.length>0?void 0:"At least one resource must be defined for this permission"},O=({cancelRoute:e})=>{const t=(0,d.YB)(),{roleId:a,permissionId:r}=(0,m.useParams)(),i=(0,R.Z)(),o=(0,p.useDispatch)(),[c,P]=(0,n.useReducer)(_,k),C=(0,n.useMemo)((()=>(0,M.Rt)(r)),[r]),{resourceTypes:I,isLoading:S,isLoadingResources:O,resources:B,isLoadingInventory:A,inventoryGroups:j}=(0,p.useSelector)((e=>(({costReducer:{resourceTypes:e,isLoading:t,loadingResources:a,resources:n},inventoryReducer:{resourceTypes:s,isLoading:r}},i)=>({resourceTypes:e.data,resources:n[i]?{resourcesPath:n[i]}:n,isLoading:t,isLoadingResources:a>0,isLoadingInventory:r,inventoryGroups:s}))(e,c.resourcesPath)),p.shallowEqual),{definedResources:D,role:V}=(0,p.useSelector)((e=>({role:e.roleReducer.selectedRole,definedResources:e.roleReducer.selectedRole?.access?u()(e.roleReducer.selectedRole.access.filter((e=>e.permission===r)).map((e=>e.resourceDefinitions.map((e=>{const t=e.attributeFilter.value;return C?Array.isArray(t)?t.map((e=>String(e))):String(t):e.attributeFilter.value}))))):[],isRecordLoading:e.roleReducer.isRecordLoading})),p.shallowEqual);(0,n.useEffect)((()=>{C&&o((0,g.f)([r]))||o((0,v.b)())}),[r]),(0,n.useEffect)((()=>{if(!S){let e=I.find((e=>e.value===r.split(":")?.[1]))?.path;e&&(P({type:"update",payload:{resourcesPath:e.split("/")[5]}}),o((0,v.P)(e)))}}),[I]);const F=()=>i(e,{replace:!0}),W=e=>{e["dual-list-select"]===D?F():P({type:"update",payload:{changedResources:e["dual-list-select"],cancelWarningVisible:!0}})},$=((e,t)=>(0,M.Rt)(t)?[...(0,M._T)(t)?[s().createElement(d._H,{key:"ungrouped","data-value":"null",...Z.Z.ungroupedSystems})]:[],...Object.values(e||{}).map((e=>s().createElement("span",{key:e.id,"data-value":e.id},e.name)))]:Object.entries(e).reduce(((e,[t,a])=>[...e,...a.map((e=>({value:e.value,path:t,label:e.value})))]),[]))(C?j[r]:B,r);return s().createElement(s().Fragment,null,s().createElement(E.Z,{title:t.formatMessage(Z.Z.exitEditResourceDefinitions),isOpen:c.cancelWarningVisible,onClose:()=>P({type:"update",payload:{cancelWarningVisible:!1}}),onConfirm:F,"data-testid":"warning-modal",confirmButtonLabel:t.formatMessage(Z.Z.discard)},t.formatMessage(Z.Z.changesWillBeLost)),(S||O||A)&&c.loadingStateVisible?s().createElement(h.u,{variant:h.v.large,className:"rbac-m-resource-definitions",isOpen:!0,title:t.formatMessage(Z.Z.editResourceDefinitions),onClose:()=>{P({type:"update",payload:{loadingStateVisible:!1}}),F()}},s().createElement(L.b,null,s().createElement(T.$,null))):s().createElement(l.Z,{schema:N(B,c.resourcesPath,$,C),componentMapper:y.ZP,initialValues:{"dual-list-select":c.changedResources||D||[]},onSubmit:t=>{P({type:"update",payload:{changedResources:t["dual-list-select"]}});const n=t["dual-list-select"].map((e=>"null"===e?null:e)),s={permission:r,resourceDefinitions:[{attributeFilter:{key:C?"group.id":`cost-management.${r.split(":")?.[1]}`,operation:1===n.length?"equal":"in",value:1===n.length?n[0]:n}}]};o((0,f.ul)(a,{...V,access:[...V.access.filter((e=>e.permission!==r)),s]}),!0).then((()=>{o((0,f.fp)(a)).then((({value:e})=>{C&&o((0,g.M)((0,b.C$)(e?.access?.find((e=>e.permission===r))?.resourceDefinitions)))})),i(e)}))},onCancel:e=>W(e),validatorMapper:w,FormTemplate:e=>s().createElement(x,{...e,ModalProps:{onClose:W,isOpen:!c.cancelWarningVisible,variant:"large",title:t.formatMessage(Z.Z.editResourceDefinitions),description:t.formatMessage(Z.Z.editPermissionsUsingArrows)}})}))};O.propTypes={cancelRoute:i().string.isRequired};const B=O},60966:(e,t,a)=>{"use strict";a.d(t,{Hg:()=>o,Rt:()=>s,_T:()=>r,u3:()=>i});var n=a(2550);const s=e=>e.split(":")[0].includes("inventory"),r=e=>s(e)&&e.split(":")[1].includes("hosts"),i=e=>e.split(":")[0].includes("cost-management"),o=(e,t,a)=>{let s=e.filter(Boolean);return r(t)&&e.includes(null)&&s.unshift(a.formatMessage(n.Z.ungroupedSystems)),s.reduce(((e,t)=>[...e,{cells:[t]}]),[])}},82472:()=>{},97890:()=>{},17657:()=>{},22972:()=>{},43389:()=>{},65088:()=>{},81754:()=>{},70347:()=>{},78752:()=>{},25238:()=>{},87234:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5205.fc1291eae31969e749d7d06960d9ecf5.js.map
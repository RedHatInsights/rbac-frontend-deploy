(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2587],{35600:(e,r,a)=>{"use strict";a.d(r,{K:()=>s});var l=a(8674),t=a(93345),o=a(70358),i=a(33774);const s=e=>{var{children:r=null,className:a=""}=e,s=(0,l.__rest)(e,["children","className"]);const n=(0,i.css)(o.default.formGroup,o.default.modifiers.action,a),d=t.createElement("div",{className:(0,i.css)(o.default.formActions)},r);return t.createElement("div",Object.assign({},s,{className:n}),t.createElement("div",{className:(0,i.css)(o.default.formGroupControl)},d))};s.displayName="ActionGroup"},73133:(e,r,a)=>{"use strict";a.d(r,{l:()=>d});var l=a(8674),t=a(93345),o=a(70358),i=a(33774);const s="--pf-v5-c-form--m-limit-width--MaxWidth",n=e=>{var{children:r=null,className:a="",isHorizontal:n=!1,isWidthLimited:d=!1,maxWidth:c="",innerRef:m}=e,f=(0,l.__rest)(e,["children","className","isHorizontal","isWidthLimited","maxWidth","innerRef"]);return t.createElement("form",Object.assign({noValidate:!0},c&&{style:Object.assign({[s]:c},f.style)},f,{className:(0,i.css)(o.default.form,n&&o.default.modifiers.horizontal,(d||c)&&o.default.modifiers.limitWidth,a),ref:m}),r)},d=t.forwardRef(((e,r)=>t.createElement(n,Object.assign({innerRef:r},e))));d.displayName="Form"},56780:(e,r,a)=>{"use strict";a.d(r,{g:()=>d});var l=a(8674),t=a(93345),o=a(70358),i=a(57709),s=a(33774),n=a(65518);const d=e=>{var{children:r=null,className:a="",label:d,labelInfo:c,labelIcon:m,isRequired:f=!1,isInline:p=!1,hasNoPaddingTop:u=!1,isStack:g=!1,fieldId:b,role:v}=e,_=(0,l.__rest)(e,["children","className","label","labelInfo","labelIcon","isRequired","isInline","hasNoPaddingTop","isStack","fieldId","role"]);const h="group"===v||"radiogroup"===v,N=h?"span":"label",E=t.createElement(t.Fragment,null,t.createElement(N,Object.assign({className:(0,s.css)(o.default.formLabel)},!h&&{htmlFor:b}),t.createElement("span",{className:(0,s.css)(o.default.formLabelText)},d),f&&t.createElement("span",{className:(0,s.css)(o.default.formLabelRequired),"aria-hidden":"true"}," ",i.L))," ",t.isValidElement(m)&&m);return t.createElement(n.N,null,(e=>t.createElement("div",Object.assign({className:(0,s.css)(o.default.formGroup,a)},v&&{role:v},h&&{"aria-labelledby":`${b||e}-legend`},_),d&&t.createElement("div",Object.assign({className:(0,s.css)(o.default.formGroupLabel,c&&o.default.modifiers.info,u&&o.default.modifiers.noPaddingTop)},h&&{id:`${b||e}-legend`}),c&&t.createElement(t.Fragment,null,t.createElement("div",{className:(0,s.css)(o.default.formGroupLabelMain)},E),t.createElement("div",{className:(0,s.css)(o.default.formGroupLabelInfo)},c)),!c&&E),t.createElement("div",{className:(0,s.css)(o.default.formGroupControl,p&&o.default.modifiers.inline,g&&o.default.modifiers.stack)},r))))};d.displayName="FormGroup"},2587:(e,r,a)=>{"use strict";a.r(r),a.d(r,{ActionGroup:()=>l.K,Form:()=>t.l,FormAlert:()=>c,FormContextConsumer:()=>x,FormContextProvider:()=>G,FormFieldGroup:()=>b,FormFieldGroupExpandable:()=>v,FormFieldGroupHeader:()=>_,FormGroup:()=>h.g,FormHelperText:()=>N,FormSection:()=>E,useFormContext:()=>T});var l=a(35600),t=a(73133),o=a(8674),i=a(93345),s=a.n(i),n=a(33774),d=a(70358);const c=e=>{var{children:r=null,className:a=""}=e,l=(0,o.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({},l,{className:(0,n.css)(`${d.default.form}__alert`,a)}),r)};c.displayName="FormAlert";var m=a(89015),f=a(72583);const p=e=>{var{className:r,onToggle:a,isExpanded:l,"aria-label":t,"aria-labelledby":s,toggleId:c}=e,p=(0,o.__rest)(e,["className","onToggle","isExpanded","aria-label","aria-labelledby","toggleId"]);return i.createElement("div",Object.assign({className:(0,n.css)(d.default.formFieldGroupToggle,r)},p),i.createElement("div",{className:(0,n.css)(d.default.formFieldGroupToggleButton)},i.createElement(f.$n,{variant:"plain","aria-label":t,onClick:a,"aria-expanded":l,"aria-labelledby":s,id:c},i.createElement("span",{className:(0,n.css)(d.default.formFieldGroupToggleIcon)},i.createElement(m.default,{"aria-hidden":"true"})))))};p.displayName="FormFieldGroupToggle";var u=a(65518);const g=e=>{var{children:r,className:a,header:l,isExpandable:t,isExpanded:s,onToggle:c,toggleAriaLabel:m}=e,f=(0,o.__rest)(e,["children","className","header","isExpandable","isExpanded","onToggle","toggleAriaLabel"]);const g=l?l.props.titleText:null;return!t||m||g||console.error("FormFieldGroupExpandable:","toggleAriaLabel or the titleText prop of FormFieldGroupHeader is required to make the toggle button accessible"),i.createElement("div",Object.assign({className:(0,n.css)(d.default.formFieldGroup,s&&t&&d.default.modifiers.expanded,a),role:"group"},g&&{"aria-labelledby":`${l.props.titleText.id}`},f),t&&i.createElement(u.N,{prefix:"form-field-group-toggle"},(e=>i.createElement(p,Object.assign({onToggle:c,isExpanded:s,"aria-label":m,toggleId:e},g&&{"aria-labelledby":`${l.props.titleText.id} ${e}`})))),l&&l,(!t||t&&s)&&i.createElement("div",{className:(0,n.css)(d.default.formFieldGroupBody)},r))};g.displayName="InternalFormFieldGroup";const b=e=>{var{children:r,className:a,header:l}=e,t=(0,o.__rest)(e,["children","className","header"]);return i.createElement(g,Object.assign({className:a,header:l},t),r)};b.displayName="FormFieldGroup";const v=e=>{var{children:r,className:a,header:l,isExpanded:t=!1,toggleAriaLabel:s}=e,n=(0,o.__rest)(e,["children","className","header","isExpanded","toggleAriaLabel"]);const[d,c]=(0,i.useState)(t);return i.createElement(g,Object.assign({className:a,header:l,isExpandable:!0,isExpanded:d,toggleAriaLabel:s,onToggle:()=>c(!d)},n),r)};v.displayName="FormFieldGroupExpandable";const _=e=>{var{className:r,titleText:a,titleDescription:l,actions:t}=e,s=(0,o.__rest)(e,["className","titleText","titleDescription","actions"]);return i.createElement("div",Object.assign({className:(0,n.css)(d.default.formFieldGroupHeader,r)},s),i.createElement("div",{className:(0,n.css)(d.default.formFieldGroupHeaderMain)},a&&i.createElement("div",{className:(0,n.css)(d.default.formFieldGroupHeaderTitle)},i.createElement("div",{className:(0,n.css)(d.default.formFieldGroupHeaderTitleText),id:a.id},a.text)),l&&i.createElement("div",{className:(0,n.css)(d.default.formFieldGroupHeaderDescription)},l)),i.createElement("div",{className:(0,n.css)(d.default.formFieldGroupHeaderActions)},t&&t))};_.displayName="FormFieldGroupHeader";var h=a(56780);const N=e=>{var{children:r=null,className:a=""}=e,l=(0,o.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({className:(0,n.css)(d.default.formHelperText,a)},l),r)};N.displayName="FormHelperText";const E=e=>{var{className:r="",children:a,title:l="",titleElement:t="div"}=e,s=(0,o.__rest)(e,["className","children","title","titleElement"]);return i.createElement(u.N,{prefix:"pf-form-section-title"},(e=>i.createElement("section",Object.assign({className:(0,n.css)(d.default.formSection,r),role:"group"},l&&{"aria-labelledby":e},s),l&&i.createElement(t,{id:e,className:(0,n.css)(d.default.formSectionTitle,r)},l),a)))};E.displayName="FormSection";const F=s().createContext({}),x=F.Consumer,G=({initialValues:e,children:r})=>{var a;const[l,t]=s().useState(e||{}),[i,n]=s().useState({}),[d,c]=s().useState({}),[m,f]=s().useState({}),p=0===(null===(a=Object.keys(i))||void 0===a?void 0:a.length);return s().createElement(F.Provider,{value:{values:l,errors:i,touched:m,isValid:p,setValues:t,setErrors:n,getValue:e=>Object.entries(l).reduce(((r,[a,l])=>a===e?l:r),""),setValue:(e,r,a=!0)=>{var o;l[e]!==r&&(t((a=>Object.assign(Object.assign({},a),{[e]:r}))),a&&(null===(o=d[e])||void 0===o||o.call(d,r)))},getError:e=>Object.entries(i).reduce(((r,[a,l])=>a===e?l:r),""),setError:(e,r)=>i[e]!==r&&n((a=>{var l=e,t=(a[l],(0,o.__rest)(a,["symbol"==typeof l?l:l+""]));return Object.assign(Object.assign({},t),!!r&&{[e]:r})})),validate:()=>{var e;return null===(e=Object.entries(d))||void 0===e?void 0:e.reduce(((e,[r,a])=>{const t=a(l[r]);return t&&(e[r]=t),e}),{})},setValidator:(e,r)=>d[e]!==r&&c((a=>Object.assign(Object.assign({},a),{[e]:r}))),isTouched:e=>Object.entries(m).reduce(((r,[a,l])=>a===e?l:r),!1),setTouched:(e,r)=>m[e]!==r&&f((a=>{var l=e,t=(a[l],(0,o.__rest)(a,["symbol"==typeof l?l:l+""]));return Object.assign(Object.assign({},t),r&&{[e]:r})}))}},"function"==typeof r?s().createElement(F.Consumer,null,(e=>r(e))):r)};G.displayName="FormContextProvider";const T=()=>s().useContext(F)},70358:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>l}),a(74895);const l={dirRtl:"pf-v5-m-dir-rtl",form:"pf-v5-c-form",formActions:"pf-v5-c-form__actions",formFieldGroup:"pf-v5-c-form__field-group",formFieldGroupBody:"pf-v5-c-form__field-group-body",formFieldGroupHeader:"pf-v5-c-form__field-group-header",formFieldGroupHeaderActions:"pf-v5-c-form__field-group-header-actions",formFieldGroupHeaderDescription:"pf-v5-c-form__field-group-header-description",formFieldGroupHeaderMain:"pf-v5-c-form__field-group-header-main",formFieldGroupHeaderTitle:"pf-v5-c-form__field-group-header-title",formFieldGroupHeaderTitleText:"pf-v5-c-form__field-group-header-title-text",formFieldGroupToggle:"pf-v5-c-form__field-group-toggle",formFieldGroupToggleButton:"pf-v5-c-form__field-group-toggle-button",formFieldGroupToggleIcon:"pf-v5-c-form__field-group-toggle-icon",formFieldset:"pf-v5-c-form__fieldset",formGroup:"pf-v5-c-form__group",formGroupControl:"pf-v5-c-form__group-control",formGroupLabel:"pf-v5-c-form__group-label",formGroupLabelHelp:"pf-v5-c-form__group-label-help",formGroupLabelInfo:"pf-v5-c-form__group-label-info",formGroupLabelMain:"pf-v5-c-form__group-label-main",formHelperText:"pf-v5-c-form__helper-text",formHelperTextIcon:"pf-v5-c-form__helper-text-icon",formLabel:"pf-v5-c-form__label",formLabelRequired:"pf-v5-c-form__label-required",formLabelText:"pf-v5-c-form__label-text",formSection:"pf-v5-c-form__section",formSectionTitle:"pf-v5-c-form__section-title",modifiers:{horizontal:"pf-m-horizontal",alignRight:"pf-m-align-right",noPaddingTop:"pf-m-no-padding-top",horizontalOnXs:"pf-m-horizontal-on-xs",horizontalOnSm:"pf-m-horizontal-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",limitWidth:"pf-m-limit-width",action:"pf-m-action",info:"pf-m-info",disabled:"pf-m-disabled",inline:"pf-m-inline",stack:"pf-m-stack",error:"pf-m-error",success:"pf-m-success",warning:"pf-m-warning",inactive:"pf-m-inactive",hidden:"pf-m-hidden",expanded:"pf-m-expanded"},themeDark:"pf-v5-theme-dark"}},74895:()=>{}}]);
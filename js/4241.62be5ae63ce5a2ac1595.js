"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4241],{19294:(e,a,i)=>{i.d(a,{Y:()=>c});var t=i(28416),n=i(38296),s=i(80159),r=i(93174),d=i(43047),l=i(62472),o=i(41892);const c=({children:e=null,content:a="",isCurrent:i=!1,isDisabled:p=!1,isVisited:u=!1,stepIndex:m,onClick:v,component:g="button",href:f,isExpandable:b=!1,id:z,status:x="default",target:w,ouiaId:E,ouiaSafe:N=!0})=>{const[y,_]=t.useState(!1),h=(0,l.useOUIAProps)(c.displayName,E,N);t.useEffect((()=>{_(i)}),[i]);const k=t.useMemo((()=>{if(x===o.MB.Error||u&&!i){let e=a.toString();return x===o.MB.Error&&(e+=`, ${x}`),u&&!i&&(e+=", visited"),e}}),[a,i,u,x]);return t.createElement("li",{className:(0,n.css)(s.Z.wizardNavItem,b&&s.Z.modifiers.expandable,b&&y&&s.Z.modifiers.expanded)},t.createElement(g,Object.assign({},"a"===g?{tabIndex:p?-1:void 0,href:f,target:w}:{disabled:p},z&&{id:z.toString()},{onClick:e=>{e.stopPropagation(),b?_(!y||i):null==v||v(e,m)},className:(0,n.css)(s.Z.wizardNavLink,i&&s.Z.modifiers.current,p&&s.Z.modifiers.disabled),"aria-disabled":!!p||null,"aria-current":!(!i||e)&&"step"},b&&{"aria-expanded":y},k&&{"aria-label":k},h),b?t.createElement(t.Fragment,null,t.createElement("span",{className:(0,n.css)(s.Z.wizardNavLinkText)},a),t.createElement("span",{className:(0,n.css)(s.Z.wizardNavLinkToggle)},t.createElement("span",{className:(0,n.css)(s.Z.wizardNavLinkToggleIcon)},t.createElement(r.default,{"aria-label":(i?"Collapse":"Expand")+" step icon"})))):t.createElement(t.Fragment,null,a,x===o.MB.Error&&t.createElement("span",{style:{marginLeft:"var(--pf-v5-global--spacer--sm)"}},t.createElement(d.ZP,{color:"var(--pf-v5-global--danger-color--100)"})))),e)};c.displayName="WizardNavItem"},54241:(e,a,i)=>{i.r(a),i.d(a,{Wizard:()=>S,WizardBody:()=>y,WizardContext:()=>m,WizardFooter:()=>p,WizardFooterWrapper:()=>c,WizardHeader:()=>B,WizardNav:()=>h,WizardNavItem:()=>k.Y,WizardNavItemStatus:()=>l.MB,WizardStep:()=>f,WizardStepChangeScope:()=>l.v_,WizardToggle:()=>_,isCustomWizardFooter:()=>l.Ud,isCustomWizardNav:()=>l.Xr,isCustomWizardNavItem:()=>l.eJ,isWizardBasicStep:()=>l.yG,isWizardParentStep:()=>l.UB,isWizardSubStep:()=>l.Nn,useWizardContext:()=>g,useWizardFooter:()=>T});var t=i(65353),n=i(28416),s=i.n(n),r=i(38296),d=i(80159),l=i(41892),o=i(47173);const c=({children:e})=>s().createElement("footer",{className:(0,r.css)(d.Z.wizardFooter)},e),p=e=>{var{activeStep:a}=e,i=(0,t.__rest)(e,["activeStep"]);const n=!(0,l.Ud)(null==a?void 0:a.footer)&&(null==a?void 0:a.footer);return s().createElement(u,Object.assign({},i,n))},u=({onNext:e,onBack:a,onClose:i,isNextDisabled:t,isBackDisabled:n,isBackHidden:r,isCancelHidden:l,nextButtonText:p="Next",backButtonText:u="Back",cancelButtonText:m="Cancel"})=>s().createElement(c,null,!r&&s().createElement(o.zx,{variant:o.Wu.secondary,onClick:a,isDisabled:n},u),s().createElement(o.zx,{variant:o.Wu.primary,type:"submit",onClick:e,isDisabled:t},p),!l&&s().createElement("div",{className:d.Z.wizardFooterCancel},s().createElement(o.zx,{variant:o.Wu.link,onClick:i},m)));c.displayName="WizardFooterWrapper",p.displayName="WizardFooter";const m=s().createContext({}),v=({steps:e,footer:a,activeStepIndex:i,children:t,onNext:n,onBack:r,onClose:d,goToStepById:o,goToStepByName:c,goToStepByIndex:u})=>{const[v,g]=s().useState(e),[f,b]=s().useState(),z=s().useMemo((()=>v.map(((a,i)=>Object.assign(Object.assign({},a),e[i])))),[e,v]),x=s().useMemo((()=>z.find((e=>e.index===i))),[i,z]),w=s().useCallback((()=>null==d?void 0:d(null)),[d]),E=s().useCallback((()=>n(null,z)),[n,z]),N=s().useCallback((()=>r(null,z)),[r,z]),y=s().useMemo((()=>{const e=(null==x?void 0:x.footer)||f||a;if((0,l.Ud)(e)){const a=e;return"function"==typeof a?a(x,E,N,w):a}return s().createElement(p,Object.assign({activeStep:x,onNext:E,onBack:N,onClose:w,isBackDisabled:1===(null==x?void 0:x.index)||(0,l.Nn)(x)&&2===(null==x?void 0:x.index)},e))}),[f,a,x,E,N,w]),_=s().useCallback((e=>z.find((a=>a.id===e))),[z]),h=s().useCallback((e=>g((a=>a.map((a=>a.id===e.id?Object.assign(Object.assign({},a),e):a))))),[]);return s().createElement(m.Provider,{value:{steps:z,activeStep:x,footer:y,close:w,getStep:_,setStep:h,goToNextStep:E,goToPrevStep:N,setFooter:b,goToStepById:s().useCallback((e=>o(z,e)),[o,z]),goToStepByName:s().useCallback((e=>c(z,e)),[c,z]),goToStepByIndex:s().useCallback((e=>u(null,z,e)),[u,z])}},t)};v.displayName="WizardContextProvider";const g=()=>s().useContext(m),f=e=>{var{children:a,steps:i}=e,n=(0,t.__rest)(e,["children","steps"]);const{activeStep:r,setStep:d}=g(),{id:o,name:c,body:p,isDisabled:u,isHidden:m,navItem:v,footer:f,status:b}=n,z=(0,l.UB)(r);return s().useEffect((()=>{d(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({id:o,name:c},p&&{body:p}),u&&{isDisabled:u}),m&&{isHidden:m}),v&&{navItem:v}),f&&{footer:f}),b&&{status:b}),!z&&o===(null==r?void 0:r.id)&&!(null==r?void 0:r.isVisited)&&{isVisited:!0}))}),[p,f,o,u,m,c,v,b,z,d,null==r?void 0:r.id,null==r?void 0:r.isVisited]),s().createElement(s().Fragment,null,a)};f.displayName="WizardStep";const b=e=>{var{children:a,steps:i}=e;return(0,t.__rest)(e,["children","steps"])};var z=i(93174),x=i(5964),w=i(1774),E=i(80164),N=i(84709);const y=({children:e,hasNoPadding:a=!1,"aria-label":i,"aria-labelledby":t,component:n="div"})=>{const[l,o]=s().useState(!1),[c,p]=s().useState(void 0),u=s().useRef(null),v=n,{activeStep:g}=s().useContext(m),f=i||`${null==g?void 0:g.name} content`;return s().useEffect((()=>{const e=(0,E.Ds)((()=>{if(null==u?void 0:u.current){const{offsetWidth:e,offsetHeight:a,scrollHeight:i}=u.current;c!==e&&(p(e),o(a<i))}}),250);let a=()=>{};if(null==u?void 0:u.current){a=(0,N.p)(u.current,e);const{offsetHeight:i,scrollHeight:t}=u.current;o(i<t),p(u.current.offsetWidth)}return()=>{a()}}),[]),s().createElement(v,Object.assign({ref:u},"div"===n&&l&&{role:"region"},l&&{"aria-label":f,"aria-labelledby":t,tabIndex:0},{className:(0,r.css)(d.Z.wizardMain)}),s().createElement("div",{className:(0,r.css)(d.Z.wizardMainBody,a&&d.Z.modifiers.noPadding)},e))};y.displayName="WizardBody";const _=({steps:e,activeStep:a,footer:i,nav:n,isNavExpanded:o,toggleNavExpanded:c,"aria-label":p="Wizard toggle"})=>{const u=(0,l.Nn)(a),m=u&&e.find((e=>e.id===a.parentId)),v=e.filter((e=>!(0,l.Nn)(e))).indexOf(m||a)+1,g=s().useCallback((e=>{o&&e.key===w.yu.Escape&&(null==c||c(e))}),[o,c]);s().useEffect((()=>{const e="undefined"!=typeof document?document.body:null;return null==e||e.addEventListener("keydown",g,!1),()=>{null==e||e.removeEventListener("keydown",g,!1)}}),[g]);const b=e.map((e=>{var i;const n=(null===(i=e.component)||void 0===i?void 0:i.props)||{},{children:r,body:d}=n,l=(0,t.__rest)(n,["children","body"]);return s().createElement(s().Fragment,{key:e.id},(null==a?void 0:a.name)===e.name&&(d||void 0===d?s().createElement(y,Object.assign({},d),r):r),s().createElement("div",{key:e.id,style:{display:"none"}},s().createElement(f,Object.assign({},l))))}));return s().createElement(s().Fragment,null,s().createElement("button",{onClick:c,className:(0,r.css)(d.Z.wizardToggle,o&&"pf-m-expanded"),"aria-label":p,"aria-expanded":o},s().createElement("span",{className:(0,r.css)(d.Z.wizardToggleList)},s().createElement("span",{className:(0,r.css)(d.Z.wizardToggleListItem)},s().createElement("span",{className:(0,r.css)(d.Z.wizardToggleNum)},v)," ",(null==m?void 0:m.name)||(null==a?void 0:a.name),u&&s().createElement(z.default,{className:(0,r.css)(d.Z.wizardToggleSeparator),"aria-hidden":"true"})),u&&s().createElement("span",{className:(0,r.css)(d.Z.wizardToggleListItem)},null==a?void 0:a.name)),s().createElement("span",{className:(0,r.css)(d.Z.wizardToggleIcon)},s().createElement(x.default,{"aria-hidden":"true"}))),s().createElement("div",{className:(0,r.css)(d.Z.wizardOuterWrap)},s().createElement("div",{className:(0,r.css)(d.Z.wizardInnerWrap)},n,b),i))};_.displayName="WizardToggle";const h=({children:e,"aria-label":a,"aria-labelledby":i,isExpanded:t=!1,isInnerList:s=!1})=>s?n.createElement("ol",{className:(0,r.css)(d.Z.wizardNavList),role:"list"},e):n.createElement("nav",{className:(0,r.css)(d.Z.wizardNav,t&&d.Z.modifiers.expanded),"aria-label":a,"aria-labelledby":i},n.createElement("ol",{className:(0,r.css)(d.Z.wizardNavList),role:"list"},e));h.displayName="WizardNav";var k=i(19294);const I=({nav:e,isVisitRequired:a,isProgressive:i,isNavExpanded:t})=>{const{activeStep:n,steps:r,goToStepByIndex:d}=g(),o=Object.assign({isExpanded:t,"aria-label":(null==e?void 0:e["aria-label"])||"Wizard steps"},(null==e?void 0:e["aria-labelledby"])&&{"aria-labelledby":e["aria-labelledby"]});return s().createElement(h,Object.assign({},o),r.map(((e,t)=>{var c;const p=r.some((e=>e.index>t+1&&e.isVisited)),u=e.isDisabled||a&&!e.isVisited&&!p,m=(0,l.eJ)(e.navItem)&&s().createElement(s().Fragment,{key:e.id},"function"==typeof e.navItem?e.navItem(e,n,r,d):e.navItem);if((0,l.UB)(e)&&!e.isHidden){let t,p=!1;const u=null===(c=e.subStepIds)||void 0===c?void 0:c.map(((e,o)=>{const c=r.find((a=>a.id===e)),u=r.some((e=>e.index>c.index&&e.isVisited)),m=c.isDisabled||a&&!c.isVisited&&!u,v=(0,l.eJ)(c.navItem)&&s().createElement(s().Fragment,{key:c.id},"function"==typeof c.navItem?c.navItem(c,n,r,d):c.navItem);if(!c.isHidden)return 0===o&&(t=c.index),(null==n?void 0:n.id)===c.id&&(p=!0),!i||i&&c.index<=n.index?v||s().createElement(k.Y,Object.assign({key:c.id,id:c.id,content:c.name,isCurrent:(null==n?void 0:n.id)===c.id,isDisabled:m,isVisited:c.isVisited,stepIndex:c.index,onClick:()=>d(c.index),status:c.status},c.navItem)):void 0})),v=s().Children.toArray(u).some((e=>s().isValidElement(e)&&!e.props.isDisabled));if(!i||i&&e.index<=n.index)return m||s().createElement(k.Y,Object.assign({key:e.id,id:e.id,content:e.name,isExpandable:e.isExpandable,isCurrent:p,isDisabled:!v,isVisited:e.isVisited,stepIndex:t,onClick:()=>d(t),status:e.status},e.navItem),s().createElement(h,Object.assign({},o,{isInnerList:!0}),u))}if((0,l.yG)(e)&&!e.isHidden&&(!i||i&&e.index<=n.index))return m||s().createElement(k.Y,Object.assign({key:e.id,id:e.id,content:e.name,isCurrent:(null==n?void 0:n.id)===e.id,isDisabled:u,isVisited:e.isVisited,stepIndex:e.index,onClick:()=>d(e.index),status:e.status},e.navItem))})))},S=e=>{var{children:a,footer:i,height:n,width:o,className:c,header:p,nav:u,startIndex:m=1,isVisitRequired:g=!1,isProgressive:z=!1,onStepChange:x,onSave:w,onClose:E}=e,N=(0,t.__rest)(e,["children","footer","height","width","className","header","nav","startIndex","isVisitRequired","isProgressive","onStepChange","onSave","onClose"]);const[y,_]=s().useState(m),h=(e=>s().Children.toArray(e).reduce(((e,a,i)=>{if(!function(e){return s().isValidElement(e)&&e.type===f}(a))throw new Error("Wizard only accepts children of type WizardStep.");{const{props:t}=a,{steps:n,id:s}=t,r=e.length+1,d=[];e.push(Object.assign(Object.assign(Object.assign({index:r,component:a},0===i&&!(null==n?void 0:n.length)&&{isVisited:!0}),n&&{subStepIds:null==n?void 0:n.map(((e,a)=>(d.push(Object.assign(Object.assign({index:r+a+1,component:e,parentId:s},0===i&&0===a&&{isVisited:!0}),b(e.props))),e.props.id)))}),b(t)),...d)}return e}),[]))(a),k=s().useRef(h[m-1]);return s().useEffect((()=>{(0,l.UB)(k.current)&&_(m+1)}),[m]),s().createElement(v,{steps:h,activeStepIndex:y,footer:i,onNext:(e,a=h)=>{const i=a.find((e=>e.index>y&&!e.isHidden&&!e.isDisabled&&!(0,l.UB)(e)));if(y>=a.length||!(null==i?void 0:i.index))return w?w(e):null==E?void 0:E(e);const t=(0,l.UB)(a[y])?a[y+1]:a[y],n=a[y-1];_(null==i?void 0:i.index),null==x||x(e,t,n,l.v_.Next)},onBack:(e,a=h)=>{const i=[...a].reverse().find((e=>e.index<y&&!e.isHidden&&!e.isDisabled&&!(0,l.UB)(e))),t=(0,l.UB)(a[y-2])?a[y-3]:a[y-2],n=a[y-1];_(null==i?void 0:i.index),null==x||x(e,t,n,l.v_.Back)},onClose:E,goToStepById:(e=h,a)=>{const i=e.find((e=>e.id===a)),t=null==i?void 0:i.index,n=e.length+1;t>0&&t<n&&!i.isDisabled&&!i.isHidden&&_(t)},goToStepByName:(e=h,a)=>{const i=e.find((e=>e.name===a)),t=null==i?void 0:i.index,n=e.length+1;t>0&&t<n&&!i.isDisabled&&!i.isHidden&&_(t)},goToStepByIndex:(e,a=h,i)=>{const t=a.length+1;i<1?i=1:i>t&&(i=t);const n=a[i-1],s=a[y-1];_(i),null==x||x(e,n,s,l.v_.Nav)}},s().createElement("div",Object.assign({className:(0,r.css)(d.Z.wizard,c),style:Object.assign(Object.assign({},n?{height:n}:{}),o?{width:o}:{})},N),p,s().createElement(C,{nav:u,isVisitRequired:g,isProgressive:z})))},C=({nav:e,isVisitRequired:a,isProgressive:i})=>{const{activeStep:t,steps:n,footer:r,goToStepByIndex:d}=g(),[o,c]=s().useState(!1),p=s().useMemo((()=>(0,l.Xr)(e)?"function"==typeof e?e(o,n,t,d):e:s().createElement(I,{nav:e,isNavExpanded:o,isVisitRequired:a,isProgressive:i})),[t,a,i,d,o,e,n]);return s().createElement(_,{nav:p,footer:r,steps:n,activeStep:t,isNavExpanded:o,toggleNavExpanded:()=>c((e=>!e))})};S.displayName="Wizard";var W=i(24307);const B=({onClose:e=(()=>{}),title:a,description:i,isCloseHidden:t,closeButtonAriaLabel:s,titleId:l,descriptionComponent:c="div",descriptionId:p})=>n.createElement("div",{className:(0,r.css)(d.Z.wizardHeader)},!t&&n.createElement("div",{className:(0,r.css)(d.Z.wizardClose)},n.createElement(o.zx,{variant:"plain","aria-label":s,onClick:e},n.createElement(W.default,{"aria-hidden":"true"}))),n.createElement("div",{className:(0,r.css)(d.Z.wizardTitle)},n.createElement("h2",{className:(0,r.css)(d.Z.wizardTitleText),id:l},a||n.createElement(n.Fragment,null," "))),i&&n.createElement(c,{className:(0,r.css)(d.Z.wizardDescription),id:p},i));B.displayName="WizardHeader";const T=(e,a)=>{const{activeStep:i,setFooter:t}=g();s().useEffect((()=>{if(e&&(!a||(null==i?void 0:i.id)===a))return t(e),()=>{t(null)}}),[i,e,t,a])}},41892:(e,a,i)=>{i.d(a,{MB:()=>t,Nn:()=>p,UB:()=>u,Ud:()=>o,Xr:()=>d,eJ:()=>l,v_:()=>n,yG:()=>c});var t,n,s=i(28416),r=i.n(s);function d(e){return"function"==typeof e||r().isValidElement(e)}function l(e){return"function"==typeof e||r().isValidElement(e)}function o(e){return"function"==typeof e||r().isValidElement(e)}function c(e){return void 0===(null==e?void 0:e.subStepIds)&&!p(e)}function p(e){return void 0!==(null==e?void 0:e.parentId)}function u(e){return void 0!==(null==e?void 0:e.subStepIds)}!function(e){e.Default="default",e.Error="error"}(t||(t={})),function(e){e.Next="next",e.Back="back",e.Nav="nav"}(n||(n={}))},80159:(e,a,i)=>{i.d(a,{Z:()=>t}),i(40209);const t={button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",modalBox:"pf-v5-c-modal-box",modifiers:{finished:"pf-m-finished",expanded:"pf-m-expanded",current:"pf-m-current",expandable:"pf-m-expandable",disabled:"pf-m-disabled",noPadding:"pf-m-no-padding"},pageMainWizard:"pf-v5-c-page__main-wizard",themeDark:"pf-v5-theme-dark",wizard:"pf-v5-c-wizard",wizardClose:"pf-v5-c-wizard__close",wizardDescription:"pf-v5-c-wizard__description",wizardFooter:"pf-v5-c-wizard__footer",wizardFooterCancel:"pf-v5-c-wizard__footer-cancel",wizardHeader:"pf-v5-c-wizard__header",wizardInnerWrap:"pf-v5-c-wizard__inner-wrap",wizardMain:"pf-v5-c-wizard__main",wizardMainBody:"pf-v5-c-wizard__main-body",wizardNav:"pf-v5-c-wizard__nav",wizardNavItem:"pf-v5-c-wizard__nav-item",wizardNavLink:"pf-v5-c-wizard__nav-link",wizardNavLinkText:"pf-v5-c-wizard__nav-link-text",wizardNavLinkToggle:"pf-v5-c-wizard__nav-link-toggle",wizardNavLinkToggleIcon:"pf-v5-c-wizard__nav-link-toggle-icon",wizardNavList:"pf-v5-c-wizard__nav-list",wizardOuterWrap:"pf-v5-c-wizard__outer-wrap",wizardTitle:"pf-v5-c-wizard__title",wizardTitleText:"pf-v5-c-wizard__title-text",wizardToggle:"pf-v5-c-wizard__toggle",wizardToggleIcon:"pf-v5-c-wizard__toggle-icon",wizardToggleList:"pf-v5-c-wizard__toggle-list",wizardToggleListItem:"pf-v5-c-wizard__toggle-list-item",wizardToggleNum:"pf-v5-c-wizard__toggle-num",wizardToggleSeparator:"pf-v5-c-wizard__toggle-separator"}}}]);
//# sourceMappingURL=../sourcemaps/4241.fdafa57f3fa6b6b62f7082c40b1f4d5e.js.map
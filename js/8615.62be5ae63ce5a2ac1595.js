(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8615,5467,8596],{22025:(e,n,t)=>{"use strict";t.d(n,{k:()=>c});var s=t(65353),l=t(28416),a=t(47376),r=t(38296);const i=e=>{var{children:n,className:t="",label:i="",titleId:c,innerRef:o,labelHeadingLevel:d="h1"}=e,u=(0,s.__rest)(e,["children","className","label","titleId","innerRef","labelHeadingLevel"]);const p="function"==typeof i?i:d;return l.createElement("section",Object.assign({},u,{className:(0,r.css)(a.Z.menuGroup,t),ref:o}),l.createElement(l.Fragment,null,["function","string"].includes(typeof i)?l.createElement(p,{className:(0,r.css)(a.Z.menuGroupTitle),id:c},i):i,n))},c=l.forwardRef(((e,n)=>l.createElement(i,Object.assign({},e,{innerRef:n}))));c.displayName="MenuGroup"},82212:(e,n,t)=>{"use strict";t.d(n,{P:()=>p});var s=t(65353),l=t(28416),a=t.n(l),r=t(38296),i=t(47680),c=t(56726),o=t(69121),d=t(62472);const u=e=>{var{children:n,className:t,onSelect:l,isOpen:u,selected:f,toggle:v,shouldFocusToggleOnSelect:g=!1,onOpenChange:m,onOpenChangeKeys:b=["Escape","Tab"],isPlain:N,innerRef:O,zIndex:h=9999,role:E="listbox",popperProps:y}=e,R=(0,s.__rest)(e,["children","className","onSelect","isOpen","selected","toggle","shouldFocusToggleOnSelect","onOpenChange","onOpenChangeKeys","isPlain","innerRef","zIndex","role","popperProps"]);const S=a().useRef(),w=a().useRef(),k=O||S,I="function"==typeof v||"function"!=typeof v&&!v.toggleRef?w:null==v?void 0:v.toggleRef;a().useEffect((()=>{const e=e=>{var n,t,s;u&&m&&((null===(n=k.current)||void 0===n?void 0:n.contains(e.target))||(null===(t=I.current)||void 0===t?void 0:t.contains(e.target)))&&b.includes(e.key)&&(e.preventDefault(),m(!1),null===(s=I.current)||void 0===s||s.focus())},n=e=>{var n,t,s;u&&(null===(n=I.current)||void 0===n?void 0:n.contains(e.target))&&0===e.detail&&setTimeout((()=>{var e;const n=null===(e=null==k?void 0:k.current)||void 0===e?void 0:e.querySelector("li button:not(:disabled),li input:not(:disabled)");n&&n.focus()}),0),u&&m&&!(null===(t=null==I?void 0:I.current)||void 0===t?void 0:t.contains(e.target))&&u&&!(null===(s=k.current)||void 0===s?void 0:s.contains(e.target))&&m(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",n),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",n)}}),[u,k,I,m,b]);const _=a().createElement(i.v,Object.assign({role:E,className:(0,r.css)(t),ref:k,onSelect:(e,n)=>{l&&l(e,n),g&&I.current.focus()},isPlain:N,selected:f},(0,d.getOUIAProps)(p.displayName,void 0!==R.ouiaId?R.ouiaId:(0,d.getDefaultOUIAId)(p.displayName),void 0===R.ouiaSafe||R.ouiaSafe),R),a().createElement(c.D,null,n));return a().createElement(o.Popper,Object.assign({trigger:"function"==typeof v?v(I):v.toggleNode,triggerRef:I,popper:_,popperRef:k,isVisible:u,zIndex:h},y))},p=a().forwardRef(((e,n)=>a().createElement(u,Object.assign({innerRef:n},e))));p.displayName="Select"},41309:(e,n,t)=>{"use strict";t.d(n,{E:()=>c});var s=t(65353),l=t(28416),a=t.n(l),r=t(38296),i=t(46820);const c=e=>{var{children:n,className:t,isAriaMultiselectable:l=!1}=e,c=(0,s.__rest)(e,["children","className","isAriaMultiselectable"]);return a().createElement(i.q,Object.assign({isAriaMultiselectable:l,className:(0,r.css)(t)},c),n)};c.displayName="SelectList"},92694:(e,n,t)=>{"use strict";t.d(n,{$:()=>o});var s=t(65353),l=t(28416),a=t.n(l),r=t(38296),i=t(49732);const c=e=>{var{children:n,className:t,innerRef:l,value:c}=e,o=(0,s.__rest)(e,["children","className","innerRef","value"]);return a().createElement(i.s,Object.assign({itemId:c,ref:l,className:(0,r.css)(t)},o),n)},o=a().forwardRef(((e,n)=>a().createElement(c,Object.assign({},e,{innerRef:n}))));o.displayName="SelectOption"},68596:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Select:()=>s.P,SelectGroup:()=>o,SelectList:()=>d.E,SelectOption:()=>u.$});var s=t(82212),l=t(65353),a=t(28416),r=t.n(a),i=t(38296),c=t(22025);const o=e=>{var{children:n,className:t,label:s}=e,a=(0,l.__rest)(e,["children","className","label"]);return r().createElement(c.k,Object.assign({className:(0,i.css)(t),label:s},a),n)};o.displayName="SelectGroup";var d=t(41309),u=t(92694)},45467:()=>{},32857:()=>{},98379:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8615.2605aa0be517189565ac66c55914d872.js.map
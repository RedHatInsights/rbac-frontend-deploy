(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2653,5467,8596],{22025:(e,n,t)=>{"use strict";t.d(n,{k:()=>c});var s=t(65353),l=t(66029),a=t(47376),r=t(38296);const i=e=>{var{children:n,className:t="",label:i="",titleId:c,innerRef:o,labelHeadingLevel:u="h1"}=e,d=(0,s.__rest)(e,["children","className","label","titleId","innerRef","labelHeadingLevel"]);const m="function"==typeof i?i:u;return l.createElement("section",Object.assign({},d,{className:(0,r.css)(a.Z.menuGroup,t),ref:o}),l.createElement(l.Fragment,null,["function","string"].includes(typeof i)?l.createElement(m,{className:(0,r.css)(a.Z.menuGroupTitle),id:c},i):i,n))},c=l.forwardRef(((e,n)=>l.createElement(i,Object.assign({},e,{innerRef:n}))));c.displayName="MenuGroup"},82212:(e,n,t)=>{"use strict";t.d(n,{P:()=>m});var s=t(65353),l=t(66029),a=t.n(l),r=t(38296),i=t(47680),c=t(69579),o=t(69121),u=t(62472);const d=e=>{var{children:n,className:t,onSelect:l,isOpen:d,selected:p,toggle:g,shouldFocusToggleOnSelect:f=!1,shouldFocusFirstItemOnOpen:v=!0,onOpenChange:b,onOpenChangeKeys:h=["Escape","Tab"],isPlain:O,innerRef:N,zIndex:E=9999,role:S="listbox",popperProps:y,menuHeight:R,maxMenuHeight:w,isScrollable:I}=e,k=(0,s.__rest)(e,["children","className","onSelect","isOpen","selected","toggle","shouldFocusToggleOnSelect","shouldFocusFirstItemOnOpen","onOpenChange","onOpenChangeKeys","isPlain","innerRef","zIndex","role","popperProps","menuHeight","maxMenuHeight","isScrollable"]);const _=a().useRef(),j=a().useRef(),P=N||_,H="function"==typeof g||"function"!=typeof g&&!g.toggleRef?j:null==g?void 0:g.toggleRef;a().useEffect((()=>{const e=e=>{var n,t,s;d&&b&&((null===(n=P.current)||void 0===n?void 0:n.contains(e.target))||(null===(t=H.current)||void 0===t?void 0:t.contains(e.target)))&&h.includes(e.key)&&(e.preventDefault(),b(!1),null===(s=H.current)||void 0===s||s.focus())},n=e=>{var n,t,s;d&&v&&(null===(n=H.current)||void 0===n?void 0:n.contains(e.target))&&setTimeout((()=>{var e;const n=null===(e=null==P?void 0:P.current)||void 0===e?void 0:e.querySelector("li button:not(:disabled),li input:not(:disabled)");n&&n.focus()}),0),d&&b&&!(null===(t=null==H?void 0:H.current)||void 0===t?void 0:t.contains(e.target))&&d&&!(null===(s=P.current)||void 0===s?void 0:s.contains(e.target))&&b(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",n),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",n)}}),[d,P,H,b,h]);const L=a().createElement(i.v,Object.assign({role:S,className:(0,r.css)(t),ref:P,onSelect:(e,n)=>{l&&l(e,n),f&&H.current.focus()},isPlain:O,selected:p,isScrollable:I},(0,u.getOUIAProps)(m.displayName,void 0!==k.ouiaId?k.ouiaId:(0,u.getDefaultOUIAId)(m.displayName),void 0===k.ouiaSafe||k.ouiaSafe),k),a().createElement(c.D,{menuHeight:R,maxMenuHeight:w},n));return a().createElement(o.Popper,Object.assign({trigger:"function"==typeof g?g(H):g.toggleNode,triggerRef:H,popper:L,popperRef:P,isVisible:d,zIndex:E},y))},m=a().forwardRef(((e,n)=>a().createElement(d,Object.assign({innerRef:n},e))));m.displayName="Select"},41309:(e,n,t)=>{"use strict";t.d(n,{E:()=>c});var s=t(65353),l=t(66029),a=t.n(l),r=t(38296),i=t(46820);const c=e=>{var{children:n,className:t,isAriaMultiselectable:l=!1}=e,c=(0,s.__rest)(e,["children","className","isAriaMultiselectable"]);return a().createElement(i.q,Object.assign({isAriaMultiselectable:l,className:(0,r.css)(t)},c),n)};c.displayName="SelectList"},92694:(e,n,t)=>{"use strict";t.d(n,{$:()=>o});var s=t(65353),l=t(66029),a=t.n(l),r=t(38296),i=t(49732);const c=e=>{var{children:n,className:t,innerRef:l,value:c}=e,o=(0,s.__rest)(e,["children","className","innerRef","value"]);return a().createElement(i.s,Object.assign({itemId:c,ref:l,className:(0,r.css)(t)},o),n)},o=a().forwardRef(((e,n)=>a().createElement(c,Object.assign({},e,{innerRef:n}))));o.displayName="SelectOption"},68596:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Select:()=>s.P,SelectGroup:()=>o,SelectList:()=>u.E,SelectOption:()=>d.$});var s=t(82212),l=t(65353),a=t(66029),r=t.n(a),i=t(38296),c=t(22025);const o=e=>{var{children:n,className:t,label:s}=e,a=(0,l.__rest)(e,["children","className","label"]);return r().createElement(c.k,Object.assign({className:(0,i.css)(t),label:s},a),n)};o.displayName="SelectGroup";var u=t(41309),d=t(92694)},45467:()=>{},58392:()=>{},32857:()=>{},30187:()=>{},98379:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2653.059ed40e421e1a12f8bd8befc33c15dc.js.map
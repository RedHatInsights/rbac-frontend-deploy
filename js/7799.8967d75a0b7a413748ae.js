"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[7799],{23874:(e,n,t)=>{t.d(n,{r:()=>c});var l=t(8674),s=t(93345),a=t(88144),r=t(33774);const i=e=>{var{children:n,className:t="",label:i="",titleId:c,innerRef:o,labelHeadingLevel:d="h1"}=e,u=(0,l.__rest)(e,["children","className","label","titleId","innerRef","labelHeadingLevel"]);const m="function"==typeof i?i:d;return s.createElement("section",Object.assign({},u,{className:(0,r.css)(a.A.menuGroup,t),ref:o}),s.createElement(s.Fragment,null,["function","string"].includes(typeof i)?s.createElement(m,{className:(0,r.css)(a.A.menuGroupTitle),id:c},i):i,n))},c=s.forwardRef(((e,n)=>s.createElement(i,Object.assign({},e,{innerRef:n}))));c.displayName="MenuGroup"},22563:(e,n,t)=>{t.d(n,{l:()=>m});var l=t(8674),s=t(93345),a=t.n(s),r=t(33774),i=t(74225),c=t(94494),o=t(17694),d=t(31398);const u=e=>{var{children:n,className:t,onSelect:s,isOpen:u,selected:p,toggle:g,shouldFocusToggleOnSelect:f=!1,shouldFocusFirstItemOnOpen:v=!0,onOpenChange:b,onOpenChangeKeys:h=["Escape","Tab"],isPlain:O,innerRef:N,zIndex:S=9999,role:y="listbox",popperProps:E,menuHeight:R,maxMenuHeight:w,isScrollable:I}=e,_=(0,l.__rest)(e,["children","className","onSelect","isOpen","selected","toggle","shouldFocusToggleOnSelect","shouldFocusFirstItemOnOpen","onOpenChange","onOpenChangeKeys","isPlain","innerRef","zIndex","role","popperProps","menuHeight","maxMenuHeight","isScrollable"]);const j=a().useRef(),k=a().useRef(),H=N||j,L="function"==typeof g||"function"!=typeof g&&!g.toggleRef?k:null==g?void 0:g.toggleRef;a().useEffect((()=>{const e=e=>{var n,t,l;u&&b&&((null===(n=H.current)||void 0===n?void 0:n.contains(e.target))||(null===(t=L.current)||void 0===t?void 0:t.contains(e.target)))&&h.includes(e.key)&&(e.preventDefault(),b(!1),null===(l=L.current)||void 0===l||l.focus())},n=e=>{var n,t,l;u&&v&&(null===(n=L.current)||void 0===n?void 0:n.contains(e.target))&&setTimeout((()=>{var e;const n=null===(e=null==H?void 0:H.current)||void 0===e?void 0:e.querySelector("li button:not(:disabled),li input:not(:disabled)");n&&n.focus()}),0),u&&b&&!(null===(t=null==L?void 0:L.current)||void 0===t?void 0:t.contains(e.target))&&u&&!(null===(l=H.current)||void 0===l?void 0:l.contains(e.target))&&b(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",n),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",n)}}),[u,H,L,b,h]);const x=a().createElement(i.W,Object.assign({role:y,className:(0,r.css)(t),ref:H,onSelect:(e,n)=>{s&&s(e,n),f&&L.current.focus()},isPlain:O,selected:p,isScrollable:I},(0,d.getOUIAProps)(m.displayName,void 0!==_.ouiaId?_.ouiaId:(0,d.getDefaultOUIAId)(m.displayName),void 0===_.ouiaSafe||_.ouiaSafe),_),a().createElement(c.r,{menuHeight:R,maxMenuHeight:w},n));return a().createElement(o.Popper,Object.assign({trigger:"function"==typeof g?g(L):g.toggleNode,triggerRef:L,popper:x,popperRef:H,isVisible:u,zIndex:S},E))},m=a().forwardRef(((e,n)=>a().createElement(u,Object.assign({innerRef:n},e))));m.displayName="Select"},81995:(e,n,t)=>{t.d(n,{B:()=>c});var l=t(8674),s=t(93345),a=t.n(s),r=t(33774),i=t(75797);const c=e=>{var{children:n,className:t,isAriaMultiselectable:s=!1}=e,c=(0,l.__rest)(e,["children","className","isAriaMultiselectable"]);return a().createElement(i.c,Object.assign({isAriaMultiselectable:s,className:(0,r.css)(t)},c),n)};c.displayName="SelectList"},97862:(e,n,t)=>{t.d(n,{O:()=>o});var l=t(8674),s=t(93345),a=t.n(s),r=t(33774),i=t(64361);const c=e=>{var{children:n,className:t,innerRef:s,value:c}=e,o=(0,l.__rest)(e,["children","className","innerRef","value"]);return a().createElement(i.D,Object.assign({itemId:c,ref:s,className:(0,r.css)(t)},o),n)},o=a().forwardRef(((e,n)=>a().createElement(c,Object.assign({},e,{innerRef:n}))));o.displayName="SelectOption"},77799:(e,n,t)=>{t.r(n),t.d(n,{Select:()=>l.l,SelectGroup:()=>o,SelectList:()=>d.B,SelectOption:()=>u.O});var l=t(22563),s=t(8674),a=t(93345),r=t.n(a),i=t(33774),c=t(23874);const o=e=>{var{children:n,className:t,label:l}=e,a=(0,s.__rest)(e,["children","className","label"]);return r().createElement(c.r,Object.assign({className:(0,i.css)(t),label:l},a),n)};o.displayName="SelectGroup";var d=t(81995),u=t(97862)}}]);
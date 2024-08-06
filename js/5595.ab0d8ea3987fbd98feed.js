"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[5595],{55401:(e,t,n)=>{n.d(t,{_s:()=>c,iG:()=>r,l9:()=>d});var r,i=n(8674),a=n(44914),o=n(18088),l=n(33774);!function(e){e.default="default",e.light200="light-200",e.noBackground="no-background"}(r||(r={}));const d=a.createContext({isExpanded:!1,isStatic:!1,onExpand:()=>{},position:"end",drawerRef:null,drawerContentRef:null,isInline:!1}),c=e=>{var{className:t="",children:n,isExpanded:r=!1,isInline:c=!1,isStatic:s=!1,position:u="end",onExpand:m=()=>{}}=e,p=(0,i.__rest)(e,["className","children","isExpanded","isInline","isStatic","position","onExpand"]);const g=a.useRef(),f=a.useRef();return a.createElement(d.Provider,{value:{isExpanded:r,isStatic:s,onExpand:m,position:u,drawerRef:g,drawerContentRef:f,isInline:c}},a.createElement("div",Object.assign({className:(0,l.css)(o.A.drawer,r&&o.A.modifiers.expanded,c&&o.A.modifiers.inline,s&&o.A.modifiers.static,("left"===u||"start"===u)&&o.A.modifiers.panelLeft,"bottom"===u&&o.A.modifiers.panelBottom,t),ref:g},p),n))};c.displayName="Drawer"},30130:(e,t,n)=>{n.d(t,{z:()=>c});var r=n(8674),i=n(44914),a=n(18088),o=n(33774);const l=e=>{var{className:t="",children:n}=e,l=(0,r.__rest)(e,["className","children"]);return i.createElement("div",Object.assign({className:(0,o.css)(a.A.drawerMain,t)},l),n)};l.displayName="DrawerMain";var d=n(55401);const c=e=>{var{className:t="",children:n,panelContent:c,colorVariant:s=d.iG.default}=e,u=(0,r.__rest)(e,["className","children","panelContent","colorVariant"]);const{drawerContentRef:m}=i.useContext(d.l9);return i.createElement(l,null,i.createElement("div",Object.assign({className:(0,o.css)(a.A.drawerContent,s===d.iG.light200&&a.A.modifiers.light_200,s===d.iG.noBackground&&a.A.modifiers.noBackground,t),ref:m},u),n),c)};c.displayName="DrawerContent"},35900:(e,t,n)=>{n.d(t,{J:()=>l});var r=n(8674),i=n(44914),a=n(18088),o=n(33774);const l=e=>{var{className:t="",children:n,hasPadding:l=!1}=e,d=(0,r.__rest)(e,["className","children","hasPadding"]);return i.createElement("div",Object.assign({className:(0,o.css)(a.A.drawerBody,l&&a.A.modifiers.padding,t)},d),n)};l.displayName="DrawerContentBody"},64210:(e,t,n)=>{n.d(t,{X:()=>h});var r=n(8674),i=n(44914),a=n(18088),o=n(33774),l=n(55401),d=n(47931),c=n(65518),s=n(53884);const u="--pf-v5-c-drawer__panel--md--FlexBasis",m="--pf-v5-c-drawer__panel--md--FlexBasis--min",p="--pf-v5-c-drawer__panel--md--FlexBasis--max";let g=null,f=0;const h=e=>{var{className:t="",id:n,children:h,hasNoBorder:w=!1,isResizable:v=!1,onResize:_,minSize:C,defaultSize:R,maxSize:B,increment:x=5,resizeAriaLabel:b="Resize",widths:E,colorVariant:A=l.iG.default,focusTrap:O}=e,N=(0,r.__rest)(e,["className","id","children","hasNoBorder","isResizable","onResize","minSize","defaultSize","maxSize","increment","resizeAriaLabel","widths","colorVariant","focusTrap"]);const L=i.useRef(),y=i.useRef(),[z,S]=i.useState(0),{position:k,isExpanded:D,isStatic:P,onExpand:X,drawerRef:F,drawerContentRef:I,isInline:T}=i.useContext(l.l9),M=!P&&!D,[G,j]=i.useState(!M),[J,V]=i.useState(!1),H=i.useRef(null);let U,Y,K,q,Q=0,W=!0;P&&(null==O?void 0:O.enabled)&&console.warn("DrawerPanelContent: The focusTrap.enabled prop cannot be true if the Drawer's isStatic prop is true. This will cause a permanent focus trap."),i.useEffect((()=>{!P&&D&&j(D)}),[P,D]);const Z=()=>{let e,t;const n="rtl"===(0,d.iJ)(L.current);!T||"end"!==k&&"right"!==k?!T||"start"!==k&&"left"!==k?"end"===k||"right"===k?n?(e=I.current.getBoundingClientRect().left-y.current.getBoundingClientRect().right,t=I.current.getBoundingClientRect().left-I.current.getBoundingClientRect().right):(e=I.current.getBoundingClientRect().right-y.current.getBoundingClientRect().left,t=I.current.getBoundingClientRect().right-I.current.getBoundingClientRect().left):"start"===k||"left"===k?n?(e=y.current.getBoundingClientRect().left-I.current.getBoundingClientRect().right,t=I.current.getBoundingClientRect().left-I.current.getBoundingClientRect().right):(e=y.current.getBoundingClientRect().right-I.current.getBoundingClientRect().left,t=I.current.getBoundingClientRect().right-I.current.getBoundingClientRect().left):"bottom"===k&&(e=I.current.getBoundingClientRect().bottom-y.current.getBoundingClientRect().top,t=I.current.getBoundingClientRect().bottom-I.current.getBoundingClientRect().top):n?(e=y.current.getBoundingClientRect().left-L.current.getBoundingClientRect().right,t=F.current.getBoundingClientRect().left-F.current.getBoundingClientRect().right):(e=y.current.getBoundingClientRect().right-L.current.getBoundingClientRect().left,t=F.current.getBoundingClientRect().right-F.current.getBoundingClientRect().left):n?(e=L.current.getBoundingClientRect().left-y.current.getBoundingClientRect().right,t=F.current.getBoundingClientRect().left-F.current.getBoundingClientRect().right):(e=L.current.getBoundingClientRect().right-y.current.getBoundingClientRect().left,t=F.current.getBoundingClientRect().right-F.current.getBoundingClientRect().left);const r=e/t*100;return Math.round(100*(r+Number.EPSILON))/100},$=e=>{e.stopPropagation(),document.addEventListener("touchmove",ie,{passive:!1}),document.addEventListener("touchend",re),g=!0},ee=e=>{e.stopPropagation(),e.preventDefault(),document.addEventListener("mousemove",ne),document.addEventListener("mouseup",ae),F.current.classList.add((0,o.css)(a.A.modifiers.resizing)),g=!0,W=!0},te=(e,t)=>{const n="rtl"===(0,d.iJ)(L.current);if(e.stopPropagation(),!g)return;W&&(U=L.current.getBoundingClientRect(),n?(K=U.right,Y=U.left):(Y=U.right,K=U.left),q=U.bottom,W=!1);let r=0;r="end"===k||"right"===k?n?t-Y:Y-t:"start"===k||"left"===k?n?K-t:t-K:q-t,"bottom"===k&&(L.current.style.overflowAnchor="none"),L.current.style.setProperty(u,r+"px"),Q=r,S(Z())},ne=i.useCallback((e=>{const t="bottom"===k?e.clientY:e.clientX;te(e,t)}),[]),re=i.useCallback((e=>{e.stopPropagation(),g&&(g=!1,_&&_(e,Q,n),document.removeEventListener("touchmove",ie),document.removeEventListener("touchend",re))}),[]),ie=i.useCallback((e=>{e.preventDefault(),e.stopImmediatePropagation();const t="bottom"===k?e.touches[0].clientY:e.touches[0].clientX;te(e,t)}),[]),ae=i.useCallback((e=>{g&&(F.current.classList.remove((0,o.css)(a.A.modifiers.resizing)),g=!1,_&&_(e,Q,n),W=!0,document.removeEventListener("mousemove",ne),document.removeEventListener("mouseup",ae))}),[]),oe=e=>{const t="rtl"===(0,d.iJ)(L.current),r=e.key;if("Escape"!==r&&"Enter"!==r&&"ArrowUp"!==r&&"ArrowDown"!==r&&"ArrowLeft"!==r&&"ArrowRight"!==r)return void(g&&e.preventDefault());e.preventDefault(),"Escape"!==r&&"Enter"!==r||_&&_(e,Q,n);const i=L.current.getBoundingClientRect();f="bottom"===k?i.height:i.width;let a=0;"ArrowRight"===r?a=t?"left"===k||"start"===k?-x:x:"left"===k||"start"===k?x:-x:"ArrowLeft"===r?a=t?"left"===k||"start"===k?x:-x:"left"===k||"start"===k?-x:x:"ArrowUp"===r?a=x:"ArrowDown"===r&&(a=-x),f+=a,"bottom"===k&&(L.current.style.overflowAnchor="none"),L.current.style.setProperty(u,f+"px"),Q=f,S(Z())},le={};R&&(le[u]=R),C&&(le[m]=C),B&&(le[p]=B);const de=(null==O?void 0:O.enabled)&&!P,ce=de?s.s:"div";return i.createElement(c.N,{prefix:"pf-drawer-panel-"},(e=>{const r={tabIndex:-1,"aria-modal":!0,role:"dialog",active:J,"aria-labelledby":(null==O?void 0:O["aria-labelledby"])||n||e,focusTrapOptions:{fallbackFocus:()=>L.current,onActivate:()=>{H.current!==document.activeElement&&(H.current=document.activeElement)},onDeactivate:()=>{H.current&&H.current.focus&&H.current.focus()},clickOutsideDeactivates:!0,returnFocusOnDeactivate:!1,initialFocus:(null==O?void 0:O.elementToFocusOnExpand)||void 0,escapeDeactivates:!1}};return i.createElement(ce,Object.assign({},de&&r,{id:n||e,className:(0,o.css)(a.A.drawerPanel,v&&a.A.modifiers.resizable,w&&a.A.modifiers.noBorder,(0,d.ay)(E,a.A),A===l.iG.light200&&a.A.modifiers.light_200,A===l.iG.noBackground&&a.A.modifiers.noBackground,t),onTransitionEnd:e=>{e.target===L.current&&(M||"transform"!==e.nativeEvent.propertyName||X(e),j(!M),de&&"transform"===e.nativeEvent.propertyName&&V((e=>!e)))},hidden:M},(R||C||B)&&{style:le},N,{ref:L}),G&&i.createElement(i.Fragment,null,v&&i.createElement(i.Fragment,null,i.createElement("div",{className:(0,o.css)(a.A.drawerSplitter,"bottom"!==k&&a.A.modifiers.vertical),role:"separator",tabIndex:0,"aria-orientation":"bottom"===k?"horizontal":"vertical","aria-label":b,"aria-valuenow":z,"aria-valuemin":0,"aria-valuemax":100,"aria-controls":n||e,onMouseDown:ee,onKeyDown:oe,onTouchStart:$,ref:y},i.createElement("div",{className:(0,o.css)(a.A.drawerSplitterHandle),"aria-hidden":!0})),i.createElement("div",{className:(0,o.css)(a.A.drawerPanelMain)},h)),!v&&h))}))};h.displayName="DrawerPanelContent"},18088:(e,t,n)=>{n.d(t,{A:()=>r}),n(86893);const r={dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",drawerActions:"pf-v5-c-drawer__actions",drawerBody:"pf-v5-c-drawer__body",drawerClose:"pf-v5-c-drawer__close",drawerContent:"pf-v5-c-drawer__content",drawerHead:"pf-v5-c-drawer__head",drawerMain:"pf-v5-c-drawer__main",drawerPanel:"pf-v5-c-drawer__panel",drawerPanelMain:"pf-v5-c-drawer__panel-main",drawerSection:"pf-v5-c-drawer__section",drawerSplitter:"pf-v5-c-drawer__splitter",drawerSplitterHandle:"pf-v5-c-drawer__splitter-handle",modifiers:{panelBottom:"pf-m-panel-bottom",inline:"pf-m-inline",noBorder:"pf-m-no-border",resizable:"pf-m-resizable",static:"pf-m-static",panelLeft:"pf-m-panel-left",expanded:"pf-m-expanded",resizing:"pf-m-resizing",noBackground:"pf-m-no-background",light_200:"pf-m-light-200",noPadding:"pf-m-no-padding",padding:"pf-m-padding",vertical:"pf-m-vertical",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",width_100:"pf-m-width-100",width_25OnLg:"pf-m-width-25-on-lg",width_33OnLg:"pf-m-width-33-on-lg",width_50OnLg:"pf-m-width-50-on-lg",width_66OnLg:"pf-m-width-66-on-lg",width_75OnLg:"pf-m-width-75-on-lg",width_100OnLg:"pf-m-width-100-on-lg",width_25OnXl:"pf-m-width-25-on-xl",width_33OnXl:"pf-m-width-33-on-xl",width_50OnXl:"pf-m-width-50-on-xl",width_66OnXl:"pf-m-width-66-on-xl",width_75OnXl:"pf-m-width-75-on-xl",width_100OnXl:"pf-m-width-100-on-xl",width_25On_2xl:"pf-m-width-25-on-2xl",width_33On_2xl:"pf-m-width-33-on-2xl",width_50On_2xl:"pf-m-width-50-on-2xl",width_66On_2xl:"pf-m-width-66-on-2xl",width_75On_2xl:"pf-m-width-75-on-2xl",width_100On_2xl:"pf-m-width-100-on-2xl",inlineOnLg:"pf-m-inline-on-lg",staticOnLg:"pf-m-static-on-lg",inlineOnXl:"pf-m-inline-on-xl",staticOnXl:"pf-m-static-on-xl",inlineOn_2xl:"pf-m-inline-on-2xl",staticOn_2xl:"pf-m-static-on-2xl"},pageMain:"pf-v5-c-page__main",themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/5595.fa22773f8063030a0b60f0a5ae115997.js.map
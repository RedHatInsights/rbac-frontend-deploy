"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2057],{23874:(e,n,t)=>{t.d(n,{r:()=>c});var r=t(8674),a=t(93345),s=t(88144),i=t(33774);const l=e=>{var{children:n,className:t="",label:l="",titleId:c,innerRef:u,labelHeadingLevel:o="h1"}=e,d=(0,r.__rest)(e,["children","className","label","titleId","innerRef","labelHeadingLevel"]);const m="function"==typeof l?l:o;return a.createElement("section",Object.assign({},d,{className:(0,i.css)(s.A.menuGroup,t),ref:u}),a.createElement(a.Fragment,null,["function","string"].includes(typeof l)?a.createElement(m,{className:(0,i.css)(s.A.menuGroupTitle),id:c},l):l,n))},c=a.forwardRef(((e,n)=>a.createElement(l,Object.assign({},e,{innerRef:n}))));c.displayName="MenuGroup"},62057:(e,n,t)=>{t.r(n),t.d(n,{DrilldownMenu:()=>M,Menu:()=>r.W,MenuBreadcrumb:()=>h,MenuContainer:()=>N,MenuContent:()=>a.r,MenuFooter:()=>o,MenuGroup:()=>v.r,MenuItem:()=>p.D,MenuItemAction:()=>g.X,MenuList:()=>f.c,MenuSearch:()=>d,MenuSearchInput:()=>m});var r=t(74225),a=t(94494),s=t(8674),i=t(93345),l=t.n(i),c=t(88144),u=t(33774);const o=e=>{var{children:n,className:t=""}=e,r=(0,s.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({},r,{className:(0,u.css)(c.A.menuFooter,t)}),n)};o.displayName="MenuFooter";const d=i.forwardRef(((e,n)=>i.createElement("div",Object.assign({},e,{className:(0,u.css)(c.A.menuSearch,e.className),ref:n}))));d.displayName="MenuSearch";const m=i.forwardRef(((e,n)=>i.createElement("div",Object.assign({},e,{className:(0,u.css)(`${c.A.menuSearch}-input`,e.className),ref:n}))));m.displayName="MenuSearchInput";var v=t(23874),p=t(64361),f=t(75797),g=t(49308),b=t(10874);const M=e=>{var{children:n,id:t,isMenuDrilledIn:i=!1,getHeight:c}=e,u=(0,s.__rest)(e,["children","id","isMenuDrilledIn","getHeight"]);return l().createElement(b.x.Consumer,null,(e=>{var{menuId:o,parentMenu:d,flyoutRef:m,setFlyoutRef:v,disableHover:p}=e,g=(0,s.__rest)(e,["menuId","parentMenu","flyoutRef","setFlyoutRef","disableHover"]);return l().createElement(r.W,Object.assign({id:t,parentMenu:o,isMenuDrilledIn:i,isRootMenu:!1,ref:l().createRef()},g,u),l().createElement(a.r,{getHeight:c},l().createElement(f.c,null,n)))}))};M.displayName="DrilldownMenu";const h=e=>{var{children:n}=e,t=(0,s.__rest)(e,["children"]);return l().createElement("div",Object.assign({className:(0,u.css)(c.A.menuBreadcrumb)},t),n)};h.displayName="MenuBreadcrumb";var E=t(17694);const N=({menu:e,menuRef:n,isOpen:t,toggle:r,toggleRef:a,onOpenChange:s,zIndex:i=9999,popperProps:c,onOpenChangeKeys:u=["Escape","Tab"]})=>(l().useEffect((()=>{const e=e=>{var r,i,l;(t&&s&&(null===(r=n.current)||void 0===r?void 0:r.contains(e.target))||(null===(i=a.current)||void 0===i?void 0:i.contains(e.target)))&&u.includes(e.key)&&(s(!1),null===(l=a.current)||void 0===l||l.focus())},r=e=>{var r,i,l;t&&(null===(r=a.current)||void 0===r?void 0:r.contains(e.target))&&setTimeout((()=>{var e;const t=null===(e=null==n?void 0:n.current)||void 0===e?void 0:e.querySelector('li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])');t&&t.focus()}),0),t&&s&&!(null===(i=null==a?void 0:a.current)||void 0===i?void 0:i.contains(e.target))&&t&&!(null===(l=n.current)||void 0===l?void 0:l.contains(e.target))&&s(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",r),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",r)}}),[t,n,s,u,a]),l().createElement(E.Popper,Object.assign({trigger:r,triggerRef:a,popper:e,popperRef:n,isVisible:t,zIndex:i},c)));N.displayName="MenuContainer"}}]);
"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[2528,1398],{83873:(e,t,n)=>{n.d(t,{S:()=>d});var i=n(8674),a=n(44914),l=n(48280),o=n(33774),s=n(31398),r=n(57709);const c=()=>{};class d extends a.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},this.state={ouiaStateId:(0,s.getDefaultOUIAId)(d.displayName)}}render(){const e=this.props,{"aria-label":t,className:n,inputClassName:m,onChange:u,isLabelWrapped:p,isLabelBeforeButton:f,isValid:h,isDisabled:g,isRequired:v,isChecked:b,label:I,checked:w,defaultChecked:A,description:E,body:y,ouiaId:_,ouiaSafe:x,component:k}=e,L=(0,i.__rest)(e,["aria-label","className","inputClassName","onChange","isLabelWrapped","isLabelBeforeButton","isValid","isDisabled","isRequired","isChecked","label","checked","defaultChecked","description","body","ouiaId","ouiaSafe","component"]);L.id||console.error("Checkbox:","id is required to make input accessible");const C={};([!0,!1].includes(w)||!0===b)&&(C.checked=w||b),u!==c&&(C.checked=b),[!1,!0].includes(A)&&(C.defaultChecked=A);const N=a.createElement("input",Object.assign({},L,{className:(0,o.css)(l.A.checkInput,m),type:"checkbox",onChange:this.handleChange,"aria-invalid":!h,"aria-label":t,disabled:g,required:v,ref:e=>e&&(e.indeterminate=null===b)},C,(0,s.getOUIAProps)(d.displayName,void 0!==_?_:this.state.ouiaStateId,x))),M=p&&!k||"label"===k,D=M?"span":"label",S=I?a.createElement(D,{className:(0,o.css)(l.A.checkLabel,g&&l.A.modifiers.disabled),htmlFor:M?void 0:L.id},I,v&&a.createElement("span",{className:(0,o.css)(l.A.checkLabelRequired),"aria-hidden":"true"},r.L)):null,O=null!=k?k:M?"label":"div";return C.checked=null!==C.checked&&C.checked,a.createElement(O,{className:(0,o.css)(l.A.check,!I&&l.A.modifiers.standalone,n),htmlFor:M?L.id:void 0},f?a.createElement(a.Fragment,null,S,N):a.createElement(a.Fragment,null,N,S),E&&a.createElement("span",{className:(0,o.css)(l.A.checkDescription)},E),y&&a.createElement("span",{className:(0,o.css)(l.A.checkBody)},y))}}d.displayName="Checkbox",d.defaultProps={className:"",isLabelWrapped:!1,isValid:!0,isDisabled:!1,isRequired:!1,isChecked:!1,onChange:c,ouiaSafe:!0}},74225:(e,t,n)=>{n.d(t,{W:()=>f});var i=n(8674),a=n(44914),l=n(88144),o=n(35704),s=n(57776),r=n(33774),c=n(31398),d=n(10874),m=n(47931),u=n(12976);class p extends a.Component{constructor(e){super(e),this.menuRef=a.createRef(),this.activeMenu=null,this.state={ouiaStateId:(0,c.getDefaultOUIAId)(f.displayName),transitionMoveTarget:null,flyoutRef:null,disableHover:!1,currentDrilldownMenuId:this.props.id},this.handleDrilldownTransition=e=>{const t=this.menuRef.current;if(t&&(t===e.target.closest(`.${l.A.menu}`)||Array.from(t.getElementsByClassName(l.A.menu)).includes(e.target.closest(`.${l.A.menu}`))))if(this.state.transitionMoveTarget)this.state.transitionMoveTarget.focus(),this.setState({transitionMoveTarget:null});else{const e=t.querySelector("#"+this.props.activeMenu)||t||null,n=e.getElementsByTagName("UL");if(0===n.length)return;const i=Array.from(n[0].children);if(this.state.currentDrilldownMenuId&&e.id===this.state.currentDrilldownMenuId)return;this.setState({currentDrilldownMenuId:e.id});const a=i.filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(l.A.divider))))[0].firstChild;a.focus(),a.tabIndex=0}},this.handleExtraKeys=e=>{const t=this.props.containsDrilldown,n=document.activeElement;if(e.target.closest(`.${l.A.menu}`)===this.activeMenu||e.target.classList.contains(o.A.breadcrumbLink)||(this.activeMenu=e.target.closest(`.${l.A.menu}`),this.setState({disableHover:!0})),"INPUT"===e.target.tagName)return;const i=this.activeMenu,a=e.key,r=n.classList.contains(o.A.breadcrumbLink)||n.classList.contains(s.A.dropdownToggle);if(" "===a||"Enter"===a){if(e.preventDefault(),t&&!r)if(n.closest("li").classList.contains("pf-m-current-path")&&"LI"===i.parentElement.tagName)n.tabIndex=-1,i.parentElement.firstChild.tabIndex=0,this.setState({transitionMoveTarget:i.parentElement.firstChild});else if(n.nextElementSibling&&n.nextElementSibling.classList.contains(l.A.menu)){const e=Array.from(n.nextElementSibling.getElementsByTagName("UL")[0].children).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(l.A.divider))));n.tabIndex=-1,e[0].firstChild.tabIndex=0,this.setState({transitionMoveTarget:e[0].firstChild})}document.activeElement.click()}},this.createNavigableElements=()=>this.props.containsDrilldown?this.activeMenu?Array.from(this.activeMenu.getElementsByTagName("UL")[0].children).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(l.A.divider)))):[]:this.menuRef.current?Array.from(this.menuRef.current.getElementsByTagName("LI")).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(l.A.divider)))):[],e.innerRef&&(this.menuRef=e.innerRef)}allowTabFirstItem(){const e=this.menuRef.current;if(e){const t=e.querySelector("ul button:not(:disabled), ul a:not(:disabled)");t&&(t.tabIndex=0)}}componentDidMount(){this.context&&this.setState({disableHover:this.context.disableHover}),m.Sw&&window.addEventListener("transitionend",this.props.isRootMenu?this.handleDrilldownTransition:null),this.allowTabFirstItem()}componentWillUnmount(){m.Sw&&window.removeEventListener("transitionend",this.handleDrilldownTransition)}componentDidUpdate(e){e.children!==this.props.children&&this.allowTabFirstItem()}render(){const e=this.props,{id:t,children:n,className:m,onSelect:p,selected:h=null,onActionClick:g,ouiaId:v,ouiaSafe:b,containsFlyout:I,isNavFlyout:w,containsDrilldown:A,isMenuDrilledIn:E,isPlain:y,isScrollable:_,drilldownItemPath:x,drilledInMenus:k,onDrillIn:L,onDrillOut:C,onGetMenuHeight:N,parentMenu:M=null,activeItemId:D=null,innerRef:S,isRootMenu:O,activeMenu:R,role:T}=e,H=(0,i.__rest)(e,["id","children","className","onSelect","selected","onActionClick","ouiaId","ouiaSafe","containsFlyout","isNavFlyout","containsDrilldown","isMenuDrilledIn","isPlain","isScrollable","drilldownItemPath","drilledInMenus","onDrillIn","onDrillOut","onGetMenuHeight","parentMenu","activeItemId","innerRef","isRootMenu","activeMenu","role"]),P=E||k&&k.includes(t)||!1;return a.createElement(d.x.Provider,{value:{menuId:t,parentMenu:M||t,onSelect:p,onActionClick:g,activeItemId:D,selected:h,drilledInMenus:k,drilldownItemPath:x,onDrillIn:L,onDrillOut:C,onGetMenuHeight:N,flyoutRef:this.state.flyoutRef,setFlyoutRef:e=>this.setState({flyoutRef:e}),disableHover:this.state.disableHover,role:T}},O&&a.createElement(u.oV,{containerRef:this.menuRef||null,additionalKeyHandler:this.handleExtraKeys,createNavigableElements:this.createNavigableElements,isActiveElement:e=>document.activeElement.closest("li")===e||document.activeElement.parentElement===e||document.activeElement.closest(`.${l.A.menuSearch}`)===e||document.activeElement.closest("ol")&&document.activeElement.closest("ol").firstChild===e,getFocusableElement:e=>{var t,n;return"DIV"===(null==e?void 0:e.tagName)&&e.querySelector("input")||"LABEL"===(null===(t=e.firstChild)||void 0===t?void 0:t.tagName)&&e.querySelector("input")||"DIV"===(null===(n=e.firstChild)||void 0===n?void 0:n.tagName)&&e.querySelector("a, button, input")||e.firstChild},noHorizontalArrowHandling:document.activeElement&&(document.activeElement.classList.contains(o.A.breadcrumbLink)||document.activeElement.classList.contains(s.A.dropdownToggle)||"INPUT"===document.activeElement.tagName),noEnterHandling:!0,noSpaceHandling:!0}),a.createElement("div",Object.assign({id:t,className:(0,r.css)(l.A.menu,y&&l.A.modifiers.plain,_&&l.A.modifiers.scrollable,I&&l.A.modifiers.flyout,w&&l.A.modifiers.nav,A&&l.A.modifiers.drilldown,P&&l.A.modifiers.drilledIn,m),ref:this.menuRef},(0,c.getOUIAProps)(f.displayName,void 0!==v?v:this.state.ouiaStateId,b),H),n))}}p.displayName="Menu",p.contextType=d.x,p.defaultProps={ouiaSafe:!0,isRootMenu:!0,isPlain:!1,isScrollable:!1,role:"menu"};const f=a.forwardRef(((e,t)=>a.createElement(p,Object.assign({},e,{innerRef:t}))));f.displayName="Menu"},94494:(e,t,n)=>{n.d(t,{r:()=>d});var i=n(8674),a=n(44914),l=n(88144),o=n(33774),s=n(10874);const r="--pf-v5-c-menu__content--Height",c="--pf-v5-c-menu__content--MaxHeight",d=a.forwardRef(((e,t)=>{const{getHeight:n,children:d,menuHeight:m,maxMenuHeight:u}=e,p=(0,i.__rest)(e,["getHeight","children","menuHeight","maxMenuHeight"]),f=a.createRef();return a.createElement(s.x.Consumer,null,(({menuId:i,onGetMenuHeight:s})=>a.createElement("div",Object.assign({},p,{className:(0,o.css)(l.A.menuContent,e.className),ref:e=>((e,i,a)=>{if(e){let t=e.clientHeight,o=null,s=e.closest(`.${l.A.menuList}`);for(;null!==s&&1===s.nodeType;)s.classList.contains(l.A.menuList)&&(o=s),s=s.parentElement;if(o){const e=getComputedStyle(o);t+=parseFloat(e.getPropertyValue("padding-top").replace(/px/g,""))+parseFloat(e.getPropertyValue("padding-bottom").replace(/px/g,""))+parseFloat(getComputedStyle(o.parentElement).getPropertyValue("border-bottom-width").replace(/px/g,""))}a&&a(i,t),n&&n(t.toString())}return t||f})(e,i,s),style:Object.assign(Object.assign({},m&&{[r]:m}),u&&{[c]:u})}),d)))}));d.displayName="MenuContent"},10874:(e,t,n)=>{n.d(t,{q:()=>l,x:()=>a});var i=n(44914);const a=i.createContext({menuId:null,parentMenu:null,onActionClick:()=>null,onSelect:()=>null,activeItemId:null,selected:null,drilledInMenus:[],drilldownItemPath:[],onDrillIn:null,onDrillOut:null,onGetMenuHeight:()=>null,flyoutRef:null,setFlyoutRef:()=>null,disableHover:!1,role:"menu"}),l=i.createContext({itemId:null,isDisabled:!1})},64361:(e,t,n)=>{n.d(t,{D:()=>y});var i=n(8674),a=n(44914),l=n(88144),o=n(33774);const s="--pf-v5-c-menu--m-flyout__menu--top-offset",r="--pf-v5-c-menu--m-flyout__menu--m-left--right-offset",c="--pf-v5-c-menu--m-flyout__menu--left-offset";var d=n(40167),m=n(89015),u=n(91918),p=n(59779),f=n(83873),h=n(10874),g=n(49308),v=n(35280),b=n(47931),I=n(55251),w=n(65518);const A=a.createContext({direction:"right"}),E=e=>{var{children:t,className:n,itemId:E=null,to:y,hasCheckbox:_=!1,isActive:x=null,isFavorited:k=null,isLoadButton:L=!1,isLoading:C=!1,flyoutMenu:N,direction:M,description:D=null,onClick:S=()=>{},component:O="button",isDisabled:R=!1,isAriaDisabled:T=!1,isExternalLink:H=!1,isSelected:P=null,isFocused:F,isDanger:$=!1,icon:U,actions:B,onShowFlyout:q,drilldownMenu:V,isOnPath:j,innerRef:G,id:K,"aria-label":z,tooltipProps:W,rel:X,target:Z,download:J}=e,Q=(0,i.__rest)(e,["children","className","itemId","to","hasCheckbox","isActive","isFavorited","isLoadButton","isLoading","flyoutMenu","direction","description","onClick","component","isDisabled","isAriaDisabled","isExternalLink","isSelected","isFocused","isDanger","icon","actions","onShowFlyout","drilldownMenu","isOnPath","innerRef","id","aria-label","tooltipProps","rel","target","download"]);const{menuId:Y,parentMenu:ee,onSelect:te,onActionClick:ne,activeItemId:ie,selected:ae,drilldownItemPath:le,onDrillIn:oe,onDrillOut:se,flyoutRef:re,setFlyoutRef:ce,disableHover:de,role:me}=a.useContext(h.x);let ue=y?"a":O;_&&!y&&(ue="label");const[pe,fe]=a.useState(null),he=a.useContext(A),[ge,ve]=a.useState(he.direction),be=a.useRef(),Ie=be===re,we=void 0!==N,Ae=e=>{!Ie&&e?ce(be):Ie&&!e&&ce(null),q&&e&&q()};(0,I.E)((()=>{if(we&&be.current&&b.Sw){const e=be.current.lastElementChild;if(e&&e.classList.contains(l.A.menu)){const t=be.current.getClientRects()[0],n=e.getClientRects()[0];if(t&&n){const i=t.x-n.width,a=window.innerWidth-t.x-t.width-n.width;let o=ge;a<0&&"left"!==o?(ve("left"),o="left"):i<0&&"right"!==o&&(ve("right"),o="right");let d=0;i<0&&a<0&&(d="right"===o?-a:-i),"left"===o?(e.classList.add(l.A.modifiers.left),e.style.setProperty(r,`-${d}px`)):e.style.setProperty(c,`-${d}px`);const m=window.innerHeight-t.y-n.height;window.innerHeight-n.height<0&&m<0||m<0&&e.style.setProperty(s,`${m}px`)}}}}),[Ie,N]),a.useEffect((()=>{ve(he.direction)}),[he]),a.useEffect((()=>{if(pe)if(Ie){const e=pe.nextElementSibling;Array.from(e.getElementsByTagName("UL")[0].children).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(l.A.divider))))[0].firstChild.focus()}else pe.focus()}),[Ie,pe]);const Ee=e=>{const t=e.key,n=e.target,i=e.type;" "!==t&&"Enter"!==t&&"ArrowRight"!==t&&"click"!==i||(e.stopPropagation(),e.preventDefault(),Ie||(Ae(!0),fe(n))),"Escape"!==t&&"ArrowLeft"!==t||Ie&&(e.stopPropagation(),Ae(!1))},ye=(e,t)=>{T||(t&&t(e,E),S&&S(e))},_e=j&&j||le&&le.includes(E)||!1;let xe;M&&(xe="down"===M?e=>oe&&oe(e,Y,"function"==typeof V?V().props.id:V.props.id,E):e=>se&&se(e,ee,E));let ke={};"a"===ue?ke={href:y,"aria-disabled":!(!R&&!T)||null,disabled:null,target:H?"_blank":Z,rel:X,download:J}:"button"===ue&&(ke={type:"button","aria-disabled":!!T||null}),j?ke["aria-expanded"]=!0:we&&(ke["aria-haspopup"]="menu",ke["aria-expanded"]=Ie);const Le=()=>null!==P?P:null!==ae&&null!==E&&(Array.isArray(ae)&&ae.includes(E)||E===ae);a.useEffect((()=>{if(F&&be.current){const e=be.current,t=e.parentElement;if(t){const n=e.offsetTop-t.offsetTop<t.scrollTop,i=e.offsetTop-t.offsetTop+e.clientHeight;(n||i)&&e.scrollIntoView({behavior:"auto",block:"nearest"})}}}),[F]);const Ce="listbox"===me,Ne=a.createElement(a.Fragment,null,a.createElement(w.N,null,(e=>a.createElement(ue,Object.assign({id:K,tabIndex:-1,className:(0,o.css)(l.A.menuItem,Le()&&!_&&l.A.modifiers.selected,n),"aria-current":null!==x?x?"page":null:null!==E&&null!==ie?E===ie:null},!_&&{disabled:R,"aria-label":z},!_&&!N&&{role:Ce?"option":"menuitem"},!_&&!N&&Ce&&{"aria-selected":Le()},{ref:G},!_&&{onClick:e=>{T?e.preventDefault():(ye(e,te),xe&&xe(e),N&&Ee(e))}},_&&{htmlFor:e},ke),a.createElement("span",{className:(0,o.css)(l.A.menuItemMain)},"up"===M&&a.createElement("span",{className:(0,o.css)(l.A.menuItemToggleIcon)},a.createElement(u.Ay,{"aria-hidden":!0})),U&&a.createElement("span",{className:(0,o.css)(l.A.menuItemIcon)},U),_&&a.createElement("span",{className:(0,o.css)(l.A.menuItemCheck)},a.createElement(f.S,{id:e,component:"span",isChecked:P||!1,onChange:e=>ye(e,te),isDisabled:R,"aria-disabled":T})),a.createElement("span",{className:(0,o.css)(l.A.menuItemText)},t),H&&a.createElement("span",{className:(0,o.css)(l.A.menuItemExternalIcon)},a.createElement(d.default,{"aria-hidden":!0})),(N||"down"===M)&&a.createElement("span",{className:(0,o.css)(l.A.menuItemToggleIcon)},a.createElement(m.default,{"aria-hidden":!0})),Le()&&a.createElement("span",{className:(0,o.css)(l.A.menuItemSelectIcon)},a.createElement(p.default,{"aria-hidden":!0}))),D&&"up"!==M&&a.createElement("span",{className:(0,o.css)(l.A.menuItemDescription)},a.createElement("span",null,D))))),Ie&&a.createElement(h.x.Provider,{value:{disableHover:de}},a.createElement(A.Provider,{value:{direction:ge}},N)),"function"==typeof V?V():V,a.createElement(h.q.Provider,{value:{itemId:E,isDisabled:R}},B,null!==k&&a.createElement(g.X,{icon:"favorites",isFavorited:k,"aria-label":k?"starred":"not starred",onClick:e=>ne(e,E),tabIndex:-1,actionId:"fav"})));return a.createElement("li",Object.assign({className:(0,o.css)(l.A.menuListItem,R&&l.A.modifiers.disabled,T&&l.A.modifiers.ariaDisabled,_e&&l.A.modifiers.currentPath,L&&l.A.modifiers.load,C&&l.A.modifiers.loading,F&&l.A.modifiers.focus,$&&l.A.modifiers.danger,n),onMouseOver:()=>{T||de||(we?Ae(!0):ce(null))}},N&&!T&&{onKeyDown:Ee},{ref:be,role:_?"menuitem":"none"},_&&{"aria-label":z},Q),W?a.createElement(v.m,Object.assign({},W),Ne):Ne)},y=a.forwardRef(((e,t)=>a.createElement(E,Object.assign({},e,{innerRef:t}))));y.displayName="MenuItem"},49308:(e,t,n)=>{n.d(t,{X:()=>d});var i=n(8674),a=n(44914),l=n(88144),o=n(33774),s=n(3995),r=n(10874);const c=e=>{var{className:t="",icon:n,onClick:c,"aria-label":d,isFavorited:m=null,isDisabled:u,actionId:p,innerRef:f}=e,h=(0,i.__rest)(e,["className","icon","onClick","aria-label","isFavorited","isDisabled","actionId","innerRef"]);return a.createElement(r.x.Consumer,null,(({onActionClick:e})=>a.createElement(r.q.Consumer,null,(({itemId:i,isDisabled:r})=>a.createElement("button",Object.assign({className:(0,o.css)(l.A.menuItemAction,null!==m&&l.A.modifiers.favorite,m&&l.A.modifiers.favorited,t),"aria-label":d,onClick:t=>{c&&c(t),e&&e(t,i,p)}},(!0===u||!0===r)&&{disabled:!0},{ref:f,tabIndex:-1},h),a.createElement("span",{className:(0,o.css)(l.A.menuItemActionIcon)},"favorites"===n||null!==m?a.createElement(s.Ay,{"aria-hidden":!0}):n))))))},d=a.forwardRef(((e,t)=>a.createElement(c,Object.assign({},e,{innerRef:t}))));d.displayName="MenuItemAction"},75797:(e,t,n)=>{n.d(t,{c:()=>r});var i=n(8674),a=n(44914),l=n(88144),o=n(33774),s=n(10874);const r=e=>{var{children:t=null,className:n,isAriaMultiselectable:r=!1,"aria-label":c}=e,d=(0,i.__rest)(e,["children","className","isAriaMultiselectable","aria-label"]);const{role:m}=a.useContext(s.x);return a.createElement("ul",Object.assign({role:m},"listbox"===m&&{"aria-multiselectable":r},{className:(0,o.css)(l.A.menuList,n),"aria-label":c},d),t)};r.displayName="MenuList"},65518:(e,t,n)=>{n.d(t,{N:()=>o});var i=n(44914),a=n(47931);let l=0;class o extends i.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,a.LP)():l++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}o.displayName="GenerateId",o.defaultProps={prefix:"pf-random-id-",isRandom:!1}},12976:(e,t,n)=>{n.d(t,{Mo:()=>o,TH:()=>l,oV:()=>s});var i=n(44914),a=n(47931);const l=(e,t,n=e=>document.activeElement.contains(e),i=e=>e,a=["A","BUTTON","INPUT"],l=!1,o=!1,s=!0,r=!0)=>{const c=document.activeElement,d=e.key;let m=null;if(!l&&["ArrowUp","ArrowDown"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let a=-1;t.forEach(((e,l)=>{if(n(e)){let e=0;for(;!m&&e<t.length&&-1*e<t.length;)"ArrowUp"===d?e--:e++,a=l+e,a>=t.length&&(a=0),a<0&&(a=t.length-1),m=i(t[a])}}))}if(!o&&["ArrowLeft","ArrowRight"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let i=-1;t.forEach(((l,o)=>{if(n(l)){const n=t[o].querySelectorAll(a.join(","));if(!n.length||r){let e=c;for(;e;)if(e="ArrowLeft"===d?e.previousElementSibling:e.nextElementSibling,e&&a.includes(e.tagName)){m=e;break}}else n.forEach(((t,a)=>{e.target===t&&(i=a+("ArrowLeft"===d?-1:1),i>=n.length&&(i=0),i<0&&(i=n.length-1),m=n[i])}))}}))}m&&(s&&(c.tabIndex=-1,m.tabIndex=0),m.focus())},o=e=>{e&&e.length>0&&(e.forEach((e=>{e.tabIndex=-1})),e[0].tabIndex=0)};class s extends i.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:t}=this.props;if(t?!t(e):!this._isEventFromContainer(e))return;const{isActiveElement:n,getFocusableElement:i,noVerticalArrowHandling:a,noHorizontalArrowHandling:o,noEnterHandling:s,noSpaceHandling:r,updateTabIndex:c,validSiblingTags:d,additionalKeyHandler:m,createNavigableElements:u,onlyTraverseSiblings:p}=this.props;m&&m(e);const f=u();if(!f)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const h=e.key;s||"Enter"===h&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),r||" "===h&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),l(e,f,n,i,d,a,o,c,p)},this._isEventFromContainer=e=>{const{containerRef:t}=this.props;return t.current&&t.current.contains(e.target)}}componentDidMount(){a.Sw&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){a.Sw&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}s.displayName="KeyboardHandler",s.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],onlyTraverseSiblings:!0,updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},31398:(e,t,n)=>{n.r(t),n.d(t,{getDefaultOUIAId:()=>d,getOUIAProps:()=>s,useOUIAId:()=>c,useOUIAProps:()=>r});var i=n(44914);let a=0;const l="OUIA-Generated-",o={};function s(e,t,n=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const r=(e,t,n=!0,i)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":c(e,t,i)}),c=(e,t,n)=>{const a=(0,i.useMemo)((()=>d(e,n)),[e,n]);return null!=t?t:a};function d(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,o[n]||(o[n]=0),`${l}${e}-${t?`${t}-`:""}${++o[n]}`}catch(n){return`${l}${e}-${t?`${t}-`:""}${++a}`}}},57709:(e,t,n)=>{n.d(t,{L:()=>i});const i="*"},68419:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(8674),a=n(44914);let l=0;function o({name:e,xOffset:t=0,yOffset:n=0,width:o,height:s,svgPath:r}){var c;return c=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{title:l,className:c}=e,d=(0,i.__rest)(e,["title","className"]),m=c?`pf-v5-svg ${c}`:"pf-v5-svg",u=Boolean(l),p=[t,n,o,s].join(" ");return a.createElement("svg",Object.assign({className:m,viewBox:p,fill:"currentColor","aria-labelledby":u?this.id:null,"aria-hidden":!u||null,role:"img",width:"1em",height:"1em"},d),u&&a.createElement("title",{id:this.id},l),a.createElement("path",{d:r}))}},c.displayName=e,c}},91918:(e,t,n)=>{n.d(t,{Ay:()=>i});const i=(0,n(68419).w)({name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0})},89015:(e,t,n)=>{n.r(t),n.d(t,{AngleRightIcon:()=>l,AngleRightIconConfig:()=>a,default:()=>o});var i=n(68419);const a={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},l=(0,i.w)(a),o=l},59779:(e,t,n)=>{n.r(t),n.d(t,{CheckIcon:()=>l,CheckIconConfig:()=>a,default:()=>o});var i=n(68419);const a={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},l=(0,i.w)(a),o=l},40167:(e,t,n)=>{n.r(t),n.d(t,{ExternalLinkAltIcon:()=>l,ExternalLinkAltIconConfig:()=>a,default:()=>o});var i=n(68419);const a={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},l=(0,i.w)(a),o=l},3995:(e,t,n)=>{n.d(t,{Ay:()=>i});const i=(0,n(68419).w)({name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0})},35704:(e,t,n)=>{n.d(t,{A:()=>i}),n(39829);const i={breadcrumb:"pf-v5-c-breadcrumb",breadcrumbDropdown:"pf-v5-c-breadcrumb__dropdown",breadcrumbHeading:"pf-v5-c-breadcrumb__heading",breadcrumbItem:"pf-v5-c-breadcrumb__item",breadcrumbItemDivider:"pf-v5-c-breadcrumb__item-divider",breadcrumbLink:"pf-v5-c-breadcrumb__link",breadcrumbList:"pf-v5-c-breadcrumb__list",dirRtl:"pf-v5-m-dir-rtl",dropdownToggle:"pf-v5-c-dropdown__toggle",modifiers:{current:"pf-m-current"}}},48280:(e,t,n)=>{n.d(t,{A:()=>i}),n(56905);const i={check:"pf-v5-c-check",checkBody:"pf-v5-c-check__body",checkDescription:"pf-v5-c-check__description",checkInput:"pf-v5-c-check__input",checkLabel:"pf-v5-c-check__label",checkLabelRequired:"pf-v5-c-check__label-required",modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"}}},57776:(e,t,n)=>{n.d(t,{A:()=>i}),n(41069);const i={badge:"pf-v5-c-badge",check:"pf-v5-c-check",divider:"pf-v5-c-divider",dropdown:"pf-v5-c-dropdown",dropdownGroup:"pf-v5-c-dropdown__group",dropdownGroupTitle:"pf-v5-c-dropdown__group-title",dropdownMenu:"pf-v5-c-dropdown__menu",dropdownMenuItem:"pf-v5-c-dropdown__menu-item",dropdownMenuItemDescription:"pf-v5-c-dropdown__menu-item-description",dropdownMenuItemIcon:"pf-v5-c-dropdown__menu-item-icon",dropdownMenuItemMain:"pf-v5-c-dropdown__menu-item-main",dropdownToggle:"pf-v5-c-dropdown__toggle",dropdownToggleButton:"pf-v5-c-dropdown__toggle-button",dropdownToggleCheck:"pf-v5-c-dropdown__toggle-check",dropdownToggleIcon:"pf-v5-c-dropdown__toggle-icon",dropdownToggleImage:"pf-v5-c-dropdown__toggle-image",dropdownToggleProgress:"pf-v5-c-dropdown__toggle-progress",dropdownToggleText:"pf-v5-c-dropdown__toggle-text",menu:"pf-v5-c-menu",modifiers:{fullHeight:"pf-m-full-height",expanded:"pf-m-expanded",action:"pf-m-action",disabled:"pf-m-disabled",plain:"pf-m-plain",text:"pf-m-text",splitButton:"pf-m-split-button",primary:"pf-m-primary",inProgress:"pf-m-in-progress",active:"pf-m-active",secondary:"pf-m-secondary",top:"pf-m-top",static:"pf-m-static",alignRight:"pf-m-align-right",alignLeft:"pf-m-align-left",alignRightOnSm:"pf-m-align-right-on-sm",alignLeftOnSm:"pf-m-align-left-on-sm",alignRightOnMd:"pf-m-align-right-on-md",alignLeftOnMd:"pf-m-align-left-on-md",alignRightOnLg:"pf-m-align-right-on-lg",alignLeftOnLg:"pf-m-align-left-on-lg",alignRightOnXl:"pf-m-align-right-on-xl",alignLeftOnXl:"pf-m-align-left-on-xl",alignRightOn_2xl:"pf-m-align-right-on-2xl",alignLeftOn_2xl:"pf-m-align-left-on-2xl",ariaDisabled:"pf-m-aria-disabled",icon:"pf-m-icon",description:"pf-m-description"},spinner:"pf-v5-c-spinner",themeDark:"pf-v5-theme-dark"}},88144:(e,t,n)=>{n.d(t,{A:()=>i}),n(1641);const i={breadcrumb:"pf-v5-c-breadcrumb",check:"pf-v5-c-check",dirRtl:"pf-v5-m-dir-rtl",divider:"pf-v5-c-divider",menu:"pf-v5-c-menu",menuBreadcrumb:"pf-v5-c-menu__breadcrumb",menuContent:"pf-v5-c-menu__content",menuFooter:"pf-v5-c-menu__footer",menuGroup:"pf-v5-c-menu__group",menuGroupTitle:"pf-v5-c-menu__group-title",menuHeader:"pf-v5-c-menu__header",menuItem:"pf-v5-c-menu__item",menuItemAction:"pf-v5-c-menu__item-action",menuItemActionIcon:"pf-v5-c-menu__item-action-icon",menuItemCheck:"pf-v5-c-menu__item-check",menuItemDescription:"pf-v5-c-menu__item-description",menuItemExternalIcon:"pf-v5-c-menu__item-external-icon",menuItemIcon:"pf-v5-c-menu__item-icon",menuItemMain:"pf-v5-c-menu__item-main",menuItemSelectIcon:"pf-v5-c-menu__item-select-icon",menuItemText:"pf-v5-c-menu__item-text",menuItemToggleIcon:"pf-v5-c-menu__item-toggle-icon",menuList:"pf-v5-c-menu__list",menuListItem:"pf-v5-c-menu__list-item",menuSearch:"pf-v5-c-menu__search",modifiers:{hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",flyout:"pf-m-flyout",top:"pf-m-top",left:"pf-m-left",drilldown:"pf-m-drilldown",drilledIn:"pf-m-drilled-in",currentPath:"pf-m-current-path",static:"pf-m-static",plain:"pf-m-plain",scrollable:"pf-m-scrollable",nav:"pf-m-nav",focus:"pf-m-focus",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",load:"pf-m-load",loading:"pf-m-loading",danger:"pf-m-danger",selected:"pf-m-selected",favorite:"pf-m-favorite",favorited:"pf-m-favorited"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/2528.5db6ce268882256ba4d8231f838a254b.js.map
"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[1088,2886],{93149:(e,t,n)=>{n.d(t,{X:()=>d});var i=n(65353),l=n(28416),a=n(54783),s=n(38296),o=n(62472),r=n(11888);const c=()=>{};class d extends l.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},this.state={ouiaStateId:(0,o.getDefaultOUIAId)(d.displayName)}}render(){const e=this.props,{"aria-label":t,className:n,inputClassName:m,onChange:u,isValid:f,isDisabled:p,isRequired:h,isChecked:v,label:g,checked:b,defaultChecked:I,description:E,body:y,ouiaId:k,ouiaSafe:_,component:w}=e,x=(0,i.__rest)(e,["aria-label","className","inputClassName","onChange","isValid","isDisabled","isRequired","isChecked","label","checked","defaultChecked","description","body","ouiaId","ouiaSafe","component"]);x.id||console.error("Checkbox:","id is required to make input accessible");const C={};return([!0,!1].includes(b)||!0===v)&&(C.checked=b||v),u!==c&&(C.checked=v),[!1,!0].includes(I)&&(C.defaultChecked=I),C.checked=null!==C.checked&&C.checked,l.createElement(w,{className:(0,s.css)(a.Z.check,!g&&a.Z.modifiers.standalone,n)},l.createElement("input",Object.assign({},x,{className:(0,s.css)(a.Z.checkInput,m),type:"checkbox",onChange:this.handleChange,"aria-invalid":!f,"aria-label":t,disabled:p,required:h,ref:e=>e&&(e.indeterminate=null===v)},C,(0,o.getOUIAProps)(d.displayName,void 0!==k?k:this.state.ouiaStateId,_))),g&&l.createElement("label",{className:(0,s.css)(a.Z.checkLabel,p&&a.Z.modifiers.disabled),htmlFor:x.id},g,h&&l.createElement("span",{className:(0,s.css)(a.Z.checkLabelRequired),"aria-hidden":"true"},r.t)),E&&l.createElement("span",{className:(0,s.css)(a.Z.checkDescription)},E),y&&l.createElement("span",{className:(0,s.css)(a.Z.checkBody)},y))}}d.displayName="Checkbox",d.defaultProps={className:"",isValid:!0,isDisabled:!1,isRequired:!1,isChecked:!1,onChange:c,ouiaSafe:!0,component:"div"}},47680:(e,t,n)=>{n.d(t,{v:()=>u});var i=n(65353),l=n(28416),a=n(47376),s=n(38296),o=n(62472),r=n(16930),c=n(80164),d=n(24396);class m extends l.Component{constructor(e){super(e),this.menuRef=l.createRef(),this.activeMenu=null,this.state={ouiaStateId:(0,o.getDefaultOUIAId)(u.displayName),transitionMoveTarget:null,flyoutRef:null,disableHover:!1,currentDrilldownMenuId:this.props.id},this.handleDrilldownTransition=e=>{const t=this.menuRef.current;if(t&&(t===e.target.closest(`.${a.Z.menu}`)||Array.from(t.getElementsByClassName(a.Z.menu)).includes(e.target.closest(`.${a.Z.menu}`))))if(this.state.transitionMoveTarget)this.state.transitionMoveTarget.focus(),this.setState({transitionMoveTarget:null});else{const e=t.querySelector("#"+this.props.activeMenu)||t||null,n=Array.from(e.getElementsByTagName("UL")[0].children);if(this.state.currentDrilldownMenuId&&e.id===this.state.currentDrilldownMenuId)return;this.setState({currentDrilldownMenuId:e.id});const i=n.filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.Z.divider))))[0].firstChild;i.focus(),i.tabIndex=0}},this.handleExtraKeys=e=>{const t=this.props.containsDrilldown,n=document.activeElement;if(e.target.closest(`.${a.Z.menu}`)===this.activeMenu||e.target.classList.contains("pf-v5-c-breadcrumb__link")||(this.activeMenu=e.target.closest(`.${a.Z.menu}`),this.setState({disableHover:!0})),"INPUT"===e.target.tagName)return;const i=this.activeMenu,l=e.key,s=n.classList.contains("pf-v5-c-breadcrumb__link")||n.classList.contains("pf-v5-c-dropdown__toggle");if(" "===l||"Enter"===l){if(e.preventDefault(),t&&!s)if(n.closest("li").classList.contains("pf-m-current-path")&&"LI"===i.parentElement.tagName)n.tabIndex=-1,i.parentElement.firstChild.tabIndex=0,this.setState({transitionMoveTarget:i.parentElement.firstChild});else if(n.nextElementSibling&&n.nextElementSibling.classList.contains(a.Z.menu)){const e=Array.from(n.nextElementSibling.getElementsByTagName("UL")[0].children).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.Z.divider))));n.tabIndex=-1,e[0].firstChild.tabIndex=0,this.setState({transitionMoveTarget:e[0].firstChild})}document.activeElement.click()}},this.createNavigableElements=()=>this.props.containsDrilldown?this.activeMenu?Array.from(this.activeMenu.getElementsByTagName("UL")[0].children).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.Z.divider)))):[]:this.menuRef.current?Array.from(this.menuRef.current.getElementsByTagName("LI")).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.Z.divider)))):[],e.innerRef&&(this.menuRef=e.innerRef)}allowTabFirstItem(){const e=this.menuRef.current;if(e){const t=e.querySelector("ul button:not(:disabled), ul a:not(:disabled)");t&&(t.tabIndex=0)}}componentDidMount(){this.context&&this.setState({disableHover:this.context.disableHover}),c.Nq&&window.addEventListener("transitionend",this.props.isRootMenu?this.handleDrilldownTransition:null),this.allowTabFirstItem()}componentWillUnmount(){c.Nq&&window.removeEventListener("transitionend",this.handleDrilldownTransition)}componentDidUpdate(e){e.children!==this.props.children&&this.allowTabFirstItem()}render(){const e=this.props,{id:t,children:n,className:c,onSelect:m,selected:f=null,onActionClick:p,ouiaId:h,ouiaSafe:v,containsFlyout:g,isNavFlyout:b,containsDrilldown:I,isMenuDrilledIn:E,isPlain:y,isScrollable:k,drilldownItemPath:_,drilledInMenus:w,onDrillIn:x,onDrillOut:C,onGetMenuHeight:N,parentMenu:L=null,activeItemId:M=null,innerRef:Z,isRootMenu:D,activeMenu:S,role:A}=e,H=(0,i.__rest)(e,["id","children","className","onSelect","selected","onActionClick","ouiaId","ouiaSafe","containsFlyout","isNavFlyout","containsDrilldown","isMenuDrilledIn","isPlain","isScrollable","drilldownItemPath","drilledInMenus","onDrillIn","onDrillOut","onGetMenuHeight","parentMenu","activeItemId","innerRef","isRootMenu","activeMenu","role"]),R=E||w&&w.includes(t)||!1;return l.createElement(r.p.Provider,{value:{menuId:t,parentMenu:L||t,onSelect:m,onActionClick:p,activeItemId:M,selected:f,drilledInMenus:w,drilldownItemPath:_,onDrillIn:x,onDrillOut:C,onGetMenuHeight:N,flyoutRef:this.state.flyoutRef,setFlyoutRef:e=>this.setState({flyoutRef:e}),disableHover:this.state.disableHover,role:A}},D&&l.createElement(d.FS,{containerRef:this.menuRef||null,additionalKeyHandler:this.handleExtraKeys,createNavigableElements:this.createNavigableElements,isActiveElement:e=>document.activeElement.closest("li")===e||document.activeElement.parentElement===e||document.activeElement.closest(`.${a.Z.menuSearch}`)===e||document.activeElement.closest("ol")&&document.activeElement.closest("ol").firstChild===e,getFocusableElement:e=>{var t,n;return"DIV"===(null==e?void 0:e.tagName)&&e.querySelector("input")||"LABEL"===(null===(t=e.firstChild)||void 0===t?void 0:t.tagName)&&e.querySelector("input")||"DIV"===(null===(n=e.firstChild)||void 0===n?void 0:n.tagName)&&e.querySelector("a, button, input")||e.firstChild},noHorizontalArrowHandling:document.activeElement&&(document.activeElement.classList.contains("pf-v5-c-breadcrumb__link")||document.activeElement.classList.contains("pf-v5-c-dropdown__toggle")),noEnterHandling:!0,noSpaceHandling:!0}),l.createElement("div",Object.assign({id:t,className:(0,s.css)(a.Z.menu,y&&a.Z.modifiers.plain,k&&a.Z.modifiers.scrollable,g&&a.Z.modifiers.flyout,b&&a.Z.modifiers.nav,I&&a.Z.modifiers.drilldown,R&&a.Z.modifiers.drilledIn,c),ref:this.menuRef},(0,o.getOUIAProps)(u.displayName,void 0!==h?h:this.state.ouiaStateId,v),H),n))}}m.displayName="Menu",m.contextType=r.p,m.defaultProps={ouiaSafe:!0,isRootMenu:!0,isPlain:!1,isScrollable:!1,role:"menu"};const u=l.forwardRef(((e,t)=>l.createElement(m,Object.assign({},e,{innerRef:t}))));u.displayName="Menu"},56726:(e,t,n)=>{n.d(t,{D:()=>r});var i=n(65353),l=n(28416),a=n(47376),s=n(38296),o=n(16930);const r=l.forwardRef(((e,t)=>{const{getHeight:n,children:r,menuHeight:c,maxMenuHeight:d}=e,m=(0,i.__rest)(e,["getHeight","children","menuHeight","maxMenuHeight"]),u=l.createRef();return l.createElement(o.p.Consumer,null,(({menuId:i,onGetMenuHeight:o})=>l.createElement("div",Object.assign({},m,{className:(0,s.css)(a.Z.menuContent,e.className),ref:e=>((e,i,l)=>{if(e){let t=e.clientHeight,s=null,o=e.closest(`.${a.Z.menuList}`);for(;null!==o&&1===o.nodeType;)o.classList.contains(a.Z.menuList)&&(s=o),o=o.parentElement;if(s){const e=getComputedStyle(s);t+=parseFloat(e.getPropertyValue("padding-top").replace(/px/g,""))+parseFloat(e.getPropertyValue("padding-bottom").replace(/px/g,""))+parseFloat(getComputedStyle(s.parentElement).getPropertyValue("border-bottom-width").replace(/px/g,""))}l&&l(i,t),n&&n(t.toString())}return t||u})(e,i,o),style:Object.assign(Object.assign({},c&&{"--pf-v5-c-menu__content--Height":c}),d&&{"--pf-v5-c-menu__content--MaxHeight":d})}),r)))}));r.displayName="MenuContent"},16930:(e,t,n)=>{n.d(t,{F:()=>a,p:()=>l});var i=n(28416);const l=i.createContext({menuId:null,parentMenu:null,onActionClick:()=>null,onSelect:()=>null,activeItemId:null,selected:null,drilledInMenus:[],drilldownItemPath:[],onDrillIn:null,onDrillOut:null,onGetMenuHeight:()=>null,flyoutRef:null,setFlyoutRef:()=>null,disableHover:!1,role:"menu"}),a=i.createContext({itemId:null,isDisabled:!1})},49732:(e,t,n)=>{n.d(t,{s:()=>_});var i=n(65353),l=n(28416),a=n(47376),s=n(38296);const o="--pf-v5-c-menu--m-flyout__menu--top-offset",r="--pf-v5-c-menu--m-flyout__menu--m-left--right-offset",c="--pf-v5-c-menu--m-flyout__menu--left-offset";var d=n(15265),m=n(93174),u=n(71973),f=n(98614),p=n(93149),h=n(16930),v=n(44404),g=n(35224),b=n(80164),I=n(6551),E=n(41724);const y=l.createContext({direction:"right"}),k=e=>{var{children:t,className:n,itemId:k=null,to:_,hasCheckbox:w=!1,isActive:x=null,isFavorited:C=null,isLoadButton:N=!1,isLoading:L=!1,flyoutMenu:M,direction:Z,description:D=null,onClick:S=(()=>{}),component:A="button",isDisabled:H=!1,isAriaDisabled:R=!1,isExternalLink:P=!1,isSelected:O=null,isFocused:T,isDanger:F=!1,icon:q,actions:U,onShowFlyout:V,drilldownMenu:j,isOnPath:B,innerRef:$,id:G,"aria-label":K,tooltipProps:z,rel:X,target:W}=e,J=(0,i.__rest)(e,["children","className","itemId","to","hasCheckbox","isActive","isFavorited","isLoadButton","isLoading","flyoutMenu","direction","description","onClick","component","isDisabled","isAriaDisabled","isExternalLink","isSelected","isFocused","isDanger","icon","actions","onShowFlyout","drilldownMenu","isOnPath","innerRef","id","aria-label","tooltipProps","rel","target"]);const{menuId:Q,parentMenu:Y,onSelect:ee,onActionClick:te,activeItemId:ne,selected:ie,drilldownItemPath:le,onDrillIn:ae,onDrillOut:se,flyoutRef:oe,setFlyoutRef:re,disableHover:ce,role:de}=l.useContext(h.p);let me=_?"a":A;w&&!_&&(me="label");const[ue,fe]=l.useState(null),pe=l.useContext(y),[he,ve]=l.useState(pe.direction),ge=l.useRef(),be=ge===oe,Ie=void 0!==M,Ee=e=>{!be&&e?re(ge):be&&!e&&re(null),V&&e&&V()};(0,I.L)((()=>{if(Ie&&ge.current&&b.Nq){const e=ge.current.lastElementChild;if(e&&e.classList.contains(a.Z.menu)){const t=ge.current.getClientRects()[0],n=e.getClientRects()[0];if(t&&n){const i=t.x-n.width,l=window.innerWidth-t.x-t.width-n.width;let s=he;l<0&&"left"!==s?(ve("left"),s="left"):i<0&&"right"!==s&&(ve("right"),s="right");let d=0;i<0&&l<0&&(d="right"===s?-l:-i),"left"===s?(e.classList.add(a.Z.modifiers.left),e.style.setProperty(r,`-${d}px`)):e.style.setProperty(c,`-${d}px`);const m=window.innerHeight-t.y-n.height;window.innerHeight-n.height<0&&m<0||m<0&&e.style.setProperty(o,`${m}px`)}}}}),[be,M]),l.useEffect((()=>{ve(pe.direction)}),[pe]),l.useEffect((()=>{if(ue)if(be){const e=ue.nextElementSibling;Array.from(e.getElementsByTagName("UL")[0].children).filter((e=>!(e.classList.contains("pf-m-disabled")||e.classList.contains(a.Z.divider))))[0].firstChild.focus()}else ue.focus()}),[be,ue]);const ye=e=>{const t=e.key,n=e.target,i=e.type;" "!==t&&"Enter"!==t&&"ArrowRight"!==t&&"click"!==i||(e.stopPropagation(),e.preventDefault(),be||(Ee(!0),fe(n))),"Escape"!==t&&"ArrowLeft"!==t||be&&(e.stopPropagation(),Ee(!1))},ke=(e,t)=>{R||(t&&t(e,k),S&&S(e))},_e=B&&B||le&&le.includes(k)||!1;let we;Z&&(we="down"===Z?e=>ae&&ae(e,Q,"function"==typeof j?j().props.id:j.props.id,k):e=>se&&se(e,Y,k));let xe={};"a"===me?xe={href:_,"aria-disabled":!(!H&&!R)||null,disabled:null,target:P?"_blank":W,rel:X}:"button"===me&&(xe={type:"button","aria-disabled":!!R||null}),B?xe["aria-expanded"]=!0:Ie&&(xe["aria-haspopup"]="menu",xe["aria-expanded"]=be);const Ce=()=>null!==O?O:null!==ie&&null!==k&&(Array.isArray(ie)&&ie.includes(k)||k===ie);l.useEffect((()=>{if(T&&ge.current){const e=ge.current,t=e.parentElement;if(t){const n=e.offsetTop-t.offsetTop<t.scrollTop,i=e.offsetTop-t.offsetTop+e.clientHeight;(n||i)&&e.scrollIntoView({behavior:"auto",block:"nearest"})}}}),[T]);const Ne="listbox"===de,Le=l.createElement(l.Fragment,null,l.createElement(E.w,null,(e=>l.createElement(me,Object.assign({id:G,tabIndex:-1,className:(0,s.css)(a.Z.menuItem,Ce()&&!w&&a.Z.modifiers.selected,n),"aria-current":null!==x?x?"page":null:null!==k&&null!==ne?k===ne:null},!w&&{disabled:H,"aria-label":K},!w&&!M&&{role:Ne?"option":"menuitem"},!w&&!M&&Ne&&{"aria-selected":Ce()},{ref:$},!w&&{onClick:e=>{R?e.preventDefault():(ke(e,ee),we&&we(e),M&&ye(e))}},w&&{htmlFor:e},xe),l.createElement("span",{className:(0,s.css)(a.Z.menuItemMain)},"up"===Z&&l.createElement("span",{className:(0,s.css)(a.Z.menuItemToggleIcon)},l.createElement(u.ZP,{"aria-hidden":!0})),q&&l.createElement("span",{className:(0,s.css)(a.Z.menuItemIcon)},q),w&&l.createElement("span",{className:(0,s.css)(a.Z.menuItemCheck)},l.createElement(p.X,{id:e,component:"span",isChecked:O||!1,onChange:e=>ke(e,ee),isDisabled:H,"aria-disabled":R})),l.createElement("span",{className:(0,s.css)(a.Z.menuItemText)},t),P&&l.createElement("span",{className:(0,s.css)(a.Z.menuItemExternalIcon)},l.createElement(d.default,{"aria-hidden":!0})),(M||"down"===Z)&&l.createElement("span",{className:(0,s.css)(a.Z.menuItemToggleIcon)},l.createElement(m.default,{"aria-hidden":!0})),Ce()&&l.createElement("span",{className:(0,s.css)(a.Z.menuItemSelectIcon)},l.createElement(f.default,{"aria-hidden":!0}))),D&&"up"!==Z&&l.createElement("span",{className:(0,s.css)(a.Z.menuItemDescription)},l.createElement("span",null,D))))),be&&l.createElement(h.p.Provider,{value:{disableHover:ce}},l.createElement(y.Provider,{value:{direction:he}},M)),"function"==typeof j?j():j,l.createElement(h.F.Provider,{value:{itemId:k,isDisabled:H}},U,null!==C&&l.createElement(v.U,{icon:"favorites",isFavorited:C,"aria-label":C?"starred":"not starred",onClick:e=>te(e,k),tabIndex:-1,actionId:"fav"})));return l.createElement("li",Object.assign({className:(0,s.css)(a.Z.menuListItem,H&&a.Z.modifiers.disabled,R&&a.Z.modifiers.ariaDisabled,_e&&a.Z.modifiers.currentPath,N&&a.Z.modifiers.load,L&&a.Z.modifiers.loading,T&&a.Z.modifiers.focus,F&&a.Z.modifiers.danger,n),onMouseOver:()=>{R||ce||(Ie?Ee(!0):re(null))}},M&&!R&&{onKeyDown:ye},{ref:ge,role:w?"menuitem":"none"},w&&{"aria-label":K},J),z?l.createElement(g.u,Object.assign({},z),Le):Le)},_=l.forwardRef(((e,t)=>l.createElement(k,Object.assign({},e,{innerRef:t}))));_.displayName="MenuItem"},44404:(e,t,n)=>{n.d(t,{U:()=>d});var i=n(65353),l=n(28416),a=n(47376),s=n(38296),o=n(83668),r=n(16930);const c=e=>{var{className:t="",icon:n,onClick:c,"aria-label":d,isFavorited:m=null,isDisabled:u,actionId:f,innerRef:p}=e,h=(0,i.__rest)(e,["className","icon","onClick","aria-label","isFavorited","isDisabled","actionId","innerRef"]);return l.createElement(r.p.Consumer,null,(({onActionClick:e})=>l.createElement(r.F.Consumer,null,(({itemId:i,isDisabled:r})=>l.createElement("button",Object.assign({className:(0,s.css)(a.Z.menuItemAction,null!==m&&a.Z.modifiers.favorite,m&&a.Z.modifiers.favorited,t),"aria-label":d,onClick:t=>{c&&c(t),e&&e(t,i,f)}},(!0===u||!0===r)&&{disabled:!0},{ref:p,tabIndex:-1},h),l.createElement("span",{className:(0,s.css)(a.Z.menuItemActionIcon)},"favorites"===n||null!==m?l.createElement(o.ZP,{"aria-hidden":!0}):n))))))},d=l.forwardRef(((e,t)=>l.createElement(c,Object.assign({},e,{innerRef:t}))));d.displayName="MenuItemAction"},46820:(e,t,n)=>{n.d(t,{q:()=>r});var i=n(65353),l=n(28416),a=n(47376),s=n(38296),o=n(16930);const r=e=>{var{children:t=null,className:n,isAriaMultiselectable:r=!1,"aria-label":c}=e,d=(0,i.__rest)(e,["children","className","isAriaMultiselectable","aria-label"]);const{role:m}=l.useContext(o.p);return l.createElement("ul",Object.assign({role:m},"listbox"===m&&{"aria-multiselectable":r},{className:(0,s.css)(a.Z.menuList,n),"aria-label":c},d),t)};r.displayName="MenuList"},41724:(e,t,n)=>{n.d(t,{w:()=>a});var i=n(28416);let l=0;class a extends i.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${l++}`}render(){return this.props.children(this.id)}}a.displayName="GenerateId",a.defaultProps={prefix:"pf-random-id-"}},24396:(e,t,n)=>{n.d(t,{FS:()=>o,Hl:()=>s,tL:()=>a});var i=n(28416),l=n(80164);const a=(e,t,n=(e=>document.activeElement.contains(e)),i=(e=>e),l=["A","BUTTON","INPUT"],a=!1,s=!1,o=!0,r=!0)=>{const c=document.activeElement,d=e.key;let m=null;if(!a&&["ArrowUp","ArrowDown"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let l=-1;t.forEach(((e,a)=>{if(n(e)){let e=0;for(;!m&&e<t.length&&-1*e<t.length;)"ArrowUp"===d?e--:e++,l=a+e,l>=t.length&&(l=0),l<0&&(l=t.length-1),m=i(t[l])}}))}if(!s&&["ArrowLeft","ArrowRight"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let i=-1;t.forEach(((a,s)=>{if(n(a)){const n=t[s].querySelectorAll(l.join(","));if(!n.length||r){let e=c;for(;e;)if(e="ArrowLeft"===d?e.previousElementSibling:e.nextElementSibling,e&&l.includes(e.tagName)){m=e;break}}else n.forEach(((t,l)=>{e.target===t&&(i=l+("ArrowLeft"===d?-1:1),i>=n.length&&(i=0),i<0&&(i=n.length-1),m=n[i])}))}}))}m&&(o&&(c.tabIndex=-1,m.tabIndex=0),m.focus())},s=e=>{e&&e.length>0&&(e.forEach((e=>{e.tabIndex=-1})),e[0].tabIndex=0)};class o extends i.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:t}=this.props;if(t?!t(e):!this._isEventFromContainer(e))return;const{isActiveElement:n,getFocusableElement:i,noVerticalArrowHandling:l,noHorizontalArrowHandling:s,noEnterHandling:o,noSpaceHandling:r,updateTabIndex:c,validSiblingTags:d,additionalKeyHandler:m,createNavigableElements:u,onlyTraverseSiblings:f}=this.props;m&&m(e);const p=u();if(!p)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const h=e.key;o||"Enter"===h&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),r||" "===h&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),a(e,p,n,i,d,l,s,c,f)},this._isEventFromContainer=e=>{const{containerRef:t}=this.props;return t.current&&t.current.contains(e.target)}}componentDidMount(){l.Nq&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){l.Nq&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}o.displayName="KeyboardHandler",o.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],onlyTraverseSiblings:!0,updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},11888:(e,t,n)=>{n.d(t,{t:()=>i});const i="*"},71973:(e,t,n)=>{n.d(t,{ZP:()=>i});const i=(0,n(40400).I)({name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0})},98614:(e,t,n)=>{n.r(t),n.d(t,{CheckIcon:()=>a,CheckIconConfig:()=>l,default:()=>s});var i=n(40400);const l={name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0},a=(0,i.I)(l),s=a},15265:(e,t,n)=>{n.r(t),n.d(t,{ExternalLinkAltIcon:()=>a,ExternalLinkAltIconConfig:()=>l,default:()=>s});var i=n(40400);const l={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},a=(0,i.I)(l),s=a},83668:(e,t,n)=>{n.d(t,{ZP:()=>i});const i=(0,n(40400).I)({name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0})},54783:(e,t,n)=>{n.d(t,{Z:()=>i}),n(32857);const i={check:"pf-v5-c-check",checkBody:"pf-v5-c-check__body",checkDescription:"pf-v5-c-check__description",checkInput:"pf-v5-c-check__input",checkLabel:"pf-v5-c-check__label",checkLabelRequired:"pf-v5-c-check__label-required",modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"}}},47376:(e,t,n)=>{n.d(t,{Z:()=>i}),n(98379);const i={breadcrumb:"pf-v5-c-breadcrumb",dirRtl:"pf-v5-m-dir-rtl",divider:"pf-v5-c-divider",menu:"pf-v5-c-menu",menuBreadcrumb:"pf-v5-c-menu__breadcrumb",menuContent:"pf-v5-c-menu__content",menuFooter:"pf-v5-c-menu__footer",menuGroup:"pf-v5-c-menu__group",menuGroupTitle:"pf-v5-c-menu__group-title",menuHeader:"pf-v5-c-menu__header",menuItem:"pf-v5-c-menu__item",menuItemAction:"pf-v5-c-menu__item-action",menuItemActionIcon:"pf-v5-c-menu__item-action-icon",menuItemCheck:"pf-v5-c-menu__item-check",menuItemDescription:"pf-v5-c-menu__item-description",menuItemExternalIcon:"pf-v5-c-menu__item-external-icon",menuItemIcon:"pf-v5-c-menu__item-icon",menuItemMain:"pf-v5-c-menu__item-main",menuItemSelectIcon:"pf-v5-c-menu__item-select-icon",menuItemText:"pf-v5-c-menu__item-text",menuItemToggleIcon:"pf-v5-c-menu__item-toggle-icon",menuList:"pf-v5-c-menu__list",menuListItem:"pf-v5-c-menu__list-item",menuSearch:"pf-v5-c-menu__search",modifiers:{hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",flyout:"pf-m-flyout",top:"pf-m-top",left:"pf-m-left",drilldown:"pf-m-drilldown",drilledIn:"pf-m-drilled-in",currentPath:"pf-m-current-path",static:"pf-m-static",plain:"pf-m-plain",scrollable:"pf-m-scrollable",nav:"pf-m-nav",focus:"pf-m-focus",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",load:"pf-m-load",loading:"pf-m-loading",danger:"pf-m-danger",selected:"pf-m-selected",favorite:"pf-m-favorite",favorited:"pf-m-favorited"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/1088.4c78113fbeef71b209ee82db4f062b35.js.map
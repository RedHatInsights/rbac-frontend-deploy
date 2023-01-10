"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[167],{56787:(e,n,t)=>{t.d(n,{L:()=>d});var o=t(70655),s=t(92950),i=t(73699),r=t(99355),l=t(17352),a=t(62472);const d=e=>{var{onSelect:n,ref:t,ouiaId:p,ouiaSafe:c,alignments:m,contextProps:u,menuAppendTo:h="inline",isFlipEnabled:g=!1,removeFindDomNode:f=!1}=e,C=(0,o.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled","removeFindDomNode"]);return s.createElement(r.Dl.Provider,{value:Object.assign({onSelect:e=>n&&n(e),toggleTextClass:i.Z.dropdownToggleText,toggleIconClass:i.Z.dropdownToggleImage,toggleIndicatorClass:i.Z.dropdownToggleIcon,menuClass:i.Z.dropdownMenu,itemClass:i.Z.dropdownMenuItem,toggleClass:i.Z.dropdownToggle,baseClass:i.Z.dropdown,baseComponent:"div",sectionClass:i.Z.dropdownGroup,sectionTitleClass:i.Z.dropdownGroupTitle,sectionComponent:"section",disabledClass:i.Z.modifiers.disabled,plainTextClass:i.Z.modifiers.text,ouiaId:(0,a.Z1)(d.displayName,p),ouiaSafe:c,ouiaComponentType:d.displayName,alignments:m},u)},s.createElement(l.R,Object.assign({menuAppendTo:h,isFlipEnabled:g,removeFindDomNode:f},C)))};d.displayName="Dropdown"},84457:(e,n,t)=>{t.d(n,{h:()=>a});var o=t(70655),s=t(92950),i=t(33676),r=t(99355),l=t(62472);const a=e=>{var{children:n,className:t,component:d="a",isDisabled:p=!1,isAriaDisabled:c=!1,isPlainText:m=!1,href:u,tooltip:h,tooltipProps:g={},listItemClassName:f,onClick:C,ref:b,additionalChild:E,customChild:v,tabIndex:y=-1,icon:R=null,autoFocus:T,description:w=null,styleChildren:D,ouiaId:O,ouiaSafe:N}=e,Z=(0,o.__rest)(e,["children","className","component","isDisabled","isAriaDisabled","isPlainText","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const x=(0,l.S$)(a.displayName,O,N);return s.createElement(r.e4.Consumer,null,(e=>s.createElement(i.n,Object.assign({context:e,role:"menuitem",tabIndex:y,className:t,component:d,isDisabled:p,isAriaDisabled:c,isPlainText:m,href:u,tooltip:h,tooltipProps:g,listItemClassName:f,onClick:C,additionalChild:E,customChild:v,icon:R,autoFocus:T,styleChildren:D,description:w},x,Z),n)))};a.displayName="DropdownItem"},94868:(e,n,t)=>{t.d(n,{h:()=>p});var o=t(70655),s=t(92950),i=t(12181),r=t(73699),l=t(38296),a=t(80164),d=t(99355);class p extends s.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const n=this.refsCollection;if("ArrowDown"===e.key){const t=n.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(t),e.stopPropagation()}else if("ArrowUp"===e.key){const t=n.length,o=n.slice(t-1,t),s=o&&o[0];p.focusFirstRef(s),e.stopPropagation()}},this.childKeyHandler=(e,n,t,o=!1)=>{(0,a.qG)(e,n,t,this.refsCollection,this.props.isGrouped?this.refsCollection:s.Children.toArray(this.props.children),o)},this.sendRef=(e,n,t,o)=>{this.refsCollection[e]=[],n.map(((n,t)=>{n?n.getAttribute?this.refsCollection[e][t]=o?null:n:this.refsCollection[e][t]=i.findDOMNode(n):this.refsCollection[e][t]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),n=e&&e[0];n&&n.focus&&setTimeout((()=>n.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:n}=this.props;if(n){let n=0;return s.Children.map(e,(e=>{const t=e,o={};return t.props&&t.props.children&&(Array.isArray(t.props.children)?o.children=s.Children.map(t.props.children,(e=>s.cloneElement(e,{index:n++}))):o.children=s.cloneElement(t.props.children,{index:n++})),s.cloneElement(t,o)}))}return s.Children.map(e,((e,n)=>s.cloneElement(e,{index:n})))}render(){const e=this.props,{className:n,isOpen:t,position:i,children:p,component:c,isGrouped:m,setMenuComponentRef:u,openedOnEnter:h,alignments:g}=e,f=(0,o.__rest)(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter","alignments"]);return s.createElement(d.e4.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===c?s.createElement(d.Dl.Consumer,null,(({onSelect:e,menuClass:o})=>s.createElement("div",{className:(0,l.css)(o,i===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(g,r.Z,"align-"),n),hidden:!t,onClick:n=>e&&e(n),ref:u},p))):m&&s.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:o})=>{const p=o||"div";return s.createElement(p,Object.assign({},f,{className:(0,l.css)(e,i===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(g,r.Z,"align-"),n),hidden:!t,role:"menu",ref:u}),this.extendChildren())}))||s.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:o})=>{const p=o||c;return s.createElement(p,Object.assign({},f,{className:(0,l.css)(e,i===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(g,r.Z,"align-"),n),hidden:!t,role:"menu",ref:u}),this.extendChildren())})))}}p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.ir.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[r.Z.dropdownToggle,r.Z.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.Dl},17352:(e,n,t)=>{t.d(n,{R:()=>c});var o=t(70655),s=t(92950),i=t(73699),r=t(38296),l=t(94868),a=t(99355),d=t(62472),p=t(16438);class c extends s.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=s.createRef(),this.menuComponentRef=s.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:n,className:t,direction:m,dropdownItems:u,isOpen:h,isPlain:g,isText:f,isGrouped:C,isFullHeight:b,onSelect:E,position:v,toggle:y,autoFocus:R,menuAppendTo:T,isFlipEnabled:w,removeFindDomNode:D}=e,O=(0,o.__rest)(e,["children","className","direction","dropdownItems","isOpen","isPlain","isText","isGrouped","isFullHeight","onSelect","position","toggle","autoFocus","menuAppendTo","isFlipEnabled","removeFindDomNode"]),N=y.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let Z,x,P=!1;u&&u.length>0?(Z="ul",x=u,P=!0):(Z="div",x=s.Children.toArray(n));const k=this.openedOnEnter;return s.createElement(a.Dl.Consumer,null,(({baseClass:e,baseComponent:n,id:o,ouiaId:c,ouiaComponentType:u,ouiaSafe:E,alignments:I})=>{const A=n,F=s.createElement(l.h,Object.assign({},w&&{style:{position:"revert",minWidth:"min-content"}},{setMenuComponentRef:this.setMenuComponentRef,component:Z,isOpen:h,position:v,"aria-labelledby":o?`${o}-toggle`:N,isGrouped:C,autoFocus:k&&R,alignments:I}),x),M=s.createElement("div",{className:(0,r.css)(e,m===a.dw.up&&i.Z.modifiers.top,v===a.ir.right&&i.Z.modifiers.alignRight,h&&i.Z.modifiers.expanded,t)},h&&F),S=s.createElement(A,Object.assign({},O,{className:(0,r.css)(e,m===a.dw.up&&i.Z.modifiers.top,v===a.ir.right&&i.Z.modifiers.alignRight,h&&i.Z.modifiers.expanded,b&&i.Z.modifiers.fullHeight,t),ref:this.baseComponentRef},(0,d.dp)(u,c,E)),s.Children.map(y,(e=>s.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:h,id:N,isPlain:g,isText:f,"aria-haspopup":P,onEnter:()=>{this.onEnter(),e.props.onEnter&&e.props.onEnter()}}))),"inline"===T&&h&&F);return"inline"===T?S:s.createElement(p.r,{trigger:S,popper:M,direction:m,position:v,appendTo:"parent"===T?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():T,isVisible:h,removeFindDomNode:D})}))}}c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isText:!1,isGrouped:!1,position:a.ir.left,direction:a.dw.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline",isFlipEnabled:!1}},94024:(e,n,t)=>{t.d(n,{a:()=>l});var o=t(70655),s=t(92950),i=t(62165),r=t(1024);const l=e=>{var{id:n="",children:t=null,className:l="",isOpen:a=!1,"aria-label":d="Actions",parentRef:p=null,getMenuRef:c=null,isActive:m=!1,isPlain:u=!1,isDisabled:h=!1,bubbleEvent:g=!1,onToggle:f=(()=>{}),ref:C}=e,b=(0,o.__rest)(e,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return s.createElement(r.Z,Object.assign({id:n,className:l,isOpen:a,"aria-label":d,parentRef:p,getMenuRef:c,isActive:m,isPlain:u,isDisabled:h,onToggle:f,bubbleEvent:g},b),s.createElement(i.ZP,null))};l.displayName="KebabToggle"},1024:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(70655),s=t(92950),i=t(73699),r=t(99355),l=t(38296),a=t(1774);const d={default:"",primary:i.Z.modifiers.primary,secondary:i.Z.modifiers.secondary};class p extends s.Component{constructor(){super(...arguments),this.buttonRef=s.createRef(),this.componentDidMount=()=>{document.addEventListener("click",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress)},this.componentWillUnmount=()=>{document.removeEventListener("click",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress)},this.onDocClick=e=>{const{isOpen:n,parentRef:t,onToggle:o,getMenuRef:s}=this.props,i=s&&s(),r=t&&t.current&&t.current.contains(e.target),l=i&&i.contains&&i.contains(e.target);!n||r||l||null==o||o(!1,e)},this.onEscPress=e=>{var n,t,o;const{parentRef:s,getMenuRef:i}=this.props,r=i&&i(),l=s&&s.current&&s.current.contains(e.target),d=r&&r.contains&&r.contains(e.target);!this.props.isOpen||e.key!==a.yu.Escape&&"Tab"!==e.key||!l&&!d||(null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!1,e),null===(o=this.buttonRef.current)||void 0===o||o.focus())},this.onKeyDown=e=>{var n,t,o,s,i,r;("Tab"!==e.key||this.props.isOpen)&&("Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key||this.props.isOpen||(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(s=(o=this.props).onToggle)||void 0===s||s.call(o,!this.props.isOpen,e),null===(r=(i=this.props).onEnter)||void 0===r||r.call(i)):(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!this.props.isOpen,e)))}}render(){const e=this.props,{className:n,children:t,isOpen:a,isDisabled:p,isPlain:c,isText:m,isPrimary:u,isSplitButton:h,toggleVariant:g,onToggle:f,"aria-haspopup":C,isActive:b,bubbleEvent:E,onEnter:v,parentRef:y,getMenuRef:R,id:T,type:w}=e,D=(0,o.__rest)(e,["className","children","isOpen","isDisabled","isPlain","isText","isPrimary","isSplitButton","toggleVariant","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return s.createElement(r.Dl.Consumer,null,(({toggleClass:e})=>s.createElement("button",Object.assign({},D,{id:T,ref:this.buttonRef,className:(0,l.css)(h?i.Z.dropdownToggleButton:e||i.Z.dropdownToggle,b&&i.Z.modifiers.active,c&&i.Z.modifiers.plain,m&&i.Z.modifiers.text,u&&i.Z.modifiers.primary,g&&d[g],n),type:w||"button",onClick:e=>null==f?void 0:f(!a,e),"aria-expanded":a,"aria-haspopup":C,onKeyDown:e=>this.onKeyDown(e),disabled:p}),t)))}}p.displayName="Toggle",p.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isText:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},62165:(e,n,t)=>{t.d(n,{HJ:()=>i,Lf:()=>s,ZP:()=>r});var o=t(40400);const s={name:"EllipsisVIcon",height:512,width:192,svgPath:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",yOffset:0,xOffset:0},i=(0,o.IU)(s),r=i}}]);
//# sourceMappingURL=../sourcemaps/167.47a63c2496d72b517699c42e462d1c6b.js.map
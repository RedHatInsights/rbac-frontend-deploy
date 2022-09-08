"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[7123],{56787:(e,n,t)=>{t.d(n,{L:()=>d});var s=t(70655),o=t(92950),i=t(79942),r=t(99355),l=t(17352),a=t(62472);const d=e=>{var{onSelect:n,ref:t,ouiaId:p,ouiaSafe:c,alignments:u,contextProps:m}=e,h=(0,s.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps"]);return o.createElement(r.Dl.Provider,{value:Object.assign({onSelect:e=>n&&n(e),toggleTextClass:i.Z.dropdownToggleText,toggleIconClass:i.Z.dropdownToggleImage,toggleIndicatorClass:i.Z.dropdownToggleIcon,menuClass:i.Z.dropdownMenu,itemClass:i.Z.dropdownMenuItem,toggleClass:i.Z.dropdownToggle,baseClass:i.Z.dropdown,baseComponent:"div",sectionClass:i.Z.dropdownGroup,sectionTitleClass:i.Z.dropdownGroupTitle,sectionComponent:"section",disabledClass:i.Z.modifiers.disabled,plainTextClass:i.Z.modifiers.text,ouiaId:(0,a.Z1)(d.displayName,p),ouiaSafe:c,ouiaComponentType:d.displayName,alignments:u},m)},o.createElement(l.R,Object.assign({},h)))};d.displayName="Dropdown"},84457:(e,n,t)=>{t.d(n,{h:()=>a});var s=t(70655),o=t(92950),i=t(33676),r=t(99355),l=t(62472);const a=e=>{var{children:n,className:t,component:d="a",isDisabled:p=!1,isAriaDisabled:c=!1,isPlainText:u=!1,isHovered:m=!1,href:h,tooltip:g,tooltipProps:f={},listItemClassName:C,onClick:b,ref:E,additionalChild:v,customChild:y,tabIndex:w=-1,icon:R=null,autoFocus:T,description:O=null,styleChildren:D,ouiaId:Z,ouiaSafe:x}=e,P=(0,s.__rest)(e,["children","className","component","isDisabled","isAriaDisabled","isPlainText","isHovered","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const N=(0,l.S$)(a.displayName,Z,x);return o.createElement(r.e4.Consumer,null,(e=>o.createElement(i.n,Object.assign({context:e,role:"menuitem",tabIndex:w,className:t,component:d,isDisabled:p,isAriaDisabled:c,isPlainText:u,isHovered:m,href:h,tooltip:g,tooltipProps:f,listItemClassName:C,onClick:b,additionalChild:v,customChild:y,icon:R,autoFocus:T,styleChildren:D,description:O},N,P),n)))};a.displayName="DropdownItem"},94868:(e,n,t)=>{t.d(n,{h:()=>p});var s=t(70655),o=t(92950),i=t(12181),r=t(79942),l=t(38296),a=t(80164),d=t(99355);class p extends o.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const n=this.refsCollection;if("ArrowDown"===e.key){const t=n.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(t),e.stopPropagation()}else if("ArrowUp"===e.key){const t=n.length,s=n.slice(t-1,t),o=s&&s[0];p.focusFirstRef(o),e.stopPropagation()}},this.childKeyHandler=(e,n,t,s=!1)=>{(0,a.qG)(e,n,t,this.refsCollection,this.props.isGrouped?this.refsCollection:o.Children.toArray(this.props.children),s)},this.sendRef=(e,n,t,s)=>{this.refsCollection[e]=[],n.map(((n,t)=>{n?n.getAttribute?this.refsCollection[e][t]=s?null:n:this.refsCollection[e][t]=i.findDOMNode(n):this.refsCollection[e][t]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),n=e&&e[0];n&&n.focus&&setTimeout((()=>n.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:n}=this.props;if(n){let n=0;return o.Children.map(e,(e=>{const t=e,s={};return t.props&&t.props.children&&(Array.isArray(t.props.children)?s.children=o.Children.map(t.props.children,(e=>o.cloneElement(e,{index:n++}))):s.children=o.cloneElement(t.props.children,{index:n++})),o.cloneElement(t,s)}))}return o.Children.map(e,((e,n)=>o.cloneElement(e,{index:n})))}render(){const e=this.props,{className:n,isOpen:t,position:i,children:p,component:c,isGrouped:u,setMenuComponentRef:m,openedOnEnter:h,alignments:g}=e,f=(0,s.__rest)(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter","alignments"]);return o.createElement(d.e4.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===c?o.createElement(d.Dl.Consumer,null,(({onSelect:e,menuClass:s})=>o.createElement("div",{className:(0,l.css)(s,i===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(g,r.Z,"align-"),n),hidden:!t,onClick:n=>e&&e(n),ref:m},p))):u&&o.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:s})=>{const p=s||"div";return o.createElement(p,Object.assign({},f,{className:(0,l.css)(e,i===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(g,r.Z,"align-"),n),hidden:!t,role:"menu",ref:m}),this.extendChildren())}))||o.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:s})=>{const p=s||c;return o.createElement(p,Object.assign({},f,{className:(0,l.css)(e,i===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(g,r.Z,"align-"),n),hidden:!t,role:"menu",ref:m}),this.extendChildren())})))}}p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.ir.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[r.Z.dropdownToggle,r.Z.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.Dl},17352:(e,n,t)=>{t.d(n,{R:()=>c});var s=t(70655),o=t(92950),i=t(79942),r=t(38296),l=t(94868),a=t(99355),d=t(62472),p=t(69121);class c extends o.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=o.createRef(),this.menuComponentRef=o.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:n,className:t,direction:u,dropdownItems:m,isOpen:h,isPlain:g,isText:f,isGrouped:C,isFullHeight:b,onSelect:E,position:v,toggle:y,autoFocus:w,menuAppendTo:R}=e,T=(0,s.__rest)(e,["children","className","direction","dropdownItems","isOpen","isPlain","isText","isGrouped","isFullHeight","onSelect","position","toggle","autoFocus","menuAppendTo"]),O=y.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let D,Z,x=!1;m&&m.length>0?(D="ul",Z=m,x=!0):(D="div",Z=o.Children.toArray(n));const P=this.openedOnEnter;return o.createElement(a.Dl.Consumer,null,(({baseClass:e,baseComponent:n,id:s,ouiaId:c,ouiaComponentType:m,ouiaSafe:E,alignments:N})=>{const k=n,I=o.createElement(l.h,{setMenuComponentRef:this.setMenuComponentRef,component:D,isOpen:h,position:v,"aria-labelledby":s?`${s}-toggle`:O,isGrouped:C,autoFocus:P&&w,alignments:N},Z),A=o.createElement("div",{className:(0,r.css)(e,u===a.dw.up&&i.Z.modifiers.top,v===a.ir.right&&i.Z.modifiers.alignRight,h&&i.Z.modifiers.expanded,t)},h&&I),M=o.createElement(k,Object.assign({},T,{className:(0,r.css)(e,u===a.dw.up&&i.Z.modifiers.top,v===a.ir.right&&i.Z.modifiers.alignRight,h&&i.Z.modifiers.expanded,b&&i.Z.modifiers.fullHeight,t),ref:this.baseComponentRef},(0,d.dp)(m,c,E)),o.Children.map(y,(e=>o.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:h,id:O,isPlain:g,isText:f,"aria-haspopup":x,onEnter:()=>{this.onEnter(),e.props.onEnter&&e.props.onEnter()}}))),"inline"===R&&h&&I);return"inline"===R?M:o.createElement(p.r,{trigger:M,popper:A,direction:u,position:v,appendTo:"parent"===R?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():R,isVisible:h})}))}}c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isText:!1,isGrouped:!1,position:a.ir.left,direction:a.dw.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline"}},94024:(e,n,t)=>{t.d(n,{a:()=>l});var s=t(70655),o=t(92950),i=t(62165),r=t(1024);const l=e=>{var{id:n="",children:t=null,className:l="",isOpen:a=!1,"aria-label":d="Actions",parentRef:p=null,getMenuRef:c=null,isActive:u=!1,isPlain:m=!1,isDisabled:h=!1,bubbleEvent:g=!1,onToggle:f=(()=>{}),ref:C}=e,b=(0,s.__rest)(e,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return o.createElement(r.Z,Object.assign({id:n,className:l,isOpen:a,"aria-label":d,parentRef:p,getMenuRef:c,isActive:u,isPlain:m,isDisabled:h,onToggle:f,bubbleEvent:g},b),o.createElement(i.ZP,null))};l.displayName="KebabToggle"},1024:(e,n,t)=>{t.d(n,{Z:()=>p});var s=t(70655),o=t(92950),i=t(79942),r=t(99355),l=t(38296),a=t(64190);const d={default:"",primary:i.Z.modifiers.primary,secondary:i.Z.modifiers.secondary};class p extends o.Component{constructor(){super(...arguments),this.buttonRef=o.createRef(),this.componentDidMount=()=>{document.addEventListener("click",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress)},this.componentWillUnmount=()=>{document.removeEventListener("click",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress)},this.onDocClick=e=>{const{isOpen:n,parentRef:t,onToggle:s,getMenuRef:o}=this.props,i=o&&o(),r=t&&t.current&&t.current.contains(e.target),l=i&&i.contains&&i.contains(e.target);!n||r||l||s(!1,e)},this.onEscPress=e=>{const{parentRef:n,getMenuRef:t}=this.props,s=e.keyCode||e.which,o=t&&t(),i=n&&n.current&&n.current.contains(e.target),r=o&&o.contains&&o.contains(e.target);!this.props.isOpen||s!==a.nx.ESCAPE_KEY&&"Tab"!==e.key||!i&&!r||(this.props.onToggle(!1,e),this.buttonRef.current.focus())},this.onKeyDown=e=>{("Tab"!==e.key||this.props.isOpen)&&("Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key||this.props.isOpen||(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),this.props.onToggle(!this.props.isOpen,e),this.props.onEnter()):(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),this.props.onToggle(!this.props.isOpen,e)))}}render(){const e=this.props,{className:n,children:t,isOpen:a,isDisabled:p,isPlain:c,isText:u,isPrimary:m,isSplitButton:h,toggleVariant:g,onToggle:f,"aria-haspopup":C,isActive:b,bubbleEvent:E,onEnter:v,parentRef:y,getMenuRef:w,id:R,type:T}=e,O=(0,s.__rest)(e,["className","children","isOpen","isDisabled","isPlain","isText","isPrimary","isSplitButton","toggleVariant","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return o.createElement(r.Dl.Consumer,null,(({toggleClass:e})=>o.createElement("button",Object.assign({},O,{id:R,ref:this.buttonRef,className:(0,l.css)(h?i.Z.dropdownToggleButton:e||i.Z.dropdownToggle,b&&i.Z.modifiers.active,c&&i.Z.modifiers.plain,u&&i.Z.modifiers.text,m&&i.Z.modifiers.primary,d[g],n),type:T||"button",onClick:e=>f(!a,e),"aria-expanded":a,"aria-haspopup":C,onKeyDown:e=>this.onKeyDown(e),disabled:p}),t)))}}p.displayName="Toggle",p.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isText:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},9003:(e,n,t)=>{t.d(n,{LC:()=>i,ZP:()=>r,sl:()=>o});var s=t(40400);const o={name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0},i=(0,s.IU)(o),r=i},62165:(e,n,t)=>{t.d(n,{HJ:()=>i,Lf:()=>o,ZP:()=>r});var s=t(40400);const o={name:"EllipsisVIcon",height:512,width:192,svgPath:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",yOffset:0,xOffset:0},i=(0,s.IU)(o),r=i}}]);
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[156],{62472:(e,n,t)=>{"use strict";t.d(n,{S$:()=>c,Z1:()=>s,dp:()=>a,ql:()=>u});var o=t(92950);let i=0;const r="OUIA-Generated-",l={};function a(e,n,t=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":t,"data-ouia-component-id":n}}const c=(e,n,t=!0,o)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":t,"data-ouia-component-id":s(e,n,o)}),s=(e,n,t)=>{const i=(0,o.useMemo)((()=>u(e,t)),[e,t]);return null!=n?n:i};function u(e,n){try{let t;return t="undefined"!=typeof window?`${window.location.href}-${e}-${n||""}`:`${e}-${n||""}`,l[t]||(l[t]=0),`${r}${e}-${n?`${n}-`:""}${++l[t]}`}catch(t){return`${r}${e}-${n?`${n}-`:""}${++i}`}}},40400:(e,n,t)=>{"use strict";t.d(n,{IU:()=>a,Jh:()=>o});var o,i=t(70655),r=t(92950);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o||(o={}));let l=0;function a({name:e,xOffset:n=0,yOffset:t=0,width:a,height:c,svgPath:s}){var u;return u=class extends r.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{size:l,color:u,title:d,noVerticalAlign:p}=e,f=(0,i.__rest)(e,["size","color","title","noVerticalAlign"]),v=Boolean(d),h=(e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}})(l),b=-.125*Number.parseFloat(h),m=p?null:{verticalAlign:`${b}em`},g=[n,t,a,c].join(" ");return r.createElement("svg",Object.assign({style:m,fill:u,height:h,width:h,viewBox:g,"aria-labelledby":v?this.id:null,"aria-hidden":!v||null,role:"img"},f),v&&r.createElement("title",{id:this.id},d),r.createElement("path",{d:s}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},u}},78236:(e,n)=>{"use strict";n.__esModule=!0,n.global_breakpoint_md={name:"--pf-global--breakpoint--md",value:"768px",var:"var(--pf-global--breakpoint--md)"},n.default=n.global_breakpoint_md},48799:(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var o=t(85893),i=t(92950),r=t(94184),l=t.n(r),a=t(76857),c=t(62472),s=function(){return s=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},s.apply(this,arguments)},u=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};const d=function(e){var n=e.id,t=e.isDisabled,r=void 0!==t&&t,d=e.items,p=void 0===d?[]:d,f=e.onSelect,v=void 0===f?function(){}:f,h=e.checked,b=void 0!==h&&h,m=e.toggleProps,g=e.count,y=e.className,x=void 0===y?"":y,j=e.ouiaId,w=e.ouiaSafe,C=void 0===w||w,k=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}(e,["id","isDisabled","items","onSelect","checked","toggleProps","count","className","ouiaId","ouiaSafe"]),O=(0,i.useState)(!1),S=O[0],I=O[1],D=(0,i.useRef)(!1).current,P=(0,i.useRef)((0,c.ql)("RHI/BulkSelect")).current,N=function(e){return I(e)},_=void 0!==j?j:P;return(0,o.jsx)(i.Fragment,{children:p&&p.length>0?(0,o.jsx)(a.Dropdown,s({onSelect:function(){return N(!1)}},k,{className:l()(x,"ins-c-bulk-select"),ouiaId:_,ouiaSafe:C,toggle:(0,o.jsx)(a.DropdownToggle,s({},m,{isDisabled:r,ouiaId:_,splitButtonItems:[(0,o.jsx)(i.Fragment,{children:D?(0,o.jsx)(a.DropdownToggleCheckbox,{id:n?"".concat(n,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:v,checked:b,ouiaId:_}):(0,o.jsx)(a.DropdownToggleCheckbox,s({id:n?"".concat(n,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:v,isChecked:b,ouiaId:_},{children:g?"".concat(g," selected"):""}))},"split-checkbox")],onToggle:N})),isOpen:S,dropdownItems:u(u([],void 0!==g&&g>0?[(0,o.jsxs)(a.DropdownItem,s({isDisabled:!0,className:l()({"ins-c-bulk-select__selected":!D})},{children:[g," Selected"]}),"count")]:[],!0),p.map((function(e,n){return(0,o.jsx)(a.DropdownItem,s({component:"button",ouiaId:"".concat(_,"-").concat(e.key||n),onClick:function(t){return e.onClick&&e.onClick(t,e,n)}},null==e?void 0:e.props,{children:e.title}),e.key||n)})),!0)})):(0,o.jsx)(a.Checkbox,s({},k,{"aria-label":"Select all",className:l()(x,"ins-c-bulk-select"),id:"".concat(n,"-checkbox"),isChecked:b,onChange:v}))})}},40787:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var o=t(92950),i=t(85893),r=t(76857),l=t(18446),a=t.n(l),c=t(57557),s=t.n(c),u=t(68097),d=function(){return d=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},d.apply(this,arguments)},p=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},f=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};const v=function(e){var n=e.items,t=void 0===n?[]:n,l=e.value,c=void 0===l?[]:l,v=e.onChange,h=void 0===v?function(){}:v,b=e.isDisabled,m=void 0!==b&&b,g=p(e,["items","value","onChange","isDisabled"]),y=g.placeholder,x=g.className,j=(0,o.useState)(!1),w=j[0],C=j[1],k=(0,o.useState)([]),O=k[0],S=k[1],I=(0,o.useRef)(O),D=function(e){I.current=O,S(e)};(0,o.useEffect)((function(){!a()(I.current,c)&&c&&D(c)}),[O,c]);var P=function(){return Array.from(new Set(f(f([],c&&c.length>0&&c.constructor===Array?c.map((function(e){return(0,u.P)(e)?e.value:e})):[],!0),O,!0)))};return(0,i.jsx)(o.Fragment,{children:!t||t&&t.length<=0?(0,i.jsx)(u.Z,d({},g,{onChange:h,isDisabled:m,value:"".concat(P())})):(0,i.jsx)(r.Select,d({className:x,variant:r.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return C(e)},isDisabled:m,onSelect:function(e,n){return function(e,n){var t=P();t=t.includes(n)?t.filter((function(e){return e!==n})):f(f([],t,!0),[n],!1),null==h||h(e,t,n),D(t)}(e,n)},selections:P(),isOpen:w,placeholderText:y,ouiaId:y},{children:t.map((function(e,n){var t=e.value,i=e.onClick,l=e.label,a=e.id,c=p(e,["value","onClick","label","id"]);return(0,o.createElement)(r.SelectOption,d({},s()(c,"onChange"),{key:a||n,value:String(t||a||n),onClick:function(e){return null==i?void 0:i(e,d({value:t,label:l,id:a},c),n)}}),l)}))}))})}},18213:(e,n,t)=>{"use strict";t.d(n,{Z:()=>f});var o=t(85893),i=t(92950),r=t(94184),l=t.n(r),a=t(78236),c=t(76857),s=t(84747),u=t(68097),d=t(87123),p=(t(74131),function(){return p=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},p.apply(this,arguments)});const f=function(e){var n=e.hideLabel,t=void 0!==n&&n,r=e.id,f=void 0===r?"default-input":r,v=e.isDisabled,h=void 0!==v&&v,b=e.items,m=void 0===b?[]:b,g=e.onChange,y=e.placeholder,x=e.useMobileLayout,j=void 0!==x&&x,w=e.value,C=void 0===w?"":w,k=e.innerRef,O=parseInt(a.default.value.replace("px","")),S=function(e){return e<=O},I=(0,i.useState)(!1),D=I[0],P=I[1],N=(0,i.useState)(),_=N[0],T=N[1],E=(0,i.useState)(S(window.innerWidth)),Z=E[0],V=E[1],A=(0,i.useRef)((function(e){V(S((null==e?void 0:e.target).innerWidth))}));(0,i.useEffect)((function(){return j||console.warn('The prop "useMobileLayout" is set to false. You are using an outdated mobile layout of conditional filter.\n    Please switch to new layout by adding "useMobileLayout={true}" prop to the PrimaryToolbar or ConditionalFilter directly.\n    The new mobile layout will become the default in next minor release.'),window.addEventListener("resize",A.current),function(){A.current&&window.removeEventListener("resize",A.current)}}),[]);var F=g?C:_,B=m&&m.length&&(m.find((function(e,n){return e.value===F||n===Number(F)}))||m[0]),R=g||function(e,n){return T(n)},M=j&&Z,$=function(e){return e[0].toUpperCase()+e.substring(1)},L=B&&(d.w[B.type]||d.w.text),G=j&&Z?function(e){return(0,o.jsx)(c.ToolbarToggleGroup,p({},e,{breakpoint:"md",toggleIcon:(0,o.jsx)(s.FilterIcon,{})}))}:i.Fragment;return(0,o.jsxs)(G,{children:[j&&Z&&(0,o.jsx)(c.ToolbarGroup,p({className:"ins-c-conditional-filter mobile"},{children:m.map((function(e,n){var t=e&&(d.w[e.type]||d.w.text);return(0,o.jsx)(c.ToolbarItem,{children:(0,o.jsx)(t,p({},e.type!==d.Y.custom&&{placeholder:y||e.placeholder||"Filter by ".concat(e.label),id:e.filterValues?e.filterValues.id:F?String(F):void 0,innerRef:k},e.filterValues))},n)}))})),!M&&(0,o.jsx)(i.Fragment,{children:!m||m&&m.length<=0?(0,o.jsx)("div",p({className:l()("ins-c-conditional-filter",{desktop:j})},{children:(0,o.jsx)(u.Z,{innerRef:k,id:f,isDisabled:h,onChange:function(e){return R(e,e.target.value)},placeholder:y,value:F?String(F):void 0,"widget-type":"InsightsInput"})})):(0,o.jsxs)(c.Split,p({className:l()("ins-c-conditional-filter",{desktop:j})},{children:[m.length>1&&(0,o.jsx)(c.SplitItem,{children:(0,o.jsx)(c.Dropdown,{ref:k,className:"ins-c-conditional-filter__group",onSelect:function(){return P(!1)},isOpen:D,ouiaId:"ConditionalFilter",toggle:(0,o.jsxs)(c.DropdownToggle,p({"aria-label":"Conditional filter",onToggle:P,isDisabled:h,className:t?"ins-c-conditional-filter__no-label":"",ouiaId:"ConditionalFilter"},{children:[(0,o.jsx)(s.FilterIcon,{size:"sm"}),!t&&(0,o.jsx)("span",p({className:"ins-c-conditional-filter__value-selector"},{children:B&&$(String(B.label))}))]})),dropdownItems:m.map((function(e,n){return(0,o.jsx)(c.DropdownItem,p({component:"button",ouiaId:String(e.label),onClick:function(t){return R(t,e.value||n)},isHovered:B.label===e.label},{children:$(String(e.label))}),e.id?"".concat(e.id,"-dropdown"):n)}))})}),L&&(0,o.jsx)(c.SplitItem,p({isFilled:!0},{children:(0,o.jsx)(L,p({},B.type!==d.Y.custom&&{placeholder:y||B.placeholder||"Filter by ".concat(B.label),id:B.filterValues&&B.filterValues.id||F?String(F):void 0},B.filterValues))}))]}))})]})}},21556:(e,n,t)=>{"use strict";t.d(n,{Z:()=>y});var o=t(85893),i=t(92950),r=t(94184),l=t.n(r),a=t(76857),c=t(22137),s=function(){return s=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},s.apply(this,arguments)},u=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))},d=function(e,n,t,o,i,r){var l,a,c,u,d,p=s(s({},r),i);if(void 0===p[e])return!1;if(void 0!==(null==(d=p[e][n])?void 0:d.group)){var f=p[e][n];if(f.isSelected){if(null===(l=null==f?void 0:f.item)||void 0===l?void 0:l.id)return t===(null===(a=null==f?void 0:f.item)||void 0===a?void 0:a.id);if(null===(c=null==f?void 0:f.item)||void 0===c?void 0:c.tagValue)return o===(null===(u=null==f?void 0:f.item)||void 0===u?void 0:u.tagValue)}return Boolean(f.isSelected)}return Boolean(p[e][n])},p=function(e,n,t,o,i,r,l,a){return void 0===i&&(i=""),((null==e?void 0:e.map((function(u,d){return s(s({},u),{className:"".concat((null==u?void 0:u.className)||"pf-u-pl-sm"),key:u.id||u.value||d,value:String(u.value||u.id||d),onClick:function(d,p,f){var v,h=[d,t(o||u.type,i,(o||u.type)===c.Z.treeView?p:u.value,f),s({value:i,label:r||u.label,id:l||u.id,type:o||u.type,items:e},a||u),u,i,u.value];null==n||n.apply(void 0,h),null===(v=null==u?void 0:u.onClick)||void 0===v||v.call(u,d,s(s({},u),{label:"string"==typeof u.label?u.label:""}),void 0,f)}})})))||[]).filter((function(e){return!e.noFilter}))},f=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?s(s({},e),{children:e.children.map((function(e){return f(e)}))}):e},v=function(e){return function(n,t,o,i){void 0===n&&(n=c.Z.button),void 0===t&&(t=""),void 0===o&&(o=""),void 0===i&&(i=!1);var r=null==e?void 0:e[t],l=n===c.Z.treeView?[o].reduce((function e(n,t){return Array.isArray(null==t?void 0:t.children)?t.children.reduce(e,n)||[]:(n.push(t),n)}),[]):[],a=n===c.Z.treeView?l.map((function(e){return e.id})):[String(o)];if(r){var u=e;return a.map((function(e){var o,r,l,a;void 0===e&&(e="");var d=u[t];u=n!==c.Z.radio&&(d[e]instanceof Object?d[e].isSelected:Boolean(d[e]))?s(s({},u),((o={})[t]=s(s({},d||{}),((r={})[e]=n===c.Z.treeView&&i,r)),o)):s(s({},u),((l={})[t]=s(s({},n!==c.Z.radio&&d||{}),((a={})[e]=!0,a)),l))})),u}return a.reduce((function(e,n){var o,i;return s(s({},e),((o={})[t]=s(s({},null==e?void 0:e[t]),((i={})[n||""]=!0,i)),o))}),e)}},h=function(e,n,t,o){return e.children?e.children.every((function(e){return h(e,n,t,o)})):d(n,e.id||"",void 0,void 0,t,o)},b=function(e,n,t,o){return e.children?e.children.some((function(e){return b(e,n,t,o)})):d(n,e.id||"",void 0,void 0,t,o)},m=function(e,n,t,o){var i=h(e,n,t,o);return e.checkProps={checked:!1},i?e.checkProps.checked=!0:b(e,n,t,o)&&(e.checkProps={checked:null}),e.children?s(s({},e),{children:e.children.map((function(e){return m(e,n,t,o)}))}):e},g=function(){return g=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},g.apply(this,arguments)};const y=function(e){var n=e.className,t=e.filterBy,r=void 0===t?"":t,h=e.groups,b=void 0===h?[]:h,y=e.items,x=e.isFilterable,j=void 0!==x&&x,w=e.onFilter,C=e.onChange,k=e.onShowMore,O=e.placeholder,S=e.selected,I=e.showMoreTitle,D=e.showMoreOptions,P=e.isDisabled,N=(0,i.useState)({}),_=N[0],T=N[1],E=(0,i.useState)(""),Z=E[0],V=E[1],A=(0,i.useState)(!1),F=A[0],B=A[1],R=(0,i.useRef)(null),M=(0,i.useRef)(null),$=(0,i.useRef)(null);(0,i.useEffect)((function(){S&&T(S)}),[S]),(0,i.useEffect)((function(){V(r)}),[r]);var L=function(e){var n,t,o;F&&((null===(n=$.current)||void 0===n?void 0:n.contains(e.target))||(null===(t=R.current)||void 0===t?void 0:t.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(B(!F),null===(o=R.current)||void 0===o||o.focus()))},G=function(e){var n;F&&!(null===(n=$.current)||void 0===n?void 0:n.contains(e.target))&&B(!1)};(0,i.useEffect)((function(){return window.addEventListener("keydown",L),window.addEventListener("click",G),function(){window.removeEventListener("keydown",L),window.removeEventListener("click",G)}}),[F,$]);var z=p((null==y?void 0:y.map((function(e){return e.type===c.Z.treeView?f(e):e})))||[],C,v(S||{})),U=function(e,n,t){return e.map((function(e){var o=e.value,i=e.label,r=e.groupSelectable,l=e.id,a=e.type,d=e.items,v=e.noFilter,h=a===c.Z.treeView?d.map((function(e){return f(e)})):d;return{label:i,noFilter:v,value:o,type:a,groupSelectable:r,items:p(u(u([],r?[s({value:o||"",label:i||"",id:l||"",type:a,className:"pf-u-pl-xs"},e)]:[],!0),h,!0),n,t,a,o,i,l,e)}})).filter((function(e){var n=e.noFilter,t=e.items;return!n||(void 0===t?[]:t).length>0}))}(b,C,v(S||{})),Y=function(e,n,t,i){return void 0===i&&(i=""),(0,o.jsx)(a.MenuItem,g({itemId:n,className:null==e?void 0:e.className,onClick:e.onClick&&(t||e.type)===c.Z.checkbox?function(n){e.onClick&&e.onClick(),n.preventDefault()}:void 0},{children:(t||e.type)===c.Z.treeView?(0,o.jsx)(a.TreeView,{data:[m(e,i,_,S||{})],onCheck:function(n,t){return function(e,n,t){var o,i,r;return null===(i=(o=t[0]).onClick)||void 0===i?void 0:i.call(o,e,n,void 0,null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.checked)}(n,t,[e])},hasChecks:!0}):(t||e.type)===c.Z.checkbox?(0,o.jsx)(a.Checkbox,g({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||d(i,(null==e?void 0:e.value)||n,null==e?void 0:e.id,null==e?void 0:e.tagValue,_,S||{})||!1,onChange:function(n,t){var o;null===(o=null==e?void 0:e.onChange)||void 0===o||o.call(e,n,t)},onClick:e.onClick?function(n){e.onClick&&e.onClick(),n.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n)})):(t||e.type)===c.Z.radio?(0,o.jsx)(a.Radio,g({},e,{isChecked:(null==e?void 0:e.isChecked)||d(i,(null==e?void 0:e.value)||n,null==e?void 0:e.id,null==e?void 0:e.tagValue,_,S||{})||!1,onChange:function(n,t){var o;null===(o=null==e?void 0:e.onChange)||void 0===o||o.call(e,n,t)},value:(null==e?void 0:e.value)||n,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(i,"-").concat(n)})):(t||e.type)===c.Z.button?(0,o.jsx)(a.Button,g({id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},{children:null==e?void 0:e.label})):(null==e?void 0:e.label)||""}),"".concat(e.value,"-").concat(n,"-item"))},H=function(e,n,t){return void 0===t&&(t=""),e.map((function(e,i){return(n||e.type)===c.Z.treeView?(0,o.jsx)("div",g({className:"ins-c-tree-view"},{children:Y(e,i,n,t)}),"".concat(e.value,"-").concat(i,"-item")):Y(e,i,n,t)}))};return(0,o.jsx)("div",g({ref:M},{children:(0,o.jsx)(a.Popper,{appendTo:M.current,trigger:(0,o.jsx)(a.MenuToggle,g({"aria-label":"Group filter",ref:R,onClick:function(e){e.stopPropagation(),e.persist(),B(!F)},isExpanded:F,className:n,isDisabled:P},{children:j||w?(0,o.jsx)(a.TextInput,{isDisabled:P,"aria-label":"input with dropdown and clear button",placeholder:O,value:Z,tabIndex:0,onChange:function(e){V(e),null==w||w(e)},type:"search"}):O})),popper:(0,o.jsx)(a.Menu,g({ref:$,className:l()("ins-c-menu__scrollable",n,{"pf-m-expanded":F})},{children:(0,o.jsx)(a.MenuContent,{children:(0,o.jsxs)(a.MenuList,g({"aria-label":"Group filter"},{children:[z.length>0&&(0,o.jsx)(a.MenuGroup,{children:H(z)}),U.map((function(e,n){return(0,o.jsx)(a.MenuGroup,g({label:e.groupSelectable||"string"!=typeof e.label?void 0:e.label},{children:H(e.items,e.type,e.value)}),"".concat(e.label,"-").concat(n,"-group"))})),k?(0,o.jsx)(a.MenuItem,g({itemId:"loader",className:"ins-c-menu__show--more"},D,{onClick:function(e){return k(e)}},{children:I})):(0,o.jsx)("span",{hidden:!0,value:""})]}))})})),isVisible:F})}))}},26154:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var o=t(92950),i=t(85893),r=t(76857),l=t(68097),a=function(){return a=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},a.apply(this,arguments)},c=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t};const s=function(e){var n=e.items,t=void 0===n?[]:n,s=e.onChange,u=void 0===s?function(){}:s,d=e.isDisabled,p=void 0!==d&&d,f=c(e,["items","onChange","isDisabled"]),v=f.placeholder,h=f.className,b=f.value,m=(0,o.useState)(!1),g=m[0],y=m[1],x=(0,o.useState)(),j=x[0],w=x[1],C=function(){return b?(0,l.P)(b)?b.value:b:j?(0,l.P)(j)?j.value:j:void 0},k=C();return(0,i.jsx)(o.Fragment,{children:!t||t&&t.length<=0?(0,i.jsx)(l.Z,a({},f,{onChange:u,isDisabled:p,value:"".concat(C())})):(0,i.jsx)(r.Select,a({className:h,variant:r.SelectVariant.single,"aria-label":"Select Input",isDisabled:p,onToggle:function(e){return y(e)},onSelect:function(e,n){return function(e,n){null==u||u(e,n),w(n)}(e,n)},isOpen:g,placeholderText:v,ouiaId:v},{children:t.map((function(e,n){var t=e.value,l=e.isChecked,s=e.onChange,u=e.label,d=e.id,p=c(e,["value","isChecked","onChange","label","id"]);return(0,o.createElement)(r.SelectOption,a({},p,{key:d||n,value:t||""+n}),(0,i.jsx)(r.Radio,{name:d||"".concat(n,"-radio"),label:u,value:t||n,isChecked:l||void 0!==k&&k===t||void 0!==k&&k===""+n||!1,onChange:function(e,o){return null==s?void 0:s(o,a({id:d,label:u,value:t,isChecked:l},p),n)},id:d||"".concat(t,"-").concat(n)}))}))}))})}},68097:(e,n,t)=>{"use strict";t.d(n,{P:()=>c,Z:()=>s});var o=t(85893),i=t(92950),r=t(76857),l=t(84747),a=(t(74131),function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t});function c(e){return void 0!==e.value}const s=function(e){var n=e.icon,t=e.id,c=e.isDisabled,s=void 0!==c&&c,u=e.className,d=e.onChange,p=e.onSubmit,f=void 0===p?function(){}:p,v=e.value,h=void 0===v?"":v,b=e.placeholder,m=e.innerRef,g=a(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder","innerRef"]),y=h,x=(0,i.useState)(""),j=x[0],w=x[1],C=n||l.SearchIcon;return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(r.TextInput,{"aria-label":g["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(u||""),"data-ouia-component-type":"PF4/TextInput",id:t,isDisabled:s,value:d?"string"==typeof h?y:y.value:j,onChange:function(e,n){return function(e,n){return d?d(e,n):w(n)}(n,n.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==f?void 0:f(e,("string"==typeof h?y:y.value)||j))},ouiaId:"ConditionalFilter",placeholder:b,"widget-type":"InsightsInput",ref:m}),(0,o.jsx)(C,{size:"sm",className:"ins-c-search-icon"})]})}},87123:(e,n,t)=>{"use strict";t.d(n,{Y:()=>c,w:()=>s});var o=t(92950),i=t(68097),r=t(40787),l=t(26154),a=t(21556),c={text:"text",checkbox:"checkbox",radio:"radio",custom:"custom",group:"group"},s={text:i.Z,checkbox:r.Z,radio:l.Z,custom:o.Fragment,group:a.Z}},22137:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o={treeView:"treeView",checkbox:"checkbox",radio:"radio",button:"button",plain:"plain"}},97138:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var o=t(85893),i=t(76857),r=t(92950),l=t.n(r),a=t(84747),c=function(){return c=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},c.apply(this,arguments)},s=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};const u=function(e){var n,t=e.extraItems,u=void 0===t?[]:t,d=e.onSelect,p=void 0===d?function(){}:d,f=e.isDisabled,v=e.tooltipText,h=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}(e,["extraItems","onSelect","isDisabled","tooltipText"]),b=(0,r.useState)(!1),m=b[0],g=b[1];return(0,o.jsx)(l().Fragment,{children:(n=(0,o.jsx)(i.Dropdown,c({isPlain:!0},h,{onSelect:function(){return g((function(e){return!e}))},toggle:(0,o.jsx)(i.DropdownToggle,c({"aria-label":"Export",toggleIndicator:null,onToggle:function(e){return g(e)},isDisabled:f,ouiaId:"Export"},{children:(0,o.jsx)(a.ExportIcon,{size:"sm"})})),isOpen:m,ouiaId:"Export",dropdownItems:s([(0,o.jsx)(i.DropdownItem,c({ouiaId:"DownloadCSV",component:"button",onClick:function(e){return p(e,"csv")},isDisabled:f},{children:"Export to CSV"}),"download-csv"),(0,o.jsx)(i.DropdownItem,c({ouiaId:"DownloadJSON",component:"button",onClick:function(e){return p(e,"json")},isDisabled:f},{children:"Export to JSON"}),"download-json")],u,!0)})),(0,o.jsx)(l().Fragment,{children:v?(0,o.jsx)(i.Tooltip,c({content:v},{children:n})):n}))})}},51812:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var o=t(85893),i=t(76857),r=t(94184),l=t.n(r),a=function(){return a=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},a.apply(this,arguments)};function c(e){return Object.prototype.hasOwnProperty.call(e,"category")}function s(e){return!c(e)}const u=function(e){var n=e.className,t=e.filters,r=void 0===t?[]:t,u=e.onDelete,d=void 0===u?function(){}:u,p=e.deleteTitle,f=void 0===p?"Clear filters":p,v=e.showDeleteButton,h=e.onDeleteGroup,b=r.filter(c),m=b.map((function(e,n){return(0,o.jsx)(i.ChipGroup,a({categoryName:String(e.category)||" "},h&&{isClosable:!0,onClick:function(t){t.stopPropagation(),h(t,[e],b.filter((function(e,t){return t!==n})))}},{children:e.chips.map((function(n){return(0,o.jsxs)(i.Chip,a({onClick:function(t){t.stopPropagation(),d(t,[a(a({},e),{chips:[n]})])}},{children:[n.name,n.count&&(0,o.jsx)(i.Badge,a({isRead:n.isRead},{children:n.count}),"chip_badge_".concat(n.id))]}),n.name)}))}),"group_".concat(e.category))})),g=r.filter(s);return(0,o.jsxs)("span",a({className:l()(n,"ins-c-chip-filters")},{children:[m,g&&g.map((function(e){return(0,o.jsx)(i.ChipGroup,{children:(0,o.jsxs)(i.Chip,a({onClick:function(n){n.stopPropagation(),d(n,[e])}},{children:[e.name,e.count&&(0,o.jsx)(i.Badge,a({isRead:e.isRead},{children:e.count}),"chip_badge_".concat(e.id))]}))},"group_plain_chip_".concat(e.name))})),(!0===v||void 0===v&&r.length>0)&&(0,o.jsx)(i.Button,a({variant:"link",ouiaId:"ClearFilters",onClick:function(e){return d(e,r,!0)}},{children:f}))]}))}},63753:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>v});var o=t(85893),i=t(92950),r=t.n(i),l=t(76857),a=t(97138),c=t(94184),s=t.n(c),u=function(){return u=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},u.apply(this,arguments)},d=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};function p(e){return void 0!==e.label}var f=function(e,n){var t,o="object"==typeof e&&null!==typeof e&&"function"==typeof(null==e?void 0:e.onClick)?function(t){return null==e?void 0:e.onClick(t,e,n)}:void 0;return u(u({},null==e?void 0:e.props),{onClick:o,component:(null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.component)||(r().isValidElement(e.label||e)?"div":"button"),children:"object"==typeof e&&null!==typeof e?null==e?void 0:e.label:e})};const v=function(e){var n,t=e.actions,c=void 0===t?[]:t,v=e.overflowActions,h=void 0===v?[]:v,b=e.onSelect,m=void 0===b?function(){}:b,g=e.dropdownProps,y=void 0===g?{}:g,x=e.kebabToggleProps,j=e.exportConfig,w=(0,i.useState)(!1),C=w[0],k=w[1],O=function(e){return k(e)},S=c[0],I=c.slice(1),D=d(d(d(d([],S?[(0,o.jsx)(l.DropdownItem,u({},f(S,"first-action"),{className:s()("ins-c-primary-toolbar__first-action",p(S)?null===(n=null==S?void 0:S.props)||void 0===n?void 0:n.className:void 0)}),"first-action")]:[],!0),I.map((function(e,n){var t;return(0,o.jsx)(l.DropdownItem,u({},f(e,n)),(null==e?void 0:e.key)||(null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.key)||n)})),!0),c.length>0&&h.length>0?[(0,o.jsx)(l.DropdownSeparator,{className:"ins-c-primary-toolbar__overflow-actions-separator"},"separator")]:[],!0),h.map((function(e,n){return function(e,n){var t=e;return(0,i.createElement)(l.DropdownItem,u({},t.props,{className:"ins-c-primary-toolbar__overflow-actions",key:t.value||t.key||"".concat(n,"-overflow"),component:t.props&&t.props.component||r().isValidElement(t.label||e)?"div":"button",onClick:function(e){return t.onClick&&t.onClick(e,t,n)}}),t.label||e)}(e,n)})),!0);return(0,o.jsxs)(i.Fragment,{children:[S&&(0,o.jsx)(l.ToolbarItem,u({className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},{children:p(S)?(0,o.jsx)(l.Button,u({ouiaId:"".concat(S.label)},S.props,{onClick:S.onClick||S.props&&S.props.onClick||void 0},{children:S.label})):S})),j&&(j.extraItems||j.onSelect)&&(0,o.jsx)(l.ToolbarItem,u({className:"pf-m-spacer-sm"},{children:(0,o.jsx)(a.Z,u({},j))})),(c&&(null==c?void 0:c.length)>0||h.length>0)&&(0,o.jsx)(l.ToolbarItem,u({className:"".concat(c.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},{children:(0,o.jsx)(l.Dropdown,u({},y,{isOpen:C,isPlain:!0,onSelect:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];m&&m.apply(void 0,e),O(!1)},ouiaId:"Actions",toggle:(0,o.jsx)(l.KebabToggle,u({},x,{onToggle:function(e){O(e)}})),dropdownItems:D}))}))]})}},95809:(e,n,t)=>{"use strict";t.d(n,{Z:()=>h});var o=t(85893),i=t(92950),r=t.n(i),l=t(76857),a=t(84747),c=t(1936),s=t(63753),u=t(48799),d=t(18213),p=t(51812),f=t(68379),v=function(){return v=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},v.apply(this,arguments)};const h=function(e){var n,t=e.id,i=e.className,h=e.toggleIsExpanded,b=void 0===h?function(){}:h,m=e.bulkSelect,g=e.filterConfig,y=e.dedicatedAction,x=e.actionsConfig,j=e.sortByConfig,w=e.pagination,C=e.activeFiltersConfig,k=e.children,O=e.exportConfig,S=e.expandAll,I=e.useMobileLayout,D=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}(e,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),P=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,r=n.length;i<r;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))}([],j?[{label:"Sort order ASC",props:{isDisabled:j.direction===c.SortByDirection.asc},onClick:function(e){return j.onSortChange&&j.onSortChange(e,c.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:j.direction===c.SortByDirection.desc},onClick:function(e){return j.onSortChange&&j.onSortChange(e,c.SortByDirection.desc)}}]:[],!0);return(0,o.jsxs)(l.Toolbar,v({},D,{className:"".concat(i||""," ins-c-primary-toolbar"),toggleIsExpanded:b,id:t?"".concat(t):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"},{children:[(0,o.jsxs)(l.ToolbarContent,{children:[(S||m||g||y)&&(0,o.jsxs)(l.ToolbarGroup,v({className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},{children:[S&&(0,o.jsx)(l.ToolbarItem,{children:(n=S,r().isValidElement(n)?S:(0,o.jsx)(l.Button,v({},S.buttonProps,{variant:"plain","aria-label":"".concat(S.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(e){return S.onClick(e,!S.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:S.isDisabled},{children:(0,o.jsx)(l.ToolbarExpandIconWrapper,{children:S.isAllExpanded?(0,o.jsx)(a.AngleDownIcon,{}):(0,o.jsx)(a.AngleRightIcon,{})})})))}),m&&(0,o.jsx)(l.ToolbarItem,{children:r().isValidElement(m)?m:(0,o.jsx)(u.Z,v({ouiaId:"BulkSelect"},m))}),g&&(0,o.jsx)(l.ToolbarItem,v({className:"ins-c-primary-toolbar__filter"},{children:r().isValidElement(g)?g:(0,o.jsx)(d.Z,v({useMobileLayout:I},g))})),y&&(0,o.jsx)(l.ToolbarItem,{children:y})]})),r().isValidElement(x)?x:(x&&x.actions&&x.actions.length>0||j||O)&&(0,o.jsx)(s.ZP,v({},x||{},{exportConfig:O,overflowActions:P})),j&&(0,o.jsx)(l.ToolbarItem,v({className:"ins-c-primary-toolbar__sort-by"},{children:r().isValidElement(j)?j:(0,o.jsx)(f.Z,v({},j))})),k,w&&(0,o.jsx)(l.ToolbarItem,v({className:"ins-c-primary-toolbar__pagination"},{children:r().isValidElement(w)?w:(0,o.jsx)(l.Pagination,v({isCompact:!0,ouiaId:"CompactPagination"},w))}))]}),C&&r().isValidElement(C)?(0,o.jsx)(l.ToolbarContent,{children:(0,o.jsx)(l.ToolbarItem,{children:C})}):void 0!==(null==C?void 0:C.filters)&&(C.filters.length>0||!0===C.showDeleteButton)&&(0,o.jsx)(l.ToolbarContent,{children:(0,o.jsx)(l.ToolbarItem,{children:(0,o.jsx)(p.Z,v({},C))})})]}))}},68379:(e,n,t)=>{"use strict";t.d(n,{N:()=>c,Z:()=>s});var o=t(85893),i=t(1936),r=t(76857),l=t(84747),a=function(){return a=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},a.apply(this,arguments)};function c(e){return e===i.SortByDirection.asc?i.SortByDirection.desc:i.SortByDirection.asc}const s=function(e){var n=e.direction,t=void 0===n?i.SortByDirection.asc:n,s=e.onSortChange,u=void 0===s?function(){}:s;return(0,o.jsx)(r.Button,a({variant:"plain",onClick:function(e){return u(e,c(t))}},{children:t===i.SortByDirection.asc?(0,o.jsx)(l.SortAmountUpIcon,{size:"sm"}):(0,o.jsx)(l.SortAmountDownIcon,{size:"sm"})}))}},65550:(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var o=t(85893),i=t(92950),r=t(76857),l=t(62472),a=t(94184),c=t.n(a),s=function(){return s=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},s.apply(this,arguments)};function u(e){return"".concat(e,e>1||e<1?" Results":" Result")}const d=function(e){var n,t=e.isFooter,a=void 0!==t&&t,d=e.results,p=e.className,f=e.selected,v=e.children,h=e.ouiaId,b=e.ouiaSafe,m=void 0===b||b,g=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}(e,["isFooter","results","className","selected","children","ouiaId","ouiaSafe"]),y=c()("ins-c-table__toolbar",((n={})["ins-m-footer"]=a,n),p),x="RHI/TableToolbar",j=(0,l.Z1)(x,h,m);return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(r.Toolbar,s({className:y,"data-ouia-component-type":x,"data-ouia-component-id":j,"data-ouia-safe":m},g,{children:v})),(d&&d>=0||f&&f>=0)&&(0,o.jsxs)("div",s({className:"ins-c-table__toolbar-results"},{children:[d&&d>=0&&(0,o.jsxs)("span",s({className:"ins-c-table__toolbar-results-count"},{children:[" ",u(d)," "]})),f&&f>=0&&(0,o.jsxs)("span",s({className:"ins-c-table__toolbar-results-selected"},{children:[" ",f," Selected "]}))]}))]})}},18446:(e,n,t)=>{var o=t(90939);e.exports=function(e,n){return o(e,n)}},74131:()=>{}}]);
//# sourceMappingURL=../sourcemaps/156.ef14edaffd73625cf31a3e36c1f07066.js.map
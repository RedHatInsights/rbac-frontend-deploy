(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[156],{62472:(e,t,n)=>{"use strict";n.d(t,{S$:()=>c,Z1:()=>u,dp:()=>i,ql:()=>s});var o=n(92950);let l=0;const r="OUIA-Generated-",a={};function i(e,t,n=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const c=(e,t,n=!0,o)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":u(e,t,o)}),u=(e,t,n)=>void 0!==t?t:(0,o.useMemo)((()=>s(e,n)),[e,n]);function s(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,a[n]||(a[n]=0),`${r}${e}-${t?`${t}-`:""}${++a[n]}`}catch(n){return`${r}${e}-${t?`${t}-`:""}${++l}`}}},40400:(e,t,n)=>{"use strict";n.d(t,{IU:()=>i,Jh:()=>o});var o,l=n(70655),r=n(92950);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o||(o={}));let a=0;function i({name:e,xOffset:t=0,yOffset:n=0,width:i,height:c,svgPath:u}){var s;return s=class extends r.Component{constructor(){super(...arguments),this.id="icon-title-"+a++}render(){const e=this.props,{size:a,color:s,title:d,noVerticalAlign:p}=e,m=(0,l.__rest)(e,["size","color","title","noVerticalAlign"]),f=Boolean(d),v=(e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}})(a),b=-.125*Number.parseFloat(v),g=p?null:{verticalAlign:`${b}em`},y=[t,n,i,c].join(" ");return r.createElement("svg",Object.assign({style:g,fill:s,height:v,width:v,viewBox:y,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},m),f&&r.createElement("title",{id:this.id},d),r.createElement("path",{d:u}))}},s.displayName=e,s.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},s}},78236:(e,t)=>{"use strict";t.k2={name:"--pf-global--breakpoint--md",value:"768px",var:"var(--pf-global--breakpoint--md)"},t.ZP=t.k2},48799:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(92950),l=n.n(o),r=n(94184),a=n.n(r),i=n(57262),c=n(62472),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},u.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var o,l=0,r=t.length;l<r;l++)!o&&l in t||(o||(o=Array.prototype.slice.call(t,0,l)),o[l]=t[l]);return e.concat(o||Array.prototype.slice.call(t))};const d=function(e){var t=e.id,n=e.isDisabled,r=void 0!==n&&n,d=e.items,p=void 0===d?[]:d,m=e.onSelect,f=void 0===m?function(){}:m,v=e.checked,b=void 0!==v&&v,g=e.toggleProps,y=e.count,h=e.className,E=void 0===h?"":h,k=e.ouiaId,w=e.ouiaSafe,C=void 0===w||w,O=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n}(e,["id","isDisabled","items","onSelect","checked","toggleProps","count","className","ouiaId","ouiaSafe"]),S=(0,o.useState)(!1),I=S[0],x=S[1],P=(0,o.useRef)(!1).current,D=(0,o.useRef)((0,c.ql)("RHI/BulkSelect")).current,N=function(e){return x(e)},j=void 0!==k?k:D;return l().createElement(o.Fragment,null,p&&p.length>0?l().createElement(i.Dropdown,u({onSelect:function(){return N(!1)}},O,{className:a()(E,"ins-c-bulk-select"),ouiaId:j,ouiaSafe:C,toggle:l().createElement(i.DropdownToggle,u({},g,{isDisabled:r,ouiaId:j,splitButtonItems:[l().createElement(o.Fragment,{key:"split-checkbox"},P?l().createElement(i.DropdownToggleCheckbox,{id:t?"".concat(t,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:f,checked:b,ouiaId:j}):l().createElement(i.DropdownToggleCheckbox,{id:t?"".concat(t,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:f,isChecked:b,ouiaId:j},y?"".concat(y," selected"):""))],onToggle:N})),isOpen:I,dropdownItems:s(s([],void 0!==y&&y>0?[l().createElement(i.DropdownItem,{key:"count",isDisabled:!0,className:a()({"ins-c-bulk-select__selected":!P})},y," Selected")]:[],!0),p.map((function(e,t){return l().createElement(i.DropdownItem,u({component:"button",key:e.key||t,ouiaId:"".concat(j,"-").concat(e.key||t),onClick:function(n){return e.onClick&&e.onClick(n,e,t)}},null==e?void 0:e.props),e.title)})),!0)})):l().createElement(i.Checkbox,u({},O,{"aria-label":"Select all",className:a()(E,"ins-c-bulk-select"),id:"".concat(t,"-checkbox"),isChecked:b,onChange:f})))}},40787:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(92950),l=n.n(o),r=n(57262),a=n(18446),i=n.n(a),c=n(57557),u=n.n(c),s=n(68097),d=function(){return d=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},d.apply(this,arguments)},p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n},m=function(e,t,n){if(n||2===arguments.length)for(var o,l=0,r=t.length;l<r;l++)!o&&l in t||(o||(o=Array.prototype.slice.call(t,0,l)),o[l]=t[l]);return e.concat(o||Array.prototype.slice.call(t))};const f=function(e){var t=e.items,n=void 0===t?[]:t,a=e.value,c=void 0===a?[]:a,f=e.onChange,v=void 0===f?function(){}:f,b=e.isDisabled,g=void 0!==b&&b,y=p(e,["items","value","onChange","isDisabled"]),h=y.placeholder,E=y.className,k=(0,o.useState)(!1),w=k[0],C=k[1],O=(0,o.useState)([]),S=O[0],I=O[1],x=(0,o.useRef)(S),P=function(e){x.current=S,I(e)};(0,o.useEffect)((function(){!i()(x.current,c)&&c&&P(c)}),[S,c]);var D=function(){return Array.from(new Set(m(m([],c&&c.length>0&&c.constructor===Array?c.map((function(e){return(0,s.P)(e)?e.value:e})):[],!0),S,!0)))};return l().createElement(o.Fragment,null,!n||n&&n.length<=0?l().createElement(s.Z,d({},y,{onChange:v,isDisabled:g,value:"".concat(D())})):l().createElement(r.Select,{className:E,variant:r.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return C(e)},isDisabled:g,onSelect:function(e,t){return function(e,t){var n=D();n=n.includes(t)?n.filter((function(e){return e!==t})):m(m([],n,!0),[t],!1),null==v||v(e,n,t),P(n)}(e,t)},selections:D(),isOpen:w,placeholderText:h,ouiaId:h},n.map((function(e,t){var n=e.value,o=e.onClick,a=e.label,i=e.id,c=p(e,["value","onClick","label","id"]);return l().createElement(r.SelectOption,d({},u()(c,"onChange"),{key:i||t,value:String(n||i||t),onClick:function(e){return null==o?void 0:o(e,d({value:n,label:a,id:i},c),t)}}),a)}))))}},18213:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(92950),l=n.n(o),r=n(94184),a=n.n(r),i=n(78236),c=n(57262),u=n(84747),s=n(68097),d=n(87123),p=(n(74131),function(){return p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},p.apply(this,arguments)});const m=function(e){var t=e.hideLabel,n=void 0!==t&&t,r=e.id,m=void 0===r?"default-input":r,f=e.isDisabled,v=void 0!==f&&f,b=e.items,g=void 0===b?[]:b,y=e.onChange,h=e.placeholder,E=e.useMobileLayout,k=void 0!==E&&E,w=e.value,C=void 0===w?"":w,O=parseInt(i.ZP.value.replace("px","")),S=function(e){return e<=O},I=(0,o.useState)(!1),x=I[0],P=I[1],D=(0,o.useState)(),N=D[0],j=D[1],T=(0,o.useState)(S(window.innerWidth)),_=T[0],Z=T[1],V=(0,o.useRef)((function(e){Z(S((null==e?void 0:e.target).innerWidth))}));(0,o.useEffect)((function(){return k||console.warn('The prop "useMobileLayout" is set to false. You are using an outdated mobile layout of conditional filter.\n    Please switch to new layout by adding "useMobileLayout={true}" prop to the PrimaryToolbar or ConditionalFilter directly.\n    The new mobile layout will become the default in next minor release.'),window.addEventListener("resize",V.current),function(){V.current&&window.removeEventListener("resize",V.current)}}),[]);var A=y?C:N,F=g&&g.length&&(g.find((function(e,t){return e.value===A||t===Number(A)}))||g[0]),B=y||function(e,t){return j(t)},$=k&&_,M=function(e){return e[0].toUpperCase()+e.substring(1)},R=F&&(d.w[F.type]||d.w.text),L=k&&_?function(e){return l().createElement(c.ToolbarToggleGroup,p({},e,{breakpoint:"md",toggleIcon:l().createElement(u.FilterIcon,null)}))}:o.Fragment;return l().createElement(L,null,k&&_&&l().createElement(c.ToolbarGroup,{className:"ins-c-conditional-filter mobile"},g.map((function(e,t){var n=e&&(d.w[e.type]||d.w.text);return l().createElement(c.ToolbarItem,{key:t},l().createElement(n,p({},e.type!==d.Y.custom&&{placeholder:h||e.placeholder||"Filter by ".concat(e.label),id:e.filterValues?e.filterValues.id:A?String(A):void 0},e.filterValues)))}))),!$&&l().createElement(o.Fragment,null,!g||g&&g.length<=0?l().createElement("div",{className:a()("ins-c-conditional-filter",{desktop:k})},l().createElement(s.Z,{id:m,isDisabled:v,onChange:function(e){return B(e,Number(e.target.value))},placeholder:h,value:A?String(A):void 0,"widget-type":"InsightsInput"})):l().createElement(c.Split,{className:a()("ins-c-conditional-filter",{desktop:k})},g.length>1&&l().createElement(c.SplitItem,null,l().createElement(c.Dropdown,{className:"ins-c-conditional-filter__group",onSelect:function(){return P(!1)},isOpen:x,ouiaId:"ConditionalFilter",toggle:l().createElement(c.DropdownToggle,{"aria-label":"Conditional filter",onToggle:P,isDisabled:v,className:n?"ins-c-conditional-filter__no-label":"",ouiaId:"ConditionalFilter"},l().createElement(u.FilterIcon,{size:"sm"}),!n&&l().createElement("span",{className:"ins-c-conditional-filter__value-selector"},F&&M(String(F.label)))),dropdownItems:g.map((function(e,t){return l().createElement(c.DropdownItem,{key:e.id?"".concat(e.id,"-dropdown"):t,component:"button",ouiaId:String(e.label),onClick:function(n){return B(n,e.value||t)},isHovered:F.label===e.label},M(String(e.label)))}))})),R&&l().createElement(c.SplitItem,{isFilled:!0},l().createElement(R,p({},F.type!==d.Y.custom&&{placeholder:h||F.placeholder||"Filter by ".concat(F.label),id:F.filterValues&&F.filterValues.id||A?String(A):void 0},F.filterValues))))))}},21556:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var o=n(92950),l=n.n(o),r=n(94184),a=n.n(r),i=n(57262),c=n(22137),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},u.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var o,l=0,r=t.length;l<r;l++)!o&&l in t||(o||(o=Array.prototype.slice.call(t,0,l)),o[l]=t[l]);return e.concat(o||Array.prototype.slice.call(t))},d=function(e,t,n,o,l,r){var a,i,c,s,d=u(u({},r),l);if(void 0===d[e])return!1;if(function(e){var t;return void 0!==(null===(t=e)||void 0===t?void 0:t.items)}(d[e][t])){var p=d[e][t];if(p.isSelected){if(null===(a=null==p?void 0:p.item)||void 0===a?void 0:a.id)return n===(null===(i=null==p?void 0:p.item)||void 0===i?void 0:i.id);if(null===(c=null==p?void 0:p.item)||void 0===c?void 0:c.tagValue)return o===(null===(s=null==p?void 0:p.item)||void 0===s?void 0:s.tagValue)}return Boolean(p.isSelected)}return Boolean(d[e][t])},p=function(e,t,n,o,l,r,a,i){return void 0===l&&(l=""),((null==e?void 0:e.map((function(s,d){return u(u({},s),{className:"".concat((null==s?void 0:s.className)||"pf-u-pl-sm"),key:s.id||s.value||d,value:String(s.value||s.id||d),onClick:function(d,p,m){var f,v=[d,n(o||s.type,l,(o||s.type)===c.Z.treeView?p:s.value,m),u({value:l,label:r||s.label,id:a||s.id,type:o||s.type,items:e},i||s),s,l,s.value];null==t||t.apply(void 0,v),null===(f=null==s?void 0:s.onClick)||void 0===f||f.call(s,d,u(u({},s),{label:"string"==typeof s.label?s.label:""}),void 0,m)}})})))||[]).filter((function(e){return!e.noFilter}))},m=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?u(u({},e),{children:e.children.map((function(e){return m(e)}))}):e},f=function(e){return function(t,n,o,l){void 0===t&&(t=c.Z.button),void 0===n&&(n=""),void 0===o&&(o=""),void 0===l&&(l=!1);var r=null==e?void 0:e[n],a=t===c.Z.treeView?[o].reduce((function e(t,n){return Array.isArray(null==n?void 0:n.children)?n.children.reduce(e,t)||[]:(t.push(n),t)}),[]):[],i=t===c.Z.treeView?a.map((function(e){return e.id})):[String(o)];if(r){var s=e;return i.map((function(e){var o,r,a,i;void 0===e&&(e="");var d=s[n];s=t!==c.Z.radio&&(d[e]instanceof Object?d[e].isSelected:Boolean(d[e]))?u(u({},s),((o={})[n]=u(u({},d||{}),((r={})[e]=t===c.Z.treeView&&l,r)),o)):u(u({},s),((a={})[n]=u(u({},t!==c.Z.radio&&d||{}),((i={})[e]=!0,i)),a))})),s}return i.reduce((function(e,t){var o,l;return u(u({},e),((o={})[n]=u(u({},null==e?void 0:e[n]),((l={})[t||""]=!0,l)),o))}),e)}},v=function(e,t,n,o){return e.children?e.children.every((function(e){return v(e,t,n,o)})):d(t,e.id||"",void 0,void 0,n,o)},b=function(e,t,n,o){return e.children?e.children.some((function(e){return b(e,t,n,o)})):d(t,e.id||"",void 0,void 0,n,o)},g=function(e,t,n,o){var l=v(e,t,n,o);return e.checkProps={checked:!1},l?e.checkProps.checked=!0:b(e,t,n,o)&&(e.checkProps={checked:null}),e.children?u(u({},e),{children:e.children.map((function(e){return g(e,t,n,o)}))}):e},y=function(){return y=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},y.apply(this,arguments)};const h=function(e){var t=e.className,n=e.filterBy,r=void 0===n?"":n,v=e.groups,b=void 0===v?[]:v,h=e.items,E=e.isFilterable,k=e.onFilter,w=e.onChange,C=e.onShowMore,O=e.placeholder,S=e.selected,I=e.showMoreTitle,x=e.showMoreOptions,P=(0,o.useState)({}),D=P[0],N=P[1],j=(0,o.useState)(""),T=j[0],_=j[1],Z=(0,o.useState)(!1),V=Z[0],A=Z[1],F=(0,o.useRef)(null),B=(0,o.useRef)(null),$=(0,o.useRef)(null);(0,o.useEffect)((function(){S&&N(S)}),[S]),(0,o.useEffect)((function(){_(r)}),[r]);var M=function(e){var t,n,o;V&&((null===(t=$.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=F.current)||void 0===n?void 0:n.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(A(!V),null===(o=F.current)||void 0===o||o.focus()))},R=function(e){var t;V&&!(null===(t=$.current)||void 0===t?void 0:t.contains(e.target))&&A(!1)};(0,o.useEffect)((function(){return window.addEventListener("keydown",M),window.addEventListener("click",R),function(){window.removeEventListener("keydown",M),window.removeEventListener("click",R)}}),[V,$]);var L=p((null==h?void 0:h.map((function(e){return e.type===c.Z.treeView?m(e):e})))||[],w,f(S||{})),G=function(e,t,n){return e.map((function(e){var o=e.value,l=e.label,r=e.groupSelectable,a=e.id,i=e.type,d=e.items,f=e.noFilter,v=i===c.Z.treeView?d.map((function(e){return m(e)})):d;return{label:l,noFilter:f,value:o,type:i,groupSelectable:r,items:p(s(s([],r?[u({value:o||"",label:l||"",id:a||"",type:i,className:"pf-u-pl-xs"},e)]:[],!0),v,!0),t,n,i,o,l,a,e)}})).filter((function(e){var t=e.noFilter,n=e.items;return!t||(void 0===n?[]:n).length>0}))}(b,w,f(S||{})),z=function(e,t,n,o){return void 0===o&&(o=""),l().createElement(i.MenuItem,{itemId:t,key:"".concat(e.value,"-").concat(t,"-item"),className:null==e?void 0:e.className,onClick:e.onClick&&(n||e.type)===c.Z.checkbox?function(t){e.onClick&&e.onClick(),t.preventDefault()}:void 0},(n||e.type)===c.Z.treeView?l().createElement(i.TreeView,{data:[g(e,o,D,S||{})],onCheck:function(t,n){return function(e,t,n){var o,l,r;return null===(l=(o=n[0]).onClick)||void 0===l?void 0:l.call(o,e,t,void 0,null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.checked)}(t,n,[e])},hasChecks:!0}):(n||e.type)===c.Z.checkbox?l().createElement(i.Checkbox,y({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||d(o,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,D,S||{})||!1,onChange:function(t,n){var o;null===(o=null==e?void 0:e.onChange)||void 0===o||o.call(e,t,n)},onClick:e.onClick?function(t){e.onClick&&e.onClick(),t.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t)})):(n||e.type)===c.Z.radio?l().createElement(i.Radio,y({},e,{isChecked:(null==e?void 0:e.isChecked)||d(o,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,D,S||{})||!1,onChange:function(t,n){var o;null===(o=null==e?void 0:e.onChange)||void 0===o||o.call(e,t,n)},value:(null==e?void 0:e.value)||t,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t)})):(n||e.type)===c.Z.button?l().createElement(i.Button,{id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},null==e?void 0:e.label):(null==e?void 0:e.label)||"")},U=function(e,t,n){return void 0===n&&(n=""),e.map((function(e,o){return(t||e.type)===c.Z.treeView?l().createElement("div",{key:"".concat(e.value,"-").concat(o,"-item"),className:"ins-c-tree-view"},z(e,o,t,n)):z(e,o,t,n)}))};return l().createElement("div",{ref:B},l().createElement(i.Popper,{appendTo:B.current,trigger:l().createElement(i.MenuToggle,{"aria-label":"Group filter",ref:F,onClick:function(e){e.stopPropagation(),e.persist(),A(!V)},isExpanded:V,className:t},E||k?l().createElement(i.TextInput,{"aria-label":"input with dropdown and clear button",placeholder:O,value:T,tabIndex:0,onChange:function(e){_(e),null==k||k(e)},type:"search"}):O),popper:l().createElement(i.Menu,{ref:$,className:a()("ins-c-menu__scrollable",t,{"pf-m-expanded":V})},l().createElement(i.MenuContent,null,l().createElement(i.MenuList,{"aria-label":"Group filter"},L.length>0&&l().createElement(i.MenuGroup,null,U(L)),G.map((function(e,t){return l().createElement(i.MenuGroup,{label:e.groupSelectable&&"string"==typeof e.label?e.label:void 0,key:"".concat(e.label,"-").concat(t,"-group")},U(e.items,e.type,e.value))})),C?l().createElement(i.MenuItem,y({itemId:"loader",className:"ins-c-menu__show--more"},x,{onClick:function(e){return C(e)}}),I):l().createElement("span",{hidden:!0,value:""})))),isVisible:V}))}},26154:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(92950),l=n.n(o),r=n(57262),a=n(68097),i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},i.apply(this,arguments)},c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const u=function(e){var t=e.items,n=void 0===t?[]:t,u=e.onChange,s=void 0===u?function(){}:u,d=e.isDisabled,p=void 0!==d&&d,m=c(e,["items","onChange","isDisabled"]),f=m.placeholder,v=m.className,b=m.value,g=(0,o.useState)(!1),y=g[0],h=g[1],E=(0,o.useState)(),k=E[0],w=E[1],C=function(){return b?(0,a.P)(b)?b.value:b:k?(0,a.P)(k)?k.value:k:void 0},O=C();return l().createElement(o.Fragment,null,!n||n&&n.length<=0?l().createElement(a.Z,i({},m,{onChange:s,isDisabled:p,value:"".concat(C())})):l().createElement(r.Select,{className:v,variant:r.SelectVariant.single,"aria-label":"Select Input",isDisabled:p,onToggle:function(e){return h(e)},onSelect:function(e,t){return function(e,t){null==s||s(e,t),w(t)}(e,t)},isOpen:y,placeholderText:f,ouiaId:f},n.map((function(e,t){var n=e.value,o=e.isChecked,a=e.onChange,u=e.label,s=e.id,d=c(e,["value","isChecked","onChange","label","id"]);return l().createElement(r.SelectOption,i({},d,{key:s||t,value:n||""+t}),l().createElement(r.Radio,{name:s||"".concat(t,"-radio"),label:u,value:n||t,isChecked:o||void 0!==O&&O===n||void 0!==O&&O===""+t||!1,onChange:function(e,l){return null==a?void 0:a(l,i({id:s,label:u,value:n,isChecked:o},d),t)},id:s||"".concat(n,"-").concat(t)}))}))))}},68097:(e,t,n)=>{"use strict";n.d(t,{P:()=>c,Z:()=>u});var o=n(92950),l=n.n(o),r=n(57262),a=n(84747),i=(n(74131),function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n});function c(e){return void 0!==e.value}const u=function(e){var t=e.icon,n=e.id,c=e.isDisabled,u=void 0!==c&&c,s=e.className,d=e.onChange,p=e.onSubmit,m=void 0===p?function(){}:p,f=e.value,v=void 0===f?"":f,b=e.placeholder,g=i(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder"]),y=(0,o.useState)(""),h=y[0],E=y[1],k=t||a.SearchIcon;return l().createElement(o.Fragment,null,l().createElement(r.TextInput,{"aria-label":g["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(s||""),"data-ouia-component-type":"PF4/TextInput",id:n,isDisabled:u,value:d?"string"==typeof v?v:v.value:h,onChange:function(e,t){return function(e,t){return d?d(e,t):E(t)}(t,t.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==m?void 0:m(e,("string"==typeof v?v:v.value)||h))},ouiaId:"ConditionalFilter",placeholder:b,"widget-type":"InsightsInput"}),l().createElement(k,{size:"sm",className:"ins-c-search-icon"}))}},87123:(e,t,n)=>{"use strict";n.d(t,{Y:()=>c,w:()=>u});var o=n(92950),l=n(68097),r=n(40787),a=n(26154),i=n(21556),c={text:"text",checkbox:"checkbox",radio:"radio",custom:"custom",group:"group"},u={text:l.Z,checkbox:r.Z,radio:a.Z,custom:o.Fragment,group:i.Z}},22137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={treeView:"treeView",checkbox:"checkbox",radio:"radio",button:"button",plain:"plain"}},97138:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(57262),l=n(92950),r=n.n(l),a=n(84747),i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},i.apply(this,arguments)},c=function(e,t,n){if(n||2===arguments.length)for(var o,l=0,r=t.length;l<r;l++)!o&&l in t||(o||(o=Array.prototype.slice.call(t,0,l)),o[l]=t[l]);return e.concat(o||Array.prototype.slice.call(t))};const u=function(e){var t,n=e.extraItems,u=void 0===n?[]:n,s=e.onSelect,d=void 0===s?function(){}:s,p=e.isDisabled,m=e.tooltipText,f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n}(e,["extraItems","onSelect","isDisabled","tooltipText"]),v=(0,l.useState)(!1),b=v[0],g=v[1];return r().createElement(r().Fragment,null,(t=r().createElement(o.Dropdown,i({},f,{isPlain:!0,onSelect:function(){return g((function(e){return!e}))},toggle:r().createElement(o.DropdownToggle,{"aria-label":"Export",toggleIndicator:null,onToggle:function(e){return g(e)},isDisabled:p,ouiaId:"Export"},r().createElement(a.ExportIcon,{size:"sm"})),isOpen:b,ouiaId:"Export",dropdownItems:c([r().createElement(o.DropdownItem,{key:"download-csv",ouiaId:"DownloadCSV",component:"button",onClick:function(e){return d(e,"csv")},isDisabled:p},"Export to CSV"),r().createElement(o.DropdownItem,{key:"download-json",ouiaId:"DownloadJSON",component:"button",onClick:function(e){return d(e,"json")},isDisabled:p},"Export to JSON")],u,!0)})),r().createElement(r().Fragment,null,m?r().createElement(o.Tooltip,{content:m},t):t)))}},51812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(92950),l=n.n(o),r=n(57262),a=n(94184),i=n.n(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},c.apply(this,arguments)};function u(e){return Object.prototype.hasOwnProperty.call(e,"category")}function s(e){return!u(e)}const d=function(e){var t=e.className,n=e.filters,o=void 0===n?[]:n,a=e.onDelete,d=void 0===a?function(){}:a,p=e.deleteTitle,m=void 0===p?"Clear filters":p,f=e.showDeleteButton,v=e.onDeleteGroup,b=o.filter(u),g=b.map((function(e,t){return l().createElement(r.ChipGroup,c({key:"group_".concat(e.category),categoryName:String(e.category)||" "},v&&{isClosable:!0,onClick:function(n){n.stopPropagation(),v(n,[e],b.filter((function(e,n){return n!==t})))}}),e.chips.map((function(t){return l().createElement(r.Chip,{key:t.name,onClick:function(n){n.stopPropagation(),d(n,[c(c({},e),{chips:[t]})])}},t.name,t.count&&l().createElement(r.Badge,{key:"chip_badge_".concat(t.id),isRead:t.isRead},t.count))})))})),y=o.filter(s);return l().createElement("span",{className:i()(t,"ins-c-chip-filters")},g,y&&y.map((function(e){return l().createElement(r.ChipGroup,{key:"group_plain_chip_".concat(e.name)},l().createElement(r.Chip,{onClick:function(t){t.stopPropagation(),d(t,[e])}},e.name,e.count&&l().createElement(r.Badge,{key:"chip_badge_".concat(e.id),isRead:e.isRead},e.count)))})),(!0===f||void 0===f&&o.length>0)&&l().createElement(r.Button,{variant:"link",ouiaId:"ClearFilters",onClick:function(e){return d(e,o,!0)}},m))}},63753:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>m});var o=n(92950),l=n.n(o),r=n(57262),a=n(97138),i=n(94184),c=n.n(i),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},u.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var o,l=0,r=t.length;l<r;l++)!o&&l in t||(o||(o=Array.prototype.slice.call(t,0,l)),o[l]=t[l]);return e.concat(o||Array.prototype.slice.call(t))};function d(e){return void 0!==e.label}var p=function(e,t){var n,o,r,a,i,c="object"==typeof e&&null!==typeof e&&"function"==typeof(null===(n=e)||void 0===n?void 0:n.onClick)?function(n){var o;return null===(o=e)||void 0===o?void 0:o.onClick(n,e,t)}:void 0;return u(u({},null===(o=e)||void 0===o?void 0:o.props),{onClick:c,component:(null===(a=null===(r=e)||void 0===r?void 0:r.props)||void 0===a?void 0:a.component)||(l().isValidElement(e.label||e)?"div":"button"),children:"object"==typeof e&&null!==typeof e?null===(i=e)||void 0===i?void 0:i.label:e})};const m=function(e){var t,n=e.actions,i=void 0===n?[]:n,m=e.overflowActions,f=void 0===m?[]:m,v=e.onSelect,b=void 0===v?function(){}:v,g=e.dropdownProps,y=void 0===g?{}:g,h=e.kebabToggleProps,E=e.exportConfig,k=(0,o.useState)(!1),w=k[0],C=k[1],O=function(e){return C(e)},S=i[0],I=i.slice(1),x=s(s(s(s([],S?[l().createElement(r.DropdownItem,u({key:"first-action"},p(S,"first-action"),{className:c()("ins-c-primary-toolbar__first-action",d(S)?null===(t=null==S?void 0:S.props)||void 0===t?void 0:t.className:void 0)}))]:[],!0),I.map((function(e,t){var n,o,a;return l().createElement(r.DropdownItem,u({key:(null===(n=e)||void 0===n?void 0:n.key)||(null===(a=null===(o=e)||void 0===o?void 0:o.props)||void 0===a?void 0:a.key)||t},p(e,t)))})),!0),i.length>0&&f.length>0?[l().createElement(r.DropdownSeparator,{key:"separator",className:"ins-c-primary-toolbar__overflow-actions-separator"})]:[],!0),f.map((function(e,t){return function(e,t){var n=e;return l().createElement(r.DropdownItem,u({},n.props,{className:"ins-c-primary-toolbar__overflow-actions",key:n.value||n.key||"".concat(t,"-overflow"),component:n.props&&n.props.component||l().isValidElement(n.label||e)?"div":"button",onClick:function(e){return n.onClick&&n.onClick(e,n,t)}}),n.label||e)}(e,t)})),!0);return l().createElement(o.Fragment,null,S&&l().createElement(r.ToolbarItem,{className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},d(S)?l().createElement(r.Button,u({ouiaId:"".concat(S.label)},S.props,{onClick:S.onClick||S.props&&S.props.onClick||void 0}),S.label):S),E&&(E.extraItems||E.onSelect)&&l().createElement(r.ToolbarItem,{className:"pf-m-spacer-sm"},l().createElement(a.Z,u({},E))),(i&&(null==i?void 0:i.length)>0||f.length>0)&&l().createElement(r.ToolbarItem,{className:"".concat(i.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},l().createElement(r.Dropdown,u({},y,{isOpen:w,isPlain:!0,onSelect:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];b&&b.apply(void 0,e),O(!1)},ouiaId:"Actions",toggle:l().createElement(r.KebabToggle,u({},h,{onToggle:function(e){O(e)}})),dropdownItems:x}))))}},95809:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(92950),l=n.n(o),r=n(57262),a=n(84747),i=n(1936),c=n(63753),u=n(48799),s=n(18213),d=n(51812),p=n(68379),m=function(){return m=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},m.apply(this,arguments)};const f=function(e){var t,n=e.id,o=e.className,f=e.toggleIsExpanded,v=e.bulkSelect,b=e.filterConfig,g=e.dedicatedAction,y=e.actionsConfig,h=e.sortByConfig,E=e.pagination,k=e.activeFiltersConfig,w=e.children,C=e.exportConfig,O=e.expandAll,S=e.useMobileLayout,I=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n}(e,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),x=function(e,t,n){if(n||2===arguments.length)for(var o,l=0,r=t.length;l<r;l++)!o&&l in t||(o||(o=Array.prototype.slice.call(t,0,l)),o[l]=t[l]);return e.concat(o||Array.prototype.slice.call(t))}([],h?[{label:"Sort order ASC",props:{isDisabled:h.direction===i.SortByDirection.asc},onClick:function(e){return h.onSortChange&&h.onSortChange(e,i.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:h.direction===i.SortByDirection.desc},onClick:function(e){return h.onSortChange&&h.onSortChange(e,i.SortByDirection.desc)}}]:[],!0);return l().createElement(r.Toolbar,m({},I,{className:"".concat(o||""," ins-c-primary-toolbar"),toggleIsExpanded:f,id:n?"".concat(n):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"}),l().createElement(r.ToolbarContent,null,(O||v||b||g)&&l().createElement(r.ToolbarGroup,{className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},O&&l().createElement(r.ToolbarItem,null,(t=O,l().isValidElement(t)?O:l().createElement(r.Button,m({},O.buttonProps,{variant:"plain","aria-label":"".concat(O.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(e){return O.onClick(e,!O.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:O.isDisabled}),l().createElement(r.ToolbarExpandIconWrapper,null,O.isAllExpanded?l().createElement(a.AngleDownIcon,null):l().createElement(a.AngleRightIcon,null))))),v&&l().createElement(r.ToolbarItem,null,l().isValidElement(v)?v:l().createElement(u.Z,m({ouiaId:"BulkSelect"},v))),b&&l().createElement(r.ToolbarItem,{className:"ins-c-primary-toolbar__filter"},l().isValidElement(b)?b:l().createElement(s.Z,m({useMobileLayout:S},b))),g&&l().createElement(r.ToolbarItem,null,g)),l().isValidElement(y)?y:(y&&y.actions&&y.actions.length>0||h||C)&&l().createElement(c.ZP,m({},y||{},{exportConfig:C,overflowActions:x})),h&&l().createElement(r.ToolbarItem,{className:"ins-c-primary-toolbar__sort-by"},l().isValidElement(h)?h:l().createElement(p.Z,m({},h))),w,E&&l().createElement(r.ToolbarItem,{className:"ins-c-primary-toolbar__pagination"},l().isValidElement(E)?E:l().createElement(r.Pagination,m({isCompact:!0,ouiaId:"CompactPagination"},E)))),k&&l().isValidElement(k)?l().createElement(r.ToolbarContent,null,l().createElement(r.ToolbarItem,null,k)):void 0!==(null==k?void 0:k.filters)&&(k.filters.length>0||!0===k.showDeleteButton)&&l().createElement(r.ToolbarContent,null,l().createElement(r.ToolbarItem,null,l().createElement(d.Z,m({},k)))))}},68379:(e,t,n)=>{"use strict";n.d(t,{N:()=>c,Z:()=>u});var o=n(92950),l=n.n(o),r=n(1936),a=n(57262),i=n(84747);function c(e){return e===r.SortByDirection.asc?r.SortByDirection.desc:r.SortByDirection.asc}const u=function(e){var t=e.direction,n=void 0===t?r.SortByDirection.asc:t,o=e.onSortChange,u=void 0===o?function(){}:o;return l().createElement(a.Button,{variant:"plain",onClick:function(e){return u(e,c(n))}},n===r.SortByDirection.asc?l().createElement(i.SortAmountUpIcon,{size:"sm"}):l().createElement(i.SortAmountDownIcon,{size:"sm"}))}},65550:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(92950),l=n.n(o),r=n(57262),a=n(62472),i=n(94184),c=n.n(i),u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},u.apply(this,arguments)};const s=function(e){var t,n=e.isFooter,i=void 0!==n&&n,s=e.results,d=e.className,p=e.selected,m=e.children,f=e.ouiaId,v=e.ouiaSafe,b=void 0===v||v,g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n}(e,["isFooter","results","className","selected","children","ouiaId","ouiaSafe"]),y=c()("ins-c-table__toolbar",((t={})["ins-m-footer"]=i,t),d),h="RHI/TableToolbar",E=(0,a.Z1)(h,f,b);return l().createElement(o.Fragment,null,l().createElement(r.Toolbar,u({className:y,"data-ouia-component-type":h,"data-ouia-component-id":E,"data-ouia-safe":b},g),m),(s&&s>=0||p&&p>=0)&&l().createElement("div",{className:"ins-c-table__toolbar-results"},s&&s>=0&&l().createElement("span",{className:"ins-c-table__toolbar-results-count"}," ",function(e){return"".concat(e,e>1||e<1?" Results":" Result")}(s)," "),p&&p>=0&&l().createElement("span",{className:"ins-c-table__toolbar-results-selected"}," ",p," Selected ")))}},18446:(e,t,n)=>{var o=n(90939);e.exports=function(e,t){return o(e,t)}},74131:()=>{}}]);
"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4084,8790,31],{68809:(e,a,t)=>{t.d(a,{W:()=>i});var n=t(65353),r=t(28416),s=t(11924),l=t(38296);const i=e=>{var{children:a=null,className:t=""}=e,i=(0,n.__rest)(e,["children","className"]);const c=(0,l.css)(s.default.formGroup,s.default.modifiers.action,t),o=r.createElement("div",{className:(0,l.css)(s.default.formActions)},a);return r.createElement("div",Object.assign({},i,{className:c}),r.createElement("div",{className:(0,l.css)(s.default.formGroupControl)},o))};i.displayName="ActionGroup"},83115:(e,a,t)=>{t.d(a,{l:()=>c});var n=t(65353),r=t(28416),s=t(11924),l=t(38296);const i=e=>{var{children:a=null,className:t="",isHorizontal:i=!1,isWidthLimited:c=!1,maxWidth:o="",innerRef:u}=e,d=(0,n.__rest)(e,["children","className","isHorizontal","isWidthLimited","maxWidth","innerRef"]);return r.createElement("form",Object.assign({noValidate:!0},o&&{style:Object.assign({"--pf-v5-c-form--m-limit-width--MaxWidth":o},d.style)},d,{className:(0,l.css)(s.default.form,i&&s.default.modifiers.horizontal,(c||o)&&s.default.modifiers.limitWidth,t),ref:u}),a)},c=r.forwardRef(((e,a)=>r.createElement(i,Object.assign({innerRef:a},e))));c.displayName="Form"},59775:(e,a,t)=>{t.d(a,{c:()=>o});var n=t(65353),r=t(28416),s=t(11924),l=t(11888),i=t(38296),c=t(41724);const o=e=>{var{children:a=null,className:t="",label:o,labelInfo:u,labelIcon:d,isRequired:m=!1,isInline:p=!1,hasNoPaddingTop:f=!1,isStack:h=!1,fieldId:v,role:g}=e,b=(0,n.__rest)(e,["children","className","label","labelInfo","labelIcon","isRequired","isInline","hasNoPaddingTop","isStack","fieldId","role"]);const E="group"===g||"radiogroup"===g,N=E?"span":"label",x=r.createElement(r.Fragment,null,r.createElement(N,Object.assign({className:(0,i.css)(s.default.formLabel)},!E&&{htmlFor:v}),r.createElement("span",{className:(0,i.css)(s.default.formLabelText)},o),m&&r.createElement("span",{className:(0,i.css)(s.default.formLabelRequired),"aria-hidden":"true"}," ",l.t))," ",r.isValidElement(d)&&d);return r.createElement(c.w,null,(e=>r.createElement("div",Object.assign({className:(0,i.css)(s.default.formGroup,t)},g&&{role:g},E&&{"aria-labelledby":`${v||e}-legend`},b),o&&r.createElement("div",Object.assign({className:(0,i.css)(s.default.formGroupLabel,u&&s.default.modifiers.info,f&&s.default.modifiers.noPaddingTop)},E&&{id:`${v||e}-legend`}),u&&r.createElement(r.Fragment,null,r.createElement("div",{className:(0,i.css)(s.default.formGroupLabelMain)},x),r.createElement("div",{className:(0,i.css)(s.default.formGroupLabelInfo)},u)),!u&&x),r.createElement("div",{className:(0,i.css)(s.default.formGroupControl,p&&s.default.modifiers.inline,h&&s.default.modifiers.stack)},a))))};o.displayName="FormGroup"},78057:(e,a,t)=>{t.d(a,{J:()=>c});var n=t(65353),r=t(28416);t(44839);const s={icon:"pf-v5-c-icon",iconContent:"pf-v5-c-icon__content",iconProgress:"pf-v5-c-icon__progress",modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl",inProgress:"pf-m-in-progress",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",info:"pf-m-info",custom:"pf-m-custom"},spinner:"pf-v5-c-spinner"};var l=t(38296),i=t(2372);const c=e=>{var{children:a,className:t,progressIcon:c,size:o,iconSize:u,progressIconSize:d,status:m,isInline:p=!1,isInProgress:f=!1,defaultProgressArialabel:h="Loading...",shouldMirrorRTL:v=!1}=e,g=(0,n.__rest)(e,["children","className","progressIcon","size","iconSize","progressIconSize","status","isInline","isInProgress","defaultProgressArialabel","shouldMirrorRTL"]);const b=null!=c?c:r.createElement(i.$,{diameter:"1em","aria-label":h});return r.createElement("span",Object.assign({className:(0,l.css)(s.icon,p&&s.modifiers.inline,f&&s.modifiers.inProgress,s.modifiers[o],t)},g),r.createElement("span",{className:(0,l.css)(s.iconContent,s.modifiers[u],s.modifiers[m],v&&"pf-v5-m-mirror-inline-rtl")},a),f&&r.createElement("span",{className:(0,l.css)(s.iconProgress,s.modifiers[d],t)},b))};c.displayName="Icon"},34084:(e,a,t)=>{t.d(a,{M:()=>G});var n=t(65353),r=t(28416),s=t(38296),l=t(47173),i=t(68425),c=t(78057),o=t(9003);const u=(0,t(40400).I)({name:"AngleUpIcon",height:512,width:320,svgPath:"M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z",yOffset:0,xOffset:0});var d=t(24307),m=t(80810),p=t(5964),f=t(11306),h=t(59775),v=t(83115),g=t(68809),b=t(92607),E=t(1774),N=t(41724);t(1508);const x="pf-m-bordered",I="pf-m-raised",_="pf-m-scrollable",y=e=>{var{className:a,children:t,variant:l,isScrollable:i,innerRef:c}=e,o=(0,n.__rest)(e,["className","children","variant","isScrollable","innerRef"]);return r.createElement("div",Object.assign({className:(0,s.css)("pf-v5-c-panel","raised"===l&&I,"bordered"===l&&x,i&&_,a),ref:c},o),t)},L=r.forwardRef(((e,a)=>r.createElement(y,Object.assign({innerRef:a},e))));L.displayName="Panel";const R=e=>{var{className:a,children:t,maxHeight:l}=e,i=(0,n.__rest)(e,["className","children","maxHeight"]);return r.createElement("div",Object.assign({className:(0,s.css)("pf-v5-c-panel__main",a),style:{"--pf-v5-c-panel__main--MaxHeight":l}},i),t)};R.displayName="PanelMain";const O=e=>{var{className:a,children:t}=e,l=(0,n.__rest)(e,["className","children"]);return r.createElement("div",Object.assign({className:(0,s.css)("pf-v5-c-panel__main-body",a)},l),t)};O.displayName="PanelMainBody";const S=({className:e,parentRef:a,parentInputRef:t,value:n="",attributes:i=[],formAdditionalItems:c,hasWordsAttrLabel:o="Has words",advancedSearchDelimiter:u,getAttrValueMap:d,onChange:m,onSearch:p,onClear:f,resetButtonLabel:x="Reset",submitSearchButtonLabel:I="Search",isSearchMenuOpen:_,onToggleAdvancedMenu:y})=>{const S=r.useRef(null),[C,w]=r.useState(!1);r.useEffect((()=>{i.length>0&&!u&&console.error("AdvancedSearchMenu: An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop")})),r.useEffect((()=>{_&&S&&S.current?(S.current.focus(),w(!0)):!_&&C&&t&&t.current&&t.current.focus()}),[_]),r.useEffect((()=>(document.addEventListener("mousedown",A),document.addEventListener("touchstart",A),document.addEventListener("keydown",j),function(){document.removeEventListener("mousedown",A),document.removeEventListener("touchstart",A),document.removeEventListener("keydown",j)})));const A=e=>{const t=a&&a.current.contains(e.target);_&&!t&&y(e)},j=e=>{_&&e.key===E.yu.Escape&&a&&a.current.contains(e.target)&&(y(e),t&&t.current.focus())},P=(e,a,t)=>{const n=d();n[e]=a;let r="";Object.entries(n).forEach((([e,a])=>{if(""!==a.trim()){const t=a.includes(" ")?`'${a.replace(/(^'|'$)/g,"")}'`:a;r="haswords"!==e?`${r} ${e}${u}${t}`:`${r} ${t}`}})),m&&m(t,r.replace(/^\s+/g,""))},k=e=>{const a=d();return a.hasOwnProperty(e)?a[e]:""};return _?r.createElement(L,{variant:"raised",className:(0,s.css)(e)},r.createElement(R,null,r.createElement(O,null,r.createElement(v.l,null,(()=>{const e=[];return i.forEach(((a,t)=>{const n="string"==typeof a?a:a.display,s="string"==typeof a?a:a.attr;0===t?e.push(r.createElement(h.c,{label:n,fieldId:`${s}_${t}`,key:`${a}_${t}`},r.createElement(b.oi,{ref:S,type:"text",id:`${s}_${t}`,value:k(s),onChange:(e,a)=>P(s,a,e)}))):e.push(r.createElement(h.c,{label:n,fieldId:`${s}_${t}`,key:`${a}_${t}`},r.createElement(b.oi,{type:"text",id:`${s}_${t}`,value:k(s),onChange:(e,a)=>P(s,a,e)})))})),e.push(r.createElement(N.w,{key:"hasWords"},(e=>r.createElement(h.c,{label:o,fieldId:e},r.createElement(b.oi,{type:"text",id:e,value:k("haswords"),onChange:(e,a)=>P("haswords",a,e)}))))),e})(),c||null,r.createElement(g.W,null,r.createElement(l.zx,{variant:"primary",type:"submit",onClick:e=>{e.preventDefault(),p&&p(e,n,d()),_&&y(e)},isDisabled:!n},I),!!f&&r.createElement(l.zx,{variant:"link",type:"reset",onClick:f},x)))))):null};S.displayName="SearchInput";var C=t(94623),w=t(66484),A=t(68578),j=t(82011),P=t(43446),k=t(69121);const D=e=>{var{className:a,value:t="",attributes:h=[],formAdditionalItems:v,hasWordsAttrLabel:g="Has words",advancedSearchDelimiter:b,placeholder:E,hint:N,onChange:x,onSearch:I,onClear:_,onToggleAdvancedSearch:y,isAdvancedSearchOpen:L,resultsCount:R,onNextClick:O,onPreviousClick:D,innerRef:G,expandableInput:$,"aria-label":B="Search input",resetButtonLabel:M="Reset",openMenuButtonAriaLabel:T="Open advanced search",previousNavigationButtonAriaLabel:z="Previous",isPreviousNavigationButtonDisabled:W=!1,isNextNavigationButtonDisabled:Z=!1,nextNavigationButtonAriaLabel:F="Next",submitSearchButtonLabel:H="Search",isDisabled:q=!1,appendTo:V,zIndex:U=9999,name:J}=e,K=(0,n.__rest)(e,["className","value","attributes","formAdditionalItems","hasWordsAttrLabel","advancedSearchDelimiter","placeholder","hint","onChange","onSearch","onClear","onToggleAdvancedSearch","isAdvancedSearchOpen","resultsCount","onNextClick","onPreviousClick","innerRef","expandableInput","aria-label","resetButtonLabel","openMenuButtonAriaLabel","previousNavigationButtonAriaLabel","isPreviousNavigationButtonDisabled","isNextNavigationButtonDisabled","nextNavigationButtonAriaLabel","submitSearchButtonLabel","isDisabled","appendTo","zIndex","name"]);const[Q,X]=r.useState(!1),[Y,ee]=r.useState(t),ae=r.useRef(null),te=r.useRef(null),ne=G||te,re=r.useRef(null),se=r.useRef(null),le=r.useRef(null),[ie,ce]=r.useState(!1),{isExpanded:oe,onToggleExpand:ue,toggleAriaLabel:de}=$||{};r.useEffect((()=>{var e,a;ie&&(oe?null===(e=null==ne?void 0:ne.current)||void 0===e||e.focus():null===(a=null==re?void 0:re.current)||void 0===a||a.focus(),ce(!1))}),[ie,oe,ne,re]),r.useEffect((()=>{ee(t)}),[t]),r.useEffect((()=>{h.length>0&&!b&&console.error("An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop")})),r.useEffect((()=>{X(L)}),[L]);const me=(e,a)=>{x&&x(e,a),ee(a)},pe=e=>{const a=!Q;X(a),y&&y(e,a)},fe=e=>{e.preventDefault(),I&&I(e,t,he()),X(!1)},he=()=>{const e={};return(e=>{let a;return e.match(/\\?.|^$/g).reduce(((e,t)=>("'"===t||'"'===t?(a||(a=t),t===a&&(e.quote=!e.quote)):e.quote||" "!==t?e.a[e.a.length-1]+=t.replace(/\\(.)/,"$1"):e.a.push(""),e)),{a:[""]}).a})(Y).map((a=>{const t=a.split(b);2===t.length?e[t[0]]=t[1].replace(/(^'|'$)/g,""):1===t.length&&(e.haswords=e.hasOwnProperty("haswords")?`${e.haswords} ${t[0]}`:t[0])})),e},ve=e=>{"Enter"===e.key&&fe(e)},ge=e=>{_&&_(e),ne&&ne.current&&ne.current.focus()},be=t&&(R||!!O&&!!D||!!_&&!$),Ee=(e={})=>{var a=(0,n.__rest)(e,[]);return r.createElement(C.L,Object.assign({isDisabled:q},a),r.createElement(w.v,{hint:N,icon:r.createElement(m.default,null),innerRef:ne,value:Y,placeholder:E,"aria-label":B,onKeyDown:ve,onChange:me,name:J}),be&&r.createElement(A.t,null,R&&r.createElement(i.C,{isRead:!0},R),!!O&&!!D&&r.createElement("div",{className:"pf-v5-c-text-input-group__group"},r.createElement(l.zx,{variant:l.Wu.plain,"aria-label":z,isDisabled:q||W,onClick:D},r.createElement(u,null)),r.createElement(l.zx,{variant:l.Wu.plain,"aria-label":F,isDisabled:q||Z,onClick:O},r.createElement(o.default,null))),!!_&&!$&&r.createElement(l.zx,{variant:l.Wu.plain,isDisabled:q,"aria-label":M,onClick:ge},r.createElement(d.default,null))))},Ne=r.createElement(l.zx,{variant:l.Wu.plain,"aria-label":de,"aria-expanded":oe,icon:oe?r.createElement(d.default,null):r.createElement(m.default,null),onClick:e=>{ee(""),ue(e,oe),ce(!0)},ref:re}),xe=(e={})=>{var a=(0,n.__rest)(e,[]);return r.createElement(j.B,Object.assign({ref:se},a),r.createElement(P.o,{isFill:!0},Ee()),(h.length>0||y)&&r.createElement(P.o,{isPlain:!0},r.createElement(l.zx,{className:Q&&"pf-m-expanded",variant:l.Wu.control,"aria-label":T,onClick:pe,isDisabled:q,"aria-expanded":Q},r.createElement(p.default,null))),!!I&&r.createElement(P.o,null,r.createElement(l.zx,{type:"submit",variant:l.Wu.control,"aria-label":H,onClick:fe,isDisabled:q},r.createElement(c.J,{shouldMirrorRTL:!0},r.createElement(f.default,null)))),$&&r.createElement(P.o,null,Ne))},Ie=Object.assign(Object.assign({},K),{className:a&&(0,s.css)(a),innerRef:ae});if($&&!oe)return r.createElement(j.B,Object.assign({},Ie),r.createElement(P.o,null,Ne));if(I||h.length>0||y){if(h.length>0){const e=r.createElement("div",{ref:le},r.createElement(S,{value:t,parentRef:ae,parentInputRef:ne,onSearch:I,onClear:_,onChange:x,onToggleAdvancedMenu:pe,resetButtonLabel:M,submitSearchButtonLabel:H,attributes:h,formAdditionalItems:v,hasWordsAttrLabel:g,advancedSearchDelimiter:b,getAttrValueMap:he,isSearchMenuOpen:Q})),n=r.createElement("div",Object.assign({className:(0,s.css)(a),ref:ae},K),r.createElement(k.Popper,{trigger:xe(),triggerRef:se,popper:e,popperRef:le,isVisible:Q,enableFlip:!0,appendTo:()=>V||ae.current,zIndex:U})),l=r.createElement("div",Object.assign({className:(0,s.css)(a),ref:ae},K),xe(),e);return"inline"!==V?n:l}return xe(Object.assign({},Ie))}return((e={})=>{var a=(0,n.__rest)(e,[]);return $?((e={})=>{var a=(0,n.__rest)(e,[]);return r.createElement(j.B,Object.assign({},a),r.createElement(P.o,{isFill:!0},Ee()," "),r.createElement(P.o,{isPlain:!0},Ne))})(Object.assign({},a)):Ee(Object.assign({},a))})(Ie)};D.displayName="SearchInputBase";const G=r.forwardRef(((e,a)=>r.createElement(D,Object.assign({},e,{innerRef:a}))));G.displayName="SearchInput"},94623:(e,a,t)=>{t.d(a,{L:()=>c,W:()=>i});var n=t(65353),r=t(28416),s=t(63574),l=t(38296);const i=r.createContext({isDisabled:!1}),c=e=>{var{children:a,className:t,isDisabled:c,isPlain:o,innerRef:u}=e,d=(0,n.__rest)(e,["children","className","isDisabled","isPlain","innerRef"]);const m=r.useRef(null),p=u||m;return r.createElement(i.Provider,{value:{isDisabled:c}},r.createElement("div",Object.assign({ref:p,className:(0,l.css)(s.Z.textInputGroup,c&&s.Z.modifiers.disabled,o&&s.Z.modifiers.plain,t)},d),a))};c.displayName="TextInputGroup"},66484:(e,a,t)=>{t.d(a,{v:()=>o});var n=t(65353),r=t(28416),s=t(63574),l=t(38296),i=t(94623);const c=e=>{var{children:a,className:t,icon:c,type:o="text",hint:u,onChange:d=(()=>{}),onFocus:m,onBlur:p,"aria-label":f="Type to filter",value:h,placeholder:v,innerRef:g,name:b,"aria-activedescendant":E,role:N,isExpanded:x,"aria-controls":I}=e,_=(0,n.__rest)(e,["children","className","icon","type","hint","onChange","onFocus","onBlur","aria-label","value","placeholder","innerRef","name","aria-activedescendant","role","isExpanded","aria-controls"]);const{isDisabled:y}=r.useContext(i.W),L=r.useRef(null),R=g||L;return r.createElement("div",Object.assign({className:(0,l.css)(s.Z.textInputGroupMain,c&&s.Z.modifiers.icon,t)},_),a,r.createElement("span",{className:(0,l.css)(s.Z.textInputGroupText)},u&&r.createElement("input",{className:(0,l.css)(s.Z.textInputGroupTextInput,s.Z.modifiers.hint),type:"text",disabled:!0,"aria-hidden":"true",value:u}),c&&r.createElement("span",{className:(0,l.css)(s.Z.textInputGroupIcon)},c),r.createElement("input",Object.assign({ref:R,type:o,className:(0,l.css)(s.Z.textInputGroupTextInput),"aria-label":f,disabled:y,onChange:e=>{d(e,e.currentTarget.value)},onFocus:m,onBlur:p,value:h||"",placeholder:v,name:b,"aria-activedescendant":E},N&&{role:N},void 0!==x&&{"aria-expanded":x},I&&{"aria-controls":I}))))},o=r.forwardRef(((e,a)=>r.createElement(c,Object.assign({innerRef:a},e))));o.displayName="TextInputGroupMain"},68578:(e,a,t)=>{t.d(a,{t:()=>i});var n=t(65353),r=t(28416),s=t(63574),l=t(38296);const i=e=>{var{children:a,className:t}=e,i=(0,n.__rest)(e,["children","className"]);return r.createElement("div",Object.assign({className:(0,l.css)(s.Z.textInputGroupUtilities,t)},i),a)};i.displayName="TextInputGroupUtilities"},11306:(e,a,t)=>{t.r(a),t.d(a,{ArrowRightIcon:()=>s,ArrowRightIconConfig:()=>r,default:()=>l});var n=t(40400);const r={name:"ArrowRightIcon",height:512,width:448,svgPath:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",yOffset:0,xOffset:0},s=(0,n.I)(r),l=s},80810:(e,a,t)=>{t.r(a),t.d(a,{SearchIcon:()=>s,SearchIconConfig:()=>r,default:()=>l});var n=t(40400);const r={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},s=(0,n.I)(r),l=s},63574:(e,a,t)=>{t.d(a,{Z:()=>n}),t(22143);const n={button:"pf-v5-c-button",chipGroupMain:"pf-v5-c-chip-group__main",modifiers:{disabled:"pf-m-disabled",plain:"pf-m-plain",icon:"pf-m-icon",hint:"pf-m-hint"},textInputGroup:"pf-v5-c-text-input-group",textInputGroupGroup:"pf-v5-c-text-input-group__group",textInputGroupIcon:"pf-v5-c-text-input-group__icon",textInputGroupMain:"pf-v5-c-text-input-group__main",textInputGroupText:"pf-v5-c-text-input-group__text",textInputGroupTextInput:"pf-v5-c-text-input-group__text-input",textInputGroupUtilities:"pf-v5-c-text-input-group__utilities",themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/4084.5fdf89e7b620b76e03b411ed6ff7a437.js.map
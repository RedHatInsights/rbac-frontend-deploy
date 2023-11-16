"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9173],{9947:(e,t,s)=>{s.d(t,{I:()=>a,u:()=>r});var a,i=s(65353),n=s(28416),l=s(38296),c=s(51203);!function(e){e.xs="xs",e.sm="sm",e.lg="lg",e.xl="xl",e.full="full"}(a||(a={}));const r=e=>{var{children:t,className:s,variant:r=a.full,isFullHeight:o}=e,d=(0,i.__rest)(e,["children","className","variant","isFullHeight"]);return n.createElement("div",Object.assign({className:(0,l.css)(c.Z.emptyState,"xs"===r&&c.Z.modifiers.xs,"sm"===r&&c.Z.modifiers.sm,"lg"===r&&c.Z.modifiers.lg,"xl"===r&&c.Z.modifiers.xl,o&&c.Z.modifiers.fullHeight,s)},d),n.createElement("div",{className:(0,l.css)(c.Z.emptyStateContent)},t))};r.displayName="EmptyState"},7065:(e,t,s)=>{s.d(t,{U:()=>c});var a=s(65353),i=s(28416),n=s(38296),l=s(51203);const c=e=>{var{children:t,className:s}=e,c=(0,a.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({className:(0,n.css)(l.Z.emptyStateActions,s)},c),t)};c.displayName="EmptyStateActions"},75106:(e,t,s)=>{s.d(t,{B:()=>c});var a=s(65353),i=s(28416),n=s(38296),l=s(51203);const c=e=>{var{children:t,className:s}=e,c=(0,a.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({className:(0,n.css)(l.Z.emptyStateBody,s)},c),t)};c.displayName="EmptyStateBody"},80315:(e,t,s)=>{s.d(t,{O:()=>c});var a=s(65353),i=s(28416),n=s(38296),l=s(51203);const c=e=>{var{children:t,className:s}=e,c=(0,a.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({className:(0,n.css)(l.Z.emptyStateFooter,s)},c),t)};c.displayName="EmptyStateFooter"},67880:(e,t,s)=>{s.d(t,{t:()=>c});var a=s(65353),i=s(28416),n=s(38296),l=s(51203);const c=e=>{var{children:t,className:s,titleClassName:c,titleText:r,headingLevel:o="h1",icon:d}=e,m=(0,a.__rest)(e,["children","className","titleClassName","titleText","headingLevel","icon"]);return i.createElement("div",Object.assign({className:(0,n.css)("pf-v5-c-empty-state__header",s)},m),d,(r||t)&&i.createElement("div",{className:(0,n.css)("pf-v5-c-empty-state__title")},r&&i.createElement(o,{className:(0,n.css)(l.Z.emptyStateTitleText,c)},r),t))};c.displayName="EmptyStateHeader"},38424:(e,t,s)=>{s.d(t,{k:()=>r});var a=s(65353),i=s(28416),n=s(38296),l=s(51203),c=s(2372);const r=e=>{var{className:t,icon:s,color:r}=e,o=(0,a.__rest)(e,["className","icon","color"]);const d=i.createElement(s,null).type===c.$;return i.createElement("div",Object.assign({className:(0,n.css)(l.Z.emptyStateIcon)},r&&!d&&{style:{"--pf-v5-c-empty-state__icon--Color":r}}),i.createElement(s,Object.assign({className:t,"aria-hidden":!d},o)))};r.displayName="EmptyStateIcon"},35373:(e,t,s)=>{s.d(t,{L:()=>N});var a=s(65353),i=s(28416);s(88361);const n="pf-m-expanded",l="pf-m-detached",c="pf-m-truncate",r="pf-m-limit-width",o="pf-m-display-lg",d="pf-m-indented",m="pf-m-active";var p=s(38296);const h="--pf-v5-c-expandable-section--m-truncate__content--LineClamp",g="3";var f,u=s(93174),v=s(80164),x=s(84709);!function(e){e.default="default",e.truncate="truncate"}(f||(f={}));const y=(e,t)=>{!t||e<1||t.style.setProperty(h,e.toString())};class N extends i.Component{constructor(e){super(e),this.expandableContentRef=i.createRef(),this.observer=()=>{},this.checkToggleVisibility=()=>{var e;if(null===(e=this.expandableContentRef)||void 0===e?void 0:e.current){const e=this.props.truncateMaxLines||parseInt(g),t=this.expandableContentRef.current.scrollHeight/parseInt(getComputedStyle(this.expandableContentRef.current).lineHeight);this.setState({hasToggle:t>e})}},this.resize=()=>{const{offsetWidth:e}=this.expandableContentRef.current;this.state.previousWidth!==e&&(this.setState({previousWidth:e}),this.checkToggleVisibility())},this.handleResize=(0,v.Ds)(this.resize,250),this.state={isExpanded:e.isExpanded,hasToggle:!0,previousWidth:void 0}}calculateToggleText(e,t,s,a){return a&&""!==t?t:a||""===s?e:s}componentDidMount(){if(this.props.variant===f.truncate){const e=this.expandableContentRef.current;this.setState({previousWidth:e.offsetWidth}),this.observer=(0,x.p)(e,this.handleResize,!1),this.props.truncateMaxLines&&y(this.props.truncateMaxLines,e),this.checkToggleVisibility()}}componentDidUpdate(e){if(this.props.variant===f.truncate&&e.truncateMaxLines!==this.props.truncateMaxLines){const e=this.expandableContentRef.current;y(this.props.truncateMaxLines,e),this.checkToggleVisibility()}}componentWillUnmount(){this.props.variant===f.truncate&&this.observer()}render(){const e=this.props,{onToggle:t,isActive:s,className:h,toggleText:g,toggleTextExpanded:x,toggleTextCollapsed:y,toggleContent:N,children:b,isExpanded:_,isDetached:E,displaySize:S,isWidthLimited:I,isIndented:T,contentId:C,toggleId:O,variant:k,truncateMaxLines:L}=e,Z=(0,a.__rest)(e,["onToggle","isActive","className","toggleText","toggleTextExpanded","toggleTextCollapsed","toggleContent","children","isExpanded","isDetached","displaySize","isWidthLimited","isIndented","contentId","toggleId","variant","truncateMaxLines"]);E&&!O&&console.warn("ExpandableSection: The toggleId value must be passed in and must match the toggleId of the ExpandableSectionToggle.");let w=t,z=_;const A=C||(0,v.Ki)("expandable-section-content"),R=O||(0,v.Ki)("expandable-section-toggle");void 0===_&&(z=this.state.isExpanded,w=(e,s)=>{this.setState({isExpanded:s},(()=>t(e,this.state.isExpanded)))});const j=this.calculateToggleText(g,x,y,z),M=!E&&i.createElement("button",{className:(0,p.css)("pf-v5-c-expandable-section__toggle"),type:"button","aria-expanded":z,"aria-controls":A,id:R,onClick:e=>w(e,!z)},k!==f.truncate&&i.createElement("span",{className:(0,p.css)("pf-v5-c-expandable-section__toggle-icon")},i.createElement(u.default,{"aria-hidden":!0})),i.createElement("span",{className:(0,p.css)("pf-v5-c-expandable-section__toggle-text")},N||j));return i.createElement("div",Object.assign({className:(0,p.css)("pf-v5-c-expandable-section",z&&n,s&&m,E&&l,"lg"===S&&o,I&&r,T&&d,k===f.truncate&&c,h)},Z),k===f.default&&M,i.createElement("div",{ref:this.expandableContentRef,className:(0,p.css)("pf-v5-c-expandable-section__content"),hidden:k!==f.truncate&&!z,id:A,"aria-labelledby":R,role:"region"},b),k===f.truncate&&this.state.hasToggle&&M)}}N.displayName="ExpandableSection",N.defaultProps={className:"",toggleText:"",toggleTextExpanded:"",toggleTextCollapsed:"",onToggle:(e,t)=>{},isActive:!1,isDetached:!1,displaySize:"default",isWidthLimited:!1,isIndented:!1,variant:"default"}},68340:(e,t,s)=>{s.d(t,{q:()=>a,x:()=>o});var a,i=s(65353),n=s(28416),l=s(38296),c=s(62873),r=s(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(a||(a={}));const o=e=>{var{children:t=null,className:s="",component:d=a.p,isVisitedLink:m=!1,ouiaId:p,ouiaSafe:h=!0}=e,g=(0,i.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const f=d,u=(0,r.useOUIAProps)(o.displayName,p,h);return n.createElement(f,Object.assign({},u,g,{"data-pf-content":!0,className:(0,l.css)(m&&d===a.a&&c.Z.modifiers.visited,s)}),t)};o.displayName="Text"},38779:(e,t,s)=>{s.d(t,{D:()=>d,H:()=>c});var a=s(65353),i=s(28416),n=s(38296);s(314);const l={modifiers:{"4xl":"pf-m-4xl","3xl":"pf-m-3xl","2xl":"pf-m-2xl",xl:"pf-m-xl",lg:"pf-m-lg",md:"pf-m-md"},title:"pf-v5-c-title"};var c,r,o=s(62472);!function(e){e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(c||(c={})),function(e){e.h1="2xl",e.h2="xl",e.h3="lg",e.h4="md",e.h5="md",e.h6="md"}(r||(r={}));const d=e=>{var{className:t="",children:s="",headingLevel:c,size:m=r[c],ouiaId:p,ouiaSafe:h=!0}=e,g=(0,a.__rest)(e,["className","children","headingLevel","size","ouiaId","ouiaSafe"]);const f=(0,o.useOUIAProps)(d.displayName,p,h);return i.createElement(c,Object.assign({},f,g,{className:(0,n.css)(l.title,m&&l.modifiers[m],t)}),s)};d.displayName="Title"},84709:(e,t,s)=>{s.d(t,{p:()=>i});var a=s(80164);const i=(e,t,s)=>{let i;if(a.Nq){const{ResizeObserver:a}=window;if(e&&a){const n=new a((e=>{s?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));n.observe(e),i=()=>n.unobserve(e)}else window.addEventListener("resize",t),i=()=>window.removeEventListener("resize",t)}return()=>{i&&i()}}},49739:(e,t,s)=>{s.d(t,{K:()=>c});var a=s(65353),i=s(28416),n=s(73976),l=s(38296);const c=e=>{var{hasGutter:t=!1,className:s="",children:c=null,component:r="div"}=e,o=(0,a.__rest)(e,["hasGutter","className","children","component"]);const d=r;return i.createElement(d,Object.assign({},o,{className:(0,l.css)(n.Z.stack,t&&n.Z.modifiers.gutter,s)}),c)};c.displayName="Stack"},83826:(e,t,s)=>{s.d(t,{v:()=>c});var a=s(65353),i=s(28416),n=s(73976),l=s(38296);const c=e=>{var{isFilled:t=!1,className:s="",children:c=null}=e,r=(0,a.__rest)(e,["isFilled","className","children"]);return i.createElement("div",Object.assign({},r,{className:(0,l.css)(n.Z.stackItem,t&&n.Z.modifiers.fill,s)}),c)};c.displayName="StackItem"},40400:(e,t,s)=>{s.d(t,{I:()=>l});var a=s(65353),i=s(28416);let n=0;function l({name:e,xOffset:t=0,yOffset:s=0,width:l,height:c,svgPath:r}){var o;return o=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+n++}render(){const e=this.props,{title:n,className:o}=e,d=(0,a.__rest)(e,["title","className"]),m=o?`pf-v5-svg ${o}`:"pf-v5-svg",p=Boolean(n),h=[t,s,l,c].join(" ");return i.createElement("svg",Object.assign({className:m,viewBox:h,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},d),p&&i.createElement("title",{id:this.id},n),i.createElement("path",{d:r}))}},o.displayName=e,o}},93174:(e,t,s)=>{s.r(t),s.d(t,{AngleRightIcon:()=>n,AngleRightIconConfig:()=>i,default:()=>l});var a=s(40400);const i={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},n=(0,a.I)(i),l=n},43047:(e,t,s)=>{s.r(t),s.d(t,{ExclamationCircleIcon:()=>n,ExclamationCircleIconConfig:()=>i,default:()=>l});var a=s(40400);const i={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},n=(0,a.I)(i),l=n},62873:(e,t,s)=>{s.d(t,{Z:()=>a}),s(10108);const a={content:"pf-v5-c-content",modifiers:{visited:"pf-m-visited",plain:"pf-m-plain"}}},51203:(e,t,s)=>{s.d(t,{Z:()=>a}),s(81320);const a={emptyState:"pf-v5-c-empty-state",emptyStateActions:"pf-v5-c-empty-state__actions",emptyStateBody:"pf-v5-c-empty-state__body",emptyStateContent:"pf-v5-c-empty-state__content",emptyStateFooter:"pf-v5-c-empty-state__footer",emptyStateIcon:"pf-v5-c-empty-state__icon",emptyStateTitleText:"pf-v5-c-empty-state__title-text",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height"}}},73976:(e,t,s)=>{s.d(t,{Z:()=>a}),s(53519);const a={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-v5-l-stack",stackItem:"pf-v5-l-stack__item"}}}]);
//# sourceMappingURL=../sourcemaps/9173.cb0ef3e475597d19f5ef3705134ad6d9.js.map
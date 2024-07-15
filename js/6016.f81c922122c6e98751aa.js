"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[6016],{49644:(e,t,i)=>{i.d(t,{J:()=>p});var a=i(65353),r=i(28416),s=i(12455),n=i(38296),o=i(68778),l=i(43047),d=i(69957);const c={success:o.default,error:l.ZP,warning:d.ZP},p=e=>{var{status:t,customIcon:i,className:o}=e,l=(0,a.__rest)(e,["status","customIcon","className"]);const d=t&&c[t];return r.createElement("span",Object.assign({className:(0,n.css)(s.Z.formControlIcon,t&&s.Z.modifiers.status,o)},l),i||r.createElement(d,null))}},82011:(e,t,i)=>{i.d(t,{B:()=>b});var a=i(65353),r=i(28416),s=i(12276),n=i(38296),o=i(12455),l=i(1774),d=i(49644),c=i(62472),p=i(5964);class u extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.value)},e.id||e["aria-label"]||console.error("FormSelect requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,c.getDefaultOUIAId)(u.displayName,e.validated)}}render(){const e=this.props,{children:t,className:i,value:s,validated:m,isDisabled:f,isRequired:h,ouiaId:b,ouiaSafe:v}=e,g=(0,a.__rest)(e,["children","className","value","validated","isDisabled","isRequired","ouiaId","ouiaSafe"]),y=r.Children.toArray(t).find((e=>e.props.value===s)),R=y&&y.props.isPlaceholder,C=["success","error","warning"].includes(m);return r.createElement("span",{className:(0,n.css)(o.Z.formControl,f&&o.Z.modifiers.disabled,R&&o.Z.modifiers.placeholder,C&&o.Z.modifiers[m],i)},r.createElement("select",Object.assign({},g,{"aria-invalid":m===l.LD.error},(0,c.getOUIAProps)(u.displayName,void 0!==b?b:this.state.ouiaStateId,v),{onChange:this.handleChange,disabled:f,required:h,value:s}),t),r.createElement("span",{className:(0,n.css)(o.Z.formControlUtilities)},C&&r.createElement(d.J,{status:m}),r.createElement("span",{className:(0,n.css)(o.Z.formControlToggleIcon)},r.createElement(p.default,null))))}}u.displayName="FormSelect",u.defaultProps={className:"",value:"",validated:"default",isDisabled:!1,isRequired:!1,onBlur:()=>{},onFocus:()=>{},onChange:()=>{},ouiaSafe:!0};var m=i(45469),f=i(92607);const h=e=>{var{className:t,children:i,innerRef:o}=e,l=(0,a.__rest)(e,["className","children","innerRef"]);const d=[u,m.Kx,f.oi].map((e=>e.displayName)),c=(()=>{const e=e=>r.Children.toArray(e).find((e=>{var t,i;return!d.includes(null===(t=null==e?void 0:e.type)||void 0===t?void 0:t.displayName)&&(null===(i=null==e?void 0:e.props)||void 0===i?void 0:i.id)}));let t=e(i);return t||(r.Children.toArray(i).find((i=>{const a=e(i.props.children);if(a)return t=a,!0})),t)})(),p=r.useRef(null),h=o||p,b=r.Children.map(i,(e=>{var t;if("InputGroupItem"===(null==e?void 0:e.type.displayName)){const t=r.Children.map(e.props.children,(e=>{var t;return e.props?e.props["aria-describedby"]?e:d.includes(e.type.displayName)?r.cloneElement(e,{"aria-describedby":""===e.props["aria-describedby"]||null===(t=null==c?void 0:c.props)||void 0===t?void 0:t.id}):e:e}));return r.cloneElement(e,{},t)}return(null==e?void 0:e.props["aria-describedby"])?e:d.includes(null==e?void 0:e.type.displayName)?r.cloneElement(e,{"aria-describedby":""===e.props["aria-describedby"]||null===(t=null==c?void 0:c.props)||void 0===t?void 0:t.id}):e}));return r.createElement("div",Object.assign({ref:h,className:(0,n.css)(s.Z.inputGroup,t)},l),c?b:i)};h.displayName="InputGroupBase";const b=r.forwardRef(((e,t)=>r.createElement(h,Object.assign({innerRef:t},e))));b.displayName="InputGroup"},43446:(e,t,i)=>{i.d(t,{o:()=>o});var a=i(65353),r=i(28416),s=i(12276),n=i(38296);const o=e=>{var{className:t,children:i,isFill:o=!1,isBox:l=!1,isPlain:d,isDisabled:c}=e,p=(0,a.__rest)(e,["className","children","isFill","isBox","isPlain","isDisabled"]);return r.createElement("div",Object.assign({className:(0,n.css)(s.Z.inputGroupItem,o&&s.Z.modifiers.fill,l&&s.Z.modifiers.box,d&&s.Z.modifiers.plain,c&&s.Z.modifiers.disabled,t)},p),i)};o.displayName="InputGroupItem"},45469:(e,t,i)=>{i.d(t,{Kx:()=>m,f:()=>a,lW:()=>r});var a,r,s=i(65353),n=i(28416),o=i(12455),l=i(38296),d=i(80164),c=i(1774),p=i(49644);!function(e){e.horizontal="horizontal",e.vertical="vertical",e.both="both"}(a||(a={})),function(e){e.default="default",e.plain="plain"}(r||(r={}));class u extends n.Component{constructor(e){super(e),this.inputRef=n.createRef(),this.setAutoHeight=e=>{const t=e.parentElement;t.style.setProperty("height","inherit");const i=window.getComputedStyle(e),a=parseInt(i.getPropertyValue("border-top-width"))+parseInt(i.getPropertyValue("padding-top"))+e.scrollHeight+parseInt(i.getPropertyValue("padding-bottom"))+parseInt(i.getPropertyValue("border-bottom-width"));t.style.setProperty("height",`${a}px`)},this.handleChange=e=>{const t=e.currentTarget;this.props.autoResize&&d.Nq&&this.setAutoHeight(t),this.props.onChange&&this.props.onChange(e,t.value)},e.id||e["aria-label"]||console.error("TextArea: TextArea requires either an id or aria-label to be specified")}componentDidMount(){const e=this.props.innerRef||this.inputRef;if(this.props.autoResize&&d.Nq){const t=e.current;this.setAutoHeight(t)}}render(){const e=this.props,{className:t,value:i,validated:a,isRequired:r,isDisabled:u,readOnlyVariant:m,resizeOrientation:f,innerRef:h,disabled:b,autoResize:v,onChange:g,onBlur:y,onFocus:R}=e,C=(0,s.__rest)(e,["className","value","validated","isRequired","isDisabled","readOnlyVariant","resizeOrientation","innerRef","disabled","autoResize","onChange","onBlur","onFocus"]),N=`resize${(0,d.kC)(f)}`,I=["success","error","warning"].includes(a);return n.createElement("span",{className:(0,l.css)(o.Z.formControl,m&&o.Z.modifiers.readonly,"plain"===m&&o.Z.modifiers.plain,f&&o.Z.modifiers[N],u&&o.Z.modifiers.disabled,I&&o.Z.modifiers[a],t)},n.createElement("textarea",Object.assign({onChange:this.handleChange,onFocus:R,onBlur:y},"string"!=typeof this.props.defaultValue&&{value:i},{"aria-invalid":a===c.LD.error,required:r,disabled:u||b,readOnly:!!m,ref:h||this.inputRef},C)),I&&n.createElement("span",{className:(0,l.css)(o.Z.formControlUtilities)},n.createElement(p.J,{status:a})))}}u.displayName="TextArea",u.defaultProps={innerRef:n.createRef(),className:"",isRequired:!1,isDisabled:!1,validated:"default",resizeOrientation:"both","aria-label":null};const m=n.forwardRef(((e,t)=>n.createElement(u,Object.assign({},e,{innerRef:t}))));m.displayName="TextArea"},92607:(e,t,i)=>{i.d(t,{BJ:()=>r,oi:()=>h,x:()=>a,y5:()=>f});var a,r,s=i(65353),n=i(28416),o=i(12455),l=i(38296),d=i(1774),c=i(80164),p=i(62472),u=i(84709),m=i(49644);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(a||(a={})),function(e){e.default="default",e.plain="plain"}(r||(r={}));class f extends n.Component{constructor(e){super(e),this.inputRef=n.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e,e.currentTarget.value)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,c.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,isStartTruncated:i,onFocus:a}=this.props;(t||i)&&this.restoreText(),a&&a(e)},this.onBlur=e=>{const{isLeftTruncated:t,isStartTruncated:i,onBlur:a}=this.props;(t||i)&&this.handleResize(),a&&a(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,p.getDefaultOUIAId)(f.displayName)}}componentDidMount(){if(this.props.isLeftTruncated||this.props.isStartTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,u.p)(e.current,this.handleResize,!0),this.handleResize()}}componentWillUnmount(){(this.props.isLeftTruncated||this.props.isStartTruncated)&&this.observer()}render(){const e=this.props,{innerRef:t,className:i,type:a,value:r,placeholder:c,validated:u,onChange:f,onFocus:b,onBlur:v,isLeftTruncated:g,isStartTruncated:y,isExpanded:R,readOnly:C,readOnlyVariant:N,isRequired:I,isDisabled:x,customIcon:Z,ouiaId:T,ouiaSafe:E}=e,z=(0,s.__rest)(e,["innerRef","className","type","value","placeholder","validated","onChange","onFocus","onBlur","isLeftTruncated","isStartTruncated","isExpanded","readOnly","readOnlyVariant","isRequired","isDisabled","customIcon","ouiaId","ouiaSafe"]),O=["success","error","warning"].includes(u);return n.createElement("span",{className:(0,l.css)(o.Z.formControl,N&&o.Z.modifiers.readonly,"plain"===N&&o.Z.modifiers.plain,x&&o.Z.modifiers.disabled,R&&o.Z.modifiers.expanded,Z&&o.Z.modifiers.icon,O&&o.Z.modifiers[u],i)},n.createElement("input",Object.assign({},z,{onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange,type:a,value:this.sanitizeInputValue(r),"aria-invalid":z["aria-invalid"]?z["aria-invalid"]:u===d.LD.error,required:I,disabled:x,readOnly:!!N||C,ref:t||this.inputRef,placeholder:c},(0,p.getOUIAProps)(h.displayName,void 0!==T?T:this.state.ouiaStateId,E))),(Z||O)&&n.createElement("span",{className:(0,l.css)(o.Z.formControlUtilities)},Z&&n.createElement(m.J,{customIcon:Z}),O&&n.createElement(m.J,{status:u})))}}f.displayName="TextInputBase",f.defaultProps={"aria-label":null,isRequired:!1,validated:"default",isDisabled:!1,isExpanded:!1,type:a.text,isLeftTruncated:!1,isStartTruncated:!1,onChange:()=>{},ouiaSafe:!0};const h=n.forwardRef(((e,t)=>n.createElement(f,Object.assign({},e,{innerRef:t}))));h.displayName="TextInput"},12455:(e,t,i)=>{i.d(t,{Z:()=>a}),i(90479);const a={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}},12276:(e,t,i)=>{i.d(t,{Z:()=>a}),i(74282);const a={inputGroup:"pf-v5-c-input-group",inputGroupItem:"pf-v5-c-input-group__item",inputGroupText:"pf-v5-c-input-group__text",modifiers:{box:"pf-m-box",plain:"pf-m-plain",disabled:"pf-m-disabled",fill:"pf-m-fill"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/6016.ca67e1edca11ea3547d980e50f7a26aa.js.map
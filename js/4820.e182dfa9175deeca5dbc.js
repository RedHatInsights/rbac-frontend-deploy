(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4820,8363],{93149:(e,s,a)=>{"use strict";a.d(s,{X:()=>o});var c=a(65353),t=a(66029),i=a(54783),l=a(38296),n=a(62472),r=a(11888);const d=()=>{};class o extends t.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},this.state={ouiaStateId:(0,n.getDefaultOUIAId)(o.displayName)}}render(){const e=this.props,{"aria-label":s,className:a,inputClassName:h,onChange:u,isLabelWrapped:p,isLabelBeforeButton:m,isValid:f,isDisabled:b,isRequired:k,isChecked:g,label:v,checked:C,defaultChecked:N,description:y,body:I,ouiaId:_,ouiaSafe:E,component:L}=e,B=(0,c.__rest)(e,["aria-label","className","inputClassName","onChange","isLabelWrapped","isLabelBeforeButton","isValid","isDisabled","isRequired","isChecked","label","checked","defaultChecked","description","body","ouiaId","ouiaSafe","component"]);B.id||console.error("Checkbox:","id is required to make input accessible");const O={};([!0,!1].includes(C)||!0===g)&&(O.checked=C||g),u!==d&&(O.checked=g),[!1,!0].includes(N)&&(O.defaultChecked=N);const Z=t.createElement("input",Object.assign({},B,{className:(0,l.css)(i.Z.checkInput,h),type:"checkbox",onChange:this.handleChange,"aria-invalid":!f,"aria-label":s,disabled:b,required:k,ref:e=>e&&(e.indeterminate=null===g)},O,(0,n.getOUIAProps)(o.displayName,void 0!==_?_:this.state.ouiaStateId,E))),q=p&&!L||"label"===L,x=q?"span":"label",R=v?t.createElement(x,{className:(0,l.css)(i.Z.checkLabel,b&&i.Z.modifiers.disabled),htmlFor:q?void 0:B.id},v,k&&t.createElement("span",{className:(0,l.css)(i.Z.checkLabelRequired),"aria-hidden":"true"},r.t)):null,w=null!=L?L:q?"label":"div";return O.checked=null!==O.checked&&O.checked,t.createElement(w,{className:(0,l.css)(i.Z.check,!v&&i.Z.modifiers.standalone,a),htmlFor:q?B.id:void 0},m?t.createElement(t.Fragment,null,R,Z):t.createElement(t.Fragment,null,Z,R),y&&t.createElement("span",{className:(0,l.css)(i.Z.checkDescription)},y),I&&t.createElement("span",{className:(0,l.css)(i.Z.checkBody)},I))}}o.displayName="Checkbox",o.defaultProps={className:"",isLabelWrapped:!1,isValid:!0,isDisabled:!1,isRequired:!1,isChecked:!1,onChange:d,ouiaSafe:!0}},11888:(e,s,a)=>{"use strict";a.d(s,{t:()=>c});const c="*"},40400:(e,s,a)=>{"use strict";a.d(s,{I:()=>l});var c=a(65353),t=a(66029);let i=0;function l({name:e,xOffset:s=0,yOffset:a=0,width:l,height:n,svgPath:r}){var d;return d=class extends t.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{title:i,className:d}=e,o=(0,c.__rest)(e,["title","className"]),h=d?`pf-v5-svg ${d}`:"pf-v5-svg",u=Boolean(i),p=[s,a,l,n].join(" ");return t.createElement("svg",Object.assign({className:h,viewBox:p,fill:"currentColor","aria-labelledby":u?this.id:null,"aria-hidden":!u||null,role:"img",width:"1em",height:"1em"},o),u&&t.createElement("title",{id:this.id},i),t.createElement("path",{d:r}))}},d.displayName=e,d}},93174:(e,s,a)=>{"use strict";a.r(s),a.d(s,{AngleRightIcon:()=>i,AngleRightIconConfig:()=>t,default:()=>l});var c=a(40400);const t={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},i=(0,c.I)(t),l=i},54783:(e,s,a)=>{"use strict";a.d(s,{Z:()=>c}),a(32857);const c={check:"pf-v5-c-check",checkBody:"pf-v5-c-check__body",checkDescription:"pf-v5-c-check__description",checkInput:"pf-v5-c-check__input",checkLabel:"pf-v5-c-check__label",checkLabelRequired:"pf-v5-c-check__label-required",modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"}}},38296:(e,s,a)=>{"use strict";function c(...e){const s=[],a={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const t=typeof e;if("string"===t||"number"===t)s.push(e);else if(Array.isArray(e)&&e.length){const a=c(...e);a&&s.push(a)}else if("object"===t)for(const c in e)a.call(e,c)&&e[c]&&s.push(c)})),s.join(" ")}a.r(s),a.d(s,{css:()=>c})},11452:()=>{},34946:()=>{},80598:()=>{},32857:()=>{},99624:()=>{},66822:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4820.a2c80096ec790b1af12d42f16e878ba5.js.map
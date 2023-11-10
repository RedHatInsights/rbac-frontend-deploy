"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[5967],{40400:(e,t,n)=>{n.d(t,{IU:()=>s,Jh:()=>a});var a,r=n(70655),l=n(92950);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(a||(a={}));let o=0;function s({name:e,xOffset:t=0,yOffset:n=0,width:s,height:i,svgPath:c}){var u;return u=class extends l.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{size:o,color:u,title:m,noVerticalAlign:d}=e,h=(0,r.__rest)(e,["size","color","title","noVerticalAlign"]),g=Boolean(m),f=(e=>{switch(e){case a.sm:return"1em";case a.md:return"1.5em";case a.lg:return"2em";case a.xl:return"3em";default:return"1em"}})(o),p=-.125*Number.parseFloat(f),v=d?null:{verticalAlign:`${p}em`},b=[t,n,s,i].join(" ");return l.createElement("svg",Object.assign({style:v,fill:u,height:f,width:f,viewBox:b,"aria-labelledby":g?this.id:null,"aria-hidden":!g||null,role:"img"},h),g&&l.createElement("title",{id:this.id},m),l.createElement("path",{d:c}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:a.sm,noVerticalAlign:!1},u}},69957:(e,t,n)=>{n.d(t,{LP:()=>l,RI:()=>r,ZP:()=>o});var a=n(40400);const r={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},l=(0,a.IU)(r),o=l},1227:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(29439),r=n(92950),l=n.n(r),o=n(86896),s=n(45697),i=n.n(s),c=n(30893),u=n(69957),m=n(25864),d=function(e){var t=e.title,n=e.text,s=e.onClose,i=e.onSubmit,d=e.isOpen,h=e.confirmButtonLabel,g=e.withCheckbox,f=(0,o.Z)(),p=(0,r.useState)(!1),v=(0,a.Z)(p,2),b=v[0],C=v[1];return l().createElement(m.Modal,{className:"rbac",title:l().createElement("div",null,l().createElement(u.ZP,{className:"ins-m-alert rbac-c__delete-icon"})," ",t),isOpen:d,variant:m.ModalVariant.small,onClose:s,actions:[l().createElement(m.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:g&&!b,variant:"danger",onClick:i},h),l().createElement(m.Button,{key:"cancel",ouiaId:"secondary-cancel-button",variant:"link",onClick:s},f.formatMessage(c.Z.cancel))]},l().createElement(m.Split,{hasGutter:!0},l().createElement(m.SplitItem,{isFilled:!0},l().createElement(m.Stack,{hasGutter:!0},l().createElement(m.TextContent,null,n)))),g?l().createElement(m.Checkbox,{isChecked:b,onChange:function(){return C(!b)},label:f.formatMessage(c.Z.confirmCheckMessage),id:"remove-modal-check",className:"pf-u-mt-lg"}):null)};d.propTypes={text:i().any,title:i().string,confirmButtonLabel:i().string,onSubmit:i().func,onClose:i().func,isOpen:i().bool,withCheckbox:i().bool},d.defaultProps={withCheckbox:!1};const h=d},44012:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(70655),r=n(92950),l=n(86896),o=n(680);function s(e){var t=(0,l.Z)(),n=t.formatMessage,a=t.textComponent,o=void 0===a?r.Fragment:a,s=e.id,i=e.description,c=e.defaultMessage,u=e.values,m=e.children,d=e.tagName,h=void 0===d?o:d,g=n({id:s,description:i,defaultMessage:c},u,{ignoreTag:e.ignoreTag});return"function"==typeof m?m(Array.isArray(g)?g:[g]):h?r.createElement(h,null,r.Children.toArray(g)):r.createElement(r.Fragment,null,g)}s.displayName="FormattedMessage";var i=r.memo(s,(function(e,t){var n=e.values,r=(0,a.__rest)(e,["values"]),l=t.values,s=(0,a.__rest)(t,["values"]);return(0,o.wU)(l,n)&&(0,o.wU)(r,s)}));i.displayName="MemoizedFormattedMessage";const c=i},55967:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(92950),r=n.n(a),l=n(1227),o=n(50533),s=n(44012),i=n(30893),c=n(46801),u=n(19756);const m=({postMethod:e})=>{const t=(0,o.useSelector)((({groupReducer:{selectedGroup:e}})=>e)),[n]=(0,c.useSearchParams)(),a=(0,o.useSelector)((({groupReducer:{selectedGroup:e}})=>(e?.serviceAccounts?.data||[]).filter((({name:e})=>n.getAll("name").includes(e))))),m=(0,o.useDispatch)();return r().createElement(l.Z,{title:`Remove service account from group ${t.name}`,text:r().createElement(s.Z,{...i.Z.removeServiceAccountsText,values:{b:e=>r().createElement("b",null,e),count:n.getAll("name").length,name:a[0].name,group:t.name}}),confirmButtonLabel:"Remove",withCheckbox:!0,onClose:()=>e(),onSubmit:()=>{m((0,u.WK)(t.uuid,a)),e()},isOpen:!0})}}}]);
//# sourceMappingURL=../sourcemaps/5967.fd91e400a29ba0726975a52cfb2ce409.js.map
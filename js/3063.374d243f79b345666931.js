"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[3063],{40400:(e,t,n)=>{n.d(t,{IU:()=>s,Jh:()=>r});var r,a=n(70655),i=n(92950);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));let l=0;function s({name:e,xOffset:t=0,yOffset:n=0,width:s,height:o,svgPath:u}){var c;return c=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{size:l,color:c,title:d,noVerticalAlign:m}=e,f=(0,a.__rest)(e,["size","color","title","noVerticalAlign"]),g=Boolean(d),h=(e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}})(l),v=-.125*Number.parseFloat(h),p=m?null:{verticalAlign:`${v}em`},b=[t,n,s,o].join(" ");return i.createElement("svg",Object.assign({style:p,fill:c,height:h,width:h,viewBox:b,"aria-labelledby":g?this.id:null,"aria-hidden":!g||null,role:"img"},f),g&&i.createElement("title",{id:this.id},d),i.createElement("path",{d:u}))}},c.displayName=e,c.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},c}},69957:(e,t,n)=>{n.d(t,{LP:()=>i,RI:()=>a,ZP:()=>l});var r=n(40400);const a={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},i=(0,r.IU)(a),l=i},93736:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(46801),a=n(65126);const i=function(e){var t=(0,r.useNavigate)();return function(n,r){return t((0,a.n)(n,e),r)}}},13063:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var r=n(87462),a=n(29439),i=n(92950),l=n.n(i),s=n(45697),o=n.n(s),u=n(50533),c=n(46801),d=n(86896),m=n(44012),f=n(69957),g=n(76857),h=n(83215),v=n(28090),p=n(43115),b=n(76254),y=n(93736),E=n(30893),x=function(e){var t=e.cancelRoute,n=e.submitRoute,s=void 0===n?t:n,o=e.afterSubmit,x=e.isLoading,C=(0,d.Z)(),Z=(0,c.useParams)().roleId.split(","),R=(0,u.useSelector)((function(e){return 1===Z.length?(0,b.B)(e,Z[0]):Z.length})),M=(0,i.useState)(!0),k=(0,a.Z)(M,2),_=k[0],T=k[1],w=(0,i.useState)(R),z=(0,a.Z)(w,2),P=z[0],A=z[1],I=(0,u.useDispatch)(),N=(0,y.Z)();(0,i.useEffect)((function(){Z&&R?A(R):Z&&1===Z.length&&(0,p.fp)(Z[0]).then((function(e){return A(e.display_name)})).catch((function(e){var t,n;return I((0,h.wN)({variant:"danger",title:"Could not get role",description:null==e||null===(t=e.errors)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.detail}))}))}),[R,Z]);var O=function(){return N(t,{replace:!0})};return P?x?null:l().createElement(g.Modal,{className:"rbac","aria-label":"remove-role",header:l().createElement(g.TextContent,null,l().createElement(g.Split,{hasGutter:!0},l().createElement(g.SplitItem,null,l().createElement(f.ZP,{size:"lg",style:{fill:"#f0ab00"}})),l().createElement(g.SplitItem,null,l().createElement(g.Text,{component:"h1"},C.formatMessage(E.Z.deleteRoleQuestion))))),isOpen:!0,variant:"small",onClose:O,actions:[l().createElement(g.Button,{isDisabled:_,key:"submit",variant:"danger",type:"button",id:"confirm-delete-portfolio",onClick:function(){Promise.all(Z.map((function(e){return I((0,v.l5)(e))}))).then((function(){return o()})),N(s)}},C.formatMessage(E.Z.confirm)),l().createElement(g.Button,{key:"cancel",variant:"link",type:"button",onClick:O},C.formatMessage(E.Z.cancel))]},l().createElement(g.TextContent,null,l().createElement(g.Text,{component:g.TextVariants.p},l().createElement(m.Z,(0,r.Z)({},E.Z.roleWilBeRemovedWithPermissions,{values:{strong:function(e){return l().createElement("strong",null,e)},name:P,count:Z.length}}))),l().createElement(g.Checkbox,{id:"remove-role-checkbox",label:C.formatMessage(E.Z.understandActionIrreversible),isChecked:!_,onChange:function(){return T((function(e){return!e}))}}))):null};x.propTypes={cancelRoute:o().oneOfType([o().string,o().shape({pathname:o().string.isRequired,search:o().string,hash:o().string})]).isRequired,submitRoute:o().oneOfType([o().string,o().shape({pathname:o().string.isRequired,search:o().string,hash:o().string})]),afterSubmit:o().func.isRequired,isLoading:o().bool.isRequired};const C=x},76254:(e,t,n)=>{n.d(t,{B:()=>a,z:()=>r});var r=function(e,t){var n=e.roleReducer,r=n.roles,a=void 0===r?{data:[]}:r,i=n.selectedRole;return(null==i?void 0:i.uuid)===t?i:a.data.find((function(e){return e.uuid===t}))},a=function(e,t){var n;return null===(n=r(e,t))||void 0===n?void 0:n.display_name}},44012:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(70655),a=n(92950),i=n(86896),l=n(680);function s(e){var t=(0,i.Z)(),n=t.formatMessage,r=t.textComponent,l=void 0===r?a.Fragment:r,s=e.id,o=e.description,u=e.defaultMessage,c=e.values,d=e.children,m=e.tagName,f=void 0===m?l:m,g=n({id:s,description:o,defaultMessage:u},c,{ignoreTag:e.ignoreTag});return"function"==typeof d?d(Array.isArray(g)?g:[g]):f?a.createElement(f,null,a.Children.toArray(g)):a.createElement(a.Fragment,null,g)}s.displayName="FormattedMessage";var o=a.memo(s,(function(e,t){var n=e.values,a=(0,r.__rest)(e,["values"]),i=t.values,s=(0,r.__rest)(t,["values"]);return(0,l.wU)(i,n)&&(0,l.wU)(a,s)}));o.displayName="MemoizedFormattedMessage";const u=o}}]);
//# sourceMappingURL=../sourcemaps/3063.e9b6f92ce13c28881285d5d7d0e3f2c7.js.map
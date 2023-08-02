"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[885],{40400:(e,t,n)=>{n.d(t,{IU:()=>i,Jh:()=>r});var r,a=n(70655),l=n(92950);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));let s=0;function i({name:e,xOffset:t=0,yOffset:n=0,width:i,height:o,svgPath:u}){var c;return c=class extends l.Component{constructor(){super(...arguments),this.id="icon-title-"+s++}render(){const e=this.props,{size:s,color:c,title:d,noVerticalAlign:m}=e,g=(0,a.__rest)(e,["size","color","title","noVerticalAlign"]),h=Boolean(d),p=(e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}})(s),f=-.125*Number.parseFloat(p),v=m?null:{verticalAlign:`${f}em`},b=[t,n,i,o].join(" ");return l.createElement("svg",Object.assign({style:v,fill:c,height:p,width:p,viewBox:b,"aria-labelledby":h?this.id:null,"aria-hidden":!h||null,role:"img"},g),h&&l.createElement("title",{id:this.id},d),l.createElement("path",{d:u}))}},c.displayName=e,c.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},c}},69957:(e,t,n)=>{n.d(t,{LP:()=>l,RI:()=>a,ZP:()=>s});var r=n(40400);const a={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},l=(0,r.IU)(a),s=l},93736:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(46801),a=n(65126);const l=function(e){var t=(0,r.useNavigate)();return function(n,r){return t((0,a.n)(n,e),r)}}},90885:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(87462),a=n(29439),l=n(92950),s=n.n(l),i=n(45697),o=n.n(i),u=n(46801),c=n(86896),d=n(44012),m=n(50533),g=n(76857),h=n(69957),p=n(19756),f=n(19571),v=n(93736),b=n(30893),E=function(e){var t=e.postMethod,n=e.pagination,i=e.cancelRoute,o=e.submitRoute,E=void 0===o?i:o,Z=(0,c.Z)(),y=(0,m.useDispatch)(),M=(0,v.Z)(),R=(0,u.useParams)().groupId,x=R.split(","),C=x.length>1,k=(0,m.useSelector)((function(e){var t=e.groupReducer.selectedGroup;return{group:t,isLoading:(R||1===x.length)&&!t.loaded}}),m.shallowEqual),w=k.group,T=k.isLoading;(0,l.useEffect)((function(){1===x.length&&y((0,p.yi)(x[0]))}),[]);var _=(0,l.useState)(!1),A=(0,a.Z)(_,2),N=A[0],O=A[1],z=function(){return M(i)};return s().createElement(g.Modal,{className:"rbac",isOpen:!0,variant:g.ModalVariant.small,title:s().createElement(g.Text,null,s().createElement(h.ZP,{className:"delete-group-warning-icon"}),"  ",Z.formatMessage(C?b.Z.deleteGroupsQuestion:b.Z.deleteGroupQuestion)),onClose:z,actions:[s().createElement(g.Button,{key:"submit",isDisabled:!N,variant:"danger",type:"button",onClick:function(){y((0,p.gg)(x)).then((function(){return t(x,{limit:null==n?void 0:n.limit})})).then(M(E))}},Z.formatMessage(C?b.Z.deleteGroups:b.Z.deleteGroup)),s().createElement(g.Button,{key:"cancel",variant:"link",type:"button",onClick:z},Z.formatMessage(b.Z.cancel))]},s().createElement(g.TextContent,null,C?s().createElement(g.Text,null,s().createElement(d.Z,(0,r.Z)({},b.Z.deletingGroupsRemovesRoles,{values:{b:function(e){return s().createElement("b",null,e)},count:x.length}}))):T?s().createElement(f.Z0,null):s().createElement(g.Text,null,s().createElement(d.Z,(0,r.Z)({},b.Z.deletingGroupRemovesRoles,{values:{b:function(e){return s().createElement("b",null,e)},name:w.name}}))))," ",s().createElement(g.Checkbox,{isChecked:N,onChange:function(){return O(!N)},label:Z.formatMessage(b.Z.understandActionIrreversible),id:"delete-group-check"}))};E.propTypes={postMethod:o().func,pagination:o().shape({limit:o().number.isRequired}).isRequired,filters:o().object.isRequired,cancelRoute:o().oneOfType([o().string,o().shape({pathname:o().string.isRequired,search:o().string,hash:o().string})]),submitRoute:o().oneOfType([o().string,o().shape({pathname:o().string.isRequired,search:o().string,hash:o().string})])};const Z=E},44012:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(70655),a=n(92950),l=n(86896),s=n(680);function i(e){var t=(0,l.Z)(),n=t.formatMessage,r=t.textComponent,s=void 0===r?a.Fragment:r,i=e.id,o=e.description,u=e.defaultMessage,c=e.values,d=e.children,m=e.tagName,g=void 0===m?s:m,h=n({id:i,description:o,defaultMessage:u},c,{ignoreTag:e.ignoreTag});return"function"==typeof d?d(Array.isArray(h)?h:[h]):g?a.createElement(g,null,a.Children.toArray(h)):a.createElement(a.Fragment,null,h)}i.displayName="FormattedMessage";var o=a.memo(i,(function(e,t){var n=e.values,a=(0,r.__rest)(e,["values"]),l=t.values,i=(0,r.__rest)(t,["values"]);return(0,s.wU)(l,n)&&(0,s.wU)(a,i)}));o.displayName="MemoizedFormattedMessage";const u=o}}]);
//# sourceMappingURL=../sourcemaps/885.43b534b5057bab1220b66ecc96ac4aa2.js.map
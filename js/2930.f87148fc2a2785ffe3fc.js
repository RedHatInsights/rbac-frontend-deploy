(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[2930],{32930:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AddRoleWizardContext:()=>ve,default:()=>Ce,mapperExtension:()=>xe});var r=n(319),o=n.n(r),a=n(59713),i=n.n(a),c=n(63038),s=n.n(c),l=n(6479),u=n.n(l),m=n(67154),p=n.n(m),d=n(80150),f=n.n(d),y=n(45697),h=n.n(y),b=n(70983),v=n(71355),E=n(98917),g=n(81554),x=n(86106),w=n(77583),C=n(24154),O=n(74124),P=n(52643),k=n(2372),R=n(68340),_=n(68774),S=n(60485),j=n(87757),D=n.n(j),Z=n(48926),N=n.n(Z),q=n(45139),F=n(39379),z=n(58860),T=function(){var e=N()(D().mark((function e(t){var n,r;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,(0,q.vd)({limit:10,offset:0,name:t,nameMatch:"exact"}).catch((function(e){console.error(e)}));case 4:if(!((null==(r=e.sent)||null===(n=r.data)||void 0===n?void 0:n.length)>0)){e.next=7;break}throw"Name has already been taken";case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=(0,F.Z)(T),L=function(e){var t=e.name,n=(0,z.Z)();return(0,d.useEffect)((function(){return setTimeout((function(){return n.change(t,"1")})),function(){return n.change(t,"")}}),[]),null},M=(n(50486),n(95817));function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t,n=e.formFields,r=(0,d.useContext)(ve),o=r.submitting,a=r.error,i=r.setWizardError,c=(0,z.Z)().getState;return(0,d.useEffect)((function(){i(void 0),T(c().values["role-name"]).then((function(){return i(!1)})).catch((function(){return i(!0)}))}),[]),void 0===a||o?f().createElement(P.b,null,f().createElement(k.$,{size:"xl"})):!0===a?f().createElement(M.Z,{context:ve,title:"Role name already taken",text:"Please return to Step 1: Create role and choose a unique role name for your custom role."}):f().createElement("div",{className:"rbac"},f().createElement(S.D,{headingLevel:"h1",size:"xl",className:"ins-c-rbac__gutter-sm"},"Review details"),f().createElement(_.D,{className:"ins-c-rbac__gutter-md"},f().createElement(R.x,null,"Review and confirm the details for your role, or click Back to revise.")),[[W({},null==n||null===(t=n[0])||void 0===t?void 0:t[0])]])};B.propTypes={formFields:h().array};const Y=B;var Q=n(73952),U=n(89531),H=n(2485),V=n(47173),K=n(9947),G=n(38424),X=n(75106),$=n(35293),J=n(68778),ee=n(47194);const te=function(){var e=(0,d.useContext)(ve).setHideForm;return f().createElement(K.u,{variant:K.I.large},f().createElement(G.k,{color:"green",icon:J.ZP}),f().createElement(S.D,{headingLevel:"h4",size:"lg"},"You have successfully created a new role"),f().createElement(X.B,null),f().createElement(V.zx,{component:function(e){return f().createElement(ee.Link,p()({to:"/roles"},e))},variant:"primary"},"Exit"),f().createElement($.i,null,f().createElement(V.zx,{onClick:function(){e(!1)},variant:"link"},"Create another role"),f().createElement(V.zx,{component:function(e){return f().createElement(ee.Link,p()({to:"/groups"},e))},variant:"link"},"Add role to group")))};var ne=n(92504),re=n(35540),oe=n(5755),ae=n(12830),ie=n(8785),ce=["",{title:"Name",key:"display_name",transforms:[n(12460).sortable]},"Description"],se=function(e){var t=e.roleReducer,n=t.rolesForWizard,r=t.isLoading;return{roles:n.data,pagination:n.meta,isLoading:r}};var le=n(57286),ue=n(49739),me=n(83826),pe=n(50693),de=n(16475),fe=function(e,t){return f().createElement("div",{className:"ins-c-rbac__sticky"},f().createElement(pe.r,{className:"ins-c-rbac__sticky--title"},e.map((function(t){return f().createElement(de.P,{span:12/e.length,key:t},t)}))),f().createElement(pe.r,{className:"ins-c-rbac__sticky--data"},t.map((function(t){return t.cells.map((function(t){return f().createElement(de.P,{span:12/e.length,key:t},t)}))}))))};var ye=n(70297);function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(12236);var ve=(0,d.createContext)({success:!1,submitting:!1,error:void 0}),Ee=function(e){return f().createElement(g.ZP,p()({},e,{showFormControls:!1}))},ge=function(e){var t=e.Content,n=u()(e,["Content"]);return f().createElement(t,n)};ge.propTypes={Content:h().elementType.isRequired};var xe={"base-role-table":function(e){var t=(0,b.useDispatch)(),n=function(e){return t((0,U.hs)(e))},r=(0,d.useState)(""),o=s()(r,2),a=o[0],i=o[1],c=(0,b.useSelector)(se,b.shallowEqual),l=c.roles,u=c.pagination,m=(0,ie.Z)(e).input,p=(0,z.Z)();return(0,d.useEffect)((function(){n({limit:50,offset:0,itemCount:0,orderBy:"display_name"})}),[]),f().createElement("div",null,f().createElement(re.b,{variant:"info",isInline:!0,title:"Only granular permissions will be copied into a custom role         (for example, approval:requests:read). Wildcard permissions will not         be copied into a custom role (for example, approval:*:read).\n        "}),f().createElement(oe.M,{columns:ce,createRows:function(e){return e.map((function(e){return{cells:[{title:f().createElement(ne.Y,{id:"".concat(e.uuid,"-radio"),name:"".concat(e.name,"-radio"),"aria-label":"".concat(e.name,"-radio"),ouiaId:"".concat(e.name,"-radio"),value:e.uuid,isChecked:m.value.uuid===e.uuid,onChange:function(){p.batch((function(){m.onChange(e),p.change("role-copy-name","Copy of ".concat(e.display_name||e.name)),p.change("role-copy-description",e.description),p.change("add-permissions-table",[]),p.change("base-permissions-loaded",!1)}))}}),props:{className:"pf-c-table__check"}},e.display_name||e.name,e.description]}}))},data:l,fetchData:function(e){return n((0,ae.jl)(e))},filterValue:a,setFilterValue:function(e){var t=e.name;return i(t)},isLoading:!1,pagination:u,titlePlural:"roles",titleSingular:"role",filterPlaceholder:"role name",ouiaId:"roles-table",isCompact:!0,tableId:"base-role"}))},"add-permissions-table":le.Z,"cost-resources":ye.Z,review:function(){var e=(0,z.Z)().getState().values,t=e["role-name"],n=e["role-description"],r=e["role-copy-name"],o=e["role-copy-description"],a=e["add-permissions-table"],i=e["resource-definitions"],c=e["has-cost-resources"],s=e["role-type"],l=a.map((function(e){return{cells:e.uuid.split(":")}})),u=(i||[]).map((function(e){return{cells:[e.permission,e.resources.join(", ")]}}));return f().createElement(f().Fragment,null,f().createElement(ue.K,null,f().createElement(me.v,{className:"ins-c-rbac__summary"},f().createElement(pe.r,null,f().createElement(de.P,{sm:12,md:2},f().createElement(R.x,{component:R.q.h4,className:"ins-c-rbac__bold-text"},"Name")),f().createElement(de.P,{sm:12,md:10},f().createElement(R.x,{component:R.q.p},"create"===s?t:r))),f().createElement(pe.r,null,f().createElement(de.P,{sm:12,md:2},f().createElement(R.x,{component:R.q.h4,className:"ins-c-rbac__bold-text"},"Description")),f().createElement(de.P,{sm:12,md:10},f().createElement(R.x,{component:R.q.p},"create"===s?n:o))),f().createElement(pe.r,null,f().createElement(de.P,{sm:12,md:2},f().createElement(R.x,{component:R.q.h4,className:"ins-c-rbac__bold-text"},"Permissions")),f().createElement(de.P,{sm:12,md:10},fe(["Application","Resource type","Operation"],l))),c&&f().createElement(pe.r,null,f().createElement(de.P,{sm:12,md:2},f().createElement(R.x,{component:R.q.h4,className:"ins-c-rbac__bold-text"},"Resource definitions")),f().createElement(de.P,{sm:12,md:10},fe(["Permission","Resource definitions"],u))))))},description:ge,"type-selector":function(e){var t=(0,ie.Z)(e).input,n=(0,z.Z)(),r=(0,d.useState)(n.getState().values["role-type"]),o=s()(r,2),a=o[0],i=o[1],c=function(e){i(e),t.onChange(e),n.change("add-permissions-table",[]),n.change("base-permissions-loaded",!1)};return f().createElement("div",null,f().createElement(ne.Y,{isChecked:"create"===a,className:"pf-u-mb-sm",name:"role-type-create",onChange:function(){return c("create")},label:"Create a role from scratch",id:"role-type-create",value:"create"}),f().createElement(ne.Y,{isChecked:"copy"===a,name:"role-type-copy",onChange:function(){return c("copy")},label:"Copy an existing role",id:"role-type-copy",value:"copy"}))}},we=function(e){var t=e.history.push,n=(0,b.useDispatch)(),r=(0,d.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),a=s()(r,2),i=a[0],c=a[1],l=(0,d.useState)(!1),u=s()(l,2),m=u[0],y=u[1],h=(0,d.useRef)(document.createElement("div")),g=(0,d.useState)({}),P=s()(g,2),k=P[0],R=P[1];(0,d.useEffect)((function(){R(function(e){return{fields:[{component:"wizard",name:"wizard",isDynamic:!0,inModal:!0,showTitles:!0,crossroads:["role-type"],title:"Create role",container:e,fields:[{title:"Create role",name:"step-1",nextStep:{when:"role-type",stepMapper:{copy:"name-and-description",create:"add-permissions"}},fields:[{component:"type-selector",name:"role-type",isRequired:!0,validate:[{type:C.Z.REQUIRED}]},{component:"text-field",name:"role-name",type:"text",label:"Role name",isRequired:!0,condition:{when:"role-type",is:"create"},validate:[I,{type:C.Z.REQUIRED},{type:C.Z.MAX_LENGTH,threshold:150}]},{component:"text-field",name:"role-description",type:"text",label:"Role description",condition:{when:"role-type",is:"create"},validate:[{type:"max-length",threshold:150}]},{component:"base-role-table",name:"copy-base-role",label:"Base role",isRequired:!0,condition:{when:"role-type",is:"copy"},validate:[{type:C.Z.REQUIRED}]},{condition:{when:"role-type",is:"create"},component:"description",name:"fixasyncvalidation",Content:L},{condition:{when:"role-type",is:"copy"},component:"description",name:"fixasyncvalidation2",Content:L}]},{title:"Name and description",name:"name-and-description",nextStep:"add-permissions",fields:[{component:"text-field",name:"role-copy-name",type:"text",label:"Role name",isRequired:!0,validate:[I,{type:C.Z.REQUIRED},{type:"max-length",threshold:150}]},{component:"text-field",name:"role-copy-description",type:"text",label:"Role description",validate:[{type:"max-length",threshold:150}]}]},{name:"add-permissions",title:"Add permissions",StepTemplate:O.Z,nextStep:function(e){var t=e.values;return t&&t["add-permissions-table"]&&t["add-permissions-table"].some((function(e){return e.uuid.split(":")[0].includes("cost-management")}))?"cost-resources-definition":"review"},fields:[{component:"add-permissions-table",name:"add-permissions-table"}]},{name:"cost-resources-definition",title:"Define Cost Management resources",nextStep:"review",fields:[{component:"plain-text",name:"text-description",label:f().createElement("p",null,"Specify where you would like to apply each cost permission selected in the previous step, using the dropdown below.")},{component:"cost-resources",name:"cost-resources",validate:[function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).every((function(e){return e.resources.length>0}))?void 0:"You need to assign at least one resource to each permission."}]}]},{name:"review",title:"Review details",buttons:function(e){return f().createElement(Q.Z,p()({},e,{context:ve}))},StepTemplate:Y,fields:[{component:"review",name:"review"}]}]}]}}(h.current))}),[]),(0,d.useEffect)((function(){h.current.hidden=m}),[m]);var _=function(){i.success||n((0,v.wN)({variant:"warning",title:"Creating role was canceled by the user",dismissDelay:8e3,dismissable:!1})),t("/roles")};return f().createElement(ve.Provider,{value:be(be({},i),{},{setWizardError:function(e){return c((function(t){return be(be({},t),{},{error:e})}))},setWizardSuccess:function(e){return c((function(t){return be(be({},t),{},{success:e})}))},setHideForm:function(e){return c((function(t){return be(be({},t),{},{hideForm:e})}))}})},f().createElement(H.R,{type:"role",isOpen:m,onModalCancel:function(){return y(!1)},onConfirmCancel:_}),i.hideForm?f().createElement(w.e,{title:"Create role",isOpen:!0,onClose:function(){return t("/roles")},steps:[{name:"success",component:f().createElement(te,null),isFinishedStep:!0}]}):f().createElement(E.Z,{schema:k,container:h,subscription:{values:!0},FormTemplate:Ee,initialValues:{"role-type":"create"},componentMapper:be(be({},x.ZP),xe),onSubmit:function(e){var t=e["role-name"],r=e["role-description"],a=e["role-copy-name"],i=e["role-copy-description"],s=e["add-permissions-table"],l=e["cost-resources"],u=e["role-type"];c((function(e){return be(be({},e),{},{submitting:!0})}));var m={applications:o()(new Set(s.map((function(e){return e.uuid.split(":")[0]})))),description:("create"===u?r:i)||null,name:"create"===u?t:a,access:s.map((function(e){var t=e.uuid;return{permission:t,resourceDefinitions:(null==l?void 0:l.find((function(e){return e.permission===t})))?[{attributeFilter:{key:"cost-management.".concat(t.split(":")[1]),operation:"in",value:null==l?void 0:l.find((function(e){return e.permission===t})).resources}}]:[]}}))};return n((0,U.fA)(m)).then((function(){c((function(e){return be(be({},e),{},{submitting:!1,success:!0,hideForm:!0})})),n((0,U.Kt)())}))},onCancel:function(e){Boolean(e&&e["role-name"]||e["role-description"]||e["copy-base-role"])?y(!0):_()}}))};we.propTypes={history:h().shape({push:h().func.isRequired}).isRequired};const Ce=we}}]);
//# sourceMappingURL=2930.f87148fc2a2785ffe3fc.js.map
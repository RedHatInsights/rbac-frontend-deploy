"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[3546,459],{35224:(e,t,o)=>{o.d(t,{u:()=>f,D:()=>c});var a=o(65353),n=o(28416),l=o(86478),i=o(38296);const r=e=>{var{className:t,children:o,isLeftAligned:r}=e,s=(0,a.__rest)(e,["className","children","isLeftAligned"]);return n.createElement("div",Object.assign({className:(0,i.css)(l.default.tooltipContent,r&&l.default.modifiers.textAlignLeft,t)},s),o)};r.displayName="TooltipContent";const s=e=>{var{className:t}=e,o=(0,a.__rest)(e,["className"]);return n.createElement("div",Object.assign({className:(0,i.css)(l.default.tooltipArrow,t)},o))};s.displayName="TooltipArrow";var d=o(1774);const u={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var c,m=o(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(c||(c={}));let p=1;const f=e=>{var{content:t,position:o="top",trigger:c="mouseenter focus",isVisible:f=!1,isContentLeftAligned:g=!1,enableFlip:b=!0,className:h="",entryDelay:v=300,exitDelay:y=300,appendTo:C=(()=>document.body),zIndex:E=9999,minWidth:Z,maxWidth:k=u.value,distance:R=15,aria:x="describedby",flipBehavior:M=["top","right","bottom","left","top","right","bottom"],id:S="pf-tooltip-"+p++,children:D,animationDuration:L=300,triggerRef:T,"aria-live":B=(T?"polite":"off"),onTooltipHidden:O=(()=>{})}=e,N=(0,a.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const w=c.includes("mouseenter"),A=c.includes("focus"),I=c.includes("click"),_="manual"===c,[P,F]=n.useState(!1),G=n.createRef();n.useEffect((()=>{f?j():W()}),[f]);const j=()=>{F(!0)},W=()=>{F(!1)},V={top:l.default.modifiers.top,bottom:l.default.modifiers.bottom,left:l.default.modifiers.left,right:l.default.modifiers.right,"top-start":l.default.modifiers.topLeft,"top-end":l.default.modifiers.topRight,"bottom-start":l.default.modifiers.bottomLeft,"bottom-end":l.default.modifiers.bottomRight,"left-start":l.default.modifiers.leftTop,"left-end":l.default.modifiers.leftBottom,"right-start":l.default.modifiers.rightTop,"right-end":l.default.modifiers.rightBottom},H=k!==u.value,U=n.createElement("div",Object.assign({"aria-live":B,className:(0,i.css)(l.default.tooltip,h),role:"tooltip",id:S,style:{maxWidth:H?k:null},ref:G},N),n.createElement(s,null),n.createElement(r,{isLeftAligned:g},t));return n.createElement(m.Popper,{trigger:"none"!==x&&P?"describedby"===x&&D&&D.props&&!D.props["aria-describedby"]?n.cloneElement(D,{"aria-describedby":S}):"labelledby"===x&&D.props&&!D.props["aria-labelledby"]?n.cloneElement(D,{"aria-labelledby":S}):D:D,triggerRef:T,popper:U,popperRef:G,minWidth:void 0!==Z?Z:"revert",appendTo:C,isVisible:P,positionModifiers:V,distance:R,placement:o,onMouseEnter:w&&j,onMouseLeave:w&&W,onPopperMouseEnter:w&&j,onPopperMouseLeave:w&&W,onFocus:A&&j,onBlur:A&&W,onDocumentClick:I&&((e,t)=>{P?W():e.target===t&&j()}),onDocumentKeyDown:_?null:e=>{_||e.key===d.yu.Escape&&P&&W()},onTriggerEnter:_?null:e=>{e.key===d.yu.Enter&&(P?W():j())},enableFlip:b,zIndex:E,flipBehavior:M,animationDuration:L,entryDelay:v,exitDelay:y,onHidden:O})};f.displayName="Tooltip"},41435:(e,t,o)=>{o.d(t,{Dl:()=>i,dw:()=>n,e4:()=>r,ir:()=>a});var a,n,l=o(28416);!function(e){e.right="right",e.left="left"}(a||(a={})),function(e){e.up="up",e.down="down"}(n||(n={}));const i=l.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),r=l.createContext({keyHandler:null,sendRef:null})},86478:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a}),o(49854);const a={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},7876:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(85893),n=o(94184),l=o.n(n),i=function(){return i=Object.assign||function(e){for(var t,o=1,a=arguments.length;o<a;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};const r=function(e){var t,o=e.type,n=e.children,r=e.className,s=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(e,["type","children","className"]),d=l()(r,((t={})["ins-l-".concat(o)]=void 0!==o,t));return(0,a.jsxs)("section",i({},s,{className:d,children:[" ",n," "]}))}},84414:(e,t,o)=>{o.d(t,{Z:()=>l});var a=o(62012),n=o(64756);const l=e=>{const t=(0,a.useNavigate)();return(o,a)=>t((0,n.n)(o,e),a)}},34391:(e,t,o)=>{o.d(t,{Z:()=>v});var a=o(28416),n=o.n(a),l=o(25387),i=o(45697),r=o.n(i),s=o(2550),d=o(70214),u=o.n(d),c=o(31055),m=o(94269),p=o(94229),f=o(57043),g=o(23539),b=o(64380);const h=({title:e,text:t,onClose:o,onSubmit:i,isOpen:r,confirmButtonLabel:d,withCheckbox:h})=>{const v=(0,l.YB)(),[y,C]=(0,a.useState)(!1);return n().createElement(p.Modal,{className:"rbac",title:n().createElement("div",null,n().createElement(u(),{className:"ins-m-alert rbac-c__delete-icon"})," ",e),isOpen:r,variant:p.ModalVariant.small,onClose:o,actions:[n().createElement(c.Button,{key:"confirm",ouiaId:"primary-confirm-button",isDisabled:h&&!y,variant:"danger",onClick:i},d),n().createElement(c.Button,{key:"cancel",ouiaId:"secondary-cancel-button",variant:"link",onClick:o},v.formatMessage(s.Z.cancel))]},n().createElement(f.Split,{hasGutter:!0},n().createElement(f.SplitItem,{isFilled:!0},n().createElement(g.Stack,{hasGutter:!0},n().createElement(b.TextContent,null,t)))),h?n().createElement(m.Checkbox,{isChecked:y,onChange:()=>C(!y),label:v.formatMessage(s.Z.confirmCheckMessage),id:"remove-modal-check",className:"pf-v5-u-mt-lg"}):null)};h.propTypes={text:r().any,title:r().string,confirmButtonLabel:r().string,onSubmit:r().func,onClose:r().func,isOpen:r().bool,withCheckbox:r().bool},h.defaultProps={withCheckbox:!1};const v=h},5839:(e,t,o)=>{o.d(t,{Z:()=>m});var a=o(28416),n=o.n(a),l=o(45697),i=o.n(l),r=o(64380),s=o(34391),d=o(25387),u=o(2550);const c=({isOpen:e,onClose:t,onSubmit:o})=>{const a=(0,d.YB)();return n().createElement(s.Z,{text:n().createElement(r.TextContent,null,n().createElement(r.Text,null,n().createElement(d._H,{...u.Z.defaultAccessGroupEditWarning,values:{b:e=>n().createElement("b",null,e)}}))),title:a.formatMessage(u.Z.warning),withCheckbox:!0,isOpen:e,confirmButtonLabel:a.formatMessage(u.Z.continue),onClose:t,onSubmit:o})};c.propTypes={onSubmit:i().func,onClose:i().func,isOpen:i().bool};const m=c},91670:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var a=o(28416),n=o.n(a),l=o(86706),i=o(25387),r=o(45697),s=o.n(r),d=o(62012),u=o(31055),c=o(50247),m=o(55140),p=o(7876),f=o(62410),g=o(74982),b=o(97246),h=o(77044),v=o(5839),y=o(34391);const C=({title:e,text:t,onClose:o,onSubmit:l,isOpen:i,confirmButtonLabel:r,isDefault:s,isChanged:d})=>{const[u,c]=(0,a.useState)(!1);return s&&!d&&u?n().createElement(v.Z,{isOpen:u&&i,onClose:()=>{o(),c(!1)},onSubmit:()=>{l()}}):n().createElement(y.Z,{text:t,title:e,isOpen:i,confirmButtonLabel:r,onClose:()=>{o()},onSubmit:()=>{c(!0),(!s||d)&&l()}})};C.propTypes={text:s().node,title:s().node,confirmButtonLabel:s().string,onSubmit:s().func,onClose:s().func,isOpen:s().bool,isDefault:s().bool,isChanged:s().bool},C.defaultProps={isDefault:!1,isChanged:!1};const E=C;var Z=o(29301),k=o(86601),R=o(64756),x=o(84414),M=o(75614),S=o(2550),D=o(14289);const L=(e,t,o=[])=>t?.reduce(((t,{uuid:l,display_name:i,name:r,description:s,modified:d})=>[...t,{uuid:l,title:i||r,cells:[n().createElement(a.Fragment,{key:`${l}-name`},n().createElement(R.Z,{to:D.Z["group-detail-role-detail"].link.replace(":groupId",e).replace(":roleId",l)},i||r)),s,n().createElement(a.Fragment,{key:`${l}-modified`},n().createElement(f.Z,{date:d,type:(0,Z.mh)(d)}))],selected:Boolean(o&&o.find((e=>e.uuid===l)))}]),[])||[],T=e=>e.toLowerCase().includes("default access")?"dag-add-role-button":"add-role-button",B=(e,t,o)=>{const a=(0,i.YB)(),l=n().createElement(u.Button,{ouiaId:t,variant:"primary",className:"rbac-m-hide-on-sm","aria-label":"Add role",isAriaDisabled:e},a.formatMessage(S.Z.addRole));return e?n().createElement(c.Tooltip,{content:o||a.formatMessage(S.Z.allRolesAdded)},l):l},O=({groupReducer:{selectedGroup:e,systemGroup:t,groups:o}})=>({roles:e.roles,pagination:e.pagination||{...g.he,count:e?.roles&&e.roles.length},groupsPagination:o.pagination||o.meta,groupsFilters:o.filters,isLoading:!e.loaded,isPlatformDefault:e.platform_default,isAdminDefault:e.admin_default,isChanged:!e.system,disableAddRoles:Object.keys(e.addRoles.pagination||{}).length>0?!(e.addRoles.pagination&&e.addRoles.pagination.count>0&&!e.admin_default):!!e.admin_default,systemGroupUuid:t?.uuid,group:e}),N=({onDefaultGroupChanged:e})=>{const t=(0,i.YB)(),o=(0,m.Z)(),r=(0,l.useDispatch)(),s=(0,x.Z)(),{groupId:u}=(0,d.useParams)(),[c,f]=(0,a.useState)(""),[g,v]=(0,a.useState)(""),[y,C]=(0,a.useState)([]),[N,w]=(0,a.useState)([]),[A,I]=(0,a.useState)(!1),[_,P]=(0,a.useState)((()=>null)),[F,G]=(0,a.useState)({}),{userAccessAdministrator:j,orgAdmin:W}=(0,a.useContext)(k.Z),V=(0,a.useRef)(W||j),{roles:H,pagination:U,groupsPagination:z,groupsFilters:Y,isLoading:Q,group:$,isPlatformDefault:q,isAdminDefault:K,isChanged:X,disableAddRoles:J,systemGroupUuid:ee}=(0,l.useSelector)(O),te=(e,t)=>(e.payload.then(t),e),oe=e=>r((0,h.nr)(e,{},{})),ae=e=>r((0,h.yi)(e??u)),ne=()=>r((0,h.WD)({chrome:o})),le=(e,t,o)=>r(te((0,h.W3)(e,t),o)),ie=e=>(t,o)=>r((0,h.nV)(t,e,o)),re=[{title:t.formatMessage(S.Z.name),orderBy:"name"},{title:t.formatMessage(S.Z.description)},{title:t.formatMessage(S.Z.lastModified)}];(0,a.useEffect)((()=>{u!==M.Cn?ie(U)(u):ee&&ie(U)(ee)}),[ee]),(0,a.useEffect)((()=>{H?.length>0&&(u!==M.Cn?oe(u):ee&&oe(ee))}),[H]),(0,a.useEffect)((()=>{V.current=W||j}),[W,j]);const se=(e,t,o)=>n().createElement("p",null,n().createElement(i._H,{...o?S.Z.removeRolesModalText:S.Z.removeRoleModalText,values:{b:e=>n().createElement("b",null,e),name:e,...o?{roles:t}:{role:t}}})),de=u!==M.Cn?u:ee,ue=()=>{q?ne().then((({value:{data:e}})=>{ie({...U,offset:0})(e[0].uuid)})):ie({...U,offset:0})(u)};return n().createElement(n().Fragment,null,n().createElement(E,{text:F.text,title:F.title,isOpen:A,isChanged:X,isDefault:q||K,confirmButtonLabel:F.confirmButtonLabel,onClose:()=>I(!1),onSubmit:()=>{I(!1),_(),C([]),e(q&&!X)}}),n().createElement(p.Z,{type:"content",id:"tab-roles"},n().createElement(b.M,{columns:re,isSelectable:V.current&&!K,rows:L(u,H,y),data:H,filterValue:g,fetchData:e=>{ie(e)(de)},emptyFilters:{name:"",description:""},setFilterValue:({name:e,description:t})=>{void 0!==e&&v(e),void 0!==t&&f(t)},isLoading:Q,pagination:U,checkedRows:y,setCheckedItems:e=>{C((t=>e(t).map((({uuid:e,name:t,label:o})=>({uuid:e,label:o||t})))))},titlePlural:t.formatMessage(S.Z.roles).toLowerCase(),titleSingular:t.formatMessage(S.Z.role),toolbarButtons:()=>[...V.current&&!K?[n().createElement(R.Z,{className:`rbac-m-hide-on-sm rbac-c-button__add-role${J&&"-disabled"}`,to:D.Z["group-add-roles"].link.replace(":groupId",u),key:"add-to-group"},B(J,T(name||""),K&&t.formatMessage(S.Z.defaultGroupNotManually))),{label:t.formatMessage(S.Z.addRole),props:{isDisabled:J,className:"rbac-m-hide-on-md"},onClick:()=>s(D.Z["group-add-roles"].link.replace(":groupId",u))},{label:t.formatMessage(S.Z.remove),props:{isDisabled:!y||!y.length>0,variant:"danger"},onClick:()=>{const e=y.length>1;P((()=>()=>le(de,y.map((e=>e.uuid)),ue))),G({title:t.formatMessage(e?S.Z.removeRolesQuestion:S.Z.removeRoleQuestion),confirmButtonLabel:t.formatMessage(e?S.Z.removeRoles:S.Z.removeRole),text:se(name,e?y.length:H.find((e=>e.uuid===y[0].uuid)).name,e)}),I(!0)}}]:[]],actionResolver:()=>[...V.current&&!K?[{title:t.formatMessage(S.Z.remove),onClick:(e,o,a)=>{P((()=>()=>le(de,[a.uuid],ue))),G({title:t.formatMessage(S.Z.removeRoleQuestion),confirmButtonLabel:t.formatMessage(S.Z.removeRole),text:se(name,a.title,!1)}),I(!0)}}]:[]],ouiaId:"roles-table",emptyProps:{title:t.formatMessage(S.Z.noGroupRoles),description:[t.formatMessage(K?S.Z.contactServiceTeamForRoles:S.Z.addRoleToConfigureAccess),""]},filters:[{key:"name",value:g},{key:"description",value:c}],tableId:"group-roles"})),n().createElement(a.Suspense,null,n().createElement(d.Outlet,{context:{[D.Z["group-roles-edit-group"].path]:{group:$,cancelRoute:D.Z["group-detail-roles"].link.replace(":groupId",u),postMethod:()=>r((0,h.yi)(de))},[D.Z["group-roles-remove-group"].path]:{postMethod:()=>r((0,h.bt)({...z,offset:0,filters:Y,usesMetaInURL:!0,chrome:o})),cancelRoute:D.Z["group-detail-roles"].link.replace(":groupId",u),submitRoute:(0,Z.zk)(D.Z.groups.link,{...z,offset:0},Y),groupsUuid:[$]},[D.Z["group-add-roles"].path]:{afterSubmit:()=>{q||K?ne().then((({value:{data:e}})=>{ie(U)(e[0].uuid),ae(e[0].uuid)})):(ie(U)(u),ae())},fetchUuid:ee,selectedRoles:N,setSelectedRoles:w,closeUrl:D.Z["group-detail"].link.replace(":groupId",q?M.Cn:u),addRolesToGroup:(e,t,o)=>r(te((0,h.Wj)(e,t),o)),groupName:$.name,isDefault:q||K,isChanged:X,onDefaultGroupChanged:e}}})))};N.propTypes={searchFilter:s().string,selectedRoles:s().array,pagination:s().shape({limit:s().number.isRequired,offset:s().number.isRequired,count:s().number}),onDefaultGroupChanged:s().func},N.defaultProps={pagination:g.eX,selectedRoles:[]};const w=N}}]);
//# sourceMappingURL=../sourcemaps/3546.6009963a83d249af3a4ad15fd7a99e8f.js.map
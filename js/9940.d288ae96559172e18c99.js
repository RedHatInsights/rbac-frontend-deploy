(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9940,6710],{41939:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var r=a(44914),o=a.n(r),n=a(16165),l=a(72583),s=a(83873);const i=e=>{var{isOpen:t,onConfirm:a,onClose:i,children:c,confirmButtonLabel:m="Confirm",cancelButtonLabel:u="Cancel",variant:p=n.d.small,titleIconVariant:d="warning",withCheckbox:f=!1,checkboxLabel:g="I understand that this action cannot be undone",confirmButtonVariant:b=l.Ak.primary,ouiaId:h="WarningModal"}=e,y=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]])}return a}(e,["isOpen","onConfirm","onClose","children","confirmButtonLabel","cancelButtonLabel","variant","titleIconVariant","withCheckbox","checkboxLabel","confirmButtonVariant","ouiaId"]);const[v,A]=(0,r.useState)(!1);return o().createElement(n.a,Object.assign({variant:p,isOpen:t,onClose:i,onEscapePress:i,titleIconVariant:d,actions:[o().createElement(l.$n,{ouiaId:`${h}-confirm-button`,key:"confirm",variant:b,onClick:()=>{null==a||a(),A(!1)},isDisabled:f&&!v},m),o().createElement(l.$n,{ouiaId:`${h}-cancel-button`,key:"cancel",variant:l.Ak.link,onClick:i},u)],ouiaId:h},y),c,f?o().createElement(s.S,{isChecked:v,onChange:(e,t)=>A(t),label:g,id:"warning-modal-check",className:"pf-v5-u-mt-lg",ouiaId:`${h}-confirm-checkbox`}):null)}},53926:(e,t,a)=>{"use strict";a.d(t,{Lr:()=>o,cH:()=>s,nU:()=>r,rO:()=>l});var r,o,n=a(44914);!function(e){e.right="right",e.left="left"}(r||(r={})),function(e){e.up="up",e.down="down"}(o||(o={}));const l=n.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),s=n.createContext({keyHandler:null,sendRef:null})},61354:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(95067);const r={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},81539:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(26078);const r={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},66181:(e,t,a)=>{"use strict";a.d(t,{Ot:()=>o});var r=a(20612);const o=()=>({className:r.A.modifiers.nowrap})},405:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var r=a(74848),o=a(46942),n=a.n(o),l=function(){return l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};const s=function(e){var t,a=e.type,o=e.children,s=e.className,i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]])}return a}(e,["type","children","className"]),c=n()(s,((t={})["ins-l-".concat(a)]=void 0!==a,t));return(0,r.jsxs)("section",l({},i,{className:c,children:[" ",o," "]}))}},44419:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var r=a(49634),o=a(58471);const n=e=>{const t=(0,r.useNavigate)();return(a,r)=>t((0,o.o)(a,e),r)}},54774:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var r=a(44914),o=a.n(r),n=a(30133),l=a(5556),s=a.n(l),i=a(46942),c=a.n(i);const m=({row:e,...t})=>{const{status:a}=e,r=a?.props?.["data-is-active"];return o().createElement(n.S,{className:c()("rbac__user-row",{"ins-m-inactive":!r}),row:e,...t})};m.propTypes={row:s().shape({status:s().shape({props:s().shape({"data-is-active":s().bool,data:s().shape({isActive:s().bool})})})})};const u=m},54073:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var r=a(44914),o=a.n(r),n=a(55086),l=a(31971),s=a.n(l);const i=({title:e,icon:t,description:a,actions:r,...l})=>o().createElement(n.EmptyState,{variant:n.EmptyStateVariant.sm,...l},o().createElement(n.EmptyStateHeader,{titleText:o().createElement(o().Fragment,null,e),icon:o().createElement(n.EmptyStateIcon,{icon:t||s()}),headingLevel:"h4"}),o().createElement(n.EmptyStateBody,{className:"pf-v5-u-mb-md"},a.map(((e,t)=>o().createElement(o().Fragment,{key:t},e," ",o().createElement("br",null))))),o().createElement(n.EmptyStateFooter,null,r))},38694:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var r=a(44914),o=a.n(r),n=a(6442),l=a(5556),s=a.n(l),i=a(40335),c=a(74459),m=a(73683),u=a(4290),p=a(1104),d=a(97681),f=a(8549),g=a(47143),b=a(79994),h=a(58510),y=a(55086),v=a(31137),A=a.n(v),C=a(42134),k=a(23995),x=a(54073);const E=({className:e,isCompact:t,borders:a,columns:l,rows:s,toolbarButtons:v,data:E,actionResolver:M,areActionsDisabled:w,routes:S,titlePlural:B,titleSingular:I,pagination:F,paginationProps:O,filterValue:R,isLoading:P,emptyFilters:L,setFilterValue:D,checkedRows:T,isSelectable:_,isRowSelectable:V,fetchData:N,setCheckedItems:j,emptyProps:H,filterPlaceholder:q,rowWrapper:$,filters:U,isFilterable:W,onShowMore:Q,showMoreTitle:G,onFilter:K,onChange:Z,value:X,sortBy:z,onSort:J,isExpandable:Y,onExpand:ee,hideFilterChips:te,hideHeader:ae,noData:re,noDataDescription:oe,ouiaId:ne,tableId:le,containerRef:se,textFilterRef:ie,toolbarChildren:ce})=>{const me=(0,n.A)(),ue=(0,c.useFlag)("platform.rbac.itless");return o().createElement("div",{className:e},S(),!P&&0===s?.length&&0===R?.length&&U.every((({value:e})=>!e))?o().createElement(x.A,{title:me.formatMessage(i.A.configureItems,{items:B}),icon:A(),description:[me.formatMessage(i.A.toConfigureUserAccess),me.formatMessage(i.A.createAtLeastOneItem,{item:I})],actions:v()[0],...H}):(()=>{const e=`${"desc"===z?.direction?"-":""}${l[z?.index]?.key}`;return o().createElement(r.Fragment,null,o().createElement(k.Ay,{isSelectable:_,isRowSelectable:V,checkedRows:T,setCheckedItems:j,isLoading:P||re,data:E,titleSingular:I,filterValue:R,setFilterValue:D,sortBy:e,pagination:F,paginationProps:O,fetchData:N,toolbarButtons:v,filterPlaceholder:q,filters:U,isFilterable:W,onShowMore:Q,showMoreTitle:G,onFilter:K,onChange:Z,value:X,hideFilterChips:te,tableId:le,containerRef:se,textFilterRef:ie,toolbarChildren:ce}),P?o().createElement(g.A,{variant:t?m.a.compact:void 0,rows:F?.limit,columns:l.map((e=>e.title))}):o().createElement(u.X,{canSelectAll:!1,"aria-label":`${B.toLowerCase()} table`,variant:t?m.a.compact:null,borders:a,..._&&s?.length>0&&{onSelect:(e,t,a,{uuid:r,cells:[o],requires:n})=>j((0,C.vH)([{uuid:r,name:o,requires:n,...ue&&{username:E[a]?.username}}],t))},...Y&&{onExpand:ee},rows:s?.length>0?s:[{fullWidth:!0,cells:[{title:o().createElement(x.A,{title:me.formatMessage(i.A.noMatchingItemsFound,{items:B}),description:re&&oe?oe:[me.formatMessage(i.A.filterMatchesNoItems,{items:B}),me.formatMessage(i.A.tryChangingFilters)],actions:re&&oe?void 0:[o().createElement(y.EmptyStateActions,{key:"clear-filters"},o().createElement(b.Button,{variant:"link",ouiaId:"clear-filters-button",onClick:()=>{D(L),N({...F,offset:0,...L||{name:""}})}},me.formatMessage(i.A.clearAllFilters)))]}),props:{colSpan:l.length}}]}],cells:l,...s?.length>0&&{actionResolver:M},className:0==s?.length?"ins-c-table-empty-state":"",areActionsDisabled:w,rowWrapper:$,sortBy:z,ouiaId:ne,onSort:(e,t,a,r)=>J(e,t,a,r)},!ae&&o().createElement(p.A,null),o().createElement(d.B,null)),!F.noBottom&&o().createElement(f.A,null,!P&&o().createElement(h.Pagination,{...(0,k.WM)(F,N,R,z,O),variant:"bottom",dropDirection:"up"})))})())};E.propTypes={...k.Ay.propTypes,sortBy:s().shape({directions:s().string,index:s().number}),className:s().string,rowWrapper:s().any,isCompact:s().bool,isRowSelectable:s().func,borders:s().bool,emptyFilters:s().object,checkedRows:s().array,columns:s().array.isRequired,rows:s().array.isRequired,titlePlural:s().string,routes:s().func,actionResolver:s().func,areActionsDisabled:s().func,pagination:s().shape({noBottom:s().bool,limit:s().number,offset:s().number,count:s().number}),paginationProps:s().shape({toggleTemplate:s().func,isCompact:s().bool}),isExpandable:s().bool,onExpand:s().func,onSort:s().func,containerRef:s().node,noData:s().bool,hideFilterChips:s().bool,hideHeader:s().bool,noDataDescription:s().arrayOf(s().node),filters:s().array,tableId:s().string.isRequired,toolbarChildren:s().func},E.defaultProps={...k.Ay.defaultProps,emptyFilters:{},isCompact:!1,borders:!0,routes:()=>null,hideFilterChips:!1,checkedRows:[],hideHeader:!1,toolbarChildren:()=>null}},23995:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>y,WM:()=>d});var r=a(44914),o=a.n(r),n=a(45975),l=a(6442),s=a(5556),i=a.n(s),c=a(40335),m=a(2543),u=a(42134),p=a(61361);const d=(e={},t,a="",r="",o)=>({...o,itemCount:e.count,perPage:e.limit,page:(0,p.mq)(e.limit,e.offset),onSetPage:(o,n)=>{t({...e,offset:(0,p.gj)(n,e.limit),name:a,orderBy:r})},perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],onPerPageSelect:(e,o)=>{t({offset:0,limit:o,name:a,orderBy:r})}}),f=(e,t=[],a=()=>{},r=[],o,n=()=>!0)=>{const s=(0,l.A)();return{count:t.length,items:[{title:s.formatMessage(c.A.selectNone),onClick:()=>{a((()=>[]))}},{...!e&&r&&r.length>0?{title:s.formatMessage(c.A.selectPage,{length:r.filter(n).length}),onClick:()=>{a((0,u.vH)(r,!0))}}:{}}],checked:(0,u.A9)(r,t,n),onSelect:t=>{!e&&a((0,u.vH)(r,t))},id:o}},g=(e,t=()=>{},a=()=>{},r="",o={},n="",s,i,p,d,f,g,b,h,y,v,A)=>{const C=(0,l.A)();return{onChange:h,value:y,items:[...p&&p.length>0?p.map((({key:n,label:l,value:s,selected:i,placeholder:h,type:y="text",groups:A,items:k,innerRef:x})=>({label:l||(0,u.tt)(n),type:y??"text",filterValues:{innerRef:x,id:`filter-by-${n}`,key:`filter-by-${n}`,placeholder:h||C.formatMessage(c.A.filterByKey,{key:n}),value:s,selected:i,..."text"!==y?{isFilterable:d,onShowMore:f,showMoreTitle:g,onFilter:b}:{},groups:A,items:k,onChange:(e,l)=>{const s="string"==typeof l||Array.isArray(l)?l:Object.keys((0,m.pickBy)(l[""],(e=>e)));t({...r,...o,offset:0,[n]:s}),(0,u.sq)((()=>a({...o,offset:0,orderBy:v,...p.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),[n]:s}))).then((e=>(x?.current?.focus(),e)))},isDisabled:e}}))):[{label:(0,u.tt)(s||n),type:"text",filterValues:{innerRef:A,id:"filter-by-string",key:"filter-by-string",placeholder:C.formatMessage(c.A.filterByKey,{key:s||n}),value:r,onChange:(e,r)=>{t({...o,offset:0,name:r}),(0,u.sq)((()=>a({...o,offset:0,name:r,orderBy:v}))).then((e=>(A?.current?.focus(),e)))},isDisabled:e}}],...i||[]]}},b=(e="",t,a={},r=()=>{},o=()=>{},n)=>({filters:t&&t.length>0?t.map((({key:e,value:t})=>t&&0!==t.length&&{category:(0,u.tt)(e),type:e,chips:Array.isArray(t)?t.map((e=>({name:e}))):[{name:t}]})).filter(Boolean):[{name:e}],onDelete:(e,[l],s)=>{const i=(e,t,a)=>s?"group"===t||"checkbox"===t?[]:"":a!==l.type?e:"checkbox"===t||"group"===t?e.filter((e=>e!==l.chips[0]?.name)):Array.isArray(e)?[]:"",c=t.reduce(((e,{key:t,value:a,type:r})=>({...e,[t]:i(a,r,t)})),{});r({...a,offset:0,name:"",...c}),o({...a,offset:0,orderBy:n,name:"",...c})}}),h=({isSelectable:e,isRowSelectable:t,checkedRows:a,setCheckedItems:r,isLoading:l,data:s,titleSingular:i,filterValue:c,setFilterValue:m,pagination:u,paginationProps:p,fetchData:h,sortBy:y,toolbarButtons:v,filterPlaceholder:A,filterItems:C,filters:k,isFilterable:x,onShowMore:E,showMoreTitle:M,onFilter:w,onChange:S,value:B,hideFilterChips:I,tableId:F,textFilterRef:O,toolbarChildren:R})=>o().createElement(n.A,{...e&&{bulkSelect:f(l,a,r,s,F,t)},filterConfig:g(l,m,h,c,u,i,A,C,k,x,E,M,w,S,B,y,O),actionsConfig:{actions:v()},...!l&&{pagination:d(u,h,c,y,p)},...(c.length>0||k&&k.length>0)&&!I&&{activeFiltersConfig:b(c,k,u,m,h,y)}},R());h.propTypes={isSelectable:i().bool,isRowSelectable:i().func,checkedRows:i().array,setCheckedItems:i().func,isLoading:i().bool,data:i().array,titleSingular:i().string,filterValue:i().oneOfType([i().array,i().string]),setFilterValue:i().func,filters:i().arrayOf(i().shape({value:i().oneOfType([i().string,i().number,i().array]),key:i().string,placeholder:i().string})),isFilterable:i().bool,onShowMore:i().func,showMoreTitle:i().string,onFilter:i().func,onChange:i().func,value:i().any,pagination:i().shape({limit:i().number,offset:i().number,count:i().number}),paginationProps:i().shape({toggleTemplate:i().func,isCompact:i().bool}),sortBy:i().string,filterItems:i().arrayOf(i().object),filterPlaceholder:i().string,isCollapsible:i().bool,fetchData:i().func.isRequired,toolbarButtons:i().func,hideFilterChips:i().bool,tableId:i().string,textFilterRef:i().object,toolbarChildren:i().func},h.defaultProps={isCollapsible:!1,isSelectable:!1,isLoading:!1,data:[],titleSingular:"",filterValue:[],pagination:p.L6,setCheckedItems:()=>{},setFilterValue:()=>{},sortBy:void 0,toolbarButtons:()=>[],filterItems:[],filters:[],isFilterable:!1,hideFilterChips:!1,toolbarChildren:()=>null};const y=h},445:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var r=a(66181),o=a(44914),n=a.n(o),l=a(58065),s=a(6442),i=a(69733),c=a(49634),m=a(79994),u=a(86458),p=a(40748),d=a(71436),f=a(20881),g=a(405),b=a(38694),h=a(41939),y=a(42932),v=a(40335),A=a(99843),C=a(42134),k=a(54774),x=a(40262),E=a(58471),M=a(44419),w=a(49573);const S=({groupReducer:{selectedGroup:e,groups:t}})=>({members:e.members.data,pagination:e.members.meta,groupsPagination:t.pagination||t.meta,groupsFilters:t.filters,group:e,adminDefault:e.admin_default,platformDefault:e.platform_default,isLoading:e.members.isLoading}),B=(e,t,a)=>n().createElement(l.A,{...a?v.A.removeMembersText:v.A.removeMemberText,values:{b:e=>n().createElement("b",null,e),name:e,group:t}}),I=()=>{const e=(0,s.A)(),t=(0,f.A)(),[a,l]=(0,o.useState)(""),[I,F]=(0,o.useState)([]),[O,R]=(0,o.useState)(!1),[P,L]=(0,o.useState)((()=>null)),[D,T]=(0,o.useState)({}),{groupId:_}=(0,c.useParams)(),{members:V,pagination:N,groupsPagination:j,groupsFilters:H,isLoading:q,adminDefault:$,platformDefault:U,group:W}=(0,i.useSelector)(S,i.shallowEqual),{userAccessAdministrator:Q,orgAdmin:G}=(0,o.useContext)(x.A),K=(0,o.useRef)(G||Q),Z=[{title:e.formatMessage(v.A.status),transforms:[r.Ot]},{title:e.formatMessage(v.A.username)},{title:e.formatMessage(v.A.email)},{title:e.formatMessage(v.A.lastName)},{title:e.formatMessage(v.A.firstName)}],X=(0,i.useDispatch)(),z=(e,t=N)=>{X((0,A.sx)(_,e,t))};(0,o.useEffect)((()=>{z()}),[]),(0,o.useEffect)((()=>{K.current=G||Q}),[G,Q]);const J=e=>X((0,A.tv)(_,e)).then((()=>{F([]),z(void 0,{...N,offset:0}),X((0,A.pl)({usesMetaInURL:!0,chrome:t}))})),Y=((0,M.A)(),(V||[]).map((e=>({...e,uuid:e.username})))),ee=((e,t=[])=>{const a=(0,s.A)();return e.reduce(((e,{is_active:r,username:o,email:l,first_name:s,last_name:i})=>[...e,{uuid:o,username:o,cells:[{title:n().createElement(y.Label,{color:r&&"green"},a.formatMessage(r?v.A.active:v.A.inactive)),props:{data:{isActive:r}}},o,l,i,s],selected:t.find((e=>e.uuid===o))}]),[])})(Y,I);return n().createElement(o.Fragment,null,n().createElement(h.A,{title:D.title,confirmButtonLabel:D.confirmButtonLabel,confirmButtonVariant:m.ButtonVariant.danger,isOpen:O,onClose:()=>R(!1),onConfirm:()=>{R(!1),P()}},D.text),n().createElement(g.A,{type:"content",id:"tab-principals"},U||$?n().createElement(u.Card,null,n().createElement(u.CardBody,null,n().createElement(d.Bullseye,null,n().createElement(p.TextContent,null,n().createElement(p.Text,{component:p.TextVariants.h1},e.formatMessage($?v.A.allOrgAdminsAreMembers:v.A.allUsersAreMembers)))))):n().createElement(b.Z,{data:Y,isSelectable:K.current,rows:ee,columns:Z,actionResolver:()=>K.current?[{title:e.formatMessage(v.A.remove),onClick:(t,a,r)=>{L((()=>()=>J([r.username.title]))),T({title:e.formatMessage(v.A.removeMemberQuestion),text:B(r.username.title,W.name,!1),confirmButtonLabel:e.formatMessage(v.A.removeMember)}),R(!0)}}]:null,filterPlaceholder:e.formatMessage(v.A.username).toLowerCase(),titlePlural:e.formatMessage(v.A.members).toLowerCase(),titleSingular:e.formatMessage(v.A.member),ouiaId:"members-table",pagination:N,filterValue:a,fetchData:({limit:e,offset:t,name:a})=>z(a,{limit:e,offset:t}),setFilterValue:({name:e})=>l(e),checkedRows:I,isLoading:q,rowWrapper:k.A,setCheckedItems:e=>{F((t=>e(t)))},toolbarButtons:()=>[...K.current?[n().createElement(E.A,{to:w.A["group-add-members"].link.replace(":groupId",_),key:"remove-from-group",className:"rbac-m-hide-on-sm"},n().createElement(m.Button,{variant:"primary","aria-label":"Add member"},e.formatMessage(v.A.addMember))),{label:e.formatMessage(v.A.addMember),props:{className:"rbac-m-hide-on-md"},onClick:()=>{}},{label:e.formatMessage(v.A.remove),props:{isDisabled:!I||!I.length>0,variant:"danger"},onClick:()=>{const t=I.length>1,a=e.formatMessage(t?v.A.removeMembersQuestion:v.A.removeMemberQuestion);L((()=>()=>J(I.map((e=>e.uuid))))),T({title:a,confirmButtonLabel:a,text:B(t?I.length:I[0].uuid,W.name,t)}),R(!0)}}]:[]],emptyProps:{title:e.formatMessage(v.A.noGroupMembers),description:[e.formatMessage(v.A.addUserToConfigure),""]},tableId:"group-members"})),n().createElement(o.Suspense,null,n().createElement(c.Outlet,{context:{[w.A["group-members-edit-group"].path]:{group:W,cancelRoute:w.A["group-detail-members"].link.replace(":groupId",_),postMethod:()=>X((0,A.Ui)(W.uuid))},[w.A["group-members-remove-group"].path]:{postMethod:()=>X((0,A.pl)({...j,offset:0,filters:H,usesMetaInURL:!0,chrome:t})),cancelRoute:w.A["group-detail-members"].link.replace(":groupId",_),submitRoute:(0,C.Fm)(w.A.groups.link,{...j,offset:0},H),groupsUuid:[W]},[w.A["group-add-members"].path]:{fetchData:z,cancelRoute:w.A["group-detail-members"].link.replace(":groupId",_)}}})))}},95067:()=>{},26078:()=>{},2580:()=>{}}]);
//# sourceMappingURL=../sourcemaps/9940.b7d25162ed55524522b386ebbc9a04c7.js.map
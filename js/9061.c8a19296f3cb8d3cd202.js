"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[9061],{23340:(e,t,a)=>{a.d(t,{MS:()=>n,aX:()=>s,qF:()=>r});const s=(e,t,a,s={})=>{const r=new URLSearchParams(e.search);let n=a.reduce(((e,t)=>{const a=r.getAll(t);return{...e,[t]:a.length>1?a:a[0]}}),{});return Object.keys(s).forEach((e=>{const t=s[e];n={...n,[e]:Array.isArray(n[e])?[...new Set([...n[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||n[e]},Array.isArray(t)?t.forEach((t=>r.getAll(e).includes(t)||r.append(e,t))):r.get(e)||t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0}),n},r=(e,t)=>{const a=new URLSearchParams(e.search);return t.some((e=>a.get(e)))},n=(e,t,a)=>{const s=new URLSearchParams(e.search);Object.keys(a).forEach((e=>s.delete(e))),Object.keys(a).forEach((e=>{const t=a[e];Array.isArray(t)?t.forEach((t=>t&&s.append(e,t))):t&&s.set(e,t)})),t({pathname:e.pathname,search:s.toString()},{replace:!0})}},12:(e,t,a)=>{a.d(t,{Z:()=>y});var s=a(66029),r=a.n(s),n=a(25387),i=a(45697),o=a.n(i),l=a(64380),c=a(44282),m=a.n(c),u=a(86601),d=a(2550),f=a(55140),g=a(79083);const p=({linkDescription:e,linkTitle:t})=>{const a=(0,n.YB)(),i=(0,f.Z)(),o=i.getEnvironment(),c=i.isProd()?"":`${o}.`,{orgAdmin:p}=(0,s.useContext)(u.Z);return!(0,g.useFlag)("platform.rbac.itless")&&p?r().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(d.Z.usersDescription)} `,e,r().createElement(l.Text,{component:l.TextVariants.a,href:`https://www.${c}redhat.com/wapps/ugc/protected/usermgt/userList.html`,target:"_blank",rel:"noopener noreferrer"},t,r().createElement(m(),null)),"."):r().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${a.formatMessage(d.Z.usersDescription)} `)};p.propTypes={linkDescription:o().node,linkTitle:o().node},p.defaultProps={linkDescription:"",linkTitle:" user management list "};const y=p},24869:(e,t,a)=>{a.d(t,{Z:()=>u});var s=a(66029),r=a.n(s),n=a(55573),i=a(45697),o=a.n(i),l=a(94184),c=a.n(l);const m=({row:e,...t})=>{const{status:a}=e,s=a?.props?.["data-is-active"];return r().createElement(n.e,{className:c()("rbac__user-row",{"ins-m-inactive":!s}),row:e,...t})};m.propTypes={row:o().shape({status:o().shape({props:o().shape({"data-is-active":o().bool,data:o().shape({isActive:o().bool})})})})};const u=m},68397:(e,t,a)=>{a.d(t,{Z:()=>X});var s=a(66029),r=a.n(s),n=a(86706),i=a(39138),o=a.n(i),l=a(25387),c=a(45697),m=a.n(c),u=a(62012),d=a(97246),f=a(64756),g=a(60063),p=a(31055),y=a(81599),h=a(78173),v=a(94229),k=a(79222),Z=a(94269),b=a(23539),E=a(85044),M=a(79332),S=a(85998),w=a(46818),I=a(7732),U=a(91693),_=a.n(U),L=a(77029),C=a.n(L),A=a(29301),O=a(24869),D=a(74982),x=a(23340),B=a(2550),T=a(86601),R=a(78596),j=a(11549),N=a(14289),F=a(55140);const P=({isOrgAdmin:e})=>{const t=(0,l.YB)();return e?r().createElement(s.Fragment,null,r().createElement(_(),{key:"yes-icon",className:"pf-u-mr-sm"}),r().createElement("span",{key:"yes"},t.formatMessage(B.Z.yes))):r().createElement(s.Fragment,null,r().createElement(C(),{key:"no-icon",className:"pf-u-mr-sm"}),r().createElement("span",{key:"no"},t.formatMessage(B.Z.no)))};P.propTypes={isOrgAdmin:m().bool};const $=({isOrgAdmin:e,userId:t,isDisabled:a,toggleUserIsOrgAdminStatus:n})=>{const[i,o]=(0,s.useState)(!1),c=(0,l.YB)(),m=[r().createElement(E.h,{key:`is-admin-dropdown-item-${t}`,componentID:"yes"},c.formatMessage(B.Z.yes)),r().createElement(E.h,{key:`is-not-admin-dropdown-item-${t}`,componentID:"no"},c.formatMessage(B.Z.no))];return r().createElement(M.L,{id:`is-admin-dropdown-${t}`,key:`is-admin-dropdown-${t}`,onSelect:e=>{n({yes:!0,no:!1}[e?.target?.id],null,{userId:t}),o(!1)},toggle:r().createElement(S.Z,{id:`is-admin-dropdown-toggle-${t}`,key:`is-admin-dropdown-toggle-${t}`,isDisabled:a,onToggle:e=>{o(e)}},e?c.formatMessage(B.Z.yes):c.formatMessage(B.Z.no)),isOpen:i,dropdownItems:m})};$.propTypes={isOrgAdmin:m().bool,userId:m().string,isDisabled:m().bool,toggleUserIsOrgAdminStatus:m().func};const V=({selectedUsers:e,setSelectedUsers:t,userLinks:a,usesMetaInURL:i,displayNarrow:c,props:m})=>{const U=(0,l.YB)(),_=(0,u.useNavigate)(),L=(0,u.useLocation)(),C=(0,n.useDispatch)(),[V,X]=(0,s.useState)([]),[Y,G]=(0,s.useState)(!1),[H,q]=(0,s.useState)(!1),[K,W]=(0,s.useState)(!1),{orgAdmin:z}=(0,s.useContext)(T.Z),J=(0,R.Z)(),Q=(0,s.useRef)(null),ee=z,te=(0,F.Z)(),[ae,se]=(0,s.useState)({}),[re,ne]=(0,s.useState)("");let ie=(0,n.useSelector)((({userReducer:{users:e}})=>({limit:(i?e.pagination.limit:e.meta.limit)??(z?D.HE:D.he).limit,offset:(i?e.pagination.offset:e.meta.offset)??(z?D.HE:D.he).offset,count:i?e.pagination.count:e.meta.count,redirected:i&&e.pagination.redirected})));const{users:oe,isLoading:le,stateFilters:ce}=(0,n.useSelector)((({userReducer:{users:{data:e,filters:t={}},isUserDataLoading:a}})=>({users:e?.map?.((e=>({...e,uuid:e.external_source_id}))),isLoading:a,stateFilters:L.search.length>0||Object.keys(t).length>0?t:{status:["Active"]}}))),me=(0,s.useCallback)((e=>C((0,g.uh)(e))),[C]),ue=(e,a,s={})=>{const{limit:r,offset:n}=(0,D.rj)(L,_,ie),o=i?(0,x.aX)(L,_,["username","email","status"],ve):{status:ve.status},l={id:s.userId,is_org_admin:e};C((0,g.hO)(l)).then((()=>{ke(o),t?t([]):X([]),me({...(0,A.jl)({limit:r,offset:n,filters:o}),usesMetaInURL:i})})).catch((e=>{console.error(e)}))},de=(e,a,s=[])=>{const{limit:r,offset:n}=(0,D.rj)(L,_,ie),o=i?(0,x.aX)(L,_,["username","email","status"],ve):{status:ve.status},l=s.map((t=>({id:t?.uuid||t?.external_source_id,is_active:e})));C((0,g.eD)(l)).then((()=>{ke(o),t?t([]):X([]),me({...(0,A.jl)({limit:r,offset:n,filters:o}),usesMetaInURL:i})})).catch((e=>{console.error(e)}))};(0,s.useEffect)((()=>{te.auth.getUser().then((e=>se(e))),te.auth.getToken().then((e=>ne(e)))}),[]);const fe=e=>e!=ae?.identity?.internal?.account_id,ge=(0,s.useCallback)((e=>C((0,g.an)(e))),[C]),pe=[{title:U.formatMessage(c?B.Z.orgAdmin:B.Z.orgAdministrator),key:"org-admin",transforms:[w.P8]},{title:U.formatMessage(B.Z.username),key:"username",transforms:[I.p]},{title:U.formatMessage(B.Z.email)},{title:U.formatMessage(B.Z.firstName),transforms:[w.P8]},{title:U.formatMessage(B.Z.lastName),transforms:[w.P8]},{title:U.formatMessage(B.Z.status),transforms:[w.P8]}],[ye,he]=(0,s.useState)({index:1,direction:"asc"}),[ve,ke]=(0,s.useState)(i?ce:{username:"",email:"",status:[U.formatMessage(B.Z.active)]});return(0,s.useEffect)((()=>{i&&(0,D.oG)(L,_,ie.limit,ie.offset)}),[ie.offset,ie.limit,ie.count,ie.redirected]),(0,s.useEffect)((()=>{const{limit:e,offset:t}=i?(0,D.rj)(L,_,ie):ie,a=i?(0,x.aX)(L,_,["username","email","status"],ve):{status:ve.status};ke(a),me({...(0,A.jl)({limit:e,offset:t,filters:a}),usesMetaInURL:i})}),[]),(0,s.useEffect)((()=>{i&&((0,D.Zc)(L)||(0,D.oG)(L,_,ie.limit,ie.offset),Object.values(ve).some((e=>e?.length>0))&&!(0,x.qF)(L,Object.keys(ve))&&(0,x.aX)(L,_,Object.keys(ve),ve))})),r().createElement(r().Fragment,null,r().createElement(v.Modal,{title:U.formatMessage(B.Z.deactivateUsersConfirmationModalTitle),titleIconVariant:"warning",description:U.formatMessage(B.Z.deactivateUsersConfirmationModalDescription),variant:v.ModalVariant.medium,isOpen:Y,footer:r().createElement(b.Stack,{hasGutter:!0},r().createElement(b.StackItem,null,r().createElement(Z.Checkbox,{label:U.formatMessage(B.Z.deactivateUsersConfirmationModalCheckboxText),isChecked:H,onChange:e=>{q(e)},id:"deactivateUsersConfirmationCheckbox",name:"deactivate-users-confirmation-checkbox"})),r().createElement(b.StackItem,null,r().createElement(p.Button,{key:"confirm-deactivate-users",ouiaId:"danger-confirm-deactivate-users-button",isDisabled:0===V.length||!H,variant:"danger",onClick:()=>{de(!1,0,V),G(!1),q(!1)}},U.formatMessage(B.Z.deactivateUsersConfirmationButton)),r().createElement(p.Button,{id:"deactivate-users-confirmation-cancel",ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:()=>{G(!1)}},U.formatMessage(B.Z.cancel)))),onClose:()=>{G(!1)}},r().createElement(k.List,{isPlain:!0,isBordered:!0},V.map((e=>r().createElement(k.ListItem,{key:e.uuid},e.label))))),r().createElement(d.M,{toolbarChildren:ee&&!c?()=>{const e=[r().createElement(E.h,{key:"activate-users-dropdown-item",componentID:"activate"},U.formatMessage(B.Z.activateUsersButton)),r().createElement(E.h,{key:"deactivate-users-dropdown-item",componentID:"deactivate"},U.formatMessage(B.Z.deactivateUsersButton))];return r().createElement(M.L,{onSelect:async e=>{"deactivate"===e?.target?.id?G(!0):de({activate:!0,deactivate:!1}[e?.target?.id],0,V),W(!1)},toggle:r().createElement(S.Z,{id:"toolbar-dropdown-toggle",isDisabled:0===V.length,onToggle:e=>{W(e)}},U.formatMessage(B.Z.activateUsersButton)),isOpen:K,dropdownItems:e})}:()=>null,toolbarButtons:!ee||c||(0,A.TU)(re)?()=>[]:()=>[r().createElement(f.Z,{to:N.Z["invite-users"].link,key:"invite-users",className:"rbac-m-hide-on-sm"},r().createElement(p.Button,{ouiaId:"invite-users-button",variant:"primary","aria-label":"Invite users"},U.formatMessage(B.Z.inviteUsers))),...(0,j.Z)(J)?[{label:U.formatMessage(B.Z.inviteUsers),onClick:()=>{_((0,f.n)(N.Z["invite-users"].link))}}]:[]],isCompact:!0,isSelectable:!0,borders:!1,columns:pe,rows:((e,t,a=[])=>t?t.reduce(((t,{external_source_id:s,username:n,is_active:i,email:l,first_name:m,last_name:u,is_org_admin:d})=>[...t,{uuid:s,cells:[{title:ee&&!c?r().createElement($,{isOrgAdmin:d,userId:s,isDisabled:!ee||ae?.identity?.internal?.account_id==s,toggleUserIsOrgAdminStatus:ue}):r().createElement(P,{isOrgAdmin:d}),props:{"data-is-active":d}},{title:e?r().createElement(f.Z,{to:N.Z["user-detail"].link.replace(":username",n)},n.toString()):c?r().createElement("span",{title:n},o()(n,{length:25})):n},{title:c?r().createElement("span",{title:l},o()(l,{length:25})):l},m,u,{title:ee&&!c?r().createElement(y.Switch,{key:"status",isDisabled:!ee||ae?.identity?.internal?.account_id==s,label:U.formatMessage(B.Z.active),labelOff:U.formatMessage(B.Z.inactive),isChecked:i,onChange:(e,t)=>{de(e,0,[{external_source_id:s,is_active:i}])}}):r().createElement(h.Label,{key:"status",color:i?"green":"grey"},U.formatMessage(i?B.Z.active:B.Z.inactive)),props:{"data-is-active":i}}],selected:Boolean(a?.find?.((({uuid:e})=>e===s))),disableSelection:c?void 0:!fe(s)}]),[]):[])(a,oe,e||V),sortBy:ye,onSort:(e,t,a)=>{const s=`${"desc"===a?"-":""}${pe[t-1].key}`;he({index:t,direction:a}),me({...ie,filters:ve,usesMetaInURL:i,orderBy:s})},data:oe,ouiaId:"users-table",fetchData:e=>{const t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:ve.status,{username:a,email:s,count:r,limit:n,offset:o,orderBy:l}=e;me({...(0,A.jl)({count:r,limit:n,offset:o,orderBy:l,filters:{username:a,email:s,status:t}}),usesMetaInURL:i}).then((()=>{Q?.current?.focus()})),i&&(0,x.MS)(L,_,{username:a,email:s,status:t})},emptyFilters:{username:"",email:"",status:""},setFilterValue:({username:e,email:t,status:a})=>{var s;s={username:void 0===e?ve.username:e,email:void 0===t?ve.email:t,status:void 0===a||a===ve.status?ve.status:a},i&&ge(s),ke({username:"",...s})},isLoading:le,pagination:ie,checkedRows:e||V,setCheckedItems:e=>{t?t((t=>e(t).filter((e=>c?e:e?.uuid!=ae?.identity?.internal?.account_id)).map((({uuid:e,username:t})=>({uuid:e,label:t||e}))))):X((t=>e(t).filter((e=>c?e:e?.uuid!=ae?.identity?.internal?.account_id)).map((({uuid:e,username:t})=>({uuid:e,label:t||e})))))},rowWrapper:O.Z,titlePlural:U.formatMessage(B.Z.users).toLowerCase(),titleSingular:U.formatMessage(B.Z.user),filters:[{key:"username",value:ve.username,placeholder:U.formatMessage(B.Z.filterByKey,{key:U.formatMessage(B.Z.username).toLowerCase()}),innerRef:Q},{key:"email",value:ve.email,placeholder:U.formatMessage(B.Z.filterByKey,{key:U.formatMessage(B.Z.email).toLowerCase()}),innerRef:Q},{key:"status",value:ve.status,label:U.formatMessage(B.Z.status),type:"checkbox",items:[{label:U.formatMessage(B.Z.active),value:"Active"},{label:U.formatMessage(B.Z.inactive),value:"Inactive"}]}],tableId:"users-list",...m}),r().createElement(s.Suspense,null,r().createElement(u.Outlet,{context:{[N.Z["invite-users"].path]:{fetchData:me}}})))};V.propTypes={displayNarrow:m().bool,users:m().array,searchFilter:m().string,setSelectedUsers:m().func,selectedUsers:m().array,userLinks:m().bool,props:m().object,usesMetaInURL:m().bool},V.defaultProps={displayNarrow:!1,users:[],userLinks:!1,usesMetaInURL:!1};const X=V},39820:(e,t,a)=>{a.d(t,{H:()=>f});var s=a(66029),r=a.n(s),n=a(78173),i=a(91693),o=a.n(i),l=a(77029),c=a.n(l),m=a(2550),u=a(14289),d=a(64756);const f=(e,t=[],a,i=[],l=!1)=>t?.reduce(((t,{username:f,is_active:g,email:p,first_name:y,last_name:h,is_org_admin:v})=>[...t,{uuid:f,cells:[v?r().createElement(s.Fragment,null,r().createElement(o(),{key:"yes-icon",className:"pf-v5-u-mr-sm"}),r().createElement("span",{key:"yes"},a.formatMessage(m.Z.yes))):r().createElement(s.Fragment,null,r().createElement(c(),{key:"no-icon",className:"pf-v5-u-mr-sm"}),r().createElement("span",{key:"no"},a.formatMessage(m.Z.no))),{title:e?r().createElement(d.Z,{to:u.Z["user-detail"].link.replace(":username",f)},f.toString()):f.toString()},p,y,h,{title:r().createElement(n.Label,{key:"status",color:g?"green":"grey"},a.formatMessage(g?m.Z.active:m.Z.inactive)),props:{"data-is-active":g}}],selected:!!l&&Boolean(i?.find?.((({uuid:e})=>e===f)))}]),[])}}]);
//# sourceMappingURL=../sourcemaps/9061.659b24f5abd2e766dd4ffe13bc93725d.js.map
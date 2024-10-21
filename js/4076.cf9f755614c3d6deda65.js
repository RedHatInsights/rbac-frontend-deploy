"use strict";(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4076],{49420:(e,t,s)=>{s.d(t,{D_:()=>a,G:()=>n,JI:()=>r});const a=(e,t,s,a={})=>{const r=new URLSearchParams(e.search);let n=s.reduce(((e,t)=>{const s=r.getAll(t);return{...e,[t]:s.length>1?s:s[0]}}),{});return Object.keys(a).forEach((e=>{const t=a[e];n={...n,[e]:Array.isArray(n[e])?[...new Set([...n[e],...Array.isArray(t)?t:[t]])]:t?.length>0&&t||n[e]},Array.isArray(t)?t.forEach((t=>r.getAll(e).includes(t)||r.append(e,t))):r.get(e)||t&&r.set(e,t)})),t({pathname:e.pathname,search:r.toString()},{replace:!0}),n},r=(e,t)=>{const s=new URLSearchParams(e.search);return t.some((e=>s.get(e)))},n=(e,t,s)=>{const a=new URLSearchParams(e.search);Object.keys(s).forEach((e=>a.delete(e))),Object.keys(s).forEach((e=>{const t=s[e];Array.isArray(t)?t.forEach((t=>t&&a.append(e,t))):t&&a.set(e,t)})),t({pathname:e.pathname,search:a.toString()},{replace:!0})}},82258:(e,t,s)=>{s.d(t,{A:()=>A});var a=s(93345),r=s.n(a),n=s(8604),i=s(5556),o=s.n(i),l=s(40748),c=s(18891),m=s.n(c),u=s(40262),d=s(40335),f=s(20881),g=s(63219);const p=({linkDescription:e,linkTitle:t})=>{const s=(0,n.tz)(),i=(0,f.A)(),o=i.getEnvironment(),c=i.isProd()?"":`${o}.`,{orgAdmin:p}=(0,a.useContext)(u.A);return!(0,g.useFlag)("platform.rbac.itless")&&p?r().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${s.formatMessage(d.A.usersDescription)} `,e,r().createElement(l.Text,{component:l.TextVariants.a,href:`https://www.${c}redhat.com/wapps/ugc/protected/usermgt/userList.html`,target:"_blank",rel:"noopener noreferrer"},t,r().createElement(m(),null)),"."):r().createElement(l.Text,{className:"pf-v5-u-mt-0",component:l.TextVariants.h7},`${s.formatMessage(d.A.usersDescription)} `)};p.propTypes={linkDescription:o().node,linkTitle:o().node},p.defaultProps={linkDescription:"",linkTitle:" user management list "};const A=p},54774:(e,t,s)=>{s.d(t,{A:()=>u});var a=s(93345),r=s.n(a),n=s(30133),i=s(5556),o=s.n(i),l=s(32485),c=s.n(l);const m=({row:e,...t})=>{const{status:s}=e,a=s?.props?.["data-is-active"];return r().createElement(n.S,{className:c()("rbac__user-row",{"ins-m-inactive":!a}),row:e,...t})};m.propTypes={row:o().shape({status:o().shape({props:o().shape({"data-is-active":o().bool,data:o().shape({isActive:o().bool})})})})};const u=m},52464:(e,t,s)=>{s.d(t,{A:()=>z});var a=s(93345),r=s.n(a),n=s(69733),i=s(92516),o=s.n(i),l=s(8604),c=s(5556),m=s.n(c),u=s(49634),d=s(38694),f=s(58471),g=s(44097),p=s(79994),A=s(32690),y=s(42932),v=s(20380),h=s(36966),k=s(25396),b=s(79300),E=s(99780),M=s(81855),w=s(5715),I=s(66181),S=s(73317),_=s(17115),U=s.n(_),C=s(58731),L=s.n(C),O=s(42134),D=s(54774),x=s(61361),T=s(49420),R=s(40335),B=s(40262),N=s(64367),P=s(36984),$=s(49573),F=s(20881);const j=({isOrgAdmin:e})=>{const t=(0,l.tz)();return e?r().createElement(a.Fragment,null,r().createElement(U(),{key:"yes-icon",className:"pf-v5-u-mr-sm"}),r().createElement("span",{key:"yes"},t.formatMessage(R.A.yes))):r().createElement(a.Fragment,null,r().createElement(L(),{key:"no-icon",className:"pf-v5-u-mr-sm"}),r().createElement("span",{key:"no"},t.formatMessage(R.A.no)))};j.propTypes={isOrgAdmin:m().bool};const J=({isOrgAdmin:e,userId:t,isDisabled:s,toggleUserIsOrgAdminStatus:n})=>{const[i,o]=(0,a.useState)(!1),c=(0,l.tz)(),m=[r().createElement(E.t,{key:`is-admin-dropdown-item-${t}`,componentID:"yes"},c.formatMessage(R.A.yes)),r().createElement(E.t,{key:`is-not-admin-dropdown-item-${t}`,componentID:"no"},c.formatMessage(R.A.no))];return r().createElement(M.m,{id:`is-admin-dropdown-${t}`,key:`is-admin-dropdown-${t}`,onSelect:e=>{n({yes:!0,no:!1}[e?.target?.id],null,{userId:t}),o(!1)},toggle:r().createElement(w.C,{id:`is-admin-dropdown-toggle-${t}`,key:`is-admin-dropdown-toggle-${t}`,isDisabled:s,onToggle:e=>{o(e)}},e?c.formatMessage(R.A.yes):c.formatMessage(R.A.no)),isOpen:i,dropdownItems:m})};J.propTypes={isOrgAdmin:m().bool,userId:m().string,isDisabled:m().bool,toggleUserIsOrgAdminStatus:m().func};const V=({selectedUsers:e,setSelectedUsers:t,userLinks:s,usesMetaInURL:i,displayNarrow:c,props:m})=>{const _=(0,l.tz)(),U=(0,u.useNavigate)(),C=(0,u.useLocation)(),L=(0,n.useDispatch)(),[V,z]=(0,a.useState)([]),[Y,G]=(0,a.useState)(!1),[K,q]=(0,a.useState)(!1),[W,X]=(0,a.useState)(!1),{orgAdmin:Z}=(0,a.useContext)(B.A),H=(0,N.A)(),Q=(0,a.useRef)(null),ee=Z,te=(0,F.A)(),[se,ae]=(0,a.useState)({}),[re,ne]=(0,a.useState)("");let ie=(0,n.useSelector)((({userReducer:{users:e}})=>({limit:(i?e.pagination.limit:e.meta.limit)??(Z?x.Ar:x.L6).limit,offset:(i?e.pagination.offset:e.meta.offset)??(Z?x.Ar:x.L6).offset,count:i?e.pagination.count:e.meta.count,redirected:i&&e.pagination.redirected})));const{users:oe,isLoading:le,stateFilters:ce}=(0,n.useSelector)((({userReducer:{users:{data:e,filters:t={}},isUserDataLoading:s}})=>({users:e?.map?.((e=>({...e,uuid:e.external_source_id}))),isLoading:s,stateFilters:C.search.length>0||Object.keys(t).length>0?t:{status:["Active"]}}))),me=(0,a.useCallback)((e=>L((0,g.hU)(e))),[L]),ue=(e,s,a={})=>{const{limit:r,offset:n}=(0,x.sJ)(C,U,ie),o=i?(0,T.D_)(C,U,["username","email","status"],ve):{status:ve.status},l={id:a.userId,is_org_admin:e};L((0,g.An)(l)).then((()=>{he(o),t?t([]):z([]),me({...(0,O.YP)({limit:r,offset:n,filters:o}),usesMetaInURL:i})})).catch((e=>{console.error(e)}))},de=(e,s,a=[])=>{const{limit:r,offset:n}=(0,x.sJ)(C,U,ie),o=i?(0,T.D_)(C,U,["username","email","status"],ve):{status:ve.status},l=a.map((t=>({id:t?.uuid||t?.external_source_id,is_active:e})));L((0,g.CK)(l)).then((()=>{he(o),t?t([]):z([]),me({...(0,O.YP)({limit:r,offset:n,filters:o}),usesMetaInURL:i})})).catch((e=>{console.error(e)}))};(0,a.useEffect)((()=>{te.auth.getUser().then((e=>ae(e))),te.auth.getToken().then((e=>ne(e)))}),[]);const fe=e=>e!=se?.identity?.internal?.account_id,ge=(0,a.useCallback)((e=>L((0,g.$q)(e))),[L]),pe=[{title:_.formatMessage(c?R.A.orgAdmin:R.A.orgAdministrator),key:"org-admin",transforms:[I.Ot]},{title:_.formatMessage(R.A.username),key:"username",transforms:[S.X]},{title:_.formatMessage(R.A.email)},{title:_.formatMessage(R.A.firstName),transforms:[I.Ot]},{title:_.formatMessage(R.A.lastName),transforms:[I.Ot]},{title:_.formatMessage(R.A.status),transforms:[I.Ot]}],[Ae,ye]=(0,a.useState)({index:1,direction:"asc"}),[ve,he]=(0,a.useState)(i?ce:{username:"",email:"",status:[_.formatMessage(R.A.active)]});return(0,a.useEffect)((()=>{i&&(0,x.NJ)(C,U,ie.limit,ie.offset)}),[ie.offset,ie.limit,ie.count,ie.redirected]),(0,a.useEffect)((()=>{const{limit:e,offset:t}=i?(0,x.sJ)(C,U,ie):ie,s=i?(0,T.D_)(C,U,["username","email","status"],ve):{status:ve.status};he(s),me({...(0,O.YP)({limit:e,offset:t,filters:s}),usesMetaInURL:i})}),[]),(0,a.useEffect)((()=>{i&&((0,x.Wq)(C)||(0,x.NJ)(C,U,ie.limit,ie.offset),Object.values(ve).some((e=>e?.length>0))&&!(0,T.JI)(C,Object.keys(ve))&&(0,T.D_)(C,U,Object.keys(ve),ve))})),r().createElement(r().Fragment,null,r().createElement(v.Modal,{title:_.formatMessage(R.A.deactivateUsersConfirmationModalTitle),titleIconVariant:"warning",description:_.formatMessage(R.A.deactivateUsersConfirmationModalDescription),variant:v.ModalVariant.medium,isOpen:Y,footer:r().createElement(b.Stack,{hasGutter:!0},r().createElement(b.StackItem,null,r().createElement(k.Checkbox,{label:_.formatMessage(R.A.deactivateUsersConfirmationModalCheckboxText),isChecked:K,onChange:e=>{q(e)},id:"deactivateUsersConfirmationCheckbox",name:"deactivate-users-confirmation-checkbox"})),r().createElement(b.StackItem,null,r().createElement(p.Button,{key:"confirm-deactivate-users",ouiaId:"danger-confirm-deactivate-users-button",isDisabled:0===V.length||!K,variant:"danger",onClick:()=>{de(!1,0,V),G(!1),q(!1)}},_.formatMessage(R.A.deactivateUsersConfirmationButton)),r().createElement(p.Button,{id:"deactivate-users-confirmation-cancel",ouiaId:"secondary-cancel-button",key:"cancel",variant:"link",onClick:()=>{G(!1)}},_.formatMessage(R.A.cancel)))),onClose:()=>{G(!1)}},r().createElement(h.List,{isPlain:!0,isBordered:!0},V.map((e=>r().createElement(h.ListItem,{key:e.uuid},e.label))))),r().createElement(d.Z,{toolbarChildren:ee&&!c?()=>{const e=[r().createElement(E.t,{key:"activate-users-dropdown-item",componentID:"activate"},_.formatMessage(R.A.activateUsersButton)),r().createElement(E.t,{key:"deactivate-users-dropdown-item",componentID:"deactivate"},_.formatMessage(R.A.deactivateUsersButton))];return r().createElement(M.m,{onSelect:async e=>{"deactivate"===e?.target?.id?G(!0):de({activate:!0,deactivate:!1}[e?.target?.id],0,V),X(!1)},toggle:r().createElement(w.C,{id:"toolbar-dropdown-toggle",isDisabled:0===V.length,onToggle:e=>{X(e)}},_.formatMessage(R.A.activateUsersButton)),isOpen:W,dropdownItems:e})}:()=>null,toolbarButtons:!ee||c||(0,O.l2)(re)?()=>[]:()=>[r().createElement(f.A,{to:$.A["invite-users"].link,key:"invite-users",className:"rbac-m-hide-on-sm"},r().createElement(p.Button,{ouiaId:"invite-users-button",variant:"primary","aria-label":"Invite users"},_.formatMessage(R.A.inviteUsers))),...(0,P.A)(H)?[{label:_.formatMessage(R.A.inviteUsers),onClick:()=>{U((0,f.o)($.A["invite-users"].link))}}]:[]],isCompact:!0,isSelectable:!0,borders:!1,columns:pe,rows:((e,t,s=[])=>t?t.reduce(((t,{external_source_id:a,username:n,is_active:i,email:l,first_name:m,last_name:u,is_org_admin:d})=>[...t,{uuid:a,cells:[{title:ee&&!c?r().createElement(J,{isOrgAdmin:d,userId:a,isDisabled:!ee||se?.identity?.internal?.account_id==a,toggleUserIsOrgAdminStatus:ue}):r().createElement(j,{isOrgAdmin:d}),props:{"data-is-active":d}},{title:e?r().createElement(f.A,{to:$.A["user-detail"].link.replace(":username",n)},n.toString()):c?r().createElement("span",{title:n},o()(n,{length:25})):n},{title:c?r().createElement("span",{title:l},o()(l,{length:25})):l},m,u,{title:ee&&!c?r().createElement(A.Switch,{key:"status",isDisabled:!ee||se?.identity?.internal?.account_id==a,label:_.formatMessage(R.A.active),labelOff:_.formatMessage(R.A.inactive),isChecked:i,onChange:(e,t)=>{de(e,0,[{external_source_id:a,is_active:i}])}}):r().createElement(y.Label,{key:"status",color:i?"green":"grey"},_.formatMessage(i?R.A.active:R.A.inactive)),props:{"data-is-active":i}}],selected:Boolean(s?.find?.((({uuid:e})=>e===a))),disableSelection:c?void 0:!fe(a)}]),[]):[])(s,oe,e||V),sortBy:Ae,onSort:(e,t,s)=>{const a=`${"desc"===s?"-":""}${pe[t-1].key}`;ye({index:t,direction:s}),me({...ie,filters:ve,usesMetaInURL:i,orderBy:a})},data:oe,ouiaId:"users-table",fetchData:e=>{const t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:ve.status,{username:s,email:a,count:r,limit:n,offset:o,orderBy:l}=e;me({...(0,O.YP)({count:r,limit:n,offset:o,orderBy:l,filters:{username:s,email:a,status:t}}),usesMetaInURL:i}).then((()=>{Q?.current?.focus()})),i&&(0,T.G)(C,U,{username:s,email:a,status:t})},emptyFilters:{username:"",email:"",status:""},setFilterValue:({username:e,email:t,status:s})=>{var a;a={username:void 0===e?ve.username:e,email:void 0===t?ve.email:t,status:void 0===s||s===ve.status?ve.status:s},i&&ge(a),he({username:"",...a})},isLoading:le,pagination:ie,checkedRows:e||V,setCheckedItems:e=>{t?t((t=>e(t).filter((e=>c?e:e?.uuid!=se?.identity?.internal?.account_id)).map((({uuid:e,username:t})=>({uuid:e,label:t||e}))))):z((t=>e(t).filter((e=>c?e:e?.uuid!=se?.identity?.internal?.account_id)).map((({uuid:e,username:t})=>({uuid:e,label:t||e})))))},rowWrapper:D.A,titlePlural:_.formatMessage(R.A.users).toLowerCase(),titleSingular:_.formatMessage(R.A.user),filters:[{key:"username",value:ve.username,placeholder:_.formatMessage(R.A.filterByKey,{key:_.formatMessage(R.A.username).toLowerCase()}),innerRef:Q},{key:"email",value:ve.email,placeholder:_.formatMessage(R.A.filterByKey,{key:_.formatMessage(R.A.email).toLowerCase()}),innerRef:Q},{key:"status",value:ve.status,label:_.formatMessage(R.A.status),type:"checkbox",items:[{label:_.formatMessage(R.A.active),value:"Active"},{label:_.formatMessage(R.A.inactive),value:"Inactive"}]}],tableId:"users-list",...m}),r().createElement(a.Suspense,null,r().createElement(u.Outlet,{context:{[$.A["invite-users"].path]:{fetchData:()=>me({...ie,filters:ve,usesMetaInURL:i})}}})))};V.propTypes={displayNarrow:m().bool,users:m().array,searchFilter:m().string,setSelectedUsers:m().func,selectedUsers:m().array,userLinks:m().bool,props:m().object,usesMetaInURL:m().bool},V.defaultProps={displayNarrow:!1,users:[],userLinks:!1,usesMetaInURL:!1};const z=V},22272:(e,t,s)=>{s.d(t,{O:()=>f});var a=s(93345),r=s.n(a),n=s(42932),i=s(17115),o=s.n(i),l=s(58731),c=s.n(l),m=s(40335),u=s(49573),d=s(58471);const f=(e,t=[],s,i=[],l=!1)=>t?.reduce(((t,{username:f,is_active:g,email:p,first_name:A,last_name:y,is_org_admin:v})=>[...t,{uuid:f,cells:[v?r().createElement(a.Fragment,null,r().createElement(o(),{key:"yes-icon",className:"pf-v5-u-mr-sm"}),r().createElement("span",{key:"yes"},s.formatMessage(m.A.yes))):r().createElement(a.Fragment,null,r().createElement(c(),{key:"no-icon",className:"pf-v5-u-mr-sm"}),r().createElement("span",{key:"no"},s.formatMessage(m.A.no))),{title:e?r().createElement(d.A,{to:u.A["user-detail"].link.replace(":username",f)},f.toString()):f.toString()},p,A,y,{title:r().createElement(n.Label,{key:"status",color:g?"green":"grey"},s.formatMessage(g?m.A.active:m.A.inactive)),props:{"data-is-active":g}}],selected:!!l&&Boolean(i?.find?.((({uuid:e})=>e===f)))}]),[])}}]);
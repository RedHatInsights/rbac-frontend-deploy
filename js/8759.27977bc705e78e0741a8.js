(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[8759,459,209],{80947:(e,t,s)=>{"use strict";s.d(t,{l:()=>c});var a=s(65353),r=s(66029),n=s(11924),i=s(38296);const o="--pf-v5-c-form--m-limit-width--MaxWidth",l=e=>{var{children:t=null,className:s="",isHorizontal:l=!1,isWidthLimited:c=!1,maxWidth:u="",innerRef:m}=e,d=(0,a.__rest)(e,["children","className","isHorizontal","isWidthLimited","maxWidth","innerRef"]);return r.createElement("form",Object.assign({noValidate:!0},u&&{style:Object.assign({[o]:u},d.style)},d,{className:(0,i.css)(n.default.form,l&&n.default.modifiers.horizontal,(c||u)&&n.default.modifiers.limitWidth,s),ref:m}),t)},c=r.forwardRef(((e,t)=>r.createElement(l,Object.assign({innerRef:t},e))));c.displayName="Form"},84414:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(62012),r=s(64756);const n=e=>{const t=(0,a.useNavigate)();return(s,a)=>t((0,r.n)(s,e),a)}},87767:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var a=s(47173),r=s(66029),n=s.n(r),i=s(45697),o=s.n(i),l=(s(27361),s(48880));o().oneOfType([o().string,o().func,o().object]),o().func.isRequired,o().node.isRequired,o().bool,o().func.isRequired,o().node.isRequired,o().func.isRequired;const c=({renderNextButton:e,disableBack:t,handlePrev:s,buttonLabels:{cancel:i,back:o},context:c})=>{const u=(0,l.default)(),{success:m,error:d,submitting:p}=(0,r.useContext)(c);return m||void 0===d||d||p?null:n().createElement(r.Fragment,null,e(),n().createElement(a.zx,{type:"button",variant:"secondary",isDisabled:t,onClick:s},o),n().createElement(a.zx,{type:"button",variant:"link",onClick:u.onCancel},i))};c.propTypes={disableBack:o().bool,handlePrev:o().func.isRequired,handleNext:o().func.isRequired,nextStep:o().oneOfType([o().string,o().shape({when:o().string.isRequired,stepMapper:o().object.isRequired}),o().func]),buttonLabels:o().shape({submit:o().node.isRequired,cancel:o().node.isRequired,back:o().node.isRequired,next:o().node.isRequired}).isRequired,context:o().object.isRequired,renderNextButton:o().func};const u=c},56640:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var a=s(66029),r=s.n(a),n=s(47173),i=s(70363),o=s(25387),l=s(45697),c=s.n(l),u=s(2550),m=s(56756);const d=({context:e,title:t,text:s,customFooter:l})=>{const c=(0,o.YB)(),{jumpToStep:d}=(0,a.useContext)(i.default),{setWizardError:p}=(0,a.useContext)(e);return r().createElement(m.Te,{errorTitle:t,errorDescription:s,customFooter:l||r().createElement(n.zx,{onClick:()=>{p(void 0),d(0)},variant:n.Wu.primary},c.formatMessage(u.Z.returnToStepNumber,{number:1}))})};d.propTypes={context:c().object.isRequired,title:c().string.isRequired,text:c().string.isRequired,customFooter:c().element};const p=d},55527:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AddGroupWizardContext:()=>Fe,default:()=>Ge,mapperExtension:()=>qe,onCancel:()=>_e});var a=s(66029),r=s.n(a),n=s(45697),i=s.n(n),o=s(86706),l=s(25387),c=s(46985),u=s(71355),m=s(51912),d=s(67850),p=s(8340),g=s(55218),f=s(64124),v=s(96354),h=s(48880),E=s(52643),b=s(83133),y=s(9947),Z=s(67880),x=s(43049),M=s(65353);s(37739);const C={modifiers:{sm:"pf-m-sm",lg:"pf-m-lg",inside:"pf-m-inside",outside:"pf-m-outside",staticWidth:"pf-m-static-width",singleline:"pf-m-singleline",success:"pf-m-success",warning:"pf-m-warning",danger:"pf-m-danger",truncate:"pf-m-truncate"},progress:"pf-v5-c-progress",progressBar:"pf-v5-c-progress__bar",progressDescription:"pf-v5-c-progress__description",progressHelperText:"pf-v5-c-progress__helper-text",progressIndicator:"pf-v5-c-progress__indicator",progressMeasure:"pf-v5-c-progress__measure",progressStatus:"pf-v5-c-progress__status",progressStatusIcon:"pf-v5-c-progress__status-icon",themeDark:"pf-v5-theme-dark"};var S=s(38296),R=s(35224),k=s(68778),T=s(72781),N=s(69957);const w=e=>{var{progressBarAriaProps:t,className:s="",children:r=null,value:n}=e,i=(0,M.__rest)(e,["progressBarAriaProps","className","children","value"]);return a.createElement("div",Object.assign({},i,{className:(0,S.css)(C.progressBar,s)},t),a.createElement("div",{className:(0,S.css)(C.progressIndicator),style:{width:`${n}%`}},a.createElement("span",{className:(0,S.css)(C.progressMeasure)},r)))};w.displayName="ProgressBar";const B=e=>{var{children:t}=e,s=(0,M.__rest)(e,["children"]);return a.createElement("div",Object.assign({className:C.progressHelperText},s),t)};var L,P;B.displayName="ProgressHelperText",function(e){e.outside="outside",e.inside="inside",e.top="top",e.none="none"}(L||(L={})),function(e){e.danger="danger",e.success="success",e.warning="warning"}(P||(P={}));const F={danger:T.default,success:k.ZP,warning:N.ZP},I=({progressBarAriaProps:e,value:t,title:s="",parentId:r,label:n=null,variant:i=null,measureLocation:o=L.top,isTitleTruncated:l=!1,tooltipPosition:c,helperText:u})=>{const m=F.hasOwnProperty(i)&&F[i],[d,p]=a.useState(""),g=a.createElement("div",{className:(0,S.css)(C.progressDescription,l&&"string"==typeof s&&C.modifiers.truncate),id:`${r}-description`,"aria-hidden":"true",onMouseEnter:l&&"string"==typeof s?e=>{e.target.offsetWidth<e.target.scrollWidth?p(s||e.target.innerHTML):p("")}:null},s);return a.createElement(a.Fragment,null,s&&(d?a.createElement(R.u,{position:c,content:d,isVisible:!0},g):g),(o!==L.none||m)&&a.createElement("div",{className:(0,S.css)(C.progressStatus),"aria-hidden":"true"},(o===L.top||o===L.outside)&&a.createElement("span",{className:(0,S.css)(C.progressMeasure)},n||`${t}%`),m&&a.createElement("span",{className:(0,S.css)(C.progressStatusIcon)},a.createElement(m,null))),a.createElement(w,{role:"progressbar",progressBarAriaProps:e,value:t},o===L.inside&&`${t}%`),u&&a.createElement(B,null,u))};I.displayName="ProgressContainer";var A,q=s(80164);!function(e){e.sm="sm",e.md="md",e.lg="lg"}(A||(A={}));class _ extends a.Component{constructor(){super(...arguments),this.id=this.props.id||(0,q.Ki)()}render(){const e=this.props,{id:t,size:s,className:r,value:n,title:i,label:o,variant:l,measureLocation:c,min:u,max:m,valueText:d,isTitleTruncated:p,tooltipPosition:g,"aria-label":f,"aria-labelledby":v,helperText:h}=e,E=(0,M.__rest)(e,["id","size","className","value","title","label","variant","measureLocation","min","max","valueText","isTitleTruncated","tooltipPosition","aria-label","aria-labelledby","helperText"]),b={"aria-valuemin":u,"aria-valuenow":n,"aria-valuemax":m};(i||v)&&(b["aria-labelledby"]=i?`${this.id}-description`:v),f&&(b["aria-label"]=f),d&&(b["aria-valuetext"]=d),i||v||f||console.warn("One of aria-label or aria-labelledby properties should be passed when using the progress component without a title.");const y=Math.min(100,Math.max(0,Math.floor((n-u)/(m-u)*100)))||0;return a.createElement("div",Object.assign({},E,{className:(0,S.css)(C.progress,C.modifiers[l],["inside","outside"].includes(c)&&C.modifiers[c],"inside"===c?C.modifiers[A.lg]:C.modifiers[s],!i&&C.modifiers.singleline,r),id:this.id}),a.createElement(I,{parentId:this.id,value:y,title:i,label:o,variant:l,measureLocation:c,progressBarAriaProps:b,isTitleTruncated:p,tooltipPosition:g,helperText:h}))}}_.displayName="Progress",_.defaultProps={className:"",measureLocation:L.top,variant:null,id:"",title:"",min:0,max:100,size:null,label:null,value:0,valueText:null,isTitleTruncated:!1,tooltipPosition:"top","aria-label":null,"aria-labelledby":null};var D=s(47173),G=s(38779);const z=(0,s(40400).I)({name:"InProgressIcon",height:1024,width:1024,svgPath:"M513.417211,16.013668 L513.417211,112.013668 C513.406007,120.539653 520.082422,127.576718 528.597211,128.013668 C732.697211,136.513668 896.147211,305.013668 896.147211,511.343668 C896.147211,723.013668 724.007211,895.163668 512.417211,895.163668 C437.186239,895.277345 363.602574,873.135095 300.927211,831.523668 C294.58293,827.2982 286.138663,828.135095 280.747211,833.523668 L211.807211,902.353668 C208.502935,905.676185 206.82123,910.280199 207.20607,914.950237 C207.590911,919.620275 210.00361,923.886884 213.807211,926.623668 C300.709573,989.398037 405.213535,1023.13146 512.417211,1023.01398 C794.537211,1023.01398 1023.91724,793.433668 1023.91724,511.413668 C1024.00721,235.103668 804.007211,9.22366802 529.897211,0.00645736761 C525.571205,-0.116171039 521.377128,1.51204372 518.271915,4.52681369 C515.166702,7.54158367 513.415263,11.6857144 513.417211,16.013668 M97.1272107,212.923668 C64.2190689,258.479443 39.0698895,309.162997 22.6972107,362.923668 C21.2705092,367.756559 22.2039184,372.979173 25.2163356,377.018685 C28.2287528,381.058197 32.9681443,383.442545 38.0072107,383.453683 L139.407211,383.453683 C145.970195,383.46249 151.873012,379.462528 154.297211,373.363668 C164.307669,347.593304 177.068112,322.977652 192.357211,299.943668 C196.579666,293.633658 195.741339,285.216847 190.357211,279.863668 L121.497211,211.013668 C118.186635,207.662531 113.567544,205.940538 108.871166,206.30669 C104.174788,206.672841 99.8783994,209.089927 97.1272107,212.913668 M112.907211,511.433663 L17.0072107,511.433663 C12.679257,511.433663 8.5351263,513.183159 5.52035633,516.288373 C2.50558635,519.393586 0.877371594,523.587662 1.00721065,527.913668 C4.13104542,629.408217 37.6085847,727.635936 97.1172107,809.913668 C99.8539943,813.717268 104.120603,816.129968 108.790642,816.514809 C113.46068,816.899649 118.064693,815.217944 121.387211,811.913668 L190.217211,743.073668 C195.605784,737.682216 196.442679,729.237949 192.217211,722.893668 C153.520825,664.580171 131.611534,596.745437 128.887211,526.813668 C128.553964,518.220138 121.487197,511.427209 112.887211,511.433663",yOffset:0,xOffset:0});var j=s(95359),O=s(84414),W=s(56640),U=s(14289),H=s(2550);const $=({formFields:e})=>{const t=(0,l.YB)(),s=(0,O.Z)(),{submittingGroup:n,submittingServiceAccounts:i,error:o,setWizardError:c}=(0,a.useContext)(Fe),{getState:u}=(0,h.default)();if((0,a.useEffect)((()=>{c(void 0),(0,j.B)(u().values["group-name"]).then((()=>c(!1))).catch((()=>c(!0)))}),[]),void 0===o||n&&!i)return r().createElement(E.b,null,r().createElement(b.$,{className:"pf-v5-u-mt-xl",size:"xl"}));if(i&&!o){const e=n?1:i?2:3;return r().createElement(y.u,{variant:y.I.lg,"data-component-ouia-id":"wizard-progress",className:"rbac-add-group-progress"},r().createElement(Z.t,{titleText:t.formatMessage(H.Z.groupBeingCreated),icon:r().createElement(x.k,{className:"pf-v5-u-mt-xl",icon:z}),headingLevel:"h4"}),r().createElement(_,{className:"pf-v5-u-mt-lg",style:{textAlign:"left"},min:0,max:3,value:e,label:(n?1:2)+" of 2",title:t.formatMessage(n?H.Z.creatingGroup:H.Z.associatingServiceAccounts)}))}return o?r().createElement(W.Z,{context:Fe,title:n?t.formatMessage(H.Z.groupNameTakenTitle):t.formatMessage(H.Z.addGroupServiceAccountsErrorTitle,{count:u().values["service-accounts-list"].length}),text:n?t.formatMessage(H.Z.groupNameTakenText):t.formatMessage(H.Z.addNewGroupServiceAccountsErrorDescription,{count:u().values["service-accounts-list"].length}),customFooter:n?void 0:r().createElement(D.zx,{variant:D.Wu.primary,onClick:()=>s(U.Z.groups.link)},t.formatMessage(H.Z.close))}):r().createElement(r().Fragment,null,r().createElement(G.D,{headingLevel:"h1",size:"xl",className:"pf-v5-u-mb-lg"},t.formatMessage(H.Z.reviewDetails)),[[{...e?.[0]?.[0]}]])};$.propTypes={formFields:i().array};const K=$;var Y=s(87767),X=s(60167),V=s(2034),Q=s(77044),J=s(29301),ee=s(49739),te=s(83826),se=s(87828),ae=s(36621),re=s(2628),ne=s(81169),ie=s(92607),oe=s(45469),le=s(59775);const ce=e=>{const t=(0,l.YB)(),{input:s}=(0,ne.Z)(e),n=(0,h.default)(),{"group-name":i,"group-description":o}=n.getState().values,[c,u]=(0,a.useState)(i||""),[m,d]=(0,a.useState)(),[p,g]=(0,a.useState)(o),f=e=>{const t=(0,J.vE)(e);s.onChange(void 0),(0,j.L)(t).then((()=>{s.onChange(t),d(void 0)})).catch((e=>{d(e),s.onChange(void 0)})),u(e)};(0,a.useEffect)((()=>{c?.length>0&&f(c)}),[]);const v=((e,t)=>void 0===e||t||e?.length>150?"error":"default")(c,m),E=(e=>e?.length>150?"error":"default")(p);return r().createElement(ee.K,{hasGutter:!0},r().createElement(te.v,{className:"rbac-l-stack__item-summary"},r().createElement(le.c,{label:t.formatMessage(H.Z.groupName),isRequired:!0},r().createElement(ie.oi,{value:c,type:"text",validated:v,onBlur:()=>""===c&&u(void 0),onChange:(e,t)=>f(t),"aria-label":"Group name"}),"error"===v&&r().createElement(se.Q,null,r().createElement(ae.p,null,r().createElement(re.u,{variant:v},c?m:t.formatMessage(H.Z.required)))))),r().createElement(te.v,null,r().createElement(le.c,{label:t.formatMessage(H.Z.groupDescription)},r().createElement(oe.Kx,{value:p,validated:E,onChange:(e,t)=>{g(t),n.change("group-description",t)},"aria-label":"Group description",resizeOrientation:"vertical"}),"error"===E&&r().createElement(se.Q,null,r().createElement(ae.p,{variant:E},r().createElement(re.u,null,t.formatMessage(H.Z.maxCharactersWarning,{number:150})))))))};ce.propTypes={name:i().string,description:i().string,groups:i().array};const ue=ce;var me=s(68774),de=s(68340),pe=s(87285);const ge=e=>{const t=(0,l.YB)(),[s,n]=(0,a.useState)([]),{input:i}=(0,ne.Z)(e),o=(0,h.default)();return(0,a.useEffect)((()=>{n(o.getState().values["roles-list"]||[])}),[]),(0,a.useEffect)((()=>{i.onChange(s),o.change("roles-list",s)}),[s]),r().createElement(a.Fragment,null,r().createElement(ee.K,{hasGutter:!0},r().createElement(te.v,null,r().createElement(me.D,null,r().createElement(de.x,null,t.formatMessage(H.Z.selectRolesForGroupText)))),r().createElement(te.v,null,r().createElement(le.c,{fieldId:"select-role"},r().createElement(pe.Z,{selectedRoles:s,setSelectedRoles:n,rolesExcluded:!1})))))};ge.propTypes={selectedRoles:i().array,setSelectedRoles:i().func,title:i().string,description:i().string};const fe=ge;var ve=s(79083),he=s(80947),Ee=s(10113),be=s(68397),ye=s(12);const Ze=e=>{const[t,s]=(0,a.useState)([]),{input:n}=(0,ne.Z)(e),i=(0,l.YB)(),o=(0,h.default)(),c=(0,ve.useFlag)("platform.rbac.itless");(0,a.useEffect)((()=>{s(o.getState().values["users-list"]||[])}),[]),(0,a.useEffect)((()=>{n.onChange(t),o.change("users-list",t)}),[t]);const u={...!c&&{linkDescription:i.formatMessage(H.Z.toManageUsersText)}},m={selectedUsers:t,setSelectedUsers:s,displayNarrow:!0};return r().createElement(a.Fragment,null,r().createElement(he.l,null,r().createElement(ee.K,{hasGutter:!0},r().createElement(te.v,null,r().createElement(me.D,null,r().createElement(ye.Z,{...u}))),r().createElement(te.v,null,r().createElement(le.c,{fieldId:"select-user"},c?r().createElement(be.Z,{...m}):r().createElement(Ee.Z,{...m}))))))};Ze.propTypes={selectedUsers:i().array,setSelectedUsers:i().func,title:i().string,description:i().string};const xe=Ze;var Me=s(41448),Ce=s(64756),Se=s(83536);var Re=s(50693),ke=s(16475),Te=s(55140);const Ne=()=>{const e=(0,l.YB)(),t=(0,h.default)(),{isBeta:s}=(0,Te.Z)(),{"group-name":a,"group-description":n,"users-list":i,"roles-list":o,"service-accounts-list":c}=t.getState().values,u=s()&&(0,ve.useFlag)("platform.rbac.group-service-accounts")||!s()&&(0,ve.useFlag)("platform.rbac.group-service-accounts.stable");return r().createElement("div",{className:"rbac"},r().createElement(ee.K,{hasGutter:!0},r().createElement(te.v,null,r().createElement(ee.K,{hasGutter:!0},r().createElement(te.v,{className:"rbac-l-stack__item-summary"},r().createElement(Re.r,null,r().createElement(ke.P,{md:3},r().createElement(de.x,{component:de.q.h4,className:"rbac-bold-text"},e.formatMessage(H.Z.groupName))),r().createElement(ke.P,{md:9},r().createElement(de.x,{component:de.q.p},a))),r().createElement(Re.r,null,r().createElement(ke.P,{md:3},r().createElement(de.x,{component:de.q.h4,className:"rbac-bold-text"},e.formatMessage(H.Z.groupDescription))),r().createElement(ke.P,{md:9},r().createElement(de.x,{component:de.q.p},n))),r().createElement(Re.r,null,r().createElement(ke.P,{md:3},r().createElement(de.x,{component:de.q.h4,className:"rbac-bold-text"},e.formatMessage(H.Z.roles))),r().createElement(ke.P,{md:9},o.map(((e,t)=>r().createElement(de.x,{className:"pf-v5-u-mb-0",key:t},e.label))))),r().createElement(Re.r,null,r().createElement(ke.P,{md:3},r().createElement(de.x,{component:de.q.h4,className:"rbac-bold-text"},e.formatMessage(H.Z.members))),r().createElement(ke.P,{md:9},i.map(((e,t)=>r().createElement(de.x,{className:"pf-v5-u-mb-0",key:t},e.label))))),r().createElement(Re.r,null,r().createElement(ke.P,{md:3},r().createElement(de.x,{component:de.q.h4,className:"rbac-bold-text"},e.formatMessage(H.Z.serviceAccounts))),u&&r().createElement(ke.P,{md:9},c?.map(((e,t)=>r().createElement(de.x,{className:"pf-v5-u-mb-0",key:t},e.name))))))))))};Ne.propTypes={name:i().string,description:i().string,groups:i().array};const we=Ne;var Be=s(80315),Le=s(7065);const Pe=({onClose:e})=>{const t=(0,l.YB)(),{setHideForm:s,setWizardSuccess:n}=(0,a.useContext)(Fe);return r().createElement(y.u,{variant:y.I.lg},r().createElement(Z.t,{titleText:r().createElement(r().Fragment,null,t.formatMessage(H.Z.groupCreatedSuccessfully)),icon:r().createElement(x.k,{className:"pf-v5-u-mt-xl",color:"green",icon:k.rE}),headingLevel:"h4"}),r().createElement(Be.O,null,r().createElement(D.zx,{onClick:e,variant:"primary"},t.formatMessage(H.Z.exit)),r().createElement(Le.U,null,r().createElement(D.zx,{onClick:()=>{s(!1),n(!1)},variant:"link"},t.formatMessage(H.Z.createAnotherGroup)))))},Fe=(0,a.createContext)({success:!1,submitting:!1,error:void 0,setHideForm:e=>null,setWizardSuccess:e=>null}),Ie=e=>r().createElement(d.ZP,{...e,showFormControls:!1}),Ae=({Content:e,...t})=>r().createElement(e,{...t});Ae.propTypes={Content:i().elementType.isRequired};const qe={description:Ae,"set-name":ue,"set-roles":fe,"set-users":xe,"set-service-accounts":({name:e})=>{const[t,s]=(0,a.useState)([]),{input:n}=(0,ne.Z)({name:e}),i=(0,l.YB)(),o=(0,h.default)();return(0,a.useEffect)((()=>{s(o.getState().values["service-accounts-list"]||[])}),[]),(0,a.useEffect)((()=>{n.onChange(t),o.change("service-accounts-list",t)}),[t]),r().createElement(a.Fragment,null,r().createElement(he.l,null,r().createElement(ee.K,{hasGutter:!0},r().createElement(te.v,null,r().createElement(me.D,null,i.formatMessage(H.Z.addServiceAccountsToGroupDescription),r().createElement(Me.b,{className:"pf-v5-u-mt-sm rbac-service-accounts-alert",variant:"info",component:"span",isInline:!0,isPlain:!0,title:i.formatMessage(H.Z.visitServiceAccountsPage,{link:r().createElement(Ce.Z,{to:"/service-accounts",linkBasename:"/iam"},i.formatMessage(H.Z.serviceAccountsPage))})}))),r().createElement(te.v,null,r().createElement(le.c,{fieldId:"select-service-accounts"},r().createElement(Se.Z,{selected:t,setSelected:s}))))))},"summary-content":we},_e=(e,t,s)=>a=>{s(a),Object.keys(a).length>0?t(!0):e()},De=({postMethod:e,pagination:t,filters:s,orderBy:n})=>{const i=(0,o.useDispatch)(),d=(0,l.YB)(),h=(0,a.useRef)(document.createElement("div")),{isBeta:E}=(0,Te.Z)(),b=E()&&(0,ve.useFlag)("platform.rbac.group-service-accounts")||!E()&&(0,ve.useFlag)("platform.rbac.group-service-accounts.stable"),y=(0,a.useRef)(((e,t)=>{const s=(0,l.Sn)(),a=(0,l.dp)({locale:X.S,messages:V},s);return{fields:[{component:"wizard",name:"wizard",className:"rbac",isDynamic:!0,inModal:!0,showTitles:!0,title:a.formatMessage(H.Z.createGroup),container:e,fields:[{name:"name-and-description",nextStep:"add-roles",title:a.formatMessage(H.Z.nameAndDescription),fields:[{component:"set-name",name:"group-name",validate:[{type:f.Z.REQUIRED}]},{component:v.Z.TEXTAREA,name:"group-description",hideField:!0,validate:[{type:f.Z.MAX_LENGTH,threshold:150}]}]},{name:"add-roles",nextStep:"add-users",title:a.formatMessage(H.Z.addRoles),fields:[{component:"set-roles",name:"roles-list"}]},{name:"add-users",nextStep:t?"add-service-accounts":"review",title:a.formatMessage(H.Z.addMembers),fields:[{component:"set-users",name:"users-list"}]},...t?[{name:"add-service-accounts",nextStep:"review",title:a.formatMessage(H.Z.addServiceAccounts),fields:[{component:"set-service-accounts",name:"service-accounts-list"}]}]:[],{name:"review",title:a.formatMessage(H.Z.reviewDetails),buttons:e=>r().createElement(Y.Z,{...e,context:Fe}),StepTemplate:K,fields:[{component:"summary-content",name:"summary-content"}]}]}]}})(h.current,b)),Z=(0,O.Z)(),[x,M]=(0,a.useState)({}),[C,S]=(0,a.useState)({success:!1,submitting:!1,error:void 0,hideForm:!1}),R=()=>{i((0,u.addNotification)({variant:"warning",title:d.formatMessage(H.Z.addingGroupTitle),dismissDelay:8e3,description:d.formatMessage(H.Z.addingGroupCanceledDescription)})),Z({pathname:U.Z.groups.link,search:(0,J.GT)({page:1,per_page:t.limit,...s})})},k=e=>S((t=>({...t,error:e}))),T=e=>S((t=>({...t,canceled:e}))),N=()=>{S((e=>({...e,success:!1,hideForm:!1}))),e({limit:t.limit,offset:0,orderBy:n,filters:{}}),Z({pathname:U.Z.groups.link,search:(0,J.GT)({page:1,per_page:t.limit})})};return r().createElement(Fe.Provider,{value:{...C,setWizardError:k,setWizardSuccess:e=>S((t=>({...t,success:e}))),setHideForm:e=>S((t=>({...t,hideForm:e})))}},r().createElement(g.Z,{title:d.formatMessage(H.Z.exitItemCreation,{item:d.formatMessage(H.Z.group).toLocaleLowerCase()}),isOpen:C.canceled,onClose:()=>{h.current.hidden=!1,T(!1)},confirmButtonLabel:d.formatMessage(H.Z.discard),onConfirm:R},d.formatMessage(H.Z.discardedInputsWarning)),C.hideForm?C.success?r().createElement(c.e,{isOpen:!0,title:d.formatMessage(H.Z.createGroup),onClose:N,steps:[{name:"success",component:r().createElement(Pe,{onClose:N}),isFinishedStep:!0}]}):null:r().createElement(m.Z,{schema:y.current,container:h,subscription:{values:!0},FormTemplate:Ie,componentMapper:{...p.ZP,...qe},onSubmit:e=>{const t=e["service-accounts-list"]?.length>0;S((e=>({...e,submitting:!0,submittingGroup:!0,submittingServiceAccounts:t})));const s={name:e["group-name"],description:e["group-description"],user_list:e["users-list"].map((e=>({username:e.label}))),roles_list:e["roles-list"].map((e=>e.uuid))};i((0,Q.Rp)(s)).then((({value:s})=>{S((e=>({...e,submittingGroup:!1,success:!t,hideForm:!t,submitting:t}))),t&&i((0,Q.w_)(s.uuid,e["service-accounts-list"])).then((()=>{S((e=>({...e,submitting:!1,submittingServiceAccounts:!1,success:!0,hideForm:!0})))})).catch((()=>k(!0)))}))},initialValues:x,onCancel:_e(R,(()=>{h.current.hidden=!0,T(!0)}),M)}))};De.propTypes={postMethod:i().func,pagination:i().shape({limit:i().number.isRequired}).isRequired,filters:i().object.isRequired,orderBy:i().string};const Ge=De},87285:(e,t,s)=>{"use strict";s.d(t,{Z:()=>E});var a=s(66029),r=s.n(a),n=s(45697),i=s.n(n),o=s(25387),l=s(86706),c=s(7732),u=s(55140),m=s(74982),d=s(29301),p=s(97246),g=s(13563),f=s(77044),v=s(2550);const h=({selectedRoles:e,setSelectedRoles:t,rolesExcluded:s,groupId:n})=>{const i=(0,o.YB)(),h=(0,u.Z)(),E=(0,l.useDispatch)(),b=(0,a.useRef)(null),{roles:y,pagination:Z,isLoading:x,groupId:M,filters:C}=(0,l.useSelector)(s?({groupReducer:{selectedGroup:{addRoles:{roles:e,pagination:t,loaded:s},uuid:a}}})=>({roles:e,pagination:t||{...m.eX,count:e?.length},isLoading:!s,groupId:n||a}):({roleReducer:{roles:e,isLoading:t}})=>({roles:e.data,pagination:e.meta,isLoading:t,filters:e.filters}),l.shallowEqual),{current:S}=(0,a.useRef)([{title:i.formatMessage(v.Z.name),key:"display_name",...s?{orderBy:"name"}:{transforms:[c.p]}},{title:i.formatMessage(v.Z.description)}]),[R,k]=(0,a.useState)(""),[T,N]=(0,a.useState)({index:1,direction:"asc"}),w=(0,a.useCallback)(((e,t)=>E(s?(0,f.nr)(e,t):(0,g.Kt)((0,d.jl)({...t,chrome:h})))),[s]),B=`${"desc"===T?.direction?"-":""}${S[T?.index].key}`,L=((e,t=[])=>e?e.reduce(((e,{uuid:s,display_name:a,name:r,description:n})=>[...e,{uuid:s,cells:[a||r,n],selected:Boolean(t&&t.find((e=>e.uuid===s)))}]),[]):[])(y,e);return(0,a.useEffect)((()=>{w(M,{...Z,orderBy:B})}),[]),r().createElement(p.M,{isSelectable:!0,isCompact:!0,borders:!1,columns:S,rows:L,sortBy:T,onSort:(e,t,s,a)=>{const r=`${"desc"===s?"-":""}${S[a?t-1:t].key}`;N({index:t,direction:s}),((e,t)=>{const{name:s,count:a,limit:r,offset:n,orderBy:i}=t;w(e,(0,d.jl)({count:a,limit:r,offset:n,orderBy:i,filters:{display_name:s}}))})(M,{...Z,offset:0,orderBy:r,...C?.length>0?{...C.reduce(((e,t)=>({...e,[t.key]:t.value})),{})}:{name:R}})},data:y,filterValue:R,filterPlaceholder:i.formatMessage(v.Z.roleName).toLowerCase(),fetchData:e=>w(M,{...e,filters:{display_name:e.name}}),setFilterValue:({name:e})=>k(e),isLoading:x,ouiaId:"roles-table",pagination:Z,checkedRows:e,setCheckedItems:e=>{t((t=>e(t).map((({uuid:e,name:t,label:s})=>({uuid:e,label:s||t})))))},titlePlural:i.formatMessage(v.Z.roles).toLowerCase(),titleSingular:i.formatMessage(v.Z.role),tableId:"roles-list",textFilterRef:b})};h.propTypes={canSort:i().bool,setSelectedRoles:i().func.isRequired,selectedRoles:i().array,rolesExcluded:i().bool.isRequired,groupId:i().string},h.defaultProps={roles:[],pagination:m.eX,canSort:!0};const E=h},83536:(e,t,s)=>{"use strict";s.d(t,{K:()=>f,Z:()=>v});var a=s(66029),r=s.n(a),n=s(40575),i=s(25387),o=s(29301),l=s(55140),c=s(62410),u=s(86706),m=s(97246),d=s(71079),p=s(2550);const g=({serviceAccountReducer:e})=>({serviceAccounts:e.serviceAccounts,status:e.status,isLoading:e.isLoading,limit:e.limit,offset:e.offset}),f=({selected:e,setSelected:t,groupId:s})=>{const{auth:f,getEnvironmentDetails:v}=(0,l.Z)(),{serviceAccounts:h,status:E,limit:b,offset:y,isLoading:Z}=(0,u.useSelector)(g),x=(0,u.useDispatch)(),M=(0,i.YB)(),C=(0,a.useCallback)((async e=>{const t=v(),a=await f.getToken();var r;x((r={limit:e?.limit??b,offset:e?.offset??y,token:a,sso:t?.sso,groupId:s},{type:d.t5,payload:n.Sx(r),meta:r}))}),[b,y]);(0,a.useEffect)((()=>{C({limit:b,offset:0})}),[]);const S=[{title:M.formatMessage(p.Z.name),orderBy:"name"},{title:M.formatMessage(p.Z.description),orderBy:"description"},{title:M.formatMessage(p.Z.clientId),orderBy:"clientId"},{title:M.formatMessage(p.Z.owner),orderBy:"owner"},{title:M.formatMessage(p.Z.timeCreated),orderBy:"timeCreated"}];return r().createElement(m.M,{className:"rbac-service-accounts-list",columns:S,isSelectable:!0,rows:(R=h,k=e,R?.reduce(((e,t)=>[...e,{uuid:t.uuid,title:t.name,cells:[t.name,t.description,t.clientId,t.createdBy,r().createElement(a.Fragment,{key:`${t.name}-modified`},r().createElement(c.Z,{date:t.createdAt,type:(0,o.mh)(t.createdAt)}))],selected:Boolean(k&&k.find((e=>e.uuid===t.uuid)))||t.assignedToSelectedGroup,disableSelection:t.assignedToSelectedGroup}]),[])),data:h,fetchData:C,isLoading:Z,pagination:{limit:b,offset:y,...E===n.Xu?{count:y+h.length}:{}},paginationProps:{toggleTemplate:({firstIndex:e,lastIndex:t})=>r().createElement(r().Fragment,null,r().createElement("b",null,e," - ",t)," ","of ",r().createElement("b",null,E===n.Xu?y+h.length:"many")),isCompact:!0},checkedRows:e,setCheckedItems:t,titlePlural:M.formatMessage(p.Z.serviceAccounts).toLowerCase(),titleSingular:M.formatMessage(p.Z.serviceAccount),emptyProps:{title:M.formatMessage(p.Z.noServiceAccountsFound),description:[M.formatMessage(p.Z.contactServiceTeamForAccounts),""]},tableId:"group-add-accounts",ouiaId:"group-add-accounts"});var R,k},v=f},10113:(e,t,s)=>{"use strict";s.d(t,{Z:()=>x});var a=s(66029),r=s.n(a),n=s(86706),i=s(45697),o=s.n(i),l=s(62012),c=s(25387),u=s(46818),m=s(7732),d=s(29301),p=s(60063),g=s(97246),f=s(24869),v=s(86601),h=s(74982),E=s(23340),b=s(2550),y=s(39820);const Z=({selectedUsers:e,setSelectedUsers:t,userLinks:s,usesMetaInURL:i,displayNarrow:o,props:Z})=>{const x=(0,c.YB)(),M=(0,l.useNavigate)(),C=(0,l.useLocation)(),S=(0,n.useDispatch)(),{orgAdmin:R}=(0,a.useContext)(v.Z),k=(0,a.useRef)(null);let T=(0,n.useSelector)((({userReducer:{users:e}})=>({limit:(i?e.pagination.limit:e.meta.limit)??(R?h.HE:h.he).limit,offset:(i?e.pagination.offset:e.meta.offset)??(R?h.HE:h.he).offset,count:i?e.pagination.count:e.meta.count,redirected:i&&e.pagination.redirected})));const{users:N,isLoading:w,stateFilters:B}=(0,n.useSelector)((({userReducer:{users:{data:e,filters:t={}},isUserDataLoading:s}})=>({users:e?.map?.((e=>({...e,uuid:e.username}))),isLoading:s,stateFilters:C.search.length>0||Object.keys(t).length>0?t:{status:["Active"]}}))),L=(0,a.useCallback)((e=>S((0,p.uh)(e))),[S]),P=(0,a.useCallback)((e=>S((0,p.an)(e))),[S]),F=[{title:x.formatMessage(o?b.Z.orgAdmin:b.Z.orgAdministrator),key:"org-admin",transforms:[u.P8]},{title:x.formatMessage(b.Z.username),key:"username",transforms:[m.p]},{title:x.formatMessage(b.Z.email)},{title:x.formatMessage(b.Z.firstName),transforms:[u.P8]},{title:x.formatMessage(b.Z.lastName),transforms:[u.P8]},{title:x.formatMessage(b.Z.status),transforms:[u.P8]}],[I,A]=(0,a.useState)({index:1,direction:"asc"}),[q,_]=(0,a.useState)(i?B:{username:"",email:"",status:[x.formatMessage(b.Z.active)]});return(0,a.useEffect)((()=>{i&&(0,h.oG)(C,M,T.limit,T.offset)}),[T.offset,T.limit,T.count,T.redirected]),(0,a.useEffect)((()=>{const{limit:e,offset:t}=(0,h.rj)(C,M,T),s=i?(0,E.aX)(C,M,["username","email","status"],q):{status:q.status};_(s),L({...(0,d.jl)({limit:e,offset:t,filters:s}),usesMetaInURL:i})}),[]),(0,a.useEffect)((()=>{i&&((0,h.Zc)(C)||(0,h.oG)(C,M,T.limit,T.offset),Object.values(q).some((e=>e?.length>0))&&!(0,E.qF)(C,Object.keys(q))&&(0,E.aX)(C,M,Object.keys(q),q))})),r().createElement(g.M,{isCompact:!0,isSelectable:!0,borders:!1,columns:F,rows:(0,y.H)(s,N,x,e,!0),sortBy:I,onSort:(e,t,s)=>{const a=`${"desc"===s?"-":""}${F[t-1].key}`;A({index:t,direction:s}),L({...T,filters:q,usesMetaInURL:i,orderBy:a})},data:N,ouiaId:"users-table",fetchData:e=>{const t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:q.status,{username:s,email:a,count:r,limit:n,offset:o,orderBy:l}=e;L({...(0,d.jl)({count:r,limit:n,offset:o,orderBy:l,filters:{username:s,email:a,status:t}}),usesMetaInURL:i}).then((()=>{k?.current?.focus()})),i&&(0,E.MS)(C,M,{username:s,email:a,status:t})},emptyFilters:{username:"",email:"",status:""},setFilterValue:({username:e,email:t,status:s})=>{var a;a={username:void 0===e?q.username:e,email:void 0===t?q.email:t,status:void 0===s||s===q.status?q.status:s},i&&P(a),_({username:"",...a})},isLoading:w,pagination:T,checkedRows:e,setCheckedItems:e=>{t((t=>e(t).map((({uuid:e,username:t})=>({uuid:e,label:t||e})))))},rowWrapper:f.Z,titlePlural:x.formatMessage(b.Z.users).toLowerCase(),titleSingular:x.formatMessage(b.Z.user),filters:[{key:"username",value:q.username,placeholder:x.formatMessage(b.Z.filterByKey,{key:x.formatMessage(b.Z.username).toLowerCase()}),innerRef:k},{key:"email",value:q.email,placeholder:x.formatMessage(b.Z.filterByKey,{key:x.formatMessage(b.Z.email).toLowerCase()}),innerRef:k},{key:"status",value:q.status,label:x.formatMessage(b.Z.status),type:"checkbox",items:[{label:x.formatMessage(b.Z.active),value:"Active"},{label:x.formatMessage(b.Z.inactive),value:"Inactive"}]}],tableId:"users-list",...Z})};Z.propTypes={displayNarrow:o().bool,users:o().array,searchFilter:o().string,setSelectedUsers:o().func.isRequired,selectedUsers:o().array,userLinks:o().bool,props:o().object,usesMetaInURL:o().bool},Z.defaultProps={displayNarrow:!1,users:[],selectedUsers:[],setSelectedUsers:()=>{},userLinks:!1,usesMetaInURL:!1};const x=Z},95359:(e,t,s)=>{"use strict";s.d(t,{B:()=>c,L:()=>u});var a=s(94504),r=s(47625),n=s(60167),i=s(25387),o=s(2550),l=s(2034);const c=async(e,t,s)=>{const r=(0,i.Sn)(),c=(0,i.dp)({locale:n.S,messages:l},r);if(!e)return;if(e.length>150)throw c.formatMessage(o.Z.maxCharactersWarning,{number:150});const u=await(0,a.bt)({limit:10,offset:0,filters:{name:e},nameMatch:"exact"}).catch((e=>{console.error(e)}));if(s?u?.data?.some((e=>e[t]!==s)):u?.data?.length>0)throw c.formatMessage(o.Z.nameAlreadyTaken)},u=(0,r.Z)(((e,t,s)=>c(e,t,s)))},47625:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(99166);const r=(e,t=250,s={onlyResolvesLast:!1})=>(0,a.Z)(e,t,s)},82472:()=>{},97890:()=>{},17657:()=>{},22972:()=>{},43389:()=>{},81754:()=>{},80897:()=>{},78752:()=>{},71338:()=>{},92084:()=>{},37739:()=>{},40209:()=>{},38299:()=>{},72816:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8759.d03e3a18f69cfea18ce632a4387954ff.js.map
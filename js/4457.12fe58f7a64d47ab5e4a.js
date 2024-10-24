(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4457,2403],{61354:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n}),a(95067);const n={backdrop:"pf-v5-c-backdrop",backdropOpen:"pf-v5-c-backdrop__open"}},81539:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n}),a(26078);const n={button:"pf-v5-c-button",modalBox:"pf-v5-c-modal-box",modalBoxBody:"pf-v5-c-modal-box__body",modalBoxClose:"pf-v5-c-modal-box__close",modalBoxDescription:"pf-v5-c-modal-box__description",modalBoxFooter:"pf-v5-c-modal-box__footer",modalBoxHeader:"pf-v5-c-modal-box__header",modalBoxHeaderMain:"pf-v5-c-modal-box__header-main",modalBoxTitle:"pf-v5-c-modal-box__title",modalBoxTitleIcon:"pf-v5-c-modal-box__title-icon",modalBoxTitleText:"pf-v5-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",custom:"pf-m-custom",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"},themeDark:"pf-v5-theme-dark"}},32069:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n}),a(2580);const n={bullseye:"pf-v5-l-bullseye"}},29528:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ae});var n=a(93345),r=a.n(n),o=a(8604),i=a(17228),s=a(49646),u=a(60281),l=a(40335),c=a(69733),m=a(59622),d=a(96219),f=a(52453),h=a(13692),g=a(6271),p=a(79994),b=a(58510),v=a(52577),y=a(44097),w=a(42134),M=a(49634),S=a(13282);const P=["Username","Email","First name","Last name","Status","Org admin"],D=[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],T="iam-users-table",C=()=>{const[e,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)(),s=(0,c.useDispatch)(),u=(0,o.tz)(),{users:C,totalCount:E}=(0,c.useSelector)((e=>({users:e.userReducer.users.data||[],totalCount:e.userReducer.users.meta.count}))),[k,x]=(0,M.useSearchParams)(),W=(0,m.Vs)({perPage:20,searchParams:k,setSearchParams:x}),{page:A,perPage:U,onSetPage:R,onPerPageSelect:B}=W,_=(0,m.Jk)({matchOption:(e,t)=>e[0]===t[0]}),{selected:I,onSelect:F,isSelected:j}=_,O=(0,n.useCallback)((e=>{const{count:t,limit:a,offset:n,orderBy:r}=e;s((0,y.hU)({...(0,w.YP)({count:t,limit:a,offset:n,orderBy:r}),usesMetaInURL:!0}))}),[s]);(0,n.useEffect)((()=>{O({limit:U,offset:(A-1)*U,orderBy:"username",count:E||0})}),[O,A,U]);const N=(0,n.useMemo)((()=>C.map((a=>[a.username,a.email,a.first_name,a.last_name,a.is_active?"Active":"Inactive",a.is_org_admin?"Yes":"No",{cell:r().createElement(v.G,{items:[{title:u.formatMessage(l.A.addToUserGroup),onClick:()=>console.log("ADD TO USER GROUP")},{title:u.formatMessage(l.A.removeFromUserGroup),onClick:(a,n,r)=>((a,n)=>{i(n),t(!e)})(0,r)}],rowData:a}),props:{isActionCell:!0}}]))),[C]),X=N.length>0&&N.every(j),G=!X&&N.some(j),Y=r().createElement(b.Pagination,{perPageOptions:D,itemCount:E,page:A,perPage:U,onSetPage:R,onPerPageSelect:B});return r().createElement(n.Fragment,null,e&&r().createElement(S.cj,{ouiaId:`${T}-remove-user-modal`,isOpen:e,title:u.formatMessage(l.A.deleteUserModalTitle),confirmButtonLabel:u.formatMessage(l.A.remove),confirmButtonVariant:p.ButtonVariant.danger,onClose:()=>t(!1),onConfirm:()=>{console.log(`Deleting ${a?.username} from user groups`),t(!1)}},`${a?.username} ${u.formatMessage(l.A.deleteUserModalBody)}`),r().createElement(f.U$,{ouiaId:T,selection:_},r().createElement(h.R,{ouiaId:`${T}-header-toolbar`,bulkSelect:r().createElement(d.rT,{isDataPaginated:!0,pageCount:C.length,selectedCount:I.length,totalCount:E,pageSelected:X,pagePartiallySelected:G,onSelect:e=>{e===d.oG.none?F(!1):e===d.oG.page?F(!0,N):e===d.oG.nonePage&&F(!1,N)}}),pagination:r().cloneElement(Y,{isCompact:!0})}),r().createElement(g.Ub,{variant:"compact","aria-label":"Users Table",ouiaId:`${T}-table`,columns:P,rows:N}),r().createElement(h.R,{ouiaId:`${T}-footer-toolbar`,pagination:Y})))};var E=a(26956),k=a(99843),x={};function W(){return x}var A=a(82284);function U(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function R(e){U(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,A.A)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function B(e,t){U(2,arguments);var a=R(e),n=R(t),r=a.getTime()-n.getTime();return r<0?-1:r>0?1:r}function _(e,t){U(2,arguments);var a,n=R(e),r=R(t),o=B(n,r),i=Math.abs(function(e,t){U(2,arguments);var a=R(e),n=R(t);return 12*(a.getFullYear()-n.getFullYear())+(a.getMonth()-n.getMonth())}(n,r));if(i<1)a=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-o*i);var s=B(n,r)===-o;(function(e){U(1,arguments);var t=R(e);return function(e){U(1,arguments);var t=R(e);return t.setHours(23,59,59,999),t}(t).getTime()===function(e){U(1,arguments);var t=R(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}(t).getTime()})(R(e))&&1===i&&1===B(e,r)&&(s=!1),a=o*(i-Number(s))}return 0===a?0:a}var I={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};var F={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function j(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var O,N={date:j({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:j({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:j({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function G(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=a&&a.width?String(a.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,s=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[s]||e.values[i]}return n[e.argumentCallback?e.argumentCallback(t):t]}}function Y(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,s=o[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?function(e){for(var t=0;t<e.length;t++)if(e[t].test(s))return t}(u):function(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(s))return t}(u);return i=e.valueCallback?e.valueCallback(l):l,{value:i=a.valueCallback?a.valueCallback(i):i,rest:t.slice(s.length)}}}const L={code:"en-US",formatDistance:function(e,t,a){var n,r=F[e];return n="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n},formatLong:N,formatRelative:function(e,t,a,n){return X[e]},localize:{ordinalNumber:function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:G({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:G({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:G({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:G({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:G({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(O={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(O.matchPattern);if(!a)return null;var n=a[0],r=e.match(O.parsePattern);if(!r)return null;var o=O.valueCallback?O.valueCallback(r[0]):r[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(n.length)}}),era:Y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function $(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function J(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var q=43200;function H(e,t,a){var n,r;U(2,arguments);var o=W(),i=null!==(n=null!==(r=null==a?void 0:a.locale)&&void 0!==r?r:o.locale)&&void 0!==n?n:L;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=B(e,t);if(isNaN(s))throw new RangeError("Invalid time value");var u,l,c=$($({},a),{addSuffix:Boolean(null==a?void 0:a.addSuffix),comparison:s});s>0?(u=R(t),l=R(e)):(u=R(e),l=R(t));var m,d=function(e,t,a){U(2,arguments);var n,r=function(e,t){return U(2,arguments),R(e).getTime()-R(t).getTime()}(e,t)/1e3;return((n=null==a?void 0:a.roundingMethod)?I[n]:I.trunc)(r)}(l,u),f=(J(l)-J(u))/1e3,h=Math.round((d-f)/60);if(h<2)return null!=a&&a.includeSeconds?d<5?i.formatDistance("lessThanXSeconds",5,c):d<10?i.formatDistance("lessThanXSeconds",10,c):d<20?i.formatDistance("lessThanXSeconds",20,c):d<40?i.formatDistance("halfAMinute",0,c):d<60?i.formatDistance("lessThanXMinutes",1,c):i.formatDistance("xMinutes",1,c):0===h?i.formatDistance("lessThanXMinutes",1,c):i.formatDistance("xMinutes",h,c);if(h<45)return i.formatDistance("xMinutes",h,c);if(h<90)return i.formatDistance("aboutXHours",1,c);if(h<1440){var g=Math.round(h/60);return i.formatDistance("aboutXHours",g,c)}if(h<2520)return i.formatDistance("xDays",1,c);if(h<q){var p=Math.round(h/1440);return i.formatDistance("xDays",p,c)}if(h<86400)return m=Math.round(h/q),i.formatDistance("aboutXMonths",m,c);if((m=_(l,u))<12){var b=Math.round(h/q);return i.formatDistance("xMonths",b,c)}var v=m%12,y=Math.floor(m/12);return v<3?i.formatDistance("aboutXYears",y,c):v<9?i.formatDistance("overXYears",y,c):i.formatDistance("almostXYears",y+1,c)}function V(e,t){return U(1,arguments),H(e,Date.now(),t)}const z=["User group name","Description","Users","Service accounts","Roles","Workspaces","Last modified"],K=[{title:"Edit user group",onClick:()=>console.log("EDIT USER GROUP")},{title:"Delete user group",onClick:()=>console.log("DELETE USER GROUP")}],Q=[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50},{title:"100",value:100}],Z="iam-user-groups-table",ee=()=>{const e=(0,c.useDispatch)(),{groups:t,totalCount:a}=(0,c.useSelector)((e=>({groups:e.groupReducer?.groups?.data||[],totalCount:e.groupReducer?.groups?.meta.count||0}))),[o,i]=(0,M.useSearchParams)(),s=(0,m.Vs)({perPage:20,searchParams:o,setSearchParams:i}),{page:u,perPage:l,onSetPage:p,onPerPageSelect:y}=s,S=(0,m.Jk)({matchOption:(e,t)=>e[0]===t[0]}),{selected:P,onSelect:D,isSelected:T}=S,C=(0,n.useCallback)((t=>{const{count:a,limit:n,offset:r,orderBy:o}=t;e((0,k.pl)({...(0,w.YP)({count:a,limit:n,offset:r,orderBy:o}),usesMetaInURL:!0}))}),[e]);(0,n.useEffect)((()=>{C({limit:l,offset:(u-1)*l,orderBy:"name",count:a||0})}),[C,u,l]);const x=t.map((e=>[e.name,e.description?r().createElement(E.Tooltip,{isContentLeftAligned:!0,content:e.description},r().createElement("span",null,e.description.length>23?e.description.slice(0,20)+"...":e.description)):r().createElement("div",{className:"pf-v5-u-color-400"},"No description"),e.principalCount,e.serviceAccounts||"?",e.roleCount,e.workspaces||"?",V(new Date(e.modified),{addSuffix:!0}),{cell:r().createElement(v.G,{items:K}),props:{isActionCell:!0}}])),W=x.length>0&&x.every(T),A=!W&&x.some(T),U=r().createElement(b.Pagination,{perPageOptions:Q,itemCount:a,page:u,perPage:l,onSetPage:p,onPerPageSelect:y});return r().createElement(f.U$,{ouiaId:Z,selection:S},r().createElement(h.R,{ouiaId:`${Z}-header-toolbar`,bulkSelect:r().createElement(d.rT,{isDataPaginated:!0,pageCount:t.length,selectedCount:P.length,totalCount:a,pageSelected:W,pagePartiallySelected:A,onSelect:e=>{e===d.oG.none?D(!1):e===d.oG.page?D(!0,x):e===d.oG.nonePage&&D(!1,x)}}),pagination:r().cloneElement(U,{isCompact:!0})}),r().createElement(g.Ub,{variant:"compact","aria-label":"Users Table",ouiaId:`${Z}-table`,columns:z,rows:x}),r().createElement(h.R,{ouiaId:`${Z}-footer-toolbar`,pagination:U}))},te=["users","user-groups"],ae=()=>{const e=(0,o.tz)(),[t,a]=r().useState(0),c=r().createRef(),m=r().createRef(),d=(0,M.useNavigate)(),f=(0,M.useLocation)();return(0,n.useEffect)((()=>{const e=new URLSearchParams(f.search).get("activeTab");e&&a(Number(te.findIndex((t=>t===e))))}),[f.search]),r().createElement(r().Fragment,null,r().createElement(u.A,{title:e.formatMessage(l.A.usersAndUserGroups),subtitle:e.formatMessage(l.A.usersAndUserGroupsDescription)}),r().createElement(i.PageSection,{type:"tabs",variant:i.PageSectionVariants.light,isWidthLimited:!0},r().createElement(s.Tabs,{activeKey:t,onSelect:(e,t)=>{const n=Number(t);a(n),(e=>{const t=new URLSearchParams(f.search);t.set("activeTab",e.toString()),d({search:t.toString()})})(te[n])},inset:{default:"insetNone",md:"insetSm",xl:"insetLg","2xl":"inset2xl"},role:"region"},r().createElement(s.Tab,{eventKey:0,title:e.formatMessage(l.A.users),tabContentId:"usersTab",tabContentRef:c,ouiaId:"users-tab-button"}),r().createElement(s.Tab,{eventKey:1,title:e.formatMessage(l.A.userGroups),tabContentId:"groupsTab",tabContentRef:m,ouiaId:"user-groups-tab-button"}))),r().createElement(i.PageSection,null,r().createElement(s.TabContent,{eventKey:0,id:"usersTab",ref:c,"aria-label":"Users tab"},r().createElement(C,null)),r().createElement(s.TabContent,{eventKey:1,id:"groupsTab",ref:m,"aria-label":"Groups tab",hidden:!0},r().createElement(ee,null))))}},95067:()=>{},17627:()=>{},26078:()=>{},50545:()=>{},5637:()=>{},81117:()=>{},2580:()=>{},36752:()=>{},83696:()=>{}}]);
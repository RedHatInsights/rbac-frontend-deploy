(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[1422],{16503:(e,t,n)=>{"use strict";n.d(t,{V:()=>d,Z:()=>u});var a=n(66029),r=n.n(a),l=n(49739),o=n(83826),i=n(93302),c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const s=e=>{var{children:t,ouiaId:n="DataView"}=e,a=c(e,["children","ouiaId"]);return r().createElement(l.K,Object.assign({"data-ouia-component-id":`${n}-stack}`},a),r().Children.map(t,((e,t)=>r().createElement(o.v,{"data-ouia-component-id":`${n}-stack-item-${t}`},e))))},d=e=>{var{children:t,selection:n}=e,a=c(e,["children","selection"]);return r().createElement(i.nw,{selection:n},r().createElement(s,Object.assign({},a),t))},u=d},66828:(e,t,n)=>{"use strict";n.d(t,{H9:()=>d,ZP:()=>u,XW:()=>c,r8:()=>i,d_:()=>s});var a=n(66029),r=n.n(a),l=n(84816),o=n(94034);const i=e=>null!=e&&"object"==typeof e&&"cell"in e,c=e=>null!=e&&"object"==typeof e&&"cell"in e,s=e=>null!=e&&"object"==typeof e&&"row"in e,d=e=>e.isTreeTable?r().createElement(l.o,Object.assign({},e)):r().createElement(o.w,Object.assign({},e)),u=d},94034:(e,t,n)=>{"use strict";n.d(t,{w:()=>p});var a=n(66029),r=n.n(a),l=n(5697),o=n(75521),i=n(8128),c=n(72449),s=n(93302),d=n(65612),u=n(66828);const p=e=>{var{columns:t,rows:n,ouiaId:p="DataViewTableBasic",emptyState:m=null}=e,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["columns","rows","ouiaId","emptyState"]);const{selection:v}=(0,s.Vv)(),{onSelect:g,isSelected:y,isSelectDisabled:f}=null!=v?v:{},O=(0,a.useMemo)((()=>Boolean(g&&y)),[g,y]);return r().createElement(l.i,Object.assign({"aria-label":"Data table",ouiaId:p},b),r().createElement(d.i,{columns:t,ouiaId:p}),r().createElement(o.p,null,(null==n?void 0:n.length)>0?n.map(((e,t)=>{var n;const a=(0,u.d_)(e);return r().createElement(i.Tr,Object.assign({key:t,ouiaId:`${p}-tr-${t}`},a&&(null!==(n=null==e?void 0:e.props)&&void 0!==n?n:{})),O&&r().createElement(c.Td,{key:`select-${t}`,select:{rowIndex:t,onSelect:(t,n)=>{null==g||g(n,a?e:[e])},isSelected:(null==y?void 0:y(e))||!1,isDisabled:(null==f?void 0:f(e))||!1}}),(a?e.row:e).map(((e,n)=>{var a;const l=(0,u.XW)(e);return r().createElement(c.Td,Object.assign({key:n},l&&(null!==(a=null==e?void 0:e.props)&&void 0!==a?a:{}),{"data-ouia-component-id":`${p}-td-${t}-${n}`}),l?e.cell:e)})))})):r().createElement(i.Tr,{key:"empty",ouiaId:`${p}-tr-empty`},r().createElement(c.Td,{colSpan:t.length+Number(O)},m))))}},65612:(e,t,n)=>{"use strict";n.d(t,{i:()=>d});var a=n(66029),r=n.n(a),l=n(15173),o=n(51630),i=n(8128),c=n(93302),s=n(66828);const d=e=>{var{isTreeTable:t=!1,columns:n,ouiaId:d="DataViewTableHeader"}=e,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["isTreeTable","columns","ouiaId"]);const{selection:p}=(0,c.Vv)(),{onSelect:m,isSelected:b}=null!=p?p:{},v=(0,a.useMemo)((()=>[m&&b&&!t?r().createElement(l.Th,{key:"row-select",screenReaderText:"Data selection table header cell"}):null,...n.map(((e,t)=>{var n;return r().createElement(l.Th,Object.assign({key:t},(0,s.r8)(e)&&(null!==(n=null==e?void 0:e.props)&&void 0!==n?n:{}),{"data-ouia-component-id":`${d}-th-${t}`}),(0,s.r8)(e)?e.cell:e)}))]),[n,d,m,b,t]);return r().createElement(o.h,Object.assign({"data-ouia-component-id":`${d}-thead`},u),r().createElement(i.Tr,{ouiaId:`${d}-tr-head`},v))}},84816:(e,t,n)=>{"use strict";n.d(t,{o:()=>b});var a=n(66029),r=n.n(a),l=n(71305),o=n(72449),i=n(5697),c=n(75521),s=n(8128),d=n(93302),u=n(65612),p=n(66828);const m=e=>e.children&&e.children.length?e.children.flatMap(m):[e],b=e=>{var{columns:t,rows:n,emptyState:b=null,leafIcon:v=null,expandedIcon:g=null,collapsedIcon:y=null,ouiaId:f="DataViewTableTree"}=e,O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["columns","rows","emptyState","leafIcon","expandedIcon","collapsedIcon","ouiaId"]);const{selection:h}=(0,d.Vv)(),{onSelect:E,isSelected:w,isSelectDisabled:P}=null!=h?h:{},[j,S]=r().useState([]),[I,T]=r().useState([]),$=(0,a.useMemo)((()=>{const e=([t,...n],a=1,i=1,c=0,s=!1)=>{var d,u,b,O;if(!t)return[];const h=j.includes(t.id),$=I.includes(t.id),x=w&&((e,t)=>{let n=!0,a=!1;for(const r of m(e)){const e=!!(null==t?void 0:t(r));if(a||(a=e),n&&(n=e),!n&&a)return null}return n})(t,w);let k=v;t.children&&(k=h?g:y);const D={onCollapse:()=>S((e=>{const n=e.filter((e=>e!==t.id));return h?n:[...n,t.id]})),onToggleRowDetails:()=>T((e=>{const n=e.filter((e=>e!==t.id));return $?n:[...n,t.id]})),onCheckChange:(null==P?void 0:P(t))||!E?void 0:(e,n)=>null==E?void 0:E(n,m(t)),rowIndex:c,props:{isExpanded:h,isDetailsExpanded:$,isHidden:s,"aria-level":a,"aria-posinset":i,"aria-setsize":null!==(u=null===(d=t.children)||void 0===d?void 0:d.length)&&void 0!==u?u:0,isChecked:x,checkboxId:`checkbox_id_${null===(b=t.id)||void 0===b?void 0:b.toLowerCase().replace(/\s+/g,"_")}`,icon:k}},V=(null===(O=t.children)||void 0===O?void 0:O.length)?e(t.children,a+1,1,c+1,!h||s):[];return[r().createElement(l.k,{key:t.id,row:{props:D.props},ouiaId:`${f}-tr-${c}`},t.row.map(((e,t)=>{var n;const a=(0,p.XW)(e);return r().createElement(o.Td,Object.assign({key:t,treeRow:0===t?D:void 0},a&&(null!==(n=null==e?void 0:e.props)&&void 0!==n?n:{}),{"data-ouia-component-id":`${f}-td-${c}-${t}`}),a?e.cell:e)}))),...V,...e(n,a,i+1,c+1+V.length,s)]};return e(n)}),[n,j,I,v,g,y,w,E,P,f]);return r().createElement(i.i,Object.assign({isTreeTable:!0,"aria-label":"Data table",ouiaId:f},O),r().createElement(u.i,{isTreeTable:!0,columns:t,ouiaId:f}),r().createElement(c.p,null,$.length>0?$:r().createElement(s.Tr,{key:"empty",ouiaId:`${f}-tr-empty`},r().createElement(o.Td,{colSpan:t.length},b))))}},22479:(e,t,n)=>{"use strict";n.d(t,{u:()=>c});var a=n(66029),r=n.n(a),l=n(84812),o=n(39841),i=n(33094);const c=e=>{var{className:t,ouiaId:n="DataViewToolbar",bulkSelect:a,actions:c=null,pagination:s,children:d}=e,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","ouiaId","bulkSelect","actions","pagination","children"]);return r().createElement(l.o,Object.assign({ouiaId:n,className:t},u),r().createElement(o.c,null,a&&r().createElement(i.E,{"data-ouia-component-id":`${n}-bulk-select`},a),c,s&&r().createElement(i.E,{variant:i.A.pagination,"data-ouia-component-id":`${n}-pagination`},s),d))}},16623:(e,t,n)=>{"use strict";n.d(t,{p8:()=>l,aJ:()=>o});var a,r=n(66029);!function(e){e.PAGE="page",e.PER_PAGE="perPage"}(a||(a={}));const l=({page:e=1,perPage:t,searchParams:n,setSearchParams:l,pageParam:o=a.PAGE,perPageParam:i=a.PER_PAGE})=>{const[c,s]=(0,r.useState)({page:parseInt((null==n?void 0:n.get(o))||`${e}`),perPage:parseInt((null==n?void 0:n.get(i))||`${t}`)}),d=(e,t)=>{if(n&&l){const a=new URLSearchParams(n);a.set(o,`${e}`),a.set(i,`${t}`),l(a)}};return(0,r.useEffect)((()=>{d(c.page,c.perPage)}),[]),(0,r.useEffect)((()=>{const e=parseInt((null==n?void 0:n.get(o))||`${c.page}`),t=parseInt((null==n?void 0:n.get(i))||`${c.perPage}`);e===c.page&&t===c.perPage||s({page:e,perPage:t})}),[null==n?void 0:n.toString()]),Object.assign(Object.assign({},c),{onPerPageSelect:(e,t)=>{d(1,t),s({perPage:t,page:1})},onSetPage:(e,t)=>{d(t,c.perPage),s((e=>Object.assign(Object.assign({},e),{page:t})))}})},o=({matchOption:e,initialSelected:t=[]})=>{const[n,a]=(0,r.useState)(t);return{selected:n,onSelect:(t,n)=>{a(t&&n?t=>{const a=[...t];return(Array.isArray(n)?n:[n]).forEach((n=>!t.some((t=>e(t,n)))&&a.push(n))),a}:n?t=>t.filter((t=>!(Array.isArray(n)?n:[n]).some((n=>e(n,t))))):[])},isSelected:t=>Boolean(n.find((n=>e(n,t))))}}},93302:(e,t,n)=>{"use strict";n.d(t,{nw:()=>o,Vv:()=>i});var a=n(66029),r=n.n(a);const l=(0,a.createContext)({selection:void 0}),o=({children:e,selection:t})=>r().createElement(l.Provider,{value:{selection:t}},e),i=()=>(0,a.useContext)(l)},71305:(e,t,n)=>{"use strict";n.d(t,{k:()=>s});var a=n(65353),r=n(66029),l=n(38296),o=n(78632),i=n(78108),c=n(8128);const s=e=>{var{className:t,rowProps:n,row:s}=e,d=(0,a.__rest)(e,["className","rowProps","row"]);const{"aria-level":u,"aria-posinset":p,"aria-setsize":m,isExpanded:b,isDetailsExpanded:v,isHidden:g}=s.props;return r.createElement(c.Tr,Object.assign({"aria-level":u,"aria-posinset":p,"aria-setsize":m,"aria-expanded":!!b,isHidden:g,className:(0,l.css)(t,b&&o.Z.modifiers.expanded,v&&i.Z.modifiers.treeViewDetailsExpanded)},d))};s.displayName="TreeRowWrapper"},92084:()=>{},97236:()=>{},38299:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/1422.952c7ee4178271f5284987045e1d6b8c.js.map
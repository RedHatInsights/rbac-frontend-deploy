(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[154],{73154:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var i=n(80150),a=n.n(i),s=n(45697),r=n.n(s),p=n(63038),o=n.n(p),l=n(319),c=n.n(l),u=n(52192),f=n(77404),m=n(65565),y=function(e){var t=e.apps,n=(0,i.useContext)(u.Z),s=(0,i.useState)(""),r=o()(s,2),p=r[0],l=r[1],y=(0,i.useState)(""),v=o()(y,2),d=v[0],g=v[1],h=(0,i.useState)([]),b=o()(h,2),k=b[0],F=b[1],x=function(e){var t=e.name,n=e.application,i=e.permission;"string"==typeof t&&l(t),"string"==typeof i&&g(i),n&&F("string"==typeof n?[]:n)},O=function(e){var t=e.isOrgAdmin,n=e.name,i=void 0===n?"":n,a=e.application,s=e.permission,r=void 0===s?"":s;return[{key:"application",value:void 0===a?[]:a,placeholder:"Filter by application",type:"checkbox",items:e.apps.map((function(e){return{label:e,value:e}}))}].concat(c()(t?[{key:"name",type:"text",value:i},{key:"permission",value:r,placeholder:"Filter by permission",type:"text"}]:[]))}({apps:t,isOrgAdmin:n,name:p,application:k,permission:d});return n?a().createElement(m.Z,{setFilters:x,filters:O,apps:t}):a().createElement(f.Z,{setFilters:x,filters:O,apps:t,hasActiveFilters:p.length>0||k.length>0})};y.propTypes={apps:r().arrayOf(r().string).isRequired};const v=y;var d=function(e){var t=e.apps;return a().createElement(v,{apps:t})};d.propTypes={apps:r().arrayOf(r().string).isRequired};const g=d}}]);
//# sourceMappingURL=154.c03cd51bec3d5055b532.js.map
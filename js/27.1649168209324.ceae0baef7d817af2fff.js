(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[27,730],{64107:(t,n,e)=>{"use strict";e.d(n,{Z:()=>a});var r=e(96985),i=e.n(r),o=e(29165);const a=function(t){var n=t.date,e=t.type,r=void 0===e?"relative":e,a=t.extraTitle,c=t.tooltipProps,u=n instanceof Date?n:new Date(n),l=null==n||"Invalid Date"===u.toString()?"invalid":r;return i().createElement(i().Fragment,null,(0,o.iq)(l,c,a)(u))}},29165:(t,n,e)=>{"use strict";e.d(n,{Z$:()=>h,iq:()=>v,y_:()=>g});var r=e(96985),i=e.n(r),o=e(75857),a=function(){return a=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},a.apply(this,arguments)},c=36e5,u=24*c,l=30*u,s=365*u,p=function(t,n){return"".concat(t," ").concat(t>1?"".concat(n,"s"):n," ago")},f=[{rightBound:1/0,description:function(t){return p(Math.round(t/s),"year")}},{rightBound:s,description:function(t){return p(Math.round(t/l),"month")}},{rightBound:l,description:function(t){return p(Math.round(t/u),"day")}},{rightBound:u,description:function(t){return p(Math.round(t/c),"hour")}},{rightBound:c,description:function(t){return p(Math.round(t/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],d=function(t){return t.toUTCString().split(",")[1].slice(0,-7).trim()},h=function(t,n,e,r){return void 0===r&&(r=""),i().createElement(o.Tooltip,a({},e,{content:i().createElement("div",null,r,t)}),n)},g=function(t){return{exact:function(t){return d(t)+" UTC"},onlyDate:function(t){return d(t).slice(0,-6)},relative:function(t){return f.reduce((function(n,e){return e.rightBound>Date.now()-t.getTime()?e.description(Date.now()-t.getTime()):n}),d(t))},invalid:function(){return"Invalid date"}}[t]},v=function(t,n,e){return{exact:function(n){return g(t)(n)},onlyDate:function(n){return g(t)(n)},relative:function(r){return h(g("exact")(r),i().createElement("span",null,g(t)(r)),n,e)},invalid:function(){return"Invalid date"}}[t]}},80123:(t,n,e)=>{"use strict";e.d(n,{Z:()=>l});var r=e(96985),i=e.n(r),o=e(94184),a=e.n(o),c=e(53754),u=function(){return u=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},u.apply(this,arguments)};const l=function(t){var n=t.className,e=t.children,r=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(e[r[i]]=t[r[i]])}return e}(t,["className","children"]),o=a()(n,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return i().createElement(c.Z.Consumer,null,(function(t){var n,c;void 0===t&&(t="light");var l=a()(((n={})["pf-m-".concat(t,"-200")]="dark"===t,n),((c={})["pf-m-light"]="light"===t,c));return i().createElement("section",u({},r,{className:"".concat(o," ").concat(l),"widget-type":"InsightsPageHeader"}),e)}))}},39173:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(96985),i=e.n(r),o=e(94184),a=e.n(o),c=e(75857);const u=function(t){var n=t.className,e=t.title,r=a()(n);return i().createElement(c.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},e)}},44873:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(96985),i=e.n(r),o=e(94184),a=e.n(o),c=function(){return c=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},c.apply(this,arguments)};const u=function(t){var n,e=t.type,r=t.children,o=t.className,u=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(e[r[i]]=t[r[i]])}return e}(t,["type","children","className"]),l=a()(o,((n={})["ins-l-".concat(e)]=void 0!==e,n));return i().createElement("section",c({},u,{className:l})," ",r," ")}},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
//# sourceMappingURL=../sourcemaps/27.1e08842cb28c1e7480e1d1630cfe7602.js.map
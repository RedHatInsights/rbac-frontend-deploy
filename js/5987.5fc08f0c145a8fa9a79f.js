(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[5987,7730],{53754:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i});var r=e(92950);const i=e.n(r)().createContext("light")},64107:(t,n,e)=>{"use strict";e.d(n,{Z:()=>a});var r=e(85893),i=e(92950),o=e.n(i),c=e(29165);const a=function(t){var n=t.date,e=t.type,i=void 0===e?"relative":e,a=t.extraTitle,u=t.tooltipProps,s=n instanceof Date?n:new Date(n),l=null==n||"Invalid Date"===s.toString()?"invalid":i;return(0,r.jsx)(o().Fragment,{children:(0,c.iq)(l,u,a)(s)})}},29165:(t,n,e)=>{"use strict";e.d(n,{Z$:()=>d,iq:()=>g,y_:()=>h});var r=e(85893),i=e(76857),o=function(){return o=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},o.apply(this,arguments)},c=36e5,a=24*c,u=30*a,s=365*a,l=function(t,n){return"".concat(t," ").concat(t>1?"".concat(n,"s"):n," ago")},p=[{rightBound:1/0,description:function(t){return l(Math.round(t/s),"year")}},{rightBound:s,description:function(t){return l(Math.round(t/u),"month")}},{rightBound:u,description:function(t){return l(Math.round(t/a),"day")}},{rightBound:a,description:function(t){return l(Math.round(t/c),"hour")}},{rightBound:c,description:function(t){return l(Math.round(t/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],f=function(t){return t.toUTCString().split(",")[1].slice(0,-7).trim()},d=function(t,n,e,c){return void 0===c&&(c=""),(0,r.jsx)(i.Tooltip,o({},e,{content:(0,r.jsxs)("div",{children:[c,t]})},{children:n}))},h=function(t){return{exact:function(t){return f(t)+" UTC"},onlyDate:function(t){return f(t).slice(0,-6)},relative:function(t){return p.reduce((function(n,e){return e.rightBound>Date.now()-t.getTime()?e.description(Date.now()-t.getTime()):n}),f(t))},invalid:function(){return"Invalid date"}}[t]},g=function(t,n,e){return{exact:function(n){return h(t)(n)},onlyDate:function(n){return h(t)(n)},relative:function(i){return d(h("exact")(i),(0,r.jsx)("span",{children:h(t)(i)}),n,e)},invalid:function(){return"Invalid date"}}[t]}},80123:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(85893),i=e(94184),o=e.n(i),c=e(53754),a=function(){return a=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},a.apply(this,arguments)};const u=function(t){var n=t.className,e=t.children,i=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(e[r[i]]=t[r[i]])}return e}(t,["className","children"]),u=o()(n,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(c.Z.Consumer,{children:function(t){var n,c;void 0===t&&(t="light");var s=o()(((n={})["pf-m-".concat(t,"-200")]="dark"===t,n),((c={})["pf-m-light"]="light"===t,c));return(0,r.jsx)("section",a({},i,{className:"".concat(u," ").concat(s),"widget-type":"InsightsPageHeader"},{children:e}))}})}},39173:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(85893),i=e(94184),o=e.n(i),c=e(76857),a=function(){return a=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},a.apply(this,arguments)};const u=function(t){var n=t.className,e=t.title,i=o()(n);return(0,r.jsx)(c.Title,a({headingLevel:"h1",size:"2xl",className:i,"widget-type":"InsightsPageHeaderTitle"},{children:e}))}},44873:(t,n,e)=>{"use strict";e.d(n,{Z:()=>a});var r=e(85893),i=e(94184),o=e.n(i),c=function(){return c=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},c.apply(this,arguments)};const a=function(t){var n,e=t.type,i=t.children,a=t.className,u=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(e[r[i]]=t[r[i]])}return e}(t,["type","children","className"]),s=o()(a,((n={})["ins-l-".concat(e)]=void 0!==e,n));return(0,r.jsxs)("section",c({},u,{className:s},{children:[" ",i," "]}))}},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
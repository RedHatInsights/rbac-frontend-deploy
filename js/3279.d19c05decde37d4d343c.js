(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[3279],{27561:(t,n,r)=>{var e=r(67990),i=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(i,""):t}},67990:t=>{var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},23279:(t,n,r)=>{var e=r(13218),i=r(7771),o=r(14841),u=Math.max,a=Math.min;t.exports=function(t,n,r){var f,c,s,v,p,l,d=0,h=!1,m=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var r=f,e=c;return f=c=void 0,d=n,v=t.apply(e,r)}function T(t){return d=t,p=setTimeout(y,n),h?g(t):v}function b(t){var r=t-l;return void 0===l||r>=n||r<0||m&&t-d>=s}function y(){var t=i();if(b(t))return w(t);p=setTimeout(y,function(t){var r=n-(t-l);return m?a(r,s-(t-d)):r}(t))}function w(t){return p=void 0,x&&f?g(t):(f=c=void 0,v)}function k(){var t=i(),r=b(t);if(f=arguments,c=this,l=t,r){if(void 0===p)return T(l);if(m)return clearTimeout(p),p=setTimeout(y,n),g(l)}return void 0===p&&(p=setTimeout(y,n)),v}return n=o(n)||0,e(r)&&(h=!!r.leading,s=(m="maxWait"in r)?u(o(r.maxWait)||0,n):s,x="trailing"in r?!!r.trailing:x),k.cancel=function(){void 0!==p&&clearTimeout(p),d=0,f=l=c=p=void 0},k.flush=function(){return void 0===p?v:w(i())},k}},7771:(t,n,r)=>{var e=r(55639);t.exports=function(){return e.Date.now()}},14841:(t,n,r)=>{var e=r(27561),i=r(13218),o=r(33448),u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(i(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=i(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=a.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}}}]);
//# sourceMappingURL=../sourcemaps/3279.cca3fd737c58f8a22a09.js.map
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[3279],{23279:(t,n,r)=>{var i=r(13218),e=r(7771),u=r(14841),o=Math.max,a=Math.min;t.exports=function(t,n,r){var f,c,s,v,p,l,d=0,m=!1,h=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var r=f,i=c;return f=c=void 0,d=n,v=t.apply(i,r)}function T(t){return d=t,p=setTimeout(y,n),m?g(t):v}function b(t){var r=t-l;return void 0===l||r>=n||r<0||h&&t-d>=s}function y(){var t=e();if(b(t))return w(t);p=setTimeout(y,function(t){var r=n-(t-l);return h?a(r,s-(t-d)):r}(t))}function w(t){return p=void 0,x&&f?g(t):(f=c=void 0,v)}function k(){var t=e(),r=b(t);if(f=arguments,c=this,l=t,r){if(void 0===p)return T(l);if(h)return clearTimeout(p),p=setTimeout(y,n),g(l)}return void 0===p&&(p=setTimeout(y,n)),v}return n=u(n)||0,i(r)&&(m=!!r.leading,s=(h="maxWait"in r)?o(u(r.maxWait)||0,n):s,x="trailing"in r?!!r.trailing:x),k.cancel=function(){void 0!==p&&clearTimeout(p),d=0,f=l=c=p=void 0},k.flush=function(){return void 0===p?v:w(e())},k}},7771:(t,n,r)=>{var i=r(55639);t.exports=function(){return i.Date.now()}},14841:(t,n,r)=>{var i=r(13218),e=r(33448),u=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(e(t))return NaN;if(i(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=i(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=a.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):o.test(t)?NaN:+t}}}]);
//# sourceMappingURL=../sourcemaps/3279.86af1bf78d085d74960f.js.map
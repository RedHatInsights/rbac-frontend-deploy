(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[705],{46441:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});n(90484);var i=n(489),r=n(92950),s=n.n(r),u=n(45697),a=n.n(u),o=(n(27361),n(48880));a().oneOfType([a().string,a().func,a().object]),a().func.isRequired,a().node.isRequired,a().bool,a().func.isRequired,a().node.isRequired,a().func.isRequired;var c=function(e){var t=e.renderNextButton,n=e.disableBack,u=e.handlePrev,a=e.buttonLabels,c=a.cancel,d=a.back,l=e.context,p=(0,o.default)(),b=(0,r.useContext)(l),f=b.success,R=b.error,q=b.submitting;return f||void 0===R||R||q?null:s().createElement(r.Fragment,null,t(),s().createElement(i.Button,{type:"button",variant:"secondary",isDisabled:n,onClick:u},d),s().createElement(i.Button,{type:"button",variant:"link",onClick:p.onCancel},c))};c.propTypes={disableBack:a().bool,handlePrev:a().func.isRequired,handleNext:a().func.isRequired,nextStep:a().oneOfType([a().string,a().shape({when:a().string.isRequired,stepMapper:a().object.isRequired}),a().func]),buttonLabels:a().shape({submit:a().node.isRequired,cancel:a().node.isRequired,back:a().node.isRequired,next:a().node.isRequired}).isRequired,context:a().object.isRequired,renderNextButton:a().func};const d=c},65731:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(92950),r=n.n(i),s=n(489),u=n(70363),a=n(43047),o=n(45697),c=n.n(o),d=function(e){var t=e.context,n=e.title,o=e.text,c=(0,i.useContext)(u.default).jumpToStep,d=(0,i.useContext)(t).setWizardError;return r().createElement(s.EmptyState,{variant:s.EmptyStateVariant.large},r().createElement(s.EmptyStateIcon,{color:"red",icon:a.ZP}),r().createElement(s.Title,{headingLevel:"h4",size:"lg"},n),r().createElement(s.EmptyStateBody,null,o),r().createElement(s.Button,{onClick:function(){d(void 0),c(0)},variant:"primary"},"Return to Step 1"))};d.propTypes={context:c().object.isRequired,title:c().string.isRequired,text:c().string.isRequired};const l=d}}]);
//# sourceMappingURL=../sourcemaps/705.e274d5c1e1a9ce175cc3.js.map
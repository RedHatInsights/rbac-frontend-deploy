"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[705],{46441:(e,t,n)=>{n.d(t,{Z:()=>d});n(71002);var i=n(58788),r=n(92950),a=n.n(r),o=n(45697),u=n.n(o),s=(n(27361),n(48880));u().oneOfType([u().string,u().func,u().object]),u().func.isRequired,u().node.isRequired,u().bool,u().func.isRequired,u().node.isRequired,u().func.isRequired;var c=function(e){var t=e.renderNextButton,n=e.disableBack,o=e.handlePrev,u=e.buttonLabels,c=u.cancel,d=u.back,l=e.context,p=(0,s.default)(),b=(0,r.useContext)(l),f=b.success,R=b.error,q=b.submitting;return f||void 0===R||R||q?null:a().createElement(r.Fragment,null,t(),a().createElement(i.Button,{type:"button",variant:"secondary",isDisabled:n,onClick:o},d),a().createElement(i.Button,{type:"button",variant:"link",onClick:p.onCancel},c))};c.propTypes={disableBack:u().bool,handlePrev:u().func.isRequired,handleNext:u().func.isRequired,nextStep:u().oneOfType([u().string,u().shape({when:u().string.isRequired,stepMapper:u().object.isRequired}),u().func]),buttonLabels:u().shape({submit:u().node.isRequired,cancel:u().node.isRequired,back:u().node.isRequired,next:u().node.isRequired}).isRequired,context:u().object.isRequired,renderNextButton:u().func};const d=c},65731:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(92950),r=n.n(i),a=n(58788),o=n(70363),u=n(43047),s=n(45697),c=n.n(s),d=function(e){var t=e.context,n=e.title,s=e.text,c=(0,i.useContext)(o.default).jumpToStep,d=(0,i.useContext)(t).setWizardError;return r().createElement(a.EmptyState,{variant:a.EmptyStateVariant.large},r().createElement(a.EmptyStateIcon,{color:"red",icon:u.ZP}),r().createElement(a.Title,{headingLevel:"h4",size:"lg"},n),r().createElement(a.EmptyStateBody,null,s),r().createElement(a.Button,{onClick:function(){d(void 0),c(0)},variant:"primary"},"Return to Step 1"))};d.propTypes={context:c().object.isRequired,title:c().string.isRequired,text:c().string.isRequired};const l=d}}]);
//# sourceMappingURL=../sourcemaps/705.25f11bf3f314986994f5be8bb36b7272.js.map
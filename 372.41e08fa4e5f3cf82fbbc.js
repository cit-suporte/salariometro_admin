(self.webpackChunkfipe_salariometro=self.webpackChunkfipe_salariometro||[]).push([[372],{3928:(e,t,i)=>{"use strict";i.d(t,{o:()=>o,j:()=>r});var n=i(639),s=i(8583),a=i(665);let o=(()=>{class e{constructor(e,t){this.el=e,this.ngModel=t}ngDoCheck(){this.updateFilledState()}onInput(e){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.SBq),n.Y36(a.On,8))},e.\u0275dir=n.lG2({type:e,selectors:[["","pInputText",""]],hostVars:6,hostBindings:function(e,t){1&e&&n.NdJ("input",function(e){return t.onInput(e)}),2&e&&n.ekj("p-inputtext",!0)("p-component",!0)("p-filled",t.filled)}}),e})(),r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.ez]]}),e})()},6372:(e,t,i)=>{"use strict";i.r(t),i.d(t,{SenhaModule:()=>$});var n=i(3013),s=i(3758),a=i(4207),o=i(3473),r=i(8583),l=i(665),h=i(8550);class u extends h.i{constructor(e="",t="",i=""){super(),this.novaSenha=e,this.confirmacaoSenha=t,this.cdUsuario=i}}var p=i(639),d=i(4494),c=i(327);let g=(()=>{class e extends c.e{constructor(e){super("api/Login/AlterarSenha",e),this.injector=e}postAlterarSenha(e){return this.http.post(this.url,e)}}return e.\u0275fac=function(t){return new(t||e)(p.LFG(p.zs3))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=i(4719),f=i(9344),v=i(9866),T=i(8609),b=i(4020),Z=i(7238),w=i(1818),y=i(3928);const x=["input"];function S(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"i",5),p.NdJ("click",function(){return p.CHM(e),p.oxw().onMaskToggle()}),p.qZA()}if(2&e){const e=p.oxw();p.Q6J("ngClass",e.toggleIconClass())}}function A(e,t){1&e&&p.GkF(0)}function C(e,t){1&e&&p.GkF(0)}function k(e,t){if(1&e&&(p.ynx(0),p.YNc(1,C,1,0,"ng-container",8),p.BQk()),2&e){const e=p.oxw(2);p.xp6(1),p.Q6J("ngTemplateOutlet",e.contentTemplate)}}const q=function(e){return{width:e}};function I(e,t){if(1&e&&(p.TgZ(0,"div",11),p._UZ(1,"div",0),p.qZA(),p.TgZ(2,"div",12),p._uU(3),p.qZA()),2&e){const e=p.oxw(2);p.xp6(1),p.Q6J("ngClass",e.strengthClass())("ngStyle",p.VKq(3,q,e.meter?e.meter.width:"")),p.xp6(2),p.Oqu(e.infoText)}}function U(e,t){1&e&&p.GkF(0)}const L=function(e,t){return{showTransitionParams:e,hideTransitionParams:t}},z=function(e){return{value:"visible",params:e}};function J(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"div",6,7),p.NdJ("@overlayAnimation.start",function(t){return p.CHM(e),p.oxw().onAnimationStart(t)}),p.YNc(2,A,1,0,"ng-container",8),p.YNc(3,k,2,1,"ng-container",9),p.YNc(4,I,4,5,"ng-template",null,10,p.W1O),p.YNc(6,U,1,0,"ng-container",8),p.qZA()}if(2&e){const e=p.MAs(5),t=p.oxw();p.Q6J("ngClass","p-password-panel p-component")("@overlayAnimation",p.VKq(9,z,p.WLB(6,L,t.showTransitionOptions,t.hideTransitionOptions))),p.xp6(2),p.Q6J("ngTemplateOutlet",t.headerTemplate),p.xp6(1),p.Q6J("ngIf",t.contentTemplate)("ngIfElse",e),p.xp6(3),p.Q6J("ngTemplateOutlet",t.footerTemplate)}}const M={provide:l.JU,useExisting:(0,p.Gpc)(()=>O),multi:!0};let O=(()=>{class e{constructor(e,t){this.cd=e,this.config=t,this.mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",this.strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",this.feedback=!0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.overlayVisible=!1,this.focused=!1,this.unmasked=!1,this.value=null,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;default:this.contentTemplate=e.template}})}ngOnInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)}onAnimationStart(e){switch(e.toState){case"visible":this.overlay=e.element,this.overlay.style.zIndex=String(w.p.generateZIndex()),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null}}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=w.p.getOuterWidth(this.input.nativeElement)+"px",w.p.absolutePosition(this.overlay,this.input.nativeElement)):w.p.relativePosition(this.overlay,this.input.nativeElement)}onInput(e){this.value=e.target.value,this.onModelChange(this.value),this.onModelTouched()}onFocus(){this.focused=!0,this.feedback&&(this.overlayVisible=!0)}onBlur(){this.focused=!1,this.feedback&&(this.overlayVisible=!1)}onKeyUp(e){this.feedback&&(this.updateUI(e.target.value),this.overlayVisible||(this.overlayVisible=!0))}updateUI(e){let t=null,i=null;switch(this.testStrength(e)){case 1:t=this.weakText(),i={strength:"weak",width:"33.33%"};break;case 2:t=this.mediumText(),i={strength:"medium",width:"66.66%"};break;case 3:t=this.strongText(),i={strength:"strong",width:"100%"};break;default:t=this.promptText(),i=null}this.meter=i,this.infoText=t}onMaskToggle(){this.unmasked=!this.unmasked}testStrength(e){let t=0;return this.strongCheckRegExp.test(e)?t=3:this.mediumCheckRegExp.test(e)?t=2:e.length&&(t=1),t}writeValue(e){this.value=void 0===e?null:e,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new w.V(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()}bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&(this.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)}containerClass(){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":this.toggleMask}}inputFieldClass(){return{"p-password-input":!0,"p-disabled":this.disabled}}toggleIconClass(){return this.unmasked?"pi pi-eye-slash":"pi pi-eye"}strengthClass(){return`p-password-strength ${this.meter?this.meter.strength:""}`}filled(){return null!=this.value&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(n.ws.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(n.ws.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(n.ws.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(n.ws.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&("body"===this.appendTo?document.body.removeChild(this.overlay):document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(){return this.unmasked?"text":"password"}getTranslation(e){return this.config.getTranslation(e)}ngOnDestroy(){this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(p.sBO),p.Y36(n.b4))},e.\u0275cmp=p.Xpm({type:e,selectors:[["p-password"]],contentQueries:function(e,t,i){if(1&e&&p.Suo(i,n.jx,4),2&e){let e;p.iGM(e=p.CRH())&&(t.templates=e)}},viewQuery:function(e,t){if(1&e&&p.Gf(x,5),2&e){let e;p.iGM(e=p.CRH())&&(t.input=e.first)}},hostVars:4,hostBindings:function(e,t){2&e&&p.ekj("p-inputwrapper-filled",t.filled())("p-inputwrapper-focus",t.focused)},inputs:{disabled:"disabled",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",strongLabel:"strongLabel",inputId:"inputId",feedback:"feedback",appendTo:"appendTo",toggleMask:"toggleMask",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",placeholder:"placeholder"},features:[p._Bn([M])],decls:5,vars:14,consts:[[3,"ngClass","ngStyle"],["pInputText","",3,"ngClass","ngStyle","value","input","focus","blur","keyup"],["input",""],[3,"ngClass","click",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass","click"],[3,"ngClass"],["overlay",""],[4,"ngTemplateOutlet"],[4,"ngIf","ngIfElse"],["content",""],[1,"p-password-meter"],["className","p-password-info"]],template:function(e,t){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"input",1,2),p.NdJ("input",function(e){return t.onInput(e)})("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()})("keyup",function(e){return t.onKeyUp(e)}),p.qZA(),p.YNc(3,S,1,1,"i",3),p.YNc(4,J,7,11,"div",4),p.qZA()),2&e&&(p.Tol(t.styleClass),p.Q6J("ngClass",t.containerClass())("ngStyle",t.style),p.xp6(1),p.Tol(t.inputStyleClass),p.Q6J("ngClass",t.inputFieldClass())("ngStyle",t.inputStyle)("value",t.value),p.uIk("id",t.inputId)("type",t.inputType())("placeholder",t.placeholder),p.xp6(2),p.Q6J("ngIf",t.toggleMask),p.xp6(1),p.Q6J("ngIf",t.overlayVisible))},directives:[r.mk,r.PC,y.o,r.O5,r.tP],styles:[".p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}"],encapsulation:2,data:{animation:[(0,Z.X$)("overlayAnimation",[(0,Z.eR)(":enter",[(0,Z.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,Z.jt)("{{showTransitionParams}}")]),(0,Z.eR)(":leave",[(0,Z.jt)("{{hideTransitionParams}}",(0,Z.oB)({opacity:0}))])])]},changeDetection:0}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[r.ez,y.j],n.m8]}),e})();function _(e,t){1&e&&(p.TgZ(0,"h6"),p._uU(1,"Crie uma senha"),p.qZA())}function E(e,t){1&e&&(p._UZ(0,"p-divider"),p.TgZ(1,"p",12),p._uU(2,"A senha deve conter"),p.qZA(),p.TgZ(3,"ul",13),p.TgZ(4,"li"),p._uU(5,"Uma letra min\xfascula"),p.qZA(),p.TgZ(6,"li"),p._uU(7,"Uma letra mai\xfascula"),p.qZA(),p.TgZ(8,"li"),p._uU(9,"Um n\xfamero"),p.qZA(),p.TgZ(10,"li"),p._uU(11,"Um caractere especial"),p.qZA(),p.TgZ(12,"li"),p._uU(13,"M\xednimo de 8 caracteres/li> "),p.qZA(),p.qZA())}function N(e,t){1&e&&(p.TgZ(0,"small"),p._uU(1," Nova senha obrigat\xf3ria. "),p.qZA())}function R(e,t){if(1&e&&(p.TgZ(0,"div",14),p.YNc(1,N,2,0,"small",15),p.qZA()),2&e){const e=p.oxw();p.xp6(1),p.Q6J("ngIf",e.senhaVazia)}}function V(e,t){1&e&&(p.TgZ(0,"small"),p._uU(1," Confirma\xe7\xe3o obrigat\xf3ria. "),p.qZA())}function P(e,t){if(1&e&&(p.TgZ(0,"div",14),p.YNc(1,V,2,0,"small",15),p.qZA()),2&e){const e=p.oxw();p.xp6(1),p.Q6J("ngIf",e.confirmacaoVazia)}}function Q(e,t){1&e&&(p.TgZ(0,"div",14),p.TgZ(1,"small"),p._uU(2," A senha e sua confirma\xe7\xe3o est\xe3o diferentes "),p.qZA(),p.qZA())}function B(e,t){1&e&&(p.TgZ(0,"div",14),p.TgZ(1,"small"),p._uU(2," A senha deve ter ao menos 8 caracteres. "),p.qZA(),p.qZA())}function F(e,t){1&e&&(p.TgZ(0,"div",14),p.TgZ(1,"small"),p._uU(2," A senha deve ter ao menos uma letra min\xfascula, uma mai\xfascula, um n\xfamero e um caractere. "),p.qZA(),p.qZA())}let H=(()=>{class e{constructor(e,t,i,n,s,a,o,r){this.route=e,this.fb=t,this.senhaService=i,this.sessionService=n,this.router=s,this.toastr=a,this.spinner=o,this.header=r,this.item=new u,this.submitted=!1,this.showConfirmacao=!1,this.senhaVazia=!1,this.confirmacaoVazia=!1,this.senhasDiferentes=!1,this.comprimento=!1,this.atendePadrao=!1,this.form=this.fb.group({novaSenha:[null,[l.kI.required]],confirmacaoSenha:[null,[l.kI.required]]})}ngOnInit(){}alterarSenha(){const e=JSON.parse(sessionStorage.getItem("sessao_usuario")||"{}");void 0===e.nmUsuario&&this.router.navigate(["login"]),this.senhaVazia=!1,this.confirmacaoVazia=!1,this.senhasDiferentes=!1,this.comprimento=!1,this.atendePadrao=!1;var t=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$").test(this.item.novaSenha);this.submitted=!0,""===this.item.novaSenha||""===this.item.confirmacaoSenha?(this.senhaVazia=!0,this.confirmacaoVazia=!0):this.item.novaSenha!==this.item.confirmacaoSenha?this.senhasDiferentes=!0:this.item.novaSenha.length<8?this.comprimento=!0:t?(this.item.cdUsuario=e.cdUsuario,this.spinner.show(),this.senhaService.postAlterarSenha(this.item).subscribe(t=>{this.sessionService.usuario.idUsuario=e.idUsuario,this.sessionService.usuario.cdUsuario=e.cdUsuario,this.sessionService.usuario.dsEmail=e.dsEmail,this.sessionService.usuario.nmUsuario=e.nmUsuario,this.sessionService.usuario.dsPerfil=e.dsPerfil,this.sessionService.usuario.flAlteraSenha=!1,this.sessionService.usuario.flBloqueio=e.flBloqueio,this.sessionService.usuario.funcionalidadePerfil=e.funcionalidadePerfil,this.sessionService.setSessao(),this.header.fnHabilitarMenu(),this.spinner.hide(),this.router.navigate(["home"])},e=>{this.toastr.error("Imposs\xedvel redefinir senha. Tente novamente ou contate o Administrador"),this.spinner.hide()})):this.atendePadrao=!t}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(d.gz),p.Y36(l.qu),p.Y36(g),p.Y36(m.m),p.Y36(d.F0),p.Y36(f._W),p.Y36(v.t2),p.Y36(T.G))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-senha"]],decls:25,vars:7,consts:[["header","Altera\xe7\xe3o de senha","styleClass","container"],[1,"ui-grid","ui-grid-responsive","ui-grid-pad","ui-fluid",2,"margin","10px 0px"],[1,"ui-grid-row"],[1,"form-group","col-12"],[3,"ngModel","ngModelChange"],["pTemplate","header"],["pTemplate","footer"],["class","text-danger",4,"ngIf"],[1,"ui-grid-col-2"],[1,"ui-grid-col-6"],["pButton","","type","submit","label","Salvar",3,"click"],[1,"ui-grid-col-4"],[1,"p-mt-2"],[1,"p-pl-2","p-ml-2","p-mt-0",2,"line-height","1.5"],[1,"text-danger"],[4,"ngIf"]],template:function(e,t){1&e&&(p.TgZ(0,"p-panel",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"label"),p._uU(5,"Nova senha*"),p.qZA(),p.TgZ(6,"p-password",4),p.NdJ("ngModelChange",function(e){return t.item.novaSenha=e}),p.YNc(7,_,2,0,"ng-template",5),p.YNc(8,E,14,0,"ng-template",6),p.qZA(),p.YNc(9,R,2,1,"div",7),p.qZA(),p.qZA(),p.TgZ(10,"div",2),p.TgZ(11,"div",3),p.TgZ(12,"label"),p._uU(13,"Cofirma\xe7\xe3o da senha*"),p.qZA(),p.TgZ(14,"p-password",4),p.NdJ("ngModelChange",function(e){return t.item.confirmacaoSenha=e}),p.qZA(),p.YNc(15,P,2,1,"div",7),p.qZA(),p.qZA(),p.YNc(16,Q,3,0,"div",7),p.YNc(17,B,3,0,"div",7),p.YNc(18,F,3,0,"div",7),p.TgZ(19,"div",2),p.TgZ(20,"div",8),p._uU(21,"\xa0"),p.qZA(),p.TgZ(22,"div",9),p.TgZ(23,"button",10),p.NdJ("click",function(){return t.alterarSenha()}),p.qZA(),p.qZA(),p._UZ(24,"div",11),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.xp6(6),p.Q6J("ngModel",t.item.novaSenha),p.xp6(3),p.Q6J("ngIf",t.senhaVazia),p.xp6(5),p.Q6J("ngModel",t.item.confirmacaoSenha),p.xp6(1),p.Q6J("ngIf",t.confirmacaoVazia),p.xp6(1),p.Q6J("ngIf",t.senhasDiferentes),p.xp6(1),p.Q6J("ngIf",t.comprimento),p.xp6(1),p.Q6J("ngIf",t.atendePadrao))},directives:[b.s,O,l.JJ,l.On,n.jx,r.O5,a.Hq],styles:[".ui-grid-row[_ngcontent-%COMP%]{padding-top:4px;padding-bottom:6px}[_nghost-%COMP%]     .container{max-width:30rem;margin-left:300px;margin-top:200px}[_nghost-%COMP%]     input{width:380px!important}[_nghost-%COMP%]     .ui-autocomplete-dd{width:380px}"]}),e})();const j=[{path:"",component:H},{path:"home",component:H}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[d.Bz.forChild(j)],d.Bz]}),e})();var G=i(1841),W=i(4885),K=i(4466);let $=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({providers:[n.YP],imports:[[r.ez,l.UX,l.u5,G.JF,W.zH,K.m,b.Q,f.Rh,v.ef,D,o.D,a.hJ,s.$,Y]]}),e})()}}]);
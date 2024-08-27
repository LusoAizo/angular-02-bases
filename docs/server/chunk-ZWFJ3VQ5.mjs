import './polyfills.server.mjs';
import{$ as Be,A as Se,B as Ie,C as l,D as u,E as U,F as Oe,G as p,H as Ne,I as h,J as Pe,K as L,L as ae,M as le,N as ue,O as N,P as ke,Q as Te,R as je,T as Ge,X as Re,Z as He,a as Ve,aa as P,b as De,ba as D,c as be,ca as Ue,d as Me,da as ce,e as B,f as I,fa as Le,g as ie,ga as $,h as b,ha as $e,i as E,ia as We,j as C,k as M,l as g,la as ze,m as Ae,n as Ee,o as we,p as ne,q as _,r as re,ra as qe,s as f,t as a,u as oe,v as O,w as V,x as Fe,y as se,z as xe}from"./chunk-OE44INOX.mjs";import{a as d,b as m}from"./chunk-5XUXGTUW.mjs";import Nt from"crypto";var z=new Uint8Array(256),W=z.length;function de(){return W>z.length-16&&(Nt.randomFillSync(z),W=0),z.slice(W,W+=16)}var Ze=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Pt(t){return typeof t=="string"&&Ze.test(t)}var Xe=Pt;var c=[];for(let t=0;t<256;++t)c.push((t+256).toString(16).substr(1));function kt(t,e=0){let n=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!Xe(n))throw TypeError("Stringified UUID is invalid");return n}var Ke=kt;function Tt(t,e,n){t=t||{};let i=t.random||(t.rng||de)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=i[r];return e}return Ke(i)}var y=Tt;var Ye=(()=>{class t{characters=[{id:y(),name:"Goku",power:9500},{id:y(),name:"Krillin",power:1e3},{id:y(),name:"Vegeta",power:9e3}];addCharacter(n){this.characters.push(n)}deleteCharacterById(n){this.characters=this.characters.filter(i=>i.id!==n)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=ie({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Gt(t,e){if(t&1){let n=Oe();l(0,"li")(1,"span"),h(2),u(),h(3),l(4,"strong"),h(5," Power: "),u(),l(6,"span"),h(7),u(),l(8,"button",0),p("click",function(){let r=Ee(n).$implicit,o=Ne();return we(o.onDeleteCharacter(r.id))}),h(9,"X"),u()()}if(t&2){let n=e.$implicit,i=e.$index;f(2),L(" ",i+1,". "),f(),L(" ",n.name," - "),f(4),L(" ",n.power," ")}}var Je=(()=>{class t{characterList=[{id:y(),name:"Trunks",power:10}];onDelete=new _;onDeleteCharacter(n){this.onDelete.emit(n),console.log(n)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["dbz-list"]],inputs:{characterList:"characterList"},outputs:{onDelete:"onDelete"},decls:5,vars:0,consts:[[3,"click"]],template:function(i,r){i&1&&(l(0,"h3"),h(1,"Listado"),u(),l(2,"ul"),Se(3,Gt,10,3,"li",null,xe),u()),i&2&&(f(3),Ie(r.characterList))},styles:["li[_ngcontent-%COMP%]{list-style-type:none;border:.1rem solid #1c2826;border-radius:.2rem}"]})}return t})();var st=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(oe),a(re))},e.\u0275dir=g({type:e});let t=e;return t})(),at=(()=>{let e=class e extends st{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ne(e)))(o||e)}})(),e.\u0275dir=g({type:e,features:[V]});let t=e;return t})(),fe=new E("");var Ht={provide:fe,useExisting:I(()=>ee),multi:!0};function Bt(){let t=ce()?ce().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ut=new E(""),ee=(()=>{let e=class e extends st{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Bt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(oe),a(re),a(Ut,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(v){return o._handleInput(v.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(v){return o._compositionEnd(v.target.value)})},features:[N([Ht]),V]});let t=e;return t})();var lt=new E(""),ut=new E("");function ct(t){return t!=null}function dt(t){return Ge(t)?De(t):t}function ht(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function ft(t,e){return e.map(n=>n(t))}function Lt(t){return!t.validate}function pt(t){return t.map(e=>Lt(e)?e:n=>e.validate(n))}function $t(t){if(!t)return null;let e=t.filter(ct);return e.length==0?null:function(n){return ht(ft(n,e))}}function pe(t){return t!=null?$t(pt(t)):null}function Wt(t){if(!t)return null;let e=t.filter(ct);return e.length==0?null:function(n){let i=ft(n,e).map(dt);return Me(i).pipe(be(ht))}}function me(t){return t!=null?Wt(pt(t)):null}function Qe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function zt(t){return t._rawValidators}function qt(t){return t._rawAsyncValidators}function he(t){return t?Array.isArray(t)?t:[t]:[]}function Z(t,e){return Array.isArray(t)?t.includes(e):t===e}function et(t,e){let n=he(e);return he(t).forEach(r=>{Z(n,r)||n.push(r)}),n}function tt(t,e){return he(e).filter(n=>!Z(t,n))}var X=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=pe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=me(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},x=class extends X{get formDirective(){return null}get path(){return null}},H=class extends X{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},K=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Zt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},nn=m(d({},Zt),{"[class.ng-submitted]":"isSubmitted"}),mt=(()=>{let e=class e extends K{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(H,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&se("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[V]});let t=e;return t})(),gt=(()=>{let e=class e extends K{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(x,10))},e.\u0275dir=g({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&se("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[V]});let t=e;return t})();var k="VALID",q="INVALID",w="PENDING",T="DISABLED",S=class{},Y=class extends S{constructor(e,n){super(),this.value=e,this.source=n}},G=class extends S{constructor(e,n){super(),this.pristine=e,this.source=n}},R=class extends S{constructor(e,n){super(),this.touched=e,this.source=n}},F=class extends S{constructor(e,n){super(),this.status=e,this.source=n}};function vt(t){return(te(t)?t.validators:t)||null}function Xt(t){return Array.isArray(t)?pe(t):t||null}function _t(t,e){return(te(e)?e.asyncValidators:t)||null}function Kt(t){return Array.isArray(t)?me(t):t||null}function te(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Yt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new B(1e3,"");if(!i[n])throw new B(1001,"")}function Jt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new B(1002,"")})}var J=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=P(()=>this.statusReactive()),this.statusReactive=O(void 0),this._pristine=P(()=>this.pristineReactive()),this.pristineReactive=O(!0),this._touched=P(()=>this.touchedReactive()),this.touchedReactive=O(!1),this._events=new Ve,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return D(this.statusReactive)}set status(e){D(()=>this.statusReactive.set(e))}get valid(){return this.status===k}get invalid(){return this.status===q}get pending(){return this.status==w}get disabled(){return this.status===T}get enabled(){return this.status!==T}get pristine(){return D(this.pristineReactive)}set pristine(e){D(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return D(this.touchedReactive)}set touched(e){D(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(et(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(et(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(tt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(tt(e,this._rawAsyncValidators))}hasValidator(e){return Z(this._rawValidators,e)}hasAsyncValidator(e){return Z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(m(d({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new R(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new R(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(m(d({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new G(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new G(!0,i))}markAsPending(e={}){this.status=w;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new F(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(m(d({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=T,this.errors=null,this._forEachChild(r=>{r.disable(m(d({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,i)),this._events.next(new F(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=k,this._forEachChild(i=>{i.enable(m(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===k||this.status===w)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Y(this.value,n)),this._events.next(new F(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(m(d({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?T:k}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=dt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new F(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?T:this.errors?q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(q)?q:k}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new G(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new R(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){te(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Xt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Kt(this._rawAsyncValidators)}},Q=class extends J{constructor(e,n,i){super(vt(n),_t(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Jt(this,!0,e),Object.keys(e).forEach(i=>{Yt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ge=new E("CallSetDisabledState",{providedIn:"root",factory:()=>ve}),ve="always";function Qt(t,e){return[...e.path,t]}function yt(t,e,n=ve){Ct(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ti(t,e),ni(t,e),ii(t,e),ei(t,e)}function it(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function ei(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Ct(t,e){let n=zt(t);e.validator!==null?t.setValidators(Qe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=qt(t);e.asyncValidator!==null?t.setAsyncValidators(Qe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();it(e._rawValidators,r),it(e._rawAsyncValidators,r)}function ti(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Vt(t,e)})}function ii(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Vt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Vt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ni(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function ri(t,e){t==null,Ct(t,e)}function oi(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function si(t){return Object.getPrototypeOf(t.constructor)===at}function ai(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function li(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===ee?n=o:si(o)?i=o:r=o}),r||i||n||null}var ui={provide:x,useExisting:I(()=>_e)},j=Promise.resolve(),_e=(()=>{let e=class e extends x{get submitted(){return D(this.submittedReactive)}constructor(i,r,o){super(),this.callSetDisabledState=o,this._submitted=P(()=>this.submittedReactive()),this.submittedReactive=O(!1),this._directives=new Set,this.ngSubmit=new _,this.form=new Q({},pe(i),me(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){j.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),yt(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){j.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){j.then(()=>{let r=this._findContainer(i.path),o=new Q({});ri(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){j.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){j.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submittedReactive.set(!0),ai(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(a(lt,10),a(ut,10),a(ge,8))},e.\u0275dir=g({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&p("submit",function(v){return o.onSubmit(v)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[N([ui]),V]});let t=e;return t})();function nt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function rt(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ci=class extends J{constructor(e=null,n,i){super(vt(n),_t(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),te(n)&&(n.nonNullable||n.initialValueIsDefault)&&(rt(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){nt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){nt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){rt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var di={provide:H,useExisting:I(()=>ye)},ot=Promise.resolve(),ye=(()=>{let e=class e extends H{constructor(i,r,o,s,v,Ot){super(),this._changeDetectorRef=v,this.callSetDisabledState=Ot,this.control=new ci,this._registered=!1,this.name="",this.update=new _,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=li(this,s)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),oi(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){yt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ot.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Be(r);ot.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Qt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a(x,9),a(lt,10),a(ut,10),a(fe,10),a(He,8),a(ge,8))},e.\u0275dir=g({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[N([di]),V,Ae]});let t=e;return t})(),Dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=g({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})(),hi={provide:fe,useExisting:I(()=>Ce),multi:!0},Ce=(()=>{let e=class e extends at{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ne(e)))(o||e)}})(),e.\u0275dir=g({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){r&1&&p("input",function(v){return o.onChange(v.target.value)})("blur",function(){return o.onTouched()})},features:[N([hi]),V]});let t=e;return t})();var fi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=M({type:e}),e.\u0275inj=b({});let t=e;return t})();var bt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ge,useValue:i.callSetDisabledState??ve}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=M({type:e}),e.\u0275inj=b({imports:[fi]});let t=e;return t})();var Mt=(()=>{class t{onNewCharacter=new _;character={id:y(),name:"",power:0};emitCharacter(){if(console.log(this.character),this.character.name.length===0)return;let n=d({},this.character);this.onNewCharacter.emit(n),this.character.name="",this.character.power=0}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["dbz-add-character"]],outputs:{onNewCharacter:"onNewCharacter"},decls:10,vars:5,consts:[[3,"ngSubmit"],["id","inputNombre","type","text","name","name","placeholder","Nombre",3,"ngModelChange","ngModel"],["id","inputPoder","type","number","name","power","placeholder","Poder",3,"ngModelChange","ngModel"],["id","btnAgregar","type","submit"]],template:function(i,r){i&1&&(l(0,"h3"),h(1,"Agregar Personaje"),u(),l(2,"form",0),p("ngSubmit",function(){return r.emitCharacter()}),l(3,"input",1),ue("ngModelChange",function(s){return le(r.character.name,s)||(r.character.name=s),s}),u(),l(4,"input",2),ue("ngModelChange",function(s){return le(r.character.power,s)||(r.character.power=s),s}),u(),l(5,"button",3),h(6," Agregar "),u(),l(7,"pre"),h(8),Te(9,"json"),u()()),i&2&&(f(3),ae("ngModel",r.character.name),f(),ae("ngModel",r.character.power),f(4),Pe(je(9,3,r.character)))},dependencies:[Dt,ee,Ce,mt,gt,ye,_e,Le],styles:["#btnAgregar[_ngcontent-%COMP%]{color:#fff;background-color:#1e96fc;border-radius:.3rem}#btnAgregar[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000;border:.1rem solid #1c2826}#inputNombre[_ngcontent-%COMP%], #inputPoder[_ngcontent-%COMP%], #btnAgregar[_ngcontent-%COMP%]{display:block;width:50%}"]})}return t})();var At=(()=>{class t{dbzService;constructor(n){this.dbzService=n}get characters(){return[...this.dbzService.characters]}onDeleteCharacter(n){this.dbzService.deleteCharacterById(n)}onNewCharacter(n){this.dbzService.addCharacter(n)}static \u0275fac=function(i){return new(i||t)(a(Ye))};static \u0275cmp=C({type:t,selectors:[["app-dbz-main-page"]],decls:8,vars:1,consts:[[1,"container"],["id","listado"],[3,"onDelete","characterList"],["id","formulario"],[3,"onNewCharacter"]],template:function(i,r){i&1&&(l(0,"h1"),h(1,"DBZ main page"),u(),U(2,"hr"),l(3,"div",0)(4,"div",1)(5,"dbz-list",2),p("onDelete",function(s){return r.onDeleteCharacter(s)}),u()(),l(6,"div",3)(7,"dbz-add-character",4),p("onNewCharacter",function(s){return r.onNewCharacter(s)}),u()()()),i&2&&(f(5),Fe("characterList",r.characters))},dependencies:[Je,Mt],styles:["#listado[_ngcontent-%COMP%], #formulario[_ngcontent-%COMP%]{width:50%;box-sizing:border-box}.container[_ngcontent-%COMP%]{display:flex}"],changeDetection:0})}return t})();var Et=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=b({imports:[$,bt]})}return t})();var wt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=b({imports:[$]})}return t})();var Ft=(()=>{class t{title="02-bases";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=C({type:t,selectors:[["app-root"]],standalone:!0,features:[ke],decls:1,vars:0,template:function(i,r){i&1&&U(0,"app-dbz-main-page")},dependencies:[wt,Et,At]})}return t})();var xt=[];var St={providers:[Re({eventCoalescing:!0}),qe(xt),We()]};var vi={providers:[ze()]},It=Ue(St,vi);var _i=()=>$e(Ft,It),Wn=_i;export{Wn as a};

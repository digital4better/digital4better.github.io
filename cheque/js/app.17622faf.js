(function(e){function t(t){for(var a,u,l=t[0],o=t[1],c=t[2],d=0,p=[];d<l.length;d++)u=l[d],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&p.push(i[u][0]),i[u]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);s&&s(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},i={app:0},r=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/cheque/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21af":function(e,t,n){},4005:function(e,t,n){},"41da":function(e,t,n){"use strict";n("f768")},4925:function(e,t,n){},"4ca5":function(e,t,n){"use strict";n("78e3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("Cheque")],1)},r=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"cheque__container",class:e.selected},[n("form",{staticClass:"cheque__form",on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("div",{staticClass:"cheque__wrapper"},[n("div",{staticClass:"cheque__left"},[e.montantLetter?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.montantLetter,expression:"montantLetter"}],staticClass:"cheque__montantLettre",attrs:{readonly:"true","aria-disabled":"true",rows:"2",maxlength:"130",id:"montantLettre"},domProps:{value:e.montantLetter},on:{input:function(t){t.target.composing||(e.montantLetter=t.target.value)}}}):e._e(),n("RecipientInput",{model:{value:e.recipient,callback:function(t){e.recipient=t},expression:"recipient"}})],1),n("AmountInput",{on:{montantLettre:e.returnMontant}})],1),n("div",{staticClass:"cheque__date__wrapper"},[n("CityInput",{model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),n("DateInput",{model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),n("div",{staticClass:"cheque__nb__wrapper"},[e.bankList&&e.bankList.length?n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"cheque__banks select",attrs:{tabindex:"1"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.bankList,(function(t,a){return n("option",{key:a+"-bank",domProps:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),0):e._e()])])]),e.recipient&&e.city&&e.date?n("button",{staticClass:"printBtn",on:{click:e.PrintWindow}},[e._v(" Imprimer ")]):e._e()])},l=[],o=(n("38cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cheque__date"},[n("span",[e._v("LE")]),n("input",{attrs:{type:"date","aria-label":"choisissez la date"},domProps:{value:e.changedvalue},on:{input:function(t){return e.handleInput(t.target.value)}}})])}),c=[],s={name:"DateInput",data:function(){return{changedvalue:null}},props:{value:{type:String,require:!0}},mounted:function(){this.changedvalue=this.value},methods:{handleInput:function(e){this.changedvalue=e,this.$emit("input",this.changedvalue)}}},d=s,p=(n("eb28"),n("2877")),m=Object(p["a"])(d,o,c,!1,null,"0bae6334",null),v=m.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cheque__form__destinataire"},[n("span",[e._v("à")]),n("input",{attrs:{type:"text",id:"chequeDestinataire","aria-label":"entrez le nom de votre destinataire",maxlength:"78"},domProps:{value:e.changedvalue},on:{input:function(t){return e.handleInput(t.target.value)},blur:e.addAsterics}})])},h=[],_={name:"RecipientInput",data:function(){return{changedvalue:null}},props:{value:{type:String,require:!0}},mounted:function(){this.changedvalue=this.value},methods:{handleInput:function(e){this.changedvalue=e},addAsterics:function(){var e=document.getElementById("chequeDestinataire").getAttribute("maxlength"),t=document.getElementById("chequeDestinataire").value.length,n="*".repeat(e-t);null!=this.changedvalue&&(this.changedvalue+=" ".concat(n),this.$emit("input",this.changedvalue))}}},g=_,b=(n("f646"),Object(p["a"])(g,f,h,!1,null,"d469ab60",null)),y=b.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cheque__form__montant cheque__input__wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.montant,expression:"montant"}],attrs:{tabindex:"2",type:"text","aria-label":"entrez le montant du chèque avec maximum deux chiffres après la virgule",oninput:"this.value = this.value.replace(/[^0-9,]/g, '')"},domProps:{value:e.montant},on:{input:[function(t){t.target.composing||(e.montant=t.target.value)},e.twoDigitMax]}}),n("button",{staticClass:"validateBtn",attrs:{"aria-label":"valider"},on:{click:e.returnMontant}},[e._v("Valider")])])},C=[],x=(n("caad"),n("2532"),n("1276"),n("ac1f"),n("99af"),{name:"AmountInput",data:function(){return{montant:"0,00"}},methods:{addAsterics:function(e){console.log(e),this.montant="*** ".concat(e," *** ")},twoDigitMax:function(){var e=this.montant;if(e.includes(",")){var t=e.split(",");if(2===t.length){var n=t[1].length>2?2:t[1].length;this.montant=t[0]+","+t[1].substring(0,n)}}},returnMontant:function(e){e.preventDefault();var t=this.montant,a=t.includes(",");this.montant+=a?"":",00";var i=this.montant.split(","),r=i[0],u=i[1],l=n("b69d"),o=l(r,{lang:"fr"}),c=l(u,{lang:"fr"}),s="00"===u?"":c,d="01"===u?"centime":"centimes",p="1"===r?"euro":"euros",m="".concat(o," ").concat(p);m+=s?" et ".concat(s," ").concat(d):"",this.addAsterics(this.montant),this.$emit("montantLettre",m)}}}),L=x,w=(n("41da"),Object(p["a"])(L,q,C,!1,null,"3070b01c",null)),I=w.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cheque__form__ville"},[n("span",[e._v("À")]),n("input",{attrs:{type:"text","aria-label":"renseignez le nom de votre ville"},domProps:{value:e.changedvalue},on:{input:function(t){return e.handleInput(t.target.value)}}})])},B=[],O={name:"CityInput",data:function(){return{changedvalue:null}},props:{value:{type:String,require:!0}},mounted:function(){this.changedvalue=this.value},methods:{handleInput:function(e){this.changedvalue=e,this.$emit("input",this.changedvalue)}}},P=O,A=(n("4ca5"),Object(p["a"])(P,k,B,!1,null,null,null)),S=A.exports,j=[{value:"axa",name:"Axa Banque"},{value:"bpop",name:"Banque populaire"},{value:"banque_kolb",name:"Banque Kolb"},{value:"banque_rhone_alpes",name:"Banque Rhône-Alpes"},{value:"banque_scalbert_dupont",name:"Banque Scalbert Dupont"},{value:"bnp",name:"BNP PARIBAS"},{value:"caisse_epargne",name:"Caisse d'épargne"},{value:"caixabank",name:"CaixaBank"},{value:"credit_industriel_commercial",name:"Crédit Industriel et Commercial"},{value:"credit_agricole",name:"Crédit Agricole [=]"},{value:"credit_agricole2",name:"Crédit Agricole [--]"},{value:"credit_cooperatif",name:"Crédit Coopératif"},{value:"credit_lyonais",name:"Crédit Lyonnais LCL [=]"},{value:"credit_lyonais2",name:"Crédit Lyonnais LCL [--]"},{value:"credit_maritime",name:"Crédit Maritime"},{value:"credit_mutuel",name:"Crédit Mutuel"},{value:"credit_nord",name:"Crédit du Nord"},{value:"fortis",name:"Fortis Banque"},{value:"hsbc",name:"HSBC"},{value:"banque_postale",name:"La Banque Postale"},{value:"lyonnaise_banque",name:"Lyonnaise de Banque"},{value:"neuflize",name:"Neuflize OBC"},{value:"societe_general",name:"Société Générale [=]"},{value:"societe_general2",name:"Société Générale [--]"},{value:"cheque_emploi_service_universel",name:"Chèque Emploi Service Universel"}],D=j,E={name:"Cheque",components:{DateInput:v,RecipientInput:y,AmountInput:I,CityInput:S},data:function(){return{montantLetter:null,selected:"bpop",bankList:[],recipient:null,city:"Nantes",date:(new Date).toISOString().substr(0,10)}},methods:{returnMontant:function(e){this.montantLetter="*** ".concat(e)},PrintWindow:function(){window.print()}},updated:function(){if(this.montantLetter){var e=document.getElementById("montantLettre").getAttribute("maxlength"),t=document.getElementById("montantLettre").value.length,n="*".repeat(e-t);this.montantLetter+=" ".concat(n)}this.$emit("datas",this.changedvalue)},mounted:function(){this.bankList=D}},M=E,$=(n("e89f"),Object(p["a"])(M,u,l,!1,null,null,null)),N=$.exports,z={name:"App",components:{Cheque:N}},R=z,T=(n("5c0b"),Object(p["a"])(R,i,r,!1,null,null,null)),G=T.exports;n("21af");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(G)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"78e3":function(e,t,n){},"9c0c":function(e,t,n){},"9e58":function(e,t,n){},e89f:function(e,t,n){"use strict";n("9e58")},eb28:function(e,t,n){"use strict";n("4005")},f646:function(e,t,n){"use strict";n("4925")},f768:function(e,t,n){}});
//# sourceMappingURL=app.17622faf.js.map
(function(E){var window=this;var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={F:!0},ea={};try{ea.__proto__=da;ca=ea.F;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba,ha=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.G=b.prototype},g=this||self,k=function(a){return"string"==typeof a},l=function(a){return"number"==typeof a},ja=function(){if(null===m)a:{var a=g.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ia.test(a)){m=a;break a}m=""}return m},ia=/^[\w+/_-]+[=]{0,2}$/,m=null,p=function(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},ka=function(){},q=function(a){a.l=void 0;a.c=function(){return a.l?a.l:a.l=new a}},r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},la="closure_uid_"+(1E9*Math.random()>>>0),ma=0,t=function(a,b){function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.H=function(d,e,f){for(var h=Array(arguments.length-2),n=2;n<arguments.length;n++)h[n-2]=arguments[n];return b.prototype[e].apply(d,h)}};var u=function(a,b){for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},na=function(a,b){for(var c=a.length,d=[],e=0,f=k(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var n=f[h];b.call(void 0,n,h,a)&&(d[e++]=n)}return d},oa=function(a,b){for(var c=a.length,d=Array(c),e=k(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},pa=function(a,b){a:{for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:k(a)?a.charAt(b):a[b]},qa=function(a,b){a:{for(var c=k(a)?a.split(""):a,d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){b=d;break a}b=-1}return 0>b?null:k(a)?a.charAt(b):a[b]};var w=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var x=function(){this.a="";this.g=ra};x.prototype.f=!0;x.prototype.b=function(){return this.a.toString()};var sa=function(a){return a instanceof x&&a.constructor===x&&a.g===ra?a.a:"type_error:TrustedResourceUrl"},ra={};var ta=function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},wa=function(a,b){var c=0;a=ta(String(a)).split(".");b=ta(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=ua(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||ua(0==f[2].length,0==h[2].length)||ua(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c},ua=function(a,b){return a<b?-1:a>b?1:0};var y=function(){this.a="";this.g=xa};y.prototype.f=!0;y.prototype.b=function(){return this.a.toString()};var ya=function(a){return a instanceof y&&a.constructor===y&&a.g===xa?a.a:"type_error:SafeUrl"},za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,xa={},Aa=function(a){var b=new y;b.a=a;return b};Aa("about:blank");var z;a:{var Ba=g.navigator;if(Ba){var Ca=Ba.userAgent;if(Ca){z=Ca;break a}}z=""};var Da=function(a,b){a.src=sa(b);(b=ja())&&a.setAttribute("nonce",b)};var A=function(a){A[" "](a);return a};A[" "]=ka;var B=function(){},Ea="function"==typeof Uint8Array,D=function(a,b,c,d){a.a=null;b||(b=[]);a.I=void 0;a.f=-1;a.h=b;a:{if(b=a.h.length){--b;var e=a.h[b];if(!(null===e||"object"!=typeof e||"array"==r(e)||Ea&&e instanceof Uint8Array)){a.g=b-a.f;a.b=e;break a}}a.g=Number.MAX_VALUE}a.v={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.g?(e+=a.f,a.h[e]=a.h[e]||C):(Fa(a),a.b[e]=a.b[e]||C);if(d&&d.length)for(b=0;b<d.length;b++)Ga(a,d[b])},C=[],Fa=function(a){var b=a.g+a.f;a.h[b]||(a.b=a.h[b]={})},F=function(a,b){if(b<a.g){b+=a.f;var c=a.h[b];return c===C?a.h[b]=[]:c}if(a.b)return c=a.b[b],c===C?a.b[b]=[]:c},G=function(a,b,c){a=F(a,b);return null==a?c:a},Ha=function(a,b){a=F(a,b);a=null==a?a:+a;return null==a?0:a},Ia=function(a,b,c){b<a.g?a.h[b+a.f]=c:(Fa(a),a.b[b]=c)},Ga=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],h=F(a,f);null!=h&&(c=f,d=h,Ia(a,f,void 0))}return c?(Ia(a,c,d),c):0},H=function(a,b,c){a.a||(a.a={});if(!a.a[c]){var d=F(a,c);d&&(a.a[c]=new b(d))}return a.a[c]},I=function(a,b,c){a.a||(a.a={});if(!a.a[c]){for(var d=F(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.a[c]=e}b=a.a[c];b==C&&(b=a.a[c]=[]);return b},Ja=function(a,b,c){a.a||(a.a={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].h;a.a[b]=c;Ia(a,b,d)};var La=function(a){Ka();var b=new x;b.a=a;return b},Ka=ka;var Ma=function(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};var Qa=function(a,b){if(!Na()&&!Oa()){var c=Math.random();if(c<b)return c=Pa(g),a[Math.floor(c*a.length)]}return null},Pa=function(a){if(!a.crypto)return Math.random();try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Oa=w(function(){return-1!=z.indexOf("Google Web Preview")||1E-4>Math.random()}),Na=w(function(){return-1!=z.indexOf("MSIE")}),Ra=/^(-?[0-9.]{1,30})$/,Sa=function(a,b){return Ra.test(a)&&(a=Number(a),!isNaN(a))?a:void 0==b?null:b},Ta=function(){try{return ja()}catch(a){}};var Ua=function(){var a=window,b=-1;try{a.localStorage&&(b=parseInt(a.localStorage.getItem("google_experiment_mod"),10))}catch(c){return null}if(0<=b&&1E3>b)return b;if(Oa())return null;b=Math.floor(1E3*Pa(a));try{if(a.localStorage)return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){}return null};var Va=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var J=null,Wa=function(){if(null===J){J="";try{var a="";try{a=g.top.location.hash}catch(c){a=g.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);J=b?b[1]:""}}catch(c){}}return J};var K=function(a){D(this,a,Xa,Ya)};t(K,B);var Xa=[2,8],Ya=[[3,4,5],[6,7]];var Za=function(a){return null!=a?!a:a},$a=function(a,b){for(var c=!1,d=0;d<a.length;d++){var e=a[d].call();if(e==b)return e;null==e&&(c=!0)}if(!c)return!b},bb=function(a,b){var c=I(a,K,2);if(!c.length)return ab(a,b);a=G(a,1,0);if(1==a)return Za(bb(c[0],b));c=oa(c,function(d){return function(){return bb(d,b)}});switch(a){case 2:return $a(c,!1);case 3:return $a(c,!0)}},ab=function(a,b){var c=Ga(a,Ya[0]);a:{switch(c){case 3:var d=G(a,3,0);break a;case 4:d=G(a,4,0);break a;case 5:d=G(a,5,0);break a}d=void 0}if(d&&(b=(b=b[c])&&b[d])){try{var e=b.apply(null,F(a,8))}catch(f){return}b=G(a,1,0);if(4==b)return!!e;d=null!=e;if(5==b)return d;a:{switch(c){case 4:a=Ha(a,6);break a;case 5:a=G(a,7,"");break a}a=void 0}if(null!=a){if(6==b)return e===a;if(9==b)return 0==wa(e,a);if(d)switch(b){case 7:return e<a;case 8:return e>a;case 12:return(new RegExp(a)).test(e);case 10:return-1==wa(e,a);case 11:return 1==wa(e,a)}}}},cb=function(a,b){return!a||!(!b||!bb(a,b))};var eb=function(a){D(this,a,db,null)};t(eb,B);var db=[4];var L=function(a){D(this,a,fb,gb)};t(L,B);var hb=function(a){D(this,a,null,null)};t(hb,B);var fb=[5],gb=[[1,2,3,6]];var M=function(){var a={};this.a=(a[3]={},a[4]={},a[5]={},a)};q(M);var ib=function(a,b){switch(b){case 1:return G(a,1,0);case 2:return G(a,2,0);case 3:return G(a,3,0);case 6:return G(a,6,0);default:return null}},jb=function(a,b){if(!a)return null;switch(b){case 1:return a=F(a,1),a=null==a?a:!!a,null==a?!1:a;case 2:return Ha(a,2);case 3:return G(a,3,"");case 6:return F(a,4);default:return null}},kb=w(function(){var a="";try{a=g.top.location.hash}catch(c){a=g.location.hash}var b={};if(a=(a=/\bdflags=({.*})(&|$)/.exec(a))&&a[1])try{b=JSON.parse(decodeURIComponent(a))}catch(c){}return b}),nb=function(a,b,c){var d=kb();if(d[a]&&null!=d[a][b])return d[a][b];b=lb.c().a[a][b];if(!b)return c;b=new L(b);b=mb(b);a=jb(b,a);return null!=a?a:c},mb=function(a){var b=M.c().a;if(b){var c=qa(I(a,hb,5),function(d){return cb(H(d,K,1),b)});if(c)return H(c,eb,2)}return H(a,eb,4)},lb=function(){var a={};this.a=(a[1]={},a[2]={},a[3]={},a[6]={},a)};q(lb);var ob=function(a,b){return nb(1,a,void 0===b?!1:b)},pb=function(a,b){return nb(2,a,void 0===b?0:b)},qb=function(a,b){return nb(3,a,void 0===b?"":b)},rb=function(a,b){b=void 0===b?[]:b;return nb(6,a,b)},sb=function(a){var b=lb.c().a;u(a,function(c){var d=Ga(c,gb[0]),e=ib(c,d);e&&(b[d][e]=c.h)})};var N=function(a){this.a=a},tb=new N(1),ub=new N(2),vb=new N(3),wb=new N(4),xb=new N(5),yb=new N(6),zb=new N(7),Ab=new N(8),Bb=new N(9),Cb=new N(10),Db=new N(11),O=function(a,b,c){c.hasOwnProperty(a.a)||Object.defineProperty(c,String(a.a),{value:b})},Eb=function(a,b){return b[a.a]||function(){}},Fb=function(a){O(xb,ob,a);O(yb,pb,a);O(zb,qb,a);O(Ab,rb,a)},Gb=function(a){O(wb,function(b){M.c().a=b},a);O(Bb,function(b,c){var d=M.c();d.a[3][b]||(d.a[3][b]=c)},a);O(Cb,function(b,c){var d=M.c();d.a[4][b]||(d.a[4][b]=c)},a);O(Db,function(b,c){var d=M.c();d.a[5][b]||(d.a[5][b]=c)},a)};var Ib=function(a){D(this,a,Hb,null)};t(Ib,B);var Hb=[2];Ib.prototype.getId=function(){return G(this,1,0)};var Kb=function(a){D(this,a,Jb,null)};t(Kb,B);var Jb=[2];var Mb=function(a){D(this,a,Lb,null)};t(Mb,B);var P=function(a){D(this,a,Nb,null)};t(P,B);var Lb=[1,2],Nb=[2];var Ob=function(a,b){var c=this,d=void 0===b?{}:b;b=void 0===d.s?!1:d.s;var e=void 0===d.w?{}:d.w;d=void 0===d.C?[]:d.C;this.b=a;this.v=b;this.f=e;this.g=d;this.a={};(a=Wa())&&u(a.split(",")||[],function(f){(f=parseInt(f,10))&&(c.a[f]=!0)})},Sb=function(a,b){var c=[],d=Pb(a,b);d&&(9!==b&&Qb(a,b),u(d,function(e){if(e=Rb(a,e)){var f=e.getId();c.push(f);a.g.push(f);(e=I(e,L,2))&&sb(e)}}));return c},Pb=function(a,b){return(a=pa(a.b,function(c){return G(c,1,0)==b}))&&I(a,Kb,2)},Qb=function(a,b){a.b=na(a.b,function(c){return G(c,1,0)!=b})},Rb=function(a,b){var c=M.c().a;if(!cb(H(b,K,3),c))return null;var d=I(b,Ib,2),e=c?na(d,function(h){return cb(H(h,K,3),c)}):d,f=e.length;if(!f)return null;d=G(b,4,0);b=f*G(b,1,0);if(!d)return Tb(a,e,b/1E3);f=null!=a.f[d]?a.f[d]:1E3;if(0>=f)return null;e=Tb(a,e,b/f);a.f[d]=e?0:f-b;return e},Tb=function(a,b,c){var d=a.a,e=pa(b,function(f){return!!d[f.getId()]});return e?e:a.v?null:Qa(b,c)},Ub=function(a,b){O(tb,function(c){a.a[c]=!0},b);O(ub,function(c){return Sb(a,c)},b);O(vb,function(){return a.g},b);Fb(b);Gb(b)};var R=function(){this.a=function(){return!1};this.b=function(){return 0};this.f=function(){return""}},Vb=function(a){var b=R.c();b.a=Eb(xb,a);b.b=Eb(yb,a);b.f=Eb(zb,a)};q(R);var Wb=function(a){var b=void 0===b?!1:b;return R.c().a(a,b)},Xb=function(a,b){b=void 0===b?"":b;return R.c().f(a,b)};var Yb=function(){};q(Yb);var Zb=w(function(){var a=g.navigator&&g.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),$b=function(a,b,c,d,e){d=void 0===d?"":d;var f=a.createElement("link");try{f.rel=c;if(-1!=c.toLowerCase().indexOf("stylesheet"))var h=sa(b).toString();else{if(b instanceof x)var n=sa(b).toString();else{if(b instanceof y)var v=ya(b);else{if(b instanceof y)var Q=b;else b="object"==typeof b&&b.f?b.b():String(b),za.test(b)||(b="about:invalid#zClosurez"),Q=Aa(b);v=ya(Q)}n=v}h=n}f.href=h}catch(va){return}d&&"preload"==c&&(f.as=d);e&&f.setAttribute("nonce",e);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(va){}};var ac=/^\.google\.(com?\.)?[a-z]{2,3}$/,bc=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,cc=function(a){return ac.test(a)&&!bc.test(a)},dc=function(a){return a.replace(/[\W]/g,function(b){return"&#"+b.charCodeAt()+";"})},S=g,ec=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(g.location.hostname)];T[3]>=+new Date&&b.push("adsid="+encodeURIComponent(T[1]));return a+"?"+b.join("&")},T,U,fc=function(){S=g;T=S.googleToken=S.googleToken||{};var a=+new Date;T[1]&&T[3]>a&&0<T[2]||(T[1]="",T[2]=-1,T[3]=-1,T[4]="",T[6]="");U=S.googleIMState=S.googleIMState||{};cc(U[1])||(U[1]=".google.com");"array"==r(U[5])||(U[5]=[]);"boolean"==typeof U[6]||(U[6]=!1);"array"==r(U[7])||(U[7]=[]);l(U[8])||(U[8]=0)},gc=function(a){try{a()}catch(b){g.setTimeout(function(){throw b;},0)}},ic=function(a){"complete"==g.document.readyState||"loaded"==g.document.readyState||g.document.currentScript&&g.document.currentScript.async?hc(3):a()},jc=0,V={i:function(){return 0<U[8]},m:function(){U[8]++},A:function(){0<U[8]&&U[8]--},B:function(){U[8]=0},j:function(){},D:function(){return!1},u:function(){return U[5]},o:gc},W={i:function(){return U[6]},m:function(){U[6]=!0},A:function(){U[6]=!1},B:function(){U[6]=!1},j:function(){},D:function(){return".google.com"!=U[1]&&2<++jc},u:function(){return U[7]},o:function(a){ic(function(){gc(a)})}},hc=function(a){if(1E-5>Math.random()){g.google_image_requests||(g.google_image_requests=[]);var b=g.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;g.google_image_requests.push(b)}};V.j=function(){if(!V.i()){var a=g.document,b=function(e){e=ec("js",e);var f=Ta();$b(a,e,"preload","script",f);f=a.createElement("script");f.type="text/javascript";f.onerror=function(){return g.processGoogleToken({},2)};e=La(e);Da(f,e);try{(a.head||a.body||a.documentElement).appendChild(f),V.m()}catch(h){}},c=U[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);g.setTimeout(function(){return g.processGoogleToken(d,1)},1E3)}};W.j=function(){if(!W.i()){var a=g.document,b=ec("sync.js",U[1]);$b(a,b,"preload","script");b=dc(b);var c=A("script"),d="",e=Ta();e&&(d='nonce="'+dc(e)+'"');var f="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");ic(function(){a.write(f);W.m()})}};var kc=function(a){fc();T[3]>=+new Date&&T[2]>=+new Date||a.j()},mc=function(){g.processGoogleToken=g.processGoogleToken||function(a,b){return lc(V,a,b)};kc(V)},nc=function(){g.processGoogleTokenSync=g.processGoogleTokenSync||function(a,b){return lc(W,a,b)};kc(W)},lc=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",e="NT"==d,f=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),n=b["1p_jar"]||"";b=b.pucrd||"";fc();1==c?a.B():a.A();if(!d&&a.D())cc(".google.com")&&(U[1]=".google.com"),a.j();else{var v=S.googleToken=S.googleToken||{},Q=0==c&&d&&k(d)&&!e&&l(f)&&0<f&&l(h)&&0<h&&k(n);e=e&&!a.i()&&(!(T[3]>=+new Date)||"NT"==T[1]);var va=!(T[3]>=+new Date)&&0!=c;if(Q||e||va)e=+new Date,f=e+1E3*f,h=e+1E3*h,hc(c),v[5]=c,v[1]=d,v[2]=f,v[3]=h,v[4]=n,v[6]=b,fc();if(Q||!a.i()){c=a.u();for(d=0;d<c.length;d++)a.o(c[d]);c.length=0}}};var oc=function(){this.a=null;this.f=this.b},pc=function(a,b){a.a=b};oc.prototype.b=function(a,b,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new Va(b,{context:a,id:void 0===e?"gpt_exception":e}));if(d||this.a)b.meta={},this.a&&this.a(b.meta),d&&d(b.meta);g.google_js_errors=g.google_js_errors||[];g.google_js_errors.push(b);g.error_rep_loaded||(b=g.document,a=b.createElement("script"),Da(a,La(g.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),g.error_rep_loaded=!0);return!1};var qc=function(a,b){try{b()}catch(c){if(!a.f(420,c,.01,void 0,"gpt_exception"))throw c;}};var rc=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(c){var d=a.google_lt_queue=a.google_lt_queue||[];u(c.getEntries(),function(e){return d.push(e)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var sc=function(a){var b=a;b=void 0===b?g:b;if(b=(b=b.performance)&&b.now?b.now():null)b={label:"1",type:9,value:b},a=a.google_js_reporting_queue=a.google_js_reporting_queue||[],2048>a.length&&a.push(b)};var tc=function(){return g.googletag||(g.googletag={})},uc=function(a,b){var c=tc();c.hasOwnProperty(a)||(c[a]=b)};var X={173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,37:.01,38:.001,58:1,76:"",150:".google.fr",211:!1,152:[],172:null,191:"001905292322390",192:"021905291911450",190:"011905291911450",245:{},180:null,230:{},246:[],227:{},226:[],241:{},220:!1,228:"//www.googletagservices.com/pubconsole/",242:!1,244:!1,243:-1};X[6]=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(d){}return!0}(window);X[49]=(new Date).getTime();X[36]=/^true$/.test("false");X[46]=/^true$/.test("false");X[148]=/^true$/.test("false");X[221]=/^true$/.test("true");X[204]=Sa("{{MOD}}",-1);var vc=function(){for(var a in X)this[a]=X[a]};q(vc);var Y=function(a){return vc.c()[a]},Z=function(a,b){vc.c()[a]=b},wc=tc(),xc=vc.c(),yc=wc._vars_,zc;for(zc in yc)xc[zc]=yc[zc];wc._vars_=xc;var Ac=function(a){Ob.call(this,a,{s:Y(211),w:Y(227),C:Y(226)})};ha(Ac,Ob);var Bc=function(){return Y(36)};var Cc=function(a,b){var c=b||Ma;return function(){var d=this||g;d=d.closure_memoize_cache_||(d.closure_memoize_cache_={});var e=c(a[la]||(a[la]=++ma),arguments);return d.hasOwnProperty(e)?d[e]:d[e]=a.apply(this,arguments)}}(function(a){return a&&a.src?/^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src)?0:1:2},function(a,b){return a+"\x0B"+(b[0]&&b[0].src)}),Dc=function(){return 0===Cc(Y(172))};var Ec=function(){return Sa("2")||0},Fc=function(){return"2019061101"};uc("getVersion",Fc);var Gc=function(){var a={};this[3]=(a[8]=function(b){return!!p(b)},a[3]=Dc,a[2]=Bc,a[9]=function(b){b=p(b);var c;if(c="function"==r(b))b=b&&b.toString&&b.toString(),c=k(b)&&-1!=b.indexOf("[native code]");return c},a[10]=function(){return window==window.top},a);a={};this[4]=(a[1]=function(){return Y(204)},a[4]=Ec,a[5]=function(){var b=Ua();return null!=b?b:void 0},a[6]=function(b){b=p(b);return l(b)?b:void 0},a);a={};this[5]=(a[2]=function(){return window.location.href},a[3]=function(){try{return window.top.location.hash}catch(b){return""}},a[4]=function(b){b=p(b);return k(b)?b:void 0},a)};q(Gc);var Hc=[],Jc=function(a){var b=Ic(new Mb(Y(246)),new Mb(a||Hc));Ac.call(this,I(b,P,2));var c=this;a=Gc.c();a[3][6]=function(d){a:{var e=c.g;d=parseInt(d,10);if(k(e))e=k(d)&&1==d.length?e.indexOf(d,0):-1;else{for(var f=0;f<e.length;f++)if(f in e&&e[f]===d){e=f;break a}e=-1}}return 0<=e};Z(241,a);sb(I(b,L,1));Z(230,lb.c().a);b=Y(245);Ub(this,b);Vb(b);Yb.c();Eb(wb,b)(a)};ha(Jc,Ac);var Ic=function(a,b){if(!I(a,L,1).length&&I(b,L,1).length){var c=I(b,L,1);Ja(a,1,c)}!I(a,P,2).length&&I(b,P,2).length&&(b=I(b,P,2),Ja(a,2,b));return a};A("partner.googleadservices.com");var Kc=A("www.googletagservices.com"),Lc=function(){return!Y(46)||Y(6)||Wb(152)?"https://securepubads.g.doubleclick.net":"http://pubads.g.doubleclick.net"},Mc=function(a){var b=a.currentScript;return"complete"!=a.readyState&&"loaded"!=a.readyState&&!(b&&b.async)},Nc=function(){var a=Y(76);if(a)return a;a=Lc();var b=Xb(4,"/gpt/pubads_impl_"),c;var d="";if(Y(148))try{var e="";try{e=g.top.location.hash}catch(h){e=g.location.hash}e&&(d=(c=e.match(/\bgptv=(\d+)/))?c[1]:"")}catch(h){}if(!(c=d)){var f=void 0===f?0:f;c=R.c().b(12,f)}c=c||Fc();f=Xb(5);a=a+b+c+".js";f&&(a+="?"+f);Z(76,a);return a},Oc=function(a,b){var c;if(!(c=a.currentScript))a:{if(a=a.scripts)for(c=0;c<a.length;c++){var d=a[c];if(-1<d.src.indexOf(Kc+"/tag/js/gpt")){c=d;break a}}c=null}Z(172,c);b=new Jc(b);Sb(b,7);Sb(b,5);Sb(b,8);b=Y(150);fc();cc(b)&&(U[1]=b)},Pc=function(){return navigator.getBattery?navigator.getBattery().then(function(a){Z(243,a.level);Z(244,a.charging);Z(242,!0)}):null},Qc=function(a,b,c){var d=tc();a=a||d.fifWin||window;b=b||a.document;uc("cmd",[]);if(d.evalScripts)d.evalScripts();else{Oc(b,c);a.PerformanceObserver&&a.PerformanceLongTaskTiming&&rc(a);sc(a);a=Nc();if(Mc(b)){c="gpt-impl-"+Math.random();try{var e='<script id="'+c+'" src="'+a+'">\x3c/script>';Wb(17)&&Zb()&&(e+='<link rel="preconnect" href="'+Lc()+'">');b.write(e)}catch(f){}b.getElementById(c)&&(d._loadStarted_=!0,Z(220,!1),nc())}d._loadStarted_||(mc(),Wb(16)&&$b(b,a,"preload","script"),c=b.createElement("script"),c.src=a,c.async=!0,(b.head||b.body||b.documentElement).appendChild(c),Wb(17)&&Zb()&&$b(b,Lc(),"preconnect"),Z(220,!0),d._loadStarted_=!0);(b=Pc())&&b.catch(function(f){var h=new oc;pc(h,function(n){n.methodId=501});h.b(501,f)})}};var Rc;a:{try{if("array"==r(E)){Rc=E;break a}}catch(a){}Rc=[]}(function(a,b,c){var d=new oc;pc(d,function(e){e.methodId=420});qc(d,function(){return Qc(a,b,c)})})(void 0,void 0,Rc);}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this,[[[null,7,null,[null,0.1]],[118,null,null,[1]],[20,null,null,[],[[[1,[[4,null,1]]],[1]]]],[null,null,8,[null,null,"/pagead/js/rum.js"]],[140,null,null,[1]],[8,null,null,[1]],[55,null,null,[1]],[null,8,null,[null,-1]],[null,1,null,[null,4096],[[[4,null,14],[null,8192]],[[4,null,15,null,null,null,null,["7646"]],[null,16384]]]],[null,null,9,[null,null,"https://securepubads.g.doubleclick.net/pagead/js/rum.js"]],[45,null,null,[]],[null,null,2,[null,null,"1-0-33"]]],[[null,[[null,[[21063438],[21063439]]],[null,[[21063445],[21063446]]],[null,[[676982601],[676982602],[676982605]]],[null,[[676982612],[676982613]]],[null,[[676982665]]],[null,[[676982678]]],[null,[[676982680]]],[null,[[676982682]]]]],[3,[[null,[[1337,[[82,null,null,[1]],[null,null,8,[null,null,"/pagead/js/rum_debug.js"]]]]]],[5,[[20194812,[[20,null,null,[1]]]],[20194813]],null,3],[500,[[21060697],[21060698,[[87,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["Uint8Array"]],[4,null,11]]]],[100,[[21061497],[21061498,[[86,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,9,null,null,null,null,["requestAnimationFrame"]]]]],[100,[[21061545],[21061546,[[79,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["google_ltobserver"]]]]],[50,[[21061863,[[null,1,null,[null,4096],[[[4,null,14],[null,8192]]]]]],[21061864,[[null,1,null,[null,12288]]]],[21061865,[[null,1,null,[null,15360]]]]]],[50,[[21061999],[21062000,[[81,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,10]]]],[null,[[21062185],[21062186,[[24,null,null,[1]]]]]],[1,[[21062330],[21062331,[[null,8,null,[null,800]]]],[21062332,[[null,8,null,[null,10000]]]]],null,3],[50,[[21062414],[21062415,[[64,null,null,[1]]]]]],[50,[[21062420],[21062421,[[42,null,null,[1]]]]]],[50,[[21062452],[21062453,[[43,null,null,[1]]]]]],[50,[[21062724],[21062725,[[67,null,null,[1]]]]]],[10,[[21062751],[21062752,[[null,15,null,[null,1]]]],[21062753,[[null,15,null,[null,2]]]]]],[10,[[21062796],[21062797,null,[4,null,8,null,null,null,null,["Map"]]]]],[50,[[21062818],[21062819,[[93,null,null,[1]]]]]],[50,[[21062832],[21062833,[[89,null,null,[1]]]]]],[50,[[21062886],[21062887,[[91,null,null,[1]]]]]],[10,[[21062888],[21062889,[[101,null,null,[1]]]]]],[5,[[21062899],[21062900,[[98,null,null,[1]]]],[21062901,[[98,null,null,[1]]]]]],[5,[[21062916,[[98,null,null,[1]]]],[21062917,[[98,null,null,[1]]]]]],[1,[[21062970],[21062971,[[109,null,null,[1]]]]]],[50,[[21063015],[21063016,[[97,null,null,[1]]]]]],[5,[[21063046],[21063047,[[142,null,null,[1]]]],[21063048,[[142,null,null,[1]]]]],[2,[[4,null,7],[4,null,8,null,null,null,null,["TextDecoder"]],[4,null,10]]],9],[null,[[21063065],[21063066,[[116,null,null,[1]]]]]],[null,[[21063094],[21063095,[[142,null,null,[1]]]],[21063096,[[142,null,null,[1]]]]],[2,[[4,null,7],[4,null,8,null,null,null,null,["TextDecoder"]],[4,null,10]]],9],[1,[[21063145],[21063146,[[112,null,null,[1]]]]]],[1,[[21063147],[21063148,[[99,null,null,[1]]]]]],[50,[[21063158],[21063159,[[90,null,null,[1]]]]]],[1000,[[21063165,null,[3,[[6,null,null,1,null,0],[6,null,null,1,null,5]]]],[21063166,[[114,null,null,[1]]],[3,[[6,null,null,1,null,1],[6,null,null,1,null,6]]]]],[4,null,3]],[10,[[21063167],[21063168,[[102,null,null,[1]]]]]],[50,[[21063202],[21063203,[[123,null,null,[1]]]]]],[10,[[21063204],[21063205,[[47,null,null,[1]]]]]],[1000,[[21063316,null,[3,[[6,null,null,1,null,2],[6,null,null,1,null,7]]]],[21063317,[[114,null,null,[1]]],[3,[[6,null,null,1,null,3],[6,null,null,1,null,8]]]]],[4,null,3]],[5,[[21063340],[21063341,[[129,null,null,[1]],[65,null,null,[1]]]],[21063342,[[129,null,null,[1]],[65,null,null,[1]],[71,null,null,[1]]]]]],[10,[[21063387],[21063388,[[130,null,null,[1]]]]]],[null,[[21063616],[21063617,[[null,null,null,[null,null,null,["v","1-0-33"]],null,1]]],[21063618,[[null,null,2,[null,null,"1-0-33"]]]]]],[null,[[21063633],[21063634,[[143,null,null,[1]]]]],[2,[[4,null,10]]]],[50,[[21063635],[21063636,[[104,null,null,[1]]]]]],[10,[[21063637],[21063638,[[141,null,null,[1]]]]]],[1,[[21063669],[21063670],[21063671,[[142,null,null,[1]]]]],[4,null,8,null,null,null,null,["TextDecoder"]],9],[10,[[21063692],[21063693]]],[50,[[21063760],[21063761,[[155,null,null,[1]]]]]],[1,[[21063778],[21063779,[[132,null,null,[1]],[110,null,null,[1]]]]],null,11],[1,[[21063785],[21063786,[[139,null,null,[1]]]]]],[1,[[21063792],[21063793,[[148,null,null,[1]]]]]],[50,[[21063813],[21063814,[[151,null,null,[1]]]]]],[50,[[21063815],[21063816,[[152,null,null,[1]],[151,null,null,[1]]]]]],[50,[[21063817],[21063818,[[149,null,null,[1]]]]]],[1,[[21063854],[21063855,[[110,null,null,[1]]]],[21063856,[[69,null,null,[1]]]]],null,11],[10,[[21063867],[21063868,[[153,null,null,[1]]]],[21063869,[[146,null,null,[1]]]]]],[1,[[21063910],[21063911]]],[1000,[[21063912]],[2,[[4,null,6,null,null,null,null,["21063910"]],[2,[[4,null,9,null,null,null,null,["XMLHttpRequest"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.open"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.send"]]]]]]],[1000,[[21063913]],[2,[[4,null,6,null,null,null,null,["21063911"]],[2,[[4,null,9,null,null,null,null,["XMLHttpRequest"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.open"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.send"]]]]]]],[50,[[21063989],[21063990,[[null,13,null,[null,1]]]],[21063991,[[null,13,null,[null,1]]]]]],[1000,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[100,[[22325465],[22325466,[[80,null,null,[1]]]]],[4,null,6,null,null,null,null,["21060611"]]],[1,[[108809132],[108809133,[[45,null,null,[1]]]]]],[10,[[370204026],[370204027],[370204053]]]]],[4,[[null,[[21063411],[21063412],[21063413]]],[null,[[21063421],[21063422],[21063423,[[74,null,null,[1]]]]]],[null,[[21063599],[21063600,[[105,null,null,[1]]]]]],[null,[[21063802],[21063803,[[null,20,null,[null,1]],[145,null,null,[1]]]],[21063804,[[null,20,null,[null,1]]]],[21063805,[[null,20,null,[null,1]],[145,null,null,[1]]]],[21063806,[[null,20,null,[null,1]]]],[21063807,[[null,20,null,[null,1]],[145,null,null,[1]]]],[21063808,[[null,20,null,[null,1]]]]]],[null,[[21063829,[[150,null,null,[1]]]]]],[null,[[21063831],[21063832],[21063833,[[null,19,null,[null,30]]]],[21063834,[[null,19,null,[null,30]],[150,null,null,[1]]]]]],[null,[[21063927],[21063928,[[null,16,null,[null,500]]]],[21063929,[[null,16,null,[null,500]]]],[21063930,[[null,16,null,[null,750]]]],[21063931,[[null,16,null,[null,1000]]]],[21063932,[[null,17,null,[null,50]]]],[21063933,[[null,17,null,[null,100]]]],[21063934,[[null,17,null,[null,150]]]],[21063935,[[null,17,null,[null,200]]]],[21063936,[[null,18,null,[null,1]]]],[21063937,[[null,18,null,[null,250]]]],[21063938,[[null,18,null,[null,500]]]],[21063939,[[null,18,null,[null,750]]]],[21063940,[[null,18,null,[null,1000]]]]]],[null,[[21063941],[21063942,[[null,16,null,[null,250]]]],[21063943,[[null,16,null,[null,500]]]],[21063944,[[null,16,null,[null,750]]]],[21063945,[[null,16,null,[null,1000]]]],[21063946,[[null,17,null,[null,50]]]],[21063947,[[null,17,null,[null,100]]]],[21063948,[[null,17,null,[null,150]]]],[21063949,[[null,17,null,[null,200]]]],[21063950,[[null,18,null,[null,250]]]],[21063951,[[null,18,null,[null,500]]]],[21063952,[[null,18,null,[null,750]]]],[21063953,[[null,18,null,[null,1000]]]]]],[null,[[21063962],[21063963,[[null,18,null,[null,1]]]]]],[null,[[21063987],[21063988]]],[null,[[21064027],[21064028,[[105,null,null,[1]]]]]],[null,[[676982603],[676982604]]],[null,[[676982661],[676982662],[676982663]]],[null,[[676982666],[676982667],[676982669],[676982670]]],[null,[[676982672],[676982673],[676982674],[676982675],[676982676],[676982677]]],[null,[[676982681]]]]],[5,[[500,[[21060610],[21060611,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["21061508"]]],[1000,[[21062785,[[23,null,null,[]]],[7,null,null,5,null,50]],[21062786,[[23,null,null,[1]]],[8,null,null,5,null,949]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[1000,[[21062812,[[23,null,null,[1]]]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[50,[[21063232,null,[6,null,null,null,4,null,"slow-2g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063233,null,[6,null,null,null,4,null,"2g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063234,null,[6,null,null,null,4,null,"3g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063235,null,[6,null,null,null,4,null,"4g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063247]],[1,[[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]]]],[50,[[21063248,null,[1,[[12,null,null,null,4,null,"^(slow-2g|2g|3g|4g)$",["navigator.connection.effectiveType"]]]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[1000,[[21063916,[[23,null,null,[]]],[7,null,null,5,null,1]],[21063917,[[23,null,null,[1]]],[8,null,null,5,null,998]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],[4,null,8,null,null,null,null,["webkit.messageHandlers._gmptnl"]]]],7],[10,[[21064029,null,[4,null,8,null,null,null,null,["webkit.messageHandlers._gmptnl"]]]]],[10,[[21064030,null,[4,null,8,null,null,null,null,["_gmptnl"]]]]]]],[6,[[null,[[21062379,[[23,null,null,[1]]]]]],[10,[[21063049],[21063050],[21063051]],[3,[[4,null,6,null,null,null,null,["21062415"]],[4,null,6,null,null,null,null,["21062414"]]]]]]],[7,[[10,[[21061507],[21061508,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1000,[[21064025,[[null,7,null,[null,1]],[null,null,5,[null,null,"21064025"]],[60,null,null,[1]],[null,null,6,[null,null,"21064025"]]],[6,null,null,4,null,2]],[21064026,[[null,7,null,[null,1]],[60,null,null,[1]]],[6,null,null,4,null,3]]],[4,null,3],1],[1000,[[21064032,[[null,7,null,[null,1]],[null,null,5,[null,null,"21064032"]],[60,null,null,[1]],[null,null,6,[null,null,"21064032"]]],[6,null,null,4,null,4]],[21064033,[[null,7,null,[null,1]],[60,null,null,[1]]],[6,null,null,4,null,5]]],[4,null,3],1]]],[9,[[1000,[[21061726]],[4,null,13,null,null,null,null,["PnHSZjekOp","jvnwkvnp"]]]]]]])

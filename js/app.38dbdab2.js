(function(e){function a(a){for(var i,o,s=a[0],c=a[1],l=a[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,o=1;o<n.length;o++){var s=n[o];0!==t[s]&&(i=!1)}i&&(r.splice(a--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},t={app:0},r=[];function s(e){return c.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"155d56e8","chunk-0206bfa0":"d4ec613d","chunk-0b10f9b9":"dfbe6b50","chunk-0d02006a":"5d5933ba","chunk-10d7dd5c":"ecd66860","chunk-13a6037e":"e9988704","chunk-18f95272":"6a86b29d","chunk-205221e7":"9bf53c1a","chunk-2c06842c":"bc703c01","chunk-2d0e96ec":"4695bb06","chunk-2d208d90":"ba36f328","chunk-2d21d0e2":"7cf63707","chunk-2d22c123":"85c5839e","chunk-2d4cff20":"246a8939","chunk-2e80bb9a":"6734c495","chunk-2fdc87ee":"5df9f6af","chunk-4ef72cd9":"b838cce1","chunk-515a8379":"44f22c0f","chunk-5309f94e":"8f87ffc6","chunk-53ccb27e":"5a87cbe6","chunk-55d286b8":"965e197a","chunk-59974754":"55ba6179","chunk-60a150e8":"4c5eab46","chunk-69444b4c":"5dea6954","chunk-6e1e538a":"a166d917","chunk-7d598149":"10b4b521","chunk-a71bdd78":"cfd7a817","chunk-c796899c":"d5895c2e","chunk-cda87f0a":"a00a013f","chunk-e8a7823a":"24e36463",comple:"4deeb12e",creditos:"a00065da",glosario:"c7f0b6f6",intro:"881c98ab",referencias:"35ad37b5",sintesis:"bd145cf8",tema1:"82741619",tema2:"35940bb5",tema3:"405bc52e",tema4:"4b480494",tema5:"86481030"}[e]+".js"}function c(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var a=[],n={"chunk-0b10f9b9":1,"chunk-0d02006a":1,"chunk-10d7dd5c":1,"chunk-205221e7":1,"chunk-2d4cff20":1,"chunk-4ef72cd9":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60a150e8":1,"chunk-6e1e538a":1,"chunk-7d598149":1,"chunk-a71bdd78":1,"chunk-cda87f0a":1,comple:1,creditos:1,glosario:1,referencias:1,tema1:1,tema2:1,tema3:1,tema4:1,tema5:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0b10f9b9":"3babef71","chunk-0d02006a":"8af4ad77","chunk-10d7dd5c":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-205221e7":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d4cff20":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-4ef72cd9":"3babef71","chunk-515a8379":"c3a3fd4d","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"8d896407","chunk-60a150e8":"3babef71","chunk-69444b4c":"31d6cfe0","chunk-6e1e538a":"126808df","chunk-7d598149":"3babef71","chunk-a71bdd78":"3babef71","chunk-c796899c":"31d6cfe0","chunk-cda87f0a":"14d1f3e8","chunk-e8a7823a":"31d6cfe0",comple:"5bf55044",creditos:"51003cb5",glosario:"83c23bad",intro:"31d6cfe0",referencias:"80dad0f2",sintesis:"31d6cfe0",tema1:"95586b9b",tema2:"95586b9b",tema3:"95586b9b",tema4:"95586b9b",tema5:"95586b9b"}[e]+".css",t=c.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===t))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===i||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var i=t[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,n){i=t[e]=[a,n]}));a.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},c.m=e,c.c=i,c.d=function(e,a,n){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)c.d(n,i,function(a){return e[a]}.bind(null,i));return n},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"0b86":function(e,a,n){e.exports=n.p+"img/12.68062a59.svg"},"1e70":function(e,a,n){"use strict";n("c5df")},"21a6":function(e,a,n){e.exports=n.p+"img/13.335b0c53.svg"},"294d":function(e,a,n){"use strict";n("9ea8")},"38f4":function(e,a,n){e.exports=n.p+"img/3.24b21704.svg"},"4e7e":function(e,a,n){},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},s=r,c=n("2877"),l=Object(c["a"])(s,o,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("section",{staticClass:"inicio"},[i("BannerPrincipal2",{staticClass:"mb-5"}),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5 mb-5",attrs:{id:"contenidos"}},[e._m(0),i("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[i("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(a){return i("router-link",{key:"desarrollo-"+a.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:a.nombreRuta}}},[i("div",{staticClass:"desarrollo-contenidos__item__texto"},[a.hasOwnProperty("numero")?i("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(a.numero))]):i("i",{staticClass:"desarrollo-contenidos__item__icono",class:a.icono}),i("span",{domProps:{innerHTML:e._s(a.titulo)}})]),i("a",{staticClass:"boton--sm"},[i("span",{staticClass:"d-none d-md-block"},[e._v("Ver contenido")]),i("span",{staticClass:"d-md-none"},[e._v("Ver")])])])})),1)])]),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro creditos-inicio px-3 py-4 px-sm-5"},[e.creditosInicio?i("div",{staticClass:"creditos-inicio__container"},e._l(e.creditosInicio,(function(a,n){return i("div",{staticClass:"creditos-inicio__item"},[i("div",{staticClass:"row"},[i("div",{staticClass:"creditos-inicio__titulo col-md-3 col-lg-2 mb-3 mb-md-0"},[i("h5",{staticClass:"mb-0",domProps:{innerHTML:e._s(a.titulo)}})]),i("div",{staticClass:"creditos-inicio__imagenes col"},e._l(a.contenido,(function(e){return i("img",{attrs:{src:e}})})),0)]),n!=e.creditosInicio.length-1?i("hr"):e._e()])})),0):i("div",{staticClass:"text-center"},[i("img",{staticClass:"d-inline-block mb-2",staticStyle:{width:"100px"},attrs:{src:n("9eb5")}}),i("h5",{staticClass:"mb-0"},[e._v("Ecosistema de recursos educativos digitales")])])]),i("Footer")],1)},p=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"titulo__template--a mb-4"},[n("h3",[e._v("Desarrollo"),n("br"),e._v("de contenidos")])])}],g=n("2909"),b=(n("99af"),n("4de4"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"banner-principal"},[n("div",{staticClass:"container tarjeta",style:{"background-image":e.globalData.fondoBannerPrincipal?"url("+e.globalData.fondoBannerPrincipal+")":"none"}},[n("div",{staticClass:"row banner-principal__row"},[n("div",{staticClass:"col-lg-7 col-xxl-5 ps-4 ps-sm-5 py-4 py-sm-5 banner-principal__info"},[n("div",{staticClass:"banner-principal__componente"},[n("h1",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.componenteFormativo)}})]),n("div",{staticClass:"banner-principal__descripcion"},[n("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})]),n("div",{staticClass:"banner-principal__accion"},[n("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[n("span",{staticClass:"me-1"},[e._v("Ver más")]),n("i",{staticClass:"fas fa-angle-right"})])],1)]),n("div",{staticClass:"d-none d-lg-block col-lg-5 px-0 banner-principal__img"},[n("img",{attrs:{src:e.globalData.imagenBannerPrincipal}}),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12)])])])])}),v=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_1"},[i("img",{attrs:{src:n("9a0a")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_2"},[i("img",{attrs:{src:n("95df")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_3"},[i("img",{attrs:{src:n("38f4")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_4"},[i("img",{attrs:{src:n("f420")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_5"},[i("img",{attrs:{src:n("a758")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_6"},[i("img",{attrs:{src:n("651b")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_7"},[i("img",{attrs:{src:n("9089")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_8"},[i("img",{attrs:{src:n("6ed3")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_9"},[i("img",{attrs:{src:n("8102")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_10"},[i("img",{attrs:{src:n("6590")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_11"},[i("img",{attrs:{src:n("7b80")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_12"},[i("img",{attrs:{src:n("0b86")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_13"},[i("img",{attrs:{src:n("21a6")}})])}],h=(n("7db0"),n("25f0"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),{computed:{menuData:function(){return this.$config.menuPrincipal.menu},iniciarLnk:function(){var e=this.menuData.find((function(e){return"introduccion"===e.nombreRuta})),a=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return e||a}},methods:{quitarAcentos:function(e){var a={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return e.split("").map((function(e){return a[e]||e})).join("").toString()}}}),_={name:"BannerPrincipal",mixins:[h],computed:{globalData:function(){return this.$config.global}}},y=_,C=(n("a12e"),Object(c["a"])(y,b,v,!1,null,null,null)),k=C.exports,E=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[e._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[e._v(" Base v"+e._s(e.versiones.base)+" - Paquete v"+e._s(e.versiones.pkg))])])])])},R=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"col-auto mb-2 mb-sm-0"},[i("img",{attrs:{src:n("52e5")}})])}],S={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},M=S,P=(n("294d"),Object(c["a"])(M,E,R,!1,null,null,null)),q=P.exports,w={name:"Inicio",components:{BannerPrincipal2:k,Footer:q},computed:{menuPrincipalData:function(){return this.$config.menuPrincipal},creditosInicio:function(){return this.$config.creditosInicio},desarrolloContenidosData:function(){var e=[].concat(Object(g["a"])(this.menuPrincipalData.menu),Object(g["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},x=w,D=(n("1e70"),Object(c["a"])(x,f,p,!1,null,null,null)),j=D.exports,T=n("7e58");u["a"].use(m["a"]);var I=new m["a"]({routes:[{path:"/",name:"inicio",component:j},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:T["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),z=I,A=n("1c2c"),L=(n("a3a0"),{global:{componenteFormativo:"Fundamentos del <i>Community Management</i>",descripcionCurso:"Cómo transcender y consolidar una audiencia y seguidores se ha convertido en un reto para toda empresa en el escenario digital, este documento contempla los fundamentos básicos del <i>community management</i> como herramienta del mercadeo para posicionar la marca (empresa) en Internet, a través de la producción y promoción de contenidos digitales.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Comunidad virtual",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Concepto de comunidad virtual",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Tipos de comunidades virtuales",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Estrategias para la creación de comunidades virtuales",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Posicionamiento y crecimiento de la comunidad virtual",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Contenido, optimización y moderación de la comunidad virtual",hash:"t_1_5"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Plan de <i>marketing online</i>",hash:"t_1_6"},{icono:"far fa-file-alt",numero:"1.7",titulo:"Construcción del plan de <i>marketing online</i>",hash:"t_1_7"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Medios digitales",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Concepto de medios digitales",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Características de los medios digitales",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Tipos de medios digitales",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Plataformas digitales",hash:"t_2_4"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Redes sociales",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Concepto de red social",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Tipos de redes sociales",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Importancia de la red social",hash:"t_3_3"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Audiencia",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Tipos de audiencia",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Diferencia entre audiencia y comunidad",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Conceptualización y contextualización de valoración, la reacción y la interacción de la audiencia",hash:"t_4_3"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Seguidores",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Características de un seguidor",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Tipos de seguidores",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:"Diferencia entre seguidor y cliente",hash:"t_5_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Fundamentos de <i>marketing</i>",referencia:"Kotler, P. & Armstrong, G. (2003). Fundamentos de <i>marketing</i>. Pearson Educación.",tipo:"Libro",descarga:"/downloads/Fundamentos_De_Marketing_Kotler_Armstrong.pdf"},{tema:"Dirección de <i>marketing</i>",referencia:"Lane, K. & Kotler, P. (2006). Dirección de <i>marketing</i>. Duodécima Edición. Editorial Pearson.",tipo:"Libro",descarga:"/downloads/Direccionde_Marketing_Kotler_edi12.pdf"}],glosario:[{termino:"Alcance orgánico",significado:"Es un porcentaje o dato numérico que evalúa el impacto y el número de personas que han visto una publicación de manera natural, sin ningún tipo de promoción o publicidad de pago. Se puede averiguar el alcance orgánico de las publicaciones a través de las estadísticas de la <i>fanpage</i> de Facebook."},{termino:"Alcance viral",significado:"Es una unidad de medida que calcula el número de personas que han visto una publicación a través de otros contactos. Mide la evolución y la repercusión de una publicación en cualquier tipo de formato. Redes sociales como Facebook, Twitter o Google Plus, por ejemplo, muestran el alcance viral de una publicación indicando cómo y qué personas han compartido un contenido."},{termino:"Analítica web",significado:"Es la forma de medir y analizar los datos de tráfico de un sitio web, a través del cual va a permitir tomar las mejores decisiones y optimizar los objetivos del negocio."},{termino:"<i>Blog post</i>",significado:"Es el nombre técnico que recibe la acción de publicar una entrada o un artículo en un <i>blog</i>."},{termino:"<i>Blog roll</i>",significado:"Es un <i>widget</i> (programa integrado de una Web externa) que se puede instalar en los <i>blogs</i> y visualiza en forma de lista los <i>blogs</i> que se siguen y que se recomiendan a los lectores."},{termino:"Comunidad <i>online</i>",significado:"Conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente en torno a una marca o temática."},{termino:"<i>Cookies</i>",significado:"Son pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios."},{termino:"<i>Crowdsourcing</i>",significado:"Acción por la cual las empresas y marcas generan contenido creativo a través de los propios clientes, <i>fans</i> o usuarios de Internet. Este término se ha generalizado y puesto en práctica sobre todo para fomentar la participación en redes sociales."},{termino:"<i>Dashboard</i>",significado:"Es el área de administración de un <i>blog</i>, conocido por todos como escritorio, desde donde se pueden gestionar todas las opciones."},{termino:"<i>Engagement</i>",significado:"Es la sensación de pertenencia y unión emocional entre una marca y un usuario. Es el objetivo de toda marca o empresa en redes sociales, a través de basar la estrategia en <i>marketing</i> de contenidos y generar en cada una de las redes la mayor participación posible."},{termino:"<i>Fanpage</i>",significado:"También llamada “página de fans”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una <i>fanpage</i> no tiene límite de <i>fans</i> y es posible tener acceso a la información estadística de la página."},{termino:"<i>Feed</i>",significado:"También conocido como RSS (Really Simple Syndication) es el formato en el que se comparte el contenido de los <i>blogs</i>."},{termino:"Geolocalización",significado:"Término que hace referencia al posicionamiento y a la localización geográfica de un negocio, una persona o un lugar a través de coordenadas que permiten situar cualquier elemento en el mapa. Es una herramienta fundamental para aplicaciones y comerciar a través del <i>mobile marketing</i>."},{termino:"<i>Hashtag</i>",significado:"Es una etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que transmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o texto. Su uso se ha extendido principalmente en redes sociales como Twitter, Instagram o Google Plus."},{termino:"Influenciador",significado:"En <i>social media</i> es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas"},{termino:"Infografía",significado:"Es una imagen que, con un conjunto de gráficos y textos, conforman un esquema visual que transmite, de forma rápida e intuitiva, conceptos e información."},{termino:"KPI",significado:"Son las siglas de Key Performance Indicator; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de social media <i>marketing</i>."},{termino:"<i>Marketing</i> de contenidos",significado:"Son estrategias de <i>marketing</i> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <i>blog</i> y del <i>social media marketing</i>."},{termino:"Metadatos",significado:"Es un código que se estructura al inicio de un sitio web para clasificar el tipo de información que describe a su vez otro elemento, del cual se puede obtener información detallada de sus características."},{termino:"Reputación <i>online</i>",significado:"Es el conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales."},{termino:"<i>Retargeting</i>",significado:"Es una nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo a recibir información. Este tipo de prácticas se hacen posible si y solo si, los usuarios admiten voluntariamente que aceptan cookies cuando navegan en determinado sitio."},{termino:"ROI",significado:"Son las siglas en inglés de Return On Investment, que significa retorno de la inversión. Es un indicador que mide el beneficio frente al gasto de la inversión de un proyecto de <i>social media marketing</i> en función de los objetivos y las metas logrados."},{termino:"Segmentar",significado:"En redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo."},{termino:"<i>Status report</i>",significado:"Documento informativo del estado de los planes de acción en las diferentes estrategias de <i>social media</i>, que incluye datos cuantitativos y cualitativos provenientes del resultado de la analítica web."},{termino:"<i>Storytelling</i>",significado:"Técnica de <i>marketing</i> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual."},{termino:"TT",significado:"Son las siglas de Trending Topic; es una de las abreviaturas más famosas de Twitter para asignar los temas más importantes e influyentes del momento. Se pueden ver los Trending Topic según el país o la ciudad a través de http://www.trends 24.in."},{termino:"Viral",significado:"Un contenido viral, del tipo que sea, es aquel que se difunde y se comparte como la pólvora entre diferentes usuarios y a través de diferentes medios y redes sociales. El objetivo de cualquier campaña de <i>marketing</i> es “viralizar” sus contenidos."},{termino:"<i>Webinars</i>",significado:"También llamados <i>webminars</i>, son eventos o conferencias que tienen lugar en el medio <i>online</i>. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales."},{termino:"<i>Youtubers</i>",significado:"Son las personas que crean y suben videos a YouTube y han convertido su canal en algo más que una afición. El <i>Youtuber</i> gana dinero por los anuncios de los videos o por mostrar productos patrocinados."}],referencias:[{referencia:"Baym, N. (2005). Dimensiones intergrupales de Internet. Comunicación intergrupal: Múltiples perspectivas, p. 213-238."},{referencia:"Jiménez, O. y Martínez, R. (2002). Comunidades virtuales: un modelo de aprendizaje para la nueva economía. Formación XXI, 3, p. 29-31."},{referencia:"Jonassen, D., Carr, C. y Yueh, H. (1998). Las computadoras como herramientas mentales para involucrar a los estudiantes en el pensamiento crítico. Tech Trends , 43 (2), p. 24-32."},{referencia:"Kotler, P. (1967). Marketing management: analysis, planning and control. Prentice Hall."},{referencia:"Maya, I. (2004). Sentido de comunidad y potenciación comunitaria. Apuntes de Psicología, 22 (2), p. 187-211."},{referencia:"Pazos, M. y otros. (2002). Comunidades virtuales: de las listas de discusión a las comunidades de aprendizaje."},{referencia:"Pierre, L. (2010). Cibercultura. Editora 34."},{referencia:"Polo, M. (1998). Las comunidades educativas. Aldea Educativa.",link:"http://www.aldeaeducativa.com/"},{referencia:"Salinas, J. (2003). Acceso a la información y aprendizaje informal en Internet. Comunicar Revista Científica Iberoamericana de Comunicación y Educación."},{referencia:"Segura, M. (2015). Plataformas educativas y redes docentes. Los desafíos de las TIC para un cambio educativo, OEI. Fundación Santillana."}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gustavo Navarro Macias",cargo:"Experto temático",centro:"Centro CIES Norte de Santander"},{nombre:"Adriana López",cargo:"Diseñadora instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Carolina Coca Salazar ",cargo:"Asesora metodológica",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Julia Isabel Roberto",cargo:"Correctora de estilo",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Blanca Flor Tinoco Torres",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ludwyng Corzo García",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carmen Alicia Martínez Torres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Erika Viviana Sandoval Rojas",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Edward Leonardo Pico Cabra",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});i["a"].prototype.$config=L;var $=n("9224");i["a"].prototype.$package=$,new i["a"]({router:z,store:A["a"],render:function(e){return e(d)}}).$mount("#app")},"651b":function(e,a,n){e.exports=n.p+"img/6.ab7018fc.svg"},6590:function(e,a,n){e.exports=n.p+"img/10.68062a59.svg"},"6ed3":function(e,a,n){e.exports=n.p+"img/8.335b0c53.svg"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.601c21dd.png"},"7b80":function(e,a,n){e.exports=n.p+"img/11.51d6b125.svg"},8102:function(e,a,n){e.exports=n.p+"img/9.8bde7e99.svg"},9089:function(e,a,n){e.exports=n.p+"img/7.5e96bb80.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.2.1","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.2.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"95df":function(e,a,n){e.exports=n.p+"img/2.eda171c3.svg"},"9a0a":function(e,a,n){e.exports=n.p+"img/1.abde614e.svg"},"9ea8":function(e,a,n){},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a12e:function(e,a,n){"use strict";n("4e7e")},a3a0:function(e,a,n){},a758:function(e,a,n){e.exports=n.p+"img/5.ab7018fc.svg"},c5df:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.c7e6aeac.png"},f420:function(e,a,n){e.exports=n.p+"img/4.ab7018fc.svg"}});
//# sourceMappingURL=app.38dbdab2.js.map
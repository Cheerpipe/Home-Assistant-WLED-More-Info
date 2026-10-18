var $5=Object.create;var s1=Object.defineProperty;var I5=Object.getOwnPropertyDescriptor;var n2=(L,C)=>(C=Symbol[L])?C:Symbol.for("Symbol."+L),U=L=>{throw TypeError(L)};var l2=(L,C,H)=>C in L?s1(L,C,{enumerable:!0,configurable:!0,writable:!0,value:H}):L[C]=H;var d2=(L,C)=>s1(L,"name",{value:C,configurable:!0});var G=L=>[,,,$5(L?.[n2("metadata")]??null)],v2=["class","method","getter","setter","accessor","field","value","get","set"],Y=L=>L!==void 0&&typeof L!="function"?U("Function expected"):L,U5=(L,C,H,V,M)=>({kind:v2[L],name:C,metadata:V,addInitializer:r=>H._?U("Already initialized"):M.push(Y(r||null))}),N=(L,C)=>l2(C,n2("metadata"),L[3]),m=(L,C,H,V)=>{for(var M=0,r=L[C>>1],e=r&&r.length;M<e;M++)C&1?r[M].call(H):V=r[M].call(H,V);return V},x=(L,C,H,V,M,r)=>{var e,i,t,A,n,o=C&7,a=!!(C&8),v=!!(C&16),s=o>3?L.length+1:o?a?1:2:0,h=v2[o+5],f=o>3&&(L[s-1]=[]),k=L[s]||(L[s]=[]),O=o&&(!v&&!a&&(M=M.prototype),o<5&&(o>3||!v)&&I5(o<4?M:{get[H](){return p2(this,r)},set[H](g){return m2(this,r,g)}},H));o?v&&o<4&&d2(r,(o>2?"set ":o>1?"get ":"")+H):d2(M,H);for(var X=V.length-1;X>=0;X--)A=U5(o,H,t={},L[3],k),o&&(A.static=a,A.private=v,n=A.access={has:v?g=>G5(M,g):g=>H in g},o^3&&(n.get=v?g=>(o^1?p2:Q5)(g,M,o^4?r:O.get):g=>g[H]),o>2&&(n.set=v?(g,Z1)=>m2(g,M,Z1,o^4?r:O.set):(g,Z1)=>g[H]=Z1)),i=(0,V[X])(o?o<4?v?r:O[h]:o>4?void 0:{get:O.get,set:O.set}:M,A),t._=1,o^4||i===void 0?Y(i)&&(o>4?f.unshift(i):o?v?r=i:O[h]=i:M=i):typeof i!="object"||i===null?U("Object expected"):(Y(e=i.get)&&(O.get=e),Y(e=i.set)&&(O.set=e),Y(e=i.init)&&f.unshift(e));return o||N(L,M),O&&s1(M,H,O),v?o^4?r:O:M},b=(L,C,H)=>l2(L,typeof C!="symbol"?C+"":C,H),u1=(L,C,H)=>C.has(L)||U("Cannot "+H),G5=(L,C)=>Object(C)!==C?U('Cannot use the "in" operator on this value'):L.has(C),p2=(L,C,H)=>(u1(L,C,"read from private field"),H?H.call(L):C.get(L)),Z=(L,C,H)=>C.has(L)?U("Cannot add the same private member more than once"):C instanceof WeakSet?C.add(L):C.set(L,H),m2=(L,C,H,V)=>(u1(L,C,"write to private field"),V?V.call(L,H):C.set(L,H),H),Q5=(L,C,H)=>(u1(L,C,"access private method"),H);var S1={"controls.entity":"Entity","controls.show_state":"Show state","controls.show_last_changed":"Show last changed","controls.appearance":"Appearance","controls.appearance.plain":"Plain (like more-info)","controls.appearance.card":"Card","wled.secondary_color":"Secondary color","wled.tertiary_color":"Tertiary color","wled.palette":"Palette","wled.effects":"Effects","wled.search":"Search effects","wled.no_effects":"No effects match","wled.filter.all":"All","wled.filter.1d":"Strip","wled.filter.2d":"Matrix","wled.filter.1.5d":"Strip on matrix","wled.filter.volume":"Audio: volume","wled.filter.frequency":"Audio: frequency","wled.filter.palette":"Uses palette","wled.slider.sx":"Speed","wled.slider.ix":"Intensity","wled.slider.c1":"Custom 1","wled.slider.c2":"Custom 2","wled.slider.c3":"Custom 3","wled.option.o1":"Option 1","wled.option.o2":"Option 2","wled.option.o3":"Option 3","wled.color_black":"Black (off)","wled.not_used":"Not used by this effect","wled.not_wled":"Pick a light of the WLED integration.","controls.show_effects":"Show effects","wled_card.name":"WLED more-info","wled_card.description":"The light more-info for WLED segment lights, with the secondary color, palette previews and effects grouped like in WLED.","wled.unreachable":"Secondary color, palette previews and effect details could not be read from the WLED device.","wled.no_integration":"Secondary color, palette previews and effect details need the WLED More-Info integration: add it in Settings \u2192 Devices & services.","wled.preset":"Preset","wled.search_presets":"Search presets","wled.no_presets":"No presets match","wled.effect_settings":"Effect settings","wled.no_effect_settings":"This effect has no settings"};var x2={"controls.entity":"Entidad","controls.show_state":"Mostrar estado","controls.show_last_changed":"Mostrar \xFAltimo cambio","controls.appearance":"Apariencia","controls.appearance.plain":"Sin marco (como more-info)","controls.appearance.card":"Tarjeta","wled.secondary_color":"Color secundario","wled.tertiary_color":"Color terciario","wled.palette":"Paleta","wled.effects":"Efectos","wled.search":"Buscar efectos","wled.no_effects":"Ning\xFAn efecto coincide","wled.filter.all":"Todos","wled.filter.1d":"Tira","wled.filter.2d":"Matriz","wled.filter.1.5d":"Tira en matriz","wled.filter.volume":"Audio: volumen","wled.filter.frequency":"Audio: frecuencia","wled.filter.palette":"Usa paleta","wled.slider.sx":"Velocidad","wled.slider.ix":"Intensidad","wled.slider.c1":"Personalizado 1","wled.slider.c2":"Personalizado 2","wled.slider.c3":"Personalizado 3","wled.option.o1":"Opci\xF3n 1","wled.option.o2":"Opci\xF3n 2","wled.option.o3":"Opci\xF3n 3","wled.color_black":"Negro (apagado)","wled.not_used":"Este efecto no lo usa","wled.not_wled":"Elige una luz de la integraci\xF3n WLED.","controls.show_effects":"Mostrar efectos","wled_card.name":"More-info de WLED","wled_card.description":"El more-info de luz para segmentos de WLED, con color secundario, vista previa de paletas y efectos agrupados como en WLED.","wled.unreachable":"No se pudieron leer el color secundario, la vista previa de paletas ni los detalles de efectos desde el dispositivo WLED.","wled.no_integration":"El color secundario, la vista previa de paletas y los detalles de efectos necesitan la integraci\xF3n WLED More-Info: agr\xE9gala en Ajustes \u2192 Dispositivos y servicios.","wled.preset":"Preset","wled.search_presets":"Buscar presets","wled.no_presets":"Ning\xFAn preset coincide","wled.effect_settings":"Ajustes del efecto","wled.no_effect_settings":"Este efecto no tiene ajustes"};var Z2={en:S1,es:x2},T=(L,C,H)=>{let V=L?.language??(typeof document<"u"&&document.documentElement.lang||"en"),M=V.split("-")[0],r=Z2[V]?.[C]??Z2[M]?.[C]??S1[C];if(H)for(let[e,i]of Object.entries(H))r=r.replace(`{${e}}`,String(i));return r};var s2="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";var u2="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";var S2="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";var c2="M22.11 21.46L2.39 1.73L1.11 3L4.06 5.95C2.78 7.63 2 9.72 2 12C2 17.5 6.5 22 12 22C14.28 22 16.37 21.23 18.05 19.94L20.84 22.73L22.11 21.46M12 20C7.58 20 4 16.42 4 12C4 10.27 4.56 8.68 5.5 7.38L16.62 18.5C15.32 19.45 13.73 20 12 20M8.17 4.97L6.72 3.5C8.25 2.56 10.06 2 12 2C17.5 2 22 6.5 22 12C22 13.94 21.44 15.75 20.5 17.28L19.03 15.83C19.65 14.69 20 13.39 20 12C20 7.58 16.42 4 12 4C10.61 4 9.31 4.35 8.17 4.97Z";var h2="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74";var O2="M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z";var f2="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z";var g2="M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z";var k2="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";var y2="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";var b2="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";var w2="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z";var B2="M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z";var P2="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z";var T2="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var F2="M22 12L20 13L19 14L18 13L17 16L16 13L15 21L14 13L13 15L12 13L11 17L10 13L9 22L8 13L7 19L6 13L5 14L4 13L2 12L4 11L5 10L6 11L7 5L8 11L9 2L10 11L11 7L12 11L13 9L14 11L15 3L16 11L17 8L18 11L19 10L20 11L22 12Z";var i1=globalThis,o1=i1.ShadowRoot&&(i1.ShadyCSS===void 0||i1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c1=Symbol(),R2=new WeakMap,J=class{constructor(C,H,V){if(this._$cssResult$=!0,V!==c1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=C,this.t=H}get styleSheet(){let C=this.o,H=this.t;if(o1&&C===void 0){let V=H!==void 0&&H.length===1;V&&(C=R2.get(H)),C===void 0&&((this.o=C=new CSSStyleSheet).replaceSync(this.cssText),V&&R2.set(H,C))}return C}toString(){return this.cssText}},_2=L=>new J(typeof L=="string"?L:L+"",void 0,c1),_=(L,...C)=>{let H=L.length===1?L[0]:C.reduce((V,M,r)=>V+(e=>{if(e._$cssResult$===!0)return e.cssText;if(typeof e=="number")return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(M)+L[r+1],L[0]);return new J(H,L,c1)},E2=(L,C)=>{if(o1)L.adoptedStyleSheets=C.map(H=>H instanceof CSSStyleSheet?H:H.styleSheet);else for(let H of C){let V=document.createElement("style"),M=i1.litNonce;M!==void 0&&V.setAttribute("nonce",M),V.textContent=H.cssText,L.appendChild(V)}},h1=o1?L=>L:L=>L instanceof CSSStyleSheet?(C=>{let H="";for(let V of C.cssRules)H+=V.cssText;return _2(H)})(L):L;var{is:z5,defineProperty:K5,getOwnPropertyDescriptor:q5,getOwnPropertyNames:j5,getOwnPropertySymbols:X5,getPrototypeOf:Y5}=Object,A1=globalThis,D2=A1.trustedTypes,J5=D2?D2.emptyScript:"",C3=A1.reactiveElementPolyfillSupport,C1=(L,C)=>L,H1={toAttribute(L,C){switch(C){case Boolean:L=L?J5:null;break;case Object:case Array:L=L==null?L:JSON.stringify(L)}return L},fromAttribute(L,C){let H=L;switch(C){case Boolean:H=L!==null;break;case Number:H=L===null?null:Number(L);break;case Object:case Array:try{H=JSON.parse(L)}catch{H=null}}return H}},a1=(L,C)=>!z5(L,C),N2={attribute:!0,type:String,converter:H1,reflect:!1,useDefault:!1,hasChanged:a1};Symbol.metadata??=Symbol("metadata"),A1.litPropertyMetadata??=new WeakMap;var F=class extends HTMLElement{static addInitializer(C){this._$Ei(),(this.l??=[]).push(C)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(C,H=N2){if(H.state&&(H.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(C)&&((H=Object.create(H)).wrapped=!0),this.elementProperties.set(C,H),!H.noAccessor){let V=Symbol(),M=this.getPropertyDescriptor(C,V,H);M!==void 0&&K5(this.prototype,C,M)}}static getPropertyDescriptor(C,H,V){let{get:M,set:r}=q5(this.prototype,C)??{get(){return this[H]},set(e){this[H]=e}};return{get:M,set(e){let i=M?.call(this);r?.call(this,e),this.requestUpdate(C,i,V)},configurable:!0,enumerable:!0}}static getPropertyOptions(C){return this.elementProperties.get(C)??N2}static _$Ei(){if(this.hasOwnProperty(C1("elementProperties")))return;let C=Y5(this);C.finalize(),C.l!==void 0&&(this.l=[...C.l]),this.elementProperties=new Map(C.elementProperties)}static finalize(){if(this.hasOwnProperty(C1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C1("properties"))){let H=this.properties,V=[...j5(H),...X5(H)];for(let M of V)this.createProperty(M,H[M])}let C=this[Symbol.metadata];if(C!==null){let H=litPropertyMetadata.get(C);if(H!==void 0)for(let[V,M]of H)this.elementProperties.set(V,M)}this._$Eh=new Map;for(let[H,V]of this.elementProperties){let M=this._$Eu(H,V);M!==void 0&&this._$Eh.set(M,H)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(C){let H=[];if(Array.isArray(C)){let V=new Set(C.flat(1/0).reverse());for(let M of V)H.unshift(h1(M))}else C!==void 0&&H.push(h1(C));return H}static _$Eu(C,H){let V=H.attribute;return V===!1?void 0:typeof V=="string"?V:typeof C=="string"?C.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(C=>this.enableUpdating=C),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(C=>C(this))}addController(C){(this._$EO??=new Set).add(C),this.renderRoot!==void 0&&this.isConnected&&C.hostConnected?.()}removeController(C){this._$EO?.delete(C)}_$E_(){let C=new Map,H=this.constructor.elementProperties;for(let V of H.keys())this.hasOwnProperty(V)&&(C.set(V,this[V]),delete this[V]);C.size>0&&(this._$Ep=C)}createRenderRoot(){let C=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return E2(C,this.constructor.elementStyles),C}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(C=>C.hostConnected?.())}enableUpdating(C){}disconnectedCallback(){this._$EO?.forEach(C=>C.hostDisconnected?.())}attributeChangedCallback(C,H,V){this._$AK(C,V)}_$ET(C,H){let V=this.constructor.elementProperties.get(C),M=this.constructor._$Eu(C,V);if(M!==void 0&&V.reflect===!0){let r=(V.converter?.toAttribute!==void 0?V.converter:H1).toAttribute(H,V.type);this._$Em=C,r==null?this.removeAttribute(M):this.setAttribute(M,r),this._$Em=null}}_$AK(C,H){let V=this.constructor,M=V._$Eh.get(C);if(M!==void 0&&this._$Em!==M){let r=V.getPropertyOptions(M),e=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:H1;this._$Em=M;let i=e.fromAttribute(H,r.type);this[M]=i??this._$Ej?.get(M)??i,this._$Em=null}}requestUpdate(C,H,V,M=!1,r){if(C!==void 0){let e=this.constructor;if(M===!1&&(r=this[C]),V??=e.getPropertyOptions(C),!((V.hasChanged??a1)(r,H)||V.useDefault&&V.reflect&&r===this._$Ej?.get(C)&&!this.hasAttribute(e._$Eu(C,V))))return;this.C(C,H,V)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(C,H,{useDefault:V,reflect:M,wrapped:r},e){V&&!(this._$Ej??=new Map).has(C)&&(this._$Ej.set(C,e??H??this[C]),r!==!0||e!==void 0)||(this._$AL.has(C)||(this.hasUpdated||V||(H=void 0),this._$AL.set(C,H)),M===!0&&this._$Em!==C&&(this._$Eq??=new Set).add(C))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(H){Promise.reject(H)}let C=this.scheduleUpdate();return C!=null&&await C,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[M,r]of this._$Ep)this[M]=r;this._$Ep=void 0}let V=this.constructor.elementProperties;if(V.size>0)for(let[M,r]of V){let{wrapped:e}=r,i=this[M];e!==!0||this._$AL.has(M)||i===void 0||this.C(M,void 0,r,i)}}let C=!1,H=this._$AL;try{C=this.shouldUpdate(H),C?(this.willUpdate(H),this._$EO?.forEach(V=>V.hostUpdate?.()),this.update(H)):this._$EM()}catch(V){throw C=!1,this._$EM(),V}C&&this._$AE(H)}willUpdate(C){}_$AE(C){this._$EO?.forEach(H=>H.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(C)),this.updated(C)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(C){return!0}update(C){this._$Eq&&=this._$Eq.forEach(H=>this._$ET(H,this[H])),this._$EM()}updated(C){}firstUpdated(C){}};F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[C1("elementProperties")]=new Map,F[C1("finalized")]=new Map,C3?.({ReactiveElement:F}),(A1.reactiveElementVersions??=[]).push("2.1.2");var w1=globalThis,W2=L=>L,d1=w1.trustedTypes,$2=d1?d1.createPolicy("lit-html",{createHTML:L=>L}):void 0,K2="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,q2="?"+E,H3=`<${q2}>`,I=document,L1=()=>I.createComment(""),M1=L=>L===null||typeof L!="object"&&typeof L!="function",B1=Array.isArray,V3=L=>B1(L)||typeof L?.[Symbol.iterator]=="function",O1=`[ 	
\f\r]`,V1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I2=/-->/g,U2=/>/g,W=RegExp(`>|${O1}(?:([^\\s"'>=/]+)(${O1}*=${O1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G2=/'/g,Q2=/"/g,j2=/^(?:script|style|textarea|title)$/i,P1=L=>(C,...H)=>({_$litType$:L,strings:C,values:H}),p=P1(1),P3=P1(2),T3=P1(3),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),z2=new WeakMap,$=I.createTreeWalker(I,129);function X2(L,C){if(!B1(L)||!L.hasOwnProperty("raw"))throw Error("invalid template strings array");return $2!==void 0?$2.createHTML(C):C}var L3=(L,C)=>{let H=L.length-1,V=[],M,r=C===2?"<svg>":C===3?"<math>":"",e=V1;for(let i=0;i<H;i++){let t=L[i],A,n,o=-1,a=0;for(;a<t.length&&(e.lastIndex=a,n=e.exec(t),n!==null);)a=e.lastIndex,e===V1?n[1]==="!--"?e=I2:n[1]!==void 0?e=U2:n[2]!==void 0?(j2.test(n[2])&&(M=RegExp("</"+n[2],"g")),e=W):n[3]!==void 0&&(e=W):e===W?n[0]===">"?(e=M??V1,o=-1):n[1]===void 0?o=-2:(o=e.lastIndex-n[2].length,A=n[1],e=n[3]===void 0?W:n[3]==='"'?Q2:G2):e===Q2||e===G2?e=W:e===I2||e===U2?e=V1:(e=W,M=void 0);let v=e===W&&L[i+1].startsWith("/>")?" ":"";r+=e===V1?t+H3:o>=0?(V.push(A),t.slice(0,o)+K2+t.slice(o)+E+v):t+E+(o===-2?i:v)}return[X2(L,r+(L[H]||"<?>")+(C===2?"</svg>":C===3?"</math>":"")),V]},r1=class L{constructor({strings:C,_$litType$:H},V){let M;this.parts=[];let r=0,e=0,i=C.length-1,t=this.parts,[A,n]=L3(C,H);if(this.el=L.createElement(A,V),$.currentNode=this.el.content,H===2||H===3){let o=this.el.content.firstChild;o.replaceWith(...o.childNodes)}for(;(M=$.nextNode())!==null&&t.length<i;){if(M.nodeType===1){if(M.hasAttributes())for(let o of M.getAttributeNames())if(o.endsWith(K2)){let a=n[e++],v=M.getAttribute(o).split(E),s=/([.?@])?(.*)/.exec(a);t.push({type:1,index:r,name:s[2],strings:v,ctor:s[1]==="."?g1:s[1]==="?"?k1:s[1]==="@"?y1:z}),M.removeAttribute(o)}else o.startsWith(E)&&(t.push({type:6,index:r}),M.removeAttribute(o));if(j2.test(M.tagName)){let o=M.textContent.split(E),a=o.length-1;if(a>0){M.textContent=d1?d1.emptyScript:"";for(let v=0;v<a;v++)M.append(o[v],L1()),$.nextNode(),t.push({type:2,index:++r});M.append(o[a],L1())}}}else if(M.nodeType===8)if(M.data===q2)t.push({type:2,index:r});else{let o=-1;for(;(o=M.data.indexOf(E,o+1))!==-1;)t.push({type:7,index:r}),o+=E.length-1}r++}}static createElement(C,H){let V=I.createElement("template");return V.innerHTML=C,V}};function Q(L,C,H=L,V){if(C===w)return C;let M=V!==void 0?H._$Co?.[V]:H._$Cl,r=M1(C)?void 0:C._$litDirective$;return M?.constructor!==r&&(M?._$AO?.(!1),r===void 0?M=void 0:(M=new r(L),M._$AT(L,H,V)),V!==void 0?(H._$Co??=[])[V]=M:H._$Cl=M),M!==void 0&&(C=Q(L,M._$AS(L,C.values),M,V)),C}var f1=class{constructor(C,H){this._$AV=[],this._$AN=void 0,this._$AD=C,this._$AM=H}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(C){let{el:{content:H},parts:V}=this._$AD,M=(C?.creationScope??I).importNode(H,!0);$.currentNode=M;let r=$.nextNode(),e=0,i=0,t=V[0];for(;t!==void 0;){if(e===t.index){let A;t.type===2?A=new e1(r,r.nextSibling,this,C):t.type===1?A=new t.ctor(r,t.name,t.strings,this,C):t.type===6&&(A=new b1(r,this,C)),this._$AV.push(A),t=V[++i]}e!==t?.index&&(r=$.nextNode(),e++)}return $.currentNode=I,M}p(C){let H=0;for(let V of this._$AV)V!==void 0&&(V.strings!==void 0?(V._$AI(C,V,H),H+=V.strings.length-2):V._$AI(C[H])),H++}},e1=class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(C,H,V,M){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=C,this._$AB=H,this._$AM=V,this.options=M,this._$Cv=M?.isConnected??!0}get parentNode(){let C=this._$AA.parentNode,H=this._$AM;return H!==void 0&&C?.nodeType===11&&(C=H.parentNode),C}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(C,H=this){C=Q(this,C,H),M1(C)?C===d||C==null||C===""?(this._$AH!==d&&this._$AR(),this._$AH=d):C!==this._$AH&&C!==w&&this._(C):C._$litType$!==void 0?this.$(C):C.nodeType!==void 0?this.T(C):V3(C)?this.k(C):this._(C)}O(C){return this._$AA.parentNode.insertBefore(C,this._$AB)}T(C){this._$AH!==C&&(this._$AR(),this._$AH=this.O(C))}_(C){this._$AH!==d&&M1(this._$AH)?this._$AA.nextSibling.data=C:this.T(I.createTextNode(C)),this._$AH=C}$(C){let{values:H,_$litType$:V}=C,M=typeof V=="number"?this._$AC(C):(V.el===void 0&&(V.el=r1.createElement(X2(V.h,V.h[0]),this.options)),V);if(this._$AH?._$AD===M)this._$AH.p(H);else{let r=new f1(M,this),e=r.u(this.options);r.p(H),this.T(e),this._$AH=r}}_$AC(C){let H=z2.get(C.strings);return H===void 0&&z2.set(C.strings,H=new r1(C)),H}k(C){B1(this._$AH)||(this._$AH=[],this._$AR());let H=this._$AH,V,M=0;for(let r of C)M===H.length?H.push(V=new L(this.O(L1()),this.O(L1()),this,this.options)):V=H[M],V._$AI(r),M++;M<H.length&&(this._$AR(V&&V._$AB.nextSibling,M),H.length=M)}_$AR(C=this._$AA.nextSibling,H){for(this._$AP?.(!1,!0,H);C!==this._$AB;){let V=W2(C).nextSibling;W2(C).remove(),C=V}}setConnected(C){this._$AM===void 0&&(this._$Cv=C,this._$AP?.(C))}},z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(C,H,V,M,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=C,this.name=H,this._$AM=M,this.options=r,V.length>2||V[0]!==""||V[1]!==""?(this._$AH=Array(V.length-1).fill(new String),this.strings=V):this._$AH=d}_$AI(C,H=this,V,M){let r=this.strings,e=!1;if(r===void 0)C=Q(this,C,H,0),e=!M1(C)||C!==this._$AH&&C!==w,e&&(this._$AH=C);else{let i=C,t,A;for(C=r[0],t=0;t<r.length-1;t++)A=Q(this,i[V+t],H,t),A===w&&(A=this._$AH[t]),e||=!M1(A)||A!==this._$AH[t],A===d?C=d:C!==d&&(C+=(A??"")+r[t+1]),this._$AH[t]=A}e&&!M&&this.j(C)}j(C){C===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,C??"")}},g1=class extends z{constructor(){super(...arguments),this.type=3}j(C){this.element[this.name]=C===d?void 0:C}},k1=class extends z{constructor(){super(...arguments),this.type=4}j(C){this.element.toggleAttribute(this.name,!!C&&C!==d)}},y1=class extends z{constructor(C,H,V,M,r){super(C,H,V,M,r),this.type=5}_$AI(C,H=this){if((C=Q(this,C,H,0)??d)===w)return;let V=this._$AH,M=C===d&&V!==d||C.capture!==V.capture||C.once!==V.once||C.passive!==V.passive,r=C!==d&&(V===d||M);M&&this.element.removeEventListener(this.name,this,V),r&&this.element.addEventListener(this.name,this,C),this._$AH=C}handleEvent(C){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,C):this._$AH.handleEvent(C)}},b1=class{constructor(C,H,V){this.element=C,this.type=6,this._$AN=void 0,this._$AM=H,this.options=V}get _$AU(){return this._$AM._$AU}_$AI(C){Q(this,C)}};var M3=w1.litHtmlPolyfillSupport;M3?.(r1,e1),(w1.litHtmlVersions??=[]).push("3.3.3");var Y2=(L,C,H)=>{let V=H?.renderBefore??C,M=V._$litPart$;if(M===void 0){let r=H?.renderBefore??null;V._$litPart$=M=new e1(C.insertBefore(L1(),r),r,void 0,H??{})}return M._$AI(L),M};var T1=globalThis,y=class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let C=super.createRenderRoot();return this.renderOptions.renderBefore??=C.firstChild,C}update(C){let H=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(C),this._$Do=Y2(H,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};y._$litElement$=!0,y.finalized=!0,T1.litElementHydrateSupport?.({LitElement:y});var r3=T1.litElementPolyfillSupport;r3?.({LitElement:y});(T1.litElementVersions??=[]).push("4.2.2");var e3={attribute:!0,type:String,converter:H1,reflect:!1,hasChanged:a1},t3=(L=e3,C,H)=>{let{kind:V,metadata:M}=H,r=globalThis.litPropertyMetadata.get(M);if(r===void 0&&globalThis.litPropertyMetadata.set(M,r=new Map),V==="setter"&&((L=Object.create(L)).wrapped=!0),r.set(H.name,L),V==="accessor"){let{name:e}=H;return{set(i){let t=C.get.call(this);C.set.call(this,i),this.requestUpdate(e,t,L,!0,i)},init(i){return i!==void 0&&this.C(e,void 0,L,i),i}}}if(V==="setter"){let{name:e}=H;return function(i){let t=this[e];C.call(this,i),this.requestUpdate(e,t,L,!0,i)}}throw Error("Unsupported decorator location: "+V)};function R(L){return(C,H)=>typeof H=="object"?t3(L,C,H):((V,M,r)=>{let e=M.hasOwnProperty(r);return M.constructor.createProperty(r,V),e?Object.getOwnPropertyDescriptor(M,r):void 0})(L,C,H)}function u(L){return R({...L,state:!0,attribute:!1})}var m1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n1=L=>(...C)=>({_$litDirective$:L,values:C}),K=class{constructor(C){}get _$AU(){return this._$AM._$AU}_$AT(C,H,V){this._$Ct=C,this._$AM=H,this._$Ci=V}_$AS(C,H){return this.update(C,H)}update(C,H){return this.render(...H)}};var B=n1(class extends K{constructor(L){if(super(L),L.type!==m1.ATTRIBUTE||L.name!=="class"||L.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(L){return" "+Object.keys(L).filter(C=>L[C]).join(" ")+" "}update(L,[C]){if(this.st===void 0){this.st=new Set,L.strings!==void 0&&(this.nt=new Set(L.strings.join(" ").split(/\s/).filter(V=>V!=="")));for(let V in C)C[V]&&!this.nt?.has(V)&&this.st.add(V);return this.render(C)}let H=L.element.classList;for(let V of this.st)V in C||(H.remove(V),this.st.delete(V));for(let V in C){let M=!!C[V];M===this.st.has(V)||this.nt?.has(V)||(M?(H.add(V),this.st.add(V)):(H.remove(V),this.st.delete(V)))}return w}});var J2="important",i3=" !"+J2,q=n1(class extends K{constructor(L){if(super(L),L.type!==m1.ATTRIBUTE||L.name!=="style"||L.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(L){return Object.keys(L).reduce((C,H)=>{let V=L[H];return V==null?C:C+`${H=H.includes("-")?H:H.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${V};`},"")}update(L,[C]){let{style:H}=L.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(C)),this.render(C);for(let V of this.ft)C[V]==null&&(this.ft.delete(V),V.includes("-")?H.removeProperty(V):H[V]=null);for(let V in C){let M=C[V];if(M!=null){this.ft.add(V);let r=typeof M=="string"&&M.endsWith(i3);V.includes("-")||r?H.setProperty(V,r?M.slice(0,-11):M,r?J2:""):H[V]=M}}return w}});var C5=L=>L.attributes.friendly_name??L.entity_id.substring(L.entity_id.indexOf(".")+1);var D=(L,C,H,V={})=>{let M=new CustomEvent(C,{bubbles:V.bubbles??!0,cancelable:V.cancelable??!1,composed:V.composed??!0,detail:H??{}});return L.dispatchEvent(M),M};var F1=L=>customElements.get(L)!==void 0,H5=async(L,C=5e3)=>{if(F1(L))return!0;let H,V=await Promise.race([customElements.whenDefined(L).then(()=>!0),new Promise(M=>{H=setTimeout(()=>M(!1),C)})]);return clearTimeout(H),V};var R1=async(L,C)=>{if(C.every(F1))return!0;try{(await window.loadCardHelpers?.())?.importMoreInfoControl?.(L)}catch(V){console.warn("[wled-more-info] Could not load",L,V)}return(await Promise.all(C.map(V=>H5(V,8e3)))).every(Boolean)};var V5="more-info-popup-fill";var L5=["ha-icon-button-group","ha-icon-button-toggle","light-color-rgb-picker","light-color-temp-picker","ha-more-info-light-favorite-colors"];var M5=["hs","xy","rgb","rgbw","rgbww"],o3=[...M5,"color_temp","brightness","white"],l1=(L,C)=>L.attributes.supported_color_modes?.some(H=>C.includes(H))??!1,r5=L=>l1(L,o3),e5=L=>l1(L,M5),t5=L=>l1(L,["color_temp"]),i5=L=>l1(L,["white"]);var o5=_`
  ha-card.plain {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    --ha-card-background: transparent;
  }
`,A5=_`
  .chip {
    --mdc-icon-size: 20px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    /* No width rules: the native container sizes its slotted chips. */
    height: var(--control-select-menu-height, 48px);
    padding: var(--control-select-menu-padding, 6px 10px);
    border: none;
    border-radius: var(
      --control-select-menu-border-radius,
      var(--ha-border-radius-lg)
    );
    background: none;
    color: var(--control-select-menu-text-color, var(--primary-text-color));
    font-family: inherit;
    font-size: var(--ha-font-size-m);
    font-weight: var(--ha-font-weight-normal);
    line-height: 1.4;
    letter-spacing: 0.25px;
    text-align: start;
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    z-index: 0;
    transition: box-shadow 180ms ease-in-out;
  }
  .chip::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: var(
      --control-select-menu-background-color,
      var(--disabled-color)
    );
    opacity: var(--control-select-menu-background-opacity, 0.2);
    transition:
      background-color 180ms ease-in-out,
      opacity 180ms ease-in-out;
  }
  button.chip:hover::before {
    background-color: var(--ha-color-on-neutral-quiet);
  }
  .chip:focus-visible,
  .chip:focus-within:has(:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 2px
      var(--control-select-menu-focus-color, var(--secondary-text-color));
  }
  .chip[disabled] {
    cursor: not-allowed;
    color: var(--disabled-color);
  }
  .chip .icon {
    display: flex;
    flex: none;
    --mdc-icon-size: 20px;
  }
  .chip .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }
  .chip .content p {
    margin: 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .chip .label {
    font-size: var(--ha-font-size-s);
    letter-spacing: 0.4px;
  }
  .chip .value {
    font-size: var(--ha-font-size-m);
  }
`;var E1="wled_more_info",a5=L=>L?.code==="unknown_command",_1=new Map,v1=L=>{let C=_1.get(L.deviceId);return C||(C=L.hass.callWS({type:`${E1}/catalog`,entity_id:L.entityId}),_1.set(L.deviceId,C),C.catch(()=>_1.delete(L.deviceId))),C},D1=async L=>(await L.hass.callWS({type:`${E1}/state`,entity_id:L.entityId})).seg,d5=async(L,C)=>(await L.hass.callWS({type:`${E1}/set_segment`,entity_id:L.entityId,data:C})).seg;var A3=["sx","ix","c1","c2","c3"],a3=["o1","o2","o3"],d3=L=>L!==""&&!Number.isNaN(Number(L)),N1=L=>{let C=L.split("=")[0].trim();return C==="!"?void 0:C},p3=L=>{let C=new Set;for(let H of(L||"1").split(",")){let V=H.trim().toLowerCase();if(!(!V||V.includes("="))){if(V==="1.5d"){C.add("1.5d");continue}V.includes("0")&&C.add("0d"),V.includes("1")&&C.add("1d"),V.includes("2")&&C.add("2d"),V.includes("v")&&C.add("volume"),V.includes("f")&&C.add("frequency")}}return[...C]},m3=(L,C,H)=>{let V=H??"";if(V==="")return{id:L,name:C,sliders:L===0?[]:[{key:"sx"},{key:"ix"}],options:[],colors:[void 0,void 0,void 0],palette:L!==0,categories:L===0?[]:["1d"]};let[M="",r="",e="",i]=V.split(";"),t=M===""?[]:M.split(","),A=r===""?[]:r.split(","),n=e===""?[]:e.split(","),o=[];A3.forEach((h,f)=>{let k=t[f];k!==void 0&&k.trim()!==""&&o.push({key:h,label:N1(k)})});let a=[];a3.forEach((h,f)=>{let k=t[5+f];k!==void 0&&k.trim()!==""&&a.push({key:h,label:N1(k)})});let v=h=>{let f=A[h];return f===void 0||f.trim()===""?null:N1(f)},s=n[0]?.split("=")[0]?.trim()??"";return{id:L,name:C,sliders:o,options:a,colors:[v(0),v(1),v(2)],palette:s!==""&&!d3(s),categories:L===0?[]:p3(i)}},n5=(L,C)=>L.map((H,V)=>m3(V,H,C?.[V])).filter(H=>!H.name.includes("RSVD")),p5=([L,C,H])=>`rgb(${L}, ${C}, ${H})`,m5=[[255,0,90],[255,170,0],[0,210,120],[0,120,255]],l5=(L,C)=>{if(!L?.length)return;let H=[];return L.forEach((V,M)=>{if(typeof V=="string"){let r=V==="r"?m5[M%m5.length]:C[Number(V.slice(1))-1]??[0,0,0],e=L.length===1?0:M/(L.length-1)*100;H.push(`${p5(r)} ${e.toFixed(1)}%`)}else{let[r,e,i,t]=V;H.push(`${p5([e,i,t])} ${(r/255*100).toFixed(1)}%`)}}),H.length===1&&H.push(H[0].replace(/ [\d.]+%$/," 100%")),`linear-gradient(90deg, ${H.join(", ")})`},v5=([L,C,H])=>{let V=Math.max(L,C,H),M=Math.min(L,C,H),r=V-M,e=V===0?0:r/V,i=0;return r&&(V===L?i=(C-H)/r%6:V===C?i=(H-L)/r+2:i=(L-C)/r+4),[(i*60+360)%360,e]},W1=([L,C])=>{let H=V=>{let M=(V+L/60)%6;return 1-C*Math.max(0,Math.min(M,4-M,1))};return[H(5),H(3),H(1)].map(V=>Math.round(V*255))};var x1="more-info-wled-effect-picker",n3=["all","1d","2d","1.5d","volume","frequency","palette"],t1={"1d":g2,"2d":f2,"1.5d":B2,volume:T2,frequency:F2,palette:y2},$1=new Map,K1=L=>{let C=$1.get(L.deviceId);return C||(C=v1(L).then(H=>n5(H.effectNames,H.fxdata)),$1.set(L.deviceId,C),C.catch(()=>$1.delete(L.deviceId))),C},x5,Z5,s5,u5,S5,c5,c,I1,U1,G1,Q1,z1,P=class extends(c5=y,S5=[R({attribute:!1})],u5=[R({attribute:!1})],s5=[u()],Z5=[u()],x5=[u()],c5){constructor(){super(...arguments);Z(this,I1,m(c,8,this)),m(c,11,this);Z(this,U1,m(c,12,this)),m(c,15,this);Z(this,G1,m(c,16,this)),m(c,19,this);Z(this,Q1,m(c,20,this,"all")),m(c,23,this);Z(this,z1,m(c,24,this,"")),m(c,27,this);b(this,"_loadedDevice")}willUpdate(){let H=this.params?.deviceId,V=this.hass;!H||!V||H===this._loadedDevice||(this._loadedDevice=H,K1({hass:V,entityId:this.params.entityId,deviceId:H}).then(M=>{this._effects=new Map(M.map(r=>[r.name,r]))},()=>{}))}_t(H){return T(this.hass,H)}get _isPreset(){return this.params?.kind==="preset"}_select(H){let V=this.params;this._isPreset?this.hass.callService("select","select_option",{entity_id:V.presetEntity,option:H}):this.hass.callService("light","turn_on",{entity_id:V.entityId,effect:H}),D(this,"wled-effect-picked",{effect:H}),D(this,"close-child-view")}_matches(H){if(this._search&&!H.toLowerCase().includes(this._search))return!1;if(this._filter==="all"||this._isPreset)return!0;let V=this._effects?.get(H);return V?this._filter==="palette"?V.palette:V.categories.includes(this._filter):!1}render(){let H=this.hass,V=this.params?.entityId,M=V?H?.states[V]:void 0;if(!H||!M)return d;let r=this._isPreset?H.states[this.params?.presetEntity??""]:void 0,e=r?r.attributes.options??[]:M.attributes.effect_list??[],i=r?r.state:M.attributes.effect??this.params?.current,t=this._isPreset?void 0:this._effects,A=this._t(this._isPreset?"wled.search_presets":"wled.search"),n=t?n3.filter(a=>a==="all"||[...t.values()].some(v=>a==="palette"?v.palette:v.categories.includes(a))):[],o=e.filter(a=>this._matches(a));return p`
      <div class="search">
        <ha-svg-icon .path=${k2}></ha-svg-icon>
        <input
          type="search"
          .value=${this._search}
          placeholder=${A}
          aria-label=${A}
          @input=${a=>{this._search=a.target.value.trim().toLowerCase()}}
        />
      </div>
      ${n.length>1?p`<div class="filters" role="toolbar">
              ${n.map(a=>p`
                  <button
                    class=${B({filter:!0,selected:this._filter===a})}
                    aria-pressed=${this._filter===a}
                    @click=${()=>{this._filter=a}}
                  >
                    ${t1[a]?p`<ha-svg-icon
                            .path=${t1[a]}
                          ></ha-svg-icon>`:d}
                    ${this._t(`wled.filter.${a}`)}
                  </button>
                `)}
            </div>`:d}
      <div class="list" role="listbox">
        ${o.map(a=>{let v=t?.get(a),s=a===i;return p`
            <button
              class=${B({row:!0,selected:s})}
              role="option"
              aria-selected=${s}
              @click=${()=>this._select(a)}
            >
              <span class="name">${a}</span>
              <span class="tags">
                ${[...(v?.categories??[]).filter(h=>h!=="0d"),...v?.palette?["palette"]:[]].map(h=>p`<ha-svg-icon
                      title=${this._t(`wled.filter.${h}`)}
                      .path=${t1[h]}
                    ></ha-svg-icon>`)}
              </span>
              <ha-svg-icon
                class="check"
                .path=${s?u2:""}
              ></ha-svg-icon>
            </button>
          `})}
        ${o.length?d:p`<p class="empty">
                ${this._t(this._isPreset?"wled.no_presets":"wled.no_effects")}
              </p>`}
      </div>
    `}};c=G(c5),I1=new WeakMap,U1=new WeakMap,G1=new WeakMap,Q1=new WeakMap,z1=new WeakMap,x(c,4,"hass",S5,P,I1),x(c,4,"params",u5,P,U1),x(c,4,"_effects",s5,P,G1),x(c,4,"_filter",Z5,P,Q1),x(c,4,"_search",x5,P,z1),N(c,P),b(P,"styles",_`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--ha-space-3);
      padding: var(--ha-space-4) var(--ha-space-6) var(--ha-space-6);
      box-sizing: border-box;
    }
    :host([inline]) {
      padding: 0;
    }
    /* Search field like HA's search-input. */
    .search,
    .filters,
    .row {
      flex-shrink: 0;
    }
    .search {
      display: flex;
      align-items: center;
      gap: var(--ha-space-2);
      height: 48px;
      padding: 0 var(--ha-space-3);
      border-radius: var(--ha-border-radius-lg);
      background: var(
        --ha-color-fill-neutral-quiet-resting,
        rgba(139, 145, 151, 0.1)
      );
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
    }
    .search input {
      flex: 1;
      min-width: 0;
      border: none;
      outline: none;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: var(--ha-font-size-m);
    }
    /* Filter chips like ha-filter-chip. */
    /* One row that scrolls sideways, like HA's chip rows. */
    .filters {
      display: flex;
      gap: var(--ha-space-2);
      overflow-x: auto;
      scrollbar-width: none;
    }
    .filters::-webkit-scrollbar {
      display: none;
    }
    .filter {
      display: inline-flex;
      align-items: center;
      gap: var(--ha-space-1);
      flex: none;
      height: 32px;
      padding: 0 var(--ha-space-3);
      border: 1px solid var(--outline-color, var(--divider-color));
      border-radius: var(--ha-border-radius-md);
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: var(--ha-font-size-s);
      font-weight: var(--ha-font-weight-medium);
      cursor: pointer;
      --mdc-icon-size: 18px;
    }
    .filter.selected {
      border-color: transparent;
      background: var(
        --ha-color-fill-primary-normal-resting,
        rgba(var(--rgb-primary-color), 0.2)
      );
      color: var(--ha-color-on-primary-normal, var(--primary-color));
    }
    .list {
      display: flex;
      flex-direction: column;
    }
    .row {
      display: flex;
      align-items: center;
      gap: var(--ha-space-3);
      min-height: 48px;
      padding: 0 var(--ha-space-3);
      border: none;
      border-radius: var(--ha-border-radius-md);
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: var(--ha-font-size-m);
      text-align: start;
      cursor: pointer;
      --mdc-icon-size: 18px;
    }
    .row:hover,
    .row:focus-visible {
      background: var(
        --ha-color-fill-neutral-quiet-hover,
        rgba(139, 145, 151, 0.12)
      );
      outline: none;
    }
    .row.selected {
      color: var(--primary-color);
      font-weight: var(--ha-font-weight-medium);
    }
    .name {
      flex: 1;
    }
    .tags {
      display: flex;
      gap: var(--ha-space-1);
      color: var(--secondary-text-color);
    }
    .check {
      --mdc-icon-size: 20px;
      width: 20px;
    }
    .empty {
      margin: var(--ha-space-4) 0;
      text-align: center;
      color: var(--secondary-text-color);
    }
  `);customElements.get(x1)||customElements.define(x1,P);var l3=L=>{let C=/^(.+)_(\d+)$/.exec(L);return C?{mac:C[1],segment:Number(C[2])}:void 0},h5=async(L,C)=>{let H=L.entities[C];if(!C.startsWith("light.")||H?.platform!=="wled")return"not_wled";let V=H.device_id??C,M=Object.values(L.entities).filter(o=>o.device_id===V).map(o=>o.entity_id),r=await L.callWS({type:"config/entity_registry/get_entries",entity_ids:M.includes(C)?M:[C,...M]}),e=r[C],i=e&&l3(e.unique_id);if(!i)return"main_light";let t=new Map(Object.values(r).filter(o=>!!o).map(o=>[o.unique_id,o.entity_id])),{mac:A,segment:n}=i;return{segment:n,deviceId:V,palette:t.get(`${A}_palette_${n}`),speed:t.get(`${A}_speed_${n}`),intensity:t.get(`${A}_intensity_${n}`),preset:t.get(`${A}_preset`)}};var O5=(L,C,H)=>{var M,r,e,i,t,A;class V extends(e=y,r=[R({attribute:!1})],M=[u()],e){constructor(){super(...arguments);Z(this,t,m(i,8,this)),m(i,11,this);Z(this,A,m(i,12,this)),m(i,15,this);b(this,"_form",C())}setConfig(a){this._form.assertConfig?.(a),this._config=a}render(){return this._config?p`
        <ha-form
          .hass=${this.hass}
          .data=${H.fill(this._config,this.hass)}
          .schema=${this._form.schema}
          .computeLabel=${this._form.computeLabel}
          .computeHelper=${this._form.computeHelper}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `:d}_valueChanged(a){a.stopPropagation(),D(this,"config-changed",{config:H.strip(a.detail.value,this.hass)})}}i=G(e),t=new WeakMap,A=new WeakMap,x(i,4,"hass",r,V,t),x(i,4,"_config",M,V,A),N(i,V),customElements.get(L)||customElements.define(L,V)};var f5=(L,C)=>{let H={...L};for(let[V,M]of Object.entries(C))H[V]===M&&delete H[V];return H};var j1="more-info-wled-state-card-editor",v3=()=>{},q1=L=>T(v3(),`controls.${L}`)||void 0,g5={show_state:!0,show_last_changed:!0,show_effects:!0},x3=()=>({schema:[{name:"entity",required:!0,selector:{entity:{filter:{domain:"light",integration:"wled"}}}},{name:"",type:"grid",schema:[{name:"show_state",selector:{boolean:{}}},{name:"show_last_changed",selector:{boolean:{}}},{name:"show_effects",selector:{boolean:{}}}]},{name:"appearance",selector:{select:{mode:"dropdown",options:["plain","card"].map(L=>({value:L,label:q1(`appearance.${L}`)??L}))}}}],computeLabel:L=>q1(L.name)??L.name,computeHelper:L=>q1(`${L.name}_helper`)});O5(j1,x3,{fill:L=>({...g5,...L}),strip:L=>f5(L,g5)});var j="more-info-wled-state-card",Z3={sx:255,ix:255,c1:255,c2:255,c3:31},s3=15e3,u3=400,X1=L=>L?`rgb(${L[0]}, ${L[1]}, ${L[2]})`:void 0,Y1=L=>!L||L[0]===0&&L[1]===0&&L[2]===0,k5,y5,b5,w5,B5,P5,T5,F5,R5,_5,E5,D5,N5,W5,l,J1,C2,H2,V2,L2,M2,r2,e2,t2,i2,o2,A2,a2,S=class extends(W5=y,N5=[R({attribute:!1})],D5=[u()],E5=[u()],_5=[u()],R5=[u()],F5=[u()],T5=[u()],P5=[u()],B5=[u()],w5=[u()],b5=[u()],y5=[u()],k5=[u()],W5){constructor(){super(...arguments);Z(this,J1,m(l,8,this)),m(l,11,this);Z(this,C2,m(l,12,this)),m(l,15,this);Z(this,H2,m(l,16,this,!1)),m(l,19,this);Z(this,V2,m(l,20,this)),m(l,23,this);Z(this,L2,m(l,24,this)),m(l,27,this);Z(this,M2,m(l,28,this)),m(l,31,this);Z(this,r2,m(l,32,this)),m(l,35,this);Z(this,e2,m(l,36,this)),m(l,39,this);Z(this,t2,m(l,40,this,"brightness")),m(l,43,this);Z(this,i2,m(l,44,this,1)),m(l,47,this);Z(this,o2,m(l,48,this)),m(l,51,this);Z(this,A2,m(l,52,this,{})),m(l,55,this);Z(this,a2,m(l,56,this)),m(l,59,this);b(this,"_linkKey");b(this,"_pollTimer");b(this,"_refreshTimer");b(this,"_lastUpdated")}static getConfigElement(){return document.createElement(j1)}static getStubConfig(H){let V=Object.values(H.entities).find(M=>M.platform==="wled"&&M.entity_id.startsWith("light.")&&M.translation_key==="segment")?.entity_id??"";return{type:`custom:${j}`,entity:V}}setConfig(H){if(!H?.entity)throw new Error('"entity" is required');this._config=H,this._linkKey=void 0,this._link=void 0,this._segment=void 0,this._effects=void 0,this._catalog=void 0,this._deviceError=void 0,this._mode="brightness",this._pickerOpen=void 0}getCardSize(){return 10}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}set popupFill(H){if(this.style.removeProperty("--popup-min-height"),H<=0)return;let V=this.getBoundingClientRect().height;this.style.setProperty("--popup-min-height",`${V+H}px`)}connectedCallback(){super.connectedCallback(),D(this,V5),this._pollTimer=setInterval(()=>this._refreshSegment(),s3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._pollTimer),clearTimeout(this._refreshTimer)}get _stateObj(){return this._config&&this.hass?.states[this._config.entity]}get _target(){if(!(typeof this._link!="object"||!this.hass||!this._config))return{hass:this.hass,entityId:this._config.entity,deviceId:this._link.deviceId}}get _deviceId(){return typeof this._link=="object"?this._link.deviceId:void 0}willUpdate(H){if(!this._config||!this.hass)return;!this._ready&&this._stateObj&&(this._ready=!0,R1("light",["ha-state-control-light-brightness","ha-more-info-state-header","ha-hs-color-picker","ha-control-slider",...L5]).then(()=>this.requestUpdate()),R1("vacuum",["ha-more-info-control-select-container","ha-control-button","ha-control-button-group"]).then(()=>this.requestUpdate()));let V=this._config.entity;this._linkKey!==V&&this.hass.entities[this._config.entity]&&(this._linkKey=V,h5(this.hass,this._config.entity).then(r=>{this._linkKey===V&&(this._link=r,this._loadDevice())},()=>{this._linkKey===V&&(this._link="not_wled")}));let M=this._stateObj?.last_updated;H.has("hass")&&M&&M!==this._lastUpdated&&(this._lastUpdated=M,this._scheduleRefresh())}_loadDevice(){let H=this._target;if(!H)return;let V=()=>this._deviceId===H.deviceId;Promise.all([K1(H),v1(H),D1(H)]).then(([M,r,e])=>{V()&&(this._effects=new Map(M.map(i=>[i.name,i])),this._catalog=r,this._applySegments(e),this._deviceError=void 0)},M=>{V()&&(this._deviceError=a5(M)?"no_integration":"unreachable")})}_scheduleRefresh(){clearTimeout(this._refreshTimer),this._refreshTimer=setTimeout(()=>this._refreshSegment(),u3)}_refreshSegment(){let H=this._target;!H||this._deviceError||!this.isConnected||D1(H).then(V=>this._applySegments(V),()=>{})}_applySegments(H){let V=typeof this._link=="object"?this._link.segment:-1;this._segment=H.find(M=>M.id===V)}async _setSegment(H){let V=this._target;if(V)try{this._applySegments(await d5(V,H))}catch{this._scheduleRefresh()}}_t(H,V){return T(this.hass,H,V)}get _effectName(){let H=this._stateObj?.attributes.effect;if(H)return H;let V=this._segment?.fx;return V!==void 0?this._catalog?.effectNames[V]:void 0}get _effect(){let H=this._effectName;return H?this._effects?.get(H):void 0}_color(H){let V=this._segment?.col?.[H];if(V&&V.length>=3)return[V[0],V[1],V[2]];if(H===0)return this._stateObj?.attributes.rgb_color}_usesColor(H){let V=this._effect;return!V||V.colors[H]!==null}get _paletteEntity(){return typeof this._link=="object"?this._link.palette:void 0}get _paletteNames(){let H=this._paletteEntity;return(H?this.hass.states[H]?.attributes.options:void 0)??this._catalog?.paletteNames??[]}get _currentPalette(){let H=this._paletteEntity;if(H)return this.hass.states[H]?.state;let V=this._segment?.pal;return V!==void 0?this._catalog?.paletteNames[V]:void 0}_paletteCss(H){let V=this._catalog;if(!V||!H)return;let M=V.paletteNames.indexOf(H);if(M<0)return;let r=[0,1,2].map(e=>this._color(e)??[0,0,0]);return l5(V.palx[String(M)],r)}render(){if(!this._config||!this.hass)return d;let H=this._stateObj,V=this._config.appearance??"plain",M=H?this._link==="not_wled"?this._t("wled.not_wled"):void 0:this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:this._config.entity});return M||!H?p`<ha-card class=${V}>
        <ha-alert alert-type="warning">${M}</ha-alert>
      </ha-card>`:p`
      <ha-card class=${V} .label=${C5(H)}>
        ${this._header(H)}
        <div class="controls">
          ${this._mainControl(H)} ${this._buttonBar(H)}
        </div>
        ${this._config.show_effects===!1?d:this._effectsSection(H)}
        ${this._deviceNote()}
      </ha-card>
    `}_header(H){let V=this._config;if(V.show_state===!1)return d;let M=H.state==="on"&&H.attributes.brightness!=null?this.hass.formatEntityAttributeValue(H,"brightness"):void 0;return V.show_last_changed===!1?p`<p class="state">
        ${M??this.hass.formatEntityState(H)}
      </p>`:p`<ha-more-info-state-header
      .hass=${this.hass}
      .stateObj=${H}
      .stateOverride=${M}
    ></ha-more-info-state-header>`}_mainControl(H){let V=this.hass;switch(this._mode){case"color":return p`<light-color-rgb-picker
          .hass=${V}
          .stateObj=${H}
        ></light-color-rgb-picker>`;case"color_temp":return p`<light-color-temp-picker
          .hass=${V}
          .stateObj=${H}
        ></light-color-temp-picker>`;case"secondary":return this._secondaryPicker();case"palette":return this._palettePicker();case"settings":return this._settingsPanel(H);default:return p`<ha-state-control-light-brightness
          .hass=${V}
          .stateObj=${H}
        ></ha-state-control-light-brightness>`}}_secondaryPicker(){let H=this._slot,V=this._preview??this._color(H),M=t=>{t.stopPropagation(),this._preview=void 0;let A=t.detail.value;if(!A)return;let n=[[],[],[]];n[H]=W1(A),this._setSegment({col:n})},r=t=>{t.stopPropagation(),this._preview=t.detail.value?W1(t.detail.value):void 0},e=()=>{let t=[[],[],[]];t[H]=[0,0,0],this._setSegment({col:t})},i=t=>this._effect?.colors[t]??this._t(t===1?"wled.secondary_color":"wled.tertiary_color");return p`
      <div class="color-container">
        <ha-hs-color-picker
          .value=${Y1(V)?void 0:v5(V)}
          .colorBrightness=${255}
          @value-changed=${M}
          @cursor-moved=${r}
        ></ha-hs-color-picker>
      </div>
      <div class="slot-bar">
        ${this._usesColor(2)||this._slot===2?p`<ha-control-button-group class="slots">
                ${[1,2].map(t=>p`<ha-control-button
                      class=${B({active:H===t})}
                      @click=${()=>{this._slot=t}}
                    >
                      <span
                        class="dot"
                        style=${q({background:X1(this._color(t))})}
                      ></span>
                      <span class="label">${i(t)}</span>
                    </ha-control-button>`)}
              </ha-control-button-group>`:p`<span class="slot-title">${i(1)}</span>`}
        <ha-icon-button
          .label=${this._t("wled.color_black")}
          .path=${c2}
          @click=${e}
        ></ha-icon-button>
      </div>
    `}_palettePicker(){let H=this._currentPalette,V=M=>{let r=this._paletteEntity;if(r)this.hass.callService("select","select_option",{entity_id:r,option:M});else{let e=this._catalog?.paletteNames.indexOf(M)??-1;e>=0&&this._setSegment({pal:e})}};return p`
      <div
        class="palettes"
        role="listbox"
        aria-label=${this._t("wled.palette")}
      >
        ${this._paletteNames.map(M=>{let r=M===H,e=this._paletteCss(M);return p`
            <button
              class=${B({"palette-row":!0,selected:r})}
              role="option"
              aria-selected=${r}
              @click=${()=>V(M)}
            >
              <span
                class=${B({preview:!0,empty:!e})}
                style=${q({backgroundImage:e})}
              ></span>
              <span class="name">${M}</span>
            </button>
          `})}
      </div>
    `}updated(H){super.updated(H),H.has("_mode")&&this._mode==="palette"&&this.renderRoot.querySelector(".palette-row.selected")?.scrollIntoView({block:"center"})}_buttonBar(H){let V=this.hass,M=H.state==="unavailable",r=r5(H),e=e5(H),i=t5(H),t=i5(H),A=!!this._segment,n=!!(this._paletteEntity||this._catalog),o=this._hasSettings(),a=e||i||n||o,v=this._mode,s=O=>X=>{X.stopPropagation(),this._mode=O},h=O=>{O.stopPropagation(),V.callService("light",H.state==="on"?"turn_off":"turn_on",{entity_id:H.entity_id})},f=this._color(1),k=this._paletteCss(this._currentPalette);return p`
      <ha-icon-button-group>
        <ha-icon-button
          .disabled=${M}
          .label=${V.localize("ui.dialogs.more_info_control.light.toggle")}
          @click=${h}
        >
          <ha-svg-icon .path=${b2}></ha-svg-icon>
        </ha-icon-button>
        ${a?p`<div class="separator"></div>`:d}
        ${r&&a?p`<ha-icon-button-toggle
                .selected=${v==="brightness"}
                .disabled=${M}
                .label=${V.formatEntityAttributeName(H,"brightness")}
                @click=${s("brightness")}
              >
                <ha-svg-icon .path=${s2}></ha-svg-icon>
              </ha-icon-button-toggle>`:d}
        ${e?p`<ha-icon-button-toggle
                border-only
                .selected=${v==="color"}
                .disabled=${M}
                .label=${V.localize("ui.dialogs.more_info_control.light.color")}
                @click=${s("color")}
              >
                <span class="wheel color"></span>
              </ha-icon-button-toggle>`:d}
        ${e&&A?p`<ha-icon-button-toggle
                border-only
                .selected=${v==="secondary"}
                .disabled=${M||!this._usesColor(1)}
                .label=${this._usesColor(1)?this._t("wled.secondary_color"):this._t("wled.not_used")}
                @click=${s("secondary")}
              >
                <span
                  class=${B({wheel:!0,swatch:!0,off:Y1(f)})}
                  style=${q({background:Y1(f)?void 0:X1(f)})}
                ></span>
              </ha-icon-button-toggle>`:d}
        ${i?p`<ha-icon-button-toggle
                border-only
                .selected=${v==="color_temp"}
                .disabled=${M}
                .label=${V.localize("ui.dialogs.more_info_control.light.color_temp")}
                @click=${s("color_temp")}
              >
                <span class="wheel color-temp"></span>
              </ha-icon-button-toggle>`:d}
        ${n?p`<ha-icon-button-toggle
                border-only
                .selected=${v==="palette"}
                .disabled=${M||this._effect?.palette===!1}
                .label=${this._effect?.palette===!1?this._t("wled.not_used"):this._t("wled.palette")}
                @click=${s("palette")}
              >
                <span
                  class=${B({wheel:!0,palette:!0,empty:!k})}
                  style=${q({backgroundImage:k})}
                ></span>
              </ha-icon-button-toggle>`:d}
        ${o?p`<ha-icon-button-toggle
                .selected=${v==="settings"}
                .disabled=${M}
                .label=${this._t("wled.effect_settings")}
                @click=${s("settings")}
              >
                <ha-svg-icon .path=${w2}></ha-svg-icon>
              </ha-icon-button-toggle>`:d}
        ${t?p`<div class="separator"></div>
                <ha-icon-button
                  .disabled=${M}
                  .label=${V.localize("ui.dialogs.more_info_control.light.set_white")}
                  @click=${()=>V.callService("light","turn_on",{entity_id:H.entity_id,white:!0})}
                >
                  <ha-svg-icon .path=${O2}></ha-svg-icon>
                </ha-icon-button>`:d}
      </ha-icon-button-group>
    `}_pickerParams(H){return{kind:H,entityId:this._config.entity,presetEntity:this._presetEntity,deviceId:this._deviceError?void 0:this._deviceId,current:this._effectName}}get _presetEntity(){return typeof this._link=="object"?this._link.preset:void 0}_openPicker(H,V){if(H.stopPropagation(),this._pickerOpen){let t=this._pickerOpen===V;if(this._pickerOpen=void 0,t)return}let M=this._stateObj,r={viewTag:x1,viewTitle:V==="preset"?this._t("wled.preset"):this.hass.formatEntityAttributeName(M,"effect"),viewParams:this._pickerParams(V)},e=!1,i=()=>{e=!0};window.addEventListener("show-child-view",i),D(this,"show-child-view",r),window.removeEventListener("show-child-view",i),e&&(this._pickerOpen=V)}_effectsSection(H){let V=this.hass,M=!!H.attributes.effect_list?.length,r=this._presetEntity?V.states[this._presetEntity]:void 0,e=!!r?.attributes.options?.length;if(!M&&!e)return d;let i=this._effect,t=[...(i?.categories??[]).filter(n=>n!=="0d"),...i?.palette?["palette"]:[]],A=r&&!["unknown","unavailable"].includes(r.state)?r.state:void 0;return p`
      <div class="effects">
        ${M?this._pickerChip("effect",h2,V.formatEntityAttributeName(H,"effect"),this._effectName,t.map(n=>t1[n])):d}
        ${e?this._pickerChip("preset",P2,this._t("wled.preset"),A):d}
      </div>
    `}_pickerChip(H,V,M,r,e=[]){let i=this._stateObj,t=this._pickerOpen===H;return p`
      <button
        class="chip effect"
        ?disabled=${i.state==="unavailable"}
        aria-expanded=${t}
        @click=${A=>this._openPicker(A,H)}
      >
        <div class="icon"><ha-svg-icon .path=${V}></ha-svg-icon></div>
        <div class="content">
          <p class="label">${M}</p>
          <p class="value">${r??"\u2014"}</p>
        </div>
        <div class="tags">
          ${e.map(A=>p`<ha-svg-icon .path=${A}></ha-svg-icon>`)}
        </div>
        <div class="icon">
          <ha-svg-icon .path=${S2}></ha-svg-icon>
        </div>
      </button>
      ${t?p`<more-info-wled-effect-picker
              inline
              .hass=${this.hass}
              .params=${this._pickerParams(H)}
              @wled-effect-picked=${()=>{this._pickerOpen=void 0}}
              @close-child-view=${A=>A.stopPropagation()}
            ></more-info-wled-effect-picker>`:d}
    `}_hasSettings(){return this._sliderRows().length>0||this._optionKeys().length>0}_settingsPanel(H){return this._hasSettings()?p`<div class="settings">
      ${this._sliders(H)} ${this._options()}
    </div>`:p`<p class="settings empty">
        ${this._t("wled.no_effect_settings")}
      </p>`}_sliderValue(H){let V=this._moving[H];if(V!==void 0)return V;let M=typeof this._link=="object"?this._link:void 0,r=H==="sx"?M?.speed:H==="ix"?M?.intensity:void 0,e=r?this.hass.states[r]?.state:void 0;return e!==void 0&&!Number.isNaN(Number(e))?Number(e):this._segment?.[H]}_setSlider(H,V){let M=typeof this._link=="object"?this._link:void 0,r=H==="sx"?M?.speed:H==="ix"?M?.intensity:void 0;r?this.hass.callService("number","set_value",{entity_id:r,value:V}):this._setSegment({[H]:V})}_sliderRows(){let H=this._effect,V=typeof this._link=="object"?this._link:void 0;return(H?H.sliders:[...V?.speed?[{key:"sx"}]:[],...V?.intensity?[{key:"ix"}]:[]]).map(r=>({...r,value:this._sliderValue(r.key)})).filter(r=>r.value!==void 0)}_sliders(H){let V=q({"--control-slider-color":X1(this._color(0))??"var(--state-light-active-color, var(--state-active-color))"}),M=this._sliderRows();return M.length?p`
      <div class="sliders">
        ${M.map(r=>{let e=r.label??this._t(`wled.slider.${r.key}`),i=Z3[r.key];return p`
            <div class="slider">
              <div class="slider-label">
                <span>${e}</span>
                <span class="slider-value"
                  >${Math.round((r.value??0)/i*100)} %</span
                >
              </div>
              <ha-control-slider
                style=${V}
                .value=${r.value}
                .min=${0}
                .max=${i}
                .step=${1}
                .label=${e}
                .disabled=${H.state==="unavailable"}
                @slider-moved=${t=>{t.stopPropagation(),this._moving={...this._moving,[r.key]:t.detail.value}}}
                @value-changed=${t=>{t.stopPropagation();let A={...this._moving};delete A[r.key],this._moving=A,this._setSlider(r.key,t.detail.value)}}
              ></ha-control-slider>
            </div>
          `})}
      </div>
    `:d}_optionKeys(){return this._segment?this._effect?.options??[]:[]}_options(){let H=this._optionKeys(),V=this._segment;return!H.length||!V?d:p`
      <ha-control-button-group class="options">
        ${H.map(({key:M,label:r})=>{let e=!!V[M];return p`<ha-control-button
            class=${B({active:e})}
            aria-pressed=${e}
            @click=${()=>this._setSegment({[M]:!e})}
          >
            <span class="label"
              >${r??this._t(`wled.option.${M}`)}</span
            >
          </ha-control-button>`})}
      </ha-control-button-group>
    `}_deviceNote(){let H=this._deviceError;return H?p`<p class="note">
      ${this._t(H==="no_integration"?"wled.no_integration":"wled.unreachable")}
    </p>`:d}};l=G(W5),J1=new WeakMap,C2=new WeakMap,H2=new WeakMap,V2=new WeakMap,L2=new WeakMap,M2=new WeakMap,r2=new WeakMap,e2=new WeakMap,t2=new WeakMap,i2=new WeakMap,o2=new WeakMap,A2=new WeakMap,a2=new WeakMap,x(l,4,"hass",N5,S,J1),x(l,4,"_config",D5,S,C2),x(l,4,"_ready",E5,S,H2),x(l,4,"_link",_5,S,V2),x(l,4,"_effects",R5,S,L2),x(l,4,"_catalog",F5,S,M2),x(l,4,"_segment",T5,S,r2),x(l,4,"_deviceError",P5,S,e2),x(l,4,"_mode",B5,S,t2),x(l,4,"_slot",w5,S,i2),x(l,4,"_preview",b5,S,o2),x(l,4,"_moving",y5,S,A2),x(l,4,"_pickerOpen",k5,S,a2),N(l,S),b(S,"styles",[o5,A5,_`
      :host {
        display: flex;
        flex-direction: column;
        min-height: var(--popup-min-height, auto);
      }
      ha-card {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      ha-card.plain {
        padding-bottom: var(--ha-space-4);
      }
      ha-card.card {
        padding: var(--ha-space-6) var(--ha-space-4);
      }
      p.state {
        text-align: center;
        margin: 0 0 var(--ha-space-5);
        font-size: var(--ha-font-size-3xl, 28px);
        line-height: var(--ha-line-height-condensed, 1.2);
      }
      /* more-info-control-style.ts */
      .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
      }
      .controls > *:not(:last-child) {
        margin-bottom: var(--ha-space-6);
      }
      /* more-info-light.ts */
      .wheel {
        width: 28px;
        height: 28px;
        flex: none;
        border-radius: var(--ha-border-radius-circle);
        box-sizing: border-box;
      }
      .wheel.color {
        background-image: url("/static/images/color_wheel.png");
        background-size: cover;
      }
      .wheel.color-temp {
        background: linear-gradient(
          0,
          rgb(166, 209, 255) 0%,
          white 50%,
          rgb(255, 160, 0) 100%
        );
      }
      .wheel.swatch {
        border: 1px solid var(--divider-color);
      }
      .wheel.off,
      .wheel.empty {
        border: 2px dashed var(--secondary-text-color);
      }
      *[disabled] .wheel {
        filter: grayscale(1) opacity(0.5);
      }
      /* light-color-rgb-picker.ts */
      .color-container {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 320px;
      }
      ha-hs-color-picker {
        height: 45vh;
        max-height: 320px;
        min-height: 200px;
        aspect-ratio: 1;
      }
      .slot-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--ha-space-2);
        width: 100%;
        max-width: 320px;
      }
      .slot-title {
        color: var(--secondary-text-color);
      }
      .slots {
        flex: 1;
        --control-button-group-thickness: 40px;
      }
      .dot {
        position: relative;
        width: 14px;
        height: 14px;
        flex: none;
        border-radius: var(--ha-border-radius-circle);
        border: 1px solid var(--divider-color);
        margin-inline-end: var(--ha-space-2);
      }
      ha-control-button .label {
        position: relative;
      }
      ha-control-button.active {
        --control-button-background-color: var(--primary-color);
        --control-button-background-opacity: 0.2;
        --control-button-icon-color: var(--primary-color);
      }
      /* Palette list: WLED previews in the size of the main control. */
      .palettes {
        display: flex;
        flex-direction: column;
        gap: var(--ha-space-1);
        width: 100%;
        max-width: 360px;
        height: 45vh;
        max-height: 320px;
        min-height: 200px;
        overflow-y: auto;
        padding: var(--ha-space-1);
        box-sizing: border-box;
        scrollbar-width: thin;
      }
      .palette-row {
        display: flex;
        align-items: center;
        gap: var(--ha-space-3);
        min-height: 44px;
        padding: var(--ha-space-1) var(--ha-space-2);
        border: none;
        border-radius: var(--ha-border-radius-lg);
        background: none;
        color: var(--primary-text-color);
        font: inherit;
        font-size: var(--ha-font-size-m);
        text-align: start;
        cursor: pointer;
      }
      .palette-row:hover,
      .palette-row:focus-visible {
        background: var(
          --ha-color-fill-neutral-quiet-hover,
          rgba(139, 145, 151, 0.12)
        );
        outline: none;
      }
      .palette-row.selected {
        background: var(
          --ha-color-fill-primary-quiet-resting,
          rgba(var(--rgb-primary-color), 0.12)
        );
        font-weight: var(--ha-font-weight-medium);
      }
      .palette-row .preview {
        width: 96px;
        height: 24px;
        flex: none;
        border-radius: var(--ha-border-radius-md);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
      }
      .palette-row .preview.empty {
        background: var(--disabled-color);
        opacity: 0.3;
      }
      .palette-row .name {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /* Effects */
      .effects {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--ha-space-4);
      }
      .effects > * {
        width: 100%;
        max-width: 400px;
      }
      .effects {
        margin-top: var(--ha-space-6);
      }
      .chip.effect {
        width: 100%;
      }
      .chip.effect .content {
        flex: 1;
      }
      .chip.effect .tags {
        display: flex;
        gap: var(--ha-space-1);
        color: var(--secondary-text-color);
        --mdc-icon-size: 18px;
      }
      more-info-wled-effect-picker {
        max-height: 420px;
        overflow-y: auto;
      }
      /* Effect settings mode, in the main control's place. */
      .settings {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--ha-space-6);
        width: 100%;
        max-width: 360px;
        min-height: 200px;
        height: 45vh;
        max-height: 320px;
        overflow-y: auto;
        box-sizing: border-box;
        padding: var(--ha-space-1);
        scrollbar-width: thin;
      }
      .settings.empty {
        margin: 0;
        text-align: center;
        color: var(--secondary-text-color);
      }
      .sliders {
        display: flex;
        flex-direction: column;
        gap: var(--ha-space-3);
      }
      .slider-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--ha-space-1);
        font-size: var(--ha-font-size-s);
        color: var(--secondary-text-color);
      }
      .slider-value {
        font-variant-numeric: tabular-nums;
      }
      ha-control-slider {
        --control-slider-thickness: 40px;
        --control-slider-border-radius: var(--ha-border-radius-lg);
      }
      .options {
        --control-button-group-thickness: 40px;
      }
      .note {
        margin: var(--ha-space-4) var(--ha-space-4) 0;
        font-size: var(--ha-font-size-s);
        color: var(--secondary-text-color);
        text-align: center;
      }
    `]);customElements.get(j)||customElements.define(j,S);window.customCards=window.customCards??[];window.customCards.some(L=>L.type===j)||window.customCards.push({type:j,name:T(void 0,"wled_card.name"),description:T(void 0,"wled_card.description"),preview:!0,documentationURL:"https://github.com/Cheerpipe/Home-Assistant-WLED-More-Info"});console.info("%c WLED-MORE-INFO %c 0.1.0 ","color: white; background: #ff9800; font-weight: 700;","color: #ff9800; background: white; font-weight: 700;");

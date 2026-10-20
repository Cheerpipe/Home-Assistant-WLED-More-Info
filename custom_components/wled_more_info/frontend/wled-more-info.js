var h3=Object.create;var g1=Object.defineProperty;var O3=Object.getOwnPropertyDescriptor;var y2=(L,H)=>(H=Symbol[L])?H:Symbol.for("Symbol."+L),G=L=>{throw TypeError(L)};var w2=(L,H,C)=>H in L?g1(L,H,{enumerable:!0,configurable:!0,writable:!0,value:C}):L[H]=C;var f2=(L,H)=>g1(L,"name",{value:H,configurable:!0});var Q=L=>[,,,h3(L?.[y2("metadata")]??null)],b2=["class","method","getter","setter","accessor","field","value","get","set"],C1=L=>L!==void 0&&typeof L!="function"?G("Function expected"):L,f3=(L,H,C,V,M)=>({kind:b2[L],name:H,metadata:V,addInitializer:r=>C._?G("Already initialized"):M.push(C1(r||null))}),W=(L,H)=>w2(H,y2("metadata"),L[3]),d=(L,H,C,V)=>{for(var M=0,r=L[H>>1],e=r&&r.length;M<e;M++)H&1?r[M].call(C):V=r[M].call(C,V);return V},x=(L,H,C,V,M,r)=>{var e,i,t,A,p,o=H&7,m=!!(H&8),v=!!(H&16),s=o>3?L.length+1:o?m?1:2:0,h=b2[o+5],f=o>3&&(L[s-1]=[]),y=L[s]||(L[s]=[]),O=o&&(!v&&!m&&(M=M.prototype),o<5&&(o>3||!v)&&O3(o<4?M:{get[C](){return g2(this,r)},set[C](k){return k2(this,r,k)}},C));o?v&&o<4&&f2(r,(o>2?"set ":o>1?"get ":"")+C):f2(M,C);for(var J=V.length-1;J>=0;J--)A=f3(o,C,t={},L[3],y),o&&(A.static=m,A.private=v,p=A.access={has:v?k=>g3(M,k):k=>C in k},o^3&&(p.get=v?k=>(o^1?g2:k3)(k,M,o^4?r:O.get):k=>k[C]),o>2&&(p.set=v?(k,f1)=>k2(k,M,f1,o^4?r:O.set):(k,f1)=>k[C]=f1)),i=(0,V[J])(o?o<4?v?r:O[h]:o>4?void 0:{get:O.get,set:O.set}:M,A),t._=1,o^4||i===void 0?C1(i)&&(o>4?f.unshift(i):o?v?r=i:O[h]=i:M=i):typeof i!="object"||i===null?G("Object expected"):(C1(e=i.get)&&(O.get=e),C1(e=i.set)&&(O.set=e),C1(e=i.init)&&f.unshift(e));return o||W(L,M),O&&g1(M,C,O),v?o^4?r:O:M},g=(L,H,C)=>w2(L,typeof H!="symbol"?H+"":H,C),k1=(L,H,C)=>H.has(L)||G("Cannot "+C),g3=(L,H)=>Object(H)!==H?G('Cannot use the "in" operator on this value'):L.has(H),g2=(L,H,C)=>(k1(L,H,"read from private field"),C?C.call(L):H.get(L)),Z=(L,H,C)=>H.has(L)?G("Cannot add the same private member more than once"):H instanceof WeakSet?H.add(L):H.set(L,C),k2=(L,H,C,V)=>(k1(L,H,"write to private field"),V?V.call(L,C):H.set(L,C),C),k3=(L,H,C)=>(k1(L,H,"access private method"),C);var y1={"controls.entity":"Entity","controls.show_state":"Show state","controls.show_last_changed":"Show last changed","controls.appearance":"Appearance","controls.appearance.plain":"Plain (like more-info)","controls.appearance.card":"Card","wled.secondary_color":"Secondary color","wled.tertiary_color":"Tertiary color","wled.palette":"Palette","wled.effects":"Effects","wled.search":"Search effects","wled.no_effects":"No effects match","wled.filter.all":"All","wled.filter.1d":"Strip","wled.filter.2d":"Matrix","wled.filter.1.5d":"Strip on matrix","wled.filter.volume":"Audio: volume","wled.filter.frequency":"Audio: frequency","wled.filter.palette":"Uses palette","wled.slider.sx":"Speed","wled.slider.ix":"Intensity","wled.slider.c1":"Custom 1","wled.slider.c2":"Custom 2","wled.slider.c3":"Custom 3","wled.option.o1":"Option 1","wled.option.o2":"Option 2","wled.option.o3":"Option 3","wled.color_black":"Black (off)","wled.not_used":"Not used by this effect","wled.not_wled":"Pick a WLED light, or a light group made only of WLED segment lights.","controls.show_effects":"Show effects","wled_card.name":"WLED more-info","wled_card.description":"The light more-info for WLED segment lights, with the secondary color, palette previews and effects grouped like in WLED.","wled.unreachable":"Secondary color, palette previews and effect details could not be read from the WLED device.","wled.no_integration":"Secondary color, palette previews and effect details need the WLED More-Info integration: add it in Settings \u2192 Devices & services.","wled.preset":"Preset","wled.search_presets":"Search presets","wled.no_presets":"No presets match","wled.effect_settings":"Effect settings","wled.no_effect_settings":"This effect has no settings"};var B2={"controls.entity":"Entidad","controls.show_state":"Mostrar estado","controls.show_last_changed":"Mostrar \xFAltimo cambio","controls.appearance":"Apariencia","controls.appearance.plain":"Sin marco (como more-info)","controls.appearance.card":"Tarjeta","wled.secondary_color":"Color secundario","wled.tertiary_color":"Color terciario","wled.palette":"Paleta","wled.effects":"Efectos","wled.search":"Buscar efectos","wled.no_effects":"Ning\xFAn efecto coincide","wled.filter.all":"Todos","wled.filter.1d":"Tira","wled.filter.2d":"Matriz","wled.filter.1.5d":"Tira en matriz","wled.filter.volume":"Audio: volumen","wled.filter.frequency":"Audio: frecuencia","wled.filter.palette":"Usa paleta","wled.slider.sx":"Velocidad","wled.slider.ix":"Intensidad","wled.slider.c1":"Personalizado 1","wled.slider.c2":"Personalizado 2","wled.slider.c3":"Personalizado 3","wled.option.o1":"Opci\xF3n 1","wled.option.o2":"Opci\xF3n 2","wled.option.o3":"Opci\xF3n 3","wled.color_black":"Negro (apagado)","wled.not_used":"Este efecto no lo usa","wled.not_wled":"Elige una luz WLED o un grupo de luces formado solo por segmentos WLED.","controls.show_effects":"Mostrar efectos","wled_card.name":"More-info de WLED","wled_card.description":"El more-info de luz para segmentos de WLED, con color secundario, vista previa de paletas y efectos agrupados como en WLED.","wled.unreachable":"No se pudieron leer el color secundario, la vista previa de paletas ni los detalles de efectos desde el dispositivo WLED.","wled.no_integration":"El color secundario, la vista previa de paletas y los detalles de efectos necesitan la integraci\xF3n WLED More-Info: agr\xE9gala en Ajustes \u2192 Dispositivos y servicios.","wled.preset":"Preset","wled.search_presets":"Buscar presets","wled.no_presets":"Ning\xFAn preset coincide","wled.effect_settings":"Ajustes del efecto","wled.no_effect_settings":"Este efecto no tiene ajustes"};var P2={en:y1,es:B2},F=(L,H,C)=>{let V=L?.language??(typeof document<"u"&&document.documentElement.lang||"en"),M=V.split("-")[0],r=P2[V]?.[H]??P2[M]?.[H]??y1[H];if(C)for(let[e,i]of Object.entries(C))r=r.replace(`{${e}}`,String(i));return r};var y3="relative_light_group",d1=(L,H)=>{let C=L.entities?.[H];return H.startsWith("light.")&&C?.platform==="wled"&&C.translation_key==="segment"},T2=(L,H)=>{if(!H.startsWith("light.")||L.entities?.[H]?.platform==="wled")return;let C=L.states[H]?.attributes.entity_id;return Array.isArray(C)&&C.length?C.map(String):void 0},z=(L,H,C=new Set)=>{let V=T2(L,H);if(!V||C.has(H))return;let M=new Set(C).add(H),r=[];for(let e of V){let i=d1(L,e)?[e]:z(L,e,M);if(!i)return;for(let t of i)r.includes(t)||r.push(t)}return r},F2=(L,H)=>L.states[H]?.state==="on",w1=(L,H,C=new Set)=>{if(d1(L,H))return[H];let V=T2(L,H);if(!V||C.has(H))return[];let M=new Set(C).add(H),r=V;if(L.entities?.[H]?.platform===y3){let i=V.filter(t=>F2(L,t));i.length&&(r=i)}let e=[];for(let i of r)for(let t of w1(L,i,M))e.includes(t)||e.push(t);return e},R2=(L,H)=>H.find(C=>F2(L,C))??H[0];var _2="more-info-wled-state-card",E2="more-info-content",D2="more-info-light",N2=Symbol.for("wled-more-info.patched"),B1=(L,H)=>!L||!H?.startsWith("light.")?!1:d1(L,H)||!!z(L,H)?.length,$2=L=>{try{return new URL(L).searchParams.get("replace")!=="0"}catch{return!0}},I2,W2=new WeakMap,b1=new Set,w3=()=>I2??document.querySelector("home-assistant")?.hass,b3=(L,H,C)=>{let V=W2.get(L);return(!V||V.getAttribute("data-entity")!==C)&&(V=document.createElement(_2),V.setConfig({type:`custom:${_2}`,entity:C}),V.setAttribute("data-entity",C),W2.set(L,V)),b1.add(V),V.hass=H,V.inDialog=!0,V.entry=L.entry,V.editMode=L.editMode,V},U2=(L,H)=>{let C=L?.prototype;if(!C?.render||C[N2])return!1;let V=C.render;return C.render=function(){return H(()=>V.call(this),this)},C[N2]=!0,!0},B3=L=>U2(L,(H,C)=>{if(C.hass){I2=C.hass;for(let V of b1)V.isConnected?V.hass=C.hass:b1.delete(V)}return H()}),P3=L=>U2(L,(H,C)=>{let V=w3(),M=C.stateObj?.entity_id;return V&&M&&B1(V,M)?b3(C,V,M):H()}),G2=()=>{customElements.whenDefined(E2).then(()=>B3(customElements.get(E2))),customElements.whenDefined(D2).then(()=>P3(customElements.get(D2)))};var R=class{_promises=new Map;_values=new Map;get(H,C){let V=this._promises.get(H);return V||(V=C(),this._promises.set(H,V),V.then(M=>this._values.set(H,M),()=>this._promises.delete(H))),V}peek(H){return this._values.get(H)}set(H,C){this._values.set(H,C)}};var P1="wled_more_info",Q2=L=>L?.code==="unknown_command",z2=new R,T1=new R,p1=L=>z2.get(L.deviceId,()=>L.hass.callWS({type:`${P1}/catalog`,entity_id:L.entityId})),K2=L=>z2.peek(L),q2=L=>T1.peek(L),H1=async L=>{let{seg:H}=await L.hass.callWS({type:`${P1}/state`,entity_id:L.entityId});return T1.set(L.deviceId,H),H},F1=async(L,H)=>{let{seg:C}=await L.hass.callWS({type:`${P1}/set_segment`,entity_id:L.entityId,data:H});return T1.set(L.deviceId,C),C};var j2="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";var X2="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";var Y2="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";var J2="M22.11 21.46L2.39 1.73L1.11 3L4.06 5.95C2.78 7.63 2 9.72 2 12C2 17.5 6.5 22 12 22C14.28 22 16.37 21.23 18.05 19.94L20.84 22.73L22.11 21.46M12 20C7.58 20 4 16.42 4 12C4 10.27 4.56 8.68 5.5 7.38L16.62 18.5C15.32 19.45 13.73 20 12 20M8.17 4.97L6.72 3.5C8.25 2.56 10.06 2 12 2C17.5 2 22 6.5 22 12C22 13.94 21.44 15.75 20.5 17.28L19.03 15.83C19.65 14.69 20 13.39 20 12C20 7.58 16.42 4 12 4C10.61 4 9.31 4.35 8.17 4.97Z";var C5="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74";var H5="M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z";var V5="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z";var L5="M2.95 3L2 6.91L19.34 11.25L20.29 7.34L2.95 3M6.09 6.89L4.16 6.41L4.64 4.46L6.57 4.94L6.09 6.89M9.94 7.86L8 7.38L8.5 5.42L10.42 5.91L9.94 7.86M13.8 8.82L11.87 8.34L12.35 6.39L14.27 6.87L13.8 8.82M17.65 9.79L15.72 9.31L16.2 7.35L18.13 7.84L17.65 9.79M4.66 12.75L3.71 16.66L21.05 21L22 17.1L4.66 12.75M7.8 16.65L5.88 16.16L6.35 14.21L8.28 14.69L7.8 16.65M11.65 17.61L9.73 17.13L10.2 15.18L12.13 15.66L11.65 17.61M15.5 18.58L13.58 18.09L14.06 16.14L16 16.62L15.5 18.58M19.36 19.54L17.43 19.06L17.91 17.11L19.84 17.59L19.36 19.54M6.25 12.11L11 10.2L17.75 11.89L13 13.8L6.25 12.11Z";var M5="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";var r5="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";var e5="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";var t5="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z";var i5="M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z";var o5="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z";var A5="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var a5="M22 12L20 13L19 14L18 13L17 16L16 13L15 21L14 13L13 15L12 13L11 17L10 13L9 22L8 13L7 19L6 13L5 14L4 13L2 12L4 11L5 10L6 11L7 5L8 11L9 2L10 11L11 7L12 11L13 9L14 11L15 3L16 11L17 8L18 11L19 10L20 11L22 12Z";var m1=globalThis,n1=m1.ShadowRoot&&(m1.ShadyCSS===void 0||m1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R1=Symbol(),d5=new WeakMap,V1=class{constructor(H,C,V){if(this._$cssResult$=!0,V!==R1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=H,this.t=C}get styleSheet(){let H=this.o,C=this.t;if(n1&&H===void 0){let V=C!==void 0&&C.length===1;V&&(H=d5.get(C)),H===void 0&&((this.o=H=new CSSStyleSheet).replaceSync(this.cssText),V&&d5.set(C,H))}return H}toString(){return this.cssText}},p5=L=>new V1(typeof L=="string"?L:L+"",void 0,R1),E=(L,...H)=>{let C=L.length===1?L[0]:H.reduce((V,M,r)=>V+(e=>{if(e._$cssResult$===!0)return e.cssText;if(typeof e=="number")return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(M)+L[r+1],L[0]);return new V1(C,L,R1)},m5=(L,H)=>{if(n1)L.adoptedStyleSheets=H.map(C=>C instanceof CSSStyleSheet?C:C.styleSheet);else for(let C of H){let V=document.createElement("style"),M=m1.litNonce;M!==void 0&&V.setAttribute("nonce",M),V.textContent=C.cssText,L.appendChild(V)}},_1=n1?L=>L:L=>L instanceof CSSStyleSheet?(H=>{let C="";for(let V of H.cssRules)C+=V.cssText;return p5(C)})(L):L;var{is:T3,defineProperty:F3,getOwnPropertyDescriptor:R3,getOwnPropertyNames:_3,getOwnPropertySymbols:E3,getPrototypeOf:D3}=Object,l1=globalThis,n5=l1.trustedTypes,N3=n5?n5.emptyScript:"",W3=l1.reactiveElementPolyfillSupport,L1=(L,H)=>L,M1={toAttribute(L,H){switch(H){case Boolean:L=L?N3:null;break;case Object:case Array:L=L==null?L:JSON.stringify(L)}return L},fromAttribute(L,H){let C=L;switch(H){case Boolean:C=L!==null;break;case Number:C=L===null?null:Number(L);break;case Object:case Array:try{C=JSON.parse(L)}catch{C=null}}return C}},v1=(L,H)=>!T3(L,H),l5={attribute:!0,type:String,converter:M1,reflect:!1,useDefault:!1,hasChanged:v1};Symbol.metadata??=Symbol("metadata"),l1.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(H){this._$Ei(),(this.l??=[]).push(H)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(H,C=l5){if(C.state&&(C.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(H)&&((C=Object.create(C)).wrapped=!0),this.elementProperties.set(H,C),!C.noAccessor){let V=Symbol(),M=this.getPropertyDescriptor(H,V,C);M!==void 0&&F3(this.prototype,H,M)}}static getPropertyDescriptor(H,C,V){let{get:M,set:r}=R3(this.prototype,H)??{get(){return this[C]},set(e){this[C]=e}};return{get:M,set(e){let i=M?.call(this);r?.call(this,e),this.requestUpdate(H,i,V)},configurable:!0,enumerable:!0}}static getPropertyOptions(H){return this.elementProperties.get(H)??l5}static _$Ei(){if(this.hasOwnProperty(L1("elementProperties")))return;let H=D3(this);H.finalize(),H.l!==void 0&&(this.l=[...H.l]),this.elementProperties=new Map(H.elementProperties)}static finalize(){if(this.hasOwnProperty(L1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L1("properties"))){let C=this.properties,V=[..._3(C),...E3(C)];for(let M of V)this.createProperty(M,C[M])}let H=this[Symbol.metadata];if(H!==null){let C=litPropertyMetadata.get(H);if(C!==void 0)for(let[V,M]of C)this.elementProperties.set(V,M)}this._$Eh=new Map;for(let[C,V]of this.elementProperties){let M=this._$Eu(C,V);M!==void 0&&this._$Eh.set(M,C)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(H){let C=[];if(Array.isArray(H)){let V=new Set(H.flat(1/0).reverse());for(let M of V)C.unshift(_1(M))}else H!==void 0&&C.push(_1(H));return C}static _$Eu(H,C){let V=C.attribute;return V===!1?void 0:typeof V=="string"?V:typeof H=="string"?H.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(H=>this.enableUpdating=H),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(H=>H(this))}addController(H){(this._$EO??=new Set).add(H),this.renderRoot!==void 0&&this.isConnected&&H.hostConnected?.()}removeController(H){this._$EO?.delete(H)}_$E_(){let H=new Map,C=this.constructor.elementProperties;for(let V of C.keys())this.hasOwnProperty(V)&&(H.set(V,this[V]),delete this[V]);H.size>0&&(this._$Ep=H)}createRenderRoot(){let H=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return m5(H,this.constructor.elementStyles),H}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(H=>H.hostConnected?.())}enableUpdating(H){}disconnectedCallback(){this._$EO?.forEach(H=>H.hostDisconnected?.())}attributeChangedCallback(H,C,V){this._$AK(H,V)}_$ET(H,C){let V=this.constructor.elementProperties.get(H),M=this.constructor._$Eu(H,V);if(M!==void 0&&V.reflect===!0){let r=(V.converter?.toAttribute!==void 0?V.converter:M1).toAttribute(C,V.type);this._$Em=H,r==null?this.removeAttribute(M):this.setAttribute(M,r),this._$Em=null}}_$AK(H,C){let V=this.constructor,M=V._$Eh.get(H);if(M!==void 0&&this._$Em!==M){let r=V.getPropertyOptions(M),e=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:M1;this._$Em=M;let i=e.fromAttribute(C,r.type);this[M]=i??this._$Ej?.get(M)??i,this._$Em=null}}requestUpdate(H,C,V,M=!1,r){if(H!==void 0){let e=this.constructor;if(M===!1&&(r=this[H]),V??=e.getPropertyOptions(H),!((V.hasChanged??v1)(r,C)||V.useDefault&&V.reflect&&r===this._$Ej?.get(H)&&!this.hasAttribute(e._$Eu(H,V))))return;this.C(H,C,V)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(H,C,{useDefault:V,reflect:M,wrapped:r},e){V&&!(this._$Ej??=new Map).has(H)&&(this._$Ej.set(H,e??C??this[H]),r!==!0||e!==void 0)||(this._$AL.has(H)||(this.hasUpdated||V||(C=void 0),this._$AL.set(H,C)),M===!0&&this._$Em!==H&&(this._$Eq??=new Set).add(H))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(C){Promise.reject(C)}let H=this.scheduleUpdate();return H!=null&&await H,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[M,r]of this._$Ep)this[M]=r;this._$Ep=void 0}let V=this.constructor.elementProperties;if(V.size>0)for(let[M,r]of V){let{wrapped:e}=r,i=this[M];e!==!0||this._$AL.has(M)||i===void 0||this.C(M,void 0,r,i)}}let H=!1,C=this._$AL;try{H=this.shouldUpdate(C),H?(this.willUpdate(C),this._$EO?.forEach(V=>V.hostUpdate?.()),this.update(C)):this._$EM()}catch(V){throw H=!1,this._$EM(),V}H&&this._$AE(C)}willUpdate(H){}_$AE(H){this._$EO?.forEach(C=>C.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(H)),this.updated(H)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(H){return!0}update(H){this._$Eq&&=this._$Eq.forEach(C=>this._$ET(C,this[C])),this._$EM()}updated(H){}firstUpdated(H){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[L1("elementProperties")]=new Map,_[L1("finalized")]=new Map,W3?.({ReactiveElement:_}),(l1.reactiveElementVersions??=[]).push("2.1.2");var U1=globalThis,v5=L=>L,x1=U1.trustedTypes,x5=x1?x1.createPolicy("lit-html",{createHTML:L=>L}):void 0,h5="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,O5="?"+D,$3=`<${O5}>`,U=document,e1=()=>U.createComment(""),t1=L=>L===null||typeof L!="object"&&typeof L!="function",G1=Array.isArray,I3=L=>G1(L)||typeof L?.[Symbol.iterator]=="function",E1=`[ 	
\f\r]`,r1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z5=/-->/g,s5=/>/g,$=RegExp(`>|${E1}(?:([^\\s"'>=/]+)(${E1}*=${E1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),u5=/'/g,S5=/"/g,f5=/^(?:script|style|textarea|title)$/i,Q1=L=>(H,...C)=>({_$litType$:L,strings:H,values:C}),l=Q1(1),b0=Q1(2),B0=Q1(3),b=Symbol.for("lit-noChange"),n=Symbol.for("lit-nothing"),c5=new WeakMap,I=U.createTreeWalker(U,129);function g5(L,H){if(!G1(L)||!L.hasOwnProperty("raw"))throw Error("invalid template strings array");return x5!==void 0?x5.createHTML(H):H}var U3=(L,H)=>{let C=L.length-1,V=[],M,r=H===2?"<svg>":H===3?"<math>":"",e=r1;for(let i=0;i<C;i++){let t=L[i],A,p,o=-1,m=0;for(;m<t.length&&(e.lastIndex=m,p=e.exec(t),p!==null);)m=e.lastIndex,e===r1?p[1]==="!--"?e=Z5:p[1]!==void 0?e=s5:p[2]!==void 0?(f5.test(p[2])&&(M=RegExp("</"+p[2],"g")),e=$):p[3]!==void 0&&(e=$):e===$?p[0]===">"?(e=M??r1,o=-1):p[1]===void 0?o=-2:(o=e.lastIndex-p[2].length,A=p[1],e=p[3]===void 0?$:p[3]==='"'?S5:u5):e===S5||e===u5?e=$:e===Z5||e===s5?e=r1:(e=$,M=void 0);let v=e===$&&L[i+1].startsWith("/>")?" ":"";r+=e===r1?t+$3:o>=0?(V.push(A),t.slice(0,o)+h5+t.slice(o)+D+v):t+D+(o===-2?i:v)}return[g5(L,r+(L[C]||"<?>")+(H===2?"</svg>":H===3?"</math>":"")),V]},i1=class L{constructor({strings:H,_$litType$:C},V){let M;this.parts=[];let r=0,e=0,i=H.length-1,t=this.parts,[A,p]=U3(H,C);if(this.el=L.createElement(A,V),I.currentNode=this.el.content,C===2||C===3){let o=this.el.content.firstChild;o.replaceWith(...o.childNodes)}for(;(M=I.nextNode())!==null&&t.length<i;){if(M.nodeType===1){if(M.hasAttributes())for(let o of M.getAttributeNames())if(o.endsWith(h5)){let m=p[e++],v=M.getAttribute(o).split(D),s=/([.?@])?(.*)/.exec(m);t.push({type:1,index:r,name:s[2],strings:v,ctor:s[1]==="."?N1:s[1]==="?"?W1:s[1]==="@"?$1:q}),M.removeAttribute(o)}else o.startsWith(D)&&(t.push({type:6,index:r}),M.removeAttribute(o));if(f5.test(M.tagName)){let o=M.textContent.split(D),m=o.length-1;if(m>0){M.textContent=x1?x1.emptyScript:"";for(let v=0;v<m;v++)M.append(o[v],e1()),I.nextNode(),t.push({type:2,index:++r});M.append(o[m],e1())}}}else if(M.nodeType===8)if(M.data===O5)t.push({type:2,index:r});else{let o=-1;for(;(o=M.data.indexOf(D,o+1))!==-1;)t.push({type:7,index:r}),o+=D.length-1}r++}}static createElement(H,C){let V=U.createElement("template");return V.innerHTML=H,V}};function K(L,H,C=L,V){if(H===b)return H;let M=V!==void 0?C._$Co?.[V]:C._$Cl,r=t1(H)?void 0:H._$litDirective$;return M?.constructor!==r&&(M?._$AO?.(!1),r===void 0?M=void 0:(M=new r(L),M._$AT(L,C,V)),V!==void 0?(C._$Co??=[])[V]=M:C._$Cl=M),M!==void 0&&(H=K(L,M._$AS(L,H.values),M,V)),H}var D1=class{constructor(H,C){this._$AV=[],this._$AN=void 0,this._$AD=H,this._$AM=C}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(H){let{el:{content:C},parts:V}=this._$AD,M=(H?.creationScope??U).importNode(C,!0);I.currentNode=M;let r=I.nextNode(),e=0,i=0,t=V[0];for(;t!==void 0;){if(e===t.index){let A;t.type===2?A=new o1(r,r.nextSibling,this,H):t.type===1?A=new t.ctor(r,t.name,t.strings,this,H):t.type===6&&(A=new I1(r,this,H)),this._$AV.push(A),t=V[++i]}e!==t?.index&&(r=I.nextNode(),e++)}return I.currentNode=U,M}p(H){let C=0;for(let V of this._$AV)V!==void 0&&(V.strings!==void 0?(V._$AI(H,V,C),C+=V.strings.length-2):V._$AI(H[C])),C++}},o1=class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(H,C,V,M){this.type=2,this._$AH=n,this._$AN=void 0,this._$AA=H,this._$AB=C,this._$AM=V,this.options=M,this._$Cv=M?.isConnected??!0}get parentNode(){let H=this._$AA.parentNode,C=this._$AM;return C!==void 0&&H?.nodeType===11&&(H=C.parentNode),H}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(H,C=this){H=K(this,H,C),t1(H)?H===n||H==null||H===""?(this._$AH!==n&&this._$AR(),this._$AH=n):H!==this._$AH&&H!==b&&this._(H):H._$litType$!==void 0?this.$(H):H.nodeType!==void 0?this.T(H):I3(H)?this.k(H):this._(H)}O(H){return this._$AA.parentNode.insertBefore(H,this._$AB)}T(H){this._$AH!==H&&(this._$AR(),this._$AH=this.O(H))}_(H){this._$AH!==n&&t1(this._$AH)?this._$AA.nextSibling.data=H:this.T(U.createTextNode(H)),this._$AH=H}$(H){let{values:C,_$litType$:V}=H,M=typeof V=="number"?this._$AC(H):(V.el===void 0&&(V.el=i1.createElement(g5(V.h,V.h[0]),this.options)),V);if(this._$AH?._$AD===M)this._$AH.p(C);else{let r=new D1(M,this),e=r.u(this.options);r.p(C),this.T(e),this._$AH=r}}_$AC(H){let C=c5.get(H.strings);return C===void 0&&c5.set(H.strings,C=new i1(H)),C}k(H){G1(this._$AH)||(this._$AH=[],this._$AR());let C=this._$AH,V,M=0;for(let r of H)M===C.length?C.push(V=new L(this.O(e1()),this.O(e1()),this,this.options)):V=C[M],V._$AI(r),M++;M<C.length&&(this._$AR(V&&V._$AB.nextSibling,M),C.length=M)}_$AR(H=this._$AA.nextSibling,C){for(this._$AP?.(!1,!0,C);H!==this._$AB;){let V=v5(H).nextSibling;v5(H).remove(),H=V}}setConnected(H){this._$AM===void 0&&(this._$Cv=H,this._$AP?.(H))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(H,C,V,M,r){this.type=1,this._$AH=n,this._$AN=void 0,this.element=H,this.name=C,this._$AM=M,this.options=r,V.length>2||V[0]!==""||V[1]!==""?(this._$AH=Array(V.length-1).fill(new String),this.strings=V):this._$AH=n}_$AI(H,C=this,V,M){let r=this.strings,e=!1;if(r===void 0)H=K(this,H,C,0),e=!t1(H)||H!==this._$AH&&H!==b,e&&(this._$AH=H);else{let i=H,t,A;for(H=r[0],t=0;t<r.length-1;t++)A=K(this,i[V+t],C,t),A===b&&(A=this._$AH[t]),e||=!t1(A)||A!==this._$AH[t],A===n?H=n:H!==n&&(H+=(A??"")+r[t+1]),this._$AH[t]=A}e&&!M&&this.j(H)}j(H){H===n?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,H??"")}},N1=class extends q{constructor(){super(...arguments),this.type=3}j(H){this.element[this.name]=H===n?void 0:H}},W1=class extends q{constructor(){super(...arguments),this.type=4}j(H){this.element.toggleAttribute(this.name,!!H&&H!==n)}},$1=class extends q{constructor(H,C,V,M,r){super(H,C,V,M,r),this.type=5}_$AI(H,C=this){if((H=K(this,H,C,0)??n)===b)return;let V=this._$AH,M=H===n&&V!==n||H.capture!==V.capture||H.once!==V.once||H.passive!==V.passive,r=H!==n&&(V===n||M);M&&this.element.removeEventListener(this.name,this,V),r&&this.element.addEventListener(this.name,this,H),this._$AH=H}handleEvent(H){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,H):this._$AH.handleEvent(H)}},I1=class{constructor(H,C,V){this.element=H,this.type=6,this._$AN=void 0,this._$AM=C,this.options=V}get _$AU(){return this._$AM._$AU}_$AI(H){K(this,H)}};var G3=U1.litHtmlPolyfillSupport;G3?.(i1,o1),(U1.litHtmlVersions??=[]).push("3.3.3");var k5=(L,H,C)=>{let V=C?.renderBefore??H,M=V._$litPart$;if(M===void 0){let r=C?.renderBefore??null;V._$litPart$=M=new o1(H.insertBefore(e1(),r),r,void 0,C??{})}return M._$AI(L),M};var z1=globalThis,w=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let H=super.createRenderRoot();return this.renderOptions.renderBefore??=H.firstChild,H}update(H){let C=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(H),this._$Do=k5(C,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}};w._$litElement$=!0,w.finalized=!0,z1.litElementHydrateSupport?.({LitElement:w});var Q3=z1.litElementPolyfillSupport;Q3?.({LitElement:w});(z1.litElementVersions??=[]).push("4.2.2");var z3={attribute:!0,type:String,converter:M1,reflect:!1,hasChanged:v1},K3=(L=z3,H,C)=>{let{kind:V,metadata:M}=C,r=globalThis.litPropertyMetadata.get(M);if(r===void 0&&globalThis.litPropertyMetadata.set(M,r=new Map),V==="setter"&&((L=Object.create(L)).wrapped=!0),r.set(C.name,L),V==="accessor"){let{name:e}=C;return{set(i){let t=H.get.call(this);H.set.call(this,i),this.requestUpdate(e,t,L,!0,i)},init(i){return i!==void 0&&this.C(e,void 0,L,i),i}}}if(V==="setter"){let{name:e}=C;return function(i){let t=this[e];H.call(this,i),this.requestUpdate(e,t,L,!0,i)}}throw Error("Unsupported decorator location: "+V)};function B(L){return(H,C)=>typeof C=="object"?K3(L,H,C):((V,M,r)=>{let e=M.hasOwnProperty(r);return M.constructor.createProperty(r,V),e?Object.getOwnPropertyDescriptor(M,r):void 0})(L,H,C)}function S(L){return B({...L,state:!0,attribute:!1})}var s1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},u1=L=>(...H)=>({_$litDirective$:L,values:H}),j=class{constructor(H){}get _$AU(){return this._$AM._$AU}_$AT(H,C,V){this._$Ct=H,this._$AM=C,this._$Ci=V}_$AS(H,C){return this.update(H,C)}update(H,C){return this.render(...C)}};var P=u1(class extends j{constructor(L){if(super(L),L.type!==s1.ATTRIBUTE||L.name!=="class"||L.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(L){return" "+Object.keys(L).filter(H=>L[H]).join(" ")+" "}update(L,[H]){if(this.st===void 0){this.st=new Set,L.strings!==void 0&&(this.nt=new Set(L.strings.join(" ").split(/\s/).filter(V=>V!=="")));for(let V in H)H[V]&&!this.nt?.has(V)&&this.st.add(V);return this.render(H)}let C=L.element.classList;for(let V of this.st)V in H||(C.remove(V),this.st.delete(V));for(let V in H){let M=!!H[V];M===this.st.has(V)||this.nt?.has(V)||(M?(C.add(V),this.st.add(V)):(C.remove(V),this.st.delete(V)))}return b}});var N=(L,H,C,V={})=>{let M=new CustomEvent(H,{bubbles:V.bubbles??!0,cancelable:V.cancelable??!1,composed:V.composed??!0,detail:C??{}});return L.dispatchEvent(M),M};var q3=["sx","ix","c1","c2","c3"],j3=["o1","o2","o3"],X3=L=>L!==""&&!Number.isNaN(Number(L)),K1=L=>{let H=L.split("=")[0].trim();return H==="!"?void 0:H},Y3=L=>{let H=new Set;for(let C of(L||"1").split(",")){let V=C.trim().toLowerCase();if(!(!V||V.includes("="))){if(V==="1.5d"){H.add("1.5d");continue}V.includes("0")&&H.add("0d"),V.includes("1")&&H.add("1d"),V.includes("2")&&H.add("2d"),V.includes("v")&&H.add("volume"),V.includes("f")&&H.add("frequency")}}return[...H]},J3=(L,H,C)=>{let V=C??"";if(V==="")return{id:L,name:H,sliders:L===0?[]:[{key:"sx"},{key:"ix"}],options:[],colors:[void 0,void 0,void 0],palette:L!==0,categories:L===0?[]:["1d"]};let[M="",r="",e="",i]=V.split(";"),t=M===""?[]:M.split(","),A=r===""?[]:r.split(","),p=e===""?[]:e.split(","),o=[];q3.forEach((h,f)=>{let y=t[f];y!==void 0&&y.trim()!==""&&o.push({key:h,label:K1(y)})});let m=[];j3.forEach((h,f)=>{let y=t[5+f];y!==void 0&&y.trim()!==""&&m.push({key:h,label:K1(y)})});let v=h=>{let f=A[h];return f===void 0||f.trim()===""?null:K1(f)},s=p[0]?.split("=")[0]?.trim()??"";return{id:L,name:H,sliders:o,options:m,colors:[v(0),v(1),v(2)],palette:s!==""&&!X3(s),categories:L===0?[]:Y3(i)}},b5=(L,H)=>L.map((C,V)=>J3(V,C,H?.[V])).filter(C=>!C.name.includes("RSVD")),y5=([L,H,C])=>`rgb(${L}, ${H}, ${C})`,w5=[[255,0,90],[255,170,0],[0,210,120],[0,120,255]],B5=(L,H)=>{if(!L?.length)return;let C=[];return L.forEach((V,M)=>{if(typeof V=="string"){let r=V==="r"?w5[M%w5.length]:H[Number(V.slice(1))-1]??[0,0,0],e=L.length===1?0:M/(L.length-1)*100;C.push(`${y5(r)} ${e.toFixed(1)}%`)}else{let[r,e,i,t]=V;C.push(`${y5([e,i,t])} ${(r/255*100).toFixed(1)}%`)}}),C.length===1&&C.push(C[0].replace(/ [\d.]+%$/," 100%")),`linear-gradient(90deg, ${C.join(", ")})`},P5=([L,H,C])=>{let V=Math.max(L,H,C),M=Math.min(L,H,C),r=V-M,e=V===0?0:r/V,i=0;return r&&(V===L?i=(H-C)/r%6:V===H?i=(C-L)/r+2:i=(L-H)/r+4),[(i*60+360)%360,e]},q1=([L,H])=>{let C=V=>{let M=(V+L/60)%6;return 1-H*Math.max(0,Math.min(M,4-M,1))};return[C(5),C(3),C(1)].map(V=>Math.round(V*255))};var S1="more-info-wled-effect-picker",C0=["all","1d","2d","1.5d","volume","frequency","palette"],A1={"1d":L5,"2d":V5,"1.5d":i5,volume:A5,frequency:a5,palette:r5},N5=new R,a1=L=>N5.get(L.deviceId,()=>p1(L).then(H=>b5(H.effectNames,H.fxdata))),W5=L=>N5.peek(L),T5,F5,R5,_5,E5,D5,c,j1,X1,Y1,J1,C2,T=class extends(D5=w,E5=[B({attribute:!1})],_5=[B({attribute:!1})],R5=[S()],F5=[S()],T5=[S()],D5){constructor(){super(...arguments);Z(this,j1,d(c,8,this)),d(c,11,this);Z(this,X1,d(c,12,this)),d(c,15,this);Z(this,Y1,d(c,16,this)),d(c,19,this);Z(this,J1,d(c,20,this,"all")),d(c,23,this);Z(this,C2,d(c,24,this,"")),d(c,27,this);g(this,"_loadedDevice")}willUpdate(){let C=this.params?.deviceId,V=this.hass;if(!C||!V||C===this._loadedDevice)return;this._loadedDevice=C;let M=this.params.wledEntity??this.params.entityId;a1({hass:V,entityId:M,deviceId:C}).then(r=>{this._effects=new Map(r.map(e=>[e.name,e]))},()=>{})}_t(C){return F(this.hass,C)}get _isPreset(){return this.params?.kind==="preset"}_select(C){let V=this.params;this._isPreset?this.hass.callService("select","select_option",{entity_id:V.presetEntity,option:C}):this.hass.callService("light","turn_on",{entity_id:V.entityId,effect:C}),N(this,"wled-effect-picked",{effect:C}),N(this,"close-child-view")}_matches(C){if(this._search&&!C.toLowerCase().includes(this._search))return!1;if(this._filter==="all"||this._isPreset)return!0;let V=this._effects?.get(C);return V?this._filter==="palette"?V.palette:V.categories.includes(this._filter):!1}render(){let C=this.hass,V=this.params?.entityId,M=V?C?.states[V]:void 0;if(!C||!M)return n;let r=this._isPreset?C.states[this.params?.presetEntity??""]:void 0,e=r?r.attributes.options??[]:M.attributes.effect_list??[],i=r?r.state:M.attributes.effect??this.params?.current,t=this._isPreset?void 0:this._effects,A=this._t(this._isPreset?"wled.search_presets":"wled.search"),p=t?C0.filter(m=>m==="all"||[...t.values()].some(v=>m==="palette"?v.palette:v.categories.includes(m))):[],o=e.filter(m=>this._matches(m));return l`
      <div class="search">
        <ha-svg-icon .path=${M5}></ha-svg-icon>
        <input
          type="search"
          .value=${this._search}
          placeholder=${A}
          aria-label=${A}
          @input=${m=>{this._search=m.target.value.trim().toLowerCase()}}
        />
      </div>
      ${p.length>1?l`<div class="filters" role="toolbar">
              ${p.map(m=>l`
                  <button
                    class=${P({filter:!0,selected:this._filter===m})}
                    aria-pressed=${this._filter===m}
                    @click=${()=>{this._filter=m}}
                  >
                    ${A1[m]?l`<ha-svg-icon
                            .path=${A1[m]}
                          ></ha-svg-icon>`:n}
                    ${this._t(`wled.filter.${m}`)}
                  </button>
                `)}
            </div>`:n}
      <div class="list" role="listbox">
        ${o.map(m=>{let v=t?.get(m),s=m===i;return l`
            <button
              class=${P({row:!0,selected:s})}
              role="option"
              aria-selected=${s}
              @click=${()=>this._select(m)}
            >
              <span class="name">${m}</span>
              <span class="tags">
                ${[...(v?.categories??[]).filter(h=>h!=="0d"),...v?.palette?["palette"]:[]].map(h=>l`<ha-svg-icon
                      title=${this._t(`wled.filter.${h}`)}
                      .path=${A1[h]}
                    ></ha-svg-icon>`)}
              </span>
              <ha-svg-icon
                class="check"
                .path=${s?X2:""}
              ></ha-svg-icon>
            </button>
          `})}
        ${o.length?n:l`<p class="empty">
                ${this._t(this._isPreset?"wled.no_presets":"wled.no_effects")}
              </p>`}
      </div>
    `}};c=Q(D5),j1=new WeakMap,X1=new WeakMap,Y1=new WeakMap,J1=new WeakMap,C2=new WeakMap,x(c,4,"hass",E5,T,j1),x(c,4,"params",_5,T,X1),x(c,4,"_effects",R5,T,Y1),x(c,4,"_filter",F5,T,J1),x(c,4,"_search",T5,T,C2),W(c,T),g(T,"styles",E`
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
  `);customElements.get(S1)||customElements.define(S1,T);var H0=L=>{let H=/^(.+)_(\d+)$/.exec(L);return H?{mac:H[1],segment:Number(H[2])}:void 0},$5=async(L,H)=>{let C=L.entities[H];if(!H.startsWith("light.")||C?.platform!=="wled")return"not_wled";let V=C.device_id??H,M=Object.values(L.entities).filter(o=>o.device_id===V).map(o=>o.entity_id),r=await L.callWS({type:"config/entity_registry/get_entries",entity_ids:M.includes(H)?M:[H,...M]}),e=r[H],i=e&&H0(e.unique_id);if(!i)return"main_light";let t=new Map(Object.values(r).filter(o=>!!o).map(o=>[o.unique_id,o.entity_id])),{mac:A,segment:p}=i;return{entityId:H,segment:p,deviceId:V,palette:t.get(`${A}_palette_${p}`),speed:t.get(`${A}_speed_${p}`),intensity:t.get(`${A}_intensity_${p}`),preset:t.get(`${A}_preset`)}},I5=new R,c1=(L,H)=>[H,...z(L,H)??[]].join("|"),U5=(L,H)=>I5.peek(c1(L,H)),h1=(L,H)=>I5.get(c1(L,H),()=>V0(L,H)),V0=async(L,H)=>{let C=z(L,H);if(!C)return $5(L,H);let V=await Promise.all(C.map(r=>$5(L,r))),M=V.filter(r=>typeof r=="object");return M.length!==V.length?"not_wled":{...M[0],members:M}};var L0=6e4,G5=500,M0=()=>new Promise(L=>{"requestIdleCallback"in window?window.requestIdleCallback(()=>L(),{timeout:2e3}):setTimeout(L,200)}),r0=()=>document.querySelector("home-assistant")?.hass,e0=async()=>{for(let L=0;L<L0;L+=G5){let H=r0();if(H?.entities&&Object.keys(H.states).length)return H;await new Promise(C=>setTimeout(C,G5))}},Q5=async()=>{let L=await e0();if(!L)return;let H=Object.keys(L.states).filter(V=>B1(L,V)),C=new Set;for(let V of H){await M0();try{let M=await h1(L,V);if(typeof M!="object"||C.has(M.deviceId))continue;C.add(M.deviceId);let r={hass:L,entityId:M.entityId,deviceId:M.deviceId};await a1(r),await H1(r)}catch{}}};var z5="important",t0=" !"+z5,X=u1(class extends j{constructor(L){if(super(L),L.type!==s1.ATTRIBUTE||L.name!=="style"||L.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(L){return Object.keys(L).reduce((H,C)=>{let V=L[C];return V==null?H:H+`${C=C.includes("-")?C:C.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${V};`},"")}update(L,[H]){let{style:C}=L.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(H)),this.render(H);for(let V of this.ft)H[V]==null&&(this.ft.delete(V),V.includes("-")?C.removeProperty(V):C[V]=null);for(let V in H){let M=H[V];if(M!=null){this.ft.add(V);let r=typeof M=="string"&&M.endsWith(t0);V.includes("-")||r?C.setProperty(V,r?M.slice(0,-11):M,r?z5:""):C[V]=M}}return b}});var K5=L=>L.attributes.friendly_name??L.entity_id.substring(L.entity_id.indexOf(".")+1);var H2=L=>customElements.get(L)!==void 0,q5=async(L,H=5e3)=>{if(H2(L))return!0;let C,V=await Promise.race([customElements.whenDefined(L).then(()=>!0),new Promise(M=>{C=setTimeout(()=>M(!1),H)})]);return clearTimeout(C),V};var V2=async(L,H)=>{if(H.every(H2))return!0;try{(await window.loadCardHelpers?.())?.importMoreInfoControl?.(L)}catch(V){console.warn("[wled-more-info] Could not load",L,V)}return(await Promise.all(H.map(V=>q5(V,8e3)))).every(Boolean)};var j5="more-info-popup-fill";var X5=["ha-icon-button-group","ha-icon-button-toggle","light-color-rgb-picker","light-color-temp-picker","ha-more-info-light-favorite-colors"];var Y5=["hs","xy","rgb","rgbw","rgbww"],i0=[...Y5,"color_temp","brightness","white"],O1=(L,H)=>L.attributes.supported_color_modes?.some(C=>H.includes(C))??!1,J5=L=>O1(L,i0),L2=L=>O1(L,Y5),M2=L=>O1(L,["color_temp"]),C3=L=>O1(L,["white"]);var H3=E`
  ha-card.plain {
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    --ha-card-background: transparent;
  }
`,V3=E`
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
`;var L3=(L,H,C)=>{var M,r,e,i,t,A;class V extends(e=w,r=[B({attribute:!1})],M=[S()],e){constructor(){super(...arguments);Z(this,t,d(i,8,this)),d(i,11,this);Z(this,A,d(i,12,this)),d(i,15,this);g(this,"_form",H())}setConfig(m){this._form.assertConfig?.(m),this._config=m}render(){return this._config?l`
        <ha-form
          .hass=${this.hass}
          .data=${C.fill(this._config,this.hass)}
          .schema=${this._form.schema}
          .computeLabel=${this._form.computeLabel}
          .computeHelper=${this._form.computeHelper}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `:n}_valueChanged(m){m.stopPropagation(),N(this,"config-changed",{config:C.strip(m.detail.value,this.hass)})}}i=Q(e),t=new WeakMap,A=new WeakMap,x(i,4,"hass",r,V,t),x(i,4,"_config",M,V,A),W(i,V),customElements.get(L)||customElements.define(L,V)};var M3=(L,H)=>{let C={...L};for(let[V,M]of Object.entries(H))C[V]===M&&delete C[V];return C};var e2="more-info-wled-state-card-editor",o0=()=>{},r2=L=>F(o0(),`controls.${L}`)||void 0,r3={show_state:!0,show_last_changed:!0,show_effects:!0},A0=()=>({schema:[{name:"entity",required:!0,selector:{entity:{filter:[{domain:"light",integration:"wled"},{domain:"light",integration:"group"},{domain:"light",integration:"relative_light_group"}]}}},{name:"",type:"grid",schema:[{name:"show_state",selector:{boolean:{}}},{name:"show_last_changed",selector:{boolean:{}}},{name:"show_effects",selector:{boolean:{}}}]},{name:"appearance",selector:{select:{mode:"dropdown",options:["plain","card"].map(L=>({value:L,label:r2(`appearance.${L}`)??L}))}}}],computeLabel:L=>r2(L.name)??L.name,computeHelper:L=>r2(`${L.name}_helper`)});L3(e2,A0,{fill:L=>({...r3,...L}),strip:L=>M3(L,r3)});var Y="more-info-wled-state-card",a0={sx:255,ix:255,c1:255,c2:255,c3:31},d0=15e3,p0=400,t2=L=>L?`rgb(${L[0]}, ${L[1]}, ${L[2]})`:void 0,i2=L=>!L||L[0]===0&&L[1]===0&&L[2]===0,e3,t3,i3,o3,A3,a3,d3,p3,m3,n3,l3,v3,x3,Z3,s3,u3,S3,c3,a,o2,A2,a2,d2,p2,m2,n2,l2,v2,x2,Z2,s2,u2,S2,c2,h2,O2,u=class extends(c3=w,S3=[B({attribute:!1})],u3=[B({attribute:!1})],s3=[B({attribute:!1})],Z3=[S()],x3=[S()],v3=[S()],l3=[S()],n3=[S()],m3=[S()],p3=[S()],d3=[S()],a3=[S()],A3=[S()],o3=[S()],i3=[S()],t3=[S()],e3=[S()],c3){constructor(){super(...arguments);Z(this,o2,d(a,8,this)),d(a,11,this);g(this,"inDialog",!1);Z(this,A2,d(a,12,this)),d(a,15,this);Z(this,a2,d(a,16,this)),d(a,19,this);Z(this,d2,d(a,20,this)),d(a,23,this);Z(this,p2,d(a,24,this,!1)),d(a,27,this);Z(this,m2,d(a,28,this)),d(a,31,this);Z(this,n2,d(a,32,this,!1)),d(a,35,this);Z(this,l2,d(a,36,this)),d(a,39,this);Z(this,v2,d(a,40,this)),d(a,43,this);Z(this,x2,d(a,44,this)),d(a,47,this);Z(this,Z2,d(a,48,this)),d(a,51,this);Z(this,s2,d(a,52,this)),d(a,55,this);Z(this,u2,d(a,56,this,"brightness")),d(a,59,this);Z(this,S2,d(a,60,this,1)),d(a,63,this);Z(this,c2,d(a,64,this)),d(a,67,this);Z(this,h2,d(a,68,this,{})),d(a,71,this);Z(this,O2,d(a,72,this)),d(a,75,this);g(this,"_linkKey");g(this,"_pollTimer");g(this,"_refreshTimer");g(this,"_lastUpdated");g(this,"_primaryEntity");g(this,"_entryLoaded")}static getConfigElement(){return document.createElement(e2)}static getStubConfig(C){let V=Object.values(C.entities).find(M=>M.platform==="wled"&&M.entity_id.startsWith("light.")&&M.translation_key==="segment")?.entity_id??"";return{type:`custom:${Y}`,entity:V}}setConfig(C){if(!C?.entity)throw new Error('"entity" is required');this._config=C,this._linkKey=void 0,this._link=void 0,this._segment=void 0,this._effects=void 0,this._catalog=void 0,this._deviceError=void 0,this._mode="brightness",this._pickerOpen=void 0,this._ownEntry=void 0,this._entryLoaded=void 0,this._editing=!1}getCardSize(){return 10}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}set popupFill(C){if(this.style.removeProperty("--popup-min-height"),C<=0)return;let V=this.getBoundingClientRect().height;this.style.setProperty("--popup-min-height",`${V+C}px`)}connectedCallback(){super.connectedCallback(),N(this,j5),this._pollTimer=setInterval(()=>this._refreshSegment(),d0)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._pollTimer),clearTimeout(this._refreshTimer)}get _stateObj(){return this._config&&this.hass?.states[this._config.entity]}get _target(){let C=this._primary;if(!(!C||!this.hass))return{hass:this.hass,entityId:C.entityId,deviceId:C.deviceId}}get _links(){return typeof this._link!="object"?[]:this._link.members??[this._link]}get _writeLinks(){let C=this._links;if(C.length<2||!this.hass||!this._config)return C;let V=w1(this.hass,this._config.entity),M=C.filter(r=>V.includes(r.entityId));return M.length?M:C}get _primary(){let C=this._writeLinks;if(!this.hass)return C[0];let V=R2(this.hass,C.map(M=>M.entityId));return C.find(M=>M.entityId===V)}_entities(C){return this._writeLinks.map(V=>V[C]).filter(V=>!!V)}get _deviceId(){return this._primary?.deviceId}willUpdate(C){if(!this._config||!this.hass)return;!this._ready&&this._stateObj&&(this._ready=!0,V2("light",["ha-state-control-light-brightness","ha-more-info-state-header","ha-hs-color-picker","ha-control-slider",...X5]).then(()=>this.requestUpdate()),V2("vacuum",["ha-more-info-control-select-container","ha-control-button","ha-control-button-group"]).then(()=>this.requestUpdate())),!this.inDialog&&this._stateObj&&this._loadEntry();let V=c1(this.hass,this._config.entity);if(this._linkKey!==V&&this.hass.entities[this._config.entity]){this._linkKey=V;let e=U5(this.hass,this._config.entity);e&&(this._link=e,this._applyCached()),h1(this.hass,this._config.entity).then(i=>{this._linkKey===V&&(this._link=i,this._loadDevice())},()=>{this._linkKey===V&&(this._link="not_wled")})}let M=this._primary?.entityId;M&&this._primaryEntity&&M!==this._primaryEntity&&(this._applyCached(),this._loadDevice()),this._primaryEntity=M;let r=this._stateObj?.last_updated;C.has("hass")&&r&&r!==this._lastUpdated&&(this._lastUpdated=r,this._scheduleRefresh())}_loadEntry(){let C=this._config.entity;this._entryLoaded!==C&&(this._entryLoaded=C,this.hass.callWS({type:"config/entity_registry/get",entity_id:C}).then(V=>{this._entryLoaded===C&&(this._ownEntry=V)},()=>{this._entryLoaded===C&&(this._ownEntry=null)}))}_applyCached(){let C=this._deviceId;if(!C)return;let V=W5(C);V&&(this._effects=new Map(V.map(r=>[r.name,r]))),this._catalog=K2(C)??this._catalog;let M=q2(C);M&&this._applySegments(M)}_loadDevice(){let C=this._target;if(!C)return;let V=()=>this._deviceId===C.deviceId;Promise.all([a1(C),p1(C),H1(C)]).then(([M,r,e])=>{V()&&(this._effects=new Map(M.map(i=>[i.name,i])),this._catalog=r,this._applySegments(e),this._deviceError=void 0)},M=>{V()&&(this._deviceError=Q2(M)?"no_integration":"unreachable")})}_scheduleRefresh(){clearTimeout(this._refreshTimer),this._refreshTimer=setTimeout(()=>this._refreshSegment(),p0)}_refreshSegment(){let C=this._target;!C||this._deviceError||!this.isConnected||H1(C).then(V=>this._applySegments(V),()=>{})}_applySegments(C){let V=this._primary?.segment??-1;this._segment=C.find(M=>M.id===V)}async _setSegment(C){let V=this._target;if(!V)return;let M=this._writeLinks.filter(r=>r.entityId!==V.entityId).map(r=>({...V,entityId:r.entityId,deviceId:r.deviceId}));try{M.forEach(r=>F1(r,C).catch(()=>{})),this._applySegments(await F1(V,C))}catch{this._scheduleRefresh()}}_t(C,V){return F(this.hass,C,V)}get _effectName(){let C=this._stateObj?.attributes.effect;if(C)return C;let V=this._segment?.fx;return V!==void 0?this._catalog?.effectNames[V]:void 0}get _effect(){let C=this._effectName;return C?this._effects?.get(C):void 0}_color(C){let V=this._segment?.col?.[C];if(V&&V.length>=3)return[V[0],V[1],V[2]];if(C===0)return this._stateObj?.attributes.rgb_color}_usesColor(C){let V=this._effect;return!V||V.colors[C]!==null}get _paletteEntity(){return typeof this._link=="object"?this._link.palette:void 0}get _paletteNames(){let C=this._paletteEntity;return(C?this.hass.states[C]?.attributes.options:void 0)??this._catalog?.paletteNames??[]}get _currentPalette(){let C=this._paletteEntity;if(C)return this.hass.states[C]?.state;let V=this._segment?.pal;return V!==void 0?this._catalog?.paletteNames[V]:void 0}_paletteCss(C){let V=this._catalog;if(!V||!C)return;let M=V.paletteNames.indexOf(C);if(M<0)return;let r=[0,1,2].map(e=>this._color(e)??[0,0,0]);return B5(V.palx[String(M)],r)}render(){if(!this._config||!this.hass)return n;let C=this._stateObj,V=this._config.appearance??"plain",M=C?this._link==="not_wled"?this._t("wled.not_wled"):void 0:this.hass.localize("ui.panel.lovelace.warning.entity_not_found",{entity:this._config.entity});return M||!C?l`<ha-card class=${V}>
        <ha-alert alert-type="warning">${M}</ha-alert>
      </ha-card>`:l`
      <ha-card class=${V} .label=${K5(C)}>
        ${this._header(C)}
        <div class="controls">
          ${this._mainControl(C)} ${this._buttonBar(C)}
          ${this._favoriteColors(C)}
        </div>
        ${this._config.show_effects===!1?n:this._effectsSection(C)}
        ${this._deviceNote()}
      </ha-card>
    `}_header(C){let V=this._config;if(V.show_state===!1)return n;let M=C.state==="on"&&C.attributes.brightness!=null?this.hass.formatEntityAttributeValue(C,"brightness"):void 0;return V.show_last_changed===!1?l`<p class="state">
        ${M??this.hass.formatEntityState(C)}
      </p>`:l`<ha-more-info-state-header
      .hass=${this.hass}
      .stateObj=${C}
      .stateOverride=${M}
    ></ha-more-info-state-header>`}_mainControl(C){let V=this.hass;switch(this._mode){case"color":return l`<light-color-rgb-picker
          .hass=${V}
          .stateObj=${C}
        ></light-color-rgb-picker>`;case"color_temp":return l`<light-color-temp-picker
          .hass=${V}
          .stateObj=${C}
        ></light-color-temp-picker>`;case"secondary":return this._secondaryPicker();case"palette":return this._palettePicker();case"settings":return this._settingsPanel(C);default:return l`<ha-state-control-light-brightness
          .hass=${V}
          .stateObj=${C}
        ></ha-state-control-light-brightness>`}}_secondaryPicker(){let C=this._slot,V=this._preview??this._color(C),M=t=>{t.stopPropagation(),this._preview=void 0;let A=t.detail.value;if(!A)return;let p=[[],[],[]];p[C]=q1(A),this._setSegment({col:p})},r=t=>{t.stopPropagation(),this._preview=t.detail.value?q1(t.detail.value):void 0},e=()=>{let t=[[],[],[]];t[C]=[0,0,0],this._setSegment({col:t})},i=t=>this._effect?.colors[t]??this._t(t===1?"wled.secondary_color":"wled.tertiary_color");return l`
      <div class="color-container">
        <ha-hs-color-picker
          .value=${i2(V)?void 0:P5(V)}
          .colorBrightness=${255}
          @value-changed=${M}
          @cursor-moved=${r}
        ></ha-hs-color-picker>
      </div>
      <div class="slot-bar">
        ${this._usesColor(2)||this._slot===2?l`<ha-control-button-group class="slots">
                ${[1,2].map(t=>l`<ha-control-button
                      class=${P({active:C===t})}
                      @click=${()=>{this._slot=t}}
                    >
                      <span
                        class="dot"
                        style=${X({background:t2(this._color(t))})}
                      ></span>
                      <span class="label">${i(t)}</span>
                    </ha-control-button>`)}
              </ha-control-button-group>`:l`<span class="slot-title">${i(1)}</span>`}
        <ha-icon-button
          .label=${this._t("wled.color_black")}
          .path=${J2}
          @click=${e}
        ></ha-icon-button>
      </div>
    `}_palettePicker(){let C=this._currentPalette,V=M=>{let r=this._entities("palette");if(r.length)this.hass.callService("select","select_option",{entity_id:r,option:M});else{let e=this._catalog?.paletteNames.indexOf(M)??-1;e>=0&&this._setSegment({pal:e})}};return l`
      <div
        class="palettes"
        role="listbox"
        aria-label=${this._t("wled.palette")}
      >
        ${this._paletteNames.map(M=>{let r=M===C,e=this._paletteCss(M);return l`
            <button
              class=${P({"palette-row":!0,selected:r})}
              role="option"
              aria-selected=${r}
              @click=${()=>V(M)}
            >
              <span
                class=${P({preview:!0,empty:!e})}
                style=${X({backgroundImage:e})}
              ></span>
              <span class="name">${M}</span>
            </button>
          `})}
      </div>
    `}updated(C){super.updated(C),C.has("_mode")&&this._mode==="palette"&&this.renderRoot.querySelector(".palette-row.selected")?.scrollIntoView({block:"center"})}_buttonBar(C){let V=this.hass,M=C.state==="unavailable",r=J5(C),e=L2(C),i=M2(C),t=C3(C),A=!!this._segment,p=!!(this._paletteEntity||this._catalog),o=this._hasSettings(),m=e||i||p||o,v=this._mode,s=O=>J=>{J.stopPropagation(),this._mode=O},h=O=>{O.stopPropagation(),V.callService("light",C.state==="on"?"turn_off":"turn_on",{entity_id:C.entity_id})},f=this._color(1),y=this._paletteCss(this._currentPalette);return l`
      <ha-icon-button-group>
        <ha-icon-button
          .disabled=${M}
          .label=${V.localize("ui.dialogs.more_info_control.light.toggle")}
          @click=${h}
        >
          <ha-svg-icon .path=${e5}></ha-svg-icon>
        </ha-icon-button>
        ${m?l`<div class="separator"></div>`:n}
        ${r&&m?l`<ha-icon-button-toggle
                .selected=${v==="brightness"}
                .disabled=${M}
                .label=${V.formatEntityAttributeName(C,"brightness")}
                @click=${s("brightness")}
              >
                <ha-svg-icon .path=${j2}></ha-svg-icon>
              </ha-icon-button-toggle>`:n}
        ${e?l`<ha-icon-button-toggle
                border-only
                .selected=${v==="color"}
                .disabled=${M}
                .label=${V.localize("ui.dialogs.more_info_control.light.color")}
                @click=${s("color")}
              >
                <span class="wheel color"></span>
              </ha-icon-button-toggle>`:n}
        ${e&&A?l`<ha-icon-button-toggle
                border-only
                .selected=${v==="secondary"}
                .disabled=${M||!this._usesColor(1)}
                .label=${this._usesColor(1)?this._t("wled.secondary_color"):this._t("wled.not_used")}
                @click=${s("secondary")}
              >
                <span
                  class=${P({wheel:!0,swatch:!0,off:i2(f)})}
                  style=${X({background:i2(f)?void 0:t2(f)})}
                ></span>
              </ha-icon-button-toggle>`:n}
        ${i?l`<ha-icon-button-toggle
                border-only
                .selected=${v==="color_temp"}
                .disabled=${M}
                .label=${V.localize("ui.dialogs.more_info_control.light.color_temp")}
                @click=${s("color_temp")}
              >
                <span class="wheel color-temp"></span>
              </ha-icon-button-toggle>`:n}
        ${p?l`<ha-icon-button-toggle
                border-only
                .selected=${v==="palette"}
                .disabled=${M||this._effect?.palette===!1}
                .label=${this._effect?.palette===!1?this._t("wled.not_used"):this._t("wled.palette")}
                @click=${s("palette")}
              >
                <span
                  class=${P({wheel:!0,palette:!0,empty:!y})}
                  style=${X({backgroundImage:y})}
                ></span>
              </ha-icon-button-toggle>`:n}
        ${o?l`<ha-icon-button-toggle
                .selected=${v==="settings"}
                .disabled=${M}
                .label=${this._t("wled.effect_settings")}
                @click=${s("settings")}
              >
                <ha-svg-icon .path=${t5}></ha-svg-icon>
              </ha-icon-button-toggle>`:n}
        ${t?l`<div class="separator"></div>
                <ha-icon-button
                  .disabled=${M}
                  .label=${V.localize("ui.dialogs.more_info_control.light.set_white")}
                  @click=${()=>V.callService("light","turn_on",{entity_id:C.entity_id,white:!0})}
                >
                  <ha-svg-icon .path=${H5}></ha-svg-icon>
                </ha-icon-button>`:n}
      </ha-icon-button-group>
    `}_favoriteColors(C){let V=this.inDialog?this.entry:this._ownEntry,M=this.inDialog?this.editMode:this._editing,r=V?.options?.light?.favorite_colors,e=L2(C)||M2(C);if(!(V&&(M||e&&(r==null||r.length>0))))return n;let t=p=>{this.inDialog||(p.stopPropagation(),this._editing=p.detail)},A=p=>{this.inDialog||(p.stopPropagation(),this._ownEntry=p.detail)};return l`<ha-more-info-light-favorite-colors
      .hass=${this.hass}
      .stateObj=${C}
      .entry=${V}
      .editMode=${M}
      @favorite-color-edit-started=${p=>{p.stopPropagation(),this._mode="brightness"}}
      @toggle-edit-mode=${t}
      @entity-entry-updated=${A}
    ></ha-more-info-light-favorite-colors>`}_pickerParams(C){return{kind:C,entityId:this._config.entity,wledEntity:this._primary?.entityId,presetEntity:this._presetEntity,deviceId:this._deviceError?void 0:this._deviceId,current:this._effectName}}get _presetEntity(){let C=new Set(this._links.map(V=>V.preset));return C.size===1?[...C][0]:void 0}_openPicker(C,V){if(C.stopPropagation(),this._pickerOpen){let t=this._pickerOpen===V;if(this._pickerOpen=void 0,t)return}let M=this._stateObj,r={viewTag:S1,viewTitle:V==="preset"?this._t("wled.preset"):this.hass.formatEntityAttributeName(M,"effect"),viewParams:this._pickerParams(V)},e=!1,i=()=>{e=!0};window.addEventListener("show-child-view",i),N(this,"show-child-view",r),window.removeEventListener("show-child-view",i),e&&(this._pickerOpen=V)}_effectsSection(C){let V=this.hass,M=!!C.attributes.effect_list?.length,r=this._presetEntity?V.states[this._presetEntity]:void 0,e=!!r?.attributes.options?.length;if(!M&&!e)return n;let i=this._effect,t=[...(i?.categories??[]).filter(p=>p!=="0d"),...i?.palette?["palette"]:[]],A=r&&!["unknown","unavailable"].includes(r.state)?r.state:void 0;return l`
      <div class="effects">
        ${M?this._pickerChip("effect",C5,V.formatEntityAttributeName(C,"effect"),this._effectName,t.map(p=>A1[p])):n}
        ${e?this._pickerChip("preset",o5,this._t("wled.preset"),A):n}
      </div>
    `}_pickerChip(C,V,M,r,e=[]){let i=this._stateObj,t=this._pickerOpen===C;return l`
      <button
        class="chip effect"
        ?disabled=${i.state==="unavailable"}
        aria-expanded=${t}
        @click=${A=>this._openPicker(A,C)}
      >
        <div class="icon"><ha-svg-icon .path=${V}></ha-svg-icon></div>
        <div class="content">
          <p class="label">${M}</p>
          <p class="value">${r??"\u2014"}</p>
        </div>
        <div class="tags">
          ${e.map(A=>l`<ha-svg-icon .path=${A}></ha-svg-icon>`)}
        </div>
        <div class="icon">
          <ha-svg-icon .path=${Y2}></ha-svg-icon>
        </div>
      </button>
      ${t?l`<more-info-wled-effect-picker
              inline
              .hass=${this.hass}
              .params=${this._pickerParams(C)}
              @wled-effect-picked=${()=>{this._pickerOpen=void 0}}
              @close-child-view=${A=>A.stopPropagation()}
            ></more-info-wled-effect-picker>`:n}
    `}_hasSettings(){return this._sliderRows().length>0||this._optionKeys().length>0}_settingsPanel(C){return this._hasSettings()?l`<div class="settings">
      ${this._sliders(C)} ${this._options()}
    </div>`:l`<p class="settings empty">
        ${this._t("wled.no_effect_settings")}
      </p>`}_sliderValue(C){let V=this._moving[C];if(V!==void 0)return V;let M=typeof this._link=="object"?this._link:void 0,r=C==="sx"?M?.speed:C==="ix"?M?.intensity:void 0,e=r?this.hass.states[r]?.state:void 0;return e!==void 0&&!Number.isNaN(Number(e))?Number(e):this._segment?.[C]}_setSlider(C,V){let M=C==="sx"?this._entities("speed"):C==="ix"?this._entities("intensity"):[];M.length&&M.length===this._writeLinks.length?this.hass.callService("number","set_value",{entity_id:M,value:V}):this._setSegment({[C]:V})}_sliderRows(){let C=this._effect,V=typeof this._link=="object"?this._link:void 0;return(C?C.sliders:[...V?.speed?[{key:"sx"}]:[],...V?.intensity?[{key:"ix"}]:[]]).map(r=>({...r,value:this._sliderValue(r.key)})).filter(r=>r.value!==void 0)}_sliders(C){let V=X({"--control-slider-color":t2(this._color(0))??"var(--state-light-active-color, var(--state-active-color))"}),M=this._sliderRows();return M.length?l`
      <div class="sliders">
        ${M.map(r=>{let e=r.label??this._t(`wled.slider.${r.key}`),i=a0[r.key];return l`
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
                .disabled=${C.state==="unavailable"}
                @slider-moved=${t=>{t.stopPropagation(),this._moving={...this._moving,[r.key]:t.detail.value}}}
                @value-changed=${t=>{t.stopPropagation();let A={...this._moving};delete A[r.key],this._moving=A,this._setSlider(r.key,t.detail.value)}}
              ></ha-control-slider>
            </div>
          `})}
      </div>
    `:n}_optionKeys(){return this._segment?this._effect?.options??[]:[]}_options(){let C=this._optionKeys(),V=this._segment;return!C.length||!V?n:l`
      <ha-control-button-group class="options">
        ${C.map(({key:M,label:r})=>{let e=!!V[M];return l`<ha-control-button
            class=${P({active:e})}
            aria-pressed=${e}
            @click=${()=>this._setSegment({[M]:!e})}
          >
            <span class="label"
              >${r??this._t(`wled.option.${M}`)}</span
            >
          </ha-control-button>`})}
      </ha-control-button-group>
    `}_deviceNote(){let C=this._deviceError;return C?l`<p class="note">
      ${this._t(C==="no_integration"?"wled.no_integration":"wled.unreachable")}
    </p>`:n}};a=Q(c3),o2=new WeakMap,A2=new WeakMap,a2=new WeakMap,d2=new WeakMap,p2=new WeakMap,m2=new WeakMap,n2=new WeakMap,l2=new WeakMap,v2=new WeakMap,x2=new WeakMap,Z2=new WeakMap,s2=new WeakMap,u2=new WeakMap,S2=new WeakMap,c2=new WeakMap,h2=new WeakMap,O2=new WeakMap,x(a,4,"hass",S3,u,o2),x(a,4,"entry",u3,u,A2),x(a,4,"editMode",s3,u,a2),x(a,4,"_ownEntry",Z3,u,d2),x(a,4,"_editing",x3,u,p2),x(a,4,"_config",v3,u,m2),x(a,4,"_ready",l3,u,n2),x(a,4,"_link",n3,u,l2),x(a,4,"_effects",m3,u,v2),x(a,4,"_catalog",p3,u,x2),x(a,4,"_segment",d3,u,Z2),x(a,4,"_deviceError",a3,u,s2),x(a,4,"_mode",A3,u,u2),x(a,4,"_slot",o3,u,S2),x(a,4,"_preview",i3,u,c2),x(a,4,"_moving",t3,u,h2),x(a,4,"_pickerOpen",e3,u,O2),W(a,u),g(u,"styles",[H3,V3,E`
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
    `]);customElements.get(Y)||customElements.define(Y,u);window.customCards=window.customCards??[];window.customCards.some(L=>L.type===Y)||window.customCards.push({type:Y,name:F(void 0,"wled_card.name"),description:F(void 0,"wled_card.description"),preview:!0,documentationURL:"https://github.com/Cheerpipe/ha-wled-more-info"});$2(import.meta.url)&&(G2(),Q5());console.info("%c WLED-MORE-INFO %c 0.4.0 ","color: white; background: #ff9800; font-weight: 700;","color: #ff9800; background: white; font-weight: 700;");

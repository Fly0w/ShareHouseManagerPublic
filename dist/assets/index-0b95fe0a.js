(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rI=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},d_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(t[u],t[h],t[d],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(h_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new sI;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const E=l<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iI=function(n){const e=h_(n);return d_.encodeByteArray(e,!0)},bc=function(n){return iI(n).replace(/\./g,"")},f_=function(n){try{return d_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ac(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!oI(t)||(n[t]=Ac(n[t],e[t]));return n}function oI(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=()=>aI().__FIREBASE_DEFAULTS__,lI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&f_(n[1]);return e&&JSON.parse(e)},od=()=>{try{return cI()||lI()||uI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},p_=()=>{var n;return(n=od())===null||n===void 0?void 0:n.config},hI=n=>{var e;return(e=od())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[bc(JSON.stringify(t)),bc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function ad(){var n;const e=(n=od())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mI(){return typeof self=="object"&&self.self===self}function m_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g_(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gI(){return!ad()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xo(){try{return typeof indexedDB=="object"}catch{return!1}}function _I(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="FirebaseError";class Pt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yI,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Pt(s,a,r)}}function vI(n,e){return n.replace(wI,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function II(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ju(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Op(i)&&Op(o)){if(!Ju(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Op(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function to(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function __(n,e){const t=new EI(n,e);return t.subscribe.bind(t)}class EI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");TI(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=wu),s.error===void 0&&(s.error=wu),s.complete===void 0&&(s.complete=wu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n){return n&&n._delegate?n._delegate:n}class bn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new dI;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RI(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AI(n){return n===Br?void 0:n}function RI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=[];var fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(fe||(fe={}));const y_={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},PI=fe.INFO,SI={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},CI=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=SI[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=CI,this._userLogHandler=null,ld.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}function kI(n){ld.forEach(e=>{e.setLogLevel(n)})}function DI(n,e){for(const t of ld){let r=null;e&&e.level&&(r=y_[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&n({level:fe[i].toLowerCase(),message:a,args:o,type:s.name})}}}const NI=(n,e)=>e.some(t=>n instanceof t);let Mp,Lp;function VI(){return Mp||(Mp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OI(){return Lp||(Lp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const v_=new WeakMap,Xu=new WeakMap,w_=new WeakMap,Iu=new WeakMap,ud=new WeakMap;function MI(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(ar(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&v_.set(t,n)}).catch(()=>{}),ud.set(e,n),e}function LI(n){if(Xu.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Xu.set(n,e)}let Zu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||w_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ar(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function FI(n){Zu=n(Zu)}function UI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Eu(this),e,...t);return w_.set(r,e.sort?e.sort():[e]),ar(r)}:OI().includes(n)?function(...e){return n.apply(Eu(this),e),ar(v_.get(this))}:function(...e){return ar(n.apply(Eu(this),e))}}function $I(n){return typeof n=="function"?UI(n):(n instanceof IDBTransaction&&LI(n),NI(n,VI())?new Proxy(n,Zu):n)}function ar(n){if(n instanceof IDBRequest)return MI(n);if(Iu.has(n))return Iu.get(n);const e=$I(n);return e!==n&&(Iu.set(n,e),ud.set(e,n)),e}const Eu=n=>ud.get(n);function BI(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=ar(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ar(o.result),c.oldVersion,c.newVersion,ar(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jI=["get","getKey","getAll","getAllKeys","count"],qI=["put","add","delete","clear"],Tu=new Map;function Fp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Tu.get(e))return Tu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jI.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return Tu.set(e,i),i}FI(n=>({...n,get:(e,t,r)=>Fp(e,t)||n.get(e,t,r),has:(e,t)=>!!Fp(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function GI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eh="@firebase/app",Up="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new cl("@firebase/app"),KI="@firebase/app-compat",WI="@firebase/analytics-compat",HI="@firebase/analytics",QI="@firebase/app-check-compat",YI="@firebase/app-check",JI="@firebase/auth",XI="@firebase/auth-compat",ZI="@firebase/database",e2="@firebase/database-compat",t2="@firebase/functions",n2="@firebase/functions-compat",r2="@firebase/installations",s2="@firebase/installations-compat",i2="@firebase/messaging",o2="@firebase/messaging-compat",a2="@firebase/performance",c2="@firebase/performance-compat",l2="@firebase/remote-config",u2="@firebase/remote-config-compat",h2="@firebase/storage",d2="@firebase/storage-compat",f2="@firebase/firestore",p2="@firebase/firestore-compat",m2="firebase",g2="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]",_2={[eh]:"fire-core",[KI]:"fire-core-compat",[HI]:"fire-analytics",[WI]:"fire-analytics-compat",[YI]:"fire-app-check",[QI]:"fire-app-check-compat",[JI]:"fire-auth",[XI]:"fire-auth-compat",[ZI]:"fire-rtdb",[e2]:"fire-rtdb-compat",[t2]:"fire-fn",[n2]:"fire-fn-compat",[r2]:"fire-iid",[s2]:"fire-iid-compat",[i2]:"fire-fcm",[o2]:"fire-fcm-compat",[a2]:"fire-perf",[c2]:"fire-perf-compat",[l2]:"fire-rc",[u2]:"fire-rc-compat",[h2]:"fire-gcs",[d2]:"fire-gcs-compat",[f2]:"fire-fst",[p2]:"fire-fst-compat","fire-js":"fire-js",[m2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Map,Po=new Map;function Rc(n,e){try{n.container.addComponent(e)}catch(t){us.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function I_(n,e){n.container.addOrOverwriteComponent(e)}function pr(n){const e=n.name;if(Po.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;Po.set(e,n);for(const t of fr.values())Rc(t,n);return!0}function E_(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function y2(n,e,t=dr){E_(n,e).clearInstance(t)}function v2(){Po.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new bs("app","Firebase",w2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I2=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=g2;function hd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw On.create("bad-app-name",{appName:String(s)});if(t||(t=p_()),!t)throw On.create("no-options");const i=fr.get(s);if(i){if(Ju(t,i.options)&&Ju(r,i.config))return i;throw On.create("duplicate-app",{appName:s})}const o=new xI(s);for(const c of Po.values())o.addComponent(c);const a=new I2(t,r,o);return fr.set(s,a),a}function E2(n=dr){const e=fr.get(n);if(!e&&n===dr&&p_())return hd();if(!e)throw On.create("no-app",{appName:n});return e}function T2(){return Array.from(fr.values())}async function T_(n){const e=n.name;fr.has(e)&&(fr.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function En(n,e,t){var r;let s=(r=_2[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}pr(new bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function b_(n,e){if(n!==null&&typeof n!="function")throw On.create("invalid-log-argument");DI(n,e)}function A_(n){kI(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="firebase-heartbeat-database",A2=1,So="firebase-heartbeat-store";let bu=null;function R_(){return bu||(bu=BI(b2,A2,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(So)}}}).catch(n=>{throw On.create("idb-open",{originalErrorMessage:n.message})})),bu}async function R2(n){try{return await(await R_()).transaction(So).objectStore(So).get(x_(n))}catch(e){if(e instanceof Pt)us.warn(e.message);else{const t=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(t.message)}}}async function $p(n,e){try{const r=(await R_()).transaction(So,"readwrite");await r.objectStore(So).put(e,x_(n)),await r.done}catch(t){if(t instanceof Pt)us.warn(t.message);else{const r=On.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});us.warn(r.message)}}}function x_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=1024,P2=30*24*60*60*1e3;class S2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new k2(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=P2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bp(),{heartbeatsToSend:t,unsentEntries:r}=C2(this._heartbeatsCache.heartbeats),s=bc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bp(){return new Date().toISOString().substring(0,10)}function C2(n,e=x2){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jp(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),jp(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class k2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xo()?_I().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await R2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jp(n){return bc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(n){pr(new bn("platform-logger",e=>new zI(e),"PRIVATE")),pr(new bn("heartbeat",e=>new S2(e),"PRIVATE")),En(eh,Up,n),En(eh,Up,"esm2017"),En("fire-js","")}D2("");const N2=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pt,SDK_VERSION:xr,_DEFAULT_ENTRY_NAME:dr,_addComponent:Rc,_addOrOverwriteComponent:I_,_apps:fr,_clearComponents:v2,_components:Po,_getProvider:E_,_registerComponent:pr,_removeServiceInstance:y2,deleteApp:T_,getApp:E2,getApps:T2,initializeApp:hd,onLog:b_,registerVersion:En,setLogLevel:A_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,t){this._delegate=e,this.firebase=t,Rc(e,new bn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),T_(this._delegate)))}_getService(e,t=dr){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=dr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Rc(this._delegate,e)}_addOrOverwriteComponent(e){I_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},qp=new bs("app-compat","Firebase",O2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(n){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:En,setLogLevel:A_,onLog:b_,apps:null,SDK_VERSION:xr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:N2}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(l){delete e[l]}function s(l){if(l=l||dr,!Vp(e,l))throw qp.create("no-app",{appName:l});return e[l]}s.App=n;function i(l,u={}){const h=hd(l,u);if(Vp(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(pr(l)&&l.type==="PUBLIC"){const d=(m=s())=>{if(typeof m[h]!="function")throw qp.create("invalid-app-argument",{appName:u});return m[h]()};l.serviceProps!==void 0&&Ac(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...m){return this._getService.bind(this,u).apply(this,l.multipleInstances?m:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(){const n=M2(V2);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:P_,extendNamespace:e,createSubscribe:__,ErrorFactory:bs,deepExtend:Ac});function e(t){Ac(n,t)}return n}const L2=P_();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=new cl("@firebase/app-compat"),F2="@firebase/app-compat",U2="0.2.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(n){En(F2,U2,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(mI()&&self.firebase!==void 0){zp.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&zp.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Pr=L2;$2();var B2="firebase",j2="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr.registerVersion(B2,j2,"app-compat");function dd(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}const ji={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Os={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function S_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z2=q2,G2=S_,C_=new bs("auth","Firebase",S_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new cl("@firebase/auth");function K2(n,...e){xc.logLevel<=fe.WARN&&xc.warn(`Auth (${xr}): ${n}`,...e)}function ac(n,...e){xc.logLevel<=fe.ERROR&&xc.error(`Auth (${xr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,...e){throw fd(n,...e)}function gt(n,...e){return fd(n,...e)}function k_(n,e,t){const r=Object.assign(Object.assign({},G2()),{[e]:t});return new bs("auth","Firebase",r).create(e,{appName:n.name})}function Ti(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&yt(n,"argument-error"),k_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return C_.create(n,...e)}function C(n,e,...t){if(!n)throw fd(e,...t)}function _n(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ac(e),new Error(e)}function nn(n,e){n||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function pd(){return Gp()==="http:"||Gp()==="https:"}function Gp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pd()||m_()||"connection"in navigator)?navigator.onLine:!0}function H2(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,nn(t>e,"Short delay should be less than long delay!"),this.isMobile=pI()||cd()}get(){return W2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n,e){nn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=new ha(3e4,6e4);function Ze(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function nt(n,e,t,r,s={}){return N_(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ei(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),D_.fetch()(V_(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function N_(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q2),e);try{const s=new J2(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw k_(n,u,l);yt(n,u)}}catch(s){if(s instanceof Pt)throw s;yt(n,"network-request-failed",{message:String(s)})}}async function qn(n,e,t,r,s={}){const i=await nt(n,e,t,r,s);return"mfaPendingCredential"in i&&yt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function V_(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?md(n.config,s):`${n.config.apiScheme}://${s}`}class J2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),Y2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=gt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(n,e){return nt(n,"POST","/v1/accounts:delete",e)}async function Z2(n,e){return nt(n,"POST","/v1/accounts:update",e)}async function eE(n,e){return nt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tE(n,e=!1){const t=Q(n),r=await t.getIdToken(e),s=ll(r);C(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ho(Au(s.auth_time)),issuedAtTime:ho(Au(s.iat)),expirationTime:ho(Au(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Au(n){return Number(n)*1e3}function ll(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ac("JWT malformed, contained fewer than 3 sections"),null;try{const s=f_(t);return s?JSON.parse(s):(ac("Failed to decode base64 JWT payload"),null)}catch(s){return ac("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nE(n){const e=ll(n);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Pt&&rE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function rE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ln(n,eE(t,{idToken:r}));C(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?aE(i.providerUserInfo):[],a=oE(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new O_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function iE(n){const e=Q(n);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function aE(n){return n.map(e=>{var{providerId:t}=e,r=dd(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(n,e){const t=await N_(n,{},async()=>{const r=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=V_(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await cE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Do;return r&&(C(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(C(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(C(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n,e){C(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=dd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new O_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ln(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tE(this,e)}reload(){return iE(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ln(this,X2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,m=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,$=(l=t.createdAt)!==null&&l!==void 0?l:void 0,K=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:F,isAnonymous:J,providerData:re,stsTokenManager:Te}=t;C(B&&Te,e,"internal-error");const ce=Do.fromJSON(this.name,Te);C(typeof B=="string",e,"internal-error"),Yn(h,e.name),Yn(d,e.name),C(typeof F=="boolean",e,"internal-error"),C(typeof J=="boolean",e,"internal-error"),Yn(m,e.name),Yn(E,e.name),Yn(w,e.name),Yn(b,e.name),Yn($,e.name),Yn(K,e.name);const le=new rs({uid:B,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:J,photoURL:E,phoneNumber:m,tenantId:w,stsTokenManager:ce,createdAt:$,lastLoginAt:K});return re&&Array.isArray(re)&&(le.providerData=re.map(Fe=>Object.assign({},Fe))),b&&(le._redirectEventId=b),le}static async _fromIdTokenResponse(e,t,r=!1){const s=new Do;s.updateFromServerResponse(t);const i=new rs({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ko(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Map;function qt(n){nn(n instanceof Function,"Expected a class definition");let e=Kp.get(n);return e?(nn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kp.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}M_.type="NONE";const ri=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n,e,t){return`firebase:${n}:${e}:${t}`}class Ks{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ss(this.userKey,s.apiKey,i),this.fullPersistenceKey=ss("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ks(qt(ri),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||qt(ri);const o=ss(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=rs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ks(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ks(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(U_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(B_(e))return"Webos";if(gd(e))return"Safari";if((e.includes("chrome/")||F_(e))&&!e.includes("edge/"))return"Chrome";if(da(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L_(n=$e()){return/firefox\//i.test(n)}function gd(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function F_(n=$e()){return/crios\//i.test(n)}function U_(n=$e()){return/iemobile/i.test(n)}function da(n=$e()){return/android/i.test(n)}function $_(n=$e()){return/blackberry/i.test(n)}function B_(n=$e()){return/webos/i.test(n)}function bi(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function lE(n=$e()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function uE(n=$e()){var e;return bi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hE(){return g_()&&document.documentMode===10}function j_(n=$e()){return bi(n)||da(n)||B_(n)||$_(n)||/windows phone/i.test(n)||U_(n)}function dE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n,e=[]){let t;switch(n){case"Browser":t=Wp($e());break;case"Worker":t=`${Wp($e())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(n){return(await nt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function z_(n,e){return nt(n,"GET","/v2/recaptchaConfig",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){return n!==void 0&&n.getResponse!==void 0}function Qp(n){return n!==void 0&&n.enterprise!==void 0}class G_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function _d(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=gt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",pE().appendChild(r)})}function K_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const mE="https://www.google.com/recaptcha/enterprise.js?render=",gE="recaptcha-enterprise",_E="NO_RECAPTCHA";class W_{constructor(e){this.type=gE,this.auth=Qe(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{z_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new G_(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Qp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(_E)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&Qp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_d(mE+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function mr(n,e,t,r=!1){const s=new W_(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yp(this),this.idTokenSubscription=new Yp(this),this.beforeStateQueue=new yE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Q(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}async initializeRecaptchaConfig(){const e=await z_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new G_(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new W_(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qt(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return C(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&K2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Qe(n){return Q(n)}class Yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=__(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(qt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IE(n,e,t){const r=Qe(n);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=H_(e),{host:o,port:a}=EE(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||TE()}function H_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function EE(n){const e=H_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jp(o)}}}function Jp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function TE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,t){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(n,e){return nt(n,"POST","/v1/accounts:resetPassword",Ze(n,e))}async function Y_(n,e){return nt(n,"POST","/v1/accounts:update",e)}async function bE(n,e){return nt(n,"POST","/v1/accounts:update",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(n,e){return qn(n,"POST","/v1/accounts:signInWithPassword",Ze(n,e))}async function ul(n,e){return nt(n,"POST","/v1/accounts:sendOobCode",Ze(n,e))}async function AE(n,e){return ul(n,e)}async function xu(n,e){return ul(n,e)}async function Pu(n,e){return ul(n,e)}async function RE(n,e){return ul(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE(n,e){return qn(n,"POST","/v1/accounts:signInWithEmailLink",Ze(n,e))}async function PE(n,e){return qn(n,"POST","/v1/accounts:signInWithEmailLink",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends Ai{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new No(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new No(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await mr(e,r,"signInWithPassword");return Ru(e,s)}else return Ru(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await mr(e,r,"signInWithPassword");return Ru(e,i)}else return Promise.reject(s)});case"emailLink":return xE(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Y_(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PE(e,{idToken:t,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(n,e){return qn(n,"POST","/v1/accounts:signInWithIdp",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="http://localhost";class An extends Ai{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=dd(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new An(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Mn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mn(e,t)}buildRequest(){const e={requestUri:SE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ei(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(n,e){return nt(n,"POST","/v1/accounts:sendVerificationCode",Ze(n,e))}async function kE(n,e){return qn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ze(n,e))}async function DE(n,e){const t=await qn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ze(n,e));if(t.temporaryProof)throw no(n,"account-exists-with-different-credential",t);return t}const NE={USER_NOT_FOUND:"user-not-found"};async function VE(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return qn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ze(n,t),NE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Ai{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new is({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new is({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return kE(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return DE(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return VE(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new is({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ME(n){const e=zs(to(n)).link,t=e?zs(to(e)).deep_link_id:null,r=zs(to(n)).deep_link_id;return(r?zs(to(r)).link:null)||r||t||e||n}class hl{constructor(e){var t,r,s,i,o,a;const c=zs(to(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=OE((s=c.mode)!==null&&s!==void 0?s:null);C(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=ME(e);try{return new hl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.providerId=Sr.PROVIDER_ID}static credential(e,t){return No._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=hl.parseLink(t);return C(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}Sr.PROVIDER_ID="password";Sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends zn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ws extends Ri{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return C("providerId"in t&&"signInMethod"in t,"argument-error"),An._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return C(e.idToken||e.accessToken,"argument-error"),An._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ws.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ws.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!t&&!i||!a)return null;try{return new Ws(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Ri{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return An._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dn.credential(t,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Ri{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="http://localhost";class si extends Ai{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Mn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=t;return!r||!s||!i||r!==s?null:new si(r,i)}static _create(e,t){return new si(e,t)}buildRequest(){return{requestUri:LE,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="saml.";class Pc extends zn{constructor(e){C(e.startsWith(FE),"argument-error"),super(e)}static credentialFromResult(e){return Pc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Pc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=si.fromJSON(e);return C(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return si._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Ri{constructor(){super("twitter.com")}static credential(e,t){return An._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pn.credential(t,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(n,e){return qn(n,"POST","/v1/accounts:signUp",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await rs._fromIdTokenResponse(e,r,s),o=Xp(r);return new Qt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Xp(r);return new Qt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Xp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(n){var e;const t=Qe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Qt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await cc(t,{returnSecureToken:!0}),s=await Qt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends Pt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Sc(e,t,r,s)}}function J_(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(n,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(n,e){const t=Q(n);await dl(!0,t,e);const{providerUserInfo:r}=await Z2(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=X_(r||[]);return t.providerData=t.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function yd(n,e,t=!1){const r=await Ln(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qt._forOperation(n,"link",r)}async function dl(n,e,t){await ko(e);const r=X_(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";C(r.has(t)===n,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await Ln(n,J_(r,s,e,n),t);C(i.idToken,r,"internal-error");const o=ll(i.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(n.uid===a,r,"user-mismatch"),Qt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(n,e,t=!1){const r="signIn",s=await J_(n,r,e),i=await Qt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function fl(n,e){return e0(Qe(n),e)}async function t0(n,e){const t=Q(n);return await dl(!1,t,e.providerId),yd(t,e)}async function n0(n,e){return Z_(Q(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(n,e){return qn(n,"POST","/v1/accounts:signInWithCustomToken",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(n,e){const t=Qe(n),r=await BE(t,{token:e,returnSecureToken:!0}),s=await Qt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?vd._fromServerResponse(e,t):"totpInfo"in t?wd._fromServerResponse(e,t):yt(e,"internal-error")}}class vd extends fa{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new vd(t)}}class wd extends fa{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new wd(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n,e,t){var r;C(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),C(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(C(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(C(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(n,e,t){var r;const s=Qe(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await mr(s,i,"getOobCode",!0);t&&Hs(s,o,t),await xu(s,o)}else t&&Hs(s,i,t),await xu(s,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await mr(s,i,"getOobCode",!0);t&&Hs(s,a,t),await xu(s,a)}else return Promise.reject(o)})}async function zE(n,e,t){await Q_(Q(n),{oobCode:e,newPassword:t})}async function GE(n,e){await bE(Q(n),{oobCode:e})}async function r0(n,e){const t=Q(n),r=await Q_(t,{oobCode:e}),s=r.requestType;switch(C(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(r.mfaInfo,t,"internal-error");default:C(r.email,t,"internal-error")}let i=null;return r.mfaInfo&&(i=fa._fromServerResponse(Qe(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function KE(n,e){const{data:t}=await r0(Q(n),e);return t.email}async function WE(n,e,t){var r;const s=Qe(n),i={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await mr(s,i,"signUpPassword");o=cc(s,l)}else o=cc(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await mr(s,i,"signUpPassword");return cc(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Qt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function HE(n,e,t){return fl(Q(n),Sr.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(n,e,t){var r;const s=Qe(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){C(c.handleCodeInApp,s,"argument-error"),c&&Hs(s,a,c)}if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await mr(s,i,"getOobCode",!0);o(a,t),await Pu(s,a)}else o(i,t),await Pu(s,i).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await mr(s,i,"getOobCode",!0);o(c,t),await Pu(s,c)}else return Promise.reject(a)})}function YE(n,e){const t=hl.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function JE(n,e,t){const r=Q(n),s=Sr.credentialWithLink(e,t||Co());return C(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),fl(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(n,e){return nt(n,"POST","/v1/accounts:createAuthUri",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(n,e){const t=pd()?Co():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await XE(Q(n),r);return s||[]}async function eT(n,e){const t=Q(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Hs(t.auth,s,e);const{email:i}=await AE(t.auth,s);i!==n.email&&await n.reload()}async function tT(n,e,t){const r=Q(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Hs(r.auth,i,t);const{email:o}=await RE(r.auth,i);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(n,e){return nt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Q(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ln(r,nT(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sT(n,e){return s0(Q(n),e,null)}function iT(n,e){return s0(Q(n),null,e)}async function s0(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await Ln(n,Y_(r,i));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(n){var e,t;if(!n)return null;const{providerId:r}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},i=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=ll(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Qs(i,a)}}if(!r)return null;switch(r){case"facebook.com":return new aT(i,s);case"github.com":return new cT(i,s);case"google.com":return new lT(i,s);case"twitter.com":return new uT(i,s,n.screenName||null);case"custom":case"anonymous":return new Qs(i,null);default:return new Qs(i,r,s)}}class Qs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class i0 extends Qs{constructor(e,t,r,s){super(e,t,r),this.username=s}}class aT extends Qs{constructor(e,t){super(e,"facebook.com",t)}}class cT extends i0{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class lT extends Qs{constructor(e,t){super(e,"google.com",t)}}class uT extends i0{constructor(e,t,r){super(e,"twitter.com",t,r)}}function hT(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:oT(t)}function dT(n){return Q(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Jr("enroll",e,t)}static _fromMfaPendingCredential(e){return new Jr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Jr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Jr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Qe(e),s=t.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>fa._fromServerResponse(r,a));C(s.mfaPendingCredential,r,"internal-error");const o=Jr._fromMfaPendingCredential(s.mfaPendingCredential);return new Id(o,i,async a=>{const c=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await Qt._fromIdTokenResponse(r,t.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return C(t.user,r,"internal-error"),Qt._forOperation(t.user,t.operationType,l);default:yt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function fT(n,e){var t;const r=Q(n),s=e;return C(e.customData.operationType,r,"argument-error"),C((t=s.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Id._fromError(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(n,e){return nt(n,"POST","/v2/accounts/mfaEnrollment:start",Ze(n,e))}function mT(n,e){return nt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ze(n,e))}function gT(n,e){return nt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Ze(n,e))}class Ed{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>fa._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Ed(e)}async getSession(){return Jr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,s=await this.getSession(),i=await Ln(this.user,r._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const s=await Ln(this.user,gT(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const Su=new WeakMap;function _T(n){const e=Q(n);return Su.has(e)||Su.set(e,Ed._fromUser(e)),Su.get(e)}const Cc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){const n=$e();return gd(n)||bi(n)}const vT=1e3,wT=10;class a0 extends o0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yT()&&dE(),this.fallbackToPolling=j_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}a0.type="LOCAL";const Td=a0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0 extends o0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}c0.type="SESSION";const hs=c0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,i)),c=await IT(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=pa("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function TT(n){Xe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function bT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function RT(){return bd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="firebaseLocalStorageDb",xT=1,kc="firebaseLocalStorage",u0="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ml(n,e){return n.transaction([kc],e?"readwrite":"readonly").objectStore(kc)}function PT(){const n=indexedDB.deleteDatabase(l0);return new ma(n).toPromise()}function th(){const n=indexedDB.open(l0,xT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(kc,{keyPath:u0})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(kc)?e(r):(r.close(),await PT(),e(await th()))})})}async function Zp(n,e,t){const r=ml(n,!0).put({[u0]:e,value:t});return new ma(r).toPromise()}async function ST(n,e){const t=ml(n,!1).get(e),r=await new ma(t).toPromise();return r===void 0?null:r.value}function em(n,e){const t=ml(n,!0).delete(e);return new ma(t).toPromise()}const CT=800,kT=3;class h0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await th(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>kT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(RT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bT(),!this.activeServiceWorker)return;this.sender=new ET(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await th();return await Zp(e,Cc,"1"),await em(e,Cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ST(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>em(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ml(s,!1).getAll();return new ma(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h0.type="LOCAL";const Vo=h0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(n,e){return nt(n,"POST","/v2/accounts/mfaSignIn:start",Ze(n,e))}function NT(n,e){return nt(n,"POST","/v2/accounts/mfaSignIn:finalize",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=500,OT=6e4,Ba=1e12;class MT{constructor(e){this.auth=e,this.counter=Ba,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new LT(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Ba;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Ba;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Ba;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class LT{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;C(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=FT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},OT)},VT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function FT(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=K_("rcb"),UT=new ha(3e4,6e4),$T="https://www.google.com/recaptcha/api.js?";class BT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return C(jT(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Hp(Xe().grecaptcha)?Promise.resolve(Xe().grecaptcha):new Promise((r,s)=>{const i=Xe().setTimeout(()=>{s(gt(e,"network-request-failed"))},UT.get());Xe()[Cu]=()=>{Xe().clearTimeout(i),delete Xe()[Cu];const a=Xe().grecaptcha;if(!a||!Hp(a)){s(gt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${$T}?${Ei({onload:Cu,render:"explicit",hl:t})}`;_d(o).catch(()=>{clearTimeout(i),s(gt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Xe().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function jT(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class qT{async load(e){return new MT(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="recaptcha",zT={theme:"light",type:"image"};let GT=class{constructor(e,t,r=Object.assign({},zT)){this.parameters=r,this.type=d0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Qe(e),this.isInvisible=this.parameters.size==="invisible",C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;C(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new qT:new BT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Xe()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){C(pd()&&!bd(),this.auth,"internal-error"),await KT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await fE(this.auth);C(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function KT(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=is._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function WT(n,e,t){const r=Qe(n),s=await gl(r,e,Q(t));return new Ad(s,i=>fl(r,i))}async function HT(n,e,t){const r=Q(n);await dl(!1,r,"phone");const s=await gl(r.auth,e,Q(t));return new Ad(s,i=>t0(r,i))}async function QT(n,e,t){const r=Q(n),s=await gl(r.auth,e,Q(t));return new Ad(s,i=>n0(r,i))}async function gl(n,e,t){var r;const s=await t.verify();try{C(typeof s=="string",n,"argument-error"),C(t.type===d0,n,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return C(o.type==="enroll",n,"internal-error"),(await pT(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{C(o.type==="signin",n,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return C(a,n,"missing-multi-factor-info"),(await DT(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await CE(n,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{t._reset()}}async function YT(n,e){await yd(Q(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds=class lc{constructor(e){this.providerId=lc.PROVIDER_ID,this.auth=Qe(e)}verifyPhoneNumber(e,t){return gl(this.auth,e,Q(t))}static credential(e,t){return is._fromVerification(e,t)}static credentialFromResult(e){const t=e;return lc.credentialFromTaggedObject(t)}static credentialFromError(e){return lc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?is._fromTokenResponse(t,r):null}};ds.PROVIDER_ID="phone";ds.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n,e){return e?qt(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends Ai{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JT(n){return e0(n.auth,new Rd(n),n.bypassAuthState)}function XT(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Z_(t,new Rd(n),n.bypassAuthState)}async function ZT(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),yd(t,new Rd(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JT;case"linkViaPopup":case"linkViaRedirect":return ZT;case"reauthViaPopup":case"reauthViaRedirect":return XT;default:yt(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=new ha(2e3,1e4);async function tb(n,e,t){const r=Qe(n);Ti(n,e,zn);const s=As(r,t);return new Dn(r,"signInViaPopup",e,s).executeNotNull()}async function nb(n,e,t){const r=Q(n);Ti(r.auth,e,zn);const s=As(r.auth,t);return new Dn(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function rb(n,e,t){const r=Q(n);Ti(r.auth,e,zn);const s=As(r.auth,t);return new Dn(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Dn extends f0{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eb.get())};e()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="pendingRedirect",fo=new Map;class ib extends f0{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ob(n,e){const t=m0(e),r=p0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function xd(n,e){return p0(n)._set(m0(e),"true")}function ab(){fo.clear()}function Pd(n,e){fo.set(n._key(),e)}function p0(n){return qt(n._redirectPersistence)}function m0(n){return ss(sb,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(n,e,t){return lb(n,e,t)}async function lb(n,e,t){const r=Qe(n);Ti(n,e,zn),await r._initializationPromise;const s=As(r,t);return await xd(s,r),s._openRedirect(r,e,"signInViaRedirect")}function ub(n,e,t){return hb(n,e,t)}async function hb(n,e,t){const r=Q(n);Ti(r.auth,e,zn),await r.auth._initializationPromise;const s=As(r.auth,t);await xd(s,r.auth);const i=await g0(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function db(n,e,t){return fb(n,e,t)}async function fb(n,e,t){const r=Q(n);Ti(r.auth,e,zn),await r.auth._initializationPromise;const s=As(r.auth,t);await dl(!1,r,e.providerId),await xd(s,r.auth);const i=await g0(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function pb(n,e){return await Qe(n)._initializationPromise,_l(n,e,!1)}async function _l(n,e,t=!1){const r=Qe(n),s=As(r,e),o=await new ib(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function g0(n){const e=pa(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=10*60*1e3;class _0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!y0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(gt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mb&&this.cachedEventUids.clear(),this.cachedEventUids.has(tm(e))}saveEventToCache(e){this.cachedEventUids.add(tm(e)),this.lastProcessedEventTime=Date.now()}}function tm(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function y0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(n,e={}){return nt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yb=/^https?/;async function vb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await v0(n);for(const t of e)try{if(wb(t))return}catch{}yt(n,"unauthorized-domain")}function wb(n){const e=Co(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!yb.test(t))return!1;if(_b.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=new ha(3e4,6e4);function nm(){const n=Xe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Eb(n){return new Promise((e,t)=>{var r,s,i;function o(){nm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nm(),t(gt(n,"network-request-failed"))},timeout:Ib.get()})}if(!((s=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const a=K_("iframefcb");return Xe()[a]=()=>{gapi.load?o():t(gt(n,"network-request-failed"))},_d(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw uc=null,e})}let uc=null;function Tb(n){return uc=uc||Eb(n),uc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new ha(5e3,15e3),Ab="__/auth/iframe",Rb="emulator/auth/iframe",xb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sb(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?md(e,Rb):`https://${n.config.authDomain}/${Ab}`,r={apiKey:e.apiKey,appName:n.name,v:xr},s=Pb.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ei(r).slice(1)}`}async function Cb(n){const e=await Tb(n),t=Xe().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:Sb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gt(n,"network-request-failed"),a=Xe().setTimeout(()=>{i(o)},bb.get());function c(){Xe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Db=500,Nb=600,Vb="_blank",Ob="http://localhost";class rm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mb(n,e,t,r=Db,s=Nb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=$e().toLowerCase();t&&(a=F_(l)?Vb:t),L_(l)&&(e=e||Ob,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,E])=>`${d}${m}=${E},`,"");if(uE(l)&&a!=="_self")return Lb(e||"",a),new rm(null);const h=window.open(e||"",a,u);C(h,n,"popup-blocked");try{h.focus()}catch{}return new rm(h)}function Lb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="__/auth/handler",Ub="emulator/auth/handler",$b=encodeURIComponent("fac");async function nh(n,e,t,r,s,i){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xr,eventId:s};if(e instanceof zn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",II(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ri){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${$b}=${encodeURIComponent(c)}`:"";return`${Bb(n)}?${Ei(a).slice(1)}${l}`}function Bb({config:n}){return n.emulator?md(n,Ub):`https://${n.authDomain}/${Fb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="webStorageSupport";class jb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hs,this._completeRedirectFn=_l,this._overrideRedirectResult=Pd}async _openPopup(e,t,r,s){var i;nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await nh(e,t,r,Co(),s);return Mb(e,o,pa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await nh(e,t,r,Co(),s);return TT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Cb(e),r=new _0(e);return t.register("authEvent",s=>(C(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ku,{type:ku},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ku];o!==void 0&&t(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return j_()||gd()||bi()}}const qb=jb;class zb{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return _n("unexpected MultiFactorSessionType")}}}class Sd extends zb{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Sd(e)}_finalizeEnroll(e,t,r){return mT(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return NT(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class w0{constructor(){}static assertion(e){return Sd._fromCredential(e)}}w0.FACTOR_ID="phone";var sm="@firebase/auth",im="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Wb(n){pr(new bn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:q_(n)},l=new vE(r,s,i,c);return wE(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pr(new bn("auth-internal",e=>{const t=Qe(e.getProvider("auth").getImmediate());return(r=>new Gb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(sm,im,Kb(n)),En(sm,im,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=5*60;hI("authIdTokenMaxAge");Wb("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=2e3;async function Yb(n,e,t){var r;const{BuildInfo:s}=fs();nn(e.sessionId,"AuthEvent did not contain a session ID");const i=await t4(e.sessionId),o={};return bi()?o.ibi=s.packageName:da()?o.apn=s.packageName:yt(n,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,nh(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Jb(n){const{BuildInfo:e}=fs(),t={};bi()?t.iosBundleId=e.packageName:da()?t.androidPackageName=e.packageName:yt(n,"operation-not-supported-in-this-environment"),await v0(n,t)}function Xb(n){const{cordova:e}=fs();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let s=null;r?e.plugins.browsertab.openUrl(n):s=e.InAppBrowser.open(n,lE()?"_blank":"_system","location=yes"),t(s)})})}async function Zb(n,e,t){const{cordova:r}=fs();let s=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(gt(n,"redirect-cancelled-by-user"))},Qb))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),da()&&document.addEventListener("visibilitychange",u,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{s()}}function e4(n){var e,t,r,s,i,o,a,c,l,u;const h=fs();C(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),C(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),C(typeof((i=(s=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||s===void 0?void 0:s.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function t4(n){const e=n4(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(s=>s.toString(16).padStart(2,"0")).join("")}function n4(n){if(nn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=20;class s4 extends _0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function i4(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:c4(),postBody:null,tenantId:n.tenantId,error:gt(n,"no-auth-event")}}function o4(n,e){return rh()._set(sh(n),e)}async function om(n){const e=await rh()._get(sh(n));return e&&await rh()._remove(sh(n)),e}function a4(n,e){var t,r;const s=u4(e);if(s.includes("/__/auth/callback")){const i=hc(s),o=i.firebaseError?l4(decodeURIComponent(i.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?gt(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:s,postBody:null}}return null}function c4(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<r4;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function rh(){return qt(Td)}function sh(n){return ss("authEvent",n.config.apiKey,n.name)}function l4(n){try{return JSON.parse(n)}catch{return null}}function u4(n){const e=hc(n),t=e.link?decodeURIComponent(e.link):void 0,r=hc(t).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return hc(s).link||s||r||t||n}function hc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return zs(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=500;class d4{constructor(){this._redirectPersistence=hs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=_l,this._overrideRedirectResult=Pd}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new s4(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){yt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,s){e4(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),ab(),await this._originValidation(e);const o=i4(e,r,s);await o4(e,o);const a=await Yb(e,o,t),c=await Xb(a);return Zb(e,i,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jb(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:s,BuildInfo:i}=fs(),o=setTimeout(async()=>{await om(e),t.onEvent(am())},h4),a=async u=>{clearTimeout(o);const h=await om(e);let d=null;h&&(u!=null&&u.url)&&(d=a4(h,u.url)),t.onEvent(d||am())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=s,l=`${i.packageName.toLowerCase()}://`;fs().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const f4=d4;function am(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:gt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p4(n,e){Qe(n)._logFramework(e)}var m4="@firebase/auth-compat",g4="0.4.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4=1e3;function po(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function y4(){return po()==="http:"||po()==="https:"}function I0(n=$e()){return!!((po()==="file:"||po()==="ionic:"||po()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function v4(){return cd()||ad()}function w4(){return g_()&&(document==null?void 0:document.documentMode)===11}function I4(n=$e()){return/Edge\/\d+/.test(n)}function E4(n=$e()){return w4()||I4(n)}function E0(){try{const n=self.localStorage,e=pa();if(n)return n.setItem(e,"1"),n.removeItem(e),E4()?xo():!0}catch{return Cd()&&xo()}return!1}function Cd(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Du(){return(y4()||m_()||I0())&&!v4()&&E0()&&!Cd()}function T0(){return I0()&&typeof document<"u"}async function T4(){return T0()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},_4);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function b4(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt={LOCAL:"local",NONE:"none",SESSION:"session"},qi=C,b0="persistence";function A4(n,e){if(qi(Object.values(jt).includes(e),n,"invalid-persistence-type"),cd()){qi(e!==jt.SESSION,n,"unsupported-persistence-type");return}if(ad()){qi(e===jt.NONE,n,"unsupported-persistence-type");return}if(Cd()){qi(e===jt.NONE||e===jt.LOCAL&&xo(),n,"unsupported-persistence-type");return}qi(e===jt.NONE||E0(),n,"unsupported-persistence-type")}async function ih(n){await n._initializationPromise;const e=A0(),t=ss(b0,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function R4(n,e){const t=A0();if(!t)return[];const r=ss(b0,n,e);switch(t.getItem(r)){case jt.NONE:return[ri];case jt.LOCAL:return[Vo,hs];case jt.SESSION:return[hs];default:return[]}}function A0(){var n;try{return((n=b4())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=C;class ir{constructor(){this.browserResolver=qt(qb),this.cordovaResolver=qt(f4),this.underlyingResolver=null,this._redirectPersistence=hs,this._completeRedirectFn=_l,this._overrideRedirectResult=Pd}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,s)}async _openRedirect(e,t,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,s)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return T0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return x4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await T4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(n){return n.unwrap()}function P4(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(n){return x0(n)}function C4(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new k4(n,fT(n,e))}else if(r){const s=x0(e),i=e;s&&(i.credential=s,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function x0(n){const{_tokenResponse:e}=n instanceof Pt?n.customData:n;if(!e)return null;if(!(n instanceof Pt)&&"temporaryProof"in e&&"phoneNumber"in e)return ds.credentialFromResult(n);const t=e.providerId;if(!t||t===ji.PASSWORD)return null;let r;switch(t){case ji.GOOGLE:r=dn;break;case ji.FACEBOOK:r=hn;break;case ji.GITHUB:r=fn;break;case ji.TWITTER:r=pn;break;default:const{oauthIdToken:s,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!s&&!a?null:a?t.startsWith("saml.")?si._create(t,a):An._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:s,accessToken:i}):new Ws(t).credential({idToken:s,accessToken:i,rawNonce:c})}return n instanceof Pt?r.credentialFromError(n):r.credentialFromResult(n)}function Dt(n,e){return e.catch(t=>{throw t instanceof Pt&&C4(n,t),t}).then(t=>{const r=t.operationType,s=t.user;return{operationType:r,credential:S4(t),additionalUserInfo:hT(t),user:yl.getOrCreate(s)}})}async function oh(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Dt(n,t.confirm(r))}}class k4{constructor(e,t){this.resolver=t,this.auth=P4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Dt(R0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl=class ro{constructor(e){this._delegate=e,this.multiFactor=_T(e)}static getOrCreate(e){return ro.USER_MAP.has(e)||ro.USER_MAP.set(e,new ro(e)),ro.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Dt(this.auth,t0(this._delegate,e))}async linkWithPhoneNumber(e,t){return oh(this.auth,HT(this._delegate,e,t))}async linkWithPopup(e){return Dt(this.auth,rb(this._delegate,e,ir))}async linkWithRedirect(e){return await ih(Qe(this.auth)),db(this._delegate,e,ir)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Dt(this.auth,n0(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return oh(this.auth,QT(this._delegate,e,t))}reauthenticateWithPopup(e){return Dt(this.auth,nb(this._delegate,e,ir))}async reauthenticateWithRedirect(e){return await ih(Qe(this.auth)),ub(this._delegate,e,ir)}sendEmailVerification(e){return eT(this._delegate,e)}async unlink(e){return await $E(this._delegate,e),this}updateEmail(e){return sT(this._delegate,e)}updatePassword(e){return iT(this._delegate,e)}updatePhoneNumber(e){return YT(this._delegate,e)}updateProfile(e){return rT(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return tT(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};yl.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=C;class ah{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;zi(r,"invalid-api-key",{appName:e.name}),zi(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?ir:void 0;this._delegate=t.initialize({options:{persistence:D4(r,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(z2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?yl.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){IE(this._delegate,e,t)}applyActionCode(e){return GE(this._delegate,e)}checkActionCode(e){return r0(this._delegate,e)}confirmPasswordReset(e,t){return zE(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Dt(this._delegate,WE(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return ZE(this._delegate,e)}isSignInWithEmailLink(e){return YE(this._delegate,e)}async getRedirectResult(){zi(Du(),this._delegate,"operation-not-supported-in-this-environment");const e=await pb(this._delegate,ir);return e?Dt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){p4(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:s,error:i,complete:o}=cm(e,t,r);return this._delegate.onAuthStateChanged(s,i,o)}onIdTokenChanged(e,t,r){const{next:s,error:i,complete:o}=cm(e,t,r);return this._delegate.onIdTokenChanged(s,i,o)}sendSignInLinkToEmail(e,t){return QE(this._delegate,e,t)}sendPasswordResetEmail(e,t){return qE(this._delegate,e,t||void 0)}async setPersistence(e){A4(this._delegate,e);let t;switch(e){case jt.SESSION:t=hs;break;case jt.LOCAL:t=await qt(Vo)._isAvailable()?Vo:Td;break;case jt.NONE:t=ri;break;default:return yt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Dt(this._delegate,UE(this._delegate))}signInWithCredential(e){return Dt(this._delegate,fl(this._delegate,e))}signInWithCustomToken(e){return Dt(this._delegate,jE(this._delegate,e))}signInWithEmailAndPassword(e,t){return Dt(this._delegate,HE(this._delegate,e,t))}signInWithEmailLink(e,t){return Dt(this._delegate,JE(this._delegate,e,t))}signInWithPhoneNumber(e,t){return oh(this._delegate,WT(this._delegate,e,t))}async signInWithPopup(e){return zi(Du(),this._delegate,"operation-not-supported-in-this-environment"),Dt(this._delegate,tb(this._delegate,e,ir))}async signInWithRedirect(e){return zi(Du(),this._delegate,"operation-not-supported-in-this-environment"),await ih(this._delegate),cb(this._delegate,e,ir)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return KE(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ah.Persistence=jt;function cm(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const s=r;return{next:o=>s(o&&yl.getOrCreate(o)),error:e,complete:t}}function D4(n,e){const t=R4(n,e);if(typeof self<"u"&&!t.includes(Vo)&&t.push(Vo),typeof window<"u")for(const r of[Td,hs])t.includes(r)||t.push(r);return t.includes(ri)||t.push(ri),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.providerId="phone",this._delegate=new ds(R0(Pr.auth()))}static credential(e,t){return ds.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}kd.PHONE_SIGN_IN_METHOD=ds.PHONE_SIGN_IN_METHOD;kd.PROVIDER_ID=ds.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=C;class V4{constructor(e,t,r=Pr.app()){var s;N4((s=r.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new GT(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4="auth-compat";function M4(n){n.INTERNAL.registerComponent(new bn(O4,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ah(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Os.EMAIL_SIGNIN,PASSWORD_RESET:Os.PASSWORD_RESET,RECOVER_EMAIL:Os.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Os.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Os.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Os.VERIFY_EMAIL}},EmailAuthProvider:Sr,FacebookAuthProvider:hn,GithubAuthProvider:fn,GoogleAuthProvider:dn,OAuthProvider:Ws,SAMLAuthProvider:Pc,PhoneAuthProvider:kd,PhoneMultiFactorGenerator:w0,RecaptchaVerifier:V4,TwitterAuthProvider:pn,Auth:ah,AuthCredential:Ai,Error:Pt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(m4,g4)}M4(Pr);var L4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Dd=Dd||{},X=L4||self;function vl(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function ga(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function F4(n){return Object.prototype.hasOwnProperty.call(n,Nu)&&n[Nu]||(n[Nu]=++U4)}var Nu="closure_uid_"+(1e9*Math.random()>>>0),U4=0;function $4(n,e,t){return n.call.apply(n.bind,arguments)}function B4(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Et(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=$4:Et=B4,Et.apply(null,arguments)}function ja(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function lt(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Cr(){this.s=this.s,this.o=this.o}var j4=0;Cr.prototype.s=!1;Cr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),j4!=0)&&F4(this)};Cr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const P0=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Nd(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function lm(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(vl(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function Tt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var q4=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{X.addEventListener("test",()=>{},e),X.removeEventListener("test",()=>{},e)}catch{}return n}();function Oo(n){return/^[\s\xa0]*$/.test(n)}function wl(){var n=X.navigator;return n&&(n=n.userAgent)?n:""}function mn(n){return wl().indexOf(n)!=-1}function Vd(n){return Vd[" "](n),n}Vd[" "]=function(){};function z4(n,e){var t=MA;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var G4=mn("Opera"),ii=mn("Trident")||mn("MSIE"),S0=mn("Edge"),ch=S0||ii,C0=mn("Gecko")&&!(wl().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),K4=wl().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function k0(){var n=X.document;return n?n.documentMode:void 0}var lh;e:{var Vu="",Ou=function(){var n=wl();if(C0)return/rv:([^\);]+)(\)|;)/.exec(n);if(S0)return/Edge\/([\d\.]+)/.exec(n);if(ii)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(K4)return/WebKit\/(\S+)/.exec(n);if(G4)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ou&&(Vu=Ou?Ou[1]:""),ii){var Mu=k0();if(Mu!=null&&Mu>parseFloat(Vu)){lh=String(Mu);break e}}lh=Vu}var uh;if(X.document&&ii){var um=k0();uh=um||parseInt(lh,10)||void 0}else uh=void 0;var W4=uh;function Mo(n,e){if(Tt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(C0){e:{try{Vd(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:H4[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Mo.$.h.call(this)}}lt(Mo,Tt);var H4={2:"touch",3:"pen",4:"mouse"};Mo.prototype.h=function(){Mo.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var _a="closure_listenable_"+(1e6*Math.random()|0),Q4=0;function Y4(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=s,this.key=++Q4,this.fa=this.ia=!1}function Il(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Od(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function J4(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function D0(n){const e={};for(const t in n)e[t]=n[t];return e}const hm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N0(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<hm.length;i++)t=hm[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function El(n){this.src=n,this.g={},this.h=0}El.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=dh(n,e,r,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Y4(e,this.src,i,!!r,s),e.ia=t,n.push(e)),e};function hh(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=P0(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Il(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function dh(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==e&&i.capture==!!t&&i.la==r)return s}return-1}var Md="closure_lm_"+(1e6*Math.random()|0),Lu={};function V0(n,e,t,r,s){if(r&&r.once)return M0(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)V0(n,e[i],t,r,s);return null}return t=Ud(t),n&&n[_a]?n.O(e,t,ga(r)?!!r.capture:!!r,s):O0(n,e,t,!1,r,s)}function O0(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=ga(s)?!!s.capture:!!s,a=Fd(n);if(a||(n[Md]=a=new El(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=X4(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)q4||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(F0(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function X4(){function n(t){return e.call(n.src,n.listener,t)}const e=Z4;return n}function M0(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)M0(n,e[i],t,r,s);return null}return t=Ud(t),n&&n[_a]?n.P(e,t,ga(r)?!!r.capture:!!r,s):O0(n,e,t,!0,r,s)}function L0(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)L0(n,e[i],t,r,s);else r=ga(r)?!!r.capture:!!r,t=Ud(t),n&&n[_a]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=dh(i,t,r,s),-1<t&&(Il(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=Fd(n))&&(e=n.g[e.toString()],n=-1,e&&(n=dh(e,t,r,s)),(t=-1<n?e[n]:null)&&Ld(t))}function Ld(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[_a])hh(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(F0(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Fd(e))?(hh(t,n),t.h==0&&(t.src=null,e[Md]=null)):Il(n)}}}function F0(n){return n in Lu?Lu[n]:Lu[n]="on"+n}function Z4(n,e){if(n.fa)n=!0;else{e=new Mo(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Ld(n),n=t.call(r,e)}return n}function Fd(n){return n=n[Md],n instanceof El?n:null}var Fu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ud(n){return typeof n=="function"?n:(n[Fu]||(n[Fu]=function(e){return n.handleEvent(e)}),n[Fu])}function ct(){Cr.call(this),this.i=new El(this),this.S=this,this.J=null}lt(ct,Cr);ct.prototype[_a]=!0;ct.prototype.removeEventListener=function(n,e,t,r){L0(this,n,e,t,r)};function _t(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Tt(e,n);else if(e instanceof Tt)e.target=e.target||n;else{var s=e;e=new Tt(r,n),N0(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=qa(o,r,!0,e)&&s}if(o=e.g=n,s=qa(o,r,!0,e)&&s,s=qa(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=qa(o,r,!1,e)&&s}ct.prototype.N=function(){if(ct.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Il(t[r]);delete n.g[e],n.h--}}this.J=null};ct.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ct.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function qa(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&hh(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var $d=X.JSON.stringify;class eA{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function tA(){var n=Bd;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class nA{constructor(){this.h=this.g=null}add(e,t){const r=U0.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var U0=new eA(()=>new rA,n=>n.reset());class rA{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function sA(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function iA(n){X.setTimeout(()=>{throw n},0)}let Lo,Fo=!1,Bd=new nA,$0=()=>{const n=X.Promise.resolve(void 0);Lo=()=>{n.then(oA)}};var oA=()=>{for(var n;n=tA();){try{n.h.call(n.g)}catch(t){iA(t)}var e=U0;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Fo=!1};function Tl(n,e){ct.call(this),this.h=n||1,this.g=e||X,this.j=Et(this.qb,this),this.l=Date.now()}lt(Tl,ct);M=Tl.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_t(this,"tick"),this.ga&&(jd(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jd(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}M.N=function(){Tl.$.N.call(this),jd(this),delete this.g};function qd(n,e,t){if(typeof n=="function")t&&(n=Et(n,t));else if(n&&typeof n.handleEvent=="function")n=Et(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(n,e||0)}function B0(n){n.g=qd(()=>{n.g=null,n.i&&(n.i=!1,B0(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class aA extends Cr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:B0(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(n){Cr.call(this),this.h=n,this.g={}}lt(Uo,Cr);var dm=[];function j0(n,e,t,r){Array.isArray(t)||(t&&(dm[0]=t.toString()),t=dm);for(var s=0;s<t.length;s++){var i=V0(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function q0(n){Od(n.g,function(e,t){this.g.hasOwnProperty(t)&&Ld(e)},n),n.g={}}Uo.prototype.N=function(){Uo.$.N.call(this),q0(this)};Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bl(){this.g=!0}bl.prototype.Ea=function(){this.g=!1};function cA(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function lA(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Gs(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+hA(n,t)+(r?" "+r:"")})}function uA(n,e){n.info(function(){return"TIMEOUT: "+e})}bl.prototype.info=function(){};function hA(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $d(t)}catch{return e}}var Rs={},fm=null;function Al(){return fm=fm||new ct}Rs.Ta="serverreachability";function z0(n){Tt.call(this,Rs.Ta,n)}lt(z0,Tt);function $o(n){const e=Al();_t(e,new z0(e))}Rs.STAT_EVENT="statevent";function G0(n,e){Tt.call(this,Rs.STAT_EVENT,n),this.stat=e}lt(G0,Tt);function xt(n){const e=Al();_t(e,new G0(e,n))}Rs.Ua="timingevent";function K0(n,e){Tt.call(this,Rs.Ua,n),this.size=e}lt(K0,Tt);function ya(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){n()},e)}var Rl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},W0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zd(){}zd.prototype.h=null;function pm(n){return n.h||(n.h=n.i())}function H0(){}var va={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Gd(){Tt.call(this,"d")}lt(Gd,Tt);function Kd(){Tt.call(this,"c")}lt(Kd,Tt);var fh;function xl(){}lt(xl,zd);xl.prototype.g=function(){return new XMLHttpRequest};xl.prototype.i=function(){return{}};fh=new xl;function wa(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Uo(this),this.P=dA,n=ch?125:void 0,this.V=new Tl(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Q0}function Q0(){this.i=null,this.g="",this.h=!1}var dA=45e3,ph={},Dc={};M=wa.prototype;M.setTimeout=function(n){this.P=n};function mh(n,e,t){n.L=1,n.v=Sl(Fn(e)),n.s=t,n.S=!0,Y0(n,null)}function Y0(n,e){n.G=Date.now(),Ia(n),n.A=Fn(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),s1(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Q0,n.g=A1(n.l,t?e:null,!n.s),0<n.O&&(n.M=new aA(Et(n.Pa,n,n.g),n.O)),j0(n.U,n.g,"readystatechange",n.nb),e=n.I?D0(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),$o(),cA(n.j,n.u,n.A,n.m,n.W,n.s)}M.nb=function(n){n=n.target;const e=this.M;e&&yn(n)==3?e.l():this.Pa(n)};M.Pa=function(n){try{if(n==this.g)e:{const u=yn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ch||this.g&&(this.h.h||this.g.ja()||ym(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?$o(3):$o(2)),Pl(this);var t=this.g.da();this.ca=t;t:if(J0(this)){var r=ym(this.g);n="";var s=r.length,i=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),mo(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,lA(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oo(a)){var l=a;break t}}l=null}if(t=l)Gs(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gh(this,t);else{this.i=!1,this.o=3,xt(12),Xr(this),mo(this);break e}}this.S?(X0(this,u,o),ch&&this.i&&u==3&&(j0(this.U,this.V,"tick",this.mb),this.V.start())):(Gs(this.j,this.m,o,null),gh(this,o)),u==4&&Xr(this),this.i&&!this.J&&(u==4?I1(this.l,this):(this.i=!1,Ia(this)))}else NA(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),Xr(this),mo(this)}}}catch{}finally{}};function J0(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function X0(n,e,t){let r=!0,s;for(;!n.J&&n.C<t.length;)if(s=fA(n,t),s==Dc){e==4&&(n.o=4,xt(14),r=!1),Gs(n.j,n.m,null,"[Incomplete Response]");break}else if(s==ph){n.o=4,xt(15),Gs(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Gs(n.j,n.m,s,null),gh(n,s);J0(n)&&s!=Dc&&s!=ph&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,xt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Xd(e),e.M=!0,xt(11))):(Gs(n.j,n.m,t,"[Invalid Chunked Response]"),Xr(n),mo(n))}M.mb=function(){if(this.g){var n=yn(this.g),e=this.g.ja();this.C<e.length&&(Pl(this),X0(this,n,e),this.i&&n!=4&&Ia(this))}};function fA(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Dc:(t=Number(e.substring(t,r)),isNaN(t)?ph:(r+=1,r+t>e.length?Dc:(e=e.slice(r,r+t),n.C=r+t,e)))}M.cancel=function(){this.J=!0,Xr(this)};function Ia(n){n.Y=Date.now()+n.P,Z0(n,n.P)}function Z0(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ya(Et(n.lb,n),e)}function Pl(n){n.B&&(X.clearTimeout(n.B),n.B=null)}M.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(uA(this.j,this.A),this.L!=2&&($o(),xt(17)),Xr(this),this.o=2,mo(this)):Z0(this,this.Y-n)};function mo(n){n.l.H==0||n.J||I1(n.l,n)}function Xr(n){Pl(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,jd(n.V),q0(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function gh(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||_h(t.i,n))){if(!n.K&&_h(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Oc(t),Dl(t);else break e;Jd(t),xt(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=ya(Et(t.ib,t),6e3));if(1>=a1(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Zr(t,11)}else if((n.K||t.g==n)&&Oc(t),!Oo(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const m=n.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Wd(i,i.h),i.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Ce(r.I,r.F,w))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=b1(r,r.J?r.pa:null,r.Y),o.K){c1(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Pl(a),Ia(a)),r.g=o}else v1(r);0<t.j.length&&Nl(t)}else l[0]!="stop"&&l[0]!="close"||Zr(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Zr(t,7):Yd(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}$o(4)}catch{}}function pA(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(vl(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function mA(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(vl(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function e1(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(vl(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=mA(n),r=pA(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var t1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gA(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function os(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof os){this.h=n.h,Nc(this,n.j),this.s=n.s,this.g=n.g,Vc(this,n.m),this.l=n.l;var e=n.i,t=new Bo;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),mm(this,t),this.o=n.o}else n&&(e=String(n).match(t1))?(this.h=!1,Nc(this,e[1]||"",!0),this.s=so(e[2]||""),this.g=so(e[3]||"",!0),Vc(this,e[4]),this.l=so(e[5]||"",!0),mm(this,e[6]||"",!0),this.o=so(e[7]||"")):(this.h=!1,this.i=new Bo(null,this.h))}os.prototype.toString=function(){var n=[],e=this.j;e&&n.push(io(e,gm,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(io(e,gm,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(io(t,t.charAt(0)=="/"?vA:yA,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",io(t,IA)),n.join("")};function Fn(n){return new os(n)}function Nc(n,e,t){n.j=t?so(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Vc(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function mm(n,e,t){e instanceof Bo?(n.i=e,EA(n.i,n.h)):(t||(e=io(e,wA)),n.i=new Bo(e,n.h))}function Ce(n,e,t){n.i.set(e,t)}function Sl(n){return Ce(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function so(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function io(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,_A),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function _A(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var gm=/[#\/\?@]/g,yA=/[#\?:]/g,vA=/[#\?]/g,wA=/[#\?@]/g,IA=/#/g;function Bo(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function kr(n){n.g||(n.g=new Map,n.h=0,n.i&&gA(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}M=Bo.prototype;M.add=function(n,e){kr(this),this.i=null,n=xi(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function n1(n,e){kr(n),e=xi(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function r1(n,e){return kr(n),e=xi(n,e),n.g.has(e)}M.forEach=function(n,e){kr(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};M.ta=function(){kr(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};M.Z=function(n){kr(this);let e=[];if(typeof n=="string")r1(this,n)&&(e=e.concat(this.g.get(xi(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};M.set=function(n,e){return kr(this),this.i=null,n=xi(this,n),r1(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};M.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function s1(n,e,t){n1(n,e),0<t.length&&(n.i=null,n.g.set(xi(n,e),Nd(t)),n.h+=t.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function xi(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function EA(n,e){e&&!n.j&&(kr(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(n1(this,r),s1(this,s,t))},n)),n.j=e}var TA=class{constructor(n,e){this.g=n,this.map=e}};function i1(n){this.l=n||bA,X.PerformanceNavigationTiming?(n=X.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bA=10;function o1(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function a1(n){return n.h?1:n.g?n.g.size:0}function _h(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Wd(n,e){n.g?n.g.add(e):n.h=e}function c1(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}i1.prototype.cancel=function(){if(this.i=l1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function l1(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Nd(n.i)}var AA=class{stringify(n){return X.JSON.stringify(n,void 0)}parse(n){return X.JSON.parse(n,void 0)}};function RA(){this.g=new AA}function xA(n,e,t){const r=t||"";try{e1(n,function(s,i){let o=s;ga(s)&&(o=$d(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function PA(n,e){const t=new bl;if(X.Image){const r=new Image;r.onload=ja(za,t,r,"TestLoadImage: loaded",!0,e),r.onerror=ja(za,t,r,"TestLoadImage: error",!1,e),r.onabort=ja(za,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=ja(za,t,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function za(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ea(n){this.l=n.fc||null,this.j=n.ob||!1}lt(Ea,zd);Ea.prototype.g=function(){return new Cl(this.l,this.j)};Ea.prototype.i=function(n){return function(){return n}}({});function Cl(n,e){ct.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Hd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Cl,ct);var Hd=0;M=Cl.prototype;M.open=function(n,e){if(this.readyState!=Hd)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,jo(this)};M.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ta(this)),this.readyState=Hd};M.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,jo(this)),this.g&&(this.readyState=3,jo(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;u1(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function u1(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}M.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ta(this):jo(this),this.readyState==3&&u1(this)}};M.Za=function(n){this.g&&(this.response=this.responseText=n,Ta(this))};M.Ya=function(n){this.g&&(this.response=n,Ta(this))};M.ka=function(){this.g&&Ta(this)};function Ta(n){n.readyState=4,n.l=null,n.j=null,n.A=null,jo(n)}M.setRequestHeader=function(n,e){this.v.append(n,e)};M.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function jo(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var SA=X.JSON.parse;function qe(n){ct.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=h1,this.L=this.M=!1}lt(qe,ct);var h1="",CA=/^https?$/i,kA=["POST","PUT"];M=qe.prototype;M.Oa=function(n){this.M=n};M.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fh.g(),this.C=this.u?pm(this.u):pm(fh),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(i){_m(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=X.FormData&&n instanceof X.FormData,!(0<=P0(kA,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{p1(this),0<this.B&&((this.L=DA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=qd(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){_m(this,i)}};function DA(n){return ii&&typeof n.timeout=="number"&&n.ontimeout!==void 0}M.ua=function(){typeof Dd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function _m(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,d1(n),kl(n)}function d1(n){n.F||(n.F=!0,_t(n,"complete"),_t(n,"error"))}M.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,_t(this,"complete"),_t(this,"abort"),kl(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kl(this,!0)),qe.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?f1(this):this.kb())};M.kb=function(){f1(this)};function f1(n){if(n.h&&typeof Dd<"u"&&(!n.C[1]||yn(n)!=4||n.da()!=2)){if(n.v&&yn(n)==4)qd(n.La,0,n);else if(_t(n,"readystatechange"),yn(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var s=String(n.I).match(t1)[1]||null;!s&&X.self&&X.self.location&&(s=X.self.location.protocol.slice(0,-1)),r=!CA.test(s?s.toLowerCase():"")}t=r}if(t)_t(n,"complete"),_t(n,"success");else{n.m=6;try{var i=2<yn(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",d1(n)}}finally{kl(n)}}}}function kl(n,e){if(n.g){p1(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||_t(n,"ready");try{t.onreadystatechange=r}catch{}}}function p1(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(X.clearTimeout(n.A),n.A=null)}M.isActive=function(){return!!this.g};function yn(n){return n.g?n.g.readyState:0}M.da=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),SA(e)}};function ym(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case h1:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function NA(n){const e={};n=(n.g&&2<=yn(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Oo(n[r]))continue;var t=sA(n[r]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const i=e[s]||[];e[s]=i,i.push(t)}J4(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function m1(n){let e="";return Od(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Qd(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=m1(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Ce(n,e,t))}function Gi(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function g1(n){this.Ga=0,this.j=[],this.l=new bl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Gi("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Gi("baseRetryDelayMs",5e3,n),this.hb=Gi("retryDelaySeedMs",1e4,n),this.eb=Gi("forwardChannelMaxRetries",2,n),this.xa=Gi("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new i1(n&&n.concurrentRequestLimit),this.Ja=new RA,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=g1.prototype;M.ra=8;M.H=1;function Yd(n){if(_1(n),n.H==3){var e=n.W++,t=Fn(n.I);if(Ce(t,"SID",n.K),Ce(t,"RID",e),Ce(t,"TYPE","terminate"),ba(n,t),e=new wa(n,n.l,e),e.L=2,e.v=Sl(Fn(t)),t=!1,X.navigator&&X.navigator.sendBeacon)try{t=X.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&X.Image&&(new Image().src=e.v,t=!0),t||(e.g=A1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ia(e)}T1(n)}function Dl(n){n.g&&(Xd(n),n.g.cancel(),n.g=null)}function _1(n){Dl(n),n.u&&(X.clearTimeout(n.u),n.u=null),Oc(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&X.clearTimeout(n.m),n.m=null)}function Nl(n){if(!o1(n.i)&&!n.m){n.m=!0;var e=n.Na;Lo||$0(),Fo||(Lo(),Fo=!0),Bd.add(e,n),n.C=0}}function VA(n,e){return a1(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=ya(Et(n.Na,n,e),E1(n,n.C)),n.C++,!0)}M.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new wa(this,this.l,n);let i=this.s;if(this.U&&(i?(i=D0(i),N0(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=y1(this,s,e),t=Fn(this.I),Ce(t,"RID",n),Ce(t,"CVER",22),this.F&&Ce(t,"X-HTTP-Session-Id",this.F),ba(this,t),i&&(this.O?e="headers="+encodeURIComponent(String(m1(i)))+"&"+e:this.o&&Qd(t,this.o,i)),Wd(this.i,s),this.bb&&Ce(t,"TYPE","init"),this.P?(Ce(t,"$req",e),Ce(t,"SID","null"),s.aa=!0,mh(s,t,null)):mh(s,t,e),this.H=2}}else this.H==3&&(n?vm(this,n):this.j.length==0||o1(this.i)||vm(this))};function vm(n,e){var t;e?t=e.m:t=n.W++;const r=Fn(n.I);Ce(r,"SID",n.K),Ce(r,"RID",t),Ce(r,"AID",n.V),ba(n,r),n.o&&n.s&&Qd(r,n.o,n.s),t=new wa(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=y1(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Wd(n.i,t),mh(t,r,e)}function ba(n,e){n.na&&Od(n.na,function(t,r){Ce(e,r,t)}),n.h&&e1({},function(t,r){Ce(e,r,t)})}function y1(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Et(n.h.Va,n.h,n):null;e:{var s=n.j;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{xA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function v1(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Lo||$0(),Fo||(Lo(),Fo=!0),Bd.add(e,n),n.A=0}}function Jd(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=ya(Et(n.Ma,n),E1(n,n.A)),n.A++,!0)}M.Ma=function(){if(this.u=null,w1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=ya(Et(this.jb,this),n)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xt(10),Dl(this),w1(this))};function Xd(n){n.B!=null&&(X.clearTimeout(n.B),n.B=null)}function w1(n){n.g=new wa(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Fn(n.wa);Ce(e,"RID","rpc"),Ce(e,"SID",n.K),Ce(e,"AID",n.V),Ce(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Ce(e,"TO",n.qa),Ce(e,"TYPE","xmlhttp"),ba(n,e),n.o&&n.s&&Qd(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Sl(Fn(e)),t.s=null,t.S=!0,Y0(t,n)}M.ib=function(){this.v!=null&&(this.v=null,Dl(this),Jd(this),xt(19))};function Oc(n){n.v!=null&&(X.clearTimeout(n.v),n.v=null)}function I1(n,e){var t=null;if(n.g==e){Oc(n),Xd(n),n.g=null;var r=2}else if(_h(n.i,e))t=e.F,c1(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=n.C;r=Al(),_t(r,new K0(r,t)),Nl(n)}else v1(n);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&VA(n,e)||r==2&&Jd(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Zr(n,5);break;case 4:Zr(n,10);break;case 3:Zr(n,6);break;default:Zr(n,2)}}}function E1(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Zr(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Et(n.pb,n);t||(t=new os("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Nc(t,"https"),Sl(t)),PA(t.toString(),r)}else xt(2);n.H=0,n.h&&n.h.za(e),T1(n),_1(n)}M.pb=function(n){n?(this.l.info("Successfully pinged google.com"),xt(2)):(this.l.info("Failed to ping google.com"),xt(1))};function T1(n){if(n.H=0,n.ma=[],n.h){const e=l1(n.i);(e.length!=0||n.j.length!=0)&&(lm(n.ma,e),lm(n.ma,n.j),n.i.i.length=0,Nd(n.j),n.j.length=0),n.h.ya()}}function b1(n,e,t){var r=t instanceof os?Fn(t):new os(t);if(r.g!="")e&&(r.g=e+"."+r.g),Vc(r,r.m);else{var s=X.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new os(null);r&&Nc(i,r),e&&(i.g=e),s&&Vc(i,s),t&&(i.l=t),r=i}return t=n.F,e=n.Da,t&&e&&Ce(r,t,e),Ce(r,"VER",n.ra),ba(n,r),r}function A1(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new qe(new Ea({ob:!0})):new qe(n.va),e.Oa(n.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function R1(){}M=R1.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Mc(){if(ii&&!(10<=Number(W4)))throw Error("Environmental error: no available transport.")}Mc.prototype.g=function(n,e){return new zt(n,e)};function zt(n,e){ct.call(this),this.g=new g1(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Oo(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oo(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Pi(this)}lt(zt,ct);zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;xt(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=b1(n,null,n.Y),Nl(n)};zt.prototype.close=function(){Yd(this.g)};zt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=$d(n),n=t);e.j.push(new TA(e.fb++,n)),e.H==3&&Nl(e)};zt.prototype.N=function(){this.g.h=null,delete this.j,Yd(this.g),delete this.g,zt.$.N.call(this)};function x1(n){Gd.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}lt(x1,Gd);function P1(){Kd.call(this),this.status=1}lt(P1,Kd);function Pi(n){this.g=n}lt(Pi,R1);Pi.prototype.Ba=function(){_t(this.g,"a")};Pi.prototype.Aa=function(n){_t(this.g,new x1(n))};Pi.prototype.za=function(n){_t(this.g,new P1)};Pi.prototype.ya=function(){_t(this.g,"b")};function OA(){this.blockSize=-1}function rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}lt(rn,OA);rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Uu(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)r[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var i=n.g[3],o=e+(i^t&(s^i))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(t^s))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^i)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~i))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}rn.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=t;)Uu(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<e;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){Uu(this,r),s=0;break}}else for(;i<e;)if(r[s++]=n[i++],s==this.blockSize){Uu(this,r),s=0;break}}this.h=s,this.i+=e};rn.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function Ee(n,e){this.h=e;for(var t=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==e||(t[s]=i,r=!1)}this.g=t}var MA={};function Zd(n){return-128<=n&&128>n?z4(n,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([n|0],0>n?-1:0)}function vn(n){if(isNaN(n)||!isFinite(n))return Ys;if(0>n)return ft(vn(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=yh;return new Ee(e,0)}function S1(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ft(S1(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=vn(Math.pow(e,8)),r=Ys,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),e);8>i?(i=vn(Math.pow(e,i)),r=r.R(i).add(vn(o))):(r=r.R(t),r=r.add(vn(o)))}return r}var yh=4294967296,Ys=Zd(0),vh=Zd(1),wm=Zd(16777216);M=Ee.prototype;M.ea=function(){if(Kt(this))return-ft(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:yh+r)*e,e*=yh}return n};M.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Nn(this))return"0";if(Kt(this))return"-"+ft(this).toString(n);for(var e=vn(Math.pow(n,6)),t=this,r="";;){var s=Fc(t,e).g;t=Lc(t,s.R(e));var i=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,Nn(t))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};M.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Nn(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Kt(n){return n.h==-1}M.X=function(n){return n=Lc(this,n),Kt(n)?-1:Nn(n)?0:1};function ft(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new Ee(t,~n.h).add(vh)}M.abs=function(){return Kt(this)?ft(this):this};M.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,t[s]=o<<16|i}return new Ee(t,t[t.length-1]&-2147483648?-1:0)};function Lc(n,e){return n.add(ft(e))}M.R=function(n){if(Nn(this)||Nn(n))return Ys;if(Kt(this))return Kt(n)?ft(this).R(ft(n)):ft(ft(this).R(n));if(Kt(n))return ft(this.R(ft(n)));if(0>this.X(wm)&&0>n.X(wm))return vn(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;t[2*r+2*s]+=o*c,Ga(t,2*r+2*s),t[2*r+2*s+1]+=i*c,Ga(t,2*r+2*s+1),t[2*r+2*s+1]+=o*a,Ga(t,2*r+2*s+1),t[2*r+2*s+2]+=i*a,Ga(t,2*r+2*s+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new Ee(t,0)};function Ga(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Ki(n,e){this.g=n,this.h=e}function Fc(n,e){if(Nn(e))throw Error("division by zero");if(Nn(n))return new Ki(Ys,Ys);if(Kt(n))return e=Fc(ft(n),e),new Ki(ft(e.g),ft(e.h));if(Kt(e))return e=Fc(n,ft(e)),new Ki(ft(e.g),e.h);if(30<n.g.length){if(Kt(n)||Kt(e))throw Error("slowDivide_ only works with positive integers.");for(var t=vh,r=e;0>=r.X(n);)t=Im(t),r=Im(r);var s=Ms(t,1),i=Ms(r,1);for(r=Ms(r,2),t=Ms(t,2);!Nn(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(t),i=o),r=Ms(r,1),t=Ms(t,1)}return e=Lc(n,s.R(e)),new Ki(s,e)}for(s=Ys;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=vn(t),o=i.R(e);Kt(o)||0<o.X(n);)t-=r,i=vn(t),o=i.R(e);Nn(i)&&(i=vh),s=s.add(i),n=Lc(n,o)}return new Ki(s,n)}M.gb=function(n){return Fc(this,n).h};M.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new Ee(t,this.h&n.h)};M.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new Ee(t,this.h|n.h)};M.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new Ee(t,this.h^n.h)};function Im(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Ee(t,n.h)}function Ms(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,s=[],i=0;i<r;i++)s[i]=0<e?n.D(i+t)>>>e|n.D(i+t+1)<<32-e:n.D(i+t);return new Ee(s,n.h)}Mc.prototype.createWebChannel=Mc.prototype.g;zt.prototype.send=zt.prototype.u;zt.prototype.open=zt.prototype.m;zt.prototype.close=zt.prototype.close;Rl.NO_ERROR=0;Rl.TIMEOUT=8;Rl.HTTP_ERROR=6;W0.COMPLETE="complete";H0.EventType=va;va.OPEN="a";va.CLOSE="b";va.ERROR="c";va.MESSAGE="d";ct.prototype.listen=ct.prototype.O;qe.prototype.listenOnce=qe.prototype.P;qe.prototype.getLastError=qe.prototype.Sa;qe.prototype.getLastErrorCode=qe.prototype.Ia;qe.prototype.getStatus=qe.prototype.da;qe.prototype.getResponseJson=qe.prototype.Wa;qe.prototype.getResponseText=qe.prototype.ja;qe.prototype.send=qe.prototype.ha;qe.prototype.setWithCredentials=qe.prototype.Oa;rn.prototype.digest=rn.prototype.l;rn.prototype.reset=rn.prototype.reset;rn.prototype.update=rn.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=vn;Ee.fromString=S1;var LA=function(){return new Mc},FA=function(){return Al()},$u=Rl,UA=W0,$A=Rs,Em={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},BA=Ea,Ka=H0,jA=qe,qA=rn,Js=Ee;const Tm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new cl("@firebase/firestore");function wh(){return gr.logLevel}function zA(n){gr.setLogLevel(n)}function x(n,...e){if(gr.logLevel<=fe.DEBUG){const t=e.map(ef);gr.debug(`Firestore (${Si}): ${n}`,...t)}}function Ge(n,...e){if(gr.logLevel<=fe.ERROR){const t=e.map(ef);gr.error(`Firestore (${Si}): ${n}`,...t)}}function sn(n,...e){if(gr.logLevel<=fe.WARN){const t=e.map(ef);gr.warn(`Firestore (${Si}): ${n}`,...t)}}function ef(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n="Unexpected state"){const e=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: `+n;throw Ge(e),new Error(e)}function G(n,e){n||U()}function GA(n,e){n||U()}function O(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(st.UNAUTHENTICATED))}shutdown(){}}class WA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class HA{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new at;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new at,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new at)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new C1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new st(e)}}class QA{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class YA{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new QA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new JA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ZA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function oi(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function D1(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Le(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Le(0,0))}static max(){return new q(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qo?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ge extends qo{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const e6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends qo{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return e6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new T(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new T(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new T(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new T(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ge.fromString(e))}static fromName(e){return new N(ge.fromString(e).popFirst(5))}static empty(){return new N(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ge(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Ih(n){return n.fields.find(e=>e.kind===2)}function jr(n){return n.fields.filter(e=>e.kind!==2)}N1.UNKNOWN_ID=-1;class t6{constructor(e,t){this.fieldPath=e,this.kind=t}}class Uc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Uc(0,Gt.min())}}function V1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new Le(t+1,0):new Le(t,r));return new Gt(s,N.empty(),e)}function O1(n){return new Gt(n.readTime,n.key,-1)}class Gt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Gt(q.min(),N.empty(),-1)}static max(){return new Gt(q.max(),N.empty(),-1)}}function tf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=N.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(n){if(n.code!==y.FAILED_PRECONDITION||n.message!==M1)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof _?t:_.resolve(t)}catch(t){return _.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):_.reject(t)}static resolve(e){return new _((t,r)=>{t(e)})}static reject(e){return new _((t,r)=>{r(e)})}static waitFor(e){return new _((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=_.resolve(!1);for(const r of e)t=t.next(s=>s?_.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new _((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,t){return new _((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new at,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new go(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const s=nf(r.target.error);this.m.reject(new go(e,s))}}static open(e,t,r,s){try{return new Vl(t,e.transaction(s,r))}catch(i){throw new go(t,i)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new r6(t)}}class Xt{constructor(e,t,r){this.name=e,this.version=t,this.S=r,Xt.D($e())===12.2&&Ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),qr(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!xo())return!1;if(Xt.C())return!0;const e=$e(),t=Xt.D(e),r=0<t&&t<10,s=Xt.F(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new go(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new T(y.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new T(y.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new go(e,o))},s.onupgradeneeded=i=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.B(o,s.transaction,i.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=Vl.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.p(),l)).catch(l=>(a.abort(l),_.reject(l))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class n6{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return qr(this.q.delete())}}class go extends T{constructor(e,t){super(y.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Nr(n){return n.name==="IndexedDbTransactionError"}class r6{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),qr(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),qr(this.store.add(e))}get(e){return qr(this.store.get(e)).next(t=>(t===void 0&&(t=null),x("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),qr(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),qr(this.store.count())}G(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.j(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new _((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new _((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,t){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.j(s,(i,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.j(s,t)}X(e){const t=this.cursor({});return new _((r,s)=>{t.onerror=i=>{const o=nf(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,t){const r=[];return new _((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new n6(a),l=t(a.primaryKey,a.value,c);if(l instanceof _){const u=l.catch(h=>(c.done(),_.reject(h)));r.push(u)}c.isDone?s():c.U===null?a.continue():a.continue(c.U)}}).next(()=>_.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function qr(n){return new _((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=nf(r.target.error);t(s)}})}let bm=!1;function nf(n){const e=Xt.D($e());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bm||(bm=!0,setTimeout(()=>{throw r},0)),r}}return n}class s6{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){x("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(t){Nr(t)?x("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Dr(t)}await this.te(6e4)})}}class i6{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let s=t,i=!0;return _.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(s,i)).next(a=>(x("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=O1(i);tf(o,r)>0&&(r=o)}),new Gt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Vt.ae=-1;function Aa(n){return n==null}function zo(n){return n===0&&1/n==-1/0}function F1(n){return typeof n=="number"&&Number.isInteger(n)&&!zo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Am(e)),e=o6(n.get(t),e);return Am(e)}function o6(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Am(n){return n+""}function wn(n){const e=n.length;if(G(e>=2),e===2)return G(n.charAt(0)===""&&n.charAt(1)===""),ge.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&U(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:U()}i=o+2}return new ge(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n,e){return[n,St(e)]}function U1(n,e,t){return[n,St(e),t]}const a6={},c6=["prefixPath","collectionGroup","readTime","documentId"],l6=["prefixPath","collectionGroup","documentId"],u6=["collectionGroup","readTime","prefixPath","documentId"],h6=["canonicalId","targetId"],d6=["targetId","path"],f6=["path","targetId"],p6=["collectionId","parent"],m6=["indexId","uid"],g6=["uid","sequenceNumber"],_6=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],y6=["indexId","uid","orderedDocumentKey"],v6=["userId","collectionPath","documentId"],w6=["userId","collectionPath","largestBatchId"],I6=["userId","collectionGroup","largestBatchId"],$1=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],E6=[...$1,"documentOverlays"],B1=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],j1=B1,T6=[...j1,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends L1{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function ut(n,e){const t=O(n);return Xt.O(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function q1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||dt.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new dt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,s,i){return this}insert(e,t,r){return new dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pm(this.data.getIterator())}getIteratorFrom(e){return new Pm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ne(this.comparator);return t.data=e,t}}class Pm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ls(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Ot([])}unionWith(e){let t=new Ne(Ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return oi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new z1("Invalid base64 string: "+i):i}}(e);return new et(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const A6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(n){if(G(!!n),typeof n=="string"){let e=0;const t=A6.exec(n);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(n.seconds),nanos:je(n.nanos)}}function je(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yr(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function rf(n){const e=n.mapValue.fields.__previous_value__;return Ol(e)?rf(e):e}function Go(n){const e=_r(n.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e,t,r,s,i,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class vr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},fc={nullValue:"NULL_VALUE"};function ps(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ol(n)?4:G1(n)?9007199254740991:10:U()}function Rn(n,e){if(n===e)return!0;const t=ps(n);if(t!==ps(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Go(n).isEqual(Go(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_r(s.timestampValue),a=_r(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return yr(s.bytesValue).isEqual(yr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),a=je(i.doubleValue);return o===a?zo(o)===zo(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return oi(n.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(xm(o)!==xm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Rn(o[c],a[c])))return!1;return!0}(n,e);default:return U()}}function Ko(n,e){return(n.values||[]).find(t=>Rn(t,e))!==void 0}function wr(n,e){if(n===e)return 0;const t=ps(n),r=ps(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=je(i.integerValue||i.doubleValue),c=je(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Sm(n.timestampValue,e.timestampValue);case 4:return Sm(Go(n),Go(e));case 5:return ee(n.stringValue,e.stringValue);case 6:return function(i,o){const a=yr(i),c=yr(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ee(a[l],c[l]);if(u!==0)return u}return ee(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ee(je(i.latitude),je(o.latitude));return a!==0?a:ee(je(i.longitude),je(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=wr(a[l],c[l]);if(u)return u}return ee(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===or.mapValue&&o===or.mapValue)return 0;if(i===or.mapValue)return 1;if(o===or.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ee(c[h],u[h]);if(d!==0)return d;const m=wr(a[c[h]],l[u[h]]);if(m!==0)return m}return ee(c.length,u.length)}(n.mapValue,e.mapValue);default:throw U()}}function Sm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=_r(n),r=_r(e),s=ee(t.seconds,r.seconds);return s!==0?s:ee(t.nanos,r.nanos)}function ai(n){return Th(n)}function Th(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=_r(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return yr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return N.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Th(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Th(t.fields[o])}`;return s+"}"}(n.mapValue):U()}function ms(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function bh(n){return!!n&&"integerValue"in n}function Wo(n){return!!n&&"arrayValue"in n}function Cm(n){return!!n&&"nullValue"in n}function km(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pc(n){return!!n&&"mapValue"in n}function _o(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return xs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=_o(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_o(n.arrayValue.values[t]);return e}return Object.assign({},n)}function G1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function x6(n){return"nullValue"in n?fc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ms(vr.empty(),N.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:U()}function P6(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ms(vr.empty(),N.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?or:U()}function Dm(n,e){const t=wr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Nm(n,e){const t=wr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!pc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(t)}setAll(e){let t=Ke.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=_o(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());pc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];pc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){xs(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(_o(this.value))}}function K1(n){const e=[];return xs(n.fields,(t,r)=>{const s=new Ke([t]);if(pc(r)){const i=K1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ke(e,0,q.min(),q.min(),q.min(),pt.empty(),0)}static newFoundDocument(e,t,r,s){return new ke(e,1,t,q.min(),r,s,0)}static newNoDocument(e,t){return new ke(e,2,t,q.min(),q.min(),pt.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,q.min(),q.min(),pt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this.position=e,this.inclusive=t}}function Vm(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),t.key):r=wr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Om(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t="asc"){this.field=e,this.dir=t}}function S6(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{}class he extends W1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new C6(e,t,r):t==="array-contains"?new N6(e,r):t==="in"?new Z1(e,r):t==="not-in"?new V6(e,r):t==="array-contains-any"?new O6(e,r):new he(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new k6(e,r):new D6(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(wr(t,this.value)):t!==null&&ps(this.value)===ps(t)&&this.matchesComparison(wr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ie extends W1{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Ie(e,t)}matches(e){return ci(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ci(n){return n.op==="and"}function Ah(n){return n.op==="or"}function sf(n){return H1(n)&&ci(n)}function H1(n){for(const e of n.filters)if(e instanceof Ie)return!1;return!0}function Rh(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+ai(n.value);if(sf(n))return n.filters.map(e=>Rh(e)).join(",");{const e=n.filters.map(t=>Rh(t)).join(",");return`${n.op}(${e})`}}function Q1(n,e){return n instanceof he?function(r,s){return s instanceof he&&r.op===s.op&&r.field.isEqual(s.field)&&Rn(r.value,s.value)}(n,e):n instanceof Ie?function(r,s){return s instanceof Ie&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Q1(o,s.filters[a]),!0):!1}(n,e):void U()}function Y1(n,e){const t=n.filters.concat(e);return Ie.create(t,n.op)}function J1(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${ai(t.value)}`}(n):n instanceof Ie?function(t){return t.op.toString()+" {"+t.getFilters().map(J1).join(" ,")+"}"}(n):"Filter"}class C6 extends he{constructor(e,t,r){super(e,t,r),this.key=N.fromName(r.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.matchesComparison(t)}}class k6 extends he{constructor(e,t){super(e,"in",t),this.keys=X1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class D6 extends he{constructor(e,t){super(e,"not-in",t),this.keys=X1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function X1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>N.fromName(r.referenceValue))}class N6 extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wo(t)&&Ko(t.arrayValue,this.value)}}class Z1 extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ko(this.value.arrayValue,t)}}class V6 extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ko(this.value.arrayValue,t)}}class O6 extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ko(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function xh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new M6(n,e,t,r,s,i,o)}function gs(n){const e=O(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Rh(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Aa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ai(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ai(r)).join(",")),e.he=t}return e.he}function Ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!S6(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Q1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Om(n.startAt,e.startAt)&&Om(n.endAt,e.endAt)}function $c(n){return N.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Bc(n,e){return n.filters.filter(t=>t instanceof he&&t.field.isEqual(e))}function Mm(n,e,t){let r=fc,s=!0;for(const i of Bc(n,e)){let o=fc,a=!0;switch(i.op){case"<":case"<=":o=x6(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=fc}Dm({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Dm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Lm(n,e,t){let r=or,s=!0;for(const i of Bc(n,e)){let o=or,a=!0;switch(i.op){case">=":case">":o=P6(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=or}Nm({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Nm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function ey(n,e,t,r,s,i,o,a){return new Gn(n,e,t,r,s,i,o,a)}function Ci(n){return new Gn(n)}function Fm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function of(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Ml(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function af(n){return n.collectionGroup!==null}function as(n){const e=O(n);if(e.Pe===null){e.Pe=[];const t=Ml(e),r=of(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new Xs(t)),e.Pe.push(new Xs(Ke.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Xs(Ke.keyField(),i))}}}return e.Pe}function Lt(n){const e=O(n);if(!e.Ie)if(e.limitType==="F")e.Ie=xh(e.path,e.collectionGroup,as(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of as(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Xs(i.field,o))}const r=e.endAt?new Ir(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ir(e.startAt.position,e.startAt.inclusive):null;e.Ie=xh(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.Ie}function Ph(n,e){e.getFirstInequalityField(),Ml(n);const t=n.filters.concat([e]);return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jc(n,e,t){return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xa(n,e){return Ra(Lt(n),Lt(e))&&n.limitType===e.limitType}function ty(n){return`${gs(Lt(n))}|lt:${n.limitType}`}function Sh(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>J1(s)).join(", ")}]`),Aa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ai(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ai(s)).join(",")),`Target(${r})`}(Lt(n))}; limitType=${n.limitType})`}function Pa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):N.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of as(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Vm(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,as(r),s)||r.endAt&&!function(o,a,c){const l=Vm(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,as(r),s))}(n,e)}function ny(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ry(n){return(e,t)=>{let r=!1;for(const s of as(n)){const i=L6(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function L6(n,e,t){const r=n.field.isKeyField()?N.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?wr(c,l):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return q1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F6=new Pe(N.comparator);function Mt(){return F6}const sy=new Pe(N.comparator);function oo(...n){let e=sy;for(const t of n)e=e.insert(t.key,t);return e}function iy(n){let e=sy;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function In(){return yo()}function oy(){return yo()}function yo(){return new Vr(n=>n.toString(),(n,e)=>n.isEqual(e))}const U6=new Pe(N.comparator),$6=new Ne(N.comparator);function ne(...n){let e=$6;for(const t of n)e=e.add(t);return e}const B6=new Ne(ee);function cf(){return B6}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zo(e)?"-0":e}}function cy(n){return{integerValue:""+n}}function ly(n,e){return F1(e)?cy(e):ay(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this._=void 0}}function j6(n,e,t){return n instanceof li?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ol(i)&&(i=rf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof _s?hy(n,e):n instanceof ys?dy(n,e):function(s,i){const o=uy(s,i),a=Um(o)+Um(s.Te);return bh(o)&&bh(s.Te)?cy(a):ay(s.serializer,a)}(n,e)}function q6(n,e,t){return n instanceof _s?hy(n,e):n instanceof ys?dy(n,e):t}function uy(n,e){return n instanceof ui?function(r){return bh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class li extends Ll{}class _s extends Ll{constructor(e){super(),this.elements=e}}function hy(n,e){const t=fy(e);for(const r of n.elements)t.some(s=>Rn(s,r))||t.push(r);return{arrayValue:{values:t}}}class ys extends Ll{constructor(e){super(),this.elements=e}}function dy(n,e){let t=fy(e);for(const r of n.elements)t=t.filter(s=>!Rn(s,r));return{arrayValue:{values:t}}}class ui extends Ll{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Um(n){return je(n.integerValue||n.doubleValue)}function fy(n){return Wo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,t){this.field=e,this.transform=t}}function z6(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof _s&&s instanceof _s||r instanceof ys&&s instanceof ys?oi(r.elements,s.elements,Rn):r instanceof ui&&s instanceof ui?Rn(r.Te,s.Te):r instanceof li&&s instanceof li}(n.transform,e.transform)}class G6{constructor(e,t){this.version=e,this.transformResults=t}}class Me{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fl{}function py(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Di(n.key,Me.none()):new ki(n.key,n.data,Me.none());{const t=n.data,r=pt.empty();let s=new Ne(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Kn(n.key,r,new Ot(s.toArray()),Me.none())}}function K6(n,e,t){n instanceof ki?function(s,i,o){const a=s.value.clone(),c=Bm(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Kn?function(s,i,o){if(!mc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Bm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(my(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function vo(n,e,t,r){return n instanceof ki?function(i,o,a,c){if(!mc(i.precondition,o))return a;const l=i.value.clone(),u=jm(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof Kn?function(i,o,a,c){if(!mc(i.precondition,o))return a;const l=jm(i.fieldTransforms,c,o),u=o.data;return u.setAll(my(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(i,o,a){return mc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function W6(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=uy(r.transform,s||null);i!=null&&(t===null&&(t=pt.empty()),t.set(r.field,i))}return t||null}function $m(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&oi(r,s,(i,o)=>z6(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ki extends Fl{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kn extends Fl{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function my(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Bm(n,e,t){const r=new Map;G(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,q6(o,a,t[s]))}return r}function jm(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,j6(i,o,e))}return r}class Di extends Fl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lf extends Fl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&K6(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=oy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=py(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&oi(this.mutations,e.mutations,(t,r)=>$m(t,r))&&oi(this.baseMutations,e.baseMutations,(t,r)=>$m(t,r))}}class hf{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length);let s=function(){return U6}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hf(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,de;function gy(n){switch(n){default:return U();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function _y(n){if(n===void 0)return Ge("GRPC error has no .code"),y.UNKNOWN;switch(n){case Je.OK:return y.OK;case Je.CANCELLED:return y.CANCELLED;case Je.UNKNOWN:return y.UNKNOWN;case Je.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case Je.INTERNAL:return y.INTERNAL;case Je.UNAVAILABLE:return y.UNAVAILABLE;case Je.UNAUTHENTICATED:return y.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case Je.NOT_FOUND:return y.NOT_FOUND;case Je.ALREADY_EXISTS:return y.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return y.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case Je.ABORTED:return y.ABORTED;case Je.OUT_OF_RANGE:return y.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return y.UNIMPLEMENTED;case Je.DATA_LOSS:return y.DATA_LOSS;default:return U()}}(de=Je||(Je={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ha}static getOrCreateInstance(){return Ha===null&&(Ha=new ff),Ha}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ha=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q6=new Js([4294967295,4294967295],0);function qm(n){const e=yy().encode(n),t=new qA;return t.update(e),new Uint8Array(t.digest())}function zm(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Js([t,r],0),new Js([s,i],0)]}class pf{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ao(`Invalid padding: ${t}`);if(r<0)throw new ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ao(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Js.fromNumber(this.de)}Re(e,t,r){let s=e.add(t.multiply(Js.fromNumber(r)));return s.compare(Q6)===1&&(s=new Js([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=qm(e),[r,s]=zm(t);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new pf(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=qm(e),[r,s]=zm(t);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ka.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ca(q.min(),s,new Pe(ee),Mt(),ne())}}class ka{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ka(r,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,r,s){this.fe=e,this.removedTargetIds=t,this.key=r,this.ge=s}}class vy{constructor(e,t){this.targetId=e,this.pe=t}}class wy{constructor(e,t,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Gm{constructor(){this.ye=0,this.we=Wm(),this.Se=et.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ne(),t=ne(),r=ne();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}}),new ka(this.Se,this.be,e,t,r)}xe(){this.De=!1,this.we=Wm()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Y6{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Mt(),this.$e=Km(),this.Ue=new Pe(ee)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Fe(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){var t,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if($c(a))if(i===0){const c=new N(a.path);this.ze(s,c,ke.newNoDocument(c,q.min()))}else G(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(e,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(t=ff.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,d,m,E){var w,b,$,K,B,F;const J={localCacheCount:m,existenceFilterCount:E.count},re=E.unchangedNames;return re&&(J.bloomFilter={applied:h===0,hashCount:(w=re==null?void 0:re.hashCount)!==null&&w!==void 0?w:0,bitmapLength:(K=($=(b=re==null?void 0:re.bits)===null||b===void 0?void 0:b.bitmap)===null||$===void 0?void 0:$.length)!==null&&K!==void 0?K:0,padding:(F=(B=re==null?void 0:re.bits)===null||B===void 0?void 0:B.padding)!==null&&F!==void 0?F:0},d&&(J.bloomFilter.mightContain=d)),J}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,t){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=yr(i).toUint8Array()}catch(h){if(h instanceof z1)return sn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new pf(c,o,a)}catch(h){return sn(h instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return l.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{t(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const t=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&$c(a.target)){const c=new N(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,ke.newNoDocument(c,e))}i.Ce&&(t.set(o,i.Me()),i.xe())}});let r=ne();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new Ca(e,t,this.Ue,this.Ke,r);return this.Ke=Mt(),this.$e=Km(),this.Ue=new Pe(ee),s}Ge(e,t){if(!this.Je(e))return;const r=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,r),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,t)?s.Oe(t,1):s.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),r&&(this.Ke=this.Ke.insert(t,r))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new Gm,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ne(ee),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Gm),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function Km(){return new Pe(N.comparator)}function Wm(){return new Pe(N.comparator)}const J6=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),X6=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Z6=(()=>({and:"AND",or:"OR"}))();class e3{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ch(n,e){return n.useProto3Json||Aa(e)?e:{value:e}}function hi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Iy(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function t3(n,e){return hi(n,e.toTimestamp())}function He(n){return G(!!n),q.fromTimestamp(function(t){const r=_r(t);return new Le(r.seconds,r.nanos)}(n))}function mf(n,e){return function(r){return new ge(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Ey(n){const e=ge.fromString(n);return G(ky(e)),e}function Ho(n,e){return mf(n.databaseId,e.path)}function Tn(n,e){const t=Ey(e);if(t.get(1)!==n.databaseId.projectId)throw new T(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new T(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new N(by(t))}function kh(n,e){return mf(n.databaseId,e)}function Ty(n){const e=Ey(n);return e.length===4?ge.emptyPath():by(e)}function Qo(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function by(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hm(n,e,t){return{name:Ho(n,e),fields:t.value.mapValue.fields}}function Ay(n,e,t){const r=Tn(n,e.name),s=He(e.updateTime),i=e.createTime?He(e.createTime):q.min(),o=new pt({mapValue:{fields:e.fields}}),a=ke.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function n3(n,e){return"found"in e?function(r,s){G(!!s.found),s.found.name,s.found.updateTime;const i=Tn(r,s.found.name),o=He(s.found.updateTime),a=s.found.createTime?He(s.found.createTime):q.min(),c=new pt({mapValue:{fields:s.found.fields}});return ke.newFoundDocument(i,o,a,c)}(n,e):"missing"in e?function(r,s){G(!!s.missing),G(!!s.readTime);const i=Tn(r,s.missing),o=He(s.readTime);return ke.newNoDocument(i,o)}(n,e):U()}function r3(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(G(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(G(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?y.UNKNOWN:_y(l.code);return new T(u,l.message||"")}(o);t=new wy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Tn(n,r.document.name),i=He(r.document.updateTime),o=r.document.createTime?He(r.document.createTime):q.min(),a=new pt({mapValue:{fields:r.document.fields}}),c=ke.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];t=new gc(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Tn(n,r.document),i=r.readTime?He(r.readTime):q.min(),o=ke.newNoDocument(s,i),a=r.removedTargetIds||[];t=new gc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Tn(n,r.document),i=r.removedTargetIds||[];t=new gc([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new H6(s,i),a=r.targetId;t=new vy(a,o)}}return t}function Yo(n,e){let t;if(e instanceof ki)t={update:Hm(n,e.key,e.value)};else if(e instanceof Di)t={delete:Ho(n,e.key)};else if(e instanceof Kn)t={update:Hm(n,e.key,e.data),updateMask:l3(e.fieldMask)};else{if(!(e instanceof lf))return U();t={verify:Ho(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _s)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ys)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ui)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:t3(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(n,e.precondition)),t}function Dh(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Me.updateTime(He(i.updateTime)):i.exists!==void 0?Me.exists(i.exists):Me.none()}(e.currentDocument):Me.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let c=null;if("setToServerValue"in a)G(a.setToServerValue==="REQUEST_TIME"),c=new li;else if("appendMissingElements"in a){const u=a.appendMissingElements.values||[];c=new _s(u)}else if("removeAllFromArray"in a){const u=a.removeAllFromArray.values||[];c=new ys(u)}else"increment"in a?c=new ui(o,a.increment):U();const l=Ke.fromServerFormat(a.fieldPath);return new Sa(l,c)}(n,s)):[];if(e.update){e.update.name;const s=Tn(n,e.update.name),i=new pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const l=c.fieldPaths||[];return new Ot(l.map(u=>Ke.fromServerFormat(u)))}(e.updateMask);return new Kn(s,i,o,t,r)}return new ki(s,i,t,r)}if(e.delete){const s=Tn(n,e.delete);return new Di(s,t)}if(e.verify){const s=Tn(n,e.verify);return new lf(s,t)}return U()}function s3(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?He(s.updateTime):He(i);return o.isEqual(q.min())&&(o=He(i)),new G6(o,s.transformResults||[])}(t,e))):[]}function Ry(n,e){return{documents:[kh(n,e.path)]}}function xy(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=kh(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=kh(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Cy(Ie.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Bs(h.field),direction:o3(h.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=Ch(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Py(n){let e=Ty(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];t.where&&(i=function(h){const d=Sy(h);return d instanceof Ie&&sf(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(E){return new Xs(js(E.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Aa(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new Ir(m,d)}(t.startAt));let l=null;return t.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new Ir(m,d)}(t.endAt)),ey(e,s,o,i,a,"F",c,l)}function i3(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sy(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=js(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=js(t.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=js(t.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=js(t.unaryFilter.field);return he.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return he.create(js(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ie.create(t.compositeFilter.filters.map(r=>Sy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function o3(n){return J6[n]}function a3(n){return X6[n]}function c3(n){return Z6[n]}function Bs(n){return{fieldPath:n.canonicalString()}}function js(n){return Ke.fromServerFormat(n.fieldPath)}function Cy(n){return n instanceof he?function(t){if(t.op==="=="){if(km(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NAN"}};if(Cm(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(km(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NOT_NAN"}};if(Cm(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(t.field),op:a3(t.op),value:t.value}}}(n):n instanceof Ie?function(t){const r=t.getFilters().map(s=>Cy(s));return r.length===1?r[0]:{compositeFilter:{op:c3(t.op),filters:r}}}(n):U()}function l3(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ky(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,r,s,i=q.min(),o=q.min(),a=et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.ct=e}}function u3(n,e){let t;if(e.document)t=Ay(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),s=ws(e.noDocument.readTime);t=ke.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const r=N.fromSegments(e.unknownDocument.path),s=ws(e.unknownDocument.version);t=ke.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Le(s[0],s[1]);return q.fromTimestamp(i)}(e.readTime)),t}function Qm(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:qc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Ho(i,o.key),fields:o.data.value.mapValue.fields,updateTime:hi(i,o.version.toTimestamp()),createTime:hi(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:vs(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:t.path.toArray(),version:vs(e.version)}}return r}function qc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function vs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ws(n){const e=new Le(n.seconds,n.nanoseconds);return q.fromTimestamp(e)}function zr(n,e){const t=(e.baseMutations||[]).map(i=>Dh(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Dh(n.ct,i)),s=Le.fromMillis(e.localWriteTimeMs);return new uf(e.batchId,s,t,r)}function co(n){const e=ws(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ws(n.lastLimboFreeSnapshotVersion):q.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return G(i.documents.length===1),Lt(Ci(Ty(i.documents[0])))}(n.query):function(i){return Lt(Py(i))}(n.query),new Vn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,et.fromBase64String(n.resumeToken))}function Ny(n,e){const t=vs(e.snapshotVersion),r=vs(e.lastLimboFreeSnapshotVersion);let s;s=$c(e.target)?Ry(n.ct,e.target):xy(n.ct,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:gs(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function gf(n){const e=Py({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jc(e,e.limit,"L"):e}function Bu(n,e){return new df(e.largestBatchId,Dh(n.ct,e.overlayMutation))}function Ym(n,e){const t=e.path.lastSegment();return[n,St(e.path.popLast()),t]}function Jm(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:vs(r.readTime),documentKey:St(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{getBundleMetadata(e,t){return Xm(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:ws(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Xm(e).put(function(s){return{bundleId:s.id,createTime:vs(He(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Zm(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:gf(i.bundledQuery),readTime:ws(i.readTime)}}(r)})}saveNamedQuery(e,t){return Zm(e).put(function(s){return{name:s.name,readTime:vs(He(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Xm(n){return ut(n,"bundles")}function Zm(n){return ut(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Ul(e,r)}getOverlay(e,t){return Wi(e).get(Ym(this.userId,t)).next(r=>r?Bu(this.serializer,r):null)}getOverlays(e,t){const r=In();return _.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new df(t,o);s.push(this.ht(e,a))}),_.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(St(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Wi(e).J("collectionPathOverlayIndex",a))}),_.waitFor(i)}getOverlaysForCollection(e,t,r){const s=In(),i=St(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Wi(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Bu(this.serializer,c);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=In();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Wi(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Bu(this.serializer,l);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>i)}ht(e,t){return Wi(e).put(function(s,i,o){const[a,c,l]=Ym(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Yo(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Wi(n){return ut(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(je(e.integerValue));else if("doubleValue"in e){const r=je(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),zo(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(t,20),typeof r=="string"?t.At(r):(t.At(`${r.seconds||""}`),t.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(yr(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?G1(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):U()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const r=e.fields||{};this.Et(t,55);for(const s of Object.keys(r))this.Rt(s,t),this.It(r[s],t)}wt(e,t){const r=e.values||[];this.Et(t,50);for(const s of r)this.It(s,t)}gt(e,t){this.Et(t,37),N.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Gr.bt=new Gr;function d3(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function eg(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=d3(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class f3{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.vt(r.value),r=t.next();this.Ct()}Ft(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Mt(r.value),r=t.next();this.xt()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const s=t.codePointAt(0);this.vt(240|s>>>18),this.vt(128|63&s>>>12),this.vt(128|63&s>>>6),this.vt(128|63&s)}}this.Ct()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const s=t.codePointAt(0);this.Mt(240|s>>>18),this.Mt(128|63&s>>>12),this.Mt(128|63&s>>>6),this.Mt(128|63&s)}}this.xt()}Bt(e){const t=this.Lt(e),r=eg(t);this.kt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}qt(e){const t=this.Lt(e),r=eg(t);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}vt(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class p3{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class m3{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Hi{constructor(){this.Gt=new f3,this.zt=new p3(this.Gt),this.jt=new m3(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Kr(this.indexId,this.documentKey,this.arrayValue,r)}}function Jn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=tg(n.arrayValue,e.arrayValue),t!==0?t:(t=tg(n.directionalValue,e.directionalValue),t!==0?t:N.comparator(n.documentKey,e.documentKey)))}function tg(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g3{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){G(e.collectionGroup===this.collectionId);const t=Ih(e);if(t!==void 0&&!this.tn(t))return!1;const r=jr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.tn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt!==void 0){if(!s.has(this.Xt.field.canonicalString())){const a=r[i];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n){var e,t;if(G(n instanceof he||n instanceof Ie),n instanceof he){if(n instanceof Z1){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>he.create(n.field,"==",i)))||[];return Ie.create(s,"or")}return n}const r=n.filters.map(s=>Vy(s));return Ie.create(r,n.op)}function _3(n){if(n.getFilters().length===0)return[];const e=Oh(Vy(n));return G(Oy(e)),Nh(e)||Vh(e)?[e]:e.getFilters()}function Nh(n){return n instanceof he}function Vh(n){return n instanceof Ie&&sf(n)}function Oy(n){return Nh(n)||Vh(n)||function(t){if(t instanceof Ie&&Ah(t)){for(const r of t.getFilters())if(!Nh(r)&&!Vh(r))return!1;return!0}return!1}(n)}function Oh(n){if(G(n instanceof he||n instanceof Ie),n instanceof he)return n;if(n.filters.length===1)return Oh(n.filters[0]);const e=n.filters.map(r=>Oh(r));let t=Ie.create(e,n.op);return t=zc(t),Oy(t)?t:(G(t instanceof Ie),G(ci(t)),G(t.filters.length>1),t.filters.reduce((r,s)=>_f(r,s)))}function _f(n,e){let t;return G(n instanceof he||n instanceof Ie),G(e instanceof he||e instanceof Ie),t=n instanceof he?e instanceof he?function(s,i){return Ie.create([s,i],"and")}(n,e):ng(n,e):e instanceof he?ng(e,n):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),ci(s)&&ci(i))return Y1(s,i.getFilters());const o=Ah(s)?s:i,a=Ah(s)?i:s,c=o.filters.map(l=>_f(l,a));return Ie.create(c,"or")}(n,e),zc(t)}function ng(n,e){if(ci(e))return Y1(e,n.getFilters());{const t=e.filters.map(r=>_f(n,r));return Ie.create(t,"or")}}function zc(n){if(G(n instanceof he||n instanceof Ie),n instanceof he)return n;const e=n.getFilters();if(e.length===1)return zc(e[0]);if(H1(n))return n;const t=e.map(s=>zc(s)),r=[];return t.forEach(s=>{s instanceof he?r.push(s):s instanceof Ie&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ie.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y3{constructor(){this.sn=new yf}addToCollectionParentIndex(e,t){return this.sn.add(t),_.resolve()}getCollectionParents(e,t){return _.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return _.resolve()}deleteFieldIndex(e,t){return _.resolve()}getDocumentsMatchingTarget(e,t){return _.resolve(null)}getIndexType(e,t){return _.resolve(0)}getFieldIndexes(e,t){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,t){return _.resolve(Gt.min())}getMinOffsetFromCollectionGroup(e,t){return _.resolve(Gt.min())}updateCollectionGroup(e,t,r){return _.resolve()}updateIndexEntries(e,t){return _.resolve()}}class yf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ne(ge.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ne(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Uint8Array(0);class v3{constructor(e,t){this.user=e,this.databaseId=t,this.on=new yf,this._n=new Vr(r=>gs(r),(r,s)=>Ra(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const i={collectionId:r,parent:St(s)};return rg(e).put(i)}return _.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[D1(t),""],!1,!0);return rg(e).G(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(wn(o.parent))}return r})}addFieldIndex(e,t){const r=Ya(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Yi(e);return i.next(a=>{o.put(Jm(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Ya(e),s=Yi(e),i=Qi(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Qi(e);let s=!0;const i=new Map;return _.forEach(this.an(t),o=>this.un(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=ne();const a=[];return _.forEach(i,(c,l)=>{x("IndexedDbIndexManager",`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(F=>`${F.fieldPath}:${F.kind}`).join(",")}`}(c)} to execute ${gs(t)}`);const u=function(B,F){const J=Ih(F);if(J===void 0)return null;for(const re of Bc(B,J.fieldPath))switch(re.op){case"array-contains-any":return re.value.arrayValue.values||[];case"array-contains":return[re.value]}return null}(l,c),h=function(B,F){const J=new Map;for(const re of jr(F))for(const Te of Bc(B,re.fieldPath))switch(Te.op){case"==":case"in":J.set(re.fieldPath.canonicalString(),Te.value);break;case"not-in":case"!=":return J.set(re.fieldPath.canonicalString(),Te.value),Array.from(J.values())}return null}(l,c),d=function(B,F){const J=[];let re=!0;for(const Te of jr(F)){const ce=Te.kind===0?Mm(B,Te.fieldPath,B.startAt):Lm(B,Te.fieldPath,B.startAt);J.push(ce.value),re&&(re=ce.inclusive)}return new Ir(J,re)}(l,c),m=function(B,F){const J=[];let re=!0;for(const Te of jr(F)){const ce=Te.kind===0?Lm(B,Te.fieldPath,B.endAt):Mm(B,Te.fieldPath,B.endAt);J.push(ce.value),re&&(re=ce.inclusive)}return new Ir(J,re)}(l,c),E=this.cn(c,l,d),w=this.cn(c,l,m),b=this.ln(c,l,h),$=this.hn(c.indexId,u,E,d.inclusive,w,m.inclusive,b);return _.forEach($,K=>r.H(K,t.limit).next(B=>{B.forEach(F=>{const J=N.fromSegments(F.documentKey);o.has(J)||(o=o.add(J),a.push(J))})}))}).next(()=>a)}return _.resolve(null)})}an(e){let t=this._n.get(e);return t||(e.filters.length===0?t=[e]:t=_3(Ie.create(e.filters,"and")).map(r=>xh(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,t),t)}hn(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.Pn(t[h/l]):Qa,m=this.In(e,d,r[h%l],s),E=this.Tn(e,d,i[h%l],o),w=a.map(b=>this.In(e,d,b,!0));u.push(...this.createRange(m,E,w))}return u}In(e,t,r,s){const i=new Kr(e,N.empty(),t,r);return s?i:i.Jt()}Tn(e,t,r,s){const i=new Kr(e,N.empty(),t,r);return s?i.Jt():i}un(e,t){const r=new g3(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.an(t);return _.forEach(s,i=>this.un(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let l=new Ne(Ke.comparator),u=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?u=!0:l=l.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(l=l.add(h.field));return l.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}En(e,t){const r=new Hi;for(const s of jr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Ht(s.kind);Gr.bt.Pt(i,o)}return r.Wt()}Pn(e){const t=new Hi;return Gr.bt.Pt(e,t.Ht(0)),t.Wt()}dn(e,t){const r=new Hi;return Gr.bt.Pt(ms(this.databaseId,t),r.Ht(function(i){const o=jr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,t,r){if(r===null)return[];let s=[];s.push(new Hi);let i=0;for(const o of jr(e)){const a=r[i++];for(const c of s)if(this.An(t,o.fieldPath)&&Wo(a))s=this.Rn(s,o,a);else{const l=c.Ht(o.kind);Gr.bt.Pt(a,l)}}return this.Vn(s)}cn(e,t,r){return this.ln(e,t,r.position)}Vn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Wt();return t}Rn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new Hi;c.seed(a.Wt()),Gr.bt.Pt(o,c.Ht(t.kind)),i.push(c)}return i}An(e,t){return!!e.filters.find(r=>r instanceof he&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ya(e),s=Yi(e);return(t?r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.G()).next(i=>{const o=[];return _.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,h){const d=h?new Uc(h.sequenceNumber,new Gt(ws(h.readTime),new N(wn(h.documentKey)),h.largestBatchId)):Uc.empty(),m=u.fields.map(([E,w])=>new t6(Ke.fromServerFormat(E),w));return new N1(u.indexId,u.collectionGroup,m,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ee(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Ya(e),i=Yi(e);return this.mn(e).next(o=>s.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>_.forEach(a,c=>i.put(Jm(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return _.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),_.forEach(a,c=>this.fn(e,s,c).next(l=>{const u=this.gn(i,c);return l.isEqual(u)?_.resolve():this.pn(e,i,c,l,u)}))))})}yn(e,t,r,s){return Qi(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.dn(r,t.key),documentKey:t.key.path.toArray()})}wn(e,t,r,s){return Qi(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.dn(r,t.key),t.key.path.toArray()])}fn(e,t,r){const s=Qi(e);let i=new Ne(Jn);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,t)])},(o,a)=>{i=i.add(new Kr(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}gn(e,t){let r=new Ne(Jn);const s=this.En(t,e);if(s==null)return r;const i=Ih(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Wo(o))for(const a of o.arrayValue.values||[])r=r.add(new Kr(t.indexId,e.key,this.Pn(a),s))}else r=r.add(new Kr(t.indexId,e.key,Qa,s));return r}pn(e,t,r,s,i){x("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,l,u,h,d){const m=c.getIterator(),E=l.getIterator();let w=Ls(m),b=Ls(E);for(;w||b;){let $=!1,K=!1;if(w&&b){const B=u(w,b);B<0?K=!0:B>0&&($=!0)}else w!=null?K=!0:$=!0;$?(h(b),b=Ls(E)):K?(d(w),w=Ls(m)):(w=Ls(m),b=Ls(E))}}(s,i,Jn,a=>{o.push(this.yn(e,t,r,a))},a=>{o.push(this.wn(e,t,r,a))}),_.waitFor(o)}mn(e){let t=1;return Yi(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Jn(o,a)).filter((o,a,c)=>!a||Jn(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Jn(o,e),c=Jn(o,t);if(a===0)s[0]=e.Jt();else if(a>0&&c<0)s.push(o),s.push(o.Jt());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Sn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Qa,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Qa,[]];i.push(IDBKeyRange.bound(a,c))}return i}Sn(e,t){return Jn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(sg)}getMinOffset(e,t){return _.mapArray(this.an(t),r=>this.un(e,r).next(s=>s||U())).next(sg)}}function rg(n){return ut(n,"collectionParents")}function Qi(n){return ut(n,"indexEntries")}function Ya(n){return ut(n,"indexConfiguration")}function Yi(n){return ut(n,"indexState")}function sg(n){G(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;tf(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Gt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Nt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(u,h,d)=>(a++,d.delete()));i.push(c.next(()=>{G(a===1)}));const l=[];for(const u of t.mutations){const h=U1(e,u.key.path,t.batchId);i.push(s.delete(h)),l.push(u.key)}return _.waitFor(i).next(()=>l)}function Gc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw U();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(41943040,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);class $l{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.bn={}}static lt(e,t,r,s){G(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new $l(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Xn(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=qs(e),o=Xn(e);return o.add({}).next(a=>{G(typeof a=="number");const c=new uf(a,t,r,s),l=function(m,E,w){const b=w.baseMutations.map(K=>Yo(m.ct,K)),$=w.mutations.map(K=>Yo(m.ct,K));return{userId:E,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:b,mutations:$}}(this.serializer,this.userId,c),u=[];let h=new Ne((d,m)=>ee(d.canonicalString(),m.canonicalString()));for(const d of s){const m=U1(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(i.put(m,a6))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),_.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return Xn(e).get(t).next(r=>r?(G(r.userId===this.userId),zr(this.serializer,r)):null)}Dn(e,t){return this.bn[t]?_.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.bn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Xn(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(G(a.batchId>=r),i=zr(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Xn(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Xn(e).G("userMutationsIndex",t).next(r=>r.map(s=>zr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=dc(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return qs(e).Z({range:s},(o,a,c)=>{const[l,u,h]=o,d=wn(u);if(l===this.userId&&t.path.isEqual(d))return Xn(e).get(h).next(m=>{if(!m)throw U();G(m.userId===this.userId),i.push(zr(this.serializer,m))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ne(ee);const s=[];return t.forEach(i=>{const o=dc(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=qs(e).Z({range:a},(l,u,h)=>{const[d,m,E]=l,w=wn(m);d===this.userId&&i.path.isEqual(w)?r=r.add(E):h.done()});s.push(c)}),_.waitFor(s).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=dc(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Ne(ee);return qs(e).Z({range:o},(c,l,u)=>{const[h,d,m]=c,E=wn(d);h===this.userId&&r.isPrefixOf(E)?E.length===s&&(a=a.add(m)):u.done()}).next(()=>this.vn(e,a))}vn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Xn(e).get(i).next(o=>{if(o===null)throw U();G(o.userId===this.userId),r.push(zr(this.serializer,o))}))}),_.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return My(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),_.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return _.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return qs(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=wn(i[1]);s.push(c)}else a.done()}).next(()=>{G(s.length===0)})})}containsKey(e,t){return Ly(e,this.userId,t)}Fn(e){return Fy(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ly(n,e,t){const r=dc(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return qs(n).Z({range:i,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===s&&(o=!0),l.done()}).next(()=>o)}function Xn(n){return ut(n,"mutations")}function qs(n){return ut(n,"documentMutations")}function Fy(n){return ut(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Is(0)}static On(){return new Is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Nn(e).next(t=>{const r=new Is(t.highestTargetId);return t.highestTargetId=r.next(),this.Bn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(t=>q.fromTimestamp(new Le(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Nn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Bn(e,s)))}addTargetData(e,t){return this.Ln(e,t).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(t,r),this.Bn(e,r))))}updateTargetData(e,t){return this.Ln(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Fs(e).delete(t.targetId)).next(()=>this.Nn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Fs(e).Z((o,a)=>{const c=co(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>_.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Fs(e).Z((r,s)=>{const i=co(s);t(i)})}Nn(e){return og(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Bn(e,t){return og(e).put("targetGlobalKey",t)}Ln(e,t){return Fs(e).put(Ny(this.serializer,t))}kn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=gs(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Fs(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const l=co(a);Ra(t,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=rr(e);return t.forEach(o=>{const a=St(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),_.waitFor(s)}removeMatchingKeys(e,t,r){const s=rr(e);return _.forEach(t,i=>{const o=St(i.path);return _.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=rr(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=rr(e);let i=ne();return s.Z({range:r,Y:!0},(o,a,c)=>{const l=wn(o[1]),u=new N(l);i=i.add(u)}).next(()=>i)}containsKey(e,t){const r=St(t.path),s=IDBKeyRange.bound([r],[D1(r)],!1,!0);let i=0;return rr(e).Z({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}ut(e,t){return Fs(e).get(t).next(r=>r?co(r):null)}}function Fs(n){return ut(n,"targets")}function og(n){return ut(n,"targetGlobal")}function rr(n){return ut(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag([n,e],[t,r]){const s=ee(n,t);return s===0?ee(e,r):s}class I3{constructor(e){this.qn=e,this.buffer=new Ne(ag),this.Qn=0}Kn(){return++this.Qn}$n(e){const t=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ag(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class E3{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nr(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Dr(t)}await this.Wn(3e5)})}}class T3{constructor(e,t){this.Gn=e,this.params=t}calculateTargetCount(e,t){return this.Gn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return _.resolve(Vt.ae);const r=new I3(t);return this.Gn.forEachTarget(e,s=>r.$n(s.sequenceNumber)).next(()=>this.Gn.jn(e,s=>r.$n(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Gn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Gn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(ig)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ig):this.Hn(e,t))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,t){let r,s,i,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),wh()<=fe.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function b3(n,e){return new T3(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e,t){this.db=e,this.garbageCollector=b3(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Jn(e){let t=0;return this.jn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}jn(e,t){return this.Yn(e,(r,s)=>t(s))}addReference(e,t,r){return Ja(e,r)}removeReference(e,t,r){return Ja(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ja(e,t)}Zn(e,t){return function(s,i){let o=!1;return Fy(s).X(a=>Ly(s,a,i).next(c=>(c&&(o=!0),_.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Zn(e,o).next(l=>{if(!l)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),rr(e).delete(function(h){return[0,St(h.path)]}(o))))});s.push(c)}}).next(()=>_.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ja(e,t)}Yn(e,t){const r=rr(e);let s,i=Vt.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==Vt.ae&&t(new N(wn(s)),i),i=l,s=c):i=Vt.ae}).next(()=>{i!==Vt.ae&&t(new N(wn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ja(n,e){return rr(n).put(function(r,s){return{targetId:0,path:St(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.changes=new Vr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?_.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Fr(e).put(r)}removeEntry(e,t,r){return Fr(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],qc(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Xn(e,r)))}getEntry(e,t){let r=ke.newInvalidDocument(t);return Fr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ji(t))},(s,i)=>{r=this.er(t,i)}).next(()=>r)}tr(e,t){let r={size:0,document:ke.newInvalidDocument(t)};return Fr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ji(t))},(s,i)=>{r={document:this.er(t,i),size:Gc(i)}}).next(()=>r)}getEntries(e,t){let r=Mt();return this.nr(e,t,(s,i)=>{const o=this.er(s,i);r=r.insert(s,o)}).next(()=>r)}rr(e,t){let r=Mt(),s=new Pe(N.comparator);return this.nr(e,t,(i,o)=>{const a=this.er(i,o);r=r.insert(i,a),s=s.insert(i,Gc(o))}).next(()=>({documents:r,ir:s}))}nr(e,t,r){if(t.isEmpty())return _.resolve();let s=new Ne(ug);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Ji(s.first()),Ji(s.last())),o=s.getIterator();let a=o.getNext();return Fr(e).Z({index:"documentKeyIndex",range:i},(c,l,u)=>{const h=N.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&ug(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?u.W(Ji(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),qc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Fr(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=Mt();for(const u of c){const h=this.er(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Pa(t,h)||s.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,t,r,s){let i=Mt();const o=lg(t,r),a=lg(t,Gt.max());return Fr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.er(N.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(h.key,h),i.size===s&&u.done()}).next(()=>i)}newChangeBuffer(e){return new x3(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return cg(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}Xn(e,t){return cg(e).put("remoteDocumentGlobalKey",t)}er(e,t){if(t){const r=u3(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return ke.newInvalidDocument(e)}}function $y(n){return new R3(n)}class x3 extends Uy{constructor(e,t){super(),this.sr=e,this.trackRemovals=t,this._r=new Vr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Ne((i,o)=>ee(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this._r.get(i);if(t.push(this.sr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Qm(this.sr.serializer,o);s=s.add(i.path.popLast());const l=Gc(c);r+=l-a.size,t.push(this.sr.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=Qm(this.sr.serializer,o.convertToNoDocument(q.min()));t.push(this.sr.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.sr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.sr.updateMetadata(e,r)),_.waitFor(t)}getFromCache(e,t){return this.sr.tr(e,t).next(r=>(this._r.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.sr.rr(e,t).next(({documents:r,ir:s})=>(s.forEach((i,o)=>{this._r.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function cg(n){return ut(n,"remoteDocumentGlobal")}function Fr(n){return ut(n,"remoteDocumentsV14")}function Ji(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function lg(n,e){const t=e.documentKey.path.toArray();return[n,qc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ug(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=ee(t[i],r[i]),s)return s;return s=ee(t.length,r.length),s||(s=ee(t[t.length-2],r[r.length-2]),s||ee(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P3{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&vo(r.mutation,s,Ot.empty(),Le.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const s=In();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=oo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=In();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=Mt();const o=yo(),a=function(){return yo()}();return t.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Kn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),vo(u.mutation,l,u.mutation.getFieldMask(),Le.now())):o.set(l.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new P3(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=yo();let s=new Pe((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=r.get(c)||Ot.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ne()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=oy();u.forEach(d=>{if(!i.has(d)){const m=py(t.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return N.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):af(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):_.resolve(In());let a=-1,c=i;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ne())).next(u=>({batchId:a,changes:iy(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new N(t)).next(r=>{let s=oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const s=t.collectionGroup;let i=oo();return this.indexManager.getCollectionParents(e,s).next(o=>_.forEach(o,a=>{const c=function(u,h){return new Gn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ke.newInvalidDocument(l)))});let o=oo();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&vo(l.mutation,c,Ot.empty(),Le.now()),Pa(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return _.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(s){return{id:s.id,version:s.version,createTime:He(s.createTime)}}(t)),_.resolve()}getNamedQuery(e,t){return _.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(s){return{name:s.name,query:gf(s.bundledQuery),readTime:He(s.readTime)}}(t)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(){this.overlays=new Pe(N.comparator),this.cr=new Map}getOverlay(e,t){return _.resolve(this.overlays.get(t))}getOverlays(e,t){const r=In();return _.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),_.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),_.resolve()}getOverlaysForCollection(e,t,r){const s=In(),i=t.length+1,o=new N(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return _.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=In(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=In(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return _.resolve(a)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new df(t,r));let i=this.cr.get(t);i===void 0&&(i=ne(),this.cr.set(t,i)),this.cr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.lr=new Ne(rt.hr),this.Pr=new Ne(rt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const r=new rt(e,t);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Er(new rt(e,t))}dr(e,t){e.forEach(r=>this.removeReference(r,t))}Ar(e){const t=new N(new ge([])),r=new rt(t,e),s=new rt(t,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new N(new ge([])),r=new rt(t,e),s=new rt(t,e+1);let i=ne();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new rt(e,0),r=this.lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return N.comparator(e.key,t.key)||ee(e.mr,t.mr)}static Ir(e,t){return ee(e.mr,t.mr)||N.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new Ne(rt.hr)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uf(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new rt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,t){return _.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.wr(r),i=s<0?0:s;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new rt(t,0),s=new rt(t,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ne(ee);return t.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),_.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;N.isDocumentKey(i)||(i=i.child(""));const o=new rt(new N(i),0);let a=new Ne(ee);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),_.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return _.forEach(t.mutations,s=>{const i=new rt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,t){const r=new rt(t,0),s=this.pr.firstAfterOrEqual(r);return _.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e){this.Dr=e,this.docs=function(){return new Pe(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return _.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=Mt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ke.newInvalidDocument(s))}),_.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Mt();const o=t.path,a=new N(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||tf(O1(u),r)<=0||(s.has(u.key)||Pa(t,u))&&(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U()}vr(e,t){return _.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new N3(this)}getSize(e){return _.resolve(this.size)}}class N3 extends Uy{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),_.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(e){this.persistence=e,this.Cr=new Vr(t=>gs(t),Ra),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new vf,this.targetCount=0,this.Or=Is.xn()}forEachTarget(e,t){return this.Cr.forEach((r,s)=>t(s)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fr&&(this.Fr=t),_.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new Is(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,_.resolve()}updateTargetData(e,t){return this.Ln(t),_.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),_.waitFor(i).next(()=>s)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,t){const r=this.Cr.get(t)||null;return _.resolve(r)}addMatchingKeys(e,t,r){return this.Mr.Tr(t,r),_.resolve()}removeMatchingKeys(e,t,r){this.Mr.dr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),_.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Mr.Vr(t);return _.resolve(r)}containsKey(e,t){return _.resolve(this.Mr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){this.Nr={},this.overlays={},this.Br=new Vt(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new V3(this),this.indexManager=new y3,this.remoteDocumentCache=function(s){return new D3(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Dy(t),this.Qr=new S3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new C3,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Nr[e.toKey()];return r||(r=new k3(t,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new O3(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,t){return _.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,t)))}}class O3 extends L1{constructor(e){super(),this.currentSequenceNumber=e}}class Bl{constructor(e){this.persistence=e,this.Wr=new vf,this.Gr=null}static zr(e){return new Bl(e)}get jr(){if(this.Gr)return this.Gr;throw U()}addReference(e,t,r){return this.Wr.addReference(r,t),this.jr.delete(r.toString()),_.resolve()}removeReference(e,t,r){return this.Wr.removeReference(r,t),this.jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),_.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.jr,r=>{const s=N.fromPath(r);return this.Hr(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(r=>{r?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return _.or([()=>_.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e){this.serializer=e}B(e,t,r,s){const i=new Vl("createOrUpgrade",t);r<1&&s>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Rm,{unique:!0}),c.createObjectStore("documentMutations")}(e),hg(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),hg(e)),o=o.next(()=>function(c){const l=c.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,l){return l.store("mutations").G().next(u=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Rm,{unique:!0});const h=l.store("mutations"),d=u.map(m=>h.put(m));return _.waitFor(d)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Yr(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(i)))),r<7&&s>=7&&(o=o.next(()=>this.Xr(i))),r<8&&s>=8&&(o=o.next(()=>this.ei(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.ti(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const l=c.createObjectStore("documentOverlays",{keyPath:v6});l.createIndex("collectionPathOverlayIndex",w6,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",I6,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const l=c.createObjectStore("remoteDocumentsV14",{keyPath:c6});l.createIndex("documentKeyIndex",l6),l.createIndex("collectionGroupIndex",u6)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ri(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:m6}).createIndex("sequenceNumberIndex",g6,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:_6}).createIndex("documentKeyIndex",y6,{unique:!1})}(e))),o}Zr(e){let t=0;return e.store("remoteDocuments").Z((r,s)=>{t+=Gc(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.G().next(s=>_.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>_.forEach(a,c=>{G(c.userId===i.userId);const l=zr(this.serializer,c);return My(e,i.userId,l).next(()=>{})}))}))}Xr(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new ge(o),l=function(h){return[0,St(h)]}(c);i.push(t.get(l).next(u=>u?_.resolve():(h=>t.put({targetId:0,path:St(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>_.waitFor(i))})}ei(e,t){e.createObjectStore("collectionParents",{keyPath:p6});const r=t.store("collectionParents"),s=new yf,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:St(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new ge(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],l)=>{const u=wn(a);return i(u.popLast())}))}ti(e){const t=e.store("targets");return t.Z((r,s)=>{const i=co(s),o=Ny(this.serializer,i);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new N(ge.fromString(h.document.name).popFirst(5)):h.noDocument?N.fromSegments(h.noDocument.path):h.unknownDocument?N.fromSegments(h.unknownDocument.path):U()}(o).path.toArray(),l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>_.waitFor(s))}ri(e,t){const r=t.store("mutations"),s=$y(this.serializer),i=new jy(Bl.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:ne();zr(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),_.forEach(a,(c,l)=>{const u=new st(l),h=Ul.lt(this.serializer,u),d=i.getIndexManager(u),m=$l.lt(u,this.serializer,d,i.referenceDelegate);return new By(s,m,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Eh(t,Vt.ae),c).next()})})}}function hg(n){n.createObjectStore("targetDocuments",{keyPath:d6}).createIndex("documentTargetsIndex",f6,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",h6,{unique:!0}),n.createObjectStore("targetGlobal")}const ju="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class wf{constructor(e,t,r,s,i,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=i,this.window=o,this.document=a,this.si=l,this.oi=u,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!wf.v())throw new T(y.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new A3(this,s),this.Pi=t+"main",this.serializer=new Dy(c),this.Ii=new Xt(this.Pi,this._i,new M3(this.serializer)),this.kr=new w3(this.referenceDelegate,this.serializer),this.remoteDocumentCache=$y(this.serializer),this.Qr=new h3,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,u===!1&&Ge("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(y.FAILED_PRECONDITION,ju);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new Vt(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Xa(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.gi(e).next(()=>!1):!!t&&this.pi(e).next(()=>!0))).catch(e=>{if(Nr(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return Xi(e).get("owner").next(t=>_.resolve(this.yi(t)))}wi(e){return Xa(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ut(t,"clientMetadata");return r.G().next(s=>{const i=this.Di(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return _.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const t of e)this.Ti.removeItem(this.vi(t.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?_.resolve(!0):Xi(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.yi(t)&&this.networkEnabled)return!0;if(!this.yi(t)){if(!t.allowTabSynchronization)throw new T(y.FAILED_PRECONDITION,ju);return!1}}return!(!this.networkEnabled||!this.inForeground)||Xa(e).G().next(r=>this.Di(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&x("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Eh(e,Vt.ae);return this.gi(t).next(()=>this.wi(t))}),this.Ii.close(),this.Oi()}Di(e,t){return e.filter(r=>this.bi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>Xa(e).G().next(t=>this.Di(t,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,t){return $l.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new v3(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ul.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,t,r){x("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===15?T6:c===14?j1:c===13?B1:c===12?E6:c===11?$1:void U()}(this._i);let o;return this.Ii.runTransaction(e,s,i,a=>(o=new Eh(a,this.Br?this.Br.next():Vt.ae),t==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw Ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new T(y.FAILED_PRECONDITION,M1);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return Xi(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.yi(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new T(y.FAILED_PRECONDITION,ju)})}pi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xi(e).put("owner",t)}static v(){return Xt.v()}gi(e){const t=Xi(e);return t.get("owner").next(r=>this.yi(r)?(x("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):_.resolve())}bi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ge(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const t=/(?:Version|Mobile)\/1[456]/;gI()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var t;try{const r=((t=this.Ti)===null||t===void 0?void 0:t.getItem(this.vi(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ge("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){Ge("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Xi(n){return ut(n,"owner")}function Xa(n){return ut(n,"clientMetadata")}function If(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Li=r,this.ki=s}static qi(e,t){let r=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ef(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,r,s){return this.$i(e,t).next(i=>i||this.Ui(e,t,s,r)).next(i=>i||this.Wi(e,t))}$i(e,t){if(Fm(t))return _.resolve(null);let r=Lt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=jc(t,null,"F"),r=Lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Gi(t,a);return this.zi(t,l,o,c.readTime)?this.$i(e,jc(t,null,"F")):this.ji(e,l,t,c)}))})))}Ui(e,t,r,s){return Fm(t)||s.isEqual(q.min())?this.Wi(e,t):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(t,i);return this.zi(t,o,r,s)?this.Wi(e,t):(wh()<=fe.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sh(t)),this.ji(e,o,t,V1(s,-1)))})}Gi(e,t){let r=new Ne(ry(e));return t.forEach((s,i)=>{Pa(e,i)&&(r=r.add(i))}),r}zi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,t){return wh()<=fe.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Sh(t)),this.Ki.getDocumentsMatchingQuery(e,t,Gt.min())}ji(e,t,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(e,t,r,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new Pe(ee),this.Yi=new Vr(i=>gs(i),Ra),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new By(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function zy(n,e,t,r){return new L3(n,e,t,r)}async function Gy(n,e){const t=O(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.es(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ne();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function F3(n,e){const t=O(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=_.resolve();return d.forEach(E=>{m=m.next(()=>u.getEntry(c,E)).next(w=>{const b=l.docVersions.get(E);G(b!==null),w.version.compareTo(b)<0&&(h.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ne();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ky(n){const e=O(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function U3(n,e){const t=O(n),r=e.snapshotVersion;let s=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});s=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>t.kr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(et.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(w,b,$){return w.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(d,m,u)&&a.push(t.kr.updateTargetData(i,m))});let c=Mt(),l=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Wy(i,o,e.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(q.min())){const u=t.kr.getLastRemoteSnapshotVersion(i).next(h=>t.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(t.Ji=s,i))}function Wy(n,e,t){let r=ne(),s=ne();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Mt();return t.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function $3(n,e){const t=O(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function di(n,e){const t=O(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.kr.getTargetData(r,e).next(i=>i?(s=i,_.resolve(s)):t.kr.allocateTargetId(r).next(o=>(s=new Vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function fi(n,e,t){const r=O(n),s=r.Ji.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Nr(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Kc(n,e,t){const r=O(n);let s=q.min(),i=ne();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=O(c),d=h.Yi.get(u);return d!==void 0?_.resolve(h.Ji.get(d)):h.kr.getTargetData(l,u)}(r,o,Lt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?s:q.min(),t?i:ne())).next(a=>(Yy(r,ny(e),a),{documents:a,ss:i})))}function Hy(n,e){const t=O(n),r=O(t.kr),s=t.Ji.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ut(i,e).next(o=>o?o.target:null))}function Qy(n,e){const t=O(n),r=t.Zi.get(e)||q.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Xi.getAllFromCollectionGroup(s,e,V1(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Yy(t,e,s),s))}function Yy(n,e,t){let r=n.Zi.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Zi.set(e,r)}async function B3(n,e,t,r){const s=O(n);let i=ne(),o=Mt();for(const l of t){const u=e.os(l.metadata.name);l.document&&(i=i.add(u));const h=e._s(l);h.setReadTime(e.us(l.metadata.readTime)),o=o.insert(u,h)}const a=s.Xi.newChangeBuffer({trackRemovals:!0}),c=await di(s,function(u){return Lt(Ci(ge.fromString(`__bundle__/docs/${u}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>Wy(l,a,o).next(u=>(a.apply(l),u)).next(u=>s.kr.removeMatchingKeysForTargetId(l,c.targetId).next(()=>s.kr.addMatchingKeys(l,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,u.ns,u.rs)).next(()=>u.ns)))}async function j3(n,e,t=ne()){const r=await di(n,Lt(gf(e.bundledQuery))),s=O(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=He(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Qr.saveNamedQuery(i,e);const a=r.withResumeToken(et.EMPTY_BYTE_STRING,o);return s.Ji=s.Ji.insert(a.targetId,a),s.kr.updateTargetData(i,a).next(()=>s.kr.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.kr.addMatchingKeys(i,t,r.targetId)).next(()=>s.Qr.saveNamedQuery(i,e))})}function dg(n,e){return`firestore_clients_${n}_${e}`}function fg(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function qu(n,e){return`firestore_targets_${n}_${e}`}class Wc{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static cs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new T(s.error.code,s.error.message))),o?new Wc(e,t,s.state,i):(Ge("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wo{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static cs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new T(r.error.code,r.error.message))),i?new wo(e,r.state,s):(Ge("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=cf();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=F1(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Hc(e,i):(Ge("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Tf{constructor(e,t){this.clientId=e,this.onlineState=t}static cs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Tf(t.clientId,t.onlineState):(Ge("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Mh{constructor(){this.activeTargetIds=cf()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zu{constructor(e,t,r,s,i){this.window=e,this.ii=t,this.persistenceKey=r,this.Is=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new Pe(ee),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Rs=dg(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new Mh),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const s=this.getItem(dg(this.persistenceKey,r));if(s){const i=Hc.cs(r,s);i&&(this.ds=this.ds.insert(i.clientId,i))}}this.Ss();const t=this.storage.getItem(this.ys);if(t){const r=this.bs(t);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let t=!1;return this.ds.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,t,r){this.Cs(e,t,r),this.Fs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(qu(this.persistenceKey,e));if(r){const s=wo.cs(e,r);s&&(t=s.state)}}return this.Ms.hs(e),this.Ss(),t}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(qu(this.persistenceKey,e))}updateQueryState(e,t,r){this.xs(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Fs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x("SharedClientState","READ",e,t),t}setItem(e,t){x("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const t=e;if(t.storageArea===this.storage){if(x("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Rs)return void Ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.fs.test(t.key)){if(t.newValue==null){const r=this.Bs(t.key);return this.Ls(r,null)}{const r=this.ks(t.key,t.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(t.key)){if(t.newValue!==null){const r=this.qs(t.key,t.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(t.key)){if(t.newValue!==null){const r=this.Ks(t.key,t.newValue);if(r)return this.$s(r)}}else if(t.key===this.ys){if(t.newValue!==null){const r=this.bs(t.newValue);if(r)return this.Ds(r)}}else if(t.key===this.Vs){const r=function(i){let o=Vt.ae;if(i!=null)try{const a=JSON.parse(i);G(typeof a=="number"),o=a}catch(a){Ge("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Vt.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.ws){const r=this.Us(t.newValue);await Promise.all(r.map(s=>this.syncEngine.Ws(s)))}}}else this.As.push(t)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,t,r){const s=new Wc(this.currentUser,e,t,r),i=fg(this.persistenceKey,this.currentUser,e);this.setItem(i,s.ls())}Fs(e){const t=fg(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Os(e){const t={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(t))}xs(e,t,r){const s=qu(this.persistenceKey,e),i=new wo(e,t,r);this.setItem(s,i.ls())}Ns(e){const t=JSON.stringify(Array.from(e));this.setItem(this.ws,t)}Bs(e){const t=this.fs.exec(e);return t?t[1]:null}ks(e,t){const r=this.Bs(e);return Hc.cs(r,t)}qs(e,t){const r=this.gs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Wc.cs(new st(i),s,t)}Ks(e,t){const r=this.ps.exec(e),s=Number(r[1]);return wo.cs(s,t)}bs(e){return Tf.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,t){const r=t?this.ds.insert(e,t):this.ds.remove(e),s=this.vs(this.ds),i=this.vs(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let t=cf();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Jy{constructor(){this.Hs=new Mh,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,r){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Mh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za=null;function Gu(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class K3 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+t.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(t,r,s,i,o){const a=Gu(),c=this.mo(t,r);x("RestConnection",`Sending RPC '${t}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,i,o),this.po(t,c,l,s).then(u=>(x("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw sn("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}yo(t,r,s,i,o,a){return this.Vo(t,r,s,i,o)}fo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Si}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}mo(t,r){const s=z3[t];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,r,s){const i=Gu();return new Promise((o,a)=>{const c=new jA;c.setWithCredentials(!0),c.listenOnce(UA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $u.NO_ERROR:const u=c.getResponseJson();x(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case $u.TIMEOUT:x(wt,`RPC '${e}' ${i} timed out`),a(new T(y.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const h=c.getStatus();if(x(wt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const E=function(b){const $=b.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf($)>=0?$:y.UNKNOWN}(m.status);a(new T(E,m.message))}else a(new T(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new T(y.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{x(wt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);x(wt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",l,r,15)})}wo(e,t,r){const s=Gu(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LA(),a=FA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new BA({})),this.fo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");x(wt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const E=new G3({so:b=>{m?x(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(d||(x(wt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),x(wt,`RPC '${e}' stream ${s} sending:`,b),h.send(b))},oo:()=>h.close()}),w=(b,$,K)=>{b.listen($,B=>{try{K(B)}catch(F){setTimeout(()=>{throw F},0)}})};return w(h,Ka.EventType.OPEN,()=>{m||x(wt,`RPC '${e}' stream ${s} transport opened.`)}),w(h,Ka.EventType.CLOSE,()=>{m||(m=!0,x(wt,`RPC '${e}' stream ${s} transport closed`),E.Po())}),w(h,Ka.EventType.ERROR,b=>{m||(m=!0,sn(wt,`RPC '${e}' stream ${s} transport errored:`,b),E.Po(new T(y.UNAVAILABLE,"The operation could not be completed")))}),w(h,Ka.EventType.MESSAGE,b=>{var $;if(!m){const K=b.data[0];G(!!K);const B=K,F=B.error||(($=B[0])===null||$===void 0?void 0:$.error);if(F){x(wt,`RPC '${e}' stream ${s} received error:`,F);const J=F.status;let re=function(le){const Fe=Je[le];if(Fe!==void 0)return _y(Fe)}(J),Te=F.message;re===void 0&&(re=y.INTERNAL,Te="Unknown error status: "+J+" with message "+F.message),m=!0,E.Po(new T(re,Te)),h.close()}else x(wt,`RPC '${e}' stream ${s} received:`,K),E.Io(K)}}),w(a,$A.STAT_EVENT,b=>{b.stat===Em.PROXY?x(wt,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Em.NOPROXY&&x(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.ho()},0),E}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(){return typeof window<"u"?window:null}function _c(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n){return new e3(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=t,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,r,s,i,o,a,c){this.ii=e,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new bf(e,t)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():t&&t.code===y.RESOURCE_EXHAUSTED?(Ge(t.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===t&&this.e_(r,s)},r=>{e(()=>{const s=new T(y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(e,t){const r=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.ko===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W3 extends Zy{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=r3(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?He(o.readTime):q.min()}(e);return this.listener.r_(t,r)}i_(e){const t={};t.database=Qo(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=$c(c)?{documents:Ry(i,c)}:{query:xy(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Iy(i,o.resumeToken);const l=Ch(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=hi(i,o.snapshotVersion.toTimestamp());const l=Ch(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=i3(this.serializer,e);r&&(t.labels=r),this.Ho(t)}s_(e){const t={};t.database=Qo(this.serializer),t.removeTarget=e,this.Ho(t)}}class H3 extends Zy{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=s3(e.writeResults,e.commitTime),r=He(e.commitTime);return this.listener.u_(r,t)}return G(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Qo(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Yo(this.serializer,r))};this.Ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3 extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new T(y.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(y.UNKNOWN,s.toString())})}yo(e,t,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(y.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class Y3{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Ge(t),this.d_=!1):x("OnlineStateTracker",t)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Or(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=O(c);l.y_.add(4),await Ni(l),l.b_.set("Unknown"),l.y_.delete(4),await Na(l)}(this))})}),this.b_=new Y3(r,s)}}async function Na(n){if(Or(n))for(const e of n.w_)await e(!0)}async function Ni(n){for(const e of n.w_)await e(!1)}function jl(n,e){const t=O(n);t.p_.has(e.targetId)||(t.p_.set(e.targetId,e),xf(t)?Rf(t):Oi(t).Uo()&&Af(t,e))}function Jo(n,e){const t=O(n),r=Oi(t);t.p_.delete(e),r.Uo()&&ev(t,e),t.p_.size===0&&(r.Uo()?r.zo():Or(t)&&t.b_.set("Unknown"))}function Af(n,e){if(n.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Oi(n).i_(e)}function ev(n,e){n.D_.Be(e),Oi(n).s_(e)}function Rf(n){n.D_=new Y6({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.p_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),Oi(n).start(),n.b_.A_()}function xf(n){return Or(n)&&!Oi(n).$o()&&n.p_.size>0}function Or(n){return O(n).y_.size===0}function tv(n){n.D_=void 0}async function X3(n){n.p_.forEach((e,t)=>{Af(n,e)})}async function Z3(n,e){tv(n),xf(n)?(n.b_.m_(e),Rf(n)):n.b_.set("Unknown")}async function e5(n,e,t){if(n.b_.set("Online"),e instanceof wy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qc(n,r)}else if(e instanceof gc?n.D_.We(e):e instanceof vy?n.D_.Ze(e):n.D_.je(e),!t.isEqual(q.min()))try{const r=await Ky(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.p_.get(l);u&&i.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.p_.get(c);if(!u)return;i.p_.set(c,u.withResumeToken(et.EMPTY_BYTE_STRING,u.snapshotVersion)),ev(i,c);const h=new Vn(u.target,c,l,u.sequenceNumber);Af(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Qc(n,r)}}async function Qc(n,e,t){if(!Nr(e))throw e;n.y_.add(1),await Ni(n),n.b_.set("Offline"),t||(t=()=>Ky(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.y_.delete(1),await Na(n)})}function nv(n,e){return e().catch(t=>Qc(n,t,e))}async function Vi(n){const e=O(n),t=Er(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;t5(e);)try{const s=await $3(e.localStore,r);if(s===null){e.g_.length===0&&t.zo();break}r=s.batchId,n5(e,s)}catch(s){await Qc(e,s)}rv(e)&&sv(e)}function t5(n){return Or(n)&&n.g_.length<10}function n5(n,e){n.g_.push(e);const t=Er(n);t.Uo()&&t.__&&t.a_(e.mutations)}function rv(n){return Or(n)&&!Er(n).$o()&&n.g_.length>0}function sv(n){Er(n).start()}async function r5(n){Er(n).l_()}async function s5(n){const e=Er(n);for(const t of n.g_)e.a_(t.mutations)}async function i5(n,e,t){const r=n.g_.shift(),s=hf.from(r,e,t);await nv(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Vi(n)}async function o5(n,e){e&&Er(n).__&&await async function(r,s){if(function(o){return gy(o)&&o!==y.ABORTED}(s.code)){const i=r.g_.shift();Er(r).Go(),await nv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vi(r)}}(n,e),rv(n)&&sv(n)}async function mg(n,e){const t=O(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Or(t);t.y_.add(3),await Ni(t),r&&t.b_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.y_.delete(3),await Na(t)}async function Lh(n,e){const t=O(n);e?(t.y_.delete(2),await Na(t)):e||(t.y_.add(2),await Ni(t),t.b_.set("Unknown"))}function Oi(n){return n.v_||(n.v_=function(t,r,s){const i=O(t);return i.P_(),new W3(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{_o:X3.bind(null,n),uo:Z3.bind(null,n),r_:e5.bind(null,n)}),n.w_.push(async e=>{e?(n.v_.Go(),xf(n)?Rf(n):n.b_.set("Unknown")):(await n.v_.stop(),tv(n))})),n.v_}function Er(n){return n.C_||(n.C_=function(t,r,s){const i=O(t);return i.P_(),new H3(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{_o:r5.bind(null,n),uo:o5.bind(null,n),c_:s5.bind(null,n),u_:i5.bind(null,n)}),n.w_.push(async e=>{e?(n.C_.Go(),await Vi(n)):(await n.C_.stop(),n.g_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.g_.length} pending writes`),n.g_=[]))})),n.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Pf(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mi(n,e){if(Ge("AsyncQueue",`${e}: ${n}`),Nr(n))return new T(y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.comparator=e?(t,r)=>e(t,r)||N.comparator(t.key,r.key):(t,r)=>N.comparator(t.key,r.key),this.keyedMap=oo(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.F_=new Pe(N.comparator)}track(e){const t=e.doc.key,r=this.F_.get(t);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(t,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(t):e.type===1&&r.type===2?this.F_=this.F_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):U():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal((t,r)=>{e.push(r)}),e}}class pi{constructor(e,t,r,s,i,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new pi(e,t,Zs.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(){this.x_=void 0,this.listeners=[]}}class c5{constructor(){this.queries=new Vr(e=>ty(e),xa),this.onlineState="Unknown",this.O_=new Set}}async function Sf(n,e){const t=O(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new a5),s)try{i.x_=await t.onListen(r)}catch(o){const a=Mi(o,`Initialization of query '${Sh(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.N_(t.onlineState),i.x_&&e.B_(i.x_)&&kf(t)}async function Cf(n,e){const t=O(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function l5(n,e){const t=O(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&kf(t)}function u5(n,e,t){const r=O(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function kf(n){n.O_.forEach(e=>{e.next()})}class Df{constructor(e,t,r){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}U_(e){e=pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h5{constructor(e,t){this.G_=e,this.byteLength=t}z_(){return"metadata"in this.G_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.serializer=e}os(e){return Tn(this.serializer,e)}_s(e){return e.metadata.exists?Ay(this.serializer,e.document,!1):ke.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return He(e)}}class d5{constructor(e,t,r){this.j_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=iv(e)}H_(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.G_.namedQuery)this.queries.push(e.G_.namedQuery);else if(e.G_.documentMetadata){this.documents.push({metadata:e.G_.documentMetadata}),e.G_.documentMetadata.exists||++t;const r=ge.fromString(e.G_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.G_.document&&(this.documents[this.documents.length-1].document=e.G_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}J_(e){const t=new Map,r=new _g(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.os(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||ne()).add(i);t.set(o,a)}}return t}async complete(){const e=await B3(this.localStore,new _g(this.serializer),this.documents,this.j_.id),t=this.J_(this.documents);for(const r of this.queries)await j3(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Y_:this.collectionGroups,Z_:e}}}function iv(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.key=e}}class av{constructor(e){this.key=e}}class cv{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ne(),this.mutatedKeys=ne(),this.na=ry(e),this.ra=new Zs(this.na)}get ia(){return this.X_}sa(e,t){const r=t?t.oa:new gg,s=t?t.ra:this.ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=Pa(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;d&&m?d.data.isEqual(m.data)?E!==w&&(r.track({type:3,doc:m}),b=!0):this._a(d,m)||(r.track({type:2,doc:m}),b=!0,(c&&this.na(m,c)>0||l&&this.na(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),b=!0):d&&!m&&(r.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(m?(o=o.add(m),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort((l,u)=>function(d,m){const E=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return E(d)-E(m)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=t?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,i.length!==0||c?{snapshot:new pi(this.query,e.ra,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new gg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(t=>this.X_=this.X_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.X_=this.X_.delete(t)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ne(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const t=[];return e.forEach(r=>{this.ta.has(r)||t.push(new av(r))}),this.ta.forEach(r=>{e.has(r)||t.push(new ov(r))}),t}ha(e){this.X_=e.ss,this.ta=ne();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return pi.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class f5{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class p5{constructor(e){this.key=e,this.Ia=!1}}class m5{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Vr(a=>ty(a),xa),this.da=new Map,this.Aa=new Set,this.Ra=new Pe(N.comparator),this.Va=new Map,this.ma=new vf,this.fa={},this.ga=new Map,this.pa=Is.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function g5(n,e){const t=Lf(n);let r,s;const i=t.Ea.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await di(t.localStore,Lt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Nf(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&jl(t.remoteStore,o)}return s}async function Nf(n,e,t,r,s){n.wa=(h,d,m)=>async function(w,b,$,K){let B=b.view.sa($);B.zi&&(B=await Kc(w.localStore,b.query,!1).then(({documents:re})=>b.view.sa(re,B)));const F=K&&K.targetChanges.get(b.targetId),J=b.view.applyChanges(B,w.isPrimaryClient,F);return Fh(w,b.targetId,J.ca),J.snapshot}(n,h,d,m);const i=await Kc(n.localStore,e,!0),o=new cv(e,i.ss),a=o.sa(i.documents),c=ka.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);Fh(n,t,l.ca);const u=new f5(e,t,o);return n.Ea.set(e,u),n.da.has(t)?n.da.get(t).push(e):n.da.set(t,[e]),l.snapshot}async function _5(n,e){const t=O(n),r=t.Ea.get(e),s=t.da.get(r.targetId);if(s.length>1)return t.da.set(r.targetId,s.filter(i=>!xa(i,e))),void t.Ea.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await fi(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Jo(t.remoteStore,r.targetId),mi(t,r.targetId)}).catch(Dr)):(mi(t,r.targetId),await fi(t.localStore,r.targetId,!0))}async function y5(n,e,t){const r=Ff(n);try{const s=await function(o,a){const c=O(o),l=Le.now(),u=a.reduce((m,E)=>m.add(E.key),ne());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=Mt(),w=ne();return c.Xi.getEntries(m,u).next(b=>{E=b,E.forEach(($,K)=>{K.isValidDocument()||(w=w.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,E)).next(b=>{h=b;const $=[];for(const K of a){const B=W6(K,h.get(K.key).overlayedDocument);B!=null&&$.push(new Kn(K.key,B,K1(B.value.mapValue),Me.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,$,a)}).next(b=>{d=b;const $=b.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(m,b.batchId,$)})}).then(()=>({batchId:d.batchId,changes:iy(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new Pe(ee)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,s.batchId,t),await Wn(r,s.changes),await Vi(r.remoteStore)}catch(s){const i=Mi(s,"Failed to persist write");t.reject(i)}}async function lv(n,e){const t=O(n);try{const r=await U3(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Va.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?G(o.Ia):s.removedDocuments.size>0&&(G(o.Ia),o.Ia=!1))}),await Wn(t,r,e)}catch(r){await Dr(r)}}function yg(n,e,t){const r=O(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=O(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(l=!0)}),l&&kf(c)}(r.eventManager,e),s.length&&r.Ta.r_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function v5(n,e,t){const r=O(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Va.get(e),i=s&&s.key;if(i){let o=new Pe(N.comparator);o=o.insert(i,ke.newNoDocument(i,q.min()));const a=ne().add(i),c=new Ca(q.min(),new Map,new Pe(ee),o,a);await lv(r,c),r.Ra=r.Ra.remove(i),r.Va.delete(e),Mf(r)}else await fi(r.localStore,e,!1).then(()=>mi(r,e,t)).catch(Dr)}async function w5(n,e){const t=O(n),r=e.batch.batchId;try{const s=await F3(t.localStore,e);Of(t,r,null),Vf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Wn(t,s)}catch(s){await Dr(s)}}async function I5(n,e,t){const r=O(n);try{const s=await function(o,a){const c=O(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(G(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Of(r,e,t),Vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Wn(r,s)}catch(s){await Dr(s)}}async function E5(n,e){const t=O(n);Or(t.remoteStore)||x("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=O(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const s=t.ga.get(r)||[];s.push(e),t.ga.set(r,s)}catch(r){const s=Mi(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Vf(n,e){(n.ga.get(e)||[]).forEach(t=>{t.resolve()}),n.ga.delete(e)}function Of(n,e,t){const r=O(n);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.fa[r.currentUser.toKey()]=s}}function mi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.da.get(e))n.Ea.delete(r),t&&n.Ta.Sa(r,t);n.da.delete(e),n.isPrimaryClient&&n.ma.Ar(e).forEach(r=>{n.ma.containsKey(r)||uv(n,r)})}function uv(n,e){n.Aa.delete(e.path.canonicalString());const t=n.Ra.get(e);t!==null&&(Jo(n.remoteStore,t),n.Ra=n.Ra.remove(e),n.Va.delete(t),Mf(n))}function Fh(n,e,t){for(const r of t)r instanceof ov?(n.ma.addReference(r.key,e),T5(n,r)):r instanceof av?(x("SyncEngine","Document no longer in limbo: "+r.key),n.ma.removeReference(r.key,e),n.ma.containsKey(r.key)||uv(n,r.key)):U()}function T5(n,e){const t=e.key,r=t.path.canonicalString();n.Ra.get(t)||n.Aa.has(r)||(x("SyncEngine","New document in limbo: "+t),n.Aa.add(r),Mf(n))}function Mf(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const e=n.Aa.values().next().value;n.Aa.delete(e);const t=new N(ge.fromString(e)),r=n.pa.next();n.Va.set(r,new p5(t)),n.Ra=n.Ra.insert(t,r),jl(n.remoteStore,new Vn(Lt(Ci(t.path)),r,"TargetPurposeLimboResolution",Vt.ae))}}async function Wn(n,e,t){const r=O(n),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,t).then(l=>{if((l||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Ef.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(c,l){const u=O(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(l,d=>_.forEach(d.Li,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>_.forEach(d.ki,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Nr(h))throw h;x("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.Ji.get(d),E=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(E);u.Ji=u.Ji.insert(d,w)}}}(r.localStore,i))}async function b5(n,e){const t=O(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await Gy(t.localStore,e);t.currentUser=e,function(i,o){i.ga.forEach(a=>{a.forEach(c=>{c.reject(new T(y.CANCELLED,o))})}),i.ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wn(t,r.ts)}}function A5(n,e){const t=O(n),r=t.Va.get(e);if(r&&r.Ia)return ne().add(r.key);{let s=ne();const i=t.da.get(e);if(!i)return s;for(const o of i){const a=t.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}async function R5(n,e){const t=O(n),r=await Kc(t.localStore,e.query,!0),s=e.view.ha(r);return t.isPrimaryClient&&Fh(t,e.targetId,s.ca),s}async function x5(n,e){const t=O(n);return Qy(t.localStore,e).then(r=>Wn(t,r))}async function P5(n,e,t,r){const s=O(n),i=await function(a,c){const l=O(a),u=O(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",h=>u.Dn(h,c).next(d=>d?l.localDocuments.getDocuments(h,d):_.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Vi(s.remoteStore):t==="acknowledged"||t==="rejected"?(Of(s,e,r||null),Vf(s,e),function(a,c){O(O(a).mutationQueue).Cn(c)}(s.localStore,e)):U(),await Wn(s,i)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function S5(n,e){const t=O(n);if(Lf(t),Ff(t),e===!0&&t.ya!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await vg(t,r.toArray());t.ya=!0,await Lh(t.remoteStore,!0);for(const i of s)jl(t.remoteStore,i)}else if(e===!1&&t.ya!==!1){const r=[];let s=Promise.resolve();t.da.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(mi(t,o),fi(t.localStore,o,!0))),Jo(t.remoteStore,o)}),await s,await vg(t,r),function(o){const a=O(o);a.Va.forEach((c,l)=>{Jo(a.remoteStore,l)}),a.ma.Rr(),a.Va=new Map,a.Ra=new Pe(N.comparator)}(t),t.ya=!1,await Lh(t.remoteStore,!1)}}async function vg(n,e,t){const r=O(n),s=[],i=[];for(const o of e){let a;const c=r.da.get(o);if(c&&c.length!==0){a=await di(r.localStore,Lt(c[0]));for(const l of c){const u=r.Ea.get(l),h=await R5(r,u);h.snapshot&&i.push(h.snapshot)}}else{const l=await Hy(r.localStore,o);a=await di(r.localStore,l),await Nf(r,hv(l),o,!1,a.resumeToken)}s.push(a)}return r.Ta.r_(i),s}function hv(n){return ey(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function C5(n){return function(t){return O(O(t).persistence).Ni()}(O(n).localStore)}async function k5(n,e,t,r){const s=O(n);if(s.ya)return void x("SyncEngine","Ignoring unexpected query state notification.");const i=s.da.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Qy(s.localStore,ny(i[0])),a=Ca.createSynthesizedRemoteEventForCurrentChange(e,t==="current",et.EMPTY_BYTE_STRING);await Wn(s,o,a);break}case"rejected":await fi(s.localStore,e,!0),mi(s,e,r);break;default:U()}}async function D5(n,e,t){const r=Lf(n);if(r.ya){for(const s of e){if(r.da.has(s)){x("SyncEngine","Adding an already active target "+s);continue}const i=await Hy(r.localStore,s),o=await di(r.localStore,i);await Nf(r,hv(i),o.targetId,!1,o.resumeToken),jl(r.remoteStore,o)}for(const s of t)r.da.has(s)&&await fi(r.localStore,s,!1).then(()=>{Jo(r.remoteStore,s),mi(r,s)}).catch(Dr)}}function Lf(n){const e=O(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=A5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=v5.bind(null,e),e.Ta.r_=l5.bind(null,e.eventManager),e.Ta.Sa=u5.bind(null,e.eventManager),e}function Ff(n){const e=O(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=w5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=I5.bind(null,e),e}function N5(n,e,t){const r=O(n);(async function(i,o,a){try{const c=await o.getMetadata();if(await function(m,E){const w=O(m),b=He(E.createTime);return w.persistence.runTransaction("hasNewerBundle","readonly",$=>w.Qr.getBundleMetadata($,E.id)).then($=>!!$&&$.createTime.compareTo(b)>=0)}(i.localStore,c))return await o.close(),a._completeWith(function(m){return{taskState:"Success",documentsLoaded:m.totalDocuments,bytesLoaded:m.totalBytes,totalDocuments:m.totalDocuments,totalBytes:m.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(iv(c));const l=new d5(c,i.localStore,o.serializer);let u=await o.ba();for(;u;){const d=await l.H_(u);d&&a._updateProgress(d),u=await o.ba()}const h=await l.complete();return await Wn(i,h.Z_,void 0),await function(m,E){const w=O(m);return w.persistence.runTransaction("Save bundle","readwrite",b=>w.Qr.saveBundleMetadata(b,E))}(i.localStore,c),a._completeWith(h.progress),Promise.resolve(h.Y_)}catch(c){return sn("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class Uh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Da(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return zy(this.persistence,new qy,e.initialUser,this.serializer)}createPersistence(e){return new jy(Bl.zr,this.serializer)}createSharedClientState(e){return new Jy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dv extends Uh{constructor(e,t,r){super(),this.Da=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Da.initialize(this,e),await Ff(this.Da.syncEngine),await Vi(this.Da.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return zy(this.persistence,new qy,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new E3(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new i6(t,this.persistence);return new s6(e.asyncQueue,r)}createPersistence(e){const t=If(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new wf(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Xy(),_c(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Jy}}class V5 extends dv{constructor(e,t){super(e,t,!1),this.Da=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Da.syncEngine;this.sharedClientState instanceof zu&&(this.sharedClientState.syncEngine={Gs:P5.bind(null,t),zs:k5.bind(null,t),js:D5.bind(null,t),Ni:C5.bind(null,t),Ws:x5.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await S5(this.Da.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Xy();if(!zu.v(t))throw new T(y.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=If(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zu(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b5.bind(null,this.syncEngine),await Lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new c5}()}createDatastore(e){const t=Da(e.databaseInfo.databaseId),r=function(i){return new K3(i)}(e.databaseInfo);return function(i,o,a,c){return new Q3(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new J3(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>yg(this.syncEngine,t,0),function(){return pg.v()?new pg:new q3}())}createSyncEngine(e,t){return function(s,i,o,a,c,l,u){const h=new m5(s,i,o,a,c,l);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=O(t);x("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Ni(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(e,t){this.Fa=e,this.serializer=t,this.metadata=new at,this.buffer=new Uint8Array,this.Ma=function(){return new TextDecoder("utf-8")}(),this.xa().then(r=>{r&&r.z_()?this.metadata.resolve(r.G_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.G_)}`))},r=>this.metadata.reject(r))}close(){return this.Fa.cancel()}async getMetadata(){return this.metadata.promise}async ba(){return await this.getMetadata(),this.xa()}async xa(){const e=await this.Oa();if(e===null)return null;const t=this.Ma.decode(e),r=Number(t);isNaN(r)&&this.Na(`length string (${t}) is not valid number`);const s=await this.Ba(r);return new h5(JSON.parse(s),e.length+r)}La(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Oa(){for(;this.La()<0&&!await this.ka(););if(this.buffer.length===0)return null;const e=this.La();e<0&&this.Na("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ba(e){for(;this.buffer.length<e;)await this.ka()&&this.Na("Reached the end of bundle when more is expected.");const t=this.Ma.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Na(e){throw this.Fa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ka(){const e=await this.Fa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M5{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(y.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,i){const o=O(s),a=Qo(o.serializer)+"/documents",c={documents:i.map(d=>Ho(o.serializer,d))},l=await o.yo("BatchGetDocuments",a,c,i.length),u=new Map;l.forEach(d=>{const m=n3(o.serializer,d);u.set(m.key.toString(),m)});const h=[];return i.forEach(d=>{const m=u.get(d.toString());G(!!m),h.push(m)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Di(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=N.fromPath(r);this.mutations.push(new lf(s,this.precondition(s)))}),await async function(r,s){const i=O(r),o=Qo(i.serializer)+"/documents",a={writes:s.map(c=>Yo(i.serializer,c))};await i.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw U();t=q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new T(y.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?Me.exists(!1):Me.updateTime(t):Me.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new T(y.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Me.updateTime(t)}return Me.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L5{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.qa=r.maxAttempts,this.Ko=new bf(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new M5(this.datastore),t=this.Ka(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.$a(s)}))}).catch(r=>{this.$a(r)})})}Ka(e){try{const t=this.updateFunction(e);return!Aa(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!gy(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F5{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=k1.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Mi(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yc(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function $h(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $f(n);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>mg(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>mg(e.remoteStore,i)),n._onlineComponents=e}function fv(n){return n.name==="FirebaseError"?n.code===y.FAILED_PRECONDITION||n.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function $f(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await yc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!fv(t))throw t;sn("Error using user provided cache. Falling back to memory cache: "+t),await yc(n,new Uh)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await yc(n,new Uh);return n._offlineComponents}async function zl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await $h(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await $h(n,new Uf))),n._onlineComponents}function pv(n){return $f(n).then(e=>e.persistence)}function Bf(n){return $f(n).then(e=>e.localStore)}function mv(n){return zl(n).then(e=>e.remoteStore)}function jf(n){return zl(n).then(e=>e.syncEngine)}function U5(n){return zl(n).then(e=>e.datastore)}async function gi(n){const e=await zl(n),t=e.eventManager;return t.onListen=g5.bind(null,e.syncEngine),t.onUnlisten=_5.bind(null,e.syncEngine),t}function $5(n){return n.asyncQueue.enqueue(async()=>{const e=await pv(n),t=await mv(n);return e.setNetworkEnabled(!0),function(s){const i=O(s);return i.y_.delete(0),Na(i)}(t)})}function B5(n){return n.asyncQueue.enqueue(async()=>{const e=await pv(n),t=await mv(n);return e.setNetworkEnabled(!1),async function(s){const i=O(s);i.y_.add(0),await Ni(i),i.b_.set("Offline")}(t)})}function j5(n,e){const t=new at;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await function(l,u){const h=O(l);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,u))}(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new T(y.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Mi(a,`Failed to get document '${i} from cache`);o.reject(c)}}(await Bf(n),e,t)),t.promise}function gv(n,e,t={}){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ql({next:d=>{o.enqueueAndForget(()=>Cf(i,h));const m=d.docs.has(a);!m&&d.fromCache?l.reject(new T(y.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?l.reject(new T(y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Df(Ci(a.path),u,{includeMetadataChanges:!0,W_:!0});return Sf(i,h)}(await gi(n),n.asyncQueue,e,t,r)),r.promise}function q5(n,e){const t=new at;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await Kc(s,i,!0),c=new cv(i,a.ss),l=c.sa(a.documents),u=c.applyChanges(l,!1);o.resolve(u.snapshot)}catch(a){const c=Mi(a,`Failed to execute query '${i} against cache`);o.reject(c)}}(await Bf(n),e,t)),t.promise}function _v(n,e,t={}){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ql({next:d=>{o.enqueueAndForget(()=>Cf(i,h)),d.fromCache&&c.source==="server"?l.reject(new T(y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Df(a,u,{includeMetadataChanges:!0,W_:!0});return Sf(i,h)}(await gi(n),n.asyncQueue,e,t,r)),r.promise}function z5(n,e){const t=new ql(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,i){O(s).O_.add(i),i.next()}(await gi(n),t)),()=>{t.Ca(),n.asyncQueue.enqueueAndForget(async()=>function(s,i){O(s).O_.delete(i)}(await gi(n),t))}}function G5(n,e,t,r){const s=function(o,a){let c;return c=typeof o=="string"?yy().encode(o):o,function(u,h){return new O5(u,h)}(function(u,h){if(u instanceof Uint8Array)return wg(u,h);if(u instanceof ArrayBuffer)return wg(new Uint8Array(u),h);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,Da(e));n.asyncQueue.enqueueAndForget(async()=>{N5(await jf(n),s,r)})}function K5(n,e){return n.asyncQueue.enqueue(async()=>function(r,s){const i=O(r);return i.persistence.runTransaction("Get named query","readonly",o=>i.Qr.getNamedQuery(o,s))}(await Bf(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n,e,t){if(!t)throw new T(y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vv(n,e,t,r){if(e===!0&&r===!0)throw new T(y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Eg(n){if(!N.isDocumentKey(n))throw new T(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tg(n){if(N.isDocumentKey(n))throw new T(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function ve(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new T(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gl(n);throw new T(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function wv(n,e){if(e<=0)throw new T(y.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new T(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new T(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new T(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new T(y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Va{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KA;switch(r.type){case"firstParty":return new YA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ig.get(t);r&&(x("ComponentProvider","Removing Datastore"),Ig.delete(t),r.terminate())}(this),Promise.resolve()}}function W5(n,e,t,r={}){var s;const i=(n=ve(n,Va))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=st.MOCK_USER;else{a=fI(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new T(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new st(l)}n._authCredentials=new WA(new C1(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ct=class Iv{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Iv(this.firestore,e,this._query)}},Ue=class Ev{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ev(this.firestore,e,this._key)}},cr=class Tv extends Ct{constructor(e,t,r){super(e,t,Ci(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new N(e))}withConverter(e){return new Tv(this.firestore,e,this._path)}};function zf(n,e,...t){if(n=Q(n),qf("collection","path",e),n instanceof Va){const r=ge.fromString(e,...t);return Tg(r),new cr(n,null,r)}{if(!(n instanceof Ue||n instanceof cr))throw new T(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Tg(r),new cr(n.firestore,null,r)}}function H5(n,e){if(n=ve(n,Va),qf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(y.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ct(n,null,function(r){return new Gn(ge.emptyPath(),r)}(e))}function _i(n,e,...t){if(n=Q(n),arguments.length===1&&(e=k1.V()),qf("doc","path",e),n instanceof Va){const r=ge.fromString(e,...t);return Eg(r),new Ue(n,null,new N(r))}{if(!(n instanceof Ue||n instanceof cr))throw new T(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Eg(r),new Ue(n.firestore,n instanceof cr?n.converter:null,new N(r))}}function bv(n,e){return n=Q(n),e=Q(e),(n instanceof Ue||n instanceof cr)&&(e instanceof Ue||e instanceof cr)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Av(n,e){return n=Q(n),e=Q(e),n instanceof Ct&&e instanceof Ct&&n.firestore===e.firestore&&xa(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q5{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new bf(this,"async_queue_retry"),this.Xa=()=>{const t=_c();t&&x("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const e=_c();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=_c();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const t=new at;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Nr(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const t=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ge("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=t,t}enqueueAfterDelay(e,t,r){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const s=Pf.createAndSchedule(this,e,t,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&U()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ja)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}function Bh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Y5{constructor(){this._progressObserver={},this._taskCompletionResolver=new at,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J5=-1;let ze=class extends Va{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new Q5}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rv(this),this._firestoreClient.terminate()}};function ht(n){return n._firestoreClient||Rv(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Rv(n){var e,t,r;const s=n._freezeSettings(),i=function(a,c,l,u){return new R6(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,yv(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new F5(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function X5(n,e){Pv(n=ve(n,ze));const t=ht(n);if(t._uninitializedComponentsProvider)throw new T(y.FAILED_PRECONDITION,"SDK cache is already specified.");sn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),s=new Uf;return xv(t,s,new dv(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Z5(n){Pv(n=ve(n,ze));const e=ht(n);if(e._uninitializedComponentsProvider)throw new T(y.FAILED_PRECONDITION,"SDK cache is already specified.");sn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Uf;return xv(e,r,new V5(r,t.cacheSizeBytes))}function xv(n,e,t){const r=new at;return n.asyncQueue.enqueue(async()=>{try{await yc(n,t),await $h(n,e),r.resolve()}catch(s){const i=s;if(!fv(i))throw i;sn("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function eR(n){if(n._initialized&&!n._terminated)throw new T(y.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new at;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Xt.v())return Promise.resolve();const s=r+"main";await Xt.delete(s)}(If(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function tR(n){return function(t){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>E5(await jf(t),r)),r.promise}(ht(n=ve(n,ze)))}function nR(n){return $5(ht(n=ve(n,ze)))}function rR(n){return B5(ht(n=ve(n,ze)))}function sR(n,e){const t=ht(n=ve(n,ze)),r=new Y5;return G5(t,n._databaseId,e,r),r}function iR(n,e){return K5(ht(n=ve(n,ze)),e).then(t=>t?new Ct(n,null,t.query):null)}function Pv(n){if(n._initialized||n._terminated)throw new T(y.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(et.fromBase64String(e))}catch(t){throw new T(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xn(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new T(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=/^__.*__$/;class aR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ki(e,this.data,t,this.fieldTransforms)}}class Sv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Kn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cv(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Wl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.cu({path:r,hu:!1});return s.Pu(e),s}Iu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Yc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(Cv(this.uu)&&oR.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class cR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Da(e)}Ru(e,t,r,s=!1){return new Wl({uu:e,methodName:t,Au:r,path:Ke.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ss(n){const e=n._freezeSettings(),t=Da(n._databaseId);return new cR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hl(n,e,t,r,s,i={}){const o=n.Ru(i.merge||i.mergeFields?2:0,e,t,s);Hf("Data must be an object, but it was:",o,r);const a=Nv(r,o);let c,l;if(i.merge)c=new Ot(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=jh(e,h,t);if(!o.contains(d))throw new T(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ov(u,d)||u.push(d)}c=new Ot(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new aR(new pt(a),c,l)}class Oa extends Ps{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oa}}function kv(n,e,t){return new Wl({uu:3,Au:e.settings.Au,methodName:n._methodName,hu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Gf extends Ps{_toFieldTransform(e){return new Sa(e.path,new li)}isEqual(e){return e instanceof Gf}}class lR extends Ps{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=kv(this,e,!0),r=this.Vu.map(i=>Cs(i,t)),s=new _s(r);return new Sa(e.path,s)}isEqual(e){return this===e}}class uR extends Ps{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=kv(this,e,!0),r=this.Vu.map(i=>Cs(i,t)),s=new ys(r);return new Sa(e.path,s)}isEqual(e){return this===e}}class hR extends Ps{constructor(e,t){super(e),this.mu=t}_toFieldTransform(e){const t=new ui(e.serializer,ly(e.serializer,this.mu));return new Sa(e.path,t)}isEqual(e){return this===e}}function Kf(n,e,t,r){const s=n.Ru(1,e,t);Hf("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();xs(r,(c,l)=>{const u=Qf(e,c,t);l=Q(l);const h=s.Iu(u);if(l instanceof Oa)i.push(u);else{const d=Cs(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ot(i);return new Sv(o,a,s.fieldTransforms)}function Wf(n,e,t,r,s,i){const o=n.Ru(1,e,t),a=[jh(e,r,t)],c=[s];if(i.length%2!=0)throw new T(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(jh(e,i[d])),c.push(i[d+1]);const l=[],u=pt.empty();for(let d=a.length-1;d>=0;--d)if(!Ov(l,a[d])){const m=a[d];let E=c[d];E=Q(E);const w=o.Iu(m);if(E instanceof Oa)l.push(m);else{const b=Cs(E,w);b!=null&&(l.push(m),u.set(m,b))}}const h=new Ot(l);return new Sv(u,h,o.fieldTransforms)}function Dv(n,e,t,r=!1){return Cs(t,n.Ru(r?4:3,e))}function Cs(n,e){if(Vv(n=Q(n)))return Hf("Unsupported field value:",e,n),Nv(n,e);if(n instanceof Ps)return function(r,s){if(!Cv(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Cs(a,s.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Q(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ly(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:hi(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hi(s.serializer,i)}}if(r instanceof Kl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xn)return{bytesValue:Iy(s.serializer,r._byteString)};if(r instanceof Ue){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mf(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${Gl(r)}`)}(n,e)}function Nv(n,e){const t={};return q1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(n,(r,s)=>{const i=Cs(s,e.lu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Vv(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Le||n instanceof Kl||n instanceof xn||n instanceof Ue||n instanceof Ps)}function Hf(n,e,t){if(!Vv(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Gl(t);throw r==="an object"?e.Eu(n+" a custom object"):e.Eu(n+" "+r)}}function jh(n,e,t){if((e=Q(e))instanceof Tr)return e._internalPath;if(typeof e=="string")return Qf(n,e);throw Yc("Field path arguments must be of type string or ",n,!1,void 0,t)}const dR=new RegExp("[~\\*/\\[\\]]");function Qf(n,e,t){if(e.search(dR)>=0)throw Yc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Tr(...e.split("."))._internalPath}catch{throw Yc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Yc(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new T(y.INVALID_ARGUMENT,a+n+c)}function Ov(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ql("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fR extends Xo{data(){return super.data()}}function Ql(n,e){return typeof e=="string"?Qf(n,e):e instanceof Tr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new T(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yf{}class Ma extends Yf{}function Zn(n,e,...t){let r=[];e instanceof Yf&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof Jf).length,a=i.filter(c=>c instanceof Yl).length;if(o>1||o>0&&a>0)throw new T(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Yl extends Ma{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Yl(e,t,r)}_apply(e){const t=this._parse(e);return Fv(e._query,t),new Ct(e.firestore,e.converter,Ph(e._query,t))}_parse(e){const t=Ss(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new T(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Rg(h,u);const m=[];for(const E of h)m.push(Ag(c,i,E));d={arrayValue:{values:m}}}else d=Ag(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Rg(h,u),d=Dv(a,o,h,u==="in"||u==="not-in");return he.create(l,u,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pR(n,e,t){const r=e,s=Ql("where",n);return Yl._create(s,r,t)}class Jf extends Yf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Jf(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ie.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Fv(o,c),o=Ph(o,c)}(e._query,t),new Ct(e.firestore,e.converter,Ph(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xf extends Ma{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xf(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new T(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new T(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Xs(i,o);return function(l,u){if(of(l)===null){const h=Ml(l);h!==null&&Uv(l,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new Ct(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Gn(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function mR(n,e="asc"){const t=e,r=Ql("orderBy",n);return Xf._create(r,t)}class Jl extends Ma{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Jl(e,t,r)}_apply(e){return new Ct(e.firestore,e.converter,jc(e._query,this._limit,this._limitType))}}function gR(n){return wv("limit",n),Jl._create("limit",n,"F")}function _R(n){return wv("limitToLast",n),Jl._create("limitToLast",n,"L")}class Xl extends Ma{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Xl(e,t,r)}_apply(e){const t=Lv(e,this.type,this._docOrFields,this._inclusive);return new Ct(e.firestore,e.converter,function(s,i){return new Gn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function yR(...n){return Xl._create("startAt",n,!0)}function vR(...n){return Xl._create("startAfter",n,!1)}class Zl extends Ma{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zl(e,t,r)}_apply(e){const t=Lv(e,this.type,this._docOrFields,this._inclusive);return new Ct(e.firestore,e.converter,function(s,i){return new Gn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function wR(...n){return Zl._create("endBefore",n,!1)}function IR(...n){return Zl._create("endAt",n,!0)}function Lv(n,e,t,r){if(t[0]=Q(t[0]),t[0]instanceof Xo)return function(i,o,a,c,l){if(!c)throw new T(y.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of as(i))if(h.field.isKeyField())u.push(ms(o,c.key));else{const d=c.data.field(h.field);if(Ol(d))throw new T(y.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const m=h.field.canonicalString();throw new T(y.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}u.push(d)}return new Ir(u,l)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Ss(n.firestore);return function(o,a,c,l,u,h){const d=o.explicitOrderBy;if(u.length>d.length)throw new T(y.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let E=0;E<u.length;E++){const w=u[E];if(d[E].field.isKeyField()){if(typeof w!="string")throw new T(y.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof w}`);if(!af(o)&&w.indexOf("/")!==-1)throw new T(y.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${w}' contains a slash.`);const b=o.path.child(ge.fromString(w));if(!N.isDocumentKey(b))throw new T(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const $=new N(b);m.push(ms(a,$))}else{const b=Dv(c,l,w);m.push(b)}}return new Ir(m,h)}(n._query,n.firestore._databaseId,s,e,t,r)}}function Ag(n,e,t){if(typeof(t=Q(t))=="string"){if(t==="")throw new T(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!af(e)&&t.indexOf("/")!==-1)throw new T(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!N.isDocumentKey(r))throw new T(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ms(n,new N(r))}if(t instanceof Ue)return ms(n,t._key);throw new T(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gl(t)}.`)}function Rg(n,e){if(!Array.isArray(n)||n.length===0)throw new T(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fv(n,e){if(e.isInequality()){const r=Ml(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new T(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=of(n);i!==null&&Uv(n,s,i)}const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new T(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Uv(n,e,t){if(!t.isEqual(e))throw new T(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Zf{convertValue(e,t="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return xs(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Kl(je(e.latitude),je(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=rf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const t=_r(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);G(ky(r));const s=new vr(r.get(1),r.get(3)),i=new N(r.popFirst(5));return s.isEqual(t)||Ge(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ER extends Zf{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Un=class extends Xo{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ql("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Io=class extends Un{data(e={}){return super.data(e)}},br=class{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new es(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Io(this._firestore,this._userDataWriter,r.key,r,new es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Io(s._firestore,s._userDataWriter,a.doc.key,a.doc,new es(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Io(s._firestore,s._userDataWriter,a.doc.key,a.doc,new es(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:TR(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function TR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}function $v(n,e){return n instanceof Un&&e instanceof Un?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof br&&e instanceof br&&n._firestore===e._firestore&&Av(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n){n=ve(n,Ue);const e=ve(n.firestore,ze);return gv(ht(e),n._key).then(t=>ep(e,n,t))}class ks extends Zf{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}function bR(n){n=ve(n,Ue);const e=ve(n.firestore,ze),t=ht(e),r=new ks(e);return j5(t,n._key).then(s=>new Un(e,r,n._key,s,new es(s!==null&&s.hasLocalMutations,!0),n.converter))}function AR(n){n=ve(n,Ue);const e=ve(n.firestore,ze);return gv(ht(e),n._key,{source:"server"}).then(t=>ep(e,n,t))}function Bv(n){n=ve(n,Ct);const e=ve(n.firestore,ze),t=ht(e),r=new ks(e);return Mv(n._query),_v(t,n._query).then(s=>new br(e,r,n,s))}function RR(n){n=ve(n,Ct);const e=ve(n.firestore,ze),t=ht(e),r=new ks(e);return q5(t,n._query).then(s=>new br(e,r,n,s))}function xR(n){n=ve(n,Ct);const e=ve(n.firestore,ze),t=ht(e),r=new ks(e);return _v(t,n._query,{source:"server"}).then(s=>new br(e,r,n,s))}function xg(n,e,t){n=ve(n,Ue);const r=ve(n.firestore,ze),s=eu(n.converter,e,t);return La(r,[Hl(Ss(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Me.none())])}function Pg(n,e,t,...r){n=ve(n,Ue);const s=ve(n.firestore,ze),i=Ss(s);let o;return o=typeof(e=Q(e))=="string"||e instanceof Tr?Wf(i,"updateDoc",n._key,e,t,r):Kf(i,"updateDoc",n._key,e),La(s,[o.toMutation(n._key,Me.exists(!0))])}function PR(n){return La(ve(n.firestore,ze),[new Di(n._key,Me.none())])}function SR(n,e){const t=ve(n.firestore,ze),r=_i(n),s=eu(n.converter,e);return La(t,[Hl(Ss(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Me.exists(!1))]).then(()=>r)}function jv(n,...e){var t,r,s;n=Q(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Bh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(n instanceof Ue)l=ve(n.firestore,ze),u=Ci(n._key.path),c={next:h=>{e[o]&&e[o](ep(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=ve(n,Ct);l=ve(h.firestore,ze),u=h._query;const d=new ks(l);c={next:m=>{e[o]&&e[o](new br(l,d,h,m))},error:e[o+1],complete:e[o+2]},Mv(n._query)}return function(d,m,E,w){const b=new ql(w),$=new Df(m,b,E);return d.asyncQueue.enqueueAndForget(async()=>Sf(await gi(d),$)),()=>{b.Ca(),d.asyncQueue.enqueueAndForget(async()=>Cf(await gi(d),$))}}(ht(l),u,a,c)}function CR(n,e){return z5(ht(n=ve(n,ze)),Bh(e)?e:{next:e})}function La(n,e){return function(r,s){const i=new at;return r.asyncQueue.enqueueAndForget(async()=>y5(await jf(r),s,i)),i.promise}(ht(n),e)}function ep(n,e,t){const r=t.docs.get(e._key),s=new ks(n);return new Un(n,s,e._key,r,new es(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DR=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ss(e)}set(e,t,r){this._verifyNotCommitted();const s=sr(e,this._firestore),i=eu(s.converter,t,r),o=Hl(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Me.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=sr(e,this._firestore);let o;return o=typeof(t=Q(t))=="string"||t instanceof Tr?Wf(this._dataReader,"WriteBatch.update",i._key,t,r,s):Kf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Me.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=sr(e,this._firestore);return this._mutations=this._mutations.concat(new Di(t._key,Me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(y.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function sr(n,e){if((n=Q(n)).firestore!==e)throw new T(y.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NR=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Ss(t)}get(t){const r=sr(t,this._firestore),s=new ER(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return U();const o=i[0];if(o.isFoundDocument())return new Xo(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new Xo(this._firestore,s,r._key,null,r.converter);throw U()})}set(t,r,s){const i=sr(t,this._firestore),o=eu(i.converter,r,s),a=Hl(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(t,r,s,...i){const o=sr(t,this._firestore);let a;return a=typeof(r=Q(r))=="string"||r instanceof Tr?Wf(this._dataReader,"Transaction.update",o._key,r,s,i):Kf(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=sr(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=sr(e,this._firestore),r=new ks(this._firestore);return super.get(e).then(s=>new Un(this._firestore,r,t._key,s._document,new es(!1,!1),t.converter))}};function VR(n,e,t){n=ve(n,ze);const r=Object.assign(Object.assign({},kR),t);return function(i){if(i.maxAttempts<1)throw new T(y.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const c=new at;return i.asyncQueue.enqueueAndForget(async()=>{const l=await U5(i);new L5(i.asyncQueue,l,a,o,c).run()}),c.promise}(ht(n),s=>e(new NR(n,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(){return new Oa("deleteField")}function MR(){return new Gf("serverTimestamp")}function LR(...n){return new lR("arrayUnion",n)}function FR(...n){return new uR("arrayRemove",n)}function UR(n){return new hR("increment",n)}(function(e,t=!0){(function(s){Si=s})(xr),pr(new bn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ze(new HA(r.getProvider("auth-internal")),new XA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new T(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vr(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),En(Tm,"4.1.0",e),En(Tm,"4.1.0","esm2017")})();const $R="@firebase/firestore-compat",BR="0.3.14";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){if(typeof Uint8Array>"u")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function Cg(){if(!b6())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Zo{constructor(e){this._delegate=e}static fromBase64String(e){return Cg(),new Zo(xn.fromBase64String(e))}static fromUint8Array(e){return Sg(),new Zo(xn.fromUint8Array(e))}toBase64(){return Cg(),this._delegate.toBase64()}toUint8Array(){return Sg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n){return jR(n,["next","error","complete"])}function jR(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{enableIndexedDbPersistence(e,t){return X5(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Z5(e._delegate)}clearIndexedDbPersistence(e){return eR(e._delegate)}}class qv{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof vr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&sn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){W5(this._delegate,e,t,r)}enableNetwork(){return nR(this._delegate)}disableNetwork(){return rR(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,vv("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return tR(this._delegate)}onSnapshotsInSync(e){return CR(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new yi(this,zf(this._delegate,e))}catch(t){throw Rt(t,"collection()","Firestore.collection()")}}doc(e){try{return new Wt(this,_i(this._delegate,e))}catch(t){throw Rt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new At(this,H5(this._delegate,e))}catch(t){throw Rt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return VR(this._delegate,t=>e(new zv(this,t)))}batch(){return ht(this._delegate),new Gv(new DR(this._delegate,e=>La(this._delegate,e)))}loadBundle(e){return sR(this._delegate,e)}namedQuery(e){return iR(this._delegate,e).then(t=>t?new At(this,t):null)}}class tu extends Zf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zo(new xn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Wt.forKey(t,this.firestore,null)}}function zR(n){zA(n)}class zv{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new tu(e)}get(e){const t=ts(e);return this._delegate.get(t).then(r=>new ea(this._firestore,new Un(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=ts(e);return r?(tp("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=ts(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=ts(e);return this._delegate.delete(t),this}}class Gv{constructor(e){this._delegate=e}set(e,t,r){const s=ts(e);return r?(tp("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=ts(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=ts(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Es{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Io(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ta(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Es.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(t);return i||(i=new Es(e,new tu(e),t),s.set(t,i)),i}}Es.INSTANCES=new WeakMap;class Wt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tu(e)}static forPath(e,t,r){if(e.length%2!==0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Wt(t,new Ue(t._delegate,r,new N(e)))}static forKey(e,t,r){return new Wt(t,new Ue(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new yi(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new yi(this.firestore,zf(this._delegate,e))}catch(t){throw Rt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Q(e),e instanceof Ue?bv(this._delegate,e):!1}set(e,t){t=tp("DocumentReference.set",t);try{return t?xg(this._delegate,e,t):xg(this._delegate,e)}catch(r){throw Rt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Pg(this._delegate,e):Pg(this._delegate,e,t,...r)}catch(s){throw Rt(s,"updateDoc()","DocumentReference.update()")}}delete(){return PR(this._delegate)}onSnapshot(...e){const t=Kv(e),r=Wv(e,s=>new ea(this.firestore,new Un(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return jv(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=bR(this._delegate):(e==null?void 0:e.source)==="server"?t=AR(this._delegate):t=qh(this._delegate),t.then(r=>new ea(this.firestore,new Un(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Wt(this.firestore,e?this._delegate.withConverter(Es.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Rt(n,e,t){return n.message=n.message.replace(e,t),n}function Kv(n){for(const e of n)if(typeof e=="object"&&!zh(e))return e;return{}}function Wv(n,e){var t,r;let s;return zh(n[0])?s=n[0]:zh(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class ea{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Wt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return $v(this._delegate,e._delegate)}}class ta extends ea{data(e){const t=this._delegate.data(e);return GA(t!==void 0),t}}class At{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tu(e)}where(e,t,r){try{return new At(this.firestore,Zn(this._delegate,pR(e,t,r)))}catch(s){throw Rt(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new At(this.firestore,Zn(this._delegate,mR(e,t)))}catch(r){throw Rt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new At(this.firestore,Zn(this._delegate,gR(e)))}catch(t){throw Rt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new At(this.firestore,Zn(this._delegate,_R(e)))}catch(t){throw Rt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new At(this.firestore,Zn(this._delegate,yR(...e)))}catch(t){throw Rt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new At(this.firestore,Zn(this._delegate,vR(...e)))}catch(t){throw Rt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new At(this.firestore,Zn(this._delegate,wR(...e)))}catch(t){throw Rt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new At(this.firestore,Zn(this._delegate,IR(...e)))}catch(t){throw Rt(t,"endAt()","Query.endAt()")}}isEqual(e){return Av(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=RR(this._delegate):(e==null?void 0:e.source)==="server"?t=xR(this._delegate):t=Bv(this._delegate),t.then(r=>new Gh(this.firestore,new br(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Kv(e),r=Wv(e,s=>new Gh(this.firestore,new br(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return jv(this._delegate,t,r)}withConverter(e){return new At(this.firestore,e?this._delegate.withConverter(Es.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class GR{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ta(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Gh{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new At(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ta(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new GR(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ta(this._firestore,r))})}isEqual(e){return $v(this._delegate,e._delegate)}}class yi extends At{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Wt(this.firestore,e):null}doc(e){try{return e===void 0?new Wt(this.firestore,_i(this._delegate)):new Wt(this.firestore,_i(this._delegate,e))}catch(t){throw Rt(t,"doc()","CollectionReference.doc()")}}add(e){return SR(this._delegate,e).then(t=>new Wt(this.firestore,t))}isEqual(e){return bv(this._delegate,e._delegate)}withConverter(e){return new yi(this.firestore,e?this._delegate.withConverter(Es.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ts(n){return ve(n,Ue)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(...e){this._delegate=new Tr(...e)}static documentId(){return new np(Ke.keyField().canonicalString())}isEqual(e){return e=Q(e),e instanceof Tr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this._delegate=e}static serverTimestamp(){const e=MR();return e._methodName="FieldValue.serverTimestamp",new Wr(e)}static delete(){const e=OR();return e._methodName="FieldValue.delete",new Wr(e)}static arrayUnion(...e){const t=LR(...e);return t._methodName="FieldValue.arrayUnion",new Wr(t)}static arrayRemove(...e){const t=FR(...e);return t._methodName="FieldValue.arrayRemove",new Wr(t)}static increment(e){const t=UR(e);return t._methodName="FieldValue.increment",new Wr(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={Firestore:qv,GeoPoint:Kl,Timestamp:Le,Blob:Zo,Transaction:zv,WriteBatch:Gv,DocumentReference:Wt,DocumentSnapshot:ea,Query:At,QueryDocumentSnapshot:ta,QuerySnapshot:Gh,CollectionReference:yi,FieldPath:np,FieldValue:Wr,setLogLevel:zR,CACHE_SIZE_UNLIMITED:J5};function WR(n,e){n.INTERNAL.registerComponent(new bn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},KR)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(n){WR(n,(e,t)=>new qv(e,t,new qR)),n.registerVersion($R,BR)}HR(Pr);const QR={apiKey:"AIzaSyD5breK_Vk9VV7AHQEeN8_tQv-9mHyrWIw",authDomain:"sharehouse-96ee0.firebaseapp.com",projectId:"sharehouse-96ee0",storageBucket:"sharehouse-96ee0.appspot.com",messagingSenderId:"172112341807",appId:"1:172112341807:web:1718f46cc281c56a36cfda"};Pr.initializeApp(QR);const na=Pr.auth(),Jc=Pr.firestore(),YR=Jc.collection("users");function rp(n,e){const t=Object.create(null),r=n.split(",");for(let s=0;s<r.length;s++)t[r[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Se={},ei=[],en=()=>{},JR=()=>!1,XR=/^on[^a-z]/,nu=n=>XR.test(n),sp=n=>n.startsWith("onUpdate:"),vt=Object.assign,ip=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ZR=Object.prototype.hasOwnProperty,_e=(n,e)=>ZR.call(n,e),Y=Array.isArray,ti=n=>Fa(n)==="[object Map]",ru=n=>Fa(n)==="[object Set]",kg=n=>Fa(n)==="[object Date]",ae=n=>typeof n=="function",tt=n=>typeof n=="string",ra=n=>typeof n=="symbol",Ve=n=>n!==null&&typeof n=="object",Hv=n=>Ve(n)&&ae(n.then)&&ae(n.catch),Qv=Object.prototype.toString,Fa=n=>Qv.call(n),ex=n=>Fa(n).slice(8,-1),Yv=n=>Fa(n)==="[object Object]",op=n=>tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,vc=rp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),su=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},tx=/-(\w)/g,Pn=su(n=>n.replace(tx,(e,t)=>t?t.toUpperCase():"")),nx=/\B([A-Z])/g,Li=su(n=>n.replace(nx,"-$1").toLowerCase()),iu=su(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ku=su(n=>n?`on${iu(n)}`:""),sa=(n,e)=>!Object.is(n,e),wc=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Xc=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Zc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Dg;const Kh=()=>Dg||(Dg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ap(n){if(Y(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=tt(r)?ox(r):ap(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(tt(n))return n;if(Ve(n))return n}}const rx=/;(?![^(]*\))/g,sx=/:([^]+)/,ix=/\/\*[^]*?\*\//g;function ox(n){const e={};return n.replace(ix,"").split(rx).forEach(t=>{if(t){const r=t.split(sx);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pe(n){let e="";if(tt(n))e=n;else if(Y(n))for(let t=0;t<n.length;t++){const r=pe(n[t]);r&&(e+=r+" ")}else if(Ve(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ax="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cx=rp(ax);function Jv(n){return!!n||n===""}function lx(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=ou(n[r],e[r]);return t}function ou(n,e){if(n===e)return!0;let t=kg(n),r=kg(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=ra(n),r=ra(e),t||r)return n===e;if(t=Y(n),r=Y(e),t||r)return t&&r?lx(n,e):!1;if(t=Ve(n),r=Ve(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ou(n[o],e[o]))return!1}}return String(n)===String(e)}function ux(n,e){return n.findIndex(t=>ou(t,e))}const ie=n=>tt(n)?n:n==null?"":Y(n)||Ve(n)&&(n.toString===Qv||!ae(n.toString))?JSON.stringify(n,Xv,2):String(n),Xv=(n,e)=>e&&e.__v_isRef?Xv(n,e.value):ti(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s])=>(t[`${r} =>`]=s,t),{})}:ru(e)?{[`Set(${e.size})`]:[...e.values()]}:Ve(e)&&!Y(e)&&!Yv(e)?String(e):e;let Bt;class Zv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ew(n){return new Zv(n)}function hx(n,e=Bt){e&&e.active&&e.effects.push(n)}function tw(){return Bt}function dx(n){Bt&&Bt.cleanups.push(n)}const cp=n=>{const e=new Set(n);return e.w=0,e.n=0,e},nw=n=>(n.w&Ar)>0,rw=n=>(n.n&Ar)>0,fx=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Ar},px=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const s=e[r];nw(s)&&!rw(s)?s.delete(n):e[t++]=s,s.w&=~Ar,s.n&=~Ar}e.length=t}},el=new WeakMap;let lo=0,Ar=1;const Wh=30;let Jt;const cs=Symbol(""),Hh=Symbol("");class lp{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,hx(this,r)}run(){if(!this.active)return this.fn();let e=Jt,t=lr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Jt,Jt=this,lr=!0,Ar=1<<++lo,lo<=Wh?fx(this):Ng(this),this.fn()}finally{lo<=Wh&&px(this),Ar=1<<--lo,Jt=this.parent,lr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Jt===this?this.deferStop=!0:this.active&&(Ng(this),this.onStop&&this.onStop(),this.active=!1)}}function Ng(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let lr=!0;const sw=[];function Fi(){sw.push(lr),lr=!1}function Ui(){const n=sw.pop();lr=n===void 0?!0:n}function Ft(n,e,t){if(lr&&Jt){let r=el.get(n);r||el.set(n,r=new Map);let s=r.get(t);s||r.set(t,s=cp()),iw(s)}}function iw(n,e){let t=!1;lo<=Wh?rw(n)||(n.n|=Ar,t=!nw(n)):t=!n.has(Jt),t&&(n.add(Jt),Jt.deps.push(n))}function $n(n,e,t,r,s,i){const o=el.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Y(n)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Y(n)?op(t)&&a.push(o.get("length")):(a.push(o.get(cs)),ti(n)&&a.push(o.get(Hh)));break;case"delete":Y(n)||(a.push(o.get(cs)),ti(n)&&a.push(o.get(Hh)));break;case"set":ti(n)&&a.push(o.get(cs));break}if(a.length===1)a[0]&&Qh(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Qh(cp(c))}}function Qh(n,e){const t=Y(n)?n:[...n];for(const r of t)r.computed&&Vg(r);for(const r of t)r.computed||Vg(r)}function Vg(n,e){(n!==Jt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function mx(n,e){var t;return(t=el.get(n))==null?void 0:t.get(e)}const gx=rp("__proto__,__v_isRef,__isVue"),ow=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ra)),_x=up(),yx=up(!1,!0),vx=up(!0),Og=wx();function wx(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=we(this);for(let i=0,o=this.length;i<o;i++)Ft(r,"get",i+"");const s=r[e](...t);return s===-1||s===!1?r[e](...t.map(we)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Fi();const r=we(this)[e].apply(this,t);return Ui(),r}}),n}function Ix(n){const e=we(this);return Ft(e,"has",n),e.hasOwnProperty(n)}function up(n=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(n?e?Lx:hw:e?uw:lw).get(r))return r;const o=Y(r);if(!n){if(o&&_e(Og,s))return Reflect.get(Og,s,i);if(s==="hasOwnProperty")return Ix}const a=Reflect.get(r,s,i);return(ra(s)?ow.has(s):gx(s))||(n||Ft(r,"get",s),e)?a:We(a)?o&&op(s)?a:a.value:Ve(a)?n?dw(a):cu(a):a}}const Ex=aw(),Tx=aw(!0);function aw(n=!1){return function(t,r,s,i){let o=t[r];if(vi(o)&&We(o)&&!We(s))return!1;if(!n&&(!tl(s)&&!vi(s)&&(o=we(o),s=we(s)),!Y(t)&&We(o)&&!We(s)))return o.value=s,!0;const a=Y(t)&&op(r)?Number(r)<t.length:_e(t,r),c=Reflect.set(t,r,s,i);return t===we(i)&&(a?sa(s,o)&&$n(t,"set",r,s):$n(t,"add",r,s)),c}}function bx(n,e){const t=_e(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&$n(n,"delete",e,void 0),r}function Ax(n,e){const t=Reflect.has(n,e);return(!ra(e)||!ow.has(e))&&Ft(n,"has",e),t}function Rx(n){return Ft(n,"iterate",Y(n)?"length":cs),Reflect.ownKeys(n)}const cw={get:_x,set:Ex,deleteProperty:bx,has:Ax,ownKeys:Rx},xx={get:vx,set(n,e){return!0},deleteProperty(n,e){return!0}},Px=vt({},cw,{get:yx,set:Tx}),hp=n=>n,au=n=>Reflect.getPrototypeOf(n);function ec(n,e,t=!1,r=!1){n=n.__v_raw;const s=we(n),i=we(e);t||(e!==i&&Ft(s,"get",e),Ft(s,"get",i));const{has:o}=au(s),a=r?hp:t?pp:ia;if(o.call(s,e))return a(n.get(e));if(o.call(s,i))return a(n.get(i));n!==s&&n.get(e)}function tc(n,e=!1){const t=this.__v_raw,r=we(t),s=we(n);return e||(n!==s&&Ft(r,"has",n),Ft(r,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function nc(n,e=!1){return n=n.__v_raw,!e&&Ft(we(n),"iterate",cs),Reflect.get(n,"size",n)}function Mg(n){n=we(n);const e=we(this);return au(e).has.call(e,n)||(e.add(n),$n(e,"add",n,n)),this}function Lg(n,e){e=we(e);const t=we(this),{has:r,get:s}=au(t);let i=r.call(t,n);i||(n=we(n),i=r.call(t,n));const o=s.call(t,n);return t.set(n,e),i?sa(e,o)&&$n(t,"set",n,e):$n(t,"add",n,e),this}function Fg(n){const e=we(this),{has:t,get:r}=au(e);let s=t.call(e,n);s||(n=we(n),s=t.call(e,n)),r&&r.call(e,n);const i=e.delete(n);return s&&$n(e,"delete",n,void 0),i}function Ug(){const n=we(this),e=n.size!==0,t=n.clear();return e&&$n(n,"clear",void 0,void 0),t}function rc(n,e){return function(r,s){const i=this,o=i.__v_raw,a=we(o),c=e?hp:n?pp:ia;return!n&&Ft(a,"iterate",cs),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function sc(n,e,t){return function(...r){const s=this.__v_raw,i=we(s),o=ti(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...r),u=t?hp:e?pp:ia;return!e&&Ft(i,"iterate",c?Hh:cs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function er(n){return function(...e){return n==="delete"?!1:this}}function Sx(){const n={get(i){return ec(this,i)},get size(){return nc(this)},has:tc,add:Mg,set:Lg,delete:Fg,clear:Ug,forEach:rc(!1,!1)},e={get(i){return ec(this,i,!1,!0)},get size(){return nc(this)},has:tc,add:Mg,set:Lg,delete:Fg,clear:Ug,forEach:rc(!1,!0)},t={get(i){return ec(this,i,!0)},get size(){return nc(this,!0)},has(i){return tc.call(this,i,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:rc(!0,!1)},r={get(i){return ec(this,i,!0,!0)},get size(){return nc(this,!0)},has(i){return tc.call(this,i,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:rc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=sc(i,!1,!1),t[i]=sc(i,!0,!1),e[i]=sc(i,!1,!0),r[i]=sc(i,!0,!0)}),[n,t,e,r]}const[Cx,kx,Dx,Nx]=Sx();function dp(n,e){const t=e?n?Nx:Dx:n?kx:Cx;return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(_e(t,s)&&s in r?t:r,s,i)}const Vx={get:dp(!1,!1)},Ox={get:dp(!1,!0)},Mx={get:dp(!0,!1)},lw=new WeakMap,uw=new WeakMap,hw=new WeakMap,Lx=new WeakMap;function Fx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ux(n){return n.__v_skip||!Object.isExtensible(n)?0:Fx(ex(n))}function cu(n){return vi(n)?n:fp(n,!1,cw,Vx,lw)}function $x(n){return fp(n,!1,Px,Ox,uw)}function dw(n){return fp(n,!0,xx,Mx,hw)}function fp(n,e,t,r,s){if(!Ve(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const o=Ux(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return s.set(n,a),a}function ur(n){return vi(n)?ur(n.__v_raw):!!(n&&n.__v_isReactive)}function vi(n){return!!(n&&n.__v_isReadonly)}function tl(n){return!!(n&&n.__v_isShallow)}function fw(n){return ur(n)||vi(n)}function we(n){const e=n&&n.__v_raw;return e?we(e):n}function lu(n){return Xc(n,"__v_skip",!0),n}const ia=n=>Ve(n)?cu(n):n,pp=n=>Ve(n)?dw(n):n;function pw(n){lr&&Jt&&(n=we(n),iw(n.dep||(n.dep=cp())))}function mw(n,e){n=we(n);const t=n.dep;t&&Qh(t)}function We(n){return!!(n&&n.__v_isRef===!0)}function gw(n){return Bx(n,!1)}function Bx(n,e){return We(n)?n:new jx(n,e)}class jx{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:we(e),this._value=t?e:ia(e)}get value(){return pw(this),this._value}set value(e){const t=this.__v_isShallow||tl(e)||vi(e);e=t?e:we(e),sa(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ia(e),mw(this))}}function qx(n){return We(n)?n.value:n}const zx={get:(n,e,t)=>qx(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return We(s)&&!We(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function _w(n){return ur(n)?n:new Proxy(n,zx)}function Gx(n){const e=Y(n)?new Array(n.length):{};for(const t in n)e[t]=Wx(n,t);return e}class Kx{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return mx(we(this._object),this._key)}}function Wx(n,e,t){const r=n[e];return We(r)?r:new Kx(n,e,t)}class Hx{constructor(e,t,r,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new lp(e,()=>{this._dirty||(this._dirty=!0,mw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=we(this);return pw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qx(n,e,t=!1){let r,s;const i=ae(n);return i?(r=n,s=en):(r=n.get,s=n.set),new Hx(r,s,i||!s,t)}function hr(n,e,t,r){let s;try{s=r?n(...r):n()}catch(i){uu(i,e,t)}return s}function tn(n,e,t,r){if(ae(n)){const i=hr(n,e,t,r);return i&&Hv(i)&&i.catch(o=>{uu(o,e,t)}),i}const s=[];for(let i=0;i<n.length;i++)s.push(tn(n[i],e,t,r));return s}function uu(n,e,t,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=t;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){hr(c,null,10,[n,o,a]);return}}Yx(n,t,s,r)}function Yx(n,e,t,r=!0){console.error(n)}let oa=!1,Yh=!1;const It=[];let gn=0;const ni=[];let kn=null,Hr=0;const yw=Promise.resolve();let mp=null;function vw(n){const e=mp||yw;return n?e.then(this?n.bind(this):n):e}function Jx(n){let e=gn+1,t=It.length;for(;e<t;){const r=e+t>>>1;aa(It[r])<n?e=r+1:t=r}return e}function gp(n){(!It.length||!It.includes(n,oa&&n.allowRecurse?gn+1:gn))&&(n.id==null?It.push(n):It.splice(Jx(n.id),0,n),ww())}function ww(){!oa&&!Yh&&(Yh=!0,mp=yw.then(Ew))}function Xx(n){const e=It.indexOf(n);e>gn&&It.splice(e,1)}function Zx(n){Y(n)?ni.push(...n):(!kn||!kn.includes(n,n.allowRecurse?Hr+1:Hr))&&ni.push(n),ww()}function $g(n,e=oa?gn+1:0){for(;e<It.length;e++){const t=It[e];t&&t.pre&&(It.splice(e,1),e--,t())}}function Iw(n){if(ni.length){const e=[...new Set(ni)];if(ni.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((t,r)=>aa(t)-aa(r)),Hr=0;Hr<kn.length;Hr++)kn[Hr]();kn=null,Hr=0}}const aa=n=>n.id==null?1/0:n.id,e8=(n,e)=>{const t=aa(n)-aa(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Ew(n){Yh=!1,oa=!0,It.sort(e8);const e=en;try{for(gn=0;gn<It.length;gn++){const t=It[gn];t&&t.active!==!1&&hr(t,null,14)}}finally{gn=0,It.length=0,Iw(),oa=!1,mp=null,(It.length||ni.length)&&Ew()}}function t8(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Se;let s=t;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Se;d&&(s=t.map(m=>tt(m)?m.trim():m)),h&&(s=t.map(Zc))}let a,c=r[a=Ku(e)]||r[a=Ku(Pn(e))];!c&&i&&(c=r[a=Ku(Li(e))]),c&&tn(c,n,6,s);const l=r[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,tn(l,n,6,s)}}function Tw(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},a=!1;if(!ae(n)){const c=l=>{const u=Tw(l,e,!0);u&&(a=!0,vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(Ve(n)&&r.set(n,null),null):(Y(i)?i.forEach(c=>o[c]=null):vt(o,i),Ve(n)&&r.set(n,o),o)}function hu(n,e){return!n||!nu(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(n,e[0].toLowerCase()+e.slice(1))||_e(n,Li(e))||_e(n,e))}let mt=null,bw=null;function nl(n){const e=mt;return mt=n,bw=n&&n.type.__scopeId||null,e}function Aw(n,e=mt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Jg(-1);const i=nl(e);let o;try{o=n(...s)}finally{nl(i),r._d&&Jg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Wu(n){const{type:e,vnode:t,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:E,inheritAttrs:w}=n;let b,$;const K=nl(n);try{if(t.shapeFlag&4){const F=s||r;b=un(u.call(F,F,h,i,m,d,E)),$=c}else{const F=e;b=un(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),$=e.props?c:n8(c)}}catch(F){Ao.length=0,uu(F,n,1),b=oe(Rr)}let B=b;if($&&w!==!1){const F=Object.keys($),{shapeFlag:J}=B;F.length&&J&7&&(o&&F.some(sp)&&($=r8($,o)),B=wi(B,$))}return t.dirs&&(B=wi(B),B.dirs=B.dirs?B.dirs.concat(t.dirs):t.dirs),t.transition&&(B.transition=t.transition),b=B,nl(K),b}const n8=n=>{let e;for(const t in n)(t==="class"||t==="style"||nu(t))&&((e||(e={}))[t]=n[t]);return e},r8=(n,e)=>{const t={};for(const r in n)(!sp(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function s8(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Bg(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!hu(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bg(r,o,l):!0:!!o;return!1}function Bg(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!hu(t,i))return!0}return!1}function i8({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const o8=n=>n.__isSuspense;function a8(n,e){e&&e.pendingBranch?Y(n)?e.effects.push(...n):e.effects.push(n):Zx(n)}const ic={};function Ic(n,e,t){return Rw(n,e,t)}function Rw(n,e,{immediate:t,deep:r,flush:s,onTrack:i,onTrigger:o}=Se){var a;const c=tw()===((a=ot)==null?void 0:a.scope)?ot:null;let l,u=!1,h=!1;if(We(n)?(l=()=>n.value,u=tl(n)):ur(n)?(l=()=>n,r=!0):Y(n)?(h=!0,u=n.some(F=>ur(F)||tl(F)),l=()=>n.map(F=>{if(We(F))return F.value;if(ur(F))return ns(F);if(ae(F))return hr(F,c,2)})):ae(n)?e?l=()=>hr(n,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),tn(n,c,3,[m])}:l=en,e&&r){const F=l;l=()=>ns(F())}let d,m=F=>{d=K.onStop=()=>{hr(F,c,4)}},E;if(ua)if(m=en,e?t&&tn(e,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const F=r9();E=F.__watcherHandles||(F.__watcherHandles=[])}else return en;let w=h?new Array(n.length).fill(ic):ic;const b=()=>{if(K.active)if(e){const F=K.run();(r||u||(h?F.some((J,re)=>sa(J,w[re])):sa(F,w)))&&(d&&d(),tn(e,c,3,[F,w===ic?void 0:h&&w[0]===ic?[]:w,m]),w=F)}else K.run()};b.allowRecurse=!!e;let $;s==="sync"?$=b:s==="post"?$=()=>kt(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),$=()=>gp(b));const K=new lp(l,$);e?t?b():w=K.run():s==="post"?kt(K.run.bind(K),c&&c.suspense):K.run();const B=()=>{K.stop(),c&&c.scope&&ip(c.scope.effects,K)};return E&&E.push(B),B}function c8(n,e,t){const r=this.proxy,s=tt(n)?n.includes(".")?xw(r,n):()=>r[n]:n.bind(r,r);let i;ae(e)?i=e:(i=e.handler,t=e);const o=ot;Ii(this);const a=Rw(s,i.bind(r),t);return o?Ii(o):ls(),a}function xw(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}function ns(n,e){if(!Ve(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),We(n))ns(n.value,e);else if(Y(n))for(let t=0;t<n.length;t++)ns(n[t],e);else if(ru(n)||ti(n))n.forEach(t=>{ns(t,e)});else if(Yv(n))for(const t in n)ns(n[t],e);return n}function Oe(n,e){const t=mt;if(t===null)return n;const r=mu(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Se]=e[i];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&ns(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function Ur(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Fi(),tn(c,t,8,[n.el,a,n,e]),Ui())}}const Eo=n=>!!n.type.__asyncLoader,Pw=n=>n.type.__isKeepAlive;function l8(n,e){Sw(n,"a",e)}function u8(n,e){Sw(n,"da",e)}function Sw(n,e,t=ot){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(du(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Pw(s.parent.vnode)&&h8(r,e,t,s),s=s.parent}}function h8(n,e,t,r){const s=du(e,n,r,!0);Cw(()=>{ip(r[e],s)},t)}function du(n,e,t=ot,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Fi(),Ii(t);const a=tn(e,t,n,o);return ls(),Ui(),a});return r?s.unshift(i):s.push(i),i}}const Hn=n=>(e,t=ot)=>(!ua||n==="sp")&&du(n,(...r)=>e(...r),t),d8=Hn("bm"),f8=Hn("m"),p8=Hn("bu"),m8=Hn("u"),g8=Hn("bum"),Cw=Hn("um"),_8=Hn("sp"),y8=Hn("rtg"),v8=Hn("rtc");function w8(n,e=ot){du("ec",n,e)}const kw="components";function z(n,e){return E8(kw,n,!0,e)||n}const I8=Symbol.for("v-ndc");function E8(n,e,t=!0,r=!1){const s=mt||ot;if(s){const i=s.type;if(n===kw){const a=e9(i,!1);if(a&&(a===e||a===Pn(e)||a===iu(Pn(e))))return i}const o=jg(s[n]||i[n],e)||jg(s.appContext[n],e);return!o&&r?i:o}}function jg(n,e){return n&&(n[e]||n[Pn(e)]||n[iu(Pn(e))])}function Bn(n,e,t,r){let s;const i=t&&t[r];if(Y(n)||tt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,i&&i[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ve(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(n[l],l,a,i&&i[a])}}else s=[];return t&&(t[r]=s),s}function T8(n,e,t={},r,s){if(mt.isCE||mt.parent&&Eo(mt.parent)&&mt.parent.isCE)return e!=="default"&&(t.name=e),oe("slot",t,r&&r());let i=n[e];i&&i._c&&(i._d=!1),v();const o=i&&Dw(i(t)),a=me(De,{key:t.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&n._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Dw(n){return n.some(e=>jw(e)?!(e.type===Rr||e.type===De&&!Dw(e.children)):!0)?n:null}const Jh=n=>n?zw(n)?mu(n)||n.proxy:Jh(n.parent):null,To=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Jh(n.parent),$root:n=>Jh(n.root),$emit:n=>n.emit,$options:n=>_p(n),$forceUpdate:n=>n.f||(n.f=()=>gp(n.update)),$nextTick:n=>n.n||(n.n=vw.bind(n.proxy)),$watch:n=>c8.bind(n)}),Hu=(n,e)=>n!==Se&&!n.__isScriptSetup&&_e(n,e),b8={get({_:n},e){const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Hu(r,e))return o[e]=1,r[e];if(s!==Se&&_e(s,e))return o[e]=2,s[e];if((l=n.propsOptions[0])&&_e(l,e))return o[e]=3,i[e];if(t!==Se&&_e(t,e))return o[e]=4,t[e];Xh&&(o[e]=0)}}const u=To[e];let h,d;if(u)return e==="$attrs"&&Ft(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Se&&_e(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,_e(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Hu(s,e)?(s[e]=t,!0):r!==Se&&_e(r,e)?(r[e]=t,!0):_e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!t[o]||n!==Se&&_e(n,o)||Hu(e,o)||(a=i[0])&&_e(a,o)||_e(r,o)||_e(To,o)||_e(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:_e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function qg(n){return Y(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Xh=!0;function A8(n){const e=_p(n),t=n.proxy,r=n.ctx;Xh=!1,e.beforeCreate&&zg(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:E,activated:w,deactivated:b,beforeDestroy:$,beforeUnmount:K,destroyed:B,unmounted:F,render:J,renderTracked:re,renderTriggered:Te,errorCaptured:ce,serverPrefetch:le,expose:Fe,inheritAttrs:Ut,components:on,directives:Ds,filters:$i}=e;if(l&&R8(l,r,null),o)for(const Be in o){const Re=o[Be];ae(Re)&&(r[Be]=Re.bind(t))}if(s){const Be=s.call(t,t);Ve(Be)&&(n.data=cu(Be))}if(Xh=!0,i)for(const Be in i){const Re=i[Be],Mr=ae(Re)?Re.bind(t,t):ae(Re.get)?Re.get.bind(t,t):en,Ua=!ae(Re)&&ae(Re.set)?Re.set.bind(t):en,Lr=Kw({get:Mr,set:Ua});Object.defineProperty(r,Be,{enumerable:!0,configurable:!0,get:()=>Lr.value,set:an=>Lr.value=an})}if(a)for(const Be in a)Nw(a[Be],r,t,Be);if(c){const Be=ae(c)?c.call(t):c;Reflect.ownKeys(Be).forEach(Re=>{D8(Re,Be[Re])})}u&&zg(u,n,"c");function be(Be,Re){Y(Re)?Re.forEach(Mr=>Be(Mr.bind(t))):Re&&Be(Re.bind(t))}if(be(d8,h),be(f8,d),be(p8,m),be(m8,E),be(l8,w),be(u8,b),be(w8,ce),be(v8,re),be(y8,Te),be(g8,K),be(Cw,F),be(_8,le),Y(Fe))if(Fe.length){const Be=n.exposed||(n.exposed={});Fe.forEach(Re=>{Object.defineProperty(Be,Re,{get:()=>t[Re],set:Mr=>t[Re]=Mr})})}else n.exposed||(n.exposed={});J&&n.render===en&&(n.render=J),Ut!=null&&(n.inheritAttrs=Ut),on&&(n.components=on),Ds&&(n.directives=Ds)}function R8(n,e,t=en){Y(n)&&(n=Zh(n));for(const r in n){const s=n[r];let i;Ve(s)?"default"in s?i=bo(s.from||r,s.default,!0):i=bo(s.from||r):i=bo(s),We(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function zg(n,e,t){tn(Y(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nw(n,e,t,r){const s=r.includes(".")?xw(t,r):()=>t[r];if(tt(n)){const i=e[n];ae(i)&&Ic(s,i)}else if(ae(n))Ic(s,n.bind(t));else if(Ve(n))if(Y(n))n.forEach(i=>Nw(i,e,t,r));else{const i=ae(n.handler)?n.handler.bind(t):e[n.handler];ae(i)&&Ic(s,i,n)}}function _p(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(l=>rl(c,l,o,!0)),rl(c,e,o)),Ve(e)&&i.set(e,c),c}function rl(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&rl(n,i,t,!0),s&&s.forEach(o=>rl(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=x8[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const x8={data:Gg,props:Kg,emits:Kg,methods:uo,computed:uo,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:uo,directives:uo,watch:S8,provide:Gg,inject:P8};function Gg(n,e){return e?n?function(){return vt(ae(n)?n.call(this,this):n,ae(e)?e.call(this,this):e)}:e:n}function P8(n,e){return uo(Zh(n),Zh(e))}function Zh(n){if(Y(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function uo(n,e){return n?vt(Object.create(null),n,e):e}function Kg(n,e){return n?Y(n)&&Y(e)?[...new Set([...n,...e])]:vt(Object.create(null),qg(n),qg(e??{})):e}function S8(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const r in e)t[r]=bt(n[r],e[r]);return t}function Vw(){return{app:null,config:{isNativeTag:JR,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let C8=0;function k8(n,e){return function(r,s=null){ae(r)||(r=vt({},r)),s!=null&&!Ve(s)&&(s=null);const i=Vw(),o=new Set;let a=!1;const c=i.app={_uid:C8++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:s9,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ae(l.install)?(o.add(l),l.install(c,...u)):ae(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=oe(r,s);return d.appContext=i,u&&e?e(d,l):n(d,l,h),a=!0,c._container=l,l.__vue_app__=c,mu(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){ca=c;try{return l()}finally{ca=null}}};return c}}let ca=null;function D8(n,e){if(ot){let t=ot.provides;const r=ot.parent&&ot.parent.provides;r===t&&(t=ot.provides=Object.create(r)),t[n]=e}}function bo(n,e,t=!1){const r=ot||mt;if(r||ca){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ca._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ae(e)?e.call(r&&r.proxy):e}}function N8(){return!!(ot||mt||ca)}function V8(n,e,t,r=!1){const s={},i={};Xc(i,pu,1),n.propsDefaults=Object.create(null),Ow(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:$x(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function O8(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,a=we(s),[c]=n.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(hu(n.emitsOptions,d))continue;const m=e[d];if(c)if(_e(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const E=Pn(d);s[E]=ed(c,a,E,m,n,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Ow(n,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!_e(e,h)&&((u=Li(h))===h||!_e(e,u)))&&(c?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=ed(c,a,h,void 0,n,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!_e(e,h))&&(delete i[h],l=!0)}l&&$n(n,"set","$attrs")}function Ow(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(vc(c))continue;const l=e[c];let u;s&&_e(s,u=Pn(c))?!i||!i.includes(u)?t[u]=l:(a||(a={}))[u]=l:hu(n.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=we(t),l=a||Se;for(let u=0;u<i.length;u++){const h=i[u];t[h]=ed(s,c,h,l[h],n,!_e(l,h))}}return o}function ed(n,e,t,r,s,i){const o=n[t];if(o!=null){const a=_e(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ae(c)){const{propsDefaults:l}=s;t in l?r=l[t]:(Ii(s),r=l[t]=c.call(null,e),ls())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Li(t))&&(r=!0))}return r}function Mw(n,e,t=!1){const r=e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},a=[];let c=!1;if(!ae(n)){const u=h=>{c=!0;const[d,m]=Mw(h,e,!0);vt(o,d),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!i&&!c)return Ve(n)&&r.set(n,ei),ei;if(Y(i))for(let u=0;u<i.length;u++){const h=Pn(i[u]);Wg(h)&&(o[h]=Se)}else if(i)for(const u in i){const h=Pn(u);if(Wg(h)){const d=i[u],m=o[h]=Y(d)||ae(d)?{type:d}:vt({},d);if(m){const E=Yg(Boolean,m.type),w=Yg(String,m.type);m[0]=E>-1,m[1]=w<0||E<w,(E>-1||_e(m,"default"))&&a.push(h)}}}const l=[o,a];return Ve(n)&&r.set(n,l),l}function Wg(n){return n[0]!=="$"}function Hg(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Qg(n,e){return Hg(n)===Hg(e)}function Yg(n,e){return Y(e)?e.findIndex(t=>Qg(t,n)):ae(e)&&Qg(e,n)?0:-1}const Lw=n=>n[0]==="_"||n==="$stable",yp=n=>Y(n)?n.map(un):[un(n)],M8=(n,e,t)=>{if(e._n)return e;const r=Aw((...s)=>yp(e(...s)),t);return r._c=!1,r},Fw=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Lw(s))continue;const i=n[s];if(ae(i))e[s]=M8(s,i,r);else if(i!=null){const o=yp(i);e[s]=()=>o}}},Uw=(n,e)=>{const t=yp(e);n.slots.default=()=>t},L8=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=we(e),Xc(e,"_",t)):Fw(e,n.slots={})}else n.slots={},e&&Uw(n,e);Xc(n.slots,pu,1)},F8=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Se;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:(vt(s,e),!t&&a===1&&delete s._):(i=!e.$stable,Fw(e,s)),o=e}else e&&(Uw(n,e),o={default:1});if(i)for(const a in s)!Lw(a)&&!(a in o)&&delete s[a]};function td(n,e,t,r,s=!1){if(Y(n)){n.forEach((d,m)=>td(d,e&&(Y(e)?e[m]:e),t,r,s));return}if(Eo(r)&&!s)return;const i=r.shapeFlag&4?mu(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=n,l=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(tt(l)?(u[l]=null,_e(h,l)&&(h[l]=null)):We(l)&&(l.value=null)),ae(c))hr(c,a,12,[o,u]);else{const d=tt(c),m=We(c);if(d||m){const E=()=>{if(n.f){const w=d?_e(h,c)?h[c]:u[c]:c.value;s?Y(w)&&ip(w,i):Y(w)?w.includes(i)||w.push(i):d?(u[c]=[i],_e(h,c)&&(h[c]=u[c])):(c.value=[i],n.k&&(u[n.k]=c.value))}else d?(u[c]=o,_e(h,c)&&(h[c]=o)):m&&(c.value=o,n.k&&(u[n.k]=o))};o?(E.id=-1,kt(E,t)):E()}}}const kt=a8;function U8(n){return $8(n)}function $8(n,e){const t=Kh();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=en,insertStaticContent:E}=n,w=(p,g,I,R=null,A=null,D=null,L=!1,k=null,V=!!g.dynamicChildren)=>{if(p===g)return;p&&!Zi(p,g)&&(R=$a(p),an(p,A,D,!0),p=null),g.patchFlag===-2&&(V=!1,g.dynamicChildren=null);const{type:P,ref:W,shapeFlag:j}=g;switch(P){case fu:b(p,g,I,R);break;case Rr:$(p,g,I,R);break;case Ec:p==null&&K(g,I,R,L);break;case De:on(p,g,I,R,A,D,L,k,V);break;default:j&1?J(p,g,I,R,A,D,L,k,V):j&6?Ds(p,g,I,R,A,D,L,k,V):(j&64||j&128)&&P.process(p,g,I,R,A,D,L,k,V,Ns)}W!=null&&A&&td(W,p&&p.ref,D,g||p,!g)},b=(p,g,I,R)=>{if(p==null)r(g.el=a(g.children),I,R);else{const A=g.el=p.el;g.children!==p.children&&l(A,g.children)}},$=(p,g,I,R)=>{p==null?r(g.el=c(g.children||""),I,R):g.el=p.el},K=(p,g,I,R)=>{[p.el,p.anchor]=E(p.children,g,I,R,p.el,p.anchor)},B=({el:p,anchor:g},I,R)=>{let A;for(;p&&p!==g;)A=d(p),r(p,I,R),p=A;r(g,I,R)},F=({el:p,anchor:g})=>{let I;for(;p&&p!==g;)I=d(p),s(p),p=I;s(g)},J=(p,g,I,R,A,D,L,k,V)=>{L=L||g.type==="svg",p==null?re(g,I,R,A,D,L,k,V):le(p,g,A,D,L,k,V)},re=(p,g,I,R,A,D,L,k)=>{let V,P;const{type:W,props:j,shapeFlag:H,transition:Z,dirs:ue}=p;if(V=p.el=o(p.type,D,j&&j.is,j),H&8?u(V,p.children):H&16&&ce(p.children,V,null,R,A,D&&W!=="foreignObject",L,k),ue&&Ur(p,null,R,"created"),Te(V,p,p.scopeId,L,R),j){for(const Ae in j)Ae!=="value"&&!vc(Ae)&&i(V,Ae,null,j[Ae],D,p.children,R,A,Cn);"value"in j&&i(V,"value",null,j.value),(P=j.onVnodeBeforeMount)&&ln(P,R,p)}ue&&Ur(p,null,R,"beforeMount");const xe=(!A||A&&!A.pendingBranch)&&Z&&!Z.persisted;xe&&Z.beforeEnter(V),r(V,g,I),((P=j&&j.onVnodeMounted)||xe||ue)&&kt(()=>{P&&ln(P,R,p),xe&&Z.enter(V),ue&&Ur(p,null,R,"mounted")},A)},Te=(p,g,I,R,A)=>{if(I&&m(p,I),R)for(let D=0;D<R.length;D++)m(p,R[D]);if(A){let D=A.subTree;if(g===D){const L=A.vnode;Te(p,L,L.scopeId,L.slotScopeIds,A.parent)}}},ce=(p,g,I,R,A,D,L,k,V=0)=>{for(let P=V;P<p.length;P++){const W=p[P]=k?nr(p[P]):un(p[P]);w(null,W,g,I,R,A,D,L,k)}},le=(p,g,I,R,A,D,L)=>{const k=g.el=p.el;let{patchFlag:V,dynamicChildren:P,dirs:W}=g;V|=p.patchFlag&16;const j=p.props||Se,H=g.props||Se;let Z;I&&$r(I,!1),(Z=H.onVnodeBeforeUpdate)&&ln(Z,I,g,p),W&&Ur(g,p,I,"beforeUpdate"),I&&$r(I,!0);const ue=A&&g.type!=="foreignObject";if(P?Fe(p.dynamicChildren,P,k,I,R,ue,D):L||Re(p,g,k,null,I,R,ue,D,!1),V>0){if(V&16)Ut(k,g,j,H,I,R,A);else if(V&2&&j.class!==H.class&&i(k,"class",null,H.class,A),V&4&&i(k,"style",j.style,H.style,A),V&8){const xe=g.dynamicProps;for(let Ae=0;Ae<xe.length;Ae++){const Ye=xe[Ae],Yt=j[Ye],Vs=H[Ye];(Vs!==Yt||Ye==="value")&&i(k,Ye,Yt,Vs,A,p.children,I,R,Cn)}}V&1&&p.children!==g.children&&u(k,g.children)}else!L&&P==null&&Ut(k,g,j,H,I,R,A);((Z=H.onVnodeUpdated)||W)&&kt(()=>{Z&&ln(Z,I,g,p),W&&Ur(g,p,I,"updated")},R)},Fe=(p,g,I,R,A,D,L)=>{for(let k=0;k<g.length;k++){const V=p[k],P=g[k],W=V.el&&(V.type===De||!Zi(V,P)||V.shapeFlag&70)?h(V.el):I;w(V,P,W,null,R,A,D,L,!0)}},Ut=(p,g,I,R,A,D,L)=>{if(I!==R){if(I!==Se)for(const k in I)!vc(k)&&!(k in R)&&i(p,k,I[k],null,L,g.children,A,D,Cn);for(const k in R){if(vc(k))continue;const V=R[k],P=I[k];V!==P&&k!=="value"&&i(p,k,P,V,L,g.children,A,D,Cn)}"value"in R&&i(p,"value",I.value,R.value)}},on=(p,g,I,R,A,D,L,k,V)=>{const P=g.el=p?p.el:a(""),W=g.anchor=p?p.anchor:a("");let{patchFlag:j,dynamicChildren:H,slotScopeIds:Z}=g;Z&&(k=k?k.concat(Z):Z),p==null?(r(P,I,R),r(W,I,R),ce(g.children,I,W,A,D,L,k,V)):j>0&&j&64&&H&&p.dynamicChildren?(Fe(p.dynamicChildren,H,I,A,D,L,k),(g.key!=null||A&&g===A.subTree)&&$w(p,g,!0)):Re(p,g,I,W,A,D,L,k,V)},Ds=(p,g,I,R,A,D,L,k,V)=>{g.slotScopeIds=k,p==null?g.shapeFlag&512?A.ctx.activate(g,I,R,L,V):$i(g,I,R,A,D,L,V):Qn(p,g,V)},$i=(p,g,I,R,A,D,L)=>{const k=p.component=Q8(p,R,A);if(Pw(p)&&(k.ctx.renderer=Ns),Y8(k),k.asyncDep){if(A&&A.registerDep(k,be),!p.el){const V=k.subTree=oe(Rr);$(null,V,g,I)}return}be(k,p,g,I,A,D,L)},Qn=(p,g,I)=>{const R=g.component=p.component;if(s8(p,g,I))if(R.asyncDep&&!R.asyncResolved){Be(R,g,I);return}else R.next=g,Xx(R.update),R.update();else g.el=p.el,R.vnode=g},be=(p,g,I,R,A,D,L)=>{const k=()=>{if(p.isMounted){let{next:W,bu:j,u:H,parent:Z,vnode:ue}=p,xe=W,Ae;$r(p,!1),W?(W.el=ue.el,Be(p,W,L)):W=ue,j&&wc(j),(Ae=W.props&&W.props.onVnodeBeforeUpdate)&&ln(Ae,Z,W,ue),$r(p,!0);const Ye=Wu(p),Yt=p.subTree;p.subTree=Ye,w(Yt,Ye,h(Yt.el),$a(Yt),p,A,D),W.el=Ye.el,xe===null&&i8(p,Ye.el),H&&kt(H,A),(Ae=W.props&&W.props.onVnodeUpdated)&&kt(()=>ln(Ae,Z,W,ue),A)}else{let W;const{el:j,props:H}=g,{bm:Z,m:ue,parent:xe}=p,Ae=Eo(g);if($r(p,!1),Z&&wc(Z),!Ae&&(W=H&&H.onVnodeBeforeMount)&&ln(W,xe,g),$r(p,!0),j&&vu){const Ye=()=>{p.subTree=Wu(p),vu(j,p.subTree,p,A,null)};Ae?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ye()):Ye()}else{const Ye=p.subTree=Wu(p);w(null,Ye,I,R,p,A,D),g.el=Ye.el}if(ue&&kt(ue,A),!Ae&&(W=H&&H.onVnodeMounted)){const Ye=g;kt(()=>ln(W,xe,Ye),A)}(g.shapeFlag&256||xe&&Eo(xe.vnode)&&xe.vnode.shapeFlag&256)&&p.a&&kt(p.a,A),p.isMounted=!0,g=I=R=null}},V=p.effect=new lp(k,()=>gp(P),p.scope),P=p.update=()=>V.run();P.id=p.uid,$r(p,!0),P()},Be=(p,g,I)=>{g.component=p;const R=p.vnode.props;p.vnode=g,p.next=null,O8(p,g.props,R,I),F8(p,g.children,I),Fi(),$g(),Ui()},Re=(p,g,I,R,A,D,L,k,V=!1)=>{const P=p&&p.children,W=p?p.shapeFlag:0,j=g.children,{patchFlag:H,shapeFlag:Z}=g;if(H>0){if(H&128){Ua(P,j,I,R,A,D,L,k,V);return}else if(H&256){Mr(P,j,I,R,A,D,L,k,V);return}}Z&8?(W&16&&Cn(P,A,D),j!==P&&u(I,j)):W&16?Z&16?Ua(P,j,I,R,A,D,L,k,V):Cn(P,A,D,!0):(W&8&&u(I,""),Z&16&&ce(j,I,R,A,D,L,k,V))},Mr=(p,g,I,R,A,D,L,k,V)=>{p=p||ei,g=g||ei;const P=p.length,W=g.length,j=Math.min(P,W);let H;for(H=0;H<j;H++){const Z=g[H]=V?nr(g[H]):un(g[H]);w(p[H],Z,I,null,A,D,L,k,V)}P>W?Cn(p,A,D,!0,!1,j):ce(g,I,R,A,D,L,k,V,j)},Ua=(p,g,I,R,A,D,L,k,V)=>{let P=0;const W=g.length;let j=p.length-1,H=W-1;for(;P<=j&&P<=H;){const Z=p[P],ue=g[P]=V?nr(g[P]):un(g[P]);if(Zi(Z,ue))w(Z,ue,I,null,A,D,L,k,V);else break;P++}for(;P<=j&&P<=H;){const Z=p[j],ue=g[H]=V?nr(g[H]):un(g[H]);if(Zi(Z,ue))w(Z,ue,I,null,A,D,L,k,V);else break;j--,H--}if(P>j){if(P<=H){const Z=H+1,ue=Z<W?g[Z].el:R;for(;P<=H;)w(null,g[P]=V?nr(g[P]):un(g[P]),I,ue,A,D,L,k,V),P++}}else if(P>H)for(;P<=j;)an(p[P],A,D,!0),P++;else{const Z=P,ue=P,xe=new Map;for(P=ue;P<=H;P++){const $t=g[P]=V?nr(g[P]):un(g[P]);$t.key!=null&&xe.set($t.key,P)}let Ae,Ye=0;const Yt=H-ue+1;let Vs=!1,kp=0;const Bi=new Array(Yt);for(P=0;P<Yt;P++)Bi[P]=0;for(P=Z;P<=j;P++){const $t=p[P];if(Ye>=Yt){an($t,A,D,!0);continue}let cn;if($t.key!=null)cn=xe.get($t.key);else for(Ae=ue;Ae<=H;Ae++)if(Bi[Ae-ue]===0&&Zi($t,g[Ae])){cn=Ae;break}cn===void 0?an($t,A,D,!0):(Bi[cn-ue]=P+1,cn>=kp?kp=cn:Vs=!0,w($t,g[cn],I,null,A,D,L,k,V),Ye++)}const Dp=Vs?B8(Bi):ei;for(Ae=Dp.length-1,P=Yt-1;P>=0;P--){const $t=ue+P,cn=g[$t],Np=$t+1<W?g[$t+1].el:R;Bi[P]===0?w(null,cn,I,Np,A,D,L,k,V):Vs&&(Ae<0||P!==Dp[Ae]?Lr(cn,I,Np,2):Ae--)}}},Lr=(p,g,I,R,A=null)=>{const{el:D,type:L,transition:k,children:V,shapeFlag:P}=p;if(P&6){Lr(p.component.subTree,g,I,R);return}if(P&128){p.suspense.move(g,I,R);return}if(P&64){L.move(p,g,I,Ns);return}if(L===De){r(D,g,I);for(let j=0;j<V.length;j++)Lr(V[j],g,I,R);r(p.anchor,g,I);return}if(L===Ec){B(p,g,I);return}if(R!==2&&P&1&&k)if(R===0)k.beforeEnter(D),r(D,g,I),kt(()=>k.enter(D),A);else{const{leave:j,delayLeave:H,afterLeave:Z}=k,ue=()=>r(D,g,I),xe=()=>{j(D,()=>{ue(),Z&&Z()})};H?H(D,ue,xe):xe()}else r(D,g,I)},an=(p,g,I,R=!1,A=!1)=>{const{type:D,props:L,ref:k,children:V,dynamicChildren:P,shapeFlag:W,patchFlag:j,dirs:H}=p;if(k!=null&&td(k,null,I,p,!0),W&256){g.ctx.deactivate(p);return}const Z=W&1&&H,ue=!Eo(p);let xe;if(ue&&(xe=L&&L.onVnodeBeforeUnmount)&&ln(xe,g,p),W&6)nI(p.component,I,R);else{if(W&128){p.suspense.unmount(I,R);return}Z&&Ur(p,null,g,"beforeUnmount"),W&64?p.type.remove(p,g,I,A,Ns,R):P&&(D!==De||j>0&&j&64)?Cn(P,g,I,!1,!0):(D===De&&j&384||!A&&W&16)&&Cn(V,g,I),R&&Sp(p)}(ue&&(xe=L&&L.onVnodeUnmounted)||Z)&&kt(()=>{xe&&ln(xe,g,p),Z&&Ur(p,null,g,"unmounted")},I)},Sp=p=>{const{type:g,el:I,anchor:R,transition:A}=p;if(g===De){tI(I,R);return}if(g===Ec){F(p);return}const D=()=>{s(I),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:L,delayLeave:k}=A,V=()=>L(I,D);k?k(p.el,D,V):V()}else D()},tI=(p,g)=>{let I;for(;p!==g;)I=d(p),s(p),p=I;s(g)},nI=(p,g,I)=>{const{bum:R,scope:A,update:D,subTree:L,um:k}=p;R&&wc(R),A.stop(),D&&(D.active=!1,an(L,p,g,I)),k&&kt(k,g),kt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Cn=(p,g,I,R=!1,A=!1,D=0)=>{for(let L=D;L<p.length;L++)an(p[L],g,I,R,A)},$a=p=>p.shapeFlag&6?$a(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),Cp=(p,g,I)=>{p==null?g._vnode&&an(g._vnode,null,null,!0):w(g._vnode||null,p,g,null,null,null,I),$g(),Iw(),g._vnode=p},Ns={p:w,um:an,m:Lr,r:Sp,mt:$i,mc:ce,pc:Re,pbc:Fe,n:$a,o:n};let yu,vu;return e&&([yu,vu]=e(Ns)),{render:Cp,hydrate:yu,createApp:k8(Cp,yu)}}function $r({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function $w(n,e,t=!1){const r=n.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=nr(s[i]),a.el=o.el),t||$w(o,a)),a.type===fu&&(a.el=o.el)}}function B8(n){const e=n.slice(),t=[0];let r,s,i,o,a;const c=n.length;for(r=0;r<c;r++){const l=n[r];if(l!==0){if(s=t[t.length-1],n[s]<l){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<l?i=a+1:o=a;l<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}const j8=n=>n.__isTeleport,De=Symbol.for("v-fgt"),fu=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),Ec=Symbol.for("v-stc"),Ao=[];let Zt=null;function v(n=!1){Ao.push(Zt=n?null:[])}function q8(){Ao.pop(),Zt=Ao[Ao.length-1]||null}let la=1;function Jg(n){la+=n}function Bw(n){return n.dynamicChildren=la>0?Zt||ei:null,q8(),la>0&&Zt&&Zt.push(n),n}function S(n,e,t,r,s,i){return Bw(f(n,e,t,r,s,i,!0))}function me(n,e,t,r,s){return Bw(oe(n,e,t,r,s,!0))}function jw(n){return n?n.__v_isVNode===!0:!1}function Zi(n,e){return n.type===e.type&&n.key===e.key}const pu="__vInternal",qw=({key:n})=>n??null,Tc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?tt(n)||We(n)||ae(n)?{i:mt,r:n,k:e,f:!!t}:n:null);function f(n,e=null,t=null,r=0,s=null,i=n===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qw(e),ref:e&&Tc(e),scopeId:bw,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mt};return a?(vp(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=tt(t)?8:16),la>0&&!o&&Zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Zt.push(c),c}const oe=z8;function z8(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===I8)&&(n=Rr),jw(n)){const a=wi(n,e,!0);return t&&vp(a,t),la>0&&!i&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(n)]=a:Zt.push(a)),a.patchFlag|=-2,a}if(t9(n)&&(n=n.__vccOpts),e){e=G8(e);let{class:a,style:c}=e;a&&!tt(a)&&(e.class=pe(a)),Ve(c)&&(fw(c)&&!Y(c)&&(c=vt({},c)),e.style=ap(c))}const o=tt(n)?1:o8(n)?128:j8(n)?64:Ve(n)?4:ae(n)?2:0;return f(n,e,t,r,s,o,i,!0)}function G8(n){return n?fw(n)||pu in n?vt({},n):n:null}function wi(n,e,t=!1){const{props:r,ref:s,patchFlag:i,children:o}=n,a=e?K8(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&qw(a),ref:e&&e.ref?t&&s?Y(s)?s.concat(Tc(e)):[s,Tc(e)]:Tc(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==De?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&wi(n.ssContent),ssFallback:n.ssFallback&&wi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function ye(n=" ",e=0){return oe(fu,null,n,e)}function Sn(n,e){const t=oe(Ec,null,n);return t.staticCount=e,t}function se(n="",e=!1){return e?(v(),me(Rr,null,n)):oe(Rr,null,n)}function un(n){return n==null||typeof n=="boolean"?oe(Rr):Y(n)?oe(De,null,n.slice()):typeof n=="object"?nr(n):oe(fu,null,String(n))}function nr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:wi(n)}function vp(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Y(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vp(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(pu in e)?e._ctx=mt:s===3&&mt&&(mt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:mt},t=32):(e=String(e),r&64?(t=16,e=[ye(e)]):t=8);n.children=e,n.shapeFlag|=t}function K8(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=pe([e.class,r.class]));else if(s==="style")e.style=ap([e.style,r.style]);else if(nu(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ln(n,e,t,r=null){tn(n,e,7,[t,r])}const W8=Vw();let H8=0;function Q8(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||W8,i={uid:H8++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mw(r,s),emitsOptions:Tw(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=t8.bind(null,i),n.ce&&n.ce(i),i}let ot=null,wp,Us,Xg="__VUE_INSTANCE_SETTERS__";(Us=Kh()[Xg])||(Us=Kh()[Xg]=[]),Us.push(n=>ot=n),wp=n=>{Us.length>1?Us.forEach(e=>e(n)):Us[0](n)};const Ii=n=>{wp(n),n.scope.on()},ls=()=>{ot&&ot.scope.off(),wp(null)};function zw(n){return n.vnode.shapeFlag&4}let ua=!1;function Y8(n,e=!1){ua=e;const{props:t,children:r}=n.vnode,s=zw(n);V8(n,t,s,e),L8(n,r);const i=s?J8(n,e):void 0;return ua=!1,i}function J8(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=lu(new Proxy(n.ctx,b8));const{setup:r}=t;if(r){const s=n.setupContext=r.length>1?Z8(n):null;Ii(n),Fi();const i=hr(r,n,0,[n.props,s]);if(Ui(),ls(),Hv(i)){if(i.then(ls,ls),e)return i.then(o=>{Zg(n,o,e)}).catch(o=>{uu(o,n,0)});n.asyncDep=i}else Zg(n,i,e)}else Gw(n,e)}function Zg(n,e,t){ae(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ve(e)&&(n.setupState=_w(e)),Gw(n,t)}let e_;function Gw(n,e,t){const r=n.type;if(!n.render){if(!e&&e_&&!r.render){const s=r.template||_p(n).template;if(s){const{isCustomElement:i,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,l=vt(vt({isCustomElement:i,delimiters:a},o),c);r.render=e_(s,l)}}n.render=r.render||en}Ii(n),Fi(),A8(n),Ui(),ls()}function X8(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ft(n,"get","$attrs"),e[t]}}))}function Z8(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return X8(n)},slots:n.slots,emit:n.emit,expose:e}}function mu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(_w(lu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in To)return To[t](n)},has(e,t){return t in e||t in To}}))}function e9(n,e=!0){return ae(n)?n.displayName||n.name:n.name||e&&n.__name}function t9(n){return ae(n)&&"__vccOpts"in n}const Kw=(n,e)=>Qx(n,e,ua),n9=Symbol.for("v-scx"),r9=()=>bo(n9),s9="3.3.4",i9="http://www.w3.org/2000/svg",Qr=typeof document<"u"?document:null,t_=Qr&&Qr.createElement("template"),o9={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e?Qr.createElementNS(i9,n):Qr.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Qr.createTextNode(n),createComment:n=>Qr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Qr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{t_.innerHTML=r?`<svg>${n}</svg>`:n;const a=t_.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function a9(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function c9(n,e,t){const r=n.style,s=tt(t);if(t&&!s){if(e&&!tt(e))for(const i in e)t[i]==null&&nd(r,i,"");for(const i in t)nd(r,i,t[i])}else{const i=r.display;s?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=i)}}const n_=/\s*!important$/;function nd(n,e,t){if(Y(t))t.forEach(r=>nd(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=l9(n,e);n_.test(t)?n.setProperty(Li(r),t.replace(n_,""),"important"):n[r]=t}}const r_=["Webkit","Moz","ms"],Qu={};function l9(n,e){const t=Qu[e];if(t)return t;let r=Pn(e);if(r!=="filter"&&r in n)return Qu[e]=r;r=iu(r);for(let s=0;s<r_.length;s++){const i=r_[s]+r;if(i in n)return Qu[e]=i}return e}const s_="http://www.w3.org/1999/xlink";function u9(n,e,t,r,s){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(s_,e.slice(6,e.length)):n.setAttributeNS(s_,e,t);else{const i=cx(e);t==null||i&&!Jv(t)?n.removeAttribute(e):n.setAttribute(e,i?"":t)}}function h9(n,e,t,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const l=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";l!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let c=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Jv(t):t==null&&l==="string"?(t="",c=!0):l==="number"&&(t=0,c=!0)}try{n[e]=t}catch{}c&&n.removeAttribute(e)}function Yr(n,e,t,r){n.addEventListener(e,t,r)}function d9(n,e,t,r){n.removeEventListener(e,t,r)}function f9(n,e,t,r,s=null){const i=n._vei||(n._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=p9(e);if(r){const l=i[e]=_9(r,s);Yr(n,a,l,c)}else o&&(d9(n,a,o,c),i[e]=void 0)}}const i_=/(?:Once|Passive|Capture)$/;function p9(n){let e;if(i_.test(n)){e={};let r;for(;r=n.match(i_);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Li(n.slice(2)),e]}let Yu=0;const m9=Promise.resolve(),g9=()=>Yu||(m9.then(()=>Yu=0),Yu=Date.now());function _9(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;tn(y9(r,t.value),e,5,[r])};return t.value=n,t.attached=g9(),t}function y9(n,e){if(Y(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const o_=/^on[a-z]/,v9=(n,e,t,r,s=!1,i,o,a,c)=>{e==="class"?a9(n,r,s):e==="style"?c9(n,t,r):nu(e)?sp(e)||f9(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w9(n,e,r,s))?h9(n,e,r,i,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),u9(n,e,r,s))};function w9(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&o_.test(e)&&ae(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||o_.test(e)&&tt(t)?!1:e in n}const sl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Y(e)?t=>wc(e,t):e};function I9(n){n.target.composing=!0}function a_(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const it={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n._assign=sl(s);const i=r||s.props&&s.props.type==="number";Yr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=Zc(a)),n._assign(a)}),t&&Yr(n,"change",()=>{n.value=n.value.trim()}),e||(Yr(n,"compositionstart",I9),Yr(n,"compositionend",a_),Yr(n,"change",a_))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:s}},i){if(n._assign=sl(i),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(s||n.type==="number")&&Zc(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},Ww={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const s=ru(e);Yr(n,"change",()=>{const i=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Zc(il(o)):il(o));n._assign(n.multiple?s?new Set(i):i:i[0])}),n._assign=sl(r)},mounted(n,{value:e}){c_(n,e)},beforeUpdate(n,e,t){n._assign=sl(t)},updated(n,{value:e}){c_(n,e)}};function c_(n,e){const t=n.multiple;if(!(t&&!Y(e)&&!ru(e))){for(let r=0,s=n.options.length;r<s;r++){const i=n.options[r],o=il(i);if(t)Y(e)?i.selected=ux(e,o)>-1:i.selected=e.has(o);else if(ou(il(i),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function il(n){return"_value"in n?n._value:n.value}const E9=["ctrl","shift","alt","meta"],T9={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>E9.some(t=>n[`${t}Key`]&&!e.includes(t))},Ht=(n,e)=>(t,...r)=>{for(let s=0;s<e.length;s++){const i=T9[e[s]];if(i&&i(t,e))return}return n(t,...r)},ol={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):eo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),eo(n,!0),r.enter(n)):r.leave(n,()=>{eo(n,!1)}):eo(n,e))},beforeUnmount(n,{value:e}){eo(n,e)}};function eo(n,e){n.style.display=e?n._vod:"none"}const b9=vt({patchProp:v9},o9);let l_;function A9(){return l_||(l_=U8(b9))}const R9=(...n)=>{const e=A9().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=x9(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function x9(n){return tt(n)?document.querySelector(n):n}var P9=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Hw;const gu=n=>Hw=n,Qw=Symbol();function rd(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ro;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ro||(Ro={}));function S9(){const n=ew(!0),e=n.run(()=>gw({}));let t=[],r=[];const s=lu({install(i){gu(s),s._a=i,i.provide(Qw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>t.push(o)),r=[]},use(i){return!this._a&&!P9?r.push(i):t.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Yw=()=>{};function u_(n,e,t,r=Yw){n.push(e);const s=()=>{const i=n.indexOf(e);i>-1&&(n.splice(i,1),r())};return!t&&tw()&&dx(s),s}function $s(n,...e){n.slice().forEach(t=>{t(...e)})}const C9=n=>n();function sd(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,r)=>n.set(r,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];rd(s)&&rd(r)&&n.hasOwnProperty(t)&&!We(r)&&!ur(r)?n[t]=sd(s,r):n[t]=r}return n}const k9=Symbol();function D9(n){return!rd(n)||!n.hasOwnProperty(k9)}const{assign:tr}=Object;function N9(n){return!!(We(n)&&n.effect)}function V9(n,e,t,r){const{state:s,actions:i,getters:o}=e,a=t.state.value[n];let c;function l(){a||(t.state.value[n]=s?s():{});const u=Gx(t.state.value[n]);return tr(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=lu(Kw(()=>{gu(t);const m=t._s.get(n);return o[d].call(m,m)})),h),{}))}return c=Jw(n,l,e,t,r,!0),c}function Jw(n,e,t={},r,s,i){let o;const a=tr({actions:{}},t),c={deep:!0};let l,u,h=[],d=[],m;const E=r.state.value[n];!i&&!E&&(r.state.value[n]={}),gw({});let w;function b(ce){let le;l=u=!1,typeof ce=="function"?(ce(r.state.value[n]),le={type:Ro.patchFunction,storeId:n,events:m}):(sd(r.state.value[n],ce),le={type:Ro.patchObject,payload:ce,storeId:n,events:m});const Fe=w=Symbol();vw().then(()=>{w===Fe&&(l=!0)}),u=!0,$s(h,le,r.state.value[n])}const $=i?function(){const{state:le}=t,Fe=le?le():{};this.$patch(Ut=>{tr(Ut,Fe)})}:Yw;function K(){o.stop(),h=[],d=[],r._s.delete(n)}function B(ce,le){return function(){gu(r);const Fe=Array.from(arguments),Ut=[],on=[];function Ds(be){Ut.push(be)}function $i(be){on.push(be)}$s(d,{args:Fe,name:ce,store:J,after:Ds,onError:$i});let Qn;try{Qn=le.apply(this&&this.$id===n?this:J,Fe)}catch(be){throw $s(on,be),be}return Qn instanceof Promise?Qn.then(be=>($s(Ut,be),be)).catch(be=>($s(on,be),Promise.reject(be))):($s(Ut,Qn),Qn)}}const F={_p:r,$id:n,$onAction:u_.bind(null,d),$patch:b,$reset:$,$subscribe(ce,le={}){const Fe=u_(h,ce,le.detached,()=>Ut()),Ut=o.run(()=>Ic(()=>r.state.value[n],on=>{(le.flush==="sync"?u:l)&&ce({storeId:n,type:Ro.direct,events:m},on)},tr({},c,le)));return Fe},$dispose:K},J=cu(F);r._s.set(n,J);const re=r._a&&r._a.runWithContext||C9,Te=r._e.run(()=>(o=ew(),re(()=>o.run(e))));for(const ce in Te){const le=Te[ce];if(We(le)&&!N9(le)||ur(le))i||(E&&D9(le)&&(We(le)?le.value=E[ce]:sd(le,E[ce])),r.state.value[n][ce]=le);else if(typeof le=="function"){const Fe=B(ce,le);Te[ce]=Fe,a.actions[ce]=le}}return tr(J,Te),tr(we(J),Te),Object.defineProperty(J,"$state",{get:()=>r.state.value[n],set:ce=>{b(le=>{tr(le,ce)})}}),r._p.forEach(ce=>{tr(J,o.run(()=>ce({store:J,app:r._a,pinia:r,options:a})))}),E&&i&&t.hydrate&&t.hydrate(J.$state,E),l=!0,u=!0,J}function _u(n,e,t){let r,s;const i=typeof e=="function";typeof n=="string"?(r=n,s=i?t:e):(s=n,r=n.id);function o(a,c){const l=N8();return a=a||(l?bo(Qw,null):null),a&&gu(a),a=Hw,a._s.has(r)||(i?Jw(r,e,s,a):V9(r,s,a)),a._s.get(r)}return o.$id=r,o}let O9="Store";function M9(...n){return n.reduce((e,t)=>(e[t.$id+O9]=function(){return t(this.$pinia)},e),{})}function jn(n,e){return Array.isArray(e)?e.reduce((t,r)=>(t[r]=function(){return n(this.$pinia)[r]},t),{}):Object.keys(e).reduce((t,r)=>(t[r]=function(){const s=n(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},t),{})}function id(n,e){return Array.isArray(e)?e.reduce((t,r)=>(t[r]=function(...s){return n(this.$pinia)[r](...s)},t),{}):Object.keys(e).reduce((t,r)=>(t[r]=function(...s){return n(this.$pinia)[e[r]](...s)},t),{})}function Xw(n,e){return Array.isArray(e)?e.reduce((t,r)=>(t[r]={get(){return n(this.$pinia)[r]},set(s){return n(this.$pinia)[r]=s}},t),{}):Object.keys(e).reduce((t,r)=>(t[r]={get(){return n(this.$pinia)[e[r]]},set(s){return n(this.$pinia)[e[r]]=s}},t),{})}const te=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},L9={name:"BurnableIcon"},F9={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve"},U9=f("path",{style:{fill:"#ffb446"},d:`M97.103,353.103C97.103,440.86,168.244,512,256,512l0,0c87.756,0,158.897-71.14,158.897-158.897\r
                    c0-88.276-44.138-158.897-14.524-220.69c0,0-47.27,8.828-73.752,79.448c0,0-88.276-88.276-51.394-211.862\r
                    c0,0-89.847,35.31-80.451,150.069c8.058,98.406-9.396,114.759-9.396,114.759c0-79.448-62.115-114.759-62.115-114.759\r
                    C141.241,247.172,97.103,273.655,97.103,353.103z`},null,-1),$9=f("path",{style:{fill:"#ffdc64"},d:`M370.696,390.734c0,66.093-51.033,122.516-117.114,121.241\r
                    c-62.188-1.198-108.457-48.514-103.512-110.321c2.207-27.586,23.172-72.276,57.379-117.517l22.805,13.793\r
                    C229.517,242.023,256,167.724,256,167.724C273.396,246.007,370.696,266.298,370.696,390.734z`},null,-1),B9=f("path",{style:{fill:"#ffffff"},d:`M211.862,335.448c-8.828,52.966-26.483,72.249-26.483,105.931C185.379,476.69,216.998,512,256,512\r
                    l0,0c39.284,0,70.729-32.097,70.62-71.381c-0.295-105.508-61.792-158.136-61.792-158.136c8.828,52.966-17.655,79.448-17.655,79.448\r
                    C236.141,345.385,211.862,335.448,211.862,335.448z`},null,-1),j9=[U9,$9,B9];function q9(n,e,t,r,s,i){return v(),S("svg",F9,j9)}const Ip=te(L9,[["render",q9]]),z9={name:"CanIcon"},G9={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"25 0 450 550","xml:space":"preserve"},K9=Sn(`<rect x="98.22" y="99.265" style="fill:#ff7058;" width="305.11" height="350.041"></rect><path style="fill:#f2f2f2;" d="M375.118,0H126.433c-6.269,0-11.494,5.224-11.494,11.494s5.224,11.494,11.494,11.494h248.686\r
                        c6.269,0,11.494-5.224,11.494-11.494S381.388,0,375.118,0z"></path><polygon style="fill:#e2e2e2;" points="375.118,39.706 367.804,24.033 133.747,24.033 126.433,39.706 98.22,99.265 403.331,99.265 \r
                        "></polygon><path style="fill:#cdd6e0;" d="M375.118,39.706L375.118,39.706H126.433l0,0l7.314-15.673h234.057L375.118,39.706z"></path><g><path style="fill:#ffffff;" d="M403.331,117.029v26.122C293.616,185.992,204.8,291.527,98.22,344.816v-27.167\r
                            C203.755,261.224,292.571,156.735,403.331,117.029z"></path><path style="fill:#ffffff;" d="M403.331,159.869v27.167C295.706,236.147,206.89,341.682,98.22,388.702v-27.167\r
                            C205.845,312.424,294.661,206.89,403.331,159.869z"></path><path style="fill:#ffffff;" d="M403.331,204.8v27.167c-105.535,55.38-194.351,159.869-305.11,200.62v-26.122\r
                            C207.935,362.58,296.751,257.045,403.331,204.8z"></path></g><polygon style="fill:#e2e2e2;" points="98.22,449.306 119.118,501.551 382.433,501.551 403.331,449.306 "></polygon>`,6),W9=[K9];function H9(n,e,t,r,s,i){return v(),S("svg",G9,W9)}const Ep=te(z9,[["render",H9]]),Q9={name:"CardboardIcon"},Y9={version:"1.1",id:"_x35_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"-30 0 500 500","xml:space":"preserve"},J9=Sn(`<g><g><polygon style="fill:#cda23a;" points="0.012,131.343 0.012,380.658 232.514,511.988 232.514,0.012 		"></polygon><polygon style="fill:#c0932f;" points="465.028,131.343 465.028,380.658 385.355,425.679 311.716,467.268 232.514,512 232.514,0 \r
                                    "></polygon><polygon style="fill:#e0b040;" points="465.028,131.343 385.355,176.364 385.102,176.508 311.716,176.508 311.716,217.952 \r
                            232.514,262.685 0,131.343 79.347,86.502 152.805,45.022 232.514,0 		"></polygon><g><polygon style="fill:#eac46b;" points="385.355,176.364 311.897,217.844 79.347,86.502 152.805,45.022 			"></polygon></g><g><polygon style="fill:#d2a453;" points="385.355,176.508 385.355,295.602 311.716,337.19 311.716,217.952 311.897,217.844 \r
                                385.102,176.508 			"></polygon></g><g style="opacity:0.1;"><g><path style="fill:#040000;" d="M162.882,455.635L53.073,395.214l2.032-145.077l117.686,58.469L162.882,455.635z M61.982,388.769\r
                                    l92.254,50.38l7.696-122.687l-97.75-49.02L61.982,388.769z"></path></g><g><path style="fill:#040000;" d="M146.203,325.107l-0.917,16.422c-1.354,24.255-17.599,35.491-36.097,25.702\r
                                    c-18.256-9.66-32.408-36.509-31.821-60.565l0.397-16.28l13.968,7.086l1.312,28.714l16.114-19.873L146.203,325.107z"></path><polygon style="fill:#040000;" points="113.357,391.228 103.354,385.857 104.07,366.713 114.166,372.063 				"></polygon><polygon style="fill:#040000;" points="125.036,408.284 91.029,389.893 91.495,375.198 125.745,393.535 				"></polygon></g></g></g><polygon style="opacity:0.05;fill:#171716;" points="232.514,0 232.514,511.988 232.514,512 311.716,467.268 385.355,425.679 \r
                        465.028,380.658 465.028,131.343 	"></polygon></g>`,1),X9=[J9];function Z9(n,e,t,r,s,i){return v(),S("svg",Y9,X9)}const Tp=te(Q9,[["render",Z9]]),eP={name:"GlassIcon"},tP={version:"1.1",id:"_x36_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"-110 0 400 500","xml:space":"preserve"},nP=Sn(`<g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="82.421" y1="512" x2="82.421" y2="-64.642"><stop offset="0" style="stop-color:#938070;"></stop><stop offset="0.7635" style="stop-color:#b08b6e;"></stop></linearGradient><path style="opacity:0.9;fill:#938070;" d="M164.003,308.394c-0.137,17.292-0.137,40.145-0.069,63.545\r
                    c0.137,50.781,0.686,104.376,0.686,110.346c0,25.803-52.909,29.302-73.839,29.646c-2.265,0-4.186,0.069-5.696,0.069\r
                    c-2.47,0-3.843-0.069-3.843-0.069c-6.108,0.137-34.106,0.137-55.448-6.245c-6.733-2.062-12.73-4.769-17.276-8.342\r
                    c0.022,0.033,0.029,0.075,0.052,0.107c-0.618-0.48-1.236-0.96-1.853-1.509c-0.549-0.549-1.098-1.097-1.647-1.647\r
                    c-0.48-0.549-0.961-1.097-1.441-1.716c-0.412-0.549-0.823-1.166-1.166-1.784c-0.343-0.686-0.686-1.303-0.961-1.99\r
                    c-0.274-0.617-0.549-1.303-0.686-2.058c-0.206-0.617-0.343-1.236-0.412-1.922c-0.137-0.823-0.206-1.647-0.206-2.539v-2.196\r
                    c0.069-5.489,0.137-18.803,0.274-36.164c0.069-7.686,0.137-16.195,0.137-25.116c0.069-2.95,0.069-5.97,0.069-9.059\r
                    c0.069-12.283,0.069-25.116,0.137-37.811c0.137-23.469,0.137-46.253-0.069-63.545c0-2.745-0.069-5.422-0.069-7.892\r
                    c0-1.235,0-2.402-0.069-3.569c-0.069-3.431-0.137-6.519-0.206-9.127c-0.069-1.716-0.137-3.295-0.206-4.598\r
                    c-0.892-17.704,1.304-32.939,4.941-45.84c3.98-13.999,9.676-25.391,14.822-34.449c0.618-1.098,1.304-2.539,2.059-4.255\r
                    c0.343-0.892,0.687-1.853,1.098-2.882c1.372-3.637,2.882-8.235,4.46-13.519c0.48-1.441,0.892-3.019,1.373-4.666\r
                    c0.206-0.756,0.48-1.579,0.686-2.402c0.687-2.47,1.373-5.078,2.128-7.755c0.48-1.852,0.96-3.636,1.441-5.489\r
                    c0.686-2.609,1.373-5.284,2.059-8.029c0.275-1.167,0.618-2.333,0.892-3.569c0.48-1.99,0.961-3.98,1.441-5.97\r
                    c0.48-2.059,0.961-4.117,1.441-6.108c0.48-2.058,0.96-4.186,1.441-6.245c0.48-2.058,0.961-4.117,1.441-6.244\r
                    c1.167-5.215,2.265-10.431,3.362-15.578c0.412-2.059,0.824-4.049,1.235-6.108c0.48-2.402,0.961-4.804,1.372-7.136\r
                    c0.549-2.608,1.029-5.147,1.51-7.687c0.343-1.922,0.686-3.775,1.03-5.627c0.274-1.853,0.618-3.637,0.892-5.421\r
                    c2.265-13.587,3.637-24.704,3.569-30.881c0-1.304,0-4.735,0.068-8.578h54.899v8.578c-0.343,25.665,24.979,138.208,34.929,155.57\r
                    c10.019,17.431,21.822,43.302,19.832,80.289C164.346,288.493,164.14,297.277,164.003,308.394z"></path><path style="opacity:0.1;fill:#f7fbf5;" d="M60.518,53.183c0.344,25.665-24.979,138.208-34.929,155.57\r
                    c-10.019,17.499-21.753,43.301-19.832,80.29c0.275,5.283,0.48,14.067,0.618,25.184c0.137,17.293,0.137,40.077,0.069,63.545\r
                    c-0.137,46.527-0.618,95.387-0.686,107.876v2.471c0,3.499,1.03,6.656,2.814,9.332c-0.618-0.48-1.236-0.96-1.853-1.509\r
                    c-0.549-0.549-1.098-1.097-1.647-1.647c-0.48-0.549-0.961-1.097-1.441-1.716c-0.412-0.549-0.823-1.166-1.166-1.784\r
                    c-0.343-0.686-0.686-1.303-0.961-1.99c-0.274-0.617-0.549-1.303-0.686-2.058c-0.206-0.617-0.343-1.236-0.412-1.922\r
                    c-0.137-0.823-0.206-1.647-0.206-2.539v-2.196c0.069-5.489,0.137-18.803,0.274-36.164c0.069-7.686,0.137-16.195,0.137-25.116\r
                    c0.069-2.95,0.069-5.97,0.069-9.059c0.069-12.283,0.206-25.116,0.206-37.811c0.137-23.469,0.137-46.253-0.069-63.545\r
                    c-0.069-2.745-0.069-5.422-0.137-7.892c0-1.235,0-2.402-0.069-3.569c0-3.431-0.069-6.519-0.206-9.127\r
                    c-0.069-1.716-0.137-3.295-0.206-4.598c-0.892-17.704,1.304-32.939,4.941-45.84c4.049-13.999,9.744-25.391,14.891-34.449\r
                    c0.617-1.098,1.304-2.539,1.99-4.255c0.412-0.892,0.755-1.853,1.098-2.882c1.372-3.637,2.882-8.235,4.46-13.519\r
                    c0.48-1.441,0.892-3.019,1.373-4.666c0.206-0.756,0.48-1.579,0.686-2.402c0.687-2.539,1.441-5.078,2.128-7.755\r
                    c0.48-1.852,0.96-3.636,1.441-5.489c0.686-2.609,1.373-5.284,2.059-8.029c0.275-1.167,0.618-2.333,0.892-3.569\r
                    c0.48-1.99,0.961-3.98,1.441-5.97c0.48-2.059,0.961-4.117,1.441-6.108c0.48-2.058,0.96-4.186,1.441-6.245\r
                    c0.48-2.058,0.961-4.117,1.441-6.244c1.167-5.215,2.265-10.431,3.362-15.578c0.412-2.059,0.824-4.049,1.235-6.108\r
                    c0.48-2.402,0.961-4.804,1.372-7.136c0.549-2.608,1.029-5.147,1.51-7.687c0.343-1.922,0.686-3.775,1.03-5.627\r
                    c0.274-1.853,0.618-3.637,0.892-5.421c2.333-13.587,3.705-24.704,3.637-30.881c0-1.304,0-4.735,0.069-8.578h5.49\r
                    C60.518,42.615,60.45,51.88,60.518,53.183z"></path><path style="fill:#7b6329;" d="M109.859,38.772H54.96c0-2.882,0.069-5.97,0.137-8.578c0.069-1.03,0.069-1.99,0.069-2.814\r
                    c0.069-1.647,0.206-2.813,0.274-3.362h53.938c0.068,0.549,0.137,1.716,0.206,3.362c0.069,0.824,0.069,1.784,0.069,2.814\r
                    C109.79,32.802,109.859,35.89,109.859,38.772z"></path><g><path style="fill:#f1b3af;" d="M114.182,16.47v13.725h-65.81V16.47c0-7.548,6.176-13.725,13.725-13.725h38.36\r
                        c1.716,0,3.431,0.343,4.941,0.961c3.568,1.372,6.451,4.255,7.823,7.823C113.839,13.039,114.182,14.754,114.182,16.47z"></path><path style="fill:#a3784a;" d="M114.182,13.656v13.725h-65.81V13.656C48.372,6.176,54.548,0,62.097,0h38.36\r
                        c0.48,0,0.892,0,1.304,0.069c6.519,0.618,11.735,5.834,12.353,12.353C114.182,12.833,114.182,13.245,114.182,13.656z"></path></g><g><g><path style="fill:#fbedb4;" d="M38.023,352.696l-1.115-4.365h-5.877l-9.488-41.37H38.05l1.247-3.988\r
                            c7.439-23.764,23.911-39.127,41.973-39.17v-6.272c-20.794,0.044-38.702,17.78-46.647,43.156H13.394l12.597,53.918h7.252\r
                            c7.118,27.883,25.954,47.908,48.027,47.954v-6.273C62.044,396.241,44.67,378.738,38.023,352.696z"></path><path style="fill:#9b977e;" d="M39.297,302.973l-1.247,3.988H21.544l9.488,41.37h5.877l1.115,4.365\r
                            c6.647,26.042,24.021,43.544,43.247,43.59V263.803C63.208,263.846,46.736,279.209,39.297,302.973z"></path></g><g><path style="fill:#fbedb4;" d="M124.517,352.696l1.115-4.365h5.877l9.488-41.37H124.49l-1.247-3.988\r
                            c-7.439-23.764-23.91-39.127-41.973-39.17v-6.272c20.794,0.044,38.702,17.78,46.647,43.156h21.229l-12.597,53.918h-7.252\r
                            c-7.118,27.883-25.954,47.908-48.027,47.954v-6.273C100.496,396.241,117.87,378.738,124.517,352.696z"></path><path style="fill:#9b977e;" d="M123.243,302.973l1.247,3.988h16.506l-9.488,41.37h-5.877l-1.115,4.365\r
                            c-6.647,26.042-24.021,43.544-43.247,43.59V263.803C99.332,263.846,115.804,279.209,123.243,302.973z"></path></g></g><polygon style="opacity:0.8;fill:#fbedb4;" points="81.27,301.517 86.504,317.625 103.441,317.625 89.739,327.581 94.973,343.69 \r
                    81.27,333.734 67.567,343.69 72.801,327.581 59.098,317.625 76.036,317.625 	"></polygon><path style="opacity:0.1;fill:#040000;" d="M163.522,283.209c-1.716,31.361,0,188.646,0,199.077\r
                    c0,25.253-51.124,29.165-72.741,29.646c-2.265,0-4.186,0.069-5.696,0.069c-2.47,0-3.843-0.069-3.843-0.069V0h19.215\r
                    c0.48,0,0.892,0,1.304,0.069c6.519,0.618,11.735,5.834,12.353,12.353c0.068,0.412,0.068,0.824,0.068,1.235v16.538h-5.627\r
                    c0.069,2.608,0.137,5.695,0.137,8.578c0.069,3.842,0.069,7.274,0.069,8.509c-0.343,25.734,24.91,138.208,34.93,155.638\r
                    C153.64,220.35,165.444,246.222,163.522,283.209z"></path></g>`,1),rP=[nP];function sP(n,e,t,r,s,i){return v(),S("svg",tP,rP)}const bp=te(eP,[["render",sP]]),iP={name:"PETIcon"},oP={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve"},aP=Sn(`<path style="fill:#e4eaf8;" d="M341.423,126.564l-55.45-62.381c-2.783-3.131-4.319-7.173-4.319-11.362V33.67h-51.307v19.151\r
		c0,4.188-1.537,8.232-4.319,11.362l-55.451,62.382c-5.565,6.261-8.639,14.347-8.639,22.724h188.125\r
		C350.063,140.911,346.988,132.825,341.423,126.564z"></path><path style="fill:#d5dced;" d="M289.254,67.875l-3.281-3.692c-1.285-1.446-2.271-3.101-2.996-4.859l0,0\r
		c-0.416-1.006-0.735-2.049-0.96-3.116c-0.004-0.024-0.015-0.045-0.019-0.068c-0.224-1.085-0.344-2.194-0.344-3.319V42.221h-51.307\r
		v10.601c0,4.188-1.537,8.23-4.319,11.361l-55.451,62.382c-5.565,6.261-8.639,14.347-8.639,22.724h68.409\r
		c0-8.377,1.118-16.463,3.141-22.724l15.696-47.004c2.33-6.979,8.863-11.685,16.222-11.685h23.849V67.875z"></path><path style="fill:#9bf57d;" d="M281.653,42.221h-51.307c-4.722,0-8.551-3.829-8.551-8.551V16.568c0-4.722,3.829-8.551,8.551-8.551\r
		h51.307c4.722,0,8.551,3.829,8.551,8.551V33.67C290.205,38.393,286.376,42.221,281.653,42.221z"></path><path style="fill:#8ce16e;" d="M247.449,33.67V16.568c0-4.722,3.829-8.551,8.551-8.551h-25.653c-4.722,0-8.551,3.829-8.551,8.551\r
		V33.67c0,4.722,3.829,8.551,8.551,8.551H256C251.278,42.221,247.449,38.393,247.449,33.67z"></path><path style="fill:#bbe8fc;" d="M350.063,196.142v-51.307H161.937v51.307c0,9.445,7.658,17.102,17.102,17.102\r
		c-9.445,0-17.102,7.656-17.102,17.102v8.551c0,9.445,7.658,17.102,17.102,17.102c-9.445,0-17.102,7.656-17.102,17.102v8.551\r
		c0,9.445,7.658,17.102,17.102,17.102c-9.445,0-17.102,7.656-17.102,17.102v8.551c0,9.445,7.658,17.102,17.102,17.102\r
		c-9.445,0-17.102,7.656-17.102,17.102v8.551c0,9.445,7.658,17.102,17.102,17.102c-9.445,0-17.102,7.656-17.102,17.102v8.551\r
		c0,9.445,7.658,17.102,17.102,17.102c-9.445,0-17.102,7.656-17.102,17.102v25.653c0,18.891,15.313,34.205,34.205,34.205h119.716\r
		c18.892,0,34.205-15.314,34.205-34.205v-25.653c0-9.446-7.658-17.102-17.102-17.102c9.445,0,17.102-7.658,17.102-17.102v-8.551\r
		c0-9.446-7.658-17.102-17.102-17.102c9.445,0,17.102-7.658,17.102-17.102v-8.551c0-9.446-7.658-17.102-17.102-17.102\r
		c9.445,0,17.102-7.658,17.102-17.102v-8.551c0-9.446-7.658-17.102-17.102-17.102c9.445,0,17.102-7.658,17.102-17.102v-8.551\r
		c0-9.446-7.658-17.102-17.102-17.102c9.445,0,17.102-7.658,17.102-17.102v-8.551c0-9.446-7.658-17.102-17.102-17.102\r
		C342.405,213.244,350.063,205.587,350.063,196.142z"></path><path style="fill:#90ddfa;" d="M230.347,469.779v-25.653c0-9.446,7.658-17.102,17.102-17.102c-9.445,0-17.102-7.658-17.102-17.102\r
		v-8.551c0-9.446,7.658-17.102,17.102-17.102c-9.445,0-17.102-7.658-17.102-17.102v-8.551c0-9.446,7.658-17.102,17.102-17.102\r
		c-9.445,0-17.102-7.658-17.102-17.102v-8.551c0-9.446,7.658-17.102,17.102-17.102c-9.445,0-17.102-7.658-17.102-17.102v-8.551\r
		c0-9.446,7.658-17.102,17.102-17.102c-9.445,0-17.102-7.658-17.102-17.102v-8.551c0-9.446,7.658-17.102,17.102-17.102\r
		c-9.445,0-17.102-7.658-17.102-17.102v-51.307h-68.409v51.307c0,9.445,7.658,17.102,17.102,17.102\r
		c-9.445,0-17.102,7.656-17.102,17.102v8.551c0,9.445,7.658,17.102,17.102,17.102c-9.445,0-17.102,7.656-17.102,17.102v8.551\r
		c0,9.445,7.658,17.102,17.102,17.102c-9.445,0-17.102,7.656-17.102,17.102v8.551c0,9.445,7.658,17.102,17.102,17.102\r
		c-9.445,0-17.102,7.656-17.102,17.102v8.551c0,9.445,7.658,17.102,17.102,17.102c-9.445,0-17.102,7.656-17.102,17.102v8.551\r
		c0,9.445,7.658,17.102,17.102,17.102c-9.445,0-17.102,7.656-17.102,17.102v25.653c0,18.891,15.313,34.205,34.205,34.205h68.409\r
		C245.66,503.983,230.347,488.669,230.347,469.779z"></path><path d="M358.079,149.289c0-10.352-3.787-20.314-10.665-28.051l-55.449-62.38c-1.48-1.665-2.295-3.808-2.295-6.036V48.16\r
		c5.093-2.829,8.551-8.26,8.551-14.489V16.569C298.221,7.432,290.789,0,281.653,0h-51.307c-9.136,0-16.568,7.432-16.568,16.568V33.67\r
		c0,6.228,3.458,11.659,8.551,14.489v4.663c0,2.228-0.816,4.371-2.295,6.036l-55.449,62.381\r
		c-6.877,7.737-10.665,17.699-10.665,28.051v46.853c0,6.603,2.564,12.614,6.745,17.102c-4.18,4.488-6.745,10.5-6.745,17.102v8.551\r
		c0,6.603,2.564,12.614,6.745,17.102c-4.18,4.488-6.745,10.5-6.745,17.102v8.551c0,6.603,2.564,12.614,6.745,17.102\r
		c-4.18,4.488-6.745,10.5-6.745,17.102v8.551c0,6.603,2.564,12.614,6.745,17.102c-4.18,4.488-6.745,10.5-6.745,17.102v8.551\r
		c0,6.603,2.564,12.614,6.745,17.102c-4.18,4.488-6.745,10.5-6.745,17.102v8.551c0,6.603,2.564,12.614,6.745,17.102\r
		c-4.18,4.488-6.745,10.5-6.745,17.102v25.653c0,23.28,18.941,42.221,42.221,42.221h119.716c23.281,0,42.221-18.941,42.221-42.221\r
		v-25.653c0-6.603-2.564-12.614-6.745-17.102c4.18-4.488,6.745-10.5,6.745-17.102v-8.551c0-6.603-2.564-12.614-6.745-17.102\r
		c4.18-4.488,6.745-10.5,6.745-17.102v-8.551c0-6.603-2.564-12.614-6.745-17.102c4.18-4.488,6.745-10.5,6.745-17.102v-8.551\r
		c0-6.603-2.564-12.614-6.745-17.102c4.18-4.488,6.745-10.5,6.745-17.102v-8.551c0-6.603-2.564-12.614-6.745-17.102\r
		c4.18-4.488,6.745-10.5,6.745-17.102v-8.551c0-6.603-2.564-12.614-6.745-17.102c4.18-4.488,6.745-10.5,6.745-17.102V149.289z\r
		M229.812,16.568c0-0.295,0.239-0.534,0.534-0.534h51.307c0.295,0,0.534,0.239,0.534,0.534V33.67c0,0.295-0.239,0.534-0.534,0.534\r
		h-51.307c-0.295,0-0.534-0.239-0.534-0.534V16.568z M176.568,131.891l55.45-62.381c4.092-4.604,6.345-10.53,6.345-16.688v-2.585\r
		h35.273v2.584c0,6.158,2.253,12.085,6.345,16.689l55.449,62.381c1.346,1.514,2.476,3.176,3.427,4.928H173.143\r
		C174.093,135.066,175.224,133.403,176.568,131.891z M342.046,469.779c0,14.44-11.748,26.188-26.188,26.188H196.142\r
		c-14.44,0-26.188-11.748-26.188-26.188v-25.653c0-5.01,4.076-9.086,9.086-9.086H332.96c5.01,0,9.086,4.076,9.086,9.086V469.779z\r
		M342.046,409.921c0,5.01-4.076,9.086-9.086,9.086H179.04c-5.01,0-9.086-4.076-9.086-9.086v-8.551c0-5.01,4.076-9.086,9.086-9.086\r
		H332.96c5.01,0,9.086,4.076,9.086,9.086V409.921z M342.046,367.165c0,5.01-4.076,9.086-9.086,9.086H179.04\r
		c-5.01,0-9.086-4.076-9.086-9.086v-8.551c0-5.01,4.076-9.086,9.086-9.086H332.96c5.01,0,9.086,4.076,9.086,9.086V367.165z\r
		M342.046,324.409c0,5.01-4.076,9.086-9.086,9.086H179.04c-5.01,0-9.086-4.076-9.086-9.086v-8.551c0-5.01,4.076-9.086,9.086-9.086\r
		H332.96c5.01,0,9.086,4.076,9.086,9.086V324.409z M342.046,281.653c0,5.01-4.076,9.086-9.086,9.086H179.04\r
		c-5.01,0-9.086-4.076-9.086-9.086v-8.551c0-5.01,4.076-9.086,9.086-9.086H332.96c5.01,0,9.086,4.076,9.086,9.086V281.653z\r
		M342.046,238.898c0,5.01-4.076,9.086-9.086,9.086H179.04c-5.01,0-9.086-4.076-9.086-9.086v-8.551c0-5.01,4.076-9.086,9.086-9.086\r
		H332.96c5.01,0,9.086,4.076,9.086,9.086V238.898z M332.96,205.228H179.04c-5.01,0-9.086-4.076-9.086-9.086v-43.29h172.092v43.29\r
		C342.046,201.152,337.97,205.228,332.96,205.228z"></path>`,7),cP=[aP];function lP(n,e,t,r,s,i){return v(),S("svg",oP,cP)}const Ap=te(iP,[["render",lP]]),uP={name:"PlasticIcon"},hP={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve"},dP=Sn(`<polygon style="fill:#67c7a2;" points="416.135,164.363 361.667,503.83 150.331,503.83 106.756,164.363 "></polygon><g><path style="fill:#38a287;" d="M432.269,8.17v479.123c0,9.096-7.439,16.536-16.536,16.536h-54.065V164.363V8.17H432.269z"></path><path style="fill:#38a287;" d="M150.331,164.363V503.83H96.266c-9.097,0-16.538-7.44-16.538-16.536V8.17h70.603V164.363z"></path></g><path d="M263.074,251.294c-1.46-2.527-4.156-4.085-7.075-4.085s-5.616,1.558-7.075,4.085l-59.93,103.801\r
        c-1.46,2.527-1.46,5.643,0,8.17c1.46,2.527,4.156,4.085,7.075,4.085h49.917l-5.022,5.24c-3.122,3.257-3.014,8.429,0.244,11.552\r
        c1.584,1.517,3.62,2.272,5.653,2.272c2.149,0,4.294-0.842,5.899-2.516l18.274-19.064c0.064-0.066,0.118-0.138,0.179-0.206\r
        c0.099-0.11,0.198-0.219,0.291-0.334c0.079-0.099,0.154-0.203,0.228-0.305c0.081-0.109,0.16-0.218,0.235-0.33\r
        c0.073-0.112,0.139-0.227,0.208-0.341c0.066-0.112,0.132-0.222,0.193-0.338c0.063-0.118,0.117-0.239,0.173-0.359\r
        c0.056-0.118,0.111-0.235,0.161-0.356c0.049-0.121,0.09-0.244,0.134-0.367c0.044-0.124,0.089-0.249,0.127-0.377\r
        c0.038-0.126,0.066-0.255,0.099-0.383c0.03-0.127,0.066-0.252,0.09-0.381c0.029-0.148,0.048-0.296,0.069-0.446\r
        c0.016-0.111,0.036-0.221,0.047-0.333c0.052-0.529,0.052-1.063,0-1.593c-0.011-0.113-0.03-0.222-0.047-0.333\r
        c-0.021-0.149-0.038-0.297-0.069-0.446c-0.024-0.13-0.06-0.254-0.09-0.381c-0.032-0.127-0.061-0.256-0.099-0.383\r
        c-0.038-0.127-0.084-0.252-0.127-0.377c-0.044-0.123-0.085-0.246-0.134-0.367c-0.05-0.121-0.106-0.239-0.161-0.356\r
        c-0.057-0.121-0.111-0.241-0.173-0.359c-0.061-0.114-0.126-0.225-0.193-0.338c-0.069-0.114-0.134-0.229-0.208-0.341\r
        c-0.074-0.112-0.155-0.221-0.235-0.33c-0.074-0.102-0.148-0.206-0.228-0.305c-0.093-0.117-0.192-0.224-0.291-0.334\r
        c-0.061-0.069-0.114-0.139-0.179-0.206l-18.274-19.064c-3.121-3.257-8.294-3.367-11.552-0.244\r
        c-3.257,3.122-3.366,8.294-0.244,11.552l5.022,5.24H210.22l45.779-79.29l45.778,79.29h-6.727c-4.513,0-8.17,3.658-8.17,8.17\r
        c0,4.512,3.657,8.17,8.17,8.17h20.878c2.919,0,5.616-1.558,7.075-4.085c1.46-2.527,1.46-5.643,0-8.17L263.074,251.294z"></path><path d="M361.667,189.98c-4.513,0-8.17,3.658-8.17,8.17v270.003c0,4.512,3.657,8.17,8.17,8.17c4.513,0,8.17-3.658,8.17-8.17V198.151\r
        C369.837,193.638,366.18,189.98,361.667,189.98z"></path><path d="M150.331,189.98c-4.513,0-8.17,3.658-8.17,8.17v32.681c0,4.512,3.657,8.17,8.17,8.17c4.513,0,8.17-3.658,8.17-8.17v-32.681\r
        C158.501,193.638,154.844,189.98,150.331,189.98z"></path><path d="M150.331,255.342c-4.513,0-8.17,3.658-8.17,8.17v204.641c0,4.512,3.657,8.17,8.17,8.17c4.513,0,8.17-3.658,8.17-8.17\r
        V263.512C158.501,259,154.844,255.342,150.331,255.342z"></path><path d="M432.274,0h-70.607c-4.513,0-8.17,3.658-8.17,8.17v148.021H158.501V8.17c0-4.512-3.657-8.17-8.17-8.17H79.725\r
        c-4.513,0-8.17,3.658-8.17,8.17v479.119C71.555,500.915,82.64,512,96.266,512h319.468c13.626,0,24.711-11.085,24.711-24.711V8.17\r
        C440.444,3.658,436.786,0,432.274,0z M424.104,487.289c0,4.616-3.755,8.371-8.371,8.371H96.265c-4.615,0-8.371-3.755-8.371-8.371\r
        V16.34h54.267v148.021c0,4.512,3.657,8.17,8.17,8.17h211.336c4.513,0,8.17-3.658,8.17-8.17V16.34h54.267V487.289z"></path>`,7),fP=[dP];function pP(n,e,t,r,s,i){return v(),S("svg",hP,fP)}const Rp=te(uP,[["render",pP]]),mP={name:"ThrowAwayIcon"},gP={version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve"},_P=Sn(`<g><path class="st0" d="M168.299,86.264c23.815,0,43.127-19.304,43.127-43.128C211.426,19.312,192.114,0,168.299,0\r
			c-23.832,0-43.144,19.312-43.144,43.136C125.155,66.959,144.467,86.264,168.299,86.264z"></path><path class="st0" d="M389.331,132.104v-0.851c0-12.779-10.352-23.131-23.13-23.131H171.904c-46.82,0-88.396,15.612-98.772,67.516\r
			L41.447,307.916c-2.228,9.962,4.042,19.829,14.005,22.057c9.946,2.22,19.813-4.05,22.033-14.004l33.332-88.132l8.625,262.281\r
			c0,12.087,9.795,21.882,21.874,21.882c12.095,0,21.891-9.796,21.891-21.882l8.697-156.413l8.681,156.413\r
			c0,12.087,9.803,21.882,21.882,21.882c12.087,0,21.891-9.796,21.891-21.882l12.309-316.748l132.708-18.357\r
			C380.809,153.429,389.331,143.65,389.331,132.104z"></path><rect x="336.541" y="225.644" transform="matrix(-0.7648 0.6443 -0.6443 -0.7648 820.1971 192.6535)" class="st0" width="76.783" height="40.794"></rect><path class="st0" d="M336.543,448.804c0,9.286,7.52,16.806,16.797,16.806c9.27,0,16.798-7.52,16.798-16.806\r
			c0-9.278-7.528-16.789-16.798-16.789C344.063,432.015,336.543,439.526,336.543,448.804z"></path><rect x="377.332" y="381.615" class="st0" width="35.998" height="35.998"></rect><polygon class="st0" points="442.046,297.636 422.424,483.203 322.603,483.203 302.981,297.636 274.033,297.636 296.695,512 \r
			448.333,512 471.003,297.636 	"></polygon></g>`,1),yP=[_P];function vP(n,e,t,r,s,i){return v(),S("svg",gP,yP)}const xp=te(mP,[["render",vP]]),wP={name:"AppGarbageDayWeek",props:["day","today"],components:{BurnableIcon:Ip,CanIcon:Ep,CardboardIcon:Tp,GlassIcon:bp,PETIcon:Ap,PlasticIcon:Rp,ThrowAwayIcon:xp}},IP={class:"relative text-center top-3"},EP={key:6,class:"flex flex-row justify-center items-center align-middle tracking-widest"};function TP(n,e,t,r,s,i){const o=z("BurnableIcon"),a=z("CanIcon"),c=z("CardboardIcon"),l=z("GlassIcon"),u=z("PETIcon"),h=z("PlasticIcon"),d=z("ThrowAwayIcon");return v(),S("div",{class:pe(["flex flex-row justify-center w-full h-14 mt-3 rounded-full border-4",{" border-red-800":t.day.id===t.today," border-sky-700":t.day.id!==t.today}])},[f("div",{class:pe(["w-1/6 h-full rounded-l-full text-slate-50 font-montserrat font-bold text-md",{"bg-red-500 ":t.day.id===t.today,"bg-sky-400 ":t.day.id!==t.today}])},[f("p",IP,ie(t.day.text),1)],2),f("div",{class:pe(["flex flex-row justify-around w-4/6 h-full py-1 px-3 bg-opacity-90",{"bg-red-50 ":t.day.id===t.today,"bg-sky-50":t.day.id!==t.today}])},[t.day.icon.includes("Burn")?(v(),me(o,{key:0,height:"100%"})):se("",!0),t.day.icon.includes("Can")?(v(),me(a,{key:1,height:"100%"})):se("",!0),t.day.icon.includes("Cardboard")?(v(),me(c,{key:2,height:"100%"})):se("",!0),t.day.icon.includes("Glass")?(v(),me(l,{key:3,height:"100%"})):se("",!0),t.day.icon.includes("PET")?(v(),me(u,{key:4,height:"100%"})):se("",!0),t.day.icon.includes("Plastic")?(v(),me(h,{key:5,height:"100%"})):se("",!0),t.day.id===0?(v(),S("div",EP,[f("p",{class:pe(["font-montserrat capitalize italic font-bold text-center text-xl text-sky-900",{"text-red-950":t.today===0}])}," Team change ! ",2)])):se("",!0)],2),f("div",{class:pe(["flex justify-center items-center h-full w-1/6 px-2 rounded-r-full",{"bg-red-400 ":t.day.id===t.today,"bg-sky-300 0":t.day.id!==t.today}])},[t.day.icon.includes("Throw")?(v(),me(d,{key:0,height:"80%"})):se("",!0)],2)],2)}const bP=te(wP,[["render",TP]]),AP={name:"AppGarbageExplanation",components:{BurnableIcon:Ip,CanIcon:Ep,CardboardIcon:Tp,GlassIcon:bp,PETIcon:Ap,PlasticIcon:Rp,ThrowAwayIcon:xp},props:{toggle:Function}},RP={class:"flex flex-row w-full h-full"},xP={class:"flex flex-col justify-around items-start w-3/6 px-1"},PP={class:"flex flex-row justify-around items-center w-full h-1/4"},SP=f("p",{class:"w-3/4"},"Can",-1),CP={class:"flex flex-row justify-around items-center w-full h-1/4"},kP=f("p",{class:"w-3/4"},"Burnable",-1),DP={class:"flex flex-row justify-around items-center w-full h-1/4"},NP=f("p",{class:"w-3/4"},"Cardboard",-1),VP={class:"flex flex-col justify-around items-start w-3/6 px-1"},OP={class:"flex flex-row justify-around items-center w-full h-1/4"},MP=f("p",{class:"w-3/4"},"Glass",-1),LP={class:"flex flex-row justify-around items-center w-full h-1/4"},FP=f("p",{class:"w-3/4"},"PET",-1),UP={class:"flex flex-row justify-around items-center w-full h-1/4"},$P=f("p",{class:"w-3/4"},"Plastic",-1),BP={class:"w-full h-full px-7"},jP={class:"flex flex-row justify-around items-center h-full"},qP=f("p",{class:"w-5/6"},"Take the garbage out",-1);function zP(n,e,t,r,s,i){const o=z("CanIcon"),a=z("BurnableIcon"),c=z("CardboardIcon"),l=z("GlassIcon"),u=z("PETIcon"),h=z("PlasticIcon"),d=z("ThrowAwayIcon");return v(),S("div",{class:"flex flex-col w-5/6 h-fit absolute left-1/2 top-1/2 transform -translate-x-1/2 z-10 p-1 border-4 rounded-2xl border-slate-500 bg-slate-50 bg-opacity-90 text-lg text-emerald-950 font-montserrat font-semibold text-center",onClick:e[0]||(e[0]=Ht((...m)=>t.toggle&&t.toggle(...m),["prevent"]))},[f("div",RP,[f("div",xP,[f("div",PP,[oe(o,{class:"w-1/4",height:"100%"}),SP]),f("div",CP,[oe(a,{class:"w-1/4",height:"100%"}),kP]),f("div",DP,[oe(c,{class:"w-1/4",height:"100%"}),NP])]),f("div",VP,[f("div",OP,[oe(l,{class:"w-1/4",height:"100%"}),MP]),f("div",LP,[oe(u,{class:"w-1/4",height:"100%"}),FP]),f("div",UP,[oe(h,{class:"w-1/4",height:"100%"}),$P])])]),f("div",BP,[f("div",jP,[oe(d,{class:"w-1/6",height:"100%"}),qP])])])}const GP=te(AP,[["render",zP]]),KP={name:"RobotIcon"},WP={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512.001 512.001","xml:space":"preserve"},HP=Sn(`<circle style="fill:#f7a872;" cx="256.208" cy="30.844" r="22.45"></circle><path style="fill:#e88158;" d="M305.292,155.633c0-27.106-21.974-49.08-49.08-49.08s-49.08,21.974-49.08,49.08"></path><path style="fill:#d37250;" d="M256.212,106.553c-9.947,0-17.996,21.977-17.996,49.08h-31.084\r
		C207.132,128.529,229.098,106.553,256.212,106.553z"></path><g><path style="fill:#e6e6e6;" d="M366.394,155.633H146.03c-26.49,0-47.964,21.474-47.964,47.964v128.749\r
			c0,26.49,21.474,47.964,47.964,47.964h220.365c26.49,0,47.964-21.474,47.964-47.964V203.597\r
			C414.358,177.107,392.884,155.633,366.394,155.633z"></path><path style="fill:#e6e6e6;" d="M414.358,504.035v-37.637c0-26.49-21.474-47.964-47.964-47.964H146.03\r
			c-26.49,0-47.964,21.474-47.964,47.964v37.637"></path></g><g><path style="fill:#cccccc;" d="M186.922,380.308h-40.889c-26.492,0-47.967-21.475-47.967-47.967V203.599\r
			c0-26.492,21.475-47.967,47.967-47.967h40.889c-26.481,0-47.956,21.475-47.956,47.967v128.742\r
			C138.966,358.834,160.441,380.308,186.922,380.308z"></path><path style="fill:#cccccc;" d="M186.922,418.438c-26.481,0-47.956,21.475-47.956,47.956v37.639h-40.9v-37.639\r
			c0-26.481,21.475-47.956,47.967-47.956H186.922z"></path><rect x="146.029" y="380.314" style="fill:#cccccc;" width="220.368" height="38.125"></rect></g><path style="fill:#f7a872;" d="M298.032,308.326h-83.641c-17.261,0-31.254,13.993-31.254,31.254v40.73h146.149v-40.73\r
		C329.286,322.319,315.293,308.326,298.032,308.326z"></path><path style="fill:#e09461;" d="M298.032,308.326h-83.641c-17.261,0-31.254,13.993-31.254,31.254v21.813\r
		c0-17.261,13.993-31.254,31.254-31.254h83.641c17.261,0,31.254,13.993,31.254,31.254V339.58\r
		C329.286,322.319,315.293,308.326,298.032,308.326z"></path><g><circle style="fill:#dda758;" cx="347.136" cy="249.434" r="31.629"></circle><path style="fill:#dda758;" d="M196.916,249.43c0,3.741-0.643,7.318-1.843,10.645c-4.363,12.237-16.055,20.984-29.786,20.984\r
			c-13.731,0-25.423-8.747-29.786-20.984c-1.2-3.327-1.843-6.904-1.843-10.645c0-17.472,14.157-31.629,31.629-31.629\r
			S196.916,231.957,196.916,249.43z"></path></g><g><path style="fill:#f4bd64;" d="M195.073,260.075c-4.363,12.237-16.055,20.984-29.786,20.984c-13.731,0-25.423-8.747-29.786-20.984\r
			c4.363-12.237,16.044-20.995,29.786-20.995C179.029,239.079,190.71,247.837,195.073,260.075z"></path><path style="fill:#f4bd64;" d="M376.923,260.075c-4.363,12.237-16.055,20.984-29.786,20.984s-25.423-8.747-29.786-20.984\r
			c4.363-12.237,16.044-20.995,29.786-20.995S372.561,247.837,376.923,260.075z"></path></g><path d="M414.146,225.211c4.519,0,8.18-3.662,8.18-8.18v-13.647c0-30.957-25.186-56.144-56.144-56.144H215.924\r
		c3.8-18.646,20.324-32.72,40.076-32.72c14.746,0,28.408,7.99,35.658,20.851c2.217,3.936,7.206,5.326,11.142,3.109\r
		c3.935-2.218,5.328-7.207,3.109-11.142c-8.787-15.591-24.316-26.059-41.73-28.582V60.141c12.929-3.588,22.45-15.456,22.45-29.511\r
		c0-16.889-13.74-30.63-30.63-30.63c-16.89,0-30.63,13.741-30.63,30.63c0,14.056,9.52,25.923,22.45,29.511v38.612\r
		c-25.037,3.598-44.888,23.448-48.486,48.486h-53.517c-30.958,0-56.144,25.186-56.144,56.144v128.749\r
		c0,28.179,20.87,51.569,47.964,55.541v22.97c-27.094,3.973-47.964,27.361-47.964,55.541v37.637c0,4.518,3.661,8.18,8.18,8.18\r
		c4.519,0,8.18-3.662,8.18-8.18v-37.637c0-21.936,17.846-39.784,39.784-39.784h162.537c4.519,0,8.18-3.662,8.18-8.18\r
		s-3.661-8.18-8.18-8.18H153.999v-21.765h204.005v21.765h-22.381c-4.519,0-8.18,3.662-8.18,8.18s3.661,8.18,8.18,8.18h30.561\r
		c21.936,0,39.784,17.846,39.784,39.784v37.637c0,4.518,3.661,8.18,8.18,8.18s8.18-3.662,8.18-8.18v-37.637\r
		c0-28.179-20.87-51.569-47.964-55.541v-22.97c27.094-3.973,47.964-27.363,47.964-55.541v-87.835c0-4.518-3.661-8.18-8.18-8.18\r
		s-8.18,3.662-8.18,8.18v87.835c0,21.936-17.846,39.784-39.784,39.784h-28.929v-32.55c0-21.745-17.691-39.435-39.434-39.435H214.18\r
		c-21.745,0-39.434,17.691-39.434,39.434v32.55h-28.928c-21.936,0-39.784-17.846-39.784-39.784V203.383\r
		c0-21.936,17.846-39.784,39.784-39.784h220.365c21.936,0,39.784,17.846,39.784,39.784v13.647\r
		C405.966,221.548,409.629,225.211,414.146,225.211z M241.73,30.63c0-7.868,6.401-14.27,14.27-14.27c7.869,0,14.27,6.402,14.27,14.27\r
		s-6.401,14.269-14.27,14.269C248.131,44.899,241.73,38.498,241.73,30.63z M222.36,316.292h25.46v55.624h-25.46V316.292z\r
		M320.895,339.366v32.55h-14.894V350.09c0-4.518-3.661-8.18-8.18-8.18s-8.18,3.662-8.18,8.18v21.825h-25.46v-55.624h25.46v11.985\r
		c0,4.518,3.661,8.18,8.18,8.18s8.18-3.662,8.18-8.18v-10.461C314.692,321.129,320.895,329.526,320.895,339.366z M191.106,339.366\r
		c0-9.84,6.203-18.238,14.894-21.549v54.099h-14.894V339.366z"></path><path d="M307.117,249.216c0,21.951,17.858,39.809,39.809,39.809s39.809-17.858,39.809-39.809s-17.858-39.809-39.809-39.809\r
		S307.117,227.265,307.117,249.216z M370.375,249.216c0,12.93-10.519,23.449-23.449,23.449s-23.449-10.519-23.449-23.449\r
		c0-12.93,10.519-23.449,23.449-23.449S370.375,236.286,370.375,249.216z"></path><path d="M125.266,249.216c0,21.951,17.858,39.809,39.809,39.809s39.809-17.858,39.809-39.809s-17.858-39.809-39.809-39.809\r
		S125.266,227.265,125.266,249.216z M188.525,249.216c0,12.93-10.519,23.449-23.449,23.449s-23.449-10.519-23.449-23.449\r
		c0-12.93,10.519-23.449,23.449-23.449S188.525,236.286,188.525,249.216z"></path><path d="M202.833,447.653h-5.725c-4.519,0-8.18,3.662-8.18,8.18s3.661,8.18,8.18,8.18h5.725c4.519,0,8.18-3.662,8.18-8.18\r
		S207.352,447.653,202.833,447.653z"></path><path d="M153.757,464.013h21.538c4.519,0,8.18-3.662,8.18-8.18s-3.661-8.18-8.18-8.18h-21.538c-4.519,0-8.18,3.662-8.18,8.18\r
		S149.239,464.013,153.757,464.013z"></path><path d="M202.833,473.827h-49.076c-4.519,0-8.18,3.662-8.18,8.18s3.661,8.18,8.18,8.18h49.076c4.519,0,8.18-3.662,8.18-8.18\r
		S207.352,473.827,202.833,473.827z"></path><path d="M358.245,447.653h-49.078c-4.519,0-8.18,3.662-8.18,8.18s3.661,8.18,8.18,8.18h49.078c4.519,0,8.18-3.662,8.18-8.18\r
		S362.763,447.653,358.245,447.653z"></path><path d="M358.245,473.827h-49.078c-4.519,0-8.18,3.662-8.18,8.18s3.661,8.18,8.18,8.18h49.078c4.519,0,8.18-3.662,8.18-8.18\r
		S362.763,473.827,358.245,473.827z"></path>`,17),QP=[HP];function YP(n,e,t,r,s,i){return v(),S("svg",WP,QP)}const Zw=te(KP,[["render",YP]]),Ts=_u("rooms",{state:()=>({listRooms:{A101:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},A1021:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},A1022:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},A201:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},A202:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},A203:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},A204:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},A205:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},A2061:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},A2062:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},B101:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},B102:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},B103:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},B104:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},B201:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},B202:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},B203:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]},B204:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmail:"",roomEmoji:"",roomEvents:[]}},duoRoomsGarbage:[["B104","B201"],["B202","B203"],["B204","A101"],["A1021","A1022"],["A201","A202"],["A203","A204"],["A205","B101"],["A2061","A2062"],["B102","B103"]],duoRoomsGroceries:[["A203","B202"],["A204","B203"],["A205","B204"],["A2061","A2062"],["A101","B101"],["A1021","B102"],["A1022","B103"],["A201","B104"],["A202","B201"]]}),actions:{async getAllRooms(){try{return(await Bv(zf(Jc,"users"))).forEach(e=>{this.listRooms[e.id]=e.data()}),!0}catch{return console.log("Something went wrong when importing the rooms"),!1}}}}),Pp=_u("chores",{state:()=>({}),getters:{weekIDs:()=>{const n=new Date,e=Date.parse("January 1, 2023");let r=n.getTime()-e;const s=1e3*60*60*24*7,i=Math.floor(r/s);let o=1,a=i%9+o,c=a+1,l=a-1;return a>=9&&(a=0),a===8?(c=0,l=7):a===0&&(c=1,l=8),{lastWeekID:l,thisWeekID:a,nextWeekID:c}},getDateToday:()=>new Date().getDay(),monthIDs:()=>{const n=new Date,e=new Date("2023-01-01"),t=n.getMonth(),r=n.getYear(),s=e.getMonth(),i=e.getYear();let a=((r-i)*12+(t-s))%9,c=a+1,l=a-1;return a===8?(c=0,l=7):a===0&&(c=1,l=8),{lastMonthID:l,thisMonthID:a,nextMonthID:c}}}}),JP={name:"AppChoresGarbage",data(){return{toggleExplanation:!1}},methods:{closeTabExp(){this.toggleExplanation=!1}},computed:{...jn(Ts,["listRooms","duoRoomsGarbage"]),...jn(Pp,["weekIDs","getDateToday"])},components:{AppGarbageDayWeek:bP,AppGarbageExplanation:GP,RobotIcon:Zw},props:["daysWeek"]},XP={class:"flex flex-row h-28 items-center justify-center mt-4 px-2 bg-slate-50 bg-opacity-50 border-2 border-sky-700 rounded-xl font-montserrat"},ZP={class:"flex flex-col ml-2"},eS={class:"my-1 text-sky-700 opacity-60"},tS={class:"font-bold"},nS={class:"font-bold"},rS={class:"text-lg text-sky-900"},sS={class:"font-bold"},iS={class:"font-bold"},oS={class:"my-1 text-sky-700 opacity-60"},aS={class:"font-bold"},cS={class:"font-bold"},lS={class:"flex justify-end pr-8 mt-2 w-full"},uS=f("p",{class:"relative top-0.5 font-montserrat font-bold text-3xl text-slate-700"},"?",-1),hS=[uS],dS={class:"relative w-full"},fS={class:"flex flex-col items-center px-3 py-2 mx-2 border-2 border-sky-400 rounded-3xl bg-slate-50 bg-opacity-30 overflow-y-auto",style:{width:"95%"}};function pS(n,e,t,r,s,i){const o=z("RobotIcon"),a=z("AppGarbageExplanation"),c=z("AppGarbageDayWeek");return v(),S(De,null,[f("div",XP,[oe(o,{height:"70%"}),f("div",ZP,[f("p",eS,[ye(" Last week: "),f("span",tS,ie(n.listRooms[n.duoRoomsGarbage[n.weekIDs.lastWeekID][0]].residentName),1),ye(" & "),f("span",nS,ie(n.listRooms[n.duoRoomsGarbage[n.weekIDs.lastWeekID][1]].residentName),1)]),f("p",rS,[ye(" This week: "),f("span",sS,ie(n.listRooms[n.duoRoomsGarbage[n.weekIDs.thisWeekID][0]].residentName),1),ye(" & "),f("span",iS,ie(n.listRooms[n.duoRoomsGarbage[n.weekIDs.thisWeekID][1]].residentName),1)]),f("p",oS,[ye(" Next week: "),f("span",aS,ie(n.listRooms[n.duoRoomsGarbage[n.weekIDs.nextWeekID][0]].residentName),1),ye(" & "),f("span",cS,ie(n.listRooms[n.duoRoomsGarbage[n.weekIDs.nextWeekID][1]].residentName),1)])])]),f("div",lS,[f("div",{class:"h-10 w-10 border-2 border-slate-400 rounded-full bg-slate-300 text-center active:scale-95",onClick:e[0]||(e[0]=Ht(l=>s.toggleExplanation=!s.toggleExplanation,["prevent"]))},hS)]),Oe(f("div",dS,[oe(a,{toggle:i.closeTabExp},null,8,["toggle"])],512),[[ol,s.toggleExplanation===!0]]),f("div",fS,[(v(!0),S(De,null,Bn(t.daysWeek,l=>(v(),S("div",{class:"flex flex-col w-full",key:l.text},[oe(c,{day:l,today:n.getDateToday},null,8,["day","today"])]))),128))])],64)}const mS=te(JP,[["render",pS]]),gS="/tin-foil.png",_S={name:"TinFoilIcon"},yS={src:gS,alt:"tin-foil img"};function vS(n,e,t,r,s,i){return v(),S("img",yS)}const wS=te(_S,[["render",vS]]),IS="/plastic-bags.png",ES={name:"PlasticBagsIcon"},TS={src:IS,alt:"plastic bags img"};function bS(n,e,t,r,s,i){return v(),S("img",TS)}const AS=te(ES,[["render",bS]]),RS="/dish-soap.png",xS={name:"DishSoapIcon"},PS={src:RS,alt:"dish-soap img"};function SS(n,e,t,r,s,i){return v(),S("img",PS)}const CS=te(xS,[["render",SS]]),kS="/plastic-wrap.png",DS={name:"PlasticWrapIcon"},NS={src:kS,alt:"plastic wrap img"};function VS(n,e,t,r,s,i){return v(),S("img",NS)}const OS=te(DS,[["render",VS]]),MS={name:"SoapIcon"},LS={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512.001 512.001","xml:space":"preserve"},FS=Sn(`<path style="fill:#74d6d0;" d="M399.726,222.4c-34.151,0-61.934-27.784-61.934-61.934c0-9.926,2.4-19.737,6.96-28.518\r
	c0.303-0.706,0.649-1.399,1.039-2.074l36.696-63.561c3.529-6.113,10.051-9.878,17.109-9.878h-0.001\r
	c7.06,0,13.582,3.766,17.111,9.878l34.382,59.556c6.92,10.252,10.572,22.195,10.572,34.598\r
	C461.662,194.616,433.877,222.4,399.726,222.4z"></path><path style="fill:#707070;" d="M196.558,129.807c-10.911,0-19.757-8.846-19.757-19.757V19.757C176.802,8.846,185.647,0,196.558,0\r
	s19.757,8.846,19.757,19.757v90.294C216.315,120.962,207.469,129.807,196.558,129.807z"></path><path style="fill:#06aba4;" d="M398.788,39.513H149.817c-10.911,0-19.757-8.846-19.757-19.757S138.906,0,149.817,0h248.971\r
	c10.911,0,19.757,8.846,19.757,19.757S409.699,39.513,398.788,39.513z"></path><path style="fill:#ff8546;" d="M255.808,210.143H137.31c-10.911,0-19.757-8.846-19.757-19.757v-80.336\r
	c0-10.911,8.846-19.757,19.757-19.757h118.499c10.911,0,19.757,8.846,19.757,19.757v80.336\r
	C275.565,201.297,266.719,210.143,255.808,210.143z"></path><path style="fill:#4cd6d5;" d="M258.976,512H134.142c-46.208,0-83.8-37.591-83.8-83.797V254.427c0-46.207,37.593-83.798,83.8-83.798\r
	h124.834c46.208,0,83.8,37.592,83.8,83.798v173.775C342.776,474.409,305.183,512,258.976,512z"></path><path style="fill:#e03905;" d="M255.808,90.294H197.03v119.849h58.778c10.911,0,19.757-8.846,19.757-19.757v-80.336\r
	C275.565,99.139,266.719,90.294,255.808,90.294z"></path><path style="fill:#06aba4;" d="M258.976,170.63H197.03v341.372h61.946c46.208,0,83.8-37.592,83.8-83.797V254.427\r
	C342.776,208.221,305.183,170.63,258.976,170.63z"></path>`,7),US=[FS];function $S(n,e,t,r,s,i){return v(),S("svg",LS,US)}const BS=te(MS,[["render",$S]]),jS="/sponge.png",qS={name:"SpongeIcon"},zS={src:jS,alt:"Sponge icon"};function GS(n,e,t,r,s,i){return v(),S("img",zS)}const KS=te(qS,[["render",GS]]),WS={name:"CleaningProductIcon"},HS={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 494.4 494.4","xml:space":"preserve"},QS=Sn(`<path style="fill:#668b96;" d="M246.388,89.6c4,4,4,34.4,0,38.4l-50.4,26.4c-5.6,2.4-9.6,4-13.6,0l0,0c-4-4-4-9.6,0-13.6l50.4-50.4\r
	C236.788,86.4,242.388,86.4,246.388,89.6L246.388,89.6z"></path><path style="fill:#54737f;" d="M246.388,89.6c4,4,4,34.4,0,38.4l-50.4,26.4c-5.6,2.4-9.6,4-13.6,0l0,0c-4-4-4-9.6,0-13.6l59.2-40.8\r
	C244.788,96,242.388,86.4,246.388,89.6L246.388,89.6z"></path><path style="fill:#62d122;" d="M159.188,54.4c0,8.8-7.2,16-16,16l0,0c-8.8,0-16-7.2-16-16v-16c0-8.8,7.2-16,16-16l0,0\r
	c8.8,0,16,7.2,16,16V54.4z"></path><path style="fill:#4db20d;" d="M159.188,38.4v16.8c0,9.6-6.4,17.6-16,17.6l0,0c-9.6,0-16-8-16-17.6V38.4"></path><path style="fill:#afccd8;" d="M352.788,59.2c0,10.4,1.6,51.2-48.8,57.6L162.388,88c-10.4,0-20-8.8-20-19.2v-40\r
	c0-10.4,9.6-19.2,20-19.2l148.8-9.6c10.4,0,19.2,8.8,19.2,19.2L352.788,59.2z"></path><path style="fill:#7fa6b5;" d="M311.988,70.4c10.4,0,19.2,4.8,19.2,10.4l-9.6,76.8c0,5.6-8.8,9.6-19.2,9.6h-40\r
	c-10.4,0-19.2-4-19.2-9.6l-9.6-76.8c0-5.6,8.8-9.6,19.2-9.6h59.2V70.4z"></path><path style="fill:#99b9c9;" d="M311.988,0c10.4,0,19.2,8.8,19.2,19.2l21.6,39.2c0,10.4,1.6,52-48,57.6l-141.6-28\r
	c-10.4,0-20-8.8-20-19.2V38.4"></path><path style="fill:#62d122;" d="M327.188,179.2c0,3.2-1.6,3.2-4,3.2h-80.8c-3.2,0-3.2,0-3.2-3.2v-18.4c0-3.2,0-2.4,3.2-2.4h80.8\r
	c3.2,0,4-0.8,4,2.4V179.2z"></path><path style="fill:#4db20d;" d="M327.188,158.4v20.8c0,3.2-1.6,3.2-4,3.2h-80.8c-3.2,0-3.2,0-3.2-3.2v-20.8"></path><path style="fill:#88e2e2;" d="M333.588,182.4h-102.4c-22.4,0-40,15.2-40,38.4v36l-71.2,161.6c0,41.6-0.8,76,40.8,76h172\r
	c41.6,0,41.6-36,41.6-77.6V266.4V240v-19.2C375.188,197.6,356.788,182.4,333.588,182.4z"></path><path style="fill:#4fc7d3;" d="M333.588,182.4h-88.8c-22.4,0-37.6,15.2-37.6,38.4v36l-87.2,161.6c0,41.6-0.8,76,40.8,76h172\r
	c41.6,0,41.6-36,41.6-77.6V266.4V240v-19.2C375.188,197.6,356.788,182.4,333.588,182.4z"></path><g><path style="fill:#41b9bf;" d="M119.988,418.4c0,41.6-0.8,76,40.8,76h172c41.6,0,41.6-34.4,41.6-76"></path><path style="fill:#41b9bf;" d="M279.188,182.4v59.2c0,3.2,4.8,5.6,8,5.6s8-2.4,8-5.6v-59.2H279.188z"></path></g><path style="fill:#62d122;" d="M335.188,440c0,10.4-6.4,22.4-16.8,22.4h-69.6c-10.4,0-17.6-12-17.6-22.4V233.6\r
	c0-10.4,7.2-19.2,17.6-19.2h69.6c10.4,0,16.8,8,16.8,19.2V440z"></path><path style="fill:#4db20d;" d="M335.188,230.4V440c0,10.4-6.4,22.4-16.8,22.4h-69.6c-10.4,0-17.6-12-17.6-22.4V230.4"></path>`,14),YS=[QS];function JS(n,e,t,r,s,i){return v(),S("svg",HS,YS)}const XS=te(WS,[["render",JS]]),ZS={name:"ToiletPaperIcon"},eC={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve"},tC=f("polyline",{style:{fill:"#c7c5cc"},points:`86.724,334.013 86.724,478.362 126.185,441.008 177.293,478.362 236.731,441.008 \r
	298.116,478.362 358.19,441.008 412.885,478.362 462.442,441.008 512,478.362 512,181.454 `},null,-1),nC=f("path",{style:{fill:"#f8f8f8"},d:"M423.251,333.36H87.08C38.987,333.36,0,266.266,0,183.501S38.987,33.642,87.08,33.642h336.171"},null,-1),rC=f("ellipse",{style:{fill:"#e1e1e4"},cx:"424.913",cy:"183.498",rx:"87.085",ry:"149.86"},null,-1),sC=f("path",{style:{fill:"#c7c5cc"},d:`M426.27,112.955c-25.238,0-45.005,30.988-45.005,70.546s19.769,70.546,45.005,70.546\r
	s45.007-30.988,45.007-70.546S451.508,112.955,426.27,112.955z M426.27,234.883c-12.223,0-25.843-21.103-25.843-51.384\r
	s13.62-51.384,25.843-51.384c12.224,0,25.845,21.103,25.845,51.384S438.494,234.883,426.27,234.883z`},null,-1),iC=[tC,nC,rC,sC];function oC(n,e,t,r,s,i){return v(),S("svg",eC,iC)}const aC=te(ZS,[["render",oC]]),cC="/kitchen-paper.png",lC={name:"KitchenPaperIcon"},uC={src:cC,alt:"kitchen paper icon"};function hC(n,e,t,r,s,i){return v(),S("img",uC)}const dC=te(lC,[["render",hC]]),fC={name:"AppGroceryItemButton",data(){return{toggleConfirm:!1,toggleOrderOk:!1}},methods:{sendAlertItem(n){this.toggleConfirm=!1,console.log("Sending alert for",n)},toggleItemOrderedScreen(){this.toggleOrderOk=!0,setTimeout(()=>{this.toggleOrderOk=!1},2e3)},isScreenHeightLessThan670(){return window.innerHeight<670},isScreenHeightGreaterThanOrEqualTo670(){return window.innerHeight>=670}},components:{TinFoilIcon:wS,PlasticBagsIcon:AS,DishSoapIcon:CS,PlasticWrapIcon:OS,ToiletPaperIcon:aC,SoapIcon:BS,SpongeIcon:KS,CleaningProductIcon:XS,KitchenPaperIcon:dC},props:["category"]},pC={class:"mt-2 text-sm"},mC={class:"absolute flex flex-col items-center justify-around z-1 h-full w-full p-1 border-4 border-yellow-600 rounded-xl bg-slate-50 bg-opacity-90 font-montserrat text-cyan-900"},gC={class:"text-green-500"},_C={class:"flex flex-row justify-around items-center w-full h-2/6"},yC={class:"absolute flex flex-col items-center justify-around z-1 h-full w-full p-1 rounded-xl bg-sky-500 bg-opacity-90 font-montserrat text-white text-3xl"};function vC(n,e,t,r,s,i){const o=z("TinFoilIcon"),a=z("PlasticBagsIcon"),c=z("DishSoapIcon"),l=z("PlasticWrapIcon"),u=z("ToiletPaperIcon"),h=z("SoapIcon"),d=z("SpongeIcon"),m=z("CleaningProductIcon"),E=z("KitchenPaperIcon");return v(),S("div",{class:"relative flex flex-col items-center justify-center w-2/5 h-fit my-2 p-1.5 border-4 border-emerald-800 rounded-2xl bg-teal-400 font-montserrat font-bold text-slate-50 text-center shadow-lg shadow-cyan-500",onClick:e[2]||(e[2]=Ht(w=>s.toggleConfirm=!0,["prevent"]))},[t.category==="Tin Foil"?(v(),me(o,{key:0,class:"w-5/6"})):se("",!0),t.category==="Plastic Bags"?(v(),me(a,{key:1,class:"w-4/6"})):se("",!0),t.category==="Dish Soap"?(v(),me(c,{key:2,class:"w-4/6"})):se("",!0),t.category==="Plastic Wrap"?(v(),me(l,{key:3,class:"w-4/6"})):se("",!0),t.category==="Toilet Paper"?(v(),me(u,{key:4,class:"w-4/6"})):se("",!0),t.category==="Hand Soap"?(v(),me(h,{key:5,class:"w-4/6"})):se("",!0),t.category==="Sponge"?(v(),me(d,{key:6,class:"w-4/6"})):se("",!0),t.category==="Cleaning Product"?(v(),me(m,{key:7,class:"w-4/6"})):se("",!0),t.category==="Kitchen Paper"?(v(),me(E,{key:8,class:"w-4/6"})):se("",!0),f("p",pC,ie(t.category),1),Oe(f("div",mC,[f("p",{class:pe(["",{"text-sm":i.isScreenHeightLessThan670(),"text-md":i.isScreenHeightGreaterThanOrEqualTo670()}])},[ye(" Order "),f("span",gC,ie(t.category),1),ye(" ? ")],2),f("div",_C,[f("div",{class:"flex justify-center items-center h-full w-2/5 border-4 border-red-900 rounded-2xl bg-red-600 text-red-800",onClick:e[0]||(e[0]=Ht(w=>s.toggleConfirm=!1,["stop"]))}," x "),f("div",{class:"flex justify-center items-center h-full w-2/5 border-4 border-emerald-600 rounded-2xl bg-emerald-500 text-green-800",onClick:e[1]||(e[1]=Ht(w=>(i.sendAlertItem(t.category),i.toggleItemOrderedScreen()),["stop"]))}," o ")])],512),[[ol,s.toggleConfirm]]),Oe(f("div",yC," Done ! ",512),[[ol,s.toggleOrderOk]])])}const wC=te(fC,[["render",vC]]),IC={name:"AppGroceriesExplanation",methods:{isScreenHeightLessThan670(){return window.innerHeight<670},isScreenHeightGreaterThanOrEqualTo670(){return window.innerHeight>=670}},components:{},props:{toggle:Function}};function EC(n,e,t,r,s,i){return v(),S("div",{class:"flex flex-col w-5/6 h-fit absolute left-1/2 top-1/2 transform -translate-x-1/2 z-10 p-1 border-4 rounded-2xl border-slate-500 bg-slate-50 bg-opacity-95 text-emerald-950 font-montserrat",onClick:e[0]||(e[0]=Ht((...o)=>t.toggle&&t.toggle(...o),["prevent"]))},[f("div",{class:pe(["flex flex-col justify-start items-start w-full h-full py-1 font-bold",{"px-1":i.isScreenHeightLessThan670(),"px-3":i.isScreenHeightGreaterThanOrEqualTo670()}])},[f("p",{class:pe(["",{"text-lg mb-2":i.isScreenHeightLessThan670(),"text-xl mb-3":i.isScreenHeightGreaterThanOrEqualTo670()}])}," Need to buy something ? ",2),f("p",{class:pe(["italic",{"text-sm mb-2":i.isScreenHeightLessThan670(),"mb-3":i.isScreenHeightGreaterThanOrEqualTo670()}])}," Let the duo on duty know that they have to buy those items by... ",2),f("p",{class:pe(["",{"text-sm ml-2":i.isScreenHeightLessThan670(),"text-md ml-3":i.isScreenHeightGreaterThanOrEqualTo670()}])},[f("span",{class:pe(["text-emerald-700",{"text-md":i.isScreenHeightLessThan670(),"text-xl":i.isScreenHeightGreaterThanOrEqualTo670()}])},"1. ",2),ye("Pressing the desired item button ")],2),f("p",{class:pe(["",{"text-sm ml-2":i.isScreenHeightLessThan670(),"text-md ml-3":i.isScreenHeightGreaterThanOrEqualTo670()}])},[f("span",{class:pe(["text-purple-700",{"text-md":i.isScreenHeightLessThan670(),"text-xl":i.isScreenHeightGreaterThanOrEqualTo670()}])},"2. ",2),ye("Confirming your choice ")],2),f("p",{class:pe(["",{"text-sm ml-2":i.isScreenHeightLessThan670(),"text-md ml-3":i.isScreenHeightGreaterThanOrEqualTo670()}])},[f("span",{class:pe(["text-sky-600",{"text-md":i.isScreenHeightLessThan670(),"text-xl":i.isScreenHeightGreaterThanOrEqualTo670()}])},"3. ",2),ye("Done ! ")],2)],2)])}const TC=te(IC,[["render",EC]]),bC={name:"AppChoresGroceries",data(){return{toggleExplanation:!1,categories:["Toilet Paper","Dish Soap","Hand Soap","Plastic Bags","Plastic Wrap","Tin Foil","Kitchen Paper","Sponge","Cleaning Product"]}},methods:{closeTabExp(){this.toggleExplanation=!1}},computed:{...jn(Ts,["listRooms","duoRoomsGroceries"]),...jn(Pp,["monthIDs","getDateToday"])},components:{RobotIcon:Zw,AppGroceryItemButton:wC,AppGroceriesExplanation:TC}},AC={class:"flex flex-row h-28 items-center justify-center mt-4 px-2 bg-slate-50 bg-opacity-50 border-2 border-emerald-500 rounded-xl font-montserrat"},RC={class:"flex flex-col mr-2"},xC={class:"my-1 text-emerald-700 opacity-60"},PC={class:"font-bold"},SC={class:"font-bold"},CC={class:"text-lg text-emerald-800"},kC={class:"font-bold"},DC={class:"font-bold"},NC={class:"my-1 text-emerald-700 opacity-60"},VC={class:"font-bold"},OC={class:"font-bold"},MC={class:"flex justify-end pr-8 mt-2 w-full"},LC=f("p",{class:"relative top-0.5 font-montserrat font-bold text-3xl text-slate-700"},"?",-1),FC=[LC],UC={class:"relative w-full"},$C={class:"flex flex-row flex-wrap justify-around w-5/6 p-2 rounded-2xl bg-sky-100 bg-opacity-60 border-2 border-teal-500 overflow-y-auto"};function BC(n,e,t,r,s,i){const o=z("RobotIcon"),a=z("AppGroceriesExplanation"),c=z("AppGroceryItemButton");return v(),S(De,null,[f("div",AC,[f("div",RC,[f("p",xC,[ye(" Last month: "),f("span",PC,ie(n.listRooms[n.duoRoomsGroceries[n.monthIDs.lastMonthID][0]].residentName),1),ye(" & "),f("span",SC,ie(n.listRooms[n.duoRoomsGroceries[n.monthIDs.lastMonthID][1]].residentName),1)]),f("p",CC,[ye(" This month: "),f("span",kC,ie(n.listRooms[n.duoRoomsGroceries[n.monthIDs.thisMonthID][0]].residentName),1),ye(" & "),f("span",DC,ie(n.listRooms[n.duoRoomsGroceries[n.monthIDs.thisMonthID][1]].residentName),1)]),f("p",NC,[ye(" Next month: "),f("span",VC,ie(n.listRooms[n.duoRoomsGroceries[n.monthIDs.nextMonthID][0]].residentName),1),ye(" & "),f("span",OC,ie(n.listRooms[n.duoRoomsGroceries[n.monthIDs.nextMonthID][1]].residentName),1)])]),oe(o,{height:"70%"})]),f("div",MC,[f("div",{class:"h-10 w-10 border-2 border-slate-400 rounded-full bg-slate-300 text-center active:scale-95",onClick:e[0]||(e[0]=Ht(l=>s.toggleExplanation=!s.toggleExplanation,["prevent"]))},FC)]),Oe(f("div",UC,[oe(a,{toggle:i.closeTabExp},null,8,["toggle"])],512),[[ol,s.toggleExplanation===!0]]),f("div",$C,[(v(!0),S(De,null,Bn(s.categories,l=>(v(),me(c,{key:l,category:l},null,8,["category"]))),128))])],64)}const jC=te(bC,[["render",BC]]);const qC={name:"AutoScrollText"},zC={class:"scrolling-text-container w-full"},GC={class:"scrolling-text w-full"};function KC(n,e,t,r,s,i){return v(),S("div",zC,[f("div",GC,[T8(n.$slots,"content")])])}const WC=te(qC,[["render",KC]]),HC={name:"AppChores",data(){return{choreTab:"Garbage",daysWeek:[{text:"Sun",id:0,icon:[],nextAction:{day:"Tomorrow night",type:["Burn"]}},{text:"Mon",id:1,icon:["Throw"],nextAction:{day:"Tonight",type:["Burn"]}},{text:"Tue",id:2,icon:["Burn"],nextAction:{day:"Tomorrow night",type:["Plastic","PET","Glass","Can","Cardboard","Throw"]}},{text:"Wed",id:3,icon:["Throw"],nextAction:{day:"Tonight",type:["Plastic","PET","Glass","Can","Cardboard","Throw"]}},{text:"Thu",id:4,icon:["Plastic","PET","Glass","Can","Cardboard","Throw"],nextAction:{day:"Tonight",type:["Burn"]}},{text:"Fri",id:5,icon:["Burn"],nextAction:{day:"Monday night",type:["Burn"]}},{text:"Sat",id:6,icon:[],nextAction:{day:"Monday night",type:["Burn"]}}]}},computed:{getDateToday(){return new Date().getDay()+0}},components:{AppChoresGarbage:mS,AppChoresGroceries:jC,BurnableIcon:Ip,CanIcon:Ep,CardboardIcon:Tp,GlassIcon:bp,PETIcon:Ap,PlasticIcon:Rp,AutoScrollText:WC}},QC={class:"w-full h-full"},YC={class:"h-full flex flex-row justify-between w-full items-center"},JC=f("p",{class:""},"Take out",-1),XC={class:"flex flex-row h-full"},ZC={class:""},e7={class:"flex flex-row mx-5 justify-center text-center text-lg font-montserrat font-bold border-2 border-sky-800 rounded-full",style:{height:"7%"}},t7={class:"flex flex-col items-center overflow-y-auto",style:{height:"80%"}};function n7(n,e,t,r,s,i){const o=z("BurnableIcon"),a=z("CanIcon"),c=z("CardboardIcon"),l=z("GlassIcon"),u=z("PETIcon"),h=z("PlasticIcon"),d=z("AutoScrollText"),m=z("AppChoresGarbage"),E=z("AppChoresGroceries");return v(),S("div",QC,[oe(d,{class:"flex flex-col justify-center w-full mb-3 bg-white bg-opacity-80 text-teal-700 text-center text-lg font-montserrat font-bold",style:{height:"9%"}},{content:Aw(()=>[f("div",YC,[JC,f("div",XC,[s.daysWeek[i.getDateToday].nextAction.type.includes("Burn")?(v(),me(o,{key:0,height:"100%"})):se("",!0),s.daysWeek[i.getDateToday].nextAction.type.includes("Can")?(v(),me(a,{key:1,height:"100%"})):se("",!0),s.daysWeek[i.getDateToday].nextAction.type.includes("Cardboard")?(v(),me(c,{key:2,height:"100%"})):se("",!0),s.daysWeek[i.getDateToday].nextAction.type.includes("Glass")?(v(),me(l,{key:3,height:"100%"})):se("",!0),s.daysWeek[i.getDateToday].nextAction.type.includes("PET")?(v(),me(u,{key:4,height:"100%"})):se("",!0),s.daysWeek[i.getDateToday].nextAction.type.includes("Plastic")?(v(),me(h,{key:5,height:"100%"})):se("",!0)]),f("p",ZC,"before "+ie(s.daysWeek[i.getDateToday].nextAction.day),1)])]),_:1}),f("div",e7,[f("div",{class:pe(["flex flex-col justify-center px-8 py-2 w-3/6 rounded-l-full",{"bg-sky-500 text-slate-50":s.choreTab==="Garbage","bg-slate-100 border-emerald-500 text-cyan-900":s.choreTab!=="Garbage"}]),onClick:e[0]||(e[0]=w=>s.choreTab="Garbage")}," Garbage ",2),f("div",{class:pe(["flex flex-col justify-center px-8 py-2 w-3/6 rounded-r-full",{"bg-emerald-500 text-slate-50":s.choreTab==="Groceries","bg-slate-100 text-emerald-900":s.choreTab!=="Groceries"}]),onClick:e[1]||(e[1]=w=>s.choreTab="Groceries")}," Groceries ",2)]),f("div",t7,[s.choreTab==="Garbage"?(v(),me(m,{key:0,daysWeek:s.daysWeek},null,8,["daysWeek"])):se("",!0),s.choreTab==="Groceries"?(v(),me(E,{key:1})):se("",!0)])])}const r7=te(HC,[["render",n7]]),s7="/groceries.png",i7={name:"GroceriesIcon"},o7={src:s7,alt:"groceries img"};function a7(n,e,t,r,s,i){return v(),S("img",o7)}const c7=te(i7,[["render",a7]]),l7={name:"AppRoom",computed:{...jn(Ts,["duoRoomsGarbage","duoRoomsGroceries"]),...jn(Pp,["weekIDs","monthIDs"])},props:["roomNumber","residentName","residentNameKanji","houseSelect"],components:{GroceriesIcon:c7,ThrowAwayIcon:xp}},u7={key:0},h7={class:"flex flex-col text-lg text-center w-3/6"},d7={class:"text-xl font-semibold tracking-wider"};function f7(n,e,t,r,s,i){const o=z("ThrowAwayIcon"),a=z("GroceriesIcon");return t.roomNumber.includes(t.houseSelect[0])?(v(),S("div",u7,[f("div",{class:pe(["w-full h-16 px-1 mb-3 flex rounded-full items-center border-4 bg-white bg-opacity-70 font-montserrat",{" border-cyan-500 flex-row text-teal-700":t.houseSelect==="A house"," border-purple-500 flex-row-reverse text-violet-600":t.houseSelect==="B house"}])},[f("div",{class:pe(["ml-3 mr-1 w-2/6 font-bold text-lg tracking-wider",{"text-left":t.houseSelect==="A house","text-right":t.houseSelect==="B house"}])},[f("p",null,ie(t.roomNumber),1)],2),f("div",h7,[f("p",d7,ie(t.residentName),1),f("p",null,ie(t.residentNameKanji),1)]),this.duoRoomsGarbage[this.weekIDs.thisWeekID].includes(this.roomNumber)?(v(),me(o,{key:0,class:"h-4/6 mx-1 font-bold text-2xl text-red-500 text-center"})):se("",!0),this.duoRoomsGroceries[this.monthIDs.thisMonthID].includes(this.roomNumber)?(v(),me(a,{key:1,class:"h-4/6 mx-1 font-bold text-2xl text-green-500 text-center"})):se("",!0)],2)])):se("",!0)}const p7=te(l7,[["render",f7]]),m7={name:"AppListRooms",data(){return{houseSelect:"A house"}},computed:{...jn(Ts,["listRooms"])},components:{AppRoom:p7}},g7=f("div",{class:"flex flex-col justify-center w-full py-3 text-center bg-teal-400/90 font-montserrat",style:{height:"10%"}},[f("h2",{class:"text-white text-3xl italic tracking-widest"},"Rooms")],-1),_7={class:"w-full",style:{height:"90%"}},y7={class:"pt-3 mb-5 flex flex-row justify-around font-montserrat font-semibold"},v7={class:"mx-5 overflow-y-auto rounded-2xl",style:{height:"70%"}},w7={key:0},I7={key:1};function E7(n,e,t,r,s,i){const o=z("AppRoom");return v(),S(De,null,[g7,f("div",_7,[f("div",y7,[f("div",{class:pe(["px-8 py-2 border-4 rounded-full",{"bg-teal-500 border-emerald-400 text-slate-50":s.houseSelect==="A house","bg-white bg-opacity-30 border-emerald-500 text-cyan-900":s.houseSelect==="B house"}]),onClick:e[0]||(e[0]=a=>s.houseSelect="A house")}," A House ",2),f("div",{class:pe(["px-8 py-2 border-4 rounded-full",{"bg-purple-600 border-purple-500 text-slate-50":s.houseSelect==="B house","bg-white bg-opacity-30 border-purple-600 text-purple-700":s.houseSelect==="A house"}]),onClick:e[1]||(e[1]=a=>s.houseSelect="B house")}," B House ",2)]),f("div",v7,[s.houseSelect==="A house"?(v(),S("div",w7,[(v(!0),S(De,null,Bn(n.listRooms,a=>(v(),S("div",{key:a.roomNumber,class:""},[oe(o,{roomNumber:a.roomNumber,residentName:a.residentName,residentNameKanji:a.residentNameKanji,houseSelect:s.houseSelect},null,8,["roomNumber","residentName","residentNameKanji","houseSelect"])]))),128))])):s.houseSelect==="B house"?(v(),S("div",I7,[(v(!0),S(De,null,Bn(n.listRooms,a=>(v(),S("div",{key:a.roomNumber,class:""},[oe(o,{roomNumber:a.roomNumber,residentName:a.residentName,residentNameKanji:a.residentNameKanji,houseSelect:s.houseSelect},null,8,["roomNumber","residentName","residentNameKanji","houseSelect"])]))),128))])):se("",!0)])])],64)}const T7=te(m7,[["render",E7]]),b7="/date.png",A7={name:"DateIcon"},R7={src:b7,alt:"date img"};function x7(n,e,t,r,s,i){return v(),S("img",R7)}const P7=te(A7,[["render",x7]]),S7="/location.png",C7={name:"PlaceIcon"},k7={src:S7,alt:"place img"};function D7(n,e,t,r,s,i){return v(),S("img",k7)}const N7=te(C7,[["render",D7]]),V7="/link.png",O7={name:"LinkIcon"},M7={src:V7,alt:"link img"};function L7(n,e,t,r,s,i){return v(),S("img",M7)}const F7=te(O7,[["render",L7]]),U7="/user.png",$7={name:"UserIcon"},B7={src:U7,alt:"user img"};function j7(n,e,t,r,s,i){return v(),S("img",B7)}const q7=te($7,[["render",j7]]),z7="/edit-button.png",G7={name:"EditIcon"},K7={src:z7,alt:"edit button"};function W7(n,e,t,r,s,i){return v(),S("img",K7)}const eI=te(G7,[["render",W7]]),H7="/x-button.png",Q7={name:"DeleteIcon"},Y7={src:H7,alt:"delete button"};function J7(n,e,t,r,s,i){return v(),S("img",Y7)}const X7=te(Q7,[["render",J7]]),Z7="/event-bg-min.png",ek={name:"EventCard",data(){return{triggerConfirmDelete:!1}},methods:{deleteEvent(){console.log("deleting event",this.event.id)}},props:["event","toggleEdit"],components:{DateIcon:P7,PlaceIcon:N7,LinkIcon:F7,UserIcon:q7,EditIcon:eI,DeleteIcon:X7}},tk={key:0,class:"flex flex-col justify-around items-center w-full h-44 px-1 py-1 border-t-2 bg-red-600/90 border-red-700"},nk=f("p",{class:"text-white text-2xl text-center"},"Are you sure you want to delete this event ?",-1),rk={class:"w-full text-center text-2xl font-bold text-white"},sk={class:"flex flex-row"},ik={class:"relative w-full h-full"},ok={key:0,src:Z7,class:"absolute -z-5 w-full h-full"},ak={key:1,class:"relative z-5 flex flex-col w-full h-44 px-1 py-1 border-t-2 bg-slate-100/90 border-violet-700"},ck={class:"relative w-full h-full"},lk={class:"absolute top-1 left-2"},uk={class:"h-1/6 w-full text-center text-xl font-bold text-purple-900"},hk={class:"flex flex-row w-full h-5/6 justify-around items-center"},dk={class:"flex flex-col justify-around w-2/5 h-full text-md font-bold text-violet-900"},fk={class:"flex flex-row items-center"},pk={class:"flex flex-col justify-center items-center w-full text-center"},mk={class:""},gk={class:""},_k={class:"flex flex-row items-center"},yk={class:"w-full text-center"},vk={class:"flex flex-row items-center"},wk={class:"w-full text-center"},Ik={class:"flex flex-col justify-around items-center w-3/5 h-full px-1 py-2"},Ek={class:"text-center italic text-sm font-medium h-3/5"},Tk={class:"flex flex-col items-center w-full"},bk=f("p",{class:"text-md font-bold"},"Links",-1),Ak={class:"flex flex-row w-full h-fit justify-around"},Rk=["href"];function xk(n,e,t,r,s,i){const o=z("EditIcon"),a=z("DeleteIcon"),c=z("DateIcon"),l=z("PlaceIcon"),u=z("UserIcon"),h=z("LinkIcon");return v(),S(De,null,[s.triggerConfirmDelete?(v(),S("div",tk,[nk,f("p",rk,ie(t.event.title),1),f("div",sk,[f("button",{class:"px-3 mx-4 rounded-lg border-2 border-slate-100 bg-red-700 text-white text-xl",onClick:e[0]||(e[0]=(...d)=>i.deleteEvent&&i.deleteEvent(...d))}," Delete event "),f("button",{class:"px-3 mx-4 rounded-lg border-2 border-slate-100 bg-slate-500 text-white text-xl",onClick:e[1]||(e[1]=d=>s.triggerConfirmDelete=!s.triggerConfirmDelete)}," Keep event ")])])):se("",!0),f("div",ik,[s.triggerConfirmDelete?se("",!0):(v(),S("img",ok)),s.triggerConfirmDelete?se("",!0):(v(),S("div",ak,[f("div",ck,[f("div",lk,[f("button",{class:"text-green-500 mx-3",onClick:e[2]||(e[2]=d=>t.toggleEdit())},[oe(o,{class:"h-6 w-6"})]),f("button",{class:"text-red-500 mx-3",onClick:e[3]||(e[3]=d=>s.triggerConfirmDelete=!s.triggerConfirmDelete)},[oe(a,{class:"h-6 w-6"})])]),f("p",uk,ie(t.event.title),1)]),f("div",hk,[f("div",dk,[f("div",fk,[oe(c,{class:"h-7 w-7 ml-1.5 mr-2"}),f("div",pk,[f("p",mk,ie(t.event.date.day),1),f("p",gk,ie(t.event.date.time),1)])]),f("div",_k,[oe(l,{class:"h-7 w-6 ml-3 mr-2"}),f("p",yk,ie(t.event.place),1)]),f("div",vk,[oe(u,{class:"h-7 w-7 ml-2 mr-2"}),f("p",wk,ie(t.event.author),1)])]),f("div",Ik,[f("p",Ek,ie(t.event.description),1),f("div",Tk,[bk,f("div",Ak,[(v(!0),S(De,null,Bn(t.event.links,d=>(v(),S("div",{key:d},[f("a",{href:d,target:"_blank"},[oe(h,{class:"h-8 w-8"})],8,Rk)]))),128))])])])])]))])],64)}const Pk=te(ek,[["render",xk]]),Sk={name:"EventNewForm",data(){return{author:"",title:"",description:"",date:{day:"",time:""},place:"",links:[],link1:"",link2:"",link3:""}},methods:{createNewEvent(){const n={author:this.author,title:this.title,description:this.description,date:{day:this.date.day,time:this.date.time},place:this.place,links:[this.link1,this.link2,this.link3]};console.log(n)}}},Ck={class:"flex flex-col items-center w-full"},kk=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},[f("span",{class:"text-red-600"},"* "),ye("Title :")],-1),Dk={class:"flex flex-col items-center w-full"},Nk=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},"Description :",-1),Vk={class:"flex flex-col items-center w-full"},Ok=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},[f("span",{class:"text-red-600"},"* "),ye("Location :")],-1),Mk={class:"flex flex-row w-full justify-around"},Lk={class:"flex flex-col items-center w-3/6"},Fk=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},[f("span",{class:"text-red-600"},"* "),ye("Day :")],-1),Uk={class:"flex flex-col items-center w-3/6"},$k=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},[f("span",{class:"text-red-600"},"* "),ye("Time :")],-1),Bk={class:"flex flex-col items-center w-full"},jk=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},"Links :",-1),qk={class:"flex flex-col items-center w-full"},zk=f("label",{class:"font-bold text-md text-slate-800"},"Link 1",-1),Gk=f("label",{class:"font-bold text-md text-slate-800"},"Link 2",-1),Kk=f("label",{class:"font-bold text-md text-slate-800"},"Link 3",-1),Wk=f("button",{type:"submit",class:"mt-5 px-8 py-2 bg-yellow-500 border-4 border-yellow-600 rounded-full text-slate-100 text-xl"}," Create new event ",-1);function Hk(n,e,t,r,s,i){return v(),S("form",{onSubmit:e[8]||(e[8]=Ht((...o)=>i.createNewEvent&&i.createNewEvent(...o),["prevent"])),class:"h-full w-full flex flex-col justify-start items-center py-3 px-6 text-center overflow-y-auto over"},[f("div",Ck,[kk,Oe(f("input",{type:"text",class:"w-4/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[0]||(e[0]=o=>s.title=o),placeholder:"Hiking day",required:""},null,512),[[it,s.title]])]),f("div",Dk,[Nk,Oe(f("textarea",{class:"w-4/5 h-24 rounded-xl px-4 py-2 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[1]||(e[1]=o=>s.description=o),placeholder:"Let's go to the mountain ! "},null,512),[[it,s.description]])]),f("div",Vk,[Ok,Oe(f("input",{type:"text",class:"w-4/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[2]||(e[2]=o=>s.place=o),placeholder:"Mt Oyama",required:""},null,512),[[it,s.place]])]),f("div",Mk,[f("div",Lk,[Fk,Oe(f("input",{type:"date",class:"w-5/6 text-center rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[3]||(e[3]=o=>s.date.day=o),required:""},null,512),[[it,s.date.day]])]),f("div",Uk,[$k,Oe(f("input",{type:"time",class:"w-5/6 text-center rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[4]||(e[4]=o=>s.date.time=o),required:""},null,512),[[it,s.date.time]])])]),f("div",Bk,[jk,f("div",qk,[zk,Oe(f("input",{type:"text",class:"w-3/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-2 focus:ring-sky-400","onUpdate:modelValue":e[5]||(e[5]=o=>s.link1=o),placeholder:"Insert URL here"},null,512),[[it,s.link1]]),Gk,Oe(f("input",{type:"text",class:"w-3/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-2 focus:ring-sky-400","onUpdate:modelValue":e[6]||(e[6]=o=>s.link2=o),placeholder:"Insert URL here"},null,512),[[it,s.link2]]),Kk,Oe(f("input",{type:"text",class:"w-3/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-2 focus:ring-sky-400","onUpdate:modelValue":e[7]||(e[7]=o=>s.link3=o),placeholder:"Insert URL here"},null,512),[[it,s.link3]])])]),Wk],32)}const Qk=te(Sk,[["render",Hk]]),Yk={name:"EventEditForm",mounted(){console.log("getting db information")},data(){return{id:"",author:"",title:"",description:"",date:{day:"",time:""},place:"",links:[],link1:"",link2:"",link3:""}},methods:{EditEvent(){const n={author:this.author,title:this.title,description:this.description,date:{day:this.date.day,time:this.date.time},place:this.place,links:[this.link1,this.link2,this.link3]};console.log(n)}}},Jk={class:"flex flex-col items-center w-full"},Xk=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},[f("span",{class:"text-red-600"},"* "),ye("Title :")],-1),Zk={class:"flex flex-col items-center w-full"},eD=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},"Description :",-1),tD={class:"flex flex-col items-center w-full"},nD=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},[f("span",{class:"text-red-600"},"* "),ye("Location :")],-1),rD={class:"flex flex-row w-full justify-around"},sD={class:"flex flex-col items-center w-3/6"},iD=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},[f("span",{class:"text-red-600"},"* "),ye("Day :")],-1),oD={class:"flex flex-col items-center w-3/6"},aD=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},[f("span",{class:"text-red-600"},"* "),ye("Time :")],-1),cD={class:"flex flex-col items-center w-full"},lD=f("label",{class:"font-bold text-xl text-slate-800 mb-1"},"Links :",-1),uD={class:"flex flex-col items-center w-full"},hD=f("label",{class:"font-bold text-md text-slate-800"},"Link 1",-1),dD=f("label",{class:"font-bold text-md text-slate-800"},"Link 2",-1),fD=f("label",{class:"font-bold text-md text-slate-800"},"Link 3",-1),pD=f("button",{type:"submit",class:"mt-5 px-8 py-2 bg-teal-500 border-4 border-teal-600 rounded-full text-slate-100 text-xl"}," Edit event ",-1);function mD(n,e,t,r,s,i){return v(),S("form",{onSubmit:e[8]||(e[8]=Ht((...o)=>i.EditEvent&&i.EditEvent(...o),["prevent"])),class:"h-full w-full flex flex-col justify-start items-center py-3 px-6 text-center overflow-y-auto"},[f("div",Jk,[Xk,Oe(f("input",{type:"text",class:"w-4/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[0]||(e[0]=o=>s.title=o),placeholder:"Hiking day",required:""},null,512),[[it,s.title]])]),f("div",Zk,[eD,Oe(f("textarea",{class:"w-4/5 h-24 rounded-xl px-4 py-2 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[1]||(e[1]=o=>s.description=o),placeholder:"Let's go to the mountain ! "},null,512),[[it,s.description]])]),f("div",tD,[nD,Oe(f("input",{type:"text",class:"w-4/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[2]||(e[2]=o=>s.place=o),placeholder:"Mt Oyama",required:""},null,512),[[it,s.place]])]),f("div",rD,[f("div",sD,[iD,Oe(f("input",{type:"date",class:"w-5/6 text-center rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[3]||(e[3]=o=>s.date.day=o),required:""},null,512),[[it,s.date.day]])]),f("div",oD,[aD,Oe(f("input",{type:"time",class:"w-5/6 text-center rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-4 focus:ring-sky-400","onUpdate:modelValue":e[4]||(e[4]=o=>s.date.time=o),required:""},null,512),[[it,s.date.time]])])]),f("div",cD,[lD,f("div",uD,[hD,Oe(f("input",{type:"text",class:"w-3/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-2 focus:ring-sky-400","onUpdate:modelValue":e[5]||(e[5]=o=>s.link1=o),placeholder:"Insert URL here"},null,512),[[it,s.link1]]),dD,Oe(f("input",{type:"text",class:"w-3/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-2 focus:ring-sky-400","onUpdate:modelValue":e[6]||(e[6]=o=>s.link2=o),placeholder:"Insert URL here"},null,512),[[it,s.link2]]),fD,Oe(f("input",{type:"text",class:"w-3/5 rounded-full px-4 py-1 outline-none border-2 border-cyan-700 focus:ring-2 focus:ring-sky-400","onUpdate:modelValue":e[7]||(e[7]=o=>s.link3=o),placeholder:"Insert URL here"},null,512),[[it,s.link3]])])]),pD],32)}const gD=te(Yk,[["render",mD]]),_D={name:"AppEventPlanner",data(){return{eventTab:"list",events:[{id:"0001",title:"Beach day",author:"Florian",date:{day:"2023/08/13",time:"12:30"},place:"Zushi",description:"Let's go to the beach ! Do not forget to bring your suncream and swimming suit !",links:["https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu"]},{id:"0002",title:"Hiking day",author:"Florian",date:{day:"2023/08/13",time:"12:30"},place:"Mt Fuji",description:"Let's go to the beach ! Do not forget to bring your suncream and swimming suit !",links:["https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu"]},{id:"0003",title:"Skydiving",author:"Siyun",date:{day:"2023/08/13",time:"12:30"},place:"Chiba",description:"Let's go to the beach ! Do not forget to bring your suncream and swimming suit !",links:["https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu"]},{id:"0004",title:"Camping",author:"Yusei",date:{day:"2023/08/13",time:"12:30"},place:"Okutama",description:"Let's go to the beach ! Do not forget to bring your suncream and swimming suit !",links:["https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu","https://www.google.com/maps/place/Zushi+Beach/@35.2918785,139.562345,15z/data=!3m1!4b1!4m6!3m5!1s0x601846f4dd02697f:0xe9deb104bdb63dd8!8m2!3d35.2918619!4d139.5726447!16s%2Fg%2F122nzdn0?entry=ttu"]}]}},methods:{toggleEdit(){this.eventTab="edit"}},components:{EventCard:Pk,EventNewForm:Qk,EventEditForm:gD}},yD={class:"w-full h-full font-montserrat"},vD={key:0,class:"text-white text-3xl italic tracking-widest"},wD={key:1,class:"text-white text-3xl italic tracking-widest"},ID={key:2,class:"text-white text-3xl italic tracking-widest"},ED=f("p",{class:"relative"},"+",-1),TD=[ED],bD=f("p",{class:"font-bold"},"⬅",-1),AD=[bD],RD={key:0,class:"w-full",style:{height:"90%"}},xD={key:1,class:"w-full",style:{height:"90%"}},PD={key:2,class:"w-full overflow-y-auto",style:{height:"90%"}};function SD(n,e,t,r,s,i){const o=z("EventNewForm"),a=z("EventEditForm"),c=z("EventCard");return v(),S("div",yD,[f("div",{class:pe(["flex flex-col justify-center w-full py-3 text-center",{"bg-fuchsia-500/95":s.eventTab==="list","bg-yellow-500/95":s.eventTab==="create","bg-teal-500/95":s.eventTab==="edit"}]),style:{height:"10%"}},[s.eventTab==="create"?(v(),S("h2",vD," New Event ? ")):s.eventTab==="edit"?(v(),S("h2",wD," Edit Event ? ")):(v(),S("h2",ID,"Upcoming events")),s.eventTab==="list"?(v(),S("button",{key:3,class:"absolute z-30 right-3 top-48 flex flex-col justify-center items-center h-12 w-12 border-2 text-4xl font-bolder rounded-full bg-emerald-500 border-emerald-800 text-white",onClick:e[0]||(e[0]=Ht(l=>s.eventTab="create",["prevent"]))},TD)):(v(),S("button",{key:4,class:"absolute z-30 right-3 top-48 flex flex-col justify-center items-center h-12 w-12 border-2 text-4xl font-bolder rounded-full bg-slate-400 border-white text-white",onClick:e[1]||(e[1]=Ht(l=>s.eventTab="list",["prevent"]))},AD))],2),s.eventTab==="create"?(v(),S("div",RD,[oe(o)])):s.eventTab==="edit"?(v(),S("div",xD,[oe(a)])):(v(),S("div",PD,[(v(!0),S(De,null,Bn(s.events,l=>(v(),S("div",{class:"w-full",key:l.id},[oe(c,{event:l,toggleEdit:i.toggleEdit},null,8,["event","toggleEdit"])]))),128))]))])}const CD=te(_D,[["render",SD]]),kD={name:"BikeHistoryCard",props:["entry"]},DD={class:"flex flex-col justify-center items-start px-3 py-1 my-1 w-full h-20 border-2 border-emerald-400 bg-sky-50 rounded-3xl"},ND={class:"font-bold text-center w-full text-slate-700"},VD=f("span",{class:"font-bold text-green-600 mr-2"},"Start: ",-1),OD=f("span",{class:"font-bold text-red-700 mr-2"},"End: ",-1);function MD(n,e,t,r,s,i){return v(),S("div",DD,[f("p",ND,ie(t.entry.user),1),f("p",null,[VD,ye(ie(t.entry.startDate),1)]),f("p",null,[OD,ye(ie(t.entry.endDate),1)])])}const LD=te(kD,[["render",MD]]),FD=_u("bike",{state:()=>({selectedName:"",isNameSelected:!1,isBikeUsed:!1,currentBikeUser:"Florian",history:[{user:"Florian 🦊",startDate:"2023/08/12 21:21",endDate:"2023/08/12 23:56"},{user:"Florian 🦊",startDate:"2023/08/12 21:21",endDate:"2023/08/12 23:56"},{user:"Florian 🦊",startDate:"2023/08/12 21:21",endDate:"2023/08/12 23:56"},{user:"Florian 🦊",startDate:"2023/08/12 21:21",endDate:"2023/08/12 23:56"}]}),actions:{handleNameSelection(){this.selectedName===""?this.isNameSelected=!1:this.isNameSelected=!0},startUsing(){this.currentBikeUser=this.selectedName,this.isBikeUsed=!0},stopUsing(){this.currentBikeUser="",this.isBikeUsed=!1}}});const UD={name:"AppBike",data(){return{}},mounted(){console.log("mounted comp bike")},methods:{isScreenHeightLessThan670(){return window.innerHeight<670},isScreenHeightGreaterThanOrEqualTo670(){return window.innerHeight>=670}},computed:{...jn(Ts,["listRooms"]),...M9(FD)},components:{BikeHistoryCard:LD}},$D={class:"flex flex-col items-center h-full w-full pb-3 font-montserrat text-center"},BD={class:"flex flex-col items-center justify-center w-full py-2 bg-green-200/95",style:{height:"10%"}},jD=f("h2",{class:"text-3xl tracking-widest italic text-green-700 font-bold"},"Omote-bike",-1),qD={key:0,class:"text-xl"},zD={class:"text-red-700 font-bold text-2xl"},GD={key:1,class:"text-xl"},KD={class:"w-full h-52 py-3"},WD=f("label",{class:"text-2xl font-bold text-emerald-700 mb-2"},"Select your name :",-1),HD=f("option",{value:""},"Choose your name",-1),QD=["value"],YD=["disabled"],JD=f("div",{class:"flex flex-col"},[f("p",{class:"text-xl"},"The lock passcode is :"),f("p",{class:"text-3xl font-bold my-1 text-green-700"},"7 1 5 3")],-1),XD=f("button",{type:"submit",class:"flex flex-col items-center justify-center h-12 w-2/5 mt-3 border-2 rounded-full text-xl font-bold border-white bg-red-600 text-white active:translate-y-1"}," Stop ",-1),ZD=[JD,XD],eN=f("h3",{class:"text-xl font-bold italic text-slate-800"},"History",-1);function tN(n,e,t,r,s,i){const o=z("BikeHistoryCard");return v(),S("div",$D,[f("div",BD,[jD,n.bikeStore.isBikeUsed?(v(),S("p",qD,[f("span",zD,ie(n.bikeStore.currentBikeUser),1),ye(" is using the bike now ")])):(v(),S("p",GD,"Nobody is using the bike"))]),f("div",KD,[n.bikeStore.isBikeUsed?(v(),S("form",{key:1,class:"h-full w-full flex flex-col items-center justify-center",onSubmit:e[3]||(e[3]=(...a)=>n.bikeStore.stopUsing&&n.bikeStore.stopUsing(...a))},ZD,32)):(v(),S("form",{key:0,class:"h-full w-full flex flex-col items-center justify-center",onSubmit:e[2]||(e[2]=(...a)=>n.bikeStore.startUsing&&n.bikeStore.startUsing(...a))},[WD,Oe(f("select",{id:"nameChoice",name:"name",class:"border-2 border-yellow-500 p-3 rounded-full overflow-y-auto","onUpdate:modelValue":e[0]||(e[0]=a=>n.bikeStore.selectedName=a),onChange:e[1]||(e[1]=(...a)=>n.bikeStore.handleNameSelection&&n.bikeStore.handleNameSelection(...a))},[HD,(v(!0),S(De,null,Bn(n.listRooms,a=>(v(),S("option",{key:a.residentName,value:a.residentName},ie(a.residentName),9,QD))),128))],544),[[Ww,n.bikeStore.selectedName]]),f("button",{type:"submit",class:pe(["z-10 relative flex flex-col items-center justify-center h-12 w-2/5 mt-3 border-2 rounded-full text-xl font-bold",{"bg-gray-600 text-white opacity-20":n.bikeStore.isNameSelected===!1,"border-white text-white rolling_bg active:translate-y-1":n.bikeStore.isNameSelected===!0}]),disabled:n.bikeStore.isNameSelected===!1}," Start ",10,YD)],32))]),eN,f("div",{class:pe(["flex flex-col items-center px-3 py-2 mx-2 border-4 border-green-500 rounded-3xl bg-slate-50 bg-opacity-50 overflow-y-auto",{"h-52":i.isScreenHeightLessThan670(),"h-96":i.isScreenHeightGreaterThanOrEqualTo670()}]),style:{width:"95%"}},[(v(!0),S(De,null,Bn(n.bikeStore.history,a=>(v(),S("div",{class:"flex flex-col w-full",key:a.startDate},[oe(o,{entry:a},null,8,["entry"])]))),128))],2)])}const nN=te(UD,[["render",tN]]),al=_u("authentication",{state:()=>({isConnected:!1,userData:{roomNumber:"",residentName:"",residentNameKanji:"",roomEmoji:"",roomEvents:[]}}),actions:{async sendLoginDB(n,e,t,r){const s=_i(Jc,"users",e),i=await qh(s);if(i.data().residentName.toLowerCase()===t.toLowerCase())try{return await na.signInWithEmailAndPassword(i.data().roomEmail,r),console.log("NICEEEEE"),setTimeout(()=>{this.isConnected=!0},1500),!0}catch(o){return console.log(o),!1}else return!1},async getUserData(n){try{const e=_i(Jc,"users",n),t=await qh(e);return this.userData={roomNumber:t.data().roomNumber,residentName:t.data().residentName,residentNameKanji:t.data().residentNameKanji,roomEmoji:t.data().roomEmoji,roomEvents:t.data().roomEvents},!0}catch(e){return console.log(e),!1}},async createAuthAndFirestoreDB(n){try{for(let e=0;e<=17;e++)await YR.doc(Object.keys(n)[e]).set({roomNumber:n[Object.keys(n)[e]].roomNumber,residentName:n[Object.keys(n)[e]].residentName,residentNameKanji:n[Object.keys(n)[e]].residentNameKanji,roomEmail:n[Object.keys(n)[e]].roomEmail,roomEmoji:n[Object.keys(n)[e]].roomEmoji,roomEvents:n[Object.keys(n)[e]].roomEvents});console.log("ok")}catch(e){console.log(e)}},async logOut(){try{return dT(na),this.isConnected=!1,this.userData={roomNumber:"",residentName:"",residentNameKanji:"",roomEmoji:"",roomEvents:[]},!0}catch(n){return console.log(n),!1}}}}),rN={name:"LoginForm",data(){return{selectedRoom:"A101",loginResidentName:"Gregory",loginRoomPassword:"A101password",infoMsg:"",loginTabTrigger:!1,sendingLoginInfo:!1,credentialsCheck:"",gotRoomSuccess:!1}},async mounted(){this.listRooms.A101.roomNumber?this.gotRoomSuccess=!0:await this.getAllRooms()===!0?this.gotRoomSuccess=!0:this.gotRoomSuccess=!1},methods:{...id(al,["sendLoginDB","getUserData"]),...id(Ts,["getAllRooms"]),async sendLogin(){this.loginTabTrigger=!1,this.sendingLoginInfo=!0,this.infoMsg="Checking user credentials",this.credentialsCheck="checking",await this.sendLoginDB(this.listRooms,this.selectedRoom,this.loginResidentName,this.loginRoomPassword)===!0?(this.loginTabTrigger=!0,this.credentialsCheck="good",this.infoMsg="You are successfully logged in !",this.getUserData(this.selectedRoom)):(this.loginTabTrigger=!0,this.credentialsCheck="error",this.infoMsg="Something went wrong, try again",setTimeout(()=>{this.sendingLoginInfo=!1},800))}},computed:{...jn(Ts,["listRooms"]),...Xw(al,["isConnected"])}},sN={class:"flex flex-col w-full justify-center items-center"},iN=f("label",{class:"text-3xl"},"Room N° :",-1),oN=["value"],aN={class:"mt-5 flex flex-col w-full justify-center items-center"},cN=f("label",{class:"text-3xl"},[ye("Name "),f("span",{class:"text-sm"},"(Romaji)")],-1),lN={class:"mt-5 flex flex-col w-full justify-center items-center"},uN=f("label",{class:"text-3xl"},"Password",-1),hN={class:"flex flex-col items-center w-full mt-12"},dN=["disabled"],fN={key:2,class:"flex flex-col justify-center w-full",style:{height:"90%"}},pN={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},mN=Sn('<g transform="translate(80,50)"><g transform="rotate(0)"><circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="1"><animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform><animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate></circle></g></g><g transform="translate(71.21320343559643,71.21320343559643)"><g transform="rotate(45)"><circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.875"><animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform><animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate></circle></g></g><g transform="translate(50,80)"><g transform="rotate(90)"><circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.75"><animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform><animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate></circle></g></g><g transform="translate(28.786796564403577,71.21320343559643)"><g transform="rotate(135)"><circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.625"><animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform><animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate></circle></g></g><g transform="translate(20,50.00000000000001)"><g transform="rotate(180)"><circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.5"><animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform><animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate></circle></g></g><g transform="translate(28.78679656440357,28.786796564403577)"><g transform="rotate(225)"><circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.375"><animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform><animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate></circle></g></g><g transform="translate(49.99999999999999,20)"><g transform="rotate(270)"><circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.25"><animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform><animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate></circle></g></g><g transform="translate(71.21320343559643,28.78679656440357)"><g transform="rotate(315)"><circle cx="0" cy="0" r="6" fill="#93dbe9" fill-opacity="0.125"><animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform><animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate></circle></g></g>',8),gN=[mN];function _N(n,e,t,r,s,i){return v(),S(De,null,[s.loginTabTrigger?(v(),S("div",{key:0,class:pe(["absolute flex flex-col justify-center items-center w-full px-3 py-2 border-2 text-center font-montserrat text-white text-2xl",{"bg-red-600/95 border-red-800":s.credentialsCheck==="error","bg-blue-600/95 border-blue-800":s.credentialsCheck==="checking","bg-green-600/95 border-green-800":s.credentialsCheck==="good"}])},ie(s.infoMsg),3)):se("",!0),s.gotRoomSuccess?(v(),S("form",{key:1,class:"w-full h-full flex flex-col justify-center items-center font-montserrat",onSubmit:e[3]||(e[3]=Ht((...o)=>i.sendLogin&&i.sendLogin(...o),["prevent"]))},[f("div",sN,[iN,Oe(f("select",{id:"roomChoice",name:"room",class:"w-3/6 border-2 border-teal-400 py-1 rounded-xl text-center text-2xl overflow-y-auto","onUpdate:modelValue":e[0]||(e[0]=o=>s.selectedRoom=o),required:""},[(v(!0),S(De,null,Bn(Object.keys(n.listRooms),o=>(v(),S("option",{key:o,value:o},ie(n.listRooms[o].roomNumber),9,oN))),128))],512),[[Ww,s.selectedRoom]])]),f("div",aN,[cN,Oe(f("input",{type:"text",id:"nameChoice",name:"name",class:"w-4/6 border-2 border-teal-400 py-1 rounded-xl text-center text-2xl overflow-y-auto",placeholder:"Your name","onUpdate:modelValue":e[1]||(e[1]=o=>s.loginResidentName=o),required:""},null,512),[[it,s.loginResidentName]])]),f("div",lN,[uN,Oe(f("input",{type:"password",id:"password",name:"password",class:"w-4/6 border-2 border-teal-400 py-1 rounded-xl text-center text-2xl overflow-y-auto",placeholder:"Password","onUpdate:modelValue":e[2]||(e[2]=o=>s.loginRoomPassword=o),required:""},null,512),[[it,s.loginRoomPassword]])]),f("div",hN,[f("button",{type:"submit",class:pe(["w-3/6 border-2 text-white text-2xl py-1 rounded-full",{"border-teal-700 bg-teal-500":!s.sendingLoginInfo,"border-slate-700 bg-slate-600 opacity-20":s.sendingLoginInfo}]),disabled:s.sendingLoginInfo}," Login ",10,dN)])],32)):(v(),S("div",fN,[(v(),S("svg",pN,gN))]))],64)}const yN=te(rN,[["render",_N]]),vN={name:"ProfileOverlay",components:{EditIcon:eI},props:["roomNumber","residentName","residentNameKanji","roomEmoji"]},wN={class:"absolute z-1 flex flex-col justify-start h-36 w-full p-3 border-b-2 border-teal-700 bg-teal-400/95"},IN={class:"flex flex-col items-start justify-around px-5 w-5/6 h-full text-slate-50"},EN={class:"flex flex-row justify-between items-center w-full"},TN=f("p",{class:"text-center text-2xl tracking-wider font-bold"},"Profile",-1),bN={class:"text-center text-lg font-bold text-emerald-800"},AN={class:"flex flex-row justify-center items-center"},RN={class:""},xN=f("span",{class:"text-emerald-800 font-bold mr-3"},"Name :",-1),PN={class:"flex flex-row justify-center items-center"},SN={class:""},CN=f("span",{class:"text-emerald-800 font-bold mr-3"},"JP name :",-1),kN={class:"flex flex-row justify-center items-center"},DN={class:""},NN=f("span",{class:"text-emerald-800 font-bold mr-3"},"Emoji :",-1);function VN(n,e,t,r,s,i){const o=z("EditIcon");return v(),S("div",wN,[f("div",IN,[f("div",EN,[TN,f("p",bN,ie(t.roomNumber),1)]),f("div",AN,[f("p",RN,[xN,ye(ie(t.residentName),1)]),oe(o,{class:"h-4 mx-3 opacity-60"})]),f("div",PN,[f("p",SN,[CN,ye(ie(t.residentNameKanji),1)]),oe(o,{class:"h-4 mx-3 opacity-60"})]),f("div",kN,[f("p",DN,[NN,ye(ie(t.roomEmoji),1)]),oe(o,{class:"h-4 mx-3 opacity-60"})])])])}const ON=te(vN,[["render",VN]]),MN="/assets/smartphone-40ff0d26.png",LN={name:"App",data(){return{tab:"Chores",loggedUser:"",userTabTrigger:!1,logoutBtnMsg:"Logout"}},created(){if(na.currentUser){const n=na.currentUser._delegate.email.split("@")[0].toUpperCase();this.getUserData(n),this.isConnected=!0}else this.isConnected=!1,this.userData={roomNumber:"",residentName:"",residentNameKanji:"",roomEmoji:"",roomEvents:[]}},methods:{...id(al,["getUserData","logOut"]),loggingUserOut(){this.logoutBtnMsg="...",setTimeout(()=>{this.userTabTrigger=!1,this.logOut(),this.logoutBtnMsg="Logout"},1500)}},components:{AppEventPlanner:CD,AppChores:r7,AppListRooms:T7,AppBike:nN,LoginForm:yN,ProfileOverlay:ON},computed:{...Xw(al,["isConnected","userData"]),isGoodscreenWidth(){return window.innerWidth<=550}}},FN={class:"h-screen w-screen font-montserrat"},UN={class:"px-2 py-3 h-36 bg-cyan-600"},$N={class:"flex flex-row justify-start w-full px-2"},BN=f("h1",{class:"font-montserrat text-2xl max-[364px]:text-xl font-bold text-slate-100"}," Share House Manager ",-1),jN=f("h3",{class:"font-montserrat text-lg text-slate-100"},"Omotesando 1",-1),qN=[BN,jN],zN={key:0,class:"flex flex-col relative z-2 justify-center items-center w-1/6"},GN={class:"text-white tracking-wider"},KN={key:0,class:"flex flex-row justify-around font-montserrat font-bold mt-2.5"},WN={key:1,class:"w-full px-3 bg-white/80 border-2 border-red-700 rounded-md text-red-600 text-lg text-center font-montserrat"},HN={style:{height:"calc(100vh - 9rem)","background-image":"url('/bg-mobile-blue.jpg')","background-size":"cover","background-position":"center","background-repeat":"no-repeat"},class:""},QN={key:0,class:"w-full"},YN={key:0,class:"",style:{height:"calc(100vh - 9rem)"}},JN={key:1,class:"w-full",style:{height:"calc(100vh - 9rem)"}},XN={key:1,class:"flex flex-col justify-center items-center h-full w-full p-5"},ZN=f("p",{class:"text-sky-700 text-4xl text-center m-5"}," This app is meant to be used on a smartphone ... ",-1),eV=f("img",{src:MN,alt:"smartphone",class:"h-4/6 mt-10"},null,-1),tV=[ZN,eV];function nV(n,e,t,r,s,i){const o=z("ProfileOverlay"),a=z("LoginForm"),c=z("AppEventPlanner"),l=z("AppChores"),u=z("AppListRooms"),h=z("AppBike");return v(),S("div",FN,[s.userTabTrigger?(v(),me(o,{key:0,roomNumber:n.userData.roomNumber,residentName:n.userData.residentName,residentNameKanji:n.userData.residentNameKanji,roomEmoji:n.userData.roomEmoji},null,8,["roomNumber","residentName","residentNameKanji","roomEmoji"])):se("",!0),f("header",UN,[f("div",$N,[f("div",{class:pe(["flex flex-col w-full",{"justify-start items-start w-5/6":n.isConnected,"justify-center items-center":!n.isConnected}])},qN,2),n.isConnected?(v(),S("div",zN,[f("p",{class:"h-10 w-10 flex flex-col items-center justify-center border-2 border-orange-500 bg-yellow-100/70 rounded-full text-xl mb-1 active:translate-y-1",onClick:e[0]||(e[0]=d=>s.userTabTrigger=!s.userTabTrigger)},ie(n.userData.roomEmoji),1),f("p",GN,ie(n.userData.residentName),1),s.userTabTrigger?(v(),S("p",{key:0,class:"absolute -bottom-11 px-3 py-0.5 text-center border-2 border-emerald-700 bg-sky-400 text-slate-100 font-bold rounded-full active:translate-y-1",onClick:e[1]||(e[1]=d=>i.loggingUserOut())},ie(s.logoutBtnMsg),1)):se("",!0)])):se("",!0)]),n.isConnected?(v(),S("div",KN,[f("div",{class:pe(["border-2 border-blue-300 text-slate-50 rounded-full px-3 py-2",{"bg-blue-500 ":s.tab==="Chores"," bg-transparent text-black":s.tab!=="Chores"}]),onClick:e[2]||(e[2]=d=>s.tab="Chores")}," Chores ",2),f("div",{class:pe(["border-2 border-emerald-200 text-slate-50 rounded-full px-3 py-2",{"bg-teal-400":s.tab==="Rooms"," bg-transparent text-black":s.tab!=="Rooms"}]),onClick:e[3]||(e[3]=d=>s.tab="Rooms")}," Rooms ",2),f("div",{class:pe(["border-2 border-purple-300 text-slate-50 rounded-full px-3 py-2",{"bg-purple-500 ":s.tab==="Events"," bg-transparent text-black":s.tab!=="Events"}]),onClick:e[4]||(e[4]=d=>s.tab="Events")}," Events ",2),f("div",{class:pe(["border-2 border-green-300 text-slate-50 rounded-full px-3 py-2",{"bg-green-500 ":s.tab==="Bike"," bg-transparent text-black":s.tab!=="Bike"}]),onClick:e[5]||(e[5]=d=>s.tab="Bike")}," Bike ",2)])):(v(),S("h2",WN," This is a private website. To access it, please login first. "))]),f("div",HN,[i.isGoodscreenWidth?(v(),S("div",QN,[n.isConnected?(v(),S("div",JN,[s.tab==="Events"?(v(),me(c,{key:0})):se("",!0),s.tab==="Chores"?(v(),me(l,{key:1})):se("",!0),s.tab==="Rooms"?(v(),me(u,{key:2})):se("",!0),s.tab==="Bike"?(v(),me(h,{key:3})):se("",!0)])):(v(),S("div",YN,[oe(a)]))])):(v(),S("div",XN,tV))])])}const rV=te(LN,[["render",nV]]);let oc;na.onAuthStateChanged(()=>{oc||(oc=R9(rV),oc.use(S9()),oc.mount("#app"))});

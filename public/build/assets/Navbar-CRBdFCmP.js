import{h as F,j as B,k as y,l as m,m as ot,n as x,F as oe,p as A,q as j,s as R,v as Q,x as at,y as q,T as it,z as ut,A as st,B as dt,o as O,c as P,b as w,a as L,w as W,u as k,i as ee,r as Te,e as te,t as Se}from"./app-DMcOxuWX.js";function we(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function be(){let e=[],t={addEventListener(n,r,l,o){return n.addEventListener(r,l,o),t.add(()=>n.removeEventListener(r,l,o))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return we(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let o=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:o})})},group(n){let r=be();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}let ct=Symbol("headlessui.useid"),ft=0;function _e(){return F(ct,()=>`${++ft}`)()}function E(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function H(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,H),r}var pt=Object.defineProperty,vt=(e,t,n)=>t in e?pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Le=(e,t,n)=>(vt(e,typeof t!="symbol"?t+"":t,n),n);let mt=class{constructor(){Le(this,"current",this.detect()),Le(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ie=new mt;function V(e){if(ie.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=E(e);if(t)return t.ownerDocument}return document}let fe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var _=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(_||{}),Ae=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ae||{}),ht=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ht||{});function gt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(fe)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var De=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(De||{});function yt(e,t=0){var n;return e===((n=V(e))==null?void 0:n.body)?!1:H(t,{0(){return e.matches(fe)},1(){let r=e;for(;r!==null;){if(r.matches(fe))return!0;r=r.parentElement}return!1}})}var wt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(wt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let bt=["textarea","input"].join(",");function Et(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,bt))!=null?n:!1}function $t(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),o=t(r);if(l===null||o===null)return 0;let i=l.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function le(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var o;let i=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,a=Array.isArray(e)?n?$t(e):e:gt(e);l.length>0&&a.length>1&&(a=a.filter(c=>!l.includes(c))),r=r??i.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},h=0,f=a.length,p;do{if(h>=f||h+f<=0)return 0;let c=s+h;if(t&16)c=(c+f)%f;else{if(c<0)return 3;if(c>=f)return 1}p=a[c],p==null||p.focus(d),h+=u}while(p!==i.activeElement);return t&6&&Et(p)&&p.select(),2}function Ne(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function xt(){return/Android/gi.test(window.navigator.userAgent)}function Tt(){return Ne()||xt()}function ne(e,t,n){ie.isServer||B(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function Ce(e,t,n){ie.isServer||B(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function St(e,t,n=m(()=>!0)){function r(o,i){if(!n.value||o.defaultPrevented)return;let a=i(o);if(a===null||!a.getRootNode().contains(a))return;let u=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of u){if(s===null)continue;let d=s instanceof HTMLElement?s:E(s);if(d!=null&&d.contains(a)||o.composed&&o.composedPath().includes(d))return}return!yt(a,De.Loose)&&a.tabIndex!==-1&&o.preventDefault(),t(o,a)}let l=y(null);ne("pointerdown",o=>{var i,a;n.value&&(l.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),ne("mousedown",o=>{var i,a;n.value&&(l.value=((a=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:a[0])||o.target)},!0),ne("click",o=>{Tt()||l.value&&(r(o,()=>l.value),l.value=null)},!0),ne("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Ce("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var pe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(pe||{}),Lt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Lt||{});function I({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...l}){var o;let i=je(r,n),a=Object.assign(l,{props:i});if(e||t&2&&i.static)return de(a);if(t&1){let u=(o=i.unmount)==null||o?0:1;return H(u,{0(){return null},1(){return de({...l,props:{...i,hidden:!0,style:{display:"none"}}})}})}return de(a)}function de({props:e,attrs:t,slots:n,slot:r,name:l}){var o,i;let{as:a,...u}=Ot(e,["unmount","static"]),s=(o=n.default)==null?void 0:o.call(n,r),d={};if(r){let h=!1,f=[];for(let[p,c]of Object.entries(r))typeof c=="boolean"&&(h=!0),c===!0&&f.push(p);h&&(d["data-headlessui-state"]=f.join(" "))}if(a==="template"){if(s=Me(s??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[h,...f]=s??[];if(!Pt(h)||f.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(v=>v.trim()).filter((v,$,D)=>D.indexOf(v)===$).sort((v,$)=>v.localeCompare($)).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let p=je((i=h.props)!=null?i:{},u,d),c=ot(h,p,!0);for(let v in p)v.startsWith("on")&&(c.props||(c.props={}),c.props[v]=p[v]);return c}return Array.isArray(s)&&s.length===1?s[0]:s}return x(a,Object.assign({},u,d),{default:()=>s})}function Me(e){return e.flatMap(t=>t.type===oe?Me(t.children):[t])}function je(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...o){let i=n[r];for(let a of i){if(l instanceof Event&&l.defaultPrevented)return;a(l,...o)}}});return t}function Ot(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Pt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var ae=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ae||{});let ve=A({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var r;let{features:l,...o}=e,i={"aria-hidden":(l&2)===2?!0:(r=o["aria-hidden"])!=null?r:void 0,hidden:(l&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return I({ourProps:i,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}}),Ft=Symbol("Context");var z=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(z||{});function kt(){return F(Ft,null)}var Re=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Re||{});function _t(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let N=[];_t(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&N[0]!==t.target&&(N.unshift(t.target),N=N.filter(n=>n!=null&&n.isConnected),N.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function He(e,t,n,r){ie.isServer||B(l=>{e=e??window,e.addEventListener(t,n,r),l(()=>e.removeEventListener(t,n,r))})}var X=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(X||{});function At(){let e=y(0);return Ce("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Be(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let r=E(n);r instanceof HTMLElement&&t.add(r)}return t}var Ie=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ie||{});let K=Object.assign(A({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:y(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=y(null);r({el:l,$el:l});let o=m(()=>V(l)),i=y(!1);j(()=>i.value=!0),R(()=>i.value=!1),Nt({ownerDocument:o},m(()=>i.value&&!!(e.features&16)));let a=Ct({ownerDocument:o,container:l,initialFocus:m(()=>e.initialFocus)},m(()=>i.value&&!!(e.features&2)));Mt({ownerDocument:o,container:l,containers:e.containers,previousActiveElement:a},m(()=>i.value&&!!(e.features&8)));let u=At();function s(p){let c=E(l);c&&(v=>v())(()=>{H(u.value,{[X.Forwards]:()=>{le(c,_.First,{skipElements:[p.relatedTarget]})},[X.Backwards]:()=>{le(c,_.Last,{skipElements:[p.relatedTarget]})}})})}let d=y(!1);function h(p){p.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function f(p){if(!i.value)return;let c=Be(e.containers);E(l)instanceof HTMLElement&&c.add(E(l));let v=p.relatedTarget;v instanceof HTMLElement&&v.dataset.headlessuiFocusGuard!=="true"&&(Ue(c,v)||(d.value?le(E(l),H(u.value,{[X.Forwards]:()=>_.Next,[X.Backwards]:()=>_.Previous})|_.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&M(p.target)))}return()=>{let p={},c={ref:l,onKeydown:h,onFocusout:f},{features:v,initialFocus:$,containers:D,...U}=e;return x(oe,[!!(v&4)&&x(ve,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ae.Focusable}),I({ourProps:c,theirProps:{...t,...U},slot:p,attrs:t,slots:n,name:"FocusTrap"}),!!(v&4)&&x(ve,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ae.Focusable})])}}}),{features:Ie});function Dt(e){let t=y(N.slice());return Q([e],([n],[r])=>{r===!0&&n===!1?we(()=>{t.value.splice(0)}):r===!1&&n===!0&&(t.value=N.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function Nt({ownerDocument:e},t){let n=Dt(t);j(()=>{B(()=>{var r,l;t.value||((r=e.value)==null?void 0:r.activeElement)===((l=e.value)==null?void 0:l.body)&&M(n())},{flush:"post"})}),R(()=>{t.value&&M(n())})}function Ct({ownerDocument:e,container:t,initialFocus:n},r){let l=y(null),o=y(!1);return j(()=>o.value=!0),R(()=>o.value=!1),j(()=>{Q([t,n,r],(i,a)=>{if(i.every((s,d)=>(a==null?void 0:a[d])===s)||!r.value)return;let u=E(t);u&&we(()=>{var s,d;if(!o.value)return;let h=E(n),f=(s=e.value)==null?void 0:s.activeElement;if(h){if(h===f){l.value=f;return}}else if(u.contains(f)){l.value=f;return}h?M(h):le(u,_.First|_.NoScroll)===Ae.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),l}function Mt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){var o;He((o=e.value)==null?void 0:o.defaultView,"focus",i=>{if(!l.value)return;let a=Be(n);E(t)instanceof HTMLElement&&a.add(E(t));let u=r.value;if(!u)return;let s=i.target;s&&s instanceof HTMLElement?Ue(a,s)?(r.value=s,M(s)):(i.preventDefault(),i.stopPropagation(),M(u)):M(r.value)},!0)}function Ue(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function jt(e){let t=at(e.getSnapshot());return R(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Rt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...o){let i=t[l].call(n,...o);i&&(n=i,r.forEach(a=>a()))}}}function Ht(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,o=e-l;n.style(r,"paddingRight",`${o}px`)}}}function Bt(){return Ne()?{before({doc:e,d:t,meta:n}){function r(l){return n.containers.flatMap(o=>o()).some(o=>o.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=be();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let o=(l=window.scrollY)!=null?l:window.pageYOffset,i=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let u=a.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),d=e.querySelector(s);d&&!r(d)&&(i=d)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let u=a.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement){if(a.target.tagName==="INPUT")return;if(r(a.target)){let u=a.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()}},{passive:!1}),t.add(()=>{var a;let u=(a=window.scrollY)!=null?a:window.pageYOffset;o!==u&&window.scrollTo(0,o),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function It(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ut(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=Rt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:be(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Ut(n)},l=[Bt(),Ht(),It()];l.forEach(({before:o})=>o==null?void 0:o(r)),l.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function Wt(e,t,n){let r=jt(C),l=m(()=>{let o=e.value?r.value.get(e.value):void 0;return o?o.count>0:!1});return Q([e,t],([o,i],[a],u)=>{if(!o||!i)return;C.dispatch("PUSH",o,n);let s=!1;u(()=>{s||(C.dispatch("POP",a??o,n),s=!0)})},{immediate:!0}),l}let ce=new Map,Y=new Map;function Oe(e,t=y(!0)){B(n=>{var r;if(!t.value)return;let l=E(e);if(!l)return;n(function(){var i;if(!l)return;let a=(i=Y.get(l))!=null?i:1;if(a===1?Y.delete(l):Y.set(l,a-1),a!==1)return;let u=ce.get(l);u&&(u["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",u["aria-hidden"]),l.inert=u.inert,ce.delete(l))});let o=(r=Y.get(l))!=null?r:0;Y.set(l,o+1),o===0&&(ce.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}function qt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let r=y(null),l=V(r);function o(){var i,a,u;let s=[];for(let d of e)d!==null&&(d instanceof HTMLElement?s.push(d):"value"in d&&d.value instanceof HTMLElement&&s.push(d.value));if(t!=null&&t.value)for(let d of t.value)s.push(d);for(let d of(i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(E(r))||d.contains((u=(a=E(r))==null?void 0:a.getRootNode())==null?void 0:u.host)||s.some(h=>d.contains(h))||s.push(d));return s}return{resolveContainers:o,contains(i){return o().some(a=>a.contains(i))},mainTreeNodeRef:r,MainTreeNode(){return n!=null?null:x(ve,{features:ae.Hidden,ref:r})}}}let We=Symbol("ForcePortalRootContext");function Vt(){return F(We,!1)}let Pe=A({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return q(We,e.force),()=>{let{force:r,...l}=e;return I({theirProps:l,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),qe=Symbol("StackContext");var me=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(me||{});function Gt(){return F(qe,()=>{})}function Kt({type:e,enabled:t,element:n,onUpdate:r}){let l=Gt();function o(...i){r==null||r(...i),l(...i)}j(()=>{Q(t,(i,a)=>{i?o(0,e,n):a===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),R(()=>{t.value&&o(1,e,n)}),q(qe,o)}let Yt=Symbol("DescriptionContext");function zt({slot:e=y({}),name:t="Description",props:n={}}={}){let r=y([]);function l(o){return r.value.push(o),()=>{let i=r.value.indexOf(o);i!==-1&&r.value.splice(i,1)}}return q(Yt,{register:l,slot:e,name:t,props:n}),m(()=>r.value.length>0?r.value.join(" "):void 0)}function Xt(e){let t=V(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}const he=new WeakMap;function Qt(e){var t;return(t=he.get(e))!=null?t:0}function Fe(e,t){let n=t(Qt(e));return n<=0?he.delete(e):he.set(e,n),n}let Jt=A({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=y(null),l=m(()=>V(r)),o=Vt(),i=F(Ve,null),a=y(o===!0||i==null?Xt(r.value):i.resolveTarget());a.value&&Fe(a.value,f=>f+1);let u=y(!1);j(()=>{u.value=!0}),B(()=>{o||i!=null&&(a.value=i.resolveTarget())});let s=F(ge,null),d=!1,h=st();return Q(r,()=>{if(d||!s)return;let f=E(r);f&&(R(s.register(f),h),d=!0)}),R(()=>{var f,p;let c=(f=l.value)==null?void 0:f.getElementById("headlessui-portal-root");!c||a.value!==c||Fe(a.value,v=>v-1)||a.value.children.length>0||(p=a.value.parentElement)==null||p.removeChild(a.value)}),()=>{if(!u.value||a.value===null)return null;let f={ref:r,"data-headlessui-portal":""};return x(it,{to:a.value},I({ourProps:f,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),ge=Symbol("PortalParentContext");function Zt(){let e=F(ge,null),t=y([]);function n(o){return t.value.push(o),e&&e.register(o),()=>r(o)}function r(o){let i=t.value.indexOf(o);i!==-1&&t.value.splice(i,1),e&&e.unregister(o)}let l={register:n,unregister:r,portals:t};return[t,A({name:"PortalWrapper",setup(o,{slots:i}){return q(ge,l),()=>{var a;return(a=i.default)==null?void 0:a.call(i)}}})]}let Ve=Symbol("PortalGroupContext"),en=A({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=ut({resolveTarget(){return e.target}});return q(Ve,r),()=>{let{target:l,...o}=e;return I({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var tn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(tn||{});let ye=Symbol("DialogContext");function Ge(e){let t=F(ye,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ge),n}return t}let re="DC8F892D-2EBD-447C-A4C8-A03058436FF4",nn=A({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:re},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){var o,i;let a=(o=e.id)!=null?o:`headlessui-dialog-${_e()}`,u=y(!1);j(()=>{u.value=!0});let s=!1,d=m(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),h=y(0),f=kt(),p=m(()=>e.open===re&&f!==null?(f.value&z.Open)===z.Open:e.open),c=y(null),v=m(()=>V(c));if(l({el:c,$el:c}),!(e.open!==re||f!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof p.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p.value===re?void 0:e.open}`);let $=m(()=>u.value&&p.value?0:1),D=m(()=>$.value===0),U=m(()=>h.value>1),Ee=F(ye,null)!==null,[Ke,Ye]=Zt(),{resolveContainers:ue,mainTreeNodeRef:$e,MainTreeNode:ze}=qt({portals:Ke,defaultContainers:[m(()=>{var g;return(g=G.panelRef.value)!=null?g:c.value})]}),Xe=m(()=>U.value?"parent":"leaf"),xe=m(()=>f!==null?(f.value&z.Closing)===z.Closing:!1),Qe=m(()=>Ee||xe.value?!1:D.value),Je=m(()=>{var g,b,T;return(T=Array.from((b=(g=v.value)==null?void 0:g.querySelectorAll("body > *"))!=null?b:[]).find(S=>S.id==="headlessui-portal-root"?!1:S.contains(E($e))&&S instanceof HTMLElement))!=null?T:null});Oe(Je,Qe);let Ze=m(()=>U.value?!0:D.value),et=m(()=>{var g,b,T;return(T=Array.from((b=(g=v.value)==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?b:[]).find(S=>S.contains(E($e))&&S instanceof HTMLElement))!=null?T:null});Oe(et,Ze),Kt({type:"Dialog",enabled:m(()=>$.value===0),element:c,onUpdate:(g,b)=>{if(b==="Dialog")return H(g,{[me.Add]:()=>h.value+=1,[me.Remove]:()=>h.value-=1})}});let tt=zt({name:"DialogDescription",slot:m(()=>({open:p.value}))}),J=y(null),G={titleId:J,panelRef:y(null),dialogState:$,setTitleId(g){J.value!==g&&(J.value=g)},close(){t("close",!1)}};q(ye,G);let nt=m(()=>!(!D.value||U.value));St(ue,(g,b)=>{g.preventDefault(),G.close(),dt(()=>b==null?void 0:b.focus())},nt);let rt=m(()=>!(U.value||$.value!==0));He((i=v.value)==null?void 0:i.defaultView,"keydown",g=>{rt.value&&(g.defaultPrevented||g.key===Re.Escape&&(g.preventDefault(),g.stopPropagation(),G.close()))});let lt=m(()=>!(xe.value||$.value!==0||Ee));return Wt(v,lt,g=>{var b;return{containers:[...(b=g.containers)!=null?b:[],ue]}}),B(g=>{if($.value!==0)return;let b=E(c);if(!b)return;let T=new ResizeObserver(S=>{for(let se of S){let Z=se.target.getBoundingClientRect();Z.x===0&&Z.y===0&&Z.width===0&&Z.height===0&&G.close()}});T.observe(b),g(()=>T.disconnect())}),()=>{let{open:g,initialFocus:b,...T}=e,S={...n,ref:c,id:a,role:d.value,"aria-modal":$.value===0?!0:void 0,"aria-labelledby":J.value,"aria-describedby":tt.value},se={open:$.value===0};return x(Pe,{force:!0},()=>[x(Jt,()=>x(en,{target:c.value},()=>x(Pe,{force:!1},()=>x(K,{initialFocus:b,containers:ue,features:D.value?H(Xe.value,{parent:K.features.RestoreFocus,leaf:K.features.All&~K.features.FocusLock}):K.features.None},()=>x(Ye,{},()=>I({ourProps:S,theirProps:{...T,...n},slot:se,attrs:n,slots:r,visible:$.value===0,features:pe.RenderStrategy|pe.Static,name:"Dialog"})))))),x(ze)])}}}),rn=A({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:r}){var l;let o=(l=e.id)!=null?l:`headlessui-dialog-panel-${_e()}`,i=Ge("DialogPanel");r({el:i.panelRef,$el:i.panelRef});function a(u){u.stopPropagation()}return()=>{let{...u}=e,s={id:o,ref:i.panelRef,onClick:a};return I({ourProps:s,theirProps:u,slot:{open:i.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function ln(e,t){return O(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function on(e,t){return O(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const an=(e,t)=>{const n=e.__vccOpts||e;for(const[r,l]of t)n[r]=l;return n},un={},sn={src:"/logo.png",alt:"TCCD"};function dn(e,t){return O(),P("img",sn)}const ke=an(un,[["render",dn]]),cn={class:"absolute inset-x-0 top-0 z-50"},fn={class:"flex items-center justify-between p-6 lg:px-8","aria-label":"Global"},pn={class:"flex lg:flex-1"},vn={class:"flex lg:hidden"},mn=w("span",{class:"sr-only"},"Open main menu",-1),hn={class:"hidden lg:flex lg:gap-x-12"},gn={class:"hidden lg:flex lg:flex-1 lg:justify-end"},yn=["href"],wn=w("span",{"aria-hidden":"true"},"→",-1),bn=["href"],En=w("span",{"aria-hidden":"true"},"→",-1),$n=w("div",{class:"fixed inset-0 z-50"},null,-1),xn={class:"flex items-center justify-between"},Tn=w("span",{class:"sr-only"},"Close menu",-1),Sn={class:"mt-6 flow-root"},Ln={class:"-my-6 divide-y divide-gray-500/10"},On={class:"space-y-2 py-6"},Pn={class:"py-6"},Fn=["href"],kn=["href"],Dn={__name:"Navbar",setup(e){const t=[{name:"Upcoming Events",href:route("events")},{name:"Blog",href:route("posts")},{name:"About Us",href:route("about")}],n=y(!1);return(r,l)=>(O(),P("header",cn,[w("nav",fn,[w("div",pn,[L(k(ee),{href:r.route("home"),class:"-m-1.5 p-1.5"},{default:W(()=>[L(ke,{class:"h-8 w-auto"})]),_:1},8,["href"])]),w("div",vn,[w("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:l[0]||(l[0]=o=>n.value=!0)},[mn,L(k(ln),{class:"h-6 w-6","aria-hidden":"true"})])]),w("div",hn,[(O(),P(oe,null,Te(t,o=>L(k(ee),{key:o.name,href:o.href,class:"text-sm font-semibold leading-6 text-gray-900"},{default:W(()=>[te(Se(o.name),1)]),_:2},1032,["href"])),64))]),w("div",gn,[r.$page.props.auth.user?(O(),P("a",{key:0,href:r.route("filament.admin.pages.dashboard"),class:"text-sm font-semibold leading-6 text-gray-900"},[te("Dashboard "),wn],8,yn)):(O(),P("a",{key:1,href:r.route("filament.admin.auth.login"),class:"text-sm font-semibold leading-6 text-gray-900"},[te("Log in "),En],8,bn))])]),L(k(nn),{class:"lg:hidden",onClose:l[2]||(l[2]=o=>n.value=!1),open:n.value},{default:W(()=>[$n,L(k(rn),{class:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:W(()=>[w("div",xn,[L(k(ee),{href:r.route("home"),class:"-m-1.5 p-1.5"},{default:W(()=>[L(ke,{class:"h-8 w-auto"})]),_:1},8,["href"]),w("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:l[1]||(l[1]=o=>n.value=!1)},[Tn,L(k(on),{class:"h-6 w-6","aria-hidden":"true"})])]),w("div",Sn,[w("div",Ln,[w("div",On,[(O(),P(oe,null,Te(t,o=>L(k(ee),{key:o.name,href:o.href,class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:W(()=>[te(Se(o.name),1)]),_:2},1032,["href"])),64))]),w("div",Pn,[r.$page.props.auth.user?(O(),P("a",{key:0,href:r.route("filament.admin.pages.dashboard"),class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Dashboard",8,Fn)):(O(),P("a",{key:1,href:r.route("filament.admin.auth.login"),class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Log in",8,kn))])])])]),_:1})]),_:1},8,["open"])]))}};export{Dn as _};

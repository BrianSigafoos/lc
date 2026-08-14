var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.6`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function E(e){return{current:e}}function he(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function D(e,t){me++,pe[me]=e.current,e.current=t}var ge=E(null),_e=E(null),ve=E(null),ye=E(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,O=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function k(e){e[Ct]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return je.call(Ft,e)?!0:je.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&nn(e,a,t[a])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,A=null;function pn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[_t]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(fn!==null||A!==null)&&(bu(),fn&&(t=fn,e=A,A=fn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){fn?A?A.push(r):A=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Wt(Dt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,dn(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Gt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),jt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)_i(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=gi(31,n,t,i),e.elementType=ae,e.lanes=a,e;case y:return xi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=gi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=gi(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=gi(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case ie:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=gi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-qe(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(s(519));function Gi(e){throw Zi(Ei(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=E(null),$i=null,ea=null;function ta(e,t,n){D(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,he(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ra(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ra(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function aa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Ar(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ye.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(s(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=w.S;w.S=function(e,t){tu=O(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=E(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?D(wa,wa.current):D(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(s(460)),ka=Error(s(474)),Aa=Error(s(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(s(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(s(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ie&&Pa(a)===t.type)?(t=i(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=xi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case ie:return t=Pa(t),f(e,t,n)}if(de(t)||ce(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Pa(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Pa(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),M&&Ii(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),M&&Ii(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Pa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Va(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=xi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=bi(a.type,a.key,a.props,null,e.mode,c),Va(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(a,e.mode,c),c.return=e,e=c}return o(e);case ie:return a=Pa(a),b(e,r,a,c)}if(de(a))return h(e,r,a,c);if(ce(a)){if(l=ce(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ba(a),c);if(a.$$typeof===S)return b(e,r,la(e,a),c);Ha(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Si(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=E(null),ao=E(0);function oo(e,t){e=Gl,D(ao,e),D(io,t),Gl=e|t.baseLanes}function so(){D(ao,Gl),D(io,io.current)}function co(){Gl=ao.current,he(io),he(ao)}var lo=E(null),uo=null;function fo(e){var t=e.alternate;D(P,P.current&1),D(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){D(P,P.current),D(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(D(P,P.current),D(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){D(P,P.current),D(lo,lo.current)}function go(e){he(lo),uo===e&&(uo=null),he(P)}var P=E(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(s(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){w.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(s(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var i=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=i)throw Error(s(301));if(i+=1,L=I=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}w.H=Gs,a=t(n,r)}while(bo);return a}function Ao(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(s(467)):Error(s(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(s(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Ar(a,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ar(a,t.memoizedState)||(B=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Uo(e,t,n){var r=F,i=z(),a=M;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Ar((I||i).memoizedState,n);if(o&&(i.memoizedState=n,B=!0),i=i.queue,ms(Ko.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,i){if(zs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};w.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Qo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Rs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ks(e).queue;Es(e,i,t,fe,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(s(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,i=Po();if(M){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Wo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ps(Ko.bind(null,r,a,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,i,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(s(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ei(r,n),i=nc(e.stateNode,r,i),Qa(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Wi&&(e=Error(s(422),{cause:r}),Zi(Ei(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ei(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=rc(i),ic(i,e,n,r),Qa(n,i),!1}n=n.return}while(n!==null);return!1}var oc=Error(s(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(po(t),i)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(B||aa(e,t,n,!1),i=(n&e.childLanes)!==0,B||i){if(r=G,r!==null&&(o=ut(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,di(e,o),hu(r,e,o),oc;Du(),t=hc(e,t,n)}else e=a.treeContext,j=cf(o.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(i?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(ho(t),i=t.mode,c=Dc({mode:`hidden`,children:c},i),r=xi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,i=t.mode,r=Dc({mode:`visible`,children:r.children},i),c=xi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),o=(n&e.childLanes)!==0,B||o){if(o=G,o!==null&&(r=ut(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(o,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return i?(ho(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,i,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(i=c.cachePool,i===null?i=Da():(l=N._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=cc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(s(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Xs(r,t.pendingProps),bc(e,t,r,i,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ja(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0),eo(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==i){i=Ei(Error(s(424)),t),Zi(i),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===i){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),k(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Vi=t,Ui=!0,i=j,Zd(t.type)?(lf=i,j=cf(r.firstChild)):j=i),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((i=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?i=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,i=!0)),i||Gi(t)),Se(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Do(e,t,Ao,null,null,n),Qf._currentValue=i),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,sa(t),i=ca(i),r=r(i),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(i=Ta(),i===null&&(i=G,a=ma(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},qa(t),ta(t,N,i)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ta(t,N,r),r!==i.cache&&ia(t,[N],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ic(t),a===null?(V(t),Lc(t,i,null,r,n)):(V(t),Rc(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,a)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,i,e,r,n)),null;case 27:if(Ce(t),n=ve.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}e=ge.current,Ji(t)?Ki(t,e):(e=ff(i,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Ce(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}if(a=ge.current,Ji(t))Ki(t,a);else{var o=Bd(ve.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[gt]=t,a[_t]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ve.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Vi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[gt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[gt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(he(P),r=t.memoizedState,r===null)return V(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_o(e),a!==null){for(t.flags|=128,Bc(r,!1),e=a.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return D(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&O()>nu&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304)}else{if(!i)if(e=_o(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!M)return V(t),null}else 2*O()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=O(),e.sibling=null,n=P.current,D(P,i?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(P),null;case 4:return xe(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&he(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:he(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&he(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Xs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[Ct]||a[gt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[gt]=e,k(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[gt]=e,k(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Zc(e,i,n===null?i:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=O()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||i,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;tl(e,$c(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(en(a,``),n.flags&=-33),tl(e,$c(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;el(e,$c(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:w.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-O(),10<i)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-O():(a&4194048)===a?tu-O():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,w.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=w.H;return w.H=Hs,e===null?Hs:e}function Eu(){var e=w.A;return w.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=O()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Ma(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,w.H=r,w.A=i,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Pe();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=si,st(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,i=T.p,T.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,T.p=i,w.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,T.p=r,w.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=w.T,i=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,a)}catch{}return!0}finally{T.p=i,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>O()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=di(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=O(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,O()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Me(Le,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}hn(function(){var r=a,i=dn(n),o=[];a:{var s=ti.get(e);if(s!==void 0){var c=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:u=`focus`,c=Rn;break;case`focusout`:u=`blur`,c=Rn;break;case`beforeblur`:case`afterblur`:c=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Yn;break;case Jr:case Yr:case Xr:c=zn;break;case ei:c=Xn;break;case`scroll`:case`scrollend`:c=jn;break;case`wheel`:c=Zn;break;case`copy`:case`cut`:case`paste`:c=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn;break;case`toggle`:case`beforetoggle`:c=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Tt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Dt(c),h=u==null?s:Dt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Dt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=vr;else if(fr(s))if(yr)v=Or;else{v=Er;var y=Tr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Dt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(o,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(o,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,a);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:rn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[_t]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}$t(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),k(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);k(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ve.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Ot(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),k(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,k(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),k(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,k(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),k(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,k(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),k(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,k(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),k(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=O()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.6`)throw Error(s(527,Lp,`19.2.6`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Zs,a=Qs,o=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),u=e(((e,t)=>{t.exports=l()})),d=c(),f=n(),p=u(),m=[[`problems`,`Problems`,`/problems/`],[`algorithms`,`Algorithms`,`/algorithms/`],[`flashcards`,`Flashcards`,`/flashcards/`],[`architecture`,`Architecture`,`/architecture/`],[`ruby`,`Ruby glossary`,`/ruby/`]],h=[[`home`,`Home`,`/`],...m],g=[[`Workflow`,`#workflow`],[`Core patterns`,`#patterns`],[`Ruby basics`,`#ruby`],[`Complexity`,`#complexity`]];function _({active:e=`home`,includeHomeSections:t=!1}){let[n,r]=(0,f.useState)(!1),i=(0,f.useId)(),a=(0,f.useRef)(null);return(0,f.useEffect)(()=>{if(!n)return;let e=e=>e.key===`Escape`&&r(!1),t=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`keydown`,e),window.addEventListener(`pointerdown`,t),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`pointerdown`,t)}},[n]),(0,p.jsxs)(`div`,{className:`mobile-nav-menu ${n?`open`:``}`,ref:a,children:[(0,p.jsxs)(`button`,{className:`mobile-nav-button`,type:`button`,"aria-expanded":n,"aria-controls":i,"aria-label":n?`Close navigation menu`:`Open navigation menu`,onClick:()=>r(e=>!e),children:[(0,p.jsx)(`span`,{}),(0,p.jsx)(`span`,{}),(0,p.jsx)(`span`,{})]}),(0,p.jsxs)(`div`,{className:`mobile-nav-panel`,id:i,hidden:!n,children:[t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`p`,{children:`On this page`}),g.map(([e,t])=>(0,p.jsx)(`a`,{href:t,onClick:()=>r(!1),children:e},t))]}),(0,p.jsx)(`p`,{children:t?`Study areas`:`Navigate`}),h.map(([t,n,i])=>(0,p.jsxs)(`a`,{className:e===t?`active`:``,href:i,onClick:()=>r(!1),children:[n,e===t&&(0,p.jsx)(`span`,{children:`Current`})]},t))]})]})}function v({children:e,active:t=`home`}){return(0,p.jsxs)(`main`,{children:[(0,p.jsxs)(`nav`,{className:`site-nav`,children:[(0,p.jsxs)(`a`,{className:`brand`,href:`/`,children:[(0,p.jsx)(`span`,{className:`brand-mark`,children:`rb`}),` Re-prime`]}),(0,p.jsx)(`div`,{className:`site-nav-links`,children:m.map(([e,n,r])=>(0,p.jsx)(`a`,{className:t===e?`active`:``,href:r,children:n},e))}),(0,p.jsx)(_,{active:t})]}),e,(0,p.jsxs)(`footer`,{children:[(0,p.jsxs)(`a`,{className:`brand`,href:`/`,children:[(0,p.jsx)(`span`,{className:`brand-mark`,children:`rb`}),` Re-prime`]}),(0,p.jsx)(`p`,{children:`One clear mental model, one clean rep, then repeat.`}),(0,p.jsx)(`a`,{href:`#top`,children:`Back to top ↑`})]})]})}function y({kicker:e,title:t,copy:n,children:r}){return(0,p.jsx)(`header`,{className:`page-hero`,id:`top`,children:(0,p.jsxs)(`div`,{className:`page-hero-inner`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:e}),(0,p.jsx)(`h1`,{children:t}),(0,p.jsx)(`p`,{className:`hero-copy`,children:n}),r]})})}var b=[{id:`array-hash`,title:`Arrays, Hashes & Sets`,eyebrow:`The default toolbox`,when:`Lookup, counting, deduplication, complements, grouping, or tracking what you have seen.`,complexity:`Hash lookup/insert: O(1) average · Array access: O(1) · Array search: O(n)`,code:`# Two Sum — complement lookup
def two_sum(nums, target)
  seen = {}

  nums.each_with_index do |num, i|
    complement = target - num
    return [seen[complement], i] if seen.key?(complement)
    seen[num] = i
  end

  []
end

# Frequencies
counts = Hash.new(0)
words.each { |word| counts[word] += 1 }

# Membership
seen = Set.new`,notes:[`Use key? when nil could be a legitimate value.`,`Ruby 3.2 autoloads Set, so no require is needed.`,`Hash.new([]) is dangerous: every key shares one array. Use a block: Hash.new { |h, k| h[k] = [] }.`]},{id:`two-pointers`,title:`Two Pointers`,eyebrow:`Shrink the search space`,when:`Sorted arrays, pairs, palindromes, partitioning, or processing from both ends.`,complexity:`Usually O(n) time · O(1) extra space`,code:`# Pair sum in a sorted array
def pair_sum?(nums, target)
  left = 0
  right = nums.length - 1

  while left < right
    sum = nums[left] + nums[right]
    return true if sum == target
    sum < target ? left += 1 : right -= 1
  end

  false
end`,notes:[`Ask what ordering or monotonic fact makes moving one pointer safe.`,`Same-direction pointers often compact or remove items in-place.`,`Opposite-direction pointers often find pairs or compare symmetry.`]},{id:`sliding-window`,title:`Sliding Window`,eyebrow:`Contiguous ranges`,when:`Longest/shortest valid substring or subarray, fixed-size windows, or constraints over contiguous elements.`,complexity:`Usually O(n): each pointer advances at most n times`,code:`# Longest substring without repeated characters
def longest_unique(s)
  last_seen = {}
  left = 0
  best = 0

  s.each_char.with_index do |char, right|
    if last_seen.key?(char) && last_seen[char] >= left
      left = last_seen[char] + 1
    end
    last_seen[char] = right
    best = [best, right - left + 1].max
  end

  best
end`,notes:[`Expand right; shrink left until the invariant is restored.`,`Be precise about whether the window is [left, right] or [left, right).`,`Window length for inclusive endpoints is right - left + 1.`]},{id:`stack`,title:`Stack & Monotonic Stack`,eyebrow:`Last in, first out`,when:`Nested structure, matching delimiters, undo, expression parsing, next greater/smaller element.`,complexity:`append/pop: O(1) · Monotonic scan: O(n)`,code:`# Valid parentheses
def valid?(s)
  matches = { ")" => "(", "]" => "[", "}" => "{" }
  stack = []

  s.each_char do |char|
    if matches.value?(char)
      stack.append(char)
    elsif stack.pop != matches[char]
      return false
    end
  end

  stack.empty?
end

# Ruby stack: stack.append(value); stack.pop; stack[-1]`,notes:[`A monotonic stack stores unresolved candidates in increasing or decreasing order.`,`Each item is appended and popped at most once, so the total can still be O(n).`]},{id:`queue-bfs`,title:`Queue & BFS`,eyebrow:`Nearest first`,when:`Shortest path in an unweighted graph, minimum moves, levels, spreading processes, or breadth-first exploration.`,complexity:`Graph traversal: O(V + E) · Avoid Array#shift in hot loops`,code:`# BFS without costly Array#shift
def shortest_steps(graph, start, target)
  queue = [[start, 0]]
  head = 0
  seen = Set.new([start])

  while head < queue.length
    node, distance = queue[head]
    head += 1
    return distance if node == target

    graph.fetch(node, []).each do |neighbor|
      next if seen.include?(neighbor)
      seen.add(neighbor)       # mark when enqueued
      queue.append([neighbor, distance + 1])
    end
  end

  -1
end`,notes:[`Mark visited when enqueuing, not when dequeuing, to prevent duplicates.`,`For level processing: level_size = queue.length - head.`,`For multi-source BFS, enqueue every source initially.`]},{id:`linked-list`,title:`Linked Lists`,eyebrow:`Rewire, don’t shift`,when:`Pointer manipulation, reversal, cycle detection, merging, or deleting without array shifts.`,complexity:`Access/search: O(n) · Known-node insertion/deletion: O(1)`,code:`ListNode = Struct.new(:val, :next)

def reverse(head)
  previous = nil
  current = head

  while current
    following = current.next
    current.next = previous
    previous = current
    current = following
  end

  previous
end

# Cycle: slow = slow.next; fast = fast.next&.next`,notes:[`Save next before overwriting current.next.`,`A dummy/sentinel node removes head-specific branches.`,`Slow/fast pointers detect cycles and find middles.`]},{id:`binary-search`,title:`Binary Search`,eyebrow:`Monotonic decisions`,when:`Sorted data—or any answer space where a predicate flips from false to true exactly once.`,complexity:`O(log n) time · O(1) space`,code:`# First index where predicate is true
def first_true(left, right)
  while left < right
    mid = left + (right - left) / 2
    if yield(mid)
      right = mid
    else
      left = mid + 1
    end
  end
  left
end

# Ruby helpers on sorted arrays
index = nums.bsearch_index { |x| x >= target }
value = nums.bsearch { |x| x >= target }`,notes:[`Name what left and right mean before coding.`,`Use mid = left + (right-left)/2.`,`For ‘minimum feasible’, binary-search the answer, not necessarily the input array.`]},{id:`trees`,title:`Trees: DFS & BFS`,eyebrow:`Recursive structure`,when:`Hierarchy, paths, subtree answers, ancestry, depth, or ordered binary search tree operations.`,complexity:`Traversal: O(n) · Recursion space: O(height)`,code:`TreeNode = Struct.new(:val, :left, :right)

def max_depth(node)
  return 0 unless node
  1 + [max_depth(node.left), max_depth(node.right)].max
end

# Iterative DFS
stack = [root]
until stack.empty?
  node = stack.pop
  next unless node
  stack.append(node.right)
  stack.append(node.left)
end`,notes:[`Define what the recursive function returns in one sentence.`,`Preorder: act before children. Inorder: between children. Postorder: after children.`,`BST inorder traversal produces sorted values.`]},{id:`graphs`,title:`Graphs & Topological Sort`,eyebrow:`Entities plus relationships`,when:`Dependencies, networks, reachability, components, cycles, prerequisites, or grids treated as graphs.`,complexity:`DFS/BFS: O(V + E) time · O(V) space`,code:`# Kahn's algorithm: dependency order
def topo_order(n, edges)
  graph = Array.new(n) { [] }
  indegree = Array.new(n, 0)
  edges.each do |from, to|
    graph[from].append(to)
    indegree[to] += 1
  end

  queue = (0...n).filter { |i| indegree[i].zero? }
  head = 0
  order = []
  while head < queue.length
    node = queue[head]; head += 1
    order.append(node)
    graph[node].each do |neighbor|
      indegree[neighbor] -= 1
      queue.append(neighbor) if indegree[neighbor].zero?
    end
  end
  order.length == n ? order : [] # shorter means cycle
end`,notes:[`Choose adjacency list over matrix for sparse graphs.`,`For grid neighbors, use [[1,0],[-1,0],[0,1],[0,-1]].`,`Directed cycle detection needs visiting/visited states, not only a single seen set.`]},{id:`heap`,title:`Heap / Priority Queue`,eyebrow:`Repeated minimum or maximum`,when:`Top K, scheduling, merge K streams, running extrema, or repeatedly taking the best candidate.`,complexity:`Peek: O(1) · Insert/remove: O(log n) · Build heap: O(n)`,code:`# Min-heap essentials (array-backed)
def heap_insert(heap, item)
  heap.append(item)
  i = heap.length - 1
  while i > 0
    parent = (i - 1) / 2
    break if heap[parent] <= heap[i]
    heap[parent], heap[i] = heap[i], heap[parent]
    i = parent
  end
end

# parent: (i-1)/2 · left: 2*i+1 · right: 2*i+2
# Ruby has no built-in general-purpose heap.
# Compare compound keys: [timestamp, sequence]`,notes:[`A heap is not globally sorted; only the root is guaranteed best.`,`On removal, move the last item to root and sift it down via the smaller child.`,`For a max-heap, reverse the comparison or negate numeric priorities.`]},{id:`intervals`,title:`Intervals`,eyebrow:`Sort, then sweep`,when:`Overlaps, schedules, merging ranges, room allocation, or simultaneous events.`,complexity:`Usually O(n log n) from sorting`,code:`def merge(intervals)
  sorted = intervals.sort_by(&:first)
  merged = []

  sorted.each do |start_at, end_at|
    if merged.empty? || start_at > merged[-1][1]
      merged.append([start_at, end_at])
    else
      merged[-1][1] = [merged[-1][1], end_at].max
    end
  end

  merged
end`,notes:[`Clarify whether touching intervals overlap.`,`Sort by start for merging; sort starts/ends separately for some sweep-line problems.`,`Write down the overlap condition before coding.`]},{id:`backtracking`,title:`Backtracking`,eyebrow:`Choose → explore → undo`,when:`All combinations, permutations, subsets, constraint satisfaction, or path enumeration.`,complexity:`Often exponential; describe branching factor and depth`,code:`def subsets(nums)
  result = []
  path = []

  search = lambda do |index|
    result.append(path.dup)
    (index...nums.length).each do |i|
      path.append(nums[i])  # choose
      search.call(i + 1)    # explore
      path.pop              # undo
    end
  end

  search.call(0)
  result
end`,notes:[`Copy mutable paths when saving: path.dup.`,`Prune as soon as a partial choice cannot become valid.`,`For duplicates, sort first and skip equal siblings at the same recursion depth.`]},{id:`dynamic-programming`,title:`Dynamic Programming`,eyebrow:`Cache repeated subproblems`,when:`Optimization/counting with overlapping subproblems and a small state that summarizes the past.`,complexity:`States × work per transition`,code:`# House robber: best through each position
def rob(nums)
  previous_two = 0
  previous_one = 0

  nums.each do |amount|
    current = [previous_one, previous_two + amount].max
    previous_two = previous_one
    previous_one = current
  end

  previous_one
end

# Memoization skeleton
memo = {}
solve = ->(state) { memo[state] ||= compute_from(state) }`,notes:[`State: what minimal information identifies a subproblem?`,`Transition: what choices lead to smaller states?`,`Base cases first. Then consider compressing the table only after correctness.`]},{id:`union-find`,title:`Union-Find`,eyebrow:`Dynamic connectivity`,when:`Merging groups, detecting redundant edges, connected components as edges arrive.`,complexity:`Near O(1) amortized with path compression + rank/size`,code:`class UnionFind
  def initialize(n)
    @parent = (0...n).to_a
    @size = Array.new(n, 1)
  end

  def find(x)
    @parent[x] = find(@parent[x]) while x != @parent[x]
    @parent[x]
  end

  def union(a, b)
    a, b = find(a), find(b)
    return false if a == b
    a, b = b, a if @size[a] < @size[b]
    @parent[b] = a
    @size[a] += @size[b]
    true
  end
end`,notes:[`find returns the component representative.`,`union returning false conveniently signals that an edge would form a cycle.`,`Use DFS/BFS instead when the graph is static and you need actual paths.`]}],x=[[`Immutable value object (3.2)`,`Task = Data.define(:name, :priority)`],[`Hash shorthand (3.1)`,`{ left:, right: }`],[`Endless method (3.0)`,`def key(task) = [task.time, task.sequence]`],[`Pattern matching (3.x)`,`case pair; in [value, index] then ... end`],[`Sort with tie-break`,`items.sort_by { |x| [x.time, x.sequence] }`],[`Count`,`items.tally  # Ruby 2.7+`],[`Group`,`items.group_by(&:category)`],[`Min/max by`,`items.min_by(&:score) · items.max_by(&:score)`],[`Indexed iteration`,`items.each_with_index do |item, i| ... end`],[`Ranges`,`(0...n) excludes n · (0..n) includes n`],[`Safe nested access`,`node&.next · hash.dig(:a, :b)`],[`Integer ceiling division`,`(a + b - 1) / b  # positive integers`],[`Infinity`,`Float::INFINITY`],[`Compound comparison`,`[a.time, a.seq] <=> [b.time, b.seq]`]];function ee({code:e}){let[t,n]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{className:`code-wrap`,children:[(0,p.jsx)(`button`,{className:`copy-button`,onClick:async()=>{await navigator.clipboard.writeText(e),n(!0),window.setTimeout(()=>n(!1),1200)},"aria-label":`Copy Ruby code`,children:t?`Copied`:`Copy`}),(0,p.jsx)(`pre`,{children:(0,p.jsx)(`code`,{children:e})})]})}function S(){let[e,t]=(0,f.useState)(``),[n,r]=(0,f.useState)([]),i=(0,f.useMemo)(()=>{let t=e.trim().toLowerCase();return t?b.filter(e=>[e.title,e.eyebrow,e.when,e.complexity,...e.notes].join(` `).toLowerCase().includes(t)):b},[e]),a=e=>{r(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,p.jsxs)(`main`,{children:[(0,p.jsxs)(`header`,{className:`hero`,id:`top`,children:[(0,p.jsxs)(`nav`,{className:`topbar`,children:[(0,p.jsxs)(`a`,{className:`brand`,href:`#top`,children:[(0,p.jsx)(`span`,{className:`brand-mark`,children:`rb`}),` Re-prime`]}),(0,p.jsxs)(`div`,{className:`nav-links`,children:[(0,p.jsx)(`a`,{href:`#workflow`,children:`Workflow`}),(0,p.jsx)(`a`,{href:`#patterns`,children:`Patterns`}),(0,p.jsx)(`a`,{href:`#ruby`,children:`Ruby`}),(0,p.jsx)(`a`,{href:`#complexity`,children:`Complexity`}),(0,p.jsx)(`a`,{href:`/algorithms/`,children:`Deep dives`}),(0,p.jsx)(`a`,{href:`/problems/`,children:`Problems`}),(0,p.jsx)(`a`,{href:`/flashcards/`,children:`Flashcards`}),(0,p.jsx)(`a`,{href:`/architecture/`,children:`Architecture`}),(0,p.jsx)(`a`,{href:`/ruby/`,children:`Glossary`})]}),(0,p.jsx)(_,{active:`home`,includeHomeSections:!0})]}),(0,p.jsxs)(`div`,{className:`hero-grid`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Ruby 3.2 coding interview refresher`}),(0,p.jsxs)(`h1`,{children:[`Get the patterns back`,(0,p.jsx)(`br`,{}),`into working memory.`]}),(0,p.jsx)(`p`,{className:`hero-copy`,children:`A compact field guide to recognizing LeetCode-shaped problems, choosing the right structure, and implementing cleanly in Ruby.`}),(0,p.jsxs)(`div`,{className:`hero-actions`,children:[(0,p.jsx)(`a`,{className:`primary-button`,href:`#patterns`,children:`Start with patterns`}),(0,p.jsxs)(`a`,{className:`text-button`,href:`#workflow`,children:[`Review the loop `,(0,p.jsx)(`span`,{children:`↓`})]})]})]}),(0,p.jsxs)(`div`,{className:`mental-model`,"aria-label":`Problem solving mental model`,children:[(0,p.jsx)(`p`,{className:`card-label`,children:`The interview loop`}),[[`01`,`Clarify`,`Inputs, outputs, constraints, edge cases`],[`02`,`Model`,`Brute force, then find repeated work`],[`03`,`Implement`,`Small helpers, explicit invariants`],[`04`,`Verify`,`Happy path, edges, complexity`]].map(([e,t,n])=>(0,p.jsxs)(`div`,{className:`loop-row`,children:[(0,p.jsx)(`span`,{children:e}),(0,p.jsx)(`strong`,{children:t}),(0,p.jsx)(`p`,{children:n})]},e))]})]})]}),(0,p.jsxs)(`section`,{className:`section workflow`,id:`workflow`,children:[(0,p.jsxs)(`div`,{className:`section-heading compact-heading`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Before touching the keyboard`}),(0,p.jsx)(`h2`,{children:`A repeatable solving workflow`})]}),(0,p.jsx)(`div`,{className:`workflow-grid`,children:[[`1`,`Restate`,`Say the contract in your own words. Ask about empty input, duplicates, ordering, mutation, bounds, and expected return when no answer exists.`],[`2`,`Example`,`Walk one normal case and one edge case by hand. Name the state that changes at every step.`],[`3`,`Brute force`,`Give the simplest correct approach and its complexity. This creates a correctness baseline.`],[`4`,`Find leverage`,`Look for sorting, fast membership, monotonicity, repeated subproblems, or a constrained frontier.`],[`5`,`State invariant`,`Say what remains true after every loop iteration or recursive call. Then code to preserve it.`],[`6`,`Test aloud`,`Trace tiny, empty, singleton, duplicate, boundary, and worst-shaped inputs. State time and space.`]].map(([e,t,n])=>(0,p.jsxs)(`article`,{className:`workflow-card`,children:[(0,p.jsx)(`span`,{children:e}),(0,p.jsx)(`h3`,{children:t}),(0,p.jsx)(`p`,{children:n})]},e))}),(0,p.jsxs)(`aside`,{className:`interview-script`,children:[(0,p.jsx)(`span`,{children:`Useful narration`}),(0,p.jsx)(`p`,{children:`“I’ll start with the simplest correct version, then use the constraints to decide whether optimization is necessary.”`})]})]}),(0,p.jsxs)(`section`,{className:`section pattern-section`,id:`patterns`,children:[(0,p.jsxs)(`div`,{className:`section-heading pattern-heading`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`kicker`,children:`The core toolbox`}),(0,p.jsx)(`h2`,{children:`Patterns & data structures`})]}),(0,p.jsxs)(`label`,{className:`search-box`,children:[(0,p.jsx)(`span`,{children:`⌕`}),(0,p.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Search: shortest path, top k, substring…`})]})]}),(0,p.jsxs)(`div`,{className:`topic-layout`,children:[(0,p.jsxs)(`aside`,{className:`topic-index`,children:[(0,p.jsx)(`p`,{children:`Quick jump`}),b.map(e=>(0,p.jsx)(`a`,{href:`#${e.id}`,children:e.title},e.id))]}),(0,p.jsxs)(`div`,{className:`topics`,children:[i.map((e,t)=>(0,p.jsxs)(`article`,{className:`topic-card`,id:e.id,children:[(0,p.jsxs)(`div`,{className:`topic-topline`,children:[(0,p.jsx)(`span`,{className:`topic-number`,children:String(t+1).padStart(2,`0`)}),(0,p.jsxs)(`label`,{className:`review-check`,children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:n.includes(e.id),onChange:()=>a(e.id)}),(0,p.jsx)(`span`,{children:n.includes(e.id)?`Reviewed`:`Mark reviewed`})]})]}),(0,p.jsx)(`p`,{className:`eyebrow`,children:e.eyebrow}),(0,p.jsx)(`h3`,{children:e.title}),(0,p.jsxs)(`div`,{className:`recognize`,children:[(0,p.jsx)(`strong`,{children:`Reach for it when`}),(0,p.jsx)(`p`,{children:e.when})]}),(0,p.jsx)(`p`,{className:`complexity-line`,children:e.complexity}),(0,p.jsx)(ee,{code:e.code}),(0,p.jsx)(`ul`,{children:e.notes.map(e=>(0,p.jsx)(`li`,{children:e},e))})]},e.id)),i.length===0&&(0,p.jsx)(`div`,{className:`no-results`,children:`No matching topic. Try a broader problem cue.`})]})]})]}),(0,p.jsxs)(`section`,{className:`section ruby-section`,id:`ruby`,children:[(0,p.jsxs)(`div`,{className:`section-heading compact-heading`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Language fluency`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h2`,{children:`Ruby moves worth memorizing`}),(0,p.jsxs)(`p`,{className:`version-note`,children:[(0,p.jsx)(`strong`,{children:`CoderPad baseline: Ruby 3.2.`}),` Modern 3.x syntax is available, but prefer the clearest form you can explain while coding.`]}),(0,p.jsxs)(`p`,{className:`version-note`,children:[`This site uses one consistent Ruby vocabulary. `,(0,p.jsx)(`a`,{href:`/ruby/`,children:(0,p.jsx)(`strong`,{children:`See the Ruby glossary →`})})]})]})]}),(0,p.jsx)(`div`,{className:`shortcut-grid`,children:x.map(([e,t])=>(0,p.jsxs)(`div`,{className:`shortcut`,children:[(0,p.jsx)(`span`,{children:e}),(0,p.jsx)(`code`,{children:t})]},e))}),(0,p.jsxs)(`div`,{className:`gotchas`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`card-label`,children:`Performance gotchas`}),(0,p.jsx)(`h3`,{children:`Ruby-specific traps`})]}),(0,p.jsxs)(`ul`,{children:[(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`Array#shift is O(n).`}),` For BFS, keep a head index instead.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`String indexing returns strings`}),` in modern Ruby: `,(0,p.jsx)(`code`,{children:`s[i]`}),`.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`sort_by allocates keys.`}),` It’s wonderfully readable; still call it O(n log n).`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`Deep recursion can overflow.`}),` Prefer iterative DFS on very deep inputs.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`Mutating while iterating can skip items.`}),` Partition into new arrays or delete afterward.`]})]})]})]}),(0,p.jsxs)(`section`,{className:`section complexity-section`,id:`complexity`,children:[(0,p.jsxs)(`div`,{className:`section-heading compact-heading`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Constraint → target complexity`}),(0,p.jsx)(`h2`,{children:`Complexity at a glance`})]}),(0,p.jsx)(`div`,{className:`complexity-table`,role:`table`,"aria-label":`Input size and likely complexity`,children:[[`n ≤ 20`,`O(2ⁿ), O(n!)`,`Backtracking, subset search`],[`n ≤ 100`,`O(n³) may pass`,`Small DP, Floyd–Warshall`],[`n ≤ 1,000`,`O(n²)`,`Pair comparisons, 2D DP`],[`n ≤ 100,000`,`O(n log n)`,`Sorting, heap, divide & conquer`],[`n ≤ 1,000,000`,`O(n)`,`Hashing, two pointers, linear scan`],[`Huge answer range`,`O(log range)`,`Binary search on answer`]].map(([e,t,n])=>(0,p.jsxs)(`div`,{className:`complexity-row`,role:`row`,children:[(0,p.jsx)(`strong`,{role:`cell`,children:e}),(0,p.jsx)(`span`,{role:`cell`,children:t}),(0,p.jsx)(`p`,{role:`cell`,children:n})]},e))}),(0,p.jsx)(`div`,{className:`complexity-note`,children:`These are interview heuristics, not guarantees. Constants, language overhead, and input shape matter.`})]}),(0,p.jsxs)(`section`,{className:`section final-checklist`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Last five minutes`}),(0,p.jsx)(`h2`,{children:`Don’t lose points after solving it.`})]}),(0,p.jsx)(`div`,{className:`checklist-grid`,children:[`Empty input`,`One item`,`Duplicates`,`Exact boundary`,`No solution`,`All same`,`Already sorted`,`Reverse sorted`,`Overflow / infinity`,`Mutation contract`,`Time complexity`,`Space complexity`].map(e=>(0,p.jsxs)(`label`,{children:[(0,p.jsx)(`input`,{type:`checkbox`}),` `,(0,p.jsx)(`span`,{children:e})]},e))})]}),(0,p.jsxs)(`footer`,{children:[(0,p.jsxs)(`a`,{className:`brand`,href:`#top`,children:[(0,p.jsx)(`span`,{className:`brand-mark`,children:`rb`}),` Re-prime`]}),(0,p.jsx)(`p`,{children:`Built for practice, not perfection. Get one clean rep today.`}),(0,p.jsx)(`a`,{href:`#top`,children:`Back to top ↑`})]})]})}var C=[{id:`arrays-hashes`,title:`Arrays, Hashes & Sets`,eyebrow:`The default toolbox`,summary:`Trade memory for fast membership, counting, grouping, and complement lookup.`,time:`Hash lookup/insert: O(1) average · Array scan: O(n)`,space:`Usually O(n) for stored keys`,mentalModel:`As you scan, store exactly the fact your future self will need. A hash turns “have I seen X?” from another scan into one lookup.`,whenToUse:[`You need fast membership or deduplication.`,`The answer depends on frequencies or grouping by a key.`,`You can derive the needed complement from the current value.`,`Input order matters, so sorting would destroy useful information.`],whenNotToUse:[`Keys need to be processed in sorted order—consider sorting or a tree-like structure.`,`Memory must remain O(1) and the input has exploitable ordering.`,`You repeatedly need the smallest or largest item—a heap may fit better.`],steps:[`Name the lookup you wish were O(1).`,`Choose the key and value deliberately: value→index, item→count, or group→members.`,`Decide whether to check before or after inserting the current item.`,`Test duplicates and missing keys.`],pitfalls:[`Use hash.key?(key) when nil could be a stored value.`,`Hash.new([]) shares one array across keys; use Hash.new { |h, k| h[k] = [] }.`,`Ruby 3.2 autoloads Set, so no require is needed.`],examples:[{title:`Two Sum`,difficulty:`Easy`,prompt:`Return two indices whose values add to a target.`,signal:`Each value has a computable complement, and you need original indices.`,outline:`Scan once; map each seen value to its index; look up target - value before inserting.`},{title:`Group Anagrams`,difficulty:`Medium`,prompt:`Group words containing the same character counts.`,signal:`Many records must be grouped by a canonical identity.`,outline:`Use sorted characters or a 26-count vector as the hash key, then append each word.`}],code:`def two_sum(nums, target)
  seen = {}

  nums.each_with_index do |num, index|
    complement = target - num
    return [seen[complement], index] if seen.key?(complement)
    seen[num] = index
  end

  []
end`},{id:`two-pointers`,title:`Two Pointers`,eyebrow:`Shrink the search space`,summary:`Move two indexes according to a monotonic fact instead of trying every pair.`,time:`Usually O(n)`,space:`Usually O(1)`,mentalModel:`Every pointer move must safely eliminate possibilities. Explain why the discarded region cannot contain the answer.`,whenToUse:[`The input is sorted or can be sorted safely.`,`You are comparing opposite ends, finding pairs, or testing symmetry.`,`A read pointer and write pointer can compact data in place.`,`You need a cycle/middle with slow and fast pointers.`],whenNotToUse:[`There is no ordering or invariant that makes a pointer move safe.`,`You need arbitrary membership rather than a directional scan—use a hash.`,`The target concerns a variable contiguous range with maintained state—use a sliding window.`],steps:[`Choose pointer meanings, not just names.`,`Write the loop boundary explicitly.`,`Evaluate the current state.`,`Move exactly the pointer justified by the invariant.`],pitfalls:[`Using two pointers on unsorted pair-sum input without preserving indices.`,`Off-by-one errors in left < right versus left <= right.`,`Moving both pointers after a mismatch and skipping candidates.`],examples:[{title:`Container With Most Water`,difficulty:`Medium`,prompt:`Choose two lines that hold the most water.`,signal:`Area is limited by the shorter edge, creating a safe pointer move.`,outline:`Measure both ends; move the shorter line because moving the taller one cannot improve the limiting height.`},{title:`Remove Duplicates`,difficulty:`Easy`,prompt:`Compact a sorted array in place.`,signal:`A read pointer discovers values while a write pointer owns the valid prefix.`,outline:`Advance read; copy only new values to write; return the prefix length.`}],code:`def pair_sum?(nums, target)
  left = 0
  right = nums.length - 1

  while left < right
    sum = nums[left] + nums[right]
    return true if sum == target

    sum < target ? left += 1 : right -= 1
  end

  false
end`},{id:`sliding-window`,title:`Sliding Window`,eyebrow:`Contiguous ranges`,summary:`Reuse information between overlapping subarrays or substrings instead of recomputing each range.`,time:`Usually O(n)`,space:`O(1) to O(k), depending on tracked state`,mentalModel:`Right expands the candidate window; left removes just enough history to restore a clearly stated validity rule.`,whenToUse:[`The problem asks for a longest, shortest, count, or best contiguous range.`,`Adding/removing one endpoint lets you update state cheaply.`,`Validity changes monotonically as the window grows or shrinks.`,`A fixed-size rolling window avoids repeated sums.`],whenNotToUse:[`Elements can be selected non-contiguously.`,`Removing the left element cannot update the state efficiently.`,`Negative numbers destroy the monotonic rule behind a variable-sum window; prefix sums may be better.`],steps:[`Define whether endpoints are inclusive.`,`Add the right item to state.`,`Shrink left while invalid—or while you can improve a minimum window.`,`Update the answer at the correct moment.`],pitfalls:[`Forgetting right - left + 1 with inclusive endpoints.`,`Shrinking only once when validity may require multiple removals.`,`Updating the best answer before the window is valid.`],examples:[{title:`Longest Substring Without Repeating Characters`,difficulty:`Medium`,prompt:`Find the longest substring with unique characters.`,signal:`Contiguous + longest + a validity condition maintained by recent positions.`,outline:`Track each character's last index; jump left beyond a duplicate without moving left backward.`},{title:`Minimum Size Subarray Sum`,difficulty:`Medium`,prompt:`Find the shortest positive-number subarray reaching a target sum.`,signal:`Positive values make sum monotonic as endpoints move.`,outline:`Expand until valid, then repeatedly shrink and record shorter valid windows.`}],code:`def longest_unique(text)
  last_seen = {}
  left = 0
  best = 0

  text.each_char.with_index do |char, right|
    if last_seen.key?(char) && last_seen[char] >= left
      left = last_seen[char] + 1
    end

    last_seen[char] = right
    best = [best, right - left + 1].max
  end

  best
end`},{id:`stack`,title:`Stacks & Monotonic Stacks`,eyebrow:`Last in, first out`,summary:`Keep unresolved work whose most recent item must be handled first.`,time:`Append/pop O(1) · Monotonic scans O(n)`,space:`O(n)`,mentalModel:`The stack holds unfinished context. A monotonic stack additionally discards candidates that can never beat the current item.`,whenToUse:[`Input contains nested or paired delimiters.`,`You need undo, expression evaluation, or recursive behavior iteratively.`,`The question asks for next greater/smaller or nearest boundary.`,`A new value resolves prior candidates in reverse arrival order.`],whenNotToUse:[`Oldest work must be processed first—use a queue.`,`You need the globally smallest item rather than the newest one—use a heap.`,`There is no unresolved context to retain.`],steps:[`State exactly what one stack element represents.`,`Decide what condition resolves/pops the top.`,`Process all resolvable items in a while loop.`,`Append the current item if it remains useful.`],pitfalls:[`Popping an empty stack without deciding what that means.`,`Storing values when indexes are needed for distances.`,`Assuming a monotonic stack is O(n²); each item is appended and popped at most once.`],examples:[{title:`Valid Parentheses`,difficulty:`Easy`,prompt:`Validate nested bracket pairs.`,signal:`The latest unmatched opener must match the next closer.`,outline:`Append openers; on a closer, pop and compare; require an empty stack at the end.`},{title:`Daily Temperatures`,difficulty:`Medium`,prompt:`For each day, find the wait until a warmer day.`,signal:`A new high value resolves a run of earlier lower values.`,outline:`Keep indexes with decreasing temperatures; pop while current is warmer and write distances.`}],code:`def valid_parentheses?(text)
  opener_for = { ")" => "(", "]" => "[", "}" => "{" }
  stack = []

  text.each_char do |char|
    if opener_for.value?(char)
      stack.append(char)
    elsif stack.pop != opener_for[char]
      return false
    end
  end

  stack.empty?
end`},{id:`queue-bfs`,title:`Queues & Breadth-First Search`,eyebrow:`Nearest first`,summary:`Explore states in increasing number of steps by processing the oldest frontier first.`,time:`O(V + E)`,space:`O(V)`,mentalModel:`The queue is a wavefront. The first time BFS reaches a state in an unweighted graph, it has found a shortest path to it.`,whenToUse:[`You need shortest steps in an unweighted graph or grid.`,`The answer is organized by levels or distance.`,`A process spreads simultaneously from one or more sources.`,`You need the shallowest tree result.`],whenNotToUse:[`Edges have different costs—consider Dijkstra's algorithm.`,`You need all paths or deep backtracking choices.`,`Memory is tight and any reachable solution suffices—DFS may hold a smaller frontier.`],steps:[`Enqueue start state(s) and mark them seen immediately.`,`Read queue[head] and increment head; avoid Array#shift.`,`Generate valid unseen neighbors.`,`Attach distance or process one level at a time.`],pitfalls:[`Marking seen when dequeued creates duplicate work.`,`Using Array#shift repeatedly in Ruby, which is O(n).`,`Forgetting that BFS is shortest only when edge costs are equal.`],examples:[{title:`Rotting Oranges`,difficulty:`Medium`,prompt:`Find minutes until a process spreads through a grid.`,signal:`Multiple sources spread one edge per time unit.`,outline:`Enqueue every rotten cell at time zero, then run multi-source BFS and track remaining fresh cells.`},{title:`Binary Tree Level Order`,difficulty:`Medium`,prompt:`Return tree values grouped by depth.`,signal:`Output is explicitly organized by levels.`,outline:`Capture current queue length, process exactly that many nodes, then begin the next level.`}],code:`def shortest_steps(graph, start, target)
  queue = [[start, 0]]
  head = 0
  seen = Set.new([start])

  while head < queue.length
    node, distance = queue[head]
    head += 1
    return distance if node == target

    graph.fetch(node, []).each do |neighbor|
      next if seen.include?(neighbor)
      seen.add(neighbor)
      queue.append([neighbor, distance + 1])
    end
  end

  -1
end`},{id:`linked-lists`,title:`Linked Lists`,eyebrow:`Rewire, don't shift`,summary:`Manipulate relationships between nodes while preserving the part of the list you have not processed.`,time:`Search/access O(n) · Known-node update O(1)`,space:`Usually O(1)`,mentalModel:`Before changing a pointer, save any link you still need. The processed prefix and unprocessed suffix should each have a clear owner.`,whenToUse:[`The problem gives node references rather than array indexes.`,`You must reverse, splice, merge, or detect a cycle in place.`,`Slow/fast movement reveals a middle or cycle.`,`A sentinel node can remove head-specific branches.`],whenNotToUse:[`You need random indexed access.`,`The data is naturally contiguous and shifting cost is irrelevant.`,`Converting to an array would violate required space bounds or dodge the tested skill.`],steps:[`Draw three nodes and arrows.`,`Save the next node before overwriting a link.`,`Perform one local rewire.`,`Advance pointers and restate the invariant.`],pitfalls:[`Losing the unprocessed suffix during reversal.`,`Returning the old head after reversal.`,`Dereferencing fast.next without guarding nil.`],examples:[{title:`Reverse Linked List`,difficulty:`Easy`,prompt:`Reverse links in place.`,signal:`Canonical pointer-rewiring problem.`,outline:`Carry previous/current/next; redirect one edge per iteration; return previous.`},{title:`Linked List Cycle`,difficulty:`Easy`,prompt:`Determine whether next pointers form a cycle.`,signal:`O(1) space rules out a seen set.`,outline:`Move slow one step and fast two; equal object identity implies a cycle.`}],code:`ListNode = Struct.new(:val, :next)

def reverse(head)
  previous = nil
  current = head

  while current
    following = current.next
    current.next = previous
    previous = current
    current = following
  end

  previous
end`},{id:`binary-search`,title:`Binary Search`,eyebrow:`Monotonic decisions`,summary:`Halve a sorted input or answer space using a predicate that changes direction only once.`,time:`O(log n) or O(log answer-range)`,space:`O(1) iteratively`,mentalModel:`You are not searching for a value so much as a boundary: the first true, last false, first ≥ target, or minimum feasible answer.`,whenToUse:[`Input is sorted and supports indexed access.`,`A yes/no predicate is monotonic across candidate answers.`,`You need a boundary, insertion position, or minimum feasible capacity.`,`The answer range is huge but checking one candidate is cheap.`],whenNotToUse:[`The predicate can flip back and forth.`,`The collection is a linked list with O(n) midpoint access.`,`A single linear scan is already required for validation and constraints are small.`],steps:[`Define the search interval and whether bounds are inclusive.`,`Write what remains possible after each branch.`,`Choose midpoint without bias surprises.`,`Verify termination on zero, one, and two candidates.`],pitfalls:[`Mixing templates mid-solution.`,`Returning mid rather than the converged boundary.`,`Applying binary search on answer without proving feasibility is monotonic.`],examples:[{title:`Search Insert Position`,difficulty:`Easy`,prompt:`Find where a target exists or should be inserted.`,signal:`You need the first value greater than or equal to target.`,outline:`Maintain a closed candidate range for the first true predicate nums[i] >= target.`},{title:`Koko Eating Bananas`,difficulty:`Medium`,prompt:`Find the minimum speed that finishes work by a deadline.`,signal:`Higher speed can never make feasibility worse.`,outline:`Binary-search speed; compute total rounded-up hours as the feasibility check.`}],code:`def first_true(left, right)
  while left < right
    mid = left + (right - left) / 2

    if yield(mid)
      right = mid
    else
      left = mid + 1
    end
  end

  left
end`},{id:`trees`,title:`Trees: DFS & BFS`,eyebrow:`Recursive structure`,summary:`Solve a node by combining answers from smaller subtrees or by visiting the tree level by level.`,time:`Usually O(n)`,space:`O(height) DFS · O(width) BFS`,mentalModel:`For recursion, finish the sentence: “This function returns ___ for the subtree rooted at node.” That return contract drives the code.`,whenToUse:[`The input is hierarchical or explicitly a tree.`,`The answer decomposes into child-subtree answers.`,`You need paths, depths, ancestors, or traversal order.`,`BST ordering can eliminate a branch.`],whenNotToUse:[`The graph may contain cycles unless you also track visited nodes.`,`Recursion depth may be enormous in Ruby—use an explicit stack.`,`The problem is really about arbitrary dependencies, not parent/child hierarchy.`],steps:[`Define the nil/base answer.`,`Define the return value for one node.`,`Recursively obtain child answers.`,`Combine them and return—or carry path state carefully.`],pitfalls:[`Confusing node count with edge count in depth.`,`Sharing one mutable path across recursive branches without undoing.`,`Using BST assumptions on an ordinary binary tree.`],examples:[{title:`Maximum Depth`,difficulty:`Easy`,prompt:`Return the deepest root-to-leaf node count.`,signal:`Parent answer is one plus the best child answer.`,outline:`Return zero for nil; otherwise one plus max(left depth, right depth).`},{title:`Lowest Common Ancestor`,difficulty:`Medium`,prompt:`Find the deepest node containing both targets below it.`,signal:`Information from left and right subtrees must be combined at their meeting point.`,outline:`Return a target when found; if both children return non-nil, current is the LCA.`}],code:`TreeNode = Struct.new(:val, :left, :right)

def max_depth(node)
  return 0 unless node

  left = max_depth(node.left)
  right = max_depth(node.right)
  1 + [left, right].max
end`},{id:`graphs`,title:`Graphs & Topological Sort`,eyebrow:`Entities plus relationships`,summary:`Model arbitrary relationships explicitly, then traverse, order, or connect them.`,time:`Traversal O(V + E)`,space:`O(V + E) adjacency list`,mentalModel:`First identify nodes and edges. Then ask whether the problem is reachability, shortest path, components, ordering, or weighted optimization.`,whenToUse:[`The data describes relationships, routes, dependencies, or a grid.`,`You need connected components or reachability.`,`Prerequisites imply a directed acyclic ordering.`,`The same entity can have multiple parents or cycles.`],whenNotToUse:[`The hierarchy guarantees one parent and no cycles—a tree framing is simpler.`,`You need weighted shortest paths; plain BFS is insufficient.`,`The input is dense enough that an adjacency matrix is intentionally better.`],steps:[`Define node identity and edge direction.`,`Build an adjacency list.`,`Choose BFS, DFS, or topological sort based on the question.`,`Track visited state with the right lifecycle.`],pitfalls:[`Reversing prerequisite edge direction.`,`Using only seen/not-seen for directed cycle detection; DFS needs visiting and visited.`,`Counting V but forgetting E in complexity.`],examples:[{title:`Number of Islands`,difficulty:`Medium`,prompt:`Count connected regions in a grid.`,signal:`Each land cell is a node with four possible edges.`,outline:`Scan cells; each unseen land cell starts a DFS/BFS that marks one component.`},{title:`Course Schedule`,difficulty:`Medium`,prompt:`Determine whether prerequisites permit completion.`,signal:`Directed dependencies require cycle detection or topological ordering.`,outline:`Use indegrees; repeatedly remove zero-indegree courses; processed count below n means a cycle.`}],code:`def topological_order(n, edges)
  graph = Array.new(n) { [] }
  indegree = Array.new(n, 0)

  edges.each do |from, to|
    graph[from].append(to)
    indegree[to] += 1
  end

  queue = (0...n).filter { |node| indegree[node].zero? }
  head = 0
  order = []

  while head < queue.length
    node = queue[head]
    head += 1
    order.append(node)

    graph[node].each do |neighbor|
      indegree[neighbor] -= 1
      queue.append(neighbor) if indegree[neighbor].zero?
    end
  end

  order.length == n ? order : []
end`},{id:`heap`,title:`Heap / Priority Queue`,eyebrow:`Repeated best candidate`,summary:`Keep the minimum or maximum immediately available without globally sorting after every update.`,time:`Peek O(1) · Insert/remove O(log n) · Build O(n)`,space:`O(n)`,mentalModel:`A heap is partially ordered: every parent beats its children, so the root is best. Nothing promises the rest of the array is sorted.`,whenToUse:[`You repeatedly need the smallest/largest item as data changes.`,`You need top K without sorting every item.`,`You are scheduling by priority or merging sorted streams.`,`A best-first frontier drives the algorithm.`],whenNotToUse:[`You need all items fully sorted once—sort directly.`,`You need fast lookup/removal of arbitrary items without extra indexing.`,`You only need a running min/max scalar and never remove it.`],steps:[`Define a comparison key, including deterministic tie-breaks.`,`Insert by appending and sifting up.`,`Remove root by moving the final element to index zero.`,`Sift down through the better child.`],pitfalls:[`Ruby 3.2 has no built-in general-purpose heap.`,`Swapping with the wrong child during sift-down.`,`Forgetting a sequence tie-break when stable order matters.`],examples:[{title:`K Closest Points`,difficulty:`Medium`,prompt:`Return the K points nearest the origin.`,signal:`Only K best candidates matter.`,outline:`Maintain a size-K max-heap of distances, or heapify all points and pop K.`},{title:`Merge K Sorted Lists`,difficulty:`Medium`,prompt:`Merge multiple sorted linked lists.`,signal:`At every step, only the current head from each stream can be globally smallest.`,outline:`Heap the non-nil heads; pop one, append it, and insert its successor.`}],code:`def heap_insert(heap, item)
  heap.append(item)
  index = heap.length - 1

  while index > 0
    parent = (index - 1) / 2
    break if heap[parent] <= heap[index]

    heap[parent], heap[index] = heap[index], heap[parent]
    index = parent
  end
end

# parent: (i - 1) / 2
# left:   2 * i + 1
# right:  2 * i + 2`},{id:`intervals`,title:`Intervals & Sweep Lines`,eyebrow:`Sort, then sweep`,summary:`Turn two-dimensional ranges into a predictable left-to-right event sequence.`,time:`Usually O(n log n)`,space:`O(n) output or events`,mentalModel:`Sorting exposes which interval can interact next. During the sweep, retain only the active summary you still need.`,whenToUse:[`The input contains start/end ranges or schedules.`,`You need merge, overlap, room count, or simultaneous activity.`,`Sorting by one endpoint reveals local decisions.`,`Events can be represented as +1 at start and -1 at end.`],whenNotToUse:[`Intervals arrive online and need dynamic queries—consider a heap or interval tree.`,`The ranges are discrete and tiny enough for direct marking.`,`You need arbitrary geometric intersections beyond one dimension.`],steps:[`Clarify whether touching endpoints overlap.`,`Choose a sorting key.`,`Compare the next interval with the active/last merged interval.`,`Merge, count, or expire active work.`],pitfalls:[`Mutating caller input with sort! unexpectedly.`,`Wrong tie ordering for starts and ends at the same timestamp.`,`Comparing against the original end instead of the extended merged end.`],examples:[{title:`Merge Intervals`,difficulty:`Medium`,prompt:`Combine overlapping ranges.`,signal:`After sorting by start, only the last merged range can overlap next.`,outline:`Append when disjoint; otherwise extend the last end with max.`},{title:`Meeting Rooms II`,difficulty:`Medium`,prompt:`Find the maximum simultaneous meetings.`,signal:`Starts allocate rooms and ends release them.`,outline:`Sort starts and ends separately; sweep with two pointers and track active/max.`}],code:`def merge_intervals(intervals)
  sorted = intervals.sort_by(&:first)
  merged = []

  sorted.each do |start_at, end_at|
    if merged.empty? || start_at > merged[-1][1]
      merged.append([start_at, end_at])
    else
      merged[-1][1] = [merged[-1][1], end_at].max
    end
  end

  merged
end`},{id:`backtracking`,title:`Backtracking`,eyebrow:`Choose → explore → undo`,summary:`Systematically enumerate a decision tree while pruning partial choices that cannot succeed.`,time:`Often O(branching^depth)`,space:`O(depth), excluding output`,mentalModel:`The path is a mutable draft. Each recursive call owns one decision point: choose, recurse, then restore the draft exactly.`,whenToUse:[`You must generate combinations, permutations, subsets, or paths.`,`Constraints allow pruning invalid partial solutions.`,`The solution is naturally a sequence of choices.`,`n is small enough for exponential work.`],whenNotToUse:[`You only need a count or optimum and subproblems repeat heavily—DP may be better.`,`n is too large for the branching factor.`,`A greedy or graph traversal invariant removes the need to enumerate choices.`],steps:[`Define the path and candidate choices.`,`Define the completion/base case.`,`Choose one candidate and mutate state.`,`Recurse, undo exactly, and prune early.`],pitfalls:[`Saving path instead of path.dup.`,`Forgetting the undo step.`,`Generating duplicates when input contains repeated values.`],examples:[{title:`Subsets`,difficulty:`Medium`,prompt:`Return every subset of distinct values.`,signal:`Every item is an include/skip decision and output is exponential.`,outline:`Record each current path; recursively choose later indexes; pop after returning.`},{title:`Combination Sum`,difficulty:`Medium`,prompt:`Find combinations reaching a target.`,signal:`Enumerate choices but prune when remaining sum is negative.`,outline:`Carry remaining target and start index; reuse or advance candidates according to rules.`}],code:`def subsets(nums)
  result = []
  path = []

  search = lambda do |start|
    result.append(path.dup)

    (start...nums.length).each do |index|
      path.append(nums[index])
      search.call(index + 1)
      path.pop
    end
  end

  search.call(0)
  result
end`},{id:`dynamic-programming`,title:`Dynamic Programming`,eyebrow:`Cache repeated subproblems`,summary:`Define a minimal state whose answer can be built from smaller states, then compute each state once.`,time:`Number of states × transitions per state`,space:`Number of stored states; sometimes compressible`,mentalModel:`DP is controlled brute force. The hard part is not the table—it is choosing state that contains all necessary history and nothing else.`,whenToUse:[`The problem asks for an optimum, count, or feasibility.`,`Recursive branches revisit the same state.`,`The future depends on a compact summary of the past.`,`There is an acyclic order in which states can be solved.`],whenNotToUse:[`Subproblems do not overlap—divide and conquer may suffice.`,`A greedy exchange argument proves one local choice is always safe.`,`The proposed state space is too large for constraints.`],steps:[`Write the state definition in words.`,`List choices/transitions.`,`Define base cases.`,`Choose memoized recursion or bottom-up order, then derive complexity from state count.`],pitfalls:[`Using memo[state] ||= when false or nil is a valid cached answer.`,`Adding unnecessary dimensions to state.`,`Compressing storage before the recurrence is correct.`],examples:[{title:`House Robber`,difficulty:`Medium`,prompt:`Maximize non-adjacent selected values.`,signal:`At each index, take it plus i-2 or skip it and keep i-1.`,outline:`Track best through previous one and previous two positions; update simultaneously.`},{title:`Coin Change`,difficulty:`Medium`,prompt:`Find the minimum number of coins for an amount.`,signal:`Each amount reuses answers for smaller amounts.`,outline:`dp[a] is minimum coins for a; transition from dp[a - coin] + 1.`}],code:`def rob(nums)
  previous_two = 0
  previous_one = 0

  nums.each do |amount|
    current = [previous_one, previous_two + amount].max
    previous_two, previous_one = previous_one, current
  end

  previous_one
end`},{id:`union-find`,title:`Union-Find`,eyebrow:`Dynamic connectivity`,summary:`Track which items belong to the same group as new connections are added, without searching the whole graph each time.`,time:`Near O(1) amortized`,space:`O(n)`,mentalModel:`Every member points toward a representative root. Path compression flattens searches; union by size keeps trees shallow.`,primer:{title:`Start with separate groups, then connect them.`,intro:`Imagine four people who begin in separate friend groups. Union joins two groups. Find answers which group a person belongs to. If two people have the same group representative, they are connected—even if they were linked through other people.`,walkthrough:[{action:`Start`,state:`{A}  {B}  {C}  {D}`,explanation:`Four items, so there are four separate groups.`},{action:`union(A, B)`,state:`{A, B}  {C}  {D}`,explanation:`A and B now share one group.`},{action:`union(B, C)`,state:`{A, B, C}  {D}`,explanation:`Joining B and C also connects A to C through B.`},{action:`find(A) == find(C)`,state:`true`,explanation:`Both searches reach the same representative, so A and C are connected.`}],terms:[{term:`Disjoint`,definition:`The groups do not overlap: each item belongs to exactly one group.`},{term:`Component / set`,definition:`One connected group of items.`},{term:`Representative / root`,definition:`The one canonical item used as the name of a group.`},{term:`find(item)`,definition:`Follow parent links to return the item's group representative.`},{term:`union(a, b)`,definition:`Join the two groups containing a and b.`},{term:`Path compression`,definition:`During find, point visited items closer to the root so later searches are faster.`},{term:`Union by size`,definition:`Attach the smaller group under the larger group's root so the parent tree stays shallow.`},{term:`Nearly constant amortized`,definition:`A long sequence of operations averages extremely close to O(1) per operation, even though an individual operation is not guaranteed to be constant.`}]},whenToUse:[`Edges arrive and you repeatedly ask whether two nodes are connected.`,`You need to merge components dynamically.`,`A failed union identifies a redundant/cycle-forming edge.`,`Kruskal-style minimum spanning tree processing.`],whenNotToUse:[`You need the actual path between nodes.`,`Edges are removed dynamically.`,`The graph is static and one DFS/BFS answers all connectivity questions simply.`],steps:[`Initialize each node as its own parent.`,`Find the representative with path compression.`,`Union representatives, attaching smaller tree to larger.`,`Optionally track component count or size.`],pitfalls:[`Unioning raw nodes instead of their roots.`,`Implementing recursive find carelessly if recursion depth can grow.`,`Assuming union-find handles directed connectivity.`],examples:[{title:`Redundant Connection`,difficulty:`Medium`,prompt:`Find the edge that creates a cycle in an undirected graph.`,signal:`An edge whose endpoints are already connected is redundant.`,outline:`Union edges in order; the first union returning false is the answer.`},{title:`Accounts Merge`,difficulty:`Medium`,prompt:`Merge records sharing identifiers.`,signal:`Identifiers create transitive groups.`,outline:`Union account indexes that share an email, then group emails by representative.`}],code:`class UnionFind
  def initialize(n)
    @parent = (0...n).to_a
    @size = Array.new(n, 1)
  end

  def find(node)
    while node != @parent[node]
      @parent[node] = @parent[@parent[node]]
      node = @parent[node]
    end
    node
  end

  def union(a, b)
    root_a = find(a)
    root_b = find(b)
    return false if root_a == root_b

    root_a, root_b = root_b, root_a if @size[root_a] < @size[root_b]
    @parent[root_b] = root_a
    @size[root_a] += @size[root_b]
    true
  end
end`},{id:`prefix-sums`,title:`Prefix Sums`,eyebrow:`Precompute range history`,summary:`Represent cumulative history so any contiguous range aggregate becomes a subtraction.`,time:`Build O(n) · Range sum O(1)`,space:`O(n), or O(1) running prefix`,mentalModel:`prefix[i] owns everything before i. Then range [left, right] is prefix[right + 1] - prefix[left].`,whenToUse:[`You need many range-sum queries.`,`A subarray property can be expressed through two cumulative states.`,`Negative numbers prevent a simple sliding window.`,`You need counts of subarrays with a target sum.`],whenNotToUse:[`The array changes frequently; a Fenwick/segment tree may be needed.`,`Only one simple total is requested.`,`The aggregate has no reversible combine/subtract operation.`],steps:[`Choose prefix[0] = identity.`,`Build n + 1 entries to avoid special cases.`,`Translate a range into two prefix indexes.`,`For target subarray counts, hash prior prefix frequencies.`],pitfalls:[`Off-by-one errors from unclear prefix meaning.`,`Using a sliding window for target sums when negatives exist.`,`Recording the current prefix before counting the complement, changing empty-range behavior.`],examples:[{title:`Range Sum Query`,difficulty:`Easy`,prompt:`Answer repeated inclusive range sums.`,signal:`Immutable input and many interval queries.`,outline:`Build a length n+1 prefix array; answer sum(left..right) with two reads.`},{title:`Subarray Sum Equals K`,difficulty:`Medium`,prompt:`Count subarrays summing to K.`,signal:`prefix[j] - prefix[i] = K, so prior prefix = current - K.`,outline:`Track frequency of each previous prefix; start with zero seen once.`}],code:`def count_subarrays(nums, target)
  frequencies = Hash.new(0)
  frequencies[0] = 1
  prefix = 0
  count = 0

  nums.each do |num|
    prefix += num
    count += frequencies[prefix - target]
    frequencies[prefix] += 1
  end

  count
end`},{id:`sorting-greedy`,title:`Sorting & Greedy`,eyebrow:`Create a safe local choice`,summary:`Sort to reveal structure, then repeatedly make a local choice that can be proven not to hurt the optimum.`,time:`Usually O(n log n)`,space:`Depends on sort and output`,mentalModel:`Greedy is not “take what looks best.” It needs an exchange argument: any optimal answer can adopt this choice without becoming worse.`,whenToUse:[`Sorting makes conflicts or dominance adjacent.`,`You can prove one earliest/smallest/largest choice leaves maximum freedom.`,`The question asks for maximum compatible activities or minimum resources.`,`A full optimal state history is unnecessary after each choice.`],whenNotToUse:[`Local choices can block a better global combination.`,`The proof depends on information discarded by the greedy step.`,`Repeated overlapping subproblems point to dynamic programming.`],steps:[`Choose the sorting key and explain why.`,`State the greedy choice.`,`Give a short exchange/stays-ahead argument.`,`Scan while maintaining only necessary state.`],pitfalls:[`Calling an intuitive heuristic greedy without proving it.`,`Sorting by the wrong endpoint.`,`Forgetting that sorting may lose original indexes.`],examples:[{title:`Non-overlapping Intervals`,difficulty:`Medium`,prompt:`Remove the fewest intervals to eliminate overlap.`,signal:`Keeping the interval that ends earliest leaves maximum room.`,outline:`Sort by end; greedily keep compatible intervals; removals = total - kept.`},{title:`Jump Game`,difficulty:`Medium`,prompt:`Determine whether the final index is reachable.`,signal:`Only the farthest reachable boundary matters.`,outline:`Scan while index is reachable; extend farthest; success once farthest reaches the end.`}],code:`def can_reach_end?(nums)
  farthest = 0

  nums.each_with_index do |jump, index|
    return false if index > farthest
    farthest = [farthest, index + jump].max
    return true if farthest >= nums.length - 1
  end

  true
end`}],te=Object.fromEntries(C.map(e=>[e.id,e])),ne=[{minutes:`0–5`,title:`Clarify`,detail:`Users, core actions, scale, consistency, latency, and what is explicitly out of scope.`},{minutes:`5–10`,title:`Estimate`,detail:`Requests/sec, storage growth, read/write ratio, object sizes, and peak multiplier.`},{minutes:`10–18`,title:`Contract`,detail:`Core APIs, data model, identifiers, pagination, idempotency, and authorization boundary.`},{minutes:`18–35`,title:`High-level design`,detail:`Draw the critical read and write paths. Make data ownership and async boundaries explicit.`},{minutes:`35–50`,title:`Deep dive`,detail:`Follow interviewer interest into scale, consistency, hot spots, failure recovery, or one difficult component.`},{minutes:`50–60`,title:`Pressure test`,detail:`Failures, observability, security, cost, rollout, and how the design evolves at 10× scale.`}],re=[{id:`social-feed`,title:`Social Feed`,subtitle:`Twitter / Instagram-style timelines`,prompt:`Design a service where users publish posts and read a ranked or chronological home feed.`,priorities:[`Fast feed reads`,`High write fan-out tolerance`,`Freshness`,`Celebrity hot spots`,`Eventual consistency is usually acceptable`],clarify:[`Chronological or ranked feed?`,`Following limit and expected follower distribution?`,`Text only or media references?`,`How fresh must a new post appear?`,`Do deletes/blocks need immediate enforcement?`],scale:[`Estimate daily active users and feed opens per user.`,`Model posts/sec separately from feed reads/sec; reads usually dominate.`,`Call out skew: a tiny set of authors may have millions of followers.`,`Estimate feed-entry storage, not only post-body storage.`],api:[`POST /posts {body, media_ids, idempotency_key}`,`GET /feed?cursor=...&limit=...`,`PUT /follows/:user_id`,`DELETE /posts/:post_id`],data:[`Post(post_id, author_id, body, created_at, visibility)`,`Follow(follower_id, followee_id, created_at)`,`FeedEntry(user_id, rank/time, post_id)`,`Use opaque cursor pagination; offsets become unstable and expensive.`],flow:[`Write post durably and return its ID.`,`Publish a post-created event.`,`Fan-out workers insert feed entries for ordinary authors.`,`Feed reads merge precomputed entries with on-read posts from high-follower authors.`,`Hydrate post/author data and enforce current visibility before returning.`],components:[{name:`Post service`,purpose:`Own post lifecycle and visibility`,why:`Keeps the source of truth separate from derived feeds.`},{name:`Social graph store`,purpose:`Resolve followers/followees`,why:`Relationship access patterns differ from post storage.`},{name:`Event log + workers`,purpose:`Buffer and distribute fan-out work`,why:`A post should not synchronously update thousands of feeds.`},{name:`Feed store/cache`,purpose:`Serve ordered post IDs quickly`,why:`Precomputation trades write work for low read latency.`}],decisions:[{question:`When is a feed assembled?`,optionA:`Fan-out on write: fast reads, expensive writes.`,optionB:`Fan-out on read: cheap writes, expensive reads.`,guidance:`Use a hybrid: precompute normal authors; merge celebrity posts at read time.`},{question:`How fresh must feeds be?`,optionA:`Synchronous propagation for immediate visibility.`,optionB:`Async propagation for resilience and throughput.`,guidance:`Usually async within seconds; allow an author's own new post to be overlaid immediately.`}],failures:[{failure:`Fan-out workers lag`,response:`Track oldest event age; autoscale consumers; degrade to on-read merge for freshness.`},{failure:`Duplicate post event`,response:`Make FeedEntry insertion idempotent with a unique (user_id, post_id) key.`},{failure:`Post deleted after fan-out`,response:`Treat feed entries as references; enforce visibility during hydration and clean asynchronously.`},{failure:`Celebrity creates a hot partition`,response:`Avoid per-follower synchronous writes; partition work and use on-read merge.`}],depth:[`Ranking signals and model versioning`,`Block/privacy enforcement`,`Feed cache invalidation`,`Backfill after follow`,`Multi-region read locality`]},{id:`realtime-chat`,title:`Realtime Chat`,subtitle:`Slack-style channels and direct messages`,prompt:`Design persistent group chat with real-time delivery, history, presence, and multiple devices per user.`,priorities:[`Low delivery latency`,`Durable history`,`Per-conversation ordering`,`Offline catch-up`,`Connection management`],clarify:[`Direct messages, channels, or both?`,`Maximum room size?`,`Exactly what ordering is promised?`,`Read receipts, typing, presence, edits, attachments?`,`How long is history retained?`],scale:[`Estimate concurrently connected clients, not only requests/sec.`,`Separate durable messages from ephemeral presence/typing events.`,`Estimate messages/sec, average recipients, and bytes/message.`,`Model reconnect bursts after regional/network events.`],api:[`POST /conversations/:id/messages {client_message_id, body}`,`GET /conversations/:id/messages?before=cursor`,`WebSocket/SSE stream for delivery events`,`POST /conversations/:id/read_cursor`],data:[`Conversation(conversation_id, type, created_at)`,`Membership(conversation_id, user_id, role)`,`Message(conversation_id, sequence, message_id, sender_id, body)`,`ReadCursor(user_id, conversation_id, sequence)`],flow:[`Authenticate a long-lived connection at a gateway.`,`On send, authorize membership and deduplicate client_message_id.`,`Assign a conversation-local sequence and durably append the message.`,`Publish delivery events to gateways holding recipient connections.`,`Offline devices resume from their last durable sequence.`],components:[{name:`Connection gateways`,purpose:`Own WebSocket/SSE sessions`,why:`Long-lived connections scale and fail differently from stateless APIs.`},{name:`Message service`,purpose:`Authorize and durably order messages`,why:`Acknowledgment should mean the message can be recovered.`},{name:`Conversation event stream`,purpose:`Distribute messages to online recipients`,why:`Decouples persistence from fan-out and absorbs bursts.`},{name:`Presence service`,purpose:`Track short-lived online state`,why:`Presence can be lossy and should not burden the durable message path.`}],decisions:[{question:`What ordering is guaranteed?`,optionA:`Global total order: simple semantics, major bottleneck.`,optionB:`Per-conversation order: scalable and matches user expectations.`,guidance:`Promise per-conversation server sequence; tolerate cross-conversation reordering.`},{question:`When do we acknowledge send?`,optionA:`After accepting in memory: lower latency, possible loss.`,optionB:`After durable append: slightly slower, clear recovery contract.`,guidance:`Acknowledge durable persistence, then deliver asynchronously.`}],failures:[{failure:`Gateway disconnects`,response:`Clients reconnect to any gateway and resume from last received sequence.`},{failure:`Delivery event duplicated`,response:`Clients deduplicate by message_id or sequence.`},{failure:`Slow consumer`,response:`Bound per-connection buffers, apply backpressure, then force catch-up from history.`},{failure:`Presence store unavailable`,response:`Degrade presence to unknown; do not block durable messaging.`}],depth:[`Message edits and tombstones`,`End-to-end encryption boundaries`,`Large channels`,`Push notifications`,`Multi-device read state`]},{id:`media-platform`,title:`Photo & Media Platform`,subtitle:`Instagram-style upload and delivery`,prompt:`Design image/video upload, processing, storage, and global delivery with user-facing metadata.`,priorities:[`Durability`,`Fast global delivery`,`Large-object throughput`,`Safe async processing`,`Cost control`],clarify:[`Images, video, or both?`,`Maximum sizes and supported formats?`,`Public, private, or shared visibility?`,`Which transformations are required?`,`Upload completion and processing latency targets?`],scale:[`Estimate uploads/day × average original size.`,`Estimate derived variants and retention multiplier.`,`Separate metadata QPS from object bandwidth.`,`Reads likely dwarf writes; model CDN hit ratio.`],api:[`POST /uploads to receive an upload session`,`Direct client upload to object storage using a short-lived signed URL`,`POST /uploads/:id/complete`,`GET /media/:id for metadata and authorized delivery URLs`],data:[`Media(media_id, owner_id, object_key, status, visibility, created_at)`,`Variant(media_id, kind, object_key, width, height, codec)`,`Keep bytes in object storage; keep searchable metadata in a database.`],flow:[`Create an upload session and authorize size/type.`,`Client uploads directly to durable object storage.`,`Completion event triggers malware scan and transformations.`,`Workers write idempotent variants and mark media ready.`,`CDN serves immutable versioned objects near readers.`],components:[{name:`Metadata API`,purpose:`Own media state and authorization`,why:`Small structured records need transactions and queries.`},{name:`Object storage`,purpose:`Durably hold large immutable bytes`,why:`Database blobs are costly and scale poorly for media delivery.`},{name:`Processing queue/workers`,purpose:`Scan, transcode, resize`,why:`CPU-heavy work should not extend request latency.`},{name:`CDN`,purpose:`Cache media close to users`,why:`Reduces origin bandwidth and global read latency.`}],decisions:[{question:`Who receives upload bytes?`,optionA:`API proxy: simpler control, doubles bandwidth and bottlenecks servers.`,optionB:`Direct-to-storage: scalable, requires signed upload lifecycle.`,guidance:`Use direct upload with constrained signed URLs and a completion handshake.`},{question:`How are replacements handled?`,optionA:`Overwrite stable keys: invalidation problems.`,optionB:`Immutable versioned keys: easy caching.`,guidance:`Prefer immutable objects and update metadata references.`}],failures:[{failure:`Client abandons upload`,response:`Expire sessions and garbage-collect unreferenced objects.`},{failure:`Transform worker retries`,response:`Use deterministic variant keys and idempotent status transitions.`},{failure:`CDN serves stale private access`,response:`Use short-lived signed URLs or edge authorization; never rely only on obscure paths.`},{failure:`Corrupt/malicious file`,response:`Quarantine until validation completes; never serve original as ready prematurely.`}],depth:[`Resumable multipart upload`,`Video segmenting`,`Content moderation`,`Lifecycle tiers`,`Regional data residency`]},{id:`ride-hailing`,title:`Ride Hailing`,subtitle:`Uber-style matching and trip state`,prompt:`Design a system that tracks drivers, matches nearby drivers to riders, and maintains a reliable trip lifecycle.`,priorities:[`Fresh geospatial state`,`Low match latency`,`Correct trip transitions`,`Contention control`,`Graceful degradation`],clarify:[`City/region scope and active driver count?`,`Target pickup radius and match latency?`,`Can multiple riders race for one driver?`,`Pricing/payment in scope?`,`How frequently do drivers report location?`],scale:[`Concurrent active drivers × location updates/second.`,`Ride requests/second at peak and geographic concentration.`,`Separate high-volume ephemeral locations from lower-volume durable trips.`,`Model hot events such as airport or stadium exits.`],api:[`PUT /drivers/:id/location {lat, lng, timestamp}`,`POST /ride-requests {pickup, destination, idempotency_key}`,`POST /rides/:id/accept`,`POST /rides/:id/transitions {expected_state, next_state}`],data:[`DriverAvailability(driver_id, geo_cell, updated_at, status) — ephemeral`,`Ride(ride_id, rider_id, driver_id, state, pickup, destination, version) — durable`,`RideEvent(ride_id, sequence, event_type, occurred_at)`],flow:[`Driver updates location into a partitioned geospatial index.`,`Rider request queries nearby available candidates.`,`Matching service scores a bounded candidate set.`,`Offer/lease a driver with an expiry so only one match wins.`,`Persist trip state transitions with optimistic concurrency.`],components:[{name:`Location service`,purpose:`Ingest and index fresh driver positions`,why:`High-churn ephemeral writes need different storage from trips.`},{name:`Matching service`,purpose:`Find and score nearby drivers`,why:`Owns radius expansion, fairness, ETA, and offer policy.`},{name:`Trip service`,purpose:`Own durable ride state machine`,why:`Prevents invalid or conflicting lifecycle transitions.`},{name:`Event/notification system`,purpose:`Update rider and driver clients`,why:`Participants need real-time state without polling the primary store.`}],decisions:[{question:`How exact must locations be?`,optionA:`Strongly consistent positions: expensive and unnecessary.`,optionB:`Eventually consistent recent positions: scalable but may be stale.`,guidance:`Use freshness timestamps and verify availability during lease/accept.`},{question:`How is a driver reserved?`,optionA:`Database transaction on every candidate.`,optionB:`Short distributed lease/offer, followed by durable assignment.`,guidance:`Lease candidates briefly; conditional transition ensures only one ride assigns the driver.`}],failures:[{failure:`Driver location goes stale`,response:`Exclude entries past a freshness threshold; mark offline asynchronously.`},{failure:`Two matchers select one driver`,response:`Use a conditional lease or compare-and-set on driver availability.`},{failure:`Client repeats trip transition`,response:`Use expected state/version and idempotency keys.`},{failure:`Location index unavailable`,response:`Degrade to a wider/staler regional snapshot or pause matching rather than double-assign.`}],depth:[`Geo-cell partitioning`,`Radius expansion`,`Marketplace fairness`,`ETA computation`,`Trip event auditability`]},{id:`job-queue`,title:`Distributed Job Queue`,subtitle:`Scheduling, retries, and worker coordination`,prompt:`Design a service where producers submit jobs that workers execute asynchronously and reliably.`,priorities:[`Durable acceptance`,`At-least-once processing`,`Backpressure`,`Retries`,`Operational visibility`],clarify:[`Immediate and scheduled jobs?`,`Maximum payload and execution time?`,`Ordering or priority requirements?`,`At-least-once or stronger semantics?`,`How are failures and poison jobs handled?`],scale:[`Jobs/sec, burst multiplier, payload size, and retention.`,`Worker throughput by job type and duration distribution.`,`Queue depth is insufficient; track age of oldest ready job.`,`Estimate retry amplification during a downstream outage.`],api:[`POST /jobs {type, payload_ref, run_at, priority, idempotency_key}`,`GET /jobs/:id`,`POST /jobs/:id/cancel`,`Worker lease/ack/fail protocol`],data:[`Job(job_id, type, status, run_at, attempt, max_attempts, payload_ref)`,`JobAttempt(job_id, attempt, worker_id, started_at, ended_at, error)`,`Store large payloads externally and reference them.`],flow:[`Producer submits and receives acknowledgment only after durable storage.`,`Dispatcher moves due jobs into ready partitions.`,`Worker leases a job with a visibility timeout.`,`Worker completes idempotent work and acknowledges.`,`Expired leases retry with exponential backoff; exhausted jobs enter a dead-letter queue.`],components:[{name:`Submission API`,purpose:`Validate and durably accept work`,why:`Provides idempotency and a stable job identity.`},{name:`Scheduler`,purpose:`Release delayed jobs when due`,why:`Ready queues stay optimized for immediate consumption.`},{name:`Ready queues`,purpose:`Buffer jobs by type/priority`,why:`Decouple producer bursts from worker capacity.`},{name:`Workers + lease manager`,purpose:`Execute with bounded ownership`,why:`A crashed worker's job must become available again.`}],decisions:[{question:`What delivery guarantee?`,optionA:`At-most-once: may lose work.`,optionB:`At-least-once: duplicates possible.`,guidance:`Use at-least-once and require idempotent handlers; exactly-once effects need domain cooperation.`},{question:`Where is retry state?`,optionA:`Worker memory: lost on crash.`,optionB:`Durable job/attempt state: recoverable.`,guidance:`Persist attempt count and next run time; use jittered exponential backoff.`}],failures:[{failure:`Worker dies mid-job`,response:`Lease expires and job becomes visible; handler deduplicates side effects.`},{failure:`Downstream dependency fails`,response:`Back off with jitter, trip circuit breakers, cap retries, monitor queue age.`},{failure:`Poison job always crashes`,response:`Move to dead-letter storage with error context and replay tooling.`},{failure:`Producers exceed capacity`,response:`Apply quotas/backpressure and autoscale using queue age, not just depth.`}],depth:[`Priority starvation`,`Per-tenant fairness`,`Long-running heartbeats`,`Exactly-once business effects`,`Replay and audit tooling`]},{id:`rate-limiter`,title:`Rate Limiter`,subtitle:`Protecting services fairly at high scale`,prompt:`Design a distributed rate limiter for APIs with per-user, per-tenant, and global limits.`,priorities:[`Low decision latency`,`Correct-enough distributed counts`,`Fairness`,`Availability`,`Clear client feedback`],clarify:[`Limit by user, API key, IP, tenant, or route?`,`Hard enforcement or approximate protection?`,`Burst allowance?`,`Single region or global?`,`What happens if the limiter is unavailable?`],scale:[`Decision QPS can equal or exceed API request QPS.`,`Estimate cardinality of active limit keys and window duration.`,`Model hot tenants and shared NAT IPs.`,`Budget limiter latency as a small fraction of endpoint latency.`],api:[`Internal check(key, policy, cost) → allowed, remaining, retry_after`,`Return 429 with Retry-After when rejected`,`Policies are versioned configuration, not hard-coded per call`],data:[`Policy(scope, capacity, refill_rate, burst, mode)`,`Counter/token state keyed by policy + subject`,`Expire inactive keys to bound memory.`],flow:[`Gateway authenticates and derives stable limit keys.`,`Limiter atomically evaluates and updates token/counter state.`,`Allowed requests continue with remaining quota metadata.`,`Rejected requests stop before expensive downstream work.`,`Aggregate telemetry reveals abuse, false positives, and policy impact.`],components:[{name:`Policy service`,purpose:`Own versioned limits and overrides`,why:`Enforcement code should not contain product policy.`},{name:`Decision service`,purpose:`Perform atomic low-latency checks`,why:`Centralizes algorithm and consistent response semantics.`},{name:`Distributed state store`,purpose:`Hold short-lived counters/tokens`,why:`Instances must coordinate without routing every key to one process.`},{name:`Local safety limiter`,purpose:`Protect during dependency failure`,why:`Provides coarse fallback and shields the central limiter.`}],decisions:[{question:`Which algorithm?`,optionA:`Fixed/sliding windows: intuitive, can spike at boundaries.`,optionB:`Token bucket: smooth refill with controlled bursts.`,guidance:`Token bucket is a strong default; explain capacity and refill rate.`},{question:`Fail open or closed?`,optionA:`Open preserves availability but risks overload.`,optionB:`Closed protects capacity but can cause total outage.`,guidance:`Choose per endpoint; use local fallback and tighter limits for expensive writes.`}],failures:[{failure:`Central limiter unavailable`,response:`Use bounded local token buckets; choose fail-open/closed by endpoint risk.`},{failure:`Hot key overloads one partition`,response:`Shard global limits, use hierarchical aggregation, or reserve per-region budgets.`},{failure:`Clock skew affects windows`,response:`Prefer server-side monotonic timing and avoid client timestamps.`},{failure:`Policy update is bad`,response:`Version, canary, audit, and support instant rollback.`}],depth:[`Token bucket math`,`Global versus regional budgets`,`Approximate counters`,`Tenant hierarchy`,`Abuse evasion`]}],ie=Object.fromEntries(re.map(e=>[e.id,e])),ae=[{title:`Requirements`,prompt:`What are we building—and what are we explicitly not building?`,points:[`Name primary actors and top 2–3 actions.`,`Separate functional behavior from quality attributes.`,`Prioritize consistency, availability, latency, durability, cost, and privacy.`]},{title:`Numbers`,prompt:`What must the system survive?`,points:[`Average and peak requests/sec.`,`Read/write ratio and payload sizes.`,`Storage growth and retention.`,`Concurrent connections and geographic distribution.`]},{title:`Contracts`,prompt:`Where are the stable boundaries?`,points:[`Core APIs and identifiers.`,`Pagination and ordering.`,`Idempotency and authorization.`,`Data ownership and lifecycle.`]},{title:`Data flow`,prompt:`What happens on the critical read and write paths?`,points:[`Draw the simplest end-to-end path first.`,`Mark synchronous versus asynchronous boundaries.`,`Name the source of truth and derived state.`,`Identify the likely bottleneck.`]},{title:`Trade-offs`,prompt:`Why does each component earn its place?`,points:[`Describe capability before product name.`,`State what improves and what becomes harder.`,`Tie decisions to stated requirements.`,`Explain how the design evolves at 10×.`]},{title:`Failure`,prompt:`How does the system behave when parts fail?`,points:[`Timeouts, retries, idempotency, and backoff.`,`Partial failure and stale data.`,`Backpressure and overload behavior.`,`Detection, recovery, and operator controls.`]}];function oe({code:e}){let[t,n]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{className:`code-wrap`,children:[(0,p.jsx)(`button`,{className:`copy-button`,onClick:async()=>{await navigator.clipboard.writeText(e),n(!0),window.setTimeout(()=>n(!1),1200)},"aria-label":`Copy Ruby code`,children:t?`Copied`:`Copy`}),(0,p.jsx)(`pre`,{children:(0,p.jsx)(`code`,{children:e})})]})}function se({title:e,items:t,tone:n}){return(0,p.jsxs)(`section`,{className:`bullet-panel ${n}`,children:[(0,p.jsx)(`h3`,{children:e}),(0,p.jsx)(`ul`,{children:t.map(e=>(0,p.jsx)(`li`,{children:e},e))})]})}function ce({algorithm:e}){let t=C.findIndex(t=>t.id===e.id),n=C[(t-1+C.length)%C.length],r=C[(t+1)%C.length];return(0,p.jsxs)(v,{active:`algorithms`,children:[(0,p.jsx)(y,{kicker:e.eyebrow,title:e.title,copy:e.summary,children:(0,p.jsxs)(`div`,{className:`hero-metrics`,children:[(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`small`,{children:`Time`}),e.time]}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`small`,{children:`Space`}),e.space]})]})}),(0,p.jsxs)(`section`,{className:`section detail-section`,children:[(0,p.jsxs)(`aside`,{className:`detail-toc`,children:[(0,p.jsx)(`a`,{href:`/algorithms/`,children:`← All algorithms`}),(0,p.jsx)(`p`,{children:`On this page`}),(0,p.jsx)(`a`,{href:`#model`,children:`Mental model`}),e.primer&&(0,p.jsx)(`a`,{href:`#primer`,children:`First principles`}),(0,p.jsx)(`a`,{href:`#decision`,children:`When to use`}),(0,p.jsx)(`a`,{href:`#method`,children:`Method`}),(0,p.jsx)(`a`,{href:`#examples`,children:`Examples`}),(0,p.jsx)(`a`,{href:`#ruby`,children:`Ruby 3.2`})]}),(0,p.jsxs)(`article`,{className:`detail-content`,children:[(0,p.jsxs)(`section`,{className:`mental-callout`,id:`model`,children:[(0,p.jsx)(`p`,{className:`card-label`,children:`Mental model`}),(0,p.jsx)(`h2`,{children:e.mentalModel})]}),e.primer&&(0,p.jsxs)(`section`,{className:`concept-primer`,id:`primer`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`First principles`}),(0,p.jsx)(`h2`,{children:e.primer.title}),(0,p.jsx)(`p`,{className:`primer-intro`,children:e.primer.intro}),(0,p.jsx)(`div`,{className:`primer-walkthrough`,children:e.primer.walkthrough.map((e,t)=>(0,p.jsxs)(`article`,{children:[(0,p.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,p.jsx)(`h3`,{children:e.action}),(0,p.jsx)(`code`,{children:e.state}),(0,p.jsx)(`p`,{children:e.explanation})]},e.action))}),(0,p.jsx)(`div`,{className:`primer-terms`,children:e.primer.terms.map(e=>(0,p.jsxs)(`article`,{children:[(0,p.jsx)(`h3`,{children:e.term}),(0,p.jsx)(`p`,{children:e.definition})]},e.term))})]}),(0,p.jsxs)(`div`,{className:`decision-grid`,id:`decision`,children:[(0,p.jsx)(se,{title:`Use it when`,items:e.whenToUse,tone:`yes`}),(0,p.jsx)(se,{title:`Do not reach for it when`,items:e.whenNotToUse,tone:`no`})]}),(0,p.jsxs)(`section`,{className:`method-section`,id:`method`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`The method`}),(0,p.jsx)(`h2`,{children:`Talk through it before coding it.`}),(0,p.jsx)(`ol`,{children:e.steps.map((e,t)=>(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`span`,{children:t+1}),(0,p.jsx)(`p`,{children:e})]},e))})]}),(0,p.jsxs)(`section`,{className:`pitfall-section`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Common failure modes`}),(0,p.jsx)(`div`,{children:e.pitfalls.map(e=>(0,p.jsx)(`p`,{children:e},e))})]}),(0,p.jsxs)(`section`,{className:`example-section`,id:`examples`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Practice recognizing it`}),(0,p.jsx)(`h2`,{children:`Example problems`}),(0,p.jsx)(`div`,{className:`example-grid`,children:e.examples.map(e=>(0,p.jsxs)(`article`,{className:`example-card`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{children:e.difficulty}),(0,p.jsx)(`h3`,{children:e.title})]}),(0,p.jsx)(`p`,{children:e.prompt}),(0,p.jsxs)(`dl`,{children:[(0,p.jsx)(`dt`,{children:`Signal`}),(0,p.jsx)(`dd`,{children:e.signal}),(0,p.jsx)(`dt`,{children:`Approach`}),(0,p.jsx)(`dd`,{children:e.outline})]})]},e.title))})]}),(0,p.jsxs)(`section`,{className:`ruby-example`,id:`ruby`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Ruby 3.2 template`}),(0,p.jsx)(`h2`,{children:`A clean starting point`}),(0,p.jsx)(oe,{code:e.code})]})]})]}),(0,p.jsxs)(`nav`,{className:`next-guide`,children:[(0,p.jsxs)(`a`,{href:`/algorithms/${n.id}/`,children:[(0,p.jsx)(`small`,{children:`Previous`}),(0,p.jsxs)(`strong`,{children:[`← `,n.title]})]}),(0,p.jsxs)(`a`,{href:`/algorithms/${r.id}/`,children:[(0,p.jsx)(`small`,{children:`Next`}),(0,p.jsxs)(`strong`,{children:[r.title,` →`]})]})]})]})}function le(){let[e,t]=(0,f.useState)(``),n=(0,f.useMemo)(()=>{let t=e.trim().toLowerCase();return t?C.filter(e=>[e.title,e.eyebrow,e.summary,...e.whenToUse,...e.examples.map(e=>e.title)].join(` `).toLowerCase().includes(t)):C},[e]);return(0,p.jsxs)(v,{active:`algorithms`,children:[(0,p.jsx)(y,{kicker:`Algorithm library`,title:`Know what to reach for—and why.`,copy:`Each guide starts with the recognition signal, builds the mental model, then covers failure modes, counter-signals, example problems, and a Ruby 3.2 implementation.`}),(0,p.jsxs)(`section`,{className:`section library-section`,children:[(0,p.jsxs)(`div`,{className:`library-toolbar`,children:[(0,p.jsxs)(`p`,{children:[(0,p.jsxs)(`strong`,{children:[C.length,` guides`]}),` from everyday collections through dynamic programming.`]}),(0,p.jsxs)(`label`,{className:`search-box`,children:[(0,p.jsx)(`span`,{children:`⌕`}),(0,p.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Search: top k, contiguous, dependencies…`})]})]}),(0,p.jsx)(`div`,{className:`guide-grid`,children:n.map((e,t)=>(0,p.jsxs)(`a`,{className:`guide-card`,href:`/algorithms/${e.id}/`,children:[(0,p.jsxs)(`div`,{className:`guide-card-top`,children:[(0,p.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,p.jsx)(`em`,{children:e.eyebrow})]}),(0,p.jsx)(`h2`,{children:e.title}),(0,p.jsx)(`p`,{children:e.summary}),(0,p.jsxs)(`div`,{className:`guide-card-meta`,children:[(0,p.jsx)(`code`,{children:e.time}),(0,p.jsx)(`strong`,{children:`Read guide →`})]})]},e.id))}),n.length===0&&(0,p.jsx)(`div`,{className:`no-results`,children:`No match. Try the problem's structural cue rather than its story.`})]})]})}function ue({id:e,kicker:t,title:n,items:r}){return(0,p.jsxs)(`section`,{className:`arch-list-section`,id:e,children:[(0,p.jsx)(`p`,{className:`kicker`,children:t}),(0,p.jsx)(`h2`,{children:n}),(0,p.jsx)(`ul`,{children:r.map(e=>(0,p.jsx)(`li`,{children:e},e))})]})}function de({guide:e}){let t=re[(re.findIndex(t=>t.id===e.id)+1)%re.length];return(0,p.jsxs)(v,{active:`architecture`,children:[(0,p.jsx)(y,{kicker:e.subtitle,title:e.title,copy:e.prompt,children:(0,p.jsx)(`div`,{className:`hero-pill-row`,children:e.priorities.map(e=>(0,p.jsx)(`span`,{children:e},e))})}),(0,p.jsxs)(`section`,{className:`section arch-detail-layout`,children:[(0,p.jsxs)(`aside`,{className:`detail-toc`,children:[(0,p.jsx)(`a`,{href:`/architecture/`,children:`← Architecture home`}),(0,p.jsx)(`p`,{children:`On this page`}),(0,p.jsx)(`a`,{href:`#clarify`,children:`Clarify`}),(0,p.jsx)(`a`,{href:`#numbers`,children:`Scale`}),(0,p.jsx)(`a`,{href:`#contract`,children:`Contract`}),(0,p.jsx)(`a`,{href:`#flow`,children:`Data flow`}),(0,p.jsx)(`a`,{href:`#components`,children:`Components`}),(0,p.jsx)(`a`,{href:`#tradeoffs`,children:`Trade-offs`}),(0,p.jsx)(`a`,{href:`#failures`,children:`Failures`})]}),(0,p.jsxs)(`article`,{className:`arch-detail-content`,children:[(0,p.jsxs)(`section`,{className:`prompt-card`,children:[(0,p.jsx)(`p`,{className:`card-label`,children:`Start here—before looking below`}),(0,p.jsx)(`h2`,{children:e.prompt}),(0,p.jsx)(`p`,{children:`Take five minutes to ask questions and name priorities aloud. Then use the guide to fill gaps, not to memorize one “correct” architecture.`})]}),(0,p.jsx)(ue,{id:`clarify`,kicker:`Step 1`,title:`Clarifying questions`,items:e.clarify}),(0,p.jsx)(ue,{id:`numbers`,kicker:`Step 2`,title:`Back-of-the-envelope scale`,items:e.scale}),(0,p.jsxs)(`section`,{className:`contract-grid`,id:`contract`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Step 3 · API`}),(0,p.jsx)(`h2`,{children:`Define the contract`}),e.api.map(e=>(0,p.jsx)(`code`,{children:e},e))]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Step 3 · Data`}),(0,p.jsx)(`h2`,{children:`Name ownership`}),e.data.map(e=>(0,p.jsx)(`p`,{children:e},e))]})]}),(0,p.jsxs)(`section`,{className:`flow-section`,id:`flow`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Step 4`}),(0,p.jsx)(`h2`,{children:`Walk the critical path`}),(0,p.jsx)(`ol`,{children:e.flow.map((e,t)=>(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`span`,{children:t+1}),(0,p.jsx)(`p`,{children:e})]},e))})]}),(0,p.jsxs)(`section`,{className:`component-section`,id:`components`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Step 5`}),(0,p.jsx)(`h2`,{children:`Make every box earn its place`}),(0,p.jsx)(`div`,{className:`component-grid`,children:e.components.map(e=>(0,p.jsxs)(`article`,{children:[(0,p.jsx)(`h3`,{children:e.name}),(0,p.jsx)(`strong`,{children:e.purpose}),(0,p.jsx)(`p`,{children:e.why})]},e.name))})]}),(0,p.jsxs)(`section`,{className:`tradeoff-section`,id:`tradeoffs`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Step 6`}),(0,p.jsx)(`h2`,{children:`Say both sides of the decision`}),e.decisions.map(e=>(0,p.jsxs)(`article`,{children:[(0,p.jsx)(`h3`,{children:e.question}),(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`span`,{children:`A`}),e.optionA]}),(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`span`,{children:`B`}),e.optionB]})]}),(0,p.jsx)(`strong`,{children:e.guidance})]},e.question))]}),(0,p.jsxs)(`section`,{className:`failure-section`,id:`failures`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Step 7`}),(0,p.jsx)(`h2`,{children:`Pressure-test the design`}),(0,p.jsx)(`div`,{children:e.failures.map(e=>(0,p.jsxs)(`article`,{children:[(0,p.jsx)(`h3`,{children:e.failure}),(0,p.jsx)(`p`,{children:e.response})]},e.failure))})]}),(0,p.jsxs)(`section`,{className:`deep-dive`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`If the interviewer goes deeper`}),(0,p.jsx)(`h2`,{children:`Be ready to explore`}),(0,p.jsx)(`div`,{children:e.depth.map(e=>(0,p.jsx)(`span`,{children:e},e))})]})]})]}),(0,p.jsx)(`nav`,{className:`next-guide single`,children:(0,p.jsxs)(`a`,{href:`/architecture/${t.id}/`,children:[(0,p.jsx)(`small`,{children:`Next case study`}),(0,p.jsxs)(`strong`,{children:[t.title,` →`]})]})})]})}function w(){return(0,p.jsxs)(v,{active:`architecture`,children:[(0,p.jsx)(y,{kicker:`System design / architecture`,title:`Reason from requirements, not product names.`,copy:`A 60-minute whiteboard framework for scalable, robust backend systems—with the trade-offs, failure modes, and depth prompts the OpenAI screen calls for.`,children:(0,p.jsxs)(`div`,{className:`hero-pill-row`,children:[(0,p.jsx)(`span`,{children:`Scalability`}),(0,p.jsx)(`span`,{children:`Latency`}),(0,p.jsx)(`span`,{children:`Performance`}),(0,p.jsx)(`span`,{children:`Failure handling`})]})}),(0,p.jsxs)(`section`,{className:`section architecture-principle`,children:[(0,p.jsx)(`p`,{className:`card-label`,children:`The central habit`}),(0,p.jsxs)(`blockquote`,{children:[`“This component provides `,(0,p.jsx)(`em`,{children:`this capability`}),`, protects `,(0,p.jsx)(`em`,{children:`this requirement`}),`, and costs us `,(0,p.jsx)(`em`,{children:`this trade-off`}),`.”`]}),(0,p.jsx)(`p`,{children:`Avoid using “add a cache,” “use Kafka,” or “put it in DynamoDB” as complete answers. Describe the required behavior first; technologies are examples, not reasoning.`})]}),(0,p.jsxs)(`section`,{className:`section interview-timeline`,children:[(0,p.jsxs)(`div`,{className:`section-heading compact-heading`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`A 60-minute shape`}),(0,p.jsx)(`h2`,{children:`Keep moving while leaving room for depth.`})]}),(0,p.jsx)(`div`,{className:`timeline-grid`,children:ne.map(e=>(0,p.jsxs)(`article`,{children:[(0,p.jsx)(`span`,{children:e.minutes}),(0,p.jsx)(`h3`,{children:e.title}),(0,p.jsx)(`p`,{children:e.detail})]},e.minutes))})]}),(0,p.jsxs)(`section`,{className:`section foundation-section`,children:[(0,p.jsxs)(`div`,{className:`section-heading compact-heading`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Six lenses`}),(0,p.jsx)(`h2`,{children:`A framework you can reuse for any prompt.`})]}),(0,p.jsx)(`div`,{className:`foundation-grid`,children:ae.map((e,t)=>(0,p.jsxs)(`article`,{children:[(0,p.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,p.jsx)(`h3`,{children:e.title}),(0,p.jsx)(`strong`,{children:e.prompt}),(0,p.jsx)(`ul`,{children:e.points.map(e=>(0,p.jsx)(`li`,{children:e},e))})]},e.title))})]}),(0,p.jsxs)(`section`,{className:`section case-study-section`,children:[(0,p.jsxs)(`div`,{className:`section-heading pattern-heading`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Practice prompts`}),(0,p.jsx)(`h2`,{children:`Common systems, deeply explained`})]}),(0,p.jsx)(`p`,{children:`Start with the prompt, speak your clarifying questions aloud, then compare your path to the guide.`})]}),(0,p.jsx)(`div`,{className:`case-grid`,children:re.map((e,t)=>(0,p.jsxs)(`a`,{className:`case-card`,href:`/architecture/${e.id}/`,children:[(0,p.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,p.jsx)(`p`,{children:e.subtitle}),(0,p.jsx)(`h3`,{children:e.title}),(0,p.jsx)(`ul`,{children:e.priorities.slice(0,3).map(e=>(0,p.jsx)(`li`,{children:e},e))}),(0,p.jsx)(`strong`,{children:`Open case study →`})]},e.id))})]}),(0,p.jsxs)(`section`,{className:`section pressure-section`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Pressure-test every design`}),(0,p.jsx)(`h2`,{children:`Failure is part of the architecture.`})]}),(0,p.jsx)(`div`,{className:`pressure-grid`,children:[`What times out?`,`What retries—and can it duplicate effects?`,`What becomes stale?`,`What is the source of truth?`,`Where does backpressure appear?`,`What is the hot key or hot partition?`,`What does the client observe?`,`How will an operator know?`,`How is it rolled back?`].map(e=>(0,p.jsx)(`p`,{children:e},e))})]})]})}var T=[{id:`0001_two_sum`,number:1,title:`Two Sum`,prompt:`Return two indexes whose values add to a target.`,pattern:`Hash lookup`,approach:`One-pass complement hash`,time:`O(n)`,space:`O(n)`},{id:`0003_longest_substring`,number:3,title:`Longest Substring Without Repeating Characters`,prompt:`Find the longest contiguous substring containing no repeated character.`,pattern:`Sliding window`,approach:`Variable window with last-seen indexes`,time:`O(n)`,space:`O(k)`},{id:`0015_3sum`,number:15,title:`3Sum`,prompt:`Return every unique triplet whose values sum to zero.`,pattern:`Sorting + two pointers`,approach:`Fix an anchor, then run 2Sum II on the suffix`,time:`O(n²)`,space:`O(n)`},{id:`0020_valid_parentheses`,number:20,title:`Valid Parentheses`,prompt:`Determine whether brackets are correctly matched and nested.`,pattern:`Stack`,approach:`Append openers; pop and match each closer`,time:`O(n)`,space:`O(n)`},{id:`0021_merge_two_sorted_lists`,number:21,title:`Merge Two Sorted Lists`,prompt:`Merge two sorted linked lists into one sorted list.`,pattern:`Linked-list pointers`,approach:`Iterative merge behind a sentinel node`,time:`O(n + m)`,space:`O(1)`},{id:`0033_search_rotated_array`,number:33,title:`Search in Rotated Sorted Array`,prompt:`Find a target in a sorted array that was rotated once.`,pattern:`Binary search`,approach:`Identify the sorted half before discarding one side`,time:`O(log n)`,space:`O(1)`},{id:`0039_combination_sum`,number:39,title:`Combination Sum`,prompt:`Return combinations that add to a target when candidates may be reused.`,pattern:`Backtracking`,approach:`Choose, explore with remaining target, then undo`,time:`O(N^(T/M)) worst case`,space:`O(T/M)`},{id:`0046_permutations`,number:46,title:`Permutations`,prompt:`Return every ordering of a list of distinct values.`,pattern:`Backtracking`,approach:`Build each ordering with choose, explore, undo`,time:`O(n · n!)`,space:`O(n) excluding output`},{id:`0053_maximum_subarray`,number:53,title:`Maximum Subarray`,prompt:`Find the largest sum among all contiguous subarrays.`,pattern:`Dynamic programming / greedy`,approach:`Kadane’s algorithm: extend or restart at each value`,time:`O(n)`,space:`O(1)`},{id:`0056_merge_intervals`,number:56,title:`Merge Intervals`,prompt:`Combine every overlapping interval.`,pattern:`Sorting + sweep`,approach:`Sort by start, then extend the active interval`,time:`O(n log n)`,space:`O(n)`},{id:`0057_insert_interval`,number:57,title:`Insert Interval`,prompt:`Insert one interval into sorted non-overlapping intervals and merge as needed.`,pattern:`Intervals`,approach:`Append before, merge overlaps, append after`,time:`O(n)`,space:`O(1) excluding output`},{id:`0067_add_binary`,number:67,title:`Add Binary`,prompt:`Add two binary strings and return their binary sum.`,pattern:`Right-to-left simulation`,approach:`Walk both strings with a carry`,time:`O(max(n, m))`,space:`O(max(n, m))`},{id:`0070_climbing_stairs`,number:70,title:`Climbing Stairs`,prompt:`Count ways to reach step n using one- or two-step moves.`,pattern:`Dynamic programming`,approach:`Fibonacci recurrence from smaller stair counts`,time:`O(n)`,space:`O(n)`},{id:`0076_min_window_substring`,number:76,title:`Minimum Window Substring`,prompt:`Find the shortest substring containing all required character counts.`,pattern:`Sliding window`,approach:`Expand to satisfy counts, then shrink while valid`,time:`O(n + m)`,space:`O(k)`},{id:`0102_binary_tree_level_order`,number:102,title:`Binary Tree Level Order Traversal`,prompt:`Return tree values grouped by depth.`,pattern:`Breadth-first search`,approach:`Queue nodes and process one captured level size at a time`,time:`O(n)`,space:`O(n)`},{id:`0104_max_depth_of_binary_tree`,number:104,title:`Maximum Depth of Binary Tree`,prompt:`Return the number of nodes on the longest root-to-leaf path.`,pattern:`Tree DFS`,approach:`Return 1 plus the deeper child height`,time:`O(n)`,space:`O(h)`},{id:`0110_balanced_binary_tree`,number:110,title:`Balanced Binary Tree`,prompt:`Determine whether every node’s subtree heights differ by at most one.`,pattern:`Postorder tree DFS`,approach:`Return height or a sentinel for imbalance`,time:`O(n)`,space:`O(h)`},{id:`0121_best_time_buy_sell_stock`,number:121,title:`Best Time to Buy and Sell Stock`,prompt:`Maximize profit from one buy followed by one sell.`,pattern:`One-pass greedy`,approach:`Track the lowest prior price and best profit`,time:`O(n)`,space:`O(1)`},{id:`0125_valid_palindrome`,number:125,title:`Valid Palindrome`,prompt:`Check whether alphanumeric characters read the same in both directions.`,pattern:`Two pointers`,approach:`Move inward while skipping non-alphanumeric characters`,time:`O(n)`,space:`O(1)`},{id:`0133_clone_graph`,number:133,title:`Clone Graph`,prompt:`Deep-copy every node and edge in a connected graph.`,pattern:`Graph traversal + hash`,approach:`BFS with original-node to clone mapping`,time:`O(V + E)`,space:`O(V)`},{id:`0136_single_number`,number:136,title:`Single Number`,prompt:`Find the one value that appears once when every other value appears twice.`,pattern:`Bit manipulation`,approach:`XOR every value to cancel equal pairs`,time:`O(n)`,space:`O(1)`},{id:`0141_linked_list_cycle`,number:141,title:`Linked List Cycle`,prompt:`Determine whether following next pointers eventually repeats a node.`,pattern:`Fast and slow pointers`,approach:`Floyd’s tortoise-and-hare cycle detection`,time:`O(n)`,space:`O(1)`},{id:`0150_eval_reverse_polish`,number:150,title:`Evaluate Reverse Polish Notation`,prompt:`Evaluate a postfix arithmetic expression.`,pattern:`Stack`,approach:`Append numbers; pop two operands for each operator`,time:`O(n)`,space:`O(n)`},{id:`0155_min_stack`,number:155,title:`Min Stack`,prompt:`Design a stack supporting push, pop, top, and minimum in constant time.`,pattern:`Augmented stack`,approach:`Store the minimum associated with each stack state`,time:`O(1) per operation`,space:`O(n)`},{id:`0169_majority_element`,number:169,title:`Majority Element`,prompt:`Find the value occurring more than half the time.`,pattern:`Boyer–Moore voting`,approach:`Cancel different values while maintaining one candidate`,time:`O(n)`,space:`O(1)`},{id:`0200_number_of_islands`,number:200,title:`Number of Islands`,prompt:`Count connected groups of land cells in a grid.`,pattern:`Grid BFS`,approach:`Flood-fill each unseen land component once`,time:`O(rows · cols)`,space:`O(rows · cols)`},{id:`0206_reverse_linked_list`,number:206,title:`Reverse Linked List`,prompt:`Reverse every next pointer in a singly linked list.`,pattern:`Linked-list pointers`,approach:`Iteratively preserve next, rewire, and advance`,time:`O(n)`,space:`O(1)`},{id:`0207_course_schedule`,number:207,title:`Course Schedule`,prompt:`Determine whether directed prerequisites contain a cycle.`,pattern:`Topological sort`,approach:`Kahn’s algorithm with indegrees and a queue`,time:`O(V + E)`,space:`O(V + E)`},{id:`0208_implement_trie`,number:208,title:`Implement Trie`,prompt:`Support word insertion, exact search, and prefix search.`,pattern:`Trie`,approach:`Walk one child edge per character`,time:`O(L) per operation`,space:`O(total characters)`},{id:`0216_combination_sum_3`,number:216,title:`Combination Sum III`,prompt:`Choose k distinct digits from 1–9 whose sum equals n.`,pattern:`Backtracking`,approach:`Explore increasing digits with count and sum pruning`,time:`O(Σ C(9,d) + R·k)`,space:`O(k) excluding output`},{id:`0217_contains_duplicates`,number:217,title:`Contains Duplicate`,prompt:`Determine whether any value appears more than once.`,pattern:`Hash membership`,approach:`Compare each value against a seen hash`,time:`O(n)`,space:`O(n)`},{id:`0226_invert_binary_tree`,number:226,title:`Invert Binary Tree`,prompt:`Swap every node’s left and right subtrees.`,pattern:`Tree DFS`,approach:`Recursively invert children, then swap them`,time:`O(n)`,space:`O(h)`},{id:`0232_queue_using_stacks`,number:232,title:`Implement Queue Using Stacks`,prompt:`Implement FIFO behavior using only stack operations.`,pattern:`Two stacks`,approach:`Lazy transfer from input stack to output stack`,time:`O(1) amortized`,space:`O(n)`},{id:`0235_lca_binary_search_tree`,number:235,title:`Lowest Common Ancestor of a BST`,prompt:`Find the lowest node whose subtree contains both targets.`,pattern:`BST ordering`,approach:`Walk toward both values until they split around the current node`,time:`O(h)`,space:`O(1)`},{id:`0238_product_of_array`,number:238,title:`Product of Array Except Self`,prompt:`Return each position’s product of all other values without division.`,pattern:`Prefix and suffix products`,approach:`Write prefix products, then multiply a running suffix`,time:`O(n)`,space:`O(1) excluding output`},{id:`0242_valid_anagram`,number:242,title:`Valid Anagram`,prompt:`Determine whether two strings contain identical character counts.`,pattern:`Frequency counting`,approach:`Increment for one string and decrement for the other`,time:`O(n + m)`,space:`O(k)`},{id:`0252_meeting_rooms`,number:252,title:`Meeting Rooms`,prompt:`Determine whether any meeting intervals overlap.`,pattern:`Sorting + intervals`,approach:`Sort by start and compare adjacent boundaries`,time:`O(n log n)`,space:`O(n)`},{id:`0278_first_bad_version`,number:278,title:`First Bad Version`,prompt:`Find the first true value in a monotonic sequence of versions.`,pattern:`Binary search`,approach:`Lower-bound search for the first bad version`,time:`O(log n)`,space:`O(1)`},{id:`0322_coin_change`,number:322,title:`Coin Change`,prompt:`Find the fewest coins needed to make an amount.`,pattern:`Dynamic programming`,approach:`Build the best answer for every smaller amount`,time:`O(amount · coins)`,space:`O(amount)`},{id:`0383_ransom_note`,number:383,title:`Ransom Note`,prompt:`Determine whether magazine characters can construct a note.`,pattern:`Frequency counting`,approach:`Build available counts, then consume each required character`,time:`O(n + m)`,space:`O(k)`},{id:`0409_longest_palindrome`,number:409,title:`Longest Palindrome`,prompt:`Find the longest palindrome length constructible from supplied characters.`,pattern:`Frequency parity`,approach:`Use every pair plus at most one odd center`,time:`O(n)`,space:`O(k)`},{id:`0509_fibonacci_number`,number:509,title:`Fibonacci Number`,prompt:`Return the nth Fibonacci number.`,pattern:`Dynamic programming`,approach:`Iterate while retaining only the previous two values`,time:`O(n)`,space:`O(1)`},{id:`0535_encode_decode_tinyurl`,number:535,title:`Encode and Decode TinyURL`,prompt:`Design reversible short aliases for long URLs.`,pattern:`Hash-backed design`,approach:`Generate a unique key and store its URL mapping`,time:`O(1) average per operation`,space:`O(n) mappings`},{id:`0542_01_matrix`,number:542,title:`01 Matrix`,prompt:`Return each cell’s distance to its nearest zero.`,pattern:`Grid dynamic programming`,approach:`Forward and reverse directional distance passes`,time:`O(rows · cols)`,space:`O(1) excluding output`},{id:`0543_diameter_of_binary_tree`,number:543,title:`Diameter of Binary Tree`,prompt:`Find the longest path between any two tree nodes.`,pattern:`Postorder tree DFS`,approach:`Return subtree height while recording left height + right height`,time:`O(n)`,space:`O(h)`},{id:`0704_binary_search`,number:704,title:`Binary Search`,prompt:`Find a target index in a sorted array.`,pattern:`Binary search`,approach:`Maintain an inclusive interval and discard half each step`,time:`O(log n)`,space:`O(1)`},{id:`0733_flood_fill`,number:733,title:`Flood Fill`,prompt:`Recolor the connected component containing a starting pixel.`,pattern:`Grid DFS / BFS`,approach:`Traverse matching neighbors and mark them immediately`,time:`O(rows · cols)`,space:`O(rows · cols)`},{id:`0876_middle_of_linked_list`,number:876,title:`Middle of the Linked List`,prompt:`Return the middle node, choosing the second middle when length is even.`,pattern:`Fast and slow pointers`,approach:`Move slow once and fast twice`,time:`O(n)`,space:`O(1)`},{id:`0973_k_closest_points`,number:973,title:`K Closest Points to Origin`,prompt:`Return the k points with the smallest squared distance from the origin.`,pattern:`Sorting / top K`,approach:`Sort points by squared distance and take k`,time:`O(n log n)`,space:`O(n)`},{id:`0981_time_based_kv_store`,number:981,title:`Time Based Key-Value Store`,prompt:`Store timestamped values and retrieve the newest value at or before a time.`,pattern:`Hash + binary search`,approach:`Append ordered versions per key; upper-bound search on get`,time:`set O(1); get O(log n)`,space:`O(n)`},{id:`0994_rotting_oranges`,number:994,title:`Rotting Oranges`,prompt:`Find minutes for rot to reach every fresh orange, or report impossibility.`,pattern:`Multi-source BFS`,approach:`Start from every rotten orange and process the grid by minute`,time:`O(rows · cols)`,space:`O(rows · cols)`},{id:`1852_distinct_nums_subarray`,number:1852,title:`Distinct Numbers in Each Subarray`,prompt:`Count distinct values in every contiguous window of size k.`,pattern:`Fixed sliding window`,approach:`Maintain a frequency hash while one value enters and one leaves`,time:`O(n)`,space:`O(k)`}],fe=Object.fromEntries(T.map(e=>[e.id,e])),pe=[{id:`ds-01`,category:`Data structures`,question:`What is the average lookup time for a Ruby Hash?`,answer:`O(1) average.`,detail:`Worst case can degrade, but O(1) average is the interview assumption for well-distributed keys.`},{id:`ds-02`,category:`Data structures`,question:`What operations make a Ruby Array work as a stack in this guide?`,answer:`array.append(item) and array.pop.`,detail:`Both operate at the end and are O(1) amortized. We consistently use append rather than another Ruby alias because it matches Python's vocabulary.`},{id:`ds-03`,category:`Data structures`,question:`Why avoid Array#shift in a BFS hot loop?`,answer:`It is O(n) because later elements must move.`,detail:`Keep a head index into the array instead.`},{id:`ds-04`,category:`Data structures`,question:`What does the root of a min-heap guarantee?`,answer:`It is the globally smallest item.`,detail:`The rest of the heap is only partially ordered, not fully sorted.`},{id:`ds-05`,category:`Data structures`,question:`What are the child indexes of heap node i?`,answer:`Left = 2*i + 1; right = 2*i + 2.`,detail:`The parent index is (i - 1) / 2 using integer division.`},{id:`ds-06`,category:`Data structures`,question:`When is a Set preferable to a Hash?`,answer:`When you need unique items or membership checks, but no value associated with each item.`,detail:`In Ruby 3.2, Set is built in and autoloaded. Use Set.new, set.add(item), and set.include?(item); no import is needed.`},{id:`ds-07`,category:`Data structures`,question:`What does a queue guarantee?`,answer:`First in, first out (FIFO).`,detail:`That ordering makes BFS visit states by increasing unweighted distance.`},{id:`ds-08`,category:`Data structures`,question:`What is a graph adjacency list?`,answer:`A mapping from each node to its neighbors.`,detail:`It uses O(V + E) space and is usually best for sparse graphs.`},{id:`ds-09`,category:`Data structures`,question:`What is a linked-list sentinel node for?`,answer:`It removes special cases around the head.`,detail:`Attach real nodes after a dummy node, then return dummy.next.`},{id:`ds-10`,category:`Data structures`,question:`What does union-find efficiently track?`,answer:`Which items belong to the same connected group as new links are added.`,detail:`If A joins B and B joins C, union-find can quickly answer that A and C are connected. The formal name for these separate groups is disjoint sets. Path compression and union by size keep repeated lookups extremely fast.`},{id:`pt-01`,category:`Patterns`,question:`What is the key signal for a sliding window?`,answer:`A question about a contiguous range whose state updates as endpoints move.`,detail:`Common wording: longest, shortest, or count of valid subarrays/substrings.`},{id:`pt-02`,category:`Patterns`,question:`What must justify every two-pointer move?`,answer:`A fact proving the discarded candidates cannot be answers.`,detail:`Sorted order or a limiting boundary often provides that proof.`},{id:`pt-03`,category:`Patterns`,question:`When does BFS find a shortest path?`,answer:`When every edge has equal cost.`,detail:`For different nonnegative costs, use a priority-queue approach such as Dijkstra.`},{id:`pt-04`,category:`Patterns`,question:`What are the three backtracking actions?`,answer:`Choose, explore, undo.`,detail:`Prune before exploring any partial choice that cannot become valid.`},{id:`pt-05`,category:`Patterns`,question:`What makes binary search on an answer possible?`,answer:`A monotonic feasibility predicate.`,detail:`Once candidate x is feasible, all candidates on one side must also be feasible.`},{id:`pt-06`,category:`Patterns`,question:`What equation gives a range sum from prefix sums?`,answer:`sum(left..right) = prefix[right + 1] - prefix[left].`,detail:`Define prefix[i] as the sum of elements before index i.`},{id:`pt-07`,category:`Patterns`,question:`What question should you answer before writing recursive tree code?`,answer:`What does this function return for the subtree rooted here?`,detail:`That contract determines the base case and child combination.`},{id:`pt-08`,category:`Patterns`,question:`What does a topological sort produce?`,answer:`An order where every directed prerequisite appears before its dependent.`,detail:`If not all nodes can be processed, the graph contains a directed cycle.`},{id:`pt-09`,category:`Patterns`,question:`What is the main signal for dynamic programming?`,answer:`Repeated subproblems plus a compact state.`,detail:`DP commonly answers optimization, counting, or feasibility questions.`},{id:`pt-10`,category:`Patterns`,question:`What must a greedy solution include besides a local rule?`,answer:`A proof the local choice cannot hurt the optimum.`,detail:`An exchange argument or stays-ahead argument is common.`},{id:`pt-11`,category:`Patterns`,question:`What does a monotonic stack usually store?`,answer:`Unresolved candidates in increasing or decreasing order.`,detail:`Each item is appended and popped at most once, yielding O(n) total work.`},{id:`pt-12`,category:`Patterns`,question:`When should you reach for a heap?`,answer:`When you repeatedly need the current minimum or maximum as data changes.`,detail:`Typical examples are top K, scheduling, and merging sorted streams.`},{id:`pt-13`,category:`Patterns`,question:`Why sort intervals before merging?`,answer:`Only the last merged interval can overlap the next interval.`,detail:`Sorting converts a global overlap problem into local comparisons.`},{id:`pt-14`,category:`Patterns`,question:`How do slow and fast pointers detect a linked-list cycle?`,answer:`Fast eventually laps slow if a cycle exists.`,detail:`Compare node identity, not node values.`},{id:`pt-15`,category:`Patterns`,question:`When do negative numbers break a variable-sum sliding window?`,answer:`When moving an endpoint no longer changes the sum monotonically.`,detail:`Prefix sums plus a hash often handle target sums with negatives.`},{id:`cr-01`,category:`Complexity & Ruby`,question:`What is the time complexity of comparison sorting?`,answer:`O(n log n) for standard comparison sorts.`,detail:`Ruby's sort and sort_by should be described as O(n log n).`},{id:`cr-02`,category:`Complexity & Ruby`,question:`What is the complexity of a graph DFS or BFS?`,answer:`O(V + E) time.`,detail:`Each vertex and edge is processed a constant number of times.`},{id:`cr-03`,category:`Complexity & Ruby`,question:`How do you derive basic DP time complexity?`,answer:`Number of states × transitions per state.`,detail:`State dimensions matter more than whether the code is recursive or iterative.`},{id:`cr-04`,category:`Complexity & Ruby`,question:`What does Hash.new(0) enable?`,answer:`Frequency counting without checking for missing keys.`,detail:`counts[item] += 1 works because missing keys read as zero.`},{id:`cr-05`,category:`Complexity & Ruby`,question:`Why is Hash.new([]) dangerous?`,answer:`Every missing key returns the same mutable array.`,detail:`Use Hash.new { |hash, key| hash[key] = [] }.`},{id:`cr-06`,category:`Complexity & Ruby`,question:`What Ruby 3.2 class creates small immutable value objects?`,answer:`Data.define.`,detail:`Use Struct instead when member writers or mutable container behavior are required.`},{id:`cr-07`,category:`Complexity & Ruby`,question:`How do you compare compound keys in Ruby?`,answer:`Use arrays, such as [time, sequence] <=> [other_time, other_sequence].`,detail:`Array comparison is lexicographic and is useful for deterministic tie-breaks.`},{id:`cr-08`,category:`Complexity & Ruby`,question:`How do you copy a mutable backtracking path?`,answer:`path.dup.`,detail:`Saving path itself would store multiple references to one changing array.`},{id:`cr-09`,category:`Complexity & Ruby`,question:`What do (0...n) and (0..n) mean?`,answer:`Three dots exclude n; two dots include n.`,detail:`Exclusive ranges are common for array indexes.`},{id:`cr-10`,category:`Complexity & Ruby`,question:`Why prefer iteration over deep recursion in Ruby?`,answer:`Ruby has a relatively limited call stack.`,detail:`A highly skewed tree or deep graph can cause SystemStackError.`},{id:`ar-01`,category:`Architecture`,question:`What should you do before drawing a system?`,answer:`Clarify functional requirements, scale, and quality priorities.`,detail:`The architecture depends on which features and trade-offs actually matter.`},{id:`ar-02`,category:`Architecture`,question:`What are the four main quality dimensions in this interview?`,answer:`Scalability, latency, performance, and failure handling.`,detail:`Tie every major design choice back to one or more of these.`},{id:`ar-03`,category:`Architecture`,question:`What is horizontal scaling?`,answer:`Adding more service instances rather than making one machine larger.`,detail:`It usually requires stateless request handling or externalized session state.`},{id:`ar-04`,category:`Architecture`,question:`Why cache data?`,answer:`To reduce latency and load on a slower source.`,detail:`Always discuss invalidation, staleness, misses, and cache failure.`},{id:`ar-05`,category:`Architecture`,question:`When should work move to a queue?`,answer:`When it can complete asynchronously or needs buffering/retries.`,detail:`Queues decouple producers and consumers but add delay and duplicate-delivery concerns.`},{id:`ar-06`,category:`Architecture`,question:`What makes a retried operation safe?`,answer:`Idempotency: repeating it has the same effect as doing it once.`,detail:`Use an idempotency key or durable operation identity.`},{id:`ar-07`,category:`Architecture`,question:`What does at-least-once delivery imply?`,answer:`A message may be delivered more than once.`,detail:`Consumers must deduplicate or make processing idempotent.`},{id:`ar-08`,category:`Architecture`,question:`What is replication primarily for?`,answer:`Availability, durability, and sometimes read scaling.`,detail:`It introduces replication lag and consistency trade-offs.`},{id:`ar-09`,category:`Architecture`,question:`What is partitioning or sharding?`,answer:`Splitting a dataset across machines by a partition key.`,detail:`Discuss hot keys, rebalancing, and cross-partition operations.`},{id:`ar-10`,category:`Architecture`,question:`What is backpressure?`,answer:`Slowing or rejecting producers when consumers cannot keep up.`,detail:`Without it, queues and memory can grow until the system fails.`},{id:`ar-11`,category:`Architecture`,question:`What is a good first API discussion?`,answer:`Core operations, request/response shape, pagination, and idempotency.`,detail:`The API clarifies system boundaries before components are chosen.`},{id:`ar-12`,category:`Architecture`,question:`What should an observability plan include?`,answer:`Metrics, logs, traces, and actionable alerts.`,detail:`Name service-level signals such as error rate, latency, saturation, and queue age.`},{id:`ar-13`,category:`Architecture`,question:`What is the CAP trade-off during a network partition?`,answer:`Choose consistency or availability for a given operation.`,detail:`Do not describe an entire system as simply CP or AP; requirements differ by operation.`},{id:`ar-14`,category:`Architecture`,question:`Why use a CDN for media?`,answer:`To serve cached bytes near users and offload origin traffic.`,detail:`Uploads still need durable origin storage, authorization, and processing.`},{id:`ar-15`,category:`Architecture`,question:`Why should you avoid naming a tool as the whole design?`,answer:`A product name does not explain the capability, data flow, or trade-off.`,detail:`Say what the component must guarantee and why, then offer an implementation example.`}],me=[`All`,`Data structures`,`Patterns`,`Complexity & Ruby`,`Architecture`],E=(e,t)=>({label:e,href:t}),he={"ds-01":E(`Arrays, Hashes & Sets`,`/algorithms/arrays-hashes/`),"ds-02":E(`Stacks`,`/algorithms/stack/`),"ds-03":E(`Queues & BFS`,`/algorithms/queue-bfs/`),"ds-04":E(`Heaps`,`/algorithms/heap/`),"ds-05":E(`Heaps`,`/algorithms/heap/`),"ds-06":E(`Arrays, Hashes & Sets`,`/algorithms/arrays-hashes/`),"ds-07":E(`Queues & BFS`,`/algorithms/queue-bfs/`),"ds-08":E(`Graphs`,`/algorithms/graphs/`),"ds-09":E(`Linked Lists`,`/algorithms/linked-lists/`),"ds-10":E(`Union-Find from first principles`,`/algorithms/union-find/#primer`),"pt-01":E(`Sliding Window`,`/algorithms/sliding-window/`),"pt-02":E(`Two Pointers`,`/algorithms/two-pointers/`),"pt-03":E(`Queues & BFS`,`/algorithms/queue-bfs/`),"pt-04":E(`Backtracking`,`/algorithms/backtracking/`),"pt-05":E(`Binary Search`,`/algorithms/binary-search/`),"pt-06":E(`Prefix Sums`,`/algorithms/prefix-sums/`),"pt-07":E(`Trees`,`/algorithms/trees/`),"pt-08":E(`Graphs & Topological Sort`,`/algorithms/graphs/`),"pt-09":E(`Dynamic Programming`,`/algorithms/dynamic-programming/`),"pt-10":E(`Sorting & Greedy`,`/algorithms/sorting-greedy/`),"pt-11":E(`Monotonic Stacks`,`/algorithms/stack/`),"pt-12":E(`Heaps`,`/algorithms/heap/`),"pt-13":E(`Intervals`,`/algorithms/intervals/`),"pt-14":E(`Linked Lists`,`/algorithms/linked-lists/`),"pt-15":E(`Prefix Sums`,`/algorithms/prefix-sums/`),"cr-01":E(`Sorting & Greedy`,`/algorithms/sorting-greedy/`),"cr-02":E(`Graphs`,`/algorithms/graphs/`),"cr-03":E(`Dynamic Programming`,`/algorithms/dynamic-programming/`),"cr-04":E(`Arrays, Hashes & Sets`,`/algorithms/arrays-hashes/`),"cr-05":E(`Arrays, Hashes & Sets`,`/algorithms/arrays-hashes/`),"cr-06":E(`Ruby glossary`,`/ruby/`),"cr-07":E(`Ruby glossary`,`/ruby/`),"cr-08":E(`Backtracking`,`/algorithms/backtracking/`),"cr-09":E(`Ruby glossary`,`/ruby/`),"cr-10":E(`Trees & iterative DFS`,`/algorithms/trees/`),"ar-01":E(`Architecture framework`,`/architecture/`),"ar-02":E(`Architecture framework`,`/architecture/`),"ar-03":E(`Architecture framework`,`/architecture/`),"ar-04":E(`Social Feed case study`,`/architecture/social-feed/`),"ar-05":E(`Job Queue case study`,`/architecture/job-queue/`),"ar-06":E(`Job Queue case study`,`/architecture/job-queue/`),"ar-07":E(`Job Queue case study`,`/architecture/job-queue/`),"ar-08":E(`Architecture framework`,`/architecture/`),"ar-09":E(`Social Feed case study`,`/architecture/social-feed/`),"ar-10":E(`Job Queue case study`,`/architecture/job-queue/`),"ar-11":E(`Architecture framework`,`/architecture/`),"ar-12":E(`Architecture framework`,`/architecture/`),"ar-13":E(`Architecture trade-offs`,`/architecture/`),"ar-14":E(`Media Platform case study`,`/architecture/media-platform/`),"ar-15":E(`Architecture framework`,`/architecture/`)},D=T.map(e=>({id:`lc-${e.id}`,category:`Problem drills`,question:`#${e.number} ${e.title}\n\n${e.prompt}\n\nName the approach, time complexity, and auxiliary space complexity.`,answer:e.approach,detail:`Pattern: ${e.pattern}. Time: ${e.time}. Auxiliary space: ${e.space}.`})),ge=Object.fromEntries(T.map(e=>[`lc-${e.id}`,E(`${e.title} discussion`,`/problems/${e.id}/`)])),_e=`reprime-flashcards-v1`,ve=1440*60*1e3,ye=[0,0,1,3,7,14],be=[...pe,...D],xe=Object.fromEntries(be.map(e=>[e.id,e]));function Se(){try{return JSON.parse(localStorage.getItem(_e)||`{}`)}catch{return{}}}function Ce(e,t){let n=e===`problems`?D:pe;return e===`fundamentals`&&t!==`All`?n.filter(e=>e.category===t):n}function we(e,t,n){let r=Date.now();return Ce(t,n).filter(t=>!e[t.id]||e[t.id].dueAt<=r).sort((t,n)=>(e[t.id]?.dueAt??0)-(e[n.id]?.dueAt??0)).map(e=>e.id)}function Te(e){let t=new URLSearchParams(window.location.search),n=t.get(`deck`)===`problems`?`problems`:`fundamentals`,r=t.get(`problem`),i=r?`lc-${r}`:void 0;return{deck:n,queue:i&&xe[i]?[i]:we(e,n,`All`)}}function Ee(){let e=(0,f.useMemo)(()=>Se(),[]),t=(0,f.useMemo)(()=>Te(e),[e]),[n,r]=(0,f.useState)(e),[i,a]=(0,f.useState)(t.deck),[o,s]=(0,f.useState)(`All`),[c,l]=(0,f.useState)(t.queue),[u,d]=(0,f.useState)(!1),[m,h]=(0,f.useState)(0),[g,_]=(0,f.useState)(0),b=c[0]?xe[c[0]]:void 0,x=b?he[b.id]||ge[b.id]:void 0,ee=(0,f.useMemo)(()=>{let e=new Set(Ce(i,`All`).map(e=>e.id)),t=Object.entries(n).filter(([t])=>e.has(t)).map(([,e])=>e);return{seen:t.length,mastered:t.filter(e=>e.box>=4).length,due:we(n,i,`All`).length}},[n,i]),S=e=>{r(e),localStorage.setItem(_e,JSON.stringify(e))},C=(e,t=`All`,r=!1)=>{a(e),s(t);let i=Ce(e,t);l(r?i.map(e=>e.id):we(n,e,t)),d(!1),h(0),_(0)},te=e=>{if(!b)return;let t=n[b.id]||{box:1,dueAt:0,correct:0,incorrect:0},r=e?Math.min(5,t.box+1):1;S({...n,[b.id]:{box:r,dueAt:e?Date.now()+ye[r]*ve:Date.now(),correct:t.correct+ +!!e,incorrect:t.incorrect+ +!e}}),e?(l(e=>e.slice(1)),h(e=>e+1)):(l(e=>{let t=e.slice(1),n=Math.min(3,t.length);return[...t.slice(0,n),b.id,...t.slice(n)]}),_(e=>e+1)),d(!1)};return(0,f.useEffect)(()=>{let e=e=>{e.target instanceof HTMLSelectElement||e.target instanceof HTMLButtonElement||(e.code===`Space`&&(e.preventDefault(),d(!0)),u&&e.key===`1`&&te(!1),u&&e.key===`2`&&te(!0))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,p.jsxs)(v,{active:`flashcards`,children:[(0,p.jsx)(y,{kicker:`Active recall · Leitner system`,title:`Make the weak cards come back.`,copy:`Choose 50 foundational concept cards or 52 problem drills that ask you to name the approach and its exact time and auxiliary space. Missed cards return quickly; mastered cards wait longer.`}),(0,p.jsxs)(`section`,{className:`flash-section`,children:[(0,p.jsxs)(`aside`,{className:`flash-sidebar`,children:[(0,p.jsxs)(`div`,{className:`deck-switcher`,"aria-label":`Flashcard deck`,children:[(0,p.jsxs)(`button`,{className:i===`fundamentals`?`active`:``,onClick:()=>C(`fundamentals`),children:[`Fundamentals`,(0,p.jsx)(`span`,{children:`50 cards`})]}),(0,p.jsxs)(`button`,{className:i===`problems`?`active`:``,onClick:()=>C(`problems`),children:[`Problem drills`,(0,p.jsxs)(`span`,{children:[D.length,` cards`]})]})]}),(0,p.jsxs)(`div`,{className:`flash-stats`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:ee.due}),(0,p.jsx)(`span`,{children:`Due now`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:ee.seen}),(0,p.jsx)(`span`,{children:`Seen`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:ee.mastered}),(0,p.jsx)(`span`,{children:`Box 4+`})]})]}),i===`fundamentals`?(0,p.jsxs)(`label`,{className:`filter-label`,children:[`Category`,(0,p.jsx)(`select`,{value:o,onChange:e=>C(i,e.target.value),children:me.map(e=>(0,p.jsx)(`option`,{children:e},e))})]}):(0,p.jsxs)(`div`,{className:`problem-deck-note`,children:[(0,p.jsx)(`p`,{className:`card-label`,children:`The prompt`}),(0,p.jsx)(`p`,{children:`Name the algorithmic pattern, the concrete approach, time complexity, and auxiliary space before revealing.`})]}),(0,p.jsxs)(`div`,{className:`leitner-explainer`,children:[(0,p.jsx)(`p`,{className:`card-label`,children:`How repetition works`}),(0,p.jsxs)(`ol`,{children:[(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`Again`}),` → Box 1, repeat shortly.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`Got it`}),` → advance one box.`]}),(0,p.jsx)(`li`,{children:`Higher boxes wait 1, 3, 7, then 14 days.`})]})]}),(0,p.jsx)(`button`,{className:`quiet-button`,onClick:()=>{window.confirm(`Reset all flashcard progress on this device?`)&&(localStorage.removeItem(_e),r({}),l(Ce(i,o).map(e=>e.id)),d(!1),h(0),_(0))},children:`Reset progress`})]}),(0,p.jsxs)(`div`,{className:`flash-workspace`,children:[(0,p.jsxs)(`div`,{className:`session-bar`,children:[(0,p.jsxs)(`span`,{children:[c.length,` cards remaining`]}),(0,p.jsxs)(`span`,{children:[m,` correct · `,g,` again`]})]}),b?(0,p.jsxs)(`article`,{className:`flash-card ${u?`revealed`:``}`,children:[(0,p.jsxs)(`div`,{className:`flash-card-meta`,children:[(0,p.jsx)(`span`,{children:b.category}),(0,p.jsxs)(`span`,{children:[`Box `,n[b.id]?.box||1]})]}),(0,p.jsxs)(`div`,{className:`flash-question`,children:[(0,p.jsx)(`p`,{className:`card-label`,children:`Question`}),(0,p.jsx)(`h2`,{children:b.question})]}),u?(0,p.jsxs)(`div`,{className:`flash-answer`,children:[(0,p.jsx)(`p`,{className:`card-label`,children:`Answer`}),(0,p.jsx)(`h3`,{children:b.answer}),(0,p.jsx)(`p`,{children:b.detail}),x&&(0,p.jsxs)(`a`,{className:`flash-study-link`,href:x.href,target:`_blank`,rel:`noreferrer`,children:[(0,p.jsx)(`span`,{children:`Need more context?`}),(0,p.jsxs)(`strong`,{children:[`Study `,x.label,` ↗`]})]})]}):(0,p.jsxs)(`button`,{className:`reveal-button`,onClick:()=>d(!0),children:[`Reveal answer `,(0,p.jsx)(`kbd`,{children:`space`})]}),u&&(0,p.jsxs)(`div`,{className:`grade-buttons`,children:[(0,p.jsxs)(`button`,{className:`again-button`,onClick:()=>te(!1),children:[(0,p.jsx)(`span`,{children:`1`}),` Again`,(0,p.jsx)(`small`,{children:`Repeat after 3 cards`})]}),(0,p.jsxs)(`button`,{className:`got-button`,onClick:()=>te(!0),children:[(0,p.jsx)(`span`,{children:`2`}),` Got it`,(0,p.jsx)(`small`,{children:`Move to the next box`})]})]})]}):(0,p.jsxs)(`div`,{className:`session-complete`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Session complete`}),(0,p.jsx)(`h2`,{children:`Nothing else is due in this deck.`}),(0,p.jsxs)(`p`,{children:[`You marked `,m,` cards correct and sent `,g,` answers back for repetition.`]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`button`,{className:`primary-button`,onClick:()=>C(i,o),children:`Check due cards`}),(0,p.jsx)(`button`,{className:`outline-button`,onClick:()=>C(i,o,!0),children:`Review this deck anyway`})]})]}),(0,p.jsxs)(`p`,{className:`keyboard-note`,children:[`Keyboard: `,(0,p.jsx)(`kbd`,{children:`space`}),` reveal · `,(0,p.jsx)(`kbd`,{children:`1`}),` again · `,(0,p.jsx)(`kbd`,{children:`2`}),` got it`]})]})]})]})}var De=[{task:`Add one array item`,use:`items.append(item)`,avoid:`items << item · items.push(item)`,reason:`append matches Python and reads clearly at interview speed.`},{task:`Remove the final array item`,use:`items.pop`,avoid:`items.pop(1)`,reason:`pop matches Python and naturally pairs with append for stacks.`},{task:`Keep matching items`,use:`items.filter { |item| valid?(item) }`,avoid:`items.select { ... } · items.find_all { ... }`,reason:`filter matches Python and describes the result directly.`},{task:`Transform every item`,use:`items.map { |item| transform(item) }`,avoid:`items.collect { ... }`,reason:`map is shared vocabulary across Ruby and Python.`},{task:`Find the first match`,use:`items.find { |item| valid?(item) }`,avoid:`items.detect { ... }`,reason:`find is the clearer, more portable name.`},{task:`Sum numeric items`,use:`items.sum`,avoid:`items.inject(0, :+) · items.reduce(0, :+)`,reason:`sum matches Python and states the operation without machinery.`},{task:`Test collection membership`,use:`items.include?(item)`,avoid:`items.member?(item)`,reason:`Ruby has no in operator; include? is the clearest native spelling.`},{task:`Store unique items`,use:`set = Set.new · set.add(item)`,avoid:`require 'set'`,reason:`Ruby 3.2 includes and autoloads Set; add also matches Python's vocabulary.`},{task:`Test hash-key membership`,use:`hash.key?(key)`,avoid:`hash.has_key?(key) · hash.include?(key)`,reason:`key? is explicit and distinguishes keys from values.`},{task:`Iterate with an index`,use:`items.each_with_index do |item, index|`,avoid:`items.each.with_index do |item, index|`,reason:`Ruby has no enumerate; each_with_index is the standard explicit form.`},{task:`Count array or string elements`,use:`items.length`,avoid:`items.size · items.count`,reason:`length makes the intent unambiguous; count may perform work or count matches.`},{task:`Sort without changing the input`,use:`items.sort · items.sort_by { |item| key(item) }`,avoid:`items.sort! · items.sort_by! { ... }`,reason:`Prefer a non-mutating result unless the problem explicitly permits input mutation.`},{task:`Create an immutable value record`,use:`Task = Data.define(:name, :priority)`,avoid:`Struct.new(:name, :priority)`,reason:`Data communicates immutable value semantics in Ruby 3.2.`},{task:`Create a mutable linked node`,use:`Node = Struct.new(:value, :next)`,avoid:`Node = Data.define(:value, :next)`,reason:`Linked-list algorithms rewire next, so the record must be mutable.`},{task:`Use an Array as a queue`,use:`queue.append(item) · item = queue[head] · head += 1`,avoid:`queue.shift`,reason:`append keeps Python-like vocabulary; a head index avoids Ruby's O(n) shift.`}],Oe=[[`Shared vocabulary first`,`When Ruby exposes equivalent names, use the one that resembles Python: append, filter, map, find, sum.`],[`Explicit Ruby second`,`When there is no Python-shaped spelling, choose one precise Ruby form and reuse it everywhere.`],[`Mutation is deliberate`,`Prefer non-mutating collection methods unless the problem contract explicitly allows changing the input.`],[`Clarity beats cleverness`,`Use the form you can narrate and debug under interview pressure; terse syntax is not a goal.`]],ke=`# Array as a stack
stack = []
stack.append("(")
opener = stack.pop

# Array as an efficient queue
queue = [start]
head = 0

while head < queue.length
  node = queue[head]
  head += 1
  graph.fetch(node, []).each do |neighbor|
    queue.append(neighbor)
  end
end

# Collection pipeline
scores = records
  .filter { |record| record.active? }
  .map(&:score)

total = scores.sum`;function Ae(){return(0,p.jsxs)(v,{active:`ruby`,children:[(0,p.jsx)(y,{kicker:`Ruby 3.2 house style`,title:`One spelling for every common move.`,copy:`Ruby often offers aliases for the same operation. This refresher deliberately teaches one form so recall stays simple. When an equivalent Python name exists, that name wins.`,children:(0,p.jsxs)(`div`,{className:`hero-pill-row`,children:[(0,p.jsx)(`span`,{children:`append, not <<`}),(0,p.jsx)(`span`,{children:`filter, not select`}),(0,p.jsx)(`span`,{children:`map, not collect`}),(0,p.jsx)(`span`,{children:`sum, not inject`})]})}),(0,p.jsxs)(`section`,{className:`section convention-intro`,children:[(0,p.jsxs)(`div`,{className:`section-heading compact-heading`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Decision rule`}),(0,p.jsx)(`h2`,{children:`Valid alternatives are not wrong. They are simply outside this guide’s vocabulary.`})]}),(0,p.jsx)(`div`,{className:`principle-grid`,children:Oe.map(([e,t],n)=>(0,p.jsxs)(`article`,{children:[(0,p.jsx)(`span`,{children:String(n+1).padStart(2,`0`)}),(0,p.jsx)(`h3`,{children:e}),(0,p.jsx)(`p`,{children:t})]},e))})]}),(0,p.jsxs)(`section`,{className:`section convention-section`,children:[(0,p.jsxs)(`div`,{className:`section-heading pattern-heading`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Canonical glossary`}),(0,p.jsx)(`h2`,{children:`Use these forms everywhere`})]}),(0,p.jsx)(`p`,{children:`These choices apply to every code sample and flashcard on the site.`})]}),(0,p.jsxs)(`div`,{className:`convention-table`,role:`table`,"aria-label":`Ruby coding conventions`,children:[(0,p.jsxs)(`div`,{className:`convention-row convention-head`,role:`row`,children:[(0,p.jsx)(`strong`,{role:`columnheader`,children:`Task`}),(0,p.jsx)(`strong`,{role:`columnheader`,children:`Always use`}),(0,p.jsx)(`strong`,{role:`columnheader`,children:`Avoid here`}),(0,p.jsx)(`strong`,{role:`columnheader`,children:`Why`})]}),De.map(e=>(0,p.jsxs)(`div`,{className:`convention-row`,role:`row`,children:[(0,p.jsx)(`strong`,{role:`cell`,children:e.task}),(0,p.jsx)(`code`,{role:`cell`,children:e.use}),(0,p.jsx)(`code`,{className:`avoid-code`,role:`cell`,children:e.avoid}),(0,p.jsx)(`p`,{role:`cell`,children:e.reason})]},e.task))]})]}),(0,p.jsxs)(`section`,{className:`section convention-example`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`kicker`,children:`Put together`}),(0,p.jsx)(`h2`,{children:`The collection vocabulary in context`}),(0,p.jsx)(`p`,{children:`The same small set of names works for stacks, queues, and collection pipelines.`})]}),(0,p.jsx)(oe,{code:ke})]})]})}function je(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Me=je();function Ne(e){Me=e}var Pe={exec:()=>null};function Fe(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function O(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Le.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Ie=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),Le={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Fe(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Fe(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Fe(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Fe(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Fe(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:Fe(e=>RegExp(`^ {0,${e}}>`))},Re=/^(?:[ \t]*(?:\n|$))+/,ze=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Be=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ve=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,He=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ue=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,We=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ge=O(We).replace(/bull/g,Ue).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Ke=O(We).replace(/bull/g,Ue).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),qe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Je=/^[^\n]+/,Ye=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Xe=O(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Ye).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ze=O(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ue).getRegex(),Qe=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,$e=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,et=O(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,$e).replace(`tag`,Qe).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),tt=e=>O(qe).replace(`hr`,Ve).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Qe).getRegex(),nt=tt(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),rt=tt(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),it={blockquote:O(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,rt).getRegex(),code:ze,def:Xe,fences:Be,heading:He,hr:Ve,html:et,lheading:Ge,list:Ze,newline:Re,paragraph:nt,table:Pe,text:Je},at=O(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Ve).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Qe).getRegex(),ot={...it,lheading:Ke,table:at,paragraph:O(qe).replace(`hr`,Ve).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,at).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Qe).getRegex()},st={...it,html:O(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,$e).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Pe,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:O(qe).replace(`hr`,Ve).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Ge).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},ct=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,lt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ut=/^( {2,}|\\)\n(?!\s*$)/,dt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ft=/[\p{P}\p{S}]/u,pt=/[\s\p{P}\p{S}]/u,mt=/[^\s\p{P}\p{S}]/u,ht=O(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,pt).getRegex(),gt=/[\p{Pi}\p{Ps}"']/u,_t=/(?!~)[\p{P}\p{S}]/u,vt=/(?!~)[\s\p{P}\p{S}]/u,yt=/(?:[^\s\p{P}\p{S}]|~)/u,bt=O(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Ie?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),xt=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,St=O(xt,`u`).replace(/punct/g,ft).getRegex(),Ct=O(xt,`u`).replace(/punct/g,_t).getRegex(),wt=O(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,gt).replace(/punct/g,ft).getRegex(),Tt=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Et=O(Tt,`gu`).replace(/notPunctSpace/g,mt).replace(/punctSpace/g,pt).replace(/punct/g,ft).getRegex(),Dt=O(Tt,`gu`).replace(/notPunctSpace/g,yt).replace(/punctSpace/g,vt).replace(/punct/g,_t).getRegex(),Ot=O(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,mt).replace(/punctSpace/g,pt).replace(/punct/g,ft).getRegex(),k=O(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,mt).replace(/punctSpace/g,pt).replace(/punct/g,ft).getRegex(),kt=O(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,mt).replace(/punctSpace/g,pt).replace(/punct/g,ft).getRegex(),At=O(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,ft).getRegex(),jt=O(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,mt).replace(/punctSpace/g,pt).replace(/punct/g,ft).getRegex(),Mt=O(/\\(punct)/,`gu`).replace(/punct/g,ft).getRegex(),Nt=O(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Pt=O($e).replace(`(?:-->|$)`,`-->`).getRegex(),Ft=O(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Pt).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),It=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Lt=O(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,It).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Rt=O(/^!?\[(label)\]\[(ref)\]/).replace(`label`,It).replace(`ref`,Ye).getRegex(),zt=O(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Ye).getRegex(),Bt=O(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Rt).replace(`nolink`,zt).getRegex(),Vt=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ht={_backpedal:Pe,anyPunctuation:Mt,autolink:Nt,blockSkip:bt,br:ut,code:lt,del:Pe,delLDelim:Pe,delRDelim:Pe,emStrongLDelim:St,emStrongRDelimAst:Et,emStrongRDelimUnd:k,escape:ct,link:Lt,nolink:zt,punctuation:ht,reflink:Rt,reflinkSearch:Bt,tag:Ft,text:dt,url:Pe},Ut={...Ht,emStrongLDelim:wt,emStrongRDelimAst:Ot,emStrongRDelimUnd:kt,link:O(/^!?\[(label)\]\((.*?)\)/).replace(`label`,It).getRegex(),reflink:O(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,It).getRegex()},Wt={...Ht,emStrongRDelimAst:Dt,emStrongLDelim:Ct,delLDelim:At,delRDelim:jt,url:O(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Vt).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:O(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Vt).getRegex()},Gt={...Wt,br:O(ut).replace(`{2,}`,`*`).getRegex(),text:O(Wt.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Kt={normal:it,gfm:ot,pedantic:st},qt={normal:Ht,gfm:Wt,breaks:Gt,pedantic:Ut},Jt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Yt=e=>Jt[e];function Xt(e,t){if(t){if(Le.escapeTest.test(e))return e.replace(Le.escapeReplace,Yt)}else if(Le.escapeTestNoEncode.test(e))return e.replace(Le.escapeReplaceNoEncode,Yt);return e}function Zt(e){try{e=encodeURI(e).replace(Le.percentDecode,`%`)}catch{return null}return e}function Qt(e,t){let n=e.replace(Le.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Le.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(Le.slashPipe,`|`);return n}function $t(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function en(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Le.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function tn(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function nn(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function rn(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function an(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var on=class{options;rules;lexer;constructor(e){this.options=e||Me}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:en(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=an(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=$t(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:$t(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:$t(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=$t(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s,n=`${n}
${a}`,r=r.substring(0,r.length-t.text.length)+s.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=nn(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=en(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:$t(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Qt(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:$t(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Qt(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:$t(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=$t(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=tn(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),rn(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return rn(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}else if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},sn=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Me,this.options.tokenizer=this.options.tokenizer||new on,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:Le,block:Kt.normal,inline:qt.normal};this.options.pedantic?(t.block=Kt.pedantic,t.inline=qt.pedantic):this.options.gfm&&(t.block=Kt.gfm,this.options.breaks?t.inline=qt.breaks:t.inline=qt.gfm),this.tokenizer.rules=t}static get rules(){return{block:Kt,inline:qt}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Le.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Le.tabCharGlobal,`    `).replace(Le.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);e.length>0&&(n=n.replace(this.tokenizer.rules.inline.reflinkSearch,t=>e.includes(t.slice(t.lastIndexOf(`[`)+1,-1))?`[`+`a`.repeat(t.length-2)+`]`:t))}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,`++`),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},cn=class{options;parser;constructor(e){this.options=e||Me}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Le.notSpaceStart)?.[0],i=e.replace(Le.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Xt(r)+`">`+(n?i:Xt(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Xt(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Xt(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Zt(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Xt(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Zt(e);if(i===null)return Xt(n);e=i;let a=`<img src="${e}" alt="${Xt(n)}"`;return t&&(a+=` title="${Xt(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Xt(e.text)}},ln=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},un=class e{options;renderer;textRenderer;constructor(e){this.options=e||Me,this.options.renderer=this.options.renderer||new cn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ln}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},dn=class{options;block;constructor(e){this.options=e||Me}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?sn.lex:sn.lexInline}provideParser(e=this.block){return e?un.parse:un.parseInline}},fn=new class{defaults=je();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=un;Renderer=cn;TextRenderer=ln;Lexer=sn;Tokenizer=on;Hooks=dn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new cn(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new on(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new dn;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];dn.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&dn.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return sn.lex(e,t??this.defaults)}parser(e,t){return un.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?sn.lex:sn.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?un.parse:un.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?sn.lex:sn.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?un.parse:un.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Xt(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function A(e,t){return fn.parse(e,t)}A.options=A.setOptions=function(e){return fn.setOptions(e),A.defaults=fn.defaults,Ne(A.defaults),A},A.getDefaults=je,A.defaults=Me;function pn(...e){return fn.use(...e),A.defaults=fn.defaults,Ne(A.defaults),A}A.use=pn,A.walkTokens=function(e,t){return fn.walkTokens(e,t)},A.parseInline=fn.parseInline,A.Parser=un,A.parser=un.parse,A.Renderer=cn,A.TextRenderer=ln,A.Lexer=sn,A.lexer=sn.lex,A.Tokenizer=on,A.Hooks=dn,A.parse=A,A.options,A.setOptions,A.walkTokens,A.parseInline,un.parse,sn.lex;var mn={"0001_two_sum":`# 1. Two Sum

## Problem

Given an array of integers and a target, return the indexes of two different
elements whose values add to the target. The problem guarantees exactly one
answer.

\`\`\`text
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
\`\`\`

[LeetCode problem](https://leetcode.com/problems/two-sum/)

## What pattern is this?

This is a **one-pass hash lookup** problem. The phrase “find a pair that adds
to a target” suggests looking for each number's complement:

\`\`\`text
complement = target - current number
\`\`\`

Use this pattern when you need the original indexes and the input is not known
to be sorted. If the array were sorted, opposing two pointers would avoid the
extra hash.

## Brute-force baseline

Try every pair with two nested loops. That takes \`O(n²)\` time and \`O(1)\`
auxiliary space. It is simple, but it repeats work: after inspecting a value,
we later scan past many of the same values again.

## Solution: remember values already seen

<details>
<summary>Reveal explanation</summary>

Walk through the array once. Before storing the current value, ask whether the
hash already contains the value needed to complete the target.

\`\`\`ruby
seen = {}

nums.each_with_index do |number, index|
  complement = target - number
  return [seen[complement], index] if seen.key?(complement)

  seen[number] = index
end
\`\`\`

Checking before storing matters. For \`[3, 3]\` with target \`6\`, the first \`3\`
is stored at index \`0\`; the second finds it and returns \`[0, 1]\`. A single
element can never match itself.

### Key invariant

> Before processing index \`i\`, \`seen\` maps each value in indexes \`0...i\` to an
> index where that value occurred.

Therefore, a complement found in \`seen\` always comes from an earlier, distinct
index.

## Worked example

For \`nums = [3, 2, 4]\` and target \`6\`:

| Index | Number | Complement | Seen before check | Action |
| ---: | ---: | ---: | --- | --- |
| 0 | 3 | 3 | \`{}\` | Store \`3 → 0\` |
| 1 | 2 | 4 | \`{3: 0}\` | Store \`2 → 1\` |
| 2 | 4 | 2 | \`{3: 0, 2: 1}\` | Return \`[1, 2]\` |

## Correctness

If the method returns indexes, their values sum to the target by the definition
of \`complement\`, and the indexes differ because the stored index is earlier.
For the guaranteed solution \`(i, j)\` where \`i < j\`, value \`nums[i]\` is in the
hash when index \`j\` is processed, so the method must find and return that pair.

## Complexity

- **Time:** \`O(n)\` average case; each value gets one hash lookup and insertion.
- **Auxiliary space:** \`O(n)\` for the hash in the worst case.

## Edge cases worth testing

- Two equal values at different indexes, such as \`[3, 3]\`
- Negative values and a zero target
- The answer at the beginning or end of the array
- A two-element input

## Optional refinements

- Return \`nil\` explicitly after the loop if using this outside LeetCode, where a
  solution may not exist.
- Preserve the first index for duplicate values with \`seen[number] ||= index\`.
  It is unnecessary under the exactly-one-solution constraint.

</details>
`,"0003_longest_substring":`# 3. Longest Substring Without Repeating Characters

## Problem

Return the length of the longest contiguous substring whose characters are all
different.

\`\`\`text
Input:  "pwwkew"
Output: 3
Why:    "wke" is valid; "pwke" is not contiguous.
\`\`\`

[LeetCode problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## What pattern is this?

This is a **variable-size sliding window** with a hash of last-seen indexes.
Use it when a contiguous range must satisfy a rule and the right boundary can
expand while the left boundary moves forward to restore that rule.

Do not use a sliding window when removing items from the left cannot
predictably repair the condition—for example, arbitrary negative numbers often
break sum-based windows.

## Brute-force baseline

Generate every substring and test whether its characters are unique. There are
\`O(n²)\` substrings and a uniqueness check can cost \`O(n)\`, for \`O(n³)\` time.
Growing each start position until the first repeat improves this to \`O(n²)\`.

## Solution: jump the left boundary past repeats

<details>
<summary>Reveal explanation</summary>

Keep an inclusive window \`[left, right]\` with no repeated character. The hash
maps each character to its most recent index.

When \`s[right]\` was last seen inside the current window, that old occurrence
and the new one cannot coexist. Move \`left\` directly to one index after the old
occurrence:

\`\`\`ruby
left = previous_index + 1
\`\`\`

If the old occurrence lies before \`left\`, ignore it. This is why \`left\` never
moves backward.

### Key invariant

> After adjusting \`left\` for \`s[right]\`, every character in \`s[left..right]\`
> is unique.

The current valid length is therefore \`right - left + 1\`.

## Worked example

For \`"abba"\`:

| Right | Character | Previous index | Left after update | Window |
| ---: | --- | ---: | ---: | --- |
| 0 | \`a\` | — | 0 | \`a\` |
| 1 | \`b\` | — | 0 | \`ab\` |
| 2 | \`b\` | 1 | 2 | \`b\` |
| 3 | \`a\` | 0 | 2 | \`ba\` |

At the final \`a\`, index \`0\` is outside the current window, so moving \`left\`
back to \`1\` would be wrong.

## Correctness

Whenever a repeated character enters, moving \`left\` past its previous in-window
occurrence removes the only duplicate involving the new character. All other
characters were already unique. Thus every measured window is valid. Because
\`right\` visits every ending index and \`left\` is the earliest valid start for
that ending index, the maximum measured length is globally optimal.

## Complexity

- **Time:** \`O(n)\`; \`right\` visits each character once and \`left\` only advances.
- **Auxiliary space:** \`O(min(n, k))\`, where \`k\` is the character-set size.

## Edge cases worth testing

- Empty string → \`0\`
- One character
- Every character identical
- Every character unique
- A repeat outside the current window, such as \`"tmmzuxt"\`

## Optional refinements

The two explicit pointer variables make the window mechanics easy to discuss.
Ruby's \`each_char.with_index\` could replace the manual \`right\` loop without
changing the algorithm.

</details>
`,"0015_3sum":`# 15. 3Sum

## Problem

Given an integer array \`nums\`, return every unique triplet whose three values
sum to zero.

The three values must come from different indexes, and the result must not
contain duplicate value triplets.

\`\`\`text
Input:  [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
\`\`\`

[LeetCode problem](https://leetcode.com/problems/3sum/)

## What pattern is this?

This is an example of:

- **Sorting to create useful order**
- **Reducing 3Sum to repeated 2Sum II searches**
- **Opposing two pointers**
- **Skipping duplicates in sorted input**

The problem looks like it needs three nested loops: try every possible triplet.
That brute-force approach takes \`O(n³)\` time.

Sorting lets us fix one value—the **anchor**—and find the other two values with
a linear two-pointer scan. We repeat that scan for each possible anchor, which
reduces the total time to \`O(n²)\`.

## Brute-force baseline

Try every three-index combination with three nested loops, add triplets whose
sum is zero, and normalize them to remove duplicates. This takes \`O(n³)\` time
before deduplication and up to \`O(n²)\` output storage. A hash-based 2Sum search
for every anchor can reach \`O(n²)\` time too, but duplicate control is less
natural than it is after sorting.

## Solution: sort, anchor, then use two pointers

<details>
<summary>Reveal explanation</summary>

### 1. Sort the values

\`\`\`ruby
sorted = nums.sort
\`\`\`

Sorting is the leverage. For any fixed anchor, it tells us how to adjust a pair:

- If the total is too small, move \`left\` right to get a larger value.
- If the total is too large, move \`right\` left to get a smaller value.
- If the total is zero, record the triplet and move both pointers inward.

Without sorted order, those pointer movements would not be safe.

\`sort\` also leaves the caller's \`nums\` array unchanged.

### 2. Fix one anchor

For each index \`idx\`, treat \`sorted[idx]\` as the first value of the triplet.
The other two values must come from the suffix after it:

\`\`\`text
anchor          remaining search space
sorted[idx]     sorted[idx + 1 ... end]
\`\`\`

Searching only after the anchor ensures that the algorithm never reuses its
index and never revisits an earlier combination in a different order.

### 3. Solve 2Sum on the suffix

Initialize opposing pointers around the remaining search space:

\`\`\`ruby
left = idx + 1
right = sorted.length - 1
\`\`\`

Then compare:

\`\`\`ruby
sum = num + sorted[left] + sorted[right]
\`\`\`

The important invariant is:

> At the start of each loop, any still-possible pair for this anchor lies
> between \`left\` and \`right\`, inclusive.

Why can we safely discard a pointer?

- When \`sum < 0\`, \`right\` already holds the largest available value. Keeping
  the same \`left\` and moving \`right\` inward could only make the sum smaller.
  Therefore this \`left\` value cannot work, so increment \`left\`.
- When \`sum > 0\`, \`left\` already holds the smallest available value. Keeping
  the same \`right\` and moving \`left\` inward could only make the sum larger.
  Therefore this \`right\` value cannot work, so decrement \`right\`.

Each pointer only moves inward, so one 2Sum scan is \`O(n)\`.

### 4. Prevent duplicate triplets

There are two places duplicates could enter the result.

#### Duplicate anchors

After sorting, equal anchor values are adjacent. The solution skips an anchor
when it is the same as the previous anchor, because it would generate the same
triplets again.

#### Duplicate pairs after a match

After recording a triplet, the solution moves both pointers inward and skips
repeated \`left\` values.

That is enough for this implementation. For a fixed anchor and fixed left
value, the required right value is uniquely determined:

\`\`\`text
right value = 0 - anchor - left value
\`\`\`

So skipping repeated left values prevents the same value triplet from being
added twice. Many implementations also skip duplicate right values explicitly;
that is valid but not required for correctness here.

## Worked example

\`\`\`text
Input:  [-1, 0, 1, 2, -1, -4]
Sorted: [-4, -1, -1, 0, 1, 2]
\`\`\`

Using the first \`-1\` as the anchor:

| Anchor | Left | Right | Sum | Action |
| ---: | ---: | ---: | ---: | --- |
| -1 | -1 | 2 | 0 | Record \`[-1, -1, 2]\`; move both |
| -1 | 0 | 1 | 0 | Record \`[-1, 0, 1]\`; move both |

The second \`-1\` is skipped as a duplicate anchor. No other anchor produces a
new triplet.

## Correctness

For each distinct anchor, the two-pointer loop finds every valid pair:

1. A sum below zero safely eliminates the current left value.
2. A sum above zero safely eliminates the current right value.
3. A sum equal to zero records a valid triplet before both pointers advance.
4. The loop ends only when no pair remains between the pointers.

Because duplicate anchors and duplicate left values after a match are skipped,
each value triplet is recorded exactly once.

## Complexity

- **Time:** \`O(n²)\`
  - Sorting costs \`O(n log n)\`.
  - Up to \`n\` anchors each perform an \`O(n)\` two-pointer scan.
  - \`O(n log n + n²)\` simplifies to \`O(n²)\`.
- **Auxiliary space:** \`O(n)\` in this Ruby implementation, excluding output.
  - \`nums.sort\` creates the \`sorted\` copy.
  - The result can itself contain up to \`O(n²)\` triplets, but output storage is
    normally excluded from auxiliary-space analysis.

## Edge cases worth testing

- Fewer than three values → \`[]\`
- No matching triplet → \`[]\`
- All zeros → one \`[[0, 0, 0]]\`, not duplicates
- Many repeated values
- All positive or all negative values
- The input array remains unchanged

## Optional refinements

The implementation is correct as written. Two small refinements could make its
intent clearer or reduce unnecessary work:

- Stop once the anchor is positive. In a sorted array, three values at or after
  a positive anchor cannot sum to zero.
- Express the duplicate-anchor guard as \`idx.positive? && num == sorted[idx - 1]\`
  so the index boundary is checked before reading the previous value.

</details>
`,"0020_valid_parentheses":`# 20. Valid Parentheses

## Problem

Given a string containing only \`()[]{}\`, determine whether every opening
bracket is closed by the same type in the correct nested order.

\`\`\`text
"{([])}" → true
"([)]"   → false
\`\`\`

[LeetCode problem](https://leetcode.com/problems/valid-parentheses/)

## What pattern is this?

This is a **stack for nested matching**. A closing bracket must match the most
recent unmatched opener, which is exactly last-in, first-out behavior.

Use a stack for nested scopes, undo histories, expression parsing, or DFS. Do
not use one when items must be processed oldest-first; that calls for a queue.

## Brute-force baseline

Repeatedly remove adjacent valid pairs—\`()\`, \`[]\`, and \`{}\`—until none remain.
The string is valid if it becomes empty. Rebuilding or scanning the string on
each round can take \`O(n²)\` time.

## Solution: match each closer with the stack top

<details>
<summary>Reveal explanation</summary>

Store opening brackets on a stack. For a closing bracket, pop the most recent
opener and use a hash to find which closer it requires:

\`\`\`ruby
pairs = { '(' => ')', '[' => ']', '{' => '}' }
\`\`\`

If the stack is empty, \`stack.pop\` returns \`nil\`; \`pairs[nil]\` cannot equal a
valid closer, so a leading or extra closer correctly returns \`false\`.

### Key invariant

> After each processed character, the stack contains exactly the unmatched
> opening brackets, in the order they must eventually close.

The string is valid only if no comparison fails and the stack is empty at the
end. A nonempty stack represents missing closing brackets.

## Worked example

For \`"{[]}"\`:

| Character | Action | Stack afterward |
| --- | --- | --- |
| \`{\` | append opener | \`['{']\` |
| \`[\` | append opener | \`['{', '[']\` |
| \`]\` | pop \`[\`; it expects \`]\` | \`['{']\` |
| \`}\` | pop \`{\`; it expects \`}\` | \`[]\` |

## Correctness

Every closer is compared with the only opener that could legally match it: the
most recently opened, not-yet-closed bracket. A mismatch proves the nesting is
invalid. If every closer matches and no opener remains, all brackets form
correctly typed, correctly ordered pairs, so the string is valid.

## Complexity

- **Time:** \`O(n)\`; each character is appended and popped at most once.
- **Auxiliary space:** \`O(n)\` for an all-openers input.

## Edge cases worth testing

- Empty input → \`true\`
- A single opener or closer
- Correctly nested mixed brackets
- Correct pairs in the wrong nesting order
- Extra closing or opening brackets

## Optional refinements

An alternative hash can map closers to openers. Then \`if pairs.key?(char)\`
explicitly distinguishes closers from openers. The current direction keeps the
comparison compact and is equally correct under the problem's input contract.

</details>
`,"0021_merge_two_sorted_lists":`# 21. Merge Two Sorted Lists

## Problem

Merge two ascending singly linked lists into one ascending list by relinking
their existing nodes.

\`\`\`text
1 → 2 → 4
1 → 3 → 4

becomes 1 → 1 → 2 → 3 → 4 → 4
\`\`\`

[LeetCode problem](https://leetcode.com/problems/merge-two-sorted-lists/)

## What pattern is this?

This is a **two-pointer merge** over sorted inputs, plus a **dummy head** to
remove the special case for constructing the first output node. It is the merge
step from merge sort.

Use it when two sources are already sorted. If the inputs are not sorted,
advancing the smaller head does not guarantee global order.

## Brute-force baseline

Copy all values to an array, sort them, and build a new list. That costs
\`O((m+n) log(m+n))\` time and \`O(m+n)\` extra storage, and it ignores the useful
ordering already present.

## Solution: repeatedly splice the smaller head

<details>
<summary>Reveal explanation</summary>

\`list1\` and \`list2\` point to the first unused node of each input. \`tail\` points
to the last node in the merged prefix. Compare the two current values, attach
the smaller node to \`tail.next\`, advance that input, and then advance \`tail\`.

The dummy \`prehead\` is not part of the answer. It gives \`tail\` a real node to
start from; return \`prehead.next\` afterward.

\`\`\`ruby
while list1 && list2
  if list1.val <= list2.val
    tail.next = list1
    list1 = list1.next
  else
    tail.next = list2
    list2 = list2.next
  end
  tail = tail.next
end
\`\`\`

When one list ends, append the other list wholesale. Its nodes are already in
order and all are at least as large as the merged prefix.

### Key invariant

> Before each comparison, the nodes through \`tail\` are the sorted merge of all
> consumed nodes, while \`list1\` and \`list2\` are the first unconsumed nodes.

## Worked example

For \`1 → 2 → 4\` and \`1 → 3 → 4\`, the chosen heads are:

\`\`\`text
list1's 1, list2's 1, list1's 2, list2's 3, list1's 4
\`\`\`

At that point \`list1\` is empty, so the final \`4\` from \`list2\` is attached as
the remainder.

## Correctness

At every step, the smaller of the two unconsumed heads is the smallest value
remaining anywhere in either list, because both suffixes are sorted. Appending
it preserves sorted order and cannot skip a smaller node. When one input ends,
the sorted remainder completes the merge. Thus every original node appears
once in nondecreasing order.

## Complexity

- **Iterative time:** \`O(m+n)\`; each node is consumed once.
- **Iterative auxiliary space:** \`O(1)\`; the method relinks existing nodes.
- **Recursive time:** \`O(m+n)\`.
- **Recursive auxiliary space:** \`O(m+n)\` in the worst case for call frames.

The returned list is output, not auxiliary storage.

## Edge cases worth testing

- Both lists empty
- One list empty
- Equal head values
- Lists of very different lengths
- All values from one list precede the other

## Optional refinements

The iterative version is generally preferable in Ruby because a long list can
overflow the call stack in the recursive version. Both implementations mutate
the input lists' \`next\` pointers, as the problem explicitly permits.

</details>
`,"0033_search_rotated_array":`# 33. Search in Rotated Sorted Array

## Problem

An ascending array of distinct values was rotated at an unknown point. Return
the index of a target, or \`-1\` if absent, in \`O(log n)\` time.

\`\`\`text
Input:  nums = [4, 5, 6, 7, 0, 1, 2], target = 0
Output: 4
\`\`\`

[LeetCode problem](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## What pattern is this?

This is **modified binary search**. Rotation destroys global sorted order, but
with distinct values at least one half around the midpoint is always sorted.
Identify that half, decide whether the target lies inside its value range, and
discard the other half.

Use this only when the input has the promised rotated-sorted structure. Heavy
duplication requires extra handling because equal boundary values can make the
sorted half ambiguous.

## Brute-force baseline

Scan every value until finding the target. This is \`O(n)\` time and \`O(1)\`
space, but does not meet the required logarithmic runtime.

## Solution: find the sorted half on every iteration

<details>
<summary>Reveal explanation</summary>

With midpoint \`pivot\`:

- If \`nums[pivot] >= nums[left]\`, the left half is sorted.
- Otherwise, the right half is sorted.

For the sorted half, ordinary range checks tell whether the target is inside.
Keep that half if so; otherwise keep the other half. Use one inclusive and one
exclusive boundary around \`pivot\` so the already-checked midpoint is removed.

\`\`\`ruby
if nums[pivot] >= nums[left]
  target_in_sorted_half = target >= nums[left] && target < nums[pivot]
else
  target_in_sorted_half = target > nums[pivot] && target <= nums[right]
end
\`\`\`

### Key invariant

> If the target exists, its index is inside the inclusive search interval
> \`[left, right]\` at the start of each loop.

Each branch keeps exactly the half whose values can contain the target, so the
invariant is preserved while the interval strictly shrinks.

## Worked example

Search for \`0\` in \`[4, 5, 6, 7, 0, 1, 2]\`:

| Left | Pivot | Right | Observation | Next interval |
| ---: | ---: | ---: | --- | --- |
| 0 (\`4\`) | 3 (\`7\`) | 6 (\`2\`) | Left half sorted; \`0\` not in \`[4, 7)\` | \`[4, 6]\` |
| 4 (\`0\`) | 5 (\`1\`) | 6 (\`2\`) | Left half sorted; \`0\` in \`[0, 1)\` | \`[4, 4]\` |
| 4 | 4 | 4 | Found \`0\` | return \`4\` |

## Correctness

At least one half is sorted. If the target falls within that half's boundary
values, only that half can contain it; otherwise that half can safely be
discarded. If the target lies in the unsorted half, the complementary branch
keeps it. Therefore no possible target index is removed. The interval shrinks
until the target is found or becomes empty, which correctly means absent.

## Complexity

- **Time:** \`O(log n)\`; each iteration discards about half the interval.
- **Auxiliary space:** \`O(1)\`.

## Edge cases worth testing

- One-element array, target present or absent
- Array not rotated
- Rotation by one position
- Target at either boundary
- Every rotation checked against a linear search

## Optional refinements

Naming the midpoint \`mid\` is more conventional than \`pivot\`; the rotation pivot
is a different concept. The implementation is otherwise the standard one-pass
binary search and does not need to locate the rotation point first.

</details>
`,"0039_combination_sum":`# 39. Combination Sum

## Problem

Given distinct positive candidate values and a target, return every unique
combination that sums to the target. A candidate may be reused any number of
times, and combination order does not matter.

\`\`\`text
Input:  candidates = [2, 3, 6, 7], target = 7
Output: [[7], [2, 2, 3]]
\`\`\`

[LeetCode problem](https://leetcode.com/problems/combination-sum/)

## What pattern is this?

This is **backtracking / depth-first search over choices**. Each recursive state
records the remaining target, the earliest candidate index allowed next, and
the current combination.

Use backtracking when asked to enumerate combinations under constraints. Do
not use it when only the count or best score is needed and overlapping states
can be summarized by dynamic programming.

## Brute-force baseline

Generate every sequence of candidates up to length \`target / min_candidate\`,
then retain sequences that sum to the target and deduplicate permutations.
This explores redundant orderings such as \`[2, 3, 2]\` and \`[3, 2, 2]\`.

## Solution: search only nondecreasing combinations

<details>
<summary>Reveal explanation</summary>

Sort a copy of the candidates. From a state whose \`start\` index is \`i\`, allow
the next choice only from indexes \`i...end\`:

\`\`\`ruby
current.append(candidate)
build_combinations(candidates, remaining - candidate, index, current, result)
current.pop
\`\`\`

Passing \`i\`, rather than \`i + 1\`, permits the chosen value to be reused. Never
returning to an earlier index makes each generated combination nondecreasing,
so different permutations of the same multiset never appear.

Sorting also permits pruning: when adding a candidate exceeds the target, all
later candidates are at least as large, so the loop can \`break\`.

### State invariant

> Every recursive state contains a nondecreasing combination whose values sum
> to \`target - remaining\`; any future value must come from \`start\` or later.

## Worked example

For candidates \`[2, 3, 6, 7]\` and target \`7\`, the branch beginning with \`2\`
can produce:

\`\`\`text
[] → [2] → [2, 2] → [2, 2, 3] ✓
\`\`\`

Once \`3\` is chosen, that branch cannot go back to \`2\`, so \`[2, 3, 2]\` is never
generated. The independent branch \`[7]\` also reaches the target.

## Correctness

Every recorded combination has the target sum because it is appended only when
\`remaining.zero?\`. It is unique because its candidate indexes never decrease,
giving each multiset exactly one order. Conversely, sort any valid combination
into nondecreasing order. The search offers each of those values in sequence,
allows reuse at the same index, and never prunes before the target, so it
reaches that combination.

## Complexity

Let \`N\` be the number of candidates, \`T\` the target, and \`M\` the smallest
candidate.

- **Time:** output-sensitive and exponential, commonly bounded as
  \`O(N^(T/M))\` before accounting for copying each result.
- **Auxiliary space:** \`O(T/M)\` search depth for recursive backtracking. This
  implementation mutates one current path and undoes each choice after the
  recursive call.
- **Output:** up to the total size of all returned combinations; excluded from
  auxiliary-space claims.

## Edge cases worth testing

- No candidate can reach the target
- One candidate exactly equals the target
- Reusing one value many times
- Multiple combinations of different lengths
- Input order remains unchanged after sorting the copy

## Optional refinements

An explicit stack avoids recursion-depth limits but retains copied combinations
for pending branches and can therefore use much more auxiliary space. The
recursive version is usually easier to explain because it directly mirrors
“choose, explore, unchoose.”

</details>
`,"0046_permutations":`# 46. Permutations

## Problem

Given an array of distinct integers, return every possible ordering.

\`\`\`text
Input:  [1, 2, 3]
Output: six orderings, including [1, 2, 3], [1, 3, 2], …
\`\`\`

[LeetCode problem](https://leetcode.com/problems/permutations/)

## What pattern is this?

This is **backtracking over remaining choices**. At each depth, choose one
unused number, append it to the current ordering, and recursively arrange the
rest.

Use backtracking when all arrangements must be generated. If you need only the
number of permutations of \`n\` distinct values, the answer is simply \`n!\` and
enumerating them is unnecessary.

## Brute-force baseline

Generate every length-\`n\` sequence by allowing all \`n\` values at every position,
then reject sequences with repeats. That explores \`n^n\` candidates instead of
the \`n!\` valid permutations.

## Solution: track which indexes are already used

<details>
<summary>Reveal explanation</summary>

At each depth, try every unused index. Mark it, append that value to the current
path, recurse, then undo both mutations before trying the next choice.

\`\`\`ruby
used[index] = true
current.append(nums[index])
build_permutations(nums, used, current, result)
current.pop
used[index] = false
\`\`\`

The base case occurs when \`current.length == nums.length\`. Then \`current\`
contains a complete permutation, so append a copy to the output.

### State invariant

> \`current\` contains exactly the values whose indexes are marked in \`used\`, in
> their chosen order; all unmarked indexes remain available.

The LeetCode constraint that values are distinct means no duplicate-skipping
rule is needed. A duplicate-input variant would sort first and skip an equal
unused choice after the first occurrence at a depth.

## Worked example

Starting from \`[1, 2, 3]\`:

\`\`\`text
choose 1
  choose 2
    choose 3 → [1, 2, 3]
  choose 3
    choose 2 → [1, 3, 2]
choose 2
  …
\`\`\`

Each recursion level fixes one output position.

## Correctness

By the invariant, reaching a path of length \`n\` produces an ordering that uses
every original index exactly once, so every output is a valid permutation. At
each position the method tries every unused value, so any desired
permutation follows one unique sequence of choices and is generated. Distinct
inputs make those choice paths unique, preventing duplicate outputs.

## Complexity

- **Time:** \`O(n · n!)\`; there are \`n!\` outputs and copying each length-\`n\`
  permutation costs \`O(n)\`.
- **Auxiliary space:** \`O(n)\` for the recursion stack, \`used\`, and current path,
  excluding output.
- **Output space:** \`O(n · n!)\`, excluded from auxiliary space.

## Edge cases worth testing

- One value → one permutation
- Two values → two permutations
- Negative and zero values
- Input remains unchanged
- Empty input, if supported outside the stated constraints → \`[[]]\`

## Optional refinements

An in-place swap-based version has the same \`O(n)\` path-space bound and avoids
the \`used\` array, but requires careful swap-back logic. The explicit \`used\`
state is often easier to narrate in an interview.

</details>
`,"0053_maximum_subarray":`# 53. Maximum Subarray

## Problem

Return the largest sum of any nonempty contiguous subarray.

\`\`\`text
Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Why:    [4, -1, 2, 1] sums to 6.
\`\`\`

[LeetCode problem](https://leetcode.com/problems/maximum-subarray/)

## What pattern is this?

This is **Kadane's algorithm**, a one-dimensional dynamic program compressed to
two variables. At each value, choose whether to extend the best subarray ending
at the previous index or start fresh.

Use it for the best sum of a contiguous, nonempty range. It does not directly
solve noncontiguous subset-sum problems or constraints such as a fixed window
length.

## Brute-force baseline

Choose every start and end index and sum that range: \`O(n³)\` if each sum is
recomputed. Keeping a running sum for each start makes the included baseline
\`O(n²)\` time and \`O(1)\` auxiliary space.

## Solution: keep the best sum ending here

<details>
<summary>Reveal explanation</summary>

For each number \`n\`, any best subarray ending at this index has only two
possibilities:

1. Start at \`n\`.
2. Extend the best subarray ending immediately before \`n\`.

\`\`\`ruby
current_sub_array = [n, current_sub_array + n].max
max_sum = [max_sum, current_sub_array].max
\`\`\`

### State invariants

> \`current_sub_array\` is the maximum sum of a nonempty subarray ending at the
> current index.

> \`max_sum\` is the maximum sum of any nonempty subarray seen so far.

Initializing both from \`nums[0]\`, rather than zero, is essential for all-negative
inputs. For \`[-3, -1, -2]\`, the correct answer is \`-1\`, not an empty sum of \`0\`.

## Worked example

For \`[4, -1, 2, 1, -5]\`:

| Number | Best ending here | Best overall |
| ---: | ---: | ---: |
| 4 | 4 | 4 |
| -1 | 3 | 4 |
| 2 | 5 | 5 |
| 1 | 6 | 6 |
| -5 | 1 | 6 |

## Correctness

Every nonempty subarray ending at index \`i\` either starts at \`i\` or extends a
subarray ending at \`i-1\`. Extending anything except the maximum such prior
subarray cannot produce a better sum, so the recurrence computes the optimum
ending at every index. Taking the maximum of those endpoint optima covers every
contiguous subarray and therefore yields the global optimum.

## Complexity

- **Kadane time:** \`O(n)\`.
- **Kadane auxiliary space:** \`O(1)\`.
- **Included baseline time:** \`O(n²)\`.
- **Included baseline auxiliary space:** \`O(1)\`.

## Edge cases worth testing

- One value
- All negative values
- All positive values
- Zeros between positive ranges
- A large negative value that makes starting fresh better
- Compare exhaustive small arrays with the quadratic baseline

## Optional refinements

To return the range itself, track the tentative start whenever \`n\` wins over
\`current_sub_array + n\`, and save the best start/end whenever \`max_sum\`
improves.

</details>
`,"0056_merge_intervals":`# 56. Merge Intervals

## Problem

Merge every overlapping pair of closed intervals and return the non-overlapping
intervals covering the same ranges.

\`\`\`text
Input:  [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]
\`\`\`

[LeetCode problem](https://leetcode.com/problems/merge-intervals/)

## What pattern is this?

This is **sort, then sweep intervals**. Sorting by start time makes all
intervals that could overlap the current merged range appear consecutively.

Use it when input intervals may be unordered. If they are already sorted and
non-overlapping, as in Insert Interval, sorting is unnecessary and a linear
three-phase scan is better.

## Brute-force baseline

Repeatedly compare interval pairs, merge an overlapping pair, and restart until
no merge remains. The repeated searches and array changes can exceed \`O(n²)\`
and are difficult to reason about.

## Solution: sort by start and merge into the last result

<details>
<summary>Reveal explanation</summary>

Sort a copy. For each interval:

- If the output is empty or its start is greater than the previous merged end,
  it cannot overlap; append it.
- Otherwise, it overlaps or touches the previous range. Extend that range's
  end to the larger of the two ends.

\`\`\`ruby
if merged.empty? || interval[0] > merged[-1][1]
  merged.append(interval)
else
  merged[-1][1] = [merged[-1][1], interval[1]].max
end
\`\`\`

The code duplicates each nested interval before modifying an end, so the
caller's input array and its interval objects remain unchanged.

### Key invariant

> After processing the first \`i\` sorted intervals, \`merged\` is sorted,
> non-overlapping, and covers exactly the same points as those \`i\` intervals.

Only the last merged interval can overlap the next input: every earlier merged
interval ends before the last one starts.

## Worked example

For \`[[1, 3], [2, 6], [8, 10]]\`:

| Current interval | Previous result | Action | Result |
| --- | --- | --- | --- |
| \`[1, 3]\` | — | append | \`[[1, 3]]\` |
| \`[2, 6]\` | \`[1, 3]\` | overlap; extend to 6 | \`[[1, 6]]\` |
| \`[8, 10]\` | \`[1, 6]\` | gap; append | \`[[1, 6], [8, 10]]\` |

Closed intervals that touch, such as \`[1, 4]\` and \`[4, 5]\`, overlap at \`4\`.

## Correctness

Sorting ensures the next interval cannot overlap any earlier merged interval
without also overlapping the last one. If its start is after the last end,
there is a real gap, so appending preserves the invariant. Otherwise their
union is one interval from the existing start to the greater end. Inductively,
the final output is non-overlapping and covers exactly the input ranges.

## Complexity

- **Time:** \`O(n log n)\` for sorting plus \`O(n)\` for the sweep.
- **Auxiliary space:** \`O(n)\` for the sorted interval copies, excluding output.
- **Output:** up to \`O(n)\` intervals.

## Edge cases worth testing

- Empty input
- One interval
- Touching endpoints
- One interval fully contains another
- Every interval overlaps
- Input order and nested arrays remain unchanged

## Optional refinements

If mutating the input is explicitly allowed, \`sort!\` and reusing interval
objects can reduce allocations. The non-mutating version is safer as a default
and makes its side effects clear in an interview.

</details>
`,"0057_insert_interval":`# 57. Insert Interval

## Problem

Insert one interval into an ascending list of non-overlapping closed intervals.
Merge any overlaps so the result remains sorted and non-overlapping.

\`\`\`text
Input:  intervals = [[1, 3], [6, 9]], new_interval = [2, 5]
Output: [[1, 5], [6, 9]]
\`\`\`

[LeetCode problem](https://leetcode.com/problems/insert-interval/)

## What pattern is this?

This is an **ordered interval sweep in three phases**: intervals strictly
before, intervals overlapping, and intervals strictly after. The existing
sorted, non-overlapping guarantee is the leverage.

Use this form when inserting one range into normalized intervals. For many
unordered intervals, use Merge Intervals: sort everything first, then sweep.

## Brute-force baseline

Append the new interval and run the general Merge Intervals algorithm. It is
correct, but sorting raises the runtime to \`O(n log n)\` even though the input's
order already supplies everything needed.

## Solution: consume the three regions once

<details>
<summary>Reveal explanation</summary>

1. Append every interval whose end is strictly before the new start.
2. While the next interval starts at or before the new end, merge it into the
   new interval by taking the minimum start and maximum end.
3. Append the merged new interval, then append all remaining intervals.

\`\`\`ruby
while i < intervals.length && intervals[i][0] <= new_interval[1]
  new_interval[0] = [new_interval[0], intervals[i][0]].min
  new_interval[1] = [new_interval[1], intervals[i][1]].max
  i += 1
end
\`\`\`

The strict inequalities encode closed-interval overlap. If one interval ends
where the other starts, they share a point and must merge.

The implementation duplicates \`new_interval\` before extending it, preserving
the caller's array.

### Key invariant

> Before phase 2, output contains exactly the intervals strictly before the
> insertion. During phase 2, \`new_interval\` is the union of the original new
> interval and every consumed overlapping interval.

Because the input is sorted and non-overlapping, once an interval begins after
the merged end, every later interval does too.

## Worked example

Insert \`[4, 8]\` into \`[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]\`:

\`\`\`text
before:  [1, 2]
merge:   [4, 8] + [3, 5] + [6, 7] + [8, 10] → [3, 10]
after:   [12, 16]
result:  [[1, 2], [3, 10], [12, 16]]
\`\`\`

## Correctness

Phase 1 appends exactly the intervals that cannot overlap the new interval.
Phase 2 consumes every overlap and replaces them with their exact union. Since
starts are ordered, the first unconsumed interval after phase 2 and all later
ones lie strictly after that union. Appending those preserves order and
non-overlap, and no input coverage is lost or added.

## Complexity

- **Time:** \`O(n)\`; each existing interval is consumed once.
- **Auxiliary space:** \`O(1)\` excluding the returned array; only one interval
  copy and scalar indexes are used.
- **Output:** \`O(n)\` and required by the return value.

## Edge cases worth testing

- Empty input
- New interval before or after every existing interval
- New interval contained by an existing interval
- New interval covers multiple intervals
- Touching endpoints
- Caller-provided \`new_interval\` remains unchanged

## Optional refinements

The file retains an older \`insert_v1\` for comparison, but the three \`while\`
loops in \`insert\` map directly to the proof and are the clearer interview
solution.

</details>
`,"0067_add_binary":`# 67. Add Binary

## Problem

Add two nonempty strings containing binary digits and return the sum as a
binary string.

\`\`\`text
Input:  a = "1010", b = "1011"
Output: "10101"
\`\`\`

[LeetCode problem](https://leetcode.com/problems/add-binary/)

## What pattern is this?

The interview pattern is **right-to-left digit simulation with a carry**, the
same method used for Add Strings. It works without converting the entire input
to an integer, so it also transfers to languages with fixed-width integers.

## Brute-force baseline

Ruby can parse and format base two directly:

\`\`\`ruby
(a.to_i(2) + b.to_i(2)).to_s(2)
\`\`\`

That is concise and included as \`add_binary_built_in\`, but it delegates the
interesting addition work to the language and may not satisfy an interviewer's
intent.

## Solution: simulate one column at a time

<details>
<summary>Reveal explanation</summary>

Start at the final character of both strings. At each step, add the available
digits and the incoming carry:

\`\`\`ruby
total = carry
total += a.getbyte(left) - 48 if left >= 0
total += b.getbyte(right) - 48 if right >= 0
digits.append((total % 2).to_s)
carry = total / 2
\`\`\`

\`total % 2\` is the output bit for that column and \`total / 2\` is the carry for
the column to its left. The digits are produced right-to-left, so reverse them
once at the end.

### Key invariant

> Before each iteration, \`digits\` contains the correct completed suffix in
> reverse order, and \`carry\` is exactly what must enter the next column.

## Worked example

For \`11₂ + 1₂\`:

| column | digit A | digit B | carry in | output | carry out |
| --- | --- | --- | --- | --- | --- |
| right | 1 | 1 | 0 | 0 | 1 |
| left | 1 | 0 | 1 | 0 | 1 |
| extra | 0 | 0 | 1 | 1 | 0 |

The result is \`100₂\`.

## Correctness

For each column, integer division and remainder split the column total into its
correct output bit and carry. Thus the invariant is preserved while the
pointers move left. When both strings and the carry are exhausted, every column
has been produced correctly. Reversing the accumulated suffix returns the
correct binary sum.

## Complexity

Let \`L = max(a.length, b.length)\`.

- **Time:** \`O(L)\`; each input character is read once, followed by one reversal.
- **Space:** \`O(L)\` for the returned digits and Ruby's construction buffer.

## Edge cases worth testing

- \`"0" + "0"\`
- Different input lengths
- A carry across every digit, such as \`"1111" + "1"\`
- No carries
- Very long inputs

## Optional refinements

The included \`add_binary_no_addition\` alternate uses repeated XOR for sum bits
and shifted AND for carries. It is a useful bit-manipulation exercise, but in
Ruby its arbitrary-precision operations can make a long carry chain \`O(L²)\`;
the digit simulation is the clearer interview default.

</details>
`,"0070_climbing_stairs":`# 70. Climbing Stairs

## Problem

Starting below a staircase of \`n\` steps, count the distinct sequences of one-
and two-step moves that land exactly at the top.

\`\`\`text
Input:  n = 4
Output: 5
Why:    1111, 112, 121, 211, 22
\`\`\`

[LeetCode problem](https://leetcode.com/problems/climbing-stairs/)

## What pattern is this?

This is **one-dimensional dynamic programming** with the Fibonacci recurrence.
The last move to step \`i\` came from either step \`i-1\` or \`i-2\`, so:

\`\`\`text
ways(i) = ways(i - 1) + ways(i - 2)
\`\`\`

Use DP when a problem asks for a count or optimum built from repeated smaller
states. Plain recursion repeats the same subproblems exponentially.

## Brute-force baseline

Build a binary recursion tree: from each position, try a one-step and a two-step
move. Its time is approximately \`O(2^n)\` because it recomputes counts for the
same remaining step many times; recursion depth is \`O(n)\`.

## Solution: cache each smaller answer

<details>
<summary>Reveal explanation</summary>

Seed the known values:

\`\`\`ruby
cache = [0, 1, 2]
\`\`\`

Then append the sum of the previous two entries until index \`n\` exists. The
top-down version uses the same recurrence with memoization, calculating a state
only when its cache entry is absent.

### State invariant

> After filling index \`i\`, \`cache[j]\` is the exact number of ways to reach step
> \`j\` for every \`j <= i\`.

The value at index zero is not used as the usual Fibonacci base case here;
LeetCode constrains \`n >= 1\`, and \`[1, 2]\` are the meaningful seeds.

## Worked example

For \`n = 5\`:

| Step | Ways | From |
| ---: | ---: | --- |
| 1 | 1 | one \`1\` move |
| 2 | 2 | \`11\`, \`2\` |
| 3 | 3 | ways(2) + ways(1) |
| 4 | 5 | ways(3) + ways(2) |
| 5 | 8 | ways(4) + ways(3) |

## Correctness

Every path to step \`i\` ends with exactly one of two disjoint cases: a one-step
move from \`i-1\`, or a two-step move from \`i-2\`. There are \`ways(i-1)\` paths in
the first case and \`ways(i-2)\` in the second. Adding them counts every valid
path exactly once. The seeded values are correct, so induction proves every
computed cache entry, including \`cache[n]\`, is correct.

## Complexity

- **Bottom-up time:** \`O(n)\`.
- **Bottom-up auxiliary space:** \`O(n)\` for the cache.
- **Memoized recursive time:** \`O(n)\`; each state is calculated once.
- **Memoized recursive auxiliary space:** \`O(n)\` for cache and call stack.

## Edge cases worth testing

- \`n = 1\`
- \`n = 2\`
- Several values that expose the recurrence
- The largest allowed \`n\`

## Optional refinements

Bottom-up storage can be reduced to \`O(1)\` by keeping only \`previous\` and
\`current\`, since calculating the next value never needs older entries. That is
the best choice if the interviewer asks for optimized space.

</details>
`,"0076_min_window_substring":`# 76. Minimum Window Substring

## Problem

Return the shortest substring of \`s\` that contains every character of \`t\`,
including duplicate requirements. Return \`""\` if no such window exists.

\`\`\`text
Input:  s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
\`\`\`

[LeetCode problem](https://leetcode.com/problems/minimum-window-substring/)

## What pattern is this?

This is a **variable-size sliding window with frequency counts**. Expand the
right boundary until the window satisfies all requirements, then contract the
left boundary while it remains valid to find the shortest version.

Use this when the condition is monotonic: adding characters cannot invalidate a
valid coverage window, and removing characters is the only way to lose
coverage. It is not a fit for arbitrary noncontiguous subsequences.

## Brute-force baseline

Enumerate all \`O(s.length²)\` substrings and compare each frequency map with
\`t\`, costing up to \`O(s.length³ + t.length)\` overall. Even stopping at the first
valid end for each start remains quadratic.

## Solution: expand to valid, contract to minimal

<details>
<summary>Reveal explanation</summary>

\`needed\` stores the required count per target character. \`window\` stores current
counts. Instead of comparing both hashes after every change, track:

- \`required\`: number of distinct target characters.
- \`formed\`: number whose window count currently meets its required count.

When \`formed == required\`, the window is valid. Record it if shorter, then
remove characters from the left. If removing one drops a required count below
its target, decrement \`formed\` and resume expanding.

\`\`\`ruby
while formed == required
  best_start, best_length = left, right - left + 1 if right - left + 1 < best_length

  removed = s[left]
  window[removed] -= 1
  formed -= 1 if needed.key?(removed) && window[removed] < needed[removed]
  left += 1
end
\`\`\`

### Key invariant

> \`formed\` equals the number of distinct target characters \`c\` for which
> \`window[c] >= needed[c]\`.

This correctly handles duplicates. For \`t = "AAB"\`, one \`A\` does not satisfy
the \`A\` requirement; the count must reach two.

## Worked example

For the final part of \`"ADOBECODEBANC"\` and target \`"ABC"\`:

\`\`\`text
... expand through C → window "ODEBANC" is valid
remove O          → "DEBANC" remains valid
remove D          → "EBANC" remains valid
remove E          → "BANC" remains valid; record length 4
remove B          → "ANC" loses B; expand again (but input is finished)
\`\`\`

## Correctness

The right pointer eventually considers every possible window end. Whenever a
window becomes valid, the inner loop advances \`left\` through every valid start
for that end and records improving lengths, stopping exactly when coverage is
lost. Thus the algorithm examines the shortest valid window ending at each
right index. The minimum among those is the global minimum. If validity is
never reached, no covering substring exists and the empty string is returned.

## Complexity

- **Time:** \`O(s.length + t.length)\`; each boundary advances at most
  \`s.length\` times, plus one pass over \`t\`.
- **Auxiliary space:** \`O(k)\`, where \`k\` is the number of distinct characters
  stored in the two hashes (bounded by the character set).
- The returned substring occupies \`O(answer length)\` output space.

## Edge cases worth testing

- Target longer than source
- No possible window
- One-character exact match
- Duplicate required characters
- Empty target outside LeetCode's nonempty constraint
- Entire source is the only valid window

## Optional refinements

Only target characters need to be added to \`window\`; ignoring irrelevant
characters reduces hash entries. The current version records all characters to
keep the remove-left operation direct, without changing asymptotic complexity.

</details>
`,"0102_binary_tree_level_order":`# 102. Binary Tree Level Order Traversal

## Problem

Return a binary tree's values grouped by depth, visiting each level from left to
right.

\`\`\`text
Tree:        3
           / \\
          9  20
             / \\
            15  7

Output: [[3], [9, 20], [15, 7]]
\`\`\`

[LeetCode problem](https://leetcode.com/problems/binary-tree-level-order-traversal/)

## What pattern is this?

This is **breadth-first search (BFS) with level boundaries**. A queue processes
nodes in first-in, first-out order; snapshotting the current queue length tells
how many nodes belong to the current level.

Use BFS for level order or the fewest edges in an unweighted graph. Use DFS
when depth-first structure is more natural and level grouping is unnecessary.

## Brute-force baseline

For each depth, traverse the tree from the root and collect nodes at exactly
that depth. Repeating that traversal for all heights can cost \`O(nh)\`, or
\`O(n²)\` on a skewed tree.

## Solution: process one queue layer at a time

<details>
<summary>Reveal explanation</summary>

Start the queue with the root. At the beginning of a level, calculate how many
unprocessed nodes are currently queued. Remove exactly that many, append their
values to the level result, and enqueue their children left before right.

Ruby arrays do not provide a constant-time dequeue from the front:
\`Array#shift\` moves the remaining references. The implementation therefore
keeps a \`head\` index and reads \`queue[head]\`, making each dequeue \`O(1)\`.

\`\`\`ruby
level_length.times do
  node = queue[head]
  head += 1
  level_nodes.append(node.val)
  queue.append(node.left) if node.left
  queue.append(node.right) if node.right
end
\`\`\`

### Key invariant

> At the start of each outer iteration, all currently unprocessed queue entries
> are exactly the nodes of one depth, in left-to-right order.

Their children are appended behind them, so those children form the next level
in the same order.

## Worked example

\`\`\`text
queue [3]       → consume 1 → level [3], enqueue [9, 20]
queue [9, 20]   → consume 2 → level [9, 20], enqueue [15, 7]
queue [15, 7]   → consume 2 → level [15, 7]
\`\`\`

## Correctness

The root is the complete level zero. Assuming the queue snapshot contains one
level in left-to-right order, processing every node and appending its left then
right child creates exactly the next level in left-to-right order. No node has
another route into a tree, so each is enqueued once. By induction, every output
group is the correct level, and all tree nodes are returned exactly once.

## Complexity

- **Time:** \`O(n)\`; every node is enqueued and processed once.
- **Auxiliary space:** \`O(n)\` in this Ruby implementation because the array
  retains processed references while \`head\` advances. A compacting queue can be
  described as \`O(w)\`, where \`w\` is maximum tree width.
- **Output space:** \`O(n)\`, excluded from auxiliary space.

## Edge cases worth testing

- Empty tree → \`[]\`
- One node
- Only left or only right children
- Complete tree
- Uneven final level

## Optional refinements

A true deque provides \`O(w)\` queue storage. In a short CoderPad solution, the
head-index array avoids Ruby's \`shift\` cost with minimal code; periodic
compaction would reclaim processed references for extremely large trees.

</details>
`,"0104_max_depth_of_binary_tree":`# 104. Maximum Depth of Binary Tree

## Problem

Return the number of nodes on the longest path from a binary tree's root to a
leaf. An empty tree has depth zero.

\`\`\`text
Tree:        3
           / \\
          9  20
             / \\
            15  7

Output: 3
\`\`\`

[LeetCode problem](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## What pattern is this?

The clearest solution is **postorder depth-first search (DFS)**: compute each
subtree's answer before combining them at the parent. The file also shows
iterative DFS with a stack and BFS by levels.

Use recursive DFS when a tree's answer is naturally composed from child
answers. Prefer an iterative traversal if tree height may exceed Ruby's safe
recursion depth.

## Brute-force baseline

List every root-to-leaf path, store each path, then take the maximum length.
That does unnecessary copying and can use \`O(nh)\` total path storage. Depth can
be computed while traversing instead.

## Solution: one plus the deeper subtree

<details>
<summary>Reveal explanation</summary>

The recursive definition is direct:

\`\`\`ruby
return 0 unless root

left = max_depth(root.left)
right = max_depth(root.right)
[left, right].max + 1
\`\`\`

The base case gives an absent child depth zero. A real node contributes one on
top of the deeper child's path.

The iterative DFS stores \`[depth, node]\` pairs and tracks the largest depth.
The BFS version processes complete levels and increments depth once per level.

### State invariant

For recursive DFS:

> Each call returns the exact maximum depth of the subtree rooted at its
> argument.

For iterative DFS, each stack pair contains the node's exact root-relative
depth. For BFS, \`depth\` equals the number of complete levels processed.

## Worked example

At node \`20\`, the leaves \`15\` and \`7\` each return \`1\`, so \`20\` returns \`2\`.
Node \`9\` returns \`1\`. The root takes \`max(1, 2) + 1 = 3\`.

## Correctness

An empty subtree has depth zero. For a nonempty subtree, every root-to-leaf path
starts at the root and then lies entirely in either the left or right subtree.
By induction, the recursive calls return those two exact maximum depths. Taking
the larger and adding the current root therefore returns the subtree's exact
maximum depth, including for the original root.

## Complexity

- **Time:** \`O(n)\` for all three approaches; each node is visited once.
- **Recursive DFS auxiliary space:** \`O(h)\` call stack, worst-case \`O(n)\` and
  \`O(log n)\` for a balanced tree.
- **Iterative DFS auxiliary space:** \`O(h)\` for a binary tree stack in the usual
  traversal bound, worst-case \`O(n)\`.
- **BFS auxiliary space:** \`O(w)\` queue nodes, where \`w\` is maximum width;
  worst-case \`O(n)\`.

## Edge cases worth testing

- Empty tree
- One node
- Completely skewed tree
- Balanced tree
- Deepest leaf exists on only one side

## Optional refinements

In Ruby, implement the queue with a head index or a deque if strict linear time
matters; repeated \`Array#shift\` can move remaining elements. Recursive DFS is
the most concise interview answer, followed by the iterative fallback if stack
depth is raised as a concern.

</details>
`,"0110_balanced_binary_tree":`# 110. Balanced Binary Tree

## Problem

Return whether every node in a binary tree has left and right subtree heights
that differ by at most one.

\`\`\`text
    3
   / \\
  9  20       → balanced
     / \\
    15  7
\`\`\`

[LeetCode problem](https://leetcode.com/problems/balanced-binary-tree/)

## What pattern is this?

This is **postorder DFS returning multiple facts**. Each child must report both
whether it is balanced and what its height is before the parent can decide.
The implementation returns \`[balanced, height]\`.

Use bottom-up DFS when a parent depends on summaries of both child subtrees.
Do not recompute height from scratch at every node when the same traversal can
carry height upward.

## Brute-force baseline

For every node, separately calculate the height of its left and right subtree,
then recursively check its children. On a balanced tree this costs
\`O(n log n)\`; on a skewed tree it can degrade to \`O(n²)\` because the same nodes
participate in many height traversals.

## Solution: compute balance and height together

<details>
<summary>Reveal explanation</summary>

An empty subtree is balanced with height \`-1\`. A leaf then has height
\`max(-1, -1) + 1 = 0\`; only height differences matter, so this edge-based
convention is convenient.

Recursively evaluate the left subtree. If it is unbalanced, return immediately.
Do the same on the right. Otherwise this node is balanced exactly when:

\`\`\`ruby
(left_height - right_height).abs <= 1
\`\`\`

Its height is one greater than the larger child height.

### State invariant

> \`balanced_height(node)\` returns the correct balance status and height for the
> entire subtree rooted at \`node\`.

The early returns do not need meaningful heights because an unbalanced child
already determines that every ancestor containing it is unbalanced.

## Worked example

For a node whose left and right child heights are \`1\` and \`0\`, the difference
is one, so it is balanced and returns height \`2\`. If the heights were \`2\` and
\`0\`, it would return \`false\`; its ancestors can stop immediately.

## Correctness

The empty-tree base result is correct. Assume both recursive child results are
correct. If either child is unbalanced, this subtree is also unbalanced. If
both are balanced, the definition says the current subtree is balanced exactly
when their heights differ by at most one. The returned height is also correct:
one edge beyond the taller child. Structural induction proves the root result.

## Complexity

- **Time:** \`O(n)\`; each visited node does constant work, and early exit may
  visit fewer nodes.
- **Auxiliary space:** \`O(h)\` for recursion, where \`h\` is tree height;
  worst-case \`O(n)\` and \`O(log n)\` for a balanced tree.

## Edge cases worth testing

- Empty tree → \`true\`
- One node
- Balanced tree with uneven final leaves
- Imbalance at the root
- Deep imbalance hidden inside a subtree

## Optional refinements

A common compact version returns a height for balanced subtrees and a sentinel
such as \`-Float::INFINITY\` or \`nil\` for imbalance. Returning a two-value array
is more explicit and avoids overloading one integer with two meanings.

</details>
`,"0121_best_time_buy_sell_stock":`# 121. Best Time to Buy and Sell Stock

## Problem

Given daily stock prices, choose one day to buy and a later day to sell. Return
the largest possible profit, or \`0\` when every possible trade loses money.

\`\`\`text
Input:  [7, 1, 5, 3, 6, 4]
Output: 5  # buy at 1, then sell at 6
\`\`\`

## What pattern is this?

This is a **one-pass running optimum** problem. At each selling day, we only
need the cheapest earlier buying price. It is closely related to a sliding
window: the left side represents the best buy seen so far and the current item
is the possible sell.

## Brute-force baseline

Try every buy day with every later sell day and keep the best difference. That
checks \`O(n²)\` pairs and uses \`O(1)\` auxiliary space.

## Solution: track the minimum price so far

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def max_profit(prices)
  min_price = prices.first
  best = 0

  prices.each do |price|
    min_price = [min_price, price].min
    best = [best, price - min_price].max
  end

  best
end
\`\`\`

Walk left to right while maintaining two facts:

- \`min_price\` is the lowest price in the prefix already visited.
- \`max_amount\` is the best valid profit found so far.

For each price, first treat it as a possible new minimum. Otherwise calculate
\`price - min_price\` and update the best profit.

### Key invariant

Before evaluating a sell on day \`i\`, \`min_price\` comes from day \`0...i\`. A
profit computed from it therefore always buys before it sells. This is why
tracking the overall minimum without respecting order would be unsafe.

## Worked example

| Price | Minimum so far | Profit if sold now | Best |
| ---: | ---: | ---: | ---: |
| 7 | 7 | 0 | 0 |
| 1 | 1 | 0 | 0 |
| 5 | 1 | 4 | 4 |
| 3 | 1 | 2 | 4 |
| 6 | 1 | 5 | 5 |
| 4 | 1 | 3 | 5 |

## Correctness

For every possible sell day, the algorithm pairs it with the cheapest valid
earlier buy day, which produces the best profit ending on that day. Taking the
maximum of those profits therefore produces the best valid transaction.

## Complexity

- **Time:** \`O(n)\`; each price is visited once.
- **Auxiliary space:** \`O(1)\`.

## Edge cases worth testing

- One price → \`0\`
- Strictly decreasing prices → \`0\`
- Equal prices → \`0\`
- Best trade appears near the end
- A lower price appears after an earlier profitable trade

### Optional refinements

The included brute-force method is useful as a reference implementation for
randomized tests. For the interview solution, prefer the one-pass method and
name the buy-before-sell invariant explicitly.

</details>
`,"0125_valid_palindrome":`# 125. Valid Palindrome

## Problem

Decide whether a string reads the same forward and backward after ignoring
punctuation and spaces and treating ASCII letters case-insensitively.

\`\`\`text
Input:  "A man, a plan, a canal: Panama"
Output: true
\`\`\`

## What pattern is this?

This is an **opposing two-pointers** problem. The next meaningful character
from the left must match the next meaningful character from the right.

## Brute-force baseline

Normalize the string with \`downcase\` and \`gsub\`, reverse that new string, and
compare the two. It is clear and takes \`O(n)\` time, but creates \`O(n)\` extra
strings.

## Solution: compare inward without building a cleaned copy

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def is_palindrome(s)
  left = 0
  right = s.length - 1

  while left < right
    left += 1 and next unless s[left].match?(/[a-z0-9]/i)
    right -= 1 and next unless s[right].match?(/[a-z0-9]/i)
    return false unless s[left].casecmp?(s[right])

    left += 1
    right -= 1
  end

  true
end
\`\`\`

Start \`left\` and \`right\` at opposite ends. If either points to a character
outside \`[a-z0-9]\`, move only that pointer inward. Once both characters are
alphanumeric, compare them without regard to case. A mismatch immediately
proves the string is not a palindrome.

### Key invariant

All meaningful characters outside the inclusive range \`left..right\` have
already been matched in mirrored pairs. Skipping punctuation preserves this
invariant because ignored characters do not participate in the palindrome.

## Worked example

For \`"race a car"\`, the outer meaningful pairs \`r/r\` and \`a/a\` match. The
next pair is \`c\` versus \`a\`, so the method returns \`false\` immediately.

## Correctness

The pointers examine meaningful characters in exactly the order they appear in
the normalized string, one from each end. A mismatch means the normalized
string differs from its reverse. If the pointers meet without a mismatch,
every mirrored pair matches, so the string is a palindrome.

## Complexity

- **Time:** \`O(n)\`; each pointer crosses each character at most once.
- **Auxiliary space:** \`O(1)\` for the two-pointer solution. Ruby may allocate
  small temporary strings while changing case, but no input-sized copy is kept.

## Edge cases worth testing

- Empty or punctuation-only input → \`true\`
- One meaningful character → \`true\`
- Mixed case
- Digits mixed with letters
- A mismatch near the center or at the outer edge

### Optional refinements

The regular expression matches LeetCode's ASCII constraints. If requirements
expanded to arbitrary Unicode letters and digits, choose a Unicode-aware
normalization policy explicitly rather than silently reusing this regex.

</details>
`,"0133_clone_graph":`# 133. Clone Graph

## Problem

Given one node in a connected undirected graph, return a deep copy. Every clone
must have the same value and neighbor relationships, but no cloned node may be
an original node.

\`\`\`text
Original: 1 -- 2
          |    |
          4 -- 3
Output: a separate four-node graph with the same edges
\`\`\`

## What pattern is this?

This combines **graph traversal** with an **old-node → cloned-node hash map**.
The map both prevents infinite traversal around cycles and reconnects cloned
edges to the right cloned objects.

## Brute-force baseline

Cloning a node every time it appears in a neighbor list does not work: cycles
recurse forever and shared neighbors become duplicate objects. A correct graph
clone needs a visited/clones map whether traversal is breadth-first or
depth-first.

## Solution: BFS with a clone map

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def clone_graph(node)
  return nil unless node

  clones = { node => Node.new(node.val) }
  queue = [node]
  next_index = 0

  while next_index < queue.length
    current = queue[next_index]
    next_index += 1

    current.neighbors.each do |neighbor|
      unless clones.key?(neighbor)
        clones[neighbor] = Node.new(neighbor.val)
        queue.append(neighbor)
      end
      clones[current].neighbors.append(clones[neighbor])
    end
  end

  clones[node]
end
\`\`\`

Create the starting clone and store it under the original node object. Process
original nodes with a queue. For each neighbor:

1. Create and enqueue its clone only if it is not already in \`clones\`.
2. Append the existing cloned neighbor to the current clone's neighbor list.

Using original node objects as hash keys is more robust than using values; it
models identity directly and still works if two nodes happen to share a value.

### Key invariant

Every original node discovered so far has exactly one corresponding clone in
\`clones\`. After a node is processed, its clone's neighbor list mirrors all of
that original node's edges, but points only to clones.

## Worked example

For the edge cycle \`1 → 2 → 3 → 1\`, create clone \`1'\`. Processing \`1\` creates
\`2'\`; processing \`2\` creates \`3'\`; processing \`3\` finds original \`1\` already in
the map and connects to \`1'\` instead of creating another node.

## Correctness

BFS reaches every node connected to the input. The one-clone-per-original
invariant establishes a bijection between original and cloned nodes. Copying
every neighbor reference through that map reproduces every edge, including
cycles and self-edges, without retaining an original reference.

## Complexity

- **Time:** \`O(V + E)\`; each vertex is enqueued once and each adjacency-list
  entry is inspected once.
- **Auxiliary space:** \`O(V)\` for the clone map and queue, excluding the cloned
  graph itself (the required output occupies \`O(V + E)\`).

## Edge cases worth testing

- \`nil\` input
- One node with no neighbors
- A self-loop
- A two-node cycle
- Several nodes sharing a neighbor

### Optional refinements

A recursive DFS is equally valid but consumes \`O(V)\` call-stack space and can
overflow on a deep graph. The array queue uses a moving index so Ruby does not
pay the linear cost of repeatedly calling \`Array#shift\`.

</details>
`,"0136_single_number":`# 136. Single Number

## Problem

Every integer in a non-empty array appears exactly twice except one. Return the
unpaired integer in linear time using constant auxiliary space.

\`\`\`text
Input:  [4, 1, 2, 1, 2]
Output: 4
\`\`\`

## What pattern is this?

This is a **bitwise XOR cancellation** problem. It depends on the exact promise
that every non-answer value appears twice.

## Brute-force baseline

Count values in a hash and return the one with count one. That is \`O(n)\` time
and \`O(n)\` auxiliary space. Sorting first would use \`O(n log n)\` time and then
scan adjacent pairs.

## Solution: XOR every value

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def single_number(nums)
  result = 0
  nums.each { |num| result ^= num }
  result
end
\`\`\`

XOR has three useful properties:

\`\`\`text
x ^ x = 0
x ^ 0 = x
order and grouping do not matter
\`\`\`

Start with \`0\` and XOR each number into the accumulator. Every duplicated pair
cancels, leaving only the single number.

### Key invariant

After processing any prefix, \`result\` equals the XOR of exactly that prefix.
When the full array has been processed, all paired values contribute zero.

## Worked example

\`\`\`text
0 ^ 4 ^ 1 ^ 2 ^ 1 ^ 2
= 4 ^ (1 ^ 1) ^ (2 ^ 2)
= 4
\`\`\`

## Correctness

Because XOR is associative and commutative, values can be conceptually grouped
into equal pairs regardless of their positions. Each pair becomes zero, and
zero XOR the unpaired value is that value.

## Complexity

- **Time:** \`O(n)\`.
- **Auxiliary space:** \`O(1)\`.

## Edge cases worth testing

- A one-element array
- The answer is negative or zero
- Duplicates are far apart
- The answer appears first or last

### Optional refinements

Do not generalize this exact technique to “every value appears three times” or
“two values appear once”; those require different bit-counting or partitioning
logic. State the pairing constraint before reaching for XOR.

</details>
`,"0141_linked_list_cycle":`# 141. Linked List Cycle

## Problem

Given the head of a singly linked list, determine whether repeatedly following
\`next\` eventually revisits a node.

\`\`\`text
3 → 2 → 0 → -4
    ↑         |
    └─────────┘
Output: true
\`\`\`

## What pattern is this?

This is **Floyd's tortoise-and-hare cycle detection**: two pointers traverse
the same sequence at different speeds.

## Brute-force baseline

Store every node object in a set. Return \`true\` on the first repeated object or
\`false\` at \`nil\`. This is \`O(n)\` time and \`O(n)\` auxiliary space. Store node
identity, not node values, because different nodes may contain the same value.

## Solution: slow and fast pointers

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def has_cycle(head)
  slow = head
  fast = head

  while fast&.next
    slow = slow.next
    fast = fast.next.next
    return true if slow == fast
  end

  false
end
\`\`\`

The slow pointer advances one edge per iteration; the fast pointer advances
two. If \`fast\` reaches \`nil\`, the list terminates. If both pointers reference
the same node, the list contains a cycle.

The implementation starts \`fast\` one step ahead. Starting both pointers at the
head would also work if movement happened before the equality check.

### Key reasoning

Once both pointers are inside a cycle, fast gains one position on slow per
iteration, measured around the cycle. It must therefore catch slow within at
most one full cycle length.

## Worked example

For a cycle \`2 → 0 → -4 → 2\`, slow moves one step while fast moves two. Their
distance modulo three changes by one each round, so eventually both reference
the same node.

## Correctness

In an acyclic list, fast must reach the end because it continually moves
forward. In a cyclic list, neither pointer can leave after entering the cycle,
and the modular-distance argument guarantees they meet. The method therefore
returns \`true\` exactly for cyclic lists.

## Complexity

- **Time:** \`O(n)\` before reaching a cycle plus at most one cycle traversal.
- **Auxiliary space:** \`O(1)\`.

## Edge cases worth testing

- \`nil\` head
- One node ending in \`nil\`
- One node pointing to itself
- Two nodes forming a cycle
- A long non-cyclic prefix before the cycle
- Repeated values without repeated node objects

### Optional refinements

Floyd's algorithm can also locate the cycle's entry point: after a meeting,
reset one pointer to the head and advance both one step at a time. That is not
required when the question asks only whether a cycle exists.

</details>
`,"0150_eval_reverse_polish":`# 150. Evaluate Reverse Polish Notation

## Problem

Evaluate a valid postfix expression whose tokens are integers or \`+\`, \`-\`, \`*\`,
and \`/\`. Division truncates toward zero.

\`\`\`text
Input:  ["2", "1", "+", "3", "*"]
Output: 9  # (2 + 1) * 3
\`\`\`

## What pattern is this?

This is a **stack-based expression evaluation** problem. Postfix order ensures
that an operator appears immediately after its two fully evaluated operands.

## Brute-force baseline

Repeatedly search the token array for an operator, replace its two preceding
operands with the result, and restart. Array deletion and rescanning can make
this \`O(n²)\`. Converting to another expression format also adds unnecessary
parsing complexity.

## Solution: evaluate with a value stack

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def eval_rpn(tokens)
  stack = []

  tokens.each do |token|
    if %w[+ - * /].include?(token)
      right = stack.pop
      left = stack.pop
      stack.append(apply_operator(token, left, right))
    else
      stack.append(token.to_i)
    end
  end

  stack.pop
end
\`\`\`

Append each number to the stack. For an operator, pop the **right operand
first**, then the left operand, apply the operator, and append the result. The
last remaining stack value is the expression's answer.

For division, \`(left.to_f / right).to_i\` truncates toward zero. Ruby integer
division with \`/\` rounds negative results down instead, so \`-7 / 3 == -3\` would
not satisfy this problem.

### Key invariant

After each token, the stack contains the values of all complete subexpressions
seen so far that have not yet been consumed by a later operator.

## Worked example

\`\`\`text
token  stack
2      [2]
1      [2, 1]
+      [3]
3      [3, 3]
*      [9]
\`\`\`

Operand order matters: \`4 5 -\` is \`4 - 5\`, not \`5 - 4\`.

## Correctness

Numbers are valid one-token expressions. Whenever an operator appears, the top
two stack entries are exactly its already evaluated operands; replacing them
with their result preserves the invariant. A valid full expression leaves one
value, which is therefore the expression's evaluation.

## Complexity

- **Time:** \`O(n)\` tokens. The four-item operator lookup is constant time.
- **Auxiliary space:** \`O(n)\` in the worst case when many operands precede the
  operators.

## Edge cases worth testing

- A single number
- Negative operands
- Subtraction and division operand order
- Negative division truncating toward zero
- Nested expressions with many pending operands

### Optional refinements

A hash from operator string to lambda can replace \`apply_operator\`, but a
\`case\` is straightforward in an interview and keeps the allowed operations
explicit.

</details>
`,"0155_min_stack":`# 155. Min Stack

## Problem

Design a stack supporting \`push\`, \`pop\`, \`top\`, and \`get_min\`, with every
operation running in constant time.

\`\`\`text
push(-2), push(0), push(-3)
get_min → -3
pop
top     → 0
get_min → -2
\`\`\`

## What pattern is this?

This is an **augmented data structure**: store a small amount of derived state
alongside each value so a query that would normally require a scan becomes
constant time.

## Brute-force baseline

Keep one normal stack and calculate \`stack.min\` for every \`get_min\`. Push, pop,
and top are \`O(1)\`, but finding the minimum is \`O(n)\`, which violates the
requirement.

## Solution: store the current minimum with each value

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
class MinStack
  def initialize
    @stack = []
  end

  def push(value)
    minimum = @stack.empty? ? value : [value, @stack.last[1]].min
    @stack.append([value, minimum])
  end

  def pop = @stack.pop[0]
  def top = @stack.last[0]
  def get_min = @stack.last[1]
end
\`\`\`

Each entry is a pair:

\`\`\`text
[value, minimum from the bottom through this entry]
\`\`\`

When pushing, the new minimum is \`min(value, previous minimum)\`. The last pair
therefore answers both \`top\` and \`get_min\`. Popping automatically restores the
minimum that was valid before the removed value arrived.

### Key invariant

For every index \`i\`, \`stack[i][1]\` is the minimum of all values at indexes
\`0..i\`. In particular, the final pair always contains the minimum of the whole
current stack.

## Worked example

\`\`\`text
push 3  → [[3, 3]]
push 1  → [[3, 3], [1, 1]]
push 1  → [[3, 3], [1, 1], [1, 1]]
pop     → [[3, 3], [1, 1]]  # minimum is still 1
pop     → [[3, 3]]          # minimum returns to 3
\`\`\`

Storing repeated minimums is important; a single “current minimum” variable
would lose the previous minimum on pop.

## Correctness

The invariant holds for the first value because its prefix minimum is itself.
Each push stores the minimum of the new value and the preceding prefix, so the
invariant is preserved. Pop removes the last prefix without changing earlier
pairs. Thus \`get_min\` always returns the true minimum.

## Complexity

- **Time:** \`O(1)\` for every operation.
- **Auxiliary space:** \`O(n)\` for \`n\` stack entries. Each entry stores two
  integers, which is still linear space.

## Edge cases worth testing

- One value
- A new minimum
- Duplicate minimum values
- Increasing and decreasing sequences
- Negative values

### Optional refinements

An alternative keeps a value stack plus a second stack containing only current
minimums. It may store fewer values, but duplicate minima still need duplicate
entries or counts. The paired representation is often easier to reason about.

</details>
`,"0169_majority_element":`# 169. Majority Element

## Problem

Return the value occurring more than \`floor(n / 2)\` times in a non-empty array.
The problem guarantees that such a value exists.

\`\`\`text
Input:  [2, 2, 1, 1, 1, 2, 2]
Output: 2
\`\`\`

## What pattern is this?

The constant-space solution is **Boyer–Moore majority vote**, a cancellation
pattern. Pair each occurrence of the majority candidate with a different value;
a true majority cannot be completely canceled.

## Brute-force baseline

Count occurrences in a hash and return a value as soon as its count exceeds
\`n / 2\`. This is \`O(n)\` time and \`O(n)\` auxiliary space. Sorting and returning
the middle value takes \`O(n log n)\` time and, with non-mutating \`sort\`, \`O(n)\`
space.

## Solution: Boyer–Moore voting

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def majority_element(nums)
  candidate = nil
  count = 0

  nums.each do |num|
    candidate = num if count.zero?
    count += candidate == num ? 1 : -1
  end

  candidate
end
\`\`\`

Maintain \`candidate\` and \`count\`. When count is zero, adopt the current value.
Increment for a match and decrement for a different value.

### Key invariant

After any prefix, \`count\` represents the unmatched excess of \`candidate\` after
canceling pairs of different values within that prefix. Resetting at zero is
safe because the canceled prefix has no net candidate advantage.

## Worked example

\`\`\`text
value      2  2  1  1  1  2  2
candidate  2  2  2  2  1  1  2
count      1  2  1  0  1  0  1
\`\`\`

The final candidate is \`2\`.

## Correctness

Canceling a majority occurrence against a non-majority occurrence cannot
destroy the majority property among what remains: the majority began with more
than all other values combined. Therefore some majority occurrences remain
uncanceled, and the final candidate must be the guaranteed majority.

## Complexity

- **Time:** \`O(n)\`.
- **Auxiliary space:** \`O(1)\`.

## Edge cases worth testing

- One element
- Majority appears only in the final suffix
- Negative values
- Even and odd lengths
- Majority count is exactly \`floor(n / 2) + 1\`

### Optional refinements

Without the guarantee that a majority exists, Boyer–Moore only produces a
candidate. A second \`O(n)\` pass must verify that its count exceeds \`n / 2\`.

</details>
`,"0200_number_of_islands":`# 200. Number of Islands

## Problem

Count connected groups of land (\`"1"\`) in a rectangular grid. Land connects
only vertically or horizontally, not diagonally.

\`\`\`text
1 1 0
0 1 0   → 2 islands
0 0 1
\`\`\`

## What pattern is this?

This is **connected-component counting with flood fill**. Scan for an unvisited
land cell; every such discovery starts one BFS that marks exactly one island.

## Brute-force baseline

Running a fresh reachability search for every land cell without remembering
visited cells repeatedly explores the same island and cannot directly count
components. A visited set or in-place marker is the essential optimization.

## Solution: scan the grid and BFS each new island

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
grid.each_index do |row|
  grid[row].each_index do |column|
    next unless grid[row][column] == "1"

    islands += 1
    flood_fill(grid, row, column)
  end
end
\`\`\`

Visit every coordinate. When a cell is \`LAND\`, increment the island count and
BFS from it through its four valid land neighbors. Change every reached cell to
\`VISITED\`, so later positions in the outer scan do not count it again.

The queue uses an index rather than \`Array#shift\`; shifting a Ruby array moves
the remaining entries and is linear in the queue length.

### Key invariant

Before the outer scan advances past a coordinate, every land cell in any island
already discovered has been marked visited. During BFS, every queued coordinate
belongs to the same four-directional component as its starting cell.

## Worked example

In the sample, scanning finds the upper-left \`1\` and BFS marks the three
connected land cells. The lower-right \`1\` remains untouched because diagonal
contact is not an edge. When the scan reaches it, the count becomes two.

## Correctness

Every BFS follows only legal land-to-land edges, so it cannot combine separate
islands. Conversely, BFS reaches every cell connected to its start. The first
cell encountered from each island triggers exactly one BFS and is then marked,
so the count is exactly the number of islands.

## Complexity

Let the grid have \`m\` rows and \`n\` columns.

- **Time:** \`O(mn)\`; each cell is scanned and processed only a constant number
  of times.
- **Auxiliary space:** \`O(mn)\` worst case for the BFS queue. The in-place visited
  marker avoids a separate \`O(mn)\` set but mutates the input grid.

## Edge cases worth testing

- All water → \`0\`
- All land → \`1\`
- One cell
- Diagonally touching land → separate islands
- Long thin grid
- Many one-cell islands

### Optional refinements

The implementation marks neighbors when enqueuing, rather than when dequeuing,
so each land cell enters the queue only once. A DFS is also valid, though
recursive Ruby code risks call-stack overflow on a large island.

</details>
`,"0206_reverse_linked_list":`# 206. Reverse Linked List

## Problem

Reverse every \`next\` pointer in a singly linked list and return the new head.

\`\`\`text
1 → 2 → 3 → nil
3 → 2 → 1 → nil
\`\`\`

## What pattern is this?

This is **in-place pointer manipulation** with previous, current, and saved-next
references. The recursive version demonstrates unwinding the call stack.

## Brute-force baseline

Copy node values into an array, then build a new list in reverse order. That is
\`O(n)\` time and \`O(n)\` extra storage, and it returns new nodes rather than
reversing the original links.

## Solution: iterative three-pointer reversal

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def reverse_list(head)
  previous = nil
  current = head

  while current
    next_node = current.next
    current.next = previous
    previous = current
    current = next_node
  end

  previous
end
\`\`\`

At each node:

1. Save \`curr.next\` before overwriting it.
2. Point \`curr.next\` backward to \`prev\`.
3. Move \`prev\` and \`curr\` one node forward using the saved reference.

The most common bug is assigning \`curr.next = prev\` before saving the original
next node; that loses access to the unreversed suffix.

### Key invariant

Before each iteration, \`prev\` is the head of a fully reversed prefix and
\`curr\` is the head of the untouched suffix. No node is lost: the two parts are
separate, and \`next_temp\` preserves the suffix while one link changes.

## Worked example

\`\`\`text
prev       curr/suffix
nil        1 → 2 → 3
1 → nil    2 → 3
2 → 1      3
3 → 2 → 1  nil
\`\`\`

When \`curr\` becomes \`nil\`, \`prev\` is the new head.

### Recursive approach

Recursion first reverses the suffix. On the way back, \`head.next.next = head\`
points the next node back to the current node, and \`head.next = nil\` removes
the old forward edge. It is elegant but uses one stack frame per node.

## Correctness

Each iteration extends the reversed prefix by exactly the current node while
preserving the remaining suffix. At termination the suffix is empty, so every
node is in the reversed prefix, in reverse order, and the old head points to
\`nil\`.

## Complexity

- **Iterative:** \`O(n)\` time and \`O(1)\` auxiliary space.
- **Recursive:** \`O(n)\` time and \`O(n)\` call-stack space.
- Both mutate the list in place and allocate no output nodes.

## Edge cases worth testing

- Empty list
- One node
- Two nodes
- Repeated node values
- A long list (important for recursion depth)

### Optional refinements

In an interview, draw the three references before writing assignments. A
parallel assignment can shorten Ruby code, but explicit steps make the
“preserve next before rewiring” rule easier to communicate.

</details>
`,"0207_course_schedule":`# 207. Course Schedule

## Problem

Courses are numbered \`0...num_courses\`. Each pair \`[course, prerequisite]\`
means the prerequisite must come first. Return whether all courses can be
completed.

\`\`\`text
num_courses: 2
prerequisites: [[1, 0], [0, 1]]
Output: false  # the requirements form a cycle
\`\`\`

## What pattern is this?

This is **cycle detection in a directed graph**, solved here with **Kahn's
topological-sort algorithm** and indegrees.

## Brute-force baseline

For each course, repeatedly search all prerequisite pairs to decide whether it
is currently available. That rescanning can cost \`O(VE)\`. Trying every possible
course ordering is factorial. An adjacency list plus indegree counts captures
the needed dependency state directly.

## Solution: repeatedly take zero-indegree courses

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
prerequisites.each do |course, prerequisite|
  dependents[prerequisite].append(course)
  indegree[course] += 1
end

queue = indegree.each_index.filter { |course| indegree[course].zero? }
\`\`\`

Build:

- \`prereq_for[p]\`: courses unlocked after prerequisite \`p\`.
- \`num_required[c]\`: how many prerequisites course \`c\` still needs.

Queue every course with indegree zero. Taking one course removes each outgoing
edge conceptually, decrementing its dependents' indegrees. A dependent joins
the queue exactly when its indegree reaches zero.

### Key invariant

\`num_required[c]\` equals the number of incoming prerequisite edges from courses
not yet processed. Therefore a queued course has no unmet prerequisite.

## Worked example

For \`[[1, 0], [2, 0], [3, 1], [3, 2]]\`, course \`0\` starts available. Processing
it unlocks \`1\` and \`2\`; processing both reduces course \`3\` to zero prerequisites.
All four courses are processed, so the schedule is possible.

### Why a cycle stops the queue

Every node in a directed cycle has an incoming edge from another unprocessed
node in that cycle. None can reach indegree zero. If processing stops before
all courses are taken, the remaining dependency graph contains a cycle.

## Correctness

The algorithm only processes courses with no unmet prerequisites, so its
partial order is always valid. If it processes every course, that order is a
valid schedule. If it cannot, the remaining nodes cannot contain any
zero-indegree node and therefore include a directed cycle, making completion
impossible.

## Complexity

Let \`V\` be courses and \`E\` prerequisite pairs.

- **Time:** \`O(V + E)\`.
- **Auxiliary space:** \`O(V + E)\` for adjacency lists, indegrees, and queue.

## Edge cases worth testing

- No prerequisites
- A direct two-course cycle
- A longer cycle
- Several disconnected dependency chains
- Multiple prerequisites for one course
- One course

### Optional refinements

A three-state DFS (\`unvisited\`, \`visiting\`, \`finished\`) also detects a cycle in
\`O(V + E)\`. Kahn's algorithm is often easier to explain when the domain already
speaks in terms of prerequisites becoming available.

</details>
`,"0208_implement_trie":`# 208. Implement Trie (Prefix Tree)

## Problem

Implement a structure supporting:

- \`insert(word)\`
- \`search(word)\`, which requires a complete stored word
- \`starts_with(prefix)\`, which requires only a stored path

\`\`\`text
insert("apple")
search("apple")     → true
search("app")       → false
starts_with("app")  → true
\`\`\`

## What pattern is this?

This is a **trie**, a tree whose edges are characters and whose root-to-node
paths represent prefixes. Shared prefixes share nodes.

## Brute-force baseline

Store words in an array. Exact search can compare against every word, and prefix
search can call \`start_with?\` on every word: \`O(WL)\` in the worst case for \`W\`
stored words of length \`L\`. A hash gives fast exact search but does not directly
answer arbitrary prefix queries.

## Solution: one hash of children per trie node

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def insert(word)
  node = root

  word.each_char do |character|
    node.children[character] ||= TrieNode.new
    node = node.children[character]
  end

  node.end_node = true
end
\`\`\`

Each node stores \`children\`, mapping a character to its next node, and an
\`end_node\` boolean. Insertion follows or creates one edge per character, then
marks the final node as a complete word.

Both queries use \`traverse\`:

- \`starts_with\` succeeds if the path exists.
- \`search\` also requires \`end_node\` at the final node.

### Key invariant

After inserting a word, for every prefix of length \`i\`, following the first \`i\`
characters from the root reaches a node representing exactly that prefix. The
terminal flag is true exactly where an inserted word ends.

## Worked example

Inserting \`"app"\` and \`"apple"\` creates one shared path for \`a → p → p\`, then
continues with \`l → e\`. The node for \`app\` is terminal and has child \`l\`, so a
node can represent both a complete word and a prefix of a longer word.

## Correctness

Insertion creates every missing edge on a word's path and marks its endpoint.
Traversal follows exactly the characters in a query, so a missing edge proves
that no inserted word has that prefix. If all edges exist, the path is a valid
prefix; checking the terminal flag additionally distinguishes a stored word.

## Complexity

For an input string of length \`L\`:

- **Insert:** \`O(L)\` time.
- **Search / starts_with:** \`O(L)\` time.
- **Space:** up to \`O(total inserted characters)\` nodes; shared prefixes reduce
  the actual total. Each operation itself uses \`O(1)\` auxiliary space.

## Edge cases worth testing

- Search before any insertion
- A word that is also another word's prefix
- Two words with no shared prefix
- Exact path exists but terminal flag is false
- Duplicate insertion

### Optional refinements

For a fixed small alphabet, children can be an array instead of a hash, trading
predictable lookup for more empty slots. Autocomplete would additionally walk
the subtree below a prefix node to collect terminal paths.

</details>
`,"0216_combination_sum_3":`# 216. Combination Sum III

## Problem

Return every combination of exactly \`k\` distinct numbers from \`1..9\` whose sum
is \`n\`. A number may appear at most once, and result order does not matter.

\`\`\`text
k = 3, n = 9
Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
\`\`\`

## What pattern is this?

This is **backtracking over combinations**. Each choice narrows the remaining
candidates, and the algorithm undoes that conceptual choice by returning from
the recursive call.

## Brute-force baseline

Enumerate all subsets of \`1..9\` (\`2⁹ = 512\`), then filter to subsets of length
\`k\` and sum \`n\`. That is bounded here, but it ignores useful constraints and
does not demonstrate the reusable backtracking pattern.

## Solution: choose increasing values and prune

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def search(start, slots, target, path, results)
  if slots.zero?
    results.append(path.dup) if target.zero?
    return
  end

  (start..9).each do |number|
    break if number > target

    path.append(number)
    search(number + 1, slots - 1, target - number, path, results)
    path.pop
  end
end
\`\`\`

The recursive state is:

- \`start\`: the smallest allowed next number
- \`current\`: numbers already chosen
- \`total\`: their running sum

Try every \`i\` from \`start\` through \`9\`, then recurse with \`i + 1\`. Strictly
increasing choices guarantee distinct values and one canonical order for each
combination. Stop when \`current.length == k\`; append it only if \`total == n\`.
Because candidates are positive and increasing, break once a new total exceeds
the target.

### Key invariant

\`current\` is strictly increasing, contains only values from \`1..9\`, and sums to
\`total\`. Every recursive descendant can add only values greater than its final
element.

### Duplicate handling

No set of results is needed. The increasing-order rule means \`{1, 2, 6}\` is
generated only as \`[1, 2, 6]\`, never as \`[2, 1, 6]\` or another permutation.

## Worked example

For \`k = 3, n = 7\`, choose \`1\`, then \`2\`. Trying \`3\` reaches length three with
sum six and returns. Trying \`4\` reaches sum seven and records \`[1, 2, 4]\`.
Larger third choices exceed the target and are pruned.

## Correctness

Every produced result has \`k\` distinct valid numbers and the target sum because
those conditions are checked before appending. Conversely, any valid
combination has a unique increasing ordering. The loop considers its first
value, recursion considers its next greater value, and so on, so that ordering
is reached and recorded exactly once.

## Complexity

- **Time:** \`O(Σ C(9, d) for d = 0..k + Rk)\`, where \`R\` is the number of
  results. The sum counts partial combination states and \`Rk\` counts copying
  completed paths. This is bounded by \`O(2⁹ + Rk)\`; the fixed nine-value domain
  makes it technically constant with respect to the inputs, but the
  combinatorial form explains the reusable pattern.
- **Auxiliary space:** \`O(k)\` for recursion and the current path, excluding
  output. Output may contain \`O(C(9, k) · k)\` integers.

## Edge cases worth testing

- Target too small or too large
- \`k = 1\`
- The largest valid combination, such as \`[7, 8, 9]\`
- No solution
- Multiple solutions

### Optional refinements

Stronger pruning can compare the smallest and largest possible sums of the
remaining slots. The included iterative stack version explores the same state
space without recursion, but the recursive version communicates backtracking
more directly.

</details>
`,"0217_contains_duplicates":`# 217. Contains Duplicate

## Problem

Return whether any integer appears at least twice in an array.

\`\`\`text
Input:  [1, 2, 3, 1]
Output: true
\`\`\`

## What pattern is this?

This is a basic **seen-set / hash membership** problem: while scanning, ask
whether the current value has already occurred.

## Brute-force baseline

Compare every pair of indexes. It uses \`O(1)\` auxiliary space but takes \`O(n²)\`
time. Sorting a copy and checking adjacent values takes \`O(n log n)\` time and
\`O(n)\` space in Ruby.

## Solution: remember values already seen

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def contains_duplicate(nums)
  seen = Set.new

  nums.each do |num|
    return true if seen.include?(num)

    seen.add(num)
  end

  false
end
\`\`\`

Walk through the array. If \`cache[n]\` is already present, return \`true\`.
Otherwise store the value and continue. Reaching the end means every value was
new at the time it appeared.

A \`Set\` expresses membership-only intent more directly, while the existing hash
is equally correct. With the project's Ruby 3.2 baseline, \`Set\` is available
without an explicit \`require "set"\`.

### Key invariant

Before processing index \`i\`, the cache contains exactly the distinct values
from indexes \`0...i\`. Membership therefore means there is an earlier equal
value at a different index.

## Worked example

\`\`\`text
value  seen before?  cache after
1      no            {1}
2      no            {1, 2}
3      no            {1, 2, 3}
1      yes           return true
\`\`\`

## Correctness

Returning \`true\` requires finding the current value in the cache, proving two
different positions share that value. If the scan finishes, each value was
absent from all earlier positions, so no duplicate pair exists.

## Complexity

- **Time:** \`O(n)\` expected, assuming average constant-time hash lookup.
- **Auxiliary space:** \`O(n)\` in the all-distinct case.

## Edge cases worth testing

- One element → \`false\`
- Duplicate adjacent values
- Duplicate first and last values
- Negative numbers and zero
- All values identical

### Optional refinements

In concise Ruby, \`nums.uniq.length != nums.length\` works but creates the whole
deduplicated array and cannot return early. The explicit scan better exposes
the interview pattern and its invariant.

</details>
`,"0226_invert_binary_tree":`# 226. Invert Binary Tree

## Problem

Swap the left and right children of every node in a binary tree and return its
root.

\`\`\`text
    2             2
   / \\           / \\
  1   3    →    3   1
\`\`\`

## What pattern is this?

This is a **full tree traversal with a local transformation**. Either BFS or
DFS works because every node performs the same independent child swap.

## Brute-force baseline

Copy the tree into a second mirrored tree. That is still \`O(n)\` time but uses
\`O(n)\` output nodes. Since mutation is allowed, swapping child references in
place avoids the copy.

## Solution: visit every node and swap its children

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def invert_tree(root)
  return nil unless root

  root.left, root.right = invert_tree(root.right), invert_tree(root.left)
  root
end
\`\`\`

The iterative solution performs BFS. For each dequeued node, save its original
children, assign them in opposite positions, then enqueue the saved child
objects. The queue uses a moving index instead of Ruby's linear-time
\`Array#shift\`.

The recursive solution inverts both subtrees and then assigns the inverted
right subtree to \`left\` and the inverted left subtree to \`right\`.

### Key invariant

After a node is processed, its children are exactly the mirror of their
original positions. Every enqueued node is an original child still scheduled
for the same transformation.

## Worked example

For root \`4\` with children \`2\` and \`7\`, processing the root changes them to \`7\`
and \`2\`. Processing \`7\` swaps \`6\` and \`9\`; processing \`2\` swaps \`1\` and \`3\`.
The result's BFS order is \`[4, 7, 2, 9, 6, 3, 1]\`.

## Correctness

Each node is visited once and its two child positions are exchanged. By
induction on subtree height, leaves are already valid mirrors, and a node whose
left and right subtrees have been inverted becomes the mirror of its original
subtree when those two results are swapped. Therefore the whole returned tree
is inverted.

## Complexity

- **Time:** \`O(n)\` for either traversal.
- **Iterative auxiliary space:** \`O(w)\`, where \`w\` is maximum tree width;
  \`O(n)\` worst case.
- **Recursive auxiliary space:** \`O(h)\` call stack; \`O(n)\` for a skewed tree and
  \`O(log n)\` for a balanced tree.

## Edge cases worth testing

- Empty tree
- One node
- Only left or only right children
- Balanced tree
- Skewed tree
- Inverting twice restores the original shape

### Optional refinements

Ruby parallel assignment, \`node.left, node.right = node.right, node.left\`, can
make the local swap concise. Explicit temporaries may be easier to narrate
during an interview.

</details>
`,"0232_queue_using_stacks":`# 232. Implement Queue Using Stacks

## Problem

Implement FIFO queue operations—\`push\`, \`pop\`, \`peek\`, and \`empty\`—using only
stack-style operations on two internal containers.

\`\`\`text
push(1), push(2), peek → 1, pop → 1, empty → false
\`\`\`

## What pattern is this?

This is **lazy transfer plus amortized analysis**. One stack accepts new values;
the other reverses a batch so the oldest value becomes its top.

## Brute-force baseline

With one stack, inserting at the queue's back while preserving FIFO order
requires moving all existing values away and back, making each push \`O(n)\`. An
array with \`shift\` appears simple in Ruby, but shifting moves remaining entries
and is also \`O(n)\`.

## Solution: input and output stacks

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def move_values_if_needed
  return unless @output.empty?

  @output.append(@input.pop) until @input.empty?
end
\`\`\`

- \`push\` appends to \`input\`.
- \`peek\` transfers all values from \`input\` to \`output\` only when \`output\` is
  empty, reversing their order.
- \`pop\` ensures that transfer, then pops from \`output\`.
- \`empty\` checks both stacks.

New pushes stay in \`input\` while older values remain in \`output\`. This preserves
FIFO order across interleaved operations.

### Key invariant

If \`output\` is non-empty, its last element is the oldest queued value. Every
value in \`output\` is older than every value in \`input\`. Transferring occurs only
after all older output values have been removed.

## Worked example

\`\`\`text
push 1,2,3: input=[1,2,3], output=[]
peek:       input=[],        output=[3,2,1] → 1
pop:        input=[],        output=[3,2]   → 1
push 4:     input=[4],       output=[3,2]
pop:        input=[4],       output=[3]     → 2
\`\`\`

### Why operations are amortized O(1)

One \`peek\` may transfer \`n\` values, but each value is appended to \`input\` once,
moved to \`output\` once, and popped once. Across any sequence of operations,
total work is linear in the number of values, so average cost per operation is
constant.

## Correctness

Reversing \`input\` places its oldest value at the top of \`output\`. The invariant
ensures existing output values are always older and are removed first. Thus
\`peek\` and \`pop\` return values in insertion order, while \`empty\` is true exactly
when neither group contains queued values.

## Complexity

- **Push:** \`O(1)\` worst case.
- **Peek/pop:** \`O(1)\` amortized, \`O(n)\` worst case for a transfer.
- **Empty:** \`O(1)\`.
- **Auxiliary space:** \`O(n)\` total across both stacks.

## Edge cases worth testing

- One value
- Peek without removing
- Push after some pops
- Several alternating pushes and pops
- Empty after removing the final value

### Optional refinements

Name the complexity as *amortized*, not simply worst-case \`O(1)\`. The public
method \`push\` is required by the problem; inside ordinary project code, the Ruby
glossary prefers \`.append\` for adding to arrays.

</details>
`,"0235_lca_binary_search_tree":`# 235. Lowest Common Ancestor of a Binary Search Tree

## Problem

Given two existing nodes \`p\` and \`q\` in a binary search tree, return their
lowest shared ancestor. A node counts as its own descendant.

\`\`\`text
        6
      /   \\
     2     8
    / \\
   0   4

LCA(2, 8) = 6
LCA(2, 4) = 2
\`\`\`

## What pattern is this?

This is **BST-directed search**. The ordering property tells us whether both
targets lie left, both lie right, or split at the current node.

## Brute-force baseline

Find and store the root-to-\`p\` path and root-to-\`q\` path, then return their last
shared node. That takes \`O(h)\` time but also \`O(h)\` auxiliary space. Treating it
as a general binary tree would traverse more nodes than the BST ordering
requires.

## Solution: walk toward both targets together

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
def lowest_common_ancestor(root, p, q)
  node = root

  while node
    if p.val > node.val && q.val > node.val
      node = node.right
    elsif p.val < node.val && q.val < node.val
      node = node.left
    else
      return node
    end
  end
end
\`\`\`

At each node:

- If both values are greater, move right.
- If both values are smaller, move left.
- Otherwise they split across the node, or one equals it; return that node.

The first split encountered from the root is the lowest common ancestor because
below it no single child subtree contains both targets.

### Key invariant

At the start of each iteration, the current node's subtree contains both \`p\`
and \`q\`. Moving left or right is safe only when both target values are on that
same side according to the BST ordering.

## Worked example

For \`p = 3\` and \`q = 5\`, start at \`6\`: both are lower, so move to \`2\`. Both are
higher than \`2\`, so move to \`4\`. Now \`3 < 4 < 5\`, so the paths split and \`4\` is
the LCA.

## Correctness

When both targets lie on one side, BST ordering proves the LCA must also lie in
that child subtree, preserving the invariant. At the first node where they do
not share a side, each target is either the node itself or in a different child
subtree. That node is their common ancestor, and no descendant can contain both,
so it is the lowest one.

## Complexity

Let \`h\` be tree height.

- **Iterative:** \`O(h)\` time and \`O(1)\` auxiliary space.
- **Recursive:** \`O(h)\` time and \`O(h)\` call-stack space.
- A balanced BST has \`h = O(log n)\`; a skewed BST has \`h = O(n)\`.

## Edge cases worth testing

- Targets on opposite sides of the root
- One target is the other's ancestor
- Adjacent nodes
- Both targets deep on one side
- Skewed BST

### Optional refinements

Comparing \`p.val\` and \`q.val\` directly is appropriate because standard BST
constraints use unique values. In a structure allowing duplicate keys, the
ordering and node-identity policy would need clarification.

</details>
`,"0238_product_of_array":`# 238. Product of Array Except Self

## Problem

For each index, return the product of every other array element. Use \`O(n)\` time
without division.

\`\`\`text
Input:  [1, 2, 3, 4]
Output: [24, 12, 8, 6]
\`\`\`

## What pattern is this?

This is **prefix and suffix accumulation**. The answer at an index factors into
the product strictly to its left and the product strictly to its right.

## Brute-force baseline

For every index, scan the whole array and multiply all other values: \`O(n²)\`
time. Multiplying everything once and dividing by each value is linear but is
forbidden and breaks when zeros are present.

## Solution: left products, then a running right product

<details>
<summary>Reveal explanation</summary>

\`\`\`ruby
answer = Array.new(nums.length, 1)

(1...nums.length).each do |index|
  answer[index] = answer[index - 1] * nums[index - 1]
end

right = 1
(nums.length - 1).downto(0) do |index|
  answer[index] *= right
  right *= nums[index]
end
\`\`\`

First fill \`answer[i]\` with the product of values before \`i\`:

\`\`\`text
answer[0] = 1
answer[i] = answer[i - 1] * nums[i - 1]
\`\`\`

Then walk from right to left with scalar \`right\`, initially \`1\`. Multiply each
\`answer[i]\` by \`right\`, then include \`nums[i]\` in \`right\` for the next index.
The output array doubles as prefix storage, so no separate left array is needed.

### Key invariant

After the first pass, \`answer[i]\` is the product strictly left of \`i\`. Before
processing an index in the second pass, \`right\` is the product strictly right
of it. Their product therefore excludes exactly \`nums[i]\`.

## Worked example

For \`[1, 2, 3, 4]\`:

\`\`\`text
left pass:  [1, 1, 2, 6]
right=1:    answer[3] = 6
right=4:    answer[2] = 8
right=12:   answer[1] = 12
right=24:   answer[0] = 24
\`\`\`

### Zero handling

No special branch is needed. With one zero, only its position receives the
product of nonzero values. With two zeros, every result contains at least one
zero and is zero.

## Correctness

The first recurrence constructs the exact left product for every index. The
right-to-left invariant constructs the exact right product at the moment each
answer is updated. Multiplying them includes every array element except the one
at that index, which proves every output entry is correct.

## Complexity

- **Time:** \`O(n)\` across two passes.
- **Auxiliary space:** \`O(1)\` excluding the required output array. If output is
  counted, total additional storage is \`O(n)\`.

## Edge cases worth testing

- Two elements
- One zero
- Two zeros
- Negative values
- All ones
- The zero is first or last

### Optional refinements

The implementation uses negative indexes in the right-to-left pass, which is
valid Ruby. An explicit descending integer index may be more immediately
readable to interviewers from other language backgrounds.

</details>
`,"0242_valid_anagram":`# 242. Valid Anagram

## Problem

Given two strings, return whether one contains exactly the same characters as
the other with exactly the same frequencies.

\`\`\`text
Input:  s = "anagram", t = "nagaram"
Output: true
\`\`\`

## What pattern is this?

- **Frequency counting with a Hash**
- **Consume inventory while scanning**
- Early rejection from incompatible lengths

## Brute-force baseline

A brute-force approach could repeatedly find and remove each character from a
copy of \`t\`. Each search or deletion can take \`O(n)\`, producing \`O(n²)\` time.
Sorting both strings is simpler and correct in \`O(n log n)\` time, but counting
lets us solve it in one pass over each string.

## Solution: count, then consume

<details>
<summary>Reveal explanation</summary>

First reject different lengths: they cannot contain the same multiset of
characters. Build a frequency Hash from \`s\`, then scan \`t\`. Every character in
\`t\` must have remaining inventory:

\`\`\`ruby
counts = s.chars.tally

t.each_char do |char|
  return false if counts[char].nil? || counts[char].zero?

  counts[char] -= 1
end
\`\`\`

The invariant is:

> After processing the first \`i\` characters of \`t\`, \`counts\` records exactly
> what remains available from \`s\`.

If a count is absent or zero, \`t\` asks for a character occurrence that \`s\`
does not have. If the entire scan succeeds, equal lengths guarantee that every
occurrence was matched; a second pass checking for zeros is unnecessary.

## Worked example

For \`s = "aab"\`, the initial counts are \`{ "a" => 2, "b" => 1 }\`.
Consuming \`t = "aba"\` changes the counts to \`a:1\`, then \`b:0\`, then \`a:0\`.
Every request was available, so the strings are anagrams.

## Correctness

The Hash starts with one unit for every occurrence in \`s\`. The scan removes one
unit for every occurrence in \`t\`, and rejects exactly when a requested unit is
unavailable. Therefore success means \`t\` uses no character more often than
\`s\`; because their lengths are equal, it also cannot use any character less
often. Their character multisets are equal.

## Complexity

- **Time:** \`O(n)\`, where \`n\` is the common string length.
- **Auxiliary space:** \`O(k)\` for \`k\` distinct characters. Under a fixed
  lowercase-English alphabet this is commonly described as \`O(1)\`; for general
  characters it is \`O(k)\` and can grow to \`O(n)\`.

## Edge cases worth testing

- Different lengths
- Empty strings
- Same characters with different frequencies
- Repeated characters
- Case sensitivity (\`"A"\` and \`"a"\` differ)

## Optional alternative

\`s.chars.sort == t.chars.sort\` is concise and does not mutate either string,
but costs \`O(n log n)\` time and \`O(n)\` auxiliary space in this Ruby solution.

</details>
`,"0252_meeting_rooms":`# 252. Meeting Rooms

## Problem

Given meeting intervals \`[start, end]\`, return whether one person can attend
every meeting without an overlap.

\`\`\`text
Input:  [[0, 30], [5, 10], [15, 20]]
Output: false
\`\`\`

Meetings that touch, such as \`[0, 5]\` and \`[5, 10]\`, do not overlap.

## What pattern is this?

- **Sort intervals by start time**
- **Compare adjacent intervals**
- Turn a global overlap question into local checks

## Brute-force baseline

The brute-force baseline compares every pair of meetings in \`O(n²)\` time. The
key observation is that after sorting, any overlap must appear between a
meeting and the one immediately after it.

## Solution: sort, then scan neighbors

<details>
<summary>Reveal explanation</summary>

Ruby's lexicographic array ordering sorts \`[start, end]\` intervals by start and
then by end:

\`\`\`ruby
sorted_intervals = intervals.sort
\`\`\`

For each adjacent pair, reject when the earlier meeting ends after the later
one starts:

\`\`\`text
previous end > next start  => overlap
previous end = next start  => allowed
\`\`\`

The invariant is:

> Before checking index \`i\`, all meetings through \`i\` are mutually compatible.

If \`sorted[i]\` does not overlap \`sorted[i + 1]\`, no earlier meeting can start
later than \`sorted[i]\`. An earlier meeting that extended into the next meeting
would already have overlapped its own next neighbor. Adjacent checks are enough.

## Worked example

\`\`\`text
Input:  [[7, 10], [2, 4], [4, 6]]
Sorted: [[2, 4], [4, 6], [7, 10]]
\`\`\`

\`4 == 4\` is allowed, and \`6 < 7\`, so all meetings can be attended.

## Correctness

If the algorithm reports an overlap, those two intervals directly conflict.
Conversely, suppose any two sorted intervals overlap. The later-starting one
also overlaps either its immediate predecessor or an interval whose end
extends through that predecessor; in either case an adjacent check fails.
Therefore the scan returns true exactly when no overlap exists.

## Complexity

- **Time:** \`O(n log n)\` for sorting; the scan is \`O(n)\`.
- **Auxiliary space:** \`O(n)\` for the non-mutating \`intervals.sort\` result,
  excluding Ruby's sorting internals.

## Edge cases worth testing

- No meetings or one meeting
- Meetings that exactly touch
- Nested intervals
- Duplicate intervals
- Input in reverse order
- The input array remains unchanged

## Optional refinements

Sorting with \`sort_by(&:first)\` makes the intended key explicit. If mutating
the caller's array is permitted, \`sort!\` can avoid the separate top-level copy,
but mutation should be an explicit choice.

</details>
`,"0278_first_bad_version":`# 278. First Bad Version

## Problem

Versions \`1..n\` begin good and, at some unknown boundary, become bad. Once a
version is bad, every later version is bad. Find the first bad version while
making as few calls as possible to \`is_bad_version(version)\`.

\`\`\`text
n = 5, first bad = 4
[good, good, good, bad, bad] => 4
\`\`\`

## What pattern is this?

- **Binary search on a monotonic predicate**
- **Lower-bound search**: find the first \`true\`
- Closed interval with a retained candidate

## Brute-force baseline

A linear scan is \`O(n)\` and may call the API for every version. Because the
answers have the shape \`false ... false, true ... true\`, binary search can
discard half of the remaining versions after each call.

## Solution: preserve the first-bad candidate

<details>
<summary>Reveal explanation</summary>

Start with \`left = 1\` and \`right = n\`. While they differ, inspect the midpoint.

- If \`mid\` is bad, the first bad version is \`mid\` or earlier, so set
  \`right = mid\`. Do not use \`mid - 1\`: \`mid\` is still a valid candidate.
- If \`mid\` is good, the boundary must be later, so set \`left = mid + 1\`.

The invariant is:

> The first bad version is always inside \`[left, right]\`.

Using \`mid = left + ((right - left) / 2)\` chooses the lower midpoint. Every
iteration shrinks the interval, and when \`left == right\`, the invariant says
that single version must be the answer.

\`\`\`ruby
while left < right
  mid = left + ((right - left) / 2)
  is_bad_version(mid) ? right = mid : left = mid + 1
end
\`\`\`

## Worked example

\`\`\`text
first bad = 4
[left, right] = [1, 5], mid = 3 => good => left = 4
[left, right] = [4, 5], mid = 4 => bad  => right = 4
return 4
\`\`\`

## Correctness

For a bad midpoint, monotonicity guarantees all later versions are bad, so
discarding everything after \`mid\` cannot discard the first bad version. For a
good midpoint, every version through \`mid\` is good, so discarding them is safe.
The invariant is preserved until one candidate remains; that candidate is the
first bad version.

## Complexity

- **Time / API calls:** \`O(log n)\`.
- **Auxiliary space:** \`O(1)\`.

## Edge cases worth testing

- \`n = 1\`
- The first version is bad
- Only the last version is bad
- Two remaining candidates
- A very large \`n\`

## When to use—and not use—this pattern

Use lower-bound binary search whenever a predicate changes once from false to
true. Do not use it if good and bad answers can alternate; without monotonicity,
discarding half the search space is not valid.

</details>
`,"0322_coin_change":`# 322. Coin Change

## Problem

Given coin denominations and a target amount, return the fewest coins needed
to make the amount. Each denomination may be used any number of times. Return
\`-1\` when no combination works.

\`\`\`text
coins = [1, 2, 5], amount = 11
answer = 3  # 5 + 5 + 1
\`\`\`

## What pattern is this?

- **One-dimensional dynamic programming**
- Unbounded choices
- Build larger answers from already-solved smaller amounts

## Brute-force baseline

Brute-force recursion tries every possible next coin. Its search tree repeats
the same remaining amounts and grows exponentially. A greedy choice is not
generally correct: with \`[1, 3, 4]\` and amount \`6\`, choosing \`4\` first uses
three coins, while \`3 + 3\` uses two.

## Solution: bottom-up minimums

<details>
<summary>Reveal explanation</summary>

Define \`cache[value]\` as the minimum number of coins needed to make \`value\`.
The base case is \`cache[0] = 0\`. Initialize other entries to the impossible
sentinel \`amount + 1\`, which is larger than any real answer when coin \`1\`
exists.

For every subtotal and every usable coin:

\`\`\`ruby
candidate = cache[subtotal - coin] + 1
cache[subtotal] = [cache[subtotal], candidate].min
\`\`\`

The state transition says: if the last coin is \`coin\`, the preceding coins
must optimally form \`subtotal - coin\`.

The invariant is:

> Before calculating amount \`i\`, \`cache[0...i]\` contains optimal answers.

Because every dependency \`i - coin\` is smaller than \`i\`, it has already been
solved. Unlimited reuse happens naturally: a state may build on another state
that used the same coin.

## Worked example

For coins \`[1, 3, 4]\`, the table through amount \`6\` is:

\`\`\`text
amount: 0 1 2 3 4 5 6
coins:  0 1 2 1 1 2 2
\`\`\`

At \`6\`, coin \`3\` gives \`cache[3] + 1 = 2\`, beating the greedy \`4 + 1 + 1\`.

## Correctness

Assume all smaller states are optimal. Every valid way to make \`i\` has some
last coin \`c\`, leaving a valid way to make \`i - c\`. The transition considers
every denomination and combines it with the optimal solution to that remainder.
Taking the minimum therefore finds an optimal solution for \`i\`. By induction,
the answer for \`amount\` is optimal. A remaining sentinel means no transition
from a reachable state could form the amount, so \`-1\` is correct.

## Complexity

Let \`a\` be \`amount\` and \`c\` be \`coins.length\`.

- **Time:** \`O(a × c)\`.
- **Auxiliary space:** \`O(a)\`.

## Edge cases worth testing

- Amount zero → \`0\`
- No possible combination → \`-1\`
- One coin exactly equals the amount
- A case where greedy fails
- A single denomination

## Optional refinements

A top-down memoized solution has the same asymptotic bounds and can feel closer
to the recurrence, but adds recursion-stack risk. Breadth-first search over
reachable amounts also finds the minimum number of coins, though the DP table
is usually simpler here.

</details>
`,"0383_ransom_note":`# 383. Ransom Note

## Problem

Return whether \`ransom_note\` can be assembled from the characters in
\`magazine\`. Each magazine character occurrence may be used at most once.

\`\`\`text
ransom_note = "aa", magazine = "aab" => true
ransom_note = "aa", magazine = "ab"  => false
\`\`\`

## What pattern is this?

- **Frequency counting / inventory Hash**
- Consume a limited resource
- Fail as soon as demand exceeds supply

## Brute-force baseline

A brute-force solution can search a mutable magazine copy for every required
character, taking \`O(r × m)\` time in the worst case. Sorting both strings works
in \`O(m log m + r log r)\`, but counting is linear.

## Solution: count supply, then consume demand

<details>
<summary>Reveal explanation</summary>

If the note is longer than the magazine, reject immediately. Then count the
magazine's characters with \`tally\`. For each note character, require a positive
count and decrement it.

The invariant is:

> After processing a note prefix, the Hash contains exactly the unused
> magazine-character inventory.

Missing keys and zero counts mean the same thing: no copy of that character
remains. Reject before decrementing so counts never need to become negative.

\`\`\`ruby
counts = magazine.chars.tally
ransom_note.each_char do |char|
  return false if counts[char].nil? || counts[char].zero?
  counts[char] -= 1
end
\`\`\`

## Worked example

\`\`\`text
magazine "aab" => {a: 2, b: 1}
need a         => {a: 1, b: 1}
need a         => {a: 0, b: 1}
\`\`\`

All demand was met, so return true. For note \`"aaa"\`, the third \`a\` would see
zero inventory and return false.

## Correctness

Each Hash count initially equals the number of usable copies in the magazine.
Each processed note character consumes exactly one matching copy. Thus the
algorithm rejects exactly when a required occurrence has no corresponding
magazine occurrence. If it completes, every note occurrence has a distinct
source occurrence, so construction is possible.

## Complexity

Let \`m\` be the magazine length and \`r\` the note length.

- **Time:** \`O(m + r)\`.
- **Auxiliary space:** \`O(k)\` for distinct characters; \`O(1)\` if the alphabet
  is fixed to lowercase English letters.

## Edge cases worth testing

- Empty ransom note
- Note longer than magazine
- Exact inventory
- Correct characters but insufficient repeated copies
- Case-sensitive input

## Optional alternative

The included sorted-stack solution is useful practice but less direct. It
sorts both character arrays, then consumes matching smallest characters. Its
time is \`O(m log m + r log r)\` and auxiliary space is \`O(m + r)\`.

</details>
`,"0409_longest_palindrome":`# 409. Longest Palindrome

## Problem

Given a case-sensitive string, return the maximum length of a palindrome that
can be built by rearranging some or all of its characters.

\`\`\`text
Input:  "abccccdd"
Output: 7  # one arrangement is "dccaccd"
\`\`\`

## What pattern is this?

- **Frequency counting**
- Pair symmetric resources
- Allow at most one unpaired center

## Brute-force baseline

Generating permutations is factorial and unnecessary: the order does not
matter until after we know how many pairs and possible center characters exist.

## Solution: take every pair and one odd center

<details>
<summary>Reveal explanation</summary>

A palindrome mirrors around its center. A character occurring \`count\` times
can contribute the greatest even number at most \`count\`:

\`\`\`ruby
paired = (count / 2) * 2
\`\`\`

For example, counts \`1, 2, 3, 4, 5\` contribute \`0, 2, 2, 4, 4\` paired
characters. If any count is odd, one leftover character may occupy the single
center position.

The implementation adds pairs and then adds a center only while the answer is
even. Once a center has been added, the total is odd and no later odd count can
add another.

The invariant is:

> After each frequency, \`answer\` contains all available pairs seen so far and
> at most one unpaired center.

## Worked example

For \`"abccccdd"\`, counts are \`a:1, b:1, c:4, d:2\`.

\`\`\`text
pairs: 0 + 0 + 4 + 2 = 6
an odd count exists, so add one center = 7
\`\`\`

The other odd character cannot be used because a palindrome has only one
center.

## Correctness

Every non-center character in a palindrome requires an identical mirror copy,
so no solution can use more than the largest even part of each frequency.
The algorithm uses all such pairs. A palindrome can use one additional
character iff any frequency is odd, and the algorithm adds exactly one.
It therefore reaches the upper bound and is optimal.

## Complexity

- **Time:** \`O(n)\`.
- **Auxiliary space:** \`O(k)\` for \`k\` distinct characters; this is \`O(1)\` under
  a fixed character alphabet.

## Edge cases worth testing

- Empty string → \`0\`
- One character → \`1\`
- Every count even
- Several odd counts—only one center is allowed
- Uppercase and lowercase are distinct

## Optional refinement

An equivalent formulation sums every even part, remembers whether any odd
count exists, and adds one at the end. That can make the one-center rule more
explicit, while the current implementation remains correct.

</details>
`,"0509_fibonacci_number":`# 509. Fibonacci Number

## Problem

Return the \`n\`th Fibonacci number, where \`F(0) = 0\`, \`F(1) = 1\`, and
\`F(n) = F(n - 1) + F(n - 2)\`.

\`\`\`text
n = 5 => 5
sequence: 0, 1, 1, 2, 3, 5
\`\`\`

## What pattern is this?

- **Dynamic programming**
- Overlapping subproblems
- Space-optimized bottom-up iteration or top-down memoization

## Brute-force baseline

Naive recursion directly mirrors the definition but recalculates the same
values many times. Its call tree grows exponentially—approximately \`O(2ⁿ)\`—
with \`O(n)\` call-stack depth.

## Solution 1: retain the previous two values

<details>
<summary>Reveal explanation</summary>

Return the two base cases directly. For larger \`n\`, retain the two most recent
values and advance them together:

\`\`\`ruby
previous = 0
current = 1
2.upto(n) { previous, current = current, previous + current }
current
\`\`\`

The invariant is:

> Before iteration \`i\`, \`previous == F(i - 2)\` and \`current == F(i - 1)\`.

## Worked example

For \`n = 5\`, the retained pair advances:

\`\`\`text
(0, 1) → (1, 1) → (1, 2) → (2, 3) → (3, 5)
\`\`\`

Each new pair is correct by the recurrence, so the final \`current\` is \`F(n)\`.

## Solution 2: top-down memoization

The second Ruby file begins with the same base cases and recursively calculates
missing values. \`cache[n] ||= ...\` ensures each positive index is computed only
once. This preserves the recursive shape while eliminating repeated work.

## Correctness

Both solutions return the declared base cases directly. For any \`n >= 2\`, they
obtain already-correct values for \`n - 1\` and \`n - 2\` and sum them, exactly
matching the definition. Induction on \`n\` proves every result correct.

## Complexity

- **Bottom-up:** \`O(n)\` time and \`O(1)\` auxiliary space.
- **Memoized recursion:** \`O(n)\` time and \`O(n)\` auxiliary space for both the
  memo and recursion stack.

The returned integer itself grows to \`Θ(n)\` bits, a detail normally omitted
from interview complexity for this problem.

## Edge cases worth testing

- \`n = 0\` and \`n = 1\`
- First computed value, \`n = 2\`
- A larger value such as \`n = 30\`

## Optional refinement

A full \`O(n)\` table is useful when later work needs every prior Fibonacci value.
For this problem, the recurrence depends on only two states, so retaining the
whole table is unnecessary.

</details>
`,"0535_encode_decode_tinyurl":`# 535. Encode and Decode TinyURL

## Problem

Implement two operations: encode a long URL as a short URL, and decode a short
URL previously produced by the same solution back to the exact original.

\`\`\`text
encode("https://example.com/a") => "http://tinyurl.com/K9m2Qa"
decode("http://tinyurl.com/K9m2Qa") => "https://example.com/a"
\`\`\`

The particular short code is not prescribed.

## What pattern is this?

- **Bidirectional design backed by a Hash lookup**
- Random identifier generation with collision detection
- State that persists across paired operations

## Brute-force baseline

This is less an algorithm puzzle than a small data-structure design problem.
Returning part of the original URL is not safe: URLs can be arbitrarily long,
and a reversible encoding without stored state may not actually be shorter.

## Solution: random code plus lookup table

<details>
<summary>Reveal explanation</summary>

\`encode\` generates a six-character alphanumeric code, retries if that code is
already a key, stores \`code => long_url\`, and returns the code with a short
domain prefix. \`decode\` removes the known prefix and performs a Hash lookup.

The invariant is:

> Every returned short code is a key whose stored value is the exact long URL
> supplied to that encode call.

Collision checking matters even though collisions are unlikely. Without it, a
new encoding could overwrite an older mapping and break the required round trip.

\`\`\`ruby
short_code = SecureRandom.alphanumeric(6)
short_code = SecureRandom.alphanumeric(6) while cache[short_code]
cache[short_code] = long_url
\`\`\`

## Worked example

\`\`\`text
generated code: K9m2Qa
cache: { "K9m2Qa" => "https://example.com/a" }
short URL: http://tinyurl.com/K9m2Qa
\`\`\`

Decoding extracts \`K9m2Qa\` and retrieves the stored URL.

## Correctness

Before insertion, the loop guarantees the chosen code is unused. Storing the
long URL under that code establishes a unique mapping that is not overwritten.
The returned short URL contains that exact code. Decode recovers the code and
returns its associated value, so \`decode(encode(url)) == url\`.

## Complexity

Assuming ordinary constant-time Hash behavior and a sparsely occupied fixed-size
code space:

- **Encode:** expected \`O(1)\` time; Ruby stores a reference to the supplied URL
  and generates a fixed six-character code.
- **Decode:** expected \`O(1)\` time; the short URL has fixed length and the Hash
  lookup is constant on average.
- **Stored state:** \`O(n)\` mappings after encoding \`n\` URLs. If counting the URL
  strings owned by the service rather than references supplied by callers, the
  stored characters total \`O(sum of URL lengths)\`.

As the finite code space fills, collisions and retries increase. Six
alphanumeric characters provide \`62⁶\` possible codes, but no fixed random-code
scheme can promise constant attempts near capacity.

## Edge cases worth testing

- Multiple URLs round-trip independently
- Repeated encoding of the same URL (this design may return different codes)
- A generated collision retries instead of overwriting
- URL containing query parameters or the short-domain text

## Production considerations

The exercise permits in-memory state. A real service needs durable storage,
concurrency-safe uniqueness, canonical prefix parsing, expiration policy,
abuse controls, and a strategy for horizontal scaling. A database uniqueness
constraint would be the final authority on collisions.

</details>
`,"0542_01_matrix":`# 542. 01 Matrix

## Problem

For every cell in a binary matrix, return its shortest four-directional
distance to any zero. Moving one cell up, down, left, or right costs one.

\`\`\`text
Input:  [[0,0,0], [0,1,0], [1,1,1]]
Output: [[0,0,0], [0,1,0], [1,2,1]]
\`\`\`

## What pattern is this?

- **Grid dynamic programming with directional passes**
- Each answer is one plus the best neighboring answer
- Equivalent graph framing: multi-source breadth-first search

## Brute-force baseline

Running a separate search from every \`1\` can visit most of the grid per cell,
costing \`O((rows × columns)²)\`. We need to share distance information.

## Solution: two directional DP passes

<details>
<summary>Reveal explanation</summary>

Initialize zeros to distance zero and other cells to an impossible upper bound.
The closest zero can lie in any direction, but one directional pass only knows
some neighbors:

1. Top-left to bottom-right: use \`above\` and \`left\`.
2. Bottom-right to top-left: improve with \`below\` and \`right\`.

For a nonzero cell:

\`\`\`text
distance = min(current, known neighbor + 1)
\`\`\`

\`\`\`ruby
above = output[row - 1][col] + 1 if row.positive?
left = output[row][col - 1] + 1 if col.positive?
output[row][col] = [output[row][col], above, left].compact.min
\`\`\`

After the first pass, every cell has its best distance to a zero reachable via
an up/left path. After the second, it also considers down/right paths.

The key geometric fact is that a shortest grid path between two cells can be
chosen without reversing vertical or horizontal direction. Relative to the
target zero, that path is represented by one of the two pass orientations.

## Worked example

For a zero in the bottom-right corner:

\`\`\`text
input:       after both passes:
1 1 1        4 3 2
1 1 1        3 2 1
1 1 0        2 1 0
\`\`\`

The first pass cannot learn much from that zero; the reverse pass propagates
its distances up and left.

## Correctness

Zeros are assigned their exact distance, zero. Each transition constructs a
real path by taking one step to a neighbor, so it never invents a distance
shorter than possible. Every cell's shortest path to some zero approaches that
zero through one of the neighbors covered by the forward or reverse ordering.
When that transition is processed, the neighbor's best relevant distance is
known, so the cell receives its true shortest distance. Taking minimums across
both passes preserves it.

## Complexity

Let \`R\` be rows and \`C\` columns.

- **Time:** \`O(R × C)\`; each cell is processed twice.
- **Auxiliary space:** \`O(R × C)\` for the returned distance matrix. Excluding
  output storage, the algorithm uses \`O(1)\` additional scalar state.

## Edge cases worth testing

- All zeros
- One zero in a corner
- A single row or column
- Several equally near zeros
- A cell surrounded by ones

## Alternative: multi-source BFS

Add every zero to one queue at distance zero, then expand all of them together.
The first time BFS reaches a cell is its shortest distance. That approach is
also \`O(R × C)\` time and uses \`O(R × C)\` queue/output space; it is often easier
to generalize when movement rules change.

</details>
`,"0543_diameter_of_binary_tree":`# 543. Diameter of Binary Tree

## Problem

Return the number of edges in the longest path between any two nodes of a
binary tree. The path does not have to pass through the root.

\`\`\`text
    1
   / \\
  2   3
 / \\
4   5

diameter = 3  # 4-2-1-3 or 5-2-1-3
\`\`\`

## What pattern is this?

- **Postorder depth-first search**
- Return one value upward while tracking a different global/subtree answer
- Tree DP: combine left and right child results

## Brute-force baseline

A brute-force baseline computes the height from every node independently. On a
skewed tree, those repeated subtree traversals cost \`O(n²)\`.

## Solution: compute height and diameter together

<details>
<summary>Reveal explanation</summary>

At each node, recursively obtain the left and right subtree heights. Two
different quantities matter:

- The path this node can extend to its parent: \`max(left, right) + 1\` nodes.
- The best path passing through this node: \`left + right\` edges.

The helper returns \`[height, best_diameter]\`. The diameter for a subtree is the
maximum of its left-subtree diameter, right-subtree diameter, and path through
the current node.

\`\`\`ruby
left_height, left_best = diameter_of_nodes(node.left)
right_height, right_best = diameter_of_nodes(node.right)
best = [left_best, right_best, left_height + right_height].max
\`\`\`

The invariant is:

> For every completed recursive call, \`height\` is the longest downward path in
> nodes from that subtree root, and \`best_diameter\` is the longest path in edges
> entirely inside that subtree.

The units line up because a left height of two nodes and right height of one
node produce three connecting edges through the current node.

## Worked example

In the example tree, node \`2\` returns height \`2\` and subtree diameter \`2\`.
Node \`3\` returns height \`1\`. At root \`1\`, their heights combine to a path of
\`2 + 1 = 3\` edges, which becomes the final diameter.

### Why the path may avoid the root

Each node evaluates itself as the possible highest point of the diameter. The
maximum is carried upward even if an ancestor cannot extend that path, so a
long path entirely inside one subtree is not lost.

## Correctness

For an empty subtree, height and diameter are zero. Assume both child results
are correct. Any longest path inside the current subtree is either wholly in
the left child, wholly in the right child, or crosses through the current node.
The helper takes the maximum of exactly those three exhaustive cases. Its
returned height chooses the longer child path and extends it by the current
node. By induction, both returned quantities are correct at every node,
including the root.

## Complexity

Let \`n\` be nodes and \`h\` be tree height.

- **Time:** \`O(n)\`; each node is processed once.
- **Auxiliary space:** \`O(h)\` for recursion: \`O(log n)\` in a balanced tree and
  \`O(n)\` in a fully skewed tree.

## Edge cases worth testing

- Empty tree → \`0\`
- One node → \`0\` edges
- Two nodes → \`1\`
- Diameter entirely below the root
- Fully skewed tree

## Optional refinement

A closure-scoped \`max_diameter\` can let the helper return only height. The tuple
return used here makes the state explicit and avoids hidden mutable state; both
forms implement the same postorder recurrence.

</details>
`,"0704_binary_search":`# 704. Binary Search

## Problem

Given an ascending sorted array of distinct integers and a target, return the
target's index or \`-1\` when it is absent.

\`\`\`text
nums = [-1, 0, 3, 5, 9, 12], target = 9 => 4
\`\`\`

## What pattern is this?

- **Classic binary search**
- Closed interval \`[left, right]\`
- Use sorted order to discard half the candidates

## Brute-force baseline

The brute-force baseline scans from left to right in \`O(n)\` time. Sorting is
already guaranteed, so a midpoint comparison tells us which half cannot
contain the target.

## Solution: closed-interval binary search

<details>
<summary>Reveal explanation</summary>

Start with both endpoints included. While \`left <= right\`, compare the target
with the midpoint value.

- Equal: return the midpoint.
- Midpoint is too large: set \`right = midpoint - 1\`.
- Midpoint is too small: set \`left = midpoint + 1\`.

The invariant is:

> If the target exists and has not been returned, its index is inside
> \`[left, right]\`.

Strictly excluding the checked midpoint (\`- 1\` or \`+ 1\`) ensures progress.
When \`left > right\`, the candidate interval is empty and \`-1\` is correct.

\`\`\`ruby
while left <= right
  mid = left + ((right - left) / 2)
  return mid if nums[mid] == target
  nums[mid] > target ? right = mid - 1 : left = mid + 1
end
\`\`\`

## Worked example

\`\`\`text
nums = [1, 3, 5, 7, 9], target = 7
[0,4], mid 2 => 5 is too small => [3,4]
[3,4], mid 3 => 7 found at 3
\`\`\`

## Correctness

If the midpoint is below the target, sorted order proves every index at or left
of it is also too small. The symmetric statement holds when it is above the
target. Thus each update removes only impossible indexes and preserves the
invariant. The algorithm either returns the matching midpoint or exhausts all
possible indexes, proving absence.

## Complexity

- **Time:** \`O(log n)\`.
- **Auxiliary space:** \`O(1)\`.

## Edge cases worth testing

- Empty array
- One element, present or absent
- Target at the first or last index
- Target between two values
- Negative values

## When not to use it

Binary search requires random access and a monotonic ordering property. It is
not useful on unsorted input unless sorting first is acceptable; sorting just
for one lookup costs \`O(n log n)\`, worse than a linear scan. Different binary
search questions may ask for the first valid position rather than exact
equality, requiring different boundary updates.

</details>
`,"0733_flood_fill":`# 733. Flood Fill

## Problem

Starting at one pixel in a grid, recolor that pixel and every four-directionally
connected pixel with the same original color. Return the mutated image.

\`\`\`text
input:                  start = [1,1], new color = 2
1 1 1                   2 2 2
1 1 0        =>         2 2 0
1 0 1                   2 0 1
\`\`\`

## What pattern is this?

- **Connected-component traversal in a grid**
- Depth-first search or breadth-first search
- Mark when visited to prevent repeated work

## Brute-force baseline

A brute-force repeated scan could recolor one frontier layer per full-grid
pass, costing up to quadratic time in the number of pixels. A graph traversal
visits the relevant component directly.

## Solution 1: recursive DFS

<details>
<summary>Reveal explanation</summary>

Record the starting pixel's original color. DFS recolors the current pixel,
then recursively visits each in-bounds neighbor that still has the original
color. Recoloring acts as the visited mark.

The early return when \`new_color == old_color\` is essential. Otherwise
recoloring would not mark progress, and adjacent same-color pixels could recurse
back and forth forever.

The invariant is:

> Every recolored pixel is connected to the start through original-color
> pixels, and every discovered but unfinished neighbor is still reachable.

\`\`\`ruby
image[row][col] = new_color
dfs(image:, row: row - 1, col:, old_color:, new_color:) if row.positive?
\`\`\`

## Solution 2: BFS

The second Ruby implementation uses a queue and a \`Set\` of visited coordinates.
An index advances through the queue instead of removing its first element, so
queue operations remain \`O(1)\` in Ruby. DFS and BFS produce the same final
component; only traversal order and memory shape differ. Ruby 3.2 provides
\`Set\` without an explicit \`require\`.

## Worked example

Starting at the center of the sample grid, traversal reaches the top row and
left-center through same-color edges. The bottom-right \`1\` remains unchanged
because every four-directional path to it crosses a \`0\`; diagonal contact does
not connect components.

## Correctness

The start is reachable from itself. Whenever either traversal adds a neighbor,
that neighbor is in bounds, has the original color, and is adjacent to an
already reachable pixel, so every recolored cell belongs to the target
component. Conversely, take any pixel in that component. Along its path from
the start, the traversal examines each successive edge and eventually discovers
the pixel. Therefore exactly the connected component is recolored.

## Complexity

Let \`P\` be the number of pixels and \`C\` the size of the filled component.

- **Time:** \`O(C)\`, bounded by \`O(P)\`.
- **DFS auxiliary space:** \`O(C)\` worst case for recursion.
- **BFS auxiliary space:** \`O(C)\` for queue and visited coordinates.
- The image is modified in place; the returned image is not extra output copy.

## Edge cases worth testing

- New color equals old color
- One pixel
- Component touches grid boundaries
- Same-colored diagonal pixels are not connected
- Entire grid is one component
- Enclosed regions of another color remain unchanged

## Choosing DFS vs. BFS

Recursive DFS is compact but a very large component can overflow Ruby's call
stack. Iterative BFS avoids recursion depth and is preferable when that risk
matters. BFS level order is not otherwise needed because every pixel receives
the same color.

</details>
`,"0876_middle_of_linked_list":`# 876. Middle of the Linked List

## Problem

Return the middle node of a singly linked list. When the list has even length,
return the second of the two middle nodes.

\`\`\`text
1 -> 2 -> 3 -> 4 -> 5       returns node 3
1 -> 2 -> 3 -> 4 -> 5 -> 6  returns node 4
\`\`\`

## What pattern is this?

- **Fast and slow pointers**
- Derive a fractional position in one traversal
- Constant-space linked-list navigation

## Brute-force baseline

A simple baseline stores every node in an array, then returns index
\`nodes.length / 2\`. That is \`O(n)\` time and \`O(n)\` auxiliary space. Counting in
one traversal and advancing halfway in a second uses \`O(1)\` space but two passes.

## Solution: one pointer moves twice as fast

<details>
<summary>Reveal explanation</summary>

Initialize \`slow\` and \`fast\` at the head. On every iteration, move \`slow\` one
edge and \`fast\` two:

\`\`\`ruby
slow = slow.next
fast = fast.next.next
\`\`\`

Continue while \`fast\` and \`fast.next\` exist. When fast can no longer take two
steps, slow has taken half as many steps as the list length requires.

The invariant is:

> After \`k\` loop iterations, slow has moved \`k\` edges and fast has moved \`2k\`.

For odd length \`2k + 1\`, fast reaches the final node and slow is index \`k\`.
For even length \`2k\`, fast becomes \`nil\` after slow advances to index \`k\`, the
second middle. The loop condition naturally implements the tie-breaking rule.

## Worked example

\`\`\`text
list: 1 -> 2 -> 3 -> 4
start: slow=1, fast=1
step 1: slow=2, fast=3
step 2: slow=3, fast=nil
return 3
\`\`\`

## Correctness

The invariant follows directly from the pointer advances. Termination means
fast has covered all \`n\` nodes (or reached the final odd node), while slow has
advanced \`floor(n / 2)\` edges. That index is the unique middle for odd \`n\` and
the second middle for even \`n\`, so the returned node is correct.

## Complexity

- **Time:** \`O(n)\`.
- **Auxiliary space:** \`O(1)\`.

## Edge cases worth testing

- One node
- Two nodes—return the second
- Odd and even lengths
- Values are irrelevant; node identity matters

## When else to use this pattern

Fast/slow pointers also detect linked-list cycles, find cycle entry points, and
split lists for merge sort. It depends on linked traversal; for a Ruby Array,
direct indexing already finds the middle in \`O(1)\`.

</details>
`,"0973_k_closest_points":`# 973. K Closest Points to Origin

## Problem

Given points \`[x, y]\`, return the \`k\` points closest to \`[0, 0]\`. Result order
does not matter, and the answer set is guaranteed to be unique.

\`\`\`text
points = [[1, 3], [-2, 2]], k = 1
answer = [[-2, 2]]
\`\`\`

## What pattern is this?

- **Rank items by a computed key**
- Sorting as the straightforward top-\`k\` baseline
- Heap or quickselect as optional selection refinements

## Brute-force baseline

A truly brute-force selection can repeatedly scan all remaining points for the
closest, costing \`O(k × n)\`. Sorting every point once is simpler and has a clear
\`O(n log n)\` bound.

## Solution: sort by squared distance

<details>
<summary>Reveal explanation</summary>

Euclidean distance is \`sqrt(x² + y²)\`. Square root is monotonic for nonnegative
numbers, so comparing \`x² + y²\` produces exactly the same ordering without
computing square roots.

\`\`\`ruby
points.sort_by { |x, y| (x * x) + (y * y) }.first(k)
\`\`\`

\`sort_by\` is non-mutating, so the caller's points remain in their original
order. After sorting, the first \`k\` entries are returned.

The invariant after sorting is:

> No point to the right has smaller squared distance than a point to its left.

Duplicate coordinates require no special handling: they are separate input
points and may both belong in the output. Equal distances are also fine because
answer order is unrestricted; the problem guarantees the selected set is not
ambiguous at the cutoff.

## Worked example

\`\`\`text
[1, 3]  => 1² + 3²  = 10
[-2, 2] => (-2)²+2² = 8
\`\`\`

Eight is smaller than ten, so \`[-2, 2]\` is the closest.

## Correctness

Squared distance preserves the ordering of actual distance. Sorting therefore
places points in nondecreasing distance from the origin. Every point among the
first \`k\` is no farther than every point after it, which is exactly the
definition of the \`k\` closest points.

## Complexity

- **Time:** \`O(n log n)\`.
- **Auxiliary space:** \`O(n)\` for Ruby's non-mutating sorted array, plus an
  \`O(k)\` returned array. Output storage is normally excluded from auxiliary
  space.

## Edge cases worth testing

- \`k = 1\`
- \`k = points.length\`
- The origin \`[0, 0]\`
- Negative coordinates
- Equal distances and duplicate coordinates
- Input remains unchanged

## Optional refinements

- A size-\`k\` max-heap uses \`O(n log k)\` time and \`O(k)\` auxiliary space; use it
  for streaming input or when \`k\` is much smaller than \`n\`.
- Quickselect has \`O(n)\` expected time and \`O(n²)\` worst-case time, usually
  mutating the input. It is valuable when optimal average selection time
  matters more than implementation simplicity.

</details>
`,"0981_time_based_kv_store":`# 981. Time Based Key-Value Store

## Problem

Store values under a key at strictly increasing timestamps. A lookup for
\`(key, timestamp)\` returns the value with the greatest stored timestamp less
than or equal to the requested one, or \`""\` when none exists.

\`\`\`text
set("foo", "bar", 1)
get("foo", 1) => "bar"
get("foo", 3) => "bar"
\`\`\`

## What pattern is this?

- **Hash of sorted histories**
- Binary search for the rightmost valid value
- Exploit ordered writes to avoid sorting

## Brute-force baseline

A baseline Hash per exact timestamp can scan backward from the requested time,
but its cost depends on the timestamp magnitude, not the number of stored
values. A linear scan through the key's history costs \`O(n)\` per lookup.

## Solution: append writes, binary-search reads

<details>
<summary>Reveal explanation</summary>

Map each key to an array of \`[timestamp, value]\` pairs. The problem guarantees
timestamps supplied to \`set\` increase, so appending preserves sorted order in
\`O(1)\` time.

For \`get\`, binary-search that key's history. Whenever the midpoint timestamp is
at most the requested timestamp, its value is a valid candidate. Save it, then
move right to seek a newer valid value. If the midpoint is too new, move left.

The invariant is:

> \`answer\` is the newest valid value seen so far; any unseen value that could
> improve it lies within \`[left, right]\`.

This is a rightmost-\`<=\` boundary search, not merely an exact-match search.

\`\`\`ruby
answer = ""
while left <= right
  mid = left + ((right - left) / 2)
  if history[mid][0] <= timestamp
    answer = history[mid][1]
    left = mid + 1
  else
    right = mid - 1
  end
end
\`\`\`

## Worked example

\`\`\`text
history = [[10, "high"], [20, "low"]]
get at 15:
  timestamp 10 is valid => answer = "high", search right
  timestamp 20 is too new => search left
  return "high"
\`\`\`

## Correctness

Every valid midpoint becomes the answer before earlier candidates are
discarded, and searching right retains exactly the entries that might be newer
while still valid. A too-new midpoint and everything to its right are invalid,
so discarding them is safe. On termination no unexamined entry can improve the
saved candidate. It is therefore the value with the greatest timestamp at most
the request, or empty if no candidate was ever valid.

## Complexity

For \`n\` values stored under the queried key:

- **\`set\`:** \`O(1)\` amortized time.
- **\`get\`:** \`O(log n)\` time.
- **Storage:** \`O(N)\` across all \`N\` calls to \`set\`; each lookup uses \`O(1)\`
  auxiliary space.

## Edge cases worth testing

- Missing key
- Request before the key's first timestamp
- Exact timestamp
- Between two stored timestamps
- After the latest timestamp
- Many keys with independent histories

## Important assumption

Appending is correct only because timestamps increase across writes. If
out-of-order writes were allowed, insertion would need to preserve order (or
histories would need sorting before search), changing write complexity and
concurrency considerations.

</details>
`,"0994_rotting_oranges":`# 994. Rotting Oranges

## Problem

A grid contains empty cells (\`0\`), fresh oranges (\`1\`), and rotten oranges
(\`2\`). Every minute, all fresh oranges adjacent up, down, left, or right to a
rotten orange become rotten. Return the minutes until no fresh orange remains,
or \`-1\` when some can never rot.

\`\`\`text
[[2,1,1], [1,1,0], [0,1,1]] => 4
\`\`\`

## What pattern is this?

- **Multi-source breadth-first search**
- Level/distance propagation across an unweighted grid
- Track remaining work to detect unreachable cells

## Brute-force baseline

A minute-by-minute full-grid rescan can take \`O((R × C)²)\`: each minute scans
every cell even though only the frontier matters. Starting a search from every
rotten orange separately repeats work and does not model simultaneous spread.

## Solution: put every initial source in one queue

<details>
<summary>Reveal explanation</summary>

During the initial grid scan:

- Append every rotten orange to the queue with minute \`0\`.
- Count every fresh orange.

Then BFS from all sources together. When a queued cell finds a fresh neighbor,
mark it rotten immediately, decrement \`fresh\`, and append it with minute
\`current_minute + 1\`. A head index advances through the Ruby Array so removal
does not require shifting all remaining entries.

The invariant is:

> When a cell is removed from the queue at minute \`m\`, \`m\` is the earliest
> minute it can rot; every already-discovered fresh cell has been marked once.

Immediate marking prevents two frontier cells from enqueueing the same orange.
Multiple sources are essential: BFS layers represent simultaneous minutes.

\`\`\`ruby
while head < queue.length
  row, col, minute = queue[head]
  head += 1
  # Append each fresh neighbor with minute + 1.
end
\`\`\`

## Worked example

\`\`\`text
minute 0: rotten sources already in the grid
minute 1: all fresh neighbors of those sources
minute 2: all not-yet-rotten neighbors of minute 1
...
\`\`\`

For \`[2, 1, 1, 1, 2]\`, both ends spread at once, so the answer is \`2\`, not \`4\`.

## Correctness

The queue initially contains every possible minute-zero source. BFS explores
unit-length grid edges in nondecreasing distance from this source set, so the
first discovery time of each reachable fresh orange is its minimum rot time.
Every reachable fresh orange is eventually discovered. If the fresh counter is
zero afterward, the largest discovery minute is exactly when all have rotted;
otherwise the remaining oranges have no path from any source, so \`-1\` is
required.

## Complexity

- **Time:** \`O(R × C)\`; each cell is scanned and enqueued at most once.
- **Auxiliary space:** \`O(R × C)\` worst case for the queue.
- The solution mutates the input grid to mark rotten cells.

## Edge cases worth testing

- No oranges → \`0\`
- All oranges already rotten → \`0\`
- Fresh orange with no rotten source → \`-1\`
- Fresh orange isolated by empty cells
- Multiple sources spreading simultaneously
- One row or one column

## Why not DFS?

DFS can determine reachability but does not naturally guarantee the minimum
arrival minute when many sources spread simultaneously. It would need distance
relaxation and repeated updates. Multi-source BFS directly matches unweighted
shortest-path layers.

</details>
`,"1852_distinct_nums_subarray":`# 1852. Distinct Numbers in Each Subarray

## Problem

For every contiguous window of length \`k\`, return the number of distinct values
inside it.

\`\`\`text
nums = [1, 2, 3, 3, 2], k = 2
windows: [1,2] [2,3] [3,3] [3,2]
answer:  [2,    2,    1,    2]
\`\`\`

## What pattern is this?

- **Fixed-size sliding window**
- Frequency Hash for incremental state
- Update an aggregate when elements enter and leave

## Brute-force baseline

The brute-force baseline builds a Set for each of \`n - k + 1\` windows. Each
window takes \`O(k)\` work, for \`O(nk)\` time. Adjacent windows share \`k - 1\`
elements, so rebuilding discards almost all useful work.

## Solution: maintain frequencies and a distinct counter

<details>
<summary>Reveal explanation</summary>

As the right edge advances, increment the incoming value's count. If its prior
count was zero, increment \`distinct\`. Once a full window exists, decrement the
value that just left. If its count becomes zero, decrement \`distinct\`. Append
the current distinct count to the result.

The Hash must store frequencies, not just membership. If a window has two
copies of \`3\` and one leaves, \`3\` is still present.

The invariant is:

> When a result is appended, the Hash counts exactly the values in the current
> length-\`k\` window, and \`distinct\` equals the number of positive counts.

Leaving keys may remain in the Hash with count zero. That is correct because
the algorithm tests \`zero?\`; deleting them is optional.

\`\`\`ruby
counts[incoming] += 1
counts[outgoing] -= 1
distinct -= 1 if counts[outgoing].zero?
results.append(distinct)
\`\`\`

## Worked example

For \`[1, 2, 2, 3]\`, \`k = 3\`:

\`\`\`text
window [1,2,2]: counts {1:1, 2:2}, distinct 2
remove 1, add 3
window [2,2,3]: counts {1:0, 2:2, 3:1}, distinct 2
\`\`\`

## Correctness

The first completed window is formed by adding each of its elements, so the
invariant holds. To advance one position, exactly one old value leaves and one
new value enters. The updates adjust their frequencies and change \`distinct\`
only when a count crosses the zero boundary. Thus the invariant is preserved
for every window, and each appended result is its exact number of distinct
values.

## Complexity

- **Time:** \`O(n)\`; every element enters once and leaves at most once.
- **Auxiliary space:** \`O(min(n, k))\`, conventionally \`O(k)\`, because the Hash
  retains only positive-frequency values from the active window.
- **Output:** \`O(n - k + 1)\`, excluded from auxiliary-space analysis.

## Edge cases worth testing

- \`k = 1\` → every answer is \`1\`
- \`k = nums.length\` → one answer
- All values equal
- All values distinct
- A repeated value leaves while another copy remains

## Optional refinement

The implementation keeps both a frequency Hash and an explicit distinct count.
After deleting zero-count keys, \`cache.length\` is also the distinct count, but
tracking it separately makes the zero-crossing invariant explicit.

</details>
`};function hn({problem:e}){let t=T.findIndex(t=>t.id===e.id),n=T[(t-1+T.length)%T.length],r=T[(t+1)%T.length],i=mn[e.id]||`## Discussion unavailable

This guide has not been generated yet.`,a=A.parse(i.replace(/^# .+\n+/,``),{async:!1});return(0,p.jsxs)(v,{active:`problems`,children:[(0,p.jsx)(y,{kicker:`LeetCode ${e.number} · ${e.pattern}`,title:e.title,copy:e.prompt,children:(0,p.jsxs)(`div`,{className:`hero-metrics problem-metrics`,children:[(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`small`,{children:`Approach`}),e.approach]}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`small`,{children:`Time`}),e.time]}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`small`,{children:`Space`}),e.space]})]})}),(0,p.jsxs)(`section`,{className:`section problem-detail-layout`,children:[(0,p.jsxs)(`aside`,{className:`detail-toc`,children:[(0,p.jsx)(`a`,{href:`/problems/`,children:`← All problems`}),(0,p.jsx)(`p`,{children:`Practice it`}),(0,p.jsx)(`a`,{href:`/flashcards/?deck=problems&problem=${e.id}`,children:`Open this flashcard ↗`}),(0,p.jsx)(`p`,{children:`Source`}),(0,p.jsx)(`a`,{href:`https://github.com/BrianSigafoos/leetcode-practice/tree/main/solutions/${e.id}`,target:`_blank`,rel:`noreferrer`,children:`Ruby solution ↗`})]}),(0,p.jsx)(`article`,{className:`problem-markdown markdown-content`,dangerouslySetInnerHTML:{__html:a}})]}),(0,p.jsxs)(`nav`,{className:`next-guide`,children:[(0,p.jsxs)(`a`,{href:`/problems/${n.id}/`,children:[(0,p.jsx)(`small`,{children:`Previous problem`}),(0,p.jsxs)(`strong`,{children:[`← `,n.title]})]}),(0,p.jsxs)(`a`,{href:`/problems/${r.id}/`,children:[(0,p.jsx)(`small`,{children:`Next problem`}),(0,p.jsxs)(`strong`,{children:[r.title,` →`]})]})]})]})}function gn(){let[e,t]=(0,f.useState)(``),n=(0,f.useMemo)(()=>{let t=e.trim().toLowerCase();return t?T.filter(e=>[e.number,e.title,e.prompt,e.pattern,e.approach,e.time,e.space].join(` `).toLowerCase().includes(t)):T},[e]);return(0,p.jsxs)(v,{active:`problems`,children:[(0,p.jsx)(y,{kicker:`52 verified Ruby problems`,title:`Study the problem, not just the answer.`,copy:`Each discussion names the recognition pattern, derives the optimized approach, explains the invariant, proves correctness, and records exact time and auxiliary space.`}),(0,p.jsxs)(`section`,{className:`section problem-library`,children:[(0,p.jsxs)(`div`,{className:`library-toolbar`,children:[(0,p.jsxs)(`p`,{children:[(0,p.jsxs)(`strong`,{children:[T.length,` problem guides`]}),` connected directly to approach-recall flashcards.`]}),(0,p.jsxs)(`label`,{className:`search-box`,children:[(0,p.jsx)(`span`,{children:`⌕`}),(0,p.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Search: sliding window, tree, O(log n)…`})]})]}),(0,p.jsx)(`div`,{className:`problem-grid`,children:n.map(e=>(0,p.jsxs)(`a`,{className:`problem-card`,href:`/problems/${e.id}/`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`span`,{children:[`#`,e.number]}),(0,p.jsx)(`em`,{children:e.pattern})]}),(0,p.jsx)(`h2`,{children:e.title}),(0,p.jsx)(`p`,{children:e.prompt}),(0,p.jsx)(`strong`,{children:e.approach}),(0,p.jsxs)(`dl`,{children:[(0,p.jsx)(`dt`,{children:`Time`}),(0,p.jsx)(`dd`,{children:e.time}),(0,p.jsx)(`dt`,{children:`Space`}),(0,p.jsx)(`dd`,{children:e.space})]})]},e.id))}),n.length===0&&(0,p.jsx)(`div`,{className:`no-results`,children:`No matching problem. Try an algorithm pattern or complexity.`})]})]})}function _n(){return window.location.pathname.replace(/\/+$/,``)||`/`}function vn(){return(0,p.jsx)(v,{children:(0,p.jsxs)(`section`,{className:`not-found`,id:`top`,children:[(0,p.jsx)(`p`,{className:`kicker`,children:`404`}),(0,p.jsx)(`h1`,{children:`This study path does not exist.`}),(0,p.jsx)(`p`,{children:`Return to the refresher or choose a topic from the navigation.`}),(0,p.jsx)(`a`,{className:`primary-button`,href:`/`,children:`Back home`})]})})}function yn(){let e=_n();if(e===`/`)return(0,p.jsx)(S,{});if(e===`/algorithms`)return(0,p.jsx)(le,{});if(e===`/flashcards`)return(0,p.jsx)(Ee,{});if(e===`/architecture`)return(0,p.jsx)(w,{});if(e===`/ruby`)return(0,p.jsx)(Ae,{});if(e===`/problems`)return(0,p.jsx)(gn,{});let t=e.match(/^\/problems\/([^/]+)$/);if(t){let e=fe[t[1]];return e?(0,p.jsx)(hn,{problem:e}):(0,p.jsx)(vn,{})}let n=e.match(/^\/algorithms\/([^/]+)$/);if(n){let e=te[n[1]];return e?(0,p.jsx)(ce,{algorithm:e}):(0,p.jsx)(vn,{})}let r=e.match(/^\/architecture\/([^/]+)$/);if(r){let e=ie[r[1]];return e?(0,p.jsx)(de,{guide:e}):(0,p.jsx)(vn,{})}return(0,p.jsx)(vn,{})}(0,d.createRoot)(document.getElementById(`root`)).render((0,p.jsx)(f.StrictMode,{children:(0,p.jsx)(yn,{})}));
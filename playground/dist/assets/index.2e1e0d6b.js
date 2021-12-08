import{r as x,o as U,d as L,i as S,c as k,m as B,a as Y,w as G,v as J,b as f,e as o,f as D,g as v,h,t as w,j as Q,p as $,k as Z,l as C,F as I,n as K,q as A,u as H,s as z,x as X,y as ee}from"./vendor.88bba4d7.js";const te=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}};te();function q(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():null}function oe(){const e=x(""),a=x(null),s=()=>{l(a.value)},l=async t=>{if(!t)return;const{innerWidth:r,innerHeight:i}=window,{left:c,top:n,width:u,height:_}=t.getBoundingClientRect();e.value=`M${r},${i}H0V0H${r}V${i}ZM${c},${n}a0,0,0,0,0-0,0V${n+_}a0,0,0,0,0,0,0H${c+u}a0,0,0,0,0,0-0V${n}a0,0,0,0,0-0-0Z`,a.value=t,window.addEventListener("scroll",s),window.addEventListener("resize",s)};return U(()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}),{path:e,updatePath:l}}var T=(e,a)=>{const s=e.__vccOpts||e;for(const[l,t]of a)s[l]=t;return s};const se=L({name:"VueOnboardingStep",setup(){const e=x(!1),a=S("next-step",()=>{}),s=S("previous-step",()=>{}),l=S("exit",()=>{}),t=S("options"),r=k(()=>B({},t==null?void 0:t.value,n.value.options)),i=S("is-first-step"),c=S("is-last-step"),n=S("step",{}),u=async()=>{await N(),a()},_=async()=>{await N(),s()},y=x(null),{updatePath:b,path:m}=oe(),O=()=>{var p,g,V,j,P,M,W;const d=q((g=(p=n==null?void 0:n.value)==null?void 0:p.attachTo)==null?void 0:g.element);console.log(d,n.value.attachTo),d&&y.value&&(e.value=!0,((j=(V=r.value)==null?void 0:V.scrollToStep)==null?void 0:j.enabled)&&d.scrollIntoView((M=(P=r.value)==null?void 0:P.scrollToStep)==null?void 0:M.options),Q(d,y.value,r.value.popper),((W=r.value)==null?void 0:W.disableOverlay)||b(d),E({element:d}))},F=async()=>{var d,p,g;await((g=(p=(d=n==null?void 0:n.value)==null?void 0:d.on)==null?void 0:p.beforeStep)==null?void 0:g.call(p)),O()},N=async()=>{var d,p,g;await((g=(p=(d=n==null?void 0:n.value)==null?void 0:d.on)==null?void 0:p.afterStep)==null?void 0:g.call(p)),E({remove:!0})},E=({element:d=q(n.value.attachTo.element),remove:p=!1})=>{const g=n.value.attachTo.classList;!g||!d||d.classList[p?"remove":"add"](...g)};return Y(async()=>{await F()}),{stepElement:y,onNext:u,onPrevious:_,path:m,show:e,step:n,isFirst:i,isLast:c,exit:l}}}),ne={class:"v-onboarding-overlay"},re=["d"],ie={ref:"stepElement",class:"v-onboarding-item__wrapper"},ae={class:"v-onboarding-item"},le={class:"v-onboarding-item__header"},ce={key:0,class:"v-onboarding-item__header-title"},de=o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ue=[de],pe={key:0,class:"v-onboarding-item__description"},fe={class:"v-onboarding-item__actions"};function he(e,a,s,l,t,r){return G((h(),f("div",null,[(h(),f("svg",ne,[o("path",{d:e.path},null,8,re)])),o("div",ie,[e.step?D(e.$slots,"default",{key:0},()=>{var i,c,n;return[o("div",ae,[o("div",le,[((i=e.step.content)==null?void 0:i.title)?(h(),f("span",ce,w((c=e.step.content)==null?void 0:c.title),1)):v("",!0),o("button",{onClick:a[0]||(a[0]=(...u)=>e.exit&&e.exit(...u)),class:"v-onboarding-item__header-close"},ue)]),((n=e.step.content)==null?void 0:n.description)?(h(),f("p",pe,w(e.step.content.description),1)):v("",!0),o("div",fe,[e.isFirst?v("",!0):(h(),f("button",{key:0,type:"button",onClick:a[1]||(a[1]=(...u)=>e.onPrevious&&e.onPrevious(...u)),class:"v-onboarding-btn-secondary"},"Previous")),o("button",{onClick:a[2]||(a[2]=(...u)=>e.onNext&&e.onNext(...u)),type:"button",class:"v-onboarding-btn-primary"},w(e.isLast?"Finish":"Next"),1)])])]}):v("",!0)],512)],512)),[[J,e.show]])}var R=T(se,[["render",he]]);const me={popper:{modifiers:[{name:"offset",options:{offset:[0,10]}}]},disableOverlay:!1,scrollToStep:{enabled:!0,options:{behavior:"smooth",block:"center",inline:"center"}}},ge=L({name:"VueOnboardingWrapper",components:{OnboardingStep:R},props:{steps:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})}},setup(e,{expose:a}){const s=x(-1),l=m=>{typeof m=="function"?s.value=m(s.value):s.value=m},t=k(()=>{var m;return((m=e.steps)==null?void 0:m[s.value])||null}),r=()=>{l(s.value-1)},i=()=>{l(s.value+1)},c=k(()=>s.value>=e.steps.length||s.value<0),n=()=>{l(0)},u=()=>{l(-1)};a({start:n,finish:u,goToStep:m=>l(m)});const _=k(()=>B({},me,e.options));$("options",_),$("step",t),$("next-step",i),$("previous-step",r),$("exit",()=>u());const y=k(()=>s.value===0),b=k(()=>s.value===e.steps.length-1);return $("is-first-step",y),$("is-last-step",b),{index:s,activeStep:t,toPreviousStep:r,toNextStep:i,isFinished:c,setIndex:l,isFirstStep:y,isLastStep:b}}}),ve={key:0};function ye(e,a,s,l,t,r){const i=Z("OnboardingStep");return e.isFinished?v("",!0):(h(),f("div",ve,[D(e.$slots,"default",{key:e.index,step:e.activeStep,next:()=>e.toNextStep(),previous:()=>e.toPreviousStep(),exit:()=>e.setIndex(-1),isFirst:e.isFirstStep,isLast:e.isLastStep,index:e.index},()=>[C(i,{key:e.index})])]))}var be=T(ge,[["render",ye]]);const we=[{name:"Fully Typed",description:"Who doesn't love type-safety? Right ..? Well, even if you aren't fan of type-safety, it's there. We've got you covered.",icon:"./svg/ts.svg"},{name:"Customizable",description:"You can use our existing styles or use your own styling with default slot.",icon:"./svg/adjustments.svg"},{name:"A plugin for your needs",description:"Do you need more features? Just create an issue on github and lets discuss it together.",icon:"./svg/heart.svg"}],_e={setup(){return{features:we}}},xe={class:"py-12"},Se={class:"max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-4"},$e={class:"space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"},ke=["id"],Oe={class:"flex items-center w-8 h-8"},Fe=["src"],Ce={class:"mt-5 text-lg leading-6 font-medium text-gray-900"},Le={class:"mt-2 text-base text-gray-500"};function Te(e,a,s,l,t,r){return h(),f("div",xe,[o("div",Se,[o("dl",$e,[(h(!0),f(I,null,K(l.features,(i,c)=>(h(),f("div",{id:`feature-${c+1}`,class:"bg-white rounded-md p-4 filter drop-shadow-sm",key:c},[o("dt",null,[o("div",Oe,[o("img",{src:i.icon,"aria-hidden":"true"},null,8,Fe)]),o("p",Ce,w(i.name),1)]),o("dd",Le,w(i.description),1)],8,ke))),128))])])])}var Ne=T(_e,[["render",Te]]);const Ee={class:"w-80 p-4 bg-white rounded-md shadow-md"},Ve={class:"flex justify-between"},je=["onClick"],Pe=o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Me=[Pe],We={key:0,width:"100%",height:"auto",src:"https://www.youtube.com/embed/dQw4w9WgXcQ",autoplay:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},Be={key:1,class:"text-sm text-gray-600 mt-2"},De=["onClick"],Ie=["onClick"],Ae={class:"max-w-6xl mx-auto sm:px-6 lg:px-8"},He={class:"flex flex-col items-center py-10"},ze=o("div",{class:"text-center space-y-4"},[o("h1",{class:"text-5xl font-bold text-gray-700"},"v-onboarding"),o("p",{class:"font-medium text-gray-700 mt-3"},"v-onboarding is a super-slim, fully-typed onboarding plugin for Vue3")],-1),qe=o("div",{class:"flex items-center space-x-4 mt-10"},[o("a",{href:"https://github.com/fatihsolhan/v-onboarding",class:"inline-flex items-center px-6 py-2 text-sm font-medium rounded-full text-white bg-gray-700 hover:bg-gray-800"},"Github"),o("a",{href:"https://github.com/fatihsolhan/v-onboarding#v-onboarding",class:"inline-flex items-center px-6 py-2 text-sm font-medium rounded-full text-white bg-indigo-700 hover:bg-indigo-800"},"Documentation")],-1),Re=o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"-ml-1 mr-3 h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Ue=X(" DO NOT PRESS THIS BUTTON "),Ye=[Re,Ue],Ge=L({setup(e){const a=x(null),s=()=>{var t;(t=a.value)==null||t.start()},l=x([{attachTo:{element:"#launch-nuke"},content:{title:"Well.. You're here..",description:"You couldn't hold yourself, right? Anyway, while you are here let me introduce to you with \u{1F525} v-onboarding \u{1F525}"}},{attachTo:{element:"#feature-1"},content:{title:"Everything is under control!"},on:{beforeStep:()=>{console.log("Step starting: Feature 1")},afterStep:()=>{console.log("Step ended: Feature 1")}}},{attachTo:{element:"#feature-2"},content:{title:"Do you think you can style it better?",description:"Of course you can! Use the default slot and show your magic \u2728"},on:{beforeStep:()=>{console.log("Step starting: Feature 2")},afterStep:()=>{console.log("Step ended: Feature 2")}}},{attachTo:{element:"#feature-3"},content:{title:"Who doesn't need more?",description:"Just let us know what do you need and I promise we will discuss it with you \u{1F64C}"},on:{beforeStep:()=>{console.log("Step starting: Feature 3")},afterStep:()=>{console.log("Step ended: Feature 3")}}}]);return(t,r)=>(h(),f(I,null,[C(H(be),{ref:(i,c)=>{c.wrapper=i,a.value=i},steps:l.value},{default:A(({previous:i,next:c,step:n,exit:u,isFirst:_,isLast:y,index:b})=>[C(H(R),null,{default:A(()=>{var m,O,F;return[o("div",Ee,[o("div",Ve,[((m=n.content)==null?void 0:m.title)?(h(),f("span",{key:0,class:z(["text-xl font-medium leading-normal",[b===2?"transform -rotate-6 translate-y-1":""]])},w((O=n.content)==null?void 0:O.title),3)):v("",!0),o("button",{onClick:u,class:"inline-flex items-center justify-center w-6 h-6 flex-shrink-0 rounded-full hover:bg-black/10"},Me,8,je)]),b===3?(h(),f("iframe",We)):v("",!0),((F=n.content)==null?void 0:F.description)?(h(),f("p",Be,w(n.content.description),1)):v("",!0),o("div",{class:z(["flex mt-4 space-x-2",{"h-6":b===2}])},[_?v("",!0):(h(),f("button",{key:0,type:"button",onClick:i,class:"inline-flex flex-1 p-2 items-center justify-center border border-solid text-base font-medium rounded-full bg-transparent cursor-pointer border-gray-400 text-gray-800 hover:bg-gray-100"},"Previous",8,De)),o("button",{onClick:c,type:"button",class:"inline-flex flex-1 p-2 items-center justify-center border border-solid text-base font-medium rounded-full bg-transparent cursor-pointer border-transparent text-white bg-indigo-600 hover:bg-indigo-700"},w(y?"Finish":"Next"),9,Ie)],2)])]}),_:2},1024)]),_:1},8,["steps"]),o("div",Ae,[o("div",He,[ze,qe,o("div",{class:"flex items-center justify-center mt-8 md:mt-20"},[o("button",{id:"launch-nuke",onClick:s,type:"button",class:"inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"},Ye)]),C(Ne,{class:"mt-10 md:mt-20"})])])],64))}});ee(Ge).mount("#app");

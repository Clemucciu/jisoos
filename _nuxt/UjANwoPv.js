const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DR-AdW3r.js","./B6q1z3vV.js","./entry.DiGOmG-M.css","./StarsBg.DjZcC2SU.css"])))=>i.map(i=>d[i]);
import{j as N,c as u,i as n,f as r,w as i,g as l,B as _,C as f,ac as v,a6 as V,d as T,n as p,E as o,P as O,K as R,I as W,e as h,as as X,Z as q,t as D,F as U,X as z,W as Z,D as A,ao as J,ar as Q,ap as Y,aq as ee,ax as te,aw as se,_ as oe}from"./B6q1z3vV.js";import{_ as G}from"./BFKVlbop.js";import{_ as ne,a as ae}from"./BTzE9A7D.js";import{_ as ie}from"./B95IwAEb.js";import"./YHSuagtB.js";const re={},le={class:"relative"};function ce(c,e){const s=G;return n(),u("div",le,[r(s,{variant:"subtle",class:"rounded-2xl"},{default:i(()=>e[0]||(e[0]=[l("video",{class:"rounded-xl","data-v-baf90ddd":"",preload:"none",poster:"https://res.cloudinary.com/nuxt/video/upload/so_3.3/v1708511800/ui-pro/video-nuxt-ui-pro_kwfbdh.jpg",controls:!0},[l("source",{"data-v-baf90ddd":"",src:"https://res.cloudinary.com/nuxt/video/upload/v1708511800/ui-pro/video-nuxt-ui-pro_kwfbdh.webm",type:"video/webm"}),l("source",{"data-v-baf90ddd":"",src:"https://res.cloudinary.com/nuxt/video/upload/v1708511800/ui-pro/video-nuxt-ui-pro_kwfbdh.mp4",type:"video/mp4"}),l("source",{"data-v-baf90ddd":"",src:"https://res.cloudinary.com/nuxt/video/upload/v1708511800/ui-pro/video-nuxt-ui-pro_kwfbdh.ogg",type:"video/ogg"})],-1)])),_:1})])}const de=Object.assign(N(re,[["render",ce]]),{__name:"PromotionalVideo"}),ue={},pe={class:"relative overflow-hidden rounded-(--ui-radius) border border-dashed border-(--ui-border-accented) opacity-75 px-4 flex items-center justify-center aspect-video"};function _e(c,e){const s=G;return n(),_(s,{variant:"subtle"},{default:i(()=>[l("div",pe,[e[0]||(e[0]=l("svg",{class:"absolute inset-0 h-full w-full stroke-(--ui-border-inverted)/10",fill:"none"},[l("defs",null,[l("pattern",{id:"pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e",x:"0",y:"0",width:"10",height:"10",patternUnits:"userSpaceOnUse"},[l("path",{d:"M-3 13 15-5M-5 5l18-18M-1 21 17 3"})])]),l("rect",{stroke:"none",fill:"url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)",width:"100%",height:"100%"})],-1)),f(c.$slots,"default")])]),_:3})}const me=Object.assign(N(ue,[["render",_e]]),{__name:"ImagePlaceholder"}),fe={base:"relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"},ge=V;var E;const ve=v({extend:v(fe),...((E=ge.uiPro)==null?void 0:E.pageGrid)||{}}),xe=T({__name:"PageGrid",props:{as:{},class:{}},setup(c){const e=c;return(s,t)=>(n(),_(o(O),{as:s.as,class:p(o(ve)({class:e.class}))},{default:i(()=>[f(s.$slots,"default")]),_:3},8,["as","class"]))}}),be=Object.assign(xe,{__name:"UPageGrid"}),he={base:"relative column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 *:break-inside-avoid-column *:will-change-transform"},ye=V;var I;const ke=v({extend:v(he),...((I=ye.uiPro)==null?void 0:I.pageColumns)||{}}),Pe=T({__name:"PageColumns",props:{as:{},class:{}},setup(c){const e=c;return(s,t)=>(n(),_(o(O),{as:s.as,class:p(o(ke)({class:e.class}))},{default:i(()=>[f(s.$slots,"default")]),_:3},8,["as","class"]))}}),Ce=Object.assign(Pe,{__name:"UPageColumns"}),we={slots:{root:"relative isolate rounded-[calc(var(--ui-radius)*3)] overflow-hidden",container:"flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16",wrapper:"",title:"text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",description:"text-base sm:text-lg text-(--ui-text-muted)",links:"mt-8 flex flex-wrap gap-x-6 gap-y-3"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty"},vertical:{container:"",title:"text-center",description:"text-center text-balance",links:"justify-center"}},reverse:{true:{wrapper:"lg:order-last"}},variant:{solid:{root:"bg-(--ui-bg-inverted) text-(--ui-bg)",title:"text-(--ui-bg)",description:"text-(--ui-text-dimmed)"},outline:{root:"bg-(--ui-bg) ring ring-(--ui-border)",description:"text-(--ui-text-muted)"},soft:{root:"bg-(--ui-bg-elevated)/50",description:"text-(--ui-text-toned)"},subtle:{root:"bg-(--ui-bg-elevated)/50 ring ring-(--ui-border)",description:"text-(--ui-text-toned)"},naked:{description:"text-(--ui-text-muted)"}},title:{true:{description:"mt-6"}}},defaultVariants:{variant:"outline"}},$e={key:1,class:"hidden lg:block"},Ue=V;var M;const ze=v({extend:v(we),...((M=Ue.uiPro)==null?void 0:M.pageCTA)||{}}),Ae=T({__name:"PageCTA",props:{as:{},class:{},title:{},description:{},orientation:{default:"vertical"},reverse:{type:Boolean,default:!1},variant:{},links:{},ui:{}},setup(c){const e=c,s=R(),t=W(()=>ze({variant:e.variant,orientation:e.orientation,reverse:e.reverse,title:!!e.title||!!s.title}));return(a,j)=>{var B;const y=Z,k=X;return n(),_(o(O),{as:a.as,"data-orientation":a.orientation,class:p(t.value.root({class:[e.class,(B=e.ui)==null?void 0:B.root]}))},{default:i(()=>{var m;return[r(k,{class:p(t.value.container({class:(m=e.ui)==null?void 0:m.container}))},{default:i(()=>{var x,P,C,w,g;return[l("div",{class:p(t.value.wrapper({class:(x=e.ui)==null?void 0:x.wrapper}))},[a.title||s.title?(n(),u("h2",{key:0,class:p(t.value.title({class:(P=e.ui)==null?void 0:P.title}))},[f(a.$slots,"title",{},()=>[q(D(a.title),1)])],2)):h("",!0),a.description||s.description?(n(),u("div",{key:1,class:p(t.value.description({class:(C=e.ui)==null?void 0:C.description}))},[f(a.$slots,"description",{},()=>[q(D(a.description),1)])],2)):h("",!0),(w=a.links)!=null&&w.length||s.links?(n(),u("div",{key:2,class:p(t.value.links({class:(g=e.ui)==null?void 0:g.links}))},[f(a.$slots,"links",{},()=>[(n(!0),u(U,null,z(a.links,($,S)=>(n(),_(y,A({key:S,size:"lg",ref_for:!0},$),null,16))),128))])],2)):h("",!0)],2),s.default?f(a.$slots,"default",{key:0}):a.orientation==="horizontal"?(n(),u("div",$e)):h("",!0)]}),_:3},8,["class"])]}),_:3},8,["as","data-orientation","class"])}}}),Te=Object.assign(Ae,{__name:"UPageCTA"}),je=te(()=>oe(()=>import("./DR-AdW3r.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(c=>c.default||c)),Be={key:0},De=T({__name:"index",async setup(c){var a,j,y,k;let e,s;const{data:t}=([e,s]=J(()=>Y("index",()=>ee("index").first())),e=await e,s(),e);return Q({titleTemplate:"",title:(a=t.value)==null?void 0:a.title,ogTitle:(j=t.value)==null?void 0:j.title,description:(y=t.value)==null?void 0:y.description,ogDescription:(k=t.value)==null?void 0:k.description}),(B,m)=>{const x=je,P=de,C=ne,w=me,g=ae,$=G,S=be,L=ie,F=Ce,H=se,K=Te;return o(t)?(n(),u("div",Be,[r(C,{title:o(t).hero.title,description:o(t).hero.description,links:o(t).hero.links},{top:i(()=>[m[0]||(m[0]=l("div",{class:"absolute rounded-full dark:bg-(--ui-primary) blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80"},null,-1)),r(x)]),default:i(()=>[r(P)]),_:1},8,["title","description","links"]),(n(!0),u(U,null,z(o(t).sections,(d,b)=>(n(),_(g,{key:b,title:d.title,description:d.description,orientation:d.orientation,reverse:d.reverse,features:d.features},{default:i(()=>[r(w)]),_:2},1032,["title","description","orientation","reverse","features"]))),128)),r(g,{title:o(t).features.title,description:o(t).features.description},{default:i(()=>[r(S,null,{default:i(()=>[(n(!0),u(U,null,z(o(t).features.items,(d,b)=>(n(),_($,A({key:b,ref_for:!0},d,{spotlight:""}),null,16))),128))]),_:1})]),_:1},8,["title","description"]),r(g,{id:"testimonials",headline:o(t).testimonials.headline,title:o(t).testimonials.title,description:o(t).testimonials.description},{default:i(()=>[r(F,{class:"xl:columns-4"},{default:i(()=>[(n(!0),u(U,null,z(o(t).testimonials.items,(d,b)=>(n(),_($,{key:b,variant:"subtle",description:d.quote,ui:{description:"before:content-[open-quote] after:content-[close-quote]"}},{footer:i(()=>[r(L,A({ref_for:!0},d.user,{size:"lg"}),null,16)]),_:2},1032,["description"]))),128))]),_:1})]),_:1},8,["headline","title","description"]),r(H),r(K,A(o(t).cta,{variant:"naked",class:"overflow-hidden"}),{default:i(()=>[m[1]||(m[1]=l("div",{class:"absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80"},null,-1)),r(x)]),_:1},16)])):h("",!0)}}});export{De as default};

import{d as w,ac as m,bV as z,z as V,ab as N,r as _,c as f,e as D,f as b,g,n as r,E as e,t as E,C as H,D as S,W as U,i as y,a6 as $}from"./B6q1z3vV.js";import j from"./BFd8oavW.js";const A={slots:{root:"relative my-5 group",header:"flex items-center gap-1.5 border border-(--ui-border-muted) bg-(--ui-bg) border-b-0 relative rounded-t-[calc(var(--ui-radius)*1.5)] px-4 py-3",filename:"text-(--ui-text) text-sm/6",icon:"size-4 shrink-0",copy:"absolute top-[11px] right-[11px] lg:opacity-0 lg:group-hover:opacity-100 transition",base:"group font-mono text-sm/6 border border-(--ui-border-muted) bg-(--ui-bg-muted) rounded-[calc(var(--ui-radius)*1.5)] px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none"},variants:{filename:{true:{root:"[&>pre]:rounded-t-none [&>pre]:my-0 my-5"}}}},I=$;var h,v;const L=m({extend:m(A),...((v=(h=I.uiPro)==null?void 0:h.prose)==null?void 0:v.pre)||{}}),O=w({__name:"Pre",props:{icon:{},code:{},language:{},filename:{},highlights:{},hideHeader:{type:Boolean},meta:{},class:{},ui:{}},setup(C){const o=C,s=L(),P=z(),i=V(),{t:k}=N(),n=_(!1);function x(){P.copy(o.code||""),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}return(a,T)=>{var t,c,l,p,u,d;const B=U;return y(),f("div",{class:r(e(s).root({class:[(t=o.ui)==null?void 0:t.root],filename:!!a.filename}))},[a.filename&&!a.hideHeader?(y(),f("div",{key:0,class:r(e(s).header({class:(c=o.ui)==null?void 0:c.header}))},[b(j,{icon:a.icon,filename:a.filename,class:r(e(s).icon({class:(l=o.ui)==null?void 0:l.icon}))},null,8,["icon","filename","class"]),g("span",{class:r(e(s).filename({class:(p=o.ui)==null?void 0:p.filename}))},E(a.filename),3)],2)):D("",!0),b(B,{icon:n.value?e(i).ui.icons.copyCheck:e(i).ui.icons.copy,color:"neutral",variant:"outline",size:"sm","aria-label":e(k)("prose.pre.copy"),class:r(e(s).copy({class:(u=o.ui)==null?void 0:u.copy})),tabindex:"-1",onClick:x},null,8,["icon","aria-label","class"]),g("pre",S({class:e(s).base({class:[o.class,(d=o.ui)==null?void 0:d.base]})},a.$attrs),[H(a.$slots,"default")],16)],2)}}}),F=Object.assign(O,{__name:"ProsePre"});export{F as default};

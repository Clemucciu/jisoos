import{d as v,J as C,L as x,z as b,I as h,c as _,C as B,g as I,f as T,n as t,E as $,W as k,i as E,ac as c,a6 as M}from"./B6q1z3vV.js";const P={slots:{root:"relative [&_pre]:h-[200px]",footer:"h-16 absolute inset-x-px bottom-px rounded-b-[calc(var(--ui-radius)*1.5)] flex items-center justify-center",trigger:"group",triggerIcon:"group-data-[state=open]:rotate-180"},variants:{open:{true:{root:"[&_pre]:h-auto [&_pre]:min-h-[200px] [&_pre]:max-h-[80vh] [&_pre]:pb-12"},false:{root:"[&_pre]:overflow-hidden",footer:"bg-gradient-to-t from-(--ui-bg-muted)"}}}},j=M;var d,f;const w=c({extend:c(P),...((f=(d=j.uiPro)==null?void 0:d.prose)==null?void 0:f.codeCollapse)||{}}),y=v({__name:"CodeCollapse",props:C({icon:{},name:{default:"code"},openText:{default:"Expand"},closeText:{default:"Collapse"},class:{},ui:{}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:["update:open"],setup(n){const e=n,o=x(n,"open"),g=b(),s=h(()=>w({open:o.value}));return(a,l)=>{var r,p,i,u;const m=k;return E(),_("div",{class:t(s.value.root({class:[e.class,(r=e.ui)==null?void 0:r.root]}))},[B(a.$slots,"default"),I("div",{class:t(s.value.footer({class:(p=e.ui)==null?void 0:p.footer}))},[T(m,{icon:a.icon||$(g).ui.icons.chevronDown,color:"neutral",variant:"outline","data-state":o.value?"open":"closed",label:`${o.value?a.closeText:a.openText} ${a.name}`,class:t(s.value.trigger({class:(i=e.ui)==null?void 0:i.trigger})),ui:{leadingIcon:s.value.triggerIcon({class:(u=e.ui)==null?void 0:u.triggerIcon})},onClick:l[0]||(l[0]=z=>o.value=!o.value)},null,8,["icon","data-state","label","class","ui"])],2)],2)}}}),U=Object.assign(y,{__name:"ProseCodeCollapse"});export{U as default};

import{d as b,an as g,b as p,k as y,q as v,o as u,D as F,E as k,a5 as S,a6 as h,C as m,c as x,J as C,f as i,t as E,F as B,r as T,n as w,K as _,T as D,_ as M,ao as f}from"./framework.9d0920f0.js";import{s as N}from"./Message.vue_vue_type_style_index_0_scoped_3564736d_lang.10a42063.js";const A={class:"text"},z=b({__name:"Message",props:{text:{type:[String,Object],default:""},type:{type:String,default:"info"},icon:String,textColor:String,bgColor:String,customClass:String},setup(o){const e=o,n=g({style:{info:{icon:e.icon||"alert-circle",color:"#909398",backgroundColor:"#F4F4F5",borderColor:"#bdbdbd"},warn:{icon:e.icon||"alert-triangle",color:"#E6A23B",backgroundColor:"#FDF6EC",borderColor:"#fad39d"},error:{icon:e.icon||"meh",color:"#F56C6B",backgroundColor:"#FEEFF0",borderColor:"#ffafb4"},success:{icon:e.icon||"smile",color:"#67C23A",backgroundColor:"#F0F9EB",borderColor:"#bbfc95"},custom:{icon:e.icon,color:e.textColor,backgroundColor:e.bgColor,borderColor:e.bgColor}}}),r=p(!1),{style:s}=n,a=y(()=>typeof e.text=="string");return v(()=>{r.value=!0}),(c,t)=>(u(),F(D,{name:"slide-fade"},{default:k(()=>[S(m("div",{class:w(["nice-message",o.customClass]),style:_(i(s)[o.type])},[a.value?(u(),x(B,{key:0},[C(i(N),{type:i(s)[o.type].icon},null,8,["type"]),m("span",A,E(o.text),1)],64)):T(c.$slots,"default",{key:1},void 0,!0)],6),[[h,r.value]])]),_:3}))}}),V=M(z,[["__scopeId","data-v-3564736d"]]),I=({text:o,type:e,timeOut:n,icon:r,textColor:s,bgColor:a,customClass:c})=>{const t=typeof document<"u"&&typeof document.createElement<"u"?document.createElement("div"):"";t.setAttribute("class","nice-meassage-container"),typeof document<"u"&&document.body.appendChild(t);let l=null;const d=C(V,{text:o,type:e,timeOut:n,icon:r,textColor:s,bgColor:a,customClass:c},[o]);f(d,t),clearTimeout(l),l=setTimeout(()=>{f(d,t),typeof document<"u"&&document.body.removeChild(t),clearTimeout(l)},n||2500)};export{I as N};

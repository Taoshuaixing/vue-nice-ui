import{d as u,b as c,m,H as f,o as s,D as p,E as n,c as d,t as a,G as i,a as h}from"./framework.9d0920f0.js";const w={key:0,style:{color:"burlywood"}},_={key:0,style:{color:"burlywood"}},b=u({__name:"custom",setup(g){const r=c([{key:"1",header:"内容区 1",text:"A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world."},{key:"2",header:"内容区 2",text:`  A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`},{key:"3",header:"内容区 3",text:"A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world."}]),t=c(["1"]);return m(()=>{console.log("activeKey:",t.value)}),(k,l)=>{const y=f("n-collapse");return s(),p(y,{"collapse-data":r.value,"active-key":t.value,"onUpdate:activeKey":l[0]||(l[0]=e=>t.value=e)},{header:n(({header:e,key:o})=>[o==="1"?(s(),d("span",w,"burlywood color "+a(e)+" (key = "+a(o)+")",1)):i("",!0)]),lang:n(()=>[h("typescript")]),text:n(({text:e,key:o})=>[o==="1"?(s(),d("span",_,"burlywood color "+a(e)+" (key = "+a(o)+")",1)):i("",!0)]),_:1},8,["collapse-data","active-key"])}}});export{b as default};

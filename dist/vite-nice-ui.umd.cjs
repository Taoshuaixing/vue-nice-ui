!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue"),require("vue-feather")):"function"==typeof define&&define.amd?define(["exports","vue","vue-feather"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["vite-nice-ui"]={},e.Vue,e.NIcon)}(this,(function(e,t,a){"use strict";const l=["href","target","disabled"],o={class:"u-spin-circle"},n={class:"u-text"},i=(e,t)=>{const a=e.__vccOpts||e;for(const[l,o]of t)a[l]=o;return a},c=i(t.defineComponent({__name:"NButton",props:{name:{default:""},type:{default:"default"},effect:{default:"fade"},size:{default:"middle"},width:{default:0},height:{default:0},borderRadius:{default:5},route:{default:()=>({})},target:{default:"_self"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},center:{type:Boolean,default:!1}},setup(e){const a=e,i=t.computed((()=>"{}"!==JSON.stringify(a.route)));function c(e){var t=e.path;if(e.query&&"{}"!==JSON.stringify(e.query)){const a=e.query;Object.keys(a).forEach(((e,l)=>{t=0===l?t+"?"+e+"="+a[e]:t+"&"+e+"="+a[e]}))}return t}return(e,a)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["n-btn-wrap",{center:e.center}])},[t.createElementVNode("a",{onClick:a[0]||(a[0]=t.withModifiers((t=>i.value?()=>!1:e.$emit("click",t)),["stop"])),href:c(e.route),target:i.value?e.target:"_self",disabled:e.disabled,class:t.normalizeClass(["n-btn",[e.type,e.size,{[e.effect]:"default"===e.type,widthType:e.width,disabled:e.disabled,"n-btn-loading":!i.value&&e.loading}]]),style:t.normalizeStyle(`border-radius: ${e.borderRadius}px; width: ${e.width?e.width+"px":"auto"}; height: ${e.height?e.height+"px":"auto"}; line-height: ${e.height-2}px;`)},[t.withDirectives(t.createElementVNode("span",{class:t.normalizeClass(["n-loading-icon",{"show-spin":e.loading}])},[t.withDirectives(t.createElementVNode("span",o,null,512),[[t.vShow,e.loading]])],2),[[t.vShow,!i.value]]),t.createElementVNode("span",n,[t.renderSlot(e.$slots,"default",{},(()=>[t.createTextVNode(t.toDisplayString(e.name),1)]),!0)])],14,l)],2))}}),[["__scopeId","data-v-0e325af7"]]);a.name="NIcon";const d=["type","value","disabled","placeholder","autofocus","readonly","form"],s=i(t.defineComponent({__name:"NInput",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},type:{default:""},size:{default:"default"},leftIcon:{default:""},rightIcon:{default:""},placeholder:{default:""},autofocus:{type:Boolean,default:!1},focusColor:{default:"#9708cc"},readonly:{type:Boolean,default:!1},form:{default:""}},emits:["update:modelValue","clear","focus","blur","input","change"],setup(e,{emit:l}){const o=e,n=t.useSlots(),i=t.ref({}),c=t.ref(o.type);let s={width:n.btn?"auto":"100%",float:n.btn?"left":"auto","border-radius":n.btn?"4px 0 0 4px":"4px","border-color":"#dcdfe6f6"};i.value=s;const r=e=>{s["border-color"]="#9708CC",i.value={width:n.btn?"auto":"100%",float:n.btn?"left":"auto","border-radius":n.btn?"4px 0 0 4px":"4px","border-color":o.focusColor},l("focus",e)},u=e=>{i.value={width:n.btn?"auto":"100%",float:n.btn?"left":"auto","border-radius":n.btn?"4px 0 0 4px":"4px"},l("blur",e)},p=e=>{l("update:modelValue",e.target.value),l("input",e.target.value)},f=e=>{l("change",e)},m=()=>{l("update:modelValue",""),l("clear")},v=t.computed((()=>[o.clearable?"nice-input-clearable":"default"==o.size?"nice-input-default":`nice-input-${o.size}`,""!=o.leftIcon?`nice-input-left-icon-${o.size}`:o.clearable?"":""!=o.rightIcon?`nice-input-right-icon-${o.size}`:"",o.disabled?"nice-input-disabled":"","password"==o.type?o.showPassword?`nice-input-password-showpassword-${o.size}`:`nice-input-password-${o.size}`:""]));return(e,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass([`nice-group-input-${e.size}`]),style:{"min-width":"auto"}},[t.createElementVNode("div",{class:t.normalizeClass(v.value),style:t.normalizeStyle([i.value,{}])},[e.showPassword||""==e.leftIcon?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(t.unref(a),{key:0,class:t.normalizeClass(["left-icon"]),type:e.leftIcon},null,8,["type"])),t.createElementVNode("input",{type:c.value,onFocus:r,onBlur:u,value:e.modelValue,onInput:p,disabled:e.disabled,onChange:f,placeholder:e.placeholder,autofocus:e.autofocus,readonly:e.readonly,form:e.form},null,40,d),t.createVNode(t.Transition,{name:"slide-fade"},{default:t.withCtx((()=>[!e.showPassword&&e.clearable&&""!=e.modelValue?(t.openBlock(),t.createBlock(t.unref(a),{key:0,type:"x",class:"clearable-icon",onClick:m})):t.createCommentVNode("",!0)])),_:1}),e.showPassword||""==e.rightIcon?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(t.unref(a),{key:1,class:t.normalizeClass(["right-icon"]),type:e.rightIcon},null,8,["type"])),e.showPassword?(t.openBlock(),t.createBlock(t.unref(a),{key:2,type:"eye-off",class:t.normalizeClass(["password-icon"]),onClick:l[0]||(l[0]=t=>(e.type,void("text"==c.value?c.value="password":c.value="text")))})):t.createCommentVNode("",!0)],6),t.renderSlot(e.$slots,"btn",{},void 0,!0)],2))}}),[["__scopeId","data-v-a60b1150"]]),r={class:"nice-row-default"},u=i(t.defineComponent({name:"Row",__name:"NRow",setup:e=>(e,a)=>(t.openBlock(),t.createElementBlock("div",r,[t.renderSlot(e.$slots,"default",{},void 0,!0)]))}),[["__scopeId","data-v-0f726b51"]]),p={class:"nice-col-default"},f=i(t.defineComponent({__name:"NCol",props:{span:{type:Number,default:24},offset:{type:Number,default:null}},setup(e){const a=e;t.useCssVars((e=>({"5c71c4da":l.value,"594c6e66":o.value})));const l=t.ref(a.span<=24&&a.span%1==0?100/24*a.span+"%":""),o=t.ref(a.offset<=24&&a.offset%1==0?100/24*a.offset+"%":"");return(e,a)=>(t.openBlock(),t.createElementBlock("div",p,[t.renderSlot(e.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-a23fb429"]]),m={class:"n-checkbox"},v=["onClick"],h={class:"u-label"},y={key:1,class:"n-checkbox-wrap"},k={class:"u-label"},g=i(t.defineComponent({__name:"NCheckbox",props:{options:{default:()=>[]},disabled:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},value:{default:()=>[]},gap:{default:8},indeterminate:{type:Boolean,default:!1},checked:{type:Boolean,default:!1}},emits:["update:value","update:checked","change"],setup(e,{emit:a}){const l=e,o=t.computed((()=>l.options.length)),n=t.ref(l.value);t.watch((()=>l.value),(e=>{n.value=e}));const i=t.computed((()=>l.vertical?{marginBottom:l.gap+"px"}:{marginRight:l.gap+"px"}));function c(){a("update:checked",!l.checked)}return(e,d)=>(t.openBlock(),t.createElementBlock("div",m,[o.value?(t.openBlock(!0),t.createElementBlock(t.Fragment,{key:0},t.renderList(e.options,((c,d)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["n-checkbox-wrap",{vertical:e.vertical}]),style:t.normalizeStyle(o.value!==d+1?i.value:""),key:d},[t.createElementVNode("div",{class:t.normalizeClass(["n-box",{disabled:e.disabled||c.disabled}]),onClick:t=>e.disabled||c.disabled?()=>!1:function(e){if(l.value.includes(e)){const t=n.value.filter((t=>t!==e));a("update:value",t),a("change",t)}else{const t=[...n.value,e];a("update:value",t),a("change",t)}}(c.value)},[t.createElementVNode("span",{class:t.normalizeClass(["u-checkbox",{"u-checkbox-checked":n.value.includes(c.value)}])},null,2),t.createElementVNode("span",h,[t.renderSlot(e.$slots,"default",{label:c.label},(()=>[t.createTextVNode(t.toDisplayString(c.label),1)]),!0)])],10,v)],6)))),128)):(t.openBlock(),t.createElementBlock("div",y,[t.createElementVNode("div",{class:t.normalizeClass(["n-box",{disabled:e.disabled}]),onClick:c},[t.createElementVNode("span",{class:t.normalizeClass(["u-checkbox",{"u-checkbox-checked":e.checked&&!e.indeterminate,indeterminate:e.indeterminate}])},null,2),t.createElementVNode("span",k,[t.renderSlot(e.$slots,"default",{},(()=>[t.createTextVNode("Check all")]),!0)])],2)]))]))}}),[["__scopeId","data-v-2bbb30e0"]]),b=e=>(t.pushScopeId("data-v-4d6b8648"),e=e(),t.popScopeId(),e),w={class:"n-loading"},N={class:"n-loading-box"},B={key:0,class:"n-loading-dot"},C=[b((()=>t.createElementVNode("span",{class:"u-dot-item"},null,-1))),b((()=>t.createElementVNode("span",{class:"u-dot-item"},null,-1))),b((()=>t.createElementVNode("span",{class:"u-dot-item"},null,-1))),b((()=>t.createElementVNode("span",{class:"u-dot-item"},null,-1)))],x={key:1,class:"u-spin-circle"},z={key:2,class:"n-dynamic-circle"},S=[b((()=>t.createElementVNode("svg",{class:"circular",viewBox:"0 0 50 50"},[t.createElementVNode("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})],-1)))],V=i(t.defineComponent({__name:"NLoading",props:{loading:{type:Boolean,default:!0},size:{default:"default"},tip:{default:""},indicator:{default:"dot"},color:{default:"#9708cc"}},setup:e=>(e,a)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(`n-loading-wrap ${e.size}`),style:t.normalizeStyle(`--color: ${e.color};`)},[t.withDirectives(t.createElementVNode("div",w,[t.createElementVNode("div",N,["dot"===e.indicator?(t.openBlock(),t.createElementBlock("div",B,C)):t.createCommentVNode("",!0),"static-circle"===e.indicator?(t.openBlock(),t.createElementBlock("div",x)):t.createCommentVNode("",!0),"dynamic-circle"===e.indicator?(t.openBlock(),t.createElementBlock("div",z,S)):t.createCommentVNode("",!0),t.withDirectives(t.createElementVNode("p",{class:"u-tip"},t.toDisplayString(e.tip),513),[[t.vShow,e.tip]])])],512),[[t.vShow,e.loading]]),t.createElementVNode("div",{class:t.normalizeClass(["n-loading-content",{"n-loading-mask":e.loading}])},[t.renderSlot(e.$slots,"default",{},void 0,!0)],2)],6))}),[["__scopeId","data-v-4d6b8648"]]),E={class:"n-switch-wrap"},_=i(t.defineComponent({__name:"NSwitch",props:{checkedInfo:{default:""},uncheckedInfo:{default:""},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1}},emits:["update:checked","change"],setup(e,{emit:a}){const l=e,o=t.ref(l.checked);return t.watch((()=>l.checked),(e=>{o.value=e})),(e,l)=>(t.openBlock(),t.createElementBlock("div",E,[t.createElementVNode("div",{onClick:l[0]||(l[0]=t=>e.disabled?()=>!1:(a("update:checked",!o.value),void a("change",!o.value))),class:t.normalizeClass(["n-switch",{"switch-checked":o.value,disabled:e.disabled}])},[t.createElementVNode("div",{class:t.normalizeClass(["u-switch-inner",o.value?"inner-checked":"inner-unchecked"])},t.toDisplayString(o.value?e.checkedInfo:e.uncheckedInfo),3),t.createElementVNode("div",{class:t.normalizeClass(["u-node",{"node-checked":o.value}])},[t.renderSlot(e.$slots,"node",{checked:o.value},void 0,!0)],2)],2)]))}}),[["__scopeId","data-v-31d7bda1"]]);const $={class:"n-collapse"},I=["onClick"],M={key:0,focusable:"false",class:"u-arrow","data-icon":"right","aria-hidden":"true",viewBox:"64 64 896 896"},D=[(e=>(t.pushScopeId("data-v-50ac5309"),e=e(),t.popScopeId(),e))((()=>t.createElementVNode("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"},null,-1)))],F={class:"u-lang"},T=i(t.defineComponent({__name:"NCollapse",props:{collapseData:{default:()=>[]},activeKey:{default:null},copyable:{type:Boolean,default:!1},lang:{default:""},fontSize:{default:14},headerFontSize:{default:0},textFontSize:{default:0},showArrow:{type:Boolean,default:!0}},emits:["update:activeKey","change"],setup(e,{emit:a}){const l=e;t.watchEffect((()=>{!function(e){for(let t=0;t<e;t++)n.value.push(o.value[t].offsetHeight)}(l.collapseData.length)}),{flush:"post"});const o=t.ref(),n=t.ref([]);function i(e){a("update:activeKey",e),a("change",e)}function c(e){return Array.isArray(l.activeKey)?l.activeKey.includes(e):l.activeKey===e}const d=t.ref("Copy");function s(e){navigator.clipboard.writeText(o.value[e].innerText||"").then((()=>{d.value="Copied",function(e,t=0,a=!1){const l="undefined"!=typeof window?window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame:()=>{};var o=null;const n={id:l((function i(c){o||(o=c),c-o>=t?(e(),a&&(o=null,n.id=l(i))):n.id=l(i)}))}}((()=>{d.value="Copy"}),3e3)}),(e=>{d.value=e}))}return(e,a)=>{const r=t.resolveComponent("n-button");return t.openBlock(),t.createElementBlock("div",$,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.collapseData,((a,u)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["n-collapse-item",{"u-collapse-item-active":c(a.key||u)}]),key:u},[t.createElementVNode("div",{class:"u-collapse-header",onClick:e=>{var t;c(t=a.key||u)?Array.isArray(l.activeKey)?i(l.activeKey.filter((e=>e!==t))):i(null):Array.isArray(l.activeKey)?i([...l.activeKey,t]):i(t)}},[e.showArrow?(t.openBlock(),t.createElementBlock("svg",M,D)):t.createCommentVNode("",!0),t.createElementVNode("div",{class:t.normalizeClass(["u-header",{ml24:e.showArrow}]),style:t.normalizeStyle(`font-size: ${e.headerFontSize||e.fontSize}px;`)},[t.renderSlot(e.$slots,"header",{header:a.header,key:a.key||u},(()=>[t.createTextVNode(t.toDisplayString(a.header||"--"),1)]),!0)],6)],8,I),t.createElementVNode("div",{class:t.normalizeClass(["u-collapse-content",{"u-collapse-copyable":e.copyable}]),style:t.normalizeStyle(`height: ${c(a.key||u)?n.value[u]:0}px;`)},[t.createElementVNode("div",F,[t.renderSlot(e.$slots,"lang",{lang:e.lang,key:a.key||u},(()=>[t.createTextVNode(t.toDisplayString(e.lang),1)]),!0)]),t.createVNode(r,{size:"small",class:"u-copy",type:"primary",onClick:e=>s(u)},{default:t.withCtx((()=>[t.createTextVNode(t.toDisplayString(d.value),1)])),_:2},1032,["onClick"]),t.createElementVNode("div",{ref_for:!0,ref_key:"text",ref:o,class:"u-text",style:t.normalizeStyle(`font-size: ${e.textFontSize||e.fontSize}px;`)},[t.renderSlot(e.$slots,"text",{text:a.text,key:a.key||u},(()=>[t.createTextVNode(t.toDisplayString(a.text),1)]),!0)],4)],6)],2)))),128))])}}}),[["__scopeId","data-v-50ac5309"]]),A=i(t.defineComponent({__name:"NDivider",props:{dashed:{type:Boolean,default:!1},position:{default:"center"},positionMargin:{default:""},borderWidth:{default:1}},setup(e){const a=e,l=t.ref(),o=t.ref(!0),n=t.computed((()=>{if(""!==a.positionMargin)return"number"==typeof a.positionMargin?a.positionMargin+"px":a.positionMargin}));return t.onMounted((()=>{l.value.offsetHeight||(o.value=!1)})),(e,a)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass([`n-divider ${e.position}`,{dashed:e.dashed,margin24:!o.value,marginLeft:""!==e.positionMargin&&"left"===e.position,marginRight:""!==e.positionMargin&&"right"===e.position}]),style:t.normalizeStyle(`----border-width:${e.borderWidth}px`)},["left"===e.position?t.withDirectives((t.openBlock(),t.createElementBlock("span",{key:0,class:"u-text",style:t.normalizeStyle(`margin-left: ${n.value};`),ref_key:"text",ref:l},[t.renderSlot(e.$slots,"default",{},void 0,!0)],4)),[[t.vShow,o.value]]):"right"===e.position?t.withDirectives((t.openBlock(),t.createElementBlock("span",{key:1,class:"u-text",style:t.normalizeStyle(`margin-right: ${n.value};`),ref_key:"text",ref:l},[t.renderSlot(e.$slots,"default",{},void 0,!0)],4)),[[t.vShow,o.value]]):t.withDirectives((t.openBlock(),t.createElementBlock("span",{key:2,class:"u-text",ref_key:"text",ref:l},[t.renderSlot(e.$slots,"default",{},void 0,!0)],512)),[[t.vShow,o.value]])],6))}}),[["__scopeId","data-v-6180190e"]]),L={class:"n-empty"},H=[t.createStaticVNode('<g fill="none" fill-rule="evenodd" data-v-d0028f6b><g transform="translate(24 31.67)" data-v-d0028f6b><ellipse fill-opacity=".8" fill="#F5F5F7" cx="67.797" cy="106.89" rx="67.797" ry="12.668" data-v-d0028f6b></ellipse><path d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" fill="#AEB8C2" data-v-d0028f6b></path><path d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z" fill="url(#linearGradient-1)" transform="translate(13.56)" data-v-d0028f6b></path><path d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" fill="#F5F5F7" data-v-d0028f6b></path><path d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z" fill="#DCE0E6" data-v-d0028f6b></path></g><path d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z" fill="#DCE0E6" data-v-d0028f6b></path><g transform="translate(149.65 15.383)" fill="#FFF" data-v-d0028f6b><ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" data-v-d0028f6b></ellipse><path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" data-v-d0028f6b></path></g></g>',1)],R=[t.createStaticVNode('<g transform="translate(0 1)" fill="none" fill-rule="evenodd" data-v-d0028f6b><ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" data-v-d0028f6b></ellipse><g fill-rule="nonzero" stroke="#d9d9d9" data-v-d0028f6b><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" data-v-d0028f6b></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa" data-v-d0028f6b></path></g></g>',1)],K=["src"],O=i(t.defineComponent({__name:"NEmpty",props:{description:{default:"暂无数据"},image:{default:"1"},imageStyle:{default:()=>({})}},setup:e=>(e,a)=>(t.openBlock(),t.createElementBlock("div",L,["1"===e.image?(t.openBlock(),t.createElementBlock("svg",{key:0,class:"u-empty-1",style:t.normalizeStyle(e.imageStyle),viewBox:"0 0 184 152",xmlns:"http://www.w3.org/2000/svg"},H,4)):"2"===e.image?(t.openBlock(),t.createElementBlock("svg",{key:1,class:"u-empty-2",style:t.normalizeStyle(e.imageStyle),viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},R,4)):t.renderSlot(e.$slots,"default",{key:2},(()=>[t.createElementVNode("img",{class:"u-empty",src:e.image,style:t.normalizeStyle(e.imageStyle),alt:"image"},null,12,K)]),!0),e.description?(t.openBlock(),t.createElementBlock("p",{key:3,class:t.normalizeClass(["u-description",{gray:"2"===e.image}])},[t.renderSlot(e.$slots,"description",{},(()=>[t.createTextVNode(t.toDisplayString(e.description),1)]),!0)],2)):t.createCommentVNode("",!0)]))}),[["__scopeId","data-v-d0028f6b"]]),P=Object.freeze(Object.defineProperty({__proto__:null,NButton:c,NCheckbox:g,NCol:f,NCollapse:T,NDivider:A,NEmpty:O,NIcon:a,NInput:s,NLoading:V,NRow:u,NSwitch:_},Symbol.toStringTag,{value:"Module"})),q=e=>{if(q.installed)return;Object.keys(P).map((e=>P[e])).forEach((t=>{(t.hasOwnProperty("name")||t.hasOwnProperty("__name"))&&e.component(`${t.__name||t.name}`,t)}))},j={install:q};e.NIcon=a,e.NButton=c,e.NCheckbox=g,e.NCol=f,e.NCollapse=T,e.NDivider=A,e.NEmpty=O,e.NInput=s,e.NLoading=V,e.NRow=u,e.NSwitch=_,e.default=j,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

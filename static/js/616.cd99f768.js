"use strict";(self["webpackChunkjob"]=self["webpackChunkjob"]||[]).push([[616],{3737:function(){},3558:function(e,t,o){o.r(t),o.d(t,{default:function(){return _e}});var a=o(1404),n=o(3396),l=o(610),i=o(5323),r=o(5322),s=o(253),c=o(3444);const[u,d]=(0,l["do"])("collapse"),v=Symbol(u),m={border:i.J5,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var p=(0,n.aZ)({name:u,props:m,emits:["change","update:modelValue"],setup(e,{emit:t,slots:o}){const{linkChildren:a,children:l}=(0,s.$E)(v),i=e=>{t("change",e),t("update:modelValue",e)},u=(t,o)=>{const{accordion:a,modelValue:n}=e;i(a?t===n?"":t:o?n.concat(t):n.filter((e=>e!==t)))},m=(t={})=>{if(e.accordion)return;"boolean"===typeof t&&(t={expanded:t});const{expanded:o,skipDisabled:a}=t,n=l.filter((e=>e.disabled&&a?e.expanded.value:null!=o?o:!e.expanded.value)),r=n.map((e=>e.itemName.value));i(r)},p=t=>{const{accordion:o,modelValue:a}=e;return o?a===t:a.includes(t)};return(0,c.F)({toggleAll:m}),a({toggle:u,isExpanded:p}),()=>{var t;return(0,n.Wm)("div",{class:[d(),{[r.r5]:e.border}]},[null==(t=o.default)?void 0:t.call(o)])}}});const f=(0,a.n)(p);o(1958);var g=o(9242),h=o(4870),w=o(9048),y=o(2220),b=o(365),S=o(4250);const[x,I]=(0,l["do"])("collapse-item"),W=["icon","title","value","label","right-icon"],P=(0,y.l7)({},w.x_,{name:i.Or,isLink:i.J5,disabled:Boolean,readonly:Boolean,lazyRender:i.J5});var C=(0,n.aZ)({name:x,props:P,setup(e,{slots:t}){const o=(0,h.iH)(),a=(0,h.iH)(),{parent:l,index:i}=(0,s.NB)(v);if(!l)return void 0;const r=(0,n.Fl)((()=>{var t;return null!=(t=e.name)?t:i.value})),u=(0,n.Fl)((()=>l.isExpanded(r.value))),d=(0,h.iH)(u.value),m=(0,b.W)((()=>d.value||!e.lazyRender)),p=()=>{u.value?o.value&&(o.value.style.height=""):d.value=!1};(0,n.YP)(u,((e,t)=>{if(null===t)return;e&&(d.value=!0);const l=e?n.Y3:s.Wn;l((()=>{if(!a.value||!o.value)return;const{offsetHeight:t}=a.value;if(t){const a=`${t}px`;o.value.style.height=e?"0":a,(0,s.d1)((()=>{o.value&&(o.value.style.height=e?a:"0")}))}else p()}))}));const f=(e=!u.value)=>{l.toggle(r.value,e)},x=()=>{e.disabled||e.readonly||f()},P=()=>{const{border:o,disabled:a,readonly:l}=e,i=(0,y.ei)(e,Object.keys(w.x_));return l&&(i.isLink=!1),(a||l)&&(i.clickable=!1),(0,n.Wm)(S.bL,(0,n.dG)({role:"button",class:I("title",{disabled:a,expanded:u.value,borderless:!o}),"aria-expanded":String(u.value),onClick:x},i),(0,y.ei)(t,W))},C=m((()=>{var e;return(0,n.wy)((0,n.Wm)("div",{ref:o,class:I("wrapper"),onTransitionend:p},[(0,n.Wm)("div",{ref:a,class:I("content")},[null==(e=t.default)?void 0:e.call(t)])]),[[g.F8,d.value]])}));return(0,c.F)({toggle:f,expanded:u,itemName:r}),()=>(0,n.Wm)("div",{class:[I({border:i.value&&e.border})]},[P(),C()])}});const k=(0,a.n)(C);o(368),o(6742),o(3094);var Y=o(6056),z=(o(9247),o(3805)),O=(o(3081),o(2598));const[F,H]=(0,l["do"])("tag"),j={size:String,mark:Boolean,show:i.J5,type:(0,i.SQ)("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var Z=(0,n.aZ)({name:F,props:j,emits:["close"],setup(e,{slots:t,emit:o}){const a=e=>{e.stopPropagation(),o("close",e)},l=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},i=()=>{var o;const{type:i,mark:s,plain:c,round:u,size:d,closeable:v}=e,m={mark:s,plain:c,round:u};d&&(m[d]=d);const p=v&&(0,n.Wm)(O.JO,{name:"cross",class:[H("close"),r.e9],onClick:a},null);return(0,n.Wm)("span",{style:l(),class:H([m,i])},[null==(o=t.default)?void 0:o.call(t),p])};return()=>(0,n.Wm)(g.uT,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?i():null]})}});const $=(0,a.n)(Z);var J=o(7139),X=o.p+"static/img/sales1.7fd350e9.png",B=o.p+"static/img/sales2.56136233.png",R=o.p+"static/img/sales3.d8fb8711.png",_=o.p+"static/img/sales4.c7919bbe.png",D=o.p+"static/img/sales5.9b6704e2.png",E=o.p+"static/img/dpm1.dd28dfc5.png",N=o.p+"static/img/dpm2.9d83c9e9.png",T=o.p+"static/img/dpm3.1f67a766.png",L=o.p+"static/img/dpm4.717914f0.png",A=o.p+"static/img/dpm5.efbd3377.png",V=o.p+"static/img/dpm6.8bbcfcd4.png",U=o.p+"static/img/dpm7.f67928f8.png",M=o.p+"static/img/dpm8.743b334f.png";function Q(){const e=(0,h.iH)([X,B,R,_,D]),t=(0,h.iH)([E,N,T,L,A,V,U,M]);return{salesInages:e,dmpImages:t}}function q(){const{salesInages:e,dmpImages:t}=Q(),o=(0,h.iH)([{id:"1",company:"桔子信息科技有限公司",projects:[{id:"1-1",projectName:"销售管理系统",description:"（2021-12 ~ 2022-08, 5人， 前端独立开发，移动端）",technologys:["Vue 全家桶"],projectDescription:"是一个钢铁行业的中后台管理系统，用于管理订单、财务、产品、授信等模块的内容（该项目基于公司内部提供的框架上开发）",projectResponsibility:["1、负责产品、订单、汇款、退款、授信、结算、收盘等管理模块功能的开发（完成功能项30+)","2、封装公共的业务组件，如：搜索组件（带多条件内容筛选），组件化开发和公共方法抽离，减少单文件的代码量，以便于组件的维护和复用","3、对不同角色的一二级菜单数据进行处理分配，完成菜单的权限的控制"],projectUrl:"http://jinjiangadmin.oranllc.com/m/#/",projectImgages:e},{id:"1-2",projectName:"数字化经营决策和业绩管理系统",description:"（2022-10 ～ 2022-11， 5人， 前端独立开发， 移动端）",technologys:["Vue 全家桶","Pinia","Vant UI"],projectDescription:"该系统提供了企业的当下的销售数据，为经营者和决策者更精准的数据，从而实现更好的数据化管理",projectResponsibility:["1、负责项目的搭建（从0到1）和项目的规范化制作","2、封装公共的hooks 3+，如：页面水印、倒计时、ECharts等","3、对大文件进行组件拆分以及公共方法的抽取，减少重复代码","4、对不同角色的一二级菜单数据进行处理分配，完成菜单的权限的控制","5、完成不同图表的展示，如：柱状图、地图等个性化图表10+"],projectUrl:"",projectImgages:t}]}]);return{list:o}}var G=o(7548),K=o(9951),ee=o(7936),te=o(6048),oe=o(5261),ae=o(648);const[ne,le]=(0,l["do"])("swipe"),ie={loop:i.J5,width:i.Or,height:i.Or,vertical:Boolean,autoplay:(0,i.SI)(0),duration:(0,i.SI)(500),touchable:i.J5,lazyRender:Boolean,initialSwipe:(0,i.SI)(0),indicatorColor:String,showIndicators:i.J5,stopPropagation:i.J5},re=Symbol(ne);var se=(0,n.aZ)({name:ne,props:ie,emits:["change","dragStart","dragEnd"],setup(e,{emit:t,slots:o}){const a=(0,h.iH)(),l=(0,h.iH)(),i=(0,h.qj)({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let r=!1;const u=(0,oe.o)(),{children:d,linkChildren:v}=(0,s.$E)(re),m=(0,n.Fl)((()=>d.length)),p=(0,n.Fl)((()=>i[e.vertical?"height":"width"])),f=(0,n.Fl)((()=>e.vertical?u.deltaY.value:u.deltaX.value)),g=(0,n.Fl)((()=>{if(i.rect){const t=e.vertical?i.rect.height:i.rect.width;return t-p.value*m.value}return 0})),w=(0,n.Fl)((()=>p.value?Math.ceil(Math.abs(g.value)/p.value):m.value)),y=(0,n.Fl)((()=>m.value*p.value)),b=(0,n.Fl)((()=>(i.active+m.value)%m.value)),S=(0,n.Fl)((()=>{const t=e.vertical?"vertical":"horizontal";return u.direction.value===t})),x=(0,n.Fl)((()=>{const t={transitionDuration:`${i.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${i.offset}px)`};if(p.value){const o=e.vertical?"height":"width",a=e.vertical?"width":"height";t[o]=`${y.value}px`,t[a]=e[a]?`${e[a]}px`:""}return t})),I=t=>{const{active:o}=i;return t?e.loop?(0,te.uZ)(o+t,-1,m.value):(0,te.uZ)(o+t,0,w.value):o},W=(t,o=0)=>{let a=t*p.value;e.loop||(a=Math.min(a,-g.value));let n=o-a;return e.loop||(n=(0,te.uZ)(n,g.value,0)),n},P=({pace:o=0,offset:a=0,emitChange:n})=>{if(m.value<=1)return;const{active:l}=i,r=I(o),s=W(r,a);if(e.loop){if(d[0]&&s!==g.value){const e=s<g.value;d[0].setOffset(e?y.value:0)}if(d[m.value-1]&&0!==s){const e=s>0;d[m.value-1].setOffset(e?-y.value:0)}}i.active=r,i.offset=s,n&&r!==l&&t("change",b.value)},C=()=>{i.swiping=!0,i.active<=-1?P({pace:m.value}):i.active>=m.value&&P({pace:-m.value})},k=()=>{C(),u.reset(),(0,s.d1)((()=>{i.swiping=!1,P({pace:-1,emitChange:!0})}))},Y=()=>{C(),u.reset(),(0,s.d1)((()=>{i.swiping=!1,P({pace:1,emitChange:!0})}))};let z;const O=()=>clearTimeout(z),F=()=>{O(),e.autoplay>0&&m.value>1&&(z=setTimeout((()=>{Y(),F()}),+e.autoplay))},H=(t=+e.initialSwipe)=>{if(!a.value)return;const o=()=>{var o,n;if(!(0,ee.xj)(a)){const t={width:a.value.offsetWidth,height:a.value.offsetHeight};i.rect=t,i.width=+(null!=(o=e.width)?o:t.width),i.height=+(null!=(n=e.height)?n:t.height)}m.value&&(t=Math.min(m.value-1,t),-1===t&&(t=m.value-1)),i.active=t,i.swiping=!0,i.offset=W(t),d.forEach((e=>{e.setOffset(0)})),F()};(0,ee.xj)(a)?(0,n.Y3)().then(o):o()},j=()=>H(i.active);let Z;const $=t=>{!e.touchable||t.touches.length>1||(u.start(t),r=!1,Z=Date.now(),O(),C())},J=o=>{if(e.touchable&&i.swiping&&(u.move(o),S.value)){const a=!e.loop&&(0===i.active&&f.value>0||i.active===m.value-1&&f.value<0);a||((0,ee.PF)(o,e.stopPropagation),P({offset:f.value}),r||(t("dragStart"),r=!0))}},X=()=>{if(!e.touchable||!i.swiping)return;const o=Date.now()-Z,a=f.value/o,n=Math.abs(a)>.25||Math.abs(f.value)>p.value/2;if(n&&S.value){const t=e.vertical?u.offsetY.value:u.offsetX.value;let o=0;o=e.loop?t>0?f.value>0?-1:1:0:-Math[f.value>0?"ceil":"floor"](f.value/p.value),P({pace:o,emitChange:!0})}else f.value&&P({pace:0});r=!1,i.swiping=!1,t("dragEnd"),F()},B=(t,o={})=>{C(),u.reset(),(0,s.d1)((()=>{let a;a=e.loop&&t===m.value?0===i.active?0:t:t%m.value,o.immediate?(0,s.d1)((()=>{i.swiping=!1})):i.swiping=!1,P({pace:a-i.active,emitChange:!0})}))},R=(t,o)=>{const a=o===b.value,l=a?{backgroundColor:e.indicatorColor}:void 0;return(0,n.Wm)("i",{style:l,class:le("indicator",{active:a})},null)},_=()=>o.indicator?o.indicator({active:b.value,total:m.value}):e.showIndicators&&m.value>1?(0,n.Wm)("div",{class:le("indicators",{vertical:e.vertical})},[Array(m.value).fill("").map(R)]):void 0;return(0,c.F)({prev:k,next:Y,state:i,resize:j,swipeTo:B}),v({size:p,props:e,count:m,activeIndicator:b}),(0,n.YP)((()=>e.initialSwipe),(e=>H(+e))),(0,n.YP)(m,(()=>H(i.active))),(0,n.YP)((()=>e.autoplay),F),(0,n.YP)([ee.bn,ee.uK],j),(0,n.YP)((0,s.d9)(),(e=>{"visible"===e?F():O()})),(0,n.bv)(H),(0,n.dl)((()=>H(i.active))),(0,ae.h)((()=>H(i.active))),(0,n.se)(O),(0,n.Jd)(O),(0,s.OR)("touchmove",J,{target:l}),()=>{var t;return(0,n.Wm)("div",{ref:a,class:le()},[(0,n.Wm)("div",{ref:l,style:x.value,class:le("track",{vertical:e.vertical}),onTouchstartPassive:$,onTouchend:X,onTouchcancel:X},[null==(t=o.default)?void 0:t.call(o)]),_()])}}});const ce=(0,a.n)(se);var ue=o(3005),de=o(3),ve=o(2229);const[me,pe]=(0,l["do"])("swipe-item");var fe=(0,n.aZ)({name:me,setup(e,{slots:t}){let o;const a=(0,h.qj)({offset:0,inited:!1,mounted:!1}),{parent:l,index:i}=(0,s.NB)(re);if(!l)return void 0;const r=(0,n.Fl)((()=>{const e={},{vertical:t}=l.props;return l.size.value&&(e[t?"height":"width"]=`${l.size.value}px`),a.offset&&(e.transform=`translate${t?"Y":"X"}(${a.offset}px)`),e})),u=(0,n.Fl)((()=>{const{loop:e,lazyRender:t}=l.props;if(!t||o)return!0;if(!a.mounted)return!1;const n=l.activeIndicator.value,r=l.count.value-1,s=0===n&&e?r:n-1,c=n===r&&e?0:n+1;return o=i.value===n||i.value===s||i.value===c,o})),d=e=>{a.offset=e};return(0,n.bv)((()=>{(0,n.Y3)((()=>{a.mounted=!0}))})),(0,c.F)({setOffset:d}),()=>{var e;return(0,n.Wm)("div",{class:pe(),style:r.value},[u.value?null==(e=t.default)?void 0:e.call(t):null])}}});const ge=(0,a.n)(fe);const he=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),we=(0,l["do"])("image-preview")[1];var ye=(0,n.aZ)({props:{src:String,show:Boolean,active:Number,minZoom:(0,i.ir)(i.Or),maxZoom:(0,i.ir)(i.Or),rootWidth:(0,i.ir)(Number),rootHeight:(0,i.ir)(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(e,{emit:t,slots:o}){const a=(0,h.qj)({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),l=(0,oe.o)(),i=(0,h.iH)(),c=(0,n.Fl)((()=>{const{rootWidth:t,rootHeight:o}=e,n=o/t;return a.imageRatio>n})),u=(0,n.Fl)((()=>{const{scale:e,moveX:t,moveY:o,moving:n,zooming:l}=a,i={transitionDuration:l||n?"0s":".3s"};if(1!==e){const a=t/e,n=o/e;i.transform=`scale(${e}, ${e}) translate(${a}px, ${n}px)`}return i})),d=(0,n.Fl)((()=>{if(a.imageRatio){const{rootWidth:t,rootHeight:o}=e,n=c.value?o/a.imageRatio:t;return Math.max(0,(a.scale*n-t)/2)}return 0})),v=(0,n.Fl)((()=>{if(a.imageRatio){const{rootWidth:t,rootHeight:o}=e,n=c.value?o:t*a.imageRatio;return Math.max(0,(a.scale*n-o)/2)}return 0})),m=o=>{o=(0,te.uZ)(o,+e.minZoom,+e.maxZoom+1),o!==a.scale&&(a.scale=o,t("scale",{scale:o,index:e.active}))},p=()=>{m(1),a.moveX=0,a.moveY=0},f=()=>{const e=a.scale>1?1:2;m(e),a.moveX=0,a.moveY=0};let g,w,y,b,S,x,I,W=!1;const P=t=>{const{touches:o}=t;if(g=o.length,2===g&&e.disableZoom)return;const{offsetX:n}=l;l.start(t),w=a.moveX,y=a.moveY,I=Date.now(),W=!1,a.moving=1===g&&1!==a.scale,a.zooming=2===g&&!n.value,a.zooming&&(b=a.scale,S=he(t.touches))},C=e=>{const{touches:t}=e;if(l.move(e),a.moving){const{deltaX:t,deltaY:o}=l,n=t.value+w,i=o.value+y;if((n>d.value||n<-d.value)&&!W)return void(a.moving=!1);W=!0,(0,ee.PF)(e,!0),a.moveX=(0,te.uZ)(n,-d.value,d.value),a.moveY=(0,te.uZ)(i,-v.value,v.value)}if(a.zooming&&((0,ee.PF)(e,!0),2===t.length)){const e=he(t),o=b*e/S;m(o)}},k=()=>{if(g>1)return;const{offsetX:e,offsetY:o}=l,a=Date.now()-I,n=250,i=5;e.value<i&&o.value<i&&(a<n?x?(clearTimeout(x),x=null,f()):x=setTimeout((()=>{t("close"),x=null}),n):a>r.Cp&&t("longPress"))},Y=t=>{let o=!1;(a.moving||a.zooming)&&(o=!0,a.moving&&w===a.moveX&&y===a.moveY&&(o=!1),t.touches.length||(a.zooming&&(a.moveX=(0,te.uZ)(a.moveX,-d.value,d.value),a.moveY=(0,te.uZ)(a.moveY,-v.value,v.value),a.zooming=!1),a.moving=!1,w=0,y=0,b=1,a.scale<1&&p(),a.scale>e.maxZoom&&(a.scale=+e.maxZoom))),(0,ee.PF)(t,o),k(),l.reset()},z=e=>{const{naturalWidth:t,naturalHeight:o}=e.target;a.imageRatio=o/t};return(0,n.YP)((()=>e.active),p),(0,n.YP)((()=>e.show),(e=>{e||p()})),(0,s.OR)("touchmove",C,{target:(0,n.Fl)((()=>{var e;return null==(e=i.value)?void 0:e.$el}))}),()=>{const t={loading:()=>(0,n.Wm)(ve.gb,{type:"spinner"},null)};return(0,n.Wm)(ge,{ref:i,class:we("swipe-item"),onTouchstartPassive:P,onTouchend:Y,onTouchcancel:Y},{default:()=>[o.image?(0,n.Wm)("div",{class:we("image-wrap")},[o.image({src:e.src})]):(0,n.Wm)(de.Ee,{src:e.src,fit:"contain",class:we("image",{vertical:c.value}),style:u.value,onLoad:z},t)]})}}});const[be,Se]=(0,l["do"])("image-preview"),xe=["show","teleport","transition","overlayStyle","closeOnPopstate"],Ie={show:Boolean,loop:i.J5,images:(0,i.Ce)(),minZoom:(0,i.SI)(1/3),maxZoom:(0,i.SI)(3),overlay:i.J5,closeable:Boolean,showIndex:i.J5,className:i.Vg,closeIcon:(0,i.SQ)("clear"),transition:String,beforeClose:Function,overlayClass:i.Vg,overlayStyle:Object,swipeDuration:(0,i.SI)(300),startPosition:(0,i.SI)(0),showIndicators:Boolean,closeOnPopstate:i.J5,closeIconPosition:(0,i.SQ)("top-right"),teleport:[String,Object]};var We=(0,n.aZ)({name:be,props:Ie,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:t,slots:o}){const a=(0,h.iH)(),l=(0,h.qj)({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),i=()=>{if(a.value){const e=(0,s.EL)(a.value.$el);l.rootWidth=e.width,l.rootHeight=e.height,a.value.resize()}},u=e=>t("scale",e),d=e=>t("update:show",e),v=()=>{(0,K.I)(e.beforeClose,{args:[l.active],done:()=>d(!1)})},m=e=>{e!==l.active&&(l.active=e,t("change",e))},p=()=>{if(e.showIndex)return(0,n.Wm)("div",{class:Se("index")},[o.index?o.index({index:l.active}):`${l.active+1} / ${e.images.length}`])},f=()=>{if(o.cover)return(0,n.Wm)("div",{class:Se("cover")},[o.cover()])},g=()=>{l.disableZoom=!0},w=()=>{l.disableZoom=!1},b=()=>(0,n.Wm)(ce,{ref:a,lazyRender:!0,loop:e.loop,class:Se("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:m,onDragEnd:w,onDragStart:g},{default:()=>[e.images.map(((a,i)=>(0,n.Wm)(ye,{src:a,show:e.show,active:l.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:l.rootWidth,rootHeight:l.rootHeight,disableZoom:l.disableZoom,onScale:u,onClose:v,onLongPress:()=>t("longPress",{index:i})},{image:o.image})))]}),S=()=>{if(e.closeable)return(0,n.Wm)(O.JO,{role:"button",name:e.closeIcon,class:[Se("close-icon",e.closeIconPosition),r.e9],onClick:v},null)},x=()=>t("closed"),I=(e,t)=>{var o;return null==(o=a.value)?void 0:o.swipeTo(e,t)};return(0,c.F)({swipeTo:I}),(0,n.bv)(i),(0,n.YP)([ee.bn,ee.uK],i),(0,n.YP)((()=>e.startPosition),(e=>m(+e))),(0,n.YP)((()=>e.show),(o=>{const{images:a,startPosition:r}=e;o?(m(+r),(0,n.Y3)((()=>{i(),I(+r,{immediate:!0})}))):t("close",{index:l.active,url:a[l.active]})})),()=>(0,n.Wm)(ue.GI,(0,n.dG)({class:[Se(),e.className],overlayClass:[Se("overlay"),e.overlayClass],onClosed:x,"onUpdate:show":d},(0,y.ei)(e,xe)),{default:()=>[S(),b(),p(),f()]})}});let Pe;const Ce={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function ke(){({instance:Pe}=(0,G.H)({setup(){const{state:e,toggle:t}=(0,G.o)(),o=()=>{e.images=[]};return()=>(0,n.Wm)(We,(0,n.dG)(e,{onClosed:o,"onUpdate:show":t}),null)}}))}const Ye=(e,t=0)=>{if(y._f)return Pe||ke(),e=Array.isArray(e)?{images:e,startPosition:t}:e,Pe.open((0,y.l7)({},Ce,e)),Pe},ze=e=>((0,n.dD)("data-v-042385fa"),e=e(),(0,n.Cn)(),e),Oe={class:"item-li"},Fe=ze((()=>(0,n._)("span",{class:"tilte"},"项目技术：",-1))),He={class:"item-li"},je=ze((()=>(0,n._)("span",{class:"tilte"},"项目描述：",-1))),Ze={class:"item-li"},$e=ze((()=>(0,n._)("span",{class:"tilte"},"项目职责：",-1))),Je=["href"];var Xe={__name:"ProjectView",setup(e){const{list:t}=q(),o=(0,h.iH)("1");return(e,a)=>{const l=$,i=z.JX,r=Y.X2,s=k,c=f;return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(c,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),accordion:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,h.SU)(t),(e=>((0,n.wg)(),(0,n.j4)(s,{key:e.id,title:e.company,name:e.id},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.projects,(e=>((0,n.wg)(),(0,n.iD)("ul",{key:e.id},[(0,n._)("h3",null,(0,J.zw)(e.projectName)+(0,J.zw)(e.description),1),(0,n._)("li",Oe,[Fe,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.technologys,(e=>((0,n.wg)(),(0,n.j4)(l,{key:e,size:"medium",type:"primary",class:"item-tag"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,J.zw)(e),1)])),_:2},1024)))),128))]),(0,n._)("li",He,[je,(0,n.Uk)((0,J.zw)(e.projectDescription),1)]),(0,n._)("li",Ze,[$e,(0,n._)("ol",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.projectResponsibility,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},(0,J.zw)(e),1)))),128))])]),(0,n._)("li",null,[(0,n.Wm)(r,{gutter:"20"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(i,{span:"10"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{type:"success",size:"large",plain:"",onClick:t=>(0,h.SU)(Ye)(e.projectImgages)},{default:(0,n.w5)((()=>[(0,n.Uk)("预览项目效果图")])),_:2},1032,["onClick"])])),_:2},1536),[[g.F8,e.projectImgages?.length]]),(0,n.wy)((0,n.Wm)(i,{span:"8"},{default:(0,n.w5)((()=>[(0,n._)("a",{href:e.projectUrl},[(0,n.Wm)(l,{type:"primary",size:"large",plain:""},{default:(0,n.w5)((()=>[(0,n.Uk)("前往项目")])),_:1})],8,Je)])),_:2},1536),[[g.F8,e.projectUrl]])])),_:2},1024)])])))),128))])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])}}},Be=o(89);const Re=(0,Be.Z)(Xe,[["__scopeId","data-v-042385fa"]]);var _e=Re},3805:function(e,t,o){o.d(t,{JX:function(){return m}});var a=o(1404),n=o(3396),l=o(610),i=o(5323),r=o(253),s=o(6652);const[c,u]=(0,l["do"])("col"),d={tag:(0,i.SQ)("div"),span:(0,i.SI)(0),offset:i.Or};var v=(0,n.aZ)({name:c,props:d,setup(e,{slots:t}){const{parent:o,index:a}=(0,r.NB)(s.oA),l=(0,n.Fl)((()=>{if(!o)return;const{spaces:e}=o;if(e&&e.value&&e.value[a.value]){const{left:t,right:o}=e.value[a.value];return{paddingLeft:t?`${t}px`:null,paddingRight:o?`${o}px`:null}}}));return()=>{const{tag:o,span:a,offset:i}=e;return(0,n.Wm)(o,{style:l.value,class:u({[a]:a,[`offset-${i}`]:i})},{default:()=>{var e;return[null==(e=t.default)?void 0:e.call(t)]}})}}});const m=(0,a.n)(v)},3081:function(e,t,o){o(1958),o(3737)},648:function(e,t,o){o.d(t,{S:function(){return n},h:function(){return l}});var a=o(3396);const n=Symbol();function l(e){const t=(0,a.f3)(n,null);t&&(0,a.YP)(t,(t=>{t&&e()}))}},3444:function(e,t,o){o.d(t,{F:function(){return l}});var a=o(3396),n=o(2220);function l(e){const t=(0,a.FN)();t&&(0,n.l7)(t.proxy,e)}},365:function(e,t,o){o.d(t,{W:function(){return l}});var a=o(4870),n=o(3396);function l(e){const t=(0,a.iH)(!1);return(0,n.YP)(e,(e=>{e&&(t.value=e)}),{immediate:!0}),e=>()=>t.value?e():null}},5261:function(e,t,o){o.d(t,{o:function(){return l}});var a=o(4870);function n(e,t){return e>t?"horizontal":t>e?"vertical":""}function l(){const e=(0,a.iH)(0),t=(0,a.iH)(0),o=(0,a.iH)(0),l=(0,a.iH)(0),i=(0,a.iH)(0),r=(0,a.iH)(0),s=(0,a.iH)(""),c=()=>"vertical"===s.value,u=()=>"horizontal"===s.value,d=()=>{o.value=0,l.value=0,i.value=0,r.value=0,s.value=""},v=o=>{d(),e.value=o.touches[0].clientX,t.value=o.touches[0].clientY},m=a=>{const c=a.touches[0];o.value=(c.clientX<0?0:c.clientX)-e.value,l.value=c.clientY-t.value,i.value=Math.abs(o.value),r.value=Math.abs(l.value);const u=10;(!s.value||i.value<u&&r.value<u)&&(s.value=n(i.value,r.value))};return{move:m,start:v,reset:d,startX:e,startY:t,deltaX:o,deltaY:l,offsetX:i,offsetY:r,direction:s,isVertical:c,isHorizontal:u}}},3:function(e,t,o){o.d(t,{Ee:function(){return g}});var a=o(1404),n=o(3396),l=o(4870),i=o(610),r=o(5323),s=o(6048),c=o(6491),u=o(2220),d=o(2598);const[v,m]=(0,i["do"])("image"),p={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:r.Or,height:r.Or,radius:r.Or,lazyLoad:Boolean,iconSize:r.Or,showError:r.J5,errorIcon:(0,r.SQ)("photo-fail"),iconPrefix:String,showLoading:r.J5,loadingIcon:(0,r.SQ)("photo")};var f=(0,n.aZ)({name:v,props:p,emits:["load","error"],setup(e,{emit:t,slots:o}){const a=(0,l.iH)(!1),i=(0,l.iH)(!0),r=(0,l.iH)(),{$Lazyload:v}=(0,n.FN)().proxy,p=(0,n.Fl)((()=>{const t={width:(0,s.Nn)(e.width),height:(0,s.Nn)(e.height)};return(0,c.Xq)(e.radius)&&(t.overflow="hidden",t.borderRadius=(0,s.Nn)(e.radius)),t}));(0,n.YP)((()=>e.src),(()=>{a.value=!1,i.value=!0}));const f=e=>{i.value&&(i.value=!1,t("load",e))},g=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),f(e)},h=e=>{a.value=!0,i.value=!1,t("error",e)},w=(t,o,a)=>a?a():(0,n.Wm)(d.JO,{name:t,size:e.iconSize,class:o,classPrefix:e.iconPrefix},null),y=()=>i.value&&e.showLoading?(0,n.Wm)("div",{class:m("loading")},[w(e.loadingIcon,m("loading-icon"),o.loading)]):a.value&&e.showError?(0,n.Wm)("div",{class:m("error")},[w(e.errorIcon,m("error-icon"),o.error)]):void 0,b=()=>{if(a.value||!e.src)return;const t={alt:e.alt,class:m("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?(0,n.wy)((0,n.Wm)("img",(0,n.dG)({ref:r},t),null),[[(0,n.Q2)("lazy"),e.src]]):(0,n.Wm)("img",(0,n.dG)({ref:r,src:e.src,onLoad:f,onError:h},t),null)},S=({el:e})=>{const t=()=>{e===r.value&&i.value&&g()};r.value?t():(0,n.Y3)(t)},x=({el:e})=>{e!==r.value||a.value||h()};return v&&u._f&&(v.$on("loaded",S),v.$on("error",x),(0,n.Jd)((()=>{v.$off("loaded",S),v.$off("error",x)}))),(0,n.bv)((()=>{(0,n.Y3)((()=>{var e;(null==(e=r.value)?void 0:e.complete)&&g()}))})),()=>{var t;return(0,n.Wm)("div",{class:m({round:e.round,block:e.block}),style:p.value},[b(),y(),null==(t=o.default)?void 0:t.call(o)])}}});const g=(0,a.n)(f)},3005:function(e,t,o){o.d(t,{GI:function(){return $}});var a=o(1404),n=o(3396),l=o(9242),i=o(4870),r=o(4877),s=o(2220),c=o(5323),u=o(610),d=o(6491),v=o(9951),m=o(5322),p=o(253),f=o(3444),g=o(5261),h=o(7936);let w=0;const y="van-overflow-hidden";function b(e,t){const o=(0,g.o)(),a="01",l="10",i=t=>{o.move(t);const n=o.deltaY.value>0?l:a,i=(0,p.rP)(t.target,e.value),{scrollHeight:r,offsetHeight:s,scrollTop:c}=i;let u="11";0===c?u=s>=r?"00":"01":c+s>=r&&(u="10"),"11"===u||!o.isVertical()||parseInt(u,2)&parseInt(n,2)||(0,h.PF)(t,!0)},r=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",i,{passive:!1}),w||document.body.classList.add(y),w++},s=()=>{w&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",i),w--,w||document.body.classList.remove(y))},c=()=>t()&&r(),u=()=>t()&&s();(0,p.Ib)(c),(0,n.se)(u),(0,n.Jd)(u),(0,n.YP)(t,(e=>{e?r():s()}))}var S=o(365),x=o(648),I=o(140),W=o(2598),P=o(6048);const[C,k]=(0,u["do"])("overlay"),Y={show:Boolean,zIndex:c.Or,duration:c.Or,className:c.Vg,lockScroll:c.J5,lazyRender:c.J5,customStyle:Object};var z=(0,n.aZ)({name:C,props:Y,setup(e,{slots:t}){const o=(0,i.iH)(),a=(0,S.W)((()=>e.show||!e.lazyRender)),r=t=>{e.lockScroll&&(0,h.PF)(t,!0)},c=a((()=>{var a;const i=(0,s.l7)((0,P.As)(e.zIndex),e.customStyle);return(0,d.Xq)(e.duration)&&(i.animationDuration=`${e.duration}s`),(0,n.wy)((0,n.Wm)("div",{ref:o,style:i,class:[k(),e.className]},[null==(a=t.default)?void 0:a.call(t)]),[[l.F8,e.show]])}));return(0,p.OR)("touchmove",r,{target:o}),()=>(0,n.Wm)(l.uT,{name:"van-fade",appear:!0},{default:c})}});const O=(0,a.n)(z);const F=(0,s.l7)({},r.W,{round:Boolean,position:(0,c.SQ)("center"),closeIcon:(0,c.SQ)("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:(0,c.SQ)("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[H,j]=(0,u["do"])("popup");var Z=(0,n.aZ)({name:H,inheritAttrs:!1,props:F,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:o,slots:a}){let r,s;const c=(0,i.iH)(),u=(0,i.iH)(),g=(0,S.W)((()=>e.show||!e.lazyRender)),h=(0,n.Fl)((()=>{const t={zIndex:c.value};if((0,d.Xq)(e.duration)){const o="center"===e.position?"animationDuration":"transitionDuration";t[o]=`${e.duration}s`}return t})),w=()=>{r||(r=!0,c.value=void 0!==e.zIndex?+e.zIndex:(0,I.t)(),t("open"))},y=()=>{r&&(0,v.I)(e.beforeClose,{done(){r=!1,t("close"),t("update:show",!1)}})},P=o=>{t("clickOverlay",o),e.closeOnClickOverlay&&y()},C=()=>{if(e.overlay)return(0,n.Wm)(O,{show:e.show,class:e.overlayClass,zIndex:c.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:P},{default:a["overlay-content"]})},k=e=>{t("clickCloseIcon",e),y()},Y=()=>{if(e.closeable)return(0,n.Wm)(W.JO,{role:"button",tabindex:0,name:e.closeIcon,class:[j("close-icon",e.closeIconPosition),m.e9],classPrefix:e.iconPrefix,onClick:k},null)},z=()=>t("opened"),F=()=>t("closed"),H=e=>t("keydown",e),Z=g((()=>{var t;const{round:i,position:r,safeAreaInsetTop:s,safeAreaInsetBottom:c}=e;return(0,n.wy)((0,n.Wm)("div",(0,n.dG)({ref:u,style:h.value,role:"dialog",tabindex:0,class:[j({round:i,[r]:r}),{"van-safe-area-top":s,"van-safe-area-bottom":c}],onKeydown:H},o),[null==(t=a.default)?void 0:t.call(a),Y()]),[[l.F8,e.show]])})),$=()=>{const{position:t,transition:o,transitionAppear:a}=e,i="center"===t?"van-fade":`van-popup-slide-${t}`;return(0,n.Wm)(l.uT,{name:o||i,appear:a,onAfterEnter:z,onAfterLeave:F},{default:Z})};return(0,n.YP)((()=>e.show),(e=>{e&&!r&&(w(),0===o.tabindex&&(0,n.Y3)((()=>{var e;null==(e=u.value)||e.focus()}))),!e&&r&&(r=!1,t("close"))})),(0,f.F)({popupRef:u}),b(u,(()=>e.show&&e.lockScroll)),(0,p.OR)("popstate",(()=>{e.closeOnPopstate&&(y(),s=!1)})),(0,n.bv)((()=>{e.show&&w()})),(0,n.dl)((()=>{s&&(t("update:show",!0),s=!1)})),(0,n.se)((()=>{e.show&&e.teleport&&(y(),s=!0)})),(0,n.JJ)(x.S,(()=>e.show)),()=>e.teleport?(0,n.Wm)(n.lR,{to:e.teleport},{default:()=>[C(),$()]}):(0,n.Wm)(n.HY,null,[C(),$()])}});const $=(0,a.n)(Z)},4877:function(e,t,o){o.d(t,{W:function(){return n}});var a=o(5323);const n={show:Boolean,zIndex:a.Or,overlay:a.J5,duration:a.Or,teleport:[String,Object],lockScroll:a.J5,lazyRender:a.J5,beforeClose:Function,overlayStyle:Object,overlayClass:a.Vg,transitionAppear:Boolean,closeOnClickOverlay:a.J5};Object.keys(n)},6652:function(e,t,o){o.d(t,{ZP:function(){return d},oA:function(){return c}});o(7658);var a=o(3396),n=o(610),l=o(5323),i=o(253);const[r,s]=(0,n["do"])("row"),c=Symbol(r),u={tag:(0,l.SQ)("div"),wrap:l.J5,align:String,gutter:(0,l.SI)(0),justify:String};var d=(0,a.aZ)({name:r,props:u,setup(e,{slots:t}){const{children:o,linkChildren:n}=(0,i.$E)(c),l=(0,a.Fl)((()=>{const e=[[]];let t=0;return o.forEach(((o,a)=>{t+=Number(o.span),t>24?(e.push([a]),t-=24):e[e.length-1].push(a)})),e})),r=(0,a.Fl)((()=>{const t=Number(e.gutter),o=[];return t?(l.value.forEach((e=>{const a=t*(e.length-1)/e.length;e.forEach(((e,n)=>{if(0===n)o.push({right:a});else{const n=t-o[e-1].right,l=a-n;o.push({left:n,right:l})}}))})),o):o}));return n({spaces:r}),()=>{const{tag:o,wrap:n,align:l,justify:i}=e;return(0,a.Wm)(o,{class:s({[`align-${l}`]:l,[`justify-${i}`]:i,nowrap:!n})},{default:()=>{var e;return[null==(e=t.default)?void 0:e.call(t)]}})}}})},6056:function(e,t,o){o.d(t,{X2:function(){return l}});var a=o(1404),n=o(6652);const l=(0,a.n)(n.ZP)},9247:function(e,t,o){o(1958),o(3737)},5322:function(e,t,o){o.d(t,{Cp:function(){return c},T5:function(){return a},WN:function(){return s},_K:function(){return l},e9:function(){return r},k7:function(){return n},r5:function(){return i}});const a="van-hairline",n=`${a}--top`,l=`${a}--surround`,i=`${a}--top-bottom`,r="van-haptics-feedback",s=Symbol("van-form"),c=500},9951:function(e,t,o){o.d(t,{I:function(){return l}});var a=o(2220),n=o(6491);function l(e,{args:t=[],done:o,canceled:l}){if(e){const i=e.apply(null,t);(0,n.tI)(i)?i.then((e=>{e?o():l&&l()})).catch(a.ZT):i?o():l&&l()}else o()}},7548:function(e,t,o){o.d(t,{H:function(){return s},o:function(){return r}});var a=o(4870),n=o(9242),l=o(2220),i=o(3444);function r(){const e=(0,a.qj)({show:!1}),t=t=>{e.show=t},o=o=>{(0,l.l7)(e,o,{transitionAppear:!0}),t(!0)},n=()=>t(!1);return(0,i.F)({open:o,close:n,toggle:t}),{open:o,close:n,state:e,toggle:t}}function s(e){const t=(0,n.ri)(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}}}]);
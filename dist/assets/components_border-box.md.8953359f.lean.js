import{d as x,o as a,c as r,F as W,K as F,x as o,n as M,r as u,_,Z as V,L as D,M as C,f as v,b as s,t as Q,A as g,e as z,h as O,D as y,z as f,N as b}from"./chunks/framework.85410589.js";import{u as A}from"./chunks/resize.5a8656eb.js";import{f as k}from"./chunks/color.9dd7ca9f.js";const J={class:"border-box-1"},K=["fill"],U=["values"],Z=["fill"],H=["values"],X=["fill"],Y=["values"],ss={name:"borderBox1"},ts=x({...ss,setup(l){const p=["left-top","right-top","left-bottom","right-bottom"],t=["#4fd2dd","#235fa7"];return(e,n)=>(a(),r("div",J,[(a(),r(W,null,F(p,i=>o("svg",{width:"150px",height:"150px",key:i,class:M(`${i} border`)},[o("polygon",{fill:t[0],points:"6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"},[o("animate",{attributeName:"fill",values:`${t[0]};${t[1]};${t[0]}`,dur:"0.5s",begin:"0s",repeatCount:"indefinite"},null,8,U)],8,K),o("polygon",{fill:t[1],points:"27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"},[o("animate",{attributeName:"fill",values:`${t[1]};${t[0]};${t[1]}`,dur:"0.5s",begin:"0s",repeatCount:"indefinite"},null,8,H)],8,Z),o("polygon",{fill:t[0],points:"9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"},[o("animate",{attributeName:"fill",values:`${t[0]};${t[1]};transparent`,dur:"1s",begin:"0s",repeatCount:"indefinite"},null,8,Y)],8,X)],2)),64)),u(e.$slots,"default",{},void 0,!0)]))}});const os=_(ts,[["__scopeId","data-v-598da20a"]]),w=l=>(D("data-v-2c75203a"),l=l(),C(),l),es=w(()=>o("div",{class:"line1"},null,-1)),ls=w(()=>o("div",{class:"line2"},null,-1)),ns=w(()=>o("div",{class:"line3"},null,-1)),as=w(()=>o("div",{class:"line4"},null,-1)),rs={name:"borderBox2"},ps=x({...rs,props:{boxStyle:null},setup(l){return(p,t)=>(a(),r("div",{class:"borderBox2",style:V(l.boxStyle)},[es,ls,ns,as,u(p.$slots,"default",{},void 0,!0)],4))}});const is=_(ps,[["__scopeId","data-v-2c75203a"]]),cs={name:"borderBox3"};const ds=l=>(D("data-v-f31cde96"),l=l(),C(),l),hs={class:"borderBox3"},ys=ds(()=>o("div",{class:"box-footer"},null,-1));function us(l,p,t,e,n,i){return a(),r("div",hs,[ys,u(l.$slots,"default",{},void 0,!0)])}const _s=_(cs,[["render",us],["__scopeId","data-v-f31cde96"]]),h=l=>(D("data-v-89ebb519"),l=l(),C(),l),bs=["width","height"],$s=["id"],fs=h(()=>o("feMorphology",{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"},null,-1)),xs=h(()=>o("feGaussianBlur",{in:"thicken",stdDeviation:"3",result:"blurred"},null,-1)),gs=["flood-color"],Bs=h(()=>o("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),vs=h(()=>o("feMerge",null,[o("feMergeNode",{in:"softGlowColored"}),o("feMergeNode",{in:"SourceGraphic"})],-1)),As=["points"],Ds=["stroke","filter","points"],Cs=["stroke","points"],ks=["stroke","points"],ms=["stroke","filter","points"],Es=["filter","fill","points"],ws=h(()=>o("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Ts=[ws],Ws=["filter","fill","points"],Is=h(()=>o("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Ss=[Is],qs=["filter","fill","points"],Ls=h(()=>o("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Ns=[Ls],Rs=["filter","fill","points"],Ps=h(()=>o("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Fs=[Ps],Ms=["filter","fill","points"],Vs=h(()=>o("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),js=[Vs],Gs=["filter","fill","points"],Qs=h(()=>o("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),zs=[Qs],Os=["x"],Js=["fill","filter","points"],Ks=["fill","filter","points"];let L=0;const c=["#8aaafb","#1f33a2"],Us={name:"BorborBox4"},Zs=x({...Us,props:{title:{default:""},titleWidth:{default:250}},setup(l){const{containerRef:p,width:t,height:e}=A(),n=v(`border-box-4-filterId-${L}`);return L++,(i,$)=>(a(),r("div",{class:"borderBox4",ref_key:"borderBox4Ref",ref:p},[s(t)>0&&s(e)>0?(a(),r("svg",{key:0,class:"svg-container",width:s(t),height:s(e)},[o("defs",null,[o("filter",{id:n.value,height:"150%",width:"150%",x:"-25%",y:"-25%"},[fs,xs,o("feFlood",{"flood-color":c[1],result:"glowColor"},null,8,gs),Bs,vs],8,$s)]),o("polygon",{fill:"transparent",points:`
        20, 32 ${s(t)*.5-l.titleWidth/2}, 32 ${s(t)*.5-l.titleWidth/2+20}, 53
        ${s(t)*.5+l.titleWidth/2-20}, 53 ${s(t)*.5+l.titleWidth/2}, 32
        ${s(t)-20}, 32 ${s(t)-8}, 48 ${s(t)-8}, ${s(e)-25} ${s(t)-20}, ${s(e)-8}
        20, ${s(e)-8} 8, ${s(e)-25} 8, 50
      `},null,8,As),o("polyline",{stroke:c[0],filter:`url(#${n.value})`,points:`
          ${(s(t)-l.titleWidth)/2}, 30
          20, 30 7, 50 7, ${50+(s(e)-167)/2}
          13, ${55+(s(e)-167)/2} 13, ${135+(s(e)-167)/2}
          7, ${140+(s(e)-167)/2} 7, ${s(e)-27}
          20, ${s(e)-7} ${s(t)-20}, ${s(e)-7} ${s(t)-7}, ${s(e)-27}
          ${s(t)-7}, ${140+(s(e)-167)/2} ${s(t)-13}, ${135+(s(e)-167)/2}
          ${s(t)-13}, ${55+(s(e)-167)/2} ${s(t)-7}, ${50+(s(e)-167)/2}
          ${s(t)-7}, 50 ${s(t)-20}, 30 ${(s(t)+l.titleWidth)/2}, 30
          ${(s(t)+l.titleWidth)/2-20}, 7 ${(s(t)-l.titleWidth)/2+20}, 7
          ${(s(t)-l.titleWidth)/2}, 30 ${(s(t)-l.titleWidth)/2+20}, 52
          ${(s(t)+l.titleWidth)/2-20}, 52 ${(s(t)+l.titleWidth)/2}, 30
        `},null,8,Ds),o("polygon",{stroke:c[0],fill:"transparent",points:`
          ${(s(t)+l.titleWidth)/2-5}, 30 ${(s(t)+l.titleWidth)/2-21}, 11
          ${(s(t)+l.titleWidth)/2-27}, 11 ${(s(t)+l.titleWidth)/2-8}, 34
        `},null,8,Cs),o("polygon",{stroke:c[0],fill:"transparent",points:`
          ${(s(t)-l.titleWidth)/2+5}, 30 ${(s(t)-l.titleWidth)/2+22}, 49
          ${(s(t)-l.titleWidth)/2+28}, 49 ${(s(t)-l.titleWidth)/2+8}, 26
        `},null,8,ks),o("polygon",{stroke:c[0],filter:`url(#${n.value})`,points:`
          ${(s(t)+l.titleWidth)/2-11}, 37 ${(s(t)+l.titleWidth)/2-32}, 11
          ${(s(t)-l.titleWidth)/2+23}, 11 ${(s(t)-l.titleWidth)/2+11}, 23
          ${(s(t)-l.titleWidth)/2+33}, 49 ${(s(t)+l.titleWidth)/2-22}, 49
        `},null,8,ms),o("polygon",{filter:`url(#${n.value})`,fill:c[0],opacity:"1",points:`
          ${(s(t)-l.titleWidth)/2-10}, 37 ${(s(t)-l.titleWidth)/2-31}, 37
          ${(s(t)-l.titleWidth)/2-25}, 46 ${(s(t)-l.titleWidth)/2-4}, 46
        `},Ts,8,Es),o("polygon",{filter:`url(#${n.value})`,fill:c[0],opacity:"0.7",points:`
          ${(s(t)-l.titleWidth)/2-40}, 37 ${(s(t)-l.titleWidth)/2-61}, 37
          ${(s(t)-l.titleWidth)/2-55}, 46 ${(s(t)-l.titleWidth)/2-34}, 46
        `},Ss,8,Ws),o("polygon",{filter:`url(#${n.value})`,fill:c[0],opacity:"0.5",points:`
          ${(s(t)-l.titleWidth)/2-70}, 37 ${(s(t)-l.titleWidth)/2-91}, 37
          ${(s(t)-l.titleWidth)/2-85}, 46 ${(s(t)-l.titleWidth)/2-64}, 46
        `},Ns,8,qs),o("polygon",{filter:`url(#${n.value})`,fill:c[0],opacity:"1",points:`
          ${(s(t)+l.titleWidth)/2+30}, 37 ${(s(t)+l.titleWidth)/2+9}, 37
          ${(s(t)+l.titleWidth)/2+3}, 46 ${(s(t)+l.titleWidth)/2+24}, 46
        `},Fs,8,Rs),o("polygon",{filter:`url(#${n.value})`,fill:c[0],opacity:"0.7",points:`
          ${(s(t)+l.titleWidth)/2+60}, 37 ${(s(t)+l.titleWidth)/2+39}, 37
          ${(s(t)+l.titleWidth)/2+33}, 46 ${(s(t)+l.titleWidth)/2+54}, 46
        `},js,8,Ms),o("polygon",{filter:`url(#${n.value})`,fill:c[0],opacity:"0.5",points:`
          ${(s(t)+l.titleWidth)/2+90}, 37 ${(s(t)+l.titleWidth)/2+69}, 37
          ${(s(t)+l.titleWidth)/2+63}, 46 ${(s(t)+l.titleWidth)/2+84}, 46
        `},zs,8,Gs),o("text",{class:"dv-border-box-11-title",x:`${s(t)/2}`,y:"32",fill:"#fff","font-size":"18","text-anchor":"middle","dominant-baseline":"middle"},Q(l.title),9,Os),o("polygon",{fill:c[0],filter:`url(#${n.value})`,points:`
          7, ${53+(s(e)-167)/2} 11, ${57+(s(e)-167)/2}
          11, ${133+(s(e)-167)/2} 7, ${137+(s(e)-167)/2}
        `},null,8,Js),o("polygon",{fill:c[0],filter:`url(#${n.value})`,points:`
          ${s(t)-7}, ${53+(s(e)-167)/2} ${s(t)-11}, ${57+(s(e)-167)/2}
          ${s(t)-11}, ${133+(s(e)-167)/2} ${s(t)-7}, ${137+(s(e)-167)/2}
        `},null,8,Ks)],8,bs)):g("",!0),u(i.$slots,"default",{},void 0,!0)],512))}});const Hs=_(Zs,[["__scopeId","data-v-89ebb519"]]),Xs=["width","height"],Ys=["stroke","d"],st=["stroke"],tt=["stroke"],ot=["stroke","d"],m=["#8aaafb","#1f33a2"],et={name:"BorborBox5"},lt=x({...et,setup(l){const{containerRef:p,width:t,height:e}=A();return(n,i)=>(a(),r("div",{class:"borderBox5",ref_key:"borderBox5Ref",ref:p},[s(t)>0&&s(e)>0?(a(),r("svg",{key:0,class:"svg-container",width:s(t),height:s(e)},[o("path",{stroke:m[0],d:`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${s(t)-20} 10 L ${s(t)-5} 25
          L ${s(t)-5} ${s(e)-5} L 20 ${s(e)-5}
          L 5 ${s(e)-20} L 5 20
        `},null,8,Ys),o("path",{fill:"transparent","stroke-width":"3","stroke-linecap":"round","stroke-dasharray":"10, 5",stroke:m[0],d:"M 16 9 L 61 9"},null,8,st),o("path",{fill:"transparent",stroke:m[1],d:"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"},null,8,tt),o("path",{fill:"transparent",stroke:m[1],d:`M ${s(t)-5} ${s(e)-30} L ${s(t)-5} ${s(e)-5} L ${s(t)-30} ${s(e)-5}`},null,8,ot)],8,Xs)):g("",!0),u(n.$slots,"default",{},void 0,!0)],512))}});const nt=_(lt,[["__scopeId","data-v-70cde60d"]]),T=l=>(D("data-v-a72ee5b5"),l=l(),C(),l),at=["width","height"],rt=["id"],pt=T(()=>o("feMorphology",{operator:"dilate",radius:"1",in:"SourceAlpha",result:"thicken"},null,-1)),it=T(()=>o("feGaussianBlur",{in:"thicken",stdDeviation:"2",result:"blurred"},null,-1)),ct=["flood-color"],dt=["values"],ht=T(()=>o("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),yt=T(()=>o("feMerge",null,[o("feMergeNode",{in:"softGlowColored"}),o("feMergeNode",{in:"SourceGraphic"})],-1)),ut=["stroke","d"],_t=["filter","stroke"],bt=["filter","stroke","d"],$t=["filter","stroke","d"],ft=["filter","stroke","d"];let N=0;const d=["#2e6099","#7ce7fd"],xt={name:"borderBox6"},gt=x({...xt,setup(l){const{containerRef:p,width:t,height:e}=A(),n=v(`border-box-4-filterId-${N}`);return N++,(i,$)=>(a(),r("div",{class:"borderBox6",ref_key:"borderBox6Ref",ref:p},[s(t)>0&&s(e)>0?(a(),r("svg",{key:0,class:"svg-container",width:s(t),height:s(e)},[o("defs",null,[o("filter",{id:n.value,height:"150%",width:"150%",x:"-25%",y:"-25%"},[pt,it,o("feFlood",{"flood-color":s(k)(d[1]||d[1],70),result:"glowColor"},[o("animate",{attributeName:"flood-color",values:`
                ${s(k)(d[1]||d[1],70)};
                ${s(k)(d[1]||d[1],30)};
                ${s(k)(d[1]||d[1],70)};
              `,dur:"3s",begin:"0s",repeatCount:"indefinite"},null,8,dt)],8,ct),ht,yt],8,rt)]),s(t)&&s(e)?(a(),r("path",{key:0,"stroke-width":"2",stroke:d[0],d:`
          M15 5 L ${s(t)-15} 5 Q ${s(t)-5} 5, ${s(t)-5} 15
          L ${s(t)-5} ${s(e)-15} Q ${s(t)-5} ${s(e)-5}, ${s(t)-15} ${s(e)-5}
          L 15, ${s(e)-5} Q 5 ${s(e)-5} 5 ${s(e)-15} L 5 15
          Q 5 5 15 5
        `},null,8,ut)):g("",!0),o("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${n.value})`,stroke:d[1],d:"M 20 5 L 15 5 Q 5 5 5 15 L 5 20"},null,8,_t),o("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${n.value})`,stroke:d[1],d:`M ${s(t)-20} 5 L ${s(t)-15} 5 Q ${s(t)-5} 5 ${s(t)-5} 15 L ${s(t)-5} 20`},null,8,bt),o("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${n.value})`,stroke:d[1],d:`
          M ${s(t)-20} ${s(e)-5} L ${s(t)-15} ${s(e)-5}
          Q ${s(t)-5} ${s(e)-5} ${s(t)-5} ${s(e)-15}
          L ${s(t)-5} ${s(e)-20}
        `},null,8,$t),o("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${n.value})`,stroke:d[1],d:`
          M 20 ${s(e)-5} L 15 ${s(e)-5}
          Q 5 ${s(e)-5} 5 ${s(e)-15}
          L 5 ${s(e)-20}
        `},null,8,ft)],8,at)):g("",!0),u(i.$slots,"default",{},void 0,!0)],512))}});const Bt=_(gt,[["__scopeId","data-v-a72ee5b5"]]),vt=["width","height"],At=["points"],Dt=["fill"],Ct={class:"border-content"},R=["#1d48c4","#d3e1f8"],kt=["left-top","right-top","left-bottom","right-bottom"],mt={name:"BorborBox7"},Et=x({...mt,setup(l){const{containerRef:p,width:t,height:e}=A();return(n,i)=>(a(),r("div",{class:"borderBox7-ignore",ref_key:"borderBox7Ref",ref:p,style:V(`box-shadow: inset 0 0 25px 3px ${R[0]}`)},[s(t)>0&&s(e)>0?(a(),r(W,{key:0},[(a(),r("svg",{class:"svg-container",width:s(t),height:s(e)},[o("polygon",{points:`
        4, 0 ${s(t)-4}, 0 ${s(t)}, 4 ${s(t)}, ${s(e)-4} ${s(t)-4}, ${s(e)}
        4, ${s(e)} 0, ${s(e)-4} 0, 4
      `},null,8,At)],8,vt)),(a(),r(W,null,F(kt,$=>o("svg",{width:"150px",height:"150px",key:$,class:M(`${$} svg-container-corner`)},[o("polygon",{fill:R[1],points:"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"},null,8,Dt)],2)),64))],64)):g("",!0),o("div",Ct,[u(n.$slots,"default",{},void 0,!0)])],4))}});const wt=_(Et,[["__scopeId","data-v-aaef6fa9"]]),j=l=>(D("data-v-bad923cd"),l=l(),C(),l),Tt=["width","height"],Wt=["id","d"],It=["id"],St=j(()=>o("stop",{offset:"0%","stop-color":"#fff","stop-opacity":"1"},null,-1)),qt=j(()=>o("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)),Lt=[St,qt],Nt=["id"],Rt=["fill"],Pt=["dur","path"],Ft=["points"],Mt=["stroke","xlink:href"],Vt=["stroke","xlink:href","mask"],jt=["from","to","dur"],P=["#235fa7","#4fd2dd"];let E=1;const Gt={name:"BorborBox8"},Qt=x({...Gt,props:{reverse:{type:Boolean,default:!1},duration:{default:3}},setup(l){const p=l,{containerRef:t,width:e,height:n}=A(),i=v(0),$=v(`border-box-8-path-${E}`),I=v(`border-box-8-gradient-${E}`),S=v(`border-box-8-mask-${E}`);E++;const q=z(()=>p.reverse?`M 2.5, 2.5 L 2.5, ${n.value-2.5} L ${e.value-2.5}, ${n.value-2.5} L ${e.value-2.5}, 2.5 L 2.5, 2.5`:`M2.5, 2.5 L${e.value-2.5}, 2.5 L${e.value-2.5}, ${n.value-2.5} L2.5, ${n.value-2.5} L2.5, 2.5`);return O(()=>{i.value=(e.value+n.value-5)*2}),(G,Ao)=>(a(),r("div",{class:"borderBox8",ref_key:"borderBox8Ref",ref:t},[s(e)>0&&s(n)>0?(a(),r("svg",{key:0,class:"svg-container",width:s(e),height:s(n)},[o("defs",null,[o("path",{id:$.value,d:s(q),fill:"transparent"},null,8,Wt),o("radialGradient",{id:I.value,cx:"50%",cy:"50%",r:"50%"},Lt,8,It),o("mask",{id:S.value},[o("circle",{cx:"0",cy:"0",r:"150",fill:`url(#${I.value})`},[o("animateMotion",{dur:`${l.duration}s`,path:s(q),rotate:"auto",repeatCount:"indefinite"},null,8,Pt)],8,Rt)],8,Nt)]),o("polygon",{fill:"transparent",points:`5, 5 ${s(e)-5}, 5 ${s(e)-5} ${s(n)-5} 5, ${s(n)-5}`},null,8,Ft),o("use",{stroke:P[0],"stroke-width":"1","xlink:href":`#${$.value}`},null,8,Mt),o("use",{stroke:P[1],"stroke-width":"3","xlink:href":`#${$.value}`,mask:`url(#${S.value})`},[o("animate",{attributeName:"stroke-dasharray",from:`0, ${i.value}`,to:`${i.value}, 0`,dur:`${l.duration}s`,repeatCount:"indefinite"},null,8,jt)],8,Vt)],8,Tt)):g("",!0),u(G.$slots,"default",{},void 0,!0)],512))}});const zt=_(Qt,[["__scopeId","data-v-bad923cd"]]),Ot=["width","height"],Jt=["points"],Kt=["stroke","points"],Ut=["stroke","points"],Zt=["fill"],Ht=["fill","cx"],Xt=["fill","cx","cy"],Yt=["fill","cy"],B=["#fff","rgba(255, 255, 255, 0.6)"],so={name:"BorborBox9"},to=x({...so,setup(l){const{containerRef:p,width:t,height:e}=A();return(n,i)=>(a(),r("div",{class:"borderBox9",ref_key:"borderBox9Ref",ref:p},[s(t)>0&&s(e)>0?(a(),r("svg",{key:0,class:"svg-container",width:s(t),height:s(e)},[o("polygon",{fill:"transparent",points:`
        7, 7 ${s(t)-7}, 7 ${s(t)-7}, ${s(e)-7} 7, ${s(e)-7}
      `},null,8,Jt),o("polyline",{stroke:B[0],points:`2, 2 ${s(t)-2} ,2 ${s(t)-2}, ${s(e)-2} 2, ${s(e)-2} 2, 2`},null,8,Kt),o("polyline",{stroke:B[1],points:`6, 6 ${s(t)-6}, 6 ${s(t)-6}, ${s(e)-6} 6, ${s(e)-6} 6, 6`},null,8,Ut),o("circle",{fill:B[0],cx:"11",cy:"11",r:"1"},null,8,Zt),o("circle",{fill:B[0],cx:s(t)-11,cy:"11",r:"1"},null,8,Ht),o("circle",{fill:B[0],cx:s(t)-11,cy:s(e)-11,r:"1"},null,8,Xt),o("circle",{fill:B[0],cx:"11",cy:s(e)-11,r:"1"},null,8,Yt)],8,Ot)):g("",!0),u(n.$slots,"default",{},void 0,!0)],512))}});const oo=_(to,[["__scopeId","data-v-772789ac"]]),eo=b("",4),lo=o("div",{style:{height:"200px",width:"100%"}},null,-1),no=b("",3),ao={style:{height:"200px",width:"100%"}},ro=b("",2),po=o("div",{style:{height:"200px",width:"100%"}},null,-1),io=b("",2),co=o("div",{style:{height:"200px",width:"100%"}},null,-1),ho=b("",4),yo=o("div",{style:{height:"200px",width:"100%"}},null,-1),uo=b("",2),_o=o("div",{style:{height:"200px",width:"100%"}},null,-1),bo=b("",2),$o=o("div",{style:{height:"200px",width:"100%"}},null,-1),fo=b("",2),xo=o("div",{style:{height:"200px",width:"100%"}},null,-1),go=b("",4),Bo=o("div",{style:{height:"200px",width:"100%"}},null,-1),mo=JSON.parse('{"title":"BorderBox","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"BorderBox1","slug":"borderbox1","link":"#borderbox1","children":[]},{"level":2,"title":"BorderBox2","slug":"borderbox2","link":"#borderbox2","children":[]},{"level":2,"title":"BorderBox3","slug":"borderbox3","link":"#borderbox3","children":[]},{"level":2,"title":"BorderBox4","slug":"borderbox4","link":"#borderbox4","children":[{"level":3,"title":"BorderBox4.API","slug":"borderbox4-api","link":"#borderbox4-api","children":[]}]},{"level":2,"title":"BorderBox5","slug":"borderbox5","link":"#borderbox5","children":[]},{"level":2,"title":"BorderBox6","slug":"borderbox6","link":"#borderbox6","children":[]},{"level":2,"title":"BorderBox7","slug":"borderbox7","link":"#borderbox7","children":[]},{"level":2,"title":"BorderBox8","slug":"borderbox8","link":"#borderbox8","children":[{"level":3,"title":"BorderBox8.API","slug":"borderbox8-api","link":"#borderbox8-api","children":[]}]},{"level":2,"title":"BorderBox9","slug":"borderbox9","link":"#borderbox9","children":[]}],"relativePath":"components/border-box.md","lastUpdated":1678780972000}'),vo={name:"components/border-box.md"},Eo=Object.assign(vo,{setup(l){return(p,t)=>(a(),r("div",null,[eo,y(s(os),null,{default:f(()=>[lo]),_:1}),no,o("div",ao,[y(s(is))]),ro,y(s(_s),null,{default:f(()=>[po]),_:1}),io,y(s(Hs),{title:"title",titleWidth:250},{default:f(()=>[co]),_:1}),ho,y(s(nt),null,{default:f(()=>[yo]),_:1}),uo,y(s(Bt),null,{default:f(()=>[_o]),_:1}),bo,y(s(wt),null,{default:f(()=>[$o]),_:1}),fo,y(s(zt),null,{default:f(()=>[xo]),_:1}),go,y(s(oo),null,{default:f(()=>[Bo]),_:1})]))}});export{mo as __pageData,Eo as default};

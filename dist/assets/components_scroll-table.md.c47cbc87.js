import{d as I,f as d,e as S,h as q,v as N,w as B,o as t,c as o,Z as r,b as u,A as f,F as m,K as b,t as v,i as W,_ as R,D as k,N as _}from"./chunks/framework.85410589.js";const Y={name:"ScrollTable"},P=I({...Y,props:{data:null,columnFlex:null,header:{default:null},showIdx:{type:Boolean,default:!1},animation:{type:Boolean,default:!0},duration:{default:3e3},headerBg:{default:"#002c8a"},oddRowBg:{default:"#010c32"},evenRowBg:{default:"#03184b"},rowNum:{default:7},rowHeightFixed:{default:0}},setup(l){const s=l,C=d(null),E=d(null),y=d(s.rowHeightFixed),p=d(s.data.map((a,c)=>({data:[...a],idx:c+1}))),i=d(0);let n=null;const D=S(()=>s.columnFlex.reduce((a,c)=>a+=c,s.showIdx?1:0));function x(){y.value||(y.value=C.value.clientHeight/s.rowNum)}function A(){s.data.length>s.rowNum&&(p.value=[...p.value,...p.value],n=window.setInterval(()=>{i.value++,i.value===s.data.length&&setTimeout(()=>{F(),i.value=0,setTimeout(()=>{w()},100)},500)},s.duration))}function F(){E.value.style.transitionProperty="none"}function w(){E.value.style.transitionProperty="transform"}return q(()=>{x(),s.animation&&A()}),N(()=>{n&&(clearInterval(n),n=null)}),B(()=>s.animation,a=>{a?A():n&&(clearInterval(n),n=null)}),B(()=>s.duration,a=>{a&&s.animation&&(n&&(clearInterval(n),n=null),p.value=s.data.map((c,e)=>({data:[...c],idx:e+1})),A())}),B(()=>s.rowNum,a=>{a?x():console.error("不能将rowNum设置为0")}),B(()=>s.data,a=>{a&&a.length>0&&(p.value=a.map((c,e)=>({data:[...c],idx:e+1})),i.value=0,s.animation&&W(()=>{n&&(clearInterval(n),n=null),A()}))}),(a,c)=>(t(),o("div",{class:"scroll-table",ref_key:"scrollTableRef",ref:C},[l.header&&l.header.length>0?(t(),o("div",{key:0,class:"thead",style:r({height:`${y.value}px`,backgroundColor:l.headerBg})},[l.showIdx?(t(),o("div",{key:0,class:"thead-col thead-idx",style:r({width:`${1/u(D)*100}%`})}," 序号 ",4)):f("",!0),(t(!0),o(m,null,b(l.header,(e,h)=>(t(),o("div",{key:e,class:"thead-col",style:r({width:`${(l.columnFlex[h]||1)/u(D)*100}%`})},v(e),5))),128))],4)):f("",!0),p.value&&p.value.length>0?(t(),o("div",{key:1,ref_key:"tbodyRef",ref:E,class:"tbody",style:r({transform:`translateY(-${y.value*i.value}px)`})},[(t(!0),o(m,null,b(p.value,(e,h)=>(t(),o("div",{key:h,class:"tbody-row",style:r({height:`${y.value}px`,backgroundColor:e.idx&1?l.oddRowBg:l.evenRowBg})},[l.showIdx?(t(),o("div",{key:0,class:"tbody-col tbody-idx",style:r({width:`${1/u(D)*100}%`})},v(e.idx),5)):f("",!0),(t(!0),o(m,null,b(e.data,(T,g)=>(t(),o("div",{key:g,class:"tbody-col",style:r({width:`${(l.columnFlex[g]||1)/u(D)*100}%`})},v(T),5))),128))],4))),128))],4)):f("",!0)],512))}});const $=R(P,[["__scopeId","data-v-750b28b5"]]),V=_(`<h1 id="scrolltable" tabindex="-1">ScrollTable <a class="header-anchor" href="#scrolltable" aria-hidden="true">#</a></h1><p>自动滚动的table组件。</p><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#B8A965;">scroll-table</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">style</span><span style="color:#CB7676;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">height: 140px;</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;font-style:italic;">:header=&quot;[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">船名航次</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">截关期/开船期</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">本航次集装箱数量（已发运数量）</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">铁路发运预计日期</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;font-style:italic;">]&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;font-style:italic;">:column-flex=&quot;[2,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">4,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">3,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;font-style:italic;">2]&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;font-style:italic;">:data=&quot;[[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">TRAYW 001SI/001NW</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2023-01-27 14:30:51/2023-01-29 14:30:51</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">50(45)</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2023-01-24 14:30:51</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#FDAEB7;font-style:italic;">],</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#FDAEB7;font-style:italic;">[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">TRAYW 001SI/001NW</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2023-01-27 14:30:51/2023-01-29 14:30:51</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">50(45)</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2023-01-24 14:30:51</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#FDAEB7;font-style:italic;">],[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">TRAYW 001SI/001NW</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2023-01-27 14:30:51/2023-01-29 14:30:51</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">50(45)</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2023-01-24 14:30:51</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#FDAEB7;font-style:italic;">],[</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">TRAYW 001SI/001NW</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2023-01-27 14:30:51/2023-01-29 14:30:51</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">50(45)</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">2023-01-24 14:30:51</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#FDAEB7;font-style:italic;">]]&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;font-style:italic;">:row-num=&quot;3&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;font-style:italic;">:show-idx=&quot;true&quot;</span></span>
<span class="line"><span style="color:#666666;">/&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#998418;">scroll-table</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">style</span><span style="color:#AB5959;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">height: 140px;</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;font-style:italic;">:header=&quot;[</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">船名航次</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">截关期/开船期</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">本航次集装箱数量（已发运数量）</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">铁路发运预计日期</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;font-style:italic;">]&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;font-style:italic;">:column-flex=&quot;[2,</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">4,</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">3,</span><span style="color:#393A34;"> </span><span style="color:#B31D28;font-style:italic;">2]&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;font-style:italic;">:data=&quot;[[</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">TRAYW 001SI/001NW</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2023-01-27 14:30:51/2023-01-29 14:30:51</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">50(45)</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2023-01-24 14:30:51</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B31D28;font-style:italic;">],</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B31D28;font-style:italic;">[</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">TRAYW 001SI/001NW</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2023-01-27 14:30:51/2023-01-29 14:30:51</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">50(45)</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2023-01-24 14:30:51</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B31D28;font-style:italic;">],[</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">TRAYW 001SI/001NW</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2023-01-27 14:30:51/2023-01-29 14:30:51</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">50(45)</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2023-01-24 14:30:51</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B31D28;font-style:italic;">],[</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">TRAYW 001SI/001NW</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2023-01-27 14:30:51/2023-01-29 14:30:51</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">50(45)</span><span style="color:#B5695999;">&#39;</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">2023-01-24 14:30:51</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B31D28;font-style:italic;">]]&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;font-style:italic;">:row-num=&quot;3&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;font-style:italic;">:show-idx=&quot;true&quot;</span></span>
<span class="line"><span style="color:#999999;">/&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),H=_('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>版本</th></tr></thead><tbody><tr><td><code>data</code></td><td>表单数据</td><td>object[]</td><td>[]</td><td></td></tr><tr><td><code>column-flex</code></td><td>每栏的flex值，序号列默认是1</td><td>number[]</td><td>[]</td><td></td></tr><tr><td><code>header</code></td><td>表头内容</td><td>string[]</td><td>[]</td><td></td></tr><tr><td><code>show-idx</code></td><td>是否展示排序</td><td>boolean</td><td>false</td><td></td></tr><tr><td><code>animation</code></td><td>是否滚动</td><td>boolean</td><td>true</td><td></td></tr><tr><td><code>duration</code></td><td>滚动动画间隔</td><td>number</td><td>3000</td><td></td></tr><tr><td><code>header-bg</code></td><td>header的背景色</td><td>string</td><td>#002c8a</td><td></td></tr><tr><td><code>odd-row-bg</code></td><td>单数行的背景</td><td>string</td><td>#010c32</td><td></td></tr><tr><td><code>even-row-bg</code></td><td>双数行的背景</td><td>string</td><td>#03184b</td><td></td></tr><tr><td><code>row-num</code></td><td>表单可以存放几行,其中包括了header一行</td><td>number</td><td>7</td><td></td></tr></tbody></table>',2),U=JSON.parse('{"title":"ScrollTable","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"relativePath":"components/scroll-table.md","lastUpdated":1678780972000}'),j={name:"components/scroll-table.md"},z=Object.assign(j,{setup(l){return(s,C)=>(t(),o("div",null,[V,k($,{style:{height:"140px"},header:["船名航次","截关期/开船期","本航次集装箱数量","预计日期"],"column-flex":[2,4,3,2],data:[["TRAYW 001SI/001NW","2023-01-27 14:30:51/2023-01-29 14:30:51","50(45)","2023-01-24 14:30:51"],["TRAYW 001SI/001NW","2023-01-27 14:30:51/2023-01-29 14:30:51","50(45)","2023-01-24 14:30:51"],["TRAYW 001SI/001NW","2023-01-27 14:30:51/2023-01-29 14:30:51","50(45)","2023-01-24 14:30:51"],["TRAYW 001SI/001NW","2023-01-27 14:30:51/2023-01-29 14:30:51","50(45)","2023-01-24 14:30:51"]],"row-num":3,"show-idx":!0},null,8,["data"]),H]))}});export{U as __pageData,z as default};

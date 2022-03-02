"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[36644],{80029:(n,s,a)=>{a.r(s),a.d(s,{default:()=>d});var e=a(66252);const t=(0,e.uE)('<p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。</p><h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子" aria-hidden="true">#</a> 简单的例子</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">EventNames</span> <span class="token operator">=</span> <span class="token string">&quot;click&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;scroll&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> Element<span class="token punctuation">,</span> event<span class="token operator">:</span> EventNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// do something</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;scroll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没问题</span>\n<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;dbclick&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错，event 不能为 &#39;dbclick&#39;</span>\n\n<span class="token comment">// index.ts(7,47): error TS2345: Argument of type &#39;&quot;dbclick&quot;&#39; is not assignable to parameter of type &#39;EventNames&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>上例中，我们使用 <code>type</code> 定了一个字符串字面量类型 <code>EventNames</code>，它只能取三种字符串中的一种。</p><p>注意，<strong>类型别名与字符串字面量类型都是使用 <code>type</code> 进行定义。</strong></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',6),p={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("Advanced Types # Type Aliases"),c=(0,e.Uk)("("),l={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("中文版"),i=(0,e.Uk)(")"),u={},d=(0,a(83744).Z)(u,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",p,[o,(0,e.Wm)(a)]),c,(0,e._)("a",l,[r,(0,e.Wm)(a)]),i])])],64)}]])},21653:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-6ed22e89",path:"/code/language/typescript/advanced/string-literal-types.html",title:"字符串字面量类型",lang:"zh-CN",frontmatter:{title:"字符串字面量类型",icon:"string",category:["TypeScript"],summary:"字符串字面量类型用来约束取值只能是某几个字符串中的一个。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/advanced/string-literal-types.html"}],["meta",{property:"og:title",content:"字符串字面量类型"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"<p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。</p>\n",headers:[{level:2,title:"简单的例子",slug:"简单的例子",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1591204114e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:.59,words:177},filePathRelative:"code/language/typescript/advanced/string-literal-types.md"}}}]);
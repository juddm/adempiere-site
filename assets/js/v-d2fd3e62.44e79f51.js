"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4379],{20799:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var r=i(78e3);const o=(0,r.uE)('<p>In implementing, developing or just understanding ADempiere there are always three sides of the story: the application (client&#39;s GUI), the database (tables and stuff) and the source code (all the Java files, etc.).</p><h2 id="project-management-in-adempiere" tabindex="-1"><a class="header-anchor" href="#project-management-in-adempiere" aria-hidden="true">#</a> Project Management in ADempiere</h2><p>In the application&#39;s functional Menu there is a separate &#39;master&#39; node called <strong>Project Management</strong>. This branch contains twelve predefined functionalities:</p><h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics" aria-hidden="true">#</a> The Basics</h2><p>In implementing, developing or just understanding ADempiere there are always three sides of the story: the application (client&#39;s GUI), the database (tables and stuff) and the source code (all the Java files, etc.).</p><h2 id="project-management-in-adempiere-1" tabindex="-1"><a class="header-anchor" href="#project-management-in-adempiere-1" aria-hidden="true">#</a> Project Management in ADempiere</h2><p>In the application&#39;s functional Menu there is a separate &#39;master&#39; node called Project Management. This branch contains twelve predefined functionalities:</p><ul><li><p>one Workflow</p><ul><li>Project Setup and Use - hows the necessary steps to configure a Project for use (this one is explained below).</li></ul></li><li><p>four Windows</p><ul><li>Project Type</li><li>Project</li><li>Project (Lines/Issues)</li><li>Project Reporting</li></ul></li><li><p>two Processes</p><ul><li>Generate PO from Project</li><li>Issue to Project</li></ul></li><li><p>five Reports</p><ul><li>Project Lines not Issued</li><li>Project POs not Issued</li><li>Project Margin (Work Order)</li><li>Project Cycle Report</li><li>Project Detail Accounting Report</li></ul></li></ul><p>As can be seen in the Project&#39;s workflow in order to use the main functionality (Project window) two preliminary features should be customized (Project Type and Project Reporting windows).</p><ul><li><strong>C_ProjectLine</strong></li><li><strong>C_ProjectPhase</strong></li><li><strong>C_ProjectTask</strong></li><li><strong>C_Project_Acct</strong></li></ul><p>The relationshps are represented in the diagram</p><ul><li><p><strong>C_ProjectIssue</strong></p></li><li><p><strong>C_Cycle</strong></p></li><li><p><strong>C_CycleStep</strong></p></li><li><p><strong>C_CyclePhase</strong></p></li><li><p><strong>C_ProjectType</strong></p></li><li><p><strong>C_Phase</strong></p></li><li><p><strong>C_Task</strong></p></li></ul>',12),n=(0,r.Uk)("(* All Entity Relationship Diagrams are made with "),a={href:"http://www.aquafold.com/",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("Aqua Data Studio"),l=(0,r.Uk)(")"),c=(0,r._)("h2",{id:"activities-defined-throughout-the-source-code",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#activities-defined-throughout-the-source-code","aria-hidden":"true"},"#"),(0,r.Uk)(" Activities defined throughout the source code")],-1),p=(0,r._)("p",null,"How the Projects functionality is dispersed into the bunch of ADempiere's subprojects?",-1),d={},h=(0,i(13860).Z)(d,[["render",function(e,t){const i=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[o,(0,r._)("p",null,[n,(0,r._)("a",a,[s,(0,r.Wm)(i)]),l]),c,p])}]])},84693:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-d2fd3e62","path":"/community/wiki/functional-howtos/how-projects-work.html","title":"How Projects Work","lang":"en-US","frontmatter":{"title":"How Projects Work","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Functional HOWTOs"],"article":false,"summary":"In implementing, developing or just understanding ADempiere there are always three sides of the story: the application (client\'s GUI), the database (tables and stuff) and the sourc","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/functional-howtos/how-projects-work.html"}],["meta",{"property":"og:title","content":"How Projects Work"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-09-22T20:39:47.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Functional HOWTOs"}],["meta",{"property":"article:modified_time","content":"2023-09-22T20:39:47.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Project Management in ADempiere","slug":"project-management-in-adempiere","children":[]},{"level":2,"title":"The Basics","slug":"the-basics","children":[]},{"level":2,"title":"Project Management in ADempiere","slug":"project-management-in-adempiere-1","children":[]},{"level":2,"title":"Activities defined throughout the source code","slug":"activities-defined-throughout-the-source-code","children":[]}],"git":{"createdTime":1695415187000,"updatedTime":1695415187000,"contributors":[{"name":"Jesús Albujas","email":"134967453+JesusAlbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.89,"words":267},"filePathRelative":"community/wiki/functional-howtos/how-projects-work.md","localizedDate":"September 22, 2023"}')}}]);
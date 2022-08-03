"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2666],{659:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var a=i(8e3);const r=[(0,a.uE)('<h2 id="business-processes" tabindex="-1"><a class="header-anchor" href="#business-processes" aria-hidden="true">#</a> Business Processes</h2><ul><li>Product Cost</li><li>Product Manufacture</li><li>Product Account</li></ul><h3 id="sales-processes" tabindex="-1"><a class="header-anchor" href="#sales-processes" aria-hidden="true">#</a> Sales Processes.</h3><ul><li>Raising a quotation or proposal</li><li>Recording orders</li><li>Sending the goods or performing the services</li><li>Invoicing the customer <img src="https://user-images.githubusercontent.com/89487449/178346738-94e55508-4f6e-4052-9d55-4538278d6d97.png" alt="image"></li></ul><h3 id="purchase-processes" tabindex="-1"><a class="header-anchor" href="#purchase-processes" aria-hidden="true">#</a> Purchase Processes</h3><ul><li>Raising a purchase requisition from a catalogue</li><li>Issuing a purchase order</li><li>Receiving goods and services</li><li>Receiving supplier invoices.</li><li>Paying Suppliers &amp; Collecting Debts <img src="https://user-images.githubusercontent.com/89487449/178349327-7a1b57bf-16f9-40f7-839d-e9123d5ec26f.png" alt="image"></li></ul><h3 id="inventory-processes" tabindex="-1"><a class="header-anchor" href="#inventory-processes" aria-hidden="true">#</a> Inventory Processes</h3><ul><li>Tracking inventory</li><li>Replenishing warehouses</li><li>Multiple warehouse sites and locators</li><li>Stock movements</li><li>Shipping <img src="https://user-images.githubusercontent.com/89487449/178350265-de5d763a-86e2-4da1-aad3-22c7d8ebb700.png" alt="image"></li></ul><h3 id="accounting-processes" tabindex="-1"><a class="header-anchor" href="#accounting-processes" aria-hidden="true">#</a> Accounting Processes</h3><ul><li>Period and year end</li><li>Financial and management accounting</li><li>Charts of accounts</li><li>VAT/TAX/IVA</li><li>Reporting for other regulatory bodies <img src="https://user-images.githubusercontent.com/89487449/178353973-baaf9d2a-d6b4-42be-b767-d66d515c5f7a.png" alt="image"></li></ul><h2 id="on-line-historical-information" tabindex="-1"><a class="header-anchor" href="#on-line-historical-information" aria-hidden="true">#</a> On-line historical information</h2><ul><li>Many Calendars can be created for reporting purposes and the periods within those Calendars are defined with a start date and an end date of the users choosing.</li><li>Information is also captured for all changes to static information recording the date and time of the change as well as the ID of the user who created and updated the record.</li><li><strong>ADempiere stores all information and transactions entered into the system for as long as the user organisation chooses.</strong></li><li>There is no concept of an &quot;end of year&quot; and purging process.</li><li>Calendars are established for reporting and period access control purposes only.</li><li>Historical information is maintained for as long as is desired and is able to be reported on using the calendar function.</li></ul><h2 id="reporting" tabindex="-1"><a class="header-anchor" href="#reporting" aria-hidden="true">#</a> Reporting</h2><div class="custom-container tip"><p class="custom-container-title">Tips</p><pre><code>ADempiere provides comprehensive reporting capabilities.\n</code></pre></div><h3 id="smart-reporting" tabindex="-1"><a class="header-anchor" href="#smart-reporting" aria-hidden="true">#</a> Smart Reporting</h3><ul><li><strong>For most applications, reporting is a separate or add-on entity. ADempiere&#39;s reporting is based on the data dictionary.</strong><ul><li>As the report viewer has access to the definitions, this allows drill-down to any entity referenced and drill-across to entities where the reported entity is used.</li><li>The links are automatically generated, while ensuring adherence to security and access definitions.</li></ul></li><li><strong>The report viewer provides for the selection of data, sequencing, grouping, totalling and display formatting.</strong><ul><li>Reporting output can be viewed on screen before sending it to a printer, an email or fax address or generating files in many different formats (e.g. Excel text formats, HTML, XML, PDF and Postscript).</li></ul></li></ul><h3 id="business-views" tabindex="-1"><a class="header-anchor" href="#business-views" aria-hidden="true">#</a> Business Views</h3><ul><li>Business Views are designed for end users and allow information to be accessed using standard SQL based tools without the need to create SQL table joins.</li><li>The majority of Business Views are generated based on the Application Dictionary.</li></ul><h3 id="drill-down-and-drill-across" tabindex="-1"><a class="header-anchor" href="#drill-down-and-drill-across" aria-hidden="true">#</a> Drill-down and Drill-across</h3><ul><li><strong>All reporting output allows users to drill-down or drill-across to any entity referenced within the context of the report.</strong></li><li><strong>When using drill-down, a new report is generated based on the entity selected.</strong><ul><li>In an Order report, for example, the user can drill-down to generate a report showing the order lines that make up the order.</li><li><strong>The user can identify the drill-across entity (order lines) and then click on the product name to display a separate report of order lines for the particular product selected.</strong></li></ul></li><li><strong>Following the Web-UI convention, users can drill-down to any blue underlined entity displayed on the report screen.</strong></li><li><strong>Drill-across allows the user create a new report about a related entity on a report. For example, in a Product report the user may wish to see order lines for a particular product.</strong></li></ul><h3 id="report-types" tabindex="-1"><a class="header-anchor" href="#report-types" aria-hidden="true">#</a> Report types</h3><ol><li><p>Lists - are based on Window information. Users can generate a report for every window in the system including Windows containing new user defined fields and tables. The reports can be modified to specify which fields are to be displayed, in which orderand how they are to be grouped. The report can calculate minimum, maximum, sum, count, standard deviation and variance for selected columns.</p></li><li><p>Reports - are usually based on summarised information and are based on Report Views. Reports allow the definition of what information is to appear in rows and what is to appear in columns, the combination of a rowset definition and a column set definition determines the report content.</p></li></ol><h3 id="third-party-reporting-tools" tabindex="-1"><a class="header-anchor" href="#third-party-reporting-tools" aria-hidden="true">#</a> Third Party Reporting Tools</h3><p>Third party tools such as Jasper Reports; a Java based equivalent of Crystal Reports, can also be used to create reports if needed. The present release of Adempiere already has JasperReports substantially integrated to its reporting engine.</p><h3 id="customising-reports" tabindex="-1"><a class="header-anchor" href="#customising-reports" aria-hidden="true">#</a> Customising Reports</h3><p><strong>ADempiere differentiates the &#39;view&#39; from the &#39;model&#39;. With the exception of Report Views, the model is usually given. If you provide a SQL Select statement a Report View can be created, the user doesn&#39;t need to resolve foreign key references (which require the knowledge of the data model) or worry about data security, as ADempiere resolves these issues for the user. This allows the writing of &#39;simple&#39; statements. Few people agree on how each report should look. ADempiere allows the user to define the format of any report at the System, Client, Organisation or User level:</strong></p><ul><li>Report columns</li><li>Column order</li><li>Report sorting</li><li>Column heading</li><li>Sums (for numeric columns)</li><li>Grouping</li><li>Pie Chart</li><li>Bar/Line Chart</li></ul><p><strong>Data selection is via Report Parameters when initiating the report, or via Query, allowing the user to enter criteria in an enhanced &#39;query by example&#39; style.</strong></p><h2 id="data-and-meta-data" tabindex="-1"><a class="header-anchor" href="#data-and-meta-data" aria-hidden="true">#</a> Data and meta-data</h2><p><strong>Programmers of many applications that do not use the sophistication of an Active Data Dictionary need to design, code and test every screen. ADempiere uses the more advanced concept of a central active data dictionary, also called information repository. ADempiere&#39;s active data dictionary is at the meta-data layer, and knows how to access data and how data is related.</strong></p><ul><li><p><strong>The data dictionary contains:</strong></p><ul><li>Definitions of a data entity (type, validation, etc.)</li><li>Method of display (label on screens and reports, help, display sequence and position relative to other fields)</li><li>Display rules</li><li>Security and access rules</li></ul></li><li><p><strong>The data dictionary is &#39;active&#39;, meaning it is used at runtime and is context sensitive. For example: it &#39;knows&#39; that an over-the-counter sale does not have a payment term and does not display it. However if you change the transaction type to a standard order, a payment term becomes a mandatory part of the transaction.</strong></p></li><li><p><strong>The Active Data Dictionary is user-extensible and can include user specified rules and information. The extensibility of the Active Data Dictionary simplifies user extensions to the application since much of what would otherwise have to be coded by programmers can be created by a knowledgeable and authorised users (with System privilege) from within the application</strong></p></li></ul><h2 id="supportability" tabindex="-1"><a class="header-anchor" href="#supportability" aria-hidden="true">#</a> Supportability</h2><p><strong>Software Support represents a substantial portion of the lifetime costs of any complex system. A flexible, modular architecture is essential for ensuring:</strong></p><ul><li>Understandability</li><li>Modifiability</li><li>Interoperability</li><li>Reusability</li><li>Expandability</li><li>Portability</li></ul><p>all of which are necessary for software that can be supported in an efficient and cost effective manner. Many problems associated with software support can be traced to deficiencies in the way the original software product was designed. Lack of attention to the design of modular software architectures during development can cause excessive software support problems and costs. ADempiere is designed to be as flexible as possible and to accommodate change. Unless the system architecture allows for change, modifications to the software are likely to be difficult and defect-prone. ADempiere&#39;s software architecture carefully addresses abstraction, encapsulation, and information hiding to minimize dependencies. By maximising use of object-oriented design, the software can be easily modified. ADempiere&#39;s Active Data Dictionary ensures that software support can be simplified by ensuring that changes are made in one location with a consistent impact throughout the whole of the application. Additionally, ADempiere uses no third-party toolsets which may become unsupported due to lack of interest by their respective vendors. Other than for the Oracle database itself, source code for all aspects of the system is open and available ensuring that the user community will always be able to provide support for all aspects of the system.</p>',35)],s={},o=(0,i(3860).Z)(s,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)("div",null,r)}]])},9445:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-ca5689ce","path":"/product/","title":"ADempiere Features","lang":"en-US","frontmatter":{"title":"ADempiere Features","category":["Product"],"star":9,"sticky":9,"tag":["Sales","Purchase","Inventory","Accounting"],"article":false,"summary":"Business Processes Product Cost; Product Manufacture; Product Account; Sales Processes. Raising a quotation or proposal; Recording orders; Sending the goods or performing the servi","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/product/"}],["meta",{"property":"og:site_name","content":"ADempiere Official Page"}],["meta",{"property":"og:title","content":"ADempiere Features"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-03T16:26:19.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Sales"}],["meta",{"property":"article:tag","content":"Purchase"}],["meta",{"property":"article:tag","content":"Inventory"}],["meta",{"property":"article:tag","content":"Accounting"}],["meta",{"property":"article:modified_time","content":"2022-08-03T16:26:19.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Business Processes","slug":"business-processes","children":[{"level":3,"title":"Sales Processes.","slug":"sales-processes","children":[]},{"level":3,"title":"Purchase Processes","slug":"purchase-processes","children":[]},{"level":3,"title":"Inventory Processes","slug":"inventory-processes","children":[]},{"level":3,"title":"Accounting Processes","slug":"accounting-processes","children":[]}]},{"level":2,"title":"On-line historical information","slug":"on-line-historical-information","children":[]},{"level":2,"title":"Reporting","slug":"reporting","children":[{"level":3,"title":"Smart Reporting","slug":"smart-reporting","children":[]},{"level":3,"title":"Business Views","slug":"business-views","children":[]},{"level":3,"title":"Drill-down and Drill-across","slug":"drill-down-and-drill-across","children":[]},{"level":3,"title":"Report types","slug":"report-types","children":[]},{"level":3,"title":"Third Party Reporting Tools","slug":"third-party-reporting-tools","children":[]},{"level":3,"title":"Customising Reports","slug":"customising-reports","children":[]}]},{"level":2,"title":"Data and meta-data","slug":"data-and-meta-data","children":[]},{"level":2,"title":"Supportability","slug":"supportability","children":[]}],"git":{"createdTime":1656452129000,"updatedTime":1659543979000,"contributors":[{"name":"Yamel Senih","email":"ysenih@erpya.com","commits":5},{"name":"RamiroV13","email":"89487449+RamiroV13@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":4.37,"words":1310},"filePathRelative":"product/README.md","localizedDate":"June 28, 2022"}')}}]);
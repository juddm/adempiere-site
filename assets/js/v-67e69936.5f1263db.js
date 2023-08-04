"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[206],{4142:(e,i,l)=>{l.r(i),l.d(i,{default:()=>u});var t=l(8e3);const a=(0,t.uE)('<p>ADempiere Release 390 was released on August 1st 2017.</p><h2 id="summary-of-functionality-included-in-adempiere-3-9-0" tabindex="-1"><a class="header-anchor" href="#summary-of-functionality-included-in-adempiere-3-9-0" aria-hidden="true">#</a> Summary of functionality included in ADempiere 3.9.0</h2><p>The functionality described below is the effort of more than two-and-a-half years of development and testing.</p><h2 id="zk-user-interface-look-feel" tabindex="-1"><a class="header-anchor" href="#zk-user-interface-look-feel" aria-hidden="true">#</a> ZK User Interface Look &amp; Feel</h2><ul><li>Totally new look-and-feel style design</li><li>New simplified icons</li><li>New ADempiere logo</li><li>Modernize ZK User Interface appearance, making it more similar to world ERP main players</li><li>Goal: flat, minimalist, header blue, sky blue drops, two grays</li><li>Characters more readable</li><li>Change black letters to gray</li><li>Eliminate Degradé</li><li>Eliminate double headers of blue</li><li>Shrink strap logo</li><li>Eliminate blue cell lines</li><li>Change icons to be more readable -Grids: gray and white alternating in rows</li><li>Change colors in login portal</li><li>Improved Menu Favorite Items with user-definable folder structure</li><li>Document Status Indicators added to Dashboard</li><li>Display Recent Items worked on by the logged in User and Role</li><li>Display favorite documents</li><li>Change Role functionality for changing role without logging in anew</li></ul><h2 id="pos" tabindex="-1"><a class="header-anchor" href="#pos" aria-hidden="true">#</a> POS</h2>',6),n=(0,t.Uk)("Development of a totally new POS based on "),r={href:"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("MVC"),s=(0,t.Uk)(' "Model View Controller" requirements'),d=(0,t.uE)("<li>POS fully integrated to ADempiere</li><li>POS functional on both KZ and Swing</li><li>Each POS station highly configurable</li><li>Supported input devices <ul><li>Keyboard</li><li>Touchscreen</li><li>Mouse</li></ul></li><li>Access control for <ul><li>Changing prices</li><li>Allowing discounts</li><li>Returning materials.</li></ul></li><li>Configurable to allow selected actions only executable by the supervisor</li><li>Configurable to set time limit for execution of selected actions</li><li>Supports standard ADempiere order and payment types <ul><li>Credit Orders</li><li>Standard Orders</li><li>Return of material</li><li>Credit Notes</li><li>Quotes</li><li>Cash return</li><li>Prepayments</li><li>Partial Payments</li></ul></li><li>Payment of the POS invoice can be a combination of different tender types <ul><li>Cash</li><li>Check</li><li>Credit card</li><li>Credit note</li></ul></li><li>Supports different Units of measure in the POS</li><li>Selectable Products with image and text in quick-access menus</li><li>Product kits</li><li>Smart look-up when searching for products and Business Partners</li><li>Cancellation of Orders (even of a whole POS Order, including Material issue and Payment)</li><li>Change of Business Partner will change the prices and discounts of existing order lines, to price list of the new Business Partner.</li><li>Intelligent buttons: buttons are enabled only when the semantic context allows it</li><li>Find old Sales Orders either for payment(s) or for review</li><li>Find old Sales Orders from the Invoice document number</li><li>POS can be treated as a bank account allowing for cash reports as ADempiere bank statements.</li><li>Displaying of old Orders - including orders that were not POS orders (for example to revert or return material).</li><li>Refactoring of java classes to true MVC so different UIs can be integrated easily</li><li>POS Closing for end of day or new operator.</li><li>ServerSocket and additional classes for additional Printing, Display and Drawer</li><li>Creation of Business Partner in the POS</li>",24),c=(0,t.uE)('<h2 id="production-light" tabindex="-1"><a class="header-anchor" href="#production-light" aria-hidden="true">#</a> Production Light</h2><ul><li>Integration to ADempiere <ul><li>Uses ADempiere BOMs and BOM lines (one Product with multiple BOMs)</li><li>Costing for Production integrated (process “CostDetail”), including deferred transactions</li><li>Production is now an ADempiere document with Document actions and Document status</li><li>Reversal of Production document including Storage adjustments</li><li>Product Reservation and Release as with other ADempiere documents</li><li>Inclusion of Attribute Set Instances</li><li>Order Batch as &quot;Production Order&quot;</li><li>Multiple partial or a single complete batch is handled</li><li>Simplified MRP Planning for next 20 weeks for Production and Purchase Ordering</li><li>Error correction in production quantity calculation due to rounding</li></ul></li></ul><h2 id="financial-reports" tabindex="-1"><a class="header-anchor" href="#financial-reports" aria-hidden="true">#</a> Financial Reports</h2><ul><li>Report lines enhanced <ul><li>Overline stroke (dashed, dotted, solid, double dashed, double dotted, double solid)</li><li>Underline stroke (dashed, dotted, solid, double dashed, double dotted, double solid)</li><li>Shows ‘Actual to Budget’ Variance calculations with correct sign</li><li>Blank lines to allow improved layout</li></ul></li><li>Report columns enhanced <ul><li>Shows values with opposite sign</li><li>Added “Report Source” to add filters to columns</li></ul></li><li>Header Print Format that ‘includes’ the standard report displaying context variables</li><li>Indentation of account report lines</li><li>Export to xlsx format</li><li>Utilization of streams display “Y” or “N” instead of ‘tick’ and ‘cross’ icons in report lines (configurable)</li><li>Trial Balance Drillable Report (drillable down to the document that causes the entry)</li><li>Lots of fixes and enhancements</li></ul><h2 id="human-resources" tabindex="-1"><a class="header-anchor" href="#human-resources" aria-hidden="true">#</a> Human Resources</h2><ul><li>Enhanced and improved configuration</li><li>Improved Concepts and usage</li><li>Improved Employee Dependents</li><li>Improved Attribute Window</li><li>Thorough Accounting integration</li><li>Better synchronization with Business Partner</li><li>Email to employees</li><li>New Importer for Employee , create Department , Jobs , Employee Type , Skill Type while process to import.</li></ul><h2 id="payroll" tabindex="-1"><a class="header-anchor" href="#payroll" aria-hidden="true">#</a> Payroll</h2><ul><li><p>Smart Browsers to improve usability</p></li><li><p>Support of JSR 223 Scripting APIs for Payroll Rules</p></li><li><p>New approach to import payroll movement</p></li><li><p>Re-engineered transaction management for calculating payroll process yielding faster execution time.</p></li><li><p>Generate invoice from payroll process.</p></li><li><p>Now the importer for Employee Attribute support text, date , and reference no</p></li><li><p>New reports (salary change, employee dependents, employee detail, bank account detail, etc.)</p></li><li><p>Generation of additional periods for payments twice a month</p></li><li><p>Enhanced rules, methods, processes</p></li><li><p>Payroll concept increased functionality</p></li><li><p>Smart Browser for Payroll Concept generation</p></li><li><p>Include movements in payroll process</p></li><li><p>Add Stop values for payroll process</p><ul><li>Concept</li><li>Employee</li><li>Payroll Process</li></ul></li><li><p>Add new selection criteria for concept on payroll process engine</p><ul><li>Payroll</li><li>Department</li><li>Job</li><li>Job Type</li><li>Skill Type</li><li>Employee Status</li><li>Project</li><li>Activity</li><li>Organization of Transaction</li><li>Employee Type</li><li>Job Education</li><li>Career Level</li><li>Race</li><li>Degree</li><li>Designation</li><li>Salary Structure</li><li>Salary Range</li><li>Work Group</li><li>Shift Group</li></ul></li><li><p>Improved for accounting fact on process payroll</p></li><li><p>Integration with commission calculation for sales representative employee</p></li></ul><h2 id="cost-engine" tabindex="-1"><a class="header-anchor" href="#cost-engine" aria-hidden="true">#</a> Cost Engine</h2><ul><li>Error fixing</li><li>Update costing fixed</li><li>Average Invoice and Landed Costs corrected (<strong>it works finally in ADempiere</strong>)</li><li>Include Resource costs in Production Light</li></ul><h2 id="commissions" tabindex="-1"><a class="header-anchor" href="#commissions" aria-hidden="true">#</a> Commissions</h2><ul><li>Commission definition for more than one Sales Representative</li><li>Commission definition also for <ul><li>Business Partner</li><li>Business Partner Group</li><li>Product, Product Category, Product Group, Product Classification…</li><li>Sales Region, Project, Campaign, Channel..</li></ul></li><li>Define commission also for partial payments</li><li>Commission calculable until last payment done</li><li>Now Commission is an ADempiere document (becoming more secure and manageable)</li><li>Simulation of Commission Runs</li><li>Prepare action re-calculates commission. Calculated commission can be - modified by user in charge; once done that, the commission document can be completed and thus become invariable.</li><li>Flag for avoiding commission recalculation once Commission has been corrected</li><li>Commission depending on provider</li><li>Include management of Material Returns</li><li>Include management of Payment voiding. In this case, the commission is reverted.</li><li>Avoiding double calculations during Commission Calculation integration to Human Resources/Payroll</li><li>Grouping of Commissions</li><li>Executing Commission Runs either on Commissions or on Commission Groups</li><li>Documentation of Commission Runs by explaining every step done and its results</li><li>An explanatory Commission Detail</li><li>Improve database views on commission</li><li>Improve Run Commission Detail report</li><li>New commission sales representative summary report</li><li>Allow definition of commission amount definition also as percentage (up to now, only decimal commission was possible)</li><li>Save commission calculation in every Commission Detail</li><li>Clean up code</li></ul><h2 id="smart-browser-improvements" tabindex="-1"><a class="header-anchor" href="#smart-browser-improvements" aria-hidden="true">#</a> Smart Browser Improvements</h2><ul><li>Fully MVC</li><li>Allows for editing fields inside selected lines (these changes are available to an eventual process called by the Smart Browser)</li><li>Callouts programmable for changing values inside the selected fields. this means, this automatic changes are available to an eventual process called in the Smart Browser. Similar to callout in fields.</li><li>Include parameter validation</li><li>Improved query loading, filtering</li><li>Default values can be gotten from SQL</li><li>Full working access to context variables (also from parent windows)</li><li>Better info messages</li><li>Added support as SAAS Module</li><li>Collapsible Process panel</li></ul><h2 id="additional-smart-browsers" tabindex="-1"><a class="header-anchor" href="#additional-smart-browsers" aria-hidden="true">#</a> Additional Smart Browsers</h2><ul><li>Massive execution of Order actions (Prepare, Complete, Void, Close)</li><li>Massive generation of Shipments based on Order lines</li><li>Massive generation of Invoices based on Order lines</li><li>Create Payroll Concepts in HR</li><li>Withdrawal by Tender Type in POS</li><li>Closes the statement for POS Terminals</li><li>Shows the employee history movements for a payroll process</li><li>Material Receipt Distribution Order</li><li>Generates Movement from Distribution Order</li><li>Selects the Demand Order to generate an Outbound Order.</li><li>Selects the Outbound Order Lines ready to be to delivery.</li></ul><h2 id="replacement-of-views-by-smart-browsers" tabindex="-1"><a class="header-anchor" href="#replacement-of-views-by-smart-browsers" aria-hidden="true">#</a> Replacement of Views by Smart Browsers</h2><ul><li>Material Receipt create from: Order / RMA / Invoice</li><li>Invoice create from: Order / RMA / Invoice / Receipt</li><li>Invoice create from: Payment Selection lines (this is a different Smart Browser)</li><li>Payment Selection create from: Order</li><li>Payment Selection Lines create from: Invoice</li><li>Payment Selection lines create from: Payment Request</li><li>Bank Statement Create From Payments</li><li>Payment Selection lines create from: HR Movements</li><li>Process Parameters create from: Process or columns of Report View</li></ul><h2 id="translation" tabindex="-1"><a class="header-anchor" href="#translation" aria-hidden="true">#</a> Translation</h2><ul><li>Complete Translation into Spanish MX</li><li>Preparation for other Spanish languages</li></ul><h2 id="warehouse-management" tabindex="-1"><a class="header-anchor" href="#warehouse-management" aria-hidden="true">#</a> Warehouse Management</h2><ul><li>Improve Warehouse Management Outbound process</li><li>Change collection class replace to List , refectory method name and variables based on ADempiere Best Practices</li></ul><h2 id="express-material-receipt" tabindex="-1"><a class="header-anchor" href="#express-material-receipt" aria-hidden="true">#</a> Express Material Receipt</h2><ul><li>Consolidate Material Receipt using PO Reference</li><li>Fast Material reception entry using barcode and lot and serial #</li><li>ZK Scan bar code for Material Receipts , Shipment , Movement , Physical Inventory</li></ul><h2 id="inventory-transaction" tabindex="-1"><a class="header-anchor" href="#inventory-transaction" aria-hidden="true">#</a> Inventory transaction</h2><ul><li>Applies for Material Receipt , Shipment , Physical Inventory and Inventory Movement</li><li>Improves to Inventory Transaction based in bar code entry and lot or serial #</li><li>New form to generate inventory transaction using scan barcode and lot or serial #</li></ul><h2 id="freight-calculation" tabindex="-1"><a class="header-anchor" href="#freight-calculation" aria-hidden="true">#</a> Freight Calculation</h2><ul><li>Add support to calculated freight for Sales Order, Distribution Order and Outbound Orden</li><li>Add Shipper , Freight Category , Freight Cost Rule , Freight Amt in WMS</li></ul><h2 id="fleet-management" tabindex="-1"><a class="header-anchor" href="#fleet-management" aria-hidden="true">#</a> Fleet Management</h2><ul><li>Capabilities to include the management of fleet resources (driver, power, equipment, etc) involved in fulfilling orders and shipments.</li><li>Asset lifecycle management</li><li>Driver hire, education, scheduling, and payroll</li><li>Order capture and Customer Relationship Management</li><li>Fleet planning – consolidation, fleet versus common-carrier trade-offs, multi-leg, multi-mode Driver and equipment assignment, and utilization</li><li>Asset tracking</li><li>Vehicle Licensing/ Regulatory compliance</li><li>Asset inventory management at asset pool locations</li><li>Driver dispatch, mobile communications, tracking</li><li>Costing – fleet, external service providers, special services, accessorials</li><li>Payables – driver pay, independent contractors and external service providers</li><li>Billables – bill customers for service, asset usage</li><li>Cost accruals and revenue recognition</li></ul><h2 id="budget-management" tabindex="-1"><a class="header-anchor" href="#budget-management" aria-hidden="true">#</a> Budget Management</h2><ul><li>Add importer for Budget</li><li>Budget Entry Movement</li></ul><h2 id="request-management" tabindex="-1"><a class="header-anchor" href="#request-management" aria-hidden="true">#</a> Request management</h2><ul><li>Add project , project , phase project task</li><li>Add the Manufacturing Order reference</li><li>Add the Cost Collector reference</li><li>Add the Distribution Order and lines reference</li></ul><h2 id="payments" tabindex="-1"><a class="header-anchor" href="#payments" aria-hidden="true">#</a> Payments</h2><ul><li>Improved Payment process (Payments, Allocations, Bank Statements, Payment Selection)</li><li>Add Payment Request from Order (Prepay), Invoice and Payroll Movement.</li><li>Integration of Standard Payment Selection with Payroll movements (You can generate a payment selection from payroll process).</li><li>Add document action for payment selection (Now it can Process, Complete and reversed).</li></ul><h2 id="reporting" tabindex="-1"><a class="header-anchor" href="#reporting" aria-hidden="true">#</a> Reporting</h2><ul><li>Print format is configured by default in document type</li><li>Add default summary for print formats</li><li>Different report views with the same report possible</li><li>Re-query on report (It allow relaunch the process parameters from any report)</li><li>Fix Create a dynamic report for a different company , now a dynamic report is created with company prefix</li><li>Saving and naming parameter configuration to be called repeatedly</li><li>PDF Jasper report now can be included to send email</li><li>Format elements with display logic, format pattern, barcode type</li></ul><h2 id="miscellaneous-functionality" tabindex="-1"><a class="header-anchor" href="#miscellaneous-functionality" aria-hidden="true">#</a> Miscellaneous functionality</h2><ul><li>Hundreds of errors fixed</li><li>Improved Migration Process</li><li>Revamping of Forms, Info Windows in both Swing and ZK</li><li>Overhaul of grid functionality</li><li>EMail configuration by user (configuration of different servers for users)</li><li>Windows and Forms displayed in &quot;Modal&quot; form</li><li>Improved handling of process parameters</li><li>Improved MRP and DRP in Complex Production</li><li>Implementation of Command pattern to execute process action</li><li>Replication improvements</li><li>Workflow Manufacturing Editor now also in ZK</li><li>Support to calculated freight for Sales Order, Distribution Order and Outbound Order</li><li>Drop Shipment in Distribution Order</li><li>Display logic on Print Item</li><li>New report Open Items to date</li><li>Two additional dimensions in Accounting (User3 and User4)</li><li>Allow copy functionality revamped</li><li>Improved Payment allocation</li><li>Improved Print Engine</li><li>Create Inventory Count List also depending on Vendor</li><li>Budget Management Functionality</li><li>Improvements and corrections in Trial Balance</li><li>Promotions: allowing definition of gifts</li><li>Drill down in accounting reports (HTML format): navigation to the causing entry possible.</li><li>Many handy enhancements.</li></ul><h2 id="miscellaneous" tabindex="-1"><a class="header-anchor" href="#miscellaneous" aria-hidden="true">#</a> Miscellaneous</h2><ul><li>Java 1.8 and backward compatibility</li><li>Integration of Tomcat to ADempiere</li><li>Compatibility with Postgres &gt;= 9.1</li><li>Maintaining Oracle compatibility</li><li>Basic Refactoring (object naming, exception propagation, avoiding NPEs, removal of redundant and unused code, partial reorganization of code according to processes, changing code to MVC in selected areas)</li><li>Improved Garden World data for testing</li><li>Extensively code correction to best practices</li><li>New ADempiere theme for a fresher view</li><li>Order tab for process parameters</li><li>Order tab for window tabs</li><li>Updated POI, Jasper, Groovy, BeanShell libraries</li><li>Added Sahi Test Framework to main project repository</li><li>Export to XLSX format</li><li>Updated Intellij usage</li><li>Fix Local File Inclusion vulnerability</li><li>64-bit compliance</li><li>Development now fully integrated to Git</li><li>ZK buttons now in ADempiere standard</li><li>Introduction of ProcessBuilder</li><li>Standard constructor to classes missing it</li><li>Clean-up Application Dictionary</li><li>Add support to mariaDB connection</li><li>Scala settings for IntelliJ</li><li>Update Eclipse settings</li><li>Improvements on SmallViewController</li><li>Improved Class Generation</li><li>Email Authentication implemented</li><li>Added “Document” attribute for tables: <ul><li>The columns Document No, Document Action, Document Status, Processed, Approved and Description are automatically created.</li><li>Process for Document Action is created.</li><li>Workflow and nodes for processing document is created.</li><li>M class with default workflow logic is created automatically when model class is generated.</li></ul></li><li>POSterita removed</li></ul>',42),m={},u=(0,l(3860).Z)(m,[["render",function(e,i){const l=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[a,(0,t._)("ul",null,[(0,t._)("li",null,[n,(0,t._)("a",r,[o,(0,t.Wm)(l)]),s]),d]),c])}]])},6494:(e,i,l)=>{l.r(i),l.d(i,{data:()=>t});const t=JSON.parse('{"key":"v-67e69936","path":"/community/wiki/preface/release_390.html","title":"Release 390","lang":"en-US","frontmatter":{"title":"Release 390","category":["Community"],"star":9,"sticky":9,"tag":["Preface","Community"],"article":false,"summary":"ADempiere Release 390 was released on August 1st 2017. Summary of functionality included in ADempiere 3.9.0 The functionality described below is the effort of more than two-and-a-h","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/preface/release_390.html"}],["meta",{"property":"og:title","content":"Release 390"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-04T19:42:13.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Preface"}],["meta",{"property":"article:tag","content":"Community"}],["meta",{"property":"article:modified_time","content":"2023-08-04T19:42:13.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Summary of functionality included in ADempiere 3.9.0","slug":"summary-of-functionality-included-in-adempiere-3-9-0","children":[]},{"level":2,"title":"ZK User Interface Look & Feel","slug":"zk-user-interface-look-feel","children":[]},{"level":2,"title":"POS","slug":"pos","children":[]},{"level":2,"title":"Production Light","slug":"production-light","children":[]},{"level":2,"title":"Financial Reports","slug":"financial-reports","children":[]},{"level":2,"title":"Human Resources","slug":"human-resources","children":[]},{"level":2,"title":"Payroll","slug":"payroll","children":[]},{"level":2,"title":"Cost Engine","slug":"cost-engine","children":[]},{"level":2,"title":"Commissions","slug":"commissions","children":[]},{"level":2,"title":"Smart Browser Improvements","slug":"smart-browser-improvements","children":[]},{"level":2,"title":"Additional Smart Browsers","slug":"additional-smart-browsers","children":[]},{"level":2,"title":"Replacement of Views by Smart Browsers","slug":"replacement-of-views-by-smart-browsers","children":[]},{"level":2,"title":"Translation","slug":"translation","children":[]},{"level":2,"title":"Warehouse Management","slug":"warehouse-management","children":[]},{"level":2,"title":"Express Material Receipt","slug":"express-material-receipt","children":[]},{"level":2,"title":"Inventory transaction","slug":"inventory-transaction","children":[]},{"level":2,"title":"Freight Calculation","slug":"freight-calculation","children":[]},{"level":2,"title":"Fleet Management","slug":"fleet-management","children":[]},{"level":2,"title":"Budget Management","slug":"budget-management","children":[]},{"level":2,"title":"Request management","slug":"request-management","children":[]},{"level":2,"title":"Payments","slug":"payments","children":[]},{"level":2,"title":"Reporting","slug":"reporting","children":[]},{"level":2,"title":"Miscellaneous functionality","slug":"miscellaneous-functionality","children":[]},{"level":2,"title":"Miscellaneous","slug":"miscellaneous","children":[]}],"git":{"createdTime":1691178133000,"updatedTime":1691178133000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.96,"words":2087},"filePathRelative":"community/wiki/preface/release_390.md","localizedDate":"August 4, 2023"}')}}]);
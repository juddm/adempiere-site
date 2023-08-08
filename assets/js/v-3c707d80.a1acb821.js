"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5780],{105:(e,i,n)=>{n.r(i),n.d(i,{default:()=>P});var t=n(8e3);const l=(0,t._)("p",null,"When a new release or update has been published, the Windows installers need to be generated to use the published binaries. This page describes how to do so. The windows installer is intended to give the a new user as simple and install experience as possible. It is not intended for production use.",-1),s=(0,t._)("h2",{id:"preparing-to-generate-the-installers",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#preparing-to-generate-the-installers","aria-hidden":"true"},"#"),(0,t.Uk)(" Preparing to generate the installers")],-1),a=(0,t.Uk)("The code to generate the installers is in the ADempiere repository under the name "),r={href:"https://github.com/adempiere/adempiereInstaller",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("adempiereInstaller"),o=(0,t.Uk)("."),u=(0,t._)("p",null,"Clone or download this repository to you local computer. You can work with the files directly or, for convenience, add the clone as a project in you development environment.",-1),h=(0,t.Uk)("The scripts are based on the NSIS (Nullsoft Scriptable Install System, "),c={href:"http://nsis.sourceforge.net",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("http://nsis.sourceforge.net"),g=(0,t.Uk)("). and you will need this software installed on your local computer. The scripts are based on the NSIS version 3.0b2."),f=(0,t._)("p",null,"The following NSIS plugins are required and must be installed:",-1),m={href:"http://nsis.sourceforge.net/ExecDos_plug-in",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("ExecDos"),b={href:"http://nsis.sourceforge.net/ShellLink_plug-in",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("ShellLink"),w={href:"http://nsis.sourceforge.net/ZipDLL_plug-in",target:"_blank",rel:"noopener noreferrer"},A=(0,t.Uk)("ZipDLL"),q={href:"http://nsis.sourceforge.net/Inetc_plug-in",target:"_blank",rel:"noopener noreferrer"},I=(0,t.Uk)("Inetc"),D=(0,t.Uk)("There is a "),E={href:"http://eclipsensis.sourceforge.net/update",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("NSIS plugin for Eclipse"),L=(0,t.Uk)(" available as well which helps with editing the scripts. Read more about it at http://eclipsensis.sourceforge.net/index.shtml"),x=(0,t.uE)('<h2 id="gathering-the-necessary-files-and-information" tabindex="-1"><a class="header-anchor" href="#gathering-the-necessary-files-and-information" aria-hidden="true">#</a> Gathering the Necessary Files and Information</h2><p>The installers can be run to generate on-line installers which will download all the necessary files from the Internet, or off-line installers which will include all the files. The off-line installers are around 650Mb in size.</p><h3 id="off-line-installers" tabindex="-1"><a class="header-anchor" href="#off-line-installers" aria-hidden="true">#</a> Off-Line Installers</h3><p>The off-line installers will need the following:</p><ul><li>The contents of the ADempiere .zip file, extracted to an empty directory. Do not modify the files in anyway. The install script will include these in its own zip file.</li><li>The Java JDK installer downloaded from Oracle. Download both the x32 and x64 versions.</li><li>The PostgreSQL installer downloaded from EnterpriseDB. Download both the x32 and x64 versions.</li></ul><p>To keep the files together, it is suggested to use the following directories within the ADempiere Installer project to hold these files:</p><ul><li>windows\\install_scripts\\tools\\adempiereZip - extract the ADempiere release .zip here so you will have adempiereZip\\adempiere...</li><li>windows\\install_scripts\\tools\\java - include both JDK installers</li><li>windows\\install_scripts\\tools\\postgres - include both Postgres installers</li></ul><h3 id="on-line-installers" tabindex="-1"><a class="header-anchor" href="#on-line-installers" aria-hidden="true">#</a> On-Line Installers</h3><p>For the on-line installers, you will need the following information:</p><ul><li>The URL of the published ADempiere binary .zip file.</li><li>The URLs of the two JAVA JDK installers - the actual installer after the license has</li><li>The URLs of the two PostgreSQL installers</li></ul><h3 id="updating-the-install-scripts" tabindex="-1"><a class="header-anchor" href="#updating-the-install-scripts" aria-hidden="true">#</a> Updating the Install Scripts</h3><p>The only file that needs to be changed is Adempiere_winx64.nsi.</p><p>In the beginning of the file, there are a number of defines that have to be corrected.</p><p>The following defines determine the name of the installer package. The name will be in the form <span class="katex-error" title="ParseError: KaTeX parse error: Expected group after &#39;_&#39; at position 15: {PRODUCT_NAME}_̲">{PRODUCT_NAME}_</span>{PRODUCT_VERSION}<span class="katex-error" title="ParseError: KaTeX parse error: Expected group after &#39;_&#39; at position 16: {PRODUCT_PATCH}_̲">{PRODUCT_PATCH}_</span>{OS_TAG}${OFF_LINE_TAG}.exe.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>!define PRODUCT_NAME &quot;ADempiere&quot;\n!define PRODUCT_VERSION &quot;380LTS&quot;\n!define PRODUCT_PATCH &quot;_2&quot;  ; Leading underscore if specifying a patch or null string\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If there is no patch or hotfix included, set PRODUCT_PATCH to a null string &quot;&quot;.</p><p>Next, point SOURCE_FILE_DIR at the extracted zip location. In this case, it points to the adempiere project where the build places the files to be zipped. Access to these files is required for off-line installs as well as the installer will use the icons contained in the ADempiere project.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; SOURCE_FILE_DIR is the unzipped Adempiere files in the Adempiere project\n; found in the install\\build\\Adempiere folder.  This is required even if an \n; on-line install is being built.  The directory could also be pointed at the \n; ADEMPIERE_HOME directory after a clean extract of the zipped binaries and\n; before any setup has been performed.\n!define SOURCE_FILE_DIR &quot;..\\..\\..\\adempiere\\install\\build\\Adempiere&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Point the installer at the ADempiere download link and define the name of the zip file. The other defines in this section can be left as defaults. AD_SIZE is the fully installed and built size of the ADMPIERE_HOME directory.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; *********************************\n; Adempiere defines\n; Source of web zip\n!define ADEMPIERE_DOWNLOAD_LINK &quot;https://bintray.com/artifact/download/mckayerp/ADempiere-444-Window-Install-Test/Adempiere_380LTS_2.zip&quot;\n!define ADEMPIERE_INSTALLER &quot;Adempiere_380LTS_2.zip&quot;\n!define AD_INSTALL_DRIVE &quot;C:&quot;\n!define ADEMPIERE_HOME &quot;${AD_INSTALL_DRIVE}\\Adempiere&quot;\n!define AD_PASSWORD &quot;adempiere&quot;     ; Password for Adempiere installtion\n!define AD_PORT &quot;8080&quot;              ; Port used by the web server\n!define AD_SSL_PORT &quot;8443&quot;          ; Port used for SSL\n!define AD_SIZE 1760000             ; The required size in kb of the AD install. Need if downloading zip.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For the JAVA JDK, define the name, download link URL, installer file name and the default directories for both the x32 and x64 versions. The JDK_MIN_VERSION and JDK_TARGET_VERSION defines are used to determine if the JDK install is necessary on computers that already have another JDK installed.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; *********************************\n; JDK defines - name of the install executable and \n; the default install location\n!ifdef AD_WIN32_INSTALL\n   !define JDK_NAME &quot;Java JDK 1.8 Update 66 (Win x32)&quot;\n   !define JDK_DOWNLOAD_LINK &quot;http://download.oracle.com/otn-pub/java/jdk/8u66-b17/jdk-8u66-windows-i586.exe&quot;\n   !define JDK_INSTALLER &quot;jdk-8u66-windows-i586.exe&quot;\n   !define JDK_DEFAULT_DIR &quot;$PROGRAMFILES\\Java\\jdk1.8.0_66&quot;\n   !define JAVA_HOME &quot;$PROGRAMFILES\\Java\\jdk1.8.0_66&quot;\n   !define JDK_SIZE 335000             ; The required size in kb of the JDK install. Need if downloading zip.\n!else\n   !define JDK_NAME &quot;Java JDK 1.8 Update 60 (Win x64)&quot;\n   !define JDK_DOWNLOAD_LINK &quot;http://download.oracle.com/otn-pub/java/jdk/8u60-b27/jdk-8u60-windows-x64.exe&quot;\n   !define JDK_INSTALLER &quot;jdk-8u60-windows-x64.exe&quot;\n   !define JDK_DEFAULT_DIR &quot;$PROGRAMFILES64\\Java\\jdk1.8.0_60&quot;\n   !define JAVA_HOME &quot;$PROGRAMFILES64\\Java\\jdk1.8.0_60&quot;\n   !define JDK_SIZE 335000             ; The required size in kb of the JDK install. Need if downloading zip.\n!endif\n!define JDK_MIN_VERSION &quot;1.7&quot;\n!define JDK_TARGET_VERSION &quot;1.8&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similar to the JDK, for Postgres, update the name, download URL, installer name, service ID and version detail of the postgres installer for both x32 and x64 installs. The other defines can be left as defaults.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; *********************************\n; PostgreSQL defines - name of the install executable and \n; the default install location\n!ifdef AD_WIN32_INSTALL\n   !define PG_NAME &quot;PostgreSQL 9.4.5-1 (Win x32)&quot;\n   !define PG_DOWNLOAD_LINK &quot;http://get.enterprisedb.com/postgresql/postgresql-9.4.5-1-windows.exe&quot;\n   !define PG_INSTALLER &quot;postgresql-9.4.5-1-windows.exe&quot;\n   !define PG_DEFAULT_DIR &quot;$PROGRAMFILES\\PostgreSQL\\9.4&quot;\n   !define PG_SERVICE_ID &quot;postgresql-x64-9.4&quot;\n   !define PG_VERSION_DETAIL &quot;9.4.5-1&quot;\n   !define PG_SIZE  465000             ; The required size in kb of the PG install. Need if downloading zip.\n!else\n   !define PG_NAME &quot;PostgreSQL 9.4.5-1 Win x64&quot;\n   !define PG_DOWNLOAD_LINK &quot;http://get.enterprisedb.com/postgresql/postgresql-9.4.5-1-windows-x64.exe&quot;\n   !define PG_INSTALLER &quot;postgresql-9.4.5-1-windows-x64.exe&quot;\n   !define PG_DEFAULT_DIR &quot;$PROGRAMFILES64\\PostgreSQL\\9.4&quot;\n   !define PG_SERVICE_ID &quot;postgresql-x64-9.4&quot;\n   !define PG_VERSION_DETAIL &quot;9.4.5-1&quot;\n   !define PG_SIZE  465000             ; The required size in kb of the PG install. Need if downloading zip.\n!endif\n!define PG_MIN_VERSION &quot;9.0&quot;        ; Minimun acceptable PG Version\n!define PG_USER &quot;postgres&quot;          ; Username of PG system account\n!define PG_PASSWORD &quot;postgres&quot;      ; Password for PostgreSQL installtion\n!define PG_PORT &quot;5432&quot;              ; PostgreSQL Port (5432)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generating-the-installers" tabindex="-1"><a class="header-anchor" href="#generating-the-installers" aria-hidden="true">#</a> Generating the Installers</h2><h3 id="using-the-nsis-software" tabindex="-1"><a class="header-anchor" href="#using-the-nsis-software" aria-hidden="true">#</a> Using the NSIS Software</h3><ul><li>Launch the NSIS Software and click the link to &quot;Compile NSIS scripts&quot;.</li><li>Open and compile each of the four .nsi files to generate the four types of install scripts.</li></ul><h3 id="using-the-ant-build-file" tabindex="-1"><a class="header-anchor" href="#using-the-ant-build-file" aria-hidden="true">#</a> Using the Ant Build File</h3><p>Run the target &quot;All&quot;, the default, in the Ant build.xml file included in the windows directory. This will generate the four installers. The xml file has other targets to generate each one or only the on-line or off-line versions.</p><p>A launcher is included in the project to run the build from the External Tools configuration.</p><p>Note that you may have to change the NSIS_HOME property to point to your NSIS install location.</p><h3 id="adding-languages" tabindex="-1"><a class="header-anchor" href="#adding-languages" aria-hidden="true">#</a> Adding Languages</h3><p>The installer can support multiple languages. Currently, French and English are enabled. To setup other languages, copy the language/LangStrings_French.nsh file and rename it to the new language. Edit the file to replace the French text with your translation. The English text is in the comments.</p><p>Be sure to set the language flag at the top of the file as shown here:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; Define the language\n\n!ifdef _LANGUAGE_\n !undef _LANGUAGE_\n!endif\n!define _LANGUAGE_ ${LANG_FRENCH}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To include the new language file, edit the file Language.nsh and add the language to the following lines:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>; Language files\n!insertmacro MUI_LANGUAGE &quot;English&quot;\n!insertmacro MUI_LANGUAGE &quot;French&quot;\n\n; Pending translation\n;!insertmacro MUI_LANGUAGE &quot;German&quot; \n\n!include language\\LangStrings_English.nsh\n!include language\\LangStrings_French.nsh \n\n;!include language\\LangStrings_German.nsh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',37),T={},P=(0,n(3860).Z)(T,[["render",function(e,i){const n=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[l,s,(0,t._)("p",null,[a,(0,t._)("a",r,[d,(0,t.Wm)(n)]),o]),u,(0,t._)("p",null,[h,(0,t._)("a",c,[p,(0,t.Wm)(n)]),g]),f,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",m,[v,(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",b,[_,(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",w,[A,(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",q,[I,(0,t.Wm)(n)])])]),(0,t._)("p",null,[D,(0,t._)("a",E,[S,(0,t.Wm)(n)]),L]),x])}]])},8524:(e,i,n)=>{n.r(i),n.d(i,{data:()=>t});const t=JSON.parse('{"key":"v-3c707d80","path":"/community/wiki/developers-guide/generating-windows-installers.html","title":"Generating Windows Installers","lang":"en-US","frontmatter":{"title":"Generating Windows Installers","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Developer\'s Guide","Releasing New Versions"],"article":false,"summary":"When a new release or update has been published, the Windows installers need to be generated to use the published binaries. This page describes how to do so. The windows installer ","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/developers-guide/generating-windows-installers.html"}],["meta",{"property":"og:title","content":"Generating Windows Installers"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-08T22:15:36.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Developer\'s Guide"}],["meta",{"property":"article:tag","content":"Releasing New Versions"}],["meta",{"property":"article:modified_time","content":"2023-08-08T22:15:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Preparing to generate the installers","slug":"preparing-to-generate-the-installers","children":[]},{"level":2,"title":"Gathering the Necessary Files and Information","slug":"gathering-the-necessary-files-and-information","children":[{"level":3,"title":"Off-Line Installers","slug":"off-line-installers","children":[]},{"level":3,"title":"On-Line Installers","slug":"on-line-installers","children":[]},{"level":3,"title":"Updating the Install Scripts","slug":"updating-the-install-scripts","children":[]}]},{"level":2,"title":"Generating the Installers","slug":"generating-the-installers","children":[{"level":3,"title":"Using the NSIS Software","slug":"using-the-nsis-software","children":[]},{"level":3,"title":"Using the Ant Build File","slug":"using-the-ant-build-file","children":[]},{"level":3,"title":"Adding Languages","slug":"adding-languages","children":[]}]}],"git":{"createdTime":1691532936000,"updatedTime":1691532936000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.4,"words":1319},"filePathRelative":"community/wiki/developers-guide/generating-windows-installers.md","localizedDate":"August 8, 2023"}')}}]);
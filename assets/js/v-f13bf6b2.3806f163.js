"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9870],{1952:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ue});var r=l(8e3);const n=(0,r.Uk)("Archive for versions 3.3.0 through 3.5.2a "),a={href:"https://wiki.adempiere.net/Steps_To_Release_Archive",target:"_blank",rel:"noopener noreferrer"},i=(0,r.Uk)("Steps_To_Release_Archive"),o=(0,r.Uk)("Archive for versions 3.4.2s through 3.6.0LTS "),d={href:"https://wiki.adempiere.net/Steps_To_Release_Archive2",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("Steps_To_Release_Archive2"),p=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"To Do"),(0,r._)("th",null,"Done By")])],-1),u=(0,r._)("td",null,"Release Version",-1),_={href:"https://wiki.adempiere.net/Release_380LTS",target:"_blank",rel:"noopener noreferrer"},m=(0,r.Uk)("3.8.0LTS"),h=(0,r._)("tr",null,[(0,r._)("td",null,"Target Date"),(0,r._)("td",null,"2013/10/14")],-1),c=(0,r._)("tr",null,[(0,r._)("td",null,"Release Date"),(0,r._)("td",null,"2015/01/01")],-1),g=(0,r.Uk)("Prepare wiki release from svn log.Sample "),k={href:"https://wiki.adempiere.net/Release_320",target:"_blank",rel:"noopener noreferrer"},f=(0,r.Uk)("Release_320"),w=(0,r.Uk)("Done "),b={href:"https://wiki.adempiere.net/Release_380LTS",target:"_blank",rel:"noopener noreferrer"},T=(0,r.Uk)("Release 380LTS"),R=(0,r._)("tr",null,[(0,r._)("td",null,"Change sources to point new versionbase/src/org/compiere/Adempiere.javalaunch/Adempiere.xmlserverRoot/src/web/adempiere.htmlserverRoot/src/web/adempiere.jnlputils/adempiereDirectTemplate.jnlputils_dev/build.properties"),(0,r._)("td",null,"7141, 7817, 8039")],-1),y=(0,r._)("tr",null,[(0,r._)("td",null,"Create new postgres seedFresh build & installRUN_ImportAdempiereRUN_MigrationXMLRUN_ExportReferencejar the Adempiere_pg.dmp and Adempiere.log into Adempiere_pg.jarupload Adempiere_pg.jar seed into release/data/seed"),(0,r._)("td",null,"pending")],-1),v=(0,r._)("tr",null,[(0,r._)("td",null,"Create the new oracle seedFresh build & installRUN_ImportAdempiereRUN_MigrationXMLRUN_ExportReferencejar the Adempiere.dmp and Adempiere.log into Adempiere.jarupload Adempiere.jar seed into release/data/seedNOTE: This could also be done using the migration tool to copy the postgres seed to oracle"),(0,r._)("td",null,"pending")],-1),A=(0,r._)("tr",null,[(0,r._)("td",null,"Upload Reference databases to Source Forge"),(0,r._)("td",null,"pending")],-1),S=(0,r._)("tr",null,[(0,r._)("td",null,"Change and compile new Launch4j"),(0,r._)("td",null,"8040")],-1),U=(0,r._)("tr",null,[(0,r._)("td",null,"Generate complete model for new version (core and e-evolution) (be careful not to include customizations)To realize which package and where to put the generated classes execute the following querySELECT DISTINCT e.entitytype, COALESCE(e.modelpackage, 'org.compiere.model')FROM ad_entitytype e, ad_table tWHERE t.entitytype = e.entitytypeORDER BY 1"),(0,r._)("td",null,"pending")],-1),D=(0,r._)("tr",null,[(0,r._)("td",null,"Rename current-release (i.e. 320-release) to current-next (i.e. 320-330)"),(0,r._)("td",null,"Done")],-1),L=(0,r._)("tr",null,[(0,r._)("td",null,"Create directory next-release (i.e. 330-release)"),(0,r._)("td",null,"Done")],-1),E=(0,r._)("tr",null,[(0,r._)("td",null,"HG Flow finish feature for the release branch and merge with development/master"),(0,r._)("td",null,"pending")],-1),C=(0,r._)("tr",null,[(0,r._)("td",null,"Apply tag to the release revision in the master branch"),(0,r._)("td",null,"pending")],-1),j=(0,r._)("tr",null,[(0,r._)("td",null,"Create new release package"),(0,r._)("td",null,"pending")],-1),x=(0,r._)("tr",null,[(0,r._)("td",null,"Compile the new version to make installer (RUN_build)"),(0,r._)("td",null,"pending")],-1),N=(0,r._)("tr",null,[(0,r._)("td",null,"Test an installation with the installerTest the installTest the webstoreTest the client"),(0,r._)("td",null,"pending")],-1),W=(0,r._)("tr",null,[(0,r._)("td",null,"Upload to sourceforge as current release (all, including MD5)"),(0,r._)("td",null,"pending")],-1),F=(0,r._)("tr",null,[(0,r._)("td",null,"Edit english and spanish wikipedia pagesen wikipedia Adempierees wikipedia AdempiereComparison of accounting software (if LTS)"),(0,r._)("td",null,"pending")],-1),M=(0,r._)("tr",null,[(0,r._)("td",null,"Edit other languages wikipedia pageRomânaDeutschFrançais???"),(0,r._)("td")],-1),B=(0,r._)("tr",null,[(0,r._)("td",null,"Prepare a new AVARed1 (Howto Create AVA)"),(0,r._)("td")],-1),V=(0,r._)("tr",null,[(0,r._)("td",null,"Prepare new windows installer"),(0,r._)("td")],-1),H=(0,r._)("tr",null,[(0,r._)("td",null,"Update Live Demos"),(0,r._)("td",null,"pending")],-1),I=(0,r._)("tr",null,[(0,r._)("td",null,"Update Daily Build"),(0,r._)("td")],-1),O=(0,r._)("tr",null,[(0,r._)("td",null,"Edit freshmeat (advise to Sempre)Currently administered by semprehttp://freshmeat.net/projects/adempiere"),(0,r._)("td")],-1),P=(0,r._)("tr",null,[(0,r._)("td",null,"Press release"),(0,r._)("td",null,"pending")],-1),G=(0,r.Uk)("Change wiki "),z={href:"https://wiki.adempiere.net/Template:LASTRELEASE",target:"_blank",rel:"noopener noreferrer"},Z=(0,r.Uk)("Template:LASTRELEASE"),J=(0,r._)("td",null,null,-1),X=(0,r._)("tr",null,[(0,r._)("td",null,"Upload wiki manuals (for LTS versions)"),(0,r._)("td",null,"pending")],-1),q=(0,r._)("tr",null,[(0,r._)("td",null,"Upload wiki screenshots (for LTS versions)"),(0,r._)("td")],-1),Y={href:"http://www.adempiere.com/javadoc/",target:"_blank",rel:"noopener noreferrer"},K=(0,r.Uk)("Update javadoc "),Q=(0,r._)("td",null,null,-1),$={href:"http://www.adempiere.com/schemaspy/",target:"_blank",rel:"noopener noreferrer"},ee=(0,r.Uk)("Update schemaspy"),te=(0,r._)("td",null,"pending",-1),le=(0,r.Uk)("(desirable) update db/ddlutils model and data following instructions from "),re={href:"https://wiki.adempiere.net/Migration/DDLUtils",target:"_blank",rel:"noopener noreferrer"},ne=(0,r.Uk)("Migration/DDLUtils"),ae=(0,r.Uk)(" -f build-ddl.xml writeSchemaToFileant -f build-ddl.xml splitSchemaFileByTableant -f build-ddl.xml writeDataToFileant -f build-ddl.xml splitDataFileByTable"),ie=(0,r._)("td",null,"(Needed with the migration tool?)",-1),oe=(0,r._)("h2",{id:"see-also",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),(0,r.Uk)(" See Also")],-1),de={href:"https://wiki.adempiere.net/Steps_To_Release_HowTo",target:"_blank",rel:"noopener noreferrer"},se=(0,r.Uk)("Steps To Release HowTo"),pe={},ue=(0,l(3860).Z)(pe,[["render",function(e,t){const l=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("p",null,[n,(0,r._)("a",a,[i,(0,r.Wm)(l)])]),(0,r._)("p",null,[o,(0,r._)("a",d,[s,(0,r.Wm)(l)])]),(0,r._)("table",null,[p,(0,r._)("tbody",null,[(0,r._)("tr",null,[u,(0,r._)("td",null,[(0,r._)("a",_,[m,(0,r.Wm)(l)])])]),h,c,(0,r._)("tr",null,[(0,r._)("td",null,[g,(0,r._)("a",k,[f,(0,r.Wm)(l)])]),(0,r._)("td",null,[w,(0,r._)("a",b,[T,(0,r.Wm)(l)])])]),R,y,v,A,S,U,D,L,E,C,j,x,N,W,F,M,B,V,H,I,O,P,(0,r._)("tr",null,[(0,r._)("td",null,[G,(0,r._)("a",z,[Z,(0,r.Wm)(l)])]),J]),X,q,(0,r._)("tr",null,[(0,r._)("td",null,[(0,r._)("a",Y,[K,(0,r.Wm)(l)])]),Q]),(0,r._)("tr",null,[(0,r._)("td",null,[(0,r._)("a",$,[ee,(0,r.Wm)(l)])]),te]),(0,r._)("tr",null,[(0,r._)("td",null,[le,(0,r._)("a",re,[ne,(0,r.Wm)(l)]),ae]),ie])])]),oe,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",de,[se,(0,r.Wm)(l)])])])])}]])},7931:(e,t,l)=>{l.r(t),l.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-f13bf6b2","path":"/community/wiki/developers-guide/steps-to-release.html","title":"Steps to Release","lang":"en-US","frontmatter":{"title":"Steps to Release","category":["Community"],"star":9,"sticky":9,"tag":["Wiki","Developer\'s Guide","Releasing New Versions"],"article":false,"summary":"Archive for versions 3.3.0 through 3.5.2a StepsToRelease_Archive Archive for versions 3.4.2s through 3.6.0LTS StepsToRelease_Archive2 To Do | Done By -- | -- Release Version | 3.8.","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/community/wiki/developers-guide/steps-to-release.html"}],["meta",{"property":"og:title","content":"Steps to Release"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-08-08T22:15:36.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Wiki"}],["meta",{"property":"article:tag","content":"Developer\'s Guide"}],["meta",{"property":"article:tag","content":"Releasing New Versions"}],["meta",{"property":"article:modified_time","content":"2023-08-08T22:15:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"See Also","slug":"see-also","children":[]}],"git":{"createdTime":1691532936000,"updatedTime":1691532936000,"contributors":[{"name":"Jesús Albujas","email":"134967453+tecnicoerp@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.36,"words":407},"filePathRelative":"community/wiki/developers-guide/steps-to-release.md","localizedDate":"August 8, 2023"}')}}]);
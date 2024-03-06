"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[9897],{43082:(t,e,a)=>{a.r(e),a.d(e,{default:()=>P});var i=function(){var t=this,e=t._self._c;return e("div",[t.managedApplication?t._e():e("b-tabs",{on:{"activate-tab":function(e){return t.tabChanged()}}},[e("b-tab",{attrs:{active:"",title:"My Active Apps"}},[e("b-overlay",{attrs:{show:t.tableconfig.active.loading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"myapps-table",attrs:{striped:"",hover:"",responsive:"",items:t.myGlobalApps,fields:t.tableconfig.my.fields,"show-empty":"","empty-text":"No Global Apps are owned"},scopedSlots:t._u([{key:"cell(show_details)",fn:function(a){return[e("a",{on:{click:function(e){return t.showLocations(a,t.myGlobalApps)}}},[a.detailsShowing?t._e():e("v-icon",{attrs:{name:"chevron-down"}}),a.detailsShowing?e("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(a){return[e("b-card",{staticClass:"mx-2"},[e("list-entry",{attrs:{title:"Description",data:a.item.description}}),e("list-entry",{attrs:{title:"Owner",data:a.item.owner}}),e("list-entry",{attrs:{title:"Hash",data:a.item.hash}}),a.item.version>=5?e("div",[e("list-entry",{attrs:{title:"Contacts",data:JSON.stringify(a.item.contacts)}}),a.item.geolocation.length?e("div",t._l(a.item.geolocation,(function(a){return e("div",{key:a},[e("list-entry",{attrs:{title:"Geolocation",data:t.getGeolocation(a)}})],1)})),0):e("div",[e("list-entry",{attrs:{title:"Continent",data:"All"}}),e("list-entry",{attrs:{title:"Country",data:"All"}}),e("list-entry",{attrs:{title:"Region",data:"All"}})],1)],1):t._e(),a.item.instances?e("list-entry",{attrs:{title:"Instances",data:a.item.instances.toString()}}):t._e(),e("list-entry",{attrs:{title:"Expires in",data:t.labelForExpire(a.item.expire,a.item.height)}}),e("list-entry",{attrs:{title:"Enterprise Nodes",data:a.item.nodes?a.item.nodes.toString():"Not scoped"}}),e("list-entry",{attrs:{title:"Static IP",data:a.item.staticip?"Yes, Running only on Static IP nodes":"No, Running on all nodes"}}),e("h4",[t._v("Composition")]),a.item.version<=3?e("div",[e("b-card",[e("list-entry",{attrs:{title:"Repository",data:a.item.repotag}}),e("list-entry",{attrs:{title:"Custom Domains",data:a.item.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(a.item.ports,void 0,a.item.name).toString()}}),e("list-entry",{attrs:{title:"Ports",data:a.item.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:a.item.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:a.item.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:a.item.enviromentParameters.length>0?a.item.enviromentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:a.item.commands.length>0?a.item.commands.toString():"none"}}),a.item.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${a.item.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${a.item.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${a.item.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${a.item.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${a.item.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${a.item.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${a.item.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${a.item.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${a.item.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${a.item.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${a.item.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${a.item.hdd} GB`}})],1)],1)],1):e("div",t._l(a.item.compose,(function(i,n){return e("b-card",{key:n},[e("b-card-title",[t._v(" Component "+t._s(i.name)+" ")]),e("list-entry",{attrs:{title:"Name",data:i.name}}),e("list-entry",{attrs:{title:"Description",data:i.description}}),e("list-entry",{attrs:{title:"Repository",data:i.repotag}}),e("list-entry",{attrs:{title:"Repository Authentication",data:i.repoauth?"Content Encrypted":"Public"}}),e("list-entry",{attrs:{title:"Custom Domains",data:i.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(i.ports,i.name,a.item.name,n).toString()}}),e("list-entry",{attrs:{title:"Ports",data:i.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:i.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:i.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:i.environmentParameters.length>0?i.environmentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:i.commands.length>0?i.commands.toString():"none"}}),e("list-entry",{attrs:{title:"Secret Environment Parameters",data:i.secrets?"Content Encrypted":"none"}}),i.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${i.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${i.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${i.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${i.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${i.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${i.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${i.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${i.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${i.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${i.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${i.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${i.hdd} GB`}})],1)],1)})),1),e("h4",[t._v("Locations")]),e("b-table",{staticClass:"locations-table",attrs:{striped:"",hover:"",items:t.appLocations,fields:t.appLocationFields},scopedSlots:t._u([{key:"cell(visit)",fn:function(i){return[e("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.openApp(a.item.name,i.item.ip.split(":")[0],t.getProperPort(a.item))}}},[t._v(" Visit App ")]),e("b-button",{staticClass:"mr-0",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.openNodeFluxOS(i.item.ip.split(":")[0],i.item.ip.split(":")[1]?+i.item.ip.split(":")[1]-1:16126)}}},[t._v(" Visit FluxNode ")])]}}],null,!0)})],1)]}},{key:"cell(name)",fn:function(e){return[t._v(" "+t._s(t.getDisplayName(e.item.name))+" ")]}},{key:"cell(visit)",fn:function(a){return[e("b-button",{staticClass:"mr-0",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.openGlobalApp(a.item.name)}}},[t._v(" Visit ")])]}},{key:"cell(manage)",fn:function(a){return[e("b-button",{staticClass:"mr-0",attrs:{id:`manage-installed-app-${a.item.name}`,size:"sm",variant:"danger"}},[t._v(" Manage ")]),e("confirm-dialog",{attrs:{target:`manage-installed-app-${a.item.name}`,"confirm-button":"Manage App"},on:{confirm:function(e){return t.openAppManagement(a.item.name)}}})]}}],null,!1,3316055105)})],1)],1)],1)],1)],1),e("b-tab",{attrs:{title:"My Expired Apps"}},[e("b-overlay",{attrs:{show:t.tableconfig.my_expired.loading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"myapps-table",attrs:{striped:"",hover:"",responsive:"",items:t.tableconfig.my_expired.apps,fields:t.tableconfig.my_expired.fields,"show-empty":"","empty-text":"None of your owed Apps are expired"},scopedSlots:t._u([{key:"cell(show_details)",fn:function(a){return[e("a",{on:{click:function(t){return a.toggleDetails()}}},[a.detailsShowing?t._e():e("v-icon",{attrs:{name:"chevron-down"}}),a.detailsShowing?e("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(a){return[e("b-card",{staticClass:"mx-2"},[e("list-entry",{attrs:{title:"Description",data:a.item.description}}),e("list-entry",{attrs:{title:"Owner",data:a.item.owner}}),e("list-entry",{attrs:{title:"Hash",data:a.item.hash}}),a.item.version>=5?e("div",[e("list-entry",{attrs:{title:"Contacts",data:JSON.stringify(a.item.contacts)}}),a.item.geolocation.length?e("div",t._l(a.item.geolocation,(function(a){return e("div",{key:a},[e("list-entry",{attrs:{title:"Geolocation",data:t.getGeolocation(a)}})],1)})),0):e("div",[e("list-entry",{attrs:{title:"Continent",data:"All"}}),e("list-entry",{attrs:{title:"Country",data:"All"}}),e("list-entry",{attrs:{title:"Region",data:"All"}})],1)],1):t._e(),a.item.instances?e("list-entry",{attrs:{title:"Instances",data:a.item.instances.toString()}}):t._e(),e("list-entry",{attrs:{title:"Expires in",data:t.labelForExpire(a.item.expire,a.item.height)}}),e("list-entry",{attrs:{title:"Enterprise Nodes",data:a.item.nodes?a.item.nodes.toString():"Not scoped"}}),e("list-entry",{attrs:{title:"Static IP",data:a.item.staticip?"Yes, Running only on Static IP nodes":"No, Running on all nodes"}}),e("h4",[t._v("Composition")]),a.item.version<=3?e("div",[e("b-card",[e("list-entry",{attrs:{title:"Repository",data:a.item.repotag}}),e("list-entry",{attrs:{title:"Custom Domains",data:a.item.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(a.item.ports,void 0,a.item.name).toString()}}),e("list-entry",{attrs:{title:"Ports",data:a.item.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:a.item.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:a.item.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:a.item.enviromentParameters.length>0?a.item.enviromentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:a.item.commands.length>0?a.item.commands.toString():"none"}}),a.item.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${a.item.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${a.item.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${a.item.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${a.item.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${a.item.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${a.item.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${a.item.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${a.item.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${a.item.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${a.item.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${a.item.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${a.item.hdd} GB`}})],1)],1)],1):e("div",t._l(a.item.compose,(function(i,n){return e("b-card",{key:n},[e("b-card-title",[t._v(" Component "+t._s(i.name)+" ")]),e("list-entry",{attrs:{title:"Name",data:i.name}}),e("list-entry",{attrs:{title:"Description",data:i.description}}),e("list-entry",{attrs:{title:"Repository",data:i.repotag}}),e("list-entry",{attrs:{title:"Repository Authentication",data:i.repoauth?"Content Encrypted":"Public"}}),e("list-entry",{attrs:{title:"Custom Domains",data:i.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(i.ports,i.name,a.item.name,n).toString()}}),e("list-entry",{attrs:{title:"Ports",data:i.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:i.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:i.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:i.environmentParameters.length>0?i.environmentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:i.commands.length>0?i.commands.toString():"none"}}),e("list-entry",{attrs:{title:"Secret Environment Parameters",data:i.secrets?"Content Encrypted":"none"}}),i.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${i.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${i.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${i.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${i.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${i.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${i.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${i.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${i.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${i.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${i.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${i.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${i.hdd} GB`}})],1)],1)})),1)],1)]}},{key:"cell(name)",fn:function(e){return[t._v(" "+t._s(t.getDisplayName(e.item.name))+" ")]}},{key:"cell(redeploy)",fn:function(a){return[e("b-button",{staticClass:"mr-0",attrs:{id:`redeploy-installed-app-${a.item.name}`,size:"sm",variant:"danger"}},[t._v(" Redeploy ")]),e("confirm-dialog",{attrs:{target:`redeploy-installed-app-${a.item.name}`,"confirm-button":"Redeploy App"},on:{confirm:function(e){return t.redeployApp(a.item)}}})]}}],null,!1,4229378380)})],1)],1)],1)],1)],1)],1),t.managedApplication?e("div",[e("management",{attrs:{"app-name":t.managedApplication,global:!0,"installed-apps":[]},on:{back:function(e){return t.clearManagedApplication()}}})],1):t._e()],1)},n=[],s=(a(70560),a(58887)),r=a(51015),o=a(16521),l=a(50725),c=a(86855),m=a(49379),d=a(26253),p=a(15193),u=a(66126),y=a(5870),g=a(20266),h=a(34547),b=a(51748),f=a(87156),v=a(8995),C=a(43672),S=a(27616);const A=a(80129),$=a(57306),w={components:{BTabs:s.M,BTab:r.L,BTable:o.h,BCol:l.l,BCard:c._,BCardTitle:m._,BRow:d.T,BButton:p.T,BOverlay:u.X,ListEntry:b.Z,ConfirmDialog:f.Z,Management:v.Z,ToastificationContent:h.Z},directives:{"b-tooltip":y.o,Ripple:g.Z},data(){return{managedApplication:"",daemonBlockCount:-1,appLocations:[],appLocationFields:[{key:"ip",label:"IP Address"},{key:"visit",label:""}],myappLocations:[],myappLocationFields:[{key:"ip",label:"IP Address"},{key:"visit",label:""}],tableconfig:{active:{apps:[],fields:[{key:"show_details",label:""},{key:"name",label:"Name",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"visit",label:"Visit"}],loading:!0},active_marketplace:{apps:[],fields:[{key:"show_details",label:""},{key:"name",label:"Name",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"visit",label:"Visit"}]},my:{apps:[],fields:[{key:"show_details",label:""},{key:"name",label:"Name",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"visit",label:"Visit"},{key:"manage",label:"Manage"}]},my_expired:{loading:!0,apps:[],fields:[{key:"show_details",label:""},{key:"name",label:"Name",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"redeploy",label:"Redeploy"}]}},allApps:[]}},computed:{myGlobalApps(){const t=localStorage.getItem("zelidauth"),e=A.parse(t);return this.allApps?this.allApps.filter((t=>t.owner===e.zelid)):[]},isLoggedIn(){const t=localStorage.getItem("zelidauth"),e=A.parse(t);return!!e.zelid}},mounted(){this.appsGetListGlobalApps(),this.getDaemonBlockCount()},methods:{minutesToString(t){let e=60*t;const a={day:86400,hour:3600,minute:60,second:1},i=[];for(const n in a){const t=Math.floor(e/a[n]);1===t&&i.push(` ${t} ${n}`),t>=2&&i.push(` ${t} ${n}s`),e%=a[n]}return i},labelForExpire(t,e){if(-1===this.daemonBlockCount)return"Not possible to calculate expiration";const a=t||22e3,i=e+a-this.daemonBlockCount;if(i<1)return"Application Expired";const n=2*i,s=this.minutesToString(n);return s.length>2?`${s[0]}, ${s[1]}, ${s[2]}`:s.length>1?`${s[0]}, ${s[1]}`:`${s[0]}`},async getDaemonBlockCount(){const t=await S.Z.getBlockCount();"success"===t.data.status&&(this.daemonBlockCount=t.data.data)},openAppManagement(t){this.managedApplication=t},clearManagedApplication(){this.managedApplication=""},async appsGetListGlobalApps(){this.tableconfig.active.loading=!0;const t=await C.Z.globalAppSpecifications();console.log(t),this.allApps=t.data.data,this.tableconfig.active.apps=this.allApps.filter((t=>{if(t.name.length>=14){const e=t.name.substring(t.name.length-13,t.name.length),a=Number(e);if(!Number.isNaN(a))return!1}return!0})),this.tableconfig.active_marketplace.apps=this.allApps.filter((t=>{if(t.name.length>=14){const e=t.name.substring(t.name.length-13,t.name.length),a=Number(e);if(!Number.isNaN(a))return!0}return!1})),this.tableconfig.active.loading=!1,this.loadPermanentMessages()},async loadPermanentMessages(){try{const t=localStorage.getItem("zelidauth"),e=A.parse(t);if(!e.zelid)return void(this.tableconfig.my_expired.loading=!1);const a=await C.Z.permanentMessagesOwner(e.zelid),i=[];for(const s of a.data.data){const t=i.find((t=>t.appSpecifications.name===s.appSpecifications.name));if(t){if(s.height>t.height){const t=i.findIndex((t=>t.appSpecifications.name===s.appSpecifications.name));t>-1&&(i.splice(t,1),i.push(s))}}else i.push(s)}const n=[];for(const s of i){const t=this.allApps.find((t=>t.name.toLowerCase()===s.appSpecifications.name.toLowerCase()));if(!t){const t=s.appSpecifications;n.push(t)}}this.tableconfig.my_expired.apps=n,this.tableconfig.my_expired.loading=!1}catch(t){console.log(t)}},redeployApp(t,e=!1){const a=t;e&&(a.name+="XXX",a.name+=Date.now().toString().slice(-5));const i=localStorage.getItem("zelidauth"),n=A.parse(i);n?a.owner=n.zelid:e&&(a.owner=""),this.$router.replace({name:"apps-registerapp",params:{appspecs:JSON.stringify(t)}})},copyToClipboard(t){const e=JSON.parse(t);delete e._showDetails;const a=JSON.stringify(e),i=document.createElement("textarea");i.value=a,i.setAttribute("readonly",""),i.style.position="absolute",i.style.left="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),this.showToast("success","Application Specifications copied to Clipboard")},openApp(t,e,a){if(console.log(t,e,a),a&&e){const t=e,i=a,n=`http://${t}:${i}`;this.openSite(n)}else this.showToast("danger","Unable to open App :(, App does not have a port.")},getProperPort(t){if(t.port)return t.port;if(t.ports)return t.ports[0];for(let e=0;e<t.compose.length;e+=1)for(let a=0;a<t.compose[e].ports.length;a+=1)if(t.compose[e].ports[a])return t.compose[e].ports[a];return null},openNodeFluxOS(t,e){if(console.log(t,e),e&&t){const a=t,i=e,n=`http://${a}:${i}`;this.openSite(n)}else this.showToast("danger","Unable to open FluxOS :(")},async openGlobalApp(t){const e=await C.Z.getAppLocation(t).catch((t=>{this.showToast("danger",t.message||t)}));if(console.log(e),"success"===e.data.status){const a=e.data.data,i=a[0];if(i){const e=`https://${t}.app.runonflux.io`;this.openSite(e)}else this.showToast("danger","Application is awaiting launching...")}else this.showToast("danger",e.data.data.message||e.data.data)},openSite(t){const e=window.open(t,"_blank");e.focus()},tabChanged(){this.tableconfig.active.apps.forEach((t=>{this.$set(t,"_showDetails",!1)})),this.appLocations=[]},showLocations(t,e){t.detailsShowing?t.toggleDetails():(e.forEach((t=>{this.$set(t,"_showDetails",!1)})),this.$nextTick((()=>{t.toggleDetails(),this.loadLocations(t)})))},async loadLocations(t){console.log(t),this.appLocations=[];const e=await C.Z.getAppLocation(t.item.name).catch((t=>{this.showToast("danger",t.message||t)}));if(console.log(e),"success"===e.data.status){const t=e.data.data;this.appLocations=t}},showToast(t,e,a="InfoIcon"){this.$toast({component:h.Z,props:{title:e,icon:a,variant:t}})},constructAutomaticDomains(t,e="",a,i=0){const n=a.toLowerCase(),s=e.toLowerCase();if(!s){const e=[];0===i&&e.push(`${n}.app.runonflux.io`);for(let a=0;a<t.length;a+=1){const i=`${n}_${t[a]}.app.runonflux.io`;e.push(i)}return e}const r=[];0===i&&r.push(`${n}.app.runonflux.io`);for(let o=0;o<t.length;o+=1){const e=`${n}_${t[o]}.app.runonflux.io`;r.push(e)}return r},getDisplayName(t){const e=t.substring(t.length-13,t.length),a=Number(e);return Number.isNaN(a)?t:`${t.substring(0,t.length-13)} - ${new Date(a).toLocaleString()}`},ensureObject(t){if("object"===typeof t)return t;let e;try{e=JSON.parse(t)}catch(a){e=A.parse(t)}return e},getGeolocation(t){if(t.startsWith("a")&&!t.startsWith("ac")&&!t.startsWith("a!c")){const e=t.slice(1),a=$.continents.find((t=>t.code===e))||{name:"ALL"};return`Continent: ${a.name||"Unkown"}`}if(t.startsWith("b")){const e=t.slice(1),a=$.countries.find((t=>t.code===e))||{name:"ALL"};return`Country: ${a.name||"Unkown"}`}if(t.startsWith("ac")){const e=t.slice(2),a=e.split("_"),i=a[0],n=a[1],s=a[2],r=$.continents.find((t=>t.code===i))||{name:"ALL"},o=$.countries.find((t=>t.code===n))||{name:"ALL"};let l=`Allowed location: Continent: ${r.name}`;return n&&(l+=`, Country: ${o.name}`),s&&(l+=`, Region: ${s}`),l}if(t.startsWith("a!c")){const e=t.slice(3),a=e.split("_"),i=a[0],n=a[1],s=a[2],r=$.continents.find((t=>t.code===i))||{name:"ALL"},o=$.countries.find((t=>t.code===n))||{name:"ALL"};let l=`Forbidden location: Continent: ${r.name}`;return n&&(l+=`, Country: ${o.name}`),s&&(l+=`, Region: ${s}`),l}return"All locations allowed"}}},_=w;var D=a(1001),k=(0,D.Z)(_,i,n,!1,null,null,null);const P=k.exports}}]);
var e={name:"LgLink",props:{href:{type:String},disabled:{type:Boolean,default:!1},underline:{type:Boolean,default:!1}}};function t(e,t,n,o,a,d,s,i,r,l){"boolean"!=typeof s&&(r=i,i=s,s=!1);const c="function"==typeof n?n.options:n;let u;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,a&&(c.functional=!0)),o&&(c._scopeId=o),d?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(d)},c._ssrRegister=u):t&&(u=s?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),u)if(c.functional){const e=c.render;c.render=function(t,n){return u.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,u):[u]}return n}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return(e,t)=>function(e,t){const o=n?t.media||"default":e,s=d[o]||(d[o]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",t.media&&s.element.setAttribute("media",t.media),void 0===a&&(a=document.head||document.getElementsByTagName("head")[0]),a.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(n),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{const e=s.ids.size-1,t=document.createTextNode(n),o=s.element.childNodes;o[e]&&s.element.removeChild(o[e]),o.length?s.element.insertBefore(t,o[e]):s.element.appendChild(t)}}}(e,t)}let a;const d={};const s=t({render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",{class:[e.disabled&&"disabled",e.underline?"underline":"no-underline"],attrs:{href:e.disabled?null:e.href}},[e._t("default")],2)},staticRenderFns:[]},(function(e){e&&e("data-v-2ba5baed_0",{source:".disabled[data-v-2ba5baed]{cursor:not-allowed}.no-underline[data-v-2ba5baed]{text-decoration:none}.underline[data-v-2ba5baed]{text-decoration:underline}",map:void 0,media:void 0})}),e,"data-v-2ba5baed",false,undefined,!1,o,void 0,void 0);s.install=e=>{e.component(s.name,s)};export default s;
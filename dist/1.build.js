(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{547:function(e,t,n){var r=n(554);"string"==typeof r&&(r=[[e.i,r,""]]);var o={sourceMap:!0,hmr:!0,transform:void 0,insertInto:void 0};n(101)(r,o);r.locals&&(e.exports=r.locals)},548:function(e,t,n){var r=n(556);"string"==typeof r&&(r=[[e.i,r,""]]);var o={sourceMap:!0,hmr:!0,transform:void 0,insertInto:void 0};n(101)(r,o);r.locals&&(e.exports=r.locals)},549:function(e,t,n){var r=n(558);"string"==typeof r&&(r=[[e.i,r,""]]);var o={sourceMap:!0,hmr:!0,transform:void 0,insertInto:void 0};n(101)(r,o);r.locals&&(e.exports=r.locals)},550:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.allParams.length,expression:"allParams.length"}]},e._l(e.allParams,function(t){return n("b-badge",{key:t.key,attrs:{variant:"primary",title:t.label}},[n("font-awesome-icon",{attrs:{icon:{prefix:t.iconPrefix||"fas",iconName:t.icon}}}),e._v("\n    "+e._s(t.value)+"\n  ")],1)}),1)};r._withStripped=!0;var o={organization:{label:"Organization",icon:"building",iconPrefix:"far"},tag:{label:"Tag",icon:"tag"},license:{label:"License",icon:"copyright"},badge:{label:"Badge",icon:"bookmark"},temporal_coverage:{label:"Temporal coverage",icon:"calendar"},geozone:{label:"Spatial coverage",icon:"map-marker"},granularity:{label:"Spatial granularity",icon:"bullseye"},format:{label:"Format",icon:"file"},resource_type:{label:"Resource type",icon:"file",iconPrefix:"far"},reuses:{label:"Reuses",icons:"recycle"},followers:{label:"Followers",icon:"eye"}};function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i={name:"params-list",props:{params:Object},computed:{allParams:function(){for(var e=[],t=function(){var t=a(r[n],2),o=t[0],i=t[1];Array.isArray(i)?i.forEach(function(t){e.push({key:o,value:t})}):e.push({key:o,value:i})},n=0,r=Object.entries(this.params);n<r.length;n++)t();return e.map(function(e){return Object.assign(e,o[e.key])})}}},s=n(79),l=Object(s.a)(i,r,[],!1,null,null,null);l.options.__file="src/query/param-list.vue";t.a=l.exports},553:function(e,t,n){"use strict";var r=n(547);n.n(r).a},554:function(e,t,n){(e.exports=n(100)(!0)).push([e.i,"\n.oembed-box[data-v-0d0a10da] {\n  padding: 15px;\n  border: 1px solid lightgrey;\n  border-radius: 0.2em;\n  text-align: center;\n}\n.oembed-error[data-v-0d0a10da] {\n  border: 2px solid red;\n  background-color: #f5c6cb;\n}\n","",{version:3,sources:["/home/travis/build/etalab/datagouv-search-indicator/src/components/src/components/oembed.vue"],names:[],mappings:";AA8DA;EACA,aAAA;EACA,2BAAA;EACA,oBAAA;EACA,kBAAA;AACA;AAEA;EACA,qBAAA;EACA,yBAAA;AACA",file:"oembed.vue?vue&type=style&index=0&id=0d0a10da&scoped=true&lang=css&",sourcesContent:['<template>\n  <div class="oembed">\n    <div class="oembed-box oembed-loading" v-if="!oembed.type && !error">\n      <font-awesome-icon icon="spinner" pulse/>\n    </div>\n    <div class="oembed-box oembed-error" v-if="error">\n      {{ error }}\n    </div>\n    <div class="oembed-content" v-if="oembed.type" v-html="oembed.html"></div>\n  </div>\n</template>\n\n<script>\nimport {mapGetters} from \'vuex\'\n\nexport default {\n  name: \'o-embed\',\n  props: {\n    url: {\n      type: String,\n      required: true\n    }\n  },\n  data () {\n    return {\n      oembed: Object,\n      error: undefined,\n    }\n  },\n  computed: {\n    ...mapGetters([\'oembedApi\'])\n  },\n  async created() {\n    this.getOembed(this.url)\n  },\n  methods: {\n    async getOembed(url) {\n      this.error = undefined\n      this.oembed = {}\n      if (!url) return;\n      try {\n        const oembedUrl = `${this.oembedApi}?url=${encodeURIComponent(url)}`\n        const response = await fetch(oembedUrl)\n        if (response.ok) {\n          this.oembed = await response.json()\n        } else {\n          this.error = response.statusText\n        }\n      } catch(error) {\n        this.error = error\n      }\n    }\n  },\n  watch: {\n    url(value) {\n      this.getOembed(value)\n    }\n  }\n}\n<\/script>\n\n<style scoped>\n.oembed-box {\n  padding: 15px;\n  border: 1px solid lightgrey;\n  border-radius: 0.2em;\n  text-align: center;\n}\n\n.oembed-error {\n  border: 2px solid red;\n  background-color: #f5c6cb;\n}\n</style>\n']}])},555:function(e,t,n){"use strict";var r=n(548);n.n(r).a},556:function(e,t,n){(e.exports=n(100)(!0)).push([e.i,"\n.tree-view-wrapper {\n  overflow: auto;\n}\n/* Find the first nested node and override the indentation */\n.tree-view-item-root > .tree-view-item-leaf > .tree-view-item {\n  margin-left: 0!important;\n}\n/* Root node should not be indented */\n.tree-view-item-root {\n  margin-left: 0!important;\n}\n.tree-view-item-hint {\n  color: #82b1ff !important;\n}\n","",{version:3,sources:["/home/travis/build/etalab/datagouv-search-indicator/src/components/src/components/treeview.vue"],names:[],mappings:";AA4BA;EACA,cAAA;AACA;AACA,4DAAA;AACA;EACA,wBAAA;AACA;AACA,qCAAA;AACA;EACA,wBAAA;AACA;AAEA;EACA,yBAAA;AACA",file:"treeview.vue?vue&type=style&index=0&lang=css&",sourcesContent:['<template>\n<div class="tree-view-wrapper">\n  <tree-view-item class="tree-view-item-root"\n    v-for="child in parsedData.children" :key="getKey(child)" :data="child"\n    :current-depth="0" :max-depth="allOptions.maxDepth"\n    :modifiable="allOptions.modifiable"  @change-data="onChangeData">\n  </tree-view-item>\n</div>\n</template>\n\n<script>\nimport Vue from \'vue\'\n\nexport default {\n  mixins: [Vue.options.components[\'tree-view\']],\n  methods: {\n    getKey: function(value){\n      if (Number.isInteger(value.key)) {\n        return `${value.key}:`;\n      } else {\n        return `"${value.key}":`;\n      }\n    }\n  }\n}\n<\/script>\n\n<style>\n.tree-view-wrapper {\n  overflow: auto;\n}\n/* Find the first nested node and override the indentation */\n.tree-view-item-root > .tree-view-item-leaf > .tree-view-item {\n  margin-left: 0!important;\n}\n/* Root node should not be indented */\n.tree-view-item-root {\n  margin-left: 0!important;\n}\n\n.tree-view-item-hint {\n  color: #82b1ff !important;\n}\n</style>\n']}])},557:function(e,t,n){"use strict";var r=n(549);n.n(r).a},558:function(e,t,n){(e.exports=n(100)(!0)).push([e.i,"\ntable.table[data-v-503b27fc] caption {\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-bottom: none;\n}\n.result-table[data-v-503b27fc] thead {\n  display: none;\n}\n[data-v-503b27fc] .param-list {\n  padding-left: 45px;\n}\n","",{version:3,sources:["/home/travis/build/etalab/datagouv-search-indicator/src/query/src/query/index.vue"],names:[],mappings:";AAmGA;EACA,kBAAA;EACA,iBAAA;EACA,2BAAA;EACA,mBAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;AACA",file:"index.vue?vue&type=style&index=0&id=503b27fc&scoped=true&lang=css&",sourcesContent:['<template>\n<div>\n  <b-row>\n    <b-col cols="12">\n      <b-input-group>\n        <b-input-group-prepend>\n          <b-btn disabled variant="outline-primary">\n            <font-awesome-icon icon="search" />\n          </b-btn>\n        </b-input-group-prepend>\n        <b-form-input :value="query.query" />\n      </b-input-group>\n      <div class="param-list">\n        <params-list :params="query.params"></params-list>\n      </div>\n      <div class="mb-3"></div>\n    </b-col>\n  </b-row>\n  <b-row align-h="center" class="mb-3" v-if="query.error">\n    <b-col cols="12">\n      <b-alert variant="danger" show>\n        <h4 class="alert-heading">Erreur durant le traitement de la requête</h4>\n        {{ query.error }}\n      </b-alert>\n    </b-col>\n  </b-row>\n  <item-details :item="expected" collapse></item-details>\n  <div class="mb-3"></div>\n  <b-table striped outlined hover caption-top fixed show-empty class="result-table"\n      :items="items" :fields="fields" @row-clicked="toggle"\n      empty-text="Aucun résultat"\n      tbody-tr-class="clickable">\n    <template slot="table-caption" v-if="query.found">\n      {{ model.singular }} trouvé<span v-if="model.feminine">e</span> parmi {{ query.total }} resultats\n    </template>\n    <template slot="table-caption" v-if="!query.found && query.total">\n      {{ model.singular }} non trouvé<span v-if="model.feminine">e</span> parmi {{ query.total }} resultats\n    </template>\n    <template slot="expected" slot-scope="data">\n      <font-awesome-icon v-if="data.item.id === query.expected"\n        icon="star" style="color: yellow"/>\n    </template>\n    <template slot="index" slot-scope="data">\n      {{ data.index + 1 }}\n    </template>\n    <template slot="row-details" slot-scope="row">\n      <item-details :item="item"></item-details>\n    </template>\n  </b-table>\n</div>\n</template>\n\n<script>\nimport { mapActions, mapState } from "vuex"\nimport OEmbed from \'../components/oembed.vue\'\nimport ItemDetails from \'./item-details.vue\'\nimport ParamsList from \'./param-list.vue\'\n\nexport default {\n  components: {OEmbed, ItemDetails, ParamsList},\n  computed: {\n    ...mapState([\'query\', \'details\', \'model\', \'expected\', \'item\']),\n    items() {\n      return this.query.items.map(item => {\n        item._showDetails = this.toggled === item.id\n        return item\n      })\n    },\n  },\n  data() {\n    return {\n      dialog: false,\n      treeViewOptions: {rootObjectKey: \'item\', maxDepth: 0},\n      toggled: undefined,\n      fields: [\n        { key: \'expected\', \'class\': \'f50\' },\n        { key: \'index\', \'class\': \'f50\' },\n        { label: \'Titre\', align: \'left\', key: \'title\' },\n      ],\n    }\n  },\n  methods: {\n    urlFor(id) {\n      return `${this.details.server}/${this.model.path}/${id}/`\n    },\n    toggle(item, index) {\n      this.toggled = this.toggled === item.id ? undefined : item.id\n    },\n    ...mapActions([\'setItem\'])\n  },\n  watch: {\n    toggled(itemId) {\n      this.setItem(itemId)\n    }\n  }\n};\n<\/script>\n\n<style scoped>\ntable.table >>> caption {\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-bottom: none;\n}\n\n.result-table >>> thead {\n  display: none;\n}\n\n>>> .param-list {\n  padding-left: 45px;\n}\n</style>\n']}])},559:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-input-group",[n("b-input-group-prepend",[n("b-btn",{attrs:{disabled:"",variant:"outline-primary"}},[n("font-awesome-icon",{attrs:{icon:"search"}})],1)],1),e._v(" "),n("b-form-input",{attrs:{value:e.query.query}})],1),e._v(" "),n("div",{staticClass:"param-list"},[n("params-list",{attrs:{params:e.query.params}})],1),e._v(" "),n("div",{staticClass:"mb-3"})],1)],1),e._v(" "),e.query.error?n("b-row",{staticClass:"mb-3",attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"12"}},[n("b-alert",{attrs:{variant:"danger",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v("Erreur durant le traitement de la requête")]),e._v("\n        "+e._s(e.query.error)+"\n      ")])],1)],1):e._e(),e._v(" "),n("item-details",{attrs:{item:e.expected,collapse:""}}),e._v(" "),n("div",{staticClass:"mb-3"}),e._v(" "),n("b-table",{staticClass:"result-table",attrs:{striped:"",outlined:"",hover:"","caption-top":"",fixed:"","show-empty":"",items:e.items,fields:e.fields,"empty-text":"Aucun résultat","tbody-tr-class":"clickable"},on:{"row-clicked":e.toggle},scopedSlots:e._u([{key:"expected",fn:function(t){return[t.item.id===e.query.expected?n("font-awesome-icon",{staticStyle:{color:"yellow"},attrs:{icon:"star"}}):e._e()]}},{key:"index",fn:function(t){return[e._v("\n      "+e._s(t.index+1)+"\n    ")]}},{key:"row-details",fn:function(t){return[n("item-details",{attrs:{item:e.item}})]}}])},[e.query.found?n("template",{slot:"table-caption"},[e._v("\n      "+e._s(e.model.singular)+" trouvé"),e.model.feminine?n("span",[e._v("e")]):e._e(),e._v(" parmi "+e._s(e.query.total)+" resultats\n    ")]):e._e(),e._v(" "),!e.query.found&&e.query.total?n("template",{slot:"table-caption"},[e._v("\n      "+e._s(e.model.singular)+" non trouvé"),e.model.feminine?n("span",[e._v("e")]):e._e(),e._v(" parmi "+e._s(e.query.total)+" resultats\n    ")]):e._e()],2)],1)};r._withStripped=!0;var o=n(44),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"oembed"},[e.oembed.type||e.error?e._e():n("div",{staticClass:"oembed-box oembed-loading"},[n("font-awesome-icon",{attrs:{icon:"spinner",pulse:""}})],1),e._v(" "),e.error?n("div",{staticClass:"oembed-box oembed-error"},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e(),e._v(" "),e.oembed.type?n("div",{staticClass:"oembed-content",domProps:{innerHTML:e._s(e.oembed.html)}}):e._e()])};function i(e,t,n,r,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function s(e){i(a,r,o,s,l,"next",e)}function l(e){i(a,r,o,s,l,"throw",e)}s(void 0)})}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}a._withStripped=!0;var d={name:"o-embed",props:{url:{type:String,required:!0}},data:function(){return{oembed:Object,error:void 0}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},Object(o.c)(["oembedApi"])),created:function(){var e=this;return s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.getOembed(e.url);case 1:case"end":return t.stop()}},t)}))()},methods:{getOembed:function(e){var t=this;return s(regeneratorRuntime.mark(function n(){var r,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.error=void 0,t.oembed={},e){n.next=4;break}return n.abrupt("return");case 4:return n.prev=4,r="".concat(t.oembedApi,"?url=").concat(encodeURIComponent(e)),n.next=8,fetch(r);case 8:if(!(o=n.sent).ok){n.next=15;break}return n.next=12,o.json();case 12:t.oembed=n.sent,n.next=16;break;case 15:t.error=o.statusText;case 16:n.next=21;break;case 18:n.prev=18,n.t0=n.catch(4),t.error=n.t0;case 21:case"end":return n.stop()}},n,null,[[4,18]])}))()}},watch:{url:function(e){this.getOembed(e)}}},u=(n(553),n(79)),p=Object(u.a)(d,a,[],!1,null,"0d0a10da",null);p.options.__file="src/components/oembed.vue";var m=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item?n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{class:{"text-center":!e.model.oembed,"mb-3":!e.collapse,"mb-1":e.collapse},attrs:{cols:"12",md:"10",lg:"8"}},[e.model.oembed?n("o-embed",{attrs:{url:e.item.page}}):n("b-button",{attrs:{variant:"outline-primary",href:e.item.page}},[e._v("\n      "+e._s(e.item.title||e.item.name)+"\n      "),n("font-awesome-icon",{attrs:{icon:"external-link-alt"}})],1)],1),e._v(" "),n("b-col",{attrs:{cols:"12"}},[e.collapse?n("b-card",{attrs:{"no-body":"","header-bg-variant":"transparent"}},[n("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header"}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.json-details",modifiers:{"json-details":!0}}],attrs:{block:"",variant:"light"}},[n("font-awesome-icon",{attrs:{icon:"arrow-down"}}),e._v("\n          JSON\n          "),n("font-awesome-icon",{attrs:{icon:"arrow-down"}})],1)],1),e._v(" "),n("b-collapse",{attrs:{id:"json-details"}},[n("b-card-body",{attrs:{"body-bg-variant":"light"}},[n("tree-view",{attrs:{data:e.item,options:e.treeViewOptions}})],1)],1)],1):e._e(),e._v(" "),e.collapse?e._e():n("tree-view",{attrs:{data:e.item,options:e.treeViewOptions}})],1)],1):n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("p",{staticClass:"text-center"},[n("font-awesome-icon",{attrs:{icon:"spinner",pulse:""}})],1)])],1)};b._withStripped=!0;var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-view-wrapper"},e._l(e.parsedData.children,function(t){return n("tree-view-item",{key:e.getKey(t),staticClass:"tree-view-item-root",attrs:{data:t,"current-depth":0,"max-depth":e.allOptions.maxDepth,modifiable:e.allOptions.modifiable},on:{"change-data":e.onChangeData}})}),1)};f._withStripped=!0;var v={mixins:[n(20).default.options.components["tree-view"]],methods:{getKey:function(e){return Number.isInteger(e.key)?"".concat(e.key,":"):'"'.concat(e.key,'":')}}},g=(n(555),Object(u.a)(v,f,[],!1,null,null,null));g.options.__file="src/components/treeview.vue";var y=g.exports;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={name:"item-details",props:{item:Object,collapse:Boolean},components:{OEmbed:m,TreeView:y},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){A(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},Object(o.d)(["model"])),data:function(){return{treeViewOptions:{rootObjectKey:"item",maxDepth:0}}}},x=Object(u.a)(w,b,[],!1,null,null,null);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){j(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}x.options.__file="src/query/item-details.vue";var C={components:{OEmbed:m,ItemDetails:x.exports,ParamsList:n(550).a},computed:_({},Object(o.d)(["query","details","model","expected","item"]),{items:function(){var e=this;return this.query.items.map(function(t){return t._showDetails=e.toggled===t.id,t})}}),data:function(){return{dialog:!1,treeViewOptions:{rootObjectKey:"item",maxDepth:0},toggled:void 0,fields:[{key:"expected",class:"f50"},{key:"index",class:"f50"},{label:"Titre",align:"left",key:"title"}]}},methods:_({urlFor:function(e){return"".concat(this.details.server,"/").concat(this.model.path,"/").concat(e,"/")},toggle:function(e,t){this.toggled=this.toggled===e.id?void 0:e.id}},Object(o.b)(["setItem"])),watch:{toggled:function(e){this.setItem(e)}}},k=(n(557),Object(u.a)(C,r,[],!1,null,"503b27fc",null));k.options.__file="src/query/index.vue";t.default=k.exports}}]);
//# sourceMappingURL=1.build.js.map
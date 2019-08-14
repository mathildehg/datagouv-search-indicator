(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{546:function(e,t,n){var a=n(552);"string"==typeof a&&(a=[[e.i,a,""]]);var r={sourceMap:!0,hmr:!0,transform:void 0,insertInto:void 0};n(101)(a,r);a.locals&&(e.exports=a.locals)},550:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.allParams.length,expression:"allParams.length"}]},e._l(e.allParams,function(t){return n("b-badge",{key:t.key,attrs:{variant:"primary",title:t.label}},[n("font-awesome-icon",{attrs:{icon:{prefix:t.iconPrefix||"fas",iconName:t.icon}}}),e._v("\n    "+e._s(t.value)+"\n  ")],1)}),1)};a._withStripped=!0;var r={organization:{label:"Organization",icon:"building",iconPrefix:"far"},tag:{label:"Tag",icon:"tag"},license:{label:"License",icon:"copyright"},badge:{label:"Badge",icon:"bookmark"},temporal_coverage:{label:"Temporal coverage",icon:"calendar"},geozone:{label:"Spatial coverage",icon:"map-marker"},granularity:{label:"Spatial granularity",icon:"bullseye"},format:{label:"Format",icon:"file"},resource_type:{label:"Resource type",icon:"file",iconPrefix:"far"},reuses:{label:"Reuses",icons:"recycle"},followers:{label:"Followers",icon:"eye"}};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o={name:"params-list",props:{params:Object},computed:{allParams:function(){for(var e=[],t=function(){var t=s(a[n],2),r=t[0],o=t[1];Array.isArray(o)?o.forEach(function(t){e.push({key:r,value:t})}):e.push({key:r,value:o})},n=0,a=Object.entries(this.params);n<a.length;n++)t();return e.map(function(e){return Object.assign(e,r[e.key])})}}},i=n(79),l=Object(i.a)(o,a,[],!1,null,null,null);l.options.__file="src/query/param-list.vue";t.a=l.exports},551:function(e,t,n){"use strict";var a=n(546);n.n(a).a},552:function(e,t,n){(e.exports=n(100)(!0)).push([e.i,"\ntable.table[data-v-350e10d7], table.table[data-v-350e10d7] thead th { border-top: none !important\n}\n","",{version:3,sources:["/home/travis/build/etalab/datagouv-search-indicator/src/run/src/run/datatable.vue"],names:[],mappings:";AA+FA,sEAAA;AAAA",file:"datatable.vue?vue&type=style&index=0&id=350e10d7&scoped=true&lang=css&",sourcesContent:["<template>\n<div>\n  <b-tabs justified>\n    \x3c!-- Add your b-tab components here --\x3e\n    <template slot=\"tabs-end\">\n      <b-nav-item v-for=\"m in models\" :key=\"m.name\"\n        :active=\"m.name == model.name\"\n        @click=\"setModel(m)\">\n        {{ m.plural }} <b-badge>{{ queryCounter[m.name] }}</b-badge>\n      </b-nav-item>\n    </template>\n  </b-tabs>\n  <b-table striped outlined hover show-empty\n      :items=\"queries\" :fields=\"fields\" @row-clicked=\"display\"\n      empty-text=\"Aucune requête\"\n      :tbody-tr-class=\"rowClass\">\n    <template slot=\"query\" slot-scope=\"data\">\n      {{ data.item.query }}\n      <params-list :params=\"data.item.params\"></params-list>\n    </template>\n    <template slot=\"found\" slot-scope=\"data\">\n      <font-awesome-icon v-if=\"data.item.found\" icon=\"check\" />\n      <font-awesome-icon v-else icon=\"times\" />\n    </template>\n    <template slot=\"rank\" slot-scope=\"data\">\n      <span v-if=\"data.item.found\">{{ data.item.rank }}</span>\n      <font-awesome-icon v-else icon=\"times\" />\n    </template>\n    <template slot=\"page\" slot-scope=\"data\">\n      <span v-if=\"!data.item.error\">{{ data.item.page }}</span>\n      <font-awesome-icon v-else icon=\"times\" />\n    </template>\n    <template slot=\"total\" slot-scope=\"data\">\n      <span v-if=\"!data.item.error\">{{ data.item.total }}</span>\n      <font-awesome-icon v-else icon=\"times\" />\n    </template>\n  </b-table>\n</div>\n</template>\n\n<script>\nimport {mapState, mapGetters, mapActions} from 'vuex'\nimport ParamsList from '../query/param-list.vue'\nimport models from '../models'\n\nexport default {\n  name: 'run-datatable',\n  components: {ParamsList},\n  data() {\n    return {\n      fields: [\n        { label: 'Query', key: 'query', sortable: true },\n        { label: 'Expected', key: 'title', sortable: true },\n        { label: 'Found', key: 'found', sortable: true, class: 'text-center f85'},\n        { label: 'Rank', key: 'rank', sortable: true, class: 'text-center f85' },\n        { label: 'Page', key: 'page', sortable: true, class: 'text-center f85' },\n        { label: 'Total', key: 'total', sortable: true, class: 'text-center f85' },\n      ],\n      models,\n    }\n  },\n  computed: {\n    items() {\n      return this.details.queries.filter(query => query.model == this.model.name)\n    },\n    ...mapState(['toc', 'domain', 'details', 'config', 'model']),\n    ...mapGetters(['queries', 'queryCounter']),\n  },\n  methods: {\n    display(item) {\n      this.$router.push({\n        name: 'query',\n        params: {\n          domain: this.domain,\n          date: this.details.date,\n          query: item.uid\n        }\n      })\n    },\n    rowClass(query, type) {\n      if (!query) return\n      const classes = ['clickable']\n      if (!query.found) {\n        classes.push('table-danger')\n      } else {\n        classes.push(query.rank > this.config.minRank ? 'table-warning': 'table-success')\n      }\n      return classes\n    },\n    ...mapActions(['setModel']),\n  }\n}\n<\/script>\n\n<style scoped>\ntable.table, table.table >>> thead th { border-top: none !important }\n</style>\n"]}])},561:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-tabs",{attrs:{justified:""}},[n("template",{slot:"tabs-end"},e._l(e.models,function(t){return n("b-nav-item",{key:t.name,attrs:{active:t.name==e.model.name},on:{click:function(n){return e.setModel(t)}}},[e._v("\n        "+e._s(t.plural)+" "),n("b-badge",[e._v(e._s(e.queryCounter[t.name]))])],1)}),1)],2),e._v(" "),n("b-table",{attrs:{striped:"",outlined:"",hover:"","show-empty":"",items:e.queries,fields:e.fields,"empty-text":"Aucune requête","tbody-tr-class":e.rowClass},on:{"row-clicked":e.display},scopedSlots:e._u([{key:"query",fn:function(t){return[e._v("\n      "+e._s(t.item.query)+"\n      "),n("params-list",{attrs:{params:t.item.params}})]}},{key:"found",fn:function(e){return[e.item.found?n("font-awesome-icon",{attrs:{icon:"check"}}):n("font-awesome-icon",{attrs:{icon:"times"}})]}},{key:"rank",fn:function(t){return[t.item.found?n("span",[e._v(e._s(t.item.rank))]):n("font-awesome-icon",{attrs:{icon:"times"}})]}},{key:"page",fn:function(t){return[t.item.error?n("font-awesome-icon",{attrs:{icon:"times"}}):n("span",[e._v(e._s(t.item.page))])]}},{key:"total",fn:function(t){return[t.item.error?n("font-awesome-icon",{attrs:{icon:"times"}}):n("span",[e._v(e._s(t.item.total))])]}}])})],1)};a._withStripped=!0;var r=n(44),s=n(550),o=n(133);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={name:"run-datatable",components:{ParamsList:s.a},data:function(){return{fields:[{label:"Query",key:"query",sortable:!0},{label:"Expected",key:"title",sortable:!0},{label:"Found",key:"found",sortable:!0,class:"text-center f85"},{label:"Rank",key:"rank",sortable:!0,class:"text-center f85"},{label:"Page",key:"page",sortable:!0,class:"text-center f85"},{label:"Total",key:"total",sortable:!0,class:"text-center f85"}],models:o.a}},computed:l({items:function(){var e=this;return this.details.queries.filter(function(t){return t.model==e.model.name})}},Object(r.d)(["toc","domain","details","config","model"]),{},Object(r.c)(["queries","queryCounter"])),methods:l({display:function(e){this.$router.push({name:"query",params:{domain:this.domain,date:this.details.date,query:e.uid}})},rowClass:function(e,t){if(e){var n=["clickable"];return e.found?n.push(e.rank>this.config.minRank?"table-warning":"table-success"):n.push("table-danger"),n}}},Object(r.b)(["setModel"]))},m=(n(551),n(79)),p=Object(m.a)(u,a,[],!1,null,"350e10d7",null);p.options.__file="src/run/datatable.vue";t.default=p.exports}}]);
//# sourceMappingURL=2.build.js.map
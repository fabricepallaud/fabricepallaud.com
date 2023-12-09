(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{246:function(t,e,o){var content=o(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("0ace817b",content,!0,{sourceMap:!1})},247:function(t,e,o){"use strict";o(246)},248:function(t,e,o){(e=o(8)(!1)).push([t.i,'@media only screen and (min-width:601px){.wrap.wrap--front{padding:120px 0}}.container.container--home{margin-top:0;margin-bottom:0;overflow:visible;padding-top:5px;padding-bottom:5px}.home_intro__title{text-align:center;margin:0 0 30px}@media only screen and (max-width:600px){.home_intro__title{margin-bottom:50px}}.home_intro__title,.home_intro__title span{font-family:"helvetica_black",sans-serif;line-height:1.3;letter-spacing:.02em;font-size:42px}@media only screen and (max-width:768px){.home_intro__title,.home_intro__title span{font-size:35px}}@media only screen and (max-width:600px){.home_intro__title,.home_intro__title span{font-size:38px;line-height:1.2}}.home_intro__summary{margin-bottom:40px;text-align:center}@media only screen and (max-width:600px){.home_intro__summary{margin-bottom:60px}}.home_intro__summary,.home_intro__summary b{font-weight:400}.home_intro__summary b{margin:0 .15em;color:#d8cfc9}@media only screen and (max-width:600px){.home_intro__summary b{display:none}}.home_intro__summary strong{color:#d8cfc9}@media only screen and (max-width:600px){.home_intro__summary strong{color:#555}}.home_intro__summary span{font-family:"Lato",sans-serif;letter-spacing:.02em;font-size:23px;line-height:1.3;color:#aaa}@media only screen and (max-width:768px){.home_intro__summary span{font-size:20px;line-height:1.3}}@media only screen and (max-width:600px){.home_intro__summary span{display:block}}.home_intro__title span{color:#ff4b68}.home_intro__cta{display:flex;justify-content:center;align-items:center;margin:60px 0 75px}@media only screen and (max-width:600px){.home_intro__cta{display:none}}.home_intro__cta .button{width:210px}@media only screen and (max-width:600px){.home-portfolio{display:block!important}}',""]),t.exports=e},249:function(t,e,o){"use strict";o.r(e);o(16),o(11),o(12),o(14),o(7);var n=o(3),r=o(4),c=o(62),_=o.n(c);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Portfolio:o(130).a},data:function(){return{projects:[],portfolioLocation:0,isOpen:!1,ctaCaptions:["see projects","hide projects"],ctaCaption:"",homePortfolioLoaded:!1}},computed:l(l({},Object(r.b)({baseUrl:function(t){return t.baseUrl},showCaseStudies:function(t){return t.showCaseStudies}})),{},{homeShowPortfolioButtonContent:function(){return this.isOpen||this.homePortfolioLoaded?this.ctaCaption:"loading..."}}),mounted:function(){var t=this;setTimeout((function(){t.$store.commit("SET_LOADING",!1)}),200),this.$axios.$get("/projects/v1/posts").then((function(e){t.projects=e})).catch((function(e){t.$toast.error(e.response)})).finally((function(){t.homePortfolioLoaded=!0}));var e=_.a.get("cookie_case_studies_visible");this.showCaseStudies||"true"===e?(this.isOpen=!0,this.ctaCaption=this.ctaCaptions[1]):this.ctaCaption=this.ctaCaptions[0]},methods:{handleClick:function(){var t=document.querySelector(".portfolio");this.isOpen?(_.a.set("cookie_case_studies_visible",!1),this.$store.commit("SET_CASE_STUDIES_VISIBILITY_STATUS",!1),this.isOpen=!1,this.ctaCaption=this.ctaCaptions[0],t.style.display="none",window.scrollTo(0,0)):(_.a.set("cookie_case_studies_visible",!0),this.$store.commit("SET_CASE_STUDIES_VISIBILITY_STATUS",!1),t.style.display="block",this.isOpen=!0,this.ctaCaption=this.ctaCaptions[1])}}},d=(o(247),o(2)),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrap wrap--front"},[o("div",{staticClass:"container container--home"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"home_intro__cta"},[o("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"button button--showPortfolio",on:{click:t.handleClick}},[t._v("\n        "+t._s(t.homeShowPortfolioButtonContent)+"\n      ")])]),t._v(" "),o("portfolio",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"home-portfolio",attrs:{projects:t.projects}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"home_intro__title"},[this._v("\n      Hi I'm "),e("span",[this._v("Fabrice")]),this._v(", Front-end Developer.\n    ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"home_intro__summary"},[o("span",[t._v("\n        Experienced in "),o("strong",[t._v("Vue.js")])]),t._v(" "),o("span",[o("b",[t._v("•")]),t._v(" "),o("strong",[t._v("JavaScript")])]),t._v(" "),o("span",[o("b",[t._v("•")]),t._v(" "),o("strong",[t._v("PHP")])]),t._v(" "),o("span",[o("b",[t._v("•")]),t._v(" "),o("strong",[t._v("WordPress")])])])}],!1,null,null,null);e.default=component.exports}}]);
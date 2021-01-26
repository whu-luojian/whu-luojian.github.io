(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{837:function(s,e,t){"use strict";t.r(e);var a=t(115),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",[t("code",[s._v("core-js & polyfill")])]),s._v(" "),t("h2",{attrs:{id:"core-js"}},[t("code",[s._v("core-js")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#core-js"}},[s._v("#")])]),s._v(" "),t("p",[t("code",[s._v("core-js")]),s._v(" 是一个标准的 "),t("code",[s._v("javascript")]),s._v(" 标准库。它包含了 "),t("code",[s._v("ECMAScript 2020")]),s._v(" 在内的多项特性的 "),t("code",[s._v("polyfills")]),s._v("，以及 "),t("code",[s._v("ECMAScript")]),s._v(" 在 "),t("code",[s._v("proposals")]),s._v(" 阶段的特性和 "),t("code",[s._v("WHATWG/W3C")]),s._v(" 新特性等。它是一个现代化前端项目的“标准套件”。")]),s._v(" "),t("p",[t("code",[s._v("core-js")]),s._v(" 是一个由 "),t("code",[s._v("Lerna")]),s._v(" 搭建的 "),t("code",[s._v("Monorepo")]),s._v(" 风格的项目，它的 "),t("code",[s._v("packages")]),s._v(" 包含 5 个包：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("core-js")])])]),s._v(" "),t("p",[t("strong",[t("code",[s._v("core-js")]),s._v(" 实现的是基础垫片能力，是整个 "),t("code",[s._v("core-js")]),s._v(" 的逻辑核心")]),s._v("。使用方式：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js/features/array/from'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("core-js-pure")])])]),s._v(" "),t("p",[t("code",[s._v("core-js")]),s._v(" 实现垫片能力是直接覆盖 "),t("code",[s._v("Array")]),s._v("、"),t("code",[s._v("Object")]),s._v(" 等的 "),t("code",[s._v("prototype")]),s._v(" 来实现的。"),t("code",[s._v("core-js-pure")]),s._v(" 提供了不污染全局变量的垫片能力，导出的仅仅是各种特性的实现方法：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" _from "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js-pure/fetaures/array/from'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("code",[s._v("core-js-compact")])])]),s._v(" "),t("p",[t("code",[s._v("core-js-compact")]),s._v(" 维护了按照 "),t("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("browserslist")]),t("OutboundLink")],1),s._v(" 规范的垫片需求数据，来帮助我们找到“符合目标环境”的 "),t("code",[s._v("polyfills")]),s._v(" 需求合集，如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 筛选出全球使用份额大于 2.5% 的浏览器范围需要的模块")]),s._v("\n    targets\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js-compact'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    targets"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.5%'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("code",[s._v("core-js-compact")]),s._v(" 可以被 "),t("code",[s._v("Babel")]),s._v(" 生态使用，由 "),t("code",[s._v("Babel")]),s._v(" 分析出根据环境需要按需加载的垫片")]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("code",[s._v("core-js-bundle")])])]),s._v(" "),t("p",[t("code",[s._v("core-js-bundle")]),s._v(" 可以结合 "),t("code",[s._v("core-js-compact")]),s._v(" 以及 "),t("code",[s._v("core-js")]),s._v("，并利用 "),t("code",[s._v("webpack")]),s._v(" 能力，根据需求打包 "),t("code",[s._v("core-js")]),s._v(" 代码：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 把符合要求的垫片打包到 my-core-js-bundle.js 文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js-bundle'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    targets"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'> 0.5%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./my-core-js-bundle.js'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("code")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[t("code",[s._v("core-js-builder")])])]),s._v(" "),t("p",[t("code",[s._v("core-js-builder")]),s._v(" 供 "),t("code",[s._v("Node.js")]),s._v(" 服务调用，构建出不同场景的垫片包。")]),s._v(" "),t("h2",{attrs:{id:"polyfill-方案"}},[t("code",[s._v("polyfill")]),s._v(" 方案 "),t("a",{staticClass:"header-anchor",attrs:{href:"#polyfill-方案"}},[s._v("#")])]),s._v(" "),t("p",[t("code",[s._v("polyfill")]),s._v(" 就是社区上提供的一段代码，让我们在不兼容某些新特性的浏览器上，使用该特性。完美的 "),t("code",[s._v("polyfill")]),s._v(" 方案需要做到侵入性最小，工程化、自动化程度最高，业务影响最低，核心原则是按需加载补丁：")]),s._v(" "),t("ul",[t("li",[s._v("按照用户终端环境；")]),s._v(" "),t("li",[s._v("按照业务代码使用情况。")])]),s._v(" "),t("p",[t("strong",[t("code",[s._v("@babel/polyfill")]),s._v(" + "),t("code",[s._v("@babel/preset-env")]),s._v(" + "),t("code",[s._v("useBuiltins(entry)")]),s._v(" + "),t("code",[s._v("preset-env targets")])])]),s._v(" "),t("p",[t("code",[s._v("@babel/polyfill")]),s._v(" 就是 "),t("code",[s._v("core-js")]),s._v(" 和 "),t("code",[s._v("regenerator-runtime")]),s._v(" 两个包的结合，"),t("code",[s._v("regenerator-runtime")]),s._v(" 提供的是 "),t("code",[s._v("generator")]),s._v("、"),t("code",[s._v("async")]),s._v("、"),t("code",[s._v("await")]),s._v(" 的降级实现。")]),s._v(" "),t("p",[t("code",[s._v("@babel/preset-env")]),s._v(" 定义了 "),t("code",[s._v("Babel")]),s._v(" 所需插件预设，同时 "),t("code",[s._v("babel")]),s._v(" 根据 "),t("code",[s._v("preset-env targets")]),s._v(" 配置的支持环境，自动按需加载 "),t("code",[s._v("polyfills")]),s._v("，如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    presets"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            useBuiltIns"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'entry'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            targets"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                chrome"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("这样在工程代码入口处的：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/polyfill'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("会被编译成：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js/xxx/xxx'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js/xxx/xxx'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[t("code",[s._v("useBuiltins(usage)")])])]),s._v(" "),t("p",[t("code",[s._v("useBuiltins")]),s._v(" 配置为 "),t("code",[s._v("usage")]),s._v(" ，它可以真正根据代码情况，分析 "),t("code",[s._v("AST")]),s._v(" 进行更细粒度的按需引用，只有项目代码中使用到的新特性才会打补丁。")]),s._v(" "),t("p",[s._v("但是这种基于静态编译的按需加载补丁也是相对的，因为 "),t("code",[s._v("javascript")]),s._v(" 是一种弱类型的动态语言，比如 "),t("code",[s._v("foo.includes")]),s._v("，我们无法判断这里的 "),t("code",[s._v("includes")]),s._v(" 是数组原型方法还是字符串原型方法，因此一般做法只能将数组原型方法和字符串原型方法同时打包。")]),s._v(" "),t("p",[t("strong",[t("code",[s._v("@babel/plugin-transform-runtime")])])]),s._v(" "),t("p",[s._v("用于重复使用 "),t("code",[s._v("babel")]),s._v(" 注入的 "),t("code",[s._v("helpers")]),s._v(" 函数，达到节省代码大小的目的。"),t("code",[s._v("helpers")]),s._v(" 函数是由 "),t("code",[s._v("@babel/runtime")]),s._v(" 提供的（同时 "),t("code",[s._v("@babel/runtime")]),s._v(" 也提供了 "),t("code",[s._v("regenerator-runtime")]),s._v("，对 "),t("code",[s._v("enerator")]),s._v(" 和 "),t("code",[s._v("async")]),s._v(" 函数进行编译降级）。")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("@babel/plugin-transform-runtime")]),s._v(" 需要和 "),t("code",[s._v("@babel/runtime")]),s._v(" 配合使用；")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@babel/plugin-transform-runtime")]),s._v(" 用于编译时，作为 "),t("code",[s._v("devDependencies")]),s._v(" 使用；")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@babel/plugin-transform-runtime")]),s._v(" 将业务代码编译，引用 "),t("code",[s._v("@babel/runtime")]),s._v("提供的 "),t("code",[s._v("helpers")]),s._v("，达到缩减编译产出体积的目的；")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@babel/runtime")]),s._v(" 用于运行时，作为 "),t("code",[s._v("ependencies")]),s._v(" 使用。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@babel/plugin-transform-runtime")]),s._v(" 和 "),t("code",[s._v("@babel/runtime")]),s._v(" 结合除了可以对产出代码瘦身以外，还能避免污染全局作用域。")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
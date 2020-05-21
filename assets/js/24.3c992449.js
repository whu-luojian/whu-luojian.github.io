(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{821:function(s,t,a){"use strict";a.r(t);var n=a(115),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",[s._v("操作符基础及Rxjs 6")]),s._v(" "),a("p",[s._v("任何⼀种Reactive Extension的实现，都包含⼀个操作符的集合。⼀个操作符是返回⼀个\nObservable对象的函数 。操作符其实就是解决某个具体应⽤问题的模式。 当我们要⽤RxJS解决问题时，⾸先需要创建Observable对象，于是需要创建类操作符；当需要将多个数据流中的数据汇合到⼀起处理时，需要合并类操作符；当需要筛选去除⼀些数据时，需要过滤类操作符；当希望把数据流中的数据变化为其他数据时，需要转化类操作符；⽽对数据流的处理可能引起异常，所以为了让程序更加强壮，我们需要异常处理类操作符；最后，要让⼀个数据流的数据可以提供给多个观察者，我们需要多播类操作符。")]),s._v(" "),a("h2",{attrs:{id:"操作符分类"}},[s._v("操作符分类 "),a("a",{staticClass:"header-anchor",attrs:{href:"#操作符分类"}},[s._v("#")])]),s._v(" "),a("p",[s._v("根据不同的维度，操作符也有不同的分类⽅式。")]),s._v(" "),a("h3",{attrs:{id:"功能分类"}},[s._v("功能分类 "),a("a",{staticClass:"header-anchor",attrs:{href:"#功能分类"}},[s._v("#")])]),s._v(" "),a("p",[s._v("根据功能，操作符可以分为以下类别：")]),s._v(" "),a("ol",[a("li",[s._v("创建类：create、of、empty、never、from、interval、time、fromEvent等")]),s._v(" "),a("li",[s._v("转化类：map、mapTo、pluck等")]),s._v(" "),a("li",[s._v("过滤类：filter、skip、first、last、take、throttle、debounce等")]),s._v(" "),a("li",[s._v("合并类：concat、merge、zip、combineLatest等")]),s._v(" "),a("li",[s._v("多播类：multicast、publish、share等")]),s._v(" "),a("li",[s._v("异常处理类：throw、catchError、retry、finalize等")]),s._v(" "),a("li",[s._v("条件执行类：takeUntil，delayWhen、retryWhen等")]),s._v(" "),a("li",[s._v("辅助类：tap、count、reduce、max等")])]),s._v(" "),a("h3",{attrs:{id:"静态和实例分类"}},[s._v("静态和实例分类 "),a("a",{staticClass:"header-anchor",attrs:{href:"#静态和实例分类"}},[s._v("#")])]),s._v(" "),a("p",[s._v("除了按照功能分类之外，操作符还可以从存在形式这个⽅⾯来分类具体来说，就是操作符的实现函数和Observable类的关系。\n所有的操作符都是函数，不过有的操作符是Observable类的静态函数，也就是不需要Observable实例就可以执⾏的函数，所以称为“静态操作符”；另⼀类操作符是Observable的实例函数，前提是要有⼀个创建好的Observable对象，这⼀类称为“实例操作符” 。")]),s._v(" "),a("p",[s._v("⼀个操作符应该是静态的形式还是实例的形式， 完全由其功能决定。⽆论是静态操作符还是实例操作符，它们都会返回⼀个Observable对象。在链式调⽤中，静态操作符只能出现在⾸位，实例操作符则可以出现在任何位置，因为链式调⽤中各级之间靠Observable对象来关联，⼀个静态函数在链式调⽤的中间位置是不可能有容⾝之处的。")]),s._v(" "),a("h2",{attrs:{id:"rxjs-6"}},[s._v("Rxjs 6 "),a("a",{staticClass:"header-anchor",attrs:{href:"#rxjs-6"}},[s._v("#")])]),s._v(" "),a("p",[s._v("RxJs 6于2018年4月24日正式发布，RxJS 6在拥有更小API的同时，带来了更整洁的引入方式。")]),s._v(" "),a("h3",{attrs:{id:"import-路径"}},[s._v("import 路径 "),a("a",{staticClass:"header-anchor",attrs:{href:"#import-路径"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Rxjs 6模块化更加清晰：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("rxjs")]),s._v("：创建方法、类型、调度程序和工具库。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Subject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" asapScheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pipe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" interval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fromEvent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("rxjs/operators")]),s._v("：操作符")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" scan "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs/operators'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("rxjs/webSocket")]),s._v("：webSocket subject 实现")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" webSocket "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs/webSocket'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("rxjs/ajax")]),s._v("：Rx ajax实现")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ajax "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs/ajax'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("rxjs/testing")]),s._v("：Rxjs的测试工具库")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" TestScheduler "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs/testing'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"管道操作pipeline"}},[s._v("管道操作pipeline "),a("a",{staticClass:"header-anchor",attrs:{href:"#管道操作pipeline"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Rxjs 6 要求使用新的管道操作符语法替换旧有的链式操作。上一个操作符方法的结果会被传递到下一个操作符方法中。使用"),a("code",[s._v("pipe()")]),s._v("包裹所以的操作符方法，示例：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" range "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" scan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" catchError "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rxjs/operators'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" source$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsource$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 过滤出偶数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 求平方")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" acc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 累加")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("catchError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误处理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
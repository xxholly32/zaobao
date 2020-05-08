(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{583:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_2019-06-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-12","aria-hidden":"true"}},[t._v("#")]),t._v(" 2019.06.12")]),t._v(" "),a("p",[t._v("[新闻] VueConf 2019 尤雨溪演讲总结："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/6N6tuUEmS7eUOg82XQw8EA",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/6N6tuUEmS7eUOg82XQw8EA"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[类库] RxDB 是一个 JavaScript 客户端数据库，主要用于浏览器、NodeJS、Electron、Cordova、React-Native 以及其他任何 JavaScript 运行环境："),a("a",{attrs:{href:"https://github.com/pubkey/rxdb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/pubkey/rxdb"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[类库] 有时我们需要在浏览器上生成文件并保存到本地，这个借助 FileSaver.js 就可以很方便地实现。FileSaver.js 是一款基于 HTML5 完成文件保存插件，它可以帮你直接从网页中导出多种格式文件："),a("a",{attrs:{href:"https://github.com/eligrey/FileSaver.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/eligrey/FileSaver.js"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[类库] resolve-bin 是通过检查 node_modules 各个包中的 "),a("code",[t._v("package.json")]),t._v(" bin 字段，来解析指定包的 bin 文件目录 ："),a("a",{attrs:{href:"https://github.com/thlorenz/resolve-bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/thlorenz/resolve-bin"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"示例-rxdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-rxdb","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例 - RxDB")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" RxDB "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rxdb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" RxDB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heroesdb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    adapter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'websql'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myLongAndStupidPassword'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n    multiInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default: true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                                                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create database")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("collection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heroes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mySchema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create collection")]),t._v("\ndb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heroes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bob'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// insert document")]),t._v("\n")])])]),a("h3",{attrs:{id:"示例-filesaver-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-filesaver-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例 - FileSaver.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" FileSaver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-saver'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain;charset=utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFileSaver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveAs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"示例-resolve-bin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-resolve-bin","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例 - resolve-bin")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" resolveBin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resolve-bin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// package.json: "bin": "bin/tap.js"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveBin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [..]/resolve-bin/node_modules/tap/bin/tap.js")]),t._v("\n")])])]),a("h3",{attrs:{id:"配图-vueconf-2019-尤雨溪演讲总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配图-vueconf-2019-尤雨溪演讲总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 配图 - VueConf 2019 尤雨溪演讲总结")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/7jYkol4OxjTKo9acAeibOZLkZSLTHyN2FHAaVQibW77ibwgO77LvjF33nuK1NnzjVT7Y0bOJgvbCAdGdytJWtYJJA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"今日图-工作的我-vs-下班的我"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#今日图-工作的我-vs-下班的我","aria-hidden":"true"}},[t._v("#")]),t._v(" 今日图 - 工作的我 VS 下班的我")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.40zhe.com/16b4ae46b859bdbf",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);
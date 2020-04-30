(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{500:function(e,t,a){"use strict";a.r(t);var s=a(33),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"percentile-approx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#percentile-approx"}},[e._v("#")]),e._v(" PERCENTILE_APPROX")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[a("code",[e._v("PERCENTILE_APPROX(expr, DOUBLE p[, DOUBLE compression])")])]),e._v(" "),a("p",[e._v("Return the approximation of the point p, where the value of P is between 0 and 1.")]),e._v(" "),a("p",[e._v("Compression param is optional and can be setted to a value in the range of (0, 10000). The bigger compression you set, the more precise result and more time cost you will get. If it is not setted or not setted in the correct range, PERCENTILE_APPROX function will run with a default compression param of 10000.")]),e._v(" "),a("p",[e._v("This function uses fixed size memory, so less memory can be used for columns with high cardinality, and can be used to calculate statistics such as tp99.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MySQL > select `table`, percentile_approx(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\nMySQL > select `table`, percentile_approx(cost_time,0.99, 100) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99, 100) |\n+----------+--------------------------------------+\n| test     |                                54.21 |\n+----------+--------------------------------------+\n##keyword\nPERCENTILE_APPROX,PERCENTILE,APPROX\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
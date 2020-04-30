(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{391:function(a,t,e){"use strict";e.r(t);var i=e(33),s=Object(i.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"show-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-transaction"}},[a._v("#")]),a._v(" SHOW TRANSACTION")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("p",[a._v("该语法用于查看指定 transaction id 的事务详情。")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SHOW TRANSACTION\n[FROM db_name]\nWHERE id = transaction_id;\n")])])]),e("p",[a._v("返回结果示例：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")])])]),e("ul",[e("li",[a._v("TransactionId：事务id")]),a._v(" "),e("li",[a._v("Label：导入任务对应的 label")]),a._v(" "),e("li",[a._v("Coordinator：负责事务协调的节点")]),a._v(" "),e("li",[a._v("TransactionStatus：事务状态\n"),e("ul",[e("li",[a._v("PREPARE：准备阶段")]),a._v(" "),e("li",[a._v("COMMITTED：事务成功，但数据不可见")]),a._v(" "),e("li",[a._v("VISIBLE：事务成功且数据可见")]),a._v(" "),e("li",[a._v("ABORTED：事务失败")])])]),a._v(" "),e("li",[a._v("LoadJobSourceType：导入任务的类型。")]),a._v(" "),e("li",[a._v("PrepareTime：事务开始时间")]),a._v(" "),e("li",[a._v("CommitTime：事务提交成功的时间")]),a._v(" "),e("li",[a._v("FinishTime：数据可见的时间")]),a._v(" "),e("li",[a._v("Reason：错误信息")]),a._v(" "),e("li",[a._v("ErrorReplicasCount：有错误的副本数")]),a._v(" "),e("li",[a._v("ListenerId：相关的导入作业的id")]),a._v(" "),e("li",[a._v("TimeoutMs：事务超时时间，单位毫秒")])]),a._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("查看 id 为 4005 的事务：")]),a._v(" "),e("p",[a._v("SHOW TRANSACTION WHERE ID=4005;")])]),a._v(" "),e("li",[e("p",[a._v("指定 db 中，查看 id 为 4005 的事务：")]),a._v(" "),e("p",[a._v("SHOW TRANSACTION FROM db WHERE ID=4005;")])])]),a._v(" "),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SHOW, TRANSACTION\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
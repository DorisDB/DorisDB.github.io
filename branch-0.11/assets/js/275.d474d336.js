(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{806:function(_,t,v){"use strict";v.r(t);var a=v(33),e=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"集群升级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集群升级"}},[_._v("#")]),_._v(" 集群升级")]),_._v(" "),v("p",[_._v("Doris 可以通过滚动升级的方式，平滑进行升级。建议按照以下步骤进行安全升级。")]),_._v(" "),v("blockquote",[v("p",[_._v("注：")]),_._v(" "),v("ol",[v("li",[_._v("以下方式均建立在高可用部署的情况下。即数据 3 副本，FE 高可用情况下。")])])]),_._v(" "),v("h2",{attrs:{id:"测试-be-升级正确性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#测试-be-升级正确性"}},[_._v("#")]),_._v(" 测试 BE 升级正确性")]),_._v(" "),v("ol",[v("li",[_._v("任意选择一个 BE 节点，部署最新的 palo_be 二进制文件。")]),_._v(" "),v("li",[_._v("重启 BE 节点，通过 BE 日志 be.INFO，查看是否启动成功。")]),_._v(" "),v("li",[_._v("如果启动失败，可以先排查原因。如果错误不可恢复，可以直接通过 DROP BACKEND 删除该 BE、清理数据后，使用上一个版本的 palo_be 重新启动 BE。然后重新 ADD BACKEND。（"),v("strong",[_._v("该方法会导致丢失一个数据副本，请务必确保3副本完整的情况下，执行这个操作！！！")]),_._v("）")])]),_._v(" "),v("h2",{attrs:{id:"测试-fe-元数据兼容性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#测试-fe-元数据兼容性"}},[_._v("#")]),_._v(" 测试 FE 元数据兼容性")]),_._v(" "),v("ol",{attrs:{start:"0"}},[v("li",[v("strong",[_._v("重要！!元数据兼容性异常很可能导致数据无法恢复！！")])]),_._v(" "),v("li",[_._v("单独使用新版本部署一个测试用的 FE 进程（比如自己本地的开发机）。")]),_._v(" "),v("li",[_._v("修改测试用的 FE 的配置文件 fe.conf，将所有端口设置为"),v("strong",[_._v("与线上不同")]),_._v("。")]),_._v(" "),v("li",[_._v("在 fe.conf 添加配置：cluster_id=123456")]),_._v(" "),v("li",[_._v("在 fe.conf 添加配置：metadata_failure_recovery=true")]),_._v(" "),v("li",[_._v("拷贝线上环境 Master FE 的元数据目录 palo-meta 到测试环境")]),_._v(" "),v("li",[_._v("将拷贝到测试环境中的 palo-meta/image/VERSION 文件中的 cluster_id 修改为 123456（即与第3步中相同）")]),_._v(" "),v("li",[_._v("在测试环境中，运行 sh bin/start_fe.sh 启动 FE")]),_._v(" "),v("li",[_._v("通过 FE 日志 fe.log 观察是否启动成功。")]),_._v(" "),v("li",[_._v("如果启动成功，运行 sh bin/stop_fe.sh 停止测试环境的 FE 进程。")]),_._v(" "),v("li",[v("strong",[_._v("以上 2-6 步的目的是防止测试环境的FE启动后，错误连接到线上环境中。")])])]),_._v(" "),v("h2",{attrs:{id:"升级准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#升级准备"}},[_._v("#")]),_._v(" 升级准备")]),_._v(" "),v("ol",[v("li",[_._v("在完成数据正确性验证后，将 BE 和 FE 新版本的二进制文件分发到各自目录下。")]),_._v(" "),v("li",[_._v("通常小版本升级，BE 只需升级 palo_be；而 FE 只需升级 palo-fe.jar。如果是大版本升级，则可能需要升级其他文件（包括但不限于 bin/ lib/ 等等）如果你不清楚是否需要替换其他文件，建议全部替换。")])]),_._v(" "),v("h2",{attrs:{id:"滚动升级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#滚动升级"}},[_._v("#")]),_._v(" 滚动升级")]),_._v(" "),v("ol",[v("li",[_._v("确认新版本的文件部署完成后。逐台重启 FE 和 BE 实例即可。")]),_._v(" "),v("li",[_._v("建议逐台重启 BE 后，再逐台重启 FE。因为通常 Doris 保证 FE 到 BE 的向后兼容性，即老版本的 FE 可以访问新版本的 BE。但可能不支持老版本的 BE 访问新版本的 FE。")]),_._v(" "),v("li",[_._v("建议确认前一个实例启动成功后，在重启下一个实例。实例启动成功的标识，请参阅安装部署文档。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
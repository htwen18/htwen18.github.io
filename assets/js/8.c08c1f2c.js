(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{196:function(s,t,n){"use strict";n.r(t);var a=n(3),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网络工具安装")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools -y\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# epel-release")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release -y\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bash提升增强")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bash-completion -y\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新时区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim git maven")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" maven "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n")])])]),n("p",[n("RouterLink",{attrs:{to:"/vim.html"}},[s._v(".vimrc 设置 ")])],1),s._v(" "),n("p"),s._v(" "),n("p",[s._v("虚拟内存管理")]),s._v(" "),n("div",{staticClass:"language-shel extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('swapoff -a\n# 永久关闭\necho "vm.swappiness = 0" >> /etc/sysctl.conf\n# 使配置生效\nsysctl -p\n')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
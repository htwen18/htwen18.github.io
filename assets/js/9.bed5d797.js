(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(t,e,n){"use strict";n.r(e);var s=n(3),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"vim-8安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vim-8安装"}},[t._v("#")]),t._v(" vim 8安装")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y ncurses ncurses-devel\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/vim/vim.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vim/src\n./configure --enable_python3interp\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),n("h3",{attrs:{id:"vim-plug-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vim-plug-安装"}},[t._v("#")]),t._v(" vim-plug 安装")]),t._v(" "),n("p",[t._v("unix")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fLo ~/.vim/autoload/plug.vim --create-dirs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim\n")])])]),n("h3",{attrs:{id:"vimrc-常用配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vimrc-常用配置"}},[t._v("#")]),t._v(" .vimrc 常用配置")]),t._v(" "),t._v('">'),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('" 语法高亮\nsyntax on\n"自动对齐\nset autoindent\n"智能缩进\nset smartindent\n"不使用vi的键盘模式\nset nocompatible\n\nfiletype on\n\n"tab缩进\nset tabstop=4\nset shiftwidth=4\nset expandtab\nset smarttab\n\n" 256色\nset t_Co=256\n\n" 主题设置\ncolorscheme desert\n\n" 插件 使用插件需要先安装git\ncall plug#begin(\'~/.vim/plugged\')\nPlug \'junegunn/vim-easy-align\'\nPlug \'ctrlpvim/ctrlp.vim\'\nPlug \'Valloric/YouCompleteMe\'\nPlug \'preservim/nerdtree\'\ncall plug#end()\n\n" nerdtree 配置\n"autocmd vimenter * NERDTree\n" 只剩 NERDTree 窗口时关闭 vim\nautocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif\n" 开启/关闭 NERDTree 快捷键\nnnoremap <C-T> :NERDTreeToggle<CR>\n')])]),t._v(" "),n("p",[t._v("gcc升级")]),t._v(" "),n("div",{staticClass:"language-BASH extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" centos-release-scl\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" devtoolset-8\nscl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" devtoolset-8 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),n("p",[t._v("ycm初始化")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("cd ~/.vim/plugged/YouCompleteMe/\npython3 install.py\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
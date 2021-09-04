(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{201:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql的锁机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql的锁机制"}},[t._v("#")]),t._v(" mysql的锁机制")]),t._v(" "),a("h3",{attrs:{id:"_1、mysql锁的基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、mysql锁的基本介绍"}},[t._v("#")]),t._v(" 1、MySQL锁的基本介绍")]),t._v(" "),a("p",[t._v("​\t\t**锁是计算机协调多个进程或线程并发访问某一资源的机制。**在数据库中，除传统的 计算资源（如CPU、RAM、I/O等）的争用以外，数据也是一种供许多用户共享的资源。如何保证数据并发访问的一致性、有效性是所有数据库必须解决的一 个问题，锁冲突也是影响数据库并发访问性能的一个重要因素。从这个角度来说，锁对数据库而言显得尤其重要，也更加复杂。")]),t._v(" "),a("p",[t._v("​\t\t相对其他数据库而言，MySQL的锁机制比较简单，其最 显著的特点是不同的"),a("strong",[t._v("存储引擎")]),t._v("支持不同的锁机制。比如，MyISAM和MEMORY存储引擎采用的是表级锁（table-level locking）；InnoDB存储引擎既支持行级锁（row-level locking），也支持表级锁，但默认情况下是采用行级锁。")]),t._v(" "),a("p",[t._v("​\t\t**表级锁：**开销小，加锁快；不会出现死锁；锁定粒度大，发生锁冲突的概率最高，并发度最低。\n​\t\t**行级锁：**开销大，加锁慢；会出现死锁；锁定粒度最小，发生锁冲突的概率最低，并发度也最高。")]),t._v(" "),a("p",[t._v("​\t\t从上述特点可见，很难笼统地说哪种锁更好，只能就具体应用的特点来说哪种锁更合适！仅从锁的角度 来说：表级锁更适合于以查询为主，只有少量按索引条件更新数据的应用，如Web应用；而行级锁则更适合于有大量按索引条件并发更新少量不同数据，同时又有 并发查询的应用，如一些在线事务处理（OLTP）系统。")]),t._v(" "),a("h3",{attrs:{id:"_2、myisam表锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、myisam表锁"}},[t._v("#")]),t._v(" 2、MyISAM表锁")]),t._v(" "),a("p",[t._v("MySQL的表级锁有两种模式："),a("strong",[t._v("表共享读锁（Table Read Lock）"),a("strong",[t._v("和")]),t._v("表独占写锁（Table Write Lock）")]),t._v("。")]),t._v(" "),a("p",[t._v("对MyISAM表的读操作，不会阻塞其他用户对同一表的读请求，但会阻塞对同一表的写请求；对 MyISAM表的写操作，则会阻塞其他用户对同一表的读和写操作；MyISAM表的读操作与写操作之间，以及写操作之间是串行的！")]),t._v(" "),a("p",[t._v("建表语句：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("mylock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("MyISAM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("mylock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("mylock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("mylock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("mylock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("MyISAM写锁阻塞读的案例：")])]),t._v(" "),a("p",[t._v("​\t\t当一个线程获得对一个表的写锁之后，只有持有锁的线程可以对表进行更新操作。其他线程的读写操作都会等待，直到锁释放为止。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("session1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("session2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("获取表的write锁定"),a("br"),t._v("lock table mylock write;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session对表的查询，插入，更新操作都可以执行"),a("br"),t._v("select * from mylock;"),a("br"),t._v("insert into mylock values(5,'e');")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session对表的查询会被阻塞"),a("br"),t._v("select * from mylock；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("释放锁："),a("br"),t._v("unlock tables；")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session能够立刻执行，并返回对应结果")])])])]),t._v(" "),a("p",[a("strong",[t._v("MyISAM读阻塞写的案例：")])]),t._v(" "),a("p",[t._v("​\t\t一个session使用lock table给表加读锁，这个session可以锁定表中的记录，但更新和访问其他表都会提示错误，同时，另一个session可以查询表中的记录，但更新就会出现锁等待。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("session1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("session2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("获得表的read锁定"),a("br"),t._v("lock table mylock read;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session可以查询该表记录："),a("br"),t._v("select * from mylock;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session可以查询该表记录："),a("br"),t._v("select * from mylock;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session不能查询没有锁定的表"),a("br"),t._v("select * from person"),a("br"),t._v("Table 'person' was not locked with LOCK TABLES")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session可以查询或者更新未锁定的表"),a("br"),t._v("select * from mylock"),a("br"),t._v("insert into person values(1,'zhangsan');")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session插入或者更新表会提示错误"),a("br"),t._v("insert into mylock values(6,'f')"),a("br"),t._v("Table 'mylock' was locked with a READ lock and can't be updated"),a("br"),t._v("update mylock set name='aa' where id = 1;"),a("br"),t._v("Table 'mylock' was locked with a READ lock and can't be updated")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session插入数据会等待获得锁"),a("br"),t._v("insert into mylock values(6,'f');")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("释放锁"),a("br"),t._v("unlock tables;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获得锁，更新成功")])])])]),t._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意:")]),t._v(" "),a("p",[a("strong",[t._v("MyISAM在执行查询语句之前，会自动给涉及的所有表加读锁，在执行更新操作前，会自动给涉及的表加写锁，这个过程并不需要用户干预，因此用户一般不需要使用命令来显式加锁，上例中的加锁时为了演示效果。")])]),t._v(" "),a("p",[a("strong",[t._v("MyISAM的并发插入问题")])]),t._v(" "),a("p",[t._v("MyISAM表的读和写是串行的，这是就总体而言的，在一定条件下，MyISAM也支持查询和插入操作的并发执行")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("session1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("session2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("获取表的read local锁定"),a("br"),t._v("lock table mylock read local")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session不能对表进行更新或者插入操作"),a("br"),t._v("insert into mylock values(6,'f')"),a("br"),t._v("Table 'mylock' was locked with a READ lock and can't be updated"),a("br"),t._v("update mylock set name='aa' where id = 1;"),a("br"),t._v("Table 'mylock' was locked with a READ lock and can't be updated")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("其他session可以查询该表的记录"),a("br"),t._v("select* from mylock")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session不能查询没有锁定的表"),a("br"),t._v("select * from person"),a("br"),t._v("Table 'person' was not locked with LOCK TABLES")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("其他session可以进行插入操作，但是更新会阻塞"),a("br"),t._v("update mylock set name = 'aa' where id = 1;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session不能访问其他session插入的记录；")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("释放锁资源：unlock tables")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session获取锁，更新操作完成")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("当前session可以查看其他session插入的记录")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[t._v("可以通过检查table_locks_waited和table_locks_immediate状态变量来分析系统上的表锁定争夺：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-----------------------+-------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Variable_name         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-----------------------+-------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Table_locks_immediate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("352")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Table_locks_waited    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-----------------------+-------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--如果Table_locks_waited的值比较高，则说明存在着较严重的表级锁争用情况。")]),t._v("\n")])])]),a("p",[a("strong",[t._v("InnoDB锁")])]),t._v(" "),a("p",[a("strong",[t._v("1、事务及其ACID属性")])]),t._v(" "),a("p",[t._v("事务是由一组SQL语句组成的逻辑处理单元，事务具有4属性，通常称为事务的ACID属性。")]),t._v(" "),a("p",[t._v("原子性（Actomicity）：事务是一个原子操作单元，其对数据的修改，要么全都执行，要么全都不执行。\n一致性（Consistent）：在事务开始和完成时，数据都必须保持一致状态。\n隔离性（Isolation）：数据库系统提供一定的隔离机制，保证事务在不受外部并发操作影响的“独立”环境执行。\n持久性（Durable）：事务完成之后，它对于数据的修改是永久性的，即使出现系统故障也能够保持。")]),t._v(" "),a("p",[a("strong",[t._v("2、并发事务带来的问题")])]),t._v(" "),a("p",[t._v("相对于串行处理来说，并发事务处理能大大增加数据库资源的利用率，提高数据库系统的事务吞吐量，从而可以支持更多用户的并发操作，但与此同时，会带来一下问题：")]),t._v(" "),a("p",[a("strong",[t._v("脏读")]),t._v("： 一个事务正在对一条记录做修改，在这个事务并提交前，这条记录的数据就处于不一致状态；这时，另一个事务也来读取同一条记录，如果不加控制，第二个事务读取了这些“脏”的数据，并据此做进一步的处理，就会产生未提交的数据依赖关系。这种现象被形象地叫做“脏读”")]),t._v(" "),a("p",[a("strong",[t._v("不可重复读")]),t._v("：一个事务在读取某些数据已经发生了改变、或某些记录已经被删除了！这种现象叫做“不可重复读”。")]),t._v(" "),a("p",[a("strong",[t._v("幻读")]),t._v("： 一个事务按相同的查询条件重新读取以前检索过的数据，却发现其他事务插入了满足其查询条件的新数据，这种现象就称为“幻读”")]),t._v(" "),a("p",[t._v("上述出现的问题都是数据库读一致性的问题，可以通过事务的隔离机制来进行保证。")]),t._v(" "),a("p",[t._v("数据库的事务隔离越严格，并发副作用就越小，但付出的代价也就越大，因为事务隔离本质上就是使事务在一定程度上串行化，需要根据具体的业务需求来决定使用哪种隔离级别")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("read uncommitted")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("read committed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("repeatable read")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("serializable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[t._v("可以通过检查InnoDB_row_lock状态变量来分析系统上的行锁的争夺情况：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'innodb_row_lock%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-------------------------------+-------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Variable_name                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-------------------------------+-------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Innodb_row_lock_current_waits "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Innodb_row_lock_time          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18702")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Innodb_row_lock_time_avg      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18702")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Innodb_row_lock_time_max      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18702")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Innodb_row_lock_waits         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-------------------------------+-------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--如果发现锁争用比较严重，如InnoDB_row_lock_waits和InnoDB_row_lock_time_avg的值比较高")]),t._v("\n")])])]),a("p",[a("strong",[t._v("3、InnoDB的行锁模式及加锁方法")])]),t._v(" "),a("p",[t._v("​\t\t"),a("strong",[t._v("共享锁（s）")]),t._v("：又称读锁。允许一个事务去读一行，阻止其他事务获得相同数据集的排他锁。若事务T对数据对象A加上S锁，则事务T可以读A但不能修改A，其他事务只能再对A加S锁，而不能加X锁，直到T释放A上的S锁。这保证了其他事务可以读A，但在T释放A上的S锁之前不能对A做任何修改。\n​\t\t"),a("strong",[t._v("排他锁（x）")]),t._v("：又称写锁。允许获取排他锁的事务更新数据，阻止其他事务取得相同的数据集共享读锁和排他写锁。若事务T对数据对象A加上X锁，事务T可以读A也可以修改A，其他事务不能再对A加任何锁，直到T释放A上的锁。")]),t._v(" "),a("p",[t._v("​\t\tmysql InnoDB引擎默认的修改数据语句："),a("strong",[t._v("update,delete,insert都会自动给涉及到的数据加上排他锁，select语句默认不会加任何锁类型")]),t._v("，如果加排他锁可以使用select …for update语句，加共享锁可以使用select … lock in share mode语句。"),a("strong",[t._v("所以加过排他锁的数据行在其他事务种是不能修改数据的，也不能通过for update和lock in share mode锁的方式查询数据，但可以直接通过select …from…查询数据，因为普通查询没有任何锁机制。")])]),t._v(" "),a("p",[a("strong",[t._v("InnoDB行锁实现方式")])]),t._v(" "),a("p",[t._v("​\t\tInnoDB行锁是通过给"),a("strong",[t._v("索引")]),t._v("上的索引项加锁来实现的，这一点MySQL与Oracle不同，后者是通过在数据块中对相应数据行加锁来实现的。InnoDB这种行锁实现特点意味着：只有通过索引条件检索数据，InnoDB才使用行级锁，"),a("strong",[t._v("否则，InnoDB将使用表锁！")])]),t._v(" "),a("p",[t._v("1、在不通过索引条件查询的时候，innodb使用的是表锁而不是行锁")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" tab_no_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("innodb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" tab_no_index "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("session1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("session2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("set autocommit=0"),a("br"),t._v("select * from tab_no_index where id = 1;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("set autocommit=0"),a("br"),t._v("select * from tab_no_index where id =2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("select * from tab_no_index where id = 1 for update")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("select * from tab_no_index where id = 2 for update;")])])])]),t._v(" "),a("p",[t._v("session1只给一行加了排他锁，但是session2在请求其他行的排他锁的时候，会出现锁等待。原因是在没有索引的情况下，innodb只能使用表锁。")]),t._v(" "),a("p",[t._v("2、创建带索引的表进行条件查询，innodb使用的是行锁")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" tab_with_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("innodb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" tab_with_index "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" tab_with_index "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("session1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("session2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("set autocommit=0"),a("br"),t._v("select * from tab_with_indexwhere id = 1;")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("set autocommit=0"),a("br"),t._v("select * from tab_with_indexwhere id =2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("select * from tab_with_indexwhere id = 1 for update")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("select * from tab_with_indexwhere id = 2 for update;")])])])]),t._v(" "),a("p",[t._v("3、由于mysql的行锁是针对索引加的锁，不是针对记录加的锁，所以虽然是访问不同行的记录，但是依然无法访问到具体的数据")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" tab_with_index  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("session1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("session2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("set autocommit=0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("set autocommit=0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("select * from tab_with_index where id = 1 and name='1' for update")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("select * from tab_with_index where id = 1 and name='4' for update"),a("br"),t._v("虽然session2访问的是和session1不同的记录，但是因为使用了相同的索引，所以需要等待锁")])])])]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[a("strong",[t._v("对于MyISAM的表锁，主要讨论了以下几点：")]),t._v("\n（1）共享读锁（S）之间是兼容的，但共享读锁（S）与排他写锁（X）之间，以及排他写锁（X）之间是互斥的，也就是说读和写是串行的。"),a("br"),t._v("\n（2）在一定条件下，MyISAM允许查询和插入并发执行，我们可以利用这一点来解决应用中对同一表查询和插入的锁争用问题。\n（3）MyISAM默认的锁调度机制是写优先，这并不一定适合所有应用，用户可以通过设置LOW_PRIORITY_UPDATES参数，或在INSERT、UPDATE、DELETE语句中指定LOW_PRIORITY选项来调节读写锁的争用。\n（4）由于表锁的锁定粒度大，读写之间又是串行的，因此，如果更新操作较多，MyISAM表可能会出现严重的锁等待，可以考虑采用InnoDB表来减少锁冲突。")]),t._v(" "),a("p",[a("strong",[t._v("对于InnoDB表，本文主要讨论了以下几项内容：")]),t._v("\n（1）InnoDB的行锁是基于索引实现的，如果不通过索引访问数据，InnoDB会使用表锁。\n（2）在不同的隔离级别下，InnoDB的锁机制和一致性读策略不同。")]),t._v(" "),a("p",[t._v("在了解InnoDB锁特性后，用户可以通过设计和SQL调整等措施减少锁冲突和死锁，包括：")]),t._v(" "),a("ul",[a("li",[t._v("尽量使用较低的隔离级别； 精心设计索引，并尽量使用索引访问数据，使加锁更精确，从而减少锁冲突的机会；")]),t._v(" "),a("li",[t._v("选择合理的事务大小，小事务发生锁冲突的几率也更小；")]),t._v(" "),a("li",[t._v("给记录集显式加锁时，最好一次性请求足够级别的锁。比如要修改数据的话，最好直接申请排他锁，而不是先申请共享锁，修改时再请求排他锁，这样容易产生死锁；")]),t._v(" "),a("li",[t._v("不同的程序访问一组表时，应尽量约定以相同的顺序访问各表，对一个表而言，尽可能以固定的顺序存取表中的行。这样可以大大减少死锁的机会；")]),t._v(" "),a("li",[t._v("尽量用相等条件访问数据，这样可以避免间隙锁对并发插入的影响； 不要申请超过实际需要的锁级别；除非必须，查询时不要显示加锁；")]),t._v(" "),a("li",[t._v("对于一些特定的事务，可以使用表锁来提高处理速度或减少死锁的可能。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
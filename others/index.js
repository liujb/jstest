/*
 * js趣味题集锦
 */

//编号：1
//结果：true
//解释：3<1返回false,也就是0,0<2当然true了
console.log('(1): value is ' + (3 < 1 < 2).toString());


//编号：2
//结果：a===2,b===3
//解释：匿名自执行函数模拟了块级作用域
//变量没有var会被提升为全局变量
var a = 2,
	b = 4;
(function() {
	var a = 1;
	b = 3;
})();
console.log('(2): value is ' + 'a===' + a + ' b===' + b);


//编号：3
//结果：true
//解答：终于尼玛找到答案了
//[]==![]相当于[]==false(没有异议了吧因为![]就是false)
//[]==false又是怎么转化的呢，对于Object类型先转化成基础类型Number，为0
//0==false又将false转化为Number也是为0
//PS：console.log([]==![]);
console.log('(3): [] == ![] value is ' + ([] == ![]).toString());


//编号：4
//结果：false
//解释：//地址不等
console.log("(4): [] === [] value is " + ([] === []).toString());


//编号：5
//结果："undefined"
//解释：考察变量定义
var y = 1,
	x = y = typeof x;
console.log('(5): value is ' + x); //"undefined"


//编号：6
//结果："string"
//解释：考察typeof
var x = [typeof x, typeof y][1];
console.log('(6): value is ' + typeof typeof x); //string


//编号：7
//结果："number"
//解释：考察匿名自执行
var f = (function f() {
	return "2";
}, function g() {
	return 2;
})();
console.log("(7): value is " + typeof f); //number
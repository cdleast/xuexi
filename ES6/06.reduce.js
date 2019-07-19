/** 场景1
* 计算数组中所有值得总和
*/

var numbers = [10, 20, 30];
var sum = 0;

// ES5
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
// console.log(sum)

// ES6 reduce
// sum2是初始化,而且必须要给,这里给的是0
// number2是拿到numbers中的每一个值
var sumValue = numbers.reduce(function (sum2, number2) {
    return sum2 + number2;
}, 0)
// console.log(sumValue);


/** 场景2
* 将数组中对象的某个属性抽离到另外一个数组中
*/
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
]
// previous用来接收primaryColor(primaryColors数组中的每一个值,{})
// previous这里给的是初始化是个数组[]
var colors = primaryColors.reduce(function (previous, primaryColor) {
    // 把primaryColor的属性值color添加到previous数组中
    previous.push(primaryColor.color);
    return previous;
}, [])
// console.log(colors);


/** 场景3
* 判断字符串中括号是否对称
* "()()()()()()"
* "(((((())))))"
* "())))))"  这就不对称
*/

function balancedParens(string) {
    // 将字符串的每一个字符放到数组里面去,切割之后变成一个数组,然后调用reduce方法
    // 然后把reduce里面的东西传到function函数里面来
    // reduce 使用 previous 需要给个初始化,这里给的是0,char是字符
    return !string.split("").reduce(function (previous, char) {
        if (previous < 0) { return previous; }
        if (char == "(") { return ++previous; }
        if (char == ")") { return --previous; }
        return previous;
    }, 0)
}
// 现在返回的是不对称的个数,如果想返回true和false,进行取反即可(!string)
console.log(balancedParens(")(assddsfsd((()"));
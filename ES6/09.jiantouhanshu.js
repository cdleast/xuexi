/**
 * 箭头函数
 * 解决的问题
 * 1.缩减代码
 * 2.改变this指向
 */

// ES5正常函数
// const double = function(number){
//     return number * 2;
// }
// console.log(double(2));

// ES6箭头函数
// const double = (number) => {
//     return number * 2;
// }
// console.log(double(2));

// 也可以简写
// const double = (number) => number * 2;
// const double = number => number * 2;
// console.log(double(2));

// map一个数组,让数组中的值以double的形式展现
const numbers = [1, 2, 3];
var newNumbers = numbers.map(function(number){
    return number * 2;
})
var newNumbers = numbers.map((number) => {
    return number * 2;
})
// console.log(newNumbers);


// 改变this指向
const team1 = {
    members:['Henry','Elyse'],
    teamName:'es6',
    teamSummary:function(){
        let self = this;
        return this.members.map(function(member){
            // this不知道该指向谁了
            // return `${member}隶属于${this.teamName}小组`;
            return `${member}隶属于${self.teamName}小组`;
        })
    }
}
// 使用bind()改变this指向
const team2 = {
    members:['Henry','Elyse'],
    teamName:'es6',
    teamSummary:function(){
        let self = this;
        return this.members.map(function(member){
            return `${member}隶属于${this.teamName}小组`;
        }.bind(this))
    }
}

// ES6箭头函数改变this指向
const team = {
    members:['Henry','Elyse'],
    teamName:'es6',
    teamSummary:function(){
        let self = this;
        return this.members.map((member) => {
            // this指向team对象,指向父级的this
            return `${member}隶属于${this.teamName}小组`;
        })
    }
}


console.log(team.teamSummary());

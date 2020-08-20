function hello() {
    console.log('Hello', this);
}

person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

//person.logInfo()
// person.logInfo.bind(lena)('Frontend', '2-999-222')
//person.logInfo.call(lena, 'Frontend', '2-999-222' )
//person.logInfo.apply(lena, ['Frontend', '2-999-222'] )

const array = [1, 2, 3, 4, 5]

//function foo(arr, n) {
    // let a = []
    // arr.forEach(element => {
    //     a.push(element*n)
    // })
    // return a
   // return arr.map(elem => elem*n)
//}

Array.prototype.foo = function(n) {
    return this.map(elem => elem*n)
}
console.log(array.foo(10));
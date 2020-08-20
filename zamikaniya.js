function createCalcFunction(n) {
    return function() {
        console.log(1000*n);
    }
}

//createCalcFunction(42)()

function createInc(n) {
    return function(num) {
        return n + num
    }
}

const addOne = createInc(1)

//console.log(addOne(10));

const addTen = createInc(10)

//console.log(addTen(42));


function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}
// const comUrl = urlGenerator('com')
// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// const ruUrl = urlGenerator('ru')
//console.log(ruUrl('google'));
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}
const person1 = {name:'Max', age: 22, job: 'Front'}
const person2 = {name:'Elena', age: 19, job: 'SMM'}

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}
bind(person1,logPerson)()
bind(person2,logPerson)()

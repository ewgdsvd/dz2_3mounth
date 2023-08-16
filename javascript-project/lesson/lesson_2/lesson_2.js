//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)

/*
setTimeout(() => {
    console.log('1');
}, 3000)

setTimeout(() => {
    console.log('2');
}, 2000)

    console.log(4)

setTimeout(() => {
    console.log('3');
}, 1000)
*/


/*
const logger = () => console.log('LOG!')
setTimeout(logger, 3000)
*/

// Event Loop
/*
const btn = document.querySelector('button').onclick = () => {
    console.log('btn')
}*/

var num = 0
 function count (){
    num = num + 1
     console.log(num)
     if (num < 1415)
     count()
 }
 count()
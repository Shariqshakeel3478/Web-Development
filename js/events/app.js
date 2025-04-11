// document.getElementById('main').addEventListener('click', function (e) {
//     console.log('main div is clicked')
// }, false)

// document.getElementById('btn').addEventListener('click', function (e) {
//     e.stopPropagation();
//     console.log('button is clicked');

// }, false)


// example 2 with grandparent

// document.getElementById('gp').addEventListener('click', function () {
//     console.log('GrandParent')
// })

// document.getElementById('parent').addEventListener('click', function (e) {
//     e.stopPropagation();
//     console.log('Parent')
// })
// document.getElementById('btn').addEventListener('click', function (e) {
//     e.stopPropagation();
//     console.log('button')
// })
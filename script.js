const grand = document.getElementById('grand');
const parent = document.getElementById('parent');
const child = document.getElementById('child');



document.body.addEventListener('click', e => {
    console.log(e.target);
})

// grand.addEventListener('click', e => {
//     console.log(e.target)
//     e.stopPropagation();
// },{capture : true})

// parent.addEventListener('click', e =>{
//     console.log(e.target);
//     e.stopPropagation();
//     }
// )

// child.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log(e.target)
// }
// )
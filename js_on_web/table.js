let t = document.body.firstElementChild.firstElementChild

console.log(t);

// we will get the html collection of the all the rows
console.log(t.rows)

// it will the caption of the table
console.log(t.caption)

// it will give the tHead of the table
console.log(t.tHead)
console.log(t.tHead.firstElementChild)

// it will give the tFoot of the table
console.log(t.tFoot)       // it will return null because the table doesn't have the tFoot

console.log(t.tBodies)


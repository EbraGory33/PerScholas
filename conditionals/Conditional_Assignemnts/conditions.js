for (let i = 10; i >= 0; i--) {
    console.log(i)
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }
}

for (let i = 6; i <= 60; i++) {
    if (i % 3 === 0) {
        console.log(i + " is a multiple of 3")
    }
}

let str = ""
let i = 0;

while (i < 7) {
    let j = 0;
    while (j <= i) {
        console.log(j)
        str += "#";
        j++
    }
    str += "\n";
    i++
}

console.log(str)

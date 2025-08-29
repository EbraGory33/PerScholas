// Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
    if (i%3===0 && i%5===0) {
        console.log("FizzBuzz");
    } else if (i%3===0) {
        console.log("Fizz");
    } else if (i%5===0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Part 2: Prime Time
let num = 200;

Prime : while (true) {
    num++;
    for (let i = 2 ; i<num; i++){
        if (num%i===0) {
            continue Prime;
        }
    }
    console.log(`${num} is prime`);
    break;
}

// Part 3: Feeling Loopy
let csv="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232,";
let response = [];
let currentcell=0
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
for (let i =0; i<csv.length; i++) {
    if (csv[i] === "\n") {
        console.log(`${cell1}, ${cell2}, ${cell3}, ${cell4}`);
        currentcell=0
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
    }else if (csv[i] === ","){
        currentcell++;
    }else{
        if (currentcell===0) {
            cell1+=csv[i];
        } else if (currentcell===1) {
            cell2+=csv[i];
        } else if (currentcell===2) {
            cell3+=csv[i];
        } else if (currentcell===3) {
            cell4+=csv[i];
        }
    }
}
// Part 1: Refactoring Old Code

// let csv =
//   "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n" +
//   "1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n" +
//   "3,0.98,0.087,0.080\n" +
//   "4,1.47,0.116,0.108\n" +
//   "5,1.96,0.142,0.138\n" +
//   "6,2.45,0.166,0.158\n" +
//   "7,2.94,0.193,0.174\n" +
//   "8,3.43,0.204,0.192\n" +
//   "9,3.92,0.226,0.205\n" +
//   "10,4.41,0.238,0.232,";
// let currentcell = 0;
// let cells = [""];
// for (let i = 0; i < csv.length; i++) {
//   if (csv[i] === "\n" || i === csv.length - 1) {
//     console.log(`${cells[0]}, ${cells[1]}, ${cells[2]}, ${cells[3]}`);
//     currentcell = 0;
//     cells = [""];
//   } else if (csv[i] === ",") {
//     cells.push("");
//     currentcell++;
//   } else {
//     cells[currentcell] += csv[i];
//   }
// }

// Part 2: Expanding Functionality
[
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];

let csv =
  "ID,Name,Occupation,Age\n" +
  "42,Bruce,Knight,41\n" +
  "57,Bob,Fry Cook,19\n" +
  "63,Blaine,Quiz Master,58\n" +
  "98,Bill,Doctor’s Assistant,26";
let currentcell = 0;
let table = [];
console.log(csv.split("\n"));
rows = csv.split("\n");
for (let row of rows) {
  console.log(row);
  let cells = row.split(",");
  table.push(cells);
}
console.log(table);

// Part 3: Transforming Data

// let table = [
//   ["ID", "Name", "Occupation", "Age"],
//   ["42", "Bruce", "Knight", "41"],
//   ["57", "Bob", "Fry Cook", "19"],
//   ["63", "Blaine", "Quiz Master", "58"],
//   ["98", "Bill", "Doctor’s Assistant", "26"],
// ];
let result = [];
let headers = table[0].map((h) => h.toLowerCase());

for (let i = 1; i < table.length; i++) {
  let row = table[i];
  let obj = {};
  for (let j = 0; j < row.length; j++) {
    obj[headers[j]] = row[j];
  }
  result.push(obj);
}

console.log(result);

// Part 4: Sorting and Manipulating Data

result.pop();

result.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

let totalAge = 0;

for (let person of result) {
  totalAge += parseInt(person.age);
}
let avgAge = totalAge / result.length;

console.log("Updated result:", result);
console.log("Average age:", avgAge);

// Part 5: Full Circle

headers = Object.keys(result[0]);
let csvRows = [headers.join(",")];

for (let obj of result) {
  let values = headers.map((h) => obj[h]);
  csvRows.push(values.join(","));
}
csv = csvRows.join("\n");

console.log(csv);

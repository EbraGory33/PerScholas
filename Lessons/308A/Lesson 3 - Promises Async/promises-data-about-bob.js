// REQUESTS (how we interact with this data):
const personal = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Bob", lastName: "Thompson" }), 300)
  );
const business = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ occupation: "Farmer", salary: 300 }), 1000)
  );
const residence = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ country: "USA", state: "Florida" }), 1000)
  );

// WHAT WE WANT:
// print: [firstName] is a [occupation] from [state] [country]

// OBJECTIVE:
// Extract the data about bob that is currently wrapped in promises
// and piece together the string we want (above). Don't alter any of
// the code above and don't recreate the data yourself.

// EXTRA:
// Refactor your code using Promise.all()

// CODE BELOW:

//  using await and function
async function printProfile() {
  const [p, b, r] = await Promise.all([personal(), business(), residence()]);
  // const p = await personal();
  // const b = await business();
  // const r = await residence();
  console.log(`${p.name} is a ${b.occupation} from ${r.state} ${r.country}`);
}
printProfile();

// Promise.all
Promise.all([personal(), business(), residence()]).then(([p, b, r]) => {
  console.log(`${p.name} is a ${b.occupation} from ${r.state} ${r.country}`);
});

personal().then((value) => {
  console.log(value);
});

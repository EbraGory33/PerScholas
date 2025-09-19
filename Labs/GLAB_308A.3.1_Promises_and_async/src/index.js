// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  if (id > 10 || id <= 0) {
    throw new Error("Invalid Input -- Out of Range");
  }
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  const database = await central(id);
  const dbUserinfo = await dbs[database](id);
  const vaultUserinfo = await vault(id);

  return {
    id,
    name: vaultUserinfo.name,
    username: dbUserinfo.username,
    email: vaultUserinfo.email,
    address: vaultUserinfo.address,
    phone: vaultUserinfo.phone,
    website: dbUserinfo.website,
    company: dbUserinfo.company,
  };
}
const returnedValue = await getUserData(10);
console.log(returnedValue);

import { connection } from "/lib/db";

export default async function handler(req, res) {
  await connection.query("USE wild_commerce;");
  let result = await connection.query("select * from products;");
  res.send({ result });
  await connection.end();
}

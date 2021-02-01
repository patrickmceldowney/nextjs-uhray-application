// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
import middleware from "../../middleware/database";

/**
 * Use next-connect to chain our middleware to our function
 */
const handler = nextConnect();

handler.use(middleware);

/**
 * Connect to Atlas cluster from articles database and uhray_articles collection
 */
handler.get(async (req, res) => {
  let doc = await req.db.collection("uhray_articles").find({}).toArray();
  res.json(doc);
  db.close();
});

handler.post(async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  let doc = await req.db.collection("uhray_articles").insertOne(data);
  res.json({ message: "ok" });
});

export default handler;

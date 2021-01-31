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
  let doc = await req.db.collection("uhray_articles").findOne();
  console.log(doc);
  res.json(doc);
});

export default handler;

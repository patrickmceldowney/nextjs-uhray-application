import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

/**
 * Set up connection to MongoDB
 */
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * Instantiate our middleware to use in our API route
 */
async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("articles");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;

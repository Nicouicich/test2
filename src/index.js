import { initMongoDB } from "./services/mongo.database";
import config from "./utils/config";
import httpServer from "./services/server";


//DB connection and server start
const init = async () => {
  await initMongoDB();
  const port = config.PORT;
  httpServer.listen(port, () => console.log(`SERVER UP ON PORT ${port}`));
};
init();



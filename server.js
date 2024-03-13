import { app } from "./app.js";
import { connectdb } from "./database/db.js";

connectdb();

app.listen(process.env.PORT, () => {
  console.log(
    `server is working on ${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});

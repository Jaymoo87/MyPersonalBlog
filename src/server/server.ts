import * as express from "express";
import routes from "./routes";
import * as path from "path";
// import not_morgan from "./utils/not-morgan";

import { configurePassport } from "./middlewares/passport-strategies.mw";

const app = express();

configurePassport(app);
app.use(express.static("public"));
app.use(express.json());
// app.use(not_morgan);
app.use(routes);

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

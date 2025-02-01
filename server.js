import express from 'express'
import PublicRoutes from "./routes/public.js";
import PrivateRoutes from "./routes/private.js";

const app = express();
app.use(express.json());

app.use("/", PublicRoutes);
app.use("/", PrivateRoutes);

app.listen(8888, () => console.log("Servidor no ar 🚀 "));

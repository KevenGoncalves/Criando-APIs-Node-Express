import express from "express";
import { router } from "./routes/router.js";

const app = express();

//MiddleWares
app.use(express.json());
app.use(router);

app.listen(3030, () => {
	console.log("[SERVER] Servidor Correndo em http://localhost:3030");
});

//Ignorando

// const user ={
//     firstName:"Keven",
//     lastName:"Gonçalves",
//     age:20,
//     university:"UZ"
// }

// const {age,university} = user

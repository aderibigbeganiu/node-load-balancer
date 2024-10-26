import express from "express";

const NODE_PORT = process.env.NODE_PORT;

const app = express();
app.use(express.json());

app.get("/api/users", (req, res) => {
	res.status(200).json(["Adeleke", "Olamide", "Moses", "Femi", "David"]);
});

app.listen(NODE_PORT, () => {
	console.log(`Node server is listening on port ${NODE_PORT}`);
});

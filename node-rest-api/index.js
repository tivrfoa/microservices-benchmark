const express = require('express');

const app = express ();
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server Listening on PORT:", port);
});

app.get("/", hello);
app.post("/personCreate", personCreate);

function hello(req, res) {
	res.send('Hello Node');
}

function personCreate(req, res) {
	let p = req.body;
	console.log(p);
	res.send(`${p.Name} is ${p.Age} old`);
}

const express = require("express");
const app = express();

app.get("/", (request, response) => {
	response.send(`<h1>💜💜💜💜💜</h1>`);
});

app.get("/main", (request, response) => {
	response.send(`<h1>Hello World</h1>
    <p>This is main page</p>`);
});

app.use((request, response) => {
	response.send(`<h1>Sorry, page not found :(</h1>
    <h1>Try different page.</h1>`);
});

app.listen(3000, () => {
	console.log(`Start the server on localhost:3000`);
});

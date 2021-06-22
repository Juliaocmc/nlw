import express, { request } from "express";

const app = express();

//request -> entrando
//response - > saind
app.get("/test", (request, response) => {
    return response.send("olá");

});

app.post("/test-post", (request, response) => {
    return response.send("olá POST");
});
//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
import app from "./app.js"

app.listen(process.env.PORT,()=>{
    console.log(`the server is run on port ${process.env.PORT}`);
})
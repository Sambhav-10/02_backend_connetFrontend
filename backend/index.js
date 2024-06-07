import express from "express"
/*
when we use this import syntex for import express
so when we run our app so we get a error
so have to remove error so add pakege.json file
--- type : "module"
*/
const app = express()
// console.log(app);


app.get("/",(req,res)=>{
    res.send("backend home done here")
})
app.get("/frontend",(req,res)=>{
    res.send("frontend home done here")
})
app.get('/api/joke',(req,res)=>{
    const jokes = [
        {
            "id": 1,
            "title": "Why don’t scientists trust atoms?",
            "content": "Because they make up everything!"
        },
        {
            "id": 2,
            "title": "How do you organize a space party?",
            "content": "You planet."
        },
        {
            "id": 3,
            "title": "Why don't programmers like nature?",
            "content": "It has too many bugs."
        },
        {
            "id": 4,
            "title": "Why did the scarecrow win an award?",
            "content": "Because he was outstanding in his field!"
        },
        {
            "id": 5,
            "title": "What do you get when you cross a snowman and a vampire?",
            "content": "Frostbite."
        }
    ]
    res.send(jokes)
})

const port = 400;

app.listen(port,()=>{
    console.log(`server in runnig your port:${port} `);
})

/*
when we run this app so we can see error 
cros error - cros error use for sefty 

*/ 
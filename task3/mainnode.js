const fs=require("fs")
fs.writeFile("welcome.txt","Hello my name is mohamed",(error)=>{
    if (error) throw error;
    console.log("the file has been created")
})
fs.readFile("hello.txt",(error,data)=>{
    if (error) throw error;
    console.log(data.toString())
})
const gp=require("generate-password")
function generatepass(){
    const password=gp.generate({
        length:14,
        uppercase: true,
        lowercase:true,
        symbols:true,
        numbers:true,
        excludeSimilarCharacters:true,
    })
    console.log(password)
}
generatepass()
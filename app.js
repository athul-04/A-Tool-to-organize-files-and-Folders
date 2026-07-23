const path=require("path")
const os=require("os")


const {deleteFilesAndFolders,organizeFilesAndFolders}=require("./functionality")

// Lets say the user enter a command something like node app.js organize <location>

// Focus on 2 commands for now.. 
// 1-> node app.js delete
// 2-> node app.js organize <loc>

// const constructedPath=path.resolve(__dirname,"Check")

const functionality=process.argv[2]
const location=process.argv[3]
console.log(location)

switch(functionality.toLowerCase()){
    case "delete":
        deleteFilesAndFolders(location)
        break
    case "organize":
        try{
            organizeFilesAndFolders(location)
        }
        catch(err){
            console.log(err.message)
        }
        
        break
    
    default:
        console.log("No commands matched \n Use delete or organise <loc>")
}










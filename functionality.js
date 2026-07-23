const fs=require("fs")
const path=require("path")
const fsPromise=fs.promises

const deleteFilesAndFolders=(location)=>{
    if(location==undefined){throw new Error("This is not expected .. We need the location argument")}
    


}

const organizeFilesAndFolders=(location)=>{

    if(location==undefined){throw new Error("This is not expected .. We need the location argument")}
    fs.readdir(location,async(err,files)=>{
        if(err){
            throw new Error("Error in reading files")
        }
        console.log(files)
        const dirs=[]
        const filesExtension=new Set()

        // create folders
        for (let i=0;i<files.length;i++){
            
            let file=files[i].split(".")
            // console.log(file)
            if(file.length==1)continue;
            let extension=file.pop()
            let pathToCurrentDir=path.join(location,extension.toUpperCase()+"_ Folder")
            
            //creating folders
            try{
                await fsPromise.mkdir(pathToCurrentDir,{ recursive: true })
            }
            catch(err){
                throw new Error("Error in Folder Creation")
            }

            //copy paste inside folder

            let sourceFileLocation=path.join(location,files[i])
            let destinationFileLocation=path.join(location,extension.toUpperCase()+"_ Folder",files[i])

            
            try{
                await fsPromise.rename(sourceFileLocation,destinationFileLocation)
                console.log(`${files[i]} -- ✅`)
            }
            catch(err){
                throw new Error ("Error in copy paste")
            }

        }

        
    })
    




}

module.exports={deleteFilesAndFolders,organizeFilesAndFolders}

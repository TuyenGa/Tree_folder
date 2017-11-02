const FS = require('fs')
const PATH = require('path')
const contants = {
    DIRECTORY : 'Directory',
    FILE : 'File'
}
function dirSyncPath(path)
{
    let dirData = {}
    dirData = FS.readdirSync(path) // return an array file name excluding '.' and '..'
    /**
     * [folder , folder2 , ]
     */
    return dirData;
}

function dirTree(path)
{
    let name = PATH.basename(path)
    let item = { path , name}
    let starts; // save fs.startSync( path) return fs.start

    starts = FS.statSync(path);

    if(starts.isFile()) // if path is file()
    {
        const ext = PATH.extname( path).toLowerCase() // return extention of the path .html .md .js vv
        
        item.extention = ext
        item.type = contants.FILE
    }
    else if(starts.isDirectory()) // if path is directory   
    {
        // create 1 file dirSyncPath 
        let dirData = dirSyncPath(path)

        if(dirData === null) return null

        item.children = dirData
        .map(child => dirTree(PATH.join(path,child))) // return path/child
        /**
         * foreach(child as item)
         * {
         *      dirTree(PATH.join(path,item);
         * }
         */
        
        item.type = contants.DIRECTORY
    
    }
    //console.log(item)
    return item;
}
let tree = dirTree('./controll')

// return item { path , name , type , children }

//dirTree('/Users/tuyen/Desktop/Tree_folder')

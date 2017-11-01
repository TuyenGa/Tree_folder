
const fs = require('fs')
const path = require('path')

const pathName = '/Users/tuyen/Desktop/TreefOllder'
function tree(fileName)
{
    let lstart = fs.lstatSync(fileName).isDirectory()

    let baseName = {
        name : path.basename(fileName),
        path : fileName
    }

    if(lstart)
    {
        baseName.type = 'folder'
        
        baseName.children = fs.readdirSync(fileName).map((child) => {
            
        })
    }
    

    
}

tree()
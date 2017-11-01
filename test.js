const fs = require("fs");
const path = require("path");
const showTree = require('./show.js');

const p = "/home/batman/learning/node/draw";

function dirTree(fileName){
    let state = fs.lstatSync(fileName);
    let info = {
        name : path.basename(fileName),
        path : fileName
    }
    if(state.isDirectory()){
        info.type = "folder";
        info.children = fs.readdirSync(fileName).map((child) => {
            return dirTree(fileName + "/" + child);
        }); 
    } else {
        info.type = "file"
    }
    return info;
}

console.log(showTree(dirTree(p)));
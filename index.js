
const fs = require('fs')
const path = require('path')

const pathName = '/Users/tuyen/Desktop'

function Tree(fileName)
{
   let index = fs.lstatSync(fileName) // kiem tra duong dan co phai thu muc k
   let dir = path.basename(fileName)
   if(index.isDirectory())
   {
        
   }

}

Tree(pathName)
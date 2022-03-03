const fs = require('fs');
const { rename } = require('fs/promises');
const path = require('path');


const fileWrite = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, "utf8", err => {
            if (err) return fail(err)
            return success()
        });
    });
};

fileWrite("icko.txt", "Exercise class 01")
    .then(() => {
        console.log("FileSystem function one is written");
    })
    .catch(err => {
        console.log(err);
    });


fileWrite("Uzunov.txt", "Exercise class 01")
try {
    console.log("FileSystem function with tryCatch is written");
} catch (error) {
    console.log(error);
}

const readFile = (path, data) => {
    return new Promise((success, fail) => {
        fs.readFile(path, data, err => {
            if (err) return fail(err)
            return success()
        })
    });
}

// readFile("readfile.txt", "utf8")
//     .then(() => {
//         console.log();
//     })
//     .catch(err => {
//         console.log(err);
//     })

// fs.readFile("readfile2.txt", "utf-8",function (err,data) {

// })
// try {
//     console.log()
// } catch (error) {
//     console.log(error);
// }


const appendFile = (fileToPath, data) => {
    return new Promise((success, fail) => {
        fs.appendFile(fileToPath, data, "utf8", err => {
            if (err) return fail(err)
            return success()
        })
    });
};

appendFile("icko.txt", " Hello Front-End-Developers")
    .then(() => {
        console.log("Succesfully appended to the file");
    })
    .catch(err => {
        console.log(err);
    });

appendFile("icko.txt", " Hello BackEnd-Developers", "utf8")
try {
    console.log("Data is appended to file successfully.");
} catch (error) {
    console.log(err);
}


const renameFile = (oldName,newName) => {
    return new Promise ((success,fail) => {
        fs.rename(oldName,newName, err =>{
            if(err) return fail(err)
            return(success)
        });   
    });
};

renameFile("Uzunov.txt","Uzunov111!.txt")
.then(() =>{
    console.log();
})
.catch(err =>{
    console.log(err);
})

renameFile("Uzunov.txt","Uzunov1.txt")
try {
    console.log("File name successfully changed");
} catch (error) {
    console.log(error);
}


const copyFile = (src,dest) => {
    return new Promise ((success,fail) =>{
        fs.copyFile(src,dest, err =>{
            if(err) return fail(err)
            return(success)
        });        
    });
;}

copyFile("sourcefile.js","cars.js")
.then(()=>{
    console.log("File successfully coppied");
})
.catch((err)=>{
    console.log(err);
})

copyFile("cars.js","copiedCars.js")
try {
    console.log("cars.js information successfully coppied to copiedCars.js");
} catch (error) {
    console.log(error);
}




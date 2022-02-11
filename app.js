const express = require("express");
const spawn=require('child_process').spawn;
const path = require("path");
const fs = require("fs");
const app = express();
const multer=require('multer');
const port = 80;
var nameimg;
var storage=multer.diskStorage({
    destination:'./static/my_images',
    filename:(req,file,cb)=>{
        nameimg=file.fieldname+"_"+"imageme1"+path.extname(file.originalname);
        cb(null,nameimg);
    }
});
var upload=multer({
    storage:storage
}).single('file');

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());
// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
app.get('/', (req, res)=>{
    res.status(200).render('index.pug');
})
// ENDPOINTS
app.post('/',upload,(req, res)=>{
    setTimeout(() => {
    var img2=Date.now()+'.png';
    var img3=Date.now()+"_1.png"
        setTimeout(() => {
            const process1=spawn('python',['Filter.py',`./static/my_images/${nameimg}`,`./static/my_images/imageme2.png`]);
            process1.stdout.on('data',(data)=>{});
            setTimeout(() => {
                const process2=spawn('python',['grid_making.py',`./static/my_images/imageme2.png`,`./static/my_images/imageme3.png`]);
            process2.stdout.on('data1',(data1)=>{});
                setTimeout(() => {
                     const params2={'image':`../static/my_images/${nameimg}`,'image1':`../static/my_images/imageme2.png`,'image2':`../static/my_images/imageme3.png`};
            res.status(200).render('index.pug',params2);
            }, 2000);
            }, 2000);
        }, 2000);
    }, 1000);
})
// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
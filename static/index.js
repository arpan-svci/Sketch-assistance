const inpfile=document.getElementById("image");
const preview=document.getElementById("image1");
inpfile.addEventListener("change",function(){
    const file=this.files[0];
    if(file){
        const reader=new FileReader();
        reader.addEventListener("load",function(){
            preview.setAttribute("src",this.result);
        });
        reader.readAsDataURL(file);
    }
})
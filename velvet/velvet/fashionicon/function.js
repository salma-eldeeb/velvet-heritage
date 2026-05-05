function showimage (images){
    let imageEle =``;

    for( let i = 0; i<images.length; i++){
        console.log(images[i]);
        imageEle += `

        <div class="card"> <img src="./${images[i]}" alt=""></div>
        
 
        `

    }
    console.log(imageEle);
    return imageEle;
}
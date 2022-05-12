document.querySelector("#submitBioBtn").addEventListener("submit",e=>{
    e.preventDefault();

    console.log("clientside");
    const userObj = {
        name:document.querySelector("#userNameInput").value,
        bio:document.querySelector("#bioInput").value,
        avatar:document.querySelector("#profileAvatar").value,  
        
    }
    fetch("/profile",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("submitUserChanges:" + res);
            location.href = "/profile/-1";
        } else {
            alert("an error occured!")
        }
    })
    console.log(userObj);
})





//Cloudinary Widget

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dgaxfcdjj',
    uploadPreset: 'wbqbxwgu',
    defaultSource: "local",
    sources: [
        "local",
        "url",
        "camera",
        "image_search",
        "google_drive"
    ],
    styles: {
        palette: {
            window: "#151152",
            windowBorder: "#151152",
            tabIcon: "#59C9F1",
            menuIcons: "#59C9F1",
            textDark: "#151152",
            textLight: "#FFFFFF",
            link: "#0078FF",
            action: "#59C9F1",
            inactiveTabIcon: "#FFD921",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#DDA059"
        }
    }
}, (error, result) => {
    if (!error && result && result.event === "success") {
        //result.info.url - grab cloudinary url of the image
        //DELETE CONSOLE LOG LATER
        console.log('Done! Here is the image info: ', result.info);

        document.getElementById('profileAvatar').setAttribute('src', result.info.url);
    }
})

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);

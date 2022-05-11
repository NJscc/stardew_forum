document.querySelector("#submitBioBtn").addEventListener("submit",e=>{
    e.preventDefault();

    const userObj = {
        name:document.querySelector("#userNameInput").value,
        bio:document.querySelector("#bioInput").value,
        avatar:document.querySelector("#userPicture").value,  
        
    }
    fetch("/profile",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("an error occured!")
        }
    })
    console.log(userObj);
})

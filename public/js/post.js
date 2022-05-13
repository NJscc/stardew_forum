document.querySelector("#submitpostBtn").addEventListener("click",e=>{
    console.log("clicked!")
    e.preventDefault();

const postObj = {
    text:document.querySelector("#postText").value,
}
fetch("/api/posts",{
    method:"POST",
    body:JSON.stringify(postObj),
    headers:{
        "Content-Type":"application/json"
    }
}).then(res=>{
    if(res.ok){
       location.reload()
    } else {
        alert("error")
    }
})
})

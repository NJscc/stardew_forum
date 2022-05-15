document.querySelector("#submitPostBtn").addEventListener("click",e=>{
    console.log("clicked!")
    e.preventDefault();
    const id = parseInt(window.location.pathname.split('/')[2])
    console.log(id)
const postObj = {
    text:document.querySelector("#postText").value,
}
fetch(`/api/posts/${id}`,{
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



document.querySelector("#submitTopicBtn").addEventListener("click",e=>{
    console.log("clicked!")
    e.preventDefault();
    const id = parseInt(window.location.pathname.split('/')[2])
    console.log(id)
const topicObj = {
    title:document.querySelector("#topicTitle").value,
    text:document.querySelector("#topicText").value,
}
fetch(`/api/topics/${id}`,{
    method:"POST",
    body:JSON.stringify(topicObj),
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

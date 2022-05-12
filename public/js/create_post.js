document.querySelector("#createPost").addEventListener("click",e=>{
    console.log("clicked!")
    e.preventDefault();
    location.href = "/submitpost"
});
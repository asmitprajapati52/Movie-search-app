let input=document.querySelector("#input");
let addbtn=document.querySelector("#addbtn");
let movie=document.querySelector(".movie");
let plot=document.querySelector("#rating");
let type=document.querySelector("#p2");
let release=document.querySelector("#p3");
let title=document.querySelector("#title");
let img=document.querySelector("#img");
let togglebtn=document.querySelector("#toggle");


const API_KEY= "9ae38af1";


addbtn.addEventListener("click",()=>{
    let moviename=input.value.trim();
    if(!moviename){
        alert("please enter a movie name");
        return;
    }
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${moviename}`)
    .then(res=>res.json())
    .then(data=>{
        title.textContent=data.Title;
        img.src=data.Poster;
        plot.textContent=data.Plot;
        type.textContent= "data type=" + data.Type;
        release.textContent="released date="+ data.Released;
    })
    .catch(err=>{
        console.log(err);
        alert("movie not founded");
    });
});

togglebtn.addEventListener("click",()=>{
    const html=document.documentElement;
    const islight=html.getAttribute("data-theme")==="light";

    if(islight){
        html.dataset.theme="";
        togglebtn.textContent = "🌙";
    }
    else{
        html.dataset.theme="light";
        togglebtn.textContent = "☀️";
    }
});



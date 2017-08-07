// 1. First, find our UL Container
let basicsTarget = document.querySelector(".basics");
let storyTarget = document.querySelector(".story");
let avatarTarget = document.querySelector("figure");
let headTarget = document.querySelector("h1");


function reqListener() {
 let  data = JSON.parse(this.responseText);
  console.log(data);
headTarget.textContent = `${data.name}`;

basicsTarget.innerHTML += `
<h4>Name: </h4><p>${data.name}</p><br>
<h4>Github URL: </h4><a href=${data.html_url}>${data.name}</a><br>
<h4>Email: </h4><p>${data.email}</p><br>
<h4>Company: </h4><a href=${data.company}>${data.company}</a><br>
<h4>Website: </h4><p>${data.blog}</p><br>
`;

storyTarget.innerHTML += `
<p>${data.bio}</p>
`;
avatarTarget.innerHTML+=`
<img src=${data.avatar_url}>`;
};

let req = new XMLHttpRequest();
req.open("GET", "http://192.168.1.12:8000/octocat");
// req.open("GET", "https://api.github.com/users/Cingram82");
req.addEventListener("load", reqListener);
req.send();

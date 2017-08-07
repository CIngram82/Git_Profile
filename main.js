// 1. First, find our UL Container
let basicsTarget = document.querySelector(".basics");
let storyTarget = document.querySelector(".story");
let avatarTarget = document.querySelector("figure");
let headTarget = document.querySelector("h1");
let gitRepoTarget = document.querySelector(".gitRepos")
let nameVal = "Cingram82";



function reqListener() {
  let data = JSON.parse(this.responseText);
  headTarget.textContent = `${data.name}`;

  basicsTarget.innerHTML += `
  <h2>The Basics</h2>
<h4>Name: </h4><p>${data.name}</p><br>
<h4>Github URL: </h4><a href=${data.html_url}>${data.name}</a><br>
<h4>Email: </h4><p>${data.email}</p><br>
<h4>Company: </h4><a href=${data.company}>${data.company}</a><br>
<h4>Website: </h4><p>${data.blog}</p><br>
`;

  storyTarget.innerHTML += `
  <h2>The Story</h2>
<p>${data.bio}</p>
`;
  avatarTarget.innerHTML += `
<img src=${data.avatar_url}>`;
};

function reposListener() {
  let reposData = JSON.parse(this.responseText);
gitRepoTarget.innerHTML += `<h3>User had ${reposData.length} Github Repos`;

  for (var i = 0; i < reposData.length; i++) {
    gitRepoTarget.innerHTML += `
    <a href=${reposData.url}>${reposData[i].name}</a>
    <p>Description: ${reposData.description}</p>
    `
  }
};
  let nameInput = document.getElementById('githubName');
  let signupButton = document.getElementById('signupButton');
  signupButton.addEventListener('click', function() {
    nameVal = nameInput.value;
    gitRepoTarget.innerHTML ='';
    headTarget.textContent = "";
    storyTarget.innerHTML="";
    basicsTarget.innerHTML ="";
    avatarTarget.innerHTML ="";
    req = new XMLHttpRequest();
    // req.open("GET", "http://192.168.1.12:8000/octocat");
    req.open("GET", `https://api.github.com/users/${nameVal}`);
    req.addEventListener("load", reqListener);
    req.send();
    repos = new XMLHttpRequest();
    // req.open("GET", "http://192.168.1.12:8000/octocat");
    repos.open("GET", `https://api.github.com/users/${nameVal}/repos`);
    repos.addEventListener("load", reposListener);
    repos.send();
});
let req = new XMLHttpRequest();
// req.open("GET", "http://192.168.1.12:8000/octocat");
req.open("GET", `https://api.github.com/users/${nameVal}`);
req.addEventListener("load", reqListener);
req.send();

let repos = new XMLHttpRequest();
// req.open("GET", "http://192.168.1.12:8000/octocat");
repos.open("GET", `https://api.github.com/users/${nameVal}/repos`);
repos.addEventListener("load", reposListener);
repos.send();

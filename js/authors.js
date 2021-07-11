let userName = localStorage.getItem("userName");
let email = localStorage.getItem("userEmail");
document.getElementById("name").innerHTML = userName;
document.getElementById("email").innerHTML = email;
getPosts().catch((error) => console.error(error));
async function getPosts() {
  var id = location.search.substring(1);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  );
  const posts = await res.json();

  console.log(posts);
  const div = document.getElementById("posts");
  posts.map((post) => {
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.appendChild(document.createTextNode(post.title));
    p.appendChild(document.createTextNode(post.body));
    div.appendChild(h3);
    div.appendChild(p);
  });
  const a = document.createElement("a");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const p = document.createElement("p");
  p.innerHTML = "Back";
  span.className = "material-icons";
  span.innerHTML = "chevron_left";
  button.type = "button";
  a.setAttribute("href", "./index.html");
  a.appendChild(button);
  button.appendChild(span);
  button.appendChild(p);
  div.appendChild(a);
}

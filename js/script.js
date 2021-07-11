getUsers().catch((error) => console.error(error));

/* store indivual id helper function */

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  /* const setId = (currEmail, currName) => {
    sessionStorage.setItem("email", currEmail);
    sessionStorage.setItem("userName", currName);
    console.log("hey you clicked " + currName);
  }; */

  users.map((user) => {
    const ul = document.getElementById("usersList");
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const div = document.createElement("div");
    const div_2 = document.createElement("div");
    const a = document.createElement("a");
    const button = document.createElement("button");
    li.id = user.id;
    button.appendChild(document.createTextNode("View Profile"));
    a.appendChild(button);
    a.setAttribute("href", `./authors.html?${user.id}`);
    a.target = "_blank";
    div.className = "name-n-email";
    div.appendChild(h3);
    div.appendChild(p);
    div_2.appendChild(span);
    div_2.appendChild(div);
    div_2.className = "prof-con";
    span.appendChild(document.createTextNode("face"));
    span.className = "material-icons";
    h3.appendChild(document.createTextNode(user.name));
    p.appendChild(document.createTextNode(user.email));
    li.appendChild(div_2);
    li.appendChild(a);
    ul.appendChild(li);

    button.addEventListener("click", function () {
      localStorage.setItem("userName", user.name);
      localStorage.setItem("userEmail", user.email);
      window.document.location = `./authors.html?${user.id}`;
    });
  });
}

//Get all products
function getData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error occured");
      }
      return response.json();
    })
    .then((response) => {
      const finalResponseJson = JSON.stringify(response);
      const getDisplay = document.getElementById("get");
      getDisplay.innerHTML = finalResponseJson;
    })
    .catch((err) => {
      console.log(err);
    });
}

//Get a single product
function getSingleData() {
  fetch("https://fakestoreapi.com/products/1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dataJson = JSON.stringify(data);
      document.getElementById("getSingle").innerHTML = dataJson;
    });
}

const form = document.getElementById("form");
const formData = new FormData(form);

//Post
function postData() {
  return fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  postData().then((data) => {
    const dataJson = JSON.stringify(data);
    document.getElementById("post").innerHTML = dataJson;
  });
});

function add() {
  var c = 3;
}
add();
let c = 7;

console.log(c);

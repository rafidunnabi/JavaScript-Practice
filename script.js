//Get all products
const get = document.getElementById("get");
async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  const mappedData = data.map((element) => {
    return element;
  });

  const jsonStringGet = JSON.stringify(mappedData);
  get.innerHTML = jsonStringGet;
}

//Get a single product
const getSingle = document.getElementById("update");
async function getSingleData() {
  try {
    const responseSingleData = await fetch(
      "https://fakestoreapi.com/products/1"
    );
    const singleData = await responseSingleData.json();
    const singleJson = JSON.stringify(singleData);
    getSingle.innerHTML = singleJson;
  } catch (err) {
    console.log(err);
  }
}

//Post
const post = document.getElementById("post");
const form = document.getElementById("form");

async function postData() {
  const formData = new FormData(form);
  try {
    const responsePost = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: formData,
    });
    const responseData = await responsePost.json();
    const responseDataJson = JSON.stringify(responseData);
    return responseDataJson;
  } catch (err) {
    console.log(err);
  }
}
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const finalPostResult = await postData();
  console.log(finalPostResult);
  post.innerHTML = finalPostResult;
});

//Update
const update = document.getElementById("update");
async function updateData() {
  const formData = new FormData(form);
  try {
    const updateData = await fetch("https://fakestoreapi.com/products/1", {
      method: "PUT",
      body: formData,
    });
    console.log(updateData);
    const updateDataResult = await updateData.json();
    console.log(updateDataResult);
    const updateDataResultJson = JSON.stringify(updateDataResult);

    const updateHTML = document.getElementById("update");
    updateHTML.innerHTML = updateDataResultJson;
  } catch (err) {
    console.log(err);
  }
}

//Delete
const deleteDisplay = document.getElementById("delete");
async function deleteData() {
  try {
    const deletedData = await fetch("https://fakestoreapi.com/products/6", {
      method: "DELETE",
    });
    console.log(deletedData);
    const deletedDataObj = await deletedData.json();
    const deletedDataObjJson = JSON.stringify(deletedDataObj);
    return deletedDataObjJson;
  } catch (err) {
    console.log(err);
  }
}

document.getElementById("deleteButton").addEventListener("click", async () => {
  const deletedDataResultObject = await deleteData();
  console.log(deletedDataResultObject);
  deleteDisplay.innerHTML = deletedDataResultObject;
});

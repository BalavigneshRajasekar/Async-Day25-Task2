let input = document.getElementById("Input");
//initially all the below element in block state
let alertDiv = document.getElementById("alert");
let tableDiv = document.getElementById("table");
let spinnerDiv = document.getElementById("spinner");

//The following function is used to Generate the Quotes with user input by Initialize tha API call
function generateQuotes() {
  //This hold The User Input value
  let userInput = input.value;
  //This will check if the user input is less than or equal to 0
  if (userInput <= 0) {
    //This will hide the table and show the alert
    tableDiv.classList.replace("d-block", "d-none");
    alertDiv.classList.replace("d-none", "d-block");
    alertDiv.innerHTML = "Please Enter a Positive Number";
    input.focus();
    input.value = "";
    return;
  }
  //This will execute The actual function
  else {
    //This will hide the table and show the Spinner
    alertDiv.classList.replace("d-block", "d-none");
    spinnerDiv.classList.replace("d-none", "d-block");
    tableDiv.classList.replace("d-block", "d-none");
    let api = new Promise((resolve, reject) => {
      let url = `https://lucifer-quotes.vercel.app/api/quotes/${userInput}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          resolve(data);
          fetchData(api);
        })
        .catch((error) => {
          reject(error);
          fetchData(api);
        });
    });
  }
  input.focus();
  input.value = "";
}

//The following will hep to fetch error and data
function fetchData(api) {
  api.then((data) => {
    //This point we got resolve so here It will hide the Spinner,alert and show the Table
    tableDiv.classList.replace("d-none", "d-block");
    spinnerDiv.classList.replace("d-block", "d-none");
    alertDiv.classList.replace("d-block", "d-none");
    let quotes = [...data];
    let parent = document.getElementById("tbody");
    parent.innerHTML = "";

    quotes.forEach((quote, index) => {
      let child = document.createElement("tr");
      child.innerHTML = ` <td class="py-4 px-3">${index + 1}</td>
              <td class="w-auto over py-4 px-3">
               ${quote.quote}
              </td>
              <td class="py-4 px-3">${quote.author}</td>`;

      parent.appendChild(child);
      child.classList.add("text-center");
    });
  });
  api.catch((error) => {
    //This point we got reject so here It will hide the Table,spinner and show Alert
    alertDiv.classList.replace("d-none", "d-block");
    alertDiv.innerHTML = error.message;
    tableDiv.classList.replace("d-block", "d-none");
    spinnerDiv.classList.replace("d-block", "d-none");
  });
}

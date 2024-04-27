let input = document.getElementById("Input");

//The following function is used to Generate the Quotes with user input by Initialize tha API call
function generateQuotes() {
  //This hold The User Input value
  let userInput = input.value;
  //This will check if the user input is less than or equal to 0
  if (userInput <= 0) {
    alert("plz enter POsitive number");
  }
  //This will execute The actual function
  else {
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
    let quotes = [...data];
    let parent = document.getElementById("tbody");
    parent.innerHTML = "";

    quotes.forEach((quote, index) => {
      let child = document.createElement("tr");
      child.innerHTML = ` <td>${index + 1}</td>
              <td class="w-auto over">
               ${quote.quote}
              </td>
              <td>${quote.author}</td>`;

      parent.appendChild(child);
      child.classList.add("text-center");
    });
  });
  api.catch((error) => {
    console.log(error);
  });
}

// function searchGoogle() {
//     let searchInput = document.getElementById("userinput").value
//     alert(`You searched for:${searchInput}`)
//     window.location.href="https://www.google.com/search?q=" + searchInput;
//     alert("Try again")
// }

// searchGoogle()

// const searchButton = document.getElementsByClassName("search__button");
// const searchInput = document.getElementById("userinput").value;

// searchButton.addEventListener("click", function () {
//   const query = searchInput.value.trim();
//   if (query) {
//     alert(`You searched ${query}`);

//     //    window.location.href =`https:www.google.com/search?q=${encodeURIComponent(query)}`
//   } else {
//     alert("Please enter something in the search inputbox");
//   }
// });

// searchButton.addEventListener("click", (e) => {
//   alert(`You have searched ${searchInput}`);
// });

const searchForInput = document.getElementById("search__button");

//this takes the input value(searchbar content)and
//sends a pop up window on 'keydown' alerting you that
//you've searched 'inputValue'

searchForInput.addEventListener("click", function () {
  const inputValue = document.getElementById("userinput").value;
  alert(`You've searched ${inputValue}`);
  console.log(inputValue);
});

const searchForBar = document.getElementById("userinput");
searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const inputForValue = document.getElementById("input").value;
    alert(`You've searched ${inputForValue}`);
  }
});


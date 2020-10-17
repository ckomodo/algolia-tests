
var placesAutocomplete = places({
  appId: "pl9V85DRXYWS",
  apiKey: "1ed929a198cc650980f6b5e1a8d08bce",
  container: document.querySelector("#address-input"),
});



let searchBtn = $(".searchBtn");
let searchedLocation = $("#address-input");


searchBtn.on("click", function () {
  // grabbing the search input's value using .val() on a click
  // var location = locationEntered.val().trim();
  let userLocation = searchedLocation.val().trim();
  localStorage.setItem("city", userLocation);
  console.table(userLocation);
});

function result() {
  let userCity = localStorage.getItem("city");

  alert("you searched for " + userCity)
}
  result();

// var apiKey = ""
//     var queryURL = "";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
// })

//


//function for algolia functionality

    // function algolia (){
    //   var placesAutocomplete = places({
    //     appId: 'pl9V85DRXYWS',
    //     apiKey: '1ed929a198cc650980f6b5e1a8d08bce',
    //     container: document.querySelector('#address-input')
    //   });
    // }
    // algolia();
  


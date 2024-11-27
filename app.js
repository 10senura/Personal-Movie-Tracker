
let movies = document.getElementById("searchmovie").value;

let res = await fetch('https://dummyapi.online/api/movies')
.then((response) => response.json())
.then((json) => {console.log(json)
  
});
    $.ajax({
      type: "GET",
      url: "https://dummyapi.online/api/movies",
      data: "data",
      dataType: "json",
      success: function (response) {
          console.log(response);
      }
  });
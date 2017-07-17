
// business logic
// 2.) make a constructor
function Vacation(location, note, landmark, weather, timeOfYear) {
  this.firstLocation = location;
  this.firstNote = note;
  this.firstLandmark = landmark;
  this.firstWeather = weather;
  this.firstTimeOfYear = timeOfYear;
}

Vacation.prototype.nextLocation = function() {
  return this.firstLocation;
}


// user interface logic
$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();
// 1.)declairing the input variables
    var inputtedlocation = $("#new-location").val();
    var inputtednotes = $("#new-notes").val();
    var inputtedlandmarks = $("#new-landmarks").val();
    var inputtedweather = $("#new-weathers").val();
    var inputtedtimeOfYear = $("#new-timeOfYears").val();
    // 3.) defining a new variable. the variable newlocation is eqaul to the new object being created using the  vacation constructor
    var newLocation = new Vacation(inputtedlocation, inputtednotes, inputtedlandmarks, inputtedweather, inputtedtimeOfYear);
// 4.)this code adds our new location that we have entered into a hidden form on our page. the location name is added to list.
    $("#spots").append("<li><span class='locationDetails'>" + newLocation.nextLocation() + "</span></li>");
    //  5.) when clicked this code reveals information about the location information you entered in the form
    $(".locationDetails").last().click(function() {
      $("#show-location").show();
      $("#show-location h2").text(newLocation.firstLocation);
      $(".newweather").text(newLocation.firstWeather);
      $(".time").text(newLocation.firstTimeOfYear);
      $(".landmark").text(newLocation.firstLandmark);
      $(".notes").text(newLocation.firstNote);
    });
  });

});

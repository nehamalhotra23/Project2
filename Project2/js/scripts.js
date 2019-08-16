$(document).ready(function() {
  $("#submit").click(function() {
    var first = $("#que1").val();
    var second = $("#que2").val();
    var third = $("#que3").val();
    var four = $("#que4").val();
    var five = $("#que5").val();
    $(".card").hide();
    if (first==="ye" &&  second==="hi" && third==="es" && four==="Fd" && five==="NW") {
      $("#L2").show();
      $("#L4").show();
    } else if (first==="no" && second==="lo" && third==="on" && four==="hd" && five==="OD" {
      $("#L6").show();
      $("#L4").show();
    } else if (first === "no" {
      $("#L1").show();
      $("#L3").show();
    } else if (first === "no"  {
      $("#L5").show();
      $("#L3").show();
    } else  {
      alert ('choose Somthing')
    }
  });


  $("#submit").click(function() {
    $("#text").show();
  });

});

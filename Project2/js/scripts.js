$(document).ready(function() {
  $("#submit").click(function() {
    var first = $("#que1").val();
    var second = $("#que2").val();
    var third = $("#que3").val();
    var four = $("#que4").val();
    var five = $("#que5").val();
    if (first === "ye" && second === "hi" || second === "mo"  && third === "es" && four === "Fd" && five === "NW") {
      $("#L1").show();
      $("#L3").show();
    } else if (first === "no" && second === "mo" || second === "lo"  && third === "on" && four === "hd" && five === "OD") {
      $("#L2").show();
      $("#L4").show();
    } else if (first === "no" && second === "lo" || second === "na" && third === "es" && four === "Fd" && five === "NW") {
      $("#L5").show();
      $("#L6").show();
    } else {
      alert('please select one of the options above. Thank You!')
    }


  });
});

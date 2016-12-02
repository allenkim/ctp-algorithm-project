$.post("/results").done(function(data){
  $("#results").html(data);
});

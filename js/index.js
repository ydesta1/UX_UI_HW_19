console.log("your index.js file loaded correctly!");

$("button").click(function(){
    console.log("you clicked a button");
    
    $(".fadeMe").fadeToggle("slow");
  });
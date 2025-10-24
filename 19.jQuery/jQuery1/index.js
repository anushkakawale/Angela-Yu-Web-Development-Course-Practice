// $("button").click(function(){
//     $("h1").css("color", "purple");
// });

// for(var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }

// $("button").keydown(function(event){
//     $("h1").text(event.key);
// });

$("h1").on("mouseover",function(){
    $("h1").css("color","blue");
});
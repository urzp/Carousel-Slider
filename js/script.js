function create_controls(){
    
   $(".wrap_img").after("<div class='panel'></div>");
    $(".panel").append("<div class='controls'></div>"); 
    
    var count_img = $(".wrap_img img").length;
    for (var i=0; i<count_img; i++){
         $(".controls").append("<div id='" + i + "'></div>");
    }
    
    $(".controls").css("width" , (count_img * 40 - 10) + "px");
    
};

function contr_img(){
   $(".controls").on('click',"div",function(){
       $(".controls div").css("background","#fff")
       $(this).css("background", "#7b0046");
       
       $( $(".wrap_img img").get(0)).effect( "drop", "left","slow" );
       
   }) ;        
}




$('document').ready(function(){
     
    create_controls();
    contr_img()
    
   /*$($(".wrap_img img").get(0)).css("display","block"); */
    

   
    
    
})
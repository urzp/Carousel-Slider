

function create_controls(){
    
   $(".wrap_img").after("<div class='panel'></div>");
    $(".panel").append("<div class='controls'></div>"); 
    
    var count_img = $(".wrap_img img").length;
    for (var i=0; i<count_img; i++){
         $(".controls").append("<div id='" + i + "'></div>");
    }
    
    $(".controls").css("width" , (count_img * 40 - 10) + "px");
    
};


function get_visible_img(){
    for (var i=0; i<$(".wrap_img img").length; i++){
         if ("block"==$($(".wrap_img img").get(i)).css("display")){
             return i;
         };   
    }
}

function next_img(){
    $(".wrap_img").on("click", function(){
        var index = get_visible_img();
        
        if ( get_visible_img() >= $(".wrap_img img").length-1 ){
            $( $(".wrap_img img").get( 0 ) ).show( "drop", {direction: "right"},500); 
            $( $(".wrap_img img").get( index ) ).effect( "drop",500 ); 
        }else{
            $( $(".wrap_img img").get( index + 1 ) ).show( "drop", {direction: "right"},500);
            $( $(".wrap_img img").get( index ) ).effect( "drop",500 );  
        }
    });
}


function contr_img(){
    $(".controls").on('click',"div",function(){
        $(".controls div").css("background","#fff")
        $(this).css("background", "#7b0046");     
   }) ;        
}




$('document').ready(function(){
     
    create_controls();
    contr_img();
    
    
    
    $($(".wrap_img img").get(0)).css("display","block"); 
    
     next_img();
   
    
    
})


function create_controls(){
    

    $(".img_solid").after("<div class='panel'></div>");
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
        if ( index >= $(".wrap_img img").length-1 ){
            $( $(".wrap_img img").get( 0 ) ).show( "drop", {direction: "right"},500); 
            $( $(".wrap_img img").get( index ) ).effect( "drop",500 ); 
            set_indicator(0);
        }else{
            
            $( $(".wrap_img img").get( index + 1 ) ).show( "drop", {direction: "right"},500);
            $( $(".wrap_img img").get( index ) ).effect( "drop",500 );  
            set_indicator(index + 1);
        }
        
        
    });
    
}

function set_indicator(index){
    index = "#"+index;
    $(".controls div").css("background","#fff");
    $(index).css("background", "#7b0046");  
};


function set_img(){
    $(".controls").on('click',"div",function(){
        var new_index = $(this).attr("id");
        var old_index = get_visible_img();
        $( $(".wrap_img img").get(new_index) ).show( "drop", {direction: "right"},500);
        $( $(".wrap_img img").get(old_index) ).effect( "drop",500 );  
        $(".controls div").css("background","#fff");
        $(this).css("background", "#7b0046");     
   }) ;        
}




$('document').ready(function(){
     
    create_controls();
    set_img();

    $($(".wrap_img img").get(0)).css("display","block"); 
    
    next_img();
    set_indicator();
    
    
})
$('document').ready(function(){
     
    var div_img = $(".wrap_img img").get(0);
    
   $(div_img).css("display","block"); 
    
   $(".controls").on('click',"div",function(){
       
       $(".controls div").css("background","#fff")
       $(this).css("background", "#7b0046");
   }) ;             
})
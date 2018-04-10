$(document).ready(function(){
  
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  //console.log(count);
  
  
  $("#reset").hide();
  
  $("#start").click(function(){
    
    var counter = setInterval(timer, 1000);
    count*=60;
    breakTime*=60;
    
    function timer(){
      
      $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2, h1, h3, a").hide();
      $("#timeType").show();
      $("#timeType").html("ワーク時間: ");
      count -=1;
      if(count===0){
        
        //CHANGE audio
        buzzer.play();
        clearInterval(counter);
        
        var startBreak= setInterval(breakTimer, 1000);
        $("#num").hide();
        
      }
      
      if(count%60>=10){
         
        $("#num").html(Math.floor(count/60) +":"+count%60);
         
         }
      
      else {
        
        $("#num").html(Math.floor(count/60)+":"+"0"+count%60)
        
      }
      
      function breakTimer(){
      
      $("#timeType").html("休憩時間: ");
      $("#breakNum").show();
      $("#timeType").show();
      breakTime -=1;
      if(breakTime===0) {
        clearInterval(startBreak);
        buzzer.play();
        $("#reset").show();
        $("#breakNum, #timeType, #title1").hide();
      }     
        
        if(breakTime%60>=10){
         $("#breakNum").html(Math.floor(breakTime/60) +":"+breakTime%60);
         
         }
      
      else {       $("#breakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60)
        
      }
        
      }
      
    }
   
  });
  
  $("#reset").click(function(){
    count=5;
    breakTime=5;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2, h1, h3, h4, a").show();
    $("#reset, #timeType").hide();
    
  });
  
  $("#minus5Clock").click(function(){
    if(count>5) {
          count -=5;
      
    $("#num").html(count);
    //console.log(count);
      
    }
    
  });
  
  $("#add5Clock").click(function(){
    
          count +=5;
    $("#num").html(count);
    
  });
  
    $("#minus5Break").click(function(){
    if(breakTime>5) {
          breakTime -=5;
      
    $("#breakNum").html(breakTime);
      
    }
    
  });
  
  $("#add5Break").click(function(){
    
          breakTime +=5;
    $("#breakNum").html(breakTime);
    
  });
  
});
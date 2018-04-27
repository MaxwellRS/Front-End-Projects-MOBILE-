$(document).ready(function(){
  
  $('.text_box').hide();
  $('.text_box_top').hide();
  
$('#clearInput').click(function(){
  
  //clear input and all other fields
  
  $('input').val('');
  $('li').html("");
  $('.image').html("");
  $('div').removeClass('box');
  $('div').removeClass('box2');
  $('.text_box').hide();
  $('.text_box_top').hide();
  
});  
  
$('#pairGen').click(function(){    
  
  $('li').html("");
  $('.image').html("");
  $('div').removeClass('box');
  $('div').removeClass('box2');
  $('.text_box').show();
  $('.text_box_top').show();
  
  function getFood() {
    
    var style= $("input").val().toLowerCase();
    
  if (style==="amber ale" || style==="blonde ale" || style==="cream ale" || style==="helles lager" || style==="kolsch" || style==="lager" || style==="pilsner") {
    
    $('.food_result1').html('<span>1</span> - <a href="#food1_img"><u>grains</u></a>');
    $('.food_description1').html("Grains like quinoa, wild and short-grain rice are easy on the palate. They also offer balance to hop flavors.");
    $('.recommendation1').html("<b>recommended dishes:</b> risotto (pictured), soba noodles, saffron rice, polenta with roasted tomatoes");
    $('.pizza1').html("<b>pizza picks:</b> sausage & peppers");
    $('#food_info1').addClass('box');
    
    $('#food1_img').html('<img src="https://image.ibb.co/gxaVYc/photo_1461009683693_342af2f2d6ce.jpg" class="img_box"/>');
    
  } if (style==="bock" || style==="brown ale" || style==="doppelbock" || style==="marzen" || style==="maibock" || style==="dunkelweizen" || style==="hefeweizen" || style==="weizenbock" || style==="witbier") {
    
    $('.food_result2').html('<span>2</span> - <a href="#food2_img"><u>beans & legumes</u></a>');
    $('.food_description2').html("Beans such as chickpeas, lentils, fava, and soy add richness while balancing salt and acidity.");
    $('.recommendation2').html("<b>recommended dishes:</b> halibut with pesto and canellini beans (pictured), edamame, white bean salad, hummus");
    $('.pizza2').html("<b>pizza picks:</b> classic new haven");
    $('#food_info2').addClass('box');
    
    $('#food2_img').html('<img src="https://image.ibb.co/gbSimx/29188_halibut_watercress_pesto.jpg" class="img_box"/>');
    
  } if (style==="dunkelweizen" || style==="hefeweizen" || style==="saison" || style==="spiced beer" || style==="herbed beer" || style==="witbier" || style==="pale wheat ale" || style==="gruit" || style==="strong golden ale" || style==="belgian strong ale" || style==="ne ipa" || style==="new england ipa") {
    
    $('.food_result3').html('<span>3</span> - <a href="#food3_img"><u>shellfish</u></a>');
    $('.food_description3').html("The natural salty and sweet flavors of shellfish like clams, scallops, lobster, and crab are amplified.");
    $('.recommendation3').html("<b>recommended dishes:</b> shrimp scampi (pictured), pan-roasted scallops, Maine lobster, snow crab");
    $('.pizza3').html("<b>pizza picks:</b> chicken alfredo");
    $('#food_info3').addClass('box');
    
    $('#food3_img').html('<img src="https://image.ibb.co/hiZURx/28_COOKING_CLASSIC_SHRIMP_SCAMPI1_video_Sixteen_By_Nine_Jumbo1600.jpg" class="img_box"/>');
    
  } if (style==="berliner weisse" || style==="gose" || style==="gueuze" || style==="lambic" || style==="sour ale" || style==="wild ale") {
    
    $('.food_result4').html('<span>4</span> - <a href="#food4_img"><u>rich meats and root vegetables</u></a>');
    $('.food_description4').html("Sour and funky flavors showcase the umami of foods like parsnips, carrots, beef, and lamb.");
    $('.recommendation4').html("<b>recommended dishes:</b> grilled ribeye steak with broccoli (pictured), roast lamb, beef stew, Japanese nikujaga");
    $('.pizza4').html("<b>pizza picks:</b> seafood");
    $('#food_info4').addClass('box');
    
    $('#food4_img').html('<img src="https://image.ibb.co/fmNYmx/photo_1432139509613_5c4255815697.jpg" class="img_box"/>');
    
  } if (style==="alt" || style==="american ipa" || style==="brown ale" || style==="belgian ipa" || style==="california common" || style==="english ipa" || style==="ipa" || style==="pale ale") {
    
    $('.food_result5').html('<span>5</span> - <a href="#food5_img"><u>game birds and grains</u></a>');
    $('.food_description5').html("Foods like duck, quail, quinoa, and farro complement the roastiness of beer, while fat cuts down on hop bitterness.");
    $('.recommendation5').html("<b>recommended dishes:</b> roast duck (pictured), pan-roasted chicken, chicken quinoa fried rice, roast quail");
    $('.pizza5').html("<b>pizza picks:</b> margherita");
    $('#food_info5').addClass('box');
    
    $('#food5_img').html('<img src="https://image.ibb.co/bWAazH/Christmas_Roast_Duck.jpg" class="img_box"/>');
    
  } if (style==="black ipa" || style==="dark ale" || style==="imperial double/black" || style==="imperial stout" || style==="oatmeal stout" || style==="porter" || style==="russian imperial stout" || style==="rye" || style==="rye ipa" || style==="stout") {
    
    $('.food_result6').html('<span>6</span> - <a href="#food6_img"><u>fats</u></a>');
    $('.food_description6').html("Beer cuts through butter, olive oil, pork fat, and dairy, balancing strong flavors and allowing for a complex finish.");
    $('.recommendation6').html("<b>recommended dishes:</b> crispy pork belly (pictured), honey mustard baked salmon, karage, tonkatsu");
    $('.pizza6').html("<b>pizza picks:</b> meat lovers");
    $('#food_info6').addClass('box');
    
    $('#food6_img').html('<img src="https://image.ibb.co/m3v8KH/Crispy_Pork_Belly_featured.jpg" class="img_box"/>');
    
  } if (style==="dry stout" || style==="imperial stout" || style==="irish dry stout" || style==="oatmeal stout" || style==="porter" || style==="rauch" || style==="russian imperial stout" || style==="stout" || style==="schwarzbier") {
    
    $('.food_result7').html('<span>7</span> - <a href="#food7_img"><u>grilled vegetables</u></a>');
    $('.food_description7').html("Brings out umami flavors, as well as balances richness and sweetness.");
    $('.recommendation7').html("<b>recommended dishes:</b> stuffed portobello mushrooms (pictured), swordfish/tuna kebobs, grilled bell peppers and onions");
    $('#food_info7').addClass('box');
    $('.pizza7').html("<b>pizza picks:</b> mushroom & spinach");
    
    $('#food7_img').html('<img src="https://image.ibb.co/fUV3mx/BFV7241_Garlic_Parmesan_Stuffed_Mushrooms_fb1080.jpg" class="img_box"/>');
    
  } if (style==="belgian tripel" || style==="belgian strong ale" || style==="belgian quad" || style==="pale ale" || style==="strong ale" || style==="strong golden ale" || style==="quad" || style==="tripel" || style==="english ipa") {
    
    $('.food_result8').html('<span>8</span> - <a href="#food8_img"><u>cheese</u></a>');
    $('.food_description8').html("Cuts through the fat of cheese while complementing its natural flavor and texture.");
    $('.recommendation8').html("<b>recommended dishes:</b> fruity & spicy - brie and fruit (pictured), malty & sweet - gouda, hoppy & bitter - aged cheddar, dark & roasty - blue, crisp & clean - mozzarella");
    $('#food_info8').addClass('box');
    $('.pizza8').html("<b>pizza picks:</b> sausage, pepper, & onion");
    
    $('#food8_img').html('<img src="https://image.ibb.co/bDLfYc/1253_Cheese_Board_7903.jpg" class="img_box"/>');
    
  } if (style==="bock" || style==="dry stout" || style==="irish dry stout" || style==="doppelbock" || style==="milk stout" || style==="malt liquor" || style==="porter" || style==="scotch ale" || style==="stout" || style==="strong dark ale") {
    
    $('.food_result9').html('<span>9</span> - <a href="#food9_img"><u>braised meats & chocolate</u></a>');
    $('.food_description9').html("Enhances and showcases roasted flavors.");
    $('.recommendation9').html("<b>recommended dishes:</b> chocolate bread pudding (pictured), beef short-rib, pork shoulder, >55% cacao chocolate");
    $('#food_info9').addClass('box');
    $('.pizza9').html("<b>pizza picks:</b> bbq chicken");
    
    $('#food9_img').html('<img src="https://image.ibb.co/c9y66x/Chocolate_Bread_Pudding_865x626.jpg" class="img_box"/>');
    
  } if (style==="american imperial ipa" || style==="american double ipa" || style==="belgian dubbel" || style==="double ipa" || style==="dubbel" || style==="fruit beer" || style==="mead" || style==="imperial ipa" || style ==="old ale" || style==="traditional ale" || style ==="gruit" || style==="triple ipa") {
    
    $('.food_result10').html('<span>10</span> - <a href="#food10_img"><u>pork</u></a>');
    $('.food_description10').html("Pork fat matches the intensity of strong beer flavors.");
    $('.recommendation10').html("<b>recommended dishes:</b> bratwurst (pictured), pork tenderloin, sausage with balsamic onions, pork chops with apple relish");
    $('#food_info10').addClass('box');
    $('.pizza10').html("<b>pizza picks:</b> hawaiian");
    
    $('#food10_img').html('<img src="https://image.ibb.co/d8JpRx/83_Bratwurst_Cabbage_copy.jpg" class="img_box"/>');
    
  } if (style==="barleywine" || style==="gose" || style==="lambic" || style==="wild ale" || style==="berliner weisse" || style==="gueuze" || style==="milkshake ipa") {
    
    $('.food_result11').html('<span>11</span> - <a href="#food11_img"><u>creamy desserts</u></a>');
    $('.food_description11').html("Balances rich flavors and cuts down on excessive sweetness.");
    $('.recommendation11').html("<b>recommended dishes:</b> butterscotch mousse (pictured), cheesecake, ice cream, creme brulee");
    $('#food_info11').addClass('box');
    $('.pizza11').html("<b>pizza picks:</b> white pizza");
    
    $('#food11_img').html('<img src="https://image.ibb.co/nb1nDc/60f40638_bcfc_4e0d_8386_0ed05ae25487.jpg" class="img_box"/>');
    
  }
    
    return "food function is working";
    
  }
  
  //match input: style with glass type
  
function getPair(){  
    
  var style = $("input").val().toLowerCase();
  
  if (style==="bock" || style==="gueuze" || style==="lambic" || style==="helles lager" || style==="schwarzbier" || style==="weizenbock") {
    $('.result1').html('<span>1</span> - <a href="#fluteImg"><u>flute</u></a>');
    $('.description1').html("Aroma is showcased with a flute glass, carbonation is also more prominent.");
    $('#info1').addClass('box');
    
    $('#fluteImg').html('<img src="https://image.ibb.co/i4VHz7/0017841_zwiesel_1872_enoteca_champagne_glass_flute.jpg" class="img_box"/>');
    
  } if (style==="belgian ipa" || style==="belgian strong dark ale" || style==="berliner weisse" || style==="dubbel" || style==="tripel" || style==="quad" || style==="belgian dubbel" || style==="belgian tripel" || style==="belgian quad"){
    $('.result2').html('<span>2</span> - <a href="#gobletImg"><u>goblet</u></a>');
    $('.description2').html("Wide-lipped, showcases and sustains head.");
    $('#info2').addClass('box');
    
    $('#gobletImg').html('<img src="https://image.ibb.co/jveXXS/paris_wine_goblet_8oz_glass1.jpg" class="img_box"/>');
    
  } if (style==="amber ale" || style==="blonde ale" || style==="brown ale" || style==="american ipa" || style==="pale ale" || style==="pale wheat ale" || style==="porter" || style==="stout" || style==="strong ale" || style==="bock" || style==="cream ale" || style==="doppelbock" || style==="english ipa" || style==="fruit beer" || style==="pilsner" || style==="herbed beer" || style==="dry stout" || style ==="irish dry stout" || style==="milk stout" || style==="oatmeal stout" || style==="rauch" || style==="witbier" || style ==="marzen" || style==="mead" || style ==="old ale" || style==="traditional ale" || style==="gruit") {
    $('.result3').html('<span>3</span> - <a href="#mugImg"><u>mug</u></a>');
    $('.description3').html("Keeps beer slightly cooler. Easy to clink glasses with friends, holds more milliliters.");
    $('#info3').addClass('box');
    
    $('#mugImg').html('<img src="https://image.ibb.co/h3YsXS/5223_9910_11711.jpg" class="img_box"/>');
    
  } if (style==="lager" || style==="malt liquor" || style==="bock" || style==="california common" || style==="pilsner" || style==="doppelbock" || style==="helles lager"|| style==="maibock" || style==="schwarzbier" || style==="witbier") {
    $('.result4').html('<span>4</span> - <a href="#pilsnerImg"><u>pilsner</u></a>');
    $('.description4').html("Shows off the color, head, and effervescence.");
    $('#info4').addClass('box');
    
    $('#pilsnerImg').html('<img src="https://image.ibb.co/jBYRsS/13_oz_polycarbonate_pilsner_glass.jpg" class="img_box"/>');
    
  } if (style==="barleywine" || style==="american double ipa" || style==="american imperial ipa" || style==="imperial stout" || style==="russian imperial stout" || style==="strong ale" || style==="strong dark ale" || style==="gueuze" || style==="lambic" || style==="quad" || style==="russain imperial stout" || style==="dark ale" || style==="scotch ale" || style==="tripel" || style==="double ipa" || style==="imperial ipa" || style==="imperial/double black" || style ==="triple ipa" || style==="belgian tripel" || style==="belgian quad") {
    $('.result5').html('<span>5</span> - <a href="#snifterImg"><u>snifter</u></a>');
    $('.description5').html("Greatly enhances aromas.");
    $('#info5').addClass('box');
    
    $('#snifterImg').html('<img src="https://image.ibb.co/nDygRn/brandy_snifter.jpg" class="img_box"/>');
    
  } if (style ==="alt" || style==="bock" || style==="gose" || style==="gueuze" || style==="kolsch" || style==="lambic" || style==="rauch" || style==="rye") {
    $('.result6').html('<span>6</span> - <a href="#stangeImg"><u>stange</u></a>');
    $('.description6').html("Consolidates aromas and hop/malt characters.")
    $('#info6').addClass('box');
    
    $('#stangeImg').html('<img src="https://image.ibb.co/gr11Rn/presenter_presenter_Pub_Stange_web.jpg" class="img_box"/>');
    
  } if (style==="american double ipa" || style==="american imperial ipa" || style==="dark ale" || style==="belgian ipa" || style==="strong dark ale" || style==="gueuze" || style==="lambic" || style==="quad" || style==="saison" || style==="scotch ale" || style==="double ipa" || style==="imperial ipa" || style ==="triple ipa" || style==="belgian quad" || style==="ne ipa" || style==="new england ipa" || style==="milkshake ipa") {
    $('.result7').html('<span>7</span> - <a href="#tulipImg"><u>tulip</u></a>');
    $('.description7').html("Creates a favorable head, enhances aromas and effervescence.");
    $('#info7').addClass('box');
    
    $('#tulipImg').html('<img src="https://image.ibb.co/g79cz7/7e5eb57324cfb77b862e31fb36639e6a.jpg" class="img_box"/>');
    
  } if (style==="pale wheat ale" || style==="dunkelweizen" || style==="gose" || style==="hefeweizen" || style==="weizenbock") {
    $('.result8').html('<span>8</span> - <a href="#weizenImg"><u>weizen</u></a>');
    $('.description8').html("Holds in phenol and banana aromas and accentuates head.");
    $('#info8').addClass('box');
    
    $('#weizenImg').html('<img src="https://image.ibb.co/h20Hz7/weizen_beer_glass_41.jpg" class="img_box"/>');
    
  } if (style==="wild ale" || style==="dark ale" || style==="strong dark ale" || style==="belgian ipa" || style==="saison" || style==="black ipa") {
    $('.result9').html('<span>9</span> - <a href="#wineImg"><u>oversized wine glass</u></a>');
    $('.description9').html("Enhances the nose. Swirl away!");
    $('#info9').addClass('box');
    
    $('#wineImg').html('<img src="https://image.ibb.co/nJaT6n/SProdukt_104487943.jpg" class="img_box"/>');
    
  } if (style ==="alt" || style ==="american ipa" || style ==="amber ale" || style ==="american imperial ipa" || style ==="american double ipa" || style ==="barleywine" || style ==="belgian ipa" || style ==="belgian dubbel" || style ==="belgian tripel" || style ==="belgian quad" || style ==="black ipa" || style ==="blonde ale" || style ==="belgian strong ale" || style ==="bock" || style ==="brown ale" || style ==="berliner weisse" || style ==="cream ale" || style ==="california common" || style ==="dark ale" || style ==="dunkelweizen" || style ==="double ipa" || style ==="dry stout" || style ==="dubbel" || style ==="doppelbock" || style ==="english ipa" || style ==="fruit beer" || style ==="gose" || style ==="gueuze" || style ==="hefeweizen" || style ==="helles lager" || style ==="herbed beer" || style==="ipa" || style==="imperial ipa" || style ==="irish dry stout" || style ==="imperial double/black" || style ==="imperial stout" || style ==="kolsch" || style ==="lager" || style ==="lambic" || style ==="marzen" || style ==="milk stout" || style ==="milkshake ipa" || style ==="malt liquor" || style ==="ne ipa" || style ==="new england ipa" || style ==="oatmeal stout" || style ==="pilsner" || style ==="pale ale" || style ==="pale wheat ale" || style ==="porter" || style ==="quad" || style ==="rauch" || style ==="rye" || style ==="rye ipa" || style ==="russian imperial stout" || style==="scotch ale" || style ==="stout" || style ==="schwarzbier" || style ==="saison" || style ==="strong ale" || style ==="strong dark ale" || style ==="strong golden ale" || style ==="spiced beer" || style ==="sour ale" || style ==="tripel" || style ==="triple ipa" || style ==="weizenbock" || style ==="witbier" || style ==="wild ale" || style==="mead" || style ==="old ale" || style==="traditional ale"|| style==="maibock" || style ==="gruit") {
  
  $('.result10').html('<span>10</span> - <a href="#shakerImg"><u>shaker</u></a>');
  $('.description10').html("Doesn't really enhance or negate much, but you've probably got one.");
  $('#info10').addClass('box2');
  
  $('#shakerImg').html('<img src="https://image.ibb.co/czmqK7/pint_glass.jpg" class="img_box"/>');
  
}
  
  else {
    
    //error message
    
    $('.errorMark').html('<span>!</span> - <u>HUH?</u>');
    $('.errorText').html("Not sure about that one...check the spelling or alternate name and try again?");
    $('#error').addClass('box2');
    
    $('#error_img').html('<img src="http://1.bp.blogspot.com/-uQ16l5LzkHY/Vq-Uk-8xN1I/AAAAAAAAAbQ/CII-xso3_YQ/s1600/maxresdefault.jpg" class="img_box"/>')
  }
  
  
  return "function is working";
  
}
               console.log(getFood());
               console.log(getPair());   
               console.log($("input").val());
  
});
  
  //enter key = search
  
  $('#beerStyle').keypress(function(e){
    if(e.which==13){
      $('#pairGen').click();
    }
  })
  
});
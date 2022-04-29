widnow.addEventListner("load", function ()
{
  let counter= 0;
  
  function buttonClicked(){
      counter++;

    let clickCounterElement = document.getElementById("clickcounter");

      clickcounterElement.InnerHTML = "Clicked " + counter + " times."
  }

  let clickButtonElement = document.getElementById("clickcounter");
    clickButtonElement.addEventListner("Click", buttonClicked);

  
});
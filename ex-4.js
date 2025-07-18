//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
lightBulbStatus = "Broken";

//Start coding here
switch (lightBulbStatus) {
    case "On":
        console.log("Light bulb is on.");
      break;
    case "Off":
        console.log("Light bulb is off.");
      break;
    case "Broken":
        console.log("Light bulb is Broken.");
      break;
    default:
        console.log("Please choose the correct input (On/Off/Broken)");
      
  }
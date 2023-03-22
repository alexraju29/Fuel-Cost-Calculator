// Calculate Button
var value = 1
function calculate(){

    var price = document.getElementById("price").value
    var distance = document.getElementById("distance").value
    var mileage = document.getElementById('mileage').value
    
    // For Empty Entry 
    if (price == "" || distance == "" || mileage == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Values!',
          })
          return
    }
    
    document.getElementById("result").style.display = "block";
    pricef=parseFloat(price)
    distancef=parseFloat(distance)
    mileagef=parseFloat(mileage)
    if (value == 1){
        var result = distancef/mileagef*pricef;
        var finalresult = "You need "+result.toFixed(2)+" ₹";
        document.getElementById("result").innerHTML = finalresult;
    }
    else if(value == 2){
        var result = distancef*mileagef/pricef;
        var finalresult = "You can travel "+result.toFixed(2)+" kms";
        document.getElementById("result").innerHTML = finalresult;
    }
    else{
      var result = distancef*pricef/mileagef;
        var finalresult = "You have the Mileage "+result.toFixed(2)+" km/L";
        document.getElementById("result").innerHTML = finalresult;
    }

    

}

// Clear Button
function clearScreen(){

    document.getElementById("price").value = "";
    document.getElementById("distance").value = "";
    document.getElementById('mileage').value = "";
    document.getElementById("result").style.display = "none";
}


function costClick(){
  clearScreen()
  const cost_element = document.getElementById("cost-button");
  const distance_element = document.getElementById("distance-button");
  const mileage_element = document.getElementById("mileage-button");
  if (cost_element.className == "btn btn-outline-primary") {
    cost_element.className = "btn btn-primary";
    distance_element.className = "btn btn-outline-primary";
    mileage_element.className = "btn btn-outline-primary";
  } else {
    cost_element.className = "btn btn-primary";
    distance_element.className = "btn btn-outline-primary"
    mileage_element.className = "btn btn-outline-primary";
  }
  document.getElementById("main-heading").innerHTML = "Fuel Cost Calculator";
  document.getElementById("main-image-id").src = "assets/images/carbon-calculator.gif";
  document.getElementById("label-id").innerHTML = "Enter Distance to cover (km)";
  document.getElementById("label-for-mileage").innerHTML = "Enter Mileage (km/L)";
  value = 1

  

}

function distanceClick(){
    clearScreen()
    const cost_element = document.getElementById("cost-button");
    const distance_element = document.getElementById("distance-button");
    const mileage_element = document.getElementById("mileage-button")
  if (distance_element.className == "btn btn-outline-primary") {
    distance_element.className = "btn btn-primary";
    cost_element.className = "btn btn-outline-primary"
    mileage_element.className = "btn btn-outline-primary";
  } else {
    distance_element.className = "btn btn-primary";
    cost_element.className = "btn btn-outline-primary"
    mileage_element.className = "btn btn-outline-primary";
  }
  document.getElementById("main-heading").innerHTML = "Distance Calculator";
  document.getElementById("main-image-id").src = "assets/images/distance.gif";
  document.getElementById("label-id").innerHTML = "Enter Amount you have (₹)";
  document.getElementById("label-for-mileage").innerHTML = "Enter Mileage (km/L)";

  value = 2

}

function mileageClick(){
    clearScreen()
    const cost_element = document.getElementById("cost-button");
    const distance_element = document.getElementById("distance-button");
    const mileage_element = document.getElementById("mileage-button")
  if (mileage_element.className == "btn btn-outline-primary") {
    mileage_element.className = "btn btn-primary";
    cost_element.className = "btn btn-outline-primary"
    distance_element.className = "btn btn-outline-primary";

  } else {
    mileage_element.className = "btn btn-primary";
    cost_element.className = "btn btn-outline-primary"
    distance_element.className = "btn btn-outline-primary";

  }
  document.getElementById("main-heading").innerHTML = "Mileage Calculator";
  document.getElementById("main-image-id").src = "assets/images/mileage.gif";
  document.getElementById("label-id").innerHTML = "Enter Distance Traveled (km)";
  document.getElementById("label-for-mileage").innerHTML = "Enter Amount of Fuel filled (₹)";
  value = 3

}
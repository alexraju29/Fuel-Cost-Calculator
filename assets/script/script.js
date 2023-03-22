// Calculate Button
var cost = true
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
    if (cost){
        var result = distancef/mileagef*pricef;
        var finalresult = "You need "+result.toFixed(2)+"₹";
        document.getElementById("result").innerHTML = finalresult;
    }
    else{
        var result = distancef*mileagef/pricef;
        var finalresult = "You can travel "+result.toFixed(2)+"kms";
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
  const element = document.getElementById("cost-button");
  const d_element = document.getElementById("distance-button");
  if (element.className == "btn btn-outline-primary") {
    element.className = "btn btn-primary";
    d_element.className = "btn btn-outline-primary"
  } else {
    element.className = "btn btn-primary";
    d_element.className = "btn btn-outline-primary"
  }
  document.getElementById("main-heading").innerHTML = "Fuel Cost Calculator";
  document.getElementById("main-image-id").src = "assets/images/carbon-calculator.gif";
  document.getElementById("label-id").innerHTML = "Enter Distance (km)";
  cost = true

  

}

function distanceClick(){
    clearScreen()
    const c_element = document.getElementById("cost-button");
    const element = document.getElementById("distance-button");
  if (element.className == "btn btn-outline-primary") {
    element.className = "btn btn-primary";
    c_element.className = "btn btn-outline-primary"
  } else {
    element.className = "btn btn-primary";
    c_element.className = "btn btn-outline-primary"
  }
  document.getElementById("main-heading").innerHTML = "Distance Calculator";
  document.getElementById("main-image-id").src = "assets/images/distance.gif";
  document.getElementById("label-id").innerHTML = "Enter Amount you have (₹)";
  cost = false

}
// Calculate Button
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
    var result = distancef/mileagef*pricef

    var finalresult = "You need "+result.toFixed(2)+"₹";
    document.getElementById("result").innerHTML = finalresult;

}

// Clear Button
function clearScreen(){

    document.getElementById("price").value = "";
    document.getElementById("distance").value = "";
    document.getElementById('mileage').value = "";
    document.getElementById("result").style.display = "none";
}
function calculate(){

    var price = document.getElementById("price").value
    var distance = document.getElementById("distance").value
    var milage = document.getElementById('milage').value

    if (price == "" || distance == "" || milage == ""){
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
    milagef=parseFloat(milage)
    var result = distancef/milagef*pricef

    var finalresult = "You need "+result.toFixed(2)+"₹";
    document.getElementById("result").innerHTML = finalresult;

}

function clearScreen(){

    document.getElementById("price").value = "";
    document.getElementById("distance").value = "";
    document.getElementById('milage').value = "";
    document.getElementById("result").style.display = "none";
}
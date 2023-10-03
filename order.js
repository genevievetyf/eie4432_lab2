function calculatePrice() {
    var selectedSize = document.querySelector('input[name="size"]:checked').value;
    var selectedDrink = document.getElementById("drink").value;
    var price = 0;

    if(selectedDrink === "bubble-milktea") {
        if(selectedSize === "smallSize") {
            price += 25;
        } else if(selectedSize === "mediumSize") {
            price += 29;
        } else if(selectedSize === "largeSize") {
            price += 32;
        }
    } else if(selectedDrink === "iced-latte") {
        if(selectedSize === "smallSize") {
            price += 23;
        } else if(selectedSize === "mediumSize") {
            price += 27;
        } else if(selectedSize === "largeSize") {
            price += 30;
        }
    } else if(selectedDrink === "pineapple-juice") {
        if(selectedSize === "smallSize") {
            price += 24;
        } else if(selectedSize === "mediumSize") {
            price += 28;
        } else if(selectedSize === "largeSize") {
            price += 31;
        }
    } else if(selectedDrink === "Please Select") {
        alert("Please select a drink.");
        location.reload();
    }
    document.getElementById("price").textContent = price;
}

function validateForm(){
    var name = document.getElementById("name").value.trim();
    var selectedDrink = document.getElementById("drink").value;
    var selectedSize = document.querySelector('input[name="size"]:checked');
    var selectedIce = document.querySelector('input[name="ice"]:checked');
    var selectedSweetness = document.querySelector('input[name="sweetness"]:checked');

    if(name === "") {
        alert("Please enter your name.");
        return false;
    }
    if(selectedDrink === "Please Select") {
        alert("Please select a drink.");
        return false;
    }
    if(selectedSize == null) {
        alert("Please select a size.");
        return false;
    }
    if(selectedIce  == null) {
        alert("Please select an ice level.");
        return false;
    }
    if(selectedSweetness  == null) {
        alert("Please select a sweetness level.");
        return false;
    }
    return true;
}

function placeOrder(event) {
    event.preventDefault();
    
    if(validateForm()) {
        var name = document.getElementById("name").value.trim();
        var selectedDrink = document.getElementById("drink").value;
        var selectedSize = document.querySelector('input[name="size"]:checked').value;
        var selectedIce = document.querySelector('input[name="ice"]:checked').value;
        var selectedSweetness = document.querySelector('input[name="sweetness"]:checked').value;

        var orderData = [name, selectedDrink, selectedSize, selectedIce, selectedSweetness, selectedSweetness];
        localStorage.setItem("orders", orderData);
        alert("Order placed successfully! Thank you for your order.")

        document.getElementById("form").reset();
        document.getElementById("price").textContent = 0;
    }
}

function resetForm() {
    document.getElementById("form").reset();
    document.getElementById("price").textContent = 0;
}
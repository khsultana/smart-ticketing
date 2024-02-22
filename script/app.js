document.getElementById("applyCouponBtn").addEventListener("click", function () {
    var couponCode = document.getElementById("couponCodeInput").value.trim();

    if (isValidCouponCode(couponCode)) {
        applyDiscount();
        document.getElementById("couponResult").textContent = "Coupon code applied successfully!";
    } else {
        document.getElementById("couponResult").textContent = "Invalid coupon code. Please try again.";
    }
});

function isValidCouponCode(couponCode) {

    const validCodes = ["NEW15", "Couple20"];
    return validCodes.includes(couponCode.toUpperCase());
}

function applyDiscount() {
    console.log("Discount has been applied.");
}

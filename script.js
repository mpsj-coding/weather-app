window.onload = function() {
    var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var currentDate = new Date();
    var day = currentDate.getDate();
    var monthIndex = currentDate.getMonth(); // 0-based index
    var year = currentDate.getFullYear();

    var formattedDate = months[monthIndex] + " " + day + " " + year;
    document.getElementById("datetime").textContent = formattedDate;
};
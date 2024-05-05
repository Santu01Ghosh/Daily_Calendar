const date = document.querySelector(".date");
        const day = document.querySelector(".day");
        const month = document.querySelector(".month");
        const year = document.querySelector(".year");

        var current_today = new Date();

        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        date.innerHTML = (current_today.getDate()<10?"0":"")+current_today.getDate();
        day.innerHTML = weekdays[current_today.getDay()];
        month.innerHTML = months[current_today.getMonth()];
        year.innerHTML = current_today.getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-info");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const info = this.nextElementSibling;
            if (info.style.display === "none" || info.style.display === "") {
                info.style.display = "block";
                this.textContent = "Skrýt informace";
            } else {
                info.style.display = "none";
                this.textContent = "Více informací";
            }
        });
    });
});

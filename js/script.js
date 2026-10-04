/* =========================================================
   SIMO KMB
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= CART ================= */

    let cartCount = Number(localStorage.getItem("simoCartCount")) || 0;

    const cartCounter = document.querySelector(".cart-button small");

    function updateCartCounter() {
        if (cartCounter) {
            cartCounter.textContent = cartCount;
        }
    }

    updateCartCounter();


    /* ================= ADD TO CART ================= */

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {

        button.addEventListener("click", () => {

            cartCount++;

            localStorage.setItem(
                "simoCartCount",
                cartCount
            );

            updateCartCounter();

            const originalText = button.textContent;

            button.textContent = "تمت الإضافة ✓";

            button.classList.add("added");

            setTimeout(() => {

                button.textContent = originalText;

                button.classList.remove("added");

            }, 1500);

        });

    });


    /* ================= SCROLL TO TOP ================= */

    const scrollButton = document.createElement("button");

    scrollButton.className = "scroll-top";

    scrollButton.innerHTML = "↑";

    scrollButton.setAttribute(
        "aria-label",
        "العودة إلى الأعلى"
    );

    document.body.appendChild(scrollButton);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollButton.classList.add("show");

        } else {

            scrollButton.classList.remove("show");

        }

    });


    scrollButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ================= IMAGE LOADING ================= */

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("load", () => {

            image.classList.add("loaded");

        });

    });


    /* ================= PRODUCT LINKS ================= */

    const productCards = document.querySelectorAll(
        ".product-card"
    );

    productCards.forEach(card => {

        card.addEventListener("click", event => {

            const clickedElement = event.target;

            if (
                clickedElement.closest("a") ||
                clickedElement.closest("button")
            ) {
                return;
            }

            const productLink = card.querySelector(
                ".product-image"
            );

            if (productLink) {
                productLink.click();
            }

        });

    });


    /* ================= ACTIVE NAVIGATION ================= */

    const currentPage =
        window.location.pathname.split("/").pop();

    const navigationLinks =
        document.querySelectorAll(".navbar a");

    navigationLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href")
                .split("/")
                .pop();

        if (linkPage === currentPage) {

            navigationLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }

    });


    /* ================= SMOOTH ANCHOR LINKS ================= */

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetID =
                link.getAttribute("href");

            const target =
                document.querySelector(targetID);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ================= INSTAGRAM ================= */

    const instagramLinks =
        document.querySelectorAll(
            'a[href*="instagram.com"]'
        );

    instagramLinks.forEach(link => {

        link.setAttribute(
            "target",
            "_blank"
        );

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* ================= CONSOLE ================= */

    console.log(
        "SIMO KMB website loaded successfully."
    );

});

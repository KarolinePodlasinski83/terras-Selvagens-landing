document.addEventListener("DOMContentLoaded", () => {

    /* ========= MODAL ========= */

    const open = document.getElementById("openTrailer");
    const close = document.getElementById("closeTrailer");
    const modal = document.getElementById("trailerModal");
    const iframe = document.getElementById("trailerIframe");

    const video = "https://www.youtube.com/embed/43R9l7EkJwE?autoplay=1&rel=0";

    if (open && modal && iframe) {
        open.addEventListener("click", e => {
            e.preventDefault();
            modal.classList.add("active");
            iframe.src = video;
        });
    }

    if (close && modal && iframe) {
        close.addEventListener("click", () => {
            modal.classList.remove("active");
            iframe.src = "";
        });
    }


    /* ========= CARROSSEL ========= */

    const container = document.getElementById("carouselContainer");
    const slides = document.querySelectorAll(".carousel__item");

    let index = 0;

    if (container && slides.length) {
        setInterval(() => {
            index = (index + 1) % slides.length;
            container.style.transform = `translateX(-${index * 100}%)`;
        }, 3500);
    }


    /* ========= ABAS — HOVER + CLICK FIXO ========= */

    const buttons = document.querySelectorAll(".shows__tabs__button");
    const lists = document.querySelectorAll(".shows__list");

    let lockedTab = null;

    function hideAll() {
        lists.forEach(list =>
            list.classList.remove("shows__list--is-active")
        );
        buttons.forEach(btn =>
            btn.classList.remove("shows__tabs__button--is-active")
        );
    }

    if (buttons.length && lists.length) {

        buttons.forEach(button => {
            const target = button.dataset.tabButton;

            // Hover → preview
            button.addEventListener("mouseenter", () => {
                if (lockedTab) return;

                hideAll();

                const list = document.querySelector(`[data-tab-id="${target}"]`);
                if (list) list.classList.add("shows__list--is-active");

                button.classList.add("shows__tabs__button--is-active");
            });

            // Sai do hover → fecha se não estiver travado
            button.addEventListener("mouseleave", () => {
                if (!lockedTab) hideAll();
            });

            // Click → trava
            button.addEventListener("click", () => {
                hideAll();

                const list = document.querySelector(`[data-tab-id="${target}"]`);
                if (list) list.classList.add("shows__list--is-active");

                button.classList.add("shows__tabs__button--is-active");
                lockedTab = target;
            });
        });

    }


    /* ========= FAQ ========= */

    const faqQuestions = document.querySelectorAll("[data-faq-question]");

    if (faqQuestions.length) {
        faqQuestions.forEach(q => {
            q.addEventListener("click", () => {
                q.closest(".faq__question__item")
                ?.classList.toggle("faq__question__item--is-open");
            });
        });
    }

});











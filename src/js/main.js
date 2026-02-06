document.addEventListener("DOMContentLoaded", function () {
    
    // --- LÓGICA DO MODAL ---
    const openTrailer = document.getElementById("openTrailer");
    const closeTrailer = document.getElementById("closeTrailer");
    const modal = document.getElementById("trailerModal");
    const iframe = document.getElementById("trailerIframe");
    const trailerURL = "https://www.youtube.com/embed/43R9l7EkJwE?autoplay=1";

    if (openTrailer && modal && iframe) {
        openTrailer.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("active");
            iframe.src = trailerURL;
        });

        // Verificação extra para o botão de fechar
        if (closeTrailer) {
            closeTrailer.addEventListener("click", () => {
                modal.classList.remove("active");
                iframe.src = "";
            });
        }

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
                iframe.src = "";
            }
        });
    }

    // --- LÓGICA DO CARROSSEL ---
    const container = document.getElementById("carouselContainer");
    const items = document.querySelectorAll(".carousel__item");
    let index = 0;

    function startCarousel() {
        setInterval(() => {
            index++;
            
            if (index >= items.length) {
                index = 0; 
            }

            // CORREÇÃO: Usamos a largura do primeiro item para o cálculo ser exato
            // Isso evita erros caso o container tenha padding ou gap.
            const itemWidth = items[0].offsetWidth;
            
            container.scrollTo({
                left: itemWidth * index,
                behavior: 'smooth'
            });
        }, 3000); 
    }

    // Só inicia se os elementos realmente existirem na página
    if (container && items.length > 0) {
        startCarousel();
    }
});





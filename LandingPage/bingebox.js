let faqs = document.querySelectorAll(".questions");
faqs.forEach((faq) =>{
        faq.addEventListener("click", () => {
        // const icon = faq.children;
        const answer = faq.nextElementSibling;
        answer.classList.toggle("active");
        faq.classList.toggle("active");

    })
})

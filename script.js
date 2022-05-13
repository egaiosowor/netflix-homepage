//constant storing a HTML collection of all elements with the class faq-item-question
const faqQuestion = document.querySelectorAll(".faq-item-question");


//Looping through the above HTML collection 
faqQuestion.forEach(element => {
    //Adding an event listener to each of the elements
    element.addEventListener("click", () => {
        //adding/removing the is-expanded class to the faq-item-answer to expand/collapse it when the relative faq-item-question is clicked
        element.nextElementSibling.classList.toggle("is-expanded");
        element.firstElementChild.classList.toggle("rotate");
    });
});
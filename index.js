// "https://www.omdbapi.com/?apikey=84a3a969&s=fast"

// SEARCH BUTTON ADDED TO SEARCH BAR

const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('#search__button')

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value
    window.location.href = `search.html?search=${encodeURIComponent(searchTerm)}`;
})

function openFaq(event){
    const open = event.target
    const faqItem = open.parentElement.parentElement
    const answer  = faqItem.querySelector('.faq__answer')
    answer.style.display = 'block'
    
}



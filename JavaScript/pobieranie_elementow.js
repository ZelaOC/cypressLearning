// Pobieranie elementów za pomocą java script ze stron
// W narzędziach deva z poziomu przeglądarki możemy inicalizować zmienne które odwołują się do elementów na stronie
// // W zależności do jakiego elementu odwołujemy się używamy
// let firstElement = document.getElementById - pobranie elementu o danym ID
// const secondElement = document.getElementsByClassName - pobranie elementu z danej klasy

const a = document.getElementsByTagName('a')
const searchInput = document.getElementById('search_query_top')
const emailInput = document.getElementsByName('email')

// document querry selector - pobieranie elementu w przypadku kiedy nie ma id albo unikalnego odniesienia 
// div#htmlcontent_top li:nth-child(1) img - odwłoanie sie do wystapienia elementu pierwszego

const firstImg = document.querySelector('div#htmlcontent_top li:nth-child(1) img')
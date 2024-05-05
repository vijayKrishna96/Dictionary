const form = document.getElementById('form')
const here = document.getElementById('here')
const definition = document.getElementById('definition')

form,addEventListener('submit', (event)=>{
    event.preventDefault();

    const word = form['word'].value;

    here.innerHTML = word;

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
    .then((response) => response.json())
    .then((data) => definition.innerHTML = (data[0].meanings[0].definition[0].definition))
    .catch(error => console.log(error))
})
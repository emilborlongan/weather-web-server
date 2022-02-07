console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const para1 = document.getElementById('p1')
const para2 = document.getElementById('p2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    para1.textContent = "Loading"
    para2.textContent = ''

    const location = searchTerm.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) =>{
        response.json().then((data)=>{
            if(data.error){
               para1.textContent = data.error
            }
            else{
                para1.textContent = data.location
                para2.textContent = data.forecast
            }
        })
    })
})
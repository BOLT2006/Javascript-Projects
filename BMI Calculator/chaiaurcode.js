const form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const height =parseInt( document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const  result = document.querySelector('#results')
    
    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = "please give valid height"
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "please give valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }
})

const buscaBtn = document.querySelector(".buscaBtn")
const sortNumbers = []

buscaBtn.addEventListener('click', function() {
  const min = parseInt(document.querySelector(".min").value)
  const max = parseInt(document.querySelector(".max").value)

  let result 
  do { result = Math.floor(Math.random() * (max - min + 1)) + min
    
  } while ( (sortNumbers.includes(result)))

  sortNumbers.push(result)
  
  if (isNaN(result))
  result = 'Valor invalido'

  document.querySelector("#result").textContent = result
  
})





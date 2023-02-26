/*
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
*/
  
function toggleMode() {
  const html = document.documentElement 
  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } 
  else {
    html.classList.add("light")
  }

  const img = document.querySelector ("#perfil img")
 
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarlightmode.png")

  } 
  else {
    img.setAttribute("src", "./assets/avatardarkmode.png")
  }

  const alt = document.querySelector ("#perfil")
  
  if (html.classList.contains("light")) {
      img.setAttribute(
        "alt",
        "Ingrite tirando foto com o celular de frente ao espelho, está usando oculos de grau e roupa preta, cor de fundo gradiente entre rosa,azul e roxo"
      )
  }
  else {
     img.setAttribute(
       "alt",
       "Ingrite tirando foto com o celular de frente ao espelho, está usando oculos de grau, cropped preto e calça jeans,cor de fundo gradiente laranja"
     )
  }
}
// Write your code here!
const element = document.getElementById("main")
element.remove("main")

const newHeader = document.createElement("h1")
newHeader.setAttribute("id","victory")
newHeader.textContent = "Tirsa is the champion"
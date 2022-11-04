function createGame(playr1, hour, playr2) {
  return `
  <li>
    <img src="./assets/icon-${playr1}.svg" alt="${playr1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${playr2}.svg" alt="${playr2}">
  </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "camaroon"))

var classesBg = ["yellow", "blue", "green"]
function sorteia(arr) {
  var rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}

document.querySelector("button").addEventListener("click", function () {
  var classeBg = sorteia(classesBg)
  var elemento = document.querySelector("body")
  elemento.className = classeBg
})

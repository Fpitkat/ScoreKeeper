const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
}

function updateScores(player, oppenent) {
  if (!isgameOver) {
    player.score += 1
  }
  if (player.score === winningScore) {
    isgameOver = true
    player.display.classList.add('has-text-success')
    oppenent.display.classList.add('has-text-danger')
    player.button.disabled = true
    oppenent.button.disabled = true
  }
  player.display.innerText = player.score
}

let winningScore = 3
const reset = document.querySelector('#reset')
let isgameOver = false
const winningScoreSelect = document.querySelector('#playto')

p1.button.addEventListener('click', function () {
  updateScores(p1, p2)
  console.log(p1)
})

p2.button.addEventListener('click', function () {
  updateScores(p2, p1)
  console.log(p2)
})

reset.addEventListener('click', resetGame)

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value)
  resetGame()
})

function resetGame() {
  for (let p of [p1, p2]) {
    p.score = 0
    p.display.textContent = 0
    p.display.classList.remove('has-text-success', 'has-text-danger')
    p.button.disabled = false
  }
}

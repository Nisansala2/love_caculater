function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const theirName = document.getElementById("theirName").value.trim();
  const result = document.getElementById("result");

  if (yourName === "" || theirName === "") {
    result.textContent = "Please enter both names!";
    result.style.color = "red";
    return;
  }

  const loveScore = Math.floor(Math.random() * 100) + 1;

  result.textContent = `${yourName} ❤️ ${theirName} = ${loveScore}% love!`;

  if (loveScore > 80) {
    result.textContent += " 💕 Perfect Match!";
  } else if (loveScore > 50) {
    result.textContent += " 💞 Pretty Good!";
  } else {
    result.textContent += " 💔 Needs more bonding!";
  }
}


const encrypt = () => {
  const input = inputEl.value;

  const chars = [];
  let shiftBy = 0;
  for(let i = 0; i < input.length; i++) {
    chars.push(String.fromCharCode(input.charCodeAt(i) + shiftBy));
    shiftBy += 1;
  }
  
  outputEl.innerText = chars.join("");
}

const decrypt = () => {
  const input = inputEl.value;
  
  const chars = [];
  let shiftBy = 0;
  for(let i = 0; i < input.length; i++) {
    chars.push(String.fromCharCode(input.charCodeAt(i) - shiftBy));
    shiftBy += 1;
  }
  
  outputEl.innerText = chars.join("");
}

const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const decryptBtn = document.getElementById("decrypt");
const encryptBtn = document.getElementById("encrypt");
decryptBtn.addEventListener("click", decrypt);
encryptBtn.addEventListener("click", encrypt);
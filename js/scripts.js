// Seleção
const generatePasswordButton = document.querySelector("#gerador-senha");
const generatePasswordElement = document.querySelector("#senha-gerada");

// Funções

const getLetraMinuscula = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetraMaiuscula = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const symbols = "(){}[]=<>!@#$%&*/.,+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const senhaGerada = (
  getLetraMinuscula,
  getLetraMaiuscula,
  getNumber,
  getSymbol
) => {
  let password = "";

  const passwordTamanho = 10;

  const generators = [
    getLetraMaiuscula,
    getLetraMinuscula,
    getNumber,
    getSymbol,
  ];

  for (i = 0; i < passwordTamanho; i = i + 4) {
    generators.forEach(() => {
      const valorAleatorio =
        generators[Math.floor(Math.random() * generators.length)]();
        password += valorAleatorio;
    });
    }
    password = password.slice(0, passwordTamanho);
    generatePasswordElement.style.display = "block";
    generatePasswordElement.querySelector("h4").innerHTML = `${password}`;
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
  senhaGerada(getLetraMaiuscula, getLetraMinuscula, getNumber, getSymbol);
});

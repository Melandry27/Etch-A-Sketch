let size = 32;

const clear = () => {
  const cell = document.getElementsByClassName("cell");
  for (let i = 0; i < cell.length; i++) {
    cell[i].style.backgroundColor = "white";
  }
};

const deleteAdd = () => {
  console.log("je rentre dans deleteADD");
  const cell = document.getElementsByClassName("cell");
  while (cell.length > 0) {
    cell[0].parentNode.removeChild(cell[0]);
  }
};

const coalClear = () => clear();

const setSize = (param) => {
  size = param;
};

const openPrompt = () => {
  const taille = prompt("Quel taille souhaite tu (entre 16 et 64)");
  if (taille < 16) {
    alert("La valeur entrée et plus petite que 16");
  } else if (taille > 64) {
    alert("La valeur entrée et plus grande que 64");
  } else if (isNaN(taille)) {
    alert("Il faut rentre uniquement que des chiffres");
  } else {
    deleteAdd();
    setSize(taille);
    add();
    clear();
  }
};

let color = "#606060";

const editColor = (a) => {
  color = a;
};

const add = () => {
  let grid = document.querySelector("#grid");

  grid.style.setProperty("--n", size);

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", (e) => {
      e.target.setAttribute("style", `background-color: ${color}`);
    });

    grid.appendChild(div);
  }
};

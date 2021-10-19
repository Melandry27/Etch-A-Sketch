// create the 256 div
/*const add = () => {
  for (let i = 0; i < 256; i++) {
    const element = document.createElement("div");
    element.id = i;
    element.setAttribute("onmouseover", "changeColor(this.id)");
    element.style.alignContent = "stretch";
    element.style.display = "flex";
    element.style.margin = "0px 0px 0px 0px";
    element.style.backgroundColor = "white";
    element.style.height = "25px";
    element.style.width = "25px";
    element.style.border = "1px black solid";
    document.getElementById("main").appendChild(element);
  }
};*/

const add = () => {
  for (let i = 0; i < 256; i++) {
    const element = document.createElement("div");
    element.id = i;
    element.setAttribute("onmouseover", "changeColor(this.id)");
    element.style.alignContent = "stretch";
    element.style.display = "flex";
    element.style.margin = "0px 0px 0px 0px";
    element.style.backgroundColor = "white";
    element.style.height = "25px";
    element.style.width = "25px";
    element.style.border = "1px black solid";
    document.getElementById("main").appendChild(element);
  }
};

const changeColor = (obj) => {
  const max = 255;
  //get the id of the elem on wich mouseOver
  const elem = document.getElementById(obj);

  for (let i = 0; i < max; i++) {
    //generate 3 number in range of 0-256 for the color rgb
    const result1 = Math.floor(Math.random() * max);
    const result2 = Math.floor(Math.random() * max);
    const result3 = Math.floor(Math.random() * max);

    elem.style.backgroundColor = `rgb(${result1},${result2},${result3})`;
  }
};

const openPrompt = () => {
  const taille = prompt("Quel taille souhaite tu (entre 32-64)");
  if (taille < 32) {
    alert("La valeur entrée et plus petite que 32");
  } else if (taille > 64) {
    alert("La valeur entrée et plus grande que 64");
  } else if (isNaN(taille)) {
    alert("Rentre uniquement des chiffres cousin");
  } else {
    alert("It's all good ");
  }
};

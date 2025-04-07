let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let totalValueDisplay = document.getElementById("total-value");
let totalStatsDisplay = document.getElementById("total-stats");

let totalValue = 0;
let totalAD = 0;
let totalAP = 0;
let totalArmor = 0;
let totalMR = 0;

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target; // The dragged item
    let itemValue = parseInt(selected.getAttribute("data-value"));
    let itemAD = parseInt(selected.getAttribute("data-ad"));
    let itemAP = parseInt(selected.getAttribute("data-ap"));
    let itemArmor = parseInt(selected.getAttribute("data-armor"));
    let itemMR = parseInt(selected.getAttribute("data-mr"));

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", function (e) {
      e.preventDefault();
      rightBox.appendChild(selected);

      totalValue += itemValue;
      totalAD += itemAD;
      totalAP += itemAP;
      totalArmor += itemArmor;
      totalMR += itemMR;

      updateTotalStats();

      selected = null;
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", function (e) {
      e.preventDefault();
      leftBox.appendChild(selected);

      totalValue -= itemValue;
      totalAD -= itemAD;
      totalAP -= itemAP;
      totalArmor -= itemArmor;
      totalMR -= itemMR;

      updateTotalStats();

      selected = null;
    });
  });
}

function updateTotalStats() {
  totalValueDisplay.textContent = `Total Value: $${totalValue}`;
  totalStatsDisplay.innerHTML = `
    <p>AD: ${totalAD}</p>
    <p>AP: ${totalAP}</p>
    <p>Armor: ${totalArmor}</p>
    <p>MR: ${totalMR}</p>
  `;
}

const images = document.querySelectorAll(".list img");

images.forEach((img) => { 
  img.draggable = false;
});

const addPatron = document.querySelector("#addPatron"); //addPatron button
const removePatron = document.querySelector("#removePatron"); //removePatron Button
const reset = document.querySelector("#reset"); //reset button
const totalPatronCount = document.querySelector("#totalPatronCount"); //span with the patronCount
const getWarning = document.querySelector("#warning"); // the span with the warning label that is currently hidden
let totalPatrons = 0;
//reset total count
reset.addEventListener("click", (e) => {
  totalPatrons = 0;
  totalPatronCount.innerHTML = "0";
  totalPatronCount.style.color = "black";
  getWarning.style.visibility = "hidden";
});

addPatron.addEventListener("click", (e) => {
  totalPatrons = totalPatrons + 1;
  totalPatronCount.innerHTML = totalPatrons;
  totalPatronColorChange(totalPatronCount);
});

removePatron.addEventListener("click", (e) => {
  totalPatrons = totalPatrons - 1; //removing the patrons entered in the store
  if (totalPatrons < 0) {
    totalPatrons = 0;
    totalPatronCount.innerHTML = totalPatrons; //reseting the count to 0
  } else {
    totalPatronCount.innerHTML = totalPatrons;
  }
  totalPatronColorChange(totalPatronCount);
});

const totalPatronColorChange = function (totalPatronCount) {
  if (totalPatrons >= 5) {
    totalPatronCount.style.color = "#6874E8";
    if (totalPatrons > 20) {
      totalPatronCount.style.color = "red";
      getWarning.style.color = "red";
      getWarning.style.visibility = "visible";
    } else {
      getWarning.style.visibility = "hidden";
    }
  } else {
    getWarning.style.visibility = "hidden";
    totalPatronCount.style.color = "black";
  }
};

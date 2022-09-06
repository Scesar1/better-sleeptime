const colors = ["eee2df","eed7c5","c89f9c","c97c5d","b36a5e", "eee2df"];

function handleOnClickNow() {
  let output = document.querySelector(".output");
  output.style.display = "block";

  let hours = document.getElementById("hours");
  hours.innerHTML = "";

  let now = new Date();
  // allow 14 minutes to fall sleep!
  now.setMinutes(now.getMinutes() + 14);

  // calculate sleep cycles!
  for (let i = 1; i <= 6; i++) {
    now.setMinutes(now.getMinutes() + 90);
    let element = document.createElement('div');
    element.innerText = now.toLocaleTimeString("en-US", { timeStyle: "short" });
    element.style.color = colors[i - 1];
    hours.appendChild(element);

  } 
}

function handleOnClickCalculate() {
  let output = document.querySelector(".outputCalc");
  output.style.display = "block";

  let hours = document.getElementById("hours2");
  hours.innerHTML = "";

  let selectedHours = document.getElementById("selectHours").value;
  let selectedMinutes = document.getElementById("selectMinutes").value;
  let selectedTime = document.getElementById("selectTime");

  let timeVal = selectedTime.options[selectedTime.selectedIndex].text;

  let time = new Date();
  if (timeVal === "PM") {
    selectedHours += 12;
  }
  time.setHours(selectedHours - 9);
  time.setMinutes(selectedMinutes);
  
  // calculate sleep cycles!
  for (let i = 1; i <= 4; i++) {
    let element = document.createElement('div');
    let cycleNumber = 7 - i;
    let sleepHours = cycleConverter(cycleNumber);
    element.innerText = time.toLocaleTimeString("en-US", { timeStyle: "short" }) + " For " 
      + cycleNumber + " Cycles - " + sleepHours + " Hours of Sleep";
    element.style.color = colors[i - 1];
    hours.appendChild(element);
    time.setMinutes(time.getMinutes() + 90);
  } 
}

const cycleConverter = (cycle) => {
  return (cycle * 90) / 60;
}
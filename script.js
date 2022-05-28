// let y = 16;
// const a = (y /= 3);
// document.write(a);

// const button = document.querySelector("input");
// const paragraph = document.querySelector("p");

// button.addEventListener("click", updateButton);

// function updateButton() {
//   if (button.value === "Запустить ПК") {
//     button.value = "Выключить ПК";
//     paragraph.textContent = "ПК запущен!";
//   } else {
//     button.value = "Запустить ПК";
//     paragraph.textContent = "ПК выключен.";
//   }
// }

// document.getElementById("submit").onclick = function () {
//   document.getElementById("table").style.display = "block";

//   let table = document.getElementById("table");
//   let row = table.insertRow(-1);
//   let date = row.insertCell(0);
//   let desc = row.insertCell(1);
//   let amt = row.insertCell(2);
//   date.innerHTML = document.getElementById("date").value;
//   desc.innerHTML = document.getElementById("desc").value;
//   amt.innerHTML = document.getElementById("amount").value;

//   return false;
// };

let users = [
  {
    name: "Имя",
    group: "1 группа",
    points: "",
  },
  {
    name: "name2",
    surname: "surname2",
    patronymic: "patronymic2",
  },
  {
    name: "name3",
    surname: "surname3",
    patronymic: "patronymic3",
  },
];

let table = document.getElementById("table");

for (let user of users) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerHTML = user.name;
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerHTML = user.surname;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerHTML = user.patronymic;
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td3.innerHTML = user.patronymic;
  tr.appendChild(td4);

  table.appendChild(tr);
}

let tds = document.querySelectorAll("#table td");

for (let td of tds) {
  td.innerHTML = "";
}

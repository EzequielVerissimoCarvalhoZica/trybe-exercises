function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function allDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let days = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = dezDaysList[index];
    li.className = 'day';
    days.appendChild(li);
    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      li.className = 'holiday';
    } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      li.className = 'friday';
    } else if (dezDaysList[index] === 25) {
      li.className = 'holiday friday';
    }
  }
}
allDays();



function areaButton(str) {
  let button = document.createElement('button');
  let div = document.querySelector('.buttons-container');
  button.innerText = str;
  button.className = 'btn-holiday';
  div.appendChild(button);
}
areaButton("Feriados")


let buttonCl = document.querySelector('.btn-holiday')
let = holiday = document.querySelectorAll('.holiday');
function holidayButton() {
  
  for (let color of holiday) {
    if (color.style.backgroundColor !== 'green') {
      color.style.backgroundColor = 'green';
    } else {
      color.style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}
buttonCl.addEventListener('click', holidayButton);
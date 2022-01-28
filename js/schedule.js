var schedule = {
  monday: [
    {
      name: "Музыка с мамой",
      age: "1-2 года",
      time: "12:00 - 13:00",
      ageValue: "1-2",
      type: "music"
    },
    {
      name: "Музыка с мамой",
      age: "2-3 года",
      time: "13:00 - 14:00",
      ageValue: "2-3",
      type: "music"
    },
    {
      name: "Почемучки: комплексные развивающие занятия",
      age: "3-4 года",
      time: "13:00 - 14:00",
      ageValue: "3-4",
      type: "educational"
    },
  ],
  tuesday: [
    {
      name: "Ментальная арифметика",
      age: "4-5 года",
      time: "13:00 - 14:00",
      ageValue: "4-5",
      type: "arithmetic"
    },
    {
      name: "Творчество",
      age: "4-5 года",
      time: "13:00 - 14:00",
      ageValue: "4-5",
      type: "creation"
    },
    {
      name: "Рисование",
      age: "6-7 года",
      time: "13:00 - 14:00",
      ageValue: "6-7",
      type: "painting"
    }
  ],
  wednesday: [
    {
      name: "Рисование",
      age: "5-6 года",
      time: "13:00 - 14:00",
      ageValue: "5-6",
      type: "painting"
    }
  ],
  thursday: [
    {
      name: "Подготовка к школе",
      age: "6-7 года",
      time: "13:00 - 14:00",
      ageValue: "6-7",
      type: "before-school"
    }
  ],
  friday: [
    {
      name: "Скорочтение",
      age: "7-12 года",
      time: "13:00 - 14:00",
      ageValue: "7-12",
      type: "reading"
    }
  ],
  saturday: []
};

var filters = [];

var inputs = document.querySelectorAll(".schedule__checkbox-input");

var addInputChangeHandler = function (input) {
  input.addEventListener("change", function () {
    if (input.checked) {
      filters.push(input.value);
    } else {
      filters.splice(filters.indexOf(input.value), 1);
    }
    scheduleReload();
  });
};

for (var i = 0; i < inputs.length; i++) {
  addInputChangeHandler(inputs[i]);
}

var cellTemplate = document.querySelector("template").content.querySelector(".schedule__cell");

var scheduleReload = function () {
  var columns = document.querySelectorAll(".schedule__timetable-column");
  for (var i = 0; i < columns.length; i++) {
    while (columns[i].firstChild) {
      columns[i].removeChild(columns[i].firstChild);
    }
  }
};

var cellRender = function (lesson) {
  var cell = cellTemplate.cloneNode(true);
  cell.querySelector(".schedule__lesson-name").textContent = lesson.name;
  cell.querySelector(".schedule__age-value").textContent = lesson.age;
  cell.querySelector(".schedule__time").textContent = lesson.time;
  return cell;
};

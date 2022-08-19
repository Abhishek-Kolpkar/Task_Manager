let popupScreen = document.querySelector(".popup-box");
let createTaskBtn = document.querySelector(".create-task-btn");
let closeBtn = document.querySelector(".close-btn");
let doneBtn = document.querySelector(".done-btn");
let navBtns = document.querySelectorAll(".btn");
let taskScreen = document.querySelector(".task-screen");
let showAllBtn = document.querySelector(".screen1");
let redColorScreen = document.querySelector(".screen2");
let yellowColorScreen = document.querySelector(".screen3");
let blueColorScreen = document.querySelector(".screen4");
let blackColorScreen = document.querySelector(".screen5");
let checkedBoxScreen = document.querySelector(".screen6");

createTaskBtn.addEventListener("click", () => {
  popupScreen.classList.add("displayBlock");
  taskScreen.classList.add("blurBackground");
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("displayBlock");
  taskScreen.classList.remove("blurBackground");
});

let clicked = navBtns[0];
for (let i = 0; i < navBtns.length; i++) {
  for (let j = 0; j < navBtns.length; j++) {
    if (navBtns[j].classList.contains("border")) {
      clicked = navBtns[j];
    }
  }
  navBtns[i].addEventListener("click", () => {
    clicked.classList.remove("border");
    navBtns[i].classList.add("border");
    clicked = navBtns[i];
  });
}

doneBtn.disabled = true;
let colorSelect = document.getElementsByClassName("colors");
let clicked2 = colorSelect[0];
for (let i = 0; i < colorSelect.length; i++) {
  for (let j = 0; j < colorSelect.length; j++) {
    if (colorSelect[j].classList.contains("border")) {
      clicked2 = colorSelect[j];
    }
  }
  colorSelect[i].addEventListener("click", () => {
    clicked2.classList.remove("border");
    colorSelect[i].classList.add("border");
    clicked2 = colorSelect[i];
    doneBtn.disabled = false;
    let colorCss = window
      .getComputedStyle(colorSelect[i])
      .getPropertyValue("background-color");
    doneBtn.style.backgroundColor = colorCss;
  });
}

doneBtn.addEventListener("click", () => {
  let taskBox = document.createElement("div");
  taskBox.classList.add("task-box");
  taskScreen.append(taskBox);

  let topBorder = document.createElement("div");
  topBorder.classList.add("top-border");
  topBorder.style.backgroundColor = doneBtn.style.backgroundColor;
  taskBox.appendChild(topBorder);

  let inputText = document.createElement("div");
  inputText.setAttribute("class", "input-text");
  inputText.textContent = input.value;
  taskBox.appendChild(inputText);

  let icons = document.createElement("div");
  icons.setAttribute("class", "icons");
  taskBox.append(icons);

  let actionIcons = document.createElement("div");
  actionIcons.classList.add("action-icons", "visibilityHide");
  icons.append(actionIcons);

  let check = document.createElement("i");
  check.setAttribute("id", "check");
  check.classList.add("fa-solid", "fa-check");
  actionIcons.append(check);

  check.addEventListener("click", () => {
    taskBox.classList.add("displayNone");
    taskBox.classList.add("checkedItems");
    check.style.color = "white";
  });

  checkedBoxScreen.addEventListener("click", () => {
    if (taskBox.classList.contains("checkedItems")) {
      taskBox.classList.remove("displayNone");
    } else {
      taskBox.classList.add("displayNone");
    }
  });

  let trash = document.createElement("i");
  trash.setAttribute("id", "trash");
  trash.classList.add("fa-solid", "fa-trash-can");
  actionIcons.append(trash);

  trash.addEventListener("click", () => {
    taskBox.remove();
  });

  let edit = document.createElement("i");
  edit.setAttribute("id", "pen");
  edit.classList.add("fa-solid", "fa-pen");
  actionIcons.append(edit);

  edit.addEventListener("click", function onOff() {
    if (inputText.contentEditable != "true") {
      inputText.contentEditable = "true";
      inputText.focus();
      edit.style.color = "red";
    } else {
      inputText.contentEditable = "false";
      edit.style.color = "white";
    }
  });

  let colorChange = document.createElement("i");
  colorChange.setAttribute("id", "color-change");
  colorChange.classList.add("fa-solid", "fa-square-full");
  actionIcons.append(colorChange);

  colorChange.addEventListener("click", () => {
    let myColors = ["red", "yellow", "blue", "black"];
    if (topBorder.style.backgroundColor == myColors[myColors.length - 1]) {
      topBorder.style.backgroundColor = myColors[0];
    } else {
      topBorder.style.backgroundColor =
        myColors[myColors.indexOf(topBorder.style.backgroundColor) + 1];
    }
  });

  let lockIcons = document.createElement("div");
  lockIcons.setAttribute("class", "lock-icons");
  icons.append(lockIcons);

  let unlock = document.createElement("i");
  unlock.setAttribute("id", "unlock");
  unlock.classList.add("fa-solid", "fa-lock-open");

  let lock = document.createElement("i");
  lock.setAttribute("id", "lock");
  lock.classList.add("fa-solid", "fa-lock");
  lockIcons.append(lock);

  lock.addEventListener("click", () => {
    lock.replaceWith(unlock);
    actionIcons.classList.remove("visibilityHide");
  });

  unlock.addEventListener("click", () => {
    unlock.replaceWith(lock);
    actionIcons.classList.add("visibilityHide");
  });

  showAllBtn.addEventListener("click", () => {
    if (taskBox.classList.contains("checkedItems")) {
      taskBox.classList.add("displayNone");
    } else {
      taskBox.classList.remove("displayNone");
    }
  });

  redColorScreen.addEventListener("click", () => {
    if (taskBox.classList.contains("checkedItems")) {
      taskBox.classList.remove("displayNone");
    } else if (topBorder.style.backgroundColor != "red") {
      taskBox.classList.add("displayNone");
    } else {
      taskBox.classList.remove("displayNone");
    }
  });

  yellowColorScreen.addEventListener("click", () => {
    if (taskBox.classList.contains("checkedItems")) {
      taskBox.classList.remove("displayNone");
    } else if (topBorder.style.backgroundColor != "yellow") {
      taskBox.classList.add("displayNone");
    } else {
      taskBox.classList.remove("displayNone");
    }
  });

  blueColorScreen.addEventListener("click", () => {
    if (taskBox.classList.contains("checkedItems")) {
      taskBox.classList.remove("displayNone");
    } else if (topBorder.style.backgroundColor != "blue") {
      taskBox.classList.add("displayNone");
    } else {
      taskBox.classList.remove("displayNone");
    }
  });

  blackColorScreen.addEventListener("click", () => {
    if (taskBox.classList.contains("checkedItems")) {
      taskBox.classList.remove("displayNone");
    } else if (topBorder.style.backgroundColor != "black") {
      taskBox.classList.add("displayNone");
    } else {
      taskBox.classList.remove("displayNone");
    }
  });
});

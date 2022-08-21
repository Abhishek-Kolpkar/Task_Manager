let popupScreen = document.querySelector(".popup-box");
let createTaskBtn = document.querySelector(".create-task-btn");
let closeBtn = document.querySelector(".close-btn");
let doneBtn = document.querySelector(".done-btn");
let navBtns = document.querySelectorAll(".btn");
let taskScreen = document.querySelector(".task-screen");
let showAllTask = document.querySelector(".screen1");
let redColorScreen = document.querySelector(".screen2");
let yellowColorScreen = document.querySelector(".screen3");
let blueColorScreen = document.querySelector(".screen4");
let blackColorScreen = document.querySelector(".screen5");
let checkedBoxScreen = document.querySelector(".screen6");
let input = document.getElementById("input");

// show popup-box
createTaskBtn.addEventListener("click", () => {
  popupScreen.classList.add("displayBlock");
  taskScreen.classList.add("blurBackground");
});

// add border around nav-btns
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

// change done-btn color according to color selection
// doneBtn.disabled = true;
doneBtn.classList.add("displayNone");
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
    // doneBtn.disabled = false;
    doneBtn.classList.remove("displayNone");
    let colorCss = window
      .getComputedStyle(colorSelect[i])
      .getPropertyValue("background-color");
    doneBtn.style.backgroundColor = colorCss;
  });
}

// hide popup-box
closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("displayBlock");
  taskScreen.classList.remove("blurBackground");
  doneBtn.classList.add("displayNone");
  clicked2.classList.remove("border");
});

// create task-Box after cliking on done-Btn
doneBtn.addEventListener("click", () => {
  if (input.value.length > 0) {
    // append taskbox to taskScreen
    let taskBox = document.createElement("div");
    taskBox.classList.add("task-box");
    taskScreen.append(taskBox);

    // add topBorder div to taskbox
    let topBorder = document.createElement("div");
    topBorder.classList.add("top-border");
    topBorder.style.backgroundColor = doneBtn.style.backgroundColor;
    taskBox.appendChild(topBorder);

    // add inputText div to taskbox
    let inputText = document.createElement("div");
    inputText.setAttribute("class", "input-text");
    inputText.textContent = input.value;
    taskBox.appendChild(inputText);

    // add icons div to taskbox
    let icons = document.createElement("div");
    icons.setAttribute("class", "icons");
    taskBox.append(icons);

    // add actionIcons div to icons div
    let actionIcons = document.createElement("div");
    actionIcons.classList.add("action-icons", "visibilityHide");
    icons.appendChild(actionIcons);

    // add check icon to actionIcons div
    let check = document.createElement("i");
    check.setAttribute("id", "check");
    check.classList.add("fa-solid", "fa-check");
    actionIcons.appendChild(check);

    // add function on check icon
    check.addEventListener("click", () => {
      taskBox.classList.add("checkedItems");
      taskBox.classList.add("displayNone");
      check.style.color = "white";
      topBorder.innerText = "Task Completed"
    });

    // add function on checkedBoxScreen icon
    checkedBoxScreen.addEventListener("click", () => {
      if (taskBox.classList.contains("checkedItems")) {
        taskBox.classList.remove("displayNone");
        actionIcons.removeChild(check);
      }
      else{
        taskBox.classList.add("displayNone");
      }
    });

    // add trash/delete icon to actionIcons div
    let trash = document.createElement("i");
    trash.setAttribute("id", "trash");
    trash.classList.add("fa-solid", "fa-trash-can");
    actionIcons.append(trash);

    // add function on trash/delete icon
    trash.addEventListener("click", () => {
      taskBox.remove();
    });

    // add text edit icon to actionIcons div
    let edit = document.createElement("i");
    edit.setAttribute("id", "pen");
    edit.classList.add("fa-solid", "fa-pen");
    actionIcons.append(edit);

    // add function on edit text icon
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

    // add topBorder colorChange icon to actionIcons div
    let colorChange = document.createElement("i");
    colorChange.setAttribute("id", "color-change");
    colorChange.classList.add("fa-solid", "fa-square-full");
    actionIcons.append(colorChange);

    colorChange.addEventListener("click", () => {
      let colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 0, 255)", "rgb(0, 0, 0)"];
      if (topBorder.style.backgroundColor == colors[colors.length - 1]) {
        topBorder.style.backgroundColor = colors[0];
      } else {
        topBorder.style.backgroundColor =
          colors[colors.indexOf(topBorder.style.backgroundColor) + 1];
      }
    });

    // add lockIcons div to icons div
    let lockIcons = document.createElement("div");
    lockIcons.setAttribute("class", "lock-icons");
    icons.append(lockIcons);

    // add unlock icon to lockIcons div
    let unlock = document.createElement("i");
    unlock.setAttribute("id", "unlock");
    unlock.classList.add("fa-solid", "fa-lock-open");

    // add lock icon to lockIcons div
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
////######################################################################################////

    showAllTask.addEventListener("click", () => {
      if (taskBox.classList.contains("checkedItems")) {
        taskBox.classList.add("displayNone");
      } else {
        taskBox.classList.remove("displayNone");
      }
    });

    redColorScreen.addEventListener("click", () => {
      if (taskBox.classList.contains("checkedItems")) {
        taskBox.classList.add("displayNone");
      } else if (topBorder.style.backgroundColor != "rgb(255, 0, 0)") {
        taskBox.classList.add("displayNone");
      } else {
        taskBox.classList.remove("displayNone");
      }
    });

    yellowColorScreen.addEventListener("click", () => {
      if (taskBox.classList.contains("checkedItems")) {
        taskBox.classList.add("displayNone");
      } else if (topBorder.style.backgroundColor != "rgb(255, 255, 0)") {
        taskBox.classList.add("displayNone");
      } else {
        taskBox.classList.remove("displayNone");
      }
    });

    blueColorScreen.addEventListener("click", () => {
      if (taskBox.classList.contains("checkedItems")) {
        taskBox.classList.add("displayNone");
      } else if (topBorder.style.backgroundColor != "rgb(0, 0, 255)") {
        taskBox.classList.add("displayNone");
      } else {
        taskBox.classList.remove("displayNone");
      }
    });

    blackColorScreen.addEventListener("click", () => {
      if (taskBox.classList.contains("checkedItems")) {
        taskBox.classList.add("displayNone");
      } else if (topBorder.style.backgroundColor != "rgb(0, 0, 0)") {
        taskBox.classList.add("displayNone");
      } else {
        taskBox.classList.remove("displayNone");
      }
    });

    popupScreen.classList.remove("displayBlock");
    taskBox.classList.remove("displayNone");
    taskScreen.classList.remove("blurBackground");
    doneBtn.classList.add("displayNone");
    clicked2.classList.remove("border");
    input.value = "";
  } else {
    alert("Please enter task...");
  }
});

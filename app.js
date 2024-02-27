var container = document.querySelector(".food-container");
var btnList = document.querySelectorAll("button");
var imgList = document.querySelectorAll("img");

//initial value
var arr = [];
imgList.forEach((item) => {
  arr.push({
    src: item.src,
    type: item.getAttribute("type"),
  });
});

function activeButton(btn) {
  btnList.forEach((item) => {
    item.classList.remove("active");
  });
  btn.classList.add("active");
}

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //active button
    activeButton(e.currentTarget);

    //filter data
    let type = e.currentTarget.getAttribute("type");
    if (type == "all") {
      render(arr);
      return;
    }
    let fillerData = arr.filter((food) => {
      return food.type == type;
    });
    render(fillerData);
  });
});

function render(list) {
  container.innerHTML = "";
  list.forEach((item) => {
    let imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.setAttribute("type", item.type);
    let divE = document.createElement("div");
    divE.classList.add("food");
    divE.append(imgElement);
    container.append(divE);
  });
}

// btnList.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//    let type = e.currentTarget.getAttribute("type");
//    imgList.forEach((img)=>{
//      let
//    })
//    if(type == "all"){

//    }else{

//    }
//   });
// });

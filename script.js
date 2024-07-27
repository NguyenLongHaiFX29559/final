document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  const correctEmail = "hainlfx29559@funix.edu.vn";
  const enteredEmail = document.getElementById("email").value.toLowerCase();
  if (enteredEmail === correctEmail) {
    document.querySelector("#personal-info").style.display = "flex";
    document.querySelector("#personal-info-email").style.display = "none";
    console.log("correct");
  } else {
    console.log("wrong");
    alert("Wrong Email, please try again");
  }
});

const mainInfo = document.querySelectorAll(".main-info");
const showLessBtn = document.querySelector(".show-less-btn");

for (let i = 0; i < mainInfo.length; i++) {
  //
  const main = mainInfo[i];
  const showMoreBtn = mainInfo[i].querySelector(".show-more-btn");
  const showLessBtn = mainInfo[i].querySelector(".show-less-btn");
  const jobHistory = mainInfo[i].querySelector(".job-history");
  const infoHeader = mainInfo[i].querySelector(".info-header");
  //
  main.addEventListener("mouseover", function () {
    if (!jobHistory.style.display || jobHistory.style.display === "none") {
      showMoreBtn.style.display = "flex";
    } else {
      showLessBtn.style.display = "flex";
    }
  });

  main.addEventListener("mouseout", function () {
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "none";
  });

  main.querySelector(".show-more-btn").addEventListener("click", function () {
    console.log("show more button clicked!");
    jobHistory.style.display = "grid";
    infoHeader.style.height = "13rem";
    main.style.height = "64rem";
  });

  main.querySelector(".show-less-btn").addEventListener("click", function () {
    console.log("show less button clicked!");
    jobHistory.style.display = "none";
    infoHeader.style.height = "13rem";
    main.style.height = "18rem";
  });
}

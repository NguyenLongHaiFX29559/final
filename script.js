document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  const correctEmail = "hainlFX29559@funix.edu.vn";
  const enteredEmail = document.getElementById("email").value.toLowerCase();
  if (enteredEmail === correctEmail) {
    document.querySelector("#personal-info").style.display = "flex";
    document.querySelector("#personal-info-email").style.display = "none";
    console.log("done");
  } else {
    console.log("kill");
  }
});

const mainInfo = document.querySelectorAll(".main-info");

for (let i = 0; i < mainInfo.length; i++) {
  mainInfo[i].addEventListener("mouseover", function () {
    if (
      !this.querySelector(".job-history").style.display ||
      this.querySelector(".job-history").style.display === "none"
    ) {
      this.querySelector(".show-more-btn").style.display = "flex";
    } else {
      this.querySelector(".show-less-btn").style.display = "flex";
    }
  });

  mainInfo[i].addEventListener("mouseout", function () {
    this.querySelector(".show-more-btn").style.display = "none";
    this.querySelector(".show-less-btn").style.display = "none";
  });

  mainInfo[i]
    .querySelector(".show-more-btn")
    .addEventListener("click", function () {
      console.log("show more button clicked!");
      const parent = this.closest(".main-info");
      parent.querySelector(".job-history").style.display = "grid";
      parent.querySelector(".info-header").style.height = "13rem";
      parent.style.height = "64rem";

      this.style.display = "none";
      parent.querySelector(".show-less-btn").style.display = "flex";
    });

  mainInfo[i]
    .querySelector(".show-less-btn")
    .addEventListener("click", function () {
      console.log("show less button clicked!");
      const parent = this.closest(".main-info");
      parent.querySelector(".job-history").style.display = "none";
      parent.querySelector(".info-header").style.height = "13rem";
      parent.style.height = "20rem";

      this.style.display = "none";
      parent.querySelector(".show-more-btn").style.display = "flex";
    });
}

// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<i class="bi bi-arrow-left"></i>',
    '<i class="bi bi-arrow-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

// $(document).ready(function () {
//   $(".join-now").click(function (e) {
//     e.preventDefault();
//     var courseLevel = $(this).data("course-level");
//     $("#course-level").val(courseLevel);
//     $(".form-container").show();
//   });
// });

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$("#myModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget);
  var title = button.data("title");
  var imageSrc = button.data("image");
  var description = button.data("description");

  // Set the values to the modal elements
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("modalDescription").textContent = description;
});

$("#myModal2").on("show.bs.modal2", function (event) {
  var button = $(event.relatedTarget);
  var title = button.data("title");
  var imageSrc = button.data("image");
  var description = button.data("description");

  // Set the values to the modal elements
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("modalDescription").textContent = description;
});

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImg.src = pic;
  fullImgBox.style.display = "flex";
}

function closeFullImg(pic) {
  fullImgBox.style.display = "none";
}

const scriptURLQuery =
  "https://script.google.com/macros/s/AKfycbzKtxwFEWxtcMBMc9h70nenFJEG82a5-0xJq_wp3dhXPMBH1dTDezfSdWqPaxaL4FKH/exec";

const formQuery = document.forms["contact-form"];

// formQuery.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURLQuery, { method: "POST", body: new FormData(formQuery) })
//     .then((response) =>
//       alert("Thank you! your form is submitted successfully.")
//     )
//     .then(() => {
//       window.location.reload();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

// const scriptURLStudent =
//   "https://script.google.com/macros/s/AKfycbx3FsZGjzf84fRwKtgQEqFx1n5r8E1HkO62halH4bpzR8LKPFlO_n6qoP69NrR_PByZWg/exec";

// const formStudent = document.forms["student-details"];

// formStudent.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURLStudent, { method: "POST", body: new FormData(formStudent) })
//     .then((response) =>
//       alert("Thank you! your form is submitted successfully.")
//     )
//     .then(() => {
//       window.location.reload();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

var link = document.getElementById("dynamicLink");
function updateHref() {
  if (window.innerWidth <= 768) {
    link.href = "#gallery1";
  } else {
    link.href = "#gallery";
  }
}
window.onload = updateHref;
window.onresize = updateHref;

var link1 = document.getElementById("dynamicLink1");
function updateHref1() {
  if (window.innerWidth <= 768) {
    link1.href = "#coach1";
  } else {
    link1.href = "#coach";
  }
}
window.onload = updateHref1;
window.onresize = updateHref1;


document.addEventListener('DOMContentLoaded', function () {
  // Get the modal element and overlay
  var popupModal = document.getElementById('popupModal');
  var overlay = document.createElement('div');
  overlay.className = 'overlay';

  var closeButton = document.querySelector('.close-button');

  closeButton.onclick = function() {
    closeModal();
  };
  
  overlay.onclick = function(event) {
    if (event.target === overlay) {
      closeModal();
    }
  };

  window.onload = function() {
    openModal();
  };
});




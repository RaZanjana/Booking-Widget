const book_btn = document.getElementById('btn-bookTrip');
const manage_btn = document.getElementById('btn-mgBooking');
const checkin_btn = document.getElementById('btn-checkIn');

const booking_content = document.getElementById('bookingContent');
const manage_content = document.getElementById('manageContent');
const checkin_content = document.getElementById('checkinContent');

window.addEventListener("load", function(){
    book_btn.className += " bw-active-btn";
    manage_btn.className += " bw-inactive-btn";
    checkin_btn.className += " bw-inactive-btn";

    booking_content.style.display='block';
    manage_content.style.display='none';
    checkin_content.style.display='none';
});

book_btn.addEventListener('click', function onClick(event){
    book_btn.classList.replace('bw-inactive-btn','bw-active-btn');
    manage_btn.classList.replace('bw-active-btn','bw-inactive-btn');
    checkin_btn.classList.replace('bw-active-btn','bw-inactive-btn');

    booking_content.style.display='block';
    manage_content.style.display='none';
    checkin_content.style.display='none';
})
manage_btn.addEventListener('click', function onClick(event){
    book_btn.classList.replace('bw-active-btn','bw-inactive-btn');
    manage_btn.classList.replace('bw-inactive-btn','bw-active-btn');
    checkin_btn.classList.replace('bw-active-btn','bw-inactive-btn');

    booking_content.style.display='none';
    manage_content.style.display='block';
    checkin_content.style.display='none';
})
checkin_btn.addEventListener('click', function onClick(event){
    book_btn.classList.replace('bw-active-btn','bw-inactive-btn');
    manage_btn.classList.replace('bw-active-btn','bw-inactive-btn');
    checkin_btn.classList.replace('bw-inactive-btn','bw-active-btn');

    booking_content.style.display='none';
    manage_content.style.display='none';
    checkin_content.style.display='block';
})



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });


  function searchDeparts(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("departSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("departAirports");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }

  function searchDestinations(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("destinationSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("destinationAirports");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }
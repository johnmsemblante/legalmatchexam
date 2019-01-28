// Autocomplete zip code or City
var locationfunction = new autoComplete({
    selector: '#locationInput',
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['Nowheresville, WQ 00000', 'Somewheresville, QS 54632', 'Everywheresville, XY 75424', 'Wheresville, VH 73461'];
        var suggestions = [];
        for (i=0;i<choices.length;i++)
            if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
        suggest(suggestions);
    }
});

// Onchange select legal category modal
function changeFunc() {
  var value, modal;
  value = document.getElementById("selectCategory").value;
  modal = document.getElementById('modalscreencat');

  modal.style.display = "block";
  document.getElementById("changebold").innerHTML = value;
  document.getElementById("selectCategory").style.color = "#000000";
}

var modal, btncloseup;
modal = document.getElementById('modalscreencat');
btncloseup = document.getElementById("closemodalupper");

btncloseup.onclick = function() {
  modal.style.display = "none";
}

// Dynamic client modal open and get name, location, client position, and thumbnail.
var modalScreenClient, modalScreenClientName, modalScreenClientLocation, modalScreenClientThumbnail, modalScreenClientTitle, modalScreenClientClose, modalScreenReviewClose, slides;
modalScreenClient = document.getElementById("modalscreenclient");
modalScreenClientName = document.getElementsByClassName("replacename")[0];
modalScreenClientLocation = document.getElementsByClassName("replacelocation")[0];
modalScreenClientThumbnail = document.getElementsByClassName("replacethumbnail")[0];
modalScreenClientTitle = document.getElementsByClassName("replacetitle")[0];
modalScreenClientClose = document.getElementsByClassName("close__modalclient");
modalScreenReviewClose = document.getElementById("closemodalreview");
slides = document.getElementsByClassName("trigger");

for(var i = 0; i < slides.length; i++){
  var slidesCurrent = document.getElementsByClassName("trigger");
  
  slides[i].onclick = function() {
    var slidesThumbnail, slidesName, slidesLocation, slidesTitle;
    slidesThumbnail = this.parentElement.parentElement.parentElement.querySelectorAll('.thumbnail-wrapper')[0].children[0].children[0].src;
    slidesName = this.parentElement.parentElement.parentElement.querySelectorAll('.thumbnail-wrapper')[0].children[1].innerHTML.trim();
    slidesLocation = this.parentElement.parentElement.parentElement.querySelectorAll('.thumbnail-wrapper')[0].children[2].innerHTML.trim();
    slidesTitle = this.parentElement.parentElement.children[0].children[0].innerHTML.trim();;

    modalScreenClient.style.display = "block";

    modalScreenClientName.innerHTML = slidesName.trim();
    modalScreenClientLocation.innerHTML = slidesLocation.trim();
    modalScreenClientTitle.innerHTML = slidesTitle.trim();
    modalScreenClientThumbnail.src = slidesThumbnail.trim();
  }

  modalScreenClientClose[0].onclick = function() {
    modalScreenClient.style.display = "none";
  }

  modalScreenReviewClose.onclick = function() {
    modalScreenClient.style.display = "none";
  }
}

// Other category click
var otherCategory = document.getElementsByClassName('cantfindtigger')[0];
var otherCategoryClose = document.getElementsByClassName('close__modalothercat')[0];
var otherCategoryModal = document.getElementById('modalscreenothercat');

otherCategory.onclick = function() {
  otherCategoryModal.style.display = "block";
}

otherCategoryClose.onclick = function() {
  otherCategoryModal.style.display = "none";
}
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

function changeFunc() {
  var value, modal;
  value = document.getElementById("selectCategory").value;
  modal = document.getElementById('modalscreencat');

  modal.style.display = "block";
  document.getElementById("changebold").innerHTML = value;
}

var modal, btncloseup, btnclosedown;
modal = document.getElementById('modalscreencat');
btncloseup = document.getElementById("closemodalupper");

btncloseup.onclick = function() {
  modal.style.display = "none";
}

btnclosedown.onclick = function() {
  modal.style.display = "none";
}
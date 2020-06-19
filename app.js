console.log('Devoloped by Sayan');
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {

    let addtext = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {

        html += ` 
       
       <div class="card  my-2 mx-2 bg-dark notecard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5><hr id="hr">
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary bg-dark">Delete Note</button>
        </div>
      </div>
       `;

    });
    let noteelm = document.getElementById('notes');
    if (notes != 0) {
        noteelm.innerHTML = html;
    }
    else {
        noteelm.innerHTML = `Nothing show! please add notes.`;
    }
}
function deletenote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}
let search = document.getElementById('search');
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function (element) {
        let cardtext = element.getElementsByTagName("p")[0].innerText;
        if(cardtext.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }

    })
})

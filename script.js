const addbut = document.querySelector('#add');
const updatedata = () =>{
    const textareadata = document.querySelectorAll('textarea');
    const notes = [];
    textareadata.forEach((note) => {
        return notes.push(note.value);
    })
    localStorage.setItem('notes', JSON.stringify(notes));
}
const addnote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData =  `
    <div class="op">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"} "></div>
    <textarea class="${text ? "hidden" : ""}" ></textarea>`;
    note.insertAdjacentHTML('afterbegin',htmlData);

    const editbut = note.querySelector('.edit');
    const delbut = note.querySelector('.delete');
    const textarea = note.querySelector('textarea');
    const maindiv = note.querySelector('.main');

    delbut.addEventListener('click',() => {
        note.remove();
        updatedata();
    })
    textarea.value = text;
    maindiv.innerHTML = text;
    editbut.addEventListener('click',() =>{
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change',(event) =>{
        const value = event.target.value;
        maindiv.innerHTML = value;
        updatedata();
    })

    document.body.appendChild(note);
}
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note) => addnote(note))
};
addbut.addEventListener('click', () => addnote() );
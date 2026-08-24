const students = [
    {
        name: 'Badhusha',
        id: 1212,
        rollNo: 1,
        class: 'Plus One'
    },
    {
        name: 'subair',
        id: 122,
        rollNo: 7,
        class: 'Plus One'
    },
    {
        name: 'shukoor',
        id: 1252,
        rollNo: 6,
        class: 'Plus One'
    },
    {
        name: 'ibrahim',
        id: 16712,
        rollNo: 4,
        class: 'Plus One'
    },
];


const addstudentButton = document.querySelector('.js-add-student-button');
addstudentButton.addEventListener('click', () => {
    const addstudentWindowHTML = `
        <div class="overlay-div">
            <div class="add-student-window">
            <div class="addstudent-title-x-div">
                <p class="add-student-title">Add Student</p>
                <button>X</button>
            </div>
        
            <p class="name-class-text">Name</p>
            <input class="name-input" type="text" placeholder="Student name">
            <p class="name-class-text">Class</p>
            <select name="class" class="class-dropdown-2">
                        <option value="" selected>Select...</option>
                        <option value="plus-one" >Plus one</option>
                        <option value="plus-two">Plus two</option>
                        <option value="bs1" >Bs1</option>
                        <option value="bs2">Bs2</option>
                        </select>
            <button class="addstudent-submit-button">Add Student</button>
            </div>
        </div>
    `
    document.querySelector('main').innerHTML = addstudentWindowHTML;
});

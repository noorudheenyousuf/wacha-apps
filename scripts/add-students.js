const students = JSON.parse(localStorage.getItem('students')) || [
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
    {
        name: 'Swalih',
        id: 12345,
        rollNo: 23,
        class: 'Bs1'
    }
];

function saveToStorage() {
    localStorage.setItem('students', JSON.stringify(students));
}
// When add-student NAVBUTTON clicks...studentPage HTML generating
export function renderAddstudentPage() {
    const studentsNavButton = document.querySelector('.js-students-navbutton');

    if (studentsNavButton) {
        studentsNavButton.addEventListener('click', () => {
            renderStudentList();
        });
    }

}

export function renderStudentList() {

    let studentItemsHTML = '';
    students.forEach((student) => {
        studentItemsHTML += `

            <!-- Student List -->
            <div class="students-list-div">
                <div>
                    <p class="student-name">${student.name}</p>
                    <p>${student.class}</p>
                </div>
                <div class="edit-delete-buttons">
                    <svg class="edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                    <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
            </div>
        `;
    });

    const pageHTML = `
            <div class="students-title-icon-addbutton-div">
            <div class="icon-student-title-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus" aria-hidden="true" style="color: var(--primary);"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
            <div class="students-title-div">
            <p class="student-title">Students</p>
            <p class="total-text">2 total</p>
            </div>
            </div>
            <button class="js-add-student-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            Add
            </button>
            </div>
            <div class="search-bar-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 muted" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="text" placeholder="Search students...">
            </div>
            <div class="students-list-container">
            ${studentItemsHTML}
            </div>
        `;
    document.querySelector('main').innerHTML = pageHTML;

    attachAddStudentListener();
}

function attachAddStudentListener() {
    const addstudentButton = document.querySelector('.js-add-student-button');
    addstudentButton.addEventListener('click', () => {
        const addStudentWindowHTML = `
        <div class="overlay-div">
            <div class="add-student-window">
            <div class="addstudent-title-x-div">
                <p class="add-student-title">Add Student</p>
                <button class="js-students-form-closebutton">X</button>
            </div>
        <form class="js-student-form">
            <p class="name-class-text">Name</p>
            <input name="name" class="name-input" type="text" placeholder="Student name">
            <p class="name-class-text">Class</p>
            <select name="class" class="class-dropdown-2">
                        <option value="" selected>Select...</option>
                        <option value="plus-one" >Plus one</option>
                        <option value="plus-two">Plus two</option>
                        <option value="bs1" >Bs1</option>
                        <option value="bs2">Bs2</option>
                        </select>
            <button class="addstudent-submit-button js-submit-student-button">Add Student</button>
            </form>
            </div>
            </div>
        
    `;
        document.querySelector('main').insertAdjacentHTML('beforeend', addStudentWindowHTML);
// taking form data
        const studentForm = document.querySelector('.js-student-form');
        studentForm.addEventListener('submit' , (e) => {
            e.preventDefault();
// Converting to object
            const formData = new FormData(studentForm);
            const newStudent = Object.fromEntries(formData.entries());
// creating new ids for students
            
            if (students.length === 0) {
                return 10000;
            }
            const maxId = Math.max(...students.map(student => student.id));
            newStudent.id = maxId + 1;
        

            students.push(newStudent);
            saveToStorage();
            renderStudentList();
        });



        const closeButton = document.querySelector('.js-students-form-closebutton');
        closeButton.addEventListener('click', () => {
            const overlay = document.querySelector('.overlay-div');
            overlay.remove();
        })
    });

    
}   




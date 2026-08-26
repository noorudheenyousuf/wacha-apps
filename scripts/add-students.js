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
            <div class="image-div">
                <input type="file" id="photo-upload" accept="image/*" hidden>
    
    <!-- ക്ലിക്ക് ചെയ്യാവുന്ന കാർഡ് ഡിസൈൻ -->
            <label for="photo-upload" class="upload-box">
                <!-- Camera Plus SVG Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007a5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                    <line x1="19" y1="9" x2="19" y2="15"></line>
                    <line x1="16" y1="12" x2="22" y2="12"></line>
                </svg>
                <span class="upload-text">PHOTO</span>
            </label>
            </div>

            <p class="name-class-text">Name</p>
            <input name="name" class="name-input" type="text" placeholder="Full Name">
            <p class="name-class-text">Class</p>
            <select name="class" class="class-dropdown-2">
                        <option value="" selected>Select Class</option>
                        <option value="plus-one" >Plus one</option>
                        <option value="plus-two">Plus two</option>
                        <option value="bs1" >Bs1</option>
                        <option value="bs2">Bs2</option>
                        </select>
            <p class="rollno-text">Roll No.</p>
            <input class="rollno-input" type="number" placeholder="Please enter a number">

            <p class="id-text">Student Id</p>
            <input name="id" class="id-input" type="number" placeholder="Enter student id">

            <p class="address-text">Address</p>
            <input name="address" class="address-input" type="text" name="" id="" placeholder="Residential Address">

            
            
            <p class="place-text">Place</p>
            <input name="place" class="place-input" type="text">

            <p class="district-text">District</p>
            <input name="district" class="district-input" type="text">

            <p class="state-text">State</p>
            <input name="state" class="state-input" type="text">

            <p class="family-text">Family Details</p>

            <p class="father-name">Father's Name</p>
            <input name="fatherName" class="father-input" type="text">

            <p class="mother-name">Mother's Name</p>
            <input name="motherName" class="mother-input" type="text">
            
            <p class="contact-no">Father's Mobile</p>
            <input name="fatherMobile" class="contact-no-input" type="number" placeholder="Enter WhatsApp No...">
            
            <p class="academic-text">Academic Status</p>
            

            <p class="admission-date-text">Admission Date</p>
            <input name="admissonDate" class="father-input" type="text">

            <p class="rank-text">Rank</p>
            <input name="rank" class="rank-input" type="text">

            <p class="previous-college-text">Previous College</p>
            <input name="previousCollege" class="previous-college-input" type="text">

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
            // photo previewing
            const photoInput = document.getElementById('photo-upload');
const uploadBox = document.querySelector('.upload-box');

photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            // കാർഡിന്റെ പശ്ചാത്തലമായി തിരഞ്ഞെടുത്ത് ഇമേജ് മാറ്റുന്നു
            uploadBox.style.backgroundImage = `url('${event.target.result}')`;
            uploadBox.style.backgroundSize = 'cover';
            uploadBox.style.backgroundPosition = 'center';
            uploadBox.innerHTML = ''; // ഉള്ളിലെ ഐക്കണും ടെക്സ്റ്റും മാറ്റുന്നു
        };
        reader.readAsDataURL(file);
    }
});
            saveToStorage();
            renderStudentList();
        });



        const closeButton = document.querySelector('.js-students-form-closebutton');
        closeButton.addEventListener('click', () => {
            const overlay = document.querySelector('.overlay-div');
            overlay.remove();
        })
    });

    console.log(students)
}   




const students = JSON.parse(localStorage.getItem('students')) || [
    { name: 'Badhusha', id: 1212, rollNo: 1, class: 'Plus One' },
    { name: 'subair', id: 122, rollNo: 7, class: 'Plus One' },
    { name: 'shukoor', id: 1252, rollNo: 6, class: 'Plus One' },
    { name: 'ibrahim', id: 16712, rollNo: 4, class: 'Plus One' },
    { name: 'Swalih', id: 12345, rollNo: 23, class: 'Bs1' }
];

function saveToStorage() {
    localStorage.setItem('students', JSON.stringify(students));
}

export function renderAddstudentPage() {
    const studentsNavButton = document.querySelector('.js-students-navbutton');
    if (studentsNavButton) {
        studentsNavButton.addEventListener('click', () => {
            renderStudentList();
        });
    }
}

export function renderStudentList(searchQuery = '') {
    const query = searchQuery.toLowerCase().trim();

    // 1. ഫിൽട്ടറിംഗ്: പേര്, ക്ലാസ്, Roll No എന്നിവ അടിസ്ഥാനമാക്കി തിരയുന്നു
    const filteredStudents = students.filter((student) => {
        return (
            student.name.toLowerCase().includes(query) ||
            student.class.toLowerCase().includes(query) ||
            String(student.rollNo || '').includes(query)
        );
    });

    let studentItemsHTML = '';
    filteredStudents.forEach((student) => {
        studentItemsHTML += `
            <div class="students-list-div">
                <div>
                    <p class="student-name">${student.name}</p>
                    <p>${student.class}</p>
                </div>
                <div class="edit-delete-buttons">
                    <svg data-id="${student.id}" class="edit-button js-edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                    <svg data-id="${student.id}" class="delete-button js-delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
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
                    <p class="total-text">${filteredStudents.length} total</p>
                </div>
            </div>
            <button class="js-add-student-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add Student
            </button>
        </div>
        <div class="search-bar-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 muted" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="text" class="js-search-input" value="${searchQuery}" placeholder="Search students...">
        </div>
        <div class="students-list-container">
            ${studentItemsHTML}
        </div>
    `;

    document.querySelector('main').innerHTML = pageHTML;

    // 2. Search Input Event Listener & Focus Handling
    const searchInput = document.querySelector('.js-search-input');
    if (searchInput) {
        searchInput.focus();
        searchInput.setSelectionRange(searchQuery.length, searchQuery.length);

        searchInput.addEventListener('input', (e) => {
            renderStudentList(e.target.value);
        });
    }

    // Add Student Button Listener
    const addStudentBtn = document.querySelector('.js-add-student-button');
    addStudentBtn.addEventListener('click', () => openStudentForm());

    // Edit Button Listener
    document.querySelectorAll('.js-edit-button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const studentId = Number(btn.dataset.id);
            const studentToEdit = students.find((s) => s.id === studentId);
            if (studentToEdit) {
                openStudentForm(studentToEdit);
            }
        });
    });

    // Delete Button Listener
    document.querySelectorAll('.js-delete-button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const studentId = Number(btn.dataset.id);
            const index = students.findIndex((s) => s.id === studentId);
            if (index !== -1) {
                students.splice(index, 1);
                saveToStorage();
                renderStudentList(searchQuery);
            }
        });
    });
}

function openStudentForm(studentToEdit = null) {
    const isEdit = Boolean(studentToEdit);
    let uploadedPhotoBase64 = studentToEdit?.photo || '';

    const addStudentWindowHTML = `
        <div class="overlay-div">
            <div class="add-student-window">
                <div class="addstudent-title-x-div">
                    <p class="add-student-title">${isEdit ? 'Edit Student' : 'Add Student'}</p>
                    <button type="button" class="js-students-form-closebutton">X</button>
                </div>
                
                <form class="js-student-form">
                    <div class="image-div">
                        <input type="file" id="photo-upload" accept="image/*" hidden>
                        <label for="photo-upload" class="upload-box" style="${uploadedPhotoBase64 ? `background-image: url('${uploadedPhotoBase64}'); background-size: cover; background-position: center;` : ''}">
                            ${uploadedPhotoBase64 ? '' : `
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007a5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                    <circle cx="12" cy="13" r="4"></circle>
                                    <line x1="19" y1="9" x2="19" y2="15"></line>
                                    <line x1="16" y1="12" x2="22" y2="12"></line>
                                </svg>
                                <span class="upload-text">PHOTO</span>
                            `}
                        </label>
                    </div>

                    <p class="name-class-text">Name</p>
                    <input name="name" class="name-input" type="text" placeholder="Full Name" value="${studentToEdit?.name || ''}" required>
                    
                    <p class="name-class-text">Class</p>
                    <select name="class" class="class-dropdown-2" required>
                        <option value="" disabled ${!studentToEdit ? 'selected' : ''}>Select Class</option>
                        <option value="Plus One" ${studentToEdit?.class === 'Plus One' || studentToEdit?.class === 'plus-one' ? 'selected' : ''}>Plus One</option>
                        <option value="Plus Two" ${studentToEdit?.class === 'Plus Two' || studentToEdit?.class === 'plus-two' ? 'selected' : ''}>Plus Two</option>
                        <option value="Bs1" ${studentToEdit?.class === 'Bs1' || studentToEdit?.class === 'bs1' ? 'selected' : ''}>Bs1</option>
                        <option value="Bs2" ${studentToEdit?.class === 'Bs2' || studentToEdit?.class === 'bs2' ? 'selected' : ''}>Bs2</option>
                    </select>

                    <p class="rollno-text">Roll No.</p>
                    <input name="rollNo" class="rollno-input" type="number" placeholder="e.g : 101" value="${studentToEdit?.rollNo || ''}">

                    <p class="address-text">Address</p>
                    <input name="address" class="address-input" type="text" placeholder="House No., Street name, Area" value="${studentToEdit?.address || ''}">

                    <p class="place-text">Place</p>
                    <input name="place" class="place-input" type="text" placeholder="e.g : Kochi" value="${studentToEdit?.place || ''}">

                    <p class="district-text">District</p>
                    <input name="district" class="district-input" type="text" placeholder="e.g : Ernakulam" value="${studentToEdit?.district || ''}">

                    <p class="state-text">State</p>
                    <input name="state" class="state-input" type="text" placeholder="eg : Kerala" value="${studentToEdit?.state || ''}">

                    <p class="family-text">Family Details</p>

                    <p class="father-name">Father's Name</p>
                    <input name="fatherName" class="father-input" type="text" placeholder="e.g., Abdullah Al-Mansoor" value="${studentToEdit?.fatherName || ''}">

                    <p class="mother-name">Mother's Name</p>
                    <input name="motherName" class="mother-input" type="text" placeholder="e.g., Amina Al-Zahra" value="${studentToEdit?.motherName || ''}">
                    
                    <p class="contact-no">Father's Mobile</p>
                    <input name="fatherMobile" class="contact-no-input" type="number" placeholder="enter whatsApp no." value="${studentToEdit?.fatherMobile || ''}">
                    
                    <p class="academic-text">Academic Status</p>

                    <p class="admission-date-text">Admission Date</p>
                    <input name="admissonDate" class="father-input" type="text" placeholder="DD / MM / YYYY" value="${studentToEdit?.admissonDate || ''}">

                    <p class="rank-text">Rank</p>
                    <input name="rank" class="rank-input" type="text" placeholder="eg : Rank 1" value="${studentToEdit?.rank || ''}">

                    <p class="previous-college-text">Previous College</p>
                    <input name="previousCollege" class="previous-college-input" type="text" placeholder="e.g : Al-Azhar Secondary School" value="${studentToEdit?.previousCollege || ''}">

                    <button type="submit" class="addstudent-submit-button js-submit-student-button">
                        ${isEdit ? 'Update Student' : 'Add Student'}
                    </button>
                </form>
            </div>
        </div>
    `;

    document.querySelector('main').insertAdjacentHTML('beforeend', addStudentWindowHTML);

    const photoInput = document.getElementById('photo-upload');
    const uploadBox = document.querySelector('.upload-box');
    
    photoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                uploadedPhotoBase64 = event.target.result;
                uploadBox.style.backgroundImage = `url('${uploadedPhotoBase64}')`;
                uploadBox.style.backgroundSize = 'cover';
                uploadBox.style.backgroundPosition = 'center';
                uploadBox.innerHTML = '';
            };
            reader.readAsDataURL(file);
        }
    });

    const studentForm = document.querySelector('.js-student-form');
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(studentForm);
        const formValues = Object.fromEntries(formData.entries());

        if (isEdit) {
            const index = students.findIndex((s) => s.id === studentToEdit.id);
            if (index !== -1) {
                students[index] = {
                    ...students[index],
                    ...formValues,
                    rollNo: formValues.rollNo ? Number(formValues.rollNo) : '',
                    photo: uploadedPhotoBase64
                };
            }
        } else {
            const maxId = students.length > 0 ? Math.max(...students.map((s) => s.id)) : 10000;
            const newStudent = {
                ...formValues,
                id: maxId + 1,
                rollNo: formValues.rollNo ? Number(formValues.rollNo) : '',
                photo: uploadedPhotoBase64
            };
            students.push(newStudent);
        }

        saveToStorage();
        const overlay = document.querySelector('.overlay-div');
        if (overlay) overlay.remove();
        renderStudentList();
    });

    const closeButton = document.querySelector('.js-students-form-closebutton');
    closeButton.addEventListener('click', () => {
        const overlay = document.querySelector('.overlay-div');
        if (overlay) overlay.remove();
    });
}
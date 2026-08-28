const teachers = JSON.parse(localStorage.getItem('teachers')) || [
    { id: 1, name: 'Noorudheen Saqafi', incharge: 'Plus Two' },
    { id: 2, name: 'Irfan Saqafi', incharge: 'Plus Two' },
    { id: 3, name: 'Razi Saqafi', incharge: 'Plus Two' },
    { id: 4, name: 'Abuswalih Saqafi', incharge: 'Plus Two' }
];

export function renderAddTeacherPage() {
    const teachersNavbutton = document.querySelector('.js-teachers-navbutton');
    if (teachersNavbutton) {
        teachersNavbutton.addEventListener('click', () => {
            renderTeacherList();
        });
    }
}

function saveToTeacherStorage() {
    localStorage.setItem('teachers', JSON.stringify(teachers));
}

function renderTeacherList(searchQuery = '') {
    const query = searchQuery.toLowerCase().trim();

    // 1. ഫിൽട്ടറിംഗ്: ടീച്ചറുടെ പേര് അല്ലെങ്കിൽ Incharge Class ഉപയോഗിച്ച് തിരയുന്നു
    const filteredTeachers = teachers.filter((teacher) => {
        return (
            teacher.name.toLowerCase().includes(query) ||
            teacher.incharge.toLowerCase().includes(query)
        );
    });

    let teacherListHTML = '';
    filteredTeachers.forEach((teacher) => {
        teacherListHTML += `
            <div class="students-list-div">
                <div>
                    <p class="student-name">${teacher.name}</p>
                    <p>incharge <mark>${teacher.incharge}</mark></p>
                </div>
                <div class="edit-delete-buttons">
                    <svg data-id="${teacher.id}" class="edit-button js-edit-teacher-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                    <svg data-id="${teacher.id}" class="delete-button js-delete-teacher-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
            </div>
        `;
    });

    const teachersPageHTML = `
        <div class="students-title-icon-addbutton-div">
            <div class="icon-student-title-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" aria-hidden="true" style="color: var(--text-muted);"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                <div class="students-title-div">
                    <p class="student-title">Teachers</p>
                    <p class="total-text">${filteredTeachers.length} total</p>
                </div>
            </div>
            
            <button class="js-open-teacher-modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add Teacher
            </button>
        </div>

        <div class="search-bar-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 muted" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="text" class="js-search-input" value="${searchQuery}" placeholder="Search teachers...">
        </div>

        <div class="teachers-list-container">
            ${teacherListHTML}
        </div>
    `;
    
    document.querySelector('main').innerHTML = teachersPageHTML;

    // 2. Search Input Event Listener & Focus Focus Handling
    const searchInput = document.querySelector('.js-search-input');
    if (searchInput) {
        searchInput.focus();
        searchInput.setSelectionRange(searchQuery.length, searchQuery.length);

        searchInput.addEventListener('input', (e) => {
            renderTeacherList(e.target.value);
        });
    }

    // Add Teacher Modal Event
    document.querySelector('.js-open-teacher-modal').addEventListener('click', () => {
        openTeacherForm();
    });

    // Edit Button Event Listener
    document.querySelectorAll('.js-edit-teacher-button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const teacherId = Number(btn.dataset.id);
            const teacherToEdit = teachers.find((t) => t.id === teacherId);
            if (teacherToEdit) {
                openTeacherForm(teacherToEdit);
            }
        });
    });

    // Delete Button Event Listener
    document.querySelectorAll('.js-delete-teacher-button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const teacherId = Number(btn.dataset.id);
            const index = teachers.findIndex((t) => t.id === teacherId);
            if (index !== -1) {
                teachers.splice(index, 1);
                saveToTeacherStorage();
                renderTeacherList(searchQuery);
            }
        });
    });
}

function openTeacherForm(editTeacher = null) {
    const isEdit = Boolean(editTeacher);

    const addTeacherWindowHTML = `
        <div class="overlay-div">
            <div class="add-student-window">
                <div class="addstudent-title-x-div">
                    <p class="add-student-title">${isEdit ? 'Edit Teacher' : 'Add Teacher'}</p>
                    <button type="button" class="js-teacher-form-closebutton">X</button>
                </div>
            
                <form class="js-teacher-form">
                    <p class="name-class-text">Name</p>
                    <input class="name-input js-teacher-name-input" type="text" value="${isEdit ? editTeacher.name : ''}" placeholder="Teacher name" required>
                    
                    <p class="name-class-text">Incharge Class</p>
                    <select name="class" class="class-dropdown-2 js-teacher-class-select" required>
                        <option value="" ${!isEdit ? 'selected' : ''}>Select...</option>
                        <option value="Plus One" ${isEdit && editTeacher.incharge === 'Plus One' ? 'selected' : ''}>Plus One</option>
                        <option value="Plus Two" ${isEdit && editTeacher.incharge === 'Plus Two' ? 'selected' : ''}>Plus Two</option>
                        <option value="BS1" ${isEdit && editTeacher.incharge === 'BS1' ? 'selected' : ''}>BS1</option>
                        <option value="BS2" ${isEdit && editTeacher.incharge === 'BS2' ? 'selected' : ''}>BS2</option>
                    </select>
                    
                    <button type="submit" class="addstudent-submit-button">${isEdit ? 'Update Teacher' : 'Save Teacher'}</button>
                </form>
            </div>
        </div>
    `;

    document.querySelector('main').insertAdjacentHTML('beforeend', addTeacherWindowHTML);

    const overlay = document.querySelector('.overlay-div');

    document.querySelector('.js-teacher-form-closebutton').addEventListener('click', () => {
        if (overlay) overlay.remove();
    });

    document.querySelector('.js-teacher-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nameVal = document.querySelector('.js-teacher-name-input').value.trim();
        const classVal = document.querySelector('.js-teacher-class-select').value;

        if (nameVal && classVal) {
            if (isEdit) {
                editTeacher.name = nameVal;
                editTeacher.incharge = classVal;
            } else {
                const newId = teachers.length > 0 ? Math.max(...teachers.map(t => t.id)) + 1 : 1;
                teachers.push({
                    id: newId,
                    name: nameVal,
                    incharge: classVal
                });
            }

            saveToTeacherStorage();
            if (overlay) overlay.remove();
            renderTeacherList();
        }
    });

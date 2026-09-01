const subjects = JSON.parse(localStorage.getItem('subjects')) || [
    { id: 1, name: 'Fiqh', class: 'Plus Two' },
    { id: 2, name: 'Nahv', class: 'Plus Two' },
    { id: 3, name: 'Thafseer', class: 'Plus Two' },
    { id: 4, name: 'Hadeeth', class: 'Plus Two' }
];

export function renderAddSubjectPage() {
    const subjectsNavbutton = document.querySelector('.js-subjects-navbutton');
    if (subjectsNavbutton) {
        subjectsNavbutton.addEventListener('click', () => {
            renderSubjectList();
        });
    }
}

function saveToSubjectStorage() {
    localStorage.setItem('subjects', JSON.stringify(subjects));
}

// 1. Parameter ആയി searchQuery എടുത്തു
function renderSubjectList(searchQuery = '') {
    const query = searchQuery.toLowerCase().trim();

    // 2. അറേ ഫിൽട്ടർ ചെയ്യുക
    const filteredSubjects = subjects.filter((subject) => {
        return subject.name.toLowerCase().includes(query) || 
               subject.class.toLowerCase().includes(query);
    });

    let subjectListHTML = '';
    // 3. filteredSubjects-ൽ ലൂപ്പ് ചെയ്യുക (subjects പകരം)
    filteredSubjects.forEach((subject) => {
        subjectListHTML += `
            <div class="students-list-div">
                <div>
                    <p class="student-name">${subject.name}</p>
                    <p>${subject.class}</p>
                </div>
                <div class="edit-delete-buttons">
                    <svg data-id="${subject.id}" class="edit-button js-edit-subject-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                    <svg data-id="${subject.id}" class="delete-button js-delete-subject-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
            </div>
        `;
    });

    const subjectsPageHTML = `
        <div class="students-title-icon-addbutton-div">
            <div class="icon-student-title-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open" aria-hidden="true" style="color: var(--text-muted);"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                <div class="students-title-div">
                    <p class="student-title">Subjects</p>
                    <p class="total-text">${filteredSubjects.length} total</p>
                </div>
            </div>
            
            <button class="js-open-subject-modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add Subject
            </button>
        </div>

        <div class="search-bar-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 muted" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <!-- 4. js-search-input class-ഉം value-ഉം നൽകി -->
            <input type="text" class="js-search-input" value="${searchQuery}" placeholder="Search subjects...">
        </div>

        <div class="subjects-list-container">
            ${subjectListHTML}
        </div>
    `;
    
    document.querySelector('main').innerHTML = subjectsPageHTML;

    // Search Input Event Listener
    const searchInput = document.querySelector('.js-search-input');
    if (searchInput) {
        
        searchInput.setSelectionRange(searchQuery.length, searchQuery.length);

        searchInput.addEventListener('input', (e) => {
            renderSubjectList(e.target.value);
        });
    }

    // Modal Trigger
    document.querySelector('.js-open-subject-modal').addEventListener('click', () => {
        openSubjectForm();
    });

    // Edit Event Listener
    document.querySelectorAll('.js-edit-subject-button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const subjectId = Number(btn.dataset.id);
            const subjectToEdit = subjects.find((s) => s.id === subjectId);
            if (subjectToEdit) {
                openSubjectForm(subjectToEdit);
            }
        });
    });

    // Delete Event Listener
    document.querySelectorAll('.js-delete-subject-button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const subjectId = Number(btn.dataset.id);
            const index = subjects.findIndex((s) => s.id === subjectId);
            if (index !== -1) {
                subjects.splice(index, 1);
                saveToSubjectStorage();
                renderSubjectList(searchQuery);
            }
        });
    });
}

function openSubjectForm(editSubject = null) {
    const isEdit = Boolean(editSubject);

    const addSubjectWindowHTML = `
        <div class="overlay-div">
            <div class="add-student-window">
                <div class="addstudent-title-x-div">
                    <p class="add-student-title">${isEdit ? 'Edit Subject' : 'Add Subject'}</p>
                    <button type="button" class="js-subject-form-closebutton">X</button>
                </div>
            
                <form class="js-subject-form">
                    <p class="name-class-text">Subject Name</p>
                    <input class="name-input js-subject-name-input" type="text" value="${isEdit ? editSubject.name : ''}" placeholder="Subject name" required>
                    
                    <p class="name-class-text">Class</p>
                    <select name="class" class="class-dropdown-2 js-subject-class-select" required>
                        <option value="" ${!isEdit ? 'selected' : ''}>Select...</option>
                        <option value="Plus One" ${isEdit && editSubject.class === 'Plus One' ? 'selected' : ''}>Plus One</option>
                        <option value="Plus Two" ${isEdit && editSubject.class === 'Plus Two' ? 'selected' : ''}>Plus Two</option>
                        <option value="BS1" ${isEdit && editSubject.class === 'BS1' ? 'selected' : ''}>BS1</option>
                        <option value="BS2" ${isEdit && editSubject.class === 'BS2' ? 'selected' : ''}>BS2</option>
                    </select>

                    <button type="submit" class="addstudent-submit-button">${isEdit ? 'Update Subject' : 'Save Subject'}</button>
                </form>
            </div>
        </div>
    `;

    document.querySelector('main').insertAdjacentHTML('beforeend', addSubjectWindowHTML);

    const overlay = document.querySelector('.overlay-div');

    document.querySelector('.js-subject-form-closebutton').addEventListener('click', () => {
        if (overlay) overlay.remove();
    });

    document.querySelector('.js-subject-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nameVal = document.querySelector('.js-subject-name-input').value.trim();
        const classVal = document.querySelector('.js-subject-class-select').value;

        if (nameVal && classVal) {
            if (isEdit) {
                editSubject.name = nameVal;
                editSubject.class = classVal;
            } else {
                const newId = subjects.length > 0 ? Math.max(...subjects.map(s => s.id)) + 1 : 1;
                subjects.push({
                    id: newId,
                    name: nameVal,
                    class: classVal
                });
            }

            saveToSubjectStorage();
            if (overlay) overlay.remove();
            renderSubjectList();
        }
    });
}
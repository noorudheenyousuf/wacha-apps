const classes = JSON.parse(localStorage.getItem('classes')) || [
    { id: 1, name: 'Plus One' },
    { id: 2, name: 'Plus Two' }
];

export function renderAddClassPage() {
    const classesNavbutton = document.querySelector('.js-classes-navbutton');
    if (classesNavbutton) {
        classesNavbutton.addEventListener('click', () => {
            
            renderClassList();
        });
    }
}

function saveToClassStorage() {
    localStorage.setItem('classes', JSON.stringify(classes));
}

function renderClassList(searchQuery = '') {
    const query = searchQuery.toLowerCase().trim();

    // 1. ഫിൽട്ടറിംഗ്: ക്ലാസിന്റെ പേര് അടിസ്ഥാനമാക്കി തിരയുന്നു
    const filteredClasses = classes.filter((cls) => {
        return cls.name.toLowerCase().includes(query);
    });

    let classListHTML = '';
    filteredClasses.forEach((cls) => {
        classListHTML += `
            <div class="students-list-div">
                <div>
                    <p class="student-name">${cls.name}</p>
                </div>
                <div class="edit-delete-buttons">
                    <svg data-id="${cls.id}" class="edit-button js-edit-class-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                    <svg data-id="${cls.id}" class="delete-button js-delete-class-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
            </div>
        `;
    });

    const classesPageHTML = `
        <div class="students-title-icon-addbutton-div">
            <div class="icon-student-title-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>                
                <div class="students-title-div">
                    <p class="student-title">Classes</p>
                    <p class="total-text">${filteredClasses.length} total</p>
                </div>
            </div>
            
            <button class="js-open-class-modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add Class
            </button>
        </div>

        <div class="search-bar-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="text" class="js-search-input" value="${searchQuery}" placeholder="Search classes...">
        </div>

        <div class="classes-list-container">
            ${classListHTML}
        </div>
    `;
    
    document.querySelector('main').innerHTML = classesPageHTML;

    // 2. Search Input Event Listener & Focus Focus Handling
    const searchInput = document.querySelector('.js-search-input');
    if (searchInput) {
        searchInput.focus();
        searchInput.setSelectionRange(searchQuery.length, searchQuery.length);

        searchInput.addEventListener('input', (e) => {
            renderClassList(e.target.value);
        });
    }

    // Modal തുറക്കാൻ
    document.querySelector('.js-open-class-modal').addEventListener('click', () => {
        openClassForm();
    });

    // Edit Button Event Listener
    document.querySelectorAll('.js-edit-class-button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const classId = Number(btn.dataset.id);
            const classToEdit = classes.find((c) => c.id === classId);
            if (classToEdit) {
                openClassForm(classToEdit);
            }
        });
    });

    // Delete Button Event Listener
    document.querySelectorAll('.js-delete-class-button').forEach((btn) => {
        btn.addEventListener('click', () => {
            const classId = Number(btn.dataset.id);
            const index = classes.findIndex((c) => c.id === classId);
            if (index !== -1) {
                classes.splice(index, 1);
                saveToClassStorage();
                renderClassList(searchQuery);
            }
        });
    });
}

function openClassForm(editClass = null) {
    const isEdit = Boolean(editClass);
    
    const addClassWindowHTML = `
        <div class="overlay-div">
            <div class="add-student-window">
                <div class="addstudent-title-x-div">
                    <p class="add-student-title">${isEdit ? 'Edit Class' : 'Add Class'}</p>
                    <button type="button" class="js-class-form-closebutton">X</button>
                </div>
            
                <form class="js-class-form">
                    <p class="name-class-text">Class Name</p>
                    <input class="name-input js-class-name-input" type="text" value="${isEdit ? editClass.name : ''}" placeholder="e.g. Plus One / BS1" required>
                    
                    <button type="submit" class="addstudent-submit-button">${isEdit ? 'Update Class' : 'Save Class'}</button>
                </form>
            </div>
        </div>
    `;

    document.querySelector('main').insertAdjacentHTML('beforeend', addClassWindowHTML);

    const overlay = document.querySelector('.overlay-div');

    document.querySelector('.js-class-form-closebutton').addEventListener('click', () => {
        if (overlay) overlay.remove();
    });

    document.querySelector('.js-class-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const inputVal = document.querySelector('.js-class-name-input').value.trim();
        
        if (inputVal) {
            if (isEdit) {
                editClass.name = inputVal;
            } else {
                const newId = classes.length > 0 ? Math.max(...classes.map(c => c.id)) + 1 : 1;
                classes.push({ id: newId, name: inputVal });
            }

            saveToClassStorage();
            if (overlay) overlay.remove();
            renderClassList();
        }
    });
}
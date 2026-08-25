export function renderAddTeacherPage() {
    const teachersNavbutton = document.querySelector('.js-teachers-navbutton')
    teachersNavbutton.addEventListener('click', () => {

    const teachersPageHTML = `

        <div class="students-title-icon-addbutton-div">
            <div class="icon-student-title-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" aria-hidden="true" style="color: var(--text-muted);"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>                <div class="students-title-div">
                    <p class="student-title">Teachers</p>
                    <p class="total-text">2 total</p>
                </div>
            </div>
            
            <button class="js-add-teacher-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add
            </button>
        </div>

        <div class="search-bar-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 muted" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="text" placeholder="Search teachers...">
        </div>

        <!-- Student List -->
        <div class="students-list-div">
            <div>
                <p class="student-name">Noorudheen Saqafi</p>
                <p>incharge <mark>Plus Two</mark></p>
            </div>
            <div class="edit-delete-buttons">
                <svg class="edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
        </div>

        <!-- Student List -->
        <div class="students-list-div">
            <div>
                <p class="student-name">Irfan Saqafi</p>
                <p>incharge <mark>Plus Two</mark></p>
            </div>
            <div class="edit-delete-buttons">
                <svg class="edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
        </div>

        <!-- Student List -->
        <div class="students-list-div">
            <div>
                <p class="student-name">Razi Saqafi</p>
                <p>incharge <mark>Plus Two</mark></p>
            </div>
            <div class="edit-delete-buttons">
                <svg class="edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
        </div>

        <!-- Student List -->
        <div class="students-list-div">
            <div>
                <p class="student-name">Abuswalih Saqafi</p>
                <p>incharge <mark>Plus Two</mark></p>
            </div>
            <div class="edit-delete-buttons">
                <svg class="edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
        </div>
    `
    
        document.querySelector('main').innerHTML = teachersPageHTML;
        openTeachersForm();


        // Teachers detials adding Form...HTML generating
        function openTeachersForm() {
            const addTeachersButton = document.querySelector('.js-add-teacher-button');
            addTeachersButton.addEventListener('click', () => {

            const addTeacherWindowHTML = `
            <div class="overlay-div">
                <div class="add-student-window">
                <div class="addstudent-title-x-div">
                <p class="add-student-title">Add Student</p>
                <button class="js-teacher-form-closebutton">X</button>
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
                document.querySelector('main').innerHTML = addTeacherWindowHTML;
                const teacherFormCloseButton = document.querySelector('.js-teacher-form-closebutton');
                teacherFormCloseButton.addEventListener('click', () => {
                    document.querySelector('main').innerHTML = teachersPageHTML;
                    openTeachersForm();
                });
            });
        }
});


}

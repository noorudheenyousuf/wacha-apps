// When add-classes NAVBUTTON clicks...ClassPage HTML generating
export function renderAddSubjectPage() {
        
const subjectsNavbutton = document.querySelector('.js-subjects-navbutton')
subjectsNavbutton.addEventListener('click', () => {

    const subjectsPageHTML = `

        <div class="students-title-icon-addbutton-div">
            <div class="icon-student-title-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open" aria-hidden="true" style="color: var(--text-muted);"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>                <div class="students-title-div">
                    <p class="student-title">Subjects</p>
                    <p class="total-text">2 total</p>
                </div>
            </div>
            
            <button class="js-add-subject-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add
            </button>
        </div>

        <div class="search-bar-icon-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 muted" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <input type="text" placeholder="Search students...">
        </div>

        <!-- Student List -->
        <div class="students-list-div">
            <div>
                <p class="student-name">Fiqh</p>
                <p>Plus Two</p>
            </div>
            <div class="edit-delete-buttons">
                <svg class="edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
        </div>

        <!-- Student List -->
        <div class="students-list-div">
            <div>
                <p class="student-name">Nahv</p>
                <p>Plus Two</p>
            </div>
            <div class="edit-delete-buttons">
                <svg class="edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
        </div>

        <!-- Student List -->
        <div class="students-list-div">
            <div>
                <p class="student-name">Thafseer</p>
                <p>Plus Two</p>
            </div>
            <div class="edit-delete-buttons">
                <svg class="edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
        </div>

        <!-- Student List -->
        <div class="students-list-div">
            <div>
                <p class="student-name">Badusha</p>
                <p>Plus Two</p>
            </div>
            <div class="edit-delete-buttons">
                <svg class="edit-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil" aria-hidden="true" style="color: var(--secondary);"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true" style="color: var(--red);"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
        </div>
    `
    
        document.querySelector('main').innerHTML = subjectsPageHTML
        openSubjectForm();


        // Students detials adding Form...HTML generating
        function openSubjectForm() {
            const addSubjectButton = document.querySelector('.js-add-subject-button');
            addSubjectButton.addEventListener('click', () => {

                const addSubjectWindowHTML = `
        <div class="overlay-div">
            <div class="add-student-window">
            <div class="addstudent-title-x-div">
                <p class="add-student-title">Add Student</p>
                <button class="js-subject-form-closebutton">X</button>
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
                document.querySelector('main').innerHTML = addSubjectWindowHTML;
                const subjectFormCloseButton = document.querySelector('.js-subject-form-closebutton');
                subjectFormCloseButton.addEventListener('click', () => {
                    document.querySelector('main').innerHTML = subjectsPageHTML;
                    openSubjectForm();
                });
            });
        }
    });

        
};
        



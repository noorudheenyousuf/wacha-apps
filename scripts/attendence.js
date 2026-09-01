export function renderAttendencePage() {
    const attendenceNavbutton = document.querySelector('.js-attendence-navbutton');
    
    attendenceNavbutton.addEventListener('click', () => {
        // 1. Local Storage-ൽ നിന്ന് ഡാറ്റ എടുക്കുന്നു
        const classes = JSON.parse(localStorage.getItem('classes')) || [];
        const subjects = JSON.parse(localStorage.getItem('subjects')) || [];
        const students = JSON.parse(localStorage.getItem('students')) || [];


       // 1. Class options ഉണ്ടാക്കുന്നു
            let classOptionsHTML = '';

            if (classes.length === 0) {
                classOptionsHTML = '<option value="">No classes found</option>';
            } else {
                for (let i = 0; i < classes.length; i++) {
                    let cls = classes[i];
                    
                    // ഒബ്ജക്റ്റ് ആണെങ്കിൽ അതിലെ പേര് എടുക്കുന്നു, അല്ലെങ്കിൽ നേരിട്ട് എടുക്കുന്നു
                    let className = cls.name;
                    
                    classOptionsHTML += `<option value="${className}">${className}</option>`;
                }
            }

            // 2. Subject options ഉണ്ടാക്കുന്നു
            let subjectOptionsHTML = '';

            if (subjects.length === 0) {
                subjectOptionsHTML = '<option value="">No subjects found</option>';
            } else {
                for (let i = 0; i < subjects.length; i++) {
                    let sub = subjects[i];
                    
                    // ഒബ്ജക്റ്റ് ആണെങ്കിൽ അതിലെ പേര് എടുക്കുന്നു, അല്ലെങ്കിൽ നേരിട്ട് എടുക്കുന്നു
                    let subjectName = sub.name
                    
                    subjectOptionsHTML += `<option value="${subjectName}">${subjectName}</option>`;
                }
            }

        // 3. Page HTML റൻഡർ ചെയ്യുന്നു
        const attendencePageHTML = `
            <div class="attendence-filter-container js-attendence-filter-container">
                <div class="student-staff-buttons-div">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 6 0 0 0 12 0v-3.5"></path></svg>
                        Students
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                        Staff
                    </button>     
                </div>

                <div class="date-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                    <p>Date</p>
                </div>
                <input class="date-input js-date-input" type="date">

                <div class="class-subject-filter-div">
                    <div class="class-subject-filter">
                        <p>Class</p>
                        <select name="class" class="class-dropdown js-class-dropdown">
                            <option value="" selected disabled>Select Class...</option>
                            ${classOptionsHTML}
                        </select>
                    </div>
                    <div class="class-subject-filter">
                        <p>Subject</p>
                        <select name="subject" class="subject-dropdown js-subject-dropdown">
                            <option value="" selected disabled>Select Subject...</option>
                            ${subjectOptionsHTML}
                        </select>
                    </div>
                </div>    
            </div>

            <div class="attendence-students-list js-student-list">
                <div class="attendence-students-list-demo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check muted mx-auto mb-2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    <p class="choose-text">Choose a class & subject</p>
                    <p class="pick-text">Pick a class and subject above to load students</p>
                </div>
            </div>
        `;

        document.querySelector('main').innerHTML = attendencePageHTML;
        
        setTodayDate();
       

        // 5. Filter & Render Function
        const classSelect = document.querySelector('.js-class-dropdown');
        const subjectSelect = document.querySelector('.js-subject-dropdown');
        const studentListContainer = document.querySelector('.js-student-list');

        function filterAndRenderStudents() {
            const selectedClass = classSelect.value;
            const selectedSubject = subjectSelect.value;

            // Class-ഉം Subject-ഉം സെലക്ട് ആയാൽ മാത്രം റൻഡർ ചെയ്യും
            if (selectedClass && selectedSubject) {
                const filteredStudents = students.filter(std => {
                    const studentClass = typeof std === 'object' ? (std.class || std.className) : null;
                    return !studentClass || studentClass === selectedClass;
                });

                if (filteredStudents.length === 0) {
                    studentListContainer.innerHTML = `<p style="padding: 20px; text-align: center;">No students found for this class.</p>`;
                    return;
                }

                let studentsHTML = '';
                filteredStudents.forEach((student, index) => {
                    const studentName = getName(student);

                    studentsHTML += `
                        <div class="student-item" style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #ccc;">
                            <span>${index + 1}. ${studentName}</span>
                            <div class="attendance-status">
                                <label><input type="radio" name="attendance-${index}" value="present" checked> Present</label>
                                <label><input type="radio" name="attendance-${index}" value="absent"> Absent</label>
                            </div>
                        </div>
                    `;
                });
                studentListContainer.innerHTML = studentsHTML;
            }
        }

        classSelect.addEventListener('change', filterAndRenderStudents);
        subjectSelect.addEventListener('change', filterAndRenderStudents);
    });
}

// 7. തീയതി ഓട്ടോമാറ്റിക്കായി സെറ്റ് ചെയ്യുന്ന ഫങ്ഷൻ
function setTodayDate() {
    const dateInput = document.querySelector('.js-date-input');
    if (dateInput) {
        const today = new Date();
        const year = today.getFullYear();
        // മാസം 01, 02 എനാക്കാൻ (Format: YYYY-MM-DD)
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        
        dateInput.value = `${year}-${month}-${day}`;
    }
}
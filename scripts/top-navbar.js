export function topNavbarButtonFunction() {
    const attendenceNavbutton = document.querySelector('.js-attendence-navbutton')
attendenceNavbutton.addEventListener('click', () => {

    const attendencePageHTML = `

        <div class="attendence-filter-container js-attendence-filter-container">
            <div class="student-staff-buttons-div">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
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
            <input class="date-input" type="date">

            <div class="class-subject-filter-div">
                <div class="class-subject-filter">
                    <p>Class</p>
                    
                    <select name="class" class="class-dropdown">
                    <option value="" selected>Select...</option>
                    <option value="plus-one" >Plus one</option>
                    <option value="plus-two">Plus two</option>
                    <option value="bs1" >Bs1</option>
                    <option value="bs2">Bs2</option>
                    </select>
                    
                </div>
                <div class="class-subject-filter">
                    <p>Subject</p>
                    <select name="class" class="subject-dropdown">
                    <option value="" selected>Select...</option>
                    <option value="figh" >Fiqh</option>
                    <option value="nahv">Nahv</option>
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
    `
    
        document.querySelector('main').innerHTML = attendencePageHTML;
    
});

const reportsNavbutton = document.querySelector('.js-reports-navbutton')
reportsNavbutton.addEventListener('click', () => {

    const reportsPageHTML = `

        <div class="report-student-teacher-class-buttons-div">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                Students
            </button>
                   
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Staff
            </button>  
            
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid" aria-hidden="true" style="color: var(--primary);"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
                Class
            </button>
        </div>
        

        <div class="report-filter-container">
            <p>Students</p> 
            <select name="students" class="students-dropdown">
                    <option value="" selected>Select...</option>
                    <option value="abubacker" >abubacker</option>
                    <option value="thwaha">thwaha</option>
                    <option value="hussain" >hussain</option>
                    
                    </select>   
            <p>Subject</p>
            <select name="class" class="subject-dropdown">
                    <option value="" selected>Select...</option>
                    <option value="figh" >Fiqh</option>
                    <option value="nahv">Nahv</option>
                    </select>
        </div>    
        
    <!-- Student Details -->
        <div class="report-student-detail-container">
            <div class="name-percent-div">
                <div class="studentname-date-subject-div">
                <p class="report-student-name">Twaha</p>
                <p class="class-subject-date">PLUS TWO &#9679 Fiqh</p>
                </div>

                <div class="percent-number">
                    0%
                </div>
            </div>
            
            <div class="graph-total-attended-missed-div">
                <div class="graph-div"></div>

                <div class="total-attended-missed-container">
                    <div class="total-attended-missed-div">
                        <p class="total-number">0</p>
                        <p class="total-title">TOTAL</p>
                    </div>
                    <div class="total-attended-missed-div">
                        <p class="attended-number">0</p>
                        <p class="attended-title">ATTENDED</p>
                    </div>
                    <div class="total-attended-missed-div">
                        <p class="missed-number">0</p>
                        <p class="missed-title">MISSED</p>
                    </div>
                </div>

                <p class="report-container-ramaining-text">No attendence recorded this month</p>
                <p class="report-container-ramaining-text">OVERALL (ALL SUBJECTS) </p>
            </div>
        </div>

        <div class="print-savepdf-div">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-printer" aria-hidden="true"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg>
                <p>Print</p>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                <p>Save PDF</p>
            </button>
        </div>   
    `
    
        document.querySelector('main').innerHTML = reportsPageHTML;
    
});


const settingsNavbutton = document.querySelector('.js-settings-navbutton')
settingsNavbutton.addEventListener('click', () => {

    const settingsPageHTML = `

        <div class="profile-container">
                <div class="profile-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user" aria-hidden="true" style="color: var(--primary);"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <p>Profile</p>
                </div>
                <p>Display name</p>
                <div class="nameinput-savebutton">
                    <input type="text" name="" id="">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                        Save
                    </button>
                </div>
        </div>

        <div class="appearance-container">
            <div class="appearence-title-icon-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                <p>Apperarance</p>
            </div>
            <div class="light-dark-button-div">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                    Light
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
                    Dark
                </button>
            </div>
            <button class="fullscreen-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize2 lucide-maximize-2" aria-hidden="true"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
                Toggle Fullscreen
            </button>
        </div>

        <div class="data-management-container">
            <div class="data-managment-title-icon-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database" aria-hidden="true" style="color: var(--primary);"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                Data Management
            </div>
            <p class="delete-description">Delete attendence records only. Classes, students, subjects,and teachers are preserved.</p>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2" aria-hidden="true"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                Clear Attendence Data
            </button>
        </div>

        <div class="sign-out-div">
            <button class="sign-out-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
                Sign Out
            </button>
        </div>
    `
    
        document.querySelector('main').innerHTML = settingsPageHTML;
    
});



}

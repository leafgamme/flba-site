loadHTML();
let head = document.getElementsByTagName("head")[0];
head.innerHTML += '<link rel="stylesheet" href="style-mobile.css">'


window.addEventListener("scroll", () => {
    if (window.scrollX != 0) {
        window.scrollTo(0, window.scrollY);
    }
});

function loadHTML() {
    let body = document.getElementsByTagName("body")[0];


    setTimeout(() => {
        body.innerHTML = `<div class="jobs">
                <h1>Available Jobs</h1>
                <h2>Web Developer</h2>
                <button class="ripple" onclick="toggleDescription(document.getElementById('web'))">View</button>
                <div class="info" id="web">
                    <p>This job position currently has 0 people working for it. If you would like to work under this field then the requirements are as follows: </p> <p>Must be able to prove their worth as a web developer.</p> <p>Must have the ability to work well with others.</p>
                </div>
                <h2>Graphic Designer</h2>
                <button class="ripple" onclick="toggleDescription(document.getElementById('designer'))">View</button>
                <div class="info" id="designer">
                    <p>This job position currently has 0 people working for it. If you would like to work under this field then the requirements are as follows: </p> <p>Must be able to prove their worth as a web developer.</p> <p>Must have the ability to work well with others.</p>
                </div>
                <h2>Artist</h2>
                <button class="ripple" onclick="toggleDescription(document.getElementById('art'))">View</button>
                <div class="info" id="art">
                    <p>This job position currently has 0 people working for it. If you would like to work under this field then the requirements are as follows: </p> <p>Must be able to prove their worth as a web developer.</p> <p>Must have the ability to work well with others.</p>
                </div>
                <h2>Video Editor</h2>
                <button class="ripple" onclick="toggleDescription(document.getElementById('video'))">View</button>
                <div class="info" id="video">
                    <p>This job position currently has 0 people working for it. If you would like to work under this field then the requirements are as follows: </p> <p>Must be able to prove their worth as a web developer.</p> <p>Must have the ability to work well with others.</p>
                </div>
                <h2>Photographer</h2>
                <button class="ripple" onclick="toggleDescription(document.getElementById('photo'))">View</button>
                <div class="info" id="photo">
                    <p>This job position currently has 0 people working for it. If you would like to work under this field then the requirements are as follows: </p> <p>Must be able to prove their worth as a web developer.</p> <p>Must have the ability to work well with others.</p>
                </div>
                <h1>Benefits</h1>
                <button class="ripple" onclick="toggleDescription(document.getElementById('benefits'))">View</button>
                <div class="info" id="benefits">
                    <p>Flexible Schedule<br>20% Discount on Store Credit<br>Health Care<br>Share Creative Ideas<br>Showcase your work<br>Share your opinion on others work</p>
                </div>
                <h1>Questions</h1>
                <button class="ripple" onclick="loadQuestions()">Questions</button>
                <button class="ripple" onclick="loadApplication()" style="margin-top: 50px; width: 125px; z-index: 2;">Apply</button>
            </div>
            `


    }, 300);
}

function hover(element) {
    element.addEventListener("click", () => {
        if (element.classList.contains("job")) {
            if (element.getElementsByClassName("description").length > 0) {
                const description = element.querySelector(".description");
                toggleDescription(description);
            }
        }
    });

}

function loadQuestions() {
    let body = document.getElementsByTagName("body")[0];

    body.innerHTML = `<div class="questions">
                        <p>Q: What are the working Conditions?<br>A: The working conditions are great, you can choose to work from home, or in an office around people!<br><br>Q: What is the pay like?<br>A: The pay depends on your position and how much hours you work. For more information Contact us via email.<br><br>Q: Why should we work at Nameless?<br>A: Its not up to us if you work here or not our vision may not meet the same one you might have. We intend on providing our customers with an experience that suits them and makes them feel acknowledged or heard.<br><br>Q: Why did you choose the name "Nameless"? <br>A: We chose Nameless because we aim to provide people who are 'Nameless' with a platform and a way to show themselves to the world.</p>
                        <button class="ripple" onclick="loadHTML()" style="z-index: 2;">Back</button>
                        </div>
                    `

}



    function loadApplication() {
        let body = document.getElementsByTagName("body")[0];

        body.innerHTML = `<div class="application" style="z-index: 3; overflow: hidden;">
            <h1>Job Application</h1>
            <div id="question">
                <h2>What Position are you going for?</h2>
                <select placeholder="Position"id="answer">
                    <option value="Web Developer">Web Developer</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Artist">Artist</option>
                    <option value="Video Editor">Video Editor</option>
                    <option value="Photographer">Photographer</option>
                </select>
                <button class="" onclick="addToApplications()">Next</button>
            </div>
            <button class="ripple" onclick="loadHTML()" style="z-index: 2;">Cancel</button>
        </div>`
    }

    function toggleDescription(description) {
        let measuring = document.createElement('div');
        measuring.classList.add('description', 'measuring');
        measuring.textContent = description.textContent;
        document.body.appendChild(measuring);
        let height = measuring.offsetHeight + 80;
        measuring.remove();
        let infoElements = document.getElementsByClassName("info");
        for (let i = 0; i < infoElements.length; i++) {
            if (infoElements[i].classList.contains("open") && infoElements[i] != description) {
                infoElements[i].style.height = '0';
                infoElements[i].classList.remove('open');
            }
        }
        if (description.classList.contains('open')) {
            description.style.height = height + 'px';
            setTimeout(() => {
                description.style.height = '0';
                description.classList.remove('open');
            }, 0);
        } else {
            description.style.height = height + 'px';
            description.classList.add('open');
        }
    }

    const application = {
        position: "",
        name: "",
        phone: "",
        age: "",
        email: "",
        portfolio: "",
        experience: "",
        reason: ""
    }


    function addToApplications() {
        let answer = document.getElementById("answer").value;
        if (answer == "") answer = "Didn't Provide"
        if (application["position"] == "") {
            application["position"] = answer;
            let form = document.getElementById("question");
            form.innerHTML = `<h2>What is your name?</h2>
                <input type="text" placeholder="Name" name="name" id="answer">
                <button class="next" onclick="addToApplications()">Next</button>`
            return;
        } else if (application["name"] == "") {
            application["name"] = answer;
            let form = document.getElementById("question");
            form.innerHTML = `<h2>What is your phone number?</h2>
                <input type="text" placeholder="+1 162-661-519" name="phone" id="answer">
                <button class="next" onclick="addToApplications()">Next</button>`
            return;
        } else if (application["phone"] == "") {
            application["phone"] = answer;
            let form = document.getElementById("question");
            form.innerHTML = `<h2>What is your age?</h2>
                <input type="text" placeholder="Age" name="age" id="answer">
                <button class="next" onclick="addToApplications()">Next</button>`
            return;
        } else if (application["age"] == "") {
            application["age"] = answer;
            let form = document.getElementById("question");
            form.innerHTML = `<h2>What is your email?</h2>
                <input type="text" placeholder="Email" name="email" id="answer">
                <button class="next" onclick="addToApplications()">Next</button>`
            return;
        } else if (application["email"] == "") {
            application["email"] = answer;
            let form = document.getElementById("question");
            form.innerHTML = `<h2>Do you have a portfolio? If Yes, put the link to it.</h2>
                <input type="text" placeholder="Portfolio" name="portfolio" id="answer">
                <button class="next" onclick="addToApplications()">Next</button>`
            return;
        } else if (application["portfolio"] == "") {
            application["portfolio"] = answer;
            let form = document.getElementById("question");
            form.innerHTML = `<h2>Do you have any previous work experience? If so, how many hours?</h2>
                <input type="text" placeholder="Work Experience" name="experience" id="answer">
                <button class="next" onclick="addToApplications()">Next</button>`
            return;
        } else if (application["experience"] == "") {
            application["experience"] = answer;
            let form = document.getElementById("question");
            form.innerHTML = `<h2>Why should we pick you over other people?</h2>
                <input type="text" placeholder="Reason" name="reason" id="answer">
                <button class="next" onclick="addToApplications()">Next</button>`
            return;
        } else if (application["reason"] == "") {
            application["reason"] = answer;
            let form = document.getElementById("question");
            form.innerHTML = `<button onclick="submitApplication()">Submit</button>`
        }
    }


    function submitApplication() {
        let form = document.getElementById("question");
        form.innerHTML = `<h2>Thank you for applying!</h2>`
        fetch('/application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(application)
        }).then(() => {
            setTimeout(() => {
                loadHTML();
            }, 1000);
        })
    }



    let jobs = document.getElementsByClassName("job");
    for (let i = 0; i < jobs.length; i++) {
        hover(jobs[i]);
    }

    function apply() {
        let element = document.getElementById("application")
        if (element.style.opacity == 0) {
            appear(element)
            element.innerHTML = '<div class="application"><h2>Job Application</h2><form method="post" action="/application"><h1>What Position are you going for?</h1><select placeholder="Position" id="position" name="position"><option value="Web Developer">Web Developer</option><option value="Graphic Designer">Graphic Designer</option><option value="Artist">Artist</option><option value="Video Editor">Video Editor</option><option value="Photographer">Photographer</option></select><h1>What is your name?</h1><input type="text" placeholder="Name" name="name"><h1>What is your phone number?></h1><input type="text" name="phone" placeholder="+1 162-661-519"> <h1>What is your age?</h1><input type="text" placeholder="Age" name="age"><h1>What is your email?</h1><input type="text" placeholder="Email" name="email"><h1>Do you have a portfolio? If Yes, put the link to it.</h1><input type="text" placeholder="Portfolio" name="portfolio"><h1>Do you have any previous work experience? If so, how many hours?</h1><input type="text" placeholder="Work Experience" name="experience"><h1>Why should we pick you over other people?</h1><input type="text" placeholder="Reason" name="reason"><button type="submit">Submit</button></form></div>'
        } else {
            disappear(element);
            setTimeout(() => {
                element.innerHTML = "";
            }, 500);
        }
    }

    function appear(element) {
        element.style.opacity = "1";
    }

    function disappear(element) {
        element.style.opacity = "0";
    }
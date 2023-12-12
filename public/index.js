let body = document.getElementsByTagName("body")[0];
let head = document.getElementsByTagName("head")[0];
head.innerHTML += '<link rel="stylesheet" href="style.css">'

setTimeout(() => {
    body.innerHTML = '<div class="sidebar"> <h1 id="1"></h1> <h2 id="2"></h2> <h3 id="3"></h3> </div> <div class="job-box"> <div class="job"> <h1>Web Developer</h1> <p>Develop elements on the website</p> <h2>Open Positions: 0/5</h2> <div class="description"> <h1>Requirements</h1> <h2>Must have experience with web developement</h2> </div> </div> <div class="job"> <h1>Graphic Desginer</h1> <p>Design elements on the website or for shirts</p> <h2>Open Positions: 2/5</h2> <div class="description"> <h1>Requirements</h1> <h2>Must have experience with graphic design</h2> <h2>Be open minded and open to contributing towards ideas</h2> </div> </div> <div class="job"> <h1>Artist</h1> <p>Draw elements on the website or for shirts</p> <h2>Open Positions: 5/5</h2> <div class="description"> <h1>Requirements</h1> <h2>Must be able to do DIGITAL art </h2> <h2>Good Communication skills</h2> <h2>Have previous art work and experience.</h2> </div> </div> <div class="job"> <h1>Video Editor</h1> <p>Edit videos for the website</p> <h2>Open Positions: 0/5</h2> <div class="description"> <h1>Requirements</h1> <h2>Must be good with video editting</h2> <h2>Be able to add to ideas and be inovative.</h2> </div> </div> <div class="job"> <h1>Photographer</h1> <p>Take pictures for the website</p> <h2>Open Positions: 3/5</h2> <div class="description"> <h1>Requirements</h1> <h2>Must have a good camera skills</h2> <h2>Be open minded and open to contributing towards ideas</h2> </div> </div> </div> <div class="apply"> <button onclick="apply()" id="apply">Apply</button> </div> <div id="application" class="application-box"> </div> <div class="qna"> <span class="line"></span> <h1>Q&A</h1> <span class="line"></span> <h1>What is the goal of this brand?</h1> <h2>The goal of this brand is to make people feel welcomed and acknowledged.</h2> <span class="line"></span> <h1>What benefits do you offer?</h1> <h2>The benefits we offer are the following: competitive salaries, comprehensive healthcare coverage, flexible work hours, professional development opportunities, and a positive and inclusive work culture.</h2> <span class="line"></span> <h1>Why should you choose us?</h1> <h2>You should choose for us because we offer comprehensive healthcare coverage, the ability to have flexible work hours that fit with YOUR schedule, and a professional work enviroment.</h2> </div> <div class="footer-box"> <div class="copyright"> <h1>&copy; 2023 leafytea.host</h1> </div> </div>';

    type("text1");
    type("text2");
    type("text3");
    let jobs = document.getElementsByClassName("job");
    for (let i = 0; i < jobs.length; i++) {
        hover(jobs[i]);
    }
    appear(document.getElementsByClassName("job-box")[0]);
    setTimeout(() => {
        appear(document.getElementById("apply"));
    }, 300);
    setTimeout(() => {
        appear(document.getElementsByClassName("qna")[0]);
    }, 700);
}, 300);

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

function toggleDescription(description) {
    let measuring = document.createElement('div');
    measuring.classList.add('description', 'measuring');
    measuring.textContent = description.textContent;
    document.body.appendChild(measuring);
    let height = measuring.offsetHeight;
    measuring.remove();
    if (description.classList.contains('open')) {
        description.style.height = height + 'rem';
        setTimeout(() => {
            description.style.height = '0';
            description.classList.remove('open');
        }, 0);
    } else {
        description.style.height = height + 'rem';
        description.classList.add('open');
    }
}


function type(text) {
    if (text == "text1") {
        let text1 = "Nameless";
        let i = 0;
        let interval = setInterval(() => {
            if (i < text1.length) {
                document.getElementById("1").innerHTML = document.getElementById("1").innerHTML.replace("|", "");
                document.getElementById("1").innerHTML += text1.charAt(i) + "|";
                i++;
            } else {
                document.getElementById("1").innerHTML = document.getElementById("1").innerHTML.replace("|", "");
                clearInterval(interval);
            }
        }, 58);
    } else if (text == "text2") {
        let text2 = "Available Job Positions";
        let i = 0;
        let interval = setInterval(() => {
            if (i < text2.length) {
                document.getElementById("2").innerHTML = document.getElementById("2").innerHTML.replace("|", "");
                document.getElementById("2").innerHTML += text2.charAt(i) + "|";
                i++;
            } else {
                document.getElementById("2").innerHTML = document.getElementById("2").innerHTML.replace("|", "");
                clearInterval(interval);
            }
        }, 58);
    } else {
        let text2 = "For those who feel outcasted by society";
        let i = 0;
        let interval = setInterval(() => {
            if (i < text2.length) {
                document.getElementById("3").innerHTML = document.getElementById("3").innerHTML.replace("|", "");
                document.getElementById("3").innerHTML += text2.charAt(i) + "|";
                i++;
            } else {
                document.getElementById("3").innerHTML = document.getElementById("3").innerHTML.replace("|", "");
                clearInterval(interval);
            }
        }, 58);
    }
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

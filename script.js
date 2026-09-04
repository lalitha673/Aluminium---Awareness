/* =====================================
   LOADER
===================================== */

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.display = "none";
        }
    }, 800);
});


/* =====================================
   SCROLL TO TOP BUTTON
===================================== */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =====================================
   DARK MODE TOGGLE
===================================== */

const darkBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}


/* =====================================
   WHO SAFE LIMIT CALCULATOR
   (who-limits.html)
===================================== */

function calculateLimit() {

    const weightInput = document.getElementById("weight");

    if (!weightInput) return;

    const weight = parseFloat(weightInput.value);

    if (isNaN(weight) || weight <= 0) {

        document.getElementById("result").innerHTML =
            "Please enter a valid weight.";

        return;
    }

    const limit = weight * 2;

    document.getElementById("result").innerHTML =
        `
        <div class="alert alert-success mt-3">
            Safe Weekly Aluminium Limit:
            <strong>${limit.toFixed(2)} mg/week</strong>
        </div>
        `;
}


/* =====================================
   QUIZ DATA
===================================== */

const quizQuestions = [

    {
        question: "Which metal is commonly used in cookware and foil?",
        options: ["Iron", "Aluminium", "Copper", "Steel"],
        answer: "Aluminium"
    },

    {
        question: "WHO safe weekly aluminium intake is?",
        options: [
            "2 mg/kg",
            "20 mg/kg",
            "50 mg/kg",
            "100 mg/kg"
        ],
        answer: "2 mg/kg"
    },

    {
        question: "Which is a safer cookware alternative?",
        options: [
            "Plastic",
            "Glass",
            "Aluminium",
            "Thermocol"
        ],
        answer: "Glass"
    },

    {
        question: "Recycling aluminium helps reduce?",
        options: [
            "Pollution",
            "Electricity",
            "Water",
            "Food"
        ],
        answer: "Pollution"
    },

    {
        question: "Excessive aluminium exposure may affect?",
        options: [
            "Memory",
            "Hair color",
            "Height",
            "Voice"
        ],
        answer: "Memory"
    }
];


/* =====================================
   QUIZ GENERATOR
===================================== */

function loadQuiz() {

    const quizContainer =
        document.getElementById("quizContainer");

    if (!quizContainer) return;

    let html = "";

    quizQuestions.forEach((q, index) => {

        html += `
        <div class="mb-4">

            <h5>
                ${index + 1}. ${q.question}
            </h5>
        `;

        q.options.forEach(option => {

            html += `
            <label class="quiz-option">

                <input
                type="radio"
                name="q${index}"
                value="${option}">

                ${option}

            </label>
            `;
        });

        html += `</div>`;
    });

    quizContainer.innerHTML = html;
}


/* =====================================
   QUIZ SCORING
===================================== */

function submitQuiz() {

    let score = 0;

    quizQuestions.forEach((q, index) => {

        const selected =
            document.querySelector(
                `input[name="q${index}"]:checked`
            );

        if (
            selected &&
            selected.value === q.answer
        ) {
            score++;
        }
    });

    const result =
        document.getElementById("quizResult");

    if (result) {

        result.innerHTML =
            `
            <div class="alert alert-success mt-4">

            <h3>
            Quiz Completed!
            </h3>

            <p>
            Your Score:
            <strong>
            ${score}/${quizQuestions.length}
            </strong>
            </p>

            <hr>

            <h5>
            Certificate of Awareness
            </h5>

            <p>
            Congratulations! You successfully
            completed the Aluminium Awareness Quiz.
            </p>

            </div>
            `;
    }
}


/* =====================================
   AUTO LOAD QUIZ
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadQuiz();
});


/* =====================================
   CHART.JS SAMPLE DATA
   (dashboard.html)
===================================== */

function loadCharts() {

    /* PIE CHART */

    const pieCanvas =
        document.getElementById("pieChart");

    if (pieCanvas) {

        new Chart(pieCanvas, {

            type: "pie",

            data: {

                labels: [
                    "High Usage",
                    "Moderate Usage",
                    "Low Usage"
                ],

                datasets: [{

                    data: [40, 35, 25],

                    backgroundColor: [
                        "#dc3545",
                        "#ffc107",
                        "#198754"
                    ]
                }]
            }
        });
    }


    /* BAR CHART 1 */

    const bar1 =
        document.getElementById("barChart1");

    if (bar1) {

        new Chart(bar1, {

            type: "bar",

            data: {

                labels: [
                    "Foil",
                    "Cookware",
                    "Cans",
                    "Utensils"
                ],

                datasets: [{

                    label: "Usage",

                    data: [90, 80, 65, 40]
                }]
            }
        });
    }


    /* BAR CHART 2 */

    const bar2 =
        document.getElementById("barChart2");

    if (bar2) {

        new Chart(bar2, {

            type: "bar",

            data: {

                labels: [
                    "Steel",
                    "Glass",
                    "Clay",
                    "Cast Iron"
                ],

                datasets: [{

                    label: "Preference",

                    data: [70, 55, 40, 60]
                }]
            }
        });
    }


    /* DOUGHNUT */

    const doughnut =
        document.getElementById("doughnutChart");

    if (doughnut) {

        new Chart(doughnut, {

            type: "doughnut",

            data: {

                labels: [
                    "Aware",
                    "Not Aware"
                ],

                datasets: [{

                    data: [75, 25],

                    backgroundColor: [
                        "#198754",
                        "#dc3545"
                    ]
                }]
            }
        });
    }
}


/* =====================================
   AUTO LOAD CHARTS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadCharts();
});
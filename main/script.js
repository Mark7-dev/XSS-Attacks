const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


const query = new URLSearchParams(window.location.search).get("query")
document.getElementById("query-input").value = query
const queryOutput = document.getElementById("query-output")

queryOutput.innerHTML = query




const queryInput = document.getElementById("query-input1");
const queryOutput1 = document.getElementById("query-output1");

// Get the query parameter from the URL
const query1 = new URLSearchParams(window.location.search).get("query1");

// Sanitize the input by removing potential script tags
const sanitizedQuery = query1.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Set the sanitized input value to the input field
queryInput.value = sanitizedQuery;

// Display the sanitized input in the output span
queryOutput1.textContent = sanitizedQuery;



function copyText() {

    /* Copy text into clipboard */
    navigator.clipboard.writeText
    ("<h1 style=\"color:red;font-size:50px;\">This is a stored XSS attack!</h1>");
}

function copyText1() {

    /* Copy text into clipboard */
    navigator.clipboard.writeText
    ("<img src onerror=\"alert('This is a reflected XSS attack')\" />");
}
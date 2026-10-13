        
function showJobDetails(jobName) {
    alert("You selected: " + jobName);
}

function showJobDetails(jobName) {
    if (jobName === "Cloud Support Associate") {
        alert(
            "Job: Cloud Support Associate\n" +
            "Skills: AWS, Linux, Networking\n" +
            "Type: Sample full-time role"
        );
    } else if (jobName === "Junior Web Developer") {
        alert(
            "Job: Junior Web Developer\n" +
            "Skills: HTML, CSS, JavaScript\n" +
            "Type: Sample full-time role"
        );
    }
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;

    alert("Registration successful! Welcome, " + name + ".");
});
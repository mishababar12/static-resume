document.addEventListener("DOMContentLoaded", function () {
    // Get the skills section and the button element
    var skillsSection = document.querySelector(".skills-section");
    var toggleSkillsButton = document.getElementById("toggle-skills");
    // Initially set the button text based on the display property of the skills section
    if (skillsSection && toggleSkillsButton) {
        var isSkillsSectionVisible = skillsSection.style.display !== "none";
        // Set the initial text of the toggle button
        toggleSkillsButton.textContent = isSkillsSectionVisible ? "Hide Skills " : "Show Skills ";
        // Event listener for the toggle button click
        toggleSkillsButton.addEventListener("click", function () {
            // Check the current state of the skills section and toggle it
            if (skillsSection.style.display === "none" || !skillsSection.style.display) {
                skillsSection.style.display = "block"; // Show the skills section
                toggleSkillsButton.textContent = "Hide Skills"; // Update button text
            }
            else {
                skillsSection.style.display = "none"; // Hide the skills section
                toggleSkillsButton.textContent = "Show Skills"; // Update button text
            }
        });
    }
});

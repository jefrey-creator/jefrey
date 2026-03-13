function ToggleTheme() {
    // 1. Get current theme from the HTML attribute (more reliable than the toggle value)
    var currentTheme = $('html').attr('data-theme');

    var newTheme;

    // 2. Toggle the logic
    if (currentTheme === "light") {
        newTheme = "dark";
    } else {
        newTheme = "light";
    }

    // 3. Update the DOM and LocalStorage
    $('html').attr('data-theme', newTheme);
    localStorage.setItem("Theme", newTheme);
    
    // 4. Optional: Sync the controller/checkbox if necessary
    $('.theme-controller').val(newTheme);

    // console.log("Theme toggled. Current theme is now:", $('html').attr('data-theme'));
}

function currentTheme(){
    
    var savedTheme = localStorage.getItem("Theme") || "light";

    // 2. Apply it to the HTML tag immediately
    $('html').attr('data-theme', savedTheme);
    // 3. Sync your toggle/input (e.g., if it's a checkbox or select)
    $('.theme-controller').val(savedTheme);

}

$(document).ready(function(){
    currentTheme();
})

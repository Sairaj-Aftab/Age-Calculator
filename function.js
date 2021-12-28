

function ageCal(name, year) {
    let date = new Date();
    let age  = date.getFullYear() - year;

    if (name == '') {
        return`<p class="alert alert-danger">Please Fill Up Your Name</p>`
    } else if (year == '') {
        return`<p class="alert alert-danger">Please Fill Up Your Age</p>`
    } else {
        return`<p class="alert alert-success">Hi! ${name}. You are ${age} years old.</p>`
    }
}
const form = document.querySelector('form')
const inputs = document.querySelectorAll('#form input');

const expressions = {
    first_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone_number: /^\d{7,14}$/
}

const field = {
    first_name: false,
    last_name: false,
    email: false,
    phone_number: false,
    password: false,
}

function validate (e) {
    switch (e.target.name) {
        case 'first_name':
            if (expressions.first_name.test(e.target.value)) {
                document.getElementById('error_first').classList.remove('error_first')
                document.getElementById('first_name').classList.remove('input_error')
                field.first_name = true;
            } else {
                document.getElementById('error_first').classList.add('error_first')
                document.getElementById('first_name').classList.add('input_error')
                field.first_name = false;
            }
        break;

        case 'last_name':
            if (expressions.first_name.test(e.target.value)) {
                document.getElementById('error_last').classList.remove('error_last')
                document.getElementById('last_name').classList.remove('input_error')
                field.last_name = true;
            } else {
                document.getElementById('error_last').classList.add('error_last')
                document.getElementById('last_name').classList.add('input_error')
                field.last_name = false;
            }
        break;

        case 'email':
            if (expressions.email.test(e.target.value)) {
                document.getElementById('error_email').classList.remove('error_email')
                document.getElementById('email').classList.remove('input_error')
                field.email = true;
            } else {
                document.getElementById('error_email').classList.add('error_email')
                document.getElementById('email').classList.add('input_error')
                field.email = false;
            }
        break;

        case 'phone_number':
            if (expressions.phone_number.test(e.target.value)) {
                document.getElementById('error_phone').classList.remove('error_phone')
                document.getElementById('phone_number').classList.remove('input_error')
                field.phone_number = true;
            } else {
                document.getElementById('error_phone').classList.add('error_phone')
                document.getElementById('phone_number').classList.add('input_error')
                field.phone_number = false;
            }
        break;

        case 'password':
            if (expressions.password.test(e.target.value)) {
                document.getElementById('error_password').classList.remove('error_password')
                document.getElementById('password').classList.remove('input_error')
                field.password = true;
            } else {
                document.getElementById('error_password').classList.add('error_password')
                document.getElementById('password').classList.add('input_error')
                field.password = false;
            }
            if (password_confirm.value == password.value) {
                document.getElementById('error_password_confirm').classList.remove('error_password_confirm')
                document.getElementById('password_confirm').classList.remove('input_error')
                field.password_confirm = true;
            } else {
                document.getElementById('error_password_confirm').classList.add('error_password_confirm')
                document.getElementById('password_confirm').classList.add('input_error')
                field.password_confirm = false;
            }
        break;

        case 'password_confirm':
            if (password_confirm.value == password.value) {
                document.getElementById('error_password_confirm').classList.remove('error_password_confirm')
                document.getElementById('password_confirm').classList.remove('input_error')
                field.password_confirm = true;
            } else {
                document.getElementById('error_password_confirm').classList.add('error_password_confirm')
                document.getElementById('password_confirm').classList.add('input_error')
                field.password_confirm = false;
            }
        break;
    }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validate);
	input.addEventListener('blur', validate);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (field.first_name && field.last_name && field.phone_number && field.email && field.password && field.password_confirm) {
        form.reset();
        field.first_name = false;
        field.last_name = false;
        field.phone_number = false;
        field.email = false;
        field.password = false;
        field.password_confirm = false;
        document.getElementById('fill').classList.remove('fill_display')
    } else {
        document.getElementById('fill').classList.add('fill_display')
    }
})
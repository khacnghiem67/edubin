const registerForm = $('#form');
const inputs = registerForm.querySelectorAll('input[name]');

const regex = {
  text: {
    string: /^[a-z ,.'-]+$/i,
    error: 'Invalid !',
  },
  userName: {
    string: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
    error: 'Invalid user name !',
  },
  email: {
    string:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: 'Invalid email !',
  },
  password: {
    string: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    error: 'Minimum eight characters, at least one letter and one number !',
  },
};

function removeRegexClass(element) {
  element.classList.remove('border-[color:red]');
  element.classList.remove('border-[color:green]');
  element.nextElementSibling.innerHTML = '';
}

registerForm.onsubmit = function (e) {
  e.preventDefault();

  let password = {
    string: '',
    isTrue: true,
  };

  inputs.forEach(function (input) {
    removeRegexClass(input);

    const { name, value } = input;

    if (name === 'rePassword') {
      if (!password.isTrue || value !== password.string) {
        input.classList.add('border-[color:red]');
        input.nextElementSibling.innerHTML = 'Do not match password !';
      } else input.classList.add('border-[color:green]');
      return;
    }

    if (name === 'password') password.string = value;

    if (!regex[name].string.test(value)) {
      input.classList.add('border-[color:red]');
      input.nextElementSibling.innerHTML = regex[name].error;
      if (name === 'password') password.isTrue = false;
    } else input.classList.add('border-[color:green]');
  });
};

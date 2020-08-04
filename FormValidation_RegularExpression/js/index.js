console.log(`This is form validation practice`);



let uname = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let city = document.getElementById('city')
let state = document.getElementById('state')
let zip = document.getElementById('zip')


// 0 or 1 value 
let tru;

// for name valid or invalide text
let info = document.getElementById('ninfo')

uname.addEventListener('blur', (e) => {
    console.log('blur click')
    let Validation = /^([a-zA-Z]){2,15}\s?([a-zA-Z]){2,15}$/
    if (Validation.test(uname.value)) {
        tru = 1;
        uname.classList.remove('is-invalid')
        info.classList.remove('invalid-feedback')
        uname.classList.add('is-valid')
        info.classList.add('valid-feedback')
        info.innerText = 'Nice name !!'
    } else {
        tru = 0;
        uname.classList.add('is-invalid')
        info.classList.add('invalid-feedback')
        info.innerText = 'Please Enter valide name ex. Rahul More'
    }
    console.log(Validation.test(uname.value))
})

// for email valid or invalide text
let einfo = document.getElementById('einfo')

email.addEventListener('blur', (e) => {
    console.log('blur click')
    let Validation = /^([0-9a-zA-Z]){2}([_0-9a-zA-Z]){1,30}@([a-zA-Z]){2,15}\.([a-zA-Z]){2,15}$/
    if (Validation.test(email.value)) {
        tru = 1;
        email.classList.remove('is-invalid')
        einfo.classList.remove('invalid-feedback')
        email.classList.add('is-valid')
        einfo.classList.add('valid-feedback')
        einfo.innerText = 'Nice Email !!'
    } else {
        tru = 0;
        email.classList.add('is-invalid')
        einfo.classList.add('invalid-feedback')
        einfo.innerText = 'Please Enter valide email ex. Rahul@examle.com'
    }
    console.log(Validation.test(email.value))
});


// for phone valid or invalide text
let pinfo = document.getElementById('pinfo')

phone.addEventListener('blur', (e) => {
    console.log('blur click')
    let Validation = /^\+?[0-9]{0,2}\s?[0-9]{10}$/
    if (Validation.test(phone.value)) {
        tru = 1;
        phone.classList.remove('is-invalid')
        pinfo.classList.remove('invalid-feedback')
        phone.classList.add('is-valid')
        pinfo.classList.add('valid-feedback')
        pinfo.innerText = 'Nice Number !!'
    } else {
        tru = 0;
        phone.classList.add('is-invalid')
        pinfo.classList.add('invalid-feedback')
        pinfo.innerText = 'Please Enter valide Phone no. ex. +9198273947232'
    }
    console.log(Validation.test(phone.value))
});

// for city valid or invalide text
let cinfo = document.getElementById('cinfo')

city.addEventListener('blur', (e) => {
    console.log('blur click')
    let Validation = /^[a-zA-z]{3,30}$/
    if (Validation.test(city.value)) {
        tru = 1;
        city.classList.remove('is-invalid')
        cinfo.classList.remove('invalid-feedback')
        city.classList.add('is-valid')
        cinfo.classList.add('valid-feedback')
        cinfo.innerText = 'Nice City !!'
    } else {
        tru = 0;
        city.classList.add('is-invalid')
        cinfo.classList.add('invalid-feedback')
        cinfo.innerText = 'Please Enter valide City ex. Mumbai'
    }
    console.log(Validation.test(city.value))
});

// for state valid or invalide text
let sinfo = document.getElementById('sinfo')

state.addEventListener('blur', (e) => {
    console.log('blur click')
    let Validation = /^[a-zA-z]{3,30}$/
    if (Validation.test(state.value)) {
        tru = 1;
        state.classList.remove('is-invalid')
        sinfo.classList.remove('invalid-feedback')
        state.classList.add('is-valid')
        sinfo.classList.add('valid-feedback')
        sinfo.innerText = 'Nice State !!'
    } else {
        tru = 0;
        state.classList.add('is-invalid')
        sinfo.classList.add('invalid-feedback')
        sinfo.innerText = 'Please Enter valide State ex. Maharashtra'
    }
    console.log(Validation.test(state.value))
});

// for zip valid or invalide text
let zinfo = document.getElementById('zinfo')

zip.addEventListener('blur', (e) => {
    console.log('blur click')
    let Validation = /^[1-9]{1}[0-9]{4,10}$/
    if (Validation.test(zip.value)) {
        tru = 1;
        zip.classList.remove('is-invalid')
        zinfo.classList.remove('invalid-feedback')
        zip.classList.add('is-valid')
        zinfo.classList.add('valid-feedback')
        zinfo.innerText = 'Oooo !!'
    } else {
        tru = 0;
        zip.classList.add('is-invalid')
        zinfo.classList.add('invalid-feedback')
        zinfo.innerText = 'Please Enter valide zip code ex. 400023'
    }
    console.log(Validation.test(zip.value))
});

// button function
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault()
    if (tru == 1) {
        document.getElementById('massege').innerHTML = `<div class="alert alert-success alert-dismissible fade show"    role="alert">
            <strong>Submited!</strong> Your dedails is successfully submited. Thanck for joing.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      </div>`

      // cleare the massege after 4 secund
      setTimeout(() => {
          document.getElementById('massege').innerHTML = '';
      }, 4000);
      document.getElementById('formClear').reset()
        console.log('6 true valide');
    }
    else {
        document.getElementById('massege').innerHTML = `<div class="alert alert-danger alert-dismissible fade show"    role="alert">
            <strong>Error!</strong> Your dedails is not submite. Please try again.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      </div>`

      // cleare the massege after 4 secund
      setTimeout(() => {
        document.getElementById('massege').innerHTML = '';
    }, 4000);
      console.log('6 true valide');
    //   document.getElementById('formClear').reset()
        console.log('value false');
    }
    // console.log('clicked')
    console.log(tru)
})
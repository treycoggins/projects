
// Initialize Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Initialize Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

//Trigger toast notification when clicking 'Buy Now' buttons
const toastTriggers = document.getElementsByClassName('buy-now');
const purchaseToast = document.getElementById('purchase-toast');

[...toastTriggers].forEach((toastTrigger) => {
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(purchaseToast);
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        });
    };
});


/* Update cart total from Modal window */
const modalPurchase = document.getElementsByClassName('modal-purchase'); // grab modal purchase btn
const modalNoPurchase = document.getElementsByClassName('modal-nopurchase'); // grab all no-purchase btns
const modalBtns = document.querySelectorAll('[data-bs-dismiss="modal"]') // grab all modal btns
const cartTotal = document.getElementById('cart-total');    // shopping cart badge
let ticketCount = document.getElementById('ticket-select'); // number in select element
let total = 0;
let value = 0;
let clicked = false;

    // Listen for any nopurchase event and flag it
    for(let i = 0; i < modalNoPurchase.length; i++) {
    modalNoPurchase[i].addEventListener('click', () => {
        clicked = true;
        });
    };

    // Listen for any modal click event and reset the 
    // body overflow-y as well as the click flag
    for(let i = 0; i < modalBtns.length; i++) {
        modalBtns[i].addEventListener('click', () => {
            if(clicked) {
                clicked = false;
                body[0].style.setProperty('overflow-y', 'visible');
            } else {
                value = parseInt(ticketCount.options[ticketCount.selectedIndex].value);
                total += value;
                cartTotal.textContent = total;
                body[0].style.setProperty('overflow-y', 'visible');
            }
        });
    };


// Setup Alert functions

const alertPlaceholder = document.getElementById('form-alert')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

// Trigger Alert if the Form is not properly filled out (currently does not validate)
const submitTrigger = document.getElementById('form-submit');
const formAlert = document.getElementById('form-alert');
if (submitTrigger) {
submitTrigger.addEventListener('click', () => { // TODO Create form validation
    appendAlert('Check the form submission. All fields are required.', 'danger')
    });
};
// Trigger Alert if the Form is reset
const resetTrigger = document.getElementById('form-reset')
if (resetTrigger) {
  resetTrigger.addEventListener('click', () => {
    appendAlert('The form has been cleared.', 'secondary')
  });
};

// Fill in FAQ-info after user clicks an FAQ dropdown link
const faqPlaceholder = document.getElementById('faq-info');
const appendFAQ = (message) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        '<div class="fs-1">',
        message,
        '</div>'
    ].join('');

    faqPlaceholder.append(wrapper);
};

    // Apply one of the FAQ messages
    const faqLinks = document.querySelectorAll('.dropdown-item');
    for(let i = 0; i < faqLinks.length; i++) {
        faqLinks[i].addEventListener('click', () => {
            faqPlaceholder.innerHTML = '';
            appendFAQ(message[i]);
        });
        const message = [
            "Salvage Station follows all COVID-19 protocols. Masks are required indoors.",
            "All patrons must possess a ticket at all times. No re-entry allowed.",
            "All persons will be screened for weapons upon entry and bags will be checked.", 
            "Personal bags will be permitted. Lawn chairs will not be permitted.",
            "Alcohol will be sold at beer gardens around the venue. No outside alcohol allowed. Thank you.", 
            "Salvage Station is a smoke-free venue. There are designated smoking areas on either side of the grounds.", 
            "All dogs are welcome provided they are leashed and unobtrusive to guests.", "Premier parking available through online sale. Overflow parking will be charged day-of and free shuttle service provided."
        ];
    };


// Validation IIFE for Forms

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  /* Page loading spinner creates a false timing buffer for loading the page */
/* !! MUST GO AT THE END OF THE SCRIPT TO PREVENT SCROLL DELAY ON LOAD !! */

const body = document.getElementsByTagName('body');
const overlay = document.getElementById('overlay');

window.addEventListener('load', (e) => {
        
    setTimeout(() => {
        overlay.remove();
         window.scrollTo(0, 0);  
        body[0].style.setProperty('overflow-y', 'visible');
    }, 2000)
});


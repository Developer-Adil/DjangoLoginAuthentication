document.getElementById("contact").addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
        alert("Please fill in all the required fields.");
        return;
    }

    var body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> Phone: ' + phone + '<br/> Subject: ' + subject + '<br/> Message: ' + message;

    Email.send({
        SecureToken: "dcedb951-6903-423c-8a56-1c8be7df7bba",
        To: 'igkayozz2002@gmail.com',
        From: "adilkhankhan2003@gmail.com",
        Subject: "Contact Message",
        Body: body
    }).then(
        function(message) {
            alert("Message sent successfully");

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        }
    ).catch(
        function(error) {
            console.log("Error:", error);
            alert("An error occurred while sending the message. Please try again later.");
        }
    );
});



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navmenu li a');
let homeLink = document.querySelector('.navmenu li a[href="#home"]');

window.onscroll = () => {
    let top = window.scrollY;


    if (top === 0) {
        navLinks.forEach(link => link.classList.remove('active'));
        homeLink.classList.add('active');
        return;
    }

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navmenu li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

homeLink.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    homeLink.classList.add('active');
});




if (!window.chrome || !window.chrome.devtools) {
    let menuIcon = document.querySelector('#menu-icon');
    let navMenu = document.querySelector('.navmenu');
    let menuItems = document.querySelectorAll('.navmenu li a');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navMenu.classList.toggle('active');
    };

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navMenu.classList.remove('active');
        });
    });
}

const heading = document.querySelector('.home-content-h3');
const letters = heading.textContent.split('');
const spans = [];

for (let i = 0; i < letters.length; i++) {
    spans[i] = `<span>${letters[i]}</span>`;
}

heading.innerHTML = spans.join('');
const spanElements = heading.querySelectorAll('span');

for (let i = 0; i < spanElements.length; i++) {
    spanElements[i].style.animationDelay = `${i * 50}ms`;
}


const sr = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 50
});

// Define the elements to reveal
const revealElements = [
    '.home-content-h1',
    '.home-content-h3',
    '.para',
    '.icons',
    '.box',
    '.heading',
    '.about-img',
    '.hero-img',
    '.about-content p',
    '.Heading',
    '.portfolio-box',
    'form',
    '.footer-text p',
    '.footer-iconTop'
];

// Reveal the elements
revealElements.forEach(element => {
    sr.reveal(element, { origin: 'bottom' });
});
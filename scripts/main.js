document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');
    const contents = document.querySelectorAll('.content-container');
    const header = document.querySelector('.header-container');
    const homeButton = document.querySelector('.home-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            contents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
            buttons.forEach(btn => btn.classList.remove('active-button'));
            this.classList.add('active-button');
            header.classList.add('top');
            homeButton.classList.add('visible');
        });
    });

    homeButton.addEventListener('click', function() {
        contents.forEach(content => {
            content.classList.remove('active');
        });
        buttons.forEach(btn => btn.classList.remove('active-button'));
        header.classList.remove('top');
        homeButton.classList.remove('visible');
    });
});
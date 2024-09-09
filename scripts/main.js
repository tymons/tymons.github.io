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
            header.classList.add('top');
        });
    });

    homeButton.addEventListener('click', function() {
        contents.forEach(content => {
            content.classList.remove('active');
        });
        header.classList.remove('top');
    });
});
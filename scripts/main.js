document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');
    const contents = document.querySelectorAll('.content-container');
    const header = document.querySelector('.header-container');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('active-button')) {
                // If the button is already active, reset to home view
                contents.forEach(content => {
                    content.classList.remove('active');
                });
                buttons.forEach(btn => btn.classList.remove('active-button'));
                header.classList.remove('top');
            } else {
                // Otherwise, activate the corresponding content
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
            }
        });
    });
});
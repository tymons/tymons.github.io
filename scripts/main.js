document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');
    const contents = document.querySelectorAll('.content-container');
    const header = document.querySelector('.header-container');

    function updateURL(targetId) {
        const url = new URL(window.location);
        url.searchParams.set('content', targetId);
        history.pushState({ content: targetId }, '', url);
    }

    function activateContent(targetId) {
        contents.forEach(content => {
            if (content.id === targetId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
        buttons.forEach(btn => btn.classList.remove('active-button'));
        document.querySelector(`.toggle-button[data-target="${targetId}"]`).classList.add('active-button');
        header.classList.add('top');
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            if (this.classList.contains('active-button')) {
                // If the button is already active, reset to home view
                contents.forEach(content => {
                    content.classList.remove('active');
                });
                buttons.forEach(btn => btn.classList.remove('active-button'));
                header.classList.remove('top');
                history.pushState({}, '', window.location.pathname);
            } else {
                // Otherwise, activate the corresponding content
                activateContent(targetId);
                updateURL(targetId);
            }
        });
    });

    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.content) {
            activateContent(event.state.content);
        } else {
            contents.forEach(content => {
                content.classList.remove('active');
            });
            buttons.forEach(btn => btn.classList.remove('active-button'));
            header.classList.remove('top');
        }
    });

    // Check URL on page load to restore state
    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get('content');
    if (contentId) {
        activateContent(contentId);
    }
});
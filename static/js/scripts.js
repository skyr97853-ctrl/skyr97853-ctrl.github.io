const section_names = ['home', 'awards', 'experience', 'publications'];


window.addEventListener('DOMContentLoaded', event => {
    const content_dir = document.body?.dataset?.contentDir || 'contents/';
    const config_file = document.body?.dataset?.configFile || 'config.yml';
    const lightbox = createImageLightbox();

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
            }).then(() => {
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log(error));
    });

    document.addEventListener('click', (e) => {
        const image = e.target.closest('.project-figure img');
        if (!image) {
            return;
        }

        const caption = image.closest('.project-figure')?.querySelector('figcaption');
        lightbox.open(image.currentSrc || image.src, image.alt || '', caption?.innerHTML || '');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.close();
        }
    });

}); 

function createImageLightbox() {
    const overlay = document.createElement('div');
    overlay.className = 'image-lightbox';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
        <div class="image-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image preview">
            <button class="image-lightbox-close" type="button" aria-label="Close preview">&times;</button>
            <div class="image-lightbox-media">
                <img alt="">
            </div>
            <p class="image-lightbox-caption"></p>
        </div>
    `;
    document.body.appendChild(overlay);

    const dialog = overlay.querySelector('.image-lightbox-dialog');
    const image = overlay.querySelector('.image-lightbox-media img');
    const caption = overlay.querySelector('.image-lightbox-caption');
    const closeButton = overlay.querySelector('.image-lightbox-close');

    const close = () => {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    const open = (src, alt, captionHtml) => {
        image.src = src;
        image.alt = alt;
        caption.innerHTML = captionHtml;
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    overlay.addEventListener('click', (e) => {
        if (!dialog.contains(e.target) || e.target === closeButton) {
            close();
        }
    });

    return { open, close };
}

document.addEventListener('DOMContentLoaded', () => {
    const umbrellaImage = document.getElementById('umbrella-image');
    const logoPreview = document.getElementById('logo-preview');
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const logoUpload = document.getElementById('logo-upload');

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const color = swatch.getAttribute('data-color');
            umbrellaImage.src = `images/umbrella-${color}.png`;
        });
    });

    logoUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                logoPreview.src = e.target.result;
                logoPreview.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        }
    });
});

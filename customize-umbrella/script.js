document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    const umbrellaImage = document.getElementById('umbrella-image');
    const logoPreview = document.getElementById('logo-preview');
    const logoUpload = document.getElementById('logo-upload');
    const uploadBtn = document.getElementById('upload-btn');
    const uploadBtnText = uploadBtn.querySelector('span');
    const uploadBtnIcon = uploadBtn.querySelector('img');

    const colors = {
        pink: 'images/umbrella-pink.png',
        blue: 'images/umbrella-blue.png',
        yellow: 'images/umbrella-yellow.png'
    };

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            umbrellaImage.src = colors[color];
        });
    });

    uploadBtn.addEventListener('click', () => {
        logoUpload.click();
    });

    logoUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            uploadBtnIcon.src = 'images/loader_icon.svg';
            uploadBtnText.textContent = 'Uploading...';

            reader.onload = (e) => {
                setTimeout(() => { // Simulate upload delay
                    logoPreview.src = e.target.result;
                    logoPreview.classList.remove('hidden');
                    uploadBtnIcon.src = 'images/upload-icon.svg';
                    uploadBtnText.textContent = file.name;
                }, 1000);
            };

            reader.readAsDataURL(file);
        }
    });
});
 
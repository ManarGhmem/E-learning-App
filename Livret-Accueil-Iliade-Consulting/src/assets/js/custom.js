$(function() {
    $('#carousel1').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            }
        }
    });
    $('#testi').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            }
        }
    });
    $('a.nav-link, .dm-btn').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 10
        }, 1000);
        event.preventDefault();
    });
});


function openFileInput() {
    document.getElementById('fileInput').click();
}

function handleFileSelect(input) {
    var file = input.files[0];
    if (file) {
        var formData = new FormData();
        formData.append('file', file);

        fetch('upload.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Erreur lors du téléchargement du fichier.');
        })
        .then(data => {
            alert('Le fichier a été ajouté avec succès à la carte.');
        })
        .catch(error => {
            alert('Une erreur est survenue : ' + error.message);
        });
    }
}

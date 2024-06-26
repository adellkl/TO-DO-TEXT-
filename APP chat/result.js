window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const uniqueId = urlParams.get('id');
    const text = localStorage.getItem(uniqueId);

    if (text) {
        document.getElementById('displayText').innerText = text;
        const shareableLink = `${window.location.origin}/result.html?id=${uniqueId}`;
        const linkElement = document.getElementById('shareableLink');
        linkElement.href = shareableLink;
        linkElement.innerText = shareableLink;
    } else {
        document.getElementById('displayText').innerText = "Texte non trouvé.";
    }

    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function() {
        const link = document.getElementById('shareableLink').href;
        navigator.clipboard.writeText(link).then(function() {
            alert('Lien copié dans le presse-papiers.');
        }, function() {
            alert('Échec de la copie du lien.');
        });
    });
};

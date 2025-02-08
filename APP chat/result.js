window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const uniqueId = urlParams.get('id');
    let text = localStorage.getItem(`permanent_${uniqueId}`);

    if (!text) {
        document.getElementById('displayText').innerText = "Ce message n'existe pas.";
        return;
    }

    document.getElementById('displayText').innerText = text;

    document.getElementById('copyButton').addEventListener('click', function () {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Lien copié dans le presse-papiers.');
        });
    });
};

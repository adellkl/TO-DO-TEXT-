document.getElementById('submitButton').addEventListener('click', function () {
    const text = document.getElementById('inputText').value.trim();
    if (text === "") {
        alert("Veuillez entrer un message.");
        return;
    }

    const uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    localStorage.setItem(`permanent_${uniqueId}`, text);

    const shareableLink = `${window.location.origin}${window.location.pathname.replace('index.html', '')}result.html?id=${uniqueId}`;

    window.location.href = shareableLink;
});

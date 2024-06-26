// main.js
document.getElementById('submitButton').addEventListener('click', function() {
    const text = document.getElementById('inputText').value;
    if (text.trim() === "") {
        alert("Veuillez entrer du texte.");
        return;
    }

    const uniqueId = Math.random().toString(36).substr(2, 9);
    localStorage.setItem(uniqueId, text);

    const shareableLink = `${window.location.origin}/result.html?id=${uniqueId}`;
    window.location.href = shareableLink;
});

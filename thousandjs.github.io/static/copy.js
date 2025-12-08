var copy_text = function(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log("Copied text" + text)
    })
    .catch(err => {
        console.error('Error copied text', err);
    });
}

export default copy_text
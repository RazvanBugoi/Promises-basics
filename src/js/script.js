let input = document.getElementById('link');
let btn = document.getElementById('add');

function addLibrary(link) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = link;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script loading error for link : ${link}`))

        document.head.append(script);
    });
}

add.onclick = function loadScript() {
    let promise = addLibrary(input.value);

    promise.then(
        script => alert(`Library ${script.src} has been loaded!`),
        error => alert(`Error: ${error.message}`)
    );
}
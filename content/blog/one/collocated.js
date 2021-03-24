function collocate_js(n) {
    let node = document.querySelector("#collocate_js_" + n);

    node.textContent = "Hello from collocated javascript, counter: " + n + ".";
}

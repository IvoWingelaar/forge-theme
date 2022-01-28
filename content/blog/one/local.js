function embed_js(n) {
    let node = document.querySelector("#local_js_" + n);

    node.textContent = "Hello from local javascript, counter: " + n + ".";
}

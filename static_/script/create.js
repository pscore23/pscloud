function _getPath() {
    window.location.pathname.toString().replace("/", "");
};

function _setState(text) {
    window.history.replaceState({}, "", `/project/id/${text}`);
};

function create() {
    let path = _getPath();

    window.location.href = "/";

    window.onload = () => {
        window.document.querySelector("#insert").innerHTML = `
            ${path}
        `;
        _setState(path);
    }
};

window.onload = () => {
    create();
}
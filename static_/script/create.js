function _getPath() {
    window.location.pathname.toString().replace("/", "");
};

function _setState(text) {
    window.history.replaceState({}, "", `/project/id/${text}`);
};

export function create() {
    let path = _getPath();

    window.location.href = "/";

    window.document.querySelector("#insert").innerHTML = `
        ${path}
    `;

    _setState(path);
};
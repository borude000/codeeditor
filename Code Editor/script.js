const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const output = document.getElementById("output");

function updateOutput() {
    const html = htmlCode.value;
    const css = "<style>" + cssCode.value + "</style>";
    const js = "<script>" + jsCode.value + "</script>";
    output.contentDocument.body.innerHTML = html + css + js;
    output.contentWindow.eval(jsCode.value);
}

htmlCode.addEventListener("input", updateOutput);
cssCode.addEventListener("input", updateOutput);
jsCode.addEventListener("input", updateOutput);

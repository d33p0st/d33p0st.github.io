// Initialize Highlight.js on all code blocks
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
});
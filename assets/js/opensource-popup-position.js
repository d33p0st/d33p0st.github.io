// Debounce function to prevent excessive processing during resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// function to process open-source entries
function processOpenSource() {
    // process no matter the window screen
    // earlier it was for smaller screens
    let container = document.querySelector('.opensource');
    let entries = container.querySelectorAll('.tooltip');
    // get container dimensions
    const containerRect = container.getBoundingClientRect();

    // create a map to store entries by their vertical position (row)
    const rowMap = new Map();

    // Group entries by their vertical pos
    entries.forEach(entry => {
        const rect = entry.getBoundingClientRect();
        const top = Math.round(rect.top); // Round to handle minor pixel differences

        if (!rowMap.has(top)) {
            rowMap.set(top, []);
        }
        rowMap.get(top).push(entry);
    });

    // process each row
    rowMap.forEach(rowEntries => {
        const midpoint = Math.ceil(rowEntries.length / 2);

        // process first half of the entry in row
        // make sure the popup opens on the right side
        rowEntries.slice(0, midpoint).forEach(entry => {
            entry.setAttribute('position', 'right-side');
        });

        // process second half
        // position='left-side'
        rowEntries.slice(midpoint).forEach(entry => {
            entry.setAttribute('position', 'left-side');
        });
    });
}

window.addEventListener('load', processOpenSource);
window.addEventListener('resize', debounce(processOpenSource, 250));
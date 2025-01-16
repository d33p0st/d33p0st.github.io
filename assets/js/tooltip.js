document.querySelectorAll('.tooltip').forEach(link => {
    link.addEventListener('mouseover', function () {
      const tooltipText = this.getAttribute('data-tooltip').replace(/<br>/g, '\n');
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip-popup';
      tooltip.innerText = tooltipText;
  
      const rect = this.getBoundingClientRect();
      tooltip.style.position = 'absolute';
      tooltip.style.top = `${rect.top - 40}px`; // Adjust height
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.transform = 'translateX(-50%)';
      tooltip.style.backgroundColor = '#333';
      tooltip.style.color = '#fff';
      tooltip.style.padding = '10px';
      tooltip.style.borderRadius = '5px';
      tooltip.style.whiteSpace = 'pre-wrap'; // Ensure line breaks are respected
      tooltip.style.zIndex = '9999';
  
      document.body.appendChild(tooltip);
  
      this.addEventListener('mouseout', () => tooltip.remove());
    });
  });
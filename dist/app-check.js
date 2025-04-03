// This file is used to check if the application assets are loaded correctly
console.log('Hinglish Gaaliya DB - App check script loaded successfully!');

// Check if the main DOM element exists
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content loaded on:', window.location.href);
  
  setTimeout(function() {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      console.log('Root element found, app should be rendering');
      
      // Check if any child elements are present
      if (rootElement.children.length > 0) {
        console.log('App content found within root element');
      } else {
        console.error('Root element exists but has no children - potential rendering issue');
      }
    } else {
      console.error('Root element not found - this indicates a critical issue');
    }
  }, 1000);
}); 
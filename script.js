fetch('Test.json')
    .then(response => response.json())
    .then(data => {
        const contentDiv = document.getElementById('content');
        const keys = Object.keys(data);
        
        keys.forEach(key => {
            const value = data[key];
            const formattedValue = value.replace(/\\n/g, '<br>').replace(/<color=#([A-Fa-f0-9]+)>/g, '<span style="color: #$1">').replace(/<\/color>/g, '</span>');
            contentDiv.innerHTML += `<p>${formattedValue}</p>`;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
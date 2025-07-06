 document.getElementById('requestType').addEventListener('change',
function () { const type = this.value;
    
document.getElementById('hardwareOptions').classList.add('hidden');
document.getElementById('softwareOptions').classList.add('hidden'); if (type ===
'hardware') {
document.getElementById('hardwareOptions').classList.remove('hidden'); } else if
(type === 'software') {
document.getElementById('softwareOptions').classList.remove('hidden'); } });
document.getElementById('requestForm').addEventListener('submit', (e) =>{
e.preventDefault(); alert('Form submitted successfully!')});
 // You can simulate
//storing this in ServiceNow by logging to console or pushing to a mock API }
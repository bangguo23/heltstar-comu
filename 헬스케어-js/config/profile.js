document.getElementById('upload-photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('profile-photo-preview').src = e.target.result;
    };
    reader.readAsDataURL(file);
});

document.querySelector('.edit-profile').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;
    const email = document.getElementById('email').value;
    const password = prompt("Enter your password:");
    const photo = document.getElementById('profile-photo-preview').src;

    const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, bio, email, password, photo })
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message);
    } else {
        alert('Error: ' + data.message);
    }
});

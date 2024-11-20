document.getElementById('SignupForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('http://localhost:3000/api/signup', {
            name,
            email,
            password
        });

        if (response.data.success) {
            alert('Signup successful!');
            document.getElementById('SignupForm').reset();
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('Signup failed');
    }
});

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json();
})
.then(data => {
    data.forEach(user => {
        const markup = `<tr><td>${user.id}</td><td>${user.name}</td></tr>`;
        document.querySelector('#table-data').insertAdjacentHTML('beforeend', markup);
    });
})
.catch (error => console.log(error))
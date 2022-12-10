const postApp = () => {

    // Get element from DOM 
    const tableBody = document.querySelector('.table__body')
    
    const posts = async () => {

        try {

            const API_URL = 'https://blog-api-assignment.up.railway.app/posts'; 
            const getData = await fetch(API_URL);
            const response = await getData.json();

            let postTemplate = '';

            for( let res of response) {

                let resDate = new Date(res.date)

                postTemplate += `
                    <tr class="table__row">
                        <td class="table__data">${res.title}</td>
                        <td class="table__data">${res.author}</td>
                        <td class="table__data">${res.tags.join(', ')}</td>
                        <td class="table__data">${resDate.getFullYear()}-${resDate.getMonth()}-${resDate.getDate()}</td>
                        <td class="table__data table__data-buttons">
						    <a href="">Update</a>
						    <a href="#" data-id="${res._id}" class="delete-buttons">Delete</a>
					    </td>
                    </tr>
                `
            }

            tableBody.innerHTML = postTemplate

        } catch(error) {
            console.error('Something went wrong')

        }


        const deleteButtons = document.querySelectorAll('.delete-buttons');

        console.log(deleteButtons)

        for(let deleteButton of deleteButtons) {
            deleteButton.addEventListener('click', async (event) => {

                let deleteId = event.target.dataset.id 

                try {
                    const API_URL = 'https://blog-api-assignment.up.railway.app/posts/';
                    
                    await fetch(API_URL + deleteId, {
                        method: 'DELETE'
                    });

                    event.target.parentNode.parentNode.remove()

                } catch(error) {
                    console.error('Something went wrong')

                }

    
            })

        }


    }

    posts()
}


postApp();
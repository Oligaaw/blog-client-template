const postApp = () => {

    // Get element from DOM 
    const tableBody = document.querySelector('.table__body')
    
    const posts = async () => {

        try {

            const API_URL = 'https://blog-api-assignment.up.railway.app/posts'; 
            const getData = await fetch(API_URL);

            if(!getData.ok) {
                throw new Error('Something went wrong!')
            }

            const response = await getData.json();

            let postTemplate = '';

            for( let res of response) {

                let resDate = new Date(res.date)

                let resDatehour = resDate.getHours()
                let resDateMinutes = resDate.getMinutes()

                resDatehour = resDatehour < 10 ? "0" + resDatehour : resDatehour;
                resDateMinutes = resDateMinutes < 10 ? "0" + resDateMinutes : resDateMinutes

                postTemplate += `
                    <tr class="table__row">
                        <td class="table__data">
                            <p>${res.title}</p>
                        </td>
                        <td class="table__data">
                            <p>${res.author}</p>
                        </td>
                        <td class="table__data">
                            <p>${res.tags.join(', ')}</p>
                        </td>
                        <td class="table__data">
                            <p>${resDate.getFullYear()}-${resDate.getMonth()}-${resDate.getDate()} ${resDatehour}:${resDateMinutes}</p>
                        </td>
                        <td class="table__data table__data-buttons">
						    <a href="update-post.html?id=${res._id}" class="update-buttons">Update</a>
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
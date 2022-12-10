const createPostApp = () => {

    const createPostForm = document.querySelector('.create-post__form')

    createPostForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        const inputValue = event.target

        let formData = new FormData(inputValue); 

        console.log(formData)

        let formDataObject = {
            title: formData.get('title'),
            author: formData.get('name'),
            tags: formData.get('tags'),
            content: formData.get('content')
        }

        try {
            const API_URL = 'https://blog-api-assignment.up.railway.app/posts';
            
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formDataObject)
            });

           location.replace('index.html')

        } catch(error) {
            console.error('Something went wrong')

        }

    })


}

createPostApp()
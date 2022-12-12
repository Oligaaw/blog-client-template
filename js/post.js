window.onload = function() {

    const container = document.querySelector('.container')
    let getPostId = new URLSearchParams(window.location.search)

    const getSinglePost = async () => {

        try {

            const API_URL = 'https://blog-api-assignment.up.railway.app/posts/'; 
            const getData = await fetch(API_URL + getPostId.get('id'));
            const response = await getData.json();

            let blogTemplate = `
            <div class="content">
                <h2 class="content__title">${response.title}</h2>
                <p class="content__author">Author: ${response.author}</p>
                <p class="content__text">${response.content}</p>
                <p class="content__tags">Tags: <em>${response.tags.join(', ')}</em></p>
                <a href="index.html" class="content__button">&#x2190; back</a>
            </div>
            
            `

            container.innerHTML = blogTemplate;

        } catch(error) {
            console.error('Something went wrong!')

        }

    }

    getSinglePost()



    



}

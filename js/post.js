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
                <a href="admin/index.html" class="admin-btn-link">Admin</a>
                <h2 class="content__title">${capitalizeFirstLetter(response.title)}</h2>
                <p class="content__author"><b>${capitalizeFirstLetter(response.author)}</b></p>
                <p class="content__text">${response.content}</p>
                <p class="content__tags">Tags: <em>${response.tags.join(', ')}</em></p>
                <a href="index.html" class="content__button">&#x2190; Back</a>
            </div>
            
            `

            container.innerHTML = blogTemplate;

        } catch(error) {
            console.error('Something went wrong!')

        }

    }
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getSinglePost()



    



}

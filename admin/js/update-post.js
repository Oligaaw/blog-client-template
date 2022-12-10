window.onload = function() {

    let getId = new URLSearchParams(window.location.search)

updatePost()
    async function updatePost() {
        try {
            const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + getId.get("id") );
            let blogPost = await response.json()
            
                document.getElementById('title').value = blogPost.title;
                document.getElementById('name').value = blogPost.author;
                document.getElementById('tags').value = blogPost.tags.join(', ');
                document.getElementById('content').value = blogPost.content;

        }   catch(error) {
                console.log(error)
            }
    
    }
    
    document.getElementById('update-post-form').addEventListener('submit', async function(e) {
        e.preventDefault();

        const updateValue = e.target

        let updateData = new FormData(updateValue); 

        let updateObject = {
            title: updateData.get('title'),
            author: updateData.get('name'),
            tags: updateData.get('tags'),
            content: updateData.get('content')
        }

        try {
            await fetch('https://blog-api-assignment.up.railway.app/posts/' + getId.get("id"), {
                method: 'PATCH', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateObject)
            })
    
            location.replace('index.html')

        }   catch(error) {
                console.log(error)
        }
    })

}

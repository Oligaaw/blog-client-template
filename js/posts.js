addLinkBtn()
fetchBlogData()

function addLinkBtn() {
    let linkBtn = document.createElement('a');
        linkBtn.textContent = "Admin";
        linkBtn.setAttribute('href', 'admin/index.html')
        linkBtn.classList.add('admin-link')
    
    let linkDiv = document.getElementById('link-div');
        linkDiv.append(linkBtn);
    
}

async function fetchBlogData() {
    const response = await fetch ('https://blog-api-assignment.up.railway.app/posts');

    const blogData = await response.json()

    let blogContent = '';
    for (let data of blogData) {

        blogContent += `
        <section id="post-section">
            <h1 id="headline">${capitalizeFirstLetter(data.title)}</h1>
            <h3>${capitalizeFirstLetter(data.author)}</h3>
            <i>${data.date}</i>
            <p>Tags: ${data.tags.join(', ')}</p>
            <p id="text">${limitContent(data.content, 100)}<a href="post.html?id=${data._id}" class="read-more">Read more</a></p>
        </section>
        `;
    }
    document.getElementById('new-section-div').innerHTML= blogContent;
    
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function limitContent (string = '', limit = 0) {  
return string.substring(0, limit) + "...";
}
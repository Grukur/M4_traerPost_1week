class Get {
    constructor(url) {
        this.url = url;
    }

    getPosts = async () => {
        try {
            let response = await fetch(`${this.url}`)
            if (response.status === 200) {
                let data = await response.json();
                this.#render(data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    #render = (data) => {
        try {
            let postSave = '';
            data.forEach(post => {
                postSave += `
                <li>
                    <p>Usuario con Id: ${post.userId}</p>
                    <p>Post con Id: ${post.id}</p>
                    <p><strong> Titulo: ${post.title}</strong></p>
                    <p>${post.body}</p>
                </li>
                `
            })

            document.getElementById('post-data').innerHTML = postSave;
        } catch (error) {
            console.log(error)
        }
    }
}

let classCreator = () => {
    let info = new Get('https://jsonplaceholder.typicode.com/posts')
    info.getPosts();
}


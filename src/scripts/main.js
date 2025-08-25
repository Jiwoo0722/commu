document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('post-form');
    const postsList = document.getElementById('posts');

    // localStorage에서 글 목록 불러오기
    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        postsList.innerHTML = '';
        posts.forEach(post => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${post.title}</strong><br>${post.content}`;
            postsList.prepend(li);
        });
    }

    // 글 작성 시 localStorage에 저장
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        posts.push({ title, content });
        localStorage.setItem('posts', JSON.stringify(posts));

        loadPosts();
        form.reset();
    });

    loadPosts();
});
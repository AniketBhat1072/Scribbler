var deleteModal=document.querySelector('#deleteModal');
document.querySelectorAll('#trash').forEach(item=>{
    item.addEventListener('click', event=>{
        deleteModal.style.display='block';
    })
})

document.querySelector('#no').addEventListener('click',function(){
    deleteModal.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', function(){
    const trash=document.querySelectorAll('#trash');
    trash.forEach(function(button){
        button.addEventListener('click', function(){
            document.querySelector('#deleteModal').style.display='block';
            const delpost=button.closest(".post");
            document.querySelector('#yes').addEventListener('click', function() {
                delpost.remove();
                document.querySelector('#deleteModal').style.display = 'none';
            })
        })
    })
})


document.querySelectorAll("#dots-btn").forEach(item =>{
    item.addEventListener('click' , event => {
        window.location.href = "./post.html";
    });
});


document.addEventListener('DOMContentLoaded', function(){
    const dotIcon=document.querySelectorAll('#dots-btn');

    dotIcon.forEach(icon=> {
        icon.addEventListener('click',function(){
            const postContainer = icon.closest('.post');
            const postTitle = postContainer.querySelector('.title-section').textContent;
            const postContent = postContainer.querySelector('.post-text').textContent;
            const authorName = postContainer.querySelector('.author-info').textContent;
            window.location.href = `post.html?title=${encodeURIComponent(postTitle)}&content=${encodeURIComponent(postContent)}&author=${encodeURIComponent(authorName)}`;
        })
    })
})
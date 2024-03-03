document.addEventListener('DOMContentLoaded', function() {
    var editButton = document.getElementById("edit-button")
    var saveButton = document.getElementById('save-button');
    var elements = document.querySelectorAll('.editable');

    editButton.addEventListener('click', toggleEditSaveButtons);
    saveButton.addEventListener('click', saveChanges);

    function saveChanges() {
        const title = document.querySelector('h3').innerText;
        const paragraph = document.querySelector('#post-content').innerText;
        // Here you can send the updated title and paragraph to your backend for further processing
        console.log("Title:", title);
        console.log("Paragraph:", paragraph);
        showSaveSuccessToast(); 
        toggleEditSaveButtons(); 
      }
      
      // Add a function for the custom toast notification
      function showSaveSuccessToast() {
        const toastElement = document.createElement('div');
        toastElement.classList.add('toast', 'toast-success');
        toastElement.textContent = 'Changes saved!';
        document.body.appendChild(toastElement);
      
        setTimeout(() => {
          toastElement.remove();
        }, 3000);
      }


    function toggleEditSaveButtons() {
      if (editButton.style.display !== 'none') {
        editButton.style.display = 'none';
        saveButton.style.display = 'inline-block';
        elements.forEach(function(element) {
          element.classList.add('editing');
          element.contentEditable = 'true';
        });
      } else {
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'none';
        elements.forEach(function(element) {
          element.classList.remove('editing');
          element.contentEditable = 'false';
        });
      }
    }
  
   
  
   
    var likeButton = document.getElementById('likebutton');
    var likeStatement = document.getElementById('likecount');
    var likespan= document.getElementById('likespan')
    let likeCount = 0;
    likeButton.addEventListener('click', function() {
    likeCount++;
    if (likeCount === 1) {
        likeStatement.textContent = '1 person likes this!';
        likespan.textContent ='Liked';
    } else {
        likeStatement.textContent = `${likeCount} people like this!`;
    }
    });
    var comment=document.getElementById('comment');
    
    comment.addEventListener("click",function(){

        var commentInput = document.getElementById("commentInput").value;
        var commentsList = document.getElementById("commentsList");
        
             // Create a new list item for the comment
        var listItem = document.createElement("li");
        listItem.textContent = commentInput;
        
            // Add the new comment to the top of the list
        
        if(commentInput !== ""){
            commentsList.insertBefore(listItem, commentsList.firstChild);
        }
        
            // Clear the comment input field after submitting
        document.getElementById("commentInput").value = "";
          
    } )
    
});
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postTitle = urlParams.get('title');
    const postContent = urlParams.get('content');
    const authorName = urlParams.get('author');

    const postTitleElement = document.querySelector('#post-title');
    const postText = document.querySelector('#post-content');
    const authorInfo = document.querySelector('#author');   
    
    postTitleElement.textContent = postTitle;
    postText.textContent = postContent;
    authorInfo.textContent = authorName;
})
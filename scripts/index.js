
var signupModal = document.getElementById("signup-modal");
var signinModal=document.getElementById("signin-modal")
var createPostModal=document.getElementById("createPostModal");
var closeSignupModalBtn = document.getElementsByClassName("btn-close")[0];
var closeSigninModalBtn=document.getElementsByClassName("btn-close")[1];
var closeCreatePostModalBtn=document.getElementsByClassName("btn-close")[2];
var createPostBtn=document.getElementById("create-post-btn");
var allPostBtn=document.getElementById("all-posts-btn");

//this addEventListener function is for when the "sign up" button in the header section of the page is clicked. To popup the signup modal and make the background blur


//this function opens the signUp modal. i created this to open the signup modal using something other than the button in header section
openSignupModal=function(){
  signupModal.style.display = "block";
  signinModal.style.display="none";
}

//this addEventListener funtion is for when the cross button is clicked in the signup modal
closeSignupModalBtn.addEventListener("click", () => {
    signupModal.style.display = "none";
});

//this addEventlistener function works when clicked anywhere outside the signup modal, it closes the modal and makes the background normal
window.addEventListener("click", (event) => {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
});

//er function is for when the "sign in" button in the header section of the page is clicked. To popup the signin modal and make the background blur


 //this addEventListener funtion is for when the cross button is clicked in the signin modal
closeSigninModalBtn.addEventListener("click", () => {
    signinModal.style.display = "none";
});

//this addEventlistener function works when clicked anywhere outside the signin modal, it closes the modal and makes the background normal
window.addEventListener("click", (event) => {
    if (event.target == signinModal) {
      signinModal.style.display = "none";
    }
  });

createPostBtn.addEventListener("click", ()=>{
      createPostModal.style.display="block";
});
closeCreatePostModalBtn.addEventListener("click", ()=>{
    createPostModal.style.display="none";
});

allPostBtn.addEventListener("click",()=>{
  window.location.href='/html/postslist.html'
})





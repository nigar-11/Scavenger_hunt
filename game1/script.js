
function print(){
// alert("Yay! You've guessed right!");
// window.open("https://practice.geeksforgeeks.org/explore?page=1&curated[]=1&sortBy=submissions&curated_names[]=SDE%20Sheet", "_blank")
Swal.fire({
  title: 'Yay!!!!',
  text: "You've guessed right!",
  type: 'success',
  confirmButtonColor: '#3085D6',
  confirmButtonText: 'Move to next level'
}).then((result)=>{if(result.value){
  window.open("/map/copy.html", "_blank")
}});
}


document.querySelector(".btn6").addEventListener("click",print);

var ornum = 5;
function myinput(){
			var num = prompt("Enter the number of jewelry boxes:");

			if (num === null || num === "") {
				alert("You did not enter anything. Please enter the number again");
			}else if (num == ornum) {
				Swal.fire({
					title: 'Yay!!!!',
					text: "You've guessed right!",
					type: 'success',
					confirmButtonColor: '#3085D6',
					confirmButtonText: 'Move to next level'
				}).then((result)=>{if(result.value){
					window.open("/map/copy.html", "_blank")
				}});

      }else
			{
				alert("Try again :(")
			}
}

document.querySelector(".btn1").addEventListener("click",myinput);
document.querySelector(".btn2").addEventListener("click",myinput);
document.querySelector(".btn3").addEventListener("click",myinput);
document.querySelector(".btn4").addEventListener("click",myinput);
document.querySelector(".btn5").addEventListener("click",myinput);

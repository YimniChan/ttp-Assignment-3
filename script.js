const contain = document.getElementById("container"); //Question 1
console.log(contain); //Question 2
console.log(document.querySelector("section")); // Question 3
console.log(document.querySelectorAll(".second")); //Question 4
console.log(document.getElementsByTagName("ol")[0].children[2]); //Question 5
//contain.textContent = "Hello"; //Question 6
document.getElementsByTagName("div")[1].classList.add("main") 
document.getElementsByTagName("div")[1].classList.remove("main") //Question 7
let lee = document.createElement("li");//Question 8
lee.innerText = "four";//Question 9
document.getElementsByTagName("ul")[0].appendChild(lee);//Question 10

let x=document.getElementById("container"); //Question 11
let nodelist = x.getElementsByTagName("ul");
for(let i=0; i < nodelist.length; i++){
    nodelist[i].style.backgroundColor = "green";
}

document.getElementsByTagName("div")[1].classList.remove("footer")//Question 12

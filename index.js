const num=document.getElementById("number");
const container = document.querySelector(".para");

const wordgenerate=(n)=>{
let text="";
const letters="abcdefghijklmnopqrstuvwxyz";
for(i=0;i<n;++i){
    const random=(Math.random()*letters.length-1).toFixed(0);
    text += letters[random];
}
return text;
};

let numofwords;
const paragenerator = () =>{
    numofwords =Number(num.value);
    const para=document.createElement("p");

let data=" ";

for (let i=0;i<numofwords;++i){
    const randomnumber=(Math.random()*15).toFixed(0);
    data+=wordgenerate(randomnumber);
    data+= " ";
}


para.setAttribute("class","paras");
para.innerHTML=data;
container.append(para);
};

let text=document.getElementById("text");

let message=[
"Initializing Proposal Program...",
"Loading Feelings...",
"100% Completed ❤️",
"Every moment with you became my favorite memory.",
"Distance may separate us...",
"But my heart will always choose you.",
"Will you be my forever? ❤️"
];

let i=0;

function type(){
    if(i<message.length){
        text.innerHTML=message[i];
        i++;
        setTimeout(type,2000);
    }
}

type();

function showProposal(){
    document.getElementById("video").style.display="block";
    document.getElementById("video").play();
}
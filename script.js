const questions = [
    {
      'que': "What is the time complexity of a binary search algorithm?",
      'a': "O(1)",
      'b': "O(log n)",
      'c': "O(n)",
      'd': "O(n log n)",
      'correct': "b"
    },
    {
      'que': "What data structure is typically used to implement a LIFO (Last-In-First-Out) behavior?",
      'a': "Queue",
      'b': "Stack",
      'c': "Linked List",
      'd': "Array",
      'correct': "b"
    },
    {
      'que': "In object-oriented programming, what is encapsulation?",
      'a': "A technique for breaking a program into smaller subroutines",
      'b': "A way to implement multiple inheritance in a class",
      'c': "The ability to hide the internal state of an object and restrict access to it",
      'd': "A mechanism for defining classes in JavaScript",
      'correct': "c"
    }
  ];


let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInput=document.querySelectorAll('.options')//This will produce an array of inputs in which we will transfer all the elements in the array so that we can choose from it in function.
//const options[]=document.getElementsByClassName("options")

const loadQuestion=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data=questions[index];
    quesBox.innerText=`${index+1}) ${data.que}`;//ES6 syntax
    //Next sibling is used to target the next element choosen.
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer();
    if(ans==data.correct){
        right=right+1;
    }else{
        wrong=wrong+1;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer=()=>{
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionInput.forEach(
        (input) => {
            input.checked=false;
        }
    )
}


const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
     <div style="text-align: center; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
    <h3 style="margin: 0; font-size: 24px; color: #333333;">Thanks you for playing the quiz</h3>
    <h2 style="margin: 10px 0; font-size: 20px; color: #333333;">${right}/${total} are correct</h2>
  </div>`;

    document.body.style.backgroundColor="#e67e22";
}

//intial call 
loadQuestion();


  
  
  
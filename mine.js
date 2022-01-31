let Question = [
    {
        quest: "What is equal to",
        answer:[
            10,
            4,
            7,
            3,

        ],
        img: "img/img3.jpg",
        correct:1
    },

    {
        quest: "What is equal to",
        answer:[
            11,
            0,
            20,
            6,

        ],
        img: "img/img1.jpg",
        correct:3
    },

    {
        quest: "What a flag",
        answer:[
            "America",
            "Italy",
            "Germany",
            "Turkey",

        ],
        img: "img/img2.jpg",
        correct:0
    },

    {
        quest: "What a flag",
        answer:[
            "England",
            "France",
            "Germany",
            "Canada",

        ],
        img: "img/canada.png",
        correct:3
    },

    {
        quest: "LOGO",
        answer:[
            "Facebook",
            "Instagram",
            "Youtube",
            "Linkedin",

        ],
        img: "img/instagram.png",
        correct:1
    },

    {
        quest: "LOGO",
        answer:[
            "Twitter",
            "Facebook",
            "Youtube",
            "Google",

        ],
        img: "img/google.jpg",
        correct:3
    },

    {
        quest: "Programming language logo",
        answer:[
            "Angular",
            "Javascript",
            "Html",
            "Css",

        ],
        img: "img/angular.jpg",
        correct:0
    },

    {
        quest: "Programming language logo",
        answer:[
            "JS",
            "Css",
            "React",
            "Angular",

        ],
        img: "img/react.png",
        correct:2
    },

    {
        quest: "ANIMAL",
        answer:[
            "Cat",
            "Monkey",
            "Lion",
            "Dog",

        ],
        img: "img/dog.jpg",
        correct:3
    },

    {
        quest: "ANIMAL",
        answer:[
            "Lion",
            "Tiger",
            "Dog",
            "Cat",

        ],
        img: "img/lion.jpg",
        correct:0
    },
]

let trueanswer = 0;
let falseanswer = 0;
let point = 0;
let poin = 50;
let quses = "10 Point";

Question.forEach((quiz, index) =>{
    
    let answe = '';

    quiz.answer.forEach((ans, ind)=>{
        let ccc;
        if(ind == quiz.correct){
            ccc = 'correct'
            
        }else{
             ccc = ''
        }


        answe += `<div class="col-lg-6">
        <p class="${ccc}">${ans}</p>
        </div>`;

    })

    let checkindex;

    if(index == 0){
        checkindex = 'current'
        
    }else{
        checkindex = 'd-none'
    }

    let card = `
    <div class="col-lg-5 ${checkindex} d-none mx-auto shadow p-3 mb-5">
    <img src="${quiz.img}" class="img-fluid">
    <h6> ${quses} </6>
    <h3>${quiz.quest} </h3>
    <div class="row bg-light mt-3">
      ${answe}
    </div>
    </div>
    `
document.querySelector('.quiz-div').innerHTML += card;

let sel = document.querySelectorAll('.quiz-div p');
check(sel)

})

function check(select){
    select.forEach(ell=>{
        ell.addEventListener('click',function(){
           
            let sel = document.querySelectorAll('.quiz-div p');
            sel.forEach(s=>{
                s.classList.remove('succes')
                s.classList.remove('danger')
            })
            if(ell.classList.contains('correct')){
                this.classList.add('succes')
                trueanswer++;
                point += 10;
                
            }else{
                this.classList.add('danger')
                falseanswer++;
            }
        })
    })
}

function next(){
    
    let next = document.querySelector('.next');
    next.addEventListener('click', function(){
        let cur = document.querySelector('.current')
        console.log(cur);
        if(cur.nextElementSibling != null){
            cur.classList.remove('current');
            cur.nextElementSibling.classList.add('current')
           
        }else{
            document.querySelector('.quiz-div').innerHTML = `<div class="passs"> გამსვლელი ქულა:${poin}  <br>ტესტირება დასრულდა თქვენ გაქვთ <br><span class="text-success"> ${trueanswer} სწორი პასუხი </span> <br> <span class="text-danger"> ${falseanswer} არასწორი პასუხი</span> <br> ${Question.length} კითხვიდან <br>თქვენ დააგროვეთ: ${point} ქულა </div>` ;
  
        }
        cur.classList.remove('current');
        
       
    })
}
next();

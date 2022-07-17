$(document).ready(function(){
    $("button.question1").click(function(){
        $("ul.QUESTION").append("<li>What is your name ?</li>")
        $("ul.ANSWER").append("<li> Bolaji Enilolobo</li>")
        $('li').css('background-color', 'green');
        // $(this).remove();
    
    })
    $("button.question2").click(function(){
        $("ul.QUESTION").append("<li>How old are you ?</li>")
        $("ul.ANSWER").append("<li> I am 23years old</li>")
        // $(this).remove();
    
    })

    $("button.question3").click(function(){
        $("ul.QUESTION").before("<li>What is your qualification ?</li>")
        $("ul.ANSWER").before("<li> i have N.C.E in Biology</li>")
    
    })

    $("button.question4").click(function(){
        $("ul.QUESTION").prepend("<li>What country are you from ?</li>")
        $("ul.ANSWER").prepend("<li> I'm from Nigeria</li>")
    
    })

    $("button.question5").click(function(){
        $("ul.QUESTION").after("<li>What is your status ?</li>")
        $("ul.ANSWER").after("<li>Single</li>")
    
    })

    $("#Cat").click(function(){
        $(".Cat").prepend("<li>Meaow</li>")
        $(".Dog").prepend("<li>Bark</li>")
    })

    $("#Dog").click(function(){
        $(".Cat").prepend("<li>Meaow</li>")
        $(".Dog").prepend("<li>Bark</li>")
    })

   
})
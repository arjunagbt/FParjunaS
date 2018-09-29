$(document).ready(function(){

    var counterRight = 0
    var counterWrong = 0
    var answer = ''
    
    $('.play-button').on('click', () =>{
        $('.playArea').fadeIn()
        $('.tutorial').hide()
    })
    $('button').on('mouseenter', event=>{
        $(event.currentTarget).addClass('button-active')
        
    }).on('mouseleave', event=>{
        $(event.currentTarget).removeClass('button-active')
    })

   

    $('.hint').on('click', event =>{

        $(event.currentTarget).prev().toggleClass('hide')
            
    })

    $('.answer1').on('click', event =>{
        
       

       answer = $('#ans1').val()
       if (answer.toLowerCase() == 'gucci' ) {
           counterRight++
           alert('That\'s right!')
           
       } else{
           counterWrong++
           alert('Nope, wrong! It\'s Gucci! Do you live under a rock somewhere?')
       }
       $(event.currentTarget).parent().hide()
       $(event.currentTarget).parent().next().fadeIn()
        
       

    })

    $('.answer2').on('click', event =>{

        answer = $('#ans2').val()
        if (answer.toLowerCase() == 'louis vuitton' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong! It\'s Louis Vuitton! This should\'ve been easy!')
        }
        $(event.currentTarget).parent().hide()
        $(event.currentTarget).parent().next().fadeIn()
         
 
     })
     $('.answer3').on('click', event =>{

        answer = $('#ans3').val()
        if (answer.toLowerCase() == 'gosha rubchinskiy' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong! It\'s Gosha Rubchinskiy! You could\'ve gotten it right if you can read cyrillic, you know?')
        }
        $(event.currentTarget).parent().hide()
        $(event.currentTarget).parent().next().fadeIn()
         
 
     })
     $('.answer4').on('click', event =>{

        answer = $('#ans4').val()
        if (answer.toLowerCase() == 'balenciaga' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong! It\'s Balenciaga. Have you never seen this big, weird, ugly sneakers?')
        }
        $(event.currentTarget).parent().hide()
        $(event.currentTarget).parent().next().fadeIn()
         
 
     })
     $('.answer5').on('click', event =>{

        answer = $('#ans5').val()
        if (answer.toLowerCase() == 'yves saint laurent' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong! It\'s Yves Saint Laurent. Didn\'t the big print on the bag make it obvious?')
        }
        $(event.currentTarget).parent().hide()
        $(event.currentTarget).parent().next().fadeIn()
         
     })
     $('.answer6').on('click', event =>{

        answer = $('#ans6').val()
        if (answer.toLowerCase() == 'burberry' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong! It\'s Burberry. Didn\'t you notice the checkered pattern?')
        }
        $(event.currentTarget).parent().hide()
        $(event.currentTarget).parent().next().fadeIn()
         
 
     })
     $('.answer7').on('click', event =>{

        answer = $('#ans7').val()
        if (answer.toLowerCase() == 'fendi' ) {
            counterRight++
            alert('That\'s right!')
           
       } else{
           counterWrong++
           alert('Nope, wrong! It\'s Fendi. You should\'ve noticed by the monster eye in the bag!')
       }
       $(event.currentTarget).parent().hide()
       $(event.currentTarget).parent().next().fadeIn()
        
 
     })
     $('.answer8').on('click', event =>{

        answer = $('#ans8').val()
        if (answer.toLowerCase() == 'versace' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong! It\'s Versace. Look at the medusa head!')
        }
        $(event.currentTarget).parent().hide()
        $(event.currentTarget).parent().next().fadeIn()
         
 
     })
     $('.answer9').on('click', event =>{

        answer = $('#ans9').val()
        if (answer.toLowerCase() == 'yohji yamamoto' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong! It\'s Yohji Yamamoto!')
        }
        $(event.currentTarget).parent().hide()
        $(event.currentTarget).parent().next().fadeIn()
         
 
     })
     $('.answer10').on('click', event =>{

        answer = $('#ans10').val()
        if (answer.toLowerCase() == 'comme des garcons' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong! It\'s Comme des Garcons. notice the heart with assymetric eyes logo?')
        }
        $('.playArea').hide()
        
        if (counterRight > counterWrong) {
            $('.lose').hide()
            $('.result').fadeIn()
        } else{
            $('.win').hide()
            $('.result').fadeIn()
        }
         
     })
    
     $('.retry').on('click', () =>{
        history.go(0)
     })
     $('.home').on('click', () =>{
        location.href = 'http://arjunagbt.github.io'
     })

 });
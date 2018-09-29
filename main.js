$(document).ready(function(){

    var counterRight = 0
    var counterWrong = 0
    var answer = ''
    
    $('.play-button').on('click', () =>{
        $('.playArea').removeClass('hide')
        $('.tutorial').addClass('hide')
    })
    $('.hint').on('click', event=>{

        $(event.currentTarget).siblings().removeClass('hide')
            
    })
    $('.answer1').on('click', event =>{
        
       

       answer = $('#ans1').val()
       if (answer.toLowerCase() == 'gucci' ) {
           counterRight++
           alert('That\'s right!')
           
       } else{
           counterWrong++
           alert('Nope, Wrong!')
       }
       $(event.currentTarget).parent().addClass('hide')
       $(event.currentTarget).parent().next().removeClass('hide')
        
       

    })

    $('.answer2').on('click', event =>{

        answer = $('#ans2').val()
        if (answer.toLowerCase() == 'louis vuitton' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong!')
        }
        $(event.currentTarget).parent().addClass('hide')
        $(event.currentTarget).parent().next().removeClass('hide')
         
 
     })
     $('.answer3').on('click', event =>{

        answer = $('#ans3').val()
        if (answer.toLowerCase() == 'gosha rubchinskiy' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong!')
        }
        $(event.currentTarget).parent().addClass('hide')
        $(event.currentTarget).parent().next().removeClass('hide')
         
 
     })
     $('.answer4').on('click', event =>{

        answer = $('#ans4').val()
        if (answer.toLowerCase() == 'balenciaga' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong!')
        }
        $(event.currentTarget).parent().addClass('hide')
        $(event.currentTarget).parent().next().removeClass('hide')
         
 
     })
     $('.answer5').on('click', event =>{

        answer = $('#ans5').val()
        if (answer.toLowerCase() == 'yves saint laurent' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong!')
        }
        $(event.currentTarget).parent().addClass('hide')
        $(event.currentTarget).parent().next().removeClass('hide')
         
     })
     $('.answer6').on('click', event =>{

        answer = $('#ans6').val()
        if (answer.toLowerCase() == 'burberry' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong!')
        }
        $(event.currentTarget).parent().addClass('hide')
        $(event.currentTarget).parent().next().removeClass('hide')
         
 
     })
     $('.answer7').on('click', event =>{

        answer = $('#ans7').val()
        if (answer.toLowerCase() == 'fendi' ) {
            counterRight++
            alert('That\'s right!')
           
       } else{
           counterWrong++
           alert('Nope, wrong!')
       }
       $(event.currentTarget).parent().addClass('hide')
       $(event.currentTarget).parent().next().removeClass('hide')
        
 
     })
     $('.answer8').on('click', event =>{

        answer = $('#ans8').val()
        if (answer.toLowerCase() == 'versace' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong!')
        }
        $(event.currentTarget).parent().addClass('hide')
        $(event.currentTarget).parent().next().removeClass('hide')
         
 
     })
     $('.answer9').on('click', event =>{

        answer = $('#ans9').val()
        if (answer.toLowerCase() == 'yohji yamamoto' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong!')
        }
        $(event.currentTarget).parent().addClass('hide')
        $(event.currentTarget).parent().next().removeClass('hide')
         
 
     })
     $('.answer10').on('click', event =>{

        answer = $('#ans10').val()
        if (answer.toLowerCase() == 'comme des garcons' ) {
            counterRight++
            alert('That\'s right!')
            
        } else{
            counterWrong++
            alert('Nope, wrong!')
        }
        $('.playArea').addClass('hide')
        
        if (counterRight > counterWrong) {
            $('.lose').addClass('hide')
            $('.result').removeClass('hide')
        } else{
            $('.win').addClass('hide')
            $('.result').removeClass('hide')
        }
         
     })
    
     $('.retry').on('click', () =>{
        history.go(0)
     })
     $('.home').on('click', () =>{
        location.href = 'http://arjunagbt.github.io'
     })

 });
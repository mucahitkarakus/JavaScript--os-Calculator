window.onload = function(){
    const input =document.querySelector('input');
    var btns = document.querySelectorAll('button');
    for(var i = 0;i<btns.length;i++){
        btns[i].addEventListener('click',function(){
            if( this.innerHTML == '='){
            input.value = eval(input.value).toFixed(2);
            }
            else if( this.innerHTML == 'AC'){
                input.value = '';
            }
            else if( this.innerHTML == '+/-'){
                var answer = input.value = eval(input.value);
                answer = parseInt(answer);
                input.value = -answer;
            }
            else if(this.innerHTML == '%'){
                var eq = input.value;
                if(eq.includes('+')){
                    var sign = '+';
                    eq = eq.split('+');
                }else if(eq.includes('-')){
                    var sign = '-';
                    eq = eq.split('-');
                }else if(eq.includes('*')){
                    var sign = '*';
                    eq = eq.split('*');
                }else if(eq.includes('/')){
                    var sign = '/';
                    eq = eq.split('/');
                }
                var primary = eq[0];
                var secondary = eq[1];
                var answer = eval(primary+sign+(secondary/(100*primary)))

            }
             else{
                input.value += this.innerHTML;
            }
        })
    }
}
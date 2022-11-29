function pressionado (tipo, valor) {

    //Numeros na tela
    if (tipo === 'valor'){
      var valor_para_concatenar = document.getElementById('tela').value
      document.getElementById('tela').value = valor_para_concatenar + valor 
      

    //Logica de ações
    } else if (tipo === 'acao'){
      if (valor === 'C') {

        document.getElementById('tela').value = ''

      } else if (valor === '*' ||valor === '-' ||valor === '+' ||valor === '.' ||valor === '/' ) {

        var numero_tela = document.getElementById('tela').value
        document.getElementById('tela').value = numero_tela + valor
      }

      if(valor === '=') {

        var val_campo = eval(document.getElementById('tela').value)

        document.getElementById('tela').value = val_campo

        console.log(val_campo)

      }

    } 
    
    }
        function iniciarDownload(urlDoArquivo, nomeDoArquivo) {
            const link = document.createElement('a');
            link.href = urlDoArquivo;
            link.download = nomeDoArquivo;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        iniciarDownload(urlParaBaixar, nomeParaSalvar);
        const urlParaBaixar = 'Sem título.png'; // URL de uma imagem de exemplo
        const nomeParaSalvar = 'minha_imagem_download.png';
        var exit = document.getElementById("exit")
        var enter = document.getElementById("enter")
        
        var packages = function() {
          var c = "th i"
          if (c+"adv_us") {
            
          }
        }

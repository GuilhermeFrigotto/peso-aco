// Função para calcular o peso de uma chapa
function calcularPesoChapa() {
    const comprimento = Number(document.getElementById("chapa-comprimento").value);
    const largura = Number(document.getElementById("chapa-largura").value);
    const espessura = Number(document.getElementById("chapa-espessura").value);
    const preco = Number(document.getElementById("chapa-preco").value);
  
    const peso = ((comprimento / 1000) * (largura / 1000) * espessura * 7.85).toFixed(2);
  
    document.getElementById("chapa-peso").textContent = `Peso: ${peso} kg`;
  
    if (!isNaN(preco)) {
      atualizarResultado(peso * preco);
    }
  }
  
  // Função para calcular o peso de um tubo/redondo
  function calcularPesoTubo() {
    const comprimento = Number(document.getElementById("tubo-comprimento").value);
    const diametro = Number(document.getElementById("tubo-diametro").value);
    const preco = Number(document.getElementById("tubo-preco").value);
  
    const raio = diametro / 2 / 1000;
    const peso = ((Math.PI * raio * raio) * comprimento * 7.85).toFixed(2);
  
    document.getElementById("tubo-peso").textContent = `Peso: ${peso} kg`;
  
    if (!isNaN(preco)) {
      atualizarResultado(peso * preco);
    }
  }
  
  // Função para atualizar o resultado final com a soma dos preços das peças
  function atualizarResultado(valor) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = `R$ ${valor.toFixed(2)}`;
  }
  
  // Adiciona eventos aos botões de calcular
  document.getElementById("chapa-calcular").addEventListener("click", calcularPesoChapa);
  document.getElementById("tubo-calcular").addEventListener("click", calcularPesoTubo);
  

    // Limpar as informações adicionadas
    function limparCampos() {
      const campos = document.querySelectorAll("input[type='number']");
      campos.forEach(campo => campo.value = "");
      document.querySelectorAll(".peso").forEach(peso => peso.textContent = "");
      document.getElementById("resultado-peso").textContent = "";
      document.getElementById("resultado-preco").textContent = "";
    }
  
  document.getElementById("limpar").addEventListener("click", limparCampos);
  
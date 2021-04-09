function getProduct(text) {

  let ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      console.log("Requisição finalizada com sucesso")
      var jsonProduto = JSON.parse(ajax.response)
      setProduto(jsonProduto);
    }
  }

  ajax.open("GET", "http://localhost:8080/produto/1");
  ajax.send();

}

function setProduto(jsonProduto) {
  document.getElementById("tabelaProduto").innerHTML =
    "<tr>" +
    "<td>" + jsonProduto.nome + "</td>" +
    "<td>" + "R$"+ jsonProduto.valor + "</td>" +
    "<td>" + jsonProduto.marca['nome'] + "</td>" +
    "</tr>"

}

Quagga.init({
  inputStream: {
    name: "Live",
    type: "LiveStream",
    target: document.querySelector('#camera')    // Or '#yourElement' (optional)
  },
  decoder: {
    readers: ["code_128_reader"]
  }
}, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log("Initialization finished. Ready to start");
  Quagga.start();
});

Quagga.onDetected(function (data) {
  getProduct(data.codeResult.code);

});

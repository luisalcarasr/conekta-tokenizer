var card = new Card({
  form: 'form',
  container: '.card-wrapper',
});

Conekta.setLanguage("es");

function submit() {
  let publicKey = document.getElementsByName("public_key")[0].value;
  Conekta.setPublicKey(publicKey);
  let tokenParams = {
    "card": {
      "number": document.getElementsByName("number")[0].value,
      "name": document.getElementsByName("name")[0].value,
      "exp_year": document.getElementsByName("expiry")[0].value.split("/")[1].replace(" ", ""),
      "exp_month": document.getElementsByName("expiry")[0].value.split("/")[0].replace(" ", ""),
      "cvc": document.getElementsByName("cvc")[0].value,
      "address": {
        "street1": document.getElementsByName("street1")[0].value,
        "street2": document.getElementsByName("street2")[0].value,
        "city": document.getElementsByName("city")[0].value,
        "state": document.getElementsByName("state")[0].value,
        "zip": document.getElementsByName("zip")[0].value,
        "country": document.getElementsByName("country")[0].value,
      }
    }
  };
  Conekta.Token.create(tokenParams, successResponseHandler, errorResponseHandler);
}

var successResponseHandler = function(token) {
  document.getElementsByName("token_id")[0].value = token.id;
};


var errorResponseHandler = function(error) {
  console.error(error);
};

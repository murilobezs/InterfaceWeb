jQuery.validator.addMethod(
    "arrobaNoInicio",
    function (value, element) {
        if (value.indexOf("@") == 0) {
            return true;
        } else {
            return false;
        }
    },
    "Tem que ter @ no começo!"
);

$(document).ready(function () {
    $("#formCadastro").validate({
        rules: {
            nome: {
                required: true,
                maxlength: 100,
                minlength: 10,
                minWords: 2,
            },
            cpf: {
                required: true,
                cpfFormato: true
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
                minlength: 14, // tamanho mínimo considerando o formato (xx) xxxxx-xxxx
                maxlength: 15, // tamanho máximo considerando o formato (xx) xxxxx-xxxx
                telefoneFormato: true // adicionando regra de validação personalizada
            },
            cidade: {
                required: true,
            },
            idade: {
                required: true,
                min: 1,
                max: 120,
            },
            instagram: {
                arrobaNoInicio: true,
            },
        },
        messages: {
            telefone: {
                required: "Por favor, insira um telefone.",
                minlength: "O telefone deve ter no mínimo {0} caracteres.",
                maxlength: "O telefone deve ter no máximo {0} caracteres.",
                telefoneFormato: "Por favor, insira um telefone no formato válido: (xx) xxxxx-xxxx"
            },
            cpf: {
                required: "Por favor, insira um CPF.",
                cpfFormato: "Por favor, insira um CPF válido no formato: xxx.xxx.xxx-xx"
            }
        },
        submitHandler: function (form) {
            alert("Formulário enviado.");
        },
    });
});


jQuery.validator.addMethod(
    "telefoneFormato",
    function (value, element) {
        var regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/; // Regex para o formato (xx) xxxxx-xxxx
        return this.optional(element) || regexTelefone.test(value);
    },
    "Por favor, insira um telefone no formato válido: (xx) xxxxx-xxxx"
);

    jQuery.validator.addMethod(
        "cpfFormato",
        function (value, element) {
            // Regex para validar o CPF: xxx.xxx.xxx-xx
            var regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            // Verifica se o valor coincide com o formato correto
            if (!regexCPF.test(value)) return false;
            // Remove pontos e traço e verifica se são apenas números
            var cpfNumeros = value.replace(/[.-]/g, '');
            return $.isNumeric(cpfNumeros);
        },
        "Por favor, insira um CPF válido no formato: xxx.xxx.xxx-xx"
    );

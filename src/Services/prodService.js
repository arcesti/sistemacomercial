const urlBase = 'https://backend-sistemacomercial.vercel.app/produtos';

function formatarData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

export async function gravarProd(produto) {
    produto.dtValidade = formatarData(produto.dtValidade)
    const res = await fetch(urlBase, {
        'method':"POST",
        'headers': {
            'Content-Type': "application/json"
        },
        'body': JSON.stringify(produto)
    });
    const resultado = await res.json();
    console.log(resultado)
    return resultado;
}

export async function alterarProd(produto) {
    produto.dtValidade = formatarData(produto.dtValidade)
    console.log(produto)
    const res = await fetch(urlBase+"/"+produto.codigo, {
        'method':"PUT",
        'headers': {
            'Content-Type': "application/json"
        },
        'body': JSON.stringify(produto)
    });
    const resultado = await res.json();
    console.log(resultado)
    return resultado;
}

export async function consultarProd() {
    const res = await fetch(urlBase, {
        'method':"GET"
    });
    const resultado = await res.json();
    return resultado;
}

export async function excluirProd(produto) {
    const res = await fetch(urlBase + '/' + produto.codigo, {
        'method':"DELETE"
    });
    const resultado = await res.json();
    return resultado;
}
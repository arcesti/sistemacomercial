const urlBase = 'https://backend-sistemacomercial.vercel.app/produtos';

export async function gravarProd(produto) {
    const res = await fetch(urlBase, {
        'method':"POST",
        'headers': {
            'Content-Type': "application/json"
        },
        'body': JSON.stringify(produto)
    });
    const resultado = await res.json();
    return resultado;
}

export async function alterarProd(produto) {
    const res = await fetch(urlBase, {
        'method':"PUT",
        'headers': {
            'Content-Type': "application/json"
        },
        'body': JSON.stringify(produto)
    });
    const resultado = await res.json();
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
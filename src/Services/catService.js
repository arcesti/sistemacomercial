const urlBase = 'http://localhost:3000/categorias';

export async function gravarCat(categoria) {
    const res = await fetch(urlBase, {
        'method':"POST",
        'headers': {
            'Content-Type': "application/json"
        },
        'body': JSON.stringify(categoria)
    });
    const resultado = await res.json();
    return resultado;
}

export async function alterarCat(categoria) {
    const res = await fetch(urlBase, {
        'method':"PUT",
        'headers': {
            'Content-Type': "application/json"
        },
        'body': JSON.stringify(categoria)
    });
    const resultado = await res.json();
    return resultado;
}

export async function consultarCat() {
    const res = await fetch(urlBase, {
        'method':"GET"
    });
    const resultado = await res.json();
    return resultado;
}

export async function excluirCat(categoria) {
    const res = await fetch(urlBase + '/' + categoria.codigo, {
        'method':"DELETE"
    });
    const resultado = await res.json();
    return resultado;
}
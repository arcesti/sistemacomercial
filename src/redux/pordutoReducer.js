import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { consultarProd } from "../Services/prodService";
import ESTADO from "./estado";

const buscarProdutos = createAsyncThunk('buscarProdutos', async () => {
    // lista de produtos
    const resultado = await consultarProd();
    try {
        if (Array.isArray(resultado)) {
            return {
                "status": true,
                "message": "Produtos recuperados com sucesso",
                listaDeProdutos
            }
        }
        else {
            return {
                "status": false,
                "message": "Erro ao recuperar os produtos do backend.",
                "listaDeProdutos": []
            }
        }
    } catch (err) {
        return {
            "status": false,
            "message": "Erro: " + err.message,
            "listaDeProdutos": []
        }
    }

});

const produtoReducer = createSlice({
    name: "produto",
    initialState: {
        estado: ESTADO.OCIOSO,
        mensagem: "",
        listaDeProdutos: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(buscarProdutos.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = "Processando requisição (buscando produtos)";
            })
            .addCase(buscarProdutos.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.message;
                    state.listaDeProdutos = action.payload.listaDeProdutos;
                }
                else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.message;
                    state.listaDeProdutos = action.payload.listaDeProdutos;
                }
            })
            .addCase(buscarProdutos.rejected, (state, action) => {

            })
    }
});

export default produtoReducer.reducer;
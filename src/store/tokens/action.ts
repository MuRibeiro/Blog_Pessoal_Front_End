/*comando responsavel por armazenar o nosso token. Primeira propriedade é o tipo da action
* e a segunda é a informação que a action está levando, que é o token */
export type Action = {type: "ADD_TOKEN"; payload: string}

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token
})
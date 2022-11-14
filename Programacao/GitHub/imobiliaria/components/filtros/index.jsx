export default function Filtro(){
    return(
        <>
            <p>VENDA</p>
            <p>ALUGUEL</p>
            <div>
                <p>Cidade</p>
                <input placeholder="Recife" type="text"/>
            </div>
            <div>
                <p>Bairro</p>
                <input placeholder="Madalena" type="text"/>
            </div>
            <div>
                <p>Preço Mínimo</p>
                <input placeholder="R$ 0" type="text"/>
            </div>
            <div>
                <p>Preço Maximo</p>
                <input placeholder="R$ 100.000" type="text"/>
            </div>
        </>
    );
};
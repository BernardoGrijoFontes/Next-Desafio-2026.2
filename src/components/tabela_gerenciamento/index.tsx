export default function TabelaGerenciamento(){
    return (
        <table className="bg-[#6271CF]/25 table-fixed border-separate border-spacing-4 rounded-2xl">
        <thead>
            <tr className="text-[#6271CF]">
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>Tamanho</th>
            <th>Foto frente</th>
            <th>Foto trás</th>
            <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>The Sliding Mr. Bones</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td  className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</td>
            </tr>
            <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
            </tr>
            <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            </tr>
        </tbody>
        </table>
    )
}
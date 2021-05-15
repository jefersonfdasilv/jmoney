import { Container } from "./styles";

export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dev site</td>
                        <td className="deposit">R$ 10.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.000</td>
                        <td>Casa</td>
                        <td>01/03/2021</td>
                    </tr>
                    <tr>
                        <td>Supermercado</td>
                        <td className="withdraw">- R$ 1.200</td>
                        <td>Alimentação</td>
                        <td>02/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
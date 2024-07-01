
function UsersTable(props) {
    if(props.users.length > 0) {
        return (
            <table className="table mx-3">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {renderRows(props.usersList)}; */}
                </tbody>
            </table>
        )
    }

    return (
        <h1 className="text-warning">Não há usuários cadastrados!</h1>
    )
}

export default UsersTable;
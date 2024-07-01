
function UsersForm(props) {
    return (
        <div className="form">
            <div className="row my-4">
                <div className="col-12 col-md-6">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={e => nameMask(e)}/>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" className="form-control" name="email" placeholder="example@exemplo.com"/>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-12 col-md-6">
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" className="form-control" name="cpf" placeholder="000.000.000-00" onChange={e => cpfMask(e)}/>
                    <span className="text-danger" hidden>CPF inválido!</span>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="date">Data de Nascimento</label>
                    <input type="date" className="form-control" name="date"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary mx-3">Salvar</button>
                    <button className="btn btn-secondary">Cancelar</button>
                </div>
            </div>
        </div>
    )
}

function cpfMask(e) {
    
    const cpf = e.target;
    const regexNumbers = new RegExp(/[0-9]/);
    if(!cpf.value[cpf.value.length - 1].match(regexNumbers) || cpf.value.length === 15) {
        cpf.value = cpf.value.substring(0, cpf.value.length - 1);
    }else if (cpf.value.length === 3 || cpf.value.length === 7) {
        cpf.value += ".";
    }else if (cpf.value.length === 11) {
        cpf.value += "-";
    }
    
}

function nameMask(e) {
    const name = e.target;
    const lettersRegex = new RegExp(/[xa-zA-Z]/);
    if(!name.value[name.value.length -1].match(lettersRegex)) {
        name.value = name.value.substring(0, name.value.length - 2);
    }
}

export default UsersForm;
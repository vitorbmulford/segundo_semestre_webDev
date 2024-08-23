import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de que o Bootstrap está importado

const Aluno = ({ nome, email }) => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="card-body">
                    <h5 className="card-title">Informações do Aluno</h5>
                    <p className="card-text"><strong>Nome:</strong> {nome}</p>
                    <p className="card-text"><strong>Email:</strong> {email}</p>
                </div>
            </div>
        </div>
    );
};

export default Aluno;

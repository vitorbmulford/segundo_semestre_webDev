import Button from "./Button";

function HelloWord() {
    const nome = "FIAP";

    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="mb-4">Hello Word</h1>
                <p className="lead">Olá, dev {nome}</p>
                <Button/>
            </div>
        </div>
    )
}

export default HelloWord;

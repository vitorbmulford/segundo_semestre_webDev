function Button() {
    const clique = () => {
        alert("Olá dev FIAP");
    }
    return (
        <button onClick={clique} className="btn btn-primary btn-lg">
            Clique aqui
        </button>
    )

}
export default Button
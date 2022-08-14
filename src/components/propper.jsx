export const Propper = (props) => {

    const newName = props.nome;
    const newNumber = props.numero;

    return(
        <header>
            <p>
                {newName} a rapporto:
            </p>
            <p>
                Ho comprato {newNumber} zucchine
            </p>
        </header>
    );

}

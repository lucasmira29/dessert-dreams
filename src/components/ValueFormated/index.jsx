import formatCurrency from '../../utils/formatCurrency.js'

function ValueFormated({ value }) {
    return (
        <span>
            {formatCurrency(value)}
        </span>
    )
}


export default ValueFormated;
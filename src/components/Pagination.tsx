import '../styles/characters.css'


interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="pagination-button"
            >
                Anterior
            </button>
            <span>
                Página {currentPage} de {totalPages}
            </span>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="pagination-button"
            >
                Siguiente
            </button>
        </div>
    )
}

export default Pagination

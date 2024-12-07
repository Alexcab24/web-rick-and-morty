


interface Props {
    errorMessage: string;
}

const Error = ({errorMessage}: Props) => {
    return (
        <div className="error-message-container">
            <h1>Error: {errorMessage}</h1>
        </div>
    )
}

export default Error

import { useHistory } from 'react-router';

const PreviousPage = () => {
    let history = useHistory();

    const goToPreviousPath = () => {
        history.goBack();
    };

    return(
        <button className="goBack" onClick={goToPreviousPath}><p>Back</p></button>
    )
}

export default PreviousPage;
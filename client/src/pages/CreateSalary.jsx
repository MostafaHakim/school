import { useParams } from "react-router-dom";

const Createsalary = (tId, tName) => {
    const { id } = useParams()
    return (
        <h2>{id}</h2>
    );
}

export default Createsalary;
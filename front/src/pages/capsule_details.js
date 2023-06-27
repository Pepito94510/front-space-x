import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCapsulesDetails } from "../services/capsules";

const CapsulesDetails = () => {
    const {IdCapsule} = useParams();
    const [capsulesDetails, setCapsulesDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const capsulesDetails = await getCapsulesDetails();
            setCapsulesDetails(capsulesDetails);
            return true;
        }
        fetchData();
    });
    return (
        <>
            {capsulesDetails.status}
        </>
    )

}

export default CapsulesDetails;
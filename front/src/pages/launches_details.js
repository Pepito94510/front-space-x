import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLaunchesDetails } from "../services/launches";

const LaunchesDetails = () => {
    const { idLaunches } = useParams();
    const [launchesDetails, setLaunchesDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const capsulesDetails = await getLaunchesDetails();
            setLaunchesDetails(launchesDetails);
            return true;
        }
        fetchData();
    });
    return (
        <>
            <h1>
                {launchesDetails.mission_name}
            </h1>
        </>
    )

}

export default CapsulesDetails;
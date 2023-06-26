import { useEffect, useState } from "react";
import { getLaunches } from "../services/launches";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const launches = await getLaunches();
            console.log(launches);
            setLaunches(launches);
            return true;
        }
        fetchData();
    });
    return (
        <div>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Flight number</th>
                    <th scope="col">Mission name</th>
                    <th scope="col">Launch year</th>
                    <th scope="col">Rocket name</th>
                    <th scope="col">Site name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        launches.map((launch) =>  
                        <tr>
                            <td>{launch.flight_number}</td>
                            <td>{launch.mission_name}</td>
                            <td>{launch.launch_year}</td>
                            <td>{launch.rocket.rocket_name}</td>
                            <td>{launch.launch_site.site_name}</td>
                        </tr>)
                    }
                </tbody>
            </table>

            <button><a href="/capsules">View all Capsules</a></button>
            <button><a href="/">Home</a></button>

        </div>
    )
}

export default Launches;
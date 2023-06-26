import { useEffect, useState } from "react";
import { getLaunches } from "../services/launches";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const launches = await getLaunches();
            setLaunches(launches);
            return true;
        }
        fetchData();
    });
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand">Front Space X</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active">Launches</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/capsules">Capsules</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
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
            </div>
        </>
    )
}

export default Launches;
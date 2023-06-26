import { useEffect, useState } from "react";
import { getCapsules } from "../services/capsules";

const Capsules = () => {
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const capsules = await getCapsules();
            setCapsules(capsules);
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
                                    <a class="nav-link" href="/launches">Launches</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active">Capsules</a>
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
                            <th scope="col">Capsule serial</th>
                            <th scope="col">Status</th>
                            <th scope="col">Type</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            capsules.map((capsule) =>
                                <tr>
                                    <td>{capsule.capsule_serial}</td>
                                    <td>{capsule.status}</td>
                                    <td>{capsule.type}</td>
                                    <td>{capsule.details}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Capsules;
import bootstrap from 'bootstrap'

const Home = () => {
    return (
        <>
            <div class="titleDiv m-4">
                <center><h1>Front Space X</h1></center>
            </div>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card m-3">
                        <div class="card-body">
                            <h5 class="card-title">Launches</h5>
                            <p class="card-text">L'ensembles des informations sur les lancements répertoriées:</p>
                            <a href="/launches" class="btn btn-primary">Voir les informations</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card m-3">
                        <div class="card-body">
                            <h5 class="card-title">Capsules</h5>
                            <p class="card-text">L'ensemble des informations sur les capsules</p>
                            <a href="/capsules" class="btn btn-primary">Voir les informations</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
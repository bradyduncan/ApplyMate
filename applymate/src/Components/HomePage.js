function HomePage(){
    return(
        <div>
            <h1>Home Page</h1>
            <br />
            <button onClick={() => { window.location.href = "/applications"; }}>
                Applications
            </button>
            <button onClick={() => { window.location.href = "/journaling"; }}>
                Journaling
            </button>
            <button onClick={() => { window.location.href = "/stats"; }}>
                Stats
            </button>
        </div>
    )
}

export default HomePage;
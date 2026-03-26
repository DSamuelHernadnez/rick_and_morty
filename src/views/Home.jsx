import Cards from "../components/Cards/Cards.jsx"

const Home = (props) => {
    return (
        <>
            <div>
                <h1> Bienvenidos a la Home Page</h1>
                <Cards users={props.users}/>
            </div>
        </>
    )
}
export default Home
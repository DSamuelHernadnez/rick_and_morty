// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom"

// const Detail = () => {
//     const params = useParams();
//     const [user, setUser] = useState({})
//     // const { id } = useParams();
//     console.log(params.id);
//     // console.log(id);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//             .then(res => res.json())
//             .then(data => setUser(data)
//             )
//     }, [])

//     return (
//         <div>
//             <h1>{user.name}</h1>
//             <h1>{user.username}</h1>
//             <h1>{user.email}</h1>
//             <h1>{user.phone}</h1>
//             <Link to={user.website}>
//                 <p>{user.website}</p>
//             </Link>
//         </div>
//     )
// }
// export default Detail


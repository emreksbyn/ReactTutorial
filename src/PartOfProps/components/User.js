import PropTypes from 'prop-types'

function User({ age, surname, name, isLoggedIn, friends, address }) {
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `Selam ${name} ${surname} (${age})` : 'Giriş yapmadiniz.'
                }
            </h1>

            {address.title} {address.zip}
            <br />
            <br />

            {
                friends && friends.map((friend) =>
                    <div key={friend.id}>
                        {friend.name}
                    </div>)
            }
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "Ahmet",
    surname: "Yilmaz",
    isLoggedIn: true,
    age: 18,
    address: { title: "Istanbul", zip: 6767 }
}

export default User;

// function User(props) {
//     console.log(props);
//     return (
//         <h1>
//             {
//                 props.isLoggedIn ? `Selam ${props.name} ${props.surName} (${props.age})` : 'Giriş yapmadiniz.'
//             }
//         </h1>
//     )
// }
// export default User;
import User from "./components/User";

const friends = [
    {
        id: 1,
        name: "Ahmet"
    },
    {
        id: 2,
        name: "Mehmet"
    },
    {
        id: 3,
        name: "Ali"
    },
]

export default function PropsApp() {
    return (
        <div>
            <User
                name="Emre"
                surname={"Kisaboyun"}
                age={28}
                isLoggedIn={true}
                friends={friends}
                address={
                    {
                        title: 'Atasehir/Istanbul',
                        zip: 34755
                    }}
            />
            <User />
        </div>
    )
}
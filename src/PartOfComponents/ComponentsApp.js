// Componentler import edilirken buyuk harf ile edilmelidir.!!
import Header from './components/Header'

const firstName = "Emre";
const lastName = "Kisaboyun";

const isLoggedIn = true;

export default function ComponentsApp() {
    return (
        <>
            <Header />

            <h1>{isLoggedIn ? "Giriş yapildi." : "Giriş Yapılmadi"}</h1>

            <h2>{isLoggedIn && `Adım: ${firstName} - Soyadım: ${lastName}`}</h2>


        </>
    )
}

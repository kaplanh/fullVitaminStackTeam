import Card from "./components/Card";
import Header from "./components/Header";
import { contacts } from "./data";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
// console.log(contacts);

const App = () => {
    return (
        <div className="row justify-content-center gap-1 m-3">
            <Header />
            {contacts.map((item) => {
                const { id, name, imgURL, phone, email } = item;
                return (
                    <>
                        <Card
                            id={id}
                            name={name}
                            imgURL={imgURL}
                            phone={phone}
                            email={email}
                        />
                    </>
                );
            })}
        </div>
    );
};

export default App;

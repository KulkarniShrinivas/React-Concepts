function Greeting({name}){
    return (
        <h1 className="greeting">
            Hello <i>{name} </i>. welcome!
        </h1>
    );
}


export default function App(){
    return <Greetings name="React" />;
}
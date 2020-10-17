const Pet = ({name, animal, breed}) => {
    return (
        React.createElement(
            "div",
            {},         //any attribute will go here like class or id in key-value pair
            [
            React.createElement("h1", {} , name),          //it can be multiple as well, as a div can have multiple children
            React.createElement("h2", {} , animal),
            React.createElement("h2", {} , breed)
            ]
        )
    )
}



//its just a stamp, it will be useful only if we'll be use it
//Everytime App is called it is going to stamp a div and inside it an h1
const App = () => {
    return (
        React.createElement(
            "div",
            {},         //any attribute will go here like class or id in key-value pair
            [
            React.createElement("h1", {} , "Adopt-Me"),          //it can be multiple as well, as a div can have multiple children
            React.createElement(Pet , {name: 'Joey', animal: 'Dog', breed: 'Havenese'}),
            React.createElement(Pet , {name: 'Chandler', animal: 'Bird', breed: 'Cockateail'}),
            React.createElement(Pet , {name: 'Ross', animal: 'Cat', breed: 'Mixed'}),
            ]
        )
    )
}

//it'll overwrite anything inside "root" div
ReactDOM.render(
    React.createElement(App), document.getElementById('root')
)


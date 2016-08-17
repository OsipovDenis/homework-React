require("./index.css");

import React from 'react';
import ReactDOM from 'react-dom';
import Table from './src/myTable';
import Profile from './src/profile';
import Search from './src/search';
import Sort from './src/sort';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            robot: {
                first_name: "",
                last_name: "",
                gender: "",
                email: "",
                avatar: ""
            },
            filteredArr: [],
            pagination: {}
        }
    }

    fetchUrl() {
        fetch('http://dselkirk.getsandbox.com/users')
            .then((res) => res.json() )
            .then((data) => {
                this.setState({
                    arr: data,
                    robot: data[0],
                    filteredArr: data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentWillMount() {
        this.fetchUrl();
    }

    // Виртуальное представление DOM
    render() {
        if( this.state.arr.length == 0 ) {
            return (
                <div>
                    <p>loading...</p>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="control">
                        <Search data={this.state} newState={this.newState.bind( this )} />
                        <Sort data={this.state} newState={this.newState.bind( this )} />
                        <Profile data={this.state.robot} />
                    </div>

                    <div onClick={this.selectRobot.bind( this )}>
                        <Table data={this.state.filteredArr} />
                    </div>
                </div>
            );
        }
    }

    // Метод выбора нужного робота
    selectRobot(e){
        let tergetId = e.target.parentNode.id,
            foundRobot;

        if( e.target.parentNode.tagName == "TR" ) {
            foundRobot = this.state.arr.find(( item )=>{
                return +item.id === +tergetId;
            });
        }
        // console.log( foundRobot );

        this.setState({
            robot: foundRobot
        });
    }

    newState(prop){
        this.setState(prop);
    }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
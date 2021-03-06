import React from 'react';

export default class Sort extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="btnsSort">
        		<button className="btnSort" onClick={ this.sortUp.bind( this ) }>Sort Up</button>
        		<button className="btnSort" onClick={ this.sortDown.bind( this ) }>Sort Down</button>
        	</div>
		);
    }

    sortUp(){
    	let filteredArr = this.props.data.filteredArr.sort( (a,b) => {
           if(a.last_name.toLowerCase() < b.last_name.toLowerCase()) {
                return 1;
           } else {
                return -1;
           }
        });

    	this.props.newState({
          filteredArr: filteredArr,
          robot:   filteredArr[0]
        });
    }

    sortDown(){
    	let filteredArr = this.props.data.filteredArr.sort( (a,b) => {
            if(a.last_name.toLowerCase() > b.last_name.toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
    	});

    	this.props.newState({
          filteredArr: filteredArr,
          robot:   filteredArr[0]
        });
	}
}

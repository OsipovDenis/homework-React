import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Search">
                <input type="text" className="searchInput" onChange={ this.search.bind( this ) } />
            </div>
            );
    }

    search(e){
        let word = new RegExp('^' + e.target.value, 'i'),
            filteredArr;
            if( word.length !== 0 ) {
                filteredArr = this.props.data.arr.filter( (item) => {
                    return word.test( item.first_name );
                });

                this.props.newState({
                  filteredArr: filteredArr,
                  robot:   filteredArr[0]
                });
            } else {
                this.props.newState({
                    filteredArr: this.props.data.arr,
                    robot: this.props.data.arr[0]
                });
            }
    }
}

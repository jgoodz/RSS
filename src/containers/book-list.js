import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}

	render() {
		//console.log(this.props.asdf) 
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}


function mapStateToProps(state) {
	// Whatever is returned will show up as props inside of Booklist
	return {
		books: state.books
		//asdf: '123'
	};
}


export default connect(mapStateToProps)(BookList);




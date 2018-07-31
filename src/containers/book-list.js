import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
						{book.title}
				</li>
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

// Anything returned from this fcntion will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed too all reducers
	return bindActionCreators({ selectBook: selectBook}, dispatch)
}



// Promote BookList from a component to a container - it needs to know
// abou this new dispatch method, seletBook. Make it available as a prop 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);




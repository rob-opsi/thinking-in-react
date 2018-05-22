import React from 'react'

import BookFilter from './BookFilter';
import BookList from './BookList';

import books from '../mocks/books'

class Books extends React.Component {
    constructor() {
        super()
        this.state = {
            books: books,
            selectedFilter: 'All'
        }
    }

    selectFilter = (filter) => {
        this.setState({
            selectedFilter: filter,
            books: filter === 'All' ? books : books.filter(book => (book.category === filter))
        })
    }

    render() {
        const { selectedFilter, books } = this.state;
        const filters = [
            'All',
            'Web',
            'Mobile',
            'DevOps',
            'Essentials',
        ]

        const tabItems = filters.map(filter => (
            <li className={filter === selectedFilter ? 'active' : ''} key={filter} onClick={() => this.selectFilter(filter)}>
                <a href="#0">{filter}</a>
            </li>
        ))

        return (
            <section id="books">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Books</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <BookFilter tabItems={tabItems} />
                    <BookList books={books} />
                </div>
            </section>
        )
    }
}

export default Books
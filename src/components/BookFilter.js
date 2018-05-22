import React from 'react';

const BookFilter = ({ tabItems }) => (
    <div className="row">
        <div className="col-lg-12">
            <ul className="nav nav-pills text-center">
                {tabItems}
            </ul>
        </div>
    </div>
)

export default BookFilter
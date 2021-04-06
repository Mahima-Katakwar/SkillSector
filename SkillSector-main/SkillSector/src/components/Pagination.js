import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link  onClick={() => paginate(number)} href="./ProgrammerTable1" className="page-link">
                            {number}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export  default Pagination;
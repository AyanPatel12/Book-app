                                                        

import React from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';

const BooksCard = ({ books, selectedGenre }) => {
    const filteredBooks = selectedGenre ? books.filter(book => book.genre === selectedGenre) : books;

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {filteredBooks.map((item) => (
                <div key={item._id} className='border-2 border-gray-500 rounded-lg p-4 relative hover:shadow-xl'>
                    <h2 className='relative top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                        {item.publishYear}
                    </h2>
                    <h4 className='my-2 text-gray-500'>{item._id}</h4>
                    <div className='flex justify-start items-center gap-x-2'>
                        <PiBookOpenTextLight className='text-red-300 text-2xl' />
                        <h2 className='my-1'>{item.title}</h2>
                    </div>
                    <div className='flex justify-start items-center gap-x-2'>
                        <BiUserCircle className='text-red-300 text-2xl' />
                        <h2 className='my-1'>{item.author}</h2>
                    </div>
                    <div className='flex justify-between items-center gap-x-2 mt-4'>
                        <Link to={`/books/details/${item._id}`}>
                            <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                        </Link>
                        <Link to={`/books/edit/${item._id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-800 hover:text-black' />
                        </Link>
                        <Link to={`/books/delete/${item._id}`}>
                            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BooksCard;




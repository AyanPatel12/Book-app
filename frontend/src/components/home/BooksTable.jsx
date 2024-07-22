

import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books, selectedGenre }) => {
  const filteredBooks = selectedGenre ? books.filter(book => book.genre === selectedGenre) : books;

  return (
    <table className='w-full border-separate rounded-md'>
      <thead>
        <tr className='bg-gray-200 m-8'>
          <th className='border border-gray-600 rounded-md p-2'>No</th>
          <th className='border border-gray-600 rounded-md p-2'>Title</th>
          <th className='border border-gray-600 rounded-md p-2 max-w-xs:hidden'>Author</th>
          <th className='border border-gray-600 rounded-md p-2 max-w-xs:hidden'>Publish Year</th>
          {/* <th className='border border-gray-600 rounded-md p-2'>Genre</th> */}
          <th className='border border-gray-600 rounded-md p-2'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {filteredBooks.map((book, index) => (
          <tr key={book._id} className='bg-white m-8'>
            <td className='border border-gray-600 rounded-md p-2 text-center'>{index + 1}</td>
            <td className='border border-gray-600 rounded-md p-2'>{book.title}</td>
            <td className='border border-gray-600 rounded-md p-2 max-w-xs:hidden'>{book.author}</td>
            <td className='border border-gray-600 rounded-md p-2 max-w-xs:hidden'>{book.publishYear}</td>
            {/* <td className='border border-gray-600 rounded-md p-2'>{book.genre}</td> */}
            <td className='border border-gray-600 rounded-md p-2'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800 hover:text-green-600 cursor-pointer' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600 hover:text-red-400 cursor-pointer' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;

import React, { useState } from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({ quote, newQuote, color }) => {

    return (
        <div className='quoteBox' style={{color:color}}>
            <i className='bx bxs-quote-alt-left quoteBox__icon' ></i>
            <p className='quoteBox__quote'>{quote.quote}</p>
            <h3 className='quoteBox__author'>{quote.author}</h3>
            <QuoteButton className= 'quoteBox__button' color={color} newQuote={newQuote} />
        </div>
    )
}

export default QuoteBox
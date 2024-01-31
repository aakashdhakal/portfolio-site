import './BlogCard.css'
import { useState, useEffect } from 'react'

export default function BlogCard() { 
    const endpoint = 'https://api.dhakalaakash.com.np/api/postAuthors.php?username=aakashdhakal'
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        fetch(endpoint,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'                }
            })
            .then(res => res.json())
            .then(data => setAuthors(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="blog-card">
            <div className="blog-card-header">
                <h2>Blog Title</h2>
            </div>
            <div className="blog-card-body">
                <p>Blog content</p>
            </div>
            <div className="blog-card-footer">
                {authors.map((author, index) => (
                    <p key={index}>Author: {author.name}</p>
                ))}
            </div>
        </div>
    )
}
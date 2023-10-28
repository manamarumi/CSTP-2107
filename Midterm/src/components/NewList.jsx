import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './NewList.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';


function NewsList() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [searchedKeyword, setSearchedKeyword] = useState('');
  const articlesPerPage = 15;

  const changePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const apiKey = 'da4d7e6c50e448bf8fb950be2633951c';
    let apiUrl ;

    if (searchedKeyword) {
      apiUrl = `https://newsapi.org/v2/everything?q=${searchedKeyword}&apiKey=${apiKey}&pageSize=${articlesPerPage}&page=${page}`;
    } else {
      apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}&pageSize=${articlesPerPage}&page=${page}`;
    }

    axios.get(apiUrl)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, [page,searchedKeyword]);


  const goToPreviousPage = () => {
    if (page > 1) {
      changePage(page - 1);
    }
  };

  const goToNextPage = () => {
    changePage(page + 1);
  };

  const goToFirstPage = () => {
    changePage(1);
  };

  const lastPage = 6;

  const goToLastPage = () => {
    changePage(lastPage);
  };

  return (
    <div>
      <div>
        <header className='header'>Midterm News</header>
      </div>

      <InputGroup style={{ width: '800'}} size="sm" className="mb-3 p-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={searchedKeyword}
          onChange={(event) => setSearchedKeyword(event.target.value)}
        />
      </InputGroup>

      <div className="card-row">
        {articles.map((data, index) => (
          <Card key={index} className="card">
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              {data.urlToImage ? (
                <Card.Img className='card-img' variant="top" src={data.urlToImage} />
              ) : (
                <div className="no-image">Go to the main article</div>
              )}
            </a>
            <Card.Body>
              <Card.Title className='card-title'>
                {data.title}
              </Card.Title>
              <Card.Text>{data.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Published at: {data.publishedAt}</small>
            </Card.Footer>
          </Card>
        ))}
      </div>

      <Pagination className='buttons'>
      <Pagination.First onClick={goToFirstPage} />
        <Pagination.Prev onClick={goToPreviousPage} disabled={page === 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={goToNextPage} />
        <Pagination.Last onClick={goToLastPage} />
      </Pagination>
    </div>
    
  );
}

export default NewsList;

const request = require('supertest');
const app = require('../index'); // Correct this path to the actual export path of your Express app

describe('Book resource CRUD operations', () => {
  let newBookId;

  it('should create a new book', async () => {
    const bookData = { title: 'New Book', author: 'John Doe', year: 2021 };
    const response = await request(app)
      .post('/books')
      .send(bookData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    newBookId = response.body.id; // Assuming the created book's id is returned
  });

  it('should get a list of all books', async () => {
    const response = await request(app).get('/books');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a book by id', async () => {
    const response = await request(app).get(`/books/${newBookId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', newBookId);
  });

  it('should update a book', async () => {
    const response = await request(app)
      .put(`/books/${newBookId}`)
      .send({ author: 'Jane Doe' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('author', 'Jane Doe');
  });

  it('should delete a book', async () => {
    const response = await request(app).delete(`/books/${newBookId}`);
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Book successfully deleted');
  });
});

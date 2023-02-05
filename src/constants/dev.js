const hostname = process.env.NODE_ENV === 'development' ? `http://localhost:3001` : '';

module.exports = hostname;
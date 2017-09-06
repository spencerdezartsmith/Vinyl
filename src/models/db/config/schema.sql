CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL CHECK(LENGTH(password) >= 6),
  date_joined DATE NOT NULL DEFAULT NOW()
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  review TEXT NOT NULL,
  user_id INT REFERENCES users(id),
  album_id INT REFERENCES albums(id),
  review_date DATE NOT NULL DEFAULT NOW()
);



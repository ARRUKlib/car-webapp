DROP TABLE IF EXISTS cars;

CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  brand TEXT,
  model TEXT,
  release_year TEXT,
  image_url TEXT
);


INSERT INTO cars (brand, model, release_year, image_url)
VALUES ('Toyota', 'Corolla', 2019, '/static/toyota-corolla-2019.jpg');

INSERT INTO cars (brand, model, release_year, image_url)
VALUES ('Honda', 'Civic', 2020, '/static/Honda-Civic-2020.jpg');

INSERT INTO cars (brand, model, release_year, image_url)
VALUES ('Ford', 'Focus', 2018, '/static/Ford-Focus-2018.jpg');

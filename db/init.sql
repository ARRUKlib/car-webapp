DROP TABLE IF EXISTS cars;

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(100),
    model VARCHAR(100),
    release_year INT,
    image_url TEXT
);

INSERT INTO cars (id, brand, model, release_year, image_url)
VALUES (1, 'Toyota', 'Corolla', 2019, '/static/toyota-corolla-2019.jpg');

INSERT INTO cars (id, brand, model, release_year, image_url)
VALUES (2, 'Honda', 'Civic', 2020, '/static/Honda-Civic-2020.jpg');

INSERT INTO cars (id, brand, model, release_year, image_url)
VALUES (3, 'Ford', 'Focus', 2018, '/static/Ford-Focus-2018.jpg');

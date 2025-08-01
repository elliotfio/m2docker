CREATE TABLE personnes (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50),
    age INT,
    ville VARCHAR(50)
);

INSERT INTO personnes (nom, age, ville) VALUES
('Alice', 30, 'Paris'),
('Bob', 25, 'Lyon'),
('Charlie', 35, 'Marseille'),
('Diana', 28, 'Toulouse'),
('Erik', 45, 'Nice'),
('Fanny', 32, 'Nantes'),
('George', 38, 'Strasbourg'),
('Helena', 29, 'Bordeaux'),
('Ivan', 22, 'Lille'),
('Julie', 27, 'Rennes'); 
-- Table for user authentication
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Table for storing course information
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    imageUrl VARCHAR(255),
    price DECIMAL(10, 2),
    discount VARCHAR(10),
    tag VARCHAR(50),
    category VARCHAR(50)
);
-- Inserting dummy courses
INSERT INTO courses (title, description, imageUrl, price, discount, tag, category)
VALUES 
('React Development Masterclass', 'Master React.js and build modern web applications with this comprehensive course.', 'https://via.placeholder.com/300x200', 39.99, '20%', 'Intermediate', 'Web development'),
('Python Programming Basics', 'Learn Python programming fundamentals and start your journey in software development.', 'https://via.placeholder.com/300x200', 24.99, '10%', 'Beginner', 'Programming'),
('Data Science Essentials', 'Explore the essentials of data science, including data analysis, machine learning, and data visualization.', 'https://via.placeholder.com/300x200', 49.99, '25%', 'Intermediate', 'Data Science'),
('Java Web Development', 'Build dynamic web applications using Java programming language and Spring framework.', 'https://via.placeholder.com/300x200', 34.99, '15%', 'Intermediate', 'Web development'),
('Mobile App Development with Flutter', 'Learn Flutter framework and create cross-platform mobile applications for iOS and Android.', 'https://via.placeholder.com/300x200', 44.99, '20%', 'Intermediate', 'Mobile App Development');

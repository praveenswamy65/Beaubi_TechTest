Beaubi technical test mockup view

This react application is developed using ReactJS and PostgreSQL for database operations. I used Semantic UI for form elements and styled components for navigation bar. Sequelize library is used for database connection and other operations.

The application is hosted on Heroku cloud platform and utilizes PostgreSQL-free dev version as an addon.
https://beaubi-new-app.herokuapp.com/

Please monitor the database by adding server in pgAdmin desktop application using below credentials:
PostgreSQL credentials for checking the data insertions:
Host - ec2-35-171-31-33.compute-1.amazonaws.com
Database - da3gv4t9s91uha
User - pzfniipfxwskeh
Port - 5432
Password - ae4346f0ff7b353565cd8c00c8a979cafc54ccfa80f58a6e2c8730eaf1fe09c7
URI - postgres://pzfniipfxwskeh:ae4346f0ff7b353565cd8c00c8a979cafc54ccfa80f58a6e2c8730eaf1fe09c7@ec2-35-171-31-33.compute-1.amazonaws.com:5432/da3gv4t9s91uha
Heroku CLI - heroku pg:psql postgresql-animated-47289 --app beaubi-new-app

I followed some blog posts from medium.com and other resources mentioned below in references for the task.

References:

1) Sequelize operations : https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
2) Semantic UI : https://semantic-ui.com/collections/form.html
3) Axios for http post request : https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
4) Navigation bar : I used my portfolio application as reference.


# Plant APP Phase 4 Project

## Description

This project is meant for plant lovers! Create an account or login upon opening the app. Add a plant post and interact with others through commenting on the global plants part of the application. Like, edit, and delete posts and comments at your leisure!  

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Render account
- Postgresql

## Setup

Start by forking and cloning this project repository to your local repository. Run the below commands:

```console
$ cd your-project-name
$ bundle install
$ npm install --prefix client
$ rails db:create
$ rails db:migrate db:seed
```

To run the server:
```console
$ rails s
```

In a different terminal run the following commands to run the React front end:
```console
$ npm start --prefix client
```

To view your application in the browers make sure you are on your http://localhost:4000 after running the above commands.

## Application Coding Details

This application utilizes elements of React (JavaScript, CSS, HTML, JSX) and Ruby on Rails to create a cohesive front and back end experience. An individual users data persists to a backend database so that any changes that user has made will persist as the page is updated. 

### Phase 4 Requirements Met Through this Project
This project:

- Uses a Rails API backend with a React frontend.
- Has at least three models on the backend, that include the following:
  - At least two one-to-many relationships.
  - At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Has a joins table. This joins table has a user submittable attribute.
- Has full CRUD actions for at least one resource.
- Has a minimum of create and read actions for EACH resource.
- Has at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
- Implements authentication/authorization, including password protection. A user must be able to:
  -sign up with a new user account,
  -log in to the site with a secure password and stay logged in via user ID in the session hash, and
log out of the site.

## About the Creators 
Anna Schmidt, Brooke Ross, Cindy Qu, and Mustafa Rizvi are all nearing the end of their 15 week, extremely rigorous online program. With Flatirons school, they have attended classes online Monday through Friday from 9am-5pm since August 29th 2022. They have a projected graduation date of December 9th, with a certificate in full stack Software Engineering. Through this program and its many challenges they have been learning to code with Ruby on Rails. With this program, they are able to showcase their hard work and passion! Plus their love of cute house plants. Connect with any of them below via LinkedIn.

Connect with Anna [here](https://www.linkedin.com/in/annaschmidt1697/)
Connect with Brooke [here](https://www.linkedin.com/in/brooke-ross-se/)
Connect with Cindy [here](https://www.linkedin.com/in/cindy-qu/)
Connect with Mustafa [here](https://www.linkedin.com/in/mustafa-rizvi-970494138/)
## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

Render requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

## Resources

- [Getting Started with Ruby on Rails on Render](https://render.com/docs/deploy-rails)
- [Render Databases Guide](https://render.com/docs/databases)

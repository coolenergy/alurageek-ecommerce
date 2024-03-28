// Using my json-db-api repository in Heroku to access the database
const jsonServer = "https://json-db-api.herokuapp.com"

function getProducts() {
  return fetch(`${jsonServer}/products`)
    .then(res => res.json());
}

function getUsers() {
  return fetch(`${jsonServer}/users`)
    .then(res => res.json());
}

export const services = {
  getProducts,
  getUsers
}

const genericTableUrl = "http://localhost:8080/api/generic"
const findAll = (host, schema, username, password, table) =>
  fetch(`${genericTableUrl}/${table}`, {
    method: "POST",
    body: JSON.stringify({
      host, schema, username, password
    }),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => response.json())

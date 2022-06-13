const { ConnectionClosedEvent } = require("mongodb")

const deleteButton = document.querySelector('#delete-button')
const logButton = document.querySelector('#log-button')

logButton.addEventListener('click', console.log("yah"))
deleteButton.addEventListener('click', console.log("yah"))

function deleteGuy() {console.log("delete")}

// deleteButton.addEventListener('click', _ => {
    // fetch('/events', {
    //   method: 'delete',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     name: 'Darth Vadar'
    //   })
    // })
    //   .then(res => {
    //     if (res.ok) return res.json()
    //   })
    //   .then(data => {⁄
    //     window.location.reload()
    //   })
//   })
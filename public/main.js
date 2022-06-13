const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ => {
    fetch('/events', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Darth Vadar'
      })
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(data => {⁄
        window.location.reload()
      })
  })
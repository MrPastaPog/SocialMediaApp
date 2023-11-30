
function LoadComments() {
  fetch(`${location.href}../Comments`)
  .then(res => res.json()).then(data => {
    for (d in data) {
      console.log(d)
      let comment = data[d].comment.replaceAll('\n', '<br>')

      $('#center').prepend(`<div id="comment">
      <h1 style="font-size: 20px;">${data[d].name} ${data[d].hours}:${data[d].min} ${data[d].date}/${data[d].month}</h1>
      <p>${comment}</p>
      </div>`)
    
    }
  })
}
function updateComments() {
  fetch(`${location.href}../Comments`)
  .then(res => res.json).then(data => {
    if ($('#center').children().length - 2 < data.length) {
      
    }
  })
}
$(function() {
  setTimeout(() => {window.scrollTo(0, 99999)}, 100)
  console.log(location.href)
  let username = JSON.parse(sessionStorage.getItem('Username'))
  console.log(username)
  LoadComments()
  $('#post').click(function(e) {
    e.preventDefault()
    console.log('asfiu')
    console.log($('textarea').val())
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"content": $('textarea').val(), "username": username})
    }
    fetch(`${location.href}../Post`, options)
    .then(res => res.json()).then(data => {

      LoadComments()
      
    })  
    $('textarea').val('')
  })
})

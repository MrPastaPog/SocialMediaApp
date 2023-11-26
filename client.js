$(function() {
  fetch('http://localhost/Comments')
  .then(res => res.json()).then(data => {
    console.log(data)
    data.reverse()
    for (d in data) {
      console.log(d)
      $('#center').prepend(`<div id="comment">${data[d].name}<p>${data[d].comment}</p></div>`)
    
    }
      
      
    
  })
  $('#post').click(function(e) {
    console.log('asfiu')
    console.log($('textarea').val())
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"content": $('textarea').val()})
    }
    fetch('http://localhost/Post', options)
    .then(res => res.json()).then(data => {
      location.reload()
    })  
  })
})

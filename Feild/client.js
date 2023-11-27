
$(function() {
  // if ('scrollRestoration' in window.history) {
  //   window.history.scrollRestoration = 'manual'
  // }indow.sc
  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  let username = JSON.parse(sessionStorage.getItem('Username'))
  console.log(username)
  fetch('http://localhost/Comments')
  .then(res => res.json()).then(data => {
    console.log(data)
    data.reverse()
    for (d in data) {
      console.log(d)
      $('#center').prepend(`<div id="comment">
      ${data[d].name} ${data[d].hours}:${data[d].min} ${data[d].date}/${data[d].month}
      <p>${data[d].comment}</p>

      </div>`)
    
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
      body: JSON.stringify({"content": $('textarea').val(), "username": username})
    }
    fetch('http://localhost/Post', options)
    .then(res => res.json()).then(data => {
      location.reload()
    })  
  })
})

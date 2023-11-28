
$(function() {
  // if ('scrollRestoration' in window.history) {
  //   window.history.scrollRestoration = 'manual'
  // }
  window.onunload = function(){ window.scrollTo(0,200); }
  console.log(location.href)
  let username = JSON.parse(sessionStorage.getItem('Username'))
  console.log(username)
  fetch(`${location.href}../Comments`)
  .then(res => res.json()).then(data => {
    
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
    fetch(`${location.href}../Post`, options)
    .then(res => res.json()).then(data => {
      location.reload()
    })  
  })
})

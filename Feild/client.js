$.fn.appendToWithIndex = function(to,index){
  if(! to instanceof jQuery){
      to=$(to);
  };
  if(index===0){
      $(this).prependTo(to)
  }else{
      $(this).insertAfter(to.children().eq(index-1));
  }
};
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
  .then(res => res.json()).then(data => {
    console.log(data)
    if ($('#center').children().length - 2 < data.length) {
      for(let i = 0; i < (data.length - ($('#center').children().length - 2)); i ++) {
        $(`<div id="comment">
        <h1 style="font-size: 20px;">${data[i].name} ${data[i].hours}:${data[i].min} ${data[i].date}/${data[i].month}</h1>
        <p>${data[i].comment}</p>
        </div>`).appendToWithIndex($('#center'), $('#center').children().length - 2)
      }
    }
    window.scrollTo({
      top: 99999,
      left: 0,
      behavior: 'smooth'
    });
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
    if ($('textarea').val().length === 0) {return 0}
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"content": $('textarea').val(), "username": username})
    }
    fetch(`${location.href}../Post`, options)
    .then(res => res.json()).then(data => {

      updateComments()
      
    })  
    $('textarea').val('')
  })
})

$(function() {
  $('#confirm').click(function(e) {
    sessionStorage.setItem('Username', JSON.stringify($('input').val()))
    window.location.href += 'Home'
    console.log('asdf')
  })
})

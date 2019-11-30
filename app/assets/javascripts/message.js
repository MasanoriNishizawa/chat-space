$(function(){ 
  function buildHTML(message){
    var img = "";
    if ( message.image ) {
    var img = '<img src=${message.image} class: "lower-message__image">'
    }
    var html =`<div class="message" data-message-id=${message.id}>
                <div class="message__upper-info">
                  <div class="message__upper-info__talker">
                    ${message.user_name}
                  </div>
                  <div class="message__upper-info__date">
                    ${message.date}
                  </div>
                </div>
                <div class="message__text">
                <div class="message__text__content">
                  ${message.content}
                  ${img}
                </div>
              </div>`
     return html;
   }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
    $('form')[0].reset();
    $('.form__submit').prop("disabled", false)
  })
   .fail(function(){
     alert('error');
    });
  });
});
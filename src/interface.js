$(function() {

  var thermostat = new Thermostat();
  $('.display_temp').text(thermostat.temperature);

  $('#increase_button')
    .on('mousedown', function() {
    $(this).css("background-color", "green")
      thermostat.up()
    $('.display_temp').text(thermostat.temperature)
  });

  $('#increase_button')
    .on('mouseup', function() {
    $(this).css("background-color", "white")

  });

      $('#decrease_button')
        .on('mousedown', function(){
        $(this).css("background-color", "red")
          thermostat.down()
        $('.display_temp').text(thermostat.temperature)
      });

      $('#decrease_button')
        .on('mouseup', function(){
      $(this).css("background-color", "white")
      $('.display_temp').text(thermostat.temperature)

      });

      $('#power_saver_button_on').click(function(){
        thermostat.powerSavingOff();
      $('h6').text("Power saving mode is on")
      });

      $('#power_saver_button_off')
        .on('click', function(){
          thermostat.powerSavingOn();
      $('h6').text("Power saving mode is off")
      });


      $('#reset_button')
      .on('mousedown', function(){
          thermostat.tempReset()
        $('.display_temp').text(thermostat.temperature)
      });

      $('#decrease_button')
        .on('mouseup', function(){
      $('.display_temp').text(thermostat.temperature)

      });




});

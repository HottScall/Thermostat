'use strict';

describe('Thermostat', function(){

 var thermostat;

 beforeEach(function(){
  thermostat = new Thermostat

 });

 it('has a starting temp of 20 degrees', function(){
   expect(thermostat.currentTemperature()).toEqual(20);

 });

 it('increases when temp is turned up', function(){
   thermostat.up();
   expect(thermostat.currentTemperature()).toEqual(21);
 });

 it('decreases when temp is turned down', function(){
   thermostat.down();
   expect(thermostat.currentTemperature()).toEqual(19);
 });

 it('has a a minimum temperature', function(){
   for (var i = 0; i < 11; i++){
   thermostat.down();
   }
   expect(thermostat.currentTemperature()).toEqual(10);
 });

 // it('has a power saver mode', function(){
 //   expect(thermostat.)
 // });

});

$(document).ready(function(){
  $('#calendar').fullCalendar({

    events: [
      {
        start: '2016-02-01',
        title: '2',
      }
    ],

    eventClick: function(calEvent, jsEvent, view) {
      $('#EventList').modal('show')
    },

    dayClick: function(date, jsEvent, view) {
      $('#newEvent').modal('show')
    }

  });
})
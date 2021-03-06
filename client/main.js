import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'

import './main.html';

/// routing

// Router.configure({
//   layoutTemplate: 'ApplicationLayout'
// });
//
Router.route('/', function () {
  this.render('topics');
  // this.render('momentum');
});

Router.route('/force', function () {
  this.render('force');
  // this.render('momentum');
});

Router.route('/momentum', function () {
  this.render('momentum');
  // this.render('momentum');
});

Router.route('/workEnergy', function () {
  this.render('workEnergy');
  // this.render('momentum');
});




// Router.route('/momentum', function () {
//   // this.render('momentum');
//   this.render('momentum', {
//     to:"momentum"
//   });
// });

Session.set({
  timeMoment: 5,
});

Session.set({
  massMoment: 5,
});


Template.topics.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.topics.helpers({
  // isMomentum: function () {
  //     return Session.get("isMoment");
  // },
});

Template.topics.events({
  // 'click button'(event, instance) {
  //   // increment the counter when button is clicked
  //   instance.counter.set(instance.counter.get() + 1);
  // },
//   'click .workEnergy_anim':function(event){
//     Session.set({
//       isMoment: true,
//     });
// },
//   'click .momentum':function(event){
//     Session.set({
//       isMoment: true,
//     });
// },
//   'click .force':function(event){
//     rSession.set({
//       isMoment: true,
//     });
// },


});

Template.force.rendered = function() {
  var canvas = document.getElementById('tutorial');
      if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 50, 50);
      }
}

var pos = 10
var bullet = new Image()
bullet.src = 'http://www.clipartbest.com/cliparts/bcy/ozx/bcyozxAqi.png'

var box = new Image()
box.src = 'http://tutorial9.s3.amazonaws.com/uploads/2009/11/3d-wooden-box/final.png'
box_x_pos = 700

var width = 800;

function draw(){
  var ctx = document.getElementById('momentum_draw').getContext('2d');
  ctx.drawImage(box, box_x_pos, 50, 60, 60)


  ctx.clearRect(pos-60,50,60,30);


  ctx.drawImage(bullet, pos, 50, 60, 30);
  //ctx.clearRect(pos,50,60,30);

  if (pos < box_x_pos-55) {
    pos = pos+2;
  }


}

Template.momentum.rendered = function() {
  var canvas = document.getElementById('momentum_draw');
      if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        timer=setInterval(draw, 10);
        //window.requestAnimationFrame(draw);


      }
}

Template.momentum.events({
  "input #time_slider": function(event) {
      // var res = event.target.id.split('-');
      var time = document.getElementById("time_slider").value;
      Session.set({
        timeMoment: time,
      });
     // document.getElementById("time-edition-submitted").innerText = "";
  },
  "input #time_input": function(event) {
      // var res = event.target.id.split('-');
      var time = document.getElementById("time_input").value;
      Session.set({
        timeMoment: time,
      });
     // document.getElementById("time-edition-submitted").innerText = "";
  },
  "input #mass_slider": function(event) {
      // var res = event.target.id.split('-');
      var mass = document.getElementById("mass_slider").value;
      Session.set({
        massMoment: mass,
      });
     // document.getElementById("time-edition-submitted").innerText = "";
  },
  "input #mass_input": function(event) {
      // var res = event.target.id.split('-');
      var mass = document.getElementById("mass_input").value;
      Session.set({
        massMoment: mass,
      });
     // document.getElementById("time-edition-submitted").innerText = "";
  },
})

Template.momentum.helpers({
  time: function() {
    var time = Session.get("timeMoment");
    return time;
  },
  mass: function() {
    var mass = Session.get("massMoment");
    return mass;
  }
});

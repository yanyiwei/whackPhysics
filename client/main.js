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

// Session.set({
//   isMoment: false,
// });


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
  ctx.drawImage(bullet, pos, 50, 60, 30);
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

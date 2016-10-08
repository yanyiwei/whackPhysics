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





// Router.route('/momentum', function () {
//   // this.render('momentum');
//   this.render('momentum', {
//     to:"momentum"
//   });
// });

Session.set({
  isMoment: false,
});


Template.topics.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.topics.helpers({
  isMomentum: function () {
      return Session.get("isMoment");
  },
});

Template.topics.events({
  // 'click button'(event, instance) {
  //   // increment the counter when button is clicked
  //   instance.counter.set(instance.counter.get() + 1);
  // },
  'click .workEnergy_anim':function(event){
    Session.set({
      isMoment: true,
    });
},
  'click .momentum':function(event){
    Session.set({
      isMoment: true,
    });
},
  'click .force':function(event){
    rSession.set({
      isMoment: true,
    });
},


});

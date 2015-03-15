AutoForm.addHooks(['jobNew', 'jobEdit'], {
	after: {
		insert: function(error, result) {
			// if (error) {
			// 	console.log("Insert Error:", error);
			// } else {
				//console.log("Insert Result:", result);
				GAnalytics.event("expert","insert",getUserName(Meteor.user()));

				//FIXTHIS
				// Router.go('job', {_id:result});

				//TEMPFIX
				Router.go('jobs');
			// }
		},
		update: function(error, result) {
			if (error) {
				console.log("Update Error:", error);
			} else {
				//console.log("Update Result:", result);
				GAnalytics.event("job","update",getUserName(Meteor.user()));

				Router.go('job', {_id: Router.current().params._id});
			}
		}
	}
});

Template.jobEdit.events({
	'click #cancel':function(event, template){
		event.preventDefault();
		Router.go("job",{_id:this.job._id});
	}
})

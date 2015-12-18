App.addChild('ProjectSidebar', {
  
  el: '#project-sidebar',

  activate: function() {

    var that = this;
    
    this.$rewards = this.$('#rewards');
    
    $.get(that.$rewards.data('index_path')).success(function(data){
    
      that.$rewards.html(data);
    
    });



    this.$jobs = this.$('#jobs');

    $.get(that.$jobs.data('index_path')).success(function(data){

      that.$jobs.html(data);

    });
  
  }

});


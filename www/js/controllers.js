var hive = angular.module('hive.controllers', [])


//Intro Controller
.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  $scope.skip = function() {
    $ionicSlideBoxDelegate.slide(4);
  };
  $scope.restart = function() {
    $ionicSlideBoxDelegate.slide(0);
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

});

//Login Button Controller
hive.controller('loginbuttonCtrl', function($scope, $ionicModal) {
   
  $ionicModal.fromTemplateUrl('login-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});

//Register Controller
hive.controller('RegisterCtrl', function($scope, $ionicModal) {
   
  $ionicModal.fromTemplateUrl('register-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});

//Audio Capture Controller
hive.controller('MyCtrl', function($scope, $cordovaCapture) {

  $scope.captureAudio = function() {
    var options = { limit: 3, duration: 10 };

    $cordovaCapture.captureAudio(options).then(function(audioData) {
      // Success! Audio data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

  $scope.captureImage = function() {
    var options = { limit: 3 };

    $cordovaCapture.captureImage(options).then(function(imageData) {
      // Success! Image data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

  $scope.captureVideo = function() {
    var options = { limit: 3, duration: 15 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

});
//Public Page Controller
hive.controller('PublicCtrl', function($scope) {

});

//Details Page Controller
hive.controller('DetailsCtrl', function($scope, $ionicHistory) {

});

//Features Page Controller
hive.controller('FeaturesCtrl', function($scope, $ionicHistory, $state) {

});

//Report Bug Controller - This is within the idea details page under the 'features' tab
hive.controller('reportbugCtrl', function($scope, $ionicModal) {
   
  $ionicModal.fromTemplateUrl('reportbug-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});

//Add Feature Controller - This is within the idea details page under the 'features' tab
hive.controller('addfeatureCtrl', function($scope, $ionicModal) {
   
  $ionicModal.fromTemplateUrl('addfeature-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});

//Accordion Controller - This is within the idea details page under the 'features' tab
hive.controller('AccordionCtrl', function($scope) {
  $scope.groups = [];
  for (var i=0; i<3; i++) {
    $scope.groups[i] = {
      name: i,
      description: 'User Story Description goes here',
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  
  
   // if given group is the selected group, deselect it
   // else, select the given group
   
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
});

//List controller
hive.controller('MyCtrl', function($scope) {
  
  $scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 }
  ];
  
});

//Join Controller
hive.controller('JoinCtrl', function($scope, $ionicModal) {
   
  $ionicModal.fromTemplateUrl('joinTeam-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});

//Popup Controller
hive.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };
 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Join Team',
     template: 'Are you sure you want to join this role?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
});


//This Controller is used to reset the 'submitIdeaForm' form after the 'Submit' or 'Save' buttons are pressed
hive.controller('AddCtrl', function($scope) {

  $scope.submitIdea = function(){
    $scope.master= null;
    
      $scope.reset = function() {
        $scope.ideaName = angular.copy($scope.master);
        $scope.ideaTagline = angular.copy($scope.master);
        $scope.ideaDescription = angular.copy($scope.master);
        $scope.ideaCategory = angular.copy($scope.master);
        if ($scope.form) $scope.form.$setPristine();
      };
      $scope.reset();
  };
  $scope.saveIdea = function(){
    $scope.master= null;
    
      $scope.reset = function() {
        $scope.ideaName = angular.copy($scope.master);
        $scope.ideaTagline = angular.copy($scope.master);
        $scope.ideaDescription = angular.copy($scope.master);
        $scope.ideaCategory = angular.copy($scope.master);
        if ($scope.form) $scope.form.$setPristine();
      };
      $scope.reset();
  };
});

//This Controller is for the Profile Page
hive.controller('ClickToEditCtrl', function($scope) {

});

//This Controller is for the Profile Page
hive.controller('ProfileCtrl', function($scope) {
  $scope.submit = function() {
    // you can check is form valid with help of $valid parameter
    if($scope.userForm.$valid){
        alert("Name is " + $scope.profileName)
    }
  }
});
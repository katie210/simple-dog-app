describe('AdoptableDogs', function() {

  var AdoptableDogs,
      $http,
      ENV,
      dogDataService,
      $httpBackend,
      urlRandom,
      urlDogs,
      testmultiDogData,
      testDogData,
      authRequestHandlerRandom,
      authRequestHandler;


  beforeEach(function() {
  angular.module('config',[]);
  angular.module('ngclipboard',[]);
  angular.module('ngStorage',[]);
  angular.module('ngMessages',[]);
  module('dogApp', function($provide) {
      $provide.constant('ENV', 'PFKEY');
    });

  inject(function (_AdoptableDogs_, _$http_, _ENV_, _dogDataService_, $injector) {
      AdoptableDogs = _AdoptableDogs_;
      $http = _$http_;
      ENV = _ENV_;
      dogDataService = _dogDataService_;

      $httpBackend = $injector.get('$httpBackend');

      testDogData = {"@encoding":"iso-8859-1","@version":"1.0","petfinder":{"pet":{"options":{"option":[{"$t":"altered"},{"$t":"noCats"}]},"status":{"$t":"A"},"contact":{"phone":{"$t":"509-662-9577"},"state":{"$t":"WA"},"address2":{},"email":{"$t":"wvhs@wenatcheehumane.org"},"city":{"$t":"Wenatchee"},"zip":{"$t":"98807"},"fax":{"$t":"509-665-7612"},"address1":{"$t":"1474 South Wenatchee Avenue"}},"age":{"$t":"Young"},"size":{"$t":"M"},"media":{"photos":{"photo":[{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/34596985/1/?bust=1459522779&width=60&-pnt.jpg","@id":"1"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/34596985/1/?bust=1459522779&width=95&-fpm.jpg","@id":"1"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/34596985/1/?bust=1459522779&width=500&-x.jpg","@id":"1"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/34596985/1/?bust=1459522779&width=300&-pn.jpg","@id":"1"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/34596985/1/?bust=1459522779&width=50&-t.jpg","@id":"1"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/34596985/2/?bust=1459522783&width=60&-pnt.jpg","@id":"2"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/34596985/2/?bust=1459522783&width=95&-fpm.jpg","@id":"2"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/34596985/2/?bust=1459522783&width=500&-x.jpg","@id":"2"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/34596985/2/?bust=1459522783&width=300&-pn.jpg","@id":"2"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/34596985/2/?bust=1459522783&width=50&-t.jpg","@id":"2"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/34596985/3/?bust=1459522786&width=60&-pnt.jpg","@id":"3"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/34596985/3/?bust=1459522786&width=95&-fpm.jpg","@id":"3"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/34596985/3/?bust=1459522786&width=500&-x.jpg","@id":"3"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/34596985/3/?bust=1459522786&width=300&-pn.jpg","@id":"3"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/34596985/3/?bust=1459522786&width=50&-t.jpg","@id":"3"}]}},"id":{"$t":"34596985"},"shelterPetId":{"$t":"30189204"},"breeds":{"breed":[{"$t":"Australian Kelpie"},{"$t":"Australian Cattle Dog (Blue Heeler)"}]},"name":{"$t":"Granita (with Video)"},"sex":{"$t":"F"},"description":{"$t":"Granita has a video! Hit \"play\" below her picture to view it. Are you wanting to spice up your life! Granita is a sugary sweet gal who has some spunk. She is a wonderful, loving dog who lets you know when she wants your attention. She is 5 years young and weighs 55 to 60 pounds. She will make a great hiking companion who will jump up at a moments notice to go on an adventure with you. She likes to play with toys but only if you are part of the game. She is playful, yet rowdy with other dogs and needs to go to a home with no cats or small animals due to her high prey drive. Granita is an attentive gal who looks to your for direction and wants to please even in her goofy moments. Granita is most comfortable around women and can be protective of them at times. She will be happiest in a home with no kids because she gets nervous when the are loud and rowdy. Granita wants to be an interactive part of your life!"},"mix":{"$t":"no"},"shelterId":{"$t":"WA139"},"lastUpdate":{"$t":"2016-06-10T02:23:34Z"},"animal":{"$t":"Dog"}},"@xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","header":{"timestamp":{"$t":"2016-06-10T02:40:14Z"},"status":{"message":{},"code":{"$t":"100"}},"version":{"$t":"0.1"}},"@xsi:noNamespaceSchemaLocation":"http://api.petfinder.com/schemas/0.9/petfinder.xsd"}};
      testmultiDogData = {"@encoding":"iso-8859-1","@version":"1.0","petfinder":{"@xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","lastOffset":{"$t":"3"},"pets":{"pet":[{"options":{"option":[{"$t":"specialNeeds"},{"$t":"hasShots"},{"$t":"altered"},{"$t":"housetrained"}]},"status":{"$t":"A"},"contact":{"phone":{"$t":"6124021603"},"state":{"$t":"MN"},"address2":{},"email":{"$t":"director@twincitiespitbullrescue.org"},"city":{"$t":"White Bear Lake"},"zip":{"$t":"55115"},"fax":{},"address1":{"$t":"St. Paul,  MN"}},"age":{"$t":"Senior"},"size":{"$t":"L"},"media":{"photos":{"photo":[{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/30381088/1/?bust=1449516349&width=60&-pnt.jpg","@id":"1"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/30381088/1/?bust=1449516349&width=95&-fpm.jpg","@id":"1"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/30381088/1/?bust=1449516349&width=500&-x.jpg","@id":"1"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/30381088/1/?bust=1449516349&width=300&-pn.jpg","@id":"1"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/30381088/1/?bust=1449516349&width=50&-t.jpg","@id":"1"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/30381088/2/?bust=1449516349&width=60&-pnt.jpg","@id":"2"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/30381088/2/?bust=1449516349&width=95&-fpm.jpg","@id":"2"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/30381088/2/?bust=1449516349&width=500&-x.jpg","@id":"2"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/30381088/2/?bust=1449516349&width=300&-pn.jpg","@id":"2"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/30381088/2/?bust=1449516349&width=50&-t.jpg","@id":"2"}]}},"id":{"$t":"30381088"},"shelterPetId":{},"breeds":{"breed":{"$t":"German Shepherd Dog"}},"name":{"$t":"Dakota"},"sex":{"$t":"M"},"description":{"$t":"Hi I'm Dakota!  I am looking for a hospice home that can love me, spoil me and spend time with me! I am heartworm positive but the Dr.'s say we shouldn't treat it at this point because I also have problems with my kidneys. I do good with other dogs with proper intros but I do also like my space and am not much a fan of rambunctious play. I haven't been around cats, so I'm not too sure what I think of them yet. I am very well behaved and absolutely love people and making people happy! \n\nIf you are interested in giving me my final home to be spoiled at, please e-mail adoption@twincitiespitbullrescue.org"},"mix":{"$t":"yes"},"shelterId":{"$t":"MN370"},"lastUpdate":{"$t":"2015-12-15T20:52:43Z"},"animal":{"$t":"Dog"}},{"options":{"option":[{"$t":"hasShots"},{"$t":"altered"},{"$t":"housetrained"}]},"status":{"$t":"A"},"contact":{"phone":{"$t":"6124021603"},"state":{"$t":"MN"},"address2":{},"email":{"$t":"director@twincitiespitbullrescue.org"},"city":{"$t":"White Bear Lake"},"zip":{"$t":"55115"},"fax":{},"address1":{"$t":"St. Paul,  MN"}},"age":{"$t":"Adult"},"size":{"$t":"L"},"media":{"photos":{"photo":[{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/34030502/1/?bust=1455587221&width=60&-pnt.jpg","@id":"1"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/34030502/1/?bust=1455587221&width=95&-fpm.jpg","@id":"1"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/34030502/1/?bust=1455587221&width=500&-x.jpg","@id":"1"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/34030502/1/?bust=1455587221&width=300&-pn.jpg","@id":"1"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/34030502/1/?bust=1455587221&width=50&-t.jpg","@id":"1"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/34030502/2/?bust=1464315849&width=60&-pnt.jpg","@id":"2"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/34030502/2/?bust=1464315849&width=95&-fpm.jpg","@id":"2"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/34030502/2/?bust=1464315849&width=500&-x.jpg","@id":"2"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/34030502/2/?bust=1464315849&width=300&-pn.jpg","@id":"2"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/34030502/2/?bust=1464315849&width=50&-t.jpg","@id":"2"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/34030502/3/?bust=1455587612&width=60&-pnt.jpg","@id":"3"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/34030502/3/?bust=1455587612&width=95&-fpm.jpg","@id":"3"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/34030502/3/?bust=1455587612&width=500&-x.jpg","@id":"3"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/34030502/3/?bust=1455587612&width=300&-pn.jpg","@id":"3"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/34030502/3/?bust=1455587612&width=50&-t.jpg","@id":"3"}]}},"id":{"$t":"34030502"},"shelterPetId":{},"breeds":{"breed":[{"$t":"American Bulldog"},{"$t":"Pit Bull Terrier"}]},"name":{"$t":"Hercules"},"sex":{"$t":"M"},"description":{"$t":"Hi, My name is HERCULES! I am big and strong just like my name:) I am about 60 lbs of LOVE! I love people and like doggy friends.  I love to sit on laps too!! I am currently in a foster home with a pittie foster sister and 2 kids.  I really love to lick dem kids! They love me and spoil me like crazy.  Sometimes my foster sister is grouchy but I deal with it.  I am good at sharing. I sometimes get into the trash so putting the trash in a locked room or up is a good idea for me! See, at one time I was starved and I don't yet understand that a meal will always come to me now...But, I am slowly getting it! Please consider making me a part of your family- I am a good boy!\n\nI am hoping to find a FURever home. If you'd like to help a dog like me, please email for more info: director@twincitiespitbullrescue.org"},"mix":{"$t":"yes"},"shelterId":{"$t":"MN370"},"lastUpdate":{"$t":"2016-05-27T02:24:09Z"},"animal":{"$t":"Dog"}},{"options":{"option":[{"$t":"hasShots"},{"$t":"altered"},{"$t":"housetrained"}]},"status":{"$t":"A"},"contact":{"phone":{"$t":"6124021603"},"state":{"$t":"MN"},"address2":{},"email":{"$t":"director@twincitiespitbullrescue.org"},"city":{"$t":"White Bear Lake"},"zip":{"$t":"55115"},"fax":{},"address1":{"$t":"St. Paul,  MN"}},"age":{"$t":"Adult"},"size":{"$t":"L"},"media":{"photos":{"photo":[{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/33968893/1/?bust=1449547990&width=60&-pnt.jpg","@id":"1"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/33968893/1/?bust=1449547990&width=95&-fpm.jpg","@id":"1"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/33968893/1/?bust=1449547990&width=500&-x.jpg","@id":"1"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/33968893/1/?bust=1449547990&width=300&-pn.jpg","@id":"1"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/33968893/1/?bust=1449547990&width=50&-t.jpg","@id":"1"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/33968893/2/?bust=1449548215&width=60&-pnt.jpg","@id":"2"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/33968893/2/?bust=1449548215&width=95&-fpm.jpg","@id":"2"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/33968893/2/?bust=1449548215&width=500&-x.jpg","@id":"2"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/33968893/2/?bust=1449548215&width=300&-pn.jpg","@id":"2"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/33968893/2/?bust=1449548215&width=50&-t.jpg","@id":"2"},{"@size":"pnt","$t":"http://photos.petfinder.com/photos/pets/33968893/3/?bust=1454550595&width=60&-pnt.jpg","@id":"3"},{"@size":"fpm","$t":"http://photos.petfinder.com/photos/pets/33968893/3/?bust=1454550595&width=95&-fpm.jpg","@id":"3"},{"@size":"x","$t":"http://photos.petfinder.com/photos/pets/33968893/3/?bust=1454550595&width=500&-x.jpg","@id":"3"},{"@size":"pn","$t":"http://photos.petfinder.com/photos/pets/33968893/3/?bust=1454550595&width=300&-pn.jpg","@id":"3"},{"@size":"t","$t":"http://photos.petfinder.com/photos/pets/33968893/3/?bust=1454550595&width=50&-t.jpg","@id":"3"}]}},"id":{"$t":"33968893"},"shelterPetId":{},"breeds":{"breed":{"$t":"Boxer"}},"name":{"$t":"Clara"},"sex":{"$t":"F"},"description":{"$t":"Hi there- My name is Clara...I came from a reservation where I was supposed to be shot for over population.  The rescue thinks I am about 6 years old.  I have an old injury on my back legs that healed funny but it sure doesn't stop me.  am good with MALE dogs with slow intros.  I love my foster brother puppy... I might take a few visits to warm up to your dog but I will accept him/her and they will become my best friend! I LOVE, Love kids! Big and small.  I am VERY laid back and love snuggles! I love the outdoors which makes winter time a breeze for my foster mom! Please consider adopting me...it's time that I find a forever home. \n\nIf you have more questions about me...don't hesitate to email the nice ladies at Twin Cities Pit Bull Rescue: adoption@twincitiespitbullrescue.org"},"mix":{"$t":"no"},"shelterId":{"$t":"MN370"},"lastUpdate":{"$t":"2016-05-27T02:28:32Z"},"animal":{"$t":"Dog"}}]},"header":{"timestamp":{"$t":"2016-06-11T02:57:39Z"},"status":{"message":{},"code":{"$t":"100"}},"version":{"$t":"0.1"}},"@xsi:noNamespaceSchemaLocation":"http://api.petfinder.com/schemas/0.9/petfinder.xsd"}}

      urlRandom = "http://api.petfinder.com/pet.getRandom?&animal=dog" +
                  "&callback=JSON_CALLBACK&format=json&output=basic";

      urlDogs = "http://api.petfinder.com/pet.find?&animal=dog&callback=JSON_CALLBACK" +
                "&count=100&format=json&location=55082&offset=0";

      authRequestHandlerRandom = $httpBackend.whenJSONP(urlRandom)
                                  .respond(200, testDogData);

      authRequestHandler = $httpBackend.whenJSONP(urlDogs)
                            .respond(200, testmultiDogData);
  })
  });

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });


  describe('getRandom', function () {
    it('makes a successful API call (PF pet.getRandom) with $http & params', function () {

      sinon.spy($http, 'jsonp');

      var testConfig = {}
      testConfig.params = {
                        key: ENV.PFKEY,
                        output: "basic",
                        callback: "JSON_CALLBACK",
                        format: "json",
                        animal: "dog"
                    }

      AdoptableDogs.getRandom()
      $httpBackend.flush()

      assert($http.jsonp.calledOnce);
      assert($http.jsonp.calledWith('http://api.petfinder.com/pet.getRandom?', testConfig));

      $http.jsonp.restore();
    });

    it('fails with a logged error message', function(){

        authRequestHandlerRandom.respond(100, "error");

        sinon.spy(console, 'log');
        sinon.spy($http, 'jsonp');

        var testConfig = {}
        testConfig.params = {
                          key: ENV.PFKEY,
                          output: "basic",
                          callback: "JSON_CALLBACK",
                          format: "json",
                          animal: "dog"
                      }

        AdoptableDogs.getRandom();
        $httpBackend.flush()

        assert(console.log.calledOnce);

        $http.jsonp.restore();
        console.log.restore();
    });

  });

  describe('getDogs', function() {
    it('makes a successful API call (PF pet.find) with $http & params', function(){

      sinon.spy($http, 'jsonp');

      var testConfig = {}
      testConfig.params = {
                        key: ENV.PFKEY,
                        location: 55082,
                        callback: "JSON_CALLBACK",
                        count: 100,
                        format: "json",
                        animal: "dog",
                        offset: 0
                    }

      AdoptableDogs.getDogs(55082);
      $httpBackend.flush();

      assert($http.jsonp.calledOnce);
      assert($http.jsonp.calledWith('http://api.petfinder.com/pet.find?', testConfig));

      $http.jsonp.restore();
    })
  });

  describe('getDogs', function() {
    it('uses a constructor to pass location/offset params', function(){

      var testConfig = {};
      testConfig.params = {
                        key: ENV.PFKEY,
                        location: 51006,
                        animal: 'dog',
                        count: 25,
                        offset: 5,
                        callback: 'JSON_CALLBACK',
                        format: 'json'
                    }

      var testDog = AdoptableDogs.dogsConfig(51006, 5);
      assert.equal(testDog.params.location, testConfig.params.location);
      assert.equal(testDog.params.offset, testConfig.params.offset);

      var othertestDog = AdoptableDogs.dogsConfig(55082, 25);
      assert.notEqual(othertestDog.params.location, testConfig.params.location);
      assert.notEqual(othertestDog.params.offset, testConfig.params.offset);
    });
  });

    it('fails with a logged error message', function(){
        authRequestHandler.respond(100, "error");

        sinon.spy(console, 'log');
        sinon.spy($http, 'jsonp');

        var testConfig = {}
        testConfig.params = {
                          key: ENV.PFKEY,
                          location: 55082,
                          callback: "JSON_CALLBACK",
                          count: 100,
                          format: "json",
                          animal: "dog",
                          offset: 0
                      }

        AdoptableDogs.getDogs(55082);
        $httpBackend.flush();

        assert(console.log.calledOnce);
        console.log.restore();
        $http.jsonp.restore();
    });
});

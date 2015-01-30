describe("posting jobs", function() {
    
    var postRequestJob;
    var newJob = {title: 'test title', description: 'test description'};
    beforeEach(module('app'));
    
     it("should call /api/jobs with job data", inject(function($httpBackend, jobs){
         $httpBackend.whenPOST('/api/jobs', function(data){
             postRequestJob = JSON.parse(data);
             expect(postRequestJob).to.be.not.empty;
             return true;
         }).respond(200);
         jobs.save(newJob);
         $httpBackend.flush();
     }));
    
})
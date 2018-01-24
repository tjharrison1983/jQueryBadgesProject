$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/tjharrison.json',
    dataType: 'jsonp',
    success: function (response) {
      //handle response
      console.log('response:', response);
      addInProgress(response.courses.in_progress);
      addCourses(response.courses.completed);
      console.log('response:', response.badges);
      //addGeneralBadges(response.badges)
    }
  });

  function addGenBadges(genBadges) {



  }

  function addInProgress(courses) {

    addCourses(courses);

  }

  function addCourses(courses) {

    let $badges = $('#badges');

    courses.forEach(function (course) {

      let $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course);

    });
  }




});

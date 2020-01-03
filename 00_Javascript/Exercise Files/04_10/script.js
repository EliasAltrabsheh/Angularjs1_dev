var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);





function Course(title,instructor,level,views){
  this.title = title;
  this.instructor = instructor;
  this.views = views,
  this.updateViews = function()
  {
    return ++this.views;

  }

}

var course02 = new Course("JS", "Elias", 0,0);
console.log(course02);

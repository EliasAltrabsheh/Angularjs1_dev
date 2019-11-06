var course = new Object();


var course = {
  title: "Javascript essentials",
  instructor: "Elias Altrasbsheh",
  level: "1",
  published: true,
  views:0,
updateviews:function(){
    return ++course.views;
  }
}

console.log(course);
console.log(course.updateviews());

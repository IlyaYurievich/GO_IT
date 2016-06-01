// callback function
function GoogleCallback(func, data){
	window[func](data);
};
var section;
$(function() {
$('form').on('submit', function(){
    var url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q="+ encodeURIComponent($('.search').val()) + "&callback=GoogleCallback&context=?";
    $.ajax({
    	url: url,
    	dataType: 'jsonp',
    	success: function(data, textStatus) {
    		var ul = document.createElement('ul');
    		$.each(data.results, function(i, val) {
    			var li = document.createElement('li');
    			var inner = '&lt;a href="'+val.url+'" title="'+val.url+'" target="_blank"&gt;'+val.title+"&lt;/a&gt; - "+val.content;
    			ul.appendChild(li);
    		});
    		$('div').html(ul);
    	}
    });
    return false;
});
});

//prototype

function Human(name, age, gender, height, weight){
   this.name= name;
   this.age= age;
   this.gender= gender;
   this.height= height;
   this.weight= weight; 
};
function  Worker () {
    this.work='web developer';
    this.salary=10000;
    this.make=function(){
        console.log('I like to make money');
    };
};
function Student () {
    this.school='GoIT';
    this.scholarship=100;
    this.watchtv= function(){
        console.log('I like to watch football');
    };
};

Worker.prototype = new Human('Василий', 30, 'male', 170, 72);
Student.prototype = new Human('Григорий', 23, 'male', 180, 81);

var newStudent = new Student();

console.log('newStudent.gender', newStudent.gender );
console.log('newStudent.name', newStudent.name );

console.log('newStudent.age', newStudent.age + "лет");
console.log('newStudent.height', newStudent.height + "cm");
console.log('newStudent.weight', newStudent.weight + "kg");

newStudent.watchtv();

var newWorker = new Worker();

console.log('newWorker.gender', newWorker.gender);
console.log('newWorker.name', newWorker.name);

console.log('newWorker.age', newWorker.age + "лет");
console.log('newWorker.height', newWorker.height + "cm");
console.log('newWorker.weight', newWorker.weight + "kg");

newWorker.make();
function ToDoList() {
  this.list = [];
  this.currentId = 0
}

ToDoList.prototype.addToDo = function(item) {
  item.id = this.assignId();
  this.list.push(item);
}

ToDoList.prototype.deleteToDo = function(id) {
  console.log(id);
  console.log(this.list);
for ( var i = 0; i < this.list.length; i++) {
  if (this.list[i]) {
    console.log("i exists");
    console.log(this.list[i].id);
    if (this.list[i].id == id) {
      delete this.list[i];
      console.log(this.list);
      return true;
    }
  }
  console.log("fales");
  return false;
};
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ToDoList.prototype.findItem = function(id) {
  for ( var i = 0; i < this.list.length; i++) {
    if (this.list[i]) {
      if (this.list[i].id == id) {
        return this.list[i];
      }
    }
    return false;
  }
}

function Item(entry1) {
  this.entry1 = entry1
  // this.entry2 = entry2,
  // this.entry3 = entry3
}

var toDoList = new ToDoList();

function displayToDoList(listToDisplay) {
  var startList = $("span#outputSpan");
  var blankString = "";
  listToDisplay.list.forEach(function(item) {
    blankString += "<li id=" + item.id + ">" + item.entry1 + "</li>" + "<button class=" + "delete" + " " + "id=" + item.id + " " + "type=" + "submit"+ ">" + "Check Off!" + "</button>";
    console.log(item.entry1);
    // blankString += "<li id=" + item.id + ">" + item.entry2 + "</li>" + "<button id=" + "item2" + ">" + "Check Off!" + "</button>";
    // blankString += "<li id=" + item.id + ">" + item.entry3 + "</li>" + "<button id=" + "item3" + ">" + "Check Off!" + "</button>";
  });
  startList.html(blankString);
  $(".delete").click(function() {
    toDoList.deleteToDo(this.id);
    displayToDoList(toDoList);
    // console.log("removed");
    // console.log(newToDo.id);
    console.log(this.id);
  });
};

// function attachListener() {
//   $(".delete").on("click", ".delete", function() {
//     toDoList.deleteToDo(this.id);
//     console.log(this.id);
//     console.log("hello");
//     $(".output").hide();
//     toDoList.displayToDoList();
//   })
// }

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    // attachListener();
    event.preventDefault();
    // debugger;
    var inputtedEntry1 = $("input#listItem1").val();
    console.log(inputtedEntry1);
    console.log(listItem1);
    // var inputtedEntry2 = $("input#listItem2").val();
    // var inputtedEntry3 = $("input#listItem3").val();
    // console.log(inputtedEntry2);
    var newToDo = new Item(inputtedEntry1);
    toDoList.addToDo(newToDo);
    console.log(newToDo);
    displayToDoList(toDoList);
    // $("button#item2").click(function() {
    //   toDoList.deleteToDo(inputtedEntry2);
    // });
    // $("button#item3").click(function() {
    //   toDoList.deleteToDo(inputtedEntry3);
    // });

});



  // displayToDoList(toDoList);
});

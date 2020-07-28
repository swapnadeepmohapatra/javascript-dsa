"use strict";

function Node(value) {
  this.value = value;
  this.next = null;
}

function Linkedlist() {
  this.head = null;
}

// Adds to the end
Linkedlist.prototype.append = function (newValue) {
  const newNode = new Node(newValue);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let last = this.head;
  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

// Prints the whole Linked List
Linkedlist.prototype.print = function () {
  let last = this.head;
  if (last) {
    let linkedListString = "";
    while (last) {
      linkedListString += last.value + " -> ";
      last = last.next;
    }
    linkedListString += null;
    console.log(linkedListString);
  } else {
    console.log("Linked List is empty");
  }
};

// Adds to the first
Linkedlist.prototype.push = function (newValue) {
  const newNode = new Node(newValue);

  newNode.next = this.head;
  this.head = newNode;
};

// Adds after the previous node
Linkedlist.prototype.insertAt = function (newValue, prevNodeVal) {
  const newNode = new Node(newValue);

  let temp = this.head;

  while (temp) {
    if (temp.value === prevNodeVal) {
      newNode.next = temp.next;
      temp.next = newNode;
      return;
    }
    temp = temp.next;
  }
  console.error("No node found");
};

// Deletes a specific value
Linkedlist.prototype.delete = function (deleteValue) {
  let temp = this.head;
  let prevNode;

  while (temp) {
    if (temp.value === deleteValue) {
      prevNode.next = temp.next;
      temp = null;
      return;
    }

    prevNode = temp;
    temp = temp.next;
  }
};

// Deletes the whole Linked List
Linkedlist.prototype.deleteList = function () {
  let temp = this.head;

  while (temp) {
    let nextNode = temp.next;
    this.head = nextNode;
    delete temp.value;
    temp = nextNode;
  }
};

// Prints the length of the Linked List
Linkedlist.prototype.length = function () {
  let count = 0;
  let temp = this.head;

  while (temp) {
    count += 1;
    temp = temp.next;
  }

  console.log("Length is: ", count);
};

// Reverses Linked List
Linkedlist.prototype.reverse = function () {
  let currentNode;
  let previousNode;
  let nextNode;

  currentNode = this.head;
  previousNode = null;
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;

    previousNode = currentNode;
    currentNode = nextNode;
  }
  this.head = previousNode;
};

const ll = new Linkedlist();
ll.push("12");
ll.append("13");
ll.push("11");
ll.append("14");
ll.insertAt("11.5", "11");
ll.delete("11.5");
ll.print();
ll.length();
ll.reverse();
ll.print();
ll.deleteList();
ll.print();

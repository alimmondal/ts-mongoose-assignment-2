// Example data
{
"title": "Book 1",
"author": ["Author 1", "Author 2"],
"genre": "Mystery",
"publicationYear": 2020,
"publisher": { "name": "Publisher A", "location": "City A" },
"reviews": [
{ "user": "User 1", "comment": "Great book!" },
{ "user": "User 2", "comment": "Interesting plot" }
],
"rating": 4.5,
"price": "90"
}

Tasks:
Task 1: Create a MongoDB model with an interface and schema for a "Book" collection that stores fields like title, author, genre, publication year, rating, price, and nested fields like "publisher" and "reviews". All the fields would be required.

Task 2: Implement a MongoDB query to find all books in the "Books" collection with a specific genre, such as "Fantasy"

Task 3: Implement a MongoDB query to find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.

Task 4: Create a static method method within the "Book" model or write a function using query to retrieve books from the "Books" collection that have a rating equal to or higher than 4. These books will be categorized as featured books. Additionally, introduce a new field named "featured" to the featured book objects. The value of this field should be "Popular" if the book's rating is greater than or equal to 4. For books with a rating exceeding 4.5, the value should be set to "BestSeller".

Task 5: In the existing book data, some books have their prices stored as strings instead of integers. To ensure consistent data representation, you are required to update the prices of all books from string format to integer format using a MongoDB update query. However, to limit the scope of the update and ensure data accuracy, the prices should be updated only for books published after 2020.

Questions:
Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

Question:1.
In MongoDB, a model with an interface and schema refers to the concept of using a library or framework, such as Mongoose, to define and interact with data in a structured manner. This approach helps in defining the structure of a collection by providing a way to enforce data consistency, validation rules, and relationships within the MongoDB documents.
In short, creating a model with an interface and schema in MongoDB helps in defining the structure of a collection by enforcing data consistency, providing data validation, managing relationships, promoting code reusability, and offering additional hooks and middleware functionality.

Questions:2.
Field filtering in MongoDB refers to the capability of specifying which fields to include or exclude in the returned documents when querying a collection. It allows you to retrieve only the necessary fields from the documents, reducing the network bandwidth and improving query performance.

In MongoDB, you can control field filtering using the projection parameter in the find() method or the aggregation framework. The projection parameter accepts an object that specifies the inclusion or exclusion of fields.

To include specific fields, you use the "field: 1" notation, where the value 1 indicates inclusion. For example, consider the following query:
db.collection.find({}, { field1: 0, field2: 0 })
This query will return documents with all fields except "field1" and "field2". The excluded fields will be omitted from the result.

Question:3

In MongoDB models, instance methods are custom methods defined on individual documents (instances) of a model. These methods are specific to a particular document and can be accessed and executed on that document.

Instance methods allow you to define custom logic or operations that are relevant to a specific document. They can be useful for encapsulating business logic, performing calculations, manipulating data, or implementing custom behaviors specific to the document's context.

Here's an example to illustrate the concept of instance methods in MongoDB models:
const mongoose = require('mongoose');

// Define a schema
const personSchema = new mongoose.Schema({
firstName: String,
lastName: String,
age: Number
});

// Define an instance method
personSchema.methods.getFullName = function() {
return this.firstName + ' ' + this.lastName;
};

// Create a model using the schema
const Person = mongoose.model('Person', personSchema);

// Retrieve a document from the collection
Person.findOne({ firstName: 'John' }, (err, person) => {
if (err) {
console.error(err);
} else {
// Call the instance method on the retrieved document
const fullName = person.getFullName();
console.log(fullName); // Output: John Doe
}
});
In the example above, we define a schema for a person with fields for first name, last name, and age. We then define an instance method called getFullName() on the schema. This method concatenates the firstName and lastName fields of the document and returns the full name.

Later, we create a model called Person using the schema. When we retrieve a document using findOne(), we can access that document's getFullName() method. By calling person.getFullName(), we execute the custom logic defined in the instance method and retrieve the full name of the person.

The purpose of this instance method is to encapsulate the logic for generating a full name within the context of a person document. It provides a convenient way to retrieve the full name without having to explicitly concatenate the first name and last name fields every time it is needed.

Instance methods in MongoDB models allow you to extend the functionality of individual documents, making it easier to work with specific data instances and promoting code organization and reusability.

Questions: 4
In MongoDB queries, comparison operators such as "$ne" (not equal), "$gt" (greater than), "$lt" (less than), "$gte" (greater than or equal to), and "$lte" (less than or equal to) are used to compare values and filter documents based on specific conditions. These operators are typically used in conjunction with the "find" method to retrieve documents that satisfy the given criteria.

Here are examples illustrating the usage of these comparison operators:

1. "$ne" (not equal):
The "$ne" operator is used to find documents where a field's value is not equal to a specified value.
   db.collection.find({ age: { $ne: 30 } })
   This query will return all documents in the "collection" where the "age" field is not equal to 30.

2. "$gt" (greater than):
The "$gt" operator is used to find documents where a field's value is greater than a specified value.
   db.collection.find({ age: { $gt: 25 } })
   This query will return all documents in the "collection" where the "age" field is greater than 25.

3. "$lt" (less than):
The "$lt" operator is used to find documents where a field's value is less than a specified value.
   db.collection.find({ age: { $lt: 40 } })
   This query will return all documents in the "collection" where the "age" field is less than 40.

4. "$gte" (greater than or equal to):
The "$gte" operator is used to find documents where a field's value is greater than or equal to a specified value.
   db.collection.find({ age: { $gte: 30 } })
   This query will return all documents in the "collection" where the "age" field is greater than or equal to 30.

5. "$lte" (less than or equal to):
The "$lte" operator is used to find documents where a field's value is less than or equal to a specified value.
   db.collection.find({ age: { $lte: 40 } })
   This query will return all documents in the "collection" where the "age" field is less than or equal to 40.

These comparison operators can be combined with other operators and used in more complex queries to filter documents based on various conditions. They are essential for querying and retrieving specific subsets of data from a MongoDB collection.

Questions: 5
In MongoDB, the "$in" and "$nin" operators are used to match or exclude values against an array of values, respectively. These operators are useful when you want to perform queries based on multiple possible values or exclude specific values from a given array.

1. "$in" operator:
The "$in" operator matches documents where a field's value matches any value in the specified array.
   db.collection.find({ status: { $in: ["active", "pending"] } })
   This query will return all documents in the "collection" where the "status" field has a value that is either "active" or "pending".

2. "$nin" operator:
The "$nin" operator excludes documents where a field's value matches any value in the specified array.
   db.collection.find({ status: { $nin: ["inactive", "expired"] } })
   This query will return all documents in the "collection" where the "status" field does not have a value of "inactive" or "expired".

Both "$in" and "$nin" operators can be used with other query operators to construct more complex queries. For example, you can combine them with "$and" or "$or" operators to apply multiple conditions.
db.collection.find({
$and: [
{ status: { $in: ["active", "pending"] } },
{ category: "electronics" }
]
})
This query will return documents in the "collection" where the "status" field is either "active" or "pending" and the "category" field is "electronics".

Using "$in" and "$nin" operators provides flexibility when querying documents in MongoDB, allowing you to match values against an array of possible values or exclude values from a given array. It's particularly useful when you need to perform queries with multiple value options or when you want to exclude specific values from the result set.

Microsoft Windows [Version 10.0.19044.2006]
(c) Microsoft Corporation. All rights reserved.

C:\Users\91964>mongosh
Current Mongosh Log ID: 6347cddcf1a716b3b6a80ac1
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0
Using MongoDB:          6.0.2
Using Mongosh:          1.6.0

humanresource> db.employ.insertMany([{
...
...   "firstName": "John",
...   "lastName": "Doe",
...   "salary": "25000",
...   "department": "HR",
...   "lastCompany": "X",
...   "lastSalary": "10000",
...   "overallExp": "2",
...   "contactInfo": "1234567890",
...   "yearGrad": "2016",
...   "gradStream": "CSE"
... },{
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "roh",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... },{
...
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... },{
...
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("6347d2bc26625557bd01c26c"),
    '1': ObjectId("6347d2bc26625557bd01c26d"),
    '2': ObjectId("6347d2bc26625557bd01c26e"),
    '3': ObjectId("6347d2bc26625557bd01c26f"),
    '4': ObjectId("6347d2bc26625557bd01c270"),
    '5': ObjectId("6347d2bc26625557bd01c271"),
    '6': ObjectId("6347d2bc26625557bd01c272"),
    '7': ObjectId("6347d2bc26625557bd01c273"),
    '8': ObjectId("6347d2bc26625557bd01c274"),
    '9': ObjectId("6347d2bc26625557bd01c275"),
    '10': ObjectId("6347d2bc26625557bd01c276"),
    '11': ObjectId("6347d2bc26625557bd01c277"),
    '12': ObjectId("6347d2bc26625557bd01c278")
  }
}
humanresource> db.find()
TypeError: db.find is not a function
humanresource> db.employ.find()
[
  {
    _id: ObjectId("6347d2bc26625557bd01c26c"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c26d"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c26e"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c26f"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c270"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c271"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c272"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c273"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c274"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c275"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c276"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c277"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347d2bc26625557bd01c278"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]
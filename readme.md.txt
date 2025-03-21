                  MONGODB Commands
gQA4TbZVRjH4He9V

 Note: How to start mongodb server on cmd: (net start mongodb)

 Note. To clear all data via shell => ctrl+l
       Mongodb build on top of JS Case sensitive
                      
 Note: Mongodb stores data in form of documents
       Multiple docs forms collections
       documents stores data in object notation
              
             

	     1. To show all commands => help
             
             2. To show all databases => show dbs

             3. To create a database => use  _name

	     4. To insert collection => db.student.insertOne({})
 		                        db.student.insertMany([{},{}..])
	
5. To find collections => db.student.find() / reference of doc
  db.student.findOne({city:"delhi"}) / actual document

			 Operators (common use with find() )
		
		1.  Greater than or equal: $gt/$gtde => {marks:{$gt:75}} 
			
		2.  present or not: $in => {city:{$in:["delhi",...]}}
 			
	        3.  logical OR  : $or => {$or:[{condition1},{condition2}]}

				UPDATAION
		
     1. db.collection.updateOne/updateMany(<filter>,<update>,<options>)
		  
		   a.) $set => {city:"delhi"},{$set:{city:"new delhi"}}

		   b.) $rename => {},{$rename:{"oldcolname":"newcolname"}}

				NESTING
		
	     a.	db.collection.insertOne
		({name:"name",performance:{marks:70,skill:"writing"}})

                db.collection.find({"performance.marks":70})

				DELETE
       	 
	b. db.collection.deleteOne/deleteMany(<filter>,<update>,<option>)
           
		Truncate => db.collection.deleteMany({})
                Drop db =>  db.dropDatabase()


Note: Model is a class which is used to create document using mongoose
	Model should be singular and first letter is capital

	Model.find() returns a query not a promise

	
	1. fineOneAndUpdate() => find and update the value
           findByIdAndUpdate()

        2. findOneAndDelete()    => To find and delete value
           findByIdAnDelete()
----------------------------------------------------------------------

               1. public files are static files                  syntax:               app.use(express.static(path.join(__dirname,"/public")))

	      2. includes files
syntax:
	<%- include(../includes/filename) %>

              3. layouts : <% layout('/layouts/boilerplate') -%>


			
                 <% if(currUser && currUser._id.equals(lists.owener._id)){ %>

 <%} %>


 mongodb+srv://Shan1024:Shan1024@cluster0.3kuls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
             

NHi8jEWB6HQNcyyY
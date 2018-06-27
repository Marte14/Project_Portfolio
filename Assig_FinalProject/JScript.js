

		document.getElementById("date").innerHTML = TodaysDate();

		function TodaysDate() {
		var date = new Date(),
		    minutes = date.getMinutes().toString() == 1 ? '0'+date.getMinutes() : date.getMinutes(),
		    hours = date.getHours().toString().length == 1 ? '0'+date.getHours() : date.getHours(),
		    ampm = date.getHours() >= 12 ? 'pm' : 'am',
		    hours = hours % 12;
		    hours = hours ? hours : 12;
		    minutes = minutes < 10 ? '0'+ minutes : minutes;
		    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		
			return days[date.getDay()]+' '+months[date.getMonth()]+' '+date.getDate()+' '+date.getFullYear()+'<br> ' + hours+':'+minutes+ampm;
		}


		var booklist = [
		{title:'The Great Gatsby', author: 'F. Scott Fitzgerald', bookId: 2, totalBooks: 9},
		{title:'The Grapes of Wrath', author: 'John Steinbeck', bookId: 3, totalBooks: 5},
		{title:'Ulysses', author: 'James Joyce', bookId: 4, totalBooks: 13},
		{title:'Nineteen Eighty-Four', author: 'John Steinbeck', bookId: 5, totalBooks: 11},
 		{title:'Lolita', author: 'Vladimir Nabokov', bookId: 6, totalBooks: 12},
 		{title:'Catch-22', author: 'by Joseph Helle', bookId: 7, totalBooks: 10},
		

		];
		function book(){
			return{
				title: document.getElementById('title').value.trim(),
				author: document.getElementById('author').value.trim(),
				bookId: document.getElementById('bookId').value,
				totalBooks: document.getElementById('total').value,//function in here(?)
					//dateTaken: new Date()//.toString() can i insert a calendar here
					//dueDate: ,function to add 30 days to date taken out
				borrower: document.getElementById('borrower').value,
				remBooks: function (){
					return this.totalBooks--;

				}

			}
		} 


		function saveData(){
			booklist.push(book());
			//alert displays the same book
			alert(booklist[booklist.length - 1].title + " has been added!");
			displayBooklist();

		}
		function displayBooklist(){
			document.getElementById('bookList').innerHTML = ''; 

			//element to hold text. 
			for(var i=0; i<booklist.length; i++){// this i is that element 
				document.getElementById('bookList').innerHTML += '<li>Book Title: ' +booklist[i].title+'<br>Author: ' + booklist[i].author +'<br> Index Number: ' + booklist[i].bookId +'<br>' + 'Total of Books: ' + booklist[i].totalBooks +'</li><br>';
			}
		}

		function searchData() {
			 document.getElementById('bkListSearch').innerHTML = ''; 

 			for (var i=0; i< booklist.length ; i++) {
				if (booklist[i].title == document.getElementById('title').value.trim()) {
    			
    				document.getElementById('bkListSearch').innerHTML +='<li> Book Title: ' + booklist[i].title +'<br>Author: ' + booklist[i].author +'<br> Index Number: ' + booklist[i].bookId +'<br>' + 'Total of Books: ' + booklist[i].totalBooks +'</li><br>';
    					//return book.title;

  				}
  		
  				
 	
 			}
 		//console.log(book(title));

		
		}

			function checkOut(bookId,int){
				var num;
				for (var i=0; i< booklist.length ; i++) {
					if (booklist[i].title == document.getElementById('titleOut').value.trim()) {
						num = i;

					}
				}
				if (num != undefined){
					 console.log(num)
					booklist[num].totalBooks = booklist[num].totalBooks - document.getElementById('quantity').value;
					document.getElementById('bkListOut').innerHTML = '<br>' + booklist[num].title + 'has been Checked Out by: ' + booklist[num].borrower + '!. Total Of This Title Available Now: ' + booklist[num].totalBooks ;	

				}else{
					alert(document.getElementById('titleOut').value + " Is Not Available!");
				}
				
				
				

			}

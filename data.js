let books = [
    

"1": {
    title: "The Cold War",
    author: "Odd Arne Westad",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSJBDTvhlwHRJFqKQEbEyut2eUjlCZg7sMT5ZfV5bOqa-ZpvGx",
   
  }, 

"2": {
    title: "The arsonist ",
    author: "Chloe Hooper",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtfTRmkxxCsNGC1smmziTGAiEcv-M7MqDuDYWfjgMPYYZaQYxZ",
   
  }, 
    
"3": {
    title: "where the crawdads sing",
    author: "Delia Owens",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYYPUPt5kFUNMTtdX6NuV-w9snx4j59JiSr_w9REB7soP2AQg",
   
  }, 
    
"4": {
    title: "planting the seed of hope",
    author: "Regan Barker",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-novel-kindle-book-cover-design-template-255f294cd4675f104c5272471013477a_screen.jpg?ts=1561443954",
   
  }, 
    
"5": {
    title: "savage earth book",
    author: "P.T Hylton & Jonathon Benecky",
    image: "https://m.media-amazon.com/images/I/51kA5AVnIZL.jpg",
   
  }, 
    
"6": {
    title: "EVERY BREATH YOU TAKEWATCHING YOU",
    author: "lyand renham",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522846060l/39716623._SY475_.jpg",
   
  }, 
    
"7": {
    title: "WATCHING YOU A NOVEL",
    author: "LISA JEWEL",
    image: "https://m.media-amazon.com/images/I/51nH7HBwQBL.jpg",
   
  }, 
    
"8": {
    title: "THE DETECTIVE",
    author: "D.I HILLS",
    image: "https://images-na.ssl-images-amazon.com/images/I/41Jx59zgoTL._SX322_BO1,204,203,200_.jpg",
   
  }, 
    
    
"9": {
    title: "ON FOREIGN MOONS",
    author: "RYAN L.SANDERS",
    image: "https://d2ocklqn0koz6b.cloudfront.net/eyJidWNrZXQiOiJwZTU2ZCIsImtleSI6Im9fMWNyMGkwamFvM2JuMXZ1cDVyMnYwdnZpdG0uanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NzAsImZpdCI6ImNvbnRhaW4ifX19",
   
  }, 
    
"10": {
    title: "SIN EATER",
    author: "MEGAN CAMPISI",
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575812769l/52185082.jpg",
   
  }, 
    
];
    
    
function addNewBook() {

  const addBookButton = document.getElementById('addbook_btn');
  const submitButton = document.getElementById('submit_btn')
  addBookButton.addEventListener('click', () => {
    const form = document.getElementById('form');
    form.style.display = "block"
  });

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = "none";
    const bookTitleVal = document.getElementById('book_title').value;
    const autherVal = document.getElementById('auther').value;
    const imageLinkVal = document.getElementById('image_link').value;

    books.push({
      title: bookTitleVal,
      author: autherVal,
      mage: imageLinkVal
    });
  });
}
addNewBook();




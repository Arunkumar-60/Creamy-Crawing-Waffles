var large_items = [
    {
        href: "O1",
        imgSrc: "item1",
        title: "Dark Heaven Bar (Dark & white)",
        text: "Dark Heaven Popsicle Waffle is a delectable treat featuring a rich, dark chocolatey flavor infused into a crispy waffle made of chocolate and vanilla."
    },
    {
        href: "O2",
        imgSrc: "item2",
        title: "Dark Chocolate Dazzle Bar (Milk & Dark)",
        text: "Indulge in the rich and decadent blend of milk and dark chocolate with our Dark Chocolate Dazzle Bar. Each bite is a delightful burst of creamy and smooth chocolate goodness."
    },
    {
        href:"O3",
        imgSrc:"item3",
        title:"Triple Chocolate Bar",
        text:"Indulge in a heavenly trio of milk, white, and dark chocolate with our Triple Chocolate Bar. Each bite offers a decadent blend of rich flavors in a conveniently bite-sized treat."
    },
    {
        href:"O4",
        imgSrc:"item4",
        title:"Kitkat Crunchy Bar",
        text:"Irresistibly crispy waffle coated in smooth Kitkat chocolate, offering a delightful combination of crunch and sweetness in a convenient bite-sized treat. Perfect for snacking anytime, anywhere"
    },
    // Add more item details as needed
  ];
  
  // Get the container element
  var container = document.querySelector('.boxesContainer');
  
  // Loop through items array to generate HTML for each item and append it to the container
  large_items.forEach(function(item) {
    var itemHTML = '<a href="item' + item.href + '.html" style="text-decoration: none;">';
    itemHTML += '<div class="card" style="width: 18rem;">';
    itemHTML += '<img src="../../public/img/images/waffle/other/' + item.imgSrc + '.webp" class="card-img-top object-fit-contain" alt="...">';
    itemHTML += '<div class="card-body">';
    itemHTML += '<hr><h5 class="card-title">' + item.title + '</h5>';
    itemHTML += '</div></div></a>';
    
    container.innerHTML += itemHTML;
  });
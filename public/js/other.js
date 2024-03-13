var large_items = [
    {
        href: "O1",
        imgSrc: "item1",
        title: "French Fries",
    },
    {
        href: "O2",
        imgSrc: "item2",
        title: "Chicken Nuggets"},
    {
        href:"O3",
        imgSrc:"item3",
        title:"Cheese balls"
    },
    {
        href:"O4",
        imgSrc:"item4",
        title:"Chicken Fingers"
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
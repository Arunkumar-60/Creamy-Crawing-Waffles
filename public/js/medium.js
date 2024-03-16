
var medium_items = [
  {
      href: "M1",
      imgSrc: "item1",
      title: "Dark Heaven Mini (Dark & white)",
      text: "Dark Heaven Popsicle Waffle is a delectable treat featuring a rich, dark chocolatey flavor infused into a crispy waffle made of chocolate and vanilla."
  },
  {
      href: "M2",
      imgSrc: "item2",
      title: "Dark Chocolate Dazzle Mini (Milk & Dark)",
      text: "Indulge in the rich and decadent blend of milk and dark chocolate with our Dark Chocolate Dazzle Mini. Each bite is a delightful burst of creamy and smooth chocolate goodness."
  },
  {
      href:"M3",
      imgSrc:"item3",
      title:"Triple Chocolate mini",
      text:"Indulge in a heavenly trio of milk, white, and dark chocolate with our Triple Chocolate Mini. Each bite offers a decadent blend of rich flavors in a conveniently bite-sized treat."
  },
  {
      href:"M4",
      imgSrc:"item4",
      title:"Kitkat Crunchy Mini",
      text:"Irresistibly crispy waffle coated in smooth Kitkat chocolate, offering a delightful combination of crunch and sweetness in a convenient bite-sized treat. Perfect for snacking anytime, anywhere"
  },
  {
      href:"M5",
      imgSrc:"item5",
      title:"Naughty Nutella Mini",
      text:"Indulge in the irresistible combination of warm, fluffy mini waffles filled with naughty Nutella, creating a decadent treat that satisfies your sweet cravings in every bite."
  },
  {
      href:"M6",
      imgSrc:"item6",
      title:"Oreo Fantasy Mini",
      text:"Crispy waffles infused with the iconic Oreo flavor, perfect for satisfying your sweet cravings."
  },
  {
      href:"M7",
      imgSrc:"item7",
      title:"red velvet mini",
      text:"Indulge in the decadent delight of red velvet waffles, which combine the rich, cocoa-infused waffle with white chocolate and a red velvet drizzle."
  },
  {
      href:"M8",
      imgSrc:"item8",
      title:"Blueberries Velvet Mini",
      text:"Indulge in a delightful treat with our blueberry-flavored waffle, coated on a sweet waffle batter and finished with a luscious topping of white chocolate and blueberry for a decadent flavor experience."
  },
  {
      href:"M9",
      imgSrc:"item9",
      title:"Lotus Biscoff Mini",
      text:"deliciously crispy and infused with the unique caramelized flavor of Biscoff cookies. Perfectly sized for snacking, they're a delightful treat for any time of day"
  },
  {
      href:"M10",
      imgSrc:"item10",
      title:"Pista Badam Dazzle Mini",
      text:"Indulge in the delicious blend of crunchy pistachios and creamy almonds with our Pista Badam Dazzle Mini Waffle, a delightful treat packed with flavor in every bite."
  },
  {
      href:"M11",
      imgSrc:"item11",
      title:"Rose & Kaju Delight Mini",
      text:"Experience a symphony of flavors with our Roze and Kaju Delight Mini Waffle, featuring the rich taste of cashews and the subtle sweetness of rose essence for a truly indulgent treat."
  },
  {
      href:"M12",
      imgSrc:"item12",
      title:"Rose Gulkand Paan Mini",
      text:"Savor the unique blend of aromatic rose, sweet gulkand, and refreshing paan flavors in every bite of our Rose Gulkand Paan Mini Waffle, a delightful fusion of tradition and taste."
  }
  // Add more item details as needed
];

// Get the container element
var container = document.querySelector('.boxesContainer');

// Loop through items array to generate HTML for each item and append it to the container
medium_items.forEach(function(item) {
  var itemHTML = '<div class="card" style="width: 18rem;">';
  itemHTML += '<img src="../../public/img/images/waffle/medium/' + item.imgSrc + '.webp" class="card-img-top object-fit-contain" alt="...">';
  itemHTML += '<div class="card-body">';
  itemHTML += '<hr><h5 class="card-title">' + item.title + '</h5><hr>';
  itemHTML += '<p class="card-text">' + item.text + '</p>';
  itemHTML += '</div></div>';
  
  container.innerHTML += itemHTML;
});
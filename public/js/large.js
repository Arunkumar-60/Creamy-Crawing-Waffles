var large_items = [
    {
        href: "L1",
        imgSrc: "item1",
        title: "Dark Heaven Bar (Dark & white)",
        text: "Dark Heaven Popsicle Waffle is a delectable treat featuring a rich, dark chocolatey flavor infused into a crispy waffle made of chocolate and vanilla."
    },
    {
        href: "L2",
        imgSrc: "item2",
        title: "Dark Chocolate Dazzle Bar (Milk & Dark)",
        text: "Indulge in the rich and decadent blend of milk and dark chocolate with our Dark Chocolate Dazzle Bar. Each bite is a delightful burst of creamy and smooth chocolate goodness."
    },
    {
        href:"L3",
        imgSrc:"item3",
        title:"Triple Chocolate Bar",
        text:"Indulge in a heavenly trio of milk, white, and dark chocolate with our Triple Chocolate Bar. Each bite offers a decadent blend of rich flavors in a conveniently bite-sized treat."
    },
    {
        href:"L4",
        imgSrc:"item4",
        title:"Kitkat Crunchy Bar",
        text:"Irresistibly crispy waffle coated in smooth Kitkat chocolate, offering a delightful combination of crunch and sweetness in a convenient bite-sized treat. Perfect for snacking anytime, anywhere"
    },
    {
        href:"L5",
        imgSrc:"item5",
        title:"Naughty Nutella Bar",
        text:"Indulge in the irresistible combination of warm, fluffy Bar waffles filled with naughty Nutella, creating a decadent treat that satisfies your sweet cravings in every bite."
    },
    {
        href:"L6",
        imgSrc:"item6",
        title:"Oreo Fantasy Bar",
        text:"Crispy waffles infused with the iconic Oreo flavor, perfect for satisfying your sweet cravings."
    },
    {
        href:"L7",
        imgSrc:"item7",
        title:"red velvet Bar",
        text:"Indulge in the decadent delight of red velvet waffles, which combine the rich, cocoa-infused waffle with white chocolate and a red velvet drizzle."
    },
    {
        href:"L8",
        imgSrc:"item8",
        title:"Blueberries Velvet Bar",
        text:"Indulge in a delightful treat with our blueberry-flavored waffle, coated on a sweet waffle batter and finished with a luscious topping of white chocolate and blueberry for a decadent flavor experience."
    },
    {
        href:"L9",
        imgSrc:"item9",
        title:"Lotus Biscoff Bar",
        text:"deliciously crispy and infused with the unique caramelized flavor of Biscoff cookies. Perfectly sized for snacking, they're a delightful treat for any time of day"
    },
    {
        href:"L10",
        imgSrc:"item10",
        title:"Pista Badam Dazzle Bar",
        text:"Indulge in the delicious blend of crunchy pistachios and creamy almonds with our Pista Badam Dazzle Bar Waffle, a delightful treat packed with flavor in every bite."
    },
    {
        href:"L11",
        imgSrc:"item11",
        title:"Rose & Kaju Delight Bar",
        text:"Experience a symphony of flavors with our Rose and Kaju Delight Bar Waffle, featuring the rich taste of cashews and the subtle sweetness of rose essence for a truly indulgent treat."
    },
    {
        href:"L12",
        imgSrc:"item12",
        title:"Rose Gulkand Paan Bar",
        text:"Savor the unique blend of aromatic rose, sweet gulkand, and refreshing paan flavors in every bite of our Rose Gulkand Paan Bar Waffle, a delightful fusion of tradition and taste."
    }
    // Add more item details as needed
  ];
  
  // Get the container element
  var container = document.querySelector('.boxesContainer');
  
  // Loop through items array to generate HTML for each item and append it to the container
  large_items.forEach(function(item) {
    var itemHTML ='<div class="card" style="width: 18rem;">';
    itemHTML += '<img src="../../public/img/images/waffle/large/' + item.imgSrc + '.webp" class="card-img-top object-fit-contain" alt="...">';
    itemHTML += '<div class="card-body">';
    itemHTML += '<hr><h5 class="card-title">' + item.title + '</h5><hr>';
    itemHTML += '<p class="card-text">' + item.text + '</p>';
    itemHTML += '</div></div>';
    
    container.innerHTML += itemHTML;
  });
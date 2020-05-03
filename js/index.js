categories = [
  {
    imgUrl: "img/img(1).jpg",
    name: "Dresses",
  },
  {
    imgUrl: "img/img(2).jpg",
    name: "Shirts",
  },
  {
    imgUrl: "img/img(3).jpg",
    name: "Jeans",
  },
  {
    imgUrl: "img/img(4).jpg",
    name: "Shoes",
  },
  {
    imgUrl: "img/img(5).jpg",
    name: "Accessories",
  },
  {
    imgUrl: "img/img(6).jpg",
    name: "Jewelry",
  },
];

bestSellers = [
  {
    img1Url: "img/12a.jpg",
    img2Url: "img/12.jpg",
    catname: "Shirts",
    bname: "Blue denim shirt",
    price: "433",
  },
  {
    img1Url: "img/13a.jpg",
    img2Url: "img/13.jpg",
    catname: "Hoodie",
    bname: "Red hoodie",
    price: "422",
  },
  {
    img1Url: "img/14a.jpg",
    img2Url: "img/14.jpg",
    catname: "Sweaters",
    bname: "Grey sweater",
    price: "444",
  },
  {
    img1Url: "img/15a.jpg",
    img2Url: "img/15.jpg",
    catname: "Black denim jacket",
    bname: "Jackets",
    price: "778",
  },
];

function bestSellersHtml(img1Url, img2Url, catname, bname, price) {
  return `
    <div class="col-md-4 mb-5">

     
      <div class="card">

        <div class="view zoom overlay">
          <img class="img-fluid w-100"
            src="${img1Url}" alt="Sample">
          <a href="#!">
            <div class="mask">
              <img class="img-fluid w-100"
                src="${img2Url}">
              <div class="mask rgba-black-slight"></div>
            </div>
          </a>
        </div>

        <div class="card-body text-center pt-4">

          <h5>${bname}</h5>
          <p class="mb-2 text-muted text-uppercase small">${catname}</p>
          <ul class="rating">
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
          </ul>
          <hr>
          <p><span class="mr-1"><strong>&#8377 ${price}</strong></span></p>
          <button type="button" class="btn btn-primary btn-sm mr-1 mb-2"><i
              class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
          <button type="button" class="btn btn-light btn-sm mr-1 mb-2"><i
              class="fas fa-info-circle pr-2"></i>Details</button>
          <button type="button" class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main"
            data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i
              class="far fa-heart"></i></button>

        </div>

      </div>
     

    </div>`;
}

function categoryHtml(imgUrl, name) {
  return `<div class="col-md-6 col-lg-4 mb-4">
<div class="">
<div class="view zoom brighten z-depth-2 rounded">
    <img class="img-fluid" src="${imgUrl}"
      alt="Sample">
    <a href="#!" class="text-white">
      <div class="mask card-mask-color">
        <div class="d-flex align-items-end h-100 p-3">
          <h5 class="mb-0">${name}</h5>
        </div>
      </div>
    </a>
  </div>
</div>
</div>`;
}
$(document).ready(function () {
  for (let i = 0; i < categories.length; i++) {
    var imgUrl = categories[i].imgUrl;

    $("#categories").append(categoryHtml(imgUrl, name));
  }
  for (let i = 0; i < bestSellers.length; i++) {
    var img1Url = bestSellers[i].img1Url;
    var img2Url = bestSellers[i].img2Url;
    var catname = bestSellers[i].catname;
    var bname = bestSellers[i].bname;
    var price = bestSellers[i].price;
    $("#bestSellers").append(
      bestSellersHtml(img1Url, img2Url, catname, bname, price)
    );
  }

  $("#modelshow").modal("show");
});

function addToCart(productName, price) {
    alert(`تمت إضافة "${productName}" إلى السلة بسعر ${price} ريال.`);
  }
// مصفوفة لتخزين المنتجات المضافة إلى السلة
let cart = [];

// دالة لإضافة منتج إلى السلة
function addToCart(productName, price) {
  // إضافة المنتج إلى السلة
  cart.push({ name: productName, price: price });

  // تحديث عدد العناصر في السلة
  document.getElementById('cart-count').innerText = cart.length;

  // تحديث عرض السلة
  updateCart();
}

// دالة لتحديث عرض السلة
function updateCart() {
  // الحصول على العنصر الذي يحتوي على المنتجات في السلة
  let cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';  // مسح العناصر القديمة في السلة
  
  // إذا كانت السلة فارغة
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">سلتك فارغة</p>';
  } else {
    // إضافة العناصر المضافة إلى السلة
    let totalPrice = 0;
    cart.forEach(item => {
      let itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `${item.name} - ${item.price} ريال`;
      cartItems.appendChild(itemDiv);
      totalPrice += item.price;
    });

    // تحديث الإجمالي
    document.getElementById('total-price').innerText = totalPrice;
  }
}

// دالة لعرض أو إخفاء السلة
function toggleCart() {
  let cartBox = document.getElementById('cart');
  cartBox.style.display = (cartBox.style.display === 'none' || cartBox.style.display === '') ? 'block' : 'none';
}

// دالة لإتمام الطلب
function checkout() {
  // عرض رسالة تأكيد الشراء
  alert('تم إتمام الطلب! شكراً لتسوقك!');

  // تحديث حالة السلة
  let cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '<p class="empty-cart">تم شراء المنتجات بنجاح!</p>';

  // إفراغ السلة
  cart = [];
  
  // تحديث السلة وعرض عدد العناصر
  updateCart();
  document.getElementById('cart-count').innerText = 0;
}


 
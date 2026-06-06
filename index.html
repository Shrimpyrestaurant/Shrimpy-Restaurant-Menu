<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#FF6000">
    <title>Shrimpy App</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* ================= المتغيرات الأساسية ================= */
        :root {
            --primary: #FF6000;
            --primary-light: rgba(255, 96, 0, 0.1);
            --bg-body: #F5F6F8;
            --bg-card: #FFFFFF;
            --text-dark: #1A1A1A;
            --text-gray: #757575;
            --border: #EEEEEE;
            --success: #00B259;
            --danger: #FF3B30;
            --radius: 16px;
            --shadow: 0 4px 12px rgba(0,0,0,0.05);
            --transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); 
        }

        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; font-family: 'Tajawal', sans-serif; }
        
        body {
            background-color: var(--bg-body);
            color: var(--text-dark);
            padding-bottom: 90px;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        /* ================= شاشة البداية ================= */
        .splash-screen {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: var(--primary); z-index: 9999;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            color: white; 
            transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), visibility 0.6s;
        }
        .splash-logo { font-family: 'Bebas Neue', sans-serif; font-size: 5rem; letter-spacing: 3px; animation: pulseLogo 1.5s infinite alternate ease-in-out; }
        @keyframes pulseLogo { 0% { transform: scale(0.95); opacity: 0.8; } 100% { transform: scale(1.05); opacity: 1; } }
        .splash-screen.hidden { opacity: 0; visibility: hidden; transform: translateY(-20px) scale(1.05); }

        /* ================= الهيدر ================= */
        .cover-photo {
            width: 100%; height: 150px;
            background-image: url('https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=80');
            background-size: cover; background-position: center;
        }

        .restaurant-header {
            background: var(--bg-card); margin: -30px 16px 15px; padding: 20px 15px;
            border-radius: var(--radius); box-shadow: var(--shadow); position: relative; text-align: center;
            animation: slideDown 0.6s var(--transition) forwards;
        }

        @keyframes slideDown { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        .menu-subtitle { font-family: 'Bebas Neue', sans-serif; color: var(--primary); font-size: 1.5rem; letter-spacing: 4px; margin-bottom: -5px; display: block; }
        
        .rest-name { font-family: 'Bebas Neue', sans-serif; font-size: 3.5rem; color: var(--text-dark); line-height: 1; }
        .rest-desc { color: var(--text-gray); font-weight: 600; font-size: 0.95rem; margin-bottom: 15px; text-transform: uppercase;}

        .stats-bar { display: flex; justify-content: space-between; border-top: 1px solid var(--border); padding-top: 15px; }
        .stat-item { display: flex; flex-direction: column; align-items: center; font-size: 0.8rem; font-weight: 700; color: var(--text-dark); }
        .stat-item i { color: var(--primary); font-size: 1.1rem; margin-bottom: 4px; }

        /* ================= البحث والأقسام ================= */
        .search-bar { margin: 0 16px 15px; position: relative; animation: fadeIn 0.8s var(--transition) forwards; }
        .search-bar input { width: 100%; padding: 12px 40px 12px 15px; border-radius: 12px; border: 1px solid var(--border); font-size: 0.95rem; outline: none; transition: var(--transition); }
        .search-bar input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-light); }
        .search-bar i { position: absolute; right: 15px; top: 50%; transform: translateY(-50%); color: var(--text-gray); }

        .sticky-nav {
            position: sticky; top: 0; background: var(--bg-body); z-index: 100;
            padding: 10px 16px; display: flex; gap: 10px; overflow-x: auto; scrollbar-width: none;
            box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }
        .sticky-nav::-webkit-scrollbar { display: none; }
        .nav-tab {
            background: var(--bg-card); border: 1px solid var(--border); color: var(--text-dark);
            padding: 8px 18px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; cursor: pointer; white-space: nowrap; 
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-tab.active { background: var(--primary); color: white; border-color: var(--primary); transform: scale(1.05); }

        /* ================= قائمة المنتجات ================= */
        .menu-container { padding: 0 16px; max-width: 800px; margin: 0 auto; }
        /* تمت إضافة padding-top للتعويض عن شريط التنقل */
        .category-section { margin-bottom: 35px; scroll-margin-top: 80px; } 
        .category-title { font-size: 1.3rem; font-weight: 800; margin-bottom: 5px; display: flex; align-items: center; gap: 8px; }
        .category-note { font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-bottom: 15px; display: inline-block; background: var(--primary-light); padding: 5px 10px; border-radius: 8px;}

        .product-card {
            background: var(--bg-card); border-radius: var(--radius); padding: 15px; margin-bottom: 12px;
            display: flex; gap: 15px; border: 1px solid var(--border); box-shadow: 0 2px 5px rgba(0,0,0,0.02);
            cursor: pointer; position: relative; overflow: hidden; 
            transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s, opacity 0.5s, transform 0.5s;
            opacity: 0; transform: translateY(20px); align-items: center;
        }
        .product-card.visible { opacity: 1; transform: translateY(0); }
        .product-card:active { transform: scale(0.96); background: #fdfdfd; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        
        .product-info { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; }
        .product-name { font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;}
        
        .bestseller-badge { background: #FFD700; color: #8B6508; font-size: 0.7rem; padding: 2px 8px; border-radius: 12px; font-weight: 900; display: inline-flex; align-items: center; gap: 4px; }
        
        .product-bottom { display: flex; justify-content: space-between; align-items: center; }
        .product-price { font-weight: 800; color: var(--text-dark); font-size: 1.1rem; }
        
        .add-icon-btn { 
            background: var(--primary-light); color: var(--primary); width: 35px; height: 35px; border-radius: 50%; 
            display: flex; justify-content: center; align-items: center; font-size: 1.1rem; pointer-events: none;
            transition: var(--transition);
        }
        .product-card:hover .add-icon-btn { background: var(--primary); color: white; transform: rotate(90deg); }

        /* ================= النوافذ المنبثقة ================= */
        .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 1000; opacity: 0; visibility: hidden; transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); backdrop-filter: blur(2px); }
        .overlay.active { opacity: 1; visibility: visible; }

        .bottom-sheet {
            position: fixed; bottom: -100%; left: 0; width: 100%; background: var(--bg-card);
            border-radius: 24px 24px 0 0; z-index: 1001; 
            transition: bottom 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            display: flex; flex-direction: column; max-height: 90vh;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
        }
        .bottom-sheet.active { bottom: 0; }
        
        .drag-handle { width: 40px; height: 5px; background: #ddd; border-radius: 10px; margin: 12px auto; }
        .sheet-content { padding: 0 20px 20px; overflow-y: auto; }
        
        .modal-title { font-size: 1.4rem; font-weight: 800; margin-bottom: 20px; }
        
        .quick-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
        .quick-tag-btn { background: var(--bg-body); border: 1px solid var(--border); padding: 6px 12px; border-radius: 15px; font-size: 0.85rem; font-weight: 700; color: var(--text-gray); cursor: pointer; transition: var(--transition); }
        .quick-tag-btn:hover, .quick-tag-btn:active { background: var(--primary-light); color: var(--primary); border-color: var(--primary); }

        .notes-input { width: 100%; background: var(--bg-body); border: 1px solid var(--border); padding: 12px; border-radius: 12px; margin-bottom: 20px; font-family: inherit; resize: none; outline: none; transition: var(--transition); }
        .notes-input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-light); }
        
        .modal-footer { padding: 15px 20px; border-top: 1px solid var(--border); display: flex; gap: 15px; align-items: center; background: var(--bg-card); }
        
        .qty-selector { display: flex; align-items: center; background: var(--bg-body); border-radius: 12px; padding: 5px; }
        .qty-btn { width: 35px; height: 35px; background: white; border: none; border-radius: 8px; font-size: 1.2rem; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: var(--transition); }
        .qty-btn:active { transform: scale(0.9); }
        .qty-val { width: 40px; text-align: center; font-weight: 800; font-size: 1.1rem; }
        
        .btn-primary { flex-grow: 1; background: var(--primary); color: white; border: none; padding: 15px; border-radius: 12px; font-size: 1.1rem; font-weight: 800; cursor: pointer; display: flex; justify-content: center; gap: 10px; transition: var(--transition); }
        .btn-primary:active { transform: scale(0.96); }

        /* ================= السلة وإتمام الطلب ================= */
        .cart-item { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding: 15px 0; animation: fadeIn 0.4s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        .cart-item-info h4 { font-size: 1.1rem; margin-bottom: 5px; }
        .cart-item-note { font-size: 0.8rem; color: var(--primary); margin-bottom: 5px; }
        
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; margin-bottom: 5px; font-weight: 700; font-size: 0.9rem; }
        .form-group input { width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 10px; font-family: inherit; transition: var(--transition); }
        .form-group input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-light); outline: none; }

        .floating-cart { 
            position: fixed; bottom: 20px; left: 16px; right: 16px; background: var(--primary); color: white; 
            padding: 15px 20px; border-radius: 15px; display: flex; justify-content: space-between; align-items: center; 
            font-weight: 800; font-size: 1.1rem; box-shadow: 0 8px 20px rgba(255, 96, 0, 0.3); z-index: 900; 
            transform: translateY(150%); transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); cursor: pointer; max-width: 600px; margin: 0 auto; 
        }
        .floating-cart.visible { transform: translateY(0); }
        
        @keyframes bounceCart { 0% { transform: translateY(0) scale(1); } 40% { transform: translateY(-8px) scale(1.02); } 60% { transform: translateY(3px) scale(0.98); } 80% { transform: translateY(-2px) scale(1.01); } 100% { transform: translateY(0) scale(1); } }
        .floating-cart.bounce { animation: bounceCart 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); }

        .cart-badge { background: white; color: var(--primary); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 900; transition: transform 0.3s; }

        /* ================= الفوتر ================= */
        footer { text-align: center; padding: 40px 20px; background: var(--bg-card); margin-top: 20px; border-top: 1px solid var(--border); }
        .footer-logo { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: var(--text-dark); margin-bottom: 10px; letter-spacing: 2px;}
        .footer-info p { color: var(--text-gray); font-size: 0.95rem; margin-bottom: 5px; font-weight: 600; }
        .footer-phone { color: var(--primary); font-size: 1.4rem; font-weight: 800; direction: ltr; margin: 15px 0; display: inline-block;}
        .social-links { display: flex; justify-content: center; gap: 15px; }
        .social-links a { width: 40px; height: 40px; border-radius: 50%; background: var(--bg-body); color: var(--text-gray); display: flex; justify-content: center; align-items: center; font-size: 1.2rem; text-decoration: none; transition: 0.3s;}
        .social-links a:hover { background: var(--primary); color: white; transform: translateY(-3px); }

        /* ================= Toasts ================= */
        .toast-container { position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none; }
        .toast { background: var(--text-dark); color: white; padding: 12px 20px; border-radius: 30px; font-size: 0.95rem; font-weight: 700; display: flex; align-items: center; gap: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); animation: toastIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .toast.success i { color: var(--success); }
        .toast.error i { color: var(--danger); }
        @keyframes toastIn { from { opacity: 0; transform: translateY(30px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }

    </style>
</head>
<body>

    <!-- الشاشة الافتتاحية -->
    <div class="splash-screen" id="splashScreen">
        <div class="splash-logo">SHRIMPY</div>
        <p style="letter-spacing: 2px; font-weight: bold; margin-top: 5px;">FAST SEAFOOD</p>
    </div>

    <!-- الهيدر -->
    <div class="cover-photo"></div>
    <div class="restaurant-header">
        <span class="menu-subtitle">MENU</span> 
        <h1 class="rest-name">SHRIMPY</h1>
        <p class="rest-desc">Fast Seafood</p>
        
        <div class="stats-bar">
            <div class="stat-item"><i class="fa-solid fa-star"></i>4.9 تقييم</div>
            <div class="stat-item"><i class="fa-solid fa-motorcycle"></i>30-45 دقيقة</div>
            <div class="stat-item"><i class="fa-solid fa-fish-fins"></i>طازج يومياً</div>
        </div>
    </div>

    <!-- البحث -->
    <div class="search-bar">
        <input type="text" id="searchInput" placeholder="ابحث في المنيو..." onkeyup="filterMenu()">
        <i class="fa-solid fa-search"></i>
    </div>

    <!-- شريط الأقسام -->
    <nav class="sticky-nav" id="stickyNav"></nav>

    <!-- قائمة الطعام -->
    <main class="menu-container" id="menuContainer"></main>

    <!-- الفوتر -->
    <footer>
        <div class="footer-logo">SHRIMPY</div>
        <div class="footer-info">
            <p><i class="fa-solid fa-location-dot" style="color:var(--primary)"></i> المحلة الكبرى – أبو راضي</p>
            <p>بجوار ألبان الكابتن أمام ماركت المكاكي</p>
        </div>
        <div class="footer-phone"><i class="fa-solid fa-phone"></i> 01101012543</div>
        <div class="social-links">
            <a href="https://www.facebook.com/share/18r2pajAhF/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/shriimpyy1?igsh=MTA5MXJyd2h4bm8xMg==" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
    </footer>

    <!-- زر السلة العائم -->
    <div class="floating-cart" id="floatingCartBtn" onclick="openCart()">
        <div style="display:flex; align-items:center; gap:10px;">
            <div class="cart-badge" id="cartCountBadge">0</div>
            <span>عرض السلة</span>
        </div>
        <span id="cartTotalBtn">0 ج.م</span>
    </div>

    <!-- النوافذ المنبثقة -->
    <div class="overlay" id="overlay" onclick="closeAllModals()"></div>

    <!-- نافذة المنتج والملاحظات -->
    <div class="bottom-sheet" id="productModal">
        <div class="drag-handle" onclick="closeAllModals()"></div>
        <div class="sheet-content">
            <h2 class="modal-title" id="modalTitle">اسم المنتج</h2>
            <h4 style="margin-bottom: 10px; color:var(--text-gray);">إضافات وملاحظات سريعة:</h4>
            
            <!-- أزرار الملاحظات السريعة -->
            <div class="quick-tags">
                <button class="quick-tag-btn" onclick="addQuickNote('بدون مخلل')">+ بدون مخلل</button>
                <button class="quick-tag-btn" onclick="addQuickNote('سبايسي')">+ سبايسي</button>
                <button class="quick-tag-btn" onclick="addQuickNote('بدون طحينة')">+ بدون طحينة</button>
                <button class="quick-tag-btn" onclick="addQuickNote('صوص زيادة')">+ صوص زيادة</button>
            </div>

            <textarea class="notes-input" id="modalNotes" rows="3" placeholder="أو اكتب ملاحظاتك هنا..."></textarea>
        </div>
        <div class="modal-footer">
            <div class="qty-selector">
                <button class="qty-btn" onclick="changeModalQty(1)"><i class="fa-solid fa-plus"></i></button>
                <span class="qty-val" id="modalQty">1</span>
                <button class="qty-btn" onclick="changeModalQty(-1)"><i class="fa-solid fa-minus"></i></button>
            </div>
            <button class="btn-primary" onclick="confirmAddToCart()">
                <span>إضافة</span>
                <span id="modalPriceBtn">0 ج.م</span>
            </button>
        </div>
    </div>

    <!-- سلة المشتريات -->
    <div class="bottom-sheet" id="cartModal">
        <div class="drag-handle" onclick="closeAllModals()"></div>
        <div class="sheet-content">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
                <h2 class="modal-title" style="margin:0;">سلة الطلبات</h2>
                <button onclick="clearCart()" style="background:none; border:none; color:var(--danger); font-weight:bold; cursor:pointer; transition: 0.2s;"><i class="fa-solid fa-trash"></i> تفريغ</button>
            </div>
            
            <div id="cartItemsList"></div>
            
            <div style="display:flex; justify-content:space-between; font-weight:900; font-size:1.4rem; margin-top:20px; color:var(--primary)">
                <span>الإجمالي:</span>
                <span><span id="cartTotalPrice">0</span> ج.م</span>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn-primary" onclick="openCheckout()">متابعة لإتمام الطلب</button>
        </div>
    </div>

    <!-- صفحة بيانات العميل -->
    <div class="bottom-sheet" id="checkoutModal">
        <div class="drag-handle" onclick="closeAllModals()"></div>
        <div class="sheet-content">
            <h2 class="modal-title" style="margin-bottom: 20px;">بيانات التوصيل</h2>
            <div class="form-group">
                <label>الاسم الكريم</label>
                <input type="text" id="custName" placeholder="اكتب اسمك">
            </div>
            <div class="form-group">
                <label>رقم الهاتف</label>
                <input type="tel" id="custPhone" placeholder="01xxxxxxxxx">
            </div>
            <div class="form-group">
                <label>العنوان بالتفصيل</label>
                <input type="text" id="custAddress" placeholder="المنطقة، الشارع، رقم العمارة">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn-primary" style="background:#25D366;" onclick="submitOrder()">
                <i class="fa-brands fa-whatsapp"></i> تأكيد وإرسال واتساب
            </button>
        </div>
    </div>

    <!-- الإشعارات -->
    <div class="toast-container" id="toastContainer"></div>

    <script>
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('splashScreen').classList.add('hidden');
                loadCart(); 
                animateProductsIn(); 
            }, 1800);
        });

        // ================= بيانات المنيو =================
        const menuData = [
            {
                id: "cat_sandwiches", title: "الساندوتشات", icon: "fa-burger",
                items: [
                    { id: "s1", name: "ساندوتش جمبري", price: 35, isBestseller: true }, 
                    { id: "s2", name: "ساندوتش فيليه سمك", price: 33 },
                    { id: "s3", name: "ساندوتش كاليماري", price: 38 },
                    { id: "s4", name: "ساندوتش ميكس جمبري وكاليماري", price: 40 },
                    { id: "s5", name: "ساندوتش ميكس سي فود", price: 40 }
                ]
            },
            {
                id: "cat_pasta", title: "المكرونات", icon: "fa-bowl-food", note: "جميع أطباق المكرونة تُقدم بصوص الريد صوص",
                items: [
                    { id: "p1", name: "اسباجتي بالجمبري البانيه", price: 80, isBestseller: true },
                    { id: "p2", name: "اسباجتي بالجمبري المشوي", price: 85 },
                    { id: "p3", name: "اسباجتي سي فود بانيه", price: 90 },
                    { id: "p4", name: "اسباجتي سي فود مشوي", price: 95 }
                ]
            },
            {
                id: "cat_rice", title: "الأرز", icon: "fa-bowl-rice",
                items: [
                    { id: "r1", name: "ريزو بالجمبري البانيه", price: 70 },
                    { id: "r2", name: "ريزو ميكس جمبري وكاليماري", price: 75, isBestseller: true },
                    { id: "r3", name: "ريزو سي فود بانيه", price: 80 },
                    { id: "r4", name: "فتة جمبري بصوص سويت شيلي", price: 85 },
                    { id: "r5", name: "فتة جمبري بصوص الرانش", price: 85 }
                ]
            },
            {
                id: "cat_meals", title: "الوجبات", icon: "fa-utensils", note: "جميع الوجبات تُقدم مع أرز + بطاطس + مخلل + طحينة + عيش",
                items: [
                    { id: "m1", name: "وجبة جمبري بانيه", price: 155, isBestseller: true },
                    { id: "m2", name: "وجبة جمبري مشوي", price: 160 },
                    { id: "m3", name: "وجبة ميكس جمبري وكاليماري", price: 165 },
                    { id: "m4", name: "وجبة سي فود بانيه", price: 170 },
                    { id: "m5", name: "وجبة سي فود مشوي", price: 185 }
                ]
            },
            {
                id: "cat_soup", title: "الشوربة", icon: "fa-mug-hot", note: "تُقدم بالكريمة أو بدون حسب الطلب",
                items: [
                    { id: "sp1", name: "شوربة سي فود", price: 150, isBestseller: true },
                    { id: "sp2", name: "شوربة سي فود مخلية", price: 160 }
                ]
            },
            {
                id: "cat_sides", title: "الأطباق الجانبية", icon: "fa-french-fries",
                items: [
                    { id: "sd1", name: "باكيت بطاطس", price: 25 },
                    { id: "sd2", name: "كول سلو", price: 20 },
                    { id: "sd3", name: "طحينة", price: 15 },
                    { id: "sd4", name: "صوص رانش", price: 15 },
                    { id: "sd5", name: "صوص سويت شيلي", price: 15 },
                    { id: "sd6", name: "مخلل", price: 7 }
                ]
            }
        ];

        let cart = [];
        let currentProduct = null;

        // ================= البناء =================
        function renderMenu() {
            const nav = document.getElementById('stickyNav');
            const container = document.getElementById('menuContainer');

            menuData.forEach((cat, index) => {
                nav.innerHTML += `<button class="nav-tab ${index === 0 ? 'active' : ''}" onclick="scrollToCat('${cat.id}', this)"><i class="fa-solid ${cat.icon}"></i> ${cat.title}</button>`;

                let html = `<section id="${cat.id}" class="category-section">
                            <h2 class="category-title">${cat.title}</h2>
                            ${cat.note ? `<span class="category-note"><i class="fa-solid fa-circle-info"></i> ${cat.note}</span>` : ''}
                            `;
                
                cat.items.forEach((item, itemIndex) => {
                    const delay = itemIndex * 0.1;
                    const badgeHtml = item.isBestseller ? `<span class="bestseller-badge"><i class="fa-solid fa-fire"></i> الأكثر مبيعاً</span>` : '';
                    
                    html += `
                        <div class="product-card" style="transition-delay: ${delay}s;" onclick="openProductModal('${item.id}', '${item.name}', ${item.price})">
                            <div class="product-info">
                                <h3 class="product-name">${item.name} ${badgeHtml}</h3>
                                <div class="product-bottom">
                                    <span class="product-price">${item.price} ج.م</span>
                                    <div class="add-icon-btn"><i class="fa-solid fa-plus"></i></div>
                                </div>
                            </div>
                        </div>
                    `;
                });
                container.innerHTML += html + `</section>`;
            });
        }

        function animateProductsIn() {
            const cards = document.querySelectorAll('.product-card');
            cards.forEach(card => {
                setTimeout(() => {
                    card.classList.add('visible');
                    setTimeout(() => card.style.transitionDelay = '0s', 1000);
                }, 100); 
            });
        }

        // ================= تعديل دالة التمرير =================
        function scrollToCat(id, btn) {
            const element = document.getElementById(id);
            const navHeight = document.getElementById('stickyNav').offsetHeight;
            
            // حساب الموضع الصحيح مع خصم ارتفاع شريط التنقل
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight - 10; 
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }

        // ================= الإضافة والمودال =================
        function openProductModal(id, name, price) {
            currentProduct = { id, name, price, qty: 1 };
            document.getElementById('modalTitle').innerText = name;
            document.getElementById('modalNotes').value = "";
            document.getElementById('modalQty').innerText = "1";
            document.getElementById('modalPriceBtn').innerText = price + " ج.م";
            
            showModal('productModal');
        }

        function addQuickNote(text) {
            const notesInput = document.getElementById('modalNotes');
            if(notesInput.value) {
                notesInput.value += `، ${text}`;
            } else {
                notesInput.value = text;
            }
        }

        function changeModalQty(delta) {
            if (currentProduct.qty + delta > 0) {
                currentProduct.qty += delta;
                
                const qtyVal = document.getElementById('modalQty');
                qtyVal.style.transform = 'scale(1.3)';
                setTimeout(() => qtyVal.style.transform = 'scale(1)', 150);
                
                qtyVal.innerText = currentProduct.qty;
                document.getElementById('modalPriceBtn').innerText = (currentProduct.price * currentProduct.qty) + " ج.م";
            }
        }

        function confirmAddToCart() {
            const notes = document.getElementById('modalNotes').value.trim();
            cart.push({
                id: currentProduct.id + Date.now(),
                name: currentProduct.name,
                price: currentProduct.price,
                qty: currentProduct.qty,
                notes: notes
            });

            saveCart();
            updateCartBtn();
            closeAllModals();
            
            if ('vibrate' in navigator) navigator.vibrate(50);
            
            const cartBtn = document.getElementById('floatingCartBtn');
            const cartBadge = document.getElementById('cartCountBadge');
            
            cartBtn.classList.remove('bounce');
            void cartBtn.offsetWidth; 
            cartBtn.classList.add('bounce');
            
            cartBadge.style.transform = 'scale(1.4)';
            setTimeout(() => cartBadge.style.transform = 'scale(1)', 300);

            showToast('✅ تمت الإضافة بنجاح', 'success');
        }

        // ================= السلة =================
        function saveCart() { localStorage.setItem('shrimpy_cart', JSON.stringify(cart)); }
        function loadCart() { const saved = localStorage.getItem('shrimpy_cart'); if (saved) { cart = JSON.parse(saved); updateCartBtn(); } }

        function updateCartBtn() {
            const btn = document.getElementById('floatingCartBtn');
            if (cart.length > 0) {
                btn.classList.add('visible');
                let totalItems = 0; let totalPrice = 0;
                cart.forEach(item => { totalItems += item.qty; totalPrice += item.price * item.qty; });
                
                document.getElementById('cartCountBadge').innerText = totalItems;
                document.getElementById('cartTotalBtn').innerText = totalPrice + " ج.م";
            } else {
                btn.classList.remove('visible');
            }
        }

        function openCart() {
            const list = document.getElementById('cartItemsList');
            list.innerHTML = "";
            let total = 0;

            cart.forEach((item, index) => {
                total += item.price * item.qty;
                list.innerHTML += `
                    <div class="cart-item">
                        <div style="flex-grow:1; padding-left:10px;">
                            <h4 style="margin-bottom:4px; font-weight:800;">${item.name}</h4>
                            ${item.notes ? `<p class="cart-item-note">ملاحظة: ${item.notes}</p>` : ''}
                            <span style="font-weight:bold; color:var(--text-dark);">${item.price * item.qty} ج.م</span>
                        </div>
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="updateCartItemQty(${index}, 1)">+</button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn" onclick="updateCartItemQty(${index}, -1)">-</button>
                        </div>
                    </div>
                `;
            });

            document.getElementById('cartTotalPrice').innerText = total;
            showModal('cartModal');
        }

        function updateCartItemQty(index, delta) {
            if (cart[index].qty + delta > 0) {
                cart[index].qty += delta;
            } else {
                cart.splice(index, 1);
            }
            saveCart(); updateCartBtn();
            if(cart.length === 0) closeAllModals(); else openCart();
        }

        function clearCart() {
            if(confirm("هل أنت متأكد من تفريغ السلة؟")) {
                cart = []; saveCart(); updateCartBtn(); closeAllModals();
                showToast('🗑 تم تفريغ السلة', 'error');
            }
        }

        // ================= إتمام الطلب =================
        function openCheckout() {
            closeAllModals();
            setTimeout(() => showModal('checkoutModal'), 300);
        }

        function submitOrder() {
            const name = document.getElementById('custName').value.trim();
            const phone = document.getElementById('custPhone').value.trim();
            const address = document.getElementById('custAddress').value.trim();

            if (!name || !phone || !address) {
                showToast('⚠️ يرجى إكمال بيانات التوصيل', 'error');
                return;
            }

            const phoneRegex = /^01[0125][0-9]{8}$/;
            if (!phoneRegex.test(phone)) {
                showToast('⚠️ يرجى إدخال رقم هاتف مصري صحيح', 'error');
                return;
            }

            let text = `مرحباً Shrimpy ⚓\n\n`;
            text += `*تفاصيل العميل:*\n`;
            text += `👤 الاسم: ${name}\n`;
            text += `📞 الموبايل: ${phone}\n`;
            text += `📍 العنوان: ${address}\n\n`;
            text += `*الطلبات:*\n`;
            
            let total = 0;
            cart.forEach(item => {
                total += item.price * item.qty;
                text += `▪️ ${item.qty}x ${item.name} (${item.price * item.qty} ج)\n`;
                if(item.notes) text += `   ✏️ ملاحظة: ${item.notes}\n`;
            });

            text += `\n*الإجمالي: ${total} ج.م*\n`;

            const whatsappNumber = "201101012543";
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
            
            cart = []; saveCart(); updateCartBtn(); closeAllModals();
        }

        // ================= إضافات مساعدة =================
        function filterMenu() {
            const term = document.getElementById('searchInput').value.toLowerCase();
            let hasResults = false;

            document.querySelectorAll('.product-card').forEach(card => {
                const name = card.querySelector('.product-name').innerText.toLowerCase();
                if(name.includes(term)) {
                    card.style.display = "flex";
                    setTimeout(() => card.style.opacity = '1', 50);
                    hasResults = true;
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = "none", 200);
                }
            });

            let emptyMsg = document.getElementById('emptySearchMsg');
            if (!hasResults && term !== "") {
                if (!emptyMsg) {
                    emptyMsg = document.createElement('div');
                    emptyMsg.id = 'emptySearchMsg';
                    emptyMsg.style.textAlign = 'center';
                    emptyMsg.style.padding = '40px 20px';
                    emptyMsg.style.color = 'var(--text-gray)';
                    emptyMsg.innerHTML = '<i class="fa-solid fa-magnifying-glass" style="font-size:2rem; margin-bottom:10px; color:var(--primary)"></i><p style="font-weight:700;">عذراً، لم نجد ما تبحث عنه</p>';
                    document.getElementById('menuContainer').prepend(emptyMsg);
                } else {
                    emptyMsg.style.display = 'block';
                }
            } else if (emptyMsg) {
                emptyMsg.style.display = 'none';
            }
        }

        function showToast(msg, type) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.innerHTML = type === 'success' ? `<i class="fa-solid fa-check-circle"></i> ${msg}` : `<i class="fa-solid fa-circle-exclamation"></i> ${msg}`;
            container.appendChild(toast);
            setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(20px)'; setTimeout(()=>toast.remove(),400); }, 3000);
        }

        function showModal(id) {
            document.getElementById('overlay').classList.add('active');
            document.getElementById(id).classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeAllModals() {
            document.getElementById('overlay').classList.remove('active');
            document.querySelectorAll('.bottom-sheet').forEach(sheet => sheet.classList.remove('active'));
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('scroll', () => {
            let current = '';
            const navHeight = document.getElementById('stickyNav').offsetHeight;

            document.querySelectorAll('.category-section').forEach(sec => {
                // تعديل حساب مسافة التمرير للتوافق مع دالة التمرير الجديدة
                if (window.scrollY >= sec.offsetTop - navHeight - 20) current = sec.id;
            });
            document.querySelectorAll('.nav-tab').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('onclick').includes(current)) {
                    btn.classList.add('active');
                    btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            });
        });

        renderMenu();
    </script>
</body>
</html>

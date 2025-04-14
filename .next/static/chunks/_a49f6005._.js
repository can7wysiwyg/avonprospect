(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a49f6005._.js", {

"[project]/helpers/core/CoreFuncs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBrand": (()=>getBrand),
    "getBrands": (()=>getBrands),
    "getCategories": (()=>getCategories),
    "getCategory": (()=>getCategory),
    "getProduct": (()=>getProduct),
    "getProductByBrand": (()=>getProductByBrand),
    "getProductByCat": (()=>getProductByCat),
    "getProducts": (()=>getProducts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helpers/ApiUrl.js [app-client] (ecmascript)");
;
async function getCategories() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiUrl"]}/public/all_categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Server Error ');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching categories:', error);
    }
}
async function getBrands() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiUrl"]}/public/all_brands`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Server Error ');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching brands:', error);
    }
}
async function getProducts() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiUrl"]}/public/all_products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Server Error ');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching products:', error);
    }
}
async function getProductByCat(category) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiUrl"]}/public/products_by_category/${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Server Error ');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching products:', error);
    }
}
async function getProductByBrand(brand) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiUrl"]}/public/products_by_brand/${brand}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Server Error ');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching products:', error);
    }
}
async function getCategory(catId) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiUrl"]}/public/category/${catId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Server Error ');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching products:', error);
    }
}
async function getBrand(brandId) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiUrl"]}/public/brand_single/${brandId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Server Error ');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching products:', error);
    }
}
async function getProduct(id) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiUrl"]}/public/product_single/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': `application/json`
            }
        });
        if (!response.ok) {
            throw new Error('Server Error ');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching product:', error);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/home/Swiper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductSwiper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$core$2f$CoreFuncs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helpers/core/CoreFuncs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function ProductSwiper() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductSwiper.useEffect": ()=>{
            const fetchData = {
                "ProductSwiper.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$core$2f$CoreFuncs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProducts"])();
                        if (data && data.products) {
                            // Filter featured products only
                            const featuredProducts = data.products.filter({
                                "ProductSwiper.useEffect.fetchData.featuredProducts": (product)=>product.isFeatured
                            }["ProductSwiper.useEffect.fetchData.featuredProducts"]);
                            setProducts(featuredProducts);
                        }
                    } catch (error) {
                        console.log("There was a problem fetching products:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["ProductSwiper.useEffect.fetchData"];
            fetchData();
        }
    }["ProductSwiper.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "banner",
            style: {
                background: '#F9F3EC'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex justify-content-center align-items-center py-5",
                    style: {
                        height: '400px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner-border text-primary",
                        role: "status",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "visually-hidden",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/app/home/Swiper.js",
                            lineNumber: 41,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/home/Swiper.js",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/home/Swiper.js",
                    lineNumber: 39,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/Swiper.js",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/home/Swiper.js",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    if (products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "banner",
            style: {
                background: '#F9F3EC'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "alert alert-info",
                    children: "No featured products to display."
                }, void 0, false, {
                    fileName: "[project]/app/home/Swiper.js",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/Swiper.js",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/home/Swiper.js",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "banner",
        style: {
            background: '#F9F3EC'
        },
        className: "jsx-76f4fd1c563bbb72",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-76f4fd1c563bbb72" + " " + "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-76f4fd1c563bbb72" + " " + "position-relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                            ],
                            spaceBetween: 0,
                            slidesPerView: 1,
                            pagination: {
                                clickable: true,
                                el: '.swiper-pagination'
                            },
                            autoplay: {
                                delay: 5000,
                                disableOnInteraction: false
                            },
                            className: "main-swiper",
                            children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    className: "py-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-76f4fd1c563bbb72" + " " + "row banner-content align-items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-76f4fd1c563bbb72" + " " + "img-wrapper col-md-5 position-relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-76f4fd1c563bbb72" + " " + "banner-image-container",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: product.photo,
                                                        alt: product.name,
                                                        className: "jsx-76f4fd1c563bbb72" + " " + "banner-image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/Swiper.js",
                                                        lineNumber: 81,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/home/Swiper.js",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/Swiper.js",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-76f4fd1c563bbb72" + " " + "content-wrapper col-md-7 p-5 mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-76f4fd1c563bbb72" + " " + "banner-title display-1 fw-normal",
                                                        children: [
                                                            product.name,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-76f4fd1c563bbb72" + " " + "text-primary",
                                                                children: "collection"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/home/Swiper.js",
                                                                lineNumber: 90,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/home/Swiper.js",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/${product._id}`,
                                                        className: "btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1",
                                                        children: [
                                                            "shop now",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 24,
                                                                className: "mb-1 ms-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/home/Swiper.js",
                                                                lineNumber: 97,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/home/Swiper.js",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/home/Swiper.js",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/Swiper.js",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                }, product.id, false, {
                                    fileName: "[project]/app/home/Swiper.js",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/home/Swiper.js",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-76f4fd1c563bbb72" + " " + "swiper-pagination d-flex justify-content-center mb-5"
                        }, void 0, false, {
                            fileName: "[project]/app/home/Swiper.js",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/home/Swiper.js",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/Swiper.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "76f4fd1c563bbb72",
                children: ".banner-title{margin-bottom:1.5rem}.main-swiper{position:relative}.swiper-pagination{text-align:center;width:100%;position:absolute;bottom:0;left:0}.swiper-pagination-bullet{opacity:.5;background:#000;width:12px;height:12px;margin:0 5px}.swiper-pagination-bullet-active{opacity:1;background:var(--bs-primary)}.banner-image-container{border-radius:8px;width:100%;height:300px;position:relative;overflow:hidden}.banner-image{object-fit:cover;opacity:.9;max-width:100%;max-height:100%;transition:transform .3s}.banner-image:hover{opacity:1;transform:scale(1.05)}@media (width>=768px){.banner-image-container{height:350px}}@media (width>=992px){.banner-image-container{height:450px}.row.banner-content{min-height:500px}}@media (width>=1200px){.banner-image-container{height:500px}.row.banner-content{min-height:600px}.banner-title{font-size:3.5rem}}@media (width<=767px){.row.banner-content{flex-direction:column}.img-wrapper{order:1;width:100%;margin-bottom:2rem}.content-wrapper{text-align:center;order:2;padding:1rem!important}.banner-title{font-size:2rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/Swiper.js",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ProductSwiper, "KWid68LpBxbFhyja5dauhUIHvyY=");
_c = ProductSwiper;
var _c;
__turbopack_context__.k.register(_c, "ProductSwiper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_a49f6005._.js.map
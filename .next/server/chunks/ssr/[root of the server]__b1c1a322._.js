module.exports = {

"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/helpers/ApiUrl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ApiUrl": (()=>ApiUrl)
});
const ApiUrl = "http://localhost:5200" //http://localhost:5200
;
}}),
"[project]/helpers/AccessToken.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSupertoken": (()=>getSupertoken)
});
const getSupertoken = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return null;
};
}}),
"[project]/redux/actions/types.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AUTHENTICATION_ERROR": (()=>AUTHENTICATION_ERROR),
    "AUTH_USER_ERROR": (()=>AUTH_USER_ERROR),
    "FORGOT_PASSWORD": (()=>FORGOT_PASSWORD),
    "GET_USER": (()=>GET_USER),
    "LOGIN_USER": (()=>LOGIN_USER),
    "REGISTER_USER": (()=>REGISTER_USER),
    "RESET_PASSWORD": (()=>RESET_PASSWORD)
});
const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
const LOGIN_USER = 'LOGIN_USER';
const GET_USER = 'GET_USER';
const REGISTER_USER = 'REGISTER_USER';
const AUTH_USER_ERROR = 'AUTH_USER_ERROR';
const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
const RESET_PASSWORD = 'RESET_PASSWORD';
}}),
"[project]/redux/actions/userAuthAction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "userForgotPassword": (()=>userForgotPassword),
    "userGet": (()=>userGet),
    "userLogin": (()=>userLogin),
    "userRegister": (()=>userRegister),
    "userResetPassword": (()=>userResetPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helpers/ApiUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$AccessToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helpers/AccessToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/actions/types.js [app-ssr] (ecmascript)");
;
;
;
;
function userRegister(data) {
    return async function(dispatch) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUrl"]}/user_register`, data);
            const mssg = response.data.msg;
            dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGISTER_USER"],
                payload: mssg
            });
        } catch (error) {
            console.log("there was an issue while user logged in", error);
            dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTHENTICATION_ERROR"]
            });
        }
    };
}
function userLogin(data) {
    return async function(dispatch) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUrl"]}/user_login`, data);
            if (response.data.msg) {
                alert(response.data.msg);
            } else {
                localStorage.setItem("usertoken", response.data.usertoken);
                window.location.href = "/";
            }
            dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOGIN_USER"]
            });
        } catch (error) {
            console.log("there was an issue while user logged in", error);
            dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTHENTICATION_ERROR"]
            });
        }
    };
}
function userGet() {
    return async function(dispatch) {
        try {
            const usertoken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$AccessToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupertoken"])();
            if (!usertoken || usertoken === null || usertoken === undefined) {
                return "";
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUrl"]}/user_user`, {
                headers: {
                    Authorization: `Bearer ${usertoken}`
                }
            });
            const user = response.data.user;
            dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GET_USER"],
                payload: user
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_USER_ERROR"]
            });
            throw error;
        }
    };
}
function userForgotPassword(data) {
    return async function(dispatch) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUrl"]}/user_forgot_password`, data);
            const accessToken = response.data.accessToken;
            if (response.data.accessToken) {
                window.location.href = `/auth/reset/${accessToken}`;
            } else {
                alert(response.data.msg);
            }
        } catch (error) {
            console.error(error);
            dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTHENTICATION_ERROR"]
            });
            throw error;
        }
    };
}
function userResetPassword(data, usertoken) {
    return async function(dispatch) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUrl"]}/user_reset_password`, data, {
                headers: {
                    Authorization: `Bearer ${usertoken}`
                }
            });
            const mssg = response.data.msg;
            dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESET_PASSWORD"],
                payload: mssg
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTHENTICATION_ERROR"]
            });
            throw error;
        }
    };
}
}}),
"[project]/app/(auth)/register/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$userAuthAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/redux/actions/userAuthAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Register() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullname: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const mssg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.userRdcr.mssg);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$actions$2f$userAuthAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userRegister"])(data));
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-danger",
                children: mssg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: mssg
                }, void 0, false, {
                    fileName: "[project]/app/(auth)/register/page.js",
                    lineNumber: 47,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(auth)/register/page.js",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "register",
                className: "register-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row my-5 py-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "offset-md-3 col-md-6 my-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "display-3 fw-normal text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-secondary",
                                        children: "Register"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(auth)/register/page.js",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(auth)/register/page.js",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "form-control form-control-lg",
                                                name: "fullname",
                                                value: data.fullname,
                                                onChange: (e)=>setData({
                                                        ...data,
                                                        fullname: e.target.value
                                                    }),
                                                id: "fullname",
                                                placeholder: "Your Full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(auth)/register/page.js",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(auth)/register/page.js",
                                            lineNumber: 62,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                className: "form-control form-control-lg",
                                                name: "email",
                                                value: data.email,
                                                onChange: (e)=>setData({
                                                        ...data,
                                                        email: e.target.value
                                                    }),
                                                id: "email",
                                                placeholder: "Your Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(auth)/register/page.js",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(auth)/register/page.js",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                className: "form-control form-control-lg",
                                                name: "password",
                                                value: data.password,
                                                onChange: (e)=>setData({
                                                        ...data,
                                                        password: e.target.value
                                                    }),
                                                id: "password",
                                                placeholder: "Your Password"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(auth)/register/page.js",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(auth)/register/page.js",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-grid gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "btn btn-light btn-lg rounded-1",
                                                children: [
                                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "spinner-border spinner-border-sm",
                                                        role: "status",
                                                        children: "Loading..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(auth)/register/page.js",
                                                        lineNumber: 104,
                                                        columnNumber: 32
                                                    }, this) : "Register",
                                                    "Register"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(auth)/register/page.js",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(auth)/register/page.js",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(auth)/register/page.js",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(auth)/register/page.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(auth)/register/page.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(auth)/register/page.js",
                    lineNumber: 54,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(auth)/register/page.js",
                lineNumber: 53,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(auth)/register/page.js",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__b1c1a322._.js.map
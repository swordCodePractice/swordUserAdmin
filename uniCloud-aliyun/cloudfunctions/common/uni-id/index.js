"use strict";

function e(e) {
	return e && "object" == typeof e && "default" in e ? e.default : e
}
var t = e(require("fs")),
	r = e(require("path")),
	n = e(require("crypto")),
	i = e(require("querystring")),
	o = e(require("buffer")),
	s = e(require("stream")),
	a = e(require("util"));
const c = Object.prototype.toString,
	u = Object.prototype.hasOwnProperty;
var d = /[\\^$.*+?()[\]{}|]/g,
	f = RegExp(d.source);

function l(e, t, r) {
	return e.replace(new RegExp((n = t) && f.test(n) ? n.replace(d, "\\$&") : n, "g"), r);
	var n
}

function p(e, t) {
	return u.call(e, t)
}

function m(e) {
	return "[object Object]" === c.call(e)
}

function h(e) {
	return "function" == typeof e
}

function g(e) {
	return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
}

function y(e) {
	return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
}
const w = /_(\w)/g,
	v = /[A-Z]/g;

function _(e) {
	return e.replace(w, (e, t) => t ? t.toUpperCase() : "")
}

function b(e) {
	return e.replace(v, e => "_" + e.toLowerCase())
}

function E(e, t) {
	let r, n;
	switch (t) {
		case "snake2camel":
			n = _, r = w;
			break;
		case "camel2snake":
			n = b, r = v
	}
	for (const i in e)
		if (p(e, i) && r.test(i)) {
			const r = n(i);
			e[r] = e[i], delete e[i], m(e[r]) ? e[r] = E(e[r], t) : Array.isArray(e[r]) && (e[r] = e[r].map(e => E(e,
				t)))
		} return e
}

function T(e) {
	return E(e, "snake2camel")
}

function C(e) {
	return E(e, "camel2snake")
}

function S(e) {
	return function(e, t = "-") {
		e = e || new Date;
		const r = [];
		return r.push(e.getFullYear()), r.push(("00" + (e.getMonth() + 1)).substr(-2)), r.push(("00" + e.getDate())
			.substr(-2)), r.join(t)
	}(e = e || new Date) + " " + function(e, t = ":") {
		e = e || new Date;
		const r = [];
		return r.push(("00" + e.getHours()).substr(-2)), r.push(("00" + e.getMinutes()).substr(-2)), r.push(("00" +
			e.getSeconds()).substr(-2)), r.join(t)
	}(e)
}

function I() {
	"development" === process.env.NODE_ENV && console.log(...arguments)
}

function x(e = 6) {
	let t = "";
	for (let r = 0; r < e; r++) t += Math.floor(10 * Math.random());
	return t
}

function A(e) {
	return Array.from(new Set(e))
}
const k = {
		PARAM_ERROR: {
			errCode: "param-error",
			errMsg: "{param}参数错误，{reason}"
		},
		PARAM_REQUIRED: {
			errCode: "param-required",
			errMsg: "{param}不可为空"
		},
		USER_NOT_EXIST: {
			errCode: "user-not-exist",
			errMsg: "用户不存在"
		},
		ROLE_NOT_EXIST: {
			errCode: "role-not-exist",
			errMsg: "角色不存在"
		},
		PERMISSION_NOT_EXIST: {
			errCode: "permission-not-exist",
			errMsg: "权限不存在"
		},
		MULTI_USER_MATCHED: {
			errCode: "multi-user-matched",
			errMsg: "匹配到多个账号"
		},
		ACCOUNT_ALREADY_REGISTED: {
			errCode: "account-already-registed",
			errMsg: "此{type}已注册"
		},
		ACCOUNT_NOT_REGISTED: {
			errCode: "account-not-registed",
			errMsg: "此{type}尚未注册"
		},
		ACCOUNT_already_BOUND: {
			errCode: "account-already-bound",
			errMsg: "此{type}已绑定"
		},
		UNBIND_FAILED: {
			errCode: "unbind-failed",
			errMsg: "解绑失败"
		},
		INVALID_INVITE_CODE: {
			errCode: "invalid-invite-code",
			errMsg: "邀请码无效"
		},
		SET_INVITE_CODE_FAILED: {
			errCode: "set-invite-code-failed",
			errMsg: "邀请码设置失败"
		},
		GET_THIRD_PARTY_ACCOUNT_FAILED: {
			errCode: "get-third-party-account-failed",
			errMsg: "获取{account}失败"
		}
	},
	R = {
		0: {
			errCode: 0,
			errMsg: ""
		},
		10001: {
			errCode: "account-banned",
			errMsg: "账号已禁用"
		},
		10002: k.USER_NOT_EXIST,
		10003: k.MULTI_USER_MATCHED,
		10102: {
			errCode: "password-error",
			errMsg: "密码错误"
		},
		10103: {
			errCode: "password-error-exceed-limit",
			errMsg: "密码错误次数过多"
		},
		10201: k.ACCOUNT_ALREADY_REGISTED,
		10202: k.ACCOUNT_NOT_REGISTED,
		10203: k.INVALID_INVITE_CODE,
		10301: k.ACCOUNT_ALREADY_REGISTED,
		10302: k.ACCOUNT_NOT_REGISTED,
		10401: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10501: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10601: k.ACCOUNT_ALREADY_REGISTED,
		10602: k.ACCOUNT_NOT_REGISTED,
		10701: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10702: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10703: k.ACCOUNT_ALREADY_REGISTED,
		10704: k.ACCOUNT_NOT_REGISTED,
		10705: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10706: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		20101: k.PARAM_REQUIRED,
		20102: k.ACCOUNT_ALREADY_REGISTED,
		30101: k.PARAM_REQUIRED,
		30201: {
			errCode: "check-device-feature-failed",
			errMsg: "设备特征校验未通过"
		},
		30202: {
			errCode: "token-not-exist",
			errMsg: "云端已不包含此token"
		},
		30203: {
			errCode: "token-expired",
			errMsg: "token已过期"
		},
		30204: {
			errCode: "check-token-failed",
			errMsg: "token校验未通过"
		},
		40201: k.USER_NOT_EXIST,
		40202: {
			errCode: "invalid-old-password",
			errMsg: "旧密码错误"
		},
		50101: k.PARAM_REQUIRED,
		50102: k.PARAM_ERROR,
		50201: k.PARAM_REQUIRED,
		50203: k.PARAM_ERROR,
		50202: {
			errCode: "invalid-verify-code",
			errMsg: "验证码错误或已失效"
		},
		50301: {
			errCode: "send-sms-code-failed",
			errMsg: "验证码发送失败"
		},
		60101: k.ACCOUNT_already_BOUND,
		60201: k.ACCOUNT_already_BOUND,
		60301: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		60302: k.ACCOUNT_already_BOUND,
		60401: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		60402: k.ACCOUNT_already_BOUND,
		70101: k.UNBIND_FAILED,
		70201: k.UNBIND_FAILED,
		70301: k.UNBIND_FAILED,
		70401: k.UNBIND_FAILED,
		80301: k.USER_NOT_EXIST,
		80401: k.SET_INVITE_CODE_FAILED,
		80402: k.SET_INVITE_CODE_FAILED,
		80501: k.INVALID_INVITE_CODE,
		80502: k.USER_NOT_EXIST,
		80503: {
			errCode: "modify-invite-code-is-not-allowed",
			errMsg: "邀请码不可修改"
		},
		80601: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80602: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80701: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80702: k.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80804: k.PARAM_REQUIRED,
		80805: k.PARAM_REQUIRED,
		80806: k.PARAM_REQUIRED,
		90001: {
			errCode: "database-operation-failed",
			errMsg: "数据库读写异常"
		},
		90002: k.PARAM_REQUIRED,
		90003: k.PARAM_ERROR,
		90004: k.USER_NOT_EXIST,
		90005: k.ROLE_NOT_EXIST,
		90006: k.PERMISSION_NOT_EXIST
	};
class O extends Error {
	constructor(e) {
		super(e.message), this.errMsg = e.message || "", Object.defineProperties(this, {
			message: {
				get() {
					return `errCode: ${e.code||""} | errMsg: ` + this.errMsg
				},
				set(e) {
					this.errMsg = e
				}
			}
		})
	}
}

function j(e = {}, t) {
	if (!t || !e) return e;
	const r = ["_pre", "_purify", "_post"];
	t._pre && (e = t._pre(e));
	let n = {
		shouldDelete: new Set([])
	};
	if (t._purify) {
		const e = t._purify;
		for (const t in e) e[t] = new Set(e[t]);
		n = Object.assign(n, e)
	}
	if (m(t))
		for (const i in t) {
			const o = t[i];
			h(o) && -1 === r.indexOf(i) ? e[i] = o(e) : "string" == typeof o && -1 === r.indexOf(i) && (e[i] = e[o], n
				.shouldDelete.add(o))
		} else h(t) && (e = t(e));
	if (n.shouldDelete)
		for (const t of n.shouldDelete) delete e[t];
	return t._post && (e = t._post(e)), e
}

function P(e, t) {
	const r = new e(t);
	return new Proxy(r, {
		get: function(e, t) {
			if ("function" == typeof e[t] && 0 !== t.indexOf("_") && e._protocols && e._protocols[t]) {
				const r = e._protocols[t];
				return async function(n) {
					n = j(n, r.args);
					let i = await e[t](n);
					return i = j(i, r.returnValue), i
				}
			}
			return e[t]
		}
	})
}

function D(e) {
	let t, r, n = e - Date.now(),
		i = "后";
	n < 0 && (i = "前", n = -n);
	const o = Math.floor(n / 1e3),
		s = Math.floor(o / 60),
		a = Math.floor(s / 60),
		c = Math.floor(a / 24),
		u = Math.floor(c / 30),
		d = Math.floor(u / 12);
	switch (!0) {
		case d > 0:
			t = d, r = "年";
			break;
		case u > 0:
			t = u, r = "月";
			break;
		case c > 0:
			t = c, r = "天";
			break;
		case a > 0:
			t = a, r = "小时";
			break;
		case s > 0:
			t = s, r = "分钟";
			break;
		default:
			t = o, r = "秒"
	}
	return `${t}${r}${i}`
}

function N(e) {
	if (m(e))
		if (0 === e.code) e.errCode = e.code, e.message = e.errMsg = e.msg, delete e.messageValues;
		else if (p(R, e.code)) {
		const t = R[e.code];
		e.errCode = "uni-id-" + t.errCode, e.errDetail = `${e.code}, ${e.msg}`, e.errMsg = function(e, t = {}) {
			const r = R[e];
			if (!r) throw new Error("unsupported error code: " + e);
			let n = r.errMsg;
			return Object.keys(t).forEach(e => {
				n = l(n, `{${e}}`, t[e])
			}), n
		}(e.code, e.messageValues || {}) || e.msg, e.message = e.msg = e.errMsg, delete e.messageValues
	} else e.code && console.warn(`error code not found, error code: ${e.code}, please contact us`)
}
const M = uniCloud.database(),
	V = M.collection("uni-id-users"),
	L = M.collection("opendb-verify-codes"),
	U = M.collection("uni-id-roles"),
	B = M.collection("uni-id-permissions"),
	$ = 90002,
	K = 90003,
	H = 90004,
	F = 90005;
async function q({
	name: e,
	url: t,
	data: r,
	options: n,
	defaultOptions: i
}) {
	let o = {};
	const s = C(Object.assign({}, r));
	s && s.access_token && delete s.access_token;
	try {
		n = Object.assign({}, i, n, {
			data: s
		}), o = await uniCloud.httpclient.request(t, n)
	} catch (t) {
		return function(e, t) {
			throw new O({
				code: t.code || -2,
				message: t.message || e + " fail"
			})
		}(e, t)
	}
	let a = o.data;
	const c = o.headers["content-type"];
	if (!Buffer.isBuffer(a) || 0 !== c.indexOf("text/plain") && 0 !== c.indexOf("application/json")) Buffer
		.isBuffer(a) && (a = {
			buffer: a,
			contentType: c
		});
	else try {
		a = JSON.parse(a.toString())
	} catch (e) {
		a = a.toString()
	}
	return T(function(e, t) {
		if (t.errcode) throw new O({
			code: t.errcode || -2,
			message: t.errmsg || e + " fail"
		});
		return delete t.errcode, delete t.errmsg, {
			...t,
			errMsg: e + " ok",
			errCode: 0
		}
	}(e, a || {
		errCode: -2,
		errMsg: "Request failed"
	}))
}

function G(e, t) {
	let r = "";
	if (t && t.accessToken) {
		r = `${e.indexOf("?")>-1?"&":"?"}access_token=${t.accessToken}`
	}
	return `${e}${r}`
}
class Y {
	constructor(e) {
		this.options = Object.assign({
			baseUrl: "https://api.weixin.qq.com",
			timeout: 5e3
		}, e)
	}
	async _requestWxOpenapi({
		name: e,
		url: t,
		data: r,
		options: n
	}) {
		const i = {
			method: "GET",
			dataType: "json",
			dataAsQueryString: !0,
			timeout: this.options.timeout
		};
		return await q({
			name: "auth." + e,
			url: `${this.options.baseUrl}${G(t,r)}`,
			data: r,
			options: n,
			defaultOptions: i
		})
	}
	async code2Session(e) {
		return await this._requestWxOpenapi({
			name: "code2Session",
			url: "/sns/jscode2session",
			data: {
				grant_type: "authorization_code",
				appid: this.options.appId,
				secret: this.options.secret,
				js_code: e
			}
		})
	}
	async getOauthAccessToken(e) {
		const t = await this._requestWxOpenapi({
			name: "getOauthAccessToken",
			url: "/sns/oauth2/access_token",
			data: {
				grant_type: "authorization_code",
				appid: this.options.appId,
				secret: this.options.secret,
				code: e
			}
		});
		return t.expiresIn && (t.expired = Date.now() + t.expiresIn), t
	}
}
const J = {
	RSA: "RSA-SHA1",
	RSA2: "RSA-SHA256"
};
var z = {
	code2Session: {
		returnValue: {
			openid: "userId"
		}
	}
};
class W extends class {
	constructor(e = {}) {
		if (!e.appId) throw new Error("appId required");
		if (!e.privateKey) throw new Error("privateKey required");
		const t = {
			gateway: "https://openapi.alipay.com/gateway.do",
			timeout: 5e3,
			charset: "utf-8",
			version: "1.0",
			signType: "RSA2",
			timeOffset: -(new Date).getTimezoneOffset() / 60,
			keyType: "PKCS8"
		};
		e.sandbox && (e.gateway = "https://openapi.alipaydev.com/gateway.do"), this.options = Object.assign({}, t,
			e);
		const r = "PKCS8" === this.options.keyType ? "PRIVATE KEY" : "RSA PRIVATE KEY";
		this.options.privateKey = this._formatKey(this.options.privateKey, r), this.options.alipayPublicKey && (this
			.options.alipayPublicKey = this._formatKey(this.options.alipayPublicKey, "PUBLIC KEY"))
	}
	_formatKey(e, t) {
		return `-----BEGIN ${t}-----\n${e}\n-----END ${t}-----`
	}
	_formatUrl(e, t) {
		let r = e;
		const n = ["app_id", "method", "format", "charset", "sign_type", "sign", "timestamp", "version",
			"notify_url", "return_url", "auth_token", "app_auth_token"
		];
		for (const e in t)
			if (n.indexOf(e) > -1) {
				const n = encodeURIComponent(t[e]);
				r = `${r}${r.includes("?")?"&":"?"}${e}=${n}`, delete t[e]
			} return {
			execParams: t,
			url: r
		}
	}
	_getSign(e, t) {
		const r = t.bizContent || null;
		delete t.bizContent;
		const i = Object.assign({
			method: e,
			appId: this.options.appId,
			charset: this.options.charset,
			version: this.options.version,
			signType: this.options.signType,
			timestamp: S((o = this.options.timeOffset, new Date(Date.now() + 6e4 * ((new Date)
				.getTimezoneOffset() + 60 * (o || 0)))))
		}, t);
		var o;
		r && (i.bizContent = JSON.stringify(C(r)));
		const s = C(i),
			a = Object.keys(s).sort().map(e => {
				let t = s[e];
				return "[object String]" !== Array.prototype.toString.call(t) && (t = JSON.stringify(t)),
					`${e}=${t}`
			}).join("&"),
			c = n.createSign(J[this.options.signType]).update(a, "utf8").sign(this.options.privateKey, "base64");
		return Object.assign(s, {
			sign: c
		})
	}
	async _exec(e, t = {}, r = {}) {
		const n = this._getSign(e, t),
			{
				url: i,
				execParams: o
			} = this._formatUrl(this.options.gateway, n),
			{
				status: s,
				data: a
			} = await uniCloud.httpclient.request(i, {
				method: "POST",
				data: o,
				dataType: "text",
				timeout: this.options.timeout
			});
		if (200 !== s) throw new Error("request fail");
		const c = JSON.parse(a),
			u = e.replace(/\./g, "_") + "_response",
			d = c[u],
			f = c.error_response;
		if (d) {
			if (!r.validateSign || this._checkResponseSign(a, u)) {
				if (!d.code || "10000" === d.code) {
					return {
						errCode: 0,
						errMsg: d.msg || "",
						...T(d)
					}
				}
				const e = d.sub_code ? `${d.sub_code} ${d.sub_msg}` : "" + (d.msg || "unkonwn error");
				throw new Error(e)
			}
			throw new Error("返回结果签名错误")
		}
		if (f) throw new Error(f.sub_msg || f.msg || "接口返回错误");
		throw new Error("request fail")
	}
	_checkResponseSign(e, t) {
		if (!this.options.alipayPublicKey || "" === this.options.alipayPublicKey) return console.warn(
			"options.alipayPublicKey is empty"), !0;
		if (!e) return !1;
		const r = this._getSignStr(e, t),
			i = JSON.parse(e).sign,
			o = n.createVerify(J[this.options.signType]);
		return o.update(r, "utf8"), o.verify(this.options.alipayPublicKey, i, "base64")
	}
	_getSignStr(e, t) {
		let r = e.trim();
		const n = e.indexOf(t + '"'),
			i = e.lastIndexOf('"sign"');
		return r = r.substr(n + t.length + 1), r = r.substr(0, i), r = r.replace(/^[^{]*{/g, "{"), r = r.replace(
			/\}([^}]*)$/g, "}"), r
	}
	_notifyRSACheck(e, t, r) {
		const i = Object.keys(e).sort().filter(e => e).map(t => {
			let r = e[t];
			return "[object String]" !== Array.prototype.toString.call(r) && (r = JSON.stringify(r)),
				`${t}=${decodeURIComponent(r)}`
		}).join("&");
		return n.createVerify(J[r]).update(i, "utf8").verify(this.options.alipayPublicKey, t, "base64")
	}
	_checkNotifySign(e) {
		const t = e.sign;
		if (!this.options.alipayPublicKey || !t) return !1;
		const r = e.sign_type || this.options.signType || "RSA2",
			n = {
				...e
			};
		delete n.sign, n.sign_type = r;
		return !!this._notifyRSACheck(n, t, r) || (delete n.sign_type, this._notifyRSACheck(n, t, r))
	}
	_verifyNotify(e) {
		if (!e.headers) throw new Error("通知格式不正确");
		let t;
		for (const r in e.headers) "content-type" === r.toLowerCase() && (t = e.headers[r]);
		if (!1 !== e.isBase64Encoded && -1 === t.indexOf("application/x-www-form-urlencoded")) throw new Error(
			"通知格式不正确");
		const r = i.parse(e.body);
		if (this._checkNotifySign(r)) return T(r);
		throw new Error("通知验签未通过")
	}
} {
	constructor(e) {
		super(e), this._protocols = z
	}
	async code2Session(e) {
		return await this._exec("alipay.system.oauth.token", {
			grantType: "authorization_code",
			code: e
		})
	}
}

function X(e) {
	var t = e[0];
	return t < "0" || t > "7" ? "00" + e : e
}

function Q(e) {
	var t = e.toString(16);
	return t.length % 2 ? "0" + t : t
}

function Z(e) {
	if (e <= 127) return Q(e);
	var t = Q(e);
	return Q(128 + t.length / 2) + t
}

function ee(e, t) {
	return e(t = {
		exports: {}
	}, t.exports), t.exports
}
var te = ee((function(e, t) {
		var r = o.Buffer;

		function n(e, t) {
			for (var r in e) t[r] = e[r]
		}

		function i(e, t, n) {
			return r(e, t, n)
		}
		r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = o : (n(o, t), t.Buffer = i), i
			.prototype = Object.create(r.prototype), n(r, i), i.from = function(e, t, n) {
				if ("number" == typeof e) throw new TypeError("Argument must not be a number");
				return r(e, t, n)
			}, i.alloc = function(e, t, n) {
				if ("number" != typeof e) throw new TypeError("Argument must be a number");
				var i = r(e);
				return void 0 !== t ? "string" == typeof n ? i.fill(t, n) : i.fill(t) : i.fill(0), i
			}, i.allocUnsafe = function(e) {
				if ("number" != typeof e) throw new TypeError("Argument must be a number");
				return r(e)
			}, i.allocUnsafeSlow = function(e) {
				if ("number" != typeof e) throw new TypeError("Argument must be a number");
				return o.SlowBuffer(e)
			}
	})),
	re = (te.Buffer, te.Buffer);

function ne(e) {
	if (this.buffer = null, this.writable = !0, this.readable = !0, !e) return this.buffer = re.alloc(0), this;
	if ("function" == typeof e.pipe) return this.buffer = re.alloc(0), e.pipe(this), this;
	if (e.length || "object" == typeof e) return this.buffer = e, this.writable = !1, process.nextTick(function() {
		this.emit("end", e), this.readable = !1, this.emit("close")
	}.bind(this)), this;
	throw new TypeError("Unexpected data type (" + typeof e + ")")
}
a.inherits(ne, s), ne.prototype.write = function(e) {
	this.buffer = re.concat([this.buffer, re.from(e)]), this.emit("data", e)
}, ne.prototype.end = function(e) {
	e && this.write(e), this.emit("end", e), this.emit("close"), this.writable = !1, this.readable = !1
};
var ie = ne,
	oe = o.Buffer,
	se = o.SlowBuffer,
	ae = ce;

function ce(e, t) {
	if (!oe.isBuffer(e) || !oe.isBuffer(t)) return !1;
	if (e.length !== t.length) return !1;
	for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n];
	return 0 === r
}
ce.install = function() {
	oe.prototype.equal = se.prototype.equal = function(e) {
		return ce(this, e)
	}
};
var ue = oe.prototype.equal,
	de = se.prototype.equal;

function fe(e) {
	return (e / 8 | 0) + (e % 8 == 0 ? 0 : 1)
}
ce.restore = function() {
	oe.prototype.equal = ue, se.prototype.equal = de
};
var le = {
	ES256: fe(256),
	ES384: fe(384),
	ES512: fe(521)
};
var pe = function(e) {
		var t = le[e];
		if (t) return t;
		throw new Error('Unknown algorithm "' + e + '"')
	},
	me = te.Buffer;

function he(e) {
	if (me.isBuffer(e)) return e;
	if ("string" == typeof e) return me.from(e, "base64");
	throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")
}

function ge(e, t, r) {
	for (var n = 0; t + n < r && 0 === e[t + n];) ++n;
	return e[t + n] >= 128 && --n, n
}
var ye = {
		derToJose: function(e, t) {
			e = he(e);
			var r = pe(t),
				n = r + 1,
				i = e.length,
				o = 0;
			if (48 !== e[o++]) throw new Error('Could not find expected "seq"');
			var s = e[o++];
			if (129 === s && (s = e[o++]), i - o < s) throw new Error('"seq" specified length of "' + s +
				'", only "' + (i - o) + '" remaining');
			if (2 !== e[o++]) throw new Error('Could not find expected "int" for "r"');
			var a = e[o++];
			if (i - o - 2 < a) throw new Error('"r" specified length of "' + a + '", only "' + (i - o - 2) +
				'" available');
			if (n < a) throw new Error('"r" specified length of "' + a + '", max of "' + n + '" is acceptable');
			var c = o;
			if (o += a, 2 !== e[o++]) throw new Error('Could not find expected "int" for "s"');
			var u = e[o++];
			if (i - o !== u) throw new Error('"s" specified length of "' + u + '", expected "' + (i - o) + '"');
			if (n < u) throw new Error('"s" specified length of "' + u + '", max of "' + n + '" is acceptable');
			var d = o;
			if ((o += u) !== i) throw new Error('Expected to consume entire buffer, but "' + (i - o) +
				'" bytes remain');
			var f = r - a,
				l = r - u,
				p = me.allocUnsafe(f + a + l + u);
			for (o = 0; o < f; ++o) p[o] = 0;
			e.copy(p, o, c + Math.max(-f, 0), c + a);
			for (var m = o = r; o < m + l; ++o) p[o] = 0;
			return e.copy(p, o, d + Math.max(-l, 0), d + u), p = (p = p.toString("base64")).replace(/=/g, "")
				.replace(/\+/g, "-").replace(/\//g, "_")
		},
		joseToDer: function(e, t) {
			e = he(e);
			var r = pe(t),
				n = e.length;
			if (n !== 2 * r) throw new TypeError('"' + t + '" signatures must be "' + 2 * r + '" bytes, saw "' + n +
				'"');
			var i = ge(e, 0, r),
				o = ge(e, r, e.length),
				s = r - i,
				a = r - o,
				c = 2 + s + 1 + 1 + a,
				u = c < 128,
				d = me.allocUnsafe((u ? 2 : 3) + c),
				f = 0;
			return d[f++] = 48, u ? d[f++] = c : (d[f++] = 129, d[f++] = 255 & c), d[f++] = 2, d[f++] = s, i < 0 ? (
					d[f++] = 0, f += e.copy(d, f, 0, r)) : f += e.copy(d, f, i, r), d[f++] = 2, d[f++] = a, o < 0 ?
				(d[f++] = 0, e.copy(d, f, r)) : e.copy(d, f, r + o), d
		}
	},
	we = te.Buffer,
	ve = "secret must be a string or buffer",
	_e = "key must be a string or a buffer",
	be = "function" == typeof n.createPublicKey;

function Ee(e) {
	if (!we.isBuffer(e) && "string" != typeof e) {
		if (!be) throw Ie(_e);
		if ("object" != typeof e) throw Ie(_e);
		if ("string" != typeof e.type) throw Ie(_e);
		if ("string" != typeof e.asymmetricKeyType) throw Ie(_e);
		if ("function" != typeof e.export) throw Ie(_e)
	}
}

function Te(e) {
	if (!we.isBuffer(e) && "string" != typeof e && "object" != typeof e) throw Ie(
		"key must be a string, a buffer or an object")
}

function Ce(e) {
	return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function Se(e) {
	var t = 4 - (e = e.toString()).length % 4;
	if (4 !== t)
		for (var r = 0; r < t; ++r) e += "=";
	return e.replace(/\-/g, "+").replace(/_/g, "/")
}

function Ie(e) {
	var t = [].slice.call(arguments, 1),
		r = a.format.bind(a, e).apply(null, t);
	return new TypeError(r)
}

function xe(e) {
	var t;
	return t = e, we.isBuffer(t) || "string" == typeof t || (e = JSON.stringify(e)), e
}

function Ae(e) {
	return function(t, r) {
		! function(e) {
			if (!we.isBuffer(e)) {
				if ("string" == typeof e) return e;
				if (!be) throw Ie(ve);
				if ("object" != typeof e) throw Ie(ve);
				if ("secret" !== e.type) throw Ie(ve);
				if ("function" != typeof e.export) throw Ie(ve)
			}
		}(r), t = xe(t);
		var i = n.createHmac("sha" + e, r);
		return Ce((i.update(t), i.digest("base64")))
	}
}

function ke(e) {
	return function(t, r, n) {
		var i = Ae(e)(t, n);
		return ae(we.from(r), we.from(i))
	}
}

function Re(e) {
	return function(t, r) {
		Te(r), t = xe(t);
		var i = n.createSign("RSA-SHA" + e);
		return Ce((i.update(t), i.sign(r, "base64")))
	}
}

function Oe(e) {
	return function(t, r, i) {
		Ee(i), t = xe(t), r = Se(r);
		var o = n.createVerify("RSA-SHA" + e);
		return o.update(t), o.verify(i, r, "base64")
	}
}

function je(e) {
	return function(t, r) {
		Te(r), t = xe(t);
		var i = n.createSign("RSA-SHA" + e);
		return Ce((i.update(t), i.sign({
			key: r,
			padding: n.constants.RSA_PKCS1_PSS_PADDING,
			saltLength: n.constants.RSA_PSS_SALTLEN_DIGEST
		}, "base64")))
	}
}

function Pe(e) {
	return function(t, r, i) {
		Ee(i), t = xe(t), r = Se(r);
		var o = n.createVerify("RSA-SHA" + e);
		return o.update(t), o.verify({
			key: i,
			padding: n.constants.RSA_PKCS1_PSS_PADDING,
			saltLength: n.constants.RSA_PSS_SALTLEN_DIGEST
		}, r, "base64")
	}
}

function De(e) {
	var t = Re(e);
	return function() {
		var r = t.apply(null, arguments);
		return r = ye.derToJose(r, "ES" + e)
	}
}

function Ne(e) {
	var t = Oe(e);
	return function(r, n, i) {
		return n = ye.joseToDer(n, "ES" + e).toString("base64"), t(r, n, i)
	}
}

function Me() {
	return function() {
		return ""
	}
}

function Ve() {
	return function(e, t) {
		return "" === t
	}
}
be && (_e += " or a KeyObject", ve += "or a KeyObject");
var Le = function(e) {
		var t = {
				hs: Ae,
				rs: Re,
				ps: je,
				es: De,
				none: Me
			},
			r = {
				hs: ke,
				rs: Oe,
				ps: Pe,
				es: Ne,
				none: Ve
			},
			n = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
		if (!n) throw Ie(
			'"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".',
			e);
		var i = (n[1] || n[3]).toLowerCase(),
			o = n[2];
		return {
			sign: t[i](o),
			verify: r[i](o)
		}
	},
	Ue = o.Buffer,
	Be = function(e) {
		return "string" == typeof e ? e : "number" == typeof e || Ue.isBuffer(e) ? e.toString() : JSON.stringify(e)
	},
	$e = te.Buffer;

function Ke(e, t) {
	return $e.from(e, t).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function He(e) {
	var t = e.header,
		r = e.payload,
		n = e.secret || e.privateKey,
		i = e.encoding,
		o = Le(t.alg),
		s = function(e, t, r) {
			r = r || "utf8";
			var n = Ke(Be(e), "binary"),
				i = Ke(Be(t), r);
			return a.format("%s.%s", n, i)
		}(t, r, i),
		c = o.sign(s, n);
	return a.format("%s.%s", s, c)
}

function Fe(e) {
	var t = e.secret || e.privateKey || e.key,
		r = new ie(t);
	this.readable = !0, this.header = e.header, this.encoding = e.encoding, this.secret = this.privateKey = this.key =
		r, this.payload = new ie(e.payload), this.secret.once("close", function() {
			!this.payload.writable && this.readable && this.sign()
		}.bind(this)), this.payload.once("close", function() {
			!this.secret.writable && this.readable && this.sign()
		}.bind(this))
}
a.inherits(Fe, s), Fe.prototype.sign = function() {
	try {
		var e = He({
			header: this.header,
			payload: this.payload.buffer,
			secret: this.secret.buffer,
			encoding: this.encoding
		});
		return this.emit("done", e), this.emit("data", e), this.emit("end"), this.readable = !1, e
	} catch (e) {
		this.readable = !1, this.emit("error", e), this.emit("close")
	}
}, Fe.sign = He;
var qe = Fe,
	Ge = te.Buffer,
	Ye = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

function Je(e) {
	if (function(e) {
			return "[object Object]" === Object.prototype.toString.call(e)
		}(e)) return e;
	try {
		return JSON.parse(e)
	} catch (e) {
		return
	}
}

function ze(e) {
	var t = e.split(".", 1)[0];
	return Je(Ge.from(t, "base64").toString("binary"))
}

function We(e) {
	return e.split(".")[2]
}

function Xe(e) {
	return Ye.test(e) && !!ze(e)
}

function Qe(e, t, r) {
	if (!t) {
		var n = new Error("Missing algorithm parameter for jws.verify");
		throw n.code = "MISSING_ALGORITHM", n
	}
	var i = We(e = Be(e)),
		o = function(e) {
			return e.split(".", 2).join(".")
		}(e);
	return Le(t).verify(o, i, r)
}

function Ze(e, t) {
	if (t = t || {}, !Xe(e = Be(e))) return null;
	var r = ze(e);
	if (!r) return null;
	var n = function(e, t) {
		t = t || "utf8";
		var r = e.split(".")[1];
		return Ge.from(r, "base64").toString(t)
	}(e);
	return ("JWT" === r.typ || t.json) && (n = JSON.parse(n, t.encoding)), {
		header: r,
		payload: n,
		signature: We(e)
	}
}

function et(e) {
	var t = (e = e || {}).secret || e.publicKey || e.key,
		r = new ie(t);
	this.readable = !0, this.algorithm = e.algorithm, this.encoding = e.encoding, this.secret = this.publicKey = this
		.key = r, this.signature = new ie(e.signature), this.secret.once("close", function() {
			!this.signature.writable && this.readable && this.verify()
		}.bind(this)), this.signature.once("close", function() {
			!this.secret.writable && this.readable && this.verify()
		}.bind(this))
}
a.inherits(et, s), et.prototype.verify = function() {
	try {
		var e = Qe(this.signature.buffer, this.algorithm, this.key.buffer),
			t = Ze(this.signature.buffer, this.encoding);
		return this.emit("done", e, t), this.emit("data", e), this.emit("end"), this.readable = !1, e
	} catch (e) {
		this.readable = !1, this.emit("error", e), this.emit("close")
	}
}, et.decode = Ze, et.isValid = Xe, et.verify = Qe;
var tt = et,
	rt = {
		ALGORITHMS: ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384",
			"ES512"
		],
		sign: qe.sign,
		verify: tt.verify,
		decode: tt.decode,
		isValid: tt.isValid,
		createSign: function(e) {
			return new qe(e)
		},
		createVerify: function(e) {
			return new tt(e)
		}
	},
	nt = function(e, t) {
		t = t || {};
		var r = rt.decode(e, t);
		if (!r) return null;
		var n = r.payload;
		if ("string" == typeof n) try {
			var i = JSON.parse(n);
			null !== i && "object" == typeof i && (n = i)
		} catch (e) {}
		return !0 === t.complete ? {
			header: r.header,
			payload: n,
			signature: r.signature
		} : n
	},
	it = function(e, t) {
		Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name =
			"JsonWebTokenError", this.message = e, t && (this.inner = t)
	};
(it.prototype = Object.create(Error.prototype)).constructor = it;
var ot = it,
	st = function(e, t) {
		ot.call(this, e), this.name = "NotBeforeError", this.date = t
	};
(st.prototype = Object.create(ot.prototype)).constructor = st;
var at = st,
	ct = function(e, t) {
		ot.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t
	};
(ct.prototype = Object.create(ot.prototype)).constructor = ct;
var ut = ct,
	dt = 1e3,
	ft = 60 * dt,
	lt = 60 * ft,
	pt = 24 * lt,
	mt = function(e, t) {
		t = t || {};
		var r = typeof e;
		if ("string" === r && e.length > 0) return function(e) {
			if ((e = String(e)).length > 100) return;
			var t =
				/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
				.exec(e);
			if (!t) return;
			var r = parseFloat(t[1]);
			switch ((t[2] || "ms").toLowerCase()) {
				case "years":
				case "year":
				case "yrs":
				case "yr":
				case "y":
					return 315576e5 * r;
				case "weeks":
				case "week":
				case "w":
					return 6048e5 * r;
				case "days":
				case "day":
				case "d":
					return r * pt;
				case "hours":
				case "hour":
				case "hrs":
				case "hr":
				case "h":
					return r * lt;
				case "minutes":
				case "minute":
				case "mins":
				case "min":
				case "m":
					return r * ft;
				case "seconds":
				case "second":
				case "secs":
				case "sec":
				case "s":
					return r * dt;
				case "milliseconds":
				case "millisecond":
				case "msecs":
				case "msec":
				case "ms":
					return r;
				default:
					return
			}
		}(e);
		if ("number" === r && isFinite(e)) return t.long ? function(e) {
			var t = Math.abs(e);
			if (t >= pt) return ht(e, t, pt, "day");
			if (t >= lt) return ht(e, t, lt, "hour");
			if (t >= ft) return ht(e, t, ft, "minute");
			if (t >= dt) return ht(e, t, dt, "second");
			return e + " ms"
		}(e) : function(e) {
			var t = Math.abs(e);
			if (t >= pt) return Math.round(e / pt) + "d";
			if (t >= lt) return Math.round(e / lt) + "h";
			if (t >= ft) return Math.round(e / ft) + "m";
			if (t >= dt) return Math.round(e / dt) + "s";
			return e + "ms"
		}(e);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
	};

function ht(e, t, r, n) {
	var i = t >= 1.5 * r;
	return Math.round(e / r) + " " + n + (i ? "s" : "")
}
var gt = function(e, t) {
		var r = t || Math.floor(Date.now() / 1e3);
		if ("string" == typeof e) {
			var n = mt(e);
			if (void 0 === n) return;
			return Math.floor(r + n / 1e3)
		}
		return "number" == typeof e ? r + e : void 0
	},
	yt = ee((function(e, t) {
		var r;
		t = e.exports = G, r = "object" == typeof process && process.env && process.env.NODE_DEBUG &&
			/\bsemver\b/i.test(process.env.NODE_DEBUG) ? function() {
				var e = Array.prototype.slice.call(arguments, 0);
				e.unshift("SEMVER"), console.log.apply(console, e)
			} : function() {}, t.SEMVER_SPEC_VERSION = "2.0.0";
		var n = Number.MAX_SAFE_INTEGER || 9007199254740991,
			i = t.re = [],
			o = t.src = [],
			s = 0,
			a = s++;
		o[a] = "0|[1-9]\\d*";
		var c = s++;
		o[c] = "[0-9]+";
		var u = s++;
		o[u] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
		var d = s++;
		o[d] = "(" + o[a] + ")\\.(" + o[a] + ")\\.(" + o[a] + ")";
		var f = s++;
		o[f] = "(" + o[c] + ")\\.(" + o[c] + ")\\.(" + o[c] + ")";
		var l = s++;
		o[l] = "(?:" + o[a] + "|" + o[u] + ")";
		var p = s++;
		o[p] = "(?:" + o[c] + "|" + o[u] + ")";
		var m = s++;
		o[m] = "(?:-(" + o[l] + "(?:\\." + o[l] + ")*))";
		var h = s++;
		o[h] = "(?:-?(" + o[p] + "(?:\\." + o[p] + ")*))";
		var g = s++;
		o[g] = "[0-9A-Za-z-]+";
		var y = s++;
		o[y] = "(?:\\+(" + o[g] + "(?:\\." + o[g] + ")*))";
		var w = s++,
			v = "v?" + o[d] + o[m] + "?" + o[y] + "?";
		o[w] = "^" + v + "$";
		var _ = "[v=\\s]*" + o[f] + o[h] + "?" + o[y] + "?",
			b = s++;
		o[b] = "^" + _ + "$";
		var E = s++;
		o[E] = "((?:<|>)?=?)";
		var T = s++;
		o[T] = o[c] + "|x|X|\\*";
		var C = s++;
		o[C] = o[a] + "|x|X|\\*";
		var S = s++;
		o[S] = "[v=\\s]*(" + o[C] + ")(?:\\.(" + o[C] + ")(?:\\.(" + o[C] + ")(?:" + o[m] + ")?" + o[y] +
			"?)?)?";
		var I = s++;
		o[I] = "[v=\\s]*(" + o[T] + ")(?:\\.(" + o[T] + ")(?:\\.(" + o[T] + ")(?:" + o[h] + ")?" + o[y] +
			"?)?)?";
		var x = s++;
		o[x] = "^" + o[E] + "\\s*" + o[S] + "$";
		var A = s++;
		o[A] = "^" + o[E] + "\\s*" + o[I] + "$";
		var k = s++;
		o[k] = "(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
		var R = s++;
		o[R] = "(?:~>?)";
		var O = s++;
		o[O] = "(\\s*)" + o[R] + "\\s+", i[O] = new RegExp(o[O], "g");
		var j = s++;
		o[j] = "^" + o[R] + o[S] + "$";
		var P = s++;
		o[P] = "^" + o[R] + o[I] + "$";
		var D = s++;
		o[D] = "(?:\\^)";
		var N = s++;
		o[N] = "(\\s*)" + o[D] + "\\s+", i[N] = new RegExp(o[N], "g");
		var M = s++;
		o[M] = "^" + o[D] + o[S] + "$";
		var V = s++;
		o[V] = "^" + o[D] + o[I] + "$";
		var L = s++;
		o[L] = "^" + o[E] + "\\s*(" + _ + ")$|^$";
		var U = s++;
		o[U] = "^" + o[E] + "\\s*(" + v + ")$|^$";
		var B = s++;
		o[B] = "(\\s*)" + o[E] + "\\s*(" + _ + "|" + o[S] + ")", i[B] = new RegExp(o[B], "g");
		var $ = s++;
		o[$] = "^\\s*(" + o[S] + ")\\s+-\\s+(" + o[S] + ")\\s*$";
		var K = s++;
		o[K] = "^\\s*(" + o[I] + ")\\s+-\\s+(" + o[I] + ")\\s*$";
		var H = s++;
		o[H] = "(<|>)?=?\\s*\\*";
		for (var F = 0; F < 35; F++) r(F, o[F]), i[F] || (i[F] = new RegExp(o[F]));

		function q(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof G) return e;
			if ("string" != typeof e) return null;
			if (e.length > 256) return null;
			if (!(t.loose ? i[b] : i[w]).test(e)) return null;
			try {
				return new G(e, t)
			} catch (e) {
				return null
			}
		}

		function G(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof G) {
				if (e.loose === t.loose) return e;
				e = e.version
			} else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
			if (e.length > 256) throw new TypeError("version is longer than 256 characters");
			if (!(this instanceof G)) return new G(e, t);
			r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
			var o = e.trim().match(t.loose ? i[b] : i[w]);
			if (!o) throw new TypeError("Invalid Version: " + e);
			if (this.raw = e, this.major = +o[1], this.minor = +o[2], this.patch = +o[3], this.major > n || this
				.major < 0) throw new TypeError("Invalid major version");
			if (this.minor > n || this.minor < 0) throw new TypeError("Invalid minor version");
			if (this.patch > n || this.patch < 0) throw new TypeError("Invalid patch version");
			o[4] ? this.prerelease = o[4].split(".").map((function(e) {
				if (/^[0-9]+$/.test(e)) {
					var t = +e;
					if (t >= 0 && t < n) return t
				}
				return e
			})) : this.prerelease = [], this.build = o[5] ? o[5].split(".") : [], this.format()
		}
		t.parse = q, t.valid = function(e, t) {
			var r = q(e, t);
			return r ? r.version : null
		}, t.clean = function(e, t) {
			var r = q(e.trim().replace(/^[=v]+/, ""), t);
			return r ? r.version : null
		}, t.SemVer = G, G.prototype.format = function() {
			return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease
				.length && (this.version += "-" + this.prerelease.join(".")), this.version
		}, G.prototype.toString = function() {
			return this.version
		}, G.prototype.compare = function(e) {
			return r("SemVer.compare", this.version, this.options, e), e instanceof G || (e = new G(e, this
				.options)), this.compareMain(e) || this.comparePre(e)
		}, G.prototype.compareMain = function(e) {
			return e instanceof G || (e = new G(e, this.options)), J(this.major, e.major) || J(this.minor, e
				.minor) || J(this.patch, e.patch)
		}, G.prototype.comparePre = function(e) {
			if (e instanceof G || (e = new G(e, this.options)), this.prerelease.length && !e.prerelease
				.length) return -1;
			if (!this.prerelease.length && e.prerelease.length) return 1;
			if (!this.prerelease.length && !e.prerelease.length) return 0;
			var t = 0;
			do {
				var n = this.prerelease[t],
					i = e.prerelease[t];
				if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
				if (void 0 === i) return 1;
				if (void 0 === n) return -1;
				if (n !== i) return J(n, i)
			} while (++t)
		}, G.prototype.inc = function(e, t) {
			switch (e) {
				case "premajor":
					this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc(
						"pre", t);
					break;
				case "preminor":
					this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
					break;
				case "prepatch":
					this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
					break;
				case "prerelease":
					0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
					break;
				case "major":
					0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
						this.minor = 0, this.patch = 0, this.prerelease = [];
					break;
				case "minor":
					0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this
						.prerelease = [];
					break;
				case "patch":
					0 === this.prerelease.length && this.patch++, this.prerelease = [];
					break;
				case "pre":
					if (0 === this.prerelease.length) this.prerelease = [0];
					else {
						for (var r = this.prerelease.length; --r >= 0;) "number" == typeof this.prerelease[
							r] && (this.prerelease[r]++, r = -2); - 1 === r && this.prerelease.push(0)
					}
					t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t,
						0]) : this.prerelease = [t, 0]);
					break;
				default:
					throw new Error("invalid increment argument: " + e)
			}
			return this.format(), this.raw = this.version, this
		}, t.inc = function(e, t, r, n) {
			"string" == typeof r && (n = r, r = void 0);
			try {
				return new G(e, r).inc(t, n).version
			} catch (e) {
				return null
			}
		}, t.diff = function(e, t) {
			if (Q(e, t)) return null;
			var r = q(e),
				n = q(t),
				i = "";
			if (r.prerelease.length || n.prerelease.length) {
				i = "pre";
				var o = "prerelease"
			}
			for (var s in r)
				if (("major" === s || "minor" === s || "patch" === s) && r[s] !== n[s]) return i + s;
			return o
		}, t.compareIdentifiers = J;
		var Y = /^[0-9]+$/;

		function J(e, t) {
			var r = Y.test(e),
				n = Y.test(t);
			return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
		}

		function z(e, t, r) {
			return new G(e, r).compare(new G(t, r))
		}

		function W(e, t, r) {
			return z(e, t, r) > 0
		}

		function X(e, t, r) {
			return z(e, t, r) < 0
		}

		function Q(e, t, r) {
			return 0 === z(e, t, r)
		}

		function Z(e, t, r) {
			return 0 !== z(e, t, r)
		}

		function ee(e, t, r) {
			return z(e, t, r) >= 0
		}

		function te(e, t, r) {
			return z(e, t, r) <= 0
		}

		function re(e, t, r, n) {
			switch (t) {
				case "===":
					return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version),
						e === r;
				case "!==":
					return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version),
						e !== r;
				case "":
				case "=":
				case "==":
					return Q(e, r, n);
				case "!=":
					return Z(e, r, n);
				case ">":
					return W(e, r, n);
				case ">=":
					return ee(e, r, n);
				case "<":
					return X(e, r, n);
				case "<=":
					return te(e, r, n);
				default:
					throw new TypeError("Invalid operator: " + t)
			}
		}

		function ne(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof ne) {
				if (e.loose === !!t.loose) return e;
				e = e.value
			}
			if (!(this instanceof ne)) return new ne(e, t);
			r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === ie ?
				this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
		}
		t.rcompareIdentifiers = function(e, t) {
			return J(t, e)
		}, t.major = function(e, t) {
			return new G(e, t).major
		}, t.minor = function(e, t) {
			return new G(e, t).minor
		}, t.patch = function(e, t) {
			return new G(e, t).patch
		}, t.compare = z, t.compareLoose = function(e, t) {
			return z(e, t, !0)
		}, t.rcompare = function(e, t, r) {
			return z(t, e, r)
		}, t.sort = function(e, r) {
			return e.sort((function(e, n) {
				return t.compare(e, n, r)
			}))
		}, t.rsort = function(e, r) {
			return e.sort((function(e, n) {
				return t.rcompare(e, n, r)
			}))
		}, t.gt = W, t.lt = X, t.eq = Q, t.neq = Z, t.gte = ee, t.lte = te, t.cmp = re, t.Comparator = ne;
		var ie = {};

		function oe(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof oe) return e.loose === !!t.loose && e.includePrerelease === !!t
				.includePrerelease ? e : new oe(e.raw, t);
			if (e instanceof ne) return new oe(e.value, t);
			if (!(this instanceof oe)) return new oe(e, t);
			if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this
				.raw = e, this.set = e.split(/\s*\|\|\s*/).map((function(e) {
					return this.parseRange(e.trim())
				}), this).filter((function(e) {
					return e.length
				})), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
			this.format()
		}

		function se(e) {
			return !e || "x" === e.toLowerCase() || "*" === e
		}

		function ae(e, t, r, n, i, o, s, a, c, u, d, f, l) {
			return ((t = se(r) ? "" : se(n) ? ">=" + r + ".0.0" : se(i) ? ">=" + r + "." + n + ".0" : ">=" +
				t) + " " + (a = se(c) ? "" : se(u) ? "<" + (+c + 1) + ".0.0" : se(d) ? "<" + c + "." + (+u +
					1) + ".0" : f ? "<=" + c + "." + u + "." + d + "-" + f : "<=" + a)).trim()
		}

		function ce(e, t, n) {
			for (var i = 0; i < e.length; i++)
				if (!e[i].test(t)) return !1;
			if (t.prerelease.length && !n.includePrerelease) {
				for (i = 0; i < e.length; i++)
					if (r(e[i].semver), e[i].semver !== ie && e[i].semver.prerelease.length > 0) {
						var o = e[i].semver;
						if (o.major === t.major && o.minor === t.minor && o.patch === t.patch) return !0
					} return !1
			}
			return !0
		}

		function ue(e, t, r) {
			try {
				t = new oe(t, r)
			} catch (e) {
				return !1
			}
			return t.test(e)
		}

		function de(e, t, r, n) {
			var i, o, s, a, c;
			switch (e = new G(e, n), t = new oe(t, n), r) {
				case ">":
					i = W, o = te, s = X, a = ">", c = ">=";
					break;
				case "<":
					i = X, o = ee, s = W, a = "<", c = "<=";
					break;
				default:
					throw new TypeError('Must provide a hilo val of "<" or ">"')
			}
			if (ue(e, t, n)) return !1;
			for (var u = 0; u < t.set.length; ++u) {
				var d = t.set[u],
					f = null,
					l = null;
				if (d.forEach((function(e) {
						e.semver === ie && (e = new ne(">=0.0.0")), f = f || e, l = l || e, i(e.semver,
							f.semver, n) ? f = e : s(e.semver, l.semver, n) && (l = e)
					})), f.operator === a || f.operator === c) return !1;
				if ((!l.operator || l.operator === a) && o(e, l.semver)) return !1;
				if (l.operator === c && s(e, l.semver)) return !1
			}
			return !0
		}
		ne.prototype.parse = function(e) {
			var t = this.options.loose ? i[L] : i[U],
				r = e.match(t);
			if (!r) throw new TypeError("Invalid comparator: " + e);
			this.operator = r[1], "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new G(
				r[2], this.options.loose) : this.semver = ie
		}, ne.prototype.toString = function() {
			return this.value
		}, ne.prototype.test = function(e) {
			return r("Comparator.test", e, this.options.loose), this.semver === ie || ("string" ==
				typeof e && (e = new G(e, this.options)), re(e, this.operator, this.semver, this
					.options))
		}, ne.prototype.intersects = function(e, t) {
			if (!(e instanceof ne)) throw new TypeError("a Comparator is required");
			var r;
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), "" === this.operator) return r = new oe(e.value, t), ue(this.value, r, t);
			if ("" === e.operator) return r = new oe(this.value, t), ue(e.semver, r, t);
			var n = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e
					.operator),
				i = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e
					.operator),
				o = this.semver.version === e.semver.version,
				s = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e
					.operator),
				a = re(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this
				.operator) && ("<=" === e.operator || "<" === e.operator),
				c = re(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this
				.operator) && (">=" === e.operator || ">" === e.operator);
			return n || i || o && s || a || c
		}, t.Range = oe, oe.prototype.format = function() {
			return this.range = this.set.map((function(e) {
				return e.join(" ").trim()
			})).join("||").trim(), this.range
		}, oe.prototype.toString = function() {
			return this.range
		}, oe.prototype.parseRange = function(e) {
			var t = this.options.loose;
			e = e.trim();
			var n = t ? i[K] : i[$];
			e = e.replace(n, ae), r("hyphen replace", e), e = e.replace(i[B], "$1$2$3"), r(
					"comparator trim", e, i[B]), e = (e = (e = e.replace(i[O], "$1~")).replace(i[N], "$1^"))
				.split(/\s+/).join(" ");
			var o = t ? i[L] : i[U],
				s = e.split(" ").map((function(e) {
					return function(e, t) {
						return r("comp", e, t), e = function(e, t) {
							return e.trim().split(/\s+/).map((function(e) {
								return function(e, t) {
									r("caret", e, t);
									var n = t.loose ? i[V] : i[M];
									return e.replace(n, (function(t, n, i,
										o, s) {
										var a;
										return r("caret", e, t,
												n, i, o, s), se(
												n) ? a = "" :
											se(i) ? a = ">=" +
											n + ".0.0 <" + (+n +
												1) + ".0.0" :
											se(o) ? a = "0" ===
											n ? ">=" + n + "." +
											i + ".0 <" + n +
											"." + (+i + 1) +
											".0" : ">=" + n +
											"." + i + ".0 <" + (
												+n + 1) +
											".0.0" : s ? (r(
													"replaceCaret pr",
													s), a =
												"0" === n ?
												"0" === i ?
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												n + "." + i +
												"." + (+o + 1) :
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												n + "." + (+i +
													1) + ".0" :
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												(+n + 1) +
												".0.0") : (r(
													"no pr"),
												a = "0" === n ?
												"0" === i ?
												">=" + n + "." +
												i + "." + o +
												" <" + n + "." +
												i + "." + (+o +
													1) : ">=" +
												n + "." + i +
												"." + o + " <" +
												n + "." + (+i +
													1) + ".0" :
												">=" + n + "." +
												i + "." + o +
												" <" + (+n +
												1) + ".0.0"), r(
												"caret return",
												a), a
									}))
								}(e, t)
							})).join(" ")
						}(e, t), r("caret", e), e = function(e, t) {
							return e.trim().split(/\s+/).map((function(e) {
								return function(e, t) {
									var n = t.loose ? i[P] : i[j];
									return e.replace(n, (function(t, n, i,
										o, s) {
										var a;
										return r("tilde", e, t,
												n, i, o, s), se(
												n) ? a = "" :
											se(i) ? a = ">=" +
											n + ".0.0 <" + (+n +
												1) + ".0.0" :
											se(o) ? a = ">=" +
											n + "." + i +
											".0 <" + n + "." + (
												+i + 1) + ".0" :
											s ? (r("replaceTilde pr",
													s), a =
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												n + "." + (+i +
													1) + ".0") :
											a = ">=" + n + "." +
											i + "." + o + " <" +
											n + "." + (+i + 1) +
											".0", r(
												"tilde return",
												a), a
									}))
								}(e, t)
							})).join(" ")
						}(e, t), r("tildes", e), e = function(e, t) {
							return r("replaceXRanges", e, t), e.split(/\s+/).map((function(
								e) {
								return function(e, t) {
									e = e.trim();
									var n = t.loose ? i[A] : i[x];
									return e.replace(n, (function(t, n, i,
										o, s, a) {
										r("xRange", e, t, n, i,
											o, s, a);
										var c = se(i),
											u = c || se(o),
											d = u || se(s);
										return "=" === n && d &&
											(n = ""), c ? t =
											">" === n || "<" ===
											n ? "<0.0.0" : "*" :
											n && d ? (u && (o =
													0), s = 0,
												">" === n ? (n =
													">=", u ? (
														i = +i +
														1, o =
														0, s = 0
														) : (
														o = +o +
														1, s = 0
														)) :
												"<=" === n && (
													n = "<", u ?
													i = +i + 1 :
													o = +o + 1),
												t = n + i +
												"." + o + "." +
												s) : u ? t =
											">=" + i +
											".0.0 <" + (+i +
											1) + ".0.0" : d && (
												t = ">=" + i +
												"." + o +
												".0 <" + i +
												"." + (+o + 1) +
												".0"), r(
												"xRange return",
												t), t
									}))
								}(e, t)
							})).join(" ")
						}(e, t), r("xrange", e), e = function(e, t) {
							return r("replaceStars", e, t), e.trim().replace(i[H], "")
						}(e, t), r("stars", e), e
					}(e, this.options)
				}), this).join(" ").split(/\s+/);
			return this.options.loose && (s = s.filter((function(e) {
				return !!e.match(o)
			}))), s = s.map((function(e) {
				return new ne(e, this.options)
			}), this)
		}, oe.prototype.intersects = function(e, t) {
			if (!(e instanceof oe)) throw new TypeError("a Range is required");
			return this.set.some((function(r) {
				return r.every((function(r) {
					return e.set.some((function(e) {
						return e.every((function(e) {
							return r.intersects(e, t)
						}))
					}))
				}))
			}))
		}, t.toComparators = function(e, t) {
			return new oe(e, t).set.map((function(e) {
				return e.map((function(e) {
					return e.value
				})).join(" ").trim().split(" ")
			}))
		}, oe.prototype.test = function(e) {
			if (!e) return !1;
			"string" == typeof e && (e = new G(e, this.options));
			for (var t = 0; t < this.set.length; t++)
				if (ce(this.set[t], e, this.options)) return !0;
			return !1
		}, t.satisfies = ue, t.maxSatisfying = function(e, t, r) {
			var n = null,
				i = null;
			try {
				var o = new oe(t, r)
			} catch (e) {
				return null
			}
			return e.forEach((function(e) {
				o.test(e) && (n && -1 !== i.compare(e) || (i = new G(n = e, r)))
			})), n
		}, t.minSatisfying = function(e, t, r) {
			var n = null,
				i = null;
			try {
				var o = new oe(t, r)
			} catch (e) {
				return null
			}
			return e.forEach((function(e) {
				o.test(e) && (n && 1 !== i.compare(e) || (i = new G(n = e, r)))
			})), n
		}, t.minVersion = function(e, t) {
			e = new oe(e, t);
			var r = new G("0.0.0");
			if (e.test(r)) return r;
			if (r = new G("0.0.0-0"), e.test(r)) return r;
			r = null;
			for (var n = 0; n < e.set.length; ++n) {
				e.set[n].forEach((function(e) {
					var t = new G(e.semver.version);
					switch (e.operator) {
						case ">":
							0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t
								.raw = t.format();
						case "":
						case ">=":
							r && !W(r, t) || (r = t);
							break;
						case "<":
						case "<=":
							break;
						default:
							throw new Error("Unexpected operation: " + e.operator)
					}
				}))
			}
			if (r && e.test(r)) return r;
			return null
		}, t.validRange = function(e, t) {
			try {
				return new oe(e, t).range || "*"
			} catch (e) {
				return null
			}
		}, t.ltr = function(e, t, r) {
			return de(e, t, "<", r)
		}, t.gtr = function(e, t, r) {
			return de(e, t, ">", r)
		}, t.outside = de, t.prerelease = function(e, t) {
			var r = q(e, t);
			return r && r.prerelease.length ? r.prerelease : null
		}, t.intersects = function(e, t, r) {
			return e = new oe(e, r), t = new oe(t, r), e.intersects(t)
		}, t.coerce = function(e) {
			if (e instanceof G) return e;
			if ("string" != typeof e) return null;
			var t = e.match(i[k]);
			if (null == t) return null;
			return q(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"))
		}
	})),
	wt = (yt.SEMVER_SPEC_VERSION, yt.re, yt.src, yt.parse, yt.valid, yt.clean, yt.SemVer, yt.inc, yt.diff, yt
		.compareIdentifiers, yt.rcompareIdentifiers, yt.major, yt.minor, yt.patch, yt.compare, yt.compareLoose, yt
		.rcompare, yt.sort, yt.rsort, yt.gt, yt.lt, yt.eq, yt.neq, yt.gte, yt.lte, yt.cmp, yt.Comparator, yt.Range, yt
		.toComparators, yt.satisfies, yt.maxSatisfying, yt.minSatisfying, yt.minVersion, yt.validRange, yt.ltr, yt.gtr,
		yt.outside, yt.prerelease, yt.intersects, yt.coerce, yt.satisfies(process.version, "^6.12.0 || >=8.0.0")),
	vt = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512"],
	_t = ["RS256", "RS384", "RS512"],
	bt = ["HS256", "HS384", "HS512"];
wt && (vt.splice(3, 0, "PS256", "PS384", "PS512"), _t.splice(3, 0, "PS256", "PS384", "PS512"));
var Et = /^\s+|\s+$/g,
	Tt = /^[-+]0x[0-9a-f]+$/i,
	Ct = /^0b[01]+$/i,
	St = /^0o[0-7]+$/i,
	It = /^(?:0|[1-9]\d*)$/,
	xt = parseInt;

function At(e) {
	return e != e
}

function kt(e, t) {
	return function(e, t) {
		for (var r = -1, n = e ? e.length : 0, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
		return i
	}(t, (function(t) {
		return e[t]
	}))
}
var Rt, Ot, jt = Object.prototype,
	Pt = jt.hasOwnProperty,
	Dt = jt.toString,
	Nt = jt.propertyIsEnumerable,
	Mt = (Rt = Object.keys, Ot = Object, function(e) {
		return Rt(Ot(e))
	}),
	Vt = Math.max;

function Lt(e, t) {
	var r = $t(e) || function(e) {
			return function(e) {
				return Ft(e) && Kt(e)
			}(e) && Pt.call(e, "callee") && (!Nt.call(e, "callee") || "[object Arguments]" == Dt.call(e))
		}(e) ? function(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}(e.length, String) : [],
		n = r.length,
		i = !!n;
	for (var o in e) !t && !Pt.call(e, o) || i && ("length" == o || Bt(o, n)) || r.push(o);
	return r
}

function Ut(e) {
	if (r = (t = e) && t.constructor, n = "function" == typeof r && r.prototype || jt, t !== n) return Mt(e);
	var t, r, n, i = [];
	for (var o in Object(e)) Pt.call(e, o) && "constructor" != o && i.push(o);
	return i
}

function Bt(e, t) {
	return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || It.test(e)) && e > -1 && e % 1 == 0 &&
		e < t
}
var $t = Array.isArray;

function Kt(e) {
	return null != e && function(e) {
		return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
	}(e.length) && ! function(e) {
		var t = Ht(e) ? Dt.call(e) : "";
		return "[object Function]" == t || "[object GeneratorFunction]" == t
	}(e)
}

function Ht(e) {
	var t = typeof e;
	return !!e && ("object" == t || "function" == t)
}

function Ft(e) {
	return !!e && "object" == typeof e
}
var qt = function(e, t, r, n) {
		var i;
		e = Kt(e) ? e : (i = e) ? kt(i, function(e) {
			return Kt(e) ? Lt(e) : Ut(e)
		}(i)) : [], r = r && !n ? function(e) {
			var t = function(e) {
					if (!e) return 0 === e ? e : 0;
					if ((e = function(e) {
							if ("number" == typeof e) return e;
							if (function(e) {
									return "symbol" == typeof e || Ft(e) && "[object Symbol]" == Dt.call(e)
								}(e)) return NaN;
							if (Ht(e)) {
								var t = "function" == typeof e.valueOf ? e.valueOf() : e;
								e = Ht(t) ? t + "" : t
							}
							if ("string" != typeof e) return 0 === e ? e : +e;
							e = e.replace(Et, "");
							var r = Ct.test(e);
							return r || St.test(e) ? xt(e.slice(2), r ? 2 : 8) : Tt.test(e) ? NaN : +e
						}(e)) === 1 / 0 || e === -1 / 0) {
						return 17976931348623157e292 * (e < 0 ? -1 : 1)
					}
					return e == e ? e : 0
				}(e),
				r = t % 1;
			return t == t ? r ? t - r : t : 0
		}(r) : 0;
		var o = e.length;
		return r < 0 && (r = Vt(o + r, 0)),
			function(e) {
				return "string" == typeof e || !$t(e) && Ft(e) && "[object String]" == Dt.call(e)
			}(e) ? r <= o && e.indexOf(t, r) > -1 : !!o && function(e, t, r) {
				if (t != t) return function(e, t, r, n) {
					for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
						if (t(e[o], o, e)) return o;
					return -1
				}(e, At, r);
				for (var n = r - 1, i = e.length; ++n < i;)
					if (e[n] === t) return n;
				return -1
			}(e, t, r) > -1
	},
	Gt = Object.prototype.toString;
var Yt = function(e) {
		return !0 === e || !1 === e || function(e) {
			return !!e && "object" == typeof e
		}(e) && "[object Boolean]" == Gt.call(e)
	},
	Jt = /^\s+|\s+$/g,
	zt = /^[-+]0x[0-9a-f]+$/i,
	Wt = /^0b[01]+$/i,
	Xt = /^0o[0-7]+$/i,
	Qt = parseInt,
	Zt = Object.prototype.toString;

function er(e) {
	var t = typeof e;
	return !!e && ("object" == t || "function" == t)
}
var tr = function(e) {
		return "number" == typeof e && e == function(e) {
			var t = function(e) {
					if (!e) return 0 === e ? e : 0;
					if ((e = function(e) {
							if ("number" == typeof e) return e;
							if (function(e) {
									return "symbol" == typeof e || function(e) {
										return !!e && "object" == typeof e
									}(e) && "[object Symbol]" == Zt.call(e)
								}(e)) return NaN;
							if (er(e)) {
								var t = "function" == typeof e.valueOf ? e.valueOf() : e;
								e = er(t) ? t + "" : t
							}
							if ("string" != typeof e) return 0 === e ? e : +e;
							e = e.replace(Jt, "");
							var r = Wt.test(e);
							return r || Xt.test(e) ? Qt(e.slice(2), r ? 2 : 8) : zt.test(e) ? NaN : +e
						}(e)) === 1 / 0 || e === -1 / 0) {
						return 17976931348623157e292 * (e < 0 ? -1 : 1)
					}
					return e == e ? e : 0
				}(e),
				r = t % 1;
			return t == t ? r ? t - r : t : 0
		}(e)
	},
	rr = Object.prototype.toString;
var nr = function(e) {
	return "number" == typeof e || function(e) {
		return !!e && "object" == typeof e
	}(e) && "[object Number]" == rr.call(e)
};
var ir = Function.prototype,
	or = Object.prototype,
	sr = ir.toString,
	ar = or.hasOwnProperty,
	cr = sr.call(Object),
	ur = or.toString,
	dr = function(e, t) {
		return function(r) {
			return e(t(r))
		}
	}(Object.getPrototypeOf, Object);
var fr = function(e) {
		if (! function(e) {
				return !!e && "object" == typeof e
			}(e) || "[object Object]" != ur.call(e) || function(e) {
				var t = !1;
				if (null != e && "function" != typeof e.toString) try {
					t = !!(e + "")
				} catch (e) {}
				return t
			}(e)) return !1;
		var t = dr(e);
		if (null === t) return !0;
		var r = ar.call(t, "constructor") && t.constructor;
		return "function" == typeof r && r instanceof r && sr.call(r) == cr
	},
	lr = Object.prototype.toString,
	pr = Array.isArray;
var mr = function(e) {
		return "string" == typeof e || !pr(e) && function(e) {
			return !!e && "object" == typeof e
		}(e) && "[object String]" == lr.call(e)
	},
	hr = /^\s+|\s+$/g,
	gr = /^[-+]0x[0-9a-f]+$/i,
	yr = /^0b[01]+$/i,
	wr = /^0o[0-7]+$/i,
	vr = parseInt,
	_r = Object.prototype.toString;

function br(e, t) {
	var r;
	if ("function" != typeof t) throw new TypeError("Expected a function");
	return e = function(e) {
			var t = function(e) {
					if (!e) return 0 === e ? e : 0;
					if ((e = function(e) {
							if ("number" == typeof e) return e;
							if (function(e) {
									return "symbol" == typeof e || function(e) {
										return !!e && "object" == typeof e
									}(e) && "[object Symbol]" == _r.call(e)
								}(e)) return NaN;
							if (Er(e)) {
								var t = "function" == typeof e.valueOf ? e.valueOf() : e;
								e = Er(t) ? t + "" : t
							}
							if ("string" != typeof e) return 0 === e ? e : +e;
							e = e.replace(hr, "");
							var r = yr.test(e);
							return r || wr.test(e) ? vr(e.slice(2), r ? 2 : 8) : gr.test(e) ? NaN : +e
						}(e)) === 1 / 0 || e === -1 / 0) {
						return 17976931348623157e292 * (e < 0 ? -1 : 1)
					}
					return e == e ? e : 0
				}(e),
				r = t % 1;
			return t == t ? r ? t - r : t : 0
		}(e),
		function() {
			return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = void 0), r
		}
}

function Er(e) {
	var t = typeof e;
	return !!e && ("object" == t || "function" == t)
}
var Tr = function(e) {
		return br(2, e)
	},
	Cr = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
wt && Cr.splice(3, 0, "PS256", "PS384", "PS512");
var Sr = {
		expiresIn: {
			isValid: function(e) {
				return tr(e) || mr(e) && e
			},
			message: '"expiresIn" should be a number of seconds or string representing a timespan'
		},
		notBefore: {
			isValid: function(e) {
				return tr(e) || mr(e) && e
			},
			message: '"notBefore" should be a number of seconds or string representing a timespan'
		},
		audience: {
			isValid: function(e) {
				return mr(e) || Array.isArray(e)
			},
			message: '"audience" must be a string or array'
		},
		algorithm: {
			isValid: qt.bind(null, Cr),
			message: '"algorithm" must be a valid string enum value'
		},
		header: {
			isValid: fr,
			message: '"header" must be an object'
		},
		encoding: {
			isValid: mr,
			message: '"encoding" must be a string'
		},
		issuer: {
			isValid: mr,
			message: '"issuer" must be a string'
		},
		subject: {
			isValid: mr,
			message: '"subject" must be a string'
		},
		jwtid: {
			isValid: mr,
			message: '"jwtid" must be a string'
		},
		noTimestamp: {
			isValid: Yt,
			message: '"noTimestamp" must be a boolean'
		},
		keyid: {
			isValid: mr,
			message: '"keyid" must be a string'
		},
		mutatePayload: {
			isValid: Yt,
			message: '"mutatePayload" must be a boolean'
		}
	},
	Ir = {
		iat: {
			isValid: nr,
			message: '"iat" should be a number of seconds'
		},
		exp: {
			isValid: nr,
			message: '"exp" should be a number of seconds'
		},
		nbf: {
			isValid: nr,
			message: '"nbf" should be a number of seconds'
		}
	};

function xr(e, t, r, n) {
	if (!fr(r)) throw new Error('Expected "' + n + '" to be a plain object.');
	Object.keys(r).forEach((function(i) {
		var o = e[i];
		if (o) {
			if (!o.isValid(r[i])) throw new Error(o.message)
		} else if (!t) throw new Error('"' + i + '" is not allowed in "' + n + '"')
	}))
}
var Ar = {
		audience: "aud",
		issuer: "iss",
		subject: "sub",
		jwtid: "jti"
	},
	kr = ["expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid"],
	Rr = function(e, t, r, n) {
		var i;
		if ("function" != typeof r || n || (n = r, r = {}), r || (r = {}), r = Object.assign({}, r), i = n || function(
				e, t) {
				if (e) throw e;
				return t
			}, r.clockTimestamp && "number" != typeof r.clockTimestamp) return i(new ot(
			"clockTimestamp must be a number"));
		if (void 0 !== r.nonce && ("string" != typeof r.nonce || "" === r.nonce.trim())) return i(new ot(
			"nonce must be a non-empty string"));
		var o = r.clockTimestamp || Math.floor(Date.now() / 1e3);
		if (!e) return i(new ot("jwt must be provided"));
		if ("string" != typeof e) return i(new ot("jwt must be a string"));
		var s, a = e.split(".");
		if (3 !== a.length) return i(new ot("jwt malformed"));
		try {
			s = nt(e, {
				complete: !0
			})
		} catch (e) {
			return i(e)
		}
		if (!s) return i(new ot("invalid token"));
		var c, u = s.header;
		if ("function" == typeof t) {
			if (!n) return i(new ot(
				"verify must be called asynchronous if secret or public key is provided as a callback"));
			c = t
		} else c = function(e, r) {
			return r(null, t)
		};
		return c(u, (function(t, n) {
			if (t) return i(new ot("error in secret or public key callback: " + t.message));
			var c, d = "" !== a[2].trim();
			if (!d && n) return i(new ot("jwt signature is required"));
			if (d && !n) return i(new ot("secret or public key must be provided"));
			if (d || r.algorithms || (r.algorithms = ["none"]), r.algorithms || (r.algorithms = ~n
					.toString().indexOf("BEGIN CERTIFICATE") || ~n.toString().indexOf("BEGIN PUBLIC KEY") ?
					vt : ~n.toString().indexOf("BEGIN RSA PUBLIC KEY") ? _t : bt), !~r.algorithms.indexOf(s
					.header.alg)) return i(new ot("invalid algorithm"));
			try {
				c = rt.verify(e, s.header.alg, n)
			} catch (e) {
				return i(e)
			}
			if (!c) return i(new ot("invalid signature"));
			var f = s.payload;
			if (void 0 !== f.nbf && !r.ignoreNotBefore) {
				if ("number" != typeof f.nbf) return i(new ot("invalid nbf value"));
				if (f.nbf > o + (r.clockTolerance || 0)) return i(new at("jwt not active", new Date(1e3 * f
					.nbf)))
			}
			if (void 0 !== f.exp && !r.ignoreExpiration) {
				if ("number" != typeof f.exp) return i(new ot("invalid exp value"));
				if (o >= f.exp + (r.clockTolerance || 0)) return i(new ut("jwt expired", new Date(1e3 * f
					.exp)))
			}
			if (r.audience) {
				var l = Array.isArray(r.audience) ? r.audience : [r.audience];
				if (!(Array.isArray(f.aud) ? f.aud : [f.aud]).some((function(e) {
						return l.some((function(t) {
							return t instanceof RegExp ? t.test(e) : t === e
						}))
					}))) return i(new ot("jwt audience invalid. expected: " + l.join(" or ")))
			}
			if (r.issuer && ("string" == typeof r.issuer && f.iss !== r.issuer || Array.isArray(r.issuer) &&
					-1 === r.issuer.indexOf(f.iss))) return i(new ot("jwt issuer invalid. expected: " + r
				.issuer));
			if (r.subject && f.sub !== r.subject) return i(new ot("jwt subject invalid. expected: " + r
				.subject));
			if (r.jwtid && f.jti !== r.jwtid) return i(new ot("jwt jwtid invalid. expected: " + r.jwtid));
			if (r.nonce && f.nonce !== r.nonce) return i(new ot("jwt nonce invalid. expected: " + r.nonce));
			if (r.maxAge) {
				if ("number" != typeof f.iat) return i(new ot("iat required when maxAge is specified"));
				var p = gt(r.maxAge, f.iat);
				if (void 0 === p) return i(new ot(
					'"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
					));
				if (o >= p + (r.clockTolerance || 0)) return i(new ut("maxAge exceeded", new Date(1e3 * p)))
			}
			if (!0 === r.complete) {
				var m = s.signature;
				return i(null, {
					header: u,
					payload: f,
					signature: m
				})
			}
			return i(null, f)
		}))
	},
	Or = function(e, t, r, n) {
		"function" == typeof r ? (n = r, r = {}) : r = r || {};
		var i = "object" == typeof e && !Buffer.isBuffer(e),
			o = Object.assign({
				alg: r.algorithm || "HS256",
				typ: i ? "JWT" : void 0,
				kid: r.keyid
			}, r.header);

		function s(e) {
			if (n) return n(e);
			throw e
		}
		if (!t && "none" !== r.algorithm) return s(new Error("secretOrPrivateKey must have a value"));
		if (void 0 === e) return s(new Error("payload is required"));
		if (i) {
			try {
				! function(e) {
					xr(Ir, !0, e, "payload")
				}(e)
			} catch (e) {
				return s(e)
			}
			r.mutatePayload || (e = Object.assign({}, e))
		} else {
			var a = kr.filter((function(e) {
				return void 0 !== r[e]
			}));
			if (a.length > 0) return s(new Error("invalid " + a.join(",") + " option for " + typeof e + " payload"))
		}
		if (void 0 !== e.exp && void 0 !== r.expiresIn) return s(new Error(
			'Bad "options.expiresIn" option the payload already has an "exp" property.'));
		if (void 0 !== e.nbf && void 0 !== r.notBefore) return s(new Error(
			'Bad "options.notBefore" option the payload already has an "nbf" property.'));
		try {
			! function(e) {
				xr(Sr, !1, e, "options")
			}(r)
		} catch (e) {
			return s(e)
		}
		var c = e.iat || Math.floor(Date.now() / 1e3);
		if (r.noTimestamp ? delete e.iat : i && (e.iat = c), void 0 !== r.notBefore) {
			try {
				e.nbf = gt(r.notBefore, c)
			} catch (e) {
				return s(e)
			}
			if (void 0 === e.nbf) return s(new Error(
				'"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
				))
		}
		if (void 0 !== r.expiresIn && "object" == typeof e) {
			try {
				e.exp = gt(r.expiresIn, c)
			} catch (e) {
				return s(e)
			}
			if (void 0 === e.exp) return s(new Error(
				'"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
				))
		}
		Object.keys(Ar).forEach((function(t) {
			var n = Ar[t];
			if (void 0 !== r[t]) {
				if (void 0 !== e[n]) return s(new Error('Bad "options.' + t +
					'" option. The payload already has an "' + n + '" property.'));
				e[n] = r[t]
			}
		}));
		var u = r.encoding || "utf8";
		if ("function" != typeof n) return rt.sign({
			header: o,
			payload: e,
			secret: t,
			encoding: u
		});
		n = n && Tr(n), rt.createSign({
			header: o,
			privateKey: t,
			payload: e,
			encoding: u
		}).once("error", n).once("done", (function(e) {
			n(null, e)
		}))
	};
let jr = [];
class Pr {
	constructor(e) {
		this.fetched = !1, this.options = Object.assign({
			baseUrl: "https://appleid.apple.com",
			timeout: 1e4
		}, e)
	}
	async _fetch(e, t) {
		const {
			baseUrl: r
		} = this.options;
		return uniCloud.httpclient.request(r + e, t)
	}
	async verifyIdentityToken(e) {
		const t = e.split(".")[0],
			r = JSON.parse(Buffer.from(t, "base64").toString()).kid;
		if (!jr.length) try {
			jr = await this.getAuthKeys()
		} catch (e) {
			return {
				code: 10705,
				msg: e.message,
				messageValues: {
					account: "苹果账号"
				}
			}
		}
		let n = this.getUsedKey(jr, r);
		if (!Object.keys(n).length && !this.fetched) {
			try {
				jr = await this.getAuthKeys()
			} catch (e) {
				return {
					code: 10705,
					msg: e.message,
					messageValues: {
						account: "苹果账号"
					}
				}
			}
			n = this.getUsedKey(jr, r)
		}
		let i = null;
		try {
			i = Rr(e, function(e, t) {
				var r = Buffer.from(e, "base64"),
					n = Buffer.from(t, "base64"),
					i = r.toString("hex"),
					o = n.toString("hex");
				i = X(i), o = X(o);
				var s = i.length / 2,
					a = o.length / 2,
					c = Z(s),
					u = Z(a),
					d = "30" + Z(s + a + c.length / 2 + u.length / 2 + 2) + "02" + c + i + "02" + u + o;
				return "-----BEGIN RSA PUBLIC KEY-----\n" + Buffer.from(d, "hex").toString("base64").match(
					/.{1,64}/g).join("\n") + "\n-----END RSA PUBLIC KEY-----\n"
			}(n.n, n.e), {
				algorithms: n.alg
			})
		} catch (e) {
			return {
				code: 10705,
				msg: e.message,
				messageValues: {
					account: "苹果账号"
				}
			}
		}
		return {
			code: 0,
			msg: i
		}
	}
	async getAuthKeys() {
		const {
			status: e,
			data: t
		} = await this._fetch("/auth/keys", {
			method: "GET",
			dataType: "json",
			timeout: this.options.timeout
		});
		if (this.fetched = !0, 200 !== e) throw new Error("request fail");
		return t.keys
	}
	getUsedKey(e, t) {
		let r = {};
		for (let n = 0; n < e.length; n++) {
			const i = e[n];
			if (i.kid === t) {
				r = i;
				break
			}
		}
		return r
	}
}
var Dr = function(e = {}) {
		return e.appId = e.appid, e.secret = e.appsecret, P(Y, e)
	},
	Nr = function(e = {}) {
		return e.appId = e.appid, P(W, e)
	},
	Mr = function(e = {}) {
		return P(Pr, e)
	};

function Vr(e = 6) {
	const t = ["2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N",
		"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
	];
	let r = "";
	for (let n = 0; n < e; n++) r += t[Math.floor(Math.random() * t.length)];
	return r
}
const Lr = uniCloud.database().command;
const Ur = uniCloud.database();
const Br = uniCloud.database();
async function $r(e) {
	const t = ["apiKey", "apiSecret"];
	for (let r = 0, n = t.length; r < n; r++) {
		const n = t[r];
		if (!e[n]) throw new Error("请在config.json中service.univerify下配置" + n)
	}
	if (!e.openid || !e.access_token) throw new Error("一键登录需要传递openid和access_token");
	return function(e) {
		const t = {
			0: "成功",
			4e3: "缺失参数",
			4001: "apiKey不存在",
			4002: "sign校验不通过",
			4003: "appid不存在",
			4004: "应用未开通一键登录服务",
			4005: "应用开通的一键登录服务正在审核中",
			4006: "服务空间不在白名单中",
			4100: "账户余额不足",
			5e3: "获取手机号失败，请稍后重试(或其他未知错误)"
		};
		return {
			...e,
			msg: t[e.code] ? "[getPhoneNumber] 获取手机号: " + t[e.code] : e.errMsg
		}
	}(await uniCloud.getPhoneNumber({
		provider: "univerify",
		...e
	}))
}
const Kr = uniCloud.database();
const Hr = uniCloud.database();
const Fr = uniCloud.database();
const qr = uniCloud.database().command;
const Gr = uniCloud.database();
const Yr = uniCloud.database();
const Jr = uniCloud.database();
const zr = uniCloud.database();
const Wr = uniCloud.database();
const Xr = uniCloud.database().command;
const Qr = uniCloud.database();
var Zr = Object.freeze({
	__proto__: null,
	getUserInfo: async function({
		uid: e,
		field: t
	}) {
		if (!e) return {
			code: $,
			messageValues: {
				param: "用户ID"
			}
		};
		let r;
		if (t && t.length) {
			const n = {};
			for (let e = 0; e < t.length; e++) n[t[e]] = !0;
			r = await V.doc(e).field(n).get()
		} else r = await V.doc(e).get();
		return 0 === r.data.length ? {
			code: 80301
		} : {
			code: 0,
			msg: "获取用户信息成功",
			userInfo: r.data[0]
		}
	},
	getUserInfoByToken: async function(e) {
		const t = this._verifyToken(e);
		return t.code || (delete t.iat, delete t.exp), t
	},
	resetPwd: async function({
		uid: e,
		password: t
	}) {
		const {
			passwordHash: r,
			version: n
		} = this.encryptPwd(t), i = {
			password: r,
			token: []
		};
		return n && (i.password_secret_version = n), I("upRes", await V.doc(e).update(i)), {
			code: 0,
			msg: "密码重置成功"
		}
	},
	setAvatar: async function(e) {
		return I("setAvatar -> upRes", await V.doc(e.uid).update({
			avatar: e.avatar
		})), {
			code: 0,
			msg: "头像设置成功"
		}
	},
	updatePwd: async function(e) {
		const t = await V.doc(e.uid).get();
		if (t && t.data && t.data.length > 0) {
			if (0 === this._checkPwd(t.data[0], e.oldPassword).code) {
				const {
					passwordHash: r,
					version: n
				} = this.encryptPwd(e.newPassword), i = {
					password: r,
					token: []
				};
				n && (i.password_secret_version = n);
				return I("upRes", await V.doc(t.data[0]._id).update(i)), {
					code: 0,
					msg: "修改成功"
				}
			}
			return {
				code: 40202,
				msg: "旧密码错误"
			}
		}
		return {
			code: 40201
		}
	},
	updateUser: async function(e) {
		const t = e.uid;
		if (!t) return {
			code: $,
			messageValues: {
				param: "用户Id"
			}
		};
		delete e.uid;
		const {
			username: r,
			email: n
		} = e, {
			usernameToLowerCase: i,
			emailToLowerCase: o
		} = this._getConfig();
		let s = r && r.trim(),
			a = n && n.trim();
		return s && (i && (s = s.toLowerCase()), e.username = s), a && (o && (a = a.toLowerCase()), e
			.email = a), I("update -> upRes", await V.doc(t).update(e)), {
			code: 0,
			msg: "修改成功"
		}
	},
	_getAlipayApi: function({
		platform: e
	} = {}) {
		const t = e || this.context.PLATFORM;
		if (!t) throw new Error("未能获取客户端平台信息，请主动传入platform");
		const r = this._getConfig(t);
		if (!r.oauth || !r.oauth.alipay) throw new Error(
		`请在公用模块uni-id的config.json或init方法中添加${t}平台支付宝登录配置项`);
		return ["appid", "privateKey"].forEach(e => {
			if (!r.oauth.alipay[e]) throw new Error(
				`请在公用模块uni-id的config.json或init方法中添加配置项：${t}.oauth.alipay.${e}`)
		}), Nr({
			...r.oauth.alipay,
			clientType: t
		})
	},
	_getValidInviteCode: async function({
		inviteCode: e
	}) {
		let t, r = 10;
		e ? (r = 1, t = e) : t = Vr();
		let n = !1;
		try {
			for (; r > 0 && !n;) {
				r--;
				if (0 === (await V.where({
						invite_code: t
					}).get()).data.length) {
					n = !0;
					break
				}
				t = Vr()
			}
			return n ? {
				code: 0,
				inviteCode: t
			} : e ? {
				code: 80401,
				msg: "邀请码重复，设置失败"
			} : {
				code: 80402,
				msg: "邀请码设置失败稍后再试"
			}
		} catch (e) {
			return {
				code: 90001,
				msg: "数据库读写异常"
			}
		}
	},
	_addUser: async function(e, t = {}) {
		const r = this._getConfig(),
			n = {
				...e,
				register_date: Date.now(),
				register_ip: this.context.CLIENTIP
			},
			i = (await V.add(n)).id;
		let o;
		if (r.removePermissionAndRoleFromToken) {
			const e = t.needPermission;
			o = await this.createToken({
				uid: i,
				needPermission: e
			})
		} else {
			const t = e.role || [];
			let r;
			r = 0 === t.length || t.includes("admin") ? [] : await this._getPermissionListByRoleList(t), o =
				await this.createToken({
					uid: i,
					role: t,
					permission: r
				})
		}
		const {
			token: s,
			tokenExpired: a
		} = o;
		return await V.doc(i).update({
			token: [s]
		}), {
			token: s,
			tokenExpired: a,
			uid: i,
			type: "register",
			userInfo: Object.assign({}, n, {
				token: s
			})
		}
	},
	_loginExec: async function(e, t = {}) {
		if (1 === e.status) return {
			code: 10001,
			msg: "账号已禁用"
		};
		const r = this._getConfig();
		let n = e.token || [];
		"string" == typeof n && (n = [n]);
		const i = this._getExpiredToken(n);
		let o;
		if (n = n.filter(e => -1 === i.indexOf(e)), r.removePermissionAndRoleFromToken) {
			const r = t.needPermission;
			o = await this.createToken({
				uid: e._id,
				needPermission: r
			})
		} else {
			const t = e.role || [];
			let r;
			r = 0 === t.length || t.includes("admin") ? [] : await this._getPermissionListByRoleList(t), o =
				await this.createToken({
					uid: e._id,
					role: t,
					permission: r
				})
		}
		const {
			token: s,
			tokenExpired: a
		} = o;
		n.push(s), e.token = n;
		const c = {
			last_login_date: Date.now(),
			last_login_ip: this.context.CLIENTIP,
			token: n,
			...t.extraData
		};
		await V.doc(e._id).update(c);
		const u = Object.assign({}, e, c);
		return {
			code: 0,
			msg: "登录成功",
			token: s,
			uid: u._id,
			username: u.username,
			type: "login",
			userInfo: u,
			tokenExpired: a
		}
	},
	_registerExec: async function(e, t = {}) {
		const {
			my_invite_code: r
		} = e;
		if (this._getConfig().autoSetInviteCode || r) {
			const t = await this._getValidInviteCode({
				inviteCode: r
			});
			if (t.code) return t;
			e.my_invite_code = t.inviteCode
		}
		return {
			code: 0,
			msg: "注册成功",
			...await this._addUser(e, t)
		}
	},
	_getWeixinApi: function({
		platform: e
	} = {}) {
		const t = e || this.context.PLATFORM;
		if (!t) throw new Error("未能获取客户端平台信息，请主动传入platform");
		const r = this._getConfig(t);
		if (!r.oauth || !r.oauth.weixin) throw new Error(`请在公用模块uni-id的config.json或init方法中添加${t}平台微信登录配置项`);
		return ["appid", "appsecret"].forEach(e => {
			if (!r.oauth.weixin[e]) throw new Error(
				`请在公用模块uni-id的config.json或init方法中添加配置项：${t}.oauth.weixin.${e}`)
		}), Dr({
			...r.oauth.weixin,
			clientType: t
		})
	},
	_getMatchedUser: function(e, t) {
		if (0 === e.length) return {
			code: 10002
		};
		let r;
		const n = {},
			i = {};
		for (let r = e.length - 1; r >= 0; r--) {
			const o = e[r];
			for (let s = 0; s < t.length; s++) {
				const {
					field: a,
					value: c,
					fallbackValue: u
				} = t[s];
				c && o[a] === c ? (n[a] = o, e.splice(r, 1)) : u && o[a] === u && (n[a] || (n[a] = o), i[
					a] = !0, e.splice(r, 1))
			}
		}
		const o = Object.keys(n);
		console.log(o)
		let s;
		switch (o.length) {
			case 0:
				r = e[0], e.splice(0, 1);
				break;
			case 1:
				s = o[0], r = n[s];
				break;
			default:
				return {
					code: 10003, messageValues: {
						target: "用户"
					}
				}
		}
		return e.length > 0 ? {
			code: 10003,
			messageValues: {
				target: "用户"
			}
		} : {
			code: 0,
			msg: "",
			userMatched: r,
			fieldMatched: s,
			isFallbackValueMatched: !!s && i[s]
		}
	},
	acceptInvite: async function({
		uid: e,
		inviteCode: t
	}) {
		const r = await V.where({
			_id: Lr.neq(e),
			inviter_uid: Lr.not(Lr.all([e])),
			my_invite_code: t
		}).get();
		if (1 !== r.data.length) return {
			code: 80501,
			msg: "邀请码无效"
		};
		const n = [r.data[0]._id].concat(r.data[0].inviter_uid || []),
			i = await V.doc(e).field({
				my_invite_code: !0,
				inviter_uid: !0
			}).get();
		if (0 === i.data.length) return {
			code: 80502
		};
		if (i.data[0].inviter_uid && i.data[0].inviter_uid.length > 0) return {
			code: 80503,
			msg: "邀请码不可修改"
		};
		const o = Date.now();
		return await V.doc(e).update({
			inviter_uid: n,
			invite_time: o
		}), await V.where({
			inviter_uid: e
		}).update({
			inviter_uid: Lr.push(n)
		}), {
			code: 0,
			msg: "邀请码填写成功"
		}
	},
	getInvitedUser: async function({
		uid: e,
		level: t = 1,
		limit: r = 20,
		offset: n = 0,
		needTotal: i = !1
	}) {
		const o = {
			code: 0,
			msg: "获取邀请列表成功",
			invitedUser: (await V.where({
				["inviter_uid." + (t - 1)]: e
			}).field({
				_id: !0,
				username: !0,
				mobile: !0,
				invite_time: !0
			}).orderBy("invite_time", "desc").skip(n).limit(r).get()).data
		};
		if (i) {
			const r = await V.where({
				["inviter_uid." + (t - 1)]: e
			}).count();
			o.total = r.total
		}
		return o
	},
	setUserInviteCode: async function({
		uid: e,
		myInviteCode: t
	}) {
		const r = await this._getValidInviteCode({
			inviteCode: t
		});
		return r.code ? r : (await V.doc(e).update({
			my_invite_code: r.inviteCode
		}), {
			code: 0,
			msg: "邀请码设置成功",
			myInviteCode: r.inviteCode
		})
	},
	loginByAlipay: async function(e) {
		let t = e;
		"string" == typeof e && (t = {
			code: e
		});
		const r = t.needPermission,
			n = t.platform || this.context.PLATFORM,
			{
				openid: i
			} = await this._getAlipayApi({
				platform: n
			}).code2Session(t.code);
		if (!i) return {
			code: 10501,
			messageValues: {
				account: "支付宝账号"
			}
		};
		const o = await V.where({
			ali_openid: i
		}).get();
		if (o && o.data && o.data.length > 0) {
			const e = o.data[0],
				t = await this._loginExec(e, {
					needPermission: r
				});
			if (0 !== t.code) return t;
			const {
				userInfo: n
			} = t;
			return {
				...t,
				openid: i,
				mobileConfirmed: 1 === n.mobile_confirmed,
				emailConfirmed: 1 === n.email_confirmed
			}
		} {
			const e = {
				ali_openid: i
			};
			e.my_invite_code = t.myInviteCode, e.role = t.role;
			const n = await this._registerExec(e, {
				needPermission: r
			});
			return 0 !== n.code ? n : {
				...n,
				openid: i,
				mobileConfirmed: !1,
				emailConfirmed: !1
			}
		}
	},
	loginByEmail: async function({
		email: e,
		code: t,
		password: r,
		myInviteCode: n,
		type: i,
		needPermission: o,
		role: s
	}) {
		if (!(e = e && e.trim())) return {
			code: $,
			messageValues: {
				param: "邮箱"
			}
		};
		const {
			emailToLowerCase: a
		} = this._getConfig();
		let c = e;
		a && (c = e.toLowerCase());
		const u = await this.verifyCode({
			email: c,
			code: t,
			type: i || "login"
		});
		if (0 !== u.code) return u;
		let d = {
			email: e,
			email_confirmed: 1
		};
		const f = {
				field: "email",
				value: e
			},
			l = Ur.command;
		c !== e && (d = l.or(d, {
			email: c,
			email_confirmed: 1
		}), f.fallbackValue = c);
		const p = await V.where(d).get();
		if (p && p.data && p.data.length > 0) {
			if ("register" === i) return {
				code: 10301,
				messageValues: {
					type: "邮箱"
				}
			};
			const e = this._getMatchedUser(p.data, [f]);
			if (e.code) return e;
			const {
				userMatched: t
			} = e, r = await this._loginExec(t, {
				needPermission: o
			});
			return 0 !== r.code ? r : {
				...r,
				email: c
			}
		} {
			if ("login" === i) return {
				code: 10302,
				messageValues: {
					type: "邮箱"
				}
			};
			const e = {
					email: c,
					email_confirmed: 1
				},
				t = r && r.trim();
			if (t) {
				const {
					passwordHash: r,
					version: n
				} = this.encryptPwd(t);
				e.password = r, n && (e.password_secret_version = n)
			}
			e.my_invite_code = n, e.role = s;
			const a = await this._registerExec(e, {
				needPermission: o
			});
			return 0 !== a.code ? a : {
				...a,
				email: c
			}
		}
	},
	loginBySms: async function({
		mobile: e,
		code: t,
		password: r,
		inviteCode: n,
		myInviteCode: i,
		type: o,
		needPermission: s,
		role: a
	}) {
		if (!(e = e && e.trim())) return {
			code: $,
			messageValues: {
				param: "手机号码"
			}
		};
		const c = this._getConfig();
		if (c.forceInviteCode && !o) throw new Error("[loginBySms]强制使用邀请码注册时，需指明type为register还是login");
		const u = await this.verifyCode({
			mobile: e,
			code: t,
			type: o || "login"
		});
		if (0 !== u.code) return u;
		const d = {
				mobile: e,
				mobile_confirmed: 1
			},
			f = await V.where(d).get();
		if (f && f.data && f.data.length > 0) {
			if ("register" === o) return {
				code: 10201,
				messageValues: {
					type: "手机号"
				}
			};
			const t = f.data[0],
				r = await this._loginExec(t, {
					needPermission: s
				});
			return 0 !== r.code ? r : {
				...r,
				mobile: e
			}
		} {
			const t = Date.now();
			if ("login" === o) return {
				code: 10202,
				messageValues: {
					type: "手机号"
				}
			};
			const u = {
					mobile: e,
					mobile_confirmed: 1,
					register_ip: this.context.CLIENTIP,
					register_date: t
				},
				d = r && r.trim();
			if (d) {
				const {
					passwordHash: e,
					version: t
				} = this.encryptPwd(d);
				u.password = e, t && (u.password_secret_version = t)
			}
			if (n) {
				const e = await V.where({
					my_invite_code: n
				}).get();
				if (1 !== e.data.length) return {
					code: 10203,
					msg: "邀请码无效"
				};
				u.inviter_uid = [e.data[0]._id].concat(e.data[0].inviter_uid || []), u.invite_time = t
			} else if (c.forceInviteCode) return {
				code: 10203,
				msg: "邀请码无效"
			};
			u.my_invite_code = i, u.role = a;
			const f = await this._registerExec(u, {
				needPermission: s
			});
			return 0 !== f.code ? f : {
				...f,
				mobile: e
			}
		}
	},
	loginByWeixin: async function(e) {
		let t = e;
		"string" == typeof e && (t = {
			code: e
		});
		const r = t.needPermission,
			n = t.platform || this.context.PLATFORM,
			i = "mp-weixin" === n,
			{
				openid: o,
				unionid: s,
				sessionKey: a,
				accessToken: c,
				refreshToken: u,
				expired: d
			} = await this._getWeixinApi({
				platform: n
			})[i ? "code2Session" : "getOauthAccessToken"](t.code);
		if (!o) return {
			code: 10401,
			messageValues: {
				account: "微信openid"
			}
		};
		let f;
		f = i ? {
			sessionKey: a
		} : {
			accessToken: c,
			refreshToken: u,
			accessTokenExpired: d
		};
		const l = Br.command,
			p = [{
				wx_openid: {
					[n]: o
				}
			}];
		s && p.push({
			wx_unionid: s
		});
		const m = await V.where(l.or(...p)).get();
		if (m && m.data && m.data.length > 0) {
			const e = m.data[0],
				t = {
					wx_openid: {
						[n]: o
					}
				};
			s && (t.wx_unionid = s);
			const i = await this._loginExec(e, {
				needPermission: r,
				extraData: t
			});
			if (0 !== i.code) return i;
			const {
				userInfo: a
			} = i;
			return {
				...i,
				openid: o,
				unionid: s,
				...f,
				mobileConfirmed: 1 === a.mobile_confirmed,
				emailConfirmed: 1 === a.email_confirmed
			}
		} {
			const e = {
					wx_openid: {
						[n]: o
					},
					wx_unionid: s
				},
				i = t.myInviteCode;
			e.my_invite_code = i, e.role = t.role;
			const a = await this._registerExec(e, {
				needPermission: r
			});
			return 0 !== a.code ? a : {
				...a,
				openid: o,
				unionid: s,
				...f,
				mobileConfirmed: !1,
				emailConfirmed: !1
			}
		}
	},
	loginByUniverify: async function({
		openid: e,
		access_token: t,
		password: r,
		inviteCode: n,
		myInviteCode: i,
		type: o,
		needPermission: s,
		role: a
	}) {
		const c = this._getConfig(),
			u = c && c.service && c.service.univerify;
		if (!u) throw new Error("请在config.json中配置service.univerify下一键登录相关参数");
		if (c.forceInviteCode && !o) throw new Error(
			"[loginByUniverify] 强制使用邀请码注册时，需指明type为register还是login");
		const d = await $r({
			...u,
			openid: e,
			access_token: t
		});
		if (0 !== d.code) return d;
		const f = String(d.phoneNumber),
			l = await V.where({
				mobile: f
			}).get();
		if (l && l.data && l.data.length > 0) {
			if ("register" === o) return {
				code: 10601,
				messageValues: {
					type: "手机号"
				}
			};
			const e = l.data[0],
				t = await this._loginExec(e, {
					needPermission: s
				});
			return 0 !== t.code ? t : {
				...t,
				mobile: f
			}
		}
		if ("login" === o) return {
			code: 10602,
			messageValues: {
				type: "手机号"
			}
		};
		const p = Date.now(),
			m = {
				mobile: f,
				my_invite_code: i,
				mobile_confirmed: 1,
				role: a
			},
			h = r && r.trim();
		if (h) {
			const {
				passwordHash: e,
				version: t
			} = this.encryptPwd(h);
			m.password = e, t && (m.password_secret_version = t)
		}
		if (n) {
			let e = await V.where({
				my_invite_code: n
			}).get();
			if (1 !== e.data.length) return {
				code: 10203,
				msg: "邀请码无效"
			};
			e = e.data[0], m.inviter_uid = [e._id].concat(e.inviter_uid || []), m.invite_time = p
		} else if (c.forceInviteCode) return {
			code: 10203,
			msg: "邀请码无效"
		};
		m.my_invite_code = i;
		const g = await this._registerExec(m, {
			needPermission: s
		});
		return 0 !== g.code ? g : {
			...g,
			mobile: f
		}
	},
	loginByApple: async function({
		nickName: e,
		fullName: t,
		identityToken: r,
		myInviteCode: n,
		type: i,
		needPermission: o,
		platform: s,
		role: a
	}) {
		const c = this._getConfig(),
			u = c && c["app-plus"] && c["app-plus"].oauth && c["app-plus"].oauth.apple;
		if (!u) throw new Error("请在config.json或init方法中，app-plus.oauth.apple 下配置相关参数");
		const {
			bundleId: d
		} = u;
		if (!d) throw new Error("请在config.json或init方法中 app-plus.oauth.apple 下配置bundleId");
		if (!r) throw new Error("[loginByApple] 苹果登录需要传递identityToken");
		const f = s || this.context.PLATFORM;
		t = e || (t && Object.keys(t).length > 0 ? t.familyName + t.givenName : "");
		const {
			code: l,
			msg: p
		} = await Mr({
			clientType: f
		}).verifyIdentityToken(r);
		if (0 !== l) return {
			code: l,
			msg: p
		};
		const {
			iss: m,
			sub: h,
			aud: g,
			email: y
		} = p;
		if ("https://appleid.apple.com" !== m) return {
			code: 10706,
			msg: "签发机构检验失败",
			messageValues: {
				account: "苹果账号"
			}
		};
		if (!h) return {
			code: 10701,
			msg: "获取用户唯一标识符失败",
			messageValues: {
				account: "苹果账号"
			}
		};
		if (d !== g) return {
			code: 10702,
			msg: "bundleId校验失败，请确认配置后重试",
			messageValues: {
				account: "苹果账号"
			}
		};
		const w = t || "新用户" + y.split("@")[0],
			v = await V.where({
				apple_openid: h
			}).get();
		if (v && v.data && v.data.length > 0) {
			if ("register" === i) return {
				code: 10703,
				messageValues: {
					type: "苹果账号"
				}
			};
			const e = v.data[0],
				t = await this._loginExec(e, {
					needPermission: o
				});
			return 0 !== t.code ? t : {
				...t,
				openid: h
			}
		}
		if ("login" === i) return {
			code: 10704,
			messageValues: {
				type: "苹果账号"
			}
		};
		const _ = {
				nickname: w,
				apple_openid: h,
				my_invite_code: n,
				role: a
			},
			b = await this._registerExec(_, {
				needPermission: o
			});
		return 0 !== b.code ? b : {
			...b,
			openid: h
		}
	},
	login: async function({
		username: e,
		password: t,
		queryField: r = [],
		needPermission: n
	}) {
		const i = Kr.command,
			o = [];
		r && r.length || (r = ["username"]), r.length > 1 && console.warn(
			"检测到当前使用queryField匹配多字段进行登录操作，需要注意：uni-id并未限制用户名不能是手机号或邮箱，需要开发者自行限制。否则可能出现用户输入abc@xx.com会同时匹配到邮箱为此值的用户和用户名为此值的用户，导致登录失败"
			);
		const {
			usernameToLowerCase: s,
			emailToLowerCase: a,
			passwordErrorLimit: c,
			passwordErrorRetryTime: u
		} = this._getConfig(), d = {
			email: {
				email_confirmed: 1
			},
			mobile: {
				mobile_confirmed: 1
			}
		}, f = {}, l = e.trim();
		if (!l) return {
			code: $,
			messageValues: {
				param: "用户名"
			}
		};
		s && (f.username = l.toLowerCase()), a && (f.email = l.toLowerCase());
		const p = [];
		r.forEach(t => {
			o.push({
				[t]: e,
				...d[t]
			});
			const r = {
				field: t,
				value: e
			};
			"username" === t && f.username !== e ? (o.push({
				[t]: f.username,
				...d[t]
			}), r.fallbackValue = f.username) : "email" === t && f.email !== e && (o.push({
				[t]: f.email,
				...d[t]
			}), r.fallbackValue = f.email), p.push(r)
		});
		const m = await V.where(i.or(...o)).limit(1).get(),
			h = this.context.CLIENTIP,
			g = this._getMatchedUser(m.data, p);
		if (g.code) return g;
		const {
			userMatched: y
		} = g;
		let w = y.login_ip_limit || [];
		w = w.filter(e => e.last_error_time > Date.now() - 1e3 * u);
		let v = w.find(e => e.ip === h);
		if (v && v.error_times >= c) return {
			code: 10103,
			msg: `密码错误次数过多，请${D(v.last_error_time+1e3*u)}再试。`
		};
		const _ = t && t.trim();
		if (!_) return {
			code: $,
			messageValues: {
				param: "密码"
			}
		};
		const b = this._checkPwd(y, _);
		if (0 === b.code) {
			const e = w.indexOf(v);
			e > -1 && w.splice(e, 1);
			const t = {
					login_ip_limit: w
				},
				{
					passwordHash: r,
					passwordVersion: i
				} = b;
			r && i && (t.password = r, t.password_secret_version = i);
			const o = await this._loginExec(y, {
				needPermission: n,
				extraData: t
			});
			return o.code, o
		}
		return v ? (v.error_times++, v.last_error_time = Date.now()) : (v = {
			ip: h,
			error_times: 1,
			last_error_time: Date.now()
		}, w.push(v)), await V.doc(y._id).update({
			login_ip_limit: w
		}), {
			code: 10102,
			msg: "密码错误"
		}
	},
	register: async function(e) {
		const t = [],
			r = [{
				name: "username",
				desc: "用户名"
			}, {
				name: "email",
				desc: "邮箱",
				extraCond: {
					email_confirmed: 1
				}
			}, {
				name: "mobile",
				desc: "手机号",
				extraCond: {
					mobile_confirmed: 1
				}
			}],
			{
				usernameToLowerCase: n,
				emailToLowerCase: i
			} = this._getConfig(),
			o = e.needPermission;
		if (void 0 !== o && delete e.needPermission, r.forEach(r => {
				const o = r.name;
				let s = e[o] && e[o].trim();
				s ? (("username" === r.name && n || "email" === r.name && i) && (s = s.toLowerCase()),
					e[o] = s, t.push({
						[o]: s,
						...r.extraCond
					})) : delete e[o]
			}), 0 === t.length) return {
			code: 20101,
			messageValues: {
				param: "用户名、邮箱或手机号"
			}
		};
		const {
			username: s,
			email: a,
			mobile: c,
			myInviteCode: u
		} = e, d = Hr.command, f = await V.where(d.or(...t)).get();
		if (f && f.data.length > 0) {
			const t = f.data[0];
			for (let n = 0; n < r.length; n++) {
				const i = r[n];
				let o = !0;
				if (i.extraCond && (o = Object.keys(i.extraCond).every(e => t[e] === i.extraCond[e])), t[i
						.name] === e[i.name] && o) return {
					code: 20102,
					messageValues: {
						type: i.desc
					}
				}
			}
		}
		const l = e.password && e.password.trim();
		if (!l) return {
			code: $,
			messageValues: {
				param: "密码"
			}
		};
		const {
			passwordHash: p,
			version: m
		} = this.encryptPwd(l);
		e.password = p, m && (e.password_secret_version = m), e.my_invite_code = u, delete e.myInviteCode;
		const h = await this._registerExec(e, {
			needPermission: o
		});
		return 0 !== h.code ? h : {
			...h,
			username: s,
			email: a,
			mobile: c
		}
	},
	logout: async function(e) {
		const t = await this.checkToken(e);
		if (t.code) return t;
		const r = Fr.command;
		return await V.doc(t.uid).update({
			token: r.pull(e)
		}), {
			code: 0,
			msg: "退出成功"
		}
	},
	getRoleByUid: async function({
		uid: e
	}) {
		if (!e) return {
			code: $,
			messageValues: {
				param: "用户Id"
			}
		};
		const t = await V.doc(e).get();
		return 0 === t.data.length ? {
			code: H
		} : {
			code: 0,
			msg: "获取角色成功",
			role: t.data[0].role || []
		}
	},
	getPermissionByRole: async function({
		roleID: e
	}) {
		if (!e) return {
			code: $,
			messageValues: {
				param: "角色ID"
			}
		};
		if ("admin" === e) {
			return {
				code: 0,
				msg: "获取权限成功",
				permission: (await B.limit(1e3).get()).data.map(e => e.permission_id)
			}
		}
		const t = await U.where({
			role_id: e
		}).get();
		return 0 === t.data.length ? {
			code: F
		} : {
			code: 0,
			msg: "获取权限成功",
			permission: t.data[0].permission || []
		}
	},
	getPermissionByUid: async function({
		uid: e
	}) {
		const t = await V.aggregate().match({
				_id: e
			}).project({
				role: !0
			}).unwind("$role").lookup({
				from: "uni-id-roles",
				localField: "role",
				foreignField: "role_id",
				as: "roleDetail"
			}).unwind("$roleDetail").replaceRoot({
				newRoot: "$roleDetail"
			}).end(),
			r = [];
		return t.data.forEach(e => {
			Array.prototype.push.apply(r, e.permission)
		}), {
			code: 0,
			msg: "获取权限成功",
			permission: A(r)
		}
	},
	bindRole: async function({
		uid: e,
		roleList: t,
		reset: r = !1
	}) {
		const n = {};
		return "string" == typeof t && (t = [t]), n.role = r ? t : qr.push(t), await V.doc(e).update(n), {
			code: 0,
			msg: "角色绑定成功"
		}
	},
	bindPermission: async function({
		roleID: e,
		permissionList: t,
		reset: r = !1
	}) {
		const n = {};
		return "string" == typeof t && (t = [t]), n.permission = r ? t : qr.push(t), await U.where({
			role_id: e
		}).update(n), {
			code: 0,
			msg: "权限绑定成功"
		}
	},
	unbindRole: async function({
		uid: e,
		roleList: t
	}) {
		return "string" == typeof t && (t = [t]), await V.doc(e).update({
			role: qr.pull(qr.in(t))
		}), {
			code: 0,
			msg: "角色解绑成功"
		}
	},
	unbindPermission: async function({
		roleID: e,
		permissionList: t
	}) {
		return "string" == typeof t && (t = [t]), await U.where({
			role_id: e
		}).update({
			permission: qr.pull(qr.in(t))
		}), {
			code: 0,
			msg: "权限解绑成功"
		}
	},
	addRole: async function({
		roleID: e,
		roleName: t,
		comment: r,
		permission: n = []
	}) {
		return e ? "admin" === e ? {
			code: K,
			messageValues: {
				param: "roleID",
				reason: "不可新增roleID为admin的角色"
			}
		} : (await U.add({
			role_id: e,
			role_name: t,
			comment: r,
			permission: n,
			create_date: Date.now()
		}), {
			code: 0,
			msg: "角色新增成功"
		}) : {
			code: $,
			messageValues: {
				param: "角色Id"
			}
		}
	},
	addPermission: async function({
		permissionID: e,
		permissionName: t,
		comment: r
	}) {
		return e ? (await B.add({
			permission_id: e,
			permission_name: t,
			comment: r,
			create_date: Date.now()
		}), {
			code: 0,
			msg: "权限新增成功"
		}) : {
			code: $,
			messageValues: {
				param: "权限ID"
			}
		}
	},
	getRoleList: async function({
		limit: e = 20,
		offset: t = 0,
		needTotal: r = !0
	}) {
		const n = {
			code: 0,
			msg: "获取角色列表成功",
			roleList: (await U.skip(t).limit(e).get()).data
		};
		if (r) {
			const {
				total: e
			} = await U.where({
				_id: qr.exists(!0)
			}).count();
			n.total = e
		}
		return n
	},
	getRoleInfo: async function(e) {
		const t = await U.where({
			role_id: e
		}).get();
		return 0 === t.data.length ? {
			code: F
		} : {
			code: 0,
			...t.data[0]
		}
	},
	updateRole: async function({
		roleID: e,
		roleName: t,
		comment: r,
		permission: n
	}) {
		return e ? (await U.where({
			role_id: e
		}).update({
			role_name: t,
			comment: r,
			permission: n
		}), {
			code: 0,
			msg: "角色更新成功"
		}) : {
			code: $,
			messageValues: {
				param: "角色ID"
			}
		}
	},
	deleteRole: async function({
		roleID: e
	}) {
		const t = y(e);
		if ("string" === t) e = [e];
		else if ("array" !== t) throw new Error("roleID只能为字符串或者数组");
		return await U.where({
			role_id: qr.in(e)
		}).remove(), await V.where({
			role: qr.elemMatch(qr.in(e))
		}).update({
			role: qr.pullAll(e)
		}), {
			code: 0,
			msg: "角色删除成功"
		}
	},
	getPermissionList: async function({
		limit: e = 20,
		offset: t = 0,
		needTotal: r = !0
	}) {
		const n = {
			code: 0,
			msg: "获取权限列表成功",
			permissionList: (await B.skip(t).limit(e).get()).data
		};
		if (r) {
			const {
				total: e
			} = await B.where({
				_id: qr.exists(!0)
			}).count();
			n.total = e
		}
		return n
	},
	getPermissionInfo: async function(e) {
		const t = await B.where({
			permission_id: e
		}).get();
		return 0 === t.data.length ? {
			code: $,
			messageValues: {
				param: "权限ID"
			}
		} : {
			code: 0,
			...t.data[0]
		}
	},
	updatePermission: async function({
		permissionID: e,
		permissionName: t,
		comment: r
	}) {
		return e ? (await B.where({
			permission_id: e
		}).update({
			permission_name: t,
			comment: r
		}), {
			code: 0,
			msg: "权限更新成功"
		}) : {
			code: $,
			messageValues: {
				param: "权限ID"
			}
		}
	},
	deletePermission: async function({
		permissionID: e
	}) {
		const t = y(e);
		if ("string" === t) e = [e];
		else if ("array" !== t) throw new Error("permissionID只能为字符串或者数组");
		return await B.where({
			permission_id: qr.in(e)
		}).remove(), await U.where({
			permission: qr.elemMatch(qr.in(e))
		}).update({
			permission: qr.pullAll(e)
		}), {
			code: 0,
			msg: "权限删除成功"
		}
	},
	bindAlipay: async function({
		uid: e,
		code: t,
		platform: r
	}) {
		const n = r || this.context.PLATFORM,
			{
				openid: i
			} = await this._getAlipayApi({
				platform: n
			}).code2Session(t);
		if (!i) return {
			code: 60401,
			messageValues: {
				account: "支付宝账号"
			}
		};
		const o = await V.where({
			ali_openid: i
		}).get();
		return o && o.data && o.data.length > 0 ? {
			code: 60402,
			messageValues: {
				type: "支付宝账号"
			}
		} : (await V.doc(e).update({
			ali_openid: i
		}), {
			code: 0,
			openid: i,
			msg: "绑定成功"
		})
	},
	bindEmail: async function({
		uid: e,
		email: t,
		code: r
	}) {
		if (!(t = t && t.trim())) return {
			code: $,
			messageValues: {
				param: "邮箱"
			}
		};
		const {
			emailToLowerCase: n
		} = this._getConfig();
		n && (t = t.toLowerCase());
		const i = await V.where({
			email: t,
			email_confirmed: 1
		}).limit(1).get();
		if (i && i.data.length > 0) return {
			code: 60201,
			messageValues: {
				type: "邮箱"
			}
		};
		if (r) {
			const e = await this.verifyCode({
				email: t,
				code: r,
				type: "bind"
			});
			if (0 !== e.code) return e
		}
		return await V.doc(e).update({
			email: t,
			email_confirmed: 1
		}), {
			code: 0,
			msg: "邮箱绑定成功",
			email: t
		}
	},
	bindMobile: async function({
		uid: e,
		mobile: t,
		code: r,
		openid: n,
		access_token: i,
		type: o = "sms"
	}) {
		if ("univerify" === o) {
			const e = this._getConfig(),
				r = e && e.service && e.service.univerify;
			if (!r) throw new Error("请在config.json中配置service.univerify下一键登录相关参数");
			const o = await $r({
				...r,
				openid: n,
				access_token: i
			});
			if (0 !== o.code) return o;
			t = "" + o.phoneNumber
		}
		const s = await V.where({
			mobile: t,
			mobile_confirmed: 1
		}).count();
		if (s && s.total > 0) return {
			code: 60101,
			messageValues: {
				type: "手机号"
			}
		};
		if ("sms" === o && r) {
			const e = await this.verifyCode({
				mobile: t,
				code: r,
				type: "bind"
			});
			if (0 !== e.code) return e
		}
		return I("bindMobile -> upRes", await V.doc(e).update({
			mobile: t,
			mobile_confirmed: 1
		})), {
			code: 0,
			msg: "手机号码绑定成功",
			mobile: t
		}
	},
	bindWeixin: async function({
		uid: e,
		code: t,
		platform: r
	}) {
		const n = r || this.context.platform,
			i = "mp-weixin" === n,
			{
				openid: o,
				unionid: s,
				sessionKey: a,
				accessToken: c,
				refreshToken: u,
				expired: d
			} = await this._getWeixinApi({
				platform: n
			})[i ? "code2Session" : "getOauthAccessToken"](t);
		if (!o) return {
			code: 60301,
			messageValues: {
				account: "微信openid"
			}
		};
		const f = Gr.command,
			l = [{
				wx_openid: {
					[n]: o
				}
			}];
		s && l.push({
			wx_unionid: s
		});
		const p = await V.where(f.or(...l)).get();
		if (p && p.data && p.data.length > 0) return {
			code: 60302,
			messageValues: {
				type: "微信账号"
			}
		};
		const m = {
			wx_openid: {
				[n]: o
			}
		};
		let h;
		return s && (m.wx_unionid = s), await V.doc(e).update(m), h = i ? {
			sessionKey: a
		} : {
			accessToken: c,
			refreshToken: u,
			accessTokenExpired: d
		}, {
			code: 0,
			openid: o,
			unionid: s,
			...h,
			msg: "绑定成功"
		}
	},
	unbindAlipay: async function(e) {
		const t = Yr.command,
			r = await V.doc(e).update({
				ali_openid: t.remove()
			});
		return I("upRes:", r), 1 === r.updated ? {
			code: 0,
			msg: "支付宝解绑成功"
		} : {
			code: 70401,
			msg: "支付宝解绑失败，请稍后再试"
		}
	},
	unbindEmail: async function({
		uid: e,
		email: t,
		code: r
	}) {
		if (t = t && t.trim(), !e || !t) return {
			code: $,
			messageValues: {
				param: e ? "邮箱" : "用户Id"
			}
		};
		const {
			emailToLowerCase: n
		} = this._getConfig();
		if (r) {
			const e = await this.verifyCode({
				email: t,
				code: r,
				type: "unbind"
			});
			if (0 !== e.code) return e
		}
		const i = Jr.command;
		let o = {
			_id: e,
			email: t
		};
		if (n) {
			const r = t.toLowerCase();
			r !== t && (o = i.or(o, {
				_id: e,
				email: r
			}))
		}
		return 1 === (await V.where(o).update({
			email: i.remove(),
			email_confirmed: i.remove()
		})).updated ? {
			code: 0,
			msg: "邮箱解绑成功"
		} : {
			code: 70201,
			msg: "邮箱解绑失败，请稍后再试"
		}
	},
	unbindMobile: async function({
		uid: e,
		mobile: t,
		code: r
	}) {
		if (r) {
			const e = await this.verifyCode({
				mobile: t,
				code: r,
				type: "unbind"
			});
			if (0 !== e.code) return e
		}
		const n = zr.command;
		return 1 === (await V.where({
			_id: e,
			mobile: t
		}).update({
			mobile: n.remove(),
			mobile_confirmed: n.remove()
		})).updated ? {
			code: 0,
			msg: "手机号解绑成功"
		} : {
			code: 70101,
			msg: "手机号解绑失败，请稍后再试"
		}
	},
	unbindWeixin: async function(e) {
		const t = Wr.command,
			r = await V.doc(e).update({
				wx_openid: t.remove(),
				wx_unionid: t.remove()
			});
		return I("upRes:", r), 1 === r.updated ? {
			code: 0,
			msg: "微信解绑成功"
		} : {
			code: 70301,
			msg: "微信解绑失败，请稍后再试"
		}
	},
	code2SessionAlipay: async function(e) {
		let t = e;
		"string" == typeof e && (t = {
			code: e
		});
		try {
			const e = t.platform || this.context.PLATFORM,
				r = await this._getAlipayApi({
					platform: e
				}).code2Session(t.code);
			return r.openid ? {
				code: 0,
				msg: "",
				...r
			} : {
				code: 80701,
				messageValues: {
					account: "支付宝账号"
				}
			}
		} catch (e) {
			return {
				code: 80702,
				messageValues: {
					account: "支付宝账号"
				}
			}
		}
	},
	code2SessionWeixin: async function(e) {
		let t = e;
		"string" == typeof e && (t = {
			code: e
		});
		try {
			const e = t.platform || this.context.PLATFORM,
				r = await this._getWeixinApi({
					platform: e
				})["mp-weixin" === e ? "code2Session" : "getOauthAccessToken"](t.code);
			return r.openid ? {
				code: 0,
				msg: "",
				...r
			} : {
				code: 80601,
				messageValues: {
					account: "微信openid"
				}
			}
		} catch (e) {
			return {
				code: 80602,
				messageValues: {
					account: "微信openid"
				}
			}
		}
	},
	verifyAppleIdentityToken: async function({
		identityToken: e,
		platform: t
	}) {
		const r = t || this.context.PLATFORM,
			{
				code: n,
				msg: i
			} = await Mr({
				clientType: r
			}).verifyIdentityToken(e);
		return 0 !== n ? {
			code: n,
			msg: i
		} : {
			code: n,
			msg: "验证通过",
			...i
		}
	},
	wxBizDataCrypt: async function({
		code: e,
		sessionKey: t,
		encryptedData: r,
		iv: i
	}) {
		if (!r) return {
			code: 80805,
			messageValues: {
				param: "encryptedData"
			}
		};
		if (!i) return {
			code: 80806,
			messageValues: {
				param: "iv"
			}
		};
		if (!e && !t) return {
			code: 80804,
			messageValues: {
				param: "code或sessionKey"
			}
		};
		const o = this._getWeixinApi();
		if (!t) {
			const r = await o.code2Session(e);
			if (!r.sessionKey) return {
				code: 80801,
				msg: "sessionKey获取失败"
			};
			t = r.sessionKey
		}
		t = Buffer.from(t, "base64"), r = Buffer.from(r, "base64"), i = Buffer.from(i, "base64");
		try {
			var s = n.createDecipheriv("aes-128-cbc", t, i);
			s.setAutoPadding(!0);
			var a = s.update(r, "binary", "utf8");
			a += s.final("utf8"), a = JSON.parse(a)
		} catch (e) {
			return {
				code: 80802,
				msg: "解密失败：" + e.message
			}
		}
		return a.watermark.appid !== o.options.appId ? {
			code: 80803,
			msg: "appid不匹配"
		} : {
			code: 0,
			msg: "解密成功",
			...a
		}
	},
	encryptPwd: function(e, {
		value: t,
		version: r
	} = {}) {
		if (!(e = e && e.trim())) throw new Error("密码不可为空");
		if (!t) {
			const e = this._getConfig(),
				{
					passwordSecret: n
				} = e;
			if ("array" === y(n)) {
				const e = n.sort((e, t) => e.version - t.version);
				t = e[e.length - 1].value, r = e[e.length - 1].version
			} else t = n
		}
		if (!t) throw new Error("passwordSecret不正确");
		const i = n.createHmac("sha1", t.toString("ascii"));
		return i.update(e), {
			passwordHash: i.digest("hex"),
			version: r
		}
	},
	checkToken: async function(e, {
		needPermission: t,
		needUserInfo: r = !0
	} = {}) {
		const n = this._getConfig();
		try {
			const i = this._verifyToken(e);
			if (i.code) return i;
			const {
				uid: o,
				needPermission: s,
				role: a,
				permission: c,
				exp: u
			} = i, d = a && c;
			t = void 0 === t ? s : t;
			const f = n.removePermissionAndRoleFromToken || !d || r,
				l = !n.removePermissionAndRoleFromToken && !d || n.removePermissionAndRoleFromToken && d ||
				n.tokenExpiresThreshold && u - Date.now() / 1e3 < n.tokenExpiresThreshold;
			let p = {};
			if (f || l) {
				const t = await V.doc(o).get();
				if (!t.data || 0 === t.data.length || !t.data[0].token) return {
					code: 30202,
					msg: "token不合法，请重新登录"
				};
				if (p = t.data[0], 1 === p.status) return {
					code: 10001,
					msg: "账号已禁用"
				};
				let r = p.token;
				if (r ? "string" == typeof r && (r = [r]) : r = [], -1 === r.indexOf(e)) return {
					code: 30202,
					msg: "token不合法，请重新登录"
				}
			}
			const m = {
				code: 0,
				msg: "token校验通过",
				uid: o
			};
			let h, g;
			if (d && (m.role = a, m.permission = c), r && (m.userInfo = p), (!d && t || l) && (h = m.role =
					p.role || [], g = 0 === h.length || h.includes("admin") ? m.permission = [] : m
					.permission = await this._getPermissionListByRoleList(m.role), t && (m.role = h, m
						.permission = g)), l) {
				let e;
				e = n.removePermissionAndRoleFromToken ? await this.createToken({
					uid: o,
					needPermission: s
				}) : await this.createToken({
					uid: o,
					role: h,
					permission: g
				});
				let t = p.token;
				t ? "string" == typeof t && (t = [t]) : t = [];
				const r = this._getExpiredToken(t);
				return t = t.filter(e => -1 === r.indexOf(e)), t.push(e.token), await V.doc(o).update({
					token: t,
					last_login_date: Date.now(),
					last_login_ip: this.context.CLIENTIP
				}), {
					...m,
					...e
				}
			}
			return m
		} catch (e) {
			return {
				code: 90001,
				msg: "数据库读写异常：" + e.message,
				err: e
			}
		}
	},
	createToken: function({
		uid: e,
		needPermission: t,
		role: r,
		permission: n
	}) {
		if (!e) return {
			code: 30101,
			messageValues: {
				param: "用户ID"
			}
		};
		const i = {
				uid: e,
				needPermission: t,
				role: r,
				permission: n
			},
			o = this._getConfig();
		if (!this.interceptorMap.has("customToken")) {
			const e = {
				...i
			};
			return this._createTokenInternal({
				signContent: e,
				config: o
			})
		}
		const s = this.interceptorMap.get("customToken");
		if ("function" != typeof s) throw new Error("custom-token.js应导出一个function");
		const a = s(i);
		return a instanceof Promise ? a.then(e => this._createTokenInternal({
			signContent: e,
			config: o
		})) : this._createTokenInternal({
			signContent: a,
			config: o
		})
	},
	_checkPwd: function(e, t) {
		if (!t) return {
			code: 1,
			message: "密码不能为空"
		};
		const {
			password: r,
			password_secret_version: n
		} = e, i = this._getConfig(), {
			passwordSecret: o
		} = i, s = y(o);
		if ("string" === s) {
			const {
				passwordHash: e
			} = this.encryptPwd(t, {
				value: o
			});
			return e === r ? {
				code: 0,
				message: "密码校验通过"
			} : {
				code: 2,
				message: "密码不正确"
			}
		}
		if ("array" !== s) throw new Error("config内passwordSecret类型错误，只可设置string类型和array类型");
		const a = o.sort((e, t) => e.version - t.version);
		let c;
		if (c = n ? a.find(e => e.version === n) : a[0], !c) return {
			code: 3,
			message: "secretVersion不正确"
		};
		const u = a[a.length - 1],
			{
				passwordHash: d
			} = this.encryptPwd(t, c);
		if (d === r) {
			const e = {
				code: 0,
				message: "密码校验通过"
			};
			if (c !== u) {
				const {
					passwordHash: r,
					version: n
				} = this.encryptPwd(t, u);
				e.passwordHash = r, e.passwordVersion = n
			}
			return e
		}
		return {
			code: 4,
			message: ""
		}
	},
	_verifyToken: function(e) {
		const t = this._getConfig();
		let r;
		try {
			r = Rr(e, t.tokenSecret)
		} catch (e) {
			return "TokenExpiredError" === e.name ? {
				code: 30203,
				msg: "token已过期，请重新登录",
				err: e
			} : {
				code: 30204,
				msg: "非法token",
				err: e
			}
		}
		return t.bindTokenToDevice && r.clientId && r.clientId !== this._getClientUaHash() ? {
			code: 30201,
			msg: "token不合法，请重新登录"
		} : {
			code: 0,
			message: "",
			...r
		}
	},
	_getExpiredToken: function(e) {
		const t = this._getConfig(),
			r = [];
		return e.forEach(e => {
			try {
				Rr(e, t.tokenSecret)
			} catch (t) {
				r.push(e)
			}
		}), r
	},
	_getPermissionListByRoleList: async function(e) {
		if (!Array.isArray(e)) return [];
		if (0 === e.length) return [];
		if (e.includes("admin")) {
			return (await B.limit(500).get()).data.map(e => e.permission_id)
		}
		const t = await U.where({
				role_id: Xr.in(e)
			}).get(),
			r = [];
		return t.data.forEach(e => {
			Array.prototype.push.apply(r, e.permission)
		}), A(r)
	},
	_getClientUaHash: function() {
		const e = n.createHash("md5"),
			t = /MicroMessenger/i.test(this.context.CLIENTUA) ? this.context.CLIENTUA.replace(
				/(MicroMessenger\S+).*/i, "$1") : this.context.CLIENTUA;
		return e.update(t), e.digest("hex")
	},
	_createTokenInternal: function({
		signContent: e,
		config: t
	}) {
		return "object" === y(e) && e.uid ? (t.bindTokenToDevice && (e.clientId = this
	._getClientUaHash()), {
			token: Or(e, t.tokenSecret, {
				expiresIn: t.tokenExpiresIn
			}),
			tokenExpired: Date.now() + 1e3 * t.tokenExpiresIn
		}) : {
			code: 30101,
			messageValues: {
				param: "用户ID"
			}
		}
	},
	setVerifyCode: async function({
		mobile: e,
		email: t,
		code: r,
		expiresIn: n,
		type: i
	}) {
		if (t = t && t.trim(), e = e && e.trim(), t) {
			const {
				emailToLowerCase: e
			} = this._getConfig();
			e && (t = t.toLowerCase())
		}
		if (!e && !t) return {
			code: 50101,
			messageValues: {
				param: "手机号或邮箱"
			}
		};
		if (e && t) return {
			code: 50102,
			messageValues: {
				param: "参数",
				reason: "手机号和邮箱不可同时存在"
			}
		};
		r || (r = x()), n || (n = 180);
		const o = Date.now(),
			s = {
				mobile: e,
				email: t,
				type: i,
				code: r,
				state: 0,
				ip: this.context.CLIENTIP,
				created_at: o,
				expired_at: o + 1e3 * n
			};
		return I("addRes", await L.add(s)), {
			code: 0,
			mobile: e,
			email: t
		}
	},
	verifyCode: async function({
		mobile: e,
		email: t,
		code: r,
		type: n
	}) {
		if (t = t && t.trim(), e = e && e.trim(), t) {
			const {
				emailToLowerCase: e
			} = this._getConfig();
			e && (t = t.toLowerCase())
		}
		if (!e && !t) return {
			code: 50201,
			messageValues: {
				param: "手机号或邮箱"
			}
		};
		if (e && t) return {
			code: 50203,
			messageValues: {
				param: "参数",
				reason: "手机号和邮箱不可同时存在"
			}
		};
		const i = Qr.command,
			o = Date.now(),
			s = {
				mobile: e,
				email: t,
				type: n,
				code: r,
				state: 0,
				expired_at: i.gt(o)
			},
			a = await L.where(s).orderBy("created_at", "desc").limit(1).get();
		if (I("verifyRecord:", a), a && a.data && a.data.length > 0) {
			const e = a.data[0];
			return I("upRes", await L.doc(e._id).update({
				state: 1
			})), {
				code: 0,
				msg: "验证通过"
			}
		}
		return {
			code: 50202,
			msg: "验证码错误或已失效"
		}
	},
	sendSmsCode: async function({
		mobile: e,
		code: t,
		type: r,
		templateId: n
	}) {
		if (!e) throw new Error("手机号码不可为空");
		if (t || (t = x()), !r) throw new Error("验证码类型不可为空");
		const i = this._getConfig();
		let o = i && i.service && i.service.sms;
		if (!o) throw new Error("请在config.json或init方法中配置service.sms下短信相关参数");
		o = Object.assign({
			codeExpiresIn: 300
		}, o);
		const s = ["smsKey", "smsSecret"];
		if (!n && !o.name) throw new Error(
			"不传入templateId时应在config.json或init方法内service.sms下配置name字段以正确使用uniID_code模板");
		for (let e = 0, t = s.length; e < t; e++) {
			const t = s[e];
			if (!o[t]) throw new Error("请在config.json或init方法中service.sms下配置" + t)
		}
		const {
			name: a,
			smsKey: c,
			smsSecret: u,
			codeExpiresIn: d
		} = o;
		let f;
		switch (r) {
			case "login":
				f = "登录";
				break;
			default:
				f = "验证手机号"
		}
		try {
			const i = {
				name: a,
				code: t,
				action: f,
				expMinute: "" + Math.round(d / 60)
			};
			a && (i.name = a), await uniCloud.sendSms({
				smsKey: c,
				smsSecret: u,
				phone: e,
				templateId: n || "uniID_code",
				data: i
			});
			const o = await this.setVerifyCode({
				mobile: e,
				code: t,
				expiresIn: d,
				type: r
			});
			return o.code >= 0 ? o : {
				code: 0,
				msg: "验证码发送成功"
			}
		} catch (e) {
			return {
				code: 50301,
				msg: "验证码发送失败, " + e.message
			}
		}
	}
});
let en;
try {
	en = require("uni-config-center")
} catch (e) {}
const tn =
	"\n传入配置的方式有以下几种：\n- 在uni-config-center公共模块的uni-id目录下放置config.json文件（推荐）\n- 在uni-id公共模块的目录下放置config.json文件\n- 使用init方法传入配置\n- 如果使用uni-config-center且HBuilderX版本低于3.1.8，批量上传云函数及公共模块后需要再单独上传一次uni-id";
class rn {
	constructor({
		context: e,
		config: t
	} = {}) {
		const r = en && en({
			pluginId: "uni-id"
		});
		this.pluginConfig = r, this.config = t || this._getConfigContent(), Object.defineProperty(this, "context", {
			get: () => e || global.__ctx__
		}), this.interceptorMap = new Map, r && r.hasFile("custom-token.js") && this.setInterceptor(
			"customToken", require(r.resolve("custom-token.js")))
	}
	_getConfigContent() {
		if (this.pluginConfig && this.pluginConfig.hasFile("config.json")) {
			this._hasConfigFile = !0;
			try {
				return this.pluginConfig.config()
			} catch (e) {
				return
			}
		}
		const e = r.resolve(__dirname, "config.json");
		this._hasConfigFile = t.existsSync(e);
		try {
			return require(e)
		} catch (e) {}
	}
	init(e) {
		this.config = e
	}
	setInterceptor(e, t) {
		this.interceptorMap.set(e, t)
	}
	_getConfig(e) {
		const t = this.config && 0 !== Object.keys(this.config).length;
		if (this._hasConfigFile && !t) throw new Error("请确保公用模块uni-id对应的配置文件格式正确（不可包含注释）" + tn);
		if (!t) throw new Error("公用模块uni-id缺少配置信息" + tn);
		const r = Object.assign(this.config, this.config[e || this.context.PLATFORM]) || {},
			n = Object.assign({
				bindTokenToDevice: !1,
				tokenExpiresIn: 7200,
				tokenExpiresThreshold: 1200,
				passwordErrorLimit: 6,
				passwordErrorRetryTime: 3600,
				usernameToLowerCase: !0,
				emailToLowerCase: !0
			}, r);
		return ["passwordSecret", "tokenSecret", "tokenExpiresIn", "passwordErrorLimit", "passwordErrorRetryTime"]
			.forEach(e => {
				if (!n || !n[e]) throw new Error("请在公用模块uni-id的配置信息中内添加配置项：" + e)
			}), n
	}
}
for (const e in Zr) rn.prototype[e] = Zr[e];
const nn = ["wxBizDataCrypt", "verifyAppleIdentityToken", "code2SessionWeixin", "code2SessionAlipay"];

function on({
	context: e,
	config: t
} = {}) {
	const r = new rn({
		context: e,
		config: t
	});
	return new Proxy(r, {
		get(e, t) {
			if (t in e && 0 !== t.indexOf("_")) return "function" == typeof e[t] ? (nn.indexOf(t) > -1 &&
				console.warn(`uniID.${t}方法即将废弃，后续版本将不再暴露此方法`), (r = e[t], function() {
					const e = r.apply(this, arguments);
					return g(e) ? e.then(e => (N(e), e)) : (N(e), e)
				}).bind(e)) : e[t];
			var r
		}
	})
}
rn.prototype.createInstance = on;
var sn = on();
module.exports = sn;

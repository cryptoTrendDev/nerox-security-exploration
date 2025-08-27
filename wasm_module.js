"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8894],
  {
    54947: (e, n, t) => {
      e.exports = t.p + "static/media/crypt_bg.cbf60fca.wasm";
    },
    58894: (e, n, t) => {
      let r;
      t.r(n),
        t.d(n, {
          create_key: () => w,
          decrypt: () => b,
          default: () => v,
          encrypt: () => u,
          initSync: () => m,
        });
      let i = 0,
        o = null;
      function a() {
        return (null === o || 0 === o.byteLength) && (o = new Uint8Array(r.memory.buffer)), o;
      }
      let l =
          "undefined" != typeof TextEncoder
            ? new TextEncoder("utf-8")
            : {
                encode: () => {
                  throw Error("TextEncoder not available");
                },
              },
        c =
          "function" == typeof l.encodeInto
            ? function (e, n) {
                return l.encodeInto(e, n);
              }
            : function (e, n) {
                let t = l.encode(e);
                return (
                  n.set(t),
                  {
                    read: e.length,
                    written: t.length,
                  }
                );
              };
      function s(e, n, t) {
        if (void 0 === t) {
          let t = l.encode(e),
            r = n(t.length, 1) >>> 0;
          return (
            a()
              .subarray(r, r + t.length)
              .set(t),
            (i = t.length),
            r
          );
        }
        let r = e.length,
          o = n(r, 1) >>> 0,
          s = a(),
          _ = 0;
        for (; _ < r; _++) {
          let n = e.charCodeAt(_);
          if (n > 127) break;
          s[o + _] = n;
        }
        if (_ !== r) {
          0 !== _ && (e = e.slice(_)), (o = t(o, r, (r = _ + 3 * e.length), 1) >>> 0);
          let n = c(e, a().subarray(o + _, o + r));
          (_ += n.written), (o = t(o, r, _, 1) >>> 0);
        }
        return (i = _), o;
      }
      function _(e, n) {
        let t = n(1 * e.length, 1) >>> 0;
        return a().set(e, t / 1), (i = e.length), t;
      }
      let d =
        "undefined" != typeof TextDecoder
          ? new TextDecoder("utf-8", {
              ignoreBOM: !0,
              fatal: !0,
            })
          : {
              decode: () => {
                throw Error("TextDecoder not available");
              },
            };
      function f(e, n) {
        return (e >>>= 0), d.decode(a().subarray(e, e + n));
      }
      function u(e, n, t) {
        let o, a;
        try {
          let l = s(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            c = i,
            d = _(n, r.__wbindgen_malloc),
            u = i,
            b = s(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
            w = i,
            g = r.encrypt(l, c, d, u, b, w);
          return (o = g[0]), (a = g[1]), f(g[0], g[1]);
        } finally {
          r.__wbindgen_free(o, a, 1);
        }
      }
      function b(e, n, t) {
        let o, a;
        try {
          let l = s(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            c = i,
            d = _(n, r.__wbindgen_malloc),
            u = i,
            b = s(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
            w = i,
            g = r.decrypt(l, c, d, u, b, w);
          return (o = g[0]), (a = g[1]), f(g[0], g[1]);
        } finally {
          r.__wbindgen_free(o, a, 1);
        }
      }
      function w(e, n, t, o) {
        let a, l;
        try {
          let c = s(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            d = i,
            u = _(n, r.__wbindgen_malloc),
            b = i,
            w = s(t, r.__wbindgen_malloc, r.__wbindgen_realloc),
            g = i,
            y = s(o, r.__wbindgen_malloc, r.__wbindgen_realloc),
            p = i,
            m = r.create_key(c, d, u, b, w, g, y, p);
          return (a = m[0]), (l = m[1]), f(m[0], m[1]);
        } finally {
          r.__wbindgen_free(a, l, 1);
        }
      }
      async function g(e, n) {
        if ("function" == typeof Response && e instanceof Response) {
          if ("function" == typeof WebAssembly.instantiateStreaming)
            try {
              return await WebAssembly.instantiateStreaming(e, n);
            } catch (n) {
              if ("application/wasm" != e.headers.get("Content-Type"))
                console.warn(
                  "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                  n
                );
              else throw n;
            }
          let t = await e.arrayBuffer();
          return await WebAssembly.instantiate(t, n);
        }
        {
          let t = await WebAssembly.instantiate(e, n);
          return t instanceof WebAssembly.Instance
            ? {
                instance: t,
                module: e,
              }
            : t;
        }
      }
      function y() {
        let e = {};
        return (
          (e.wbg = {}),
          (e.wbg.__wbindgen_init_externref_table = function () {
            let e = r.__wbindgen_export_0,
              n = e.grow(4);
            e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
          }),
          e
        );
      }
      function p(e, n) {
        return (r = e.exports), (h.__wbindgen_wasm_module = n), (o = null), r.__wbindgen_start(), r;
      }
      function m(e) {
        if (void 0 !== r) return r;
        void 0 !== e &&
          (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module: e } = e)
            : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
        let n = y();
        return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), p(new WebAssembly.Instance(e, n), e);
      }
      async function h(e) {
        if (void 0 !== r) return r;
        void 0 !== e &&
          (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                "using deprecated parameters for the initialization function; pass a single object instead"
              )),
          void 0 === e && (e = new t.U(t(54947)));
        let n = y();
        ("string" == typeof e ||
          ("function" == typeof Request && e instanceof Request) ||
          ("function" == typeof URL && e instanceof URL)) &&
          (e = fetch(e));
        let { instance: i, module: o } = await g(await e, n);
        return p(i, o);
      }
      "undefined" != typeof TextDecoder && d.decode();
      let v = h;
    },
  },
]);

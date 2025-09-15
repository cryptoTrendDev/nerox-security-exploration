const fs = require("node:fs");

// Read the .wasm file
const wasmBuffer = fs.readFileSync("./crypt_bg.9c780d99.wasm");

let r,
  window = {
    location: {
      host: "app.nerox.ai", // app, dev
    },
  };

let l =
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

function o(e) {
  let n = r.__externref_table_alloc();
  return r.__wbindgen_export_2.set(n, e), n;
}
let d = null;
function w() {
  return (
    (null === d || !0 === d.buffer.detached || (void 0 === d.buffer.detached && d.buffer !== r.memory.buffer)) &&
      (d = new DataView(r.memory.buffer)),
    d
  );
}
function c(e, n) {
  return (e >>>= 0), l.decode(a().subarray(e, e + n));
}
function i(e, n) {
  try {
    return e.apply(this, n);
  } catch (n) {
    let e = o(n);
    r.__wbindgen_exn_store(e);
  }
}

// Set up imports object
const imports = {
  env: {},
  wbg: {
    __wbindgen_init_externref_table: function () {
      let e = r.__wbindgen_export_2,
        n = e.grow(4);
      e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
    },
    __wbg_new_8a6f238a6ece86ea: function () {
      return Error();
    },
    __wbg_stack_0ed75d68575b0f3c: function (e, n) {
      let t = b(n.stack, r.__wbindgen_malloc, r.__wbindgen_realloc),
        o = s;
      w().setInt32(e + 4, o, !0), w().setInt32(e + 0, t, !0);
    },
    __wbg_location_350d99456c2f3693: function (e) {
      return e.location;
    },
    __wbg_newnoargs_105ed471475aaf50: function (e, n) {
      return Function(c(e, n));
    },
    __wbg_stack_0ed75d68575b0f3c: function (e, n) {
      let t = b(n.stack, r.__wbindgen_malloc, r.__wbindgen_realloc),
        o = s;
      w().setInt32(e + 4, o, !0), w().setInt32(e + 0, t, !0);
    },
    __wbg_static_accessor_GLOBAL_88a902d13a557d07: function () {
      let e = "undefined" == typeof global ? null : global;
      return null == e ? 0 : o(e);
    },
    __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: function () {
      let e = "undefined" == typeof globalThis ? null : globalThis;
      return null == e ? 0 : o(e);
    },
    __wbg_static_accessor_SELF_37c5d418e4bf5819: function () {
      let e = "undefined" == typeof self ? null : self;
      return null == e ? 0 : o(e);
    },
    __wbg_static_accessor_WINDOW_5de37043a91a9c40: function () {
      let e = window;
      return null == e ? 0 : o(e);
    },
    __wbindgen_init_externref_table: function () {
      let e = r.__wbindgen_export_2,
        n = e.grow(4);
      e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
    },
    __wbindgen_is_undefined: function (e) {
      return void 0 === e;
    },
    __wbindgen_throw: function (e, n) {
      throw Error(c(e, n));
    },
    __wbg_error_7534b8e9a36f1ab4: function (e, n) {
      let t, o;
      try {
        (t = e), (o = n), console.error(c(e, n));
      } finally {
        r.__wbindgen_free(t, o, 1);
      }
    },
    __wbg_host_9bd7b5dc07c48606: function () {
      return i(function (e, n) {
        let t = b(n.host, r.__wbindgen_malloc, r.__wbindgen_realloc),
          o = s;
        w().setInt32(e + 4, o, !0), w().setInt32(e + 0, t, !0);
      }, arguments);
    },
    __wbg_instanceof_Window_def73ea0955fc569: function (e) {
      let n;
      // try {
      //   n = e instanceof Window;
      // } catch (e) {
      //   n = !1;
      // }
      // return n;
      return true;
    },
    __wbg_call_672a4d21634d4a24: function () {
      return i(function (e, n) {
        return e.call(n);
      }, arguments);
    },
  },
};

function loadWasmModule() {
  if (r) return r;
  return WebAssembly.instantiate(new Uint8Array(wasmBuffer), imports).then((wasmModule) => {
    const instance = wasmModule.instance;
    const exports = instance.exports;
    r = exports;

    // Call __wbindgen_start for initialization if present
    if (typeof exports.__wbindgen_start === "function") {
      exports.__wbindgen_start();
      console.log("__wbindgen_start called for WASM initialization.");
    } else {
      console.warn("__wbindgen_start not found in WASM exports.");
    }

    return exports;
  });
}

let s = 0,
  f =
    "undefined" != typeof TextEncoder
      ? new TextEncoder("utf-8")
      : {
          encode: () => {
            throw Error("TextEncoder not available");
          },
        },
  u =
    "function" == typeof f.encodeInto
      ? function (e, n) {
          return f.encodeInto(e, n);
        }
      : function (e, n) {
          let t = f.encode(e);
          return (
            n.set(t),
            {
              read: e.length,
              written: t.length,
            }
          );
        };

let _ = null;
function a() {
  return (null === _ || 0 === _.byteLength) && (_ = new Uint8Array(r.memory.buffer)), _;
}

function b(e, n, t) {
  if (void 0 === t) {
    let t = f.encode(e),
      r = n(t.length, 1) >>> 0;
    return (
      a()
        .subarray(r, r + t.length)
        .set(t),
      (s = t.length),
      r
    );
  }
  let r = e.length,
    o = n(r, 1) >>> 0,
    i = a(),
    l = 0;
  for (; l < r; l++) {
    let n = e.charCodeAt(l);
    if (n > 127) break;
    i[o + l] = n;
  }
  if (l !== r) {
    0 !== l && (e = e.slice(l)), (o = t(o, r, (r = l + 3 * e.length), 1) >>> 0);
    let n = u(e, a().subarray(o + l, o + r));
    (l += n.written), (o = t(o, r, l, 1) >>> 0);
  }
  return (s = l), o;
}

function p(e, n) {
  let t = n(1 * e.length, 1) >>> 0;
  return a().set(e, t / 1), (s = e.length), t;
}

function decrypt(e, n, t, o) {
  let i, l;
  try {
    let _ = b(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
      a = s,
      f = b(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
      u = s,
      d = p(t, r.__wbindgen_malloc),
      w = s,
      g = b(o, r.__wbindgen_malloc, r.__wbindgen_realloc),
      y = s,
      m = r.decrypt(_, a, f, u, d, w, g, y);
    return (i = m[0]), (l = m[1]), c(m[0], m[1]);
  } finally {
    r.__wbindgen_free(i, l, 1);
  }
}

async function decryptData(encryptedData, xClientId) {
  let [n, a] = encryptedData.split(":");
  let [o, s] = xClientId.toString().split("_");
  let d = (function (e) {
    if (e.length % 2 != 0) throw Error("Invalid hex string");
    let t = new Uint8Array(e.length / 2);
    for (let r = 0; r < e.length; r += 2) t[r / 2] = parseInt(e.substr(r, 2), 16);
    return t;
  })(n);
  let u = JSON.parse(decrypt(o, s, d, a));
  return u;
}

async function main() {
  await loadWasmModule();
  console.log(r);
  const data =
    "8ba62552fe63a1a74ba1c2846b2d2811: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";
  const xClientId = "1757860532_d806616e-6f8f-4587-92d3-78e5d7cc8bd8";
  let d = await decryptData(data, xClientId);
  console.log("decrypted data:", d);
}

main().catch((e) => console.error(e));

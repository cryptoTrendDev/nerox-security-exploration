const fs = require("node:fs");

// Read the .wasm file
const wasmBuffer = fs.readFileSync("./crypt_bg.cbf60fca.wasm");

let r,
  i = 0,
  o = null;

// Set up imports object
const imports = {
  env: {},
  wbg: {
    __wbindgen_init_externref_table: function () {
      let e = r.__wbindgen_export_0,
        n = e.grow(4);
      e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
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

function s2(e) {
  if (e.length % 2 != 0) throw Error("Invalid hex string");
  let t = new Uint8Array(e.length / 2);
  for (let r = 0; r < e.length; r += 2) t[r / 2] = parseInt(e.substr(r, 2), 16);
  return t;
}

function a() {
  return (null === o || 0 === o.byteLength) && (o = new Uint8Array(r.memory.buffer)), o;
}

function _(e, n) {
  let t = n(1 * e.length, 1) >>> 0;
  return a().set(e, t / 1), (i = e.length), t;
}

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

function decryptData(encryptedData, xClientId) {
  let [n, a] = encryptedData.split(":");
  let i = s2(n);
  let l = JSON.parse(b(xClientId.toString(), i, a));
  return l;
}

async function main() {
  await loadWasmModule();
  console.log(r);
  const data =
    "8471b991081df904a87ebb81b044f509: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";
  const xClientId = "xH8el59tp2k16OFxXZAAoNBEP4hvTAliOa8lwZR4M4FAsDKnFLs+uEaAN17/GdKez/RHT2iWdOJB9uxKOGuoFg==";
  let d = decryptData(data, xClientId);
  console.log("decrypted data:", d);
}

main().catch((e) => console.error(e));

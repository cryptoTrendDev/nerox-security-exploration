(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5992],
  {
    47790: () => {},
    16225: (e, t, r) => {
      "use strict";
      r.d(t, {
        JM: () => i,
        JW: () => d,
        N3: () => a,
        QP: () => u,
        QZ: () => l,
        RA: () => o,
        _Q: () => s,
        js: () => n,
      });
      var n = (function (e) {
          return (e[(e.FREE = 0)] = "FREE"), (e[(e.SUBSCRIPTION = 1)] = "SUBSCRIPTION"), (e[(e.PRO = 2)] = "PRO"), e;
        })({}),
        a = (function (e) {
          return (
            (e[(e.KOL_DETAIL = 1)] = "KOL_DETAIL"),
            (e[(e.TOKEN_ANALYSIS = 2)] = "TOKEN_ANALYSIS"),
            (e[(e.KOL_ANALYSIS = 3)] = "KOL_ANALYSIS"),
            (e[(e.MINDMAP_ANALYSIS = 4)] = "MINDMAP_ANALYSIS"),
            (e[(e.AI_TOKEN_ANALYSIS = 5)] = "AI_TOKEN_ANALYSIS"),
            e
          );
        })({}),
        i = (function (e) {
          return (e[(e.KOL_VIEW = 1)] = "KOL_VIEW"), e;
        })({}),
        o = (function (e) {
          return (e[(e.FOLLOW = 1)] = "FOLLOW"), e;
        })({}),
        l = (function (e) {
          return (
            (e[(e.PENDING = 0)] = "PENDING"),
            (e[(e.PROCESSING = 1)] = "PROCESSING"),
            (e[(e.SUCCESS = 2)] = "SUCCESS"),
            (e[(e.FAILED = 3)] = "FAILED"),
            e
          );
        })({}),
        s = (function (e) {
          return (
            (e[(e.USER_ALREADY_HAS_SUBSCRIPTION = 3e3)] = "USER_ALREADY_HAS_SUBSCRIPTION"),
            (e[(e.USER_BALANCE_NOT_ENOUGH = 3001)] = "USER_BALANCE_NOT_ENOUGH"),
            (e[(e.UNKNOWN_ERROR = 3002)] = "UNKNOWN_ERROR"),
            (e[(e.LIMIT_REACHED = 3003)] = "LIMIT_REACHED"),
            (e[(e.FEATURE_ACCESS_DENIED = 3004)] = "FEATURE_ACCESS_DENIED"),
            e
          );
        })({}),
        d = (function (e) {
          return (e.FREE = "free"), (e.STARTER = "starter"), (e.ADVANCED = "advanced"), (e.PRO = "pro"), e;
        })({});
      let u = {
        free: "Free",
        starter: "Starter",
        advanced: "Advanced",
        pro: "Pro",
      };
    },
    95761: (e, t, r) => {
      "use strict";
      r.d(t, {
        f: () => n,
      });
      var n = (function (e) {
        return (e[(e.SUPPORTED = 1)] = "SUPPORTED"), (e[(e.UNSUPPORTED = 2)] = "UNSUPPORTED"), e;
      })({});
    },
    59304: (e, t, r) => {
      "use strict";
      r.d(t, {
        J: () => n,
      });
      var n = (function (e) {
        return (
          (e[(e.None = 0)] = "None"),
          (e[(e.Blue = 1)] = "Blue"),
          (e[(e.Gold = 2)] = "Gold"),
          (e[(e.Grey = 3)] = "Grey"),
          (e[(e.Green = 4)] = "Green"),
          e
        );
      })({});
    },
    75611: (e, t, r) => {
      "use strict";
      r.d(t, {
        h: () => d,
        m: () => s,
      });
      var n = r(16225);
      let a = {
          DAREID_NOT_FOUND: 1,
          TOKEN_INVALID: 2,
          USER_NOT_FOUND: 100,
          API_KEY_NOT_FOUND: 101,
          API_KEY_LIMITATION_EXCEED: 102,
          USER_INVALID: 103,
          NFT_NOT_FOUND: 200,
          TOKEN_URI_NOT_FOUND: 201,
          NFT_CONTRACT_NOT_FOUND: 300,
          ROYALTY_INVALID: 301,
          CHAIN_NOT_SUPPORTED: 400,
          PROVIDER_INVALID: 500,
          PROVIDER_NOT_FOUND: 501,
          SCHEMA_NOT_FOUND: 502,
          DATA_NOT_MATCH_JSON_SCHEMA: 503,
          DATA_NOT_MATCH_SIGNATURE: 504,
          SCHEMA_INVALID: 505,
          SCHEMA_LIMITATION_EXCEED: 506,
          TRANSACTION_NOT_FOUND: 600,
        },
        i = {
          WALLET_NOT_FOUND: 1e3,
          TRANSACTION_FAILED: 1001,
          POOL_NOT_FOUND: 1002,
          WALLET_EXISTED: 1003,
          TOKEN_EXISTED: 1004,
          INCORRECT_NETWORK: 1005,
          NULL_PRIVATE_KEY: 1006,
          CHAIN_NOT_SET: 1007,
          TOKEN_NOT_FOUND: 1008,
        },
        o = {
          [a.DAREID_NOT_FOUND]: "DareID not found",
          [a.TOKEN_INVALID]: "Authentication token is invalid",
          [a.USER_NOT_FOUND]: "User account not found",
          [a.API_KEY_NOT_FOUND]: "API key not found",
          [a.API_KEY_LIMITATION_EXCEED]: "API usage limit exceeded",
          [a.USER_INVALID]: "User account is invalid",
          [a.NFT_NOT_FOUND]: "NFT not found",
          [a.NFT_CONTRACT_NOT_FOUND]: "NFT contract not found",
          [a.TOKEN_URI_NOT_FOUND]: "Token URI not found",
          [a.ROYALTY_INVALID]: "Royalty information is invalid",
          [a.CHAIN_NOT_SUPPORTED]: "This blockchain is not supported",
          [a.PROVIDER_INVALID]: "Provider configuration is invalid",
          [a.PROVIDER_NOT_FOUND]: "Provider not found",
          [a.SCHEMA_NOT_FOUND]: "Schema definition not found",
          [a.DATA_NOT_MATCH_JSON_SCHEMA]: "Data does not match validation",
          [a.DATA_NOT_MATCH_SIGNATURE]: "Data signature verification failed",
          [a.SCHEMA_INVALID]: "Schema is invalid",
          [a.SCHEMA_LIMITATION_EXCEED]: "Schema limitation exceeded",
          [a.TRANSACTION_NOT_FOUND]: "Transaction record not found",
          [i.WALLET_NOT_FOUND]: "Wallet not found",
          [i.TRANSACTION_FAILED]: "Transaction failed to process",
          [i.POOL_NOT_FOUND]: "Platform or DEX not supported",
          [i.WALLET_EXISTED]: "Wallet already exists",
          [i.TOKEN_EXISTED]: "Token already exists",
          [i.INCORRECT_NETWORK]: "Incorrect blockchain network",
          [i.NULL_PRIVATE_KEY]: "Wallet private key not found",
          [i.CHAIN_NOT_SET]: "Please select a blockchain network",
          [i.TOKEN_NOT_FOUND]: "Token is not available",
          [n._Q.USER_ALREADY_HAS_SUBSCRIPTION]: "User already has a subscription",
          [n._Q.USER_BALANCE_NOT_ENOUGH]: "User balance not enough",
          [n._Q.UNKNOWN_ERROR]: "Unknown error",
          [n._Q.LIMIT_REACHED]: "Limit reached",
          [n._Q.FEATURE_ACCESS_DENIED]: "Feature access denied",
        };
      var l = r(13205);
      class s extends Error {
        constructor(e) {
          super("API response validation failed"), (this.name = "ApiValidationError"), (this.validationError = e);
        }
      }
      class d extends Error {
        isAuthorizedError() {
          let e = [this.REFERRAL_ERROR_MSG];
          return this.status === l.kG.Unauthorized && !e.includes(this.originError.message);
        }
        isReferralError() {
          return this.status === l.kG.Conflict && this.originError.message === this.REFERRAL_ERROR_MSG;
        }
        constructor(e, t) {
          let r;
          super(
            ((null == (r = "response" in e ? e.response : e) ? void 0 : r.errorCode)
              ? o[r.errorCode]
              : "string" == typeof r.message
              ? r.message
              : void 0) || "Something went wrong"
          ),
            (this.REFERRAL_ERROR_MSG = "No referral code found"),
            (this.originError = e),
            (this.name = "ApiError"),
            (this.code = r.errorCode),
            (this.status = t || l.kG.InternalServerError);
        }
      }
    },
    10967: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, {
        cL: () => f,
        Ay: () => m,
      });
      var a = r(54679),
        i = r(62246),
        o = r(45398);
      async function l() {
        return n || ((n = await r.e(4988).then(r.bind(r, 84988))), await n.default()), n;
      }
      var s = r(82651),
        d = r(58926),
        u = r(13697),
        c = r(75611);
      let g = (e) => {
          let { filter: t, sort: r, ...n } = e,
            a = d.A.stringify(n, {
              arrayFormat: "none",
              skipNull: !0,
              skipEmptyString: !0,
            }),
            i = [];
          if ((a && i.push(a), "object" == typeof t)) {
            let e = Object.entries(t)
              .map((e) => {
                let [t, r] = e;
                return "filter%5B".concat(t, "%5D=").concat(r);
              })
              .join("&");
            e && i.push(e);
          }
          if ("object" == typeof r) {
            let e = Object.entries(r)
              .map((e) => {
                let [t, r] = e;
                return "sort%5B".concat(t, "%5D=").concat(r);
              })
              .join("&");
            e && i.push(e);
          }
          return i.join("&");
        },
        A = s.A.CancelToken.source(),
        p = s.A.create({
          baseURL: a.$B,
          cancelToken: A.token,
          headers: {
            "Content-Type": "application/json",
          },
          timeout: a.UL,
          paramsSerializer: {
            serialize: g,
          },
        });
      p.interceptors.request.use((e) => {
        let t = o.E.getAccessToken();
        return t && (e.headers.Authorization = "Bearer ".concat(t)), e;
      }),
        p.interceptors.response.use(
          (e) => {
            let t = e.config,
              r = null == t ? void 0 : t.validationSchema;
            if (r)
              try {
                return r.cast(e.data);
              } catch (e) {}
            return e.data;
          },
          (e) => {
            if (e instanceof c.m) return Promise.reject(e);
            let { response: t, config: r } = e;
            if (!t || !r) return Promise.reject(e);
            let n = new c.h(t.data, t.status);
            return (
              n.isAuthorizedError() && i.Kr.getState().setModalOpenState(i.CE.SessionExpiredModal, !0),
              Promise.reject(n)
            );
          }
        );
      let m = p,
        f = s.A.create({
          baseURL: a.$B,
          cancelToken: A.token,
          headers: {
            "Content-Type": "application/json",
          },
          timeout: a.UL,
          paramsSerializer: {
            serialize: g,
          },
        });
      f.interceptors.request.use(async (e) => {
        let t = o.E.getAccessToken();
        t && (e.headers.Authorization = "Bearer ".concat(t));
        let r = u.A(),
          n = Math.floor(Date.now() / 1e3);
        return (e.headers["x-client-id"] = "".concat(n + 30, "_").concat(r)), e;
      }),
        f.interceptors.response.use(
          async (e) => {
            let t = e.data,
              r = null == e ? void 0 : e.headers["x-client-id"],
              [n, a] = t.data.split(":"),
              i = await l(),
              [o, s] = r.toString().split("_"),
              d = (function (e) {
                if (e.length % 2 != 0) throw Error("Invalid hex string");
                let t = new Uint8Array(e.length / 2);
                for (let r = 0; r < e.length; r += 2) t[r / 2] = parseInt(e.substr(r, 2), 16);
                return t;
              })(n),
              u = JSON.parse(i.decrypt(o, s, d, a)),
              c = e.config,
              g = null == c ? void 0 : c.validationSchema;
            if (g)
              try {
                return g.cast(u);
              } catch (e) {}
            return u;
          },
          (e) => {
            if (e instanceof c.m) return Promise.reject(e);
            let { response: t, config: r } = e;
            if (!t || !r) return Promise.reject(e);
            let n = new c.h(t.data, t.status);
            return (
              n.isAuthorizedError() && i.Kr.getState().setModalOpenState(i.CE.SessionExpiredModal, !0),
              Promise.reject(n)
            );
          }
        );
    },
    3464: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          default: () => o,
        });
      var n = r(95155),
        a = r(20380),
        i = r(12115);
      let o = (0, i.forwardRef)(function (e, t) {
        let { src: r, alt: o, ...l } = e,
          [s, d] = (0, i.useState)(!0),
          u = (0, i.useCallback)(() => d(!1), []);
        return (0, n.jsx)("div", {
          ...l,
          className: (0, a.cn)("size-6 rounded-full overflow-hidden", l.className),
          ref: t,
          children:
            r && s
              ? (0, n.jsx)("img", {
                  src: r,
                  alt: o,
                  className: "w-full h-full object-cover",
                  onError: u,
                })
              : (0, n.jsx)("div", {
                  className:
                    "w-full h-full flex items-center justify-center text-[1em] capitalize bg-gray-300 text-secondary-950",
                  children: null == o ? void 0 : o[0],
                }),
        });
      });
    },
    50757: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o,
        m: () => i,
      });
      var n = r(95155),
        a = r(20380);
      let i = (e) => {
        let { className: t = "" } = e;
        return (0, n.jsx)("div", {
          className: (0, a.cn)(
            "size-6 border-2 border-solid border-special/20 rounded-full border-b-special animate-spin",
            t
          ),
        });
      };
      function o(e) {
        let { iconClassname: t, loadingText: r, ...o } = e;
        return (0, n.jsxs)("div", {
          ...o,
          className: (0, a.cn)("flex flex-col items-center justify-center gap-3", null == o ? void 0 : o.className),
          children: [
            (0, n.jsx)(i, {
              className: t,
            }),
            r &&
              (0, n.jsx)("div", {
                className: "font-medium text-default",
                children: r,
              }),
          ],
        });
      }
    },
    95840: (e, t, r) => {
      "use strict";
      r.d(t, {
        KK: () => u,
        gM: () => d,
        lb: () => c,
      });
      var n = r(95155),
        a = r(20380),
        i = r(27555),
        o = r(57586),
        l = r(14531);
      let s = (e, t) => {
        if (null == e || "" === e)
          return {
            value: (null == t ? void 0 : t.fallback) || "--",
            isPositive: !1,
            isNegative: !1,
          };
        let r = e ? Number(e) : 0;
        return {
          value: r,
          isPositive: r > 0,
          isNegative: r < 0,
        };
      };
      function d(e) {
        let { value: t, className: r, options: d, negativeClassName: u } = e,
          { value: c, isPositive: g, isNegative: A } = s(t, d);
        return (0, n.jsxs)("span", {
          className: (0, a.cn)(
            "inline-flex items-center",
            {
              "text-success": g,
              "text-special": A,
            },
            A && u,
            r
          ),
          children: [
            g &&
              (0, n.jsx)(o.A, {
                size: 14,
              }),
            A &&
              (0, n.jsx)(l.A, {
                size: 14,
              }),
            (0, i.NJ)(Math.abs(c), d),
          ],
        });
      }
      function u(e) {
        let { value: t, className: r, options: o, negativeClassName: l } = e,
          { value: d, isPositive: u, isNegative: c } = s(t, o),
          g = c ? "-" : u ? "+" : "";
        return (0, n.jsx)("span", {
          className: (0, a.cn)(
            {
              "text-success": u,
              "text-error": c,
            },
            c && l,
            r
          ),
          children: (0, i.NJ)(Math.abs(d), {
            ...o,
            prefix: (null == o ? void 0 : o.prefix) || g,
          }),
        });
      }
      function c(e) {
        let { value: t, className: r, options: o } = e,
          { value: l, isPositive: d, isNegative: u } = s(t, o);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", {
              children: u ? "decreased by" : "increased by",
            }),
            (0, n.jsx)("span", {
              className: (0, a.cn)(
                "inline-block px-2.5 py-1 rounded-full leading-4",
                d && "bg-success text-black",
                u && "bg-error text-white",
                r
              ),
              children: (0, i.ZV)(l, {
                ...o,
                suffix: (null == o ? void 0 : o.suffix) || "%",
                fractionDigits: 2,
              }),
            }),
          ],
        });
      }
    },
    50723: (e, t, r) => {
      "use strict";
      r.d(t, {
        HY: () => s,
        L1: () => d,
        sP: () => l,
      });
      var n = r(59304),
        a = r(5493),
        i = r(83342),
        o = r(6662);
      let l = {
          LogoPurpleIcon: i.default,
          WalletImg: a.default,
          ReferralImg: o.default,
        },
        s = {
          [n.J.Blue]: "text-[#1D9BF0]",
          [n.J.Gold]: "text-amber-400",
          [n.J.Grey]: "text-[#e7e9ea]",
          [n.J.Green]: "text-success",
        },
        d = {
          [n.J.Blue]: "bg-white",
          [n.J.Gold]: "bg-white",
          [n.J.Grey]: "bg-base-1",
          [n.J.Green]: "bg-base-1",
        };
    },
    54679: (e, t, r) => {
      "use strict";
      r.d(t, {
        $B: () => a,
        F3: () => l,
        J6: () => s,
        PM: () => o,
        UL: () => i,
        uC: () => d,
      });
      var n = r(87358);
      let a = "https://api.nerox.ai",
        i = 3e4,
        o = n.env.NEXT_PUBLIC_TELEGRAM_AUTH_BOT || "nerox_connect_bot",
        l = "https://app.nerox.ai";
      var s = (function (e) {
        return (e.ASC = "ASC"), (e.DESC = "DESC"), e;
      })({});
      let d = "solana".split(",") || ["solana"];
    },
    37757: (e, t, r) => {
      "use strict";
      r.d(t, {
        Q: () => n,
        y: () => a,
      });
      let n = "5",
        a = "1";
    },
    20380: (e, t, r) => {
      "use strict";
      r.d(t, {
        cn: () => o,
      });
      var n = r(43463),
        a = r(69795);
      let i = (0, a.zu)({
        extend: {
          classGroups: {
            size: [
              {
                size: [a.y$.isNumber, a.y$.isArbitraryValue, a.y$.isArbitraryLength, () => !0],
              },
            ],
          },
        },
      });
      function o() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return i((0, n.A)(t));
      }
    },
    52736: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a,
      });
      var n = r(19938);
      n.addMethod(n.Schema, "transformEmpty", function (e) {
        return this.transform((t) => (null === t ? e : t));
      }),
        n.addMethod(n.ObjectSchema, "filterInvalid", function () {
          return this.fields && 0 !== Object.keys(this.fields).length
            ? this.transform((e) => {
                if (!e || "object" != typeof e || Array.isArray(e)) return {};
                let t = {};
                for (let [r, n] of Object.entries(this.fields)) {
                  let a = e[r];
                  try {
                    t[r] = n.cast(a);
                  } catch (e) {
                    console.error("object.filterInvalid error for key: ", r), console.error(e);
                  }
                }
                return t;
              })
            : this;
        }),
        n.addMethod(n.ArraySchema, "filterInvalid", function () {
          return this.innerType
            ? this.transform((e) =>
                Array.isArray(e)
                  ? e.reduce((e, t, r) => {
                      try {
                        var n;
                        e.push(null === (n = this.innerType) || void 0 === n ? void 0 : n.cast(t));
                      } catch (e) {
                        console.error("array.filterInvalid error for index: ", r), console.error(e);
                      }
                      return e;
                    }, [])
                  : []
              )
            : this;
        }),
        n.setLocale({
          mixed: {
            required: (e) => {
              let { label: t, path: r } = e;
              return "".concat(t || r, " is required");
            },
            notType: (e) => {
              let { label: t, path: r } = e;
              return "".concat(t || r, " is invalid");
            },
          },
          number: {
            min: (e) => {
              let { label: t, path: r, min: n } = e;
              return "".concat(t || r, " must be greater than or equal ").concat(n);
            },
            max: (e) => {
              let { label: t, path: r, max: n } = e;
              return "".concat(t || r, " must be less than or equal ").concat(n);
            },
            lessThan: (e) => {
              let { label: t, path: r, less: n } = e;
              return "".concat(t || r, " must be less than ").concat(n);
            },
            moreThan: (e) => {
              let { label: t, path: r, more: n } = e;
              return "".concat(t || r, " must be greater than ").concat(n);
            },
            integer: (e) => {
              let { label: t, path: r } = e;
              return "".concat(t || r, " must be an integer");
            },
          },
        });
      let a = n;
    },
    73367: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ay: () => d,
        BM: () => l,
        L_: () => a,
        ng: () => i,
        xY: () => s,
        yu: () => o,
      });
      var n = r(52736);
      let a = n.A.string().transformEmpty(),
        i = n.A.number().transformEmpty(),
        o = n.A.boolean().default(!1).transformEmpty(!1),
        l = n.A.object({
          items: n.A.array().of(n.A.mixed()).required(),
          total: n.A.number().transformEmpty(0),
        }),
        s = n.A.object({
          items: n.A.array().of(n.A.mixed()).required(),
          nextCursor: a,
        }),
        d = n.A.object({
          id: n.A.number().required(),
          createdAt: n.A.string().required(),
          updatedAt: a,
          deletedAt: a,
        });
    },
    14928: (e, t, r) => {
      "use strict";
      r.d(t, {
        Bk: () => c,
        Bp: () => v,
        DV: () => L,
        Ir: () => u,
        Lw: () => y,
        Rg: () => T,
        S1: () => _,
        SZ: () => m,
        UA: () => s,
        VT: () => b,
        vO: () => A,
      });
      var n = r(19938),
        a = r(73367),
        i = r(38466),
        o = r(95761);
      let l = n.object({
          twitterUrl: a.L_,
          webUrl: a.L_,
          telegramUrl: a.L_,
        }),
        s = n.object({
          chainId: n.string().oneOf(Object.values(i.nU)).required(),
          tokenAddress: n.string().required(),
          name: a.L_,
          symbol: a.L_,
          iconUrl: a.L_,
          decimals: a.ng,
        }),
        d = n.object({
          usd: a.ng.default(0),
          name: a.L_,
          symbol: a.L_,
          address: a.L_,
        }),
        u = n.object({
          [i.nU.SOL]: d,
          [i.nU.APT]: d,
          [i.nU.BSC]: d,
          [i.nU.BASE]: d,
          [i.nU.SUI]: d,
        }),
        c = n.object({
          chainId: n.string().oneOf(Object.values(i.nU)).required(),
          id: n.number().required(),
          name: n.string().transformEmpty("Unrecognized token"),
          symbol: n.string().transformEmpty("UNKNOWN"),
          quoteSymbol: n.string().transformEmpty("UNKNOWN"),
          iconUrl: a.L_,
          decimals: n.number().required().nullable(),
          pool: n.string().required(),
          price: a.ng,
          priceUsd: a.ng,
          priceChange24h: a.ng,
          marketCap: a.ng,
          volume24h: a.ng,
          fdv: a.ng,
          priceNative: a.ng,
          liquidity: a.ng,
          liquidityBase: a.ng,
          liquidityBaseUsd: a.ng,
          liquidityQuote: a.ng,
          liquidityQuoteUsd: a.ng,
          holders: a.ng,
          tokenAddress: n.string().required(),
          totalSupply: a.ng,
          buys: n.object({
            count: a.ng,
            value: a.ng,
          }),
          sells: n.object({
            count: a.ng,
            value: a.ng,
          }),
          description: a.L_,
          metadata: l.nullable(),
          lpProviderAddress: a.L_,
          quoteTokenAddress: a.L_,
          pairCreatedAt: a.L_,
          score: a.ng,
          countTweetAllTime: a.ng,
          smartFollowersCount: a.ng,
          supportStatus: n.number().transformEmpty(o.f.SUPPORTED),
          dexUrl: a.L_,
        }),
        g = n.object({
          chainId: n.string().oneOf(Object.values(i.nU)).required(),
          id: n.number().required(),
          name: n.string().transformEmpty("Unrecognized token"),
          symbol: n.string().transformEmpty("UNKNOWN"),
          quoteSymbol: n.string().transformEmpty("UNKNOWN"),
          iconUrl: a.L_,
          decimals: n.number().required().nullable(),
          pool: a.L_,
          price: a.ng,
          priceUsd: a.ng,
          priceChange24h: a.ng,
          marketCap: a.ng,
          volume24h: a.ng,
          fdv: a.ng,
          priceNative: a.ng,
          liquidity: a.ng,
          liquidityBase: a.ng,
          liquidityBaseUsd: a.ng,
          liquidityQuote: a.ng,
          liquidityQuoteUsd: a.ng,
          holders: a.ng,
          tokenAddress: n.string().required(),
          totalSupply: a.ng,
          buys: n.object({
            count: a.ng,
            value: a.ng,
          }),
          sells: n.object({
            count: a.ng,
            value: a.ng,
          }),
          description: a.L_,
          metadata: l.nullable(),
          lpProviderAddress: a.L_,
          quoteTokenAddress: a.L_,
          pairCreatedAt: a.L_,
          score: a.ng,
          supportStatus: n.number().transformEmpty(o.f.SUPPORTED),
        }),
        A = n.object({
          id: n.number().required(),
          tweetId: a.ng,
          tokenId: n.string().required(),
          highlight: n.string().default(""),
          token: g.required(),
        }),
        p = n.object().shape({
          token: n.string().required(),
          name: n.string().transformEmpty("Unrecognized token"),
          symbol: n.string().transformEmpty("UNKNOWN"),
          decimals: a.ng,
          platforms: n.array().of(n.mixed()),
        }),
        m = n.object().shape({
          result: n.array().of(p).filterInvalid().required(),
        }),
        f = a.Ay.shape({
          name: a.L_,
          tokenAddress: n.string().required(),
          pairAddress: a.L_,
          symbol: a.L_,
          decimals: n.number().required().nullable(),
          iconUrl: a.L_,
          pairCreatedAt: a.L_,
          isMeme: a.yu,
          isFourMeme: a.yu,
          isMovePump: a.yu,
          chainId: n.string().nullable(),
          description: a.L_,
          tokenData: n.object({
            price: a.ng,
            priceUsd: a.L_,
            priceChangeH24: a.L_,
            priceNative: a.L_,
          }),
        }),
        b = n.object({
          items: n.array().of(f).filterInvalid().required(),
        }),
        h = n.object({
          priceId: n.number().nullable(),
          priceUsd: a.L_,
          priceNative: a.L_,
          volumeH24: a.L_.nullable(),
          volumeH6: a.L_.nullable(),
          volumeH1: a.L_.nullable(),
          priceChangeH1: a.L_.nullable(),
          priceChangeH6: a.L_.nullable(),
          priceChangeH24: a.L_.nullable(),
          liquidity: a.L_.nullable(),
          fdv: a.L_.nullable(),
          marketCap: a.L_.nullable(),
          totalSupply: a.L_.nullable(),
          holder: a.ng.nullable(),
          buyCount: a.ng.nullable(),
          sellCount: a.ng.nullable(),
          buyVol: a.L_.nullable(),
          sellVol: a.L_.nullable(),
        }),
        E = a.Ay.shape({
          chainId: n.string().nullable(),
          name: n.string().transformEmpty("Unrecognized token"),
          symbol: n.string().transformEmpty("UNKNOWN"),
          tokenAddress: n.string().required(),
          decimals: n.number().required().nullable(),
          iconUrl: a.L_,
          pairCreatedAt: a.L_,
          isMeme: a.yu,
          isFourMeme: a.yu,
          priceUsd: a.L_,
          tokenData: h.required(),
        }),
        _ = n.object().shape({
          items: n.array().of(E).filterInvalid().required(),
          nextCursor: a.L_,
        }),
        N = n.object().shape({
          priceId: n.number().nullable(),
          priceUsd: a.L_,
          priceNative: a.L_,
          volumeH24: a.L_.nullable(),
          volumeH6: a.L_.nullable(),
          volumeH1: a.L_.nullable(),
          priceChangeH1: a.L_.nullable(),
          priceChangeH6: a.L_.nullable(),
          priceChangeH24: a.L_.nullable(),
          liquidity: a.L_.nullable(),
          fdv: a.L_.nullable(),
          marketCap: a.L_.nullable(),
          totalSupply: a.L_.nullable(),
          holder: a.ng.nullable(),
          buyCount: a.ng.nullable(),
          sellCount: a.ng.nullable(),
          buyVol: a.L_.nullable(),
          sellVol: a.L_.nullable(),
        }),
        v = a.Ay.shape({
          name: n.string().required(),
          tokenAddress: n.string().required(),
          pairAddress: n.string().nullable(),
          symbol: n.string().required(),
          decimals: n.number().required().nullable(),
          iconUrl: a.L_.nullable(),
          pairCreatedAt: a.L_.nullable(),
          isMeme: a.yu.required(),
          isFourMeme: a.yu.required(),
          isMovePump: a.yu.required(),
          chainId: n.string().required(),
          description: a.L_.nullable(),
          metadata: l.nullable(),
          tokenData: N.required(),
        }),
        y = n.object({
          items: n.array().of(v).required(),
        }),
        I = a.Ay.shape({
          displayName: a.L_,
          username: a.L_,
          twitterId: a.L_,
          avatarUrl: a.L_,
          checkmarkType: a.ng,
          description: a.L_,
          followerCount: a.ng,
          followingCount: a.ng,
          labels: n.array().of(a.L_),
          twitterCreatedAt: a.L_,
          discoveredBy: a.ng,
          twitterStatus: a.ng,
        }),
        S = a.Ay.shape({
          name: n.string().required(),
          tokenAddress: n.string().required(),
          pairAddress: n.string().nullable(),
          symbol: n.string().required(),
          decimals: n.number().required().nullable(),
          iconUrl: a.L_.nullable(),
          pairCreatedAt: a.L_.nullable(),
          isMeme: a.yu.required(),
          isFourMeme: a.yu.required(),
          isMovePump: a.yu.required(),
          chainId: n.string().required(),
          description: a.L_.nullable(),
          metadata: l.nullable(),
          tokenData: N.required(),
          quoteTokenId: n.number().required(),
          countTweetAllTime: a.ng,
          countTweet: a.ng,
          tweetChange: a.ng,
          score: a.ng,
          smartFollowers: n.array().of(I),
          supportStatus: n.number().transformEmpty(o.f.SUPPORTED),
          dexId: a.L_,
        }),
        T = a.xY.shape({
          items: n.array().of(S).required(),
        }),
        C = n.object({
          m5: a.ng,
          h1: a.ng,
          h4: a.ng,
          h24: a.ng,
        }),
        O = n
          .object({
            token: n
              .object({
                address: n.string().required(),
                symbol: n.string().required(),
                name: n.string().required(),
                iconUrl: a.L_,
                chain: a.L_,
              })
              .required(),
            tokenAge: a.ng,
            liquidity: a.ng,
            marketCap: a.ng,
            smartFollower: a.L_,
            mention: a.L_,
            impression: a.L_,
            changes: C.required(),
            h24_change: a.L_,
            score: a.ng,
            avgScore: a.ng,
            totalScore: a.ng,
          })
          .transform((e) => {
            if (!e || "object" != typeof e) return e;
            let { marketcap: t, marketCap: r, ...n } = e,
              a = null != r ? r : t;
            return void 0 !== a
              ? {
                  ...n,
                  marketCap: a,
                }
              : {
                  ...n,
                };
          }),
        L = a.BM.shape({
          items: n.array().of(O).filterInvalid().required(),
          newTokenCount24h: a.ng,
        });
    },
    5006: (e, t, r) => {
      "use strict";
      r.d(t, {
        Hn: () => u,
        Zr: () => A,
        _1: () => c,
        gZ: () => s,
        k2: () => g,
        mq: () => d,
        oy: () => p,
        qD: () => b,
      });
      var n = r(59304),
        a = r(19938),
        i = r(73367),
        o = r(14928);
      let l = i.Ay.shape({
          id: a.number().required(),
          xUserId: a.number().required(),
          smartFollowerCount: i.ng,
          smartFollowerMentionCount: i.ng,
          totalFavorite: i.ng,
          totalReply: i.ng,
          totalQuote: i.ng,
          score: i.ng,
          firstTweetId: i.ng,
          userRanking: i.ng,
        }),
        s = a.object({
          id: a.number().required().default(0),
          displayName: a.string().transformEmpty("Unknown user"),
          username: a.string().required(),
          avatarUrl: i.L_,
          description: i.L_,
          checkmarkType: a.number().transformEmpty(n.J.None),
          labels: a.array().of(a.string().required()).transformEmpty([]),
          twitterCreatedAt: a.string().nullable(),
          following: i.yu,
          followingCount: a.number().transformEmpty(0),
          followerCount: a.number().transformEmpty(0),
          statistic: l.nullable().default(null),
          rankingScore: i.ng.nullable().default(null),
        }),
        d = i.BM.shape({
          items: a.array().of(s).filterInvalid().required(),
        }),
        u = i.Ay.shape({
          content: a.string().required(),
          twitterId: i.L_,
          xUserId: i.ng,
          bookmarkCount: i.ng,
          replyCount: i.ng,
          retweetCount: i.ng,
          viewCount: i.ng,
          favoriteCount: i.ng,
          quoteCount: i.ng,
          isShillTweet: i.yu,
          tweetedAt: i.L_,
          highlights: a.array().of(o.vO).filterInvalid(),
          xUser: s,
        }),
        c = i.xY.shape({
          items: a.array().of(u).filterInvalid().required(),
        }),
        g = i.BM.shape({
          items: a.array().of(u).filterInvalid().required(),
        }),
        A = a.object({
          content: u.required(),
        }),
        p = a.object({
          result: s.required(),
        }),
        m = i.Ay.shape({
          content: a.string().required(),
          twitterId: i.L_,
          xUserId: i.ng,
          bookmarkCount: i.ng,
          replyCount: i.ng,
          retweetCount: i.ng,
          viewCount: i.ng,
          favoriteCount: i.ng,
          quoteCount: i.ng,
          isShillTweet: i.yu,
          tweetedAt: i.L_,
          highlights: a.array().of(o.vO).filterInvalid(),
          xUser: s,
        });
      i.xY.shape({
        items: a.array().of(m).filterInvalid().required(),
      });
      let f = a.object({}).shape({
          id: a.number().required(),
          kol: a.string().required(),
          displayName: i.L_,
          avatar: i.L_,
          totalToken: i.ng,
          smFollower: i.ng,
          mention: i.ng,
          impression: i.ng,
          sScore: i.ng,
          aScore: i.ng,
          lScore: i.ng,
          eScore: i.ng,
          totalScore: i.ng,
          winrate: i.ng,
          rugRate: i.ng,
          userRanking: i.ng,
          isCopyTrading: i.yu,
        }),
        b = i.BM.shape({
          items: a.array().of(f).filterInvalid().required(),
        });
    },
    62246: (e, t, r) => {
      "use strict";
      r.d(t, {
        CE: () => o,
        Kr: () => l,
        pM: () => s,
        s_: () => d,
      });
      var n = r(32081),
        a = r(11087),
        i = r(58469),
        o = (function (e) {
          return (
            (e.AuthModal = "AuthModal"),
            (e.SessionExpiredModal = "SessionExpiredModal"),
            (e.QuickBuySettingsModal = "QuickBuySettingsModal"),
            (e.WalletImportOrGenerateModal = "WalletImportOrGenerateModal"),
            (e.GenerateWalletModal = "GenerateWalletModal"),
            (e.ImportWalletModal = "ImportWalletModal"),
            (e.WalletQRModal = "WalletQRModal"),
            (e.EditWalletNameModal = "EditWalletNameModal"),
            (e.DepositModal = "DepositModal"),
            (e.WithdrawModal = "WithdrawModal"),
            (e.WalletSelectionModal = "WalletSelectionModal"),
            (e.CopyTradingModal = "CopyTradingModal"),
            (e.XTrendingModal = "XTrendingModal"),
            (e.SmartFollowersModal = "SmartFollowersModal"),
            (e.TransactionSubmittedModal = "TransactionSubmittedModal"),
            (e.TransferModal = "TransferModal"),
            (e.AIModal = "AIModal"),
            (e.PaymentAIModal = "PaymentAIModal"),
            (e.TweetModal = "TweetModal"),
            (e.SearchDialogModal = "SearchDialogModal"),
            e
          );
        })({});
      let l = (0, n.vt)(
          (0, a.D)((e) => ({
            modals: {
              AuthModal: {
                open: !1,
                data: {
                  closeable: !1,
                },
              },
              SessionExpiredModal: {
                open: !1,
                data: void 0,
              },
              QuickBuySettingsModal: {
                open: !1,
                data: {},
              },
              WalletImportOrGenerateModal: {
                open: !1,
                data: void 0,
              },
              GenerateWalletModal: {
                open: !1,
                data: void 0,
              },
              ImportWalletModal: {
                open: !1,
                data: void 0,
              },
              WalletQRModal: {
                open: !1,
                data: void 0,
              },
              EditWalletNameModal: {
                open: !1,
                data: void 0,
              },
              DepositModal: {
                open: !1,
                data: void 0,
              },
              WithdrawModal: {
                open: !1,
                data: void 0,
              },
              WalletSelectionModal: {
                open: !1,
                data: void 0,
              },
              CopyTradingModal: {
                open: !1,
                data: void 0,
              },
              XTrendingModal: {
                open: !1,
                data: {
                  tokenId: void 0,
                },
              },
              SmartFollowersModal: {
                open: !1,
                data: {
                  smartFollowers: [],
                  followedUser: void 0,
                },
              },
              TransactionSubmittedModal: {
                open: !1,
                data: void 0,
              },
              TransferModal: {
                open: !1,
                data: void 0,
              },
              AIModal: {
                open: !1,
                data: void 0,
              },
              PaymentAIModal: {
                open: !1,
                data: void 0,
              },
              TweetModal: {
                open: !1,
                data: void 0,
              },
              SearchDialogModal: {
                open: !1,
                data: void 0,
              },
            },
            setModalOpenState: (t, r) => {
              e((e) => {
                e.modals[t].open = r;
              });
            },
            setModalDataState: (t, r) => {
              e((e) => {
                e.modals[t].data || (e.modals[t].data = {}), Object.assign(e.modals[t].data, r);
              });
            },
          }))
        ),
        s = (e) => () =>
          l(
            (0, i.k)((t) => ({
              ...t.modals[e],
              setModalOpen: (r) => t.setModalOpenState(e, r),
              setModalData: (r) => t.setModalDataState(e, r),
            }))
          ),
        d = s("TweetModal");
    },
    546: (e, t, r) => {
      "use strict";
      r.d(t, {
        DO: () => h,
        DP: () => f,
        IQ: () => m,
        Of: () => b,
        af: () => _,
        kR: () => E,
        ol: () => A,
      });
      var n = r(37757),
        a = r(53846),
        i = r(19525),
        o = r(38466),
        l = r(12115),
        s = r(32081),
        d = r(60709),
        u = r(11087);
      let c = {
          amount: n.y,
          slippage: n.Q,
        },
        g = {
          [o.nU.SOL]: c,
          [o.nU.APT]: c,
          [o.nU.BSC]: c,
          [o.nU.SUI]: c,
          [o.nU.BASE]: c,
        },
        A = {
          sui: {
            rpcConfig: {
              url: "https://fullnode.mainnet.sui.io",
            },
            gasFeeConfig: {
              buy: 15e6,
              sell: 1e7,
            },
            programConfig: {
              packageId: "0xebdb522af87127e7b8ad92880fd94358436d6f0cce496b83b3ea6276424f2bbb",
              depositDiscriminator: "0x72e434c44fb2cc7e24ca22dd654968fe0ddf38865980b90bde20b2343905dcf9",
            },
          },
          solana: {
            rpcConfig: {
              url: "https://mainnet.helius-rpc.com",
              params: {
                "api-key": "767f42d9-06c2-46f8-8031-9869035d6ce4",
              },
            },
            gasFeeConfig: {
              buy: 15e6,
              sell: 1e7,
            },
            programConfig: {
              packageId: "CEduTxCYkvvtAcVpgUUEKaV5iKL42TeU3EjxRjp3eFbt",
              depositDiscriminator: [196, 82, 151, 183, 92, 214, 96, 73],
            },
          },
          aptos: {
            rpcConfig: {
              apiKey: "a4^KV_EaTf4MW#ZdvgGKX#HUD^3IFEAOV_kzpIE^3BQGA8pDnrkT7JcIy#HNlLGi",
              url: "https://api.mainnet.aptoslabs.com/v1",
            },
            gasFeeConfig: {
              buy: 15e5,
              sell: 1e6,
            },
            programConfig: {
              depositDiscriminator: "0x195812311d829852e5067be568f70320e85f1c53ec31db760934c796cac9e102",
            },
          },
          bsc: {
            rpcConfig: {
              url: "https://bsc-dataseed.binance.org/",
            },
            gasFeeConfig: {
              buy: 1e15,
              sell: 1e15,
            },
            programConfig: {
              packageId: "0xbA28E176675Cd178F16f8e2C7de7cFE752D877d7",
            },
          },
        },
        p = new o.Rv({
          sui: {
            rpcConfig: {
              url: "https://fullnode.mainnet.sui.io",
            },
            gasFeeConfig: {
              buy: 15e6,
              sell: 1e7,
            },
            programConfig: {
              packageId: "0xebdb522af87127e7b8ad92880fd94358436d6f0cce496b83b3ea6276424f2bbb",
              depositDiscriminator: "0x72e434c44fb2cc7e24ca22dd654968fe0ddf38865980b90bde20b2343905dcf9",
            },
          },
          solana: {
            rpcConfig: {
              url: "https://mainnet.helius-rpc.com",
              params: {
                "api-key": "767f42d9-06c2-46f8-8031-9869035d6ce4",
              },
            },
            gasFeeConfig: {
              buy: 15e6,
              sell: 1e7,
            },
            programConfig: {
              packageId: "CEduTxCYkvvtAcVpgUUEKaV5iKL42TeU3EjxRjp3eFbt",
              depositDiscriminator: [196, 82, 151, 183, 92, 214, 96, 73],
            },
          },
          aptos: {
            rpcConfig: {
              apiKey: "a4^KV_EaTf4MW#ZdvgGKX#HUD^3IFEAOV_kzpIE^3BQGA8pDnrkT7JcIy#HNlLGi",
              url: "https://api.mainnet.aptoslabs.com/v1",
            },
            gasFeeConfig: {
              buy: 15e5,
              sell: 1e6,
            },
            programConfig: {
              depositDiscriminator: "0x195812311d829852e5067be568f70320e85f1c53ec31db760934c796cac9e102",
            },
          },
          bsc: {
            rpcConfig: {
              url: "https://bsc-dataseed.binance.org/",
            },
            gasFeeConfig: {
              buy: 1e15,
              sell: 1e15,
            },
            programConfig: {
              packageId: "0xbA28E176675Cd178F16f8e2C7de7cFE752D877d7",
            },
          },
          base: {
            rpcConfig: {
              url: "https://base.llamarpc.com",
            },
            gasFeeConfig: {
              buy: 1e15,
              sell: 1e15,
            },
            programConfig: {
              packageId: "0xc58afb169e3ab2af4fc27dcdc742a385be436ada",
            },
          },
        }),
        m = (0, s.vt)(
          (0, d.Zr)(
            (0, u.D)((e) => ({
              theme: "dark",
              setTheme: (t) => {
                e((e) => {
                  e.theme = t;
                });
              },
              chainId: o.nU.SOL,
              setChainId: (t) => {
                e((e) => {
                  e.chainId = t;
                });
              },
              quickBuy: g,
              setQuickBuy: (t, r) => {
                e((e) => {
                  Object.assign(e.quickBuy[t], r);
                });
              },
              confirmBeforeQuickBuy: !0,
              setConfirmBeforeQuickBuy: (t) => {
                e((e) => {
                  e.confirmBeforeQuickBuy = t;
                });
              },
              pushNotificationSettings: void 0,
              setPushNotificationSettings: (t) => {
                e((e) => {
                  e.pushNotificationSettings = t;
                });
              },
            })),
            {
              name: "nerox.settings",
              version: 1.5,
              migrate(e, t) {
                if (t < 1.4) {
                  let t = {
                    ...g,
                  };
                  return {
                    ...e,
                    quickBuy: t,
                  };
                }
                return e;
              },
            }
          )
        ),
        f = () => [m((e) => e.theme), m((e) => e.setTheme)],
        b = () => [m((e) => e.pushNotificationSettings), m((e) => e.setPushNotificationSettings)],
        h = () => {
          let e = m((e) => e.chainId);
          return (0, l.useMemo)(() => {
            p.switchChain(e);
            let t = p.getActiveChain();
            return {
              chainId: e,
              chain: t,
              nativeToken: {
                ...t.nativeToken,
                icon: i.F[t.nativeToken.chainId].white,
              },
              chainProvider: p,
              chainUtils: a.r[e],
            };
          }, [e]);
        },
        E = () => {
          let e = m((e) => e.quickBuy[e.chainId]),
            t = m((e) => e.setQuickBuy),
            r = m((e) => e.chainId);
          return [
            e,
            (e) => {
              t(r, e);
            },
          ];
        },
        _ = () => [m((e) => e.confirmBeforeQuickBuy), m((e) => e.setConfirmBeforeQuickBuy)];
    },
    45398: (e, t, r) => {
      "use strict";
      r.d(t, {
        E: () => a,
      });
      let n = "nerox.at",
        a = {
          getAccessToken: () => window.localStorage.getItem(n),
          setAccessToken: (e) => window.localStorage.setItem(n, e),
          removeAccessToken: () => window.localStorage.removeItem(n),
        };
    },
    27555: (e, t, r) => {
      "use strict";
      r.d(t, {
        $M: () => d,
        Nt: () => c,
        ZV: () => s,
        NJ: () => u,
        YB: () => A,
        w2: () => g,
        LV: () => l,
        W5: () => o,
      });
      var n = r(16225),
        a = r(9281);
      function i(e) {
        return !isNaN(e) && !isNaN(parseFloat(e));
      }
      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
        if (t < 0 || r < 0) throw Error("Invalid position");
        return e ? (e.length <= t + r ? e : e.slice(0, t) + "..." + e.slice(e.length - r)) : "";
      }
      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        if (!e) return "--";
        if (t < 0) throw Error("Invalid limit");
        return e.length <= t ? e : e.slice(0, t) + "...";
      }
      function s(e, t) {
        let {
          fallback: r = "--",
          fractionDigits: n = 2,
          delimiter: o = ",",
          padZero: l,
          prefix: s = "",
          suffix: d = "",
        } = null != t ? t : {};
        if (!("bigint" == typeof e || i(e))) return r;
        if (e === 1 / 0) return "Infinity";
        let u = String(e);
        if (u.startsWith("0x")) return u;
        i(n) && (u = new a.A(u).toFixed(n)), !l && u.split(".").length > 1 && (u = u.replace(/0*$/g, ""));
        let [c, g] = u.split(".");
        return s + c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, o) + (g ? ".".concat(g) : "") + d;
      }
      function d(e, t) {
        let { fallback: r = "--", fractionDigits: n = 2, prefix: a = "", suffix: o = "" } = null != t ? t : {};
        if (!i(e)) return r;
        let l = ["", "K", "M", "B", "T", "Q"],
          d = Math.floor((e.toString().split(".")[0].length - 1) / 3);
        return (
          d >= l.length && (d = l.length - 1),
          s((Number(e) / Math.pow(1e3, d)).toFixed(n + 2), {
            fractionDigits: n,
            prefix: a,
            suffix: l[d] + o,
          })
        );
      }
      function u(e, t) {
        if (i(e)) {
          let a = Number(e);
          if (a < 1e-4) {
            var r, n;
            return (
              (null !== (r = null == t ? void 0 : t.prefix) && void 0 !== r ? r : "") +
              (function (e) {
                var t, r;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                  a = Math.abs(e);
                if (a >= 1 || a <= 0) return "0";
                let [i, o] = a.toFixed(n).split("."),
                  l =
                    (null === (r = o.match(/^0+/)) || void 0 === r
                      ? void 0
                      : null === (t = r[0]) || void 0 === t
                      ? void 0
                      : t.length) || 0,
                  s = l
                    .toString()
                    .split("")
                    .map((e) => String.fromCharCode(8320 + parseInt(e)))
                    .join(""),
                  d = o.slice(l, l + 5).replace(/0+$/, "");
                return ""
                  .concat(e < 0 ? "-" : "", "0.0")
                  .concat(s)
                  .concat(d);
              })(a) +
              (null !== (n = null == t ? void 0 : t.suffix) && void 0 !== n ? n : "")
            );
          }
          return a < 0.01
            ? s(e, {
                ...t,
                fractionDigits: 6,
              })
            : a < 0.1
            ? s(e, {
                ...t,
                fractionDigits: 4,
              })
            : a < 1e6
            ? s(e, {
                ...t,
                fractionDigits: 2,
              })
            : s(e, {
                ...t,
                fractionDigits: 0,
              });
        }
        return s(e, t);
      }
      function c(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      let g = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null == e || isNaN(e) ? t : e;
      };
      function A(e, t) {
        return null == e ? (t === n.js.FREE ? "Free" : "Contact") : 0 === e ? "Free" : "$".concat(e);
      }
    },
    66981: (e, t, r) => {
      "use strict";
      r.d(t, {
        i: () => a,
        n: () => n,
      });
      let n = (e, t, r) =>
        "/token/"
          .concat(e)
          .concat(t ? "?chain=".concat(t) : "")
          .concat(r ? "&tweetId=".concat(r) : "");
      function a(e) {
        if (e < 1);
        else if (e <= 5) return "/images/rank-score/top".concat(e, ".svg");
        else if (e <= 10) return "/images/rank-score/top6-10.svg";
        else if (e <= 20) return "/images/rank-score/top11-20.svg";
        else if (e <= 50) return "/images/rank-score/top21-50.svg";
        return "";
      }
    },
    53846: (e, t, r) => {
      "use strict";
      r.d(t, {
        r: () => b,
      });
      var n = r(38466),
        a = r(52152);
      class i {
        constructor(e, t) {
          (this.chainId = e), (this.name = t);
        }
      }
      class o extends i {
        deriveFromPrivateKey(e) {
          return new a.W_x(a.ZD$.formatPrivateKey(e, a.nVK.Ed25519)).publicKey().toString();
        }
        getExplorer(e, t) {
          return "https://explorer.aptoslabs.com/".concat("tx" === t ? "txn" : t, "/").concat(e, "?network=mainnet");
        }
        constructor() {
          super(n.nU.APT, "Aptos");
        }
      }
      var l = r(39550);
      class s extends i {
        deriveFromPrivateKey(e) {
          return new l.u(e).address;
        }
        getExplorer(e, t) {
          return "account" === t
            ? "https://bscscan.com/address/".concat(e)
            : "https://bscscan.com/".concat(t, "/").concat(e);
        }
        constructor() {
          super(n.nU.BSC, "BNB Chain");
        }
      }
      var d = r(77369),
        u = r(97783);
      class c extends i {
        deriveFromPrivateKey(e) {
          return d.AX.fromSecretKey(u.A.decode(e)).publicKey.toBase58();
        }
        getExplorer(e, t) {
          return "https://solscan.io/".concat(t, "/").concat(e);
        }
        constructor() {
          super(n.nU.SOL, "Solana");
        }
      }
      var g = r(56419),
        A = r(5893),
        p = r(75927).Buffer;
      class m extends i {
        deriveFromPrivateKey(e) {
          if (!e) throw Error("Private key cannot be empty");
          try {
            if (e.startsWith("suiprivkey1")) {
              let { words: t } = A.I.decode(e),
                r = p.from(A.I.fromWords(t)).slice(1);
              return g.h.fromSecretKey(r).getPublicKey().toSuiAddress();
            }
            let t = e.replace(/^0x/, "");
            if (64 !== t.length)
              throw Error("Invalid private key length. Expected 64 characters (32 bytes), got ".concat(t.length));
            return g.h.fromSecretKey(p.from(t, "hex")).getPublicKey().toSuiAddress();
          } catch (e) {
            if (e instanceof Error) throw Error("Failed to derive address from private key: ".concat(e.message));
            throw Error("Failed to derive address from private key: Unknown error");
          }
        }
        getExplorer(e, t) {
          return "https://suiscan.xyz/".concat(t, "/").concat(e);
        }
        constructor() {
          super(n.nU.SUI, "Sui");
        }
      }
      class f extends i {
        deriveFromPrivateKey(e) {
          return new l.u(e).address;
        }
        getExplorer(e, t) {
          return "account" === t
            ? "https://basescan.org/address/".concat(e)
            : "https://basescan.org/".concat(t, "/").concat(e);
        }
        constructor() {
          super(n.nU.BASE, "Base");
        }
      }
      let b = {
        [n.nU.SOL]: new c(),
        [n.nU.APT]: new o(),
        [n.nU.BSC]: new s(),
        [n.nU.SUI]: new m(),
        [n.nU.BASE]: new f(),
      };
    },
    19525: (e, t, r) => {
      "use strict";
      r.d(t, {
        F: () => n.F,
      });
      var n = r(47562),
        a = r(38466),
        i = r(53453),
        o = r(16917);
      a.nU.BSC, i.N, a.nU.BASE, o.E;
    },
    47562: (e, t, r) => {
      "use strict";
      r.d(t, {
        F: () => a,
      });
      var n = r(38466);
      let a = {
        [n.nU.SOL]: {
          color: "/icons/tokens/sol-colored.svg",
          colorBorder: "/icons/tokens/sol-border.svg",
          white: "/icons/tokens/sol.svg",
        },
        [n.nU.APT]: {
          color: "/icons/tokens/apt.svg",
          colorBorder: "/icons/tokens/apt-border.svg",
          white: "/icons/tokens/apt.svg",
        },
        [n.nU.BSC]: {
          color: "/icons/tokens/bnb-colored.svg",
          colorBorder: "/icons/tokens/bnb-border.svg",
          white: "/icons/tokens/bnb.svg",
        },
        [n.nU.SUI]: {
          color: "/icons/tokens/sui-colored.svg",
          colorBorder: "/icons/tokens/sui-border.svg",
          white: "/icons/tokens/sui.svg",
        },
        [n.nU.BASE]: {
          color: "/icons/tokens/base-colored.svg",
          colorBorder: "/icons/tokens/base-border.svg",
          white: "/icons/tokens/eth.svg",
        },
      };
    },
    5493: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          default: () => n,
        });
      let n = {
        src: "/_next/static/media/wallet.b256162e.png",
        height: 240,
        width: 240,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEWGWv/19eFgP/f19et3aVc4OGZpT9ODWPxMaXGJXf5oS8/BoCi6mDiGZOyEXvF/Y9WMbOS9l1h7W9ytimUuIueBYaqqhKDQqjxxV8WMaL/Cny24lkLMqBmti2XEoSPctiK1lzKBXfCCZOOfcv+1iqeOZ9ape8jYsiPDm3YhOxlKAAAAInRSTlP+DHQlDBk6/QD+5UwxvOdKf/1Z+xa98v7w+fnK2Lyc32X+fmSfrAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhJREFUeJwFwQUWgCAQBcBPuSxgd/sw739CZ6CE9uEIFkK2/fTuHk130T1+G5K6JGJnUIFAcTAoTgZFZ5CnGfMzK1irE7ku+geMwQPDe/58DAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    83342: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          default: () => n,
        });
      let n = {
        src: "/_next/static/media/logo-icon.fa0fc046.png",
        height: 128,
        width: 128,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEWFANScN9yXBMmpTuGJAdukQOCHCeCjCs99ANahBsabMtyRBM2dBMiEAdeuQNiTKNq8aOCcAcWLAdCKCNmWEdDAe+iyXOOmRNzTou6JF9vPjueJGuDOlOqrX+Ls2PgTkOoYAAAAEnRSTlOZmf//9/739/2Z//////////78UIzBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBBwKAIAwEsLNVwbI3zv8/0wQ4gwx+F+y3hDC8gubW5xcJrrDMp1o4x9IiWeit+3j5hLVUY8gqIGdDlI4ffxkDVnIWVDAAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    6662: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          default: () => n,
        });
      let n = {
        src: "/_next/static/media/user-referral.042c5648.png",
        height: 24,
        width: 24,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXH/lDT1ki/p2aHo0If5xnL7uWnqqVb9dSDhpE3/qEf3wW/1slb/0YTX16b24KH6kDn/uFn8jCz8q03woUr7nTf7jDH4vnX4fCH+6Jj/qz//hCEcf7lMAAAAGXRSTlMA+6hSZ4rnC+QuZKm6/hquNfq22tXiz9BxjrtIYQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJw9xkkSgCAMAMEBgSRuuCvw/39aXuxTw2/OsQtfQlmnYoAdPg4CdqdzT6Pgq2vN1Z5HVfXaFhARAV5CGAIoF0FMwAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
]);

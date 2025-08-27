(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1393],
  {
    47790: () => {},
    75611: (e, t, r) => {
      "use strict";
      r.d(t, {
        h: () => s,
        m: () => o,
      });
      let n = {
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
        a = {
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
        l = {
          [n.DAREID_NOT_FOUND]: "DareID not found",
          [n.TOKEN_INVALID]: "Authentication token is invalid",
          [n.USER_NOT_FOUND]: "User account not found",
          [n.API_KEY_NOT_FOUND]: "API key not found",
          [n.API_KEY_LIMITATION_EXCEED]: "API usage limit exceeded",
          [n.USER_INVALID]: "User account is invalid",
          [n.NFT_NOT_FOUND]: "NFT not found",
          [n.NFT_CONTRACT_NOT_FOUND]: "NFT contract not found",
          [n.TOKEN_URI_NOT_FOUND]: "Token URI not found",
          [n.ROYALTY_INVALID]: "Royalty information is invalid",
          [n.CHAIN_NOT_SUPPORTED]: "This blockchain is not supported",
          [n.PROVIDER_INVALID]: "Provider configuration is invalid",
          [n.PROVIDER_NOT_FOUND]: "Provider not found",
          [n.SCHEMA_NOT_FOUND]: "Schema definition not found",
          [n.DATA_NOT_MATCH_JSON_SCHEMA]: "Data does not match validation",
          [n.DATA_NOT_MATCH_SIGNATURE]: "Data signature verification failed",
          [n.SCHEMA_INVALID]: "Schema is invalid",
          [n.SCHEMA_LIMITATION_EXCEED]: "Schema limitation exceeded",
          [n.TRANSACTION_NOT_FOUND]: "Transaction record not found",
          [a.WALLET_NOT_FOUND]: "Wallet not found",
          [a.TRANSACTION_FAILED]: "Transaction failed to process",
          [a.POOL_NOT_FOUND]: "Platform or DEX not supported",
          [a.WALLET_EXISTED]: "Wallet already exists",
          [a.TOKEN_EXISTED]: "Token already exists",
          [a.INCORRECT_NETWORK]: "Incorrect blockchain network",
          [a.NULL_PRIVATE_KEY]: "Wallet private key not found",
          [a.CHAIN_NOT_SET]: "Please select a blockchain network",
          [a.TOKEN_NOT_FOUND]: "Token is not available",
        };
      var i = r(13205);
      class o extends Error {
        constructor(e) {
          super("API response validation failed"), (this.name = "ApiValidationError"), (this.validationError = e);
        }
      }
      class s extends Error {
        isAuthorizedError() {
          let e = [this.REFERRAL_ERROR_MSG];
          return this.status === i.kG.Unauthorized && !e.includes(this.originError.message);
        }
        isReferralError() {
          return this.status === i.kG.Conflict && this.originError.message === this.REFERRAL_ERROR_MSG;
        }
        constructor(e, t) {
          let r;
          super(
            ((null == (r = "response" in e ? e.response : e) ? void 0 : r.errorCode)
              ? l[r.errorCode]
              : "string" == typeof r.message
              ? r.message
              : void 0) || "Something went wrong"
          ),
            (this.REFERRAL_ERROR_MSG = "No referral code found"),
            (this.originError = e),
            (this.name = "ApiError"),
            (this.code = r.errorCode),
            (this.status = t || i.kG.InternalServerError);
        }
      }
    },
    10967: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, {
        cL: () => A,
        Ay: () => y,
      });
      var a = r(54679),
        l = r(62246),
        i = r(45398);
      async function o() {
        return n || ((n = await r.e(8894).then(r.bind(r, 58894))), await n.default()), n;
      }
      function s(e) {
        if (e.length % 2 != 0) throw Error("Invalid hex string");
        let t = new Uint8Array(e.length / 2);
        for (let r = 0; r < e.length; r += 2) t[r / 2] = parseInt(e.substr(r, 2), 16);
        return t;
      }
      var d = r(82651),
        u = r(58926),
        c = r(13697),
        g = r(75611);
      let p = (e) => {
          let { filter: t, sort: r, ...n } = e,
            a = u.A.stringify(n, {
              arrayFormat: "none",
              skipNull: !0,
            }),
            l = [];
          if ((a && l.push(a), "object" == typeof t)) {
            let e = Object.entries(t)
              .map((e) => {
                let [t, r] = e;
                return "filter%5B".concat(t, "%5D=").concat(r);
              })
              .join("&");
            e && l.push(e);
          }
          if ("object" == typeof r) {
            let e = Object.entries(r)
              .map((e) => {
                let [t, r] = e;
                return "sort%5B".concat(t, "%5D=").concat(r);
              })
              .join("&");
            e && l.push(e);
          }
          return l.join("&");
        },
        b = d.A.CancelToken.source(),
        m = d.A.create({
          baseURL: a.$B,
          cancelToken: b.token,
          headers: {
            "Content-Type": "application/json",
          },
          timeout: a.UL,
          paramsSerializer: {
            serialize: p,
          },
        });
      m.interceptors.request.use((e) => {
        let t = i.E.getAccessToken();
        return t && (e.headers.Authorization = "Bearer ".concat(t)), e;
      }),
        m.interceptors.response.use(
          (e) => {
            let t = e.config,
              r = null == t ? void 0 : t.validationSchema;
            if (r)
              try {
                return r.cast(e.data);
              } catch (e) {
                console.error("Validation error:", e.errors);
              }
            return e.data;
          },
          (e) => {
            if (e instanceof g.m) return Promise.reject(e);
            let { response: t, config: r } = e;
            if (!t || !r) return Promise.reject(e);
            let n = new g.h(t.data, t.status);
            return (
              n.isAuthorizedError() && l.Kr.getState().setModalOpenState(l.CE.SessionExpiredModal, !0),
              Promise.reject(n)
            );
          }
        );
      let y = m,
        A = d.A.create({
          baseURL: a.$B,
          cancelToken: b.token,
          headers: {
            "Content-Type": "application/json",
          },
          timeout: a.UL,
          paramsSerializer: {
            serialize: p,
          },
        });
      A.interceptors.request.use(async (e) => {
        let t = i.E.getAccessToken();
        t && (e.headers.Authorization = "Bearer ".concat(t));
        let r = await o(),
          n = c.A(),
          l = Math.floor(Date.now() / 1e3),
          d = s(a.Si),
          u = r.create_key(a.a$, d, l.toString(), n);
        return (e.headers["x-client-id"] = u), e;
      }),
        A.interceptors.response.use(
          async (e) => {
            let t = e.data,
              r = null == e ? void 0 : e.headers["x-client-id"],
              [n, a] = t.data.split(":"),
              l = s(n),
              i = JSON.parse((await o()).decrypt(r.toString(), l, a)),
              d = e.config,
              u = null == d ? void 0 : d.validationSchema;
            if (u)
              try {
                return u.cast(i);
              } catch (e) {
                console.error("Validation error:", e.errors);
              }
            return i;
          },
          (e) => {
            if (e instanceof g.m) return Promise.reject(e);
            let { response: t, config: r } = e;
            if (!t || !r) return Promise.reject(e);
            let n = new g.h(t.data, t.status);
            return (
              n.isAuthorizedError() && l.Kr.getState().setModalOpenState(l.CE.SessionExpiredModal, !0),
              Promise.reject(n)
            );
          }
        );
    },
    85178: (e, t, r) => {
      "use strict";
      r.d(t, {
        y: () => C,
      });
      var n = r(52736);
      let a = n.A.object({
          route: n.A.string().required(),
          poolAddress: n.A.string().required(),
          poolFee: n.A.number().transformEmpty(0),
          tokenIn: n.A.string().required(),
          tokenOut: n.A.string().required(),
        }),
        l = n.A.object({
          result: n.A.array(a).filterInvalid().required(),
        });
      var i = r(14928),
        o = r(19938),
        s = r(73367);
      let d = o.object({
          priceId: o.number().nullable(),
          priceUsd: o.string().nullable(),
          priceNative: o.string().nullable(),
          volumeH24: o.string().nullable(),
          volumeH6: o.string().nullable(),
          volumeH1: o.string().nullable(),
          priceChangeH1: o.string().nullable(),
          priceChangeH6: o.string().nullable(),
          priceChangeH24: o.string().nullable(),
          liquidity: o.string().nullable(),
          liquidityBase: o.string().nullable(),
          liquidityBaseUsd: o.string().nullable(),
          liquidityQuote: o.string().nullable(),
          liquidityQuoteUsd: o.string().nullable(),
          fdv: o.string().nullable(),
          marketCap: o.string().nullable(),
          totalSupply: o.string().nullable(),
          circulatingSupply: o.string().nullable(),
          holder: o.number().nullable(),
          buyCount: o.number().nullable(),
          sellCount: o.number().nullable(),
          buyVol: o.string().nullable(),
          sellVol: o.string().nullable(),
          createdAt: o.string().nullable(),
          updatedAt: o.string().nullable(),
          deletedAt: o.string().nullable(),
        }),
        u = o.object({
          name: o.string().required(),
          tokenAddress: o.string().required(),
          iconUrl: o.string().nullable(),
          symbol: o.string().required(),
          amount: o.string().required(),
          decimals: o.number().required().nullable(),
          pairCreatedAt: o.string().nullable(),
          description: o.string().nullable(),
          tokenData: d.required(),
          pnl: o.string().nullable(),
          avgBuyPrice: o.string().nullable(),
        }),
        c = o.object({
          id: o.number().required(),
          name: o.string().required(),
          address: o.string().required(),
          active: o.boolean().required(),
          tokens: o.array().of(u).required(),
        }),
        g = s.BM.shape({
          items: o.array().of(c).filterInvalid().required(),
        }),
        p = o.object({
          id: o.number().required(),
          name: o.string().required(),
          isActive: o.boolean().required(),
          createdAt: o.string().required(),
          updatedAt: o.string().required(),
          deletedAt: o.string().nullable(),
        }),
        b = o.object({
          id: o.number().required(),
          name: o.string().required(),
          tokenAddress: o.string().required(),
          dexId: o.string().nullable(),
          poolFee: o.number().nullable(),
          pairAddress: o.string().nullable(),
          pairAddressDextools: o.string().nullable(),
          deployerAddress: o.string().nullable(),
          lpProviderAddress: o.string().nullable(),
          symbol: o.string().required(),
          decimals: o.number().required(),
          iconUrl: o.string().required(),
          pairCreatedAt: o.string().nullable(),
          isMeme: o.boolean().required(),
          isFourMeme: o.boolean().required(),
          isMovePump: o.boolean().required(),
          chainId: o.string().required(),
          description: o.string().nullable(),
          metadata: o.mixed().nullable(),
          isDead: o.boolean().required(),
          quoteTokenId: o.string().nullable(),
          createdAt: o.string().required(),
          updatedAt: o.string().required(),
          deletedAt: o.string().nullable(),
          tokenData: o
            .object({
              priceId: o.number().required(),
              priceUsd: o.string().required(),
              priceNative: o.string().nullable(),
              volumeH24: o.string().nullable(),
              volumeH6: o.string().nullable(),
              volumeH1: o.string().nullable(),
              priceChangeH1: o.string().nullable(),
              priceChangeH6: o.string().nullable(),
              priceChangeH24: o.string().nullable(),
              liquidity: o.string().nullable(),
              liquidityBase: o.string().nullable(),
              liquidityBaseUsd: o.string().nullable(),
              liquidityQuote: o.string().nullable(),
              liquidityQuoteUsd: o.string().nullable(),
              fdv: o.string().nullable(),
              marketCap: o.string().nullable(),
              totalSupply: o.string().nullable(),
              circulatingSupply: o.string().nullable(),
              holder: o.string().nullable(),
              buyCount: o.number().nullable(),
              sellCount: o.number().nullable(),
              buyVol: o.string().nullable(),
              sellVol: o.string().nullable(),
              createdAt: o.string().required(),
              updatedAt: o.string().required(),
              deletedAt: o.string().nullable(),
            })
            .required(),
        }),
        m = o.object({
          transactionHash: s.L_.required(),
          orderType: s.ng.required(),
          baseToken: s.L_.required(),
          quoteToken: s.L_.required(),
          amount: s.L_.required(),
          markPrice: s.L_.nullable(),
          amountOut: s.L_.nullable(),
          copyTradingId: s.L_.nullable(),
          status: s.ng.required(),
          retryCount: s.ng.nullable(),
          calledMarketCap: s.L_.nullable(),
          timeConsumedMs: s.ng.nullable(),
          dexId: s.L_.nullable(),
          systemFee: s.L_.nullable(),
          queueJobId: s.L_.nullable(),
          createdAt: s.L_.required(),
          updatedAt: s.L_.required(),
          deletedAt: s.L_.nullable(),
        }),
        y = o.object({
          transactionHash: o.string().required(),
          sender: o.string().required(),
          amount: o.string().required(),
          chainTimestamp: o.string().required(),
          chainBlock: o.string().nullable(),
          type: o.number().required(),
          destination: o.string().required(),
          status: o.number().required(),
          createdAt: o.string().required(),
          updatedAt: o.string().required(),
          deletedAt: o.string().nullable(),
        }),
        A = o.object({
          transactionHash: o.string().nullable(),
          price: o.string().nullable(),
          transactionHistoryType: o.number().required(),
          signer: p.required(),
          token: b.nullable(),
          amount: o.string().nullable(),
          orderType: o.number().nullable(),
          createdAt: o.string().required(),
          status: o.number().required(),
          isDepositWithdraw: o.boolean().required(),
          pnl: o.mixed().nullable(),
          transaction: m.nullable(),
          portfolioTransaction: y.nullable(),
        }),
        _ = o.object({
          items: o.array().of(A).required(),
          total: o.number().default(0),
        }),
        h = o.object({
          token_address: o.string().required(),
          symbol: o.string().transformEmpty("UNKNOWN"),
          name: o.string().transformEmpty("Unrecognized token"),
          logo: s.L_,
          thumbnail: s.L_,
          decimals: o.number().required().nullable(),
          balance: o.string().required(),
          possible_spam: s.yu,
          verified_contract: s.yu,
          total_supply: s.L_,
          total_supply_formatted: s.L_,
          percentage_relative_to_total_supply: s.ng,
          security_score: s.ng,
        }),
        v = o.array().of(h).filterInvalid().required(),
        f = s.Ay.shape({
          tokenAddress: o.string().required(),
          symbol: o.string().transformEmpty("UNKNOWN"),
          name: o.string().transformEmpty("Unrecognized token"),
          decimals: o.number().required().nullable(),
          token: i.Bp.filterInvalid(),
        }),
        T = s.BM.shape({
          items: o.array().of(f).filterInvalid().required(),
        }),
        E = o.object({
          id: o.string().required(),
          chainName: o.string().required(),
          chainRpc: o.string().required(),
          chainImg: o.string().url().required(),
        }),
        q = o.object({
          amount: o.string().required(),
          decimals: o.number().required(),
          percentage: o.number().required(),
          chain: E.required(),
        }),
        N = o.object({
          balance: o.string().required(),
          decimals: o.number().required(),
          chains: o.array().of(q).required(),
        });
      var k = r(10967);
      let C = {
        generateWallet: (e) => k.Ay.post("/wallet-v2/add", e).then((e) => e.walletInfo),
        importWallet: (e) => k.Ay.post("/wallet-v2/import", e),
        deleteWallet: (e) =>
          k.Ay.post("/wallet-v2/delete", {
            id: e,
          }),
        getWallets: (e) =>
          k.Ay.get("/wallet-v2/list", {
            params: e,
            validationSchema: g,
          }),
        getPortfolioWallets: (e) =>
          k.Ay.get("/wallet-v2/portfolio/list", {
            params: e,
            validationSchema: g,
          }),
        getWalletsOverview: () =>
          k.Ay.get("/wallet-v2/portfolio/overview", {
            validationSchema: N,
          }),
        updateWallet: (e) => k.Ay.post("/wallet-v2/update", e).then((e) => e.success),
        swap: (e) => k.Ay.post("/wallet-v2/swap", e),
        getTransaction: (e) =>
          k.Ay.get("/wallet-v2/portfolio/transactions", {
            params: e,
            validationSchema: _,
          }),
        getTransactionByToken: (e, t) =>
          k.Ay.get("/wallet-v2/transactions/token", {
            params: {
              tokenAddress: e,
              chainId: t,
            },
          }),
        getOwnedTokens: (e) =>
          k.Ay.get("/wallet-v2/owned-tokens", {
            params: {
              address: e,
            },
            validationSchema: v,
          }),
        getFavoriteTokens: (e) =>
          k.Ay.get("/wallet-v2/get-favorite-token", {
            params: e,
            validationSchema: T,
          }),
        importFavoriteToken: (e) =>
          k.Ay.post("/wallet-v2/import-favorite-token", {
            tokenAddress: e,
          }),
        deleteFavoriteToken: (e) =>
          k.Ay.post("/wallet-v2/delete-favorite-token", {
            tokenAddress: e,
          }),
        checkFavoriteToken: (e) =>
          k.Ay.get("/wallet-v2/check-favorite-token", {
            params: {
              tokenAddress: e,
            },
          }),
        getNativePairs: () => k.Ay.get("/wallet-v2/get-native-stablecoin"),
        getAvailablePlatforms: (e) =>
          k.Ay.get("/wallet-v2/available-platform/".concat(e), {
            validationSchema: i.SZ,
          }),
        getBestRoute: (e, t) =>
          k.Ay.get("/wallet-v2/best-route", {
            params: {
              tokenInAddress: e,
              tokenOutAddress: t,
            },
          }),
        getPathFromToken: (e) =>
          k.Ay.get("/wallet-v2/path-from-token", {
            params: {
              tokenAddress: e,
            },
            validationSchema: l,
          }),
        transferNative: (e) => k.Ay.post("/wallet-v2/transfer-native", e),
        getTransactionFees: () => k.Ay.get("/wallet-v2/transaction-fees"),
        getTokenTxList: (e) =>
          k.Ay.get("/wallet-v2/token-tx-list", {
            params: e,
          }),
        getPrivateKey: (e) =>
          k.Ay.get("/wallet-v2/private-key", {
            params: e,
          }),
      };
    },
    54679: (e, t, r) => {
      "use strict";
      r.d(t, {
        $B: () => a,
        D7: () => s,
        F3: () => o,
        J6: () => c,
        PM: () => i,
        Si: () => u,
        UL: () => l,
        a$: () => d,
      });
      var n = r(87358);
      let a = "https://api.nerox.ai",
        l = 3e4,
        i = n.env.NEXT_PUBLIC_TELEGRAM_AUTH_BOT || "nerox_connect_bot",
        o = "https://nerox.ai",
        s = 10,
        d = "uXL5CwvBW3eZnWQX6uq5dcAT9wj0ZCMGv-onUe4zUfk",
        u = "00112233445566778899aabbccddeeff";
      var c = (function (e) {
        return (e.ASC = "ASC"), (e.DESC = "DESC"), e;
      })({});
    },
    56023: (e, t, r) => {
      "use strict";
      r.d(t, {
        k: () => n,
      });
      let n = {
        TOKEN_DATA: "token-data",
        TOKEN_STATISTICS: "token-statistics",
        WALLET: "wallet",
        SOCIAL_TASKS: "social-tasks",
        SOL_PRICE: "sol-price",
        TOKEN_ACCOUNT: "token-account",
        TOKEN_PRICE: "token-price",
        TOKEN_STORY: "token-story",
        WALLET_BALANCE: "wallet-balance",
        RPC: "rpc",
        TOKEN_TRENDING: "token-trending",
        OVERVIEW: "overview",
        PORTFOLIO_WALLET: "portfolio-wallet",
      };
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
    75136: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => i,
        _: () => o,
      });
      var n = r(3449),
        a = r(93233),
        l = r(57882);
      let i = (e) => {
          var t;
          let r = (0, n.n)((e) => e.state.authenticated && e.state.refCodeReady);
          return (0, a.I)({
            ...e,
            enabled: (null === (t = e.enabled) || void 0 === t || t) && r,
          });
        },
        o = (e) => {
          var t;
          let r = (0, n.n)((e) => e.state.authenticated && e.state.refCodeReady);
          return (0, l.q)({
            ...e,
            enabled: (null === (t = e.enabled) || void 0 === t || t) && r,
          });
        };
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
        BM: () => o,
        L_: () => a,
        ng: () => l,
        xY: () => s,
        yu: () => i,
      });
      var n = r(52736);
      let a = n.A.string().transformEmpty(),
        l = n.A.number().transformEmpty(),
        i = n.A.boolean().default(!1).transformEmpty(!1),
        o = n.A.object({
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
        Bk: () => o,
        Bp: () => _,
        DV: () => N,
        Lw: () => h,
        Rg: () => T,
        S1: () => y,
        SZ: () => c,
        VT: () => p,
        vO: () => d,
      });
      var n = r(19938),
        a = r(73367),
        l = r(38466);
      let i = n.object({
          twitterUrl: a.L_,
          webUrl: a.L_,
          telegramUrl: a.L_,
        }),
        o = n.object({
          chainId: n.string().oneOf(Object.values(l.nU)).required(),
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
          metadata: i.nullable(),
          lpProviderAddress: a.L_,
          quoteTokenAddress: a.L_,
          pairCreatedAt: a.L_,
          score: a.ng,
        }),
        s = n.object({
          chainId: n.string().oneOf(Object.values(l.nU)).required(),
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
          metadata: i.nullable(),
          lpProviderAddress: a.L_,
          quoteTokenAddress: a.L_,
          pairCreatedAt: a.L_,
          score: a.ng,
        }),
        d = n.object({
          id: n.number().required(),
          tweetId: a.ng,
          tokenId: n.string().required(),
          highlight: n.string().default(""),
          token: s.required(),
        }),
        u = n.object().shape({
          token: n.string().required(),
          name: n.string().transformEmpty("Unrecognized token"),
          symbol: n.string().transformEmpty("UNKNOWN"),
          decimals: a.ng,
          platforms: n.array().of(n.mixed()),
        }),
        c = n.object().shape({
          result: n.array().of(u).filterInvalid().required(),
        }),
        g = a.Ay.shape({
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
        p = n.object({
          items: n.array().of(g).filterInvalid().required(),
        }),
        b = n.object({
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
        m = a.Ay.shape({
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
          tokenData: b.required(),
        }),
        y = n.object().shape({
          items: n.array().of(m).filterInvalid().required(),
          nextCursor: a.L_,
        }),
        A = n.object().shape({
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
        _ = a.Ay.shape({
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
          metadata: i.nullable(),
          tokenData: A.required(),
        }),
        h = n.object({
          items: n.array().of(_).required(),
        }),
        v = a.Ay.shape({
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
        f = a.Ay.shape({
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
          metadata: i.nullable(),
          tokenData: A.required(),
          quoteTokenId: n.number().required(),
          countTweetAllTime: a.ng,
          countTweet: a.ng,
          tweetChange: a.ng,
          score: a.ng,
          smartFollowers: n.array().of(v),
        }),
        T = a.xY.shape({
          items: n.array().of(f).required(),
        }),
        E = n.object({
          m5: a.ng,
          h1: a.ng,
          h4: a.ng,
          h24: a.ng,
        }),
        q = n
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
            changes: E.required(),
            h24_change: a.L_,
            score: a.L_,
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
        N = a.BM.shape({
          items: n.array().of(q).filterInvalid().required(),
          newTokenCount24h: a.ng,
        });
    },
    3449: (e, t, r) => {
      "use strict";
      r.d(t, {
        n: () => l,
      });
      var n = r(32081),
        a = r(11087);
      let l = (0, n.vt)(
        (0, a.D)((e) => ({
          state: {
            token: void 0,
            authenticated: !1,
            ready: !1,
            refCodeReady: !1,
          },
          setState: (t) => {
            e((e) => {
              Object.assign(e.state, t);
            });
          },
        }))
      );
    },
    62246: (e, t, r) => {
      "use strict";
      r.d(t, {
        CE: () => i,
        Kr: () => o,
        pM: () => s,
        s_: () => d,
      });
      var n = r(32081),
        a = r(11087),
        l = r(58469),
        i = (function (e) {
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
            (e.AIModal = "AIModal"),
            (e.TweetModal = "TweetModal"),
            e
          );
        })({});
      let o = (0, n.vt)(
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
              AIModal: {
                open: !1,
                data: void 0,
              },
              TweetModal: {
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
          o(
            (0, l.k)((t) => ({
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
        DO: () => A,
        DP: () => y,
        IQ: () => m,
        kR: () => _,
        ol: () => p,
      });
      var n = r(37757),
        a = r(53846),
        l = r(36828),
        i = r(38466),
        o = r(12115),
        s = r(32081),
        d = r(60709),
        u = r(11087);
      let c = {
          amount: n.y,
          slippage: n.Q,
        },
        g = {
          [i.nU.SOL]: c,
          [i.nU.APT]: c,
          [i.nU.BSC]: c,
          [i.nU.SUI]: c,
          [i.nU.BASE]: c,
        },
        p = {
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
        b = new i.Rv({
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
              chainId: i.nU.SOL,
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
              sidebarCollapsed: !1,
              setSidebarCollapsed: (t) => {
                e((e) => {
                  e.sidebarCollapsed = t;
                });
              },
            })),
            {
              name: "nerox.settings",
              version: 1.4,
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
        y = () => [m((e) => e.theme), m((e) => e.setTheme)],
        A = () => {
          let e = m((e) => e.chainId);
          return (0, o.useMemo)(() => {
            b.switchChain(e);
            let t = b.getActiveChain();
            return {
              chainId: e,
              chain: t,
              nativeToken: {
                ...t.nativeToken,
                icon: l.Fn[t.nativeToken.chainId].white,
              },
              chainProvider: b,
              chainUtils: a.r[e],
            };
          }, [e]);
        },
        _ = () => {
          let e = m((e) => e.quickBuy[e.chainId]),
            t = m((e) => e.setQuickBuy),
            r = m((e) => e.chainId);
          return [
            e,
            (e) => {
              t(r, e);
            },
          ];
        };
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
    53846: (e, t, r) => {
      "use strict";
      r.d(t, {
        r: () => A,
      });
      var n = r(38466),
        a = r(52152);
      class l {
        constructor(e, t) {
          (this.chainId = e), (this.name = t);
        }
      }
      class i extends l {
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
      var o = r(39550);
      class s extends l {
        deriveFromPrivateKey(e) {
          return new o.u(e).address;
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
      class c extends l {
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
        p = r(5893),
        b = r(75927).Buffer;
      class m extends l {
        deriveFromPrivateKey(e) {
          if (!e) throw Error("Private key cannot be empty");
          try {
            if (e.startsWith("suiprivkey1")) {
              let { words: t } = p.I.decode(e),
                r = b.from(p.I.fromWords(t)).slice(1);
              return g.h.fromSecretKey(r).getPublicKey().toSuiAddress();
            }
            let t = e.replace(/^0x/, "");
            if (64 !== t.length)
              throw Error("Invalid private key length. Expected 64 characters (32 bytes), got ".concat(t.length));
            return g.h.fromSecretKey(b.from(t, "hex")).getPublicKey().toSuiAddress();
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
      class y extends l {
        deriveFromPrivateKey(e) {
          return new o.u(e).address;
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
      let A = {
        [n.nU.SOL]: new c(),
        [n.nU.APT]: new i(),
        [n.nU.BSC]: new s(),
        [n.nU.SUI]: new m(),
        [n.nU.BASE]: new y(),
      };
    },
    8566: (e, t, r) => {
      "use strict";
      r.d(t, {
        K: () => i,
      });
      var n = r(38466),
        a = r(53453),
        l = r(16917);
      let i = "https://api.coingecko.com/api/v3/simple/price";
      n.nU.BSC, a.N, n.nU.BASE, l.E;
    },
    36828: (e, t, r) => {
      "use strict";
      r.d(t, {
        Fn: () => n.F,
        y8: () => n.y,
      });
      var n = r(47562);
      r(8566);
    },
    47562: (e, t, r) => {
      "use strict";
      r.d(t, {
        F: () => o,
        y: () => i,
      });
      var n = r(38466),
        a = r(8566);
      let l = {
          [n.nU.BSC]: "binancecoin",
          [n.nU.BASE]: "ethereum",
          [n.nU.SOL]: "solana",
          [n.nU.APT]: "aptos",
          [n.nU.SUI]: "sui",
        },
        i = (e) => {
          let t = l[e];
          return fetch("".concat(a.K, "?ids=").concat(t, "&vs_currencies=usd"))
            .then((e) => e.json())
            .then((e) => e[t].usd);
        },
        o = {
          [n.nU.SOL]: {
            color: "/icons/tokens/sol-colored.svg",
            white: "/icons/tokens/sol.svg",
          },
          [n.nU.APT]: {
            color: "/icons/tokens/apt.svg",
            white: "/icons/tokens/apt.svg",
          },
          [n.nU.BSC]: {
            color: "/icons/tokens/bnb-colored.svg",
            white: "/icons/tokens/bnb.svg",
          },
          [n.nU.SUI]: {
            color: "/icons/tokens/sui-colored.svg",
            white: "/icons/tokens/sui.svg",
          },
          [n.nU.BASE]: {
            color: "/icons/tokens/base-colored.svg",
            white: "/icons/tokens/eth.svg",
          },
        };
    },
  },
]);

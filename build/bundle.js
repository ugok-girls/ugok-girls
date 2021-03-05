var app = (function () {
  'use strict';
  function t() {}
  function e(t) {
    return t();
  }
  function n() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(e);
  }
  function r(t) {
    return 'function' == typeof t;
  }
  function c(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
  }
  function l(t, e) {
    t.appendChild(e);
  }
  function s(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function i(t) {
    t.parentNode.removeChild(t);
  }
  function a(t) {
    return document.createElement(t);
  }
  function u(t) {
    return document.createTextNode(t);
  }
  function f() {
    return u(' ');
  }
  function d(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  let p;
  function h(t) {
    p = t;
  }
  function m() {
    if (!p) throw new Error('Function called outside component initialization');
    return p;
  }
  const g = [],
    k = [],
    b = [],
    y = [],
    v = Promise.resolve();
  let w = !1;
  function $(t) {
    b.push(t);
  }
  let j = !1;
  const _ = new Set();
  function O() {
    if (!j) {
      j = !0;
      do {
        for (let t = 0; t < g.length; t += 1) {
          const e = g[t];
          h(e), x(e.$$);
        }
        for (h(null), g.length = 0; k.length; ) k.pop()();
        for (let t = 0; t < b.length; t += 1) {
          const e = b[t];
          _.has(e) || (_.add(e), e());
        }
        b.length = 0;
      } while (g.length);
      for (; y.length; ) y.pop()();
      (w = !1), (j = !1), _.clear();
    }
  }
  function x(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach($);
    }
  }
  const K = new Set();
  let G;
  function U(t, e) {
    t && t.i && (K.delete(t), t.i(e));
  }
  function E(t, e) {
    const n = (e.token = {});
    function r(t, r, c, l) {
      if (e.token !== n) return;
      e.resolved = l;
      let s = e.ctx;
      void 0 !== c && ((s = s.slice()), (s[c] = l));
      const i = t && (e.current = t)(s);
      let a = !1;
      e.block &&
        (e.blocks
          ? e.blocks.forEach((t, n) => {
              n !== r &&
                t &&
                ((G = { r: 0, c: [], p: G }),
                (function (t, e, n, o) {
                  if (t && t.o) {
                    if (K.has(t)) return;
                    K.add(t),
                      G.c.push(() => {
                        K.delete(t), o && (n && t.d(1), o());
                      }),
                      t.o(e);
                  }
                })(t, 1, 1, () => {
                  e.blocks[n] === t && (e.blocks[n] = null);
                }),
                G.r || o(G.c),
                (G = G.p));
            })
          : e.block.d(1),
        i.c(),
        U(i, 1),
        i.m(e.mount(), e.anchor),
        (a = !0)),
        (e.block = i),
        e.blocks && (e.blocks[r] = i),
        a && O();
    }
    if ((c = t) && 'object' == typeof c && 'function' == typeof c.then) {
      const n = m();
      if (
        (t.then(
          (t) => {
            h(n), r(e.then, 1, e.value, t), h(null);
          },
          (t) => {
            if ((h(n), r(e.catch, 2, e.error, t), h(null), !e.hasCatch))
              throw t;
          }
        ),
        e.current !== e.pending)
      )
        return r(e.pending, 0), !0;
    } else {
      if (e.current !== e.then) return r(e.then, 1, e.value, t), !0;
      e.resolved = t;
    }
    var c;
  }
  function C(t, e) {
    -1 === t.$$.dirty[0] &&
      (g.push(t), w || ((w = !0), v.then(O)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function T(c, l, s, a, u, f, d = [-1]) {
    const m = p;
    h(c);
    const g = (c.$$ = {
      fragment: null,
      ctx: null,
      props: f,
      update: t,
      not_equal: u,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(m ? m.$$.context : []),
      callbacks: n(),
      dirty: d,
      skip_bound: !1,
    });
    let k = !1;
    if (
      ((g.ctx = s
        ? s(c, l.props || {}, (t, e, ...n) => {
            const o = n.length ? n[0] : e;
            return (
              g.ctx &&
                u(g.ctx[t], (g.ctx[t] = o)) &&
                (!g.skip_bound && g.bound[t] && g.bound[t](o), k && C(c, t)),
              e
            );
          })
        : []),
      g.update(),
      (k = !0),
      o(g.before_update),
      (g.fragment = !!a && a(g.ctx)),
      l.target)
    ) {
      if (l.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(l.target);
        g.fragment && g.fragment.l(t), t.forEach(i);
      } else g.fragment && g.fragment.c();
      l.intro && U(c.$$.fragment),
        (function (t, n, c) {
          const {
            fragment: l,
            on_mount: s,
            on_destroy: i,
            after_update: a,
          } = t.$$;
          l && l.m(n, c),
            $(() => {
              const n = s.map(e).filter(r);
              i ? i.push(...n) : o(n), (t.$$.on_mount = []);
            }),
            a.forEach($);
        })(c, l.target, l.anchor),
        O();
    }
    h(m);
  }
  function A(t, e, n) {
    const o = t.slice();
    return (o[2] = e[n]), o;
  }
  function N(e) {
    let n,
      o,
      r = e[5].message + '';
    return {
      c() {
        var t, e, c;
        (n = a('p')),
          (o = u(r)),
          (t = 'color'),
          (e = 'red'),
          n.style.setProperty(t, e, c ? 'important' : '');
      },
      m(t, e) {
        s(t, n, e), l(n, o);
      },
      p: t,
      d(t) {
        t && i(n);
      },
    };
  }
  function D(t) {
    let e,
      n = t[1],
      o = [];
    for (let e = 0; e < n.length; e += 1) o[e] = B(A(t, n, e));
    return {
      c() {
        e = a('div');
        for (let t = 0; t < o.length; t += 1) o[t].c();
        d(e, 'id', 'ranking');
      },
      m(t, n) {
        s(t, e, n);
        for (let t = 0; t < o.length; t += 1) o[t].m(e, null);
      },
      p(t, r) {
        if (1 & r) {
          let c;
          for (n = t[1], c = 0; c < n.length; c += 1) {
            const l = A(t, n, c);
            o[c] ? o[c].p(l, r) : ((o[c] = B(l)), o[c].c(), o[c].m(e, null));
          }
          for (; c < o.length; c += 1) o[c].d(1);
          o.length = n.length;
        }
      },
      d(t) {
        t && i(e),
          (function (t, e) {
            for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
          })(o, t);
      },
    };
  }
  function B(e) {
    let n,
      o,
      r,
      c,
      p,
      h,
      m,
      g,
      k,
      b,
      y,
      v,
      w,
      $,
      j,
      _,
      O,
      x,
      K,
      G,
      U,
      E,
      C,
      T,
      A,
      N,
      D,
      B,
      H,
      M,
      P,
      S,
      q,
      z,
      F,
      L,
      R,
      I,
      J,
      Q,
      V,
      W,
      X = e[2].name + '',
      Y = e[2].twitter.likes.week + '',
      Z = e[2].twitter.rt.week + '',
      tt = e[2].alis.posts.all + '',
      et = e[2].alis.likes.all + '',
      nt = e[2].name + '';
    return {
      c() {
        (n = a('div')),
          (o = a('div')),
          (r = a('div')),
          (c = a('img')),
          (h = f()),
          (m = a('p')),
          (g = u(X)),
          (k = f()),
          (b = a('div')),
          (y = a('div')),
          (v = a('span')),
          (v.textContent = 'Twitter:'),
          (w = a('br')),
          ($ = u('\n                  ')),
          (j = u(Y)),
          (_ = u(' likes/週')),
          (O = a('br')),
          (x = u('\n                  ')),
          (K = u(Z)),
          (G = u(' RT/週')),
          (U = a('br')),
          (E = f()),
          (C = a('div')),
          (T = a('span')),
          (T.textContent = 'Blog:'),
          (A = a('br')),
          (N = u('\n                  ')),
          (D = u(tt)),
          (B = u(' posts')),
          (H = a('br')),
          (M = u('\n                  ')),
          (P = u(et)),
          (S = u(' likes')),
          (q = a('br')),
          (z = f()),
          (F = a('div')),
          (L = a('a')),
          (R = u('Tweets by ')),
          (I = u(nt)),
          (J = f()),
          (Q = a('script')),
          (W = f()),
          c.src !== (p = e[2].twitter.icon) && d(c, 'src', p),
          d(c, 'alt', ''),
          d(m, 'class', 'svelte-knjy35'),
          d(r, 'class', 'profile svelte-knjy35'),
          d(v, 'class', 'title svelte-knjy35'),
          d(y, 'class', 'twData svelte-knjy35'),
          d(T, 'class', 'title svelte-knjy35'),
          d(C, 'class', 'blogData'),
          d(b, 'class', 'snsData svelte-knjy35'),
          d(o, 'class', 'card svelte-knjy35'),
          d(L, 'class', 'twitter-timeline'),
          d(L, 'data-tweet-limit', '1'),
          d(L, 'data-chrome', 'noheader nofooter'),
          d(L, 'data-width', '350'),
          d(L, 'data-height', '200'),
          d(L, 'data-theme', 'light'),
          d(
            L,
            'href',
            'https://twitter.com/' +
              e[2].twitter.screenName +
              '?ref_src=twsrc%5Etfw'
          ),
          (Q.async = !0),
          Q.src !== (V = 'https://platform.twitter.com/widgets.js') &&
            d(Q, 'src', 'https://platform.twitter.com/widgets.js'),
          d(Q, 'charset', 'utf-8'),
          d(F, 'class', 'tweet svelte-knjy35'),
          d(n, 'class', 'record svelte-knjy35');
      },
      m(t, e) {
        s(t, n, e),
          l(n, o),
          l(o, r),
          l(r, c),
          l(r, h),
          l(r, m),
          l(m, g),
          l(o, k),
          l(o, b),
          l(b, y),
          l(y, v),
          l(y, w),
          l(y, $),
          l(y, j),
          l(y, _),
          l(y, O),
          l(y, x),
          l(y, K),
          l(y, G),
          l(y, U),
          l(b, E),
          l(b, C),
          l(C, T),
          l(C, A),
          l(C, N),
          l(C, D),
          l(C, B),
          l(C, H),
          l(C, M),
          l(C, P),
          l(C, S),
          l(C, q),
          l(n, z),
          l(n, F),
          l(F, L),
          l(L, R),
          l(L, I),
          l(F, J),
          l(F, Q),
          l(n, W);
      },
      p: t,
      d(t) {
        t && i(n);
      },
    };
  }
  function H(e) {
    let n;
    return {
      c() {
        (n = a('div')),
          (n.innerHTML = '<div class="spinner svelte-knjy35"></div>'),
          d(n, 'id', 'loading'),
          d(n, 'class', 'svelte-knjy35');
      },
      m(t, e) {
        s(t, n, e);
      },
      p: t,
      d(t) {
        t && i(n);
      },
    };
  }
  function M(e) {
    let n,
      o,
      r,
      c = {
        ctx: e,
        current: null,
        token: null,
        hasCatch: !0,
        pending: H,
        then: D,
        catch: N,
        value: 1,
        error: 5,
      };
    return (
      E(e[0], c),
      {
        c() {
          (n = a('html')),
            (o = f()),
            (r = a('main')),
            c.block.c(),
            (document.title = 'UGOK情報発信'),
            d(n, 'lang', 'ja'),
            d(r, 'class', 'svelte-knjy35');
        },
        m(t, e) {
          l(document.head, n),
            s(t, o, e),
            s(t, r, e),
            c.block.m(r, (c.anchor = null)),
            (c.mount = () => r),
            (c.anchor = null);
        },
        p(t, [n]) {
          {
            const o = (e = t).slice();
            (o[1] = o[5] = c.resolved), c.block.p(o, n);
          }
        },
        i: t,
        o: t,
        d(t) {
          i(n), t && i(o), t && i(r), c.block.d(), (c.token = null), (c = null);
        },
      }
    );
  }
  function P(t) {
    return [
      (async function () {
        new Headers({ accept: 'application/json' });
        const t = await fetch('https://ugok-app.herokuapp.com/api/users'),
          e = await t.json();
        if (t.ok) {
          console.log(e);
          const t = [
              'あすか🐱UGOK',
              'ミサ🥣UGOK',
              'なつ🍊UGOK',
              'こころ🧀UGOK',
              'ひなの🦢UGOK',
              'あや🍨UGOK',
              'くみ🐶UGOK',
              'みさき🌷UGOK',
              'ゆりあ🦌UGOK',
              'オオニシ⏰UGOK',
              'はる🪐UGOK',
              'さくら🌸UGOK',
              'Kana🐥UGOK',
              'まみ🥑UGOK',
            ],
            n = e.filter((e) => t.includes(e.name));
          return (
            n.sort((t, e) => e.twitter.likes.week - t.twitter.likes.week),
            console.log(n),
            n
          );
        }
        throw new Error(e);
      })(),
    ];
  }
  return new (class extends class {
    $destroy() {
      !(function (t, e) {
        const n = t.$$;
        null !== n.fragment &&
          (o(n.on_destroy),
          n.fragment && n.fragment.d(e),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []));
      })(this, 1),
        (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  } {
    constructor(t) {
      super(), T(this, t, P, M, c, {});
    }
  })({ target: document.body, props: {} });
})();

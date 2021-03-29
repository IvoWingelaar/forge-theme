+++
+++

# Forge: a theme for Zola

# Usage

Download this theme to the `themes` directory of the [Zola](https://getzola.org) website:

```bash
$ pwd
/path/to/your/website
$ cd themes
$ git clone https://github.com/IvoWingelaar/forge-theme.git
```

Select the theme for use by adding the following to the `config.toml` file:
```toml
theme = "forge-theme"
```

# Mathematics

To enable support for mathematical typesetting with [KaTeX](https://katex.org), add the following to the `config.toml` file:

```toml
[extra]
katex_enable = true
```

You can then use the `katex()` shortcode to render KaTeX code in your Markdown files.
Marvel upon this majestic proof of a simple algebraic expression:

{% katex(reserve="16em") %}
\begin{aligned}
   (a + b)^2&=(a+b)(a+b) \\
   &=(a+b)a + (a+b)b \\
   &=(aa + ba) + (ab + bb)\\
   &= a^2 + ba + ab + b^2 \\
   &= a^2 + ab + ab + b^2 \\
   &= a^2 + 2ab + b^2
\end{aligned}
{% end %}

To prevent content layout shift while KaTeX is loading on slower connections, the `katex()` shortcode allows you to reserve vertical space on your page.
This space should be slightly larger than the actual required space as the rendered output is centered inside the block reserved by the shortcode and will expand if the reserved space is too small, resulting in the content layout shift we are trying to avoid.

```
{%/* katex(reserve="16em") */%}
// insert KaTeX code here, 16 em vertical space will be reserved.
{%/* end */%}
```

# Future work

- Progressive enhancement with an dynamic table of content floating next to blog articles.
- More customization support.

# License

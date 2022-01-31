# Forge: a theme for Zola

## Usage

Download this theme to the `themes` directory of your [Zola](https://getzola.org) website:

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

The default templates of this theme use Markdown files with filenames matching `*.dnr.md` (do-not-render) in the `content` directory as assets.
These should not be rendered by Zola, so you must also add the following to the `config.toml` file to exclude them:

```toml
ignored_content = ["*.dnr.md"]
```

## Configuration

The menu of the top navigation bar can be customized by setting the `extra.menu` variable:

```toml
[extra]
menu = [
    {url = "/blog/", name = "Blog"},
    {url = "/about/", name = "About"},
    {url = "/contact/", name = "Contact"},
]
```

The menu has a logo as branding on the left-hand side that can be customized with the following variable:

```toml
[extra]
branding_logo_path = "forge.svg"
```

The hero on the main page contains a logo and some introduction text.
These can likewise be customized by setting the following variables:

```toml
[extra]
hero_logo = "forge-inv.svg"
hero_content = "hero.dnr.md"
```

The `hero_content` will be rendered as Markdown using Zola's `markdown` filter, and the path must be relative to the site's `content` directory.

### Mathematics

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
This space should not be smaller than the actual required space as the rendered output is centered inside the block reserved by the shortcode and will expand if the reserved space is too small, resulting in the content layout shift we are trying to avoid.

```
{%/* katex(reserve="16em") */%}
// insert KaTeX code here
// 16 em vertical space will be reserved.
{%/* end */%}
```

## Future work

- More customization support.

## License

This theme is distributed under the terms of the MIT license (see the `LICENSE` file in the [repository](https://github.com/IvoWingelaar/forge-theme)).

export default function PrismStyles() {
  return (
    <style jsx global>
      {`
        .mdx-marker {
          background-color: #043359;
        }

        /* Prismjs */
        code[class*='language-'],
        pre[class*='language-'] {
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          color: #eee;
          background: #011627;
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-size: 1.5rem;
          font-weight: 100;
          line-height: 2rem;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        :not(pre) > code[class*='language-'] {
          white-space: normal;
          border-radius: 0.2em;
          padding: 0.1em;
        }

        pre[class*='language-'] {
          padding: 1em;
          overflow: auto;
          margin-top: 0.5em;
          margin-bottom: 0.5rem;
          border-radius: 0.5rem;
          margin-left: -2rem;
          margin-right: -2rem;
        }

        @media (min-width: 1024px) {
          pre[class*='language-'] {
            margin-left: -6rem;
            margin-right: -6rem;
          }
        }

        r.language-css > code,
        .language-sass > code,
        .language-scss > code {
          color: #fd9170;
        }

        [class*='language-'] .namespace {
          opacity: 0.7;
        }

        .token.atrule {
          color: #c792ea;
        }

        .token.attr-name {
          color: #c5a5c5;
        }

        .token.attr-value {
          color: #a5e844;
        }

        .token.attribute {
          color: #a5e844;
        }

        .token.boolean {
          color: #c792ea;
        }

        .token.builtin {
          color: #ffcb6b;
        }

        .token.cdata {
          color: #80cbc4;
        }

        .token.char {
          color: #80cbc4;
        }

        .token.class {
          color: #ffe2a9;
        }

        .token.class-name {
          color: #ffe2a9;
        }

        .token.comment {
          color: #616161;
        }

        .token.constant {
          color: #5a9bcf;
        }

        .token.deleted {
          color: #ff6666;
        }

        .token.doctype {
          color: #616161;
        }

        .token.entity {
          color: #ff6666;
        }

        .token.function {
          color: #79b6f2;
        }

        .token.hexcode {
          color: #f2ff00;
        }

        .token.id {
          color: #c792ea;
          font-weight: bold;
        }

        .token.important {
          color: #c792ea;
          font-weight: bold;
        }

        .token.inserted {
          color: #80cbc4;
        }

        .token.keyword {
          color: #c5a5c5;
        }

        .token.number {
          color: #5a9bcf;
        }

        .token.operator {
          color: #d7deea;
        }

        .token.prolog {
          color: #616161;
        }

        .token.property {
          color: #80cbc4;
        }

        .token.pseudo-class {
          color: #a5e844;
        }

        .token.pseudo-element {
          color: #a5e844;
        }

        .token.punctuation {
          color: #88c6be;
        }

        .token.regex {
          color: #f2ff00;
        }

        .token.selector {
          color: #ff6666;
        }

        .token.string {
          color: #8dc891;
        }

        .token.symbol {
          color: #c792ea;
        }

        .token.tag {
          color: #ffe2a9;
        }

        .token.tag script {
          color: white;
        }

        .token.unit {
          color: #fd9170;
        }

        .token.url {
          color: #ff6666;
        }

        .token.variable {
          color: #ff6666;
        }
      `}
    </style>
  )
}

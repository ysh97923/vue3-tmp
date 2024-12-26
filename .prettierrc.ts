/**
 * @see https://prettier.io/docs/en/options.html#print-width
 * @author ysh
 */
export default {
  /**
   * 换行宽度，当代码宽度达到多少时换行 
   * @default 80 
   * @type {number}
   */
  printWidth: 140,
  /**
   * 缩进的空格数量
   * @default 2
   * @type {number}
   */
  tabWidth: 2,
  /**
   * 是否使用制表符代替空格
   * @default false
   * @type {boolean}
   */
  useTabs: false,
  /**
   * 是否在代码块结尾加上分号
   * @default true
   * @type {boolean}
   */
  semi: true,
  /**
   * 是否使用单引号替代双引号
   * @default false
   * @type {boolean}
   */
  singleQuote: false,
  /**
   * 对象属性的引号处理
   * @default "as-needed"
   * @type {"as-needed"|"consistent"|"preserve"}
   */
  quoteProps: "as-needed",
  /**
   * jsx 中是否使用单引号替代双引号
   * @default false
   * @type {boolean}
   */
  jsxSingleQuote: false,
  /**
   * 末尾是否加上逗号
   * @default "es5"
   * @type {"es5"|"none"|"all"}
   */
  trailingComma: "es5",
  /**
   * 在对象、数组括号与文字之间加空格 "{foo: bar}"
   * @default true
   * @type {boolean}
   */
  bracketSpacing: true,
  /**
   * 把多行 html（html、jsx、vue、angular）元素的>放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）
   * @default false
   * @type {boolean}
   */
  bracketSameLine: false,
  /**
   * 当箭头函数只有一个参数是否加括号
   * @default "always"
   * @type {"always"|"avoid"}
   */
  arrowParens: "always",
  /**
   * 为 html、vue、angular 和 handlebars 指定全局空格敏感性
   * @default "css"
   * @type {"css"|"strict"|"ignore"}
   */
  htmlWhitespaceSensitivity: "strict",
  /**
   * 是否缩进 vue 文件中的<script>和<style>标记内的代码。有些人（比如 vue 的创建者）不使用缩进来保存缩进级别，但这可能会破坏编辑器中的代码折叠
   * @default "always"
   * @type {"always"|"avoid"}
   */
  vueIndentScriptAndStyle: false,
  /**
   * 文件结束符
   * @default "lf"
   * @type {"lf"|"crlf"|"cr"|"auto"}
   */
  endOfLine: "lf",
  // 是否使用根目录下的 editorconfig 配置文件
  useEditorConfig: false,
  /**
   * html\vue\jsx 每行只有单个属性
   * @default true
   * @type {boolean}
   */
  singleAttributePerLine: false,
  disableLanguages: "html"
};

// BootstrapのJavaScript側の機能を読み込む
import 'materialize-css';
// スタイルシートを読み込む
import './index.scss';
import './main_page.tag.html';
import "./add.tag.html";
import "./header.tag.html";


const obs = riot.observable()
const mixinObj = {"obs":obs}
riot.mixin(mixinObj)
riot.mount('*');
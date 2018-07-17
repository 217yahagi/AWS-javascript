// BootstrapのJavaScript側の機能を読み込む
import 'materialize-css';
// スタイルシートを読み込む
import './index.scss';

const obs = riot.observable()
const mixinObj = {"obs":obs}
riot.mixin(mixinObj)
riot.mount('*');
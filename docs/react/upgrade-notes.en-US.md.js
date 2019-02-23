webpackJsonp([43],{1268:function(n,a){n.exports={content:["article",["p","Here list some of main incompatible changes and recommended changes in the upgrade. See ",["a",{title:null,href:"/changelog"},"Changelog"]," for all changes."],["h3","3.0.0"],["p",["strong","3.0.0"]," needs to install ",["code","react-native@0.57.x"]],["ul",["li",["p","Change import to ",["code","import { Button, ... } from '@ant-design/react-native"]]],["li",["p","Change ",["code","LocaleProvider"]," to ",["code","Provider"]," and the Provider are required from now on."]],["li",["p","Provider"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// dynamic theme example ./rn-kitchen-sink/app.js</span>\n<span class="token keyword">const</span> RootNavigator <span class="token operator">=</span> <span class="token function">createStackNavigator</span><span class="token punctuation">(</span>scenes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    theme<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    currentTheme<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  changeTheme <span class="token operator">=</span> <span class="token punctuation">(</span>theme<span class="token punctuation">,</span> currentTheme<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> theme<span class="token punctuation">,</span> currentTheme <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> theme<span class="token punctuation">,</span> currentTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span> <span class="token attr-name">theme</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RootNavigator</span>\n          <span class="token attr-name">screenProps</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> changeTheme<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>changeTheme<span class="token punctuation">,</span> currentTheme <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","// dynamic theme example ./rn-kitchen-sink/app.js\nconst RootNavigator = createStackNavigator(scenes);\nclass App extends React.Component {\n  state = {\n    theme: null,\n    currentTheme: null,\n  };\n  changeTheme = (theme, currentTheme) => {\n    this.setState({ theme, currentTheme });\n  };\n  render() {\n    const { theme, currentTheme } = this.state;\n    return (\n      <Provider theme={theme}>\n        <RootNavigator\n          screenProps={{ changeTheme: this.changeTheme, currentTheme }}\n        />\n      </Provider>\n    );\n  }\n}"]]],["li",["p","Style Customization\n\xa0\xa0 - Configure the default global theme style via ",["code","Provider"],"\n\xa0\xa0 - Override local component styles by using styles of the component, without importing all styles of the current component\n\xa0\xa0 - There is no need to import a theme style file like 2.x. The current style file returns a function instead of an object."]],["li",["p",["code","Toast"]," has removed method ",["code","hide"]]],["li",["p","Change ",["code","Grid"]," property ",["code","onClick"]," to ",["code","onPress"]]],["li",["p","Link Icon Fonts"],["pre",{lang:"sh",highlighted:'react<span class="token operator">-</span>native link <span class="token variable">@ant</span><span class="token operator">-</span>design<span class="token operator">/</span>icons<span class="token operator">-</span>react<span class="token operator">-</span>native'},["code","react-native link @ant-design/icons-react-native"]]]],["h3","2.1.11 and before"],["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/upgrade-notes.en-US.md#1x--20"},"antd-mobile upgrade-notes"]]],meta:{order:4,title:"Upgrade",filename:"docs/react/upgrade-notes.en-US.md"},toc:["ul"]}}});
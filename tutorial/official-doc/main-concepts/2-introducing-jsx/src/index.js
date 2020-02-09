import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    className: 'user'
};

const element = (
    <div>
        <h1>
            Hello, {formatName(user)}!
        </h1>
        <h2>Good to see you here.</h2>
    </div>
);

// 文字列リテラルを属性として指定するために引用符を使用できる
//const element2 = <div tabIndex="0"></div>;

// 属性に JavaScript 式を埋め込むために中括弧を使用することもできる
//const element3 = <div class={user.className}></div>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
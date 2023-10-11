import React from "react";
import {
    Link
  } from "react-router-dom";
import Header from './Header';

/* 필요한 페이지 import방법 */
/* import 사용명 from 경로설정 */
/* <사용명 />

/* 링크 사용법 */
/* 문법 : <Link to="경로">링크명</Link> */

function Example() {
    return (
		<>
        <Header />
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>                
				<Link to="/product/1"><li>1번상품</li></Link>
				<Link to="/product/2"><li>2번상품</li></Link>
			</ul>
		</>
	);
}

export default Example;






/* 리액트 사용자 정의 함수 사용법*/
/*
function app() {                     function Header() {
  return (                              return (
    <div>                                 <div>
      <header>                              <header>
        <h1>안녕하세요</h1>                   <h1>안녕하세요</h1>
      </header>                             </header>
    </div>                                </div>
  )                                     )
}                                     }

default app;                          function app(){
                                        return <Header />
                                      }

                                      default app;
*/



/* props 사용법
/*
function Example(props) {
  return (
    <h1>{props.title}</h1> 
    {props.body}
  )
}

function app() {
  return (
    <Example title="abcd..." body="efgh.."></Example>
  )
}
*/


/* event 사용법
/*
function Header(props) {
  return (
    <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  )
}

function app() {
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        alert("!!!");
      }}></Hedaer>
    </div>
  )
}
*/


/* state 사용법 */
/*
import {useState} from 'react';

function Header(props) {
  return (
    <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  )
}

function app() {
  const [mode,setMode] = useState('WELCOME');

  let content = null;
  if(mode == 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode == 'READ') {
    content = <Article title="Read" body="Hello, Read"></Article>
  }

  return {
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Header title="WEB" onChangeMode={() => {
        setMode('READ');
      }}></Header>
      {content}
    </div>
  }
}
*/

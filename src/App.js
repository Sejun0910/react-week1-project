import { useState } from 'react';
import './App.css';
import Text from './components/Text';
import Button from './components/Button';

const App = () => {
  const [texts, setTexts] = useState([
    { id:1 , name:"롤 하기", content: "롤 존나 열심히 하기", isSuccess: false},
    { id:2 , name:"잠자기", content: "잠 존나 열심히 자기",  isSuccess: false}
  ]);

    // const [texts, setTexts] = useState();
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [isSuccess, setIsSuccess] = useState('');

    const nameChangeHandler = (event) => {
      setName(event.target.value);
    }

    const contentChangeHandler = (event) => {
      setContent(event.target.value);
    }

    // 추가 버튼 클릭
    const clickAddButtonHandler = (e) => {
      e.preventDefault();
      const newText = {
        id: texts.length + 1,
        name: name,
        content: content,
        isSuccess: false,
      };
      setTexts([...texts, newText])
      setName('')
      setContent('')
    };

    // 삭제 버튼 클릭
    const clickRemoveButtonHandler = (id) => {
      const newTexts = texts.filter((text) => text.id !== id);
      setTexts(newTexts);
    };

    // 완료 or 취소 버튼 클릭 (토글)
    const clickReviseButtonHandler = (id) => {
      const newTexts = texts.map((text)=> text.id === id ? {...text, isSuccess : !text.isSuccess} : text);
      setTexts(newTexts);
    }



  return (
    <div className='main'>
      <div className='Navbar'>
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form className='Formbar'>
        <div>
          <label className='Formbar_name1'>제목</label>
          <input value={name} onChange={nameChangeHandler} className='Formbar_input1'/>
          <label className='Formbar_name2'>내용</label>
          <input value={content} onChange={contentChangeHandler} className='Formbar_input2'/>
        </div>
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가하기</Button>
      </form>
      <div className='content'>
        <h2>끝내고 놀자 세준아..</h2>
        <div className='content_main'>
          {
            texts.filter((item)=> !item.isSuccess).map((progressItem) => (
              <Text
              key={progressItem.id}
              item={progressItem}
              removeFunction={clickRemoveButtonHandler}
              reviseFunction={clickReviseButtonHandler}
              buttonTitle = {'완료'}
              />))
            }
        </div>
        <h2>끝냈다~!@@!!~!!</h2>
        <div className='content_main'>
        {
          texts.filter((item)=> item.isSuccess).map((progressItem) => (
            <Text
            key={progressItem.id}
            item={progressItem}
            removeFunction={clickRemoveButtonHandler}
            reviseFunction={clickReviseButtonHandler}
            buttonTitle = {'취소'}
            />))
            }
        </div>
      </div>
    </div>
  );
}

export default App;

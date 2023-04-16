const Text = ({item, removeFunction, reviseFunction, buttonTitle}) => {
    return (
        <div key={item.id} className='content_box'>
            <div>
                <h2 className='content_name'>{item.name}</h2>
                <div>{item.content}</div>
            </div>
            <div className='content_btn'>
                <button onClick={()=>removeFunction(item.id)} className='delete_btn'>삭제하기</button>
                <button onClick={()=>reviseFunction(item.id)} className='complete_btn'>{buttonTitle}</button>
            </div>
        </div>
    );
};

export default Text;
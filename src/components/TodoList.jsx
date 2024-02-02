import PropTypes from 'prop-types';
 function TodoList(props) {
    const {name, number,order,Lastname,done, edit,favourite,deleteBtn}=props;
    
  return (
    <>
    <div className="alert alert-primary d-flex justify-content-between align-items-center">
        <div>
        <h3>{order}. {name} {Lastname}</h3>
        <p>{number}</p>
        </div>
        <div>
        <button className="btn btn-success me-3" onClick={()=>favourite(order-1)}>Favourite</button>
        <button className='btn btn-primary me-3' onClick={()=>edit(order-1)}>Edit</button>
        <button className="btn btn-danger" onClick={()=>deleteBtn(order-1)}>Delete</button>
        </div>
        
    </div>
    </>
  )
}

TodoList.propTypes={
    name:PropTypes.string,
    done:PropTypes.bool,
    Lastname:PropTypes.string,
    number:PropTypes.string,
    order:PropTypes.number,
    favourite:PropTypes.func,
    deleteBtn:PropTypes.func,
    edit:PropTypes.func,
};

export default TodoList

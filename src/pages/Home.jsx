import { useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TodoList from '../components/TodoList'


 function Home() {
    const NameInpuRef=useRef();
    const LastNameInputRef=useRef();
    const NumberInputRef=useRef();
    const [currentData,setCurrentData]=useState({
      name:'',Lastname:'',number:0,done:false,edit:false
    })

    const [todos,setTodos]=useState([
        {name:"Samat", Lastname:"Hakimov", number:"+998934848444", done:false},
        {name:"Samir", Lastname:"Hakimov", number:"+998933248444",done:false},
        {name:"Hamat", Lastname:"Hakimov", number:"+998934848444",done:false},
        {name:"Samut", Lastname:"Hakimov", number:"+998933248444",done:false},
      ]);
      


     const submit=(e)=>{
        e.preventDefault();
        let todo ={
            name:NameInpuRef.current.value.trim(),
            Lastname:LastNameInputRef.current.value,
            number:NumberInputRef.current.value,
            done:false,
        };
        if(
          NameInpuRef.current.value.length!=0
        ){
          const newTodos=[todo,...todos]
        setTodos(newTodos);
        setCurrentData({name:'',Lastname:'',number:'',done:false})
        }
        
     }


   
     const deleteBtn=(i)=>{
      let newArray=todos.filter((element,index)=>{
        if(
         i===index){
           return false
         }else{
           return true
         }
        
      })
       setTodos(newArray)
    }

    const edit=(i)=>{
      setCurrentData({...todos[i],edit:true})
     
    }
     

     const favourite=(i)=>{
       let newArray=todos.map((element,index)=>{
         if(
          i===index){
            return{
             ...element,
             done:true
            }
          }else{
            return element
          }
         
       })
        setTodos(newArray)
     }

      const mappingTodos=todos.map((todo,i)=>(
        <TodoList order={i+1} edit={edit} deleteBtn={deleteBtn} favourite={favourite} key={i} {...todo}/>
    ))
    const doneTodos=todos
    .filter(todo=>todo.done===true)
    .map((todo,i)=>(<TodoList order={i+1} edit={edit} deleteBtn={deleteBtn} favourite={favourite} key={i} {...todo}/>
    ))
  return (
   <section>
    <div className="container">
    <h1 className='text-center my-3'>TodoItem</h1>
    <form className='form' onSubmit={submit}>
    <label >First name
    <input onChange={(e)=>setCurrentData({...currentData,name:e.target.value})} value={currentData.name} ref={NameInpuRef} type="text" className='form-control' placeholder='First name' />
    </label>
    <label > Last name (Optional)
    <input onChange={(e)=>setCurrentData({...currentData,Lastname:e.target.value})} value={currentData.Lastname} ref={LastNameInputRef} type="text" className='form-control'placeholder='Last name' />
    </label>
   <label >Phone number
   <input onChange={(e)=>setCurrentData({...currentData,number:e.target.value})} value={currentData.number} ref={NumberInputRef} type="number" className='form-control' placeholder='Phone number' />
   </label>
   <button  className='btn btn-primary'>Save contact</button>
    </form>

    <Tabs
    variant='pills'
      defaultActiveKey="home"
      transition={true}
      id="todo"
      className="mb-3 pt-3"
      justify
    >
      <Tab eventKey="home" title="All">
      {mappingTodos}
      </Tab>
      <Tab eventKey="profile" title="Favourites">
        {doneTodos}
      </Tab>
    </Tabs>
    </div>
   </section>
  )
}
export default Home

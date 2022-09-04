import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Head from './components/Head';
import ChangeNum from './components/ChangeNum';
import DisplayData from './components/DisplayData';
import UpdateName from './components/UpdateName';

function App(){
  const [name,setName] = useState("Sean")
  const [title,setTitle] = useState("")
  const [num, setNum] = useState(1)
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [price,setPrice] = useState(0);
  const [viewNameChange,setViewNameChange] = useState(false)
  const [rating,setRating] = useState("")

  const incNum = () => {
    let updNum = num + 1;
    setNum(updNum);
  }

  const decNum = () => {
    if(num > 1){
    let updNum = num - 1
    setNum(updNum);
    }
  }

  const onChange = (e) => {
    setName(e.target.value)
  }

  const viewChange = () => {
    if(viewNameChange){
    setViewNameChange(false)
    console.log(viewNameChange)
    }else{
      setViewNameChange(true)
      console.log(viewNameChange)
    }
  }

  useEffect(()=>{
    async function getData(){
    try{  
    const res = await axios.get(`https://fakestoreapi.com/products/${num}`)
    console.log(res);
    setTitle(res.data.title);
    setImage(res.data.image);
    setDescription(res.data.description);
    setPrice(res.data.price);
    setRating(res.data.rating.rate)
    }catch(err){
      alert("can't find requested data", err);
    }
    }
    getData();
  },[num])



  return(
    <div className='App'>
      <Head name={name}/>
      <DisplayData title={title} image={image} description={description} price={price} rating={rating}/>
      <ChangeNum num={num} incNum={incNum} decNum={decNum}/>
      <br></br>
      <UpdateName onChange={onChange} onClick={viewChange} viewNameChange={viewNameChange} name={name}/>
    </div>
  )
}

export default App;


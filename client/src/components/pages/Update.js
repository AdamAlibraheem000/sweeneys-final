import React, {useState, useEffect} from 'react'
import axios from 'axios';
import spinner from '../../imgs/spinner.gif'

function Update() {
  const[title, setTitle] = useState('');
  const[desc, setDesc] = useState('');
  const[price, setPrice] = useState('');

  const [features, setFeatures] = useState([]);

  useEffect(()=> {
      axios.get('/features')
    .then(res => setFeatures(res.data))
    .catch(error => console.log(error));
    
  },[features])

  // Delete feature by ID
  const deleteFeature = id  => {
    axios.delete(`/features/${id}`)
    .then(res => console.log(res.data))
    
  }

  const changeOnClick = e => {
    e.preventDefault();

    // Get Values from form
    const features ={
      title,
      desc,
      price
    }

    // Clear form values
    setTitle('')
    setDesc('')
    setPrice('')

    // Send to database
    axios.post("/features/add", features)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }



  return (
      <div className="update-container">
      <section className='update-form-styling'>
        <h1>Add New Feature</h1>
    <form  onSubmit={changeOnClick} encType='multipart/form-data'>
    <div className="form-group">
    <label htmlFor="title">Title</label>
    <input 
    type="text" 
    value={title}
    className="form-control" 
    placeholder="Enter Title"
    onChange={e => setTitle(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor='desc'>Desc</label>
    <textarea 
    className="form-control" 
    rows="3"
    value={desc}
    placeholder="Enter Description"
    onChange={e => setDesc(e.target.value)}
    ></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="price">Price</label>
    <input 
    type="text"
    value={price} 
    className="form-control"  
    placeholder="Enter Price"
    onChange={e => setPrice(e.target.value)}
    />
  </div>
  
  
  <button type="submit" className="btn btn-primary">Post Feature</button>
</form>
</section>
<section className='update-list'>
       {!features.length ? (
       <img src={spinner} alt="loading"/>
       ) : (
    features.map((feature, key) => (
        <div className='feature-border' key={key}>
        <p >{feature.title}</p>
        <p >{feature.desc}</p>
        <p >
            {feature.price}
        </p>
        <button onClick={() => deleteFeature(feature._id)}>Delete</button>
        
        </div>
    )))}  
        </section>

</div>

  )
}

export default Update;
import React, { useState } from 'react'
import category from '../data/category';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const InsertNews = () => {
  const [title, setTitle] = useState("");
  const [categoryData, setCategoryData] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState();
  const [imgurl,setImgurl]=useState("");


  const handleimgupload = () => {
     

    const storage = getStorage();

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `'images/' ${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          
          // handleSubmity();

        })
      }
    );

  }
  const handlesubmit=()=>{
     console.log("i am finel")
  }

  return (
    <div className='flex justify-center items-center p-3'>
      <div className='w-1/3 bg-slate-400 p-3 rounded-lg'>
        <h1 className='text-black font-bold text-2xl cursor-pointer'>Insert News</h1>
        <div className='w-full flex'>
          <div className='mb-3 flex flex-col w-1/2 '>
            <label htmlFor=''>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border rounded-lg px-3 py-2' />
          </div>
          <div className='mb-3 flex flex-col w-1/2 ml-2'>
            <label htmlFor=''>Image</label>
            <div className="flex space-x-2">
              <input type="file"  accept='image/*' onChange={(e) => setImage(e.target.files[0])} className='border rounded-lg px-3 py-2' />
              <button onClick={()=>handleimgupload()} className='bg-green-400 hover:bg-green-500 rounded-lg px-2 py-3' > upload</button>
            </div>
          </div>
        </div>
        <div className='mb-3 flex flex-col'>
          <label htmlFor=''>Category</label>
          <select value={categoryData} onChange={(e) => setCategoryData(e.target.value)} type="text" className='border rounded-lg px-3 py-2'>
            {
              category.map((value, index) => (
                <option key={index} value={value.id}>{value.name}</option>
              ))
            }
          </select>
        </div>
        <div className='mb-3 flex flex-col'>
          <label htmlFor=''>Content</label>
          <textarea rows={8} type="text" value={content} onChange={(e) => setContent(e.target.value)} className='border rounded-lg px-3 py-2'></textarea>
        </div>
        <div className='mb-3'>
          <button onClick={handlesubmit} type='button' className='bg-teal-900 text-white px-2 py-1 text-xl rounded-lg'>Insert News</button>
        </div>
      </div>
    </div>
  )
}

export default InsertNews

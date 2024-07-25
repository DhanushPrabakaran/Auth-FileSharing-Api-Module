import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  address: string;
  email: string;
  file: File | null;
}

const FileUploadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    email: '',
    file: null
  });
  const[pending ,setPending]=useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handleChanges called")
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handleFile called")
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData(prevState => ({
        ...prevState,
        file: file
      }));
    }
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleSubmit called")
    const data = new FormData();
    data.append('name', formData.name);
    data.append('address', formData.address);
    data.append('email', formData.email);
    if (formData.file) {
      data.append('file', formData.file);
    }

    try {
      const response = await fetch('http://localhost:7096/submit', {
        method: 'POST',
        body: data
      });
      const result = await response.text();
      console.log(result);
      setPending(true)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    {pending?"submited":"not submited"}
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label><br />
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </label><br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label><br />
      <label>
        Upload File:
        <input type="file" name="file" onChange={handleFileChange} required />
      </label><br />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default FileUploadForm;

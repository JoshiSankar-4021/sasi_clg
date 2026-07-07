import {useState} from "react"
function Forms(){
    const [formdata, setFormdata]=useState({
        email:"",
        full_name:""
    })

    function handleChange(e){
        const {name,value} = e.target;
        setFormdata({
            ...formdata,
            [name]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formdata)
    }

    return(
        <div>
            <form>
                <label>email</label>
                <input type="email" name="email" value={formdata.email} onChange={handleChange}/><br/>
                <label>full name</label>
                <input type="text" name="full_name" value={formdata.full_name} onChange={handleChange}/><br/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Forms
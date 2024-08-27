const CustomForm=()=>{
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("Clicked")
    }
    return(
        <form>
            <input type="text" placeholder="Title" id="title" />
            <input type="text" placeholder="Description" id="text" />
            <input onClick={submitHandler} type="submit" />
        </form>
    )
}
export default CustomForm
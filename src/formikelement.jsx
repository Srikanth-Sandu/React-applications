import { Formik } from "formik";

function Cusform() {

    return (<Formik
        initialValues={{ 'fn': '', 'ln': '', 'age': '' }}
        onSubmit={(fv) => { console.log(fv) }}
        >
        {(form1) => {
            return (
                <><h1>Customer form</h1>
                <form onSubmit={form1.handleSubmit}>
                <input type="text" placeholder="Firstname" name="fn" onChange={form1.handleChange} /><br/>
                <input type="text" placeholder="Lasstname" name="ln" onChange={form1.handleChange} /><br/>
                <input type="text" placeholder="Age" name="age" onChange={form1.handleChange} /><br/>
                <button type="submit">Save</button>
            </form>
                </>
            )
        }}

    </Formik>)
}
export default Cusform
import { Formik } from "formik";

function Cusform() {

    return (<Formik
        initialValues={{ 'fn': '', 'ln': '', 'age': '' }}
        onSubmit={(fv) => { console.log(fv) }}
        >
        <h1>Customer Form</h1>
        {(form1) => {
            return (<form onSubmit={form1.handleSubmit}>
                <input type="text" placeholder="Firstname" name="fn" onChange={form1.handleChange} />
                <input type="text" placeholder="Lasstname" name="ln" onChange={form1.handleChange} />
                <input type="text" placeholder="Age" name="age" onChange={form1.handleChange} />
                <button type="submit">Save</button>
            </form>)
        }}

    </Formik>)
}
export default Cusform
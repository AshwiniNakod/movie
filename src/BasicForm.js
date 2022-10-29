import { Formik, useFormik } from "formik"
import * as yup from "yup"


const formValidationSchema = yup.object({
    email: yup.string().min(5).email().required(),
    password:yup.string().min(8,"need long password").max(12).required("why not fill this")
})
export function BasicForm(){
    const {handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
        initialValues: {email: "ashu" ,password:"abc"},
        validationSchema : formValidationSchema,
        onSubmit:(values)=>{console.log('onSubmit',values)}
    })
    return(
        <form onSubmit={handleSubmit}>

        <div>
            <input 
                type="email" 
                placeholder="email" 
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur = {handleBlur}
                />
                {touched.email && errors.email ? errors.email : ""}


         <input 
            type="password" 
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur = {handleBlur}
                />
            {touched.password && errors.password ? errors.password : ""}
                {/* {formik.errors.password} */}



            <button type="submit">Submit</button>

            {/* <p>Value:{JSON.stringify(formik.values)}</p>
            <p>Error:{JSON.stringify(formik.errors)}</p>
            <p>Error:{JSON.stringify(formik.touched)}</p>
             */}
            

        </div>
    </form>
    )
}
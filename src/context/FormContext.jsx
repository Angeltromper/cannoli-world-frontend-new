import React from 'react';
import { FormProvider, useForm } from "react-hook-form";


function FormContextProvider(props) {
    const data = useForm();

    return (
       <FormProvider

           {...data}>
           {props.children}

       </FormProvider>
    );
}


export default  FormContextProvider;

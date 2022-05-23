import { useState } from "react";

export default function useForm(getFreshModelObject) {
    const [value,setValue] = useState(getFreshModelObject());
    const [errors,setErrors] = useState({});

    const handleInputChange = e => {

        const {name,value} = e.target
        setValue({
            ... value,
            [name] : value={}
        })
    }

  return (
    value,
    setValue,
    errors,
    setErrors,
    handleInputChange
  )
}

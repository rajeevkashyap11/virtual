import {
    useState
} from 'react';

export const useForm = (callback, initialState = {}) => {

    const [values, setValues] = useState(initialState);
    const onChange = (event) => {
       
        const target = event.target;
        setValues({
            ...values,
            [target.name]: target.value
        }); 
    };

    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    return {
        onChange,
        onSubmit,
        values,
        setValues
    };
};
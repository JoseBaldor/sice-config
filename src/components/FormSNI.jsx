import { useForm } from 'react-hook-form';
import s from './Investigadores.module.css'

const FormSNI = () =>{

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return(
        <form className={s.formulario} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Clave:</label>
                <input
                className={s.input_clave}
                type="text"
                {...register("claveSni", { required: true, minLength: 1 })}
                />
                <div>
                    {errors.claveSni?.type === "required" && (
                        <small className={s.error}>La Clave no puede estar vacía...</small>
                    )}
                    {errors.claveSni?.type === "minLength" && (
                        <small className={s.error}>
                        La Clave debe tener como minimo 1 caracteres...
                        </small>
                    )}
                </div>
            </div>
            <div></div>
            <div>
                <label>Descripción:</label>
                <input
                placeholder="Descripción Nivel..."
                className={s.input_description}
                type="text"
                {...register("descripcionSni", { required: true, minLength: 5 })}
                />
                <div>
                    {errors.descripcionSni?.type === "required" && (
                        <small className={s.error}>
                        La Descipción no puede estar vacía...
                        </small>
                    )}
                    {errors.descripcionSni?.type === "minLength" && (
                        <small className={s.error}>
                        La Descripción debe tener como minimo 5 caracteres...
                        </small>
                    )}
                </div>
            </div>
            <div className={s.submit}>
                <div>
                    <button className={s.button} type="submit">
                        Guardar
                    </button>
                </div>
            </div>

        </form>
    );
}

export default FormSNI;